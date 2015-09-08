Gfx.clearscreeneachframe(false);
function update(){
  if (Mouse.rightclick()){
    Gfx.fillcircle(Mouse.x,Mouse.y,20,Col.WHITE);
  }
  if (Mouse.rightheld()){
    Gfx.fillcircle(Mouse.x,Mouse.y,5,Col.BLUE);    
  }
  if (Mouse.rightreleased()){
    Gfx.fillcircle(Mouse.x,Mouse.y,20,Col.GREY);
  }
}