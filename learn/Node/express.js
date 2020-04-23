var express = require('express');
var app = express();

// 设置公共目录
app.use("/",express.static("./"));

app.get('/', function(request,response){
	response.end("<h1>Hello Express</h1>");
});

app.get('/about', function(request,response){
	response.end("<h1>你好，我是Express</h1>");
});


app.listen(3000,function(){
	console.log("Node is running at 3000 port.");
});