<template>
  <default-template>
    <div class="container">
      <div class="not-found-body">
        <h1>You're Lost</h1>
        <img src="@/assets/images/pennywise.png">
        <h2 class="spooky-scarry">Tasty Tasty Beautiful Fear</h2>
      </div>
    </div>
  </default-template>
</template>

<script>
import DefaultTemplate from '@/templates/Default'

export default {
  name: '404-not-found',
  components: {
    DefaultTemplate
  }
}
</script>
<style lang="sass">
@import "../assets/styles/pages/_404.scss";
</style>
