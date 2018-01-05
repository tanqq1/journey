
window.onload=function(){
	var historys = [];
			var vm = new Vue({
  				el: '#navi',
 				data: {
 					l : '',
 					historys: JSON.parse(localStorage.getItem("historyList"))||[],
   					citys: [
     			 { text: '北京' },{ text: '上海' }, { text: '广州' },{ text: '杭州' },
      			 { text: '哈尔滨'},{ text: '青岛' },{ text: '西安' },{ text: '南京' },
      			 { text: '深圳' },{ text: '昆明' },{ text: '桂林' },{ text: '三亚' },
      			 { text: '长沙' },{ text: '武汉' },{ text: '沈阳' },{ text: '厦门' },
      			 { text: '成都' },{ text: '重庆' },{ text: '大连' },{ text: '济南' },
      			 { text: '郑州' }
  			  ]
 			 },
 			 	methods: {
 			 		change: function(k){
 			 			var frame = this.citys[k].text;
 			 			this.l = this.historys.length+1;
 			 			for(var i = 0;i<this.historys.length;i++){
 			 				if(this.historys[i]==frame){
 			 					this.historys.splice(i,1);
 			 				}
 			 			}
 			 			 this.historys.unshift(frame);
 			 			 if (this.historys.length>=6){
 			 			 
 			 			 	this.historys = this.historys.slice(0,6)
 			 			 }
 			 			 localStorage.setItem("historyList",JSON.stringify(this.historys))
 			 			 localStorage.setItem("selectCity",frame)
 			 			 document.location.href = 'homePage.html';
 			 			// document.getElementById('place').innerHTML ='' ;
 			 		} ,
 			 		change1: function(k){
 			 			var frame1 = this.historys[k];
 			 			if(k!=0){
 			 				this.historys[k] = this.historys[0];
 			 				this.historys[0] = frame1;
 			 			}
 			 			 localStorage.setItem("historyList",JSON.stringify(this.historys))
 			 			 localStorage.setItem("selectCity",frame1)
 			 			 document.location.href = 'homePage.html';
 			 		}
 			 	},
 			 	mounted: function(){
 			 	this.$refs.app.style.display = "block"
 			 },
		});	

		}	
		







