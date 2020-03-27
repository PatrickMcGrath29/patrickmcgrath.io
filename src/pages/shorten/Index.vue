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
          <h3> Create a new alias </h3>
          <el-card>
            <el-form :model="formFields" :rules="form_rules" ref="alias-form" class="shorten__form">
              <el-form-item prop="proposedFullUrl" type="url">
                <el-input type="url" v-model="formFields.proposedFullUrl" autocomplete="off" prefix-icon="el-icon-link" placeholder="a long url"></el-input>
              </el-form-item>
              <el-form-item prop="proposedAlias">
                <el-input v-model="formFields.proposedAlias" autocomplete="off" prefix-icon="el-icon-key" placeholder="alias"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="info" @click="submitForm('alias-form')" :loading="pending" class="shorten__submit-button">shorten</el-button>
              </el-form-item>
            </el-form>
            <div class="shorten__implementation-description">
              <small> Powered by <a href="https://github.com/PatrickMcGrath29/stella">Stella</a>, built with Nginx, Node.js, Docker, and MongoDB.</small>
            </div>
          </el-card>

          <div class="shorten__result-wrapper" v-if="resultAlias && secretID">
            <el-card>
              <h5 class="shorten__result-subtitle">Shortened URL</h5>
              <a v-bind:href="localAddress + resultAlias">
                <h3 id="shortened-url" class="shorten__result-primary">
                  {{ localAddress + resultAlias }}
                </h3>
              </a>
            </el-card>
          </div>
          <div class="shorten__result-wrapper" v-if="errorMessage">
            <el-card>
              <h5 class="shorten__result-subtitle">Error Message </h5>
              <h3 class="shorten__result-primary"> {{ errorMessage}} </h3>
            </el-card>
          </div>
          <div class="shorten__saved-aliases-wrapper" v-if="myAliases.length > 0">
            <h3> Saved aliases </h3>
            <div class="shorten__saved-aliases">
              <AliasCard
                v-for="(aliasData, index) in myAliases"
                :key="index"
                :pending="aliasData.pending"
                :alias="aliasData.alias"
                :fullUrl="aliasData.fullUrl"
                :secretID="aliasData.secretID"
                :localAddress="localAddress"
                v-on:delete="deleteAlias(aliasData.alias)" />
            </div>
            <div class="shorten__saved-aliases-disclaimer">
              <small> Saved aliases do not transfer between devices. </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  </default-template>
</template>

<script>
import DefaultTemplate from '@/templates/Default'
import AliasCard from '@/components/AliasCard'
import ShortenUrlsService from '@/services/shortenUrls.service'

export default {
  name: 'shorten-index',
  components: {
    DefaultTemplate,
    AliasCard
  },
  data: () => {
    return {
      formFields: {
        proposedFullUrl: null,
        proposedAlias: null
      },
      form_rules: {
        proposedFullUrl: [
          { required: true, message: 'Please enter a valid URL', type: 'url' }
        ],
        proposedAlias: [
          { required: true, message: 'Please enter an alias' }
        ]
      },
      secretID: null,
      resultAlias: null,
      errorMessage: null,
      pending: false,
      localAddress: `${window.location.origin}/shorten/`,
      myAliases: []
    }
  },
  methods: {
    // Use the ShortenUrlsService to request a new alias
    requestAlias () {
      this.pending = true
      ShortenUrlsService.create(
        this.formFields.proposedAlias,
        this.formFields.proposedFullUrl
      ).then(response => {
        response.data.errorMessage
          ? this.handleError(response.data.errorMessage) : this.handleResponse(response)
      }).catch(() => {
        console.error('Error creating alias')
        this.handleError('Unable to create alias.')
      })
    },
    // Handle a successful response when creating an alias
    handleResponse (response) {
      this.pending = false
      this.resultAlias = response.data.alias
      this.secretID = response.data.secret_id
      this.errorMessage = null
      this.myAliases.push({
        fullUrl: response.data.full_url,
        alias: this.resultAlias,
        secretID: this.secretID,
        pending: false
      })
    },
    // Handle an error received when requesting a new alias
    handleError (errorMessage) {
      this.pending = false
      this.errorMessage = errorMessage
      this.resultAlias = this.secretID = null
    },
    // Handle a delete operation on an alias
    deleteAlias (aliasId) {
      let selectedAlias
      this.myAliases.forEach(a => {
        if (a.alias === aliasId) {
          selectedAlias = a
        }
      })
      if (selectedAlias) {
        selectedAlias.pending = true
        ShortenUrlsService.delete(aliasId, selectedAlias.secretID
        ).then(res => {
          this.myAliases = this.myAliases.filter(a => { return a !== selectedAlias })
        }).catch(() => {
          selectedAlias.pending = false
          console.error('Error when deleting an alias')
        })
      }
    },
    // Validation for the shorten url form
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.requestAlias()
        } else {
          return false
        }
      })
    }
  },
  mounted () {
    // Load any saved aliases from localStorage
    if (localStorage.myAliases) {
      this.myAliases = JSON.parse(localStorage.myAliases)
    }
  },
  watch: {
    // Update saved aliases in localStage whenever the local object is changed
    myAliases: {
      handler: (newAliases) => {
        localStorage.myAliases = JSON.stringify(newAliases)
      },
      deep: true
    }
  }
}
</script>
<style lang="sass"></style>
