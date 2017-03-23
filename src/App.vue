<template>
  <div id="app">
    <v-header />
    <transition name="fade" mode="out-in">
    <router-view class="view"></router-view>
    </transition>
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
}
* {
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
