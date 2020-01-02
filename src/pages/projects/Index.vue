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
              <div
                class="project-section__wrapper"
                v-for="(project, index) in projectGroup.projects"
                :key="index"
                :name="index"
              >
                <div>
                  <div class="project-heading-group">
                    <div class="project-heading">{{ project.heading}}</div>
                    <div class="project-subheading-group">
                      <span class="project-subheading-">
                        <i class="el-icon-location"></i>
                        {{project.heading_subtitle}}
                      </span>
                      <span class="project-subheading-date" v-if="project.start_end">
                        <i class="el-icon-date"></i>
                        {{ project.start_date}}
                        <span
                          v-if="project.end_date"
                        >– {{ project.end_date }}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <i class="header-icon el-icon-info"></i>
                <ul>
                  <li v-for="(item, index) in project.content" v-bind:key="index">{{ item }}</li>
                </ul>
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
