const SERVERURL = 'http://localhost:3000/' 
//const SERVERURL = 'http://47.105.144.170:3000/'


const URL = {
   
    getHomeArticle: SERVERURL + 'article/getHomeArticle',
    getArticleDetail: SERVERURL + 'article/getArticleDetail',
    getWorks: SERVERURL + 'works/getWorks',
    getTypes: SERVERURL + 'type/getTypes',
    getArticleList: SERVERURL + 'article/getArticleList',
    getAbout: SERVERURL + "about/getAbout"
};

export default URL;