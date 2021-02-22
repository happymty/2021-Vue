<template>
  <div class="main-home">
    <!-- nav -->
    <div class="nav" >
      <ul>
        <li v-for="(item,key) in tabList" :key="key" @click="getPage(key)">{{ item }}</li>
      </ul>
      <router-view></router-view>

    </div>

    

  </div>
</template>

<script>
// import HomeHot from "./home-hot.vue";
export default {
  name: "main-home",
  props: [],
  components: {
    // HomeHot,
  },
  data() {
    return {
      active: 0,
      tabList: ["热卖", "新品", "更多"],
    };
  },
  //方法 函数写这里
  methods: {
    getPage(index, title) {
      switch (index) {
        case 0:
          this.$router.push("/home/home-hot");
          break;
        case 1:
          this.$router.push("/home/home-new");
          break;
        case 2:
          this.$router.push("/home/home-more");
          break;
        default:
          return false;
      }
    },
  },
  //计算属性
  computed: {},
  //侦听器
  watch: {},
  //过滤器
  filters: {},
  //以下是生命周期
  //组件创建之前
  beforeCreate() {},
  //组件创建之后
  created() {},
  //页面渲染之前
  beforeMount() {},
  //页面渲染之后
  mounted() {},
  //页面视图数据更新之前
  beforeUpdate() {},
  //页面视图数据更新之后
  updated() {},
  //页面销毁之前
  beforeDestroy() {},
  //页面销毁之后
  destroyed() {},
};
</script>


<style  scoped>
.main-home {
  width: 100%;
  height: 100%;
  padding-top: 0.42rem;
  position: relative;
}
.nav {
  /* top: 0; */
  left: 0;
  right: 0;
  z-index: 99;
  overflow: hidden;
  position: absolute;
}
.nav > ul {
  display: flex;
  justify-content: center;
}
.nav li {
  flex: 1;
  text-align: center;
  line-height: 0.37rem;
  font-size: 0.14rem;
}
</style>