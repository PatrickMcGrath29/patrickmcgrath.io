<template>
  <header role="banner">
    <NLink to="/" class="header-icon">Patrick R. McGrath </NLink>
    <div
      class="navbar-collapse-toggle hamburger"
      :class="{ 'navbar-active': !mobileHidden }"
      @click="toggleMobileNav"
    >
      <div class="hamburger-line"></div>
      <div class="hamburger-line"></div>
      <div class="hamburger-line"></div>
    </div>
    <nav class="navbar" :class="{ 'mobile-hidden': mobileHidden }">
      <NLink to="/" class="navbar-link"> Home </NLink>
      <NLink to="/interests" class="navbar-link"> Interests </NLink>
      <NLink to="/shorten" class="navbar-link"> Shorten Urls </NLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      mobileHidden: true,
    }
  },
  watch: {
    $route() {
      setTimeout(() => {
        this.mobileHidden = true
      }, 150)
    },
  },
  methods: {
    toggleMobileNav() {
      this.mobileHidden = !this.mobileHidden
    },
  },
}
</script>
