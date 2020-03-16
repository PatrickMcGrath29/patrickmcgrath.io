<script>
import { Loading } from 'element-ui'
import axios from 'axios'

export default {
  name: 'shorten-redirect',
  data: () => {
    return {
      base_endpoint: `https://urls.patrickmcgrath.io/alias`,
      loading_service: null
    }
  },
  mounted () {
    this.loading_service = Loading.service({
      lock: true,
      text: 'Redirecting',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    axios.get(`${this.base_endpoint}/${this.$route.params.alias}`, { timeout: 5000 }).then(response => {
      if (response.data.errorMessage) {
        this.notifyAndClose()
      } else {
        window.location.href = response.data.full_url
      }
    }).catch(() => {
      this.notifyAndClose()
    })
  },
  methods: {
    notifyAndClose () {
      this.loading_service.text = 'No Alias Found. Taking you back...'
      this.loading_service.spinner = 'el-icon-error'

      setTimeout(() => {
        this.loading_service.close()
        this.$router.push('/shorten')
      }, 3000)
    }
  }
}
</script>
<style lang="sass"></style>
