/* 

*/
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
// 模板引擎
app.engine('html',require('express-art-template'));
// 公开路径
app.use('/public/',express.static('./public/'));


app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

// 挂载路由
app.use(require('./router'));



app.listen(3000,function(){
	console.log('running at port 3000');
});