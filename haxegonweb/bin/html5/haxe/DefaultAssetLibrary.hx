package;


import haxe.Timer;
import haxe.Unserializer;
import lime.app.Preloader;
import lime.audio.AudioSource;
import lime.audio.openal.AL;
import lime.audio.AudioBuffer;
import lime.graphics.Image;
import lime.system.ThreadPool;
import lime.text.Font;
import lime.utils.ByteArray;
import lime.utils.UInt8Array;
import lime.Assets;

#if sys
import sys.FileSystem;
#end

#if (js && html5)
import lime.net.URLLoader;
import lime.net.URLRequest;
#elseif flash
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.display.Loader;
import flash.events.Event;
import flash.media.Sound;
import flash.net.URLLoader;
import flash.net.URLRequest;
#end


class DefaultAssetLibrary extends AssetLibrary {
	
	
	public var className (default, null) = new Map <String, Dynamic> ();
	public var path (default, null) = new Map <String, String> ();
	public var type (default, null) = new Map <String, AssetType> ();
	
	private var lastModified:Float;
	private var threadPool:ThreadPool;
	private var timer:Timer;
	
	
	public function new () {
		
		super ();
		
		#if (openfl && !flash)
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		#end
		
		#if flash
		
		className.set ("data/fonts/04b11/04b11.fnt", __ASSET__data_fonts_04b11_04b11_fnt);
		type.set ("data/fonts/04b11/04b11.fnt", AssetType.TEXT);
		className.set ("data/fonts/04b11/04b11_0.png", __ASSET__data_fonts_04b11_04b11_0_png);
		type.set ("data/fonts/04b11/04b11_0.png", AssetType.IMAGE);
		className.set ("data/fonts/c64/c64.fnt", __ASSET__data_fonts_c64_c64_fnt);
		type.set ("data/fonts/c64/c64.fnt", AssetType.TEXT);
		className.set ("data/fonts/c64/c64_0.png", __ASSET__data_fonts_c64_c64_0_png);
		type.set ("data/fonts/c64/c64_0.png", AssetType.IMAGE);
		className.set ("data/fonts/comic/comic.fnt", __ASSET__data_fonts_comic_comic_fnt);
		type.set ("data/fonts/comic/comic.fnt", AssetType.TEXT);
		className.set ("data/fonts/comic/comic_0.png", __ASSET__data_fonts_comic_comic_0_png);
		type.set ("data/fonts/comic/comic_0.png", AssetType.IMAGE);
		className.set ("data/fonts/crypt/crypt.fnt", __ASSET__data_fonts_crypt_crypt_fnt);
		type.set ("data/fonts/crypt/crypt.fnt", AssetType.TEXT);
		className.set ("data/fonts/crypt/crypt_0.png", __ASSET__data_fonts_crypt_crypt_0_png);
		type.set ("data/fonts/crypt/crypt_0.png", AssetType.IMAGE);
		className.set ("data/fonts/default/default.fnt", __ASSET__data_fonts_default_default_fnt);
		type.set ("data/fonts/default/default.fnt", AssetType.TEXT);
		className.set ("data/fonts/default/default_0.png", __ASSET__data_fonts_default_default_0_png);
		type.set ("data/fonts/default/default_0.png", AssetType.IMAGE);
		className.set ("data/fonts/dos/dos.fnt", __ASSET__data_fonts_dos_dos_fnt);
		type.set ("data/fonts/dos/dos.fnt", AssetType.TEXT);
		className.set ("data/fonts/dos/dos_0.png", __ASSET__data_fonts_dos_dos_0_png);
		type.set ("data/fonts/dos/dos_0.png", AssetType.IMAGE);
		className.set ("data/fonts/ganon/ganon.fnt", __ASSET__data_fonts_ganon_ganon_fnt);
		type.set ("data/fonts/ganon/ganon.fnt", AssetType.TEXT);
		className.set ("data/fonts/ganon/ganon_0.png", __ASSET__data_fonts_ganon_ganon_0_png);
		type.set ("data/fonts/ganon/ganon_0.png", AssetType.IMAGE);
		className.set ("data/fonts/nokia/nokia.fnt", __ASSET__data_fonts_nokia_nokia_fnt);
		type.set ("data/fonts/nokia/nokia.fnt", AssetType.TEXT);
		className.set ("data/fonts/nokia/nokia_0.png", __ASSET__data_fonts_nokia_nokia_0_png);
		type.set ("data/fonts/nokia/nokia_0.png", AssetType.IMAGE);
		className.set ("data/fonts/oldenglish/oldenglish.fnt", __ASSET__data_fonts_oldenglish_oldenglish_fnt);
		type.set ("data/fonts/oldenglish/oldenglish.fnt", AssetType.TEXT);
		className.set ("data/fonts/oldenglish/oldenglish_0.png", __ASSET__data_fonts_oldenglish_oldenglish_0_png);
		type.set ("data/fonts/oldenglish/oldenglish_0.png", AssetType.IMAGE);
		className.set ("data/fonts/pixel/pixel.fnt", __ASSET__data_fonts_pixel_pixel_fnt);
		type.set ("data/fonts/pixel/pixel.fnt", AssetType.TEXT);
		className.set ("data/fonts/pixel/pixel_0.png", __ASSET__data_fonts_pixel_pixel_0_png);
		type.set ("data/fonts/pixel/pixel_0.png", AssetType.IMAGE);
		className.set ("data/fonts/pressstart/pressstart.fnt", __ASSET__data_fonts_pressstart_pressstart_fnt);
		type.set ("data/fonts/pressstart/pressstart.fnt", AssetType.TEXT);
		className.set ("data/fonts/pressstart/pressstart_0.png", __ASSET__data_fonts_pressstart_pressstart_0_png);
		type.set ("data/fonts/pressstart/pressstart_0.png", AssetType.IMAGE);
		className.set ("data/fonts/retrofuture/retrofuture.fnt", __ASSET__data_fonts_retrofuture_retrofuture_fnt);
		type.set ("data/fonts/retrofuture/retrofuture.fnt", AssetType.TEXT);
		className.set ("data/fonts/retrofuture/retrofuture_0.png", __ASSET__data_fonts_retrofuture_retrofuture_0_png);
		type.set ("data/fonts/retrofuture/retrofuture_0.png", AssetType.IMAGE);
		className.set ("data/fonts/roman/roman.fnt", __ASSET__data_fonts_roman_roman_fnt);
		type.set ("data/fonts/roman/roman.fnt", AssetType.TEXT);
		className.set ("data/fonts/roman/roman_0.png", __ASSET__data_fonts_roman_roman_0_png);
		type.set ("data/fonts/roman/roman_0.png", AssetType.IMAGE);
		className.set ("data/fonts/special/special.fnt", __ASSET__data_fonts_special_special_fnt);
		type.set ("data/fonts/special/special.fnt", AssetType.TEXT);
		className.set ("data/fonts/special/special_0.png", __ASSET__data_fonts_special_special_0_png);
		type.set ("data/fonts/special/special_0.png", AssetType.IMAGE);
		className.set ("data/fonts/yoster/yoster.fnt", __ASSET__data_fonts_yoster_yoster_fnt);
		type.set ("data/fonts/yoster/yoster.fnt", AssetType.TEXT);
		className.set ("data/fonts/yoster/yoster_0.png", __ASSET__data_fonts_yoster_yoster_0_png);
		type.set ("data/fonts/yoster/yoster_0.png", AssetType.IMAGE);
		
		
		#elseif html5
		
		var id;
		id = "data/fonts/04b11/04b11.fnt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/fonts/04b11/04b11_0.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "data/fonts/c64/c64.fnt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/fonts/c64/c64_0.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "data/fonts/comic/comic.fnt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/fonts/comic/comic_0.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "data/fonts/crypt/crypt.fnt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/fonts/crypt/crypt_0.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "data/fonts/default/default.fnt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/fonts/default/default_0.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "data/fonts/dos/dos.fnt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/fonts/dos/dos_0.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "data/fonts/ganon/ganon.fnt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/fonts/ganon/ganon_0.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "data/fonts/nokia/nokia.fnt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/fonts/nokia/nokia_0.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "data/fonts/oldenglish/oldenglish.fnt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/fonts/oldenglish/oldenglish_0.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "data/fonts/pixel/pixel.fnt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/fonts/pixel/pixel_0.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "data/fonts/pressstart/pressstart.fnt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/fonts/pressstart/pressstart_0.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "data/fonts/retrofuture/retrofuture.fnt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/fonts/retrofuture/retrofuture_0.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "data/fonts/roman/roman.fnt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/fonts/roman/roman_0.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "data/fonts/special/special.fnt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/fonts/special/special_0.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		id = "data/fonts/yoster/yoster.fnt";
		path.set (id, id);
		
		type.set (id, AssetType.TEXT);
		id = "data/fonts/yoster/yoster_0.png";
		path.set (id, id);
		
		type.set (id, AssetType.IMAGE);
		
		
		var assetsPrefix = ApplicationMain.config.assetsPrefix;
		if (assetsPrefix != null) {
			for (k in path.keys()) {
				path.set(k, assetsPrefix + path[k]);
			}
		}
		
		#else
		
		#if (windows || mac || linux)
		
		var useManifest = false;
		
		className.set ("data/fonts/04b11/04b11.fnt", __ASSET__data_fonts_04b11_04b11_fnt);
		type.set ("data/fonts/04b11/04b11.fnt", AssetType.TEXT);
		
		className.set ("data/fonts/04b11/04b11_0.png", __ASSET__data_fonts_04b11_04b11_0_png);
		type.set ("data/fonts/04b11/04b11_0.png", AssetType.IMAGE);
		
		className.set ("data/fonts/c64/c64.fnt", __ASSET__data_fonts_c64_c64_fnt);
		type.set ("data/fonts/c64/c64.fnt", AssetType.TEXT);
		
		className.set ("data/fonts/c64/c64_0.png", __ASSET__data_fonts_c64_c64_0_png);
		type.set ("data/fonts/c64/c64_0.png", AssetType.IMAGE);
		
		className.set ("data/fonts/comic/comic.fnt", __ASSET__data_fonts_comic_comic_fnt);
		type.set ("data/fonts/comic/comic.fnt", AssetType.TEXT);
		
		className.set ("data/fonts/comic/comic_0.png", __ASSET__data_fonts_comic_comic_0_png);
		type.set ("data/fonts/comic/comic_0.png", AssetType.IMAGE);
		
		className.set ("data/fonts/crypt/crypt.fnt", __ASSET__data_fonts_crypt_crypt_fnt);
		type.set ("data/fonts/crypt/crypt.fnt", AssetType.TEXT);
		
		className.set ("data/fonts/crypt/crypt_0.png", __ASSET__data_fonts_crypt_crypt_0_png);
		type.set ("data/fonts/crypt/crypt_0.png", AssetType.IMAGE);
		
		className.set ("data/fonts/default/default.fnt", __ASSET__data_fonts_default_default_fnt);
		type.set ("data/fonts/default/default.fnt", AssetType.TEXT);
		
		className.set ("data/fonts/default/default_0.png", __ASSET__data_fonts_default_default_0_png);
		type.set ("data/fonts/default/default_0.png", AssetType.IMAGE);
		
		className.set ("data/fonts/dos/dos.fnt", __ASSET__data_fonts_dos_dos_fnt);
		type.set ("data/fonts/dos/dos.fnt", AssetType.TEXT);
		
		className.set ("data/fonts/dos/dos_0.png", __ASSET__data_fonts_dos_dos_0_png);
		type.set ("data/fonts/dos/dos_0.png", AssetType.IMAGE);
		
		className.set ("data/fonts/ganon/ganon.fnt", __ASSET__data_fonts_ganon_ganon_fnt);
		type.set ("data/fonts/ganon/ganon.fnt", AssetType.TEXT);
		
		className.set ("data/fonts/ganon/ganon_0.png", __ASSET__data_fonts_ganon_ganon_0_png);
		type.set ("data/fonts/ganon/ganon_0.png", AssetType.IMAGE);
		
		className.set ("data/fonts/nokia/nokia.fnt", __ASSET__data_fonts_nokia_nokia_fnt);
		type.set ("data/fonts/nokia/nokia.fnt", AssetType.TEXT);
		
		className.set ("data/fonts/nokia/nokia_0.png", __ASSET__data_fonts_nokia_nokia_0_png);
		type.set ("data/fonts/nokia/nokia_0.png", AssetType.IMAGE);
		
		className.set ("data/fonts/oldenglish/oldenglish.fnt", __ASSET__data_fonts_oldenglish_oldenglish_fnt);
		type.set ("data/fonts/oldenglish/oldenglish.fnt", AssetType.TEXT);
		
		className.set ("data/fonts/oldenglish/oldenglish_0.png", __ASSET__data_fonts_oldenglish_oldenglish_0_png);
		type.set ("data/fonts/oldenglish/oldenglish_0.png", AssetType.IMAGE);
		
		className.set ("data/fonts/pixel/pixel.fnt", __ASSET__data_fonts_pixel_pixel_fnt);
		type.set ("data/fonts/pixel/pixel.fnt", AssetType.TEXT);
		
		className.set ("data/fonts/pixel/pixel_0.png", __ASSET__data_fonts_pixel_pixel_0_png);
		type.set ("data/fonts/pixel/pixel_0.png", AssetType.IMAGE);
		
		className.set ("data/fonts/pressstart/pressstart.fnt", __ASSET__data_fonts_pressstart_pressstart_fnt);
		type.set ("data/fonts/pressstart/pressstart.fnt", AssetType.TEXT);
		
		className.set ("data/fonts/pressstart/pressstart_0.png", __ASSET__data_fonts_pressstart_pressstart_0_png);
		type.set ("data/fonts/pressstart/pressstart_0.png", AssetType.IMAGE);
		
		className.set ("data/fonts/retrofuture/retrofuture.fnt", __ASSET__data_fonts_retrofuture_retrofuture_fnt);
		type.set ("data/fonts/retrofuture/retrofuture.fnt", AssetType.TEXT);
		
		className.set ("data/fonts/retrofuture/retrofuture_0.png", __ASSET__data_fonts_retrofuture_retrofuture_0_png);
		type.set ("data/fonts/retrofuture/retrofuture_0.png", AssetType.IMAGE);
		
		className.set ("data/fonts/roman/roman.fnt", __ASSET__data_fonts_roman_roman_fnt);
		type.set ("data/fonts/roman/roman.fnt", AssetType.TEXT);
		
		className.set ("data/fonts/roman/roman_0.png", __ASSET__data_fonts_roman_roman_0_png);
		type.set ("data/fonts/roman/roman_0.png", AssetType.IMAGE);
		
		className.set ("data/fonts/special/special.fnt", __ASSET__data_fonts_special_special_fnt);
		type.set ("data/fonts/special/special.fnt", AssetType.TEXT);
		
		className.set ("data/fonts/special/special_0.png", __ASSET__data_fonts_special_special_0_png);
		type.set ("data/fonts/special/special_0.png", AssetType.IMAGE);
		
		className.set ("data/fonts/yoster/yoster.fnt", __ASSET__data_fonts_yoster_yoster_fnt);
		type.set ("data/fonts/yoster/yoster.fnt", AssetType.TEXT);
		
		className.set ("data/fonts/yoster/yoster_0.png", __ASSET__data_fonts_yoster_yoster_0_png);
		type.set ("data/fonts/yoster/yoster_0.png", AssetType.IMAGE);
		
		
		if (useManifest) {
			
			loadManifest ();
			
			if (Sys.args ().indexOf ("-livereload") > -1) {
				
				var path = FileSystem.fullPath ("manifest");
				lastModified = FileSystem.stat (path).mtime.getTime ();
				
				timer = new Timer (2000);
				timer.run = function () {
					
					var modified = FileSystem.stat (path).mtime.getTime ();
					
					if (modified > lastModified) {
						
						lastModified = modified;
						loadManifest ();
						
						if (eventCallback != null) {
							
							eventCallback (this, "change");
							
						}
						
					}
					
				}
				
			}
			
		}
		
		#else
		
		loadManifest ();
		
		#end
		#end
		
	}
	
	
	private function createThreadPool ():Void {
		
		threadPool = new ThreadPool (0, 2);
		threadPool.doWork.add (function (id, data) {
			
			data.result = data.getMethod (id);
			threadPool.sendComplete (data.handler, data);
			
		});
		threadPool.onComplete.add (function (id, data) {
			
			data.handler (data.result);
			
		});
		
	}
	
	
	public override function exists (id:String, type:String):Bool {
		
		var requestedType = type != null ? cast (type, AssetType) : null;
		var assetType = this.type.get (id);
		
		if (assetType != null) {
			
			if (assetType == requestedType || ((requestedType == SOUND || requestedType == MUSIC) && (assetType == MUSIC || assetType == SOUND))) {
				
				return true;
				
			}
			
			#if flash
			
			if (requestedType == BINARY && (assetType == BINARY || assetType == TEXT || assetType == IMAGE)) {
				
				return true;
				
			} else if (requestedType == null || path.exists (id)) {
				
				return true;
				
			}
			
			#else
			
			if (requestedType == BINARY || requestedType == null || (assetType == BINARY && requestedType == TEXT)) {
				
				return true;
				
			}
			
			#end
			
		}
		
		return false;
		
	}
	
	
	public override function getAudioBuffer (id:String):AudioBuffer {
		
		#if flash
		
		var buffer = new AudioBuffer ();
		buffer.src = cast (Type.createInstance (className.get (id), []), Sound);
		return buffer;
		
		#elseif html5
		
		return null;
		//return new Sound (new URLRequest (path.get (id)));
		
		#else
		
		if (className.exists(id)) return AudioBuffer.fromBytes (cast (Type.createInstance (className.get (id), []), ByteArray));
		else return AudioBuffer.fromFile (path.get (id));
		
		#end
		
	}
	
	
	public override function getBytes (id:String):ByteArray {
		
		#if flash
		
		switch (type.get (id)) {
			
			case TEXT, BINARY:
				
				return cast (Type.createInstance (className.get (id), []), ByteArray);
			
			case IMAGE:
				
				var bitmapData = cast (Type.createInstance (className.get (id), []), BitmapData);
				return bitmapData.getPixels (bitmapData.rect);
			
			default:
				
				return null;
			
		}
		
		return cast (Type.createInstance (className.get (id), []), ByteArray);
		
		#elseif html5
		
		var bytes:ByteArray = null;
		var loader = Preloader.loaders.get (path.get (id));
		
		if (loader == null) {
			
			return null;
			
		}
		
		var data = loader.data;
		
		if (Std.is (data, String)) {
			
			bytes = new ByteArray ();
			bytes.writeUTFBytes (data);
			
		} else if (Std.is (data, ByteArray)) {
			
			bytes = cast data;
			
		} else {
			
			bytes = null;
			
		}
		
		if (bytes != null) {
			
			bytes.position = 0;
			return bytes;
			
		} else {
			
			return null;
		}
		
		#else
		
		if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), ByteArray);
		else return ByteArray.readFile (path.get (id));
		
		#end
		
	}
	
	
	public override function getFont (id:String):Font {
		
		#if flash
		
		var src = Type.createInstance (className.get (id), []);
		
		var font = new Font (src.fontName);
		font.src = src;
		return font;
		
		#elseif html5
		
		return cast (Type.createInstance (className.get (id), []), Font);
		
		#else
		
		if (className.exists (id)) {
			
			var fontClass = className.get (id);
			return cast (Type.createInstance (fontClass, []), Font);
			
		} else {
			
			return Font.fromFile (path.get (id));
			
		}
		
		#end
		
	}
	
	
	public override function getImage (id:String):Image {
		
		#if flash
		
		return Image.fromBitmapData (cast (Type.createInstance (className.get (id), []), BitmapData));
		
		#elseif html5
		
		return Image.fromImageElement (Preloader.images.get (path.get (id)));
		
		#else
		
		if (className.exists (id)) {
			
			var fontClass = className.get (id);
			return cast (Type.createInstance (fontClass, []), Image);
			
		} else {
			
			return Image.fromFile (path.get (id));
			
		}
		
		#end
		
	}
	
	
	/*public override function getMusic (id:String):Dynamic {
		
		#if flash
		
		return cast (Type.createInstance (className.get (id), []), Sound);
		
		#elseif openfl_html5
		
		//var sound = new Sound ();
		//sound.__buffer = true;
		//sound.load (new URLRequest (path.get (id)));
		//return sound;
		return null;
		
		#elseif html5
		
		return null;
		//return new Sound (new URLRequest (path.get (id)));
		
		#else
		
		return null;
		//if (className.exists(id)) return cast (Type.createInstance (className.get (id), []), Sound);
		//else return new Sound (new URLRequest (path.get (id)), null, true);
		
		#end
		
	}*/
	
	
	public override function getPath (id:String):String {
		
		//#if ios
		
		//return SystemPath.applicationDirectory + "/assets/" + path.get (id);
		
		//#else
		
		return path.get (id);
		
		//#end
		
	}
	
	
	public override function getText (id:String):String {
		
		#if html5
		
		var bytes:ByteArray = null;
		var loader = Preloader.loaders.get (path.get (id));
		
		if (loader == null) {
			
			return null;
			
		}
		
		var data = loader.data;
		
		if (Std.is (data, String)) {
			
			return cast data;
			
		} else if (Std.is (data, ByteArray)) {
			
			bytes = cast data;
			
		} else {
			
			bytes = null;
			
		}
		
		if (bytes != null) {
			
			bytes.position = 0;
			return bytes.readUTFBytes (bytes.length);
			
		} else {
			
			return null;
		}
		
		#else
		
		var bytes = getBytes (id);
		
		if (bytes == null) {
			
			return null;
			
		} else {
			
			return bytes.readUTFBytes (bytes.length);
			
		}
		
		#end
		
	}
	
	
	public override function isLocal (id:String, type:String):Bool {
		
		var requestedType = type != null ? cast (type, AssetType) : null;
		
		#if flash
		
		//if (requestedType != AssetType.MUSIC && requestedType != AssetType.SOUND) {
			
			return className.exists (id);
			
		//}
		
		#end
		
		return true;
		
	}
	
	
	public override function list (type:String):Array<String> {
		
		var requestedType = type != null ? cast (type, AssetType) : null;
		var items = [];
		
		for (id in this.type.keys ()) {
			
			if (requestedType == null || exists (id, type)) {
				
				items.push (id);
				
			}
			
		}
		
		return items;
		
	}
	
	
	public override function loadAudioBuffer (id:String, handler:AudioBuffer -> Void):Void {
		
		#if (flash)
		
		if (path.exists (id)) {
			
			var soundLoader = new Sound ();
			soundLoader.addEventListener (Event.COMPLETE, function (event) {
				
				var audioBuffer:AudioBuffer = new AudioBuffer();
				audioBuffer.src = event.currentTarget;
				handler (audioBuffer);
				
			});
			
			soundLoader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getAudioBuffer (id));
			
		}
		
		#else
		
		handler (getAudioBuffer (id));
		
		#end
		
	}
	
	
	public override function loadBytes (id:String, handler:ByteArray -> Void):Void {
		
		#if flash
		
		if (path.exists (id)) {
			
			var loader = new URLLoader ();
			loader.addEventListener (Event.COMPLETE, function (event:Event) {
				
				var bytes = new ByteArray ();
				bytes.writeUTFBytes (event.currentTarget.data);
				bytes.position = 0;
				
				handler (bytes);
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getBytes (id));
			
		}
		
		#elseif html5
		
		if (path.exists (id)) {
			
			var loader = new URLLoader ();
			loader.dataFormat = BINARY;
			loader.onComplete.add (function (_):Void {
				
				handler (loader.data);
				
			});
			
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getBytes (id));
			
		}
		
		#else
		
		if (threadPool == null) {
			
			createThreadPool ();
			
		}
		
		threadPool.queue (id, { handler: handler, getMethod: getBytes });
		
		#end
		
	}
	
	
	public override function loadImage (id:String, handler:Image -> Void):Void {
		
		#if flash
		
		if (path.exists (id)) {
			
			var loader = new Loader ();
			loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event:Event) {
				
				var bitmapData = cast (event.currentTarget.content, Bitmap).bitmapData;
				handler (Image.fromBitmapData (bitmapData));
				
			});
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getImage (id));
			
		}
		
		#elseif html5
		
		if (path.exists (id)) {
			
			var image = new js.html.Image ();
			image.onload = function (_):Void {
				
				handler (Image.fromImageElement (image));
				
			}
			image.src = path.get (id);
			
		} else {
			
			handler (getImage (id));
			
		}
		
		#else
		
		if (threadPool == null) {
			
			createThreadPool ();
			
		}
		
		threadPool.queue (id, { handler: handler, getMethod: getImage });
		
		#end
		
	}
	
	
	#if (!flash && !html5)
	private function loadManifest ():Void {
		
		try {
			
			#if blackberry
			var bytes = ByteArray.readFile ("app/native/manifest");
			#elseif tizen
			var bytes = ByteArray.readFile ("../res/manifest");
			#elseif emscripten
			var bytes = ByteArray.readFile ("assets/manifest");
			#elseif (mac && java)
			var bytes = ByteArray.readFile ("../Resources/manifest");
			#elseif ios
			var bytes = ByteArray.readFile ("assets/manifest");
			#else
			var bytes = ByteArray.readFile ("manifest");
			#end
			
			if (bytes != null) {
				
				bytes.position = 0;
				
				if (bytes.length > 0) {
					
					var data = bytes.readUTFBytes (bytes.length);
					
					if (data != null && data.length > 0) {
						
						var manifest:Array<Dynamic> = Unserializer.run (data);
						
						for (asset in manifest) {
							
							if (!className.exists (asset.id)) {
								
								#if ios
								path.set (asset.id, "assets/" + asset.path);
								#else
								path.set (asset.id, asset.path);
								#end
								type.set (asset.id, cast (asset.type, AssetType));
								
							}
							
						}
						
					}
					
				}
				
			} else {
				
				trace ("Warning: Could not load asset manifest (bytes was null)");
				
			}
		
		} catch (e:Dynamic) {
			
			trace ('Warning: Could not load asset manifest (${e})');
			
		}
		
	}
	#end
	
	
	/*public override function loadMusic (id:String, handler:Dynamic -> Void):Void {
		
		#if (flash || html5)
		
		//if (path.exists (id)) {
			
		//	var loader = new Loader ();
		//	loader.contentLoaderInfo.addEventListener (Event.COMPLETE, function (event) {
				
		//		handler (cast (event.currentTarget.content, Bitmap).bitmapData);
				
		//	});
		//	loader.load (new URLRequest (path.get (id)));
			
		//} else {
			
			handler (getMusic (id));
			
		//}
		
		#else
		
		handler (getMusic (id));
		
		#end
		
	}*/
	
	
	public override function loadText (id:String, handler:String -> Void):Void {
		
		#if html5
		
		if (path.exists (id)) {
			
			var loader = new URLLoader ();
			loader.onComplete.add (function (_):Void {
				
				handler (loader.data);
				
			});
			
			loader.load (new URLRequest (path.get (id)));
			
		} else {
			
			handler (getText (id));
			
		}
		
		#else
		
		var callback = function (bytes:ByteArray):Void {
			
			if (bytes == null) {
				
				handler (null);
				
			} else {
				
				handler (bytes.readUTFBytes (bytes.length));
				
			}
			
		}
		
		loadBytes (id, callback);
		
		#end
		
	}
	
	
}


#if !display
#if flash

@:keep @:bind #if display private #end class __ASSET__data_fonts_04b11_04b11_fnt extends null { }
@:keep @:bind #if display private #end class __ASSET__data_fonts_04b11_04b11_0_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__data_fonts_c64_c64_fnt extends null { }
@:keep @:bind #if display private #end class __ASSET__data_fonts_c64_c64_0_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__data_fonts_comic_comic_fnt extends null { }
@:keep @:bind #if display private #end class __ASSET__data_fonts_comic_comic_0_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__data_fonts_crypt_crypt_fnt extends null { }
@:keep @:bind #if display private #end class __ASSET__data_fonts_crypt_crypt_0_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__data_fonts_default_default_fnt extends null { }
@:keep @:bind #if display private #end class __ASSET__data_fonts_default_default_0_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__data_fonts_dos_dos_fnt extends null { }
@:keep @:bind #if display private #end class __ASSET__data_fonts_dos_dos_0_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__data_fonts_ganon_ganon_fnt extends null { }
@:keep @:bind #if display private #end class __ASSET__data_fonts_ganon_ganon_0_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__data_fonts_nokia_nokia_fnt extends null { }
@:keep @:bind #if display private #end class __ASSET__data_fonts_nokia_nokia_0_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__data_fonts_oldenglish_oldenglish_fnt extends null { }
@:keep @:bind #if display private #end class __ASSET__data_fonts_oldenglish_oldenglish_0_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__data_fonts_pixel_pixel_fnt extends null { }
@:keep @:bind #if display private #end class __ASSET__data_fonts_pixel_pixel_0_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__data_fonts_pressstart_pressstart_fnt extends null { }
@:keep @:bind #if display private #end class __ASSET__data_fonts_pressstart_pressstart_0_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__data_fonts_retrofuture_retrofuture_fnt extends null { }
@:keep @:bind #if display private #end class __ASSET__data_fonts_retrofuture_retrofuture_0_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__data_fonts_roman_roman_fnt extends null { }
@:keep @:bind #if display private #end class __ASSET__data_fonts_roman_roman_0_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__data_fonts_special_special_fnt extends null { }
@:keep @:bind #if display private #end class __ASSET__data_fonts_special_special_0_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }
@:keep @:bind #if display private #end class __ASSET__data_fonts_yoster_yoster_fnt extends null { }
@:keep @:bind #if display private #end class __ASSET__data_fonts_yoster_yoster_0_png extends flash.display.BitmapData { public function new () { super (0, 0, true, 0); } }


#elseif html5

































#else



#if (windows || mac || linux || cpp)


@:file("data/fonts/04b11/04b11.fnt") #if display private #end class __ASSET__data_fonts_04b11_04b11_fnt extends lime.utils.ByteArray {}
@:image("data/fonts/04b11/04b11_0.png") #if display private #end class __ASSET__data_fonts_04b11_04b11_0_png extends lime.graphics.Image {}
@:file("data/fonts/c64/c64.fnt") #if display private #end class __ASSET__data_fonts_c64_c64_fnt extends lime.utils.ByteArray {}
@:image("data/fonts/c64/c64_0.png") #if display private #end class __ASSET__data_fonts_c64_c64_0_png extends lime.graphics.Image {}
@:file("data/fonts/comic/comic.fnt") #if display private #end class __ASSET__data_fonts_comic_comic_fnt extends lime.utils.ByteArray {}
@:image("data/fonts/comic/comic_0.png") #if display private #end class __ASSET__data_fonts_comic_comic_0_png extends lime.graphics.Image {}
@:file("data/fonts/crypt/crypt.fnt") #if display private #end class __ASSET__data_fonts_crypt_crypt_fnt extends lime.utils.ByteArray {}
@:image("data/fonts/crypt/crypt_0.png") #if display private #end class __ASSET__data_fonts_crypt_crypt_0_png extends lime.graphics.Image {}
@:file("data/fonts/default/default.fnt") #if display private #end class __ASSET__data_fonts_default_default_fnt extends lime.utils.ByteArray {}
@:image("data/fonts/default/default_0.png") #if display private #end class __ASSET__data_fonts_default_default_0_png extends lime.graphics.Image {}
@:file("data/fonts/dos/dos.fnt") #if display private #end class __ASSET__data_fonts_dos_dos_fnt extends lime.utils.ByteArray {}
@:image("data/fonts/dos/dos_0.png") #if display private #end class __ASSET__data_fonts_dos_dos_0_png extends lime.graphics.Image {}
@:file("data/fonts/ganon/ganon.fnt") #if display private #end class __ASSET__data_fonts_ganon_ganon_fnt extends lime.utils.ByteArray {}
@:image("data/fonts/ganon/ganon_0.png") #if display private #end class __ASSET__data_fonts_ganon_ganon_0_png extends lime.graphics.Image {}
@:file("data/fonts/nokia/nokia.fnt") #if display private #end class __ASSET__data_fonts_nokia_nokia_fnt extends lime.utils.ByteArray {}
@:image("data/fonts/nokia/nokia_0.png") #if display private #end class __ASSET__data_fonts_nokia_nokia_0_png extends lime.graphics.Image {}
@:file("data/fonts/oldenglish/oldenglish.fnt") #if display private #end class __ASSET__data_fonts_oldenglish_oldenglish_fnt extends lime.utils.ByteArray {}
@:image("data/fonts/oldenglish/oldenglish_0.png") #if display private #end class __ASSET__data_fonts_oldenglish_oldenglish_0_png extends lime.graphics.Image {}
@:file("data/fonts/pixel/pixel.fnt") #if display private #end class __ASSET__data_fonts_pixel_pixel_fnt extends lime.utils.ByteArray {}
@:image("data/fonts/pixel/pixel_0.png") #if display private #end class __ASSET__data_fonts_pixel_pixel_0_png extends lime.graphics.Image {}
@:file("data/fonts/pressstart/pressstart.fnt") #if display private #end class __ASSET__data_fonts_pressstart_pressstart_fnt extends lime.utils.ByteArray {}
@:image("data/fonts/pressstart/pressstart_0.png") #if display private #end class __ASSET__data_fonts_pressstart_pressstart_0_png extends lime.graphics.Image {}
@:file("data/fonts/retrofuture/retrofuture.fnt") #if display private #end class __ASSET__data_fonts_retrofuture_retrofuture_fnt extends lime.utils.ByteArray {}
@:image("data/fonts/retrofuture/retrofuture_0.png") #if display private #end class __ASSET__data_fonts_retrofuture_retrofuture_0_png extends lime.graphics.Image {}
@:file("data/fonts/roman/roman.fnt") #if display private #end class __ASSET__data_fonts_roman_roman_fnt extends lime.utils.ByteArray {}
@:image("data/fonts/roman/roman_0.png") #if display private #end class __ASSET__data_fonts_roman_roman_0_png extends lime.graphics.Image {}
@:file("data/fonts/special/special.fnt") #if display private #end class __ASSET__data_fonts_special_special_fnt extends lime.utils.ByteArray {}
@:image("data/fonts/special/special_0.png") #if display private #end class __ASSET__data_fonts_special_special_0_png extends lime.graphics.Image {}
@:file("data/fonts/yoster/yoster.fnt") #if display private #end class __ASSET__data_fonts_yoster_yoster_fnt extends lime.utils.ByteArray {}
@:image("data/fonts/yoster/yoster_0.png") #if display private #end class __ASSET__data_fonts_yoster_yoster_0_png extends lime.graphics.Image {}



#end
#end

#if (openfl && !flash)

#end

#end