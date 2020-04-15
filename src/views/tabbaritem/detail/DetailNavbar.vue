<template>
    <div>
      <Navbar>
        <div slot="left" class="backImg" @click="goback">
          <img src="~assets/img/arrow-right.png" alt="">
        </div>
        <div slot="center" class="title" >
          <div v-for="(item, index) in titles" :key="index" class="titleitem" 
          :class="{active : index === currentIndex}"
          @click="activeTitle(index)">
            {{item}}
          </div>
        </div>
      </Navbar>
    </div>
</template>

<script>
import Navbar from 'components/common/Navbar.vue'
export default {
  components: {
    Navbar
  },
  data() {
    return {
      titles:['商品', '参数', '评论', '推荐'],
      currentIndex:0
    }
  },
  methods: {
    activeTitle(index){
      this.currentIndex = index
      this.$emit('nav-click', index)
    },
    goback(){
      this.$router.back()
    }
  },
}
</script>

<style scoped> 
  .title {
    display: flex;
  }
  .titleitem {
    flex:1
  }
  .backImg img{
    width: 50%;
    height: 50%;
    margin-top: 7px;
    transform: rotateY(180deg);
    -webkit-transform:rotate(180deg);
  }

  .active {
    color: red
  }

</style>
