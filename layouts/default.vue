<template>
  <main>
    <Header />
    <nuxt />
    <Footer />
    <script
      async
      type="text/javascript"
      src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=UJPuhs"
    ></script>
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
