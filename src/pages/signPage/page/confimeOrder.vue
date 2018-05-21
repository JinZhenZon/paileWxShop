<template>
        <div ref = "box" style ="position:absolute;top:0;background:#f7f7f7;">
            <div style = "width:16rem;">
        <!-- <div style = "position:fixed;z-index:10;width:16rem;height:1.707rem;font-size:0.683rem;line-height:1.707rem;color:#fff;"  class = "bg-index">
            <div style = "position:fixed;top:0;font-size:0.683rem;line-height:1.707rem;color:#fff;width:16rem;z-index:10;" class = "bg-index">
                <i style = "margin-left:0.5rem;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
                <span style = "margin-left:0.5rem;">拍乐网</span>
            </div>
            <div style = "height:1.707rem;"></div>
        </div> -->
        <!-- <div style = "height:1.707rem;margin:0"></div> -->
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
                       <div style = "width:7rem;float:left;">店铺名称：{{shopName}}</div>
                       <div style = "width: 5.2rem;float:left;text-align:right;">
                           {{shopPhone}}
                       </div>
                    </p>
                    <p>
                        卖家地址:{{shopAddress}}
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
                            <img v-lazy="shopiconurl" style = "float:left;width:0.683rem;height:0.683rem;margin-top:0.35rem"  alt="">
                            <p style = "width:7rem;float:left;margin-left:0.2rem;font-size:0.512rem;;color:#333;line-height:1.25rem;">
                                {{shopName}}
                                <!-- <i class = "iconfont icon-arrow-right-copy" style = "margin-left:0.2rem;"></i> -->
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
                                  <p style = "width:3.3rem;height:3rem;float:left">
                                <img v-lazy="goodurl" style = "width:3rem;height:3rem;" alt="">
                                 </p>
                                <div style = "height:3rem;width:10rem;float:left;">

                            
                                            <p style = "height:1.366rem;width:9rem;float:left;line-height:0.683rem;font-size:0.55rem;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:2;overflow: hidden;">
                                                {{goodtitle}}
                                            </p>
                                            <p style = "clear:both;position:relative;width:6rem;line-height:1rem;color:#aeaeae;font-size:0.475rem;">
                                                    {{pug}}
                                            </p>
                                </div>
                                <div style = "width:2.5rem;margin-right:0.25rem;float:right;text-align:center;margin-top:-2.5rem;">
                                        <p style = "font-size:0.512rem;color:#E9724C;">
                                            ￥{{price}}
                                        </p>
                                        <p style = "font-size:0.512rem;color:#aeaeae;text-decoration:line-through">
                                            ￥{{parseInt(price)+Math.floor(Math.random()*30)}}
                                        </p>
                                        <p style = "font-size:0.512rem;color:#333;text-align:center;">
                                            x{{num}}
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
                <span style = "float:right;line-height:1.451rem;font-size:0.512rem;">
                            <!-- <img src="./assets/jian.png" alt="" style = "float:left;width:0.598rem;margin-top:0.05rem;">
                        <input style = "width:1.621rem;height:0.768rem;border:1px solid rgba(228, 228, 228, 1);float:left;margin-left:0.2rem;" type="number" pattern="\d*" v-model = "num"/>
                            <img src="./assets/jia.png" alt="" style = "float:left;width:0.598rem;margin-left:0.2rem;margin-top:0.05rem;">
                         -->

                        {{num}}
                </span>
                </div>
 
            </div>

				<div class="clearfloat"
					style="background:#fff;border-bottom:1px solid #f2f2f2">
					<div style="width:15rem;margin:0 auto;">
						<span style="font-size:0.512rem;line-height:1.451rem;float:left;">配送方式</span>

						<select name="psfunc" id="psfunc" @change="changeF"
							v-model="psfunc"
							style="float:right;line-height:1.2rem;margin-top:0.251rem;font-size:0.65rem;">
							<option value="1">配送</option>
							<option value="0">自提</option>
						</select>


					</div>

				</div>
    <transition name="fade">
            <div class = "clearfloat" v-if = "psfunc==1" style = "background:#fff;border-bottom:1px solid #f2f2f2">
                <div style="width:15rem;margin:0 auto;">
						<span style="font-size:0.512rem;line-height:1.451rem;float:left;">配送地址</span>
                </div>
           
          </div>
     </transition>





            <!-- <div class = "clearfloat" style = "background:#fff;">
                <div style = "width:15rem;margin:0 auto;">
               <p style = "font-size:0.512rem;line-height:1.451rem;float:left;">卖家留言</p>
                <div style = "text-align:center;font-size:0.512rem;line-height:0.8rem;" >
                    <textarea rows = "3" style = "width:15rem;resize:none;border:1px solid #f7f7f7">

                    </textarea>
                </div>
                </div>
 
            </div> -->
                        <div class = "clearfloat" style = "background:#fff;margin-top:0.3rem;">
                <div style = "width:15rem;margin:0 auto;">
               <span style = "font-size:0.512rem;line-height:1.451rem;float:left;">订单金额</span>
                <span style = "float:right;line-height:1.451rem;color:#E9724C;font-size:0.512rem;">
                    ￥{{price*num}}
                        

                </span>
                </div>
 
            </div>

        <div style = "height:2.134rem;width:16rem;position:fixed;bottom:0;background:#fff;">

                <div @click = "submitOrder" style = "float:right;margin-right:0.5rem;width:4.139rem;font-size:0.555rem;margin-top:0.427rem;height:1.28rem;line-height:1.28rem;color:#fff;text-align:center;border-radius:1.28rem;background:linear-gradient(230deg, rgba(232, 98, 120, 1) 0%, rgba(232, 98, 120, 1) 0%, rgba(255, 82, 229, 1) 100%, rgba(255, 82, 229, 1) 100%);background:-webkit-linear-gradient(230deg, rgba(232, 98, 120, 1) 0%, rgba(232, 98, 120, 1) 0%, rgba(255, 82, 229, 1) 100%, rgba(255, 82, 229, 1) 100%)">
                    提交订单
                </div>


          <div style = "float:right;margin-right:0.5rem;width:4.139rem;font-size:0.555rem;margin-top:0.427rem;height:1.28rem;color:#FA742B;line-height:1.28rem;">
                    总价：￥{{price*num}}
                </div>        
 

    <div style = "float:right;margin-right:0.5rem;width:4.139rem;font-size:0.555rem;margin-top:0.427rem;height:1.28rem;line-height:1.28rem;">
                    共计 {{num}} 件商品
                </div>    




</div>

        <div style = "height:2.134rem">
</div>

</div>
  <div style = "height:1.6rem;"></div>
    </div>
</template>

<script>
import {splitQuery} from "@/api/getQuery"
import { IP, PORT, promiseAjax } from "@/api/api.js";

export default {
    data(){
        return {
            shopName : "",
            shopAddress:"",
            shopPhone:"",
            num:1,
            price:'',
            openid:"",
            phone:"",
            shopiconurl:'',
            goodurl:"",
            pug:"",
            goodtitle:"",
            psfunc:1,
            cargoId:"",
        }
    },
        mounted(){
           this.$refs.box.style.height = (document.body.clientHeight ||window.innerHeight)+"px";
    },
    methods:{
        gohistroy(){
            window.history.go(-1);
        },
        		changeF () {
				this.addShowmap = this.psfunc == 0 ? true : false
            },
            submitOrder(){
                promiseAjax(`http://${IP}:${PORT}/paile-service/api/groupBuyingHandler/createGroupBuying`,{
                    cargoId : this.cargoId,
                    userId:JSON.parse(window.localStorage.getItem('paile8UserInfo')).id,
                    customerName:"金振宗",
                     phone:this.phone,
                     address:"江苏省徐州市徐州软件园",
                      count:this.num,
                      price:this.price*this.num,

                })
            }
    },
    created(){
        splitQuery().then(data =>{
            this.shopName = data.shopName;
            this.shopAddress = data.shopAddress;
            this.shopPhone = data.shopPhone;
            this.num = data.num;
            this.price = data.price;
            this.shopiconurl = data.shopiconurl;
            this.goodurl = data.goodUrl;
            this.goodtitle = data.goodtitle;
            this.pug = data.pug;

            this.cargoId = data.cargoid
            this.openid = JSON.parse(window.localStorage.getItem('paile8UserInfo')).openid;
            this.phone = JSON.parse(window.localStorage.getItem('paile8UserInfo')).phone;
        })
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
    .fade-enter-active, .fade-leave-active {
        transition: all .3s ease;
        

    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
         transform: translateY(-0.5rem);
    }
</style>
