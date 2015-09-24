//This image string is an image made in the Zeedonk Sprite Editor
Gfx.loadimagestring("zebra", "YKaaapZZZSaaaaaaaaaabeaaaaraaaacE6aaaEOaaavnaaac6avkFqaiHvkaquEHaac6aCabqauaauafaa");
Gfx.resizeimage("zebra", 4);

function update(){
  Gfx.clearscreen(Gfx.hsl(Game.time, 0.5, 0.5));
  Gfx.rotation(Game.time*4);
  Gfx.drawimage(Gfx.CENTER, Gfx.CENTER, "zebra");
}