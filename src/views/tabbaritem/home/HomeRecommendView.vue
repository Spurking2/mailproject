<template>
    <div class="recommend">
      <div v-for="(item,index) in recommends" class="recommend-item" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div class="">{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
  font-size: 12px;
}
.recommend-item {
  flex:1;
}
.recommend-item img {
  width: 65px;
  height: 65px;
  margin-bottom: 10px;
}
.recommend-item a {
  text-decoration:none;
  color:black;
}
</style>
