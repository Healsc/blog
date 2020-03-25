<template>
  <div class="detail">
    <!--  <div class="top">
            <div class="top-content">
                <h1>My Works</h1>
                <p>干啥啥不行，吃啥啥不剩</p>
            </div>
    </div>-->
    <HeaderBC :childData="bcInfo" />

    <main class="main">
      <h1 class="main-title">{{articleInfo.title}}</h1>
      <div class="main-info">
        <p>作者：{{articleInfo.author}}</p>
        <p>时间：{{articleInfo.time}}</p>
        <p>描述：{{articleInfo.description}}</p>
      </div>
      <div class="main-content">
       <!--  <p>{{articleInfo.content}}</p> -->
        <p id="result"></p>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
import HeaderBC from "@/components/HeaderBC.vue";
import showdown from "showdown";
export default {
  data() {
    return {
      id: this.$route.params.id,
      articleInfo: {},
      articleContent:"",
      bcInfo: {
        title: "Hea1's Blog",
        content: "一个正在学习前",
        imgUrl:
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584017423485&di=3799fa0de92da1a451ce384e74c12ada&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fc%2F5437a3f47392b.jpg"
      }
    };
  },
  components: {
    HeaderBC
  },
  created() {
    this.getArticleDetail();
    
  },
  methods: {
    compile() {
     /*  var text = document.getElementById("content").value;
      this.datalist = text; */

      let text = this.articleContent;
      var converter = new showdown.Converter();
      var html = converter.makeHtml(text);
      document.getElementById("result").innerHTML = html;
    },

    
    /* 获取文章详情 */
    getArticleDetail() {
      axios({
        url: url.getArticleDetail,
        method: "get",
        params: {
          id: this.id
        }
      })
        .then(res => {
          //console.log(res)
        
          this.articleContent = res.data.content;
          //console.log(this.articleContent)
          this.articleInfo = res.data;
          //console.log(this.articleInfo)
          this.bcInfo.title = res.data.types;
          this.bcInfo.content = res.data.title;
          this.bcInfo.imgUrl = res.data.bcImgUrl;
          this.compile();
        })
        .catch(() => {
          alert("fail");
          //console.log(err)
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  // background-color: #ddd;
  width: 70%;
  margin-left: 15%;
  padding: 0.1rem 0.1rem;
  &-title {
    text-align: center;
    font-size: 32px;
    color: #24292e;
    font-weight: 600;
  }
  &-info {
    color: #6a737d;
    font-size: 16px;
    text-indent: 0.2rem;
    border-left: 2px solid rgba($color: #333, $alpha: 0.4);
    p {
      margin-top: 16px;
    }
    margin-bottom: 0.1rem;
  }
  &-content {
    text-indent: 0.2rem;
    color: #24292e;
    font-size: 16px;
    margin-bottom: 16px;
  }
}
@media screen and (max-width: 750px) {
  .main {
    width: 90%;
    margin-left: 5%;
  }
}
</style>