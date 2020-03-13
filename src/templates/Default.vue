<template>
  <main>
    <Header />
    <slot></slot>
    <Footer />
  </main>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'default-template',
  components: {
    Header,
    Footer
  }
}
</script>
