<template>
  <div id="TabBar">
   <child-tab-bar class="itembar" link="/home">
     <template v-slot:icon>
       <div>
         <img src="assets/img/tabbar/home.svg" alt="">
       </div>
     </template>
     <template v-slot:active-icon>
       <div>
         <img src="assets/img/tabbar/home_active.svg" alt="">
       </div>
     </template>
     <template v-slot:text>
       <div>
         首页
       </div>
     </template>
   </child-tab-bar>
   <child-tab-bar class="itembar" link="/category">
     <template v-slot:icon>
       <div>
         <img src="assets/img/tabbar/category.svg" alt="">
       </div>
     </template>
     <template v-slot:active-icon>
       <div>
         <img src="assets/img/tabbar/category_active.svg" alt="">
       </div>
     </template>
     <template v-slot:text>
       <div>
         分类
       </div>
     </template>
   </child-tab-bar>
   <child-tab-bar class="itembar" link="/cart"> 
     <template v-slot:icon>
       <div>
         <img src="assets/img/tabbar/cart.svg" alt="">
       </div>
     </template>
     <template v-slot:active-icon>
       <div>
         <img src="assets/img/tabbar/cart_active.svg" alt="">
       </div>
     </template>
     <template v-slot:text>
       <div>
         购物车
       </div>
     </template>
   </child-tab-bar>
   <child-tab-bar class="itembar" link="/profile">
     <template v-slot:icon>
       <div>
         <img src="assets/img/tabbar/profile.svg" alt="">
       </div>
     </template>
     <template v-slot:active-icon>
       <div>
         <img src="assets/img/tabbar/profile_active.svg" alt="">
       </div>
     </template>
     <template v-slot:text>
       <div>
         我的
       </div>
     </template>
   </child-tab-bar>
  </div>
</template>
<script>
import ChildTabBar from "../../common/ChildTabBar/ChildTabBar"
export default {
  name:"TabBar",
  components:{
    ChildTabBar
  },
  methods:{
    
  }
}
</script>
<style scoped>

#TabBar{
  display:flex;
  position: fixed;
  bottom:0;
  left:0;
  right:0;
  box-shadow: 0 -0.2px 1px rgb(10,10,0);
  height: 39px;
}
.itembar{
  flex:1;
  text-align: center;
  font-size: 12px;
  vertical-align: middle;
  margin-top: 2px;
}
.itembar img{
  height: 20px;
  width: 20px;
}

</style>