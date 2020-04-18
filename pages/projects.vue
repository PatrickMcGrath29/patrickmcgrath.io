<template>
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
        <el-tabs :stretch="true">
          <el-tab-pane
            v-for="(projectGroup, index) in projectList"
            :key="index"
            :label="projectGroup.title"
          >
            <div class="project-section__wrapper">
              <div
                v-for="(project, index) in projectGroup.projects"
                :key="index"
                class="project-entry"
                :name="index"
              >
                <div class="project-entry__intro">
                  <h4 class="project-entry__intro-headline">
                    {{ project.heading }}
                  </h4>
                  <div
                    v-if="project.heading_subtitle"
                    class="project-entry__intro-subtitle"
                  >
                    <i class="el-icon-location"></i>
                    {{ project.heading_subtitle }}
                  </div>
                  <div
                    v-if="project.start_date"
                    class="project-entry__intro-subtitle"
                  >
                    <i class="el-icon-date"></i>
                    <small>
                      {{ project.start_date }}
                      <span v-if="project.end_date">–</span>
                      {{ project.end_date }}
                    </small>
                  </div>
                </div>
                <div v-if="project.about" class="project-entry__about">
                  <small> About </small>
                  <br />
                  {{ project.about }}
                </div>
                <ul v-if="project.content" class="project-entry__content">
                  <li v-for="(item, index) in project.content" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </section>
</template>

<script>
import ProjectJson from '@/json/projects.json'

export default {
  name: 'Projects',
  data: () => {
    return {
      projectList: ProjectJson
    }
  },
  head() {
    return {
      title: 'Patrick McGrath | Projects'
    }
  }
}
</script>
