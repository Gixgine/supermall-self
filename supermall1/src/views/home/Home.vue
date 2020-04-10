<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>
          购物街
        </div>
      </template>
    </nav-bar>
      <home-swiper :bannerList="bannerList"></home-swiper>
      <home-recommend :recommendList="recommendList"></home-recommend>
  </div>
</template>
<script>

import {getHomeMultidata} from "network/home/getHomeMultidata"
import NavBar from "common/navbar/NavBar"
import HomeSwiper from "./childhome/HomeSwiper"
import HomeRecommend from "./childhome/HomeRecommend"

export default {
  name:"Home",
  data(){
    return {
      bannerList:[],
      keywordsList:[],
      recommendList:[],
      dKeywordList:[]
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  created() {
    getHomeMultidata().then(res=>{
      this.bannerList=res.data.data.banner.list;
      this.keywordsList=res.data.data.keywords.list;
      this.recommendList=res.data.data.recommend.list;
      this.dKeywordList=res.data.data.dKeyword.list;
      // console.log(this.bannerList,this.keywordsList,this.recommendList,this.dKeywordList);
      // console.log(res);
      })
  },
}

</script>
<style scoped>
  .swiper{
    margin-top: 44px;
  }
  .home-nav{
    background-color:var(--color-tint);
    color:#eee
  }
</style>