<template>
  <div class="project-entry">
    <div class="project-entry__wrapper">
      <div class="project-entry__front">
        <div class="project-entry__front-heading">
          <h2>{{ project.heading }}</h2>
          <h3>{{ project.heading_subtitle }}</h3>
        </div>
        <h4 class="project-intro__subtitle" v-if="project.start_date">
          <i class="el-icon-date"></i>
          <small>
            {{ project.start_date}}
            <span v-if="project.end_date">–</span>
            {{ project.end_date }}
          </small>
        </h4>
      </div>
      <div class="project-entry__back">
        <ul>
          <li v-for="(item, index) in project.content" v-bind:key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project-entry",
  props: ["project", "index"]
};
</script>
<style lang="sass"></style>
