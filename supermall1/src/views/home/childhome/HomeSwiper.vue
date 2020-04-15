<template>
  <div id="homeswiper">
    <swiper>
      <swiper-item v-for="(item,index) in bannerList" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoadFinish">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper,SwiperItem} from  "common/swiper"
export default {
  name:"HomeSwiper",
  data(){
    return {
      useOnce:false
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    bannerList:Array
  },
  methods:{
    imgLoadFinish(){
      if(!this.useOnce){
        this.$emit("imgLoadFinish");
        this.useOnce=true
      }
    }
  }
}
</script>
<style scoped>

</style>