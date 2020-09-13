<template>
  <div id="jobs">
    <div id="jobs_input">
      <Header title="58同城"/>
      <div class="jobs_input_wrapper">
        <input class="input_text" type="text" placeholder="搜索" v-model="userinput">
        <i class="icon iconfont icon-sousuo" v-if="isicon"></i>
      </div>
    </div>
    <div class="menu">
      <div class="selects" @click="selectClick">
        <!-- <span>地区<i class="iconfont icon-lower-triangle"></i></span> -->
        <DropDownList :isDrop="isDrop" :isA="isA" jobtitle="地区"/>
      </div>
      <div class="selects" @click="selectClick2">
        <!-- <span>类型<i class="iconfont icon-lower-triangle"></i></span> -->
        <DropDownList2 :isDrop2="isDrop2" :isB="isB" jobtitle="类型"/>
      </div>
      <div class="selects">
        <span>薪资<i class="iconfont icon-lower-triangle"></i></span>
      </div>
      <div class="selects">
        <span>排序<i class="iconfont icon-lower-triangle"></i></span>
      </div>
    </div>
    <div class="content">
      <div class="job_body" ref="jobscroll">
        <ul class="job_ul">
          <li class="job_li" v-for="item in alljobs" :key="item.id" @click="SelectJobInfo(item)">
            <div class="job_info">
              <h2 class="h2">{{item.title}}</h2>
              <p><span>{{item.city}}</span><span>{{item.type}}</span> </p>
              <p>{{item.com}}</p>
              <p class="money">{{item.money}}<span class="time">{{item.time}}</span></p>
            </div>
            <div class="job_task">
              <div class="btn_pre">
                投递
              </div>
              <p class="detail">精准</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="mask"  v-show="listShow" @click.prevent="ShowJobs"></div>
      <div class="mask"  v-show="listShow2" @click.prevent="ShowJobs2"></div>
    </div>
  </div>
</template>

<script>
import Header from 'components/header/header'
import DropDownList from 'components/dropDownList/dropDownList'
import DropDownList2 from 'components/dropDownList/dropDownList2'
import alljobs from '@/api/index.json'
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      isDrop: false,
      isDrop2: false,
      isA: false,
      isB: false,
      isicon: true,
      userinput: ''
    }
  },
  created() {
    this.alljobs = alljobs.alljobs
    // console.log(alljobs.alljobs)
  },
  computed: {
    listShow () {
      if (this.alljobs === 0) {
        this.isDrop = false
        return false
      }
      return this.isDrop
    },
    listShow2 () {
      if (this.alljobs === 0) {
        this.isDrop2 = false
        return false
      }
      return this.isDrop2
    }
  },
  methods: {
    selectClick() {
      this.isDrop = !this.isDrop
      this.isA = !this.isA
    },
    selectClick2() {
      this.isDrop2 = !this.isDrop2
      this.isB = !this.isB
    },
    SelectJobInfo(item) {
      this.$router.push({
        path: `main/${item.id}`
      })
      this.setjobinfo(item)
    },
    ShowJobs() {
      if (this.alljobs) {
        this.isDrop = !this.isDrop
        this.isA = !this.isA
      }
    },
    ShowJobs2() {
      if (this.alljobs) {
        this.isDrop2 = !this.isDrop2
        this.isB = !this.isB
      }
    },
    ...mapMutations({
      setjobinfo: 'SET_JOBSINFO'
    })
  },
  components: {
    Header,
    DropDownList,
    DropDownList2
  },
  watch: {
    userinput(val, oldval) {
      if(val) {
        this.isicon = false
      }
      else {
        this.isicon = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  #jobs_input
    padding: 0 10px
    .jobs_input_wrapper
      padding: 0 10px
      background-color: #f7f7f7
      display: flex
      line-height: 20px
      justify-content: center
      .input_text
        border: 0
        width: 100%
        text-align: center
        line-height: 30px
        outline: 0;
        -webkit-appearance: none
        background-color: transparent
      input::-webkit-input-placeholder
        color: #888
        padding-left: 15px
      .icon
        display: inline-block
        position: absolute
        z-index: 2
        padding-right: 35px
        margin-top: 3px
        color: #666
  .menu
    width: 100%
    height: 45px
    border-bottom: 1px solid #e6e6e6
    display: flex
    top: 80px
    justify-content: space-between
    align-items: center
    background: white
    position: absolute
    .selects
      margin: 0 20px
      height: 100%
      line-height: 45px
      font-size: 15px
    // .selects.active
    //   color: #ef4238
  .content
    position: absolute
    bottom: 0
    width: 100%
    top: 125px
    flex: 1
    overflow-y: scroll
    .job_body
      overflow: auto
      position: relative
      z-index: 10
      .job_ul
        margin:0 12px
        overflow: hidden
        .job_li
          margin-top: 8px
          display: flex
          align-items: center
          border-bottom: 1px #e6e6e6 solid
          padding-bottom: 10px
          .job_info
            margin-left: 10px
            flex: 1
            position: relative
            .h2
              font-size: 17px
              line-height: 24px
              width: auto
              overflow: hidden
              white-space: nowrap
              text-overflow: ellipsis
            p
              font-size: 13px
              color: #666
              line-height: 20px
              width: 200px
              overflow: hidden
              white-space: nowrap
              text-overflow: ellipsis
              span
                margin-right: 15px
            .money
              color: #f03d37
              font-size: 17px
              .time
                font-size: 13px
          .job_task
            .btn_pre
              width: 47px
              height: 27px
              line-height: 28px
              text-align: center
              color: #f03d37
              border: 1px solid #f03d37
              font-size: 15px
              cursor: pointer
            .detail
              font-size: 13px
              margin: 40px 0 0px 18px
              position: relative
              color: #666
    .mask
      position: fixed
      left: 0
      width: 100%
      height: 100%
      z-index: 15
      top: 125px
      opacity: 1
      background: rgba(7, 17, 27, 0.6)
      // top: 125px
</style>
