var textbuffer = ["Mash the keyboard :D"];
var currentline = 1;
Text.inputsound=86094507;
function update(){
  for(i in 0 ... textbuffer.length){
    Text.display(0, i * 9, textbuffer[i], Col.PINK);
  }
  if(Text.input(0, currentline * 9, ">", Col.PINK, Col.PINK)){
    textbuffer.push(Text.getinput());
    currentline++;
  }
}