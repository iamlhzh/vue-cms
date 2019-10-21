<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{newsinfo.title}}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间:{{ newsinfo.add_time | dateFormat }}</span>
      <span>点击:{{ newsinfo.click }}次</span>
    </p>
    <hr>
    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content">
    </div>
    <!-- 评论子组件区域 -->
    <div><comments-box :id="newsinfo.id"></comments-box></div>
  </div>
</template>
<script>
import {Toast} from 'mint-ui'
//导入评论子组件
import comment from '../subcomponents/comment.vue'
export default {
  data(){
    return{
      id:this.$route.params.id,
      newsinfo:{}
    }
  },
  created(){
    this.getnewsinfo();
  },
  methods:{
    getnewsinfo(){
      this.$http.get('api/getnew/'+this.id).then(result=>{
        if(result.body.status===0){
          this.newsinfo=result.body.message[0];
          // console.log(result)
        }else{
          Toast('加载失败')
        }

      })
    }
  },
  components:{//用来注册子组件的
    'comments-box':comment
  }
}
</script>
<style>
.newsinfo-container{
  padding:0 4px;
}
.newsinfo-container .title {
font-size: 16px;
text-align: center;
margin: 15px 0;
color: red
}
.newsinfo-container .subtitle {
  font-size: 13px;
  color:#226aff;
  display: flex;
  justify-content: space-between;

}
.newsinfo-container .content img{
  width:100%
}
</style>


