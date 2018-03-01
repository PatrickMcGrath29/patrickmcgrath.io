<template>
  <default-template>
    <div class="container">
      <div class="projects">
        <h1>Projects</h1>
        <div v-if="projects.length > 0" class="table-wrap">
          <div>
            <router-link v-bind:to="{ name: 'NewProject' }" class="">Add Project</router-link>
          </div>
          <table>
            <tr>
              <td>Title</td>
              <td width="550">Description</td>
              <td width="100" align="center">Action</td>
            </tr>
            <tr v-for="project in projects" v-bind="project._id">
              <td>{{ project.title }}</td>
              <td>{{ project.description }}</td>
              <td align="center">
                <router-link v-bind:to="{ name: 'EditProject', params: { id: project._id } }">Edit</router-link> |
                <a href="#">Delete</a>
              </td>
            </tr>
          </table>
        </div>
        <div v-else>
          <router-link v-bind:to="{ name: 'newProject' }" class="add-projects-link">Add Project</router-link>
        </div>
      </div>
    </div>
  </default-template>
</template>

<script>
import ProjectsService from '@/services/ProjectsService'
import DefaultTemplate from '@/templates/Default'

export default {
  name: 'projects',
  components: {
    DefaultTemplate,
  },
  data () {
    return {
      projects: []
    }
  },
  mounted () {
    this.getProjects()
  },
  methods: {
    async getProjects () {
      const response = await ProjectsService.fetchProjects()
      this.projects = response.data.projects
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add-projects-link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
<style lang="sass">
@import "../../assets/styles/pages/_home-index.scss";
</style>
