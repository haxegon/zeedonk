var r = window.devicePixelRatio;
var w = Math.round(window.innerWidth * r);
var h = Math.round(window.innerHeight * r);

var c = document.getElementById('openfl-content');
c.style.width = w + 'px';
c.style.height = h + 'px';
c.style.transform = 'scale('+(1/r)+','+(1/r)+')';
c.style.transformOrigin = '0 0';
lime.embed ("openfl-content", w, h, "000000");