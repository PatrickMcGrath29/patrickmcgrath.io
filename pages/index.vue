<template>
  <div class="container">
    <div class="homepage-intro content-section">
      <div class="primary-header">
        <h1>About</h1>
      </div>
      <div class="bio-and-image">
        <div class="bio">
          <p>
            I'm an engineer at heart driven by a desire to impact peoples lives
            through innovative problem solving. I'm currently working as a
            software engineer at Klaviyo.
          </p>
          <p>
            In my spare time you'll find me swing dancing, hiking or skiing the
            northern east coast, working on side projects, and enjoying
            meaningful conversations with friends.
          </p>
        </div>
        <img
          src="@/static/patrickmcgrath.jpg"
          class="bio-image"
          alt="Patrick McGrath"
        />
      </div>
    </div>
    <div class="content-section project-intro__wrapper">
      <div
        v-for="(projectGrouping, listIndex) in projectList"
        :key="listIndex"
        class="project-intro"
      >
        <h2>{{ projectGrouping.title }}</h2>
        <div
          v-for="(project, entryIndex) in projectGrouping.projects"
          :key="entryIndex"
          class="project-intro__entry"
        >
          <div class="project-intro__entry-inner">
            <h2 class="project-intro__headline">{{ project.heading }}</h2>
            <h4 v-if="project.heading_subtitle" class="project-intro__subtitle">
              <i class="el-icon-location"></i>
              {{ project.heading_subtitle }}
            </h4>
            <h4 v-if="project.start_date" class="project-intro__subtitle">
              <i class="el-icon-date"></i>
              <small>
                {{ project.start_date }}
                <span v-if="project.end_date">–</span>
                {{ project.end_date }}
              </small>
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="content-section">
      <div class="social-icon__set">
        <a class="social-icon__icon" href="mailto:hello@patrickmcgrath.io">
          <EmailIcon class="social-svg" />
        </a>
        <a class="social-icon__icon" href="https://github.com/PatrickMcGrath29">
          <GithubIcon class="social-svg" />
        </a>
        <a
          class="social-icon__icon"
          href="https://www.linkedin.com/in/patrickrmcgrath/"
        >
          <LinkedInIcon class="social-svg" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import GithubIcon from '@/assets/images/github.svg'
import LinkedInIcon from '@/assets/images/linkedin.svg'

import ProjectJson from '@/json/projects.json'
import EmailIcon from '~/assets/images/email.svg'

export default {
  name: 'Index',
  components: {
    EmailIcon,
    GithubIcon,
    LinkedInIcon
  },
  data: () => {
    return {
      projectList: ProjectJson
    }
  },
  head() {
    return {
      title: 'Patrick McGrath | Home'
    }
  }
}
</script>
<style lang="sass"></style>
