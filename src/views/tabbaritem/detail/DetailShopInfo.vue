<template>
    <div>
      <div class="detail-shop-title">
        <img :src="shop.logo" alt="">
        <span>{{shop.name}}</span>
      </div>

      <div class="shop-middle">
        <div class="shop-middle-item shop-middle-left">
          <div>
            <div class="shop-middle-item-N">{{shop.cSell | filtercSell}}</div>
            <div>总销量</div>
          </div>
          <div>
            <div class="shop-middle-item-N">{{shop.goods}}</div>
            <div>全部宝贝</div>
          </div>
        </div>

        <div class="shop-middle-right">
          <table>
            <tr v-for="(item, index) in shop.score" :key="index">
              <td>{{item.name}}</td>
              <td class="score" :class="{'better-score' : item.isBetter}">{{item.score}}</td>
              <td class="text" :class="{'better-text' : item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="shop-middle-bottom">
        <span class="shop-middle-bottom-text">进店逛逛</span>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    shop:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    filtercSell(value){
      if(value > 10000){
        return (value / 10000).toFixed(1) + '万'
      }
      else{
        return value
      }
    }
  }
}
</script>

<style scoped>
  .detail-shop-title {
    padding: 15px 8px;
    line-height: 40px;
    display: flex;
    align-items: center;
  }
  .detail-shop-title img {
    margin-right: 10px;
    width: 15%;
    height:15%;
    border: 1px solid black;
    border-radius: 50%;
  }

  .shop-middle {
    display: flex;
    align-items: center;
    font-size: 10px;
    text-align: center;
    border: 40px soild black; 
  }
  .shop-middle-item {
    flex:1;
  }
  .shop-middle-left {
    display:flex;
    justify-content: space-evenly;
    border-right: 1px solid rgba(0, 0, 0, 1);
  }
  .shop-middle-item-N {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  .shop-middle-right table {
    width: 140px;
    margin-right: 15px;
  }
  .score {
    color: green;
  }
  .better-score {
    color: red;
  }
  .text {
    color: white;
    background-color: green;
  }
  .better-text {
    background-color: red;
  }
  .shop-middle-bottom{
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 6px solid rgba(244, 244, 244, 1);
  }
  .shop-middle-bottom-text {
    padding: 2px  30px;
    border-radius: 10px;
    background-color: #d3dce6;
  }
</style>
