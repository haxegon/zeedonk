import haxegon.*;

@:access(haxegon.Input)
@:access(haxegon.Gfx)
@:access(haxegon.Text)
class CoreExt {
	public static function reset() {
	  Random.setseed(Std.int(Math.random() * 233280));
		Gfx.init(Gfx.starstage, Gfx.flashstage);
		Gfx.resizescreen(240, 150);
		Text.setfont(Webfont.DEFAULT, 1);
		Input.keybuffer = "";
	}
}	