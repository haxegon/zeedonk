var w = "CAT";
trace("length = " +w.length);
trace("Text.len = " +Text.len(w));
Text.changesize(2);
trace("Text.len (resized) = " +Text.len(w));

function update(){
  Text.changesize(1);
	Text.display(Text.TOP,Text.CENTER,w);
  Text.changesize(2);
	Text.display(Text.BOTTOM,Text.CENTER,w);
}