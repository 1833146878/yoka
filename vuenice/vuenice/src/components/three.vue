<template>
  <div class="p-content">
    <div class="maskBox">
      <div class="g-verFash" v-for="(a,i) in articles.slice(4,8)" :key="i">
        <router-link :to="`/article/${a.aid}`">
          <img :src="a.apic" alt="潮流情报"/>
          <dl>
            <dt>潮流情报</dt>
            <dd>{{a.atitle}}</dd>
          </dl>
        </router-link >
      </div>
    </div>
  </div>
</template>
<style scoped>
.p-content {
  width: 1160px;
  overflow: hidden;
  margin: 30px auto;
}
.maskBox {
  width: 1180px;
}
.maskBox > a {
  text-decoration: none;
}
.g-verFash {
  float: left;
  margin-right: 20px;
  width: 275px;
  height: 442px;
  position: relative;
}
.g-verFash > a > dl:hover {
  color: #ff5400;
}
.g-verFash > a > dl {
  width: 100%;
  height: 150px;
  cursor: pointer;
  background: url(http://p5.yokacdn.com/pic/div/2017/products/yoka/img/foucs_tit_bg.png);
  position: absolute;
  text-align: center;
  line-height: 58px;
  left: 0;
  bottom: 0;
  color: #fff;
  margin: 0 auto;
  font-size: 16px;
}
.g-verFash > a > dl > dt {
  width: 90%;
  height: 24px;
  margin: 52px auto 15px;
  color: #e3e3e3;
}
.g-verFash > a > dl > dd {
  width: 90%;
  height: 48px;
  line-height: 24px;
  margin: 0 auto;
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
    this.axios.get('/home/three/article').then(res=>{
      console.log(res.data)
      this.articles = res.data
    })
  }
};
</script>