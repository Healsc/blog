<template>
      <div class="container"  v-bind:class="[{ active: arr[0]},{after:arr[1]}]">
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
                Vue.set(this.arr,1,0)
          }else{
              Vue.set(this.arr,0,0)
              Vue.set(this.arr,1,1)
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
    opacity: .2;
    &-nav{
        width: 16%;
        text-align: center;
        position: absolute;
        right: 14%;
        display: flex;
        &-title{
            color: #fff;
            flex-grow: 1;
            opacity: 1;
        } 
    }
}
@keyframes myfirst
{
    from {opacity: 0;}
    to {opacity: 1;}
}
@-webkit-keyframes myfirst 
{
    from {opacity: 0;}
    to {opacity: 1;}
}
@-moz-keyframes myfirst 
{
    from {opacity: 0;}
    to {opacity: 1;}
}
@-o-keyframes myfirst
{
    from {opacity: 0;}
    to {opacity: 1;}
}



@keyframes after
{
from {opacity: 1;background-color: #000;}
to {opacity: 0.4;}
}

@-moz-keyframes after 
{
from {opacity: 1;background-color: #000;}
to {opacity: .4;}
}
/* Safari 和 Chrome */
@-webkit-keyframes after 
{
from {opacity: 1;background-color: #000;}
to {opacity: .4;}
}
/* Opera */
@-o-keyframes after 
{
from {opacity: 1;background-color: #000;}
to {opacity: .4;}
}


.active{
    
    animation: myfirst 1.2s;
    -webkit-animation: myfirst 1.2s;
    -moz-animation: myfirst 1.2s;
    -o-animation: myfirst 1.2s;
    background-color: #242f35;
    opacity: 1;
    color: #fff;
}
.after{
    animation: after 2s;
    -webkit-animation: after 2s;
    -moz-animation: after 2s;
    -o-animation: after 2s;
    opacity: .4;
}
</style>
