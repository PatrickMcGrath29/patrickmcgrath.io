<template>
  <default-template>
    <section id="projects">
      <!-- <el-container>
        <el-aside width="400px">
          <el-menu :default-openeds="['1', '2']">
            <el-submenu v-for="(projectGroup, index) in projects" :key="index" :index="index">
              <template slot="title">
                <i class="el-icon-suitcase"></i>
                {{projectGroup.title}}
              </template>
              <el-menu-item v-for="(project, projectIndex) in projectGroup.projects" :key="projectIndex" :index="index + `-` + projectIndex">{{project.heading}}</el-menu-item>
            </el-submenu>

          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <el-table :data="tableData">
              <el-table-column prop="date" label="Title" width="140"></el-table-column>
              <el-table-column prop="name" label="Company" width="120"></el-table-column>
              <el-table-column prop="address" label="Description"></el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-container>-->
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
              <el-card class="box-card">
                <el-collapse accordion v-model="activeNames">
                  <el-collapse-item
                    v-for="(project, index) in projectGroup.projects"
                    :key="index"
                    :name="index"
                  >
                    <template slot="title">
                      <div>
                        <div class="project-heading-group">
                          <div class="project-heading">{{ project.heading}}</div>
                          <div class="project-subheading-group">
                            <span class="project-subheading-">
                              <i class="el-icon-location"></i>
                              {{project.heading_subtitle}}
                            </span>
                            <span class="project-subheading-date">
                              <i class="el-icon-date"></i>
                              {{ project.start_date}}
                              <span v-if="project.end_date">– {{ project.end_date }}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <i class="header-icon el-icon-info"></i>
                    </template>
                    <ul>
                      <li v-for="(item, index) in project.content" v-bind:key="index">{{ item }}</li>
                    </ul>
                  </el-collapse-item>
                </el-collapse>
              </el-card>
              <!-- <project-entry
                v-for="(project, index) in projectGroup.projects"
                :key="index"
                :project="project"
                :index="index"
              ></project-entry>-->
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
