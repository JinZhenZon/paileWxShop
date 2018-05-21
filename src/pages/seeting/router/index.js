import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const seetingIndex=() => import('../view/seetingIndex')
const accont = () => import('../view/accont')
const changePhone = () => import ('../view/changePhone')
const changePhone2 = () => import('../view/changePhone2')
const changePassword = () => import ('../view/changePassword')
const lookme = () => import ('../view/lookme')
const userInfo = () => import('../view/userInfo')
const tongyong = () => import('../view/tongyong')


let router =  new Router({
  routes: [
      {
        path :"/",
        component:seetingIndex,
      },
      {
        path :"/accont",
        component:accont,
      },{
        path:"/changePhone",
        component:changePhone
      },{
        path:"/changePassword",
        component:changePassword
      },{
        path:"/lookme",
        component:lookme
      },{
        path:"/userInfo",
        component:userInfo
      },{
        path:"/tongyong",
        component:tongyong,
      },{
        path:"/changePhone2",
        component:changePhone2,
      }
  ]
})

export default router
router.beforeEach((to, from, next)=>{
  if(JSON.parse(localStorage.getItem('isLoginpaile8'))==null){
    window.location.href = "index.html#/wx"
  }else{
    next();
  }
 
})