Gfx.clearscreeneachframe(false);
function update(){
  c=Random.int(0,0xffffff);
  Gfx.setpixel(Mouse.x,Mouse.y,c);
}