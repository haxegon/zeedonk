Gfx.clearscreeneachframe(false);
function update(){
  if (Mouse.middleclick()){
    Gfx.fillcircle(Mouse.x,Mouse.y,20,Col.WHITE);
  }
  if (Mouse.middleheld()){
    Gfx.fillcircle(Mouse.x,Mouse.y,5,Col.BLUE);    
  }
  if (Mouse.middlereleased()){
    Gfx.fillcircle(Mouse.x,Mouse.y,20,Col.GREY);
  }
}