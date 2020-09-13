<template>
  <header class="header">
    <h2 class="h2">{{title}}</h2>
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
    .h2
      font-size: 18px
      text-align: center
      line-height: 50px
      font-weight: bold
</style>
