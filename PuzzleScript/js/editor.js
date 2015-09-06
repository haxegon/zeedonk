var code = document.getElementById('code');
var _editorDirty = false;
var _editorCleanState = "";

var fileToOpen=getParameterByName("demo");
if (fileToOpen!==null&&fileToOpen.length>0) {
	tryLoadFile(fileToOpen);
	code.value = "loading...";
} else {
	var gistToLoad=getParameterByName("hack");
	if (gistToLoad!==null&&gistToLoad.length>0) {
		var id = gistToLoad.replace(/[\\\/]/,"");
		tryLoadGist(id);
		code.value = "loading...";
	} else {
		try {
			if (localStorage!==undefined && localStorage['saves']!==undefined) {
					var curSaveArray = JSON.parse(localStorage['saves']);
					var sd = curSaveArray[curSaveArray.length-1];
					code.value = sd.text;
					var loadDropdown = document.getElementById('loadDropDown');
					loadDropdown.selectedIndex=0;
			}
		} catch(ex) {
			
		}
	}
}



var editor = window.CodeMirror.fromTextArea(code, {
//	viewportMargin: Infinity,
	lineWrapping: true,
	lineNumbers: true,
    styleActiveLine: true,
    mode: {name:"haxe",globalVars: true},
    autoCloseBrackets: true,
    matchBrackets:true,
    tabSize:2,
    indentUnit:2,
//	smartIndent:false,
    hintOptions: {"completeSingle": false},
    extraKeys: {"Ctrl-Space": "autocomplete",
		"Esc":"clearHighlight"}
   	});
/*
CodeMirror.registerHelper("hintWords", "haxe",
*/

function isalnum (code){   
	if (!(code > 47 && code < 58) && // numeric (0-9)
		!(code > 64 && code < 91) && // upper alpha (A-Z)
		!(code > 96 && code < 123)) { // lower alpha (a-z)
	return false;
  }
  return true;
}

function renderHint(elt,data,cur){
	var t1=cur.text;
	var t2=cur.displayText;
	var tag=cur.tag;
	if (t1.length==0){
		t1=cur.displayText;
		t2=cur.text;
	}
	var h = document.createElement("span")                // Create a <h1> element
	h.style.color="white";
	var t = document.createTextNode(t1);     // Create a text node

	h.appendChild(t);   

	h.className += " " + "TerryLib-completion";
	if (tag!=null){
		h.className += " " + tag+"-TerryLib-completion";
	}

	elt.appendChild(h);//document.createTextNode(cur.displayText || getText(cur)));

	var h2 = document.createElement("span")                // Create a <h1> element
	h2.style.color="grey";
	var t2 = document.createTextNode(t2);     // Create a text node
	h2.appendChild(t2);  
	h2.style.color="#ff0000";
	elt.appendChild(t2);
}

var haxeLibraryArray = [
["Gfx",".","M"],
["Debug",".","M"],
["Col",".","E"],
["Font",".","E"],
["Text",".","M"],
["Music",".","M"],
["Key",".","E"],
["Input",".","M"],
["Mouse",".","M"],
["Convert",".","M"],
["Random",".","M"],
["Game",".","M"],
["Std",".","M"],
["Math",".","M"],
["String",".","M"],
["update","()","F"],
["new","","F"],
["function ",""],
["break",";"],
["case "],
["continue",";"],
["default",":"],
["do"],
["else"],
["false"],
["true"],
["for ",""],
["if"],
["in"],
["null"],
["switch "],
["var "],
["while"],
["return "],
];

var haxeHintArray = [
["..."],
["Gfx.resizescreen","(width, height, scale)","F"],
["Gfx.clearscreen","(color)","F"],
["Gfx.clearscreeneachframe","(true or false)","F"],
["Gfx.drawbox","(x, y, width, height, col)","F"],
["Gfx.fillbox","(x, y, width, height, col, alpha)","F"],
["Gfx.drawtri","(x1, y1, x2, y2, x3, y3, col)","F"],
["Gfx.filltri","(x1, y1, x2, y2, x3, y3, col)","F"],
["Gfx.drawcircle","(x, y, radius, col)","F"],
["Gfx.fillcircle","(x, y, radius, col)","F"],
["Gfx.drawhexagon","(x, y, radius, angle, col)","F"],
["Gfx.fillhexagon","(x, y, radius, angle, col)","F"],
["Gfx.drawline","(x1, y1, x2, y2, col)","F"],
["Gfx.setlinethickness","(linethickness)","F"],
["Gfx.getpixel","(x, y)","F"],
["Gfx.setpixel","(x, y, col):Int","F"],
["Gfx.RGB","(red (0-255), green (0-255), blue (0-255)):Int","F"],
["Gfx.HSL","(hue (0-360), saturation (0-1.0), lightness (0-1.0)):Int","F"],
["Gfx.getred","(col):Int","F"],
["Gfx.getgreen","(col):Int","F"],
["Gfx.getblue","(col):Int","F"],
["Gfx.screenwidth",":Int","P"],
["Gfx.screenheight",":Int","P"],
["Gfx.screenwidthmid",":Int","P"],
["Gfx.screenheightmid",":Int","P"],
["Gfx.drawimage","(x, y, imagename, optional parameters)","F"],
["Gfx.imagewidth","(imagename):Int","P"],
["Gfx.imageheight","(imagename):Int","P"],
["Gfx.createimage","(imagename, width, height) ","F"],
["Gfx.drawtoscreen","()","F"],
["Gfx.drawtoimage","(imagename)","F"],
["Gfx.grabimagefromscreen","(imagename, screen x, screen y)","F"],
["Gfx.grabimagefromimage","(imagename, sourceimagename, image x, image y)","F"],
["Gfx.showfps",":Bool","P"],
["Col.BLACK","","E"],
["Col.GREY","","E"],
["Col.WHITE","","E"],
["Col.RED","","E"],
["Col.PINK","","E"],
["Col.DARKBROWN","","E"],
["Col.BROWN","","E"],
["Col.ORANGE","","E"],
["Col.YELLOW","","E"],
["Col.DARKGREEN","","E"],
["Col.GREEN","","E"],
["Col.LIGHTGREEN","","E"],
["Col.NIGHTBLUE","","E"],
["Col.DARKBLUE","","E"],
["Col.BLUE","","E"],
["Col.LIGHTBLUE","","E"],
["Col.MAGENTA","","E"],
["Font.ZERO4B11","","E"],
["Font.APPLE","","E"],
["Font.BOLD","","E"],
["Font.C64","","E"],
["Font.CASUAL","","E"],
["Font.COMIC","","E"],
["Font.CRYPT","","E"],
["Font.DEFAULT","","E"],
["Font.DOS","","E"],
["Font.HANDY","","E"],
["Font.GANON","","E"],
["Font.NOKIA","","E"],
["Font.OLDENGLISH","","E"],
["Font.PIXEL","","E"],
["Font.PRESSSTART","","E"],
["Font.RETROFUTURE","","E"],
["Font.ROMAN","","E"],
["Font.SPECIAL","","E"],
["Font.VISITOR","","E"],
["Font.YOSTER","","E"],
["Text.setfont","(fontname, size)","F"],
["Text.changesize","(fontsize)","F"],
["Text.display","(x, y, text, col, optional parameters)","F"],
["Text.input",'(x, y, "Question: ", Q colour, A colour):Bool',"F"],
["Text.getinput","():String","F"],
["Text.CENTER","","P"],
["Text.LEFT","","P"],
["Text.RIGHT","","P"],
["Text.TOP","","P"],
["Text.BOTTOM","","P"],
["Text.height","():Int","F"],
["Text.len","():Int","F"],
["Music.playsound","(seed, volume (0-1) )","F"],
["Music.playnote","(seed,pitch,length,volume (0-1) )","F"],
["Music.playmusic","(musicDat)","F"],
["Music.stopmusic","()","F"],
["Music.setmusicvol","(0.0-1.0)","F"],
["Key.A","","E"],
["Key.B","","E"],
["Key.C","","E"],
["Key.D","","E"],
["Key.E","","E"],
["Key.F","","E"],
["Key.G","","E"],
["Key.H","","E"],
["Key.I","","E"],
["Key.J","","E"],
["Key.K","","E"],
["Key.L","","E"],
["Key.M","","E"],
["Key.N","","E"],
["Key.O","","E"],
["Key.P","","E"],
["Key.Q","","E"],
["Key.R","","E"],
["Key.S","","E"],
["Key.T","","E"],
["Key.U","","E"],
["Key.V","","E"],
["Key.W","","E"],
["Key.X","","E"],
["Key.Y","","E"],
["Key.Z","","E"],
["Key.ZERO","","E"],
["Key.ONE","","E"],
["Key.TWO","","E"],
["Key.THREE","","E"],
["Key.FOUR","","E"],
["Key.FIVE","","E"],
["Key.SIX","","E"],
["Key.SEVEN","","E"],
["Key.EIGHT","","E"],
["Key.NINE","","E"],
["Key.F1","","E"],
["Key.F2","","E"],
["Key.F3","","E"],
["Key.F4","","E"],
["Key.F5","","E"],
["Key.F6","","E"],
["Key.F7","","E"],
["Key.F8","","E"],
["Key.F9","","E"],
["Key.F10","","E"],
["Key.F11","","E"],
["Key.F12","","E"],
["Key.MINUS","","E"], 
["Key.PLUS","","E"], 
["Key.DELETE","","E"], 
["Key.BACKSPACE","","E"], 
["Key.LBRACKET","","E"],
["Key.RBRACKET","","E"], 
["Key.BACKSLASH","","E"],
["Key.CAPSLOCK","","E"],
["Key.SEMICOLON","","E"],
["Key.QUOTE","","E"],
["Key.COMMA","","E"],
["Key.PERIOD","","E"],
["Key.SLASH","","E"],
["Key.ESCAPE","","E"],
["Key.ENTER","","E"],
["Key.SHIFT","","E"],
["Key.CONTROL","","E"],
["Key.ALT","","E"],
["Key.SPACE","","E"],
["Key.UP","","E"],
["Key.DOWN","","E"],
["Key.LEFT","","E"],
["Key.RIGHT","","E"],
["Input.justpressed","(Key.ENTER)","F"],
["Input.pressed","(Key.LEFT)","F"],
["Input.justreleased","(Key.SPACE)","F"],
["Input.delaypressed","(Key.Z, 5)","F"],
["Mouse.x",":Int","P"],
["Mouse.y",":Int","P"],
["Mouse.leftclick","()","F"],
["Mouse.leftheld","()","F"],
["Mouse.leftreleased","()","F"],
["Mouse.middleclick","()","F"],
["Mouse.middleheld","()","F"],
["Mouse.middlereleased","()","F"],
["Mouse.rightclick","()","F"],
["Mouse.rightheld","()","F"],
["Mouse.rightreleased","()","F"],
["Mouse.mousewheel",":Int","P"],
["Convert.tostring","(1234):String","F"],
["Convert.toint",'("15"):Int',"F"],
["Convert.tofloat",'("3.1417826"):Float',"F"],
["Random.int","(from, to_inclusive):Int","F"],
["Random.float","(from, to_inclusive):Int","F"],
["Random.string","(length):String","F"],
["Random.bool","():Bool","F"],
["Random.occasional","():Bool","F"],
["Random.rare","():Bool","F"],
["Random.pickstring",'("this one", "or this one?", "maybe this one?"):String',"F"],
["Random.pickint","(5, 14, 72, 92, 1, -723, 8):Int","F"],
["Random.pickfloat","(5.1, 14.2, 72.3, 92.4, 1.5, -723.6, 8.7):Float","F"],
["Debug.log","(message)","F"],
["Game.title","(title)","F"],
["Game.homepage","(url)","F"],
["Game.background","(color)","F"],
["Game.foreground","(color)","F"],
["Game.prompt","(description,defaultText):String","F"],
["Game.save","(key:String,value:String)","F"],
["Game.load","(key:String):String","F"],
["Game.editor","():Bool","F"],
["Game.time",":Int","F"],
["Game.restart","()","F"],
["String.fromCharCode","(code:Int):String","F"],
["Math.NEGATIVE_INFINITY",":Float","C"],
["Math.NaN",":Float","C"],
["Math.PI",":Float","C"],
["Math.POSITIVE_INFINITY",":Float","C"],
["Math.PI",":Float","C"],
["Math.abs","(v:Float):Float","F"],
["Math.acos","(v:Float):Float","F"],
["Math.asin","(v:Float):Float","F"],
["Math.atan","(v:Float):Float","F"],
["Math.atan2","(y:Float,x:Float):Float","F"],
["Math.ceil","(v:Float):Int","F"],
["Math.cos","(v:Float):Float","F"],
["Math.exp","(v:Float):Float","F"],
["Math.fceil","(v:Float):Float","F"],
["Math.ffloor","(v:Float):Float","F"],
["Math.floor","(v:Float):Int","F"],
["Math.fround","(v:Float):Float","F"],
["Math.isFinite","(v:Float):Bool","F"],
["Math.isNaN","(v:Float):Bool","F"],
["Math.log","(v:Float):Float","F"],
["Math.max","(a:Float,b:Float):Float","F"],
["Math.min","(a:Float,b:Float):Float","F"],
["Math.pow","(v:Float,exp:Float):Float","F"],
["Math.round","(v:Float):Int","F"],
["Math.sin","(v:Float):Float","F"],
["Math.sqrt","(v:Float):Float","F"],
["Math.tan","(v:Float):Float","F"],
/*,
["break"],
["case"],
["callback"],
["cast"],
["catch"],
["class"],
["continue"],
["default"],
["do"," expr-loop while( expr-cond );"],
["dynamic"],
["else"],
["enum"],
["extends"],
["extern"],
["false"],
["for","( variable in iterable ) expr-loop;"],
["function"],
["if","( expr-cond ) expr-1 [else expr-2]"],
["implements"],
["import"],
["in"],
["inline"],
["interface"],
["never"],
["new"],
["null"],
["override"],
["package"],
["private"],
["public"],
["return"],
["static"],
["super"],
["switch"],
["this"],
["throw"],
["trace"],
["true"],
["try"],
["typedef"],
["untyped"],
["using"],
["var"],
["while","( expr-cond ) expr-loop;"],
["Int"], 
["Float"], 
["String"], 
["Void"], 
["Std"], 
["Bool"], 
["Dynamic"] 
["Array"]*/
];

/*
if you want the hints to be sorted
function compareFn(a,b){
	return a[0].localeCompare(b[0]);
}
haxeHintArray.sort(compareFn);
*/

function CompletionsPick( p_oCompletion ) { 
 //  console.log( "==> Function entry: " + arguments.callee.name + "() <==" ) ; 
   //console.log( p_oCompletion ) ; 
   consolePrint(p_oCompletion.text+p_oCompletion.displayText,true);
   var dt = p_oCompletion.displayText;
   if (dt.indexOf("()")===0){
   	editor.replaceSelection("()",null);
   } else if (dt.indexOf("(")==0){
   	editor.replaceSelection("()",null);
   	editor.execCommand("goCharLeft");
   } else if (dt.indexOf(".")===0){
   	editor.replaceSelection(".",null);   	
   	CodeMirror.commands.autocomplete(editor);
   } else if (dt.indexOf(";")===0){
   	editor.replaceSelection(";",null);   	
   	CodeMirror.commands.autocomplete(editor);   	
   }
} 


CodeMirror.registerHelper("hint", "haxe", 
	function(editor, options) {
		
		var cur = editor.getCursor();
		var tok = editor.getTokenAt(cur);
		var tokStart = tok.string.toLowerCase();

		var line = editor.getLine(cur.line);
		var start = cur.ch;
		while (start>0){
			start--;
			if (isalnum(line.charCodeAt(start))||line[start]===".")  {
			} else {
				break;
			}
		}
		if (isalnum(line.charCodeAt(start))||line[start]===".")  {
		} else {
			start++;
		}
			
		var end=cur.ch-1;
		while (end<line.length-1){
			end++;
			if (isalnum(line.charCodeAt(end))||line[end]===".")  {
			} else {
				break;
			}
		}

		if (isalnum(line.charCodeAt(end))||line[end]===".")  {
		} else {
			end--;
		}
		end++;
		var token = line.substring(start,end);
		token = token.trim().toLowerCase();

		var matches=[];

		var searchArray = token.indexOf(".")>=0?haxeHintArray:haxeLibraryArray;
		for (var i=0;i<searchArray.length;i++){
			var ar = searchArray[i];
			var w = ar[0];
			if (w.length<token.length){
				continue;
			} 
			if (w.substring(0,token.length).toLowerCase()==token){
				var w2 = ar.length>1?ar[1]:"";
				var t = ar.length>2?ar[2]:"";
				matches.push({text:w,displayText:w2,render:renderHint,tag:t});
			}
		}

		function maybeAdd(str,t) {
			if (t==null){
				t="V";
			}
			if (str.toLowerCase().indexOf(token) == 0) {
				matches.push({text:str,displayText:"",render:renderHint,tag:t});
			}
				//matches.push(str);
		}

		for (var v = tok.state.localVars; v; v = v.next) maybeAdd(v.name,v.tag);
		for (var v = tok.state.globalVars; v; v = v.next) maybeAdd(v.name,v.tag);

		var result={list: matches, from: CodeMirror.Pos(cur.line, start), to: CodeMirror.Pos(cur.line, end)};
  		CodeMirror.on( result, "pick",   CompletionsPick ) ; 
		return result;
	}
);

// When an @ is typed, activate completion
editor.on("inputRead", function(editor, change) {
  if (change.text[0] == ".")
    editor.showHint();
});


editor.on('mousedown', function(cm, event) {
  if (event.target.className == 'cm-SOUND') {
    var seed = parseInt(event.target.innerHTML);
    playSound(seed);
  } else if (event.target.className == 'cm-LEVEL') {
    if (event.ctrlKey||event.metaKey) {
      document.activeElement.blur();  // unfocus code panel
      event.preventDefault();         // prevent refocus
      compile(["levelline",cm.posFromMouse(event).line]);
    }
  }
});

_editorCleanState = editor.getValue();

function checkEditorDirty() {
	var saveLink = document.getElementById('saveClickLink');

	if (_editorCleanState !== editor.getValue()) {
		_editorDirty = true;
		if(saveLink) {
			saveLink.innerHTML = 'SAVE*';
		}
	} else {
		_editorDirty = false;
		if(saveLink) {
			saveLink.innerHTML = 'SAVE';
		}
	}
}

function setEditorClean() {
	_editorCleanState = editor.getValue();
	if (_editorDirty===true) {
		var saveLink = document.getElementById('saveClickLink');
		if(saveLink) {
			saveLink.innerHTML = 'SAVE';
		}
		_editorDirty = false;
	}
}

/* https://github.com/ndrake/PuzzleScript/commit/de4ac2a38865b74e66c1d711a25f0691079a290d */
editor.on('change', function(cm, changeObj) {
  // editor is dirty
  checkEditorDirty();
});

var mapObj = {
   parallel:"&#8741;",
   perpendicular:"&#8869;"
};

/*
editor.on("beforeChange", function(instance, change) {
    var startline = 
    for (var i = 0; i < change.text.length; ++i)
      text.push(change.text[i].replace(/parallel|perpendicular/gi, function(matched){ 
        return mapObj[matched];
      }));

    change.update(null, null, text);
});*/


code.editorreference = editor;
editor.setOption('theme', 'ambiance');

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function tryLoadGist(id) {
	var githubURL = 'https://api.github.com/gists/'+id;

	consolePrint("Contacting GitHub",true);
	var githubHTTPClient = new XMLHttpRequest();
	githubHTTPClient.open('GET', githubURL);
	githubHTTPClient.onreadystatechange = function() {
	
		if(githubHTTPClient.readyState!=4) {
			return;
		}

		if (githubHTTPClient.responseText==="") {
			consoleError("GitHub request returned nothing.  A connection fault, maybe?");
		}

		var result = JSON.parse(githubHTTPClient.responseText);
		if (githubHTTPClient.status===403) {
			consoleError(result.message);
		} else if (githubHTTPClient.status!==200&&githubHTTPClient.status!==201) {
			consoleError("HTTP Error "+ githubHTTPClient.status + ' - ' + githubHTTPClient.statusText);
		} else {
			var code=result["files"]["script.txt"]["content"];
			editor.setValue(code);
			setEditorClean();
			unloadGame();
			compile(["restart"],code);
		}
	}
	githubHTTPClient.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	githubHTTPClient.send();
}

function tryLoadFile(fileName) {
	var fileOpenClient = new XMLHttpRequest();
	fileOpenClient.open('GET', 'demo/'+fileName+".txt");
	fileOpenClient.onreadystatechange = function() {
		
  		if(fileOpenClient.readyState!=4) {
  			return;
  		}
  		
		editor.setValue(fileOpenClient.responseText);
		setEditorClean();
		unloadGame();
		compile(["restart"]);
	}
	fileOpenClient.send();
}

function dropdownChange() {
	tryLoadFile(this.value);
	this.selectedIndex=0;
}

