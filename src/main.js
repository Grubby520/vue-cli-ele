import App from '../App'
import VueRouter from 'vue-router'
import routes from './router/index'
import store from './store/'
import { routerMode } from './config/env';




const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

export default [{
  path: '/',
  component: App, //index.html
  hildren: [ // App.vue
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    }
  ]
}]