window.onload=function()
{
	imgLoad("container","box");
	window.onscroll=()
	{
		scrollFun("container","box");
	}
}


/************************************************resource************************************************/

function scrollFun(parent,content)
{	
	var gparent=document.getElementById(parent);
	if (checkFlag(gparent,content))
	{
		for(var i=0;i<pageData.data.lenth;i++)
		{
			var d_box=document.createElement("div");
			d_box.className="box";
			gparent.appendChild(d_box);

			var d_box_img=document.createElement("div");
			d_box_img.className="box_img";
			gparent.appendChild(d_box_img);

			var img=document.creatElement("img");
			img.src=pageData.data[i].images.736x.url;
			d_box_img.appendChild(img);
		};
		imgLoad(parent,content);
	}
}

function checkFlag(parent,content)
{
	var contents=getContents(parent,content);
	var lastContentHeight=contents[contents.length-1].offsetTop;
	var scrollHeight=document.documentElement.scrollTop||document.body.scrollTop;
	var pageHeight = document.documentElement.clientHeight || document.body.clientHeight;
	console.log(lastContentHeight +" " + scrollHeight +" "+pageHeight); 
	if(lastContentHeight < scrollHeight + pageHeight) 
		return true;
	else
		return false;
}

function imgLoad(parent,content)
{
	var gparent=document.getElementById(parent);
	var contents=get
	var imgWidth=contents[0].offsetWidth;
	var cols=Math.floor(document.documentElement.clientWidth/imgWidth); 
	gparent.style.cssText="width:"+imgWidth*cols+"px;margin:0 auto"; 
	console.log("width:"+imgWidth*cols+"px,margin 0 auto"); //控制台输出代码
	console.log("显示的列数是"+cols);
	var highArr=[]; 
	for (var i=0;i<contents.length;i++ )
	{
		if (i<cols)
		{
			highArr[i]=contents[i].offsetHeight;
			console.log(highArr[i]);
		}
		else
		{
			var minHeigh=Math.min.apply(null,highArr);
			var minLocation=-1;
			for (var j=0;j<highArr;j++ )
			{
				if (highArr[j]=minHigh)
				{
					minLocation=j;
					break;
				}
			}	//end for
			contents[i].style.top=minHigh+"px";
			contents[i].style.left=minLocation*imgWidth + "px"; 
			contents[i].style.position = "absolute"; 
			highArr[minLocation] = highArr[minLocation] + contents[i].offsetHeight; 
		}	//end else
	};	//end for
}	//end function

function getContents(parent,content)
{
	var childs = parent.getElementsByTagName("*");
	var contents = []; 
	for (var i = 0; i < childs.length; i++) 
	{
		if(childs[i].className == content)
			contents.push(childs[i]); 
	};
	return contents;
} 