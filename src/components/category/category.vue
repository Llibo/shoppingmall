<template>
  <div class="cate-wrapper">
      <div class="cates clearfix">
        <div  class="item" @click="goList(item.code)">
          <img src="./car.png"/>
          <p>汽车</p>
        </div>
        <div  class="item" @click="goList(item.code)">
          <img src="./hotel.png"/>
          <p>酒店</p>
        </div>
        <div  class="item" @click="goList(item.code)">
          <img src="./market.jpg"/>
          <p>超市</p>
        </div>
        <div  class="item" @click="goList(item.code)">
          <img src="./home.jpg"/>
          <p>建材家居</p>
        </div>
        <div  class="item" @click="goList(item.code)">
          <img src="./food.png"/>
          <p>餐饮</p>
        </div>
        <div  class="item" @click="goList(item.code)">
          <img src="./cake.jpg"/>
          <p>甜点水果</p>
        </div>
        <div  class="item" @click="goList(item.code)">
          <img src="./service.jpg"/>
          <p>生活服务</p>
        </div>
        <div  class="item" @click="goList(item.code)">
          <img src="./play.png"/>
          <p>休闲娱乐</p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    goList (code) {
      this.$router.push(`/category/list?code=${code}`)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~common/scss/mixin";

.cate-wrapper {
  width: 100%;
  height: 3.3rem;

  .cates {
    width: 100%;
    height: 3.3rem;
    padding: 0.38rem 0.25rem 0.12rem;
    background-color: #fff;

    .item {
      float: left;
      width: 1.75rem;
      margin-bottom: 0.3rem;
      text-align: center;
      overflow: hidden;
      font-size: 0;

      img {
        max-width: 100%;
        width: 0.8rem;
        height: 0.8rem;
      }

      p {
        padding-top: 0.15rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.22rem;
      }
    }
  }

  .split {
    height: 0.2rem;
  }
}
</style>
