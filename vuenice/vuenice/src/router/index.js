import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//导入页面
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import article from '../components/article.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    component: Register,
    name: 'Register'
  },
  {
    path: '/login',
    component: Login,
    name: 'Login'
  },
  {
    path: '/article/:id',
    component: article,
    name:'article'
  }
]

const router = new VueRouter({
  routes
})

export default router
