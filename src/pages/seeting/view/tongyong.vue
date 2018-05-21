<template>
      <div ref = "box" style = "overflow:hidden;position:absolute;top:0;background:#f7f7f7;">
      <!-- <div style = "font-size:0.683rem;line-height:1.707rem;color:#fff;width:16rem;" class = "bg-index">
          <i style = "margin-left:0.5rem;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
          <span style = "margin-left:0.5rem;">拍乐网</span>
        
          <div style = "height:0.5rem;background:#f7f7f7"></div>

 </div> -->


        <div style = "width:16rem;height:3.2rem">

        </div>




      </div>
</template>

<script>
export default {
    methods:{
        gohistroy(){
            window.history.go(-1);
        }
    },
    mounted(){
           this.$refs.box.style.height = (document.body.clientHeight ||window.innerHeight)+"px";
    },
}
</script>

<style scoped>
@import url("../../../public/Adaptation.css");
@import url("../../../public/iconfont.css");
    .bg-index{
        background:-webkit-linear-gradient(0deg, rgba(254, 182, 146, 1) 0%, rgba(254, 182, 146, 1) 0%, rgba(234, 84, 85, 1) 100%, rgba(234, 84, 85, 1) 100%);
        background:linear-gradient(90deg, rgba(254, 182, 146, 1) 0%, rgba(254, 182, 146, 1) 0%, rgba(234, 84, 85, 1) 100%, rgba(234, 84, 85, 1) 100%)
        
    }
</style>
