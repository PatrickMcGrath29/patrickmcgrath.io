<template>
  <default-template>
    <div class="container">
      <div class="url-shortner__body">
        <h1> Shorten a URL </h1>
        <div class="url-shortner__form">
          <v-text-field solo single-line v-model="link" append-icon="link" label="URL"></v-text-field>
          <v-checkbox v-model="useCustomCode" :label="`Use Custom Code`"></v-checkbox>
          <v-text-field solo single-line v-model="code" v-show="useCustomCode" append-icon="short_text" label="Custom Alias"></v-text-field>
          <v-btn block> Shorten URL </v-btn>
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
