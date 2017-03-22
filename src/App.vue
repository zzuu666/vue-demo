<template>
  <div id="app">
    <Top />
    <router-view></router-view>
  </div>
</template>

<script>
import Top from './components/Top'

export default {
  name: 'app',
  components: {
    Top
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
</style>
