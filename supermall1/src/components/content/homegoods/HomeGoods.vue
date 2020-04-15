<template>
  <div class="home-goods">
    <home-goods-item v-for="(item,index) in goodsItemList" :key="index" :goods="item">

    </home-goods-item>
  </div>
</template>
<script>

import HomeGoodsItem from "./HomeGoodsItem.vue"

export default {
  name:"HomeGoods",
  components:{
    HomeGoodsItem
  },
  props:{
    goodsItemList:Array
  }
}
</script>
<style scoped>
  .home-goods{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row-reverse;
  }
</style>