//入口文件
import Vue from 'vue'

//导入App根组件
import app from './App.vue'

import 'mint-ui/lib/style.css'
//导入mui的样式
import './lib/mui/css/mui.min.css'
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

var vm=new Vue({
  el:'#app',
  render:c=>c(app)
})