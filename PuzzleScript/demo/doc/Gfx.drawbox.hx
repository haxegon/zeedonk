function update(){
  for (i in 1...10){
    var t = (Game.time+10*i)/30;
    var w = Gfx.screenwidthmid+Gfx.screenwidthmid*Math.sin(t);
    var h = Gfx.screenheightmid+Gfx.screenheightmid*Math.cos(t);
    var x = (Gfx.screenwidth-w)/2;
    var y = (Gfx.screenheight-h)/2;  
    Gfx.drawbox(x,y,w,h,Col.BLUE);
  }
}