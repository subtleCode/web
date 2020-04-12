var fs = require("fs");

fs.readFile("not file.js",function(error,data){
	if(error){
		console.log("file read error");
	}else{
		console.log(data.toString());
	}
});
