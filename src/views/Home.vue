<template>
  <div class="home">
   <header class="home-top">
      <div class="home-top-content">
        <h1>HEAL's  Blog</h1>
        <p>一个正在学习的前端的人</p>
      </div>
    </header>
   
    <main class="main">
       <!-- 左侧区域 -->
      <div class="main-left">
        <ul>
          <li>
              <div class="main-left-img"><img src="" alt=""></div>
              <div class="main-left-contents">
                <h3 class="main-left-contents-title">搭建博客</h3>
                <p class="main-left-contents-content">
                
                  搭建博客搭建博客，搭建博客，搭建博客，搭建博客，搭建博客搭建博客搭
                建博客搭建博客，，搭建博客，搭建博客，搭建博客
                搭建博客。搭建博客。搭建博客。搭建博客。搭建博客
                熟练掌握C， java， PHP， jsvaScript等单词的拼写

                熟练掌握C， java， PHP， jsvaScript等单词的拼写
                熟练掌握C， java， PHP， jsvaScript等单词的拼写
                </p>
                <span class="main-left-contents-time">2020-03-11</span>
              </div>
          </li>

          <li>
              <div class="main-left-img"><img src="" alt=""></div>
              <div class="main-left-contents">
                <h3 class="main-left-contents-title">搭建博客</h3>
                <p class="main-left-contents-content">搭建博客搭建博客，搭建博客，搭建博客，搭建博客，搭建博客搭建博客搭
                建博客搭建博客，，搭建博客，搭建博客，搭建博客
                搭建博客。搭建博客。搭建博客。搭建博客。搭建博客
                </p>
                <span class="main-left-contents-time">2020-03-11</span>
              </div>
          </li>

          <li>
              <div class="main-left-img"><img src="" alt=""></div>
              <div class="main-left-contents">
                <h3 class="main-left-contents-title">搭建博客</h3>
                <p class="main-left-contents-content">搭建博客搭建博客，搭建博客，搭建博客，搭建博客，搭建博客搭建博客搭
                建博客搭建博客，，搭建博客，搭建博客，搭建博客
                搭建博客。搭建博客。搭建博客。搭建博客。搭建博客
                </p>
                <span class="main-left-contents-time">2020-03-11</span>
              </div>
          </li>

        </ul>
      </div>
      <!-- 右侧区域 -->
      <div class="main-right">
        <div class="main-right-userinfo">
          <h3 class="main-right-userinfo-title">简介</h3>
          <p>NEAU2017级</p>
          <p>计算机科学与技术专业</p>
          <p>Email ：healsc@163.com</p>
          <p>QQ：398736770</p>
        </div>
      </div>
    </main>
     
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
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
   
    //background-color: #ccc;
    li{
      border: 1px solid rgba($color: #ddd, $alpha: .4);
      display: flex; /* 弹性盒子 title为1 content为3  time为内容撑开 */
      margin-top: .1rem;
      background-color: #fff;
    }
    &-img{
      flex-basis: 20%;
      width: 1rem;
      height: 1rem;
      background-color: red;
      img{
         width: .8rem;
         height: .8rem;
      }
    }
    &-contents{
      padding: 20px;
      flex-basis: 75%;
      flex-wrap: wrap;
      padding-left: 5%;
      display: flex;
      flex-direction: column;
      &-title{
        font-size: 24px;
        color: #555555;
        font-family: 'Microsoft Yahei';
        margin-bottom: 10px;
        flex: 1;
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
        flex: 3;
      }
      &-time{
        font-size: 16px;
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
</style>