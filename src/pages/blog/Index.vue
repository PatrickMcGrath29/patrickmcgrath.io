<template>
  <default-template>
    <div class="container">
      <div class="content-section">
        <h1><span class="heading-bracket left">[</span>Blog<span class="heading-bracket right">]</span></h1>
      </div>
    </div>
  </default-template>
</template>

<script>
import DefaultTemplate from '@/templates/Default'
import { butter } from '@/cms'

export default {
  name: 'home-index',
  components: {
    DefaultTemplate
  },
  methods: {
    fetchPosts () {
      butter.post.list({
        page: 1,
        page_size: 10
      }).then((res) => {
        console.log('Content from ButterCMS')
        console.log(res)
      })
    }
  },
  created () {
    this.fetchPosts()
  }
}
</script>
<style lang="sass">
@import "../../assets/styles/pages/_home-index.scss";
</style>
