<template>
        <div  ref = "box"   style = "width:16rem;overflow:hidden;position:absolute;top:0;">
            <!-- 搜索全部商品页面 -->
             <div style = "position:fixed;top:0;width:16rem;z-index:1">
              <div class = "bg-index relative" style ="margin-top:0;height:3.108rem;">
                <i style = "margin-left:0.5rem;margin-top:0.7rem;color:#fff;float:left;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
                <span>
                  <div class = "col-12 box-center clearfloat left" style ="padding-top:0.5rem;">
                      <div class = "col-12 mar-1" style = "border-bottom:1px solid #f7f7f7;padding-left:0.5rem;padding-right:0.5rem;padding-bottom:0.2rem;">
                          <!-- 可以通过传入inputstyle字段进行input扩展样式 -->
                              <div class = "input">
                                <i slot = "icon" class = "sousuo iconfont icon-sousuo"  style = "color:#fff;position:relative;top:0.1rem;"></i>
                                    <input type="search" @keyup.enter = "func" class = "input-inner"  v-model = "inputData" style = "width:83.5%" placeholder="搜索商品">
                                </div>
                      </div>
                    
            
                  </div>
                  <div style = "width:15rem;margin:0 auto;height:1.408rem;">
                        <p style = "width:2.475rem;line-height:1.408rem;font-size:0.6rem;color:#fff;text-align:center;float:left;margin-top:0.2rem;">
                            热门搜索
                        </p>
                        <p style = "height:1.408rem;float:left;margin-left:0.2rem;">
                            <ul class = "hotList" style = "margin-top:0.22rem;">
                                <li @click = "searchHot(item.name)" v-for = "item in hotSearch" :key = "item.name">
                                    <span>{{item.name}}</span>
                                </li>
                           
                            </ul>
                        </p>
                  </div>
                </span>
                </div>
         </div>
            <div style = "height:3.208rem;background:#f7f7f7">

            </div>
            <div>
                <p style = "width:15rem;margin:0 auto;font-size:0.597rem;color:#333;line-height:1.71rem;">
                    历史搜索
                </p>
                <ul class = "searchHistory" v-if = "goodListHistory.length != 0">
                    <li class = "clearfloat" v-for = "(item,index) in goodListHistory" :key = "index">
                        <p @click = "historyGogood(item)" class = "left" style = "width:11rem;overflow:hidden;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{item}}</p>
                        <p class = "right" style  = "width:2rem;text-align:center;">
                              <i class = "iconfont icon-105" @click="removeItem(index)" style ="color:#aeaeae"></i>
                        </p>
                    </li>
                </ul>
                 <div v-if="goodListHistory.length ==0" style = "line-height:1rem;font-size:0.6rem;color:#aeaeae;text-align:center;">历史搜索为空</div>
            </div>

            <div @click="removeAll" v-if = "goodListHistory.length!=0" class = "bg-index" style = "margin:3rem auto;border-radius:1.28rem;width:5.12rem;line-height:1.28rem;color:#fff;text-align:center;font-size:0.555rem;">
                清空搜索历史

            </div>


        </div>
</template>

<script>
import Jinput from "@/components/Jinput"
import {IP,PORT,promiseAjax} from "@/api/api.js"




export default {
      data(){
            return {
                inputData:"",
                hotSearch:[],
                goodListHistory:[],
            }
        },
    components:{
        Jinput
    },
    created(){
        // 获取热门搜索
        this.getHotSearch().then(data=>{
            this.hotSearch = data.datas;
        })
    },
       methods:{
           removeItem(index){
                this.goodListHistory.splice(index,1);
                window.localStorage.setItem('goodListHistory',JSON.stringify(this.goodListHistory));
           },
           removeAll(){
               this.goodListHistory = [];
                 window.localStorage.removeItem('goodListHistory');
           },
           historyGogood(str){
            this.$router.replace({path:'/searchList',query:{search:str,}})

           },
               searchHot(str){
                          let obj = str;
                if(this.goodListHistory.length == 0){
                    this.goodListHistory.unshift(obj);

                }else{
                    let t = this.goodListHistory.length;
                    let tag = false;
                               for (let i=0;i<t;i++){
                              
                if(this.goodListHistory[i] == obj){
               
                   tag = false;
                   break;
                }else{
                    tag = true;
                }
            
            }
                if(tag){
                     if(this.goodListHistory.length<10){
                        this.goodListHistory.unshift(obj);
                        tag = false
                    }else{
                         this.goodListHistory.pop();
                        this.goodListHistory.unshift(obj);   
                        tag = false                      
                    }
                }
                }
 
                console.log( this.goodListHistory)
                window.localStorage.setItem('goodListHistory',JSON.stringify(this.goodListHistory))
           this.$router.replace({path:'/searchList',query:{search:str,}})
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
            window.history.go(-1)
        },
        func(e){
               var keyCode = window.event? e.keyCode:e.which;
           
                if(keyCode==13) {  
                    let obj = this.inputData;
                if(this.goodListHistory.length == 0){
                    this.goodListHistory.unshift(obj);

                }else{
                    let t = this.goodListHistory.length;
                    let tag = false;
                               for (let i=0;i<t;i++){
                              
                if(this.goodListHistory[i] == obj){
               
                   tag = false;
                   break;
                }else{
                    tag = true;
                }
            
            }
                if(tag){
                       if(this.goodListHistory.length<10){
                        this.goodListHistory.unshift(obj);
                        tag = false
                    }else{
                         this.goodListHistory.pop();
                        this.goodListHistory.unshift(obj);   
                        tag = false                      
                    }
                }
                }
 
                console.log( this.goodListHistory)
                window.localStorage.setItem('goodListHistory',JSON.stringify(this.goodListHistory))

                    this.$router.replace({path:'/searchList',query:{search:this.inputData}})
                      
                }  
        }
    },
        mounted(){
           this.$refs.box.style.height = (document.body.clientHeight ||window.innerHeight)+"px";
           this.goodListHistory =(localStorage.getItem('goodListHistory')==null?[]:JSON.parse(localStorage.getItem('goodListHistory')))

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
    .searchHistory li{
        width:14rem;
        margin:0 auto;
        border-bottom:1px  solid #f7f7f7;
        font-size:0.597rem;
        line-height:1.5rem;
    }
    .hot{
          display: inline-block;
        width:2.36rem;
        padding-left:0.1rem;
        padding-right:0.1rem;
        line-height:0.85rem;
        background:rgba(255, 204, 51, 0.498039215686275);
        color:#fff;font-size:0.512rem;
        /* overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;*/
        text-align:center; 
        border-radius:0.85rem;
        margin-left:0.3rem;
    }
    
.hotList {
  width: 12rem;
  float:left;
  overflow-x: scroll;
  white-space: nowrap;
}
.hotList li {
   display: inline-block;
        width:3.16rem;
        background:rgba(255, 204, 51, 0.498039215686275);
        border-radius:0.85rem;
        margin-left:0.3rem;;
        text-align:center;

}
.hotList li span{
    display:block;
    width:2.56rem;
            overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
           line-height:0.85rem;
           font-size:0.512rem;
                color:#fff;
                margin:0 auto;
        text-align:center; 
  
}
</style>
