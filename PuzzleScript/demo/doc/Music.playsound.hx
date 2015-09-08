Music.playsound(132);

function update() {
  if (Game.time%5==0){
	  Music.playsound(Math.floor(Game.time/15));
  }
  Gfx.fillbox(0,0,Gfx.screenwidth,Gfx.screenheight,0xff0000);
  Gfx.fillbox(10,10,100,100,0xff0000);
  Text.display(Text.CENTER, Text.CENTER, "HELLO SAILOR");
}