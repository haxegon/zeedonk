Game.title("Sprite Editor");

var sound_select:Int = 84923106;
var sound_click:Int = 25271106;
var sound_random:Int = 44531703;
var sound_clear:Int = 27481303;
var sound_export:Int = 57854303;
var sound_import:Int = 41433503;

var imgwidth:Int = 16;
var imgheight:Int = 16;
var boxsize:Int;
var palette:Array<Int> = [0, 0, 0, 0];
var palettehue:Array<Int> = [0, 0, 0, 0];
var palettesaturation:Array<Float> = [0, 0, 0, 0];
var palettelightness:Array<Float> = [0, 0, 0, 0];
var button:Array<Dynamic> = [];
var arnepalette:Array<Int> = [
  Col.BLACK, Col.GRAY, Col.WHITE, Col.RED, Col.PINK, Col.DARKBROWN, 
  Col.BROWN, Col.ORANGE, Col.YELLOW, Col.DARKGREEN, Col.GREEN, Col.LIGHTGREEN,
  Col.NIGHTBLUE, Col.DARKBLUE, Col.BLUE, Col.LIGHTBLUE, Col.MAGENTA, Col.TRANSPARENT];

var arnehue:Array<Int> = [0, 0, 0, 355, 345, 34, 30, 28, 51, 192, 97, 75, 211, 200, 205, 199, 300, 0];
var arnesaturation:Array<Float> = [0, 0, 0, 0.67, 0.65, 0.26, 0.66, 0.82, 0.9, 0.25, 0.68, 0.68, 0.3, 1, 0.88, 0.66, 1, 0];
var arnelightness:Array<Float> = [0, 0.62, 1, 0.45, 0.66, 0.23, 0.39, 0.56, 0.69, 0.25, 0.32, 0.48, 0.15, 0.26, 0.57, 0.82, 0.5, 0];

var fontxoff:Int = 0;
var fontyoff:Int = -3;

var imgcanvas:Array<Int>;
var canvasx:Int;
var canvasy:Int;
var canvaswidth:Int;
var canvasheight:Int;

var cursorx:Int;
var cursory:Int;
var huex:Int;
var huey:Int;

var currentcol:Int;
var brushsize:Int;
var currenthue:Int;
var currentsaturation:Float;
var currentlightness:Float;

var backgroundcol:Int;
var backgroundhue:Int;
var buttoncol:Int;
var buttonhighlightcol:Int;

var currentstate:String;

var mouseheld:Bool = false;

function new() {
  Gfx.resizescreen(192, 120, 4);
  Text.setfont("pixel", 1);
  Gfx.clearscreeneachframe(false);
  Gfx.showfps = true;

  brushsize = 0;
  randompalette();
  currentstate = "editor";
  resize();

  Gfx.createimage("sprite", 16, 16);

  Gfx.drawtoimage("sprite");
  Gfx.fillbox(0, 0, 16, 16, Col.BLACK);
  Gfx.drawtoscreen();

  Gfx.createimage("hue", 72, 20);
  Gfx.drawtoimage("hue");
  Gfx.fillbox(0, 0, 72, 20, Col.BLACK);
  for (j in 1 ... 19) {
    for (i in 1 ... 71) {
      Gfx.fillbox(i, j, 1, 1, Gfx.HSL(i * 360 / 72, 1 - ((j*j)/400), 0.5));
    }
  }

  Gfx.createimage("lightness", 72, 8);
  Gfx.drawtoimage("lightness");
  Gfx.fillbox(0, 0, 72, 8, Col.BLACK);
  for (i in 1 ... 71) {
    Gfx.fillbox(i, 1, 1, 6, Gfx.RGB(Convert.toint(i * 255 / 72), Convert.toint(i * 255 / 72), Convert.toint(i * 255 / 72)));
  }

  Gfx.createimage("preset", 72, 16);
  Gfx.drawtoimage("preset");
  for (i in 0 ... 9) {
    Gfx.fillbox(1 + i * 8, 0, 7, 7, Col.BLACK);
    Gfx.fillbox(1 + i * 8, 8, 7, 7, Col.BLACK);
    Gfx.fillbox(2 + i * 8, 1, 5, 5, arnepalette[i]);
    Gfx.fillbox(2 + i * 8, 9, 5, 5, arnepalette[i + 9]);
  }
  for (j in 0 ... 5) for (i in 0 ... 5) Gfx.fillbox(66 + i, 9 + j, 1, 1, (i + j) % 2 == 0?Col.GRAY:Col.BLACK);
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
    x: Gfx.screenwidthmid - 40,
    y: Gfx.screenheightmid+5,
    width: 30,
    text: "YES",
    action: "clear_yes",
    state: "clear"
  });

  button.push( {
    x: Gfx.screenwidthmid+10,
    y: Gfx.screenheightmid+5,
    width: 30,
    text: "NO",
    action: "clear_no",
    state: "clear"
  });

  button.push( {
    x: Gfx.screenwidthmid-30,
    y: Gfx.screenheightmid,
    width: 60,
    text: "BOO! BOOO!",
    action: "back",
    state: "todo"
  });

  button.push( {
    x: 11,
    y: 108,
    width: 30,
    text: "RANDOM",
    action: "random",
    state: "editor"
  });

  button.push( {
    x: 116+4,
    y: 108,
    width: 30,
    text: "IMPORT", 
    action: "import",
    state: "editor"
  });

  button.push( {
    x: 116 + 40,
    y: 108,
    width: 30,
    text: "EXPORT", 
    action: "export",
    state: "editor" 
  }); 

  button.push( {
    x: 120,
    y: 56,
    width: 30,
    text: "NEW", 
    action: "new",
    state: "editor"
  });

  button.push( {
    x: 156,
    y: 56,
    width: 12,
    text: "16", 
    action: "resizex",
    state: "editor" 
  });

  button.push( {
    x: 174,
    y: 56,
    width: 12,
    text: "16", 
    action: "resizey",
    state: "editor" 
  });
}

var BASE128:String = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ÄäÀàÁáÂâÃãÅåœÇçÐðÈèÉéÊêËëÌìÍíÎîÏïÑñÖöÒòÓóÔôÕõØøßŠšÞþÜüÙùÚúÛûÝýŸÿžŽ";

function convertobinary(t:Int, len:Int):String {
  var endstring:String = "";
  var currentbit:Int;

  while (t > 0) {
    currentbit = t % 2;
    endstring = Convert.tostring(currentbit) + endstring;
    t = t - currentbit;
    t = Convert.toint(t / 2);
  }

  while (endstring.length < len) endstring = "0" + endstring;
  return ""+endstring;
}

function convertbase128tobinary(t:String):String {
  var returnstr:String = "";
  var currentval:Int = 0;

  for (i in 0 ... t.length) {
    currentval = BASE128.indexOf(t.substr(i, 1));
    returnstr = returnstr+""+convertobinary(currentval, 7);
  }
  return returnstr;
}

function convertbinarytobase128(t:String):String {
  var endstring:String = "";
  var currentval:Int = 0;

  while (t.length % 7 != 0) t += "0";

  var i:Int = 0;
  while (i < t.length) {
    if (t.substr(i, 1) == "1") {
      currentval += Convert.toint(Math.pow(2, 6 - (i % 7)));
    }
    i++;
    if (i % 7 == 0) {
      endstring += BASE128.substr(currentval, 1);
      currentval = 0;
    }
  }

  return endstring;
}

function convertbinarytoint(binarystring:String):Int {
  var returnval:Int = 0;
  for (i in -binarystring.length ... 0) {
    if (binarystring.substr( -i - 1, 1) == "1"){
      returnval += Convert.toint(Math.pow(2, binarystring.length + i));
    }
  }
  return returnval;
}

function loadimagestring(inputstring:String) {
  if(inputstring == "" || inputstring == null) return;
  var currentchunk:String = "";
  function getnextchunk(size:Int) {
    currentchunk = inputstring.substr(0, size);
    inputstring = inputstring.substr(size);
  }

  inputstring = convertbase128tobinary(inputstring);

  //Get image width:
  getnextchunk(4);
  imgwidth = convertbinarytoint(currentchunk) + 1;

  //Get image height:
  getnextchunk(4);
  imgheight = convertbinarytoint(currentchunk) + 1;
  resize();

  //Load the palette
  var r:Int; var g:Int; var b:Int;
  for (i in 0 ... 4) {
    getnextchunk(8);
    r = convertbinarytoint(currentchunk);
    getnextchunk(8);
    g = convertbinarytoint(currentchunk);
    getnextchunk(8);
    b = convertbinarytoint(currentchunk);
    palette[i] = Gfx.RGB(r, g, b);
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
}

function saveimagestring() {
  var outputstring:String = "";
  //Format: Width (0-15), H (0-15), Colours 1 to 4, raw image data
  outputstring += convertobinary(imgwidth - 1, 4);
  outputstring += convertobinary(imgheight - 1, 4);

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

  var convertedstring:String = convertbinarytobase128(outputstring);
  trace(convertedstring);
  Game.prompt("Exported image string:",convertedstring);
}

function updatehueposition() {
  huex = Convert.toint(116 + (currenthue * 72) / 360);
  huey = Convert.toint(5 + ((1-currentsaturation) * 20));
  setbackgroundcolour();
}

function setbackgroundcolour(){
  backgroundhue = (palettehue[0] + 180) % 360;
  backgroundcol = Gfx.HSL(backgroundhue, 0.3, 0.15);

  buttoncol = Gfx.HSL(backgroundhue, 0.5, 0.6);
  buttonhighlightcol = Gfx.HSL(backgroundhue, 0.5, 0.8);
  Game.background(backgroundcol);
}

function randompalette(){
  var randhue:Int = Random.int(0, 360);
  var randsaturation:Float = 0.3;
  var randlightness:Float = 0.2;
  palette[0] = Gfx.HSL(randhue, randsaturation, randlightness);

  palettehue[0] = randhue;
  palettesaturation[0] = randsaturation;
  palettelightness[0] = randlightness;
  setbackgroundcolour();

  randhue = (randhue + Random.int(20, 90)) % 360;
  randsaturation = 0.5;
  randlightness = 0.4;
  palette[1] = Gfx.HSL(randhue, randsaturation, randlightness);
  palettehue[1] = randhue;
  palettesaturation[1] = randsaturation;
  palettelightness[1] = randlightness;

  randhue = (randhue + Random.int(20, 90)) % 360;
  randsaturation = 0.5;
  randlightness = 0.5;
  palette[2] = Gfx.HSL(randhue, randsaturation, randlightness);
  palettehue[2] = randhue;
  palettesaturation[2] = randsaturation;
  palettelightness[2] = randlightness;

  randhue = (randhue + Random.int(20, 90)) % 360;
  randsaturation = 0.5;
  randlightness = 0.7;
  palette[3] = Gfx.HSL(randhue, randsaturation, randlightness);
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
    if (imgheight >= 10) { boxsize = 6;
    }else if (imgheight >= 8) {	boxsize = 10;
    }else if (imgheight >= 6) {	boxsize = 12;
    }else {	boxsize = 16;	}
  }else {
    if (imgwidth >= 10) { boxsize = 6;
    }else if (imgwidth >= 8) {	boxsize = 10;
    }else if (imgwidth >= 6) {	boxsize = 12;
    }else {	boxsize = 16;	}
  }

  canvaswidth = boxsize * imgwidth;
  canvasheight = boxsize * imgheight;
  canvasx = Convert.toint((120 - canvaswidth) / 2);
  canvasy = Convert.toint((120 - canvasheight) / 2) - 6;

  for (i in 0 ... button.length) {
    if (button[i].action == "resizex") {
      button[i].text = Convert.tostring(imgwidth);
    }else if (button[i].action == "resizey") {
      button[i].text = Convert.tostring(imgheight);
    }
  }
}

function drawbackground() {
  Gfx.fillbox(0, 0, 192, 120, backgroundcol);

  Gfx.fillbox(canvasx - 1, canvasy - 1, canvaswidth + 2, canvasheight + 2, Col.LIGHTBLUE);
  Gfx.fillbox(canvasx, canvasy, canvaswidth, canvasheight, Col.BLACK);

  for (j in 0 ... imgheight) {
    for (i in 0 ... imgwidth) {
      var pixel:Int = palette[imgcanvas[i + j * 16]];
      if (pixel == Col.TRANSPARENT) {
        Gfx.fillbox(canvasx + i * boxsize, canvasy + j * boxsize, boxsize, boxsize, Gfx.RGB(64, 64, 64));
        Gfx.fillbox(canvasx + i * boxsize, canvasy + j * boxsize, boxsize/2, boxsize/2, Gfx.RGB(32, 32, 32));
        Gfx.fillbox(canvasx + i * boxsize + boxsize/2, canvasy + j * boxsize  + boxsize/2, boxsize/2, boxsize/2, Gfx.RGB(32, 32, 32));
      }else{
        Gfx.fillbox(canvasx + i * boxsize, canvasy + j * boxsize, boxsize, boxsize, palette[imgcanvas[i + j * 16]]);
      }
    }
  }

  for (i in 0 ... 4) {
    if (currentcol == i) {
      if (palette[i] == Col.TRANSPARENT) {
        Gfx.fillbox(108 + (14 * i) - 52, 102 + 6, 10, 10, Gfx.RGB(64, 64, 64));
        Gfx.fillbox(108 + (14 * i) - 52, 102 + 6, 5, 5, Gfx.RGB(32, 32, 32));
        Gfx.fillbox(108 + (14 * i) - 52 + 5, 102 + 6 + 5, 5, 5, Gfx.RGB(32, 32, 32));
      }else{
        Gfx.fillbox(108 + (14 * i) - 52, 102 + 6, 10, 10, palette[i]);
      }
    }else {
      Gfx.fillbox(108 + (14 * i) - 52, 102 + 6, 10, 10, Col.BLACK);
      if (palette[i] == Col.TRANSPARENT) {
        Gfx.fillbox(108 + (14 * i) - 52, 102 + 4, 10, 10, Gfx.RGB(64, 64, 64));
        Gfx.fillbox(108 + (14 * i) - 52, 102 + 4, 5, 5, Gfx.RGB(32, 32, 32));
        Gfx.fillbox(108 + (14 * i) - 52 + 5, 102 + 4 + 5, 5, 5, Gfx.RGB(32, 32, 32));
      }else{
        Gfx.fillbox(108 + (14 * i) - 52, 102 + 4, 10, 10, palette[i]);
      }
    }
  }
}

function dobuttonaction(t:String, rclick:Bool) {
  if (t == "back") {
    Music.playsound(sound_select, 0.5);
    currentstate = "editor";
    mouseheld = true;
  }else if (t == "clear_yes") {
    Music.playsound(sound_clear, 0.8);
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
      if (inbox_w(Mouse.x, Mouse.y, button[i].x, button[i].y, button[i].width, 7)) {
        Gfx.fillbox(button[i].x, button[i].y, button[i].width, 7, buttonhighlightcol);
        button[i].mouseover = true;
      }else{
        Gfx.fillbox(button[i].x, button[i].y, button[i].width, 7, buttoncol);
      }
      if (button[i].text != "") {
        Text.display(button[i].x + fontxoff + ((button[i].width-Text.len(button[i].text))/2), button[i].y + fontyoff, button[i].text, Col.WHITE);
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

function inbox_w(x:Float, y:Float, x1:Float, y1:Float, w:Float, h:Float):Bool {
  if (x >= x1 && y >= y1) {
    if (x < x1 + w && y < y1 + h) {
      return true;
    }
  }
  return false;
}


function inbox(x:Float, y:Float, x1:Float, y1:Float, x2:Float, y2:Float):Bool {
  if (x >= x1 && y >= y1) {
    if (x < x2 && y < y2) {
      return true;
    }
  }
  return false;
}

function pset(x:Int, y:Int, c:Int) {
  if (inbox(x, y, 0, 0, imgwidth, imgheight)) {
    imgcanvas[x + y * 16] = c;
  }
}

function pget(x:Int, y:Int):Int {
  if (inbox(x, y, 0, 0, imgwidth, imgheight)) {
    return imgcanvas[x + y * 16];
  }
  return 0;
}

function setstaticcol(t:Int, c:Int) {
  palette[t] = arnepalette[c];

  palettehue[t] = arnehue[c];
  palettesaturation[t] = arnesaturation[c];
  palettelightness[t] = arnelightness[c];

  currenthue = palettehue[t];
  currentsaturation = palettesaturation[t];
  currentlightness = palettelightness[t];
}

function selectcolour(t:Int){
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
    Gfx.fillbox(0, 0, 192, 120, backgroundcol);
    Text.display(Text.CENTER, Gfx.screenheightmid - 14, "ARE YOU SURE YOU WANT");
    Text.display(Text.CENTER, Gfx.screenheightmid - 7, "TO DELETE THIS SPRITE?");
  }else	if (currentstate == "todo") {
    Gfx.fillbox(0, 0, 192, 120, backgroundcol);
    Text.display(Text.CENTER, Gfx.screenheightmid - 14, "TO DO: IMPLEMENT THIS");
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

    if (Mouse.mousewheel > 0 || Input.justpressed(Key.Z)) {
      brushsize++;
      if (brushsize > 2) brushsize = 2;
    }else if (Mouse.mousewheel < 0 || Input.justpressed(Key.X)) {
      brushsize--;
      if (brushsize < 0) brushsize = 0;
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

    if (inbox_w(Mouse.x, Mouse.y, 108 - 52, 102 + 4, 52, 10)) {
      for (i in 0 ... 4) {
        if (inbox_w(Mouse.x, Mouse.y, 108 - 52 + (i * 14), 102 + 4, 10, 10)) {
          if (Mouse.leftclick()) {
            if (i != currentcol) {
              selectcolour(i);
            }
          }

          if (i == currentcol) {
            Gfx.drawbox(108 - 52 + (i * 14), 102 + 6, 10, 10, Col.WHITE);
          }else{
            Gfx.drawbox(108 - 52 + (i * 14), 102 + 4, 10, 10, Col.WHITE);
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

    Gfx.drawimage(116, 5, "hue");
    Gfx.drawimage(116, 27, "lightness");
    Gfx.drawimage(116, 38, "preset");

    if (inbox_w(Mouse.x, Mouse.y, 116, 5, 72, 20)) {
      if (Mouse.leftheld() && !mouseheld) {
        currenthue = Convert.toint((Mouse.x - 116) * 360 / 72);
        currentsaturation = 1 - ((Mouse.y - 5) / 20);

        palettehue[currentcol] = Convert.toint(currenthue);
        palettesaturation[currentcol] = currentsaturation;

        updatehueposition();
        palette[currentcol] = Gfx.HSL(currenthue, currentsaturation, currentlightness);
      }
    }

    Gfx.fillbox(huex - 4, huey - 4, 8, 8, palette[currentcol]);
    Gfx.drawbox(huex - 4, huey - 4, 8, 8, Col.WHITE);

    if (inbox_w(Mouse.x, Mouse.y, 116, 27, 72, 8)) {
      if (Mouse.leftheld() && !mouseheld) {
        currentlightness = ((Mouse.x - 116) / 72);
        palettelightness[currentcol] = currentlightness;
        palette[currentcol] = Gfx.HSL(currenthue, currentsaturation, currentlightness);
      }
    }
    Gfx.drawbox(116 + Convert.toint(72 * currentlightness) - 2, 27, 4, 7, Col.WHITE);


    if (inbox_w(Mouse.x, Mouse.y, 116, 38, 72, 16)) {
      for (i in 0 ... 9) {
        if (inbox_w(Mouse.x, Mouse.y, 116 + 1 + i * 8, 38, 7, 7)) {
          Gfx.drawbox(116 + 1 + i * 8, 38, 7, 6, Col.WHITE);
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
        }else if (inbox_w(Mouse.x, Mouse.y, 116 + 1 + i * 8, 38 + 8, 7, 7)) {
          Gfx.drawbox(116 + 1 + i * 8, 38 + 8, 7, 6, Col.WHITE);
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

    Text.display(169 + fontxoff, 56 + fontyoff, "x");
  }
  drawgui();
}