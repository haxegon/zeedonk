var i=0;
function update(){
	i++;
	Text.display(0,0,Convert.tostring(i));
  if (Input.justpressed(Key.R)){
    Game.restart();
  }
}