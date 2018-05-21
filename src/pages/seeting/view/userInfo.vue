<template>
    <div ref = "box" style = "overflow:hidden;position:absolute;top:0;background:#f7f7f7;width:16rem;">
         <transition name="fade">
    <div v-if = "tip" style = "width:9rem;height:9rem;background:rgba(0,0,0,0.5);text-align:center;font-size:0.6rem;color:#fff;border-radius:1rem;position:fixed;top:50%;left:50%;margin-top:-4.5rem;margin-left:-4.5rem;">

        <span class = "iconfont" :class = "tipicon" style = "display:block;width:100%;font-size:1rem;line-height:2rem;position:relative;top:2rem;"></span>
        <span style = "position:relative;top:2.5rem;font-size:0.6rem;line-height:1rem;">
            {{tipText}}
        </span>
    </div>
 </transition>
        <!-- <div style = "font-size:0.683rem;line-height:1.707rem;color:#fff;width:16rem;margin-bottom:0.5rem;" class = "bg-index">
            <i style = "margin-left:0.5rem;" @click = "gohistroy" class = "iconfont icon-jiantou-copy"></i>
            <span style = "margin-left:0.5rem;">拍乐网</span>
            
        
            </div> -->

            <div style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem;margin-top:0.2rem;">
                        <div style = "width:15rem;margin-left:0.5rem">
                            <span style = "float:left">我的头像</span>
                            <i class = "iconfont icon-arrow-right-copy" style = "float:right;color:#aeaeae">

                            </i>
                            <span style = "float:right;margin-right:0.3rem;">
                                 <input type="file" id='image' accept="image/*"  style = "display:none;" ref="input" @change="tirggerFile">
                                 
                                <img :src="header_icon == ''?'https://passport.jd.com/new/misc/skin/df/i/no-img_mid_.jpg':header_icon" alt="" style = "width:1.28rem;height:1.28rem;margin-top:0.2135rem;" ref="img" @click = "replaceIcon">
                            </span>
                        </div>
                     
                </div>              
         <div style = "height:1px;background:#f7f7f7;clear:both;"></div>

            <div style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <router-link to = "/changePhone" tag = "div" style = "width:15rem;margin-left:0.5rem">
                            <span style = "float:left">手机号</span>
                            <i class = "iconfont icon-arrow-right-copy" style = "float:right;color:#aeaeae">

                            </i>
                            <span style = "float:right;margin-right:0.3rem;color:#aeaeae;">
                                {{phone}}
                            </span>
                        </router-link>
                </div>  

         <div style = "height:1px;background:#f7f7f7;clear:both;"></div>

            <div style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem" @click = "xiugaiN">
                        <div style = "width:15rem;margin-left:0.5rem">
                            <span style = "float:left">我的昵称</span>
                            <i class = "iconfont icon-arrow-right-copy" style = "float:right;color:#aeaeae">

                            </i>
                            <span v-show = "!xiugai"  style = "float:right;margin-right:0.3rem;color:#aeaeae;">
                                {{nickName}}
                            </span>
                            <input type="text" autocomplete  ref = "xiugai" id = "nickname" v-show = "xiugai" @blur="blurinput" @keyup.enter = "func" v-model="nickName" placeholder = "请输入新昵称" style = "float:right;margin-right:0.3rem;color:#aeaeae;border:1px solid #f7f7f7;outline:none;height:1.707rem;width:5rem;-webkit-appearance: none;">
                        </div>
                     
                </div>  

         <div style = "height:0.5rem;background:#f7f7f7;clear:both;"></div>

            <div style = "line-height:1.707rem;color:#000;background:#fff;height:1.707rem;font-size:0.683rem">
                        <div style = "width:15rem;margin-left:0.5rem">
                            <span style = "float:left">性别</span>
                            <i class = "iconfont icon-arrow-right-copy" style = "float:right;color:#aeaeae">

                            </i>
                            <span style = "float:right;margin-right:0.3rem;color:#aeaeae;position:relative;width:1rem;height:1rem;margin-top:0.3535rem">
                                <select name="sex" id="sex" ref = "select" v-model = "sex" style = "display:block;position:absolute;width:1rem;height:1rem;opacity:0;">
                                    <option value="0">男</option>
                                    <option value="1">女</option>
                                    
                                </select>
                                <div @click = "selectShow" style = "line-height:1rem;">
                                    {{sex == 0? "男":"女"}}
                                </div>
                            </span>
                            
                        </div>
                     
                </div>  












                <div style = "position:fixed;bottom:0;width:16rem;height:2.134rem;background:#fff;">
                    <div style = "width:12.8rem;height:1.28rem;margin:0 auto; margin-top:0.427rem; border-radius:1.28rem;text-align:center;color:#fff;font-size:0.64rem;line-height:1.28rem;" class = "bg-index" @click = "save">保   存</div>
                </div>


            
    </div>
</template>

<script>
import $ from "jquery"
import {ufload} from "@/api/ufload.js"
import {IP,PORT,base_uploadUrl,promiseAjax} from "@/api/api"
export default {
    data(){
        return {
            header_icon:'',
            elInput: null,
            sex:0,
            file:"",
            nickName :"",
            phone:"",
            tipText:"",
            tip:false,
            xiugai:false,
            nickName2 :"",
            tipicon:""
        }
    },

        methods:{


blurinput(){
    if(this.nickName==""){
        alert('昵称不允许为空');
    }else{
    this.xiugai = false;
    }

},
 func(e){
     

                // alert(1);
               var keyCode = window.event? e.keyCode:e.which;
                  
                if(keyCode==13) {  
                   
                        return false;
                }
        },




            xiugaiN(){
                this.xiugai = true;
                // 同时肯定不行异步执行一下
                this.nickName2 = this.nickName;
       
                this.nickName = "";
      
            },
            selectShow(){
                    $('#sex').attr("size",2); 
            },
               

            save(){

                // 又拍云上传使用这个file

      


                // console.log(this.file)



                if(this.file != ""){
                        ufload(this.file).then((data)=>{
                            var header_icon = `${base_uploadUrl}`+JSON.parse(data).url;
                           
                     promiseAjax(`http://${IP}:${PORT}/paile-service/api/userHandler/update`,{
                                    nickName:this.nickName,
                                    headIcon:header_icon,
                                    sex : this.sex,
                                    phone:this.phone,
                                    
                             
                                }).then((data)=>{
                                    if(data.code ==0){
                                        localStorage.setItem("paile8UserInfo",JSON.stringify(data.datas));                                        
                                        // 验证成功
                                        this.tipText = "修改成功"
                                        this.tipicon = 'icon-duihao'
                                        
                                        // this.$router.push('/changePhone2')
                                        this.tip = true;
                                        setTimeout(()=>{
                                            this.tip = false;
                                            this.$router.push('/userInfo');
                                        },2000)
                                    }else{
                                        // 验证失败
                                        this.tipText = "修改失败"  
                                        this.tipicon = 'icon-cuohao'
                                                                              
                                        this.tip = true;
                                        setTimeout(()=>{
                                            this.tip =false;
                                        },2000)
                                    }
                           
  
                        }).catch((error)=>{
                            console.log(error);
                        })
              

                        })
                }else{
                    // 不传头像
                      promiseAjax(`http://${IP}:${PORT}/paile-service/api/userHandler/update`,{
                                    
                                    nickName:this.nickName,
                                    sex : this.sex,
                                    phone:this.phone,
                                }).then((data)=>{
                                    
                                    if(data.code ==0){
                                        localStorage.setItem("paile8UserInfo",JSON.stringify(data.datas));
                                      
                                        // 验证成功
                                        this.tipText = "修改成功"
                                        this.tipicon = 'icon-duihao'
                                        
                                        // this.$router.push('/changePhone2')
                                        this.tip = true;
                                        setTimeout(()=>{
                                            this.tip = false;
                                            this.$router.push('/userInfo');
                                        },2000)
                                    }else{
                                        // 验证失败
                                        this.tipText = "修改失败"   
                                        this.tipicon = 'icon-cuohao'
                                                                             
                                        this.tip = true;
                                        setTimeout(()=>{
                                            this.tip =false;
                                        },2000)
                                    }
                           
  
                        }).catch((error)=>{
                            console.log(error);
                        })
                    
                }
                
                        //在这里进行ajax

               
            },
            tirggerFile(e){
                
                this.lookimg();
            },
            
            // 预览img
            lookimg(){
                 const refs = this.$refs
                const elInput = refs.input
                const elImg = refs.img
                const reader = new FileReader();
                    reader.onload = (e) => {
                        //获取图片真实的宽高 
                        const src = e.target.result;

                        elImg.onload = () =>{

                        }
                        elImg.src = src;
                    };
                    if (elInput.files && elInput.files[0]) {
                        reader.readAsDataURL(elInput.files[0]);

                    }
            },
            replaceIcon(){
                document.getElementById("image").click();
            },
        gohistroy(){
            window.history.go(-1);
        }

    },

    mounted(){

        console.log(JSON.parse(localStorage.getItem('paile8UserInfo')))
        this.header_icon = JSON.parse(localStorage.getItem('paile8UserInfo')).head_icon;
             this.nickName = JSON.parse(localStorage.getItem('paile8UserInfo')).nickname;
        this.sex = JSON.parse(localStorage.getItem('paile8UserInfo')).sex;
   
        this.phone = JSON.parse(localStorage.getItem('paile8UserInfo')).phone;

        

           this.$refs.box.style.height = (document.body.clientHeight ||window.innerHeight)+"px";

            // 1. 在老版本的安卓中，必须加上capture，否则只能调用相册 2. 在IOS中 加了capture，就只能调用摄像头不能调用相册 判断安卓还是ios
            var file = document.querySelector('input');
                    if (getIos()) {
                        file.removeAttribute("capture");
                    }
                    function getIos() {
                        var ua=navigator.userAgent.toLowerCase();
                        if (ua.match(/iPhone\sOS/i) == "iphone os") {
                            return true;
                        } else {
                            return false;
                        }
                    }
            //压缩图片 




             function dataURLtoFile(dataurl, filename) {//将base64转换为文件
                            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
                            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                            while(n--){
                                u8arr[n] = bstr.charCodeAt(n);
                            }
                            return new File([u8arr], filename, {type:mime});
                        }












  var successCount = 0;
  /**
   * 闭包中的构造方法
   * @param evt 上传文件域的change事件对象
   * @param options 用户定义参数（图片压缩质量，处理完成回调函数，图片输出格式）
   */
  var ImageCompress = function (evt, options) {
      console.log(1);
    var that = this;
    
    //读取图片
    var originalImage = this.readFile(evt, options.onloadStart, function(originalImage){
      if(typeof options.onloadEnd === 'function'){
        options.onloadEnd(originalImage);
      }
      
      if(typeof options.oncompressStart === 'function'){
        options.oncompressStart(originalImage);
      }

      //读取完成，压缩图片
      var compressImage = that.compress(originalImage, options.quality, options.outputFormat);

      if(typeof options.oncompressEnd === 'function'){
        options.oncompressEnd(compressImage);
      }

      successCount++;

      return compressImage;
    }, options.callback);


  }

  // 原型方法
  /**
   * 压缩图片
   * @param imageObj 图片对象
   * @param quality 压缩质量
   * @param outputFormat 图片输出格式
   * return returnImageObj 返回压缩后的图片对象
   */
  ImageCompress.prototype.compress = function(imageObj, quality, outputFormat){
    var mimeType = "image/jpeg";
    if(outputFormat!=undefined && outputFormat=="png"){
      mimeType = "image/png";
    }


    var cvs = document.createElement('canvas');
    //naturalWidth真实图片的宽度
    cvs.width = 100;
    cvs.height = 100;
    var ctx = cvs.getContext("2d").drawImage(imageObj, 0, 0,cvs.width,cvs.height);
    var newImageData = cvs.toDataURL(mimeType, quality/100);
    var returnImageObj = new Image();
    returnImageObj.src = newImageData;

    return returnImageObj;
  }

  /**
   * 读取图片
   * @param evt 上传文件域的change事件对象
   * @param onloadCallback 当文件读取完毕后的回调
   */
  ImageCompress.prototype.readFile = function(evt, onloadStart, onloadCallback, callback) {
    var files = evt.target.files;
    var length = files.length;

    for (var i = 0, file; file = files[i]; i++) {
      // 只处理图片
      if (!file.type.match('image.*')) {
        continue;
      }
      if(typeof onloadStart === 'function'){
        onloadStart(file);
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile, index) {
        return function(e) {
          // Render thumbnail.
          var img = new Image();

          img.src = e.target.result;
          if(typeof onloadCallback === 'function') onloadCallback(img);

          //用户回调函数
          if(typeof callback === 'function' && successCount == length){
            callback(img);
            successCount = 0;
          }
        };
      })(file);

        // Read in the image file as a data URL.
      reader.readAsDataURL(file);
    }
  }
  //默认参数
  ImageCompress.DEFAULTS = {

  }
  //在jQuery对象上提供的静态方法
  $.extend({
    
  });
  //如果有原型方法
  $.fn.extend({
    imageCompress: function(options) {
      var $this = $(this);
      $this.on('change', function(evt){
        var model = new ImageCompress(evt, options);
      });
    }
  });
  //noconflict
  $.fn.imageCompress.noConflict = function () {

  }
  //代理的事件监听




                $('#image').imageCompress({
                    'quality': 80,
                    'onloadStart': function(result){
                     
                    },
                    'onloadEnd': function(result){
                    
                    },
                    'oncompressStart': function(result){
                  
                    },
                    'oncompressEnd': (result) =>{
                         //    在这里转换文件
                        this.file = dataURLtoFile(result.src,"header_icon")
                    },
                    'callback': function(){
                   







                    }
                });
















    },
}
</script>

<style scoped>
    @import url("../../../public/Adaptation.css");
@import url("../../../public/iconfont.css");
  .bg-index{
    background: -webkit-linear-gradient(left, #fdb591 , #ea5556); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #fdb591, #ea5556); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #fdb591, #ea5556); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #fdb591 ,#ea5556); /* 标准的语法 */
  }
      .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
