<template>
  
</template>

<script>
import {IP,PORT,promiseAjax} from "@/api/api.js"
import {splitQuery} from "@/api/getQuery.js"
export default {
    created(){
         splitQuery().then((datas)=>{
            if(datas.hasOwnProperty('code')){
                
                this.code = datas.code;
                // 雅虎api
                var target = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxeff484da324cfed2&secret=2273ecbe538004cdb2102de922a7d9fb&code=${datas.code}&grant_type=authorization_code`;
                     $.ajax({    
                        //雅虎代理url
                        url: 'http://query.yahooapis.com/v1/public/yql',    
                        //指定数据格式
                        dataType: 'jsonp',  
                        //雅虎代理要求的数据格式
                        data: {    
                            q: "select * from json where url=\'" + target+ "'",    
                            //代理返回格式
                            format: "json"
                        },    
                        success:  (data)=> {  

                               console.log(data.query);
                               var openid = data.query.results.json.openid;
                             
                               this.openid = openid;
                                // alert(this.openid);
                               console.log(this,this.openid)
                            //在控制台输出,页面按F12查看,  
                            promiseAjax(`http://${IP}:${PORT}/paile-service/api/userHandler/getUserInfoByWxCode`,{
                                openid,
                            }).then(data=>{
                                if(data.code ==1){
                                    // 没有绑定手机号那就跳转就可以了
                                    window.location.href = `login.html?openid=${this.openid}`;
                                    
                               }else if(data.code == 0){
                                //   证明已经绑定过了
                                      //  console.log(data.datas);

                                    let store = {
                                        userId:data.datas.id,
                                        openid:data.datas.oppenid,
                                        isLogin : true,
                                        phone:data.datas.phone,
                                    }
                                    localStorage.setItem("paile8Token",JSON.stringify(store));
                                    localStorage.setItem("paile8UserInfo",JSON.stringify(data.datas));
                                    localStorage.setItem('isLoginpaile8',JSON.stringify({logined:true}));
                                        // alert('即将跳转')
                                        window.location.href="index.html"

                               }else{
                                alert('授权微信失败');
                               }
                                
                            })
                        }    
                    });
            }else{
                var url1 = encodeURIComponent("http://paile8.com/wxmall/index.html#/wx");
                console.log(url1);
                var url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxeff484da324cfed2&redirect_uri=${url1}&response_type=code&scope=snsapi_base&agentid=AGENTID&state=STATE#wechat_redirect`
                window.location.href = url

            }
        })
    }
}
</script>

<style>

</style>
