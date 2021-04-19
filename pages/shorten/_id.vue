<template>
  <div></div>
</template>

<script>
import { Loading } from 'element-ui'
import ShortenUrlsService from '@/services/shortenUrls.service'

export default {
  name: 'ShortenRedirect',
  layout: 'blank',
  data: () => {
    return {
      loadingService: null
    }
  },
  head() {
    return {
      title: 'Redirecting...'
    }
  },
  mounted() {
    this.loadingService = Loading.service({
      lock: true,
      text: 'Redirecting',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    ShortenUrlsService.get(this.$route.params.id)
      .then((response) => {
        if (response.data.errorMessage) {
          this.notifyAndClose()
        } else {
          window.location.href = response.data.full_url
        }
      })
      .catch(() => {
        this.notifyAndClose()
      })
  },
  methods: {
    notifyAndClose() {
      this.loadingService.text = 'No Alias Found. Taking you back...'
      this.loadingService.spinner = 'el-icon-error'

      setTimeout(() => {
        this.loadingService.close()
        this.$router.push('/shorten')
      }, 3000)
    }
  }
}
</script>
