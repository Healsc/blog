<template>
    <div class="container">
        <!-- 顶部背景图片开始 后期封装一个组件显示 -->
            <header class="container-top" :style=background>
            <div class="container-top-content">
                <h1>{{childData.title}}</h1>
                <p>{{childData.content}}</p>
            </div>
            </header>
        <!--顶部背景图片结束-->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                test:''
            }
        },
         name: 'HeaderBC',
         props:['childData'],
         created() {
             this.pr()
         },
         methods:{
             pr(){
                 this.test = this.childData
                 console.log(this.test)
                 console.log(this.test.imgUrl)
             }
         },
         computed: {
             background:function(){
                 return{
                      backgroundImage:"url("+this.test.imgUrl+")",
                 }
             }
         },

    }
</script>

<style lang="scss" scoped>
.container{
    &-top{
        width: 100%;
        height: 350px;
        background-repeat: no-repeat;
        //background-image: url('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2667296977,3947410930&fm=26&gp=0.jpg');
        background-size: 100% 100%;
        &-content{
            text-align: center;
            padding-top: .6rem;
            color: #fff;
            h1{
                font-size: 42px;
                font-weight: 700;
                font-family: 'Microsoft Yahei';
            }
            p{
                font-size:18px;
                font-family: 'Microsoft Yahei';
            }
        }
    }
}
@media  screen and (max-width: 750px) {
  .container{
    &-top{
      height: 250px;
        &-content{
            padding-top: 1.2rem;
            h1{
                font-size: 36px;
            }
        }
    }
  }
}
</style>