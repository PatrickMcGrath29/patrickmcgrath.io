<template>
  <default-template>
    <section id="projects">
      <div class="container">
        <div class="primary-header center">
          <h1>
            Projects
          </h1>
        </div>
      </div>
      <div class="container">
        <el-card class="box-card">
          <el-tabs stretch="true">
            <el-tab-pane
              v-for="(projectGroup, index) in projectList"
              :key="index"
              :label="projectGroup.title"
            >
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
                  <div v-if="project.about" class="project-entry__about">
                    <small> About </small>
                    <br/>
                    {{ project.about }}
                  </div>
                  <ul v-if="project.content" class="project-entry__content">
                    <li v-for="(item, index) in project.content" v-bind:key="index">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </div>
    </section>
  </default-template>
</template>

<script>
import DefaultTemplate from '@/templates/Default'
import ProjectJson from '@/json/projects.json'

export default {
  name: 'projects-index',
  components: {
    DefaultTemplate
  },
  data: () => {
    return {
      projectList: ProjectJson
    }
  }
}
</script>
<style lang="sass"></style>
