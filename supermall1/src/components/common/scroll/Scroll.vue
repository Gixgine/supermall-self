<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
  name:"Scroll",
  data(){
    return {
      scroll:null,
      message:"aa"
    }
  },
  props:{
    probeType:{
      default:0,
      type:Number
    },
    pullUpLoad:{
      dafault:false,
      type:Boolean
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    this.scroll.on("scroll",(position)=>{
      // console.log(position);
      this.$emit("scrollPosition",position)
    })
    this.scroll.on("pullingUp",()=>{
      this.$emit("pullingUp")
    })
    // this.scroll.scrollTo(0,0)
  },
  methods:{
    scrollTo(x,y,time=500){
      this.scroll&&this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll&&this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll?this.scroll.y:0
    }
  }
}
</script>
<style scoped>

</style>