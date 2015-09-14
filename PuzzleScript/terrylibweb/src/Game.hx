import openfl.external.ExternalInterface;

@:keep
class Game {
	public static var time:Int;
	
	public static var _title:String="terrylib game";
	public static var title(get,set):String;

	public static function get_title():String {
		return _title;		
	}

	public static function set_title(t:String) {
		_title=t;
		Webscript.title = t;
		#if !flash
		ExternalInterface.call("settitle", t);
		#end
		return t;
	}
	
	public static var _homepage:String="http://www.puzzlescript.net";
	public static var homepage(get,set):String;

	public static function get_homepage():String {
		return _homepage;		
	}

	public static function set_homepage(p:String):String {
		_homepage=p;
		Webscript.homepage = p;
		#if !flash
		ExternalInterface.call("sethomepage", p);
		#end
		return p;
	}
	
	public static var _background:Int=0x000000;
	public static var background(get,set):Int;

	public static function set_background(c:Int):Int {
		_background=c;
		Webscript.background_color = c;
		#if !flash
		ExternalInterface.call("setbackgroundcolor", c);
		#end
		return c;
	}
	
	public static function get_background():Int{
		return _background;
	}

	public static var _foreground:Int=0xffffff;
	public static var foreground(get,set):Int;
	public static function get_foreground():Int {
		return _foreground;
	}

	public static function set_foreground(c:Int):Int {
		_foreground=c;
		Webscript.foreground_color = c;
		#if !flash
		ExternalInterface.call("setforegroundcolor", c);
		#end
		return c;
	}

	public static function editor():Bool{
		#if flash
		return false;
		#else
		#if terryhasntupgraded
			return ExternalInterface.call("isIDE");
		#else
			return untyped __js__('IDE');
		#end
		#end
	}

	public static function prompt(description:String,defaultText:String):String{
		#if flash
		return "";
		#else
		#if terryhasntupgraded
			return ExternalInterface.call("prompt",description,defaultText);
		#else
			return untyped __js__('prompt({0},{1})',description,defaultText);
		#end
		#end
	}

	public static function save(key:String, value:String) {
		#if flash
		#else
		#if terryhasntupgraded
			ExternalInterface.call('saveKey_terryhasntupgraded',key,value);
		#else
			untyped __js__('localStorage.setItem(window.document.URL.toString()+{0},{1})', key, value);
		#end
		#end
	}

	public static function load(key:String):String {
		#if flash
		return "";
		#else
		
		#if terryhasntupgraded
			return  ExternalInterface.call('loadKey_terryhasntupgraded',key);
		#else
			return untyped __js__('localStorage.getItem(window.document.URL.toString()+{0})', key);
		#end
		
		#end
	}
	
	public static function restart() {
		//Reload the stored script file
		Webscript.resetengine();
		Webscript.scriptfound();
	}
}