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
            <el-card class="box-card">
              <div class="project-section__wrapper">
                <div
                  class="project-entry"
                  v-for="(project, index) in projectGroup.projects"
                  :key="index"
                  :name="index"
                >
                  <div class="project-entry__intro">
                    <h4 class="project-entry__intro-headline">{{ project.heading }}</h4>
                    <div class="project-entry__intro-subtitle" v-if="project.heading_subtitle">
                      <i class="el-icon-location"></i>
                      {{ project.heading_subtitle }}
                    </div>
                    <div class="project-entry__intro-subtitle" v-if="project.start_date">
                      <i class="el-icon-date"></i>
                      <small>
                        {{ project.start_date}}
                        <span v-if="project.end_date">–</span>
                        {{ project.end_date }}
                      </small>
                    </div>
                  </div>
                  <ul v-if="project.content" class="project-entry__content">
                    <li v-for="(item, index) in project.content" v-bind:key="index">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </div>
    </section>
  </default-template>
</template>

<script>
import DefaultTemplate from "@/templates/Default";
// import ProjectEntry from "@/components/ProjectEntry";

import ProjectJson from "@/json/projects.json";

export default {
  name: "projects-index",
  components: {
    DefaultTemplate
    // ProjectEntry
  },
  data: function() {
    return {
      projectList: ProjectJson,
      activeNames: [0]
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
