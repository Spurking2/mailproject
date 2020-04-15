<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  props:{
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      Scroll:null,
      }
    },
  mounted() {
    this.Scroll = new Bscroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })

    this.Scroll.on('scroll',(position) => {
      this.$emit('scroll',position)
    })

    this.Scroll.on('pullingUp', () => {
      this.$emit('imgload')
    })
  },
  methods: {
    scrollTo(x,y,time=300){
      this.Scroll && this.Scroll.scrollTo(x,y,time)
    },
    refresh(){
      this.Scroll && this.Scroll.refresh()
    }
  },
}
</script>

<style scoped>
/* .content {
  height: 600px;
  overflow: hidden;
} */
</style>
