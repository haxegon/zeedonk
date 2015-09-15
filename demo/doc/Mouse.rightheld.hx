var t=0;
function update(){
  if (Mouse.rightheld()){
    if (t<30){
	    t++;
    }
  } else if (t>0) {
    t--;
  }
  var mx = Mouse.x;
  var my = Mouse.y;
  Gfx.fillbox(mx-1,0,3,Gfx.screenheight,Col.GREY);
  Gfx.fillbox(0,my-1,Gfx.screenwidth,3,Col.GREY);
  Gfx.fillcircle(mx,my,4+t,Col.WHITE);
}