Gfx.clearscreeneachframe=false;
function update(){
  Gfx.fillbox(0,0,Gfx.screenwidth,Gfx.screenheight,Col.BLACK,0.1);
  if (Game.time%5==0){
    if (Random.rare()){
      Gfx.fillcircle(Gfx.screenwidthmid,Gfx.screenheightmid,50,Col.RED);
    }
    if (Random.occasional()){
      Gfx.fillcircle(Gfx.screenwidthmid,Gfx.screenheightmid,25,Col.YELLOW);
    }
    if (Random.bool()){
      Gfx.fillcircle(Gfx.screenwidthmid,Gfx.screenheightmid,12.5,Col.BLUE);
    }
  }
}