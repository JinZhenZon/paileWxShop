<template>
        <div  ref = "box"   style = "width:16rem;position:absolute;top:0;">
            <div v-if = "searchList.length != 0"  style = "position:absolute;top:1.71rem;left:5%;width:90%;background:#fff;z-index:9999;border-bottom:1px solid #ccc;border-left:1px solid #ccc;border-right:1px solid #ccc">
                <div v-for = "(item,index) in searchList" :key="index" style = "border-bottom:1px solid #f7f7f7;" @click="goposition(item)">
                    <div style = "width:90%;margin:0 auto;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;color:#aeaeae;">
                    <span style = "font-size:0.5rem;line-height:1rem;color:#333;">{{item.name}}</span>
                    <span style = "color:#aeaeae;font-size:0.4rem;line-height:1rem;">{{item.district}}{{Array.isArray(item.address)?"":item.address}}</span>
                    </div>
                </div>
            </div>
         <div id='container' style = "width:0rem;height:0rem;"></div>
            <!-- 搜索地址页面 -->
             <div style = "position:fixed;top:0;width:16rem;z-index:1">
              <div class = "bg-index relative" style ="margin-top:0;height:1.71rem;">
                         
                <i style = "margin-left:0.5rem;margin-top:0.53rem;color:#fff;float:left;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
                <span>
                  <div class = "col-12 box-center clearfloat" style ="padding-top:0.5rem;float:left;">

                      <div class = "mar-1" style = "width:11rem;border-bottom:1px solid #f7f7f7;padding-left:0.5rem;padding-right:0.5rem;padding-bottom:0.2rem;">
                          <!-- 可以通过传入inputstyle字段进行input扩展样式 -->
                              <div class = "input">
                                <i slot = "icon" class = "sousuo iconfont icon-sousuo"  style = "color:#fff;position:relative;top:0.1rem;"></i>
                                    <input id="tipinput" type="search" @blur="blurinput" @keyup.enter = "func" class = "input-inner"  v-model = "inputData" style = "width:83.5%" placeholder="输入地址">
                                </div>
                      </div>
                        <!-- <input  type="search"   v-model = "inputData" style = "position:absolute;left:0;width:83.5%" placeholder="输入地址"> -->
            
                  </div>
                  </span>
            
                </div>
         </div>
            <div style = "height:1.8rem;background:#f7f7f7">

            </div>
            <div style = "background:#f7f7f7;color:#333" class = "clearfloat">
            <div style = "width:15rem;margin:0 auto;">
                <p class =  "left" style = "width:9.643rem;line-height:1.11rem;color:#333;font-size:0.555rem;overflow:hidden;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;margin-top:0.25rem;">
                    {{resolveAddress == ""?"定位中":resolveAddress}}
                </p>
                <p style = "width:4.8rem;-margin-top:0.2rem;text-align:right;" class = "right">
                    <i class = "iconfont icon-mudedi" style ="color:#E9724C;font-size:0.768rem;"></i>
                    <span @click = "place" style = "color:#333;line-height:1.11rem;font-size:0.555rem;margin-left:-0.3rem;">
                        定位当前地址
                    </span>
                </p>
            </div>
            </div>
            <div>
                <p style = "width:15rem;margin:0 auto;font-size:0.597rem;color:#333;line-height:1.71rem;">
                    历史搜索
                </p>
                <ul class = "searchHistory" v-if = "addressHistoryList.length !=0">
                    <li class = "clearfloat" :key = "index" v-for="(item,index) in addressHistoryList">
                        <p @click="historygoposition(item)" class = "left" style = "width:11rem;overflow:hidden;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{item.name}}</p>
                        <p class = "right" style  = "width:2rem;text-align:center;">
                              <i class = "iconfont icon-105" style ="color:#aeaeae" @click = "removeHistory(index)"></i>
                        </p>
                    </li>
                </ul>
                <div v-if="addressHistoryList.length ==0" style = "line-height:1rem;font-size:0.6rem;color:#aeaeae;text-align:center;">历史搜索为空</div>
            </div>

            <div @click="removeAll" class = "bg-index" v-if = "addressHistoryList.length !=0" style = "margin:3rem auto;border-radius:1.28rem;width:5.12rem;line-height:1.28rem;color:#fff;text-align:center;font-size:0.555rem;">
                清空搜索历史

            </div>


        </div>
</template>

<script>






import $ from "jquery"
import Jinput from "@/components/Jinput"
export default {
      data(){
            return {
                inputData:"",
                resolveAddress:"",
                searchList:[],
                submitMyUrl:[],
                addressHistoryList:[],
            }
        },
    components:{
        Jinput
    },
    methods:{
        historygoposition(data){
                                this.$router.push({
                                    path : "/near",
                                    query:{
                                        lng : data.lng,
                                        lat : data.lat,  
                                        name : data.name,                          
                                    }
                                })
        },
        goposition(data){
            console.log(data);

let obj = {
                     lng:data.location.lng,
                        lat:data.location.lat,
                        name:data.name, 
                }
                if(this.addressHistoryList.length == 0){
                    this.addressHistoryList.unshift(obj);

                }else{
                    let t = this.addressHistoryList.length;
                    let tag = false;
                               for (let i=0;i<t;i++){
                                   console.log(this.addressHistoryList[i].name == obj.name)
                if(this.addressHistoryList[i].name == obj.name){
               
                   tag = false;
                   break;
                }else{
                    tag = true;
                }
            
            }
                if(tag){
                     if(this.addressHistoryList.length<10){
                        this.addressHistoryList.unshift(obj);
                        tag = false
                    }else{
                         this.addressHistoryList.pop();
                        this.addressHistoryList.unshift(obj);   
                        tag = false                      
                    }
                   
                   
                   
                   
                   
            
                }
                }
 
                console.log( this.addressHistoryList)
                window.localStorage.setItem('addressHistoryList',JSON.stringify(this.addressHistoryList))



                            this.$router.push({
                                    path : "/near",
                                    query:{
                                        lng : data.location.lng,
                                        lat : data.location.lat,  
                                        name : data.name,                          
                                    }
                                })
        },
        place(){
            if(this.resolveAddress == "" &&this.submitMyUrl == ""){
                alert('获取定位中');
            }else{
                let obj = {
                     lng:this.submitMyUrl.position.lng,
                        lat:this.submitMyUrl.position.lat,
                        name:this.submitMyUrl.formattedAddress, 
                }   
                if(this.addressHistoryList.length == 0){
                    this.addressHistoryList.unshift(obj);

                }else{
                    let t = this.addressHistoryList.length;
                    let tag = false;
                               for (let i=0;i<t;i++){
                if(this.addressHistoryList[i].name == obj.name){
               tag = false;
                    break;
                }else{
                    tag = true;
                }
                
            }
            if(tag){
                           if(this.addressHistoryList.length<10){
                        this.addressHistoryList.unshift(obj);
                        tag = false
                    }else{
                         this.addressHistoryList.pop();
                        this.addressHistoryList.unshift(obj);   
                        tag = false                      
                    }
                }
                }
 
                console.log( this.addressHistoryList)
                window.localStorage.setItem('addressHistoryList',JSON.stringify(this.addressHistoryList))
                this.$router.push({
                    path:"/near",
                    query:{
                        lng:this.submitMyUrl.position.lng,
                        lat:this.submitMyUrl.position.lat,
                        name:this.submitMyUrl.formattedAddress,
                        
                    }
                })
            }
        },
        removeAll(){
            this.addressHistoryList = [];
            window.localStorage.removeItem('addressHistoryList');
            
            
        },
        removeHistory(index){
            this.addressHistoryList.splice(index,1);
            window.localStorage.setItem('addressHistoryList',JSON.stringify(this.addressHistoryList));
            
        },
        gohistroy(){
            window.history.go(-1)
        },
        blurinput(){
            this.searchList = []
        },
   func(e){

                // alert(1);
               var keyCode = window.event? e.keyCode:e.which;

                if(keyCode==13) {  
                    console.log(1)
                 
                    var geocoder,mapObj; 
                    //加载地理编码插件 
                           mapObj = new AMap.Map('container', {
                                        resizeEnable: true
                                    });
                    mapObj.plugin(["AMap.Geocoder"],()=>{  
                    geocoder=new AMap.Geocoder({ 
                    radius:1000, //以已知坐标为中心点，radius为半径，返回范围内兴趣点和道路信息 
                    }); 
                    //返回地理编码结果 
                    AMap.event.addListener(geocoder, "complete",(data)=>{
                      
                        if(data.info == "OK"){
                                  console.log(data);

                            let obj = {
                                    lng:data.geocodes[0].location.lng,
                                        lat:data.geocodes[0].location.lat,
                                        name:data.geocodes[0].formattedAddress, 
                                }
                                if(this.addressHistoryList.length == 0){
                                    this.addressHistoryList.unshift(obj);

                                }else{
                                    let t = this.addressHistoryList.length;
                                    let taggle = false;
                                            for (let i=0;i<t;i++){
                                              console.log(1);
                                                if(this.addressHistoryList[i].name == obj.name){
                                                tag = false;
                                                    break;
                                                }else{
                                                   taggle = true;
                                                }
                                            }
                                            if(taggle){
                                                       if(this.addressHistoryList.length<10){
                                                            this.addressHistoryList.unshift(obj);
                                                            taggle = false
                                                        }else{
                                                            this.addressHistoryList.pop();
                                                            this.addressHistoryList.unshift(obj);   
                                                            taggle = false                      
                                                        }
                                            }
                                }

                                  window.localStorage.setItem('addressHistoryList',JSON.stringify(this.addressHistoryList))





                            // console.log(data.geocodes[0])
                                this.$router.push({
                                        path : "/near",
                                        query:{
                                            lng : data.geocodes[0].location.lng,
                                            lat : data.geocodes[0].location.lat,  
                                            name : data.geocodes[0].formattedAddress,                          
                                        }
                                    })
                        }else{
                            alert('找不到该地址')
                        }
                    }); 
                    geocoder.getLocation(this.inputData); 
                    
                    });                 
                      
                }  
        },
     getPoiPot(){
         console.log(1);
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
                                                        // city: "010"//城市，默认：“全国”
                                                    });
                                                    //TODO: 使用geocoder 对象完成相关功能
                                                })
                                       
                                            var lnglatXY=[data.position.lng, data.position.lat];//地图上所标点的坐标
                                            geocoder.getAddress(lnglatXY, function(status, result) {
                                                if (status === 'complete' && result.info === 'OK') {
                                                //获得了有效的地址信息:
                                                    resolve(result.regeocode.formattedAddress);
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
},
    
        mounted(){
            console.log(localStorage.getItem('addressHistoryList'));
            this.addressHistoryList = (localStorage.getItem('addressHistoryList')==null?[]:JSON.parse(localStorage.getItem('addressHistoryList')))
            window.onload = function() {
                map.plugin(["AMap.ToolBar"], function() {
                    map.addControl(new AMap.ToolBar());
                });
                if(location.href.indexOf('&guide=1')!==-1){
                    map.setStatus({scrollWheel:false})
                }
            }
                var map = new AMap.Map("container", {
                    resizeEnable: true
                });
                //输入提示
                var auto = new AMap.Autocomplete({
                    input: "tipinput",
                });

                      AMap.event.addListener(auto, "complete", (data)=>{
                          $('.amap-sug-result').css({
                             opacity:"0",
                             zIndex:0,
                          })
                         
                         this.searchList = data.tips
                         console.log(this.searchList)
                        
                }); 

    
           this.$refs.box.style.height = (document.body.clientHeight ||window.innerHeight)+"px";
            console.log(this.$refs.box.style.height );
            this.getPoiPot().then(data =>{
                this.resolveAddress = data;
            }).catch(err=>{
                console.log(err);
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
    .searchHistory li{
        width:14rem;
        margin:0 auto;

        border-bottom:1px  solid #f7f7f7;
        font-size:0.597rem;
        line-height:1.5rem;
    }
</style>
