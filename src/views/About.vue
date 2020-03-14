<template>
  <div class="about">
    <HeaderBC :childData="bcInfo"/>
  
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
    <div @click="goHander">
      
    </div>
  </div>
</template>

<script>
import HeaderBC from '@/components/HeaderBC.vue';
  export default {
    data(){
      return{
         bcInfo:{
            title:"About Me",
            content:'在说做不到之前不要放弃',
            imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583859769829&di=0404878be0e27814fca0c125b52bfa9b&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20161122%2F20161122184944_ab4916244e194677b52b8c7d0b4e5623_12.jpeg"
        }
      }
    },
    methods: {
      goHander(){
        alert('hello world')
      }
    },
    components:{
      HeaderBC
    }
  }
</script>

<style lang="scss" scoped>
.content{
  margin-top: .2rem;
  width: 70%;
  margin-left: 15%;
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
@media  screen and (max-width: 750px) {
    .content{
      width: 90%;
      margin-left: 5%;
    }
}
</style>
