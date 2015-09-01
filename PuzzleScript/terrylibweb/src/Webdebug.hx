import hscript.*;
import terrylib.*;
import openfl.external.ExternalInterface;

@:keep
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
	
	public static function log(msg1:String, ?msg2:String, ?msg3:String, ?msg4:String, ?msg5:String, ?msg6:String, ?msg7:String, ?msg8:String) {
		#if (flash || terrylibwebhtml5debug)
	  trace(msg1);
		#else
		var returnarray:Array<String> = [];
		var linenum:Int = getlinenum(Webscript.interpreter.curExpr.pmin);
		if (linenum == 0) {
			returnarray.push(msg1);
			if (msg2 != null) returnarray.push(msg2);
			if (msg3 != null) returnarray.push(msg3);
			if (msg4 != null) returnarray.push(msg4);
			if (msg5 != null) returnarray.push(msg5);
			if (msg6 != null) returnarray.push(msg6);
			if (msg7 != null) returnarray.push(msg7);
			if (msg8 != null) returnarray.push(msg8);
			
			#if terryhasntupgraded
				ExternalInterface.call("consolePrintArray", returnarray, true);
			#else
				untyped __js__('consolePrintArray({0},true)', returnarray);
			#end
		}else{
			returnarray.push(msg1);
			if (msg2 != null) returnarray.push(msg2);
			if (msg3 != null) returnarray.push(msg3);
			if (msg4 != null) returnarray.push(msg4);
			if (msg5 != null) returnarray.push(msg5);
			if (msg6 != null) returnarray.push(msg6);
			if (msg7 != null) returnarray.push(msg7);
			if (msg8 != null) returnarray.push(msg8);


			#if terryhasntupgraded
				ExternalInterface.call("consolePrintWithLinesArray", returnarray, linenum, true);
			#else
				untyped __js__('consolePrintWithLinesArray({0},{1},true)', returnarray,linenum);
			#end
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