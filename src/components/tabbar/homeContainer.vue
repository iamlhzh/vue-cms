<template>
  <div>
    <mt-swipe>
  <mt-swipe-item v-for="item in lunboList" :key="item.id">
        <img :src="item.img" alt=""/>
  </mt-swipe-item>
</mt-swipe>

    <h1>HomeContainer</h1>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default{
  data(){
    return{
      lunboList:[],
    }
  },
  created(){
    this.getLunbotu();
  },
  methods:{
    getLunbotu(){
      this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result=>{
        console.log(result.body)
        if(result.body.status===0){
          // Toast('加载轮播图成功')
          this.lunboList=result.body.message;
        }else{
          Toast('加载轮播图失败');
        }
      })
    }
  }
}
</script>

<style lang="scss">
.mint-swipe{
  height:200px;
  .mint-swipe-item{
  &:nth-child(1){
    background-color: black;
  }
  &:nth-child(2){
    background-color: red;
  }
  &:nth-child(3){
    background-color: blue;
  }
  img{
    width: 100%;
    height: 100%;
  }
}

}

</style>
