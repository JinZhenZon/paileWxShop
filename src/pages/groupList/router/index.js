import Vue from "vue"
import Router from "vue-router"
Vue.use(Router);
import groupList from "../view/groupList"
import groupedShow from "../view/groupedShow"
import groupingShow from "../view/groupingShow"
import groupListinsert from "../view/groupListinsert"


let routes = new Router({
routes:[
    {
        path:'/groupedList',
        name : "团购订单",
        component:groupList,
        children:[
            {
                path:"/groupedShow",
                name :"已团购",
                component:groupedShow,
            },{
                path:"/groupingShow",
                name : "待团购",
                component:groupingShow
            }
        ]
    },
    {
        path:"/groupListinsert",
        name : "待团购",
        component:groupListinsert
    }
]
})
export default routes;
routes.beforeEach((to,from,next)=>{
    if(localStorage.getItem('isLoginpaile8') == null){
      window.location.href = "index.html#/wx";
    }else{
      next();
    }
  })