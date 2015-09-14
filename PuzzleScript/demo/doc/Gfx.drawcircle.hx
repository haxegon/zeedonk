function update(){
  var t = (Game.time)/30;

  for (i in 0...20){
    var x = Gfx.screenwidthmid;
    var y = Gfx.screenheightmid;
    var w = 50 + Math.sin(t+i)*50;
    var h = 50 + Math.cos(t+i)*50;    
    w*=i/20;
    h*=i/20;
    Gfx.drawcircle(x,y,w,Gfx.hsl((t+i)*100,1,.5));
  }
}