import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect:'/home/home-hot',
    children:[
      {path:'home-hot',component:()=>import('../views/home/home-hot.vue')},
      {path:'home-new',component:()=>import('../views/home/home-new.vue')},
      {path:'home-more',component:()=>import('../views/home/home-more.vue')}
    ]
  },
  {
    path: '/user/:id?',
    name: 'user',
    component: ()=>import('../views/user.vue'),
    children:[
      {path:'add',component:()=>import('../views/cart.vue')}
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: ()=>import('../views/cart.vue'),
    // redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import('../views/login.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // } ,
  {
    path: '/reg',
    name: 'reg',
    component: ()=>import('../views/reg.vue')
  },
  {
    path: '/class',
    name: 'class',
    component: ()=>import('../views/class.vue')
  },
  {
    path: '/categories',
    name: 'categories',
    component: ()=>import('../views/categories.vue')
  },
  {
    path: '/goods',
    name: 'goods',
    component: ()=>import('../views/goods.vue')
  },
]

const router = new VueRouter({
  routes
})
// 路由守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path == '/login' || to.path == '/add'){
//     next();
//   }else{
//     alert('您还没有登录，请先登录');
//     next('/login');
//   }
// })
export default router
