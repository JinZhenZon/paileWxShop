<template>
    <div ref = "box" id = "box" style = "overflow:scroll;position:absolute;top:0;background:#f7f7f7;">
                        <transition name="fade">
                        <div v-if = "tip" style = "width:9rem;height:9rem;background:rgba(0,0,0,0.5);text-align:center;font-size:0.6rem;color:#fff;border-radius:1rem;position:fixed;top:50%;left:50%;margin-top:-4.5rem;margin-left:-4.5rem;">

                            <span class = "iconfont" :class = "tipiconClass" style = "display:block;width:100%;font-size:1rem;line-height:2rem;position:relative;top:2rem;"></span>
                            <span style = "position:relative;top:2.5rem;font-size:0.6rem;line-height:1rem;">
                                {{tipText}}
                            </span>
                        </div>
                    </transition>
                    <!-- <div class = "bg-index" style = "position: fixed; top: 0px; font-size: 0.683rem; line-height: 1.707rem; color: rgb(255, 255, 255); width: 16rem; z-index: 10;">
                        <i style = "margin-left:0.5rem;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
                        <span style = "margin-left:0.5rem" >拍乐网</span>
                     </div>
            <div style = "height:1.707rem;">
            </div> -->
            <ul style = "width:16rem;">
                
                <li style = "background:#fff;padding-bottom:0.3rem" class = "clearfloat" v-for = "(item,index) in list" :key = "index"  v-if = "item.conuntPrice != ''">
                    <!-- 遍历头像 -->
      

                    
                    <div style = "background:#fff;height:1px;"></div>
                    <div class = "list-top clearfloat" style = "height:1.28rem;line-height:1.28rem;">
                        <span >
                            <img v-lazy="item.headerIcon" style = "float:left;width:0.683rem;height:0.683rem;margin-top:0.35rem"  alt="">
                
                            <p style = "width:7rem;float:left;margin-left:0.2rem;font-size:0.512rem;;color:#333;line-height:1.25rem;">
                                {{item.shopName}}<i class = "iconfont icon-arrow-right-copy" style = "font-size:0.512rem;margin-left:0.2rem;"></i>
                            </p>
                  
                            <p style = "float:right;font-size:0.512rem;color:#E9724C;line-height:1.25rem">
                                <!--  1:待付款 2:待发货 3:待收货 4:待评价 5:待团购 6:已评价 7:已关闭 -->
                                {{item.status | status}}
                            </p>
                        </span>
                    </div>
                    <div style = "background:#f7f7f7;" class = "clearfloat">
                     <div v-for = "(i,index2) in item.cargoList" :key="index2">

                        <div style = "height:0.427rem;"></div>
                            <div style = "width:15.5rem;margin:0 auto;" class = "clearfloat" @click = "gotoIn(item.orderId,i.id)">                  
                                  <p style = "width:3.3rem;height:3rem;float:left">
                                <img v-lazy="i.cover_url" style = "width:3rem;height:3rem;" alt="">
                                 </p>
                                <div style = "height:3rem;width:10rem;float:left;">

                            
                                            <p style = "height:1.3rem;width:9rem;float:left;line-height:0.683rem;font-size:0.55rem;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:2;overflow: hidden;">
                                                {{i.name}}
                                            </p>
                                            <p style = "z-index:0;position:relative;width:6rem;color:#aeaeae;font-size:0.475rem;margin-top:0.34rem;clear:both;">
                                                {{i.paramesData}}1111
                                            
                                            </p>
                                            <!-- <p style = "margin-top:0.17rem;width:2.5rem;text-align:center;padding-top:0.05rem;padding-bottom:0.05rem;font-size:0.475rem;color:#E9724C;border:1px solid #e9724c;border-radius:0.1rem">
                                            
                                            门店自提
                                            
                                            </p> -->

                                </div>
                                <div style = "width:2.5rem;margin-right:0.25rem;float:right;margin-top:-2.5rem;text-align:right;">
                                        <p style = "font-size:0.512rem;color:#E9724C;">
                                            ￥{{i.price}}
                                        </p>
                                        <p style = "font-size:0.512rem;color:#aeaeae;text-decoration:line-through">
                                            ￥{{i.rate1}}
                                        </p>
                                        <p style = "font-size:0.512rem;color:#333;text-align:right;">
                                            x{{i.count}}
                                        </p>
                                </div>
                                


                            </div>
   <div style = "height:0.427rem;clear:both;background:#f7f7f7"></div>

                     </div>
                        
                    </div>
                    
                       
                     <div>
                  <div style = "height:0.2rem;clear:both;background:#fff"></div>
                         
                                <p style = "text-align:right;font-size:0.512rem;">
                                   共{{item.cargoList.length}}件产品<span style = "margin-left:0.5rem">合计：{{item.conuntPrice}}（含运费￥0.00）</span>
                                </p>
                  <div style = "height:0.2rem;clear:both;background:#fff"></div>  
                                <div @click = "confimeOrder(item)" style = "margin-right:0.5rem;width:2.859rem;height:1.1rem;border-radius:1.1rem;float:right;font-size:0.512rem;text-align:center;line-height:1.1rem;color:#fff;" class = "bg-index">
                                    {{item.status | buttonStatus}}
                                </div>        
                                <div style = "width:2.859rem;margin-right:0.5rem;height:1.1rem;border-radius:1.1rem;float:right;font-size:0.512rem;text-align:center;line-height:1.1rem" class = "btn2">
                                    立即分享
                                </div>                     
                        </div>



            
                </li>
            </ul>

            <div style ="height:0.5rem;background:#f7f7f7;clear:both" v-if = "list.length>=6">
            </div>
                               <div v-if = "loading" style = "clear:both;text-align:center;margin-top:0.5rem;">
                        <img src="../../../../static/loading.gif" alt="" style = "width:2rem;height:2rem;">
                    </div>
                <div v-show = "last0" style = "font-size:0.5rem;color:#aeaeae;line-height:2rem;text-align:center">暂无更多订单...</div>          
             
                    </div>
    </div>
</template>

<script>


import {IP,PORT,promiseAjax} from "@/api/api.js"
import $ from "jquery"


export default {
    data(){
        return {
            userId:"",
            index:0,
            length:6,
            list :[],
            loading:true,
            last0:false,
            Ajax:true,
            tipiconClass:"",
     
 iconList:[],
 tipText:"",
 tip:false,
        }
    },
    filters:{
        buttonStatus(num){
 var str = "";
            switch (num){
                // 1:待付款 2:待发货 3:待收货 4:待评价 5:待团购 6:已评价 7:已关闭
                case 1:str = "立即付款";break;
                case 2 : str = "确认收货";break;
                case 3 : str = "确认收货";break;
                case 4 : str = "立即评价";break;
                case 5 : str = "邀请好友";break;
                case 6 : str = "删除订单";break;
                case 7 : str = "删除订单";break;
            }
            return str;
        },
        status(num){
            var str = "";
            switch (num){
                // 1:待付款 2:待发货 3:待收货 4:待评价 5:待团购 6:已评价 7:已关闭
                case 1:str = "待付款";break;
                case 2 : str = "待发货";break;
                case 3 : str = "待收货";break;
                case 4 : str = "待评价";break;
                case 5 : str = "待团购";break;
                case 6 : str = "已评价";break;
                case 7 : str = "已关闭";break;
            }
            return str;
        }
    },
  methods: {
    //   确认订单
      confimeOrder(item){
        //   确认收货按钮
          if(item.status == 3 || item.status == 2){
                promiseAjax(`http://${IP}:${PORT}/paile-service/api/orderHandler/confirmOrder`,{
                            orderId:item.orderId,
                            shopId:item.shopId,
                            amount:item.conuntPrice,
                        }).then(data =>{
                            if(data.code == 0){
                                this.tipText = "收货成功";
                                this.tipiconClass = "icon-duihao"
                                this.tip = true;

                                setTimeout(()=>{
                                    this.tip = false;
                                    window.location.href = 'order.html'

                                },2000)
                            }else{
                                this.tipText = "收货失败";
                                this.tipiconClass = "icon-cuohao"
                                
                                this.tip = true;
                                    setTimeout(()=>{
                                    this.tip = false;
                                },2000)
                                
                                
                            }
                        }).catch(err =>{
                            this.tipText = "收货失败";
                                this.tipiconClass = "icon-cuohao"
                            
                                this.tip = true;
                                        setTimeout(()=>{
                                    this.tip = false;
                                },2000)
                        })
          }
          if(item.status == 4 ){
            //   立即评价按钮事件
            window.location.href = "pingjia.html?orderId="+item.orderId;
          }
          
      },
    gohistroy() {
      window.history.go(-1);
    },
    gotoIn(orderId,id){
       this.$router.push({
           path:"/orderInsert",
           query:{
               orderId,id
           }
       })
    },
    getOrder(){
        const userId = this.userId;
        const index = this.index;
        const length = this.length;
      
        promiseAjax(`http://${IP}:${PORT}/paile-service/api/orderHandler/getAllOrder`,{
            userId,index,length
        }).then(data => {
            
//  添加店铺头像
            if(data.datas == null){
                this.loading = false;
                this.last0 = true;
                this.Ajax = false;
               return false;
            }
           data.datas.map((i) =>{
                      var conuntPrice = 0;
                    promiseAjax(`http://${IP}:${PORT}/paile-service/api/shopsHandler/getShopsById`,{
                                    shopId:i.cargoList[0].shop_id,
                                    userId:this.userId,
                                }).then((data)=>{
                                       i.headerIcon = data.datas.icon;
                                            promiseAjax(`http://${IP}:${PORT}/paile-service/api/orderHandler/getOrderDetailsById`,{
                                                orderId:i.orderId
                                            },{
                                                'Content-Type':'application/x-www-form-urlencoded'
                                                }).then((data2)=>{
                                                    // 循环将属性直接打进list
                                                    data2.datas.cargoJsonList.map((item,index)=>{
                                                            i.cargoList[index].paramesData = item.typeDesc;
                                                            conuntPrice += item.price*item.count;
                                                            i.conuntPrice = conuntPrice;
                                                    })
                                                     this.list.push(i);     
                                                })

                                })
                               

                                 
            })
            if(this.list.length == 6){
                                //   没到最后的情况
                                    this.Ajax = true;
                                  this.loading = false;     

               }else{                         
                             this.loading = false;
                            this.last0 = true;
                            this.Ajax = false;
                                  
               }

      







        })
        
  
    },
  },

  created(){
      this.userId = JSON.parse(localStorage.getItem('paile8Token')).userId;
      this.getOrder();
                let _this = this;
                //  触底检测
            $(document).scroll(function(){
            　　var scrollTop = $(this).scrollTop();
            　　var scrollHeight = $(document).height();
            　　var windowHeight = $(this).height();
            　　if(scrollTop + windowHeight >= scrollHeight-50){
                    if(_this.Ajax){
                        _this.Ajax = false;
                        _this.loading = true;
                        _this.index+=6;
                　　    _this.getOrder();
                    }
            　　}
            });
  },
  mounted() {

  }
};
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
.list-top {
  width: 14.5rem;
  margin: 0 auto;
  height: 1rem;
}
.fade-enter-active,.fade-leave-active{
    transition:opacity .3s;
}
.fade-enter,.fade-leave{
    opacity: 0;
}
</style>
