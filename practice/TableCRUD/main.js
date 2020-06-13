window.onload = function(){
	var oTable = document.getElementsByTagName("table")[0];
	var oTbody = oTable.tBodies[0];
	initTable(oTbody,getData());


	// 隔行变色
	for(var i = 0; i < oTbody.rows.length; i++){
		if( i%2 != 0 ){
			oTbody.rows[i].style.background = "grey";
		}
	}


	// 鼠标移入变色
	for(var i = 0; i < oTbody.rows.length; i++){
		var beforeColor = "";
		oTbody.rows[i].onmouseover = function(){
			beforeColor = this.style.background;
			this.style.background = "skyblue";
		}
		oTbody.rows[i].onmouseout = function(){
			this.style.background = beforeColor;
		}
	}

	// 添加用户
	var addUserBtn = document.getElementById("addUserBtn");
	addUserBtn.onclick = function(){
		var id = ++i;
		var name = document.getElementById("name").value;
		var age = document.getElementById("age").value;
		var tr = getTr([id,name,age]);
		oTbody.appendChild(tr);
	}
}


// 获取数据库数据
var id = 0;
function getData(){
	return [
		[++id,"小黑",33],
		[++id,"Alice",21],
		[++id,"Geroge",18],
		[++id,"张三",20],
		[++id,"李四",30],
		[++id,"王五",35],
		[++id,"赵三",16]
	];
}

// 初始化表格数据
function initTable(tbody,data){
	for(var i = 0; i<data.length; i++){
		var user = data[i];
		var tr = getTr(user);
		tbody.appendChild(tr);
	}
}

// 将一条user转为一个tr节点
function getTr(user){
	var tr = document.createElement("tr");
	for(var i = 0; i < user.length; i++ ){
		var td = document.createElement("td");
		td.innerHTML = user[i];
		tr.append(td);
	}
	addOperatorBtn(tr);
	addOperator(tr);
	return tr;
}


//为tr节点添加操作按钮
function addOperatorBtn(tr){
	var td = document.createElement("td");
	var a = document.createElement("a");
	a.innerHTML = "删除";
	a.setAttribute("href","javascript:;");
	td.append(a);
	tr.appendChild(td);
}
//为tr节点添加操作动作 
function addOperator(tr){
	//删除动作
	tr.getElementsByTagName("a")[0].onclick = function(){
		tr.parentNode.removeChild(tr);
	}
}

// 添加用户
function addUser(tbody,user){

}
