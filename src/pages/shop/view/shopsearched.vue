<template>
          <div  ref = "box" style = "background:#f7f7f7;width:16rem;position:absolute;top:0;">
            <!-- 搜索地址页面 -->
             <div style = "position:fixed;top:0;width:16rem;z-index:1">
              <div class = "bg-index relative" style ="margin-top:0;height:1.71rem;">
                         
                <i style = "margin-left:0.5rem;margin-top:0.53rem;color:#fff;float:left;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
                       <span @click = "goSearch">
                    
                  <div class = "col-12 box-center clearfloat" style ="padding-top:0.5rem;float:left;">

                      <div class = "mar-1" style = "width:11rem;border-bottom:1px solid #f7f7f7;padding-left:0.5rem;padding-right:0.5rem;padding-bottom:0.2rem;">
                          <!-- 可以通过传入inputstyle字段进行input扩展样式 -->
                              <div class = "input">
                                <i slot = "icon" class = "sousuo iconfont icon-sousuo"  style = "color:#fff;position:relative;top:0.1rem;"></i>
                                    <input type="search"  class = "input-inner"  v-model = "inputData" style = "width:83.5%" placeholder="搜索商品">
                                </div>
                      </div>
             
            
                  </div>
                 
                  </span>
            
                </div>
                  <div>
                    <table id = "title" style = "width:16rem;text-align:center;background:#fff;color:#333;font-size:0.64rem;line-height:1.71rem;">
                        <tr>
                            <td @click = "taggleList(0)" class = "current">综合</td>
                            <td  @click = "taggleList(1)" >新品</td>
                            <td  @click = "taggleList(2)" >销量</td>
                            
                            <td @click = "taggleList(3)">价格</td>
                            <td @click = "showFunc">
                                 <i class = "iconfont" style = "font-size:0.64rem;" :class = "showBigImg?'icon-guanli':'icon-chazhaobiaodanliebiao'"></i>
                            </td>
                        </tr>
                    </table>
                </div> 
         </div>
         <div style = "height:3.147rem;">

         </div>
           <div :class = "showBigImg?'box-style-img':'box-style-text'" class = "clearfloat">
                            <div :class = "showBigImg?'box-img':'box-text'" v-for = "(item,index) in searchList" :key = "index">
                          
                                <div @click = "toShow(item)">
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
                </div>       
                    <div v-if = "loading" style = "clear:both;text-align:center;margin-top:0.5rem;">
                        <img src="../../../../static/loading.gif" alt="" style = "width:2rem;height:2rem;">
                    </div>
                <div v-show = "last0" style = "font-size:0.5rem;color:#aeaeae;line-height:2rem;text-align:center">我们也是有底线的</div>          
                <div v-show = "showBigImg" style = "height:0.3rem;">
                    </div>           
          </div>
</template>

<script>

import $ from "jquery"
import {IP,PORT,promiseAjax} from "@/api/api.js"
export default {
    data(){
       return {
            showBigImg:true,
            inputData:"",
            shopId:"",
            name:"",
            index:0,
            length:6,
            // 加载进度
            loading:true,
            // 剩余0条
            last0:false,
            // 遍历列表
            searchList:[],
            // 是否许可加载数据
            Ajax:false,

       }
    },
    methods:{
        toShow(data){
            var href = "goodShow.html?userId="+JSON.parse(localStorage.getItem('paile8Token')).userId+"&cargoId="+data.id;
            window.location.href = href;
        },
        // 跳转到搜索
        goSearch(){
            this.$router.push({path:"/shopSearch",query:{
                shopId:this.shopId
            }})
        },
        // 获取搜索列表
        getList(){
            // 获取参数
            let name = this.name;
            let shopId = this.shopId;
            let index = this.index;
            let length = this.length;
            let userId = JSON.parse(localStorage.getItem('paile8Token')).userId;
            this.loading = true;
            promiseAjax(`http://${IP}:${PORT}/paile-service/api/cargoHandler/getCargoesByShopIdAndName`,{
                name,shopId,index,length,userId
            }).then(data => {
                // 判断是不是第一次，是的话直接赋值，不是的话就添加
                if(this.searchList.length == 0){
                    this.searchList = data.datas;
                }else{
                    this.searchList.push(...(data.datas));
                    
                }
           
               this.loading = false;
               if(data.datas.length == 6){
                                //   没到最后的情况
                                    this.Ajax = true;
                                
               }else{                         
                         
                            this.last0 = true;
                            this.Ajax = false;
                                  
               }
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
            
        },
        func(){
            this.$router.push('/shopsearched')
        }
    },
    mounted(){
           this.$refs.box.style.height = (document.body.clientHeight ||window.innerHeight)+"px";
           this.inputData = this.$route.query.name;
    },
    created(){
               
        // 在这里发送请求
        this.name = this.$route.query.name;
        this.shopId = this.$route.query.shopId;
        this.getList();




            let _this = this;
                //  触底检测
            $(window).scroll(function(){
                console.log(1);
            　　var scrollTop = $(this).scrollTop();
            　　var scrollHeight = $(document).height();
            　　var windowHeight = $(this).height();
            　　if(scrollTop + windowHeight >= scrollHeight-50){
                    if(_this.Ajax){
                        _this.Ajax = false;
                        _this.loading = true;
                        _index+=6;
                　　    this.getList();
                    }
            　　}
            });



































        
      
    }
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
    #title td{
        width:20%;
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
