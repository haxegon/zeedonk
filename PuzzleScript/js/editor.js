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

var cls = "CodeMirror-TerryLib-";

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
		"Esc":"clearSearch"}
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


function CompletionsPick( p_oCompletion ) { 
 //  console.log( "==> Function entry: " + arguments.callee.name + "() <==" ) ; 
   //console.log( p_oCompletion ) ; 
   var c = editor.getCursor();
   var l = editor.getLine(c.line);

   if (c.ch<l.length){
   	var next = l[c.ch];
   	if (next=="("){
   		return;
   	}
   }
   
   var dt = p_oCompletion.displayText;

   var startBr = dt.indexOf("(");
   var endBr = dt.indexOf(")");
   var paramStr = "";
   if (startBr>=0){
   	paramStr=dt.substring(startBr+1,endBr);
   }

   var dt = p_oCompletion.displayText;
   dt=dt.toLowerCase();
   if (dt.indexOf("():void")===0||(dt.indexOf("()")===0&&dt[dt.length-1]==")")) {
   	editor.replaceSelection("();",null);
   } else if (dt.indexOf("()")===0){
   	editor.replaceSelection("()",null);
   } else if (dt.indexOf("(")==0){
   	if (dt.indexOf(":void")>=0 || dt[dt.length-1]==")"){
   		editor.replaceSelection("();",null);
   		editor.execCommand("goCharLeft");
   		editor.execCommand("goCharLeft");
   		editor.replaceSelection(paramStr,"around");
   	} else {
   		editor.replaceSelection("()",null);
   		editor.execCommand("goCharLeft");
   		editor.replaceSelection(paramStr,"around");
   	}
   } else if (dt.indexOf(".")===0){
   	editor.replaceSelection(".",null);   	
   	CodeMirror.commands.autocomplete(editor);
   } else if (dt.indexOf(";")===0){
   	editor.replaceSelection(";",null);   	
   	CodeMirror.commands.autocomplete(editor);   	
   }
} 

function makeTooltip(x, y, content) {
	var node = elt("div", cls + "tooltip", content);
	node.style.left = x + "px";
	node.style.top = y + "px";
	document.body.appendChild(node);
	return node;
}

function remove(node) {
	var p = node && node.parentNode;
	if (p) p.removeChild(node);
}


function elt(tagname, cls /*, ... elts*/) {
	var e = document.createElement(tagname);
	if (cls) e.className = cls;
	for (var i = 2; i < arguments.length; ++i) {
	var elt = arguments[i];
	if (typeof elt == "string") elt = document.createTextNode(elt);
	e.appendChild(elt);
	}
	return e;
}

CodeMirror.registerHelper("hint", "haxe", 
	function(editor, options) {
		
		var cur = editor.getCursor();
		var tok = editor.getTokenAt(cur);
		var tokStart = tok.string.toLowerCase();


		var line = editor.getLine(cur.line);
		var start = cur.ch;

		var ellipses=false;
		if (start>=3 && line[start]!=="." && line[start-1]==="."&&line[start-2]==="."&&line[start-3]==="."){
			ellipses=true;
		}

		function validStop(pos){
			if (line[pos]!=="."){
				return false;
			}
			if (pos>1 && line[pos-1]==="."&&line[pos-2]==="."){
				return false;
			}
			return true;
		}



		while (start>0){
			start--;
			if (isalnum(line.charCodeAt(start))||validStop(start))  {
			} else {
				break;
			}
		}
		if (isalnum(line.charCodeAt(start))||validStop(start))  {
		} else {
			start++;
		}
			
		function validStopPost(pos){
			if (line[pos]!=="."){
				return false;
			}
			if (pos+2<line.length && line[pos+1]==="."&&line[pos+2]==="."){
				return false;
			}
			return true;
		}

		var end=cur.ch-1;
		while (end<line.length-1){
			end++;
			if (isalnum(line.charCodeAt(end))||validStopPost(end))  {
			} else {
				break;
			}
		}

		if (isalnum(line.charCodeAt(end))||validStopPost(end))  {
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
				var d = ar.length>3?ar[3]:"";
				matches.push({text:w,displayText:w2,render:renderHint,tag:t,doc:d});
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

      var tooltip = null;
      CodeMirror.on(result, "close", function() { remove(tooltip); });
      CodeMirror.on(result, "update", function() { remove(tooltip); });
      CodeMirror.on(result, "select", function(cur, node) {
        remove(tooltip);
        var content = cur.doc;
        if (content) {
          tooltip = makeTooltip(node.parentNode.getBoundingClientRect().right + window.pageXOffset,
                                node.getBoundingClientRect().top + window.pageYOffset, content);
          tooltip.className += " " + cls + "hint-doc";
        }
      });

  		CodeMirror.on( result, "pick",   CompletionsPick ) ; 
		return result;
	}
);

// When an @ is typed, activate completion
editor.on("inputRead", function(editor, change) {	
  if (change.text[0] == ".")
  	var shouldHint=true;
  
  	var c = editor.getCursor();
  	if (c.ch>0){
  		var l = editor.getLine(c.line);
  		if (l[c.ch-1]!="."){
  			shouldHint==false;
  		} else if (l.length>2){
  			var code = l.charCodeAt(c.ch-2);
			if (!isalnum(code)){
    			shouldHint=false;		
			}
  		}
  	}
  	if (shouldHint){
  		editor.showHint();		
  	}
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

			var code=result["files"]["script.hx"]==null?result["files"]["script.txt"]["content"] : result["files"]["script.hx"]["content"];
			editor.setValue(code);
			setEditorClean();
			unfocus();
			stopClick();
			compile(["restart"],code);
		}
	}
	githubHTTPClient.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	githubHTTPClient.send();
}

function tryLoadFile(fileName) {
	var fileOpenClient = new XMLHttpRequest();
	fileOpenClient.open('GET', 'demo/'+fileName+".hx");
	fileOpenClient.onreadystatechange = function() {
		
  		if(fileOpenClient.readyState!=4) {
  			return;
  		}
  		
		editor.setValue(fileOpenClient.responseText);
		setEditorClean();
		unfocus();
	}
	fileOpenClient.send();
}

function dropdownChange() {
	tryLoadFile(this.value);
	this.selectedIndex=0;
}

