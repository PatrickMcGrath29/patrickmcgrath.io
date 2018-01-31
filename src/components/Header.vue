<template>
  <header>
    <router-link v-bind:to="{ name: 'Home' }" class="header-icon">Patrick R. McGrath</router-link>
    <nav class="navbar">
      <router-link v-bind:to="{ name: 'Home' }" active-class="active" class="navbar-link">Home</router-link>
      <a href="#" class="navbar-link">Projects</a>
      <a href="/static/resume.pdf" class="navbar-link">Resume</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
