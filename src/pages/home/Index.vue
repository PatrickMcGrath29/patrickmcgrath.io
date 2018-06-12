<template>
  <default-template>
    <div class="container">
      <div class="homepage-intro content-section">
        <h1><span class="heading-bracket left">[</span>About<span class="heading-bracket right">]</span></h1>
        <div class="bio-and-image">
          <div class="bio">
            <p>
              I am a student at Northeastern University pursuing a <strong>Bachelor of Science in Computer Science</strong>, currently working as a UI engineer at <a href="https://placepass.com">PlacePass</a>. I'm an engineer and entrepreneur at heart, driven by a desire to change the world through innovative problem solving. I appreciate every opportunity to disrupt the status quo in favor of progress.
            </p>
            <p>
              In my spare time you'll find me hanging out with friends, hiking or skiing the northern east coast, working on side projects, and exploring Boston's restaurant scene.
            </p>
          </div>
          <img src="@/assets/images/patrickmcgrath.jpg" height="300px" width="auto" alt="Patrick McGrath">
        </div>
      </div>
      <div class="content-section">
        <h1><span class="heading-bracket left">[</span>My Hobbies<span class="heading-bracket right">]</span></h1>
        <div class="content-section-bordered">
          <h2> Victoria McGrath Foundation </h2>
          <p>
            <a href="https://www.victoriamcgrath.org">The Victoria McGrath Foundation</a> foundation was created in 2018 to honor the memory of my sister, Victoria. Our objective is to serve others by creating pathways for hope and care, with a focus on supporting special needs ministries, displaced refugees, and veterans.
            <br><br>
            As both a board member and the lead developer I help guide the course of the foundation while building and maintaining its online assets.
          </p>
        </div>
        <div class="content-section-bordered">
          <h2> South Africa 2018 </h2>
          <p>
            From mid-June to mid-July I will be heading on a mission trip to South Africa, where I will have the opportunity to teach foundational math, english, and computer science skills to local students. The trip, led by Cru, will bring us to Mamelodi South Africa where we will be partnering with the <a href="http://mamelodi.org/">Mamelodi Iniative</a>, a local Christian organization that aims to empower local students with the skills they need to inspire positive change.
            <br><br>
            If you'd like to get updates about the trip while I'm away shoot me an note at the email address below!
          </p>
        </div>
        <div class="content-section-bordered">
          <h2> Agape Christian Fellowship </h2>
          <p>
            I currently serve as an executive board member at <a href="https://www.facebook.com/groups/nuagape/">Agape Christian Fellowship</a>, a Christian organization at Northeastern University. Agape partners with Cru (an international Christian organization) to offer a student run environment where students can grow in community and the understanding of Christ.
          </p>
        </div>
      </div>
      <div class="content-section">
        <h1><span class="heading-bracket left">[</span>Say Hello<span class="heading-bracket right">]</span></h1>
        <p>
          If you'd like to get in contact with me, drop me a line at the email address below.
        </p>
        <div class="social-icon__set">
          <a class="social-icon__icon green" href="mailto:hello@patrickmcgrath.io">
            <EmailIcon class="social-svg" />
          </a>
          <a class="social-icon__icon" href="https://github.com/PatrickMcGrath29">
            <GithubIcon class="social-svg" />
          </a>
          <a class="social-icon__icon blue" href="https://www.linkedin.com/in/patrickrmcgrath/">
            <LinkedInIcon class="social-svg" />
          </a>
        </div>
      </div>
    </div>
  </default-template>
</template>

<script>
import DefaultTemplate from '@/templates/Default'
import EmailIcon from '@/assets/images/email.svg'
import GithubIcon from '@/assets/images/github.svg'
import LinkedInIcon from '@/assets/images/linkedin.svg'

export default {
  name: 'home-index',
  components: {
    DefaultTemplate,
    EmailIcon,
    GithubIcon,
    LinkedInIcon,
  }
}
</script>
<style lang="sass">
@import "../../assets/styles/pages/_home-index.scss";
</style>
