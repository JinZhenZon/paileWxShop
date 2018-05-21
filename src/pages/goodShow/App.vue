<template>
        <!-- 详情 -->
        <div>
        <div style = "position:relative;z-index:1" :style = "over">
            <div style = "position:relative;">
                        <banner :warp-style = "warpStyle" :pages = "pages">
                </banner>
                <p @click = "historyGo" v-if = "pages.length" style = "position:absolute;top:0.5rem;left:0.5rem;text-align:center;background:rgba(30,30,30,0.6);width:1.28rem;height:1.28rem;line-height:1.28rem;border-radius:50%;text-align:center;">
                    <i class = "iconfont icon-jiantou-copy" style = "color:#fff;font-size:0.64rem;position:absolute;top:50%;left:50%;margin-top:-0.64rem;margin-left:-0.32rem"></i>
                </p>
            </div>
            <!-- title -->
            <p style = "width:14.9rem;margin:0 auto;font-size:0.7rem;line-height:1rem;margin-top:0.3rem;overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
                {{goodInfo.name}}
            </p>
            <div style = "height:0.5rem;"></div>
            <div style = "width:14.9rem;margin:0 auto;">
                <p style = "font-size:0.751rem;display:inline-block;float:left;color:#FA742B;">￥{{goodInfo.price}}</p>
                <!-- <p style = "margin-top:0.171rem;text-decoration:line-through;font-size:0.58rem;color:#AEAEAE;float:left;">￥99.99</p> -->
                <p style = "margin-top:0.171rem;float:right;color:#aeaeae;font-size:0.58rem;">月销：{{goodInfo.sales_count == "" ? 0 : goodInfo.sales_count}}</p>
            </div>
             <div style = "height:0.5rem;clear:both;"></div>
             <!-- <div style = "width:16rem;background:#f7f7f7;line-height:1.536rem;height:1.536rem;clear:both;">
                 <div style = "color:#E9724C;width:14.9rem;margin:0 auto;font-size:0.478rem;">

                 
              <span style = "width:3rem;height:0.768rem;text-align:center;margin-top:0.384rem;;line-height:0.768rem;border-radius:0.1rem;border:#E9724C 0.05rem solid;float:left">
                     只支持自提
                 </span>
               <span style = "font-size:0.58rem;color:#aeaeae;float:right;">
                    <a style = "color:#aeaeae;">立即分享</a>
                 </span> 
                 </div>
             </div> -->
      
            <div style = "line-height:1.707rem;color:#000;background:#fff;font-size:0.512rem;clear:both;border-top:1px  solid #f7f7f7">
                        <div style = "width:15rem;margin-left:0.5rem;margin:0 auto;height:1.707rem;">
                            <span style = "float:left;font-size:0.512rem;color:#aeaeae;"><i class = "iconfont icon-mudedi1" style = "display:inline-block;float:left"></i>
                            <span style = "float:left;margin-left:0.2rem;display:inline-block;width:14rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                                {{goodInfo.location}}{{goodInfo.shopName}}
                                
                                </span></span>

                        </div>
                        <div style = "height:1px;background:#f7f7f7;width:16rem;">

                        </div>
                          <div style = "width:15rem;margin-left:0.5rem;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;height:1.707rem;" @click = "callToShop">
                            <span style = "float:left;font-size:0.58rem;color:#aeaeae;">商家:{{goodInfo.shopName}}</span>
                            <span style = "float:right;color:#aeaeae;"><i class = "iconfont icon-dianhua"></i></span>
                        </div>
                </div>
     
   
          <div style = "height:1px;background:#f7f7f7" class = "clear:both"></div>
                <div style = "width:16rem;background:#f7f7f7;line-height:1.536rem;height:1.536rem;clear:both;">
                 <div style = "color:#333;width:14.9rem;margin:0 auto;font-size:0.478rem;">
                     宝贝评价(<span>{{Msg.allCount}}</span>)
                 </div>
             </div>
             <div style = "width:14.9rem;margin:0 auto;padding-top:0.5rem;">
        <!-- 一条评价 -->
                 <div class = "clearfloat" style = "clear:both" v-for = "(item,index) in MsgList" :key = "index">

             
                 <p>
                 <div style = "width:1.28rem;height:1.28rem;float:left;overflow:hidden;border-radius:50%;">
                     <img :src = "item.userHeadIcon" style = "width:1.28rem;height:1.28rem;" alt="">
                </div>
                <span style = "line-height:1.28rem;font-size:0.58rem;float:left;margin-left:0.5rem;">
                    {{item.userName}}
                </span>
                </p>
         
             <div style = "clear:both;width:14.9rem;margin:0 auto;padding-top:0.2rem;">
                <p style = "font-size:0.58rem;line-height:1rem;overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;"> 
                  {{item.content}}
             
                    </p>
                    <div style = "margin-top:0.2rem">
                        <img v-lazy="Msgimg.attachment_url" v-for = "(Msgimg,index) in item.urlList" :key = "index" alt="" style = "margin-left:0.9rem;width:4rem;height:4rem">
                    </div>


                    <div>                   
                         <div style = "font-size:0.58rem;line-height:1.58rem;">
                        <span style = "color:#aeaeae;float:left;">
                            {{item.createTimeStr}}
                        </span>
                           <span style = "color:#aeaeae;float:left;margin-left:0.5rem;">
                            官方标配
                        </span>
                           <span style = "color:#aeaeae;float:left;margin-left:0.5rem;">
                            颜色分类：黑色
                        </span>

                    </div>
                    </div>
                        </div>

                <div style = "height:1px;background:#f7f7f7;margin-top:0.2rem;margin-bottom:0.2rem;width:16rem;margin-left:-0.5rem" v-if = "index < MsgList.length-1"></div>
    </div>









                        
            <div v-if = "MsgList.length > 0" @click = "seeAllMsg" style = "font-size:0.614rem;clear:both;color:#E9724C;text-align:center;width:5.12rem;margin: 0 auto;line-height:1.28rem;border-radius:1.28rem;border:1px solid #E9724C;">
                            查看全部评价
                        </div>
                        <div v-else style = "line-height:1.28rem;width:100%;text-align:center;color:#aeaeae;background:#fff;font-size:0.512rem;">
                            暂无评价
                        </div>
                        <div style = "height:0.5rem;"></div>
             </div>
                        <div style = "background:#f7f7f7;width:100%;">
                        <p style = "font-size:0.478rem;width:14.9rem;margin:0 auto;line-height:1.536rem;">
                            产品详情
                        </p>
                                <div style = "height:0.2rem;clear:both;"></div>
                    <div class="describe_content" v-for = "(descItem,index) in descArr" :key = "index" style = "font-size: 0;">
                        <p v-if = "descItem.type == 1" style = " width:15rem;margin:0 auto;color:#000;font-size:0.5rem;line-height:0.8rem;">
                            {{descItem.content_desrc}}
                        </p>
                        <img  v-lazy="descItem.img_url" style = "outline:0;margin:0;padding:0;border:0" v-if = "descItem.type ==2" alt="图片获取异常" width = "100%">
                    </div>
                    </div>



     
                    <div style = "background:#f7f7f7;width:100%;">
                        <p style = "font-size:0.478rem;width:14.9rem;margin:0 auto;line-height:1.536rem;">
                            其他推荐
                        </p>
                        <div style = "height:0.2rem;"></div>
                        <div>
                            <div style = "margin-top:0.1rem;;width:7.851rem;background:#fff;height:12rem;float:left;margin-left:0.09rem;" v-for = "(item,index) in tlist" @click = "shopin(item)" :key = "index">
                                <img style = "width:7.851rem;height:8.53rem;" v-lazy="item.cover_url" alt="图片去外太空了">
                                <p style = "width:7.6rem;margin:0 auto;line-height:1rem;height:2rem;font-size:0.68rem;overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;">
                                    {{item.name}}
                                </p>
                                <div style = "width:7.6rem;margin:0 auto;">
                                <p style = "float:left;color:#FA742B;font-size:0.68rem;line-height:1rem;">
                                    ￥{{item.price}}
                                </p>
                                <p style = "float:right;font-size:0.58rem;color:#aeaeae;line-height:1rem;text-align:right;">
                                    {{item.sales_count}}人付款
                                </p>
                                </div>
                            </div>
                             
                        </div>

                        <div style = "height:0.2rem;clear:both"></div>
                        


                        
                    </div>
      <div style = "height:2.15rem;">
                    </div>
                    <div style = "width:16rem;position:fixed;bottom:0;">
                        <div style = "height:2.15rem;color:#aeaeae;width:50%;float:left;background:#f7f7f7;text-align:center;" @click = "goShop">
                            <i style = "line-height:1.275rem;font-size:0.854rem;" class = "iconfont icon-shouye-copy-copy-copy"></i>
                            <div style = "display:block;color:#aeaeae;line-height:0.875rem;font-size:0.58rem;">店铺</div>
                        </div>
                        <!-- href="signPage.html" -->
                        <div @click = "showPug" class = "bg-index" style = "display:block;font-size:0.614rem;color:#fff;width:50%;float:right;text-align:center;line-height:2.15rem;">
                            立即购买
                           </div>
                    </div>



              <!-- 全部评价 -->


        </div>
        <div >
        </div>

        <!-- 全部评价悬浮 -->
             <div v-if = "showAllMsg" style = "position:fixed;bottom:0;left:0;width:16rem;height:100%;z-index:1000;background:rgba(0,0,0,0.6)">
                        <div class = "insertMsg" style = "position:absolute;overflow-y:scroll;bottom:0;width:16rem;background:#fff;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;border-top:1px solid #aeaeae;">
                            <div class = "col-15" style = "margin:0 auto;">
                                <div style = "line-height:2rem;font-size:0.512rem;">
                                        <p style = "display:inline-block;width:13.5rem;">全部评价</p>
                                        <p style = "width:1rem;display:inline-block;line-height:1rem;margin-top:0.5rem;font-size:0.6rem;" @click = "hideAllMsg">x</p>
                                </div>
                                <div style = "width:16rem;border-bottom:1px solid #f7f7f7;margin-left:-0.5rem;"></div>


                                    <div style = "height:0.5rem;"></div>
                                        <ul class = "changeType">
                                            <li @click = "taggle(0)" style = "width:2.134rem;line-height:0.98rem;font-size:0.554rem;border-radius:0.98rem;border:1px solid #E9724C;text-align:center;float:left;margin-left:0.6rem;" class = "normal_bg current_bg" >
                                                    全部
                                            </li>
                                             <li @click = "taggle(1)" style = "width:2.134rem;line-height:0.98rem;font-size:0.554rem;border-radius:0.98rem;border:1px solid #E9724C;text-align:center;float:left;margin-left:0.6rem;" class = "normal_bg" >
                                                 无图
                                            </li>
                                             <li @click = "taggle(2)" style = "width:2.134rem;line-height:0.98rem;font-size:0.554rem;border-radius:0.98rem;border:1px solid #E9724C;text-align:center;float:left;margin-left:0.6rem;" class = "normal_bg" >
                                                 有图
                                            </li>
                                        </ul>
                                     
                                    <div style = "height:0.5rem;clear:both;"></div>

                                <div style = "width:16rem;border-bottom:1px solid #f7f7f7;margin-left:-0.5rem;clear:both;"></div>



        <div class = "clearfloat" style = "clear:both" v-for = "(item,index) in allMsgList" :key = "index">

             
                 <p>
                 <div style = "width:1.28rem;height:1.28rem;float:left;overflow:hidden;border-radius:50%;">
                     <img :src = "item.userHeadIcon" style = "width:1.28rem;height:1.28rem;" alt="">
                </div>
                <span style = "line-height:1.28rem;font-size:0.58rem;float:left;margin-left:0.5rem;">
                    {{item.userName}}
                </span>
                </p>
         
             <div style = "clear:both;width:14.9rem;margin:0 auto;padding-top:0.2rem;">
                <p style = "font-size:0.58rem;line-height:1rem;overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;"> 
                  {{item.content}}
             
                    </p>
                    <div style = "margin-top:0.2rem">
                        <img v-lazy="Msgimg.attachment_url" v-for = "(Msgimg,index) in item.urlList" :key = "index" alt="" style = "margin-left:0.9rem;width:4rem;height:4rem">
                    </div>


                    <div>                   
                         <div style = "font-size:0.58rem;line-height:1.58rem;">
                        <span style = "color:#aeaeae;float:left;">
                            {{item.createTimeStr}}
                        </span>
                           <span style = "color:#aeaeae;float:left;margin-left:0.5rem;">
                            官方标配
                        </span>
                           <span style = "color:#aeaeae;float:left;margin-left:0.5rem;">
                            颜色分类：黑色
                        </span>

                    </div>
                    </div>
                        </div>

                <div style = "height:1px;background:#f7f7f7;margin-top:0.2rem;margin-bottom:0.2rem;width:16rem;margin-left:-0.5rem;clear:both;" v-if = "index < MsgList.length-1"></div>
               
    </div>


 <div v-if = "allMsgList.length == 0 || allMsgList.length % 5 != 0" style = "font-size:0.512rem;line-height:2rem;background:#f7f7f7;color:#aeaeae;width:16rem;margin-left:-0.5rem;text-align:center;clear:both">
                    亲，到底了~
                </div>
                <div @click = "getMoreMsg" v-if = "allMsgList.length != 0 && allMsgList.length % 5 == 0" style = "font-size:0.512rem;line-height:2rem;background:#fff;color:#007aff;width:16rem;margin-left:-0.5rem;text-align:center;clear:both">
                    加载更多
                </div>
                            </div>
                        </div>
            </div>
            <!-- 规格选择box -->
            <div class = "pugBox" v-if = "showPugBox" style = "position:fixed;bottom:0;left:0;width:16rem;height:100%;z-index:1000;background:rgba(0,0,0,0.6)">

                    <div style = "max-height:12.6rem;position:absolute;bottom:0;width:16rem;background:#fff;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;border-top:1px solid #aeaeae;">
                       
                       
                        <div style = "position:absolute;width:1rem;height:1rem;text-align:center;line-height:1rem;right:0.5rem;top:0.5rem;" @click = "hidePug">
                            x
                        </div>
                       
                        <div style = "width:15rem;margin:0 auto;">
                        <img style = "width:4.26rem;height:4.26rem;position:absolute;top:-2.13rem;border-radius:0.3rem;" :src = "goodInfo.cover_url"  alt="详情图消失">
                        <div style = "width:11rem;line-height:1rem;margin-left:5rem;height:2.8rem;font-size:0.6rem;">
                            <p style = "color:#E86278">
                                ￥{{goodInfo.price}}
                            </p>
                            <p style = "#AEAEAE">
                                库存100件
                            </p>
                        </div>
                        <div style = "height:1px;background:#f7f7f7;width:16rem;margin-left:-0.5rem;"></div>

                        <div style = "max-height:7.51rem;min-height:5rem;overflow-y:scroll;">
                                <div>
                                        <div v-for = "(item,num) in goodInfo2" :key = "num" style = "margin-top:0.3rem;">
                                                <div class="dataClick">
                                                            <p class=" specTitle content" style = "margin-top:0.3rem;">
                                                                {{item.title}}
                                                            </p>
                                                            <div class="radiosGroup Radio" style = "margin-top:0.3rem;">
                                                                <p v-for = "(i,index) in item.descList" :key = "index" @click = "click(num,index)" style = "margin-top:0.2rem;">
                                                                    {{i.desc}}
                                                                </p>
                                                            </div>
                                                </div>
                                                <div style = "margin:0 auto;margin-top:0.6rem;height:1px;width:100%;background:#f7f7f7"></div>
                                        </div>
                                        <div style = "clear:both;margin-top:0.3rem;position:relative">
                                                  
                                                <p class="specTitle content" style = "line-height:1rem;">
                                                    数量

                                                </p>
                                                <div style="position: absolute;right:0;bottom:0rem;height:1rem;">
                                                    <div class="goodnumbtn" @click="jian" style = "float:left;">
                                                                    <img style = "width:1rem;height:1rem" src="../../../static/minus.png" alt="">
                                                        
                                                    </div>
                                                    <div class="goodsnum" style="background:#fff;float:left;line-height:1.2rem;text-align:center;width:3rem;font-size:0.8rem;" v-text = "inputNum"></div>
                                                    <div class="goodnumbtn" @click="add"  style = "float:left;">
                                                                    <img style = "width:1rem;height:1rem" src="../../../static/plus.png" alt="">
                                                          
                                                    </div>
                                                </div>
                                           
                                        </div>
                                </div>
                            
                        </div>

                        <div style = "clear:both;height:0.5rem;"></div>
                        <div @click = "goShoping" class = "bg-index" style = "width:12.7rem;margin:0 auto;height:1.28rem;border-radius:1.28rem;color:#fff;text-align:center;line-height:1.28rem;font-size:0.6rem;">
                            确  定
                        </div>
                        <div style = "clear:both;height:0.5rem;"></div>

</div>
                        
                    </div>

            </div>

        </div>
</template>

<script>
import banner from "@/components/fullScreenSlide.vue";
import { IP, PORT, promiseAjax } from "@/api/api.js";
import { splitQuery } from "@/api/getQuery.js";
import userInfoVue from '../seeting/view/userInfo.vue';

export default {
  data() {
    return {
      inputNum: 1,
      goodInfo2: [
      ],
      shop_id: "",

      submitGoodPug: [],

      warpStyle: "width:16rem;height:12.8rem;",
      over: "",
      descArr: [],
      pages: [],
      index: 0,
      showAllMsg: false,
      sliderinit: {
        currentPage: 0, //当前页码
        thresholdDistance: 100, //滑动判定距离
        thresholdTime: 10, //滑动判定时间
        autoplay: 3000, //自动滚动[ms]
        loop: true, //循环滚动
        direction: "horizontal", //方向设置，垂直滚动
        infinite: 1, //无限滚动前后遍历数
        slidesToScroll: 1 //每次滑动项数
      },
      cargoId: "",
      userId: "",
      goodInfo: {},
      Msg: {},
      MsgList: [],
      allMsgList: [],
      type: 0,
      tlist: [],
      showPugBox: false
    };
  },
  methods: {
    shopin(data){
            window.location.href = "goodShow.html?userId="+JSON.parse(localStorage.getItem('paile8Token')).userId + "&cargoId="+data.id;      
    },
    // 给商家打call
    
    callToShop() {
      window.location.href = "tel:" + this.goodInfo.shopPhone;
    },
    // 去店铺
    goShop() {
      let myHref =
        "shop.html#/shopAll?shopId=" + this.shop_id + "&userId=" + this.userId;
      window.location.href = myHref;
    },
    // 选择规格后去付款
    goShoping() {
      if (this.submitGoodPug.length == this.goodInfo2.length) {
        if (this.inputNum > 0) {
          let cargoId = this.cargoId;
          let cargoNum = this.inputNum;
          let userId = this.userId;
          let openid = JSON.parse(window.localStorage.getItem('paile8UserInfo')).openid;
          
          let shopId = this.shop_id;
                     let pug = ""; 
             this.submitGoodPug.map((item,index)=>{
                 if(index == this.submitGoodPug.length-1)
                 pug = pug+ item.title + ":"+item.descList
                 else
                 pug = pug+ item.title + ":"+item.descList+';'
             })

  console.log(`cargoId:${cargoId};cargoNum:${cargoNum};openid:${openid};shopid:${shopId};userid:${userId}`)
          // cargoDesc 商品规格
          // window.location.href = `http://paile8.com/paile-pay/orderInfo/getOrderInfo.do?cargoId=${cargoId}&cargoNum=${cargoNum}&cargoDesc=""&type=0&openid=${openid}&userId=${userId}&shopId=${shopId}`;
        window.location.href = `http://paile8.com/paile-pay/orderInfo/getOrderInfo.do?cargoId=${cargoId}&cargoNum=${cargoNum}&cargoDesc=${pug}&type=0&openid=${openid}&userId=${userId}&shopId=${shopId}`;
        }
      }
    },

    // 计数

    add() {
      this.inputNum = this.inputNum + 1;
    },
    jian() {
      if (this.inputNum > 0) {
        this.inputNum = this.inputNum - 1;
      }
    },

    // 展示购买配置
    showPug() {
      promiseAjax(
        `http://${IP}:${PORT}/paile-service/api/cargoHandler/getCargoDescByCargoId`,
        {
          cargoId: this.cargoId
        }
      ).then(data => {
        this.goodInfo2 = data.datas;
        console.log(this.goodInfo2);
        this.over = {
          height: window.innerHeight + "px",
          overflow: "hidden"
        };

        this.showPugBox = true;
      });
    },
    // 隐藏购买配置
    hidePug() {
      this.submitGoodPug = [];
      this.showPugBox = false;
      this.over = {
        height: "auto",
        overflow: "auto"
      };
    },
    // 查看所有评价
    seeAllMsg() {
      this.showAllMsg = true;
      this.over = {
        height: window.innerHeight + "px",
        overflow: "hidden"
      };

      // console.log($('.insertMsg'));
      this.getAllMsg();
    },
    // 隐藏所有评价
    hideAllMsg() {
      this.showAllMsg = false;
      this.over = {
        height: "auto",
        overflow: "auto"
      };
      this.allMsgList = [];
      this.index = 0;
      this.type = 0;
    },
    // 选择配置
    click(num, index) {
      $(".Radio")
        .eq(num)
        .find("p")
        .removeClass("activeSize");
      $(".Radio")
        .eq(num)
        .find("p")
        .eq(index)
        .addClass("activeSize");
      //   title: "型号", descList: "thon-1"

      let obj = {
        title: this.goodInfo2[num].descList[index].title,
        descList: this.goodInfo2[num].descList[index].desc
      };
      this.submitGoodPug[num] = obj;
    },

    taggle(n) {
      $(".changeType li").removeClass("current_bg");
      //  $('.changeType li').addClass('normal_bg');
      console.log(n);
      $(".changeType li")
        .eq(n)
        .addClass("current_bg");
      this.type = n;
      this.index = 0;
      this.getFontMsg();
    },
    historyGo() {
      window.history.go(-1);
    },
    // 获取商品信息
    getGood() {
      promiseAjax(
        `http://${IP}:${PORT}/paile-service/api/cargoHandler/getCargoById`,
        {
          cargoId: this.cargoId,
          userId: this.userId,
          type: 0
        }
      ).then(data => {
        this.pages = data.datas.urlList;
        this.goodInfo = data.datas;
        this.shop_id = data.datas.shop_id;
        // console.log(data.datas);
      });
    },
    // 评论条数
    getMsgCount() {
      promiseAjax(
        `http://${IP}:${PORT}/paile-service/api/cargoMsgHandler/getMsgCount`,
        {
          cargoId: this.cargoId
        }
      ).then(data => {
        this.Msg = data.datas;
      });
    },
    // 更多评论
    getMoreMsg() {
      this.index += 5;
      this.getFontMsg();
    },
    getMsg() {
      // 获取商品页面评价
      promiseAjax(
        `http://${IP}:${PORT}/paile-service/api/cargoMsgHandler/getFirstCargoMsg`,
        {
          cargoId: this.cargoId,
          userId: this.userId,
          index: 0,
          length: 2
        }
      ).then(data => {
        this.Msg = data.datas;
        // console.log(data);
      });
    },
    getAllMsg() {
      // 获取商品评价
      promiseAjax(
        `http://${IP}:${PORT}/paile-service/api/cargoMsgHandler/getFirstCargoMsg`,
        {
          cargoId: this.cargoId,
          userId: this.userId,
          index: this.index,
          length: 5
        }
      ).then(data => {
        this.Msg = data.datas;
      });
    },
    // 根据类型获取评论
    getFontMsg() {
      promiseAjax(
        ` http://${IP}:${PORT}/paile-service/api/cargoMsgHandler/getFirstCargoMsgByType`,
        {
          cargoId: this.cargoId,
          userId: this.userId,
          type: this.type,
          index: this.index,
          length: 5
        }
      ).then(data => {
        // this.Msg = data.datas
        console.log(data);
      });
    },
    // 图文详情
    getDetails() {
      promiseAjax(
        `http://${IP}:${PORT}/paile-service/api/cargoHandler/getCargoDetailsByCargoId`,
        {
          cargoId: this.cargoId
        }
      ).then(data => {
        this.descArr = data.datas;
      });
    },
    // 获取商品列表，底部推荐商品
    getGoodList(type) {
 
      promiseAjax(
        `http://${IP}:${PORT}/paile-service/api/cargoHandler/getCargoesByType`,
        {
          type,
          index: 0,
          length: 1,
          orderType: 3,
          descType: 1
        }
      ).then(data => {
       
        if (data.datas.length > 0) {
          this.tlist.push(data.datas[0]);
        }
      });
    }
  },
  created() {
    splitQuery().then(query => {
      this.userId = query.userId;
      console.log(this.userId);
      this.cargoId = query.cargoId;
      this.getGood();
      this.getMsgCount();
      this.getMsg();
      this.getDetails();
      for (var i = 1; i < 10; i++) {
        this.getGoodList(i);
      }























      

    });
  },
  components: {
    banner
  }
};
</script>

<style>
@import url("../../public/Adaptation.css");
@import url("../../public/iconfont.css");

.radiosGroup p {
  display: inline-block;
  margin-left: 0.5rem;
  text-align: center;
  background: #efefef;
  font-size: 0.5rem;
  line-height: 1rem;

  width: 3rem;
  border-radius: 0.2rem;
}

.radiosGroup .activeSize {
  background: rgba(233, 114, 76, 1);
  color: #fff;
}

.specTitle {
  /* font-weight: 800; */
  font-size: 0.6rem;
  line-height: 0.8rem;
}

.content {
  width: 15rem;
  margin: 0 auto;
  font-family: PingFangSC-Light, sans-serif;
}

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
a.bg-index {
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
.current_bg {
  background: #e9724c !important;
  color: #fff !important;
}
.normal_bg {
  color: #e9724c;
  background: #ffffff;
}
.insertMsg {
  max-height: 90%;
}
</style>
