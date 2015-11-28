//This image string is an image made in the Zeedonk Sprite Editor
Gfx.loadimagestring("zebra", "öW3ap3üæ10abe4ar4acQG3aQà3avn3acGavkRqaiTvkaquQT2acGaOabqau2auaf2a");
Gfx.resizeimage("zebra", 4);

function update(){
  Gfx.clearscreen(Gfx.hsl(Game.time, 0.5, 0.5));
  Gfx.rotation(Game.time*4);
  Gfx.drawimage(Gfx.CENTER, Gfx.CENTER, "zebra");
}