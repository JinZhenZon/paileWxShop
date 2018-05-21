<template>
    <div ref = "box" style = "position:absolute;top:0;background:#f7f7f7;">
            <!-- <div style = "position:fixed;top:0;font-size:0.683rem;line-height:1.707rem;color:#fff;width:16rem;z-index:10;" class = "bg-index">
                <i style = "margin-left:0.5rem;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
                <span style = "margin-left:0.5rem;">我的团购</span>
                
               
            </div>
            <div class = "clearfloat" style = "height:1.707rem;"></div>-->
            <div class = "clearfloat" style = "height:1.707rem;"></div> 
            
         <div class = "change" style = "position:fixed;top:0rem">
              <p @click = "taggleUnderLine(0)">已团购</p>
              <p @click = "taggleUnderLine(1)">未团购</p>
          </div>
          <router-view></router-view>

    </div>

</template>

<script>
export default {

  methods: {
    gohistroy() {
      window.location.href = this.reffer;
    
    },
         taggleUnderLine(n){
            $('.change p').removeClass('changeHover');
            $('.change p').eq(n).addClass('changeHover');
         
           switch(n){
             case 0 :  this.$router.push('/groupedShow');break;
             case 1 :  this.$router.push('/groupingShow');break;
           }
          }
  },
  mounted() {
      this.taggleUnderLine(0);
    this.$refs.box.style.height =
      (document.body.clientHeight || window.innerHeight) + "px";
  }
}
</script>

<style scoped>
@import url("../../../public/Adaptation.css");
@import url("../../../public/iconfont.css");
  .change{
    width:16rem;
    display: -webkit-flex; /* Safari */
  display: flex;
    justify-content: flex-start;
    z-index:1;
    background:#fff;

  }
  .change p{
      width:4.011rem;
      height:1.706rem;
      font-size:0.64rem;
      line-height:1.706rem;
      text-align: center;
      margin-left:0.2rem;
  }
  .changeHover{
     color:rgb(233, 114, 76);
      border-bottom:1px solid rgba(233, 114, 76, 1);
      box-sizing:border-box;
  }
.bg-index {
  background: -webkit-linear-gradient(
    0deg,
    rgba(254, 182, 146, 1) 0%,
    rgba(254, 182, 146, 1) 0%,
    rgba(234, 84, 85, 1) 100%,
    rgba(234, 84, 85, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(254, 182, 146, 1) 0%,
    rgba(254, 182, 146, 1) 0%,
    rgba(234, 84, 85, 1) 100%,
    rgba(234, 84, 85, 1) 100%
  );
}

</style>
