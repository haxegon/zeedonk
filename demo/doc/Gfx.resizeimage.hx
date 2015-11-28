//This image string is a 16x12 image made in the Zeedonk Sprite Editor
Gfx.loadimagestring("donkey", "öW3aksEfDiYeq4aeq3abe3acQG2afkO2absQ
                               4acG4a3QGak2QIac2QOqaOak2akacGafabqa");

//This resizes the image to be 5 times larger, 80x60.
Gfx.resizeimage("donkey", 5);

Gfx.clearscreen(Col.LIGHTBLUE);
Gfx.fillbox(0,80,Gfx.screenwidth,80, Col.GREEN);
Gfx.drawimage(Gfx.CENTER, Gfx.CENTER, "donkey");