import haxegon.*;

@:keep
@:expose
class Webbridge {
	public function runScript(s:String) {
		if (Webscript.readytogo) {
			Webscript.myscript = s;
			Webscript.loadwhenready = true;
		}
  }
	
	public function get_background_colour():Int {
		return Game._background;
	}
	
	public function get_foreground_colour():Int {
		return Game._foreground;
	}
	
	public function get_title():String {
		return Game._title;
	}
	
	public function get_homepage():String {
		return Game._homepage;
	}
	
	public function stop() {
		Gfx.resizescreen(240, 150);
		Gfx.rotation(0);
		Gfx.scale(1, 1);
		Gfx.imagecolor(Col.WHITE);
		Text.setfont(Webfont.DEFAULT, 1);
		Webscript.cleanupimages();
		Text.cleartextcache();
		Gfx.clearscreeneachframe = true;
		Webscript.scriptloaded = false;
		Webscript.runscript = false;
		Webscript.errorinscript = false;
		Webscript.pausescript = false;
	}
}

class Main {
	public function new() {
		if(firstrun){
			Webscript.init();
			firstrun = false;
		}
	}
	
	public function update() {
		Webscript.update();
  }
	
	public var firstrun:Bool = true;
}