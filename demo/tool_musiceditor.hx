Game.title="tinybox";
Game.homepage="www.google.com";
Text.setfont(Font.PIXEL,1);

var charWidth =5;

var mainButton = 0x0000ff;
var mainHighlight = 0x5555ff;
var mainHighlightish = 0x8888ff;
var mainHighlighter = 0xaaaaff;

var panelCol = 0x000088;
var panelColLight = 0x0000aa;
var backgroundCol = Col.NIGHTBLUE;
var textCol = 0xeeeeee;
var darkText=0x888888;

var playing=false;
var playTick=0;

var instCols = [
  [0x880088,0xff55ff],
  [0x888800,0xffff55],
  [0x880000,0xff5555],
  [0x008888,0x55ffff],
  [0x008800,0x55ff55]
];

var blackNotes = [false,true,false,true,false,false,true,false,true,false,true,false];

var notenames=["c","c#","d","d#","e","f","f#","g","g#","a","a#","b"];
/*
FILE
patternLength : [1-16]
cellDuration : [1..10]
instruments : 5*int8
sequences : seqSlotCount*[1..12]
notes : seqCount*
[ noteCount * ([1..128],[1..16],[1..16],[] )]
*/
// a note is [note, length, onset, amplitude]
var dat = {
  patternLength:16,
  cellDuration:3,
  instruments:[57803926,67910236,85155178,1,14620627],
  notes:[
    [[],[],[],[],[]]
  ]
};

var B62 = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
           "à","á","â","ä","æ","ã","å","ā","è","é"        
          ];

/*
var dat = {
patternLength:16,
cellDuration:3,
instruments:[1,2,61,62,63],
sequences:[0],
notes:[]};*/

function stripWhitespace(s){
  var result="";
  for(i in 0...s.length){
    var c = s[i];
    if (c==" "||c=="\t"||c=="\n"){
      continue;
    }
    result+=c;
  }
  return result;
}
function loadDat(s){
  s = stripWhitespace(s);
  s = unmakeRLE(s);
  var arr = [];
  for(ci in 0...s.length){
    var c = s[ci];
    arr.push(B62.indexOf(c));
  }
  dat = {};

  var i=0;
  dat.patternLength=arr[i];

  i++;
  dat.cellDuration=arr[i];

  dat.instruments=[];
  for (j in 0...5){
    var n=0;
    var p = 1;
    for (k in 0...5){
      i++;
      n = n + p*arr[i];      
      p=p*62;
    }
    dat.instruments.push(n);
  }


  var outputAr=[];

  i++;
  var sequenceCount=arr[i];
  outputAr.push(arr[i]);
  dat.notes=[];
  for (j in 0...sequenceCount){       
    var sequence  = [[],[],[],[],[]];
    for (m in 0...5){
      i++;      
      var noteCount =arr[i];
      outputAr.push(arr[i]);
      var noteSeq =sequence[m];
      for(k in 0...noteCount){
        i++;
        var v1 = arr[i];
        outputAr.push(arr[i]);
        i++;
        var v2 = arr[i];
        outputAr.push(arr[i]);
        var v = v1+62*v2;

        noteSeq.push([v]);  
      }
      for (l in 1...4){
        for(m in 0...noteCount){
          i++;
          noteSeq[m].push(arr[i]);
          outputAr.push(arr[i]);
        }
      }
    }
    dat.notes.push(sequence);
  }
}

function saveDat(){  
  var intArray =[];
  intArray.push(dat.patternLength);
  intArray.push(dat.cellDuration);
  for ( i in 0...5){
    var n = dat.instruments[i];
    for ( j in 0...5){
      var p1 = Math.pow(62,j);
      var v = Convert.toint(n/p1)%62;
      intArray.push(v);
    }
  }

  var outputAr =[];
  intArray.push(dat.notes.length);  
  outputAr.push(intArray[intArray.length-1]);
  for(r in dat.notes){
    for (i in 0...5){
      var instNotes = r[i];
      intArray.push(instNotes.length);
      for (n in instNotes){
        intArray.push(n[0]%62);
        intArray.push(Convert.toint(n[0]/62)%62);    
      }
      for (j in 1...4){
        for (n in instNotes){            
          intArray.push(n[j]);
        }
      }
    }
  }

  var result="";
  for( n in intArray){
    result = result+B62[n];    
  }

  result = makeRLE(result);
  return result;
}

function makeRLE(s){
  var result ="";
  var lastChar=s[0];
  var lastCharCount=1;
  for (i in 1...s.length){
    var c = s[i];
    if (c == lastChar){
      lastCharCount++; 
    } else {
      if (lastCharCount>1){
        result = result+lastCharCount;
      }
      result = result + lastChar;
      lastChar = c;
      lastCharCount = 1;

    }
  }

  if (lastCharCount>1){
    result = result+lastCharCount;
  }
  result = result + lastChar;

  return result;
}

function unmakeRLE(s){
  var result ="";
  var lastInt=0;
  var i = 0;
  while(i<s.length){
    var c = s[i];
    while (c=="0"||c=="1"||c=="2"||c=="3"||c=="4"||c=="5"||c=="6"||c=="7"||c=="8"||c=="9"){
      lastInt=lastInt*10+Convert.toint(c);
      i++;
      c=s[i];
    }
    if (lastInt==0){
      lastInt=1;
    }

    for (i in 0...lastInt){
      result = result +c;    
    }
    i++;
    c=s[i];
    lastInt=0;
  }

  return result;
}




var channelOrder = [0,1,2,3,4];           

var selectedInst =0;
var noteLength =3;
var lastl = noteLength;           

var maxVol =9;
var noteVol =maxVol;
var selectedSequence =0;
var bottomNote=60;


var backups=[];
function MakeBackupCopy(){
  var oldDat = saveDat();
  if (backups.length>0&&oldDat==backups[backups.length-1]){
    return;
  }
  backups.push(oldDat);
}

function DoUndo(){
  if (backups.length==0){ return; }
  playing=false;
  var backup=backups.pop();
  loadDat(backup);
  if (selectedSequence>dat.notes.length){
    selectedSequence=dat.notes.length-1;
  }
}

function drawButton(text,x,y,textcolor,color,colorhover) {
  var width=35;
  var height=9;
  var dx = Mouse.x-x;
  var dy = Mouse.y-y;

  var collide = !(dx<0||dx>=width||dy<0||dy>=height);

  var click = collide && Mouse.leftclick();

  if (collide&& !click){
    color=colorhover;
  }
  Gfx.fillbox(x,y,width,height,color);
  Text.display(x+4, y+2, text, textcolor);
  return click;
}


function collideBox(x,y,w,h) {
  var dx = Mouse.x-x;
  var dy = Mouse.y-y;


  var collide = !(dx<0||dx>=w||dy<0||dy>=h);

  if (collide==false){    
    return 0;    
  }
  if (Mouse.leftclick()){
    return 2;
  }
  if (Mouse.rightclick()){
    return 3;
  }
  return 1;
}

var scrollt=0;
var scrollInterval=12;

function getNum(){
  if (Input.justpressed(Key.ONE)){
    return 1;
  }
  if (Input.justpressed(Key.TWO)){
    return 2;
  }
  if (Input.justpressed(Key.THREE)){
    return 3;
  }
  if (Input.justpressed(Key.FOUR)){
    return 4;
  }
  if (Input.justpressed(Key.FIVE)){
    return 5;
  }
  if (Input.justpressed(Key.SIX)){
    return 6;
  }
  if (Input.justpressed(Key.SEVEN)){
    return 7;
  }
  if (Input.justpressed(Key.EIGHT)){
    return 8;
  }
  if (Input.justpressed(Key.NINE)){
    return 9;
  }
  if (Input.justpressed(Key.ZERO)){
    return 0;
  }
  return -1;
}

function startPlay() {
  playing=true;
  playTick=selectedSequence*dat.patternLength*dat.cellDuration -1;
}

function stopPlay(){
  playing=false;
}

function PushNewSequence(){
  MakeBackupCopy();
  var minNotFound=0;
  var changed=true;
  dat.notes.push([[],[],[],[],[]]);
}

var plusCounter=0;
var minusCounter=0;

var copyBuffer=null;


function DecreasePatternLength(){
  dat.patternLength--;
  trace("boops");

  for (sequence in dat.notes){
    for (channel in sequence){
      for (i in 1-channel.length...1){
        // a note is [note, length, onset, amplitude]
        var n = channel[-i];
        if (n[2]==dat.patternLength){
          channel.splice(-i,1);
        }
        if (n[2]+n[1]-1==dat.patternLength){
          n[1]--;
        }
      }
    }
  }
}   

function DoCopy(){
  var toCopy=dat.notes[selectedSequence];
  copyBuffer=[];
  for (a in toCopy){
    r1=[];
    for (b in a){
      r2=[];
      for (c in b){
        r2.push(c);   
      }
      r1.push(r2);
    }
    copyBuffer.push(r1);
  }
}

function DoPaste(){
  if (copyBuffer==null){
    return;
  }
  dat.notes[selectedSequence]=copyBuffer;
  DoCopy();
}


function GenerateRandom(){
  dat = {
    patternLength:Random.int(3,16),
    cellDuration:Random.int(1,10),
    instruments:[Random.int(0,99999999),Random.int(0,99999999),Random.int(0,99999999),Random.int(0,99999999),Random.int(0,99999999)],
    notes:[],
  };
  var sequenceCount = 11;
  var noteDensity=Random.float(0.1,0.5);
  var preferredLengths=[];
  for (i in 0...5){
    preferredLengths.push(Random.int(1,dat.patternLength));
  }
  for (i in 0...sequenceCount){
    var sequence=[];
    for (j in 0...5){
      var channel=[];
      if (!Random.occasional()) {
        var maxOnset = dat.patternLength-preferredLengths[j];
        for (k in 0...(maxOnset)){
          var r = Random.float(0,1);
          if (k%4==0){
            r=r*r;
          }
          if(r<noteDensity){
            // a note is [note, length, onset, amplitude]
            channel.push([132-12,preferredLengths[j],Random.int(1,maxOnset),Random.int(1,7)]);
          }     
        }
      }
      sequence.push(channel);
    }
    dat.notes.push(sequence);
  }
  for (i in 0...sequenceCount){
    selectedSequence=i;
    DoCopy();
    selectedSequence=Random.int(0,dat.notes.length);
    DoPaste();
  }
}

var helpmode=false;

function doHelp(){
  Gfx.clearscreen(backgroundCol);
  if (Input.justpressed(Key.SPACE)||Input.justpressed(Key.H)||Input.justpressed(Key.ESCAPE)||Mouse.leftclick()){
    helpmode=false;
  }
  Text.changesize(2.5);
  var titleTop=20;
  Text.display(Text.CENTER,10,"tinybox");
  Text.changesize(1);
  var i=0;
  var textTop=titleTop+15;
  Text.display(3,textTop+13*(i++),"Shortcuts:");
  Text.display(3,textTop+13*(i++),"~ Arrow keys or wsad,to scroll/set note length.");
  Text.display(3,textTop+13*(i++),"~ +/- or q and e to control volume.");
  Text.display(3,textTop+13*(i++),"~ Right click on instruments to randomize,");
  Text.display(3,textTop+13*(i++),"~ Or press numbers when hovering to enter.");
  Text.display(3,textTop+13*(i++),"~ You can press c/v to copy/paste sequences.");
  Text.display(3,textTop+13*(i++),"~ Right click notes/sequences to remove.");
  Text.display(3,textTop+13*(i++),"~ Z to undo.");
}

function update() {
  if (helpmode){
    doHelp();
    return;
  }
  if (Input.justpressed(Key.H)){
    helpmode=true;
  }
  if (Input.justpressed(Key.Z)){
    DoUndo();
  }
  if (Input.justpressed(Key.R)){
    GenerateRandom();
  }
  if (Input.justpressed(Key.C)){
    DoCopy();
  }
  if (Input.justpressed(Key.V)||Input.justpressed(Key.P)){
    DoPaste();
  }
  if (Input.justpressed(Key.SPACE)||Input.justpressed(Key.ENTER)){
    if (playing){
      playing=false;
    } else {
      startPlay();
    }
  }
  if ((Input.pressed(Key.DOWN)||Input.pressed(Key.S))&&bottomNote>0){
    bottomNote--;
  }

  if ((Input.pressed(Key.UP)||Input.pressed(Key.W))&&bottomNote<132-24){
    bottomNote++;
  }
  if (Input.pressed(Key.LEFT)||Input.pressed(Key.A)){
    lCounter--;
    if (lCounter<=0){
      if (lastl>1){
        noteLength=lastl-1;
        lastl=noteLength;
        lCounter=5;
      } 
    }
  } else {
    lCounter=0;      
  }

  if (Input.pressed(Key.RIGHT)||Input.pressed(Key.D)){
    rCounter--;
    if (rCounter<=0){
      if (noteLength<16){
        noteLength++;
        lastl=noteLength;
        rCounter=5;
      } 
    }
  } else {
    rCounter=0;      
  }


  if (Input.pressed(Key.PLUS)||Input.pressed(Key.E)){
    plusCounter--;
    if (plusCounter<=0){
      if (noteVol<maxVol){
        noteVol++;
        plusCounter=4;
      } 
    }
  } else {
    plusCounter=0;      
  }


  if (Input.pressed(Key.MINUS)||Input.pressed(Key.Q)){
    minusCounter--;
    if (minusCounter<=0){
      if (noteVol>1){
        noteVol--;
        minusCounter=4;
      } 
    }
  } else {
    minusCounter=0;      
  }

  scrollt--;
  Gfx.clearscreen(backgroundCol);

  //draw sequence panel
  var cellCount=12;    
  var colLength = Math.min(dat.notes.length+1,12);
  var seqTop=14;
  Gfx.fillbox(1,seqTop,13,11+colLength*10,panelCol);
  Text.display(2,seqTop+3,"SEQ",textCol);

  for (i in 0 ... dat.notes.length) {
    var tCol=darkText;
    var collide=collideBox(2,seqTop+11+i*10,11,9);
    var col =i==selectedSequence?mainHighlighter:mainHighlight;
    if (collide==1&&i!=selectedSequence){
      col=mainHighlightish;
      tCol=Col.GREY;
    } 
    if (collide==2){
      selectedSequence=i;
      playTick=selectedSequence*dat.patternLength*dat.cellDuration -1;
    } 
    if (collide==3){
      if (dat.notes.length>1){
        dat.notes.splice(i,1);
        if (selectedSequence>=i&&selectedSequence>0){
          selectedSequence--;
        }
        break;
      }
    }
    Gfx.fillbox(2,seqTop+11+i*10,11,9,col);   
    var s = Convert.tostring(i+1);
    if (i<9){
      s="0"+s;
    }
    Text.display(4,seqTop+11 + i * 10+2,s ,tCol);
  }
  if (dat.notes.length<12){
    var i =dat.notes.length;
    var collide=collideBox(2,seqTop+11+i*10,11,9);
    var col=Col.GREY;
    if (collide==1){
      col=Col.WHITE;
    }
    if (collide==2){
      PushNewSequence();
    }
    Text.display(6,seqTop+11 + i * 10+2,"+" ,col);   
  }

  var xOffset=Gfx.screenwidth-76;
  var yOffset=3;


  //bpm box 
  var collide = collideBox(xOffset+46,1,26,7);
  if (collide==2&&dat.cellDuration>1){
    dat.cellDuration--;      
  }
  if (collide==3&&dat.cellDuration<10){
    dat.cellDuration++;
  } 
  var col= collide==1?mainHighlighter:mainHighlight;
  Gfx.fillbox(xOffset+39,yOffset,20,9,panelCol);
  Gfx.fillbox(xOffset+59,yOffset,15,9,col);
  Text.display(xOffset+44,yOffset+2,"bpm",textCol);
  var bpmString=Convert.tostring(Convert.toint(450/dat.cellDuration));
  Text.display(xOffset+61,yOffset+2,bpmString,textCol);

  yOffset+=12;
  //notes box
  collide = collideBox(xOffset+39,yOffset-1,35,9);
  if (collide==2&&dat.patternLength<16){
    dat.patternLength++;      
  } 
  if (collide==3&&dat.patternLength>0){
    trace(collide);

    DecreasePatternLength();
  }
    
  var col= collide==1?mainHighlighter:mainHighlight;
  Gfx.fillbox(xOffset+39,yOffset-1,24,9,panelCol);
  Gfx.fillbox(xOffset+63,yOffset-1,11,9,col);
  Text.display(xOffset+42,yOffset+1,"notes",textCol);
  var noteStr = Convert.tostring(dat.patternLength);
  if (dat.patternLength<10){
    noteStr="0"+noteStr;
  }
  Text.display(xOffset+65,yOffset+1,noteStr,textCol);

  var instPanelX=29;
  var instPanelY=13;
  //instruments box
  Gfx.fillbox(instPanelX+124,instPanelY-10,48,10,panelCol);
  Gfx.fillbox(instPanelX-5,instPanelY-1,177,11,panelCol);
  Text.display(instPanelX+127,instPanelY-8,"instruments",textCol);

  //draw sequencer
  Gfx.fillbox(instPanelX+selectedInst*35-4,instPanelY,35,9,0xffffff);

  var k=0;
  for (k in 0 ... 5){
    var c = collideBox(instPanelX-4+k*35,instPanelY,33+2,7+2);
    if (c>0){
      if (k!=selectedInst){
        Gfx.fillbox(instPanelX-4+k*35,instPanelY,33+2,7+2,Col.GREY);    
      }
      if (c==2){
        setInstrument(k,true);
      }

    }

    if (c==3){
      MakeBackupCopy();
      dat.instruments[k]=Random.int(0,99999999);
      trace(dat.instruments[k]);
      Music.playnote(dat.instruments[k],1,1,1.0);
    }
    {
      Gfx.fillbox(instPanelX-3+k*35,instPanelY+1,33,7,instCols[k][0]);
    }
    var n=dat.instruments[k];
    Text.display(instPanelX-2+k*35,instPanelY+2,Convert.tostring(n),instCols[k][1]);
    if (c>0){
      var n = getNum();
      if (n>=0){
        dat.instruments[k]=((dat.instruments[k]*10) % 100000000)+n;
        trace(dat.instruments[k]);
      }
      if (Input.justpressed(Key.BACKSPACE)){
        dat.instruments[k]=0;
      }
    }

  }

  //draw note

  var buttonx=Gfx.screenwidth-37;
  var buttonStep=10;
  var buttonYOffset=26+buttonStep*1;
  if (drawButton("play   ",buttonx,buttonYOffset+buttonStep*0,textCol,mainButton,mainHighlight)){
    startPlay();
  }
  if (drawButton("stop   ",buttonx,buttonYOffset+buttonStep*1,textCol,mainButton,mainHighlight)){
    playing=false;
  }

  if (drawButton("clr pat",
                 buttonx,buttonYOffset+buttonStep*3,textCol,mainButton,mainHighlight)){
    MakeBackupCopy();
    dat.notes[selectedSequence]=[[],[],[],[],[]];
  }

  if (drawButton("new   ",buttonx,buttonYOffset+buttonStep*7,textCol,mainButton,mainHighlight)){
    MakeBackupCopy();
    dat = {
      patternLength:16,
      cellDuration:3,
      instruments:[57803926,67910236,85155178,1,14620627],
      sequences:[0],
      notes:[
        [[],[],[],[],[]],
      ],
    };
    selectedSequence=0;
  }


  if (drawButton("save   ",buttonx,buttonYOffset+buttonStep*6,textCol,mainButton,mainHighlight)){
    if (Game.editor())
    {
      trace(saveDat());
    } else {
      Game.prompt("Music data string:",saveDat());
    }
  }



  if (drawButton("load   ",buttonx,buttonYOffset+buttonStep*7,textCol,mainButton,mainHighlight)){
    var ld = Game.prompt("Enter music data string:","");
    trace(ld);
    if (ld!=null&&ld.length>0){loadDat(ld);}
  }

  if (drawButton("help   ",buttonx,buttonYOffset+buttonStep*8+10,textCol,mainButton,mainHighlight)){
    helpmode=true;
  }
  //draw grid
  var gx=24;
  var gy=25;
  var cellWidth=11;
  var cellHeight=10;
  var xCells=dat.patternLength;
  var yCells=12;

  Gfx.fillbox(gx,gy,xCells*(cellWidth)+1,yCells*(cellHeight)+1,panelCol);


  var octaveDisplay = Math.floor((bottomNote+11)/12);
  var cNotePos = ((bottomNote+11)%12);
  //  trace((gx-5)+","+(gy+cellHeight*cNotePos)+","+octaveDisplay);
  if (octaveDisplay>9){
    Text.display(gx-11,gy+cellHeight*(cNotePos)+3,Convert.tostring(octaveDisplay));
  } else {
    Text.display(gx-4,gy+cellHeight*(cNotePos)+3,Convert.tostring(octaveDisplay));    
  }
  for (i in 0...12){
    Text.display(gx-8,gy+cellHeight*(i)+3,notenames[(bottomNote+11-i)%12],Col.GREY);
  }
  if (octaveDisplay>0){
    Gfx.fillbox(gx-8,gy+cellHeight*(cNotePos+1),xCells*cellWidth+8,1,0x555555);
  }
  for (i in 0 ... xCells){
    for (j in 0 ... yCells){
      var col=mainHighlight;
      if (i%4==0){
        col=mainHighlighter;
      } else if (!blackNotes[(137-bottomNote+j)%12]){
        col=mainHighlightish;   
      }
      Gfx.fillbox(gx+1+cellWidth*i,gy+1+cellHeight*j,cellWidth-1,cellHeight-1,col); 

    }
  }

  //draw notes
  for (c2 in 0...5){
    var c = channelOrder[c2];
    //    trace(c,c2);
    var channel = dat.notes[selectedSequence][c];  
    var colIndex = c==selectedInst?1:0;
    var col = instCols[c][colIndex];
    //    trace(c+","+selectedInst+","+col);
    for (n in channel){
      // var n = channel[nIndex];
      // a note is [note, length, onset, amplitude]
      var notePos = n[0];
      var dNote = notePos-bottomNote;   
      var x = gx+1+cellWidth*(n[2]);
      var l = n[1];
      if (dNote<=0){
        //draw note on bottom
        var y = 145;
        Gfx.fillbox(x,y,cellWidth*l-1,1,col);
      } else if (dNote>12){
        //draw note on top
        var y = 23;
        Gfx.fillbox(x,y,cellWidth*l-1,1,col);
      } else {
        //draw note on grid
        var y = gy+2+cellHeight*(12-dNote);
        var l = n[1];
        var v = n[3];
        Gfx.fillbox(x,y+maxVol-v-1,cellWidth*l-1,v,col);
      }
    }
  }

  var gridWidth = cellWidth*xCells;
  var gridHeight = cellHeight*yCells;
  var dx=Mouse.x-gx;
  var dy=Mouse.y-gy;
  if (Mouse.leftclick()){ 
    pressedDownOnCanvas=false;
  }
  if (dx>=0 && dx<gridWidth && dy>=0 && dy<gridHeight){
    if (Mouse.leftclick()){
      pressedDownOnCanvas=true;      
    }
    /*
if (bottomNote>0 && Mouse.mousewheel< -1 ){
bottomNote--;
scrollt=scrollInterval;
} else if (bottomNote<132-12&& Mouse.mousewheel>1 ){
bottomNote++;
scrollt=scrollInterval;
}*/
    if (Input.justpressed(Key.ONE)){
      setInstrument(0,false);
    }
    if (Input.justpressed(Key.TWO)){
      setInstrument(1,false);
    }
    if (Input.justpressed(Key.THREE)){
      setInstrument(2,false);
    }
    if (Input.justpressed(Key.FOUR)){
      setInstrument(3,false,false);
    }
    if (Input.justpressed(Key.FIVE)){
      setInstrument(4,false);
    }

    var sx = Math.floor(dx/cellWidth);
    var sy = Math.floor(dy/cellHeight);
    var l = noteLength;
    //check if it's in range
    if (sx+l>=xCells){
      l=xCells-sx;
      lastl=l;
    }
    Gfx.drawbox(gx+1+cellWidth*sx,gy+1+cellHeight*sy+maxVol-noteVol-1,cellWidth*l-1,noteVol+1,0xffffff); 
    if (Mouse.leftheld()&&pressedDownOnCanvas){
      if (Mouse.leftclick()){
        MakeBackupCopy();
      }
      var clickX = sx;
      var clickY = bottomNote+12-sy;
      for (i in 0...l){
        if (Mouse.leftclick()){
          MakeBackupCopy(); 
          blockNote(clickX+i,clickY);         
        } else {
          deleteNote(clickX+i,clickY); 
        }
      }
      if (oldAddX>=0){
        blockNote(oldAddX,oldAddY);
      }
      var newNote=[clickY,l,clickX,noteVol];
      dat.notes[selectedSequence][selectedInst].push(newNote);
      if (Mouse.leftclick()){
        DoPlayNote(selectedInst,newNote);
      }
      oldAddX=clickX;
      oldAddY=clickY;
    } else {
      oldAddX= -1;
      oldAddY= -1;
    }

    if (Mouse.rightheld()){
      //note clicked on
      var clickX = sx;
      var clickY = bottomNote+12-sy;
      deleteNote(clickX,clickY);
    }
  } else {
    if (Mouse.leftheld()==false){
      oldAddX= -1;
      oldAddY= -1;
    }
  }

  Text.display(2,4,"tinybox music editor",Col.DARKBROWN);


  if (playing){
    playTick++;    
    var pieceLengthInTicks = dat.notes.length*dat.patternLength*dat.cellDuration;
    playTick = playTick%pieceLengthInTicks;
    var globalCell = Convert.toint(playTick/dat.cellDuration);
    var playPattern = Convert.toint(globalCell/dat.patternLength);
    selectedSequence=playPattern;
    var patternProgress = globalCell-dat.patternLength*playPattern;

    if (playTick%dat.cellDuration==0){
      TryPlayNote(patternProgress);
    }

    Gfx.fillbox(gx+cellWidth*patternProgress,gy,1,gy*cellHeight,Col.WHITE);

  }

}

function DoPlayNote(c,n){
  var notePos = n[2];
  var pitch = Math.pow(2,(n[0]-61)/12);
  var noteLength = n[1]*dat.cellDuration/30;
  Music.playnote(dat.instruments[c],pitch,noteLength,n[3]/maxVol);
}

function TryPlayNote(x){
  for (c in 0...5){
    var channel = dat.notes[selectedSequence][c];  
    for (n in channel){
      // var n = channel[nIndex];
      // a note is [note, length, onset, amplitude]
      var notePos = n[2];
      if (notePos==x){  
        DoPlayNote(c,n);
      }         
    }    
  }
}  

function setInstrument(k,play){
  if (play){
    Music.playnote(dat.instruments[k],1,1,1.0);
  }
  selectedInst=k;
  var kIndex=channelOrder.indexOf(k);
  channelOrder.splice(kIndex,1);
  channelOrder.push(k);
}

function deleteNote(clickX,clickY){
  for (n in dat.notes[selectedSequence][selectedInst]){
    var noteX=n[2];
    var noteL=n[1];
    var noteY=n[0];
    if (clickY==noteY && clickX>=noteX && clickX<(noteX+noteL)){   
      var arr = dat.notes[selectedSequence][selectedInst];
      var noteIndex = arr.indexOf(n);
      arr.splice(noteIndex,1);
      break;
    }
  }
}


function blockNote(clickX,clickY){
  for (n in dat.notes[selectedSequence][selectedInst]){
    var noteX=n[2];
    var noteL=n[1];
    var noteY=n[0];
    if (clickY==noteY && clickX>=noteX && clickX<(noteX+noteL)){ 
      if (clickX==noteX){
        //delete it
        var arr = dat.notes[selectedSequence][selectedInst];
        var noteIndex = arr.indexOf(n);
        arr.splice(noteIndex,1);
        break;
      } else {
        //resize it
        n[1]=clickX-noteX;
      }
    }
  }
}