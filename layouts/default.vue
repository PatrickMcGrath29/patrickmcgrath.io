<template>
  <main>
    <script
      async
      type="text/javascript"
      src="//static.klaviyo.com/onsite/js/klaviyo.js?company_id=89ye2u"
    ></script>
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
