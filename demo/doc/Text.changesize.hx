function update(){
  var d = Math.sqrt(Mouse.x*Mouse.x+Mouse.y*Mouse.y);
	var h = 10*d/Gfx.screenheight;
  Text.changesize(h);
  Text.display(0,0,"Hello, sailor!");
}