var musicDat = "qbyBHædyIåKeMUsVfb3agJEvéabfgbdbebjbhb5dbigjm5h4a";

Music.musicloop = false;

function update(){
  if (Input.justpressed(Key.ENTER)){
    Music.playmusic(musicDat);
    Music.musicloop=!Music.musicloop;
  }
}