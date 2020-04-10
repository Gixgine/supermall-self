<template>
  <div id="ChildTabBar" @click="tabClick">
    <div v-if="active=isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="active-icon"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>
<script>
export default {
  name:"ChildTabBar",
  data(){
    return {
      // isActive:true
    }
  },
  props:{
    link:{
      type:String
    }
  },
  computed:{
    isActive(){
      return !(this.$route.path===this.link)
    },
    activeStyle(){
      return !(this.isActive)?{color:"red"}:{}
    }
  },
  methods:{
    tabClick(){
      this.$router.push(this.link)
    }
  }
}
</script>
<style scoped>

</style>