/*
	node.js script for generating documentation. 

	To run, execute this from the command line:
	node makeReferenceDocs	
*/

var fs = require('fs');
eval(fs.readFileSync('autocompleteArrays.js')+'');

var pageHeader = "<!DOCTYPE html>"+
"<html>"+
"<head>"+
"	<title>Terrylib_Online Reference</title>"+
"	<style type='text/css'>"+
"	table{"+
"		border-collapse: collapse;"+
"	}"+
"	tr, td{"+
"		padding :10px;"+
"		border: 1px solid black;"+
""+
"	}"+
"	</style>"+
"</head>"+
"<body>"+
"<h1>Reference</h1>"+
"<table>	"+
"	<tbody>";

var pageFooter = 	"</tbody>"+
"</table>"+
"</body>"+
"</html>";

var pageContents = "";
var oldPreface="";
for (var i=0;i<haxeHintArray.length;i++){
	var r = haxeHintArray[i];
	if (r.length<3){
		continue;
	}
	var tag = r[2];
	var fn = r[0]+r[1];
	var doc =(r.length>3)?r[3]:"";
	var dotIndex=fn.indexOf(".");
	var preface=dotIndex>=0?fn.substring(0,dotIndex):tag;

	var row = "<tr>"
	if (preface!=oldPreface&&pageContents.length>0){
		//console.log(preface+"-"+oldPreface);
		row = "<tr style='border-top:5px solid black;'>";
	}
	//row+=<td>"+tag+"</td>;
	row+="<td>"+fn+"</td><td width='500px'>"+doc+"</td><td><a href=''>example</a></td></tr>";
	pageContents+=row;
	oldPreface=preface;
}
var wholePage = pageHeader+pageContents+pageFooter;
fs.writeFileSync("../newdocs/index.html",wholePage);