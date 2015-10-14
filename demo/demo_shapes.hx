Game.title="Shapes Demo";
Game.homepage="http://www.distractionware.com";
Game.background=Col.BLACK;

var currenteffect;    // Current effect we're drawing on the screen
var totaleffects;     // Total number of effects
var currenteffectname;

var pulse;            // A variable that counts from 0 to 50 and back.
var pulsedir;      // Controls the direction of the pulse.

currenteffect = 1;
totaleffects = 4;
currenteffectname = "1: TRIANGLES";

pulse = 0;
pulsedir = "up";

Text.setfont(Font.ZERO4B11, 1);
//Set up the triangle buffer
Gfx.createimage("triangles", Gfx.screenwidth, Gfx.screenheight);

function update() {
  if (Mouse.leftclick()) {
    currenteffect = currenteffect + 1;
    if (currenteffect > totaleffects) currenteffect = 1;
  }
  
  if (pulsedir == "up") {
    pulse++;
    if (pulse >= 50) pulsedir = "down";
  }else if (pulsedir == "down") {
    pulse--;
    if (pulse <= 0)	pulsedir = "up";
  }
  
  if (currenteffect == 1) {
    drawtriangles(currenteffect);
  }else if (currenteffect == 2) {
    drawcircles(currenteffect);
  }else if (currenteffect == 3) {
    drawhexagon(currenteffect);
  }else if (currenteffect == 4) {
    drawstripes(currenteffect);
  }
    
  Gfx.fillbox(0,Gfx.screenheight-10,Gfx.screenwidth,10,Col.BLACK);
  Text.display(Text.CENTER, Gfx.screenheight - Text.height() - 1, "LEFT CLICK MOUSE TO CYCLE EFFECTS", Col.WHITE);
}

function drawtriangles(effectnum) {
  //Draw to a specially made image buffer
  currenteffectname = "1: TRIANGLES";
  Gfx.drawtoimage("triangles");
  
  if (Game.time % 60 == 0) {
    //Clear the screen every second
    Gfx.fillbox(0, 0, Gfx.screenwidth, Gfx.screenheight, Col.NIGHTBLUE);
  }
  
  //Draw a triangle with random vertices, random colour and alpha of 0.6.
  Gfx.filltri(Random.int(0, Gfx.screenwidth), Random.int(0, Gfx.screenheight), Random.int(0, Gfx.screenwidth), Random.int(0, Gfx.screenheight), Random.int(0, Gfx.screenwidth), Random.int(0, Gfx.screenheight), Gfx.hsl(Random.int(0, 360), 0.5, 0.5));
  
  //Draw that buffer to the screen
  Gfx.drawtoscreen();
  Gfx.drawimage(0, 0, "triangles");
}

function drawcircles(effectnum) {
  currenteffectname = "2: CIRCLES";
  Gfx.linethickness=3;
  var radius = 0;
  
  radius = (Game.time % 140);
  Gfx.drawcircle(Gfx.screenwidthmid, Gfx.screenheightmid, radius, Col.RED);
  radius = ((Game.time+20) % 140);
  Gfx.drawcircle(Gfx.screenwidthmid, Gfx.screenheightmid, radius, Col.YELLOW);
  radius = ((Game.time+40) % 140);
  Gfx.drawcircle(Gfx.screenwidthmid, Gfx.screenheightmid, radius, Col.ORANGE);
  radius = ((Game.time+60) % 140);
  Gfx.drawcircle(Gfx.screenwidthmid, Gfx.screenheightmid, radius, Col.YELLOW);
  radius = ((Game.time+80) % 140);
  Gfx.drawcircle(Gfx.screenwidthmid, Gfx.screenheightmid, radius, Col.WHITE);
  radius = ((Game.time+100) % 140);
  Gfx.drawcircle(Gfx.screenwidthmid, Gfx.screenheightmid, radius, Col.ORANGE);
  radius = ((Game.time+120) % 140);
  Gfx.drawcircle(Gfx.screenwidthmid, Gfx.screenheightmid, radius, Col.YELLOW);
}

function drawhexagon(effectnum) {
  currenteffectname = "3: HEXAGON";
  Gfx.linethickness=1;
  
  var shade;
  for (i in 0 ... 13) {
    shade = 255-(27*i);
  	if(shade<0) shade=0;
    Gfx.drawhexagon(Gfx.screenwidthmid, Gfx.screenheightmid, 10 + (i*10) + (pulse / 2), Game.time / 50, Gfx.rgb(shade, shade, shade));
  }
}

function drawstripes(effectnum) {
  currenteffectname = "4: STRIPES";
  var colour1;
  var colour2;
  
  if (Game.time % 60 < 20) {
    colour1 = Col.GRAY;
    colour2 = Col.WHITE;
  }else if (Game.time % 60 < 40) {
    colour1 = Col.RED;
    colour2 = Col.YELLOW;
  }else {
    colour1 = Col.GREEN;
    colour2 = Col.LIGHTBLUE;
  }
  
  if (Game.time % 120 < 60) {
    //Horizontal stripes
    for (stripe in 0 ... 20) {
      Gfx.fillbox(0, ( -(Game.time % 20)) + (stripe * 10), Gfx.screenwidth, 5, colour1);
      Gfx.fillbox(0, ( -(Game.time % 20)) + (stripe * 10) + 5, Gfx.screenwidth, 5, colour2);
    }
  }else {
    //Vertical stripes
    for (stripe in 0 ... 30) {
      Gfx.fillbox(( -(Game.time % 20)) + (stripe * 10), 0, 5, Gfx.screenheight, colour1);
      Gfx.fillbox(( -(Game.time % 20)) + (stripe * 10) + 5, 0, 5, Gfx.screenheight, colour2);
    }
  }
}
