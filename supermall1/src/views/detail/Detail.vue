<template>
  <div id = "detail">
    <child-detail></child-detail>
    <detail-swiper :topImages="topImages"></detail-swiper>
  </div>
</template>
<script>
import ChildDetail from "./childdetail/ChildDetail"
import {getDetail} from "network/detail/getDetail"
import DetailSwiper from "./childdetail/DetailSwiper"

export default {
  name:"Detail",
  data(){
    return {
      iid:null,
      topImages:[]
    }
  },
  components:{
    ChildDetail,
    DetailSwiper,
    
  },
  created(){
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res =>{
      console.log(res);
      
      this.topImages=res.data.result.itemInfo.topImages
    })
  }
}
</script>
<style scoped>

</style>