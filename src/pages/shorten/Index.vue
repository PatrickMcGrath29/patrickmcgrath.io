<template>
  <default-template>
    <section id="shorten">
      <div class="primary-header center">
        <h1>
          Shorten Urls
        </h1>
      </div>
      <div class="container">
        <div class="shorten__wrapper">
          <el-card>
            <form @submit.prevent="requestAlias">
              <input
                v-model="proposed_full_url"
                type="url"
                id="full_url"
                placeholder="a long url"
                label="a long url"
                required
              />
              <input
                v-model="proposed_alias"
                type="text"
                id="alias"
                placeholder="optional alias"
                label="optional alias"
              />
              <button type="submit" aria-labe="submit" id="submit-button">
                <span>shorten</span>
              </button>
            </form>
          </el-card>
          <div class="shorten__result-wrapper" v-if="result_alias">
            <el-card>
              <h4 class="shorten__result-subtitle">Shortened URL</h4>
              <a @click="copyAlias">
                <h3 id="shortened-url" class="shorten__result-url">{{ base_endpoint + result_alias}}</h3>
              </a>
              <h4 class="shorten__result-subtitle">{{ secret_id }}</h4>
            </el-card>
          </div>
        </div>
      </div>
    </section>
  </default-template>
</template>

<script>
import DefaultTemplate from "@/templates/Default";
import axios from "axios";

export default {
  name: "shorten-index",
  components: {
    DefaultTemplate
  },
  data: () => {
    return {
      proposed_full_url: "",
      proposed_alias: "",
      secret_id: null,
      result_alias: "johntest",
      base_endpoint: "https://urls.patrickmcgrath.io/",
      error_message: null
    };
  },
  methods: {
    async requestAlias() {
      let response = await axios.post(this.base_endpoint, {
        full_url: this.proposed_full_url,
        alias: this.proposed_alias
      });

      if (response.statusCode !== 200) {
        this.error_message = response.data.errorMessage;
      } else {
        this.result_alias = response.data.alias;
        this.secret_id = response.data.secret_id;
      }
    },
    copyAlias() {
      let aliasText = document.querySelector("#shortened-url");
      console.log(aliasText)
      aliasText.setAttribute('type', 'text')
      aliasText.select();
      alaisText.setSelectionRange(0, 99999);
      document.execCommand("copy");
    }
  }
};
</script>
<style lang="sass"></style>
