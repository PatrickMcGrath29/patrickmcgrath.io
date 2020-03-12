<template>
  <default-template>
    <div class="container">
      <div class="homepage-intro content-section">
        <div class="primary-header">
          <h1>About</h1>
        </div>
        <div class="bio-and-image">
          <div class="bio">
            <p>
              I am a student at Northeastern University pursuing a
              Bachelor of Science in Computer Science. I'm an engineer and entrepreneur at heart, driven by a desire to change the world through innovative problem solving.
            </p>
            <p>In my spare time you'll find me swing dancing, playing chess, hiking or skiing the northern east coast, and working on side projects.</p>
          </div>
          <img
            src="@/assets/images/patrickmcgrath.jpg"
            height="300px"
            width="auto"
            alt="Patrick McGrath"
          />
        </div>
      </div>
      <div class="content-section project-intro__wrapper">
        <div class="project-intro" v-for="(projectGrouping, index) in projectList" :key="index">
          <h2>{{ projectGrouping.title }}</h2>
          <div
            class="project-intro__entry"
            v-for="(project, index) in projectGrouping.projects"
            :key="index"
          >
            <div class="project-intro__entry-inner">
              <h2 class="project-intro__headline">{{ project.heading }}</h2>
              <h4 class="project-intro__subtitle" v-if="project.heading_subtitle">
                <i class="el-icon-location"></i>
                {{ project.heading_subtitle }}
              </h4>
              <h4 class="project-intro__subtitle" v-if="project.start_date">
                <i class="el-icon-date"></i>
                <small>
                  {{ project.start_date}}
                  <span v-if="project.end_date">–</span>
                  {{ project.end_date }}
                </small>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="content-section">
        <div class="primary-header">
          <h1>Say Hi</h1>
        </div>
        <p>If you'd like to get in contact with me, drop me a line at the email address below.</p>
        <div class="social-icon__set">
          <a class="social-icon__icon green" href="mailto:website@patrickmcgrath.io">
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
import DefaultTemplate from "@/templates/Default";

import EmailIcon from "@/assets/images/email.svg";
import GithubIcon from "@/assets/images/github.svg";
import LinkedInIcon from "@/assets/images/linkedin.svg";

import ProjectJson from "@/json/projects.json";

export default {
  name: "home-index",
  components: {
    DefaultTemplate,
    EmailIcon,
    GithubIcon,
    LinkedInIcon
  },
  data: function() {
    return {
      projectList: ProjectJson
    };
  }
};
</script>
<style lang="sass"></style>
