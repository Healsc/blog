<template>
    <div>
        <div class="top">
            <div class="top-content">
                <h1>My Works</h1>
                <p>一个正在学习的前端的人</p>
            </div>
        </div>
         <h1>This is an works page</h1>
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
    background-image: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3399945878,388913725&fm=11&gp=0.jpg');
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