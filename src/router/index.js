import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/tabbaritem//home/Home.vue')
const Category = () => import('../views/tabbaritem/Category.vue')
const Cart = () => import('../views/tabbaritem/Cart.vue')
const Profile = () => import('../views/tabbaritem/Profile.vue')
const Detail = () => import('../views/tabbaritem/detail/Detail.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Detail
  },
]

const router = new VueRouter({
  routes,
  mode:'history'
})
export default router