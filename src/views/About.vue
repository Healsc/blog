<template>
  <div class="about">
    <header class="top">
      <div class="top-content">
        <h1>About Me</h1>
        <p>一个正在学习的前端的人</p>
      </div>
    </header>
  
    <main class="content">
      <div>
        <h1>关于我</h1>
        <p>东北农业大学2017级在校学生</p>
        <p>计算机科学与技术专业</p>
      </div>
      <div>
        <h1>个人经历</h1>
        <p>大二接触前端，开始接触html/css/js</p>
        <p>熟练掌握C， java， PHP， jsvaScript等单词的拼写.熟练掌握C， 
          java， PHP， jsvaScript等单词的拼写.熟练掌握C， 
          java， PHP， jsvaScript等单词的拼写</p>
        <p>熟练掌握C， java， PHP， jsvaScript等单词的拼写</p>
        <p>熟练掌握C， java， PHP， jsvaScript等单词的拼写</p>
        <p>熟练掌握C， java， PHP， jsvaScript等单词的拼写</p>
      </div>
      <div>
        <h1>项目经历</h1>
        <p>熟练掌握C， java， PHP， jsvaScript等单词的拼写</p>
        <p>熟练掌握C， java， PHP， jsvaScript等单词的拼写</p>
        <p>熟练掌握C， java， PHP， jsvaScript等单词的拼写</p>
        <p>熟练掌握C， java， PHP， jsvaScript等单词的拼写</p>
      </div>
    </main>
    <!-- <div class="container">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583941901996&di=a3d2226e4a7fcbf042e1c3d9bd869aba&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160620%2Fbd944ec6cce94fd88074c1ea08080424_th.jpg" alt="">
    </div> -->
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
  background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583859769829&di=0404878be0e27814fca0c125b52bfa9b&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20161122%2F20161122184944_ab4916244e194677b52b8c7d0b4e5623_12.jpeg');
  background-size: 100% 100%;
  /* position: relative; */
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
/* .container{
  background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583941393545&di=e0f401b2d755244dcd3bab22f612a984&imgtype=0&src=http%3A%2F%2Flux.chnart.com%2Fuploadfile%2F2013%2F0709%2F20130709090715347.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  opacity: .1;
} */
.content{
  padding: 20px;
  width: 70%;
  margin-left: 15%;;
  font-family: 'Microsoft Yahei';
  h1{
    color: #242f35;
    padding: 5px 0 5px 16px;
   

    height: 20px;
    line-height: 20px;
    font-size: 18px;
    font-weight: 700;
  }
  p{
    font-size: 16px;
    text-indent: 2em;
    line-height: 30px;
  }
}
/* .container{
  position: absolute;
  top: 350px;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: .8;
  z-index: -1;
  img{
    width: 100%;
    height: 100%;
  }
} */
</style>
