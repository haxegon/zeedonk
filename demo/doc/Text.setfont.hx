var fonts = [Font.COMIC, Font.APPLE, Font.BOLD, Font.C64,Font.DEFAULT];
var curfonts = [];
var colors = [];
function genString(){
  var s="";
  var wordcount =Random.int(3,6);
  for (i in 0...wordcount){    
    s+=Random.pickstring("a","rose","by","any","other","name","would","smell","as","sweet")+" ";
  }
  return s;
}

var strings=[];
var h = 15;
function update(){
  if(Game.time%10==0){
    if (strings.length*h>Gfx.screenheight) {
      strings.splice(0,1);
      curfonts.splice(0,1);
      colors.splice(0,1);
    }
    strings.push(genString());
    curfonts.push(Random.int(0,fonts.length-1));
    colors.push(Gfx.hsl(Random.int(0,359),1.0,0.5));
  }
  for (i in 0...strings.length){
    Text.setfont(fonts[curfonts[i]],1);
    Text.display(0,i*h,strings[i],colors[i]);
  }
}