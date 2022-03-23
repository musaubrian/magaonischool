import { createRouter, createWebHistory } from 'vue-router'
import{getUserState} from '../firebase'
import Home from '../views/HomePage.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Assignments from '../views/Assignments.vue'
import Uploads from '../views/NewsLetterandFee.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {requiresUnauth: true}
  },

  {
    path: '/home',
    redirect: '/'
  },

  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {requiresUnauth: true}
  },

  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      title: 'Admin',
      requiresAuth: true
    }
  },
  {
    path: '/uploads',
    name: 'uploads',
    component: Uploads,
    meta: {
      title: 'Uploads',
      requiresAuth: true
    }
  },
  {
    path: '/assignments',
    name: 'Assignments',
    component: Assignments,
    meta: {
      title: 'Assignments',
      requiresAuth: true
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
// for pages not found
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '404',
    requiresUnauth: true
  }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth)

  const isAuth = await getUserState()

  if (requiresAuth && !isAuth) next('/login')
  else if (requiresUnauth && isAuth) next('admin')
  else next()
})

export default router
