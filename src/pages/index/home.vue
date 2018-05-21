<template>
      <div class = "col-16 relative" style ="margin-top:0;">

          <!-- header -->

        <div style = "position:fixed;top:0;width:16rem;z-index:1">
              <div class = "bg-index relative" style ="margin-top:0;">
                  <div class = "col-15 box-center clearfloat" style ="padding-top:0.5rem;">
                   
                      <div class = "left col-12" style = "margin-left:1.5rem">
                        <router-link to = "/searchAll">
                            <Jinput :inputstyle = "'width:80%;'">
                              <div  slot = "icon" style = "display:inline;position:relative;top:0.1rem;">
                                  
                                  <i class = "sousuo iconfont icon-sousuo"></i>
                              </div>
                                
                            </Jinput>
                        </router-link>
                      </div>
            
                  </div>
                    <div class = "col-15 box-center Headermenu">
                          <router-link to = "/" class = "hover">拍乐网</router-link>
                          <router-link to="/near">附近</router-link>
                    </div>
                      <div style = "height:0.34rem;"></div>
                      
                </div>
         </div>

        <!-- body -->
        <div class = "col-16 bg-index" style ="height:3.1rem;"></div>
        <div class = "col-16 bg-index relative " style = "height:4.8rem;">
            <div style = "height:1rem;"></div>
            <div style = "width:15rem;height:5.12rem;position:absolut;top:1rem;margin:0 auto;">
                <banner :warp-style = "warpStyle" :pages = "pages"  style = "border-radius:0.5rem;overflow:hidden;">

                </banner>
            </div>
        </div>
            <div style = "height:1.665rem;"></div>
        
        <ul class = "menu clearfloat">
              <a href="quickEntrance.html?search=0">
                <li style = "text-align:center;line-height:1.7rem;">
                
                  <img src="../../../static/icon/0.png" width="90%" alt="">
                
                </li></a>
                <a href="quickEntrance.html?search=1">
                <li style = "text-align:center;line-height:1.7rem;">
                
                  <img src="../../../static/icon/1.png" width="90%" alt="">
                
                </li></a> 
                 <a href="quickEntrance.html?search=2">
                <li style = "text-align:center;line-height:1.7rem;">
                
                  <img src="../../../static/icon/2.png" width="90%" alt="">
                
                </li></a> 
                  <a href="quickEntrance.html?search=3">
                <li style = "text-align:center;line-height:1.7rem;">
                
                  <img src="../../../static/icon/3.png" width="90%" alt="">
                
                </li></a> 
                 <a href="quickEntrance.html?search=4">
                <li style = "text-align:center;line-height:1.7rem;">
                
                  <img src="../../../static/icon/4.png" width="90%" alt="">
                
                </li></a> 
                  <a href="quickEntrance.html?search=5">
                <li style = "text-align:center;line-height:1.7rem;">
                
                  <img src="../../../static/icon/5.png" width="90%" alt="">
                
                </li></a> 
                  <a href="quickEntrance.html?search=6">
                <li style = "text-align:center;line-height:1.7rem;">
                
                  <img src="../../../static/icon/6.png" width="90%" alt="">
                
                </li></a>   <a href="quickEntrance.html?search=7">
                <li style = "text-align:center;line-height:1.7rem;">
                
                  <img src="../../../static/icon/7.png" width="90%" alt="">
                
                </li></a> 
                  <a href="quickEntrance.html?search=8">
                <li style = "text-align:center;line-height:1.7rem;">
                
                  <img src="../../../static/icon/8.png" width="90%" alt="">
                
                </li></a>  
                 <a href="quickEntrance.html?search=9">
                <li style = "text-align:center;line-height:1.7rem;">
                
                  <img src="../../../static/icon/9.png" width="90%" alt="">
                </li></a>
                 
          </ul>         
        <div style = "height:1.44rem"></div>
        <!-- 品质爆款 -->
        <div style = "background:#f7f7f7">

          <div class = "hot">
            
              <div class = "cantargory-title liner-right-yellow" style = "position:relative;top:-0.64rem;">
                    品质爆款
              </div>

              <ul class = "hotList">
                <li class = "t_c" v-for = "(item,index) in hotList.datas" :key = "index">
                  <a :href="item.goodUrl">
                    
                    <img  v-lazy="item.httpurl" alt="">
                    <div class = "hotListText">
                        <p class = "hotGoodTitle">{{item.descr}}</p>
                        <p class = "hotGoodPrice">￥{{item.price}}</p>
                    </div>
                  </a>
                </li>
              </ul>

          </div>






                    <div class = "hot clearfloat" style ="margin-top:0.64rem;">
                      
                      <div class = "cantargory-title liner-group" style = "float:left;">
                            品质团购
                      </div>
                      
                      <a href = "groupTrait.html" class="groupMore" style = "height:1.28rem;">查看更多</a>
                      
                    </div>
                    <ul class = "groupList clearfloat">
                      <li v-for = "(item,index) in groupList.datas" :key = "index">
                        <a :href="item.goodUrl">
                        <div class = "groupBower" style = "height:12.5rem;">
                              <img style = "width:100%;height:8.777rem;" v-lazy= "item.img_url" alt="item.descr">
                              
                              <div class = "clearfloat" style = "width:7.2rem;margin:0 auto;">
                                    <p class = "groupGoodTitle">
                                      {{item.descr}}
                                  </p>
                                  <div class = "left">
                                      <p class = "groupGoodPrice">{{item.group_price}}</p>
                                      <p class = "goodPrice">单买价：{{item.price}}</p>
                               
                                  </div>
                                  <div class ="right">
                                           <p class = "groupBtn">
                                        团购
                                      </p>
                                  </div>

                              </div>
                            
                          </div>
                          </a>
                          <div style = "height:0.22rem;background:#f7f7f7">

                          </div>
                        </li>

                    </ul>
















  <div class = "hot clearfloat" style ="margin-top:0.64rem;">
                    
                      <div class = "cantargory-title liner-good" style = "float:left;">
                            品质优选
                      </div>
                      <a href = "trait.html" class="groupMore" style = "height:1.28rem;color:rgb(253, 82, 211)">查看更多</a>
                    </div>
                    <ul class = "groupList clearfloat">
                      <li v-for  = "(item,index) in list.datas" :key = "index">
                        <!-- 可以这么写，也可以通过click传递cargoId,从渲染的角度还是推荐这种写法 -->
                        <a :href="item.goodUrl">
                        <div class = "groupBower"  style = "height:12.5rem;">
                              <img style = "width:100%;height:8.777rem;" v-lazy= "item.img_url" :alt="item.name">
                              
                              <div class = "clearfloat" style = "width:7.2rem;margin:0 auto;">
                                    <p class = "groupGoodTitle">
                                        {{item.name}}
                                  </p>
                                  <div>
                                      <p class = "xGoodPrice">{{item.price}}</p>
                                      <p class = "fukuan">{{item.sales_count}}人付款</p>
                                  </div>


                              </div>
                            
                          </div>
                      
                         <div style = "height:0.22rem;background:#f7f7f7">

                          </div>
                          </a>
                        </li>
                    </ul>














        </div>

            <indexFooter></indexFooter>


        

      </div>
</template> 

<script>
import Jinput from "@/components/Jinput.vue";
import banner from "@/components/fullScreenSlide.vue";
import indexFooter from "@/components/indexFooter";
import {IP,PORT,promiseAjax} from "@/api/api.js"
export default {
  data() {
    return {
      warpStyle:"width:15rem;height:5.12rem;",
      pages:[
         "https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg",
         "https://img.alicdn.com/imgextra/i2/114/TB2IWBYeRmWBuNkSndVXXcsApXa_!!114-0-yamato.jpg",
         "https://aecpm.alicdn.com/tfscom/TB1PAUcfxGYBuNjy0FnXXX5lpXa.jpg_q50.jpg"
    
      ],
      hotList:[],
      groupList:[],
      list:[],

        sliderinit: {
          currentPage: 0,//当前页码
          thresholdDistance: 100,//滑动判定距离
          thresholdTime: 10,//滑动判定时间
          autoplay:3000,//自动滚动[ms]
          loop:true,//循环滚动
          direction:'horizontal',//方向设置，垂直滚动
          infinite:1,//无限滚动前后遍历数
          slidesToScroll:1,//每次滑动项数
        }
    };
  },
  methods:{




    // 获取首页数据
            getAllBanner(){
          return new Promise((resolve,reject)=>{
               promiseAjax(`http://${IP}:${PORT}/paile-service/api/homePageManage/getAllBanner`,{
              type:1,
            }).then((data)=>{
                resolve(data);
              
            }).catch((err)=>{
              reject(err);
            })
          })
           
        },
        // 获取品质爆款
            getAllHotModel(){
          return new Promise((resolve,reject)=>{
               promiseAjax(`http://${IP}:${PORT}/paile-service/api/homePageManage/getAllHotModel`,{
            }).then((data)=>{
                resolve(data);
              
            }).catch((err)=>{
              reject(err);
            })
          })
           
        },
        //获取团购
         getAllGroup(){
          return new Promise((resolve,reject)=>{
               promiseAjax(`http://${IP}:${PORT}/paile-service/api/homePageManage/getAllGroup`,{
                 startIndex:0,
                 length:4,
            }).then((data)=>{
                resolve(data);
              
            }).catch((err)=>{
              reject(err);
            })
          })
           
        },
                //获取品质优选
         getAllQuality(){
          return new Promise((resolve,reject)=>{
               promiseAjax(`http://${IP}:${PORT}/paile-service/api/homePageManage/getAllQuality`,{
                 startIndex:0,
                 length:4,
                 orderType:0,
                 descType:1,
            }).then((data)=>{
                resolve(data);
              
            }).catch((err)=>{
              reject(err);
            })
          })
           
        },

  },
  created(){

    












    // 获取banner
    this.getAllBanner().then((data)=>{
        // 赋值data给this.pages
    }).catch((error)=>{
      console.log('获取banner失败了',error);
    })
    // 获取品质爆款
        this.getAllHotModel().then((data)=>{
          if(localStorage.getItem('paile8Token')!=null){
            data.datas.datas.forEach((value)=>{
              value.goodUrl = "goodShow.html?userId="+JSON.parse(localStorage.getItem('paile8Token')).userId + "&cargoId="+value.cargo_id;
            })
          }else{
              data.datas.datas.forEach((value)=>{
              value.goodUrl = "index.html#/wx"
            })
          }
         
          this.hotList = data.datas;
          console.log(this.hotList)
        }).catch(()=>{
          console.log("获取品质爆款失败了");
        })
    // 获取品质团购
      this.getAllGroup().then((data)=>{
        this.groupList = data.datas;
               data.datas.datas.forEach((value)=>{
            value.goodUrl = "groupGoodShow.html?userId="+JSON.parse(localStorage.getItem('paile8Token')).userId + "&cargoId="+value.cargo_id
          })

      }).catch((err)=>{
        console.log('获取品质团购失败了',err)
      })
   // 获取品质优选
      this.getAllQuality().then((data)=>{
          data.datas.datas.forEach((value)=>{
            value.goodUrl = "goodShow.html?userId="+JSON.parse(localStorage.getItem('paile8Token')).userId + "&cargoId="+value.cargo_id
          })








        this.list=data.datas;
      }).catch((err)=>{
        console.log('获取品质优选失败了',err)
      })



  },
  mounted(){

            $('#footerMenu .home').css({
            color:"#fff",
            fontSize:"0.939rem",
  background:'-webkit-linear-gradient(right top,#fba886,#f46360)',
  background: '-o-linear-gradient(left bottom,#fba886,#f46360)',
  background:'-moz-linear-gradient(left bottom,#fba886,#f46360)',
    background:'linear-gradient(to left bottom,#fba886,#f46360)',
        })
        $('#footerMenu .nearBox').css({
          color:"rgb(177,177,177)",
        })
        $('#footerMenu .wodeBox').css({
          color:"rgb(177,177,177)",
        })
  },
  components: {
    Jinput,
    banner,
    indexFooter

  }
};
</script>

<style scoped>
@import url("../../public/Adaptation.css");
@import url("../../public/iconfont.css");
* {
  margin: 0;
  padding: 0;
}

.bg-index {
  background: -webkit-linear-gradient(
    left,
    #fdb591,
    #ea5556
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    #fdb591,
    #ea5556
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    #fdb591,
    #ea5556
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #fdb591, #ea5556); /* 标准的语法 */
}
.saoyisao {
  font-size: 0.7rem;
  line-height: 0.98rem;
  padding: 0;
  margin: 0;
  color: #fff;
}
.sousuo {
  font-size: 0.5rem;
  color: #aaa;
  margin-left: 0.3rem;
}
.Headermenu {
  font-size: 0.59rem;
  text-align: center;
  margin-top: 0.5rem;
}
.Headermenu a {
  display: inline-block;
}
.Headermenu a:nth-of-type(1) {
  margin-left: -1rem;
}
.Headermenu a:nth-of-type(2) {
  margin-left: 1rem;
}

.hover {
  font-size: 0.68rem;
  line-height: 1rem;
  padding: 0 0.2rem;
  border-bottom: 0.1rem solid #fff;
  padding-bottom: 0.2rem;
}
.menu a {
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  float: left;
  margin-left: 1.5rem;
  margin-top: 0.7rem;
}
.menu a:nth-of-type(1) {
  margin-left: 0.75rem;
  background: url('../../../static/icon/0.png') -webkit-linear-gradient(
    right top,
    rgb(253, 202, 80),
    #fdb591
  ); /* Safari 5.1 - 6.0 */
  background: url('../../../static/icon/0.png') -o-linear-gradient(
    left bottom,
    rgb(253, 202, 80),
    #fdb591
  ); /* Opera 11.1 - 12.0 */
  background: url('../../../static/icon/0.png') -moz-linear-gradient(
    left bottom,
    rgb(253, 202, 80),
    #fdb591
  ); /* Firefox 3.6 - 15 */

  background:linear-gradient(to left bottom, rgb(253, 202, 80), #fdb591);
  background-size:100% 100%;
}
.menu a:nth-of-type(2) {
  background: -webkit-linear-gradient(
    right top,
    #eac0f0,
    #d19bcf
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    left bottom,
    #eac0f0,
    #d19bcf
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    left bottom,
    #eac0f0,
    #d19bcf
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to left bottom,
    #eac0f0,
    #d19bcf
  ); /* 标准的语法 */
}
.menu a:nth-of-type(3) {
  background: -webkit-linear-gradient(
    right top,
    #dcb2fa,
    #588ef0
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    left bottom,
    #dcb2fa,
    #588ef0
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    left bottom,
    #dcb2fa,
    #588ef0
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to left bottom,
    #dcb2fa,
    #588ef0
  ); /* 标准的语法 */
}
.menu a:nth-of-type(4) {
  background: -webkit-linear-gradient(
    right top,
    #ff64d8,
    #f66a91
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    left bottom,
    #ff64d8,
    #f66a91
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    left bottom,
    #ff64d8,
    #f66a91
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to left bottom,
    #ff64d8,
    #f66a91
  ); /* 标准的语法 */
}
.menu a:nth-of-type(5) {
  background: -webkit-linear-gradient(
    right top,
    #fba886,
    #f46360
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    left bottom,
    #fba886,
    #f46360
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    left bottom,
    #fba886,
    #f46360
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to left bottom,
    #fba886,
    #f46360
  ); /* 标准的语法 */
}

.menu a:nth-of-type(6) {
  margin-left: 0.75rem;

  background: -webkit-linear-gradient(
    right top,
    #84f0e3,
    #41d5c5
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    left bottom,
    #84f0e3,
    #41d5c5
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    left bottom,
    #84f0e3,
    #41d5c5
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to left bottom,
    #84f0e3,
    #41d5c5
  ); /* 标准的语法 */
}
.menu a:nth-of-type(7) {
  background: -webkit-linear-gradient(
    right top,
    #f880ad,
    #ff7495
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    left bottom,
    #f880ad,
    #ff7495
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    left bottom,
    #f880ad,
    #ff7495
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to left bottom,
    #f880ad,
    #ff7495
  ); /* 标准的语法 */
}
.menu a:nth-of-type(8) {
  background: -webkit-linear-gradient(
    right top,
    #9bd6ff,
    #25a3f8
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    left bottom,
    #9bd6ff,
    #25a3f8
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    left bottom,
    #9bd6ff,
    #25a3f8
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to left bottom,
    #9bd6ff,
    #25a3f8
  ); /* 标准的语法 */
}
.menu a:nth-of-type(9) {
  background: -webkit-linear-gradient(
    right top,
    #f485ec,
    #c74bbb
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    left bottom,
    #f485ec,
    #c74bbb
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    left bottom,
    #f485ec,
    #c74bbb
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to left bottom,
    #f485ec,
    #c74bbb
  ); /* 标准的语法 */
}
.menu a:nth-of-type(10) {
  background: -webkit-linear-gradient(
    right top,
    #7fefd7,
    #5bcc96
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    left bottom,
    #7fefd7,
    #5bcc96
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    left bottom,
    #7fefd7,
    #5bcc96
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to left bottom,
    #7fefd7,
    #5bcc96
  ); /* 标准的语法 */
}
.cantargory-title {
  width: 4.181rem;
  height: 1.28rem;
  color: #fff;
  font-size: 0.64rem;
  text-align: center;
  border-top-right-radius: 0.64rem;
  border-bottom-right-radius: 0.64rem;
  background: #f00;
  line-height: 1.28rem;
  letter-spacing: 0.1em;
  font-family: "微软雅黑";
}
.liner-right-yellow {
  background: -webkit-linear-gradient(
    left,
    rgb(251, 135, 136),
    rgb(254, 213, 74)
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    rgb(251, 135, 136),
    rgb(254, 213, 74)
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    rgb(251, 135, 136),
    rgb(254, 213, 74)
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to right,
    rgb(251, 135, 136),
    rgb(254, 213, 74)
  ); /* 标准的语法 */
}
.hotList {
  width: 16rem;
  overflow-x: scroll;
  white-space: nowrap;
}
.hotList li {
  display: inline-block;
  vertical-align: top;
  width: 5.632rem;
  height: 6.187rem;
  margin-left: 0.4rem;
  background: #fff;
  border-radius: 0.256rem;
  -moz-box-shadow: 0.085rem 0.085rem 0.213rem rgba(204, 204, 204, 0.349019607843137);
-webkit-box-shadow: 0.085rem 0.085rem 0.213rem  rgba(204, 204, 204, 0.349019607843137);
box-shadow: 0.085rem 0.085rem 0.213rem  rgba(204, 204, 204, 0.349019607843137);
}
.hotList li img {
  width: 4.864rem;
  height: 4.267rem;
  margin-top: 0.5rem;
  background:#f7f7f7;
}
.hotList li .hotListText {
  width: 4.864rem;
  margin: 0rem auto;
}
.hotGoodTitle {
  float: left;
  font-size: 0.58368rem;
  width: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align:left;
  color:#333;
}
.hotGoodPrice {
  float: right;
  font-size: 0.58368rem;
  width: 1.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #f00;
}
.liner-group {
  background: -webkit-linear-gradient(
    left,
    rgb(76, 141, 233),
    rgb(223, 146, 249)
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    rgb(76, 141, 233),
    rgb(223, 146, 249)
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    rgb(76, 141, 233),
    rgb(223, 146, 249)
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to right,
    rgb(76, 141, 233),
    rgb(223, 146, 249)
  ); /* 标准的语法 */
}
.groupMore {
  float: right;
  color: rgb(219, 146, 248);;
  font-size: 0.58rem;
  margin-top: 0.3rem;
  line-height: 0.64rem;
  margin-right: 0.5rem;
}
.groupList {
  width: 16rem;
}
.groupList li {
  width: 7.68rem;
  float: left;
  margin-left:0.227rem;
}
.groupBower {
  width: 7.68rem;
  /* margin:0 auto; */
  background: #fff;
  /* margin-left: 0.21rem; */
}
.groupGoodTitle {
  font-size: 0.6rem;
  line-height: 1rem;
  height: 2rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #333;
  width: 7.18rem;
  margin-left: 0 auto;
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
.xGoodPrice {
  font-size: 0.7rem;
  line-height:1.034rem;
  color: #f46360;
  width: 3.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
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
  background: #f00;
  color: #fff;
  text-align: center;
  display: inline-block;

  line-height: 1.165rem;
  float: right;
}
.liner-good {
  background: -webkit-linear-gradient(
    left,
    rgb(247, 87, 123),
    rgb(254, 82, 215)
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    rgb(247, 87, 123),
    rgb(254, 82, 215)
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    rgb(247, 87, 123),
    rgb(254, 82, 215)
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to right,
    rgb(247, 87, 123),
    rgb(254, 82, 215)
  ); /* 标准的语法 */
}
.fukuan {
  font-size: 0.5rem;
  text-align: right;
  width: 3rem;
  float: right;
  line-height: 1.165rem;
  color: rgb(217, 217, 217);
}
</style>
