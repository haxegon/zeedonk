var textbuffer = [];
var currentline = 0;

function update(){
  for(i in 0 ... textbuffer.length){
    Text.display(0, i * 9, textbuffer[i], 0x00FF00);
  }
  if(Text.input(0, currentline * 9, ">", 0x00FF00, 0x00FF00)){
    textbuffer.push(Text.getinput());
    currentline++;
  }
}