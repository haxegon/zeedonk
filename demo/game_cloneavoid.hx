
  var titlemusic="qeb4aJEvéaé4aoiYbcMVaUgi2a2fbfbfbfbf6bacgik5geéacbgbXa4f4a4hqobnbjbgbobnbjbgbobnbjbebebjbnbo17babcdefghijklponm16h2a2fbfbfbfbf6bacgik5geZae3båa4f4a4hqnblbjbebnblbjbebnblbibebnblbibe17babcdefghijklmnop16h2a2fbfbfbfbf6bacgik5geéacbgbXa4f4a4hqobnbjbgbobnbjbgbobnbjbebebjbnbo17babcdefghijklponm16h2a2fbfbfbfbf6bacgik5geZae3båa4f4a4hqnblbjbebnblbjbebnblbibebnblbibe17babcdefghijklmnop16h2a2fbfbfbfbf6bacgik5geéacbgbXa4f4a4hGlbjbnboblbjbnboblbjbjbgblbnblbnbjbgbjbgbebcbebcblbjbnboblbnblbj33babcdcdefefghijklijklmnopopabghmn32h2a2fbfbfbfbf6bacgik5geZae3båa4f4a4hGhbgbhbgbebcbebcbe3be3bebcbhbgbéa2béa2béaéa2bāaéaāaéaāaéaāaéaāa32bcdefghijklmnopababcdegfhijklmnop32h2a2fbfbfbfbf6bacgik5geéacbgbXa4f4a4hGlbjbnboblbjbnboblbjbjbgblbnblbnbjbgbjbgbebcbebcblbjbnboblbnblbj33babcdcdefefghijklijklmnopopabghmn32h2a2fbfbfbfbf6bacgik5geZae3båa4f4a4hGhbgbhbgbebcbebcbe3be3bebcbhbgbéa2béa2béaéa2bāaéaāaéaāaéaāaéaāa32bcdefghijklmnopababcdegfhijklmnop32h";

var player = {
  x:Gfx.screenwidthmid,
  y:Gfx.screenheightmid,
  vx:0,
  vy:0,
  dir:0
};

enemyShips =  [];

var level=5;
var turnspeed=0.1;
var acceleration=0.0625;
var maxspeed=2.5;

var cx=0;
var cy=0;
var cdx=0;
var cdy=0;

var score=0;
var scoreStr="0";

Music.musicvol=0.5;
Music.playmusic(titlemusic);
//  Gfx.showfps=true;
Game.background=0x333333;
Game.foreground=Col.GREY;
Game.title="CLONE AVOID";
Game.homepage="http://www.increpare.com";

function newLevel(){
  level+=2;
  px=Gfx.screenwidthmid;
  py=Gfx.screenheightmid;
  spawnEnemyShips();
}

function spawnEnemyShip(){
  score++;
  scoreStr=Convert.tostring(score);
    var a = Random.float(0,6.283);
    var dx = 50*(Math.sin(a)+Math.cos(a));
    var dy = 50*(Math.cos(a)-Math.sin(a));
    var enemy = {
      x:Gfx.screenwidthmid+dx,
      y:Gfx.screenheightmid+dy,
      vx:0,
      vy:0,
      dir:Random.float(0,6.283)
    };
    enemyShips.push(enemy);
}

function repositionCollectable(){
    var a = Random.float(0,6.283);
    var dx = 50*(Math.sin(a)+Math.cos(a));
    var dy = 50*(Math.cos(a)-Math.sin(a));
    cx=player.x+dx;
    cy=player.y+dy;  
    a=Random.float(0,6.283);
    cdx = 0.1*(Math.sin(a)+Math.cos(a));
    cdy = 0.1*(Math.cos(a)-Math.sin(a));
}

function spawnEnemyShips(){
  for (i in 0...level){
    var a = i*6.283/level;
    var dx = 50*(Math.sin(a)+Math.cos(a));
    var dy = 50*(Math.cos(a)-Math.sin(a));
    var enemy = {
      x:Gfx.screenwidthmid+dx,
      y:Gfx.screenheightmid+dy,
      vx:0,
      vy:0,
      dir:Random.float(0,6.283)
    };
    enemyShips.push(enemy);
  }
}

function tickShip(e, col){
  var dx = Math.sin(e.dir)+Math.cos(e.dir);
  var dy = Math.cos(e.dir)-Math.sin(e.dir);
  var cx=e.x;
  var cy=e.y;
  cx += e.vx;
  cy += e.vy;

  if (cx<0) {
    cx+=Gfx.screenwidth;
  }    
  if (cx>=Gfx.screenwidth){
    cx-=Gfx.screenwidth;
  }

  if (cy<0) {
    cy+=Gfx.screenheight;
  }    
  if (cy>=Gfx.screenheight){
    cy-=Gfx.screenheight;
  }
    
  e.x=cx;
  e.y=cy;
  var d = e.dir;
  var p1x = cx+(dx)*6.25;
  var p2x = cx+(Math.sin(e.dir-2)+Math.cos(e.dir-2))*2.5;
  var p3x = cx+(Math.sin(e.dir+2)+Math.cos(e.dir+2))*2.5;
  var p1y = cy+(dy)*6.25;
  var p2y = cy+(Math.cos(e.dir-2)-Math.sin(e.dir-2))*2.5;
  var p3y = cy+(Math.cos(e.dir+2)-Math.sin(e.dir+2))*2.5;
  Gfx.drawtri(p1x,p1y,p2x,p2y,p3x,p3y,col);
}

function accelerate(e,a){  
  var dx = Math.sin(e.dir)+Math.cos(e.dir);
  var dy = Math.cos(e.dir)-Math.sin(e.dir);
  e.vx +=dx*a;
  e.vy +=dy*a;
  var mag = Math.sqrt(e.vx*e.vx+e.vy*e.vy);
  if (mag>maxspeed){
    e.vx*=maxspeed/mag;
    e.vy*=maxspeed/mag;
  }
}

var highScoreStr=Game.load("highScore");
var highScore = 0;
var title=true;

if (highScoreStr!=null){
  highScore=Convert.toint(highScoreStr);
} else {
  highScoreStr="0";
}
  
  var titleCol=Col.WHITE;
function drawTitle(){
  if (Game.time%30<15){
    titleCol=Col.WHITE;
  } else {
    titleCol=Col.GREY;
  }
    
  Text.changesize(2.5);
  Text.display(Text.CENTER,50,"CLONE AVOID",titleCol);
  Text.changesize(1);
  Text.display(Text.CENTER,125,"press SPACE to start");
  Text.display(3,4,"HIGH SCORE : "+highScoreStr);
  if (Input.justpressed(Key.SPACE))
  {    
    Music.playsound(80298709);
    trace("boop");
      restart();
      title=false;
    Music.stopmusic();
  }
}

function restart(){
  if (score>highScore){
    highScore=score;
    highScoreStr=Convert.tostring(score);
    Game.save("highScore",highScoreStr);
  }
  title=true;
  Music.playmusic(titlemusic);
  level=5;
  score=0;
  scoreStr="0";
  enemyShips=[];
  player = {
    x:Gfx.screenwidthmid,
    y:Gfx.screenheightmid,
    vx:0,
    vy:0,
    dir:0
  };
  spawnEnemyShips();
}

var dead=false;
function update() {
  if (title){
    drawTitle();
    return;
  }
  if (dead) return;
  
  if (Input.pressed(Key.LEFT)){
    player.dir+=turnspeed;
    for (e in enemyShips){
      e.dir+=turnspeed;
    }
    
  }
  if (Input.pressed(Key.RIGHT)){
    player.dir-=turnspeed;
    for (e in enemyShips){
      e.dir-=turnspeed;
    }
  }
  if (Input.pressed(Key.UP)){
    accelerate(player,acceleration);
    for (e in enemyShips){
      accelerate(e,acceleration);
    }
  }
  
  if (Input.pressed(Key.DOWN)){
    accelerate(player,-acceleration);
    for (e in enemyShips){
      accelerate(e,-acceleration);
    }
  }
  
  tickShip(player,Col.WHITE);
  for (e in enemyShips){
    tickShip(e,Col.RED);
  }

  for (shipb in enemyShips){
    if (Math.abs(player.x-shipb.x)<4 && Math.abs(player.y-shipb.y)<4){
      restart();
      Music.playsound(96784902);
      return;
    }            
  }   
  
  cx+=cdx;
  cy+=cdy;

  if (cx<0) {
    cx+=Gfx.screenwidth;
  }    
  if (cx>=Gfx.screenwidth){
    cx-=Gfx.screenwidth;
  }

  if (cy<0) {
    cy+=Gfx.screenheight;
  }    
  if (cy>=Gfx.screenheight){
    cy-=Gfx.screenheight;
  }
    
    
    if (Math.abs(player.x-cx)<4 && Math.abs(player.y-cy)<4){
      Music.playsound(29570503);
      spawnEnemyShip();
      spawnEnemyShip();
      repositionCollectable();
    }            

  Gfx.fillbox(cx-1,cy-1,4,4,Col.YELLOW);
  Text.display(Text.CENTER,0,scoreStr);
}