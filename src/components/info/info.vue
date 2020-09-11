<template>
  <div class="info" ref="info">
    <div class="info_header">
      <div class="back" @click="back()">
        <i class="iconfont icon-right"></i>
      </div>
      <Header title="58同城"/>
    </div>
    <div class="info_body" @select="SelectJobInfo" ref="info">
      <div class="infos">
          <div class="info_title">
            <div class="left">
              <h2 class="h2" v-html="jobsinfo.title"></h2>
              <p class="time" v-html="jobsinfo.time"></p>
              <p class="uptime">更新时间： 2020-09-09</p>
            </div>
            <div class="right">浏览：3330次</div>
          </div>
          <div class="info_mount">
            <p>职位：<span class="span" v-html="jobsinfo.type"></span></p>
            <p>人数：<span class="span">100人</span></p>
            <p>地区：<span class="span" v-html="jobsinfo.city"></span></p>
          </div>
      </div>
      <div class="info_msg">
        <h3 class="h3">职位简介</h3>
        <p>因新开产线,因新开产线,因新开产线,因新开产线,因新开产线,因新开产线
          因新开产线,因新开产线,因新开产线,因新开产线,因新开产线,因新开产线
          因新开产线,因新开产线,因新开产线,因新开产线,因新开产线,因新开产线
          因新开产线,因新开产线,因新开产线,因新开产线,因新开产线,因新开产线
        </p>
        <p>因新开产线,因新开产线,因新开产线,因新开产线,因新开产线,因新开产线
          因新开产线,因新开产线,因新开产线,因新开产线,因新开产线,因新开产线
          因新开产线,因新开产线,因新开产线,因新开产线,因新开产线,因新开产线
          因新开产线,因新开产线,因新开产线,因新开产线,因新开产线,因新开产线
        </p>
        <p>因新开产线,因新开产线,因新开产线,因新开产线,因新开产线,因新开产线
          因新开产线,因新开产线,因新开产线,因新开产线,因新开产线,因新开产线
          因新开产线,因新开产线,因新开产线,因新开产线,因新开产线,因新开产线
          因新开产线,因新开产线,因新开产线,因新开产线,因新开产线,因新开产线
        </p>
      </div>
      <div class="info_banner">
        <img src="@/assets/timg.jpg" alt="banner">
      </div>
    </div>
    <Footer class="footer">
      <div class="share">分享</div>
      <div class="share">海报</div>
      <div class="tack">微聊</div>
    </Footer>
  </div>
</template>

<script>
import Header from 'components/header/header'
import {mapGetters} from 'vuex'
import BScroll from 'better-scroll'

export default {
  computed: {
    ...mapGetters({
      jobsinfo: 'jobsinfo'
    })
  },
  methods: {
    SelectJobInfo(item) {
      id = this.$route.params.id
    },
    back() {
      this.$router.back()
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>
.info
  position: relative
  z-index: 50
  top: 0
  left: 0
  bottom: 0
  right: 0
  width: 100%
  height: 100%
  background: #e6e6e6
  .info_header
    background: #ffffff
    position: relative
    height: 40px
    .back
      position absolute
      top: 0
      left: 2px
      z-index: 100
      .icon-right
        display: block
        padding: 10px
        font-size: 22px
        color: black
  .info_body
    padding-bottom: 50px
    background: #fff
    position: absolute
    overflow: hidden
    padding: 5px 0
    height: 620px
    margin-bottom: 50px
    flex: 1
    overflow-y: scroll
    .infos
      position: relative
      margin-left: 10px
      .info_title
        display: flex
        align-items: center
        .left
          flex: 1
          position: relative
          .h2
            font-size: 20px
            line-height: 24px
            width: 300px
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
          .time
            color: #f03d37
            font-size: 17px
          .uptime
            font-size: 8px
            color: #666
          p
            font-size: 13px
            color: #666
            line-height: 22px
        .right
          font-size: 8px
          position: relative
          color: #666
          margin-right: 15px
          margin-top: 45px
      .info_mount
        margin-top: 10px
        p
          font-size: 13px
          color: #666
          line-height: 22px
          .span
            font-size: 13px
            color: #000
            line-height: 22px
    .info_msg
      margin-top: 20px
      background: #fff
      width: 100%
      // position: fixed
      .h3
        font-size: 17px
        line-height: 24px
        margin-left: 10px
      p
        font-size: 13px
        color: #666
        line-height: 22px
        padding: 0 10px
    .info_banner
      margin: 10px 5px
      padding-bottom: 80px
  .footer
    background: #fff
    z-index: 200
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    display: flex
    text-align: center
    .share
      padding : 10px 25px
      margin: 5px 0
      font-size: 13px
    .tack
      background: #f03d37
      padding : 10px 5px
      margin: 5px 0
      margin-left: 50px
      width: 200px
      height: 100%
      color: #fff
</style>
