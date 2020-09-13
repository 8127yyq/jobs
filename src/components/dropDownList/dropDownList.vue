<template>
    <div class="select">
      <span :class="{'classA':isA}">{{jobtitle}}<i class="iconfont icon-lower-triangle" :class="{'iconA':isA}"></i></span>
      <div class="showul" v-if="isDrop">
        <!-- <ul class="select_ul">
          <li class="select_li">不限</li>
          <li class="select_li">白云</li>
          <li class="select_li">天河</li>
          <li class="select_li">番禺</li>
          <li class="select_li">海珠</li>
          <li class="select_li">花都</li>
          <li class="select_li">越秀</li>
          <li class="select_li">增城</li>
          <li class="select_li">黄埔</li>
          <li class="select_li">荔湾</li>
          <li class="select_li">南沙</li>
        </ul> -->
        <ul class="select_ul">
          <li class="select_li" v-for="(item, index) in cities" :key="index">{{item}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "DropDownList",
  props: {
    jobtitle: {
      type: String,
      default: '地区'
    },
    isDrop: {
      type: Boolean,
      default: false
    },
    isA: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cities: [
        '不限', '白云', '天河', '番禺', '海珠', '花都', '越秀', '增城', '黄埔', '荔湾', '南沙'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.select
  .classA
    color: #f03d37
    .iconA
      display: inline-block
      -moz-transform:scaleY(-1)
      -webkit-transform:scaleY(-1)
      -o-transform:scaleY(-1)
      transform:scaleY(-1)
  .showul
    width: 100%
    height: 100%
    z-index: 30
    .select_ul
      position: absolute
      top: 45px
      left: 0
      width: 100%
      overflow: hidden
      z-index: 30
      background-color: #fff
      .select_li
          list-style: none
          margin-left: 5px
          line-height: 40px
          padding-left: 15px
          border-bottom: solid 1px #e6e6e6
</style>
