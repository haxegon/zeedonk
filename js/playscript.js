
		window.addEventListener ("touchmove", function (event) { event.preventDefault (); }, false);
		if (typeof window.devicePixelRatio != 'undefined' && window.devicePixelRatio > 2) {
			var meta = document.getElementById ("viewport");
			meta.setAttribute ('content', 'width=device-width, initial-scale=' + (2 / window.devicePixelRatio) + ', user-scalable=no');
		}
		
function displayError(message) {
	var errorText = document.getElementById("errormessage");
	errorText.innerHTML="ERROR "+message+"<br>";

}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}




function qualifyURL(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.href;
}


var interpreter;
function terryRun(text){
	//playSound(1232);
	if (interpreter==null){
		interpreter = new Webbridge();
	}
	interpreter.runScript(text);
}



function tryLoadFile(fileName) {
  var fileOpenClient = new XMLHttpRequest();
  var contentType = "text/plain ; charset=utf-8";
  fileOpenClient.open('GET', fileName+".hx");
  fileOpenClient.setRequestHeader('Content-type', contentType);

  fileOpenClient.onreadystatechange = function() {
    
      if(fileOpenClient.readyState!=4) {
        return;
      }
      var code = fileOpenClient.responseText;
      terryRun(code);
      gameScript=code;


      var hacklink = document.getElementById("hacklink");

      var url = "editor.html?demo=../"+fileName;
      url=qualifyURL(url);

      hacklink.href=url;

  }
  fileOpenClient.send();
}


function loadDefault(){
  tryLoadFile("default");
}

function getData(){
  var fileToOpen=getParameterByName("demo");
  if (fileToOpen!==null&&fileToOpen.length>0) {
    tryLoadFile("demo/"+fileToOpen);
    return;
  }

	var id = getParameterByName("p").replace(/[\\\/]/,"");
	if (id===null||id.length===0) {
    loadDefault()
		return;
	}

	var githubURL = 'https://api.github.com/gists/'+id;

	var githubHTTPClient = new XMLHttpRequest();
	githubHTTPClient.open('GET', githubURL);
	githubHTTPClient.onreadystatechange = function() {
		if(githubHTTPClient.readyState!=4) {
			return;
		}
		var result = JSON.parse(githubHTTPClient.responseText);
		if (githubHTTPClient.status===403) {
			displayError(result.message);
		} else if (githubHTTPClient.status!==200&&githubHTTPClient.status!==201) {
			displayError("HTTP Error "+ githubHTTPClient.status + ' - ' + githubHTTPClient.statusText);
		}
		var result = JSON.parse(githubHTTPClient.responseText);
    var code=result["files"]["script.hx"]==null?result["files"]["script.txt"]["content"] : result["files"]["script.hx"]["content"];
		terryRun(code);
    gameScript=code;
/*
		if (state.metadata.homepage!==undefined) {
			var homepage=state.metadata.homepage;
			var homepageLink = document.getElementById("homepagelink");
			homepageLink.innerHTML=strip_http(homepage);
 			if (!homepage.match(/^https?:\/\//)) {
 				homepage = "http://" + homepage;
 			}
 			homepageLink.href = homepage;
		}
		if (state.metadata.title!==undefined) {
			var title=state.metadata.title;
			var gametitle = document.getElementById("gametitle");
			gametitle.innerHTML=title;
			window.document.title=title+" - Zeedonk Game";
		}*/
//                Mobile.enable();
		var hacklink = document.getElementById("hacklink");

		var url = "editor.html?hack="+id;
		url=qualifyURL(url);

		hacklink.href=url;
	}
	githubHTTPClient.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	githubHTTPClient.send();
}

getData();
