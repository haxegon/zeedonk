Gfx.clearscreeneachframe(false);
function update(){
  if (Mouse.leftclick()){
    Gfx.fillcircle(Mouse.x,Mouse.y,20,Col.WHITE);
  }
  if (Mouse.leftheld()){
    Gfx.fillcircle(Mouse.x,Mouse.y,5,Col.BLUE);    
  }
  if (Mouse.leftreleased()){
    Gfx.fillcircle(Mouse.x,Mouse.y,20,Col.GREY);
  }
}