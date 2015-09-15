function update(){
  for (x in 0...Gfx.screenwidth) {
    var phase = (x)/20.0;
  	var y = Math.sqrt(phase)*20+50;  
    y = Gfx.screenheight-y;
    Gfx.setpixel(x,y,Col.WHITE);    
  }
}