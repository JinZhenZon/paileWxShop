<template>
          <div style = "background:#f7f7f7;">
            <div style = "font-size:0.683rem;line-height:1.707rem;color:#fff;width:16rem;position:fixed;top:0;" class = "bg-index">
                <!-- <i style = "margin-left:0.5rem;" class = "iconfont icon-jiantou-copy" @click = "gohistroy"></i>
         
                <span style = "margin-left:0.5rem;">拍乐网</span>
                 -->
                <div>
                    <table id = "title" style = "width:16rem;text-align:center;background:#fff;color:#333;font-size:0.64rem;line-height:1.71rem;">
                        <tr>
                            <td @click = "taggleList(0)" class = "current">全部</td>
                            <td  @click = "taggleList(1)" >价格</td>
                            <td  @click = "taggleList(2)" >热度</td>
                            <td  @click = "taggleList(3)" >品质</td>
                            <td @click = "showFunc">
                                 <i class = "iconfont" style = "font-size:0.64rem;" :class = "showBigImg?'icon-guanli':'icon-chazhaobiaodanliebiao'"></i>
                            </td>
                        </tr>
                    </table>
                </div> 
             </div>
             <div style = "height:3.417rem;"></div>
                <div :class = "showBigImg?'box-style-img':'box-style-text'" class = "clearfloat">
                        
                        <div :class = "showBigImg?'box-img':'box-text'" v-for = "(item,index) in list" :key  = "index" @click="goodShowF(item)">
                        
                            <img v-lazy = "item.cover_url" :style = "showBigImg?'width:7.637rem;height:8.533rem':'width:3rem;height:3rem;float:left;'" />
                            <p :class = "showBigImg?'shop-title-img':'shop-title-text'" style = "color:#000;">
                               {{item.name}}
                            </p>
                            <div class ="clearfloat" :class = "showBigImg?'bowser-img':'bowser-text'">
                                <span :class = "showBigImg?'price-img':'price-text'">
                                    ￥{{item.price}}
                                </span>
                                <span :class = "showBigImg?'count-img':'count-text'">
                                    {{item.sales_count}}人付款
                                </span>
                            </div>
                            <div v-show = "!showBigImg" style = "background:#fff;height:0.3rem;"></div>
                                     <div v-show = "!showBigImg" style = "height:1px;background:#f7f7f7"></div>
                     
                        </div>


                </div>        
                <div v-show = "showBigImg" style = "height:0.3rem;">
                    </div>           
               
                <div v-show = "loading" style = "text-align:center"><img src="../../../static/loading.gif" style = "width:2rem;height:2rem" alt=""></div>
                <div v-show = "last0" style = "font-size:0.5rem;color:#aeaeae;line-height:2rem;text-align:center">我们也是有底线的</div>
          </div>
</template>

<script>
import $ from "jquery"

import {IP,PORT,promiseAjax} from "@/api/api.js"


export default {
    data(){
       return {
            search:"",
            showBigImg:true,
            orderType:4,
            index:0,
            loading:true,
            list : [],
            Ajax : false,
            last0:false,
       }
    },
    mounted(){
        this.getList({
            type:this.search,
            index:this.index,
            orderType:this.orderType,
            descType : 1,
        }).then((data)=>{
            this.loading = false;
            this.list = data.datas;
                if(data.datas.length == 7){
                                //   判断是否是最后了
                                    this.Ajax = true;
                              
                                    
                              }else{
                                  this.last0 = true;
                            
                                  
                              }
        })

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
                        _this.index+=5;
                        
                　　　　  _this.getList({
                            type:_this.search,
                            index:_this.index,
                            orderType:_this.orderType,
                            descType : 1,
                        }).then((data)=>{
                            
                              _this.list.push(...(data.datas));
                              if(data.datas.length == 7){
                                //   判断是否是最后了
                                    _this.Ajax = true;

                              }else{
                                  _this.loading = false;
                                  _this.last0 = true;
                                  
                              }
                            
                        });
                    }
            　　}
            });
    },
    methods:{
        goodShowF(item){
             var goodUrl = "goodShow.html?userId="+JSON.parse(localStorage.getItem('paile8Token')).userId + "&cargoId="+item.id;
                window.location.href = goodUrl;
        },
        getList(data){
            return new Promise((resolve,reject)=>{
                promiseAjax(`http://${IP}:${PORT}/paile-service/api/cargoHandler/getCargoesByType`,{
                            type:data.type,
                            index:data.index,
                            orderType : data.orderType,
                            descType : data.descType,
                            length:7,
                        }).then(data =>{
                            resolve(data);
                        }).catch((err)=>{
                            console.log('获取快捷列表失败',err);
                        })
            })
       

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
            switch(n){
                case 0 : this.orderType = 4;break;
                case 1 : this.orderType = 1 ; break;
                case 2 : this.orderType = 2 ; break;
                case 3 : this.orderType = 3 ; break;
            }
            this.last0 = false;            
            // 重置列表
            this.list = [];
            // 重置已加载的个数;
            this.index = 0;
            this.loading = true;
            this.Ajax = true;
             this.getList({
                type:this.search,
                index:this.index,
                orderType:this.orderType,
                descType : 1,
            }).then((data)=>{

                this.loading = false;
                this.list = data.datas;
                                if(data.datas.length == 7){
                                //   判断是否是最后了
                                    this.Ajax = true;

                                    
                              }else{
                                    this.Ajax = false;
                                  
                                  this.last0 = true;
                              }
        })
       

            
        }
    },
    filters:{
        toStr(str){
            
            switch(str){
                case "1" : return "男装";break;
                case "2" : return "女装";break;
                case "3" : return "居家";break;
                case "4" : return "母婴";break;
                case "5" : return "鞋包";break;
                case "6" : return "玩具";break;
                case "7" : return "美妆";break;
                case "8" : return "饰品";break;
                case "9" : return "数码";break;
            }
        }
    },
    created(){
        this.search = window.location.search.replace(/\?/,"").split("=")[1]
        // 在这里发送请求
      
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
        height:11.512rem;
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
        width:7rem;
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
        width:7rem;
        margin:0 auto;
        line-height:0.982rem;
    }
    .bowser-text{
          width:11rem;
          margin-top:0.317rem;
    }
    .price-img{
            font-size:0.683rem;
            color:#FA742B;
            float:left;
    }
    .price-text{
        font-size:0.683rem;
        color:#FA742B;
          padding-left:0.5rem;
        margin-top:0.317rem;
        float:left;
    }
    .count-img{
        float:right;
        font-size:0.597rem;
        color:#AEAEAE;
        
    }
     .count-text{
        float:left;
        margin-left:1.5rem;
        font-size:0.597rem;
        margin-top:0.317rem;
        
        color:#AEAEAE;
        
    }
</style>
