<template>
  <div class="notices-wrapper">
    <span class="noticePic">
      <img src="./notice.png">
    </span>
    <span class="tip">公告</span>
    <span class="content">这是一条公告</span>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
@import "~common/scss/mixin";

.notices-wrapper {
  width: 100%;
  height: 1.2rem;
  background: #fff;
  display: flex;
  padding: 0 0.15rem;
  .noticePic{
    flex: 0 0 1.2rem;
    margin-right: 0.2rem;
    img{
      width: 1.2rem;
      height: 0.24rem;
      vertical-align: middle;
    }
  }

  .tip{
    flex: 0 0 0.8rem;
    width: 0.8rem;
    height: 0.48rem;
    margin: 0.36rem 0.2rem 0.36rem 0;
    border-radius: 2px;
    text-align: center;
    line-height: 0.48rem;
    font-size: 0.24rem;
    color: #222;
    background-color: #fff8ce;
  }
  .content{
    flex: 1;
    margin: 0.36rem 0;
    line-height: 0.48rem;
    font-size: 0.24rem;
    text-align: left;
  }
}
</style>
