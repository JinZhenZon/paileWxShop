<template>
  <div ref = "box" style = "overflow:hidden;position:absolute;top:0;background:#f7f7f7;">
      <!-- <div style = "font-size:0.683rem;line-height:1.707rem;color:#fff;width:16rem;" class = "bg-index">
          <i style = "margin-left:0.5rem;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
          <span style = "margin-left:0.5rem;">拍乐网</span>
        
          <div style = "height:0.5rem;background:#f7f7f7"></div>
 </div> -->
          <router-link to = "/userInfo" tag = "div">
              <div style = "width:16rem;height:3.84rem;background:#fff;">
                  <div style = "width:15rem;margin:0 auto;">
                      <div style = "height:0.427rem;"></div>
                      <div>
                          <span style = "float:left;"><img :src="header_icon == ''?'https://passport.jd.com/new/misc/skin/df/i/no-img_mid_.jpg' :header_icon" alt="" style = "width:2.987rem;height:2.987rem;"></span>
                <div style = "display:inline-block;margin-left:0.5rem;line-height:01.4395rem;width:11.5rem;position:relative">
                    <p style = "font-size:0.7168rem;color:#000">
                        昵称
                    </p>
                    <p style = "font-size:0.58rem;color:#AEAEAE">
                      {{nickName}}
                    </p>
                    
                    <i class = "iconfont icon-arrow-right-copy" style = "color:#949494;position:absolute;right:0;line-height: 2.987rem;top:0;">
                    
                    </i>
                 
                </div>
                      </div>
                      <div style = "height:0.427rem;"></div>
                      
                  </div>
              </div>
               </router-link>
          <div style = "height:0.5rem;background:#f7f7f7"></div>
            
            <router-link to = "/accont" tag = "div" style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <div style = "width:15rem;margin-left:0.5rem">
                            <span style = "float:left">账户与安全</span>
                            <i style = "float:right;color:#949494;"  class = "iconfont icon-arrow-right-copy" ></i>
                            
                        </div>
            </router-link>              
         
                    <div style = "height:1px;background:#f7f7f7"></div>
                    <!-- <router-link to = "/tongyong">
            <div style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <div style = "width:15rem;margin-left:0.5rem">
                            <span style = "float:left">通用</span>
                            <i  class = "iconfont icon-arrow-right-copy"  style = "float:right;color:#949494;"></i>
                            
                        </div>
                </div>              
         
                     <div style = "height:0.3rem;background:#f7f7f7"></div>

                    </router-link> -->

                     
            <!-- <router-link to = "/lookme" tag = "div" style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <div style = "width:15rem;margin-left:0.5rem">
                            <span style = "float:left;font-size:">关于我们</span>
                            <i class = "iconfont icon-arrow-right-copy" style = "float:right;color:#949494;"></i>
                            
                        </div>
            </router-link>   -->



                <div style = "clear:both"></div>
                <div style = "position:fixed;left:0;bottom:0rem;;background:#fff;height:2.134rem;width:100%;" @click = "exit">
                        <div style = "height:0.427rem;"></div>
                        <div @click = "exit" class = "bg-index" style = "font-size:0.614rem;color:#fff;text-align:center;;border-radius:1.28rem;width:12.8rem;margin:0 auto;line-height:1.28rem;height:1.28rem;">
                            退出登录
                        </div>
                        <div style = "height:0.427rem;"></div>
                        
                    </div>            
          </div>

</template>

<script>
export default {
    data(){
        return {
            header_icon:"",
            nickName:"",
        }
    },
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
                   this.header_icon = JSON.parse(localStorage.getItem('paile8UserInfo')).head_icon;
             this.nickName = JSON.parse(localStorage.getItem('paile8UserInfo')).nickname;
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
