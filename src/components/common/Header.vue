<template>
  <header class="header">
    <img src="../../assets/logo.png" class="logo" @click="gotoHome">
    <span class="right" @click="gotoStars">我收藏的</span>
  </header>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    gotoHome () {
      this.$router.push('/')
    },
    gotoStars () {
      this.$router.push('/stars')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  line-height: 40px;
  width: 100%;
  border-bottom: 1px solid #dfdfdf;
  background: #fff;
  z-index: 1;
  .logo {
    position: absolute;
    top: 8px;
    left: 24px;
    height: 24px;
  }
  .right {
    position: absolute;
    display: inline-block;
    right: 16px;
    top: 0;
    height: 40px;
    font-weight: 900;
    color: #3cb981;
  }
}
</style>
