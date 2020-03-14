<template>
    <div class="detail">
        <div class="top">
            <div class="top-content">
                <h1>My Works</h1>
                <p>干啥啥不行，吃啥啥不剩</p>
            </div>
        </div>
    

        <main class="main">
            <h1 class="main-title">{{articleInfo.title}}</h1>
            <div class="main-info">
                 <p>作者：{{articleInfo.author}}</p>
                 <p>时间：{{articleInfo.time}}</p>
                 <p>描述：{{articleInfo.description}}</p>
            </div>
           <div class="main-content">
                <div id="result">
                    <p>{{articleInfo.content}}</p>
                </div>
              
           </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios';
import url from '@/service.config.js';
    export default {
        data() {
            return {
                id:this.$route.params.id,
                articleInfo:{}
            }
        },
        created(){
            this.getArticleDetail();
        },
        methods: {
            /* 获取文章详情 */
            getArticleDetail(){
                axios({
                    url:url.getArticleDetail,
                    method:'get',
                    params:{
                        id:this.id
                    }
                }).then((res)=>{
                    //console.log(res)
                    this.articleInfo = res.data
                    //console.log(this.articleInfo)
                }).catch(()=>{
                    alert('fail')
                    //console.log(err)
                })
            }
          
        },   
    }
</script>

<style lang="scss" scoped>

.top{
    width: 100%;
    height: 350px;
    background-repeat: no-repeat;
    background-image: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584017423485&di=3799fa0de92da1a451ce384e74c12ada&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F5437a3f47392b.jpg');
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
   // background-color: #ddd;
    width:70%;
    margin-left: 15%;
    padding: .1rem .1rem;
    &-title{
       text-align: center;
       font-size: 32px;
       color: #24292E;
       font-weight: 600;
    }
    &-info{
        color: #6A737D;
        font-size: 16px;
        text-indent: .2rem;
        border-left: 2px solid rgba($color: #333, $alpha: .4);
        p{
            margin-top: 16px;
        }
        margin-bottom: .1rem;;
    }
    &-content{
        text-indent: .1rem;
    }
}
#result{
    color: #24292E;
    font-size: 16px;
    margin-bottom: 16px;
}
@media  screen and (max-width: 750px) {
    .top{
      height: 250px;
    }
  
    .main{
      width: 90%;
      margin-left: 5%;
    }
}
</style>