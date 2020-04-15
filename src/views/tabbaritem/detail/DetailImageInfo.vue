<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div class="detail-info-desc">{{detailInfo.desc}}</div>
    <div class="detail-info-key">{{detailInfo.detailImage[0].key}}</div>
    <div v-for="(item, index) in detailInfo.detailImage[0].list" :key="index">
      <img :src="item" alt="" @load="imgload">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // count:0,
      // imgLength:0
    }
  },
  props: {
    detailInfo:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    // imgload(){
    //   if(++this.count === this.imgLength){
    //     this.$emit('imageload')
    //   }
    // },
    imgload(){
      // this.$bus.$emit('imageload')
      this.$emit('imageload')
    }
  },
  // watch: {
  //   detailInfo(){
  //     this.imgLength = this.detailInfo.detailImage[0].list.length
  //   }
  // }
}
</script>

<style scoped>
  img {
    width: 100%;
  }
  .detail-info-desc {
    padding-bottom: 20px;
  }
   .detail-info-key {
    font-weight: 600;
    padding-bottom: 15px;
  }
</style>
