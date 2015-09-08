Music.playsound(132);

function update() {
  if (Game.time%5==0){
    var n = Random.int(0,99999999);
    Music.playnote(n,Random.float(0.5,2.0),0.2,1.0);
  }
  Gfx.fillbox(0,0,Gfx.screenwidth,Gfx.screenheight,0x555500);
}