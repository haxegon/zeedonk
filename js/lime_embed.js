window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


function onresize(e){
	var r = window.devicePixelRatio;
	var w = Math.round(window.innerWidth * r);
	var h = Math.round((window.innerHeight-20) * r);

	var c = document.getElementById('openfl-content');
	c.style.width = w + 'px';
	c.style.height = h + 'px';
	c.style.transform = 'scale('+(1/r)+','+(1/r)+')';
	c.style.transformOrigin = '0 0';
	var content = document.getElementById("openfl-content");		
	var canvas = content.childNodes[0];
	canvas.width=w;
	canvas.height=h;
	var ctx = canvas.getContext("2d");
	ctx.width=w;
	ctx.height=h;
}


var r = window.devicePixelRatio;
var w = Math.round(window.innerWidth * r);
var h = Math.round((window.innerHeight-20) * r);

var c = document.getElementById('openfl-content');
c.style.width = w + 'px';
c.style.height = h + 'px';
c.style.transform = 'scale('+(1/r)+','+(1/r)+')';
c.style.transformOrigin = '0 0';
<<<<<<< HEAD
lime.embed ("openfl-content", 0,0, null);
=======
lime.embed ("openfl-content", 0,0, "000000");
>>>>>>> bdad61832d4155d6c65fd88f8187d24e8b674667
window.addEventListener("resize", onresize, false);