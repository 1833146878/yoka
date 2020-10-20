// 引入express
const express = require('express');
const bodyParser = require('body-parser');
const homeRoute = require('./router/home.js')
const uRoute = require('./router/user.js')

//创建web服务器
const app = express();
//设置端口
app.listen(3000,()=>{
	console.log('server is running...');
})
//托管静态资源到public目录
app.use('/public',express.static('./public'))

app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin', '*');
	next();
})
app.use( bodyParser.urlencoded({
	extended:false
  }) );
// 挂载路由
app.use('/home',homeRoute)
app.use('/user',uRoute)
// console.log('http://127.0.0.1:3000')