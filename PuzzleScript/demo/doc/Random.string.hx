var strings=[];

function update(){
  if(Game.time%2==0){
    if (strings.length*Text.height()>Gfx.screenheight) {
	    strings.splice(0,1);
    }
    strings.push(Random.string(Random.int(10,30)));
  }
  for (i in 0...strings.length){
    Text.display(0,i*Text.height(),strings[i]);
  }
}