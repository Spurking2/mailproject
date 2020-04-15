<template>
    <div class="goodsitem">
      <img :src="showImage" alt="" @load="imgload" @click="goDetail">
      <div class="goodsinfo">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    },
  },
  methods: {
    imgload(){
      this.$bus.$emit('itemimgload')
    },
    goDetail(){
      this.$router.push('/Detail/' + this.goodsItem.iid)
    }
  },
  computed: {
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
}
</script>

<style scoped>
.goodsitem {
  padding-bottom: 40px;
  position: relative;
  width: 46%;
}
.goodsitem img {
  width: 100%;
  border-radius: 5px;
}
.goodsinfo {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0px;
  right: 0px;
  overflow: hidden;
  text-align: center;
}
.goodsinfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goodsinfo .price {
  color: pink;
  margin-right:20px;
}
.goodsinfo .collect {
  position:absolute;
}
.goodsinfo .collect::before{
  content: '';
  position:absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/collect.png") 0 0/14px 14px;
}
</style>
