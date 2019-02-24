<template>
  <default-template>
    <section id="projects">
      <div
        class="project-section__wrapper"
        v-for="(projectGroup, index) in projectList"
        :key="index"
      >
        <div
          class="project-section__entry"
          v-for="(project, index) in projectGroup.projects"
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
