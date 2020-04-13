
var server = require("http").createServer();

server.on("request",function(request,response){

	var type = "text/plain"
	var content = "资源不存在";
	switch( request.url ){
		case "/text":
			content = "你好，世界！";
			break;
		case "/html":
			type = "text/html";
			content = "<h1>你好，世界；</h1>";
			break;
	}
	response.setHeader("Content-Type",type+";charset=utf-8");
	response.end(content);
});

server.listen(3000,function(){
	console.log("Server is running...");
});
