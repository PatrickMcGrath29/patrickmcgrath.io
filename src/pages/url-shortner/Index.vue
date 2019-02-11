<template>
  <default-template>
    <div class="container">
      <div class="url-shortner__body">
        <h1>Shorten a URL</h1>
        <div class="url-shortner__form">
          <el-row class="form-row">
            <el-input v-model="link" placeholder="Link">
            </el-input>
          </el-row>
          <el-row class="form-row">
            <el-checkbox v-model="useCustomCode" :label="`Use Custom Code`" border></el-checkbox>
          </el-row>
          <el-row class="form-row" v-show="useCustomCode" >
            <el-input v-model="code" placeholder="Custom Alias"></el-input>
          </el-row>
          <el-row class="form-row full">
            <el-button plain type="info" v-on:click="shortenUrl()">Shorten URL</el-button>
          </el-row>
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
