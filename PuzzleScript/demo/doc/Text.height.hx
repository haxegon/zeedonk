function update(){
  var d = Math.sqrt(Mouse.x*Mouse.x+Mouse.y*Mouse.y);
  var h = 10*d/Gfx.screenheight;
  Text.changesize(h);  
  var h = Text.height();
  var i=0;
  while (i<Gfx.screenheight){
	  Gfx.fillbox(0,i*2*h,Gfx.screenwidth,h,Col.RED);
    i++;
  }
  Text.display(0,0,Text.height());  
}