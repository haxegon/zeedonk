var starx;
var stary;
var starspeed;
var numstars;

var fontlist;
var fontcredits;
var currentfont = 0;
var scrollposition = 0;
var scrolldelay = 0;
var counter = 0;
var coloroffset = 60;

function new(){
  initstars();
  
  loadfontinfo();
  currentfont = 0;
}

function update(){
  if(Mouse.leftclick()){
    currentfont = (currentfont + 1) % fontlist.length;
    scrolldelay = 0;
    scrollposition = 0;
    Music.playsound(6142);
  }
  
  if(counter % 2 == 0) updatestars();
  drawstars();

  Text.setfont("pixel", 1);
  Text.display(Text.CENTER,Gfx.screenheight - Text.height(), "Click to change font");
  
  Text.setfont(fontlist[currentfont], 2);
  Text.display(Text.CENTER,Gfx.screenheightmid - Text.height(), "\"" + fontlist[currentfont] + "\"", Gfx.hsl((currentfont * coloroffset), 0.5, 0.5));
  
  Text.setfont(fontlist[currentfont], 1);
  Text.display(10 - scrollposition,Gfx.screenheightmid + 2, fontcredits[currentfont], Gfx.hsl((currentfont * coloroffset), 0.15, 0.4));
  
  //Update scroller position
  counter++;
  if(scrollposition >= Text.len(fontcredits[currentfont]) - Gfx.screenwidth + 20){
    scrolldelay--;
    if(scrolldelay <= 0){
      scrolldelay = 0;
      scrollposition = 0;
    }
  }else{
    scrolldelay++;
    if(scrolldelay >= 45){
      scrolldelay = 45;
      scrollposition+=2;
    }
  }

}

function loadfontinfo(){
  fontlist = [Font.ZERO4B11, Font.C64, Font.COMIC, Font.CRYPT, Font.DEFAULT,
              Font.DOS, Font.GANON, Font.NOKIA, Font.OLDENGLISH, Font.PIXEL,
              Font.PRESSSTART, Font.RETROFUTURE, Font.ROMAN, Font.SPECIAL,
              Font.YOSTER];
  
  fontcredits = [];
  fontcredits.push("04B11 by Yuji Oshimoto, 04.jp.org");
  fontcredits.push("Standard C64 font. Converted by ck! of Freaky Fonts as \"Adore64\".");
  fontcredits.push("DeluxePaint II's Comic font. Converted by codeman38, zone38.net");
  fontcredits.push("Crypt of Tomorrow by Anna Antrophy, auntiepixelante.com");
  fontcredits.push("\"Normal\" Font from PC Paint by Mouse Systems. Converted by codeman38, zone38.net");
  fontcredits.push("Standard DOS VGA font. From Zeh Fernando's Perfect DOS VGA font, zehfernando.com");
  fontcredits.push("Inspired by the font from Zelda: A Link to the Past. Converted by codeman38, zone38.net");
  fontcredits.push("As seen in Flixel! Nokia Cellphone font by Zeh Fernando, zehfernando.com");
  fontcredits.push("\"Old English\" Font from PC Paint by Mouse Systems. Converted by codeman38, zone38.net");
  fontcredits.push("Slightly modified version of PixelZim by Zeh Fernando, zehfernando.com");
  fontcredits.push("NAMCO inspired font by codeman38, zone38.net");
  fontcredits.push("Retro Future Heavy, by Cyclone Graphics.");
  fontcredits.push("\"Roman\" Font from PC Paint by Mouse Systems. Converted by codeman38, zone38.net");
  fontcredits.push("\"Special\" Font from PC Paint by Mouse Systems. Converted by codeman38, zone38.net");
  fontcredits.push("Inspired by the font from Yoshi's Island. Converted by codeman38, zone38.net");

  //Load in all the fonts now
  for(i in 0 ... fontlist.length){
    Text.setfont(fontlist[i], 1);
  }
}
  
function initstars(){
  numstars = 30;
  starspeed = [];
  starx = [];
  stary = [];
  for(i in 0 ... numstars){
    starspeed.push(altrandom(3,6));
    starx.push(altrandom(0, Gfx.screenwidth * 2));
    stary.push(altrandom(0, Gfx.screenheight));
  } 
}
  
function updatestars(){
  for(i in 0 ... numstars){
    starx[i] -= starspeed[i];
    if(starx[i] < -10){    
      starspeed[i] = altrandom(3,6);
      starx[i] = Gfx.screenwidth;
      stary[i] = altrandom(0, Gfx.screenheight);
    }
  }
}

function altrandom(from, to){
	return from + Math.floor(((to - from + 1) * Math.random()));
}

var starcol;
function drawstars(){
  for(i in 0 ... numstars){
    starcol = 255 - (6 - starspeed[i]) * 60;
    Gfx.setpixel(starx[i], stary[i], Gfx.rgb(starcol, starcol, starcol));
  }
}