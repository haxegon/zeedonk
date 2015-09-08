function update(){
  for (x in 0...Gfx.screenwidth) {
    var phase = -1+2*(x/Gfx.screenwidth);
  	var y = Math.acos(phase)*30;  
    Gfx.setpixel(x,y,Col.WHITE);    
  }
}