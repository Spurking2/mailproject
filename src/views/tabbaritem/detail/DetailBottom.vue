<template>
  <div id="detail-bottom">
    <div class="customer detail-bottom">
      <span class="iconfont" style="font-size:20px;">&#xe73c</span>
      <div class="text">客服</div>
    </div>
    <div class="detail-bottom">
      <span class="iconfont" style="font-size:20px;">&#xe600</span>
      <div>店铺</div>
    </div>
    <div class="detail-bottom">
      <span class="iconfont" style="font-size:20px;">&#xe60f</span>
      <div>收藏</div>
    </div>
    <div class="bottom-car detail-bottom" @click="addClick">
      <span>加入购物车</span>
    </div>
    <div class="detail-bottom bottom-buy">
      <span>购买</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addClick(){
      this.$emit('addClick')
    }
  },
}
</script>

<style scoped>
  #detail-bottom {
    display: flex;
    z-index: 1000;
    /* justify-content: space-around; */
    align-items: center;
    position: fixed;
    bottom: 0px;
    background-color: #fff;
    width: 100%;
    height: 50px;
    text-align: center;
  }
.detail-bottom  {
  flex:1;
}
.customer span{
  color: red;
}
.bottom-car {
  background: yellow;
  height:50px;
  font-size: 15px;
  line-height: 50px;
  flex: 1.5;
}
.bottom-buy {
  background: rgba(252, 112, 169);
  height: 50px;
  line-height: 50px;
  flex: 1.3;
  color: #fff;
}
</style>
