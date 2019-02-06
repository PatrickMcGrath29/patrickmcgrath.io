<template>
  <default-template>
    <div class="container">
      <div class="url-shortner__body">
        <h1>Shorten a URL</h1>
        <div class="url-shortner__form">
          <v-text-field solo single-line v-model="link" append-icon="link" label="URL"></v-text-field>
          <v-checkbox v-model="useCustomCode" :label="`Use Custom Code`"></v-checkbox>
          <v-text-field
            solo
            single-line
            v-model="code"
            v-show="useCustomCode"
            append-icon="short_text"
            label="Custom Alias"
          ></v-text-field>
          <v-btn block v-on:click="shortenUrl()">Shorten URL</v-btn>
        </div>
      </div>
    </div>
  </default-template>
</template>

<script>
import DefaultTemplate from "@/templates/Default";
import axios from "axios";

export default {
  name: "url-shortner-index",
  components: {
    DefaultTemplate
  },
  data: function() {
    return {
      link: "",
      useCustomCode: false,
      code: "",
      shortenedLink: "",
      loading: false,
      error: false
    };
  },
  methods: {
    async shortenUrl(event) {
      try {
        this.loading = true;
        let endpoint = `/.netlify/functions/shorten-link`;
        let response = await axios.get(endpoint, {
          params: {
            link: this.link,
            code: this.code
          }
        });
        console.log(response);
      } catch (error) {
        this.error = true;
        console.log(error);
      }
    }
  }
};
</script>
<style lang="sass">
@import "../../assets/styles/pages/_url-shortner-index.scss";
</style>
