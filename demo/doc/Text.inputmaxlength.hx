var textbuffer = ["enter a number bigger than 99"];
var currentline = 1;

function update(){
  Text.inputmaxlength=2;
  for(i in 0 ... textbuffer.length){
    Text.display(0, i * 18, textbuffer[i], Col.ORANGE);
  }
  if(Text.input(0, currentline * 18, ">", Col.ORANGE, Col.ORANGE)){
    textbuffer.push(Text.getinput()+"\nbwa ha ha!");
    currentline++;
  }
}