Gfx.clearscreeneachframe(false);
Gfx.setlinethickness(2);
var l = 30;
function update(){
  Gfx.fillbox(0,0,Gfx.screenwidth,Gfx.screenheight,Col.WHITE,0.1);
  var t= Game.time/50;
  var px = Gfx.screenwidthmid;
  var py = Gfx.screenheightmid-40;
  var angle=0;
  var pieces=12;
  var deltaAngle = 2*Math.PI/pieces;
  var a = Game.time/100;
  for (i in 0...12){
    var dx = -l*Math.cos(a);
    var dy = l*Math.sin(a);
    var c = Gfx.HSL(i*360/12+Game.time*10,1.0,0.5);
    Gfx.drawline(px,py,px+dx,py+dy,c);
    px+=dx;
    py+=dy;
    a+=((i%2==0)?1:-1)*deltaAngle+t;
  }
}