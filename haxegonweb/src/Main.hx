import haxegon.*;

@:keep
@:expose
class Webbridge {
	public function runScript(s:String) {
		if(Webscript.readytogo) Webscript.loadscript(s);
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
		Text.setfont("default", 1);
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