import axios from 'axios'

let baseURL = 'https://www.fastmock.site/mock/19baedd0843b7496ea4288893c38ae7d/api'

const service = axios.create({
  baseURL: baseURL,
  timeout: 3000
})

service.interceptors.response.use(
  response => {
    // console.log(response, "response");
    return Promise.resolve(response.data.data)
  }
)

export default service