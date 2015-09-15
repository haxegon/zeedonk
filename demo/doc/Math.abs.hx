function update(){
  for (x in 0...Gfx.screenwidth) {
    var phase = x-Gfx.screenwidthmid;
  	var y = Math.abs(phase/10)*10;  
    Gfx.setpixel(x,y,Col.WHITE);    
  }
}