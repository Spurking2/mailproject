<template>
    <div class="cartlist">
      <Scroll class="content">
        <Cart-item v-for="(item, index) in cartList" :key="index" :cartList="item"></Cart-item>
      </Scroll>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

import CartItem from './CartItem.vue'
import Scroll from 'components/common/Scroll.vue'
export default {
  components:{
    CartItem,
    Scroll
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  },
}
</script>

<style scoped>
  .cartlist {
    height: 100vh;
  }
  .content {
    height: calc(100% - 44px - 50px - 40px);
    background-color: #fff;
    overflow: hidden;
  }

</style>
