package terrylib;

import haxe.Timer;
import openfl.display.*;
import openfl.events.*;
import openfl.Lib;

@:access(Main)
@:access(terrylib.Gfx)
@:access(terrylib.Music)
@:access(terrylib.Mouse)
@:access(terrylib.Input)
@:access(terrylib.Scene)
class Core extends Sprite {
	public function new() {
		super();
		
		init();
	}
	
	public function init() {
		maxelapsed = 0.0333;
		maxframeskip = 5;
		tickrate = 4;
		_delta = 0;
		
		// on-stage event listener
		addEventListener(Event.ADDED_TO_STAGE, addedtostage);
		Lib.current.addChild(this);
	}
	
	private function addedtostage(e:Event = null){
		// remove event listener
		removeEventListener(Event.ADDED_TO_STAGE, addedtostage);
		
		//Init library classes
		Random.setseed(Std.int(Math.random() * 233280));
		Input.init(this.stage);
		Mouse.init(this.stage);
		Gfx.init(this.stage);
		
		#if terrylibweb
		#else
		Music.init();
		#end
		
		//Default setup
		#if terrylibweb
			Gfx.resizescreen(192, 120, 4);
			Text.setfont("default", 1);
		#else
			Gfx.resizescreen(768, 480);
			Text.setfont("opensans", 24);
		#end
		
		#if terrylibweb
		terrylibmain = new Main();
		#else
		Scene.init();
		#end
		
		// start game loop
		_rate = 1000 / TARGETFRAMERATE;
    // fixed framerate
    _skip = _rate * (maxframeskip + 1);
    _last = _prev = Lib.getTimer();
    _timer = new Timer(tickrate);
    _timer.run = ontimer;
		Gfx.update_fps = 0;
		Gfx.render_fps = 0;
		_framesthissecond_counter = -1;		
	}
	
	private function ontimer(){
		Gfx.skiprender = false;
		_skipedupdate = 0;
		
		// update timer
		_time = Lib.getTimer();
		_delta += (_time - _last);
		_last = _time;
		
		if (_framesthissecond_counter == -1) {
			_framesthissecond_counter = _time;
		}
		
		// quit if a frame hasn't passed
		if (_delta < _rate) return;
		
		// update timer
		_gametime = Std.int(_time);
		
		// update loop
		if (_delta > _skip) _delta = _skip;
		while (_delta >= _rate) {
			//HXP.elapsed = _rate * HXP.rate * 0.001;
			// update timer
			_updatetime = _time;
			_delta -= _rate;
			_prev = _time;
			
			// update loop
			if (Gfx.doclearscreeneachframe) Gfx.skiprender = true;
			_skipedupdate++; //Skip one update now; we catch it later at render
			if (_skipedupdate > 1) doupdate();
			
			// update timer
			_time = Lib.getTimer();
		}
		
		// update timer
		_rendertime = _time;
		
		// render loop
		Gfx.skiprender = false;	doupdate();
		Gfx.render_fps++;
		
		if (_rendertime-_framesthissecond_counter > 1000) {
			//trace("Update calls: " + Gfx.update_fps +", Render calls: " + Gfx.render_fps);
			_framesthissecond_counter = Lib.getTimer();
			Gfx.update_fps_max = Gfx.update_fps;
			Gfx.render_fps_max = Gfx.render_fps;
			Gfx.render_fps = 0;
			Gfx.update_fps = 0;
		}
		
		// update timer
		_time = Lib.getTimer();
	}
	
	public function doupdate() {
		Gfx.update_fps++;
		Mouse.update(Std.int(Lib.current.mouseX / Gfx.screenscale), Std.int(Lib.current.mouseY / Gfx.screenscale));
		Input.update();
		
		if (!Gfx.skiprender) {
			Gfx.drawto.lock();			
			if (Gfx.doclearscreeneachframe) Gfx.clearscreen();
		}
		#if terrylibweb
		terrylibmain.update();
		#else
		Scene.update();
		#end
		if(!Gfx.skiprender) {
			Text.drawstringinput();
			Debug.showlog();
			
			Gfx.drawto.unlock();
		}
	}
	
	#if terrylibweb
	public var terrylibmain:Main; //No scene control in online version
	#end
	
	//NEW FRAMERATE CODE - From HaxePunk fixed FPS implementation
	private var maxelapsed:Float;
	private var maxframeskip:Int;
	private var tickrate:Int;
	
	// Timing information.
	private var TARGETFRAMERATE:Int = 30;
	private var _delta:Float;
	private var _time:Float;
	private var _last:Float;
	private var _timer:Timer;
	private var	_rate:Float;
	private var	_skip:Float;
	private var _prev:Float;
	private var _skipedupdate:Int;

	// Debug timing information.
	private var _updatetime:Float;
	private var _rendertime:Float;
	private var _gametime:Float;
	private var _framesthissecond_counter:Float;
}