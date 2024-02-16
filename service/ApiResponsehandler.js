export async function responseHandler(request) {
  if(!(request instanceof Promise)) return 

  return request
    .then((res) => {
      return {
        status: res.status,
        data: res.data,
        success: true,
        error: "",
      };
    })
    .catch((error) => {
      console.log(error)
      // this is true when the request gets to the server
      // and there is some error on the server
      if (error.response) {
        return {
          success: false,
          data: null,
          status: error.response.status,
          error: error.response.data?.message || "server error response"
        };
      }
      // this is true when the request cant get to the server
      // eg. connection error
      if (error.request) {
        return {
          success: false,
          data: null,
          status: error.code,
          error: "somme error message."
        };
      }
    });
}
