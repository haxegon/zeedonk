function update(){
  var t = (Game.time)/30;

  var x2 = Gfx.screenwidthmid+(Gfx.screenheightmid-15)*Math.sin(2*Math.PI*(-t/5));
  var y2 = Gfx.screenheightmid+(Gfx.screenheightmid-15)*Math.cos(2*Math.PI*(-t/5));

  for (i in 0...7){
    var x = Gfx.screenwidthmid+(Gfx.screenheightmid-15)*Math.sin(2*Math.PI*(t+i)/7);
    var y = Gfx.screenheightmid+(Gfx.screenheightmid-15)*Math.cos(2*Math.PI*(t+i)/7);
    Gfx.drawline(x,y,x2,y2,Gfx.hsl((t+i)*100,1,.2));
    Gfx.drawline(x,y,Gfx.screenwidthmid,Gfx.screenheightmid,Gfx.hsl((t+i)*100,1,.5));
  }
}