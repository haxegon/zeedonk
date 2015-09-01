import openfl.external.ExternalInterface;

@:keep
class Game {
	public static var time:Int;
	
	public static function title(t:String) {
		Webscript.title = t;
		#if !flash
		ExternalInterface.call("settitle", t);
		#end
	}
	
	public static function homepage(p:String) {
		Webscript.homepage = p;
		#if !flash
		ExternalInterface.call("sethomepage", p);
		#end
	}
	
	public static function background(c:Int) {
		Webscript.background_color = c;
		#if !flash
		ExternalInterface.call("setbackgroundcolor", c);
		#end
	}
	
	public static function foreground(c:Int) {
		Webscript.foreground_color = c;
		#if !flash
		ExternalInterface.call("setforegroundcolor", c);
		#end
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
}