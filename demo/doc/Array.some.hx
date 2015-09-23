var a = ["cat","ball","balloon","crying","parents","rain"];
var b = a.slice(2,4);
function longWord(current,index,array){
  return current.length>3;
}

var someLong = a.some(longWord);
trace(someLong);