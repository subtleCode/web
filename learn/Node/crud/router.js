/*
路由设计
	请求方式		请求路径			作用				参数
	GET			/students		学生列表页面		
	GET			/students/new	添加学生页面
	POST		/students/new	添加学生 		name、age、gender、hobbies
	GET			/students/edit	编辑学生页面		id
	POST		/students/edit	编辑学生 		id、name、age、gender、hobbies
	GET 		/students/delete 删除学生		id
*/
var fs = require('fs');
var express = require('express');
var router = express.Router();
var studentAPI = require('./studentAPI');

// 学生列表页面
router.get('/students',function(request,response){
	studentAPI.findAll(function(error,students){
		if(error) return response.status('500').send(error);
		response.render('index.html',{
			students : students
		});
	});
});

// 添加学生页面
router.get('/students/new',function(request,response){
	response.render("addStudent.html");
});
// 添加学生
router.post('/students/new',function(request,response){
	var student = request.body;
	studentAPI.save(student,function(error){
		if( error ) return repsonse.status('500').send(error);
	});
	// 添加完学生之后，跳转到学生列表页
	response.redirect('/students');
});

// 编辑学生页面
router.get('/students/edit',function(request,response){
	studentAPI.findById(request.query.id,function(error,student){
		response.render('edit.html',{
			student:student
		});
	});
});
// 编辑学生
router.post('/students/edit',function(request,response){
	studentAPI.update(request.body,function(error){
		if( error ) return repsonse.status('500').send(error);
	});
	response.redirect("/students");
});

// 删除学生
router.get('/students/delete',function(request,response){
	studentAPI.deleteById(request.query.id,function(error){
		if( error ) return repsonse.status('500').send(error);
	});
	response.redirect('/students');
});

module.exports = router;