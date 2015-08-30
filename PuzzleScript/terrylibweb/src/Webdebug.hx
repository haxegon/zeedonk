import terrylib.*;
import openfl.external.ExternalInterface;

class Webdebug{
	public static function log(msg:String) {
		#if (flash || terrylibwebhtml5debug)
	  trace(msg);
		#else
		ExternalInterface.call("consolePrint", msg, true);
		#end
	}
	
	public static function error(msg:String, ?linenum:Int) {
		#if (flash || terrylibwebhtml5debug)
		if (linenum == null) {
			trace(msg);
		}else {
			if (linenum != -1) {	
				trace(msg, linenum);
			}else {
				trace(msg);
			}
		}
		#else
		ExternalInterface.call("logError", msg, linenum, true, Err.charpos);
		#end
	}
	
	public static function warn(msg:String, linenum:Int) {
		#if (flash || terrylibwebhtml5debug)
		trace(msg, linenum);
		#else
		ExternalInterface.call("logWarning", msg, linenum, true);
		#end
	}
	
	public static function warn_noline(msg:String) {
	  #if (flash || terrylibwebhtml5debug)
		trace(msg);
		#else	
		ExternalInterface.call("logWarningNoLine", msg, true);
		#end
	}
}