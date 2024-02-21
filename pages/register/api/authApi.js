import ApiService from '../../../service/ApiService'

const path = '/users'

export async function register(data, config = {}) {
  const api = new ApiService()
  return api.post(`${path}/signup`, data, config)
}