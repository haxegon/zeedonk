import hscript.*;
import terrylib.*;
import openfl.external.ExternalInterface;

@:access(hscript.Interp)
class Webdebug {
	public static function getlinenum(c:Int):Int {
		var numnewlines:Int = 0;
		var currentchar:String = "";
		
		var i:Int = 0;
		while (i < Webscript.myscript.length) {
			currentchar = Webscript.myscript.substr(i, 1);
			if (currentchar == "\n") numnewlines++;
			if (i == c) return numnewlines + 1;
			i++;
		}
		
		return 0;
	}
	
	public static function log(msg:String) {
		#if (flash || terrylibwebhtml5debug)
	  trace(msg);
		#else
		var linenum:Int = getlinenum(Webscript.interpreter.curExpr.pmin);
		if (linenum == 0) {
			ExternalInterface.call("consolePrint", msg, true);
		}else{
			ExternalInterface.call("consolePrintWithLines", msg, linenum, true);
		}
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