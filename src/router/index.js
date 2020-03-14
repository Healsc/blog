import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:'/article',
    name:'Article',
    component:()=>import('@/views/Article.vue')
  },{
    path:'/works',
    name:'Works',
    component:()=>import('@/views/Works.vue')
  },{
    path:'/articleDetail/:id',
    name:'ArticleDetail',
    component:()=>import('@/views/ArticleDetail.vue')
  },{
    path:'/test',
    name:'Test',
    component:()=>import('@/views/test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
