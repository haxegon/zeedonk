function update(){
  var t = (Game.time)/30+10;
  var big_r=40;
  
  var x = Gfx.screenwidthmid;
  var y = Gfx.screenheightmid;

  for (i in 0...6){
		var r = 10+(Math.sin(Game.time/10+i)+1)*5;
    var a1 = 2*Math.PI*(i+0.5)/6-t;
    var a2 = 2*Math.PI*(i+1+0.5)/6-t;
    var a3 = 2*Math.PI*(i+2+0.5)/6-t;
    var m1 = 1*(Math.cos(t)+1);    
    var m2 = 1*(Math.sin(t*1.1+1)+1);
    var m3 = 1*(Math.sin(t*1.2+2)+1);
    var x1 = Gfx.screenwidthmid+big_r*Math.sin(a1)*m1;
    var y1 = Gfx.screenheightmid+big_r*Math.cos(a1)*m1;
    var x2 = Gfx.screenwidthmid+big_r*Math.sin(a2)*m2;
    var y2 = Gfx.screenheightmid+big_r*Math.cos(a2)*m2;
    var x3 = Gfx.screenwidthmid+big_r*Math.sin(a3)*m3;
    var y3 = Gfx.screenheightmid+big_r*Math.cos(a3)*m3;
	  Gfx.filltri(x1,y1,x2,y2,x3,y3,Gfx.HSL((t+i+130)*100,1,.5));
  }
}