<template>
  <div class="about">
    <HeaderBC :childData="bcInfo"/>
  
    <main class="content">
      <div class="content-part">
        <h1>About Me</h1>
        <p v-for="(item,index) in aboutInfo[0].aboutMe" :key="index">
          {{item}}
        </p>
      </div>

      <div class="content-part">
        <h1>My Skills</h1>
        <p v-for="(item,index) in aboutInfo[0].skill" :key="index">
          {{item}}
        </p>
     
      </div>

      <div class="content-part">
        <h1>Personal Experience</h1>
        <p v-for="(item,index) in aboutInfo[0].personExperience" :key="index">
          {{item}}
        </p>
      </div>
    
      <div class="content-part">
        <h1>Project experience</h1>
        <ul class="content-experience" v-for="(item,index) in worksList" :key="index">
          <li>
            <span class="content-experience-time">{{item.time}}</span>
            <h5>{{item.title}}</h5>
            <p>{{item.description}}</p>
          </li>
        </ul>
        
      </div>
    </main>
    
  </div>
</template>

<script>
import HeaderBC from '@/components/HeaderBC.vue';
import axios from 'axios';
import url from '@/service.config.js';
  export default {
    data(){
      return{
        aboutInfo:[
          {
            "aboutMe":"",
            "skill":"",
            "personExperience":""
          }
        ],
        worksList:[],
        bcInfo:{
            title:"About Me",
            content:'在说做不到之前不要放弃',
            imgUrl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583859769829&di=0404878be0e27814fca0c125b52bfa9b&imgtype=0&src=http%3A%2F%2F00.minipic.eastday.com%2F20161122%2F20161122184944_ab4916244e194677b52b8c7d0b4e5623_12.jpeg"
        }
      }
    },
    created() {
      this.getAbout();
      this.getWorks();
    },
    methods: {
      /* 获取about信息 */
      getAbout(){
        axios({
          url:url.getAbout,
          method:'get'
        }).then(res=>{
          if(res.data){
              this.aboutInfo = res.data;
          }
         
          //console.log(res.data)
          //console.log(this.aboutInfo)
        }).catch(()=>{

        })
      },
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
  &-part{
    padding-top: .1rem;
    padding-bottom: .1rem;
    border-bottom: 2px solid rgba($color: #ddd, $alpha: .4);
  }
  h1{
    margin-bottom: 10px;
    color: #242f35;
    padding: 5px 0 5px 16px;
   

    height: 20px;
    line-height: 20px;
    font-size: 20px;
    font-weight: 700;
  }
  p{
    font-size: 16px;
    text-indent: 2em;
    line-height: 30px;
  }
}
.content-experience{
  &-time{
    font-weight: 600;
  }
  li{
    text-indent: .1rem;
    margin-bottom: 14px;
    h5{
      font-weight: 600;
      font-size: 16px;
    }
  }
}
@media  screen and (max-width: 750px) {
    .content{
      width: 90%;
      margin-left: 5%;
    }
}
</style>
