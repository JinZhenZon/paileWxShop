<template>
     <div  ref = "box"   style = "background:#fff;width:16rem;position:absolute;top:0;">
         <div id='container' style = "width:0px;height:0px"></div>
            <!-- 搜索地址页面 -->
             <div style = "position:fixed;top:0;width:16rem;z-index:1">
              <div class = "bg-index relative" style ="margin-top:0;height:1.71rem;">
                         
                <i style = "margin-left:0.5rem;margin-top:0.53rem;color:#fff;float:left;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
                <span>
                      <router-link to = "/searchAll">
                  <div class = "col-12 box-center clearfloat" style ="padding-top:0.5rem;float:left;">

                      <div class = "mar-1" style = "width:11rem;border-bottom:1px solid #f7f7f7;padding-left:0.5rem;padding-right:0.5rem;padding-bottom:0.2rem;">
                          <!-- 可以通过传入inputstyle字段进行input扩展样式 -->
                              <div class = "input">
                                <i slot = "icon" class = "sousuo iconfont icon-sousuo"  style = "color:#fff;position:relative;top:0.1rem;"></i>
                                    <input type="search"  class = "input-inner"  v-model = "inputData" style = "width:83.5%" placeholder="搜索商品">
                                </div>
                      </div>
             
            
                  </div>
                      </router-link>
                  </span>
            
                </div>
         </div>
            <div style = "height:2rem;">

            </div>
            <div style = "margin:0 auto;">
                    <ul>
                        <li @click = "serchIn(item)" style = "margin-top:0.3rem;padding-bottom:0.3rem;width:16rem;border-bottom:0.1rem solid  #f7f7f7" class = "clearfloat" v-for = "item in searchList" :key = "item.id">
                        
                            <div style = "width:15rem;margin:0 auto">
                            <div style =  "float:left;width:4.2rem">
                            <img v-lazy="item.cover_url" style = "width:4.2rem;height:4.2rem" alt="">
                            </div>
                            <div style = "float:right;width:10.45rem">
                                <p style = "font-size:0.597rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#000;">
                                    {{item.name}}
                                </p>

                                <div class = "tagle">
                                    到店自取
                                </div>
                                <p class = "clearfloat">
                                    <span>
                                        <i class = "iconfont icon-mudedi1" style = "font-size:0.64rem;color:#aeaeae;">

                                        </i>
                                    </span>
                                    <span style = "font-size:0.512rem;color:#aeaeae;display:inline-block;width:3rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                                        {{item.location}}
                                    </span>
                                    <span style = "font-size:0.512rem;color:#aeaeae;display:inline-block;width:4rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                                        {{item.shopName}}
                                    </span>
                                    <span style = "font-size:0.512rem;color:#aeaeae;">
                                        {{item.nearfar}}
                                    </span>
                                </p>
                                <p class = "clearfloat">
                                    <span style = "font-size:0.597rem;color:#FA742B;float:left">
                                            {{item.price}}
                                    </span>
                                    <span style = "font-size:0.597rem;color:#aeaeae;float:right">
                                        {{item.count}}人付款
                                    </span>
                                </p>
                            </div>
                            </div>
                             
                        </li>
                       
                       
                        
                    </ul>


                    <div v-if = "loading" style = "clear:both;text-align:center;margin-top:0.5rem;">
                        <img src="../../../../static/loading.gif" alt="" style = "width:2rem;height:2rem;">
                    </div>
                <div v-show = "last0" style = "font-size:0.5rem;color:#aeaeae;line-height:2rem;text-align:center">我们也是有底线的</div>             


            </div>









     </div>
</template>

<script>
import Jinput from "@/components/Jinput"
import {IP,PORT,promiseAjax} from "@/api/api.js"
import $ from "jquery"
import {getFlatternDistance} from "@/api/place.js"

export default {
       data(){
            return {
                inputData:"",
                searchList:[],
                loading:true,
                last0:false,
                Ajax:false,
            }
        },
        beforeDestroy(){
        //    在这清除历史数据
                window.localStorage.removeItem('N782uQ2i');
        },
        created(){
            if(window.localStorage.getItem('N782uQ2i')==null){
                var name =  this.$route.query.search;
            
                var index = 0;
                this.getShowCargoesByName({name,userID:JSON.parse(localStorage.getItem('paile8Token')).userId,index,length:6}).then((data)=>{

                    // JSON.parse(localStorage.getItem('paile8Token')).userId
            
                this.loading = false;
                    // console.log(data);
                            if(data.length == 6){
                                    //   判断是否是最后了
                                        this.Ajax = true;
                                    this.loading = false;

                                }else{
                                    this.loading = false;
                                    this.last0 = true;
                                    this.Ajax = false;
                                    
                                }


                        this.searchList = data;
                    let obj = {
                        sarchTitle:name,
                        sarchList:this.searchList,
                        last0 : this.last0,
                        Ajax:this.Ajax,
                        loading:this.loading
                    }
                    window.localStorage.setItem('N782uQ2i',JSON.stringify(obj));
                });
            }else{
                // 判断localstorage里有没有记录  用来判断是否是回退
                // 搜索标题
                var name = JSON.parse(window.localStorage.getItem('N782uQ2i')).sarchTitle;
                // 搜索起始点 无需在多舛，只需要试用length即可
                var index = JSON.parse(window.localStorage.getItem('N782uQ2i')).sarchList.length;
                this.searchList = JSON.parse(window.localStorage.getItem('N782uQ2i')).sarchList;
                this.last0 =  JSON.parse(window.localStorage.getItem('N782uQ2i')).last0;
                this.Ajax =  JSON.parse(window.localStorage.getItem('N782uQ2i')).Ajax;
                this.loading =  JSON.parse(window.localStorage.getItem('N782uQ2i')).loading;
         
                $(window).scrollTop(window.localStorage.getItem('uMxnW3Ir'));

            }
            






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
                        index+=6;
                　　　　  _this.getShowCargoesByName({name,userID:JSON.parse(localStorage.getItem('paile8Token')).userId,index,length:6}).then((data)=>{
                              _this.searchList.push(...(data));
                
                         if(data.length == 6){
                                //   判断是否是最后了
                                    _this.Ajax = true;
                                  _this.loading = false;

                              }else{
                                  _this.loading = false;
                                  _this.last0 = true;
                                    _this.Ajax = false;
                                  
                              }
                                            let obj = {
                                                sarchTitle:name,
                                                sarchList:_this.searchList,
                                                last0 :_this.last0,
                                                Ajax:_this.Ajax,
                                                loading:_this.loading
                                            }
                                            window.localStorage.setItem('N782uQ2i',JSON.stringify(obj));
                        }).catch((err)=>{
                             _this.loading = false;
                             _this.last0 = true;
                             _this.Ajax = false;
                        });







                    }
                
     
            　　}
            });
        },
    components:{
        Jinput
    },
       methods:{
           serchIn(item){
            //    JSON.parse(localStorage.getItem('paile8Token')).userId
                var goodUrl = "goodShow.html?userId="+ 1+ "&cargoId="+item.id;
                var scrolltop = document.documentElement.scrollTop;
                // 记录滚动条位置
                window.localStorage.setItem('uMxnW3Ir',scrolltop);
                window.location.href = goodUrl;
           },
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
                                         let  arr = dataArr.datas.map((item)=>{
                                                getFlatternDistance(data.position.lat,data.position.lng,item.latitude,item.longitude).then(data=>{
                                                    data = parseInt(data);
                                                    if(data>1000){
                                                        data = data/1000+'km'
                                                    }else{
                                                        data = data + "m"
                                                    }
                                                    item.nearfar = data;
                                                    if(item.count == ""){
                                                        item.count = 0 ;
                                                    }
                                                   
                                                })
                                                    return item
                                                
                                            })
                                        console.log(arr);

                                        resolve(arr);
                                    }
                                    //解析定位错误信息
                                    function onError(data) {
                                        // 如果定位错误，不能影响全局 所以讲距离设置为空
                                         let  arr = dataArr.datas.map((item)=>{
                                            
                                                    item.nearfar = "";
                                                    if(item.count == ""){
                                                        item.count = 0 ;
                                                    }
                                                   
                                              
                                                    return item
                                                
                                            })
                                        resolve(arr);
                                    }
               })
             
           },

        getShowCargoesByName(data){
          return new Promise((resolve,reject)=>{
               promiseAjax(`http://${IP}:${PORT}/paile-service/api/cargoHandler/getShowCargoesByName`,data).then((data)=>{

                        // 获取当前位置经纬度并且增加一个nearfar字段作为距离
                        if(data.datas.length == 0){
                            // 搜索为空
                            this.loading = false;
                            this.last0 = true;

                        }else{
                            // 如果有的话就去比对地址获取距离
                            this.getPoiPot(data).then((datas)=>{
                                resolve(datas);
                            })
                        }
                    
                //    在这处理定位问题
            }).catch((err)=>{
              reject(err);
            })
          })
           
        },
        gohistroy(){
            window.history.go(-1)
        },
    },
        mounted(){
           this.$refs.box.style.height = (document.body.clientHeight ||window.innerHeight)+"px";
           this.inputData = this.$route.query.search;
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
    .tagle{
        width: 2.304rem;
        line-height: 0.768rem;
        text-align:center;
    background: inherit;
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(233, 114, 76, 1);
    border-radius: 0.1rem;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-size: 0.427rem;
    color: #E9724C;
    }
</style>
