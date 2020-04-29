var fs = require("fs");

var p1 = new Promise(function(resolve,reject){
	fs.readFile('./a.text','utf-8',function(error,data){
		if(error) return reject(error);
		resolve(data);
	});
});

var p2 = new Promise(function(resolve,reject){
	fs.readFile('./b.text','utf-8',function(error,data){
		if(error) return reject(error);
		resolve(data);
	});
});

var p3 = new Promise(function(resolve,reject){
	fs.readFile('./c.text','utf-8',function(error,data){
		if(error) return reject(error);
		resolve(data);
	});
});


p1
	.then(
		function(data){
			console.log(data);
			return p2;
		},
		function(error){}
	).then(
		function(data){
			console.log(data);
			return p3;
		},
		function(error){}
	).then(
		function(data){
			console.log(data);
		},
		function(error){}
	);
