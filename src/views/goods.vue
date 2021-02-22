<template>
  <div class="goods">
    <div class="nav">
      <div class="g-btn" @click="$router.go(-1)">
        <p><i class="iconfont icon-houtui"></i></p>
      </div>
      <h2>商品详情</h2>
    </div>
    <div class="goods-content">
      <!-- 轮播图 -->

      <swiper
        :slides-per-view="3"
        :space-between="50"
        :options="swiperOptions"
        class="banner"
      >
        <swiper-slide :key="item.id" v-for="item in swiperList">
          <img :src="item.imgUrl"
        /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!-- 详情 -->
      <div class="goods-details">
        <div class="goods-trait">
          <h2>小米手机</h2>
          <p>超高性价比</p>
          <span>
            ￥1999
            <del>￥2999</del>
          </span>
        </div>
        <div class="goods-parameter">
          <div class="merit">
            <i class="iconfont icon-huo"></i>
            <h5>超大屏</h5>
            <p>6.21英寸</p>
          </div>
          <div class="merit">
            <i class="iconfont icon-huo"></i>
            <h5>超大屏</h5>
            <p>6.21英寸</p>
          </div>
          <div class="merit">
            <i class="iconfont icon-huo"></i>
            <h5>超大屏</h5>
            <p>6.21英寸</p>
          </div>
          <div class="merit">
            <i class="iconfont icon-huo"></i>
            <h5>超大屏</h5>
            <p>6.21英寸</p>
          </div>
          <div class="merit">
            <i class="iconfont icon-huo"></i>
            <h5>超大屏</h5>
            <p>6.21英寸</p>
          </div>
          <div class="merit">
            <i class="iconfont icon-huo"></i>
            <h5>超大屏</h5>
            <p>6.21英寸</p>
          </div>
        </div>
        <div class="goods-info">
          <div class="buy">
            <div class="select" @click="getSku()">
              <div class="group">
                <span>已选</span>
                <p>小米8 屏幕指纹版 8GB+128GB 透明下x1</p>
              </div>
              >
            </div>
            <div class="select">
              <div class="group">
                <span>送至</span>
                <p>上海市</p>
              </div>
              >
            </div>
            <div class="select">
              <div class="group privilege">
                <span><van-icon name="passed" />小米自营</span>
                <span><van-icon name="passed" />小米发货</span>
                <span style="border-bottom: none"
                  ><van-icon name="passed" />7天无理由退货</span
                >
              </div>
              >
            </div>
          </div>
        </div>
      </div>

      <!-- 底部tab -->
      <van-goods-action>
        <van-goods-action-icon icon="like-o" text="收藏" @click="getLike()" />
        <van-goods-action-icon
          :info="cartNum"
          icon="cart-o"
          text="购物车"
          @click="getCart()"
        />
        <van-goods-action-icon
          class="join-cart"
          text="加入购物车"
          @click="getSku()"
        />
      </van-goods-action>
      <!-- 商品规格 -->
      <!-- <div class="sku">
        <van-popup v-model="isSku" position="bottom" :overlay="true">
          <div class="container">
            <div class="sku-details">
              <img :src="setImg(goodsData.imgSrc)" alt="商品" />
              <div class="title">
                <div class="price">
                  <span>￥1999</span>
                  <del>￥2999</del>
                </div>
                <p>
                  {{ this.goodsData.name }} {{ this.goodsData.specifications }}
                </p>
              </div>
            </div>
            <div class="content">
              <div class="parameter">
                <h4>{{ specifications.title }}</h4>
                <div class="parameter-select">
                  <span
                    :class="specificationsIndex === index ? 'active' : ''"
                    v-for="(item, index) in specifications.option"
                    :key="item.id"
                    @click="getParameter(item.value, index, 'specifications')"
                  >
                    {{ item.label }}
                  </span>
                </div>
              </div>
              <div class="parameter">
                <h4>{{ colors.title }}</h4>
                <div class="parameter-select">
                  <span
                    :class="colorIndex === index ? 'active' : ''"
                    v-for="(item, index) in colors.option"
                    :key="item.id"
                    @click="getParameter(item.value, index, 'color')"
                  >
                    {{ item.label }}
                  </span>
                </div>
              </div>
              <div class="quantity">
                <h4>购买数量</h4>
                <van-stepper
                  v-model="stepperNum"
                  :integer="isInteger"
                  :disable-input="isDisable"
                />
              </div>
            </div>
          </div>
          <div class="add-cart" @click="addCart()">确定</div>
        </van-popup>
      </div> -->
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
  name: "goods",
  props: [],
  components: {},
  data() {
    return {
      cartNum:'',
      swiperOptions: {
        // pagination: ".swiper-pagination",
        loop: true, //循环
        autoplay: true, //自动播放
        effect: "coverflow", //切换效果
        type: "bullets",
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          //type: 'fraction',
          //type : 'progressbar',
          //type : 'custom',
        },
        specifications: {
          // 商品规格-规格
          title: "规格",
          option: [
            {
              label: "8GB+128GB",
              value: "8GB+128GB",
            },
            {
              label: "6GB+256GB",
              value: "6GB+256G",
            },
          ],
        },
        colors: {
          // 商品规格-颜色
          title: "颜色",
          option: [
            {
              label: "红色",
              value: "红色",
            },
            {
              label: "黑色",
              value: "黑色",
            },
          ],
        },
      },
      swiperList: [
        {
          id: "001",
          imgUrl: require("../assets/images/mi_phone_1.png"),
        },
        {
          id: "002",
          imgUrl: require("../assets/images/mi_phone_2.png"),
        },
        {
          id: "003",
          imgUrl: require("../assets/images/mi_phone_3.png"),
        },
      ],
    };
  },
  //方法 函数写这里
  methods: {
    getLike() {
      console.log("喜欢");
    },

    getSku() {
      this.isSku = true;
    },
    getCart() {
      this.$router.push("/cart");
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


<style scoped >
.nav {
  width: 100%;
  height: 0.42rem;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #e8eaec;
  z-index: 99;
  background: #ff6700;
  color: #fff;
}
.g-btn {
  float: left;
  line-height: 0.42rem;
  width: 0.36rem;
  height: 100%;
  margin-left: 0.1rem;
}
.nav h2 {
  text-align: center;
  line-height: 0.42rem;
  font-size: 0.18rem;
  margin-right: 0.46rem;
}
.goods-content {
  position: relative;
  top: 0.42rem;
  width: 100%;
  height: 100%;
}
.banner {
  height: 3.5rem;
}
.banner img {
  width: 100%;
  height: 100%;
}
.goods-details {
  width: 100%;
  padding-bottom: 0.2rem;
  background-color: #fff;
  margin-top: 0.18rem;
  padding-bottom: 0.7rem;
}
.goods-trait {
  width: 100%;
  padding: 0.15rem;
}
.goods-trait h2 {
  font-size: 0.22rem;
}
.goods-trait p {
  font-size: 0.14rem;
  color: #333;
  margin-top: 0.1rem;
  line-height: 0.22rem;
}
.goods-trait span {
  display: inline-block;
  font-size: 0.22rem;
  color: #ff6700;
  margin-top: 0.1rem;
}
.goods-trait span del {
  font-size: 0.14rem;
  color: #666;
}
.goods-parameter {
  display: flex;

  width: 100%;
  overflow: auto;
}
.merit {
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 1rem;
  height: 100%;
  padding: 0.05rem 0.1rem;
  border-right: 1px solid #eee;
}

.merit i {
  font-size: 0.2rem;
  color: red;
}
.merit h5 {
  font-size: 0.14rem;
  font-weight: 600;
}
.merit p {
  font-size: 0.12rem;
  color: #666;
}
.goods-parameter::-webkit-scrollbar {
  /* 隐藏滚动条, 这种方式不兼容 火狐 和 IE */
  display: none;
}
.goods-info {
  width: 100%;
  padding: 0 0.15rem;
  margin-top: 0.1rem;
}
.buy {
  width: 100%;
  border-radius: 0.1rem;
  background-color: #eee;
  border: 1px solid #ccc;
}
.select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  width: 100%;
  height: 0.4rem;
  padding: 0 0.15rem;
}

.group {
  display: flex;
  align-items: center;

  max-width: 90%;
}
.group span {
  min-width: 0.5rem;
  font-size: 0.12rem;
  color: #666;
}
.group p {
  width: 100%;
  font-size: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.privilege span {
  display: flex;
  align-items: center;

  font-size: 0.12rem;
}
.van-goods-action-icon {
  min-width: 20%;
  height: 0.5rem;
  font-size: 0.14rem;
}
.join-cart {
  width:100%;
  font-size: 0.16rem;
  height: 0.5rem;
  line-height: 0.45rem;
  color: #fff;
  background-color: #ff6700;
}
</style>