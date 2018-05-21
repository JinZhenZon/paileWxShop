<template>
  <div ref = "box" style = "overflow:hidden;position:absolute;left:0;top:0;background:#f7f7f7;">
      <!-- <div style = "font-size:0.683rem;line-height:1.707rem;color:#fff;width:16rem;" class = "bg-index">
          <i style = "margin-left:0.5rem;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
          <span style = "margin-left:0.5rem;">拍乐网</span>
        
          <div style = "height:0.6rem;background:#f7f7f7"></div>
            </div> -->
        
        <div>
            <div style = "height:0.5rem;background:#f7f7f7"></div>
            <div style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <div style = "width:14rem;margin-left:0.5rem">
                            <span style = "display:inline-block;width:3.5rem;float:left">原密码</span>
                            <span style = "display : inline-block ; width:9rem;float:left;color:#aeaeae">
                                    
                                    <input type="password" style = "width:7.509rem;height:1.067rem;border:0px solid #333;color:#333;outline:none" placeholder="原密码"/>
                            </span>
                        </div>
                </div>   

                        <div style = "height:1px;background:#f7f7f7"></div>
            <div style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <div style = "width:14rem;margin-left:0.5rem">
                            <span style = "display:inline-block;width:3.5rem;float:left">原密码</span>
                            <span style = "display : inline-block ; width:9rem;float:left;color:#aeaeae">
                                    
                                    <input type="password" style = "width:7.509rem;height:1.067rem;border:0px solid #333;color:#333;outline:none" placeholder="新密码"/>
                            </span>
                        </div>
                </div>   
                
                <p style = "font-size:0.597rem;line-height:1.194rem;width:15rem;margin:0 auto;">
密码由6-20位英文字母、数字符号组成
                </p>     
              
          </div>
            <div style = "height:1.707rem;background:#f7f7f7"></div>
            <div style ="margin:0 auto;border-radius:1.536rem;width:12.8rem;line-height:1.536rem;font-size:0.64rem;text-align:center;color:#fff;" class = "bg-index">
                下一步
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

    }
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



