var fs = require("fs");

fs.readFile("hello.js",function(error,data){
	console.log(data.toString());	
});
