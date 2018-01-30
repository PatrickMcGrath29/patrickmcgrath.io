import Api from '@/services/Api'

export default {
  fetchHomeContent () {
    return Api().get('/')
  }
}
