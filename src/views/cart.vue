<template>
  <div class="cart">
    <!-- this is cart page -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="cart-container">
        <h2>购物车<i class="iconfont icon-location"></i></h2>
        <div class="goods-number">
          <span>共{{ goodsList.length }}件商品</span>
        </div>
        <div class="cart-content" v-show="false">
          <div class="cart-info">
            <img src="../assets/images//cart.png" alt="购物车" />
            <span>购物车竟然是空的</span>
            <p>再忙, 也要记得买点什么犒劳自己~</p>
          </div>
        </div>
        <div class="goods-list">
          <div class="goods-card" v-for="item in goodsList" :key="item.id">
            <van-checkbox
              checked-color="#ff6700"
              v-model="item.select"
              @change="setCheckedSingle()"
            ></van-checkbox>
            <div class="goods-details">
              <div class="wrap" @click="getDetails(item)">
                <img :src="setImg(item.imgSrc)" alt="商品" />
                <div class="goods-info">
                  <h4>{{ item.name }}</h4>
                  <p>{{ item.specifications }}</p>
                  <div class="price">
                    <span>￥{{ item.currentPrice }}</span>
                    <del>￥{{ item.costPrice }}</del>
                  </div>
                </div>
              </div>
              <van-stepper v-model="item.number" :disable-input="true" />
            </div>
          </div>
        </div>
      </div>

      <!-- 提交订单栏 -->

      <van-submit-bar button-text="结算">
        <div class="checked-all" @click="setCheckedAll()">
          <van-icon :class="checkedAll ? 'active' : ''" name="success" />
          <span>全选</span>
        </div>
      </van-submit-bar>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "cart",
  props: [],
  components: {},
  data() {
    return {
      checkedSingle: true, // 商品选择-单个
      checkedAll: false, // 商品选择-全部
      stepperNum: 1, // 商品数量-当前输入值
      isSubLoading: false, // 提交订单loading
      isLoading: false,
      rightBtn: {
        // 右侧按钮
        number: 2,
        iconName: ["setting-o", "chat-o"],
      },
      goodsList: [],
    };
  },
  //方法 函数写这里
  methods: {
    // ...mapMutations([
    //         'setGoods' // 商品信息
    //     ]),
    //     // 右侧按钮
    //     handleIcon(obj) {
    //         if (obj.index === 0) {
    //             console.log('设置');
    //         } else {
    //             console.log('消息');
    //         }
    //     },
    //     // 标题按钮
    //     handleTitle() {
    //         console.log('选择收货地址');
    //     },
    //     // 商品选择按钮
    //     setCheckedSingle() {
    //         let selectAll = true;
    //         this.goodsList.forEach(item => {
    //             if (!item.select) {
    //                 selectAll = false;
    //             }
    //         });
    //         this.checkedAll = selectAll;
    //     },
    //     // 全选
    setCheckedAll() {
      this.checkedAll = !this.checkedAll;
      if (this.checkedAll) {
        this.goodsList.forEach((item) => {
          item.select = true;
        });
      } else {
        this.goodsList.forEach((item) => {
          item.select = false;
        });
      }
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    },
    //     // 设置图片地址
    //     setImg(v) {
    //         return require('../../' + v);
    //     },
    //     // 结算
    //     onSubmit() {
    //         this.isSubLoading = true;
    //         setTimeout(() => {
    //             this.isSubLoading = false;
    //             this.$toast.success('购买成功');
    //         }, 2000)
    //     },
    //     // 获取商品详情
    //     getDetails(data) {
    //         this.setGoods(data);
    //         this.$router.push('/goods');
    //     }
  },
  //计算属性
  computed: {
    // total() {
    //   let sum = 0;
    //   this.goodsList.forEach((item) => {
    //     if (item.select) {
    //       sum += +item.currentPrice * item.number;
    //     }
    //   });
    //   return sum * 100;
    // },
  },
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
.cart {
  width: 100%;
  height: 100%;
}
h2 {
  width: 100%;
  height: 0.42rem;
  background-color: #ff6700;
  text-align: center;
  line-height: 0.42rem;
  font-size: 0.18rem;
  color: #fff;
}

.goods-number {
  width: 100%;
  height: 1.8rem;
  padding: 0.1rem;
  background-color: #ff6700;
}
.goods-number span {
  font-size: 0.16rem;
  color: #fff;
}
.cart-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.cart-content img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.cart-content span {
  font-size: 0.18rem;
  color: #333;
}
.cart-content p {
  font-size: 0.14rem;
  margin-top: 0.1rem;
  color: #999;
}
.goods-list {
  position: absolute;
  top: 0.7rem;

  width: 100%;
  padding: 0 0.1rem 0.5rem;
}
.goods-card {
  display: flex;

  width: 100%;
  padding: 0.1rem;
  border-radius: 0.08rem;
  background-color: #fff;
  margin-bottom: 0.1rem;
}
.goods-details {
  display: flex;
  flex-direction: column;

  width: 100%;
  padding-left: 0.1rem;
}
.van-submit-bar {
  bottom: 0.5rem;
}
.van-submit-bar__bar {
  height: 0.5rem;
}
 .checked-all {
  display: flex;
  align-items: center;
  position:absolute;
  left: 0;
}
.van-icon {
  display: inline-block;

  width: 0.25rem;
  height: 0.25rem;
  text-align: center;
  line-height: 0.28rem;
  margin: 0 0.1rem;
  border: 1px solid #ddd;
  border-radius: 50%;
  color: #fff;
}
.active {
  background-color: #ff6700;
}
.van-button {
  height: 0.5rem;
  line-height: 0.5rem;
  background-color: #ff6700;
  border: none;
}
</style>