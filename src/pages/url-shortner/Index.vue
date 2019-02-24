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
        <div class="content-section-bordered">
          <h2> Victoria McGrath Foundation </h2>
          <p>
            <a href="https://www.victoriamcgrath.org">The Victoria McGrath Foundation</a> foundation was created in 2018 to honor the memory of my sister, Victoria. Our objective is to serve others by creating pathways for hope and care, with a focus on supporting special needs ministries, displaced refugees, and veterans.
            <br><br>
            As both a board member and the lead developer I help guide the course of the foundation while building and maintaining its online assets.
          </p>
        </div>
        <div class="content-section-bordered">
          <h2> South Africa 2018 </h2>
          <p>
            From mid-June to mid-July I had the opportunity to go on a mission trip to South Africa, where I taught math, english, and computer science skills to local students. The trip, led by Cru, brought us to Mamelodi, South Africa where we partnered with the <a href="http://mamelodi.org/">Mamelodi Iniative</a>, a Christian organization that aims to empower local students with the skills they need to inspire positive change.
          </p>
        </div>
        <div class="content-section-bordered">
          <h2> Agape Christian Fellowship </h2>
          <p>
            I currently serve as an executive board member at <a href="https://www.facebook.com/groups/nuagape/">Agape Christian Fellowship</a>, a Christian organization at Northeastern University. Agape partners with Cru (an international Christian organization) to offer a student run environment where students can grow in community and the understanding of Jesus.
          </p>
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
<style lang="sass"></style>
