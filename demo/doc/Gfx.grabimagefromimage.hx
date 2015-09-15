Gfx.createimage("pic",20,20);
Gfx.createimage("pic2",10,10);
Gfx.createimage("pic3",10,10);
Gfx.drawtoimage("pic");
Gfx.fillbox(00,00,10,10,Col.RED);
Gfx.fillbox(10,00,10,10,Col.GREEN);
Gfx.fillbox(00,10,10,10,Col.BLUE);
Gfx.fillbox(10,10,10,10,Col.YELLOW);
// "pic2" will already have a width and a height from when it was created/loaded.
Gfx.grabimagefromimage("pic2","pic",5,5);
Gfx.grabimagefromimage("pic3","pic",8,8);

Gfx.drawtoscreen();
Convert.toint(1);
function update(){
  Gfx.drawimage((Game.time+00)%70,0,"pic");  
  Gfx.drawimage((Game.time+30)%70,0,"pic2");  
  Gfx.drawimage((Game.time+50)%70,0,"pic3");
} 