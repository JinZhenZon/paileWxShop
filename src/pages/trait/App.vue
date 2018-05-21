<template>
          <div style = "background:#f7f7f7;">
            <div style = "font-size:0.683rem;line-height:1.707rem;color:#fff;width:16rem;position:fixed;top:0;" class = "bg-index">
                <!-- <i style = "margin-left:0.5rem;" class = "iconfont icon-jiantou-copy" @click = "gohistroy"></i>
                <span style = "margin-left:0.5rem;">拍乐网</span> -->
                <div>
                    <table id = "title" style = "width:16rem;text-align:center;background:#fff;color:#333;font-size:0.64rem;line-height:1.71rem;">
                        <tr>
                            <td @click = "taggleList(1)" class = "current">价格</td>
                            <td  @click = "taggleList(2)" >品质</td>
                            <td></td>
                            <td></td>
                            <td @click = "showFunc">
                                 <i class = "iconfont" style = "font-size:0.64rem;" :class = "showBigImg?'icon-guanli':'icon-chazhaobiaodanliebiao'"></i>
                            </td>
                        </tr>
                    </table>
                </div> 
             </div>
             <div style = "height:3.417rem;"></div>
                <div :class = "showBigImg?'box-style-img':'box-style-text'" class = "clearfloat">
                        
                        <div :class = "showBigImg?'box-img':'box-text'"  v-for = "(item,index) in list" :key = "index" :style = "showBigImg?'':index==list.length-1?'padding-bottom:0':''" @click = "gogoodshow(item)">
                            
                            <img v-lazy = "item.img_url" :style = "showBigImg?'width:7.637rem;height:8.533rem':'width:3rem;height:3rem;float:left;'" />
                            <p :class = "showBigImg?'shop-title-img':'shop-title-text'" style = "color:#000;">
                                {{item.name}}
                            </p>
                            <div class ="clearfloat" :class = "showBigImg?'bowser-img':'bowser-text'">
                                <span :class = "showBigImg?'price-img':'price-text'">
                                    {{item.price}}
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
               
               <div v-show = "showBigImg" style = "height:0.3rem;">
                    </div>   
                        <!-- 加载 -->
                        <div v-if = "loading" style = "clear:both;text-align:center;margin-top:0.5rem;">
                        <img src="../../../static/loading.gif" alt="" style = "width:2rem;height:2rem;">
                    </div>    
               
                <div v-show = "last0" style = "font-size:0.5rem;color:#aeaeae;line-height:2rem;text-align:center;">我们也是有底线的</div>    
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
            tabpage:1,

       }
    },
           beforeDestroy(){
        //    在这清除历史数据
                window.localStorage.removeItem('EWY2VeAJ');
        },
    methods:{
        gogoodshow(item){
            // console.log(item)
            var href = `goodShow.html?userId=${JSON.parse(window.localStorage.getItem('paile8UserInfo')).id}&cargoId=${item.cargo_id}`
            // ${JSON.parse(window.localStorage.getItem('paile8UserInfo')).id}
            window.location.href = href;
        },
        showFunc(){
            this.showBigImg = !this.showBigImg;
        },
              gohistroy(){
            window.history.go(-1);
        },
        taggleList(n){
            this.tabpage = n;
            // n是点击的第几个
            // 在这里请求数据
            $('#title tr td').removeClass('current');
            $('#title tr td').eq(n-1).addClass('current');
                // 切换tab
                    // 重置列表
            this.list = [];
            // 重置已加载的个数;
                this.startIndex = 0;
                this.last0 = false;
                this.loading = true;
            this.Ajax = true;
        this.getList().then((data)=>{
            this.loading = false;
    
            this.list = data.datas.datas;
                         if(data.datas.datas.length == 7){
                                //   判断是否是最后了
                                    this.Ajax = true;
                                  this.loading = false;
                                this.last0 = false;
                              }else{
                                  _this.loading = false;
                                  _this.last0 = true;
                                  
                              }
                             let obj = {
                                    list:this.list,
                                    last0 : this.last0,
                                    Ajax:this.Ajax,
                                    loading:this.loading,
                                    tabpage:this.tabpage,
                                    showBigImg:this.showBigImg
                                }
                window.localStorage.setItem('EWY2VeAJ',JSON.stringify(obj));


        }).catch((err)=>{
            this.loading = false;
                this.last0 = true;
            
            console.log(err);
        })
            
        },
        getList(){
            return new Promise((resolve,reject)=>{
                    promiseAjax(`http://${IP}:${PORT}/paile-service/api/homePageManage/getAllQuality`,{
                        startIndex : this.startIndex,
                        length:this.length,
                        orderType:this.orderType,
                        descType:1,
                    }).then((data)=>{
                        resolve(data)
                    }).catch((err)=>{
                        reject(err)
                    })
            })

        }
    },

    mounted(){
        if(window.localStorage.getItem('EWY2VeAJ')==null){

   
                    this.loading = true;
                        this.getList().then((data)=>{
                            this.loading = false;
                            this.list = data.datas.datas;
                                        if(data.datas.datas.length == 7){
                                                //   判断是否是最后了
                                                this.Ajax = true;
                                                this.loading = false;
                                                this.last0 = true;
                                            }else{
                                                this.loading = false;
                                                this.last0 = true;
                                                this.last0 = false;  
                                            }



                               let obj = {
                                    list:this.list,
                                    last0 : this.last0,
                                    Ajax:this.Ajax,
                                    loading:this.loading,
                                    tabpage:this.tabpage,
                                    showBigImg:this.showBigImg
                                }
                                window.localStorage.setItem('EWY2VeAJ',JSON.stringify(obj));

                        }).catch((err)=>{
                                this.last0 = false;
                            this.loading = false;
                        })
        }else{
                               this.list = JSON.parse(window.localStorage.getItem('EWY2VeAJ')).list;
                               this.last0 = JSON.parse(window.localStorage.getItem('EWY2VeAJ')).last0;
                               this.Ajax = JSON.parse(window.localStorage.getItem('EWY2VeAJ')).Ajax;
                               this.loading = JSON.parse(window.localStorage.getItem('EWY2VeAJ')).loading;
                              this.showBigImg  = JSON.parse(window.localStorage.getItem('EWY2VeAJ')).showBigImg;
                               this.tabpage = JSON.parse(window.localStorage.getItem('EWY2VeAJ')).tabpage;
                            $('#title tr td').removeClass('current');
                            $('#title tr td').eq(this.tabpage-1).addClass('current');
                            $(window).scrollTop(window.localStorage.getItem('gcvoaY6g'));
        }
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
                                    _this.last0 = false;
                                    

                              }else{
                                  _this.loading = false;
                                  _this.last0 = true;
                                    _this.Ajax = false;
                                  
                              }
                                    let obj = {
                                    list:_this.list,
                                    last0 :_this.last0,
                                    Ajax:_this.Ajax,
                                    loading:_this.loading,
                                    tabpage:_this.tabpage,
                                    showBigImg:_this.showBigImg  
                                }
                                window.localStorage.setItem('EWY2VeAJ',JSON.stringify(obj));
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
    #title td{
        width:20%;
    }
</style>
