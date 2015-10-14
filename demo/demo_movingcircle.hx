var x = Gfx.screenwidthmid;
var y = Gfx.screenheightmid;
var r = 10;
var speed = 3;

function update() {
  if (Input.pressed(Key.LEFT)){
    x-=speed;
  }
  if (Input.pressed(Key.RIGHT)){
    x+=speed;
  }
  if (Input.pressed(Key.UP)){
    y-=speed;
  }
  if (Input.pressed(Key.DOWN)){
    y+=speed;
  }
  
 	if ( x < r ) x = r;
  if ( y < r ) y = r;
  
 	if ( x > Gfx.screenwidth - r ) x = Gfx.screenwidth - r;
  if ( y > Gfx.screenheight - r ) y = Gfx.screenheight - r;
  
  Gfx.drawcircle(x,y,r,Col.RED);
}