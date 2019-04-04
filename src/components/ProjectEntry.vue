<template>
  <div class="project-entry">
    <div class="project-entry__wrapper">
      <div class="project-entry__front" :class="`card-bg-${index % 5}`">
        <div class="project-entry__front-wrapper">
          <h2> {{ project.heading }} </h2>
          <h3> {{ project.heading_subtitle }} </h3>
        </div>
      </div>
      <div class="project-entry__back">
        <ul>
          <li v-for="item in project.content" v-bind:key="item">
            {{ item }}
          </li>
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
