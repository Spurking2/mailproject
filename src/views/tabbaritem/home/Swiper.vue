<template>
  <div>
    <div class="block">
      <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="item.image" alt="" @load="swiperImgLoad">
      </el-carousel-item>
      </el-carousel>
    </div>
    </div>
</template>

<script>
export default {
  props: {
    banners:{
      Type:Array,
       default(){
        return []
       }
    },
    data() {
      return {
        isLoad:false
      }
    },
  },
  methods: {
    swiperImgLoad(){
      if(!this.isLoad){
        this.$emit('swiperImgLoad')
        this.isLoad = true
      }
      
    }
  },
}
</script>

<style scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

img{
    width: 100%;
    height: 100%;
  }
</style>
