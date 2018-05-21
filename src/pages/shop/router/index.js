import Vue from 'vue'
import Router from 'vue-router'
import shopIndex from "../view/shopIndex"
import shopAll from "../view/shopAll"
import shopGroup from "../view/shopGroup"
import shopSearch from "../view/shopSearch"
import shopsearched from "../view/shopsearched"



Vue.use(Router)

export default new Router({
  routes: [
    {
      path : "/shopSearch",
      component:shopSearch,
      
    }, {
      path : "/shopsearched",
      component:shopsearched,
      
    },
    {
      path:"/",
      component:shopIndex,
      children:[
        
          {
            path:"/shopAll",
            component:shopAll
          },{
            path:"/shopGroup",
            component:shopGroup,
          },{
            path:"/shopsearched",
            component:shopsearched,
          },
        
      ]
    },
  ]
})
