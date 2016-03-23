//关于改变透明度的一个小小的脚本
//css的hover只能改变当前操作对象的属性（？）
//即算是写了js脚本也要好好思考css实现的可行性哟

function in_change()
{
	document.getElementById('img_opa').style.opacity=0.8;
}

function out_change()
{
	document.getElementById('img_opa').style.opacity=1;
}