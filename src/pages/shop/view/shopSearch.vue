<template>
        <div  ref = "box"   style = "background:#ffffff;width:16rem;position:absolute;top:0;">
            <!-- 搜索地址页面 -->
             <div style = "position:fixed;top:0;width:16rem;z-index:1">
              <div class = "bg-index relative" style ="margin-top:0;height:1.71rem;">
                         
                <i style = "margin-left:0.5rem;margin-top:0.53rem;color:#fff;float:left;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
                <span>
                  <div class = "col-12 box-center clearfloat" style ="padding-top:0.5rem;float:left;">

                      <div class = "mar-1" style = "width:11rem;border-bottom:1px solid #f7f7f7;padding-left:0.5rem;padding-right:0.5rem;padding-bottom:0.2rem;">
                          <!-- 可以通过传入inputstyle字段进行input扩展样式 -->
                              <div class = "input">
                                <i slot = "icon" class = "sousuo iconfont icon-sousuo"  style = "color:#fff;position:relative;top:0.1rem;"></i>
                                    <input type="search" @keyup.enter = "func" class = "input-inner"  v-model = "inputData" style = "width:83.5%" placeholder="搜索">
                                </div>
                      </div>
             
            
                  </div>
                  </span>
            
                </div>
         </div>
         <div style = "height:1.71rem;">

         </div>

                <p style = "font-size:0.597rem;margin:0 auto;margin-top:0.8rem" class = "col-15">
                    热门搜索
                </p>
                <div style = "width:16rem;margin:0 auto;">
                    <ul class="hot">
                        <li :key = "index" v-for = "(item,index) in hotList" @click = "searchHot(item.name)" style = "font-size:0.512rem;line-height:1.28rem;width:3.157rem;text-align:center;height:1.28rem;border-radius:1.28rem;border:1px solid rgb(215, 215, 215)">
                            {{item.name}}
                        </li>
                     
         
                
                    </ul>
                </div>
        
         
        </div>
</template>

<script>
import $ from "jquery";
import {IP,PORT,promiseAjax} from "@/api/api.js"

export default {
      data(){
            return {
                inputData:"",
                hotList:[],
                shopId:"",
           
            }
        },
  
    methods:{
         searchHot(str){
            this.$router.replace({path:'/shopsearched',query:{name:str,shopId : this.shopId}})
           },
               getHotSearch(){
          return new Promise((resolve,reject)=>{
               promiseAjax(`http://${IP}:${PORT}/paile-service/api/hotSearchHandler/getHotSearch`,{
             
            }).then((data)=>{
                resolve(data);
              
            }).catch((err)=>{
              reject(err);
            })
          })
           
        },

        gohistroy(){
             
            window.history.go(-1);
    
        },
   
   func(e,obj){
               var keyCode = window.event? e.keyCode:e.which;
           
                if(keyCode==13) {  
                             this.$router.replace({path:'/shopsearched',query:{name:this.inputData,shopId:this.shopId}})

                      
                }  
        },
        by(n){
              $(".gui li").css({
                color:"#aeaeae",
            }).eq(n).css({
                color:"rgb(233, 114, 76)",
            })
        }
    },
        created(){

            this.getHotSearch().then(data=>{
                if(data.code ==0){
                    this.hotList = data.datas
                }
            }).catch(err =>{
                console.log(err);
            })
        },
        mounted(){
           this.$refs.box.style.height = (document.body.clientHeight ||window.innerHeight)+"px";
           this.shopId = this.$route.query.shopId;

   

       
    },
}
</script>

<style scoped>
    
  @import url("../../../public/Adaptation.css");
  @import url("../../../public/iconfont.css");
  *{
    margin:0;
    padding:0;
  }
  .bg-index{
    background: -webkit-linear-gradient(left, #fdb591 , #ea5556); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #fdb591, #ea5556); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #fdb591, #ea5556); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #fdb591 ,#ea5556); /* 标准的语法 */
  }
   .buy-btn{

          background-image: linear-gradient(230deg, rgb(232, 98, 120) 0%, rgb(232, 98, 120) 0%, rgb(255, 82, 229) 100%, rgb(255, 82, 229) 100%);
              background-image: -webkit-linear-gradient(230deg, rgb(232, 98, 120) 0%, rgb(232, 98, 120) 0%, rgb(255, 82, 229) 100%, rgb(255, 82, 229) 100%);
  }
    .input{
        width:100%;line-height:0rem;
        border-radius:0.6rem;
     
        text-align: center;
        background:rgba(0,0,0,0);
  

    }
       .input-inner::-webkit-input-placeholder{
            color:#fff;
        }
         .input-inner::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color:#fff;
        }
         .input-inner:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color:#fff;
        }
         .input-inner:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color:#fff;
        }
    .input-inner{
        outline:none;
 
    
        color:#fff;
        text-align: left;
        line-height:0.8rem;
        border:0px #ccc solid;
        font-size:0.5rem;
        background:rgba(0,0,0,0)
    

    }
    .starList li{
            width:0.683rem;
            float: right;
    }
    .menu li {
        width:4.01rem;
        font-size:0.554rem;
        color:#333;
        text-align:center;
        float:left;
        line-height:1.71rem;
    }
    .gui{
        margin-right:0.8rem;
    }
    .gui li {
        font-size:0.512rem;
        color:#aeaeae;
        float:right;
        width:1.5rem;
        text-align:center;
        line-height:1.71rem;
        margin-right:0.2rem;
    }
    .hot li{
        float:left;
        margin-left:1.6rem;
        margin-top:0.8rem;
    }
</style>
