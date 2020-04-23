var express = require('express');
var app = express();

//  为express配置模板引擎
app.engine('html',require('express-art-template'));


app.get("/",function(request,response){
	response.render("index.html",{
		title: "主页",
		data: "欢迎光临"
	});
});


app.listen("3000",function(){
	console.log("Node is running at port 3000");
});