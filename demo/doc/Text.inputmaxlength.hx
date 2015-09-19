var textbuffer = "enter a number bigger than 99\n";
var currentline = 1;
Text.inputmaxlength=2;

function update(){
  Text.display(0, 0, textbuffer, Col.ORANGE);
  if(Text.input(0, currentline * 16, ">", Col.ORANGE, Col.ORANGE)){
    textbuffer += "\n" + Text.getinput()+ "\nbwa ha ha!";
    currentline++;
  }
}