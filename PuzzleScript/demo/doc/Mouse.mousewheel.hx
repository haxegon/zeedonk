var a =0;
function update(){
  var w = Mouse.mousewheel;
  if (w>0) a++;
  if (w<0) a--;
  for (i in 0...15){
    var c = Gfx.hsl(20*i+10*Game.time,1.0,0.5);
	  Gfx.drawhexagon(Gfx.screenwidthmid,Gfx.screenheightmid,8*i,2*(a*i/180),c);
  }
}