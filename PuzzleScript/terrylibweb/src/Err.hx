import terrylib.*;
import hscript.Expr.Error;

class Err {
	//Central place to report errors.
	public static var PRE_BRACKETMISMATCH:Int = 0;
	public static var PRE_MISSINGUPDATE:Int = 1;
	public static var PARSER_INIT:Int = 2;
	public static var PARSER_NEW:Int = 3;
	public static var RUNTIME_INIT:Int = 4;
	public static var RUNTIME_UPDATE:Int = 5;
	
	public static function log(errorcode:Int, ?linenum:Int, ?details:Array<String>) {
		Webscript.runscript = false;
		Webscript.errorinscript = true;
		
		Gfx.resizescreen(192, 120, 4);
		Text.setfont("default", 1);
		
		if (errorcode == PRE_BRACKETMISMATCH) {
			Webdebug.error("ERROR: Bracket mismatch.");
			Webdebug.error("(Missing a { or } bracket somewhere.)");
		}else if (errorcode == PRE_MISSINGUPDATE){
			Webdebug.error("ERROR: An \"update()\" function is required.");
		}else if (errorcode == PARSER_INIT) {
			Webdebug.error("PARSER ERROR in processing script file.", errorline);
			outputdetails(details);
		}else if (errorcode == PARSER_NEW){
			Webdebug.error("RUNTIME ERROR (in function new())", errorline);
			outputdetails(details);
		}else if (errorcode == RUNTIME_INIT) {
			Webdebug.error("RUNTIME ERROR (in initial run)", errorline);
			outputdetails(details);
		}else if (errorcode == RUNTIME_UPDATE){
			Webdebug.error("RUNTIME ERROR", errorline);
			outputdetails(details);
		}
	}
	
	private static function outputdetails(details:Array<String>) {
		if (details != null) {	
			if (details.length > 0) {
				for (i in 0 ... details.length) {
					if(details[i] != null){
					  Webdebug.error(details[i]);
					}
				}	
			}
		}
	}
	
	public static function process(errorhandle:Dynamic):Array<String> {
		/*
			e looks like
			{
				e { error name , error code id, ? possibly data associated with that error}
			}
		*/
		if (Std.is(errorhandle, hscript.Expr.Error) ) {	
			var errstr:String;
			var returnarray:Array<String> = [];
			errstr = errorhandle.e[0];
			errorstart = errorhandle.pmin;
			errorend = errorhandle.pmax;
			trace("ERRORHANDLE OBJECT :\n", errorhandle, "\nerrorhandle.e = \n{ \n0: " + errorhandle.e[0] + "\n1: "+ errorhandle.e[1] + "\n2: "+ errorhandle.e[2] + "\n3: "+ errorhandle.e[3] + "\n}");
			
			if (errorhandle.e[0] == "EUnexpected") {
				geterrorline();
				returnarray.push("Unexpected \"" + errorhandle.e[2] + "\" in line " + errorline + ":");
				returnarray.push(errorstr);
				return returnarray;
			}else if (errorhandle.e[0] == "EInvalidChar") {
				geterrorline(false);
				returnarray.push("Invalid character \"" + String.fromCharCode(errorhandle.e[2]) + "\" in line " + errorline + ":");
				returnarray.push(errorstr);
				return returnarray;
			}else if (errorhandle.e[0] == "EUnterminatedComment") {
				geterrorline(false);
				returnarray.push("Whoops, you forgot to close a comment in line " + errorline + ":");
				returnarray.push(errorstr);
				return returnarray;
			}else if (errorhandle.e[0] == "EUnterminatedString") {
				geterrorline(false);
				returnarray.push("Unterminated string in line " + errorline + ":");
				returnarray.push(errorstr);
				return returnarray;
			}else	if (errorhandle.e[0] == "EUnknownVariable") {
				geterrorline();
				returnarray.push("Unknown variable \"" + errorhandle.e[2] + "\" in line " + errorline + ":");
				returnarray.push(errorstr);
				return returnarray;
			}else {
				trace("ERRORHANDLE OBJECT :\n", errorhandle, "\nerrorhandle.e = \n{ \n0: " + errorhandle.e[0] + "\n1: "+ errorhandle.e[1] + "\n2: "+ errorhandle.e[2] + "\n3: "+ errorhandle.e[3] + "\n}");
				trace(errorhandle.e);
				for (i in 2 ... errorhandle.e.length){
					errstr = errstr + " " + errorhandle.e[i];
				}
				return [errstr];
			}
		}
		
		if (errorhandle.name == "TypeError") {
			#if flash
			//trace(CallStack.toString(callStack));
			return ["TypeError"];
			#else
			return [errorhandle.stack];
			#end
		}
		return [errorhandle.toString()];
	}
	
	public static function geterrorline(userange:Bool = true) {
		var charcount:Int = 0;
		var numnewlines:Int = 0;
		var linestartindex:Int = 0;
		var lineendindex:Int = 0;
		var currentchar:String = "";
		
		errorline = -1;
		
		var i:Int = 0;
		while (i < Webscript.myscript.length) {
			currentchar = Webscript.myscript.substr(i, 1);
			if (currentchar == "\n") {
				if (errorline > -1) {
					lineendindex = i - 1;
					var finalstring:String = Webscript.myscript.substring(linestartindex, lineendindex);
					while (S.left(finalstring, 1) == " " && finalstring != "") {
						linestartindex++;
						finalstring = Webscript.myscript.substring(linestartindex, lineendindex);
					}
					if(userange){
						errorstr = "\"" + finalstring + "\", characters " + (errorstart - linestartindex) + "-" + (errorend - linestartindex + 1);
					}else {
						errorstr = "\"" + finalstring + "\", from character " + (errorstart - linestartindex);
					}
					break;
				}else {
					linestartindex = i + 1;
				}
				numnewlines++;
			}
			if (i == errorstart) {
				errorline = numnewlines;
			}
			i++;
		}
	}
	
	public static var errorstr:String;
	public static var errorline:Int;
	public static var errorstart:Int;
	public static var errorend:Int;
}