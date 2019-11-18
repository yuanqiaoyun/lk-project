import Vue from 'vue'
import Router from 'vue-router'

// 1.引入一级组件
import DashBoard from '../views/dashBoard/DashBoard'
//因为是点击的时候才有可能出现这些东西的，所以采用懒加载的方式
const Home = ()=>import('../views/home/Home.vue');
const Category = ()=>import('../views/category/Category.vue');
const Cart = ()=>import('../views/cart/Cart.vue');
const Mine = ()=>import('../views/mine/Mine.vue');
Vue.use(Router);

export default new  Router({
    routes:[
      //首先要有一个路由重定向
      {
        path:'/',
        redirect:'/dashboard'
      },
      {
        path:'/dashboard',
        name:'dashboard',
        component:DashBoard,
        children:[
          {
            path:'/dashboard',
           redirect:'/dashboard/home'
          },
          {
            path:'home',
            name:'home',
            component:Home,
          },
          {
            path:'category',
            name:'category',
            component:Category,
          },
          {
            path:'cart',
            name:'cart',
            component:Cart,
          },
          {
            path:'mine',
            name:'mine',
            component:Mine,
          }
        ]
      },
     
    ]
})