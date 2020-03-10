<template>
      <div class="container"  v-bind:class="{ active: arr[0]}">
          <div class="container-bc"></div>
          <div class="container-nav ">
            <router-link class="container-nav-title" to="/">首页</router-link>
            <router-link class="container-nav-title" to="/article">文章</router-link>
            <router-link class="container-nav-title" to="/works">作品</router-link>
            <router-link class="container-nav-title" to="/about">关于</router-link>
          </div>
         
      </div>
</template>

<script>
import Vue from 'vue'
export default {
  mounted(){
      window.addEventListener("scroll",this.handleScroll,true)
  },
  name: 'HeaderNav',
  data() {
      return {
          arr:[0,0],
      }
  },
  methods:{
      handleScroll(e){
          if(e.target.documentElement.scrollTop>=60){
               Vue.set(this.arr,0,1)
          }else{
              Vue.set(this.arr,0,0)
          }
      }
  },
  watch: {
   
  },

}
</script>

<style scoped lang="scss">

.container{
    position: relative;
    height: 60px;
    width: 100%;
    position: fixed;
    font-size: 16px;
    line-height: 60px;
    
    &-nav{
        width: 16%;
        text-align: center;
        position: absolute;
        right: 14%;
        display: flex;
        &-title{
           
            color: #fff;
            flex-grow: 1;
            z-index: 13;

        } 
    }
}

.active{
    opacity: 1;
    background-color: #000;
    color: #fff;
}

</style>
