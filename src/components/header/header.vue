<template>
  <header class="header">
    <h1 class="h1">{{title}}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '58'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    width:100%
    height:50px
    position: relative;
    .h1
      font-size: 18px
      text-align: center
      line-height: 50px
      font-weight: normal
</style>
