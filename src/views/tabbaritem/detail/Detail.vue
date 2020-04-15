<template>
    <div id="detail">
      <Detail-navbar class="detail-nav" @nav-click="navClick" :currentIndex="current" ref="nav"></Detail-navbar>

      <Scroll class="content" ref="scroll" :probeType="3" @scroll="Sposition">
        <Detail-swiper :topimage="topimage"></Detail-swiper>
        <Detail-base-info :goods="goods"></Detail-base-info>
        <Detail-shop-info :shop="shop"></Detail-shop-info>
        <Detail-image-info :detailInfo="detailInfo" @imageload="imageload"></Detail-image-info>
        <Detail-item-params :detailItemParams="detailItemParams" ref="params"></Detail-item-params>
        <Detail-rate :rate="rate" ref="rate"></Detail-rate>
        <Goods-img :goods="recommend" ref="goodsimg"></Goods-img>
      </Scroll>
      <Detail-bottom></Detail-bottom>
    </div>
</template>

<script>
 import DetailNavbar from './DetailNavbar.vue'
 import DetailSwiper from './Detailswiper.vue'
 import {getDetailData, recommenddata, Goods, Shop} from 'network/detail.js'
 import DetailBaseInfo from './DetailBaseInfo.vue'
 import DetailShopInfo from './DetailShopInfo.vue'
 import DetailImageInfo from './DetailImageInfo.vue'
 import DetailItemParams from './DetailItemParams.vue'
 import DetailRate from './DetailRate.vue'
 import DetailBottom from './DetailBottom'

 import Scroll from 'components/common/Scroll.vue'
 import GoodsImg from 'components/content/ContralList.vue'

export default {
  name:'Detail',
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    DetailItemParams,
    DetailRate,
    Scroll,
    GoodsImg,
    DetailBottom
  },
  data() {
    return {
      iid:null,
      topimage:[],
      goods:{},
      shop:{},
      detailInfo: {},
      detailItemParams:{},
      rate:{},
      recommend:[],
      navposition:[],
      get:null,
      current:0,
      currentIndex:0
    }
  },
  created () {
    this.iid = this.$route.params.iid

    getDetailData(this.iid).then(res => {
      this.topimage = res.result.itemInfo.topImages
      console.log(res)
      console.log(this.topimage)

      //商品详细信息数据
      this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)

      this.shop = new Shop(res.result.shopInfo)

      this.detailInfo = res.result.detailInfo

      this.detailItemParams = res.result.itemParams

      this.rate = res.result.rate

   
    })
    
    recommenddata().then(res => {
      this.recommend = res.data.list
      console.log(res)
    })
      this.get = this.debounce(() => {
      this.navposition = []
      this.navposition.push(0)
      this.navposition.push(this.$refs.params.$el.offsetTop - 44)
      this.navposition.push(this.$refs.rate.$el.offsetTop -44)
      this.navposition.push(this.$refs.goodsimg.$el.offsetTop -44)
      this.navposition.push(Number.MAX_VALUE)

      console.log(this.navposition)
      },50)

      //  this.$nextTick(() => {
      // this.navposition.push(0)
      // this.navposition.push(this.$refs.params.$el.offsetTop)
      // this.navposition.push(this.$refs.rate.$el.offsetTop)
      // this.navposition.push(this.$refs.goodsimg.$el.offsetTop)
      // console.log(this.navposition)
      // })
  },
  mounted () {
    // const refresh = this.debounce(this.$refs.scroll.refresh,50)
    // this.$bus.$on('imageload', () => {
    //   refresh()
    // })

  },
  methods: {
    imageload(){
      const refresh = this.debounce(this.$refs.scroll.refresh,50)
      refresh()

      this.get()
    },
    Sposition(position){
      // console.log(position)

      const positionY = -position.y
      for(let i = 0; i < this.navposition.length; i++){
        if(this.currentIndex !== i && (positionY >= this.navposition[i] && positionY < this.navposition[i + 1])){
          
          this.currentIndex  = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    },
    debounce(fn,delay){
      let timer = null
      return function(){
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(this, arguments)
        },delay)
      }
    },
    navClick(index){
      console.log(index)
      this.$refs.scroll.scrollTo(0,-this.navposition[index],100)

    }
  },
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 1;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px );
  }
</style>
