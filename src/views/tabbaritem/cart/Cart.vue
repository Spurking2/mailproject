<template>
    <div id="cart">
      <Cart-nav-bar class="cart-nav">
        <div slot="center" class="nav-center">购物车 ({{cartLength}})</div>
      </Cart-nav-bar>
        <Cart-list></Cart-list>
      
       <div class="bottom">
        <div class="bottom-left">
          <span class="iconfont a1">&#xe607</span>
          <span class="bottom-text">全选</span>
          <span>合计: {{totalPrice}}</span>
        </div>
        <div class="bottom-right">
          <div>去结算 ({{checkedLength}})</div>
        </div>
      </div>

    </div>
</template>

<script>
import CartNavBar from 'components/common/Navbar.vue'
import CartList from './CartList.vue'


import {mapGetters} from 'vuex'

export default {
  components:{
    CartNavBar,
    CartList,
  },
  computed: {
    ...mapGetters([
      'cartLength',
      'cartList'
    ]),
    totalPrice(){
      return this.cartList.filter(item => {
        return item.imgChecked
      }).reduce((preVaule, arr) => {
        return preVaule + arr.price * arr.count
      },0).toFixed(2)
    },

    checkedLength(){
      return this.cartList.filter(item => item.imgChecked).length
    },

  },


}
</script>

<style scoped>
  #id {
    height: 100vh
  }
  .cart-nav {
    background-color: pink;
  }
  .nav-center {
    font-size:20px;
    color: #fff;
  }

  .bottom {
    display: flex;
    align-items: center;
    height: 40px;
    position: relative;
    bottom: 131px;
    z-index: 1000;
    background-color: white;
 
  }
  .bottom-left {
    flex: 2;
  }
  .bottom-right {
    flex: 0.8;
    height: 40px;
    line-height: 40px;
    background-color:red;
    text-align: center;
  }
  .a1 {
    padding: 1px;
    border: 1px black solid;
    border-radius: 50%;
    color: gary;
    margin-left: 10px;
  }
  .bottom-text {
    margin-left: 6px;
  }
</style>
