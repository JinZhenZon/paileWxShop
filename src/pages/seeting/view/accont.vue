<template>
  <div ref = "box" style = "overflow:hidden;position:absolute;top:0;background:#f7f7f7;">
      <div style = "font-size:0.683rem;line-height:1.707rem;color:#fff;width:16rem;" class = "bg-index">
          <!-- <i style = "margin-left:0.5rem;" class = "iconfont icon-jiantou-copy" @click = "gohistroy"></i>
          <span style = "margin-left:0.5rem;">拍乐网</span> -->
          </div>
     
   
          <div style = "height:0.5rem;background:#f7f7f7"></div>
            <div style = "line-height:1.507rem;color:#000;background:#fff;height:1.507rem;font-size:0.683rem">
                        <div style = "width:14rem;margin-left:0.5rem">
                            <span style = "float:left">会员名</span>
                            <span style = "float:right;color:#aeaeae">xxxxxxx</span>
                        </div>
                </div>              
       
                    <div style = "height:1px;background:#f7f7f7;clear:both"></div>
            <router-link to="/changePhone" tag = "div" style = "line-height:1.507rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <div style = "width:14rem;margin-left:0.5rem">
                            <span style = "float:left">会员手机号</span>
                            <span style = "float:right;color:#aeaeae"><span style = "margin-right:0.5rem;">17695518131</span><i class = "iconfont icon-arrow-right-copy"></i></span>
                            
                        </div>
            </router-link>              
     

            <div style = "height:1px;background:#f7f7f7;clear:both"></div>
              <router-link to="/changePassword" tag = "div"  style = "line-height:1.507rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <div style = "width:14rem;margin-left:0.5rem">
                            <span style = "float:left">设置登陆密码</span>
                            <span style = "float:right;color:#aeaeae"><i class = "iconfont icon-arrow-right-copy"></i></span>
                            
                            
                        </div>
                 </router-link>         
        
        <div style = "height:1px;background:#f7f7f7;clear:both"></div>
            <a @click = "exit" style = "display:block;line-height:1.507rem;color:#000;background:#fff;height:1.507rem;font-size:0.683rem">
                
                        <div style = "width:14rem;margin-left:0.5rem">
                            <span style = "float:left;color:#333;">注销账户</span>
                            <span style = "float:right;color:#aeaeae"><i class = "iconfont icon-arrow-right-copy"></i></span>
                            
                        </div>
                    
                </a>             




          
                     <div style = "height:0.3rem;background:#f7f7f7;clear:both"></div>
            <div style = "line-height:1.507rem;color:#000;background:#fff;height:1.507rem;font-size:0.683rem">
                        <div style = "width:14rem;margin-left:0.5rem">
                            <span style = "float:left;font-size:">安全中心</span>
                            <span style = "float:right;color:#aeaeae"><i class = "iconfont icon-arrow-right-copy"></i></span>
                            
                        </div>
                </div>  
        <div style = "height:1px;background:#f7f7f7;clear:both"></div>
            <div style = "line-height:1.507rem;color:#000;background:#fff;height:1.507rem;font-size:0.683rem">
                        <div style = "width:14rem;margin-left:0.5rem">
                            <span style = "float:left">账号保护</span>
                            <span style = "float:right;color:#aeaeae"><i class = "iconfont icon-arrow-right-copy"></i></span>
                            
                        </div>
                </div>             




                <div style = "position:fixed;bottom:0rem;left:0;;background:#fff;height:2.134rem;width:100%;">
                        <div style = "height:0.427rem;"></div>
                        <div @click = "exit" class = "bg-index" style = "display:block;font-size:0.614rem;color:#fff;text-align:center;;border-radius:1.28rem;width:12.8rem;margin:0 auto;line-height:1.28rem;height:1.28rem;">
                            退出登录
                        </div>
                        <div style = "height:0.427rem;"></div>
                        
                    </div>            
          </div>

</template>

<script>
export default {
    methods:{
        gohistroy(){
            window.history.go(-1);
        },
        exit(){
            window.localStorage.clear();
            window.location.href = "index.html"
        }
    },
    mounted(){

           this.$refs.box.style.height = (document.body.clientHeight ||window.innerHeight)+"px";
    },
    created(){
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
