<template>
  <div class="container">
    <header class="header">
      <span>正在热映</span><span>即将上映</span>
    </header>
    <Item 
      v-for="(item, index) in movies" 
      :title="item.title" 
      :img="item.images.medium"
      :directors="item.directors"
      :casts="item.casts"
      :genres="item.genres"
      :key="item.id" 
      @click="showMovieDetail(item.id)"></Item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from '../Item'

export default {
  name: 'container',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters({
      movies: 'getMovies'
    })
  },
  methods: {
    showMovieDetail (id) {
      console.log(this.router)
      // router.push({ name: 'detail', params: { userId: 123 }})
    }
  },
  components: {
    Item
  },
  created () {
    this.$store.dispatch('getInTheaterMovies')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.container {
    position: relative;
    padding: 40px 0 0 0;
}
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

