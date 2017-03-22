<template>
  <div class="container">
      <Item 
        v-for="(item, index) in movies" 
        :title="item.title" 
        :img="item.images.medium"
        :directors="item.directors"
        :casts="item.casts"
        :genres="item.genres"
        :key="item.id"></Item>
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
</style>

