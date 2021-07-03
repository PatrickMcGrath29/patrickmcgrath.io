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
  delete(name, secretId) {
    return axios.delete(`${RESOURCE_NAME}/`, {
      data: {
        name,
        secret_key: secretId
      },
      timeout: DEFAULT_TIMEOUT
    })
  }
}
