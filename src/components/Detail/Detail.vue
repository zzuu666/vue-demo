<template>
  <div class="detail">
    <div class="title">
      <div>
        <span class="title-ch" v-text="details.title"></span>
        <span class="year" v-text="details.year"></span>
      </div>
      <p class="title-en" v-text="originalTitle"></p>
    </div>
    <div class="key-info">
      <p class="key-info-rating">{{details.rating && details.rating.average}}</p>
      <p class="key-info-counts">{{details.ratings_count}} 人</p>
    </div>
    <div class="content">
      <img :src="jpgSrc" class="image">
      {{details.summary}}
    </div>
    <div class="casts">
      <p class="sub-title">导演信息</p>
      <intro 
        v-for="(item, index) in details.directors"
        :key="item.id"
        :name="item.name"
        :avatar="item.avatars.medium"
        :alt="item.alt"></intro>
    </div>
    <div class="casts">
      <p class="sub-title">演员信息</p>
      <intro 
        v-for="(item, index) in details.casts"
        :key="item.id" 
        :name="item.name"
        :avatar="item.avatars.medium"
        :alt="item.alt"></intro>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Intro from '../common/Introduce'

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
    }),
    originalTitle () {
      return this.details.title === this.details.original_title ? '' : this.details.original_title
    },
    jpgSrc () {
      return this.details.images && this.details.images.large.replace('.webp', '.jpg')
    }
  },
  components: {
    Intro
  },
  created () {
    this.$store.dispatch('getMovieDetail', {
      id: this.$route.params.id
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.detail {
  position: relative;
  padding: 40px 16px 0 16px;
  .title {
    position: relative;
    margin: 16px 0;
    .year {
      margin-left: 16px;
      font-weight: 100;
      font-size: 18px;
      color: #7e7e7e;
    }
    &-ch {
      font-size: 20px;
    }
    &-en {
      font-size: 18px;
      color: #7e7e7e;
      font-weight: 100;
      margin: 4px 0;
      height: 25px;
    }
  }
  .key-info {
    position: absolute;
    right: 16px;
    top: 60px;
    text-align: right;
    border-radius: 4px;
    overflow: hidden;
    &-rating {
      background: #3cb981;
      font-size: 20px;
      font-weight: 100;
      color: #fff;
      text-align: center;
      padding: 2px 8px;
    }
    &-counts {
      background: #dfdfdf;
      font-size: 12px;
      padding: 2px 8px;
    }
  }
  .content {
    text-indent: 28px;
    color: #777;
    font-size: 14px;
    .image {
      position: relative;
      float: right;
      height: 120px;
      margin: 0 0 14px 14px;
    }
  }
  .casts {
    position: relative;
    margin: 16px 0;
  }
  .sub-title {
    position: relative;
    font-size: 16px;
    margin-bottom: 8px;
    font-weight: 100;
    color: #4e4e4e;
  }
}
</style>
