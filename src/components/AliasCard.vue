<template>
  <div class="alias-card">
    <el-card>
      <div class="alias-card__content-group-header">
        <h3>
          {{ alias }}
        </h3>
        <small>{{ localAddress + alias}}</small>
      </div>
      <div class="alias-card__content-group">
        <small> goes to </small>
        <div class="alias-card__ful-url">{{ fullUrl }}</div>
        <div class="alias-card__buttons">
          <el-button icon="el-icon-link"></el-button>
          <el-button type="danger" icon="el-icon-delete"></el-button>
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
    localAddress: String
  }
}
</script>
