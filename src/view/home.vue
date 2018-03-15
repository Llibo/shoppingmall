<template>
  <div class="homeWrapper">
    <div class="suggestWrapper">
      <div class="inner">
        <div class="search">
          <i class="search-icon iconfont">&#xe649;</i>
          <input type="text" ref="searchInput" placeholder="请输入商品名称" v-model="query">
          <i v-show="query" class="close-icon iconfont" @click="clearInput">&#xe6b4;</i>
        </div>
      </div>
    </div>
    <Category></Category>
    <Notice></Notice>
    <div class="split"></div>
    <Scroll :hasMore="hasMore">
      <MallItems :data="goods"></MallItems>
    </Scroll>
    <m-footer></m-footer>
    <router-view></router-view>
  </div>
</template>
<script>
import Loading from 'base/loading/loading'
import Toast from 'base/toast/toast'
import Slider from 'base/slider/slider'
import Scroll from 'base/scroll/scroll'
import MFooter from 'components/m-footer/m-footer'
import Category from 'components/category/category'
import Notice from 'components/notice/notice'
import MallItems from 'components/mall-items/mall-items'
export default {
  data () {
    return {
      loadingFlag: false,
      text: '',
      hasMore: false,
      query: '',
      goods: [{
        'pic': 'http://image.xmcdn.com/group31/M02/20/34/wKgJSVmBfs6gfO17AAAo5_OTx2Q837_web_large.jpg?op_type=5&upload_type=cover&device_type=ios&name=web_large&magick=jpg&strip=1&quality=6',
        'name': '小二班',
        'desc': '吃货集结地',
        'city': '浙江',
        'area': '张厚'
      }, {
        'pic': 'http://image.xmcdn.com/group31/M02/20/34/wKgJSVmBfs6gfO17AAAo5_OTx2Q837_web_large.jpg?op_type=5&upload_type=cover&device_type=ios&name=web_large&magick=jpg&strip=1&quality=6',
        'name': '小二班',
        'desc': '吃货集结地',
        'city': '浙江',
        'area': '张厚'
      }, {
        'pic': 'http://image.xmcdn.com/group31/M02/20/34/wKgJSVmBfs6gfO17AAAo5_OTx2Q837_web_large.jpg?op_type=5&upload_type=cover&device_type=ios&name=web_large&magick=jpg&strip=1&quality=6',
        'name': '小二班',
        'desc': '吃货集结地',
        'city': '浙江',
        'area': '张厚'
      }, {
        'pic': 'http://image.xmcdn.com/group31/M02/20/34/wKgJSVmBfs6gfO17AAAo5_OTx2Q837_web_large.jpg?op_type=5&upload_type=cover&device_type=ios&name=web_large&magick=jpg&strip=1&quality=6',
        'name': '小二班',
        'desc': '吃货集结地',
        'city': '浙江',
        'area': '张厚'
      }, {
        'pic': 'http://image.xmcdn.com/group31/M02/20/34/wKgJSVmBfs6gfO17AAAo5_OTx2Q837_web_large.jpg?op_type=5&upload_type=cover&device_type=ios&name=web_large&magick=jpg&strip=1&quality=6',
        'name': '小二班',
        'desc': '吃货集结地',
        'city': '浙江',
        'area': '张厚'
      }]
    }
  },
  methods: {
    clearInput () {
      this.query = ''
    }
  },
  components: {
    Loading,
    Toast,
    Slider,
    Scroll,
    MFooter,
    Category,
    Notice,
    MallItems
  }
}
</script>
<style lang="scss" scoped>
.homeWrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  bottom: 1.2rem;
  .suggestWrapper{
    width: 100%;
    height: 1.28rem;
    padding: 0.12rem 0.4rem;
    .inner {
        height: 100%;
        display: flex;
        align-items: center;

        .search {
          flex: 1;
          height: 0.8rem;
          display: flex;
          align-items: center;
          border-radius: 0.3rem;
          background: #f3f4f8;
          font-size: 0.3rem;

          .search-icon, .close-icon {
            flex: 0 0 0.54rem;
          }

          input {
            flex: 1;
            font-size: 0.28rem;
            background: transparent;
          }
        }
      }
    background-color: #F64444;
  }

  .split {
    height: 0.4rem;
  }
}
</style>
