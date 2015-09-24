Text.setfont(Font.PRESSSTART, 2);

function update(){
  Text.rotation(Game.time * 4);
  Text.display(Text.CENTER, Text.CENTER, "ZEEDONK", Gfx.hsl(Game.time, 0.5, 0.5));
}