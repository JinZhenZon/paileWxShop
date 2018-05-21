import Vue from 'vue'
import Router from 'vue-router'
import home from '../home'
import near from "../near"
import me from "../view/me"
import searchAddress from "../view/searchAddress";
import searchAll from "../view/searchAll";
import searchList from "../view/searchList";
import wx from "../index.vue"


Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: '拍乐网',
      component: home,
    },{
        path:"/near",
        name:"附近",
        component:near,
    },
    ,{
      path:"/me",
      name:"我的",
      component:me,
  } ,{
    path:"/searchAddress",
    name:"搜索地址页面",
    component:searchAddress,
},{
  path:"/searchAll",
  name:"搜索商品页面",
  component:searchAll,
},{
  path:"/searchList",
  name:"搜索商品列表页面",
  component:searchList,
},{
  path:"/wx",
  name:"绑定微信",
  component:wx,
}
  ]
})
export default router;
  