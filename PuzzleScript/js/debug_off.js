var canSetHTMLColors=true;
var canDump=false;
var canOpenEditor=false;
var canYoutube=true;
var IDE=false;

function stripTags(str) {
	var div = document.createElement("div");
	div.innerHTML = str;
	var result = div.textContent || div.innerText || "";
	return result;
}

function consolePrint(str){
	window.console.log(str);
}
function consolePrintWithLines(text,lineNumber,urgent) {
	window.console.log(text+","+lineNumber);
}
function consolePrintWithLinesArray(text,lineNumber,urgent) {
	window.console.log(text+","+lineNumber);
}
function consoleCacheDump(str){
	window.console.log(str);
}


function logError(str, lineNumber,urgent,cpos) {
	var errorText = document.getElementById("errormessage");
	str=stripTags(str);
	errorText.innerHTML+=str+"<br>";
}

function consoleError(str,lineNumber){
	var errorText = document.getElementById("errormessage");
	str=stripTags(str);
	errorText.innerHTML+=str+"<br>";
}

function logErrorNoLine(str){
	var errorText = document.getElementById("errormessage");
	str=stripTags(str);
	errorText.innerHTML+=str+"<br>";
}

function logBetaMessage(str){
	var errorText = document.getElementById("errormessage");
	str=stripTags(str);
	errorText.innerHTML+=str+"<br>";	
}

function clearInputHistory() {}
function pushInput(inp) {}