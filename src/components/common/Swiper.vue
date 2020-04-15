<template>
    <div>
      <div id="hy-swiper">
        <div class="swiper" @touchstart="touchstart" @touchmove='touchmove' @touchend="touchend">
          <slot></slot>
        </div>

        <slot name="indicator"></slot>
        <div class="indicator">
          <slot name="indicator" v-if="showIndicator && slideCount > 1">
            <div v-for="(item, index) in slideCount" class="indi-item" 
            :class="{active:index === currentIndex - 1}" :key="index"></div>
          </slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    interval:{
      type:Number,
      default:3000
    },
    animDuration:{
      type:Number,
      default:300
    },
    moveRatio:{
      type:Number,
      default:0.25
    },
    showIndicator:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {
      slideCount:0,
      totalWidth:0,
      swiperStyle:{},
      currentIndex:1,
      scrolling:false
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();

      this.startTimer();
    }, 1000)
  },
  methods: {
    startTimer(){
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollCount(-this.currentIndex * this.totalWidth);
      },this.interval)
    },

    stopTimer(){
      window.clearInterval(this.playTimer);
    },
    scrollCount(currentPosition){
      this.scrolling = true;
    }
  },
}
</script>

<style>

</style>
