<template>
  <div class="home">
    <header class="home-header">
      
    </header>
     <h1>This is an home page</h1>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style lang="scss" scoped>
.home{
  &-header{
    width: 100%;
    height: 350px;
    background-repeat: no-repeat;
    background-image: url('https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2667296977,3947410930&fm=26&gp=0.jpg');
    background-size: 100% 100%;
  }
}
</style>