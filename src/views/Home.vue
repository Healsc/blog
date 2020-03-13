<template>
  <div class="home">
    <!-- 顶部背景图片开始 后期封装一个组件显示 -->
    <header class="home-top">
      <div class="home-top-content">
        <h1>HEAL's  Blog</h1>
        <p>在说做不到之前不要说放弃</p>
      </div>
    </header>
   <!--顶部背景图片结束-->
    <main class="main">
       <!-- 左侧区域开始 展示五个更新时间最近的文章 -->
      <div class="main-left">
        <ul>
          <li v-for="(item,index) in articleList" :key="index">
              <div class="main-left-contents">
                <h3 class="main-left-contents-title">{{item.title}}</h3>
                <p class="main-left-contents-content">{{ item.Introduction}}
                </p>
                <span class="main-left-contents-time">{{item.time}}</span>
              </div>
          </li>
        </ul>
      </div>
      <!-- 作业区域结束 -->
      <!-- 右侧区域开始 展示个人信息 -->
      <div class="main-right">
        <div class="main-right-userinfo">
          <h3 class="main-right-userinfo-title">简介</h3>
          <p>孙闯</p>
          <p>NEAU2017级</p>
          <p>计算机科学与技术专业</p>
          <p>Email ：healsc@163.com</p>
          <p>QQ：398736770</p>
        </div>
      </div>
      <!-- 右侧区域 个人信息结束 -->
    </main>

   
    
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios';
import url from '@/service.config.js'
export default {
  
  name: 'Home',
  data() {
    return {
      articleList:[],
      msg:"hello"
    }
  },
  components: {
   
  },
  created(){
    this.getArticle();
  },
  methods: {

    /* 或许home页面文章列表 */
    getArticle(){
      axios({
        url:url.getHomeArticle,
        method:'get'
      }).then((res)=>{
        this.articleList = res.data
        console.log(this.articleList)
      }).catch((err)=>{
        console.log(err)
      })
    }
  },
 
  mounted(){
   
  }
}
</script>
<style lang="scss" scoped>
.home{
  &-top{
    width: 100%;
    height: 350px;
    background-repeat: no-repeat;
    background-image: url('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2667296977,3947410930&fm=26&gp=0.jpg');
    background-size: 100% 100%;
    &-content{
        text-align: center;
        padding-top: .6rem;
        color: #fff;
        h1{
          font-weight: 700;
        }
        p{
          font-size:16px
        }
    }
  }
}
.main{
  width: 70%; /* 区域显示为70% */
  margin-left: 15%;
  display: flex; /* 使用弹性盒子 左侧区域70% 右侧30% */
  &-left{
    flex-basis: 70%;
    padding: .1rem .1rem 0 .1rem;
    li{
      border-bottom: 1px solid rgba($color: #ddd, $alpha: .4);
      margin-bottom: .1rem;
      background-color: #fff;
      padding-bottom: .1rem;
    }
    &-contents{
     
      padding-left: .2rem;
      flex-direction: column;
      position: relative;
      &-title{
        font-size: 24px;
        color: #555555;
        font-family: 'Microsoft Yahei';
        margin-bottom: 10px;
      }
      &-content{
        font-size: 16px;
        color:#999999;
        font-family: 'Microsoft Yahei';
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      &-time{
        font-size: 14px;
        color:#999999;
        font-family: 'Microsoft Yahei';
      }
    }

    
  }
  &-right{
    flex-basis: 30%;
    text-align: center;
    &-userinfo{
      
      height: 1rem;
      margin-top: .4rem;
      display: flex;
      flex-direction: column;
      &-title{
        color: #242f35;
        font-size: 20px;
        font-family: 'Microsoft Yahei';
        flex-grow: 1;
      }
      p{
        flex-grow: 1;
        color: #666666;
        font-size: 16px;
        font-family: 'Microsoft Yahei';
      }
    }
    
  }
}
@media  screen and (max-width: 750px) {
  .home{
    &-top{
      height: 250px;
    }
  }
    .main{
      width: 90%;
      margin-left: 5%;
      flex-direction: column;
    }
}
</style>