var c = 0x112233;
trace(c.toString(16));
var h = Gfx.gethue(c);
var s = Gfx.getsaturation(c);
var l = Gfx.getlightness(c);
trace(h,s,l);
//to convert them back
var c2 = Gfx.hsl(h,s,l);
//.toString(16) converts integers to strings, base 16
trace(c2.toString(16));
trace("close enough!");