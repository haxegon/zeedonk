var roll=0;
var color=0;
function update(){
  if (Input.justpressed(Key.R)){
    roll=Random.int(1,6);
    color=Random.pickint(0xff0000,0x00ff00,0x0000ff);
  } 
  if (roll==0){
  	Text.display(Text.CENTER,Text.CENTER,"Press R to Roll a dice");
    return;
  } 
  Text.display(Text.CENTER,Text.CENTER,"You rolled a "+roll,color);
}