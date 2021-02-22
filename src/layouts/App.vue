<template>
  <div id="app">
    <Loading v-show="$root.bLoading"/>
    <Header v-if="$root.bNav"/>

    <router-view></router-view>
    <Footer v-show="$root.bFoot"/>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import Loading from '../components/loading.vue';

// import axios from "../plugins/axios.js";

export default {
  name: "xiaomi",
  props: {},
  components: {
    Header,
    Footer,
    Loading
  },
  data() {
    return {};
  }, //方法 函数写这里
  methods: {}, //计算属性
  computed: {}, //侦听器
  watch: {
    $route:{
      handler(newValue){
        let path = newValue.path;
        if(/home|categories|column/.test(path)){
          this.$root.bNav=this.$root.bFoot=true;
        }
        if(/login|reg|goods/.test(path)){
          this.$root.bNav=this.$root.bFoot=false;
        }
        if(path.includes('user')){
          this.$root.bNav=false;
          this.$root.bFoot=true;
        }
        if(path.includes('cart')){
          this.$root.bNav=false;
          this.$root.bFoot=true;
        }
      },
      immediate: true //首次运行
    }
  }, //过滤器
  filters: {}, //以下是生命周期 //组件创建之前
  beforeCreate() {}, //组件创建之后
  created() {}, //页面渲染之前
  beforeMount() {}, //页面渲染之后
  mounted() {
    // axios({
    //   url: "http://localhost:3333/api/user",
    //   params: {
    //     _page: 1,
    //     _limit: 2,
    //   },
    // }).then(
    //   (res) => console.log(res)
    //   );
    // axios.get('/api/user',{headers:{token:'1234567890012345'}}).then(
    //   res => console.log(res)
    // )
  }, //页面视图数据更新之前
  beforeUpdate() {}, //页面视图数据更新之后
  updated() {}, //页面销毁之前
  beforeDestroy() {}, //页面销毁之后
  destroyed() {},
};
</script>

<style>
</style>
