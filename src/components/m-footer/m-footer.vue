<template>
  <div class="foot-wrapper" @click.stop>
    <router-link tag="div" class="foot-item item-0" to="/home">
      <i class="iconfont">&#xe624;</i>
      <p>商家消费</p>
    </router-link>
    <router-link tag="div" class="foot-item item-1" to="/exchange">
      <i class="iconfont">&#xe676;</i>
      <p>商城兑换</p>
    </router-link>
    <router-link tag="div" class="foot-item item-2" to="/user">
      <i class="iconfont">&#xe629;</i>
      <p>我的</p>
    </router-link>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>

  .foot-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    height: 1.2rem;
    width: 100%;
    border-top: 1px solid #dedede;
    background: #fff;
    color: #616161;

    .foot-item {
      position: relative;
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      text-align: center;

      >i {
        display: inline-block;
        font-size: 0.44rem;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }

      &.router-link-active {
        color: #FE4D3D;
      }

      p {
        font-size: 0.22rem;
        padding-top: 0.12rem;
      }

    }
  }
</style>
