import VueRouter from 'vue-router'

import homeContainer from './components/tabbar/homeContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import shopcartContainer from './components/tabbar/shopcartContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'
import newsList from './components/news/newsList.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photos/photolist.vue'
import photoinfo from './components/photos/photoinfo.vue'
import goodsList from './components/goods/goodsList.vue'


//3.创建路由对象
var router =new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeContainer},
    {path:'/member',component:memberContainer},
    {path:'/shopcart',component:shopcartContainer},
    {path:'/search',component:searchContainer},
    {path:'/home/newsList',component:newsList},
    {path:'/home/newsinfo/:id',component:newsinfo},
    {path:'/home/photolist',component:photolist},
    {path:'/home/photoinfo/:id',component:photoinfo},
    {path:'/home/goodsList',component:goodsList}

  ],
  linkActiveClass:'mui-active'//默认覆盖路由高亮的类，默认的类叫做router-link-active
})


export default router