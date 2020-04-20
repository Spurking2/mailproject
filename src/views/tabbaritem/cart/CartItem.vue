<template>
     <div id="item">
       <div class="iconfont" :class="{check : this.imgchecked}" @click="imgChecked">&#xe607</div>
       <div><img :src="cartList.image" alt=""></div>
       <div class="content">
          <div class="item-title">{{cartList.title}}</div>
          <div class="item-desc">{{cartList.desc}}</div>
          <div class="bottom">
            <div class="item-price">¥{{(cartList.price * cartList.count).toFixed(2)}}</div>
            <span>x{{id}}</span>
          </div>
        </div>
        
      </div>
</template>

<script>
export default {
  data() {
    return {
      id:0,
      imgchecked:false
    }
  },
  props: {
    cartList:{
      type:Object,
      default:{}
    }
  },
  methods: {
    imgChecked(){
      this.imgchecked = !this.imgchecked
      this.cartList.imgChecked = !this.cartList.imgChecked
      console.log(this.imgchecked)
    },
  },
  activated () {
    this.id = this.cartList.count 
    
  },
}
</script>

<style scoped>
  #item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px black solid;
  }
  .iconfont {
    color: white;
    border: 1px black solid;
    border-radius: 50%;
  }
  .check{
    background-color: red;
    color: white;
    border: 1px red solid;
  }
   img {
    height: 120px;
    width: 90px;
    border-radius: 8px;
  }
  .content {
    width: 60%;
  }
  .item-title {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    font-size: 16px;
    font-weight: bold;
    text-align: center;
    padding: 0 10px;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
  }
  .item-desc {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    padding: 20px 10px 40px 10px;
  }
  .item-price {

    color: orange;
    padding-left: 10px;
  }
  .bottom span {
    padding-right: 10px;
  }
</style>
