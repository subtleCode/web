var express = require('express');
var app = express();

// 静态服务
app.use(express.static("./"));

// 基本路由
app.get('/', function(request,response){
	response.send("<h1>Hello Express</h1>");
});

app.get('/about', function(request,response){
	response.send("你好，我是Express");
});


app.listen(3000,function(){
	console.log("Node is running at 3000 port.");
});
