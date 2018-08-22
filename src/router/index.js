import App from '../App'

const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')

export default [{
  path: '/',
  component: App, //顶层路由，index.html
  hildren: [ // 二级路由，App.vue
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
