// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Adaptation from "@/public/Adaptation"
import VueLazyLoad from "vue-lazyload"
Vue.config.productionTip = false
Vue.use(VueLazyLoad,{
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: [ 'scroll' ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  Adaptation,
  template: '<App/>'
})

