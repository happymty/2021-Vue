<template>
  <div class="reg">
    <div id="content">
      <div id="container" class="animated bounceInLeft">
        <span class="login">账号注册</span>

        <form  >
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

          <!-- <input
            type="password"
            placeholder="请确认你的密码"
            id="passwordAff"
          /> -->
          <p class="tips">{{ msg }}</p>
          <button type="submit" @click="reg">注册</button>
          <p class="back" @click="$router.push('/login')">返回登陆</p>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reg",
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
    reg(){
        //发送登录请求,成功跳转到登录
        this.$axios({
          url:'http://localhost:3333/api/reg',
          method:'post',
          data:{
            username:this.username,
            password:this.password,
          }
        }).then(
          res => {
            if(res.data.err === 0){
              this.$router.replace('/login')
            }else{
              this.msg=res.data.msg;//跳转到之前
            }
          } 
        )
      }
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
    axios.post('http://139.224.229.232:3333/api/reg').then(
      res => console.log(res)
    )
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


<style scoped >

#content {
  width: 100%;
  height: 37.5rem;
  /* background-color: rgba(255, 255, 255, 0.8); */
  margin: 0 auto;
  position: relative;
  top: 0;
}
#container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* position: relative; */
}

.login {
  display: block;
  font-size: 0.35rem;
  color: #4ea4dc;
  text-align: center;
  font-family: Constantia;
  border-bottom: 5px solid #4ea4dc;
  font-weight: bold;
  padding-top: 0.8rem;
  padding-bottom: 0.3rem;
  margin-bottom: 0.2rem;
}

#username {
  position: relative;
  padding: 0.1rem 0;
  margin: 0.2rem 0;
  outline-style: none;
  width: 100%;
  height: 0.35rem;
  border-style: none;
  border-bottom: 3px solid #ffffff;
  background-color: rgba(0, 0, 0, 0);
  font-size: 0.2rem;
  color: black;
}
#password {
  position: relative;
  padding: 0.1rem 0;
  margin: 0.2rem 0;
  outline-style: none;
  width: 100%;
  height: 0.35rem;
  border-style: none;
  border-bottom: 3px solid #ffffff;
  background-color: rgba(0, 0, 0, 0);
  font-size: 0.2rem;
  color: black;
}
#passwordAff {
  position: relative;
  margin: 0.2rem 0;
  padding: 0.1rem 0;
  outline-style: none;
  width: 100%;
  height: 0.35rem;
  border-style: none;
  border-bottom: 3px solid #ffffff;
  background-color: rgba(0, 0, 0, 0);
  font-size: 0.2rem;
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
  margin-top: 0.7rem;
  background-color: #4ea4dc;
  border-radius: 0.2rem;
  color: #fff;
  font-size: 0.25rem;
}
.back{
  border: 1px solid #4ea4dc;
  width: 100%;
  line-height: 0.35rem;
  padding: 0 1rem;
  margin-top: 0.2rem;
  background-color: #4ea4dc;
  border-radius: 0.2rem;
  color: #fff;
  font-size: 0.2rem;
  text-align: center;
}
</style>