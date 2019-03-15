class boxes{
	
	constructor(n){
this.n=n;
	}
	
rX(len){
	push();
	fill(250,0,0);
	for(let j=0;j<this.n;j=j+1){
		translate(2*len,0,0);box(len,len,len);
	}
	pop();
}

}
