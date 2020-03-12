<template>
  <div class="home">
    <header class="home-top">
      <div class="home-top-content">
        <h1>HEAL's  Blog</h1>
        <p>在说做不到之前不要说放弃</p>
      </div>
    </header>
   
    <main class="main">
       <!-- 左侧区域 -->
      <div class="main-left">
        <ul>
          <li>
              <div class="main-left-contents">
                <h3 class="main-left-contents-title">搭建博客</h3>
                <p class="main-left-contents-content">搭建博客搭建博客
                </p>
                <span class="main-left-contents-time">2020-03-11</span>
              </div>
          </li>

          <li>
             
              <div class="main-left-contents">
                <h3 class="main-left-contents-title">节流</h3>
                <p class="main-left-contents-content">
                有时候我们可能为了性能需要把页面中的图片进行懒加载处理，
                那么我们就需要对浏览器的滚动条进行事件监听，判断我们的滚动条是否在我们设置的可视化范围之内，
                进而改变图片的真实src到达性能优化的目的。由于滚动条事件触发是比较快的，
                如果我们不做处理会处理很多次，反而大大的消耗了浏览器的性能。
                </p>
                <span class="main-left-contents-time">2020-03-10</span>
              </div>
          </li>

          <li>
              <div class="main-left-contents">
                <h3 class="main-left-contents-title">防抖</h3>
                <p class="main-left-contents-content">
                 
                  当我们对input搜索框需要做关键词选择的时候，如百度搜索的输入关键字选择热搜语句，
                  我们可以对输入input框绑定onChang事件，当停止输入一段时间（如200ms），向后端发送请求，将获取关键词数据渲染出来。
                  做页面适配的时候，我们需要对window.resize事件进行监听。
                  我们只需要最后窗口的宽高，那我们就可以使用防抖，当最后一次变化时进行页面适配。
                  对图片进行懒加载的时候，如果我们已经滑到最底部的时候，
                  如果不对上拉事件进行限制，那么用户用户快速上滑几次，则会多次想后端发送请求，同时前端每次响应请求的时候会频繁的修改DOM。
                </p>
                <span class="main-left-contents-time">2020-03-03</span>
              </div>
          </li>

          <li>
              <div class="main-left-contents">
                <h3 class="main-left-contents-title">我们都是追梦人</h3>
                <p class="main-left-contents-content">
                 
                  2019悄然结束，从年前到现在的一件件事，一幅幅画面缺丢失不去。时不时浮现在眼前，
                  仿佛经历就在昨天。不论对喜悦的留恋，还是对坏事的惋惜。
                  时间不会因为你的留恋而有所停足，岁月也不会因为你的惋惜而倒回。旧梦结束的地方，是新梦开始的地方。
                    校开展的课程很多，但是大多数课只是学习到了完成期末考试不挂科，很少进行深入。
                </p>
                <span class="main-left-contents-time">2020-03-02</span>
              </div>
          </li>

        </ul>
      </div>
      <!-- 右侧区域 -->
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
    </main>

    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  
  name: 'Home',data() {
    return {
     
    }
  },
  components: {
   
  },

  methods: {
    
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
.test{
  margin-bottom: 1rem;
  margin-left: 1rem;
}
</style>