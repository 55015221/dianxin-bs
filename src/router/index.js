import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//页面模块
import Index from '@/views/index/'
import About from '@/views/about/'
// import Service from '@/views/service/'
import Product from '@/views/product/'
import Contact from '@/views/contact/'
// import Questions from '@/views/questions/'
// import Solution from '@/views/solution/'

Vue.use(VueRouter)
Vue.use(VueResource)


//  配置前端请求路径
const mockPath = '/static/mock/'
window.mockPath = mockPath

//
Vue.http.options.headers = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
}
Vue.http.options.emulateJSON = true

const router = new VueRouter({
  mode: 'history',   //URL 不会带#
  base: __dirname,
  //设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 linkActiveClass 来全局配置。
  linkActiveClass: 'active',
  routes: [
    { path: '/', redirect: '/index' },   //默认页面
    { path: '/index', name: 'index', component: Index },
    { path: '/about', name: 'about', component: About },
    //{ path: '/service', name: 'service', component: Service },
    { path: '/product', name: 'product', component: Product },
    //{ path: '/questions', name: 'questions', component: Questions },
    //{ path: '/solution', name: 'solution', component: Solution },
    { path: '/contact', name: 'contact', component: Contact }
  ]
})

// 页面跳转前的钩子函数
// 注册路由切换前
router.beforeEach((to, from, next) => {
  console.log(to.path)
  next()
})

//  注册路由切换后
router.afterEach(route => {
  //console.log(route)
})

export default router
