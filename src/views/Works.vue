<template>
    <div>
        <HeaderBC :childData="bcInfo"/>  
        <main class="main">
          <div class="main-works" v-for="(item,index) in worksList" :key="index">
            <p class="main-works-title">{{item.title}}</p>
            <p class="main-works-time">{{item.time}}</p>
            <p class="main-works-content">{{item.description}}</p>
            <a :href="item.url" target="_blank">项目地址</a>
            <div class="main-works-img" v-for="(item,index) in item.images" :key="index">
              <img :src="item" alt="">
            </div>
          </div>

        </main>
    </div>
</template>

<script>
import axios from "axios";
import url from '@/service.config.js';
import HeaderBC from '@/components/HeaderBC.vue';
    export default {
        data(){
          return{
            worksList:[],
            bcInfo:{
              title:"My Works",
              content:'Hello Front_End',
              imgUrl:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3399945878,388913725&fm=11&gp=0.jpg"
          },
            test:'http://www.qq.com'
          }
        },
        components:{
          HeaderBC
        },
        methods:{
          getWorks(){
            axios({
              url:url.getWorks,
              method:'get'
            }).then((res)=>{
              this.worksList=res.data;
              //console.log(this.worksList)
            }).catch((err)=>{
              console.log(err)
            })
          }
        },
        created() {
          this.getWorks();
        },
    }
</script>

<style lang="scss" scoped>
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
      text-indent: .1rem;
      font-size: 16px;
    }
    &-img{
      width:100%;
      padding: .1rem;
      img{
        width: 80%;
        margin-left: 10%;
      }
    }
  }
}

@media  screen and (max-width: 750px) {
  
    .main{
      width: 90%;
      margin-left: 5%;
    }
}
</style>