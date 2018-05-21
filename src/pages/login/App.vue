<template>
  <div ref = "box" style = "overflow:hidden;position:absolute;top:0;background:#ffffff;">
             <div style = "font-size:0.683rem;line-height:1.707rem;color:#fff;width:16rem;" class = "bg-index" >
                <!-- <i style = "margin-left:0.5rem;" class = "iconfont icon-jiantou-copy" @click = "gohistroy"></i> -->
                <!-- <span style = "margin-left:0.5rem;">拍乐网</span>       -->
             </div>     
             <div style = "height:1.107rem;">
             </div>
             <div style = "position:absolute;text-align:center;width:16rem;">
                 <img src="../../../static/login.png" style = "width:3.41rem" alt="">
                 <div style = "padding-top:1.45rem;width:16rem;text-align:center">
                    <div class = "col-12 box-center clearfloat left" style ="padding-top:0.5rem;margin-left:2rem;">
                      <div class = "col-12 " style = "padding-left:0rem;padding-right:0.5rem;padding-bottom:0.2rem;">
                          <!-- 可以通过传入inputstyle字段进行input扩展样式 -->
                              <div class = "input">
                                    <input type="search" @blur = "changeborder" @focus = "changeborder" class = "input-inner"  v-model = "inputData" style = "width:83.5%;margin-left:0.768rem;" placeholder="请输入用户名">
                                </div>
                      </div>
                    
                                <div :class = "input1focus?'bg-index':'bg-normal'" style = "height:1px;width:12rem"></div>
            
                  </div>
                 </div>
                 <div style = "padding-top:2.2rem;width:16rem;text-align:center">
                    <div class = "col-12 box-center clearfloat left" style ="padding-top:0.5rem;margin-left:2rem;">
                      <div class = "col-12 " style = "padding-left:0rem;padding-right:0.5rem;padding-bottom:0.2rem;">
                          <!-- 可以通过传入inputstyle字段进行input扩展样式 -->
                              <div class = "input">
                
                                    <input type="phone" class = "input-inner" @blur = "change2border" @focus = "change2border"  v-model = "input2Data" style = "width:6rem;margin-left:0.768rem;" placeholder="请输入密码">
                                    <span @click = "getCode" :style = "changePhone && (!timeed)?'color:#FFCC33':'color:#aeaeae' " style = "font-size:0.6rem;" :class = "timeed?'':'mar-1'">获取验证码<span v-show = "timeed">({{getcodelasttime}}s)</span></span>
                                </div>
                            
                      </div>
             <div :class = "input2focus?'bg-index':'bg-normal'" style = "height:1px;width:12rem"></div>
                  </div>
                    
                 </div>
     
                 <div v-show = "errorTip" class = "col-12" style = "color:#f00;font-size:0.5rem;text-align:center;background:#ffd8e7;margin:0 auto;border:1px solid #ff0000;border-radius:0.2rem;line-height:0.8rem;">
                     {{errorText}}
                 </div>
            <div style = "clear:both;height:0.8rem;"></div>
                 
                <div  @click = "loginA" style = "width:14rem;margin:0 auto;width:12.8rem;height:1.536rem;border-radius:1.536rem;color:#fff;text-align:center;line-height:1.536rem;font-size:0.6rem;" class = "bg-index">
                   绑 定 手 机
                </div>
               
                <div style = "width:16rem;text-align:center;">
                <div style = "position:relative;clear:both;margin-top:0.5rem;display:inline-block;text-align:left;">
                    <input v-model = "check" type="checkbox" name = "moren"><label></label><span style = "margin-left:0.7rem;font-size:0.5rem;">我已阅读并同意<a href = "xieyi.html" style = "color:#f00;">拍乐网协议</a></span>
                </div>
</div>
                <div style = "font-size:0.597rem;text-align:center;margin-top:5.84rem">
                        客服电话:400-826-1533
                </div>
             </div>
   </div>
</template>
<script>
import {IP,PORT,promiseAjax} from "@/api/api.js"
import {splitQuery} from "@/api/getQuery.js"

export default {
    data(){
        return {
            inputData:"",
            input2Data:"",
            input1focus:false,
            input2focus:false,
            changePhone:false,
            // 是否在计时
            timeed:false,
            getcodelasttime:60,
            check:false,
            errorTip:false,
            errorText:"请输入",
            code:"",
        }
    },
    computed:{

    },
    watch:{
        inputData(){
            this.changePhone = /^1[3|4|5|8|7][0-9]\d{8}$/.test(this.inputData)
        }
    },
    methods:{
        getCode(){
                if(!this.timeed){
                                  promiseAjax(`http://${IP}:${PORT}/paile-service/api/smsManage/sendMsg1`,{
                                    phone:this.inputData,
                                }).then((data)=>{ 
                                        if(this.timeed || this.changePhone != true){
                                    
                                            return false
                                        }
                                        this.timeed = true;
                                        let time = setInterval(()=>{
                                        if(this.getcodelasttime>0){
                                            this.getcodelasttime = this.getcodelasttime-1;
                                        }else{
                                            this.getcodelasttime = 60;
                                            clearInterval(time);
                                            this.timeed = false;
                                        
                                        }
                                    },1000)
                                })
                }
        },
        errorShow(){
            this.errorTip = true;
            setTimeout(()=>{
                this.errorTip = false;
            },2000)
        },
        loginA(){
            if(this.check){
                promiseAjax(`http://${IP}:${PORT}/paile-service/api/userHandler/bindUserInfo`,{
                    openid :this.openid,
                    phone : this.inputData,
                    code:this.input2Data,
                }).then((data)=>{
                
                    console.log(data);
                    if(data.code == 0){
                        console.log(data.datas);
                       
                            //  console.log(data.datas);

                             let store = {
                                 userId:data.datas.id,
                                 openid:data.datas.oppenid,
                                 isLogin : true,
                                 phone:this.inputData,
                             }
                             if(data.datas.nickname == ""){
                                 data.datas.nickname = `user_${this.inputData}`
                             }
                             localStorage.setItem("paile8Token",JSON.stringify(store));
                             localStorage.setItem("paile8UserInfo",JSON.stringify(data.datas));
                             localStorage.setItem('isLoginpaile8',JSON.stringify({logined:true}));
                                
                                 window.location.href="index.html"
                       
                }else{
                             this.errorText = "验证码错误"
                             this.errorShow();   
                }
            })
              }else{
                             this.errorText = "请同意协议"
                             this.errorShow();
                         }
        },




        gohistroy(){
            window.history.go(-1);
        },
        change2border(){
            this.input2focus = !this.input2focus
        },
        changeborder(){
            this.input1focus = !this.input1focus

        }
    },
    mounted(){
           this.$refs.box.style.height = (document.body.clientHeight ||window.innerHeight)+"px";
    },
    created(){
        // 获取code
      splitQuery().then(datas=>{
          if(datas.hasOwnProperty('openid')){
              this.openid = datas.openid;
          }else{
              window.location.href = "index.html#/wx"
          }
      })
       
   
    }

}
</script>

<style scoped>
    @import url("../../public/Adaptation.css");
@import url("../../public/iconfont.css");
    .bg-index{
        background:-webkit-linear-gradient(0deg, rgba(254, 182, 146, 1) 0%, rgba(254, 182, 146, 1) 0%, rgba(234, 84, 85, 1) 100%, rgba(234, 84, 85, 1) 100%);
        background:linear-gradient(90deg, rgba(254, 182, 146, 1) 0%, rgba(254, 182, 146, 1) 0%, rgba(234, 84, 85, 1) 100%, rgba(234, 84, 85, 1) 100%)
    }
       .input{
        width:100%;line-height:0rem;
        border-radius:0.6rem;
     
        text-align: left;
        
        background:rgba(0,0,0,0);
  

    }
       .input-inner::-webkit-input-placeholder{
            color:#aeaeae;
        }
         .input-inner::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color:#aeaeae;
        }
         .input-inner:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color:#aeaeae;
        }
         .input-inner:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color:#aeaeae;
        }
    .input-inner{
        outline:none;
        color:#333;
        text-align: left;
        line-height:0.8rem;
        border:0px #ccc solid;
        font-size:0.5rem;
        background:rgba(0,0,0,0)
    

    }
    .bg-normal {
        background:#f7f7f7;
    }
      input[type="checkbox"] {
            width: 0.6rem;
            height: 0.6rem;
            opacity: 0;
            z-index: 2;
            position:absolute;
            top:0.4rem;
            left:0;
        }
        label {
            position: absolute;
            left: 0px;
            top: 0.4rem;
            width: 0.5rem;
            height:0.5rem;
            border-radius: 50%;
            border: 1px solid #999;
        }
        input:checked+label { 
            background-color: #fe6d32;
            border: 1px solid #fe6d32;
        }
        
        input:checked+label::after {
            position: absolute;
            content: "";
            width: 0.12rem;
            height: 0.24rem;
            top: 0.08rem;
            left: 0.18rem;
            border: 2px solid #fff;
            border-top: none;
            border-left: none;
            transform: rotate(45deg)
        }
</style>
