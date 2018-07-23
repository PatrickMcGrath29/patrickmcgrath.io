<template>
  <div class="blog-post">
    <h3> {{ blog.fields.title }} </h3>
    <div class="blog-post__body">
      {{ blog.fields.body }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog-post',
  props: {
    blog: Object
  }
}
</script>
<style lang="sass">
@import "../assets/styles/components/_blog-group-card.scss";
</style>
