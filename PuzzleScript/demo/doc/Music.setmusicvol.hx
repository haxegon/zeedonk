var musicDat = "qdyBHædyIåKeMUsVfb4aJEvéacqdbgbdbgbfbabfbabhbkbhbkbibebibe17babcdefghijklmnop16h2ac6bai2h2cbc3bem2hqdbgbdbgbfbabfbabhbkbhbkbibebibe17babcdefghijklmnop16h2ac6bai2hdcbcbc4bemo3h";

Music.playmusic(musicDat);

function update(){
  var mx = Mouse.x;
  var my = Mouse.y;
  var cx = Gfx.screenwidthmid;
  var cy = Gfx.screenheightmid;
  var dx = mx-cx;
  var dy = my-cy;
  var d = Math.sqrt(dx*dx+dy*dy);
  //gets smaller the further away you are
  var pc = Math.pow(1/(1+d),1/2);
  Music.setmusicvol(pc);
  Gfx.drawline(cx,cy,mx,my,Col.RED);
}