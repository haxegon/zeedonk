var playername;         // String containing the playername typed in.
var nameentered;        // true once you've typed in the name, false otherwise.

function new() {
  Text.setfont(Font.CRYPT, 1);
  Text.inputsound = 32330304;
  Text.inputmaxlength = 16;
  playername = "";
  nameentered = false;
}

function update() {
  Gfx.clearscreen(Col.NIGHTBLUE);

  if (nameentered) {
    //If the name has been entered, then check for Key.ENTER before asking again.
    if (Input.justpressed(Key.ENTER)) {
      playername = "";
      nameentered = false;
    }

    //Display the name you typed in at the top of the screen.
    Text.display(5, 5, "NAME:", Col.YELLOW);
    Text.display(35, 5, playername, Col.WHITE);

    Text.display(Gfx.screenwidth - 5, Gfx.screenheight - 10, "[press ENTER to change]", Col.GRAY, { align: Text.RIGHT } );
  }else {
    //Display the ENTER YOUR NAME prompt in the middle of the screen.
    //Text.input is true when the player presses Key.ENTER.
    if (Text.input(Gfx.CENTER, Gfx.CENTER, "ENTER YOUR NAME: ", Col.YELLOW, Col.WHITE)) {
      //Text.getinput() is a function that contains the text from Text.input().
      playername = Text.getinput();
      nameentered = true;
      Music.playsound(60178103);
    }
  }
}