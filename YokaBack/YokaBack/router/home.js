const { Router } = require('express');
const express = require('express');
const pool = require('../pool.js')

const route = express.Router();

//轮播图
route.get('/banner', (req, res) => {
	var sql = "select * from banner";
	pool.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result)
	})
})
route.get('/scend/banner', (req, res) => {
	var sql = "select * from banner";
	pool.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result)
	})
})
route.get('/first/article', (req, res) => {
	var sql = "select * from yokaarticle";
	pool.query(sql, (err, result) => {
		if (err) throw err;
		res.json(result)
	})
})
route.get('/article/detail',(req,res)=>{
	var id = req.query.id
	var sql = "select * from yokaarticle where aid = ?"
	pool.query(sql,[id],(err,result)=>{
		if(err) throw err;
		res.json(result)
	})
})
route.get('/three/article',(req,res)=>{
	var sql="select * from yokaarticle";
	pool.query(sql,(err,result)=>{
		if (err) throw err;
		res.json(result)
	})
})
route.get('/detail/video',(req,res)=>{
	var sql="select * from yokavideo where vid = ?";
	pool.query(sql,[1],(err,result)=>{
		if (err) throw err;
		res.json(result)
	})
})
route.get('/four/article',(req,res)=>{
	var sql="select * from yokaarticle";
	pool.query(sql,(err,result)=>{
		if (err) throw err;
		res.json(result)
	})
})
//导出路由器对象
module.exports = route;