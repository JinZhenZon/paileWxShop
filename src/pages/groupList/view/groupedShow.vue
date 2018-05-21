<template>
    <div>
        <!-- 已团购 -->

  <ul style = "width:16rem;">
                <li style = "background:#fff;padding-bottom:0.3rem" class = "clearfloat" v-for = "(item,index) in list" :key = "index">
                
                    <div style = "background:#f7f7f7;height:1px;"></div>
                    <div class = "list-top clearfloat col-15" style = "margin:0 auto;height:1.28rem;line-height:1.28rem;">
                        <span >
                            <img v-lazy="'https://img.alicdn.com/tps/i4/TB1..d2JXXXXXajapXXqXA0IVXX-232-80.png'" style = "float:left;width:0.683rem;height:0.683rem;margin-top:0.35rem"  alt="">
                            <p style = "width:7rem;float:left;margin-left:0.2rem;font-size:0.512rem;;color:#333;line-height:1.25rem;">
                                {{item.shopName}}<i class = "iconfont icon-arrow-right-copy" style = "margin-left:0.2rem;"></i>
                            </p>
                            <p style = "float:right;font-size:0.512rem;color:#E9724C;line-height:1.25rem">
                                {{item.status | static}}
                            </p>
                        </span>
                    </div>
                    <div style = "background:#f7f7f7;" class = "clearfloat">
                      <router-link to = "/orderInsert" tag = "div">
                        <div style = "height:0.427rem;"></div>
                            <div style = "width:15.5rem;margin:0 auto;" class = "clearfloat">                         
                                  <p style = "width:3.3rem;height:3rem;float:left">
                                <img v-lazy="'https://img.alicdn.com/imgextra/i4/371832545/TB2morTlgfH8KJjy1zcXXcTzpXa_!!371832545-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp'" style = "width:3rem;height:3rem;" alt="">
                                 </p>
                                <div style = "height:3rem;width:10rem;float:left;">

                            
                                            <p style = "height:1.366rem;width:9rem;float:left;line-height:0.683rem;font-size:0.55rem;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:2;overflow: hidden;">
                                                {{item.cargoName}}
                                            </p>
                                            <p style = "z-index:0;position:relative;width:6rem;color:#aeaeae;font-size:0.475rem;">
                                    颜色分类:黑色
                                            
                                            </p>
                                            <!-- <p style = "width:2.5rem;text-align:center;padding-top:0.05rem;padding-bottom:0.05rem;color:#aeaeae;font-size:0.475rem;color:#E9724C;border:1px solid #e9724c;">
                                            
                                            门店自提
                                            
                                            </p> -->

                                </div>
                                <div style = "width:2.5rem;margin-right:0.25rem;float:right;margin-top:-2.5rem;text-align:right;">
                                        <p style = "font-size:0.512rem;color:#E9724C;">
                                            ￥{{item.price}}
                                        </p>
                                        <p style = "font-size:0.512rem;color:#aeaeae;text-decoration:line-through">
                                            ￥{{item.price + 50}}
                                        </p>
                                        <p style = "clear:both;font-size:0.512rem;color:#333;text-align:right;">
                                            x1
                                        </p>
                                </div>



                            </div>
   <div style = "height:0.427rem;clear:both;background:#f7f7f7"></div>

                        </router-link>
                    </div>
                    
                       
                     <div>
                  <div style = "height:0.2rem;clear:both;background:#fff"></div>
                         
                                <p style = "text-align:right;font-size:0.512rem;">
                                   共1件产品<span style = "margin-left:0.5rem">合计：￥{{item.price}}（含运费￥0.00）</span>
                                </p>
                  <div style = "height:0.2rem;clear:both;background:#fff"></div>    
                                <a href = "pingjia.html" style = "display:block;width:2.859rem;margin-right:0.5rem;height:1.1rem;border-radius:1.1rem;float:right;font-size:0.512rem;text-align:center;line-height:1.1rem" class = "btn2">
                                    立即评价
                                </a>                     
                        </div>
                </li>
        </ul>



                        <div v-if = "loading" style = "clear:both;text-align:center;margin-top:0.5rem;">
                        <img src="../../../../static/loading.gif" alt="" style = "width:2rem;height:2rem;">
                    </div>
                <div v-show = "last0" style = "font-size:0.5rem;color:#aeaeae;line-height:2rem;text-align:center">暂无更多订单...</div>          
             
                    </div>



    </div>
</template>

<script>
import {promiseAjax,IP,PORT} from "@/api/api"
export default {

    data(){
        return {
            index:0,
            userId:JSON.parse(localStorage.getItem("paile8Token")).userId,
            length:5,
            list:[],
            loading:true,
            last0:false,
            Ajax:true,
        }
    },
    filters:{
        static(str){
            switch(str){
                case 1 : return "等待拼团";break;
                case 2 : return "成功拼团";break;
                case 3 : return "拼团失败";break;

                case 4 : return "拼团成功";break;

            }
        }
    },
    methods:{
        getAllGroupOrder(){
           
                promiseAjax(`http://${IP}:${PORT}/paile-service/api/groupBuyingHandler/getAllGroupOrderByUserId`,{
                    userId : this.userId,
                    index:this.index,
                    length:this.length
                }).then((data)=>{
                if(data.datas!=null){

               
                if(data.datas.length == 5){
                                // //   没到最后的情况
                                //     this.Ajax = true;
                                //   this.loading = false;   
                             
                                data.datas.map((item)=>{
                                    // 判断获取的订单是否是成功的
                                    if(item.status == 4){
                                     
                                        if(this.list.length < 5 ){
                                            this.list.push(item);
                                            this.Ajax = true;
                                            this.loading = true;

                                        }
                                    }
                                })
                                if(this.list.length < 5){
                                    this.index += 5 ;
                                    this.getAllGroupOrder();
                                }else{
                                  this.Ajax = true;
                                  this.loading = false;  
                                }

               }else{         
                               
                             this.loading = false;
                            this.last0 = true;
                            this.Ajax = false;
                            data.datas.map((item)=>{
                                    // 判断获取的订单是否是成功的
                                    if(item.status == 4){
                                        if(this.list.length < 5 ){
                                            this.list.push(item);
                                        }
                                    }
                                })
                                  
               }

           

                }else{
                    this.loading = false;
                    this.last0 = true;
                    this.Ajax = false;
                }

                })
        }
        // http://IP:PORT/paile-service/api/groupBuyingHandler/getAllGroupOrderByUserId
    },
    created(){
        // 获取团购的列表
        document.body.scrollTop = document.documentElement.scrollTop = 0;
            
        this.getAllGroupOrder();
                 let _this = this;
                //  触底检测
                 
            $(window).scroll(function(){
            
            　　var scrollTop = $(this).scrollTop();
            　　var scrollHeight = $(document).height();
            　　var windowHeight = $(this).height();
                
            　　if(scrollTop + windowHeight >= scrollHeight-50){
   
                
                    if(_this.Ajax){
       
                        
                        _this.Ajax = false;
                        _this.loading = true;
                        _this.index+=5;
                　　    _this.getAllGroupOrder();
                    }
            　　}
            });

        
    },
    beforeDestroy(){
           document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    mounted(){
         
    }
}
</script>

<style scoped>
    @import url("../../../public/Adaptation.css");
@import url("../../../public/iconfont.css");
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
.btn2 {
  color: #e9724c;
  display: border-box;
  border: 1px solid #e9724c;
}
</style>
