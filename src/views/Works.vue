<template>
    <div>
        <div class="top">
            <div class="top-content">
                <h1>My Works</h1>
                <p>干啥啥不行，吃啥啥不剩</p>
            </div>
        </div>
        <main class="main">
          <div class="main-works">
            <p class="main-works-title">这是项目名称</p>
            <p class="main-works-time">2020-02-02</p>
            <p class="main-works-content">这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
              
              这里加个点击事件跳转到项目地址或者github上
            </p>
          </div>

          <div class="main-works">
            <p class="main-works-title">这是项目名称</p>
            <p class="main-works-time">2020-02-02</p>
            <p class="main-works-content">这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
            </p>
          </div>
          <div class="main-works">
            <p class="main-works-title">这是项目名称</p>
            <p class="main-works-time">2020-02-02</p>
            <p class="main-works-content">这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
              这是简介这是简介这是简介这是简介
            </p>
          </div>

        <div class="main-works">
            <p class="main-works-title">这是项目名称</p>
            <p class="main-works-time">2020-02-02</p>
            <p class="main-works-content">这是简介这是简介这是简介这是简介
              使用axios请求后端数据 使用循环 ，遍历后端传过来的数据。但是啊， 没做过项目， 哪有数据 。干啥啥不行， 吃啥啥不剩。
            </p>
          </div>

        </main>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.top{
  width: 100%;
    height: 350px;
    background-repeat: no-repeat;
    background-image: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3399945878,388913725&fm=11&gp=0.jpg');
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
.main{
  width: 70%;
  margin-left: 15%;
  margin-top: .1rem;;
 
  &-works{
    margin-bottom: .1rem;
    border-bottom: 1px solid rgba($color: #ddd, $alpha: .4);
    font-family: 'Microsoft Yahei';
    padding: .1rem;
    &-title{
      font-size: 20px;
      font-weight: 700;
    }
    &-time{
      font-size: 12px;
    }
    &-content{
      font-size: 16px;
    }
  }
}
</style>