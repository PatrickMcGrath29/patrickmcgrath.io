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

          <div v-if="name && secretKey" class="shorten__result-wrapper">
            <el-card>
              <h5 class="shorten__result-subtitle">Shortened URL</h5>
              <a :href="localAddress + name">
                <h3 id="shortened-url" class="shorten__result-primary">
                  {{ localAddress + name }}
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
            v-if="Object.keys(aliases).length === 0"
            class="shorten__saved-aliases-empty"
          >
            <i class="el-icon-place"></i>
            <h4>It looks like you don't have any saved aliases.</h4>
            <small>Create one and it'll show up here.</small>
          </div>
          <div
            v-if="Object.keys(aliases).length > 0"
            class="shorten__saved-aliases"
          >
            <AliasCard
              v-for="(alias, index) in Object.values(aliases)"
              :key="index"
              :pending="alias.pending"
              :name="alias.name"
              :url="alias.url"
              :secret-key="alias.secretKey"
              :local-address="localAddress"
              @delete="deleteAlias(alias.name)"
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
      name: null,
      errorMessage: null,
      pending: false,
      localAddress: null,
      aliases: {}
    }
  },
  head() {
    return {
      title: 'Patrick McGrath | Shorten Urls'
    }
  },
  watch: {
    aliases: {
      handler(newAliases) {
        localStorage.aliases = JSON.stringify(newAliases)
      }
    }
  },
  mounted() {
    this.localAddress = `${window.location.origin}/shorten/`
    if (localStorage.aliases) {
      this.aliases = JSON.parse(localStorage.aliases)
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
          response.status === 200
            ? this.handleResponse(response)
            : this.handleError(response.data.message)
        })
        .catch((e) => {
          this.handleError('Unable to create alias.')
        })
    },
    // Handle a successful response when creating an alias
    handleResponse(response) {
      const { name, url, secretKey } = response.data
      this.pending = false
      this.name = name
      this.secretKey = secretKey
      this.errorMessage = null

      this.$set(this.aliases, name, {
        name,
        url,
        secretKey,
        pending: false
      })
    },
    // Handle an error received when requesting a new alias
    handleError(errorMessage) {
      this.pending = false
      this.errorMessage = errorMessage
      this.name = this.secretKey = null
    },
    // Handle a delete operation on an alias
    deleteAlias(name) {
      if (name in this.aliases) {
        const selectedAlias = this.aliases[name]
        selectedAlias.pending = true

        ShortenUrlsService.delete(name, selectedAlias.secretKey)
          .then((res) => {
            if (res.status === 200) {
              this.$delete(this.aliases, name)
            }
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
