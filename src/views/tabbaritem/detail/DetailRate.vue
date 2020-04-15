<template>
  <div v-if="Object.keys(rate).length !== 0" class="detail-rate">
    <div class="user-item">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="user">
      <img :src="rate.list[0].user.avatar" alt="">
      <span>{{rate.list[0].user.uname}}</span>
    </div>
    <div class="user-content">{{rate.list[0].content}}</div>
    <div class="user-created">
      <span>{{rate.list[0].created | times}}</span>
      <span>{{rate.list[0].style}}</span>
    </div>
    <div class="bottom">
    <span v-for="(item, index) in rate.list[0].images" :key="index" class="info-img">
      <img :src="item" alt="">
    </span>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'components/times.js'
export default {
  props: {
    rate:{
      type:Object,
      default:{}
    }
  },
  filters:{
    times(value){
      const date = new Date(value * 1000)

      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>

<style scoped>
  .detail-rate {
    padding: 0 10px;
  }
  .user-item {
    display: flex;
    justify-content: space-between;
    padding: 20px 0 ;
    border-bottom: 6px solid rgba(244, 244, 244);
  }

  .user-item span:nth-child(1) {
    margin-left: 10px;
  }
  .user-item span:nth-child(2) {
    margin-right: 20px;
  }

  .user {
    display: flex;
    align-items: center;
    padding-top: 20px;
  }

  .user img {
    width: 18%;
    height: 18%;
    border-radius: 50% ;
    margin-right: 20px;
  }

  .user-content {
    padding-top: 20px;
    font-size: 10px;
  }

  .user-created {
    font-size: 12px;
    color: gray;
    padding: 10px 0px;  
  }
  .user-created span:nth-child(1) {
    margin-right: 10px;
  }
  .info-img {
    margin-right: 10px;
  }
  .info-img img {
    width: 40px;
    height: 40px;
  }
  .bottom {
    margin-bottom: 40px;
  }
</style>
