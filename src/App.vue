<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    
    <Tabbar>
      <TabbarItem path="/home">
        <span slot="icon-img" class="iconfont" style="font-size:25px">&#xe69a</span>
        <span slot="icon-img-active" class="iconfont" style="font-size:25px; color:red;">&#xe69a</span>
        <div slot="icon-text">首页</div>
      </TabbarItem>

      <TabbarItem path="/category">
        <span slot="icon-img" class="iconfont" style="font-size:25px">&#xe652</span>
        <span slot="icon-img-active" class="iconfont" style="font-size:25px; color:red;">&#xe652</span>
        <div slot="icon-text">分类</div>
      </TabbarItem>
   
      <TabbarItem path="/cart">
        <span slot="icon-img" class="iconfont" style="font-size:25px">&#xe618</span>
        <span slot="icon-img-active" class="iconfont" style="font-size:25px; color:red;">&#xe618</span>
        <div slot="icon-text">购物车</div>
      </TabbarItem>
    
      <TabbarItem path="/profile">
        <span slot="icon-img" class="iconfont" style="font-size:25px">&#xe66e</span>
        <span slot="icon-img-active" class="iconfont" style="font-size:25px; color:red;">&#xe66e</span>
        <div slot="icon-text">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from 'views/Tabbar.vue'
  import TabbarItem from 'views/Tabbaritem.vue'

export default {
  name: 'App',
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>
@import 'assets/css/base.css';
</style>
