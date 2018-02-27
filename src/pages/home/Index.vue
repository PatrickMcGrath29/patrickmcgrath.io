<template>
  <default-template>
    <div class="hero">
      <div class="hero-image">
      </div>
    </div>
    <div class="container">
      <div class="homepage-intro content-section">
        <h1><span class="heading-bracket left">[</span>About<span class="heading-bracket right">]</span></h1>
        <p>
          I am a student at Northeastern University pursuing a <strong>Bachelor of Science in Computer Science</strong>. I'm an engineer and entrepreneur at heart, driven by a keen desire to change the world through innovative problem solving. I appreciate every opportunity to disrupt the status quo in favor of progress.
        </p>
        <p>
          I'm the Vice President and Lead Developer at <a href="http://acm.ccs.neu.edu">NUACM</a> (Northeastern University Association of Computing Machinery), im on the executive board of Agape Christian Fellowship, and I help lead a local service group called <a href="https://www.facebook.com/SOMAserviceboston/">SOMA Service Boston</a>.
        </p>
      </div>
      <div class="content-section">
        <h1><span class="heading-bracket left">[</span>Say Hi<span class="heading-bracket right">]</span></h1>
        <code class="email">hello@patrickmcgrath.io</code>
      </div>
    </div>
  </default-template>
</template>

<script>
import DefaultTemplate from '@/templates/Default'
import HomeWorkspace from '@/components/HomeWorkspace'

export default {
  name: 'home-index',
  components: {
    DefaultTemplate,
    HomeWorkspace
  }
}
</script>
<style lang="sass">
@import "../../assets/styles/pages/_home-index.scss";
</style>
