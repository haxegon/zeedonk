//this is generated by opening the music editor, making a song, and hit "save";
var musicDat = "qdyBHædyIåKeMUsVfb4aJEvéacdfbebab3daei3hbâaqabacáaâa2bai2gbäa2egdæaåaèa3daei3hbäaqabacáaâa2bai2gbäa2eg";

var playing=false;

function startStop(){
  if (playing) {
	  Music.stopmusic();    
    playing=false;
  } else {
	  Music.playmusic(musicDat);
    playing=true;
  }
}

function update(){
  if (Input.justpressed(Key.SPACE)){
    startStop();
  }
  if (playing){
	  Text.display(Text.CENTER,Text.CENTER,"PRESS SPACE TO STOP MUSIC");
  } else {
	  Text.display(Text.CENTER,Text.CENTER,"PRESS SPACE TO START MUSIC");    
  }
}