<template>
  <div class="categories">
    <div class="tab-side">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="热卖" />
        <van-sidebar-item title="新品" />
        <van-sidebar-item title="优惠" />
        <van-sidebar-item title="更多" />
      </van-sidebar>
    </div>
    <!-- 右侧商品区 -->
    <div class="goods">
      <div class="goods-list" ref="goodsList">
        <div
          class="goods-details"
          v-for="item in dataList"
          :key="item.id"
          @click="getDetails(item)"
        >
          <img src="../assets/images/mi_phone_6.png" alt="商品" />
          <div class="goods-info">
            <h3>【{{ item.label }}】{{ item.name }}</h3>
            <p>{{ item.specifications }}</p>
            <span>￥{{ item.currentPrice }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "categories",
  props: [],
  components: {},
  data() {
    return {
      activeKey:0,
      dataList: [
        {
          select: true,
          label: "热卖",
          name: "小米手机",
          img: "../assets/images/banner_1.png",
          specifications: "超高性价比, 你值得拥有",
          currentPrice: 2999,
          costPrice: 3299,
          imgSrc: "images/common/mi_phone_6.png",
        },
      ],
    };
  },
  //方法 函数写这里
  methods: {
    // 获取商品详情
    getDetails(data) {
      // this.setGoods(data);
      this.$router.push("/goods");
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
.categories {
  width: 100%;
  height: 100%;
  padding-top: 0.42rem;
}
.tab-side {
  position: fixed;
  top: 0.42rem;
  width: 1rem;
  height: 100%;
  padding-bottom: 0.9rem;
  background-color: #eee;
}
.van-sidebar{
  width: 100%;
}
.van-sidebar-item {
  color: #7d7e80;
  font-size: 0.14rem;
 
  
}
.van-sidebar-item--select {
  color: #323233;
  font-weight: 500;
  background-color: #fff;
}
.goods {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-left: 1rem;
}
.goods-list {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.goods-details {
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 1.2rem;
  padding: 0.1rem 0.05rem;
  border-bottom: 1px solid #eee;
}
.goods-details img {
  height: 1rem;
}
</style>
