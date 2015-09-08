function update(){
  if (Game.time%10==0){
    var pitch = Random.pickfloat(0.8,1.0,1.2,1.3,1.4,1.5);
		Music.playnote(23970703,pitch,1.0,1.0);    
  }
}