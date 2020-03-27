<template>
  <div class="alias-card">
    <el-card>
      <div class="alias-card__content-group-header">
        <h3 class="alias-card__long-text">
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
    }
  }
}
</script>
