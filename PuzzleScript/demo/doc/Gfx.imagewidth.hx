Gfx.createimage("pic",10,10);
Gfx.drawtoimage("pic");
Gfx.clearscreen(Col.RED);
Gfx.drawtoscreen();

function update(){
  Gfx.drawimage(Mouse.x-Gfx.imagewidth("pic")/2,Mouse.y-Gfx.imageheight("pic")/2,"pic");
}