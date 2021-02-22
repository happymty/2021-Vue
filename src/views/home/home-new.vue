<!-- 主页-新品 -->
<template>
  <div class="home-new">
    <!-- this is home-new -->
    <div class="phone">
      <h1><span>小米</span> 让生活更精彩</h1>
      <img
        class="mi-phone"
        src="../../assets/images/mi_phone_nobg.png"
        alt="手机"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNew",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  methods: {},
};
</script>

<style scoped >
.home-new {
  width: 100%;
  height: 5.8rem;
  padding: 0 0.1rem;
  background-color: #ccc;
}

.phone {
  position: relative;

  width: 100%;
  height: 100%;
}
h1 {
  width: 100%;
  text-align: center;
  font-size: 0.35rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
span {
  color: #ff6700;
}
</style>
