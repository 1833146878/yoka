<template>
  <div class="p-content">
    <div class="gLeft">
      <div class="feature_new">
        <div class="menu">
          <ul>
            <li>
              <a href="http://www.yoka.com/fashion/California%20Almonds/index.shtml">抢手货</a>
            </li>
            <li>
              <a href="http://www.yoka.com/fashion/fashion12/index.shtml">时髦研修所</a>
            </li>
            <li>
              <a href="http://www.yoka.com/fashion/jiangxin/index.shtml">大咖秀</a>
            </li>
          </ul>
          <a class="tit" href="http://www.yoka.com/z/">独家策划</a>
        </div>
        <div class="box" id="feature_box">
          <el-carousel height="420px">
            <el-carousel-item v-for="(v,k) in banners.slice(5,10)" :key="k">
              <img :src="v.banner">
             </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div class="gRight">
      <div class="vdInBox">
          <div class="tit">YOKA EYE</div>
          <div class="vd" >
            <img src="http://p8.yokacdn.com/pic/YOKA/2018-11-12/U10075P1TS1542015126_22875.jpg" alt />
             <video :src="video.video" controls v-show="isvideo"></video>
            <div class="icon" v-show="!isvideo" @click="isvideo = true"></div>
            <div class="icon1" v-show="isvideo" @click="isvideo = false"><img src="/img/close.png"></div>
          </div>
          <em>潮流趋势</em>
          <strong>蒋欣要出演顾曼桢？重释经典的她更愿做个演员而非明星！</strong>
      </div>
    </div>
  </div>
</template>
<style scoped>
.vd video{
  width: 100%;height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.p-content {
  width: 1160px;
  overflow: hidden;
  margin: 30px auto;
}
.gLeft {
  width: 766px;
  float: left;
}
.feature_new {
  width: 766px;
  height: 490px;
  border-top: 4px solid #323232;
  background: #fff;
}
.menu {
  height: 70px;
  position: relative;
}
.menu > ul {
  height: 70px;
  float: right;
  list-style: none;
  margin: 0;
}
.menu > ul > li {
  float: left;
  height: 66px;
  margin-right: 20px;
  line-height: 66px;
}
.menu > ul > li > a {
  font-weight: bold;
  color: #535353;
  text-decoration: none;
}
.menu > ul > li > a:hover,
.menu > a:hover {
  color: #ff5400;
}
.menu > .tit {
  width: 120px;
  height: 66px;
  line-height: 66px;
  position: absolute;
  text-align: center;
  font-size: 24px;
  text-decoration: none;
  color: #535353;
  font-weight: bold;
}
.gRight {
  width: 373px;
  float: right;
  position: relative;
}
.vdInBox {
  width: 373px;
  height: 494px;
  background: #2c2c2c;
  text-align: center;
}
.vdInBox > a > .tit {
  height: 75px;
  background: url(http://p5.yokacdn.com/pic/div/2017/products/yoka/img/vd_fash.jpg?20170427)
    no-repeat;
  line-height: 75px;
  color: #e8e8e8;
  text-decoration: none;
}
.vdInBox > a {
  text-decoration: none;
  font-size: 24px;
}
.icon {
  /* width: 44px; */
  /* height: 41px; */
  background: url(http://p5.yokacdn.com/pic/div/2017/products/yoka/img/play.png)
    no-repeat;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -20px 0 0 -22px;
}
.icon1>img{
  width:15px ;
  height: 15px;
  position: absolute;
  top: 12%;
  right: -1px;
}
.vdInBox > a > em {
  display: block;
  height: 20px;
  line-height: 20px;
  font-size: 16px;
  color: #8b8b8b;
  margin-top: 18px;
  padding-bottom: 10px;
}
.vdInBox > a > strong {
  width: 296px;
  font-size: 18px;
  color: #fff;
  margin: 10px auto 0;
  line-height: 26px;
}
.vdInBox > a > em:hover,
.vdInBox > a > strong:hover {
  color: #ff5400;
}
</style>
<script>
export default {
     data(){
    return {
      banners:[],
      video:[],
      isvideo:false
    }
  },
  created(){
    this.axios.get('/home/scend/banner').then(res=>{
      console.log(res.data)
      this.banners = res.data
    }),
    this.axios.get('/home/detail/video').then(res=>{
      console.log(res.data)
      this.video = res.data[0]
    })
  }
};
</script>