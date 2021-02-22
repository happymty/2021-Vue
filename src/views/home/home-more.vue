
<template>
  <div class="home-more"  v-cloak>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
       
      >
        <div class="goods" >
          <div class="goods-content" v-for="item in dataList" :key="item.id" >
            <div class="goods-picture">
              <img :src="item.imgSrc" alt="商品" />
            </div>
            <p class="goods-name">{{ item.name || "-" }}</p>
            <p class="goods-details">{{ item.specifications || "-" }}</p>
            <span>{{ item.currentPrice || "-" }}元</span>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "home-more",
  components: {},
  props: {},
  data() {
    return {
      isLoading: false,
      loading: false, // 加载中
      finished: false, // 加载完成
      dataList: [], // 数据列表
    };
  },
  watch: {},
  updated() {
     axios.get("/api/homemore", { headers: { token: "1234567890012345" } })
      .then((res) => {
        // console.log(res);
        this.dataList = res.data.data;
      });
  },
  mounted() {
    // axios.get("/api/homemore")
    //   .then((res) => {
    //     // console.log(res);
    //     this.dataList = res.data.data;
    //     // console.log(this.dataList[0]);
    //   });
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.dataList.push(this.dataList.length + 1);
        }
        this.loading = false;
        if (this.dataList.length >= 30) {
          this.finished = true;
        }
      }, 1500);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>

<style scoped >
.home-more {
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow: auto;
  background: #fff url("../../assets/images/bg_1.png") no-repeat 0 0;
  background-size: 100% 100%;
  padding-bottom: 0.52rem;
}
.goods {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 0.1rem 0.1rem;
}
.goods-content {
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 1.74rem;
  padding: 0.1rem 0.08rem;
  margin-bottom: 0.08rem;
  background-color: #fff;
  border-radius: 0.04rem;
}
.goods-picture {
  width: 100%;
}
.goods-picture img {
  width: 100%;
  height: 100%;
}

.goods-name {
  width: 100%;
  text-align: center;
  font-size: 0.14rem;
  color: #000;
  margin-top: 0.1rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-details {
  width: 100%;
  text-align: center;
  font-size: 0.12rem;
  color: #666;
  margin-top: 0.1rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
span {
  font-size: 0.14rem;
  color: #ff6700;
  margin-top: 0.1rem;
}
</style>
