<template>
  <div class="projects">
    <h1>Add Project</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="app_project_btn" @click="addProject">Add</button>
        </div>
      </div>
  </div>
</template>

<script>
import ProjectsService from '@/services/ProjectsService'
export default {
  name: 'NewProject',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  methods: {
    async addProject () {
      await ProjectsService.addProject({
        title: this.title,
        description: this.description
      })
      this.$router.push({ name: 'Projects' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_project_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>
