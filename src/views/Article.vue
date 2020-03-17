<template>
    <div>
        <!-- <div class="top">
             <div class="top-content">
                <h1>Article</h1>
                <p>做最好的自己</p>
            </div>
        </div> -->
        <HeaderBC :childData="bcInfo"/>
        <main class="main">
            <div class="main-content">
                <div class="main-content-list">
                    <ul>
                        <li @click="getArticleList(item.typeName)" v-for="(item,index) in typeList" 
                            :key="index">{{item.typeName}}
                        </li>
                    </ul>
                </div>

                <div class="main-content-detail">
                    <h1>{{articleList[0].types}}</h1>
                    <ul v-for="(value,index) in articleList" :key="index">
                        <li @click="goDetail(value._id)">{{value.title}}</li>
                    </ul>
                </div>
            </div>
        </main>
        
    </div>
</template>

<script>
import axios from 'axios';
import url from "@/service.config.js";
import HeaderBC from '@/components/HeaderBC.vue';
    export default {
        data(){
            return{
                typeList:[],
                articleList:[{types:""}],
                 bcInfo:{
                    title:"Artcile",
                    content:'干啥啥不行，吃啥啥不剩。',
                    imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2660018750,636631121&fm=26&gp=0.jpg"
                }
            }
        },
         components: {
            HeaderBC
        },
        created() {
           this.getTypes();
        },
        methods: {
           getTypes(){
            axios({
                url:url.getTypes,
                method:'get'
            }).then((res)=>{
                this.typeList = res.data;
                //console.log(res)
            }).catch((err)=>{
                console.log(err)
                alert('fail')
            })
           },
            getArticleList(types){
                //console.log(types)
                axios({
                    url:url.getArticleList,
                    mothod:'get',
                    params:{
                        types:types
                    }
                }).then((res)=>{
                    this.articleList = res.data
                    //console.log(this.articleList)
                }).catch(()=>{

                })
            },
            goDetail(id){
                this.$router.push(`/articleDetail/${id}`)
                //console.log(id)
            },
        },
      
    }
</script>

<style lang="scss" scoped>
.main{
    width: 70%;
    //height: 1000px;
    margin-left: 15%;
    //background-color: #ddd;
    &-content{
        display: flex;
       /*  background-color: yellow; */
        &-list{
            flex-grow: 1;
          /*   background-color: red; */
            li:hover{
                cursor: pointer;
                text-decoration: underline;
            }
            padding:.1rem .2rem;
            ul{
                li{
                    margin-top:10px; 
                    color: #666666;
                    font-size: 16px;
                    font-family: 'Microsoft Yahei';
                    list-style: disc;
                    margin-left: 20px;
                }
            }
        }
        
        &-detail{
            flex-grow: 2;
           /*  background-color: #eee; */
            padding:.1rem .2rem;
            font-family: 'Microsoft Yahei';
            h1{
                color: #242F35;
                font-size: 28px;
                font-weight: 600;
            }
            li{
                color: #666;
                font-size: 16px;
                font-weight: 400;
                margin-top:10px;
                margin-left: 4px;
            }
            li:hover{
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }
   
}

@media  screen and (max-width: 750px) {
    
  
}
</style>