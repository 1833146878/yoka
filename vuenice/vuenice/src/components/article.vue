<template>
  <div class="g-box">
    <headertwo></headertwo>
    <!-- 正文 begin -->
    <div class="g-content">
      <div class="gLeft">
        <h1 class="infoTitle">{{info.atitle}}</h1>

        <div class="infoTime">
          <dl class="name">
            <dt>
              <img :src="article"  alt="" />
            </dt>
            <dd>
              编辑：
              <i>{{info.author}}</i>
            </dd>
          </dl>

          <div class="time">
            <i>{{info.atime}}</i>来源于：
            <a href="http://www.yoka.com/" target="_blank">YOKA时尚网</a>
          </div>

          <dl class="textShare">
            <dt>分享:</dt>
            <dd>
              <!-- 分享代码开始 -->
              <div class="bshare-custom icon-medium">
                <div class="bsPromo bsPromo2"></div>
                <a title="分享到微信" class="bshare-weixin" target="_self" href="javascript:void(0);"></a>
                <a title="分享到新浪微博" target="_self" class="bshare-sinaminiblog"></a>
                <a title="分享到QQ空间" target="_self" class="bshare-qzone" href="javascript:void(0);"></a>
              </div>
              <!-- 分享代码结束 -->
            </dd>
          </dl>
        </div>
        <div class="double_quotes">
          <div>
            {{info.abstract}}
          </div>
        </div>
        <div v-html="info.article"></div>
        </div>
      <div class="gRight">
        <!--v6-->
        <div class="todayHot">
          <div class="tit">
            <span>
              今日热点
              <i></i>
            </span>
          </div>
          <div class="news" id="today_news">
            <div class="fcut">
              <div class="mask">
                <a
                  href="http://www.yoka.com/beauty/fragrance/2020/0309/53886401107799.shtml"
                  target="_blank">新剧营业！石原里美是怎么活成变美教科书的？</a>
              </div>
            </div>
            <div class="fcut">
              <div class="mask">
                <a
                  href="http://www.yoka.com/beauty/bodycare/2020/0306/53882501107765.shtml"
                  target="_blank">刘亦菲新封改走性感风！蜜桃臀水蛇腰我太可了！</a>
              </div>
            </div>
            <div class="fcut">
              <div class="mask">
                <a
                  href="http://www.yoka.com/beauty/fragrance/2020/0305/53879501107742.shtml"
                  target="_blank">
                  新歌来了！ Lady
                  Gaga《STUPID LOVE》变美少女战士
                </a>
              </div>
            </div>
            <div class="fcut">
              <div class="mask">
                <a
                  href="http://www.yoka.com/beauty/fragrance/2020/0304/53875601107717.shtml"
                  target="_blank">是心动啊！金智秀的果汁妆也太甜了吧！</a>
              </div>
            </div>
            <div class="fcut">
              <div class="mask no">
                <a
                  href="http://www.yoka.com/beauty/fragrance/2020/0302/pic53867801335498.shtml"
                  target="_blank">金多美新画报营业，今天也是超灵的水蜜桃女孩！</a>
              </div>
            </div>
          </div>
        </div>
        <dl class="publicTitle">
          <dt>独家策划</dt>
          <dd>
            <a href="#" target="_blank">抢手货</a>
            <a href="#" target="_blank">时髦研修所</a>
          </dd>
        </dl>
        <div class="bbs_marrow">
          <img src="http://dp.yokacdn.com/yoka/2020/03/2700_1.jpeg" alt />
        </div>

        <!--adBlockBegin-->
        <div class="vdInBox">
          <a href="https://v.qq.com/x/page/l0768nyaz9v.html">
            <div class="tit">YOKA EYE</div>
            <div class="vd">
              <img
                src="http://p8.yokacdn.com/pic/YOKA/2018-11-12/U10075P1TS1542015126_22875.jpg"
                alt
              />
              <div class="icon"></div>
            </div>
            <em>潮流趋势</em>
            <strong>
              蒋欣要出演顾曼桢？重释经典的她更
              <br />愿做个演员而非明星！
            </strong>
          </a>
        </div>
        <div class="right_fixed" id="right_fixed">
          <dl class="publicTitle">
            <dt>大家都在搜</dt>
          </dl>
          <div class="everyoneSearch">
            <a href="http://www.yoka.com/dna/120/354/index.html" target="_blank">品牌</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/136/564/index.html" target="_blank">系列</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/90/309/index.html" target="_blank">设计</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/238/756/index.html" target="_blank">pink</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/54/346/index.html" target="_blank">活动</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/229/178/index.html" target="_blank">时尚</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/146/652/index.html" target="_blank">左岸</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/12/537/index.html" target="_blank">搭配</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/9/583/index.html" target="_blank">发布会</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/89/807/index.html" target="_blank">生活</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/86/158/index.html" target="_blank">生活方式</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/142/319/index.html" target="_blank">pony</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/325/447/index.html" target="_blank">ralph</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/326/56/index.html" target="_blank">lauren</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/114/522/index.html" target="_blank">媒体</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/115/572/index.html" target="_blank">明星</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/92/892/index.html" target="_blank">全球</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/125/997/index.html" target="_blank">行动</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/214/810/index.html" target="_blank">运动</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/327/241/index.html" target="_blank">vivi</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/92/358/index.html" target="_blank">人气</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/324/299/index.html" target="_blank">girl</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/214/340/index.html" target="_blank">樱花</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/108/425/index.html" target="_blank">女孩子</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/75/768/index.html" target="_blank">可爱</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/196/639/index.html" target="_blank">面料</a>
            <span>/</span>
            <a href="http://www.yoka.com/dna/227/196/index.html" target="_blank">水原希子</a>
            <span>/</span>
            <a
              target="_blank"
              href="www.yoka.com/brand/news/2019/0805/53119101101734.shtml">香奈儿山茶花润泽水感乳液</a>
            <span>/</span>
            <a
              target="_blank"
              href="http://www.yoka.com/brand/news/2019/0802/53115301101709.shtml">香奈儿山茶花润泽微精华水</a>
            <span>/</span>
            <a
              target="_blank"
              href="http://www.yoka.com/brand/news/2019/0801/53112401101697.shtml">粉底CHANEL色号</a>
            <span>/</span>
            <a
              target="_blank"
              href="http://www.yoka.com/beauty/skincare/2019/0731/53109401101674.shtml">遮瑕膏和粉底液</a>
            <span>/</span>
            <a
              target="_blank"
              href="http://www.yoka.com/brand/news/2019/0729/53104001101644.shtml">CHANEL粉底液怎么样</a>
            <span>/</span>
            <a
              target="_blank"
              href="http://www.yoka.com/beauty/fragrance/2019/0725/53086001101519.shtml">粉底哪个牌子持久</a>
            <span>/</span>
            <a
              target="_blank"
              href="http://brand.yoka.com/cosmetics/chanel/detail505174.htm">粉底CHANEL色号</a>
            <span>/</span>
            <a
              target="_blank"
              href="http://brand.yoka.com/cosmetics/chanel/detail505174.htm">CHANEL粉底液怎么样</a>
            <span>/</span>
            <a
              target="_blank"
              href="http://brand.yoka.com/cosmetics/chanel/detail505174.htm">粉底哪个牌子持久</a>
            <span>/</span>
            <a
              target="_blank"
              href="http://brand.yoka.com/cosmetics/chanel/detail505174.htm">遮瑕膏和粉底液</a>
            <span>/</span>
            <a
              target="_blank"
              href="http://brand.yoka.com/cosmetics/chanel/detail505174.htm">CHANEL粉底液怎么样</a>
            <span>/</span>
            <a
              target="_blank"
              href="http://brand.yoka.com/cosmetics/chanel/detail505002.htm">香奈儿柔光持妆粉底液怎么样</a>
            <span>/</span>
        </div>
        </div>
      </div>
    </div>
    <!-- 正文 end -->
  </div>
</template>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.g-box {
  width: 1160px;
  margin: 0 auto;
  padding: 0 10px;
  overflow: hidden;
  background: #fff;
}
.g-content {
  width: 1160px;
  margin: 40px 0;
  clear:both;
  overflow: visible;
}
.gLeft {
  width: 780px;
  overflow: visible;
  float: left;
}
.textCon>.editer_pic>img{
  text-align: center;
}
.infoTime {
  width: 780px;
  height: 42px;
  line-height: 42px;
  color: #5c5c5c;
  padding: 11px 0;
  border-bottom: 1px solid #f0f0f0;
  border-top: 1px solid #f0f0f0;
  margin-bottom: 40px;
  position: relative;
}
.name {
  width: 240px;
  height: 42px;
  float: left;
}
.name > dt {
  float: left;
  position: relative;
  margin-right: 20px;
}
.name > dt > img {
  width: 100%;
  border-radius: 50%;
  vertical-align: top;
}
.name > dl {
  width: 166px;
  overflow: hidden;
  margin-left: 30px;
  padding-left: 20px auto;
  float: left;
}
.time {
  width: 354px;
  overflow: hidden;
  float: left;
}
.time > i {
  margin-right: 20px;
}
.time > a {
  color: #353535;
  text-decoration: none;
}
.time > a:hover {
  color: #ff5400;
}
.textShare {
  width: 180px;
  height: 42px;
  float: right;
}
.textShare > dt {
  width: 36px;
  float: left;
  overflow: hidden;
}
.bshare-custom > a {
  width: 32px;
  height: 32px;
  margin: 0;
  display: block;
  padding-left: 0;
  margin-left: 9px;
  background: url(http://p5.yokacdn.com/pic/div/2017/products/yoka/img/share_all.png)
    no-repeat;
  float: left;
  text-indent: -999px;
}
.icon-medium {
  padding-top: 6px;
  line-height: 20px !important;
}
.bsPromo {
  position: absolute;
  z-index: 100;
}
.bshare-qzone {
  background-position: 0 -64px;
}
.bshare-sinaminiblog {
  background-position: 0 -32px;
}
.double_quotes {
  width: 710px;
  overflow: hidden;
  padding: 30px 0 0 70px;
  line-height: 30px;
  font-size: 16px;
  color: #5d5d5d;
  background: #f8f8f8
    url(http://p5.yokacdn.com/pic/div/2017/products/yoka/img/double_quotes_l.png)
    no-repeat;
}
.double_quotes > div {
  width: 640px;
  overflow: hidden;
  padding: 0 70px 30px 0;
  background: #f8f8f8
    url(http://p5.yokacdn.com/pic/div/2017/products/yoka/img/double_quotes_r.png)
    no-repeat right bottom;
}
.gRight {
  width: 330px;
  float: right;
  position: relative;
}

.todayHot > .tit {
  border-bottom: 1px solid #222;
  font-size: 18px;
  position: relative;
  margin-bottom: 13px;
}
.todayHot > .tit > span > i {
  margin: 0 0 0 -10px;
  display: block;
  position: absolute;
  left: 50%;
  bottom: -21px;
  border: 10px solid;
  border-color: #222 #fff #fff #fff;
}
.tit > span {
  width: 200px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  text-align: center;
  background: #222;
  color: #fff;
  display: block;
}
.fcut {
  height: 50px;
  background: url(http://p5.yokacdn.com/pic/div/2017/products/yoka/img/today.png)
    no-repeat center bottom;
  text-align: center;
  margin-bottom: 4px;
  padding-bottom: 23px;
}
.mask {
  height: 56px;
  line-height: 28px;
}
.mask > a {
  color: #222;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
}
.mask > a:hover {
  color: #ff5400;
}
.textCon {
  width: 780px;
  padding-top: 40px;
}
.textCon > p {
  line-height: 32px;
  margin: 0 auto 20px;
  width: 640px;
  color: #333;
  font-size: 16px;
}
.editer_pic {
  width: 640px;
  margin: 0 auto;
}
.publicTitle {
  padding-bottom: 8px;
  border-bottom: 4px solid #000;
  margin-bottom: 8px;
  /* line-height: 26px; */
  height: 30px;
}
.publicTitle > dt {
  float: left;
  height: 26px;
  font-size: 24px;
  color: #000;
}
.publicTitle > dd {
  float: right;
  height: 26px;
  font-size: 14px;
  line-height: 34px;
}
.publicTitle > dd > a {
  float: right;
  color: #575757;
  margin-left: 16px;
  text-decoration: none;
}
.publicTitle > dd > a:hover {
  color: #ff5400;
}
.bbs_marrow {
  padding-bottom: 30px;
}
.vdInBox {
  width: 353px;
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
.vd {
  width: 373px;
  height: 280px;
  position: relative;
}
.vdInBox > a {
  text-decoration: none;
  text-align: center;
  font-size: 24px;
}
.icon {
  width: 44px;
  height: 41px;
  background: url(http://p5.yokacdn.com/pic/div/2017/products/yoka/img/play.png)
    no-repeat;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -20px 0 0 -22px;
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
.everyoneSearch {
  width: 330px;
  color: #f3f3f3;
  margin-bottom: 20px;
}
.everyoneSearch > a {
  font-size: 16px;
  color: #3f3f3f;
  text-decoration: none;
}
.everyoneSearch > a:hover {
  color: #ff5400;
}
.everyoneSearch > span {
  margin: 0 10px;
  color: #cacaca;
}
</style>
<script>
import headertwo from '../components/headertwo.vue';
export default {
    components:{
      headertwo,
  },
  data(){
    return {
        info:{}
    }
  },
  created(){
      let id = this.$route.params.id;
      console.log(this.$route)
      this.axios.get('/home/article/detail?id=' + id).then(res=>{
        console.log(res.data)
          this.info = res.data[0];
      });
  }
};
</script>