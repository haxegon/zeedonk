function update(){
  var cx = Gfx.screenwidthmid;
  var cy = Gfx.screenheightmid;
  var mx = Mouse.x;
  var my = Mouse.y;
  var dx=mx-cx;
  var dy=my-cy;
  var r = 40;
  
  var d=Math.sqrt(dx*dx+dy*dy);
  var rx=cx+dx*r/d;
  var ry=cy+dy*r/d;

  Gfx.fillcircle(cx,cy,r,Col.RED);
  Gfx.filltri(cx,cy,rx,ry,cx+r,cy,Col.DARKBROWN);
  Gfx.drawline(cx,cy,rx,ry,Col.YELLOW);
  Gfx.drawline(cx,cy,cx+r,cy,Col.WHITE);
  var angle_radians = Math.atan2(dy,dx);
  var angle_degrees = angle_radians*180/Math.PI;
  Text.display(5,5,Math.round(angle_degrees)+" degrees");
}