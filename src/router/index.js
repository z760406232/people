import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'ppt',
    component: () => import('../views/ppt.vue')
  },
  {
    path: '/zhaoshang',
    name: 'zhaoshang',
    component: () => import('../views/zhaoshang.vue')
  },
  {
    path: '/writemsg',
    name: 'WriteMsg',
    component: () => import('../views/WriteMsg.vue')
  }
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('../views/Home.vue')
  // },
  // {
  //   path: '/table',
  //   name: 'Table',
  //   component: () => import('../views/Table.vue')
  // },
  // {
  //   path: '/tableform',
  //   name: 'TableForm',
  //   component: () => import('../views/TableForm.vue')
  // },
  // {
  //   path: '/result',
  //   name: 'Result',
  //   component: () => import('../views/Result.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
