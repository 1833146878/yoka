<template>
  <div class="p-content">
    <div class="maskBox h2">
      <div class="g-list"  v-for="(a,i) in articles.slice(8)" :key="i">
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
    <div class="navTag">
      <a href="http://www.yoka.com/dna/223/825/index.html" target="_blank">舒适</a>
      <a href="http://www.yoka.com/dna/12/537/index.html" target="_blank">搭配</a>
      <a href="http://www.yoka.com/dna/17/948/index.html" target="_blank">颜色</a>
      <a href="http://www.yoka.com/dna/90/195/index.html" target="_blank">身材</a>
      <a href="http://www.yoka.com/dna/231/883/index.html" target="_blank">街拍</a>
      <a href="http://www.yoka.com/dna/9/583/index.html" target="_blank">发布会</a>
      <a href="http://www.yoka.com/dna/196/144/index.html" target="_blank">时装</a>
      <a href="http://www.yoka.com/dna/224/842/index.html" target="_blank">潮人</a>
      <a href="http://www.yoka.com/dna/125/103/index.html" target="_blank">时髦</a>
      <a href="http://www.yoka.com/dna/239/337/index.html" target="_blank">款式</a>
      <a href="http://www.yoka.com/dna/239/594/index.html" target="_blank">显瘦</a>
      <a href="http://www.yoka.com/dna/231/908/index.html" target="_blank">单品</a>
      <a href="http://www.yoka.com/dna/215/948/index.html" target="_blank">包包</a>
      <a href="http://www.yoka.com/dna/215/765/index.html" target="_blank">百搭</a>
      <a href="http://www.yoka.com/dna/115/572/index.html" target="_blank">明星</a>
    </div>
  </div>
</template>
<style scoped>
.p-content {
  overflow: hidden;
  margin: 30px auto;
}

.maskBox {
  width: 1180px;
  height: auto !important;
  margin: 0 auto;
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

.tit > a:hover {
  color: #ff5400;
}
.navTag {
  width: 1160px;
  height: 40px;
  margin: 0 auto;
}
.navTag > a {
  display: block;
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  border: 1px solid #d0d0d0;
  border-radius: 36px;
  float: left;
  margin-right: 10px;
  margin-bottom: 15px;
  color: #545454;
  font-size: 16px;
  background: #fff;
  text-decoration: none;
}
.navTag > a:hover {
  color: #ff5400;
  border-color: #4b4b4b;
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
    this.axios.get('/home/four/article').then(res=>{
      console.log(res.data.slice(8))
      this.articles = res.data
    })
  }
};
</script>