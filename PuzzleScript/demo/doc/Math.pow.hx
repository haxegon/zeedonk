function update(){
  for (x in 0...Gfx.screenwidth) {
    var phase = (x)/15.0;
    for (p in 1...5){
      var y = Math.pow(phase,p);  
      y = Gfx.screenheight-y;
      Gfx.setpixel(x,y,Col.WHITE*p/5);    
    }
  }
}