import Vue from 'vue'
import Router from 'vue-router'
import confimeOrder from '../page/confimeOrder'
import address  from "../page/address"



Vue.use(Router)

const router =  new Router({
  routes: [
   {
  path:"/",
  name:"确认订单",
  component:confimeOrder,
},
{
    path:"/address",
    name:"收货地址",
    component:address,
  }
  ]
})
export default router;
  