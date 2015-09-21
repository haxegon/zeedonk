//broken right now, cf https://github.com/increpare/zeedonk/issues/339

var a = ["a","b","c"];
var b = a.copy();
b[0]="Z";
trace(a);
trace(b);