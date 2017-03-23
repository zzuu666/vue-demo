<template>
  <div class="intro">
    <img :src="avatar" class="avatar">
    <p class="name" v-text="name"></p>
  </div>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: {
    name: String,
    avatar: String,
    alt: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.intro {
  position: relative;
  display: inline-block;
  height: 100px;
  margin: 0 4px;
  text-align: center;
  .avatar {
    position: relative;
    display: inline-block;
    height: 100px;
  }
  .name {
    position: relative;
    width: 100%;
    font-size: 12px;
    color: #4e4e4e;
  }
}
</style>
