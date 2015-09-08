function update(){
  for (i in 1...10){
    var t = (Game.time+10*i)/30;
    var r = Gfx.screenwidthmid+Gfx.screenwidthmid*Math.sin(t);
    var x = Gfx.screenwidthmid+Gfx.screenwidthmid*Math.sin(t+1);
    var y = Gfx.screenheightmid+Gfx.screenheightmid*Math.sin(t+2);
    Gfx.fillcircle(x,y,r,Gfx.HSL(t*100,1,.5));
  }
}