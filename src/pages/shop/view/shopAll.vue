<template>
    <div style = "background:#f7f7f7">
            <ul>
                <li style = "width:16rem;border-bottom:1px solid #f7f7f7;background:#fff;" v-for = "(item,index) in list" :key = "index">
                   
                    <div style = "height:0.5rem">

                    </div>
                     <a :href="item.goodUrl">
                    <div class = "clearfloat" style = "width:15rem;margin:0 auto;">
                        <div class = "left" style = "width:3.367rem">
                            <img v-lazy="item.cover_url" style = "width:3.67rem;height:3.67rem" alt="">
                        </div>
                        <div class = "right" style = "width:11rem;">
                            <div style = "display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;color:#333;font-size:0.534rem;">
                                    {{item.name}}
                            </div>
                            <div style = "height:0.6rem"></div>
       

            
                            <div class = "clearfloat">
                                <p class = "left" style = "font-size:0.554rem;color:#FA742B;width:3rem;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;">￥{{item.price}}</p>
                                <p class = "left" style = "width:4rem;overflow:hidden;text-overflow:ellipsis;white-space: nowrap;font-size:0.512rem;color:#aeaeae">{{item.count == ""?0:item.count}}人付款</p>
                         
                            </div>
                        </div>
                    </div>
                     </a>
                    <div style = "height:0.5rem"></div>
                   
                </li>
                
            </ul>

   
                        <!-- 加载 -->
                        <div v-if = "loading" style = "clear:both;text-align:center;margin-top:0.5rem;">
                        <img src="../../../../static/loading.gif" alt="" style = "width:2rem;height:2rem;">
                    </div>    
               
                <div v-show = "last0" style = "clear:both;font-size:0.5rem;color:#aeaeae;line-height:2rem;text-align:center;">我们也是有底线的</div>    








    </div>
</template>

<script>
import { IP, PORT, promiseAjax } from "@/api/api.js";
export default {
  data() {
    return {
      shopId: "",
      list: [],
      loading: false,
      startIndex: 0,
      length: 7,
      list: [],
      last0: false,
      Ajax: false,
      userId:"",
      orderType:1,
    };
  },
  methods: {
    getList() {
     return new Promise((resolve,reject)=>{
      promiseAjax(
          `http://${IP}:${PORT}/paile-service/api/cargoHandler/getCargoesByShopId`,
          {
            shopId: this.shopId,
            index: this.startIndex,
            length: this.length,
            orderType:this.orderType,
            descType :1
          }
        ).then(data=>{
          resolve(data);
        });
     })

    }
  },
  watch:{
    '$route.params'(){
        this.orderType = this.$route.query.by;
        this.getList().then(data => {
  
          console.log(data);
          this.loading = false;
          data.datas.forEach(value => {
            value.goodUrl =
              "goodShow.html?userId=" +
              this.userId +
              "&cargoId=" +
              value.id;
          });
          this.list = data.datas;
          if (this.list == 7) {
            //   判断是否是最后了
            this.Ajax = true;
            this.loading = false;

            this.last0 = false;
          } else {
            this.loading = false;
            this.last0 = true;
            this.last0 = true;
          }
        })
        .catch(err => {
          this.last0 = false;
          this.loading = false;
        });
    }
  },
  created() {
    this.loading = true;
    this.shopId = this.$route.query.shopId;
  
    this.userId=localStorage.getItem('paile8Token')!=null?JSON.parse(localStorage.getItem('paile8Token')).userId:""
    this.getList().then(data => {
  

          this.loading = false;
          data.datas.forEach(value => {
            value.goodUrl =
              "goodShow.html?userId=" +
              this.userId +
              "&cargoId=" +
              value.id;
          });
          this.list = data.datas;
          if (this.list.length == 7) {
            //   判断是否是最后了
            this.Ajax = true;
            this.loading = false;

            this.last0 = false;
          } else {
            this.loading = false;
            this.last0 = true;
            this.last0 = true;
          }
        })
        .catch(err => {
          this.last0 = false;
          this.loading = false;
        })

    let _this = this;
    //  触底检测
    $(window).scroll(function() {

      var scrollTop = $(this).scrollTop();
      var scrollHeight = $(document).height();
      var windowHeight = $(this).height();
      if (scrollTop + windowHeight >= scrollHeight - 50) {
        if (_this.Ajax) {
          _this.Ajax = false;
          _this.loading = true;
          _this.startIndex += 7;
          _this.getList().then(data => {
            console.log(1,data);
            // 判断是否是最后了
            _this.list.push(...data.datas);
            if (data.datas.length == 7) {
              //   判断是否是最后了
              _this.Ajax = true;
              _this.loading = false;
              this.last0 = false;
            } else {
              _this.loading = false;
              _this.last0 = true;
              _this.Ajax = false;
            }
          });
        }
      }
    });
  }
};
</script>

<style scoped>
@import url("../../../public/Adaptation.css");
@import url("../../../public/iconfont.css");
* {
  margin: 0;
  padding: 0;
  list-style: none;
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
</style>
