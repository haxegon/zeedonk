import haxegon.*;
import hscript.*;
import openfl.Assets;
import openfl.external.ExternalInterface;

import openfl.events.*;
import openfl.net.*;

@:access(haxegon.Game)
@:access(haxegon.Gfx)
@:access(haxegon.Input)
class Webscript {
	public static var myscript:String;
	public static var loadedscript:Array<String>;
	public static var parsedscript:Expr;
	public static var parser:Parser;
	public static var interpreter:Interp;
	
	public static var skipnextloadscript:Bool = false;
	public static var readytogo:Bool = false;
	
	public static var scriptloaded:Bool;
	public static var runscript:Bool;
	public static var errorinscript:Bool;
	public static var pausescript:Bool;
	
	public static var initfunction:Dynamic;
	public static var updatefunction:Dynamic;
	
	public static function init() {
		scriptloaded = false;
		runscript = false;
		pausescript = false;
		errorinscript = false;
		
		Text.setfont(Webfont.ZERO4B11, 1);
		Text.setfont(Webfont.C64, 1);
		Text.setfont(Webfont.COMIC, 1);
		Text.setfont(Webfont.CRYPT, 1);
		Text.setfont(Webfont.DOS, 1);
		Text.setfont(Webfont.GANON, 1);
		Text.setfont(Webfont.NOKIA, 1);
		Text.setfont(Webfont.OLDENGLISH, 1);
		Text.setfont(Webfont.PIXEL, 1);
		Text.setfont(Webfont.PRESSSTART, 1);
		Text.setfont(Webfont.RETROFUTURE, 1);
		Text.setfont(Webfont.ROMAN, 1);
		Text.setfont(Webfont.SPECIAL, 1);
		Text.setfont(Webfont.TALL, 1);
		Text.setfont(Webfont.TINY, 1);
		Text.setfont(Webfont.YOSTER, 1);
		
		Text.setfont(Webfont.DEFAULT, 1);
		
		try {
			#if haxegonwebhtml5debug
				loadfile("tests/invalidaccess.txt");
			#else
				var loadstring:String = ExternalInterface.call("getScript");
				if (loadstring != null) {
					loadscript(loadstring);
					skipnextloadscript = true;
				}
			#end
		}catch (e:Dynamic) {
			//Ok, try loading this locally for testing
			#if flash
			loadfile("script.txt");
			#end
		}
		readytogo = true;

	}
	
	public static var myLoader:URLLoader;
	public static function loadfile(filename:String):Void {
		//make a new loader
    myLoader = new URLLoader();
    var myRequest:URLRequest = new URLRequest(filename);
		
		//wait for the load
    myLoader.addEventListener(Event.COMPLETE, onLoadComplete);
		myLoader.addEventListener(IOErrorEvent.IO_ERROR, onIOError);
		
    //load!
    myLoader.load(myRequest);
	}
	
	public static function onIOError(e:Event):Void {
		trace("test script not found.");
	}
	
	public static function onLoadComplete(e:Event):Void {
		myscript = Convert.tostring(myLoader.data);
		
		scriptfound();
	}
	
	public static var	reloaddelay:Int = 0;
	
	public static function resetengine() {
		resetGlobalVariables();
		
		reset = true;
		waitforreset = true;
	}
	
	public static var reset:Bool = false;
	public static var waitforreset:Bool = false;
	public static var script_waitforreset:Bool = false;
	
	public static function update() {
		#if flash
		  if (Input.justpressed(Key.R)) {
				reloaddelay = 10;
			}
		#end
		#if flash
		if (reloaddelay > 0) {
			Gfx.clearscreen(Col.BLACK);
			reloaddelay--;
			if (reloaddelay <= 0) loadfile("script.txt");
		}else	if (errorinscript) {
		#else
		if (errorinscript) {
		#end
			Text.setfont("default", 1);
			Gfx.clearscreen(Gfx.rgb(32, 0, 0));
			Text.display(Text.CENTER, Text.CENTER, "ERROR! ERROR! ERROR!", Col.RED);
		}else if (script_waitforreset) {
			if (!waitforreset) {
				scriptfound_enginereset();
				script_waitforreset = false;
			}
		}else if (scriptloaded) {
			if (runscript && !pausescript) {
				try {
					updatefunction();
				}catch (e:Dynamic) {
					Err.log(Err.RUNTIME_UPDATE, Err.process(e));
				}
				MusicEngine.update();
				Game.time++;
			}	
		}else {
			counter+=10;
			Gfx.clearscreen(Col.GRAY);
			var gap:Int = Std.int((Gfx.screenheightmid / 5));
			for (i in 0 ... 5) {
				if (i % 2 == 1) {
					Gfx.fillbox(0, Gfx.screenheightmid + (i * gap), Gfx.screenwidth, gap, Col.WHITE);
				}else {
					Gfx.fillbox(0, Gfx.screenheightmid + (i * gap), Gfx.screenwidth, gap, Col.BLACK);
				}
			}
			
			
			Text.display(Gfx.screenwidth - 6, Gfx.screenheight - Text.height(), "zeedonk alpha v0.5", Col.WHITE, { align:Text.RIGHT } );
			
			var msg:String = "WAITING FOR SCRIPTFILE...";
			var startpos:Float = Gfx.screenwidthmid - Text.len(msg) / 2;
			var currentpos:Float = 0;
			for (i in 0 ... msg.length) {
				if (S.mid(msg, i, 1) != "_") {
					Text.display(startpos + currentpos, Gfx.screenheightmid - 35 + Math.sin((((i*5)+counter)%360) * Math.PI * 2 / 360)*5, S.mid(msg, i, 1), Col.WHITE);
				}
				currentpos += Text.len(S.mid(msg, i, 1));
			}
		}
		/*
		Gfx.clearscreen();
		
		Text.setfont(Webfont.TALL, 1);
		
		Text.display(1, 1, "the quick brown, fox jumped. Over");
		Text.display(1, 10, "the lazy dog! Oh no!");
		
		Text.display(1, 21, "The quick brown fox jumped over".toUpperCase());
		Text.display(1, 30, "the lazy dog?".toUpperCase());
		
		Text.display(1, 50, "1234567890,".toUpperCase());
		*/
		if (Gfx.showfps) {
			oldfont = Text.currentfont;
			oldfontsize = Text.currentsize;
			Text.setfont("pixel", 1);
			if (Gfx.fps() > -1) {
				Text.display(Gfx.screenwidth - 4, 1, "FPS: " + Gfx.fps(), Col.YELLOW, { align: Text.RIGHT } );
			}
			//if (Gfx.updatefps() > -1) {
			//	Text.display(Gfx.screenwidth - 4, 7, "UPDATE FPS: " + Gfx.updatefps(), Col.YELLOW, { align: Text.RIGHT } );
			//}
			
			Text.setfont(oldfont, oldfontsize);
		}
	}
	public static var name:String;
	private static var counter:Int = 0;
	private static var oldfont:String = "";
	private static var oldfontsize:Int = 0;

	private static function resetGlobalVariables(){
		MusicEngine.stopmusic();
		MusicEngine.vol=1.0;		
		MusicEngine.musicLoop=true;
		Input.resetKeys();
		Gfx._linethickness=1;
		Game._title="zeedonk game";
		Game._homepage="http://www.zeedonk.net";
		Game._background=0x000000;
		Game._foreground=0xffffff;
	}

	public static function loadscript(script:String) {
		if (skipnextloadscript) {
			skipnextloadscript = false;
		}else{
			myscript = script;
			resetGlobalVariables();
			scriptfound();
		}
	}
	
	public static function scriptfound() {
		resetengine();
		script_waitforreset = true;
	}
		
	public static function scriptfound_enginereset() {
		scriptloaded = true;
		errorinscript = false;
		pausescript = false;
   	parser = new hscript.Parser();
		parser.allowTypes = false;
    interpreter = new InterpExtended();
		
		Game.time = 0;
		
		loadedscript = myscript.split("\n");
		//Preprocessor.loadscript(myscript);
		//if (Preprocessor.sortbyscope()) {
		//Preprocessor.checkforerrors();
		//myscript = Preprocessor.getfinalscript();
		//Preprocessor.debug();
		interpreter.variables.set("Math", Math);
		interpreter.variables.set("Col", Col);
		interpreter.variables.set("Convert", Convert);
		interpreter.variables.set("Gfx", Gfx);
		interpreter.variables.set("Input", Input);
		interpreter.variables.set("Key", Key);
		interpreter.variables.set("Game", Game);
		interpreter.variables.set("Mouse", Mouse);
		interpreter.variables.set("Music", Webmusic);
		interpreter.variables.set("Text", Text);
		interpreter.variables.set("Font", Webfont);
		interpreter.variables.set("Random", Random);
		interpreter.variables.set("String", String);
		interpreter.variables.set("trace", Webdebug.log);
		interpreter.variables.set("Math.abs", Gfx.fastAbs);
		
		runscript = true;
		try{
			parsedscript = parser.parseString(myscript);
		}catch (e:Dynamic) {
			Err.log(Err.PARSER_INIT, Err.process(e));
		}
		
		if (runscript) {
			try {
				interpreter.execute(parsedscript);
			}catch (e:Dynamic) {
				Err.log(Err.RUNTIME_INIT, Err.process(e));
			}
			
			Game._title = interpreter.variables.get("title");
			if (Game._title == null) Game._title = "Untitled";
			Game._homepage = interpreter.variables.get("homepage");
			if (Game._homepage == null) Game._homepage = "";
			var bg_col:Dynamic = interpreter.variables.get("background_color");
			if (bg_col == null) {
				Game._background = Col.BLACK;
			}else{
				Game._background = Convert.toint(bg_col);
			}
			
			var fg_col:Dynamic = interpreter.variables.get("foreground_color");
			if (fg_col == null) {
				Game._foreground = Col.WHITE;
			}else{
				Game._foreground = Convert.toint(bg_col);
			}
			
			initfunction = interpreter.variables.get("new");
			updatefunction = interpreter.variables.get("update");
			
			//Set default font
			Text.setfont("default", 1);
			if (initfunction != null) {
				try {
					initfunction();	
				}catch (e:Dynamic) {
					Err.log(Err.PARSER_NEW, Err.process(e));
				}
			}
			
			if (updatefunction == null) {
				Webscript.pausescript = true;
			}
		}
	}	
}