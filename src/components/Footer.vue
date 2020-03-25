<template>
  <div class="footer">
    <h1 class="footer-title">All rights reserved 2020 Heal ' s Blog !</h1>
    <a class="footer-beian" href="http://www.beian.miit.gov.cn/" target="_blank">
      <p>黑ICP备20001144号</p>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  height: 120px;
  width: 100%;
  background-color: #2a2727;
  color: #fff;
  font-family: "Microsoft Yahei";
  &-title {
    padding: 10px 0;
    text-align: center;
    font-size: 22px;
  }
  &-beian {
    text-align: center;
    font-size: 22px;

    color: #fff;
  }
}
@media screen and (max-width: 750px) {
  .footer {
    font-size: 16px;
    height: 80px;
    &-title {
      font-size: 16px;
    }
    &-beian {
      font-size: 16px;
    }
  }
}
</style>