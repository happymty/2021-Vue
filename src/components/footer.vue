<template funtional>
  <div class="footer">
    <!-- this is footer -->
    
    <router-link to="/home" tag="li" active-class="footer-active"><i class="iconfont icon-shouye"><span>首页</span></i></router-link>
    <router-link to="/categories" tag="li" active-class="footer-active"><i class="iconfont icon-fenlei-"><span>分类</span></i></router-link>
    <router-link to="/cart" tag="li" active-class="footer-active"><i class="iconfont icon-gouwuche"><span>购物车</span></i></router-link>
    <router-link to="/user" tag="li" active-class="footer-active"><i class="iconfont icon-biaoqiankuozhan_wode-310"><span>我的</span></i></router-link>
  
  </div>
</template>


<style scoped>
.footer {   
  height: 0.5rem;
  width: 100%;
  position: fixed;
  z-index: 999;
  bottom: 0;
  display: flex;
  background-color: #fdfdfd;
  box-shadow: 0px 2px 20px 0px rgba(120, 120, 120, 0.1);    
}
.footer li {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #a2a2a2;
  font-size: 0.12rem;
  text-align: center;
}
.footer .active {
  color: #51b28c;
}
.footer i {
  font-size: 0.2rem !important;
}
.footer span {
  display: block;
  font-size: 9px;
  line-height: 9px;
  margin-top: 0.08rem;
}
.footer-active{
  color: orange !important;
}
</style>
