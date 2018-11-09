import Vue from 'vue'
import Router from 'vue-router'
// 导入登录组件
import Login from '@/components/Login.vue'
// 导入home组件
import Home from '@/components/Home.vue'

Vue.use(Router)

const router = new Router({
  routes: [

    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

router.beforeEach((to, form, next) => {
  const token = localStorage.getItem('token')
  if (to.path === '/login' || token) {
    next()
  } else {
    next('/login')
  }
})

export default router
