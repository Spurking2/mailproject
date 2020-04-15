<template>
    <div v-if="Object.keys(goods).length !==0" >
      <div class="detail-title">{{goods.title}}</div>
      <div class="detail-price">
        <span>{{goods.price}}</span>
        <span>{{goods.oldPrice}}</span>
        <span>{{goods.discountDesc}}</span>
      </div>
      <div class="detail-other">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length -1 ].name}}</span>
      </div>
      <div class="detail-services">
        <span v-for="index in goods.services.length -1 " :key="index" class="detail-services-item">
          <img :src="goods.services[index].icon">
          <span>{{goods.services[index-1].name}}</span>
        </span>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .detail-title {
    margin-bottom:30px;
  }

  .detail-price {
    margin-bottom: 30px;
  }
  .detail-price span:nth-child(1) {
    float: left;
    color: red;
    font-size: 20px;
    margin-right: 4px;
    margin-top: 2px;
  }
  .detail-price span:nth-child(2) {
    float: left;
    font-size: 14px;
    color: gray;
    text-decoration:line-through;
    margin-top: 8px;
  }

  .detail-price span:nth-child(3) {
    padding:2px 8px;
    font-size: 11px;
    color: white;
    margin-left: 10px;
    background-color: red;
    border-radius:10px 10px;
    
  }

  .detail-other {
    display: flex;
    font-size: 11px;
    justify-content: space-between;
    color: gray;
    padding-bottom: 12px;
    border-bottom: 1px solid gray;
    margin: 0 10px;
  }

  .detail-services {
    font-size: 7px;
    display: flex;
    justify-content: space-between;
    border-bottom: 6px solid rgba(244, 244, 244);
    padding: 10px 8px;
    margin: 0 5px 5px;
  }

  .detail-services-item {
    margin-top: 20px;
    padding-bottom: 15px;
  }

  .detail-services .detail-services-item img{ 
    float: left;
    margin-top: -1px;
    width: 13px;
    height: 13px; 
    }
</style>
