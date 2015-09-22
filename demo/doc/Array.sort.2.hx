var a = ["plural","elastic","alluvial","pee"];

//count number of 'L's in a string
function lCount(s){
  var count=0;
  for(i in 0...s.length){
    if (s[i]=="l"||s[i]=='L'){
      count++;
    }
  }    
  return count;
}

//sort by number of 'L's
function compare(a,b){
  return lCount(a)-lCount(b);
}

trace(a);
a.sort();
trace(a);
a.sort(compare);
trace(a);