import axios from '@/plugins/axios'

const RESOURCE_NAME = '/alias'
const DEFAULT_TIMEOUT = 5000

export default {
  create(alias, url) {
    return axios.post(
      RESOURCE_NAME,
      {
        full_url: url,
        alias
      },
      { timeout: DEFAULT_TIMEOUT }
    )
  },
  get(alias) {
    return axios.get(`${RESOURCE_NAME}/${alias}`, { timeout: DEFAULT_TIMEOUT })
  },
  delete(alias, secretId) {
    return axios.delete(`${RESOURCE_NAME}/${alias}`, {
      params: {
        secret_id: secretId
      },
      timeout: DEFAULT_TIMEOUT
    })
  }
}
