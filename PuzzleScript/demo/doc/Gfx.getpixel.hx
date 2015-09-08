//broken :(
function update(){
	Gfx.fillbox(0,0,10,10,Col.RED);
	var c = Gfx.getpixel(5,5);
//Debug.log(c); //returns -16777216
  Gfx.fillbox(10,10,10,10,c);
}