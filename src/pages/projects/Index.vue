<template>
  <default-template>
    <section id="projects">
      <div class="container">
        <div class="project-section__introduction">
          <h1>Projects</h1>
        </div>
      </div>
      <div class="container">
        <el-tabs stretch="true">
          <el-tab-pane
            v-for="(projectGroup, index) in projects"
            :key="index"
            :label="projectGroup.title"
          >
            <div class="project-section__wrapper">
              <project-entry
                v-for="(project, index) in projectGroup.projects"
                :key="index"
                :project="project"
                :index="index"
              ></project-entry>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </section>
  </default-template>
</template>

<script>
import DefaultTemplate from "@/templates/Default";
import ProjectEntry from "@/components/ProjectEntry";

import ProjectJson from "@/json/projects.json";

export default {
  name: "projects-index",
  components: {
    DefaultTemplate,
    ProjectEntry
  },
  data: function() {
    return {
      projectList: ProjectJson
    };
  },
  computed: {
    projects: function() {
      return this.projectList;
    }
  },
  methods: {
    getBackgroundImage: function(index) {
      if (index % 6 == 0) {
        return "url(" + require("@/../static/bg2.png") + ")";
      }
    }
  }
};
</script>
<style lang="sass"></style>
