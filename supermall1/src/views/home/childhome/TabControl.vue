<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="item-control" :class="{'active':currentIndex===index}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:"TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
    }
  }
}
</script>
<style scoped>
  .tab-control{
    display:flex;
    text-align: center;
    background-color: #fff;
    margin-top: 5px;
  }
  .tab-control span{
        padding:5px;
  }
  .item-control{
    flex:1
  }
  .active{
    color:deeppink;
  }
  .active span{
    border-bottom:solid 2px deeppink
  }
</style>