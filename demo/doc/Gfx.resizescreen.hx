Game.background=Col.RED;
var w = 100+50;
var h = 100-50;
Gfx.resizescreen(w,h,5);
function update(){
  Gfx.clearscreen(Col.BLUE);
  var t = Game.time/30;
  Gfx.drawcircle(Gfx.screenwidthmid,Gfx.screenheightmid,10,Col.WHITE);
}