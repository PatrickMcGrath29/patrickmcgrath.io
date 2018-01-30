<template>
  <div class="header">
    <router-link v-bind:to="{ name: 'Home' }" class="header-icon">Patrick R. McGrath</router-link>
    <nav class="navbar">
      <router-link v-bind:to="{ name: 'Home' }" class="navbar-link">Home</router-link>
      <a href="#" class="navbar-link">Projects</a>
      <a href="#" class="navbar-link">Resume</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
