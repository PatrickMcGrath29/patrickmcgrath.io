import Axios from 'axios'

const RESOURCE_NAME = '/alias'
const DEFAULT_TIMEOUT = 5000

export default {
  create (data) {
    return Axios.post(RESOURCE_NAME, data, { timeout: DEFAULT_TIMEOUT })
  },
  get (alias) {
    return Axios.get(`${RESOURCE_NAME}/${alias}`, { timeout: DEFAULT_TIMEOUT })
  },
  delete (alias, secretId) {
    return Axios.delete(`${RESOURCE_NAME}/${alias}`, {
      params: {
        secret_id: secretId
      },
      timeout: DEFAULT_TIMEOUT
    })
  }
}
