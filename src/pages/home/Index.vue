<template>
  <default-template>
    <div class="hero">
      <div class="hero-image">
        <svg viewBox="0 0 960 100" id="surveyCompletedText" style="/* display:none; */">
            <symbol id="s-text">
              <text text-anchor="middle" x="50%" y="80%">patrickmcgrath.io</text>
            </symbol>
            <g class="g-ants">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s-text" class="text-copy"></use>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s-text" class="text-copy"></use>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s-text" class="text-copy"></use>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s-text" class="text-copy"></use>
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s-text" class="text-copy"></use>
            </g>
        </svg>
      </div>
    </div>
    <div class="container">
      <div class="homepage-intro">
        <h2>About</h2>
        <p>
          In convallis diam et nibh eleifend, vitae elementum libero varius. Morbi vel eleifend libero, ac feugiat ipsum. Duis ut quam dapibus, finibus augue sed, consequat turpis. In sollicitudin rutrum magna, vel cursus mauris faucibus quis. Quisque ultrices dui porta, aliquet velit vel, tristique velit.
        </p>
        <h2>My favorite API's</h2>
        <p>
          In convallis diam et nibh eleifend, vitae elementum libero varius. Morbi vel eleifend libero, ac feugiat ipsum. Duis ut quam dapibus, finibus augue sed, consequat turpis. In sollicitudin rutrum magna, vel cursus mauris faucibus quis. Quisque ultrices dui porta, aliquet velit vel, tristique velit.
        </p>
      </div>
    </div>
  </default-template>
</template>

<script>
import DefaultTemplate from '@/templates/Default'

export default {
  name: 'home-index',
  components: {
    DefaultTemplate
  }
}
</script>
<style lang="sass">
@import "../../assets/styles/pages/_home-index.scss";
</style>
