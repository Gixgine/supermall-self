<template>
  <div id="detailswiper">
    <swiper>
      <swiper-item v-for="(item,index) in topImages" :key="index">
        <a href="javascript:;">
          <img :src="item" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper,SwiperItem} from  "common/swiper"

export default {
  name:"DetailSwiper",
  props:{
    topImages:{
      type:Array,
      default:[]
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>
<style scoped>

</style>