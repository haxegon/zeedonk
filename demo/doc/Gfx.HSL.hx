function update(){
  var c = Gfx.hsl(Game.time*10,1,0.5);
  Gfx.fillbox(0,0,Gfx.screenwidth,Gfx.screenheight,c);
}