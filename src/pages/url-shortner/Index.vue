<template>
  <default-template>
    <div class="container">
      <div class="url-shortner__body">
        <h1> Shorten a URL </h1>
        <div class="url-shortner__form">
          <div class="form-group">
            <input v-model="link" placeholder="URL" type="text">
          </div>
          <div class="form-group">
            <label for="useCustomCode">Use Custom Path</label>
            <input id="useCustomCode" type="checkbox" v-model="useCustomCode" class="highlighted-input">
          </div>
          <div class="form-group">
            <input v-model="code" v-show="useCustomCode" placeholder="Custom Path" type="text">
          </div>
          <div class="form-group-submit">
            <button> Shorten URL </button>
          </div>
        </div>
      </div>
    </div>
  </default-template>
</template>

<script>
import DefaultTemplate from "@/templates/Default";

export default {
  name: "url-shortner-index",
  components: {
    DefaultTemplate
  },
  data: function() {
    return {
      link: "",
      useCustomCode: false,
      code: ""
    };
  }
};
</script>
<style lang="sass">
@import "../../assets/styles/pages/_url-shortner-index.scss";
</style>
