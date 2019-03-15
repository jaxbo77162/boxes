let bar=[];
let b1;
function setup(){
	can=createCanvas(800,600,WEBGL);
	can.position(25,25);
	can.class("bdd");
	b1=new boxes(10);
	frameRate(5);
	for(let j=0;j<10;j++){
		bar.push(new boxes(20));
	}
}
let ang=0;

function draw(){
	background(0,0,250);
	b1.rX(20);
	translate(50,50,50);
	
	for(let j=0;j<10;j++){
		push();
		rotateX(ang+36*j);
		translate(-300,0,-200);
		bar[j].rX(20);
		pop();
	}
	
	ang=ang+5;
	
}