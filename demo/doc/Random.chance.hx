Gfx.clearscreeneachframe=false;
function update(){
  Gfx.fillbox(0,0,Gfx.screenwidth,Gfx.screenheight,Col.BLACK,0.1);
  if (Game.time%5==0){
    if (Random.chance(75)){
      Gfx.fillcircle(Gfx.screenwidthmid,Gfx.screenheightmid,50,Col.RED);
    }
    if (Random.chance(50)){
      Gfx.fillcircle(Gfx.screenwidthmid,Gfx.screenheightmid,25,Col.YELLOW);
    }
    if (Random.chance(25)){
      Gfx.fillcircle(Gfx.screenwidthmid,Gfx.screenheightmid,12.5,Col.BLUE);
    }
  }
} 