<template>
  <default-template>
    <div class="container">
      <div class="content-section">
        <h1><span class="heading-bracket left">[</span> {{ Blog.title }}<span class="heading-bracket right">]</span></h1>
        <div class="blog-posts">
          <BlogPost v-for="post in posts" :key="post.id" :blog="post" />
        </div>
        <small> &lt;3 ButterCMS! </small>
      </div>
    </div>
  </default-template>
</template>

<script>
import DefaultTemplate from '@/templates/Default'
import BlogPost from '@/components/BlogPost'

import { butter } from '@/cms'

export default {
  name: 'blog-show',
  components: {
    DefaultTemplate,
    BlogPost
  },
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const posts = await butter.page.list('blog_group')
      this.posts = posts.data.data
    }
  }
}
</script>
<style lang="sass">
@import "../../assets/styles/pages/blog-show.scss";
</style>
