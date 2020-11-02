import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')
// const Detail = () => import('views/detail/Detail')npm

//1.通过Vue.use(),安装插件
Vue.use(VueRouter)

//2.创建vueRouter对象
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    },
    // {
    //     path: '/detail',
    //     component: Detail
    // }
]

const router = new VueRouter({
    //配置路由和组件之间的映射关系
    routes,
    mode:'history',
    // LinkActiveClass:'active'
})

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

//3.导出router
export default router