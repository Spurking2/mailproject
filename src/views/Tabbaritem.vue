<template>
    <div class="tabbar-item" @click="activeItem">
      <div v-if="!isActive"><slot name="icon-img"></slot></div>
      <div v-else><slot name="icon-img-active"></slot></div>
      <div :style="activeStyle"><slot name="icon-text"></slot></div>
    </div>
</template>

<script>
export default {
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },

  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
},
methods: {
  activeItem(){
    this.$router.replace(this.path)
  }
},
}
</script>

<style>
.tabbar-item {
    flex:1;
    text-align:center;
    height: 49px;
  }
</style>
