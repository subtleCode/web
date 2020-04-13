
var server = require("http").createServer();
var fs = require("fs");

server.on("request",function(request,response){
	var url = request.url;
	fs.readFile("."+url,function(error,data){
		if( error ){
			data = "文件不存在";
		}
		if( url == "/" ){
			data = "请选择文件";
		} 
		response.setHeader("Content-Type","text/plain;charset=utf-8");	
		response.end(data);
	});
});

server.listen(3000,function(){
	console.log("Server is running...");
});
