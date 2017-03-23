<template>
  <header class="header">
    <img src="../../assets/logo.png" class="logo">
  </header>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
    top: 4px;
    left: 12px;
    height: 32px;
  }
}
</style>
