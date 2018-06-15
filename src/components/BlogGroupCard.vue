<template>
  <div class="blog-group-card">
    <img :src="blog.fields.primary_image">
    <div class="blog-group-card__date">
      <span class="blog-group-card__date-day"> {{ parseDate().day }} </span>
      <span class="blog-group-card__date-month"> {{ parseDate().month }} </span>
    </div>
    <div class="blog-group-card__text">
      <h3> {{ blog.fields.title }} </h3>
      <p> {{ blog.fields.blog_group_description}} </p>
    </div>
    <div class="hover"><RocketIcon /></div>
  </div>
</template>

<script>
import RocketIcon from '@/assets/images/rocket.svg'

export default {
  name: 'blog-group-card',
  components: {
    RocketIcon
  },
  props: {
    blog: Object
  },
  methods: {
    parseDate () {
      const date = new Date(this.blog.fields.date)
      return { day: date.getDate(), month: date.toLocaleString('en-us', { month: 'long' }) }
    }
  }
}
</script>
<style lang="sass">
@import "../assets/styles/components/_blog-group-card.scss";
</style>
