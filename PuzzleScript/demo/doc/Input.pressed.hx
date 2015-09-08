var x = Gfx.screenwidthmid;
var y = Gfx.screenheightmid;

function update() {
  if (Input.pressed(Key.LEFT)) x-=3;
  if (Input.pressed(Key.RIGHT)) x+=3;
  if (Input.pressed(Key.UP)) y-=3;
  if (Input.pressed(Key.DOWN)) y+=3;
  Gfx.drawcircle(x,y,10,Col.RED);
}