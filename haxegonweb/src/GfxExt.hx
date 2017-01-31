import haxegon.*;

import openfl.display.BitmapData;

@:access(haxegon.Gfx)
class GfxExt {
/** Loads an image into the game. */
	private static var BASE64:String = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZàáâäæãåøèéöü";
	public static var KEEPCOL:Int = -1;
	
	private static function convertobinary(t:Int, len:Int):String {
		var endstring:String = "";
		var currentbit:Int;
		
		while (t > 0) {
			currentbit = t % 2;
			endstring = Convert.tostring(currentbit) + endstring;
			t = t - currentbit;
			t = Std.int(t / 2);
		}
		
		while (endstring.length < len) endstring = "0" + endstring;
		return endstring;
	}
	
	private static function convertbase64tobinary(t:String):String {
		var endstring:String = "";
		var currentval:Int = 0;
		
		for (i in 0 ... t.length) {
			currentval = BASE64.indexOf(t.substr(i, 1));
			endstring += convertobinary(currentval, 6);
		}
		return endstring;
	}
	
	private static function convertbinarytoint(binarystring:String):Int {
		var returnval:Int = 0;
		for (i in -binarystring.length ... 0) {
			if (binarystring.substr( -i - 1, 1) == "1"){
				returnval += Std.int(Math.pow(2, binarystring.length + i));
			}
		}
		return returnval;
	}
	
	
	public static function clearimages() {
		Gfx.imageindex = new Map<String, Int>();
		for(i in 0 ... Gfx.images.length){
		  Gfx.images[i].dispose();
		}
		
		Gfx.images = [];
	}
	
	private static function unmakerle(s:String):String {
		var result:String = "";
		var lastInt:Int = 0;
		var i:Int = 0;
		
		while (i < s.length) {
			var c:String = s.substr(i, 1);
			while (c == "0" || c == "1" || c == "2" || c == "3" || c == "4" ||
			       c == "5" || c == "6" || c == "7" || c == "8" || c == "9") {
				lastInt = lastInt * 10 + Convert.toint(c);
				i++;
				c = s.substr(i, 1);
			}
			
			if (lastInt == 0) {
				lastInt = 1;
			}
			
			for (i in 0 ... lastInt) {
				result = result + c;
			}
			i++;
			c = s.substr(i, 1);
			lastInt = 0;
		}
		
		return result;
	}
	
	public static function loadimagestring(imagename:String, inputstring:String, col1:Int = -1, col2:Int = -1, col3:Int = -1, col4:Int = -1) {
		inputstring = S.replacechar(inputstring, " ", "");
		inputstring = S.replacechar(inputstring, "\n", "");
		inputstring = S.replacechar(inputstring, "\t", "");
		var currentchunk:String = "";
		function getnextchunk(size:Int) {
			currentchunk = inputstring.substr(0, size);
			inputstring = inputstring.substr(size);
		}
		
		inputstring = unmakerle(inputstring);
		inputstring = convertbase64tobinary(inputstring);
		
		//Get image width:
		getnextchunk(4);
		var imgwidth:Int = convertbinarytoint(currentchunk) + 1;
		
		//Get image height:
		getnextchunk(4);
		var imgheight:Int = convertbinarytoint(currentchunk) + 1;
		
		getnextchunk(1);
		var imgformat:Int = Convert.toint(currentchunk);
		if (imgformat == 0) imgformat = 2;
		
		var t:BitmapData = new BitmapData(imgwidth, imgheight, true, 0x000000);
		
		//Load the palette
		var r:Int; var g:Int; var b:Int;
		var imgpal:Array<Int> = [col1, col2, col3, col4];
		
		//Four colour format
		for (i in 0 ... (imgformat * 2)) {
			getnextchunk(8);
			r = convertbinarytoint(currentchunk);
			getnextchunk(8);
			g = convertbinarytoint(currentchunk);
			getnextchunk(8);
			b = convertbinarytoint(currentchunk);
			if (imgpal[i] == KEEPCOL) imgpal[i] = Gfx.rgb(r, g, b);
		}
		
		//Clear the image before starting
		var pixel:Int = 0;
		for (j in 0 ... imgheight) {
			for (i in 0 ... imgwidth) {
				getnextchunk(imgformat);
				pixel = convertbinarytoint(currentchunk);
				pixel = imgpal[pixel];
				
				if(pixel != Col.TRANSPARENT){
					Gfx.settrect(i, j, 1, 1);
					t.fillRect(Gfx.trect, (0xFF << 24) + pixel);
				}
			}
		}
			
		Gfx.imageindex.set(imagename, Gfx.images.length);
		Gfx.images.push(t);
	}
}