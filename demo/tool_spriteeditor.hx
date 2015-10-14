Game.title="Sprite Editor";

var sound_select = 84923106;
var sound_click = 25271106;
var sound_random = 44531703;
var sound_clear = 27481303;
var sound_export = 57854303;
var sound_import = 41433503;
var sound_undo = 43337107;

var imgwidth = 16;
var imgheight = 16;
var boxsize;
var oldpalette = [1, 1, 1, 1];
var palette = [0, 0, 0, 0];
var palettehue = [0, 0, 0, 0];
var palettesaturation = [0, 0, 0, 0];
var palettelightness = [0, 0, 0, 0];
var button = [];
var arnepalette = [
  Col.BLACK, Col.GRAY, Col.WHITE, Col.RED, Col.PINK, Col.DARKBROWN, 
  Col.BROWN, Col.ORANGE, Col.YELLOW, Col.DARKGREEN, Col.GREEN, Col.LIGHTGREEN,
  Col.NIGHTBLUE, Col.DARKBLUE, Col.BLUE, Col.LIGHTBLUE, Col.MAGENTA, Col.TRANSPARENT];

var arnehue = [0, 0, 0, 355, 345, 34, 30, 28, 51, 192, 97, 75, 211, 200, 205, 199, 300, 0];
var arnesaturation = [0, 0, 0, 0.67, 0.65, 0.26, 0.66, 0.82, 0.9, 0.25, 0.68, 0.68, 0.3, 1, 0.88, 0.66, 1, 0];
var arnelightness = [0, 0.62, 1, 0.45, 0.66, 0.23, 0.39, 0.56, 0.69, 0.25, 0.32, 0.48, 0.15, 0.26, 0.57, 0.82, 0.5, 0];

var imgcanvas;
var canvasx;
var canvasy;
var canvaswidth;
var canvasheight;

var cursorx;
var cursory;
var huex;
var huey;
var temp;

var currentcol;
var brushsize;
var currenthue;
var currentsaturation;
var currentlightness;

var backgroundcol;
var backgroundhue;
var buttoncol;
var buttonhighlightcol;

var currentstate;

var mouseheld = false;

var undobuffer=[];
var undobuffersize = 5000;
var undobufferposition = 0;

//New is an optional function that's called at startup
function new() {
  Text.setfont(Font.THIN, 1);

  //Precache some stuff for speed
  Gfx.createimage("transparent_8", 8, 8);
  Gfx.drawtoimage("transparent_8");
  Gfx.fillbox(0, 0, 8, 8, Gfx.rgb(64, 64, 64));
  Gfx.fillbox(0, 0, 4, 4, Gfx.rgb(32, 32, 32));
  Gfx.fillbox(4, 4, 4, 4, Gfx.rgb(32, 32, 32));
  
  Gfx.createimage("transparent_12", 12, 12);
  Gfx.drawtoimage("transparent_12");
  Gfx.fillbox(0, 0, 12, 12, Gfx.rgb(64, 64, 64));
  Gfx.fillbox(0, 0, 6, 6, Gfx.rgb(32, 32, 32));
  Gfx.fillbox(6, 6, 6, 6, Gfx.rgb(32, 32, 32));
  
  Gfx.createimage("transparent_14", 14, 14);
  Gfx.drawtoimage("transparent_14");
  Gfx.fillbox(0, 0, 14, 14, Gfx.rgb(64, 64, 64));
  Gfx.fillbox(0, 0, 7, 7, Gfx.rgb(32, 32, 32));
  Gfx.fillbox(7, 7, 7, 7, Gfx.rgb(32, 32, 32));
  
  Gfx.createimage("transparent_16", 16, 16);
  Gfx.drawtoimage("transparent_16");
  Gfx.fillbox(0, 0, 16, 16, Gfx.rgb(64, 64, 64));
  Gfx.fillbox(0, 0, 8, 8, Gfx.rgb(32, 32, 32));
  Gfx.fillbox(8, 8, 8, 8, Gfx.rgb(32, 32, 32));
  
  Gfx.drawtoscreen();
  
  for(i in 0 ... undobuffersize){
    undobuffer.push({time:-1});
  }
  undobufferposition = 0;
  
  brushsize = 0;
  randompalette();
  for(i in 0 ... 4) oldpalette[i] = palette[i];
  currentstate = "editor";
  resize();

  Gfx.createimage("sprite", 16, 16);

  Gfx.drawtoimage("sprite");
  Gfx.fillbox(0, 0, 16, 16, Col.BLACK);
  Gfx.drawtoscreen();

  Gfx.createimage("hue", 90, 25);
  Gfx.drawtoimage("hue");
  Gfx.fillbox(0, 0, 90, 25, Col.BLACK);
  for (j in 1 ... 24) {
    for (i in 1 ... 89) {
      Gfx.fillbox(i, j, 1, 1, Gfx.hsl(i * 360 / 90, 1 - ((j*j)/625), 0.5));
    }
  }

  Gfx.createimage("lightness", 90, 10);
  Gfx.drawtoimage("lightness");
  Gfx.fillbox(0, 0, 90, 10, Col.BLACK);
  for (i in 1 ... 89) {
    Gfx.fillbox(i, 1, 1, 6, Gfx.rgb(Convert.toint(i * 255 / 90), Convert.toint(i * 255 / 90), Convert.toint(i * 255 / 90)));
  }

  Gfx.createimage("preset", 90, 20);
  Gfx.drawtoimage("preset");
  for (i in 0 ... 9) {
    Gfx.fillbox(1 + i * 10, 0, 9, 9, Col.BLACK);
    Gfx.fillbox(1 + i * 10, 10, 9, 9, Col.BLACK);
    Gfx.fillbox(2 + i * 10, 1, 7, 7, arnepalette[i]);
    Gfx.fillbox(2 + i * 10, 11, 7, 7, arnepalette[i + 9]);
  }
  for (j in 0 ... 4) for (i in 0 ... 4) Gfx.fillbox(82 + i * 2, 11 + j * 2, 2, 2, (i + j) % 2 == 0?Gfx.rgb(64, 64, 64):Gfx.rgb(32, 32, 32));
  Gfx.drawline(89, 11, 89, 19, Col.BLACK);
  Gfx.drawline(82, 18, 90, 18, Col.BLACK);
  Gfx.drawtoscreen();

  currentcol = 3;
  currenthue = palettehue[3];
  currentsaturation = palettesaturation[3];
  currentlightness = palettelightness[3];
  updatehueposition();

  setbackgroundcolour();

  imgcanvas = [];
  for (j in 0 ... 16) {
    for (i in 0 ... 16) {
      imgcanvas.push(0);
    }
  }

  button.push( {
    x: Gfx.screenwidthmid - 50,
    y: Gfx.screenheightmid + 6,
    width: 38,
    text: "YES",
    action: "clear_yes",
    state: "clear"
  });

  button.push( {
    x: Gfx.screenwidthmid+12,
    y: Gfx.screenheightmid+6,
    width: 38,
    text: "NO",
    action: "clear_no",
    state: "clear"
  });

  button.push( {
    x: Gfx.screenwidthmid-38,
    y: Gfx.screenheightmid,
    width: 75,
    text: "BOO! BOOO!",
    action: "back",
    state: "todo"
  });

  button.push( {
    x: 14,
    y: 135,
    width: 38,
    text: "RANDOM",
    action: "random",
    state: "editor"
  });

  button.push( {
    x: 150,
    y: 135,
    width: 38,
    text: "IMPORT", 
    action: "import",
    state: "editor"
  });

  button.push( {
    x: 195,
    y: 135,
    width: 38,
    text: "EXPORT", 
    action: "export",
    state: "editor" 
  }); 

  button.push( {
    x: 150,
    y: 70,
    width: 38,
    text: "NEW", 
    action: "new",
    state: "editor"
  });

  button.push( {
    x: 195,
    y: 70,
    width: 15,
    text: "16", 
    action: "resizex",
    state: "editor" 
  });

  button.push( {
    x: 218,
    y: 70,
    width: 15,
    text: "16", 
    action: "resizey",
    state: "editor" 
  });
}

var BASE64 = "abcdefghijklmnopqrstuvwxyz0123456789$=ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

function convertobinary(t, len) {
  var endstring = "";
  var currentbit;

  while (t > 0) {
    currentbit = t % 2;
    endstring = Convert.tostring(currentbit) + endstring;
    t = t - currentbit;
    t = Convert.toint(t / 2);
  }

  while (endstring.length < len) endstring = "0" + endstring;
  return ""+endstring;
}

function convertbase64tobinary(t) {
  var returnstr = "";
  var currentval = 0;

  for (i in 0 ... t.length) {
    currentval = BASE64.indexOf(t.substr(i, 1));
    returnstr = returnstr+""+convertobinary(currentval, 6);
  }
  return returnstr;
}

function convertbinarytobase64(t) {
  var endstring = "";
  var currentval = 0;

  while (t.length % 6 != 0) t += "0";

  var i = 0;
  while (i < t.length) {
    if (t.substr(i, 1) == "1") {
      currentval += Convert.toint(Math.pow(2, 5 - (i % 6)));
    }
    i++;
    if (i % 6 == 0) {
      endstring += BASE64.substr(currentval, 1);
      currentval = 0;
    }
  }

  return endstring;
}

function convertbinarytoint(binarystring) {
  var returnval = 0;
  for (i in -binarystring.length ... 0) {
    if (binarystring.substr( -i - 1, 1) == "1"){
      returnval += Convert.toint(Math.pow(2, binarystring.length + i));
    }
  }
  return returnval;
}

function loadimagestring(inputstring) {
  if(inputstring == "" || inputstring == null) return;
  var currentchunk = "";
  function getnextchunk(size) {
    currentchunk = inputstring.substr(0, size);
    inputstring = inputstring.substr(size);
  }

  inputstring = convertbase64tobinary(inputstring);

  //Get image width:
  getnextchunk(4);
  imgwidth = convertbinarytoint(currentchunk) + 1;

  //Get image height:
  getnextchunk(4);
  imgheight = convertbinarytoint(currentchunk) + 1;
  resize();
  
  getnextchunk(1);
  var imgformat = Convert.toint(currentchunk);
  
  if(imgformat == 0){
    //Load the palette
    var r; var g ; var b;
    for (i in 0 ... 4) {
      getnextchunk(8);
      r = convertbinarytoint(currentchunk);
      getnextchunk(8);
      g = convertbinarytoint(currentchunk);
      getnextchunk(8);
      b = convertbinarytoint(currentchunk);
      palette[i] = Gfx.rgb(r, g, b);
      palettehue[i] = Gfx.gethue(palette[i]);
      palettesaturation[i] = Gfx.getsaturation(palette[i]);
      palettelightness[i] = Gfx.getlightness(palette[i]);
    }

    //Clear the image before starting
    for (j in 0 ... 16) for (i in 0 ... 16) imgcanvas[i + j * 16] = 0;

    for (j in 0 ... imgheight) {
      for (i in 0 ... imgwidth) {
        getnextchunk(2);
        imgcanvas[i + j * 16] = convertbinarytoint(currentchunk);
      }
    }
  }else{
    //Load the palette
    randompalette();
    var r; var g ; var b;
    for (i in 0 ... 2) {
      getnextchunk(8);
      r = convertbinarytoint(currentchunk);
      getnextchunk(8);
      g = convertbinarytoint(currentchunk);
      getnextchunk(8);
      b = convertbinarytoint(currentchunk);
      palette[i] = Gfx.rgb(r, g, b);
      palettehue[i] = Gfx.gethue(palette[i]);
      palettesaturation[i] = Gfx.getsaturation(palette[i]);
      palettelightness[i] = Gfx.getlightness(palette[i]);
    }

    //Clear the image before starting
    for (j in 0 ... 16) for (i in 0 ... 16) imgcanvas[i + j * 16] = 0;

    for (j in 0 ... imgheight) {
      for (i in 0 ... imgwidth) {
        getnextchunk(1);
        imgcanvas[i + j * 16] = Convert.toint(currentchunk);
      }
    }
  }
}

function saveimagestring() {
  var outputstring = "";
  //Format: Width (0-15), H (0-15), Type, Colours 1 to 4, raw image data
  outputstring += convertobinary(imgwidth - 1, 4);
  outputstring += convertobinary(imgheight - 1, 4);
  
  //If we use four colours, then we output as type "0". If we use only two,
  //then we output as type "1", which uses half the space!
  
  var colourcount = [0, 0, 0, 0];
  for (j in 0 ... imgheight) {
    for (i in 0 ... imgwidth) {
      colourcount[imgcanvas[i + j * 16]] = 1;
    }
  }
  
  var imageformat = 0;
  if(colourcount[0] + colourcount[1] + colourcount[2] + colourcount[3] == 2){
    //There's a weird edge case here where you just make a NxN solid block:
    //In that case, for simplicity, just use the four colour format.
    imageformat = 1;
  }
  
  outputstring += Convert.tostring(imageformat);
  
  if(imageformat == 0){
    //Four colour format
    for (i in 0 ... 4) {
      outputstring += convertobinary(Gfx.getred(palette[i]), 8);
      outputstring += convertobinary(Gfx.getgreen(palette[i]), 8);
      outputstring += convertobinary(Gfx.getblue(palette[i]), 8);
    }

    for (j in 0 ... imgheight) {
      for (i in 0 ... imgwidth) {
        outputstring += convertobinary(imgcanvas[i + j * 16], 2);
      }
    }
  }else{
    //Two colour format
    var colour1;
    var colour2;
    
    if(colourcount[0] == 1) {
      colour1 = 0;
      if(colourcount[1] == 1) { colour2 = 1;
      }else if(colourcount[2] == 1) { colour2 = 2;
      }else{ colour2 = 3; }
    }else if(colourcount[1] == 1) {
      colour1 = 1;
      if(colourcount[2] == 1) { colour2 = 2;
      }else{ colour2 = 3; }
    }else if(colourcount[2] == 1) {
      colour1 = 2; colour2 = 3;
    }
    
    outputstring += convertobinary(Gfx.getred(palette[colour1]), 8);
    outputstring += convertobinary(Gfx.getgreen(palette[colour1]), 8);
    outputstring += convertobinary(Gfx.getblue(palette[colour1]), 8);
    
    outputstring += convertobinary(Gfx.getred(palette[colour2]), 8);
    outputstring += convertobinary(Gfx.getgreen(palette[colour2]), 8);
    outputstring += convertobinary(Gfx.getblue(palette[colour2]), 8);
    
    for (j in 0 ... imgheight) {
      for (i in 0 ... imgwidth) {
        if(imgcanvas[i + j * 16] == colour1){
          outputstring += "0";
        }else{
          outputstring += "1";
        }
      }
    }
  }

  var convertedstring = convertbinarytobase64(outputstring);
  trace(convertedstring);
  Game.prompt("Exported image string:",convertedstring);
}

function updatehueposition() {
  huex = Convert.toint(145 + (currenthue * 90) / 360);
  huey = Convert.toint(6 + ((1-currentsaturation) * 25));
  setbackgroundcolour();
}

function setbackgroundcolour(){
  backgroundhue = (palettehue[0] + 180) % 360;
  backgroundcol = Gfx.hsl(backgroundhue, 0.3, 0.15);

  buttoncol = Gfx.hsl(backgroundhue, 0.5, 0.6);
  buttonhighlightcol = Gfx.hsl(backgroundhue, 0.5, 0.8);
  Game.background=backgroundcol;
}

function checkpalettechanges(){
  //If palette has changed, store an undo buffer object for it
  for(i in 0 ... 4){
    if(oldpalette[i] != palette[i]){
      undobuffer[undobufferposition] = {
        action: "changecol", 
        oldposition: i, 
        oldvalue: oldpalette[i], 
        time: Game.time
      };
      undobufferposition = (undobufferposition + 1) % undobuffersize;
      oldpalette[i] = palette[i];
    }  
  }
}

function randompalette(){
  var randhue = Random.int(0, 360);
  var randsaturation = 0.3;
  var randlightness = 0.2;
  palette[0] = Gfx.hsl(randhue, randsaturation, randlightness);

  palettehue[0] = randhue;
  palettesaturation[0] = randsaturation;
  palettelightness[0] = randlightness;
  setbackgroundcolour();

  randhue = (randhue + Random.int(20, 90)) % 360;
  randsaturation = 0.5;
  randlightness = 0.4;
  palette[1] = Gfx.hsl(randhue, randsaturation, randlightness);
  palettehue[1] = randhue;
  palettesaturation[1] = randsaturation;
  palettelightness[1] = randlightness;

  randhue = (randhue + Random.int(20, 90)) % 360;
  randsaturation = 0.5;
  randlightness = 0.5;
  palette[2] = Gfx.hsl(randhue, randsaturation, randlightness);
  palettehue[2] = randhue;
  palettesaturation[2] = randsaturation;
  palettelightness[2] = randlightness;

  randhue = (randhue + Random.int(20, 90)) % 360;
  randsaturation = 0.5;
  randlightness = 0.7;
  palette[3] = Gfx.hsl(randhue, randsaturation, randlightness);
  palettehue[3] = randhue;
  palettesaturation[3] = randsaturation;
  palettelightness[3] = randlightness;

  currenthue = palettehue[currentcol];
  currentsaturation = palettesaturation[currentcol];
  currentlightness = palettelightness[currentcol];
  updatehueposition();
}

function resize() {
  //Call when width or height have changed
  if(imgheight > imgwidth){
    if (imgheight >= 10) { boxsize = 8;
    }else if (imgheight >= 8) {	boxsize = 12;
    }else if (imgheight >= 6) {	boxsize = 14;
    }else {	boxsize = 16;	}
  }else {
    if (imgwidth >= 10) { boxsize = 8;
    }else if (imgwidth >= 8) {	boxsize = 12;
    }else if (imgwidth >= 6) {	boxsize = 14;
    }else {	boxsize = 16;	}
  }

  canvaswidth = boxsize * imgwidth;
  canvasheight = boxsize * imgheight;
  canvasx = Convert.toint((150 - canvaswidth) / 2);
  canvasy = Convert.toint((150 - canvasheight) / 2) - 8;

  for (i in 0 ... button.length) {
    if (button[i].action == "resizex") {
      button[i].text = Convert.tostring(imgwidth);
    }else if (button[i].action == "resizey") {
      button[i].text = Convert.tostring(imgheight);
    }
  }
}

function drawbackground() {
  Gfx.clearscreen(backgroundcol);

  Gfx.fillbox(canvasx - 1, canvasy - 1, canvaswidth + 2, canvasheight + 2, Col.LIGHTBLUE);
  Gfx.fillbox(canvasx, canvasy, canvaswidth, canvasheight, Col.BLACK);

  var transparentpixel = "transparent_" + boxsize;
  for (j in 0 ... imgheight) {
    for (i in 0 ... imgwidth) {
      var pixel = palette[imgcanvas[i + j * 16]];
      if (pixel == Col.TRANSPARENT) {
        Gfx.drawimage(canvasx + i * boxsize, canvasy + j * boxsize, transparentpixel);
      }else{
        Gfx.fillbox(canvasx + i * boxsize, canvasy + j * boxsize, boxsize, boxsize, palette[imgcanvas[i + j * 16]]);
      }
    }
  }

  for (i in 0 ... 4) {
    if (currentcol == i) {
      if (palette[i] == Col.TRANSPARENT) {
        Gfx.fillbox(135 + (18 * i) - 65, 128 + 8, 12, 12, Gfx.rgb(64, 64, 64));
        Gfx.fillbox(135 + (18 * i) - 65, 128 + 8, 6, 6, Gfx.rgb(32, 32, 32));
        Gfx.fillbox(135 + (18 * i) - 65 + 6, 128 + 8 + 6, 6, 6, Gfx.rgb(32, 32, 32));
      }else{
        Gfx.fillbox(135 + (18 * i) - 65, 128 + 8, 12, 12, palette[i]);
      }
    }else {
      Gfx.fillbox(135 + (18 * i) - 65, 128 + 8, 12, 12, Col.BLACK);
      if (palette[i] == Col.TRANSPARENT) {
        Gfx.fillbox(135 + (18 * i) - 65, 128 + 6, 12, 12, Gfx.rgb(64, 64, 64));
        Gfx.fillbox(135 + (18 * i) - 65, 128 + 6, 6, 6, Gfx.rgb(32, 32, 32));
        Gfx.fillbox(135 + (18 * i) - 65 + 6, 128 + 4 + 8, 6, 6, Gfx.rgb(32, 32, 32));
      }else{
        Gfx.fillbox(135 + (18 * i) - 65, 128 + 6, 12, 12, palette[i]);
      }
    }
  }
}

function dobuttonaction(t, rclick) {
  if (t == "back") {
    Music.playsound(sound_select, 0.5);
    currentstate = "editor";
    mouseheld = true;
  }else if (t == "clear_yes") {
    Music.playsound(sound_clear, 0.8);
    undobuffer[undobufferposition] = {
      action:"clear", 
      oldvalue: [], 
      time: Game.time
    };
    for(i in 0 ... 16) for(j in 0 ... 16) undobuffer[undobufferposition].oldvalue[i + j * 16] = imgcanvas[i + j * 16];     
    undobufferposition = (undobufferposition + 1) % undobuffersize;
    for (j in 0 ... 16) for (i in 0 ... 16) imgcanvas[i + j * 16] = 0;
    currentstate = "editor";
    mouseheld = true;
  }else if (t == "clear_no") {
    Music.playsound(sound_select, 0.5);
    currentstate = "editor";
  }else if (t == "new") {
    Music.playsound(sound_select, 0.5);
    currentstate = "clear";
  }else	if (t == "resizex") {
    Music.playsound(sound_click, 0.2);
    if(rclick){
      imgwidth = imgwidth - 1;
      if (imgwidth == 3) imgwidth = 16;
    }else{
      imgwidth = imgwidth + 1;
      if (imgwidth == 17) imgwidth = 4;
    }
    resize();
  }else	if (t == "resizey") {
    Music.playsound(sound_click, 0.2);
    if(rclick){
      imgheight = imgheight - 1;
      if (imgheight == 3) imgheight = 16;
    }else{
      imgheight = imgheight + 1;
      if (imgheight == 17) imgheight = 4;
    }
    resize();
  }else if (t == "random") {
    Music.playsound(sound_random, 0.5);
    randompalette();
    
    checkpalettechanges();
  }else if (t == "export") {
    Music.playsound(sound_export, 0.5);
    saveimagestring();
  }else if (t == "import") {
    Music.playsound(sound_import, 0.5);
    loadimagestring(Game.prompt("Enter an imagestring to import:",""));
  }
}

function drawgui() {
  for (i in 0 ... button.length) {
    button[i].mouseover = false;
    if(currentstate == button[i].state){
      if (inbox_w(Mouse.x, Mouse.y, button[i].x, button[i].y, button[i].width, 9)) {
        Gfx.fillbox(button[i].x, button[i].y, button[i].width, 9, buttonhighlightcol);
        button[i].mouseover = true;
      }else{
        Gfx.fillbox(button[i].x, button[i].y, button[i].width, 9, buttoncol);
      }
      if (button[i].text != "") {
        Text.display(button[i].x + ((button[i].width-Text.len(button[i].text))/2), button[i].y + 1, button[i].text, Col.WHITE);
      }

      if (button[i].mouseover) {
        if (Mouse.leftclick()) {
          dobuttonaction(button[i].action, false);
        }else if (Mouse.rightclick()) {
          dobuttonaction(button[i].action, true);
        }
      }
    }
  }
}

function inbox_w(x, y, x1, y1, w, h) {
  if (x >= x1 && y >= y1) {
    if (x < x1 + w && y < y1 + h) {
      return true;
    }
  }
  return false;
}


function inbox(x, y, x1, y1, x2, y2) {
  if (x >= x1 && y >= y1) {
    if (x < x2 && y < y2) {
      return true;
    }
  }
  return false;
}

function undo(){
  //Do the reverse of the last action
  if(undobuffer[(undobufferposition+undobuffersize-1)%undobuffersize].time >= 0){
    Music.playsound(sound_undo);
    i = (undobufferposition+undobuffersize-1)%undobuffersize;
    var lasttime = undobuffer[i].time;
    while(undobuffer[i].time == lasttime){
      if(undobuffer[i].action == "pset"){
        //Painting a pixel
        imgcanvas[undobuffer[i].oldposition] = undobuffer[i].oldvalue;
      }else if(undobuffer[i].action == "clear"){
        imgcanvas = undobuffer[i].oldvalue;
        for(i2 in 0 ... 16) for(j2 in 0 ... 16) imgcanvas[i2 + j2 * 16] = undobuffer[i].oldvalue[i2 + j2 * 16];
      }else if(undobuffer[i].action == "changecol"){
        palette[undobuffer[i].oldposition] = undobuffer[i].oldvalue;
        
        palettehue[undobuffer[i].oldposition] = Gfx.gethue(palette[undobuffer[i].oldposition]);
        palettesaturation[undobuffer[i].oldposition] = Gfx.getsaturation(palette[undobuffer[i].oldposition]);
        palettelightness[undobuffer[i].oldposition] = Gfx.getlightness(palette[undobuffer[i].oldposition]);

        currenthue = palettehue[currentcol];
        currentsaturation = palettesaturation[currentcol];
        currentlightness = palettelightness[currentcol];
        updatehueposition();
      }
      undobuffer[i].time = -1;
      undobufferposition = (undobufferposition+undobuffersize-1)%undobuffersize;
      i = (undobufferposition+undobuffersize-1)%undobuffersize;
    }
  }
}

function pset(x, y, c) {
  if (inbox(x, y, 0, 0, imgwidth, imgheight)) {
    temp = x + y * 16;
    if(imgcanvas[temp] != c){
      undobuffer[undobufferposition] = {
        action:"pset", 
        oldposition: temp, 
        oldvalue: imgcanvas[x + y * 16], 
        time: Game.time
      };
      undobufferposition = (undobufferposition + 1) % undobuffersize;
      imgcanvas[temp] = c;
    }
  }
}

function pget(x, y) {
  if (inbox(x, y, 0, 0, imgwidth, imgheight)) {
    return imgcanvas[x + y * 16];
  }
  return 0;
}

function setstaticcol(t, c) {
  palette[t] = arnepalette[c];

  palettehue[t] = arnehue[c];
  palettesaturation[t] = arnesaturation[c];
  palettelightness[t] = arnelightness[c];

  currenthue = palettehue[t];
  currentsaturation = palettesaturation[t];
  currentlightness = palettelightness[t];
}

function selectcolour(t){
  Music.playsound(sound_click, 0.2);
  currentcol = t;

  currenthue = palettehue[t];
  currentsaturation = palettesaturation[t];
  currentlightness = palettelightness[t];
  updatehueposition();
}

function update() {		
  //Prevent stray clicks on scene changes
  if (!Mouse.leftheld() && mouseheld) mouseheld = false;

  if (currentstate == "clear") {
    Gfx.fillbox(0, 0, 240, 150, backgroundcol);
    Text.display(Text.CENTER, Gfx.screenheightmid - 18, "ARE YOU SURE YOU WANT");
    Text.display(Text.CENTER, Gfx.screenheightmid - 9, "TO DELETE THIS SPRITE?");
  }else	if (currentstate == "todo") {
    Gfx.fillbox(0, 0, 240, 150, backgroundcol);
    Text.display(Text.CENTER, Gfx.screenheightmid - 18, "TO DO: IMPLEMENT THIS");
  }else	if (currentstate == "editor") {
    drawbackground();

    if(Input.justpressed(Key.R)){
      dobuttonaction("random", false);
    }

    if (inbox_w(Mouse.x, Mouse.y, canvasx, canvasy, canvaswidth, canvasheight)) {
      cursorx = Math.floor((Mouse.x - canvasx) / boxsize);
      cursory = Math.floor((Mouse.y - canvasy) / boxsize);
    }else {
      cursorx = -1;
    }

    if (Mouse.mousewheel > 0) {
      brushsize++;
      if (brushsize > 2) brushsize = 2;
    }else if (Mouse.mousewheel < 0) {
      brushsize--;
      if (brushsize < 0) brushsize = 0;
    }
    
    if(Input.justpressed(Key.Z)){
      undo();
    }

    if (cursorx > -1) {
      if (brushsize == 1) {
        Gfx.drawbox(canvasx + (cursorx-1) * boxsize, canvasy + (cursory-1) * boxsize, boxsize*3, boxsize*3, Col.GRAY);
      }else if (brushsize == 2) {
        Gfx.drawbox(canvasx + (cursorx-2) * boxsize, canvasy + (cursory-2) * boxsize, boxsize*5, boxsize*5, Col.GRAY);
      }
      Gfx.drawbox(canvasx + cursorx * boxsize, canvasy + cursory * boxsize, boxsize, boxsize, Col.WHITE);
      if (Mouse.leftheld() && !mouseheld) {
        if (brushsize == 0) {
          pset(cursorx, cursory, currentcol);	
        }else if (brushsize == 1) {
          for (j in -1 ... 2) for (i in -1 ... 2) pset(cursorx + i, cursory + j, currentcol);
        }else if (brushsize == 2) {
          for (j in -2 ... 3) for (i in -2 ... 3) pset(cursorx + i, cursory + j, currentcol);
        }
      }

      if (Mouse.rightheld() && !mouseheld) {
        if (brushsize == 0) {
          pset(cursorx, cursory, 0);	
        }else if (brushsize == 1) {
          for (j in -1 ... 2) for (i in -1 ... 2) pset(cursorx + i, cursory + j, 0);
        }else if (brushsize == 2) {
          for (j in -2 ... 3) for (i in -2 ... 3) pset(cursorx + i, cursory + j, 0);
        }
      }
    }

    if (inbox_w(Mouse.x, Mouse.y, 70, 134, 65, 12)) {
      for (i in 0 ... 4) {
        if (inbox_w(Mouse.x, Mouse.y, 70 + (i * 18), 134, 12, 12)) {
          if (Mouse.leftclick()) {
            if (i != currentcol) {
              selectcolour(i);
            }
          }

          if (i == currentcol) {
            Gfx.drawbox(70 + (i * 18), 136, 12, 12, Col.WHITE);
          }else{
            Gfx.drawbox(70 + (i * 18), 134, 12, 12, Col.WHITE);
          }
        }
      }
    }

    if(Input.justpressed(Key.ONE)){
      selectcolour(0);
    }else if(Input.justpressed(Key.TWO)){
      selectcolour(1);
    }else if(Input.justpressed(Key.THREE)){
      selectcolour(2);
    }else if(Input.justpressed(Key.FOUR)){
      selectcolour(3);
    }

    Gfx.drawimage(145, 6, "hue");
    Gfx.drawimage(145, 34, "lightness");
    Gfx.drawimage(145, 48, "preset");

    if (inbox_w(Mouse.x, Mouse.y, 145, 6, 90, 25)) {
      if (Mouse.leftheld() && !mouseheld) {
        currenthue = Convert.toint((Mouse.x - 145) * 360 / 90);
        currentsaturation = 1 - ((Mouse.y - 6) / 25);

        palettehue[currentcol] = Convert.toint(currenthue);
        palettesaturation[currentcol] = currentsaturation;

        updatehueposition();
        palette[currentcol] = Gfx.hsl(currenthue, currentsaturation, currentlightness);
      }
    }

    Gfx.fillbox(huex - 4, huey - 4, 8, 8, palette[currentcol]);
    Gfx.drawbox(huex - 4, huey - 4, 8, 8, Col.WHITE);

    if (inbox_w(Mouse.x, Mouse.y, 145, 34, 90, 10)) {
      if (Mouse.leftheld() && !mouseheld) {
        currentlightness = ((Mouse.x - 145) / 90);
        palettelightness[currentcol] = currentlightness;
        palette[currentcol] = Gfx.hsl(currenthue, currentsaturation, currentlightness);
      }
    }
    Gfx.drawbox(145 + Convert.toint(90 * currentlightness) - 2, 34, 5, 7, Col.WHITE);


    if (inbox_w(Mouse.x, Mouse.y, 145, 47, 90, 20)) {
      for (i in 0 ... 9) {
        if (inbox_w(Mouse.x, Mouse.y, 145 + 1 + i * 10, 47, 8, 8)) {
          Gfx.drawbox(145 + 1 + i * 10, 48, 8, 8, Col.WHITE);
          if (Mouse.leftclick()) {        
            Music.playsound(sound_click, 0.2);
            palette[currentcol] = arnepalette[i];
            palettehue[currentcol] = arnehue[i];
            palettesaturation[currentcol] = arnesaturation[i];
            palettelightness[currentcol] = arnelightness[i];

            currenthue = palettehue[currentcol];
            currentsaturation = palettesaturation[currentcol];
            currentlightness = palettelightness[currentcol];
            updatehueposition();
          }
        }else if (inbox_w(Mouse.x, Mouse.y, 145 + 1 + i * 10, 47 + 10, 8, 8)) {
          Gfx.drawbox(145 + 1 + i * 10, 48 + 10, 8, 8, Col.WHITE);
          if (Mouse.leftclick()) {
            Music.playsound(sound_click, 0.2);
            palette[currentcol] = arnepalette[i + 9];
            palettehue[currentcol] = arnehue[i + 9];
            palettesaturation[currentcol] = arnesaturation[i + 9];
            palettelightness[currentcol] = arnelightness[i + 9];

            currenthue = palettehue[currentcol];
            currentsaturation = palettesaturation[currentcol];
            currentlightness = palettelightness[currentcol];
            updatehueposition();
          }
        }
      }
    }
    
    if(Mouse.leftreleased()){
      checkpalettechanges();
    }

    Text.display(211, 71, "x");
  }
  drawgui();
}