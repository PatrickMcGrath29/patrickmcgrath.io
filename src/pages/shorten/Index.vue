<template>
  <default-template>
    <section id="shorten">
      Shorten URLs
      <div class="container">
        <div class="shorten__wrapper">
          <form>
            <input type="url" id="full_url" placeholder="a long url" label="a long url" required />
            <input type="text" id="alias" placeholder="optional alias" label="optional alias" />
            <button type="submit" aria-labe="submit" id="submit-button"><span>shorten</span></button>
          </form>
        </div>
      </div>
    </section>
  </default-template>
</template>

<script>
import DefaultTemplate from "@/templates/Default";

export default {
  name: "shorten-index",
  components: {
    DefaultTemplate
  }
};
</script>
<style lang="sass"></style>
