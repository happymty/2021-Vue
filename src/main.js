
import Vue from 'vue'
import App from './layouts/App.vue'
import router from './plugins/router.js'
import store from './store'

import './assets/JS/font.js'
import './assets/CSS/bass.css'
import './assets/icon/iconfont.css'
//设置开发环境是否打开，false为开发者环境
import './plugins/axios.js'
import './plugins/vant.js'
import Swiper from "vue-awesome-swiper";
import 'swiper/swiper-bundle.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Swiper)
Vue.config.productionTip = false

let vm=new Vue({
  data:{
    bNav:true,
    bFoot:true,
    bLoading:false
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vm;
