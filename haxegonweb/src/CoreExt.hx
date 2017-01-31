import haxegon.*;

@:access(haxegon.Input)
@:access(haxegon.Gfx)
class CoreExt {
	public static function reset() {
	  Random.setseed(Std.int(Math.random() * 233280));
		Gfx.init(flash.Lib.current.stage);
		Gfx.resizescreen(240, 150, 1);
		Text.setfont(Webfont.DEFAULT, 1);
		Text.cleartextcache();
		Input.keybuffer = "";
	}
}	