<template>
  <div id="app">
    <v-header />
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import VHeader from './components/common/Header'

export default {
  name: 'app',
  components: {
    VHeader
  }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
}
div {
  box-sizing: border-box;
}
.view {
  position: relative;
  padding: 40px 0 0 0;
}
</style>
