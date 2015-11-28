//This image was created using the Zeedonk Sprite editor! Select "Sprite Editor"
//from the "Load Examples" dropdown to make your own!
Gfx.loadimagestring("heart", "üæ3anètgy2ahHæüpä12üö2üZ2ühüæpüaFæaüabæad2a");

function update(){
  var imgscale;
  var offset;
  if((Game.time/ 2) % 20 >= 10){
    imgscale = 2+(20 - (Game.time/ 2) % 20)/2;
  }else{
    imgscale = 2+((Game.time / 2) % 10)/2;
  }
  Gfx.scale(imgscale, imgscale);
  Gfx.drawimage(Gfx.CENTER, Gfx.CENTER,"heart");
}