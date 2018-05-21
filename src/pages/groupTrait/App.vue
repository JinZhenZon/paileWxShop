<template>
          <div style = "background:#f7f7f7;">
            <!-- <div style = "font-size:0.683rem;line-height:1.707rem;color:#fff;width:16rem;position:fixed;top:0;" class = "bg-index">
                <i style = "margin-left:0.5rem;" class = "iconfont icon-jiantou-copy" @click = "gohistroy"></i>
                <span style = "margin-left:0.5rem;">拍乐网</span>
                  <div @click = "showFunc"  style = "float:right;margin-right:0.5rem;font-size:0.64rem;width:1rem;text-align:center;"><i class = "iconfont" :class = "showBigImg?'icon-guanli':'icon-chazhaobiaodanliebiao'"></i></div>
                <!-- <div>
                    <table id = "title" style = "width:16rem;text-align:center;background:#fff;color:#333;font-size:0.64rem;line-height:1.71rem;">
                        <tr>
                            <td @click = "taggleList(0)" class = "current">全部</td>
                            <td  @click = "taggleList(1)" >价格</td>
                            <td  @click = "taggleList(2)" >热度</td>
                            <td></td>
                            <td @click = "showFunc">
                                 <i class = "iconfont" style = "font-size:0.64rem;" :class = "showBigImg?'icon-guanli':'icon-chazhaobiaodanliebiao'"></i>
                            </td>
                        </tr>
                    </table>
                </div>  
             </div>
             <div style = "height:1.5rem;"></div>-->
                <div :class = "showBigImg?'box-style-img':'box-style-text'" class = "clearfloat">
                        
                        <div :class = "showBigImg?'box-img':'box-text'" v-for = "(item,index) in list" :key = "index" :style = "showBigImg?'':index==list.length-1?'padding-bottom:0':''">
                            <div @click = "goGroup(item)">
                            <img v-lazy = "item.img_url" :style = "showBigImg?'width:7.637rem;height:8.533rem':'width:3rem;height:3rem;float:left;'" />
                            <p :class = "showBigImg?'shop-title-img':'shop-title-text'" style = "color:#000;">
                                {{item.name}}
                            </p>
                            <!-- 列表模式 -->
                            <div v-show = "!showBigImg" class ="clearfloat" :class = "showBigImg?'bowser-img':'bowser-text'">
                                <span :class = "showBigImg?'price-img':'price-text'">
                                       <span :class = "showBigImg?'ico-img':'ico-text'">￥</span>{{item.group_price}}
                                </span>
                                <span :class = "showBigImg?'count-img':'count-text'">
                                   单买价:{{item.price}}
                                </span>
                                <p :class = "showBigImg?'btn-img':'btn-text'" class = "bg-index">
                                    团购
                                </p>
                            </div>
                            <!-- 大图片下 -->
                            <div v-show = "showBigImg" style = "width:7.2rem;margin:0 auto">
                                  <div class = "left">
                                      <p class = "groupGoodPrice">{{item.group_price}}</p>
                                      <p class = "goodPrice">单买价：{{item.price}}</p>
                               
                                  </div>
                                  <div class ="right">
                                           <p class = "groupBtn bg-index">
                                        团购
                                      </p>
                                  </div>
                            </div>
                            
                            <div v-show = "!showBigImg" style = "background:#fff;height:0.3rem;clear:both"></div>
                                     <div v-show = "!showBigImg" style = "height:1px;background:#f7f7f7"></div>
                            </div>
                        </div>
                    
                

                          
      
      
                    



                </div>        
                <div v-show = "showBigImg" style = "height:0.3rem;">
                    </div>   
                        <!-- 加载 -->
                        <div v-if = "loading" style = "clear:both;text-align:center;margin-top:0.5rem;">
                        <img src="../../../static/loading.gif" alt="" style = "width:2rem;height:2rem;">
                    </div>    
               
                <div v-show = "last0" style = "font-size:0.5rem;color:#aeaeae;line-height:2rem;text-align:center">我们也是有底线的</div>             
          </div>
</template>

<script>
import $ from "jquery"
import {IP,PORT,promiseAjax} from "@/api/api.js"
export default {
    data(){
       return {
            showBigImg:true,
            loading:false,
            startIndex:0,
            length:7,
            list:[],
            last0:false,
            Ajax:false,
       }
    },
    methods:{
        goGroup(item){
         
            let url = "groupGoodShow.html?userId="+JSON.parse(localStorage.getItem('paile8Token')).userId+"&cargoId="+item.cargo_id;
            window.location.href = url;
        },
        showFunc(){
            this.showBigImg = !this.showBigImg;
        },
              gohistroy(){
            window.history.go(-1);
        },
        taggleList(n){
            // n是点击的第几个

            // 在这里请求数据

            $('#title tr td').removeClass('current');
            $('#title tr td').eq(n).addClass('current');
            
        },
        getList(){
            return new Promise((resolve,reject)=>{
                    promiseAjax(`http://${IP}:${PORT}/paile-service/api/homePageManage/getAllGroup`,{
                        startIndex : this.startIndex,
                        length:this.length,
                    }).then((data)=>{
                        resolve(data)
                    }).catch((err)=>{
                        reject(err)
                    })
            })
        }
    },

    created(){
        // 检测是否登录
        if(localStorage.getItem('isLoginpaile8') == null){
            window.location.href = "index.html#/wx";
        }
        // 在这里发送请求
        
        this.loading = true;
        this.getList().then((data)=>{
            this.loading = false;
    
            this.list = data.datas.datas;
                         if(data.datas.datas.length == 7){
                                //   判断是否是最后了
                                    _this.Ajax = true;
                                  _this.loading = false;

                              }else{
                                  _this.loading = false;
                                  _this.last0 = true;
                                  
                              }

        }).catch((err)=>{
            this.loading = false;
            console.log(err);
        })
                //  触底检测

             let _this = this;
                //  触底检测
            $(window).scroll(function(){
            　　var scrollTop = $(this).scrollTop();
            　　var scrollHeight = $(document).height();
            　　var windowHeight = $(this).height();
            　　if(scrollTop + windowHeight >= scrollHeight-50){
                    if(_this.Ajax){
                        
                        _this.Ajax = false
                        _this.loading = true;
                        _this.startIndex+=7;
                　　　　  _this.getList().then((data)=>{
                          
                            // 判断是否是最后了
                              _this.list.push(...(data.datas.datas));
                              if(data.datas.datas.length == 7){
                                //   判断是否是最后了
                                    _this.Ajax = true;
                                  _this.loading = false;

                              }else{
                                  _this.loading = false;
                                  _this.last0 = true;
                                    _this.Ajax = false;
                                  
                              }
                            
                        });
                    }
            　　}
            });









      
    }
}
</script>

<style scoped>
   @import url("../../public/Adaptation.css");
@import url("../../public/iconfont.css");
    .bg-index{
        background:-webkit-linear-gradient(0deg, rgba(254, 182, 146, 1) 0%, rgba(254, 182, 146, 1) 0%, rgba(234, 84, 85, 1) 100%, rgba(234, 84, 85, 1) 100%);
        background:linear-gradient(90deg, rgba(254, 182, 146, 1) 0%, rgba(254, 182, 146, 1) 0%, rgba(234, 84, 85, 1) 100%, rgba(234, 84, 85, 1) 100%)
    }
    .current{
        color:rgba(233, 114, 76, 1);
        border-bottom:1px solid rgba(233, 114, 76, 1);
        box-sizing:border-box;
    }


    .box-style-img{
        margin-top:0.2rem;     
    }
    .box-style-text{
        margin-top:0.3rem;
        display: block;
        width:16rem;
        background:#fff;

    }
    .box-img{
        width:7.637rem;
        height:11.7rem;
        background:#fff;
        margin-top:0.2rem;
        margin-left:0.242rem;
        float:left;
        

    }
    .box-text{
        margin-top:1px;
        width:15rem;
        margin-left:0.5rem;
        padding-top:0.2rem;
        padding-bottom:0.2rem;
        clear: both;
    }
    .shop-title-img{
        font-size:0.6rem;
        line-height:0.8rem;
        height:1.6rem;
        display:-webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2;
        overflow: hidden;
        width:7.3rem;
        margin:0 auto;

    }
    .shop-title-text{
        font-size:0.6rem;
        line-height:0.8rem;
                height:1.6rem;
        display:-webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp:2;
        overflow: hidden;
        width:11rem;
        /* margin:0 auto; */
        margin-left:0.5rem;
        float:left;

    }
    .bowser-img{
        width:7.6rem;
        margin:0 auto;
        line-height:0.982rem;
    }
    .bowser-text{
          width:12rem;
          margin-top:0.317rem;
          float:left;
    }
    .ico-img{
        font-size:0.5rem;
    }
    
    .ico-text{
        font-size:0.5rem;
    }
    .price-img{
            font-size:0.6rem;
            color:#FA742B;
            float:left;
            max-width:2.3rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
    }
    .price-text{
        font-size:0.683rem;
        color:#FA742B;
          padding-left:0.5rem;
        margin-top:0.317rem;
        float:left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        max-width:3.8rem;
    }
    .count-img{
        float:left;
        margin-left:0.1rem;
        font-size:0.45rem;
        color:#AEAEAE;
        max-width:3.0rem;
        margin-top:0.08rem;
                overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
    }
     .count-text{
        float:left;
        margin-left:0.5rem;
        font-size:0.5rem;
        margin-top:0.517rem;
        
        color:#AEAEAE;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width:4.2rem
        
    }
    .btn-img{
        width:2.133rem;
        height:1.11rem;
        border-radius:1.11rem;
        text-align:center;
        line-height:1.11rem;
        color:#fff;
        font-size:0.555rem;
        float:right;
    }
    .btn-text {
        width:2.133rem;
        height:1.11rem;
        border-radius:1.11rem;
        text-align:center;
        line-height:1.11rem;
        color:#fff;
        font-size:0.555rem;
         float:right;;
        
    }
    #title td{
        width:20%;
    }
    .groupGoodPrice {
  font-size: 0.7rem;
  line-height: 0.8rem;
  color: #f46360;
  width: 4.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* float: left; */
}
.goodPrice {
  width: 4.3rem;
  color: rgb(174, 174, 174);
  font-size: 0.448rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* float: left; */
  /* margin-left: 0.2rem; */
  height: 0.5rem;
  line-height: 0.5rem;
}
.groupBtn {
  width: 2.151rem;

  border-radius: 0.583rem;
  font-size: 0.56rem;
  color: #fff;
  text-align: center;
  display: inline-block;

  line-height: 1.165rem;
  float: right;
}
    
</style>
