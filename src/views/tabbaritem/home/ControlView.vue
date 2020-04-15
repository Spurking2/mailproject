<template>
    <div class="control">
      <div  v-for="(item,index) in control" :key="index" class="controlitem" 
      :class="{active : index === currentIndex}" @click="tabitem(index)">
        <span>
          {{item}}
        </span>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      control:['流行','新款','推荐'],
      currentIndex:0
    }
  },
  methods: {
    tabitem(index){
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  },
}
</script>

<style scoped>

.control {
  display: flex;
  text-align: center;
  padding: 5px 0;
  font-size: 20px;
  /* position: sticky; */
  /* top: 44px;*/
  background: #fff;
  /* z-index: 1; */

}
.control .controlitem {
  flex: 1;
  padding: 2px 0;
}

.active span {
   border-bottom: 2px solid pink;
   padding: 0 2px;
}

.active {
  color:pink;
} 
</style>
