<template>
<div class="p_nav">
    <ul class="nav">
      <li>
        <img src="../../public/img/logo.png" />
      </li>
      <li>
        <a href="#">首页</a>
      </li>
      <li>
        <a href="#">美容</a>
      </li>
      <li>
        <a href="#">奢华</a>
      </li>
      <li>
        <a href="#">明星</a>
      </li>
      <li>
        <a href="#">乐活</a>
      </li>
      <li>
        <a href="#">男士</a>
      </li>
      <li>
        <a href="#">视频</a>
      </li>
      <li>
        <a href="#">独家</a>
      </li>
      <li>
        <a href="#">社区</a>
      </li>
      <li>
        <a href="#">品牌</a>
      </li>
      <li>
        <a href="#">体育</a>
      </li>
    </ul>
    <ul class="login">
      <li>
        <router-link to="/Login">登录</router-link>
      </li>
      <li>
       	<router-link to="/Register">注册</router-link>
      </li>
      <li>
        <a href="#">
          <img src="../../public/img/share_weixin.png" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../public/img/share_sina.png" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="../../public/img/zoom.png" />
        </a>
      </li>
    </ul>
  </div>

</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.p_nav{
  width: auto;
  margin: 20px auto;
  position: relative;
}
.nav > li > img {
  width: 180px;
}
.nav {
  width: auto;
  position: absolute;
  font-size: 20px;
}
.nav > li > a {
  font-size: 25px;
}
.login {
  width: 250px;
  position: absolute;
  right: 40px;
  font-size: 15px;
}
.login > li > a {
  font-size: 20px;
}
.nav,
.login {
  list-style: none;
  display: flex;
  justify-content: space-around;
}
a {
  margin: 5px;
  color: #000;
  text-decoration: none;
}
a:hover {
  color: #ff5400;
}
</style>
