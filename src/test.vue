<template>
  <div>

    <div class="test" @touchstart="gtouchstart()" @touchmove="gtouchmove()" @touchend="gtouchend()">试一试呀!</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        
    }
  },
    methods:{
        gtouchstart(){
            window.console.log('1，按下啦啦啦啦啦')
            
        },
        gtouchmove(){
            window.console.log('2，按下并且在移动呢')
        },
        gtouchend(){
            window.console.log('3，松开啦啦啦啦啦')
        }
    }
}
</script>
<style scoped>
    .test{
        width: 100%;
        height: 50px;;
        text-align: center;
        background-color: red;
        line-height: 50px;
        font-size: 50px;
    }
 
</style>
