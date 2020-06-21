const fs = require("fs");
const path = require("path");

function getFileContent(filename,callback){
	const fullFileName = path.resolve(__dirname,filename);
	fs.readFile(fullFileName,(error,data) => {
		if(error){
			console.error(error);
			return;
		}
		callback(
			JSON.parse(data.toString())
		);
	});
}

getFileContent("a.json",aData => {
	console.log(aData.content);
	getFileContent(aData.next,bData => {
		console.log(bData.content);
		getFileContent(bData.next,cData =>{
			console.log(cData.content);
		});
	});
	
});
