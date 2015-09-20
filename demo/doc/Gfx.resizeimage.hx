//This image string is a 16x12 image made in the Zeedonk Sprite Editor
Gfx.loadimagestring("donkey", "YKaaaks4f3iMeqaaaaeqaaabeaaacE6aafkCaabsE
                               aaaac6aaaaEEE6akEE8acEECqaCakaakac6afabqa");

//This resizes the image to be 5 times larger, 80x60.
Gfx.resizeimage("donkey", 5);

Gfx.clearscreen(Col.LIGHTBLUE);
Gfx.fillbox(0,80,Gfx.screenwidth,80, Col.GREEN);
Gfx.drawimage(Gfx.CENTER, Gfx.CENTER, "donkey");