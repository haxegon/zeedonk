Gfx.clearscreeneachframe = false;
function update(){
	var rx = Random.int(0,Gfx.screenwidth);
	var ry = Random.int(0,Gfx.screenheight);
  var rr = Random.int(1,20);
  Gfx.drawcircle(rx,ry,rr,Col.WHITE);
}