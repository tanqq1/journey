summerready = function(){
document.getElementById("place").innerHTML = localStorage.getItem("selectCity")||"北京"
	var slide6 = document.getElementsByClassName("navi6_slide");
	var n = slide6.length;
	var maxWidth = n*100+"px";
	$('#maxWidth').css("width",maxWidth);


//#id框的内容显示处理
	var place = document.getElementById('place').innerHTML;		
    // here is your code...
    var slideIndex = 0;
	showSlides();
function showSlides(){
	var i; 
	
	var slides = $('.slides');
	var dots = document.getElementsByClassName('dot');
	for(i = 0;i<slides.length;i++){
		slides[i].style.display = "none";
	}
	for(i = 0;i<dots.length;i++){
		dots[i].className = dots[i].className.replace("active","");
	}
	slideIndex++;
	if(slideIndex>slides.length){slideIndex = 1;}
	if(slides.length>=1&&dots.length>=1){
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className +=" active";
	}
	setTimeout(showSlides,1500);
}   
var h = $('.navi1').offset().top;  
window.location.onchange=function(){
	alert("q");
};
}
﻿
