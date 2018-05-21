<template>
  <div ref = "box" style = "overflow:hidden;position:absolute;left:0;top:0;background:#f7f7f7;">
      <!-- <div style = "font-size:0.683rem;line-height:1.707rem;color:#fff;width:16rem;" class = "bg-index">
            <i style = "margin-left:0.5rem;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
          <span style = "margin-left:0.5rem;">拍乐网</span>
           </div>     -->
          <div>
     
          <div style = "height:0.5rem;background:#f7f7f7"></div>
            <div style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <div style = "width:15rem;margin-left:0.5rem">
                            <span style = "float:left">新版本检测</span>
                            <span style = "float:right;color:#aeaeae">


                                                    <i class = "iconfont icon-arrow-right-copy" style = "font-size:0.683rem;float:right;color:#aeaeae">

                            </i>
                            </span>
                        </div>
                </div>              
          </div>
        
            

            <div style = "height:0.3rem;;background:#f7f7f7"></div>
            <div style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <div style = "width:15rem;margin-left:0.5rem">
                            <span style = "float:left">版权信息</span>
                            <span style = "float:right;color:#aeaeae">

                                                <i class = "iconfont icon-arrow-right-copy" style = "font-size:0.683rem;float:right;color:#aeaeae">

                            </i>
                            </span>
                            
                        </div>
                </div>              
              <div style = "height:1px;;background:#f7f7f7"></div>
            <div style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <div style = "width:15rem;margin-left:0.5rem">
                            <span style = "float:left">软件许可协议</span>
                            <span style = "float:right;color:#aeaeae">
                                                <i class = "iconfont icon-arrow-right-copy" style = "font-size:0.683rem;float:right;color:#aeaeae">

                            </i>
                            </span>
                            
                        </div>
                </div>    

          <div style = "height:1px;;background:#f7f7f7"></div>
            <div style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <div style = "width:15rem;margin-left:0.5rem">
                            <span style = "float:left">隐私权政策</span>
                            <span style = "float:right;color:#aeaeae">
                                                <i class = "iconfont icon-arrow-right-copy" style = "font-size:0.683rem;float:right;color:#aeaeae">

                            </i>
                            </span>
                            
                        </div>
                </div>    

          <div style = "height:1px;;background:#f7f7f7"></div>
            <div style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <div style = "width:15rem;margin-left:0.5rem">
                            <span style = "float:left">帮助中心</span>
                            <span style = "float:right;color:#aeaeae">
                                                <i class = "iconfont icon-arrow-right-copy" style = "font-size:0.683rem;float:right;color:#aeaeae">

                            </i>
                            </span>
                            
                        </div>
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

<style>
    @import url("../../../public/Adaptation.css");
@import url("../../../public/iconfont.css");
    .bg-index{
        background:-webkit-linear-gradient(0deg, rgba(254, 182, 146, 1) 0%, rgba(254, 182, 146, 1) 0%, rgba(234, 84, 85, 1) 100%, rgba(234, 84, 85, 1) 100%);
        background:linear-gradient(90deg, rgba(254, 182, 146, 1) 0%, rgba(254, 182, 146, 1) 0%, rgba(234, 84, 85, 1) 100%, rgba(234, 84, 85, 1) 100%)
        
    }
</style>
