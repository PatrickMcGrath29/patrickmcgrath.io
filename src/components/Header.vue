<template>
  <header role="banner">
    <router-link v-bind:to="{ name: 'Home' }" class="header-icon">Patrick R. McGrath</router-link>
    <div class="navbar-collapse-toggle hamburger" v-on:click="toggleMobileNav">
      <div class="hamburger-line"></div>
      <div class="hamburger-line"></div>
      <div class="hamburger-line"></div>
    </div>
    <nav class="navbar navbar-collapse" :class="{'mobile-hidden': mobileOpen}" ref="navbar">
      <router-link v-bind:to="{ name: 'Home' }" active-class="active" class="navbar-link">Home</router-link>
      <a href="#" class="navbar-link">Projects</a>
      <a href="/static/resume.pdf" class="navbar-link">Resume</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      mobileOpen: false
    }
  },
  methods: {
    toggleMobileNav () {
      this.mobileOpen = !this.mobileOpen
    }
  }
}
</script>
