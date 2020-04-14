
var fs = require("fs");
var server = require("http").createServer();
var template = require("art-template");

server.on("request",function( request,response ){
	fs.readFile( "./info.html", function(error,data){
		data = template.render(data.toString(),{
			name:"小王",
			age:19,
			hobby:"游戏"
		});
		response.end(data);
	});
});

server.listen(3000,function(){
	console.log("Server is running...");
});