<template>
        <div  ref = "box"   style = "background:#fff;width:16rem;position:absolute;top:0;">
            <!-- 搜索地址页面 -->
             <div style = "position:fixed;top:0;width:16rem;z-index:1">
              <div class = "bg-index relative" style ="margin-top:0;height:1.71rem;">
                         
                <i style = "margin-left:0.5rem;margin-top:0.53rem;color:#fff;float:left;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
                <span @click = "toSearch">
                 
                  <div class = "col-12 box-center clearfloat" style ="padding-top:0.5rem;float:left;">

                      <div class = "mar-1" style = "width:11rem;border-bottom:1px solid #f7f7f7;padding-left:0.5rem;padding-right:0.5rem;padding-bottom:0.2rem;">
                          <!-- 可以通过传入inputstyle字段进行input扩展样式 -->
                              <div class = "input">
                                <i slot = "icon" class = "sousuo iconfont icon-sousuo"  style = "color:#fff;position:relative;top:0.1rem;"></i>
                                    <input type="search"  class = "input-inner" style = "width:83.5%" placeholder="搜索">
                                </div>
                      </div>
             
            
                  </div>
                  </span>
            
                </div>
         </div>
         <div style = "height:1.71rem;">

         </div>
         <div class = "clearfloat col-15" style = "margin:0 auto;">
            <div style = "height:0.5rem"></div>
                <div style = "width:2.134rem;height:2.134rem;float:left">
                    <img style = "width:2.134rem;height:2.134rem;" v-lazy="shopInfo.icon" alt="">
                </div>
                <div style = "float:left;width:7.6rem;margin-left:0.5rem;overflow:hidden;text-overflow:ellipsis;white-span : no-wrap">
                <p style = "font-size:0.597rem;">
                    {{shopInfo.name}}
                </p>
                <p style = "font-size:0.512rem;color:#aeaeae">
                    <i class = "iconfont icon-mudedi1"></i>
                    {{shopInfo.city}}{{shopInfo.address}}
                </p>
                <p style = "color:#aeaeae;font-size:0.512rem;">
                    {{shopInfo.nearfar}}
                </p>

                </div>
                <div style = "width:4.4rem;float:right;text-align:right">
                    <p style = "font-size:0.512rem;">店铺星级</p>
                    <ul class = "starList">
                          <li>
                            <img src="../../../../static/colorStar.png" style = "width:0.683rem;" alt="">
                        </li>
                        <li>
                            <img src="../../../../static/colorStar.png" style = "width:0.683rem;" alt="">
                        </li>
                        <li>
                            <img src="../../../../static/colorStar.png" style = "width:0.683rem;" alt="">
                        </li>
                        <li>
                            <img src="../../../../static/colorStar.png" style = "width:0.683rem;" alt="">
                        </li>
                        <li>
                            <img src="../../../../static/colorStar.png" style = "width:0.683rem;" alt="">
                        </li>
                      
                    </ul>
                </div>
                
            <div style = "height:0.5rem;clear:both"></div>
         </div>
         <div style = "height:1.707rem;background:#fff;" class = "clearfloat">
             <ul class = "menu left" style = "width:10rem;" @taggleTag = "taggleTag">
                 <li @click = "check(0)">
                     全部
                 </li>
                 <li @click = "check(1)">
                     团购
                 </li>
                 
             </ul>
             <ul v-show = "gui" class = "gui right" style = "width:5rem;">
                 <li @click = "by(0)">销量</li>
                 <li @click = "by(1)">价格</li>
             </ul>
         </div>
            <div style = "clearfloat">
                <router-view></router-view>
            </div>
        </div>
</template>

<script>
import $ from "jquery"
import { IP, PORT, promiseAjax } from "@/api/api.js";
import { splitHashQuery } from "@/api/getQuery.js";
import {getFlatternDistance} from "@/api/place.js"
export default {
      data(){
            return {
                
                gui:true,
                shopId:"",
                userId:"",
                shopInfo : {},
                city:"",
            }
        },
  
    methods:{
        getShopInfo(){
                  return new Promise((resolve,reject)=>{
                        promiseAjax(
                                        `http://${IP}:${PORT}/paile-service/api/shopsHandler/getShopsById`,
                                        {
                                            shopId : this.shopId,
                                            userId : this.userId,
                                        }
                                    ).then(data => {
                                        console.log(data);
                                        this.shopInfo = data.datas;
                                        console.log(this.shopInfo);
                                        this.getPoiPot(data.datas).then((data)=>{
                                            resolve(data)
                                        });
                                        
                                    });
                  })
           
        },
        // 查看位置经纬度
           getPoiPot(dataArr){
               return new Promise((resolve,reject)=>{
                        var map, geolocation;
                            //加载地图，调用浏览器定位服务
                                    map = new AMap.Map('container', {
                                        resizeEnable: true
                                    });
                                map.plugin('AMap.Geolocation', function() {
                                        geolocation = new AMap.Geolocation({
                                            enableHighAccuracy: true,//是否使用高精度定位，默认:true
                                            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                                        });
                                        map.addControl(geolocation);
                                        geolocation.getCurrentPosition();
                                        AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
                                        AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
                                    });
                                    //解析定位结果
                                    function onComplete(data) {
                               
                                                if(dataArr.length>0){
                                                    getFlatternDistance(data.position.lat,data.position.lng,dataArr.latitude,dataArr.longitude).then(data=>{
                                                        data = parseInt(data);
                                                        if(data>1000){
                                                            data = data/1000+'km'
                                                        }else{
                                                            data = data + "m"
                                                        }
                                                        dataArr.nearfar = data;
                                                    })
                                                    resolve(dataArr);
                                                }
                                 
                                    }
                                    //解析定位错误信息
                                    function onError(data) {
                                        // 如果定位错误，不能影响全局 所以讲距离设置为空
                                        if(dataArr.length>0){
                                            let  arr = dataArr.datas.map((item)=>{
                                                
                                                        item.nearfar = "";
                                                        if(item.count == ""){
                                                            item.count = 0 ;
                                                        }
                                                    
                                                
                                                        return item
                                                    
                                                })
                                            resolve(arr);
                                        }
                                    }
               })
             
           },













        
        taggleTag(){
            
            if(this.$route.path == "/shopGroup"){
                   $(".menu li").css({
                color:"#333",
                borderBottom:"0px solid #333"
                    }).eq(1).css({
                        color:"rgb(233, 114, 76)",
                        borderBottom:"1px solid rgb(233, 114, 76)"
                    })
            }else{
     $(".menu li").css({
                color:"#333",
                borderBottom:"0px solid #333"
                    }).eq(0).css({
                        color:"rgb(233, 114, 76)",
                        borderBottom:"1px solid rgb(233, 114, 76)"
                    })
            }
        },
        gohistroy(){
            window.history.go(-1);
        },
   
        toSearch(){
            this.$router.push({path:'/shopSearch',query:{
                shopId:this.shopId
            }})
        },
        check(n){
            $(".menu li").css({
                color:"#333",
                borderBottom:"0px solid #333"
            }).eq(n).css({
                color:"rgb(233, 114, 76)",
                borderBottom:"1px solid rgb(233, 114, 76)"
            })
            if(n == 0){
                this.$router.replace({
            path:'/shopAll',
            query:{
                    shopId:this.shopId,
                    by:1,
                }
                })
            }
            if(n == 1){
             
                this.$router.replace({
                    path:'/shopGroup',
                    query:{
                        shopId:this.shopId,
                    }});
            }
        },
        by(n){
              $(".gui li").css({
                color:"#aeaeae",
            }).eq(n).css({
                color:"rgb(233, 114, 76)",
            })
            if(n == 0){
                    this.$router.replace({
                        path:'/shopAll',
                        query:{
                                shopId:this.shopId,
                                by:1,
                            }
                            })

             
            }else{
            this.$router.replace({
                        path:'/shopAll',
                        query:{
                                shopId:this.shopId,
                                by:0,
                            }
                            })
                     
                 
            }
        },
                   getCityFromXY(data){
           
                         var map, geolocation;
                
    //加载地图，调用浏览器定位服务
    map = new AMap.Map('container', {
        resizeEnable: true
    });
        AMap.plugin('AMap.Geocoder',()=>{
        var geocoder = new AMap.Geocoder({
        });
        let lnglatXY = [
            this.shopInfo.longitude,this.shopInfo.latitude
        ]
        // console.log(this.shopInfo);        
        geocoder.getAddress(lnglatXY,(status,result)=>{
              if(status=='complete'){
                //   console.log(this)
                //   console.log(result.regeocode.addressComponent.city)
                  data.city = result.regeocode.addressComponent.city;
                  this.shopInfo = data;
                  
                  
              }else{
                //   console.log(2)
                    // console.log(status)
              }
            })
    })

    }
    //解析定位错误信息
         
                 
    },

          watch:{
              '$route'(val){
                    // 切换页面控制显示
                    this.gui = (val.path != "/shopGroup");
              }
          },
        mounted(){
           this.$refs.box.style.height = (document.body.clientHeight ||window.innerHeight)+"px";
        //    this.check(0);

           this.taggleTag()
    },
        created(){
        splitHashQuery().then(query=>{
            this.shopId = query.shopId;
            this.userId = query.userId;
              this.getShopInfo().then((data)=>{

                      this.getCityFromXY(data);
              });
        
          
            

        })
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
</style>
