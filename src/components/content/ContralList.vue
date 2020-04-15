<template>
    <div class="goods">
      <Contral-list-item v-for="(item,index) in goods" :goodsItem="item" :key="index">
      </Contral-list-item>
    </div>
</template>

<script>
import ContralListItem from './ContralListItem.vue'
export default {
  components: {
    ContralListItem
  },
  props: {
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
