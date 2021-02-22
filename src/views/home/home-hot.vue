<template>
  <div class="home-hot">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <swiper
        :slides-per-view="3"
        :space-between="50"
        :options="swiperOptions"
        @swiper="onSwiper"
        class="banner"
      >
        <swiper-slide :key="item.id" v-for="item in swiperList">
          <img :src="item.imgUrl" @click="$router.push('/goods')"
        /></swiper-slide>
        <!-- <swiper-slide><img src="/img/banner_2.png" /></swiper-slide>
    <swiper-slide><img src="/img/banner_3.png" /></swiper-slide> -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!-- 商品分类 -->
      <div class="tabs">
        <div class="tab" @click="getList()">
          <i class="iconfont icon-huo"></i>
          <p>热卖商品</p>
        </div>
        <div class="tab" @click="getList()">
          <i class="iconfont icon-huo"></i>
          <p>小米闪购</p>
        </div>
        <div class="tab" @click="getList()">
          <i class="iconfont icon-walletY-fill"></i>
          <p>以旧换新</p>
        </div>
        <div class="tab" @click="getList()">
          <i class="iconfont icon-icon-test"></i>
          <p>1分拼团</p>
        </div>
        <div class="tab" @click="getList()">
          <i class="iconfont icon-icon-"></i>
          <p>超值特卖</p>
        </div>
        <div class="tab" @click="getList()">
          <i class="iconfont icon-walletY-fill"></i>
          <p>真心想要</p>
        </div>
        <div class="tab" @click="getList()">
          <i class="iconfont icon-huo"></i>
          <p>每日甄选</p>
        </div>
        <div class="tab" @click="getList()">
          <i class="iconfont icon-dianshizhiboguankanshipinbofangmeiti"></i>
          <p>电视特卖</p>
        </div>
        <div class="tab" @click="getList()">
          <i class="iconfont icon-youxi"></i>
          <p>游戏配件</p>
        </div>
        <div class="tab" @click="getList()">
          <i class="iconfont icon-fenlei-"></i>
          <p>更多商品</p>
        </div>
      </div>
      <!-- 优惠专区 -->
      <div class="preferential">
        <h2>特价专区</h2>
        <div class="preferential-content">
          <div class="content-left">
            <img
              src="../../assets/images/mi_electric_cooker_4L.png"
              alt="商品"
            />
          </div>
          <div class="content-right">
            <div class="content-top">
              <img
                src="../../assets/images/mi_electric_cooker.png"
                alt="商品"
              />
            </div>
            <div class="content-bottom">
              <img
                src="../../assets/images/mi_loudspeaker_box.png"
                alt="商品"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="newsList">
        <ul>
          <!-- <router-link :to="`/detail/${n}?collectionName=home`" v-for="n of 30" :key="n" tag="li">
          <a href="javascript:;">
            <h2>{{n}}.xx</h2>
            <p>oooo</p>
          </a>
        </router-link> -->
        </ul>
      </div>
    </van-pull-refresh>
  </div>
</template>


<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Toast } from 'vant';

export default {
  name: "HomeHot",
  props: [],
  components: {},
  data() {
    return {
      isLoading: false,
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
        }
        
      },
      swiperList: [
        {
          id: "001",
          imgUrl: require("../../assets/images/banner_1.png"),
        },
        {
          id: "002",
          imgUrl: require("../../assets/images/banner_2.png"),
        },
        {
          id: "003",
          imgUrl: require("../../assets/images/banner_3.png"),
        },
      ],
    };
  },
  //方法 函数写这里
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },

    getList() {
      this.$router.push("/categories");
    },
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
      }, 1000);
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
  mounted() {
    // axios({
    //   url: "/api/goods",
    //   params: {
    //     _page: 1,
    //     _limit: 2,
    //   },
    //   headers: { token: "1234567890012345" },
    // }).then((res) => console.log(res));
  },
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
.banner {
  margin-top: 0.1rem;
  /* padding: 0 0.1rem; */
  width: 100%;
  height: 1.5rem;
  border-radius: 0.06rem;
  box-shadow: 2px 2px 15px 0px rgba(120, 120, 120, 0.3);
  overflow: hidden;
  --swiper-theme-color: #ff6600;
}

/* .swiper-slide {
  position: absolute;
  float: left;
} */
.swiper-slide img {
  width: 100%;
  height: 100%;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  margin-top: 0.3rem;
  padding: 0 0.1rem;
}
.tab {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 20%;
}
.tab i {
  margin-top: 0.2rem;
}
.tab img {
  width: 0.4rem;
}
.tab p {
  color: #999;
  font-size: 0.12rem;
  margin-top: 0.05rem;
}
.preferential {
  width: 100%;
  margin-top: 0.2rem;
  padding: 0 0.1rem;
}
.preferential h2 {
  font-size: 0.18rem;
  color: #333;
}
.preferential-content {
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-top: 0.1rem;
  padding-bottom: 0.2rem;
}
.content-left {
  width: 1.75rem;
  height: 2.64rem;
}
.content-left img {
  width: 100%;
  height: 100%;
  border-radius: 0.04rem;
  box-shadow: 2px 2px 15px 0px rgba(120, 120, 120, 0.3);
}
.content-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 1.75rem;
}
.content-right div {
  width: 100%;
  height: 1.3rem;
}
.content-right img {
  width: 100%;
  height: 100%;
  border-radius: 0.04rem;
  box-shadow: 2px 2px 15px 0px rgba(120, 120, 120, 0.3);
}
</style>