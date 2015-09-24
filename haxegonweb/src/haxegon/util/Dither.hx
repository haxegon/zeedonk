package haxegon.util;

// This was an experimental dithering feature that didn't work out. Sadface :( 
// If someone smarter than me could figure it out and make a pull request,
// that'd be awesome - Terry

import openfl.display.*;
import openfl.geom.*;
import openfl.utils.ByteArray;

@:access(haxegon.Gfx)
class Dither {
	public static var ditherindex:Map<String, Int> = new Map<String, Int>();
	public static var ditherbuffer:Array<BitmapData> = [];
	
	public static function setpixel(x:Int, y:Int, col:Int) {
		if (x >= 0 && y >= 0) {
			if (thresholdmap[x % 4][y % 4] > imagedither) {
				settpoint(x, y);
				Gfx.drawto.copyPixels(Gfx.transparentpixel, Gfx.transparentpixel.rect, tpoint);
			}
		}
	}
	
	public static function settransparentpixel(x:Int, y:Int) {
		if (x >= 0 && y >= 0) {
			if (thresholdmap[x % 4][y % 4] > imagedither) {
				settpoint(x, y);
				Gfx.drawto.copyPixels(Gfx.transparentpixel, Gfx.transparentpixel.rect, tpoint);
			}
		}
	}
	
	public static var ditherpattern:BitmapData;
	public static var templayer:BitmapData;
	public static function init() {
		ditherpattern = new BitmapData(240, 150, true, 0x000001);
		ditherpattern.lock();
		for (j in 0 ... 150) {
			for (i in 0 ... 240) {
				if (thresholdmap[i % 4][j % 4] > 8) {
					settrect(i, j, 1, 1);
					ditherpattern.fillRect(trect, 0xFF000000);
				}
			}
		}
		ditherpattern.unlock();	
	}
	
	public static function fillrect(x:Int, y:Int, width:Int, height:Int, col:Int) {
		settrect(x, y, width, height);
		Gfx.drawto.fillRect(trect, (0xFF << 24) + col);
		settpoint(x, y);
		Gfx.drawto.copyPixels(ditherpattern, trect, tpoint);
	}
	
	public static function brokenfillrect(x:Int, y:Int, width:Int, height:Int, col:Int) {
		if (x < 0) {
		  width -= -x;
			x = 0;
			if (x + width <= 0) return;
		}
		
		if (y < 0) {
		  height -= -y;
			y = 0;
			if (y + height <= 0) return;
		}
		
		if (x + width >= Gfx.screenwidth) {
		  width -= x + width - Gfx.screenwidth;
			if (width <= 0) return;
		}
		
		if (y + height >= Gfx.screenheight) {
		  height -= y + height - Gfx.screenheight;
			if (height <= 0) return;
		}
		
		buf = col + "_" + (x % 4) +"_" +(y % 4) + "_" + imagedither;
		
		if (ditherindex.exists(buf)) {
			ditheri = ditherindex.get(buf);
		}else {
		  ditherbuffer.push(new BitmapData(8, 8, true, 0));
			ditheri = ditherbuffer.length - 1;
			ditherindex.set(buf, ditheri);
			
			ditherbuffer[ditheri].lock();
			
			for (j in 0 ... 8) {
				for (i in 0 ... 8) {
					if (thresholdmap[Std.int(x + i) % 4][Std.int(y + j) % 4] > imagedither) {
						settrect(i, j, 1, 1);
						ditherbuffer[ditheri].fillRect(trect, (0xFF << 24) + col);
						settrect(i + 4, j, 1, 1);
						ditherbuffer[ditheri].fillRect(trect, (0xFF << 24) + col);
						settrect(i, j + 4, 1, 1);
						ditherbuffer[ditheri].fillRect(trect, (0xFF << 24) + col);
						settrect(i + 4, j + 4, 1, 1);
						ditherbuffer[ditheri].fillRect(trect, (0xFF << 24) + col);
					}
				}
			}
			
			ditherbuffer[ditheri].unlock();
		}
		
		fillxoverflow = width % 8;
		fillyoverflow = height % 8;
		fillxsteps = Std.int((width - fillxoverflow) / 8);
		fillysteps = Std.int((height - fillyoverflow) / 8);
		
		settpoint2(0, 0);
		for (j in 0 ...fillysteps) {
			for (i in 0 ... fillxsteps) {
				settpoint(Std.int(x + i * 8), Std.int(y + j * 8));
				Gfx.drawto.copyPixels(ditherbuffer[ditheri], ditherbuffer[ditheri].rect, tpoint);
			}
		}
		
		//Deal with overflow
		if (fillxoverflow > 0) {
			fillxoverflow_start = Std.int(x + fillxsteps * 8);
			for (i in 0 ... fillysteps) {
				settpoint(fillxoverflow_start, Std.int(y + i * 8));
				settrect(0, 0, fillxoverflow, 8);
				Gfx.drawto.copyPixels(ditherbuffer[ditheri], trect, tpoint);
			}
		}
		
		if (fillyoverflow > 0) {
			fillyoverflow_start = Std.int(y + fillysteps * 8);
			for (i in 0 ... fillxsteps) {
				settpoint(Std.int(x + i * 8), fillyoverflow_start);
				settrect(0, 0, 8, fillyoverflow);
				Gfx.drawto.copyPixels(ditherbuffer[ditheri], trect, tpoint);
			}
		}
		
		
		if (fillxoverflow > 0 && fillyoverflow > 0) {
			settpoint(fillxoverflow_start, fillyoverflow_start);
			settrect(0, 0, fillxoverflow, fillyoverflow);
			Gfx.drawto.copyPixels(ditherbuffer[ditheri], trect, tpoint);
		}
	}
	private static var buf:String;
	private static var ditheri:Int;
	private static var fillxsteps:Int;
	private static var fillysteps:Int;
	private static var fillxoverflow:Int;
	private static var fillyoverflow:Int;
	private static var fillxoverflow_start:Int;
	private static var fillyoverflow_start:Int;
	
	
	/** Sets the values for the temporary rect structure. Probably better than making a new one, idk */
	private static function settrect(x:Float, y:Float, w:Float, h:Float) {
		trect.setTo(x, y, w, h);
	}
	
	/** Sets the values for the temporary point structure. Probably better than making a new one, idk */
	private static function settpoint(x:Float, y:Float) {
		tpoint.x = x;
		tpoint.y = y;
	}
	
	/** Sets the values for the temporary point structure. Probably better than making a new one, idk */
	private static function settpoint2(x:Float, y:Float) {
		tpoint2.x = x;
		tpoint2.y = y;
	}
	
	public static var imagedither:Int;
	private static var trect:Rectangle = new Rectangle();
	private static var tpoint:Point = new Point();
	private static var tpoint2:Point = new Point();
	private static var shapematrix:Matrix = new Matrix();
	private static var thresholdmap:Array<Array<Int>> = [[ 1,  9,  3, 11], 
																											 [13,  5, 15,  7], 
																											 [ 4, 12,  2, 10], 
																											 [16,  8, 14,  6]];
}