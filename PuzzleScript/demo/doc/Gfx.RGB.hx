function update(){
  var t = Game.time/10;
	var r = 255*(Math.sin(1.0*t+2)+1)/2;
	var g = 255*(Math.sin(1.2*t+5)+1)/2;
	var b = 255*(Math.sin(1.3*t+4)+1)/2;
  var c = Gfx.RGB(r,g,b);
  var w=Gfx.screenwidth;
  var hm=Gfx.screenheightmid;
  Gfx.fillbox(0,0,w,hm,c);
  Gfx.fillbox(0*w/3,hm,w/3,hm,Gfx.RGB(r,0,0));
  Gfx.fillbox(1*w/3,hm,w/3,hm,Gfx.RGB(0,g,0));
  Gfx.fillbox(2*w/3,hm,w/3,hm,Gfx.RGB(0,0,b));
}