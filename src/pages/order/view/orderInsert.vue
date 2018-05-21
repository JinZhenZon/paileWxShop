<template>
        <div ref = "box" style ="position:absolute;top:0;background:#f7f7f7;">
                <!-- 是因为之下需要遍历 所以必须要if 否则会报错 -->
            <div style = "width:16rem;"  v-if = "JSON.stringify(goodInfo) != '{}'">
        <!-- <div style = "position:fixed;z-index:10;width:16rem;height:1.707rem;font-size:0.683rem;line-height:1.707rem;color:#fff;"  class = "bg-index">
            <div style = "position:fixed;top:0;font-size:0.683rem;line-height:1.707rem;color:#fff;width:16rem;z-index:10;" class = "bg-index">
                <i style = "margin-left:0.5rem;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
                <span style = "margin-left:0.5rem;">拍乐网</span>
            </div>
            <div style = "height:1.707rem;"></div>
        </div> -->
        <div style = "height:1.707rem;margin:0"></div>
        <div class = "bg-index" style = "position:relative;width:16rem;height:2.688rem;">
            <div style = "height:2.987rem;font-size:0.58rem;width:15.36rem;margin-left:0.32rem;;background:#fff;position:absolute;top:0.8rem;border-radius:0.3rem;">
               <div style = "width:14.36rem;margin-left:0.5rem;">
                 
               <div style = "height:0.72rem;"></div>
                <span style = "float:left;">
                    <!-- <img src="https://passport.jd.com/new/misc/skin/df/i/no-img_mid_.jpg" alt=""> -->
                    <i class = "iconfont icon-mudedi1" style = "color:#E9724C;font-size:1.536rem;">

                    </i>
                    </span>


                <div style = "color:#333;display:inline-block;margin-left:0.5rem;line-height:0.728rem;font-size:0.512rem;width:12.2rem;position:relative">
                    <p>
                       <div style = "width:7rem;float:left;">联系人：{{goodInfo.contactName}}</div>
                       <div style = "width: 5.2rem;float:left;text-align:right;">
                           {{goodInfo.salerPhone}}
                       </div>
                    </p>
                    <p>
                        联系地址:{{goodInfo.deliveryDddress}}
                    </p>
</div>
            
            
</div>
            </div>
        </div>
          <div style = "height:1.52rem;"></div>

            <div style = "background:#fff;" class = "clearfloat">
                    <div style = "background:#f7f7f7;height:1px;"></div>
                    <div class = "list-top clearfloat" style = "height:1.28rem;line-height:1.28rem;">
                        <span style = "display:block;width:15.5rem;margin:0 auto;">
                            <img v-lazy="shopInfo.icon" style = "float:left;width:0.683rem;height:0.683rem;margin-top:0.35rem"  alt="">
                            <p style = "width:7rem;float:left;margin-left:0.2rem;font-size:0.512rem;;color:#333;line-height:1.25rem;">
                                {{goodInfo.shopName}}
                                <i class = "iconfont icon-arrow-right-copy" style = "font-size:0.512rem;margin-left:0.2rem;"></i>
                            </p>
                            <!-- <p style = "float:right;font-size:0.512rem;color:#E9724C;line-height:1.25rem">
                                待收货
                            </p> -->
                        </span>
                    </div>
                    <div style = "background:#f7f7f7;" class = "clearfloat">
                      <!-- <router-link to = "/orderInsert" tag = "div"> -->
                      
                        <div style = "height:0.427rem;"></div>
                            <div style = "width:15.5rem;margin:0 auto;" class = "clearfloat">                         
                                  <p style = "width:3.3rem;height:3.8rem;float:left">
                                <img v-lazy="goodInfo.cargoJsonList[0].cover_url" style = "width:3rem;height:3rem;margin-top:0.5rem;" alt="">
                                 </p>
                                <div style = "height:3rem;width:10rem;float:left;">

                            
                                            <p style = "height:1.3rem;width:9rem;float:left;line-height:0.683rem;font-size:0.55rem;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:2;overflow: hidden;">
                                               {{goodInfo.cargoJsonList[0].name}}
                                            </p>
                                            <p style = "z-index:0;position:relative;width:6rem;color:#aeaeae;font-size:0.475rem;">
                                                {{goodInfo.cargoJsonList[0].typeDesc ==""?"无规格":goodInfo.cargoJsonList[0].typeDesc}}
                                            
                                            </p>
                                               <p style = "z-index:0;position:relative;width:6rem;color:#aeaeae;font-size:0.475rem;line-height:0.95rem;">
                                                店铺优惠:
                                            </p>
                                            <p style = "width:2.5rem;text-align:center;padding-top:0.05rem;padding-bottom:0.05rem;color:#aeaeae;font-size:0.475rem;color:#E9724C;border:1px solid #e9724c;border-radius:0.1rem;">
                                            
                                            门店自提
                                            
                                            </p>

                                </div>
                                <div style = "width:2.5rem;margin-right:0.25rem;float:right;margin-top:-2.2rem;text-align:right">
                                        <p style = "font-size:0.512rem;color:#E9724C;">
                                            ￥{{goodInfo.cargoJsonList[0].price}}
                                        </p>
                                        <p style = "font-size:0.512rem;color:#aeaeae;text-decoration:line-through">
                                            ￥{{goodInfo.cargoJsonList[0].rate1}}
                                        </p>
                                           <p style = "font-size:0.512rem;color:#E9724C;">
                                            ￥{{goodInfo.cargoJsonList[0].rate1-goodInfo.cargoJsonList[0].price}}
                                            
                                        </p>
                                        <p style = "font-size:0.512rem;color:#333;text-align:right;">
                                            x{{goodInfo.cargoJsonList[0].count}}
                                        </p>
                                </div>



                            </div>
   <div style = "height:0.427rem;clear:both;background:#f7f7f7"></div>
                            <!-- </router-link> -->
                    </div>
                
             
            </div>


            <div class = "clearfloat" style = "background:#fff;border-bottom:1px solid #f7f7f7">
                <div style = "width:15rem;margin:0 auto;">
               <span style = "font-size:0.512rem;line-height:1.451rem;float:left;">购买数量</span>
                <span style = "float:right;line-height:1.451rem;font-size:0.512rem;color:#aeaeae;">
                            <!-- <img src="./assets/jian.png" alt="" style = "float:left;width:0.598rem;margin-top:0.05rem;">
                        <input style = "width:1.621rem;height:0.768rem;border:1px solid rgba(228, 228, 228, 1);float:left;margin-left:0.2rem;" type="number" pattern="\d*" v-model = "num"/>
                            <img src="./assets/jia.png" alt="" style = "float:left;width:0.598rem;margin-left:0.2rem;margin-top:0.05rem;">
                         -->

                        {{goodInfo.cargoJsonList[0].count}}
                </span>
                </div>
 
            </div>
                        

                        <div class = "clearfloat" style = "background:#fff;border-bottom:1px solid #f7f7f7">
                <div style = "width:15rem;margin:0 auto;">
               <span style = "font-size:0.512rem;line-height:1.451rem;float:left;">订单总价</span>
                <span style = "float:right;line-height:1.451rem;color:#E9724C;font-size:0.512rem;">
                                            ￥{{goodInfo.cargoJsonList[0].price * goodInfo.cargoJsonList[0].count}}
                </span>
                </div>
 <div style = "height:0.32rem;"></div>
            </div>
            
            
            <div class = "clearfloat" style = "background:#fff;border-bottom:1px solid #f7f7f7">
                <div style = "width:15rem;margin:0 auto;">
               <span style = "font-size:0.512rem;line-height:1.451rem;float:left;">配送方式</span>
                <span style = "float:right;line-height:1.451rem;color:#aeaeae;font-size:0.512rem;">
                    门店自提
                        

                </span>
                </div>
 
            </div>
            <div class = "clearfloat" style = "background:#fff;border-bottom:1px solid #f7f7f7">
                <div style = "width:15rem;margin:0 auto;">
               <span style = "font-size:0.512rem;line-height:1.451rem;float:left;">下单时间</span>
                <span style = "float:right;line-height:1.451rem;font-size:0.512rem;color:#aeaeae;">
                            <!-- <img src="./assets/jian.png" alt="" style = "float:left;width:0.598rem;margin-top:0.05rem;">
                        <input style = "width:1.621rem;height:0.768rem;border:1px solid rgba(228, 228, 228, 1);float:left;margin-left:0.2rem;" type="number" pattern="\d*" v-model = "num"/>
                            <img src="./assets/jia.png" alt="" style = "float:left;width:0.598rem;margin-left:0.2rem;margin-top:0.05rem;">
                         -->

                       {{goodInfo.createTimeStr}}
                </span>
                </div>
 
            </div>







            <div class = "clearfloat" style = "background:#fff;padding-bottom:0.3rem;min-height:3.625rem;">
                <div style = "width:15rem;margin:0 auto;">
               <span style = "font-size:0.512rem;line-height:1.451rem;float:left;width:4rem">买家留言</span>
                <span style = "color:#aeaeae;font-size:0.512rem;line-height:0.8rem;float:left;width:11rem;margin-top:0.4rem;" >
                        无                    
                </span>
                </div>






            </div>

         
    <div style = "height:0.32rem;background:#f7f7f7"></div>


            <div class = "clearfloat" style = "background:#fff;width:15.36rem;height:3rem;margin:0 auto">
                <p style = "line-height:1.5rem;color:#aeaeae;text-align:center;font-size:0.683rem;">条形码</p>
                <p style = "line-height:1.5rem;color:#333;text-align:center;font-size:0.683rem;">
                    {{goodInfo.order_no}}
                </p>
            </div>

     


</div>
  <div style = "height:1.6rem;"></div>
    </div>
</template>

<script>
import {IP,PORT,promiseAjax} from "@/api/api.js"

export default {
    data(){
        return {
            orderId:"",
            id:"",
            goodInfo:{},
            shopInfo:{},
        }
    },
    created(){
        // 这里请求数据
        this.orderId = this.$route.query.orderId;
        this.id = this.$route.query.id;        
        this.getOrder();
        
    },
        mounted(){
           this.$refs.box.style.height = (document.body.clientHeight ||window.innerHeight)+"px";
          
    },

    methods:{
        gohistroy(){
            window.history.go(-1);
        },
        getOrder(){
            promiseAjax(`http://${IP}:${PORT}/paile-service/api/orderHandler/getOrderDetailsById`,{
                orderId:this.orderId,
            },{
                'Content-Type':'application/x-www-form-urlencoded'
            }).then((data)=>{
                // 获取到的是一个订单里面所有的小件，filter过滤掉不符合的
                console.log(data);
                data.datas.cargoJsonList = data.datas.cargoJsonList.filter((item)=>{
                   
                    return this.id == item.id;
                })
                this.goodInfo = data.datas;
                this.getShop(data.datas.userId,data.datas.shopId)                
            })
        },
        getShop(userId,shopId){
             promiseAjax(`http://${IP}:${PORT}/paile-service/api/shopsHandler/getShopsById`,{
                shopId,
                userId
            }).then((data)=>{
                console.log(data.datas);
                this.shopInfo = data.datas;
                
            })
        }
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
