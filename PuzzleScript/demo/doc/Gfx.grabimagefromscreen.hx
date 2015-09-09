Gfx.createimage("pic",Gfx.screenwidth,Gfx.screenheight);

function update(){
  Gfx.drawimage(-1,-1,"pic");
  var c = Gfx.HSL(Game.time*10,1,0.5);
  Gfx.drawcircle(Mouse.x,Mouse.y,10,c);
  // "pic" will already have a width and a height from when it was created/loaded.
  Gfx.grabimagefromscreen("pic",0,0);
}