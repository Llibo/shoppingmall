<template>
  <ul class="mall-items-wrapper">
    <li v-for="(item, index) in data"  :key="index" @click="goDetail(item.code)" class="border-bottom-1px">
      <div class="img-wrap">
        <img v-lazy="item.pic"/>
      </div>
      <div class="info">
        <h2 class="twoline-ellipsis">{{item.name}}</h2>
        <div class="label">
          <label>{{item.desc}}</label>
        </div>
        <div class="addr">{{item.city}} | {{item.area}}</div>
      </div>
    </li>
  </ul>
</template>
<script>
import {commonFilter} from 'common/js/mixin'

export default {
  mixins: [commonFilter],
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goDetail (code) {
      this.$router.push(this.$route.path + '/' + code)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "~common/scss/mixin";

  .mall-items-wrapper {
    background: #fff;

    li {
      display: flex;
      padding: 0.3rem;
      @include border-bottom-1px('#eee');

      &:last-child {
        @include border-none();
      }

      .img-wrap {
        position: relative;
        width: 2.4rem;
        flex: 0 0 2.4rem;
        height: 2.4rem;
        overflow: hidden;
        font-size: 0;
        img {
          width: 100%;
          height: 100%;
        }

        .discount {
          position: absolute;
          top: 0;
          left: 0;
          padding-top: 0.1rem;
          width: 0.66rem;
          height: 0.54rem;
          text-align: center;
          font-size: 0.22rem;
          color: #fff;
          background-size: 0.66rem 0.54rem;
        }
      }

      .info {
        display: flex;
        padding: 0.1rem 0 0.1rem 0.2rem;
        flex-direction: column;
        justify-content: space-between;

        h2 {
          line-height: 1.3;
          font-size: 0.28rem;
        }

        .label {
          margin-top: 0.18rem;
          font-size: 0;

          label {
            display: inline-block;
            vertical-align: top;
            padding: 0.08rem 0.12rem;
            border-radius: 3px;
            font-size: 0.22rem;

            &+label {
              margin-left: 0.2rem;
            }

            &:nth-child(2n + 1) {
              color: #48b0fb;
              border: 1px solid #48b0fb;
            }

            &:nth-child(2n) {
              color: #ff5000;
              border: 1px solid #ff5000;
            }
          }
        }

        .addr {
          margin-top: 0.18rem;
          padding-left: 0.28rem;
          font-size: 0.22rem;
          color: #999;
          background-repeat: no-repeat;
          background-position: left center;
          background-size: 0.2rem;
        }
      }
    }
  }
</style>
