import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import store from './store/'
import {routerMode} from './config/env'
import './config/rem'
import FastClick from 'fastClick'

// 移动端click事件300毫秒延迟，绑定到body上
if('addEventListener' in document){
  document.addEventListener('DOMContentLoaded', function(){
    FastClick.attach(document.body);
  }, false);
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: routerMode,
  /**
   * 在路由的history模式下，一些列表页利用缓存模式来记录位置（一般是返回不刷新，前进刷新）,一般用了scrollBehavior，同时还用keep-alive(缓存),activated(缓存下触发的钩子)配合做列表页的返回记录位置。缓存模式也有坑，就是何时清除缓存，一般是从新进入页面就清除。
   * 回到主题，滚动行为就是：例如一个列表页，滑动了很多，点进去、再返回记录刚刚的位置
   * @param {*} to 
   * @param {*} from 
   * @param {*} savedPosition 
   */
  scrollBehavior (to, from, savedPosition){
    if(savedPosition){
      return savedPosition;
    }
    else{
      if(from.meta.keepAlive){
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {x: 0, y: to.meta.savedPosition || 0};
    }
  }
})

new Vue({
  router,
  store,
}).$mount('#app')