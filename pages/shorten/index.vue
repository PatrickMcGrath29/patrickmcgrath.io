<template>
  <section id="shorten">
    <div class="primary-header center">
      <h1>
        Shorten Urls
      </h1>
    </div>
    <div class="container">
      <div class="shorten__wrapper">
        <el-divider
          ><h3 class="shorten__section-header">
            Create A New Alias
          </h3></el-divider
        >
        <div class="shorten__form-wrapper">
          <el-card>
            <el-form
              ref="alias-form"
              :model="formFields"
              :rules="form_rules"
              class="shorten__form"
            >
              <el-form-item prop="proposedFullUrl" type="url">
                <el-input
                  v-model="formFields.proposedFullUrl"
                  type="url"
                  autocomplete="off"
                  prefix-icon="el-icon-link"
                  placeholder="a long url"
                ></el-input>
              </el-form-item>
              <el-form-item prop="proposedAlias">
                <el-input
                  v-model="formFields.proposedAlias"
                  autocomplete="off"
                  prefix-icon="el-icon-key"
                  placeholder="alias"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="info"
                  :loading="pending"
                  class="shorten__submit-button"
                  @click="submitForm('alias-form')"
                  >shorten</el-button
                >
              </el-form-item>
            </el-form>
            <div class="shorten__implementation-description">
              <small>
                Powered by
                <a href="https://github.com/PatrickMcGrath29/stella">Stella</a>,
                built with Nginx, Node.js, Docker, and MongoDB.</small
              >
            </div>
          </el-card>

          <div v-if="resultAlias && secretID" class="shorten__result-wrapper">
            <el-card>
              <h5 class="shorten__result-subtitle">Shortened URL</h5>
              <a :href="localAddress + resultAlias">
                <h3 id="shortened-url" class="shorten__result-primary">
                  {{ localAddress + resultAlias }}
                </h3>
              </a>
            </el-card>
          </div>
          <div v-if="errorMessage" class="shorten__result-wrapper">
            <el-card>
              <h5 class="shorten__result-subtitle">Error Message</h5>
              <h3 class="shorten__result-primary">{{ errorMessage }}</h3>
            </el-card>
          </div>
        </div>
        <el-divider
          ><h3 class="shorten__section-header">Saved Aliases</h3></el-divider
        >
        <div class="shorten__saved-aliases-wrapper">
          <div
            v-if="myAliases.length == 0"
            class="shorten__saved-aliases-empty"
          >
            <i class="el-icon-place"></i>
            <h4>Oh no, it looks like you don't have any saved aliases.</h4>
            <small>Create one and it'll show up here.</small>
          </div>
          <div v-if="myAliases.length > 0" class="shorten__saved-aliases">
            <AliasCard
              v-for="(aliasData, index) in myAliases"
              :key="index"
              :pending="aliasData.pending"
              :alias="aliasData.alias"
              :full-url="aliasData.fullUrl"
              :secret-i-d="aliasData.secretID"
              :local-address="localAddress"
              @delete="deleteAlias(aliasData.alias)"
            />
          </div>
          <div class="shorten__saved-aliases-disclaimer">
            <small> Saved aliases do not transfer between devices. </small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AliasCard from '@/components/AliasCard'
import ShortenUrlsService from '@/services/shortenUrls.service'

export default {
  name: 'ShortenIndex',
  components: {
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
        proposedAlias: [{ required: true, message: 'Please enter an alias' }]
      },
      secretID: null,
      resultAlias: null,
      errorMessage: null,
      pending: false,
      localAddress: null,
      myAliases: []
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
  },
  mounted() {
    this.localAddress = `${window.location.origin}/shorten/`
    // Load any saved aliases from localStorage
    if (localStorage.myAliases) {
      this.myAliases = JSON.parse(localStorage.myAliases)
    }
  },
  methods: {
    // Use the ShortenUrlsService to request a new alias
    requestAlias() {
      this.pending = true
      ShortenUrlsService.create(
        this.formFields.proposedAlias,
        this.formFields.proposedFullUrl
      )
        .then((response) => {
          response.data.errorMessage
            ? this.handleError(response.data.errorMessage)
            : this.handleResponse(response)
        })
        .catch(() => {
          this.handleError('Unable to create alias.')
        })
    },
    // Handle a successful response when creating an alias
    handleResponse(response) {
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
    handleError(errorMessage) {
      this.pending = false
      this.errorMessage = errorMessage
      this.resultAlias = this.secretID = null
    },
    // Handle a delete operation on an alias
    deleteAlias(aliasId) {
      let selectedAlias
      this.myAliases.forEach((a) => {
        if (a.alias === aliasId) {
          selectedAlias = a
        }
      })
      if (selectedAlias) {
        selectedAlias.pending = true
        ShortenUrlsService.delete(aliasId, selectedAlias.secretID)
          .then((res) => {
            this.myAliases = this.myAliases.filter((a) => {
              return a !== selectedAlias
            })
          })
          .catch(() => {
            selectedAlias.pending = false
          })
      }
    },
    // Validation for the shorten url form
    submitForm(formName) {
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
