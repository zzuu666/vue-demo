<template>
  <div class="item">
    <div class="image">
      <img :src="jpgSrc">
    </div>
    <div class="title">
      {{title}}
    </div>
    <div class="rating" v-text="rating.average"></div>
    <div class="casts">
      <span>导演:</span>
      <span v-for="(item, index) in directors">{{item.name}}</span>
    </div>
    <div class="casts">
      <span>演员:</span>
      <span v-for="(item, index) in casts">{{item.name}}</span>
    </div>
    <div 
      class="bottom" 
      :class="[
        isStar ? 'stared' : ''
      ]" 
      @click.stop="updateStar(id, title)">
      {{ isStar ? '取消收藏' : '收藏' }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'item',
  props: {
    id: String,
    title: String,
    img: String,
    directors: Array,
    casts: Array,
    rating: Object,
    starMovie: Function,
    cancelMovie: Function
  },
  methods: {
    updateStar (id, title) {
      if (this.isStar) {
        this.cancelMovie(id)
      } else {
        this.starMovie(id, title)
      }
    }
  },
  computed: {
    jpgSrc () {
      return this.img.replace('.webp', '.jpg')
    },
    ...mapGetters({
      stars: 'getStars'
    }),
    isStar () {
      for (let i = 0, len = this.stars.length; i < len; i++) {
        if (this.stars[i].id === this.id) {
          return true
        }
      }
      return false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.item {
  position: relative;
  height: 140px;
  width: 100%;
  padding-left: 100px;
  padding-right: 16px;
  border-bottom: 1px solid #dfdfdf;
  .image {
    position: absolute;
    left: 0;
    top: 0;
    height: 140px;
    width: 100px;
    img {
      position: absolute;
      left: 50%;
      top: 10px;
      height: 120px;
      transform: translateX(-50%);
    }
  }
  .rating {
    position: absolute;
    top: 12px;
    right: 16px;
    font-weight: 100;
    font-size: 20px;
    color: orange;
    padding: 0 6px;
  }
  .title {
    position: relative;
    padding: 10px 0;
    font-weight: 700;
    span {
      font-weight: normal;
      border-radius: 2px;
      padding: 2px;
      margin: 0 2px;
      color: #fff;
      background: #3cb981;
      font-size: 12px;
    }
  }
  .casts {
    position: relative;
    font-size: 14px;
    color: #4e4e4e;
    span {
      margin-right: 4px;
    }
  }
  .bottom {
    position: absolute;
    bottom: 10px;
    right: 16px;
    background: #3cb981;
    color: #fff;
    padding: 2px 12px;
    border-radius: 2px;
    font-size: 14px;
    &.stared {
      background: #dfdfdf;
      color: #777;
    }
  }
}
</style>
