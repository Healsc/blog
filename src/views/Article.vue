<template>
    <div>
        <div class="top">
             <div class="top-content">
                <h1>Article</h1>
                <p>做最好的自己</p>
            </div>
        </div>
        <main class="main">
            <div class="main-content">
                <h3 class="main-content-title">2020年01月</h3>
                <ul>
                    <li @click="goDetail">koa</li>
                    <li @click="goDetail">MongoDB</li>
                    <li @click="goDetail">nodejs</li>
                </ul>
            </div>
             <div class="main-content">
                <h3 class="main-content-title">2019年11月</h3>
                <ul>
                    <li>koa</li>
                    <li>MongoDB</li>
                    <li>nodejs</li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods: {
            goDetail(){
                this.$router.push('/articleDetail')
            }
        },
      
    }
</script>

<style lang="scss" scoped>
.top{
    width: 100%;
    height: 350px;
    background-repeat: no-repeat;
    background-image: url('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2660018750,636631121&fm=26&gp=0.jpg');
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
    //height: 1000px;
    margin-left: 15%;
    //background-color: #ddd;
    &-content{
        li:hover{
            cursor: pointer;
            color: blue;
        }
        padding:.1rem .2rem;
        &-title{
            color: #242f35;
            font-weight: 400;
            height: 20px;
            line-height: 20px;
            font-size: 18px;
            font-family:'Microsoft Yahei';
            list-style: disc;
        }

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
}
</style>