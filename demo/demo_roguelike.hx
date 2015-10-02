Game.title = "Simple Roguelike Example";

// ASSETS START HERE
Gfx.loadimagestring("icon0", "3SaaapZZZSaZCcYJFcQHa"); // Corner, Top left
Gfx.loadimagestring("icon1", "3SaaapZZZSbZaxPXdwOHa"); // Corner, Top right
Gfx.loadimagestring("icon2", "3SaaapZZZUOHFcYJCdYaa"); // Corner, Bottom left
Gfx.loadimagestring("icon3", "3SaaapZZZUPHdxPXaxWaa"); // Corner, Bottom right
Gfx.loadimagestring("icon4", "3SaaapZZZSbZ6hZZ9gQHa"); // Up
Gfx.loadimagestring("icon5", "3SaaapZZZUPH9hZZ6hYaa"); // Down
Gfx.loadimagestring("icon6", "3SaaapZZZUOHFcYJFcQHa"); // Left
Gfx.loadimagestring("icon7", "3SaaapZZZUPHdxPXdwOHa"); // Right
Gfx.loadimagestring("icon8", "3SaaapZZZSbZ6hZZ6hYaa"); // Horizontal
Gfx.loadimagestring("icon9", "3SaaapZZZUOHlsOHlsOHa"); // Vertical
Gfx.loadimagestring("icon10", "3SaaapZZZUPH9hZZ9gQHa"); // Cross
Gfx.loadimagestring("icon11", "3SaaapZZZYRNCuNmCxpH6"); // Mine
Gfx.loadimagestring("icon12", "3SaaapZZZZZaKmdaKmdZ6"); // Square
Gfx.loadimagestring("icon13", "3SaaapZZZSa4mMOHmLSaa"); // Radio button, selected
Gfx.loadimagestring("icon14", "3SaaapZZZSa4mMe7mLSaa"); // Radio button, unselected
Gfx.loadimagestring("icon15", "3SaaapZZZS2hbaqWpdKSa"); // Music Note
Gfx.loadimagestring("icon16", "3SaaapZZZSK4pRY4h7Saa"); // Up arrow
Gfx.loadimagestring("icon17", "3SaaapZZZSa4h7TZJLSma"); // Down arrow
Gfx.loadimagestring("icon18", "3SaaapZZZS6ypRXZpL6ia"); // Left arrow
Gfx.loadimagestring("icon19", "3SaaapZZZSqgpNYZJKyea"); // Right arrow
Gfx.loadimagestring("icon20", "3SaaapZZZVnZZZZZJLSma"); // Heart
Gfx.loadimagestring("icon21", "3SaaapZZZSK4pRZZJLSma"); // Diamond
Gfx.loadimagestring("icon22", "3SaaapZZZSK4pRZZJKK4a"); // Spade
Gfx.loadimagestring("icon23", "3SaaapZZZSK4hARZZYQma"); // Club
Gfx.loadimagestring("icon24", "3SaaapZZZWqaaabeaaaaa"); // Dither, 1
Gfx.loadimagestring("icon25", "3SaaapZZZWqaeqbeabeaa"); // Dither, 2
Gfx.loadimagestring("icon26", "3SaaapZZZXuaeqbvabeaa"); // Dither, 3
Gfx.loadimagestring("icon27", "3SaaapZZZXuavqbvafuaa"); // Dither, 4
Gfx.loadimagestring("icon28", "3SaaapZZZXu8vqbvi=uaa"); // Dither, 5
Gfx.loadimagestring("icon29", "3SaaapZZZXu8vq9vi=ui6"); // Dither, 6
Gfx.loadimagestring("icon30", "3SaaapZZZXuEPq9vkHui6"); // Dither, 7
Gfx.loadimagestring("icon31", "3SaaapZZZXuEPsFvkHuE6"); // Dither, 8
Gfx.loadimagestring("icon32", "3SaaapZZZZ2EPsFRkHuE6"); // Dither, 9
Gfx.loadimagestring("icon33", "3SaaapZZZZ2ER0FRkHQE6"); // Dither, 10
Gfx.loadimagestring("icon34", "3SaaapZZZZYER0FZEHQE6"); // Dither, 11
Gfx.loadimagestring("icon35", "3SaaapZZZZYEZUFZEJYE6"); // Dither, 12
Gfx.loadimagestring("icon36", "3SaaapZZZZZIZUFZVJYE6"); // Dither, 13
Gfx.loadimagestring("icon37", "3SaaapZZZZZIZVJZVJYV6"); // Dither, 14
Gfx.loadimagestring("icon38", "3SaaapZZZZZZZVJZZZYV6"); // Dither, 15
Gfx.loadimagestring("icon39", "3KaaapZZZZaRL5aRL0EEEEEEEEEEEEEEEEEEEEE"); // Full
Gfx.loadimagestring("icon40", "3SaaapZZZVXZV5Z7WZYZa"); // Face, filled
Gfx.loadimagestring("icon41", "3SaaapZZZVXaOGd4NmcZa"); // Face, outlined
Gfx.loadimagestring("icon42", "3SaaapZZZVWZadWZadWZa"); // Three, Horizontal
Gfx.loadimagestring("icon43", "3SaaapZZZSbHV4RHV4Qaa"); // Three, Vertical
Gfx.loadimagestring("icon44", "3SaaapZZZSaZpKaapNWaa"); // Two, Horizontal
Gfx.loadimagestring("icon45", "3SaaapZZZSaNmNmNmNmaa"); // Two, Vertical
Gfx.loadimagestring("icon46", "3SaaapZZZSaaadWZaaaaa"); // One, Horizontal
Gfx.loadimagestring("icon47", "3SaaapZZZSamdaKmdaKaa"); // One, Vertical
Gfx.loadimagestring("icon48", "3SaaapZZZSgd7KT24dbya"); // Sword
Gfx.loadimagestring("icon49", "3SaaapZZZZZaRGNmS1m4a"); // Shield
Gfx.loadimagestring("icon50", "3SaaapZZZS2n6yogdb6Ka"); // Staff
Gfx.loadimagestring("icon51", "3SaaapZZZSSsiBY8i7ioa"); // Bow
Gfx.loadimagestring("icon52", "3SaaapZZZSahbK2hhNWaa"); // Boots
Gfx.loadimagestring("icon53", "3SaaapZZZSnB59ithVAKa"); // Throwing star
Gfx.loadimagestring("icon54", "3SaaapZZZSa7ltWZitWaa"); // Helmet
Gfx.loadimagestring("icon55", "3SaaapZZZSbNZZYNh9Waa"); // Armor
Gfx.loadimagestring("icon56", "3SaaapZZZSaZpNmNmNmaa"); // Trousers
Gfx.loadimagestring("icon57", "3SaaapZZZTSLjkEEEk26a"); // Whip
Gfx.loadimagestring("icon58", "3SaaapZZZWd7ZZZHNiKma"); // Axe
Gfx.loadimagestring("icon59", "3SaaapZZZSaZpNWmdaKaa"); // Hammer
Gfx.loadimagestring("icon60", "3SaaapZZZSaahsi8i7Oaa"); // Alpha
Gfx.loadimagestring("icon61", "3SaaapZZZTK8i9K8isSaa"); // Beta
Gfx.loadimagestring("icon62", "3SaaapZZZSaaJPise7iaa"); // Pi
Gfx.loadimagestring("icon63", "3SaaapZZZVWLgaKymtWaa"); // Sigma
Gfx.loadimagestring("icon64", "3SaaapZZZSaahMi8i7Kaa"); // Sigma, lower
Gfx.loadimagestring("icon65", "3SaaapZZZSa4ise7e9maa"); // Omega
Gfx.loadimagestring("icon66", "3SaaapZZZTSNitWZitm4a"); // Theta
Gfx.loadimagestring("icon67", "3SaaapZZZUeHlsOZh6Kma"); // Psi
Gfx.loadimagestring("icon68", "3SaaapZZZSK4lsOHlrSma"); // Phi
Gfx.loadimagestring("icon69", "3SaaapZZZTWKgaStitm4a"); // Delta
Gfx.loadimagestring("icon70", "3SaaapZZZSaKwaKogNgaa"); // Lambda
Gfx.loadimagestring("icon71", "3SaaapZZZSaNmNmNoNyKa"); // Mu
Gfx.loadimagestring("icon72", "3SaaapZZZSK4f7isg7Sma"); // Crystal 1
Gfx.loadimagestring("icon73", "3SaaapZZZS62nA2TAKSea"); // Crystal 2
Gfx.loadimagestring("icon74", "3SaaapZZZSK7dfls9cema"); // Crystal 3
Gfx.loadimagestring("icon75", "3SaaapZZZSasddmNdbiaa"); // Crystal 4
Gfx.loadimagestring("icon76", "3SaaapZZZSa4nNOJoLSaa"); // Crystal 5
Gfx.loadimagestring("icon77", "3SaaapZZZSy44QmLHTSya"); // Crystal 6
Gfx.loadimagestring("icon78", "3SaaapZZZTSNmLSehaq2a"); // Key 1
Gfx.loadimagestring("icon79", "3SaaapZZZUeZpLSehaq2a"); // Key 2
Gfx.loadimagestring("icon80", "3SaaapZZZTSNise7jse7a"); // Door 1
Gfx.loadimagestring("icon81", "3SaaapZZZTSZpNWZptWZa"); // Door 2
Gfx.loadimagestring("icon82", "3SaaapZZZSa4pKaZmNWaa"); // Chest
Gfx.loadimagestring("icon83", "3SaaapZZZSa4h7SmdaKaa"); // Lock
Gfx.loadimagestring("icon84", "3SaaapZZZSacaKqimbaaa"); // Bone
Gfx.loadimagestring("icon85", "3SaaapZZZSa4pMGFp7Kaa"); // Skull
Gfx.loadimagestring("icon86", "3SaaapZZZYhNZXVmZYR76"); // Monster
Gfx.loadimagestring("icon87", "3SaaapZZZSa4pMOZmPkHa"); // Monster 2
Gfx.loadimagestring("icon88", "3SaaapZZZTSZltWZpNWHa"); // Ghost
Gfx.loadimagestring("icon89", "3SaaapZZZSa4daK4pNW4a"); // Potion
Gfx.loadimagestring("icon90", "3SaaapZZZTS7ls$=lse4a"); // S Token
Gfx.loadimagestring("icon91", "3SaaapZZZTSZ5ZZZZVW4a"); // Circle
Gfx.loadimagestring("icon92", "3SaaapZZZSKmh7SZpRZZ6"); // Triangle
Gfx.loadimagestring("icon93", "3SaaapZZZZZaRHlsQGlY6"); // Spiral
Gfx.loadimagestring("icon94", "3SaaapZZZSbZjtWDpMeZ6"); // Scroll
Gfx.loadimagestring("icon95", "3SaaapZZZSa4iuNmCrSaa"); // Eye
Gfx.loadimagestring("icon96", "3SaaapZZZX3xvvvRvfrua"); // HP
Gfx.loadimagestring("icon97", "3SaaapZZZZ3RruvRfhrOa"); // SP
Gfx.loadimagestring("icon98", "3SaaapZZZScb6W3I5d6qa"); // Tick
Gfx.loadimagestring("icon99", "3SaaapZZZVgVBKS5oVgaa"); // X
Gfx.loadimagestring("icon100", "3SaaapZZZZZaRHV4RGdZ6"); // Block 1
Gfx.loadimagestring("icon101", "3SaaapZZZZZ7NnlsNohZ6"); // Block 2
Gfx.loadimagestring("icon102", "3SaaapZZZXuaR7lshGaE6"); // Block 3
Gfx.loadimagestring("icon103", "3SaaapZZZSb5RXYa4ZJV6"); // Block 4
Gfx.loadimagestring("icon104", "3SaaapZZZSbgRXYem5JV6"); // Block 5
Gfx.loadimagestring("icon105", "3SaaapZZZSa6aaeaabaaa"); // Ground 1
Gfx.loadimagestring("icon106", "3SaaapZZZSaSaaad6haaa"); // Ground 2
Gfx.loadimagestring("icon107", "3SaaapZZZSKZiwh7CtWma"); // Target
Gfx.loadimagestring("icon108", "3SaaapZZZSacdyaaegKaa"); // Water
Gfx.loadimagestring("icon109", "3SaaapZZZVXZV5ZNS5YZa"); // Sad face, filled
Gfx.loadimagestring("icon110", "3SaaapZZZVXaOGdmRGcZa"); // Sad face, outlined
Gfx.loadimagestring("icon111", "3SaaapZZZZYa5SbZ6hYaa"); // Grate

var icon = [];
for(i in 0 ... 112) icon.push("icon"+i);
// ASSETS END HERE

var currentmap;

var playerx;
var playery;

var mapwidth;
var mapheight;

var playertile;
var floortile;
var walltile;
var scrolltile;
var potiontile;

var redrawmap;
var newtile;

var iconcolor = [];

var message = "SIMPLE ROGUELIKE EXAMPLE - PRESS ARROW KEYS TO MOVE";
var messagecol = Col.GRAY;

function new(){
  Text.setfont(Font.THIN);
  Gfx.clearscreeneachframe=false;
  currentmap = [];
  
  playerx = 15;
  playery = 9;
  
  mapwidth = 30;
  mapheight = 17;
  
  //These numbers corespond to the icons we want to use from the asset pack
  playertile = 40;
  floortile = 105;
  walltile = 103;
  scrolltile = 94;
  potiontile = 89;
  
  for(i in 0 ... mapwidth) {
    currentmap.push([]);
    for(j in 0 ... mapheight){
      currentmap[i].push(floortile);
    }
  }
  redrawmap = true;
  
  for(i in 0 ... 140) iconcolor.push(Col.RED);
  iconcolor[playertile] = Col.WHITE;
  iconcolor[floortile] = Col.NIGHTBLUE;
  iconcolor[walltile] = 0x7070e5;
  iconcolor[scrolltile] = Col.WHITE;
  iconcolor[potiontile] = Col.MAGENTA;
  
  //Place some random walls
  for(i in 0 ... 100){
    pset(Random.int(0, mapwidth), Random.int(0, mapheight), walltile);
  }
  
  pset(Random.int(0, mapwidth), Random.int(0, mapheight), potiontile);
  pset(Random.int(0, mapwidth), Random.int(0, mapheight), potiontile);
  pset(Random.int(0, mapwidth), Random.int(0, mapheight), scrolltile);
  pset(playerx, playery, playertile);
}

function pset(x, y, t, ?color){
  //Instead of redrawing the entire screen each time, we just
  //draw what's actually changed.
  if(x>=0 && y>=0){
    if(x < mapwidth && y < mapheight){
      //Update the map for reference
      currentmap[x][y]=t;
      
      //Change the character
      Gfx.fillbox(x * 8, y * 8, 8, 8, Col.BLACK);
      if(t > -1) {
        if(color == null) color = iconcolor[t];
        Gfx.imagecolor(color);
        Gfx.drawimage(x*8, y*8, icon[t]);
      }
    }
  }
}

function pget(x, y){
  if(x>=0 && y>=0){
    if(x < mapwidth && y < mapheight){
      return currentmap[x][y];
    }
  }
  return -1;
}

function moveplayer(xoff, yoff){
  pset(playerx, playery, floortile);
  
  //Check new position for interaction
  newtile = pget((playerx + mapwidth + xoff) % mapwidth, (playery + mapheight + yoff) % mapheight);
  if(newtile == walltile){
    //Wall, play a bump sound
    Music.playsound(68417307);
    //Prevent the player from moving
    xoff = 0; yoff = 0;
  }else if(newtile == potiontile){
    //Remove the potion, play a sound
    Music.playsound(72329307);
  }else if(newtile == scrolltile){
    //Scroll, play a collect sound and change the message
    Music.playsound(84140903);
    message = "SEE *** FOR A MORE COMPLEX ROGUELIKE EXAMPLE";
    messagecol = Col.YELLOW;
  }
  
  playerx = (playerx + mapwidth + xoff) % mapwidth; playery = (playery + mapheight + yoff) % mapheight;
  
  pset(playerx, playery, playertile);
}

function update(){
  if(Input.delaypressed(Key.LEFT, 4)) moveplayer(-1, 0);
  if(Input.delaypressed(Key.RIGHT, 4)) moveplayer(1, 0);
  if(Input.delaypressed(Key.UP, 4)) moveplayer(0, -1);
  if(Input.delaypressed(Key.DOWN, 4)) moveplayer(0, 1);
  
  if(redrawmap){
    //Redraw the entire map. For when loads of stuff changes at once.
    redrawmap=false;
    for(j in 0 ... mapheight){
      for(i in 0 ... mapwidth){
        pset(i, j, currentmap[i][j]);
      }
    }
  }
  
  //Show message
  Gfx.fillbox(0, mapheight * 8, Gfx.screenwidth, 16, Col.BLACK);
  Text.display(Text.CENTER, 4 + mapheight * 8, message, messagecol);
}