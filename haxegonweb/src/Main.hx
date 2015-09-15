import haxegon.*;

@:keep
@:expose
class Webbridge {
	public function runScript(s:String) {
		if(Webscript.readytogo) Webscript.loadscript(s);
  }
	
	public function get_background_colour():Int {
		return Webscript.background_color;
	}
	
	public function get_foreground_colour():Int {
		return Webscript.foreground_color;
	}
	
	public function get_title():String {
		return Webscript.title;
	}
	
	public function get_homepage():String {
		return Webscript.homepage;
	}
	
	public function stop() {
		Gfx.resizescreen(192, 120, 4);
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