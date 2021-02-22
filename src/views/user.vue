<template>
  <div class="user">
    <!-- this is user page -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="user-child">
        <div class="user-info">
          <div class="user-info-inner">
            <div class="user-name">
              <img :src="$route.query.user[0].auth_icon" alt="头像" />
              <h3>{{ $route.query.user[0].nikename }}</h3>
              <span @click="logout">注销</span>
            </div>
            <div class="vip">
              <div class="user-vip">
                <div class="vip-title">
                  <div class="vip-title-info">
                    <i>优享会员</i>
                    <p>开通即享7大权益</p>
                  </div>
                  <div class="buy-vip">
                    <span>立即开通></span>
                    <!-- <van-icon name="play" /> -->
                  </div>
                </div>
                <div class="vip-privilege">
                  <span>专享价</span>
                  <span>任务红包</span>
                  <span>1小时到达</span>
                  <span>会员日</span>
                  <span>共享会员</span>
                  <span>超级积分</span>
                  <span>专享客服</span>
                  <span>敬请期待</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="user-money">
          <div class="user-money-details">
            <span>￥0</span>
            <p>余额</p>
          </div>
          <div class="user-money-details">
            <span>0</span>
            <p>红包</p>
          </div>
          <div class="user-money-details">
            <span>0</span>
            <p>商品券</p>
          </div>
          <div class="user-money-details" style="border-right: 0px">
            <span>0</span>
            <p>余额</p>
          </div>
        </div>
        <div class="user-order">
          <div class="order-title">
            <h2>我的订单</h2>
            <div class="order-all">
              <span>全部订单></span>
              <!-- <van-icon name="arrow" /> -->
            </div>
          </div>
          <div class="order-process">
            <div class="order-process-details">
              <i class="iconfont icon-walletY-fill"></i>
              <span>待付款</span>
            </div>
            <div class="order-process-details">
              <i class="iconfont icon-walletY-fill"></i>
              <span>待发货</span>
            </div>
            <div class="order-process-details">
              <i class="iconfont icon-walletY-fill"></i>
              <span>配送中</span>
            </div>
            <div class="order-process-details">
              <i class="iconfont icon-walletY-fill"></i>
              <span>已完成</span>
            </div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "user",
  props: [],
  components: {},
  data() {
    return {
      isLoading: false,
    };
  },
  //方法 函数写这里
  methods: {
    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    },
    // 注销
    logout() {
      window.localStorage.removeItem("user");
      this.$router.replace("/login");
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
  created() {
    // console.log(this.$route);
    this.id = this.$route.params.id;
  },
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
  beforeRouteEnter(to, from, next) {
    axios({
      url: "/api/user",
    }).then((res) => {
      // console.log(res);
      if (res.data.err === 0) {
        // console.log(3);
        to.query.user = res.data.data;
        next();
        // next(_this=>_this.user=res.data.data)
      } else {
        next("/login");
      }
    });
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
};
</script>


<style  scoped>
.user {
  width: 100%;
  height: 100%;
}
.user-child {
  width: 100%;
  min-height: 100%;
}
.user-info {
  position: relative;

  width: 100%;
  height: 2rem;
  overflow: hidden;
}
.user-info-inner {
  position: absolute;
  top: 0;
  left: -70%;

  width: 240%;
  height: 100%;
  padding: 0.3rem 70% 0;
  border-radius: 0 0 50% 50%;
  background: linear-gradient(45deg, #fff, #ffbee0c7);
  overflow: hidden;
}
.user-name {
  display: flex;
  align-items: center;

  padding: 0 0.1rem;
}
.user-name img {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
}
.user-name h3 {
  font-size: 0.16rem;
  margin-left: 0.2rem;
}
.user-name span {
  width: 0.6rem;
  height: 0.16rem;
  font-size: 0.14rem;
  line-height: 0.16rem;
  border-radius: 0.08rem;
  color: #999;
  margin-left: 0.1rem;
  border: 1px solid #999;
  text-align: center;
}
.vip {
  width: 100%;
  padding: 0.2rem 0.1rem 0;
}
.user-vip {
  width: 100%;
  height: 1rem;
  border-radius: 0.1rem;
  padding: 0 0.1rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: rgba(250, 225, 112, 0.815);
}
.vip-title {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 0.35rem;
}
.vip-title-info {
  display: flex;
  align-items: center;
}
.vip-title-info i {
  font-size: 0.16rem;
  font-weight: bold;
}
.vip-title-info p {
  font-size: 0.14rem;
  margin-left: 0.15rem;
}
.buy-vip {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 0.8rem;
  height: 0.2rem;
  font-size: 0.14rem;
  border-radius: 0.1rem;
  color: #333;
  background-color: rgba(250, 225, 112, 0.815);
}
.vip-privilege {
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  padding: 0 0.1rem;
}
.vip-privilege span {
  width: 25%;
  margin-top: 0.04rem;
}
.user-money {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0.1rem;
  padding: 0.1rem 0;
  background-color: #fff;
  border-radius: 0.1rem;
}
.user-money-details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 25%;
  height: 100%;
}
.user-money-details span {
  font-size: 0.16rem;
  font-weight: bold;
}
.user-money-details p {
  font-size: 0.14rem;
  color: #666;
}
.user-money-details {
  border-right: 1px solid #ccc;
}
.user-order {
  margin: 0.1rem;
  padding: 0.1rem;
  background-color: #fff;
  border-radius: 0.1rem;
}
.order-title {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 0.4rem;
}
.order-title h2 {
  font-size: 0.18rem;
}
.order-title .order-all {
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.12rem;
  color: #999;
}
.order-process {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.order-process-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 25%;
}
.order-process-details i {
  color: rgb(255, 86, 170);
  font-size: 0.25rem;
}
.order-process-details span {
  color: #666;
  font-size: 0.14rem;
  margin-top: 0.1rem;
}
</style>