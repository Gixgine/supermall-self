<template>
  <div id="homerecommend">
    <div v-for="(item,index) in recommendList" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name:"HomeRecommend",
  props:{
    recommendList:Array
  }
}
</script>
<style scoped>
  #homerecommend{
    display:flex;
    width:100%;
    padding:10px 0 20px 0;
    border-bottom:solid #ccc 8px
  }
  #homerecommend div{
    flex:1;
    text-align: center;
  }
  #homerecommend img{
    width: 80px;
  }
</style>