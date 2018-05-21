<template>
    <div id = "footerMenu">
              <div style = "height:3rem;width:16rem;z-index:1;background:#f7f7f7;"></div>
                <div style = "height:2.134rem;width:16rem;position:fixed;z-index:1;background:#fff;border-top:1px solid #eee;bottom:0; display: -webkit-flex;display: flex;justify-content:space-around;
                    align-item:center;
                ">


                 <router-link to="/" tag = "div">
                        <div style = "color:#333;margin-top:0.35rem;">
                            <i class = "iconfont icon-shouye-copy-copy-copy home"></i>
                        </div>
                 </router-link>

                      
                               <router-link to="/near" tag = "div" style = "margin-top:0.1rem;color:#333" class = "nearBox">
                            <i class = "iconfont icon-mudedi1 near"></i>
                        
                            
                            <p style = "font-size:0.597rem;line-height:1;margin-top:0;">
                                附近
                            </p>
                          </router-link>
                               <router-link to="/me" tag = "div" class = "wodeBox" style = "margin-top:0.1rem;">
                            <i class = "iconfont icon-wode wode"></i>
                            <p style = "font-size:0.597rem;margin：0;line-height:1;margin-left:-0.1rem;margin-top:0;">
                                我的
                            </p>
                            </router-link>


                </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    @import url("../public/iconfont.css");
    .home{
        font-size:0.939rem;
        color:#fff;
        padding:0.3rem;
        padding-top:0.21rem;
        padding-bottom:0.39rem;
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
        border-radius: 50%;
    }
    .near{
        font-size:1.024rem;

    }
        .wode{
        font-size:1.024rem;
    }

</style>
