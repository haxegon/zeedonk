/*
	node.js script for generating documentation. 

	To run, execute this from the command line:
	node makeReferenceDocs	
*/

var fs = require('fs');
eval(fs.readFileSync('autocompleteArrays.js')+'');

CodeMirror = require('./addon/runmode/runmode.node.js');
haxe = require('./codemirror/haxe.js');

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


function highlight(text){
	var result="<div class='Codemirror cm-s-default'>";
	function f(token,style,c,d,e){
	        if (token=="\n"){
	                result+="<br>";
	        } else if (token.trim().length==0){
	                for (var i=0;i<token.length;i++){
	                        //replace whitespace with explicit spaces
	                        result+="&nbsp;";
	                }
	        } else {
	                result+="<span class='cm-"+style+"'>"+token+"</span>";
	        }
	}
 	//text='function update(){\n  trace("Hello, sailor!");\n}';
	CodeMirror.runMode(text, "haxe",f);
	result+="</div>";
	return result;
}

function genReferencePage(moduleName){
	var pageHeader = "<!DOCTYPE html>"+
	"<html>"+
	"<head>"+
	' <meta charset="utf-8">'+
	"	<title>Zeedonk_Online Reference " +moduleName+"</title>"+
	"<link href='https://fonts.googleapis.com/css?family=Lora:400,700' rel='stylesheet' type='text/css'>"+
	'<link rel="stylesheet" type="text/css" href="style.css">'+
	'<link rel="stylesheet" type="text/css" href="../css/codemirror.css">'+
	'<script src="../js/codemirror/codemirror.js"></script>'+
	'<script src="../js/codemirror/haxe.js"></script>'+
	"</head>"+
	"<body>"+
	'<div class="navBar">'+
	'<a href="/editor.html"><h2>Zeedonk Online</h2></a> <p><a class="moduleButton" href="Tutorials.html">Tutorials</a> <span class="moduleSelected">Library Reference</span> <a class="moduleButton" href="Shortcuts.html">Keyboard Shortcuts</a>'+
	"</div><p>"+
	"<h1>Library Reference</h1>";

	var tableStart = "<table>	"+
	//"<thead><tr class='header'><td  >Name</td><td  >Description</td></tr></thead>"+
	"	<tbody>";

	var tableEnd = 	"</tbody>"+
	"</table>";

	var pageFooter = '<br><br><br><center><img src="../images/bigzeedonk.png"><br><br><br></center></body>'+
	"</html>";

	var pageContents = "";
	var oldPreface="";

	var moduleHeader="<div class='navBar'>";
	for (var i=0;i<modules.length;i++){
		var m = modules[i];
		if (moduleHeader.length>0){
			//moduleHeader+=" - ";
		}
		if (m===moduleName){
			moduleHeader+='<span class="moduleSelected">'+m+"</span>";			
		} else {
			moduleHeader+='<a class="moduleButton" href="'+m+'.html">'+m+'</a>';
		}
	}
	moduleHeader+="</div><p>";

	var enumContents ="<div id='enumFrame'>";
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
				var formatted = highlight(cs+"");
				docString="<div class=\"codeInsert\">"+formatted+"<a class=\"editLink\" href=\"../editor.html?demo=doc/"+r[0]+"\">✎</a></div>";
			}
		}
		//row+=<td>"+tag+"</td>;
		row+="<td><div class=\"funcdec\">"+highlight(fn+"")+"</div>";
		if (doc.length>0){
			row+="<div class='docLine'>"+doc+"</div>";
		}
		row+="<div>"+docString+"</div></td></tr>";
		pageContents+=row;
		oldPreface=preface;
		if (enumAdded){
			enumContents+=", ";
		}
		enumContents+=postface;
		enumAdded=true;
	}
	enumContents+="</div>";
	var tableHeader = "<h3 class='moduleHeader'>"+ moduleName+"</h3><p>";
	pageContents = pageContents;

	var moduleDescription="";
	if (moduleDescriptions.hasOwnProperty(moduleName) && moduleDescriptions[moduleName].length>0){
		moduleDescription = '<div class="moduleDescription">'+moduleDescriptions[moduleName]+'</div>'
	}
	
	if (moduleName.length>0){		
		var wholePage = pageHeader+moduleHeader+tableHeader+moduleDescription+tableStart+pageContents+tableEnd+pageFooter;
		if (enums.indexOf(moduleName)>=0){
			wholePage = pageHeader+moduleHeader+tableHeader+moduleDescription+enumContents+pageFooter;
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