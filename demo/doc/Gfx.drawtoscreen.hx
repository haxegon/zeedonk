Gfx.createimage("pic",30,30);
Gfx.drawtoimage("pic");
Gfx.fillbox(10,10,10,10,Col.RED);
Gfx.drawtoscreen();

function update(){
  Gfx.drawimage(Game.time%30,0,"pic");
}