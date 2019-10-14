<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{ newsinfo.add_time | dateFormat }}</span>
      <span>点击:{{ newsinfo.click }}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content">


    </div>
  </div>
</template>
<script>
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
          console.log(result)
        }else{
          Toast('加载失败')
        }

      })
    }
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


