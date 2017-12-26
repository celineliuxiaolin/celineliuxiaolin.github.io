
var items = document.querySelectorAll(".sItem");
var startS = document.getElementById("startShan");
var endS = document.getElementById("endShan");
var clock; //计时器
var colors=[], changes=[];//颜色，格子
var len = 3;//更改个数

// // 随机取3个格子
// function setSq () {
// 	var square = parseInt(Math.random() * 9);			
// 	return square;
// }

// // 随机取3个颜色
// function setCol () {
// 	var color = Math.round(Math.random() * 255);			
// 	return color
// }

// function shan () {
// 	var i = 0, n, col;
// 	items.forEach(function (e,i) {
// 		items[i].style.backgroundColor = "";
// 	})
// 	for(; i<3; i++){
// 		col = "rgb(" + setCol() + "," + setCol() + "," + setCol() +")";
// 		// 随机取三个格子
// 		n = setSq();
// 		items[n].style.backgroundColor = col;			
// 	}
// }

//数组查重
function hasIt(a, arr){
	var i = arr.length;
	while(i--){
		if(arr[i] === a){
			return true;
		}
	}
	return false;
}

//随机取格子
function setSq () {
	var square = parseInt(Math.random() * 9);			
	if( !hasIt(square, changes) ){
		changes.push(square);
	}else{
		setSq ();
	}	
}

//随机取颜色
function setCol () {
	var color=0, i=0;
	for(; i<3; i++){
		if(i>0){
			color += ",";
		}
		color += Math.round(Math.random() * 255);
	}
	colors.push(color);
}

//清除样式
function clear (){
	var j = 0;
	for(; j< items.length; j++){
		items[j].style.backgroundColor = '';
	}
}

//修改样式
function shan () {
	clear ();
	var i = 0;
	colors=[], changes=[];
	for(; i< len; i++){
		setSq ();
		setCol ();
		items[changes[i]].style.backgroundColor = "rgb(" + colors[i] + ")";
	}
}


function autoPlay() {
	clearInterval(clock);
	clock = setInterval(shan, 1000);
}

function stopPlay () {
	clear ();
	clearInterval(clock);
}

startS.onclick = function () {
	autoPlay();
}
endS.onclick = function () {
	stopPlay();
}