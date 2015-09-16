Game.title="Shooter Example";

var deathsequence = 0;
var gamestate = "title";
var playerdestroyed;
var screenflash = 0;
var score = 0;
  
//Entity functions
var entity;
var numentity;

var player;

function getfreeentityindex(){
  //Finds the first entity in the array that's not being used.
  var i = 0;
  var z = -1;
  if(numentity == 0) {
    z = 0; 
  }else {
    while (i < numentity) {
      if (!entity[i].active) {
        z = i;
        break;
      }
      i++;
    }
    if (z == -1) z = numentity;
	}
  
  if(z >= numentity){
    if(z > entity.length - 1){
      entity.push({});
    }  
    numentity++;
  }
   
  return z;
}

function setcollisionrect(t, x, y, w, h){
  entity[t].cx = x;
  entity[t].cy = y;
  entity[t].cw = w;
  entity[t].ch = h;
}

function checkcollisionpoint(x, y, t) {
  if(inbox(x, y, entity[t].x + entity[t].cx, entity[t].y + entity[t].cy,
           entity[t].x + entity[t].cw, entity[t].y + entity[t].ch)){
    return true;
  }
  return false;
}

function checkcollision(a, b){
  if(entity[a].active && entity[b].active){
    if(Math.abs(entity[a].x - entity[b].x) < 20){
   		if(Math.abs(entity[a].y - entity[b].y) < 20){
        if(checkcollisionpoint(entity[a].x + entity[a].cx, 
                               entity[a].y + entity[a].cy, b)) return true;
        if(checkcollisionpoint(entity[a].x + entity[a].cx, 
                               entity[a].y + entity[a].ch, b)) return true;
        if(checkcollisionpoint(entity[a].x + entity[a].cw, 
                               entity[a].y + entity[a].cy, b)) return true;
        if(checkcollisionpoint(entity[a].x + entity[a].cw, 
                               entity[a].y + entity[a].ch, b)) return true;
      }
    }
  }
  return false;
}

function getplayer() {
  for(i in 0 ... numentity){
    if(entity[i].type == "player") return i;
  }
  return -1;
}
  
function inbox(x, y, x1, y1, x2, y2) {
  if (x >= x1 && y >= y1) {
    if (x < x2 && y < y2) {
      return true;
    }
  }
  return false;
}

function new() {
  Text.setfont(Font.PIXEL, 1);
  
  //Push a load of empty entities into the array
  //so that we don't have to create them at runtime
  entity = [];
  for(i in 0 ... 100){
    entity.push({});
    resetentity(i);
  }
}

function killplayer(p){
  entity[p].active = false;
  Music.playsound(24760502);
  screenflash = 5;
  deathsequence = 15;
  playerdestroyed = true;
}

function resetentity(t){
  entity[t].x = 0;
  entity[t].y = 0;
  entity[t].vx = 0;
  entity[t].vy = 0;
  entity[t].cx = 0;
  entity[t].cy = 0;
  entity[t].cw = 0;
  entity[t].ch = 0;
  entity[t].timer = 0;
  entity[t].active = false;
  entity[t].type = "nothing";
  entity[t].rule = "nothing";
}

function create(_x, _y, t){
  var i = getfreeentityindex();
  resetentity(i);
  
  entity[i].x = _x;
  entity[i].y = _y;
  entity[i].active = true;
  entity[i].type = t;
  if(t == "player"){
    setcollisionrect(i, -2, -1, 3, 2);
  }else if(t == "playerbullet"){
    setcollisionrect(i, -2, -2, 4, 4);
  }else if(t == "badguy"){
    entity[i].rule = "enemy";
    setcollisionrect(i, -5, -4, 8, 8);
  }
}

function drawentity(t){
  tcol = Col.GRAY;
  if(entity[t].type == "player"){
    //Player Ship
    Gfx.drawtri(entity[t].x-4,entity[t].y-4,
                entity[t].x-4,entity[t].y+4,
                entity[t].x+5,entity[t].y, Col.YELLOW);
  }else if(entity[t].type == "playerbullet"){
    //Player Bullets
    Gfx.fillbox(entity[t].x-1,entity[t].y-1,3,2,Col.YELLOW);
  }else if(entity[t].type == "badguy"){
    //Enemy Ship
    Gfx.drawtri(entity[t].x+4,entity[t].y-4,
                entity[t].x+4,entity[t].y+4,
                entity[t].x-5,entity[t].y, Col.RED);
  }
}

function updateentity(t){
  if(entity[t].type == "playerbullet"){
    entity[t].x += 12;
    if(entity[t].x>Gfx.screenwidth){
      entity[t].active=false;
    }else{
      //Check if the bullet has hit anything
      for(i in 0 ... numentity){
        if(entity[i].active){
          if(entity[i].rule == "enemy"){
            if(checkcollision(t, i)){
              entity[t].active = false;
              entity[i].active = false;
              score++;
              
              Music.playsound(31054702);
            }
          }
        }
      }
    }
  }else if(entity[t].type == "badguy"){
    entity[t].x -= 4;
    entity[t].timer++;
    entity[t].y+=Math.sin(entity[t].timer/6)*3;
    
    if(entity[t].x < -10){
      entity[t].active=false;
    }
    if(!playerdestroyed){
      if(checkcollision(player, t)) killplayer(player);
    }
  }
}

function gameupdate() {
  if(deathsequence > 0){
    deathsequence--;
    if(deathsequence <= 0){
      gamestate = "title";
    }
  }else{
    if(Input.pressed(Key.UP)) entity[player].y-=4;
    if(Input.pressed(Key.DOWN)) entity[player].y+=4;
    if(Input.pressed(Key.LEFT)) entity[player].x-=4;
    if(Input.pressed(Key.RIGHT)) entity[player].x+=4;

    if(Input.delaypressed(Key.Z, 5) || Input.delaypressed(Key.SPACE, 5)){
      create(entity[player].x+6, entity[player].y,"playerbullet");
      Music.playsound(79506301, 0.1);
    }

    if(entity[player].y < 2) entity[player].y = 2;
    if(entity[player].y > Gfx.screenheight-2) entity[player].y = Gfx.screenheight-2;

    if(entity[player].x < 2) entity[player].x = 2;
    if(entity[player].x > Gfx.screenwidth-4) entity[player].x = Gfx.screenwidth-4;
  }

  for(i in 0 ... numentity){
    if(entity[i].active){
      updateentity(i);
      drawentity(i);

      //Draw collision boxes for testing
      /*
      Gfx.drawbox(entity[i].x + entity[i].cx + camerax,
      entity[i].y + entity[i].cy + cameray,
      entity[i].cw, entity[i].ch, Col.WHITE);
      */
    }
  }

  //Cleanup
  var i = numentity - 1; while (i >= 0 && !entity[i].active) { numentity--; i--; }

  if(screenflash > 0){
    Gfx.fillbox(0,0,Gfx.screenwidth,Gfx.screenheight,Col.WHITE);
    screenflash--;
  }
  
  //Create new enemies
  if(Game.time % 5 == 0){
    create(220, Game.time%120,"badguy");
    create(300, 120-Game.time%120,"badguy");
  }
  
  //Show score
  Text.display(2,0,"SCORE: " + score, Col.WHITE);
}

function titleupdate(){
  
  Text.display(Text.CENTER, Gfx.screenheightmid-20,"SIMPLE EXAMPLE SPACE SHOOTER");
  Text.display(Text.CENTER, Gfx.screenheightmid,"SEE \"SUPER SHOT\" FOR", Col.GRAY);
  Text.display(Text.CENTER, Gfx.screenheightmid+8,"A MORE COMPLEX EXAMPLE", Col.GRAY);
  
  if(Input.justpressed(Key.Z) || Input.justpressed(Key.SPACE)){
    gamestate = "game";
    
    score = 0;
    numentity = 0;
    create(5,56,"player");
    player = getplayer();
    playerdestroyed = false;
  }
}

function update() {
  if(gamestate == "title"){
    titleupdate();
  }else if(gamestate == "game"){
    gameupdate();
  }
}