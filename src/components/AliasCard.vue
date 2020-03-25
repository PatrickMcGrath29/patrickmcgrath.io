<template>
  <div class="shorten__alias-card">
    <el-card>
      <small> Alias </small>
      {{ alias }}
      <small> Url </small>
      {{ fullUrl }}
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'alias-card',
  props: {
    secretID: String,
    fullUrl: String,
    alias: String
  }
}
</script>
