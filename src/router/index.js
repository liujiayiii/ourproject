import Vue from 'vue'
import Router from 'vue-router'
// 导入刚才编写的组件
 import Login from '@/components/Login'
import AppIndex from '@/components/home/AppIndex'
import Register from "../components/Register";
Vue.use(Router)


export default new Router({

  routes: [
      {
     path: '/login',
     name: 'Login',
     component: Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
  {
   path: '/index',
    name: 'AppIndex',
   component: AppIndex

  },

   ]
})
