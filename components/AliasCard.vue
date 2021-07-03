<template>
  <div class="alias-card">
    <el-card>
      <div class="alias-card__header">
        <h3 class="alias-card__title alias-card__long-text">
          <img
            :src="getOrigin() + '/favicon.ico'"
            onerror="this.style.display='none'"
          />
          {{ name }}
        </h3>
        <div class="alias-card__long-text alias-card__subtitle">
          {{ localAddress + name }}
        </div>
      </div>
      <div class="alias-card__content-group">
        <small> goes to </small>
        <div class="alias-card__long-text">{{ url }}</div>
        <div class="alias-card__buttons">
          <el-button icon="el-icon-link" @click="redirect"></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            :loading="pending"
            @click="$emit('delete')"
          ></el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AliasCard',
  props: {
    secretKey: {
      type: String,
      default: null
    },
    url: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    localAddress: {
      type: String,
      default: null
    },
    pending: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    redirect() {
      window.location.href = this.url
    },
    getOrigin() {
      const tempAnchor = document.createElement('a')
      tempAnchor.href = this.url
      return tempAnchor.origin
    }
  }
}
</script>
