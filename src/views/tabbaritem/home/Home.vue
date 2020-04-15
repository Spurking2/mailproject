<template>
    <div id="home">
      <Navbar class="home-navbar">
        <div slot="left">left</div>
        <div slot="center">center</div>
        <div slot="right">right</div>
      </Navbar>
      <Control-view @tabClick="tabClick" ref="control1" class="showControl" v-show="isShowControl"></Control-view>

      <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll" 
              :pullUpLoad="true" @imgload="imgmore">
        
          <Swiper :banners='banners' @swiperImgLoad="swiperImgLoad"></Swiper>
          <RecommendView :recommends="recommends"></RecommendView>
          <Feature></Feature>
          <Control-view @tabClick="tabClick" ref="control"></Control-view>
          <Control-list :goods="showGoods"></Control-list>
        </scroll>    
          
        <Backtop @click.native="backClick" v-show="isShowBackTop"></Backtop>
      
      </div>
</template>

<script>
import Navbar from 'components/common/Navbar.vue'
import scroll from 'components/common/Scroll.vue'

import ControlList from 'components/content/ContralList.vue'
import Backtop from 'components/content/BackTop.vue'

import RecommendView from './HomeRecommendView.vue'
import Feature from './FeatureView.vue'
import ControlView from './ControlView.vue'
import Swiper from './Swiper.vue'

import {getHomeMultdata,getControldata} from 'network/home'



export default {
  components:{
    Navbar,
    RecommendView,
    Feature,
    ControlView,
    ControlList,
    scroll,
    Backtop,
    Swiper
  },
  data(){
    return {
      banners: [],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      isShowBackTop:false,
      isShowControl:false,
      saveY:0
    }
  },
  destroyed() {
    console.log('首页被销毁了')
  },
  activated () {
    this.$refs.scroll.scrollTo(0, this.saveY)
    this.$refs.scroll.refresh()
    console.log(this.$refs.scroll.Scroll.y)
    console.log('访问页面')
  },
  deactivated () {
    this.saveY = this.$refs.scroll.Scroll.y
    console.log(this.$refs.scroll.Scroll.y)
    console.log('离开页面')
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created () {
    this.getHomeMultdata();

    this.getControldata('pop')
    this.getControldata('new')
    this.getControldata('sell')

    console.log('home create')
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh,1)
    this.$bus.$on('itemimgload', () => {
      refresh()
    })
  },
  methods: {
    //减少请求量 防抖函数
    debounce(fn,delay){
      let timer = null
      return function(){
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(this, arguments)
        },delay)
      }
    },
    //事件监听相关方法
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.control.currentIndex = index
      this.$refs.control1.currentIndex = index
    },
    // 请求数据的相关方法
    getHomeMultdata(){
      getHomeMultdata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getControldata(type){
      const page = this.goods[type].page + 1
      getControldata(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.Scroll.finishPullUp()
        
      })
    },
    backClick(){
       this.$refs.scroll.scrollTo(0,0)
    },
    contentScroll(position){
      //判断backtop是否显示
      this.isShowBackTop = -position.y > 1000
      //决定topcontrol是否吸顶
      this.isShowControl = -position.y > 383;
    },
    imgmore(){
      this.getControldata(this.currentType)
    },
    swiperImgLoad(){
      console.log(this.$refs.control.$el.offsetTop)
    }
  },
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
  .home-navbar {
    background-color: pink;
    color: #fff;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9; */
  }

  .my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

  .content {
    overflow: hidden;
    position:absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .showControl {
    position: relative;
    z-index: 100
  }
</style>
