<template>
  <div class="item">
    <div class="image">
      <img :src="jpgSrc">
    </div>
    <div class="title">
      {{title}}
      <span v-for="(item, index) in genres">
        {{item}}
      </span>
    </div>
    <div class="directors">
      <span>导演:</span>
      <span v-for="(item, index) in directors">{{item.name}}</span>
    </div>
    <div class="casts">
      <span>演员:</span>
      <span v-for="(item, index) in casts">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item',
  data () {
    return {
    }
  },
  props: {
    title: String,
    img: String,
    directors: Array,
    casts: Array,
    genres: Array
  },
  computed: {
    jpgSrc () {
      return this.img.replace('.webp', '.jpg')
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
}
</style>
