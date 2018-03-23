<template>
  <default-template>
    <div class="container">
      <div class="homepage-intro content-section">
        <h1><span class="heading-bracket left">[</span>About<span class="heading-bracket right">]</span></h1>
        <p>
          I am a student at Northeastern University pursuing a <strong>Bachelor of Science in Computer Science</strong>. I'm an engineer and entrepreneur at heart, driven by a keen desire to change the world through innovative problem solving. I appreciate every opportunity to disrupt the status quo in favor of progress.
        </p>
        <p>
          In my spare time you'll find me hanging out with friends, working on side projects, and exploring Boston's restaurant scene.
        </p>
      </div>
      <div class="content-section">
        <h1><span class="heading-bracket left">[</span>My Projects<span class="heading-bracket right">]</span></h1>
        <div class="content-section-bordered">
          <h2> Victoria McGrath Foundation </h2>
          <p>
            After my sister passed away in a car accident in March of 2016 my family and I decided to start a foundation in her memory. <a href="https://www.victoriamcgrath.org">The Victoria McGrath Foundation</a> serves to support ministries and foundations through financial giving, with a focus on special needs ministries and those that help refugees.
            <br><br>
            As both a board member and the lead developer I help guide the course of the foundation while building and maintaining its online assets.
          </p>
        </div>
        <div class="content-section-bordered">
          <h2> Agape Christian Fellowship </h2>
          <p>
            I currently serve as an executive board member at <a href="https://www.facebook.com/groups/nuagape/">Agape Christian Fellowship</a>, a Christian organization at Northeastern University. Agape partners with Cru (an international Christian organization) to offer a student run environment where students can grow in community and understanding of Christ.
          </p>
        </div>
        <div class="content-section-bordered">
          <h2> NUACM </h2>
          <p>
            I'm the Vice President and lead developer at <a href="http://acm.ccs.neu.edu">NUACM</a> (Northeastern University Association of Computing Machinery).
            <br><br>
            NUACM serves to connect students with engaging Computer Science and Computer Engineering related opportunities. We regularly invite professors, companies, and interesting people in to talk about research they are doing or different problems they have solved.
          </p>
        </div>
      </div>
      <div class="content-section">
        <h1><span class="heading-bracket left">[</span>Say Hello<span class="heading-bracket right">]</span></h1>
        <p>
          I'm always looking for new projects and opportunities -- I also enjoy casual conversations. You can reach me at my email below.
        </p>
        <h3>hello@patrickmcgrath.io</h3>
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
