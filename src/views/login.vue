<template>
  <div class="login">
    <div id="container">
      <h1 class="title">用户登陆界面</h1>
      <div class="login-box-bodyWrap">
        <div class="login-box-body">
          <form>
            <input
              type="text"
              placeholder="请输入你的账号"
              id="username"
              v-model="username"
            />
            <input
              type="password"
              placeholder="请输入你的密码"
              id="password"
              v-model="password"
            />
            <p class="tips">{{ msg }}</p>
            <button type="text" @click="login">登录</button>
          </form>
          <!-- /.social-auth-links -->
          <router-link to="/reg" class="reg">注册</router-link>
          <a href="#" id="forgot">如你忘记了密码，请点击此处</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: [],
  components: {},
  data() {
    return {
      username: "",
      password: "",
      msg: "",
    };
  },
  //方法 函数写这里
  methods: {
    login() {
      // 发送登录请求,成功种token，跳转到之前,c
      axios({
        url: "http://139.224.229.232:3333/api/login",
        params: {
          username: this.username,
          password: this.password,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      }).then((res) => {
        console.log(res);
        if (res.data.err === 0) {
          //种token
          window.localStorage.setItem("user", JSON.stringify(res.data));
          //跳转到之前
          if (this.$route.query.p) {
            this.$router.replace(this.$route.query.p);
          } else {
            this.$router.replace("/user");
          }
        } else {
          this.msg = res.data.msg; //跳转到之前
        }
      });
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
.login {
  width: 100%;
  height: 100%;
  /* border-radius: 10px; */
  animation: move 1s;
  /* background: url("http://game.gtimg.cn/images/yxzj/coming/v2/skins//image/20210108/16100860517773.jpg")
    no-repeat;
  background-size: cover; */
  

}
#container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  top: 1rem;
  border-radius: 0.1rem;
}
h1 {
  font-size: 0.35rem;
  color: #4ea4dc;
  text-align: center;
  font-family: Constantia;
  border-bottom: 4px solid #4ea4dc;
  font-weight: bold;
  padding-top: 0.1rem;
  padding-bottom: 0.2rem;
  margin-bottom: 0.2rem;
}
#username {
  position: relative;
  padding: 0.1rem 0;
  margin: 0.3rem 0;
  outline-style: none;
  width: 100%;
  height: 0.3rem;
  border-style: none;
  border-bottom: 3px solid #ffffff;
  background-color: rgba(0, 0, 0, 0);
  font-size: 0.18rem;
  color: black;
}
#password {
  position: relative;
  padding: 0.1rem 0;
  margin: 0.3rem 0;
  outline-style: none;
  width: 100%;
  height: 0.3rem;
  border-style: none;
  border-bottom: 3px solid #ffffff;
  background-color: rgba(0, 0, 0, 0);
  font-size: 0.18rem;
  color: black;
}
.tips {
  color: red;
  font-size: 0.15rem;
}
button {
  display: inline-block;
  border: 1px solid #4ea4dc;
  width: 100%;
  line-height: 0.4rem;
  padding: 0 1rem;
  margin-top: 0.3rem;
  background-color: #4ea4dc;
  border-radius: 0.2rem;
  color: #fff;
  font-size: 0.2rem;
}
.reg {
  display: inline-block;
  border: 1px solid #4ea4dc;
  width: 100%;
  line-height: 0.4rem;
  padding: 0 1rem;
  margin-top: 0.2rem;
  text-align: center;
  background-color: #4ea4dc;
  border-radius: 0.2rem;
  color: #fff;
  font-size: 0.2rem;
}
#forgot {
  display: block;
  text-align: center;
  margin-top: 50px;
  color: #4ea4dc;
  text-decoration: none;
}

@keyframes move {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>