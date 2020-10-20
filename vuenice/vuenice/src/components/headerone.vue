<template>
  <div class="headerone">
			<div class="logo">
				<router-link to="/">
					<img src="http://p5.yokacdn.com/pic/div/2017/products/yoka/img/logo.png?20190115">
				</router-link>
			</div>
			<ul class="nav">
				<!-- <li><a href="#">首页</a></li> -->
				<li><router-link to="/">首页</router-link></li>
				<li><a href="#">美容</a></li>
				<li><a href="#">奢华</a></li>
				<li><a href="#">明星</a></li>
				<li><a href="#">乐活</a></li>
				<li><a href="#">男士</a></li>
				<li><a href="#">视频</a></li>
				<li><a href="#">独家</a></li>
				<li><a href="#">社区</a></li>
				<li><a href="#">品牌</a></li>
				<li><a href="#">体育</a></li>
			</ul>
			<ul class="login">
				<li>
					<router-link to="/Login">登录</router-link>
				</li>
				<li>
					<router-link to="/Register">注册</router-link>
					</li>
				<li><a title="微信" class="weixin" id="navWxCode" href="javascript:void(0);" target="_self"></a></li>
				<li><a title="新浪" class="sina" href="http://weibo.com/yoka"></a></li>
				<li><a class="zoom" id="pnavSHenter"></a></li>
			</ul>
		</div>
</template>
<style scoped>
.headerone{
	width: 1160px;
	margin: 0 auto;
}
.logo{
	height: 96px;
	text-align: center;
}
.logo img{
	margin-top: 25px;
}
.nav,.nav li,.login li{
	float: left;
}
.login{
	float: right;
}
.nav li a{
	margin-right: 28px;
	display: block;
	height: 50px;
	border-bottom: 4px solid #fff;
}
.nav{
	height: 54px;
	line-height: 54px;
	font-size: 20px;
	color: #232323;
}
.login li a{
	margin-right: 10px;
	font-size: 14px;
	height: 54px;
	line-height: 54px;
}
.login li a.weixin,.login li a.sina,.login li a.zoom{
	display: inline-block;
	height: 18px;
	width: 22px;
	margin-top: 16px;
	padding-top: 4px;
	margin-right: 14px;
}
.login li a.weixin{
	background: url(/img/share_weixin.png) no-repeat;
}
.login li a.sina{
	background: url(/img/share_sina.png) no-repeat;
}
.login li a.zoom{
	background: url(/img/zoom.png) no-repeat;
	background-position: 14px;
	padding-left: 14px;
	border-left: 1px solid #ebebec;
}
</style>