<template>
    <div ref = "box" style = "width:16rem;overflow-y:scroll;position:absolute;top:0;background:#f7f7f7;" >
        <div v-if = "!hidemenu">
                <div v-if = "tsee" @click = "hide" style = "position:fixed;z-index:1000;background:rgba(0,0,0,0.5);width:100%;height:100%;overfloaw:hidden;text-align:center;" id = "pover" ref = "pover">
                <div :style = "Ibox" style = "text-align:center;display:inline-block"><img :src="imgSrc" alt="" :style = "imgheight"></div>
        </div>
         
                <!-- 其中一条订单 -->
  
            <!-- <div style = "position:fixed;top:0;font-size:0.683rem;line-height:1.707rem;color:#fff;width:16rem;z-index:10;" class = "bg-index">
                <i style = "margin-left:0.5rem;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
                <span style = "margin-left:0.5rem;">拍乐网</span>
            </div>
             <div class = "clearfloat" style = "height:1.707rem;background:#fff;"></div> -->
             <div>
               <div style  = "clear:both;" v-for = "(item,myI) in goodInfmArr" :key = "myI">
           
            <div style = "background:#fff;width:16rem;">
            <div style = "width:15rem;margin-left:0.5rem;padding-top:0.5rem;background:#fff;" class = "clearfloat">

                <div style = "width:3.67rem;float:left;">
                  <img :src="item.cover_url" style = "height:3.67rem;width:3.67rem" alt="">
                </div>
                <div style = "width:10.7rem;float:right">
                          <p style = "font-size:0.597rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">
                                    {{item.name}}
                                </p>
                                <div style = "margin-top:0.5rem;">
                                <p style = "font-size:0.6rem;width:3rem;float:left">
                                  品质等级:   </p>
      <div class="clearfloat" style = "width:7rem;float:left;margin-top:-0.3rem;">
                <div class="col-md-8">
                    <div class="grade-box">
                    
                        <img v-for="(star,index) in item.stars"  :key = "index" v-on:click="rating(item,index,myI)" alt="星星图片" style = "width:0.8rem;height:0.8rem;" :src="star.active?'./static/colorStar.png':'./static/grayStar.png'"/>
                      
                    </div>
                </div>
            </div>
            </div>
                             
                </div>
            </div>
</div>
          <div style = "height:0.25rem;background:#f7f7f7"></div>
            
           <div class = "clearfloat" style = "clear:both;background:#fff;">
                <div style = "width:15rem;margin:0 auto;">
               <p style = "font-size:0.512rem;line-height:1.451rem;float:left;">卖家留言</p>
                <div style = "text-align:center;font-size:0.512rem;line-height:0.8rem;" >
                    <textarea rows = "3" v-model = "item.words" style = "width:15rem;resize:none;border:1px solid #f7f7f7;border-top:1px solid #f7f7f7;-webkit-appearance: none">
                    </textarea>
                </div>
                </div>
 
            </div> 

       

          <div>

             
              <div style = "width:16rem;background:#fff">
                   <div style = "height:0.5rem"></div>
              <div style = "width:15rem;margin-left:0.5rem;">
                  <p  style = "font-size:0.512rem;">
                    上传图片
                 
                  </p>
              </div>
              <!-- 上传框 -->
                 <div style = "display:inline;">
                        <!-- img列表 -->
                    <span style = "display:inline-block;position:relative;margin-left:0.5rem;width:1.536rem;height:1.536rem;margin-top:0.8rem;" v-for = "(i,index) in item.showImg" :key = "i.src" >
                            <img :src="i.src" alt="" style = "width:1.536rem;height:1.536rem;" @click = "seeimg(index,myI)"/>
                            <div @click = "remove(index,item,myI)" style = "position:absolute;width:0.5rem;top:-0.25rem;right:-0.25rem;height:0.5rem;font-size:0.4rem;color:#fff;border-radius:50%;">
                                <img src="../../../static/x.png" alt="" style = "width:0.5rem;border-radius:50%;">
                            </div>
                    </span>
                    </div>
                 <div style = "display:inline;" :style = "item.showImg.length == 0 ? '':'position:relative;top:-0.2rem;'">

                     <input type="file" class='image' accept="image/*"  style = "display:none;" v-on:change="tirggerFile(item,myI)">
                     
                     <i class = "iconfont icon-tianjia1" style = "font-size:1.536rem;margin-left:0.5rem;color:#aeaeae"  @click = "addimgArr(myI)">

                     </i>
                    <!-- <img :src="header_icon" alt="" style = "width:1.28rem;height:1.28rem;margin-top:0.2135rem;" ref="img"> -->
              </div>

        
          </div>
            <div style = "height:0.2rem;background:#fff;"></div>
          <div style = "height:0.25rem;background:#f7f7f7"></div>
          
      
      
</div>

</div>



      <div style = "height:2.134rem"></div>
              
              </div>






     <div style = "width:16rem;background:#fff;height:2.134rem;position:fixed;bottom:0;border-top:1px solid #eee">
                <div @click = "submitP" style = "width:12.8rem;line-height:1.28rem;color:#fff;font-size:;text-align:center;border-radius:1.28rem;margin:0 auto;margin-top:0.4rem;font-size:0.555rem" class = "bg-index">
                    提交评价
                </div>
            </div> 




</div>
<div>
                  <transition name="fade">
                        <div  v-if = "hidemenu"  style = "width:9rem;height:9rem;background:rgba(0,0,0,0.5);text-align:center;font-size:0.6rem;color:#fff;border-radius:1rem;position:fixed;top:50%;left:50%;margin-top:-4.5rem;margin-left:-4.5rem;">

                            <span class = "iconfont icon-cuohao" style = "display:block;width:100%;font-size:1rem;line-height:2rem;position:relative;top:2rem;"></span>
                            <span style = "position:relative;top:2.5rem;font-size:0.6rem;line-height:1rem;">
                                订单查找失败
                            </span>
                        </div>
                    </transition>
</div>
    </div>
</template>

<script>
import {IP,PORT,base_uploadUrl,promiseAjax} from "@/api/api.js"
import {splitQuery} from "@/api/getQuery.js"
import {ufload} from "@/api/ufload.js"
export default {
     //星星的图片路径
  data(){
    return {
                    imgArr:[],
                    tsee:false,
                    imgSrc:"",
                    imgheight:{},
                    Ibox:{},
                    orderId :"",
                    goodInfmArr:[],
                    imgGroupUrlTexT:"",
                    imgUrlArr:[],
                    hidemenu:"",
                    gohistroyem:0,
}
  },
  methods: {
      hide(){
          this.tsee = false
      },
seeimg(index,myI){
    let img = this.goodInfmArr[myI].showImg[index].src;
    let imgbox = new Image();
        imgbox.src = img;
        imgbox.onload = ()=>{
        //    获取图片的宽高 后期会有用
            if(imgbox.height > imgbox.width * 1.8){
                    // 图片预设高度 rem
                    let height = (document.body.clientHeight || window.innerHeight)/((document.body.clientWidth || window.innerWidth)/16)/(16/15);
                                    // 宽高比               高度
                    let t =  (imgbox.width/imgbox.height)*height;
                    // 图片的样式
                let imgStyle =  {
                    height:height + "rem",
                    width:t+"rem",
                }
                // 图片盒子样式
       let Ibox = {
                    position:"absolute",
                    top:"50%",
                    marginTop:-(height/2)+"rem",
                    marginLeft:-(t/2)+"rem"
                };
                this.imgheight = imgStyle;
                this.Ibox = Ibox;
            }else{
                // 计算图片高度
                let t =  (imgbox.height)/((imgbox.width)/15);
                let imgStyle = {
                    width:"15rem",
                    height:t+'rem',
                }

                let Ibox = {
                    position:"absolute",
                    top:"50%",
                    marginTop:-(t/2)+"rem",
                    marginLeft:"-7.5rem"
                }
      
                this.imgheight = imgStyle;
                this.Ibox = Ibox;
            }
                this.imgSrc = img;
                this.tsee = true;
        }
},
    // 上传多图
    upanyload(fileList, index ,index2, str = "") {
      return new Promise((resolve, reject) => {
        ufload(fileList[Math.floor(index)])
          .then((data) => {
            if (JSON.parse(data).code == 200) {
                if(Math.floor(index) == 0) {
                    
                  str = `${base_uploadUrl}`+JSON.parse(data).url
          
                }else{
                  str= str + ','+ `${base_uploadUrl}`+JSON.parse(data).url
                    

                }
              if (Math.floor(index) < fileList.length - 1) {
          
                
                index = Math.floor(index) + 1;
          
                
                return this.upanyload(fileList, index,index2,str)
                  .then(data => {
                    return resolve();
                  })
                  .catch(() => {
                    return reject();
                  });
              } else {
                
                  this.imgUrlArr[index2] = str;
                return resolve();
              }
            } else {
              reject();
            }
          })
          .catch(() => {
            reject();
          });
      });
    },

minnifest(item){
     return new Promise((res,rej)=>{
        
         var length = item.length;
           if(length == 0){
               return res([]);
           }
         
         var i = 0;
         var arr = [];
         item.map((item2,index) =>{

              var file = this.dataURLtoFile(item2.src);
                  this.photoCompress(file,"").then(data =>{
                     
                      arr[i] = data;
                      if(i == length - 1){
                          res(arr);
                      }else{
                        i++;                          
                      }

                  })
         })
     })
},
submitpingjia(dataarr,index){
    
    let imgUrls = "";

    if(dataarr.length == 0){
       imgUrls = ""
    }else if(dataarr.length ==1){
        imgUrls = dataarr[0]
    }else{
      
       imgUrls = dataarr[index]
    }
   
  promiseAjax(` http://${IP}:${PORT}/paile-service/api/cargoMsgHandler/createCargoMsg`,{
      orderId : this.orderId,
      userId : this.userId,
      cargoId : this.goodInfmArr[index].id,
      content:this.goodInfmArr[index].words,
      parentId:null,
      imgUrls,
      rate1 : this.goodInfmArr[index].starNum
  }).then((data)=>{
        console.log(index,data);
        this.gohistroyem++;
        if(this.gohistroyem == this.goodInfmArr.length){
            window.history.go(-1)
        }
        

  })    
// console.log(1,this.goodInfmArr);
},
// 提交评价

submitP(){
    let i = 0;

    this.goodInfmArr.map((item,index231)=>{
            // 加入没有图片的时候
            if(item.showImg.length == 0){
                let arr = [];
          
                this.submitpingjia(arr,index231)
            }
            else{
                // 有图片的评价 
                    this.minnifest(item.showImg).then(data =>{
              
                            data = data.map((item) =>{
                                var obj = {
                                    src : item
                                };
                            
                                return obj
                            })
                    item.showImg = data;
                            // 压缩后转成file文件
                            item.showImg = item.showImg.map((item2)=>{

                                        var file = this.dataURLtoFile(item2.src);
                                                return file
                            });
                            // 调用上传接口
                           this.upanyload(item.showImg,0,index231).then((data)=>{
                                console.log('已经上传完成',i,item.showImg)       
                                // if(i++ == item.showImg.length -1){
                         
                                    this.submitpingjia( this.imgUrlArr,index231);
                                // }
                            
                            })
                        
                });
            }
      

    })

        
    

  
},
remove(index,item,myI){
    item.showImg = item.showImg.filter((item,i)=>{
        if(i == index){
          return false;
        }else{
          return true;
        }
    })
    this.$set(this.goodInfmArr,myI,item);
},
//       当前组 第几课 第几组
  rating(item,index,index2) {
                      
                        var total = item.stars.length; //星星总数
                        var idx = index + 1; //这代表选的第idx颗星-也代表应该显示的星星数量

                        //进入if说明页面为初始状态
                        if(item.starNum == 0) {
                            item.starNum = idx;
                            for(var i = 0; i < idx; i++) { 

                                item.stars[i].active = true;
                            }
                        } else {
                  
                            
                            //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
                            if(idx == item.starNum) {
                                for(var i = index; i < total; i++) {
                
                                    item.stars[i].active = false;
                                }
                            }
                            //如果小于当前最高星级，则直接保留当前星级
                            if(idx < item.starNum) {
                                for(var i = idx; i < item.starNum; i++) {
                  
                                    item.stars[i].active = false;
                                }
                            }
                            //如果大于当前星级，则直接选到该星级
                            if(idx > item.starNum) {
                                for(var i = 0; i < idx; i++) {
                          
                                    item.stars[i].active = true;
                                }
                            }

                            var count = 0; //计数器-统计当前有几颗星
                            for(var i = 0; i < total; i++) {
                                if(item.stars[i].active) {
                                    count++;
                                }
                            }
                            item.starNum = count;
                
                        };
        
                  
                         
                        
                        this.$set(this.goodInfmArr,index2,item);
                        
                    },
        photoCompress(file,w){
            return new Promise((resolve,reject) =>{
                var ready=new FileReader();
                            var _this = this;
                            /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
                            ready.readAsDataURL(file);
                            ready.onload=function(){
                                var re=this.result;
                                _this.canvasDataURL(re,w).then((data) =>{
                                    resolve(data);
                                })
                            }
            })
           
        },
        canvasDataURL(path, obj){
            return new Promise((resolve,reject) =>{
                    var img = new Image();
                    img.src = path;
                    img.onload = function(){
                        var that = this;
                        // 默认按比例压缩
                        var w = that.width,
                            h = that.height,
                            scale = w / h;
                        w = obj.width || w;
                        h = obj.height || (w / scale);

                        var quality = 0.5;  // 默认图片质量为0.7
                        //生成canvas
                        var canvas = document.createElement('canvas');
                        var ctx = canvas.getContext('2d');
                        // 创建属性节点
                        var anw = document.createAttribute("width");
                        anw.nodeValue = w;
                        var anh = document.createAttribute("height");
                        anh.nodeValue = h;
                        canvas.setAttributeNode(anw);
                        canvas.setAttributeNode(anh);
                        ctx.drawImage(that, 0, 0, w, h);
                        // 图像质量
                        if(obj.quality && obj.quality <= 1 && obj.quality > 0){
                            quality = obj.quality;
                        }
                        // quality值越小，所绘制出的图像越模糊
                        var base64 = canvas.toDataURL('image/jpeg', quality);
                        // 回调函数返回base64的值
            
                            resolve(base64)
                    }
            })
        
        },



    tirggerFile(item,ind){
            
                this.lookimg(item,ind);
            },
            // 预览img
            lookimg(item,index){
             
                // webapi
                 const elInput = document.getElementsByClassName("image")[index];
             
                const reader = new FileReader();
                    reader.onload = (e) => {
                        const src = e.target.result;
                     
                        const srcobj  = {
                          src : src
                        };
                        item.showImg.push(srcobj)

                        this.$set(this.goodInfmArr,index,item)
                   
                
                    };
                    if (elInput.files && elInput.files[0]) {
                        reader.readAsDataURL(elInput.files[0]);
                    }
            },
            addimgArr(myI){
                
                document.getElementsByClassName("image")[myI].click();
            },
dataURLtoFile(dataurl, filename) {//将base64转换为文件

                            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                            while(n--){
                                u8arr[n] = bstr.charCodeAt(n);
                            }
                            return new File([u8arr], filename, {type:mime});
                        },
            getOrderInfo(){
          
                promiseAjax(`http://${IP}:${PORT}/paile-service/api/orderHandler/getOrderDetailsById`,{
                    orderId : this.orderId,
                }).then(data =>{
                    // this.goodInfmArr = data.datas;
                    this.goodInfmArr = data.datas.cargoJsonList; 
                            console.log(data);
                    if(this.goodInfmArr.length == 0){
                        this.hidemenu = true;
                        console.log(1)
                        setTimeout(() => {
                   
                                window.location.href('order.htm')
                        }, 1000);
                        return false
                    }
                    console.log(3);
                    
                    





                        this.goodInfmArr.map((item) =>{
                         
                            item.stars = [
                                {
                                    active: false
                                }, {
                                    active: false
                                }, {
                                    active: false
                                },
                                {
                                    active: false
                                }, {
                                    active: false
                                }
                            ];
                            item.starNum = 0;
                            item.words = "";
                            item.showImg = [];
                        })

                })
            },







    gohistroy() {
      window.history.go(-1)
    
    },
  },









created(){
    // $.get('http://115.159.58.79/paile-service/api/cargoMsgHandler/getFirstCargoMsg?cargoId=4&userId=3&index=0&length=10',function(res){
    //     console.log(2,res);
    // })
},


  mounted() {

      let height = (document.body.clientHeight || window.innerHeight) + "px"

    this.$refs.box.style.height =height;

    $('#pover').height = height;
    splitQuery().then((data)=>{
        this.orderId = data.orderId;
        this.getOrderInfo();
    })
  }
}
</script>

<style scoped>
    
  @import url("../../public/Adaptation.css");
  @import url("../../public/iconfont.css");
.bg-index {
  background: -webkit-linear-gradient(
    0deg,
    rgba(254, 182, 146, 1) 0%,
    rgba(254, 182, 146, 1) 0%,
    rgba(234, 84, 85, 1) 100%,
    rgba(234, 84, 85, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(254, 182, 146, 1) 0%,
    rgba(254, 182, 146, 1) 0%,
    rgba(234, 84, 85, 1) 100%,
    rgba(234, 84, 85, 1) 100%
  );
}

.fade-enter-active,.fade-leave-active{
    transition:opacity .3s;
}
.fade-enter,.fade-leave{
    opacity: 0;
}
</style>
