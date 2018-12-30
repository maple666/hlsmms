import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/useradd',
      name: 'useradd',
      component: () => import(/* webpackChunkName: "about" */ './views/UserAdd.vue')
    },
    {
      path: '/userlist',
      name: 'userlist',
      component: () => import(/* webpackChunkName: "about" */ './views/UserList.vue')
    },
    {
      path: '/pwdedit',
      name: 'pwdedit',
      component: () => import(/* webpackChunkName: "about" */ './views/UserPwdEdit.vue')
    },
    {
      path: '/sortmanagement',
      name: 'sortmanagement',
      component: () => import(/* webpackChunkName: "about" */ './views/SortManagement.vue')
    },
    {//添加分类
      path: '/addcategory',
      name: 'addcategory',
      component: () => import(/* webpackChunkName: "about" */ './views/AddCategory.vue')
    },
    {//添加商品
      path: '/addproduct',
      name: 'addproduct',
      component: () => import(/* webpackChunkName: "about" */ './views/AddProduct.vue')
    },
    {//商品管理
      path: '/goodsmanagement',
      name: 'goodsmanagement',
      component: () => import(/* webpackChunkName: "about" */ './views/GoodsManagement.vue')
    },
    {//添加库存
      path: '/addstock',
      name: 'addstock',
      component: () => import(/* webpackChunkName: "about" */ './views/AddStock.vue')
    },
    {//库存管理
      path: '/stocklist',
      name: 'stocklist',
      component: () => import(/* webpackChunkName: "about" */ './views/StockList.vue')
    }
  ]
})
