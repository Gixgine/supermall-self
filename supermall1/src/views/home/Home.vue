<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>
          购物街
        </div>
      </template>
    </nav-bar>
      <home-swiper class="home-swiper" :bannerList="bannerList"></home-swiper>
      <home-recommend :recommendList="recommendList"></home-recommend>
      <feature-view ></feature-view>
      <tab-control :titles="['流行','新款','精选']"></tab-control>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
  </div>
</template>
<script>

import {getHomeMultidata,getHomeGoods} from "network/home/getHomeMultidata"
import NavBar from "common/navbar/NavBar"
import HomeSwiper from "./childhome/HomeSwiper"
import HomeRecommend from "./childhome/HomeRecommend"
import FeatureView from "./childhome/FeatureView"
import TabControl from "./childhome/TabControl"

export default {
  name:"Home",
  data(){
    return {
      bannerList:[],
      recommendList:[],
      goodsList:{
        "new":{
          page:0,
          list:[]
        },
        "pop":{
          page:0,
          list:[]
        },
        "sell":{
          page:0,
          list:[]
        }
      }
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    this.getHomeGoods("pop")
  },
  methods: {
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      this.bannerList=res.data.data.banner.list;
      this.keywordsList=res.data.data.keywords.list;
      this.recommendList=res.data.data.recommend.list;
      this.dKeywordList=res.data.data.dKeyword.list;
      // console.log(this.bannerList,this.keywordsList,this.recommendList,this.dKeywordList);
      // console.log(res);
      })
    },
    getHomeGoods(type){
      const page = this.goodsList[type].page + 1
      getHomeGoods(type,page).then(res=>{
        this.goodsList[type].list.push(...res.data.data.list)
        // console.log(res);
        this.goodsList[type].page += 1
        console.log(this.goodsList[type].list)
      })
    }
  },
}

</script>
<style scoped>
  .home-swiper{
    padding-top:44px;
  }
  .home-nav{
    background-color:var(--color-tint);
    color:#eee;
    position: fixed;
    z-index: 9;
  }

</style>