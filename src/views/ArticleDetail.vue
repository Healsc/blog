<template>
    <div class="detail">
        <div class="top">
            <div class="top-content">
                <h1>My Works</h1>
                <p>干啥啥不行，吃啥啥不剩</p>
            </div>
        </div>
    

        <main class="main">
            <h1 class="main-title">这是个标题。这是个标题。这是个标题</h1>
            <div class="main-info">
                 <p>作者：heal</p>
                 <p>时间：2020-03-12</p>
                 <p>描述：这是个占位的数据。这是占位的</p>
            </div>
           <div class="main-content">
                <div id="result"></div>
                <div class="test">
                    <textarea id="content" 
                    style="min-height:1rem;width:100%;" 
                        v-on:keyup="compile()">
                     </textarea>
                    
                </div>
                <p id="markdown"></p>
           </div>
        </main>
    </div>
</template>

<script>
import showdown from 'showdown';
    export default {
        data() {
            return {
                datalist:""
            }
        },
        methods: {
            compile(){
                var text = document.getElementById("content").value;
                this.datalist = text;
                var converter = new showdown.Converter();
                var html = converter.makeHtml(text);
                document.getElementById("result").innerHTML = html;
        },
        get(){
        
            var converter = new showdown.Converter();
            converter.setOption("tasklists", true);
                //支持显示table，默认false
            converter.setOption("tables", true);
                /* underline */
            converter.setOption("tablesHeaderId", true);
                /* headerLevelStart */
            converter.setOption("headerLevelStart", true);
            converter.setOption("underline", true);
                //支持图片大小设置，默认为false
            converter.setOption("parseImgDimensions", true);

            this.test      = converter.makeHtml(this.datalist);
            document.getElementById('markdown').innerHTML = this.test
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
    height: 2000px;
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
</style>