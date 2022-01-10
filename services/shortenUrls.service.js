import axios from '@/plugins/axios'

const RESOURCE_NAME = 'alias'
const DEFAULT_TIMEOUT = 5000

export default {
  create(name, url) {
    return axios.post(
      `${RESOURCE_NAME}/`,
      {
        url,
        name
      },
      { timeout: DEFAULT_TIMEOUT }
    )
  },
  get(name) {
    return axios.get(`${RESOURCE_NAME}/${name}`, { timeout: DEFAULT_TIMEOUT })
  },
  delete(name, secretKey) {
    return axios.delete(`${RESOURCE_NAME}/`, {
      data: {
        name,
        secretKey
      },
      timeout: DEFAULT_TIMEOUT
    })
  }
}
