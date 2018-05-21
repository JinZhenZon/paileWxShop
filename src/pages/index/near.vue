<template>
<div style = "background:#f7f7f7">
        <div style = "position:fixed;top:0;width:16rem;z-index:1">
              <div class = "bg-index relative" style ="margin-top:0;">
                  <div class = "col-15 box-center clearfloat" style ="padding-top:0.5rem;">
                      <!-- <i class = "iconfont icon-erweima1 saoyisao left"></i> -->
                      <div class = "left col-10" style = "margin-left:0.3rem;">
                          <!-- 可以通过传入inputstyle字段进行input扩展样式 -->
                           <router-link to = "/searchAll">
                            <Jinput :inputstyle = "'width:70%;'">
                                <!-- iconslot扩展搜索图标 -->
                                    <div  slot = "icon" style = "display:inline;position:relative;">
                                  
                                  <i class = "sousuo iconfont icon-sousuo"></i>
                              </div>
                            </Jinput>
                            </router-link>
                      </div>
                      <div class = "right" style = "width:3.84rem;border-radius:0.85rem;color:#fff;background:rgba(255, 204, 51, 1);">
                          <p style = "text-align:center;display:block;margin:0 auto;width:3.472rem;display:flex;align-items:center;padding-top:0.2rem;padding-bottom:0.2rem;">
                            <i class = "iconfont icon-mudedi1" style = "font-size:0.5rem;"></i>
                            <router-link to = "/searchAddress" tag = "span" style = "font-size:0.45rem;white-space:nowrap; overflow:hidden;text-overflow:ellipsis;display:inline-block;width:2.3rem;">
                                {{addresFormat}}
                            </router-link>
                          </p>
                      </div>
            
                  </div>
                    <div class = "col-15 box-center Headermenu">
                          <router-link to = "/" >拍乐网</router-link>
                          <router-link to="/near" class = "hover">附近</router-link>
                    </div>
                      <div style = "height:0.2rem;"></div>
                </div>
         </div>
        <div class = "col-16" style ="height:3.4rem;"></div>
        <div style = "height:7.253rem;">
            <img src="https://gjusp.alicdn.com/img/152410570286113.jpg?x-oss-process=image/crop,y_192/resize,w_790,h_420/quality,q_90/format,webp" style = "width:16rem;height:7.253rem" alt="">
          </div>
          <div class = "change">
              <p @click = "taggleUnderLine(0)">距离最近</p>
              <p @click = "taggleUnderLine(1)">销量最高</p>
              <!-- <p @click = "taggleUnderLine(2)">品质团购</p> -->
          </div>

            <div style = "height:0.1rem;background:#fff;"></div>
             <ul class = "shopList clearfloat"  v-if = "dataArr != null && dataArr.length!=0">
                      <li v-for = "(item,index) in dataArr" :key = "index" @click = "goin(item)">
                        
                        
                        <div class = "shopBower"  style = "height:14rem;">
                              <img style = "width:100%;height:8.533rem;" v-lazy= "item.cover_url" alt="">
                              
                              <div class = "clearfloat" style = "width:7.2rem;margin:0 auto;">
                                    <p class = "shopGoodTitle">
                                      {{item.name}}
                                  </p>
                                <div class = "clearfloat">
                                   <p class = "corner">
                                      到店自取
                                  </p>
                                </div>
                              
                                <div class = "distance clearfloat">
                                    <p style = "width:3.6rem;float:left;text-align:left">
                                        <i class = "iconfont icon-mudedi1 place"></i>
                                          {{item.location}}
                                    </p>
                                    <p style = "width:3rem;float:right;text-align:right;">
                                       {{item.nearfar}}
                                    </p>
                                </div>

                                  <div class = "goodInfo  clearfloat">
                                    <p class = "shopPrice">
                                        ￥{{item.price}}
                                    </p>
                                    <p style =  "width:3rem;text-align:right;float:right;">
                                      {{item.sales_count}}人付款
                                    </p>
                                </div>

                              </div>
                            
                          </div>
                        
                        </li>
                                
                  
                    </ul>

          <div v-if = "loading" style = "clear:both;text-align:center;margin-top:0.5rem;">
                        <img src="../../../static/loading.gif" alt="" style = "width:2rem;height:2rem;">
                    </div>
                <div v-show = "last0" style = "font-size:0.5rem;color:#aeaeae;line-height:2rem;text-align:center">
                    我们也是有底线的
                  </div>             


      <indexFooter></indexFooter>

      </div>
</template> 

<script>
import Jinput from "@/components/Jinput.vue"
import indexFooter from "@/components/indexFooter";
import {splitHashQuery} from "@/api/getQuery"
import {IP,PORT,promiseAjax} from "@/api/api"
import {getFlatternDistance} from "@/api/place.js"

import $ from "jquery"
export default {
      data(){
        return {
            addresFormat : "",
            lng:"",
            lat:"",
            orderType:0,
            index:0,
            length:7,
            dataArr:[],
            Ajax:false,
            last0:false,
            loading:true,

        }

      },
      methods:{
             serchIn(item){
               console.log(1,item)
          
           },
           goin(item){
             let cargoId = item.id;
            let userId = JSON.parse(window.localStorage.getItem('paile8UserInfo')).userId;
            window.location.href = `goodShow.html?userId=${userId}&cargoId=${cargoId}`;
           },

        getGoodList(){
          promiseAjax(`http://${IP}:${PORT}/paile-service/api/cargoHandler/getCargoByLonLat`,{
            lon :this.lng,
            lat:this.lat,
            orderType:this.orderType,
            index:this.index,
            length:this.length,

          }).then(data =>{
            console.log(data);
              if(data.datas.length ==7){
                // 没到最后
                this.Ajax = true;
                this.last0 = false;
                this.loading = false;
                let arr = data.datas.map((item)=>{
                   getFlatternDistance(this.lat,this.lng,item.latitude,item.longitude).then(data=>{
                                                    data = parseInt(data);
                                                    if(data>1000){
                                                        data = data/1000+'km'
                                                    }else{
                                                        data = data + "m"
                                                    }
                                                    item.nearfar = data;
                                                   
                                                })
                                                 return item
                })







                this.dataArr.push(...(arr));
              }else{
                // 到最后
                this.last0 = true;
                this.Ajax = false;
                this.loading = false;
              }
          })
        },
          getPoiPot(){
         var app = this;
            return new Promise((resolve,reject)=>{
                        var map, geolocation,geocoder;
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
                                                app.submitMyUrl = data;
                                               AMap.service('AMap.Geocoder',function(){//回调函数
                                                    //实例化Geocoder
                                                    geocoder = new AMap.Geocoder({
                                                    });
                                                })
                                       
                                            var lnglatXY=[data.position.lng, data.position.lat];//地图上所标点的坐标
                                            geocoder.getAddress(lnglatXY, function(status, result) {
                                                if (status === 'complete' && result.info === 'OK') {
                                                //获得了有效的地址信息:
                                                    resolve(result);
                                                }else{
                                                //获取地址失败
                                                    console.log('失败了')
                                                }
                                            });  

                                       
                                    }
                                    //解析定位错误信息
                                    function onError(data) {
                                    
                                        reject(data);
                                    }
               })
    },
          taggleUnderLine(n){
            $('.change p').removeClass('changeHover');
            
            $('.change p').eq(n).addClass('changeHover');
            
            if(n==0){
              this.dataArr = []
              this.orderType = 0;
            }else if(n==1){
              this.dataArr = [];
              this.orderType = 1;
            }
              this.last0 = false;
                this.Ajax = true;
                this.loading = true;
                this.index = 0;

            this.getGoodList();
          }
      },
      created(){

        splitHashQuery().then(data=>{
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
                        _this.index+=7;
                　　    _this.getGoodList();
                    }
            　　}
            });

        // 判断是否有经纬度和name 没有的话就获取  有的话就直接调用；
      
          if(data.name == undefined){
            // 如果没有的时候


                var u = navigator.userAgent;
                var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                if(isAndroid){
                            if(window.sessionStorage.getItem('addresInfo')==null){
                            this.getPoiPot().then(data =>{
                                this.addresFormat = data.regeocode.formattedAddress;
                                this.lng = data.regeocode.addressComponent.businessAreas[0].location.lng;
                                this.lat = data.regeocode.addressComponent.businessAreas[0].location.lat;
                                var obj = {
                                  addresFormat:this.addresFormat,
                                  lng:this.lng,
                                  lat:this.lat
                                }
                                window.sessionStorage.setItem('addresInfo',JSON.stringify(obj))
                                this.getGoodList();
                            })
                            }else{
                              var data = JSON.parse(window.sessionStorage.getItem('addresInfo'));
                              this.addresFormat = data.addresFormat;
                              this.lng = data.lng;
                              this.lat = data.lat;
                              this.getGoodList();
                            }
                }else{
                          this.getPoiPot().then(data =>{
                                this.addresFormat = data.regeocode.formattedAddress;
                                this.lng = data.regeocode.addressComponent.businessAreas[0].location.lng;
                                this.lat = data.regeocode.addressComponent.businessAreas[0].location.lat;
                                this.getGoodList();
                          })
                }
        
          
          }else{
            // 有的时候
            this.addresFormat = data.name;
            this.lng = data.lng;
            this.lat = data.lat;
                 var obj = {
                                  addresFormat:this.addresFormat,
                                  lng:this.lng,
                                  lat:this.lat
                                }
                                window.sessionStorage.setItem('addresInfo',JSON.stringify(obj))       
                this.getGoodList();
            
            
          }
        })

      },
      mounted(){
        this.taggleUnderLine(0);
        $('#footerMenu .home').css({
            background:"#fff",
            color:"rgb(177,177,177)",
            fontSize:"1.2rem"
        })
        $('#footerMenu .nearBox').css({
          color:"#E9724C",
        })
        
        $('#footerMenu .wodeBox').css({
          color:"rgb(177,177,177)",
        })
      },
      components:{
        Jinput,indexFooter
      }
}
</script>

<style scoped>
  @import url("../../public/Adaptation.css");
  @import url("../../public/iconfont.css");
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

  
  .saoyisao{
    font-size:0.7rem;
    line-height:0.98rem;
    padding:0;
    margin:0;
    color:#fff
  }
  .sousuo{
    font-size:0.4rem;
    color:#aaa;
    margin-left:0rem;
    
  }
  .Headermenu{
    font-size:0.59rem;
    text-align:center;
    margin-top:0.5rem;
  }
.Headermenu a{
  display: inline-block;


}
.Headermenu a:nth-of-type(1){
  margin-left:-1rem;
}
.Headermenu a:nth-of-type(2){
    margin-left:1rem;
}

  .hover{
font-size:0.7rem;
line-height:1rem;
padding:0 0.2rem;
border-bottom: 0.1rem solid #fff;padding-bottom:0.2rem;
  }
  .change{
    width:16rem;
    display: -webkit-flex; /* Safari */
  display: flex;
    justify-content: flex-start;
    z-index:1;
    background:#fff;

  }
  .change p{
      width:4.011rem;
      height:1.706rem;
      font-size:0.64rem;
      line-height:1.706rem;
      text-align: center;
      margin-left:0.2rem;
  }
  .changeHover{
     color:rgb(233, 114, 76);
      border-bottom:1px solid rgba(233, 114, 76, 1);
      box-sizing:border-box;
  }
  
.shopList {
  width: 16rem;
}
.shopList li {
  width: 7.68rem;
  float: left;
  margin-top:0.227rem;
  margin-left:0.227rem;
  
}

.shopBower {
  width: 7.68rem;
  /* margin:0 auto; */
  background: #fff;
  /* margin-left: 0.21rem; */
}
.shopGoodTitle {
  font-size: 0.6rem;
  line-height: 1rem;
  height: 2rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #333;
  width: 7rem;
  margin-left: 0.1rem;
}
.shopGoodPrice {
  font-size: 0.5rem;
  line-height: 1.165rem;
  color: #f46360;
  width: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
}
.goodPrice {
  width: 3rem;
  color: rgb(174, 174, 174);
  font-size: 0.448rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  margin-left: 0.2rem;
  height: 1.165rem;
  line-height: 1.165rem;
}
.groupBtn {
  width: 2.151rem;

  border-radius: 0.583rem;
  font-size: 0.56rem;
  background: #f00;
  color: #fff;
  text-align: center;
  display: inline-block;

  line-height: 1.165rem;
  float: right;
}
.shopPrice{
  color:#FA742B;font-size:0.7rem;width:4rem;float:left;text-align:left
}
.corner{
  width:2.504rem;
  /* height:1.536rem; */
  border-radius:0.2rem;
  box-sizing: border-box;
  border:1px solid #E9724C;
  text-align: center;
  /* line-height: 1.2rem; */
  font-size:0.427rem;
  float:right;

  color:#E9724C;
  
}
.distance .goodInfo{
  display:flex;
  display: -webkit-flex;
   justify-content:space-around;
}
.place{
  font-size:0.756rem;
  
}
.distance,.goodInfo{
  font-size:0.56064rem;
  line-height: 0.756rem;
  color:#AEAEAE;
  margin-top:0.2rem;
}
.distance p,.goodInfo p {
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>
