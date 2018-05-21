
<template>
  <div ref = "box" style = "overflow:hidden;position:absolute;top:0;background:#f7f7f7;">

 <transition name="fade">
    <div v-if = "tip" style = "width:9rem;height:9rem;background:rgba(0,0,0,0.5);text-align:center;font-size:0.6rem;color:#fff;border-radius:1rem;position:fixed;top:50%;left:50%;margin-top:-4.5rem;margin-left:-4.5rem;">

        <span class = "iconfont icon-105" style = "display:block;width:100%;font-size:1rem;line-height:2rem;position:relative;top:2rem;"></span>
        <span style = "position:relative;top:2.5rem;font-size:0.6rem;line-height:1rem;">
            验 证 失 败
        </span>
    </div>
 </transition>


      <!-- <div style = "font-size:0.683rem;line-height:1.707rem;color:#fff;width:16rem;" class = "bg-index">
          <i style = "margin-left:0.5rem;" class = "iconfont icon-jiantou-copy" @click = "gohistroy"></i>
          <span style = "margin-left:0.5rem;">拍乐网</span>
        
         
            </div> -->
        
        <div style = "width:16rem;">
            <p style = "font-size:0.497rem;width:14.5rem;margin:0 auto;line-height:1.697rem;margin-left:0.5rem;">解绑你当前的手机号</p>
       
                 
            <div style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <div style = "width:14rem;margin-left:0.5rem">
                            <span style = "display:inline-block;width:3.5rem;float:left">原手机号</span>
                            <span style = "display : inline-block ; width:9rem;float:left;color:#aeaeae">
                                    
                                    <input type="tel" v-model="oldPhone" style = "width:7.509rem;height:1.067rem;border:0px solid #333;color:#333;outline:none" placeholder="请输入手机号"/>
                            </span>
                        </div>
                </div>        
                      <div style = "height:1px;background:#f7f7f7"></div>
            <div style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <div style = "width:14rem;margin-left:0.5rem">
                            <span style = "display:inline-block;width:3.5rem;float:left">验证码</span>
                            <span style = "display : inline-block ; width:4.746rem;float:left;color:#aeaeae">
                                    
                                    <input v-model="code" type="tel" style = "width:4rem;height:1.067rem;border:0px solid #333;color:#333;outline:none" placeholder="请输入验证码"/>
                            </span>
                            <span  @click = "sengMsg" style = "border-radius:1.024rem;text-align:center;margin-top:0.3415rem;;display:inline-block;width:4.754rem;float:right;color:#fff;line-height:1.024rem;font-size:0.597rem;" 
                            :class = "changePhone?'bg-index':'bg-gray'" :style = "timeed?'':'width:4.754rem;'">
                                获取验证码<span v-show = "timeed">({{getcodelasttime}}s)</span>
                            </span>
                        </div>
                </div>              
          </div>
            <div style = "height:1.707rem;background:#f7f7f7"></div>
            <div @click = "checkMsg" style ="margin:0 auto;border-radius:1.536rem;width:12.8rem;line-height:1.536rem;font-size:0.64rem;text-align:center;color:#fff;" class = "bg-index">
                下一步
            </div>
          
        </div>
      


</template>

<script>
import {IP,PORT,promiseAjax} from "@/api/api.js"

export default {
    data(){
        return {
            oldPhone:"",
            changePhone:false,
            timeed:false,
            getcodelasttime:60,
            tagle : true,
            code:"",
            tip:false,

        }
    },
    methods:{
        gohistroy(){
            window.history.go(-1);
        },
        checkMsg(){
                if(this.oldPhone.length == 11 && this.code != ""){
                      promiseAjax(`http://${IP}:${PORT}/paile-service/api/userHandler/login`,{
                                    phone:this.oldPhone,
                                    code:this.code
                                }).then((data)=>{
                                    if(data.code ==0){
                                        // 验证成功
                                        this.$router.push('/changePhone2')
                                    }else{
                                        // 验证失败
                                        this.tip = true;
                                        setTimeout(()=>{
                                            this.tip =false;
                                        },2000)
                                    }
                                })
                }
        },
        sengMsg(){
            if(!this.timeed){
                 promiseAjax(`http://${IP}:${PORT}/paile-service/api/smsManage/sendMsg`,{
                                    phone:this.oldPhone,
                                }).then((data)=>{
                                        if(this.timeed || this.changePhone != true){
                                            return false
                                        }
                                        this.changePhone = false;
                                        this.tagle = false;
                                        this.timeed = true;
                                        let time = setInterval(()=>{
                                        if(this.getcodelasttime>0){
                                            this.getcodelasttime = this.getcodelasttime-1;
                                        }else{
                                            // 设置收input影响样式
                                             this.tagle = true;
                                              this.changePhone = true;
                                            this.getcodelasttime = 60;
                                            clearInterval(time);
                                            this.timeed = false;
                                        }
                                    },1000)
                                })
            }
        }
    },
        watch:{
        oldPhone(){
            if(this.tagle)
            this.changePhone = /^1[3|4|5|8|7][0-9]\d{8}$/.test(this.oldPhone)
            
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
    .bg-gray{
        background:#aeaeae
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
