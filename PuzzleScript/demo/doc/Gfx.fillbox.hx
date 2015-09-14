function update(){
  var t = (Game.time)/30;

  for (i in 0...20){
    var x = Gfx.screenwidthmid+(Gfx.screenheightmid-15)*Math.sin(2*Math.PI*(-t+i)/7);
    var y = Gfx.screenheightmid+(Gfx.screenheightmid-15)*Math.cos(2*Math.PI*(-t+i)/7);
    var w = 50 + Math.sin(t+i)*50;
    var h = 50 + Math.cos(t+i)*50;
        
    Gfx.fillbox(x-w/2,y-h/2,w,h,Gfx.hsl((t+i)*100,1,.5));
  }
}