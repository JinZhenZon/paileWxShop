<template>
  <div style = "margin-top:0.5rem;">

           <div style = "background:#f7f7f7">
                    <ul class = "groupList clearfloat">
                           
                      <li v-for = "(item,index) in list" :key = "index">
                        <a :href="item.goodUrl">
                        <div class = "groupBower"  style = "height:12.5rem;">
                              <img style = "width:100%;height:8.777rem;" v-lazy= "item.cover_url" alt="">
                              
                              <div class = "clearfloat" style = "width:7.2rem;margin:0 auto;">
                                    <p class = "groupGoodTitle">
                                   {{item.name}}
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
      <!-- 加载 -->
                        <div v-if = "loading" style = "clear:both;text-align:center;margin-top:0.5rem;">
                        <img src="../../../../static/loading.gif" alt="" style = "width:2rem;height:2rem;">
                    </div>    
               
                <div v-show = "last0" style = "clear:both;font-size:0.5rem;color:#aeaeae;line-height:2rem;text-align:center;">我们也是有底线的</div>    


           </div>


  </div>
</template>

<script>
import { IP, PORT, promiseAjax } from "@/api/api.js";
export default {
    data(){
        return{
 shopId : "",
 list :[],
   loading:false,
            startIndex:0,
            length:7,
            list:[],
            last0:false,
            Ajax:false,
            shopId:"",
            userId:"",
        }
       
    },
    methods:{
        getList(){
            console.log(1)
            promiseAjax(`http://${IP}:${PORT}/paile-service/api/cargoHandler/getGroupCargoByShop`,{
                shopId:this.shopId,
                index:this.startIndex,
                length:this.length
            }).then((data)=>{

                this.loading = false;

         
                        for(let i =0; i<data.datas.length;i++){
                           
                            data.datas[i].goodUrl = `groupGoodShow.html?userId=${this.userId}&cargoId=${data.datas[i].id}`
                        }
                
                    this.list = data.datas;
                     if(this.list == 7){
                                //   判断是否是最后了
                                    this.Ajax = true;
                                  this.loading = false;
                                    
                                    this.last0 = false;
                                    

                              }else{
                                  this.loading = false;
                                  this.last0 = true;
                              this.last0 = true;
                                  
                                  
                              }





            }).catch((err)=>{
                this.last0 = false;
            this.loading = false;
        })
        }
    },
    created(){
           this.loading = true;
       this.shopId = this.$route.query.shopId;
              this.userId=localStorage.getItem('paile8Token')!=null?JSON.parse(localStorage.getItem('paile8Token')).userId:""
        this.getList();

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
                this.last0 = false;
                                    

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
    @import url("../../../public/Adaptation.css");
@import url("../../../public/iconfont.css");
* {
  margin: 0;
  padding: 0;
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
  width: 6.588rem;
  margin-left: 0.2rem;
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
</style>
