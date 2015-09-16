Game.title="Music Toy";
Game.background=0x301C5A;

//Example inspired by the Matheson Marcault logo.
//http://mathesonmarcault.com
var BACKGROUND = 0x301C5A;
var ACCENT1 = 0x4F318C;
var ACCENT2 = 0x6640B5;
var ACCENT3 = 0x8E7BB5;

var xstart;   					// How many pixels from the left to start from.
var ystart;   					// How many pixels from the top to start from.
var yend;     					// The lowest point that the bars should fall.
var gapsize; 		   		  // Gap between each bar.
var barwidth;						// Width of each bar.

var currentbar;     		// Bar that we're currently moused over.

var barheight;   // Current height of each bar.
var baractive;  // True when the bar is actively repeating.
var barhammer;  // True when we've clicked on a bar: hammers it down.
var barrestore; // True when we've clicked on a repeating bar: restores it.

function new() {
  //To get the rounded edges on the bars, we create images for the tops.
  Gfx.createimage("corner1", 28, 28);
  Gfx.createimage("corner2", 28, 28);
  Gfx.createimage("corner3", 28, 28);

  //On each image, we draw a circle in the corner, so that we are left with only a quadrant.
  Gfx.drawtoimage("corner1");
  Gfx.fillcircle(28, 28, 28, ACCENT1);

  Gfx.drawtoimage("corner2");
  Gfx.fillcircle(28, 28, 28, ACCENT2);

  Gfx.drawtoimage("corner3");
  Gfx.fillcircle(28, 28, 28, ACCENT3);

  //Switch to drawing on the screen again.
  Gfx.drawtoscreen();

  xstart = 4;							// How many pixels from the left to start from.
  ystart = 25;							// How many pixels from the top to start from.
  yend = Gfx.screenheight - ystart - 2;  // The lowest point that the bars should fall.
  barwidth = 28;						// Gap between each bar.
  gapsize = 31;						// Width of each bar.

  //Contains the y positions of the bars. Default to offscreen so that they appear at startup.
  barheight = [Gfx.screenheight, Gfx.screenheight + 10, Gfx.screenheight + 20, Gfx.screenheight + 30, Gfx.screenheight + 40, Gfx.screenheight + 50];

  // True when the bar is actively repeating. Default all to false.
  baractive = [false, false, false, false, false, false];

  // True when we've clicked on a bar: hammers it down. Default all to false.
  barhammer = [false, false, false, false, false, false];

  // True when we've clicked on a repeating bar: restores it. 
  // Default to true; we want them to pop up at the start.
  barrestore = [true, true, true, true, true, true];
}

function update() {
  //Seperating input, logic and render into three functions for clarity!
  doinput();
  dologic();
  dorender();
}

function doinput() {
  //Figure out which bar we're hovering over.
  currentbar = Convert.toint((Mouse.x - xstart) / gapsize);
  //If we're too far to the right, then we're not over any bar.
  if (currentbar >= 6) currentbar = -1;
  //If we're in the gaps between the bars, then we're not over any bar.
  if (Mouse.x - xstart - (currentbar * gapsize) > barwidth) currentbar = -1;
  //If we're above the top of the bars, then we're not over any bar.
  if (Mouse.y < ystart) currentbar = -1;

  if (currentbar != -1) {
    //Do a little pop animation when we hover over the bar.
    if (barheight[currentbar] <= 0){
      barheight[currentbar] -= 2;
      if (barheight[currentbar] < -8) {
        barheight[currentbar] = -8;
      }
    }
  }

  if (currentbar != -1) {
    //Check if we've clicked on a bar.
    if (Mouse.leftclick()) {
      if (baractive[currentbar]) {
        //If the bar's repeating, then stop it from doing that and 
        //bring it back to the top.
        baractive[currentbar] = false;
        barrestore[currentbar] = true;
      }else {
        //If the bar's not repeating, then start that, play the note, 
        //and bring it to the bottom.
        playsound(currentbar);
        barhammer[currentbar] = true;
        baractive[currentbar] = true;
      }
    }
  }
}

function dologic() {
  for (i in 0 ... 6) {
    if (barheight[i] < 0 && i != currentbar) {
      //Do the hover effect when mousing over a bar
      barheight[i] = barheight[i] + 1;
    }

    if (barrestore[i]) {
      //If a bar is being restored, bring it back up to the top quickly.
      barheight[i] = barheight[i] - 10;
      if (barheight[i] < 0) {
        barheight[i] = 0;
        barrestore[i] = false;
      }
    }else if (barhammer[i]) {
      //If a bar is being hammered down, bring it down to the bottom quickly.
      barheight[i] = barheight[i] + 50;
      if (barheight[i] > yend) {
        barheight[i] = yend;
        barhammer[i] = false;
      }
    }else{			
      if (barheight[i] > 0) {
        //If a bar has been pressed, bring it back up to the top.
        barheight[i] = barheight[i] - 2;
        if (baractive[i]) {
          //If it's repeating, hammer it down again when it gets to the top.
          if (barheight[i] <= 0) {
            playsound(i);
            barhammer[i] = true;
          }
        }
      }
    }
  }
}

function dorender() {
  //Fill the background
  Gfx.fillbox(0, 0, Gfx.screenwidth, Gfx.screenheight, BACKGROUND);

  //Draw bar 1
  Gfx.fillbox(xstart + (0 * gapsize), ystart + barwidth + Math.abs(barheight[0]), barwidth, Gfx.screenheight, ACCENT1);	
  Gfx.drawimage(xstart + (0 * gapsize), ystart + Math.abs(barheight[0]), "corner1");

  //Draw bar 2
  Gfx.fillbox(xstart + (1 * gapsize), ystart + barwidth + Math.abs(barheight[1]), barwidth, Gfx.screenheight, ACCENT1);	
  Gfx.drawimage(xstart + (1 * gapsize), ystart + Math.abs(barheight[1]), "corner1");

  //Draw bar 3
  Gfx.fillbox(xstart + (2 * gapsize), ystart + barwidth + Math.abs(barheight[2]), barwidth, Gfx.screenheight, ACCENT2);	
  Gfx.drawimage(xstart + (2 * gapsize), ystart + Math.abs(barheight[2]), "corner2");

  //Draw bar 4
  Gfx.fillbox(xstart + (3 * gapsize), ystart + barwidth + Math.abs(barheight[3]), barwidth, Gfx.screenheight, ACCENT2);	
  Gfx.drawimage(xstart + (3 * gapsize), ystart + Math.abs(barheight[3]), "corner2");

  //Draw bar 5
  Gfx.fillbox(xstart + (4 * gapsize), ystart + barwidth + Math.abs(barheight[4]), barwidth, Gfx.screenheight, ACCENT3);	
  Gfx.drawimage(xstart + (4 * gapsize), ystart + Math.abs(barheight[4]), "corner3");

  //Draw bar 6
  Gfx.fillbox(xstart + (5 * gapsize), ystart + barwidth + Math.abs(barheight[5]), barwidth, Gfx.screenheight, ACCENT3);	
  Gfx.drawimage(xstart + (5 * gapsize), ystart + Math.abs(barheight[5]), "corner3");
}

var scale = [45, 48, 57, 60, 64, 69];
var notecount = 0;
var note = 0;
function playsound(t) {
  note = Math.pow(2,(scale[t]-61)/12);
  Music.playnote(3522376,note,1,1);
  notecount++;
}