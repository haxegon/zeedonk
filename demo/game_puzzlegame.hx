Game.title = "PUZZLE GAME";
Game.homepage = "http://www.hollygramazio.net/";
Game.foreground = Col.GRAY;
Game.background = Col.BLACK;
  
var boxheight;
var lineheight;

var currentbox;
var finishedyet;

var box = [0, 0, 0, 0, 0];
var contentat = [0, 0, 0, 0, 0];
var line = [0, 0, 0, 0, 0];
var content = [[], [], [], [], []];
var textcolour = [0, 0, 0, 0, 0];
var boxcolour = [0, 0, 0, 0, 0];
var r = [0, 0, 0, 0, 0];
var g = [0, 0, 0, 0, 0];
var b = [0, 0, 0, 0, 0];
var colourchange = ["red", "green", "blue", "green", "red"];

var lightblack;

var greydupe;
var greyduper;
var greydupeg;
var greydupeb;

var story;

var linecolour;
var lr;
var lg;
var lb;

var startcolour;
var sr;
var sg;
var sb;

var start;

//how much does the colour change per press
var changerate;

function new() {
  Text.setfont(Font.THIN, 1);
  start = 0;

  sr = 0;
  sg = 0;
  sb = 0;

  finishedyet = 0;

  content[0] = [ 
    "At 8am every weekday, Mona catches the same train, which\ntravels at an average of 48 kilometres an hour.", 
    "When Mona leaves her apartment each morning, she takes \nthe lift to the ground floor.",
    "Mona puts one teaspoon of sugar in her tea each morning.",
    "Mona has twenty-four pairs of socks. Some of them are \ngrey, and some of them are black.",
    "Mona has two flatmates. One of them always lies, and the\nother always tells the truth.",
    "Each morning, Mona walks one mile south to the bus stop.",
    "Mona packs herself lunch on one morning out of every\nthree.",
    "When Mona reaches her office in the morning, she catches\nthe elevator to the tenth floor."];
  content[1] = [ "Sometimes on the weekends, she goes for a walk to the\nlocal market.", 
                "She drinks instant coffee, which she buys in a small jar\nevery fortnight.",
                "One day, she drops a table tennis ball down a hole.",
                "On her desk there is an unopened package.",
                "On the bathroom floor there is a pool of water.",
                "Everyone at her workplace has either blue eyes or brown\neyes.",
                "For lunch she eats first one grain of rice, then two, then\nfour, then eight and so on.",
                "She pays for her lunch with a note and three coins, and\nreceives four coins in return.",
                "She runs along the corridor with a piece of paper in her\nhand.",
                "On her train journey, Mona reads the newspaper.",
                "She has two water bottles. One of them holds 500\nmililitres, and the other holds 600 mililitres.",
                "There are three light switches outside her bathroom, but\nonly one is connected to the bathroom light.",
                "Mona's elder flatmate, Rhona, is twice the age that the\nyounger, Ilona, was two years ago."];
  content[2] = [ "One day she finds Rhona lying dead outside her house. There\nare no signs of violence.", 
                "Every day on her lunch break, Mona walks to a park near\nher workplace.",
                "One afternoon she looks out of the window and sees an\nunexpected bird.",
                "Every evening, Mona places two icecubes in a glass.",
                "One evening she goes to the supermarket to buy a cabbage,\na bag of beans and a goose.",
                "She picks up one black pebble on the ground, and one\nwhite pebble.",
                "As she is about to leave work one morning, her shirt\ntears.",
                "As she walks, she crosses each bridge exactly once.",
                "She does not know when Rhona's birthday is.",
                "Every afternoon at 4:15, Mona puts her phone on to charge.",
                "While walking home one Tuesday evening, she finds a broken\nstraw on the ground.", 
                "One night in late summer she finds a pool of water on\nthe path and walks through."];
  content[3] = [ "When she returns home, she walks up the stairs.", 
                "In the evening, she walks one mile east.",
                "On her way home she passes a branch in the road.",
                "There is no mirror in her flat.",
                "She knows that her boyfriend is dead.",
                "The next morning she looks out of the window, screams\nand turns herself in to the police.",
                "She walks up the final three flights of stairs.",
                "Most nights at 2am, she lies awake for a little while.",
                "Every evening, she gets into bed, winds up her alarm clock,\nand sets it for 7am the next morning.", 
                "For dinner she cooks scrambled eggs. She has twelve eggs\nof different weights, which appear to be identical.",
                "She knows that her boyfriend is cheating on her.",
                "Late at night, she puts on her hat without looking at it.",
                "As she walks through the park, she sees a carrot lying\non the ground.",
                "She takes out a gun and points it at the man, who\nthanks her."];
  content[4] = [ "Why?", 
                "Assume that Mona is perfectly logical. Does she change\nher mind?",
                "When does Mona die?",
                "How?",
                "Where did the extra dollar go?",
                "How many children does she have?",
                "What does she do?",
                "How does the car know to swerve?",
                "How old is her sister?",
                "Is she happy?",
                "Does Mona get on with her mother?",
                "How can this be?",
                "Why does Mona leave?",
                "Why does Mona get arrested?",
                "Was she telling the truth?",
                "How do you account for this?",
                "How is this possible?",
                "What colour is her bedspread?",
                "What day was it?"];

  currentbox = 0;

  for (i in 0 ... 5) {
    contentat[i] = Random.int(0, 8);
    r[i] = 0;
    g[i] = 87;
    b[i] = 132;
  }
  contentat[4] = contentat[4] * 2;

  greyduper = 157;
  greydupeg = 157;
  greydupeb = 157;

  greydupe = Gfx.rgb(greyduper,greydupeg,greydupeb);
  lightblack = Gfx.rgb(100, 100, 100);

  changerate = 5;
}


function update() {
  boxheight = 29;
  lineheight = 2;

  for (i in 0 ... 5) {
    if (r[i] > 255) { r[i] = 255; }
    if (g[i] > 255) { g[i] = 255; }
    if (b[i] > 255) { b[i] = 255; }
  }

  if (lr > 255) { lr = 255; }
  if (lg > 255) { lg = 255; }
  if (lb > 255) { lb = 255; }

  box[0] = 0;
  for (i in 0 ... 4) {
    line[i] = box[i] + boxheight;
    box[i + 1] = box[i] + boxheight + lineheight;
  }

  for (i in 0 ... 5) {
    boxcolour[i] = Gfx.rgb(r[i],g[i],b[i]);
  }

  startcolour = Gfx.rgb(sr, sg, sb);
  linecolour = Gfx.rgb(lr, lg, lb);

  if (start <= 30)
  {
    for (i in 0 ... 5) {
      Gfx.fillbox(0, box[i], Gfx.screenwidth, boxheight, Col.GREY);
      Gfx.fillbox(0, line[i], Gfx.screenwidth, lineheight, Col.BLACK);
    }
    
    Text.align(Text.CENTER);
    Text.display(Gfx.screenwidthmid, box[1] + 12, "PUZZLE GAME", startcolour);
    Text.display(Gfx.screenwidthmid, box[2] + 12, "use arrow keys to play", lightblack);
    Text.display(Gfx.screenwidthmid, box[3] + 12, "Holly Gramazio", lightblack);
    Text.align(Text.LEFT);

    if (Input.justpressed(Key.DOWN) || Input.justpressed(Key.UP) || Input.justpressed(Key.LEFT) || Input.justpressed(Key.RIGHT))
    {
      start = 1;
      Music.playsound(82998502);
    }
    if (start > 0)
    { 
      start += 2;
      sb += 5;
      sg += 2;
    }
  }
  else if (greydupeb <= 20)
  {
    Gfx.fillbox(0, 0, Gfx.screenwidth, 62, Col.GREY);
    Gfx.fillbox(0, 27, Gfx.screenwidth, 110, Col.BLUE);
    Gfx.fillbox(0, 137, Gfx.screenwidth, 94, Col.GREY);

    story = "";
    for (i in 0 ... 4) {
      story += content[i][contentat[i]] + "\n";
    }
    story += content[4][contentat[4]];

    Text.display(2, 2, "You have no moves left.\nSolve your problem.", Col.WHITE);
    Text.display(8,38, story, Col.BLACK);
  }
  else if ( finishedyet > 40 )
  {
    for (i in 0 ... 5) {
      Gfx.fillbox(0, box[i], Gfx.screenwidth, boxheight, greydupe);
      Gfx.fillbox(0, line[i], Gfx.screenwidth, lineheight, Col.BLACK);

      Text.display(5, box[i] + 5, content[i][contentat[i]], Col.BLACK);
    }

    greyduper -= 2;
    greydupeg -= 2;
    greydupeb -= 2;
    greydupe = Gfx.rgb(greyduper, greydupeg, greydupeb);

    if (lr < 20) { lr = 20; }
    if (lg < 20) { lg = 20; }
    if (lb < 20) { lb = 20; }
  }
  else
  {
    for (i in 0 ... 5) {
      Gfx.fillbox(0, box[i], Gfx.screenwidth, boxheight, boxcolour[i]);
      Gfx.fillbox(0, line[i], Gfx.screenwidth, lineheight, linecolour);
    }

    if ( Input.justpressed(Key.UP) )
    {
      currentbox -= 1;
      finishedyet += 1;
      lr += 10;
      lb += 5;
      Music.playsound(78121304);
    }

    if (Input.justpressed(Key.DOWN) )
    {
      currentbox += 1;
      finishedyet += 1;
      lg += 10;
      lb += 5;
      Music.playsound(78121304);
    }

    if (currentbox > 4) { currentbox = 0; }
    if (currentbox < 0) { currentbox = 4; } 

    //light up current box
    Gfx.fillbox(0, box[currentbox], Gfx.screenwidth, boxheight, Col.BLUE);
    if (Input.justpressed(Key.LEFT)) { 
      finishedyet += 1; 
      contentat[currentbox] -= 1;
      changecol(currentbox);
      Music.playsound(13093904);
    }
    if (Input.justpressed(Key.RIGHT)) { 
      finishedyet += 1; 
      contentat[currentbox] += 1; 
      changecol(currentbox);
      Music.playsound(13093904);
    }
    if (contentat[currentbox] >= content[currentbox].length) { contentat[currentbox] = 0; }
    if (contentat[currentbox] < 0 ) { contentat[currentbox] += content[currentbox].length; }

    for(i in 0 ... 5){
      Text.display(5, box[i] + 5, content[i][contentat[i]], textcolour[i]);
    }
  }
}

function changecol(t) {
  for (i in 0 ... 5) {
    if (i != t) {
      if (colourchange[t] == "red") {
        r[i] += changerate;
      }else if (colourchange[t] == "green") {
        g[i] += changerate;
      }else if (colourchange[t] == "blue") {
        b[i] += changerate;
      }
    }
  }	
}