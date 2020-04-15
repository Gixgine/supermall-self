<template>
  <div class="home-goods-item" @click="goodsClick">
    <a href="javascript:;">
      <img :src="goods.show.img" alt="" @load="imgLoad">
    </a>
    <p>{{goods.title}}</p>
    <div class="bottom-class">
      <span class="price">{{goods.price}}</span>
      <div class="icon-star"></div>
      <span class="star-num">{{goods.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:"HomeGoodsItem",
  data(){
    return{
      
    }
  },
  props:{
    goods:Object
  },
  methods:{
    imgLoad(){
      this.$bus.$emit("itemImgLoad")
    },
    goodsClick(){
      this.$router.push("/detail/" + this.goods.iid)
    }
  }
}
</script>
<style scoped>
  .home-goods-item{
    width: 48%;
    position: relative;
    height: 400px;
    border-radius: 21px;
    margin-top: 10px;
  }
  .home-goods-item a img{
    width: 100%;
  }
  .bottom-class {
    position:absolute;
    display:flex;
    height: 30px;
    justify-content: center;
    line-height: 30px;
    font-size:18px;
    bottom:0;
  }
  .icon-star{
    height: 24px;
    width: 24px;
    background: url("~assets/img/detail/detail_bottom.png") no-repeat 0px 0px;
    background-size: 22px auto;
    margin-top: 3px;
    margin-left: 10px;
  }
  .price{
    color:var(--color-high-text);
  }
</style>