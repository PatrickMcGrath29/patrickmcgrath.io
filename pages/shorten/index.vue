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
              <el-form-item prop="proposedURL" type="url">
                <el-input
                  v-model="formFields.proposedURL"
                  type="url"
                  autocomplete="off"
                  prefix-icon="el-icon-link"
                  placeholder="a long url"
                ></el-input>
              </el-form-item>
              <el-form-item prop="proposedName">
                <el-input
                  v-model="formFields.proposedName"
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
                <a href="https://github.com/PatrickMcGrath29/stella-serverless"
                  >Stella Serverless</a
                >, built with Flask, Serverless, MongoDB, and AWS.</small
              >
            </div>
          </el-card>

          <div v-if="resultName && secretKey" class="shorten__result-wrapper">
            <el-card>
              <h5 class="shorten__result-subtitle">Shortened URL</h5>
              <a :href="localAddress + resultName">
                <h3 id="shortened-url" class="shorten__result-primary">
                  {{ localAddress + resultName }}
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
            <h4>It looks like you don't have any saved aliases.</h4>
            <small>Create one and it'll show up here.</small>
          </div>
          <div v-if="myAliases.length > 0" class="shorten__saved-aliases">
            <AliasCard
              v-for="(aliasData, index) in myAliases"
              :key="index"
              :pending="aliasData.pending"
              :name="aliasData.name"
              :url="aliasData.url"
              :secret-key="aliasData.secretKey"
              :local-address="localAddress"
              @delete="deleteAlias(aliasData.name)"
            />
          </div>
          <div class="shorten__saved-aliases-disclaimer">
            <small>
              The configuration cards for aliases are stored locally on your
              browser, and do not transfer between devices.
            </small>
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
        proposedURL: null,
        proposedName: null
      },
      form_rules: {
        proposedURL: [
          { required: true, message: 'Please enter a valid URL', type: 'url' }
        ],
        proposedName: [{ required: true, message: 'Please enter an alias' }]
      },
      secretKey: null,
      resultName: null,
      errorMessage: null,
      pending: false,
      localAddress: null,
      myAliases: []
    }
  },
  head() {
    return {
      title: 'Patrick McGrath | Shorten Urls'
    }
  },
  watch: {
    // Update saved aliases in localStage whenever the local object is changed
    myAliases: {
      handler(newAliases) {
        localStorage.myAliases = JSON.stringify(newAliases)
      },
      deep: true
    }
  },
  mounted() {
    this.localAddress = `${window.location.origin}/shorten/` // Load any saved aliases from localStorage
    if (localStorage.myAliases) {
      this.myAliases = JSON.parse(localStorage.myAliases)
    }
  },
  methods: {
    // Use the ShortenUrlsService to request a new alias
    requestAlias() {
      this.pending = true
      ShortenUrlsService.create(
        this.formFields.proposedName,
        this.formFields.proposedURL
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
      this.resultName = response.data.name
      this.secretKey = response.data.secret_id
      this.errorMessage = null
      this.myAliases.push({
        url: response.data.url,
        name: this.resultName,
        secret_key: this.secretKey,
        pending: false
      })
    },
    // Handle an error received when requesting a new alias
    handleError(errorMessage) {
      this.pending = false
      this.errorMessage = errorMessage
      this.resultName = this.secretKey = null
    },
    // Handle a delete operation on an alias
    deleteAlias(name) {
      let selectedAlias
      this.myAliases.forEach((a) => {
        if (a.name === name) {
          selectedAlias = a
        }
      })
      if (selectedAlias) {
        selectedAlias.pending = true
        ShortenUrlsService.delete(name, selectedAlias.secretKey)
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
