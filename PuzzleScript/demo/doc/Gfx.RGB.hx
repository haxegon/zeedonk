function update(){
  var t = Game.time/10;
	var r = 255*(Math.sin(1.0*t+2)+1)/2;
	var g = 255*(Math.sin(1.2*t+5)+1)/2;
	var b = 255*(Math.sin(1.3*t+4)+1)/2;
  var c = Gfx.RGB(r,g,b);
  Gfx.fillbox(0,0,Gfx.screenwidth,Gfx.screenheightmid,c);
  Gfx.fillbox(0*Gfx.screenwidth/3,Gfx.screenheightmid,Gfx.screenwidth/3,Gfx.screenheightmid,Gfx.RGB(r,0,0));
  Gfx.fillbox(1*Gfx.screenwidth/3,Gfx.screenheightmid,Gfx.screenwidth/3,Gfx.screenheightmid,Gfx.RGB(0,g,0));
  Gfx.fillbox(2*Gfx.screenwidth/3,Gfx.screenheightmid,Gfx.screenwidth/3,Gfx.screenheightmid,Gfx.RGB(0,0,b));
}