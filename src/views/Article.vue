<template>
    <div>
        <div class="top">
             <div class="top-content">
                <h1>Article</h1>
                <p>一个正在学习的前端的人</p>
            </div>
        </div>
        <h1>This is an article page</h1>
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
</style>