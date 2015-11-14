var tw = 10;
var th = 10;
var gw = 9;
var gh = 10;
var ox = 72;
var oy = 16;

var contents = [];
var hbars = [];
var vbars = [];

var counter = 10;
var cursorx = 5;
var cursory = 5;

var movePhase = 0;
var anytriples = true;

var cols = [0xebe840,0x0091cb,0xfcaf17,0xee4594,0x34ae00,0,0,0,0,0];

Gfx.loadimagestring("cursor_left", "QSaaapZZZZaZaaqaaaaaaaaaaaaaaaeabaa2dS");
Gfx.loadimagestring("cursor_right", "8SaaapZZZShaibaaaaaaaaaaibaS");
Gfx.loadimagestring("outline00", "ECaaapZZZSaaaaaaaaaaaaaaaaaaae");
Gfx.loadimagestring("outline01", "ECaaapZZZSaaaaaaaaaaaaaaaaabZW");
Gfx.loadimagestring("outline11", "ECaaapZZZSaqa6bacaeaiaqa6badZW");
Gfx.loadimagestring("tile0", "AyaaahJVD5ZRVZZ1ZZZZ1ZZ5JZ6", Col.BLACK, cols[0]);
Gfx.loadimagestring("tile1", "Ayaaaa5d3ZZZ5XZRLZYpJYZVZZ6", Col.BLACK, cols[1]);
Gfx.loadimagestring("tile2", "AyaaahNuaJZY5QYXRV5IXXJTZZ6", Col.BLACK, cols[2]);
Gfx.loadimagestring("tile3", "AyaaahMcMZZZZZZZPxEJZZZZZZ6", Col.BLACK, cols[3]);
Gfx.loadimagestring("tile4", "AyaaaaLp65ZYZRYJX5UZPZJXZZ6", Col.BLACK, cols[4]);
Gfx.loadimagestring("tile5", "ArgvCt8ztnY$hSaaahZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZY");
Gfx.loadimagestring("tile6", "ArgvCt8ztnY$hSaaahZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZY");
Gfx.loadimagestring("tile7", "ArgvCt8ztnY$hSaaahZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZY");
Gfx.loadimagestring("tile8", "ArgvCt8ztnY$hSaaahZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZY");
Gfx.loadimagestring("tile9", "ArgvCt8ztnY$hSaaahZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZY");

Gfx.loadimagestring("gridbit", "ISaaaeVoNJZWamamamamamamamamamapZS", Col.BLACK, 0x727272);

Gfx.createimage("buffer", 240, 150);

function drawScreen(){
  Gfx.drawtoimage("buffer");
  Gfx.clearscreen(Col.BLACK);
  for(i in 0 ... gw){
    for(j in 0 ... gh){
      Gfx.drawimage(ox+i*(tw+1),oy+j*(th+1), "gridbit");
    }
  }
  
  for (i in 0 ... gw){
    for (j in 0 ... gh){
      var t = contents[i][j];
      if (t < 0){
        continue;
      }
      var n = "tile" + t;
      Gfx.drawimage(ox+1+i*(tw+1),oy+1+j*(th+1),n);
      if (i<gw-1){
        var t2 = contents[i+1][j];
        if ((t%5)==(t2%5)){
          var m = t>t2?t:t2;
          Gfx.fillbox(ox+1+i*(tw+1)+tw,oy+1+j*(th+1),1,th,cols[m]);
        }	
      }
      if (j<gh-1){
        var t2 = contents[i][j+1];
        if ((t%5)==(t2%5)){				
          var m = t>t2?t:t2;
          Gfx.fillbox(ox+1+i*(tw+1),oy+1+j*(th+1)+tw,tw,1,cols[m]);
        }	
      }
    }
  }	
  Gfx.drawtoscreen();
}

function restart(){
  counter = 10;
  cursorx = 5;
  cursory = 5;
  
  contents = [];
  hbars = [];
  vbars = [];
  
  movePhase = 0;
  anytriples = true;
  
  for (i in 0 ... gw){
    var r = [];
    for (j in 0 ... gh){
      r.push(Random.int(0,3));
    }
    contents.push(r);
  }

  while(anytriples){
    anytriples = false;
    for (i in 0 ... gw){
      for (j in 0 ... (gh-2)){
        if (contents[i][j] == contents[i][j+1] && contents[i][j] == contents[i][j+2]){
          contents[i][j+1] = ((contents[i][j+1]+1)%4);
          anytriples=true;
        }
      }
    }

    for (i in 0 ... gw-2){
      for (j in 0 ... gh){
        if (contents[i][j] == contents[i+1][j] && contents[i][j] == contents[i+2][j]){
          contents[i+1][j] = ((contents[i+1][j]+1)%4);
          anytriples=true;
        }
      }
    }
  }
  
  drawScreen();
}

restart();

function doSwap(){
  var t = contents[cursorx][cursory];
  contents[cursorx][cursory]=contents[cursorx+1][cursory];
  contents[cursorx+1][cursory]=t;
  if (detectMatch3()){
    movePhase = 1;
    moveTimer = 0;
  } else {
    counter--;
  }
  drawScreen();
}

function detectMatch3(){
  var anytriples = false;

  for (i in 0...gw){
    for (j in 0...(gh-2)){
      var t = contents[i][j];
      if (t < 0){ 
        continue;
      }
      t= t % 5;

      if (t==(contents[i][j+1]%5) && t==(contents[i][j+2]%5)){
        anytriples=true;
        for (k in j...gh){
          var ck  = contents[i][k];
          if (ck>=0 && (ck%5==t)){
            contents[i][k]=t+10;
          } else {
            break;
          }
        }
      }
    }
  }


  for (i in 0...(gw-2)){
    for (j in 0...(gh)){
      var t = contents[i][j];
      if (t<0){ 
        continue;
      }
      t=t%5;

      if (t==(contents[i+1][j]%5) && t==(contents[i+2][j]%5)){
        anytriples=true;
        for (k in i...gw){
          var ck  = contents[k][j];
          if (ck>=0 && (ck%5==t)){
            contents[k][j] = -1;
          } else {
            break;
          }
        }
      }
    }
  }

  for (i in 0 ... gw){
    for (j in 0 ... gh){
      if (contents[i][j] >= 10){
        contents[i][j] = -1;
      }
    }
  }
  
  return anytriples;
}

function tryDrop(){
  var anyDropped = false;
  for (i in 0 ... gw){
    for (j in 1 ... gh){
      var y = gh-j;
      if (contents[i][y] == -1 && contents[i][y-1] >= 0){
        anyDropped = true;
        contents[i][y]=contents[i][y-1];
        contents[i][y-1] = -1;
      }
    }
  }
  for (i in 0...gw){
    if (contents[i][0] == -1){
      contents[i][0] = 5 + Random.int(0,3);
      anyDropped=true;
    }
  }
  return anyDropped;
}

function anyHoles(){
  for (i in 0...(gw)){
    for (j in 0...(gh)){
      if (contents[i][j]==-1){
        return true;
      }
    }
  }
  return false;
}

function allBlack(){
  for (i in 0...gw){
    for (j in 0...gh){
      if (contents[i][j]<=4){
        return false;
      }
    }
  }
  return true;
}

var title = true;
var moveTimer = 0;

function update() {
  if (title){
    Text.display(Text.CENTER,5+32,"anesthesia");
    Text.display(Text.CENTER,5+20+32,"press x to start");
    Text.display(Text.CENTER,5+40+32,"arrow keys to move");
    Text.display(Text.CENTER,5+60+32,"r to restart");
    if (Input.justpressed(Key.X)){
      title=false;
    }
    return;
  }
  if (movePhase==2){
    Gfx.fillbox(0,0,Gfx.screenwidth,Gfx.screenheight,0x000000);
    Text.display(Text.CENTER,Text.CENTER,"the end",0xffffff);
    return;
  }
  if (Input.delaypressed(Key.UP,5)){
    if(cursory>0){
      cursory--;
    }
  }
  if (Input.delaypressed(Key.DOWN,5)){
    if (cursory<gh-1){
      cursory++;
    }
  }
  if (Input.delaypressed(Key.LEFT,5)){
    if(cursorx>0){
      cursorx--;
    }
  }
  if (Input.delaypressed(Key.RIGHT,5)){
    if (cursorx<gw-2){
      cursorx++;
    }		
  }

  if (movePhase == 1){  
    moveTimer++;
    if (moveTimer == 5){
      moveTimer = 0;
      if (tryDrop()){
      } else if (detectMatch3()){		

      } else {	
        movePhase=0;	  				
        moveTimer=0;
        if (allBlack()){
          movePhase=2;
        }
      }
      drawScreen();
    }
  } else {
    moveTimer = 0;


    if (Input.justpressed(Key.X) && counter > 0){
      doSwap();	
    }

    if (Input.justpressed(Key.R)){
      restart();
    }
  }

  Gfx.drawimage(0,0,"buffer");
  Gfx.drawimage(ox + cursorx*(tw+1), oy + cursory*(th+1),"cursor_left");
  Gfx.drawimage(ox + cursorx*(tw+1) + 14, oy + cursory*(th+1),"cursor_right");
  Text.display(0,0,""+counter,0xffffff);
}
