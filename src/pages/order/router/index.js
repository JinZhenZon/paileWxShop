import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const orderIndex=() => import('../view/orderIndex');
const orderInsert = () => import('../view/orderInsert');

let router = new Router({
  routes: [
      {
        path :"/",
        component:orderIndex,
      },
      {
        path :"/orderInsert",
        component:orderInsert,
      },
    
  ]
})


export default router;
router.beforeEach((to,from,next)=>{
  if(localStorage.getItem('isLoginpaile8') == null){
    window.location.href = "index.html#/wx";
  }else{
    next();
  }
})