Game.title("Simple GUI System");
// This is a simple GUI system that you can copy and paste to use in your own games!

// HOW TO USE:
// 1 - Use this file as a starting point, or copy and paste into a blank file.
// 2 - Your new() function needs to call "gui_setup();".
// 3 - Your update() function needs to call "gui_draw();".

// After that, there are two functions that you can modify to control everything:
// gui_changescene(), which says what buttons to put on the screen, and
// action(), which says what to do when you click on a button.

var examplenumber = 100; //Just used as an example of modifying a variable

//TO DO: Fix font offset bug
var fontxoff = 0;
var fontyoff = -3;

// Stuff you can edit
var gui_buttonwidth = 60;
var gui_buttonheight = 7;
var gui_buttonsounds = [54699906, 48646904, 230309];
var gui_buttoncolours = {
  normal: Col.BLUE,
  highlight: Col.LIGHTBLUE,
  text: Col.WHITE
};


function gui_changescene(s){
  gui_button = []; //Delete all the old buttons
  gui_scene = s;
  
  if(s == "init"){
    gui_addbox(0, 0, Gfx.screenwidth, Gfx.screenheight, Col.NIGHTBLUE);
    gui_addtext(Gfx.screenwidthmid, 45, "THIS IS A SIMPLE GUI SYSTEM THAT YOU CAN", Col.WHITE, Text.CENTER);
    gui_addtext(Gfx.screenwidthmid, 52, "COPY AND PASTE AND USE IN YOUR OWN GAMES", Col.WHITE, Text.CENTER);
    gui_addbutton(66, 65, "COOL", "cool");
  }else if(s == "examples"){
    for(i in 0 ... 10){
      gui_addbox(i*(Gfx.screenwidth/10), 0, Gfx.screenwidth/10, Gfx.screenheight, Gfx.hsl(i*36, 0.5, 0.3));
    }
    
    gui_addbutton(Gfx.screenwidth - 10 - gui_buttonwidth, 10, "BACK", "back");
    
    gui_addimagebutton(Gfx.screenwidthmid+15, 105, "plus", "increase");
    gui_addimagebutton(Gfx.screenwidthmid-23, 105, "minus", "decrease");
    
    gui_setid("exampleid");
    gui_addtext(Gfx.screenwidthmid, 105, Convert.tostring(examplenumber), Col.WHITE, Text.CENTER);
    
    gui_setid("exampleimage");
    gui_addimagebutton(Gfx.screenwidthmid - 8, Gfx.screenheightmid - 8, "smiley", "smileyclick");
  }
}

function gui_buttonaction(act){
  if(act == "cool"){
    Music.playsound(gui_buttonsounds[0], 0.4);
    
    gui_changescene("examples");
  }else if(act == "back"){
    Music.playsound(gui_buttonsounds[0], 0.4);
    
    gui_changescene("init");
  }else if(act == "increase"){
    Music.playsound(gui_buttonsounds[1], 0.4);
    examplenumber++;
    gui_changetext("exampleid", Convert.tostring(examplenumber));
  }else if(act == "decrease"){
    Music.playsound(gui_buttonsounds[1], 0.4);
    examplenumber--;
    gui_changetext("exampleid", Convert.tostring(examplenumber));
  }else if(act == "smileyclick"){
    Music.playsound(gui_buttonsounds[2], 0.4);
    gui_changeposition("exampleimage", Random.int(0,Gfx.screenwidth-16), Random.int(0,Gfx.screenheight-16));
  }
}

function new(){
  Text.setfont("pixel", 1);
  
  //Load in some 8x8 sprite strings for icons
  Gfx.loadimagestring("plus", "3KaaamMzmaaaahZZZSvqb5bvXvZZxZXvXqxKbva");
  Gfx.loadimagestring("minus", "3KaaamMzmaaaahZZZSaaaabvvvZZxZXvvqaaaaa");
  Gfx.loadimagestring("smiley", "ZKaaaj=kNiaaahJLnybvvqafxZXqf5ZZXb5ZZZLxZZZXxX5X5PZxZxX5PZPZxZZZZPZZZZX5PvvZvXvv5r5Pv5KvZZZObvZZuabvvqa");
  
  gui_setup();
}

function update(){
  gui_draw();
}

// Stuff that makes the GUI system work that you probably
// don't want to edit starts here
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function gui_addbutton(xpos, ypos, buttontext, buttonaction){
  gui_button.push( {
    x: xpos, y: ypos,
    width: gui_buttonwidth,
    height: gui_buttonheight,
    text: buttontext,
    action: buttonaction,
    type: "button",
    id: gui_id
  });
  
  if(gui_id != "none") gui_id = "none";
}

function gui_addimagebutton(xpos, ypos, imagename, buttonaction){
  gui_button.push( {
    x: xpos, y: ypos,
    width: gui_buttonwidth,
    height: gui_buttonheight,
    image: imagename,
    action: buttonaction,
    type: "imagebutton",
    id: gui_id
  });
  
  if(gui_id != "none") gui_id = "none";
}

function gui_addtext(xpos, ypos, buttontext, textcol, textalign){
  if(textcol == null) textcol = Col.WHITE;
  if(textalign == null) textalign = Text.LEFT;
    
  gui_button.push( {
    x: xpos, y: ypos,
    text: buttontext,
    col: textcol,
    align: textalign,
    type: "text",
    id: gui_id
  });
  
  if(gui_id != "none") gui_id = "none";
}

function gui_addbox(xpos, ypos, rectwidth, rectheight, rectcol){
  gui_button.push( {
    x: xpos, y: ypos,
    width: rectwidth,
    height: rectheight,
    col: rectcol,
    type: "box",
    id: gui_id
  });
  
  if(gui_id != "none") gui_id = "none";
}

function inbox_w(x:Float, y:Float, x1:Float, y1:Float, w:Float, h:Float):Bool {
  if (x >= x1 && y >= y1) {
    if (x < x1 + w && y < y1 + h) {
      return true;
    }
  }
  return false;
}

function gui_draw(){
  for (i in 0 ... gui_button.length) {
    if(gui_button[i] != null){
      if(gui_button[i].type == "box"){
        Gfx.fillbox(gui_button[i].x, gui_button[i].y, gui_button[i].width, gui_button[i].height, gui_button[i].col);
      }else if(gui_button[i].type == "text"){
        if (gui_button[i].text != "") {
          Text.display(gui_button[i].x + fontxoff, gui_button[i].y + fontyoff, gui_button[i].text, gui_button[i].col, {align:gui_button[i].align });
        }
      }else if(gui_button[i].type == "imagebutton"){     
        gui_button[i].mouseover = false; 
        if (inbox_w(Mouse.x, Mouse.y, gui_button[i].x, gui_button[i].y, Gfx.imagewidth(gui_button[i].image), Gfx.imageheight(gui_button[i].image))) {
          Gfx.drawimage(gui_button[i].x, gui_button[i].y - 2, gui_button[i].image);
          gui_button[i].mouseover = true;
        }else{
          Gfx.drawimage(gui_button[i].x, gui_button[i].y, gui_button[i].image);
        }

        if (gui_button[i].mouseover) {
          if (Mouse.leftclick()) {
            gui_buttonaction(gui_button[i].action);
          }
        }
      }else if(gui_button[i].type == "button"){      
        gui_button[i].mouseover = false;
        if (inbox_w(Mouse.x, Mouse.y, gui_button[i].x, gui_button[i].y, gui_button[i].width, gui_button[i].height)) {
          Gfx.fillbox(gui_button[i].x, gui_button[i].y, gui_button[i].width, gui_button[i].height, gui_buttoncolours.highlight);
          gui_button[i].mouseover = true;
        }else{
          Gfx.fillbox(gui_button[i].x, gui_button[i].y, gui_button[i].width, gui_button[i].height, gui_buttoncolours.normal);
        }
        if (gui_button[i].text != "") {
          Text.display(gui_button[i].x + fontxoff + ((gui_button[i].width-Text.len(gui_button[i].text))/2), gui_button[i].y + fontyoff, gui_button[i].text, gui_buttoncolours.text);
        }

        if (gui_button[i].mouseover) {
          if (Mouse.leftclick()) {
            gui_buttonaction(gui_button[i].action);
          }
        }
      }
    }
  }
}

function gui_changetext(id, newtext){
  for (i in 0 ... gui_button.length) {
    if(gui_button[i].id == id){
      gui_button[i].text = newtext;
    }
  }
}

function gui_changeposition(id, x, y){
  for (i in 0 ... gui_button.length) {
    if(gui_button[i].id == id){
      gui_button[i].x = x;
      gui_button[i].y = y;
    }
  }
}


function gui_setid(id){
  gui_id = id;
}

function gui_setup(){
	gui_id = "none";
  gui_button = [];
  
  gui_changescene("init");
}