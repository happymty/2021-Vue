<template functional>
  <div class="header">
    <!-- this is head -->
    <div  class="header-content">
       
        <div  class="left-icon">
          <i class="van-icon iconfont icon-richscan_icon"></i>
        </div> 
        <!----> 
        <div  class="title">
          <!----> 
        <input  type="text" placeholder="请输入内容" readonly="readonly"> 
        <img  src="../assets/images/search.png" alt="搜索">
        </div> 
        <div  class="other">
        <!---->  
        <i  class=" iconfont icon-xiaoxi"></i> 
        <!---->
        </div>
 
    </div>
    
  </div>
</template>




<style scoped>
.header {
    position: fixed;
    top: 0px;
    width: 100%;
    height: 0.42rem;
    padding: 0.07rem 0.1rem;
    background: #ff6700;
    z-index: 99999;
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.left-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.36rem;
  height: 100%;
  
}
.icon-richscan_icon {
      font-size: 0.2rem;
      width: 0.2rem;
      height: 0.2rem;
      color: #fff;
      
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  max-width: 3rem;
  padding: 0 0.1rem;
}
input {
  width: 100%;
  height: 100%;
  border: none;
  padding: 0.05rem 0.1rem 0.05rem 0.3rem;
  border-radius: 0.02rem;
  color: #333;
  background-color: #fff;
}
.title> img {
  position: absolute;
  left: 0.6rem;
  width: 0.14rem;
  height: 0.14rem;
}
.other {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.other  img {
    width: 0.18rem;
    height: 0.18rem;
    margin-left: 0.1rem;
}
.other>.iconfont {
  font-size: 0.2rem;
  color: #fff;
  margin-left: 0.1rem;
}
</style>
