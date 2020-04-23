var express = require('express');
var app = express();
var bodyparser = require('body-parser');

//  为express配置模板引擎
app.engine('html',require('express-art-template'));

// 配置body-parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));


// 处理路由
app.get("/",function(request,response){
	response.render("form.html");

});
app.post("/post",function(request,response){

	response.send("<h1>Your name is : "+request.body.username+"</h1>");

});


// 监听端口
app.listen(3000,function(){
	console.log("body-parser: running at port 3000");
})
