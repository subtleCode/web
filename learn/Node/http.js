var http = require("http");

var server = http.createServer();

server.on("request",function(request,response){

	console.log("已经接收到请求，请求路径为："+request.url);
	
	switch(request.url){
		case "/login":
			response.write("welcome login page");
			break;
		case "/register":
			response.write("welcome register page");
			break;
		default:
			response.write("other operator");
	}
	response.end();
});

server.listen(3000,function(){
	console.log("服务器已经成功启动！");
});

