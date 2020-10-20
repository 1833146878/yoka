//引入express
const express=require('express');
//引入连接池对象
const pool=require('../pool.js');
//创建路由器
const route = express.Router();


// 登录模块
route.post("/login",(req,res)=>{
	var phone=req.body.phone	
	var pwd=req.body.pwd

	var sql="select uid from user where uname=? and upwd=?";
	pool.query(sql,[phone,pwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});

// 用户注册模块
route.post('/register',(req,res)=>{
	let obj = req.body;
	console.log(req.body);
	if (!obj.uname) {
        res.send({code:'400',msg:'电话不能为空'});
        return
	}
	var sql = "INSERT INTO user SET ?"
	pool.query(sql,[obj],(err,result)=>{
		if (err) { throw err; }
		if(result.affectedRows > 0){
			res.json({code:'200',msg:'ok'})
		}else{
			res.json({code:'400',msg:'error'})
		}
	})
});

// 查找用户是否存在
route.post('/hasuser', (req, res) => {
	var obj = req.body.phone;
	var sql = 'select uid from user where uname=?'
	pool.query(sql, [obj], (err, reslut) => {
		if (err) throw err;
		if (reslut.length > 0) {
			res.send('1')
		} else {
			res.send('0')
		}
	})
});

//导出路由器对象
module.exports=route;