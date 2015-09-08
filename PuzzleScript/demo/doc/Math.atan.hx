function update(){
  for (x in 0...Gfx.screenwidth) {
    var phase = -10+20*(x/Gfx.screenwidth);
  	var y = Math.atan(phase)*30+60;  
    Gfx.setpixel(x,y,Col.WHITE);    
  }
}