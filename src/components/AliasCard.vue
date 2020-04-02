<template>
  <div class="alias-card">
    <el-card>
      <div class="alias-card__header">
        <h3 class="alias-card__title alias-card__long-text">
          <img v-bind:src="getOrigin() + '/favicon.ico'" onerror="this.style.display='none'">
          {{ alias }}
        </h3>
        <div class="alias-card__long-text alias-card__subtitle">{{ localAddress + alias}}</div>
      </div>
      <div class="alias-card__content-group">
        <small> goes to </small>
        <div class="alias-card__long-text">{{ fullUrl }}</div>
        <div class="alias-card__buttons">
          <el-button @click="redirect" icon="el-icon-link"></el-button>
          <el-button
            @click="$emit('delete')"
            type="danger"
            icon="el-icon-delete"
            :loading="pending"
          ></el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'alias-card',
  props: {
    secretID: String,
    fullUrl: String,
    alias: String,
    localAddress: String,
    pending: Boolean
  },
  methods: {
    redirect () {
      window.location.href = this.fullUrl
    },
    getOrigin () {
      let tempAnchor = document.createElement('a')
      tempAnchor.href = this.fullUrl
      return tempAnchor.origin
    }
  }
}
</script>
