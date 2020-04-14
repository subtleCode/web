
var fs = require("fs");
var server = require("http").createServer();
var template = require("art-template");



server.on("request",function( request,response ){

	fs.readFile("./files.html",function(error,data){
		fs.readdir("./",function(error,files){
			response.end(
				template.render(data.toString(),{
					files:files
				})
			);
		})
	});

});

server.listen(3000,function(){
	console.log("Server is running...");
});