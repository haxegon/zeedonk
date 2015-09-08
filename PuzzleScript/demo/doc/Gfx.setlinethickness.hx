function update(){
  var t = Game.time;
  var a = t/10;
  
  var cx = Gfx.screenwidthmid;
  var cy = Gfx.screenheightmid;
  var mx = Mouse.x;
  var my = Mouse.y;
  var dx = mx-cx;
  var dy = my-cy;
  var r = Math.sqrt(dx*dx+dy*dy);
  //r goes from 20 to 60
  //thickness goes from 1 to 10
  var p = 1-(r-20)/40;
  if (p<0){
    p=0;
  }
  if (p>1){
    p=1;
  }
  Gfx.setlinethickness(1+p*9);
  Gfx.drawline(mx,my,cx,cy,Col.WHITE);
}