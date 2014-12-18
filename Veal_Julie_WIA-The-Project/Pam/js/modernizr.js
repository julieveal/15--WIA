window.onload = function(){	

var theCanvas = document.getElementById("modernizrTest");
	var ctx = theCanvas.getContext("2d");if(Modernizr.canvas){
	//Canvas is supported

	ctx.font = "15pt Georgia";
	ctx.fillText("Canvas is supported!", 0, 30);
	
	
	}else {
		//Canvas is not supported
		//Polyfill would go here
		
		
		}// JavaScript Document
}