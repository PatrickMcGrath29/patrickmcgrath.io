<template>
  <default-template>
    <section id="projects">
      <div class="container">
        <div class="project-section__introduction">
          <h2> An Introduction </h2>
          <p> Here's a list of some stuff that i've been working on. </p>
        </div>
      </div>
      <div class="project-section__wrapper">
        <div
          class="project-section__entry"
          v-for="(project, index) in projects"
          :key="index"
          :style="{ backgroundColor: getColor(index) }"
        >
          <div class="container">
            <h1>{{ project.heading }}</h1>
            <h4>
              <i class="el-icon-location"></i>
              <em>{{ project.heading_subtitle }}</em>
            </h4>
            <ul class="project-section__entry-content">
              <li v-for="(content, index) in project.content" :key="index"> {{ content }} </li>
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
      return this.projectList.map(projectGroup => projectGroup.projects).flat()
    }
  },
  methods: {
    getColor: function(index) {
      if (index % 3 == 0) {
        return "#bbbf95";
      } else if (index % 3 == 1) {
        return "#dcd9c6";
      } else if (index % 3 == 2) {
        return "#f2ece1";
      }
    }
  }
};
</script>
<style lang="sass"></style>
