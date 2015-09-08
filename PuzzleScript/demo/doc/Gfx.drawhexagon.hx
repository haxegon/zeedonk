function update(){
  var t = (Game.time)/30;
  for (i in 0...7){
    var r = 10;
    var angle = 2*(t+i);
    var x = Gfx.screenwidthmid+(Gfx.screenheightmid-15)*Math.sin(2*Math.PI*(t+i)/7);
    var y = Gfx.screenheightmid+(Gfx.screenheightmid-15)*Math.cos(2*Math.PI*(t+i)/7);
    Gfx.drawhexagon(x,y,r,angle,Gfx.HSL((t+i)*100,1,.5));
  }
  var x = Gfx.screenwidthmid;
  var y = Gfx.screenheightmid;
  var r = (Gfx.screenwidthmid-20)/3;
  Gfx.drawhexagon(x,y,r,-t,Gfx.HSL((t-1)*100,1,.5));
}