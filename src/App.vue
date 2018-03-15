<template>
  <div id="app" @touchmove.prevent>
    <div v-if="!loadingFlag">
      <router-view/>
    </div>
    <div v-if="loadingFlag" class="loading-container">
      <div class="loading-wrapper">
        <loading title=""></loading>
      </div>
    </div>
    <toast :text="text" ref="toast"></toast>
  </div>
</template>

<script type="text/ecmascript-6">
import Loading from 'base/loading/loading'
import Toast from 'base/toast/toast'
// import {isLogin} from 'common/js/util'

export default {
  data () {
    return {
      loadingFlag: false,
      text: ''
    }
  },
  created () {
    // this.getLocation()
    // if (!isLogin()) {
    //   this.Login()
    // } else {
    //   if (/\/#\//.test(location.href)) {
    //     let hash = window.location.hash
    //     let path = hash
    //     if (hash === '' || hash === '#/') {
    //       path = '#/home'
    //     }
    //     path = path.substr(1)
    //     this.timer = setInterval(() => {
    //       if (this.$route.fullPath !== '/') {
    //         clearInterval(this.timer)
    //         if (/\/user\/recommend/.test(hash)) {
    //           location.replace(`${location.origin}/?#/home`)
    //         } else {
    //           location.replace(`${location.origin}/?#${path}`)
    //         }
    //       }
    //     }, 20)
    //   } else {
    //     this.loadingFlag = false
    //   }
    // }
    if (/\/#\//.test(location.href)) {
      let hash = window.location.hash
      let path = hash
      if (hash === '' || hash === '#/') {
        path = '#/home'
      }
      path = path.substr(1)
      location.replace(`${location.origin}/?#${path}`)
    }
  },
  components: {
    Loading,
    Toast
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
