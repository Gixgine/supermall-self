<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>
          购物街
        </div>
      </template>
    </nav-bar>
    <tab-control 
      :titles="['流行','新款','精选']" 
      @tabClick="itemClick"
      ref="tabControl"
      v-show="isFixed"
      class="tab-control"
      ></tab-control>
      <scroll class = "content" 
      ref = "scroll" 
      :probe-type = "3" 
      @scrollPosition="scrollLength"
      :pull-up-load="pullUpLoad"
      @pullingUp="loadMore"
      >
      <home-swiper 
      class="home-swiper" 
      :bannerList="bannerList"
      @imgLoadFinish="imgLoadFinish"
      ></home-swiper>
      <home-recommend :recommendList="recommendList"></home-recommend>
      <feature-view ></feature-view>
      <tab-control 
      :titles="['流行','新款','精选']" 
      @tabClick="itemClick"
      ref="tabControl"
      ></tab-control>
      <home-goods :goodsItemList="goodsList[currentType].list" ></home-goods>
      </scroll>
      <back-top class="back-top" @click.native="btClick" v-show="showBackTop"></back-top>
  </div>
</template>
<script>
import {debounce} from "../../common/utils"

import {getHomeMultidata,getHomeGoods} from "network/home/getHomeMultidata"
import NavBar from "common/navbar/NavBar"
import Scroll from "components/common/scroll/Scroll"
import BackTop from "components/content/backtop/BackTop"

import HomeSwiper from "./childhome/HomeSwiper"
import HomeRecommend from "./childhome/HomeRecommend"
import FeatureView from "./childhome/FeatureView"
import TabControl from "./childhome/TabControl"
import HomeGoods from "components/content/homegoods/HomeGoods.vue"

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
      },
      currentType:"pop",
      showBackTop:false,
      pullUpLoad:true,
      offset:null,
      isFixed:false,
      saveY:null,
      positionY:null
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    HomeGoods,
    Scroll,
    BackTop
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    this.getHomeGoods("pop");
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on("itemImgLoad",()=>{
      refresh()
    })
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
    itemClick(index){
      const tabList=["pop","new","sell"];
      this.currentType=tabList[index];
      if(this.positionY<-720){
        this.$refs.scroll.scrollTo(0,-720,0)
      }
    },
    getHomeGoods(type){
      const page = this.goodsList[type].page + 1
      getHomeGoods(type,page).then(res=>{
        this.goodsList[type].list.push(...res.data.data.list)
        // console.log(res);
        this.goodsList[type].page += 1
        // console.log(this.goodsList[type].list)
        this.$refs.scroll.finishPullUp()
      })
    },
    btClick(){
      this.$refs.scroll.scrollTo(0,0,500);
    },
    scrollLength(position){
      // console.log(position.y<=-1000);
      this.showBackTop = position.y <= -1000;
      this.isFixed=(-position.y+7)>this.offsetTop
      this.positionY=position.y
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    imgLoadFinish(){
      this.offsetTop=this.$refs.tabControl.$el.offsetTop
    },
    activated(){
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      
    },
    deactivated() {
      this.saveY=this.$refs.scroll.getScrollY()
    },
  },

  computed:{
    
  }
}

</script>
<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }

  .home-nav{
    background-color:var(--color-tint);
    color:#eee;
    /* position: fixed;
    z-index: 9; */
  }
  .content{
    height:calc(100% - 39px);
    overflow: hidden;
  }
  .back-top{
    position: fixed;
    bottom:39px;
    right:10px;
  }
  .fixed{
    position: fixed;
    top:44px;
    left:0;
    right:0;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }

</style>