function isEven(x){ return x%2==0; }

var a = [1,2,3,4,5,6];
var b = a.filter(isEven);
trace(b);