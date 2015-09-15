function update(){
  for (x in 0...Gfx.screenwidth) {
    var phase = (x + Game.time)/20.0;
  	var y = Math.tan(phase)/10;  
    y = Gfx.screenheightmid+Gfx.screenheightmid*y;
    Gfx.setpixel(x,y,Col.WHITE);    
  }
}