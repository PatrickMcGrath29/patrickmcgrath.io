import Api from '@/services/Api'

export default {
  fetchProjects () {
    return Api().get('projects')
  },
  addProject (params) {
    return Api().post('projects', params)
  }
}
