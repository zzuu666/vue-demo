<template>
  <div class="star">
    <div class="item" 
      v-for="(item, index) in stars" @click="showMovieDetail(id)">
      {{item.title}}
      <span class="btn" @click.stop="cancelMovie(item.id)">删除</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'star',
  computed: {
    ...mapGetters({
      stars: 'getStars'
    })
  },
  methods: {
    cancelMovie (id) {
      this.$store.dispatch('decreaseStar', {
        id
      })
    },
    showMovieDetail (id) {
      this.$router.push({
        name: 'Detail',
        params: {
          id: id
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.star {
  .item {
    position: relative;
    height: 50px;
    line-height: 50px;
    padding-left: 2rem;
    font-size: 16px;
    margin: 6px 8px;
    border-radius: 4px;
  }
  .item:nth-child(odd) {
    background: #dff0d8;
    color: #3c763d;
    border: 1px solid #d6e9c6;
  }
  .item:nth-child(even) {
    background: #fcf8e3;
    color: #8a6d3b;
    border: 1px solid #faebcc;
  }
  .btn {
    position: absolute;
    right: 16px;
    font-size: 14px;
  }
}
</style>
