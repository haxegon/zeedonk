var c = 0x112233;
var r = Gfx.getred(c);
var g = Gfx.getgreen(c);
var b = Gfx.getblue(c);
trace(r,g,b);
//.toString(16) converts integers to strings, base 16
trace(r.toString(16),g.toString(16),b.toString(16));