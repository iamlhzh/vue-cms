//入口文件
import Vue from 'vue'

//导入App根组件
import app from './App.vue'

//1.1 导入路由的包
import VueRouter from 'vue-router'
//1.2 安装路由
Vue.use(VueRouter)




// import 'mint-ui/lib/style.css'
//导入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
// import { Header,Swipe, SwipeItem,Button,Lazyload } from 'mint-ui';

// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);

// Vue.use(Lazyload)
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
//1.3 导入自己的router.js路由模块
import router from './router.js'

//安装图片预览插件
import VuePreview from 'vue-preview'
 
// defalut install
Vue.use(VuePreview)

//导入基础访问地址
import vueresource from './vueresource.js'

//导入过滤器
import filter from './filter.js'
var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router//1.4 挂载路由对象到VM实例上
})