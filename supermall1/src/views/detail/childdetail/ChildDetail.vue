<template>
  <div class="childdetail">
    <nav-bar>
      <template v-slot:left>
        <div @click="iconClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>
      <template v-slot:center>
        <div class="textBox">
          <div v-for="(item,index) in titles"
           :key="index" 
           class="text" 
           :class="{'active':isActive===index}"
           @click="itemClick(index)">
            {{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "common/navbar/NavBar"

export default {
  name:"ChildDetail",
  data(){
    return{
      titles:["商品","参数","评论","推荐"],
      isActive:0
    }
  },
  methods:{
    itemClick(index){
      this.isActive=index
    },
    iconClick(){
      this.$router.go(-1)
    }
  },
  components:{
    NavBar
  }
}
</script>
<style scoped>
  .textBox{
    display: flex;
  }
  .text{
    flex:1;
    color:#888585;
    font-size: 14px;
  }
  .childdetail img{
    margin-top: 10px;
  }
  .active{
    color:var(--color-high-text)
  }
</style>