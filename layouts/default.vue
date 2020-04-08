<template>
  <main>
    <Header />
    <nuxt />
    <Footer />
  </main>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'DefaultTemplate',
  components: {
    Header,
    Footer
  }
}
</script>
