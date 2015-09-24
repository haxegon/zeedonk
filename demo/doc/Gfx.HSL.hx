for(j in 0 ... Gfx.screenheight){
  if(j % 2 == 0){
    Gfx.fillbox(0, j, Gfx.screenwidth, 1, Gfx.hsl(j*2,0.5,0.5));
  }
}
