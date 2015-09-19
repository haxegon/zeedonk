function new(){
  //This image was created using the Zeedonk Sprite editor! Select "Sprite Editor"
  //from the "Load Examples" dropdown to make your own!
  Gfx.loadimagestring("heart", "ZSaaanWtgyaah7SZpRZZZZZZZZZZZZYZZNZZhZSpZa5SaZabSadaa");
}

function update(){
  var imgscale;
  var offset;
  if((Game.time/ 2) % 20 >= 10){
    imgscale = 2+(20 - (Game.time/ 2) % 20)/2;
  }else{
    imgscale = 2+((Game.time / 2) % 10)/2;
  }
  offset = -8 + Gfx.imagewidth("heart") * imgscale/2;
  Gfx.drawimage(Gfx.screenwidthmid - offset,
                Gfx.screenheightmid - offset,
                "heart", 
                {scale: imgscale, xalign: Gfx.CENTER, yalign: Gfx.CENTER});
}