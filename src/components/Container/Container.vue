<template>
  <div class="container">
    <Item 
      v-for="(item, index) in movies" 
      :title="item.title" 
      :img="item.images.large"
      :directors="item.directors"
      :casts="item.casts"
      :rating="item.rating"
      :star-movie="starMovie"
      :cancel-movie="cancelMovie"
      :id="item.id"
      :key="item.id"
      @click.native="showMovieDetail($event, item.id)"></Item>
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
    test () {
      console.log('test')
    },
    showMovieDetail (e, id) {
      this.$router.push({
        name: 'Detail',
        params: {
          id: id
        }
      })
      // router.push({ name: 'detail', params: { userId: 123 }})
    },
    starMovie (id, title) {
      this.$store.dispatch('increaseStar', {
        id,
        title
      })
    },
    cancelMovie (id) {
      this.$store.dispatch('decreaseStar', {
        id
      })
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
<style lang="less" scoped>
</style>

