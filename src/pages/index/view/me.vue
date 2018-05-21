<template>
    <div style ="position:absolute;top:0;background:#f7f7f7;">

    
    <div style = "width:16rem;">
        <div style = "position:fixed;z-index:10;width:16rem;height:1.707rem;text-align:center;font-size:0.6rem;line-height:1.707rem;color:#fff;"  class = "bg-index">
            拍乐网
            <a href= "seeting.html">
            <i style = "position:absolute;font-size:0.7rem;line-height:1.707rem;right:0.8rem;" class = "iconfont icon-shezhi"></i>
            </a>
        </div>
        <div style = "height:1.707rem;margin:0"></div>
        <div class = "bg-index" style = "position:relative;width:16rem;height:2.688rem;">
            <div class = "poverbox" v-if = "islogin">
               <div style = "width:14.36rem;margin-left:0.5rem;">
                   <a href = "seeting.html#/userInfo">
               <div style = "height:0.72rem;"></div>
                <div style = "width:1.536rem;height:1.536rem;float:left;border-radius:50%;overflow:hidden">
                    <img :src="headerIcon == ''?'https://passport.jd.com/new/misc/skin/df/i/no-img_mid_.jpg' :headerIcon" alt="" style = "width:1,536rem;height:1.536rem;">
                </div>

                <div class = "pover">
                    <p>
                        用户名：{{username}}
                    </p>
                    <!-- <p>
                        用户等级：<span style = "color:#E9724C">LV10</span>
                    </p> -->
                    
                    <i class = "iconfont icon-arrow-right-copy" style = "position:absolute;right:0;line-height:1.536rem;top:0;">
                       
                    </i>
                 
                </div>
               <div style = "height:0.72rem;"></div>
               </a>
</div>
            </div>
            <div  class = "poverbox" v-if = "!islogin">
                    <div>
                        <a href="index.html#/wx">
                            <div style = "width:4.36rem;height:1.387rem;border-radius:0.3rem;left:5.5rem;line-height:1.387rem;text-align:center;font-size:0.6rem;position:relative;top:0.8rem;color:#fff" class = "bg-index">
                                点 击 登 录
                            </div>
                        </a>
                    </div>
            </div>
        </div>
</div>
  <div style = "height:1.6rem;"></div>
    <div class = "clearfloat" style = "line-height:1.707rem;font-size:0.6rem;background:#fff;">
        <div style = "width:15rem;margin:0 auto;height:1.707rem;">
            <span style = "float:left">我的订单</span>
            <a href = "order.html" style = "float:right;color:#AEAEAE;font-size:0.58rem;">查看我的订单<i class = "iconfont icon-arrow-right-copy"></i></a>
        </div>
    </div>
    <div style = "height:1px"></div>
       <div  class = "clearfloat"  style = "line-height:1.707rem;font-size:0.6rem;background:#fff;">
        <div style = "width:15rem;margin:0 auto;height:1.707rem;">
            <span style = "float:left">我的团购</span>
            <a @click = "seeGroupList" style = "float:right;color:#AEAEAE;font-size:0.58rem;">查看我的团购<i class = "iconfont icon-arrow-right-copy"></i></a>

        </div>
    </div>
    <div style = "position:relative">
        <div style = "height:0.5rem"></div>
        <div style = "border-radius:0.854rem;text-align:center;font-size:0.614rem;width:4.922rem;line-height:1.28rem;margin:0 auto;color:#fff;" class = "btnBg">
            为我推荐
        </div>
        <div style = "height:0.3rem"></div>
        <div class = "shopList clearfloat">
            <ul class = "tio">
                <li v-for = "(item,index) in tlist" :key = "index" style = "background:#fff;" @click = "goodshow(item)">
                    <div style = "width:100%;height:8.533rem;">
                        <img style = "width:100%;height:8.533rem;" v-lazy="item.cover_url" alt="">
                    </div>
                    <div style = "width:96%;margin:0 auto;">
                    <p style = "font-size:0.6rem;line-height:0.9rem;height:1.8rem; display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">
                        {{item.name}}
                    </p>
                    <span style = "float:left;font-size:0.7rem;color:#FA742B;line-height:1rem;">￥{{item.price}}</span>
                    <span style = "float:right;font-size:0.58rem;line-height:1rem;color:#AEAEAE">
                        <span>{{item.sales_count}}</span>人付款
                    </span>
</div>
                </li>

            </ul>
        </div>

    <div style = "clear:both;"></div>
    </div>



     <indexFooter></indexFooter>

    </div>
    
</template>

<script>
import indexFooter from "@/components/indexFooter";
import {IP,PORT,promiseAjax} from '@/api/api';

export default {
    data(){
       return {
            username:"",
            headerIcon:"",
            islogin:true,
            tlist:[],
       }
    },
    methods:{
        goodshow(data){
            // userId=3&cargoId=3
            window.location.href = "goodShow.html?userId="+JSON.parse(localStorage.getItem('paile8Token')).userId + "&cargoId="+data.id;
        },
        seeGroupList(){
            let go = "groupList.html#/groupedList";
            let reffer = window.location.href;
            window.localStorage.reffer = reffer;
            console.log(window.localStorage);
            window.location.href = go;
        },
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
          console.log(data)
       
        if (data.datas.length > 0) {
          this.tlist.push(data.datas[0]);
          console.log(1);
        }
      });
    }
    },
     mounted(){
     
        if(localStorage.getItem('isLoginpaile8') == null){
            this.islogin = false;
            return false;
        }
                  for (var i = 1; i < 10; i++) {
        this.getGoodList(i);
      }
         this.username = JSON.parse(localStorage.getItem('paile8UserInfo')).nickname
         this.headerIcon = JSON.parse(localStorage.getItem('paile8UserInfo')).head_icon

        $('#footerMenu .home').css({
            background:"#fff",
            color:"rgb(177,177,177)",
            fontSize:"1.2rem"
        })
        $('#footerMenu .nearBox').css({
           color:"rgb(177,177,177)",
        })
        
        $('#footerMenu .wodeBox').css({
         
          color:"#E9724C",
        })
      },
    components:{
        indexFooter
    }
}
</script>

<style scoped>
   @import url("../../../public/Adaptation.css");
  @import url("../../../public/iconfont.css");
  .bg-index{
    background: -webkit-linear-gradient(left, #fdb591 , #ea5556); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #fdb591, #ea5556); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #fdb591, #ea5556); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #fdb591 ,#ea5556); /* 标准的语法 */
  }
    .btnBg{
        background:-webkit-linear-gradient(40deg, rgba(245, 87, 108, 1) 0%, rgba(245, 87, 108, 1) 0%, rgba(255, 82, 229, 1) 100%, rgba(255, 82, 229, 1) 100%);
        background:linear-gradient(50deg, rgba(245, 87, 108, 1) 0%, rgba(245, 87, 108, 1) 0%, rgba(255, 82, 229, 1) 100%, rgba(255, 82, 229, 1) 100%)
    }
    .tio{
        width:16rem;
        margin:0 auto;
    }
    .tio li {
  width: 7.68rem;
  float: left;
  margin-top:0.227rem;
  margin-left:0.227rem;
  }
  .pover{
      color:#333;display:inline-block;margin-left:0.5rem;line-height:0.728rem;width:12.2rem;position:relative
  }
  .poverbox{
      height:2.987rem;font-size:0.58rem;width:15.36rem;margin-left:0.32rem;;background:#fff;position:absolute;top:0.8rem;border-radius:0.5rem;
  }
</style>
