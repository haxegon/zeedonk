function update(){
  var t = (Game.time)/30;
  var big_r=40;
  
  var x = Gfx.screenwidthmid;
  var y = Gfx.screenheightmid;
  Gfx.fillhexagon(x,y,big_r,t,Gfx.HSL(t*100,1,.5));

  for (i in 0...6){
		var r = 10+(Math.sin(Game.time/10+i)+1)*5;
    var a = 2*Math.PI*(i+0.5)/6-t;
    var x = Gfx.screenwidthmid+big_r*Math.sin(a);
    var y = Gfx.screenheightmid+big_r*Math.cos(a);
	  Gfx.fillhexagon(x,y,r,-a,Gfx.HSL((t+i+130)*100,1,.5));
  }
}