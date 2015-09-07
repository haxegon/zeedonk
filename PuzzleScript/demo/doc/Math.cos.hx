function update(){
  for (x in 0...Gfx.screenwidth) {
    var phase = (x + Game.time)/20.0;
  	var y = Math.cos(phase);  
    y = Gfx.screenheightmid+Gfx.screenheightmid*y;
    Gfx.setpixel(x,y,Col.WHITE);    
  }
}