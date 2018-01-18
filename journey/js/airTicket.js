
window.onload = function(){	
let navi1 = document.getElementsByClassName('navi1_div');
let slideIndex = 0;
showSlide();
//幻灯片效果演示
function showSlide(){
	let i;
	let slides = $('.slide');
	let dots = $('.dot');
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
	let data = new Date();
	let day = data.getUTCDay();
	let month = data.getMonth()+1;
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
	let a = $('.dataNow1');
	for(let i =0;i<a.length;i++){
		a[i].innerText = month+"月"+data.getDate()+"日"+day;
	}
//日期选择事件
    /*$('.navi2_date').click(function(){
        $(this).datepicker({dateFormat: "2018-01-17","duration":"fast","gotoCurrent":"true"});
        let dateFormat = $(".navi2_date").datepicker("option","dateFormat");
    });*/
//点击界面变化处理
	$('.navi1_div').click(function(){
		$('.navi1_div').css('background-color','#939398');
		$(this).css({'background-color':'white','width':'80px','height':'40px'});
		let navi2 = $('.navi2');
		let inHtml = $(this)[0].innerHTML;
		if(inHtml === '单程'){
            navi2[0].style.display = 'block';
            navi2[1].style.display = 'none';
            navi2[2].style.display = 'none';
		}
		else if(inHtml === '往返'){
            navi2[1].style.display = 'block';
            navi2[0].style.display = 'none';
            navi2[2].style.display = 'none';
		}
		else{
            navi2[2].style.display = 'block';
            navi2[0].style.display = 'none';
            navi2[1].style.display = 'none';
		}
	});
//点击图片按钮交换起始地
$(".navi2_img").click(function(){
	let t = $(this).prev()[0].innerHTML;
    $(this).prev()[0].innerHTML = $(this).next()[0].innerHTML;
	$(this).next()[0].innerHTML = t;
});


//机舱类型选择,涉及到遮罩层的使用
let air = $('airTicket');
for(let i=0;i<air.length;i++){
	air[i].onclick = function(e){
		let index = e.target.nodeType;
		let i = event.currentTarget;
		$('#mask').css("display","block");
		$('#choose').css("display","block");
	}
}

//机舱选择功能
	let choose1 = $('.choose1');
    choose1[0].onclick = function(){
		$('.choose2').children('.um-icon-check').css("display","none");
        choose1.children('.um-icon-check').css("display","block");
		$('#mask').css("display","none");
		$('#choose').css("display","none");
		$('.airTicket')[0].innerText = choose1.children('span')[1].innerText;
	};
	let cc = choose1[0];
	$('.choose2')[0].onclick = function(event){
		let index = this.index;
        choose1.children('.um-icon-check').css("display","none");
        choose1.children('.um-icon-check').css("display","block");
		$('#mask').css("display","none");
		$('#choose').css("display","none");
		$('.airTicket')[0].innerText = $('.choose2').children('span')[1].innerText;
	};

//机舱选择功能

let x = $('.navi2_passageType').children('input').click(function(event1){
	//console.log(event.target.className);
	let t = this.index;
	let n = event1.target.className;
	let n1 = parseInt(n.substring(1));
	let block = "."+"block"+n1;
	$(block).css("display","block");
});

$('.a1').click(function(){
	 let c = $(this)[0].checked;
})

//结束
};










