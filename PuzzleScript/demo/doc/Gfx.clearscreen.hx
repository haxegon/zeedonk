function update(){
	var t = (5*Game.time)%256;
	Gfx.clearscreen(t+t*256+t*256*256);
}