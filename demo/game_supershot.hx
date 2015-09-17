/*
  SUPER SHOT

  This example game has been heavily optimised! In general, Zeedonk is not really
  built for fast action games, but there are things you can do to speed things up.
  Here are some tips that helped a lot in Super Shot:

  - Drawing lots of primitives (especially lines) starts to add up pretty quickly.
    Super Shot caches all the graphics as images before it starts in the 
    cache() function, which is much faster.

  - Interpreting code at runtime is slow! So give hscript as little to do as you 
    can. For example, I got a noticible speed increase in the checkcollision()
    function by first checking that the two entities are within 10 pixels of 
    each other before checking the individual points.

  - Also in the category of giving hscript less to do, try to do as little 
    looping over arrays as you can. Instead of having an inner loop in the player
    update to check if any enemy bullets have collided with them, it's better to
    just have each bullet check if it's hit the player when the bullet moves.

  - Consider inlining functions that get called a lot, even if it means some 
    repetition. In the gameupdate() function, update and draw functions for the
    entities have been inlined.

  - With lots of image labels for the game's graphics, an earlier version of the
    game had lots of drawimage commands that looked like this:

    Gfx.drawimage(x, y, "spaceteeth_" + enemyframe);

    Doing all these int to string conversions in hscript was slow - better to
    store the lables in an array of strings instead, like this:
   
    Gfx.drawimage(x, y, spaceteeth_[enemyframe]);

  - Avoid using alpha with primitives and images. It can be pretty slow!

*/

Game.title = "";
Game.background = Col.BLACK;
Game.foreground = Col.LIGHTBLUE;

//Keeping sound effects here
var shootsound = 361441;
var powershotsound = 85225901;
var powerupsound = 58573703;
var hitenemysound = 45280902;
var deathsound = 24760502;
var launchsound = 61252908;
var startsound = 29031708;
var enemyshotsound = 57001101;
var enemyhitsound = 74869904;
var starexplodesound = 72951502;
var pickupdropsound = 74702102;
var inmotion = "qbésCSgyIåKeMUsVfb3agJEvéa2cQaQa2eia2h9a";

var screenflash = 0;
var screenshake = 0;
var camerax = 0;
var cameray = 0;

var playerpowerup = 0;
var deathsequence = 0;
var gamestate = "title";
var titlecountdown = 0;
var playerdestroyed;

var playermoving;
var timedelay = 3;
var timejuice = 50;
var maxtimejuice = 50;
var gametime = 0;
var shoottime = 0;
var wavedelay = 0;
var wavecount = 0;
var gamespeed = 1;
var newround = 0;
var powerupcount = 0;
var stopcol = Col.GRAY;
var highscore;
var score;

var bulletvx;
var bulletvy;
var bulletsize;

var temp;
var tcol;

//Starfield stuff
var starx;
var stary;
var starspeed;
var numstars;

var powerup_ = [];
var powerup_stopped_ = [];
var spaceteeth_=[];
var spaceteeth_stopped_=[];
var spaceeye_=[];
var spaceeye_stopped_=[];
var spaceeye_hurt_=[];
var spacehexagon_=[];
var spacehexagon_stopped_=[];
var spacehexagon_hurt_=[];
var spacestar_white_=[];
var spacestar_yellow_=[];
var spacestar_red_=[];
var spacestar_gray_=[];
var spacecube_=[];
var spacecube_stopped_=[];
var spacecube_hurt_=[];

function effect(t){
  if(t == "shake"){
    screenshake = 10;
  }else if(t == "flash"){
    screenflash = 5;
  }else if(t == "shakeflash"){
    screenshake = 10;
    screenflash = 5;
  }
}

function initstars(){
  numstars = 10;
  starspeed = [];
  starx = [];
  stary = [];
  for(i in 0 ... numstars){
    starspeed.push(Random.int(3,6));
    starx.push(Random.float(0, Gfx.screenwidth * 2));
    stary.push(Random.int(0, Gfx.screenheight-10));
  }
}


function updatestars(speed){
  for(i in 0 ... numstars){
    starx[i] -= starspeed[i] * speed;
    if(starx[i] < -10){
      starspeed[i] = Random.int(3,6);
      starx[i] = Gfx.screenwidth;
      stary[i] = Random.int(0, Gfx.screenheight-10);
    }
  }
}

var starcol;
function drawstars(){
  for(i in 0 ... numstars){
    starcol = 255 - (6 - starspeed[i]) * 60;
    Gfx.fillbox(starx[i] + camerax/2, stary[i] + cameray/2, starspeed[i]/2,1, Gfx.rgb(starcol, starcol, starcol));
  }
}

function drawstillstars(){
  for(i in 0 ... numstars){
    starcol = Convert.toint((255 - (6 - starspeed[i]) * 60) * Random.float(0.5, 0.8));
    Gfx.fillbox(starx[i] + camerax/2, stary[i] + cameray/2, starspeed[i]/2,1, Gfx.rgb(starcol, starcol, starcol));
  }
}

//Entity functions
var entity;
var numentity;

var player;

function getfreeentityindex(){
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

function checkcollision(a, b){
  if(entity[a].active && entity[b].active){
    if(Math.abs(Convert.toint(entity[a].x - entity[b].x)) < 10){
      if(Math.abs(Convert.toint(entity[a].y - entity[b].y)) < 10){
        if(inboxw(entity[a].x + entity[a].cx,
                  entity[a].y + entity[a].cy, 
                  entity[b].x + entity[b].cx, 
                  entity[b].y + entity[b].cy,
            			entity[b].cw, entity[b].ch)){
          return true;
        }
        if(inboxw(entity[a].x + entity[a].cx,
                  entity[a].y + entity[a].ch, 
                  entity[b].x + entity[b].cx, 
                  entity[b].y + entity[b].cy,
            			entity[b].cw, entity[b].ch)){
          return true;
        }
        if(inboxw(entity[a].x + entity[a].cw,
                  entity[a].y + entity[a].cy, 
                  entity[b].x + entity[b].cx, 
                  entity[b].y + entity[b].cy,
            			entity[b].cw, entity[b].ch)){
          return true;
        }
        if(inboxw(entity[a].x + entity[a].cw,
                  entity[a].y + entity[a].ch, 
                  entity[b].x + entity[b].cx, 
                  entity[b].y + entity[b].cy,
            			entity[b].cw, entity[b].ch)){
          return true;
        }
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

function inboxw(x, y, x1, y1, w, h) {
  if (x >= x1 && y >= y1) {
    if (x < x1 + w && y < y1 + h) {
      return true;
    }
  }
  return false;
}

function cachegraphics() {
  //Cache entity graphics as images to speed things up

  //Player
  Gfx.createimage("player_moving", 10, 10);
  Gfx.drawtoimage("player_moving");
  tcol = 0xEEEE22; Gfx.drawtri(0, 1, 0, 9, 9, 5, tcol);

  Gfx.createimage("player_stopped", 10, 10);
  Gfx.drawtoimage("player_stopped");
  tcol = stopcol; Gfx.drawtri(0, 1, 0, 9, 9, 5, tcol);

  //Powerbullets
  Gfx.createimage("powershot", 10, 14);
  Gfx.drawtoimage("powershot");

  tcol = Col.YELLOW; Gfx.fillbox(2, 6, 4, 2, tcol);
  tcol = 0xEEEE22;   Gfx.fillbox(6, 5, 2, 4, tcol);
  tcol = Col.WHITE;  Gfx.fillbox(8, 5, 2, 4, tcol);

  tcol = Col.YELLOW; Gfx.fillbox(0, 1, 4, 2, tcol);
  tcol = 0xEEEE22;   Gfx.fillbox(4, 0, 2, 4, tcol);
  tcol = Col.WHITE;  Gfx.fillbox(6, 0, 2, 4, tcol);

  tcol = Col.YELLOW; Gfx.fillbox(0, 11, 4, 2, tcol);
  tcol = 0xEEEE22;   Gfx.fillbox(4, 10, 2, 4, tcol);
  tcol = Col.WHITE;  Gfx.fillbox(6, 10, 2, 4, tcol);

  Gfx.createimage("powershot_stopped", 10, 14);
  Gfx.drawtoimage("powershot_stopped");

  tcol = stopcol;
  Gfx.fillbox(2, 6, 4, 2, tcol);
  Gfx.fillbox(6, 5, 2, 4, tcol);
  Gfx.fillbox(8, 5, 2, 4, tcol);

  Gfx.fillbox(0, 1, 4, 2, tcol);
  Gfx.fillbox(4, 0, 2, 4, tcol);
  Gfx.fillbox(6, 0, 2, 4, tcol);

  Gfx.fillbox(0, 11, 4, 2, tcol);
  Gfx.fillbox(4, 10, 2, 4, tcol);
  Gfx.fillbox(6, 10, 2, 4, tcol);

  //Powerups
  for (k in 0 ... 2) {
    for (j in 0 ... 30) {
      if (k == 0) {
        powerup_.push("powerup_" + j);
        Gfx.createimage(powerup_[j], 16, 16);
        Gfx.drawtoimage(powerup_[j]);
        tcol = Gfx.rgb(240, 240, 0);
        Gfx.drawhexagon(8, 8, 6, j * 2, Gfx.rgb(120, 120, 0));
        Gfx.drawhexagon(8, 8, 7, j * 2, tcol);
        Text.display(7, 2, "P", tcol);
      }else if (k == 1) {
        powerup_stopped_.push("powerup_stopped_" + j);
        Gfx.createimage(powerup_stopped_[j], 16, 16);
        Gfx.drawtoimage(powerup_stopped_[j]);
        tcol = stopcol;
        Gfx.drawhexagon(8, 8, 6, j * 2, 0x222222);
        Gfx.drawhexagon(8, 8, 7, j * 2, tcol);
        Text.display(7, 2, "P", tcol);
      }
    }
  }

  //spaceteeth:
  tcol = stopcol;
  for (i in 0 ... 16) {
    if (i >= 8) {
      tcol = Gfx.rgb(220, 0, 0);
      spaceteeth_.push("spaceteeth_" + (i - 8));
      Gfx.createimage(spaceteeth_[i-8], 17, 32);
      Gfx.drawtoimage(spaceteeth_[i-8]);
    }else {
      spaceteeth_stopped_.push("spaceteeth_stopped_" + i);
      Gfx.createimage(spaceteeth_stopped_[i], 17, 32);
      Gfx.drawtoimage(spaceteeth_stopped_[i]);
    }

    temp = Convert.toint((i * 2) % 16);
    Gfx.drawline(8, 16, 0, 16 - temp, tcol);
    Gfx.drawline(16, 8, 0, 16 - temp, tcol);
    Gfx.drawline(8, 16, 0, 16 + temp, tcol);
    Gfx.drawline(16, 24, 0, 16 + temp, tcol);
    Gfx.drawline(16, 8, 16, 24, tcol);
  }

  //spacewall:
  tcol = stopcol;
  var spacewall_ = [];
  var spacewall_stopped_ = [];
  for (j in 0 ... 20) {
    if (j >= 10) {
      spacewall_.push("spacewall_" + (j - 10));
      Gfx.createimage(spacewall_[j-10], 40, 40);
      Gfx.drawtoimage(spacewall_[j-10]);
    }else {
      spacewall_stopped_.push("spacewall_stopped_" + j);
      Gfx.createimage(spacewall_stopped_[j], 40, 40);
      Gfx.drawtoimage(spacewall_stopped_[j]);
    }

    for (i in 0 ... (j % 10)) {
      if (j >= 10) tcol = Gfx.rgb(255, Convert.toint(24 * i), 0);
      Gfx.drawbox(20 - i * 2, 20 - i * 2,  i * 4, i * 4, tcol);
    }

    if (j >= 10) tcol = Col.WHITE;
    if (j % 10 > 3) {
      Gfx.drawbox(20 - (j % 10) * 2 + camerax, 20 - (j % 10) * 2 + cameray, (j % 10) * 4, (j % 10) * 4, tcol);
    }else {
      Gfx.drawbox(20 - 6, 20 - 6, 12, 12, tcol);
    }
  }

  //spaceeye
  for (j in 0 ... 18) {
    if (j < 6) {
      spaceeye_.push("spaceeye_" + j);
      Gfx.createimage(spaceeye_[j], 21, 21);
      Gfx.drawtoimage(spaceeye_[j]);
      tcol = Gfx.rgb(255, 128, 0);
    }else if (j < 12) {
      spaceeye_stopped_.push("spaceeye_stopped_" + (j-6));
      Gfx.createimage(spaceeye_stopped_[j-6], 21, 21);
      Gfx.drawtoimage(spaceeye_stopped_[j-6]);
      tcol = stopcol;
    }else{
      spaceeye_hurt_.push("spaceeye_hurt_" + (j - 12));
      Gfx.createimage(spaceeye_hurt_[j-12], 21, 21);
      Gfx.drawtoimage(spaceeye_hurt_[j-12]);
      tcol = Gfx.rgb(255, 0, 0);
    }

    Gfx.drawcircle(10, 10, 10, tcol);
    if (j % 6 > 0) {
      if (j < 6) tcol = Gfx.rgb(128, 64, 0);
      Gfx.drawcircle(10, 10, ((j % 6) - 1) * 2, tcol);
    }
  }

  //Space Hexagon
  for (k in 0 ... 3) {
    for (j in 0 ... 10) {
      if (k == 0) {
        spacehexagon_.push("spacehexagon_" + j);
        Gfx.createimage(spacehexagon_[j], 32, 32);
        Gfx.drawtoimage(spacehexagon_[j]);
      }else if (k == 1) {
        spacehexagon_stopped_.push("spacehexagon_stopped_" + j);
        Gfx.createimage(spacehexagon_stopped_[j], 32, 32);
        Gfx.drawtoimage(spacehexagon_stopped_[j]);
        tcol = stopcol;
      }else if (k == 2) {
        spacehexagon_hurt_.push("spacehexagon_hurt_" + j);
        Gfx.createimage(spacehexagon_hurt_[j], 32, 32);
        Gfx.drawtoimage(spacehexagon_hurt_[j]);
        tcol = Gfx.rgb(255, 0, 0);
      }

      //0.10472 is 1/10 of a 60 degree rotation in radians
      if (k == 0) tcol = 0xEE88EE;
      Gfx.drawhexagon(16, 16, 15, 0.10472 * j, tcol);
      if (k == 0) tcol = 0x884488;
      Gfx.drawhexagon(16, 16, 10, 0.10472 * j, tcol);
      if (k == 0) tcol = 0x331133;
      Gfx.drawhexagon(16, 16, 5, 0.10472 * j, tcol);
    }
  }

  //spacestar
  for (k in 0 ... 4) {
    for (j in 0 ... 10) {
      if (k == 0) {
        spacestar_white_.push("spacestar_white_" + j);
        Gfx.createimage(spacestar_white_[j], 21, 21);
        Gfx.drawtoimage(spacestar_white_[j]);
        tcol = Col.WHITE;
      }else if (k == 1) {
        spacestar_yellow_.push("spacestar_yellow_" + j);
        Gfx.createimage(spacestar_yellow_[j], 21, 21);
        Gfx.drawtoimage(spacestar_yellow_[j]);
        tcol = Col.YELLOW;
      }else if (k == 2) {
        spacestar_red_.push("spacestar_red_" + j);
        Gfx.createimage(spacestar_red_[j], 21, 21);
        Gfx.drawtoimage(spacestar_red_[j]);
        tcol = Gfx.rgb(255, 0, 0);
      }else if (k == 3) {
        spacestar_gray_.push("spacestar_gray_" + j);
        Gfx.createimage(spacestar_gray_[j], 21, 21);
        Gfx.drawtoimage(spacestar_gray_[j]);
        tcol = stopcol;
      }

      //0.12566368 is 1/10 of a 72 degree rotation in radians
      var temprotate = ((Math.PI * 2) / 10);

      var tx = (Math.cos(0.12566368 * j) * 5) + 10;
      var ty = (Math.sin(0.12566368 * j) * 5) + 10;
      var tx2 = 0.0;
      var ty2 = 0.0;
      for (i in 0 ... 10) {
        if (i % 2 == 0) {
          tx2 = (Math.cos((0.12566368 * j) + (temprotate * (i + 1))) * 10) + 10;
          ty2 = (Math.sin((0.12566368 * j) + (temprotate * (i + 1))) * 10) + 10;
        }else {
          tx2 = (Math.cos((0.12566368 * j) + (temprotate * (i + 1))) * 5) + 10;
          ty2 = (Math.sin((0.12566368 * j) + (temprotate * (i + 1))) * 5) + 10;
        }

        Gfx.drawline(tx, ty, tx2, ty2, tcol);
        tx = tx2; ty = ty2;
      }
    }
  }

  //spacecube
  for (k in 0 ... 3) {
    for (j in 0 ... 10) {
      if (k == 0) {
        spacecube_.push("spacecube_" + j);
        Gfx.createimage(spacecube_[j], 30, 30);
        Gfx.drawtoimage(spacecube_[j]);
        tcol = 0x22EEEE;
      }else if (k == 1) {
        spacecube_stopped_.push("spacecube_stopped_" + j);
        Gfx.createimage(spacecube_stopped_[j], 30, 30);
        Gfx.drawtoimage(spacecube_stopped_[j]);
        tcol = stopcol;
      }else if (k == 2) {
        spacecube_hurt_.push("spacecube_hurt_" + j);
        Gfx.createimage(spacecube_hurt_[j], 30, 30);
        Gfx.drawtoimage(spacecube_hurt_[j]);
        tcol = Gfx.rgb(255, 0, 0);
      }

      var temprotate = ((Math.PI * 2) / 4);

      var tx = (Math.cos(0.1570796 * j) * 10) + 15;
      var ty = (Math.sin(0.1570796 * j) * 10) + 15;
      var tx2 = 0.0;
      var ty2 = 0.0;
      for (i in 0 ... 4) {
        tx2 = (Math.cos((0.1570796 * j) + (temprotate * (i+1))) * 10) + 15;
        ty2 = (Math.sin((0.1570796 * j) + (temprotate * (i+1))) * 10) + 15;

        Gfx.drawline(tx, ty, tx2, ty2, tcol);
        tx = tx2; ty = ty2;
      }
    }
  }

  Gfx.drawtoscreen();
}


function new() {
  Text.setfont(Font.PIXEL, 1);

  if(Game.load("highscore") == null){
  	highscore = 0;
  }else{
  	highscore = Convert.toint(Game.load("highscore"));
  }
  
  cachegraphics();
  initstars();

  entity = [];
  for(i in 0 ... 100){
    entity.push({});
  }
}

function killplayer(p){
  Music.stopmusic();
  Music.playsound(deathsound);
  entity[p].active = false;
  effect("shakeflash");
  deathsequence = 30;
  titlecountdown = 0;
  if (score > highscore){
    highscore = score;
    Game.save("highscore", Convert.tostring(highscore));
  }
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
  entity[t].frame = 0;
  entity[t].frame2 = 0;
  entity[t].health = 1;
  entity[t].timer = 0;
  entity[t].hurt = 0;
  entity[t].active = false;
  entity[t].particle = Col.RED;
  entity[t].droprate = 0;
  entity[t].type = "nothing";
  entity[t].rule = "nothing";
}

function createbullet(_x, _y, vx, vy, size){
  bulletvx = vx;
  bulletvy = vy;
  bulletsize = size;
  create(_x, _y, "enemybullet");
}

function create(_x, _y, t) {
  if (t == "spacestar") {
    //If we have more than 5 exploding stars on screen, do something else
    temp = 0;
    for (i in 0 ... numentity) {
      if (entity[i].active) {
        if (entity[i].type == t) {
          temp++;
        }
      }
    }
    if (temp >= 5) {
      t = "spaceteeth";
    }
  }


  var i = getfreeentityindex();
  resetentity(i);

  entity[i].x = _x;
  entity[i].y = _y;
  entity[i].active = true;
  entity[i].type = t;
  if(t == "player"){
    setcollisionrect(i, -2, -1, 3, 2);
  }else if(t == "playerbullet"){
    setcollisionrect(i, -2, -3, 4, 6);
    entity[i].health = 1;
  }else if(t == "explosion"){
    entity[i].particle = bulletsize;
  }else if(t == "enemybullet"){
    setcollisionrect(i, -bulletsize, -bulletsize, (bulletsize*2), (bulletsize*2));
    entity[i].vx = bulletvx;
    entity[i].vy = bulletvy;
    entity[i].frame = bulletsize;
  }else if(t == "powerup_power"){
    setcollisionrect(i, -6, -6, 12, 12);
    powerupcount++;
  }else if(t == "powershot"){
    setcollisionrect(i, -2, -5, 4, 10);
    entity[i].health = 3;
  }else if(t == "spaceteeth"){
    entity[i].rule = "enemy";
    setcollisionrect(i, -2, -8, 10, 16);
    entity[i].health = 1;
    entity[i].droprate = 10;
  }else if(t == "spacewall"){
    entity[i].rule = "enemy";
    setcollisionrect(i, -20, -20, 40, 40);
    entity[i].health = 10;
    entity[i].particle = Col.GRAY;
    entity[i].droprate = 100;
  }else if(t == "spaceeye"){
    entity[i].rule = "enemy";
    setcollisionrect(i, -8, -8, 16, 16);
    entity[i].health = 4;
    entity[i].particle = Col.ORANGE;
    entity[i].droprate = 10;
  }else if(t == "spacehexagon"){
    entity[i].rule = "enemy";
    setcollisionrect(i, -10, -10, 20, 20);
    entity[i].health = 5;
    entity[i].timer = Random.int(0, 252);
    entity[i].frame = _y < 50? -1:1;
    entity[i].droprate = 10;
    entity[i].particle = Col.MAGENTA;
  }else if(t == "spacestar"){
    entity[i].rule = "enemy";
    setcollisionrect(i, -5, -5, 10, 10);
    entity[i].health = 1000;
    entity[i].particle = Col.ORANGE;
    entity[i].droprate = 0;
  }else if(t == "spacecube"){
    entity[i].rule = "enemy";
    setcollisionrect(i, -6, -6, 12, 12);
    entity[i].health = 2;
    entity[i].timer = (_x - 200) / 4;
    entity[i].particle = Col.BLUE;
    entity[i].droprate = 10;
  }
}

function spawn(patterntype){
  var randomposition;
  if (patterntype == "testing") {
    create(200, 55, "spacecube");
    wavedelay = 70;
  }else if (patterntype == "spaceteeth_full") {
    for(i in 0 ... 5){
      create(200, 8 + i * 24, "spaceteeth");
      create(250, 8 + i * 24, "spaceteeth");
    }
    for(i in 0 ... 4){
      create(225, 20 + i * 24, "spaceteeth");
    }
    wavedelay = 70;
  }else if(patterntype == "spaceteeth_top"){
    for(i in 0 ... 3){
      create(200, 8 + i * 24, "spaceteeth");
      create(250, 8 + i * 24, "spaceteeth");
    }
    for(i in 0 ... 2){
      create(225, 20 + i * 24, "spaceteeth");
    }
    wavedelay = 70;
  }else if(patterntype == "spaceteeth_bottom"){
    for(i in 2 ... 5){
      create(200, 8 + i * 24, "spaceteeth");
      create(250, 8 + i * 24, "spaceteeth");
    }
    for(i in 2 ... 4){
      create(225, 20 + i * 24, "spaceteeth");
    }
    wavedelay = 70;
  }else if(patterntype == "spaceteeth_out"){
    create(250, 8, "spaceteeth");
    create(225, 32, "spaceteeth");
    create(200, 56, "spaceteeth");
    create(225, 80, "spaceteeth");
    create(250, 104, "spaceteeth");
    wavedelay = 70;
  }else if (patterntype == "spaceteeth_in") {
    create(200, 8, "spaceteeth");
    create(225, 32, "spaceteeth");
    create(250, 56, "spaceteeth");
    create(225, 80, "spaceteeth");
    create(200, 104, "spaceteeth");
    wavedelay = 70;
  }else if (patterntype == "spaceteeth_line") {
    temp = Random.int(0, 4);
    for (i in 0 ... 5) {
      create(200 + i * 25, 8 + temp * 24, "spaceteeth");
    }
    wavedelay = 70;
  }else if (patterntype == "spacewall_wall") {
    create(220, 20, "spacewall");
    create(220, 60, "spacewall");
    create(220, 100, "spacewall");
    wavedelay = 70;
  }else if (patterntype == "spacewall_single") {
    temp = Random.int(0, 2);
    create(220, 20 + temp * 40, "spacewall");
    wavedelay = 70;
  }else if (patterntype == "spaceeye_center") {
    create(200, 60, "spaceeye");
    create(240, 60, "spaceeye");
    wavedelay = 70;
  }else if (patterntype == "spaceeye_borders") {
    create(200, 10, "spaceeye");
    create(200, 100, "spaceeye");
    wavedelay = 70;
  }else if (patterntype == "spaceeye_top") {
    create(200, 10, "spaceeye");
    create(250, 10, "spaceeye");
    wavedelay = 120;
  }else if (patterntype == "spaceeye_bottom") {
    create(200, 100, "spaceeye");
    create(250, 100, "spaceeye");
    wavedelay = 120;
  }else if (patterntype == "spaceeye_three") {
    create(200, 10, "spaceeye");
    create(200, 55, "spaceeye");
    create(200, 100, "spaceeye");
    wavedelay = 70;
  }else if (patterntype == "spacehexagon_center") {
    create(200, 55, "spacehexagon");
    wavedelay = 70;
  }else if (patterntype == "spacehexagon_down") {
    create(200, 55, "spacehexagon");
    create(230, 65, "spacehexagon");
    create(260, 75, "spacehexagon");
    wavedelay = 120;
  }else if (patterntype == "spacehexagon_up") {
    create(200, 45, "spacehexagon");
    create(230, 35, "spacehexagon");
    create(260, 25, "spacehexagon");
    wavedelay = 120;
  }else if (patterntype == "spacehexagon_cross") {
    create(200, 20, "spacehexagon");
    create(200, 90, "spacehexagon");
    wavedelay = 70;
  }else if (patterntype == "spacestar_center") {
    create(200, 55, "spacestar");
    wavedelay = 70;
  }else if (patterntype == "spacestar_borders") {
    create(200, 10, "spacestar");
    create(200, 100, "spacestar");
    wavedelay = 70;
  }else if (patterntype == "spacestar_wall") {
    for(i in 0 ... 5){
      create(200, 10 + i * 24, "spacestar");
    }
    wavedelay = 70;
  }else if (patterntype == "spacestar_offcenter") {
    create(220, 30, "spacestar");
    create(220, 80, "spacestar");
    wavedelay = 70;
  }else if (patterntype == "spacecube_single") {
    create(200, 55, "spacecube");
    wavedelay = 70;
  }else if (patterntype == "spacecube_snake") {
    create(200, 55, "spacecube");
    create(220, 55, "spacecube");
    create(240, 55, "spacecube");
    create(260, 55, "spacecube");
    create(280, 55, "spacecube");
    create(300, 55, "spacecube");
    wavedelay = 120;
  }else if (patterntype == "spacecube_short") {
    create(200, 55, "spacecube");
    create(220, 55, "spacecube");
    create(240, 55, "spacecube");
    wavedelay = 90;
  }
}

//List of implemented patterns:
//spaceteeth_full
//spaceteeth_top
//spaceteeth_bottom
//spaceteeth_out
//spaceteeth_in
//spaceteeth_line
//spacewall_wall
//spacewall_single
//spaceeye_center
//spaceeye_borders
//spaceeye_top
//spaceeye_bottom
//spaceeye_three
//spacehexagon_center
//spacehexagon_down
//spacehexagon_up
//spacehexagon_cross
//spacestar_center
//spacestar_borders
//spacestar_wall
//spacestar_offcenter
//spacecube_single
//spacecube_snake
//spacecube_short
var easyenemies = [
  "spaceteeth_line",
  "spaceeye_top",
  "spaceeye_bottom",
  "spaceeye_three",
  "spacehexagon_center",
  "spacehexagon_down",
  "spacehexagon_up",
  "spacestar_center",
  "spacestar_borders",
  "spacecube_single",
  "spacecube_short",
  "spacecube_snake"
];
var hardenemies = [
  "spaceeye_borders",
  "spaceeye_borders",
  "spaceeye_three",
  "spacehexagon_cross",
  "spacehexagon_up",
  "spacehexagon_down",
  "spacestar_wall",
  "spacestar_offcenter",
  "spacecube_snake",
  "spacecube_snake",
  "spacestar_borders",
];

function updatewaves(){
  if (wavedelay <= 0) {
    if (wavecount == 0) {
      //Initial wave
      spawn(Random.pickstring("spaceteeth_full", "spaceteeth_in", "spaceteeth_out", "spacecube_short"));
      wavedelay -= 30;
    }else if (wavecount % 4 == 0) {
      //Every forth wave is a wall of red guys
      spawn(Random.pickstring("spaceteeth_full", "spaceteeth_top", "spaceteeth_bottom", "spaceteeth_out", "spaceteeth_in"));
    }else if (wavecount < 6) {
      //Easy
      spawn(easyenemies[Random.int(0, easyenemies.length - 1)]);

      create(200, 8 + Random.int(0, 5) * 24, "spaceteeth");
      wavedelay -= 40;
    }else if (wavecount < 15) {
      //Medium
      if (Random.bool()) {
        spawn(hardenemies[Random.int(0, hardenemies.length - 1)]);
        wavedelay -= 30;
      }else{
        spawn(easyenemies[Random.int(0, easyenemies.length - 1)]);
        wavedelay -= 40;
      }

      create(200, 8 + Random.int(0, 4) * 24, "spaceteeth");
      create(300, 8 + Random.int(0, 4) * 24, "spaceteeth");
    }else if (wavecount < 30) {
      //Hard
      spawn(hardenemies[Random.int(0, hardenemies.length - 1)]);
      wavedelay -= 30;
      create(200, 8 + Random.int(0, 4) * 24, "spaceteeth");
      create(250, 8 + Random.int(0, 4) * 24, "spaceteeth");
      create(300, 8 + Random.int(0, 4) * 24, "spaceteeth");
      create(350, 8 + Random.int(0, 4) * 24, "spaceteeth");
    }else{
      //Just die already
      spawn(hardenemies[Random.int(0, hardenemies.length - 1)]);
      wavedelay -= 40;
      create(200, 8 + Random.int(0, 4) * 24, "spaceteeth");
      create(250, 8 + Random.int(0, 4) * 24, "spaceteeth");
      create(300, 8 + Random.int(0, 4) * 24, "spaceteeth");
      create(350, 8 + Random.int(0, 4) * 24, "spaceteeth");
    }
    wavecount++;
  }
}

function gameupdate() {
  if (playermoving > 0) {
    if(playerpowerup > 0) playerpowerup--;
    playermoving--;
  }

  if(timejuice>0){
    //if(playermoving == 0) timejuice--;
  }else{
    playermoving = 2;
  }

  if(deathsequence>0){
    playermoving=timedelay;
    deathsequence--;
    if(deathsequence <= 1){
      gamestate = "title";
      Music.stopmusic();
    }
  }else{
    if(Input.pressed(Key.UP)){
      entity[player].y-=4;
      playermoving=timedelay;
    }else if(Input.pressed(Key.DOWN)){
      entity[player].y+=4;
      playermoving=timedelay;
    }

    if(Input.pressed(Key.LEFT)){
      entity[player].x-=4;
      playermoving=timedelay;
    }else if(Input.pressed(Key.RIGHT)){
      entity[player].x+=4;
      playermoving=timedelay;
    }

    if (shoottime > 4) {
      shoottime-= 4;
      if (playerpowerup > 0) {
        create(Convert.toint(entity[player].x + 6), Convert.toint(entity[player].y), "powershot");
        Music.playsound(powershotsound, 0.1);
      }else {
        create(Convert.toint(entity[player].x + 6), Convert.toint(entity[player].y), "playerbullet");
        Music.playsound(shootsound, 0.1);
      }
    }

    if(entity[player].y < 2) entity[player].y = 2;
    if (entity[player].y > Gfx.screenheight - 12) entity[player].y = Gfx.screenheight - 12;

    if(entity[player].x < 2) entity[player].x = 2;
    if(entity[player].x > Gfx.screenwidth-4) entity[player].x = Gfx.screenwidth-4;
  }

  if (newround > 0) {
    newround--;
    playermoving = 1;
  }

  if (playermoving == 0) {
    Gfx.fillbox(0,0,Gfx.screenwidth, Gfx.screenheight, 0x111111);
  }

  if (playermoving > 0) {
    gamespeed = 1;
    Music.musicvol = 0;
  }else {
    if (gamespeed > 0.15) {
      gamespeed -= 0.075;
      if (gamespeed < 0.15) {
        gamespeed = 0.15;
      }
      Music.musicvol = 1;
    }
  }

  gametime += gamespeed;
  shoottime += gamespeed;
  wavedelay -= gamespeed;
  updatewaves();
  updatestars(gamespeed);

  if (playermoving > 0) {
    drawstars();
  }else {
    drawstillstars();
  }

  //Update and draw entities
  for (t in 0 ... numentity) {
    if(entity[t].active){
      entity[t].timer = entity[t].timer + gamespeed;
      if (entity[t].type == "player") {
        if (entity[t].timer < 8) {
          entity[t].x += (8 - entity[t].timer) * gamespeed;
        }
      }else if (entity[t].type == "explosion") {
        if (entity[t].timer > 4) {
          entity[t].active = false;
        }
      }else if(entity[t].type == "playerbullet" || entity[t].type == "powershot"){
        entity[t].x += 12 * gamespeed;
        if(entity[t].x>Gfx.screenwidth){
          entity[t].active=false;
        }else{
          //Check if the bullet's hit anything
          for(i in 0 ... numentity){
            if(entity[i].active){
              if(entity[i].rule == "enemy"){
                if (checkcollision(t, i)) {
                  while (entity[t].health > 0 && entity[i].health > 0) {
                    entity[t].health--;
                    entity[i].health--;
                  }

                  entity[i].hurt = 3;
                  if (entity[t].health <= 0) {
                    entity[t].active = false;
                  }

                  if (entity[i].health <= 0) {
                    entity[i].type = "explosion";
                    entity[i].timer = 0;
                    entity[i].rule = "particle";
                    effect("shake");
                    Music.playsound(hitenemysound);

                    if (powerupcount < 3) {
                      if (Random.int(1, 99) < entity[i].droprate) {
                        create(entity[t].x, entity[t].y, "powerup_power");
                        Music.playsound(pickupdropsound);
                      }
                    }
                  }else{
                    Music.playsound(enemyhitsound, 0.5);
                  }
                }
              }
            }
          }
        }
      }else if(entity[t].type == "enemybullet"){
        if (Gfx.fastAbs(Convert.toint(entity[t].x - entity[player].x)) < 20) {
          if(gamespeed == 1.0){
            entity[t].x += entity[t].vx / 3;
            entity[t].y += entity[t].vy / 3;

            if(!playerdestroyed){
              if(checkcollision(player, t)) killplayer(player);
            }

            entity[t].x += entity[t].vx / 3;
            entity[t].y += entity[t].vy / 3;

            if(!playerdestroyed){
              if(checkcollision(player, t)) killplayer(player);
            }

            entity[t].x += entity[t].vx / 3;
            entity[t].y += entity[t].vy / 3;

            if(!playerdestroyed){
              if(checkcollision(player, t)) killplayer(player);
            }
          }else {
            entity[t].x += entity[t].vx * gamespeed;
            entity[t].y += entity[t].vy * gamespeed;

            if(!playerdestroyed){
              if(checkcollision(player, t)) killplayer(player);
            }
          }
        }else{
          entity[t].x+=entity[t].vx * gamespeed;
          entity[t].y+=entity[t].vy * gamespeed;
        }

        if(!inboxw(entity[t].x, entity[t].y, -10, -10, Gfx.screenwidth+20, Gfx.screenheight+20)){
          entity[t].active=false;
        }
      }else if(entity[t].type == "spaceteeth"){
        entity[t].x -= 5 * gamespeed;

        if (entity[t].x < -10) {
          entity[t].active = false;
        }
        if(!playerdestroyed){
          if(checkcollision(player, t)) killplayer(player);
        }
      }else if(entity[t].type == "spacewall"){
        entity[t].x -= 2 * gamespeed;
        if(entity[t].health>3){
          entity[t].cx = -entity[t].health * 2;
          entity[t].cy = -entity[t].health * 2;
          entity[t].cw = entity[t].health * 4;
          entity[t].ch = entity[t].health * 4;
        }else {
          entity[t].cx = -6; entity[t].cy = -6;
          entity[t].cw = 12; entity[t].ch = 12;
        }
        if(entity[t].x< -30){
          entity[t].active=false;
        }
        if(!playerdestroyed){
          if(checkcollision(player, t)) killplayer(player);
        }
      }else if(entity[t].type == "spaceeye"){
        entity[t].x -= 1 * gamespeed;
        if (entity[t].timer > 15) {
          entity[t].timer -= 15;
          var playerdir = Math.atan2(entity[player].y - entity[t].y, entity[player].x - entity[t].x);
          createbullet(entity[t].x, entity[t].y, Math.cos(playerdir) * 5, Math.sin(playerdir)*5, 2);
        }
        if(entity[t].x< -10){
          entity[t].active=false;
        }
        if(!playerdestroyed){
          if(checkcollision(player, t)) killplayer(player);
        }
      }else if (entity[t].type == "spacehexagon") {
        entity[t].frame2 += gamespeed;
        entity[t].x -= gamespeed;
        entity[t].y += entity[t].frame * gamespeed;
        if (entity[t].y < 10) {
          entity[t].frame = 1;
        }else if (entity[t].y > 100) {
          entity[t].frame = -1;
        }
        if (entity[t].frame2 > 8) {
          entity[t].frame2 -= 8;
          if(entity[t].timer % 252 > 125){
            createbullet(entity[t].x, entity[t].y, -Math.sin(3.14 - ((entity[t].timer/40)%3.14)) * 3, -Math.cos(3.14-((entity[t].timer/40)%3.14)) * 3, 2);
          }else{
            createbullet(entity[t].x, entity[t].y, -Math.sin((entity[t].timer/40)%3.14) * 3, -Math.cos((entity[t].timer/40)%3.14) * 3, 2);
          }
        }
        if(entity[t].x< -10){
          entity[t].active=false;
        }
        if(!playerdestroyed){
          if(checkcollision(player, t)) killplayer(player);
        }
      }else if(entity[t].type == "spacestar"){
        if(entity[t].frame == 0){
          entity[t].x -= 2 * gamespeed;
          if(entity[t].x< Gfx.screenwidthmid-5 || entity[t].health < 1000){
            entity[t].frame = 1;
          }
        }else if (entity[t].frame >= 30) {
          var randoffset = Random.float(0, 6.2);
          for(i in 0 ... 12){
            createbullet(entity[t].x, entity[t].y, Math.cos(randoffset + (i / 6) * 3.14) * 3, Math.sin(randoffset + (i / 6) * 3.14) * 3, 2);
          }
          Music.playsound(starexplodesound, 0.5);
          entity[t].active=false;
        }else if(entity[t].frame >= 1){
          entity[t].frame+= gamespeed;
        }
        if(!playerdestroyed){
          if(checkcollision(player, t)) killplayer(player);
        }
      }else if(entity[t].type == "spacecube"){
        entity[t].x -= 2 * gamespeed;
        entity[t].y = 55 + (Math.sin(entity[t].timer/10) * 55);
        if (entity[t].x < -10) {
          entity[t].active=false;
        }
        if(!playerdestroyed){
          if(checkcollision(player, t)) killplayer(player);
        }
      }else if (entity[t].type == "powerup_power") {
        if (5 - (entity[t].timer / 3) > -2) {
          entity[t].x += (5 - (entity[t].timer / 3)) * gamespeed;
        }else {
          entity[t].x -= 2 * gamespeed;
        }
        if(entity[t].x< -4){
          entity[t].active = false;
          powerupcount--;
        }
        if (checkcollision(t, player) || checkcollision(player, t)) {
          powerupcount--;
          timejuice = maxtimejuice;
          playerpowerup = 120;
          Music.playsound(powerupsound);
          effect("shakeflash");
          entity[t].active = false;

          for (i in 0 ... numentity) {
            if (entity[i].active) {
              if (entity[i].type == "powerup_power") {
                entity[i].timer = -5;
              }
            }
          }
        }
      }

      tcol = stopcol;
      if (entity[t].hurt > 0) entity[t].hurt--;
      if(entity[t].type == "player"){
        //Player Ship
        if (playermoving > 0) {
          Gfx.drawimage(entity[t].x + camerax - 5, entity[t].y + cameray - 5, "player_moving");
        }else {
          Gfx.drawimage(entity[t].x + camerax - 5, entity[t].y + cameray - 5, "player_stopped");
        }

      }else if (entity[t].type == "explosion") {
        if (playermoving > 0) tcol = entity[t].particle;
        Gfx.fillbox(entity[t].x + 4 + entity[t].timer + camerax, entity[t].y - 2 - entity[t].timer + cameray, 3, 2, tcol);
        Gfx.fillbox(entity[t].x + 4 + entity[t].timer + camerax, entity[t].y + 2 + entity[t].timer + cameray, 3, 2, tcol);
      }else if(entity[t].type == "playerbullet"){
        //Player Bullets
        if (playerpowerup > 0) {
          if (playermoving > 0) tcol = Col.YELLOW;
          Gfx.fillbox(entity[t].x-5 + camerax,entity[t].y-1 + cameray,4,2,tcol);

          if(playermoving>0)tcol = 0xEEEE22;
          Gfx.fillbox(entity[t].x - 1 + camerax, entity[t].y - 2 + cameray, 2, 4, tcol);
          if(playermoving>0)tcol = Col.WHITE;
          Gfx.fillbox(entity[t].x + 1 + camerax, entity[t].y - 2 + cameray, 2, 4, tcol);
        }else {
          if (playermoving > 0) tcol = Col.YELLOW;
          if(Random.bool()){
            Gfx.fillbox(entity[t].x-3 + camerax,entity[t].y-1 + cameray,2,1,tcol);
          }else{
            Gfx.fillbox(entity[t].x-3 + camerax,entity[t].y + cameray,2,1,tcol);
          }

          if(playermoving>0)tcol = Col.WHITE;
          Gfx.fillbox(entity[t].x-1 + camerax,entity[t].y-1 + cameray,3,2,tcol);
        }
      }else if (entity[t].type == "enemybullet") {
        Gfx.fillbox(entity[t].x + camerax - 2, entity[t].y + cameray - 1, 5, 3, Gfx.rgb(255, 0, 0));
        Gfx.fillbox(entity[t].x + camerax - 1, entity[t].y + cameray - 2, 3, 5, Gfx.rgb(255, 0, 0));
      }else if(entity[t].type == "powerup_power"){
        //Pickup: power
        temp = Convert.toint(Game.time % 30);
        if (playermoving > 0) {
          Gfx.drawimage(entity[t].x + camerax - 8, entity[t].y + cameray - 8, powerup_[temp]);
        }else {
          Gfx.drawimage(entity[t].x + camerax - 8, entity[t].y + cameray - 8, powerup_stopped_[temp]);
        }
      }else if(entity[t].type == "powershot"){
        //Powershots
        if (playermoving > 0) {
          Gfx.drawimage(entity[t].x + camerax - 7, entity[t].y + cameray - 7, "powershot");
        }else{
          Gfx.drawimage(entity[t].x + camerax - 7, entity[t].y + cameray - 7, "powershot_stopped");
        }
      }else if (entity[t].type == "spaceteeth") {
        temp = Convert.toint(entity[t].timer) % 8;
        if (playermoving > 0) {
          Gfx.drawimage(entity[t].x + camerax - 8, entity[t].y + cameray - 16, spaceteeth_[temp]);
        }else {
          Gfx.drawimage(entity[t].x + camerax - 8, entity[t].y + cameray - 16, spaceteeth_stopped_[temp]);
        }
      }else if(entity[t].type == "spacewall"){
        temp = Convert.toint(entity[t].health) - 1;
        if (playermoving > 0) {
          Gfx.drawimage(entity[t].x + camerax - 20, entity[t].y + cameray - 20, spacewall_[temp]);
        }else {
          Gfx.drawimage(entity[t].x + camerax - 20, entity[t].y + cameray - 20, spacewall_stopped_[temp]);
        }
      }else if (entity[t].type == "spaceeye") {
        temp = 0;
        if (entity[t].timer % 15 > 10) {
          temp = Convert.toint((entity[t].timer % 5) + 1);
        }
        if (entity[t].hurt > 0) {
          Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, spaceeye_hurt_[temp]);
        }else if (playermoving > 0) {
          Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, spaceeye_[temp]);
        }else {
          Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, spaceeye_stopped_[temp]);
        }
      }else if (entity[t].type == "spacehexagon") {
        temp = Convert.toint(entity[t].timer % 10);

        if (entity[t].hurt > 0) {
          Gfx.drawimage(entity[t].x + camerax - 16, entity[t].y + cameray - 16, spacehexagon_hurt_[temp]);
        }else if (playermoving > 0) {
          Gfx.drawimage(entity[t].x + camerax - 16, entity[t].y + cameray - 16, spacehexagon_[temp]);
        }else {
          Gfx.drawimage(entity[t].x + camerax - 16, entity[t].y + cameray - 16, spacehexagon_stopped_[temp]);
        }
      }else if(entity[t].type == "spacestar"){
        temp = Convert.toint(entity[t].timer % 10);

        if (playermoving > 0) {
          if (entity[t].hurt > 0) {
            Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, spacestar_red_[temp]);
          }else if (entity[t].frame > 0) {
            if (Game.time % 16 > 8) {
              Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, spacestar_white_[temp]);
            }else{
              Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, spacestar_yellow_[temp]);
            }
          }else {
            Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, spacestar_white_[temp]);
          }
        }else {
          if (entity[t].frame > 0) {
            Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, spacestar_red_[temp]);
          }else {
            Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, spacestar_gray_[temp]);
          }
        }
      }else if (entity[t].type == "spacecube") {
        temp = Convert.toint(entity[t].timer % 10);

        if (entity[t].hurt > 0) {
          Gfx.drawimage(entity[t].x + camerax - 15, entity[t].y + cameray - 15, spacecube_hurt_[temp]);
        }else if (playermoving > 0) {
          Gfx.drawimage(entity[t].x + camerax - 15, entity[t].y + cameray - 15, spacecube_[temp]);
        }else {
          Gfx.drawimage(entity[t].x + camerax - 15, entity[t].y + cameray - 15, spacecube_stopped_[temp]);
        }
      }
    }
  }

  //Cleanup
  var i;
  i = numentity - 1; while (i >= 0 && !entity[i].active) { numentity--; i--; }

  Gfx.fillbox(0, Gfx.screenheight - 9, Gfx.screenwidth, 9, 0x333333);
  Text.setfont(Font.PIXEL, 2);
  if (deathsequence == 0) score = Convert.toint(gametime / 30);
  if(score<10){
    Text.display(Gfx.screenwidth-10, Gfx.screenheight - 20, Convert.tostring(score));
    Text.setfont(Font.PIXEL, 1);
    if (score >= highscore && highscore > 0) {
      Text.display(Gfx.screenwidth - 54, Gfx.screenheight - 11, "NEW RECORD", Game.time%16>8?Col.WHITE:Col.GRAY);
    }else{
      Text.display(Gfx.screenwidth - 30, Gfx.screenheight - 11, "TIME", Col.WHITE);
    }
  }else if (score < 100) {
    Text.display(Gfx.screenwidth-18, Gfx.screenheight - 20, Convert.tostring(score));
    Text.setfont(Font.PIXEL, 1);
    if (score >= highscore && highscore > 0) {
      Text.display(Gfx.screenwidth - 62, Gfx.screenheight - 11, "NEW RECORD", Game.time%16>8?Col.WHITE:Col.GRAY);
    }else{
      Text.display(Gfx.screenwidth - 38, Gfx.screenheight - 11, "TIME", Col.WHITE);
    }
  }else {
    Text.display(Gfx.screenwidth-26, Gfx.screenheight - 20, Convert.tostring(score));
    Text.setfont(Font.PIXEL, 1);
    if (score >= highscore && highscore > 0) {
      Text.display(Gfx.screenwidth - 70, Gfx.screenheight - 11, "NEW RECORD", Game.time%16>8?Col.WHITE:Col.GRAY);
    }else{
      Text.display(Gfx.screenwidth - 46, Gfx.screenheight - 11, "TIME", Col.WHITE);
    }
  }

  if(screenflash > 0) {
    Gfx.fillbox(0,0,Gfx.screenwidth,Gfx.screenheight,Col.WHITE);
    screenflash--;
  }

  if(screenshake>0){
    screenshake--;
    camerax = Random.int(-2, 2);
    cameray = Random.int(-2, 2);
  }else{
    camerax = 0;
    cameray = 0;
  }
}

function titleupdate(){
  updatestars(gamespeed);
  drawstars();

  if(titlecountdown % 2 == 0){
    Text.setfont(Font.RETROFUTURE, 1);
    Text.changesize(3.2);
    Text.display(Text.CENTER, Gfx.screenheightmid - 31, "SUPER");
    Text.changesize(3.5);
    Text.display(Text.CENTER, Gfx.screenheightmid-5, "SHOT");
    Text.setfont(Font.PIXEL, 1);
  }


  Gfx.fillbox(0, Gfx.screenheight - 9, Gfx.screenwidth, 9, 0x333333);
  Text.display(10, Gfx.screenheight - 11, "PRESS SPACE TO START", Game.time%16>8?Col.WHITE:Col.GRAY);
  if (highscore > 0) {
    Text.setfont(Font.PIXEL, 2);
    if(highscore<10){
      Text.display(Gfx.screenwidth - 10, Gfx.screenheight - 20, Convert.tostring(highscore));
      Text.setfont(Font.PIXEL, 1);
      Text.display(Gfx.screenwidth - 54, Gfx.screenheight - 11, "HIGH SCORE", Col.WHITE);
    }else if (highscore < 100) {
      Text.display(Gfx.screenwidth - 18, Gfx.screenheight - 20, Convert.tostring(highscore));
      Text.setfont(Font.PIXEL, 1);
      Text.display(Gfx.screenwidth - 62, Gfx.screenheight - 11, "HIGH SCORE", Col.WHITE);
    }else {
      Text.display(Gfx.screenwidth - 26, Gfx.screenheight - 20, Convert.tostring(highscore));
      Text.setfont(Font.PIXEL, 1);
      Text.display(Gfx.screenwidth - 70, Gfx.screenheight - 11, "HIGH SCORE", Col.WHITE);
    }
  }

  if ((Input.justpressed(Key.Z) || Input.justpressed(Key.SPACE)) && titlecountdown == 0) {
    titlecountdown = 16;
    Music.playnote(startsound, 2, 1, 1);
  }

  if(titlecountdown>0){
    titlecountdown--;
    if(titlecountdown == 0){
      gamestate = "game";

      numentity = 0;
      create(0,56,"player");
      player = getplayer();
      playermoving = 0;
      gametime = 0;
      shoottime = 0;
      wavedelay = 2;
      playerpowerup = 0;
      timejuice = maxtimejuice;
      gamespeed = 0.5;
      wavecount = 0;
      score = 0;
      powerupcount = 0;
      playerdestroyed = false;
      newround = 20;
      deathsequence = 0;
      Music.stopmusic();
      Music.playmusic(inmotion);
      Music.musicvol = 0;
      Music.playsound(launchsound);
    }
  }
}

function update() {
  if(gamestate == "title"){
    titleupdate();
  }else if(gamestate == "game"){
    gameupdate();
  }
}
