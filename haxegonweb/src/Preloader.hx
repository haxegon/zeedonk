package;

import openfl.display.*;
import openfl.geom.*;
import openfl.events.*;
import openfl.net.*;
import openfl.Lib;

/*Adding assets to a preloader:
After the imports add this line to your file:
@:bitmap("assets/img/background.png") class BackgroundBD extends BitmapData {}

Afterwards add the bitmapdata to the preloader as you would any other bitmap data.
var bg:Bitmap = new Bitmap(new BackgroundBD(800, 600));
addChildAt(bg, 0);
*/

@:keep
class Preloader extends NMEPreloader{
	override public function new(){
		super();
		//Set game parameters here:
		//----------------
		// GRAPHICS :
		//----------------
		screenwidth = 240; screenheight = 150;    // Size of the screen for preloader
		stagewidth = 240; stageheight = 150;      // Size of the screen for stage
		backcol = RGB(0, 0, 0);
		frontcol = RGB(128, 128, 128);
		loadercol = RGB(196, 196, 196); 
		loadingbarwidth = 125;
		loadingbarheight = 6;
		//----------------
		
		ct = new ColorTransform(0, 0, 0, 1, 255, 255, 255, 1); //Set to white			
		temprect = new Rectangle();
		
		tl = new Point(0, 0); tpoint = new Point(0, 0);
		
		glyphletters = new Map<String, Array<String>>();
		glyphletters.set("A", ["4", "010", "101", "111", "101", "101"]); 
		glyphletters.set("B", ["4", "110", "101", "110", "101", "110"]); 
		glyphletters.set("C", ["4", "011", "100", "100", "100", "011"]); 
		glyphletters.set("D", ["4", "110", "101", "101", "101", "110"]); 
		glyphletters.set("E", ["4", "111", "100", "110", "100", "111"]); 
		glyphletters.set("F", ["4", "111", "100", "110", "100", "100"]); 
		glyphletters.set("G", ["4", "011", "100", "101", "101", "011"]); 
		glyphletters.set("H", ["4", "101", "101", "111", "101", "101"]); 
		glyphletters.set("I", ["2", "1", "1", "1", "1", "1"]); 
		glyphletters.set("J", ["3", "01", "01", "01", "01", "11"]);
		glyphletters.set("K", ["4", "101", "101", "110", "101", "101"]);
		glyphletters.set("L", ["4", "100", "100", "100", "100", "111"]);
		glyphletters.set("M", ["6", "10001", "11011", "10101", "10001", "10001"]); 
		glyphletters.set("N", ["5", "1001", "1101", "1111", "1011", "1001"]); 
		glyphletters.set("O", ["4", "010", "101", "101", "101", "010"]); 
		glyphletters.set("P", ["4", "110", "101", "110", "100", "100"]); 
		glyphletters.set("Q", ["4", "010", "101", "101", "101", "011", "001"]); 
		glyphletters.set("R", ["4", "110", "101", "110", "101", "101"]); 
		glyphletters.set("S", ["4", "011", "100", "010", "001", "110"]); 
		glyphletters.set("T", ["4", "111", "010", "010", "010", "010"]);
		glyphletters.set("U", ["4", "101", "101", "101", "101", "010"]); 
		glyphletters.set("V", ["4", "101", "101", "101", "011", "001"]); 
		glyphletters.set("W", ["6", "10001", "10001", "10101", "11011", "10001"]); 
		glyphletters.set("X", ["4", "101", "101", "010", "101", "101"]); 
		glyphletters.set("Y", ["4", "101", "101", "111", "010", "010"]); 
		glyphletters.set("Z", ["4", "111", "001", "010", "100", "111"]); 
		glyphletters.set(" ", ["4"]); 
		
		backbuffer = new BitmapData(screenwidth, screenheight, false, 0x000000);
		screenbuffer = new BitmapData(screenwidth, screenheight, false, 0x000000);
		screen = new Bitmap(screenbuffer);
		screen.width = stagewidth;
		screen.height = stageheight;
		
		addChild(screen);
		startgame = false;
		gfxstage = Lib.current.stage;
		
		#if haxegonweb
			#if (js || html5)
			onResize(null);
			gfxstage.addEventListener(Event.RESIZE, onResize);
			#end
		#end
	}
	
	#if (js || html5)
	private function onResize(e:Event):Void {
		//trace(gfxstage.stageWidth, gfxstage.stageHeight);
		//Window.devicePixelratio
		var scaleX:Float;
		var scaleY:Float;
		
		scaleX = Math.floor(gfxstage.stageWidth / screenwidth);
		scaleY = Math.floor(gfxstage.stageHeight / screenheight);			
		
		var jsscale:Int = Std.int(Math.min(scaleX, scaleY));
		
		gfxstage.scaleX = jsscale;
		gfxstage.scaleY = jsscale;
		
		gfxstage.x = (gfxstage.stageWidth - screenwidth * jsscale) / 2;
		gfxstage.y = (gfxstage.stageHeight - screenheight * jsscale) / 2;
	}
	#end
	
	public function RGB(red:Int, green:Int, blue:Int):Int {
		return (blue | (green << 8) | (red << 16));
	}
	
	override public function onLoaded() {
		#if (js || html5)
		gfxstage.removeEventListener(Event.RESIZE, onResize);
		#end
		if (contains(screen)) removeChild(screen);
		dispatchEvent(new Event(Event.COMPLETE));
	}

	public function fillrect(x:Int, y:Int, w:Int, h:Int, col:Int):Void {
		temprect.x = x; temprect.y = y; temprect.width = w; temprect.height = h;
		backbuffer.fillRect(temprect, col);
	}
	
	public var psetx:Int;
	public var psety:Int;
	public function pset(x:Int, y:Int) {
		temprect.x = psetx + x; temprect.y = psety + y; temprect.width = 1; temprect.height = 1;
		backbuffer.fillRect(temprect, 0xFFFFFF);
	}
	
	public function glyphprint(_x:Int, _y:Int, s:String) {
		psetx = _x;
		psety = _y;
		for (i in 0 ... s.length) {
			drawgylph(s.substr(i,1).toUpperCase());
		}
	}
	
	public function drawgylph(letter:String) {
		if (glyphletters.exists(letter)) {
			var sarray:Array<String> = glyphletters.get(letter);
			for (j in 1 ... sarray.length) {
				for (i in 0 ... sarray[j].length) {
					if (sarray[j].substr(i, 1) == "1") {
						pset(i, j * 2);
						pset(i, j * 2 + 1);
					}
				}
			}
			
			psetx += Std.parseInt(sarray[0]);
		}
	}
	
	public var glyphletters:Map<String, Array<String>>;
	
	override public function onUpdate(bytesLoaded:Int, bytesTotal:Int){
		var p:Float = bytesLoaded / bytesTotal;	
		if (p >= 1) startgame = true;
		backbuffer.fillRect(backbuffer.rect, backcol);
		
		fillrect(Std.int((screenwidth/2) - (loadingbarwidth/2) - 2), Std.int((screenheight / 2) - 13)-10, loadingbarwidth+4, loadingbarheight+6, frontcol);
		fillrect(Std.int((screenwidth/2) - (loadingbarwidth/2)), Std.int((screenheight / 2) - 11)-10, loadingbarwidth, loadingbarheight+2, backcol);
		fillrect(Std.int((screenwidth/2) - (loadingbarwidth/2)) + 1, Std.int((screenheight / 2) - 11)+1-10, Std.int(p * (loadingbarwidth))-2, loadingbarheight, loadercol);
		
		glyphprint(Std.int((screenwidth / 2)) - 7 * 4, Std.int((screenheight / 2) - 12) + loadingbarheight, "LOADING ZEEDONK");
		
		//Render
		screenbuffer.lock();
		screenbuffer.copyPixels(backbuffer, backbuffer.rect, tl, null, null, false);
		screenbuffer.unlock();
		
		backbuffer.lock();
		backbuffer.fillRect(backbuffer.rect, 0x000000);
		backbuffer.unlock();
		
		if (startgame) onLoaded();
	}
	
	public var screenwidth:Int;
	public var screenheight:Int;
	public var stagewidth:Int; 
	public var stageheight:Int;
	public var backcol:Int;
	public var frontcol:Int;
	public var loadercol:Int;
	public var loadingbarwidth:Int;
	public var loadingbarheight:Int;
	
	public var buffer:BitmapData;
	public var backbuffer:BitmapData;
	public var screenbuffer:BitmapData;
	public var screen:Bitmap;
	public var gfxstage:Stage;
	
	public var temprect:Rectangle;
	
	public var startgame:Bool;
	
	public var tl:Point;
	public var tpoint:Point;
	public var ct:ColorTransform;
}