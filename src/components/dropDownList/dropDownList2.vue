<template>
    <div class="select">
      <span :class="{'classA':isB}">{{jobtitle}}<i class="iconfont icon-lower-triangle" :class="{'iconA':isB}"></i></span>
      <div class="showul" v-if="isDrop2">
        <ul class="select_ul">
          <li class="select_li" v-for="(item, index) in types" :key="index">{{types[index]}}</li>
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
    isDrop2: {
      type: Boolean,
      default: false
    },
    isB: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      types: [
        '不限', '学生兼职', '促销/导购', '传单派发', '钟点工', '服务生', '生活配送员', '护工', '月嫂阿姨', '问卷调查', '活动策划'
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
