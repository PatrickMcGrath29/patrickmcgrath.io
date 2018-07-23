<template>
  <default-template>
    <div class="container">
      <div class="content-section">
        <h1><span class="heading-bracket left">[</span>Blog<span class="heading-bracket right">]</span></h1>
        <div class="blog-groups">
          <BlogGroupCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
        </div>
        <small> &lt;3 ButterCMS! </small>
      </div>
    </div>
  </default-template>
</template>

<script>
import DefaultTemplate from '@/templates/Default'
import BlogGroupCard from '@/components/BlogGroupCard'
import { butter } from '@/cms'

export default {
  name: 'blog-index',
  components: {
    DefaultTemplate,
    BlogGroupCard
  },
  data () {
    return {
      blogs: []
    }
  },
  mounted () {
    this.getBlogs()
  },
  methods: {
    async getBlogs () {
      const blogs = await butter.page.list('blog_group')
      this.blogs = blogs.data.data
    }
  }
}
</script>
<style lang="sass">
@import "../../assets/styles/pages/blog-index.scss";
</style>
