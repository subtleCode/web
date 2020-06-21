const fs = require("fs");
const path = require("path");

function getFileContent(filename){
	// promise对象
	const promise =  new Promise((resolve,reject)=>{
		// 拼接文件全名
		const fullFileName = path.resolve(__dirname,filename);
		// 读取文件
		fs.readFile(fullFileName,(error,data) => {
			if(error){
				reject(error);
				return;
			}
			resolve(
				JSON.parse(data.toString())
			);
		});
	});
	return promise;
}

getFileContent("a.json").then(aData => {
	console.log("a.json",aData);
	return getFileContent(aData.next);
}).then(bData => {
	console.log("b.json",bData);
	return getFileContent(bData.next);
}).then(cData => {
	console.log("c.json",cData);
});
