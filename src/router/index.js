import Vue from 'vue'
import Router from 'vue-router'

// 首页
const Home = () => import('view/home')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
