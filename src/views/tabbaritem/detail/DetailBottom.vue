<template>
  <div id="detail-bottom">
    <div class="customer">
      <span class="iconfont" style="font-size:20px;">&#xe73c</span>
      <div class="text">客服</div>
    </div>
    <div>
      <span class="iconfont" style="font-size:20px;">&#xe600</span>
      <div>店铺</div>
    </div>
    <div>
      <span class="iconfont" style="font-size:20px;">&#xe60f</span>
      <div>收藏</div>
    </div>
    <div>
      <span>加入购物车</span>
    </div>
    <div>
      <span>购买</span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  #detail-bottom {
    display: flex;
    z-index: 1000;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0px;
    background-color: #fff;
    width: 100%;
    height: 50px;
    text-align: center;
  }
  

</style>
