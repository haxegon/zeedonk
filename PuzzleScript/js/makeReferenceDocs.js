/*
	node.js script for generating documentation. 

	To run, execute this from the command line:
	node makeReferenceDocs	
*/

var fs = require('fs');
eval(fs.readFileSync('autocompleteArrays.js')+'');

var modules = [];
var enums = [];
for (var i=0;i<haxeHintArray.length;i++){
	var r = haxeHintArray[i];
	if (r.length<3){
		continue;
	}
	var fn = r[0]+r[1];	
	var dotIndex=fn.indexOf(".");
	if (dotIndex>0){
		moduleName = fn.substring(0,dotIndex);
		if (modules.indexOf(moduleName)===-1){
			modules.push(moduleName);

			if (r[2]==="E"){
				enums.push(moduleName);
			}
		}
	}
}
/*
enums.sort();
modules.sort();
for (var i = 0;i<modules.length;i++){
	if (enums.indexOf(modules[i])>=0){
		modules.splice(i,1);
		i--;
	}
}
for(var i=0;i<enums.length;i++){
	modules.push(enums[i]);
}*/


function genReferencePage(moduleName){
	var pageHeader = "<!DOCTYPE html>"+
	"<html>"+
	"<head>"+
	' <meta charset="utf-8">'+
	"	<title>Terrylib_Online Reference " +moduleName+"</title>"+
	"<link href='https://fonts.googleapis.com/css?family=Lora:400,700' rel='stylesheet' type='text/css'>"+
	'<link rel="stylesheet" type="text/css" href="style.css">'+
	"</head>"+
	"<body>"+
	'<a href="/editor.html"><h2>Terrylib Online</h2></a> <p><a href="Tutorials.html">Tutorials</a> - <b>Library Reference</b> - <a href="Shortcuts.html">Keyboard Shortcuts</a><p>'+
	"<h1>Library Reference</h1>";

	var tableStart = "<table>	"+
	"<thead><tr class='header'><td  >Name</td><td  >Description</td><td>Example</td></tr></thead>"+
	"	<tbody>";

	var tableEnd = 	"</tbody>"+
	"</table>";

	var pageFooter = "</body>"+
	"</html>";

	var pageContents = "";
	var oldPreface="";

	var moduleHeader="";
	for (var i=0;i<modules.length;i++){
		var m = modules[i];
		if (moduleHeader.length>0){
			moduleHeader+=" - ";
		}
		if (m===moduleName){
			moduleHeader+=m;			
		} else {
			moduleHeader+='<a href="'+m+'.html">'+m+'</a>';
		}
	}
	moduleHeader+="<p>";

	var enumContents ="<b>"+ moduleName+"</b><p><div id='enumFrame'>";
	var enumAdded=false;
	var counter=0;
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
		var postface=dotIndex>=0?fn.substring(dotIndex+1):tag;
		if (fn.indexOf(moduleName)!==0){
			continue;
		}
		counter++;
		var row = '<tr class="' +  ((counter%2==0)?"even":"odd")+'">';
		if (preface!=oldPreface&&pageContents.length>0){
			//console.log(preface+"-"+oldPreface);
			row = "<tr style='border-top:5px solid black;'>";
		}
		var docString="";
		var cs = "";
		if (enums.indexOf(preface)===-1){
			var samplePath = "../demo/doc/"+r[0]+".hx";
			if (!fs.existsSync(samplePath)){
				fs.writeFileSync(samplePath,"");		
			}
			cs = fs.readFileSync(samplePath);
			if (cs.length>0){
				docString="<pre>"+cs+"</pre><a class=\"editLink\" href=\"../editor.html?demo=doc/"+r[0]+"\">✎</a>";
			}
		}
		//row+=<td>"+tag+"</td>;
		row+="<td>"+fn+"</td><td>"+doc+"</td><td><div>"+docString+"</div></td></tr>";
		pageContents+=row;
		oldPreface=preface;
		if (enumAdded){
			enumContents+=", ";
		}
		enumContents+=postface;
		enumAdded=true;
	}
	enumContents+="</div>";
	pageContents ="<b>"+ moduleName+"</b><p>"+pageContents;

	if (moduleName.length>0){		
		var wholePage = pageHeader+moduleHeader+tableStart+pageContents+tableEnd+pageFooter;
		if (enums.indexOf(moduleName)>=0){
			wholePage = pageHeader+moduleHeader+enumContents+pageFooter;
		} 
		fs.writeFileSync("../Documentation/"+moduleName+".html",wholePage);
	} else {
		var wholePage = pageHeader+moduleHeader+pageFooter;
		fs.writeFileSync("../Documentation/index.html",wholePage);		
	}
}

for (var i=0;i<modules.length;i++){
	genReferencePage(modules[i]);	
}
genReferencePage("");