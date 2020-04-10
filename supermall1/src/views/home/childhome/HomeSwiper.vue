<template>
  <div id="homeswiper">
    <swiper>
      <swiper-item v-for="(item,index) in bannerList" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper,SwiperItem} from  "common/swiper"
export default {
  name:"HomeSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    bannerList:Array
  }
}
</script>
<style scoped>

</style>