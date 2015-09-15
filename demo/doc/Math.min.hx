function update(){
  for (x in 0...Gfx.screenwidth) {
    var phase = (x)/20.0;
  	var y = Math.min(x,x/2+30);  
    y = Gfx.screenheight-y;
    Gfx.setpixel(x,y,Col.WHITE);    
  }
}