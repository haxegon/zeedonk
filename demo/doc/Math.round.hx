function update(){
  for (x in 0...Gfx.screenwidth) {
    var phase = x;
  	var y = Math.round(phase/10)*10;  
    y = Gfx.screenheight-y;
    Gfx.setpixel(x,y,Col.WHITE);    
  }
}