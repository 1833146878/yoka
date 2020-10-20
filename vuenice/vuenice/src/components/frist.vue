<template>
  <div class="g-box">
    <!-- 第一栏 begin -->
    <div class="p-content">
      <div class="gLeft">
        <div class="gListBox">
          <div class="g-list" v-for="(a,i) in articles" :key="i">
            <div class="img">
              <router-link :to="`/article/${a.aid}`">
                <img :src="a.apic"/>
              </router-link>
            </div>
            <div class="tit">
              <router-link :to="`/article/${a.aid}`">{{ a.atitle }}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="gRight">
        <div class="fs_todayHot">
          <div class="tit">
            <span>
              今日热点
              <i></i>
            </span>
          </div>
          <div class="hotText">
            <div class="fcut">
              <a
                href="http://www.yoka.com/fashion/popinfo/2020/0911/54238001111087.shtml"
              >Roger Vivier「Pink Fluffy」概念展闪耀登场</a>
            </div>
            <div class="fcut">
              <a
                href="http://www.yoka.com/fashion/popinfo/2020/0901/54210401110827.shtml"
              >Edition 十周年时尚大秀</a>
            </div>
            <div class="fcut">
              <a
                href="http://www.yoka.com/fashion/popinfo/2020/0817/54153901110287.shtml"
              >BOSS全球代言人李易峰首次亮相七夕活动现场</a>
            </div>
            <div class="fcut no">
              <a
                href="http://www.yoka.com/fashion/popinfo/2020/0722/54092501109701.shtml"
              >THE9全员示范路易威登Crafty2020系列</a>
            </div>
          </div>
          <div class="adBox">
            <a href="http://www.yoka.com/star/hotshot/2020/0303/53872701107696.shtml" target="_blank">
              <img src="http://dp.yokacdn.com/yoka/2020/03/2666_1.jpg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>  
<style scoped>
.g-box {
  width: 1160px;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 10px;
  background: #f3f3f3;
}
.p-content {
  margin: 30px 0;
}
.gLeft {
  width: 786px;
  height: 810px;
  float: left;
}
.g-list {
  width: 373px;
  height: 395px;
  float: left;
  margin: 0 20px 20px 0;
  background: #fff;
}
.tit {
  text-align: center;
  width: 320px;
  height: 52px;
  margin: 16px auto 0;
}
.tit > a {
  color: #353535;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}
.gRight {
  float: right;
}
.fs_todayHot {
  width: 330px;
  height: 810px;
  padding: 0 21px 0 22px;
  overflow: hidden;
  background: #fff;
}
.fs_todayHot > .tit {
  border-bottom: 1px solid #222;
  font-size: 18px;
  position: relative;
  margin-bottom: 13px;
}
.fs_todayHot > .tit > span > i {
  margin: 0 0 0 -10px;
  display: block;
  position: absolute;
  left: 50%;
  bottom: -21px;
  border: 10px solid;
  border-color: #222 #fff #fff #fff;
}
span {
  width: 200px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  text-align: center;
  background: #222;
  color: #fff;
  display: block;
}
.hotText > div {
  width: 330px;
  height: 46px;
  background: url(http://p5.yokacdn.com/pic/div/2017/products/yoka/img/today.png)
    no-repeat center bottom;
  text-align: center;
  font-size: 16px;
  padding: 14px 0 0;
}
.hotText > div.no {
  background: none;
}
.hotText > div > a {
  color: #222;
  text-decoration: none;
}
</style>
<script>
export default {
  data(){
    return {
      articles:[]
    }
  },
  created(){
    this.axios.get('/home/first/article').then(res=>{
      console.log(res.data)
      this.articles = res.data
    })
  }
};
</script>