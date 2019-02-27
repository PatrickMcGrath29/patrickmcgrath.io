<template>
  <default-template>
    <section id="projects">
      <div class="container">
        <div class="project-section__introduction">
          <h2>Projects</h2>
          <p>Here's some more detail on the various things that I've been doing.</p>
        </div>
      </div>
      <div class="project-section__wrapper">
        <div
          class="project-section__entry"
          v-for="(project, index) in projects"
          :key="index"
        >
          <div class="container">
            <h1>{{ project.heading }}</h1>
            <h4>
              <i class="el-icon-location"></i>
              <em>{{ project.heading_subtitle }}</em>
            </h4>
            <ul class="project-section__entry-content">
              <li v-for="(content, index) in project.content" :key="index">{{ content }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </default-template>
</template>

<script>
import DefaultTemplate from "@/templates/Default";

import ProjectJson from "@/json/projects.json";


export default {
  name: "projects-index",
  components: {
    DefaultTemplate
  },
  data: function() {
    return {
      projectList: ProjectJson
    };
  },
  computed: {
    projects: function() {
      return this.projectList.map(projectGroup => projectGroup.projects).flat();
    }
  },
  methods: {
    getBackgroundImage: function(index) {
      if (index % 6 == 0) {
        return 'url(' + require('@/../static/bg2.png') + ')'
      }
    }
  }
};
</script>
<style lang="sass"></style>
