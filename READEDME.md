##制作首页APP组件
1.完成Header区域，使用的是Mint-UI中的Header组件
2.制作底部的Tabbar区域，使用的是MUI的Tabbar.html
  +在制作购物车图标的时候，操作多一些
  +先把扩展图标的css样式拷贝到项目中
  +拷贝扩展字体库ttf文件，到项目中
  +为购物车小图标，添加如下样式 'mui-icon mui-icon-extra mui-icon-extra-cart'
3.要在中间区域放置一个router-view来展示路由匹配到的组件

##改造tabbar为router-link


##设置路由高亮


##点击tabbar中的路由链接，展示对应的路由组件

##制作首页轮播图布局


##加载首页轮播图数据
1.获取数据，通过vue-resource获取
2.使用vue-resource的this.$http.get获取数据
3.获取到的数据，要保存到data身上
4.使用 v-for 循环渲染 每个 item项

##改造九宫格区域的样式

##改造新闻资讯路由链接

##新闻资讯 页面 制作
1.绘制界面,使用MUI中的media-list.html
2.使用vue-resource获取数据
3.渲染真实数据

##实现新闻资讯列表 点击跳转到新闻详情
1.把列表中的每一项改造为router-link,同时,在跳转的时候应该提供唯一的id标识符
2.创建新闻详情的组件页面newsinfo.vue
3.在路由模块中,将新闻详情的路由地址和组件页面对应起来


##实现新闻详情的页面布局和数据渲染

##单独