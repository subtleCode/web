/*
	用于操作学生数据的API
*/

var dbPath = './db.json';
var fs = require('fs');

// 保存学生信息
exports.save = function(student,callBack){
	// 读取数据文件
	fs.readFile(dbPath,"utf-8",function(error,data){
		if( error ) return callBack(error);
		// 将数据转为对象
		var students = JSON.parse(data).students;
		// 生成ID号
		if ( students.length > 0 ){
			student.id = students[students.length-1].id + 1;
		} else{
			student.id = 1;
		}
		// 向对象中添加信息
		students.push(student);
		// 将对象转为数据
		var newData = JSON.stringify({"students":students});
		// 将数据写入文件
		fs.writeFile(dbPath,newData,function(err){
			if(err){
				return callBack(err)
			}
			callBack(null);
		});
	});
}
// 删除
exports.deleteById = function(id,callBack){
	fs.readFile(dbPath,'utf-8',function(error,data){
		if( error ) return callBack(error);

		var students = JSON.parse(data).students;
		//findIndex方法用于查找元素的下标
		var deleteId = students.findIndex(function(item){
			return item.id === parseInt(id);
		});				
		//splice(开始位置,[长度])方法用于删除元素，如果没有第二个参数，那么会删除开始位置之后的所有元素
		students.splice(deleteId,1);
		// 将对象转为数据
		var newData = JSON.stringify({"students":students});
		// 将数据写入文件
		fs.writeFile(dbPath,newData,function(err){
			if(err){
				return callBack(err)
			}
			callBack(null);
		});
	});
}

// 查询
exports.findAll = function(callBack){
	// 读取文件
	fs.readFile(dbPath,"utf-8",function(error,students){
		if(error) callBack(error);
		callBack(null,JSON.parse(students).students); 
	});	

}
exports.findById = function(id,callBack){
	fs.readFile(dbPath,"utf-8",function(error,data){
		if(error) return callBack(error);
		var students = JSON.parse(data).students;
		//findIndex方法用于查找元素的下标
		var index = students.findIndex(function(item){
			return item.id === parseInt(id);
		});				
		callBack(null,students[index]);
	});		
}


// 更新
exports.update = function(student,callBack){
	fs.readFile(dbPath,"utf-8",function(error,data){
		if(error) return callBack(error);
		var students = JSON.parse(data).students;
		student.id = parseInt(student.id);
		var elementIndex = students.findIndex(function(item){
			return item.id === student.id;
		});
		console.log(student);
		// 更新数据
		for(var key in student){
			students[elementIndex][key] = student[key];
		}
		// 将数据写入文件
		var newData = JSON.stringify({"students":students});
		fs.writeFile(dbPath,newData,function(err){
			if(err){
				return callBack(err)
			}
		});
		callBack(null);
	});
}







