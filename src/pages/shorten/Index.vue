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
            <el-form :model="form_fields" :rules="form_rules" ref="alias-form">
              <el-form-item label="a long url" prop="proposed_full_url" type="url">
                <el-input type="url" v-model="form_fields.proposed_full_url" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="alias" prop="proposed_alias">
                <el-input v-model="form_fields.proposed_alias" autocomplete="off"></el-input>
              </el-form-item>
                <el-form-item>
                  <el-button @click="submitForm('alias-form')">shorten</el-button>
                </el-form-item>
            </el-form>
          </el-card>

          <div class="shorten__result-wrapper" v-if="result_alias && secret_id">
            <el-card>
              <h5 class="shorten__result-subtitle">Shortened URL</h5>
              <a v-bind:href="base_endpoint + result_alias">
                <h3 id="shortened-url" class="shorten__result-primary">
                  {{ base_endpoint + result_alias }}
                </h3>
              </a>
              <h5 class="shorten__result-subtitle">Secret ID</h5>
              <h4 class="shorten__result-primary">{{ secret_id }}</h4>
            </el-card>
          </div>
          <div class="shorten__result-wrapper" v-if="error_message">
            <el-card>
              <h5 class="shorten__result-subtitle">Error Message </h5>
              <h3 class="shorten__result-primary"> {{ error_message}} </h3>
            </el-card>
          </div>
        </div>
      </div>
    </section>
  </default-template>
</template>

<script>
import DefaultTemplate from '@/templates/Default'
import axios from 'axios'

export default {
  name: 'shorten-index',
  components: {
    DefaultTemplate
  },
  data: () => {
    return {
      form_fields: {
        proposed_full_url: null,
        proposed_alias: null
      },
      form_rules: {
        proposed_full_url: [
          { required: true, message: 'Please enter a valid URL', type: 'url' }
        ],
        proposed_alias: [
          { required: true, message: 'Please enter an alias' }
        ]
      },
      secret_id: null,
      result_alias: null,
      error_message: null,
      base_endpoint: 'https://urls.patrickmcgrath.io/'
    }
  },
  methods: {
    async requestAlias () {
      let response = await axios.post(this.base_endpoint, {
        full_url: this.form_fields.proposed_full_url,
        alias: this.form_fields.proposed_alias
      })

      if (response.data.errorMessage) {
        this.error_message = response.data.errorMessage
        this.result_alias = null
        this.secret_id = null
      } else {
        this.error_message = null
        this.result_alias = response.data.alias
        this.secret_id = response.data.secret_id
      }
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.requestAlias()
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="sass"></style>
