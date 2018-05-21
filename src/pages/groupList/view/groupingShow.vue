<template>
    <div ref = "viewBox">
        <!-- 已团购 -->

  <ul style = "width:16rem;">
                <li style = "background:#fff;padding-bottom:0.3rem" class = "clearfloat" v-for = "(item,index) in list" :key = "index">
                
                    <div style = "background:#f7f7f7;height:1px;"></div>
                    <div class = "list-top clearfloat col-15" style = "margin:0 auto;height:1.28rem;line-height:1.28rem;">
                        <span>
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
                      <div @click = "showInsert(item)">
                        <div style = "height:0.427rem;"></div>
                            <div style = "width:15.5rem;margin:0 auto;" class = "clearfloat">                         
                                  <p style = "width:3.3rem;height:3rem;float:left">
                                <img v-lazy="item.cover_url" style = "width:3rem;height:3rem;" alt="">
                                 </p>
                                <div style = "height:3rem;width:10rem;float:left;">

                            
                                            <p style = "height:1.366rem;width:9rem;float:left;line-height:0.683rem;font-size:0.55rem;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:2;overflow: hidden;">
                                              {{item.cargoName}}
                                            </p>
                                            <p style = "z-index:0;position:relative;width:6rem;color:#aeaeae;font-size:0.475rem;">
                                                    {{item.typedesc == ""?"无":item.typedesc}}
                                            
                                            </p>
                                            <!-- <p style = "width:2.5rem;text-align:center;padding-top:0.05rem;padding-bottom:0.05rem;color:#aeaeae;font-size:0.475rem;color:#E9724C;border:1px solid #e9724c;">
                                            
                                            门店自提
                                            
                                            </p> -->

                                </div>
                                <div style = "text-align:right;width:2.5rem;margin-right:0.25rem;float:right;margin-top:-2.5rem;">
                                        <p style = "font-size:0.512rem;color:#E9724C;">
                                            ￥{{item.price}}
                                        </p>
                                        <p style = "font-size:0.512rem;color:#aeaeae;text-decoration:line-through">
                                            ￥{{item.price + 50}}
                                        </p>
                                        <p style = "font-size:0.512rem;color:#333;text-align:right;">
                                            x1
                                        </p>
                                </div>



                            </div>
   <div style = "height:0.427rem;clear:both;background:#f7f7f7"></div>

                        </div>
                    </div>
                    
                       
                     <div>
                  <div style = "height:0.2rem;clear:both;background:#fff"></div>
                         
                                <p style = "text-align:right;font-size:0.512rem;">
                                   共1件产品<span style = "margin-left:0.5rem">合计：{{item.price}}（含运费￥0.00）</span>
                                </p>
                  <div style = "height:0.2rem;clear:both;background:#fff"></div>    

                                <span style = "font-size:0.597rem;float:left;margin-left:0.3rem;line-height:1.1rem;">
                                    等待团购
                                </span>
  <span style = "font-size:0.597rem;float:left;margin-left:1rem;line-height:1.1rem;color:#f00;">
                                   {{item.countdown|timeChange}}.{{item.weisec}}
                                </span>
                                <div style = "width:2.859rem;margin-right:0.5rem;height:1.1rem;border-radius:1.1rem;float:right;font-size:0.512rem;text-align:center;line-height:1.1rem" class = "btn2">
                                    邀请好友
                                </div>                     
                        </div>
                
                </li>


        </ul>


    <div style = "color:#aeaeae;font-size:0.512rem;line-height:2rem;clear:both;width : 15rem;margin:0 auto;">
                        提醒：未团购订单24小时自动取消
                    </div>

<div v-if = "loading" style = "clear:both;text-align:center;margin-top:0.5rem;">
                        <img src="../../../../static/loading.gif" alt="" style = "width:2rem;height:2rem;">
                    </div>
                <div v-show = "last0" style = "font-size:0.5rem;color:#aeaeae;line-height:2rem;text-align:center">暂无更多订单...</div>          
             
                    </div>


</template>

<script>
import {promiseAjax,IP,PORT} from "@/api/api"
var timer = null;
export default {
    data(){
        return {
              loading:true,
            last0:false,
            Ajax:true,
            index:0,
            userId:JSON.parse(localStorage.getItem("paile8Token")).userId,
            length:5,
            list:[],
          
            num:9,
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
        },
         timeChange(str){
            var hour = Math.floor(str/3600);
            var minute = Math.floor((str-hour*3600)/60);
            var sec = Math.floor((str-hour * 3600 - minute * 60));
            if(hour < 10){
                
                if(hour>=0){
                    hour = "0" + hour;
                }else{
                    hour = 0;
                }
            }
           if(minute < 10){
                if(minute>=0){
                    minute = "0" + minute;
                }else{
                    minute = 0;
                }
            }
       
            if(sec < 10){
                if(sec>=0){
                    sec = "0" + sec;
                }else{
                    sec = 0;
                }
            }
            
            return hour+":"+minute+":"+sec;
        }
    },
    methods:{
        showInsert(data){
            this.$router.push({
                path:"/groupListinsert",
                query:{
                    orderNo:data.orderNo,
                    id:data.id,
                }
            })
        },
        getAllGroupOrder(){
            this.loading = true;
                promiseAjax(`http://${IP}:${PORT}/paile-service/api/groupBuyingHandler/getAllGroupOrderByUserId`,{
                    userId : this.userId,
                    index:this.index,
                    length:this.length
                }).then((data)=>{
                    console.log(data);
                    if(data.datas == null){
                        this.loading = false;
                        this.Ajax = false;
                        this.last0 = true;
                        return false;
                    }

                if(data.datas.length == 5){
                                // //   没到最后的情况
                                //     this.Ajax = true;
                                //   this.loading = false;   
                             
                                data.datas.map((item)=>{
                                    // 判断获取的订单是否是成功的
                                    if(item.status != 4){
                                     
                                        if(this.list.length < 5 ){
                                            
                                                item.weisec = 0
                                            item.timer2 = setInterval(()=>{
                                                        if(item.countdown > 0){
                                                            item.countdown =  item.countdown - 1;
                                                        }else{
                                                            item.countdown = 0;
                                                            clearInterval(item.timer2);
                                                            item.timer2 = null;
                                                        }
                                                    },1000)


                                                    item.timer3 = setInterval(()=>{
                                                         
                                                            if(item.countdown == 0){
                                                                 item.weisec = 0
                                                                clearInterval(item.timer3);
                                                               
                                                                
                                                                item.timer3 = null;
                                                                return false;
                                                                
                                                            }
                                                            if(item.weisec>0){
                                                                        
                                                                        item.weisec = item.weisec -1;

                                                                    }else if(item.weisec <= 0 ){
                                                                        
                                                                        item.weisec = 9
                                                                    }
                                                   
                                                    },100)
                                          
                                                 
                                                 
                                                    promiseAjax(`http://${IP}:${PORT}/paile-service/api/groupBuyingHandler/getGroupOrderListByOrderNo`,{
                                                        orderNo:item.orderNo,
                                                    }).then(data=>{
                                                      
                                                        item.typedesc = data.datas[0].cargoJsonList[0].typeDesc
                                                            this.list.push(item);
                                                                  this.Ajax = true;
                                            this.loading = true;
                                                    })
                                        
                                            
                                  
                                            
                                        
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
                              
                                    if(item.status != 4){
                                  
                                        if(this.list.length < 5 ){
                   
                                               item.weisec = 0
                                                     item.timer2 = setInterval(()=>{
                                                        if(item.countdown > 0){
                                                            item.countdown =  item.countdown - 1;
                                                        }else{
                                                            item.countdown = 0;
                                                            clearInterval(item.timer2);
                                                            item.timer2 = null;
                                                        }
                                                    },1000)
                                                                          item.timer3 = setInterval(()=>{
                                                           
                                                            if(item.countdown == 0){
                                                                 item.weisec = 0
                                                            
                                                                clearInterval(item.timer3);
                                                                item.timer3 = null;
                                                                return false;
                                                                
                                                                
                                                            }
                                                            if(item.weisec>0){
                                                                           
                                                                        item.weisec = item.weisec -1;

                                                                    }else if(item.weisec == 0 ){
                                                                        
                                                                        item.weisec = 9
                                                                    }
                                                   
                                                    },100)
                                                 
                                      
                                                this.list.push(item);
                                        }
                                    }
                                })
                                  
               }


       


                })
        }
        // http://IP:PORT/paile-service/api/groupBuyingHandler/getAllGroupOrderByUserId
    },
    created(){
        // 获取团购的列表

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
    mounted(){
         
    },
    beforeDestroy(){
           document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    destroyed(){
  
        // 清空掉计时器
       this.list.map((item)=>{
           clearInterval(item.timer2);
            clearInterval(item.timer3);
       })
      
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
