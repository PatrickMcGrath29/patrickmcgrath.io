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
        <h1><span class="heading-bracket left">[</span>About<span class="heading-bracket right">]</span></h1>
        <p>
          I am a student at Northeastern University pursuing a <strong>Bachelor of Science in Computer Science</strong>. I'm an engineer and entrepreneur at heart, driven by a keen desire to change the world through innovative problem solving. I appreciate every opportunity to disrupt the status quo in favor of progress.
        </p>
        <p>
          I'm the Vice President and Lead Developer at <a href="http://acm.ccs.neu.edu">NUACM</a> (Northeastern University Association of Computing Machinery), im on the executive board of Agape Christian Fellowship, and I help lead a local service group called <a href="https://www.facebook.com/SOMAserviceboston/">SOMA Service Boston</a>.
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
