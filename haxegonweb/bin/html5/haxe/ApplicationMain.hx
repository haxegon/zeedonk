#if !macro


@:access(lime.app.Application)
@:access(lime.Assets)
@:access(openfl.display.Stage)


class ApplicationMain {
	
	
	public static var config:lime.app.Config;
	public static var preloader:openfl.display.Preloader;
	
	
	public static function create ():Void {
		
		var app = new openfl.display.Application ();
		app.create (config);
		
		var display = new Preloader ();
		
		preloader = new openfl.display.Preloader (display);
		app.setPreloader (preloader);
		preloader.onComplete.add (init);
		preloader.create (config);
		
		#if (js && html5)
		var urls = [];
		var types = [];
		
		
		urls.push ("data/fonts/04b11/04b11.fnt");
		types.push (lime.Assets.AssetType.TEXT);
		
		
		urls.push ("data/fonts/04b11/04b11_0.png");
		types.push (lime.Assets.AssetType.IMAGE);
		
		
		urls.push ("data/fonts/c64/c64.fnt");
		types.push (lime.Assets.AssetType.TEXT);
		
		
		urls.push ("data/fonts/c64/c64_0.png");
		types.push (lime.Assets.AssetType.IMAGE);
		
		
		urls.push ("data/fonts/comic/comic.fnt");
		types.push (lime.Assets.AssetType.TEXT);
		
		
		urls.push ("data/fonts/comic/comic_0.png");
		types.push (lime.Assets.AssetType.IMAGE);
		
		
		urls.push ("data/fonts/crypt/crypt.fnt");
		types.push (lime.Assets.AssetType.TEXT);
		
		
		urls.push ("data/fonts/crypt/crypt_0.png");
		types.push (lime.Assets.AssetType.IMAGE);
		
		
		urls.push ("data/fonts/default/default.fnt");
		types.push (lime.Assets.AssetType.TEXT);
		
		
		urls.push ("data/fonts/default/default_0.png");
		types.push (lime.Assets.AssetType.IMAGE);
		
		
		urls.push ("data/fonts/dos/dos.fnt");
		types.push (lime.Assets.AssetType.TEXT);
		
		
		urls.push ("data/fonts/dos/dos_0.png");
		types.push (lime.Assets.AssetType.IMAGE);
		
		
		urls.push ("data/fonts/ganon/ganon.fnt");
		types.push (lime.Assets.AssetType.TEXT);
		
		
		urls.push ("data/fonts/ganon/ganon_0.png");
		types.push (lime.Assets.AssetType.IMAGE);
		
		
		urls.push ("data/fonts/nokia/nokia.fnt");
		types.push (lime.Assets.AssetType.TEXT);
		
		
		urls.push ("data/fonts/nokia/nokia_0.png");
		types.push (lime.Assets.AssetType.IMAGE);
		
		
		urls.push ("data/fonts/oldenglish/oldenglish.fnt");
		types.push (lime.Assets.AssetType.TEXT);
		
		
		urls.push ("data/fonts/oldenglish/oldenglish_0.png");
		types.push (lime.Assets.AssetType.IMAGE);
		
		
		urls.push ("data/fonts/pixel/pixel.fnt");
		types.push (lime.Assets.AssetType.TEXT);
		
		
		urls.push ("data/fonts/pixel/pixel_0.png");
		types.push (lime.Assets.AssetType.IMAGE);
		
		
		urls.push ("data/fonts/pressstart/pressstart.fnt");
		types.push (lime.Assets.AssetType.TEXT);
		
		
		urls.push ("data/fonts/pressstart/pressstart_0.png");
		types.push (lime.Assets.AssetType.IMAGE);
		
		
		urls.push ("data/fonts/retrofuture/retrofuture.fnt");
		types.push (lime.Assets.AssetType.TEXT);
		
		
		urls.push ("data/fonts/retrofuture/retrofuture_0.png");
		types.push (lime.Assets.AssetType.IMAGE);
		
		
		urls.push ("data/fonts/roman/roman.fnt");
		types.push (lime.Assets.AssetType.TEXT);
		
		
		urls.push ("data/fonts/roman/roman_0.png");
		types.push (lime.Assets.AssetType.IMAGE);
		
		
		urls.push ("data/fonts/special/special.fnt");
		types.push (lime.Assets.AssetType.TEXT);
		
		
		urls.push ("data/fonts/special/special_0.png");
		types.push (lime.Assets.AssetType.IMAGE);
		
		
		urls.push ("data/fonts/yoster/yoster.fnt");
		types.push (lime.Assets.AssetType.TEXT);
		
		
		urls.push ("data/fonts/yoster/yoster_0.png");
		types.push (lime.Assets.AssetType.IMAGE);
		
		
		
		if (config.assetsPrefix != null) {
			
			for (i in 0...urls.length) {
				
				if (types[i] != lime.Assets.AssetType.FONT) {
					
					urls[i] = config.assetsPrefix + urls[i];
					
				}
				
			}
			
		}
		
		preloader.load (urls, types);
		#end
		
		var result = app.exec ();
		
		#if (sys && !nodejs && !emscripten)
		Sys.exit (result);
		#end
		
	}
	
	
	public static function init ():Void {
		
		var loaded = 0;
		var total = 0;
		var library_onLoad = function (__) {
			
			loaded++;
			
			if (loaded == total) {
				
				start ();
				
			}
			
		}
		
		preloader = null;
		
		
		
		if (total == 0) {
			
			start ();
			
		}
		
	}
	
	
	public static function main () {
		
		config = {
			
			build: "876",
			company: "Stephen and Terry",
			file: "webthing",
			fps: 60,
			name: "Webthing",
			orientation: "landscape",
			packageName: "com.stephenandterry.webthing",
			version: "1.0.0",
			windows: [
				
				{
					antialiasing: 0,
					background: 0,
					borderless: false,
					depthBuffer: false,
					display: 0,
					fullscreen: false,
					hardware: true,
					height: 480,
					parameters: "{}",
					resizable: true,
					stencilBuffer: true,
					title: "Webthing",
					vsync: true,
					width: 768,
					x: null,
					y: null
				},
			]
			
		};
		
		#if hxtelemetry
		var telemetry = new hxtelemetry.HxTelemetry.Config ();
		telemetry.allocations = true;
		telemetry.host = "localhost";
		telemetry.app_name = config.name;
		Reflect.setField (config, "telemetry", telemetry);
		#end
		
		#if (js && html5)
		#if (munit || utest)
		openfl.Lib.embed (null, 768, 480, "000000");
		#end
		#else
		create ();
		#end
		
	}
	
	
	public static function start ():Void {
		
		var hasMain = false;
		var entryPoint = Type.resolveClass ("terrylib.Load");
		
		for (methodName in Type.getClassFields (entryPoint)) {
			
			if (methodName == "main") {
				
				hasMain = true;
				break;
				
			}
			
		}
		
		lime.Assets.initialize ();
		
		if (hasMain) {
			
			Reflect.callMethod (entryPoint, Reflect.field (entryPoint, "main"), []);
			
		} else {
			
			var instance:DocumentClass = Type.createInstance (DocumentClass, []);
			
			/*if (Std.is (instance, openfl.display.DisplayObject)) {
				
				openfl.Lib.current.addChild (cast instance);
				
			}*/
			
		}
		
		openfl.Lib.current.stage.dispatchEvent (new openfl.events.Event (openfl.events.Event.RESIZE, false, false));
		
	}
	
	
	#if neko
	@:noCompletion @:dox(hide) public static function __init__ () {
		
		var loader = new neko.vm.Loader (untyped $loader);
		loader.addPath (haxe.io.Path.directory (Sys.executablePath ()));
		loader.addPath ("./");
		loader.addPath ("@executable_path/");
		
	}
	#end
	
	
}


@:build(DocumentClass.build())
@:keep class DocumentClass extends terrylib.Load {}


#else


import haxe.macro.Context;
import haxe.macro.Expr;


class DocumentClass {
	
	
	macro public static function build ():Array<Field> {
		
		var classType = Context.getLocalClass ().get ();
		var searchTypes = classType;
		
		while (searchTypes.superClass != null) {
			
			if (searchTypes.pack.length == 2 && searchTypes.pack[1] == "display" && searchTypes.name == "DisplayObject") {
				
				var fields = Context.getBuildFields ();
				
				var method = macro {
					
					openfl.Lib.current.addChild (this);
					super ();
					dispatchEvent (new openfl.events.Event (openfl.events.Event.ADDED_TO_STAGE, false, false));
					
				}
				
				fields.push ({ name: "new", access: [ APublic ], kind: FFun({ args: [], expr: method, params: [], ret: macro :Void }), pos: Context.currentPos () });
				
				return fields;
				
			}
			
			searchTypes = searchTypes.superClass.t.get ();
			
		}
		
		return null;
		
	}
	
	
}


#end
