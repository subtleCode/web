/*
	封装Promise的示例
		省略then方法的第二个函数（用于处理错误）
*/
var fs = require("fs");


function pReadFile(filePath){
	// 返回一个Promise容器，这个容器内部有一个异步函数
	return new Promise(function(resolve,reject){
		fs.readFile(filePath,'utf-8',function(error,data){
			if(error) return reject(error);
			resolve(data);
		});
	});
}

pReadFile("./a.text")
	.then(function(data){
		console.log(data);
		// 执行函数pReadFile，并返回pReadFile的返回值，即又一个Promise对象
		return pReadFile("./b.text");
	})
	.then(function(data){
		console.log(data);
		return pReadFile("./c.text");
	}).then(function(data){
		console.log(data);
	});

