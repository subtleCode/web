// 引入包
var mongoose = require("mongoose");

// 连接数据库
mongoose.connect('mongodb://localhost/sm');

// 得到Schema对象
var Schema = mongoose.Schema;

// 设置Schema
var studentSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	gender:{
		type: Number,
		enum:[0, 1],
		default: 0
	},
	age:{
		type: Number
	},
	hobbies:{
		type: String
	}
});

// 直接导出构造函数
module.exports = mongoose.model('Student',studentSchema);
