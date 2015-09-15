function genString(){
  var s="";
  var wordcount =Random.int(3,6);
  for (i in 0...wordcount){
    s+=Random.pickstring("a","rose","by","any","other","name","would","smell","as","sweet")+" ";
  }
  return s;
}

var strings=[];

function update(){
  if(Game.time%20==0){
    if (strings.length*Text.height()>Gfx.screenheight) {
      strings.splice(0,1);
    }
    strings.push(genString());
  }
  for (i in 0...strings.length){
    Text.display(0,i*Text.height(),strings[i]);
  }
}