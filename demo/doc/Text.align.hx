Gfx.clearscreen(Col.NIGHTBLUE);

Text.setfont(Font.THIN);

Text.align(Text.LEFT);
Text.display(Gfx.screenwidthmid, 10, "Align: LEFT, Position: Gfx.screenwidthmid");

Text.align(Text.CENTER);
Text.display(Gfx.screenwidthmid, 30, "Align: CENTER, Position: Gfx.screenwidthmid");

Text.align(Text.RIGHT);
Text.display(Gfx.screenwidthmid, 50, "Align: RIGHT, Position: Gfx.screenwidthmid");

Text.align(Text.RIGHT);
Text.display(Gfx.screenwidth, 70, "Align: RIGHT, Position: Gfx.screenwidth");

Text.align(Text.LEFT);
Text.display(0, 90, "Align: LEFT, Position: 0");

Text.display(Text.CENTER, 110, "Align: LEFT, Position: Text.CENTER");
Text.display(Text.CENTER, 120, "As a shortcut, you can pass Text.CENTER for the x value", Col.GRAY);
Text.display(Text.CENTER, 130, "of Text.display() to center align in the middle", Col.GRAY);