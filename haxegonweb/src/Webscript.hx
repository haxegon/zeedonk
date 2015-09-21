import haxegon.*;
import hscript.*;
import openfl.Assets;
import openfl.external.ExternalInterface;

import openfl.events.*;
import openfl.net.*;

@:access(haxegon.Game)
@:access(haxegon.Gfx)
@:access(haxegon.Input)
@:keep
class Webscript {
	public static var myscript:String;
	public static var loadedscript:Array<String>;
	public static var parsedscript:Expr;
	public static var parser:Parser;
	public static var interpreter:Interp;
	
	public static var skipnextloadscript:Bool = false;
	public static var readytogo:Bool = false;
	public static var loadwhenready:Bool = false;
	
	public static var scriptloaded:Bool;
	public static var runscript:Bool;
	public static var errorinscript:Bool;
	public static var pausescript:Bool;
	
	public static var initfunction:Dynamic;
	public static var updatefunction:Dynamic;
	
	public static var donkeyhop:Int = 0;
	public static var zebrahop:Int = 0;
	public static var corecontrol:Core;
	
	public static function init() {
		scriptloaded = false;
		runscript = false;
		pausescript = false;
		errorinscript = false;
		
		Text.cleartextcache();
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
		Text.setfont(Webfont.THIN, 1);
		Text.setfont(Webfont.TINY, 1);
		Text.setfont(Webfont.YOSTER, 1);
		
		Text.setfont(Webfont.DEFAULT, 1);
		
		cleanupimages();
		
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
	
	public static function cleanupimages() {
		Gfx.clearimages();
	  Gfx.loadimagestring("__library_zebra", "YKaaapZZZSaaaaaaaaaabeaaaaraaaacE6aaaEOaaavnaaac6avkFqaiHvkaquEHaac6aCabqauaauafaa");
		Gfx.loadimagestring("__library_donkey", "YKaaaks4f3iMeqaaaaeqaaabeaaacE6aafkCaabsEaaaac6aaaaEEE6akEE8acEECqaCakaakac6afabqa");
		Gfx.resizeimage("__library_zebra", 3);
		Gfx.resizeimage("__library_donkey", 3);
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
		  Text.setfont(Webfont.DEFAULT, 1);
			Gfx.clearscreen(Gfx.rgb(32, 0, 0));
			Text.display(Text.CENTER, Text.CENTER, "ERROR! ERROR! ERROR!", Col.RED);
		}else if (loadwhenready) {
			if (readytogo) {
	  		loadwhenready = false;	
				loadscript(myscript);
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
			if(Game.editor()){
				counter += 1;
				if (counter % 120 == 0) donkeyhop = 10;
				if (counter % 120 == 60) zebrahop = 10;
				
				if (zebrahop > 0) zebrahop--;
				if (donkeyhop > 0) donkeyhop--;
				
				
				Gfx.clearscreen(Col.LIGHTBLUE);
				Gfx.fillbox(0, Gfx.screenheightmid, Gfx.screenwidth, Gfx.screenheightmid, Col.GREEN);
				Gfx.drawimage(Gfx.CENTER + 80, Gfx.CENTER - 5 - zebrahop, "__library_donkey", {rotation: zebrahop, xpivot: Gfx.RIGHT});
				Gfx.drawimage(Gfx.CENTER - 80, Gfx.CENTER - 5 - donkeyhop, "__library_zebra", {rotation: -donkeyhop});
				
				if (counter % 120 < 60) {
					Gfx.fillcircle(Gfx.screenwidthmid - 60 + ((counter % 60) * 120) / 60, Gfx.screenheightmid - 30 - 30 * Math.sin((counter % 60) * Math.PI / 60), 8, Gfx.hsl(counter, 0.75, 0.5));
				}else {
					Gfx.fillcircle(Gfx.screenwidthmid + 60 - ((counter % 60) * 120) / 60, Gfx.screenheightmid - 30 - 30 * Math.sin((counter % 60) * Math.PI / 60), 8, Gfx.hsl(counter, 0.75, 0.5));
				}
				
				Text.setfont(Webfont.PRESSSTART, 1);
				Text.display(Text.CENTER, Text.CENTER + 50, "WAITING FOR SCRIPTFILE", Col.WHITE);
				Text.setfont(Webfont.DEFAULT, 1);
				Text.display(Text.CENTER, Gfx.screenheight - Text.height() - 10, "zeedonk alpha v0.5", Col.WHITE);
			}else {
				Gfx.clearscreen(Col.BLACK);
				
				Text.display(Text.CENTER, Gfx.screenheight - Text.height() - 24, "zeedonk alpha v0.5", Col.GRAY);
				Text.display(Text.CENTER, Gfx.screenheight - Text.height() - 14, "loading script...", Col.GRAY);
			}
		}
		
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
	private static var oldfontsize:Float = 0;

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
			scriptfound();
		}
	}
	
	public static function scriptfound() {
		resetGlobalVariables();
		corecontrol.reset();
		
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
		
		//Set default font
		Text.setfont(Webfont.DEFAULT, 1);
		Text.cleartextcache();
		Gfx.clearscreeneachframe = true;
		
		Gfx.skiprender = false;
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
			
			if (initfunction != null) {
				try {
					initfunction();
				}catch (e:Dynamic) {
					Err.log(Err.PARSER_NEW, Err.process(e));
				}
			}
			
			if (updatefunction == null) {
				Gfx.clearscreeneachframe = false;
				Webscript.pausescript = true;
			}
		}
	}	
}