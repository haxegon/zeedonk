Game.title = "SUPER SHOT";
Game.background = Col.BLACK;
Game.foreground = Col.LIGHTBLUE;

//Keeping sound effects here
var shootsound = 361441;
var powershotsound = 85225901;
var powerupsound = 58573703;
var hitenemysound = 45280902;
var deathsound = "qdpVdyeKoIèdé5ab3a2b3aefc9bk4b2acb2d4cbebiab18a";
var titlemusic = "qgéuWåfUäkyeMUsVfb3agJEvéaibUaqad4abSaqad4abPaqad4abQaqad4abUaqad4abSaqad4abNaqad4abLaqad4a";
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
var badguy_1_=[];
var badguy_1_stopped_=[];
var badguy_3_=[];
var badguy_3_stopped_=[];
var badguy_3_hurt_=[];
var badguy_4_=[];
var badguy_4_stopped_=[];
var badguy_4_hurt_=[];
var badguy_5_white_=[];
var badguy_5_yellow_=[];
var badguy_5_red_=[];
var badguy_5_gray_=[];
var badguy_6_=[];
var badguy_6_stopped_=[];
var badguy_6_hurt_=[];

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

function checkcollisionpoint(x, y, t) {
  if(inboxw(x, y, entity[t].x + entity[t].cx, entity[t].y + entity[t].cy,
            entity[t].cw, entity[t].ch)){
    return true;
  }
  return false;
}

function checkcollision(a, b){
  if(entity[a].active && entity[b].active){
    if(Gfx.fastAbs(Convert.toint(entity[a].x - entity[b].x)) < 10){
      if(Gfx.fastAbs(Convert.toint(entity[a].y - entity[b].y)) < 10){
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

  //Badguy_1:
  tcol = stopcol;
  for (i in 0 ... 16) {
    if (i >= 8) {
      tcol = Gfx.rgb(220, 0, 0);
      badguy_1_.push("badguy_1_" + (i - 8));
      Gfx.createimage(badguy_1_[i-8], 17, 32);
      Gfx.drawtoimage(badguy_1_[i-8]);
    }else {
      badguy_1_stopped_.push("badguy_1_stopped_" + i);
      Gfx.createimage(badguy_1_stopped_[i], 17, 32);
      Gfx.drawtoimage(badguy_1_stopped_[i]);
    }

    temp = Convert.toint((i * 2) % 16);
    Gfx.drawline(8, 16, 0, 16 - temp, tcol);
    Gfx.drawline(16, 8, 0, 16 - temp, tcol);
    Gfx.drawline(8, 16, 0, 16 + temp, tcol);
    Gfx.drawline(16, 24, 0, 16 + temp, tcol);
    Gfx.drawline(16, 8, 16, 24, tcol);
  }

  //Badguy_2:
  tcol = stopcol;
  var badguy_2_ = [];
  var badguy_2_stopped_ = [];
  for (j in 0 ... 20) {
    if (j >= 10) {
      badguy_2_.push("badguy_2_" + (j - 10));
      Gfx.createimage(badguy_2_[j-10], 40, 40);
      Gfx.drawtoimage(badguy_2_[j-10]);
    }else {
      badguy_2_stopped_.push("badguy_2_stopped_" + j);
      Gfx.createimage(badguy_2_stopped_[j], 40, 40);
      Gfx.drawtoimage(badguy_2_stopped_[j]);
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

  //Badguy_3
  for (j in 0 ... 18) {
    if (j < 6) {
      badguy_3_.push("badguy_3_" + j);
      Gfx.createimage(badguy_3_[j], 21, 21);
      Gfx.drawtoimage(badguy_3_[j]);
      tcol = Gfx.rgb(255, 128, 0);
    }else if (j < 12) {
      badguy_3_stopped_.push("badguy_3_stopped_" + (j-6));
      Gfx.createimage(badguy_3_stopped_[j-6], 21, 21);
      Gfx.drawtoimage(badguy_3_stopped_[j-6]);
      tcol = stopcol;
    }else{
      badguy_3_hurt_.push("badguy_3_hurt_" + (j - 12));
      Gfx.createimage(badguy_3_hurt_[j-12], 21, 21);
      Gfx.drawtoimage(badguy_3_hurt_[j-12]);
      tcol = Gfx.rgb(255, 0, 0);
    }

    Gfx.drawcircle(10, 10, 10, tcol);
    if (j % 6 > 0) {
      if (j < 6) tcol = Gfx.rgb(128, 64, 0);
      Gfx.drawcircle(10, 10, ((j % 6) - 1) * 2, tcol);
    }
  }

  //Badguy 4
  for (k in 0 ... 3) {
    for (j in 0 ... 10) {
      if (k == 0) {
        badguy_4_.push("badguy_4_" + j);
        Gfx.createimage(badguy_4_[j], 32, 32);
        Gfx.drawtoimage(badguy_4_[j]);
      }else if (k == 1) {
        badguy_4_stopped_.push("badguy_4_stopped_" + j);
        Gfx.createimage(badguy_4_stopped_[j], 32, 32);
        Gfx.drawtoimage(badguy_4_stopped_[j]);
        tcol = stopcol;
      }else if (k == 2) {
        badguy_4_hurt_.push("badguy_4_hurt_" + j);
        Gfx.createimage(badguy_4_hurt_[j], 32, 32);
        Gfx.drawtoimage(badguy_4_hurt_[j]);
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

  //Badguy_5
  for (k in 0 ... 4) {
    for (j in 0 ... 10) {
      if (k == 0) {
        badguy_5_white_.push("badguy_5_white_" + j);
        Gfx.createimage(badguy_5_white_[j], 21, 21);
        Gfx.drawtoimage(badguy_5_white_[j]);
        tcol = Col.WHITE;
      }else if (k == 1) {
        badguy_5_yellow_.push("badguy_5_yellow_" + j);
        Gfx.createimage(badguy_5_yellow_[j], 21, 21);
        Gfx.drawtoimage(badguy_5_yellow_[j]);
        tcol = Col.YELLOW;
      }else if (k == 2) {
        badguy_5_red_.push("badguy_5_red_" + j);
        Gfx.createimage(badguy_5_red_[j], 21, 21);
        Gfx.drawtoimage(badguy_5_red_[j]);
        tcol = Gfx.rgb(255, 0, 0);
      }else if (k == 3) {
        badguy_5_gray_.push("badguy_5_gray_" + j);
        Gfx.createimage(badguy_5_gray_[j], 21, 21);
        Gfx.drawtoimage(badguy_5_gray_[j]);
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

  //Badguy_6
  for (k in 0 ... 3) {
    for (j in 0 ... 10) {
      if (k == 0) {
        badguy_6_.push("badguy_6_" + j);
        Gfx.createimage(badguy_6_[j], 30, 30);
        Gfx.drawtoimage(badguy_6_[j]);
        tcol = 0x22EEEE;
      }else if (k == 1) {
        badguy_6_stopped_.push("badguy_6_stopped_" + j);
        Gfx.createimage(badguy_6_stopped_[j], 30, 30);
        Gfx.drawtoimage(badguy_6_stopped_[j]);
        tcol = stopcol;
      }else if (k == 2) {
        badguy_6_hurt_.push("badguy_6_hurt_" + j);
        Gfx.createimage(badguy_6_hurt_[j], 30, 30);
        Gfx.drawtoimage(badguy_6_hurt_[j]);
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

  cachegraphics();
  highscore = 0;

  //Music.playmusic(titlemusic);
  initstars();

  entity = [];
  for(i in 0 ... 100){
    entity.push({});
  }
}

function killplayer(p){
  Music.stopmusic();
  Music.playmusic(deathsound);
  entity[p].active = false;
  effect("shakeflash");
  deathsequence = 30;
  titlecountdown = 0;
  if (score > highscore) highscore = score;
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
  if (t == "badguy_5") {
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
      t = "badguy_1";
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
    setcollisionrect(i, -2, -2, 4, 4);
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
    setcollisionrect(i, -2, -4, 4, 8);
    entity[i].health = 3;
  }else if(t == "badguy_1"){
    entity[i].rule = "enemy";
    setcollisionrect(i, -2, -8, 10, 16);
    entity[i].health = 1;
    entity[i].droprate = 10;
  }else if(t == "badguy_2"){
    entity[i].rule = "enemy";
    setcollisionrect(i, -20, -20, 40, 40);
    entity[i].health = 10;
    entity[i].particle = Col.GRAY;
    entity[i].droprate = 100;
  }else if(t == "badguy_3"){
    entity[i].rule = "enemy";
    setcollisionrect(i, -8, -8, 16, 16);
    entity[i].health = 4;
    entity[i].particle = Col.ORANGE;
    entity[i].droprate = 10;
  }else if(t == "badguy_4"){
    entity[i].rule = "enemy";
    setcollisionrect(i, -10, -10, 20, 20);
    entity[i].health = 5;
    entity[i].timer = Random.int(0, 252);
    entity[i].frame = _y < 50? -1:1;
    entity[i].droprate = 10;
    entity[i].particle = Col.MAGENTA;
  }else if(t == "badguy_5"){
    entity[i].rule = "enemy";
    setcollisionrect(i, -5, -5, 10, 10);
    entity[i].health = 1000;
    entity[i].particle = Col.ORANGE;
    entity[i].droprate = 0;
  }else if(t == "badguy_6"){
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
    create(200, 55, "badguy_6");
    wavedelay = 70;
  }else if (patterntype == "badguy_1_full") {
    for(i in 0 ... 5){
      create(200, 8 + i * 24, "badguy_1");
      create(250, 8 + i * 24, "badguy_1");
    }
    for(i in 0 ... 4){
      create(225, 20 + i * 24, "badguy_1");
    }
    wavedelay = 70;
  }else if(patterntype == "badguy_1_top"){
    for(i in 0 ... 3){
      create(200, 8 + i * 24, "badguy_1");
      create(250, 8 + i * 24, "badguy_1");
    }
    for(i in 0 ... 2){
      create(225, 20 + i * 24, "badguy_1");
    }
    wavedelay = 70;
  }else if(patterntype == "badguy_1_bottom"){
    for(i in 2 ... 5){
      create(200, 8 + i * 24, "badguy_1");
      create(250, 8 + i * 24, "badguy_1");
    }
    for(i in 2 ... 4){
      create(225, 20 + i * 24, "badguy_1");
    }
    wavedelay = 70;
  }else if(patterntype == "badguy_1_out"){
    create(250, 8, "badguy_1");
    create(225, 32, "badguy_1");
    create(200, 56, "badguy_1");
    create(225, 80, "badguy_1");
    create(250, 104, "badguy_1");
    wavedelay = 70;
  }else if (patterntype == "badguy_1_in") {
    create(200, 8, "badguy_1");
    create(225, 32, "badguy_1");
    create(250, 56, "badguy_1");
    create(225, 80, "badguy_1");
    create(200, 104, "badguy_1");
    wavedelay = 70;
  }else if (patterntype == "badguy_1_line") {
    temp = Random.int(0, 4);
    for (i in 0 ... 5) {
      create(200 + i * 25, 8 + temp * 24, "badguy_1");
    }
    wavedelay = 70;
  }else if (patterntype == "badguy_2_wall") {
    create(220, 20, "badguy_2");
    create(220, 60, "badguy_2");
    create(220, 100, "badguy_2");
    wavedelay = 70;
  }else if (patterntype == "badguy_2_single") {
    temp = Random.int(0, 2);
    create(220, 20 + temp * 40, "badguy_2");
    wavedelay = 70;
  }else if (patterntype == "badguy_3_center") {
    create(200, 60, "badguy_3");
    create(240, 60, "badguy_3");
    wavedelay = 70;
  }else if (patterntype == "badguy_3_borders") {
    create(200, 10, "badguy_3");
    create(200, 100, "badguy_3");
    wavedelay = 70;
  }else if (patterntype == "badguy_3_top") {
    create(200, 10, "badguy_3");
    create(250, 10, "badguy_3");
    wavedelay = 120;
  }else if (patterntype == "badguy_3_bottom") {
    create(200, 100, "badguy_3");
    create(250, 100, "badguy_3");
    wavedelay = 120;
  }else if (patterntype == "badguy_3_three") {
    create(200, 10, "badguy_3");
    create(200, 55, "badguy_3");
    create(200, 100, "badguy_3");
    wavedelay = 70;
  }else if (patterntype == "badguy_4_center") {
    create(200, 55, "badguy_4");
    wavedelay = 70;
  }else if (patterntype == "badguy_4_down") {
    create(200, 55, "badguy_4");
    create(230, 65, "badguy_4");
    create(260, 75, "badguy_4");
    wavedelay = 120;
  }else if (patterntype == "badguy_4_up") {
    create(200, 45, "badguy_4");
    create(230, 35, "badguy_4");
    create(260, 25, "badguy_4");
    wavedelay = 120;
  }else if (patterntype == "badguy_4_cross") {
    create(200, 20, "badguy_4");
    create(200, 90, "badguy_4");
    wavedelay = 70;
  }else if (patterntype == "badguy_5_center") {
    create(200, 55, "badguy_5");
    wavedelay = 70;
  }else if (patterntype == "badguy_5_borders") {
    create(200, 10, "badguy_5");
    create(200, 100, "badguy_5");
    wavedelay = 70;
  }else if (patterntype == "badguy_5_wall") {
    for(i in 0 ... 5){
      create(200, 10 + i * 24, "badguy_5");
    }
    wavedelay = 70;
  }else if (patterntype == "badguy_5_offcenter") {
    create(220, 30, "badguy_5");
    create(220, 80, "badguy_5");
    wavedelay = 70;
  }else if (patterntype == "badguy_6_single") {
    create(200, 55, "badguy_6");
    wavedelay = 70;
  }else if (patterntype == "badguy_6_snake") {
    create(200, 55, "badguy_6");
    create(220, 55, "badguy_6");
    create(240, 55, "badguy_6");
    create(260, 55, "badguy_6");
    create(280, 55, "badguy_6");
    create(300, 55, "badguy_6");
    wavedelay = 120;
  }else if (patterntype == "badguy_6_short") {
    create(200, 55, "badguy_6");
    create(220, 55, "badguy_6");
    create(240, 55, "badguy_6");
    wavedelay = 90;
  }
}

//List of implemented patterns:
//badguy_1_full
//badguy_1_top
//badguy_1_bottom
//badguy_1_out
//badguy_1_in
//badguy_1_line
//badguy_2_wall
//badguy_2_single
//badguy_3_center
//badguy_3_borders
//badguy_3_top
//badguy_3_bottom
//badguy_3_three
//badguy_4_center
//badguy_4_down
//badguy_4_up
//badguy_4_cross
//badguy_5_center
//badguy_5_borders
//badguy_5_wall
//badguy_5_offcenter
//badguy_6_single
//badguy_6_snake
//badguy_6_short
var easyenemies = [
  "badguy_1_line",
  "badguy_3_top",
  "badguy_3_bottom",
  "badguy_3_three",
  "badguy_4_center",
  "badguy_4_down",
  "badguy_4_up",
  "badguy_5_center",
  "badguy_5_borders",
  "badguy_6_single",
  "badguy_6_short",
  "badguy_6_snake"
];
var hardenemies = [
  "badguy_3_borders",
  "badguy_3_borders",
  "badguy_3_three",
  "badguy_4_cross",
  "badguy_4_up",
  "badguy_4_down",
  "badguy_5_wall",
  "badguy_5_offcenter",
  "badguy_6_snake",
  "badguy_6_snake",
  "badguy_5_borders",
];

function updatewaves(){
  if (wavedelay <= 0) {
    if (wavecount == 0) {
      //Initial wave
      spawn(Random.pickstring("badguy_1_full", "badguy_1_in", "badguy_1_out", "badguy_6_short"));
      wavedelay -= 30;
    }else if (wavecount % 4 == 0) {
      //Every forth wave is a wall of red guys
      spawn(Random.pickstring("badguy_1_full", "badguy_1_top", "badguy_1_bottom", "badguy_1_out", "badguy_1_in"));
    }else if (wavecount < 6) {
      //Easy
      spawn(easyenemies[Random.int(0, easyenemies.length - 1)]);

      create(200, 8 + Random.int(0, 5) * 24, "badguy_1");
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

      create(200, 8 + Random.int(0, 4) * 24, "badguy_1");
      create(300, 8 + Random.int(0, 4) * 24, "badguy_1");
    }else if (wavecount < 30) {
      //Hard
      spawn(hardenemies[Random.int(0, hardenemies.length - 1)]);
      wavedelay -= 30;
      create(200, 8 + Random.int(0, 4) * 24, "badguy_1");
      create(250, 8 + Random.int(0, 4) * 24, "badguy_1");
      create(300, 8 + Random.int(0, 4) * 24, "badguy_1");
      create(350, 8 + Random.int(0, 4) * 24, "badguy_1");
    }else{
      //Just die already
      spawn(hardenemies[Random.int(0, hardenemies.length - 1)]);
      wavedelay -= 40;
      create(200, 8 + Random.int(0, 4) * 24, "badguy_1");
      create(250, 8 + Random.int(0, 4) * 24, "badguy_1");
      create(300, 8 + Random.int(0, 4) * 24, "badguy_1");
      create(350, 8 + Random.int(0, 4) * 24, "badguy_1");
    }
    wavecount++;
  }
}

function gameupdate() {
  //Music.setmusicvol(playermoving/timedelay);
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
  }else {
    if (gamespeed > 0.15) {
      gamespeed -= 0.075;
      if (gamespeed < 0.15) {
        gamespeed = 0.15;
      }
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
                      }
                    }
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
      }else if(entity[t].type == "badguy_1"){
        entity[t].x -= 5 * gamespeed;

        if (entity[t].x < -10) {
          entity[t].active = false;
        }
        if(!playerdestroyed){
          if(checkcollision(player, t)) killplayer(player);
        }
      }else if(entity[t].type == "badguy_2"){
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
      }else if(entity[t].type == "badguy_3"){
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
      }else if (entity[t].type == "badguy_4") {
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
      }else if(entity[t].type == "badguy_5"){
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
          entity[t].active=false;
        }else if(entity[t].frame >= 1){
          entity[t].frame+= gamespeed;
        }
        if(!playerdestroyed){
          if(checkcollision(player, t)) killplayer(player);
        }
      }else if(entity[t].type == "badguy_6"){
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
      }else if (entity[t].type == "badguy_1") {
        temp = Convert.toint(entity[t].timer) % 8;
        if (playermoving > 0) {
          Gfx.drawimage(entity[t].x + camerax - 8, entity[t].y + cameray - 16, badguy_1_[temp]);
        }else {
          Gfx.drawimage(entity[t].x + camerax - 8, entity[t].y + cameray - 16, badguy_1_stopped_[temp]);
        }
      }else if(entity[t].type == "badguy_2"){
        temp = Convert.toint(entity[t].health) - 1;
        if (playermoving > 0) {
          Gfx.drawimage(entity[t].x + camerax - 20, entity[t].y + cameray - 20, badguy_2_[temp]);
        }else {
          Gfx.drawimage(entity[t].x + camerax - 20, entity[t].y + cameray - 20, badguy_2_stopped_[temp]);
        }
      }else if (entity[t].type == "badguy_3") {
        temp = 0;
        if (entity[t].timer % 15 > 10) {
          temp = Convert.toint((entity[t].timer % 5) + 1);
        }
        if (entity[t].hurt > 0) {
          Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, badguy_3_hurt_[temp]);
        }else if (playermoving > 0) {
          Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, badguy_3_[temp]);
        }else {
          Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, badguy_3_stopped_[temp]);
        }
      }else if (entity[t].type == "badguy_4") {
        temp = Convert.toint(entity[t].timer % 10);

        if (entity[t].hurt > 0) {
          Gfx.drawimage(entity[t].x + camerax - 16, entity[t].y + cameray - 16, badguy_4_hurt_[temp]);
        }else if (playermoving > 0) {
          Gfx.drawimage(entity[t].x + camerax - 16, entity[t].y + cameray - 16, badguy_4_[temp]);
        }else {
          Gfx.drawimage(entity[t].x + camerax - 16, entity[t].y + cameray - 16, badguy_4_stopped_[temp]);
        }
      }else if(entity[t].type == "badguy_5"){
        temp = Convert.toint(entity[t].timer % 10);

        if (playermoving > 0) {
          if (entity[t].hurt > 0) {
            Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, badguy_5_red_[temp]);
          }else if (entity[t].frame > 0) {
            if (Game.time % 16 > 8) {
              Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, badguy_5_white_[temp]);
            }else{
              Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, badguy_5_yellow_[temp]);
            }
          }else {
            Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, badguy_5_white_[temp]);
          }
        }else {
          if (entity[t].frame > 0) {
            Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, badguy_5_red_[temp]);
          }else {
            Gfx.drawimage(entity[t].x + camerax - 10, entity[t].y + cameray - 10, badguy_5_gray_[temp]);
          }
        }
      }else if (entity[t].type == "badguy_6") {
        temp = Convert.toint(entity[t].timer % 10);

        if (entity[t].hurt > 0) {
          Gfx.drawimage(entity[t].x + camerax - 15, entity[t].y + cameray - 15, badguy_6_hurt_[temp]);
        }else if (playermoving > 0) {
          Gfx.drawimage(entity[t].x + camerax - 15, entity[t].y + cameray - 15, badguy_6_[temp]);
        }else {
          Gfx.drawimage(entity[t].x + camerax - 15, entity[t].y + cameray - 15, badguy_6_stopped_[temp]);
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
    Text.display(Text.CENTER, Gfx.screenheightmid - 36, "SUPER");
    Text.changesize(3.5);
    Text.display(Text.CENTER, Gfx.screenheightmid-10, "SHOT");
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
      //Music.playmusic(inmotion);
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
