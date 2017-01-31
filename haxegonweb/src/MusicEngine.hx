import openfl.display.*;          
import openfl.media.*; 
import openfl.events.*;
import openfl.Assets;

@:keep
class MusicDat {
	public var patternLength:Int;
	public var cellDuration:Int;
	public var instruments:Array<Int>;
	public var notes : Array<Array<Array<Array<Int>>>>;
	public function new(){}
}

@:keep
class MusicEngine {

	public static var vol:Float=1.0;  
  public static var musicLoop:Bool=true;

	public static function update():Void{
		if (!playing) return;
	    
	    var pieceLengthInTicks : Int = dat.notes.length*dat.patternLength*dat.cellDuration;

	    playTick++;   
      if (musicLoop) {
        playTick = playTick%pieceLengthInTicks;
      } else {
        if (playTick==pieceLengthInTicks){
          playing=false;
          return;
        }
      }

	    
	    var globalCell = Std.int(playTick/dat.cellDuration);
	    var playPattern = Std.int(globalCell/dat.patternLength);
	    selectedSequence=playPattern;
	   	var patternProgress = globalCell-dat.patternLength*playPattern;
	    
	    if (playTick%dat.cellDuration==0){
	    	TryPlayNote(patternProgress);
	    }	     
	}


private static function DoPlayNote(c,n){
  var notePos = n[2];
	var pitch = Math.pow(2,(n[0]-61)/12);
  var noteLength = n[1]*dat.cellDuration/30;
	Webmusic.playnote(dat.instruments[c],pitch,noteLength,vol*n[3]/maxVol);
}

private static function TryPlayNote(x){
  for (c in 0...5){
    var channel = dat.notes[selectedSequence][c];  
    for (n in channel){
        // var n = channel[nIndex];
        // a note is [note, length, onset, amplitude]
        var notePos = n[2];
        if (notePos==x){  
		      DoPlayNote(c,n);
				}         
    }    
  }
}  

	public static function stopmusic(){
		stopPlay();
	}

	public static function playmusic(str:String){
		playing=true;
		loadDat(str);
		startPlay();
	}

	private static var playing:Bool=false;
	private static var playTick:Int=0;
	private static var selectedSequence:Int=0;

private static var maxVol:Int=9;

private static function startPlay() {
  playing=true;
  playTick= -1;
  
}

private static function  stopPlay(){
  playing=false;
}

private static var dat:MusicDat;

private static var B62 = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"à","á","â","ä","æ","ã","å","ā","è","é"        
];

private static function stripWhitespace(s:String):String{
  var result="";
  for(i in 0...s.length){
    var c = s.charAt(i);
    if (c==" "||c=="\t"||c=="\n"){
      continue;
    }
    result+=c;
  }
  return result;
}

private static function loadDat(s:String){
  s = stripWhitespace(s);
  s = unmakeRLE(s);
  var arr : Array<Int> = [];
  for(ci in 0...s.length){
  	var c = s.charAt(ci);
  	arr.push(B62.indexOf(c));
	}
  	dat = new MusicDat();
	
	var i=0;
	dat.patternLength=arr[i];

	i++;
	dat.cellDuration=arr[i];

	dat.instruments=[];
	for (j in 0...5){
    var n:Int=0;
    var p=1;
    for (k in 0...5){
      i++;
   		n = n + p*arr[i];      
   		p=p*62;
    }
    dat.instruments.push(n);
  }
    
       
	var outputAr=[];

  i++;
	var sequenceCount=arr[i];
	outputAr.push(arr[i]);
    dat.notes=[];
	for (j in 0...sequenceCount){       
  	var sequence = [[],[],[],[],[]];
    for (m in 0...5){
      i++;    	
      var noteCount=arr[i];
	outputAr.push(arr[i]);
    	var noteSeq=sequence[m];
      for(k in 0...noteCount){
        i++;
        var v1 = arr[i];
	outputAr.push(arr[i]);
        i++;
        var v2 = arr[i];
	outputAr.push(arr[i]);
        var v = v1+62*v2;

        noteSeq.push([v]);  
      }
      for (l in 1...4){
        for(m in 0...noteCount){
            i++;
            noteSeq[m].push(arr[i]);
	outputAr.push(arr[i]);
          }
      }
		}
    dat.notes.push(sequence);
  }
}
    private static function saveDat():String{  
  var intArray=[];
  intArray.push(dat.patternLength);
  intArray.push(dat.cellDuration);
  for ( i in 0...5){
   	var n = dat.instruments[i];
    for ( j in 0...5){
      var p1 = Math.pow(62,j);
      var v = Std.int(n/p1)%62;
      intArray.push(v);
    }
  }

	var outputAr=[];
  intArray.push(dat.notes.length);	
	outputAr.push(intArray[intArray.length-1]);
  var notes:Array<Array<Array<Array<Int>>>> = dat.notes;
  for(r in notes){
    for (i in 0...5){
      var instNotes = r[i];
      intArray.push(instNotes.length);
      for (n in instNotes){
      	intArray.push(n[0]%62);
      	intArray.push(Std.int(n[0]/62)%62);    
      }
      for (j in 1...4){
        for (n in instNotes){            
          intArray.push(n[j]);
        }
      }
    }
  }

  var result="";
	for( n in intArray){
		result = result+B62[n];    
  }
      
  result = makeRLE(result);
  return result;
}

  private static function makeRLE(s:String):String{
		var result ="";
    var lastChar=s.charAt(0);
    var lastCharCount=1;
    for (i in 1...s.length){
         var c = s.charAt(i);
         if (c == lastChar){
     		 	lastCharCount++; 
    } else {
      if (lastCharCount>1){
        result = result+lastCharCount;
      }
      result = result + lastChar;
			lastChar = c;
      lastCharCount = 1;
      
    }
    }
      
    if (lastCharCount>1){
      result = result+lastCharCount;
    }
    result = result + lastChar;
    
    return result;
  }

  private static function unmakeRLE(s:String):String{
	var result:String ="";
    var lastInt:Int=0;
    var i = 0;
    while(i<s.length){
      var c:String = s.charAt(i);
      while (c=="0"||c=="1"||c=="2"||c=="3"||c=="4"||c=="5"||c=="6"||c=="7"||c=="8"||c=="9"){
		lastInt=lastInt*10+Std.parseInt(c);
        i++;
        c=s.charAt(i);
      }
	    if (lastInt==0){
	      lastInt=1;
	    }

      for (i in 0...lastInt){
          result = result +c;    
      }
      i++;
      c=s.charAt(i);
      lastInt=0;
    }
          
    return result;
  }
    
           

}
