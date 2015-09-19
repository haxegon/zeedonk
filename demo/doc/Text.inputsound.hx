var textbuffer = ["Mash the keyboard :D"];
var currentline = 1;

var randombeeps = [
  65301706, 10105706, 95847906, 91450706, 4503306, 10652106, 88072706, 74024506,
  8580706, 52475506, 93330906, 64377106, 46584506, 89493106, 59225506, 36197306
];

function update(){
	Text.inputsound=randombeeps[Random.int(0, randombeeps.length-1)];
  for(i in 0 ... textbuffer.length){
    Text.display(0, i * 9, textbuffer[i], Col.PINK);
  }
  if(Text.input(0, currentline * 9, ">", Col.PINK, Col.PINK)){
    textbuffer.push(Text.getinput());
    currentline++;
  }
}