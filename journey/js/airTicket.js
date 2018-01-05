
window.onload = function(){	
var navi1 = document.getElementsByClassName('navi1_div');
var slideIndex = 0;
showSlide();
//幻灯片效果演示
function showSlide(){
	var i;
	var slides = $('.slide');
	var dots = $('.dot');
	for(i = 0;i < slides.length;i++){
		slides[i].style.display = "none";
	}
	for(i = 0;i<dots.length;i++){
		dots[i].className = dots[i].className.replace(" active","");
	}
	slideIndex++;
	if(slideIndex >slides.length){slideIndex = 1}
	if(slides.length >=1&&dots.length>=1){
		slides[slideIndex-1].style.display = "block";
		dots[slideIndex-1].className +=" active";
	}
	setTimeout(showSlide,1500);
}

//日期处理
			var data = new Date();
			var day = data.getUTCDay();
			var month = data.getMonth()+1;
			switch(day){
				case 0: 
					day = "星期日";
					break;
				case 1: 
					day = "星期一";
					break;
				case 2: 
					day = "星期二";
					break;
				case 3: 
					day = "星期三";
					break;
				case 4: 
					day = "星期四";
					break;
				case 5: 
					day = "星期五";
					break;
				case 6: 
					day = "星期六";
					break;
				default:
					day = "";
			}
			var a = $('.dataNow1');
			for(var i =0;i<a.length;i++){
				a[i].innerText = month+"月"+data.getDate()+"日"+day;				
			}
			
//点击界面变化处理 
var nDiv =  $(".navi1_div"); 
var navi2 = $(".navi2");
var l = nDiv.length;
	for(var i = 0;i<l;i++){
		var n =i;
		nDiv[i].onclick = function(){	
			//navi2[n].style.display = "block";
			if(this.innerHTML=="单程"){
				navi2[0].style.display = "block";
				navi2[1].style.display="none";
				navi2[2].style.display="none";
			}
			else if(this.innerHTML=="往返"){
				navi2[1].style.display = "block";
				navi2[0].style.display="none";
				navi2[2].style.display="none";
			}
			else{
				navi2[2].style.display = "block";
				navi2[0].style.display="none";
				navi2[1].style.display="none";
			}
			for(var j =0;j<l;j++){
				if(j!=i){
					nDiv[j].style.backgroundColor = "#939398";
					nDiv[j].style.height = "30px";	
				}
			}
			this.style.backgroundColor = "white";
			this.style.width = "80px";
			this.style.height = "40px";				
		} 
	}	

//点击图片按钮交换起始地
var navi2_img = $('.navi2 img');
for(var i = 0;i<navi2_img.length;i++){
	navi2_img[i].onclick = function(){
		console.log("women");
	}
}

//机舱类型选择
var air = document.getElementsByClassName('airTicket');
for(var i=0;i<air.length;i++){
	air[i].onclick = function(e){
		var index = e.target.nodeType;
		var i = event.currentTarget;
		$('#mask').css("display","block");
		$('#choose').css("display","block");
	}
}
var t = $('.navi2_starting');
for(var i=0;i<t.length;i++){
	console.log(t[i].innerText);
}

//机舱选择功能
	$('.choose1')[0].onclick = function(){
		$('.choose2').children('.um-icon-check').css("display","none");
		$('.choose1').children('.um-icon-check').css("display","block");
		$('#mask').css("display","none");
		$('#choose').css("display","none");
		$('.airTicket')[0].innerText = $('.choose1').children('span')[1].innerText;
	}
	var cc = $('.choose1')[0];
	$('.choose2')[0].onclick = function(event){
		var index = this.index;
		$('.choose1').children('.um-icon-check').css("display","none");
		$('.choose2').children('.um-icon-check').css("display","block");
		$('#mask').css("display","none");
		$('#choose').css("display","none");
		$('.airTicket')[0].innerText = $('.choose2').children('span')[1].innerText;
	}

//机舱选择功能

var x = $('.navi2_passageType').children('input').click(function(event1){
	//console.log(event.target.className);
	var t = this.index;
	var n = event1.target.className;
	var n1 = parseInt(n.substring(1));
	var block = "."+"block"+n1;
	$(block).css("display","block");
});


//结束
}










