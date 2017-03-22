<template>
  <header class="header">
      <span>正在热映</span><span>即将上映</span>
  </header>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style lang="less">
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
  span {
    position: relative;
    display: inline-block;
    width: 50%;
    text-align: center;
    
  }
}
</style>
