/*
     Name: Julie Veal
     Date: 11/27/14
     Class & Section:  WIA-1214
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************

*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message*/
			
window.onload = function(){	
//modernizr is ested at the end
/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

	
	
var theCanvas = document.getElementById("Canvas1");
	if(theCanvas){
					//Get Context
		var ctx = theCanvas.getContext("2d");
					
			if(ctx){
							
							//Draw Here
							
							//Draw a filled and stroked rectangle
							
							ctx.strokeStyle = "black";
							ctx.fillStyle = "blue";
							ctx.lineWidth = 10;
							
							//Draw the rectangle
							//strokeRect(posX, posY, Width, Height)
							ctx.strokeRect(0, 0, 50, 100);
							ctx.fillRect(0, 0, 50, 100);
					}
				}
											
/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/

var theCanvas = document.getElementById("Canvas2");
 	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
// Draw scene here
if (ctx) {
						
						ctx.strokeStyle= "black";
						ctx.fillStyle = "red";
						ctx.lineWidth = 5;
						
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						
						ctx.beginPath();
						ctx.arc(50, 50, 20, 0, radians);
						ctx.fill();
						ctx.stroke();
						
						
					}}
					
/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

*******************************************/

var theCanvas = document.getElementById("Canvas3");
 	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
// Draw scene here
if (ctx) {
						ctx.strokeStyle = "blue";
						ctx.fillStyle= "red";
						ctx.lineWidth = 5;
						
						//Draw an open path
						ctx.beginPath();
						ctx.moveTo(100,100);
						ctx.lineTo(155,25);
						ctx.lineTo(200,105);
						ctx.lineTo(300,105);
						ctx.lineTo(220,180);
						ctx.lineTo(260,260);
						ctx.lineTo(155,190);
						ctx.lineTo(50,260);
						ctx.lineTo(90,180);
						ctx.lineTo(0,100);
						ctx.lineTo(100,100);
						
						ctx.closePath();
						ctx.fill();
						ctx.stroke();
						
					
					}
					}

/******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
var theCanvas = document.getElementById("Canvas4");
 	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
// Draw scene here
if (ctx) {
				ctx.strokeStyle= "black";
				ctx.lineWidth = 5;
						
				
				//Stroke a simple bezier curve
				ctx.beginPath();
				ctx.moveTo(50,250);
				
				//bezierCurveTo(cx1, cy1, cx2, cy2, x, y )						
				ctx.bezierCurveTo(50,50, 450, 50, 450, 250);
				//quadraticCurveTo(cx, cy, x, y)
				ctx.quadraticCurveTo(400,200, 350, 250);
				ctx.quadraticCurveTo(300,200, 250, 250);
				ctx.quadraticCurveTo(200,200, 150, 250);
				ctx.quadraticCurveTo(100,200, 50, 250);
				
				ctx.stroke();		

	}
	}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/
var theCanvas = document.getElementById("Canvas5");
 	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
// Draw scene here
if (ctx) {
var theString = "Rain.";
			
			//Style the font
			ctx.font = "40pt Georgia";
			ctx.fillStyle = "blue";
//with shadow						
			ctx.shadowColor = "rgba(0,100,100,.5)";
			ctx.shadowOffsetX = 5;
			ctx.shadowOffsetY = 5;
			ctx.shadowBlur = 5;			
			ctx.fillText(theString, 190, 180);
	}}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/
	var theCanvas = document.getElementById("Canvas6");
 	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
// Draw scene here
if (ctx) {
	var srcImg = document.getElementById("img1");
	//1.
	ctx.drawImage(srcImg, 0,0);
	
	//2.
	ctx.drawImage(srcImg,0,250,300,99);
	
	//3.
	ctx.drawImage(srcImg,50,34,150,52,0,400,300,104);
}}

/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/
var theCanvas = document.getElementById("Canvas7");
 	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
// Draw scene here
if (ctx) {
	ctx.strokeStyle= "black";
				ctx.lineWidth = 5;
						
				
				//Stroke a simple bezier curve
				ctx.beginPath();
				ctx.moveTo(50,250);
				
				//bezierCurveTo(cx1, cy1, cx2, cy2, x, y )						
				ctx.bezierCurveTo(50,50, 450, 50, 450, 250);
				//quadraticCurveTo(cx, cy, x, y)
				ctx.quadraticCurveTo(400,200, 350, 250);
				ctx.quadraticCurveTo(300,200, 250, 250);
				ctx.quadraticCurveTo(200,200, 150, 250);
				ctx.quadraticCurveTo(100,200, 50, 250);
				
				ctx.stroke();		
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
						
						//Draw an open path
						ctx.beginPath();ctx.moveTo(50,50);ctx.lineTo(75,75);
						ctx.closePath();	ctx.stroke();
						
						ctx.beginPath();ctx.moveTo(100,25);ctx.lineTo(150,75);
						ctx.closePath();	ctx.stroke();
						
						ctx.beginPath();ctx.moveTo(200,35);ctx.lineTo(250,80);
						ctx.closePath();	ctx.stroke();
						
						ctx.beginPath();ctx.moveTo(100,25);ctx.lineTo(150,75);
						ctx.closePath();	ctx.stroke();
						
						ctx.beginPath();ctx.moveTo(350,45);ctx.lineTo(450,120);
						ctx.closePath();	ctx.stroke();
						
						ctx.beginPath();ctx.moveTo(100,25);ctx.lineTo(150,75);
						ctx.closePath();	ctx.stroke();
						
ctx.strokeStyle = "black";
ctx.lineCap = "round";
ctx.lineWidth = 20;
						ctx.beginPath();ctx.moveTo(250,253);ctx.lineTo(250,430);
						ctx.closePath();	ctx.stroke();
						
						ctx.moveTo(250,430);ctx.quadraticCurveTo(275,470, 300, 430);
						ctx.stroke();
						
						var theString = "Rain.";
			
			//Style the font
			ctx.font = "40pt Georgia";
			ctx.fillStyle = "blue";
//with shadow						
			ctx.shadowColor = "rgba(0,100,100,.5)";
			ctx.shadowOffsetX = 5;
			ctx.shadowOffsetY = 5;
			ctx.shadowBlur = 5;			
			ctx.fillText(theString, 190, 180);
}}



	var theCanvas = document.getElementById("Canvas8");
	var ctx = theCanvas.getContext("2d");if(Modernizr.canvas){
	//Canvas is supported
	//Draw some text on our canvas
	ctx.font = "15pt Georgia";
	ctx.fillText("Canvas is supported!", 0, 30);
	
	
	}else {
		//Canvas is not supported
		//Polyfill would go here
		
		
		}
	

}
