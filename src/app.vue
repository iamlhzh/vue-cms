<template>
  <div class="app-container">
  <!-- 顶部区域 -->
<mt-header fixed title="黑马程序员"></mt-header>
<h1>nihao</h1>
  <!-- 中间的 路由router-view区域 -->

<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
  <!-- 底部的Tabbar区域 -->
  </div>
</template>

<script>

export default{
  data(){
    return{
    };
  },
  methods:{

  }
};

</script>

<style>
.app-container{
  padding:40px;
}

</style>
