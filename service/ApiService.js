import axios from "axios";
import { responseHandler } from "./ApiResponsehandler";

const backendApiUrl = 'http://192.168.100.5:8192/api/payer/claimconnect'

// api({
//   baseURL: 'http://localhost:3000/',
//   withCredentials: true,
//   headers: {
//     "Content-Type": 'application/json',
//   }
// })
// .then(res => {
//   console.log(res)
// })
// .catch(err => {
//   console.log(err.message)
// })

export default class ApiService {
  /**
   * 
   * @param {string} url 
   * @param {Object} config 
   * @returns 
   */
  
  api
  _initApi(baseURL) {
    this.api = axios.create({
      // withCredentials: true,
      baseURL,
      // timeout: 3000,
      validateStatus: (status) => {
        return status >= 200 && status < 300;
      },
      headers: {
        "Content-Type": "application/json",
      },
    }); 
  }

  constructor(baseURL) {
    if(baseURL) this._initApi(baseURL)
    else this._initApi(backendApiUrl)
  }

  async get(url, config = {}) {
    return await responseHandler(
      this.api({
        ...config,
        url,
        method: "get",
      })
    );
  }

  async post(url, data, config = {}) {
    return await responseHandler(
      this.api({
        ...config,
        url,
        data,
        method: "post",
      })
    );
  }

  async put(url, data, config = {}) {
    return await responseHandler(
      this.api({
        ...config,
        url,
        data,
        method: "put",
      })
    );
  }

  async patch(url, data, config = {}) {
    return await responseHandler(
      this.api({
        ...config,
        url,
        data,
        method: "patch",
      })
    );
  }

  async delete(url, config = {}) {
    return await responseHandler(
      this.api({
        ...config,
        url,
        method: "delete",
      })
    );
  }

  addMultipartHeader() {
    this.api.defaults.headers.common['Content-Type'] = 'multipart/form-data';
    return this;
  }

  addAuthenticationHeader() {
    this.api.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXllckBnbWFpbC5jb20iLCJpYXQiOjE3MDYyNzM5NzgsImV4cCI6ODY0MDAxNzA2MjczOTc4fQ.8aS0uHa05wOJUvaIahvdzl_dsbxdL4ssb2VuUHFjXEM`;
    return this
  }
}
