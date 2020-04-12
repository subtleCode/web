var fs = require("fs");

fs.writeFile("log.file","content........",function(error){
	if( error == null ){
		console.log("file write success.");
	}else{
		console.log(" file wirte error ");
	}
});
