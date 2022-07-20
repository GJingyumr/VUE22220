import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout'),
    redirect: '/',
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/home'),
        meta: {
          title: '控制台'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/404/404.vue')
      }
    ]
  },

  // 商品管理
  {
    path: '/goods',
    name: 'goods',
    component: () => import('../layout'),
    children: [
      {
        path: '/goods/list',
        name: 'goods-list',
        component: () => import('../views/goods-list'),
        meta: {
          title: '商品管理'
        }
      },
      {
        path: '/category/list',
        name: 'category-list',
        component: () => import('../views/goods-category'),
        meta: {
          title: '分类管理'
        }
      },
      {
        path: '/skus/list',
        name: 'skus-list',
        component: () => import('../views/goods-skus'),
        meta: {
          title: '规格管理'
        }
      },
      {
        path: '/coupon/list',
        name: 'coupon-list',
        component: () => import('../views/goods-coupon'),
        meta: {
          title: '优惠券管理'
        }
      }
    ]
  },
  // 用户管理
  {
    path: '/user',
    name: 'user',
    component: () => import('../layout'),
    children: [
      {
        path: '/user/list',
        name: 'user-list',
        component: () => import('../views/user-list'),
        meta: {
          title: '用户管理'
        }
      },
      {
        path: '/level/list',
        name: 'level-list',
        component: () => import('../views/user-level'),
        meta: {
          title: '会员等级'
        }
      }
    ]
  },
  // 订单管理
  {
    path: '/order',
    name: 'order',
    component: () => import('../layout'),
    children: [
      {
        path: '/order/list',
        name: 'order-list',
        component: () => import('../views/order'),
        meta: {
          title: '订单管理'
        }
      },
      {
        path: '/comment/list',
        name: 'comment-list',
        component: () => import('../views/comment'),
        meta: {
          title: '评论管理'
        }
      }
    ]
  },
  // 管理员管理
  {
    path: '/manager',
    name: 'manager',
    component: () => import('../layout'),
    children: [
      {
        path: '/manager/list',
        name: 'manager-list',
        component: () => import('../views/manager'),
        meta: {
          title: '管理员管理'
        }
      },
      {
        path: '/access/list',
        name: 'access-list',
        component: () => import('../views/access'),
        meta: {
          title: '权限管理'
        }
      },
      {
        path: '/role/list',
        name: 'role-list',
        component: () => import('../views/role'),
        meta: {
          title: '角色管理'
        }
      }
    ]
  },
  // 系统设置
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../layout'),
    children: [
      {
        path: '/setting/base',
        name: 'setting-base',
        component: () => import('../views/setting'),
        meta: {
          titile: '基础设置'
        }
      }
    ]
  }
  // 其他模块
  // {
  //   path: '/image',
  //   name: 'image',
  //   component: () => import('../layout'),
  //   children: [
  //     {
  //       path: '/image/list',
  //       name: 'image-list',
  //       component: () => import('../views/'),
  //       meta: {
  //         titile: '基础设置'
  //       }
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
