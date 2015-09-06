package terrylib;
	
import terrylib.util.*;
import openfl.display.*;
import openfl.geom.*;
import openfl.events.*;
import openfl.net.*;
import openfl.text.*;
import openfl.Assets;
import openfl.Lib;
import openfl.system.Capabilities;

typedef Gfxdrawparams = {
  @:optional var scale:Float;
  @:optional var xscale:Float;
  @:optional var yscale:Float;
  @:optional var rotation:Float;
  @:optional var xpivot:Float;
  @:optional var ypivot:Float;
	@:optional var alpha:Float;
	@:optional var red:Float;
	@:optional var green:Float;
	@:optional var blue:Float;
	@:optional var xalign:Int;
	@:optional var yalign:Int;
}

class Gfx {
	public static var LEFT:Int = -20000;
	public static var RIGHT:Int = -20001;
	public static var TOP:Int = -20002;
	public static var BOTTOM:Int = -20003;
	public static var CENTER:Int = -20004;
	
	public static var screenwidth:Int;
	public static var screenheight:Int;
	public static var screenwidthmid:Int;
	public static var screenheightmid:Int;
	public static var doclearscreeneachframe:Bool;
	
	public static var screenscale:Int;
	public static var devicexres:Int;
	public static var deviceyres:Int;
	public static var fullscreen:Bool;
	
	public static var currenttilesetname:String;
	public static var backbuffer:BitmapData;
	public static var drawto:BitmapData;
	
	/** Create a screen with a given width, height and scale. Also inits Text. */
	public static function resizescreen(width:Float, height:Float, scale:Int = 1) {
		initgfx(Std.int(width), Std.int(height), scale);
		Text.init(gfxstage);
		showfps = false;
		fps();
		gfxstage.addChild(screen);
		
		updategraphicsmode();
	}
	
	public static var showfps:Bool;
	private static var render_fps:Int;
	private static var render_fps_max:Int = -1;
	private static var update_fps:Int;
	private static var update_fps_max:Int = -1;
	public static function fps():Int {
		return render_fps_max;
	}
	public static function updatefps():Int {
		return update_fps_max;
	}
	
	/** Change the tileset that the draw functions use. */
	#if !terrylibweb
	public static function changetileset(tilesetname:String) {
		if (currenttilesetname != tilesetname) {
			if(tilesetindex.exists(tilesetname)){
				currenttileset = tilesetindex.get(tilesetname);
				currenttilesetname = tilesetname;
			}else {
				throw("ERROR: Cannot change to tileset \"" + tilesetname + "\", no tileset with that name found.");
			}
		}
	}
	#else
	public static function changetileset(tilesetname:String) {
		//Do nothing in web version
	}
	#end
	
	#if !terrylibweb
	public static function numberoftiles():Int {
		return tiles[currenttileset].tiles.length;
	}
	#end
		
	/** Makes a tile array from a given image. */
	#if terrylibweb
	public static function loadtiles(imagename:String, width:Int, height:Int) {
		Webdebug.log("Error: \"loadtiles\" function not available in webscript version.");
	}
	#else
	public static function loadtiles(imagename:String, width:Int, height:Int) {
		buffer = new Bitmap(Assets.getBitmapData("data/graphics/" + imagename + ".png")).bitmapData;
		if (buffer == null) {
			throw("ERROR: In loadtiles, cannot find data/graphics/" + imagename + ".png.");
			return;
		}
		
		var tiles_rect:Rectangle = new Rectangle(0, 0, width, height);
		tiles.push(new Tileset(imagename, width, height));
		tilesetindex.set(imagename, tiles.length - 1);
		currenttileset = tiles.length - 1;
		
		var tilerows:Int;
		var tilecolumns:Int;
		tilecolumns = Std.int((buffer.width - (buffer.width % width)) / width);
		tilerows = Std.int((buffer.height - (buffer.height % height)) / height);
		
		for (j in 0 ... tilerows) {
			for (i in 0 ... tilecolumns) {
				var t:BitmapData = new BitmapData(width, height, true, 0x000000);
				settrect(i * width, j * height, width, height);
				t.copyPixels(buffer, trect, tl);
				tiles[currenttileset].tiles.push(t);
			}
		}
		
		changetileset(imagename);
	}
	#end
	
	#if !terrylibweb
	/** Creates a blank tileset, with the name "imagename", with each tile a given width and height, containing "amount" tiles. */
	public static function createtiles(imagename:String, width:Float, height:Float, amount:Int) {
		tiles.push(new Tileset(imagename, Std.int(width), Std.int(height)));
		tilesetindex.set(imagename, tiles.length - 1);
		currenttileset = tiles.length - 1;
		
		for (i in 0 ... amount) {
			var t:BitmapData = new BitmapData(Std.int(width), Std.int(height), true, 0x000000);
			tiles[currenttileset].tiles.push(t);
		}
		
		changetileset(imagename);
	}
	
	/** Returns the width of a tile in the current tileset. */
	public static function tilewidth():Int {
		return tiles[currenttileset].width;
	}
	
	/** Returns the height of a tile in the current tileset. */
	public static function tileheight():Int {
		return tiles[currenttileset].height;
	}
	#end
	
	/** Loads an image into the game. */
	#if terrylibweb
	public static function loadimage(imagename:String) {
		Webdebug.log("Error: \"loadtiles\" function not available in webscript version.");
	}
	#else
	public static function loadimage(imagename:String) {
		buffer = new Bitmap(Assets.getBitmapData("data/graphics/" + imagename + ".png")).bitmapData;
		if (buffer == null) {
			throw("ERROR: In loadimage, cannot find data/graphics/" + imagename + ".png.");
			return;
		}
		
		imageindex.set(imagename, images.length);
		
		var t:BitmapData = new BitmapData(buffer.width, buffer.height, true, 0x000000);
		settrect(0, 0, buffer.width, buffer.height);			
		t.copyPixels(buffer, trect, tl);
		images.push(t);
	}
	#end
	
	/** Creates a blank image, with the name "imagename", with given width and height. */
	public static function createimage(imagename:String, width:Float, height:Float) {
		imageindex.set(imagename, images.length);
		
		var t:BitmapData = new BitmapData(Math.floor(width), Math.floor(height), true, 0x000000);
		images.push(t);
	}
	
	/** Returns the width of the image. */
	public static function imagewidth(imagename:String):Int {
		if(imageindex.exists(imagename)){
			imagenum = imageindex.get(imagename);
		}else {
			throw("ERROR: In imagewidth, cannot find image \"" + imagename + "\".");
			return 0;
		}
		
		return images[imagenum].width;
	}
	
	/** Returns the height of the image. */
	public static function imageheight(imagename:String):Int {
		if(imageindex.exists(imagename)){
			imagenum = imageindex.get(imagename);
		}else {
			throw("ERROR: In imageheight, cannot find image \"" + imagename + "\".");
			return 0;
		}
		
		return images[imagenum].height;
	}
	
	/** Tell draw commands to draw to the actual screen. */
	public static function drawtoscreen() {
		drawingtoscreen = true;
		drawto.unlock();
		drawto = backbuffer;
		drawto.lock();
	}
	
	/** Tell draw commands to draw to the given image. */
	public static function drawtoimage(imagename:String) {
		drawingtoscreen = false;
		imagenum = imageindex.get(imagename);
		
		drawto.unlock();
		drawto = images[imagenum];
		drawto.lock();
	}
	
	#if !terrylibweb
	/** Tell draw commands to draw to the given tile in the current tileset. */
	public static function drawtotile(tilenumber:Int) {
		drawingtoscreen = false;
		drawto.unlock();
		drawto = tiles[currenttileset].tiles[tilenumber];
		drawto.lock();
	}
	#end
	
	/** Helper function for image drawing functions. */
	private static function imagealignx(x:Float):Float {
		if (x == CENTER) return Gfx.screenwidthmid - Std.int(images[imagenum].width / 2);
		if (x == LEFT || x == TOP) return 0;
		if (x == RIGHT || x == BOTTOM) return images[imagenum].width;
		return x;
	}
	
	/** Helper function for image drawing functions. */
	private static function imagealigny(y:Float):Float {
		if (y == CENTER) return Gfx.screenheightmid - Std.int(images[imagenum].height / 2);
		if (y == LEFT || y == TOP) return 0;
		if (y == RIGHT || y == BOTTOM) return images[imagenum].height;
		return y;
	}
	
	/** Helper function for image drawing functions. */
	private static function imagealignonimagex(x:Float):Float {
		if (x == CENTER) return Std.int(images[imagenum].width / 2);
		if (x == LEFT || x == TOP) return 0;
		if (x == RIGHT || x == BOTTOM) return images[imagenum].width;
		return x;
	}
	
	/** Helper function for image drawing functions. */
	private static function imagealignonimagey(y:Float):Float {
		if (y == CENTER) return Std.int(images[imagenum].height / 2);
		if (y == LEFT || y == TOP) return 0;
		if (y == RIGHT || y == BOTTOM) return images[imagenum].height;
		return y;
	}
	
	/** Draws image by name. 
	 * Parameters can be: rotation, scale, xscale, yscale, xpivot, ypivoy, alpha
	 * x and y can be: Gfx.CENTER, Gfx.TOP, Gfx.BOTTOM, Gfx.LEFT, Gfx.RIGHT. 
	 * */
	public static function drawimage(x:Float, y:Float, imagename:String, ?parameters:Gfxdrawparams) {
		if (skiprender && drawingtoscreen) return;
		if (!imageindex.exists(imagename)) {
			throw("ERROR: In drawimage, cannot find image \"" + imagename + "\".");
			return;
		}
		imagenum = imageindex.get(imagename);
		
		tempxpivot = 0;
		tempypivot = 0;
		tempxscale = 1.0;
		tempyscale = 1.0;
		temprotate = 0;
		tempred = 1.0; tempgreen = 1.0;	tempblue = 1.0;	tempalpha = 1.0;
		alphact.redMultiplier = 1.0; alphact.greenMultiplier = 1.0;	alphact.blueMultiplier = 1.0;
		alphact.alphaMultiplier = tempalpha;
		changecolours = false;
		tempxalign = x;	tempyalign = y;
		
		x = imagealignx(x); y = imagealigny(y);
		if (parameters != null) {
			if (parameters.xalign != null) {
				if (parameters.xalign == CENTER) {
					if (tempxalign != CENTER) {
						x = x - Std.int(images[imagenum].width / 2);
					}
				}else if (parameters.xalign == BOTTOM || parameters.xalign == RIGHT) {
					if (tempxalign != RIGHT) {
						x = x - Std.int(images[imagenum].width);
					}
				}
			}
			
			if (parameters.yalign != null) {
				if (parameters.yalign == CENTER) {
					if (tempyalign != CENTER) {
						y = y - Std.int(images[imagenum].height / 2);
					}
				}else if (parameters.yalign == BOTTOM || parameters.yalign == RIGHT) {
					if (tempyalign != BOTTOM) {
						y = y - Std.int(images[imagenum].height);
					}
				}
			}
			
			if (parameters.xpivot != null) tempxpivot = imagealignonimagex(parameters.xpivot);
			if (parameters.ypivot != null) tempypivot = imagealignonimagey(parameters.ypivot); 
			if (parameters.scale != null) {
				tempxscale = parameters.scale;
				tempyscale = parameters.scale;
			}else{
				if (parameters.xscale != null) tempxscale = parameters.xscale;
				if (parameters.yscale != null) tempyscale = parameters.yscale;
			}
			if (parameters.rotation != null) temprotate = parameters.rotation;
			if (parameters.alpha != null) {
				tempalpha = parameters.alpha;
				alphact.alphaMultiplier = tempalpha;
				changecolours = true;
			}
			if (parameters.red != null) {
				tempred = parameters.red;
				alphact.redMultiplier = tempred;
				changecolours = true;
			}
			if (parameters.green != null) {
				tempgreen = parameters.green;
				alphact.greenMultiplier = tempgreen;
				changecolours = true;
			}
			if (parameters.blue != null) {
				tempblue = parameters.blue;
				alphact.blueMultiplier = tempblue;
				changecolours = true;
			}
		}
			
		shapematrix.identity();
		shapematrix.translate( -tempxpivot, -tempypivot);
		if (temprotate != 0) shapematrix.rotate((temprotate * 3.1415) / 180);
		if (tempxscale != 1.0 || tempyscale != 1.0) shapematrix.scale(tempxscale, tempyscale);
		shapematrix.translate(x + tempxpivot, y + tempypivot);
		if (changecolours) {
		  drawto.draw(images[imagenum], shapematrix, alphact);	
		}else {
			drawto.draw(images[imagenum], shapematrix);
		}
		shapematrix.identity();
	}
	
	#if !terrylibweb
	public static function grabtilefromscreen(tilenumber:Int, x:Float, y:Float) {
		if (currenttileset == -1) {
			throw("ERROR: In grabtilefromscreen, there is no tileset currently set. Use Gfx.changetileset(\"tileset name\") to set the current tileset.");
			return;
		}
		
		settrect(x, y, tilewidth(), tileheight());
		tiles[currenttileset].tiles[tilenumber].copyPixels(backbuffer, trect, tl);
	}
	
	public static function grabtilefromimage(tilenumber:Int, imagename:String, x:Float, y:Float) {
		if (!imageindex.exists(imagename)) {
			throw("ERROR: In grabtilefromimage, \"" + imagename + "\" does not exist.");
			return;
		}
		
		if (currenttileset == -1) {
			throw("ERROR: In grabtilefromimage, there is no tileset currently set. Use Gfx.changetileset(\"tileset name\") to set the current tileset.");
			return;
		}
		
		imagenum = imageindex.get(imagename);
		
		settrect(x, y, tilewidth(), tileheight());
		tiles[currenttileset].tiles[tilenumber].copyPixels(images[imagenum], trect, tl);
	}
	#end
	
	public static function grabimagefromscreen(imagename:String, x:Float, y:Float) {
		if (!imageindex.exists(imagename)) {
			throw("ERROR: In grabimagefromscreen, \"" + imagename + "\" does not exist. You need to create an image label first before using this function.");
			return;
		}
		imagenum = imageindex.get(imagename);
		
		settrect(x, y, images[imagenum].width, images[imagenum].height);
		images[imagenum].copyPixels(backbuffer, trect, tl);
	}
	
	public static function grabimagefromimage(imagename:String, imagetocopyfrom:String, x:Float, y:Float) {
		if (!imageindex.exists(imagename)) {
			throw("ERROR: In grabimagefromimage, \"" + imagename + "\" does not exist. You need to create an image label first before using this function.");
			return;
		}
		
		imagenum = imageindex.get(imagename);
		if (!imageindex.exists(imagetocopyfrom)) {
			trace("ERROR: No image called \"" + imagetocopyfrom + "\" found.");
		}
		var imagenumfrom:Int = imageindex.get(imagetocopyfrom);
		
		settrect(x, y, images[imagenum].width, images[imagenum].height);
		images[imagenum].copyPixels(images[imagenumfrom], trect, tl);
	}
	
	#if !terrylibweb
	public static function copytile(totilenumber:Int, fromtileset:String, fromtilenumber:Int) {
		if (tilesetindex.exists(fromtileset)) {
			if (tiles[currenttileset].width == tiles[tilesetindex.get(fromtileset)].width && tiles[currenttileset].height == tiles[tilesetindex.get(fromtileset)].height) {
				tiles[currenttileset].tiles[totilenumber].copyPixels(tiles[tilesetindex.get(fromtileset)].tiles[fromtilenumber], tiles[tilesetindex.get(fromtileset)].tiles[fromtilenumber].rect, tl);		
			}else {
				trace("ERROR: Tilesets " + currenttilesetname + " (" + Std.string(tilewidth()) + "x" + Std.string(tileheight()) + ") and " + fromtileset + " (" + Std.string(tiles[tilesetindex.get(fromtileset)].width) + "x" + Std.string(tiles[tilesetindex.get(fromtileset)].height) + ") are different sizes. Maybe try just drawing to the tile you want instead with Gfx.drawtotile()?");
				return;
			}
		}else {
			trace("ERROR: Tileset " + fromtileset + " hasn't been loaded or created.");
			return;
		}
	}
	#end
	
	/** Draws tile number t from current tileset.
	 * Parameters can be: rotation, scale, xscale, yscale, xpivot, ypivoy, alpha
	 * x and y can be: Gfx.CENTER, Gfx.TOP, Gfx.BOTTOM, Gfx.LEFT, Gfx.RIGHT. 
	 * */
	#if !terrylibweb
	public static function drawtile(x:Float, y:Float, t:Int, ?parameters:Gfxdrawparams) {
		if (skiprender && drawingtoscreen) return;
		if (currenttileset == -1) {
			throw("ERROR: No tileset currently set. Use Gfx.changetileset(\"tileset name\") to set the current tileset.");
			return;
		}
		if (t >= numberoftiles()) {
			if (t == numberoftiles()) {
			  throw("ERROR: Tried to draw tile number " + Std.string(t) + ", but there are only " + Std.string(numberoftiles()) + " tiles in tileset \"" + tiles[currenttileset].name + "\". (Because this includes tile number 0, " + Std.string(t) + " is not a valid tile.)");
				return;
			}else{
				throw("ERROR: Tried to draw tile number " + Std.string(t) + ", but there are only " + Std.string(numberoftiles()) + " tiles in tileset \"" + tiles[currenttileset].name + "\".");
				return;
			}
		}
		
		tempxpivot = 0;
		tempypivot = 0;
		tempxscale = 1.0;
		tempyscale = 1.0;
		temprotate = 0;
		tempred = 1.0; tempgreen = 1.0;	tempblue = 1.0;	tempalpha = 1.0;
		alphact.redMultiplier = 1.0; alphact.greenMultiplier = 1.0;	alphact.blueMultiplier = 1.0;
		alphact.alphaMultiplier = tempalpha;
		changecolours = false;
		tempxalign = x;	tempyalign = y;
		
		x = tilealignx(x); y = tilealigny(y);
		if (parameters != null) {
			if (parameters.xalign != null) {
				if (parameters.xalign == CENTER) {
					if (tempxalign != CENTER) {
						x = x - Std.int(tilewidth() / 2);
					}
				}else if (parameters.xalign == BOTTOM || parameters.xalign == RIGHT) {
					if (tempxalign != RIGHT) {
						x = x - Std.int(tilewidth());
					}
				}
			}
			
			if (parameters.yalign != null) {
				if (parameters.yalign == CENTER) {
					if (tempyalign != CENTER) {
						y = y - Std.int(tileheight() / 2);
					}
				}else if (parameters.yalign == BOTTOM || parameters.yalign == RIGHT) {
					if (tempyalign != BOTTOM) {
						y = y - Std.int(tileheight());
					}
				}
			}
			
			if (parameters.xpivot != null) tempxpivot = tilealignontilex(parameters.xpivot);
			if (parameters.ypivot != null) tempypivot = tilealignontiley(parameters.ypivot); 
			
			if (parameters.scale != null) {
				tempxscale = parameters.scale;
				tempyscale = parameters.scale;
			}else{
				if (parameters.xscale != null) tempxscale = parameters.xscale;
				if (parameters.yscale != null) tempyscale = parameters.yscale;
			}
			
			if (parameters.rotation != null) temprotate = parameters.rotation;
			if (parameters.alpha != null) {
				tempalpha = parameters.alpha;
				alphact.alphaMultiplier = tempalpha;
				changecolours = true;
			}
			if (parameters.red != null) {
				tempred = parameters.red;
				alphact.redMultiplier = tempred;
				changecolours = true;
			}
			if (parameters.green != null) {
				tempgreen = parameters.green;
				alphact.greenMultiplier = tempgreen;
				changecolours = true;
			}
			if (parameters.blue != null) {
				tempblue = parameters.blue;
				alphact.blueMultiplier = tempblue;
				changecolours = true;
			}
		}
		
		shapematrix.identity();
		shapematrix.translate( -tempxpivot, -tempypivot);
		if (temprotate != 0) shapematrix.rotate((temprotate * 3.1415) / 180);
		if (tempxscale != 1.0 || tempyscale != 1.0) shapematrix.scale(tempxscale, tempyscale);
		shapematrix.translate(tempxpivot, tempypivot);
		shapematrix.translate(x, y);
		if (changecolours) {
		  drawto.draw(tiles[currenttileset].tiles[t], shapematrix, alphact);
		}else {
		  drawto.draw(tiles[currenttileset].tiles[t], shapematrix);
		}
		shapematrix.identity();
	}
	
	/** Returns the current animation frame of the current tileset. */
	public static function currentframe():Int {
		return tiles[currenttileset].currentframe;
	}
	
	/** Resets the animation. */
	public static function stopanimation(animationname:String) {
		animationnum = animationindex.get(animationname);
		animations[animationnum].reset();
	}
	
	public static function defineanimation(animationname:String, tileset:String, startframe:Int, endframe:Int, delayperframe:Int) {
		if (delayperframe < 1) {
			throw("ERROR: Cannot have a delay per frame of less than 1.");
			return;
		}
		animationindex.set(animationname, animations.length);
		animations.push(new AnimationContainer(animationname, tileset, startframe, endframe, delayperframe));
	}
	
	public static function drawanimation(x:Float, y:Float, animationname:String, ?parameters:Gfxdrawparams) {
		if (skiprender && drawingtoscreen) return;
		oldtileset = currenttilesetname;
		if (!animationindex.exists(animationname)) {
			throw("ERROR: No animated named \"" +animationname+"\" is defined. Define one first using Gfx.defineanimation!");
			return;
		}
		animationnum = animationindex.get(animationname);
		changetileset(animations[animationnum].tileset);
		
		animations[animationnum].update();
		tempframe = animations[animationnum].currentframe;
		
		if (parameters != null) {
		  drawtile(x, y, tempframe, parameters);
		}else {
			drawtile(x, y, tempframe);
		}
		
		changetileset(oldtileset);
	}
	
	private static function tilealignx(x:Float):Float {
		if (x == CENTER) return Gfx.screenwidthmid - Std.int(tiles[currenttileset].width / 2);
		if (x == LEFT || x == TOP) return 0;
		if (x == RIGHT || x == BOTTOM) return tiles[currenttileset].width;
		return x;
	}
	
	private static function tilealigny(y:Float):Float {
		if (y == CENTER) return Gfx.screenheightmid - Std.int(tiles[currenttileset].height / 2);
		if (y == LEFT || y == TOP) return 0;
		if (y == RIGHT || y == BOTTOM) return tiles[currenttileset].height;
		return y;
	}
	
	private static function tilealignontilex(x:Float):Float {
		if (x == CENTER) return Std.int(tiles[currenttileset].width / 2);
		if (x == LEFT || x == TOP) return 0;
		if (x == RIGHT || x == BOTTOM) return tiles[currenttileset].width;
		return x;
	}
	
	private static function tilealignontiley(y:Float):Float {
		if (y == CENTER) return Std.int(tiles[currenttileset].height / 2);
		if (y == LEFT || y == TOP) return 0;
		if (y == RIGHT || y == BOTTOM) return tiles[currenttileset].height;
		return y;
	}
	#end
	
	#if terrylibweb
	public static var bresx1:Array<Int> = new Array<Int>();
	public static var bresy1:Array<Int> = new Array<Int>();
	//public static var bresswap1:Array<Int> = new Array<Int>();
	public static var bresx2:Array<Int> = new Array<Int>();
	public static var bresy2:Array<Int> = new Array<Int>();
	//public static var bresswap2:Array<Int> = new Array<Int>();
	//public static var bressize:Int;
	public static inline function fastAbs(v:Int) : Int {
		return (v ^ (v >> 31)) - (v >> 31);
	}
	 
	public static inline function fastFloor(v:Float) : Int {
		return Std.int(v); // actually it's more "truncate" than "round to 0"
	}
	
	public static function bresenhamline(x0:Int, y0:Int, x1:Int, y1:Int, linenum:Int):Void {
		var startx1:Int = x1;
		var starty1:Int = y1;
		var swapXY = Math.abs(y1 - y0) > Math.abs(x1 - x0);
		var tmp:Int;
		
		if (linenum == 0) {
			bresx1 = []; bresy1 = [];
		}else {
			bresx2 = []; bresy2 = [];
		}
		if (swapXY) {
			// swap x and y
			tmp = x0; x0 = y0; y0 = tmp; // swap x0 and y0
			tmp = x1; x1 = y1; y1 = tmp; // swap x1 and y1
		}
		
		if(x0 > x1) {
			// make sure x0 < x1
			tmp = x0; x0 = x1; x1 = tmp; // swap x0 and x1
			tmp = y0; y0 = y1; y1 = tmp; // swap y0 and y1
		}
		
		var deltax = x1 - x0;
		var deltay = Std.int( Math.abs(y1 - y0));
		var error = Std.int( deltax / 2 );
		var y = y0;
		var ystep = if ( y0 < y1 ) 1 else -1;
		
			// Y / X
		for (x in x0 ... x1 + 1 ) {	
			if(linenum==0){
				if (swapXY) {
					bresx1.push(y); bresy1.push(x);
				}else {
					bresx1.push(x); bresy1.push(y);
				}
			}else {
				if (swapXY) {
					bresx2.push(y); bresy2.push(x);
				}else {
					bresx2.push(x); bresy2.push(y);
				}
			}
			error -= deltay;
			if ( error < 0 ) {
				y = y + ystep;
				error = error + deltax;
			}
		}
	}
	#end
	
	public static function drawline(_x1:Float, _y1:Float, _x2:Float, _y2:Float, col:Int, alpha:Float = 1.0) {
    if (skiprender && drawingtoscreen) return;
		#if terrylibweb
		if (_x1 == _x2) {
			if(_y2>_y1){
				fillbox(_x1, _y1, 1, _y2 - _y1, col, alpha);
			}else {
				fillbox(_x1, _y2, 1, _y1 - _y2, col, alpha);
			}
		}else if (_y1 == _y2) {
			if(_x2>_x1){
				fillbox(_x1, _y1, _x2 - _x1, 1, col, alpha);
			}else {
				fillbox(_x2, _y1, _x1 - _x2, 1, col, alpha);
			}
		}else{
			bresenhamline(Std.int(_x1), Std.int(_y1), Std.int(_x2), Std.int(_y2), 0);
			
			for (i in 0 ... bresx1.length) {
				setpixel(bresx1[i], bresy1[i], col, alpha);
			}
		}
		#else
    tempshape.graphics.clear();
		tempshape.graphics.lineStyle(linethickness, col, alpha);
		tempshape.graphics.moveTo(_x1, _y1);
    tempshape.graphics.lineTo(_x2, _y2);
    drawto.draw(tempshape, shapematrix);
		#end
	}

	public static function drawhexagon(x:Float, y:Float, radius:Float, angle:Float, col:Int, alpha:Float = 1.0) {
		if (skiprender && drawingtoscreen) return;
		#if terrylibweb
		temprotate = ((Math.PI * 2) / 6);
		
		tx = (Math.cos(angle) * radius) + x;
		ty = (Math.sin(angle) * radius) + y;
		for (i in 0 ... 6) {
			tx2 = (Math.cos(angle + (temprotate * (i+1))) * radius) + x;
		  ty2 = (Math.sin(angle + (temprotate * (i+1))) * radius) + y;
			
			drawline(tx, ty, tx2, ty2, col, alpha);
			tx = tx2; ty = ty2;
		}
		#else
		tempshape.graphics.clear();
		tempshape.graphics.lineStyle(linethickness, col, alpha);
		
		temprotate = ((Math.PI * 2) / 6);
		
		tx = (Math.cos(angle) * radius);
		ty = (Math.sin(angle) * radius);
		
		tempshape.graphics.moveTo(tx, ty);
		for (i in 0 ... 7) {
			tx = (Math.cos(angle + (temprotate * i)) * radius);
		  ty = (Math.sin(angle + (temprotate * i)) * radius);
			
			tempshape.graphics.lineTo(tx, ty);
		}
		
		shapematrix.identity();
		shapematrix.translate(x, y);
		drawto.draw(tempshape, shapematrix);
		#end
	}
	
	public static function fillhexagon(x:Float, y:Float, radius:Float, angle:Float, col:Int, alpha:Float = 1.0) {
		if (skiprender && drawingtoscreen) return;
		#if terrylibweb
		temprotate = ((Math.PI * 2) / 6);
		
		tx = (Math.cos(angle) * radius) + x;
		ty = (Math.sin(angle) * radius) + y;
		for (i in 0 ... 6) {
			tx2 = (Math.cos(angle + (temprotate * (i+1))) * radius) + x;
		  ty2 = (Math.sin(angle + (temprotate * (i+1))) * radius) + y;
			
			filltri(tx, ty, tx2, ty2, x, y, col, alpha);
			tx = tx2; ty = ty2;
		}
		#else
		tempshape.graphics.clear();
		temprotate = ((Math.PI * 2) / 6);
		
		tx = (Math.cos(angle) * radius);
		ty = (Math.sin(angle) * radius);
		
		tempshape.graphics.moveTo(tx, ty);
		tempshape.graphics.beginFill(col, alpha);
		for (i in 0 ... 7) {
			tx = (Math.cos(angle + (temprotate * i)) * radius);
		  ty = (Math.sin(angle + (temprotate * i)) * radius);
			
			tempshape.graphics.lineTo(tx, ty);
		}
		tempshape.graphics.endFill();
		
		shapematrix.translate(x, y);
		drawto.draw(tempshape, shapematrix);
		shapematrix.translate( -x, -y);
		#end
	}
	
	public static function drawcircle(x:Float, y:Float, radius:Float, col:Int, alpha:Float = 1.0) {
		if (skiprender && drawingtoscreen) return;
		#if terrylibweb
		radius = fastFloor(radius);
		tx = radius;
    ty = 0;
    var decisionOver2:Float = 1 - tx;   // Decision criterion divided by 2 evaluated at x=r, y=0
		
		while (tx >= ty) {
			setpixel(Std.int(tx + x), Std.int(ty + y), col);
			setpixel(Std.int(ty + x), Std.int(tx + y), col);
			setpixel(Std.int(-tx + x), Std.int(ty + y), col);
			setpixel(Std.int(-ty + x), Std.int(tx + y), col);
			setpixel(Std.int(-tx + x), Std.int(-ty + y), col);
			setpixel(Std.int(-ty + x), Std.int(-tx + y), col);
			setpixel(Std.int(tx + x), Std.int(-ty + y), col);
			setpixel(Std.int(ty + x), Std.int(-tx + y), col);
			ty++;
			if (decisionOver2<=0){
				decisionOver2 += 2 * ty + 1;   // Change in decision criterion for y -> y+1
			}else{
				tx--;
				decisionOver2 += 2 * (ty - tx) + 1;   // Change for y -> y+1, x -> x-1
			}
		}
		#else
		tempshape.graphics.clear();
		tempshape.graphics.lineStyle(linethickness, col, alpha);
		tempshape.graphics.drawCircle(0, 0, radius);
		
		shapematrix.identity();
		shapematrix.translate(x, y);
		drawto.draw(tempshape, shapematrix);
		#end
	}
	
	#if terrylibweb
	private static var fillcirclepoints:Array<Bool> = [];
	#end
	public static function fillcircle(x:Float, y:Float, radius:Float, col:Int, alpha:Float = 1.0) {
		if (skiprender && drawingtoscreen) return;
		#if terrylibweb
		radius = fastFloor(radius);
		tx = radius;
    ty = 0;
    var decisionOver2:Float = 1 - tx;   // Decision criterion divided by 2 evaluated at x=r, y=0
		
		fillcirclepoints = [];
		for (i in 0 ... Std.int(radius * 2)) fillcirclepoints.push(true);
		while (tx >= ty) {
			if(fillcirclepoints[Std.int(ty)]){
				fillbox(x - tx, y + ty, tx + tx, 1, col, alpha);
				fillcirclepoints[Std.int(ty)] = false;
			}
			if(fillcirclepoints[Std.int(tx)]){
				fillbox(x - ty, y + tx, ty + ty, 1, col, alpha);
				fillcirclepoints[Std.int(tx)] = false;
			}
			
			if(fillcirclepoints[Std.int(radius + ty)]){
				fillbox(x - tx, y - ty, tx + tx, 1, col, alpha);
				fillcirclepoints[Std.int(radius + ty)] = false;
			}
			if(fillcirclepoints[Std.int(radius + tx)]){
				fillbox(x - ty, y - tx, ty + ty, 1, col, alpha);
				fillcirclepoints[Std.int(radius + tx)] = false;
			}
			
			ty++;
			if (decisionOver2<=0){
				decisionOver2 += 2 * ty + 1;   // Change in decision criterion for y -> y+1
			}else{
				tx--;
				decisionOver2 += 2 * (ty - tx) + 1;   // Change for y -> y+1, x -> x-1
			}
		}
		#else
		tempshape.graphics.clear();
		tempshape.graphics.beginFill(col, alpha);
		tempshape.graphics.drawCircle(0, 0, radius);
		tempshape.graphics.endFill();
		
		shapematrix.translate(x, y);
		drawto.draw(tempshape, shapematrix);
		shapematrix.translate( -x, -y);
		#end
	}
	
	public static function drawtri(x1:Float, y1:Float, x2:Float, y2:Float, x3:Float, y3:Float, col:Int, alpha:Float = 1.0) {
		if (skiprender && drawingtoscreen) return;
		#if terrylibweb
		drawline(x1, y1, x2, y2, col);
		drawline(x2, y2, x3, y3, col);
		drawline(x3, y3, x1, y1, col);
		#else
		tempshape.graphics.clear();
		tempshape.graphics.lineStyle(linethickness, col, alpha);
		tempshape.graphics.lineTo(0, 0);
		tempshape.graphics.lineTo(x2 - x1, y2 - y1);
		tempshape.graphics.lineTo(x3 - x1, y3 - y1);
		tempshape.graphics.lineTo(0, 0);
		tempshape.graphics.endFill();
		
		shapematrix.translate(x1, y1);
		drawto.draw(tempshape, shapematrix);
		shapematrix.translate( -x1, -y1);
		#end
	}
	
	#if terrylibweb
	private static var tri_x1:Int;
	private static var tri_y1:Int;
	private static var tri_x2:Int;
	private static var tri_y2:Int;
	private static var tri_x3:Int;
	private static var tri_y3:Int;
	
	private static function getfilltrimatchpoint(t:Int):Int {
		//Return the INDEX of bresenham line two where the y value matches t.
		for (i in 0 ... bresy2.length) {
			if (bresy2[i] == t) {
				return i;
			}
		}
		return -1;
	}
	
	#end
	public static function filltri(x1:Float, y1:Float, x2:Float, y2:Float, x3:Float, y3:Float, col:Int, alpha:Float = 1.0) {
		if (skiprender && drawingtoscreen) return;
		#if terrylibweb
		//Sort the points from y value highest to lowest
		if (y1 < y2 && y1 < y3) {
			tri_x1 = Std.int(x1); tri_y1 = Std.int(y1);
			if (y2 < y3) { tri_x2 = Std.int(x2); tri_y2 = Std.int(y2);	tri_x3 = Std.int(x3); tri_y3 = Std.int(y3);
			}else {	tri_x2 = Std.int(x3); tri_y2 = Std.int(y3);	tri_x3 = Std.int(x2); tri_y3 = Std.int(y2);}
		}else if (y2 < y3 && y2 < y1) {
			tri_x1 = Std.int(x2); tri_y1 = Std.int(y2);
			if (y1 < y3) { tri_x2 = Std.int(x1); tri_y2 = Std.int(y1);	tri_x3 = Std.int(x3); tri_y3 = Std.int(y3);
			}else {tri_x2 = Std.int(x3); tri_y2 = Std.int(y3);	tri_x3 = Std.int(x1); tri_y3 = Std.int(y1);	}
		}else {
			tri_x1 = Std.int(x3); tri_y1 = Std.int(y3);
			if (y2 < y1) {tri_x2 = Std.int(x2); tri_y2 = Std.int(y2);	tri_x3 = Std.int(x1); tri_y3 = Std.int(y1);
			}else {	tri_x2 = Std.int(x1); tri_y2 = Std.int(y1);	tri_x3 = Std.int(x2); tri_y3 = Std.int(y2);	}
		}
		
		//Bresenham from 1 to 2 and 1 to 3
		bresenhamline(tri_x1, tri_y1, tri_x2, tri_y2, 0);
		bresenhamline(tri_x1, tri_y1, tri_x3, tri_y3, 1);
		var matchingpoint:Int = 0;
		var lastypos:Int = -1;
		var firstypos:Int = bresy1[0];
		
		//1-2 is the shorter line, so run down it and fill that segment up
		for (i in 0 ... bresx1.length) {
			if (bresy1[i] != lastypos) {
				lastypos = bresy1[i];
				matchingpoint = getfilltrimatchpoint(bresy1[i]);
				if (matchingpoint > -1) {	
					if (bresx1[i] > bresx2[matchingpoint]) {
						settrect(bresx2[matchingpoint], bresy1[i], bresx1[i]-bresx2[matchingpoint], 1);
					}else {
						settrect(bresx1[i], bresy1[i], bresx2[matchingpoint]-bresx1[i], 1);
					}
					if (alpha == 1.0) {
						drawto.fillRect(trect, col);	
					}else {
						fillbox(trect.x, trect.y, trect.width, 1, col, alpha);
					}
				}
			}
		}
		
		//Now get 2 to 3
		var secondlastypos:Int = -1;
		bresenhamline(tri_x2, tri_y2, tri_x3, tri_y3, 0);
		for (i in 0 ... bresx1.length) {
			if (bresy1[i] != lastypos && bresy1[i] != secondlastypos && bresy1[i] != firstypos) {
				secondlastypos = bresy1[i];
				matchingpoint = getfilltrimatchpoint(bresy1[i]);
				if (matchingpoint > -1) {	
					if (bresx1[i] > bresx2[matchingpoint]) {
						settrect(bresx2[matchingpoint], bresy1[i], bresx1[i]-bresx2[matchingpoint], 1);
					}else {
						settrect(bresx1[i], bresy1[i], bresx2[matchingpoint]-bresx1[i], 1);
					}
					
					if (alpha == 1.0) {
						drawto.fillRect(trect, col);	
					}else {
						fillbox(trect.x, trect.y, trect.width, 1, col, alpha);
					}
				}
			}
		}
		#else
		tempshape.graphics.clear();
		tempshape.graphics.beginFill(col, alpha);
		tempshape.graphics.lineTo(0, 0);
		tempshape.graphics.lineTo(x2 - x1, y2 - y1);
		tempshape.graphics.lineTo(x3 - x1, y3 - y1);
		tempshape.graphics.lineTo(0, 0);
		tempshape.graphics.endFill();
		
		shapematrix.identity();
		shapematrix.translate(x1, y1);
		drawto.draw(tempshape, shapematrix);
		#end
	}

	public static function drawbox(x:Float, y:Float, width:Float, height:Float, col:Int, alpha:Float = 1.0) {
		if (skiprender && drawingtoscreen) return;
		if (width < 0) {
			width = -width;
			x = x - width;
		}
		if (height < 0) {
			height = -height;
			y = y - height;
		}
		#if terrylibweb
			fillbox(x, y, width, 1, col, alpha);
			fillbox(x, y + height, width - 1, 1, col, alpha);
			fillbox(x, y + 1, 1, height, col, alpha);
			fillbox(x + width - 1, y + 1, 1, height, col, alpha);
		#else
		if (linethickness < 2) {				
			drawline(x, y, x + width, y, col, alpha);
			drawline(x, y + height, x + width, y + height, col, alpha);
			drawline(x, y + 1, x, y + height, col, alpha);
			drawline(x + width - 1, y + 1, x + width - 1, y + height, col, alpha);
		}else{
			tempshape.graphics.clear();
			tempshape.graphics.lineStyle(linethickness, col, alpha);
			tempshape.graphics.lineTo(width, 0);
			tempshape.graphics.lineTo(width, height);
			tempshape.graphics.lineTo(0, height);
			tempshape.graphics.lineTo(0, 0);
			
			shapematrix.translate(x, y);
			drawto.draw(tempshape, shapematrix);
			shapematrix.translate( -x, -y);
		}
		#end
	}

	public static function setlinethickness(size:Float) {
		linethickness = size;
		if (linethickness < 1) linethickness = 1;
		if (linethickness > 255) linethickness = 255;
	}
	
	public static function clearscreen(col:Int = 0x000000) {
		if (skiprender && drawingtoscreen) return;
		backbuffer.fillRect(backbuffer.rect, col);
	}
	
	public static function getpixel(x:Float, y:Float):Int {
		return drawto.getPixel32(Std.int(x), Std.int(y));
	}
	
	public static function setpixel(x:Float, y:Float, col:Int, alpha:Float = 1.0) {
		if (skiprender && drawingtoscreen) return;
		#if terrylibweb
		if (alpha < 1) {
			if (linethickness == 1) {
				//drawto.setPixel32(Std.int(x), Std.int(y), (Std.int(alpha * 256) << 24) + col);
				settrect(Std.int(x), Std.int(y), 1, 1);
				drawto.fillRect(trect, (Std.int(alpha * 256) << 24) + col);
			}else {
				settrect(x - linethickness + 1, y - linethickness + 1, linethickness + linethickness - 2, linethickness + linethickness - 2);
				drawto.fillRect(trect, (Std.int(alpha * 256) << 24) + col);
			}
		}else {
			if (linethickness == 1) {
				//drawto.setPixel32(Std.int(x), Std.int(y), (Std.int(alpha * 256) << 24) + col);
				settrect(Std.int(x), Std.int(y), 1, 1);
				drawto.fillRect(trect, col);
			}else {
				settrect(x - linethickness + 1, y - linethickness + 1, linethickness + linethickness - 2, linethickness + linethickness - 2);
				drawto.fillRect(trect, col);
			}
		}
		#else
		drawto.setPixel32(Std.int(x), Std.int(y), (Std.int(alpha * 256) << 24) + col);
		#end
	}

	public static function fillbox(x:Float, y:Float, width:Float, height:Float, col:Int, alpha:Float = 1.0) {
		if (skiprender && drawingtoscreen) return;
		#if terrylibweb
		if(alpha == 1.0){
			settrect(x, y, width, height);
			drawto.fillRect(trect, (Std.int(alpha * 256) << 24) + col);
		}else {
			tempshape.graphics.clear();
			tempshape.graphics.beginFill(col, alpha);
			tempshape.graphics.lineTo(fastFloor(width), 0);
			tempshape.graphics.lineTo(fastFloor(width), fastFloor(height));
			tempshape.graphics.lineTo(0, fastFloor(height));
			tempshape.graphics.lineTo(0, 0);
			tempshape.graphics.endFill();
			
			shapematrix.identity();
			shapematrix.translate(fastFloor(x), fastFloor(y));
			drawto.draw(tempshape, shapematrix);
		}
		#else
		tempshape.graphics.clear();
		tempshape.graphics.beginFill(col, alpha);
		tempshape.graphics.lineTo(width, 0);
		tempshape.graphics.lineTo(width, height);
		tempshape.graphics.lineTo(0, height);
		tempshape.graphics.lineTo(0, 0);
		tempshape.graphics.endFill();
		
		shapematrix.identity();
		shapematrix.translate(x, y);
		drawto.draw(tempshape, shapematrix);
		#end
	}
	
	public static function getred(c:Int):Int {
		return (( c >> 16 ) & 0xFF);
	}
	
	public static function getgreen(c:Int):Int {
		return ( (c >> 8) & 0xFF );
	}
	
	public static function getblue(c:Int):Int {
		return ( c & 0xFF );
	}
	
	public static function RGB(red:Int, green:Int, blue:Int):Int {
		return (blue | (green << 8) | (red << 16));
	}
	
	/** Picks a colour given Hue, Saturation and Lightness values. 
	 *  Hue is between 0-359, Saturation and Lightness between 0.0 and 1.0. */
	public static function HSL(hue:Float, saturation:Float, lightness:Float):Int{
		var q:Float = if (lightness < 1 / 2) {
			lightness * (1 + saturation);
		}else {
			lightness + saturation - (lightness * saturation);
		}
		
		var p:Float = 2 * lightness - q;
		
		var hk:Float = ((hue % 360) / 360);
		
		hslval[0] = hk + 1 / 3;
		hslval[1] = hk;
		hslval[2] = hk - 1 / 3;
		for (n in 0 ... 3){
			if (hslval[n] < 0) hslval[n] += 1;
			if (hslval[n] > 1) hslval[n] -= 1;
			hslval[n] = if (hslval[n] < 1 / 6){
				p + ((q - p) * 6 * hslval[n]);
			}else if (hslval[n] < 1 / 2)	{
				q;
			}else if (hslval[n] < 2 / 3){
				p + ((q - p) * 6 * (2 / 3 - hslval[n]));
			}else{
				p;
			}
		}
		
		return RGB(Std.int(hslval[0] * 255), Std.int(hslval[1] * 255), Std.int(hslval[2] * 255));
	}
	
	private static function setzoom(t:Int) {
		screen.width = screenwidth * t;
		screen.height = screenheight * t;
		screen.x = (screenwidth - (screenwidth * t)) / 2;
		screen.y = (screenheight - (screenheight * t)) / 2;
	}
	
	private static function updategraphicsmode() {
		if (fullscreen) {
			Lib.current.stage.displayState = StageDisplayState.FULL_SCREEN_INTERACTIVE;
			gfxstage.scaleMode = StageScaleMode.NO_SCALE;
			
			var xScaleFresh:Float = cast(devicexres, Float) / cast(screenwidth, Float);
			var yScaleFresh:Float = cast(deviceyres, Float) / cast(screenheight, Float);
			if (xScaleFresh < yScaleFresh){
				screen.width = screenwidth * xScaleFresh;
				screen.height = screenheight * xScaleFresh;
			}else if (yScaleFresh < xScaleFresh){
				screen.width = screenwidth * yScaleFresh;
				screen.height = screenheight * yScaleFresh;
			} else {
				screen.width = screenwidth * xScaleFresh;
				screen.height = screenheight * yScaleFresh;
			}
			screen.x = (cast(devicexres, Float) / 2.0) - (screen.width / 2.0);
			screen.y = (cast(deviceyres, Float) / 2.0) - (screen.height / 2.0);
			//Mouse.hide();
		}else {
			Lib.current.stage.displayState = StageDisplayState.NORMAL;
			screen.width = screenwidth * screenscale;
			screen.height = screenheight * screenscale;
			screen.x = 0.0;
			screen.y = 0.0;
			gfxstage.scaleMode = StageScaleMode.SHOW_ALL;
			#if terrylibweb
			gfxstage.quality = StageQuality.LOW;
			#else
			gfxstage.quality = StageQuality.HIGH;
			#end
		}
	}
	
	/** Just gives Gfx access to the stage. */
	private static function init(stage:Stage) {
		gfxstage = stage;
		doclearscreeneachframe = true;
		setlinethickness(1);
	}
	
	public static function clearscreeneachframe(b:Bool) {
		doclearscreeneachframe = b;
 	}
	
	/** Called from resizescreen(). Sets up all our graphics buffers. */
	private static function initgfx(width:Int, height:Int, scale:Int) {
		//We initialise a few things
		screenwidth = width; screenheight = height;
		screenwidthmid = Std.int(screenwidth / 2); screenheightmid = Std.int(screenheight / 2);
		
		devicexres = Std.int(flash.system.Capabilities.screenResolutionX);
		deviceyres = Std.int(flash.system.Capabilities.screenResolutionY);
		screenscale = scale;
		
		trect = new Rectangle(); tpoint = new Point();
		tbuffer = new BitmapData(1, 1, true);
		ct = new ColorTransform(0, 0, 0, 1, 255, 255, 255, 1); //Set to white
		alphact = new ColorTransform();
		hslval.push(0.0); hslval.push(0.0); hslval.push(0.0);
		
		backbuffer = new BitmapData(screenwidth, screenheight, false, 0x000000);
		drawto = backbuffer;
		drawingtoscreen = true;
		
		screen = new Bitmap(backbuffer);
		screen.smoothing = false;
		screen.width = screenwidth * scale;
		screen.height = screenheight * scale;
		
		fullscreen = false;
		
		Debug.showtest = false;
	}
	
	/** Sets the values for the temporary rect structure. Probably better than making a new one, idk */
	private static function settrect(x:Float, y:Float, w:Float, h:Float) {
		trect.x = x;
		trect.y = y;
		trect.width = w;
		trect.height = h;
	}
	
	/** Sets the values for the temporary point structure. Probably better than making a new one, idk */
	private static function settpoint(x:Float, y:Float) {
		tpoint.x = x;
		tpoint.y = y;
	}
	
	private static var tiles:Array<Tileset> = new Array<Tileset>();
	private static var tilesetindex:Map<String, Int> = new Map<String, Int>();
	private static var currenttileset:Int = -1;
	
	private static var animations:Array<AnimationContainer> = new Array<AnimationContainer>();
	private static var animationnum:Int;
	private static var animationindex:Map<String, Int> = new Map<String, Int>();
	
	private static var images:Array<BitmapData> = new Array<BitmapData>();
	private static var imagenum:Int;
	private static var ct:ColorTransform;
	private static var alphact:ColorTransform;
	private static var images_rect:Rectangle;
	private static var tl:Point = new Point(0, 0);
	private static var trect:Rectangle;
	private static var tpoint:Point;
	private static var tbuffer:BitmapData;
	private static var imageindex:Map<String, Int> = new Map<String, Int>();
	
	private static var temprotate:Float;
	private static var tempxscale:Float;
	private static var tempyscale:Float;
	private static var tempxpivot:Float;
	private static var tempypivot:Float;
	private static var tempalpha:Float;
	private static var tempred:Float;
	private static var tempgreen:Float;
	private static var tempblue:Float;
	private static var tempframe:Int;
	private static var tempxalign:Float;
	private static var tempyalign:Float;
	private static var changecolours:Bool;
	private static var oldtileset:String;
	private static var tx:Float;
	private static var ty:Float;
	private static var tx2:Float;
  private static var ty2:Float;
	
	private static var linethickness:Float;
	
	private static var buffer:BitmapData;
	
	private static var temptile:BitmapData;
	//Actual backgrounds
	private static var screen:Bitmap;
	private static var tempshape:Shape = new Shape();
	private static var shapematrix:Matrix = new Matrix();
	
	private static var alphamult:Int;
	private static var gfxstage:Stage;
	
	//HSL conversion variables 
	private static var hslval:Array<Float> = new Array<Float>();
	
	public static var skiprender:Bool;
	private static var drawingtoscreen:Bool;
}