var justpressedcount=0;
var pressedcount=0;
var justreleasedcount=0;

function update(){
  if (Input.justpressed(Key.A)) justpressedcount++;
  if (Input.pressed(Key.A)) pressedcount++;
  if (Input.justreleased(Key.A)) justreleasedcount++;
  
  Text.display(0,10,"justpressed "+justpressedcount);
  Text.display(0,20,"justpressed "+pressedcount);
  Text.display(0,30,"justpressed "+justreleasedcount);
}