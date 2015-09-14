import terrylib.*;
import openfl.external.ExternalInterface;

@:keep
class Webmusic{
	public static function playsound(t:Int, vol:Float) {
	  #if !flash	

			#if terryhasntupgraded
				ExternalInterface.call("playSound", t, vol);
			#else
	  			untyped __js__('playSound({0},{1})', t, vol);
			#end

	  #end
	}
	
	public static function playnote(seed:Int, freq:Float, length:Float, volume:Float) {
	  #if !flash	

			#if terryhasntupgraded
				ExternalInterface.call("playNote", seed, freq, length, volume);
			#else
	  			untyped __js__('playNote({0},{1},{2},{3})', seed,freq,length,volume);
			#end
	  #end
	}

	public static function playmusic(musicDat:String){
		MusicEngine.playmusic(musicDat);
	}

	public static function stopmusic(){
		MusicEngine.stopmusic();
	}


	public static var musicvol(get,set):Float;

	public static function set_musicvol(vol:Float){
		vol = Math.max(vol,0);
		vol = Math.min(vol,1);
		MusicEngine.vol=vol;
		return vol;
	}

	public static function get_musicvol():Float{
		return MusicEngine.vol;
	}

	public static var musicloop(get,set):Bool;
	public static function get_musicloop():Bool {
		return MusicEngine.musicLoop;
	}
	public static function set_musicloop(shouldLoop:Bool):Bool{
		MusicEngine.musicLoop=shouldLoop;
		return shouldLoop;
	}
}