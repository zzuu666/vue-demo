<template>
  <div class="detail">
    {{ $route.params.id }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'detail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters({
      details: 'getDetails'
    })
  },
  created () {
    this.$store.dispatch('getMovieDetail', {
      id: this.$route.params.id
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

</style>
