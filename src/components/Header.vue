<template>
  <header role="banner">
    <router-link v-bind:to="{ name: 'Home' }" class="header-icon">Patrick R. McGrath</router-link>
    <div class="navbar-collapse-toggle hamburger" :class="{'navbar-active': !mobileHidden}" v-on:click="toggleMobileNav">
      <div class="hamburger-line"></div>
      <div class="hamburger-line"></div>
      <div class="hamburger-line"></div>
    </div>
    <nav class="navbar" :class="{'mobile-hidden': mobileHidden}">
      <router-link v-bind:to="{ name: 'Home' }" active-class="active" class="navbar-link">Home</router-link>
      <router-link v-bind:to="{ name: 'Projects' }" active-class="active" class="navbar-link">Projects</router-link>
      <router-link v-bind:to="{ name: 'Skills' }" active-class="active" class="navbar-link">Skills</router-link>
      <router-link v-bind:to="{ name: 'Shorten' }" active-class="active" class="navbar-link">Shorten Urls</router-link>
      <a href="/static/Resume_McGrath_Patrick.pdf" class="navbar-link">Résumé</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      mobileHidden: true
    }
  },
  methods: {
    toggleMobileNav () {
      this.mobileHidden = !this.mobileHidden
    }
  }
}
</script>
