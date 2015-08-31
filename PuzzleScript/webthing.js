(function ($hx_exports) { "use strict";
$hx_exports.openfl = $hx_exports.openfl || {};
$hx_exports.lime = $hx_exports.lime || {};
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = true;
ApplicationMain.config = null;
ApplicationMain.preloader = null;
ApplicationMain.create = function() {
	var app = new openfl.display.Application();
	app.create(ApplicationMain.config);
	var display = new Preloader();
	ApplicationMain.preloader = new openfl.display.Preloader(display);
	app.setPreloader(ApplicationMain.preloader);
	ApplicationMain.preloader.onComplete.add(ApplicationMain.init);
	ApplicationMain.preloader.create(ApplicationMain.config);
	var urls = [];
	var types = [];
	urls.push("data/fonts/04b11/04b11.fnt");
	types.push("TEXT");
	urls.push("data/fonts/04b11/04b11_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/apple/apple.fnt");
	types.push("TEXT");
	urls.push("data/fonts/apple/apple_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/bold/bold.fnt");
	types.push("TEXT");
	urls.push("data/fonts/bold/bold_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/c64/c64.fnt");
	types.push("TEXT");
	urls.push("data/fonts/c64/c64_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/casual/casual.fnt");
	types.push("TEXT");
	urls.push("data/fonts/casual/casual_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/comic/comic.fnt");
	types.push("TEXT");
	urls.push("data/fonts/comic/comic_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/crypt/crypt.fnt");
	types.push("TEXT");
	urls.push("data/fonts/crypt/crypt_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/default/default.fnt");
	types.push("TEXT");
	urls.push("data/fonts/default/default_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/dos/dos.fnt");
	types.push("TEXT");
	urls.push("data/fonts/dos/dos_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/ganon/ganon.fnt");
	types.push("TEXT");
	urls.push("data/fonts/ganon/ganon_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/handy/handy.fnt");
	types.push("TEXT");
	urls.push("data/fonts/handy/handy_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/nokia/nokia.fnt");
	types.push("TEXT");
	urls.push("data/fonts/nokia/nokia_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/oldenglish/oldenglish.fnt");
	types.push("TEXT");
	urls.push("data/fonts/oldenglish/oldenglish_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/pixel/pixel.fnt");
	types.push("TEXT");
	urls.push("data/fonts/pixel/pixel_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/pressstart/pressstart.fnt");
	types.push("TEXT");
	urls.push("data/fonts/pressstart/pressstart_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/retrofuture/retrofuture.fnt");
	types.push("TEXT");
	urls.push("data/fonts/retrofuture/retrofuture_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/roman/roman.fnt");
	types.push("TEXT");
	urls.push("data/fonts/roman/roman_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/special/special.fnt");
	types.push("TEXT");
	urls.push("data/fonts/special/special_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/visitor/visitor.fnt");
	types.push("TEXT");
	urls.push("data/fonts/visitor/visitor_0.png");
	types.push("IMAGE");
	urls.push("data/fonts/yoster/yoster.fnt");
	types.push("TEXT");
	urls.push("data/fonts/yoster/yoster_0.png");
	types.push("IMAGE");
	if(ApplicationMain.config.assetsPrefix != null) {
		var _g1 = 0;
		var _g = urls.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(types[i] != "FONT") urls[i] = ApplicationMain.config.assetsPrefix + urls[i];
		}
	}
	ApplicationMain.preloader.load(urls,types);
	var result = app.exec();
};
ApplicationMain.init = function() {
	var loaded = 0;
	var total = 0;
	var library_onLoad = function(__) {
		loaded++;
		if(loaded == total) ApplicationMain.start();
	};
	ApplicationMain.preloader = null;
	if(total == 0) ApplicationMain.start();
};
ApplicationMain.main = function() {
	ApplicationMain.config = { build : "900", company : "Stephen and Terry", file : "webthing", fps : 30, name : "Webthing", orientation : "landscape", packageName : "com.stephenandterry.webthing", version : "1.0.0", windows : [{ antialiasing : 0, background : 0, borderless : false, depthBuffer : false, display : 0, fullscreen : false, hardware : true, height : 480, parameters : "{}", resizable : true, stencilBuffer : true, title : "Webthing", vsync : true, width : 768, x : null, y : null}]};
};
ApplicationMain.start = function() {
	var hasMain = false;
	var entryPoint = Type.resolveClass("terrylib.Load");
	var _g = 0;
	var _g1 = Type.getClassFields(entryPoint);
	while(_g < _g1.length) {
		var methodName = _g1[_g];
		++_g;
		if(methodName == "main") {
			hasMain = true;
			break;
		}
	}
	lime.Assets.initialize();
	if(hasMain) Reflect.callMethod(entryPoint,Reflect.field(entryPoint,"main"),[]); else {
		var instance = Type.createInstance(DocumentClass,[]);
	}
	openfl.Lib.current.stage.dispatchEvent(new openfl.events.Event(openfl.events.Event.RESIZE,false,false));
};
var openfl = {};
openfl.events = {};
openfl.events.IEventDispatcher = function() { };
$hxClasses["openfl.events.IEventDispatcher"] = openfl.events.IEventDispatcher;
openfl.events.IEventDispatcher.__name__ = true;
openfl.events.EventDispatcher = function(target) {
	if(target != null) this.__targetDispatcher = target;
};
$hxClasses["openfl.events.EventDispatcher"] = openfl.events.EventDispatcher;
openfl.events.EventDispatcher.__name__ = true;
openfl.events.EventDispatcher.__interfaces__ = [openfl.events.IEventDispatcher];
openfl.events.EventDispatcher.__sortByPriority = function(l1,l2) {
	if(l1.priority == l2.priority) return 0; else if(l1.priority > l2.priority) return -1; else return 1;
};
openfl.events.EventDispatcher.prototype = {
	addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		if(this.__eventMap == null) {
			this.__dispatching = new haxe.ds.StringMap();
			this.__eventMap = new haxe.ds.StringMap();
			this.__newEventMap = new haxe.ds.StringMap();
		}
		if(!this.__eventMap.exists(type)) {
			var list = new Array();
			list.push(new openfl.events._EventDispatcher.Listener(listener,useCapture,priority));
			this.__eventMap.set(type,list);
		} else {
			var list1;
			if(this.__dispatching.get(type) == true) {
				if(!this.__newEventMap.exists(type)) {
					var _this = this.__eventMap.get(type);
					list1 = _this.slice();
					this.__newEventMap.set(type,list1);
				} else list1 = this.__newEventMap.get(type);
			} else list1 = this.__eventMap.get(type);
			var _g1 = 0;
			var _g = list1.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(Reflect.compareMethods(list1[i].callback,listener)) return;
			}
			list1.push(new openfl.events._EventDispatcher.Listener(listener,useCapture,priority));
			list1.sort(openfl.events.EventDispatcher.__sortByPriority);
		}
	}
	,dispatchEvent: function(event) {
		if(this.__targetDispatcher != null) event.target = this.__targetDispatcher; else event.target = this;
		return this.__dispatchEvent(event);
	}
	,hasEventListener: function(type) {
		if(this.__eventMap == null) return false;
		if(this.__dispatching.get(type) == true && this.__newEventMap.exists(type)) return this.__newEventMap.get(type).length > 0; else return this.__eventMap.exists(type);
	}
	,removeEventListener: function(type,listener,capture) {
		if(capture == null) capture = false;
		if(this.__eventMap == null) return;
		var list = this.__eventMap.get(type);
		if(list == null) return;
		var dispatching = this.__dispatching.get(type) == true;
		if(dispatching) {
			if(!this.__newEventMap.exists(type)) {
				var _this = this.__eventMap.get(type);
				list = _this.slice();
				this.__newEventMap.set(type,list);
			} else list = this.__newEventMap.get(type);
		}
		var _g1 = 0;
		var _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].match(listener,capture)) {
				list.splice(i,1);
				break;
			}
		}
		if(!dispatching) {
			if(list.length == 0) this.__eventMap.remove(type);
			if(!this.__eventMap.iterator().hasNext()) {
				this.__eventMap = null;
				this.__newEventMap = null;
			}
		}
	}
	,__dispatchEvent: function(event) {
		if(this.__eventMap == null || event == null) return false;
		var type = event.type;
		var list;
		if(this.__dispatching.get(type) == true) {
			list = this.__newEventMap.get(type);
			if(list == null) return false;
			list = list.slice();
		} else {
			list = this.__eventMap.get(type);
			if(list == null) return false;
			this.__dispatching.set(type,true);
		}
		if(event.target == null) {
			if(this.__targetDispatcher != null) event.target = this.__targetDispatcher; else event.target = this;
		}
		event.currentTarget = this;
		var capture = event.eventPhase == openfl.events.EventPhase.CAPTURING_PHASE;
		var index = 0;
		var listener;
		while(index < list.length) {
			listener = list[index];
			if(listener.useCapture == capture) {
				listener.callback(event);
				if(event.__isCancelledNow) break;
			}
			if(listener == list[index]) index++;
		}
		if(this.__newEventMap != null && this.__newEventMap.exists(type)) {
			var list1 = this.__newEventMap.get(type);
			if(list1.length > 0) this.__eventMap.set(type,list1); else this.__eventMap.remove(type);
			if(!this.__eventMap.iterator().hasNext()) {
				this.__eventMap = null;
				this.__newEventMap = null;
			} else this.__newEventMap.remove(type);
		}
		this.__dispatching.set(event.type,false);
		return true;
	}
	,__class__: openfl.events.EventDispatcher
};
openfl.display = {};
openfl.display.IBitmapDrawable = function() { };
$hxClasses["openfl.display.IBitmapDrawable"] = openfl.display.IBitmapDrawable;
openfl.display.IBitmapDrawable.__name__ = true;
openfl.display.IBitmapDrawable.prototype = {
	__class__: openfl.display.IBitmapDrawable
};
openfl.display.DisplayObject = function() {
	this.__maskCached = false;
	openfl.events.EventDispatcher.call(this);
	this.__alpha = 1;
	this.__rotation = 0;
	this.__scaleX = 1;
	this.__scaleY = 1;
	this.__visible = true;
	this.__x = 0;
	this.__y = 0;
	this.__worldAlpha = 1;
	this.__worldTransform = new openfl.geom.Matrix();
	this.__rotationCache = 0;
	this.__rotationSine = 0;
	this.__rotationCosine = 1;
	this.__worldColorTransform = new openfl.geom.ColorTransform();
	this.set_name("instance" + ++openfl.display.DisplayObject.__instanceCount);
};
$hxClasses["openfl.display.DisplayObject"] = openfl.display.DisplayObject;
openfl.display.DisplayObject.__name__ = true;
openfl.display.DisplayObject.__interfaces__ = [openfl.display.IBitmapDrawable];
openfl.display.DisplayObject.__super__ = openfl.events.EventDispatcher;
openfl.display.DisplayObject.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	globalToLocal: function(pos) {
		pos = pos.clone();
		this.__getTransform().__transformInversePoint(pos);
		return pos;
	}
	,__broadcast: function(event,notifyChilden) {
		if(this.__eventMap != null && this.hasEventListener(event.type)) {
			var result = openfl.events.EventDispatcher.prototype.__dispatchEvent.call(this,event);
			if(event.__isCancelled) return true;
			return result;
		}
		return false;
	}
	,__dispatchEvent: function(event) {
		var result = openfl.events.EventDispatcher.prototype.__dispatchEvent.call(this,event);
		if(event.__isCancelled) return true;
		if(event.bubbles && this.parent != null && this.parent != this) {
			event.eventPhase = openfl.events.EventPhase.BUBBLING_PHASE;
			if(event.target == null) event.target = this;
			this.parent.__dispatchEvent(event);
		}
		return result;
	}
	,__enterFrame: function() {
	}
	,__getBounds: function(rect,matrix) {
		if(this.__graphics != null) this.__graphics.__getBounds(rect,matrix);
	}
	,__getCursor: function() {
		return null;
	}
	,__getInteractive: function(stack) {
		return false;
	}
	,__getTransform: function() {
		if(this.__transformDirty || openfl.display.DisplayObject.__worldTransformDirty > 0) {
			var list = [];
			var current = this;
			var transformDirty = this.__transformDirty;
			if(this.parent == null) {
				if(transformDirty) this.__update(true,false);
			} else while(current.parent != null) {
				list.push(current);
				current = current.parent;
				if(current.__transformDirty) transformDirty = true;
			}
			if(transformDirty) {
				var i = list.length;
				while(--i >= 0) list[i].__update(true,false);
			}
		}
		return this.__worldTransform;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(this.__graphics != null) {
			if(!this.get_visible() || this.__isMask) return false;
			if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
			if(this.__graphics.__hitTest(x,y,shapeFlag,this.__getTransform())) {
				if(stack != null && !interactiveOnly) stack.push(this);
				return true;
			}
		}
		return false;
	}
	,__hitTestMask: function(x,y) {
		if(this.__graphics != null) {
			if(this.__graphics.__hitTest(x,y,true,this.__getTransform())) return true;
		}
		return false;
	}
	,__renderCairo: function(renderSession) {
		if(this.__graphics != null) openfl._internal.renderer.cairo.CairoShape.render(this,renderSession);
	}
	,__renderCairoMask: function(renderSession) {
		if(this.__graphics != null) openfl._internal.renderer.cairo.CairoGraphics.renderMask(this.__graphics,renderSession);
	}
	,__renderCanvas: function(renderSession) {
		if(this.__graphics != null) openfl._internal.renderer.canvas.CanvasShape.render(this,renderSession);
	}
	,__renderCanvasMask: function(renderSession) {
		if(this.__graphics != null) openfl._internal.renderer.canvas.CanvasGraphics.renderMask(this.__graphics,renderSession);
	}
	,__renderDOM: function(renderSession) {
		if(this.__graphics != null) openfl._internal.renderer.dom.DOMShape.render(this,renderSession);
	}
	,__renderGL: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.__graphics != null) {
			if(this.__graphics.__hardware) openfl._internal.renderer.opengl.utils.GraphicsRenderer.render(this,renderSession); else {
				openfl._internal.renderer.canvas.CanvasGraphics.render(this.__graphics,renderSession);
				openfl._internal.renderer.opengl.GLRenderer.renderBitmap(this,renderSession);
			}
		}
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			if(this.stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED_FROM_STAGE,false,false));
			this.stage = stage;
			if(stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
		}
	}
	,__setRenderDirty: function() {
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			openfl.display.DisplayObject.__worldRenderDirty++;
		}
	}
	,__update: function(transformOnly,updateChildren,maskGraphics) {
		this.__renderable = this.get_visible() && this.get_scaleX() != 0 && this.get_scaleY() != 0 && !this.__isMask;
		if(this.get_rotation() != this.__rotationCache) {
			this.__rotationCache = this.get_rotation();
			var radians = this.get_rotation() * (Math.PI / 180);
			this.__rotationSine = Math.sin(radians);
			this.__rotationCosine = Math.cos(radians);
		}
		var sr = this.get_scrollRect();
		if(this.parent != null) {
			var parentTransform = this.parent.__worldTransform;
			var a00 = this.__rotationCosine * this.get_scaleX();
			var a01 = this.__rotationSine * this.get_scaleX();
			var a10 = -this.__rotationSine * this.get_scaleY();
			var a11 = this.__rotationCosine * this.get_scaleY();
			var b00 = parentTransform.a;
			var b01 = parentTransform.b;
			var b10 = parentTransform.c;
			var b11 = parentTransform.d;
			if(this.__worldTransform == null) this.__worldTransform = new openfl.geom.Matrix();
			this.__worldTransform.a = a00 * b00 + a01 * b10;
			this.__worldTransform.b = a00 * b01 + a01 * b11;
			this.__worldTransform.c = a10 * b00 + a11 * b10;
			this.__worldTransform.d = a10 * b01 + a11 * b11;
			this.__worldTransform.tx = this.get_x() * b00 + this.get_y() * b10 + parentTransform.tx;
			this.__worldTransform.ty = this.get_x() * b01 + this.get_y() * b11 + parentTransform.ty;
			if(sr != null) {
				if(this.__worldTransform.a != 1 || this.__worldTransform.b != 0 || this.__worldTransform.c != 0 || this.__worldTransform.d != 1) sr.__transform(sr,this.__worldTransform); else {
					this.__worldTransform.tx = (this.get_x() - sr.x) * b00 + (this.get_y() - sr.y) * b10 + parentTransform.tx;
					this.__worldTransform.ty = (this.get_x() - sr.x) * b01 + (this.get_y() - sr.y) * b11 + parentTransform.ty;
				}
			}
			if(this.__isMask) this.__maskCached = false;
		} else {
			this.__worldTransform.a = this.__rotationCosine * this.get_scaleX();
			this.__worldTransform.c = -this.__rotationSine * this.get_scaleY();
			this.__worldTransform.b = this.__rotationSine * this.get_scaleX();
			this.__worldTransform.d = this.__rotationCosine * this.get_scaleY();
			this.__worldTransform.tx = this.get_x();
			this.__worldTransform.ty = this.get_y();
			if(sr != null) {
				if(this.__worldTransform.a != 1 || this.__worldTransform.b != 0 || this.__worldTransform.c != 0 || this.__worldTransform.d != 1) sr.__transform(sr,this.__worldTransform); else {
					this.__worldTransform.tx = this.get_x() - this.get_scrollRect().x;
					this.__worldTransform.ty = this.get_y() - this.get_scrollRect().y;
				}
			}
		}
		if(updateChildren && this.__transformDirty) {
			this.__transformDirty = false;
			openfl.display.DisplayObject.__worldTransformDirty--;
		}
		if(!transformOnly && this.__mask != null && !this.__mask.__maskCached) {
			if(this.__maskGraphics == null) this.__maskGraphics = new openfl.display.Graphics();
			this.__maskGraphics.clear();
			this.__mask.__update(true,true,this.__maskGraphics);
			this.__mask.__maskCached = true;
		}
		if(maskGraphics != null) this.__updateMask(maskGraphics);
		if(!transformOnly) {
			if(!this.__worldColorTransform.__equals(this.get_transform().get_colorTransform())) this.__worldColorTransform = this.get_transform().get_colorTransform().__clone();
			if(this.parent != null) {
				this.__worldAlpha = this.get_alpha() * this.parent.__worldAlpha;
				this.__worldColorTransform.__combine(this.parent.__worldColorTransform);
				if(this.blendMode == null || this.blendMode == openfl.display.BlendMode.NORMAL) this.__blendMode = this.parent.__blendMode;
			} else this.__worldAlpha = this.get_alpha();
			if(updateChildren && this.__renderDirty) this.__renderDirty = false;
		}
	}
	,__updateChildren: function(transformOnly) {
		this.__renderable = this.get_visible() && this.get_scaleX() != 0 && this.get_scaleY() != 0 && !this.__isMask;
		if(!this.__renderable && !this.__isMask) return;
		this.__worldAlpha = this.get_alpha();
		if(this.__transformDirty) {
			this.__transformDirty = false;
			openfl.display.DisplayObject.__worldTransformDirty--;
		}
	}
	,__updateMask: function(maskGraphics) {
		if(this.__graphics != null) {
			maskGraphics.__commands.push(openfl.display.DrawCommand.OverrideMatrix(this.__worldTransform));
			maskGraphics.__commands = maskGraphics.__commands.concat(this.__graphics.__commands);
			maskGraphics.set___dirty(true);
			maskGraphics.__visible = true;
			if(maskGraphics.__bounds == null) maskGraphics.__bounds = new openfl.geom.Rectangle();
			this.__graphics.__getBounds(maskGraphics.__bounds,openfl.geom.Matrix.__identity);
		}
	}
	,get_alpha: function() {
		return this.__alpha;
	}
	,get_mask: function() {
		return this.__mask;
	}
	,get_mouseX: function() {
		if(this.stage != null) return this.__getTransform().__transformInverseX(this.stage.__mouseX,this.stage.__mouseY);
		return 0;
	}
	,get_mouseY: function() {
		if(this.stage != null) return this.__getTransform().__transformInverseY(this.stage.__mouseX,this.stage.__mouseY);
		return 0;
	}
	,set_name: function(value) {
		return this.__name = value;
	}
	,get_rotation: function() {
		return this.__rotation;
	}
	,get_scaleX: function() {
		return this.__scaleX;
	}
	,set_scaleX: function(value) {
		if(value != this.__scaleX) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__scaleX = value;
	}
	,get_scaleY: function() {
		return this.__scaleY;
	}
	,set_scaleY: function(value) {
		if(this.__scaleY != value) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__scaleY = value;
	}
	,get_scrollRect: function() {
		if(this.__scrollRect == null) return null;
		return this.__scrollRect.clone();
	}
	,get_transform: function() {
		if(this.__transform == null) this.__transform = new openfl.geom.Transform(this);
		return this.__transform;
	}
	,get_visible: function() {
		return this.__visible;
	}
	,set_visible: function(value) {
		if(value != this.__visible) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
		}
		return this.__visible = value;
	}
	,get_x: function() {
		return this.__x;
	}
	,set_x: function(value) {
		if(value != this.__x) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__x = value;
	}
	,get_y: function() {
		return this.__y;
	}
	,set_y: function(value) {
		if(value != this.__y) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__y = value;
	}
	,__class__: openfl.display.DisplayObject
});
openfl.display.InteractiveObject = function() {
	openfl.display.DisplayObject.call(this);
	this.doubleClickEnabled = false;
	this.mouseEnabled = true;
	this.needsSoftKeyboard = false;
	this.__tabEnabled = false;
	this.tabIndex = -1;
};
$hxClasses["openfl.display.InteractiveObject"] = openfl.display.InteractiveObject;
openfl.display.InteractiveObject.__name__ = true;
openfl.display.InteractiveObject.__super__ = openfl.display.DisplayObject;
openfl.display.InteractiveObject.prototype = $extend(openfl.display.DisplayObject.prototype,{
	__getInteractive: function(stack) {
		if(stack != null) {
			stack.push(this);
			if(this.parent != null) this.parent.__getInteractive(stack);
		}
		return true;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled) return false;
		return openfl.display.DisplayObject.prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly);
	}
	,get_tabEnabled: function() {
		return this.__tabEnabled;
	}
	,__class__: openfl.display.InteractiveObject
});
openfl.display.DisplayObjectContainer = function() {
	openfl.display.InteractiveObject.call(this);
	this.mouseChildren = true;
	this.__children = new Array();
	this.__removedChildren = new Array();
};
$hxClasses["openfl.display.DisplayObjectContainer"] = openfl.display.DisplayObjectContainer;
openfl.display.DisplayObjectContainer.__name__ = true;
openfl.display.DisplayObjectContainer.__super__ = openfl.display.InteractiveObject;
openfl.display.DisplayObjectContainer.prototype = $extend(openfl.display.InteractiveObject.prototype,{
	addChild: function(child) {
		if(child != null) {
			if(child.parent != null) child.parent.removeChild(child);
			this.__children.push(child);
			child.parent = this;
			if(this.stage != null) child.__setStageReference(this.stage);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
			var event = new openfl.events.Event(openfl.events.Event.ADDED,true);
			event.target = child;
			child.__dispatchEvent(event);
		}
		return child;
	}
	,contains: function(child) {
		while(child != this && child != null) child = child.parent;
		return child == this;
	}
	,removeChild: function(child) {
		if(child != null && child.parent == this) {
			if(this.stage != null) child.__setStageReference(null);
			child.parent = null;
			HxOverrides.remove(this.__children,child);
			this.__removedChildren.push(child);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
			child.__dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED,true));
		}
		return child;
	}
	,__broadcast: function(event,notifyChilden) {
		if(event.target == null) event.target = this;
		var result = openfl.display.InteractiveObject.prototype.__broadcast.call(this,event,notifyChilden);
		if(!event.__isCancelled && notifyChilden) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__broadcast(event,true);
				if(event.__isCancelled) return true;
			}
		}
		return result;
	}
	,__enterFrame: function() {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__enterFrame();
		}
	}
	,__getBounds: function(rect,matrix) {
		openfl.display.InteractiveObject.prototype.__getBounds.call(this,rect,matrix);
		if(this.__children.length == 0) return;
		var matrixCache = null;
		if(matrix != null) {
			matrixCache = this.__worldTransform;
			this.__worldTransform = matrix;
			this.__updateChildren(true);
		}
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_scaleX() == 0 || child.get_scaleY() == 0 || child.__isMask) continue;
			child.__getBounds(rect,child.__worldTransform);
		}
		if(matrix != null) {
			this.__worldTransform = matrixCache;
			this.__updateChildren(true);
		}
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled && !this.mouseChildren) return false;
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
		if(this.get_scrollRect() != null && !this.get_scrollRect().containsPoint(this.globalToLocal(new openfl.geom.Point(x,y)))) return false;
		var i = this.__children.length;
		if(interactiveOnly) {
			if(stack == null || !this.mouseChildren) {
				while(--i >= 0) if(this.__children[i].__hitTest(x,y,shapeFlag,null,true)) {
					if(stack != null) stack.push(this);
					return true;
				}
			} else if(stack != null) {
				var length = stack.length;
				var interactive = false;
				var hitTest = false;
				while(--i >= 0) {
					interactive = this.__children[i].__getInteractive(null);
					if(interactive || this.mouseEnabled && !hitTest) {
						if(this.__children[i].__hitTest(x,y,shapeFlag,stack,true)) {
							hitTest = true;
							if(interactive) break;
						}
					}
				}
				if(hitTest) {
					stack.splice(length,0,this);
					return true;
				}
			}
		} else while(--i >= 0) this.__children[i].__hitTest(x,y,shapeFlag,stack,false);
		return false;
	}
	,__hitTestMask: function(x,y) {
		var i = this.__children.length;
		while(--i >= 0) if(this.__children[i].__hitTestMask(x,y)) return true;
		return false;
	}
	,__renderCairo: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		openfl.display.InteractiveObject.prototype.__renderCairo.call(this,renderSession);
		if(this.get_scrollRect() != null) renderSession.maskManager.pushRect(this.get_scrollRect(),this.__worldTransform);
		if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCairo(renderSession);
		}
		if(this.__removedChildren.length > 0) this.__removedChildren.splice(0,this.__removedChildren.length);
		if(this.__mask != null) renderSession.maskManager.popMask();
		if(this.get_scrollRect() != null) renderSession.maskManager.popMask();
	}
	,__renderCairoMask: function(renderSession) {
		if(this.__graphics != null) openfl._internal.renderer.cairo.CairoGraphics.renderMask(this.__graphics,renderSession);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCairoMask(renderSession);
		}
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		openfl.display.InteractiveObject.prototype.__renderCanvas.call(this,renderSession);
		if(this.get_scrollRect() != null) renderSession.maskManager.pushRect(this.get_scrollRect(),this.__worldTransform);
		if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCanvas(renderSession);
		}
		if(this.__removedChildren.length > 0) this.__removedChildren.splice(0,this.__removedChildren.length);
		if(this.__mask != null) renderSession.maskManager.popMask();
		if(this.get_scrollRect() != null) renderSession.maskManager.popMask();
	}
	,__renderCanvasMask: function(renderSession) {
		if(this.__graphics != null) openfl._internal.renderer.canvas.CanvasGraphics.renderMask(this.__graphics,renderSession);
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		renderSession.context.rect(0,0,bounds.width,bounds.height);
	}
	,__renderDOM: function(renderSession) {
		openfl.display.InteractiveObject.prototype.__renderDOM.call(this,renderSession);
		if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderDOM(renderSession);
		}
		var _g2 = 0;
		var _g11 = this.__removedChildren;
		while(_g2 < _g11.length) {
			var orphan = _g11[_g2];
			++_g2;
			if(orphan.stage == null) orphan.__renderDOM(renderSession);
		}
		if(this.__removedChildren.length > 0) this.__removedChildren.splice(0,this.__removedChildren.length);
		if(this.__mask != null) renderSession.maskManager.popMask();
	}
	,__renderGL: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.get_scrollRect() != null) {
			renderSession.spriteBatch.stop();
			var m = this.__worldTransform.clone();
			var clip = openfl.geom.Rectangle.__temp;
			this.get_scrollRect().__transform(clip,m);
			clip.y = renderSession.renderer.height - clip.y - clip.height;
			renderSession.spriteBatch.start(clip);
		}
		var masked = this.__mask != null && this.__maskGraphics != null && this.__maskGraphics.__commands.length > 0;
		if(masked) {
			renderSession.spriteBatch.stop();
			renderSession.maskManager.pushMask(this);
			renderSession.spriteBatch.start();
		}
		openfl.display.InteractiveObject.prototype.__renderGL.call(this,renderSession);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderGL(renderSession);
		}
		if(masked) {
			renderSession.spriteBatch.stop();
			renderSession.maskManager.popMask();
			renderSession.spriteBatch.start();
		}
		if(this.get_scrollRect() != null) {
			renderSession.spriteBatch.stop();
			renderSession.spriteBatch.start();
		}
		if(this.__removedChildren.length > 0) this.__removedChildren.splice(0,this.__removedChildren.length);
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			if(this.stage != null) this.__dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED_FROM_STAGE,false,false));
			this.stage = stage;
			if(stage != null) this.__dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
			if(this.__children != null) {
				var _g = 0;
				var _g1 = this.__children;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					child.__setStageReference(stage);
				}
			}
		}
	}
	,__update: function(transformOnly,updateChildren,maskGraphics) {
		openfl.display.InteractiveObject.prototype.__update.call(this,transformOnly,updateChildren,maskGraphics);
		if(!this.__renderable && !this.__isMask) return;
		if(updateChildren) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__update(transformOnly,true,maskGraphics);
			}
		}
	}
	,__updateChildren: function(transformOnly) {
		openfl.display.InteractiveObject.prototype.__updateChildren.call(this,transformOnly);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__update(transformOnly,true);
		}
	}
	,__class__: openfl.display.DisplayObjectContainer
});
openfl.display.Sprite = function() {
	openfl.display.DisplayObjectContainer.call(this);
	this.buttonMode = false;
	this.useHandCursor = true;
	this.loaderInfo = openfl.display.LoaderInfo.create(null);
};
$hxClasses["openfl.display.Sprite"] = openfl.display.Sprite;
openfl.display.Sprite.__name__ = true;
openfl.display.Sprite.__super__ = openfl.display.DisplayObjectContainer;
openfl.display.Sprite.prototype = $extend(openfl.display.DisplayObjectContainer.prototype,{
	__getCursor: function() {
		if(this.buttonMode && this.useHandCursor) return lime.ui.MouseCursor.POINTER; else return null;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled && !this.mouseChildren) return false;
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
		if(openfl.display.DisplayObjectContainer.prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly)) return interactiveOnly; else if((!interactiveOnly || this.mouseEnabled) && this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__getTransform())) {
			if(stack != null) stack.push(this);
			return true;
		}
		return false;
	}
	,__hitTestMask: function(x,y) {
		if(openfl.display.DisplayObjectContainer.prototype.__hitTestMask.call(this,x,y)) return true; else if(this.__graphics != null && this.__graphics.__hitTest(x,y,true,this.__getTransform())) return true;
		return false;
	}
	,get_graphics: function() {
		if(this.__graphics == null) {
			this.__graphics = new openfl.display.Graphics();
			this.__graphics.__owner = this;
		}
		return this.__graphics;
	}
	,get_tabEnabled: function() {
		return this.__tabEnabled || this.buttonMode;
	}
	,__class__: openfl.display.Sprite
});
var terrylib = {};
terrylib.Core = function() {
	this._timer = new openfl.utils.Timer(4);
	this._delta = 0;
	this._current = 0;
	this._last = -1;
	this.TARGET_FPS = 30;
	openfl.display.Sprite.call(this);
	this.init();
};
$hxClasses["terrylib.Core"] = terrylib.Core;
terrylib.Core.__name__ = true;
terrylib.Core.__super__ = openfl.display.Sprite;
terrylib.Core.prototype = $extend(openfl.display.Sprite.prototype,{
	init: function() {
		terrylib.Random.setseed(Std["int"](Math.random() * 233280));
		terrylib.Input.init(this.stage);
		terrylib.Mouse.init(this.stage);
		terrylib.Gfx.init(this.stage);
		terrylib.Gfx.resizescreen(192,120,4);
		terrylib.Text.setfont("default",1);
		this.terrylibmain = new Main();
		this._rate = 1000 / this.TARGET_FPS;
		this._skip = this._rate * 10;
		this._timer.addEventListener(openfl.events.TimerEvent.TIMER,$bind(this,this.update));
		this._timer.start();
	}
	,update: function(e) {
		terrylib.Gfx.skiprender = false;
		this._current = openfl.Lib.getTimer();
		if(this._last < 0) this._last = this._current;
		this._delta += this._current - this._last;
		this._last = this._current;
		if(this._delta >= this._rate) {
			this._delta %= this._skip;
			if(this._delta >= this._rate) {
				this._delta -= this._rate;
				while(this._delta >= this._rate) {
					this._delta -= this._rate;
					if(terrylib.Gfx.doclearscreeneachframe) terrylib.Gfx.skiprender = true;
					this.doupdate();
				}
			}
			terrylib.Gfx.skiprender = false;
			this.doupdate();
			e.updateAfterEvent();
		}
	}
	,doupdate: function() {
		terrylib.Mouse.update(Std["int"](openfl.Lib.current.get_mouseX() / terrylib.Gfx.screenscale),Std["int"](openfl.Lib.current.get_mouseY() / terrylib.Gfx.screenscale));
		terrylib.Input.update();
		if(!terrylib.Gfx.skiprender) {
			terrylib.Gfx.backbuffer.lock();
			if(terrylib.Gfx.doclearscreeneachframe) terrylib.Gfx.clearscreen();
		}
		this.terrylibmain.update();
		if(!terrylib.Gfx.skiprender) {
			terrylib.Text.drawstringinput();
			terrylib.Debug.showlog();
			terrylib.Gfx.backbuffer.unlock();
		}
	}
	,__class__: terrylib.Core
});
terrylib.Load = function() {
	terrylib.Core.call(this);
};
$hxClasses["terrylib.Load"] = terrylib.Load;
terrylib.Load.__name__ = true;
terrylib.Load.__super__ = terrylib.Core;
terrylib.Load.prototype = $extend(terrylib.Core.prototype,{
	__class__: terrylib.Load
});
var DocumentClass = function() {
	openfl.Lib.current.addChild(this);
	terrylib.Load.call(this);
	this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = true;
DocumentClass.__super__ = terrylib.Load;
DocumentClass.prototype = $extend(terrylib.Load.prototype,{
	__class__: DocumentClass
});
var lime = {};
lime.AssetLibrary = function() {
};
$hxClasses["lime.AssetLibrary"] = lime.AssetLibrary;
lime.AssetLibrary.__name__ = true;
lime.AssetLibrary.prototype = {
	exists: function(id,type) {
		return false;
	}
	,getBytes: function(id) {
		return null;
	}
	,getFont: function(id) {
		return null;
	}
	,getImage: function(id) {
		return null;
	}
	,getText: function(id) {
		var bytes = this.getBytes(id);
		if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
	}
	,isLocal: function(id,type) {
		return true;
	}
	,unload: function() {
	}
	,__class__: lime.AssetLibrary
};
var DefaultAssetLibrary = function() {
	this.type = new haxe.ds.StringMap();
	this.path = new haxe.ds.StringMap();
	this.className = new haxe.ds.StringMap();
	lime.AssetLibrary.call(this);
	var id;
	id = "data/fonts/04b11/04b11.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/04b11/04b11_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/apple/apple.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/apple/apple_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/bold/bold.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/bold/bold_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/c64/c64.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/c64/c64_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/casual/casual.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/casual/casual_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/comic/comic.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/comic/comic_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/crypt/crypt.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/crypt/crypt_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/default/default.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/default/default_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/dos/dos.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/dos/dos_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/ganon/ganon.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/ganon/ganon_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/handy/handy.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/handy/handy_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/nokia/nokia.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/nokia/nokia_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/oldenglish/oldenglish.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/oldenglish/oldenglish_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/pixel/pixel.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/pixel/pixel_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/pressstart/pressstart.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/pressstart/pressstart_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/retrofuture/retrofuture.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/retrofuture/retrofuture_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/roman/roman.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/roman/roman_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/special/special.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/special/special_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/visitor/visitor.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/visitor/visitor_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	id = "data/fonts/yoster/yoster.fnt";
	this.path.set(id,id);
	this.type.set(id,"TEXT");
	id = "data/fonts/yoster/yoster_0.png";
	this.path.set(id,id);
	this.type.set(id,"IMAGE");
	var assetsPrefix = ApplicationMain.config.assetsPrefix;
	if(assetsPrefix != null) {
		var $it0 = this.path.keys();
		while( $it0.hasNext() ) {
			var k = $it0.next();
			var value = assetsPrefix + this.path.get(k);
			this.path.set(k,value);
		}
	}
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = true;
DefaultAssetLibrary.__super__ = lime.AssetLibrary;
DefaultAssetLibrary.prototype = $extend(lime.AssetLibrary.prototype,{
	exists: function(id,type) {
		var requestedType;
		if(type != null) requestedType = js.Boot.__cast(type , String); else requestedType = null;
		var assetType = this.type.get(id);
		if(assetType != null) {
			if(assetType == requestedType || (requestedType == "SOUND" || requestedType == "MUSIC") && (assetType == "MUSIC" || assetType == "SOUND")) return true;
			if(requestedType == "BINARY" || requestedType == null || assetType == "BINARY" && requestedType == "TEXT") return true;
		}
		return false;
	}
	,getBytes: function(id) {
		var bytes = null;
		var loader;
		var key = this.path.get(id);
		loader = lime.app.Preloader.loaders.get(key);
		if(loader == null) return null;
		var data = loader.data;
		if(typeof(data) == "string") {
			bytes = new lime.utils.ByteArray();
			bytes.writeUTFBytes(data);
		} else if(js.Boot.__instanceof(data,lime.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	}
	,getFont: function(id) {
		return js.Boot.__cast(Type.createInstance(this.className.get(id),[]) , lime.text.Font);
	}
	,getImage: function(id) {
		return lime.graphics.Image.fromImageElement((function($this) {
			var $r;
			var key = $this.path.get(id);
			$r = lime.app.Preloader.images.get(key);
			return $r;
		}(this)));
	}
	,getText: function(id) {
		var bytes = null;
		var loader;
		var key = this.path.get(id);
		loader = lime.app.Preloader.loaders.get(key);
		if(loader == null) return null;
		var data = loader.data;
		if(typeof(data) == "string") return data; else if(js.Boot.__instanceof(data,lime.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes.readUTFBytes(bytes.length);
		} else return null;
	}
	,isLocal: function(id,type) {
		var requestedType;
		if(type != null) requestedType = js.Boot.__cast(type , String); else requestedType = null;
		return true;
	}
	,__class__: DefaultAssetLibrary
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = true;
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,__class__: EReg
};
var Err = function() { };
$hxClasses["Err"] = Err;
Err.__name__ = true;
Err.log = function(errorcode,details) {
	Webscript.runscript = false;
	Webscript.errorinscript = true;
	terrylib.Gfx.resizescreen(192,120,4);
	terrylib.Text.setfont("default",1);
	if(errorcode == Err.PRE_BRACKETMISMATCH) {
		Webdebug.error("ERROR: Bracket mismatch.");
		Webdebug.error("(Missing a { or } bracket somewhere.)");
	} else if(errorcode == Err.PRE_MISSINGUPDATE) Webdebug.error("ERROR: An \"update()\" function is required."); else if(errorcode == Err.PARSER_INIT) {
		Webdebug.error("PARSER ERROR in processing script file.",Err.errorline);
		Err.outputdetails(details);
	} else if(errorcode == Err.PARSER_NEW) {
		Webdebug.error("RUNTIME ERROR (in function new())",Err.errorline);
		Err.outputdetails(details);
	} else if(errorcode == Err.RUNTIME_INIT) {
		Webdebug.error("RUNTIME ERROR (in initial run)",Err.errorline);
		Err.outputdetails(details);
	} else if(errorcode == Err.RUNTIME_UPDATE) {
		Webdebug.error("RUNTIME ERROR",Err.errorline);
		Err.outputdetails(details);
	}
	if(Err.dumpstack) {
		Err.dumpstack = false;
		Err.outputdetails([Err.javastack]);
	}
};
Err.outputdetails = function(details) {
	if(details != null) {
		if(details.length > 0) {
			var _g1 = 0;
			var _g = details.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(details[i] != null) Webdebug.error(details[i]);
			}
		}
	}
};
Err.process = function(errorhandle) {
	Err.dumpstack = false;
	var returnarray = [];
	if(js.Boot.__instanceof(errorhandle,hscript.Error)) {
		Err.errorstart = errorhandle.pmin;
		Err.errorend = errorhandle.pmax;
		haxe.Log.trace("ERRORHANDLE OBJECT :\n",{ fileName : "Err.hx", lineNumber : 71, className : "Err", methodName : "process", customParams : [errorhandle,"\nerrorhandle.e = \n{ \n0: " + errorhandle.e[0] + "\n1: " + errorhandle.e[1] + "\n2: " + errorhandle.e[2] + "\n3: " + errorhandle.e[3] + "\n}"]});
		if(errorhandle.e[0] == "EUnexpected") {
			Err.geterrorline();
			returnarray.push("Unexpected \"" + errorhandle.e[2] + "\" in line " + Err.errorline + ":");
			returnarray.push(Err.errorstr);
			return returnarray;
		} else if(errorhandle.e[0] == "EInvalidAccess") {
			Err.geterrorline();
			returnarray.push("Invalid access of \"" + errorhandle.e[2] + "\" in line " + Err.errorline + ":");
			returnarray.push(Err.errorstr);
			return returnarray;
		} else if(errorhandle.e[0] == "EInvalidIterator") {
			Err.geterrorline(false);
			returnarray.push("Invalid iterator \"" + errorhandle.e[2] + "\" in line " + Err.errorline + ":");
			returnarray.push(Err.errorstr);
			return returnarray;
		} else if(errorhandle.e[0] == "EInvalidChar") {
			Err.geterrorline(false);
			returnarray.push("Invalid character \"" + String.fromCharCode(errorhandle.e[2]) + "\" in line " + Err.errorline + ":");
			returnarray.push(Err.errorstr);
			return returnarray;
		} else if(errorhandle.e[0] == "EUnterminatedComment") {
			Err.geterrorline(false);
			returnarray.push("Whoops, you forgot to close a comment in line " + Err.errorline + ":");
			returnarray.push(Err.errorstr);
			return returnarray;
		} else if(errorhandle.e[0] == "EUnterminatedString") {
			Err.geterrorline(false);
			returnarray.push("Unterminated string in line " + Err.errorline + ":");
			returnarray.push(Err.errorstr);
			return returnarray;
		} else if(errorhandle.e[0] == "EUnknownVariable") {
			Err.geterrorline();
			returnarray.push("Unknown variable \"" + errorhandle.e[2] + "\" in line " + Err.errorline + ":");
			returnarray.push(Err.errorstr);
			return returnarray;
		} else if(errorhandle.e[0] == "EInvalidOp") {
			Err.geterrorline();
			returnarray.push("Invalid operator \"" + errorhandle.e[2] + "\" in line " + Err.errorline + ":");
			returnarray.push(Err.errorstr);
			return returnarray;
		} else {
			haxe.Log.trace("ERRORHANDLE OBJECT :\n",{ fileName : "Err.hx", lineNumber : 114, className : "Err", methodName : "process", customParams : [errorhandle,"\nerrorhandle.e = \n{ \n0: " + errorhandle.e[0] + "\n1: " + errorhandle.e[1] + "\n2: " + errorhandle.e[2] + "\n3: " + errorhandle.e[3] + "\n}"]});
			haxe.Log.trace(errorhandle.e,{ fileName : "Err.hx", lineNumber : 115, className : "Err", methodName : "process"});
			Err.geterrorline();
			returnarray.push("Unknown error in line " + Err.errorline + ":");
			returnarray.push(Err.errorstr);
			return returnarray;
		}
	}
	Err.errorline = Webdebug.getlinenum(Webscript.interpreter.curExpr.pmin);
	returnarray.push("Unknown error type in line " + Err.errorline + ":");
	returnarray.push("Error name: " + Std.string(errorhandle.name));
	returnarray.push("Javascript Stack:");
	Err.dumpstack = true;
	Err.javastack = errorhandle.stack;
	return returnarray;
};
Err.geterrorline = function(userange) {
	if(userange == null) userange = true;
	var charcount = 0;
	var numnewlines = 0;
	var linestartindex = 0;
	var lineendindex = 0;
	var currentchar = "";
	Err.errorline = -1;
	Err.charpos = 0;
	var i = 0;
	while(i < Webscript.myscript.length) {
		currentchar = HxOverrides.substr(Webscript.myscript,i,1);
		if(currentchar == "\n") {
			if(Err.errorline > -1) {
				lineendindex = i - 1;
				Err.charpos = Err.errorstart - linestartindex;
				var finalstring = Webscript.myscript.substring(linestartindex,lineendindex);
				while(S.left(finalstring,1) == " " && finalstring != "") {
					linestartindex++;
					finalstring = Webscript.myscript.substring(linestartindex,lineendindex);
				}
				if(userange) Err.errorstr = "\"" + finalstring + "\", characters " + (Err.errorstart - linestartindex) + "-" + (Err.errorend - linestartindex + 1); else Err.errorstr = "\"" + finalstring + "\", from character " + (Err.errorstart - linestartindex);
				break;
			} else linestartindex = i + 1;
			numnewlines++;
		}
		if(i == Err.errorstart) Err.errorline = numnewlines + 1;
		i++;
	}
};
Err.errorstr = null;
Err.errorline = null;
Err.errorstart = null;
Err.errorend = null;
Err.charpos = null;
Err.javastack = null;
var Game = function() { };
$hxClasses["Game"] = Game;
Game.__name__ = true;
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var IntIterator = function(min,max) {
	this.min = min;
	this.max = max;
};
$hxClasses["IntIterator"] = IntIterator;
IntIterator.__name__ = true;
IntIterator.prototype = {
	hasNext: function() {
		return this.min < this.max;
	}
	,next: function() {
		return this.min++;
	}
	,__class__: IntIterator
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = true;
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = $iterator(it)();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = $iterator(it)();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = true;
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,__class__: List
};
var Main = function() {
	Webscript.init();
};
$hxClasses["Main"] = Main;
Main.__name__ = true;
Main.prototype = {
	update: function() {
		Webscript.update();
	}
	,__class__: Main
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = true;
Math.__name__ = true;
var NMEPreloader = function() {
	openfl.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 7;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 2;
	this.outline = new openfl.display.Sprite();
	this.outline.get_graphics().beginFill(color,0.07);
	this.outline.get_graphics().drawRect(0,0,width,height);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new openfl.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = true;
NMEPreloader.__super__ = openfl.display.Sprite;
NMEPreloader.prototype = $extend(openfl.display.Sprite.prototype,{
	getBackgroundColor: function() {
		return 0;
	}
	,getHeight: function() {
		var height = 480;
		if(height > 0) return height; else return openfl.Lib.current.stage.stageHeight;
	}
	,getWidth: function() {
		var width = 768;
		if(width > 0) return width; else return openfl.Lib.current.stage.stageWidth;
	}
	,onInit: function() {
	}
	,onLoaded: function() {
		this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
	}
	,onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded = 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,__class__: NMEPreloader
});
var Preloader = function() {
	NMEPreloader.call(this);
	this.screenwidth = 192;
	this.screenheight = 120;
	this.stagewidth = 768;
	this.stageheight = 480;
	this.backcol = this.RGB(0,0,0);
	this.frontcol = this.RGB(128,128,128);
	this.loadercol = this.RGB(196,196,196);
	this.loadingbarwidth = 125;
	this.ct = new openfl.geom.ColorTransform(0,0,0,1,255,255,255,1);
	this.temprect = new openfl.geom.Rectangle();
	this.tl = new openfl.geom.Point(0,0);
	this.tpoint = new openfl.geom.Point(0,0);
	this.glyphletters = new haxe.ds.StringMap();
	this.glyphletters.set("A",["4","111","101","111","101","101"]);
	this.glyphletters.set("B",["4","111","101","110","101","111"]);
	this.glyphletters.set("C",["4","111","100","100","100","111"]);
	this.glyphletters.set("D",["4","110","101","101","101","110"]);
	this.glyphletters.set("E",["4","111","100","110","100","111"]);
	this.glyphletters.set("F",["4","111","100","110","100","100"]);
	this.glyphletters.set("G",["4","111","100","101","101","111"]);
	this.glyphletters.set("H",["4","101","101","111","101","101"]);
	this.glyphletters.set("I",["2","1","1","1","1","1"]);
	this.glyphletters.set("J",["3","01","01","01","01","11"]);
	this.glyphletters.set("K",["4","101","101","110","101","101"]);
	this.glyphletters.set("L",["4","100","100","100","100","111"]);
	this.glyphletters.set("M",["6","10001","11011","10101","10001","10001"]);
	this.glyphletters.set("N",["5","1001","1101","1111","1011","1001"]);
	this.glyphletters.set("O",["4","111","101","101","101","111"]);
	this.glyphletters.set("P",["4","111","101","111","100","100"]);
	this.glyphletters.set("Q",["4","111","101","101","101","111","001"]);
	this.glyphletters.set("R",["4","111","101","110","101","101"]);
	this.glyphletters.set("S",["4","111","100","111","001","111"]);
	this.glyphletters.set("T",["4","111","010","010","010","010"]);
	this.glyphletters.set("U",["4","101","101","101","101","111"]);
	this.glyphletters.set("V",["4","101","101","101","101","010"]);
	this.glyphletters.set("W",["6","10001","10001","10101","11011","10001"]);
	this.glyphletters.set("X",["4","101","101","010","101","101"]);
	this.glyphletters.set("Y",["4","101","101","111","010","010"]);
	this.glyphletters.set("Z",["4","111","001","010","100","111"]);
	this.glyphletters.set(" ",["4"]);
	this.backbuffer = new openfl.display.BitmapData(this.screenwidth,this.screenheight,false,0);
	this.screenbuffer = new openfl.display.BitmapData(this.screenwidth,this.screenheight,false,0);
	this.screen = new openfl.display.Bitmap(this.screenbuffer);
	this.screen.set_width(this.stagewidth);
	this.screen.set_height(this.stageheight);
	this.addChild(this.screen);
	this.startgame = false;
};
$hxClasses["Preloader"] = Preloader;
Preloader.__name__ = true;
Preloader.__super__ = NMEPreloader;
Preloader.prototype = $extend(NMEPreloader.prototype,{
	RGB: function(red,green,blue) {
		return blue | green << 8 | red << 16;
	}
	,onLoaded: function() {
		if(this.contains(this.screen)) this.removeChild(this.screen);
		this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
	}
	,fillrect: function(x,y,w,h,col) {
		this.temprect.x = x;
		this.temprect.y = y;
		this.temprect.width = w;
		this.temprect.height = h;
		this.backbuffer.fillRect(this.temprect,col);
	}
	,pset: function(x,y) {
		this.temprect.x = this.psetx + x;
		this.temprect.y = this.psety + y;
		this.temprect.width = 1;
		this.temprect.height = 1;
		this.backbuffer.fillRect(this.temprect,16777215);
	}
	,glyphprint: function(_x,_y,s) {
		this.psetx = _x;
		this.psety = _y;
		var _g1 = 0;
		var _g = s.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.drawgylph(HxOverrides.substr(s,i,1).toUpperCase());
		}
	}
	,drawgylph: function(letter) {
		if(this.glyphletters.exists(letter)) {
			var sarray = this.glyphletters.get(letter);
			var _g1 = 1;
			var _g = sarray.length;
			while(_g1 < _g) {
				var j = _g1++;
				var _g3 = 0;
				var _g2 = sarray[j].length;
				while(_g3 < _g2) {
					var i = _g3++;
					if(HxOverrides.substr(sarray[j],i,1) == "1") {
						this.pset(i,j * 2);
						this.pset(i,j * 2 + 1);
					}
				}
			}
			this.psetx += Std.parseInt(sarray[0]);
		}
	}
	,onUpdate: function(bytesLoaded,bytesTotal) {
		var p = bytesLoaded / bytesTotal;
		if(p >= 1) this.startgame = true;
		this.backbuffer.fillRect(this.backbuffer.rect,this.backcol);
		this.fillrect(this.screenwidth / 2 - this.loadingbarwidth / 2 - 2 | 0,(this.screenheight / 2 - 13 | 0) - 10,this.loadingbarwidth + 4,32,this.frontcol);
		this.fillrect(this.screenwidth / 2 - this.loadingbarwidth / 2 | 0,(this.screenheight / 2 - 11 | 0) - 10,this.loadingbarwidth,28,this.backcol);
		this.fillrect((this.screenwidth / 2 - this.loadingbarwidth / 2 | 0) + 1,(this.screenheight / 2 - 11 | 0) + 1 - 10,(p * this.loadingbarwidth | 0) - 2,26,this.loadercol);
		this.glyphprint((this.screenwidth / 2 | 0) - 28,this.screenheight / 2 + 12 | 0,"LOADING TERRYLIB");
		this.screenbuffer.lock();
		this.screenbuffer.copyPixels(this.backbuffer,this.backbuffer.rect,this.tl,null,null,false);
		this.screenbuffer.unlock();
		this.backbuffer.lock();
		this.backbuffer.fillRect(this.backbuffer.rect,0);
		this.backbuffer.unlock();
		if(this.startgame) this.onLoaded();
	}
	,__class__: Preloader
});
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = true;
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
};
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compare = function(a,b) {
	if(a == b) return 0; else if(a > b) return 1; else return -1;
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
Reflect.isEnumValue = function(v) {
	return v != null && v.__enum__ != null;
};
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
};
var S = function() { };
$hxClasses["S"] = S;
S.__name__ = true;
S.mid = function(currentstring,start,length) {
	if(length == null) length = 1;
	if(start == null) start = 0;
	if(start < 0) return "";
	return HxOverrides.substr(currentstring,start,length);
};
S.left = function(currentstring,length) {
	if(length == null) length = 1;
	return HxOverrides.substr(currentstring,0,length);
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = true;
StringBuf.prototype = {
	add: function(x) {
		this.b += Std.string(x);
	}
	,addSub: function(s,pos,len) {
		if(len == null) this.b += HxOverrides.substr(s,pos,null); else this.b += HxOverrides.substr(s,pos,len);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = true;
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = true;
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
};
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	HxOverrides.remove(a,"__name__");
	HxOverrides.remove(a,"__interfaces__");
	HxOverrides.remove(a,"__properties__");
	HxOverrides.remove(a,"__super__");
	HxOverrides.remove(a,"prototype");
	return a;
};
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2;
		var _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e1 ) {
		return false;
	}
	return true;
};
var Webdebug = function() { };
$hxClasses["Webdebug"] = Webdebug;
Webdebug.__name__ = true;
Webdebug.getlinenum = function(c) {
	var numnewlines = 0;
	var currentchar = "";
	var i = 0;
	while(i < Webscript.myscript.length) {
		currentchar = HxOverrides.substr(Webscript.myscript,i,1);
		if(currentchar == "\n") numnewlines++;
		if(i == c) return numnewlines + 1;
		i++;
	}
	return 0;
};
Webdebug.error = function(msg,linenum) {
	openfl.external.ExternalInterface.call("logError",msg,linenum,true,Err.charpos);
};
var Webfont = function() { };
$hxClasses["Webfont"] = Webfont;
Webfont.__name__ = true;
var Webmusic = function() { };
$hxClasses["Webmusic"] = Webmusic;
Webmusic.__name__ = true;
var Webscript = function() { };
$hxClasses["Webscript"] = Webscript;
Webscript.__name__ = true;
Webscript.myscript = null;
Webscript.loadedscript = null;
Webscript.parsedscript = null;
Webscript.parser = null;
Webscript.interpreter = null;
Webscript.scriptloaded = null;
Webscript.runscript = null;
Webscript.errorinscript = null;
Webscript.pausescript = null;
Webscript.initfunction = null;
Webscript.updatefunction = null;
Webscript.title = null;
Webscript.homepage = null;
Webscript.background_color = null;
Webscript.foreground_color = null;
Webscript.init = function() {
	Webscript.scriptloaded = false;
	Webscript.runscript = false;
	Webscript.pausescript = false;
	Webscript.errorinscript = false;
	terrylib.Text.setfont(Webfont.ZERO4B11,1);
	terrylib.Text.setfont(Webfont.APPLE,1);
	terrylib.Text.setfont(Webfont.BOLD,1);
	terrylib.Text.setfont(Webfont.C64,1);
	terrylib.Text.setfont(Webfont.CASUAL,1);
	terrylib.Text.setfont(Webfont.COMIC,1);
	terrylib.Text.setfont(Webfont.CRYPT,1);
	terrylib.Text.setfont(Webfont.DOS,1);
	terrylib.Text.setfont(Webfont.GANON,1);
	terrylib.Text.setfont(Webfont.HANDY,1);
	terrylib.Text.setfont(Webfont.NOKIA,1);
	terrylib.Text.setfont(Webfont.OLDENGLISH,1);
	terrylib.Text.setfont(Webfont.PIXEL,1);
	terrylib.Text.setfont(Webfont.PRESSSTART,1);
	terrylib.Text.setfont(Webfont.RETROFUTURE,1);
	terrylib.Text.setfont(Webfont.ROMAN,1);
	terrylib.Text.setfont(Webfont.SPECIAL,1);
	terrylib.Text.setfont(Webfont.VISITOR,1);
	terrylib.Text.setfont(Webfont.YOSTER,1);
	terrylib.Text.setfont(Webfont.DEFAULT,1);
	try {
		openfl.external.ExternalInterface.addCallback("loadscript",Webscript.loadscript);
	} catch( e ) {
	}
};
Webscript.update = function() {
	if(Webscript.errorinscript) {
		terrylib.Text.setfont("default",1);
		terrylib.Gfx.clearscreen(terrylib.Gfx.RGB(32,0,0));
		terrylib.Text.display(terrylib.Text.CENTER,terrylib.Text.CENTER,"ERROR! ERROR! ERROR!",terrylib.Col.RED);
	} else if(Webscript.scriptloaded) {
		if(Webscript.runscript && !Webscript.pausescript) try {
			Webscript.updatefunction();
		} catch( e ) {
			Err.log(Err.RUNTIME_UPDATE,Err.process(e));
		}
	} else {
		Webscript.counter += 10;
		terrylib.Gfx.clearscreen(terrylib.Col.BLUE);
		terrylib.Gfx.fillbox(4,4,terrylib.Gfx.screenwidth - 8,terrylib.Gfx.screenheight - 8,terrylib.Col.NIGHTBLUE);
		terrylib.Text.display(terrylib.Gfx.screenwidth - 6,terrylib.Gfx.screenheight - terrylib.Text.height() - 4,"terrylib alpha v0.1",terrylib.Col.WHITE,{ align : terrylib.Text.RIGHT});
		var msg = "WAITING FOR SCRIPTFILE...";
		var startpos = terrylib.Gfx.screenwidthmid - terrylib.Text.len(msg) / 2;
		var currentpos = 0;
		var _g1 = 0;
		var _g = msg.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(S.mid(msg,i,1) != "_") terrylib.Text.display(startpos + currentpos,terrylib.Gfx.screenheightmid - 10 + Math.sin((i * 5 + Webscript.counter) % 360 * Math.PI * 2 / 360) * 5,S.mid(msg,i,1),terrylib.Col.WHITE);
			currentpos += terrylib.Text.len(S.mid(msg,i,1));
		}
	}
	if(terrylib.Gfx.showfps) {
		Webscript.oldfont = terrylib.Text.currentfont;
		Webscript.oldfontsize = terrylib.Text.currentsize;
		terrylib.Text.setfont("pixel",1);
		terrylib.Text.display(terrylib.Gfx.screenwidth - 4,1,"FPS: " + terrylib.Gfx.fps(),terrylib.Col.YELLOW,{ align : terrylib.Text.RIGHT});
		terrylib.Text.setfont(Webscript.oldfont,Webscript.oldfontsize);
	}
};
Webscript.loadscript = function(script) {
	Webscript.myscript = script;
	Webscript.scriptfound();
};
Webscript.scriptfound = function() {
	Webscript.scriptloaded = true;
	Webscript.errorinscript = false;
	Webscript.pausescript = false;
	Webscript.parser = new hscript.Parser();
	Webscript.parser.allowTypes = true;
	Webscript.interpreter = new hscript.Interp();
	Webscript.loadedscript = Webscript.myscript.split("\n");
	Webscript.interpreter.variables.set("Math",Math);
	Webscript.interpreter.variables.set("Col",terrylib.Col);
	Webscript.interpreter.variables.set("Convert",terrylib.Convert);
	Webscript.interpreter.variables.set("Debug",Webdebug);
	Webscript.interpreter.variables.set("Gfx",terrylib.Gfx);
	Webscript.interpreter.variables.set("Input",terrylib.Input);
	Webscript.interpreter.variables.set("Key",terrylib.Key);
	Webscript.interpreter.variables.set("Game",Game);
	Webscript.interpreter.variables.set("Mouse",terrylib.Mouse);
	Webscript.interpreter.variables.set("Music",Webmusic);
	Webscript.interpreter.variables.set("Text",terrylib.Text);
	Webscript.interpreter.variables.set("Font",Webfont);
	Webscript.interpreter.variables.set("Std",Std);
	Webscript.interpreter.variables.set("Random",terrylib.Random);
	Webscript.interpreter.variables.set("String",String);
	Webscript.runscript = true;
	try {
		Webscript.parsedscript = Webscript.parser.parseString(Webscript.myscript);
	} catch( e ) {
		Err.log(Err.PARSER_INIT,Err.process(e));
	}
	if(Webscript.runscript) {
		try {
			Webscript.interpreter.execute(Webscript.parsedscript);
		} catch( e1 ) {
			Err.log(Err.RUNTIME_INIT,Err.process(e1));
		}
		Webscript.title = Webscript.interpreter.variables.get("title");
		if(Webscript.title == null) Webscript.title = "Untitled";
		Webscript.homepage = Webscript.interpreter.variables.get("homepage");
		if(Webscript.homepage == null) Webscript.homepage = "";
		var bg_col = Webscript.interpreter.variables.get("background_color");
		if(bg_col == null) Webscript.background_color = terrylib.Col.BLACK; else Webscript.background_color = terrylib.Convert.toint(bg_col);
		var fg_col = Webscript.interpreter.variables.get("foreground_color");
		if(fg_col == null) Webscript.foreground_color = terrylib.Col.WHITE; else Webscript.foreground_color = terrylib.Convert.toint(bg_col);
		Webscript.initfunction = Webscript.interpreter.variables.get("new");
		Webscript.updatefunction = Webscript.interpreter.variables.get("update");
		terrylib.Text.setfont("default",1);
		if(Webscript.initfunction != null) try {
			Webscript.initfunction();
		} catch( e2 ) {
			Err.log(Err.PARSER_NEW,Err.process(e2));
		}
		if(Webscript.updatefunction == null) Webscript.pausescript = true;
	}
};
var XmlType = $hxClasses["XmlType"] = { __ename__ : true, __constructs__ : [] };
var Xml = function() {
};
$hxClasses["Xml"] = Xml;
Xml.__name__ = true;
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.ProcessingInstruction = null;
Xml.Document = null;
Xml.parse = function(str) {
	return haxe.xml.Parser.parse(str);
};
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new haxe.ds.StringMap();
	r.set_nodeName(name);
	return r;
};
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.set_nodeValue(data);
	return r;
};
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.set_nodeValue(data);
	return r;
};
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.set_nodeValue(data);
	return r;
};
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.set_nodeValue(data);
	return r;
};
Xml.createProcessingInstruction = function(data) {
	var r = new Xml();
	r.nodeType = Xml.ProcessingInstruction;
	r.set_nodeValue(data);
	return r;
};
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
};
Xml.prototype = {
	get_nodeName: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	}
	,set_nodeName: function(n) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName = n;
	}
	,set_nodeValue: function(v) {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue = v;
	}
	,get: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.get(att);
	}
	,set: function(att,value) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.set(att,value);
	}
	,exists: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.exists(att);
	}
	,elementsNamed: function(name) {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				if(n.nodeType == Xml.Element && n._nodeName == name) break;
				k++;
			}
			this.cur = k;
			return k < l;
		}, next : function() {
			var k1 = this.cur;
			var l1 = this.x.length;
			while(k1 < l1) {
				var n1 = this.x[k1];
				k1++;
				if(n1.nodeType == Xml.Element && n1._nodeName == name) {
					this.cur = k1;
					return n1;
				}
			}
			return null;
		}};
	}
	,firstElement: function() {
		if(this._children == null) throw "bad nodetype";
		var cur = 0;
		var l = this._children.length;
		while(cur < l) {
			var n = this._children[cur];
			if(n.nodeType == Xml.Element) return n;
			cur++;
		}
		return null;
	}
	,addChild: function(x) {
		if(this._children == null) throw "bad nodetype";
		if(x._parent != null) HxOverrides.remove(x._parent._children,x);
		x._parent = this;
		this._children.push(x);
	}
	,__class__: Xml
};
var haxe = {};
haxe.Log = function() { };
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = true;
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
};
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = true;
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
haxe.Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
};
haxe.Utf8 = function(size) {
	this.__b = "";
};
$hxClasses["haxe.Utf8"] = haxe.Utf8;
haxe.Utf8.__name__ = true;
haxe.Utf8.prototype = {
	__class__: haxe.Utf8
};
haxe.ds = {};
haxe.ds.BalancedTree = function() {
};
$hxClasses["haxe.ds.BalancedTree"] = haxe.ds.BalancedTree;
haxe.ds.BalancedTree.__name__ = true;
haxe.ds.BalancedTree.prototype = {
	set: function(key,value) {
		this.root = this.setLoop(key,value,this.root);
	}
	,get: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) return node.value;
			if(c < 0) node = node.left; else node = node.right;
		}
		return null;
	}
	,setLoop: function(k,v,node) {
		if(node == null) return new haxe.ds.TreeNode(null,k,v,null);
		var c = this.compare(k,node.key);
		if(c == 0) return new haxe.ds.TreeNode(node.left,k,v,node.right,node == null?0:node._height); else if(c < 0) {
			var nl = this.setLoop(k,v,node.left);
			return this.balance(nl,node.key,node.value,node.right);
		} else {
			var nr = this.setLoop(k,v,node.right);
			return this.balance(node.left,node.key,node.value,nr);
		}
	}
	,balance: function(l,k,v,r) {
		var hl;
		if(l == null) hl = 0; else hl = l._height;
		var hr;
		if(r == null) hr = 0; else hr = r._height;
		if(hl > hr + 2) {
			if((function($this) {
				var $r;
				var _this = l.left;
				$r = _this == null?0:_this._height;
				return $r;
			}(this)) >= (function($this) {
				var $r;
				var _this1 = l.right;
				$r = _this1 == null?0:_this1._height;
				return $r;
			}(this))) return new haxe.ds.TreeNode(l.left,l.key,l.value,new haxe.ds.TreeNode(l.right,k,v,r)); else return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l.left,l.key,l.value,l.right.left),l.right.key,l.right.value,new haxe.ds.TreeNode(l.right.right,k,v,r));
		} else if(hr > hl + 2) {
			if((function($this) {
				var $r;
				var _this2 = r.right;
				$r = _this2 == null?0:_this2._height;
				return $r;
			}(this)) > (function($this) {
				var $r;
				var _this3 = r.left;
				$r = _this3 == null?0:_this3._height;
				return $r;
			}(this))) return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l,k,v,r.left),r.key,r.value,r.right); else return new haxe.ds.TreeNode(new haxe.ds.TreeNode(l,k,v,r.left.left),r.left.key,r.left.value,new haxe.ds.TreeNode(r.left.right,r.key,r.value,r.right));
		} else return new haxe.ds.TreeNode(l,k,v,r,(hl > hr?hl:hr) + 1);
	}
	,compare: function(k1,k2) {
		return Reflect.compare(k1,k2);
	}
	,__class__: haxe.ds.BalancedTree
};
haxe.ds.TreeNode = function(l,k,v,r,h) {
	if(h == null) h = -1;
	this.left = l;
	this.key = k;
	this.value = v;
	this.right = r;
	if(h == -1) this._height = ((function($this) {
		var $r;
		var _this = $this.left;
		$r = _this == null?0:_this._height;
		return $r;
	}(this)) > (function($this) {
		var $r;
		var _this1 = $this.right;
		$r = _this1 == null?0:_this1._height;
		return $r;
	}(this))?(function($this) {
		var $r;
		var _this2 = $this.left;
		$r = _this2 == null?0:_this2._height;
		return $r;
	}(this)):(function($this) {
		var $r;
		var _this3 = $this.right;
		$r = _this3 == null?0:_this3._height;
		return $r;
	}(this))) + 1; else this._height = h;
};
$hxClasses["haxe.ds.TreeNode"] = haxe.ds.TreeNode;
haxe.ds.TreeNode.__name__ = true;
haxe.ds.TreeNode.prototype = {
	__class__: haxe.ds.TreeNode
};
haxe.ds.EnumValueMap = function() {
	haxe.ds.BalancedTree.call(this);
};
$hxClasses["haxe.ds.EnumValueMap"] = haxe.ds.EnumValueMap;
haxe.ds.EnumValueMap.__name__ = true;
haxe.ds.EnumValueMap.__interfaces__ = [IMap];
haxe.ds.EnumValueMap.__super__ = haxe.ds.BalancedTree;
haxe.ds.EnumValueMap.prototype = $extend(haxe.ds.BalancedTree.prototype,{
	compare: function(k1,k2) {
		var d = k1[1] - k2[1];
		if(d != 0) return d;
		var p1 = k1.slice(2);
		var p2 = k2.slice(2);
		if(p1.length == 0 && p2.length == 0) return 0;
		return this.compareArgs(p1,p2);
	}
	,compareArgs: function(a1,a2) {
		var ld = a1.length - a2.length;
		if(ld != 0) return ld;
		var _g1 = 0;
		var _g = a1.length;
		while(_g1 < _g) {
			var i = _g1++;
			var d = this.compareArg(a1[i],a2[i]);
			if(d != 0) return d;
		}
		return 0;
	}
	,compareArg: function(v1,v2) {
		if(Reflect.isEnumValue(v1) && Reflect.isEnumValue(v2)) return this.compare(v1,v2); else if((v1 instanceof Array) && v1.__enum__ == null && ((v2 instanceof Array) && v2.__enum__ == null)) return this.compareArgs(v1,v2); else return Reflect.compare(v1,v2);
	}
	,__class__: haxe.ds.EnumValueMap
});
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = true;
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,__class__: haxe.ds.IntMap
};
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = true;
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe.ds.ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,__class__: haxe.ds.ObjectMap
};
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = true;
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,__class__: haxe.ds.StringMap
};
haxe.ds._Vector = {};
haxe.ds._Vector.Vector_Impl_ = function() { };
$hxClasses["haxe.ds._Vector.Vector_Impl_"] = haxe.ds._Vector.Vector_Impl_;
haxe.ds._Vector.Vector_Impl_.__name__ = true;
haxe.ds._Vector.Vector_Impl_.blit = function(src,srcPos,dest,destPos,len) {
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		dest[destPos + i] = src[srcPos + i];
	}
};
haxe.io = {};
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = true;
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
};
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var i = 0;
	while(i < s.length) {
		var c = StringTools.fastCodeAt(s,i++);
		if(55296 <= c && c <= 56319) c = c - 55232 << 10 | StringTools.fastCodeAt(s,i++) & 1023;
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
};
haxe.io.Bytes.prototype = {
	getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,__class__: haxe.io.Bytes
};
haxe.io.BytesBuffer = function() {
	this.b = new Array();
};
$hxClasses["haxe.io.BytesBuffer"] = haxe.io.BytesBuffer;
haxe.io.BytesBuffer.__name__ = true;
haxe.io.BytesBuffer.prototype = {
	getBytes: function() {
		var bytes = new haxe.io.Bytes(this.b.length,this.b);
		this.b = null;
		return bytes;
	}
	,__class__: haxe.io.BytesBuffer
};
haxe.io.Input = function() { };
$hxClasses["haxe.io.Input"] = haxe.io.Input;
haxe.io.Input.__name__ = true;
haxe.io.Input.prototype = {
	readByte: function() {
		throw "Not implemented";
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw haxe.io.Error.OutsideBounds;
		while(k > 0) {
			b[pos] = this.readByte();
			pos++;
			k--;
		}
		return len;
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			pos += k;
			len -= k;
		}
	}
	,readString: function(len) {
		var b = haxe.io.Bytes.alloc(len);
		this.readFullBytes(b,0,len);
		return b.toString();
	}
	,__class__: haxe.io.Input
};
haxe.io.BytesInput = function(b,pos,len) {
	if(pos == null) pos = 0;
	if(len == null) len = b.length - pos;
	if(pos < 0 || len < 0 || pos + len > b.length) throw haxe.io.Error.OutsideBounds;
	this.b = b.b;
	this.pos = pos;
	this.len = len;
	this.totlen = len;
};
$hxClasses["haxe.io.BytesInput"] = haxe.io.BytesInput;
haxe.io.BytesInput.__name__ = true;
haxe.io.BytesInput.__super__ = haxe.io.Input;
haxe.io.BytesInput.prototype = $extend(haxe.io.Input.prototype,{
	readByte: function() {
		if(this.len == 0) throw new haxe.io.Eof();
		this.len--;
		return this.b[this.pos++];
	}
	,readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.length) throw haxe.io.Error.OutsideBounds;
		if(this.len == 0 && len > 0) throw new haxe.io.Eof();
		if(this.len < len) len = this.len;
		var b1 = this.b;
		var b2 = buf.b;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
	,__class__: haxe.io.BytesInput
});
haxe.io.Output = function() { };
$hxClasses["haxe.io.Output"] = haxe.io.Output;
haxe.io.Output.__name__ = true;
haxe.io.BytesOutput = function() {
	this.b = new haxe.io.BytesBuffer();
};
$hxClasses["haxe.io.BytesOutput"] = haxe.io.BytesOutput;
haxe.io.BytesOutput.__name__ = true;
haxe.io.BytesOutput.__super__ = haxe.io.Output;
haxe.io.BytesOutput.prototype = $extend(haxe.io.Output.prototype,{
	writeByte: function(c) {
		this.b.b.push(c);
	}
	,getBytes: function() {
		return this.b.getBytes();
	}
	,__class__: haxe.io.BytesOutput
});
haxe.io.Eof = function() {
};
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = true;
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
};
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; };
haxe.io.Path = function(path) {
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else this.dir = null;
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
$hxClasses["haxe.io.Path"] = haxe.io.Path;
haxe.io.Path.__name__ = true;
haxe.io.Path.withoutExtension = function(path) {
	var s = new haxe.io.Path(path);
	s.ext = null;
	return s.toString();
};
haxe.io.Path.prototype = {
	toString: function() {
		return (this.dir == null?"":this.dir + (this.backslash?"\\":"/")) + this.file + (this.ext == null?"":"." + this.ext);
	}
	,__class__: haxe.io.Path
};
haxe.io.StringInput = function(s) {
	haxe.io.BytesInput.call(this,haxe.io.Bytes.ofString(s));
};
$hxClasses["haxe.io.StringInput"] = haxe.io.StringInput;
haxe.io.StringInput.__name__ = true;
haxe.io.StringInput.__super__ = haxe.io.BytesInput;
haxe.io.StringInput.prototype = $extend(haxe.io.BytesInput.prototype,{
	__class__: haxe.io.StringInput
});
haxe.xml = {};
haxe.xml._Fast = {};
haxe.xml._Fast.NodeAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.NodeAccess"] = haxe.xml._Fast.NodeAccess;
haxe.xml._Fast.NodeAccess.__name__ = true;
haxe.xml._Fast.NodeAccess.prototype = {
	resolve: function(name) {
		var x = this.__x.elementsNamed(name).next();
		if(x == null) {
			var xname;
			if(this.__x.nodeType == Xml.Document) xname = "Document"; else xname = this.__x.get_nodeName();
			throw xname + " is missing element " + name;
		}
		return new haxe.xml.Fast(x);
	}
	,__class__: haxe.xml._Fast.NodeAccess
};
haxe.xml._Fast.AttribAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.AttribAccess"] = haxe.xml._Fast.AttribAccess;
haxe.xml._Fast.AttribAccess.__name__ = true;
haxe.xml._Fast.AttribAccess.prototype = {
	resolve: function(name) {
		if(this.__x.nodeType == Xml.Document) throw "Cannot access document attribute " + name;
		var v = this.__x.get(name);
		if(v == null) throw this.__x.get_nodeName() + " is missing attribute " + name;
		return v;
	}
	,__class__: haxe.xml._Fast.AttribAccess
};
haxe.xml._Fast.HasAttribAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.HasAttribAccess"] = haxe.xml._Fast.HasAttribAccess;
haxe.xml._Fast.HasAttribAccess.__name__ = true;
haxe.xml._Fast.HasAttribAccess.prototype = {
	resolve: function(name) {
		if(this.__x.nodeType == Xml.Document) throw "Cannot access document attribute " + name;
		return this.__x.exists(name);
	}
	,__class__: haxe.xml._Fast.HasAttribAccess
};
haxe.xml._Fast.HasNodeAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.HasNodeAccess"] = haxe.xml._Fast.HasNodeAccess;
haxe.xml._Fast.HasNodeAccess.__name__ = true;
haxe.xml._Fast.HasNodeAccess.prototype = {
	__class__: haxe.xml._Fast.HasNodeAccess
};
haxe.xml._Fast.NodeListAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.NodeListAccess"] = haxe.xml._Fast.NodeListAccess;
haxe.xml._Fast.NodeListAccess.__name__ = true;
haxe.xml._Fast.NodeListAccess.prototype = {
	resolve: function(name) {
		var l = new List();
		var $it0 = this.__x.elementsNamed(name);
		while( $it0.hasNext() ) {
			var x = $it0.next();
			l.add(new haxe.xml.Fast(x));
		}
		return l;
	}
	,__class__: haxe.xml._Fast.NodeListAccess
};
haxe.xml.Fast = function(x) {
	if(x.nodeType != Xml.Document && x.nodeType != Xml.Element) throw "Invalid nodeType " + Std.string(x.nodeType);
	this.x = x;
	this.node = new haxe.xml._Fast.NodeAccess(x);
	this.nodes = new haxe.xml._Fast.NodeListAccess(x);
	this.att = new haxe.xml._Fast.AttribAccess(x);
	this.has = new haxe.xml._Fast.HasAttribAccess(x);
	this.hasNode = new haxe.xml._Fast.HasNodeAccess(x);
};
$hxClasses["haxe.xml.Fast"] = haxe.xml.Fast;
haxe.xml.Fast.__name__ = true;
haxe.xml.Fast.prototype = {
	__class__: haxe.xml.Fast
};
haxe.xml.Parser = function() { };
$hxClasses["haxe.xml.Parser"] = haxe.xml.Parser;
haxe.xml.Parser.__name__ = true;
haxe.xml.Parser.parse = function(str) {
	var doc = Xml.createDocument();
	haxe.xml.Parser.doParse(str,0,doc);
	return doc;
};
haxe.xml.Parser.doParse = function(str,p,parent) {
	if(p == null) p = 0;
	var xml = null;
	var state = 1;
	var next = 1;
	var aname = null;
	var start = 0;
	var nsubs = 0;
	var nbrackets = 0;
	var c = str.charCodeAt(p);
	var buf = new StringBuf();
	while(!(c != c)) {
		switch(state) {
		case 0:
			switch(c) {
			case 10:case 13:case 9:case 32:
				break;
			default:
				state = next;
				continue;
			}
			break;
		case 1:
			switch(c) {
			case 60:
				state = 0;
				next = 2;
				break;
			default:
				start = p;
				state = 13;
				continue;
			}
			break;
		case 13:
			if(c == 60) {
				var child = Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start));
				buf = new StringBuf();
				parent.addChild(child);
				nsubs++;
				state = 0;
				next = 2;
			} else if(c == 38) {
				buf.addSub(str,start,p - start);
				state = 18;
				next = 13;
				start = p + 1;
			}
			break;
		case 17:
			if(c == 93 && str.charCodeAt(p + 1) == 93 && str.charCodeAt(p + 2) == 62) {
				var child1 = Xml.createCData(HxOverrides.substr(str,start,p - start));
				parent.addChild(child1);
				nsubs++;
				p += 2;
				state = 1;
			}
			break;
		case 2:
			switch(c) {
			case 33:
				if(str.charCodeAt(p + 1) == 91) {
					p += 2;
					if(HxOverrides.substr(str,p,6).toUpperCase() != "CDATA[") throw "Expected <![CDATA[";
					p += 5;
					state = 17;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) == 68 || str.charCodeAt(p + 1) == 100) {
					if(HxOverrides.substr(str,p + 2,6).toUpperCase() != "OCTYPE") throw "Expected <!DOCTYPE";
					p += 8;
					state = 16;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) != 45 || str.charCodeAt(p + 2) != 45) throw "Expected <!--"; else {
					p += 2;
					state = 15;
					start = p + 1;
				}
				break;
			case 63:
				state = 14;
				start = p;
				break;
			case 47:
				if(parent == null) throw "Expected node name";
				start = p + 1;
				state = 0;
				next = 10;
				break;
			default:
				state = 3;
				start = p;
				continue;
			}
			break;
		case 3:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(p == start) throw "Expected node name";
				xml = Xml.createElement(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml);
				state = 0;
				next = 4;
				continue;
			}
			break;
		case 4:
			switch(c) {
			case 47:
				state = 11;
				nsubs++;
				break;
			case 62:
				state = 9;
				nsubs++;
				break;
			default:
				state = 5;
				start = p;
				continue;
			}
			break;
		case 5:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				var tmp;
				if(start == p) throw "Expected attribute name";
				tmp = HxOverrides.substr(str,start,p - start);
				aname = tmp;
				if(xml.exists(aname)) throw "Duplicate attribute";
				state = 0;
				next = 6;
				continue;
			}
			break;
		case 6:
			switch(c) {
			case 61:
				state = 0;
				next = 7;
				break;
			default:
				throw "Expected =";
			}
			break;
		case 7:
			switch(c) {
			case 34:case 39:
				state = 8;
				start = p;
				break;
			default:
				throw "Expected \"";
			}
			break;
		case 8:
			if(c == str.charCodeAt(start)) {
				var val = HxOverrides.substr(str,start + 1,p - start - 1);
				xml.set(aname,val);
				state = 0;
				next = 4;
			}
			break;
		case 9:
			p = haxe.xml.Parser.doParse(str,p,xml);
			start = p;
			state = 1;
			break;
		case 11:
			switch(c) {
			case 62:
				state = 1;
				break;
			default:
				throw "Expected >";
			}
			break;
		case 12:
			switch(c) {
			case 62:
				if(nsubs == 0) parent.addChild(Xml.createPCData(""));
				return p;
			default:
				throw "Expected >";
			}
			break;
		case 10:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(start == p) throw "Expected node name";
				var v = HxOverrides.substr(str,start,p - start);
				if(v != parent.get_nodeName()) throw "Expected </" + parent.get_nodeName() + ">";
				state = 0;
				next = 12;
				continue;
			}
			break;
		case 15:
			if(c == 45 && str.charCodeAt(p + 1) == 45 && str.charCodeAt(p + 2) == 62) {
				parent.addChild(Xml.createComment(HxOverrides.substr(str,start,p - start)));
				p += 2;
				state = 1;
			}
			break;
		case 16:
			if(c == 91) nbrackets++; else if(c == 93) nbrackets--; else if(c == 62 && nbrackets == 0) {
				parent.addChild(Xml.createDocType(HxOverrides.substr(str,start,p - start)));
				state = 1;
			}
			break;
		case 14:
			if(c == 63 && str.charCodeAt(p + 1) == 62) {
				p++;
				var str1 = HxOverrides.substr(str,start + 1,p - start - 2);
				parent.addChild(Xml.createProcessingInstruction(str1));
				state = 1;
			}
			break;
		case 18:
			if(c == 59) {
				var s = HxOverrides.substr(str,start,p - start);
				if(s.charCodeAt(0) == 35) {
					var i;
					if(s.charCodeAt(1) == 120) i = Std.parseInt("0" + HxOverrides.substr(s,1,s.length - 1)); else i = Std.parseInt(HxOverrides.substr(s,1,s.length - 1));
					buf.add(String.fromCharCode(i));
				} else if(!haxe.xml.Parser.escapes.exists(s)) buf.b += Std.string("&" + s + ";"); else buf.add(haxe.xml.Parser.escapes.get(s));
				start = p + 1;
				state = next;
			}
			break;
		}
		c = StringTools.fastCodeAt(str,++p);
	}
	if(state == 1) {
		start = p;
		state = 13;
	}
	if(state == 13) {
		if(p != start || nsubs == 0) parent.addChild(Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start)));
		return p;
	}
	throw "Unexpected end";
};
var hscript = {};
hscript.Const = $hxClasses["hscript.Const"] = { __ename__ : true, __constructs__ : ["CInt","CFloat","CString"] };
hscript.Const.CInt = function(v) { var $x = ["CInt",0,v]; $x.__enum__ = hscript.Const; $x.toString = $estr; return $x; };
hscript.Const.CFloat = function(f) { var $x = ["CFloat",1,f]; $x.__enum__ = hscript.Const; $x.toString = $estr; return $x; };
hscript.Const.CString = function(s) { var $x = ["CString",2,s]; $x.__enum__ = hscript.Const; $x.toString = $estr; return $x; };
hscript.ExprDef = $hxClasses["hscript.ExprDef"] = { __ename__ : true, __constructs__ : ["EConst","EIdent","EVar","EParent","EBlock","EField","EBinop","EUnop","ECall","EIf","EWhile","EFor","EBreak","EContinue","EFunction","EReturn","EArray","EArrayDecl","ENew","EThrow","ETry","EObject","ETernary","ESwitch"] };
hscript.ExprDef.EConst = function(c) { var $x = ["EConst",0,c]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EIdent = function(v) { var $x = ["EIdent",1,v]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EVar = function(n,t,e) { var $x = ["EVar",2,n,t,e]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EParent = function(e) { var $x = ["EParent",3,e]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EBlock = function(e) { var $x = ["EBlock",4,e]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EField = function(e,f) { var $x = ["EField",5,e,f]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EBinop = function(op,e1,e2) { var $x = ["EBinop",6,op,e1,e2]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EUnop = function(op,prefix,e) { var $x = ["EUnop",7,op,prefix,e]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.ECall = function(e,params) { var $x = ["ECall",8,e,params]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EIf = function(cond,e1,e2) { var $x = ["EIf",9,cond,e1,e2]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EWhile = function(cond,e) { var $x = ["EWhile",10,cond,e]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EFor = function(v,it,e) { var $x = ["EFor",11,v,it,e]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EBreak = ["EBreak",12];
hscript.ExprDef.EBreak.toString = $estr;
hscript.ExprDef.EBreak.__enum__ = hscript.ExprDef;
hscript.ExprDef.EContinue = ["EContinue",13];
hscript.ExprDef.EContinue.toString = $estr;
hscript.ExprDef.EContinue.__enum__ = hscript.ExprDef;
hscript.ExprDef.EFunction = function(args,e,name,ret) { var $x = ["EFunction",14,args,e,name,ret]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EReturn = function(e) { var $x = ["EReturn",15,e]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EArray = function(e,index) { var $x = ["EArray",16,e,index]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EArrayDecl = function(e) { var $x = ["EArrayDecl",17,e]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.ENew = function(cl,params) { var $x = ["ENew",18,cl,params]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EThrow = function(e) { var $x = ["EThrow",19,e]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.ETry = function(e,v,t,ecatch) { var $x = ["ETry",20,e,v,t,ecatch]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.EObject = function(fl) { var $x = ["EObject",21,fl]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.ETernary = function(cond,e1,e2) { var $x = ["ETernary",22,cond,e1,e2]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.ExprDef.ESwitch = function(e,cases,defaultExpr) { var $x = ["ESwitch",23,e,cases,defaultExpr]; $x.__enum__ = hscript.ExprDef; $x.toString = $estr; return $x; };
hscript.CType = $hxClasses["hscript.CType"] = { __ename__ : true, __constructs__ : ["CTPath","CTFun","CTAnon","CTParent"] };
hscript.CType.CTPath = function(path,params) { var $x = ["CTPath",0,path,params]; $x.__enum__ = hscript.CType; $x.toString = $estr; return $x; };
hscript.CType.CTFun = function(args,ret) { var $x = ["CTFun",1,args,ret]; $x.__enum__ = hscript.CType; $x.toString = $estr; return $x; };
hscript.CType.CTAnon = function(fields) { var $x = ["CTAnon",2,fields]; $x.__enum__ = hscript.CType; $x.toString = $estr; return $x; };
hscript.CType.CTParent = function(t) { var $x = ["CTParent",3,t]; $x.__enum__ = hscript.CType; $x.toString = $estr; return $x; };
hscript.Error = function(e,pmin,pmax) {
	this.e = e;
	this.pmin = pmin;
	this.pmax = pmax;
};
$hxClasses["hscript.Error"] = hscript.Error;
hscript.Error.__name__ = true;
hscript.Error.prototype = {
	__class__: hscript.Error
};
hscript.ErrorDef = $hxClasses["hscript.ErrorDef"] = { __ename__ : true, __constructs__ : ["EInvalidChar","EUnexpected","EUnterminatedString","EUnterminatedComment","EUnknownVariable","EInvalidIterator","EInvalidOp","EInvalidAccess"] };
hscript.ErrorDef.EInvalidChar = function(c) { var $x = ["EInvalidChar",0,c]; $x.__enum__ = hscript.ErrorDef; $x.toString = $estr; return $x; };
hscript.ErrorDef.EUnexpected = function(s) { var $x = ["EUnexpected",1,s]; $x.__enum__ = hscript.ErrorDef; $x.toString = $estr; return $x; };
hscript.ErrorDef.EUnterminatedString = ["EUnterminatedString",2];
hscript.ErrorDef.EUnterminatedString.toString = $estr;
hscript.ErrorDef.EUnterminatedString.__enum__ = hscript.ErrorDef;
hscript.ErrorDef.EUnterminatedComment = ["EUnterminatedComment",3];
hscript.ErrorDef.EUnterminatedComment.toString = $estr;
hscript.ErrorDef.EUnterminatedComment.__enum__ = hscript.ErrorDef;
hscript.ErrorDef.EUnknownVariable = function(v) { var $x = ["EUnknownVariable",4,v]; $x.__enum__ = hscript.ErrorDef; $x.toString = $estr; return $x; };
hscript.ErrorDef.EInvalidIterator = function(v) { var $x = ["EInvalidIterator",5,v]; $x.__enum__ = hscript.ErrorDef; $x.toString = $estr; return $x; };
hscript.ErrorDef.EInvalidOp = function(op) { var $x = ["EInvalidOp",6,op]; $x.__enum__ = hscript.ErrorDef; $x.toString = $estr; return $x; };
hscript.ErrorDef.EInvalidAccess = function(f) { var $x = ["EInvalidAccess",7,f]; $x.__enum__ = hscript.ErrorDef; $x.toString = $estr; return $x; };
hscript._Interp = {};
hscript._Interp.Stop = $hxClasses["hscript._Interp.Stop"] = { __ename__ : true, __constructs__ : ["SBreak","SContinue","SReturn"] };
hscript._Interp.Stop.SBreak = ["SBreak",0];
hscript._Interp.Stop.SBreak.toString = $estr;
hscript._Interp.Stop.SBreak.__enum__ = hscript._Interp.Stop;
hscript._Interp.Stop.SContinue = ["SContinue",1];
hscript._Interp.Stop.SContinue.toString = $estr;
hscript._Interp.Stop.SContinue.__enum__ = hscript._Interp.Stop;
hscript._Interp.Stop.SReturn = function(v) { var $x = ["SReturn",2,v]; $x.__enum__ = hscript._Interp.Stop; $x.toString = $estr; return $x; };
hscript.Interp = function() {
	this.variables = new haxe.ds.StringMap();
	this.locals = new haxe.ds.StringMap();
	this.variables.set("null",null);
	this.variables.set("true",true);
	this.variables.set("false",false);
	this.variables.set("trace",function(e) {
		haxe.Log.trace(Std.string(e),{ fileName : "hscript", lineNumber : 0});
	});
	this.initOps();
};
$hxClasses["hscript.Interp"] = hscript.Interp;
hscript.Interp.__name__ = true;
hscript.Interp.prototype = {
	initOps: function() {
		var me = this;
		this.binops = new haxe.ds.StringMap();
		this.binops.set("+",function(e1,e2) {
			return me.expr(e1) + me.expr(e2);
		});
		this.binops.set("-",function(e11,e21) {
			return me.expr(e11) - me.expr(e21);
		});
		this.binops.set("*",function(e12,e22) {
			return me.expr(e12) * me.expr(e22);
		});
		this.binops.set("/",function(e13,e23) {
			return me.expr(e13) / me.expr(e23);
		});
		this.binops.set("%",function(e14,e24) {
			return me.expr(e14) % me.expr(e24);
		});
		this.binops.set("&",function(e15,e25) {
			return me.expr(e15) & me.expr(e25);
		});
		this.binops.set("|",function(e16,e26) {
			return me.expr(e16) | me.expr(e26);
		});
		this.binops.set("^",function(e17,e27) {
			return me.expr(e17) ^ me.expr(e27);
		});
		this.binops.set("<<",function(e18,e28) {
			return me.expr(e18) << me.expr(e28);
		});
		this.binops.set(">>",function(e19,e29) {
			return me.expr(e19) >> me.expr(e29);
		});
		this.binops.set(">>>",function(e110,e210) {
			return me.expr(e110) >>> me.expr(e210);
		});
		this.binops.set("==",function(e111,e211) {
			return me.expr(e111) == me.expr(e211);
		});
		this.binops.set("!=",function(e112,e212) {
			return me.expr(e112) != me.expr(e212);
		});
		this.binops.set(">=",function(e113,e213) {
			return me.expr(e113) >= me.expr(e213);
		});
		this.binops.set("<=",function(e114,e214) {
			return me.expr(e114) <= me.expr(e214);
		});
		this.binops.set(">",function(e115,e215) {
			return me.expr(e115) > me.expr(e215);
		});
		this.binops.set("<",function(e116,e216) {
			return me.expr(e116) < me.expr(e216);
		});
		this.binops.set("||",function(e117,e217) {
			return me.expr(e117) == true || me.expr(e217) == true;
		});
		this.binops.set("&&",function(e118,e218) {
			return me.expr(e118) == true && me.expr(e218) == true;
		});
		this.binops.set("=",$bind(this,this.assign));
		this.binops.set("...",function(e119,e219) {
			return new IntIterator(me.expr(e119),me.expr(e219));
		});
		this.assignOp("+=",function(v1,v2) {
			return v1 + v2;
		});
		this.assignOp("-=",function(v11,v21) {
			return v11 - v21;
		});
		this.assignOp("*=",function(v12,v22) {
			return v12 * v22;
		});
		this.assignOp("/=",function(v13,v23) {
			return v13 / v23;
		});
		this.assignOp("%=",function(v14,v24) {
			return v14 % v24;
		});
		this.assignOp("&=",function(v15,v25) {
			return v15 & v25;
		});
		this.assignOp("|=",function(v16,v26) {
			return v16 | v26;
		});
		this.assignOp("^=",function(v17,v27) {
			return v17 ^ v27;
		});
		this.assignOp("<<=",function(v18,v28) {
			return v18 << v28;
		});
		this.assignOp(">>=",function(v19,v29) {
			return v19 >> v29;
		});
		this.assignOp(">>>=",function(v110,v210) {
			return v110 >>> v210;
		});
	}
	,assign: function(e1,e2) {
		var v = this.expr(e2);
		{
			var _g = e1.e;
			switch(_g[1]) {
			case 1:
				var id = _g[2];
				var l = this.locals.get(id);
				if(l == null) this.variables.set(id,v); else l.r = v;
				break;
			case 5:
				var f = _g[3];
				var e = _g[2];
				v = this.set(this.expr(e),f,v);
				break;
			case 16:
				var index = _g[3];
				var e3 = _g[2];
				this.expr(e3)[this.expr(index)] = v;
				break;
			default:
				this.error(hscript.ErrorDef.EInvalidOp("="));
			}
		}
		return v;
	}
	,assignOp: function(op,fop) {
		var me = this;
		this.binops.set(op,function(e1,e2) {
			return me.evalAssignOp(op,fop,e1,e2);
		});
	}
	,evalAssignOp: function(op,fop,e1,e2) {
		var v;
		{
			var _g = e1.e;
			switch(_g[1]) {
			case 1:
				var id = _g[2];
				var l = this.locals.get(id);
				v = fop(this.expr(e1),this.expr(e2));
				if(l == null) this.variables.set(id,v); else l.r = v;
				break;
			case 5:
				var f = _g[3];
				var e = _g[2];
				var obj = this.expr(e);
				v = fop(this.get(obj,f),this.expr(e2));
				v = this.set(obj,f,v);
				break;
			case 16:
				var index = _g[3];
				var e3 = _g[2];
				var arr = this.expr(e3);
				var index1 = this.expr(index);
				v = fop(arr[index1],this.expr(e2));
				arr[index1] = v;
				break;
			default:
				return this.error(hscript.ErrorDef.EInvalidOp(op));
			}
		}
		return v;
	}
	,increment: function(e,prefix,delta) {
		this.curExpr = e;
		var e1 = e.e;
		switch(e1[1]) {
		case 1:
			var id = e1[2];
			var l = this.locals.get(id);
			var v;
			if(l == null) v = this.variables.get(id); else v = l.r;
			if(prefix) {
				v += delta;
				if(l == null) {
					var value = v;
					this.variables.set(id,value);
				} else l.r = v;
			} else if(l == null) {
				var value1 = v + delta;
				this.variables.set(id,value1);
			} else l.r = v + delta;
			return v;
		case 5:
			var f = e1[3];
			var e2 = e1[2];
			var obj = this.expr(e2);
			var v1 = this.get(obj,f);
			if(prefix) {
				v1 += delta;
				this.set(obj,f,v1);
			} else this.set(obj,f,v1 + delta);
			return v1;
		case 16:
			var index = e1[3];
			var e3 = e1[2];
			var arr = this.expr(e3);
			var index1 = this.expr(index);
			var v2 = arr[index1];
			if(prefix) {
				v2 += delta;
				arr[index1] = v2;
			} else arr[index1] = v2 + delta;
			return v2;
		default:
			return this.error(hscript.ErrorDef.EInvalidOp(delta > 0?"++":"--"));
		}
	}
	,execute: function(expr) {
		this.depth = 0;
		this.locals = new haxe.ds.StringMap();
		this.declared = new Array();
		return this.exprReturn(expr);
	}
	,exprReturn: function(e) {
		try {
			return this.expr(e);
		} catch( e1 ) {
			if( js.Boot.__instanceof(e1,hscript._Interp.Stop) ) {
				switch(e1[1]) {
				case 0:
					throw "Invalid break";
					break;
				case 1:
					throw "Invalid continue";
					break;
				case 2:
					var v = e1[2];
					return v;
				}
			} else throw(e1);
		}
		return null;
	}
	,duplicate: function(h) {
		var h2 = new haxe.ds.StringMap();
		var $it0 = h.keys();
		while( $it0.hasNext() ) {
			var k = $it0.next();
			var value = h.get(k);
			h2.set(k,value);
		}
		return h2;
	}
	,restore: function(old) {
		while(this.declared.length > old) {
			var d = this.declared.pop();
			this.locals.set(d.n,d.old);
		}
	}
	,error: function(e) {
		throw new hscript.Error(e,this.curExpr.pmin,this.curExpr.pmax);
		return null;
	}
	,resolve: function(id) {
		var l = this.locals.get(id);
		if(l != null) return l.r;
		var v = this.variables.get(id);
		if(v == null && !this.variables.exists(id)) this.error(hscript.ErrorDef.EUnknownVariable(id));
		return v;
	}
	,expr: function(e) {
		var _g = this;
		this.curExpr = e;
		var e1 = e.e;
		switch(e1[1]) {
		case 0:
			var c = e1[2];
			switch(c[1]) {
			case 0:
				var v = c[2];
				return v;
			case 1:
				var f = c[2];
				return f;
			case 2:
				var s = c[2];
				return s;
			}
			break;
		case 1:
			var id = e1[2];
			return this.resolve(id);
		case 2:
			var e2 = e1[4];
			var n = e1[2];
			this.declared.push({ n : n, old : this.locals.get(n)});
			var value = { r : e2 == null?null:this.expr(e2)};
			this.locals.set(n,value);
			return null;
		case 3:
			var e3 = e1[2];
			return this.expr(e3);
		case 4:
			var exprs = e1[2];
			var old = this.declared.length;
			var v1 = null;
			var _g1 = 0;
			while(_g1 < exprs.length) {
				var e4 = exprs[_g1];
				++_g1;
				v1 = this.expr(e4);
			}
			this.restore(old);
			return v1;
		case 5:
			var f1 = e1[3];
			var e5 = e1[2];
			return this.get(this.expr(e5),f1);
		case 6:
			var e21 = e1[4];
			var e11 = e1[3];
			var op = e1[2];
			var fop = this.binops.get(op);
			if(fop == null) this.error(hscript.ErrorDef.EInvalidOp(op));
			return fop(e11,e21);
		case 7:
			var e6 = e1[4];
			var prefix = e1[3];
			var op1 = e1[2];
			switch(op1) {
			case "!":
				return this.expr(e6) != true;
			case "-":
				return -this.expr(e6);
			case "++":
				return this.increment(e6,prefix,1);
			case "--":
				return this.increment(e6,prefix,-1);
			case "~":
				return ~this.expr(e6);
			default:
				this.error(hscript.ErrorDef.EInvalidOp(op1));
			}
			break;
		case 8:
			var params = e1[3];
			var e7 = e1[2];
			var args = new Array();
			var _g2 = 0;
			while(_g2 < params.length) {
				var p = params[_g2];
				++_g2;
				args.push(this.expr(p));
			}
			{
				var _g3 = e7.e;
				switch(_g3[1]) {
				case 5:
					var f2 = _g3[3];
					var e8 = _g3[2];
					var obj = this.expr(e8);
					if(obj == null) this.error(hscript.ErrorDef.EInvalidAccess(f2));
					return this.fcall(obj,f2,args);
				default:
					return this.call(null,this.expr(e7),args);
				}
			}
			break;
		case 9:
			var e22 = e1[4];
			var e12 = e1[3];
			var econd = e1[2];
			if(this.expr(econd) == true) return this.expr(e12); else if(e22 == null) return null; else return this.expr(e22);
			break;
		case 10:
			var e9 = e1[3];
			var econd1 = e1[2];
			this.whileLoop(econd1,e9);
			return null;
		case 11:
			var e10 = e1[4];
			var it = e1[3];
			var v2 = e1[2];
			this.forLoop(v2,it,e10);
			return null;
		case 12:
			throw hscript._Interp.Stop.SBreak;
			break;
		case 13:
			throw hscript._Interp.Stop.SContinue;
			break;
		case 15:
			var e13 = e1[2];
			throw hscript._Interp.Stop.SReturn(e13 == null?null:this.expr(e13));
			break;
		case 14:
			var name = e1[4];
			var fexpr = e1[3];
			var params1 = e1[2];
			var capturedLocals = this.duplicate(this.locals);
			var me = this;
			var hasOpt = false;
			var minParams = 0;
			var _g4 = 0;
			while(_g4 < params1.length) {
				var p1 = params1[_g4];
				++_g4;
				if(p1.opt) hasOpt = true; else minParams++;
			}
			var f3 = function(args1) {
				if(args1.length != params1.length) {
					if(args1.length < minParams) {
						var str = "Invalid number of parameters. Got " + args1.length + ", required " + minParams;
						if(name != null) str += " for function '" + name + "'";
						throw str;
					}
					var args2 = [];
					var extraParams = args1.length - minParams;
					var pos = 0;
					var _g5 = 0;
					while(_g5 < params1.length) {
						var p2 = params1[_g5];
						++_g5;
						if(p2.opt) {
							if(extraParams > 0) {
								args2.push(args1[pos++]);
								extraParams--;
							} else args2.push(null);
						} else args2.push(args1[pos++]);
					}
					args1 = args2;
				}
				var old1 = me.locals;
				var depth = me.depth;
				me.depth++;
				me.locals = me.duplicate(capturedLocals);
				var _g11 = 0;
				var _g6 = params1.length;
				while(_g11 < _g6) {
					var i = _g11++;
					me.locals.set(params1[i].name,{ r : args1[i]});
				}
				var r = null;
				if(_g.inTry) try {
					r = me.exprReturn(fexpr);
				} catch( e14 ) {
					me.locals = old1;
					me.depth = depth;
					throw e14;
				} else r = me.exprReturn(fexpr);
				me.locals = old1;
				me.depth = depth;
				return r;
			};
			var f4 = Reflect.makeVarArgs(f3);
			if(name != null) {
				if(this.depth == 0) this.variables.set(name,f4); else {
					this.declared.push({ n : name, old : this.locals.get(name)});
					var ref = { r : f4};
					this.locals.set(name,ref);
					capturedLocals.set(name,ref);
				}
			}
			return f4;
		case 17:
			var arr = e1[2];
			var a = new Array();
			var _g7 = 0;
			while(_g7 < arr.length) {
				var e15 = arr[_g7];
				++_g7;
				a.push(this.expr(e15));
			}
			return a;
		case 16:
			var index = e1[3];
			var e16 = e1[2];
			return this.expr(e16)[this.expr(index)];
		case 18:
			var params2 = e1[3];
			var cl = e1[2];
			var a1 = new Array();
			var _g8 = 0;
			while(_g8 < params2.length) {
				var e17 = params2[_g8];
				++_g8;
				a1.push(this.expr(e17));
			}
			return this.cnew(cl,a1);
		case 19:
			var e18 = e1[2];
			throw this.expr(e18);
			break;
		case 20:
			var ecatch = e1[5];
			var n1 = e1[3];
			var e19 = e1[2];
			var old2 = this.declared.length;
			var oldTry = this.inTry;
			try {
				this.inTry = true;
				var v3 = this.expr(e19);
				this.restore(old2);
				this.inTry = oldTry;
				return v3;
			} catch( $e0 ) {
				if( js.Boot.__instanceof($e0,hscript._Interp.Stop) ) {
					var err = $e0;
					this.inTry = oldTry;
					throw err;
				} else {
				var err1 = $e0;
				this.restore(old2);
				this.inTry = oldTry;
				this.declared.push({ n : n1, old : this.locals.get(n1)});
				this.locals.set(n1,{ r : err1});
				var v4 = this.expr(ecatch);
				this.restore(old2);
				return v4;
				}
			}
			break;
		case 21:
			var fl = e1[2];
			var o = { };
			var _g9 = 0;
			while(_g9 < fl.length) {
				var f5 = fl[_g9];
				++_g9;
				this.set(o,f5.name,this.expr(f5.e));
			}
			return o;
		case 22:
			var e23 = e1[4];
			var e110 = e1[3];
			var econd2 = e1[2];
			if(this.expr(econd2) == true) return this.expr(e110); else return this.expr(e23);
			break;
		case 23:
			var def = e1[4];
			var cases = e1[3];
			var e20 = e1[2];
			var val = this.expr(e20);
			var match = false;
			var _g10 = 0;
			while(_g10 < cases.length) {
				var c1 = cases[_g10];
				++_g10;
				var _g12 = 0;
				var _g21 = c1.values;
				while(_g12 < _g21.length) {
					var v5 = _g21[_g12];
					++_g12;
					if(this.expr(v5) == val) {
						match = true;
						break;
					}
				}
				if(match) {
					val = this.expr(c1.expr);
					break;
				}
			}
			if(!match) if(def == null) val = null; else val = this.expr(def);
			return val;
		}
		return null;
	}
	,whileLoop: function(econd,e) {
		var old = this.declared.length;
		try {
			while(this.expr(econd) == true) try {
				this.expr(e);
			} catch( err ) {
				if( js.Boot.__instanceof(err,hscript._Interp.Stop) ) {
					switch(err[1]) {
					case 1:
						break;
					case 0:
						throw "__break__";
						break;
					case 2:
						throw err;
						break;
					}
				} else throw(err);
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		this.restore(old);
	}
	,makeIterator: function(v) {
		try {
			v = $iterator(v)();
		} catch( e ) {
		}
		if(v.hasNext == null || v.next == null) this.error(hscript.ErrorDef.EInvalidIterator(v));
		return v;
	}
	,forLoop: function(n,it,e) {
		var old = this.declared.length;
		this.declared.push({ n : n, old : this.locals.get(n)});
		var it1 = this.makeIterator(this.expr(it));
		try {
			while(it1.hasNext()) {
				var value = { r : it1.next()};
				this.locals.set(n,value);
				try {
					this.expr(e);
				} catch( err ) {
					if( js.Boot.__instanceof(err,hscript._Interp.Stop) ) {
						switch(err[1]) {
						case 1:
							break;
						case 0:
							throw "__break__";
							break;
						case 2:
							throw err;
							break;
						}
					} else throw(err);
				}
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		this.restore(old);
	}
	,get: function(o,f) {
		if(o == null) this.error(hscript.ErrorDef.EInvalidAccess(f));
		return Reflect.field(o,f);
	}
	,set: function(o,f,v) {
		if(o == null) this.error(hscript.ErrorDef.EInvalidAccess(f));
		o[f] = v;
		return v;
	}
	,fcall: function(o,f,args) {
		return this.call(o,Reflect.field(o,f),args);
	}
	,call: function(o,f,args) {
		return f.apply(o,args);
	}
	,cnew: function(cl,args) {
		var c = Type.resolveClass(cl);
		if(c == null) c = this.resolve(cl);
		return Type.createInstance(c,args);
	}
	,__class__: hscript.Interp
};
hscript.Token = $hxClasses["hscript.Token"] = { __ename__ : true, __constructs__ : ["TEof","TConst","TId","TOp","TPOpen","TPClose","TBrOpen","TBrClose","TDot","TComma","TSemicolon","TBkOpen","TBkClose","TQuestion","TDoubleDot"] };
hscript.Token.TEof = ["TEof",0];
hscript.Token.TEof.toString = $estr;
hscript.Token.TEof.__enum__ = hscript.Token;
hscript.Token.TConst = function(c) { var $x = ["TConst",1,c]; $x.__enum__ = hscript.Token; $x.toString = $estr; return $x; };
hscript.Token.TId = function(s) { var $x = ["TId",2,s]; $x.__enum__ = hscript.Token; $x.toString = $estr; return $x; };
hscript.Token.TOp = function(s) { var $x = ["TOp",3,s]; $x.__enum__ = hscript.Token; $x.toString = $estr; return $x; };
hscript.Token.TPOpen = ["TPOpen",4];
hscript.Token.TPOpen.toString = $estr;
hscript.Token.TPOpen.__enum__ = hscript.Token;
hscript.Token.TPClose = ["TPClose",5];
hscript.Token.TPClose.toString = $estr;
hscript.Token.TPClose.__enum__ = hscript.Token;
hscript.Token.TBrOpen = ["TBrOpen",6];
hscript.Token.TBrOpen.toString = $estr;
hscript.Token.TBrOpen.__enum__ = hscript.Token;
hscript.Token.TBrClose = ["TBrClose",7];
hscript.Token.TBrClose.toString = $estr;
hscript.Token.TBrClose.__enum__ = hscript.Token;
hscript.Token.TDot = ["TDot",8];
hscript.Token.TDot.toString = $estr;
hscript.Token.TDot.__enum__ = hscript.Token;
hscript.Token.TComma = ["TComma",9];
hscript.Token.TComma.toString = $estr;
hscript.Token.TComma.__enum__ = hscript.Token;
hscript.Token.TSemicolon = ["TSemicolon",10];
hscript.Token.TSemicolon.toString = $estr;
hscript.Token.TSemicolon.__enum__ = hscript.Token;
hscript.Token.TBkOpen = ["TBkOpen",11];
hscript.Token.TBkOpen.toString = $estr;
hscript.Token.TBkOpen.__enum__ = hscript.Token;
hscript.Token.TBkClose = ["TBkClose",12];
hscript.Token.TBkClose.toString = $estr;
hscript.Token.TBkClose.__enum__ = hscript.Token;
hscript.Token.TQuestion = ["TQuestion",13];
hscript.Token.TQuestion.toString = $estr;
hscript.Token.TQuestion.__enum__ = hscript.Token;
hscript.Token.TDoubleDot = ["TDoubleDot",14];
hscript.Token.TDoubleDot.toString = $estr;
hscript.Token.TDoubleDot.__enum__ = hscript.Token;
hscript.Parser = function() {
	this.uid = 0;
	this.line = 1;
	this.opChars = "+*/-=!><&|^%~";
	this.identChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
	var priorities = [["%"],["*","/"],["+","-"],["<<",">>",">>>"],["|","&","^"],["==","!=",">","<",">=","<="],["..."],["&&"],["||"],["=","+=","-=","*=","/=","%=","<<=",">>=",">>>=","|=","&=","^="]];
	this.opPriority = new haxe.ds.StringMap();
	this.opRightAssoc = new haxe.ds.StringMap();
	this.unops = new haxe.ds.StringMap();
	var _g1 = 0;
	var _g = priorities.length;
	while(_g1 < _g) {
		var i = _g1++;
		var _g2 = 0;
		var _g3 = priorities[i];
		while(_g2 < _g3.length) {
			var x = _g3[_g2];
			++_g2;
			this.opPriority.set(x,i);
			if(i == 9) this.opRightAssoc.set(x,true);
		}
	}
	var _g4 = 0;
	var _g11 = ["!","++","--","-","~"];
	while(_g4 < _g11.length) {
		var x1 = _g11[_g4];
		++_g4;
		this.unops.set(x1,x1 == "++" || x1 == "--");
	}
};
$hxClasses["hscript.Parser"] = hscript.Parser;
hscript.Parser.__name__ = true;
hscript.Parser.prototype = {
	error: function(err,pmin,pmax) {
		throw new hscript.Error(err,pmin,pmax);
	}
	,invalidChar: function(c) {
		this.error(hscript.ErrorDef.EInvalidChar(c),this.readPos,this.readPos);
	}
	,parseString: function(s) {
		this.line = 1;
		this.uid = 0;
		return this.parse(new haxe.io.StringInput(s));
	}
	,parse: function(s) {
		this.readPos = 0;
		this.tokenMin = this.oldTokenMin = 0;
		this.tokenMax = this.oldTokenMax = 0;
		this.tokens = new List();
		this["char"] = -1;
		this.input = s;
		this.ops = new Array();
		this.idents = new Array();
		var _g1 = 0;
		var _g = this.opChars.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.ops[HxOverrides.cca(this.opChars,i)] = true;
		}
		var _g11 = 0;
		var _g2 = this.identChars.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			this.idents[HxOverrides.cca(this.identChars,i1)] = true;
		}
		var a = new Array();
		while(true) {
			var tk = this.token();
			if(tk == hscript.Token.TEof) break;
			this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
			this.tokenMin = this.oldTokenMin;
			this.tokenMax = this.oldTokenMax;
			a.push(this.parseFullExpr());
		}
		if(a.length == 1) return a[0]; else return this.mk(hscript.ExprDef.EBlock(a),0,null);
	}
	,unexpected: function(tk) {
		this.error(hscript.ErrorDef.EUnexpected(this.tokenString(tk)),this.tokenMin,this.tokenMax);
		return null;
	}
	,push: function(tk) {
		this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
		this.tokenMin = this.oldTokenMin;
		this.tokenMax = this.oldTokenMax;
	}
	,ensure: function(tk) {
		var t = this.token();
		if(t != tk) this.unexpected(t);
	}
	,mk: function(e,pmin,pmax) {
		if(pmin == null) pmin = this.tokenMin;
		if(pmax == null) pmax = this.tokenMax;
		return { e : e, pmin : pmin, pmax : pmax};
	}
	,isBlock: function(e) {
		{
			var _g = e.e;
			switch(_g[1]) {
			case 4:case 21:case 23:
				return true;
			case 14:
				var e1 = _g[3];
				return this.isBlock(e1);
			case 2:
				var e2 = _g[4];
				return e2 != null && this.isBlock(e2);
			case 9:
				var e21 = _g[4];
				var e11 = _g[3];
				if(e21 != null) return this.isBlock(e21); else return this.isBlock(e11);
				break;
			case 6:
				var e3 = _g[4];
				return this.isBlock(e3);
			case 7:
				var e4 = _g[4];
				var prefix = _g[3];
				return !prefix && this.isBlock(e4);
			case 10:
				var e5 = _g[3];
				return this.isBlock(e5);
			case 11:
				var e6 = _g[4];
				return this.isBlock(e6);
			case 15:
				var e7 = _g[2];
				return e7 != null && this.isBlock(e7);
			case 20:
				var e8 = _g[5];
				return this.isBlock(e8);
			default:
				return false;
			}
		}
	}
	,parseFullExpr: function() {
		var e = this.parseExpr();
		var tk = this.token();
		if(tk != hscript.Token.TSemicolon && tk != hscript.Token.TEof) {
			if(this.isBlock(e)) {
				this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
				this.tokenMin = this.oldTokenMin;
				this.tokenMax = this.oldTokenMax;
			} else this.unexpected(tk);
		}
		return e;
	}
	,parseObject: function(p1) {
		var fl = new Array();
		try {
			while(true) {
				var tk = this.token();
				var id = null;
				switch(tk[1]) {
				case 2:
					var i = tk[2];
					id = i;
					break;
				case 1:
					var c = tk[2];
					if(!this.allowJSON) this.unexpected(tk);
					switch(c[1]) {
					case 2:
						var s = c[2];
						id = s;
						break;
					default:
						this.unexpected(tk);
					}
					break;
				case 7:
					throw "__break__";
					break;
				default:
					this.unexpected(tk);
				}
				this.ensure(hscript.Token.TDoubleDot);
				fl.push({ name : id, e : this.parseExpr()});
				tk = this.token();
				switch(tk[1]) {
				case 7:
					throw "__break__";
					break;
				case 9:
					break;
				default:
					this.unexpected(tk);
				}
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		return this.parseExprNext(this.mk(hscript.ExprDef.EObject(fl),p1,null));
	}
	,parseExpr: function() {
		var tk = this.token();
		var p1 = this.tokenMin;
		switch(tk[1]) {
		case 2:
			var id = tk[2];
			var e = this.parseStructure(id);
			if(e == null) e = this.mk(hscript.ExprDef.EIdent(id),null,null);
			return this.parseExprNext(e);
		case 1:
			var c = tk[2];
			return this.parseExprNext(this.mk(hscript.ExprDef.EConst(c),null,null));
		case 4:
			var e1 = this.parseExpr();
			this.ensure(hscript.Token.TPClose);
			return this.parseExprNext(this.mk(hscript.ExprDef.EParent(e1),p1,this.tokenMax));
		case 6:
			tk = this.token();
			switch(tk[1]) {
			case 7:
				return this.parseExprNext(this.mk(hscript.ExprDef.EObject([]),p1,null));
			case 2:
				var tk2 = this.token();
				this.tokens.push({ t : tk2, min : this.tokenMin, max : this.tokenMax});
				this.tokenMin = this.oldTokenMin;
				this.tokenMax = this.oldTokenMax;
				this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
				this.tokenMin = this.oldTokenMin;
				this.tokenMax = this.oldTokenMax;
				switch(tk2[1]) {
				case 14:
					return this.parseExprNext(this.parseObject(p1));
				default:
				}
				break;
			case 1:
				var c1 = tk[2];
				if(this.allowJSON) switch(c1[1]) {
				case 2:
					var tk21 = this.token();
					this.tokens.push({ t : tk21, min : this.tokenMin, max : this.tokenMax});
					this.tokenMin = this.oldTokenMin;
					this.tokenMax = this.oldTokenMax;
					this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
					this.tokenMin = this.oldTokenMin;
					this.tokenMax = this.oldTokenMax;
					switch(tk21[1]) {
					case 14:
						return this.parseExprNext(this.parseObject(p1));
					default:
					}
					break;
				default:
					this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
					this.tokenMin = this.oldTokenMin;
					this.tokenMax = this.oldTokenMax;
				} else {
					this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
					this.tokenMin = this.oldTokenMin;
					this.tokenMax = this.oldTokenMax;
				}
				break;
			default:
				this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
				this.tokenMin = this.oldTokenMin;
				this.tokenMax = this.oldTokenMax;
			}
			var a = new Array();
			while(true) {
				a.push(this.parseFullExpr());
				tk = this.token();
				if(tk == hscript.Token.TBrClose) break;
				this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
				this.tokenMin = this.oldTokenMin;
				this.tokenMax = this.oldTokenMax;
			}
			return this.mk(hscript.ExprDef.EBlock(a),p1,null);
		case 3:
			var op = tk[2];
			if(this.unops.exists(op)) return this.makeUnop(op,this.parseExpr());
			return this.unexpected(tk);
		case 11:
			var a1 = new Array();
			tk = this.token();
			while(tk != hscript.Token.TBkClose) {
				this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
				this.tokenMin = this.oldTokenMin;
				this.tokenMax = this.oldTokenMax;
				a1.push(this.parseExpr());
				tk = this.token();
				if(tk == hscript.Token.TComma) tk = this.token();
			}
			if(a1.length == 1) {
				var _g = a1[0].e;
				switch(_g[1]) {
				case 11:case 10:
					var tmp = "__a_" + this.uid++;
					var e2 = this.mk(hscript.ExprDef.EBlock([this.mk(hscript.ExprDef.EVar(tmp,null,this.mk(hscript.ExprDef.EArrayDecl([]),p1,null)),p1,null),this.mapCompr(tmp,a1[0]),this.mk(hscript.ExprDef.EIdent(tmp),p1,null)]),p1,null);
					return this.parseExprNext(e2);
				default:
				}
			}
			return this.parseExprNext(this.mk(hscript.ExprDef.EArrayDecl(a1),p1,null));
		default:
			return this.unexpected(tk);
		}
	}
	,mapCompr: function(tmp,e) {
		var edef;
		{
			var _g = e.e;
			switch(_g[1]) {
			case 11:
				var e2 = _g[4];
				var it = _g[3];
				var v = _g[2];
				edef = hscript.ExprDef.EFor(v,it,this.mapCompr(tmp,e2));
				break;
			case 10:
				var e21 = _g[3];
				var cond = _g[2];
				edef = hscript.ExprDef.EWhile(cond,this.mapCompr(tmp,e21));
				break;
			case 9:
				var e22 = _g[4];
				var e1 = _g[3];
				var cond1 = _g[2];
				if(e22 == null) edef = hscript.ExprDef.EIf(cond1,this.mapCompr(tmp,e1),null); else edef = hscript.ExprDef.ECall(this.mk(hscript.ExprDef.EField(this.mk(hscript.ExprDef.EIdent(tmp),e.pmin,e.pmax),"push"),e.pmin,e.pmax),[e]);
				break;
			case 4:
				switch(_g[2].length) {
				case 1:
					var e3 = _g[2][0];
					edef = hscript.ExprDef.EBlock([this.mapCompr(tmp,e3)]);
					break;
				default:
					edef = hscript.ExprDef.ECall(this.mk(hscript.ExprDef.EField(this.mk(hscript.ExprDef.EIdent(tmp),e.pmin,e.pmax),"push"),e.pmin,e.pmax),[e]);
				}
				break;
			case 3:
				var e23 = _g[2];
				edef = hscript.ExprDef.EParent(this.mapCompr(tmp,e23));
				break;
			default:
				edef = hscript.ExprDef.ECall(this.mk(hscript.ExprDef.EField(this.mk(hscript.ExprDef.EIdent(tmp),e.pmin,e.pmax),"push"),e.pmin,e.pmax),[e]);
			}
		}
		return this.mk(edef,e.pmin,e.pmax);
	}
	,makeUnop: function(op,e) {
		{
			var _g = e.e;
			switch(_g[1]) {
			case 6:
				var e2 = _g[4];
				var e1 = _g[3];
				var bop = _g[2];
				return this.mk(hscript.ExprDef.EBinop(bop,this.makeUnop(op,e1),e2),e1.pmin,e2.pmax);
			case 22:
				var e3 = _g[4];
				var e21 = _g[3];
				var e11 = _g[2];
				return this.mk(hscript.ExprDef.ETernary(this.makeUnop(op,e11),e21,e3),e11.pmin,e3.pmax);
			default:
				return this.mk(hscript.ExprDef.EUnop(op,true,e),e.pmin,e.pmax);
			}
		}
	}
	,makeBinop: function(op,e1,e) {
		{
			var _g = e.e;
			switch(_g[1]) {
			case 6:
				var e3 = _g[4];
				var e2 = _g[3];
				var op2 = _g[2];
				if(this.opPriority.get(op) <= this.opPriority.get(op2) && !this.opRightAssoc.exists(op)) return this.mk(hscript.ExprDef.EBinop(op2,this.makeBinop(op,e1,e2),e3),e1.pmin,e3.pmax); else return this.mk(hscript.ExprDef.EBinop(op,e1,e),e1.pmin,e.pmax);
				break;
			case 22:
				var e4 = _g[4];
				var e31 = _g[3];
				var e21 = _g[2];
				if(this.opRightAssoc.exists(op)) return this.mk(hscript.ExprDef.EBinop(op,e1,e),e1.pmin,e.pmax); else return this.mk(hscript.ExprDef.ETernary(this.makeBinop(op,e1,e21),e31,e4),e1.pmin,e.pmax);
				break;
			default:
				return this.mk(hscript.ExprDef.EBinop(op,e1,e),e1.pmin,e.pmax);
			}
		}
	}
	,parseStructure: function(id) {
		var p1 = this.tokenMin;
		switch(id) {
		case "if":
			this.ensure(hscript.Token.TPOpen);
			var cond = this.parseExpr();
			this.ensure(hscript.Token.TPClose);
			var e1 = this.parseExpr();
			var e2 = null;
			var semic = false;
			var tk = this.token();
			if(tk == hscript.Token.TSemicolon) {
				semic = true;
				tk = this.token();
			}
			if(Type.enumEq(tk,hscript.Token.TId("else"))) e2 = this.parseExpr(); else {
				this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
				this.tokenMin = this.oldTokenMin;
				this.tokenMax = this.oldTokenMax;
				if(semic) {
					this.tokens.push({ t : hscript.Token.TSemicolon, min : this.tokenMin, max : this.tokenMax});
					this.tokenMin = this.oldTokenMin;
					this.tokenMax = this.oldTokenMax;
				}
			}
			return this.mk(hscript.ExprDef.EIf(cond,e1,e2),p1,e2 == null?this.tokenMax:e2.pmax);
		case "var":
			var tk1 = this.token();
			var ident = null;
			switch(tk1[1]) {
			case 2:
				var id1 = tk1[2];
				ident = id1;
				break;
			default:
				this.unexpected(tk1);
			}
			tk1 = this.token();
			var t = null;
			if(tk1 == hscript.Token.TDoubleDot && this.allowTypes) {
				t = this.parseType();
				tk1 = this.token();
			}
			var e = null;
			if(Type.enumEq(tk1,hscript.Token.TOp("="))) e = this.parseExpr(); else {
				this.tokens.push({ t : tk1, min : this.tokenMin, max : this.tokenMax});
				this.tokenMin = this.oldTokenMin;
				this.tokenMax = this.oldTokenMax;
			}
			return this.mk(hscript.ExprDef.EVar(ident,t,e),p1,e == null?this.tokenMax:e.pmax);
		case "while":
			var econd = this.parseExpr();
			var e3 = this.parseExpr();
			return this.mk(hscript.ExprDef.EWhile(econd,e3),p1,e3.pmax);
		case "for":
			this.ensure(hscript.Token.TPOpen);
			var tk2 = this.token();
			var vname = null;
			switch(tk2[1]) {
			case 2:
				var id2 = tk2[2];
				vname = id2;
				break;
			default:
				this.unexpected(tk2);
			}
			tk2 = this.token();
			if(!Type.enumEq(tk2,hscript.Token.TId("in"))) this.unexpected(tk2);
			var eiter = this.parseExpr();
			this.ensure(hscript.Token.TPClose);
			var e4 = this.parseExpr();
			return this.mk(hscript.ExprDef.EFor(vname,eiter,e4),p1,e4.pmax);
		case "break":
			return this.mk(hscript.ExprDef.EBreak,null,null);
		case "continue":
			return this.mk(hscript.ExprDef.EContinue,null,null);
		case "else":
			return this.unexpected(hscript.Token.TId(id));
		case "function":
			var tk3 = this.token();
			var name = null;
			switch(tk3[1]) {
			case 2:
				var id3 = tk3[2];
				name = id3;
				break;
			default:
				this.tokens.push({ t : tk3, min : this.tokenMin, max : this.tokenMax});
				this.tokenMin = this.oldTokenMin;
				this.tokenMax = this.oldTokenMax;
			}
			this.ensure(hscript.Token.TPOpen);
			var args = new Array();
			tk3 = this.token();
			if(tk3 != hscript.Token.TPClose) {
				var done = false;
				while(!done) {
					var name1 = null;
					var opt = false;
					switch(tk3[1]) {
					case 13:
						opt = true;
						tk3 = this.token();
						break;
					default:
					}
					switch(tk3[1]) {
					case 2:
						var id4 = tk3[2];
						name1 = id4;
						break;
					default:
						this.unexpected(tk3);
					}
					tk3 = this.token();
					var arg = { name : name1};
					args.push(arg);
					if(opt) arg.opt = true;
					if(tk3 == hscript.Token.TDoubleDot && this.allowTypes) {
						arg.t = this.parseType();
						tk3 = this.token();
					}
					switch(tk3[1]) {
					case 9:
						tk3 = this.token();
						break;
					case 5:
						done = true;
						break;
					default:
						this.unexpected(tk3);
					}
				}
			}
			var ret = null;
			if(this.allowTypes) {
				tk3 = this.token();
				if(tk3 != hscript.Token.TDoubleDot) {
					this.tokens.push({ t : tk3, min : this.tokenMin, max : this.tokenMax});
					this.tokenMin = this.oldTokenMin;
					this.tokenMax = this.oldTokenMax;
				} else ret = this.parseType();
			}
			var body = this.parseExpr();
			return this.mk(hscript.ExprDef.EFunction(args,body,name,ret),p1,body.pmax);
		case "return":
			var tk4 = this.token();
			this.tokens.push({ t : tk4, min : this.tokenMin, max : this.tokenMax});
			this.tokenMin = this.oldTokenMin;
			this.tokenMax = this.oldTokenMax;
			var e5;
			if(tk4 == hscript.Token.TSemicolon) e5 = null; else e5 = this.parseExpr();
			return this.mk(hscript.ExprDef.EReturn(e5),p1,e5 == null?this.tokenMax:e5.pmax);
		case "new":
			var a = new Array();
			var tk5 = this.token();
			switch(tk5[1]) {
			case 2:
				var id5 = tk5[2];
				a.push(id5);
				break;
			default:
				this.unexpected(tk5);
			}
			var next = true;
			while(next) {
				tk5 = this.token();
				switch(tk5[1]) {
				case 8:
					tk5 = this.token();
					switch(tk5[1]) {
					case 2:
						var id6 = tk5[2];
						a.push(id6);
						break;
					default:
						this.unexpected(tk5);
					}
					break;
				case 4:
					next = false;
					break;
				default:
					this.unexpected(tk5);
				}
			}
			var args1 = this.parseExprList(hscript.Token.TPClose);
			return this.mk(hscript.ExprDef.ENew(a.join("."),args1),p1,null);
		case "throw":
			var e6 = this.parseExpr();
			return this.mk(hscript.ExprDef.EThrow(e6),p1,e6.pmax);
		case "try":
			var e7 = this.parseExpr();
			var tk6 = this.token();
			if(!Type.enumEq(tk6,hscript.Token.TId("catch"))) this.unexpected(tk6);
			this.ensure(hscript.Token.TPOpen);
			tk6 = this.token();
			var vname1;
			switch(tk6[1]) {
			case 2:
				var id7 = tk6[2];
				vname1 = id7;
				break;
			default:
				vname1 = this.unexpected(tk6);
			}
			this.ensure(hscript.Token.TDoubleDot);
			var t1 = null;
			if(this.allowTypes) t1 = this.parseType(); else {
				tk6 = this.token();
				if(!Type.enumEq(tk6,hscript.Token.TId("Dynamic"))) this.unexpected(tk6);
			}
			this.ensure(hscript.Token.TPClose);
			var ec = this.parseExpr();
			return this.mk(hscript.ExprDef.ETry(e7,vname1,t1,ec),p1,ec.pmax);
		case "switch":
			var e8 = this.parseExpr();
			var def = null;
			var cases = [];
			this.ensure(hscript.Token.TBrOpen);
			try {
				while(true) {
					var tk7 = this.token();
					switch(tk7[1]) {
					case 2:
						switch(tk7[2]) {
						case "case":
							var c = { values : [], expr : null};
							cases.push(c);
							try {
								while(true) {
									var e9 = this.parseExpr();
									c.values.push(e9);
									tk7 = this.token();
									switch(tk7[1]) {
									case 9:
										break;
									case 14:
										throw "__break__";
										break;
									default:
										this.unexpected(tk7);
									}
								}
							} catch( e ) { if( e != "__break__" ) throw e; }
							var exprs = [];
							try {
								while(true) {
									tk7 = this.token();
									this.tokens.push({ t : tk7, min : this.tokenMin, max : this.tokenMax});
									this.tokenMin = this.oldTokenMin;
									this.tokenMax = this.oldTokenMax;
									switch(tk7[1]) {
									case 2:
										switch(tk7[2]) {
										case "case":case "default":
											throw "__break__";
											break;
										default:
											exprs.push(this.parseFullExpr());
										}
										break;
									case 7:
										throw "__break__";
										break;
									default:
										exprs.push(this.parseFullExpr());
									}
								}
							} catch( e ) { if( e != "__break__" ) throw e; }
							if(exprs.length == 1) c.expr = exprs[0]; else if(exprs.length == 0) c.expr = this.mk(hscript.ExprDef.EBlock([]),this.tokenMin,this.tokenMin); else c.expr = this.mk(hscript.ExprDef.EBlock(exprs),exprs[0].pmin,exprs[exprs.length - 1].pmax);
							break;
						case "default":
							if(def != null) this.unexpected(tk7);
							this.ensure(hscript.Token.TDoubleDot);
							var exprs1 = [];
							try {
								while(true) {
									tk7 = this.token();
									this.tokens.push({ t : tk7, min : this.tokenMin, max : this.tokenMax});
									this.tokenMin = this.oldTokenMin;
									this.tokenMax = this.oldTokenMax;
									switch(tk7[1]) {
									case 2:
										switch(tk7[2]) {
										case "case":case "default":
											throw "__break__";
											break;
										default:
											exprs1.push(this.parseFullExpr());
										}
										break;
									case 7:
										throw "__break__";
										break;
									default:
										exprs1.push(this.parseFullExpr());
									}
								}
							} catch( e ) { if( e != "__break__" ) throw e; }
							if(exprs1.length == 1) def = exprs1[0]; else if(exprs1.length == 0) def = this.mk(hscript.ExprDef.EBlock([]),this.tokenMin,this.tokenMin); else def = this.mk(hscript.ExprDef.EBlock(exprs1),exprs1[0].pmin,exprs1[exprs1.length - 1].pmax);
							break;
						default:
							this.unexpected(tk7);
						}
						break;
					case 7:
						throw "__break__";
						break;
					default:
						this.unexpected(tk7);
					}
				}
			} catch( e ) { if( e != "__break__" ) throw e; }
			return this.mk(hscript.ExprDef.ESwitch(e8,cases,def),p1,this.tokenMax);
		default:
			return null;
		}
	}
	,parseExprNext: function(e1) {
		var tk = this.token();
		switch(tk[1]) {
		case 3:
			var op = tk[2];
			if(this.unops.get(op)) {
				if(this.isBlock(e1) || (function($this) {
					var $r;
					var _g = e1.e;
					$r = (function($this) {
						var $r;
						switch(_g[1]) {
						case 3:
							$r = true;
							break;
						default:
							$r = false;
						}
						return $r;
					}($this));
					return $r;
				}(this))) {
					this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
					this.tokenMin = this.oldTokenMin;
					this.tokenMax = this.oldTokenMax;
					return e1;
				}
				return this.parseExprNext(this.mk(hscript.ExprDef.EUnop(op,false,e1),e1.pmin,null));
			}
			return this.makeBinop(op,e1,this.parseExpr());
		case 8:
			tk = this.token();
			var field = null;
			switch(tk[1]) {
			case 2:
				var id = tk[2];
				field = id;
				break;
			default:
				this.unexpected(tk);
			}
			return this.parseExprNext(this.mk(hscript.ExprDef.EField(e1,field),e1.pmin,null));
		case 4:
			return this.parseExprNext(this.mk(hscript.ExprDef.ECall(e1,this.parseExprList(hscript.Token.TPClose)),e1.pmin,null));
		case 11:
			var e2 = this.parseExpr();
			this.ensure(hscript.Token.TBkClose);
			return this.parseExprNext(this.mk(hscript.ExprDef.EArray(e1,e2),e1.pmin,null));
		case 13:
			var e21 = this.parseExpr();
			this.ensure(hscript.Token.TDoubleDot);
			var e3 = this.parseExpr();
			return this.mk(hscript.ExprDef.ETernary(e1,e21,e3),e1.pmin,e3.pmax);
		default:
			this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
			this.tokenMin = this.oldTokenMin;
			this.tokenMax = this.oldTokenMax;
			return e1;
		}
	}
	,parseType: function() {
		var t = this.token();
		switch(t[1]) {
		case 2:
			var v = t[2];
			var path = [v];
			while(true) {
				t = this.token();
				if(t != hscript.Token.TDot) break;
				t = this.token();
				switch(t[1]) {
				case 2:
					var v1 = t[2];
					path.push(v1);
					break;
				default:
					this.unexpected(t);
				}
			}
			var params = null;
			switch(t[1]) {
			case 3:
				var op = t[2];
				if(op == "<") {
					params = [];
					try {
						while(true) {
							params.push(this.parseType());
							t = this.token();
							switch(t[1]) {
							case 9:
								continue;
								break;
							case 3:
								var op1 = t[2];
								if(op1 == ">") throw "__break__";
								break;
							default:
							}
							this.unexpected(t);
						}
					} catch( e ) { if( e != "__break__" ) throw e; }
				} else {
					this.tokens.push({ t : t, min : this.tokenMin, max : this.tokenMax});
					this.tokenMin = this.oldTokenMin;
					this.tokenMax = this.oldTokenMax;
				}
				break;
			default:
				this.tokens.push({ t : t, min : this.tokenMin, max : this.tokenMax});
				this.tokenMin = this.oldTokenMin;
				this.tokenMax = this.oldTokenMax;
			}
			return this.parseTypeNext(hscript.CType.CTPath(path,params));
		case 4:
			var t1 = this.parseType();
			this.ensure(hscript.Token.TPClose);
			return this.parseTypeNext(hscript.CType.CTParent(t1));
		case 6:
			var fields = [];
			try {
				while(true) {
					t = this.token();
					switch(t[1]) {
					case 7:
						throw "__break__";
						break;
					case 2:
						var name = t[2];
						this.ensure(hscript.Token.TDoubleDot);
						fields.push({ name : name, t : this.parseType()});
						t = this.token();
						switch(t[1]) {
						case 9:
							break;
						case 7:
							throw "__break__";
							break;
						default:
							this.unexpected(t);
						}
						break;
					default:
						this.unexpected(t);
					}
				}
			} catch( e ) { if( e != "__break__" ) throw e; }
			return this.parseTypeNext(hscript.CType.CTAnon(fields));
		default:
			return this.unexpected(t);
		}
	}
	,parseTypeNext: function(t) {
		var tk = this.token();
		switch(tk[1]) {
		case 3:
			var op = tk[2];
			if(op != "->") {
				this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
				this.tokenMin = this.oldTokenMin;
				this.tokenMax = this.oldTokenMax;
				return t;
			}
			break;
		default:
			this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
			this.tokenMin = this.oldTokenMin;
			this.tokenMax = this.oldTokenMax;
			return t;
		}
		var t2 = this.parseType();
		switch(t2[1]) {
		case 1:
			var args = t2[2];
			args.unshift(t);
			return t2;
		default:
			return hscript.CType.CTFun([t],t2);
		}
	}
	,parseExprList: function(etk) {
		var args = new Array();
		var tk = this.token();
		if(tk == etk) return args;
		this.tokens.push({ t : tk, min : this.tokenMin, max : this.tokenMax});
		this.tokenMin = this.oldTokenMin;
		this.tokenMax = this.oldTokenMax;
		try {
			while(true) {
				args.push(this.parseExpr());
				tk = this.token();
				switch(tk[1]) {
				case 9:
					break;
				default:
					if(tk == etk) throw "__break__";
					this.unexpected(tk);
				}
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		return args;
	}
	,readChar: function() {
		this.readPos++;
		try {
			return this.input.readByte();
		} catch( e ) {
			return 0;
		}
	}
	,readString: function(until) {
		var c = 0;
		var b = new haxe.io.BytesOutput();
		var esc = false;
		var old = this.line;
		var s = this.input;
		var p1 = this.readPos - 1;
		while(true) {
			try {
				this.readPos++;
				c = s.readByte();
			} catch( e ) {
				this.line = old;
				throw new hscript.Error(hscript.ErrorDef.EUnterminatedString,p1,p1);
			}
			if(esc) {
				esc = false;
				switch(c) {
				case 110:
					b.writeByte(10);
					break;
				case 114:
					b.writeByte(13);
					break;
				case 116:
					b.writeByte(9);
					break;
				case 39:case 34:case 92:
					b.writeByte(c);
					break;
				case 47:
					if(this.allowJSON) b.writeByte(c); else this.invalidChar(c);
					break;
				case 117:
					if(!this.allowJSON) throw this.invalidChar(c);
					var code = null;
					try {
						this.readPos++;
						this.readPos++;
						this.readPos++;
						this.readPos++;
						code = s.readString(4);
					} catch( e1 ) {
						this.line = old;
						throw new hscript.Error(hscript.ErrorDef.EUnterminatedString,p1,p1);
					}
					var k = 0;
					var _g = 0;
					while(_g < 4) {
						var i = _g++;
						k <<= 4;
						var $char = HxOverrides.cca(code,i);
						switch($char) {
						case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
							k += $char - 48;
							break;
						case 65:case 66:case 67:case 68:case 69:case 70:
							k += $char - 55;
							break;
						case 97:case 98:case 99:case 100:case 101:case 102:
							k += $char - 87;
							break;
						default:
							this.invalidChar($char);
						}
					}
					if(k <= 127) b.writeByte(k); else if(k <= 2047) {
						b.writeByte(192 | k >> 6);
						b.writeByte(128 | k & 63);
					} else {
						b.writeByte(224 | k >> 12);
						b.writeByte(128 | k >> 6 & 63);
						b.writeByte(128 | k & 63);
					}
					break;
				default:
					this.invalidChar(c);
				}
			} else if(c == 92) esc = true; else if(c == until) break; else {
				if(c == 10) this.line++;
				b.writeByte(c);
			}
		}
		return b.getBytes().toString();
	}
	,token: function() {
		var t = this.tokens.pop();
		if(t != null) {
			this.tokenMin = t.min;
			this.tokenMax = t.max;
			return t.t;
		}
		this.oldTokenMin = this.tokenMin;
		this.oldTokenMax = this.tokenMax;
		if(this["char"] < 0) this.tokenMin = this.readPos; else this.tokenMin = this.readPos - 1;
		var t1 = this._token();
		if(this["char"] < 0) this.tokenMax = this.readPos - 1; else this.tokenMax = this.readPos - 2;
		return t1;
	}
	,_token: function() {
		var $char;
		if(this["char"] < 0) $char = this.readChar(); else {
			$char = this["char"];
			this["char"] = -1;
		}
		while(true) {
			switch($char) {
			case 0:
				return hscript.Token.TEof;
			case 32:case 9:case 13:
				this.tokenMin++;
				break;
			case 10:
				this.line++;
				this.tokenMin++;
				break;
			case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
				var n = ($char - 48) * 1.0;
				var exp = 0.;
				while(true) {
					$char = this.readChar();
					exp *= 10;
					switch($char) {
					case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
						n = n * 10 + ($char - 48);
						break;
					case 46:
						if(exp > 0) {
							if(exp == 10 && this.readChar() == 46) {
								this.push(hscript.Token.TOp("..."));
								var i = n | 0;
								return hscript.Token.TConst(i == n?hscript.Const.CInt(i):hscript.Const.CFloat(n));
							}
							this.invalidChar($char);
						}
						exp = 1.;
						break;
					case 120:
						if(n > 0 || exp > 0) this.invalidChar($char);
						var n1 = 0;
						while(true) {
							$char = this.readChar();
							switch($char) {
							case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
								n1 = (n1 << 4) + $char - 48;
								break;
							case 65:case 66:case 67:case 68:case 69:case 70:
								n1 = (n1 << 4) + ($char - 55);
								break;
							case 97:case 98:case 99:case 100:case 101:case 102:
								n1 = (n1 << 4) + ($char - 87);
								break;
							default:
								this["char"] = $char;
								return hscript.Token.TConst(hscript.Const.CInt(n1));
							}
						}
						break;
					default:
						this["char"] = $char;
						var i1 = n | 0;
						return hscript.Token.TConst(exp > 0?hscript.Const.CFloat(n * 10 / exp):i1 == n?hscript.Const.CInt(i1):hscript.Const.CFloat(n));
					}
				}
				break;
			case 59:
				return hscript.Token.TSemicolon;
			case 40:
				return hscript.Token.TPOpen;
			case 41:
				return hscript.Token.TPClose;
			case 44:
				return hscript.Token.TComma;
			case 46:
				$char = this.readChar();
				switch($char) {
				case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
					var n2 = $char - 48;
					var exp1 = 1;
					while(true) {
						$char = this.readChar();
						exp1 *= 10;
						switch($char) {
						case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
							n2 = n2 * 10 + ($char - 48);
							break;
						default:
							this["char"] = $char;
							return hscript.Token.TConst(hscript.Const.CFloat(n2 / exp1));
						}
					}
					break;
				case 46:
					$char = this.readChar();
					if($char != 46) this.invalidChar($char);
					return hscript.Token.TOp("...");
				default:
					this["char"] = $char;
					return hscript.Token.TDot;
				}
				break;
			case 123:
				return hscript.Token.TBrOpen;
			case 125:
				return hscript.Token.TBrClose;
			case 91:
				return hscript.Token.TBkOpen;
			case 93:
				return hscript.Token.TBkClose;
			case 39:
				return hscript.Token.TConst(hscript.Const.CString(this.readString(39)));
			case 34:
				return hscript.Token.TConst(hscript.Const.CString(this.readString(34)));
			case 63:
				return hscript.Token.TQuestion;
			case 58:
				return hscript.Token.TDoubleDot;
			default:
				if(this.ops[$char]) {
					var op = String.fromCharCode($char);
					while(true) {
						$char = this.readChar();
						if(!this.ops[$char]) {
							if(HxOverrides.cca(op,0) == 47) return this.tokenComment(op,$char);
							this["char"] = $char;
							return hscript.Token.TOp(op);
						}
						op += String.fromCharCode($char);
					}
				}
				if(this.idents[$char]) {
					var id = String.fromCharCode($char);
					while(true) {
						$char = this.readChar();
						if(!this.idents[$char]) {
							this["char"] = $char;
							return hscript.Token.TId(id);
						}
						id += String.fromCharCode($char);
					}
				}
				this.invalidChar($char);
			}
			$char = this.readChar();
		}
		return null;
	}
	,tokenComment: function(op,$char) {
		var c = HxOverrides.cca(op,1);
		var s = this.input;
		if(c == 47) {
			try {
				while($char != 10 && $char != 13) {
					this.readPos++;
					$char = s.readByte();
				}
				this["char"] = $char;
			} catch( e ) {
			}
			return this.token();
		}
		if(c == 42) {
			var old = this.line;
			try {
				while(true) {
					while($char != 42) {
						if($char == 10) this.line++;
						this.readPos++;
						$char = s.readByte();
					}
					this.readPos++;
					$char = s.readByte();
					if($char == 47) break;
				}
			} catch( e1 ) {
				this.line = old;
				throw new hscript.Error(hscript.ErrorDef.EUnterminatedComment,this.tokenMin,this.tokenMin);
			}
			return this.token();
		}
		this["char"] = $char;
		return hscript.Token.TOp(op);
	}
	,constString: function(c) {
		switch(c[1]) {
		case 0:
			var v = c[2];
			if(v == null) return "null"; else return "" + v;
			break;
		case 1:
			var f = c[2];
			if(f == null) return "null"; else return "" + f;
			break;
		case 2:
			var s = c[2];
			return s;
		}
	}
	,tokenString: function(t) {
		switch(t[1]) {
		case 0:
			return "<eof>";
		case 1:
			var c = t[2];
			return this.constString(c);
		case 2:
			var s = t[2];
			return s;
		case 3:
			var s1 = t[2];
			return s1;
		case 4:
			return "(";
		case 5:
			return ")";
		case 6:
			return "{";
		case 7:
			return "}";
		case 8:
			return ".";
		case 9:
			return ",";
		case 10:
			return ";";
		case 11:
			return "[";
		case 12:
			return "]";
		case 13:
			return "?";
		case 14:
			return ":";
		}
	}
	,__class__: hscript.Parser
};
var js = {};
js.Boot = function() { };
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = true;
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js.Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js.Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js.Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js.Boot.__nativeClassName(o);
		if(name != null) return js.Boot.__resolveNativeClass(name);
		return null;
	}
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js.Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
js.Boot.__nativeClassName = function(o) {
	var name = js.Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js.Boot.__isNativeObj = function(o) {
	return js.Boot.__nativeClassName(o) != null;
};
js.Boot.__resolveNativeClass = function(name) {
	return (Function("return typeof " + name + " != \"undefined\" ? " + name + " : null"))();
};
lime.AssetCache = function() {
	this.enabled = true;
	this.audio = new haxe.ds.StringMap();
	this.font = new haxe.ds.StringMap();
	this.image = new haxe.ds.StringMap();
};
$hxClasses["lime.AssetCache"] = lime.AssetCache;
lime.AssetCache.__name__ = true;
lime.AssetCache.prototype = {
	clear: function(prefix) {
		if(prefix == null) {
			this.audio = new haxe.ds.StringMap();
			this.font = new haxe.ds.StringMap();
			this.image = new haxe.ds.StringMap();
		} else {
			var keys = this.audio.keys();
			while( keys.hasNext() ) {
				var key = keys.next();
				if(StringTools.startsWith(key,prefix)) this.audio.remove(key);
			}
			var keys1 = this.font.keys();
			while( keys1.hasNext() ) {
				var key1 = keys1.next();
				if(StringTools.startsWith(key1,prefix)) this.font.remove(key1);
			}
			var keys2 = this.image.keys();
			while( keys2.hasNext() ) {
				var key2 = keys2.next();
				if(StringTools.startsWith(key2,prefix)) this.image.remove(key2);
			}
		}
	}
	,__class__: lime.AssetCache
};
lime.Assets = function() { };
$hxClasses["lime.Assets"] = lime.Assets;
lime.Assets.__name__ = true;
lime.Assets.exists = function(id,type) {
	lime.Assets.initialize();
	if(type == null) type = "BINARY";
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) return library.exists(symbolName,type);
	return false;
};
lime.Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	lime.Assets.initialize();
	if(useCache && lime.Assets.cache.enabled && lime.Assets.cache.font.exists(id)) return lime.Assets.cache.font.get(id);
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"FONT")) {
			if(library.isLocal(symbolName,"FONT")) {
				var font = library.getFont(symbolName);
				if(useCache && lime.Assets.cache.enabled) lime.Assets.cache.font.set(id,font);
				return font;
			} else haxe.Log.trace("[Assets] Font asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 227, className : "lime.Assets", methodName : "getFont"});
		} else haxe.Log.trace("[Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 233, className : "lime.Assets", methodName : "getFont"});
	} else haxe.Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 239, className : "lime.Assets", methodName : "getFont"});
	return null;
};
lime.Assets.getImage = function(id,useCache) {
	if(useCache == null) useCache = true;
	lime.Assets.initialize();
	if(useCache && lime.Assets.cache.enabled && lime.Assets.cache.image.exists(id)) {
		var image = lime.Assets.cache.image.get(id);
		if(lime.Assets.isValidImage(image)) return image;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"IMAGE")) {
			if(library.isLocal(symbolName,"IMAGE")) {
				var image1 = library.getImage(symbolName);
				if(useCache && lime.Assets.cache.enabled) lime.Assets.cache.image.set(id,image1);
				return image1;
			} else haxe.Log.trace("[Assets] Image asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 297, className : "lime.Assets", methodName : "getImage"});
		} else haxe.Log.trace("[Assets] There is no Image asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 303, className : "lime.Assets", methodName : "getImage"});
	} else haxe.Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 309, className : "lime.Assets", methodName : "getImage"});
	return null;
};
lime.Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return lime.Assets.libraries.get(name);
};
lime.Assets.getText = function(id) {
	lime.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = lime.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,"TEXT")) {
			if(library.isLocal(symbolName,"TEXT")) return library.getText(symbolName); else haxe.Log.trace("[Assets] String asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 469, className : "lime.Assets", methodName : "getText"});
		} else haxe.Log.trace("[Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 475, className : "lime.Assets", methodName : "getText"});
	} else haxe.Log.trace("[Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 481, className : "lime.Assets", methodName : "getText"});
	return null;
};
lime.Assets.initialize = function() {
	if(!lime.Assets.initialized) {
		lime.Assets.registerLibrary("default",new DefaultAssetLibrary());
		lime.Assets.initialized = true;
	}
};
lime.Assets.isValidImage = function(buffer) {
	return true;
};
lime.Assets.registerLibrary = function(name,library) {
	if(lime.Assets.libraries.exists(name)) lime.Assets.unloadLibrary(name);
	if(library != null) library.eventCallback = lime.Assets.library_onEvent;
	lime.Assets.libraries.set(name,library);
};
lime.Assets.unloadLibrary = function(name) {
	lime.Assets.initialize();
	var library = lime.Assets.libraries.get(name);
	if(library != null) {
		lime.Assets.cache.clear(name + ":");
		library.unload();
		library.eventCallback = null;
	}
	lime.Assets.libraries.remove(name);
};
lime.Assets.library_onEvent = function(library,type) {
	if(type == "change") lime.Assets.cache.clear();
};
lime._backend = {};
lime._backend.html5 = {};
lime._backend.html5.HTML5Application = function(parent) {
	this.parent = parent;
	this.currentUpdate = 0;
	this.lastUpdate = 0;
	this.nextUpdate = 0;
	this.framePeriod = -1;
	lime.audio.AudioManager.init();
};
$hxClasses["lime._backend.html5.HTML5Application"] = lime._backend.html5.HTML5Application;
lime._backend.html5.HTML5Application.__name__ = true;
lime._backend.html5.HTML5Application.prototype = {
	convertKeyCode: function(keyCode) {
		if(keyCode >= 65 && keyCode <= 90) return keyCode + 32;
		switch(keyCode) {
		case 16:
			return 1073742049;
		case 17:
			return 1073742048;
		case 18:
			return 1073742050;
		case 20:
			return 1073741881;
		case 144:
			return 1073741907;
		case 37:
			return 1073741904;
		case 38:
			return 1073741906;
		case 39:
			return 1073741903;
		case 40:
			return 1073741905;
		case 45:
			return 1073741897;
		case 46:
			return 127;
		case 36:
			return 1073741898;
		case 35:
			return 1073741901;
		case 33:
			return 1073741899;
		case 34:
			return 1073741902;
		case 112:
			return 1073741882;
		case 113:
			return 1073741883;
		case 114:
			return 1073741884;
		case 115:
			return 1073741885;
		case 116:
			return 1073741886;
		case 117:
			return 1073741887;
		case 118:
			return 1073741888;
		case 119:
			return 1073741889;
		case 120:
			return 1073741890;
		case 121:
			return 1073741891;
		case 122:
			return 1073741892;
		case 123:
			return 1073741893;
		case 124:
			return 1073741928;
		case 125:
			return 1073741929;
		case 126:
			return 1073741930;
		case 186:
			return 59;
		case 187:
			return 61;
		case 188:
			return 44;
		case 189:
			return 45;
		case 190:
			return 46;
		case 191:
			return 47;
		case 192:
			return 96;
		case 219:
			return 91;
		case 220:
			return 92;
		case 221:
			return 93;
		case 222:
			return 39;
		}
		return keyCode;
	}
	,create: function(config) {
	}
	,exec: function() {
		window.addEventListener("keydown",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("keyup",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("focus",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("blur",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("resize",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("beforeunload",$bind(this,this.handleWindowEvent),false);
		
			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
			}
			
			if (!window.requestAnimationFrame)
				window.requestAnimationFrame = function(callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
					  timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
			
			if (!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};
			
			window.requestAnimFrame = window.requestAnimationFrame;
		;
		this.lastUpdate = new Date().getTime();
		this.handleApplicationEvent();
		return 0;
	}
	,exit: function() {
	}
	,handleApplicationEvent: function(__) {
		this.currentUpdate = new Date().getTime();
		if(this.currentUpdate >= this.nextUpdate) {
			this.deltaTime = this.currentUpdate - this.lastUpdate;
			var listeners = this.parent.onUpdate.listeners;
			var repeat = this.parent.onUpdate.repeat;
			var i = 0;
			while(i < listeners.length) {
				listeners[i](this.deltaTime | 0);
				if(!repeat[i]) this.parent.onUpdate.remove(listeners[i]); else i++;
			}
			if(this.parent.renderers[0] != null) {
				var listeners1 = this.parent.renderers[0].onRender.listeners;
				var repeat1 = this.parent.renderers[0].onRender.repeat;
				var i1 = 0;
				while(i1 < listeners1.length) {
					listeners1[i1]();
					if(!repeat1[i1]) this.parent.renderers[0].onRender.remove(listeners1[i1]); else i1++;
				}
				this.parent.renderers[0].flip();
			}
			if(this.framePeriod < 0) {
				this.nextUpdate = this.currentUpdate;
				this.nextUpdate = this.currentUpdate;
			} else this.nextUpdate = this.currentUpdate + this.framePeriod;
			this.lastUpdate = this.currentUpdate;
		}
		window.requestAnimationFrame($bind(this,this.handleApplicationEvent));
	}
	,handleKeyEvent: function(event) {
		if(this.parent.windows[0] != null) {
			var keyCode = this.convertKeyCode(event.keyCode != null?event.keyCode:event.which);
			var modifier;
			modifier = (event.shiftKey?3:0) | (event.ctrlKey?192:0) | (event.altKey?768:0) | (event.metaKey?3072:0);
			if(event.type == "keydown") {
				var listeners = this.parent.windows[0].onKeyDown.listeners;
				var repeat = this.parent.windows[0].onKeyDown.repeat;
				var i = 0;
				while(i < listeners.length) {
					listeners[i](keyCode,modifier);
					if(!repeat[i]) this.parent.windows[0].onKeyDown.remove(listeners[i]); else i++;
				}
			} else {
				var listeners1 = this.parent.windows[0].onKeyUp.listeners;
				var repeat1 = this.parent.windows[0].onKeyUp.repeat;
				var i1 = 0;
				while(i1 < listeners1.length) {
					listeners1[i1](keyCode,modifier);
					if(!repeat1[i1]) this.parent.windows[0].onKeyUp.remove(listeners1[i1]); else i1++;
				}
			}
		}
	}
	,handleWindowEvent: function(event) {
		if(this.parent.windows[0] != null) {
			var _g = event.type;
			switch(_g) {
			case "focus":
				var listeners = this.parent.windows[0].onFocusIn.listeners;
				var repeat = this.parent.windows[0].onFocusIn.repeat;
				var i = 0;
				while(i < listeners.length) {
					listeners[i]();
					if(!repeat[i]) this.parent.windows[0].onFocusIn.remove(listeners[i]); else i++;
				}
				var listeners1 = this.parent.windows[0].onActivate.listeners;
				var repeat1 = this.parent.windows[0].onActivate.repeat;
				var i1 = 0;
				while(i1 < listeners1.length) {
					listeners1[i1]();
					if(!repeat1[i1]) this.parent.windows[0].onActivate.remove(listeners1[i1]); else i1++;
				}
				break;
			case "blur":
				var listeners2 = this.parent.windows[0].onFocusOut.listeners;
				var repeat2 = this.parent.windows[0].onFocusOut.repeat;
				var i2 = 0;
				while(i2 < listeners2.length) {
					listeners2[i2]();
					if(!repeat2[i2]) this.parent.windows[0].onFocusOut.remove(listeners2[i2]); else i2++;
				}
				var listeners3 = this.parent.windows[0].onDeactivate.listeners;
				var repeat3 = this.parent.windows[0].onDeactivate.repeat;
				var i3 = 0;
				while(i3 < listeners3.length) {
					listeners3[i3]();
					if(!repeat3[i3]) this.parent.windows[0].onDeactivate.remove(listeners3[i3]); else i3++;
				}
				break;
			case "resize":
				var cacheWidth = this.parent.windows[0].__width;
				var cacheHeight = this.parent.windows[0].__height;
				this.parent.windows[0].backend.handleResize();
				if(this.parent.windows[0].__width != cacheWidth || this.parent.windows[0].__height != cacheHeight) {
					var listeners4 = this.parent.windows[0].onResize.listeners;
					var repeat4 = this.parent.windows[0].onResize.repeat;
					var i4 = 0;
					while(i4 < listeners4.length) {
						listeners4[i4](this.parent.windows[0].__width,this.parent.windows[0].__height);
						if(!repeat4[i4]) this.parent.windows[0].onResize.remove(listeners4[i4]); else i4++;
					}
				}
				break;
			case "beforeunload":
				var listeners5 = this.parent.windows[0].onClose.listeners;
				var repeat5 = this.parent.windows[0].onClose.repeat;
				var i5 = 0;
				while(i5 < listeners5.length) {
					listeners5[i5]();
					if(!repeat5[i5]) this.parent.windows[0].onClose.remove(listeners5[i5]); else i5++;
				}
				break;
			}
		}
	}
	,setFrameRate: function(value) {
		if(value >= 60) this.framePeriod = -1; else if(value > 0) this.framePeriod = 1000 / value; else this.framePeriod = 1000;
		return value;
	}
	,__class__: lime._backend.html5.HTML5Application
};
lime._backend.html5.HTML5Mouse = function() { };
$hxClasses["lime._backend.html5.HTML5Mouse"] = lime._backend.html5.HTML5Mouse;
lime._backend.html5.HTML5Mouse.__name__ = true;
lime._backend.html5.HTML5Mouse.__cursor = null;
lime._backend.html5.HTML5Mouse.__hidden = null;
lime._backend.html5.HTML5Mouse.set_cursor = function(value) {
	if(lime._backend.html5.HTML5Mouse.__cursor != value) {
		if(!lime._backend.html5.HTML5Mouse.__hidden) {
			var _g = 0;
			var _g1 = lime.app.Application.current.windows;
			while(_g < _g1.length) {
				var $window = _g1[_g];
				++_g;
				switch(value[1]) {
				case 0:
					$window.backend.element.style.cursor = "default";
					break;
				case 1:
					$window.backend.element.style.cursor = "crosshair";
					break;
				case 3:
					$window.backend.element.style.cursor = "move";
					break;
				case 4:
					$window.backend.element.style.cursor = "pointer";
					break;
				case 5:
					$window.backend.element.style.cursor = "nesw-resize";
					break;
				case 6:
					$window.backend.element.style.cursor = "ns-resize";
					break;
				case 7:
					$window.backend.element.style.cursor = "nwse-resize";
					break;
				case 8:
					$window.backend.element.style.cursor = "ew-resize";
					break;
				case 9:
					$window.backend.element.style.cursor = "text";
					break;
				case 10:
					$window.backend.element.style.cursor = "wait";
					break;
				case 11:
					$window.backend.element.style.cursor = "wait";
					break;
				default:
					$window.backend.element.style.cursor = "auto";
				}
			}
		}
		lime._backend.html5.HTML5Mouse.__cursor = value;
	}
	return lime._backend.html5.HTML5Mouse.__cursor;
};
lime._backend.html5.HTML5Renderer = function(parent) {
	this.parent = parent;
};
$hxClasses["lime._backend.html5.HTML5Renderer"] = lime._backend.html5.HTML5Renderer;
lime._backend.html5.HTML5Renderer.__name__ = true;
lime._backend.html5.HTML5Renderer.prototype = {
	create: function() {
		this.createContext();
		{
			var _g = this.parent.context;
			switch(_g[1]) {
			case 0:
				this.parent.window.backend.canvas.addEventListener("webglcontextlost",$bind(this,this.handleEvent),false);
				this.parent.window.backend.canvas.addEventListener("webglcontextrestored",$bind(this,this.handleEvent),false);
				break;
			default:
			}
		}
	}
	,createContext: function() {
		if(this.parent.window.backend.div != null) {
			this.parent.context = lime.graphics.RenderContext.DOM(this.parent.window.backend.div);
			this.parent.type = lime.graphics.RendererType.DOM;
		} else if(this.parent.window.backend.canvas != null) {
			var webgl = null;
			if(webgl == null) {
				this.parent.context = lime.graphics.RenderContext.CANVAS(this.parent.window.backend.canvas.getContext("2d"));
				this.parent.type = lime.graphics.RendererType.CANVAS;
			} else {
				lime.graphics.opengl.GL.context = webgl;
				this.parent.context = lime.graphics.RenderContext.OPENGL(lime.graphics.opengl.GL.context);
				this.parent.type = lime.graphics.RendererType.OPENGL;
			}
		}
	}
	,flip: function() {
	}
	,handleEvent: function(event) {
		var _g = event.type;
		switch(_g) {
		case "webglcontextlost":
			event.preventDefault();
			this.parent.context = null;
			var listeners = this.parent.onContextLost.listeners;
			var repeat = this.parent.onContextLost.repeat;
			var i = 0;
			while(i < listeners.length) {
				listeners[i]();
				if(!repeat[i]) this.parent.onContextLost.remove(listeners[i]); else i++;
			}
			break;
		case "webglcontextrestored":
			this.createContext();
			var listeners1 = this.parent.onContextRestored.listeners;
			var repeat1 = this.parent.onContextRestored.repeat;
			var i1 = 0;
			while(i1 < listeners1.length) {
				listeners1[i1](this.parent.context);
				if(!repeat1[i1]) this.parent.onContextRestored.remove(listeners1[i1]); else i1++;
			}
			break;
		default:
		}
	}
	,__class__: lime._backend.html5.HTML5Renderer
};
lime._backend.html5.HTML5Window = function(parent) {
	this.unusedTouchesPool = new List();
	this.currentTouches = new haxe.ds.IntMap();
	this.parent = parent;
	if(parent.config != null && Object.prototype.hasOwnProperty.call(parent.config,"element")) this.element = parent.config.element;
};
$hxClasses["lime._backend.html5.HTML5Window"] = lime._backend.html5.HTML5Window;
lime._backend.html5.HTML5Window.__name__ = true;
lime._backend.html5.HTML5Window.textInput = null;
lime._backend.html5.HTML5Window.prototype = {
	close: function() {
		this.parent.application.removeWindow(this.parent);
	}
	,create: function(application) {
		this.setWidth = this.parent.__width;
		this.setHeight = this.parent.__height;
		this.parent.id = lime._backend.html5.HTML5Window.windowID++;
		if(js.Boot.__instanceof(this.element,HTMLCanvasElement)) this.canvas = this.element; else this.canvas = window.document.createElement("canvas");
		if(this.canvas != null) {
			var style = this.canvas.style;
			style.setProperty("-webkit-transform","translateZ(0)",null);
			style.setProperty("transform","translateZ(0)",null);
		} else if(this.div != null) {
			var style1 = this.div.style;
			style1.setProperty("-webkit-transform","translate3D(0,0,0)",null);
			style1.setProperty("transform","translate3D(0,0,0)",null);
			style1.position = "relative";
			style1.overflow = "hidden";
			style1.setProperty("-webkit-user-select","none",null);
			style1.setProperty("-moz-user-select","none",null);
			style1.setProperty("-ms-user-select","none",null);
			style1.setProperty("-o-user-select","none",null);
		}
		if(this.parent.__width == 0 && this.parent.__height == 0) {
			if(this.element != null) {
				this.parent.set_width(this.element.clientWidth);
				this.parent.set_height(this.element.clientHeight);
			} else {
				this.parent.set_width(window.innerWidth);
				this.parent.set_height(window.innerHeight);
			}
			this.parent.set_fullscreen(true);
		}
		if(this.canvas != null) {
			this.canvas.width = this.parent.__width;
			this.canvas.height = this.parent.__height;
		} else {
			this.div.style.width = this.parent.__width + "px";
			this.div.style.height = this.parent.__height + "px";
		}
		this.handleResize();
		if(this.element != null) {
			if(this.canvas != null) {
				if(this.element != this.canvas) this.element.appendChild(this.canvas);
			} else this.element.appendChild(this.div);
			var events = ["mousedown","mouseenter","mouseleave","mousemove","mouseup","wheel"];
			var _g = 0;
			while(_g < events.length) {
				var event = events[_g];
				++_g;
				this.element.addEventListener(event,$bind(this,this.handleMouseEvent),true);
			}
			window.document.addEventListener("dragstart",function(e) {
				if(e.target.nodeName.toLowerCase() == "img") {
					e.preventDefault();
					return false;
				}
				return true;
			},false);
			this.element.addEventListener("touchstart",$bind(this,this.handleTouchEvent),true);
			this.element.addEventListener("touchmove",$bind(this,this.handleTouchEvent),true);
			this.element.addEventListener("touchend",$bind(this,this.handleTouchEvent),true);
		}
	}
	,getDisplay: function() {
		return lime.system.System.getDisplay(0);
	}
	,handleFocusEvent: function(event) {
		if(this.enableTextEvents) haxe.Timer.delay(function() {
			lime._backend.html5.HTML5Window.textInput.focus();
		},20);
	}
	,handleInputEvent: function(event) {
		if(lime._backend.html5.HTML5Window.textInput.value != "") {
			var listeners = this.parent.onTextInput.listeners;
			var repeat = this.parent.onTextInput.repeat;
			var i = 0;
			while(i < listeners.length) {
				listeners[i](lime._backend.html5.HTML5Window.textInput.value);
				if(!repeat[i]) this.parent.onTextInput.remove(listeners[i]); else i++;
			}
			lime._backend.html5.HTML5Window.textInput.value = "";
		}
	}
	,handleMouseEvent: function(event) {
		var x = 0.0;
		var y = 0.0;
		if(event.type != "wheel") {
			if(this.element != null) {
				if(this.canvas != null) {
					var rect = this.canvas.getBoundingClientRect();
					x = (event.clientX - rect.left) * (this.parent.__width / rect.width);
					y = (event.clientY - rect.top) * (this.parent.__height / rect.height);
				} else if(this.div != null) {
					var rect1 = this.div.getBoundingClientRect();
					x = event.clientX - rect1.left;
					y = event.clientY - rect1.top;
				} else {
					var rect2 = this.element.getBoundingClientRect();
					x = (event.clientX - rect2.left) * (this.parent.__width / rect2.width);
					y = (event.clientY - rect2.top) * (this.parent.__height / rect2.height);
				}
			} else {
				x = event.clientX;
				y = event.clientY;
			}
			var _g = event.type;
			switch(_g) {
			case "mousedown":
				var listeners = this.parent.onMouseDown.listeners;
				var repeat = this.parent.onMouseDown.repeat;
				var i = 0;
				while(i < listeners.length) {
					listeners[i](x,y,event.button);
					if(!repeat[i]) this.parent.onMouseDown.remove(listeners[i]); else i++;
				}
				break;
			case "mouseenter":
				var listeners1 = this.parent.onEnter.listeners;
				var repeat1 = this.parent.onEnter.repeat;
				var i1 = 0;
				while(i1 < listeners1.length) {
					listeners1[i1]();
					if(!repeat1[i1]) this.parent.onEnter.remove(listeners1[i1]); else i1++;
				}
				break;
			case "mouseleave":
				var listeners2 = this.parent.onLeave.listeners;
				var repeat2 = this.parent.onLeave.repeat;
				var i2 = 0;
				while(i2 < listeners2.length) {
					listeners2[i2]();
					if(!repeat2[i2]) this.parent.onLeave.remove(listeners2[i2]); else i2++;
				}
				break;
			case "mouseup":
				var listeners3 = this.parent.onMouseUp.listeners;
				var repeat3 = this.parent.onMouseUp.repeat;
				var i3 = 0;
				while(i3 < listeners3.length) {
					listeners3[i3](x,y,event.button);
					if(!repeat3[i3]) this.parent.onMouseUp.remove(listeners3[i3]); else i3++;
				}
				break;
			case "mousemove":
				var listeners4 = this.parent.onMouseMove.listeners;
				var repeat4 = this.parent.onMouseMove.repeat;
				var i4 = 0;
				while(i4 < listeners4.length) {
					listeners4[i4](x,y);
					if(!repeat4[i4]) this.parent.onMouseMove.remove(listeners4[i4]); else i4++;
				}
				break;
			default:
			}
		} else {
			var listeners5 = this.parent.onMouseWheel.listeners;
			var repeat5 = this.parent.onMouseWheel.repeat;
			var i5 = 0;
			while(i5 < listeners5.length) {
				listeners5[i5](event.deltaX,-event.deltaY);
				if(!repeat5[i5]) this.parent.onMouseWheel.remove(listeners5[i5]); else i5++;
			}
		}
	}
	,handleResize: function() {
		var stretch = this.parent.__fullscreen || this.setWidth == 0 && this.setHeight == 0;
		if(this.element != null && (this.div == null || this.div != null && stretch)) {
			if(stretch) {
				if(this.parent.__width != this.element.clientWidth || this.parent.__height != this.element.clientHeight) {
					this.parent.set_width(this.element.clientWidth);
					this.parent.set_height(this.element.clientHeight);
					if(this.canvas != null) {
						if(this.element != this.canvas) {
							this.canvas.width = this.element.clientWidth;
							this.canvas.height = this.element.clientHeight;
						}
					} else {
						this.div.style.width = this.element.clientWidth + "px";
						this.div.style.height = this.element.clientHeight + "px";
					}
				}
			} else {
				var scaleX = this.element.clientWidth / this.setWidth;
				var scaleY = this.element.clientHeight / this.setHeight;
				var currentRatio = scaleX / scaleY;
				var targetRatio = Math.min(scaleX,scaleY);
				if(this.canvas != null) {
					if(this.element != this.canvas) {
						this.canvas.style.width = this.setWidth * targetRatio + "px";
						this.canvas.style.height = this.setHeight * targetRatio + "px";
						this.canvas.style.marginLeft = (this.element.clientWidth - this.setWidth * targetRatio) / 2 + "px";
						this.canvas.style.marginTop = (this.element.clientHeight - this.setHeight * targetRatio) / 2 + "px";
					}
				} else {
					this.div.style.width = this.setWidth * targetRatio + "px";
					this.div.style.height = this.setHeight * targetRatio + "px";
					this.div.style.marginLeft = (this.element.clientWidth - this.setWidth * targetRatio) / 2 + "px";
					this.div.style.marginTop = (this.element.clientHeight - this.setHeight * targetRatio) / 2 + "px";
				}
			}
		}
	}
	,handleTouchEvent: function(event) {
		event.preventDefault();
		var rect = null;
		if(this.element != null) {
			if(this.canvas != null) rect = this.canvas.getBoundingClientRect(); else if(this.div != null) rect = this.div.getBoundingClientRect(); else rect = this.element.getBoundingClientRect();
		}
		var _g = 0;
		var _g1 = event.changedTouches;
		while(_g < _g1.length) {
			var data = _g1[_g];
			++_g;
			var x = 0.0;
			var y = 0.0;
			if(rect != null) {
				x = (data.clientX - rect.left) * (this.parent.__width / rect.width);
				y = (data.clientY - rect.top) * (this.parent.__height / rect.height);
			} else {
				x = data.clientX;
				y = data.clientY;
			}
			var _g2 = event.type;
			switch(_g2) {
			case "touchstart":
				var touch = this.unusedTouchesPool.pop();
				if(touch == null) touch = new lime.ui.Touch(x / this.setWidth,y / this.setHeight,data.identifier,0,0,data.force,this.parent.id); else {
					touch.x = x / this.setWidth;
					touch.y = y / this.setHeight;
					touch.id = data.identifier;
					touch.dx = 0;
					touch.dy = 0;
					touch.pressure = data.force;
					touch.device = this.parent.id;
				}
				this.currentTouches.set(data.identifier,touch);
				var listeners = lime.ui.Touch.onStart.listeners;
				var repeat = lime.ui.Touch.onStart.repeat;
				var i = 0;
				while(i < listeners.length) {
					listeners[i](touch);
					if(!repeat[i]) lime.ui.Touch.onStart.remove(listeners[i]); else i++;
				}
				if(data == event.touches[0]) {
					var listeners1 = this.parent.onMouseDown.listeners;
					var repeat1 = this.parent.onMouseDown.repeat;
					var i1 = 0;
					while(i1 < listeners1.length) {
						listeners1[i1](x,y,0);
						if(!repeat1[i1]) this.parent.onMouseDown.remove(listeners1[i1]); else i1++;
					}
				}
				break;
			case "touchend":
				var touch1 = this.currentTouches.get(data.identifier);
				if(touch1 != null) {
					var cacheX = touch1.x;
					var cacheY = touch1.y;
					touch1.x = x / this.setWidth;
					touch1.y = y / this.setHeight;
					touch1.dx = touch1.x - cacheX;
					touch1.dy = touch1.y - cacheY;
					touch1.pressure = data.force;
					var listeners2 = lime.ui.Touch.onEnd.listeners;
					var repeat2 = lime.ui.Touch.onEnd.repeat;
					var i2 = 0;
					while(i2 < listeners2.length) {
						listeners2[i2](touch1);
						if(!repeat2[i2]) lime.ui.Touch.onEnd.remove(listeners2[i2]); else i2++;
					}
					this.currentTouches.remove(data.identifier);
					this.unusedTouchesPool.add(touch1);
					if(data == event.touches[0]) {
						var listeners3 = this.parent.onMouseUp.listeners;
						var repeat3 = this.parent.onMouseUp.repeat;
						var i3 = 0;
						while(i3 < listeners3.length) {
							listeners3[i3](x,y,0);
							if(!repeat3[i3]) this.parent.onMouseUp.remove(listeners3[i3]); else i3++;
						}
					}
				}
				break;
			case "touchmove":
				var touch2 = this.currentTouches.get(data.identifier);
				if(touch2 != null) {
					var cacheX1 = touch2.x;
					var cacheY1 = touch2.y;
					touch2.x = x / this.setWidth;
					touch2.y = y / this.setHeight;
					touch2.dx = touch2.x - cacheX1;
					touch2.dy = touch2.y - cacheY1;
					touch2.pressure = data.force;
					var listeners4 = lime.ui.Touch.onMove.listeners;
					var repeat4 = lime.ui.Touch.onMove.repeat;
					var i4 = 0;
					while(i4 < listeners4.length) {
						listeners4[i4](touch2);
						if(!repeat4[i4]) lime.ui.Touch.onMove.remove(listeners4[i4]); else i4++;
					}
					if(data == event.touches[0]) {
						var listeners5 = this.parent.onMouseMove.listeners;
						var repeat5 = this.parent.onMouseMove.repeat;
						var i5 = 0;
						while(i5 < listeners5.length) {
							listeners5[i5](x,y);
							if(!repeat5[i5]) this.parent.onMouseMove.remove(listeners5[i5]); else i5++;
						}
					}
				}
				break;
			default:
			}
		}
	}
	,resize: function(width,height) {
	}
	,setEnableTextEvents: function(value) {
		if(value) {
			if(lime._backend.html5.HTML5Window.textInput == null) {
				lime._backend.html5.HTML5Window.textInput = window.document.createElement("input");
				lime._backend.html5.HTML5Window.textInput.type = "text";
				lime._backend.html5.HTML5Window.textInput.style.position = "absolute";
				lime._backend.html5.HTML5Window.textInput.style.opacity = "0";
				lime._backend.html5.HTML5Window.textInput.style.color = "transparent";
				lime._backend.html5.HTML5Window.textInput.value = "";
				lime._backend.html5.HTML5Window.textInput.autocapitalize = "off";
				lime._backend.html5.HTML5Window.textInput.autocorrect = "off";
				lime._backend.html5.HTML5Window.textInput.autocomplete = "off";
				lime._backend.html5.HTML5Window.textInput.style.left = "0px";
				lime._backend.html5.HTML5Window.textInput.style.top = "50%";
				if(new EReg("(iPad|iPhone|iPod).*OS 8_","gi").match(window.navigator.userAgent)) {
					lime._backend.html5.HTML5Window.textInput.style.fontSize = "0px";
					lime._backend.html5.HTML5Window.textInput.style.width = "0px";
					lime._backend.html5.HTML5Window.textInput.style.height = "0px";
				} else {
					lime._backend.html5.HTML5Window.textInput.style.width = "1px";
					lime._backend.html5.HTML5Window.textInput.style.height = "1px";
				}
				lime._backend.html5.HTML5Window.textInput.style.pointerEvents = "none";
				lime._backend.html5.HTML5Window.textInput.style.zIndex = "-10000000";
				window.document.body.appendChild(lime._backend.html5.HTML5Window.textInput);
			}
			if(!this.enableTextEvents) {
				lime._backend.html5.HTML5Window.textInput.addEventListener("input",$bind(this,this.handleInputEvent),true);
				lime._backend.html5.HTML5Window.textInput.addEventListener("blur",$bind(this,this.handleFocusEvent),true);
			}
			lime._backend.html5.HTML5Window.textInput.focus();
		} else if(lime._backend.html5.HTML5Window.textInput != null) {
			lime._backend.html5.HTML5Window.textInput.removeEventListener("input",$bind(this,this.handleInputEvent),true);
			lime._backend.html5.HTML5Window.textInput.removeEventListener("blur",$bind(this,this.handleFocusEvent),true);
			lime._backend.html5.HTML5Window.textInput.blur();
		}
		return this.enableTextEvents = value;
	}
	,setFullscreen: function(value) {
		return false;
	}
	,__class__: lime._backend.html5.HTML5Window
};
lime.app = {};
lime.app.IModule = function() { };
$hxClasses["lime.app.IModule"] = lime.app.IModule;
lime.app.IModule.__name__ = true;
lime.app.IModule.prototype = {
	__class__: lime.app.IModule
};
lime.app.Module = function() {
	this.onExit = new lime.app.Event();
};
$hxClasses["lime.app.Module"] = lime.app.Module;
lime.app.Module.__name__ = true;
lime.app.Module.__interfaces__ = [lime.app.IModule];
lime.app.Module.prototype = {
	onGamepadAxisMove: function(gamepad,axis,value) {
	}
	,onGamepadButtonDown: function(gamepad,button) {
	}
	,onGamepadButtonUp: function(gamepad,button) {
	}
	,onGamepadConnect: function(gamepad) {
	}
	,onGamepadDisconnect: function(gamepad) {
	}
	,onKeyDown: function(window,keyCode,modifier) {
	}
	,onKeyUp: function(window,keyCode,modifier) {
	}
	,onModuleExit: function(code) {
	}
	,onMouseDown: function(window,x,y,button) {
	}
	,onMouseMove: function(window,x,y) {
	}
	,onMouseMoveRelative: function(window,x,y) {
	}
	,onMouseUp: function(window,x,y,button) {
	}
	,onMouseWheel: function(window,deltaX,deltaY) {
	}
	,onPreloadComplete: function() {
	}
	,onPreloadProgress: function(loaded,total) {
	}
	,onRenderContextLost: function(renderer) {
	}
	,onRenderContextRestored: function(renderer,context) {
	}
	,onTextEdit: function(window,text,start,length) {
	}
	,onTextInput: function(window,text) {
	}
	,onTouchEnd: function(touch) {
	}
	,onTouchMove: function(touch) {
	}
	,onTouchStart: function(touch) {
	}
	,onWindowActivate: function(window) {
	}
	,onWindowClose: function(window) {
	}
	,onWindowCreate: function(window) {
	}
	,onWindowDeactivate: function(window) {
	}
	,onWindowEnter: function(window) {
	}
	,onWindowFocusIn: function(window) {
	}
	,onWindowFocusOut: function(window) {
	}
	,onWindowFullscreen: function(window) {
	}
	,onWindowLeave: function(window) {
	}
	,onWindowMove: function(window,x,y) {
	}
	,onWindowMinimize: function(window) {
	}
	,onWindowResize: function(window,width,height) {
	}
	,onWindowRestore: function(window) {
	}
	,render: function(renderer) {
	}
	,update: function(deltaTime) {
	}
	,__class__: lime.app.Module
};
lime.app.Application = function() {
	this.onUpdate = new lime.app.Event();
	lime.app.Module.call(this);
	if(lime.app.Application.current == null) lime.app.Application.current = this;
	this.modules = new Array();
	this.renderers = new Array();
	this.windows = new Array();
	this.windowByID = new haxe.ds.IntMap();
	this.backend = new lime._backend.html5.HTML5Application(this);
	this.onExit.add($bind(this,this.onModuleExit));
	this.onUpdate.add($bind(this,this.update));
	lime.ui.Gamepad.onConnect.add($bind(this,this.onGamepadConnect));
	lime.ui.Touch.onStart.add($bind(this,this.onTouchStart));
	lime.ui.Touch.onMove.add($bind(this,this.onTouchMove));
	lime.ui.Touch.onEnd.add($bind(this,this.onTouchEnd));
};
$hxClasses["lime.app.Application"] = lime.app.Application;
lime.app.Application.__name__ = true;
lime.app.Application.current = null;
lime.app.Application.__super__ = lime.app.Module;
lime.app.Application.prototype = $extend(lime.app.Module.prototype,{
	addModule: function(module) {
		this.modules.push(module);
		if(this.windows.length > 0) {
			var _g = 0;
			var _g1 = this.windows;
			while(_g < _g1.length) {
				var $window = _g1[_g];
				++_g;
				module.onWindowCreate($window);
			}
			if(this.preloader == null || this.preloader.complete) module.onPreloadComplete();
		}
	}
	,addRenderer: function(renderer) {
		renderer.onRender.add((function(f,a1) {
			return function() {
				return f(a1);
			};
		})($bind(this,this.render),renderer));
		renderer.onContextLost.add((function(f1,a11) {
			return function() {
				return f1(a11);
			};
		})($bind(this,this.onRenderContextLost),renderer));
		renderer.onContextRestored.add((function(f2,a12) {
			return function(a2) {
				return f2(a12,a2);
			};
		})($bind(this,this.onRenderContextRestored),renderer));
		this.renderers.push(renderer);
	}
	,createWindow: function(window) {
		window.onActivate.add((function(f,a1) {
			return function() {
				return f(a1);
			};
		})($bind(this,this.onWindowActivate),window));
		window.onClose.add((function(f1,a11) {
			return function() {
				return f1(a11);
			};
		})($bind(this,this.onWindowClose),window));
		window.onCreate.add((function(f2,a12) {
			return function() {
				return f2(a12);
			};
		})($bind(this,this.onWindowCreate),window));
		window.onDeactivate.add((function(f3,a13) {
			return function() {
				return f3(a13);
			};
		})($bind(this,this.onWindowDeactivate),window));
		window.onEnter.add((function(f4,a14) {
			return function() {
				return f4(a14);
			};
		})($bind(this,this.onWindowEnter),window));
		window.onFocusIn.add((function(f5,a15) {
			return function() {
				return f5(a15);
			};
		})($bind(this,this.onWindowFocusIn),window));
		window.onFocusOut.add((function(f6,a16) {
			return function() {
				return f6(a16);
			};
		})($bind(this,this.onWindowFocusOut),window));
		window.onFullscreen.add((function(f7,a17) {
			return function() {
				return f7(a17);
			};
		})($bind(this,this.onWindowFullscreen),window));
		window.onKeyDown.add((function(f8,a18) {
			return function(a2,a3) {
				return f8(a18,a2,a3);
			};
		})($bind(this,this.onKeyDown),window));
		window.onKeyUp.add((function(f9,a19) {
			return function(a21,a31) {
				return f9(a19,a21,a31);
			};
		})($bind(this,this.onKeyUp),window));
		window.onLeave.add((function(f10,a110) {
			return function() {
				return f10(a110);
			};
		})($bind(this,this.onWindowLeave),window));
		window.onMinimize.add((function(f11,a111) {
			return function() {
				return f11(a111);
			};
		})($bind(this,this.onWindowMinimize),window));
		window.onMouseDown.add((function(f12,a112) {
			return function(x,y,a22) {
				return f12(a112,x,y,a22);
			};
		})($bind(this,this.onMouseDown),window));
		window.onMouseMove.add((function(f13,a113) {
			return function(x1,y1) {
				return f13(a113,x1,y1);
			};
		})($bind(this,this.onMouseMove),window));
		window.onMouseMoveRelative.add((function(f14,a114) {
			return function(x2,y2) {
				return f14(a114,x2,y2);
			};
		})($bind(this,this.onMouseMoveRelative),window));
		window.onMouseUp.add((function(f15,a115) {
			return function(x3,y3,a23) {
				return f15(a115,x3,y3,a23);
			};
		})($bind(this,this.onMouseUp),window));
		window.onMouseWheel.add((function(f16,a116) {
			return function(a24,a32) {
				return f16(a116,a24,a32);
			};
		})($bind(this,this.onMouseWheel),window));
		window.onMove.add((function(f17,a117) {
			return function(x4,y4) {
				return f17(a117,x4,y4);
			};
		})($bind(this,this.onWindowMove),window));
		window.onResize.add((function(f18,a118) {
			return function(a25,a33) {
				return f18(a118,a25,a33);
			};
		})($bind(this,this.onWindowResize),window));
		window.onRestore.add((function(f19,a119) {
			return function() {
				return f19(a119);
			};
		})($bind(this,this.onWindowRestore),window));
		window.onTextEdit.add((function(f20,a120) {
			return function(a26,a34,a4) {
				return f20(a120,a26,a34,a4);
			};
		})($bind(this,this.onTextEdit),window));
		window.onTextInput.add((function(f21,a121) {
			return function(a27) {
				return f21(a121,a27);
			};
		})($bind(this,this.onTextInput),window));
		if(window.renderer == null) {
			var renderer = new lime.graphics.Renderer(window);
			this.addRenderer(renderer);
		}
		window.create(this);
		this.windows.push(window);
		this.windowByID.set(window.id,window);
		var listeners = window.onCreate.listeners;
		var repeat = window.onCreate.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i]();
			if(!repeat[i]) window.onCreate.remove(listeners[i]); else i++;
		}
	}
	,exec: function() {
		lime.app.Application.current = this;
		return this.backend.exec();
	}
	,onGamepadAxisMove: function(gamepad,axis,value) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onGamepadAxisMove(gamepad,axis,value);
		}
	}
	,onGamepadButtonDown: function(gamepad,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onGamepadButtonDown(gamepad,button);
		}
	}
	,onGamepadButtonUp: function(gamepad,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onGamepadButtonUp(gamepad,button);
		}
	}
	,onGamepadConnect: function(gamepad) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onGamepadConnect(gamepad);
		}
		gamepad.onAxisMove.add((function(f,a1) {
			return function(a2,a3) {
				return f(a1,a2,a3);
			};
		})($bind(this,this.onGamepadAxisMove),gamepad));
		gamepad.onButtonDown.add((function(f1,a11) {
			return function(a21) {
				return f1(a11,a21);
			};
		})($bind(this,this.onGamepadButtonDown),gamepad));
		gamepad.onButtonUp.add((function(f2,a12) {
			return function(a22) {
				return f2(a12,a22);
			};
		})($bind(this,this.onGamepadButtonUp),gamepad));
		gamepad.onDisconnect.add((function(f3,a13) {
			return function() {
				return f3(a13);
			};
		})($bind(this,this.onGamepadDisconnect),gamepad));
	}
	,onGamepadDisconnect: function(gamepad) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onGamepadDisconnect(gamepad);
		}
	}
	,onKeyDown: function(window,keyCode,modifier) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onKeyDown(window,keyCode,modifier);
		}
	}
	,onKeyUp: function(window,keyCode,modifier) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onKeyUp(window,keyCode,modifier);
		}
	}
	,onModuleExit: function(code) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onModuleExit(code);
		}
		this.backend.exit();
	}
	,onMouseDown: function(window,x,y,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseDown(window,x,y,button);
		}
	}
	,onMouseMove: function(window,x,y) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseMove(window,x,y);
		}
	}
	,onMouseMoveRelative: function(window,x,y) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseMoveRelative(window,x,y);
		}
	}
	,onMouseUp: function(window,x,y,button) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseUp(window,x,y,button);
		}
	}
	,onMouseWheel: function(window,deltaX,deltaY) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onMouseWheel(window,deltaX,deltaY);
		}
	}
	,onPreloadComplete: function() {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onPreloadComplete();
		}
	}
	,onPreloadProgress: function(loaded,total) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onPreloadProgress(loaded,total);
		}
	}
	,onRenderContextLost: function(renderer) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onRenderContextLost(renderer);
		}
	}
	,onRenderContextRestored: function(renderer,context) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onRenderContextRestored(renderer,context);
		}
	}
	,onTextEdit: function(window,text,start,length) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTextEdit(window,text,start,length);
		}
	}
	,onTextInput: function(window,text) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTextInput(window,text);
		}
	}
	,onTouchEnd: function(touch) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTouchEnd(touch);
		}
	}
	,onTouchMove: function(touch) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTouchMove(touch);
		}
	}
	,onTouchStart: function(touch) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onTouchStart(touch);
		}
	}
	,onWindowActivate: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowActivate(window);
		}
	}
	,onWindowClose: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowClose(window);
		}
		this.removeWindow(window);
	}
	,onWindowCreate: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowCreate(window);
		}
	}
	,onWindowDeactivate: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowDeactivate(window);
		}
	}
	,onWindowEnter: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowEnter(window);
		}
	}
	,onWindowFocusIn: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowFocusIn(window);
		}
	}
	,onWindowFocusOut: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowFocusOut(window);
		}
	}
	,onWindowFullscreen: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowFullscreen(window);
		}
	}
	,onWindowLeave: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowLeave(window);
		}
	}
	,onWindowMinimize: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowMinimize(window);
		}
	}
	,onWindowMove: function(window,x,y) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowMove(window,x,y);
		}
	}
	,onWindowResize: function(window,width,height) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowResize(window,width,height);
		}
	}
	,onWindowRestore: function(window) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.onWindowRestore(window);
		}
	}
	,removeWindow: function(window) {
		if(window != null && this.windowByID.exists(window.id)) {
			HxOverrides.remove(this.windows,window);
			this.windowByID.remove(window.id);
			window.close();
			if(this.windows[0] == window) this.window = null;
		}
	}
	,render: function(renderer) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.render(renderer);
		}
	}
	,setPreloader: function(preloader) {
		if(this.preloader != null) {
			this.preloader.onProgress.remove($bind(this,this.onPreloadProgress));
			this.preloader.onComplete.remove($bind(this,this.onPreloadComplete));
		}
		this.preloader = preloader;
		if(preloader.complete) this.onPreloadComplete(); else {
			preloader.onProgress.add($bind(this,this.onPreloadProgress));
			preloader.onComplete.add($bind(this,this.onPreloadComplete));
		}
	}
	,update: function(deltaTime) {
		var _g = 0;
		var _g1 = this.modules;
		while(_g < _g1.length) {
			var module = _g1[_g];
			++_g;
			module.update(deltaTime);
		}
	}
	,__class__: lime.app.Application
});
lime.app.Event = function() {
	this.listeners = new Array();
	this.priorities = new Array();
	this.repeat = new Array();
};
$hxClasses["lime.app.Event"] = lime.app.Event;
lime.app.Event.__name__ = true;
lime.app.Event.prototype = {
	add: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		var _g1 = 0;
		var _g = this.priorities.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(priority > this.priorities[i]) {
				this.listeners.splice(i,0,listener);
				this.priorities.splice(i,0,priority);
				this.repeat.splice(i,0,!once);
				return;
			}
		}
		this.listeners.push(listener);
		this.priorities.push(priority);
		this.repeat.push(!once);
	}
	,has: function(listener) {
		var _g = 0;
		var _g1 = this.listeners;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(Reflect.compareMethods(l,listener)) return true;
		}
		return false;
	}
	,remove: function(listener) {
		var i = this.listeners.length;
		while(--i >= 0) if(Reflect.compareMethods(this.listeners[i],listener)) {
			this.listeners.splice(i,1);
			this.priorities.splice(i,1);
			this.repeat.splice(i,1);
		}
	}
	,__class__: lime.app.Event
};
lime.app.Preloader = function() {
	this.total = 0;
	this.loaded = 0;
	this.onProgress = new lime.app.Event();
	this.onComplete = new lime.app.Event();
	this.onProgress.add($bind(this,this.update));
};
$hxClasses["lime.app.Preloader"] = lime.app.Preloader;
lime.app.Preloader.__name__ = true;
lime.app.Preloader.prototype = {
	create: function(config) {
	}
	,load: function(urls,types) {
		var url = null;
		var _g1 = 0;
		var _g = urls.length;
		while(_g1 < _g) {
			var i = _g1++;
			url = urls[i];
			var _g2 = types[i];
			switch(_g2) {
			case "IMAGE":
				var image = new Image();
				lime.app.Preloader.images.set(url,image);
				image.onload = $bind(this,this.image_onLoad);
				image.src = url;
				this.total++;
				break;
			case "BINARY":
				var loader = new lime.net.URLLoader();
				loader.set_dataFormat(lime.net.URLLoaderDataFormat.BINARY);
				lime.app.Preloader.loaders.set(url,loader);
				this.total++;
				break;
			case "TEXT":
				var loader1 = new lime.net.URLLoader();
				lime.app.Preloader.loaders.set(url,loader1);
				this.total++;
				break;
			case "FONT":
				this.total++;
				this.loadFont(url);
				break;
			default:
			}
		}
		var $it0 = lime.app.Preloader.loaders.keys();
		while( $it0.hasNext() ) {
			var url1 = $it0.next();
			var loader2 = lime.app.Preloader.loaders.get(url1);
			loader2.onComplete.add($bind(this,this.loader_onComplete));
			loader2.load(new lime.net.URLRequest(url1));
		}
		if(this.total == 0) this.start();
	}
	,loadFont: function(font) {
		var _g = this;
		if(window.document.fonts && window.document.fonts.load) window.document.fonts.load("1em '" + font + "'").then(function(_) {
			_g.loaded++;
			var listeners = _g.onProgress.listeners;
			var repeat = _g.onProgress.repeat;
			var i = 0;
			while(i < listeners.length) {
				listeners[i](_g.loaded,_g.total);
				if(!repeat[i]) _g.onProgress.remove(listeners[i]); else i++;
			}
			if(_g.loaded == _g.total) _g.start();
		}); else {
			var node = window.document.createElement("span");
			node.innerHTML = "giItT1WQy@!-/#";
			var style = node.style;
			style.position = "absolute";
			style.left = "-10000px";
			style.top = "-10000px";
			style.fontSize = "300px";
			style.fontFamily = "sans-serif";
			style.fontVariant = "normal";
			style.fontStyle = "normal";
			style.fontWeight = "normal";
			style.letterSpacing = "0";
			window.document.body.appendChild(node);
			var width = node.offsetWidth;
			style.fontFamily = "'" + font + "', sans-serif";
			var interval = null;
			var found = false;
			var checkFont = function() {
				if(node.offsetWidth != width) {
					if(!found) {
						found = true;
						return false;
					}
					_g.loaded++;
					if(interval != null) window.clearInterval(interval);
					node.parentNode.removeChild(node);
					node = null;
					var listeners1 = _g.onProgress.listeners;
					var repeat1 = _g.onProgress.repeat;
					var i1 = 0;
					while(i1 < listeners1.length) {
						listeners1[i1](_g.loaded,_g.total);
						if(!repeat1[i1]) _g.onProgress.remove(listeners1[i1]); else i1++;
					}
					if(_g.loaded == _g.total) _g.start();
					return true;
				}
				return false;
			};
			if(!checkFont()) interval = window.setInterval(checkFont,50);
		}
	}
	,start: function() {
		this.complete = true;
		var listeners = this.onComplete.listeners;
		var repeat = this.onComplete.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i]();
			if(!repeat[i]) this.onComplete.remove(listeners[i]); else i++;
		}
	}
	,update: function(loaded,total) {
	}
	,image_onLoad: function(_) {
		this.loaded++;
		var listeners = this.onProgress.listeners;
		var repeat = this.onProgress.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](this.loaded,this.total);
			if(!repeat[i]) this.onProgress.remove(listeners[i]); else i++;
		}
		if(this.loaded == this.total) this.start();
	}
	,loader_onComplete: function(loader) {
		this.loaded++;
		var listeners = this.onProgress.listeners;
		var repeat = this.onProgress.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](this.loaded,this.total);
			if(!repeat[i]) this.onProgress.remove(listeners[i]); else i++;
		}
		if(this.loaded == this.total) this.start();
	}
	,__class__: lime.app.Preloader
};
lime.audio = {};
lime.audio.ALAudioContext = function() { };
$hxClasses["lime.audio.ALAudioContext"] = lime.audio.ALAudioContext;
lime.audio.ALAudioContext.__name__ = true;
lime.audio.ALCAudioContext = function() { };
$hxClasses["lime.audio.ALCAudioContext"] = lime.audio.ALCAudioContext;
lime.audio.ALCAudioContext.__name__ = true;
lime.audio.AudioBuffer = function() { };
$hxClasses["lime.audio.AudioBuffer"] = lime.audio.AudioBuffer;
lime.audio.AudioBuffer.__name__ = true;
lime.audio.AudioContext = $hxClasses["lime.audio.AudioContext"] = { __ename__ : true, __constructs__ : ["OPENAL","HTML5","WEB","FLASH","CUSTOM"] };
lime.audio.AudioContext.OPENAL = function(alc,al) { var $x = ["OPENAL",0,alc,al]; $x.__enum__ = lime.audio.AudioContext; $x.toString = $estr; return $x; };
lime.audio.AudioContext.HTML5 = function(context) { var $x = ["HTML5",1,context]; $x.__enum__ = lime.audio.AudioContext; $x.toString = $estr; return $x; };
lime.audio.AudioContext.WEB = function(context) { var $x = ["WEB",2,context]; $x.__enum__ = lime.audio.AudioContext; $x.toString = $estr; return $x; };
lime.audio.AudioContext.FLASH = function(context) { var $x = ["FLASH",3,context]; $x.__enum__ = lime.audio.AudioContext; $x.toString = $estr; return $x; };
lime.audio.AudioContext.CUSTOM = function(data) { var $x = ["CUSTOM",4,data]; $x.__enum__ = lime.audio.AudioContext; $x.toString = $estr; return $x; };
lime.audio.AudioManager = function() { };
$hxClasses["lime.audio.AudioManager"] = lime.audio.AudioManager;
lime.audio.AudioManager.__name__ = true;
lime.audio.AudioManager.context = null;
lime.audio.AudioManager.init = function(context) {
	if(lime.audio.AudioManager.context == null) {
		if(context == null) try {
			window.AudioContext = window.AudioContext || window.webkitAudioContext;;
			lime.audio.AudioManager.context = lime.audio.AudioContext.WEB(new AudioContext ());
		} catch( e ) {
			lime.audio.AudioManager.context = lime.audio.AudioContext.HTML5(new lime.audio.HTML5AudioContext());
		} else lime.audio.AudioManager.context = context;
	}
};
lime.audio.FlashAudioContext = function() { };
$hxClasses["lime.audio.FlashAudioContext"] = lime.audio.FlashAudioContext;
lime.audio.FlashAudioContext.__name__ = true;
lime.audio.HTML5AudioContext = function() {
};
$hxClasses["lime.audio.HTML5AudioContext"] = lime.audio.HTML5AudioContext;
lime.audio.HTML5AudioContext.__name__ = true;
lime.audio.HTML5AudioContext.prototype = {
	__class__: lime.audio.HTML5AudioContext
};
lime.graphics = {};
lime.graphics.ConsoleRenderContext = function() { };
$hxClasses["lime.graphics.ConsoleRenderContext"] = lime.graphics.ConsoleRenderContext;
lime.graphics.ConsoleRenderContext.__name__ = true;
lime.graphics.FlashRenderContext = function() { };
$hxClasses["lime.graphics.FlashRenderContext"] = lime.graphics.FlashRenderContext;
lime.graphics.FlashRenderContext.__name__ = true;
lime.graphics.Image = function(buffer,offsetX,offsetY,width,height,color,type) {
	if(height == null) height = -1;
	if(width == null) width = -1;
	if(offsetY == null) offsetY = 0;
	if(offsetX == null) offsetX = 0;
	this.offsetX = offsetX;
	this.offsetY = offsetY;
	this.width = width;
	this.height = height;
	if(type == null) {
		if(lime.app.Application.current != null && lime.app.Application.current.renderers[0] != null) {
			var _g = lime.app.Application.current.renderers[0].context;
			switch(_g[1]) {
			case 2:case 1:
				this.type = lime.graphics.ImageType.CANVAS;
				break;
			case 3:
				this.type = lime.graphics.ImageType.FLASH;
				break;
			default:
				this.type = lime.graphics.ImageType.DATA;
			}
		} else this.type = lime.graphics.ImageType.DATA;
	} else this.type = type;
	if(buffer == null) {
		if(width > 0 && height > 0) {
			var _g1 = this.type;
			switch(_g1[1]) {
			case 0:
				this.buffer = new lime.graphics.ImageBuffer(null,width,height);
				lime.graphics.utils.ImageCanvasUtil.createCanvas(this,width,height);
				if(color != null) this.fillRect(new lime.math.Rectangle(0,0,width,height),color);
				break;
			case 1:
				this.buffer = new lime.graphics.ImageBuffer((function($this) {
					var $r;
					var elements = width * height * 4;
					var this1;
					if(elements != null) this1 = new Uint8Array(elements); else this1 = null;
					$r = this1;
					return $r;
				}(this)),width,height);
				if(color != null) this.fillRect(new lime.math.Rectangle(0,0,width,height),color);
				break;
			case 2:
				break;
			default:
			}
		}
	} else this.__fromImageBuffer(buffer);
};
$hxClasses["lime.graphics.Image"] = lime.graphics.Image;
lime.graphics.Image.__name__ = true;
lime.graphics.Image.fromCanvas = function(canvas) {
	if(canvas == null) return null;
	var buffer = new lime.graphics.ImageBuffer(null,canvas.width,canvas.height);
	buffer.set_src(canvas);
	return new lime.graphics.Image(buffer);
};
lime.graphics.Image.fromImageElement = function(image) {
	if(image == null) return null;
	var buffer = new lime.graphics.ImageBuffer(null,image.width,image.height);
	buffer.set_src(image);
	return new lime.graphics.Image(buffer);
};
lime.graphics.Image.prototype = {
	clone: function() {
		if(this.buffer != null) {
			if(this.type == lime.graphics.ImageType.CANVAS && this.buffer.__srcImage == null) {
				lime.graphics.utils.ImageCanvasUtil.convertToCanvas(this);
				lime.graphics.utils.ImageCanvasUtil.sync(this);
				this.buffer.data = null;
				this.buffer.__srcImageData = null;
			}
			var image = new lime.graphics.Image(this.buffer.clone(),this.offsetX,this.offsetY,this.width,this.height,null,this.type);
			image.dirty = this.dirty;
			return image;
		} else return new lime.graphics.Image(null,this.offsetX,this.offsetY,this.width,this.height,null,this.type);
	}
	,colorTransform: function(rect,colorMatrix) {
		rect = this.__clipRect(rect);
		if(this.buffer == null || rect == null) return;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.colorTransform(this,rect,colorMatrix);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageDataUtil.colorTransform(this,rect,colorMatrix);
			break;
		case 2:
			rect.offset(this.offsetX,this.offsetY);
			this.buffer.__srcBitmapData.colorTransform(rect.__toFlashRectangle(),lime.math._ColorMatrix.ColorMatrix_Impl_.__toFlashColorTransform(colorMatrix));
			break;
		default:
		}
	}
	,copyChannel: function(sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
		sourceRect = this.__clipRect(sourceRect);
		if(this.buffer == null || sourceRect == null) return;
		if(destChannel == lime.graphics.ImageChannel.ALPHA && !this.get_transparent()) return;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceImage.width) sourceRect.width = sourceImage.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceImage.height) sourceRect.height = sourceImage.height - sourceRect.y;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.copyChannel(this,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageDataUtil.copyChannel(this,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
			break;
		case 2:
			var srcChannel;
			switch(sourceChannel[1]) {
			case 0:
				srcChannel = 1;
				break;
			case 1:
				srcChannel = 2;
				break;
			case 2:
				srcChannel = 4;
				break;
			case 3:
				srcChannel = 8;
				break;
			}
			var dstChannel;
			switch(destChannel[1]) {
			case 0:
				dstChannel = 1;
				break;
			case 1:
				dstChannel = 2;
				break;
			case 2:
				dstChannel = 4;
				break;
			case 3:
				dstChannel = 8;
				break;
			}
			sourceRect.offset(sourceImage.offsetX,sourceImage.offsetY);
			destPoint.offset(this.offsetX,this.offsetY);
			this.buffer.__srcBitmapData.copyChannel(sourceImage.buffer.get_src(),sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),srcChannel,dstChannel);
			break;
		default:
		}
	}
	,copyPixels: function(sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(this.buffer == null || sourceImage == null) return;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(this.width <= 0 || this.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceImage.width) sourceRect.width = sourceImage.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceImage.height) sourceRect.height = sourceImage.height - sourceRect.y;
		if(sourceRect.x < 0) {
			sourceRect.width += sourceRect.x;
			sourceRect.x = 0;
		}
		if(sourceRect.y < 0) {
			sourceRect.height += sourceRect.y;
			sourceRect.y = 0;
		}
		if(destPoint.x + sourceRect.width > this.width) sourceRect.width = this.width - destPoint.x;
		if(destPoint.y + sourceRect.height > this.height) sourceRect.height = this.height - destPoint.y;
		if(destPoint.x < 0) {
			sourceRect.width += destPoint.x;
			sourceRect.x = -destPoint.x;
			destPoint.x = 0;
		}
		if(destPoint.y < 0) {
			sourceRect.height += destPoint.y;
			sourceRect.y = -destPoint.y;
			destPoint.y = 0;
		}
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.convertToCanvas(this);
			lime.graphics.utils.ImageCanvasUtil.copyPixels(this,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageCanvasUtil.convertToData(sourceImage);
			lime.graphics.utils.ImageDataUtil.copyPixels(this,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha);
			break;
		case 2:
			sourceRect.offset(sourceImage.offsetX,sourceImage.offsetY);
			destPoint.offset(this.offsetX,this.offsetY);
			if(alphaImage != null && alphaPoint != null) alphaPoint.offset(alphaImage.offsetX,alphaImage.offsetY);
			this.buffer.__srcBitmapData.copyPixels(sourceImage.buffer.__srcBitmapData,sourceRect.__toFlashRectangle(),destPoint.__toFlashPoint(),alphaImage != null?alphaImage.buffer.get_src():null,alphaPoint != null?alphaPoint.__toFlashPoint():null,mergeAlpha);
			break;
		default:
		}
	}
	,fillRect: function(rect,color,format) {
		rect = this.__clipRect(rect);
		if(this.buffer == null || rect == null) return;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.fillRect(this,rect,color,format);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageDataUtil.fillRect(this,rect,color,format);
			break;
		case 2:
			rect.offset(this.offsetX,this.offsetY);
			var argb;
			switch(format) {
			case 1:
				argb = color;
				break;
			case 2:
				var bgra = color;
				var argb1 = 0;
				argb1 = (bgra & 255 & 255) << 24 | (bgra >> 8 & 255 & 255) << 16 | (bgra >> 16 & 255 & 255) << 8 | bgra >> 24 & 255 & 255;
				argb = argb1;
				break;
			default:
				var rgba = color;
				var argb2 = 0;
				argb2 = (rgba & 255 & 255) << 24 | (rgba >> 24 & 255 & 255) << 16 | (rgba >> 16 & 255 & 255) << 8 | rgba >> 8 & 255 & 255;
				argb = argb2;
			}
			this.buffer.__srcBitmapData.fillRect(rect.__toFlashRectangle(),argb);
			break;
		default:
		}
	}
	,getPixel: function(x,y,format) {
		if(this.buffer == null || x < 0 || y < 0 || x >= this.width || y >= this.height) return 0;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			return lime.graphics.utils.ImageCanvasUtil.getPixel(this,x,y,format);
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			return lime.graphics.utils.ImageDataUtil.getPixel(this,x,y,format);
		case 2:
			var color = this.buffer.__srcBitmapData.getPixel(x + this.offsetX,y + this.offsetY);
			switch(format) {
			case 1:
				return color;
			case 2:
				var bgra;
				var bgra1 = 0;
				bgra1 = (color & 255 & 255) << 24 | (color >> 8 & 255 & 255) << 16 | (color >> 16 & 255 & 255) << 8 | color >> 24 & 255 & 255;
				bgra = bgra1;
				return bgra;
			default:
				var rgba;
				var rgba1 = 0;
				rgba1 = (color >> 16 & 255 & 255) << 24 | (color >> 8 & 255 & 255) << 16 | (color & 255 & 255) << 8 | color >> 24 & 255 & 255;
				rgba = rgba1;
				return rgba;
			}
			break;
		default:
			return 0;
		}
	}
	,getPixel32: function(x,y,format) {
		if(this.buffer == null || x < 0 || y < 0 || x >= this.width || y >= this.height) return 0;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			return lime.graphics.utils.ImageCanvasUtil.getPixel32(this,x,y,format);
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			return lime.graphics.utils.ImageDataUtil.getPixel32(this,x,y,format);
		case 2:
			var color = this.buffer.__srcBitmapData.getPixel32(x + this.offsetX,y + this.offsetY);
			switch(format) {
			case 1:
				return color;
			case 2:
				var bgra;
				var bgra1 = 0;
				bgra1 = (color & 255 & 255) << 24 | (color >> 8 & 255 & 255) << 16 | (color >> 16 & 255 & 255) << 8 | color >> 24 & 255 & 255;
				bgra = bgra1;
				return bgra;
			default:
				var rgba;
				var rgba1 = 0;
				rgba1 = (color >> 16 & 255 & 255) << 24 | (color >> 8 & 255 & 255) << 16 | (color & 255 & 255) << 8 | color >> 24 & 255 & 255;
				rgba = rgba1;
				return rgba;
			}
			break;
		default:
			return 0;
		}
	}
	,setPixel32: function(x,y,color,format) {
		if(this.buffer == null || x < 0 || y < 0 || x >= this.width || y >= this.height) return;
		var _g = this.type;
		switch(_g[1]) {
		case 0:
			lime.graphics.utils.ImageCanvasUtil.setPixel32(this,x,y,color,format);
			break;
		case 1:
			lime.graphics.utils.ImageCanvasUtil.convertToData(this);
			lime.graphics.utils.ImageDataUtil.setPixel32(this,x,y,color,format);
			break;
		case 2:
			var argb;
			switch(format) {
			case 1:
				argb = color;
				break;
			case 2:
				var bgra = color;
				var argb1 = 0;
				argb1 = (bgra & 255 & 255) << 24 | (bgra >> 8 & 255 & 255) << 16 | (bgra >> 16 & 255 & 255) << 8 | bgra >> 24 & 255 & 255;
				argb = argb1;
				break;
			default:
				var rgba = color;
				var argb2 = 0;
				argb2 = (rgba & 255 & 255) << 24 | (rgba >> 24 & 255 & 255) << 16 | (rgba >> 16 & 255 & 255) << 8 | rgba >> 8 & 255 & 255;
				argb = argb2;
			}
			this.buffer.__srcBitmapData.setPixel32(x + this.offsetX,y + this.offsetY,argb);
			break;
		default:
		}
	}
	,__clipRect: function(r) {
		if(r == null) return null;
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= this.width) {
			r.width -= r.x + r.width - this.width;
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= this.height) {
			r.height -= r.y + r.height - this.height;
			if(r.height <= 0) return null;
		}
		return r;
	}
	,__fromImageBuffer: function(buffer) {
		this.buffer = buffer;
		if(buffer != null) {
			if(this.width == -1) this.width = buffer.width;
			if(this.height == -1) this.height = buffer.height;
		}
	}
	,get_data: function() {
		if(this.buffer.data == null && this.buffer.width > 0 && this.buffer.height > 0) {
			lime.graphics.utils.ImageCanvasUtil.convertToCanvas(this);
			lime.graphics.utils.ImageCanvasUtil.sync(this);
			lime.graphics.utils.ImageCanvasUtil.createImageData(this);
		}
		return this.buffer.data;
	}
	,get_format: function() {
		return this.buffer.format;
	}
	,set_format: function(value) {
		if(this.buffer.format != value) {
			var _g = this.type;
			switch(_g[1]) {
			case 1:
				lime.graphics.utils.ImageDataUtil.setFormat(this,value);
				break;
			default:
			}
		}
		return this.buffer.format = value;
	}
	,get_powerOfTwo: function() {
		return this.buffer.width != 0 && (this.buffer.width & ~this.buffer.width + 1) == this.buffer.width && (this.buffer.height != 0 && (this.buffer.height & ~this.buffer.height + 1) == this.buffer.height);
	}
	,get_premultiplied: function() {
		return this.buffer.premultiplied;
	}
	,set_premultiplied: function(value) {
		if(value && !this.buffer.premultiplied) {
			var _g = this.type;
			switch(_g[1]) {
			case 1:
				lime.graphics.utils.ImageCanvasUtil.convertToData(this);
				lime.graphics.utils.ImageDataUtil.multiplyAlpha(this);
				break;
			default:
			}
		} else if(!value && this.buffer.premultiplied) {
			var _g1 = this.type;
			switch(_g1[1]) {
			case 1:
				lime.graphics.utils.ImageCanvasUtil.convertToData(this);
				lime.graphics.utils.ImageDataUtil.unmultiplyAlpha(this);
				break;
			default:
			}
		}
		return value;
	}
	,get_rect: function() {
		return new lime.math.Rectangle(0,0,this.width,this.height);
	}
	,get_src: function() {
		if(this.buffer.__srcCanvas == null) lime.graphics.utils.ImageCanvasUtil.convertToCanvas(this);
		return this.buffer.get_src();
	}
	,get_transparent: function() {
		if(this.buffer == null) return false;
		return this.buffer.transparent;
	}
	,set_transparent: function(value) {
		if(this.buffer == null) return false;
		return this.buffer.transparent = value;
	}
	,__class__: lime.graphics.Image
};
lime.graphics.ImageBuffer = function(data,width,height,bitsPerPixel,format) {
	if(bitsPerPixel == null) bitsPerPixel = 32;
	if(height == null) height = 0;
	if(width == null) width = 0;
	this.data = data;
	this.width = width;
	this.height = height;
	this.bitsPerPixel = bitsPerPixel;
	if(format == null) this.format = 0; else this.format = format;
	this.transparent = true;
};
$hxClasses["lime.graphics.ImageBuffer"] = lime.graphics.ImageBuffer;
lime.graphics.ImageBuffer.__name__ = true;
lime.graphics.ImageBuffer.prototype = {
	clone: function() {
		var buffer = new lime.graphics.ImageBuffer(this.data,this.width,this.height,this.bitsPerPixel);
		if(this.data != null) {
			var elements = this.data.byteLength;
			var this1;
			if(elements != null) this1 = new Uint8Array(elements); else this1 = null;
			buffer.data = this1;
			var copy;
			var view = this.data;
			var this2;
			if(view != null) this2 = new Uint8Array(view); else this2 = null;
			copy = this2;
			buffer.data.set(copy);
		} else if(this.__srcImageData != null) {
			buffer.__srcCanvas = window.document.createElement("canvas");
			buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
			buffer.__srcCanvas.width = this.__srcImageData.width;
			buffer.__srcCanvas.height = this.__srcImageData.height;
			buffer.__srcImageData = buffer.__srcContext.createImageData(this.__srcImageData.width,this.__srcImageData.height);
			var copy1 = new Uint8ClampedArray(this.__srcImageData.data);
			buffer.__srcImageData.data.set(copy1);
		} else if(this.__srcCanvas != null) {
			buffer.__srcCanvas = window.document.createElement("canvas");
			buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
			buffer.__srcCanvas.width = this.__srcCanvas.width;
			buffer.__srcCanvas.height = this.__srcCanvas.height;
			buffer.__srcContext.drawImage(this.__srcCanvas,0,0);
		} else buffer.__srcImage = this.__srcImage;
		buffer.bitsPerPixel = this.bitsPerPixel;
		buffer.format = this.format;
		buffer.premultiplied = this.premultiplied;
		buffer.transparent = this.transparent;
		return buffer;
	}
	,get_src: function() {
		if(this.__srcImage != null) return this.__srcImage;
		return this.__srcCanvas;
	}
	,set_src: function(value) {
		if(js.Boot.__instanceof(value,Image)) this.__srcImage = value; else if(js.Boot.__instanceof(value,HTMLCanvasElement)) {
			this.__srcCanvas = value;
			this.__srcContext = this.__srcCanvas.getContext("2d");
		}
		return value;
	}
	,get_stride: function() {
		return this.width * 4;
	}
	,__class__: lime.graphics.ImageBuffer
};
lime.graphics.ImageChannel = $hxClasses["lime.graphics.ImageChannel"] = { __ename__ : true, __constructs__ : ["RED","GREEN","BLUE","ALPHA"] };
lime.graphics.ImageChannel.RED = ["RED",0];
lime.graphics.ImageChannel.RED.toString = $estr;
lime.graphics.ImageChannel.RED.__enum__ = lime.graphics.ImageChannel;
lime.graphics.ImageChannel.GREEN = ["GREEN",1];
lime.graphics.ImageChannel.GREEN.toString = $estr;
lime.graphics.ImageChannel.GREEN.__enum__ = lime.graphics.ImageChannel;
lime.graphics.ImageChannel.BLUE = ["BLUE",2];
lime.graphics.ImageChannel.BLUE.toString = $estr;
lime.graphics.ImageChannel.BLUE.__enum__ = lime.graphics.ImageChannel;
lime.graphics.ImageChannel.ALPHA = ["ALPHA",3];
lime.graphics.ImageChannel.ALPHA.toString = $estr;
lime.graphics.ImageChannel.ALPHA.__enum__ = lime.graphics.ImageChannel;
lime.graphics.ImageType = $hxClasses["lime.graphics.ImageType"] = { __ename__ : true, __constructs__ : ["CANVAS","DATA","FLASH","CUSTOM"] };
lime.graphics.ImageType.CANVAS = ["CANVAS",0];
lime.graphics.ImageType.CANVAS.toString = $estr;
lime.graphics.ImageType.CANVAS.__enum__ = lime.graphics.ImageType;
lime.graphics.ImageType.DATA = ["DATA",1];
lime.graphics.ImageType.DATA.toString = $estr;
lime.graphics.ImageType.DATA.__enum__ = lime.graphics.ImageType;
lime.graphics.ImageType.FLASH = ["FLASH",2];
lime.graphics.ImageType.FLASH.toString = $estr;
lime.graphics.ImageType.FLASH.__enum__ = lime.graphics.ImageType;
lime.graphics.ImageType.CUSTOM = ["CUSTOM",3];
lime.graphics.ImageType.CUSTOM.toString = $estr;
lime.graphics.ImageType.CUSTOM.__enum__ = lime.graphics.ImageType;
lime.graphics.RenderContext = $hxClasses["lime.graphics.RenderContext"] = { __ename__ : true, __constructs__ : ["OPENGL","CANVAS","DOM","FLASH","CAIRO","CONSOLE","CUSTOM","NONE"] };
lime.graphics.RenderContext.OPENGL = function(gl) { var $x = ["OPENGL",0,gl]; $x.__enum__ = lime.graphics.RenderContext; $x.toString = $estr; return $x; };
lime.graphics.RenderContext.CANVAS = function(context) { var $x = ["CANVAS",1,context]; $x.__enum__ = lime.graphics.RenderContext; $x.toString = $estr; return $x; };
lime.graphics.RenderContext.DOM = function(element) { var $x = ["DOM",2,element]; $x.__enum__ = lime.graphics.RenderContext; $x.toString = $estr; return $x; };
lime.graphics.RenderContext.FLASH = function(stage) { var $x = ["FLASH",3,stage]; $x.__enum__ = lime.graphics.RenderContext; $x.toString = $estr; return $x; };
lime.graphics.RenderContext.CAIRO = function(cairo) { var $x = ["CAIRO",4,cairo]; $x.__enum__ = lime.graphics.RenderContext; $x.toString = $estr; return $x; };
lime.graphics.RenderContext.CONSOLE = function(context) { var $x = ["CONSOLE",5,context]; $x.__enum__ = lime.graphics.RenderContext; $x.toString = $estr; return $x; };
lime.graphics.RenderContext.CUSTOM = function(data) { var $x = ["CUSTOM",6,data]; $x.__enum__ = lime.graphics.RenderContext; $x.toString = $estr; return $x; };
lime.graphics.RenderContext.NONE = ["NONE",7];
lime.graphics.RenderContext.NONE.toString = $estr;
lime.graphics.RenderContext.NONE.__enum__ = lime.graphics.RenderContext;
lime.graphics.Renderer = function(window) {
	this.onRender = new lime.app.Event();
	this.onContextRestored = new lime.app.Event();
	this.onContextLost = new lime.app.Event();
	this.window = window;
	this.backend = new lime._backend.html5.HTML5Renderer(this);
	this.window.renderer = this;
};
$hxClasses["lime.graphics.Renderer"] = lime.graphics.Renderer;
lime.graphics.Renderer.__name__ = true;
lime.graphics.Renderer.prototype = {
	create: function() {
		this.backend.create();
	}
	,flip: function() {
		this.backend.flip();
	}
	,__class__: lime.graphics.Renderer
};
lime.graphics.RendererType = $hxClasses["lime.graphics.RendererType"] = { __ename__ : true, __constructs__ : ["OPENGL","CANVAS","DOM","FLASH","CAIRO","CONSOLE","CUSTOM"] };
lime.graphics.RendererType.OPENGL = ["OPENGL",0];
lime.graphics.RendererType.OPENGL.toString = $estr;
lime.graphics.RendererType.OPENGL.__enum__ = lime.graphics.RendererType;
lime.graphics.RendererType.CANVAS = ["CANVAS",1];
lime.graphics.RendererType.CANVAS.toString = $estr;
lime.graphics.RendererType.CANVAS.__enum__ = lime.graphics.RendererType;
lime.graphics.RendererType.DOM = ["DOM",2];
lime.graphics.RendererType.DOM.toString = $estr;
lime.graphics.RendererType.DOM.__enum__ = lime.graphics.RendererType;
lime.graphics.RendererType.FLASH = ["FLASH",3];
lime.graphics.RendererType.FLASH.toString = $estr;
lime.graphics.RendererType.FLASH.__enum__ = lime.graphics.RendererType;
lime.graphics.RendererType.CAIRO = ["CAIRO",4];
lime.graphics.RendererType.CAIRO.toString = $estr;
lime.graphics.RendererType.CAIRO.__enum__ = lime.graphics.RendererType;
lime.graphics.RendererType.CONSOLE = ["CONSOLE",5];
lime.graphics.RendererType.CONSOLE.toString = $estr;
lime.graphics.RendererType.CONSOLE.__enum__ = lime.graphics.RendererType;
lime.graphics.RendererType.CUSTOM = ["CUSTOM",6];
lime.graphics.RendererType.CUSTOM.toString = $estr;
lime.graphics.RendererType.CUSTOM.__enum__ = lime.graphics.RendererType;
lime.graphics.cairo = {};
lime.graphics.cairo.Cairo = function() { };
$hxClasses["lime.graphics.cairo.Cairo"] = lime.graphics.cairo.Cairo;
lime.graphics.cairo.Cairo.__name__ = true;
lime.graphics.cairo.Cairo.prototype = {
	arc: function(xc,yc,radius,angle1,angle2) {
	}
	,clip: function() {
	}
	,curveTo: function(x1,y1,x2,y2,x3,y3) {
	}
	,fill: function() {
	}
	,identityMatrix: function() {
	}
	,lineTo: function(x,y) {
	}
	,moveTo: function(x,y) {
	}
	,newPath: function() {
	}
	,paint: function() {
	}
	,paintWithAlpha: function(alpha) {
	}
	,popGroupToSource: function() {
	}
	,pushGroup: function() {
	}
	,rectangle: function(x,y,width,height) {
	}
	,restore: function() {
	}
	,save: function() {
	}
	,setSourceRGB: function(r,g,b) {
	}
	,get_currentPoint: function() {
		return null;
	}
	,get_hasCurrentPoint: function() {
		return false;
	}
	,set_matrix: function(value) {
		return value;
	}
	,set_source: function(value) {
		return value;
	}
	,__class__: lime.graphics.cairo.Cairo
};
lime.graphics.cairo._CairoImageSurface = {};
lime.graphics.cairo._CairoImageSurface.CairoImageSurface_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoImageSurface.CairoImageSurface_Impl_"] = lime.graphics.cairo._CairoImageSurface.CairoImageSurface_Impl_;
lime.graphics.cairo._CairoImageSurface.CairoImageSurface_Impl_.__name__ = true;
lime.graphics.cairo._CairoImageSurface.CairoImageSurface_Impl_.fromImage = function(image) {
	return null;
};
lime.graphics.cairo._CairoPattern = {};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoPattern.CairoPattern_Impl_"] = lime.graphics.cairo._CairoPattern.CairoPattern_Impl_;
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.__name__ = true;
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.createForSurface = function(surface) {
	return 0;
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.destroy = function(this1) {
};
lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.set_filter = function(this1,value) {
	return value;
};
lime.graphics.cairo._CairoSurface = {};
lime.graphics.cairo._CairoSurface.CairoSurface_Impl_ = function() { };
$hxClasses["lime.graphics.cairo._CairoSurface.CairoSurface_Impl_"] = lime.graphics.cairo._CairoSurface.CairoSurface_Impl_;
lime.graphics.cairo._CairoSurface.CairoSurface_Impl_.__name__ = true;
lime.graphics.cairo._CairoSurface.CairoSurface_Impl_.flush = function(this1) {
};
lime.graphics.opengl = {};
lime.graphics.opengl.GL = function() { };
$hxClasses["lime.graphics.opengl.GL"] = lime.graphics.opengl.GL;
lime.graphics.opengl.GL.__name__ = true;
lime.graphics.opengl.GL.context = null;
lime.graphics.utils = {};
lime.graphics.utils.ImageCanvasUtil = function() { };
$hxClasses["lime.graphics.utils.ImageCanvasUtil"] = lime.graphics.utils.ImageCanvasUtil;
lime.graphics.utils.ImageCanvasUtil.__name__ = true;
lime.graphics.utils.ImageCanvasUtil.colorTransform = function(image,rect,colorMatrix) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	lime.graphics.utils.ImageDataUtil.colorTransform(image,rect,colorMatrix);
};
lime.graphics.utils.ImageCanvasUtil.convertToCanvas = function(image) {
	var buffer = image.buffer;
	if(buffer.__srcImage != null) {
		if(buffer.__srcCanvas == null) {
			lime.graphics.utils.ImageCanvasUtil.createCanvas(image,buffer.__srcImage.width,buffer.__srcImage.height);
			buffer.__srcContext.drawImage(buffer.__srcImage,0,0);
		}
		buffer.__srcImage = null;
	} else if(buffer.data != null && buffer.__srcCanvas == null) {
		lime.graphics.utils.ImageCanvasUtil.createCanvas(image,buffer.width,buffer.height);
		lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	}
};
lime.graphics.utils.ImageCanvasUtil.convertToData = function(image) {
	if(image.buffer.data == null) {
		lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
		lime.graphics.utils.ImageCanvasUtil.sync(image);
		lime.graphics.utils.ImageCanvasUtil.createImageData(image);
		image.buffer.__srcCanvas = null;
		image.buffer.__srcContext = null;
	}
};
lime.graphics.utils.ImageCanvasUtil.copyChannel = function(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(sourceImage);
	lime.graphics.utils.ImageCanvasUtil.createImageData(sourceImage);
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	lime.graphics.utils.ImageDataUtil.copyChannel(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel);
};
lime.graphics.utils.ImageCanvasUtil.copyPixels = function(image,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha) {
	if(mergeAlpha == null) mergeAlpha = false;
	if(destPoint == null || destPoint.x >= image.width || destPoint.y >= image.height || sourceRect == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
	if(alphaImage != null && alphaImage.get_transparent()) {
		if(alphaPoint == null) alphaPoint = new lime.math.Vector2();
		var tempData = image.clone();
		tempData.copyChannel(alphaImage,new lime.math.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new lime.math.Vector2(sourceRect.x,sourceRect.y),lime.graphics.ImageChannel.ALPHA,lime.graphics.ImageChannel.ALPHA);
		sourceImage = tempData;
	}
	lime.graphics.utils.ImageCanvasUtil.sync(image);
	if(!mergeAlpha) {
		if(image.get_transparent() && sourceImage.get_transparent()) image.buffer.__srcContext.clearRect(destPoint.x + image.offsetX,destPoint.y + image.offsetY,sourceRect.width + image.offsetX,sourceRect.height + image.offsetY);
	}
	lime.graphics.utils.ImageCanvasUtil.sync(sourceImage);
	if(sourceImage.buffer.get_src() != null) image.buffer.__srcContext.drawImage(sourceImage.buffer.get_src(),sourceRect.x + sourceImage.offsetX | 0,sourceRect.y + sourceImage.offsetY | 0,sourceRect.width | 0,sourceRect.height | 0,destPoint.x + image.offsetX | 0,destPoint.y + image.offsetY | 0,sourceRect.width | 0,sourceRect.height | 0);
};
lime.graphics.utils.ImageCanvasUtil.createCanvas = function(image,width,height) {
	var buffer = image.buffer;
	if(buffer.__srcCanvas == null) {
		buffer.__srcCanvas = window.document.createElement("canvas");
		buffer.__srcCanvas.width = width;
		buffer.__srcCanvas.height = height;
		if(!image.get_transparent()) {
			if(!image.get_transparent()) buffer.__srcCanvas.setAttribute("moz-opaque","true");
			buffer.__srcContext = buffer.__srcCanvas.getContext ("2d", { alpha: false });
		} else buffer.__srcContext = buffer.__srcCanvas.getContext("2d");
		buffer.__srcContext.mozImageSmoothingEnabled = false;
		buffer.__srcContext.webkitImageSmoothingEnabled = false;
		buffer.__srcContext.imageSmoothingEnabled = false;
	}
};
lime.graphics.utils.ImageCanvasUtil.createImageData = function(image) {
	var buffer = image.buffer;
	if(buffer.__srcImageData == null) {
		if(buffer.data == null) buffer.__srcImageData = buffer.__srcContext.getImageData(0,0,buffer.width,buffer.height); else {
			buffer.__srcImageData = buffer.__srcContext.createImageData(buffer.width,buffer.height);
			buffer.__srcImageData.data.set(buffer.data);
		}
		var elements = buffer.__srcImageData.data.buffer;
		var this1;
		if(elements != null) this1 = new Uint8Array(elements); else this1 = null;
		buffer.data = this1;
	}
};
lime.graphics.utils.ImageCanvasUtil.fillRect = function(image,rect,color,format) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.sync(image);
	if(rect.x == 0 && rect.y == 0 && rect.width == image.width && rect.height == image.height) {
		if(image.get_transparent() && (color & 255) == 0) {
			image.buffer.__srcCanvas.width = image.buffer.width;
			return;
		}
	}
	var r;
	var g;
	var b;
	var a;
	if(format == 1) {
		r = color >> 16 & 255;
		g = color >> 8 & 255;
		b = color & 255;
		if(image.get_transparent()) a = color >> 24 & 255; else a = 255;
	} else {
		r = color >> 24 & 255;
		g = color >> 16 & 255;
		b = color >> 8 & 255;
		if(image.get_transparent()) a = color & 255; else a = 255;
	}
	image.buffer.__srcContext.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
	image.buffer.__srcContext.fillRect(rect.x + image.offsetX,rect.y + image.offsetY,rect.width + image.offsetX,rect.height + image.offsetY);
};
lime.graphics.utils.ImageCanvasUtil.getPixel = function(image,x,y,format) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	return lime.graphics.utils.ImageDataUtil.getPixel(image,x,y,format);
};
lime.graphics.utils.ImageCanvasUtil.getPixel32 = function(image,x,y,format) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	return lime.graphics.utils.ImageDataUtil.getPixel32(image,x,y,format);
};
lime.graphics.utils.ImageCanvasUtil.setPixel32 = function(image,x,y,color,format) {
	lime.graphics.utils.ImageCanvasUtil.convertToCanvas(image);
	lime.graphics.utils.ImageCanvasUtil.createImageData(image);
	lime.graphics.utils.ImageDataUtil.setPixel32(image,x,y,color,format);
};
lime.graphics.utils.ImageCanvasUtil.sync = function(image) {
	if(image.dirty && image.buffer.__srcImageData != null && image.type != lime.graphics.ImageType.DATA) {
		image.buffer.__srcContext.putImageData(image.buffer.__srcImageData,0,0);
		image.buffer.data = null;
		image.dirty = false;
	}
};
lime.graphics.utils.ImageDataUtil = function() { };
$hxClasses["lime.graphics.utils.ImageDataUtil"] = lime.graphics.utils.ImageDataUtil;
lime.graphics.utils.ImageDataUtil.__name__ = true;
lime.graphics.utils.ImageDataUtil.colorTransform = function(image,rect,colorMatrix) {
	var data = image.buffer.data;
	if(data == null) return;
	var format = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	var dataView = new lime.graphics.utils._ImageDataUtil.ImageDataView(image,rect);
	var alphaTable = lime.math._ColorMatrix.ColorMatrix_Impl_.getAlphaTable(colorMatrix);
	var redTable = lime.math._ColorMatrix.ColorMatrix_Impl_.getRedTable(colorMatrix);
	var greenTable = lime.math._ColorMatrix.ColorMatrix_Impl_.getGreenTable(colorMatrix);
	var blueTable = lime.math._ColorMatrix.ColorMatrix_Impl_.getBlueTable(colorMatrix);
	var row;
	var offset;
	var pixel;
	var _g1 = 0;
	var _g = dataView.height;
	while(_g1 < _g) {
		var y = _g1++;
		row = dataView.offset + dataView.stride * y;
		var _g3 = 0;
		var _g2 = dataView.width;
		while(_g3 < _g2) {
			var x = _g3++;
			offset = row + x * 4;
			switch(format) {
			case 2:
				pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
				break;
			case 0:
				pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
				break;
			case 1:
				pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
				break;
			}
			if(premultiplied) {
				if((pixel & 255) != 0 && (pixel & 255) != 255) {
					lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (pixel & 255);
					var r;
					var idx = Math.round((pixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
					r = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx];
					var g;
					var idx1 = Math.round((pixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
					g = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx1];
					var b;
					var idx2 = Math.round((pixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
					b = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx2];
					pixel = (r & 255) << 24 | (g & 255) << 16 | (b & 255) << 8 | pixel & 255 & 255;
				}
			}
			pixel = (redTable[pixel >> 24 & 255] & 255) << 24 | (greenTable[pixel >> 16 & 255] & 255) << 16 | (blueTable[pixel >> 8 & 255] & 255) << 8 | alphaTable[pixel & 255] & 255;
			if(premultiplied) {
				if((pixel & 255) == 0) {
					if(pixel != 0) pixel = 0;
				} else if((pixel & 255) != 255) {
					lime.math.color._RGBA.RGBA_Impl_.a16 = lime.math.color._RGBA.RGBA_Impl_.__alpha16[pixel & 255];
					pixel = ((pixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 24 | ((pixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 16 | ((pixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 8 | pixel & 255 & 255;
				}
			}
			switch(format) {
			case 2:
				data[offset] = pixel >> 8 & 255;
				data[offset + 1] = pixel >> 16 & 255;
				data[offset + 2] = pixel >> 24 & 255;
				data[offset + 3] = pixel & 255;
				break;
			case 0:
				data[offset] = pixel >> 24 & 255;
				data[offset + 1] = pixel >> 16 & 255;
				data[offset + 2] = pixel >> 8 & 255;
				data[offset + 3] = pixel & 255;
				break;
			case 1:
				data[offset] = pixel & 255;
				data[offset + 1] = pixel >> 24 & 255;
				data[offset + 2] = pixel >> 16 & 255;
				data[offset + 3] = pixel >> 8 & 255;
				break;
			}
		}
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.copyChannel = function(image,sourceImage,sourceRect,destPoint,sourceChannel,destChannel) {
	var destIdx;
	switch(destChannel[1]) {
	case 0:
		destIdx = 0;
		break;
	case 1:
		destIdx = 1;
		break;
	case 2:
		destIdx = 2;
		break;
	case 3:
		destIdx = 3;
		break;
	}
	var srcIdx;
	switch(sourceChannel[1]) {
	case 0:
		srcIdx = 0;
		break;
	case 1:
		srcIdx = 1;
		break;
	case 2:
		srcIdx = 2;
		break;
	case 3:
		srcIdx = 3;
		break;
	}
	var srcData = sourceImage.buffer.data;
	var destData = image.buffer.data;
	if(srcData == null || destData == null) return;
	var srcView = new lime.graphics.utils._ImageDataUtil.ImageDataView(sourceImage,sourceRect);
	var destView = new lime.graphics.utils._ImageDataUtil.ImageDataView(image,new lime.math.Rectangle(destPoint.x,destPoint.y,srcView.width,srcView.height));
	var srcFormat = sourceImage.buffer.format;
	var destFormat = image.buffer.format;
	var srcPremultiplied = sourceImage.buffer.premultiplied;
	var destPremultiplied = image.buffer.premultiplied;
	var srcPosition;
	var destPosition;
	var srcPixel;
	var destPixel;
	var value = 0;
	var _g1 = 0;
	var _g = destView.height;
	while(_g1 < _g) {
		var y = _g1++;
		srcPosition = srcView.offset + srcView.stride * y;
		destPosition = destView.offset + destView.stride * y;
		var _g3 = 0;
		var _g2 = destView.width;
		while(_g3 < _g2) {
			var x = _g3++;
			switch(srcFormat) {
			case 2:
				srcPixel = (srcData[srcPosition + 2] & 255) << 24 | (srcData[srcPosition + 1] & 255) << 16 | (srcData[srcPosition] & 255) << 8 | srcData[srcPosition + 3] & 255;
				break;
			case 0:
				srcPixel = (srcData[srcPosition] & 255) << 24 | (srcData[srcPosition + 1] & 255) << 16 | (srcData[srcPosition + 2] & 255) << 8 | srcData[srcPosition + 3] & 255;
				break;
			case 1:
				srcPixel = (srcData[srcPosition + 1] & 255) << 24 | (srcData[srcPosition + 2] & 255) << 16 | (srcData[srcPosition + 3] & 255) << 8 | srcData[srcPosition] & 255;
				break;
			}
			if(srcPremultiplied) {
				if((srcPixel & 255) != 0 && (srcPixel & 255) != 255) {
					lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (srcPixel & 255);
					var r;
					var idx = Math.round((srcPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
					r = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx];
					var g;
					var idx1 = Math.round((srcPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
					g = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx1];
					var b;
					var idx2 = Math.round((srcPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
					b = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx2];
					srcPixel = (r & 255) << 24 | (g & 255) << 16 | (b & 255) << 8 | srcPixel & 255 & 255;
				}
			}
			switch(destFormat) {
			case 2:
				destPixel = (destData[destPosition + 2] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition] & 255) << 8 | destData[destPosition + 3] & 255;
				break;
			case 0:
				destPixel = (destData[destPosition] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition + 2] & 255) << 8 | destData[destPosition + 3] & 255;
				break;
			case 1:
				destPixel = (destData[destPosition + 1] & 255) << 24 | (destData[destPosition + 2] & 255) << 16 | (destData[destPosition + 3] & 255) << 8 | destData[destPosition] & 255;
				break;
			}
			if(destPremultiplied) {
				if((destPixel & 255) != 0 && (destPixel & 255) != 255) {
					lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (destPixel & 255);
					var r1;
					var idx3 = Math.round((destPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
					r1 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx3];
					var g1;
					var idx4 = Math.round((destPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
					g1 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx4];
					var b1;
					var idx5 = Math.round((destPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
					b1 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx5];
					destPixel = (r1 & 255) << 24 | (g1 & 255) << 16 | (b1 & 255) << 8 | destPixel & 255 & 255;
				}
			}
			switch(srcIdx) {
			case 0:
				value = srcPixel >> 24 & 255;
				break;
			case 1:
				value = srcPixel >> 16 & 255;
				break;
			case 2:
				value = srcPixel >> 8 & 255;
				break;
			case 3:
				value = srcPixel & 255;
				break;
			}
			switch(destIdx) {
			case 0:
				destPixel = (value & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
				value;
				break;
			case 1:
				destPixel = (destPixel >> 24 & 255 & 255) << 24 | (value & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
				value;
				break;
			case 2:
				destPixel = (destPixel >> 24 & 255 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (value & 255) << 8 | destPixel & 255 & 255;
				value;
				break;
			case 3:
				destPixel = (destPixel >> 24 & 255 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | value & 255;
				value;
				break;
			}
			if(destPremultiplied) {
				if((destPixel & 255) == 0) {
					if(destPixel != 0) destPixel = 0;
				} else if((destPixel & 255) != 255) {
					lime.math.color._RGBA.RGBA_Impl_.a16 = lime.math.color._RGBA.RGBA_Impl_.__alpha16[destPixel & 255];
					destPixel = ((destPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 24 | ((destPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 16 | ((destPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
				}
			}
			switch(destFormat) {
			case 2:
				destData[destPosition] = destPixel >> 8 & 255;
				destData[destPosition + 1] = destPixel >> 16 & 255;
				destData[destPosition + 2] = destPixel >> 24 & 255;
				destData[destPosition + 3] = destPixel & 255;
				break;
			case 0:
				destData[destPosition] = destPixel >> 24 & 255;
				destData[destPosition + 1] = destPixel >> 16 & 255;
				destData[destPosition + 2] = destPixel >> 8 & 255;
				destData[destPosition + 3] = destPixel & 255;
				break;
			case 1:
				destData[destPosition] = destPixel & 255;
				destData[destPosition + 1] = destPixel >> 24 & 255;
				destData[destPosition + 2] = destPixel >> 16 & 255;
				destData[destPosition + 3] = destPixel >> 8 & 255;
				break;
			}
			srcPosition += 4;
			destPosition += 4;
		}
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.copyPixels = function(image,sourceImage,sourceRect,destPoint,alphaImage,alphaPoint,mergeAlpha) {
	if(mergeAlpha == null) mergeAlpha = false;
	var sourceData = sourceImage.buffer.data;
	var destData = image.buffer.data;
	if(sourceData == null || destData == null) return;
	var sourceView = new lime.graphics.utils._ImageDataUtil.ImageDataView(sourceImage,sourceRect);
	var destView = new lime.graphics.utils._ImageDataUtil.ImageDataView(image,new lime.math.Rectangle(destPoint.x,destPoint.y,sourceView.width,sourceView.height));
	var sourceFormat = sourceImage.buffer.format;
	var destFormat = image.buffer.format;
	var sourcePremultiplied = sourceImage.buffer.premultiplied;
	var destPremultiplied = image.buffer.premultiplied;
	var sourcePosition;
	var destPosition;
	var sourcePixel;
	if(!mergeAlpha || !sourceImage.get_transparent()) {
		var _g1 = 0;
		var _g = destView.height;
		while(_g1 < _g) {
			var y = _g1++;
			sourcePosition = sourceView.offset + sourceView.stride * y;
			destPosition = destView.offset + destView.stride * y;
			var _g3 = 0;
			var _g2 = destView.width;
			while(_g3 < _g2) {
				var x = _g3++;
				switch(sourceFormat) {
				case 2:
					sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
					break;
				case 0:
					sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
					break;
				case 1:
					sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
					break;
				}
				if(sourcePremultiplied) {
					if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
						lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (sourcePixel & 255);
						var r;
						var idx = Math.round((sourcePixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
						r = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx];
						var g;
						var idx1 = Math.round((sourcePixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
						g = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx1];
						var b;
						var idx2 = Math.round((sourcePixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
						b = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx2];
						sourcePixel = (r & 255) << 24 | (g & 255) << 16 | (b & 255) << 8 | sourcePixel & 255 & 255;
					}
				}
				if(destPremultiplied) {
					if((sourcePixel & 255) == 0) {
						if(sourcePixel != 0) sourcePixel = 0;
					} else if((sourcePixel & 255) != 255) {
						lime.math.color._RGBA.RGBA_Impl_.a16 = lime.math.color._RGBA.RGBA_Impl_.__alpha16[sourcePixel & 255];
						sourcePixel = ((sourcePixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 24 | ((sourcePixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 16 | ((sourcePixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 8 | sourcePixel & 255 & 255;
					}
				}
				switch(destFormat) {
				case 2:
					destData[destPosition] = sourcePixel >> 8 & 255;
					destData[destPosition + 1] = sourcePixel >> 16 & 255;
					destData[destPosition + 2] = sourcePixel >> 24 & 255;
					destData[destPosition + 3] = sourcePixel & 255;
					break;
				case 0:
					destData[destPosition] = sourcePixel >> 24 & 255;
					destData[destPosition + 1] = sourcePixel >> 16 & 255;
					destData[destPosition + 2] = sourcePixel >> 8 & 255;
					destData[destPosition + 3] = sourcePixel & 255;
					break;
				case 1:
					destData[destPosition] = sourcePixel & 255;
					destData[destPosition + 1] = sourcePixel >> 24 & 255;
					destData[destPosition + 2] = sourcePixel >> 16 & 255;
					destData[destPosition + 3] = sourcePixel >> 8 & 255;
					break;
				}
				sourcePosition += 4;
				destPosition += 4;
			}
		}
	} else {
		var sourceAlpha;
		var destAlpha;
		var oneMinusSourceAlpha;
		var blendAlpha;
		var destPixel;
		if(alphaImage == null) {
			var _g11 = 0;
			var _g4 = destView.height;
			while(_g11 < _g4) {
				var y1 = _g11++;
				sourcePosition = sourceView.offset + sourceView.stride * y1;
				destPosition = destView.offset + destView.stride * y1;
				var _g31 = 0;
				var _g21 = destView.width;
				while(_g31 < _g21) {
					var x1 = _g31++;
					switch(sourceFormat) {
					case 2:
						sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
						break;
					case 0:
						sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
						break;
					case 1:
						sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
						break;
					}
					if(sourcePremultiplied) {
						if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
							lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (sourcePixel & 255);
							var r1;
							var idx3 = Math.round((sourcePixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							r1 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx3];
							var g1;
							var idx4 = Math.round((sourcePixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							g1 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx4];
							var b1;
							var idx5 = Math.round((sourcePixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							b1 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx5];
							sourcePixel = (r1 & 255) << 24 | (g1 & 255) << 16 | (b1 & 255) << 8 | sourcePixel & 255 & 255;
						}
					}
					switch(destFormat) {
					case 2:
						destPixel = (destData[destPosition + 2] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition] & 255) << 8 | destData[destPosition + 3] & 255;
						break;
					case 0:
						destPixel = (destData[destPosition] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition + 2] & 255) << 8 | destData[destPosition + 3] & 255;
						break;
					case 1:
						destPixel = (destData[destPosition + 1] & 255) << 24 | (destData[destPosition + 2] & 255) << 16 | (destData[destPosition + 3] & 255) << 8 | destData[destPosition] & 255;
						break;
					}
					if(destPremultiplied) {
						if((destPixel & 255) != 0 && (destPixel & 255) != 255) {
							lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (destPixel & 255);
							var r2;
							var idx6 = Math.round((destPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							r2 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx6];
							var g2;
							var idx7 = Math.round((destPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							g2 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx7];
							var b2;
							var idx8 = Math.round((destPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							b2 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx8];
							destPixel = (r2 & 255) << 24 | (g2 & 255) << 16 | (b2 & 255) << 8 | destPixel & 255 & 255;
						}
					}
					sourceAlpha = (sourcePixel & 255) / 255.0;
					destAlpha = (destPixel & 255) / 255.0;
					oneMinusSourceAlpha = 1 - sourceAlpha;
					blendAlpha = sourceAlpha + destAlpha * oneMinusSourceAlpha;
					if(blendAlpha == 0) destPixel = 0; else {
						var value;
						var idx9 = Math.round(((sourcePixel >> 24 & 255) * sourceAlpha + (destPixel >> 24 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha);
						value = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx9];
						destPixel = (value & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
						value;
						var value1;
						var idx10 = Math.round(((sourcePixel >> 16 & 255) * sourceAlpha + (destPixel >> 16 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha);
						value1 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx10];
						destPixel = (destPixel >> 24 & 255 & 255) << 24 | (value1 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
						value1;
						var value2;
						var idx11 = Math.round(((sourcePixel >> 8 & 255) * sourceAlpha + (destPixel >> 8 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha);
						value2 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx11];
						destPixel = (destPixel >> 24 & 255 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (value2 & 255) << 8 | destPixel & 255 & 255;
						value2;
						var value3;
						var idx12 = Math.round(blendAlpha * 255.0);
						value3 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx12];
						destPixel = (destPixel >> 24 & 255 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | value3 & 255;
						value3;
					}
					if(destPremultiplied) {
						if((destPixel & 255) == 0) {
							if(destPixel != 0) destPixel = 0;
						} else if((destPixel & 255) != 255) {
							lime.math.color._RGBA.RGBA_Impl_.a16 = lime.math.color._RGBA.RGBA_Impl_.__alpha16[destPixel & 255];
							destPixel = ((destPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 24 | ((destPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 16 | ((destPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
						}
					}
					switch(destFormat) {
					case 2:
						destData[destPosition] = destPixel >> 8 & 255;
						destData[destPosition + 1] = destPixel >> 16 & 255;
						destData[destPosition + 2] = destPixel >> 24 & 255;
						destData[destPosition + 3] = destPixel & 255;
						break;
					case 0:
						destData[destPosition] = destPixel >> 24 & 255;
						destData[destPosition + 1] = destPixel >> 16 & 255;
						destData[destPosition + 2] = destPixel >> 8 & 255;
						destData[destPosition + 3] = destPixel & 255;
						break;
					case 1:
						destData[destPosition] = destPixel & 255;
						destData[destPosition + 1] = destPixel >> 24 & 255;
						destData[destPosition + 2] = destPixel >> 16 & 255;
						destData[destPosition + 3] = destPixel >> 8 & 255;
						break;
					}
					sourcePosition += 4;
					destPosition += 4;
				}
			}
		} else {
			if(alphaPoint == null) alphaPoint = new lime.math.Vector2();
			var alphaData = alphaImage.buffer.data;
			var alphaFormat = alphaImage.buffer.format;
			var alphaPremultiplied = alphaImage.buffer.premultiplied;
			var alphaView = new lime.graphics.utils._ImageDataUtil.ImageDataView(alphaImage,new lime.math.Rectangle(alphaPoint.x,alphaPoint.y,destView.width,destView.height));
			var alphaPosition;
			var alphaPixel;
			var _g12 = 0;
			var _g5 = alphaView.height;
			while(_g12 < _g5) {
				var y2 = _g12++;
				sourcePosition = sourceView.offset + sourceView.stride * y2;
				destPosition = destView.offset + destView.stride * y2;
				alphaPosition = alphaView.offset + alphaView.stride * y2;
				var _g32 = 0;
				var _g22 = alphaView.width;
				while(_g32 < _g22) {
					var x2 = _g32++;
					switch(sourceFormat) {
					case 2:
						sourcePixel = (sourceData[sourcePosition + 2] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
						break;
					case 0:
						sourcePixel = (sourceData[sourcePosition] & 255) << 24 | (sourceData[sourcePosition + 1] & 255) << 16 | (sourceData[sourcePosition + 2] & 255) << 8 | sourceData[sourcePosition + 3] & 255;
						break;
					case 1:
						sourcePixel = (sourceData[sourcePosition + 1] & 255) << 24 | (sourceData[sourcePosition + 2] & 255) << 16 | (sourceData[sourcePosition + 3] & 255) << 8 | sourceData[sourcePosition] & 255;
						break;
					}
					if(sourcePremultiplied) {
						if((sourcePixel & 255) != 0 && (sourcePixel & 255) != 255) {
							lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (sourcePixel & 255);
							var r3;
							var idx13 = Math.round((sourcePixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							r3 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx13];
							var g3;
							var idx14 = Math.round((sourcePixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							g3 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx14];
							var b3;
							var idx15 = Math.round((sourcePixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							b3 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx15];
							sourcePixel = (r3 & 255) << 24 | (g3 & 255) << 16 | (b3 & 255) << 8 | sourcePixel & 255 & 255;
						}
					}
					switch(destFormat) {
					case 2:
						destPixel = (destData[destPosition + 2] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition] & 255) << 8 | destData[destPosition + 3] & 255;
						break;
					case 0:
						destPixel = (destData[destPosition] & 255) << 24 | (destData[destPosition + 1] & 255) << 16 | (destData[destPosition + 2] & 255) << 8 | destData[destPosition + 3] & 255;
						break;
					case 1:
						destPixel = (destData[destPosition + 1] & 255) << 24 | (destData[destPosition + 2] & 255) << 16 | (destData[destPosition + 3] & 255) << 8 | destData[destPosition] & 255;
						break;
					}
					if(destPremultiplied) {
						if((destPixel & 255) != 0 && (destPixel & 255) != 255) {
							lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (destPixel & 255);
							var r4;
							var idx16 = Math.round((destPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							r4 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx16];
							var g4;
							var idx17 = Math.round((destPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							g4 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx17];
							var b4;
							var idx18 = Math.round((destPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							b4 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx18];
							destPixel = (r4 & 255) << 24 | (g4 & 255) << 16 | (b4 & 255) << 8 | destPixel & 255 & 255;
						}
					}
					switch(alphaFormat) {
					case 2:
						alphaPixel = (alphaData[alphaPosition + 2] & 255) << 24 | (alphaData[alphaPosition + 1] & 255) << 16 | (alphaData[alphaPosition] & 255) << 8 | alphaData[alphaPosition + 3] & 255;
						break;
					case 0:
						alphaPixel = (alphaData[alphaPosition] & 255) << 24 | (alphaData[alphaPosition + 1] & 255) << 16 | (alphaData[alphaPosition + 2] & 255) << 8 | alphaData[alphaPosition + 3] & 255;
						break;
					case 1:
						alphaPixel = (alphaData[alphaPosition + 1] & 255) << 24 | (alphaData[alphaPosition + 2] & 255) << 16 | (alphaData[alphaPosition + 3] & 255) << 8 | alphaData[alphaPosition] & 255;
						break;
					}
					if(alphaPremultiplied) {
						if((alphaPixel & 255) != 0 && (alphaPixel & 255) != 255) {
							lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (alphaPixel & 255);
							var r5;
							var idx19 = Math.round((alphaPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							r5 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx19];
							var g5;
							var idx20 = Math.round((alphaPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							g5 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx20];
							var b5;
							var idx21 = Math.round((alphaPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
							b5 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx21];
							alphaPixel = (r5 & 255) << 24 | (g5 & 255) << 16 | (b5 & 255) << 8 | alphaPixel & 255 & 255;
						}
					}
					sourceAlpha = (alphaPixel & 255) / 255;
					destAlpha = (destPixel & 255) / 255;
					oneMinusSourceAlpha = 1 - sourceAlpha;
					blendAlpha = sourceAlpha + destAlpha * oneMinusSourceAlpha;
					if(blendAlpha == 0) destPixel = 0; else {
						var value4;
						var idx22 = Math.round(((sourcePixel >> 24 & 255) * sourceAlpha + (destPixel >> 24 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha);
						value4 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx22];
						destPixel = (value4 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
						value4;
						var value5;
						var idx23 = Math.round(((sourcePixel >> 16 & 255) * sourceAlpha + (destPixel >> 16 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha);
						value5 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx23];
						destPixel = (destPixel >> 24 & 255 & 255) << 24 | (value5 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | destPixel & 255 & 255;
						value5;
						var value6;
						var idx24 = Math.round(((sourcePixel >> 8 & 255) * sourceAlpha + (destPixel >> 8 & 255) * destAlpha * oneMinusSourceAlpha) / blendAlpha);
						value6 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx24];
						destPixel = (destPixel >> 24 & 255 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (value6 & 255) << 8 | destPixel & 255 & 255;
						value6;
						var value7;
						var idx25 = Math.round(blendAlpha * 255.0);
						value7 = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx25];
						destPixel = (destPixel >> 24 & 255 & 255) << 24 | (destPixel >> 16 & 255 & 255) << 16 | (destPixel >> 8 & 255 & 255) << 8 | value7 & 255;
						value7;
					}
					if(destPremultiplied) {
						if((destPixel & 255) == 0) {
							if(destPixel != 0) destPixel = 0;
						} else if((destPixel & 255) != 255) {
							lime.math.color._RGBA.RGBA_Impl_.a16 = lime.math.color._RGBA.RGBA_Impl_.__alpha16[destPixel & 255];
							destPixel = ((destPixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 24 | ((destPixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 16 | ((destPixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 8 | destPixel & 255 & 255;
						}
					}
					switch(destFormat) {
					case 2:
						destData[destPosition] = destPixel >> 8 & 255;
						destData[destPosition + 1] = destPixel >> 16 & 255;
						destData[destPosition + 2] = destPixel >> 24 & 255;
						destData[destPosition + 3] = destPixel & 255;
						break;
					case 0:
						destData[destPosition] = destPixel >> 24 & 255;
						destData[destPosition + 1] = destPixel >> 16 & 255;
						destData[destPosition + 2] = destPixel >> 8 & 255;
						destData[destPosition + 3] = destPixel & 255;
						break;
					case 1:
						destData[destPosition] = destPixel & 255;
						destData[destPosition + 1] = destPixel >> 24 & 255;
						destData[destPosition + 2] = destPixel >> 16 & 255;
						destData[destPosition + 3] = destPixel >> 8 & 255;
						break;
					}
					sourcePosition += 4;
					destPosition += 4;
				}
			}
		}
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.fillRect = function(image,rect,color,format) {
	var fillColor;
	switch(format) {
	case 1:
		var argb = color;
		var rgba = 0;
		rgba = (argb >> 16 & 255 & 255) << 24 | (argb >> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >> 24 & 255 & 255;
		fillColor = rgba;
		break;
	case 2:
		var bgra = color;
		var rgba1 = 0;
		rgba1 = (bgra >> 8 & 255 & 255) << 24 | (bgra >> 16 & 255 & 255) << 16 | (bgra >> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		fillColor = rgba1;
		break;
	default:
		fillColor = color;
	}
	if(!image.get_transparent()) {
		fillColor = (fillColor >> 24 & 255 & 255) << 24 | (fillColor >> 16 & 255 & 255) << 16 | (fillColor >> 8 & 255 & 255) << 8 | 255;
		255;
	}
	var data = image.buffer.data;
	if(data == null) return;
	var format1 = image.buffer.format;
	var premultiplied = image.buffer.premultiplied;
	var dataView = new lime.graphics.utils._ImageDataUtil.ImageDataView(image,rect);
	var row;
	var _g1 = 0;
	var _g = dataView.height;
	while(_g1 < _g) {
		var y = _g1++;
		row = dataView.offset + dataView.stride * y;
		var _g3 = 0;
		var _g2 = dataView.width;
		while(_g3 < _g2) {
			var x = _g3++;
			var offset = row + x * 4;
			if(premultiplied) {
				if((fillColor & 255) == 0) {
					if(fillColor != 0) fillColor = 0;
				} else if((fillColor & 255) != 255) {
					lime.math.color._RGBA.RGBA_Impl_.a16 = lime.math.color._RGBA.RGBA_Impl_.__alpha16[fillColor & 255];
					fillColor = ((fillColor >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 24 | ((fillColor >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 16 | ((fillColor >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 8 | fillColor & 255 & 255;
				}
			}
			switch(format1) {
			case 2:
				data[offset] = fillColor >> 8 & 255;
				data[offset + 1] = fillColor >> 16 & 255;
				data[offset + 2] = fillColor >> 24 & 255;
				data[offset + 3] = fillColor & 255;
				break;
			case 0:
				data[offset] = fillColor >> 24 & 255;
				data[offset + 1] = fillColor >> 16 & 255;
				data[offset + 2] = fillColor >> 8 & 255;
				data[offset + 3] = fillColor & 255;
				break;
			case 1:
				data[offset] = fillColor & 255;
				data[offset + 1] = fillColor >> 24 & 255;
				data[offset + 2] = fillColor >> 16 & 255;
				data[offset + 3] = fillColor >> 8 & 255;
				break;
			}
		}
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.getPixel = function(image,x,y,format) {
	var pixel;
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	switch(image.buffer.format) {
	case 2:
		pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 0:
		pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 1:
		pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
		break;
	}
	if(image.buffer.premultiplied) {
		if((pixel & 255) != 0 && (pixel & 255) != 255) {
			lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (pixel & 255);
			var r;
			var idx = Math.round((pixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
			r = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx];
			var g;
			var idx1 = Math.round((pixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
			g = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx1];
			var b;
			var idx2 = Math.round((pixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
			b = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx2];
			pixel = (r & 255) << 24 | (g & 255) << 16 | (b & 255) << 8 | pixel & 255 & 255;
		}
	}
	pixel = (pixel >> 24 & 255 & 255) << 24 | (pixel >> 16 & 255 & 255) << 16 | (pixel >> 8 & 255 & 255) << 8 | 0;
	0;
	switch(format) {
	case 1:
		var argb = 0;
		argb = (pixel & 255 & 255) << 24 | (pixel >> 24 & 255 & 255) << 16 | (pixel >> 16 & 255 & 255) << 8 | pixel >> 8 & 255 & 255;
		return argb;
	case 2:
		var bgra = 0;
		bgra = (pixel >> 8 & 255 & 255) << 24 | (pixel >> 16 & 255 & 255) << 16 | (pixel >> 24 & 255 & 255) << 8 | pixel & 255 & 255;
		return bgra;
	default:
		return pixel;
	}
};
lime.graphics.utils.ImageDataUtil.getPixel32 = function(image,x,y,format) {
	var pixel;
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	switch(image.buffer.format) {
	case 2:
		pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 0:
		pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
		break;
	case 1:
		pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
		break;
	}
	if(image.buffer.premultiplied) {
		if((pixel & 255) != 0 && (pixel & 255) != 255) {
			lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (pixel & 255);
			var r;
			var idx = Math.round((pixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
			r = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx];
			var g;
			var idx1 = Math.round((pixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
			g = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx1];
			var b;
			var idx2 = Math.round((pixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
			b = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx2];
			pixel = (r & 255) << 24 | (g & 255) << 16 | (b & 255) << 8 | pixel & 255 & 255;
		}
	}
	switch(format) {
	case 1:
		var argb = 0;
		argb = (pixel & 255 & 255) << 24 | (pixel >> 24 & 255 & 255) << 16 | (pixel >> 16 & 255 & 255) << 8 | pixel >> 8 & 255 & 255;
		return argb;
	case 2:
		var bgra = 0;
		bgra = (pixel >> 8 & 255 & 255) << 24 | (pixel >> 16 & 255 & 255) << 16 | (pixel >> 24 & 255 & 255) << 8 | pixel & 255 & 255;
		return bgra;
	default:
		return pixel;
	}
};
lime.graphics.utils.ImageDataUtil.multiplyAlpha = function(image) {
	var data = image.buffer.data;
	if(data == null || !image.buffer.transparent) return;
	var format = image.buffer.format;
	var length = data.length / 4 | 0;
	var pixel;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		var offset = i * 4;
		switch(format) {
		case 2:
			pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 0:
			pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 1:
			pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
			break;
		}
		var offset1 = i * 4;
		if((pixel & 255) == 0) {
			if(pixel != 0) pixel = 0;
		} else if((pixel & 255) != 255) {
			lime.math.color._RGBA.RGBA_Impl_.a16 = lime.math.color._RGBA.RGBA_Impl_.__alpha16[pixel & 255];
			pixel = ((pixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 24 | ((pixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 16 | ((pixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 8 | pixel & 255 & 255;
		}
		switch(format) {
		case 2:
			data[offset1] = pixel >> 8 & 255;
			data[offset1 + 1] = pixel >> 16 & 255;
			data[offset1 + 2] = pixel >> 24 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 0:
			data[offset1] = pixel >> 24 & 255;
			data[offset1 + 1] = pixel >> 16 & 255;
			data[offset1 + 2] = pixel >> 8 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 1:
			data[offset1] = pixel & 255;
			data[offset1 + 1] = pixel >> 24 & 255;
			data[offset1 + 2] = pixel >> 16 & 255;
			data[offset1 + 3] = pixel >> 8 & 255;
			break;
		}
	}
	image.buffer.premultiplied = true;
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.setFormat = function(image,format) {
	var data = image.buffer.data;
	if(data == null) return;
	var index;
	var a16;
	var length = data.length / 4 | 0;
	var r1;
	var g1;
	var b1;
	var a1;
	var r2;
	var g2;
	var b2;
	var a2;
	var r;
	var g;
	var b;
	var a;
	var _g = image.get_format();
	switch(_g) {
	case 0:
		r1 = 0;
		g1 = 1;
		b1 = 2;
		a1 = 3;
		break;
	case 1:
		r1 = 1;
		g1 = 2;
		b1 = 3;
		a1 = 0;
		break;
	case 2:
		r1 = 2;
		g1 = 1;
		b1 = 0;
		a1 = 3;
		break;
	}
	switch(format) {
	case 0:
		r2 = 0;
		g2 = 1;
		b2 = 2;
		a2 = 3;
		break;
	case 1:
		r2 = 1;
		g2 = 2;
		b2 = 3;
		a2 = 0;
		break;
	case 2:
		r2 = 2;
		g2 = 1;
		b2 = 0;
		a2 = 3;
		break;
	}
	var _g1 = 0;
	while(_g1 < length) {
		var i = _g1++;
		index = i * 4;
		r = data[index + r1];
		g = data[index + g1];
		b = data[index + b1];
		a = data[index + a1];
		data[index + r2] = r;
		data[index + g2] = g;
		data[index + b2] = b;
		data[index + a2] = a;
	}
	image.buffer.format = format;
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.setPixel32 = function(image,x,y,color,format) {
	var pixel;
	switch(format) {
	case 1:
		var argb = color;
		var rgba = 0;
		rgba = (argb >> 16 & 255 & 255) << 24 | (argb >> 8 & 255 & 255) << 16 | (argb & 255 & 255) << 8 | argb >> 24 & 255 & 255;
		pixel = rgba;
		break;
	case 2:
		var bgra = color;
		var rgba1 = 0;
		rgba1 = (bgra >> 8 & 255 & 255) << 24 | (bgra >> 16 & 255 & 255) << 16 | (bgra >> 24 & 255 & 255) << 8 | bgra & 255 & 255;
		pixel = rgba1;
		break;
	default:
		pixel = color;
	}
	if(!image.get_transparent()) {
		pixel = (pixel >> 24 & 255 & 255) << 24 | (pixel >> 16 & 255 & 255) << 16 | (pixel >> 8 & 255 & 255) << 8 | 255;
		255;
	}
	var data = image.buffer.data;
	var offset = 4 * (y + image.offsetY) * image.buffer.width + (x + image.offsetX) * 4;
	if(image.buffer.premultiplied) {
		if((pixel & 255) == 0) {
			if(pixel != 0) pixel = 0;
		} else if((pixel & 255) != 255) {
			lime.math.color._RGBA.RGBA_Impl_.a16 = lime.math.color._RGBA.RGBA_Impl_.__alpha16[pixel & 255];
			pixel = ((pixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 24 | ((pixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 16 | ((pixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.a16 >> 16 & 255) << 8 | pixel & 255 & 255;
		}
	}
	switch(image.buffer.format) {
	case 2:
		data[offset] = pixel >> 8 & 255;
		data[offset + 1] = pixel >> 16 & 255;
		data[offset + 2] = pixel >> 24 & 255;
		data[offset + 3] = pixel & 255;
		break;
	case 0:
		data[offset] = pixel >> 24 & 255;
		data[offset + 1] = pixel >> 16 & 255;
		data[offset + 2] = pixel >> 8 & 255;
		data[offset + 3] = pixel & 255;
		break;
	case 1:
		data[offset] = pixel & 255;
		data[offset + 1] = pixel >> 24 & 255;
		data[offset + 2] = pixel >> 16 & 255;
		data[offset + 3] = pixel >> 8 & 255;
		break;
	}
	image.dirty = true;
};
lime.graphics.utils.ImageDataUtil.unmultiplyAlpha = function(image) {
	var data = image.buffer.data;
	if(data == null) return;
	var format = image.buffer.format;
	var length = data.length / 4 | 0;
	var pixel;
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		var offset = i * 4;
		switch(format) {
		case 2:
			pixel = (data[offset + 2] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 0:
			pixel = (data[offset] & 255) << 24 | (data[offset + 1] & 255) << 16 | (data[offset + 2] & 255) << 8 | data[offset + 3] & 255;
			break;
		case 1:
			pixel = (data[offset + 1] & 255) << 24 | (data[offset + 2] & 255) << 16 | (data[offset + 3] & 255) << 8 | data[offset] & 255;
			break;
		}
		if((pixel & 255) != 0 && (pixel & 255) != 255) {
			lime.math.color._RGBA.RGBA_Impl_.unmult = 255.0 / (pixel & 255);
			var r;
			var idx = Math.round((pixel >> 24 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
			r = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx];
			var g;
			var idx1 = Math.round((pixel >> 16 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
			g = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx1];
			var b;
			var idx2 = Math.round((pixel >> 8 & 255) * lime.math.color._RGBA.RGBA_Impl_.unmult);
			b = lime.math.color._RGBA.RGBA_Impl_.__clamp[idx2];
			pixel = (r & 255) << 24 | (g & 255) << 16 | (b & 255) << 8 | pixel & 255 & 255;
		}
		var offset1 = i * 4;
		switch(format) {
		case 2:
			data[offset1] = pixel >> 8 & 255;
			data[offset1 + 1] = pixel >> 16 & 255;
			data[offset1 + 2] = pixel >> 24 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 0:
			data[offset1] = pixel >> 24 & 255;
			data[offset1 + 1] = pixel >> 16 & 255;
			data[offset1 + 2] = pixel >> 8 & 255;
			data[offset1 + 3] = pixel & 255;
			break;
		case 1:
			data[offset1] = pixel & 255;
			data[offset1 + 1] = pixel >> 24 & 255;
			data[offset1 + 2] = pixel >> 16 & 255;
			data[offset1 + 3] = pixel >> 8 & 255;
			break;
		}
	}
	image.buffer.premultiplied = false;
	image.dirty = true;
};
lime.graphics.utils._ImageDataUtil = {};
lime.graphics.utils._ImageDataUtil.ImageDataView = function(image,rect) {
	this.image = image;
	if(rect == null) this.rect = image.get_rect(); else {
		if(rect.x < 0) rect.x = 0;
		if(rect.y < 0) rect.y = 0;
		if(rect.x + rect.width > image.width) rect.width = image.width - rect.x;
		if(rect.y + rect.height > image.height) rect.height = image.height - rect.y;
		if(rect.width < 0) rect.width = 0;
		if(rect.height < 0) rect.height = 0;
		this.rect = rect;
	}
	this.stride = image.buffer.get_stride();
	this.x = Math.ceil(this.rect.x);
	this.y = Math.ceil(this.rect.y);
	this.width = Math.floor(this.rect.width);
	this.height = Math.floor(this.rect.height);
	this.offset = this.stride * (this.y + image.offsetY) + (this.x + image.offsetX) * 4;
};
$hxClasses["lime.graphics.utils._ImageDataUtil.ImageDataView"] = lime.graphics.utils._ImageDataUtil.ImageDataView;
lime.graphics.utils._ImageDataUtil.ImageDataView.__name__ = true;
lime.graphics.utils._ImageDataUtil.ImageDataView.prototype = {
	__class__: lime.graphics.utils._ImageDataUtil.ImageDataView
};
lime.math = {};
lime.math._ColorMatrix = {};
lime.math._ColorMatrix.ColorMatrix_Impl_ = function() { };
$hxClasses["lime.math._ColorMatrix.ColorMatrix_Impl_"] = lime.math._ColorMatrix.ColorMatrix_Impl_;
lime.math._ColorMatrix.ColorMatrix_Impl_.__name__ = true;
lime.math._ColorMatrix.ColorMatrix_Impl_.getAlphaTable = function(this1) {
	var table;
	var this2;
	this2 = new Uint8Array(256);
	table = this2;
	var multiplier = this1[18];
	var offset = this1[19] * 255;
	var value;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * multiplier + offset);
		if(value > 255) value = 255;
		if(value < 0) value = 0;
		table[i] = value;
	}
	return table;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.getBlueTable = function(this1) {
	var table;
	var this2;
	this2 = new Uint8Array(256);
	table = this2;
	var multiplier = this1[12];
	var offset = this1[14] * 255;
	var value;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * multiplier + offset);
		if(value > 255) value = 255;
		if(value < 0) value = 0;
		table[i] = value;
	}
	return table;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.getGreenTable = function(this1) {
	var table;
	var this2;
	this2 = new Uint8Array(256);
	table = this2;
	var multiplier = this1[6];
	var offset = this1[9] * 255;
	var value;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * multiplier + offset);
		if(value > 255) value = 255;
		if(value < 0) value = 0;
		table[i] = value;
	}
	return table;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.getRedTable = function(this1) {
	var table;
	var this2;
	this2 = new Uint8Array(256);
	table = this2;
	var multiplier = this1[0];
	var offset = this1[4] * 255;
	var value;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		value = Math.floor(i * multiplier + offset);
		if(value > 255) value = 255;
		if(value < 0) value = 0;
		table[i] = value;
	}
	return table;
};
lime.math._ColorMatrix.ColorMatrix_Impl_.__toFlashColorTransform = function(this1) {
	return null;
};
lime.math.Matrix3 = function(a,b,c,d,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};
$hxClasses["lime.math.Matrix3"] = lime.math.Matrix3;
lime.math.Matrix3.__name__ = true;
lime.math.Matrix3.prototype = {
	__class__: lime.math.Matrix3
};
lime.math.Rectangle = function(x,y,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["lime.math.Rectangle"] = lime.math.Rectangle;
lime.math.Rectangle.__name__ = true;
lime.math.Rectangle.prototype = {
	offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,__toFlashRectangle: function() {
		return null;
	}
	,__class__: lime.math.Rectangle
};
lime.math.Vector2 = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["lime.math.Vector2"] = lime.math.Vector2;
lime.math.Vector2.__name__ = true;
lime.math.Vector2.prototype = {
	offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,__toFlashPoint: function() {
		return null;
	}
	,__class__: lime.math.Vector2
};
lime.math.color = {};
lime.math.color._RGBA = {};
lime.math.color._RGBA.RGBA_Impl_ = function() { };
$hxClasses["lime.math.color._RGBA.RGBA_Impl_"] = lime.math.color._RGBA.RGBA_Impl_;
lime.math.color._RGBA.RGBA_Impl_.__name__ = true;
lime.math.color._RGBA.RGBA_Impl_.__alpha16 = null;
lime.math.color._RGBA.RGBA_Impl_.__clamp = null;
lime.math.color._RGBA.RGBA_Impl_.a16 = null;
lime.math.color._RGBA.RGBA_Impl_.unmult = null;
lime.net = {};
lime.net.URLLoader = function(request) {
	this.onSecurityError = new lime.app.Event();
	this.onProgress = new lime.app.Event();
	this.onOpen = new lime.app.Event();
	this.onIOError = new lime.app.Event();
	this.onHTTPStatus = new lime.app.Event();
	this.onComplete = new lime.app.Event();
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(lime.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["lime.net.URLLoader"] = lime.net.URLLoader;
lime.net.URLLoader.__name__ = true;
lime.net.URLLoader.prototype = {
	getData: function() {
		return null;
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,registerEvents: function(subject) {
		var _g = this;
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.__onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s;
			try {
				s = subject.status;
			} catch( e ) {
				s = null;
			}
			if(s == undefined) s = null;
			if(s != null) {
				var listeners = self.onHTTPStatus.listeners;
				var repeat = self.onHTTPStatus.repeat;
				var i = 0;
				while(i < listeners.length) {
					listeners[i](_g,s);
					if(!repeat[i]) self.onHTTPStatus.remove(listeners[i]); else i++;
				}
			}
			if(s != null && s >= 200 && s < 400) self.__onData(subject.response); else if(s == null) {
				var listeners1 = self.onIOError.listeners;
				var repeat1 = self.onIOError.repeat;
				var i1 = 0;
				while(i1 < listeners1.length) {
					listeners1[i1](_g,"Failed to connect or resolve host");
					if(!repeat1[i1]) self.onIOError.remove(listeners1[i1]); else i1++;
				}
			} else if(s == 12029) {
				var listeners2 = self.onIOError.listeners;
				var repeat2 = self.onIOError.repeat;
				var i2 = 0;
				while(i2 < listeners2.length) {
					listeners2[i2](_g,"Failed to connect to host");
					if(!repeat2[i2]) self.onIOError.remove(listeners2[i2]); else i2++;
				}
			} else if(s == 12007) {
				var listeners3 = self.onIOError.listeners;
				var repeat3 = self.onIOError.repeat;
				var i3 = 0;
				while(i3 < listeners3.length) {
					listeners3[i3](_g,"Unknown host");
					if(!repeat3[i3]) self.onIOError.remove(listeners3[i3]); else i3++;
				}
			} else if(s == 0) {
				var listeners4 = self.onIOError.listeners;
				var repeat4 = self.onIOError.repeat;
				var i4 = 0;
				while(i4 < listeners4.length) {
					listeners4[i4](_g,"Unable to make request (may be blocked due to cross-domain permissions)");
					if(!repeat4[i4]) self.onIOError.remove(listeners4[i4]); else i4++;
				}
				var listeners5 = self.onSecurityError.listeners;
				var repeat5 = self.onSecurityError.repeat;
				var i5 = 0;
				while(i5 < listeners5.length) {
					listeners5[i5](_g,"Unable to make request (may be blocked due to cross-domain permissions)");
					if(!repeat5[i5]) self.onSecurityError.remove(listeners5[i5]); else i5++;
				}
			} else {
				var listeners6 = self.onIOError.listeners;
				var repeat6 = self.onIOError.repeat;
				var i6 = 0;
				while(i6 < listeners6.length) {
					listeners6[i6](_g,"Http Error #" + subject.status);
					if(!repeat6[i6]) self.onIOError.remove(listeners6[i6]); else i6++;
				}
			}
		};
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,lime.utils.ByteArray)) {
			var data1 = data;
			var _g = this.dataFormat;
			switch(_g[1]) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,lime.net.URLVariables)) {
			var data2 = data;
			var _g1 = 0;
			var _g11 = Reflect.fields(data2);
			while(_g1 < _g11.length) {
				var p = _g11[_g1];
				++_g1;
				if(uri.length != 0) uri += "&";
				uri += encodeURIComponent(p) + "=" + StringTools.urlEncode(Reflect.field(data2,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open("GET",url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(js.Boot.__cast(method , String),url,true);
		} catch( e ) {
			var listeners = this.onIOError.listeners;
			var repeat = this.onIOError.repeat;
			var i = 0;
			while(i < listeners.length) {
				listeners[i](this,e.toString());
				if(!repeat[i]) this.onIOError.remove(listeners[i]); else i++;
			}
			return;
		}
		var _g2 = this.dataFormat;
		switch(_g2[1]) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g3 = 0;
		while(_g3 < requestHeaders.length) {
			var header = requestHeaders[_g3];
			++_g3;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		var listeners1 = this.onOpen.listeners;
		var repeat1 = this.onOpen.repeat;
		var i1 = 0;
		while(i1 < listeners1.length) {
			listeners1[i1](this);
			if(!repeat1[i1]) this.onOpen.remove(listeners1[i1]); else i1++;
		}
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,__onData: function(_) {
		var content = this.getData();
		var _g = this.dataFormat;
		switch(_g[1]) {
		case 0:
			this.data = lime.utils.ByteArray.__ofBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var listeners = this.onComplete.listeners;
		var repeat = this.onComplete.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](this);
			if(!repeat[i]) this.onComplete.remove(listeners[i]); else i++;
		}
	}
	,__onProgress: function(event) {
		this.bytesLoaded = event.loaded;
		this.bytesTotal = event.total;
		var listeners = this.onProgress.listeners;
		var repeat = this.onProgress.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](this,this.bytesLoaded,this.bytesTotal);
			if(!repeat[i]) this.onProgress.remove(listeners[i]); else i++;
		}
	}
	,set_dataFormat: function(inputVal) {
		if(inputVal == lime.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(window,"ArrayBuffer")) this.dataFormat = lime.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,__class__: lime.net.URLLoader
};
lime.net.URLLoaderDataFormat = $hxClasses["lime.net.URLLoaderDataFormat"] = { __ename__ : true, __constructs__ : ["BINARY","TEXT","VARIABLES"] };
lime.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
lime.net.URLLoaderDataFormat.BINARY.toString = $estr;
lime.net.URLLoaderDataFormat.BINARY.__enum__ = lime.net.URLLoaderDataFormat;
lime.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
lime.net.URLLoaderDataFormat.TEXT.toString = $estr;
lime.net.URLLoaderDataFormat.TEXT.__enum__ = lime.net.URLLoaderDataFormat;
lime.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
lime.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
lime.net.URLLoaderDataFormat.VARIABLES.__enum__ = lime.net.URLLoaderDataFormat;
lime.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = "GET";
	this.contentType = null;
};
$hxClasses["lime.net.URLRequest"] = lime.net.URLRequest;
lime.net.URLRequest.__name__ = true;
lime.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == "GET" || this.data == null) return res;
		if(typeof(this.data) == "string" || js.Boot.__instanceof(this.data,lime.utils.ByteArray)) {
			res = res.slice();
			res.push(new lime.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,__class__: lime.net.URLRequest
};
lime.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["lime.net.URLRequestHeader"] = lime.net.URLRequestHeader;
lime.net.URLRequestHeader.__name__ = true;
lime.net.URLRequestHeader.prototype = {
	__class__: lime.net.URLRequestHeader
};
lime.net.URLVariables = function() { };
$hxClasses["lime.net.URLVariables"] = lime.net.URLVariables;
lime.net.URLVariables.__name__ = true;
lime.system = {};
lime.system.Clipboard = function() { };
$hxClasses["lime.system.Clipboard"] = lime.system.Clipboard;
lime.system.Clipboard.__name__ = true;
lime.system.Clipboard.get_text = function() {
	return null;
};
lime.system.Clipboard.set_text = function(value) {
	return null;
};
lime.system.Display = function() {
};
$hxClasses["lime.system.Display"] = lime.system.Display;
lime.system.Display.__name__ = true;
lime.system.Display.prototype = {
	__class__: lime.system.Display
};
lime.system.DisplayMode = function(width,height,refreshRate,pixelFormat) {
	this.width = width;
	this.height = height;
	this.refreshRate = refreshRate;
	this.pixelFormat = pixelFormat;
};
$hxClasses["lime.system.DisplayMode"] = lime.system.DisplayMode;
lime.system.DisplayMode.__name__ = true;
lime.system.DisplayMode.prototype = {
	__class__: lime.system.DisplayMode
};
lime.system.System = function() { };
$hxClasses["lime.system.System"] = lime.system.System;
lime.system.System.__name__ = true;
lime.system.System.embed = $hx_exports.lime.embed = function(element,width,height,background,assetsPrefix) {
	var htmlElement = null;
	if(typeof(element) == "string") htmlElement = window.document.getElementById(js.Boot.__cast(element , String)); else if(element == null) htmlElement = window.document.createElement("div"); else htmlElement = element;
	var color = null;
	if(background != null) {
		background = StringTools.replace(background,"#","");
		if(background.indexOf("0x") > -1) color = Std.parseInt(background); else color = Std.parseInt("0x" + background);
	}
	if(width == null) width = 0;
	if(height == null) height = 0;
	ApplicationMain.config.windows[0].background = color;
	ApplicationMain.config.windows[0].element = htmlElement;
	ApplicationMain.config.windows[0].width = width;
	ApplicationMain.config.windows[0].height = height;
	ApplicationMain.config.assetsPrefix = assetsPrefix;
	ApplicationMain.create();
};
lime.system.System.getDisplay = function(id) {
	if(id == 0) {
		var display = new lime.system.Display();
		display.id = 0;
		display.name = "Generic Display";
		display.currentMode = new lime.system.DisplayMode(window.screen.width,window.screen.height,60,1);
		display.supportedModes = [display.currentMode];
		display.bounds = new lime.math.Rectangle(0,0,display.currentMode.width,display.currentMode.height);
		return display;
	}
	return null;
};
lime.system.System.getTimer = function() {
	return new Date().getTime();
};
lime.text = {};
lime.text.Font = function(name) {
	if(name != null) this.name = name;
	if(this.__fontPath != null) this.__fromFile(this.__fontPath);
};
$hxClasses["lime.text.Font"] = lime.text.Font;
lime.text.Font.__name__ = true;
lime.text.Font.prototype = {
	__fromFile: function(path) {
		this.__fontPath = path;
	}
	,__class__: lime.text.Font
};
lime.ui = {};
lime.ui.Gamepad = function() {
	this.onDisconnect = new lime.app.Event();
	this.onButtonUp = new lime.app.Event();
	this.onButtonDown = new lime.app.Event();
	this.onAxisMove = new lime.app.Event();
};
$hxClasses["lime.ui.Gamepad"] = lime.ui.Gamepad;
lime.ui.Gamepad.__name__ = true;
lime.ui.Gamepad.prototype = {
	__class__: lime.ui.Gamepad
};
lime.ui._KeyModifier = {};
lime.ui._KeyModifier.KeyModifier_Impl_ = function() { };
$hxClasses["lime.ui._KeyModifier.KeyModifier_Impl_"] = lime.ui._KeyModifier.KeyModifier_Impl_;
lime.ui._KeyModifier.KeyModifier_Impl_.__name__ = true;
lime.ui._KeyModifier.KeyModifier_Impl_.get_altKey = function(this1) {
	return (this1 & 256) > 0 || (this1 & 512) > 0;
};
lime.ui._KeyModifier.KeyModifier_Impl_.get_ctrlKey = function(this1) {
	return (this1 & 64) > 0 || (this1 & 128) > 0;
};
lime.ui._KeyModifier.KeyModifier_Impl_.get_metaKey = function(this1) {
	return (this1 & 1024) > 0 || (this1 & 2048) > 0;
};
lime.ui._KeyModifier.KeyModifier_Impl_.get_shiftKey = function(this1) {
	return (this1 & 1) > 0 || (this1 & 2) > 0;
};
lime.ui.Mouse = function() { };
$hxClasses["lime.ui.Mouse"] = lime.ui.Mouse;
lime.ui.Mouse.__name__ = true;
lime.ui.Mouse.set_cursor = function(value) {
	return lime._backend.html5.HTML5Mouse.set_cursor(value);
};
lime.ui.MouseCursor = $hxClasses["lime.ui.MouseCursor"] = { __ename__ : true, __constructs__ : ["ARROW","CROSSHAIR","DEFAULT","MOVE","POINTER","RESIZE_NESW","RESIZE_NS","RESIZE_NWSE","RESIZE_WE","TEXT","WAIT","WAIT_ARROW","CUSTOM"] };
lime.ui.MouseCursor.ARROW = ["ARROW",0];
lime.ui.MouseCursor.ARROW.toString = $estr;
lime.ui.MouseCursor.ARROW.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.CROSSHAIR = ["CROSSHAIR",1];
lime.ui.MouseCursor.CROSSHAIR.toString = $estr;
lime.ui.MouseCursor.CROSSHAIR.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.DEFAULT = ["DEFAULT",2];
lime.ui.MouseCursor.DEFAULT.toString = $estr;
lime.ui.MouseCursor.DEFAULT.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.MOVE = ["MOVE",3];
lime.ui.MouseCursor.MOVE.toString = $estr;
lime.ui.MouseCursor.MOVE.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.POINTER = ["POINTER",4];
lime.ui.MouseCursor.POINTER.toString = $estr;
lime.ui.MouseCursor.POINTER.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.RESIZE_NESW = ["RESIZE_NESW",5];
lime.ui.MouseCursor.RESIZE_NESW.toString = $estr;
lime.ui.MouseCursor.RESIZE_NESW.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.RESIZE_NS = ["RESIZE_NS",6];
lime.ui.MouseCursor.RESIZE_NS.toString = $estr;
lime.ui.MouseCursor.RESIZE_NS.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.RESIZE_NWSE = ["RESIZE_NWSE",7];
lime.ui.MouseCursor.RESIZE_NWSE.toString = $estr;
lime.ui.MouseCursor.RESIZE_NWSE.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.RESIZE_WE = ["RESIZE_WE",8];
lime.ui.MouseCursor.RESIZE_WE.toString = $estr;
lime.ui.MouseCursor.RESIZE_WE.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.TEXT = ["TEXT",9];
lime.ui.MouseCursor.TEXT.toString = $estr;
lime.ui.MouseCursor.TEXT.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.WAIT = ["WAIT",10];
lime.ui.MouseCursor.WAIT.toString = $estr;
lime.ui.MouseCursor.WAIT.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.WAIT_ARROW = ["WAIT_ARROW",11];
lime.ui.MouseCursor.WAIT_ARROW.toString = $estr;
lime.ui.MouseCursor.WAIT_ARROW.__enum__ = lime.ui.MouseCursor;
lime.ui.MouseCursor.CUSTOM = ["CUSTOM",12];
lime.ui.MouseCursor.CUSTOM.toString = $estr;
lime.ui.MouseCursor.CUSTOM.__enum__ = lime.ui.MouseCursor;
lime.ui.Touch = function(x,y,id,dx,dy,pressure,device) {
	this.x = x;
	this.y = y;
	this.id = id;
	this.dx = dx;
	this.dy = dy;
	this.pressure = pressure;
	this.device = device;
};
$hxClasses["lime.ui.Touch"] = lime.ui.Touch;
lime.ui.Touch.__name__ = true;
lime.ui.Touch.prototype = {
	__class__: lime.ui.Touch
};
lime.ui.Window = function(config) {
	this.onTextInput = new lime.app.Event();
	this.onTextEdit = new lime.app.Event();
	this.onRestore = new lime.app.Event();
	this.onResize = new lime.app.Event();
	this.onMove = new lime.app.Event();
	this.onMouseWheel = new lime.app.Event();
	this.onMouseUp = new lime.app.Event();
	this.onMouseMoveRelative = new lime.app.Event();
	this.onMouseMove = new lime.app.Event();
	this.onMouseDown = new lime.app.Event();
	this.onMinimize = new lime.app.Event();
	this.onLeave = new lime.app.Event();
	this.onKeyUp = new lime.app.Event();
	this.onKeyDown = new lime.app.Event();
	this.onFullscreen = new lime.app.Event();
	this.onFocusOut = new lime.app.Event();
	this.onFocusIn = new lime.app.Event();
	this.onEnter = new lime.app.Event();
	this.onDeactivate = new lime.app.Event();
	this.onCreate = new lime.app.Event();
	this.onClose = new lime.app.Event();
	this.onActivate = new lime.app.Event();
	this.config = config;
	this.__width = 0;
	this.__height = 0;
	this.__fullscreen = false;
	this.__x = 0;
	this.__y = 0;
	this.__title = "";
	this.id = -1;
	if(config != null) {
		if(Object.prototype.hasOwnProperty.call(config,"width")) this.__width = config.width;
		if(Object.prototype.hasOwnProperty.call(config,"height")) this.__height = config.height;
		if(Object.prototype.hasOwnProperty.call(config,"x")) this.__x = config.x;
		if(Object.prototype.hasOwnProperty.call(config,"y")) this.__y = config.y;
		if(Object.prototype.hasOwnProperty.call(config,"fullscreen")) this.__fullscreen = config.fullscreen;
		if(Object.prototype.hasOwnProperty.call(config,"title")) this.__title = config.title;
	}
	this.backend = new lime._backend.html5.HTML5Window(this);
};
$hxClasses["lime.ui.Window"] = lime.ui.Window;
lime.ui.Window.__name__ = true;
lime.ui.Window.prototype = {
	close: function() {
		this.backend.close();
	}
	,create: function(application) {
		this.application = application;
		this.backend.create(application);
		if(this.renderer != null) this.renderer.create();
	}
	,resize: function(width,height) {
		this.backend.resize(width,height);
		this.__width = width;
		this.__height = height;
	}
	,get_display: function() {
		return this.backend.getDisplay();
	}
	,set_fullscreen: function(value) {
		return this.__fullscreen = this.backend.setFullscreen(value);
	}
	,set_height: function(value) {
		this.resize(this.__width,value);
		return this.__height;
	}
	,set_width: function(value) {
		this.resize(value,this.__height);
		return this.__width;
	}
	,__class__: lime.ui.Window
};
lime.utils = {};
lime.utils.ByteArray = function(size) {
	if(size == null) size = 0;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	if(size > 0) this.allocated = size;
	this.___resizeBuffer(this.allocated);
	this.set_length(this.allocated);
};
$hxClasses["lime.utils.ByteArray"] = lime.utils.ByteArray;
lime.utils.ByteArray.__name__ = true;
lime.utils.ByteArray.__ofBuffer = function(buffer) {
	var bytes = new lime.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
};
lime.utils.ByteArray.prototype = {
	readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c21 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c21 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure * 2) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		var data = this.data;
		data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0;
		var _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,__get: function(pos) {
		return this.data.getInt8(pos);
	}
	,___resizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,set_length: function(value) {
		if(this.allocated < value) this.___resizeBuffer(this.allocated = Std["int"](Math.max(value,this.allocated * 2))); else if(this.allocated > value * 2) this.___resizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,__class__: lime.utils.ByteArray
};
openfl.IAssetCache = function() { };
$hxClasses["openfl.IAssetCache"] = openfl.IAssetCache;
openfl.IAssetCache.__name__ = true;
openfl.IAssetCache.prototype = {
	__class__: openfl.IAssetCache
};
openfl.AssetCache = function() {
	this.__enabled = true;
	this.bitmapData = new haxe.ds.StringMap();
	this.font = new haxe.ds.StringMap();
	this.sound = new haxe.ds.StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl.AssetCache;
openfl.AssetCache.__name__ = true;
openfl.AssetCache.__interfaces__ = [openfl.IAssetCache];
openfl.AssetCache.prototype = {
	getBitmapData: function(id) {
		return this.bitmapData.get(id);
	}
	,getFont: function(id) {
		return this.font.get(id);
	}
	,hasBitmapData: function(id) {
		return this.bitmapData.exists(id);
	}
	,hasFont: function(id) {
		return this.font.exists(id);
	}
	,setBitmapData: function(id,bitmapData) {
		this.bitmapData.set(id,bitmapData);
	}
	,setFont: function(id,font) {
		this.font.set(id,font);
	}
	,get_enabled: function() {
		return this.__enabled;
	}
	,__class__: openfl.AssetCache
};
openfl.Assets = function() { };
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = true;
openfl.Assets.exists = function(id,type) {
	return lime.Assets.exists(id,type);
};
openfl.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	if(useCache && openfl.Assets.cache.get_enabled() && openfl.Assets.cache.hasBitmapData(id)) {
		var bitmapData = openfl.Assets.cache.getBitmapData(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) return bitmapData;
	}
	var image = lime.Assets.getImage(id,false);
	if(image != null) {
		var bitmapData1 = openfl.display.BitmapData.fromImage(image);
		if(useCache && openfl.Assets.cache.get_enabled()) openfl.Assets.cache.setBitmapData(id,bitmapData1);
		return bitmapData1;
	}
	return null;
};
openfl.Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	if(useCache && openfl.Assets.cache.get_enabled() && openfl.Assets.cache.hasFont(id)) return openfl.Assets.cache.getFont(id);
	var limeFont = lime.Assets.getFont(id,false);
	if(limeFont != null) {
		var font = openfl.text.Font.__fromLimeFont(limeFont);
		if(useCache && openfl.Assets.cache.get_enabled()) openfl.Assets.cache.setFont(id,font);
		return font;
	}
	return new openfl.text.Font();
};
openfl.Assets.getText = function(id) {
	return lime.Assets.getText(id);
};
openfl.Assets.isValidBitmapData = function(bitmapData) {
	return bitmapData != null && bitmapData.image != null;
	return true;
};
openfl.display.MovieClip = function() {
	openfl.display.Sprite.call(this);
	this.__currentFrame = 0;
	this.__currentLabels = [];
	this.__totalFrames = 0;
	this.enabled = true;
};
$hxClasses["openfl.display.MovieClip"] = openfl.display.MovieClip;
openfl.display.MovieClip.__name__ = true;
openfl.display.MovieClip.__super__ = openfl.display.Sprite;
openfl.display.MovieClip.prototype = $extend(openfl.display.Sprite.prototype,{
	__class__: openfl.display.MovieClip
});
openfl.display.LoaderInfo = function() {
	openfl.events.EventDispatcher.call(this);
	this.applicationDomain = openfl.system.ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["openfl.display.LoaderInfo"] = openfl.display.LoaderInfo;
openfl.display.LoaderInfo.__name__ = true;
openfl.display.LoaderInfo.create = function(loader) {
	var loaderInfo = new openfl.display.LoaderInfo();
	loaderInfo.uncaughtErrorEvents = new openfl.events.UncaughtErrorEvents();
	if(loader != null) loaderInfo.loader = loader; else loaderInfo.url = openfl.display.LoaderInfo.__rootURL;
	return loaderInfo;
};
openfl.display.LoaderInfo.__super__ = openfl.events.EventDispatcher;
openfl.display.LoaderInfo.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	__class__: openfl.display.LoaderInfo
});
openfl.system = {};
openfl.system.ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = openfl.system.ApplicationDomain.currentDomain;
};
$hxClasses["openfl.system.ApplicationDomain"] = openfl.system.ApplicationDomain;
openfl.system.ApplicationDomain.__name__ = true;
openfl.system.ApplicationDomain.prototype = {
	__class__: openfl.system.ApplicationDomain
};
openfl.events.UncaughtErrorEvents = function(target) {
	openfl.events.EventDispatcher.call(this,target);
};
$hxClasses["openfl.events.UncaughtErrorEvents"] = openfl.events.UncaughtErrorEvents;
openfl.events.UncaughtErrorEvents.__name__ = true;
openfl.events.UncaughtErrorEvents.__super__ = openfl.events.EventDispatcher;
openfl.events.UncaughtErrorEvents.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	__class__: openfl.events.UncaughtErrorEvents
});
openfl.geom = {};
openfl.geom.Matrix = function(a,b,c,d,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};
$hxClasses["openfl.geom.Matrix"] = openfl.geom.Matrix;
openfl.geom.Matrix.__name__ = true;
openfl.geom.Matrix.prototype = {
	clone: function() {
		return new openfl.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.ty = this.tx * m.b + this.ty * m.d + m.ty;
		this.tx = tx1;
	}
	,copyFrom: function(sourceMatrix) {
		this.a = sourceMatrix.a;
		this.b = sourceMatrix.b;
		this.c = sourceMatrix.c;
		this.d = sourceMatrix.d;
		this.tx = sourceMatrix.tx;
		this.ty = sourceMatrix.ty;
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0;
		this.ty = 0;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.tx = -this.tx;
			this.ty = -this.ty;
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.ty = -this.b * this.tx - this.d * this.ty;
			this.tx = tx1;
		}
		return this;
	}
	,rotate: function(theta) {
		var cos = Math.cos(theta);
		var sin = Math.sin(theta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.ty = this.tx * sin + this.ty * cos;
		this.tx = tx1;
	}
	,scale: function(sx,sy) {
		this.a *= sx;
		this.b *= sy;
		this.c *= sx;
		this.d *= sy;
		this.tx *= sx;
		this.ty *= sy;
	}
	,to3DString: function(roundPixels) {
		if(roundPixels == null) roundPixels = false;
		if(roundPixels) return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + (this.tx | 0) + ", " + (this.ty | 0) + ", 0, 1)"; else return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", 0, 1)";
	}
	,transformPoint: function(pos) {
		return new openfl.geom.Point(pos.x * this.a + pos.y * this.c + this.tx,pos.x * this.b + pos.y * this.d + this.ty);
	}
	,translate: function(dx,dy) {
		this.tx += dx;
		this.ty += dy;
	}
	,toArray: function(transpose) {
		if(transpose == null) transpose = false;
		if(this.__array == null) {
			var this1;
			this1 = new Float32Array(9);
			this.__array = this1;
		}
		if(transpose) {
			this.__array[0] = this.a;
			this.__array[1] = this.b;
			this.__array[2] = 0;
			this.__array[3] = this.c;
			this.__array[4] = this.d;
			this.__array[5] = 0;
			this.__array[6] = this.tx;
			this.__array[7] = this.ty;
			this.__array[8] = 1;
		} else {
			this.__array[0] = this.a;
			this.__array[1] = this.c;
			this.__array[2] = this.tx;
			this.__array[3] = this.b;
			this.__array[4] = this.d;
			this.__array[5] = this.ty;
			this.__array[6] = 0;
			this.__array[7] = 0;
			this.__array[8] = 1;
		}
		return this.__array;
	}
	,__toMatrix3: function() {
		return new lime.math.Matrix3(this.a,this.b,this.c,this.d,this.tx,this.ty);
	}
	,__transformInversePoint: function(point) {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			point.x = -this.tx;
			point.y = -this.ty;
		} else {
			var px = 1.0 / norm * (this.c * (this.ty - point.y) + this.d * (point.x - this.tx));
			point.y = 1.0 / norm * (this.a * (point.y - this.ty) + this.b * (this.tx - point.x));
			point.x = px;
		}
	}
	,__transformInverseX: function(px,py) {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) return -this.tx; else return 1.0 / norm * (this.c * (this.ty - py) + this.d * (px - this.tx));
	}
	,__transformInverseY: function(px,py) {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) return -this.ty; else return 1.0 / norm * (this.a * (py - this.ty) + this.b * (this.tx - px));
	}
	,__class__: openfl.geom.Matrix
};
openfl.geom.ColorTransform = function(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset) {
	if(alphaOffset == null) alphaOffset = 0;
	if(blueOffset == null) blueOffset = 0;
	if(greenOffset == null) greenOffset = 0;
	if(redOffset == null) redOffset = 0;
	if(alphaMultiplier == null) alphaMultiplier = 1;
	if(blueMultiplier == null) blueMultiplier = 1;
	if(greenMultiplier == null) greenMultiplier = 1;
	if(redMultiplier == null) redMultiplier = 1;
	this.redMultiplier = redMultiplier;
	this.greenMultiplier = greenMultiplier;
	this.blueMultiplier = blueMultiplier;
	this.alphaMultiplier = alphaMultiplier;
	this.redOffset = redOffset;
	this.greenOffset = greenOffset;
	this.blueOffset = blueOffset;
	this.alphaOffset = alphaOffset;
};
$hxClasses["openfl.geom.ColorTransform"] = openfl.geom.ColorTransform;
openfl.geom.ColorTransform.__name__ = true;
openfl.geom.ColorTransform.prototype = {
	__combine: function(ct) {
		this.redMultiplier *= ct.redMultiplier;
		this.greenMultiplier *= ct.greenMultiplier;
		this.blueMultiplier *= ct.blueMultiplier;
		this.alphaMultiplier *= ct.alphaMultiplier;
		this.redOffset += ct.redOffset;
		this.greenOffset += ct.greenOffset;
		this.blueOffset += ct.blueOffset;
		this.alphaOffset += ct.alphaOffset;
	}
	,__equals: function(ct,skipAlphaMultiplier) {
		if(skipAlphaMultiplier == null) skipAlphaMultiplier = false;
		return ct != null && this.redMultiplier == ct.redMultiplier && this.greenMultiplier == ct.greenMultiplier && this.blueMultiplier == ct.blueMultiplier && (skipAlphaMultiplier || this.alphaMultiplier == ct.alphaMultiplier) && this.redOffset == ct.redOffset && this.greenOffset == ct.greenOffset && this.blueOffset == ct.blueOffset && this.alphaOffset == ct.alphaOffset;
	}
	,__clone: function() {
		return new openfl.geom.ColorTransform(this.redMultiplier,this.greenMultiplier,this.blueMultiplier,this.alphaMultiplier,this.redOffset,this.greenOffset,this.blueOffset,this.alphaOffset);
	}
	,__toLimeColorMatrix: function() {
		var array = [this.redMultiplier,0,0,0,this.redOffset / 255,0,this.greenMultiplier,0,0,this.greenOffset / 255,0,0,this.blueMultiplier,0,this.blueOffset / 255,0,0,0,this.alphaMultiplier,this.alphaOffset / 255];
		var this1;
		if(array != null) this1 = new Float32Array(array); else this1 = null;
		return this1;
	}
	,__class__: openfl.geom.ColorTransform
};
openfl.Lib = function() { };
$hxClasses["openfl.Lib"] = openfl.Lib;
openfl.Lib.__name__ = true;
openfl.Lib.application = null;
openfl.Lib.embed = $hx_exports.openfl.embed = function(elementName,width,height,background,assetsPrefix) {
	lime.system.System.embed(elementName,width,height,background,assetsPrefix);
};
openfl.Lib.getTimer = function() {
	return lime.system.System.getTimer();
};
openfl.Lib.getURL = function(request,target) {
	if(target == null) target = "_blank";
	window.open(request.url,target);
};
openfl.Lib.notImplemented = function(api) {
	if(!openfl.Lib.__sentWarnings.exists(api)) {
		openfl.Lib.__sentWarnings.set(api,true);
		haxe.Log.trace("Warning: " + api + " is not implemented",{ fileName : "Lib.hx", lineNumber : 114, className : "openfl.Lib", methodName : "notImplemented"});
	}
};
openfl.VectorData = function() {
	this.length = 0;
};
$hxClasses["openfl.VectorData"] = openfl.VectorData;
openfl.VectorData.__name__ = true;
openfl.VectorData.prototype = {
	__class__: openfl.VectorData
};
openfl._internal = {};
openfl._internal.renderer = {};
openfl._internal.renderer.AbstractMaskManager = function(renderSession) {
	this.renderSession = renderSession;
};
$hxClasses["openfl._internal.renderer.AbstractMaskManager"] = openfl._internal.renderer.AbstractMaskManager;
openfl._internal.renderer.AbstractMaskManager.__name__ = true;
openfl._internal.renderer.AbstractMaskManager.prototype = {
	pushMask: function(mask) {
	}
	,pushRect: function(rect,transform) {
	}
	,popMask: function() {
	}
	,__class__: openfl._internal.renderer.AbstractMaskManager
};
openfl._internal.renderer.AbstractRenderer = function(width,height) {
	this.width = width;
	this.height = height;
};
$hxClasses["openfl._internal.renderer.AbstractRenderer"] = openfl._internal.renderer.AbstractRenderer;
openfl._internal.renderer.AbstractRenderer.__name__ = true;
openfl._internal.renderer.AbstractRenderer.prototype = {
	render: function(stage) {
	}
	,resize: function(width,height) {
	}
	,__class__: openfl._internal.renderer.AbstractRenderer
};
openfl._internal.renderer.GraphicsPaths = function() { };
$hxClasses["openfl._internal.renderer.GraphicsPaths"] = openfl._internal.renderer.GraphicsPaths;
openfl._internal.renderer.GraphicsPaths.__name__ = true;
openfl._internal.renderer.GraphicsPaths.ellipse = function(points,x,y,rx,ry,segmentCount) {
	var seg = Math.PI * 2 / segmentCount;
	var _g1 = 0;
	var _g = segmentCount + 1;
	while(_g1 < _g) {
		var i = _g1++;
		points.push(x + Math.sin(seg * i) * rx);
		points.push(y + Math.cos(seg * i) * ry);
	}
};
openfl._internal.renderer.GraphicsPaths.cubicCurveTo = function(points,cx,cy,cx2,cy2,x,y) {
	var n = 20;
	var dt = 0;
	var dt2 = 0;
	var dt3 = 0;
	var t2 = 0;
	var t3 = 0;
	var fromX = points[points.length - 2];
	var fromY = points[points.length - 1];
	var px = 0;
	var py = 0;
	var tmp = 0;
	var _g1 = 1;
	var _g = n + 1;
	while(_g1 < _g) {
		var i = _g1++;
		tmp = i / n;
		dt = 1 - tmp;
		dt2 = dt * dt;
		dt3 = dt2 * dt;
		t2 = tmp * tmp;
		t3 = t2 * tmp;
		px = dt3 * fromX + 3 * dt2 * tmp * cx + 3 * dt * t2 * cx2 + t3 * x;
		py = dt3 * fromY + 3 * dt2 * tmp * cy + 3 * dt * t2 * cy2 + t3 * y;
		points.push(px);
		points.push(py);
	}
};
openfl._internal.renderer.GraphicsPaths.curveTo = function(points,cx,cy,x,y) {
	var xa = 0;
	var ya = 0;
	var n = 20;
	var fromX = points[points.length - 2];
	var fromY = points[points.length - 1];
	var px = 0;
	var py = 0;
	var tmp = 0;
	var _g1 = 1;
	var _g = n + 1;
	while(_g1 < _g) {
		var i = _g1++;
		tmp = i / n;
		xa = fromX + (cx - fromX) * tmp;
		ya = fromY + (cy - fromY) * tmp;
		px = xa + (cx + (x - cx) * tmp - xa) * tmp;
		py = ya + (cy + (y - cy) * tmp - ya) * tmp;
		points.push(px);
		points.push(py);
	}
};
openfl._internal.renderer.GraphicsPaths.roundRectangle = function(points,x,y,width,height,rx,ry) {
	var xe = x + width;
	var ye = y + height;
	var cx1 = -rx + rx * openfl._internal.renderer.GraphicsPaths.SIN45;
	var cx2 = -rx + rx * openfl._internal.renderer.GraphicsPaths.TAN22;
	var cy1 = -ry + ry * openfl._internal.renderer.GraphicsPaths.SIN45;
	var cy2 = -ry + ry * openfl._internal.renderer.GraphicsPaths.TAN22;
	points.push(xe);
	points.push(ye - ry);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,xe,ye + cy2,xe + cx1,ye + cy1);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,xe + cx2,ye,xe - rx,ye);
	points.push(x + rx);
	points.push(ye);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,x - cx2,ye,x - cx1,ye + cy1);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,x,ye + cy2,x,ye - ry);
	points.push(x);
	points.push(y + ry);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,x,y - cy2,x - cx1,y - cy1);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,x - cx2,y,x + rx,y);
	points.push(xe - rx);
	points.push(y);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,xe + cx2,y,xe + cx1,y - cy1);
	openfl._internal.renderer.GraphicsPaths.curveTo(points,xe,y - cy2,xe,y + ry);
	points.push(xe);
	points.push(ye - ry);
};
openfl._internal.renderer.PolyK = function() { };
$hxClasses["openfl._internal.renderer.PolyK"] = openfl._internal.renderer.PolyK;
openfl._internal.renderer.PolyK.__name__ = true;
openfl._internal.renderer.PolyK.triangulate = function(tgs,p) {
	var sign = true;
	var n = p.length >> 1;
	if(n < 3) return [];
	var avl;
	var _g = [];
	var _g1 = 0;
	while(_g1 < n) {
		var i = _g1++;
		_g.push(i);
	}
	avl = _g;
	var i1 = 0;
	var al = n;
	var earFound = false;
	while(al > 3) {
		var i0 = avl[i1 % al];
		var i11 = avl[(i1 + 1) % al];
		var i2 = avl[(i1 + 2) % al];
		var ax = p[2 * i0];
		var ay = p[2 * i0 + 1];
		var bx = p[2 * i11];
		var by = p[2 * i11 + 1];
		var cx = p[2 * i2];
		var cy = p[2 * i2 + 1];
		earFound = false;
		if(openfl._internal.renderer.PolyK._convex(ax,ay,bx,by,cx,cy,sign)) {
			earFound = true;
			var _g11 = 0;
			while(_g11 < al) {
				var j = _g11++;
				var vi = avl[j];
				if(vi == i0 || vi == i11 || vi == i2) continue;
				if(openfl._internal.renderer.PolyK._PointInTriangle(p[2 * vi],p[2 * vi + 1],ax,ay,bx,by,cx,cy)) {
					earFound = false;
					break;
				}
			}
		}
		if(earFound) {
			tgs.push(i0);
			tgs.push(i11);
			tgs.push(i2);
			avl.splice((i1 + 1) % al,1);
			al--;
			i1 = 0;
		} else if(i1++ > 3 * al) {
			if(sign) {
				tgs = [];
				var _g12 = [];
				var _g2 = 0;
				while(_g2 < n) {
					var k = _g2++;
					_g12.push(k);
				}
				avl = _g12;
				i1 = 0;
				al = n;
				sign = false;
			} else {
				haxe.Log.trace("Warning: shape too complex to fill",{ fileName : "PolyK.hx", lineNumber : 104, className : "openfl._internal.renderer.PolyK", methodName : "triangulate"});
				return [];
			}
		}
	}
	tgs.push(avl[0]);
	tgs.push(avl[1]);
	tgs.push(avl[2]);
	return tgs;
};
openfl._internal.renderer.PolyK._PointInTriangle = function(px,py,ax,ay,bx,by,cx,cy) {
	var v0x = cx - ax | 0;
	var v0y = cy - ay | 0;
	var v1x = bx - ax | 0;
	var v1y = by - ay | 0;
	var v2x = px - ax | 0;
	var v2y = py - ay | 0;
	var dot00 = v0x * v0x + v0y * v0y;
	var dot01 = v0x * v1x + v0y * v1y;
	var dot02 = v0x * v2x + v0y * v2y;
	var dot11 = v1x * v1x + v1y * v1y;
	var dot12 = v1x * v2x + v1y * v2y;
	var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);
	var u = (dot11 * dot02 - dot01 * dot12) * invDenom;
	var v = (dot00 * dot12 - dot01 * dot02) * invDenom;
	return u >= 0 && v >= 0 && u + v < 1;
};
openfl._internal.renderer.PolyK._convex = function(ax,ay,bx,by,cx,cy,sign) {
	return (ay - by) * (cx - bx) + (bx - ax) * (cy - by) >= 0 == sign;
};
openfl._internal.renderer.RenderSession = function() {
};
$hxClasses["openfl._internal.renderer.RenderSession"] = openfl._internal.renderer.RenderSession;
openfl._internal.renderer.RenderSession.__name__ = true;
openfl._internal.renderer.RenderSession.prototype = {
	__class__: openfl._internal.renderer.RenderSession
};
openfl._internal.renderer.cairo = {};
openfl._internal.renderer.cairo.CairoBitmap = function() { };
$hxClasses["openfl._internal.renderer.cairo.CairoBitmap"] = openfl._internal.renderer.cairo.CairoBitmap;
openfl._internal.renderer.cairo.CairoBitmap.__name__ = true;
openfl._internal.renderer.cairo.CairoBitmap.render = function(bitmap,renderSession) {
	if(!bitmap.__renderable || bitmap.__worldAlpha <= 0) return;
	var cairo = renderSession.cairo;
	if(bitmap.bitmapData != null && bitmap.bitmapData.__isValid) {
		if(bitmap.__mask != null) renderSession.maskManager.pushMask(bitmap.__mask);
		var transform = bitmap.__worldTransform;
		var scrollRect = bitmap.get_scrollRect();
		if(renderSession.roundPixels) {
			var matrix = transform.__toMatrix3();
			matrix.tx = Math.round(matrix.tx);
			matrix.ty = Math.round(matrix.ty);
			cairo.set_matrix(matrix);
		} else cairo.set_matrix(transform.__toMatrix3());
		var surface = bitmap.bitmapData.getSurface();
		if(surface != null) {
			var pattern = lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.createForSurface(surface);
			lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.set_filter(pattern,bitmap.smoothing?1:3);
			if(scrollRect != null) {
				cairo.pushGroup();
				cairo.set_source(pattern);
				cairo.newPath();
				cairo.rectangle(scrollRect.x,scrollRect.y,scrollRect.width,scrollRect.height);
				cairo.fill();
				cairo.popGroupToSource();
			} else cairo.set_source(pattern);
			if(bitmap.__worldAlpha == 1) cairo.paint(); else cairo.paintWithAlpha(bitmap.__worldAlpha);
			lime.graphics.cairo._CairoPattern.CairoPattern_Impl_.destroy(pattern);
		}
		if(bitmap.__mask != null) renderSession.maskManager.popMask();
	}
};
openfl._internal.renderer.cairo.CairoGraphics = function() { };
$hxClasses["openfl._internal.renderer.cairo.CairoGraphics"] = openfl._internal.renderer.cairo.CairoGraphics;
openfl._internal.renderer.cairo.CairoGraphics.__name__ = true;
openfl._internal.renderer.cairo.CairoGraphics.cairo = null;
openfl._internal.renderer.cairo.CairoGraphics.drawRoundRect = function(x,y,width,height,rx,ry) {
	if(ry == -1) ry = rx;
	rx *= 0.5;
	ry *= 0.5;
	if(rx > width / 2) rx = width / 2;
	if(ry > height / 2) ry = height / 2;
	var xe = x + width;
	var ye = y + height;
	var cx1 = -rx + rx * openfl._internal.renderer.cairo.CairoGraphics.SIN45;
	var cx2 = -rx + rx * openfl._internal.renderer.cairo.CairoGraphics.TAN22;
	var cy1 = -ry + ry * openfl._internal.renderer.cairo.CairoGraphics.SIN45;
	var cy2 = -ry + ry * openfl._internal.renderer.cairo.CairoGraphics.TAN22;
	openfl._internal.renderer.cairo.CairoGraphics.cairo.moveTo(xe,ye - ry);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(xe,ye + cy2,xe + cx1,ye + cy1);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(xe + cx2,ye,xe - rx,ye);
	openfl._internal.renderer.cairo.CairoGraphics.cairo.lineTo(x + rx,ye);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(x - cx2,ye,x - cx1,ye + cy1);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(x,ye + cy2,x,ye - ry);
	openfl._internal.renderer.cairo.CairoGraphics.cairo.lineTo(x,y + ry);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(x,y - cy2,x - cx1,y - cy1);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(x - cx2,y,x + rx,y);
	openfl._internal.renderer.cairo.CairoGraphics.cairo.lineTo(xe - rx,y);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(xe + cx2,y,xe + cx1,y - cy1);
	openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(xe,y - cy2,xe,y + ry);
	openfl._internal.renderer.cairo.CairoGraphics.cairo.lineTo(xe,ye - ry);
};
openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo = function(cx,cy,x,y) {
	var current = null;
	if(!openfl._internal.renderer.cairo.CairoGraphics.cairo.get_hasCurrentPoint()) {
		openfl._internal.renderer.cairo.CairoGraphics.cairo.moveTo(cx,cy);
		current = new lime.math.Vector2(cx,cy);
	} else current = openfl._internal.renderer.cairo.CairoGraphics.cairo.get_currentPoint();
	var cx1 = current.x + 0.66666666666666663 * (cx - current.x);
	var cy1 = current.y + 0.66666666666666663 * (cy - current.y);
	var cx2 = x + 0.66666666666666663 * (cx - x);
	var cy2 = y + 0.66666666666666663 * (cy - y);
	openfl._internal.renderer.cairo.CairoGraphics.cairo.curveTo(cx1,cy1,cx2,cy2,x,y);
};
openfl._internal.renderer.cairo.CairoGraphics.renderMask = function(graphics,renderSession) {
	if(graphics.__commands.length != 0) {
		var cairo = renderSession.cairo;
		var positionX = 0.0;
		var positionY = 0.0;
		var offsetX = 0;
		var offsetY = 0;
		var _g = 0;
		var _g1 = graphics.__commands;
		while(_g < _g1.length) {
			var command = _g1[_g];
			++_g;
			switch(command[1]) {
			case 3:
				var y = command[7];
				var x = command[6];
				var cy2 = command[5];
				var cy1 = command[4];
				var cx2 = command[3];
				var cx1 = command[2];
				cairo.curveTo(cx1 - offsetX,cy1 - offsetY,cx2 - offsetX,cy2 - offsetY,x - offsetX,y - offsetY);
				positionX = x;
				positionY = y;
				break;
			case 4:
				var y1 = command[5];
				var x1 = command[4];
				var cy = command[3];
				var cx = command[2];
				openfl._internal.renderer.cairo.CairoGraphics.quadraticCurveTo(cx - offsetX,cy - offsetY,x1 - offsetX,y1 - offsetY);
				positionX = x1;
				positionY = y1;
				break;
			case 5:
				var radius = command[4];
				var y2 = command[3];
				var x2 = command[2];
				cairo.arc(x2 - offsetX,y2 - offsetY,radius,0,Math.PI * 2);
				break;
			case 6:
				var height = command[5];
				var width = command[4];
				var y3 = command[3];
				var x3 = command[2];
				x3 -= offsetX;
				y3 -= offsetY;
				var kappa = .5522848;
				var ox = width / 2 * kappa;
				var oy = height / 2 * kappa;
				var xe = x3 + width;
				var ye = y3 + height;
				var xm = x3 + width / 2;
				var ym = y3 + height / 2;
				cairo.moveTo(x3,ym);
				cairo.curveTo(x3,ym - oy,xm - ox,y3,xm,y3);
				cairo.curveTo(xm + ox,y3,xe,ym - oy,xe,ym);
				cairo.curveTo(xe,ym + oy,xm + ox,ye,xm,ye);
				cairo.curveTo(xm - ox,ye,x3,ym + oy,x3,ym);
				break;
			case 7:
				var height1 = command[5];
				var width1 = command[4];
				var y4 = command[3];
				var x4 = command[2];
				cairo.rectangle(x4 - offsetX,y4 - offsetY,width1,height1);
				break;
			case 8:
				var ry = command[7];
				var rx = command[6];
				var height2 = command[5];
				var width2 = command[4];
				var y5 = command[3];
				var x5 = command[2];
				openfl._internal.renderer.cairo.CairoGraphics.drawRoundRect(x5 - offsetX,y5 - offsetY,width2,height2,rx,ry);
				break;
			case 15:
				var y6 = command[3];
				var x6 = command[2];
				cairo.lineTo(x6 - offsetX,y6 - offsetY);
				positionX = x6;
				positionY = y6;
				break;
			case 16:
				var y7 = command[3];
				var x7 = command[2];
				cairo.moveTo(x7 - offsetX,y7 - offsetY);
				positionX = x7;
				positionY = y7;
				break;
			default:
			}
		}
	}
};
openfl._internal.renderer.cairo.CairoMaskManager = function(renderSession) {
	openfl._internal.renderer.AbstractMaskManager.call(this,renderSession);
};
$hxClasses["openfl._internal.renderer.cairo.CairoMaskManager"] = openfl._internal.renderer.cairo.CairoMaskManager;
openfl._internal.renderer.cairo.CairoMaskManager.__name__ = true;
openfl._internal.renderer.cairo.CairoMaskManager.__super__ = openfl._internal.renderer.AbstractMaskManager;
openfl._internal.renderer.cairo.CairoMaskManager.prototype = $extend(openfl._internal.renderer.AbstractMaskManager.prototype,{
	pushMask: function(mask) {
		var cairo = this.renderSession.cairo;
		cairo.save();
		var transform = mask.__getTransform();
		cairo.set_matrix(transform.__toMatrix3());
		cairo.newPath();
		mask.__renderCairoMask(this.renderSession);
		cairo.clip();
	}
	,pushRect: function(rect,transform) {
		var cairo = this.renderSession.cairo;
		cairo.save();
		cairo.set_matrix(new lime.math.Matrix3(transform.a,transform.c,transform.b,transform.d,transform.tx,transform.ty));
		cairo.newPath();
		cairo.rectangle(rect.x,rect.y,rect.width,rect.height);
		cairo.clip();
	}
	,popMask: function() {
		this.renderSession.cairo.restore();
	}
	,__class__: openfl._internal.renderer.cairo.CairoMaskManager
});
openfl._internal.renderer.cairo.CairoRenderer = function(width,height,cairo) {
	openfl._internal.renderer.AbstractRenderer.call(this,width,height);
	this.cairo = cairo;
	this.renderSession = new openfl._internal.renderer.RenderSession();
	this.renderSession.cairo = cairo;
	this.renderSession.roundPixels = true;
	this.renderSession.renderer = this;
	this.renderSession.maskManager = new openfl._internal.renderer.cairo.CairoMaskManager(this.renderSession);
};
$hxClasses["openfl._internal.renderer.cairo.CairoRenderer"] = openfl._internal.renderer.cairo.CairoRenderer;
openfl._internal.renderer.cairo.CairoRenderer.__name__ = true;
openfl._internal.renderer.cairo.CairoRenderer.__super__ = openfl._internal.renderer.AbstractRenderer;
openfl._internal.renderer.cairo.CairoRenderer.prototype = $extend(openfl._internal.renderer.AbstractRenderer.prototype,{
	render: function(stage) {
		this.cairo.identityMatrix();
		if(stage.__clearBeforeRender) {
			this.cairo.setSourceRGB(stage.__colorSplit[0],stage.__colorSplit[1],stage.__colorSplit[2]);
			this.cairo.paint();
		}
		stage.__renderCairo(this.renderSession);
	}
	,__class__: openfl._internal.renderer.cairo.CairoRenderer
});
openfl._internal.renderer.cairo.CairoShape = function() { };
$hxClasses["openfl._internal.renderer.cairo.CairoShape"] = openfl._internal.renderer.cairo.CairoShape;
openfl._internal.renderer.cairo.CairoShape.__name__ = true;
openfl._internal.renderer.cairo.CairoShape.render = function(shape,renderSession) {
};
openfl._internal.renderer.cairo.CairoTextField = function() { };
$hxClasses["openfl._internal.renderer.cairo.CairoTextField"] = openfl._internal.renderer.cairo.CairoTextField;
openfl._internal.renderer.cairo.CairoTextField.__name__ = true;
openfl._internal.renderer.cairo.CairoTextField.render = function(textField,renderSession) {
};
openfl._internal.renderer.canvas = {};
openfl._internal.renderer.canvas.CanvasBitmap = function() { };
$hxClasses["openfl._internal.renderer.canvas.CanvasBitmap"] = openfl._internal.renderer.canvas.CanvasBitmap;
openfl._internal.renderer.canvas.CanvasBitmap.__name__ = true;
openfl._internal.renderer.canvas.CanvasBitmap.render = function(bitmap,renderSession) {
	if(!bitmap.__renderable || bitmap.__worldAlpha <= 0) return;
	var context = renderSession.context;
	if(bitmap.bitmapData != null && bitmap.bitmapData.__isValid) {
		if(bitmap.__mask != null) renderSession.maskManager.pushMask(bitmap.__mask);
		bitmap.bitmapData.__sync();
		context.globalAlpha = bitmap.__worldAlpha;
		var transform = bitmap.__worldTransform;
		var scrollRect = bitmap.get_scrollRect();
		if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		if(!bitmap.smoothing) {
			context.mozImageSmoothingEnabled = false;
			context.msImageSmoothingEnabled = false;
			context.imageSmoothingEnabled = false;
		}
		if(scrollRect == null) context.drawImage(bitmap.bitmapData.image.get_src(),0,0); else context.drawImage(bitmap.bitmapData.image.get_src(),scrollRect.x,scrollRect.y,scrollRect.width,scrollRect.height,scrollRect.x,scrollRect.y,scrollRect.width,scrollRect.height);
		if(!bitmap.smoothing) {
			context.mozImageSmoothingEnabled = true;
			context.msImageSmoothingEnabled = true;
			context.imageSmoothingEnabled = true;
		}
		if(bitmap.__mask != null) renderSession.maskManager.popMask();
	}
};
openfl._internal.renderer.canvas.CanvasGraphics = function() { };
$hxClasses["openfl._internal.renderer.canvas.CanvasGraphics"] = openfl._internal.renderer.canvas.CanvasGraphics;
openfl._internal.renderer.canvas.CanvasGraphics.__name__ = true;
openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill = null;
openfl._internal.renderer.canvas.CanvasGraphics.bitmapRepeat = null;
openfl._internal.renderer.canvas.CanvasGraphics.bounds = null;
openfl._internal.renderer.canvas.CanvasGraphics.graphics = null;
openfl._internal.renderer.canvas.CanvasGraphics.hasFill = null;
openfl._internal.renderer.canvas.CanvasGraphics.hasStroke = null;
openfl._internal.renderer.canvas.CanvasGraphics.hitTesting = null;
openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix = null;
openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix = null;
openfl._internal.renderer.canvas.CanvasGraphics.context = null;
openfl._internal.renderer.canvas.CanvasGraphics.closePath = function() {
	if(openfl._internal.renderer.canvas.CanvasGraphics.context.strokeStyle == null) return;
	openfl._internal.renderer.canvas.CanvasGraphics.context.closePath();
	openfl._internal.renderer.canvas.CanvasGraphics.context.stroke();
	openfl._internal.renderer.canvas.CanvasGraphics.context.beginPath();
};
openfl._internal.renderer.canvas.CanvasGraphics.createBitmapFill = function(bitmap,bitmapRepeat) {
	bitmap.__sync();
	return openfl._internal.renderer.canvas.CanvasGraphics.context.createPattern(bitmap.image.get_src(),bitmapRepeat?"repeat":"no-repeat");
	return null;
};
openfl._internal.renderer.canvas.CanvasGraphics.createGradientPattern = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	var gradientFill = null;
	switch(type[1]) {
	case 0:
		if(matrix == null) matrix = new openfl.geom.Matrix();
		var point = matrix.transformPoint(new openfl.geom.Point(1638.4,0));
		gradientFill = openfl._internal.renderer.canvas.CanvasGraphics.context.createRadialGradient(matrix.tx,matrix.ty,0,matrix.tx,matrix.ty,(point.x - matrix.tx) / 2);
		break;
	case 1:
		var matrix1;
		if(matrix != null) matrix1 = matrix; else matrix1 = new openfl.geom.Matrix();
		var point1 = matrix1.transformPoint(new openfl.geom.Point(-819.2,0));
		var point2 = matrix1.transformPoint(new openfl.geom.Point(819.2,0));
		gradientFill = openfl._internal.renderer.canvas.CanvasGraphics.context.createLinearGradient(point1.x,point1.y,point2.x,point2.y);
		break;
	}
	var _g1 = 0;
	var _g = colors.length;
	while(_g1 < _g) {
		var i = _g1++;
		var rgb = colors[i];
		var alpha = alphas[i];
		var r = (rgb & 16711680) >>> 16;
		var g = (rgb & 65280) >>> 8;
		var b = rgb & 255;
		var ratio = ratios[i] / 255;
		if(ratio < 0) ratio = 0;
		if(ratio > 1) ratio = 1;
		gradientFill.addColorStop(ratio,"rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")");
	}
	return gradientFill;
};
openfl._internal.renderer.canvas.CanvasGraphics.createTempPatternCanvas = function(bitmap,repeat,width,height) {
	var canvas = window.document.createElement("canvas");
	var context = canvas.getContext("2d");
	canvas.width = width;
	canvas.height = height;
	context.fillStyle = context.createPattern(bitmap.image.get_src(),repeat?"repeat":"no-repeat");
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(0,height);
	context.lineTo(width,height);
	context.lineTo(width,0);
	context.lineTo(0,0);
	context.closePath();
	if(!openfl._internal.renderer.canvas.CanvasGraphics.hitTesting) context.fill();
	return canvas;
};
openfl._internal.renderer.canvas.CanvasGraphics.drawRoundRect = function(x,y,width,height,rx,ry) {
	if(ry == -1) ry = rx;
	rx *= 0.5;
	ry *= 0.5;
	if(rx > width / 2) rx = width / 2;
	if(ry > height / 2) ry = height / 2;
	var xe = x + width;
	var ye = y + height;
	var cx1 = -rx + rx * openfl._internal.renderer.canvas.CanvasGraphics.SIN45;
	var cx2 = -rx + rx * openfl._internal.renderer.canvas.CanvasGraphics.TAN22;
	var cy1 = -ry + ry * openfl._internal.renderer.canvas.CanvasGraphics.SIN45;
	var cy2 = -ry + ry * openfl._internal.renderer.canvas.CanvasGraphics.TAN22;
	openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(xe,ye - ry);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(xe,ye + cy2,xe + cx1,ye + cy1);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(xe + cx2,ye,xe - rx,ye);
	openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x + rx,ye);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(x - cx2,ye,x - cx1,ye + cy1);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(x,ye + cy2,x,ye - ry);
	openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x,y + ry);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(x,y - cy2,x - cx1,y - cy1);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(x - cx2,y,x + rx,y);
	openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(xe - rx,y);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(xe + cx2,y,xe + cx1,y - cy1);
	openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(xe,y - cy2,xe,y + ry);
	openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(xe,ye - ry);
};
openfl._internal.renderer.canvas.CanvasGraphics.endFill = function() {
	openfl._internal.renderer.canvas.CanvasGraphics.context.beginPath();
	openfl._internal.renderer.canvas.CanvasGraphics.playCommands(openfl._internal.renderer.canvas.CanvasGraphics.fillCommands,false);
	openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.splice(0,openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.length);
};
openfl._internal.renderer.canvas.CanvasGraphics.endStroke = function() {
	openfl._internal.renderer.canvas.CanvasGraphics.context.beginPath();
	openfl._internal.renderer.canvas.CanvasGraphics.playCommands(openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands,true);
	openfl._internal.renderer.canvas.CanvasGraphics.context.closePath();
	openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.splice(0,openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.length);
};
openfl._internal.renderer.canvas.CanvasGraphics.hitTest = function(graphics,x,y) {
	if(!graphics.__visible || graphics.__commands.length == 0 || openfl._internal.renderer.canvas.CanvasGraphics.bounds == null || openfl._internal.renderer.canvas.CanvasGraphics.bounds.width <= 0 || openfl._internal.renderer.canvas.CanvasGraphics.bounds.height <= 0) {
		graphics.__canvas = null;
		graphics.__context = null;
		graphics.__bitmap = null;
		return false;
	} else {
		openfl._internal.renderer.canvas.CanvasGraphics.hitTesting = true;
		x -= openfl._internal.renderer.canvas.CanvasGraphics.bounds.x;
		y -= openfl._internal.renderer.canvas.CanvasGraphics.bounds.y;
		if(graphics.__canvas == null) {
			graphics.__canvas = window.document.createElement("canvas");
			graphics.__context = graphics.__canvas.getContext("2d");
		}
		openfl._internal.renderer.canvas.CanvasGraphics.context = graphics.__context;
		openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.splice(0,openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.length);
		openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.splice(0,openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.length);
		openfl._internal.renderer.canvas.CanvasGraphics.hasFill = false;
		openfl._internal.renderer.canvas.CanvasGraphics.hasStroke = false;
		openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill = null;
		openfl._internal.renderer.canvas.CanvasGraphics.bitmapRepeat = false;
		openfl._internal.renderer.canvas.CanvasGraphics.context.beginPath();
		var _g = 0;
		var _g1 = graphics.__commands;
		while(_g < _g1.length) {
			var command = _g1[_g];
			++_g;
			switch(command[1]) {
			case 3:case 4:case 15:case 16:
				openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.push(command);
				openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
				break;
			case 12:case 14:case 13:
				openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
				break;
			case 11:
				openfl._internal.renderer.canvas.CanvasGraphics.endFill();
				openfl._internal.renderer.canvas.CanvasGraphics.endStroke();
				if(openfl._internal.renderer.canvas.CanvasGraphics.hasFill && openfl._internal.renderer.canvas.CanvasGraphics.context.isPointInPath(x,y)) return true;
				if(openfl._internal.renderer.canvas.CanvasGraphics.hasStroke && openfl._internal.renderer.canvas.CanvasGraphics.context.isPointInStroke(x,y)) return true;
				openfl._internal.renderer.canvas.CanvasGraphics.hasFill = false;
				openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill = null;
				break;
			case 0:case 1:case 2:
				openfl._internal.renderer.canvas.CanvasGraphics.endFill();
				openfl._internal.renderer.canvas.CanvasGraphics.endStroke();
				if(openfl._internal.renderer.canvas.CanvasGraphics.hasFill && openfl._internal.renderer.canvas.CanvasGraphics.context.isPointInPath(x,y)) return true;
				if(openfl._internal.renderer.canvas.CanvasGraphics.hasStroke && openfl._internal.renderer.canvas.CanvasGraphics.context.isPointInStroke(x,y)) return true;
				openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.push(command);
				openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
				break;
			case 5:case 6:case 7:case 8:
				openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.push(command);
				openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
				break;
			default:
			}
		}
		if(openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.length > 0) openfl._internal.renderer.canvas.CanvasGraphics.endFill();
		if(openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.length > 0) openfl._internal.renderer.canvas.CanvasGraphics.endStroke();
		if(openfl._internal.renderer.canvas.CanvasGraphics.hasFill && openfl._internal.renderer.canvas.CanvasGraphics.context.isPointInPath(x,y)) return true;
		if(openfl._internal.renderer.canvas.CanvasGraphics.hasStroke && openfl._internal.renderer.canvas.CanvasGraphics.context.isPointInStroke(x,y)) return true;
	}
	return false;
};
openfl._internal.renderer.canvas.CanvasGraphics.normalizeUVT = function(uvt,skipT) {
	if(skipT == null) skipT = false;
	var max = Math.NEGATIVE_INFINITY;
	var tmp = Math.NEGATIVE_INFINITY;
	var len = uvt.length;
	var _g1 = 1;
	var _g = len + 1;
	while(_g1 < _g) {
		var t = _g1++;
		if(skipT && t % 3 == 0) continue;
		tmp = uvt.data[t - 1];
		if(max < tmp) max = tmp;
	}
	var result;
	var this1;
	this1 = new openfl.VectorData();
	var this2;
	this2 = new Array(0);
	this1.data = this2;
	this1.length = 0;
	this1.fixed = false;
	result = this1;
	var _g11 = 1;
	var _g2 = len + 1;
	while(_g11 < _g2) {
		var t1 = _g11++;
		if(skipT && t1 % 3 == 0) continue;
		if(!result.fixed) {
			result.length++;
			if(result.data.length < result.length) {
				var data;
				var this3;
				this3 = new Array(result.data.length + 10);
				data = this3;
				haxe.ds._Vector.Vector_Impl_.blit(result.data,0,data,0,result.data.length);
				result.data = data;
			}
			result.data[result.length - 1] = uvt.data[t1 - 1] / max;
		}
		result.length;
	}
	return { max : max, uvt : result};
};
openfl._internal.renderer.canvas.CanvasGraphics.playCommands = function(commands,stroke) {
	if(stroke == null) stroke = false;
	openfl._internal.renderer.canvas.CanvasGraphics.bounds = openfl._internal.renderer.canvas.CanvasGraphics.graphics.__bounds;
	var offsetX = openfl._internal.renderer.canvas.CanvasGraphics.bounds.x;
	var offsetY = openfl._internal.renderer.canvas.CanvasGraphics.bounds.y;
	var positionX = 0.0;
	var positionY = 0.0;
	var closeGap = false;
	var startX = 0.0;
	var startY = 0.0;
	var _g = 0;
	while(_g < commands.length) {
		var command = commands[_g];
		++_g;
		switch(command[1]) {
		case 3:
			var y = command[7];
			var x = command[6];
			var cy2 = command[5];
			var cx2 = command[4];
			var cy1 = command[3];
			var cx1 = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(cx1 - offsetX,cy1 - offsetY,cx2 - offsetX,cy2 - offsetY,x - offsetX,y - offsetY);
			break;
		case 4:
			var y1 = command[5];
			var x1 = command[4];
			var cy = command[3];
			var cx = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(cx - offsetX,cy - offsetY,x1 - offsetX,y1 - offsetY);
			break;
		case 5:
			var radius = command[4];
			var y2 = command[3];
			var x2 = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(x2 - offsetX + radius,y2 - offsetY);
			openfl._internal.renderer.canvas.CanvasGraphics.context.arc(x2 - offsetX,y2 - offsetY,radius,0,Math.PI * 2,true);
			break;
		case 6:
			var height = command[5];
			var width = command[4];
			var y3 = command[3];
			var x3 = command[2];
			x3 -= offsetX;
			y3 -= offsetY;
			var kappa = .5522848;
			var ox = width / 2 * kappa;
			var oy = height / 2 * kappa;
			var xe = x3 + width;
			var ye = y3 + height;
			var xm = x3 + width / 2;
			var ym = y3 + height / 2;
			openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(x3,ym);
			openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(x3,ym - oy,xm - ox,y3,xm,y3);
			openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(xm + ox,y3,xe,ym - oy,xe,ym);
			openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
			openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(xm - ox,ye,x3,ym + oy,x3,ym);
			break;
		case 8:
			var ry = command[7];
			var rx = command[6];
			var height1 = command[5];
			var width1 = command[4];
			var y4 = command[3];
			var x4 = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.drawRoundRect(x4 - offsetX,y4 - offsetY,width1,height1,rx,ry);
			break;
		case 15:
			var y5 = command[3];
			var x5 = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x5 - offsetX,y5 - offsetY);
			positionX = x5;
			positionY = y5;
			break;
		case 16:
			var y6 = command[3];
			var x6 = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(x6 - offsetX,y6 - offsetY);
			positionX = x6;
			positionY = y6;
			closeGap = true;
			startX = x6;
			startY = y6;
			break;
		case 12:
			var miterLimit = command[9];
			var joints = command[8];
			var caps = command[7];
			var scaleMode = command[6];
			var pixelHinting = command[5];
			var alpha = command[4];
			var color = command[3];
			var thickness = command[2];
			if(stroke && openfl._internal.renderer.canvas.CanvasGraphics.hasStroke) {
				openfl._internal.renderer.canvas.CanvasGraphics.context.closePath();
				if(!openfl._internal.renderer.canvas.CanvasGraphics.hitTesting) openfl._internal.renderer.canvas.CanvasGraphics.context.stroke();
				openfl._internal.renderer.canvas.CanvasGraphics.context.beginPath();
			}
			openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(positionX - offsetX,positionY - offsetY);
			if(thickness == null) openfl._internal.renderer.canvas.CanvasGraphics.hasStroke = false; else {
				openfl._internal.renderer.canvas.CanvasGraphics.context.lineWidth = thickness;
				if(joints == null) openfl._internal.renderer.canvas.CanvasGraphics.context.lineJoin = "round"; else openfl._internal.renderer.canvas.CanvasGraphics.context.lineJoin = Std.string(joints).toLowerCase();
				if(caps == null) openfl._internal.renderer.canvas.CanvasGraphics.context.lineCap = "round"; else switch(caps[1]) {
				case 0:
					openfl._internal.renderer.canvas.CanvasGraphics.context.lineCap = "butt";
					break;
				default:
					openfl._internal.renderer.canvas.CanvasGraphics.context.lineCap = Std.string(caps).toLowerCase();
				}
				if(miterLimit == null) openfl._internal.renderer.canvas.CanvasGraphics.context.miterLimit = 3; else openfl._internal.renderer.canvas.CanvasGraphics.context.miterLimit = miterLimit;
				if(alpha == 1 || alpha == null) if(color == null) openfl._internal.renderer.canvas.CanvasGraphics.context.strokeStyle = "#000000"; else openfl._internal.renderer.canvas.CanvasGraphics.context.strokeStyle = "#" + StringTools.hex(color & 16777215,6); else {
					var r = (color & 16711680) >>> 16;
					var g = (color & 65280) >>> 8;
					var b = color & 255;
					if(color == null) openfl._internal.renderer.canvas.CanvasGraphics.context.strokeStyle = "#000000"; else openfl._internal.renderer.canvas.CanvasGraphics.context.strokeStyle = "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
				}
				openfl._internal.renderer.canvas.CanvasGraphics.hasStroke = true;
			}
			break;
		case 14:
			var focalPointRatio = command[9];
			var interpolationMethod = command[8];
			var spreadMethod = command[7];
			var matrix = command[6];
			var ratios = command[5];
			var alphas = command[4];
			var colors = command[3];
			var type = command[2];
			if(stroke && openfl._internal.renderer.canvas.CanvasGraphics.hasStroke) openfl._internal.renderer.canvas.CanvasGraphics.closePath();
			openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(positionX - offsetX,positionY - offsetY);
			openfl._internal.renderer.canvas.CanvasGraphics.context.strokeStyle = openfl._internal.renderer.canvas.CanvasGraphics.createGradientPattern(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
			openfl._internal.renderer.canvas.CanvasGraphics.hasStroke = true;
			break;
		case 13:
			var smooth = command[5];
			var repeat = command[4];
			var matrix1 = command[3];
			var bitmap = command[2];
			if(stroke && openfl._internal.renderer.canvas.CanvasGraphics.hasStroke) openfl._internal.renderer.canvas.CanvasGraphics.closePath();
			openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(positionX - offsetX,positionY - offsetY);
			openfl._internal.renderer.canvas.CanvasGraphics.context.strokeStyle = openfl._internal.renderer.canvas.CanvasGraphics.createBitmapFill(bitmap,repeat);
			openfl._internal.renderer.canvas.CanvasGraphics.hasStroke = true;
			break;
		case 0:
			var smooth1 = command[5];
			var repeat1 = command[4];
			var matrix2 = command[3];
			var bitmap1 = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.context.fillStyle = openfl._internal.renderer.canvas.CanvasGraphics.createBitmapFill(bitmap1,true);
			openfl._internal.renderer.canvas.CanvasGraphics.hasFill = true;
			if(matrix2 != null) {
				openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix = matrix2;
				openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix = new openfl.geom.Matrix(matrix2.a,matrix2.b,matrix2.c,matrix2.d,matrix2.tx,matrix2.ty);
				openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.invert();
			} else {
				openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix = null;
				openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix = null;
			}
			break;
		case 1:
			var alpha1 = command[3];
			var rgb = command[2];
			if(alpha1 < 0.005) openfl._internal.renderer.canvas.CanvasGraphics.hasFill = false; else {
				if(alpha1 == 1) openfl._internal.renderer.canvas.CanvasGraphics.context.fillStyle = "#" + StringTools.hex(rgb,6); else {
					var r1 = (rgb & 16711680) >>> 16;
					var g1 = (rgb & 65280) >>> 8;
					var b1 = rgb & 255;
					openfl._internal.renderer.canvas.CanvasGraphics.context.fillStyle = "rgba(" + r1 + ", " + g1 + ", " + b1 + ", " + alpha1 + ")";
				}
				openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill = null;
				openfl._internal.renderer.canvas.CanvasGraphics.hasFill = true;
			}
			break;
		case 2:
			var focalPointRatio1 = command[9];
			var interpolationMethod1 = command[8];
			var spreadMethod1 = command[7];
			var matrix3 = command[6];
			var ratios1 = command[5];
			var alphas1 = command[4];
			var colors1 = command[3];
			var type1 = command[2];
			openfl._internal.renderer.canvas.CanvasGraphics.context.fillStyle = openfl._internal.renderer.canvas.CanvasGraphics.createGradientPattern(type1,colors1,alphas1,ratios1,matrix3,spreadMethod1,interpolationMethod1,focalPointRatio1);
			openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill = null;
			openfl._internal.renderer.canvas.CanvasGraphics.hasFill = true;
			break;
		case 7:
			var height2 = command[5];
			var width2 = command[4];
			var y7 = command[3];
			var x7 = command[2];
			var optimizationUsed = false;
			if(openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill != null) {
				var st = 0;
				var sr = 0;
				var sb = 0;
				var sl = 0;
				var canOptimizeMatrix = true;
				if(openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix != null) {
					if(openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.b != 0 || openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.c != 0) canOptimizeMatrix = false; else {
						var stl = openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.transformPoint(new openfl.geom.Point(x7,y7));
						var sbr = openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.transformPoint(new openfl.geom.Point(x7 + width2,y7 + height2));
						st = stl.y;
						sl = stl.x;
						sb = sbr.y;
						sr = sbr.x;
					}
				} else {
					st = y7;
					sl = x7;
					sb = y7 + height2;
					sr = x7 + width2;
				}
				if(canOptimizeMatrix && st >= 0 && sl >= 0 && sr <= openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill.width && sb <= openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill.height) {
					optimizationUsed = true;
					if(!openfl._internal.renderer.canvas.CanvasGraphics.hitTesting) openfl._internal.renderer.canvas.CanvasGraphics.context.drawImage(openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill.image.get_src(),sl,st,sr - sl,sb - st,x7 - offsetX,y7 - offsetY,width2,height2);
				}
			}
			if(!optimizationUsed) openfl._internal.renderer.canvas.CanvasGraphics.context.rect(x7 - offsetX,y7 - offsetY,width2,height2);
			break;
		default:
		}
	}
	if(stroke && openfl._internal.renderer.canvas.CanvasGraphics.hasStroke) {
		if(openfl._internal.renderer.canvas.CanvasGraphics.hasFill && closeGap) openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(startX - offsetX,startY - offsetY);
		if(!openfl._internal.renderer.canvas.CanvasGraphics.hitTesting) openfl._internal.renderer.canvas.CanvasGraphics.context.stroke();
	}
	if(!stroke) {
		if(openfl._internal.renderer.canvas.CanvasGraphics.hasFill || openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill != null) {
			openfl._internal.renderer.canvas.CanvasGraphics.context.translate(-openfl._internal.renderer.canvas.CanvasGraphics.bounds.x,-openfl._internal.renderer.canvas.CanvasGraphics.bounds.y);
			if(openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix != null) {
				openfl._internal.renderer.canvas.CanvasGraphics.context.transform(openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.a,openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.b,openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.c,openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.d,openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.tx,openfl._internal.renderer.canvas.CanvasGraphics.pendingMatrix.ty);
				if(!openfl._internal.renderer.canvas.CanvasGraphics.hitTesting) openfl._internal.renderer.canvas.CanvasGraphics.context.fill();
				openfl._internal.renderer.canvas.CanvasGraphics.context.transform(openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.a,openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.b,openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.c,openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.d,openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.tx,openfl._internal.renderer.canvas.CanvasGraphics.inversePendingMatrix.ty);
			} else if(!openfl._internal.renderer.canvas.CanvasGraphics.hitTesting) openfl._internal.renderer.canvas.CanvasGraphics.context.fill();
			openfl._internal.renderer.canvas.CanvasGraphics.context.translate(openfl._internal.renderer.canvas.CanvasGraphics.bounds.x,openfl._internal.renderer.canvas.CanvasGraphics.bounds.y);
			openfl._internal.renderer.canvas.CanvasGraphics.context.closePath();
		}
	}
};
openfl._internal.renderer.canvas.CanvasGraphics.render = function(graphics,renderSession) {
	if(graphics.__dirty) {
		openfl._internal.renderer.canvas.CanvasGraphics.hitTesting = false;
		openfl._internal.renderer.canvas.CanvasGraphics.graphics = graphics;
		openfl._internal.renderer.canvas.CanvasGraphics.bounds = graphics.__bounds;
		if(!graphics.__visible || graphics.__commands.length == 0 || openfl._internal.renderer.canvas.CanvasGraphics.bounds == null || openfl._internal.renderer.canvas.CanvasGraphics.bounds.width <= 0 || openfl._internal.renderer.canvas.CanvasGraphics.bounds.height <= 0) {
			graphics.__canvas = null;
			graphics.__context = null;
			graphics.__bitmap = null;
		} else {
			if(graphics.__canvas == null) {
				graphics.__canvas = window.document.createElement("canvas");
				graphics.__context = graphics.__canvas.getContext("2d");
			}
			openfl._internal.renderer.canvas.CanvasGraphics.context = graphics.__context;
			graphics.__canvas.width = Math.ceil(openfl._internal.renderer.canvas.CanvasGraphics.bounds.width);
			graphics.__canvas.height = Math.ceil(openfl._internal.renderer.canvas.CanvasGraphics.bounds.height);
			openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.splice(0,openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.length);
			openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.splice(0,openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.length);
			openfl._internal.renderer.canvas.CanvasGraphics.hasFill = false;
			openfl._internal.renderer.canvas.CanvasGraphics.hasStroke = false;
			openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill = null;
			openfl._internal.renderer.canvas.CanvasGraphics.bitmapRepeat = false;
			var _g = 0;
			var _g1 = graphics.__commands;
			try {
				while(_g < _g1.length) {
					var command = _g1[_g];
					++_g;
					switch(command[1]) {
					case 3:case 4:case 15:case 16:
						openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.push(command);
						openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
						break;
					case 11:
						openfl._internal.renderer.canvas.CanvasGraphics.endFill();
						openfl._internal.renderer.canvas.CanvasGraphics.endStroke();
						openfl._internal.renderer.canvas.CanvasGraphics.hasFill = false;
						openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill = null;
						break;
					case 12:case 14:case 13:
						openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
						break;
					case 0:case 1:case 2:
						openfl._internal.renderer.canvas.CanvasGraphics.endFill();
						openfl._internal.renderer.canvas.CanvasGraphics.endStroke();
						openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.push(command);
						openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
						break;
					case 5:case 6:case 7:case 8:
						openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.push(command);
						openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.push(command);
						break;
					case 10:
						var culling = command[5];
						var uvtData = command[4];
						var indices = command[3];
						var vertices = command[2];
						openfl._internal.renderer.canvas.CanvasGraphics.endFill();
						openfl._internal.renderer.canvas.CanvasGraphics.endStroke();
						var v = vertices;
						var ind = indices;
						var uvt = uvtData;
						var pattern = null;
						var colorFill = openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill == null;
						if(colorFill && uvt != null) throw "__break__";
						if(!colorFill) {
							if(uvtData == null) {
								var this1;
								this1 = new openfl.VectorData();
								var this2;
								this2 = new Array(0);
								this1.data = this2;
								this1.length = 0;
								this1.fixed = false;
								uvtData = this1;
								var _g3 = 0;
								var _g2 = v.length / 2 | 0;
								while(_g3 < _g2) {
									var i = _g3++;
									if(!uvtData.fixed) {
										uvtData.length++;
										if(uvtData.data.length < uvtData.length) {
											var data;
											var this3;
											this3 = new Array(uvtData.data.length + 10);
											data = this3;
											haxe.ds._Vector.Vector_Impl_.blit(uvtData.data,0,data,0,uvtData.data.length);
											uvtData.data = data;
										}
										uvtData.data[uvtData.length - 1] = v.data[i * 2] / openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill.width;
									}
									uvtData.length;
									if(!uvtData.fixed) {
										uvtData.length++;
										if(uvtData.data.length < uvtData.length) {
											var data1;
											var this4;
											this4 = new Array(uvtData.data.length + 10);
											data1 = this4;
											haxe.ds._Vector.Vector_Impl_.blit(uvtData.data,0,data1,0,uvtData.data.length);
											uvtData.data = data1;
										}
										uvtData.data[uvtData.length - 1] = v.data[i * 2 + 1] / openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill.height;
									}
									uvtData.length;
								}
							}
							var skipT = uvtData.length != v.length;
							var normalizedUVT = openfl._internal.renderer.canvas.CanvasGraphics.normalizeUVT(uvtData,skipT);
							var maxUVT = normalizedUVT.max;
							uvt = normalizedUVT.uvt;
							if(maxUVT > 1) pattern = openfl._internal.renderer.canvas.CanvasGraphics.createTempPatternCanvas(openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill,openfl._internal.renderer.canvas.CanvasGraphics.bitmapRepeat,openfl._internal.renderer.canvas.CanvasGraphics.bounds.width | 0,openfl._internal.renderer.canvas.CanvasGraphics.bounds.height | 0); else pattern = openfl._internal.renderer.canvas.CanvasGraphics.createTempPatternCanvas(openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill,openfl._internal.renderer.canvas.CanvasGraphics.bitmapRepeat,openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill.width,openfl._internal.renderer.canvas.CanvasGraphics.bitmapFill.height);
						}
						var i1 = 0;
						var l = ind.length;
						var a;
						var b;
						var c;
						var iax;
						var iay;
						var ibx;
						var iby;
						var icx;
						var icy;
						var x1;
						var y1;
						var x2;
						var y2;
						var x3;
						var y3;
						var uvx1;
						var uvy1;
						var uvx2;
						var uvy2;
						var uvx3;
						var uvy3;
						var denom;
						var t1;
						var t2;
						var t3;
						var t4;
						var dx;
						var dy;
						while(i1 < l) {
							a = i1;
							b = i1 + 1;
							c = i1 + 2;
							iax = ind.data[a] * 2;
							iay = ind.data[a] * 2 + 1;
							ibx = ind.data[b] * 2;
							iby = ind.data[b] * 2 + 1;
							icx = ind.data[c] * 2;
							icy = ind.data[c] * 2 + 1;
							x1 = v.data[iax];
							y1 = v.data[iay];
							x2 = v.data[ibx];
							y2 = v.data[iby];
							x3 = v.data[icx];
							y3 = v.data[icy];
							switch(culling[1]) {
							case 2:
								if(!((x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1) < 0)) {
									i1 += 3;
									continue;
								}
								break;
							case 0:
								if((x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1) < 0) {
									i1 += 3;
									continue;
								}
								break;
							default:
							}
							if(colorFill) {
								openfl._internal.renderer.canvas.CanvasGraphics.context.beginPath();
								openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(x1,y1);
								openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x2,y2);
								openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x3,y3);
								openfl._internal.renderer.canvas.CanvasGraphics.context.closePath();
								if(!openfl._internal.renderer.canvas.CanvasGraphics.hitTesting) openfl._internal.renderer.canvas.CanvasGraphics.context.fill();
								i1 += 3;
								continue;
							}
							openfl._internal.renderer.canvas.CanvasGraphics.context.save();
							openfl._internal.renderer.canvas.CanvasGraphics.context.beginPath();
							openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(x1,y1);
							openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x2,y2);
							openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x3,y3);
							openfl._internal.renderer.canvas.CanvasGraphics.context.closePath();
							openfl._internal.renderer.canvas.CanvasGraphics.context.clip();
							uvx1 = uvt.data[iax] * pattern.width;
							uvx2 = uvt.data[ibx] * pattern.width;
							uvx3 = uvt.data[icx] * pattern.width;
							uvy1 = uvt.data[iay] * pattern.height;
							uvy2 = uvt.data[iby] * pattern.height;
							uvy3 = uvt.data[icy] * pattern.height;
							denom = uvx1 * (uvy3 - uvy2) - uvx2 * uvy3 + uvx3 * uvy2 + (uvx2 - uvx3) * uvy1;
							if(denom == 0) {
								i1 += 3;
								continue;
							}
							t1 = -(uvy1 * (x3 - x2) - uvy2 * x3 + uvy3 * x2 + (uvy2 - uvy3) * x1) / denom;
							t2 = (uvy2 * y3 + uvy1 * (y2 - y3) - uvy3 * y2 + (uvy3 - uvy2) * y1) / denom;
							t3 = (uvx1 * (x3 - x2) - uvx2 * x3 + uvx3 * x2 + (uvx2 - uvx3) * x1) / denom;
							t4 = -(uvx2 * y3 + uvx1 * (y2 - y3) - uvx3 * y2 + (uvx3 - uvx2) * y1) / denom;
							dx = (uvx1 * (uvy3 * x2 - uvy2 * x3) + uvy1 * (uvx2 * x3 - uvx3 * x2) + (uvx3 * uvy2 - uvx2 * uvy3) * x1) / denom;
							dy = (uvx1 * (uvy3 * y2 - uvy2 * y3) + uvy1 * (uvx2 * y3 - uvx3 * y2) + (uvx3 * uvy2 - uvx2 * uvy3) * y1) / denom;
							openfl._internal.renderer.canvas.CanvasGraphics.context.transform(t1,t2,t3,t4,dx,dy);
							openfl._internal.renderer.canvas.CanvasGraphics.context.drawImage(pattern,0,0);
							openfl._internal.renderer.canvas.CanvasGraphics.context.restore();
							i1 += 3;
						}
						break;
					case 9:
						var count = command[6];
						var flags = command[5];
						var smooth = command[4];
						var tileData = command[3];
						var sheet = command[2];
						var useScale = (flags & 1) > 0;
						var useRotation = (flags & 2) > 0;
						var useTransform = (flags & 16) > 0;
						var useRGB = (flags & 4) > 0;
						var useAlpha = (flags & 8) > 0;
						var useRect = (flags & 32) > 0;
						var useOrigin = (flags & 64) > 0;
						var useBlendAdd = (flags & 65536) > 0;
						if(useTransform) {
							useScale = false;
							useRotation = false;
						}
						var scaleIndex = 0;
						var rotationIndex = 0;
						var rgbIndex = 0;
						var alphaIndex = 0;
						var transformIndex = 0;
						var numValues = 3;
						if(useRect) if(useOrigin) numValues = 8; else numValues = 6;
						if(useScale) {
							scaleIndex = numValues;
							numValues++;
						}
						if(useRotation) {
							rotationIndex = numValues;
							numValues++;
						}
						if(useTransform) {
							transformIndex = numValues;
							numValues += 4;
						}
						if(useRGB) {
							rgbIndex = numValues;
							numValues += 3;
						}
						if(useAlpha) {
							alphaIndex = numValues;
							numValues++;
						}
						var totalCount = tileData.length;
						if(count >= 0 && totalCount > count) totalCount = count;
						var itemCount = totalCount / numValues | 0;
						var index = 0;
						var rect = null;
						var center = null;
						var previousTileID = -1;
						var surface;
						sheet.__bitmap.__sync();
						surface = sheet.__bitmap.image.get_src();
						if(useBlendAdd) openfl._internal.renderer.canvas.CanvasGraphics.context.globalCompositeOperation = "lighter";
						while(index < totalCount) {
							var tileID;
							if(!useRect) tileID = tileData[index + 2] | 0; else tileID = -1;
							if(!useRect && tileID != previousTileID) {
								rect = sheet.__tileRects[tileID];
								center = sheet.__centerPoints[tileID];
								previousTileID = tileID;
							} else if(useRect) {
								rect = sheet.__rectTile;
								rect.setTo(tileData[index + 2],tileData[index + 3],tileData[index + 4],tileData[index + 5]);
								center = sheet.__point;
								if(useOrigin) {
									center.x = tileData[index + 6];
									center.y = tileData[index + 7];
								} else {
									center.x = 0;
									center.y = 0;
								}
							}
							if(rect != null && rect.width > 0 && rect.height > 0 && center != null) {
								openfl._internal.renderer.canvas.CanvasGraphics.context.save();
								openfl._internal.renderer.canvas.CanvasGraphics.context.translate(tileData[index],tileData[index + 1]);
								if(useRotation) openfl._internal.renderer.canvas.CanvasGraphics.context.rotate(tileData[index + rotationIndex]);
								var scale = 1.0;
								if(useScale) scale = tileData[index + scaleIndex];
								if(useTransform) openfl._internal.renderer.canvas.CanvasGraphics.context.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
								if(useAlpha) openfl._internal.renderer.canvas.CanvasGraphics.context.globalAlpha = tileData[index + alphaIndex];
								openfl._internal.renderer.canvas.CanvasGraphics.context.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
								openfl._internal.renderer.canvas.CanvasGraphics.context.restore();
							}
							index += numValues;
						}
						if(useBlendAdd) openfl._internal.renderer.canvas.CanvasGraphics.context.globalCompositeOperation = "source-over";
						break;
					default:
						openfl.Lib.notImplemented("CanvasGraphics");
					}
				}
			} catch( e ) { if( e != "__break__" ) throw e; }
			if(openfl._internal.renderer.canvas.CanvasGraphics.fillCommands.length > 0) openfl._internal.renderer.canvas.CanvasGraphics.endFill();
			if(openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands.length > 0) openfl._internal.renderer.canvas.CanvasGraphics.endStroke();
			graphics.__bitmap = openfl.display.BitmapData.fromCanvas(graphics.__canvas);
		}
		graphics.set___dirty(false);
	}
};
openfl._internal.renderer.canvas.CanvasGraphics.renderMask = function(graphics,renderSession) {
	if(graphics.__commands.length != 0) {
		openfl._internal.renderer.canvas.CanvasGraphics.context = renderSession.context;
		var positionX = 0.0;
		var positionY = 0.0;
		var offsetX = 0;
		var offsetY = 0;
		var _g = 0;
		var _g1 = graphics.__commands;
		while(_g < _g1.length) {
			var command = _g1[_g];
			++_g;
			switch(command[1]) {
			case 3:
				var y = command[7];
				var x = command[6];
				var cy2 = command[5];
				var cy1 = command[4];
				var cx2 = command[3];
				var cx1 = command[2];
				openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(cx1 - offsetX,cy1 - offsetY,cx2 - offsetX,cy2 - offsetY,x - offsetX,y - offsetY);
				positionX = x;
				positionY = y;
				break;
			case 4:
				var y1 = command[5];
				var x1 = command[4];
				var cy = command[3];
				var cx = command[2];
				openfl._internal.renderer.canvas.CanvasGraphics.context.quadraticCurveTo(cx - offsetX,cy - offsetY,x1 - offsetX,y1 - offsetY);
				positionX = x1;
				positionY = y1;
				break;
			case 5:
				var radius = command[4];
				var y2 = command[3];
				var x2 = command[2];
				openfl._internal.renderer.canvas.CanvasGraphics.context.arc(x2 - offsetX,y2 - offsetY,radius,0,Math.PI * 2,true);
				break;
			case 6:
				var height = command[5];
				var width = command[4];
				var y3 = command[3];
				var x3 = command[2];
				x3 -= offsetX;
				y3 -= offsetY;
				var kappa = .5522848;
				var ox = width / 2 * kappa;
				var oy = height / 2 * kappa;
				var xe = x3 + width;
				var ye = y3 + height;
				var xm = x3 + width / 2;
				var ym = y3 + height / 2;
				openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(x3,ym);
				openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(x3,ym - oy,xm - ox,y3,xm,y3);
				openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(xm + ox,y3,xe,ym - oy,xe,ym);
				openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
				openfl._internal.renderer.canvas.CanvasGraphics.context.bezierCurveTo(xm - ox,ye,x3,ym + oy,x3,ym);
				break;
			case 7:
				var height1 = command[5];
				var width1 = command[4];
				var y4 = command[3];
				var x4 = command[2];
				openfl._internal.renderer.canvas.CanvasGraphics.context.rect(x4 - offsetX,y4 - offsetY,width1,height1);
				break;
			case 8:
				var ry = command[7];
				var rx = command[6];
				var height2 = command[5];
				var width2 = command[4];
				var y5 = command[3];
				var x5 = command[2];
				openfl._internal.renderer.canvas.CanvasGraphics.drawRoundRect(x5 - offsetX,y5 - offsetY,width2,height2,rx,ry);
				break;
			case 15:
				var y6 = command[3];
				var x6 = command[2];
				openfl._internal.renderer.canvas.CanvasGraphics.context.lineTo(x6 - offsetX,y6 - offsetY);
				positionX = x6;
				positionY = y6;
				break;
			case 16:
				var y7 = command[3];
				var x7 = command[2];
				openfl._internal.renderer.canvas.CanvasGraphics.context.moveTo(x7 - offsetX,y7 - offsetY);
				positionX = x7;
				positionY = y7;
				break;
			default:
			}
		}
	}
};
openfl._internal.renderer.canvas.CanvasMaskManager = function(renderSession) {
	openfl._internal.renderer.AbstractMaskManager.call(this,renderSession);
};
$hxClasses["openfl._internal.renderer.canvas.CanvasMaskManager"] = openfl._internal.renderer.canvas.CanvasMaskManager;
openfl._internal.renderer.canvas.CanvasMaskManager.__name__ = true;
openfl._internal.renderer.canvas.CanvasMaskManager.__super__ = openfl._internal.renderer.AbstractMaskManager;
openfl._internal.renderer.canvas.CanvasMaskManager.prototype = $extend(openfl._internal.renderer.AbstractMaskManager.prototype,{
	pushMask: function(mask) {
		var context = this.renderSession.context;
		context.save();
		var transform = mask.__getTransform();
		context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		context.beginPath();
		mask.__renderCanvasMask(this.renderSession);
		context.clip();
	}
	,pushRect: function(rect,transform) {
		var context = this.renderSession.context;
		context.save();
		context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		context.beginPath();
		context.rect(rect.x,rect.y,rect.width,rect.height);
		context.clip();
	}
	,popMask: function() {
		this.renderSession.context.restore();
	}
	,__class__: openfl._internal.renderer.canvas.CanvasMaskManager
});
openfl._internal.renderer.canvas.CanvasRenderer = function(width,height,context) {
	openfl._internal.renderer.AbstractRenderer.call(this,width,height);
	this.context = context;
	this.renderSession = new openfl._internal.renderer.RenderSession();
	this.renderSession.context = context;
	this.renderSession.roundPixels = true;
	this.renderSession.renderer = this;
	this.renderSession.maskManager = new openfl._internal.renderer.canvas.CanvasMaskManager(this.renderSession);
};
$hxClasses["openfl._internal.renderer.canvas.CanvasRenderer"] = openfl._internal.renderer.canvas.CanvasRenderer;
openfl._internal.renderer.canvas.CanvasRenderer.__name__ = true;
openfl._internal.renderer.canvas.CanvasRenderer.__super__ = openfl._internal.renderer.AbstractRenderer;
openfl._internal.renderer.canvas.CanvasRenderer.prototype = $extend(openfl._internal.renderer.AbstractRenderer.prototype,{
	render: function(stage) {
		this.context.setTransform(1,0,0,1,0,0);
		this.context.globalAlpha = 1;
		if(!stage.__transparent && stage.__clearBeforeRender) {
			this.context.fillStyle = stage.__colorString;
			this.context.fillRect(0,0,stage.stageWidth,stage.stageHeight);
		} else if(stage.__transparent && stage.__clearBeforeRender) this.context.clearRect(0,0,stage.stageWidth,stage.stageHeight);
		stage.__renderCanvas(this.renderSession);
	}
	,__class__: openfl._internal.renderer.canvas.CanvasRenderer
});
openfl._internal.renderer.canvas.CanvasShape = function() { };
$hxClasses["openfl._internal.renderer.canvas.CanvasShape"] = openfl._internal.renderer.canvas.CanvasShape;
openfl._internal.renderer.canvas.CanvasShape.__name__ = true;
openfl._internal.renderer.canvas.CanvasShape.render = function(shape,renderSession) {
	if(!shape.__renderable || shape.__worldAlpha <= 0) return;
	var graphics = shape.__graphics;
	if(graphics != null) {
		openfl._internal.renderer.canvas.CanvasGraphics.render(graphics,renderSession);
		if(graphics.__canvas != null) {
			if(shape.__mask != null) renderSession.maskManager.pushMask(shape.__mask);
			var context = renderSession.context;
			var scrollRect = shape.get_scrollRect();
			context.globalAlpha = shape.__worldAlpha;
			var transform = shape.__worldTransform;
			if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
			if(scrollRect == null) context.drawImage(graphics.__canvas,graphics.__bounds.x,graphics.__bounds.y); else context.drawImage(graphics.__canvas,Math.ceil(graphics.__bounds.x + scrollRect.x),Math.ceil(graphics.__bounds.y + scrollRect.y),scrollRect.width,scrollRect.height,Math.ceil(graphics.__bounds.x + scrollRect.x),Math.ceil(graphics.__bounds.y + scrollRect.y),scrollRect.width,scrollRect.height);
			if(shape.__mask != null) renderSession.maskManager.popMask();
		}
	}
};
openfl._internal.renderer.canvas.CanvasTextField = function() { };
$hxClasses["openfl._internal.renderer.canvas.CanvasTextField"] = openfl._internal.renderer.canvas.CanvasTextField;
openfl._internal.renderer.canvas.CanvasTextField.__name__ = true;
openfl._internal.renderer.canvas.CanvasTextField.context = null;
openfl._internal.renderer.canvas.CanvasTextField.render = function(textField,renderSession) {
	if(textField.__dirty) {
		var textEngine = textField.__textEngine;
		textField.__updateLayout();
		if((textEngine.text == null || textEngine.text == "") && !textEngine.background && !textEngine.border && !textEngine.__hasFocus || (textEngine.width <= 0 || textEngine.height <= 0) && textEngine.autoSize != openfl.text.TextFieldAutoSize.NONE) {
			textField.__graphics.__canvas = null;
			textField.__graphics.__context = null;
			textField.__graphics.set___dirty(false);
			textField.__dirty = false;
		} else {
			var bounds = textEngine.bounds;
			if(textField.__graphics == null || textField.__graphics.__canvas == null) {
				if(textField.__graphics == null) textField.__graphics = new openfl.display.Graphics();
				textField.__graphics.__canvas = window.document.createElement("canvas");
				textField.__graphics.__context = textField.__graphics.__canvas.getContext("2d");
				textField.__graphics.__bounds = new openfl.geom.Rectangle(0,0,bounds.width,bounds.height);
			}
			var graphics = textField.__graphics;
			openfl._internal.renderer.canvas.CanvasTextField.context = graphics.__context;
			if(textEngine.text != null && textEngine.text != "" || textEngine.__hasFocus) {
				var text = textEngine.text;
				if(textEngine.displayAsPassword) {
					var length = text.length;
					var mask = "";
					var _g = 0;
					while(_g < length) {
						var i = _g++;
						mask += "*";
					}
					text = mask;
				}
				graphics.__canvas.width = Math.ceil(bounds.width);
				graphics.__canvas.height = Math.ceil(bounds.height);
				if(textEngine.antiAliasType != openfl.text.AntiAliasType.ADVANCED || textEngine.gridFitType != openfl.text.GridFitType.PIXEL) {
					graphics.__context.mozImageSmoothingEnabled = true;
					graphics.__context.msImageSmoothingEnabled = true;
					graphics.__context.imageSmoothingEnabled = true;
				} else {
					graphics.__context.mozImageSmoothingEnabled = false;
					graphics.__context.msImageSmoothingEnabled = false;
					graphics.__context.imageSmoothingEnabled = false;
				}
				if(textEngine.border || textEngine.background) {
					openfl._internal.renderer.canvas.CanvasTextField.context.rect(0.5,0.5,bounds.width - 1,bounds.height - 1);
					if(textEngine.background) {
						openfl._internal.renderer.canvas.CanvasTextField.context.fillStyle = "#" + StringTools.hex(textEngine.backgroundColor,6);
						openfl._internal.renderer.canvas.CanvasTextField.context.fill();
					}
					if(textEngine.border) {
						openfl._internal.renderer.canvas.CanvasTextField.context.lineWidth = 1;
						openfl._internal.renderer.canvas.CanvasTextField.context.strokeStyle = "#" + StringTools.hex(textEngine.borderColor,6);
						openfl._internal.renderer.canvas.CanvasTextField.context.stroke();
					}
				}
				openfl._internal.renderer.canvas.CanvasTextField.context.textBaseline = "top";
				openfl._internal.renderer.canvas.CanvasTextField.context.textAlign = "start";
				var scrollX = -textField.get_scrollH();
				var scrollY = 0.0;
				var _g1 = 0;
				var _g2 = textField.get_scrollV() - 1;
				while(_g1 < _g2) {
					var i1 = _g1++;
					scrollY -= textEngine.lineHeights[i1];
				}
				var advance;
				var offsetY = 0.0;
				var applyHack = new EReg("(iPad|iPhone|iPod|Firefox)","g").match(window.navigator.userAgent);
				var _g3 = 0;
				var _g11 = textEngine.layoutGroups;
				while(_g3 < _g11.length) {
					var group = _g11[_g3];
					++_g3;
					if(group.lineIndex < textField.get_scrollV() - 1) continue;
					if(group.lineIndex > textField.get_scrollV() + textEngine.bottomScrollV - 2) break;
					openfl._internal.renderer.canvas.CanvasTextField.context.font = openfl._internal.text.TextEngine.getFont(group.format);
					openfl._internal.renderer.canvas.CanvasTextField.context.fillStyle = "#" + StringTools.hex(group.format.color,6);
					if(applyHack) offsetY = group.format.size * 0.185;
					openfl._internal.renderer.canvas.CanvasTextField.context.fillText(text.substring(group.startIndex,group.endIndex),group.offsetX + scrollX,group.offsetY + offsetY + scrollY);
					if(textField.__caretIndex > -1 && textEngine.selectable) {
						if(textField.__selectionIndex == textField.__caretIndex) {
							if(textField.__showCursor && group.startIndex <= textField.__caretIndex && group.endIndex >= textField.__caretIndex) {
								advance = 0.0;
								var _g31 = 0;
								var _g21 = textField.__caretIndex - group.startIndex;
								while(_g31 < _g21) {
									var i2 = _g31++;
									if(group.advances.length <= i2) break;
									advance += group.advances[i2];
								}
								openfl._internal.renderer.canvas.CanvasTextField.context.fillRect(group.offsetX + advance,group.offsetY,1,group.height);
							}
						} else if(group.startIndex <= textField.__caretIndex && group.endIndex >= textField.__caretIndex || group.startIndex <= textField.__selectionIndex && group.endIndex >= textField.__selectionIndex) {
							var selectionStart = Std["int"](Math.min(textField.__selectionIndex,textField.__caretIndex));
							var selectionEnd = Std["int"](Math.max(textField.__selectionIndex,textField.__caretIndex));
							if(group.startIndex > selectionStart) selectionStart = group.startIndex;
							if(group.endIndex < selectionEnd) selectionEnd = group.endIndex;
							var start;
							var end;
							start = textField.getCharBoundaries(selectionStart);
							if(selectionEnd >= textEngine.text.length) {
								end = textField.getCharBoundaries(textEngine.text.length - 1);
								end.x += end.width + 2;
							} else end = textField.getCharBoundaries(selectionEnd);
							if(start != null && end != null) {
								openfl._internal.renderer.canvas.CanvasTextField.context.fillStyle = "#000000";
								openfl._internal.renderer.canvas.CanvasTextField.context.fillRect(start.x,start.y,end.x - start.x,group.height);
								openfl._internal.renderer.canvas.CanvasTextField.context.fillStyle = "#FFFFFF";
								openfl._internal.renderer.canvas.CanvasTextField.context.fillText(text.substring(selectionStart,selectionEnd),scrollX + start.x,group.offsetY + offsetY + scrollY);
							}
						}
					}
				}
			} else {
				graphics.__canvas.width = Math.ceil(bounds.width);
				graphics.__canvas.height = Math.ceil(bounds.height);
				if(textEngine.border || textEngine.background) {
					if(textEngine.border) openfl._internal.renderer.canvas.CanvasTextField.context.rect(0.5,0.5,bounds.width - 1,bounds.height - 1); else openfl._internal.renderer.canvas.CanvasTextField.context.rect(0,0,bounds.width,bounds.height);
					if(textEngine.background) {
						openfl._internal.renderer.canvas.CanvasTextField.context.fillStyle = "#" + StringTools.hex(textEngine.backgroundColor,6);
						openfl._internal.renderer.canvas.CanvasTextField.context.fill();
					}
					if(textEngine.border) {
						openfl._internal.renderer.canvas.CanvasTextField.context.lineWidth = 1;
						openfl._internal.renderer.canvas.CanvasTextField.context.lineCap = "square";
						openfl._internal.renderer.canvas.CanvasTextField.context.strokeStyle = "#" + StringTools.hex(textEngine.borderColor,6);
						openfl._internal.renderer.canvas.CanvasTextField.context.stroke();
					}
				}
			}
			graphics.__bitmap = openfl.display.BitmapData.fromCanvas(textField.__graphics.__canvas);
			textField.__dirty = false;
			graphics.set___dirty(false);
		}
	}
};
openfl._internal.renderer.console = {};
openfl._internal.renderer.console.ConsoleRenderer = function(width,height,ctx) {
	openfl._internal.renderer.AbstractRenderer.call(this,width,height);
	throw "ConsoleRenderer not supported";
};
$hxClasses["openfl._internal.renderer.console.ConsoleRenderer"] = openfl._internal.renderer.console.ConsoleRenderer;
openfl._internal.renderer.console.ConsoleRenderer.__name__ = true;
openfl._internal.renderer.console.ConsoleRenderer.__super__ = openfl._internal.renderer.AbstractRenderer;
openfl._internal.renderer.console.ConsoleRenderer.prototype = $extend(openfl._internal.renderer.AbstractRenderer.prototype,{
	render: function(stage) {
	}
	,__class__: openfl._internal.renderer.console.ConsoleRenderer
});
openfl._internal.renderer.dom = {};
openfl._internal.renderer.dom.DOMBitmap = function() { };
$hxClasses["openfl._internal.renderer.dom.DOMBitmap"] = openfl._internal.renderer.dom.DOMBitmap;
openfl._internal.renderer.dom.DOMBitmap.__name__ = true;
openfl._internal.renderer.dom.DOMBitmap.renderCanvas = function(bitmap,renderSession) {
	if(bitmap.__image != null) {
		renderSession.element.removeChild(bitmap.__image);
		bitmap.__image = null;
	}
	if(bitmap.__canvas == null) {
		bitmap.__canvas = window.document.createElement("canvas");
		bitmap.__context = bitmap.__canvas.getContext("2d");
		if(!bitmap.smoothing) {
			bitmap.__context.mozImageSmoothingEnabled = false;
			bitmap.__context.msImageSmoothingEnabled = false;
			bitmap.__context.imageSmoothingEnabled = false;
		}
		openfl._internal.renderer.dom.DOMRenderer.initializeElement(bitmap,bitmap.__canvas,renderSession);
	}
	bitmap.bitmapData.__sync();
	bitmap.__canvas.width = bitmap.bitmapData.width;
	bitmap.__canvas.height = bitmap.bitmapData.height;
	bitmap.__context.globalAlpha = bitmap.__worldAlpha;
	bitmap.__context.drawImage(bitmap.bitmapData.image.buffer.__srcCanvas,0,0);
	openfl._internal.renderer.dom.DOMRenderer.applyStyle(bitmap,renderSession,true,false,true);
};
openfl._internal.renderer.dom.DOMBitmap.renderImage = function(bitmap,renderSession) {
	if(bitmap.__canvas != null) {
		renderSession.element.removeChild(bitmap.__canvas);
		bitmap.__canvas = null;
	}
	if(bitmap.__image == null) {
		bitmap.__image = window.document.createElement("img");
		bitmap.__image.src = bitmap.bitmapData.image.buffer.__srcImage.src;
		openfl._internal.renderer.dom.DOMRenderer.initializeElement(bitmap,bitmap.__image,renderSession);
	}
	openfl._internal.renderer.dom.DOMRenderer.applyStyle(bitmap,renderSession,true,true,true);
};
openfl._internal.renderer.dom.DOMMaskManager = function(renderSession) {
	openfl._internal.renderer.AbstractMaskManager.call(this,renderSession);
};
$hxClasses["openfl._internal.renderer.dom.DOMMaskManager"] = openfl._internal.renderer.dom.DOMMaskManager;
openfl._internal.renderer.dom.DOMMaskManager.__name__ = true;
openfl._internal.renderer.dom.DOMMaskManager.__super__ = openfl._internal.renderer.AbstractMaskManager;
openfl._internal.renderer.dom.DOMMaskManager.prototype = $extend(openfl._internal.renderer.AbstractMaskManager.prototype,{
	pushMask: function(mask) {
	}
	,pushRect: function(rect,transform) {
	}
	,popMask: function() {
	}
	,__class__: openfl._internal.renderer.dom.DOMMaskManager
});
openfl._internal.renderer.dom.DOMRenderer = function(width,height,element) {
	openfl._internal.renderer.AbstractRenderer.call(this,width,height);
	this.element = element;
	this.renderSession = new openfl._internal.renderer.RenderSession();
	this.renderSession.element = element;
	this.renderSession.roundPixels = true;
	var prefix = (function () {
		  var styles = window.getComputedStyle(document.documentElement, ''),
			pre = (Array.prototype.slice
			  .call(styles)
			  .join('') 
			  .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
			)[1],
			dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
		  return {
			dom: dom,
			lowercase: pre,
			css: '-' + pre + '-',
			js: pre[0].toUpperCase() + pre.substr(1)
		  };
		})();
	this.renderSession.vendorPrefix = prefix.lowercase;
	if(prefix.lowercase == "webkit") this.renderSession.transformProperty = "-webkit-transform"; else this.renderSession.transformProperty = "transform";
	if(prefix.lowercase == "webkit") this.renderSession.transformOriginProperty = "-webkit-transform-origin"; else this.renderSession.transformOriginProperty = "transform-origin";
	this.renderSession.maskManager = new openfl._internal.renderer.dom.DOMMaskManager(this.renderSession);
	this.renderSession.renderer = this;
};
$hxClasses["openfl._internal.renderer.dom.DOMRenderer"] = openfl._internal.renderer.dom.DOMRenderer;
openfl._internal.renderer.dom.DOMRenderer.__name__ = true;
openfl._internal.renderer.dom.DOMRenderer.applyStyle = function(displayObject,renderSession,setTransform,setAlpha,setClip) {
	var style = displayObject.__style;
	if(setTransform && displayObject.__worldTransformChanged) style.setProperty(renderSession.transformProperty,displayObject.__worldTransform.to3DString(renderSession.roundPixels),null);
	if(displayObject.__worldZ != ++renderSession.z) {
		displayObject.__worldZ = renderSession.z;
		style.setProperty("z-index",displayObject.__worldZ == null?"null":"" + displayObject.__worldZ,null);
	}
	if(setAlpha && displayObject.__worldAlphaChanged) {
		if(displayObject.__worldAlpha < 1) style.setProperty("opacity",displayObject.__worldAlpha == null?"null":"" + displayObject.__worldAlpha,null); else style.removeProperty("opacity");
	}
	if(setClip && displayObject.__worldClipChanged) {
		if(displayObject.__worldClip == null) style.removeProperty("clip"); else {
			var clip = openfl.geom.Rectangle.__temp;
			var matrix = openfl.geom.Matrix.__temp;
			matrix.copyFrom(displayObject.__worldTransform);
			matrix.invert();
			displayObject.__worldClip.__transform(clip,matrix);
			style.setProperty("clip","rect(" + clip.y + "px, " + clip.get_right() + "px, " + clip.get_bottom() + "px, " + clip.x + "px)",null);
		}
	}
};
openfl._internal.renderer.dom.DOMRenderer.initializeElement = function(displayObject,element,renderSession) {
	var style = displayObject.__style = element.style;
	style.setProperty("position","absolute",null);
	style.setProperty("top","0",null);
	style.setProperty("left","0",null);
	style.setProperty(renderSession.transformOriginProperty,"0 0 0",null);
	renderSession.element.appendChild(element);
	displayObject.__worldAlphaChanged = true;
	displayObject.__worldClipChanged = true;
	displayObject.__worldTransformChanged = true;
	displayObject.__worldVisibleChanged = true;
	displayObject.__worldZ = -1;
};
openfl._internal.renderer.dom.DOMRenderer.__super__ = openfl._internal.renderer.AbstractRenderer;
openfl._internal.renderer.dom.DOMRenderer.prototype = $extend(openfl._internal.renderer.AbstractRenderer.prototype,{
	render: function(stage) {
		this.element.style.background = stage.__colorString;
		this.renderSession.z = 1;
		stage.__renderDOM(this.renderSession);
	}
	,__class__: openfl._internal.renderer.dom.DOMRenderer
});
openfl._internal.renderer.dom.DOMShape = function() { };
$hxClasses["openfl._internal.renderer.dom.DOMShape"] = openfl._internal.renderer.dom.DOMShape;
openfl._internal.renderer.dom.DOMShape.__name__ = true;
openfl._internal.renderer.dom.DOMShape.render = function(shape,renderSession) {
	var graphics = shape.__graphics;
	if(shape.stage != null && shape.__worldVisible && shape.__renderable && graphics != null) {
		if(graphics.__dirty || shape.__worldAlphaChanged || shape.__canvas == null && graphics.__canvas != null) {
			openfl._internal.renderer.canvas.CanvasGraphics.render(graphics,renderSession);
			if(graphics.__canvas != null) {
				if(shape.__canvas == null) {
					shape.__canvas = window.document.createElement("canvas");
					shape.__context = shape.__canvas.getContext("2d");
					openfl._internal.renderer.dom.DOMRenderer.initializeElement(shape,shape.__canvas,renderSession);
				}
				shape.__canvas.width = graphics.__canvas.width;
				shape.__canvas.height = graphics.__canvas.height;
				shape.__context.globalAlpha = shape.__worldAlpha;
				shape.__context.drawImage(graphics.__canvas,0,0);
			} else if(shape.__canvas != null) {
				renderSession.element.removeChild(shape.__canvas);
				shape.__canvas = null;
				shape.__style = null;
			}
		}
		if(shape.__canvas != null) {
			if(shape.__worldTransformChanged || graphics.__transformDirty) {
				graphics.__transformDirty = false;
				var transform = openfl.geom.Matrix.__temp;
				transform.identity();
				transform.translate(graphics.__bounds.x,graphics.__bounds.y);
				transform.concat(shape.__worldTransform);
				shape.__style.setProperty(renderSession.transformProperty,renderSession.roundPixels?"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + (transform.tx | 0) + ", " + (transform.ty | 0) + ", 0, 1)":"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + transform.tx + ", " + transform.ty + ", 0, 1)",null);
			}
			openfl._internal.renderer.dom.DOMRenderer.applyStyle(shape,renderSession,false,false,true);
		}
	} else if(shape.__canvas != null) {
		renderSession.element.removeChild(shape.__canvas);
		shape.__canvas = null;
		shape.__style = null;
	}
};
openfl._internal.renderer.dom.DOMTextField = function() { };
$hxClasses["openfl._internal.renderer.dom.DOMTextField"] = openfl._internal.renderer.dom.DOMTextField;
openfl._internal.renderer.dom.DOMTextField.__name__ = true;
openfl._internal.renderer.dom.DOMTextField.render = function(textField,renderSession) {
	var textEngine = textField.__textEngine;
	if(textField.stage != null && textField.__worldVisible && textField.__renderable) {
		if(textField.__dirty || textField.__div == null) {
			if(textEngine.text != "" || textEngine.background || textEngine.border || textEngine.type == openfl.text.TextFieldType.INPUT) {
				if(textField.__div == null) {
					textField.__div = window.document.createElement("div");
					openfl._internal.renderer.dom.DOMRenderer.initializeElement(textField,textField.__div,renderSession);
					textField.__style.setProperty("outline","none",null);
					textField.__div.addEventListener("input",function(event) {
						event.preventDefault();
						if(textField.get_htmlText() != textField.__div.innerHTML) {
							textField.set_htmlText(textField.__div.innerHTML);
							textField.__dirty = false;
						}
					},true);
				}
				if(textEngine.selectable) textField.__style.setProperty("cursor","text",null); else textField.__style.setProperty("cursor","inherit",null);
				textField.__div.contentEditable = textEngine.type == openfl.text.TextFieldType.INPUT;
				var style = textField.__style;
				textField.__div.innerHTML = textEngine.text;
				if(textEngine.background) style.setProperty("background-color","#" + StringTools.hex(textEngine.backgroundColor,6),null); else style.removeProperty("background-color");
				if(textEngine.border) style.setProperty("border","solid 1px #" + StringTools.hex(textEngine.borderColor,6),null); else style.removeProperty("border");
				style.setProperty("font",openfl._internal.text.TextEngine.getFont(textField.__textFormat),null);
				style.setProperty("color","#" + StringTools.hex(textField.__textFormat.color,6),null);
				if(textEngine.autoSize != openfl.text.TextFieldAutoSize.NONE) style.setProperty("width","auto",null); else style.setProperty("width",textEngine.width + "px",null);
				style.setProperty("height",textEngine.height + "px",null);
				var _g = textField.__textFormat.align;
				switch(_g[1]) {
				case 3:
					style.setProperty("text-align","center",null);
					break;
				case 1:
					style.setProperty("text-align","right",null);
					break;
				default:
					style.setProperty("text-align","left",null);
				}
				textField.__dirty = false;
			} else if(textField.__div != null) {
				renderSession.element.removeChild(textField.__div);
				textField.__div = null;
			}
		}
		if(textField.__div != null) openfl._internal.renderer.dom.DOMRenderer.applyStyle(textField,renderSession,true,true,false);
	} else if(textField.__div != null) {
		renderSession.element.removeChild(textField.__div);
		textField.__div = null;
		textField.__style = null;
	}
};
openfl._internal.renderer.opengl = {};
openfl._internal.renderer.opengl.GLRenderer = function(width,height,gl,transparent,antialias,preserveDrawingBuffer) {
	if(preserveDrawingBuffer == null) preserveDrawingBuffer = false;
	if(antialias == null) antialias = false;
	if(transparent == null) transparent = false;
	if(height == null) height = 600;
	if(width == null) width = 800;
	this.vpHeight = 0;
	this.vpWidth = 0;
	this.vpY = 0;
	this.vpX = 0;
	openfl._internal.renderer.AbstractRenderer.call(this,width,height);
	this.transparent = transparent;
	this.preserveDrawingBuffer = preserveDrawingBuffer;
	this.width = width;
	this.height = height;
	this.options = { alpha : transparent, antialias : antialias, premultipliedAlpha : transparent, stencil : true, preserveDrawingBuffer : preserveDrawingBuffer};
	this._glContextId = openfl._internal.renderer.opengl.GLRenderer.glContextId++;
	this.gl = gl;
	this.defaultFramebuffer = null;
	openfl._internal.renderer.opengl.GLRenderer.glContexts[this._glContextId] = gl;
	this.projectionMatrix = new openfl.geom.Matrix();
	this.projection = new openfl.geom.Point();
	this.projection.x = this.width / 2;
	this.projection.y = -this.height / 2;
	this.offset = new openfl.geom.Point(0,0);
	this.resize(this.width,this.height);
	this.contextLost = false;
	this.shaderManager = new openfl._internal.renderer.opengl.utils.ShaderManager(gl);
	this.spriteBatch = new openfl._internal.renderer.opengl.utils.SpriteBatch(gl);
	this.filterManager = new openfl._internal.renderer.opengl.utils.FilterManager(gl,this.transparent);
	this.stencilManager = new openfl._internal.renderer.opengl.utils.StencilManager(gl);
	this.blendModeManager = new openfl._internal.renderer.opengl.utils.BlendModeManager(gl);
	this.renderSession = new openfl._internal.renderer.RenderSession();
	this.renderSession.gl = this.gl;
	this.renderSession.drawCount = 0;
	this.renderSession.shaderManager = this.shaderManager;
	this.renderSession.maskManager = this.maskManager;
	this.renderSession.filterManager = this.filterManager;
	this.renderSession.blendModeManager = this.blendModeManager;
	this.renderSession.spriteBatch = this.spriteBatch;
	this.renderSession.stencilManager = this.stencilManager;
	this.renderSession.renderer = this;
	this.renderSession.defaultFramebuffer = this.defaultFramebuffer;
	this.renderSession.projectionMatrix = this.projectionMatrix;
	this.maskManager = new openfl._internal.renderer.opengl.utils.GLMaskManager(this.renderSession);
	this.renderSession.maskManager = this.maskManager;
	this.shaderManager.setShader(this.shaderManager.defaultShader);
	gl.disable(gl.DEPTH_TEST);
	gl.disable(gl.CULL_FACE);
	gl.enable(gl.BLEND);
	gl.colorMask(true,true,true,this.transparent);
};
$hxClasses["openfl._internal.renderer.opengl.GLRenderer"] = openfl._internal.renderer.opengl.GLRenderer;
openfl._internal.renderer.opengl.GLRenderer.__name__ = true;
openfl._internal.renderer.opengl.GLRenderer.renderBitmap = function(shape,renderSession,smooth) {
	if(smooth == null) smooth = true;
	if(!shape.__renderable || shape.__worldAlpha <= 0) return;
	if(shape.__graphics == null || shape.__graphics.__bitmap == null) return;
	var rect = openfl.geom.Rectangle.__temp;
	var matrix = openfl.geom.Matrix.__temp;
	rect.setEmpty();
	matrix.identity();
	shape.__getBounds(rect,matrix);
	var bitmap = shape.__graphics.__bitmap;
	matrix.translate(shape.__graphics.__bounds.x,shape.__graphics.__bounds.y);
	matrix.concat(shape.__worldTransform);
	renderSession.spriteBatch.renderBitmapData(bitmap,smooth,matrix,shape.__worldColorTransform,shape.__worldAlpha,shape.__blendMode,openfl.display.PixelSnapping.ALWAYS);
};
openfl._internal.renderer.opengl.GLRenderer.__super__ = openfl._internal.renderer.AbstractRenderer;
openfl._internal.renderer.opengl.GLRenderer.prototype = $extend(openfl._internal.renderer.AbstractRenderer.prototype,{
	setViewport: function(x,y,width,height) {
		if(!(this.vpX == x && this.vpY == y && this.vpWidth == width && this.vpHeight == height)) {
			this.vpX = x;
			this.vpY = y;
			this.vpWidth = width;
			this.vpHeight = height;
			this.gl.viewport(x,y,width,height);
			this.setOrtho(x,y,width,height);
		}
	}
	,setOrtho: function(x,y,width,height) {
		var o = this.projectionMatrix;
		o.identity();
		o.a = 1 / width * 2;
		o.d = -1 / height * 2;
		o.tx = -1 - x * o.a;
		o.ty = 1 - y * o.d;
	}
	,render: function(stage) {
		if(this.contextLost) return;
		var gl = this.gl;
		this.setViewport(0,0,this.width,this.height);
		gl.bindFramebuffer(gl.FRAMEBUFFER,this.defaultFramebuffer);
		if(this.transparent) gl.clearColor(0,0,0,0); else gl.clearColor(stage.__colorSplit[0],stage.__colorSplit[1],stage.__colorSplit[2],1);
		gl.clear(gl.COLOR_BUFFER_BIT);
		this.renderDisplayObject(stage,this.projection);
	}
	,renderDisplayObject: function(displayObject,projection,buffer) {
		this.renderSession.blendModeManager.setBlendMode(openfl.display.BlendMode.NORMAL);
		this.renderSession.drawCount = 0;
		this.renderSession.currentBlendMode = null;
		this.spriteBatch.begin(this.renderSession);
		this.filterManager.begin(this.renderSession,buffer);
		displayObject.__renderGL(this.renderSession);
		this.spriteBatch.finish();
	}
	,resize: function(width,height) {
		this.width = width;
		this.height = height;
		openfl._internal.renderer.AbstractRenderer.prototype.resize.call(this,width,height);
		this.setViewport(0,0,width,height);
		this.projection.x = width / 2;
		this.projection.y = -height / 2;
	}
	,__class__: openfl._internal.renderer.opengl.GLRenderer
});
openfl._internal.renderer.opengl.shaders2 = {};
openfl._internal.renderer.opengl.shaders2.Shader = function(gl) {
	this.uniforms = new haxe.ds.StringMap();
	this.attributes = new haxe.ds.StringMap();
	this.ID = openfl._internal.renderer.opengl.shaders2.Shader.UID++;
	this.gl = gl;
	this.program = null;
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.Shader"] = openfl._internal.renderer.opengl.shaders2.Shader;
openfl._internal.renderer.opengl.shaders2.Shader.__name__ = true;
openfl._internal.renderer.opengl.shaders2.Shader.compileProgram = function(gl,vertexSrc,fragmentSrc) {
	var vertexShader = openfl._internal.renderer.opengl.shaders2.Shader.compileShader(gl,vertexSrc,gl.VERTEX_SHADER);
	var fragmentShader = openfl._internal.renderer.opengl.shaders2.Shader.compileShader(gl,fragmentSrc,gl.FRAGMENT_SHADER);
	var program = gl.createProgram();
	if(vertexShader != null && fragmentShader != null) {
		gl.attachShader(program,vertexShader);
		gl.attachShader(program,fragmentShader);
		gl.linkProgram(program);
		if(gl.getProgramParameter(program,gl.LINK_STATUS) == 0) haxe.Log.trace("Could not initialize shaders",{ fileName : "Shader.hx", lineNumber : 127, className : "openfl._internal.renderer.opengl.shaders2.Shader", methodName : "compileProgram"});
	}
	return program;
};
openfl._internal.renderer.opengl.shaders2.Shader.compileShader = function(gl,shaderSrc,type) {
	var src = shaderSrc.join("\n");
	var shader = gl.createShader(type);
	gl.shaderSource(shader,src);
	gl.compileShader(shader);
	if(gl.getShaderParameter(shader,gl.COMPILE_STATUS) == 0) {
		haxe.Log.trace(gl.getShaderInfoLog(shader),{ fileName : "Shader.hx", lineNumber : 141, className : "openfl._internal.renderer.opengl.shaders2.Shader", methodName : "compileShader"});
		return null;
	}
	return shader;
};
openfl._internal.renderer.opengl.shaders2.Shader.prototype = {
	init: function() {
		this.program = openfl._internal.renderer.opengl.shaders2.Shader.compileProgram(this.gl,this.vertexSrc,this.fragmentSrc);
		this.gl.useProgram(this.program);
	}
	,getAttribLocation: function(attribute) {
		if(this.program == null) throw "Shader isn't initialized";
		if(this.attributes.exists(attribute)) return this.attributes.get(attribute); else {
			var location = this.gl.getAttribLocation(this.program,attribute);
			this.attributes.set(attribute,location);
			return location;
		}
	}
	,getUniformLocation: function(uniform) {
		if(this.program == null) throw "Shader isn't initialized";
		if(this.uniforms.exists(uniform)) return this.uniforms.get(uniform); else {
			var location = this.gl.getUniformLocation(this.program,uniform);
			this.uniforms.set(uniform,location);
			return location;
		}
	}
	,enableVertexAttribute: function(attribute,stride,offset) {
		var location = this.getAttribLocation(attribute.name);
		this.gl.enableVertexAttribArray(location);
		this.gl.vertexAttribPointer(location,attribute.components,attribute.type,attribute.normalized,stride,offset * 4);
	}
	,disableVertexAttribute: function(attribute,setDefault) {
		if(setDefault == null) setDefault = true;
		var location = this.getAttribLocation(attribute.name);
		this.gl.disableVertexAttribArray(location);
		if(setDefault) {
			var _g = attribute.components;
			switch(_g) {
			case 1:
				this.gl.vertexAttrib1fv(location,attribute.defaultValue.subarray(0,1));
				break;
			case 2:
				this.gl.vertexAttrib2fv(location,attribute.defaultValue.subarray(0,2));
				break;
			case 3:
				this.gl.vertexAttrib3fv(location,attribute.defaultValue.subarray(0,3));
				break;
			default:
				this.gl.vertexAttrib4fv(location,attribute.defaultValue.subarray(0,4));
			}
		}
	}
	,bindVertexArray: function(va) {
		var offset = 0;
		var stride = va.get_stride();
		var _g = 0;
		var _g1 = va.attributes;
		while(_g < _g1.length) {
			var attribute = _g1[_g];
			++_g;
			if(attribute.enabled) {
				this.enableVertexAttribute(attribute,stride,offset);
				offset += Math.floor(attribute.components * attribute.getElementsBytes() / 4);
			} else this.disableVertexAttribute(attribute,true);
		}
	}
	,__class__: openfl._internal.renderer.opengl.shaders2.Shader
};
openfl._internal.renderer.opengl.shaders2.DefaultShader = function(gl) {
	openfl._internal.renderer.opengl.shaders2.Shader.call(this,gl);
	this.vertexSrc = ["attribute vec2 " + Std.string("aPosition") + ";","attribute vec2 " + Std.string("aTexCoord0") + ";","attribute vec4 " + Std.string("aColor") + ";","uniform mat3 " + Std.string("uProjectionMatrix") + ";","varying vec2 vTexCoord;","varying vec4 vColor;","void main(void) {","   gl_Position = vec4((" + Std.string("uProjectionMatrix") + " * vec3(" + Std.string("aPosition") + ", 1.0)).xy, 0.0, 1.0);","   vTexCoord = " + Std.string("aTexCoord0") + ";","   vColor = " + Std.string("aColor") + ";","}"];
	this.fragmentSrc = ["#ifdef GL_ES","precision lowp float;","#endif","uniform sampler2D " + Std.string("uSampler0") + ";","uniform vec4 " + Std.string("uColorMultiplier") + ";","uniform vec4 " + Std.string("uColorOffset") + ";","varying vec2 vTexCoord;","varying vec4 vColor;","vec4 colorTransform(const vec4 color, const vec4 tint, const vec4 multiplier, const vec4 offset) {","   vec4 unmultiply = vec4(color.rgb / color.a, color.a);","   vec4 result = unmultiply * tint * multiplier;","   result = result + offset;","   result = clamp(result, 0., 1.);","   result = vec4(result.rgb * result.a, result.a);","   return result;","}","void main(void) {","   vec4 tc = texture2D(" + Std.string("uSampler0") + ", vTexCoord);","   gl_FragColor = colorTransform(tc, vColor, " + Std.string("uColorMultiplier") + ", " + Std.string("uColorOffset") + ");","}"];
	this.init();
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.DefaultShader"] = openfl._internal.renderer.opengl.shaders2.DefaultShader;
openfl._internal.renderer.opengl.shaders2.DefaultShader.__name__ = true;
openfl._internal.renderer.opengl.shaders2.DefaultShader.__super__ = openfl._internal.renderer.opengl.shaders2.Shader;
openfl._internal.renderer.opengl.shaders2.DefaultShader.prototype = $extend(openfl._internal.renderer.opengl.shaders2.Shader.prototype,{
	init: function() {
		openfl._internal.renderer.opengl.shaders2.Shader.prototype.init.call(this);
		this.getAttribLocation("aPosition");
		this.getAttribLocation("aTexCoord0");
		this.getAttribLocation("aColor");
		this.getUniformLocation("uProjectionMatrix");
		this.getUniformLocation("uSampler0");
		this.getUniformLocation("uColorMultiplier");
		this.getUniformLocation("uColorOffset");
	}
	,__class__: openfl._internal.renderer.opengl.shaders2.DefaultShader
});
openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader = function(gl) {
	openfl._internal.renderer.opengl.shaders2.Shader.call(this,gl);
	this.vertexSrc = ["attribute vec2 " + Std.string("aPosition") + ";","attribute vec2 " + Std.string("aTexCoord0") + ";","attribute vec4 " + Std.string("aColor") + ";","uniform mat3 " + Std.string("uProjectionMatrix") + ";","varying vec2 vTexCoord;","varying vec4 vColor;","void main(void) {","   gl_Position = vec4((" + Std.string("uProjectionMatrix") + " * vec3(" + Std.string("aPosition") + ", 1.0)).xy, 0.0, 1.0);","   vTexCoord = " + Std.string("aTexCoord0") + ";","   vColor = " + Std.string("aColor") + ".bgra;","}"];
	this.fragmentSrc = ["#ifdef GL_ES","precision lowp float;","#endif","uniform sampler2D " + Std.string("uSampler0") + ";","uniform vec3 " + Std.string("uColor") + ";","uniform bool " + Std.string("uUseTexture") + ";","uniform float " + Std.string("uAlpha") + ";","uniform vec4 " + Std.string("uColorMultiplier") + ";","uniform vec4 " + Std.string("uColorOffset") + ";","varying vec2 vTexCoord;","varying vec4 vColor;","vec4 tmp;","vec4 colorTransform(const vec4 color, const vec4 tint, const vec4 multiplier, const vec4 offset) {","   vec4 unmultiply = vec4(color.rgb / color.a, color.a);","   vec4 result = unmultiply * tint * multiplier;","   result = result + offset;","   result = clamp(result, 0., 1.);","   result = vec4(result.rgb * result.a, result.a);","   return result;","}","void main(void) {","   if(" + Std.string("uUseTexture") + ") {","       tmp = texture2D(" + Std.string("uSampler0") + ", vTexCoord);","   } else {","       tmp = vec4(" + Std.string("uColor") + ", 1.);","   }","   gl_FragColor = colorTransform(tmp, vColor, " + Std.string("uColorMultiplier") + ", " + Std.string("uColorOffset") + ");","}"];
	this.init();
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader"] = openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader;
openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader.__name__ = true;
openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader.__super__ = openfl._internal.renderer.opengl.shaders2.Shader;
openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader.prototype = $extend(openfl._internal.renderer.opengl.shaders2.Shader.prototype,{
	init: function() {
		openfl._internal.renderer.opengl.shaders2.Shader.prototype.init.call(this);
		this.getAttribLocation("aPosition");
		this.getAttribLocation("aTexCoord0");
		this.getAttribLocation("aColor");
		this.getUniformLocation("uSampler0");
		this.getUniformLocation("uProjectionMatrix");
		this.getUniformLocation("uColor");
		this.getUniformLocation("uAlpha");
		this.getUniformLocation("uUseTexture");
		this.getUniformLocation("uColorMultiplier");
		this.getUniformLocation("uColorOffset");
	}
	,__class__: openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader
});
openfl._internal.renderer.opengl.shaders2.FillShader = function(gl) {
	openfl._internal.renderer.opengl.shaders2.Shader.call(this,gl);
	this.vertexSrc = ["attribute vec2 " + Std.string("aPosition") + ";","uniform mat3 " + Std.string("uTranslationMatrix") + ";","uniform mat3 " + Std.string("uProjectionMatrix") + ";","uniform vec4 " + Std.string("uColor") + ";","uniform float " + Std.string("uAlpha") + ";","uniform vec4 " + Std.string("uColorMultiplier") + ";","uniform vec4 " + Std.string("uColorOffset") + ";","varying vec4 vColor;","vec4 colorTransform(const vec4 color, const float alpha, const vec4 multiplier, const vec4 offset) {","   vec4 result = color * multiplier;","   result.a *= alpha;","   result = result + offset;","   result = clamp(result, 0., 1.);","   result = vec4(result.rgb * result.a, result.a);","   return result;","}","void main(void) {","   gl_Position = vec4((" + Std.string("uProjectionMatrix") + " * " + Std.string("uTranslationMatrix") + " * vec3(" + Std.string("aPosition") + ", 1.0)).xy, 0.0, 1.0);","   vColor = colorTransform(" + Std.string("uColor") + ", " + Std.string("uAlpha") + ", " + Std.string("uColorMultiplier") + ", " + Std.string("uColorOffset") + ");","}"];
	this.fragmentSrc = ["#ifdef GL_ES","precision lowp float;","#endif","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"];
	this.init();
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.FillShader"] = openfl._internal.renderer.opengl.shaders2.FillShader;
openfl._internal.renderer.opengl.shaders2.FillShader.__name__ = true;
openfl._internal.renderer.opengl.shaders2.FillShader.__super__ = openfl._internal.renderer.opengl.shaders2.Shader;
openfl._internal.renderer.opengl.shaders2.FillShader.prototype = $extend(openfl._internal.renderer.opengl.shaders2.Shader.prototype,{
	init: function() {
		openfl._internal.renderer.opengl.shaders2.Shader.prototype.init.call(this);
		this.getAttribLocation("aPosition");
		this.getUniformLocation("uTranslationMatrix");
		this.getUniformLocation("uProjectionMatrix");
		this.getUniformLocation("uColor");
		this.getUniformLocation("uColorMultiplier");
		this.getUniformLocation("uColorOffset");
	}
	,__class__: openfl._internal.renderer.opengl.shaders2.FillShader
});
openfl._internal.renderer.opengl.shaders2.PatternFillShader = function(gl) {
	openfl._internal.renderer.opengl.shaders2.Shader.call(this,gl);
	this.vertexSrc = ["attribute vec2 " + Std.string("aPosition") + ";","uniform mat3 " + Std.string("uTranslationMatrix") + ";","uniform mat3 " + Std.string("uProjectionMatrix") + ";","uniform mat3 " + Std.string("uPatternMatrix") + ";","varying vec2 vPosition;","void main(void) {","   gl_Position = vec4((" + Std.string("uProjectionMatrix") + " * " + Std.string("uTranslationMatrix") + " * vec3(" + Std.string("aPosition") + ", 1.0)).xy, 0.0, 1.0);","   vPosition = (" + Std.string("uPatternMatrix") + " * vec3(" + Std.string("aPosition") + ", 1)).xy;","}"];
	this.fragmentSrc = ["#ifdef GL_ES","precision lowp float;","#endif","uniform float " + Std.string("uAlpha") + ";","uniform vec2 " + Std.string("uPatternTL") + ";","uniform vec2 " + Std.string("uPatternBR") + ";","uniform sampler2D " + Std.string("uSampler0") + ";","uniform vec4 " + Std.string("uColorMultiplier") + ";","uniform vec4 " + Std.string("uColorOffset") + ";","varying vec2 vPosition;","vec4 colorTransform(const vec4 color, const float alpha, const vec4 multiplier, const vec4 offset) {","   vec4 unmultiply = vec4(color.rgb / color.a, color.a);","   vec4 result = unmultiply * multiplier;","   result.a *= alpha;","   result = result + offset;","   result = clamp(result, 0., 1.);","   result = vec4(result.rgb * result.a, result.a);","   return result;","}","void main(void) {","   vec2 pos = mix(" + Std.string("uPatternTL") + ", " + Std.string("uPatternBR") + ", vPosition);","   vec4 tcol = texture2D(" + Std.string("uSampler0") + ", pos);","   gl_FragColor = colorTransform(tcol, " + Std.string("uAlpha") + ", " + Std.string("uColorMultiplier") + ", " + Std.string("uColorOffset") + ");","}"];
	this.init();
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.PatternFillShader"] = openfl._internal.renderer.opengl.shaders2.PatternFillShader;
openfl._internal.renderer.opengl.shaders2.PatternFillShader.__name__ = true;
openfl._internal.renderer.opengl.shaders2.PatternFillShader.__super__ = openfl._internal.renderer.opengl.shaders2.Shader;
openfl._internal.renderer.opengl.shaders2.PatternFillShader.prototype = $extend(openfl._internal.renderer.opengl.shaders2.Shader.prototype,{
	init: function() {
		openfl._internal.renderer.opengl.shaders2.Shader.prototype.init.call(this);
		this.getAttribLocation("aPosition");
		this.getUniformLocation("uTranslationMatrix");
		this.getUniformLocation("uPatternMatrix");
		this.getUniformLocation("uProjectionMatrix");
		this.getUniformLocation("uSampler0");
		this.getUniformLocation("uPatternTL");
		this.getUniformLocation("uPatternBR");
		this.getUniformLocation("uAlpha");
		this.getUniformLocation("uColorMultiplier");
		this.getUniformLocation("uColorOffset");
	}
	,__class__: openfl._internal.renderer.opengl.shaders2.PatternFillShader
});
openfl._internal.renderer.opengl.shaders2.PrimitiveShader = function(gl) {
	openfl._internal.renderer.opengl.shaders2.Shader.call(this,gl);
	this.vertexSrc = ["attribute vec2 " + Std.string("aPosition") + ";","attribute vec4 " + Std.string("aColor") + ";","uniform mat3 " + Std.string("uTranslationMatrix") + ";","uniform mat3 " + Std.string("uProjectionMatrix") + ";","uniform vec4 " + Std.string("uColorMultiplier") + ";","uniform vec4 " + Std.string("uColorOffset") + ";","uniform float " + Std.string("uAlpha") + ";","varying vec4 vColor;","vec4 colorTransform(const vec4 color, const float alpha, const vec4 multiplier, const vec4 offset) {","   vec4 result = color * multiplier;","   result.a *= alpha;","   result = result + offset;","   result = clamp(result, 0., 1.);","   result = vec4(result.rgb * result.a, result.a);","   return result;","}","void main(void) {","   gl_Position = vec4((" + Std.string("uProjectionMatrix") + " * " + Std.string("uTranslationMatrix") + " * vec3(" + Std.string("aPosition") + ", 1.0)).xy, 0.0, 1.0);","   vColor = colorTransform(" + Std.string("aColor") + ", " + Std.string("uAlpha") + ", " + Std.string("uColorMultiplier") + ", " + Std.string("uColorOffset") + ");","}"];
	this.fragmentSrc = ["#ifdef GL_ES","precision lowp float;","#endif","varying vec4 vColor;","void main(void) {","   gl_FragColor = vColor;","}"];
	this.init();
};
$hxClasses["openfl._internal.renderer.opengl.shaders2.PrimitiveShader"] = openfl._internal.renderer.opengl.shaders2.PrimitiveShader;
openfl._internal.renderer.opengl.shaders2.PrimitiveShader.__name__ = true;
openfl._internal.renderer.opengl.shaders2.PrimitiveShader.__super__ = openfl._internal.renderer.opengl.shaders2.Shader;
openfl._internal.renderer.opengl.shaders2.PrimitiveShader.prototype = $extend(openfl._internal.renderer.opengl.shaders2.Shader.prototype,{
	init: function() {
		openfl._internal.renderer.opengl.shaders2.Shader.prototype.init.call(this);
		this.getAttribLocation("aPosition");
		this.getAttribLocation("aColor");
		this.getUniformLocation("uTranslationMatrix");
		this.getUniformLocation("uProjectionMatrix");
		this.getUniformLocation("uAlpha");
		this.getUniformLocation("uColorMultiplier");
		this.getUniformLocation("uColorOffset");
	}
	,__class__: openfl._internal.renderer.opengl.shaders2.PrimitiveShader
});
openfl._internal.renderer.opengl.utils = {};
openfl._internal.renderer.opengl.utils.BlendModeManager = function(gl) {
	this.gl = gl;
	this.currentBlendMode = null;
};
$hxClasses["openfl._internal.renderer.opengl.utils.BlendModeManager"] = openfl._internal.renderer.opengl.utils.BlendModeManager;
openfl._internal.renderer.opengl.utils.BlendModeManager.__name__ = true;
openfl._internal.renderer.opengl.utils.BlendModeManager.prototype = {
	setBlendMode: function(blendMode,force) {
		if(force == null) force = false;
		if(blendMode == null) {
			blendMode = openfl.display.BlendMode.NORMAL;
			force = true;
		}
		if(!force && this.currentBlendMode == blendMode) return false;
		this.currentBlendMode = blendMode;
		switch(blendMode[1]) {
		case 0:
			this.gl.blendEquation(32774);
			this.gl.blendFunc(1,1);
			break;
		case 9:
			this.gl.blendEquation(32774);
			this.gl.blendFunc(774,771);
			break;
		case 12:
			this.gl.blendEquation(32774);
			this.gl.blendFunc(1,769);
			break;
		case 13:
			this.gl.blendEquation(32779);
			this.gl.blendFunc(1,1);
			break;
		default:
			this.gl.blendEquation(32774);
			this.gl.blendFunc(1,771);
		}
		return true;
	}
	,__class__: openfl._internal.renderer.opengl.utils.BlendModeManager
};
openfl._internal.renderer.opengl.utils.DrawPath = function() {
	this.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
	this.points = [];
	this.winding = 0;
	this.isRemovable = true;
	this.fillIndex = 0;
	this.line = new openfl._internal.renderer.opengl.utils.LineStyle();
	this.fill = openfl._internal.renderer.opengl.utils.FillType.None;
};
$hxClasses["openfl._internal.renderer.opengl.utils.DrawPath"] = openfl._internal.renderer.opengl.utils.DrawPath;
openfl._internal.renderer.opengl.utils.DrawPath.__name__ = true;
openfl._internal.renderer.opengl.utils.DrawPath.getStack = function(graphics,gl) {
	return openfl._internal.renderer.opengl.utils.PathBuiler.build(graphics,gl);
};
openfl._internal.renderer.opengl.utils.DrawPath.prototype = {
	update: function(line,fill,fillIndex,winding) {
		this.updateLine(line);
		this.fill = fill;
		this.fillIndex = fillIndex;
		this.winding = winding;
	}
	,updateLine: function(line) {
		this.line.width = line.width;
		this.line.color = line.color;
		if(line.alpha == null) this.line.alpha = 1; else this.line.alpha = line.alpha;
		if(line.scaleMode == null) this.line.scaleMode = openfl.display.LineScaleMode.NORMAL; else this.line.scaleMode = line.scaleMode;
		if(line.caps == null) this.line.caps = openfl.display.CapsStyle.ROUND; else this.line.caps = line.caps;
		if(line.joints == null) this.line.joints = openfl.display.JointStyle.ROUND; else this.line.joints = line.joints;
		this.line.miterLimit = line.miterLimit;
	}
	,__class__: openfl._internal.renderer.opengl.utils.DrawPath
};
openfl._internal.renderer.opengl.utils.PathBuiler = function() { };
$hxClasses["openfl._internal.renderer.opengl.utils.PathBuiler"] = openfl._internal.renderer.opengl.utils.PathBuiler;
openfl._internal.renderer.opengl.utils.PathBuiler.__name__ = true;
openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = null;
openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths = null;
openfl._internal.renderer.opengl.utils.PathBuiler.__line = null;
openfl._internal.renderer.opengl.utils.PathBuiler.__fill = null;
openfl._internal.renderer.opengl.utils.PathBuiler.closePath = function() {
	var l = openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length;
	if(l <= 0) return;
	if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type == openfl._internal.renderer.opengl.utils.GraphicType.Polygon && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.fill != openfl._internal.renderer.opengl.utils.FillType.None) {
		var sx = openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points[0];
		var sy = openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points[1];
		var ex = openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points[l - 2];
		var ey = openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points[l - 1];
		if(!(sx == ex && sy == ey)) openfl._internal.renderer.opengl.utils.PathBuiler.lineTo(sx,sy);
	}
};
openfl._internal.renderer.opengl.utils.PathBuiler.endFill = function() {
	openfl._internal.renderer.opengl.utils.PathBuiler.__fill = openfl._internal.renderer.opengl.utils.FillType.None;
	openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex++;
};
openfl._internal.renderer.opengl.utils.PathBuiler.lineTo = function(x,y) {
	var points = openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points;
	var push_point = true;
	if(points.length > 1) {
		var lastX = points[points.length - 2];
		var lastY = points[points.length - 1];
		if(lastX == x && lastY == y) push_point = false;
	}
	if(push_point == true) {
		openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(x);
		openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(y);
	}
};
openfl._internal.renderer.opengl.utils.PathBuiler.build = function(graphics,gl) {
	var glStack = null;
	var bounds = graphics.__bounds;
	openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths = new Array();
	openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
	openfl._internal.renderer.opengl.utils.PathBuiler.__line = new openfl._internal.renderer.opengl.utils.LineStyle();
	openfl._internal.renderer.opengl.utils.PathBuiler.__fill = openfl._internal.renderer.opengl.utils.FillType.None;
	openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex = 0;
	glStack = graphics.__glStack[openfl._internal.renderer.opengl.GLRenderer.glContextId];
	if(glStack == null) glStack = graphics.__glStack[openfl._internal.renderer.opengl.GLRenderer.glContextId] = new openfl._internal.renderer.opengl.utils.GLStack(gl);
	if(!graphics.__visible || graphics.__commands.length == 0 || bounds == null || bounds.width == 0 || bounds.height == 0) {
	} else {
		var _g = 0;
		var _g1 = graphics.__commands;
		while(_g < _g1.length) {
			var command = _g1[_g];
			++_g;
			switch(command[1]) {
			case 0:
				var smooth = command[5];
				var repeat = command[4];
				var matrix = command[3];
				var bitmap = command[2];
				openfl._internal.renderer.opengl.utils.PathBuiler.endFill();
				if(bitmap != null) openfl._internal.renderer.opengl.utils.PathBuiler.__fill = openfl._internal.renderer.opengl.utils.FillType.Texture(bitmap,matrix,repeat,smooth); else openfl._internal.renderer.opengl.utils.PathBuiler.__fill = openfl._internal.renderer.opengl.utils.FillType.None;
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) {
					if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points = [];
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
					openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				}
				break;
			case 1:
				var alpha = command[3];
				var rgb = command[2];
				openfl._internal.renderer.opengl.utils.PathBuiler.endFill();
				if(alpha > 0) openfl._internal.renderer.opengl.utils.PathBuiler.__fill = openfl._internal.renderer.opengl.utils.FillType.Color(rgb & 16777215,alpha); else openfl._internal.renderer.opengl.utils.PathBuiler.__fill = openfl._internal.renderer.opengl.utils.FillType.None;
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) {
					if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points = [];
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
					openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				}
				break;
			case 3:
				var y = command[7];
				var x = command[6];
				var cy2 = command[5];
				var cx2 = command[4];
				var cy = command[3];
				var cx = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) {
					if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
					openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				}
				openfl._internal.renderer.GraphicsPaths.cubicCurveTo(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points,cx,cy,cx2,cy2,x,y);
				break;
			case 4:
				var y1 = command[5];
				var x1 = command[4];
				var cy1 = command[3];
				var cx1 = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) {
					if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
					openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				}
				openfl._internal.renderer.GraphicsPaths.curveTo(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points,cx1,cy1,x1,y1);
				break;
			case 5:
				var radius = command[4];
				var y2 = command[3];
				var x2 = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Circle;
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points = [x2,y2,radius];
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 6:
				var height = command[5];
				var width = command[4];
				var y3 = command[3];
				var x3 = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Ellipse;
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points = [x3,y3,width,height];
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 7:
				var height1 = command[5];
				var width1 = command[4];
				var y4 = command[3];
				var x4 = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Rectangle(false);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points = [x4,y4,width1,height1];
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 8:
				var ry = command[7];
				var rx = command[6];
				var height2 = command[5];
				var width2 = command[4];
				var y5 = command[3];
				var x5 = command[2];
				if(ry == -1) ry = rx;
				rx *= 0.5;
				ry *= 0.5;
				if(rx > width2 / 2) rx = width2 / 2;
				if(ry > height2 / 2) ry = height2 / 2;
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Rectangle(true);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points = [x5,y5,width2,height2,rx,ry];
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 11:
				openfl._internal.renderer.opengl.utils.PathBuiler.endFill();
				break;
			case 12:
				var miterLimit = command[9];
				var joints = command[8];
				var caps = command[7];
				var scaleMode = command[6];
				var pixelHinting = command[5];
				var alpha1 = command[4];
				var color = command[3];
				var thickness = command[2];
				openfl._internal.renderer.opengl.utils.PathBuiler.__line = new openfl._internal.renderer.opengl.utils.LineStyle();
				if(thickness == null || Math.isNaN(thickness) || thickness < 0) openfl._internal.renderer.opengl.utils.PathBuiler.__line.width = 0; else if(thickness == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__line.width = 1; else openfl._internal.renderer.opengl.utils.PathBuiler.__line.width = thickness;
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				if(color == null) openfl._internal.renderer.opengl.utils.PathBuiler.__line.color = 0; else openfl._internal.renderer.opengl.utils.PathBuiler.__line.color = color;
				if(alpha1 == null) openfl._internal.renderer.opengl.utils.PathBuiler.__line.alpha = 1; else openfl._internal.renderer.opengl.utils.PathBuiler.__line.alpha = alpha1;
				openfl._internal.renderer.opengl.utils.PathBuiler.__line.scaleMode = scaleMode;
				openfl._internal.renderer.opengl.utils.PathBuiler.__line.caps = caps;
				openfl._internal.renderer.opengl.utils.PathBuiler.__line.joints = joints;
				openfl._internal.renderer.opengl.utils.PathBuiler.__line.miterLimit = miterLimit;
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points = [];
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 15:
				var y6 = command[3];
				var x6 = command[2];
				openfl._internal.renderer.opengl.utils.PathBuiler.lineTo(x6,y6);
				break;
			case 16:
				var y7 = command[3];
				var x7 = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(x7);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(y7);
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 10:
				var blendMode = command[7];
				var colors = command[6];
				var culling = command[5];
				var uvtData = command[4];
				var indices = command[3];
				var vertices = command[2];
				var isColor;
				{
					var _g2 = openfl._internal.renderer.opengl.utils.PathBuiler.__fill;
					switch(_g2[1]) {
					case 1:
						isColor = true;
						break;
					default:
						isColor = false;
					}
				}
				if(isColor && uvtData != null) continue;
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				if(uvtData == null) {
					var this1;
					this1 = new openfl.VectorData();
					var this2;
					this2 = new Array(0);
					this1.data = this2;
					this1.length = 0;
					this1.fixed = false;
					uvtData = this1;
					{
						var _g21 = openfl._internal.renderer.opengl.utils.PathBuiler.__fill;
						switch(_g21[1]) {
						case 2:
							var b = _g21[2];
							var _g4 = 0;
							var _g3 = vertices.length / 2 | 0;
							while(_g4 < _g3) {
								var i = _g4++;
								if(!uvtData.fixed) {
									uvtData.length++;
									if(uvtData.data.length < uvtData.length) {
										var data;
										var this3;
										this3 = new Array(uvtData.data.length + 10);
										data = this3;
										haxe.ds._Vector.Vector_Impl_.blit(uvtData.data,0,data,0,uvtData.data.length);
										uvtData.data = data;
									}
									uvtData.data[uvtData.length - 1] = vertices.data[i * 2] / b.width;
								}
								uvtData.length;
								if(!uvtData.fixed) {
									uvtData.length++;
									if(uvtData.data.length < uvtData.length) {
										var data1;
										var this4;
										this4 = new Array(uvtData.data.length + 10);
										data1 = this4;
										haxe.ds._Vector.Vector_Impl_.blit(uvtData.data,0,data1,0,uvtData.data.length);
										uvtData.data = data1;
									}
									uvtData.data[uvtData.length - 1] = vertices.data[i * 2 + 1] / b.height;
								}
								uvtData.length;
							}
							break;
						default:
						}
					}
				}
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.DrawTriangles(vertices,indices,uvtData,culling,colors,blendMode);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable = false;
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 9:
				var count = command[6];
				var flags = command[5];
				var smooth1 = command[4];
				var tileData = command[3];
				var sheet = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex++;
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.DrawTiles(sheet,tileData,smooth1,flags,count);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable = false;
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			case 17:
				var winding = command[4];
				var data2 = command[3];
				var commands = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				switch(winding) {
				case openfl.display.GraphicsPathWinding.EVEN_ODD:
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding = 0;
					break;
				case openfl.display.GraphicsPathWinding.NON_ZERO:
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding = 1;
					break;
				default:
					openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding = 0;
				}
				var command1;
				var cx3;
				var cy3;
				var cx21;
				var cy21;
				var ax;
				var ay;
				var idx = 0;
				var _g31 = 0;
				var _g22 = commands.length;
				while(_g31 < _g22) {
					var i1 = _g31++;
					command1 = commands.data[i1];
					switch(command1) {
					case 1:
						ax = data2.data[idx];
						ay = data2.data[idx + 1];
						idx += 2;
						if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(ax);
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(ay);
						openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
						break;
					case 4:
						ax = data2.data[idx + 2];
						ay = data2.data[idx + 3];
						idx += 4;
						if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(ax);
						openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(ay);
						openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
						break;
					case 2:
						ax = data2.data[idx];
						ay = data2.data[idx + 1];
						idx += 2;
						openfl._internal.renderer.opengl.utils.PathBuiler.lineTo(ax,ay);
						break;
					case 5:
						ax = data2.data[idx + 2];
						ay = data2.data[idx + 3];
						idx += 4;
						openfl._internal.renderer.opengl.utils.PathBuiler.lineTo(ax,ay);
						break;
					case 3:
						cx3 = data2.data[idx];
						cy3 = data2.data[idx + 1];
						ax = data2.data[idx + 2];
						ay = data2.data[idx + 3];
						idx += 4;
						if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) {
							if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
							openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
						}
						openfl._internal.renderer.GraphicsPaths.curveTo(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points,cx3,cy3,ax,ay);
						break;
					case 6:
						cx3 = data2.data[idx];
						cy3 = data2.data[idx + 1];
						cx21 = data2.data[idx + 2];
						cy21 = data2.data[idx + 3];
						ax = data2.data[idx + 4];
						ay = data2.data[idx + 5];
						idx += 6;
						if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) {
							if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
							openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.push(0);
							openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
						}
						openfl._internal.renderer.GraphicsPaths.cubicCurveTo(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points,cx3,cy3,cx21,cy21,ax,ay);
						break;
					default:
					}
				}
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding = 0;
				break;
			case 18:
				var m = command[2];
				if(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable && openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.points.length == 0) openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.pop(); else openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath = new openfl._internal.renderer.opengl.utils.DrawPath();
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.update(openfl._internal.renderer.opengl.utils.PathBuiler.__line,openfl._internal.renderer.opengl.utils.PathBuiler.__fill,openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex,openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.type = openfl._internal.renderer.opengl.utils.GraphicType.OverrideMatrix(m);
				openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath.isRemovable = false;
				openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths.push(openfl._internal.renderer.opengl.utils.PathBuiler.__currentPath);
				break;
			default:
			}
		}
		openfl._internal.renderer.opengl.utils.PathBuiler.closePath();
	}
	graphics.__drawPaths = openfl._internal.renderer.opengl.utils.PathBuiler.__drawPaths;
	return glStack;
};
openfl._internal.renderer.opengl.utils.LineStyle = function() {
	this.width = 0;
	this.color = 0;
	this.alpha = 1;
	this.scaleMode = openfl.display.LineScaleMode.NORMAL;
	this.caps = openfl.display.CapsStyle.ROUND;
	this.joints = openfl.display.JointStyle.ROUND;
	this.miterLimit = 3;
};
$hxClasses["openfl._internal.renderer.opengl.utils.LineStyle"] = openfl._internal.renderer.opengl.utils.LineStyle;
openfl._internal.renderer.opengl.utils.LineStyle.__name__ = true;
openfl._internal.renderer.opengl.utils.LineStyle.prototype = {
	__class__: openfl._internal.renderer.opengl.utils.LineStyle
};
openfl._internal.renderer.opengl.utils.FillType = $hxClasses["openfl._internal.renderer.opengl.utils.FillType"] = { __ename__ : true, __constructs__ : ["None","Color","Texture","Gradient"] };
openfl._internal.renderer.opengl.utils.FillType.None = ["None",0];
openfl._internal.renderer.opengl.utils.FillType.None.toString = $estr;
openfl._internal.renderer.opengl.utils.FillType.None.__enum__ = openfl._internal.renderer.opengl.utils.FillType;
openfl._internal.renderer.opengl.utils.FillType.Color = function(color,alpha) { var $x = ["Color",1,color,alpha]; $x.__enum__ = openfl._internal.renderer.opengl.utils.FillType; $x.toString = $estr; return $x; };
openfl._internal.renderer.opengl.utils.FillType.Texture = function(bitmap,matrix,repeat,smooth) { var $x = ["Texture",2,bitmap,matrix,repeat,smooth]; $x.__enum__ = openfl._internal.renderer.opengl.utils.FillType; $x.toString = $estr; return $x; };
openfl._internal.renderer.opengl.utils.FillType.Gradient = ["Gradient",3];
openfl._internal.renderer.opengl.utils.FillType.Gradient.toString = $estr;
openfl._internal.renderer.opengl.utils.FillType.Gradient.__enum__ = openfl._internal.renderer.opengl.utils.FillType;
openfl._internal.renderer.opengl.utils.FilterManager = function(gl,transparent) {
	this.transparent = transparent;
	this.filterStack = [];
	this.offsetX = 0;
	this.offsetY = 0;
	this.setContext(gl);
};
$hxClasses["openfl._internal.renderer.opengl.utils.FilterManager"] = openfl._internal.renderer.opengl.utils.FilterManager;
openfl._internal.renderer.opengl.utils.FilterManager.__name__ = true;
openfl._internal.renderer.opengl.utils.FilterManager.prototype = {
	begin: function(renderSession,buffer) {
		this.renderSession = renderSession;
		this.defaultShader = renderSession.shaderManager.defaultShader;
		this.width = 0;
		this.height = 0;
		this.buffer = buffer;
	}
	,initShaderBuffers: function() {
		var gl = this.gl;
		this.vertexBuffer = gl.createBuffer();
		this.uvBuffer = gl.createBuffer();
		this.colorBuffer = gl.createBuffer();
		this.indexBuffer = gl.createBuffer();
		var array = [0.0,0.0,1.0,0.0,0.0,1.0,1.0,1.0];
		var this1;
		if(array != null) this1 = new Float32Array(array); else this1 = null;
		this.vertexArray = this1;
		gl.bindBuffer(gl.ARRAY_BUFFER,this.vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER,this.vertexArray,gl.STATIC_DRAW);
		var array1 = [0.0,0.0,1.0,0.0,0.0,1.0,1.0,1.0];
		var this2;
		if(array1 != null) this2 = new Float32Array(array1); else this2 = null;
		this.uvArray = this2;
		gl.bindBuffer(gl.ARRAY_BUFFER,this.uvBuffer);
		gl.bufferData(gl.ARRAY_BUFFER,this.uvArray,gl.STATIC_DRAW);
		var array2 = [1.0,16777215,1.0,16777215,1.0,16777215,1.0,16777215];
		var this3;
		if(array2 != null) this3 = new Float32Array(array2); else this3 = null;
		this.colorArray = this3;
		gl.bindBuffer(gl.ARRAY_BUFFER,this.colorBuffer);
		gl.bufferData(gl.ARRAY_BUFFER,this.colorArray,gl.STATIC_DRAW);
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,(function($this) {
			var $r;
			var array3 = [0,1,2,1,3,2];
			var this4;
			if(array3 != null) this4 = new Uint16Array(array3); else this4 = null;
			$r = this4;
			return $r;
		}(this)),gl.STATIC_DRAW);
	}
	,setContext: function(gl) {
		this.gl = gl;
		this.texturePool = [];
		this.initShaderBuffers();
	}
	,__class__: openfl._internal.renderer.opengl.utils.FilterManager
};
openfl._internal.renderer.opengl.utils.FilterTexture = function() { };
$hxClasses["openfl._internal.renderer.opengl.utils.FilterTexture"] = openfl._internal.renderer.opengl.utils.FilterTexture;
openfl._internal.renderer.opengl.utils.FilterTexture.__name__ = true;
openfl._internal.renderer.opengl.utils.FilterTexture.prototype = {
	destroy: function() {
		this.gl.deleteFramebuffer(this.frameBuffer);
		this.gl.deleteTexture(this.texture);
		this.frameBuffer = null;
		this.texture = null;
	}
	,__class__: openfl._internal.renderer.opengl.utils.FilterTexture
};
openfl._internal.renderer.opengl.utils.GLMaskManager = function(renderSession) {
	openfl._internal.renderer.AbstractMaskManager.call(this,renderSession);
	this.setContext(renderSession.gl);
};
$hxClasses["openfl._internal.renderer.opengl.utils.GLMaskManager"] = openfl._internal.renderer.opengl.utils.GLMaskManager;
openfl._internal.renderer.opengl.utils.GLMaskManager.__name__ = true;
openfl._internal.renderer.opengl.utils.GLMaskManager.__super__ = openfl._internal.renderer.AbstractMaskManager;
openfl._internal.renderer.opengl.utils.GLMaskManager.prototype = $extend(openfl._internal.renderer.AbstractMaskManager.prototype,{
	pushMask: function(mask) {
		this.renderSession.stencilManager.pushMask(mask,this.renderSession);
	}
	,popMask: function() {
		this.renderSession.stencilManager.popMask(null,this.renderSession);
	}
	,setContext: function(gl) {
		if(this.renderSession != null) this.renderSession.gl = gl;
		this.gl = gl;
	}
	,__class__: openfl._internal.renderer.opengl.utils.GLMaskManager
});
openfl._internal.renderer.opengl.utils.VertexAttribute = function(components,type,normalized,name,defaultValue) {
	if(normalized == null) normalized = false;
	this.enabled = true;
	this.normalized = false;
	this.components = components;
	this.type = type;
	this.normalized = normalized;
	this.name = name;
	if(defaultValue == null) {
		var this1;
		if(components != null) this1 = new Float32Array(components); else this1 = null;
		this.defaultValue = this1;
	} else this.defaultValue = defaultValue;
};
$hxClasses["openfl._internal.renderer.opengl.utils.VertexAttribute"] = openfl._internal.renderer.opengl.utils.VertexAttribute;
openfl._internal.renderer.opengl.utils.VertexAttribute.__name__ = true;
openfl._internal.renderer.opengl.utils.VertexAttribute.prototype = {
	copy: function() {
		return new openfl._internal.renderer.opengl.utils.VertexAttribute(this.components,this.type,this.normalized,this.name,this.defaultValue);
	}
	,getElementsBytes: function() {
		var _g = this.type;
		switch(_g) {
		case 5120:case 5121:
			return 1;
		case 5122:case 5123:
			return 2;
		default:
			return 4;
		}
	}
	,__class__: openfl._internal.renderer.opengl.utils.VertexAttribute
};
openfl.geom.Rectangle = function(x,y,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["openfl.geom.Rectangle"] = openfl.geom.Rectangle;
openfl.geom.Rectangle.__name__ = true;
openfl.geom.Rectangle.prototype = {
	clone: function() {
		return new openfl.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,contains: function(x,y) {
		return x >= this.x && y >= this.y && x < this.get_right() && y < this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,copyFrom: function(sourceRect) {
		this.x = sourceRect.x;
		this.y = sourceRect.y;
		this.width = sourceRect.width;
		this.height = sourceRect.height;
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,setTo: function(xa,ya,widtha,heighta) {
		this.x = xa;
		this.y = ya;
		this.width = widtha;
		this.height = heighta;
	}
	,__expand: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			return;
		}
		var cacheRight = this.get_right();
		var cacheBottom = this.get_bottom();
		if(this.x > x) {
			this.x = x;
			this.width = cacheRight - x;
		}
		if(this.y > y) {
			this.y = y;
			this.height = cacheBottom - y;
		}
		if(cacheRight < x + width) this.width = x + width - this.x;
		if(cacheBottom < y + height) this.height = y + height - this.y;
	}
	,__toLimeRectangle: function() {
		return new lime.math.Rectangle(this.x,this.y,this.width,this.height);
	}
	,__transform: function(rect,m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = ty0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		rect.setTo(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,get_left: function() {
		return this.x;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,get_top: function() {
		return this.y;
	}
	,__class__: openfl.geom.Rectangle
};
openfl.geom.Point = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["openfl.geom.Point"] = openfl.geom.Point;
openfl.geom.Point.__name__ = true;
openfl.geom.Point.prototype = {
	clone: function() {
		return new openfl.geom.Point(this.x,this.y);
	}
	,setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	}
	,__toLimeVector2: function() {
		return new lime.math.Vector2(this.x,this.y);
	}
	,__class__: openfl.geom.Point
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer = function() { };
$hxClasses["openfl._internal.renderer.opengl.utils.GraphicsRenderer"] = openfl._internal.renderer.opengl.utils.GraphicsRenderer;
openfl._internal.renderer.opengl.utils.GraphicsRenderer.__name__ = true;
openfl._internal.renderer.opengl.utils.GraphicsRenderer.overrideMatrix = null;
openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildCircle = function(path,glStack,localCoords) {
	if(localCoords == null) localCoords = false;
	var rectData = path.points;
	var x = rectData[0];
	var y = rectData[1];
	var rx = rectData[2];
	var ry;
	if(rectData.length == 3) ry = rx; else ry = rectData[3];
	if(path.type == openfl._internal.renderer.opengl.utils.GraphicType.Ellipse) {
		rx /= 2;
		ry /= 2;
		x += rx;
		y += ry;
	}
	if(localCoords) {
		x -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
		y -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
	}
	var totalSegs = 40;
	var seg = Math.PI * 2 / totalSegs;
	var bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket(path,glStack);
	var fill = bucket.getData(openfl._internal.renderer.opengl.utils.BucketDataType.Fill);
	if(fill != null) {
		var verts = fill.verts;
		var indices = fill.indices;
		var vertPos = verts.length / 2 | 0;
		indices.push(vertPos);
		var _g1 = 0;
		var _g = totalSegs + 1;
		while(_g1 < _g) {
			var i = _g1++;
			verts.push(x);
			verts.push(y);
			verts.push(x + Math.sin(seg * i) * rx);
			verts.push(y + Math.cos(seg * i) * ry);
			indices.push(vertPos++);
			indices.push(vertPos++);
		}
		indices.push(vertPos - 1);
	}
	if(path.line.width > 0) {
		var tempPoints = path.points;
		path.points = [];
		openfl._internal.renderer.GraphicsPaths.ellipse(path.points,x,y,rx,ry,totalSegs);
		openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildLine(path,bucket);
		path.points = tempPoints;
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildComplexPoly = function(path,glStack,localCoords) {
	if(localCoords == null) localCoords = false;
	var bucket = null;
	if(path.points.length >= 6) {
		var points = path.points.slice();
		if(localCoords) {
			var _g1 = 0;
			var _g = points.length / 2 | 0;
			while(_g1 < _g) {
				var i = _g1++;
				points[i * 2] -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
				points[i * 2 + 1] -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
			}
		}
		bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket(path,glStack);
		var fill = bucket.getData(openfl._internal.renderer.opengl.utils.BucketDataType.Fill);
		fill.drawMode = glStack.gl.TRIANGLE_FAN;
		fill.verts = points;
		var indices = fill.indices;
		var length = points.length / 2 | 0;
		var _g2 = 0;
		while(_g2 < length) {
			var i1 = _g2++;
			indices.push(i1);
		}
	}
	if(path.line.width > 0) {
		if(bucket == null) bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket(path,glStack);
		openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildLine(path,bucket,localCoords);
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildLine = function(path,bucket,localCoords) {
	if(localCoords == null) localCoords = false;
	var points = path.points;
	if(points.length == 0) return;
	var line = bucket.getData(openfl._internal.renderer.opengl.utils.BucketDataType.Line);
	if(localCoords) {
		var _g1 = 0;
		var _g = points.length / 2 | 0;
		while(_g1 < _g) {
			var i = _g1++;
			points[i * 2] -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
			points[i * 2 + 1] -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
		}
	}
	var firstPoint = new openfl.geom.Point(points[0],points[1]);
	var lastPoint = new openfl.geom.Point(points[points.length - 2 | 0],points[points.length - 1 | 0]);
	if(firstPoint.x == lastPoint.x && firstPoint.y == lastPoint.y) {
		points = points.slice();
		points.pop();
		points.pop();
		lastPoint = new openfl.geom.Point(points[points.length - 2 | 0],points[points.length - 1 | 0]);
		var midPointX = lastPoint.x + (firstPoint.x - lastPoint.x) * 0.5;
		var midPointY = lastPoint.y + (firstPoint.y - lastPoint.y) * 0.5;
		points.unshift(midPointY);
		points.unshift(midPointX);
		points.push(midPointX);
		points.push(midPointY);
	}
	var verts = line.verts;
	var indices = line.indices;
	var length = points.length / 2 | 0;
	var indexCount = points.length;
	var indexStart = verts.length / 6 | 0;
	var width = path.line.width / 2;
	var color = openfl._internal.renderer.opengl.utils.GraphicsRenderer.hex2rgb(path.line.color);
	var alpha = path.line.alpha;
	var r = color[0];
	var g = color[1];
	var b = color[2];
	var px;
	var py;
	var p1x;
	var p1y;
	var p2x;
	var p2y;
	var p3x;
	var p3y;
	var perpx;
	var perpy;
	var perp2x;
	var perp2y;
	var perp3x;
	var perp3y;
	var a1;
	var b1;
	var c1;
	var a2;
	var b2;
	var c2;
	var denom;
	var pdist;
	var dist;
	p1x = points[0];
	p1y = points[1];
	p2x = points[2];
	p2y = points[3];
	perpx = -(p1y - p2y);
	perpy = p1x - p2x;
	dist = Math.sqrt(Math.abs(perpx * perpx + perpy * perpy));
	perpx = perpx / dist;
	perpy = perpy / dist;
	perpx = perpx * width;
	perpy = perpy * width;
	verts.push(p1x - perpx);
	verts.push(p1y - perpy);
	verts.push(r);
	verts.push(g);
	verts.push(b);
	verts.push(alpha);
	verts.push(p1x + perpx);
	verts.push(p1y + perpy);
	verts.push(r);
	verts.push(g);
	verts.push(b);
	verts.push(alpha);
	var _g11 = 1;
	var _g2 = length - 1;
	while(_g11 < _g2) {
		var i1 = _g11++;
		p1x = points[(i1 - 1) * 2];
		p1y = points[(i1 - 1) * 2 + 1];
		p2x = points[i1 * 2];
		p2y = points[i1 * 2 + 1];
		p3x = points[(i1 + 1) * 2];
		p3y = points[(i1 + 1) * 2 + 1];
		perpx = -(p1y - p2y);
		perpy = p1x - p2x;
		dist = Math.sqrt(Math.abs(perpx * perpx + perpy * perpy));
		perpx = perpx / dist;
		perpy = perpy / dist;
		perpx = perpx * width;
		perpy = perpy * width;
		perp2x = -(p2y - p3y);
		perp2y = p2x - p3x;
		dist = Math.sqrt(Math.abs(perp2x * perp2x + perp2y * perp2y));
		perp2x = perp2x / dist;
		perp2y = perp2y / dist;
		perp2x = perp2x * width;
		perp2y = perp2y * width;
		a1 = -perpy + p1y - (-perpy + p2y);
		b1 = -perpx + p2x - (-perpx + p1x);
		c1 = (-perpx + p1x) * (-perpy + p2y) - (-perpx + p2x) * (-perpy + p1y);
		a2 = -perp2y + p3y - (-perp2y + p2y);
		b2 = -perp2x + p2x - (-perp2x + p3x);
		c2 = (-perp2x + p3x) * (-perp2y + p2y) - (-perp2x + p2x) * (-perp2y + p3y);
		denom = a1 * b2 - a2 * b1;
		if(Math.abs(denom) < 0.1) {
			denom += 10.1;
			verts.push(p2x - perpx);
			verts.push(p2y - perpy);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			verts.push(p2x + perpx);
			verts.push(p2y + perpy);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			continue;
		}
		px = (b1 * c2 - b2 * c1) / denom;
		py = (a2 * c1 - a1 * c2) / denom;
		pdist = (px - p2x) * (px - p2x) + (py - p2y) + (py - p2y);
		if(pdist > 19600) {
			perp3x = perpx - perp2x;
			perp3y = perpy - perp2y;
			dist = Math.sqrt(Math.abs(perp3x * perp3x + perp3y * perp3y));
			perp3x = perp3x / dist;
			perp3y = perp3y / dist;
			perp3x = perp3x * width;
			perp3y = perp3y * width;
			verts.push(p2x - perp3x);
			verts.push(p2y - perp3y);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			verts.push(p2x + perp3x);
			verts.push(p2y + perp3y);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			verts.push(p2x - perp3x);
			verts.push(p2y - perp3y);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			indexCount++;
		} else {
			verts.push(px);
			verts.push(py);
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
			verts.push(p2x - (px - p2x));
			verts.push(p2y - (py - p2y));
			verts.push(r);
			verts.push(g);
			verts.push(b);
			verts.push(alpha);
		}
	}
	p1x = points[(length - 2) * 2];
	p1y = points[(length - 2) * 2 + 1];
	p2x = points[(length - 1) * 2];
	p2y = points[(length - 1) * 2 + 1];
	perpx = -(p1y - p2y);
	perpy = p1x - p2x;
	dist = Math.sqrt(Math.abs(perpx * perpx + perpy * perpy));
	if(!Math.isFinite(dist)) haxe.Log.trace(perpx * perpx + perpy * perpy,{ fileName : "GraphicsRenderer.hx", lineNumber : 406, className : "openfl._internal.renderer.opengl.utils.GraphicsRenderer", methodName : "buildLine"});
	perpx = perpx / dist;
	perpy = perpy / dist;
	perpx = perpx * width;
	perpy = perpy * width;
	verts.push(p2x - perpx);
	verts.push(p2y - perpy);
	verts.push(r);
	verts.push(g);
	verts.push(b);
	verts.push(alpha);
	verts.push(p2x + perpx);
	verts.push(p2y + perpy);
	verts.push(r);
	verts.push(g);
	verts.push(b);
	verts.push(alpha);
	indices.push(indexStart);
	var _g3 = 0;
	while(_g3 < indexCount) {
		var i2 = _g3++;
		indices.push(indexStart++);
	}
	indices.push(indexStart - 1);
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildRectangle = function(path,glStack,localCoords) {
	if(localCoords == null) localCoords = false;
	var rectData = path.points;
	var x = rectData[0];
	var y = rectData[1];
	var width = rectData[2];
	var height = rectData[3];
	if(localCoords) {
		x -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
		y -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
	}
	var bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket(path,glStack);
	var fill = bucket.getData(openfl._internal.renderer.opengl.utils.BucketDataType.Fill);
	if(fill != null) {
		var verts = fill.verts;
		var indices = fill.indices;
		var vertPos = verts.length / 2 | 0;
		verts.push(x);
		verts.push(y);
		verts.push(x + width);
		verts.push(y);
		verts.push(x);
		verts.push(y + height);
		verts.push(x + width);
		verts.push(y + height);
		indices.push(vertPos);
		indices.push(vertPos);
		indices.push(vertPos + 1);
		indices.push(vertPos + 2);
		indices.push(vertPos + 3);
		indices.push(vertPos + 3);
	}
	if(path.line.width > 0) {
		var tempPoints = path.points;
		path.points = [x,y,x + width,y,x + width,y + height,x,y + height,x,y];
		openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildLine(path,bucket);
		path.points = tempPoints;
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildRoundedRectangle = function(path,glStack,localCoords) {
	if(localCoords == null) localCoords = false;
	var points = path.points.slice();
	var x = points[0];
	var y = points[1];
	var width = points[2];
	var height = points[3];
	var rx = points[4];
	var ry = points[5];
	if(localCoords) {
		x -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
		y -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
	}
	var recPoints = [];
	openfl._internal.renderer.GraphicsPaths.roundRectangle(recPoints,x,y,width,height,rx,ry);
	var bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket(path,glStack);
	var fill = bucket.getData(openfl._internal.renderer.opengl.utils.BucketDataType.Fill);
	if(fill != null) {
		var verts = fill.verts;
		var indices = fill.indices;
		var vecPos = verts.length / 2;
		var triangles = new Array();
		openfl._internal.renderer.PolyK.triangulate(triangles,recPoints);
		var i = 0;
		while(i < triangles.length) {
			indices.push(triangles[i] + vecPos | 0);
			indices.push(triangles[i] + vecPos | 0);
			indices.push(triangles[i + 1] + vecPos | 0);
			indices.push(triangles[i + 2] + vecPos | 0);
			indices.push(triangles[i + 2] + vecPos | 0);
			i += 3;
		}
		i = 0;
		while(i < recPoints.length) {
			verts.push(recPoints[i]);
			verts.push(recPoints[++i]);
			i++;
		}
	}
	if(path.line.width > 0) {
		var tempPoints = path.points;
		path.points = recPoints;
		openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildLine(path,bucket);
		path.points = tempPoints;
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildDrawTriangles = function(path,object,glStack,localCoords) {
	if(localCoords == null) localCoords = false;
	var args = path.type.slice(2);
	var vertices = args[0];
	var indices = args[1];
	var uvtData = args[2];
	var culling = args[3];
	var colors = args[4];
	var blendMode = args[5];
	var a;
	var b;
	var c;
	var d;
	var tx;
	var ty;
	if(localCoords) {
		a = 1.0;
		b = 0.0;
		c = 0.0;
		d = 1.0;
		tx = 0.0;
		ty = 0.0;
	} else {
		a = object.__worldTransform.a;
		b = object.__worldTransform.b;
		c = object.__worldTransform.c;
		d = object.__worldTransform.d;
		tx = object.__worldTransform.tx;
		ty = object.__worldTransform.ty;
	}
	var hasColors = colors != null && colors.length > 0;
	var bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket(path,glStack);
	var fill = bucket.getData(openfl._internal.renderer.opengl.utils.BucketDataType.Fill);
	var colorAttrib = fill.vertexArray.attributes[2];
	colorAttrib.enabled = hasColors;
	var array = [1,1,1,1];
	var this1;
	if(array != null) this1 = new Float32Array(array); else this1 = null;
	colorAttrib.defaultValue = this1;
	fill.rawVerts = true;
	fill.glLength = indices.length;
	fill.stride = Std["int"](fill.vertexArray.get_stride() / 4);
	var vertsLength = fill.glLength * fill.stride;
	var verts;
	if(fill.glVerts == null || fill.glVerts.length < vertsLength) {
		var this2;
		if(vertsLength != null) this2 = new Float32Array(vertsLength); else this2 = null;
		verts = this2;
		fill.glVerts = verts;
	} else verts = fill.glVerts;
	var glColors;
	var buffer = verts.buffer;
	var this3;
	if(buffer != null) this3 = new Uint32Array(buffer,0); else this3 = null;
	glColors = this3;
	var v0 = 0;
	var v1 = 0;
	var v2 = 0;
	var i0 = 0;
	var i1 = 0;
	var i2 = 0;
	var x0 = 0.0;
	var y0 = 0.0;
	var x1 = 0.0;
	var y1 = 0.0;
	var x2 = 0.0;
	var y2 = 0.0;
	var idx = 0;
	var _g1 = 0;
	var _g = indices.length / 3 | 0;
	while(_g1 < _g) {
		var i = _g1++;
		i0 = indices.data[i * 3];
		i1 = indices.data[i * 3 + 1];
		i2 = indices.data[i * 3 + 2];
		v0 = i0 * 2;
		v1 = i1 * 2;
		v2 = i2 * 2;
		x0 = vertices.data[v0];
		y0 = vertices.data[v0 + 1];
		x1 = vertices.data[v1];
		y1 = vertices.data[v1 + 1];
		x2 = vertices.data[v2];
		y2 = vertices.data[v2 + 1];
		if(localCoords) {
			x0 -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
			y0 -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
			x1 -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
			y1 -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
			x2 -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.x;
			y2 -= openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.y;
		}
		switch(culling[1]) {
		case 2:
			if(!((x1 - x0) * (y2 - y0) - (y1 - y0) * (x2 - x0) < 0)) continue;
			break;
		case 0:
			if((x1 - x0) * (y2 - y0) - (y1 - y0) * (x2 - x0) < 0) continue;
			break;
		default:
		}
		var idx1 = idx++;
		verts[idx1] = a * x0 + c * y0 + tx;
		var idx2 = idx++;
		verts[idx2] = b * x0 + d * y0 + ty;
		var idx3 = idx++;
		verts[idx3] = uvtData.data[v0];
		var idx4 = idx++;
		verts[idx4] = uvtData.data[v0 + 1];
		if(hasColors) {
			var idx5 = idx++;
			glColors[idx5] = colors.data[i0];
		}
		var idx6 = idx++;
		verts[idx6] = a * x1 + c * y1 + tx;
		var idx7 = idx++;
		verts[idx7] = b * x1 + d * y1 + ty;
		var idx8 = idx++;
		verts[idx8] = uvtData.data[v1];
		var idx9 = idx++;
		verts[idx9] = uvtData.data[v1 + 1];
		if(hasColors) {
			var idx10 = idx++;
			glColors[idx10] = colors.data[i1];
		}
		var idx11 = idx++;
		verts[idx11] = a * x2 + c * y2 + tx;
		var idx12 = idx++;
		verts[idx12] = b * x2 + d * y2 + ty;
		var idx13 = idx++;
		verts[idx13] = uvtData.data[v2];
		var idx14 = idx++;
		verts[idx14] = uvtData.data[v2 + 1];
		if(hasColors) {
			var idx15 = idx++;
			glColors[idx15] = colors.data[i2];
		}
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.render = function(object,renderSession) {
	var graphics = object.__graphics;
	var spritebatch = renderSession.spriteBatch;
	var dirty = graphics.__dirty;
	if(graphics.__commands.length <= 0) return;
	if(dirty) openfl._internal.renderer.opengl.utils.GraphicsRenderer.updateGraphics(object,object.__graphics,renderSession.gl,object.cacheAsBitmap);
	openfl._internal.renderer.opengl.utils.GraphicsRenderer.renderGraphics(object,renderSession,false);
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.renderGraphics = function(object,renderSession,localCoords) {
	if(localCoords == null) localCoords = false;
	var graphics = object.__graphics;
	var gl = renderSession.gl;
	var glStack = graphics.__glStack[openfl._internal.renderer.opengl.GLRenderer.glContextId];
	var bucket;
	var translationMatrix;
	if(localCoords) translationMatrix = openfl.geom.Matrix.__identity; else translationMatrix = object.__worldTransform;
	var clipRect = renderSession.spriteBatch.clipRect;
	var batchDrawing = renderSession.spriteBatch.drawing;
	batchDrawing = renderSession.spriteBatch.drawing;
	var _g1 = 0;
	var _g = glStack.buckets.length;
	while(_g1 < _g) {
		var i = _g1++;
		batchDrawing = renderSession.spriteBatch.drawing;
		if(batchDrawing && !localCoords) renderSession.spriteBatch.finish();
		renderSession.blendModeManager.setBlendMode(object.__blendMode);
		if(clipRect != null) {
			gl.enable(gl.SCISSOR_TEST);
			gl.scissor(Math.floor(clipRect.x),Math.floor(clipRect.y),Math.floor(clipRect.width),Math.floor(clipRect.height));
		}
		bucket = glStack.buckets[i];
		var _g2 = bucket.mode;
		switch(_g2[1]) {
		case 1:case 2:
			renderSession.stencilManager.pushBucket(bucket,renderSession,translationMatrix.toArray(true));
			var shader = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareShader(bucket,renderSession,object,translationMatrix.toArray(true));
			openfl._internal.renderer.opengl.utils.GraphicsRenderer.renderFill(bucket,shader,renderSession);
			renderSession.stencilManager.popBucket(object,bucket,renderSession);
			break;
		case 5:
			var shader1 = openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareShader(bucket,renderSession,object,null);
			openfl._internal.renderer.opengl.utils.GraphicsRenderer.renderDrawTriangles(bucket,shader1,renderSession);
			break;
		case 6:
			if(!batchDrawing) renderSession.spriteBatch.begin(renderSession,clipRect);
			var args = bucket.graphicType.slice(2);
			renderSession.spriteBatch.renderTiles(object,args[0],args[1],args[2],args[3],args[4]);
			renderSession.spriteBatch.finish();
			break;
		default:
		}
		var ct = object.__worldColorTransform;
		var _g21 = 0;
		var _g3 = bucket.lines;
		while(_g21 < _g3.length) {
			var line = _g3[_g21];
			++_g21;
			if(line != null && line.verts.length > 0) {
				var shader2 = renderSession.shaderManager.primitiveShader;
				renderSession.shaderManager.setShader(shader2);
				gl.uniformMatrix3fv(shader2.getUniformLocation("uTranslationMatrix"),false,translationMatrix.toArray(true));
				gl.uniformMatrix3fv(shader2.getUniformLocation("uProjectionMatrix"),false,renderSession.projectionMatrix.toArray(true));
				gl.uniform1f(shader2.getUniformLocation("uAlpha"),1);
				gl.uniform4f(shader2.getUniformLocation("uColorMultiplier"),ct.redMultiplier,ct.greenMultiplier,ct.blueMultiplier,ct.alphaMultiplier);
				gl.uniform4f(shader2.getUniformLocation("uColorOffset"),ct.redOffset / 255,ct.greenOffset / 255,ct.blueOffset / 255,ct.alphaOffset / 255);
				line.vertexArray.bind();
				shader2.bindVertexArray(line.vertexArray);
				gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,line.indexBuffer);
				gl.drawElements(gl.TRIANGLE_STRIP,line.indices.length,gl.UNSIGNED_SHORT,0);
			}
		}
		if(clipRect != null) gl.disable(gl.SCISSOR_TEST);
		batchDrawing = renderSession.spriteBatch.drawing;
		if(!batchDrawing && !localCoords) renderSession.spriteBatch.begin(renderSession,clipRect);
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.updateGraphics = function(object,graphics,gl,localCoords) {
	if(localCoords == null) localCoords = false;
	openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectPosition.setTo(object.get_x(),object.get_y());
	if(graphics.__bounds == null) openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds = new openfl.geom.Rectangle(); else openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.copyFrom(graphics.__bounds);
	var glStack = null;
	if(graphics.__dirty) glStack = openfl._internal.renderer.opengl.utils.DrawPath.getStack(graphics,gl);
	graphics.set___dirty(false);
	var _g = 0;
	var _g1 = glStack.buckets;
	while(_g < _g1.length) {
		var data = _g1[_g];
		++_g;
		data.reset();
		openfl._internal.renderer.opengl.utils.GraphicsRenderer.bucketPool.push(data);
	}
	glStack.reset();
	var _g11 = glStack.lastIndex;
	var _g2 = graphics.__drawPaths.length;
	while(_g11 < _g2) {
		var i = _g11++;
		var path = graphics.__drawPaths[i];
		{
			var _g21 = path.type;
			switch(_g21[1]) {
			case 0:
				openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildComplexPoly(path,glStack,localCoords);
				break;
			case 1:
				var rounded = _g21[2];
				if(rounded) openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildRoundedRectangle(path,glStack,localCoords); else openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildRectangle(path,glStack,localCoords);
				break;
			case 2:case 3:
				openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildCircle(path,glStack,localCoords);
				break;
			case 4:
				openfl._internal.renderer.opengl.utils.GraphicsRenderer.buildDrawTriangles(path,object,glStack,localCoords);
				break;
			case 5:
				openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket(path,glStack);
				break;
			case 6:
				var m = _g21[2];
				openfl._internal.renderer.opengl.utils.GraphicsRenderer.overrideMatrix = m;
				break;
			}
		}
		glStack.lastIndex++;
	}
	var _g3 = 0;
	var _g12 = glStack.buckets;
	while(_g3 < _g12.length) {
		var bucket = _g12[_g3];
		++_g3;
		if(bucket.uploadTileBuffer) bucket.uploadTile(Math.ceil(openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.get_left()),Math.ceil(openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.get_top()),Math.floor(openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.get_right()),Math.floor(openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds.get_bottom()));
		bucket.optimize();
	}
	glStack.upload();
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareBucket = function(path,glStack) {
	var bucket = null;
	{
		var _g = path.fill;
		switch(_g[1]) {
		case 1:
			var a = _g[3];
			var c = _g[2];
			bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.switchBucket(path.fillIndex,glStack,openfl._internal.renderer.opengl.utils.BucketMode.Fill);
			if(c == null) bucket.color = [1,1,1]; else bucket.color = [(c >> 16 & 255) / 255,(c >> 8 & 255) / 255,(c & 255) / 255];
			bucket.color[3] = a;
			bucket.uploadTileBuffer = true;
			break;
		case 2:
			var s = _g[5];
			var r = _g[4];
			var m = _g[3];
			var b = _g[2];
			bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.switchBucket(path.fillIndex,glStack,openfl._internal.renderer.opengl.utils.BucketMode.PatternFill);
			bucket.bitmap = b;
			bucket.textureRepeat = r;
			bucket.textureSmooth = s;
			bucket.texture = b.getTexture(glStack.gl);
			bucket.uploadTileBuffer = true;
			var pMatrix;
			if(m == null) pMatrix = new openfl.geom.Matrix(); else pMatrix = new openfl.geom.Matrix(m.a,m.b,m.c,m.d,m.tx,m.ty);
			pMatrix.invert();
			pMatrix.scale(1 / b.width,1 / b.height);
			var tx = pMatrix.tx;
			var ty = pMatrix.ty;
			pMatrix.tx = 0;
			pMatrix.ty = 0;
			bucket.textureTL.x = tx;
			bucket.textureTL.y = ty;
			bucket.textureBR.x = tx + 1;
			bucket.textureBR.y = ty + 1;
			bucket.textureMatrix = pMatrix;
			break;
		default:
			bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.switchBucket(path.fillIndex,glStack,openfl._internal.renderer.opengl.utils.BucketMode.Line);
			bucket.uploadTileBuffer = false;
		}
	}
	{
		var _g1 = path.type;
		switch(_g1[1]) {
		case 4:
			bucket.mode = openfl._internal.renderer.opengl.utils.BucketMode.DrawTriangles;
			bucket.uploadTileBuffer = false;
			break;
		case 5:
			bucket.mode = openfl._internal.renderer.opengl.utils.BucketMode.DrawTiles;
			bucket.uploadTileBuffer = false;
			break;
		default:
		}
	}
	bucket.graphicType = path.type;
	bucket.overrideMatrix = openfl._internal.renderer.opengl.utils.GraphicsRenderer.overrideMatrix;
	return bucket;
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.getBucket = function(glStack,mode) {
	var b = openfl._internal.renderer.opengl.utils.GraphicsRenderer.bucketPool.pop();
	if(b == null) b = new openfl._internal.renderer.opengl.utils.GLBucket(glStack.gl);
	b.mode = mode;
	glStack.buckets.push(b);
	return b;
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.switchBucket = function(fillIndex,glStack,mode) {
	var bucket = null;
	var _g = 0;
	var _g1 = glStack.buckets;
	while(_g < _g1.length) {
		var b = _g1[_g];
		++_g;
		if(b.fillIndex == fillIndex) {
			bucket = b;
			break;
		}
	}
	if(bucket == null) bucket = openfl._internal.renderer.opengl.utils.GraphicsRenderer.getBucket(glStack,mode);
	bucket.dirty = true;
	bucket.fillIndex = fillIndex;
	return bucket;
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.prepareShader = function(bucket,renderSession,object,translationMatrix) {
	var gl = renderSession.gl;
	var shader = null;
	var _g = bucket.mode;
	switch(_g[1]) {
	case 1:
		shader = renderSession.shaderManager.fillShader;
		break;
	case 2:
		shader = renderSession.shaderManager.patternFillShader;
		break;
	case 5:
		shader = renderSession.shaderManager.drawTrianglesShader;
		break;
	default:
		shader = null;
	}
	if(shader == null) return null;
	var newShader = renderSession.shaderManager.setShader(shader);
	gl.uniform1f(shader.getUniformLocation("uAlpha"),object.__worldAlpha);
	gl.uniformMatrix3fv(shader.getUniformLocation("uProjectionMatrix"),false,renderSession.projectionMatrix.toArray(true));
	var ct = object.__worldColorTransform;
	gl.uniform4f(shader.getUniformLocation("uColorMultiplier"),ct.redMultiplier,ct.greenMultiplier,ct.blueMultiplier,ct.alphaMultiplier);
	gl.uniform4f(shader.getUniformLocation("uColorOffset"),ct.redOffset / 255,ct.greenOffset / 255,ct.blueOffset / 255,ct.alphaOffset / 255);
	var _g1 = bucket.mode;
	switch(_g1[1]) {
	case 1:
		gl.uniformMatrix3fv(shader.getUniformLocation("uTranslationMatrix"),false,translationMatrix);
		gl.uniform4fv(shader.getUniformLocation("uColor"),(function($this) {
			var $r;
			var array = bucket.color;
			var this1;
			if(array != null) this1 = new Float32Array(array); else this1 = null;
			$r = this1;
			return $r;
		}(this)));
		break;
	case 2:
		gl.uniformMatrix3fv(shader.getUniformLocation("uTranslationMatrix"),false,translationMatrix);
		gl.uniform2f(shader.getUniformLocation("uPatternTL"),bucket.textureTL.x,bucket.textureTL.y);
		gl.uniform2f(shader.getUniformLocation("uPatternBR"),bucket.textureBR.x,bucket.textureBR.y);
		gl.uniformMatrix3fv(shader.getUniformLocation("uPatternMatrix"),false,bucket.textureMatrix.toArray(true));
		break;
	case 5:
		if(bucket.texture != null) gl.uniform1i(shader.getUniformLocation("uUseTexture"),1); else {
			gl.uniform1i(shader.getUniformLocation("uUseTexture"),0);
			gl.uniform4fv(shader.getUniformLocation("uColor"),(function($this) {
				var $r;
				var array1 = bucket.color;
				var this2;
				if(array1 != null) this2 = new Float32Array(array1); else this2 = null;
				$r = this2;
				return $r;
			}(this)));
		}
		break;
	default:
	}
	return shader;
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.renderFill = function(bucket,shader,renderSession) {
	var gl = renderSession.gl;
	if(bucket.mode == openfl._internal.renderer.opengl.utils.BucketMode.PatternFill && bucket.texture != null) openfl._internal.renderer.opengl.utils.GraphicsRenderer.bindTexture(gl,bucket);
	gl.bindBuffer(gl.ARRAY_BUFFER,bucket.tileBuffer);
	gl.vertexAttribPointer(shader.getAttribLocation("aPosition"),4,gl.SHORT,false,0,0);
	gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.renderDrawTriangles = function(bucket,shader,renderSession) {
	var gl = renderSession.gl;
	var _g = 0;
	var _g1 = bucket.fills;
	while(_g < _g1.length) {
		var fill = _g1[_g];
		++_g;
		if(fill.available) continue;
		openfl._internal.renderer.opengl.utils.GraphicsRenderer.bindTexture(gl,bucket);
		fill.vertexArray.bind();
		shader.bindVertexArray(fill.vertexArray);
		gl.drawArrays(gl.TRIANGLES,fill.glStart,fill.glLength);
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.bindTexture = function(gl,bucket) {
	gl.bindTexture(gl.TEXTURE_2D,bucket.texture);
	if(bucket.textureRepeat && bucket.bitmap.image.get_powerOfTwo()) {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.REPEAT);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.REPEAT);
	} else {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
	}
	if(bucket.textureSmooth) {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
	} else {
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
	}
};
openfl._internal.renderer.opengl.utils.GraphicsRenderer.hex2rgb = function(hex) {
	if(hex == null) return [1,1,1]; else return [(hex >> 16 & 255) / 255,(hex >> 8 & 255) / 255,(hex & 255) / 255];
};
openfl._internal.renderer.opengl.utils.GLStack = function(gl) {
	this.lastIndex = 0;
	this.gl = gl;
	this.buckets = [];
	this.lastIndex = 0;
};
$hxClasses["openfl._internal.renderer.opengl.utils.GLStack"] = openfl._internal.renderer.opengl.utils.GLStack;
openfl._internal.renderer.opengl.utils.GLStack.__name__ = true;
openfl._internal.renderer.opengl.utils.GLStack.prototype = {
	reset: function() {
		this.buckets = [];
		this.lastIndex = 0;
	}
	,upload: function() {
		var _g = 0;
		var _g1 = this.buckets;
		while(_g < _g1.length) {
			var bucket = _g1[_g];
			++_g;
			if(bucket.dirty) bucket.upload();
		}
	}
	,__class__: openfl._internal.renderer.opengl.utils.GLStack
};
openfl._internal.renderer.opengl.utils.GLBucket = function(gl) {
	this.uploadTileBuffer = true;
	this.textureSmooth = true;
	this.textureRepeat = false;
	this.lines = [];
	this.fills = [];
	this.fillIndex = -1;
	this.gl = gl;
	this.color = [0,0,0];
	this.lastIndex = 0;
	this.alpha = 1;
	this.dirty = true;
	this.mode = openfl._internal.renderer.opengl.utils.BucketMode.Fill;
	this.textureMatrix = new openfl.geom.Matrix();
	this.textureTL = new openfl.geom.Point();
	this.textureBR = new openfl.geom.Point(1,1);
};
$hxClasses["openfl._internal.renderer.opengl.utils.GLBucket"] = openfl._internal.renderer.opengl.utils.GLBucket;
openfl._internal.renderer.opengl.utils.GLBucket.__name__ = true;
openfl._internal.renderer.opengl.utils.GLBucket.prototype = {
	getData: function(type) {
		var data;
		switch(type[1]) {
		case 1:
			data = this.fills;
			break;
		default:
			data = this.lines;
		}
		var result = null;
		var remove = false;
		var _g = 0;
		while(_g < data.length) {
			var d = data[_g];
			++_g;
			if(d.available) {
				result = d;
				remove = true;
				break;
			}
		}
		if(result == null) result = new openfl._internal.renderer.opengl.utils.GLBucketData(this.gl);
		result.available = false;
		result.parent = this;
		result.type = type;
		if(remove) HxOverrides.remove(data,result);
		data.push(result);
		switch(type[1]) {
		case 1:
			var _g1 = this.mode;
			switch(_g1[1]) {
			case 1:case 2:
				result.vertexArray.attributes = openfl._internal.renderer.opengl.utils.GraphicsRenderer.fillVertexAttributes;
				break;
			case 5:
				result.vertexArray.attributes = openfl._internal.renderer.opengl.utils.GraphicsRenderer.drawTrianglesVertexAttributes.slice();
				result.vertexArray.attributes[2] = result.vertexArray.attributes[2].copy();
				break;
			default:
			}
			break;
		case 0:
			result.vertexArray.attributes = openfl._internal.renderer.opengl.utils.GraphicsRenderer.primitiveVertexAttributes;
			break;
		}
		return result;
	}
	,optimize: function() {
		var _g = this;
		var data = this.lines;
		if(data.length > 1) {
			var result = [];
			var tmp = null;
			var last = null;
			var idx = 0;
			var vi = 0;
			var ii = 0;
			var before = data.length;
			var _g1 = 0;
			while(_g1 < data.length) {
				var d = data[_g1];
				++_g1;
				if(d.available || d.rawVerts || d.rawIndices) {
					if(tmp != null) {
						result.push(tmp);
						tmp = null;
					}
					result.push(d);
					last = d;
					continue;
				}
				if(last == null || last.drawMode == d.drawMode) {
					if(tmp == null) tmp = d; else {
						vi = tmp.verts.length;
						ii = tmp.indices.length;
						var _g2 = 0;
						var _g11 = d.verts.length;
						while(_g2 < _g11) {
							var j = _g2++;
							tmp.verts[j + vi] = d.verts[j];
						}
						var _g21 = 0;
						var _g12 = d.indices.length;
						while(_g21 < _g12) {
							var j1 = _g21++;
							tmp.indices[j1 + ii] = d.indices[j1] + idx;
						}
					}
					idx = tmp.indices[tmp.indices.length - 1] + 1;
					last = d;
				} else {
					if(tmp != null) {
						result.push(tmp);
						tmp = null;
					}
					result.push(d);
					last = d;
					continue;
				}
			}
			if(result.length == 0 && tmp != null) result.push(tmp);
			if(result.length > 0) switch(openfl._internal.renderer.opengl.utils.BucketDataType.Line[1]) {
			case 1:
				_g.fills = result;
				break;
			default:
				_g.lines = result;
			}
		}
	}
	,reset: function() {
		var _g = 0;
		var _g1 = this.fills;
		while(_g < _g1.length) {
			var fill = _g1[_g];
			++_g;
			fill.reset();
		}
		var _g2 = 0;
		var _g11 = this.lines;
		while(_g2 < _g11.length) {
			var line = _g11[_g2];
			++_g2;
			line.reset();
		}
		this.fillIndex = -1;
		this.uploadTileBuffer = true;
		this.graphicType = openfl._internal.renderer.opengl.utils.GraphicType.Polygon;
	}
	,uploadTile: function(x,y,w,h) {
		if(this.tileBuffer == null) this.tileBuffer = this.gl.createBuffer();
		this.tile = [x,y,0,0,w,y,1,0,x,h,0,1,w,h,1,1];
		var array = this.tile;
		var this1;
		if(array != null) this1 = new Int16Array(array); else this1 = null;
		this.glTile = this1;
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.tileBuffer);
		this.gl.bufferData(this.gl.ARRAY_BUFFER,this.glTile,this.gl.STATIC_DRAW);
	}
	,upload: function() {
		if(this.mode != openfl._internal.renderer.opengl.utils.BucketMode.Line) {
			var _g = 0;
			var _g1 = this.fills;
			while(_g < _g1.length) {
				var fill = _g1[_g];
				++_g;
				if(!fill.available) fill.upload();
			}
		}
		var _g2 = 0;
		var _g11 = this.lines;
		while(_g2 < _g11.length) {
			var line = _g11[_g2];
			++_g2;
			if(!line.available) line.upload();
		}
		this.dirty = false;
	}
	,__class__: openfl._internal.renderer.opengl.utils.GLBucket
};
openfl._internal.renderer.opengl.utils.GLBucketData = function(gl) {
	this.available = false;
	this.rawIndices = false;
	this.stride = 0;
	this.rawVerts = false;
	this.lastVertsSize = 0;
	this.glStart = 0;
	this.glLength = 0;
	this.gl = gl;
	this.drawMode = gl.TRIANGLE_STRIP;
	this.verts = [];
	this.indices = [];
	this.vertexArray = new openfl._internal.renderer.opengl.utils.VertexArray([]);
};
$hxClasses["openfl._internal.renderer.opengl.utils.GLBucketData"] = openfl._internal.renderer.opengl.utils.GLBucketData;
openfl._internal.renderer.opengl.utils.GLBucketData.__name__ = true;
openfl._internal.renderer.opengl.utils.GLBucketData.prototype = {
	reset: function() {
		this.available = true;
		this.verts = [];
		this.indices = [];
		this.glLength = 0;
		this.glStart = 0;
		this.stride = 0;
		this.rawVerts = false;
		this.rawIndices = false;
		this.drawMode = this.gl.TRIANGLE_STRIP;
	}
	,upload: function() {
		if(this.rawVerts && this.glVerts != null && this.glVerts.length > 0 || this.verts.length > 0) {
			if(!this.rawVerts) {
				var array = this.verts;
				var this1;
				if(array != null) this1 = new Float32Array(array); else this1 = null;
				this.glVerts = this1;
			}
			this.vertexArray.buffer = this.glVerts.buffer;
			if(this.glVerts.length <= this.lastVertsSize) {
				this.vertexArray.bind();
				var end = this.glLength * 4 * this.stride;
				if(this.glLength > 0 && this.lastVertsSize > end) {
					var view = this.glVerts.subarray(0,end);
					this.vertexArray.upload(view);
				} else this.vertexArray.upload(this.glVerts);
			} else {
				this.vertexArray.setContext(this.gl,this.glVerts);
				this.lastVertsSize = this.glVerts.length;
			}
		}
		if(this.glLength == 0 && (this.rawIndices && this.glIndices != null && this.glIndices.length > 0 || this.indices.length > 0)) {
			if(this.indexBuffer == null) this.indexBuffer = this.gl.createBuffer();
			if(!this.rawIndices) {
				var array1 = this.indices;
				var this2;
				if(array1 != null) this2 = new Uint16Array(array1); else this2 = null;
				this.glIndices = this2;
			}
			this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
			this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER,this.glIndices,this.gl.STREAM_DRAW);
		}
	}
	,__class__: openfl._internal.renderer.opengl.utils.GLBucketData
};
openfl._internal.renderer.opengl.utils.BucketMode = $hxClasses["openfl._internal.renderer.opengl.utils.BucketMode"] = { __ename__ : true, __constructs__ : ["None","Fill","PatternFill","Line","PatternLine","DrawTriangles","DrawTiles"] };
openfl._internal.renderer.opengl.utils.BucketMode.None = ["None",0];
openfl._internal.renderer.opengl.utils.BucketMode.None.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketMode.None.__enum__ = openfl._internal.renderer.opengl.utils.BucketMode;
openfl._internal.renderer.opengl.utils.BucketMode.Fill = ["Fill",1];
openfl._internal.renderer.opengl.utils.BucketMode.Fill.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketMode.Fill.__enum__ = openfl._internal.renderer.opengl.utils.BucketMode;
openfl._internal.renderer.opengl.utils.BucketMode.PatternFill = ["PatternFill",2];
openfl._internal.renderer.opengl.utils.BucketMode.PatternFill.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketMode.PatternFill.__enum__ = openfl._internal.renderer.opengl.utils.BucketMode;
openfl._internal.renderer.opengl.utils.BucketMode.Line = ["Line",3];
openfl._internal.renderer.opengl.utils.BucketMode.Line.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketMode.Line.__enum__ = openfl._internal.renderer.opengl.utils.BucketMode;
openfl._internal.renderer.opengl.utils.BucketMode.PatternLine = ["PatternLine",4];
openfl._internal.renderer.opengl.utils.BucketMode.PatternLine.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketMode.PatternLine.__enum__ = openfl._internal.renderer.opengl.utils.BucketMode;
openfl._internal.renderer.opengl.utils.BucketMode.DrawTriangles = ["DrawTriangles",5];
openfl._internal.renderer.opengl.utils.BucketMode.DrawTriangles.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketMode.DrawTriangles.__enum__ = openfl._internal.renderer.opengl.utils.BucketMode;
openfl._internal.renderer.opengl.utils.BucketMode.DrawTiles = ["DrawTiles",6];
openfl._internal.renderer.opengl.utils.BucketMode.DrawTiles.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketMode.DrawTiles.__enum__ = openfl._internal.renderer.opengl.utils.BucketMode;
openfl._internal.renderer.opengl.utils.BucketDataType = $hxClasses["openfl._internal.renderer.opengl.utils.BucketDataType"] = { __ename__ : true, __constructs__ : ["Line","Fill"] };
openfl._internal.renderer.opengl.utils.BucketDataType.Line = ["Line",0];
openfl._internal.renderer.opengl.utils.BucketDataType.Line.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketDataType.Line.__enum__ = openfl._internal.renderer.opengl.utils.BucketDataType;
openfl._internal.renderer.opengl.utils.BucketDataType.Fill = ["Fill",1];
openfl._internal.renderer.opengl.utils.BucketDataType.Fill.toString = $estr;
openfl._internal.renderer.opengl.utils.BucketDataType.Fill.__enum__ = openfl._internal.renderer.opengl.utils.BucketDataType;
openfl._internal.renderer.opengl.utils.GLGraphicsData = function() { };
$hxClasses["openfl._internal.renderer.opengl.utils.GLGraphicsData"] = openfl._internal.renderer.opengl.utils.GLGraphicsData;
openfl._internal.renderer.opengl.utils.GLGraphicsData.__name__ = true;
openfl._internal.renderer.opengl.utils.GraphicType = $hxClasses["openfl._internal.renderer.opengl.utils.GraphicType"] = { __ename__ : true, __constructs__ : ["Polygon","Rectangle","Circle","Ellipse","DrawTriangles","DrawTiles","OverrideMatrix"] };
openfl._internal.renderer.opengl.utils.GraphicType.Polygon = ["Polygon",0];
openfl._internal.renderer.opengl.utils.GraphicType.Polygon.toString = $estr;
openfl._internal.renderer.opengl.utils.GraphicType.Polygon.__enum__ = openfl._internal.renderer.opengl.utils.GraphicType;
openfl._internal.renderer.opengl.utils.GraphicType.Rectangle = function(rounded) { var $x = ["Rectangle",1,rounded]; $x.__enum__ = openfl._internal.renderer.opengl.utils.GraphicType; $x.toString = $estr; return $x; };
openfl._internal.renderer.opengl.utils.GraphicType.Circle = ["Circle",2];
openfl._internal.renderer.opengl.utils.GraphicType.Circle.toString = $estr;
openfl._internal.renderer.opengl.utils.GraphicType.Circle.__enum__ = openfl._internal.renderer.opengl.utils.GraphicType;
openfl._internal.renderer.opengl.utils.GraphicType.Ellipse = ["Ellipse",3];
openfl._internal.renderer.opengl.utils.GraphicType.Ellipse.toString = $estr;
openfl._internal.renderer.opengl.utils.GraphicType.Ellipse.__enum__ = openfl._internal.renderer.opengl.utils.GraphicType;
openfl._internal.renderer.opengl.utils.GraphicType.DrawTriangles = function(vertices,indices,uvtData,culling,colors,blendMode) { var $x = ["DrawTriangles",4,vertices,indices,uvtData,culling,colors,blendMode]; $x.__enum__ = openfl._internal.renderer.opengl.utils.GraphicType; $x.toString = $estr; return $x; };
openfl._internal.renderer.opengl.utils.GraphicType.DrawTiles = function(sheet,tileData,smooth,flags,count) { var $x = ["DrawTiles",5,sheet,tileData,smooth,flags,count]; $x.__enum__ = openfl._internal.renderer.opengl.utils.GraphicType; $x.toString = $estr; return $x; };
openfl._internal.renderer.opengl.utils.GraphicType.OverrideMatrix = function(matrix) { var $x = ["OverrideMatrix",6,matrix]; $x.__enum__ = openfl._internal.renderer.opengl.utils.GraphicType; $x.toString = $estr; return $x; };
openfl._internal.renderer.opengl.utils.ShaderManager = function(gl) {
	this.setContext(gl);
};
$hxClasses["openfl._internal.renderer.opengl.utils.ShaderManager"] = openfl._internal.renderer.opengl.utils.ShaderManager;
openfl._internal.renderer.opengl.utils.ShaderManager.__name__ = true;
openfl._internal.renderer.opengl.utils.ShaderManager.prototype = {
	setContext: function(gl) {
		this.gl = gl;
		this.defaultShader = new openfl._internal.renderer.opengl.shaders2.DefaultShader(gl);
		this.fillShader = new openfl._internal.renderer.opengl.shaders2.FillShader(gl);
		this.patternFillShader = new openfl._internal.renderer.opengl.shaders2.PatternFillShader(gl);
		this.drawTrianglesShader = new openfl._internal.renderer.opengl.shaders2.DrawTrianglesShader(gl);
		this.primitiveShader = new openfl._internal.renderer.opengl.shaders2.PrimitiveShader(gl);
		this.setShader(this.defaultShader,true);
	}
	,setShader: function(shader,force) {
		if(force == null) force = false;
		if(shader == null) {
			this.currentShader = null;
			this.gl.useProgram(null);
			return true;
		}
		if(this.currentShader != null && !force && this.currentShader.ID == shader.ID) return false;
		this.currentShader = shader;
		this.gl.useProgram(shader.program);
		return true;
	}
	,__class__: openfl._internal.renderer.opengl.utils.ShaderManager
};
openfl._internal.renderer.opengl.utils.SpriteBatch = function(gl,maxSprites) {
	if(maxSprites == null) maxSprites = 2000;
	this.lastEnableColor = true;
	this.enableColor = true;
	this.attributes = [];
	this.writtenVertexBytes = 0;
	this.drawing = false;
	this.dirty = true;
	this.states = [];
	this.maxSprites = maxSprites;
	this.attributes.push(new openfl._internal.renderer.opengl.utils.VertexAttribute(2,5126,false,"aPosition"));
	this.attributes.push(new openfl._internal.renderer.opengl.utils.VertexAttribute(2,5126,false,"aTexCoord0"));
	this.attributes.push(new openfl._internal.renderer.opengl.utils.VertexAttribute(4,5121,true,"aColor"));
	var array = [1,1,1,1];
	var this1;
	if(array != null) this1 = new Float32Array(array); else this1 = null;
	this.attributes[2].defaultValue = this1;
	this.maxElementsPerVertex = 0;
	var _g = 0;
	var _g1 = this.attributes;
	while(_g < _g1.length) {
		var a = _g1[_g];
		++_g;
		this.maxElementsPerVertex += Math.floor(a.components * a.getElementsBytes() / 4);
	}
	this.vertexArraySize = maxSprites * this.maxElementsPerVertex * 4 * 4;
	this.indexArraySize = maxSprites * 6;
	this.vertexArray = new openfl._internal.renderer.opengl.utils.VertexArray(this.attributes,this.vertexArraySize,false);
	var buffer = this.vertexArray.buffer;
	var this2;
	if(buffer != null) this2 = new Float32Array(buffer,0); else this2 = null;
	this.positions = this2;
	var buffer1 = this.vertexArray.buffer;
	var this3;
	if(buffer1 != null) this3 = new Uint32Array(buffer1,0); else this3 = null;
	this.colors = this3;
	var elements = this.indexArraySize;
	var this4;
	if(elements != null) this4 = new Uint16Array(elements); else this4 = null;
	this.indices = this4;
	var i = 0;
	var j = 0;
	while(i < this.indexArraySize) {
		this.indices[i] = j;
		this.indices[i + 1] = j + 1;
		this.indices[i + 2] = j + 2;
		this.indices[i + 3] = j;
		this.indices[i + 4] = j + 2;
		this.indices[i + 5] = j + 3;
		i += 6;
		j += 4;
	}
	this.currentState = new openfl._internal.renderer.opengl.utils._SpriteBatch.State();
	this.dirty = true;
	this.drawing = false;
	this.batchedSprites = 0;
	this.setContext(gl);
};
$hxClasses["openfl._internal.renderer.opengl.utils.SpriteBatch"] = openfl._internal.renderer.opengl.utils.SpriteBatch;
openfl._internal.renderer.opengl.utils.SpriteBatch.__name__ = true;
openfl._internal.renderer.opengl.utils.SpriteBatch.prototype = {
	begin: function(renderSession,clipRect) {
		this.renderSession = renderSession;
		this.shader = renderSession.shaderManager.defaultShader;
		this.drawing = true;
		this.start(clipRect);
	}
	,finish: function() {
		this.stop();
		this.clipRect = null;
		this.drawing = false;
	}
	,start: function(clipRect) {
		if(!this.drawing) throw "Call Spritebatch.begin() before start()";
		this.dirty = true;
		this.clipRect = clipRect;
	}
	,stop: function() {
		this.flush();
	}
	,renderBitmapData: function(bitmapData,smoothing,matrix,ct,alpha,blendMode,pixelSnapping,bgra) {
		if(bgra == null) bgra = false;
		if(alpha == null) alpha = 1;
		if(bitmapData == null) return;
		var texture = bitmapData.getTexture(this.gl);
		if(this.batchedSprites >= this.maxSprites) this.flush();
		var uvs = bitmapData.__uvData;
		if(uvs == null) return;
		var color = ((alpha * 255 | 0) & 255) << 24 | 16777215;
		this.enableColor = true;
		if(this.enableColor != this.lastEnableColor) {
			this.flush();
			this.lastEnableColor = this.enableColor;
		}
		this.attributes[2].enabled = this.lastEnableColor;
		this.elementsPerVertex = this.getElementsPerVertex();
		var index = this.batchedSprites * 4 * this.elementsPerVertex;
		this.fillVertices(index,bitmapData.width,bitmapData.height,matrix,uvs,null,color,pixelSnapping);
		this.setState(this.batchedSprites,texture,smoothing,blendMode,ct,true);
		this.batchedSprites++;
	}
	,renderTiles: function(object,sheet,tileData,smooth,flags,count) {
		if(count == null) count = -1;
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		var texture = sheet.__bitmap.getTexture(this.gl);
		if(texture == null) return;
		var useScale = (flags & 1) > 0;
		var useRotation = (flags & 2) > 0;
		var useTransform = (flags & 16) > 0;
		var useRGB = (flags & 4) > 0;
		var useAlpha = (flags & 8) > 0;
		var useRect = (flags & 32) > 0;
		var useOrigin = (flags & 64) > 0;
		var blendMode;
		var _g = flags & 983040;
		switch(_g) {
		case 65536:
			blendMode = openfl.display.BlendMode.ADD;
			break;
		case 131072:
			blendMode = openfl.display.BlendMode.MULTIPLY;
			break;
		case 262144:
			blendMode = openfl.display.BlendMode.SCREEN;
			break;
		case 524288:
			blendMode = openfl.display.BlendMode.SUBTRACT;
			break;
		default:
			var _g1 = flags & 15728640;
			switch(_g1) {
			case 1048576:
				blendMode = openfl.display.BlendMode.DARKEN;
				break;
			case 2097152:
				blendMode = openfl.display.BlendMode.LIGHTEN;
				break;
			case 4194304:
				blendMode = openfl.display.BlendMode.OVERLAY;
				break;
			case 8388608:
				blendMode = openfl.display.BlendMode.HARDLIGHT;
				break;
			default:
				var _g2 = flags & 251658240;
				switch(_g2) {
				case 16777216:
					blendMode = openfl.display.BlendMode.DIFFERENCE;
					break;
				case 33554432:
					blendMode = openfl.display.BlendMode.INVERT;
					break;
				default:
					blendMode = openfl.display.BlendMode.NORMAL;
				}
			}
		}
		if(useTransform) {
			useScale = false;
			useRotation = false;
		}
		var scaleIndex = 0;
		var rotationIndex = 0;
		var rgbIndex = 0;
		var alphaIndex = 0;
		var transformIndex = 0;
		var numValues = 3;
		if(useRect) if(useOrigin) numValues = 8; else numValues = 6;
		if(useScale) {
			scaleIndex = numValues;
			numValues++;
		}
		if(useRotation) {
			rotationIndex = numValues;
			numValues++;
		}
		if(useTransform) {
			transformIndex = numValues;
			numValues += 4;
		}
		if(useRGB) {
			rgbIndex = numValues;
			numValues += 3;
		}
		if(useAlpha) {
			alphaIndex = numValues;
			numValues++;
		}
		var totalCount = tileData.length;
		if(count >= 0 && totalCount > count) totalCount = count;
		var itemCount = totalCount / numValues | 0;
		var iIndex = 0;
		var tileID = -1;
		var rect = sheet.__rectTile;
		var tileUV = sheet.__rectUV;
		var center = sheet.__point;
		var x = 0.0;
		var y = 0.0;
		var alpha = 1.0;
		var tint = 16777215;
		var color = -1;
		var scale = 1.0;
		var rotation = 0.0;
		var cosTheta = 1.0;
		var sinTheta = 0.0;
		var a = 0.0;
		var b = 0.0;
		var c = 0.0;
		var d = 0.0;
		var tx = 0.0;
		var ty = 0.0;
		var ox = 0.0;
		var oy = 0.0;
		var matrix = new openfl.geom.Matrix();
		var oMatrix = object.__worldTransform;
		var uvs = new openfl.display.TextureUvs();
		var bIndex = 0;
		this.enableColor = true;
		if(this.enableColor != this.lastEnableColor) {
			this.flush();
			this.lastEnableColor = this.enableColor;
		}
		this.attributes[2].enabled = this.lastEnableColor;
		this.elementsPerVertex = this.getElementsPerVertex();
		while(iIndex < totalCount) {
			if(this.batchedSprites >= this.maxSprites) this.flush();
			x = tileData[iIndex];
			y = tileData[iIndex + 1];
			if(useRect) {
				tileID = -1;
				rect.x = tileData[iIndex + 2];
				rect.y = tileData[iIndex + 3];
				rect.width = tileData[iIndex + 4];
				rect.height = tileData[iIndex + 5];
				if(useOrigin) {
					center.x = tileData[iIndex + 6];
					center.y = tileData[iIndex + 7];
				} else {
					center.x = 0;
					center.y = 0;
				}
				tileUV.setTo(rect.get_left() / sheet.__bitmap.width,rect.get_top() / sheet.__bitmap.height,rect.get_right() / sheet.__bitmap.width,rect.get_bottom() / sheet.__bitmap.height);
			} else {
				tileID = (tileData[iIndex + 2] == null?0:tileData[iIndex + 2]) | 0;
				rect = sheet.__tileRects[tileID];
				center = sheet.__centerPoints[tileID];
				tileUV = sheet.__tileUVs[tileID];
			}
			if(rect != null && rect.width > 0 && rect.height > 0 && center != null) {
				alpha = 1;
				tint = 16777215;
				a = 1;
				b = 0;
				c = 0;
				d = 1;
				tx = 0;
				ty = 0;
				scale = 1.0;
				rotation = 0.0;
				cosTheta = 1.0;
				sinTheta = 0.0;
				matrix.identity();
				if(useAlpha) alpha = tileData[iIndex + alphaIndex] * object.__worldAlpha; else alpha = object.__worldAlpha;
				if(useRGB) tint = (tileData[iIndex + rgbIndex] * 255 | 0) << 16 | (tileData[iIndex + rgbIndex + 1] * 255 | 0) << 8 | (tileData[iIndex + rgbIndex + 2] * 255 | 0);
				if(useScale) scale = tileData[iIndex + scaleIndex];
				if(useRotation) {
					rotation = tileData[iIndex + rotationIndex];
					cosTheta = Math.cos(rotation);
					sinTheta = Math.sin(rotation);
				}
				if(useTransform) {
					a = tileData[iIndex + transformIndex];
					b = tileData[iIndex + transformIndex + 1];
					c = tileData[iIndex + transformIndex + 2];
					d = tileData[iIndex + transformIndex + 3];
				} else {
					a = scale * cosTheta;
					b = scale * sinTheta;
					c = -b;
					d = a;
				}
				ox = center.x * a + center.y * c;
				oy = center.x * b + center.y * d;
				tx = x - ox;
				ty = y - oy;
				matrix.a = a * oMatrix.a + b * oMatrix.c;
				matrix.b = a * oMatrix.b + b * oMatrix.d;
				matrix.c = c * oMatrix.a + d * oMatrix.c;
				matrix.d = c * oMatrix.b + d * oMatrix.d;
				matrix.tx = tx * oMatrix.a + ty * oMatrix.c + oMatrix.tx;
				matrix.ty = tx * oMatrix.b + ty * oMatrix.d + oMatrix.ty;
				uvs.x0 = tileUV.x;
				uvs.y0 = tileUV.y;
				uvs.x1 = tileUV.width;
				uvs.y1 = tileUV.y;
				uvs.x2 = tileUV.width;
				uvs.y2 = tileUV.height;
				uvs.x3 = tileUV.x;
				uvs.y3 = tileUV.height;
				bIndex = this.batchedSprites * 4 * this.elementsPerVertex;
				color = ((alpha * 255 | 0) & 255) << 24 | (tint & 255) << 16 | (tint >> 8 & 255) << 8 | tint >> 16 & 255;
				this.fillVertices(bIndex,rect.width,rect.height,matrix,uvs,null,color,openfl.display.PixelSnapping.NEVER);
				this.setState(this.batchedSprites,texture,smooth,blendMode,object.__worldColorTransform,false);
				this.batchedSprites++;
			}
			iIndex += numValues;
		}
	}
	,fillVertices: function(index,width,height,matrix,uvs,pivot,color,pixelSnapping) {
		if(color == null) color = -1;
		var w0;
		var w1;
		var h0;
		var h1;
		if(pivot == null) {
			w0 = width;
			w1 = 0;
			h0 = height;
			h1 = 0;
		} else {
			w0 = width * (1 - pivot.x);
			w1 = width * -pivot.x;
			h0 = height * (1 - pivot.y);
			h1 = height * -pivot.y;
		}
		if(pixelSnapping == null) pixelSnapping = openfl.display.PixelSnapping.NEVER;
		var snap = pixelSnapping != openfl.display.PixelSnapping.NEVER;
		var a = matrix.a;
		var b = matrix.b;
		var c = matrix.c;
		var d = matrix.d;
		var tx = matrix.tx;
		var ty = matrix.ty;
		var cOffsetIndex = 0;
		if(!snap) {
			var idx = index++;
			this.positions[idx] = a * w1 + c * h1 + tx;
			var idx1 = index++;
			this.positions[idx1] = d * h1 + b * w1 + ty;
		} else {
			var idx2 = index++;
			var val = Math.round(a * w1 + c * h1 + tx);
			this.positions[idx2] = val;
			var idx3 = index++;
			var val1 = Math.round(d * h1 + b * w1 + ty);
			this.positions[idx3] = val1;
		}
		var idx4 = index++;
		this.positions[idx4] = uvs.x0;
		var idx5 = index++;
		this.positions[idx5] = uvs.y0;
		if(this.enableColor) {
			var idx6 = index++;
			this.colors[idx6] = color;
		}
		if(!snap) {
			var idx7 = index++;
			this.positions[idx7] = a * w0 + c * h1 + tx;
			var idx8 = index++;
			this.positions[idx8] = d * h1 + b * w0 + ty;
		} else {
			var idx9 = index++;
			var val2 = Math.round(a * w0 + c * h1 + tx);
			this.positions[idx9] = val2;
			var idx10 = index++;
			var val3 = Math.round(d * h1 + b * w0 + ty);
			this.positions[idx10] = val3;
		}
		var idx11 = index++;
		this.positions[idx11] = uvs.x1;
		var idx12 = index++;
		this.positions[idx12] = uvs.y1;
		if(this.enableColor) {
			var idx13 = index++;
			this.colors[idx13] = color;
		}
		if(!snap) {
			var idx14 = index++;
			this.positions[idx14] = a * w0 + c * h0 + tx;
			var idx15 = index++;
			this.positions[idx15] = d * h0 + b * w0 + ty;
		} else {
			var idx16 = index++;
			var val4 = Math.round(a * w0 + c * h0 + tx);
			this.positions[idx16] = val4;
			var idx17 = index++;
			var val5 = Math.round(d * h0 + b * w0 + ty);
			this.positions[idx17] = val5;
		}
		var idx18 = index++;
		this.positions[idx18] = uvs.x2;
		var idx19 = index++;
		this.positions[idx19] = uvs.y2;
		if(this.enableColor) {
			var idx20 = index++;
			this.colors[idx20] = color;
		}
		if(!snap) {
			var idx21 = index++;
			this.positions[idx21] = a * w1 + c * h0 + tx;
			var idx22 = index++;
			this.positions[idx22] = d * h0 + b * w1 + ty;
		} else {
			var idx23 = index++;
			var val6 = Math.round(a * w1 + c * h0 + tx);
			this.positions[idx23] = val6;
			var idx24 = index++;
			var val7 = Math.round(d * h0 + b * w1 + ty);
			this.positions[idx24] = val7;
		}
		var idx25 = index++;
		this.positions[idx25] = uvs.x3;
		var idx26 = index++;
		this.positions[idx26] = uvs.y3;
		if(this.enableColor) {
			var idx27 = index++;
			this.colors[idx27] = color;
		}
		this.writtenVertexBytes = index;
	}
	,flush: function() {
		if(this.batchedSprites == 0) return;
		if(this.clipRect != null) {
			this.gl.enable(this.gl.SCISSOR_TEST);
			this.gl.scissor(Math.floor(this.clipRect.x),Math.floor(this.clipRect.y),Math.floor(this.clipRect.width),Math.floor(this.clipRect.height));
		}
		if(this.dirty) {
			this.dirty = false;
			this.gl.activeTexture(this.gl.TEXTURE0);
			this.vertexArray.bind();
			this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
		}
		if(this.writtenVertexBytes > this.vertexArraySize * 0.5) this.vertexArray.upload(this.positions); else {
			var view = this.positions.subarray(0,this.writtenVertexBytes);
			this.vertexArray.upload(view);
		}
		var nextState;
		var batchSize = 0;
		var start = 0;
		this.currentState.shader = this.renderSession.shaderManager.defaultShader;
		this.currentState.texture = null;
		this.currentState.textureSmooth = false;
		this.currentState.blendMode = this.renderSession.blendModeManager.currentBlendMode;
		this.currentState.colorTransform = null;
		this.currentState.skipColorTransformAlpha = false;
		var _g1 = 0;
		var _g = this.batchedSprites;
		while(_g1 < _g) {
			var i = _g1++;
			nextState = this.states[i];
			this.currentState.skipColorTransformAlpha = nextState.skipColorTransformAlpha;
			if(!nextState.equals(this.currentState)) {
				this.renderBatch(this.currentState,batchSize,start);
				start = i;
				batchSize = 0;
				this.currentState.shader = nextState.shader;
				this.currentState.texture = nextState.texture;
				this.currentState.textureSmooth = nextState.textureSmooth;
				this.currentState.blendMode = nextState.blendMode;
				this.currentState.colorTransform = nextState.colorTransform;
			}
			batchSize++;
		}
		this.renderBatch(this.currentState,batchSize,start);
		this.batchedSprites = 0;
		this.writtenVertexBytes = 0;
		if(this.clipRect != null) this.gl.disable(this.gl.SCISSOR_TEST);
	}
	,renderBatch: function(state,size,start) {
		if(size == 0 || state.texture == null) return;
		var shader;
		if(state.shader == null) shader = this.renderSession.shaderManager.defaultShader; else shader = state.shader;
		this.renderSession.shaderManager.setShader(shader);
		shader.bindVertexArray(this.vertexArray);
		this.gl.uniformMatrix3fv(shader.getUniformLocation("uProjectionMatrix"),false,this.renderSession.projectionMatrix.toArray(true));
		if(state.colorTransform != null) {
			var ct = state.colorTransform;
			this.gl.uniform4f(shader.getUniformLocation("uColorMultiplier"),ct.redMultiplier,ct.greenMultiplier,ct.blueMultiplier,state.skipColorTransformAlpha?1:ct.alphaMultiplier);
			this.gl.uniform4f(shader.getUniformLocation("uColorOffset"),ct.redOffset / 255.,ct.greenOffset / 255.,ct.blueOffset / 255.,ct.alphaOffset / 255.);
		} else {
			this.gl.uniform4f(shader.getUniformLocation("uColorMultiplier"),1,1,1,1);
			this.gl.uniform4f(shader.getUniformLocation("uColorOffset"),0,0,0,0);
		}
		this.renderSession.blendModeManager.setBlendMode(state.blendMode);
		this.gl.bindTexture(this.gl.TEXTURE_2D,state.texture);
		if(state.textureSmooth) {
			this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR);
			this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR);
		} else {
			this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.NEAREST);
			this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.NEAREST);
		}
		this.gl.drawElements(this.gl.TRIANGLES,size * 6,this.gl.UNSIGNED_SHORT,start * 6 * 2);
		this.renderSession.drawCount++;
	}
	,setState: function(index,texture,smooth,blendMode,colorTransform,skipAlpha) {
		if(skipAlpha == null) skipAlpha = false;
		if(smooth == null) smooth = false;
		var state = this.states[index];
		if(state == null) state = this.states[index] = new openfl._internal.renderer.opengl.utils._SpriteBatch.State();
		state.texture = texture;
		state.textureSmooth = smooth;
		state.blendMode = blendMode;
		state.colorTransform = colorTransform;
		state.skipColorTransformAlpha = skipAlpha;
	}
	,setContext: function(gl) {
		this.gl = gl;
		this.vertexArray.setContext(gl,this.positions);
		this.indexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.indexBuffer);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,this.indices,gl.STATIC_DRAW);
	}
	,getElementsPerVertex: function() {
		var r = 0;
		var _g = 0;
		var _g1 = this.attributes;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			if(a.enabled) r += Math.floor(a.components * a.getElementsBytes() / 4);
		}
		return r;
	}
	,__class__: openfl._internal.renderer.opengl.utils.SpriteBatch
};
openfl._internal.renderer.opengl.utils._SpriteBatch = {};
openfl._internal.renderer.opengl.utils._SpriteBatch.State = function() {
	this.skipColorTransformAlpha = false;
	this.textureSmooth = true;
};
$hxClasses["openfl._internal.renderer.opengl.utils._SpriteBatch.State"] = openfl._internal.renderer.opengl.utils._SpriteBatch.State;
openfl._internal.renderer.opengl.utils._SpriteBatch.State.__name__ = true;
openfl._internal.renderer.opengl.utils._SpriteBatch.State.prototype = {
	equals: function(other) {
		return (this.shader == null || other.shader == null || this.shader.ID == other.shader.ID) && this.texture == other.texture && this.textureSmooth == other.textureSmooth && this.blendMode == other.blendMode && (this.colorTransform != null && this.colorTransform.__equals(other.colorTransform,this.skipColorTransformAlpha));
	}
	,__class__: openfl._internal.renderer.opengl.utils._SpriteBatch.State
};
openfl._internal.renderer.opengl.utils.StencilManager = function(gl) {
	this.stencilMask = 0;
	this.stencilStack = [];
	this.setContext(gl);
	this.reverse = true;
	this.count = 0;
};
$hxClasses["openfl._internal.renderer.opengl.utils.StencilManager"] = openfl._internal.renderer.opengl.utils.StencilManager;
openfl._internal.renderer.opengl.utils.StencilManager.__name__ = true;
openfl._internal.renderer.opengl.utils.StencilManager.prototype = {
	prepareGraphics: function(fill,renderSession,translationMatrix) {
		var shader = renderSession.shaderManager.fillShader;
		renderSession.shaderManager.setShader(shader);
		this.gl.uniformMatrix3fv(shader.getUniformLocation("uTranslationMatrix"),false,translationMatrix);
		this.gl.uniformMatrix3fv(shader.getUniformLocation("uProjectionMatrix"),false,renderSession.projectionMatrix.toArray(true));
		fill.vertexArray.bind();
		shader.bindVertexArray(fill.vertexArray);
		this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,fill.indexBuffer);
	}
	,pushBucket: function(bucket,renderSession,translationMatrix,isMask) {
		if(isMask == null) isMask = false;
		if(!isMask) {
			this.gl.enable(this.gl.STENCIL_TEST);
			this.gl.clear(this.gl.STENCIL_BUFFER_BIT);
			this.gl.stencilMask(255);
			this.gl.colorMask(false,false,false,false);
			this.gl.stencilFunc(this.gl.NEVER,1,255);
			this.gl.stencilOp(this.gl.INVERT,this.gl.KEEP,this.gl.KEEP);
			this.gl.clear(this.gl.STENCIL_BUFFER_BIT);
		}
		var _g = 0;
		var _g1 = bucket.fills;
		while(_g < _g1.length) {
			var fill = _g1[_g];
			++_g;
			if(fill.available) continue;
			this.prepareGraphics(fill,renderSession,translationMatrix);
			this.gl.drawElements(fill.drawMode,fill.glIndices.length,this.gl.UNSIGNED_SHORT,0);
		}
		if(!isMask) {
			this.gl.colorMask(true,true,true,renderSession.renderer.transparent);
			this.gl.stencilOp(this.gl.KEEP,this.gl.KEEP,this.gl.KEEP);
			this.gl.stencilFunc(this.gl.EQUAL,255,255);
		}
	}
	,popBucket: function(object,bucket,renderSession) {
		this.gl.disable(this.gl.STENCIL_TEST);
	}
	,pushMask: function(object,renderSession) {
		var maskGraphics = object.__maskGraphics;
		if(maskGraphics == null || maskGraphics.__commands.length <= 0) return;
		if(this.stencilMask == 0) {
			this.gl.enable(this.gl.STENCIL_TEST);
			this.gl.clear(this.gl.STENCIL_BUFFER_BIT);
		}
		this.stencilMask++;
		if(maskGraphics.__dirty) openfl._internal.renderer.opengl.utils.GraphicsRenderer.updateGraphics(object,maskGraphics,renderSession.gl);
		var func;
		if(this.stencilMask == 1) func = this.gl.NEVER; else func = this.gl.EQUAL;
		var ref = this.stencilMask;
		var mask = 255 - this.stencilMask;
		this.gl.stencilMask(255);
		this.gl.colorMask(false,false,false,false);
		this.gl.stencilFunc(func,ref,mask);
		this.gl.stencilOp(this.gl.REPLACE,this.gl.KEEP,this.gl.KEEP);
		var glStack = maskGraphics.__glStack[openfl._internal.renderer.opengl.GLRenderer.glContextId];
		var bucket;
		var translationMatrix = object.__worldTransform;
		var _g1 = 0;
		var _g = glStack.buckets.length;
		while(_g1 < _g) {
			var i = _g1++;
			bucket = glStack.buckets[i];
			if(bucket.overrideMatrix != null) translationMatrix = bucket.overrideMatrix; else translationMatrix = object.__worldTransform;
			var _g2 = bucket.mode;
			switch(_g2[1]) {
			case 1:case 2:
				this.pushBucket(bucket,renderSession,translationMatrix.toArray(true),true);
				break;
			default:
			}
		}
		this.gl.colorMask(true,true,true,renderSession.renderer.transparent);
		this.gl.stencilOp(this.gl.KEEP,this.gl.KEEP,this.gl.KEEP);
		this.gl.stencilFunc(this.gl.EQUAL,this.stencilMask,255);
	}
	,popMask: function(object,renderSession) {
		this.stencilMask--;
		if(this.stencilMask <= 0) {
			this.gl.disable(this.gl.STENCIL_TEST);
			this.stencilMask = 0;
		}
	}
	,setContext: function(gl) {
		this.gl = gl;
	}
	,__class__: openfl._internal.renderer.opengl.utils.StencilManager
};
openfl._internal.renderer.opengl.utils.VertexArray = function(attributes,size,isStatic) {
	if(isStatic == null) isStatic = false;
	if(size == null) size = 0;
	this.isStatic = false;
	this.size = 0;
	this.attributes = [];
	this.size = size;
	this.attributes = attributes;
	if(size > 0) this.buffer = new ArrayBuffer(size);
	this.isStatic = isStatic;
};
$hxClasses["openfl._internal.renderer.opengl.utils.VertexArray"] = openfl._internal.renderer.opengl.utils.VertexArray;
openfl._internal.renderer.opengl.utils.VertexArray.__name__ = true;
openfl._internal.renderer.opengl.utils.VertexArray.prototype = {
	bind: function() {
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.glBuffer);
	}
	,upload: function(view) {
		this.gl.bufferSubData(this.gl.ARRAY_BUFFER,0,view);
	}
	,setContext: function(gl,view) {
		this.gl = gl;
		this.glBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER,this.glBuffer);
		gl.bufferData(gl.ARRAY_BUFFER,view,this.isStatic?gl.STATIC_DRAW:gl.DYNAMIC_DRAW);
	}
	,get_stride: function() {
		var s = 0;
		var _g = 0;
		var _g1 = this.attributes;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			if(a.enabled) s += Math.floor(a.components * a.getElementsBytes() / 4) * 4;
		}
		return s;
	}
	,__class__: openfl._internal.renderer.opengl.utils.VertexArray
};
openfl._internal.text = {};
openfl._internal.text.TextEngine = function(textField) {
	this.textField = textField;
	this.width = 100;
	this.height = 100;
	this.text = "";
	this.bounds = new openfl.geom.Rectangle(0,0,0,0);
	this.type = openfl.text.TextFieldType.DYNAMIC;
	this.autoSize = openfl.text.TextFieldAutoSize.NONE;
	this.displayAsPassword = false;
	this.embedFonts = false;
	this.selectable = true;
	this.borderColor = 0;
	this.border = false;
	this.backgroundColor = 16777215;
	this.background = false;
	this.gridFitType = openfl.text.GridFitType.PIXEL;
	this.maxChars = 0;
	this.multiline = false;
	this.sharpness = 0;
	this.scrollH = 0;
	this.scrollV = 1;
	this.wordWrap = false;
	this.lineAscents = new Array();
	this.lineBreaks = new Array();
	this.lineDescents = new Array();
	this.lineLeadings = new Array();
	this.lineHeights = new Array();
	this.lineWidths = new Array();
	this.layoutGroups = new Array();
	this.textFormatRanges = new Array();
	openfl._internal.text.TextEngine.__canvas = window.document.createElement("canvas");
	openfl._internal.text.TextEngine.__context = openfl._internal.text.TextEngine.__canvas.getContext("2d");
};
$hxClasses["openfl._internal.text.TextEngine"] = openfl._internal.text.TextEngine;
openfl._internal.text.TextEngine.__name__ = true;
openfl._internal.text.TextEngine.__canvas = null;
openfl._internal.text.TextEngine.__context = null;
openfl._internal.text.TextEngine.getFont = function(format) {
	var font;
	if(format.italic) font = "italic "; else font = "normal ";
	font += "normal ";
	if(format.bold) font += "bold "; else font += "normal ";
	font += format.size + "px";
	font += "/" + (format.size + format.leading + 6) + "px ";
	font += "" + (function($this) {
		var $r;
		var _g = format.font;
		$r = (function($this) {
			var $r;
			switch(_g) {
			case "_sans":
				$r = "sans-serif";
				break;
			case "_serif":
				$r = "serif";
				break;
			case "_typewriter":
				$r = "monospace";
				break;
			default:
				$r = "'" + format.font + "'";
			}
			return $r;
		}($this));
		return $r;
	}(this));
	return font;
};
openfl._internal.text.TextEngine.prototype = {
	getBounds: function() {
		var padding;
		if(this.border) padding = 1; else padding = 0;
		this.bounds.width = this.width + padding;
		this.bounds.height = this.height + padding;
	}
	,getLineMeasurements: function() {
		this.lineAscents.splice(0,this.lineAscents.length);
		this.lineDescents.splice(0,this.lineDescents.length);
		this.lineLeadings.splice(0,this.lineLeadings.length);
		this.lineHeights.splice(0,this.lineHeights.length);
		this.lineWidths.splice(0,this.lineWidths.length);
		var currentLineAscent = 0.0;
		var currentLineDescent = 0.0;
		var currentLineLeading = null;
		var currentLineHeight = 0.0;
		var currentLineWidth = 0.0;
		this.textWidth = 0;
		this.textHeight = 0;
		this.numLines = 1;
		this.bottomScrollV = 0;
		this.maxScrollH = 0;
		var _g = 0;
		var _g1 = this.layoutGroups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			while(group.lineIndex > this.numLines - 1) {
				this.lineAscents.push(currentLineAscent);
				this.lineDescents.push(currentLineDescent);
				this.lineLeadings.push(currentLineLeading != null?currentLineLeading:0);
				this.lineHeights.push(currentLineHeight);
				this.lineWidths.push(currentLineWidth);
				currentLineAscent = 0;
				currentLineDescent = 0;
				currentLineLeading = null;
				currentLineHeight = 0;
				currentLineWidth = 0;
				this.numLines++;
				if(this.textHeight <= this.height - 2) this.bottomScrollV++;
			}
			currentLineAscent = Math.max(currentLineAscent,group.ascent);
			currentLineDescent = Math.max(currentLineDescent,group.descent);
			if(currentLineLeading == null) currentLineLeading = group.leading; else currentLineLeading = Std["int"](Math.max(currentLineLeading,group.leading));
			currentLineHeight = Math.max(currentLineHeight,group.height);
			currentLineWidth = group.offsetX - 2 + group.width;
			if(currentLineWidth > this.textWidth) this.textWidth = currentLineWidth;
			this.textHeight = group.offsetY - 2 + group.ascent + group.descent;
		}
		this.lineAscents.push(currentLineAscent);
		this.lineDescents.push(currentLineDescent);
		this.lineLeadings.push(currentLineLeading != null?currentLineLeading:0);
		this.lineHeights.push(currentLineHeight);
		this.lineWidths.push(currentLineWidth);
		if(this.numLines == 1) {
			this.bottomScrollV = 1;
			if(currentLineLeading > 0) this.textHeight += currentLineLeading;
		} else if(this.textHeight <= this.height - 2) this.bottomScrollV++;
		if(this.textWidth > this.width - 4) this.maxScrollH = this.textWidth - this.width + 4 | 0; else this.maxScrollH = 0;
		this.maxScrollV = this.numLines - this.bottomScrollV + 1;
	}
	,getLayoutGroups: function() {
		var _g = this;
		this.layoutGroups.splice(0,this.layoutGroups.length);
		var rangeIndex = -1;
		var formatRange = null;
		var font = null;
		var currentFormat = openfl.text.TextField.__defaultTextFormat.clone();
		var ascent;
		var descent;
		var leading;
		var layoutGroup;
		var advances;
		var widthValue;
		var heightValue;
		var spaceWidth = 0.0;
		var previousSpaceIndex = 0;
		var spaceIndex = this.text.indexOf(" ");
		var breakIndex = this.text.indexOf("\n");
		var marginRight = 0.0;
		var offsetX = 2.0;
		var offsetY = 2.0;
		var textIndex = 0;
		var lineIndex = 0;
		var lineFormat = null;
		var getAdvances = function(text,startIndex,endIndex) {
			var advances1 = [];
			var _g1 = startIndex;
			while(_g1 < endIndex) {
				var i = _g1++;
				advances1.push(openfl._internal.text.TextEngine.__context.measureText(text.charAt(i)).width);
			}
			return advances1;
		};
		var getAdvancesWidth = function(advances2) {
			var width = 0.0;
			var _g2 = 0;
			while(_g2 < advances2.length) {
				var advance = advances2[_g2];
				++_g2;
				width += advance;
			}
			return width;
		};
		var getTextWidth = function(text1) {
			return openfl._internal.text.TextEngine.__context.measureText(text1).width;
		};
		var nextFormatRange = function() {
			if(rangeIndex < _g.textFormatRanges.length - 1) {
				rangeIndex++;
				formatRange = _g.textFormatRanges[rangeIndex];
				currentFormat.__merge(formatRange.format);
				openfl._internal.text.TextEngine.__context.font = openfl._internal.text.TextEngine.getFont(currentFormat);
				ascent = currentFormat.size;
				descent = currentFormat.size * 0.185;
				leading = currentFormat.leading;
				heightValue = ascent + descent + leading;
				if(spaceIndex > -1) spaceWidth = getTextWidth(" ");
			}
		};
		nextFormatRange();
		lineFormat = formatRange.format;
		var wrap;
		while(textIndex < this.text.length) if(breakIndex > -1 && (spaceIndex == -1 || breakIndex < spaceIndex) && formatRange.end >= breakIndex) {
			layoutGroup = new openfl._internal.text.TextLayoutGroup(formatRange.format,textIndex,breakIndex);
			layoutGroup.advances = getAdvances(this.text,textIndex,breakIndex);
			layoutGroup.offsetX = offsetX;
			layoutGroup.ascent = ascent;
			layoutGroup.descent = descent;
			layoutGroup.leading = leading;
			layoutGroup.lineIndex = lineIndex;
			layoutGroup.offsetY = offsetY;
			layoutGroup.width = getAdvancesWidth(layoutGroup.advances);
			layoutGroup.height = heightValue;
			this.layoutGroups.push(layoutGroup);
			offsetY += heightValue;
			offsetX = 2;
			if(this.wordWrap && layoutGroup.offsetX + layoutGroup.width > this.width - 2) {
				layoutGroup.offsetY = offsetY;
				layoutGroup.offsetX = offsetX;
				offsetY += heightValue;
				lineIndex++;
			}
			textIndex = breakIndex + 1;
			breakIndex = this.text.indexOf("\n",textIndex);
			lineIndex++;
			if(formatRange.end == breakIndex) {
				nextFormatRange();
				lineFormat = formatRange.format;
			}
		} else if(formatRange.end >= spaceIndex && spaceIndex > -1) {
			layoutGroup = null;
			wrap = false;
			while(true) {
				if(spaceIndex == -1) spaceIndex = formatRange.end;
				advances = getAdvances(this.text,textIndex,spaceIndex);
				widthValue = getAdvancesWidth(advances);
				if(this.wordWrap) {
					if(offsetX + widthValue > this.width - 2) wrap = true;
				}
				if(wrap) {
					offsetY += heightValue;
					var i1 = this.layoutGroups.length - 1;
					var offsetCount = 0;
					while(true) {
						layoutGroup = this.layoutGroups[i1];
						if(i1 > 0 && layoutGroup.startIndex > previousSpaceIndex) offsetCount++; else break;
						i1--;
					}
					lineIndex++;
					offsetX = 2;
					if(offsetCount > 0) {
						var bumpX = this.layoutGroups[this.layoutGroups.length - offsetCount].offsetX;
						var _g11 = this.layoutGroups.length - offsetCount;
						var _g3 = this.layoutGroups.length;
						while(_g11 < _g3) {
							var i2 = _g11++;
							layoutGroup = this.layoutGroups[i2];
							layoutGroup.offsetX -= bumpX;
							layoutGroup.offsetY = offsetY;
							layoutGroup.lineIndex = lineIndex;
							offsetX += layoutGroup.width;
						}
					}
					layoutGroup = new openfl._internal.text.TextLayoutGroup(formatRange.format,textIndex,spaceIndex);
					layoutGroup.advances = advances;
					layoutGroup.offsetX = offsetX;
					layoutGroup.ascent = ascent;
					layoutGroup.descent = descent;
					layoutGroup.leading = leading;
					layoutGroup.lineIndex = lineIndex;
					layoutGroup.offsetY = offsetY;
					layoutGroup.width = widthValue;
					layoutGroup.height = heightValue;
					this.layoutGroups.push(layoutGroup);
					offsetX += widthValue + spaceWidth;
					marginRight = spaceWidth;
					wrap = false;
				} else {
					if(layoutGroup != null && textIndex == spaceIndex) {
						if(formatRange.format.align != openfl.text.TextFormatAlign.JUSTIFY) layoutGroup.endIndex = spaceIndex;
						layoutGroup.advances.push(spaceWidth);
						marginRight += spaceWidth;
					} else if(layoutGroup == null || lineFormat.align == openfl.text.TextFormatAlign.JUSTIFY) {
						layoutGroup = new openfl._internal.text.TextLayoutGroup(formatRange.format,textIndex,spaceIndex);
						layoutGroup.advances = advances;
						layoutGroup.offsetX = offsetX;
						layoutGroup.ascent = ascent;
						layoutGroup.descent = descent;
						layoutGroup.leading = leading;
						layoutGroup.lineIndex = lineIndex;
						layoutGroup.offsetY = offsetY;
						layoutGroup.width = widthValue;
						layoutGroup.height = heightValue;
						this.layoutGroups.push(layoutGroup);
						layoutGroup.advances.push(spaceWidth);
						marginRight = spaceWidth;
					} else {
						layoutGroup.endIndex = spaceIndex;
						layoutGroup.advances = layoutGroup.advances.concat(advances);
						layoutGroup.width += marginRight + widthValue;
						layoutGroup.advances.push(spaceWidth);
						marginRight = spaceWidth;
					}
					offsetX += widthValue + spaceWidth;
				}
				textIndex = spaceIndex + 1;
				previousSpaceIndex = spaceIndex;
				spaceIndex = this.text.indexOf(" ",previousSpaceIndex + 1);
				if(formatRange.end <= previousSpaceIndex) {
					layoutGroup = null;
					nextFormatRange();
				}
				if(spaceIndex > breakIndex && breakIndex > -1 || textIndex > this.text.length || spaceIndex > formatRange.end || spaceIndex == -1 && breakIndex > -1) break;
			}
		} else {
			if(textIndex >= formatRange.end) break;
			layoutGroup = new openfl._internal.text.TextLayoutGroup(formatRange.format,textIndex,formatRange.end);
			layoutGroup.advances = getAdvances(this.text,textIndex,formatRange.end);
			layoutGroup.offsetX = offsetX;
			layoutGroup.ascent = ascent;
			layoutGroup.descent = descent;
			layoutGroup.leading = leading;
			layoutGroup.lineIndex = lineIndex;
			layoutGroup.offsetY = offsetY;
			layoutGroup.width = getAdvancesWidth(layoutGroup.advances);
			layoutGroup.height = heightValue;
			this.layoutGroups.push(layoutGroup);
			offsetX += layoutGroup.width;
			textIndex = formatRange.end;
			nextFormatRange();
		}
	}
	,setTextAlignment: function() {
		var lineIndex = -1;
		var offsetX = 0.0;
		var group;
		var lineLength;
		var _g1 = 0;
		var _g = this.layoutGroups.length;
		while(_g1 < _g) {
			var i = _g1++;
			group = this.layoutGroups[i];
			if(group.lineIndex != lineIndex) {
				lineIndex = group.lineIndex;
				var _g2 = group.format.align;
				switch(_g2[1]) {
				case 3:
					if(this.lineWidths[lineIndex] < this.width - 4) offsetX = Math.round((this.width - 4 - this.lineWidths[lineIndex]) / 2); else offsetX = 0;
					break;
				case 1:
					if(this.lineWidths[lineIndex] < this.width - 4) offsetX = Math.round(this.width - 4 - this.lineWidths[lineIndex]); else offsetX = 0;
					break;
				case 2:
					if(this.lineWidths[lineIndex] < this.width - 4) {
						lineLength = 1;
						var _g4 = i + 1;
						var _g3 = this.layoutGroups.length;
						while(_g4 < _g3) {
							var j = _g4++;
							if(this.layoutGroups[j].lineIndex == lineIndex) lineLength++; else break;
						}
						if(lineLength > 1) {
							group = this.layoutGroups[i + lineLength - 1];
							if(group.endIndex < this.text.length && this.text.charAt(group.endIndex) != "\n") {
								offsetX = (this.width - 4 - this.lineWidths[lineIndex]) / (lineLength - 1);
								var _g31 = 1;
								while(_g31 < lineLength) {
									var j1 = _g31++;
									this.layoutGroups[i + j1].offsetX += offsetX * j1;
								}
							}
						}
					}
					offsetX = 0;
					break;
				default:
					offsetX = 0;
				}
			}
			if(offsetX > 0) group.offsetX += offsetX;
		}
	}
	,update: function() {
		if(this.text == null || StringTools.trim(this.text) == "" || this.textFormatRanges.length == 0) {
			this.lineAscents.splice(0,this.lineAscents.length);
			this.lineBreaks.splice(0,this.lineBreaks.length);
			this.lineDescents.splice(0,this.lineDescents.length);
			this.lineLeadings.splice(0,this.lineLeadings.length);
			this.lineHeights.splice(0,this.lineHeights.length);
			this.lineWidths.splice(0,this.lineWidths.length);
			this.layoutGroups.splice(0,this.layoutGroups.length);
			this.textWidth = 0;
			this.textHeight = 0;
			this.numLines = 1;
			this.maxScrollH = 0;
			this.maxScrollV = 1;
			this.bottomScrollV = 1;
		} else {
			this.getLayoutGroups();
			this.getLineMeasurements();
			this.setTextAlignment();
		}
		this.getBounds();
	}
	,__class__: openfl._internal.text.TextEngine
};
openfl._internal.text.TextFormatRange = function(format,start,end) {
	this.format = format;
	this.start = start;
	this.end = end;
};
$hxClasses["openfl._internal.text.TextFormatRange"] = openfl._internal.text.TextFormatRange;
openfl._internal.text.TextFormatRange.__name__ = true;
openfl._internal.text.TextFormatRange.prototype = {
	__class__: openfl._internal.text.TextFormatRange
};
openfl._internal.text.TextLayoutGroup = function(format,startIndex,endIndex) {
	this.format = format;
	this.startIndex = startIndex;
	this.endIndex = endIndex;
};
$hxClasses["openfl._internal.text.TextLayoutGroup"] = openfl._internal.text.TextLayoutGroup;
openfl._internal.text.TextLayoutGroup.__name__ = true;
openfl._internal.text.TextLayoutGroup.prototype = {
	__class__: openfl._internal.text.TextLayoutGroup
};
openfl.display.Application = function() {
	lime.app.Application.call(this);
	if(openfl.Lib.application == null) openfl.Lib.application = this;
};
$hxClasses["openfl.display.Application"] = openfl.display.Application;
openfl.display.Application.__name__ = true;
openfl.display.Application.__super__ = lime.app.Application;
openfl.display.Application.prototype = $extend(lime.app.Application.prototype,{
	create: function(config) {
		this.config = config;
		this.backend.create(config);
		if(config != null) {
			if(Object.prototype.hasOwnProperty.call(config,"fps")) this.backend.setFrameRate(config.fps);
			if(Object.prototype.hasOwnProperty.call(config,"windows")) {
				var _g = 0;
				var _g1 = config.windows;
				while(_g < _g1.length) {
					var windowConfig = _g1[_g];
					++_g;
					var $window = new openfl.display.Window(windowConfig);
					this.createWindow($window);
					break;
				}
			}
			if(this.preloader == null || this.preloader.complete) this.onPreloadComplete();
		}
	}
	,__class__: openfl.display.Application
});
openfl.display.Bitmap = function(bitmapData,pixelSnapping,smoothing) {
	if(smoothing == null) smoothing = false;
	openfl.display.DisplayObject.call(this);
	this.bitmapData = bitmapData;
	this.pixelSnapping = pixelSnapping;
	this.smoothing = smoothing;
	if(pixelSnapping == null) this.pixelSnapping = openfl.display.PixelSnapping.AUTO;
};
$hxClasses["openfl.display.Bitmap"] = openfl.display.Bitmap;
openfl.display.Bitmap.__name__ = true;
openfl.display.Bitmap.__super__ = openfl.display.DisplayObject;
openfl.display.Bitmap.prototype = $extend(openfl.display.DisplayObject.prototype,{
	__getBounds: function(rect,matrix) {
		if(this.bitmapData != null) {
			var bounds = openfl.geom.Rectangle.__temp;
			bounds.setTo(0,0,this.bitmapData.width,this.bitmapData.height);
			bounds.__transform(bounds,matrix);
			rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
		}
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || this.__isMask || this.bitmapData == null) return false;
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
		this.__getTransform();
		var px = this.__worldTransform.__transformInverseX(x,y);
		var py = this.__worldTransform.__transformInverseY(x,y);
		if(px > 0 && py > 0 && px <= this.bitmapData.width && py <= this.bitmapData.height) {
			if(stack != null && !interactiveOnly) stack.push(this);
			return true;
		}
		return false;
	}
	,__hitTestMask: function(x,y) {
		if(this.bitmapData == null) return false;
		this.__getTransform();
		var px = this.__worldTransform.__transformInverseX(x,y);
		var py = this.__worldTransform.__transformInverseY(x,y);
		if(px > 0 && py > 0 && px <= this.bitmapData.width && py <= this.bitmapData.height) return true;
		return false;
	}
	,__renderCairo: function(renderSession) {
		openfl._internal.renderer.cairo.CairoBitmap.render(this,renderSession);
	}
	,__renderCairoMask: function(renderSession) {
		renderSession.cairo.rectangle(0,0,this.get_width(),this.get_height());
	}
	,__renderCanvas: function(renderSession) {
		openfl._internal.renderer.canvas.CanvasBitmap.render(this,renderSession);
	}
	,__renderCanvasMask: function(renderSession) {
		renderSession.context.rect(0,0,this.get_width(),this.get_height());
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__renderable && this.bitmapData != null && this.bitmapData.__isValid) {
			if(this.bitmapData.image.buffer.__srcImage != null) openfl._internal.renderer.dom.DOMBitmap.renderImage(this,renderSession); else openfl._internal.renderer.dom.DOMBitmap.renderCanvas(this,renderSession);
		} else {
			if(this.__image != null) {
				renderSession.element.removeChild(this.__image);
				this.__image = null;
				this.__style = null;
			}
			if(this.__canvas != null) {
				renderSession.element.removeChild(this.__canvas);
				this.__canvas = null;
				this.__style = null;
			}
		}
	}
	,__renderGL: function(renderSession) {
		if(this.get_scrollRect() != null) {
			renderSession.spriteBatch.stop();
			var m = this.__worldTransform.clone();
			var clip = openfl.geom.Rectangle.__temp;
			this.get_scrollRect().__transform(clip,m);
			clip.y = renderSession.renderer.height - clip.y - clip.height;
			renderSession.spriteBatch.start(clip);
		}
		if(!this.__renderable || this.__worldAlpha <= 0 || this.bitmapData == null || !this.bitmapData.__isValid) null; else renderSession.spriteBatch.renderBitmapData(this.bitmapData,this.smoothing,this.__worldTransform,this.__worldColorTransform,this.__worldAlpha,this.__blendMode,this.pixelSnapping);
		if(this.get_scrollRect() != null) {
			renderSession.spriteBatch.stop();
			renderSession.spriteBatch.start();
		}
	}
	,__updateMask: function(maskGraphics) {
		maskGraphics.__commands.push(openfl.display.DrawCommand.OverrideMatrix(this.__worldTransform));
		maskGraphics.beginFill(0);
		maskGraphics.drawRect(0,0,this.bitmapData.width,this.bitmapData.height);
		if(maskGraphics.__bounds == null) maskGraphics.__bounds = new openfl.geom.Rectangle();
		this.__getBounds(maskGraphics.__bounds,openfl.geom.Matrix.__identity);
		openfl.display.DisplayObject.prototype.__updateMask.call(this,maskGraphics);
	}
	,get_height: function() {
		if(this.bitmapData != null) return this.bitmapData.height * this.get_scaleY();
		return 0;
	}
	,set_height: function(value) {
		if(this.bitmapData != null) {
			this.set_scaleY(value / this.bitmapData.height);
			return value;
		}
		return 0;
	}
	,get_width: function() {
		if(this.bitmapData != null) return this.bitmapData.width * this.get_scaleX();
		return 0;
	}
	,set_width: function(value) {
		if(this.bitmapData != null) {
			this.set_scaleX(value / this.bitmapData.width);
			return value;
		}
		return 0;
	}
	,__class__: openfl.display.Bitmap
});
openfl.display.BitmapData = function(width,height,transparent,fillColor) {
	if(fillColor == null) fillColor = -1;
	if(transparent == null) transparent = true;
	this.__usingFramebuffer = false;
	this.transparent = transparent;
	if(width == null) width = 0; else width = width;
	if(height == null) height = 0; else height = height;
	if(width < 0) width = 0; else width = width;
	if(height < 0) height = 0; else height = height;
	this.width = width;
	this.height = height;
	this.rect = new openfl.geom.Rectangle(0,0,width,height);
	if(width > 0 && height > 0) {
		if(transparent) {
			if((function($this) {
				var $r;
				var $int = fillColor & -16777216;
				$r = $int < 0?4294967296.0 + $int:$int + 0.0;
				return $r;
			}(this)) == 0) fillColor = 0;
		} else fillColor = -16777216 | fillColor & 16777215;
		fillColor = fillColor << 8 | fillColor >> 24 & 255;
		this.image = new lime.graphics.Image(null,0,0,width,height,fillColor);
		this.image.set_transparent(transparent);
		this.__isValid = true;
	}
	this.__createUVs();
	this.__worldTransform = new openfl.geom.Matrix();
	this.__worldColorTransform = new openfl.geom.ColorTransform();
};
$hxClasses["openfl.display.BitmapData"] = openfl.display.BitmapData;
openfl.display.BitmapData.__name__ = true;
openfl.display.BitmapData.__interfaces__ = [openfl.display.IBitmapDrawable];
openfl.display.BitmapData.fromCanvas = function(canvas,transparent) {
	if(transparent == null) transparent = true;
	if(canvas == null) return null;
	var bitmapData = new openfl.display.BitmapData(0,0,transparent);
	bitmapData.__fromImage(lime.graphics.Image.fromCanvas(canvas));
	bitmapData.image.set_transparent(transparent);
	return bitmapData;
};
openfl.display.BitmapData.fromImage = function(image,transparent) {
	if(transparent == null) transparent = true;
	if(image == null || image.buffer == null) return null;
	var bitmapData = new openfl.display.BitmapData(0,0,transparent);
	bitmapData.__fromImage(image);
	bitmapData.image.set_transparent(transparent);
	return bitmapData;
};
openfl.display.BitmapData.prototype = {
	colorTransform: function(rect,colorTransform) {
		if(!this.__isValid) return;
		this.image.colorTransform(rect.__toLimeRectangle(),colorTransform.__toLimeColorMatrix());
		this.__usingFramebuffer = false;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(!this.__isValid || sourceBitmapData == null) return;
		this.image.copyPixels(sourceBitmapData.image,sourceRect.__toLimeRectangle(),destPoint.__toLimeVector2(),alphaBitmapData != null?alphaBitmapData.image:null,alphaPoint != null?alphaPoint.__toLimeVector2():null,mergeAlpha);
		this.__usingFramebuffer = false;
	}
	,dispose: function() {
		this.image = null;
		this.width = 0;
		this.height = 0;
		this.rect = null;
		this.__isValid = false;
		if(this.__texture != null) {
			var renderer = openfl.Lib.current.stage.__renderer;
			if(renderer != null) {
				var renderSession = renderer.renderSession;
				var gl = renderSession.gl;
				if(gl != null) {
					gl.deleteTexture(this.__texture);
					this.__texture = null;
				}
			}
		}
		if(this.__framebuffer != null) {
			this.__framebuffer.destroy();
			this.__framebuffer = null;
		}
	}
	,draw: function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		if(!this.__isValid) return;
		lime.graphics.utils.ImageCanvasUtil.convertToCanvas(this.image);
		lime.graphics.utils.ImageCanvasUtil.sync(this.image);
		var buffer = this.image.buffer;
		var renderSession = new openfl._internal.renderer.RenderSession();
		renderSession.context = buffer.__srcContext;
		renderSession.roundPixels = true;
		renderSession.maskManager = new openfl._internal.renderer.canvas.CanvasMaskManager(renderSession);
		if(!smoothing) {
			buffer.__srcContext.mozImageSmoothingEnabled = false;
			buffer.__srcContext.msImageSmoothingEnabled = false;
			buffer.__srcContext.imageSmoothingEnabled = false;
		}
		if(clipRect != null) renderSession.maskManager.pushRect(clipRect,new openfl.geom.Matrix());
		var matrixCache = source.__worldTransform;
		if(matrix != null) source.__worldTransform = matrix; else source.__worldTransform = new openfl.geom.Matrix();
		source.__updateChildren(false);
		source.__renderCanvas(renderSession);
		source.__worldTransform = matrixCache;
		source.__updateChildren(true);
		if(!smoothing) {
			buffer.__srcContext.mozImageSmoothingEnabled = true;
			buffer.__srcContext.msImageSmoothingEnabled = true;
			buffer.__srcContext.imageSmoothingEnabled = true;
		}
		if(clipRect != null) renderSession.maskManager.popMask();
		buffer.__srcContext.setTransform(1,0,0,1,0,0);
		buffer.__srcImageData = null;
		buffer.data = null;
	}
	,fillRect: function(rect,color) {
		if(!this.__isValid || rect == null) return;
		this.image.fillRect(rect.__toLimeRectangle(),color,1);
		this.__usingFramebuffer = false;
	}
	,getPixel: function(x,y) {
		if(!this.__isValid) return 0;
		return this.image.getPixel(x,y,1);
	}
	,getPixel32: function(x,y) {
		if(!this.__isValid) return 0;
		return this.image.getPixel32(x,y,1);
	}
	,getSurface: function() {
		if(!this.__isValid) return null;
		if(this.__surface == null) this.__surface = lime.graphics.cairo._CairoImageSurface.CairoImageSurface_Impl_.fromImage(this.image);
		return this.__surface;
	}
	,getTexture: function(gl) {
		if(!this.__isValid) return null;
		if(this.__usingFramebuffer && this.__framebuffer != null) return this.__framebuffer.texture;
		if(this.__texture == null) {
			this.__texture = gl.createTexture();
			gl.bindTexture(gl.TEXTURE_2D,this.__texture);
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.NEAREST);
			gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.NEAREST);
			this.image.dirty = true;
		}
		if(this.image != null && this.image.dirty) {
			var internalFormat;
			var format;
			if(this.__surface != null) lime.graphics.cairo._CairoSurface.CairoSurface_Impl_.flush(this.__surface);
			if(this.image.buffer.bitsPerPixel == 1) {
				internalFormat = gl.ALPHA;
				format = gl.ALPHA;
			} else {
				internalFormat = gl.RGBA;
				format = gl.RGBA;
			}
			gl.bindTexture(gl.TEXTURE_2D,this.__texture);
			var textureImage = this.image;
			if(!textureImage.get_premultiplied() && textureImage.get_transparent() || textureImage.get_format() != 0) {
				textureImage = textureImage.clone();
				textureImage.set_format(0);
				textureImage.set_premultiplied(true);
			}
			gl.texImage2D(gl.TEXTURE_2D,0,internalFormat,this.width,this.height,0,format,gl.UNSIGNED_BYTE,textureImage.get_data());
			gl.bindTexture(gl.TEXTURE_2D,null);
			this.image.dirty = false;
		}
		return this.__texture;
	}
	,lock: function() {
	}
	,setPixel32: function(x,y,color) {
		if(!this.__isValid) return;
		this.image.setPixel32(x,y,color,1);
		this.__usingFramebuffer = false;
	}
	,unlock: function(changeRect) {
	}
	,__createUVs: function() {
		if(this.__uvData == null) this.__uvData = new openfl.display.TextureUvs();
		this.__uvData.x0 = 0;
		this.__uvData.y0 = 0;
		this.__uvData.x1 = 1;
		this.__uvData.y1 = 0;
		this.__uvData.x2 = 1;
		this.__uvData.y2 = 1;
		this.__uvData.x3 = 0;
		this.__uvData.y3 = 1;
	}
	,__fromImage: function(image) {
		if(image != null && image.buffer != null) {
			this.image = image;
			this.width = image.width;
			this.height = image.height;
			this.rect = new openfl.geom.Rectangle(0,0,image.width,image.height);
			this.__isValid = true;
		}
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__isValid) return;
		lime.graphics.utils.ImageCanvasUtil.sync(this.image);
		var context = renderSession.context;
		if(this.__worldTransform == null) this.__worldTransform = new openfl.geom.Matrix();
		context.globalAlpha = 1;
		var transform = this.__worldTransform;
		if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		context.drawImage(this.image.get_src(),0,0);
	}
	,__sync: function() {
		lime.graphics.utils.ImageCanvasUtil.sync(this.image);
	}
	,__updateChildren: function(transformOnly) {
	}
	,__class__: openfl.display.BitmapData
};
openfl.display.TextureUvs = function() {
	this.y3 = 0;
	this.y2 = 0;
	this.y1 = 0;
	this.y0 = 0;
	this.x3 = 0;
	this.x2 = 0;
	this.x1 = 0;
	this.x0 = 0;
};
$hxClasses["openfl.display.TextureUvs"] = openfl.display.TextureUvs;
openfl.display.TextureUvs.__name__ = true;
openfl.display.TextureUvs.prototype = {
	__class__: openfl.display.TextureUvs
};
openfl.display.BlendMode = $hxClasses["openfl.display.BlendMode"] = { __ename__ : true, __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] };
openfl.display.BlendMode.ADD = ["ADD",0];
openfl.display.BlendMode.ADD.toString = $estr;
openfl.display.BlendMode.ADD.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.ALPHA = ["ALPHA",1];
openfl.display.BlendMode.ALPHA.toString = $estr;
openfl.display.BlendMode.ALPHA.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.DARKEN = ["DARKEN",2];
openfl.display.BlendMode.DARKEN.toString = $estr;
openfl.display.BlendMode.DARKEN.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
openfl.display.BlendMode.DIFFERENCE.toString = $estr;
openfl.display.BlendMode.DIFFERENCE.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.ERASE = ["ERASE",4];
openfl.display.BlendMode.ERASE.toString = $estr;
openfl.display.BlendMode.ERASE.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
openfl.display.BlendMode.HARDLIGHT.toString = $estr;
openfl.display.BlendMode.HARDLIGHT.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.INVERT = ["INVERT",6];
openfl.display.BlendMode.INVERT.toString = $estr;
openfl.display.BlendMode.INVERT.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.LAYER = ["LAYER",7];
openfl.display.BlendMode.LAYER.toString = $estr;
openfl.display.BlendMode.LAYER.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
openfl.display.BlendMode.LIGHTEN.toString = $estr;
openfl.display.BlendMode.LIGHTEN.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
openfl.display.BlendMode.MULTIPLY.toString = $estr;
openfl.display.BlendMode.MULTIPLY.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.NORMAL = ["NORMAL",10];
openfl.display.BlendMode.NORMAL.toString = $estr;
openfl.display.BlendMode.NORMAL.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.OVERLAY = ["OVERLAY",11];
openfl.display.BlendMode.OVERLAY.toString = $estr;
openfl.display.BlendMode.OVERLAY.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.SCREEN = ["SCREEN",12];
openfl.display.BlendMode.SCREEN.toString = $estr;
openfl.display.BlendMode.SCREEN.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
openfl.display.BlendMode.SUBTRACT.toString = $estr;
openfl.display.BlendMode.SUBTRACT.__enum__ = openfl.display.BlendMode;
openfl.display.CapsStyle = $hxClasses["openfl.display.CapsStyle"] = { __ename__ : true, __constructs__ : ["NONE","ROUND","SQUARE"] };
openfl.display.CapsStyle.NONE = ["NONE",0];
openfl.display.CapsStyle.NONE.toString = $estr;
openfl.display.CapsStyle.NONE.__enum__ = openfl.display.CapsStyle;
openfl.display.CapsStyle.ROUND = ["ROUND",1];
openfl.display.CapsStyle.ROUND.toString = $estr;
openfl.display.CapsStyle.ROUND.__enum__ = openfl.display.CapsStyle;
openfl.display.CapsStyle.SQUARE = ["SQUARE",2];
openfl.display.CapsStyle.SQUARE.toString = $estr;
openfl.display.CapsStyle.SQUARE.__enum__ = openfl.display.CapsStyle;
openfl.text = {};
openfl.text.TextField = function() {
	openfl.display.InteractiveObject.call(this);
	this.__caretIndex = -1;
	this.__graphics = new openfl.display.Graphics();
	this.__textEngine = new openfl._internal.text.TextEngine(this);
	this.__layoutDirty = true;
	this.__tabEnabled = true;
	if(openfl.text.TextField.__defaultTextFormat == null) {
		openfl.text.TextField.__defaultTextFormat = new openfl.text.TextFormat("Times New Roman",12,0,false,false,false,"","",openfl.text.TextFormatAlign.LEFT,0,0,0,0);
		openfl.text.TextField.__defaultTextFormat.blockIndent = 0;
		openfl.text.TextField.__defaultTextFormat.bullet = false;
		openfl.text.TextField.__defaultTextFormat.letterSpacing = 0;
		openfl.text.TextField.__defaultTextFormat.kerning = false;
	}
	this.__textFormat = openfl.text.TextField.__defaultTextFormat.clone();
	this.__textEngine.textFormatRanges.push(new openfl._internal.text.TextFormatRange(this.__textFormat,0,0));
	this.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.this_onMouseDown));
};
$hxClasses["openfl.text.TextField"] = openfl.text.TextField;
openfl.text.TextField.__name__ = true;
openfl.text.TextField.__defaultTextFormat = null;
openfl.text.TextField.__super__ = openfl.display.InteractiveObject;
openfl.text.TextField.prototype = $extend(openfl.display.InteractiveObject.prototype,{
	getCharBoundaries: function(charIndex) {
		if(charIndex < 0 || charIndex > this.__textEngine.text.length - 1) return null;
		this.__updateLayout();
		var _g = 0;
		var _g1 = this.__textEngine.layoutGroups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			if(charIndex >= group.startIndex && charIndex <= group.endIndex) {
				var x = group.offsetX;
				var _g3 = 0;
				var _g2 = charIndex - group.startIndex;
				while(_g3 < _g2) {
					var i = _g3++;
					x += group.advances[i];
				}
				return new openfl.geom.Rectangle(x,group.offsetY,group.advances[charIndex - group.startIndex],group.ascent + group.descent);
			}
		}
		return null;
	}
	,replaceSelectedText: function(value) {
		if(value == "" && this.__selectionIndex == this.__caretIndex) return;
		var startIndex;
		if(this.__caretIndex < this.__selectionIndex) startIndex = this.__caretIndex; else startIndex = this.__selectionIndex;
		var endIndex;
		if(this.__caretIndex > this.__selectionIndex) endIndex = this.__caretIndex; else endIndex = this.__selectionIndex;
		this.replaceText(startIndex,endIndex,value);
		this.__caretIndex = startIndex + value.length;
		this.__selectionIndex = this.__caretIndex;
	}
	,replaceText: function(beginIndex,endIndex,newText) {
		if(endIndex < beginIndex || beginIndex < 0 || endIndex > this.__textEngine.text.length || newText == null) return;
		this.__textEngine.text = this.__textEngine.text.substring(0,beginIndex) + newText + this.__textEngine.text.substring(endIndex);
		var offset = newText.length - (endIndex - beginIndex);
		var i = 0;
		var range;
		while(i < this.__textEngine.textFormatRanges.length) {
			range = this.__textEngine.textFormatRanges[i];
			if(range.start <= beginIndex && range.end >= endIndex) {
				range.end += offset;
				i++;
			} else if(range.start >= beginIndex && range.end <= endIndex) {
				this.__textEngine.textFormatRanges.splice(i,1);
				offset -= range.end - range.start;
			} else if(range.start > beginIndex && range.start <= endIndex) {
				range.start += offset;
				i++;
			} else i++;
		}
		this.__dirty = true;
		this.__layoutDirty = true;
	}
	,__getBounds: function(rect,matrix) {
		this.__updateLayout();
		var bounds = openfl.geom.Rectangle.__temp;
		this.__textEngine.bounds.__transform(bounds,matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__getCursor: function() {
		if(this.__textEngine.selectable) return lime.ui.MouseCursor.TEXT; else return null;
	}
	,__getPosition: function(x,y) {
		this.__updateLayout();
		x += this.get_scrollH();
		var _g1 = 0;
		var _g = this.get_scrollV() - 1;
		while(_g1 < _g) {
			var i = _g1++;
			y += this.__textEngine.lineHeights[i];
		}
		if(y > this.__textEngine.textHeight) y = this.__textEngine.textHeight;
		var firstGroup = true;
		var group;
		var nextGroup;
		var _g11 = 0;
		var _g2 = this.__textEngine.layoutGroups.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			group = this.__textEngine.layoutGroups[i1];
			if(i1 < this.__textEngine.layoutGroups.length - 1) nextGroup = this.__textEngine.layoutGroups[i1 + 1]; else nextGroup = null;
			if(firstGroup) {
				if(y < group.offsetY) y = group.offsetY;
				if(x < group.offsetX) x = group.offsetX;
				firstGroup = false;
			}
			if(y >= group.offsetY && y <= group.offsetY + group.height || nextGroup == null) {
				if(x >= group.offsetX && x <= group.offsetX + group.width || (nextGroup == null || nextGroup.lineIndex != group.lineIndex)) {
					var advance = 0.0;
					var _g3 = 0;
					var _g21 = group.advances.length;
					while(_g3 < _g21) {
						var i2 = _g3++;
						advance += group.advances[i2];
						if(x <= group.offsetX + advance) {
							if(x <= group.offsetX + (advance - group.advances[i2]) + group.advances[i2] / 2) return group.startIndex + i2; else if(group.startIndex + i2 < group.endIndex) return group.startIndex + i2 + 1; else return group.endIndex;
						}
					}
					return group.endIndex;
				}
			}
		}
		return this.__textEngine.text.length;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled) return false;
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) return false;
		this.__getTransform();
		this.__updateLayout();
		var px = this.__worldTransform.__transformInverseX(x,y);
		var py = this.__worldTransform.__transformInverseY(x,y);
		if(this.__textEngine.bounds.contains(px,py)) {
			if(stack != null) stack.push(this);
			return true;
		}
		return false;
	}
	,__hitTestMask: function(x,y) {
		this.__getTransform();
		this.__updateLayout();
		var px = this.__worldTransform.__transformInverseX(x,y);
		var py = this.__worldTransform.__transformInverseY(x,y);
		if(this.__textEngine.bounds.contains(px,py)) return true;
		return false;
	}
	,__renderCairo: function(renderSession) {
		openfl._internal.renderer.cairo.CairoTextField.render(this,renderSession);
		openfl.display.InteractiveObject.prototype.__renderCairo.call(this,renderSession);
	}
	,__renderCanvas: function(renderSession) {
		openfl._internal.renderer.canvas.CanvasTextField.render(this,renderSession);
		if(this.__textEngine.antiAliasType == openfl.text.AntiAliasType.ADVANCED && this.__textEngine.gridFitType == openfl.text.GridFitType.PIXEL) {
			var smoothingEnabled = renderSession.context.imageSmoothingEnabled;
			if(smoothingEnabled) {
				renderSession.context.mozImageSmoothingEnabled = false;
				renderSession.context.msImageSmoothingEnabled = false;
				renderSession.context.imageSmoothingEnabled = false;
			}
			openfl.display.InteractiveObject.prototype.__renderCanvas.call(this,renderSession);
			if(smoothingEnabled) {
				renderSession.context.mozImageSmoothingEnabled = true;
				renderSession.context.msImageSmoothingEnabled = true;
				renderSession.context.imageSmoothingEnabled = true;
			}
		} else openfl.display.InteractiveObject.prototype.__renderCanvas.call(this,renderSession);
	}
	,__renderDOM: function(renderSession) {
		openfl._internal.renderer.dom.DOMTextField.render(this,renderSession);
	}
	,__renderGL: function(renderSession) {
		openfl._internal.renderer.canvas.CanvasTextField.render(this,renderSession);
		openfl._internal.renderer.opengl.GLRenderer.renderBitmap(this,renderSession,this.__textEngine.antiAliasType != openfl.text.AntiAliasType.ADVANCED || this.__textEngine.gridFitType != openfl.text.GridFitType.PIXEL);
	}
	,__startCursorTimer: function() {
		this.__cursorTimer = haxe.Timer.delay($bind(this,this.__startCursorTimer),600);
		this.__showCursor = !this.__showCursor;
		this.__dirty = true;
	}
	,__startTextInput: function() {
		if(this.__caretIndex < 0) {
			this.__caretIndex = this.__textEngine.text.length;
			this.__selectionIndex = this.__caretIndex;
		}
		if(this.stage != null) {
			this.stage.window.backend.setEnableTextEvents(true);
			if(!this.__inputEnabled) {
				this.stage.window.backend.setEnableTextEvents(true);
				if(!this.stage.window.onTextInput.has($bind(this,this.window_onTextInput))) {
					this.stage.window.onTextInput.add($bind(this,this.window_onTextInput));
					this.stage.window.onKeyDown.add($bind(this,this.window_onKeyDown));
				}
				this.__inputEnabled = true;
				this.__startCursorTimer();
			}
		}
	}
	,__stopCursorTimer: function() {
		if(this.__cursorTimer != null) {
			this.__cursorTimer.stop();
			this.__cursorTimer = null;
		}
		if(this.__showCursor) {
			this.__showCursor = false;
			this.__dirty = true;
		}
	}
	,__stopTextInput: function() {
		if(this.__inputEnabled && this.stage != null) {
			this.stage.window.backend.setEnableTextEvents(false);
			this.stage.window.onTextInput.remove($bind(this,this.window_onTextInput));
			this.stage.window.onKeyDown.remove($bind(this,this.window_onKeyDown));
			this.__inputEnabled = false;
			this.__stopCursorTimer();
		}
	}
	,__updateLayout: function() {
		if(this.__layoutDirty) {
			this.__textEngine.update();
			if(this.__textEngine.autoSize != openfl.text.TextFieldAutoSize.NONE) {
				var cacheWidth = this.__textEngine.width;
				var cacheHeight = this.__textEngine.height;
				var _g = this.__textEngine.autoSize;
				switch(_g[1]) {
				case 1:case 3:case 0:
					if(!this.__textEngine.wordWrap) this.__textEngine.width = this.__textEngine.textWidth + 4;
					this.__textEngine.height = this.__textEngine.textHeight + 4;
					break;
				default:
				}
				if(this.__textEngine.width != cacheWidth) {
					var _g1 = this.__textEngine.autoSize;
					switch(_g1[1]) {
					case 3:
						var _g11 = this;
						_g11.set_x(_g11.get_x() + (cacheWidth - this.__textEngine.width));
						break;
					case 0:
						var _g12 = this;
						_g12.set_x(_g12.get_x() + (cacheWidth - this.__textEngine.width) / 2);
						break;
					default:
					}
				}
				this.__textEngine.getBounds();
			}
			this.__layoutDirty = false;
		}
	}
	,set_antiAliasType: function(value) {
		if(value != this.__textEngine.antiAliasType) {
		}
		return this.__textEngine.antiAliasType = value;
	}
	,set_border: function(value) {
		if(value != this.__textEngine.border) this.__dirty = true;
		return this.__textEngine.border = value;
	}
	,set_defaultTextFormat: function(value) {
		this.__textFormat.__merge(value);
		this.__layoutDirty = true;
		this.__dirty = true;
		return value;
	}
	,set_embedFonts: function(value) {
		return this.__textEngine.embedFonts = value;
	}
	,set_height: function(value) {
		if(this.get_scaleY() != 1 || value != this.__textEngine.height) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			this.__dirty = true;
			this.__layoutDirty = true;
		}
		this.set_scaleY(1);
		return this.__textEngine.height = value;
	}
	,get_htmlText: function() {
		return this.__textEngine.text;
	}
	,set_htmlText: function(value) {
		if(!this.__isHTML || this.__textEngine.text != value) {
			this.__dirty = true;
			this.__layoutDirty = true;
		}
		this.__isHTML = true;
		if(this.__div == null) {
			value = new EReg("<br>","g").replace(value,"\n");
			value = new EReg("<br/>","g").replace(value,"\n");
			var segments = value.split("<font");
			if(segments.length == 1) {
				value = new EReg("<.*?>","g").replace(value,"");
				if(this.__textEngine.textFormatRanges.length > 1) this.__textEngine.textFormatRanges.splice(1,this.__textEngine.textFormatRanges.length - 1);
				var range = this.__textEngine.textFormatRanges[0];
				range.format = this.__textFormat;
				range.start = 0;
				range.end = value.length;
				return this.__textEngine.text = value;
			} else {
				this.__textEngine.textFormatRanges.splice(0,this.__textEngine.textFormatRanges.length);
				value = "";
				var _g = 0;
				while(_g < segments.length) {
					var segment = segments[_g];
					++_g;
					if(segment == "") continue;
					var closeFontIndex = segment.indexOf("</font>");
					if(closeFontIndex > -1) {
						var start = segment.indexOf(">") + 1;
						var end = closeFontIndex;
						var format = this.__textFormat.clone();
						var faceIndex = segment.indexOf("face=");
						var colorIndex = segment.indexOf("color=");
						var sizeIndex = segment.indexOf("size=");
						if(faceIndex > -1 && faceIndex < start) {
							var len = segment.indexOf("\"",faceIndex);
							format.font = HxOverrides.substr(segment,faceIndex + 6,len);
						}
						if(colorIndex > -1 && colorIndex < start) format.color = Std.parseInt("0x" + HxOverrides.substr(segment,colorIndex + 8,6));
						if(sizeIndex > -1 && sizeIndex < start) format.size = Std.parseInt((function($this) {
							var $r;
							var len1 = segment.indexOf("\"",sizeIndex);
							$r = HxOverrides.substr(segment,sizeIndex + 6,len1);
							return $r;
						}(this)));
						var sub = segment.substring(start,end);
						sub = new EReg("<.*?>","g").replace(sub,"");
						this.__textEngine.textFormatRanges.push(new openfl._internal.text.TextFormatRange(format,value.length,value.length + sub.length));
						value += sub;
						if(closeFontIndex + 7 < segment.length) {
							sub = HxOverrides.substr(segment,closeFontIndex + 7,null);
							this.__textEngine.textFormatRanges.push(new openfl._internal.text.TextFormatRange(this.__textFormat,value.length,value.length + sub.length));
							value += sub;
						}
					} else {
						this.__textEngine.textFormatRanges.push(new openfl._internal.text.TextFormatRange(this.__textFormat,value.length,value.length + segment.length));
						value += segment;
					}
				}
			}
		}
		return this.__textEngine.text = value;
	}
	,set_maxChars: function(value) {
		if(value != this.__textEngine.maxChars) {
			this.__dirty = true;
			this.__layoutDirty = true;
		}
		return this.__textEngine.maxChars = value;
	}
	,get_scrollH: function() {
		return this.__textEngine.scrollH;
	}
	,get_scrollV: function() {
		return this.__textEngine.scrollV;
	}
	,get_selectable: function() {
		return this.__textEngine.selectable;
	}
	,set_selectable: function(value) {
		if(value != this.__textEngine.selectable && this.get_type() == openfl.text.TextFieldType.INPUT) {
			if(this.stage != null && this.stage.get_focus() == this) this.__startTextInput(); else if(!value) this.__stopTextInput();
		}
		return this.__textEngine.selectable = value;
	}
	,set_text: function(value) {
		if(this.__isHTML || this.__textEngine.text != value) {
			this.__dirty = true;
			this.__layoutDirty = true;
		} else return value;
		if(this.__textEngine.textFormatRanges.length > 1) this.__textEngine.textFormatRanges.splice(1,this.__textEngine.textFormatRanges.length - 1);
		var range = this.__textEngine.textFormatRanges[0];
		range.format = this.__textFormat;
		range.start = 0;
		range.end = value.length;
		this.__isHTML = false;
		return this.__textEngine.text = value;
	}
	,set_textColor: function(value) {
		if(value != this.__textFormat.color) this.__dirty = true;
		var _g = 0;
		var _g1 = this.__textEngine.textFormatRanges;
		while(_g < _g1.length) {
			var range = _g1[_g];
			++_g;
			range.format.color = value;
		}
		return this.__textFormat.color = value;
	}
	,get_textWidth: function() {
		this.__updateLayout();
		return this.__textEngine.textWidth;
	}
	,get_textHeight: function() {
		this.__updateLayout();
		return this.__textEngine.textHeight;
	}
	,get_type: function() {
		return this.__textEngine.type;
	}
	,set_type: function(value) {
		if(value != this.__textEngine.type) {
			if(value == openfl.text.TextFieldType.INPUT) {
				this.addEventListener(openfl.events.FocusEvent.FOCUS_IN,$bind(this,this.this_onFocusIn));
				this.addEventListener(openfl.events.FocusEvent.FOCUS_OUT,$bind(this,this.this_onFocusOut));
				this.addEventListener(openfl.events.Event.ADDED_TO_STAGE,$bind(this,this.this_onAddedToStage));
				this.this_onFocusIn(null);
			} else {
				this.removeEventListener(openfl.events.FocusEvent.FOCUS_IN,$bind(this,this.this_onFocusIn));
				this.removeEventListener(openfl.events.FocusEvent.FOCUS_OUT,$bind(this,this.this_onFocusOut));
				this.removeEventListener(openfl.events.Event.ADDED_TO_STAGE,$bind(this,this.this_onAddedToStage));
				this.__stopTextInput();
			}
			this.__dirty = true;
		}
		return this.__textEngine.type = value;
	}
	,set_width: function(value) {
		if(this.get_scaleX() != 1 || this.__textEngine.width != value) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			this.__dirty = true;
			this.__layoutDirty = true;
		}
		this.set_scaleX(1);
		return this.__textEngine.width = value;
	}
	,stage_onMouseMove: function(event) {
		if(this.stage == null) return;
		if(this.__textEngine.selectable && this.__selectionIndex >= 0) {
			this.__updateLayout();
			var position = this.__getPosition(this.get_mouseX(),this.get_mouseY());
			if(position != this.__caretIndex) {
				this.__caretIndex = position;
				this.__dirty = true;
			}
		}
	}
	,stage_onMouseUp: function(event) {
		if(this.stage == null) return;
		this.stage.removeEventListener(openfl.events.MouseEvent.MOUSE_MOVE,$bind(this,this.stage_onMouseMove));
		this.stage.removeEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.stage_onMouseUp));
		if(this.stage.get_focus() == this) {
			this.__getTransform();
			this.__updateLayout();
			var px = this.__worldTransform.__transformInverseX(this.get_x(),this.get_y());
			var py = this.__worldTransform.__transformInverseY(this.get_x(),this.get_y());
			var upPos = this.__getPosition(this.get_mouseX(),this.get_mouseY());
			var leftPos;
			var rightPos;
			leftPos = Std["int"](Math.min(this.__selectionIndex,upPos));
			rightPos = Std["int"](Math.max(this.__selectionIndex,upPos));
			this.__selectionIndex = leftPos;
			this.__caretIndex = rightPos;
			if(this.__inputEnabled) {
				this.this_onFocusIn(null);
				this.__stopCursorTimer();
				this.__startCursorTimer();
			}
		}
	}
	,this_onAddedToStage: function(event) {
		this.this_onFocusIn(null);
	}
	,this_onFocusIn: function(event) {
		if(this.get_selectable() && this.get_type() == openfl.text.TextFieldType.INPUT && this.stage != null && this.stage.get_focus() == this) this.__startTextInput();
	}
	,this_onFocusOut: function(event) {
		this.__stopTextInput();
	}
	,this_onMouseDown: function(event) {
		if(!this.get_selectable()) return;
		this.__updateLayout();
		this.__caretIndex = this.__getPosition(this.get_mouseX(),this.get_mouseY());
		this.__selectionIndex = this.__caretIndex;
		this.__dirty = true;
		this.stage.addEventListener(openfl.events.MouseEvent.MOUSE_MOVE,$bind(this,this.stage_onMouseMove));
		this.stage.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.stage_onMouseUp));
	}
	,window_onKeyDown: function(key,modifier) {
		switch(key) {
		case 8:
			if(this.__selectionIndex == this.__caretIndex && this.__caretIndex > 0) this.__selectionIndex = this.__caretIndex - 1;
			if(this.__selectionIndex != this.__caretIndex) {
				this.replaceSelectedText("");
				this.__selectionIndex = this.__caretIndex;
				this.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE,true));
			}
			break;
		case 127:
			if(this.__selectionIndex == this.__caretIndex && this.__caretIndex < this.__textEngine.text.length) this.__selectionIndex = this.__caretIndex + 1;
			if(this.__selectionIndex != this.__caretIndex) {
				this.replaceSelectedText("");
				this.__selectionIndex = this.__caretIndex;
				this.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE,true));
			}
			break;
		case 1073741904:
			if(lime.ui._KeyModifier.KeyModifier_Impl_.get_shiftKey(modifier)) {
				if(this.__caretIndex > 0) this.__caretIndex--;
			} else {
				if(this.__selectionIndex == this.__caretIndex) {
					if(this.__caretIndex > 0) this.__caretIndex--;
				} else this.__caretIndex = Std["int"](Math.min(this.__caretIndex,this.__selectionIndex));
				this.__selectionIndex = this.__caretIndex;
			}
			this.__stopCursorTimer();
			this.__startCursorTimer();
			break;
		case 1073741903:
			if(lime.ui._KeyModifier.KeyModifier_Impl_.get_shiftKey(modifier)) {
				if(this.__caretIndex < this.__textEngine.text.length) this.__caretIndex++;
			} else {
				if(this.__selectionIndex == this.__caretIndex) {
					if(this.__caretIndex < this.__textEngine.text.length) this.__caretIndex++;
				} else this.__caretIndex = Std["int"](Math.max(this.__caretIndex,this.__selectionIndex));
				this.__selectionIndex = this.__caretIndex;
			}
			this.__stopCursorTimer();
			this.__startCursorTimer();
			break;
		case 99:
			if(modifier == 64 || modifier == 128) lime.system.Clipboard.set_text(this.__textEngine.text.substring(this.__caretIndex,this.__selectionIndex));
			break;
		case 120:
			if(modifier == 64 || modifier == 128) {
				lime.system.Clipboard.set_text(this.__textEngine.text.substring(this.__caretIndex,this.__selectionIndex));
				if(this.__caretIndex != this.__selectionIndex) {
					this.replaceSelectedText("");
					this.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE,true));
				}
			}
			break;
		case 118:
			if(modifier == 64 || modifier == 128) {
				var text = lime.system.Clipboard.get_text();
				if(text != null) this.replaceSelectedText(text); else this.replaceSelectedText("");
				this.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE,true));
			}
			break;
		default:
		}
	}
	,window_onTextInput: function(value) {
		this.replaceSelectedText(value);
		this.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE,true));
	}
	,__class__: openfl.text.TextField
});
openfl.display.FPS = function(x,y,color) {
	if(color == null) color = 0;
	if(y == null) y = 10;
	if(x == null) x = 10;
	openfl.text.TextField.call(this);
	this.set_x(x);
	this.set_y(y);
	this.currentFPS = 0;
	this.set_selectable(false);
	this.mouseEnabled = false;
	this.set_defaultTextFormat(new openfl.text.TextFormat("_sans",12,color));
	this.set_text("FPS: ");
	this.cacheCount = 0;
	this.times = [];
	this.addEventListener(openfl.events.Event.ENTER_FRAME,$bind(this,this.this_onEnterFrame));
};
$hxClasses["openfl.display.FPS"] = openfl.display.FPS;
openfl.display.FPS.__name__ = true;
openfl.display.FPS.__super__ = openfl.text.TextField;
openfl.display.FPS.prototype = $extend(openfl.text.TextField.prototype,{
	this_onEnterFrame: function(event) {
		var currentTime = haxe.Timer.stamp();
		this.times.push(currentTime);
		while(this.times[0] < currentTime - 1) this.times.shift();
		var currentCount = this.times.length;
		this.currentFPS = Math.round((currentCount + this.cacheCount) / 2);
		if(currentCount != this.cacheCount) this.set_text("FPS: " + this.currentFPS);
		this.cacheCount = currentCount;
	}
	,__class__: openfl.display.FPS
});
openfl.display.FrameLabel = function() { };
$hxClasses["openfl.display.FrameLabel"] = openfl.display.FrameLabel;
openfl.display.FrameLabel.__name__ = true;
openfl.display.FrameLabel.__super__ = openfl.events.EventDispatcher;
openfl.display.FrameLabel.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	__class__: openfl.display.FrameLabel
});
openfl.display.GradientType = $hxClasses["openfl.display.GradientType"] = { __ename__ : true, __constructs__ : ["RADIAL","LINEAR"] };
openfl.display.GradientType.RADIAL = ["RADIAL",0];
openfl.display.GradientType.RADIAL.toString = $estr;
openfl.display.GradientType.RADIAL.__enum__ = openfl.display.GradientType;
openfl.display.GradientType.LINEAR = ["LINEAR",1];
openfl.display.GradientType.LINEAR.toString = $estr;
openfl.display.GradientType.LINEAR.__enum__ = openfl.display.GradientType;
openfl.display.Graphics = function() {
	this.__visible = true;
	this.__glStack = [];
	this.__dirty = true;
	this.__commands = [];
	this.__commands = new Array();
	this.__halfStrokeWidth = 0;
	this.__positionX = 0;
	this.__positionY = 0;
	this.__hardware = true;
	this.moveTo(0,0);
};
$hxClasses["openfl.display.Graphics"] = openfl.display.Graphics;
openfl.display.Graphics.__name__ = true;
openfl.display.Graphics.prototype = {
	beginFill: function(color,alpha) {
		if(alpha == null) alpha = 1;
		if(color == null) color = 0;
		this.__commands.push(openfl.display.DrawCommand.BeginFill(color & 16777215,alpha));
		if(alpha > 0) this.__visible = true;
	}
	,clear: function() {
		this.__commands = new Array();
		this.__halfStrokeWidth = 0;
		if(this.__bounds != null) {
			this.set___dirty(true);
			this.__transformDirty = true;
			this.__bounds = null;
		}
		this.__visible = false;
		this.__hardware = true;
		this.moveTo(0,0);
	}
	,drawRect: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.DrawRect(x,y,width,height));
		this.set___dirty(true);
	}
	,moveTo: function(x,y) {
		this.__positionX = x;
		this.__positionY = y;
		this.__commands.push(openfl.display.DrawCommand.MoveTo(x,y));
	}
	,__getBounds: function(rect,matrix) {
		if(this.__bounds == null) return;
		var bounds = openfl.geom.Rectangle.__temp;
		this.__bounds.__transform(bounds,matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__hitTest: function(x,y,shapeFlag,matrix) {
		if(this.__bounds == null) return false;
		var px = matrix.__transformInverseX(x,y);
		var py = matrix.__transformInverseY(x,y);
		if(px > this.__bounds.x && py > this.__bounds.y && this.__bounds.contains(px,py)) {
			if(shapeFlag) return openfl._internal.renderer.canvas.CanvasGraphics.hitTest(this,px,py);
			return true;
		}
		return false;
	}
	,__inflateBounds: function(x,y) {
		if(this.__bounds == null) {
			this.__bounds = new openfl.geom.Rectangle(x,y,0,0);
			this.__transformDirty = true;
			return;
		}
		if(x < this.__bounds.x) {
			this.__bounds.width += this.__bounds.x - x;
			this.__bounds.x = x;
			this.__transformDirty = true;
		}
		if(y < this.__bounds.y) {
			this.__bounds.height += this.__bounds.y - y;
			this.__bounds.y = y;
			this.__transformDirty = true;
		}
		if(x > this.__bounds.x + this.__bounds.width) this.__bounds.width = x - this.__bounds.x;
		if(y > this.__bounds.y + this.__bounds.height) this.__bounds.height = y - this.__bounds.y;
	}
	,set___dirty: function(value) {
		if(value && this.__owner != null) this.__owner.__setRenderDirty();
		return this.__dirty = value;
	}
	,__class__: openfl.display.Graphics
};
openfl.display.DrawCommand = $hxClasses["openfl.display.DrawCommand"] = { __ename__ : true, __constructs__ : ["BeginBitmapFill","BeginFill","BeginGradientFill","CubicCurveTo","CurveTo","DrawCircle","DrawEllipse","DrawRect","DrawRoundRect","DrawTiles","DrawTriangles","EndFill","LineStyle","LineBitmapStyle","LineGradientStyle","LineTo","MoveTo","DrawPathC","OverrideMatrix"] };
openfl.display.DrawCommand.BeginBitmapFill = function(bitmap,matrix,repeat,smooth) { var $x = ["BeginBitmapFill",0,bitmap,matrix,repeat,smooth]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.BeginFill = function(color,alpha) { var $x = ["BeginFill",1,color,alpha]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.BeginGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) { var $x = ["BeginGradientFill",2,type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.CubicCurveTo = function(controlX1,controlY1,controlX2,controlY2,anchorX,anchorY) { var $x = ["CubicCurveTo",3,controlX1,controlY1,controlX2,controlY2,anchorX,anchorY]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.CurveTo = function(controlX,controlY,anchorX,anchorY) { var $x = ["CurveTo",4,controlX,controlY,anchorX,anchorY]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawCircle = function(x,y,radius) { var $x = ["DrawCircle",5,x,y,radius]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawEllipse = function(x,y,width,height) { var $x = ["DrawEllipse",6,x,y,width,height]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawRect = function(x,y,width,height) { var $x = ["DrawRect",7,x,y,width,height]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawRoundRect = function(x,y,width,height,rx,ry) { var $x = ["DrawRoundRect",8,x,y,width,height,rx,ry]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawTiles = function(sheet,tileData,smooth,flags,count) { var $x = ["DrawTiles",9,sheet,tileData,smooth,flags,count]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawTriangles = function(vertices,indices,uvtData,culling,colors,blendMode) { var $x = ["DrawTriangles",10,vertices,indices,uvtData,culling,colors,blendMode]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.EndFill = ["EndFill",11];
openfl.display.DrawCommand.EndFill.toString = $estr;
openfl.display.DrawCommand.EndFill.__enum__ = openfl.display.DrawCommand;
openfl.display.DrawCommand.LineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) { var $x = ["LineStyle",12,thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.LineBitmapStyle = function(bitmap,matrix,repeat,smooth) { var $x = ["LineBitmapStyle",13,bitmap,matrix,repeat,smooth]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.LineGradientStyle = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) { var $x = ["LineGradientStyle",14,type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.LineTo = function(x,y) { var $x = ["LineTo",15,x,y]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.MoveTo = function(x,y) { var $x = ["MoveTo",16,x,y]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawPathC = function(commands,data,winding) { var $x = ["DrawPathC",17,commands,data,winding]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.OverrideMatrix = function(matrix) { var $x = ["OverrideMatrix",18,matrix]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.GraphicsPathWinding = $hxClasses["openfl.display.GraphicsPathWinding"] = { __ename__ : true, __constructs__ : ["EVEN_ODD","NON_ZERO"] };
openfl.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
openfl.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
openfl.display.GraphicsPathWinding.EVEN_ODD.__enum__ = openfl.display.GraphicsPathWinding;
openfl.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
openfl.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
openfl.display.GraphicsPathWinding.NON_ZERO.__enum__ = openfl.display.GraphicsPathWinding;
openfl.display.InterpolationMethod = $hxClasses["openfl.display.InterpolationMethod"] = { __ename__ : true, __constructs__ : ["RGB","LINEAR_RGB"] };
openfl.display.InterpolationMethod.RGB = ["RGB",0];
openfl.display.InterpolationMethod.RGB.toString = $estr;
openfl.display.InterpolationMethod.RGB.__enum__ = openfl.display.InterpolationMethod;
openfl.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
openfl.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
openfl.display.InterpolationMethod.LINEAR_RGB.__enum__ = openfl.display.InterpolationMethod;
openfl.display.JointStyle = $hxClasses["openfl.display.JointStyle"] = { __ename__ : true, __constructs__ : ["MITER","ROUND","BEVEL"] };
openfl.display.JointStyle.MITER = ["MITER",0];
openfl.display.JointStyle.MITER.toString = $estr;
openfl.display.JointStyle.MITER.__enum__ = openfl.display.JointStyle;
openfl.display.JointStyle.ROUND = ["ROUND",1];
openfl.display.JointStyle.ROUND.toString = $estr;
openfl.display.JointStyle.ROUND.__enum__ = openfl.display.JointStyle;
openfl.display.JointStyle.BEVEL = ["BEVEL",2];
openfl.display.JointStyle.BEVEL.toString = $estr;
openfl.display.JointStyle.BEVEL.__enum__ = openfl.display.JointStyle;
openfl.display.LineScaleMode = $hxClasses["openfl.display.LineScaleMode"] = { __ename__ : true, __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] };
openfl.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
openfl.display.LineScaleMode.HORIZONTAL.toString = $estr;
openfl.display.LineScaleMode.HORIZONTAL.__enum__ = openfl.display.LineScaleMode;
openfl.display.LineScaleMode.NONE = ["NONE",1];
openfl.display.LineScaleMode.NONE.toString = $estr;
openfl.display.LineScaleMode.NONE.__enum__ = openfl.display.LineScaleMode;
openfl.display.LineScaleMode.NORMAL = ["NORMAL",2];
openfl.display.LineScaleMode.NORMAL.toString = $estr;
openfl.display.LineScaleMode.NORMAL.__enum__ = openfl.display.LineScaleMode;
openfl.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
openfl.display.LineScaleMode.VERTICAL.toString = $estr;
openfl.display.LineScaleMode.VERTICAL.__enum__ = openfl.display.LineScaleMode;
openfl.display.Loader = function() { };
$hxClasses["openfl.display.Loader"] = openfl.display.Loader;
openfl.display.Loader.__name__ = true;
openfl.display.Loader.__super__ = openfl.display.Sprite;
openfl.display.Loader.prototype = $extend(openfl.display.Sprite.prototype,{
	__class__: openfl.display.Loader
});
openfl.display.PixelSnapping = $hxClasses["openfl.display.PixelSnapping"] = { __ename__ : true, __constructs__ : ["NEVER","AUTO","ALWAYS"] };
openfl.display.PixelSnapping.NEVER = ["NEVER",0];
openfl.display.PixelSnapping.NEVER.toString = $estr;
openfl.display.PixelSnapping.NEVER.__enum__ = openfl.display.PixelSnapping;
openfl.display.PixelSnapping.AUTO = ["AUTO",1];
openfl.display.PixelSnapping.AUTO.toString = $estr;
openfl.display.PixelSnapping.AUTO.__enum__ = openfl.display.PixelSnapping;
openfl.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
openfl.display.PixelSnapping.ALWAYS.toString = $estr;
openfl.display.PixelSnapping.ALWAYS.__enum__ = openfl.display.PixelSnapping;
openfl.display.Preloader = function(display) {
	lime.app.Preloader.call(this);
	if(display != null) {
		this.display = display;
		openfl.Lib.current.addChild(display);
		if(js.Boot.__instanceof(display,NMEPreloader)) (js.Boot.__cast(display , NMEPreloader)).onInit();
	}
};
$hxClasses["openfl.display.Preloader"] = openfl.display.Preloader;
openfl.display.Preloader.__name__ = true;
openfl.display.Preloader.__super__ = lime.app.Preloader;
openfl.display.Preloader.prototype = $extend(lime.app.Preloader.prototype,{
	load: function(urls,types) {
		var sounds = [];
		var url = null;
		var _g1 = 0;
		var _g = urls.length;
		while(_g1 < _g) {
			var i = _g1++;
			url = urls[i];
			var _g2 = types[i];
			switch(_g2) {
			case "MUSIC":case "SOUND":
				var sound = haxe.io.Path.withoutExtension(url);
				if(!HxOverrides.remove(sounds,sound)) this.total++;
				sounds.push(sound);
				break;
			default:
			}
		}
		var _g3 = 0;
		while(_g3 < sounds.length) {
			var soundName = sounds[_g3];
			++_g3;
			var sound1 = new openfl.media.Sound();
			sound1.addEventListener(openfl.events.Event.COMPLETE,$bind(this,this.sound_onComplete));
			sound1.addEventListener(openfl.events.IOErrorEvent.IO_ERROR,$bind(this,this.sound_onIOError));
			sound1.load(new openfl.net.URLRequest(soundName + ".ogg"));
		}
		lime.app.Preloader.prototype.load.call(this,urls,types);
	}
	,start: function() {
		if(this.display != null && js.Boot.__instanceof(this.display,NMEPreloader)) {
			this.display.addEventListener(openfl.events.Event.COMPLETE,$bind(this,this.display_onComplete));
			(js.Boot.__cast(this.display , NMEPreloader)).onLoaded();
		} else lime.app.Preloader.prototype.start.call(this);
	}
	,update: function(loaded,total) {
		if(this.display != null && js.Boot.__instanceof(this.display,NMEPreloader)) (js.Boot.__cast(this.display , NMEPreloader)).onUpdate(loaded,total);
	}
	,display_onComplete: function(event) {
		this.display.removeEventListener(openfl.events.Event.COMPLETE,$bind(this,this.display_onComplete));
		openfl.Lib.current.removeChild(this.display);
		openfl.Lib.current.stage.set_focus(null);
		this.display = null;
		lime.app.Preloader.prototype.start.call(this);
	}
	,sound_onComplete: function(event) {
		this.loaded++;
		var listeners = this.onProgress.listeners;
		var repeat = this.onProgress.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](this.loaded,this.total);
			if(!repeat[i]) this.onProgress.remove(listeners[i]); else i++;
		}
		if(this.loaded == this.total) this.start();
	}
	,sound_onIOError: function(event) {
		this.loaded++;
		var listeners = this.onProgress.listeners;
		var repeat = this.onProgress.repeat;
		var i = 0;
		while(i < listeners.length) {
			listeners[i](this.loaded,this.total);
			if(!repeat[i]) this.onProgress.remove(listeners[i]); else i++;
		}
		if(this.loaded == this.total) this.start();
	}
	,__class__: openfl.display.Preloader
});
openfl.display.SpreadMethod = $hxClasses["openfl.display.SpreadMethod"] = { __ename__ : true, __constructs__ : ["REPEAT","REFLECT","PAD"] };
openfl.display.SpreadMethod.REPEAT = ["REPEAT",0];
openfl.display.SpreadMethod.REPEAT.toString = $estr;
openfl.display.SpreadMethod.REPEAT.__enum__ = openfl.display.SpreadMethod;
openfl.display.SpreadMethod.REFLECT = ["REFLECT",1];
openfl.display.SpreadMethod.REFLECT.toString = $estr;
openfl.display.SpreadMethod.REFLECT.__enum__ = openfl.display.SpreadMethod;
openfl.display.SpreadMethod.PAD = ["PAD",2];
openfl.display.SpreadMethod.PAD.toString = $estr;
openfl.display.SpreadMethod.PAD.__enum__ = openfl.display.SpreadMethod;
openfl.display.Stage = function(window,color) {
	openfl.display.DisplayObjectContainer.call(this);
	this.application = window.application;
	this.window = window;
	if(color == null) {
		this.__transparent = true;
		this.set_color(0);
	} else this.set_color(color);
	this.set_name(null);
	this.__displayState = openfl.display.StageDisplayState.NORMAL;
	this.__mouseX = 0;
	this.__mouseY = 0;
	this.__lastClickTime = 0;
	this.stageWidth = window.__width;
	this.stageHeight = window.__height;
	this.stage = this;
	this.align = openfl.display.StageAlign.TOP_LEFT;
	this.allowsFullScreen = false;
	this.quality = openfl.display.StageQuality.HIGH;
	this.scaleMode = openfl.display.StageScaleMode.NO_SCALE;
	this.stageFocusRect = true;
	this.__clearBeforeRender = true;
	this.__stack = [];
	this.__mouseOutStack = [];
	var this1;
	this1 = new openfl.VectorData();
	var this2;
	this2 = new Array(0);
	this1.data = this2;
	this1.length = 0;
	this1.fixed = false;
	this.stage3Ds = this1;
	var this3 = this.stage3Ds;
	var x = new openfl.display.Stage3D();
	if(!this3.fixed) {
		this3.length++;
		if(this3.data.length < this3.length) {
			var data;
			var this4;
			this4 = new Array(this3.data.length + 10);
			data = this4;
			haxe.ds._Vector.Vector_Impl_.blit(this3.data,0,data,0,this3.data.length);
			this3.data = data;
		}
		this3.data[this3.length - 1] = x;
	}
	this3.length;
	if(openfl.Lib.current.stage == null) this.stage.addChild(openfl.Lib.current);
};
$hxClasses["openfl.display.Stage"] = openfl.display.Stage;
openfl.display.Stage.__name__ = true;
openfl.display.Stage.__interfaces__ = [lime.app.IModule];
openfl.display.Stage.__super__ = openfl.display.DisplayObjectContainer;
openfl.display.Stage.prototype = $extend(openfl.display.DisplayObjectContainer.prototype,{
	globalToLocal: function(pos) {
		return pos.clone();
	}
	,onGamepadAxisMove: function(gamepad,axis,value) {
		openfl.ui.GameInput.__onGamepadAxisMove(gamepad,axis,value);
	}
	,onGamepadButtonDown: function(gamepad,button) {
		openfl.ui.GameInput.__onGamepadButtonDown(gamepad,button);
	}
	,onGamepadButtonUp: function(gamepad,button) {
		openfl.ui.GameInput.__onGamepadButtonUp(gamepad,button);
	}
	,onGamepadConnect: function(gamepad) {
		openfl.ui.GameInput.__onGamepadConnect(gamepad);
	}
	,onGamepadDisconnect: function(gamepad) {
		openfl.ui.GameInput.__onGamepadDisconnect(gamepad);
	}
	,onKeyDown: function(window,keyCode,modifier) {
		if(this.window == null || this.window != window) return;
		this.__onKey(openfl.events.KeyboardEvent.KEY_DOWN,keyCode,modifier);
	}
	,onKeyUp: function(window,keyCode,modifier) {
		if(this.window == null || this.window != window) return;
		this.__onKey(openfl.events.KeyboardEvent.KEY_UP,keyCode,modifier);
	}
	,onModuleExit: function(code) {
		if(this.window != null) {
			var event = new openfl.events.Event(openfl.events.Event.DEACTIVATE);
			this.__broadcast(event,true);
		}
	}
	,onMouseDown: function(window,x,y,button) {
		if(this.window == null || this.window != window) return;
		var type;
		switch(button) {
		case 1:
			type = openfl.events.MouseEvent.MIDDLE_MOUSE_DOWN;
			break;
		case 2:
			type = openfl.events.MouseEvent.RIGHT_MOUSE_DOWN;
			break;
		default:
			type = openfl.events.MouseEvent.MOUSE_DOWN;
		}
		this.__onMouse(type,x,y,button);
	}
	,onMouseMove: function(window,x,y) {
		if(this.window == null || this.window != window) return;
		this.__onMouse(openfl.events.MouseEvent.MOUSE_MOVE,x,y,0);
	}
	,onMouseMoveRelative: function(window,x,y) {
	}
	,onMouseUp: function(window,x,y,button) {
		if(this.window == null || this.window != window) return;
		var type;
		switch(button) {
		case 1:
			type = openfl.events.MouseEvent.MIDDLE_MOUSE_UP;
			break;
		case 2:
			type = openfl.events.MouseEvent.RIGHT_MOUSE_UP;
			break;
		default:
			type = openfl.events.MouseEvent.MOUSE_UP;
		}
		this.__onMouse(type,x,y,button);
	}
	,onMouseWheel: function(window,deltaX,deltaY) {
		if(this.window == null || this.window != window) return;
		this.__onMouseWheel(deltaX,deltaY);
	}
	,onPreloadComplete: function() {
	}
	,onPreloadProgress: function(loaded,total) {
	}
	,onRenderContextLost: function(renderer) {
	}
	,onRenderContextRestored: function(renderer,context) {
	}
	,onTextEdit: function(window,text,start,length) {
	}
	,onTextInput: function(window,text) {
		if(this.window == null || this.window != window) return;
		var stack = new Array();
		if(this.__focus == null) this.__getInteractive(stack); else this.__focus.__getInteractive(stack);
		var event = new openfl.events.TextEvent(openfl.events.TextEvent.TEXT_INPUT,true,false,text);
		if(stack.length > 0) {
			stack.reverse();
			this.__fireEvent(event,stack);
		} else this.__broadcast(event,true);
	}
	,onTouchMove: function(touch) {
		this.__onTouch("touchMove",touch);
	}
	,onTouchEnd: function(touch) {
		this.__onTouch("touchEnd",touch);
	}
	,onTouchStart: function(touch) {
		this.__onTouch("touchBegin",touch);
	}
	,onWindowActivate: function(window) {
		if(this.window == null || this.window != window) return;
		var event = new openfl.events.Event(openfl.events.Event.ACTIVATE);
		this.__broadcast(event,true);
	}
	,onWindowClose: function(window) {
		if(this.window == window) this.window = null;
	}
	,onWindowCreate: function(window) {
		if(this.window == null || this.window != window) return;
		if(window.renderer != null) {
			var _g = window.renderer.context;
			switch(_g[1]) {
			case 0:
				var gl = _g[2];
				this.__renderer = new openfl._internal.renderer.opengl.GLRenderer(this.stageWidth,this.stageHeight,gl);
				break;
			case 1:
				var context = _g[2];
				this.__renderer = new openfl._internal.renderer.canvas.CanvasRenderer(this.stageWidth,this.stageHeight,context);
				break;
			case 2:
				var element = _g[2];
				this.__renderer = new openfl._internal.renderer.dom.DOMRenderer(this.stageWidth,this.stageHeight,element);
				break;
			case 4:
				var cairo = _g[2];
				this.__renderer = new openfl._internal.renderer.cairo.CairoRenderer(this.stageWidth,this.stageHeight,cairo);
				break;
			case 5:
				var ctx = _g[2];
				this.__renderer = new openfl._internal.renderer.console.ConsoleRenderer(this.stageWidth,this.stageHeight,ctx);
				break;
			default:
			}
		}
	}
	,onWindowDeactivate: function(window) {
		if(this.window == null || this.window != window) return;
		var event = new openfl.events.Event(openfl.events.Event.DEACTIVATE);
		this.__broadcast(event,true);
	}
	,onWindowEnter: function(window) {
	}
	,onWindowFocusIn: function(window) {
		if(this.window == null || this.window != window) return;
		var event = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_IN,true,false,null,false,0);
		this.__broadcast(event,true);
	}
	,onWindowFocusOut: function(window) {
		if(this.window == null || this.window != window) return;
		var event = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_OUT,true,false,null,false,0);
		this.__broadcast(event,true);
	}
	,onWindowFullscreen: function(window) {
	}
	,onWindowLeave: function(window) {
		if(this.window == null || this.window != window) return;
		this.__dispatchEvent(new openfl.events.Event(openfl.events.Event.MOUSE_LEAVE));
	}
	,onWindowMinimize: function(window) {
	}
	,onWindowMove: function(window,x,y) {
	}
	,onWindowResize: function(window,width,height) {
		if(this.window == null || this.window != window) return;
		this.stageWidth = width;
		this.stageHeight = height;
		if(this.__renderer != null) this.__renderer.resize(width,height);
		var event = new openfl.events.Event(openfl.events.Event.RESIZE);
		this.__broadcast(event,false);
	}
	,onWindowRestore: function(window) {
	}
	,render: function(renderer) {
		if(renderer.window == null || renderer.window != this.window) return;
		if(this.application != null && this.application.windows.length > 0) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
		}
		if(this.__rendering) return;
		this.__rendering = true;
		this.__broadcast(new openfl.events.Event(openfl.events.Event.ENTER_FRAME),true);
		if(this.__invalidated) {
			this.__invalidated = false;
			this.__broadcast(new openfl.events.Event(openfl.events.Event.RENDER),true);
		}
		this.__renderable = true;
		this.__enterFrame();
		this.__update(false,true);
		if(this.__renderer != null) {
			{
				var _g = renderer.context;
				switch(_g[1]) {
				case 4:
					var cairo = _g[2];
					(js.Boot.__cast(this.__renderer , openfl._internal.renderer.cairo.CairoRenderer)).cairo = cairo;
					this.__renderer.renderSession.cairo = cairo;
					break;
				default:
				}
			}
			this.__renderer.render(this);
		}
		this.__rendering = false;
	}
	,update: function(deltaTime) {
	}
	,__drag: function(mouse) {
		var parent = this.__dragObject.parent;
		if(parent != null) mouse = parent.globalToLocal(mouse);
		var x = mouse.x + this.__dragOffsetX;
		var y = mouse.y + this.__dragOffsetY;
		if(this.__dragBounds != null) {
			if(x < this.__dragBounds.x) x = this.__dragBounds.x; else if(x > this.__dragBounds.get_right()) x = this.__dragBounds.get_right();
			if(y < this.__dragBounds.y) y = this.__dragBounds.y; else if(y > this.__dragBounds.get_bottom()) y = this.__dragBounds.get_bottom();
		}
		this.__dragObject.set_x(x);
		this.__dragObject.set_y(y);
	}
	,__fireEvent: function(event,stack) {
		var length = stack.length;
		if(length == 0) {
			event.eventPhase = openfl.events.EventPhase.AT_TARGET;
			event.target.__broadcast(event,false);
		} else {
			event.eventPhase = openfl.events.EventPhase.CAPTURING_PHASE;
			event.target = stack[stack.length - 1];
			var _g1 = 0;
			var _g = length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				stack[i].__broadcast(event,false);
				if(event.__isCancelled) return;
			}
			event.eventPhase = openfl.events.EventPhase.AT_TARGET;
			event.target.__broadcast(event,false);
			if(event.__isCancelled) return;
			if(event.bubbles) {
				event.eventPhase = openfl.events.EventPhase.BUBBLING_PHASE;
				var i1 = length - 2;
				while(i1 >= 0) {
					stack[i1].__broadcast(event,false);
					if(event.__isCancelled) return;
					i1--;
				}
			}
		}
	}
	,__getInteractive: function(stack) {
		if(stack != null) stack.push(this);
		return true;
	}
	,__onKey: function(type,keyCode,modifier) {
		openfl.events.MouseEvent.__altKey = lime.ui._KeyModifier.KeyModifier_Impl_.get_altKey(modifier);
		openfl.events.MouseEvent.__commandKey = lime.ui._KeyModifier.KeyModifier_Impl_.get_metaKey(modifier);
		openfl.events.MouseEvent.__ctrlKey = lime.ui._KeyModifier.KeyModifier_Impl_.get_ctrlKey(modifier);
		openfl.events.MouseEvent.__shiftKey = lime.ui._KeyModifier.KeyModifier_Impl_.get_shiftKey(modifier);
		var stack = new Array();
		if(this.__focus == null) this.__getInteractive(stack); else this.__focus.__getInteractive(stack);
		if(stack.length > 0) {
			var keyLocation;
			switch(keyCode) {
			case 1073742048:case 1073742049:case 1073742050:case 1073742051:
				keyLocation = 1;
				break;
			case 1073742052:case 1073742053:case 1073742054:case 1073742055:
				keyLocation = 2;
				break;
			case 1073741908:case 1073741909:case 1073741910:case 1073741911:case 1073741912:case 1073741913:case 1073741914:case 1073741915:case 1073741916:case 1073741917:case 1073741918:case 1073741919:case 1073741920:case 1073741921:case 1073741922:case 1073741923:case 1073742044:
				keyLocation = 3;
				break;
			default:
				keyLocation = 0;
			}
			var keyCode1;
			switch(keyCode) {
			case 8:
				keyCode1 = 8;
				break;
			case 9:
				keyCode1 = 9;
				break;
			case 13:
				keyCode1 = 13;
				break;
			case 27:
				keyCode1 = 27;
				break;
			case 32:
				keyCode1 = 32;
				break;
			case 33:
				keyCode1 = 49;
				break;
			case 34:
				keyCode1 = 222;
				break;
			case 35:
				keyCode1 = 51;
				break;
			case 36:
				keyCode1 = 52;
				break;
			case 37:
				keyCode1 = 53;
				break;
			case 38:
				keyCode1 = 55;
				break;
			case 39:
				keyCode1 = 222;
				break;
			case 40:
				keyCode1 = 57;
				break;
			case 41:
				keyCode1 = 48;
				break;
			case 42:
				keyCode1 = 56;
				break;
			case 44:
				keyCode1 = 188;
				break;
			case 45:
				keyCode1 = 189;
				break;
			case 46:
				keyCode1 = 190;
				break;
			case 47:
				keyCode1 = 191;
				break;
			case 48:
				keyCode1 = 48;
				break;
			case 49:
				keyCode1 = 49;
				break;
			case 50:
				keyCode1 = 50;
				break;
			case 51:
				keyCode1 = 51;
				break;
			case 52:
				keyCode1 = 52;
				break;
			case 53:
				keyCode1 = 53;
				break;
			case 54:
				keyCode1 = 54;
				break;
			case 55:
				keyCode1 = 55;
				break;
			case 56:
				keyCode1 = 56;
				break;
			case 57:
				keyCode1 = 57;
				break;
			case 58:
				keyCode1 = 186;
				break;
			case 59:
				keyCode1 = 186;
				break;
			case 60:
				keyCode1 = 60;
				break;
			case 61:
				keyCode1 = 187;
				break;
			case 62:
				keyCode1 = 190;
				break;
			case 63:
				keyCode1 = 191;
				break;
			case 64:
				keyCode1 = 50;
				break;
			case 91:
				keyCode1 = 219;
				break;
			case 92:
				keyCode1 = 220;
				break;
			case 93:
				keyCode1 = 221;
				break;
			case 94:
				keyCode1 = 54;
				break;
			case 95:
				keyCode1 = 189;
				break;
			case 96:
				keyCode1 = 192;
				break;
			case 97:
				keyCode1 = 65;
				break;
			case 98:
				keyCode1 = 66;
				break;
			case 99:
				keyCode1 = 67;
				break;
			case 100:
				keyCode1 = 68;
				break;
			case 101:
				keyCode1 = 69;
				break;
			case 102:
				keyCode1 = 70;
				break;
			case 103:
				keyCode1 = 71;
				break;
			case 104:
				keyCode1 = 72;
				break;
			case 105:
				keyCode1 = 73;
				break;
			case 106:
				keyCode1 = 74;
				break;
			case 107:
				keyCode1 = 75;
				break;
			case 108:
				keyCode1 = 76;
				break;
			case 109:
				keyCode1 = 77;
				break;
			case 110:
				keyCode1 = 78;
				break;
			case 111:
				keyCode1 = 79;
				break;
			case 112:
				keyCode1 = 80;
				break;
			case 113:
				keyCode1 = 81;
				break;
			case 114:
				keyCode1 = 82;
				break;
			case 115:
				keyCode1 = 83;
				break;
			case 116:
				keyCode1 = 84;
				break;
			case 117:
				keyCode1 = 85;
				break;
			case 118:
				keyCode1 = 86;
				break;
			case 119:
				keyCode1 = 87;
				break;
			case 120:
				keyCode1 = 88;
				break;
			case 121:
				keyCode1 = 89;
				break;
			case 122:
				keyCode1 = 90;
				break;
			case 127:
				keyCode1 = 46;
				break;
			case 1073741881:
				keyCode1 = 20;
				break;
			case 1073741882:
				keyCode1 = 112;
				break;
			case 1073741883:
				keyCode1 = 113;
				break;
			case 1073741884:
				keyCode1 = 114;
				break;
			case 1073741885:
				keyCode1 = 115;
				break;
			case 1073741886:
				keyCode1 = 116;
				break;
			case 1073741887:
				keyCode1 = 117;
				break;
			case 1073741888:
				keyCode1 = 118;
				break;
			case 1073741889:
				keyCode1 = 119;
				break;
			case 1073741890:
				keyCode1 = 120;
				break;
			case 1073741891:
				keyCode1 = 121;
				break;
			case 1073741892:
				keyCode1 = 122;
				break;
			case 1073741893:
				keyCode1 = 123;
				break;
			case 1073741894:
				keyCode1 = 301;
				break;
			case 1073741895:
				keyCode1 = 145;
				break;
			case 1073741896:
				keyCode1 = 19;
				break;
			case 1073741897:
				keyCode1 = 45;
				break;
			case 1073741898:
				keyCode1 = 36;
				break;
			case 1073741899:
				keyCode1 = 33;
				break;
			case 1073741901:
				keyCode1 = 35;
				break;
			case 1073741902:
				keyCode1 = 34;
				break;
			case 1073741903:
				keyCode1 = 39;
				break;
			case 1073741904:
				keyCode1 = 37;
				break;
			case 1073741905:
				keyCode1 = 40;
				break;
			case 1073741906:
				keyCode1 = 38;
				break;
			case 1073741907:
				keyCode1 = 144;
				break;
			case 1073741908:
				keyCode1 = 111;
				break;
			case 1073741909:
				keyCode1 = 106;
				break;
			case 1073741910:
				keyCode1 = 109;
				break;
			case 1073741911:
				keyCode1 = 107;
				break;
			case 1073741912:
				keyCode1 = 108;
				break;
			case 1073741913:
				keyCode1 = 97;
				break;
			case 1073741914:
				keyCode1 = 98;
				break;
			case 1073741915:
				keyCode1 = 99;
				break;
			case 1073741916:
				keyCode1 = 100;
				break;
			case 1073741917:
				keyCode1 = 101;
				break;
			case 1073741918:
				keyCode1 = 102;
				break;
			case 1073741919:
				keyCode1 = 103;
				break;
			case 1073741920:
				keyCode1 = 104;
				break;
			case 1073741921:
				keyCode1 = 105;
				break;
			case 1073741922:
				keyCode1 = 96;
				break;
			case 1073741923:
				keyCode1 = 110;
				break;
			case 1073741925:
				keyCode1 = 302;
				break;
			case 1073741928:
				keyCode1 = 124;
				break;
			case 1073741929:
				keyCode1 = 125;
				break;
			case 1073741930:
				keyCode1 = 126;
				break;
			case 1073741982:
				keyCode1 = 13;
				break;
			case 1073742044:
				keyCode1 = 110;
				break;
			case 1073742048:
				keyCode1 = 17;
				break;
			case 1073742049:
				keyCode1 = 16;
				break;
			case 1073742050:
				keyCode1 = 18;
				break;
			case 1073742051:
				keyCode1 = 15;
				break;
			case 1073742052:
				keyCode1 = 17;
				break;
			case 1073742053:
				keyCode1 = 16;
				break;
			case 1073742054:
				keyCode1 = 18;
				break;
			case 1073742055:
				keyCode1 = 15;
				break;
			default:
				keyCode1 = keyCode;
			}
			var charCode = openfl.ui.Keyboard.__getCharCode(keyCode1,lime.ui._KeyModifier.KeyModifier_Impl_.get_shiftKey(modifier));
			var event = new openfl.events.KeyboardEvent(type,true,false,charCode,keyCode1,keyLocation,lime.ui._KeyModifier.KeyModifier_Impl_.get_ctrlKey(modifier),lime.ui._KeyModifier.KeyModifier_Impl_.get_altKey(modifier),lime.ui._KeyModifier.KeyModifier_Impl_.get_shiftKey(modifier),lime.ui._KeyModifier.KeyModifier_Impl_.get_metaKey(modifier));
			stack.reverse();
			this.__fireEvent(event,stack);
		}
	}
	,__onMouse: function(type,x,y,button) {
		if(button > 2) return;
		this.__mouseX = x;
		this.__mouseY = y;
		var stack = [];
		var target = null;
		var targetPoint = new openfl.geom.Point(x,y);
		if(this.__hitTest(x,y,true,stack,true)) target = stack[stack.length - 1]; else {
			target = this;
			stack = [this];
		}
		if(target == null) target = this;
		if(type == openfl.events.MouseEvent.MOUSE_DOWN) {
			if(target.get_tabEnabled()) this.set_focus(target); else this.set_focus(null);
		}
		this.__fireEvent(openfl.events.MouseEvent.__create(type,button,this.__mouseX,this.__mouseY,target == this?targetPoint:target.globalToLocal(targetPoint),target),stack);
		var clickType;
		switch(type) {
		case openfl.events.MouseEvent.MOUSE_UP:
			clickType = openfl.events.MouseEvent.CLICK;
			break;
		case openfl.events.MouseEvent.MIDDLE_MOUSE_UP:
			clickType = openfl.events.MouseEvent.MIDDLE_CLICK;
			break;
		case openfl.events.MouseEvent.RIGHT_MOUSE_UP:
			clickType = openfl.events.MouseEvent.RIGHT_CLICK;
			break;
		default:
			clickType = null;
		}
		if(clickType != null) {
			this.__fireEvent(openfl.events.MouseEvent.__create(clickType,button,this.__mouseX,this.__mouseY,target == this?targetPoint:target.globalToLocal(targetPoint),target),stack);
			if(type == openfl.events.MouseEvent.MOUSE_UP && (js.Boot.__cast(target , openfl.display.InteractiveObject)).doubleClickEnabled) {
				var currentTime = openfl.Lib.getTimer();
				if(currentTime - this.__lastClickTime < 500) {
					this.__fireEvent(openfl.events.MouseEvent.__create(openfl.events.MouseEvent.DOUBLE_CLICK,button,this.__mouseX,this.__mouseY,target == this?targetPoint:target.globalToLocal(targetPoint),target),stack);
					this.__lastClickTime = 0;
				} else this.__lastClickTime = currentTime;
			}
		}
		var cursor = null;
		var _g = 0;
		while(_g < stack.length) {
			var target1 = stack[_g];
			++_g;
			cursor = target1.__getCursor();
			if(cursor != null) {
				lime.ui.Mouse.set_cursor(cursor);
				break;
			}
		}
		if(cursor == null) lime.ui.Mouse.set_cursor(lime.ui.MouseCursor.ARROW);
		var _g1 = 0;
		var _g11 = this.__mouseOutStack;
		while(_g1 < _g11.length) {
			var target2 = _g11[_g1];
			++_g1;
			if(HxOverrides.indexOf(stack,target2,0) == -1) {
				HxOverrides.remove(this.__mouseOutStack,target2);
				var localPoint = target2.globalToLocal(targetPoint);
				target2.__dispatchEvent(new openfl.events.MouseEvent(openfl.events.MouseEvent.MOUSE_OUT,false,false,localPoint.x,localPoint.y,target2));
			}
		}
		var _g2 = 0;
		while(_g2 < stack.length) {
			var target3 = stack[_g2];
			++_g2;
			if(HxOverrides.indexOf(this.__mouseOutStack,target3,0) == -1) {
				if(target3.hasEventListener(openfl.events.MouseEvent.MOUSE_OVER)) {
					var localPoint1 = target3.globalToLocal(targetPoint);
					target3.__dispatchEvent(new openfl.events.MouseEvent(openfl.events.MouseEvent.MOUSE_OVER,false,false,localPoint1.x,localPoint1.y,target3));
				}
				if(target3.hasEventListener(openfl.events.MouseEvent.MOUSE_OUT)) this.__mouseOutStack.push(target3);
			}
		}
		if(this.__dragObject != null) this.__drag(targetPoint);
	}
	,__onMouseWheel: function(deltaX,deltaY) {
		var x = this.__mouseX;
		var y = this.__mouseY;
		var stack = [];
		if(!this.__hitTest(x,y,false,stack,true)) stack = [this];
		var target = stack[stack.length - 1];
		var targetPoint = new openfl.geom.Point(x,y);
		var delta = deltaY | 0;
		this.__fireEvent(openfl.events.MouseEvent.__create(openfl.events.MouseEvent.MOUSE_WHEEL,0,this.__mouseX,this.__mouseY,target == this?targetPoint:target.globalToLocal(targetPoint),target,delta),stack);
	}
	,__onTouch: function(type,touch) {
		var point = new openfl.geom.Point(touch.x * this.stageWidth,touch.y * this.stageHeight);
		this.__mouseX = point.x;
		this.__mouseY = point.y;
		var __stack = [];
		if(this.__hitTest(touch.x,touch.y,false,__stack,true)) {
			var target = __stack[__stack.length - 1];
			if(target == null) target = this;
			var localPoint = target.globalToLocal(point);
			var touchEvent = openfl.events.TouchEvent.__create(type,null,this.__mouseX,this.__mouseY,localPoint,target);
			touchEvent.touchPointID = touch.id;
			touchEvent.isPrimaryTouchPoint = true;
			this.__fireEvent(touchEvent,__stack);
		} else {
			var touchEvent1 = openfl.events.TouchEvent.__create(type,null,this.__mouseX,this.__mouseY,point,this);
			touchEvent1.touchPointID = touch.id;
			touchEvent1.isPrimaryTouchPoint = true;
			this.__fireEvent(touchEvent1,[this.stage]);
		}
	}
	,__update: function(transformOnly,updateChildren,maskGrahpics) {
		if(transformOnly) {
			if(openfl.display.DisplayObject.__worldTransformDirty > 0) {
				openfl.display.DisplayObjectContainer.prototype.__update.call(this,true,updateChildren,maskGrahpics);
				if(updateChildren) {
					openfl.display.DisplayObject.__worldTransformDirty = 0;
					this.__dirty = true;
				}
			}
		} else if(openfl.display.DisplayObject.__worldTransformDirty > 0 || this.__dirty || openfl.display.DisplayObject.__worldRenderDirty > 0) {
			openfl.display.DisplayObjectContainer.prototype.__update.call(this,false,updateChildren,maskGrahpics);
			if(updateChildren) {
				openfl.display.DisplayObject.__worldTransformDirty = 0;
				openfl.display.DisplayObject.__worldRenderDirty = 0;
				this.__dirty = false;
			}
		}
	}
	,get_mouseX: function() {
		return this.__mouseX;
	}
	,get_mouseY: function() {
		return this.__mouseY;
	}
	,set_color: function(value) {
		var r = (value & 16711680) >>> 16;
		var g = (value & 65280) >>> 8;
		var b = value & 255;
		this.__colorSplit = [r / 255,g / 255,b / 255];
		this.__colorString = "#" + StringTools.hex(value,6);
		return this.__color = value;
	}
	,set_displayState: function(value) {
		if(this.window != null) switch(value[1]) {
		case 0:
			this.window.set_fullscreen(false);
			break;
		default:
			this.window.set_fullscreen(true);
		}
		return this.__displayState = value;
	}
	,get_focus: function() {
		return this.__focus;
	}
	,set_focus: function(value) {
		if(value != this.__focus) {
			var oldFocus = this.__focus;
			this.__focus = value;
			if(oldFocus != null) {
				var event = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_OUT,true,false,this.__focus,false,0);
				this.__stack = [];
				oldFocus.__getInteractive(this.__stack);
				this.__stack.reverse();
				this.__fireEvent(event,this.__stack);
			}
			if(this.__focus != null) {
				var event1 = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_IN,true,false,oldFocus,false,0);
				this.__stack = [];
				value.__getInteractive(this.__stack);
				this.__stack.reverse();
				this.__fireEvent(event1,this.__stack);
			}
		}
		return this.__focus;
	}
	,__class__: openfl.display.Stage
});
openfl.display.Stage3D = function() {
	openfl.events.EventDispatcher.call(this);
};
$hxClasses["openfl.display.Stage3D"] = openfl.display.Stage3D;
openfl.display.Stage3D.__name__ = true;
openfl.display.Stage3D.__super__ = openfl.events.EventDispatcher;
openfl.display.Stage3D.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	__class__: openfl.display.Stage3D
});
openfl.display.StageAlign = $hxClasses["openfl.display.StageAlign"] = { __ename__ : true, __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] };
openfl.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
openfl.display.StageAlign.TOP_RIGHT.toString = $estr;
openfl.display.StageAlign.TOP_RIGHT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
openfl.display.StageAlign.TOP_LEFT.toString = $estr;
openfl.display.StageAlign.TOP_LEFT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.TOP = ["TOP",2];
openfl.display.StageAlign.TOP.toString = $estr;
openfl.display.StageAlign.TOP.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.RIGHT = ["RIGHT",3];
openfl.display.StageAlign.RIGHT.toString = $estr;
openfl.display.StageAlign.RIGHT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.LEFT = ["LEFT",4];
openfl.display.StageAlign.LEFT.toString = $estr;
openfl.display.StageAlign.LEFT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
openfl.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
openfl.display.StageAlign.BOTTOM_RIGHT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
openfl.display.StageAlign.BOTTOM_LEFT.toString = $estr;
openfl.display.StageAlign.BOTTOM_LEFT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.BOTTOM = ["BOTTOM",7];
openfl.display.StageAlign.BOTTOM.toString = $estr;
openfl.display.StageAlign.BOTTOM.__enum__ = openfl.display.StageAlign;
openfl.display.StageDisplayState = $hxClasses["openfl.display.StageDisplayState"] = { __ename__ : true, __constructs__ : ["NORMAL","FULL_SCREEN","FULL_SCREEN_INTERACTIVE"] };
openfl.display.StageDisplayState.NORMAL = ["NORMAL",0];
openfl.display.StageDisplayState.NORMAL.toString = $estr;
openfl.display.StageDisplayState.NORMAL.__enum__ = openfl.display.StageDisplayState;
openfl.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",1];
openfl.display.StageDisplayState.FULL_SCREEN.toString = $estr;
openfl.display.StageDisplayState.FULL_SCREEN.__enum__ = openfl.display.StageDisplayState;
openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",2];
openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = openfl.display.StageDisplayState;
openfl.display.StageQuality = $hxClasses["openfl.display.StageQuality"] = { __ename__ : true, __constructs__ : ["BEST","HIGH","MEDIUM","LOW"] };
openfl.display.StageQuality.BEST = ["BEST",0];
openfl.display.StageQuality.BEST.toString = $estr;
openfl.display.StageQuality.BEST.__enum__ = openfl.display.StageQuality;
openfl.display.StageQuality.HIGH = ["HIGH",1];
openfl.display.StageQuality.HIGH.toString = $estr;
openfl.display.StageQuality.HIGH.__enum__ = openfl.display.StageQuality;
openfl.display.StageQuality.MEDIUM = ["MEDIUM",2];
openfl.display.StageQuality.MEDIUM.toString = $estr;
openfl.display.StageQuality.MEDIUM.__enum__ = openfl.display.StageQuality;
openfl.display.StageQuality.LOW = ["LOW",3];
openfl.display.StageQuality.LOW.toString = $estr;
openfl.display.StageQuality.LOW.__enum__ = openfl.display.StageQuality;
openfl.display.StageScaleMode = $hxClasses["openfl.display.StageScaleMode"] = { __ename__ : true, __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] };
openfl.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
openfl.display.StageScaleMode.SHOW_ALL.toString = $estr;
openfl.display.StageScaleMode.SHOW_ALL.__enum__ = openfl.display.StageScaleMode;
openfl.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
openfl.display.StageScaleMode.NO_SCALE.toString = $estr;
openfl.display.StageScaleMode.NO_SCALE.__enum__ = openfl.display.StageScaleMode;
openfl.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
openfl.display.StageScaleMode.NO_BORDER.toString = $estr;
openfl.display.StageScaleMode.NO_BORDER.__enum__ = openfl.display.StageScaleMode;
openfl.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
openfl.display.StageScaleMode.EXACT_FIT.toString = $estr;
openfl.display.StageScaleMode.EXACT_FIT.__enum__ = openfl.display.StageScaleMode;
openfl.display.Tilesheet = function() { };
$hxClasses["openfl.display.Tilesheet"] = openfl.display.Tilesheet;
openfl.display.Tilesheet.__name__ = true;
openfl.display.Tilesheet.prototype = {
	__class__: openfl.display.Tilesheet
};
openfl.display.TriangleCulling = $hxClasses["openfl.display.TriangleCulling"] = { __ename__ : true, __constructs__ : ["NEGATIVE","NONE","POSITIVE"] };
openfl.display.TriangleCulling.NEGATIVE = ["NEGATIVE",0];
openfl.display.TriangleCulling.NEGATIVE.toString = $estr;
openfl.display.TriangleCulling.NEGATIVE.__enum__ = openfl.display.TriangleCulling;
openfl.display.TriangleCulling.NONE = ["NONE",1];
openfl.display.TriangleCulling.NONE.toString = $estr;
openfl.display.TriangleCulling.NONE.__enum__ = openfl.display.TriangleCulling;
openfl.display.TriangleCulling.POSITIVE = ["POSITIVE",2];
openfl.display.TriangleCulling.POSITIVE.toString = $estr;
openfl.display.TriangleCulling.POSITIVE.__enum__ = openfl.display.TriangleCulling;
openfl.display.Window = function(config) {
	lime.ui.Window.call(this,config);
};
$hxClasses["openfl.display.Window"] = openfl.display.Window;
openfl.display.Window.__name__ = true;
openfl.display.Window.__super__ = lime.ui.Window;
openfl.display.Window.prototype = $extend(lime.ui.Window.prototype,{
	create: function(application) {
		lime.ui.Window.prototype.create.call(this,application);
		this.stage = new openfl.display.Stage(this,Object.prototype.hasOwnProperty.call(this.config,"background")?this.config.background:16777215);
		application.addModule(this.stage);
	}
	,__class__: openfl.display.Window
});
openfl.errors = {};
openfl.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
	this.name = "Error";
};
$hxClasses["openfl.errors.Error"] = openfl.errors.Error;
openfl.errors.Error.__name__ = true;
openfl.errors.Error.prototype = {
	toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,__class__: openfl.errors.Error
};
openfl.events.Event = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
	this.eventPhase = openfl.events.EventPhase.AT_TARGET;
};
$hxClasses["openfl.events.Event"] = openfl.events.Event;
openfl.events.Event.__name__ = true;
openfl.events.Event.prototype = {
	__class__: openfl.events.Event
};
openfl.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["openfl.events.TextEvent"] = openfl.events.TextEvent;
openfl.events.TextEvent.__name__ = true;
openfl.events.TextEvent.__super__ = openfl.events.Event;
openfl.events.TextEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.TextEvent
});
openfl.events.ErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.TextEvent.call(this,type,bubbles,cancelable,text);
	this.errorID = id;
};
$hxClasses["openfl.events.ErrorEvent"] = openfl.events.ErrorEvent;
openfl.events.ErrorEvent.__name__ = true;
openfl.events.ErrorEvent.__super__ = openfl.events.TextEvent;
openfl.events.ErrorEvent.prototype = $extend(openfl.events.TextEvent.prototype,{
	__class__: openfl.events.ErrorEvent
});
openfl.events._EventDispatcher = {};
openfl.events._EventDispatcher.Listener = function(callback,useCapture,priority) {
	this.callback = callback;
	this.useCapture = useCapture;
	this.priority = priority;
};
$hxClasses["openfl.events._EventDispatcher.Listener"] = openfl.events._EventDispatcher.Listener;
openfl.events._EventDispatcher.Listener.__name__ = true;
openfl.events._EventDispatcher.Listener.prototype = {
	match: function(callback,useCapture) {
		return Reflect.compareMethods(this.callback,callback) && this.useCapture == useCapture;
	}
	,__class__: openfl.events._EventDispatcher.Listener
};
openfl.events.EventPhase = $hxClasses["openfl.events.EventPhase"] = { __ename__ : true, __constructs__ : ["CAPTURING_PHASE","AT_TARGET","BUBBLING_PHASE"] };
openfl.events.EventPhase.CAPTURING_PHASE = ["CAPTURING_PHASE",0];
openfl.events.EventPhase.CAPTURING_PHASE.toString = $estr;
openfl.events.EventPhase.CAPTURING_PHASE.__enum__ = openfl.events.EventPhase;
openfl.events.EventPhase.AT_TARGET = ["AT_TARGET",1];
openfl.events.EventPhase.AT_TARGET.toString = $estr;
openfl.events.EventPhase.AT_TARGET.__enum__ = openfl.events.EventPhase;
openfl.events.EventPhase.BUBBLING_PHASE = ["BUBBLING_PHASE",2];
openfl.events.EventPhase.BUBBLING_PHASE.toString = $estr;
openfl.events.EventPhase.BUBBLING_PHASE.__enum__ = openfl.events.EventPhase;
openfl.events.FocusEvent = function(type,bubbles,cancelable,relatedObject,shiftKey,keyCode) {
	if(keyCode == null) keyCode = 0;
	if(shiftKey == null) shiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = keyCode;
	this.shiftKey = shiftKey;
	this.relatedObject = relatedObject;
};
$hxClasses["openfl.events.FocusEvent"] = openfl.events.FocusEvent;
openfl.events.FocusEvent.__name__ = true;
openfl.events.FocusEvent.__super__ = openfl.events.Event;
openfl.events.FocusEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.FocusEvent
});
openfl.events.GameInputEvent = function(type,bubbles,cancelable,device) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.device = device;
};
$hxClasses["openfl.events.GameInputEvent"] = openfl.events.GameInputEvent;
openfl.events.GameInputEvent.__name__ = true;
openfl.events.GameInputEvent.__super__ = openfl.events.Event;
openfl.events.GameInputEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.GameInputEvent
});
openfl.events.IOErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.ErrorEvent.call(this,type,bubbles,cancelable,text,id);
};
$hxClasses["openfl.events.IOErrorEvent"] = openfl.events.IOErrorEvent;
openfl.events.IOErrorEvent.__name__ = true;
openfl.events.IOErrorEvent.__super__ = openfl.events.ErrorEvent;
openfl.events.IOErrorEvent.prototype = $extend(openfl.events.ErrorEvent.prototype,{
	__class__: openfl.events.IOErrorEvent
});
openfl.events.KeyboardEvent = function(type,bubbles,cancelable,charCodeValue,keyCodeValue,keyLocationValue,ctrlKeyValue,altKeyValue,shiftKeyValue,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(shiftKeyValue == null) shiftKeyValue = false;
	if(altKeyValue == null) altKeyValue = false;
	if(ctrlKeyValue == null) ctrlKeyValue = false;
	if(keyCodeValue == null) keyCodeValue = 0;
	if(charCodeValue == null) charCodeValue = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.charCode = charCodeValue;
	this.keyCode = keyCodeValue;
	if(keyLocationValue != null) this.keyLocation = keyLocationValue; else this.keyLocation = 0;
	this.ctrlKey = ctrlKeyValue;
	this.altKey = altKeyValue;
	this.shiftKey = shiftKeyValue;
	this.controlKey = controlKeyValue;
	this.commandKey = commandKeyValue;
};
$hxClasses["openfl.events.KeyboardEvent"] = openfl.events.KeyboardEvent;
openfl.events.KeyboardEvent.__name__ = true;
openfl.events.KeyboardEvent.__super__ = openfl.events.Event;
openfl.events.KeyboardEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.KeyboardEvent
});
openfl.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["openfl.events.MouseEvent"] = openfl.events.MouseEvent;
openfl.events.MouseEvent.__name__ = true;
openfl.events.MouseEvent.__altKey = null;
openfl.events.MouseEvent.__buttonDown = null;
openfl.events.MouseEvent.__commandKey = null;
openfl.events.MouseEvent.__ctrlKey = null;
openfl.events.MouseEvent.__shiftKey = null;
openfl.events.MouseEvent.__create = function(type,button,stageX,stageY,local,target,delta) {
	if(delta == null) delta = 0;
	switch(type) {
	case openfl.events.MouseEvent.MOUSE_DOWN:
		openfl.events.MouseEvent.__buttonDown = true;
		break;
	case openfl.events.MouseEvent.MOUSE_UP:
		openfl.events.MouseEvent.__buttonDown = false;
		break;
	default:
	}
	var event = new openfl.events.MouseEvent(type,true,false,local.x,local.y,null,openfl.events.MouseEvent.__ctrlKey,openfl.events.MouseEvent.__altKey,openfl.events.MouseEvent.__shiftKey,openfl.events.MouseEvent.__buttonDown,delta,openfl.events.MouseEvent.__commandKey);
	event.stageX = stageX;
	event.stageY = stageY;
	event.target = target;
	return event;
};
openfl.events.MouseEvent.__super__ = openfl.events.Event;
openfl.events.MouseEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.MouseEvent
});
openfl.events.TimerEvent = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["openfl.events.TimerEvent"] = openfl.events.TimerEvent;
openfl.events.TimerEvent.__name__ = true;
openfl.events.TimerEvent.__super__ = openfl.events.Event;
openfl.events.TimerEvent.prototype = $extend(openfl.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__class__: openfl.events.TimerEvent
});
openfl.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,sizeX,sizeY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(sizeY == null) sizeY = 1;
	if(sizeX == null) sizeX = 1;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.pressure = 1;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["openfl.events.TouchEvent"] = openfl.events.TouchEvent;
openfl.events.TouchEvent.__name__ = true;
openfl.events.TouchEvent.__create = function(type,touch,stageX,stageY,local,target) {
	var evt = new openfl.events.TouchEvent(type,true,false,local.x,local.y,1,1,null,false,false,false,false,0,false,0);
	evt.stageX = stageX;
	evt.stageY = stageY;
	evt.target = target;
	return evt;
};
openfl.events.TouchEvent.__super__ = openfl.events.Event;
openfl.events.TouchEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.TouchEvent
});
openfl.external = {};
openfl.external.ExternalInterface = function() { };
$hxClasses["openfl.external.ExternalInterface"] = openfl.external.ExternalInterface;
openfl.external.ExternalInterface.__name__ = true;
openfl.external.ExternalInterface.addCallback = function(functionName,closure) {
	if(openfl.Lib.application.windows[0].backend.element != null) openfl.Lib.application.windows[0].backend.element[functionName] = closure;
};
openfl.external.ExternalInterface.call = function(functionName,p1,p2,p3,p4,p5) {
	var callResponse = null;
	var thisArg = functionName.split(".").slice(0,-1).join(".");
	if(thisArg.length > 0) functionName += ".bind(" + thisArg + ")";
	if(p1 == null) callResponse = eval(functionName)(); else if(p2 == null) callResponse = eval(functionName)(p1); else if(p3 == null) callResponse = eval(functionName)(p1,p2); else if(p4 == null) callResponse = eval(functionName)(p1,p2,p3); else if(p5 == null) callResponse = eval(functionName)(p1,p2,p3,p4); else callResponse = eval(functionName)(p1,p2,p3,p4,p5);
	return callResponse;
};
openfl.geom.Transform = function(displayObject) {
	this.__colorTransform = new openfl.geom.ColorTransform();
	this.concatenatedColorTransform = new openfl.geom.ColorTransform();
	this.concatenatedMatrix = new openfl.geom.Matrix();
	this.pixelBounds = new openfl.geom.Rectangle();
	this.__displayObject = displayObject;
	this.__hasMatrix = true;
};
$hxClasses["openfl.geom.Transform"] = openfl.geom.Transform;
openfl.geom.Transform.__name__ = true;
openfl.geom.Transform.prototype = {
	get_colorTransform: function() {
		return this.__colorTransform;
	}
	,__class__: openfl.geom.Transform
};
openfl.media = {};
openfl.media.ID3Info = function() { };
$hxClasses["openfl.media.ID3Info"] = openfl.media.ID3Info;
openfl.media.ID3Info.__name__ = true;
openfl.media.Sound = function(stream,context) {
	openfl.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.url = null;
	if(stream != null) this.load(stream,context);
};
$hxClasses["openfl.media.Sound"] = openfl.media.Sound;
openfl.media.Sound.__name__ = true;
openfl.media.Sound.__super__ = openfl.events.EventDispatcher;
openfl.media.Sound.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	load: function(stream,context) {
		this.url = stream.url;
		this.__soundID = haxe.io.Path.withoutExtension(stream.url);
		if(!openfl.media.Sound.__registeredSounds.exists(this.__soundID)) {
			openfl.media.Sound.__registeredSounds.set(this.__soundID,true);
			createjs.Sound.addEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			createjs.Sound.addEventListener("fileerror",$bind(this,this.SoundJS_onFileError));
			createjs.Sound.registerSound(this.url,this.__soundID);
		} else this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
	}
	,SoundJS_onFileLoad: function(event) {
		if(event.id == this.__soundID) {
			createjs.Sound.removeEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			createjs.Sound.removeEventListener("fileerror",$bind(this,this.SoundJS_onFileError));
			this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
		}
	}
	,SoundJS_onFileError: function(event) {
		if(event.id == this.__soundID) {
			createjs.Sound.removeEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			createjs.Sound.removeEventListener("fileerror",$bind(this,this.SoundJS_onFileError));
			this.dispatchEvent(new openfl.events.IOErrorEvent(openfl.events.IOErrorEvent.IO_ERROR));
		}
	}
	,__class__: openfl.media.Sound
});
openfl.media.SoundLoaderContext = function() { };
$hxClasses["openfl.media.SoundLoaderContext"] = openfl.media.SoundLoaderContext;
openfl.media.SoundLoaderContext.__name__ = true;
openfl.net = {};
openfl.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = "GET";
	this.contentType = null;
};
$hxClasses["openfl.net.URLRequest"] = openfl.net.URLRequest;
openfl.net.URLRequest.__name__ = true;
openfl.net.URLRequest.prototype = {
	__class__: openfl.net.URLRequest
};
openfl.net.URLRequestHeader = function() { };
$hxClasses["openfl.net.URLRequestHeader"] = openfl.net.URLRequestHeader;
openfl.net.URLRequestHeader.__name__ = true;
openfl.system.Capabilities = function() { };
$hxClasses["openfl.system.Capabilities"] = openfl.system.Capabilities;
openfl.system.Capabilities.__name__ = true;
openfl.system.Capabilities.get_screenResolutionX = function() {
	var $window = openfl.Lib.application.windows[0];
	if($window != null) {
		var display = $window.get_display();
		if(display != null) return display.currentMode.width;
	}
	return 0;
};
openfl.system.Capabilities.get_screenResolutionY = function() {
	var $window = openfl.Lib.application.windows[0];
	if($window != null) {
		var display = $window.get_display();
		if(display != null) return display.currentMode.height;
	}
	return 0;
};
openfl.text.AntiAliasType = $hxClasses["openfl.text.AntiAliasType"] = { __ename__ : true, __constructs__ : ["ADVANCED","NORMAL"] };
openfl.text.AntiAliasType.ADVANCED = ["ADVANCED",0];
openfl.text.AntiAliasType.ADVANCED.toString = $estr;
openfl.text.AntiAliasType.ADVANCED.__enum__ = openfl.text.AntiAliasType;
openfl.text.AntiAliasType.NORMAL = ["NORMAL",1];
openfl.text.AntiAliasType.NORMAL.toString = $estr;
openfl.text.AntiAliasType.NORMAL.__enum__ = openfl.text.AntiAliasType;
openfl.text.Font = function(name) {
	lime.text.Font.call(this,name);
};
$hxClasses["openfl.text.Font"] = openfl.text.Font;
openfl.text.Font.__name__ = true;
openfl.text.Font.__fromLimeFont = function(value) {
	var font = new openfl.text.Font();
	font.name = value.name;
	font.src = value.src;
	return font;
};
openfl.text.Font.__super__ = lime.text.Font;
openfl.text.Font.prototype = $extend(lime.text.Font.prototype,{
	__class__: openfl.text.Font
});
openfl.text.GridFitType = $hxClasses["openfl.text.GridFitType"] = { __ename__ : true, __constructs__ : ["NONE","PIXEL","SUBPIXEL"] };
openfl.text.GridFitType.NONE = ["NONE",0];
openfl.text.GridFitType.NONE.toString = $estr;
openfl.text.GridFitType.NONE.__enum__ = openfl.text.GridFitType;
openfl.text.GridFitType.PIXEL = ["PIXEL",1];
openfl.text.GridFitType.PIXEL.toString = $estr;
openfl.text.GridFitType.PIXEL.__enum__ = openfl.text.GridFitType;
openfl.text.GridFitType.SUBPIXEL = ["SUBPIXEL",2];
openfl.text.GridFitType.SUBPIXEL.toString = $estr;
openfl.text.GridFitType.SUBPIXEL.__enum__ = openfl.text.GridFitType;
openfl.text.TextFieldAutoSize = $hxClasses["openfl.text.TextFieldAutoSize"] = { __ename__ : true, __constructs__ : ["CENTER","LEFT","NONE","RIGHT"] };
openfl.text.TextFieldAutoSize.CENTER = ["CENTER",0];
openfl.text.TextFieldAutoSize.CENTER.toString = $estr;
openfl.text.TextFieldAutoSize.CENTER.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldAutoSize.LEFT = ["LEFT",1];
openfl.text.TextFieldAutoSize.LEFT.toString = $estr;
openfl.text.TextFieldAutoSize.LEFT.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldAutoSize.NONE = ["NONE",2];
openfl.text.TextFieldAutoSize.NONE.toString = $estr;
openfl.text.TextFieldAutoSize.NONE.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldAutoSize.RIGHT = ["RIGHT",3];
openfl.text.TextFieldAutoSize.RIGHT.toString = $estr;
openfl.text.TextFieldAutoSize.RIGHT.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldType = $hxClasses["openfl.text.TextFieldType"] = { __ename__ : true, __constructs__ : ["DYNAMIC","INPUT"] };
openfl.text.TextFieldType.DYNAMIC = ["DYNAMIC",0];
openfl.text.TextFieldType.DYNAMIC.toString = $estr;
openfl.text.TextFieldType.DYNAMIC.__enum__ = openfl.text.TextFieldType;
openfl.text.TextFieldType.INPUT = ["INPUT",1];
openfl.text.TextFieldType.INPUT.toString = $estr;
openfl.text.TextFieldType.INPUT.__enum__ = openfl.text.TextFieldType;
openfl.text.TextFormat = function(font,size,color,bold,italic,underline,url,target,align,leftMargin,rightMargin,indent,leading) {
	this.font = font;
	this.size = size;
	this.color = color;
	this.bold = bold;
	this.italic = italic;
	this.underline = underline;
	this.url = url;
	this.target = target;
	this.align = align;
	this.leftMargin = leftMargin;
	this.rightMargin = rightMargin;
	this.indent = indent;
	this.leading = leading;
};
$hxClasses["openfl.text.TextFormat"] = openfl.text.TextFormat;
openfl.text.TextFormat.__name__ = true;
openfl.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new openfl.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,__merge: function(format) {
		if(format.font != null) this.font = format.font;
		if(format.size != null) this.size = format.size;
		if(format.color != null) this.color = format.color;
		if(format.bold != null) this.bold = format.bold;
		if(format.italic != null) this.italic = format.italic;
		if(format.underline != null) this.underline = format.underline;
		if(format.url != null) this.url = format.url;
		if(format.target != null) this.target = format.target;
		if(format.align != null) this.align = format.align;
		if(format.leftMargin != null) this.leftMargin = format.leftMargin;
		if(format.rightMargin != null) this.rightMargin = format.rightMargin;
		if(format.indent != null) this.indent = format.indent;
		if(format.leading != null) this.leading = format.leading;
		if(format.blockIndent != null) this.blockIndent = format.blockIndent;
		if(format.bullet != null) this.bullet = format.bullet;
		if(format.kerning != null) this.kerning = format.kerning;
		if(format.letterSpacing != null) this.letterSpacing = format.letterSpacing;
		if(format.tabStops != null) this.tabStops = format.tabStops;
	}
	,__class__: openfl.text.TextFormat
};
openfl.text.TextFormatAlign = $hxClasses["openfl.text.TextFormatAlign"] = { __ename__ : true, __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] };
openfl.text.TextFormatAlign.LEFT = ["LEFT",0];
openfl.text.TextFormatAlign.LEFT.toString = $estr;
openfl.text.TextFormatAlign.LEFT.__enum__ = openfl.text.TextFormatAlign;
openfl.text.TextFormatAlign.RIGHT = ["RIGHT",1];
openfl.text.TextFormatAlign.RIGHT.toString = $estr;
openfl.text.TextFormatAlign.RIGHT.__enum__ = openfl.text.TextFormatAlign;
openfl.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
openfl.text.TextFormatAlign.JUSTIFY.toString = $estr;
openfl.text.TextFormatAlign.JUSTIFY.__enum__ = openfl.text.TextFormatAlign;
openfl.text.TextFormatAlign.CENTER = ["CENTER",3];
openfl.text.TextFormatAlign.CENTER.toString = $estr;
openfl.text.TextFormatAlign.CENTER.__enum__ = openfl.text.TextFormatAlign;
openfl.ui = {};
openfl.ui.GameInput = function() { };
$hxClasses["openfl.ui.GameInput"] = openfl.ui.GameInput;
openfl.ui.GameInput.__name__ = true;
openfl.ui.GameInput.__getDevice = function(gamepad) {
	if(gamepad == null) return null;
	if(!(openfl.ui.GameInput.__devices.h.__keys__[gamepad.__id__] != null)) {
		var device = new openfl.ui.GameInputDevice(gamepad.id == null?"null":"" + gamepad.id,null);
		openfl.ui.GameInput.__devices.set(gamepad,device);
		openfl.ui.GameInput.numDevices = Lambda.count(openfl.ui.GameInput.__devices);
	}
	return openfl.ui.GameInput.__devices.h[gamepad.__id__];
};
openfl.ui.GameInput.__onGamepadAxisMove = function(gamepad,axis,value) {
	var device = openfl.ui.GameInput.__getDevice(gamepad);
	if(device == null) return;
	if(device.enabled) {
		if(!device.__axis.exists(axis)) {
			var control = new openfl.ui.GameInputControl(device,"AXIS_" + (function($this) {
				var $r;
				switch(axis) {
				case 0:
					$r = "LEFT_X";
					break;
				case 1:
					$r = "LEFT_Y";
					break;
				case 2:
					$r = "RIGHT_X";
					break;
				case 3:
					$r = "RIGHT_Y";
					break;
				case 4:
					$r = "TRIGGER_LEFT";
					break;
				case 5:
					$r = "TRIGGER_RIGHT";
					break;
				default:
					$r = "UNKNOWN (" + axis + ")";
				}
				return $r;
			}(this)),-1,1);
			device.__axis.set(axis,control);
			device.__controls.push(control);
		}
		var control1 = device.__axis.get(axis);
		control1.value = value;
		control1.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE));
	}
};
openfl.ui.GameInput.__onGamepadButtonDown = function(gamepad,button) {
	var device = openfl.ui.GameInput.__getDevice(gamepad);
	if(device == null) return;
	if(device.enabled) {
		if(!device.__button.exists(button)) {
			var control = new openfl.ui.GameInputControl(device,"BUTTON_" + (function($this) {
				var $r;
				switch(button) {
				case 0:
					$r = "A";
					break;
				case 1:
					$r = "B";
					break;
				case 2:
					$r = "X";
					break;
				case 3:
					$r = "Y";
					break;
				case 4:
					$r = "BACK";
					break;
				case 5:
					$r = "GUIDE";
					break;
				case 6:
					$r = "START";
					break;
				case 7:
					$r = "LEFT_STICK";
					break;
				case 8:
					$r = "RIGHT_STICK";
					break;
				case 9:
					$r = "LEFT_SHOULDER";
					break;
				case 10:
					$r = "RIGHT_SHOULDER";
					break;
				case 11:
					$r = "DPAD_UP";
					break;
				case 12:
					$r = "DPAD_DOWN";
					break;
				case 13:
					$r = "DPAD_LEFT";
					break;
				case 14:
					$r = "DPAD_RIGHT";
					break;
				default:
					$r = "UNKNOWN (" + button + ")";
				}
				return $r;
			}(this)),0,1);
			device.__button.set(button,control);
			device.__controls.push(control);
		}
		var control1 = device.__button.get(button);
		control1.value = 1;
		control1.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE));
	}
};
openfl.ui.GameInput.__onGamepadButtonUp = function(gamepad,button) {
	var device = openfl.ui.GameInput.__getDevice(gamepad);
	if(device == null) return;
	if(device.enabled) {
		if(!device.__button.exists(button)) {
			var control = new openfl.ui.GameInputControl(device,"BUTTON_" + (function($this) {
				var $r;
				switch(button) {
				case 0:
					$r = "A";
					break;
				case 1:
					$r = "B";
					break;
				case 2:
					$r = "X";
					break;
				case 3:
					$r = "Y";
					break;
				case 4:
					$r = "BACK";
					break;
				case 5:
					$r = "GUIDE";
					break;
				case 6:
					$r = "START";
					break;
				case 7:
					$r = "LEFT_STICK";
					break;
				case 8:
					$r = "RIGHT_STICK";
					break;
				case 9:
					$r = "LEFT_SHOULDER";
					break;
				case 10:
					$r = "RIGHT_SHOULDER";
					break;
				case 11:
					$r = "DPAD_UP";
					break;
				case 12:
					$r = "DPAD_DOWN";
					break;
				case 13:
					$r = "DPAD_LEFT";
					break;
				case 14:
					$r = "DPAD_RIGHT";
					break;
				default:
					$r = "UNKNOWN (" + button + ")";
				}
				return $r;
			}(this)),0,1);
			device.__button.set(button,control);
			device.__controls.push(control);
		}
		var control1 = device.__button.get(button);
		control1.value = 0;
		control1.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE));
	}
};
openfl.ui.GameInput.__onGamepadConnect = function(gamepad) {
	var device = openfl.ui.GameInput.__getDevice(gamepad);
	if(device == null) return;
	var _g = 0;
	var _g1 = openfl.ui.GameInput.__instances;
	while(_g < _g1.length) {
		var instance = _g1[_g];
		++_g;
		instance.dispatchEvent(new openfl.events.GameInputEvent(openfl.events.GameInputEvent.DEVICE_ADDED,null,null,device));
	}
};
openfl.ui.GameInput.__onGamepadDisconnect = function(gamepad) {
	var device = openfl.ui.GameInput.__devices.h[gamepad.__id__];
	if(device != null) {
		openfl.ui.GameInput.__devices.remove(gamepad);
		openfl.ui.GameInput.numDevices = Lambda.count(openfl.ui.GameInput.__devices);
		var _g = 0;
		var _g1 = openfl.ui.GameInput.__instances;
		while(_g < _g1.length) {
			var instance = _g1[_g];
			++_g;
			instance.dispatchEvent(new openfl.events.GameInputEvent(openfl.events.GameInputEvent.DEVICE_REMOVED,null,null,device));
		}
	}
};
openfl.ui.GameInput.__super__ = openfl.events.EventDispatcher;
openfl.ui.GameInput.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	__class__: openfl.ui.GameInput
});
openfl.ui.GameInputControl = function(device,id,minValue,maxValue,value) {
	if(value == null) value = 0;
	openfl.events.EventDispatcher.call(this);
	this.device = device;
	this.id = id;
	this.minValue = minValue;
	this.maxValue = maxValue;
	this.value = value;
};
$hxClasses["openfl.ui.GameInputControl"] = openfl.ui.GameInputControl;
openfl.ui.GameInputControl.__name__ = true;
openfl.ui.GameInputControl.__super__ = openfl.events.EventDispatcher;
openfl.ui.GameInputControl.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	__class__: openfl.ui.GameInputControl
});
openfl.ui.GameInputDevice = function(id,name) {
	this.__controls = new Array();
	this.__button = new haxe.ds.IntMap();
	this.__axis = new haxe.ds.IntMap();
	this.id = id;
	this.name = name;
	var control;
	var _g = 0;
	while(_g < 6) {
		var i = _g++;
		control = new openfl.ui.GameInputControl(this,"AXIS_" + i,-1,1);
		this.__axis.set(i,control);
		this.__controls.push(control);
	}
	var _g1 = 0;
	while(_g1 < 15) {
		var i1 = _g1++;
		control = new openfl.ui.GameInputControl(this,"BUTTON_" + i1,0,1);
		this.__button.set(i1,control);
		this.__controls.push(control);
	}
};
$hxClasses["openfl.ui.GameInputDevice"] = openfl.ui.GameInputDevice;
openfl.ui.GameInputDevice.__name__ = true;
openfl.ui.GameInputDevice.prototype = {
	__class__: openfl.ui.GameInputDevice
};
openfl.ui.Keyboard = function() { };
$hxClasses["openfl.ui.Keyboard"] = openfl.ui.Keyboard;
openfl.ui.Keyboard.__name__ = true;
openfl.ui.Keyboard.__getCharCode = function(key,shift) {
	if(shift == null) shift = false;
	if(!shift) {
		switch(key) {
		case 8:
			return 8;
		case 9:
			return 9;
		case 13:
			return 13;
		case 27:
			return 27;
		case 32:
			return 32;
		case 186:
			return 59;
		case 187:
			return 61;
		case 188:
			return 44;
		case 189:
			return 45;
		case 190:
			return 46;
		case 191:
			return 47;
		case 192:
			return 96;
		case 219:
			return 91;
		case 220:
			return 92;
		case 221:
			return 93;
		case 222:
			return 39;
		}
		if(key >= 48 && key <= 57) return key - 48 + 48;
		if(key >= 65 && key <= 90) return key - 65 + 97;
	} else {
		switch(key) {
		case 48:
			return 41;
		case 49:
			return 33;
		case 50:
			return 64;
		case 51:
			return 35;
		case 52:
			return 36;
		case 53:
			return 37;
		case 54:
			return 94;
		case 55:
			return 38;
		case 56:
			return 42;
		case 57:
			return 40;
		case 186:
			return 58;
		case 187:
			return 43;
		case 188:
			return 60;
		case 189:
			return 95;
		case 190:
			return 62;
		case 191:
			return 63;
		case 192:
			return 126;
		case 219:
			return 123;
		case 220:
			return 124;
		case 221:
			return 125;
		case 222:
			return 34;
		}
		if(key >= 65 && key <= 90) return key - 65 + 65;
	}
	if(key >= 96 && key <= 105) return key - 96 + 48;
	switch(key) {
	case 106:
		return 42;
	case 107:
		return 43;
	case 108:
		return 44;
	case 110:
		return 45;
	case 111:
		return 46;
	case 46:
		return 127;
	case 13:
		return 13;
	case 8:
		return 8;
	}
	return 0;
};
openfl.utils = {};
openfl.utils.Timer = function(delay,repeatCount) {
	if(repeatCount == null) repeatCount = 0;
	if(Math.isNaN(delay) || delay < 0) throw new openfl.errors.Error("The delay specified is negative or not a finite number");
	openfl.events.EventDispatcher.call(this);
	this.__delay = delay;
	this.set_repeatCount(repeatCount);
	this.running = false;
	this.currentCount = 0;
};
$hxClasses["openfl.utils.Timer"] = openfl.utils.Timer;
openfl.utils.Timer.__name__ = true;
openfl.utils.Timer.__super__ = openfl.events.EventDispatcher;
openfl.utils.Timer.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	start: function() {
		if(!this.running) {
			this.running = true;
			this.__timerID = window.setInterval($bind(this,this.timer_onTimer),this.__delay | 0);
		}
	}
	,stop: function() {
		this.running = false;
		if(this.__timerID != null) {
			window.clearInterval(this.__timerID);
			this.__timerID = null;
		}
	}
	,set_repeatCount: function(v) {
		if(this.running && v != 0 && v <= this.currentCount) this.stop();
		this.repeatCount = v;
		return v;
	}
	,timer_onTimer: function() {
		this.currentCount++;
		if(this.repeatCount > 0 && this.currentCount >= this.repeatCount) {
			this.stop();
			this.dispatchEvent(new openfl.events.TimerEvent(openfl.events.TimerEvent.TIMER));
			this.dispatchEvent(new openfl.events.TimerEvent(openfl.events.TimerEvent.TIMER_COMPLETE));
		} else this.dispatchEvent(new openfl.events.TimerEvent(openfl.events.TimerEvent.TIMER));
	}
	,__class__: openfl.utils.Timer
});
terrylib.Col = function() { };
$hxClasses["terrylib.Col"] = terrylib.Col;
terrylib.Col.__name__ = true;
terrylib.Convert = function() { };
$hxClasses["terrylib.Convert"] = terrylib.Convert;
terrylib.Convert.__name__ = true;
terrylib.Convert.tostring = function(value) {
	return Std.string(value);
};
terrylib.Convert.toint = function(value) {
	return Std.parseInt(value);
};
terrylib.Debug = function() { };
$hxClasses["terrylib.Debug"] = terrylib.Debug;
terrylib.Debug.__name__ = true;
terrylib.Debug.showlog = function() {
	if(terrylib.Debug.showtest) {
		var _g1 = 0;
		var _g = terrylib.Debug.debuglog.length;
		while(_g1 < _g) {
			var k = _g1++;
			var _g2 = -1;
			while(_g2 < 2) {
				var j = _g2++;
				var _g3 = -1;
				while(_g3 < 2) {
					var i = _g3++;
					terrylib.Text.display(2 + i,j + Std["int"](2 + (terrylib.Debug.debuglog.length - 1 - k) * (terrylib.Text.height() + 2)),terrylib.Debug.debuglog[k],terrylib.Gfx.RGB(0,0,0));
				}
			}
			terrylib.Text.display(2,Std["int"](2 + (terrylib.Debug.debuglog.length - 1 - k) * (terrylib.Text.height() + 2)),terrylib.Debug.debuglog[k],terrylib.Gfx.RGB(255,255,255));
		}
	}
};
terrylib.Debug.showtest = null;
terrylib.Gfx = function() { };
$hxClasses["terrylib.Gfx"] = terrylib.Gfx;
terrylib.Gfx.__name__ = true;
terrylib.Gfx.screenwidth = null;
terrylib.Gfx.screenheight = null;
terrylib.Gfx.screenwidthmid = null;
terrylib.Gfx.screenheightmid = null;
terrylib.Gfx.doclearscreeneachframe = null;
terrylib.Gfx.screenscale = null;
terrylib.Gfx.devicexres = null;
terrylib.Gfx.deviceyres = null;
terrylib.Gfx.fullscreen = null;
terrylib.Gfx.backbuffer = null;
terrylib.Gfx.drawto = null;
terrylib.Gfx.fpsobj = null;
terrylib.Gfx.resizescreen = function(width,height,scale) {
	if(scale == null) scale = 1;
	terrylib.Gfx.initgfx(width | 0,height | 0,scale);
	terrylib.Text.init(terrylib.Gfx.gfxstage);
	terrylib.Gfx.showfps = false;
	terrylib.Gfx.fps();
	terrylib.Gfx.gfxstage.addChild(terrylib.Gfx.screen);
	terrylib.Gfx.updategraphicsmode();
};
terrylib.Gfx.showfps = null;
terrylib.Gfx.fps = function() {
	if(terrylib.Gfx.fpsobj == null) {
		terrylib.Gfx.fpsobj = new openfl.display.FPS(0,0,16777215);
		terrylib.Gfx.gfxstage.addChild(terrylib.Gfx.fpsobj);
	}
	return terrylib.Gfx.fpsobj.currentFPS;
};
terrylib.Gfx.bressize = null;
terrylib.Gfx.setlinethickness = function(size) {
	terrylib.Gfx.linethickness = size;
	if(terrylib.Gfx.linethickness < 1) terrylib.Gfx.linethickness = 1;
	if(terrylib.Gfx.linethickness > 255) terrylib.Gfx.linethickness = 255;
};
terrylib.Gfx.clearscreen = function(col) {
	if(col == null) col = 0;
	if(terrylib.Gfx.skiprender && terrylib.Gfx.drawingtoscreen) return;
	terrylib.Gfx.backbuffer.fillRect(terrylib.Gfx.backbuffer.rect,col);
};
terrylib.Gfx.fillbox = function(x,y,width,height,col,alpha) {
	if(alpha == null) alpha = 1.0;
	if(terrylib.Gfx.skiprender && terrylib.Gfx.drawingtoscreen) return;
	terrylib.Gfx.settrect(x,y,width,height);
	terrylib.Gfx.drawto.fillRect(terrylib.Gfx.trect,col);
};
terrylib.Gfx.RGB = function(red,green,blue) {
	return blue | green << 8 | red << 16;
};
terrylib.Gfx.updategraphicsmode = function() {
	if(terrylib.Gfx.fullscreen) {
		openfl.Lib.current.stage.set_displayState(openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE);
		terrylib.Gfx.gfxstage.scaleMode = openfl.display.StageScaleMode.NO_SCALE;
		var xScaleFresh;
		xScaleFresh = js.Boot.__cast(terrylib.Gfx.devicexres , Float) / js.Boot.__cast(terrylib.Gfx.screenwidth , Float);
		var yScaleFresh;
		yScaleFresh = js.Boot.__cast(terrylib.Gfx.deviceyres , Float) / js.Boot.__cast(terrylib.Gfx.screenheight , Float);
		if(xScaleFresh < yScaleFresh) {
			terrylib.Gfx.screen.set_width(terrylib.Gfx.screenwidth * xScaleFresh);
			terrylib.Gfx.screen.set_height(terrylib.Gfx.screenheight * xScaleFresh);
		} else if(yScaleFresh < xScaleFresh) {
			terrylib.Gfx.screen.set_width(terrylib.Gfx.screenwidth * yScaleFresh);
			terrylib.Gfx.screen.set_height(terrylib.Gfx.screenheight * yScaleFresh);
		} else {
			terrylib.Gfx.screen.set_width(terrylib.Gfx.screenwidth * xScaleFresh);
			terrylib.Gfx.screen.set_height(terrylib.Gfx.screenheight * yScaleFresh);
		}
		terrylib.Gfx.screen.set_x(js.Boot.__cast(terrylib.Gfx.devicexres , Float) / 2.0 - terrylib.Gfx.screen.get_width() / 2.0);
		terrylib.Gfx.screen.set_y(js.Boot.__cast(terrylib.Gfx.deviceyres , Float) / 2.0 - terrylib.Gfx.screen.get_height() / 2.0);
	} else {
		openfl.Lib.current.stage.set_displayState(openfl.display.StageDisplayState.NORMAL);
		terrylib.Gfx.screen.set_width(terrylib.Gfx.screenwidth * terrylib.Gfx.screenscale);
		terrylib.Gfx.screen.set_height(terrylib.Gfx.screenheight * terrylib.Gfx.screenscale);
		terrylib.Gfx.screen.set_x(0.0);
		terrylib.Gfx.screen.set_y(0.0);
		terrylib.Gfx.gfxstage.scaleMode = openfl.display.StageScaleMode.SHOW_ALL;
		terrylib.Gfx.gfxstage.quality = openfl.display.StageQuality.LOW;
	}
};
terrylib.Gfx.init = function(stage) {
	terrylib.Gfx.gfxstage = stage;
	terrylib.Gfx.doclearscreeneachframe = true;
	terrylib.Gfx.setlinethickness(1);
};
terrylib.Gfx.initgfx = function(width,height,scale) {
	terrylib.Gfx.screenwidth = width;
	terrylib.Gfx.screenheight = height;
	terrylib.Gfx.screenwidthmid = terrylib.Gfx.screenwidth / 2 | 0;
	terrylib.Gfx.screenheightmid = terrylib.Gfx.screenheight / 2 | 0;
	terrylib.Gfx.devicexres = Std["int"](openfl.system.Capabilities.get_screenResolutionX());
	terrylib.Gfx.deviceyres = Std["int"](openfl.system.Capabilities.get_screenResolutionY());
	terrylib.Gfx.screenscale = scale;
	terrylib.Gfx.trect = new openfl.geom.Rectangle();
	terrylib.Gfx.tpoint = new openfl.geom.Point();
	terrylib.Gfx.tbuffer = new openfl.display.BitmapData(1,1,true);
	terrylib.Gfx.ct = new openfl.geom.ColorTransform(0,0,0,1,255,255,255,1);
	terrylib.Gfx.alphact = new openfl.geom.ColorTransform();
	terrylib.Gfx.hslval.push(0.0);
	terrylib.Gfx.hslval.push(0.0);
	terrylib.Gfx.hslval.push(0.0);
	terrylib.Gfx.backbuffer = new openfl.display.BitmapData(terrylib.Gfx.screenwidth,terrylib.Gfx.screenheight,false,0);
	terrylib.Gfx.drawto = terrylib.Gfx.backbuffer;
	terrylib.Gfx.drawingtoscreen = true;
	terrylib.Gfx.bresx = [];
	terrylib.Gfx.bresy = [];
	terrylib.Gfx.bresswap = [];
	terrylib.Gfx.bressize = 0;
	var _g = 0;
	while(_g < 500) {
		var i = _g++;
		terrylib.Gfx.bresx.push(0);
		terrylib.Gfx.bresy.push(0);
		terrylib.Gfx.bresswap.push(0);
	}
	terrylib.Gfx.screen = new openfl.display.Bitmap(terrylib.Gfx.backbuffer);
	terrylib.Gfx.screen.smoothing = false;
	terrylib.Gfx.screen.set_width(terrylib.Gfx.screenwidth * scale);
	terrylib.Gfx.screen.set_height(terrylib.Gfx.screenheight * scale);
	terrylib.Gfx.fullscreen = false;
	terrylib.Debug.showtest = false;
};
terrylib.Gfx.settrect = function(x,y,w,h) {
	terrylib.Gfx.trect.x = x;
	terrylib.Gfx.trect.y = y;
	terrylib.Gfx.trect.width = w;
	terrylib.Gfx.trect.height = h;
};
terrylib.Gfx.ct = null;
terrylib.Gfx.alphact = null;
terrylib.Gfx.trect = null;
terrylib.Gfx.tpoint = null;
terrylib.Gfx.tbuffer = null;
terrylib.Gfx.linethickness = null;
terrylib.Gfx.screen = null;
terrylib.Gfx.gfxstage = null;
terrylib.Gfx.skiprender = null;
terrylib.Gfx.drawingtoscreen = null;
terrylib.Keystate = $hxClasses["terrylib.Keystate"] = { __ename__ : true, __constructs__ : ["justreleased","notpressed","pressed","justpressed"] };
terrylib.Keystate.justreleased = ["justreleased",0];
terrylib.Keystate.justreleased.toString = $estr;
terrylib.Keystate.justreleased.__enum__ = terrylib.Keystate;
terrylib.Keystate.notpressed = ["notpressed",1];
terrylib.Keystate.notpressed.toString = $estr;
terrylib.Keystate.notpressed.__enum__ = terrylib.Keystate;
terrylib.Keystate.pressed = ["pressed",2];
terrylib.Keystate.pressed.toString = $estr;
terrylib.Keystate.pressed.__enum__ = terrylib.Keystate;
terrylib.Keystate.justpressed = ["justpressed",3];
terrylib.Keystate.justpressed.toString = $estr;
terrylib.Keystate.justpressed.__enum__ = terrylib.Keystate;
terrylib.Input = function() { };
$hxClasses["terrylib.Input"] = terrylib.Input;
terrylib.Input.__name__ = true;
terrylib.Input.pressed = function(k) {
	return terrylib.Input.keyheld[terrylib.Input.keymap.get(k)];
};
terrylib.Input.init = function(stage) {
	stage.addEventListener(openfl.events.KeyboardEvent.KEY_DOWN,terrylib.Input.handlekeydown);
	stage.addEventListener(openfl.events.KeyboardEvent.KEY_UP,terrylib.Input.handlekeyup);
	var i = 0;
	var _g1 = 0;
	var _g = terrylib.Input.numletters;
	while(_g1 < _g) {
		var i1 = _g1++;
		terrylib.Input.current.push(terrylib.Keystate.notpressed);
		terrylib.Input.last.push(terrylib.Keystate.notpressed);
		terrylib.Input.keyheld.push(false);
	}
	terrylib.Input.addkey(terrylib.Key.A,65);
	terrylib.Input.addkey(terrylib.Key.B,66);
	terrylib.Input.addkey(terrylib.Key.C,67);
	terrylib.Input.addkey(terrylib.Key.D,68);
	terrylib.Input.addkey(terrylib.Key.E,69);
	terrylib.Input.addkey(terrylib.Key.F,70);
	terrylib.Input.addkey(terrylib.Key.G,71);
	terrylib.Input.addkey(terrylib.Key.H,72);
	terrylib.Input.addkey(terrylib.Key.I,73);
	terrylib.Input.addkey(terrylib.Key.J,74);
	terrylib.Input.addkey(terrylib.Key.K,75);
	terrylib.Input.addkey(terrylib.Key.L,76);
	terrylib.Input.addkey(terrylib.Key.M,77);
	terrylib.Input.addkey(terrylib.Key.N,78);
	terrylib.Input.addkey(terrylib.Key.O,79);
	terrylib.Input.addkey(terrylib.Key.P,80);
	terrylib.Input.addkey(terrylib.Key.Q,81);
	terrylib.Input.addkey(terrylib.Key.R,82);
	terrylib.Input.addkey(terrylib.Key.S,83);
	terrylib.Input.addkey(terrylib.Key.T,84);
	terrylib.Input.addkey(terrylib.Key.U,85);
	terrylib.Input.addkey(terrylib.Key.V,86);
	terrylib.Input.addkey(terrylib.Key.W,87);
	terrylib.Input.addkey(terrylib.Key.X,88);
	terrylib.Input.addkey(terrylib.Key.Y,89);
	terrylib.Input.addkey(terrylib.Key.Z,90);
	terrylib.Input.addkey(terrylib.Key.ZERO,48);
	terrylib.Input.addkey(terrylib.Key.ONE,49);
	terrylib.Input.addkey(terrylib.Key.TWO,50);
	terrylib.Input.addkey(terrylib.Key.THREE,51);
	terrylib.Input.addkey(terrylib.Key.FOUR,52);
	terrylib.Input.addkey(terrylib.Key.FIVE,53);
	terrylib.Input.addkey(terrylib.Key.SIX,54);
	terrylib.Input.addkey(terrylib.Key.SEVEN,55);
	terrylib.Input.addkey(terrylib.Key.EIGHT,56);
	terrylib.Input.addkey(terrylib.Key.NINE,57);
	terrylib.Input.addkey(terrylib.Key.F1,112);
	terrylib.Input.addkey(terrylib.Key.F2,113);
	terrylib.Input.addkey(terrylib.Key.F3,114);
	terrylib.Input.addkey(terrylib.Key.F4,115);
	terrylib.Input.addkey(terrylib.Key.F5,116);
	terrylib.Input.addkey(terrylib.Key.F6,117);
	terrylib.Input.addkey(terrylib.Key.F7,118);
	terrylib.Input.addkey(terrylib.Key.F8,119);
	terrylib.Input.addkey(terrylib.Key.F9,120);
	terrylib.Input.addkey(terrylib.Key.F10,121);
	terrylib.Input.addkey(terrylib.Key.F11,122);
	terrylib.Input.addkey(terrylib.Key.F12,123);
	terrylib.Input.addkey(terrylib.Key.ESCAPE,27);
	terrylib.Input.addkey(terrylib.Key.MINUS,189);
	terrylib.Input.addkey(terrylib.Key.PLUS,187);
	terrylib.Input.addkey(terrylib.Key.DELETE,46);
	terrylib.Input.addkey(terrylib.Key.BACKSPACE,8);
	terrylib.Input.addkey(terrylib.Key.LBRACKET,219);
	terrylib.Input.addkey(terrylib.Key.RBRACKET,221);
	terrylib.Input.addkey(terrylib.Key.BACKSLASH,220);
	terrylib.Input.addkey(terrylib.Key.CAPSLOCK,20);
	terrylib.Input.addkey(terrylib.Key.SEMICOLON,186);
	terrylib.Input.addkey(terrylib.Key.QUOTE,222);
	terrylib.Input.addkey(terrylib.Key.ENTER,13);
	terrylib.Input.addkey(terrylib.Key.SHIFT,16);
	terrylib.Input.addkey(terrylib.Key.COMMA,188);
	terrylib.Input.addkey(terrylib.Key.PERIOD,190);
	terrylib.Input.addkey(terrylib.Key.SLASH,191);
	terrylib.Input.addkey(terrylib.Key.CONTROL,17);
	terrylib.Input.addkey(terrylib.Key.ALT,18);
	terrylib.Input.addkey(terrylib.Key.SPACE,32);
	terrylib.Input.addkey(terrylib.Key.UP,38);
	terrylib.Input.addkey(terrylib.Key.DOWN,40);
	terrylib.Input.addkey(terrylib.Key.LEFT,37);
	terrylib.Input.addkey(terrylib.Key.RIGHT,39);
};
terrylib.Input.update = function() {
	var _g1 = 0;
	var _g = terrylib.Input.numletters;
	while(_g1 < _g) {
		var i = _g1++;
		if(terrylib.Input.lookup.exists(i)) {
			if(terrylib.Input.last[i] == terrylib.Keystate.justreleased && terrylib.Input.current[i] == terrylib.Keystate.justreleased) terrylib.Input.current[i] = terrylib.Keystate.notpressed; else if(terrylib.Input.last[i] == terrylib.Keystate.justpressed && terrylib.Input.current[i] == terrylib.Keystate.justpressed) terrylib.Input.current[i] = terrylib.Keystate.pressed;
			terrylib.Input.last[i] = terrylib.Input.current[i];
		}
	}
};
terrylib.Input.iskeycodeheld = function(k) {
	if(k == terrylib.Keystate.justpressed || k == terrylib.Keystate.pressed) return true;
	return false;
};
terrylib.Input.handlekeydown = function(event) {
	terrylib.Input.keycode = event.keyCode;
	if(terrylib.Input.lookup.exists(terrylib.Input.keycode)) {
		if(terrylib.Input.iskeycodeheld(terrylib.Input.current[terrylib.Input.keycode])) terrylib.Input.current[terrylib.Input.keycode] = terrylib.Keystate.pressed; else {
			terrylib.Input.current[terrylib.Input.keycode] = terrylib.Keystate.justpressed;
			terrylib.Input.keydelay[terrylib.Input.keycode] = 0;
		}
		terrylib.Input.keyheld[terrylib.Input.keycode] = true;
	}
};
terrylib.Input.handlekeyup = function(event) {
	terrylib.Input.keycode = event.keyCode;
	if(terrylib.Input.lookup.exists(terrylib.Input.keycode)) {
		if(terrylib.Input.iskeycodeheld(terrylib.Input.current[terrylib.Input.keycode])) terrylib.Input.current[terrylib.Input.keycode] = terrylib.Keystate.justreleased; else terrylib.Input.current[terrylib.Input.keycode] = terrylib.Keystate.notpressed;
		terrylib.Input.keyheld[terrylib.Input.keycode] = false;
	}
};
terrylib.Input.addkey = function(KeyName,KeyCode) {
	terrylib.Input.keymap.set(KeyName,KeyCode);
	terrylib.Input.lookup.set(KeyCode,KeyName);
	terrylib.Input.current[KeyCode] = terrylib.Keystate.notpressed;
	terrylib.Input.last[KeyCode] = terrylib.Keystate.notpressed;
	terrylib.Input.keyheld[KeyCode] = false;
};
terrylib.Input.keycode = null;
terrylib.Key = $hxClasses["terrylib.Key"] = { __ename__ : true, __constructs__ : ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","ESCAPE","MINUS","PLUS","DELETE","BACKSPACE","LBRACKET","RBRACKET","BACKSLASH","CAPSLOCK","SEMICOLON","QUOTE","ENTER","SHIFT","COMMA","PERIOD","SLASH","CONTROL","ALT","SPACE","UP","DOWN","LEFT","RIGHT"] };
terrylib.Key.A = ["A",0];
terrylib.Key.A.toString = $estr;
terrylib.Key.A.__enum__ = terrylib.Key;
terrylib.Key.B = ["B",1];
terrylib.Key.B.toString = $estr;
terrylib.Key.B.__enum__ = terrylib.Key;
terrylib.Key.C = ["C",2];
terrylib.Key.C.toString = $estr;
terrylib.Key.C.__enum__ = terrylib.Key;
terrylib.Key.D = ["D",3];
terrylib.Key.D.toString = $estr;
terrylib.Key.D.__enum__ = terrylib.Key;
terrylib.Key.E = ["E",4];
terrylib.Key.E.toString = $estr;
terrylib.Key.E.__enum__ = terrylib.Key;
terrylib.Key.F = ["F",5];
terrylib.Key.F.toString = $estr;
terrylib.Key.F.__enum__ = terrylib.Key;
terrylib.Key.G = ["G",6];
terrylib.Key.G.toString = $estr;
terrylib.Key.G.__enum__ = terrylib.Key;
terrylib.Key.H = ["H",7];
terrylib.Key.H.toString = $estr;
terrylib.Key.H.__enum__ = terrylib.Key;
terrylib.Key.I = ["I",8];
terrylib.Key.I.toString = $estr;
terrylib.Key.I.__enum__ = terrylib.Key;
terrylib.Key.J = ["J",9];
terrylib.Key.J.toString = $estr;
terrylib.Key.J.__enum__ = terrylib.Key;
terrylib.Key.K = ["K",10];
terrylib.Key.K.toString = $estr;
terrylib.Key.K.__enum__ = terrylib.Key;
terrylib.Key.L = ["L",11];
terrylib.Key.L.toString = $estr;
terrylib.Key.L.__enum__ = terrylib.Key;
terrylib.Key.M = ["M",12];
terrylib.Key.M.toString = $estr;
terrylib.Key.M.__enum__ = terrylib.Key;
terrylib.Key.N = ["N",13];
terrylib.Key.N.toString = $estr;
terrylib.Key.N.__enum__ = terrylib.Key;
terrylib.Key.O = ["O",14];
terrylib.Key.O.toString = $estr;
terrylib.Key.O.__enum__ = terrylib.Key;
terrylib.Key.P = ["P",15];
terrylib.Key.P.toString = $estr;
terrylib.Key.P.__enum__ = terrylib.Key;
terrylib.Key.Q = ["Q",16];
terrylib.Key.Q.toString = $estr;
terrylib.Key.Q.__enum__ = terrylib.Key;
terrylib.Key.R = ["R",17];
terrylib.Key.R.toString = $estr;
terrylib.Key.R.__enum__ = terrylib.Key;
terrylib.Key.S = ["S",18];
terrylib.Key.S.toString = $estr;
terrylib.Key.S.__enum__ = terrylib.Key;
terrylib.Key.T = ["T",19];
terrylib.Key.T.toString = $estr;
terrylib.Key.T.__enum__ = terrylib.Key;
terrylib.Key.U = ["U",20];
terrylib.Key.U.toString = $estr;
terrylib.Key.U.__enum__ = terrylib.Key;
terrylib.Key.V = ["V",21];
terrylib.Key.V.toString = $estr;
terrylib.Key.V.__enum__ = terrylib.Key;
terrylib.Key.W = ["W",22];
terrylib.Key.W.toString = $estr;
terrylib.Key.W.__enum__ = terrylib.Key;
terrylib.Key.X = ["X",23];
terrylib.Key.X.toString = $estr;
terrylib.Key.X.__enum__ = terrylib.Key;
terrylib.Key.Y = ["Y",24];
terrylib.Key.Y.toString = $estr;
terrylib.Key.Y.__enum__ = terrylib.Key;
terrylib.Key.Z = ["Z",25];
terrylib.Key.Z.toString = $estr;
terrylib.Key.Z.__enum__ = terrylib.Key;
terrylib.Key.ZERO = ["ZERO",26];
terrylib.Key.ZERO.toString = $estr;
terrylib.Key.ZERO.__enum__ = terrylib.Key;
terrylib.Key.ONE = ["ONE",27];
terrylib.Key.ONE.toString = $estr;
terrylib.Key.ONE.__enum__ = terrylib.Key;
terrylib.Key.TWO = ["TWO",28];
terrylib.Key.TWO.toString = $estr;
terrylib.Key.TWO.__enum__ = terrylib.Key;
terrylib.Key.THREE = ["THREE",29];
terrylib.Key.THREE.toString = $estr;
terrylib.Key.THREE.__enum__ = terrylib.Key;
terrylib.Key.FOUR = ["FOUR",30];
terrylib.Key.FOUR.toString = $estr;
terrylib.Key.FOUR.__enum__ = terrylib.Key;
terrylib.Key.FIVE = ["FIVE",31];
terrylib.Key.FIVE.toString = $estr;
terrylib.Key.FIVE.__enum__ = terrylib.Key;
terrylib.Key.SIX = ["SIX",32];
terrylib.Key.SIX.toString = $estr;
terrylib.Key.SIX.__enum__ = terrylib.Key;
terrylib.Key.SEVEN = ["SEVEN",33];
terrylib.Key.SEVEN.toString = $estr;
terrylib.Key.SEVEN.__enum__ = terrylib.Key;
terrylib.Key.EIGHT = ["EIGHT",34];
terrylib.Key.EIGHT.toString = $estr;
terrylib.Key.EIGHT.__enum__ = terrylib.Key;
terrylib.Key.NINE = ["NINE",35];
terrylib.Key.NINE.toString = $estr;
terrylib.Key.NINE.__enum__ = terrylib.Key;
terrylib.Key.F1 = ["F1",36];
terrylib.Key.F1.toString = $estr;
terrylib.Key.F1.__enum__ = terrylib.Key;
terrylib.Key.F2 = ["F2",37];
terrylib.Key.F2.toString = $estr;
terrylib.Key.F2.__enum__ = terrylib.Key;
terrylib.Key.F3 = ["F3",38];
terrylib.Key.F3.toString = $estr;
terrylib.Key.F3.__enum__ = terrylib.Key;
terrylib.Key.F4 = ["F4",39];
terrylib.Key.F4.toString = $estr;
terrylib.Key.F4.__enum__ = terrylib.Key;
terrylib.Key.F5 = ["F5",40];
terrylib.Key.F5.toString = $estr;
terrylib.Key.F5.__enum__ = terrylib.Key;
terrylib.Key.F6 = ["F6",41];
terrylib.Key.F6.toString = $estr;
terrylib.Key.F6.__enum__ = terrylib.Key;
terrylib.Key.F7 = ["F7",42];
terrylib.Key.F7.toString = $estr;
terrylib.Key.F7.__enum__ = terrylib.Key;
terrylib.Key.F8 = ["F8",43];
terrylib.Key.F8.toString = $estr;
terrylib.Key.F8.__enum__ = terrylib.Key;
terrylib.Key.F9 = ["F9",44];
terrylib.Key.F9.toString = $estr;
terrylib.Key.F9.__enum__ = terrylib.Key;
terrylib.Key.F10 = ["F10",45];
terrylib.Key.F10.toString = $estr;
terrylib.Key.F10.__enum__ = terrylib.Key;
terrylib.Key.F11 = ["F11",46];
terrylib.Key.F11.toString = $estr;
terrylib.Key.F11.__enum__ = terrylib.Key;
terrylib.Key.F12 = ["F12",47];
terrylib.Key.F12.toString = $estr;
terrylib.Key.F12.__enum__ = terrylib.Key;
terrylib.Key.ESCAPE = ["ESCAPE",48];
terrylib.Key.ESCAPE.toString = $estr;
terrylib.Key.ESCAPE.__enum__ = terrylib.Key;
terrylib.Key.MINUS = ["MINUS",49];
terrylib.Key.MINUS.toString = $estr;
terrylib.Key.MINUS.__enum__ = terrylib.Key;
terrylib.Key.PLUS = ["PLUS",50];
terrylib.Key.PLUS.toString = $estr;
terrylib.Key.PLUS.__enum__ = terrylib.Key;
terrylib.Key.DELETE = ["DELETE",51];
terrylib.Key.DELETE.toString = $estr;
terrylib.Key.DELETE.__enum__ = terrylib.Key;
terrylib.Key.BACKSPACE = ["BACKSPACE",52];
terrylib.Key.BACKSPACE.toString = $estr;
terrylib.Key.BACKSPACE.__enum__ = terrylib.Key;
terrylib.Key.LBRACKET = ["LBRACKET",53];
terrylib.Key.LBRACKET.toString = $estr;
terrylib.Key.LBRACKET.__enum__ = terrylib.Key;
terrylib.Key.RBRACKET = ["RBRACKET",54];
terrylib.Key.RBRACKET.toString = $estr;
terrylib.Key.RBRACKET.__enum__ = terrylib.Key;
terrylib.Key.BACKSLASH = ["BACKSLASH",55];
terrylib.Key.BACKSLASH.toString = $estr;
terrylib.Key.BACKSLASH.__enum__ = terrylib.Key;
terrylib.Key.CAPSLOCK = ["CAPSLOCK",56];
terrylib.Key.CAPSLOCK.toString = $estr;
terrylib.Key.CAPSLOCK.__enum__ = terrylib.Key;
terrylib.Key.SEMICOLON = ["SEMICOLON",57];
terrylib.Key.SEMICOLON.toString = $estr;
terrylib.Key.SEMICOLON.__enum__ = terrylib.Key;
terrylib.Key.QUOTE = ["QUOTE",58];
terrylib.Key.QUOTE.toString = $estr;
terrylib.Key.QUOTE.__enum__ = terrylib.Key;
terrylib.Key.ENTER = ["ENTER",59];
terrylib.Key.ENTER.toString = $estr;
terrylib.Key.ENTER.__enum__ = terrylib.Key;
terrylib.Key.SHIFT = ["SHIFT",60];
terrylib.Key.SHIFT.toString = $estr;
terrylib.Key.SHIFT.__enum__ = terrylib.Key;
terrylib.Key.COMMA = ["COMMA",61];
terrylib.Key.COMMA.toString = $estr;
terrylib.Key.COMMA.__enum__ = terrylib.Key;
terrylib.Key.PERIOD = ["PERIOD",62];
terrylib.Key.PERIOD.toString = $estr;
terrylib.Key.PERIOD.__enum__ = terrylib.Key;
terrylib.Key.SLASH = ["SLASH",63];
terrylib.Key.SLASH.toString = $estr;
terrylib.Key.SLASH.__enum__ = terrylib.Key;
terrylib.Key.CONTROL = ["CONTROL",64];
terrylib.Key.CONTROL.toString = $estr;
terrylib.Key.CONTROL.__enum__ = terrylib.Key;
terrylib.Key.ALT = ["ALT",65];
terrylib.Key.ALT.toString = $estr;
terrylib.Key.ALT.__enum__ = terrylib.Key;
terrylib.Key.SPACE = ["SPACE",66];
terrylib.Key.SPACE.toString = $estr;
terrylib.Key.SPACE.__enum__ = terrylib.Key;
terrylib.Key.UP = ["UP",67];
terrylib.Key.UP.toString = $estr;
terrylib.Key.UP.__enum__ = terrylib.Key;
terrylib.Key.DOWN = ["DOWN",68];
terrylib.Key.DOWN.toString = $estr;
terrylib.Key.DOWN.__enum__ = terrylib.Key;
terrylib.Key.LEFT = ["LEFT",69];
terrylib.Key.LEFT.toString = $estr;
terrylib.Key.LEFT.__enum__ = terrylib.Key;
terrylib.Key.RIGHT = ["RIGHT",70];
terrylib.Key.RIGHT.toString = $estr;
terrylib.Key.RIGHT.__enum__ = terrylib.Key;
terrylib.Mouse = function() { };
$hxClasses["terrylib.Mouse"] = terrylib.Mouse;
terrylib.Mouse.__name__ = true;
terrylib.Mouse.x = null;
terrylib.Mouse.y = null;
terrylib.Mouse.mouseoffstage = null;
terrylib.Mouse.isdragging = null;
terrylib.Mouse.init = function(stage) {
	stage.addEventListener(openfl.events.MouseEvent.RIGHT_MOUSE_DOWN,terrylib.Mouse.handleRightMouseDown);
	stage.addEventListener(openfl.events.MouseEvent.RIGHT_MOUSE_UP,terrylib.Mouse.handleRightMouseUp);
	stage.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,terrylib.Mouse.handleMouseDown);
	stage.addEventListener(openfl.events.MouseEvent.MOUSE_UP,terrylib.Mouse.handleMouseUp);
	stage.addEventListener(openfl.events.MouseEvent.MIDDLE_MOUSE_DOWN,terrylib.Mouse.handleMiddleMouseDown);
	stage.addEventListener(openfl.events.MouseEvent.MIDDLE_MOUSE_UP,terrylib.Mouse.handleMiddleMouseUp);
	stage.addEventListener(openfl.events.MouseEvent.MOUSE_WHEEL,terrylib.Mouse.mousewheelHandler);
	stage.addEventListener(openfl.events.MouseEvent.MOUSE_MOVE,terrylib.Mouse.mouseOver);
	stage.addEventListener(openfl.events.Event.MOUSE_LEAVE,terrylib.Mouse.mouseLeave);
	terrylib.Mouse.x = 0;
	terrylib.Mouse.y = 0;
	terrylib.Mouse._rightcurrent = 0;
	terrylib.Mouse._rightlast = 0;
	terrylib.Mouse._middlecurrent = 0;
	terrylib.Mouse._middlelast = 0;
	terrylib.Mouse._current = 0;
	terrylib.Mouse._last = 0;
};
terrylib.Mouse.mouseLeave = function(e) {
	terrylib.Mouse.mouseoffstage = true;
	terrylib.Mouse._current = 0;
	terrylib.Mouse._last = 0;
	terrylib.Mouse.isdragging = false;
	terrylib.Mouse._rightcurrent = 0;
	terrylib.Mouse._rightlast = 0;
	terrylib.Mouse._middlecurrent = 0;
	terrylib.Mouse._middlelast = 0;
};
terrylib.Mouse.mouseOver = function(e) {
	terrylib.Mouse.mouseoffstage = false;
};
terrylib.Mouse.mousewheelHandler = function(e) {
	terrylib.Mouse.mousewheel = e.delta;
};
terrylib.Mouse.update = function(X,Y) {
	terrylib.Mouse.x = X;
	terrylib.Mouse.y = Y;
	if(terrylib.Mouse.mousewheel > 0) terrylib.Mouse.mousewheel--;
	if(terrylib.Mouse.mousewheel < 0) terrylib.Mouse.mousewheel++;
	if(terrylib.Mouse.mousewheel < 1) terrylib.Mouse.mousewheel = -1;
	if(terrylib.Mouse.mousewheel > 1) terrylib.Mouse.mousewheel = 1;
	if(terrylib.Mouse._last == -1 && terrylib.Mouse._current == -1) terrylib.Mouse._current = 0; else if(terrylib.Mouse._last == 2 && terrylib.Mouse._current == 2) terrylib.Mouse._current = 1;
	terrylib.Mouse._last = terrylib.Mouse._current;
	if(terrylib.Mouse._rightlast == -1 && terrylib.Mouse._rightcurrent == -1) terrylib.Mouse._rightcurrent = 0; else if(terrylib.Mouse._rightlast == 2 && terrylib.Mouse._rightcurrent == 2) terrylib.Mouse._rightcurrent = 1;
	terrylib.Mouse._rightlast = terrylib.Mouse._rightcurrent;
	if(terrylib.Mouse._middlelast == -1 && terrylib.Mouse._middlecurrent == -1) terrylib.Mouse._middlecurrent = 0; else if(terrylib.Mouse._middlelast == 2 && terrylib.Mouse._middlecurrent == 2) terrylib.Mouse._middlecurrent = 1;
	terrylib.Mouse._middlelast = terrylib.Mouse._middlecurrent;
};
terrylib.Mouse.handleRightMouseDown = function(event) {
	if(terrylib.Mouse._rightcurrent > 0) terrylib.Mouse._rightcurrent = 1; else terrylib.Mouse._rightcurrent = 2;
};
terrylib.Mouse.handleRightMouseUp = function(event) {
	if(terrylib.Mouse._rightcurrent > 0) terrylib.Mouse._rightcurrent = -1; else terrylib.Mouse._rightcurrent = 0;
};
terrylib.Mouse.handleMiddleMouseDown = function(event) {
	if(terrylib.Mouse._middlecurrent > 0) terrylib.Mouse._middlecurrent = 1; else terrylib.Mouse._middlecurrent = 2;
};
terrylib.Mouse.handleMiddleMouseUp = function(event) {
	if(terrylib.Mouse._middlecurrent > 0) terrylib.Mouse._middlecurrent = -1; else terrylib.Mouse._middlecurrent = 0;
};
terrylib.Mouse.handleMouseDown = function(event) {
	if(terrylib.Input.pressed(terrylib.Key.CONTROL)) {
		if(terrylib.Mouse._rightcurrent > 0) terrylib.Mouse._rightcurrent = 1; else terrylib.Mouse._rightcurrent = 2;
	} else {
		if(terrylib.Mouse._current > 0) terrylib.Mouse._current = 1; else terrylib.Mouse._current = 2;
		if(terrylib.Mouse._current == 2) {
			if(terrylib.Mouse.gotosite != "") {
				var link = new openfl.net.URLRequest(terrylib.Mouse.gotosite);
				openfl.Lib.getURL(link);
				terrylib.Mouse.gotosite = "";
			}
		}
	}
};
terrylib.Mouse.handleMouseUp = function(event) {
	if(terrylib.Mouse._rightcurrent > 0) terrylib.Mouse._rightcurrent = -1; else terrylib.Mouse._rightcurrent = 0;
	if(terrylib.Mouse._current > 0) terrylib.Mouse._current = -1; else terrylib.Mouse._current = 0;
};
terrylib.Mouse._current = null;
terrylib.Mouse._last = null;
terrylib.Mouse._middlecurrent = null;
terrylib.Mouse._middlelast = null;
terrylib.Mouse._rightcurrent = null;
terrylib.Mouse._rightlast = null;
terrylib.Random = function() { };
$hxClasses["terrylib.Random"] = terrylib.Random;
terrylib.Random.__name__ = true;
terrylib.Random.setseed = function(s) {
	terrylib.Random.seed = Std["int"](Math.abs(s % 233280));
};
terrylib.Text = function() { };
$hxClasses["terrylib.Text"] = terrylib.Text;
terrylib.Text.__name__ = true;
terrylib.Text.init = function(stage) {
	terrylib.Text.drawto = terrylib.Gfx.backbuffer;
	terrylib.Text.gfxstage = stage;
	terrylib.Text.enabletextfield();
	terrylib.Text.alphact = new openfl.geom.ColorTransform();
	terrylib.Text.input_cursorglow = 0;
};
terrylib.Text.enabletextfield = function() {
	terrylib.Text.gfxstage.addChild(terrylib.Text.inputField);
	terrylib.Text.inputField.set_border(true);
	terrylib.Text.inputField.set_width(terrylib.Gfx.screenwidth);
	terrylib.Text.inputField.set_height(20);
	terrylib.Text.inputField.set_x(0);
	terrylib.Text.inputField.set_y(terrylib.Gfx.screenheight + 10);
	terrylib.Text.inputField.set_type(openfl.text.TextFieldType.INPUT);
	terrylib.Text.inputField.set_visible(false);
	terrylib.Text.inputField.set_maxChars(80);
	terrylib.Text.resetinput("");
};
terrylib.Text.mid = function(s,start,length) {
	if(length == null) length = 1;
	if(start == null) start = 0;
	return HxOverrides.substr(s,start,length);
};
terrylib.Text.reversetext = function(t) {
	var t2 = "";
	var _g1 = 0;
	var _g = t.length;
	while(_g1 < _g) {
		var i = _g1++;
		t2 += terrylib.Text.mid(t,t.length - i - 1,1);
	}
	return t2;
};
terrylib.Text.resetinput = function(t) {
	terrylib.Text.inputField.set_text(terrylib.Text.reversetext(t));
	terrylib.Text.inputtext = terrylib.Text.reversetext(t);
	terrylib.Text.input_show = 0;
};
terrylib.Text.drawstringinput = function() {
	if(terrylib.Text.input_show > 0) {
		terrylib.Text.setfont(terrylib.Text.input_font,terrylib.Text.input_textsize);
		terrylib.Text.input_cursorglow++;
		if(terrylib.Text.input_cursorglow >= 96) terrylib.Text.input_cursorglow = 0;
		terrylib.Text.display(terrylib.Text.input_textxp,terrylib.Text.input_textyp,terrylib.Text.input_text,terrylib.Text.input_textcol);
		if(terrylib.Text.input_cursorglow % 48 < 24) terrylib.Text.display(terrylib.Text.input_responsexp,terrylib.Text.input_responseyp,terrylib.Text.input_response,terrylib.Text.input_responsecol); else terrylib.Text.display(terrylib.Text.input_responsexp,terrylib.Text.input_responseyp,terrylib.Text.input_response + "_",terrylib.Text.input_responsecol);
	}
	terrylib.Text.input_show--;
	if(terrylib.Text.input_show < 0) terrylib.Text.input_show = 0;
};
terrylib.Text.currentlen = function() {
	if(terrylib.Text.typeface[terrylib.Text.currentindex].type == "ttf") return terrylib.Text.typeface[terrylib.Text.currentindex].tf_ttf.get_textWidth(); else if(terrylib.Text.typeface[terrylib.Text.currentindex].type == "bitmap") return terrylib.Text.typeface[terrylib.Text.currentindex].tf_bitmap.getStringWidth(terrylib.Text.typeface[terrylib.Text.currentindex].tf_bitmap.text,false) * terrylib.Text.typeface[terrylib.Text.currentindex].size;
	return 0;
};
terrylib.Text.currentheight = function() {
	if(terrylib.Text.typeface[terrylib.Text.currentindex].type == "ttf") return terrylib.Text.typeface[terrylib.Text.currentindex].tf_ttf.get_textHeight(); else if(terrylib.Text.typeface[terrylib.Text.currentindex].type == "bitmap") return terrylib.Text.typeface[terrylib.Text.currentindex].tf_bitmap.get_textHeight() * terrylib.Text.typeface[terrylib.Text.currentindex].size;
	return 0;
};
terrylib.Text.len = function(t) {
	if(terrylib.Text.typeface[terrylib.Text.currentindex].type == "ttf") {
		terrylib.Text.typeface[terrylib.Text.currentindex].tf_ttf.set_text(t);
		return terrylib.Text.typeface[terrylib.Text.currentindex].tf_ttf.get_textWidth();
	} else if(terrylib.Text.typeface[terrylib.Text.currentindex].type == "bitmap") return terrylib.Text.typeface[terrylib.Text.currentindex].tf_bitmap.getStringWidth(t,false) * terrylib.Text.typeface[terrylib.Text.currentindex].size;
	return 0;
};
terrylib.Text.height = function() {
	if(terrylib.Text.typeface[terrylib.Text.currentindex].type == "ttf") {
		terrylib.Text.typeface[terrylib.Text.currentindex].tf_ttf.set_text("???");
		return terrylib.Text.typeface[terrylib.Text.currentindex].tf_ttf.get_textHeight();
	} else if(terrylib.Text.typeface[terrylib.Text.currentindex].type == "bitmap") {
		terrylib.Text.typeface[terrylib.Text.currentindex].tf_bitmap.set_text("???");
		return terrylib.Text.typeface[terrylib.Text.currentindex].tf_bitmap.get_textHeight() * terrylib.Text.typeface[terrylib.Text.currentindex].size;
	}
	return 0;
};
terrylib.Text.cachealignx = function(x,c) {
	if(x == terrylib.Text.CENTER) return Math.floor(terrylib.Gfx.screenwidthmid - terrylib.Text.cachedtext[c].width / 2);
	if(x == terrylib.Text.LEFT || x == terrylib.Text.TOP) return 0;
	if(x == terrylib.Text.RIGHT || x == terrylib.Text.BOTTOM) return Math.floor(terrylib.Gfx.screenwidth - terrylib.Text.cachedtext[c].width);
	return Math.floor(x);
};
terrylib.Text.cachealigny = function(y,c) {
	if(y == terrylib.Text.CENTER) return Math.floor(terrylib.Gfx.screenheightmid - terrylib.Text.cachedtext[c].height / 2);
	if(y == terrylib.Text.LEFT || y == terrylib.Text.TOP) return 0;
	if(y == terrylib.Text.RIGHT || y == terrylib.Text.BOTTOM) return Math.floor(terrylib.Gfx.screenheight - terrylib.Text.cachedtext[c].height);
	return Math.floor(y);
};
terrylib.Text.alignx = function(x) {
	if(x == terrylib.Text.CENTER) return Math.floor(terrylib.Gfx.screenwidthmid - terrylib.Text.currentlen() / 2);
	if(x == terrylib.Text.LEFT || x == terrylib.Text.TOP) return 0;
	if(x == terrylib.Text.RIGHT || x == terrylib.Text.BOTTOM) return Math.floor(terrylib.Gfx.screenwidth - terrylib.Text.currentlen());
	return Math.floor(x);
};
terrylib.Text.aligny = function(y) {
	if(y == terrylib.Text.CENTER) return Math.floor(terrylib.Gfx.screenheightmid - terrylib.Text.currentheight() / 2);
	if(y == terrylib.Text.LEFT || y == terrylib.Text.TOP) return 0;
	if(y == terrylib.Text.RIGHT || y == terrylib.Text.BOTTOM) return Math.floor(terrylib.Gfx.screenheight - terrylib.Text.currentheight());
	return Math.floor(y);
};
terrylib.Text.cachealigntextx = function(c,x) {
	if(x == terrylib.Text.CENTER) return Math.floor(terrylib.Text.cachedtext[c].width / 2);
	if(x == terrylib.Text.LEFT || x == terrylib.Text.TOP) return 0;
	if(x == terrylib.Text.RIGHT || x == terrylib.Text.BOTTOM) return terrylib.Text.cachedtext[c].width;
	return x;
};
terrylib.Text.cachealigntexty = function(c,y) {
	if(y == terrylib.Text.CENTER) return Math.floor(terrylib.Text.cachedtext[c].height / 2);
	if(y == terrylib.Text.TOP || y == terrylib.Text.LEFT) return 0;
	if(y == terrylib.Text.BOTTOM || y == terrylib.Text.RIGHT) return terrylib.Text.cachedtext[c].height;
	return y;
};
terrylib.Text.aligntextx = function(t,x) {
	if(x == terrylib.Text.CENTER) return Math.floor(terrylib.Text.len(t) / 2);
	if(x == terrylib.Text.LEFT || x == terrylib.Text.TOP) return 0;
	if(x == terrylib.Text.RIGHT || x == terrylib.Text.BOTTOM) return terrylib.Text.len(t);
	return x;
};
terrylib.Text.aligntexty = function(y) {
	if(y == terrylib.Text.CENTER) return Math.floor(terrylib.Text.height() / 2);
	if(y == terrylib.Text.TOP || y == terrylib.Text.LEFT) return 0;
	if(y == terrylib.Text.BOTTOM || y == terrylib.Text.RIGHT) return terrylib.Text.height();
	return y;
};
terrylib.Text.cacheindex = null;
terrylib.Text.cachelabel = null;
terrylib.Text.display = function(x,y,dytext,col,parameters) {
	if(col == null) col = 16777215;
	var text = terrylib.Convert.tostring(dytext);
	if(terrylib.Gfx.skiprender && terrylib.Gfx.drawingtoscreen) return;
	if(terrylib.Text.typeface[terrylib.Text.currentindex].type == "bitmap") {
		terrylib.Text.cachelabel = text + "_" + terrylib.Text.currentfont + terrylib.Convert.tostring(col);
		if(!terrylib.Text.cachedtextindex.exists(terrylib.Text.cachelabel)) {
			terrylib.Text.cacheindex = terrylib.Text.cachedtext.length;
			terrylib.Text.cachedtextindex.set(terrylib.Text.cachelabel,terrylib.Text.cacheindex);
			terrylib.Text.cachedtext.push(new openfl.display.BitmapData(terrylib.Convert.toint(terrylib.Text.len(text)),terrylib.Convert.toint(terrylib.Text.height()),true,0));
			terrylib.Text.drawto = terrylib.Text.cachedtext[terrylib.Text.cacheindex];
			terrylib.Text.cache_bitmap_text(text,col);
			terrylib.Text.drawto = terrylib.Gfx.drawto;
		}
		terrylib.Text.cacheindex = terrylib.Text.cachedtextindex.get(terrylib.Text.cachelabel);
		terrylib.Text.display_bitmap(x,y,terrylib.Text.cacheindex,terrylib.Text.currentsize,parameters);
	} else if(terrylib.Text.typeface[terrylib.Text.currentindex].type == "tff") terrylib.Text.display_ttf(x,y,text,col,parameters);
};
terrylib.Text.cache_bitmap_text = function(text,col) {
	terrylib.Text.typeface[terrylib.Text.currentindex].tf_bitmap.set_useTextColor(true);
	terrylib.Text.typeface[terrylib.Text.currentindex].tf_bitmap.set_textColor(-16777216 + col);
	terrylib.Text.typeface[terrylib.Text.currentindex].tf_bitmap.set_text(text);
	terrylib.Text.drawto.draw(terrylib.Text.typeface[terrylib.Text.currentindex].tf_bitmap);
};
terrylib.Text.display_bitmap = function(x,y,text,size,parameters) {
	if(parameters == null && size == 1) {
		x = terrylib.Text.cachealignx(x,text);
		y = terrylib.Text.cachealigny(y,text);
		terrylib.Text.fontmatrix.identity();
		terrylib.Text.fontmatrix.translate(Math.floor(x),Math.floor(y));
		terrylib.Text.drawto.draw(terrylib.Text.cachedtext[text],terrylib.Text.fontmatrix);
	} else {
		terrylib.Text.tempxpivot = 0;
		terrylib.Text.tempypivot = 0;
		terrylib.Text.tempxscale = 1.0 * size;
		terrylib.Text.tempyscale = 1.0 * size;
		terrylib.Text.temprotate = 0;
		terrylib.Text.tempalpha = 1.0;
		terrylib.Text.tempred = 1.0;
		terrylib.Text.tempgreen = 1.0;
		terrylib.Text.tempblue = 1.0;
		terrylib.Text.changecolours = false;
		x = terrylib.Text.cachealignx(x,text);
		y = terrylib.Text.cachealigny(y,text);
		if(parameters == null) parameters = { scale : 1};
		if(parameters.align != null) {
			if(parameters.align == terrylib.Text.CENTER) x = Math.floor(x - terrylib.Text.cachedtext[text].width / 2); else if(parameters.align == terrylib.Text.RIGHT || parameters.align == terrylib.Text.BOTTOM) x = Math.floor(x - terrylib.Text.cachedtext[text].width);
		}
		if(parameters.xpivot != null) terrylib.Text.tempxpivot = terrylib.Text.cachealigntextx(text,parameters.xpivot);
		if(parameters.ypivot != null) terrylib.Text.tempypivot = terrylib.Text.cachealigntexty(text,parameters.ypivot);
		if(parameters.scale != null) {
			terrylib.Text.tempxscale = parameters.scale * size;
			terrylib.Text.tempyscale = parameters.scale * size;
		} else {
			if(parameters.xscale != null) terrylib.Text.tempxscale = parameters.xscale * size;
			if(parameters.yscale != null) terrylib.Text.tempyscale = parameters.yscale * size;
		}
		if(parameters.rotation != null) terrylib.Text.temprotate = parameters.rotation;
		if(parameters.alpha != null) {
			terrylib.Text.tempalpha = parameters.alpha;
			terrylib.Text.alphact.alphaMultiplier = terrylib.Text.tempalpha;
			terrylib.Text.changecolours = true;
		}
		if(parameters.red != null) {
			terrylib.Text.tempred = parameters.red;
			terrylib.Text.alphact.redMultiplier = terrylib.Text.tempred;
			terrylib.Text.changecolours = true;
		}
		if(parameters.green != null) {
			terrylib.Text.tempgreen = parameters.green;
			terrylib.Text.alphact.greenMultiplier = terrylib.Text.tempgreen;
			terrylib.Text.changecolours = true;
		}
		if(parameters.blue != null) {
			terrylib.Text.tempblue = parameters.blue;
			terrylib.Text.alphact.blueMultiplier = terrylib.Text.tempblue;
			terrylib.Text.changecolours = true;
		}
		terrylib.Text.fontmatrix.identity();
		terrylib.Text.fontmatrix.translate(-terrylib.Text.tempxpivot,-terrylib.Text.tempypivot);
		terrylib.Text.fontmatrix.scale(terrylib.Text.tempxscale,terrylib.Text.tempyscale);
		terrylib.Text.fontmatrix.rotate(terrylib.Text.temprotate * 3.1415 / 180);
		terrylib.Text.fontmatrix.translate(x + terrylib.Text.tempxpivot,y + terrylib.Text.tempypivot);
		if(terrylib.Text.changecolours) terrylib.Text.drawto.draw(terrylib.Text.cachedtext[text],terrylib.Text.fontmatrix,terrylib.Text.alphact); else terrylib.Text.drawto.draw(terrylib.Text.cachedtext[text],terrylib.Text.fontmatrix);
	}
	return;
};
terrylib.Text.display_ttf = function(x,y,text,col,parameters) {
	if(col == null) col = 16777215;
	if(terrylib.Gfx.skiprender && terrylib.Gfx.drawingtoscreen) return;
	if(parameters == null) {
		terrylib.Text.typeface[terrylib.Text.currentindex].tf_ttf.set_textColor(col);
		terrylib.Text.typeface[terrylib.Text.currentindex].tf_ttf.set_text(text);
		x = terrylib.Text.alignx(x);
		y = terrylib.Text.aligny(y);
		terrylib.Text.fontmatrix.identity();
		terrylib.Text.fontmatrix.translate(x,y);
		terrylib.Text.typeface[terrylib.Text.currentindex].tf_ttf.set_textColor(col);
		terrylib.Text.drawto.draw(terrylib.Text.typeface[terrylib.Text.currentindex].tf_ttf,terrylib.Text.fontmatrix);
	} else {
		terrylib.Text.drawto = terrylib.Text.typeface[terrylib.Text.currentindex].tfbitmap;
		terrylib.Text.typeface[terrylib.Text.currentindex].clearbitmap();
		terrylib.Text.tempxpivot = 0;
		terrylib.Text.tempypivot = 0;
		terrylib.Text.tempxscale = 1.0;
		terrylib.Text.tempyscale = 1.0;
		terrylib.Text.temprotate = 0;
		terrylib.Text.tempalpha = 1.0;
		terrylib.Text.tempred = 1.0;
		terrylib.Text.tempgreen = 1.0;
		terrylib.Text.tempblue = 1.0;
		terrylib.Text.changecolours = false;
		terrylib.Text.display(0,0,text,col);
		x = terrylib.Text.alignx(x);
		y = terrylib.Text.aligny(y);
		if(parameters.align != null) {
			if(parameters.align == terrylib.Text.CENTER) x = Math.floor(x - terrylib.Text.len(text) / 2); else if(parameters.align == terrylib.Text.RIGHT || parameters.align == terrylib.Text.BOTTOM) x = Math.floor(x - terrylib.Text.len(text));
		}
		if(parameters.xpivot != null) terrylib.Text.tempxpivot = terrylib.Text.aligntextx(text,parameters.xpivot);
		if(parameters.ypivot != null) terrylib.Text.tempypivot = terrylib.Text.aligntexty(parameters.ypivot);
		if(parameters.scale != null) {
			terrylib.Text.tempxscale = parameters.scale;
			terrylib.Text.tempyscale = parameters.scale;
		} else {
			if(parameters.xscale != null) terrylib.Text.tempxscale = parameters.xscale;
			if(parameters.yscale != null) terrylib.Text.tempyscale = parameters.yscale;
		}
		if(parameters.rotation != null) terrylib.Text.temprotate = parameters.rotation;
		if(parameters.alpha != null) {
			terrylib.Text.tempalpha = parameters.alpha;
			terrylib.Text.alphact.alphaMultiplier = terrylib.Text.tempalpha;
			terrylib.Text.changecolours = true;
		}
		if(parameters.red != null) {
			terrylib.Text.tempred = parameters.red;
			terrylib.Text.alphact.redMultiplier = terrylib.Text.tempred;
			terrylib.Text.changecolours = true;
		}
		if(parameters.green != null) {
			terrylib.Text.tempgreen = parameters.green;
			terrylib.Text.alphact.greenMultiplier = terrylib.Text.tempgreen;
			terrylib.Text.changecolours = true;
		}
		if(parameters.blue != null) {
			terrylib.Text.tempblue = parameters.blue;
			terrylib.Text.alphact.blueMultiplier = terrylib.Text.tempblue;
			terrylib.Text.changecolours = true;
		}
		terrylib.Text.fontmatrix.identity();
		terrylib.Text.fontmatrix.translate(-terrylib.Text.tempxpivot,-terrylib.Text.tempypivot);
		terrylib.Text.fontmatrix.scale(terrylib.Text.tempxscale,terrylib.Text.tempyscale);
		terrylib.Text.fontmatrix.rotate(terrylib.Text.temprotate * 3.1415 / 180);
		terrylib.Text.fontmatrix.translate(x + terrylib.Text.tempxpivot,y + terrylib.Text.tempypivot);
		terrylib.Text.drawto = terrylib.Gfx.drawto;
		if(terrylib.Text.changecolours) terrylib.Text.drawto.draw(terrylib.Text.typeface[terrylib.Text.currentindex].tfbitmap,terrylib.Text.fontmatrix,terrylib.Text.alphact); else terrylib.Text.drawto.draw(terrylib.Text.typeface[terrylib.Text.currentindex].tfbitmap,terrylib.Text.fontmatrix);
	}
};
terrylib.Text.setfont = function(t,s) {
	if(!terrylib.Text.fontfileindex.exists(t)) terrylib.Text.addfont(t,s);
	if(t != terrylib.Text.currentfont) {
		terrylib.Text.currentfont = t;
		if(terrylib.Text.currentsize != -1) {
			if((function($this) {
				var $r;
				var key = terrylib.Text.currentfont + "_" + Std.string(terrylib.Text.currentsize);
				$r = terrylib.Text.typefaceindex.exists(key);
				return $r;
			}(this))) {
				var key1 = terrylib.Text.currentfont + "_" + Std.string(terrylib.Text.currentsize);
				terrylib.Text.currentindex = terrylib.Text.typefaceindex.get(key1);
			} else {
				terrylib.Text.addtypeface(terrylib.Text.currentfont,terrylib.Text.currentsize);
				var key2 = terrylib.Text.currentfont + "_" + Std.string(terrylib.Text.currentsize);
				terrylib.Text.currentindex = terrylib.Text.typefaceindex.get(key2);
			}
		}
	}
	terrylib.Text.changesize(s);
};
terrylib.Text.changesize = function(t) {
	if(t != terrylib.Text.currentsize) {
		terrylib.Text.currentsize = t;
		if(terrylib.Text.currentfont != "null") {
			if((function($this) {
				var $r;
				var key = terrylib.Text.currentfont + "_" + Std.string(terrylib.Text.currentsize);
				$r = terrylib.Text.typefaceindex.exists(key);
				return $r;
			}(this))) {
				var key1 = terrylib.Text.currentfont + "_" + Std.string(terrylib.Text.currentsize);
				terrylib.Text.currentindex = terrylib.Text.typefaceindex.get(key1);
			} else {
				terrylib.Text.addtypeface(terrylib.Text.currentfont,terrylib.Text.currentsize);
				var key2 = terrylib.Text.currentfont + "_" + Std.string(terrylib.Text.currentsize);
				terrylib.Text.currentindex = terrylib.Text.typefaceindex.get(key2);
			}
		}
	}
};
terrylib.Text.addfont = function(t,defaultsize) {
	if(defaultsize == null) defaultsize = 1;
	terrylib.Text.fontfile.push(new terrylib.util.Fontfile(t));
	terrylib.Text.fontfileindex.set(t,terrylib.Text.fontfile.length - 1);
	terrylib.Text.currentfont = t;
	terrylib.Text.changesize(defaultsize);
};
terrylib.Text.addtypeface = function(_name,_size) {
	terrylib.Text.typeface.push(new terrylib.util.Fontclass(_name,_size));
	terrylib.Text.typefaceindex.set(_name + "_" + (_size == null?"null":"" + _size),terrylib.Text.typeface.length - 1);
};
terrylib.Text.getfonttypename = function(fontname) {
	return terrylib.Text.fontfile[terrylib.Text.fontfileindex.get(fontname)].typename;
};
terrylib.Text.gfxstage = null;
terrylib.Text.drawto = null;
terrylib.Text.temprotate = null;
terrylib.Text.tempxscale = null;
terrylib.Text.tempyscale = null;
terrylib.Text.tempxpivot = null;
terrylib.Text.tempypivot = null;
terrylib.Text.tempalpha = null;
terrylib.Text.tempred = null;
terrylib.Text.tempgreen = null;
terrylib.Text.tempblue = null;
terrylib.Text.changecolours = null;
terrylib.Text.alphact = null;
terrylib.Text.inputtext = null;
terrylib.Text.input_textxp = null;
terrylib.Text.input_textyp = null;
terrylib.Text.input_responsexp = null;
terrylib.Text.input_responseyp = null;
terrylib.Text.input_textcol = null;
terrylib.Text.input_responsecol = null;
terrylib.Text.input_text = null;
terrylib.Text.input_response = null;
terrylib.Text.input_cursorglow = null;
terrylib.Text.input_font = null;
terrylib.Text.input_textsize = null;
terrylib.Text.input_show = null;
terrylib.bitmapFont = {};
terrylib.bitmapFont.BitmapFont = function(name,bitmap) {
	this.spaceWidth = 0;
	this.minOffsetX = 0;
	this.italic = false;
	this.bold = false;
	this.lineHeight = 0;
	this.size = 0;
	this.bitmap = bitmap;
	this.fontName = name;
	this.glyphs = new haxe.ds.IntMap();
	terrylib.bitmapFont.BitmapFont.store(name,this);
};
$hxClasses["terrylib.bitmapFont.BitmapFont"] = terrylib.bitmapFont.BitmapFont;
terrylib.bitmapFont.BitmapFont.__name__ = true;
terrylib.bitmapFont.BitmapFont.store = function(fontKey,font) {
	if(!terrylib.bitmapFont.BitmapFont.fonts.exists(fontKey)) terrylib.bitmapFont.BitmapFont.fonts.set(fontKey,font);
};
terrylib.bitmapFont.BitmapFont.get = function(fontKey) {
	return terrylib.bitmapFont.BitmapFont.fonts.get(fontKey);
};
terrylib.bitmapFont.BitmapFont.getDefaultFont = function() {
	var font = terrylib.bitmapFont.BitmapFont.get("defaultFontKey");
	if(font != null) return font;
	var letters = "";
	var bd = new openfl.display.BitmapData(700,9,true,-7829368);
	var letterPos = 0;
	var i = 0;
	while(i < " 36000000000000000000!26101010001000\"46101010100000000000000000#66010100111110010100111110010100000000$56001000111011000001101110000100%66100100000100001000010000010010000000&66011000100000011010100100011010000000'26101000000000(36010100100100010000)36100010010010100000*46000010100100101000000000+46000001001110010000000000,36000000000000010100-46000000001110000000000000.26000000001000/66000010000100001000010000100000000000056011001001010010100100110000000156011000010000100001000010000000256111000001001100100001111000000356111000001001100000101110000000456100101001010010011100001000000556111101000011100000101110000000656011001000011100100100110000000756111000001000010001100001000000856011001001001100100100110000000956011001001010010011100001000000:26001000100000;26001000101000<46001001001000010000100000=46000011100000111000000000>46100001000010010010000000?56111000001001100000000100000000@66011100100010101110101010011100000000A56011001001010010111101001000000B56111001001011100100101110000000C56011001001010000100100110000000D56111001001010010100101110000000E56111101000011000100001111000000F56111101000010000110001000000000G56011001000010110100100111000000H56100101001011110100101001000000I26101010101000J56000100001000010100100110000000K56100101001010010111001001000000L46100010001000100011100000M66100010100010110110101010100010000000N56100101001011010101101001000000O56011001001010010100100110000000P56111001001010010111001000000000Q56011001001010010100100110000010R56111001001010010111001001000000S56011101000001100000101110000000T46111001000100010001000000U56100101001010010100100110000000V56100101001010010101000100000000W66100010100010101010110110100010000000X56100101001001100100101001000000Y56100101001010010011100001001100Z56111100001001100100001111000000[36110100100100110000}46110001000010010011000000]36110010010010110000^46010010100000000000000000_46000000000000000011110000'26101000000000a56000000111010010100100111000000b56100001110010010100101110000000c46000001101000100001100000d56000100111010010100100111000000e56000000110010110110000110000000f46011010001000110010000000g5700000011001001010010011100001001100h56100001110010010100101001000000i26100010101000j37010000010010010010100k56100001001010010111001001000000l26101010101000m66000000111100101010101010101010000000n56000001110010010100101001000000o56000000110010010100100110000000p5700000111001001010010111001000010000q5700000011101001010010011100001000010r46000010101100100010000000s56000000111011000001101110000000t46100011001000100001100000u56000001001010010100100111000000v56000001001010010101000100000000w66000000101010101010101010011110000000x56000001001010010011001001000000y5700000100101001010010011100001001100z56000001111000100010001111000000{46011001001000010001100000|26101010101000}46110001000010010011000000~56010101010000000000000000000000\\46111010101010101011100000".length) {
		letters += HxOverrides.substr(" 36000000000000000000!26101010001000\"46101010100000000000000000#66010100111110010100111110010100000000$56001000111011000001101110000100%66100100000100001000010000010010000000&66011000100000011010100100011010000000'26101000000000(36010100100100010000)36100010010010100000*46000010100100101000000000+46000001001110010000000000,36000000000000010100-46000000001110000000000000.26000000001000/66000010000100001000010000100000000000056011001001010010100100110000000156011000010000100001000010000000256111000001001100100001111000000356111000001001100000101110000000456100101001010010011100001000000556111101000011100000101110000000656011001000011100100100110000000756111000001000010001100001000000856011001001001100100100110000000956011001001010010011100001000000:26001000100000;26001000101000<46001001001000010000100000=46000011100000111000000000>46100001000010010010000000?56111000001001100000000100000000@66011100100010101110101010011100000000A56011001001010010111101001000000B56111001001011100100101110000000C56011001001010000100100110000000D56111001001010010100101110000000E56111101000011000100001111000000F56111101000010000110001000000000G56011001000010110100100111000000H56100101001011110100101001000000I26101010101000J56000100001000010100100110000000K56100101001010010111001001000000L46100010001000100011100000M66100010100010110110101010100010000000N56100101001011010101101001000000O56011001001010010100100110000000P56111001001010010111001000000000Q56011001001010010100100110000010R56111001001010010111001001000000S56011101000001100000101110000000T46111001000100010001000000U56100101001010010100100110000000V56100101001010010101000100000000W66100010100010101010110110100010000000X56100101001001100100101001000000Y56100101001010010011100001001100Z56111100001001100100001111000000[36110100100100110000}46110001000010010011000000]36110010010010110000^46010010100000000000000000_46000000000000000011110000'26101000000000a56000000111010010100100111000000b56100001110010010100101110000000c46000001101000100001100000d56000100111010010100100111000000e56000000110010110110000110000000f46011010001000110010000000g5700000011001001010010011100001001100h56100001110010010100101001000000i26100010101000j37010000010010010010100k56100001001010010111001001000000l26101010101000m66000000111100101010101010101010000000n56000001110010010100101001000000o56000000110010010100100110000000p5700000111001001010010111001000010000q5700000011101001010010011100001000010r46000010101100100010000000s56000000111011000001101110000000t46100011001000100001100000u56000001001010010100100111000000v56000001001010010101000100000000w66000000101010101010101010011110000000x56000001001010010011001001000000y5700000100101001010010011100001001100z56000001111000100010001111000000{46011001001000010001100000|26101010101000}46110001000010010011000000~56010101010000000000000000000000\\46111010101010101011100000",i,1);
		var gw = Std.parseInt((function($this) {
			var $r;
			var pos = ++i;
			$r = HxOverrides.substr(" 36000000000000000000!26101010001000\"46101010100000000000000000#66010100111110010100111110010100000000$56001000111011000001101110000100%66100100000100001000010000010010000000&66011000100000011010100100011010000000'26101000000000(36010100100100010000)36100010010010100000*46000010100100101000000000+46000001001110010000000000,36000000000000010100-46000000001110000000000000.26000000001000/66000010000100001000010000100000000000056011001001010010100100110000000156011000010000100001000010000000256111000001001100100001111000000356111000001001100000101110000000456100101001010010011100001000000556111101000011100000101110000000656011001000011100100100110000000756111000001000010001100001000000856011001001001100100100110000000956011001001010010011100001000000:26001000100000;26001000101000<46001001001000010000100000=46000011100000111000000000>46100001000010010010000000?56111000001001100000000100000000@66011100100010101110101010011100000000A56011001001010010111101001000000B56111001001011100100101110000000C56011001001010000100100110000000D56111001001010010100101110000000E56111101000011000100001111000000F56111101000010000110001000000000G56011001000010110100100111000000H56100101001011110100101001000000I26101010101000J56000100001000010100100110000000K56100101001010010111001001000000L46100010001000100011100000M66100010100010110110101010100010000000N56100101001011010101101001000000O56011001001010010100100110000000P56111001001010010111001000000000Q56011001001010010100100110000010R56111001001010010111001001000000S56011101000001100000101110000000T46111001000100010001000000U56100101001010010100100110000000V56100101001010010101000100000000W66100010100010101010110110100010000000X56100101001001100100101001000000Y56100101001010010011100001001100Z56111100001001100100001111000000[36110100100100110000}46110001000010010011000000]36110010010010110000^46010010100000000000000000_46000000000000000011110000'26101000000000a56000000111010010100100111000000b56100001110010010100101110000000c46000001101000100001100000d56000100111010010100100111000000e56000000110010110110000110000000f46011010001000110010000000g5700000011001001010010011100001001100h56100001110010010100101001000000i26100010101000j37010000010010010010100k56100001001010010111001001000000l26101010101000m66000000111100101010101010101010000000n56000001110010010100101001000000o56000000110010010100100110000000p5700000111001001010010111001000010000q5700000011101001010010011100001000010r46000010101100100010000000s56000000111011000001101110000000t46100011001000100001100000u56000001001010010100100111000000v56000001001010010101000100000000w66000000101010101010101010011110000000x56000001001010010011001001000000y5700000100101001010010011100001001100z56000001111000100010001111000000{46011001001000010001100000|26101010101000}46110001000010010011000000~56010101010000000000000000000000\\46111010101010101011100000",pos,1);
			return $r;
		}(this)));
		var gh = Std.parseInt((function($this) {
			var $r;
			var pos1 = ++i;
			$r = HxOverrides.substr(" 36000000000000000000!26101010001000\"46101010100000000000000000#66010100111110010100111110010100000000$56001000111011000001101110000100%66100100000100001000010000010010000000&66011000100000011010100100011010000000'26101000000000(36010100100100010000)36100010010010100000*46000010100100101000000000+46000001001110010000000000,36000000000000010100-46000000001110000000000000.26000000001000/66000010000100001000010000100000000000056011001001010010100100110000000156011000010000100001000010000000256111000001001100100001111000000356111000001001100000101110000000456100101001010010011100001000000556111101000011100000101110000000656011001000011100100100110000000756111000001000010001100001000000856011001001001100100100110000000956011001001010010011100001000000:26001000100000;26001000101000<46001001001000010000100000=46000011100000111000000000>46100001000010010010000000?56111000001001100000000100000000@66011100100010101110101010011100000000A56011001001010010111101001000000B56111001001011100100101110000000C56011001001010000100100110000000D56111001001010010100101110000000E56111101000011000100001111000000F56111101000010000110001000000000G56011001000010110100100111000000H56100101001011110100101001000000I26101010101000J56000100001000010100100110000000K56100101001010010111001001000000L46100010001000100011100000M66100010100010110110101010100010000000N56100101001011010101101001000000O56011001001010010100100110000000P56111001001010010111001000000000Q56011001001010010100100110000010R56111001001010010111001001000000S56011101000001100000101110000000T46111001000100010001000000U56100101001010010100100110000000V56100101001010010101000100000000W66100010100010101010110110100010000000X56100101001001100100101001000000Y56100101001010010011100001001100Z56111100001001100100001111000000[36110100100100110000}46110001000010010011000000]36110010010010110000^46010010100000000000000000_46000000000000000011110000'26101000000000a56000000111010010100100111000000b56100001110010010100101110000000c46000001101000100001100000d56000100111010010100100111000000e56000000110010110110000110000000f46011010001000110010000000g5700000011001001010010011100001001100h56100001110010010100101001000000i26100010101000j37010000010010010010100k56100001001010010111001001000000l26101010101000m66000000111100101010101010101010000000n56000001110010010100101001000000o56000000110010010100100110000000p5700000111001001010010111001000010000q5700000011101001010010011100001000010r46000010101100100010000000s56000000111011000001101110000000t46100011001000100001100000u56000001001010010100100111000000v56000001001010010101000100000000w66000000101010101010101010011110000000x56000001001010010011001001000000y5700000100101001010010011100001001100z56000001111000100010001111000000{46011001001000010001100000|26101010101000}46110001000010010011000000~56010101010000000000000000000000\\46111010101010101011100000",pos1,1);
			return $r;
		}(this)));
		var _g = 0;
		while(_g < gh) {
			var py = _g++;
			var _g1 = 0;
			while(_g1 < gw) {
				var px = _g1++;
				i++;
				if(HxOverrides.substr(" 36000000000000000000!26101010001000\"46101010100000000000000000#66010100111110010100111110010100000000$56001000111011000001101110000100%66100100000100001000010000010010000000&66011000100000011010100100011010000000'26101000000000(36010100100100010000)36100010010010100000*46000010100100101000000000+46000001001110010000000000,36000000000000010100-46000000001110000000000000.26000000001000/66000010000100001000010000100000000000056011001001010010100100110000000156011000010000100001000010000000256111000001001100100001111000000356111000001001100000101110000000456100101001010010011100001000000556111101000011100000101110000000656011001000011100100100110000000756111000001000010001100001000000856011001001001100100100110000000956011001001010010011100001000000:26001000100000;26001000101000<46001001001000010000100000=46000011100000111000000000>46100001000010010010000000?56111000001001100000000100000000@66011100100010101110101010011100000000A56011001001010010111101001000000B56111001001011100100101110000000C56011001001010000100100110000000D56111001001010010100101110000000E56111101000011000100001111000000F56111101000010000110001000000000G56011001000010110100100111000000H56100101001011110100101001000000I26101010101000J56000100001000010100100110000000K56100101001010010111001001000000L46100010001000100011100000M66100010100010110110101010100010000000N56100101001011010101101001000000O56011001001010010100100110000000P56111001001010010111001000000000Q56011001001010010100100110000010R56111001001010010111001001000000S56011101000001100000101110000000T46111001000100010001000000U56100101001010010100100110000000V56100101001010010101000100000000W66100010100010101010110110100010000000X56100101001001100100101001000000Y56100101001010010011100001001100Z56111100001001100100001111000000[36110100100100110000}46110001000010010011000000]36110010010010110000^46010010100000000000000000_46000000000000000011110000'26101000000000a56000000111010010100100111000000b56100001110010010100101110000000c46000001101000100001100000d56000100111010010100100111000000e56000000110010110110000110000000f46011010001000110010000000g5700000011001001010010011100001001100h56100001110010010100101001000000i26100010101000j37010000010010010010100k56100001001010010111001001000000l26101010101000m66000000111100101010101010101010000000n56000001110010010100101001000000o56000000110010010100100110000000p5700000111001001010010111001000010000q5700000011101001010010011100001000010r46000010101100100010000000s56000000111011000001101110000000t46100011001000100001100000u56000001001010010100100111000000v56000001001010010101000100000000w66000000101010101010101010011110000000x56000001001010010011001001000000y5700000100101001010010011100001001100z56000001111000100010001111000000{46011001001000010001100000|26101010101000}46110001000010010011000000~56010101010000000000000000000000\\46111010101010101011100000",i,1) == "1") bd.setPixel32(1 + letterPos * 7 + px,1 + py,-1); else bd.setPixel32(1 + letterPos * 7 + px,1 + py,0);
			}
		}
		i++;
		letterPos++;
	}
	return terrylib.bitmapFont.BitmapFont.fromXNA("defaultFontKey",bd,letters);
};
terrylib.bitmapFont.BitmapFont.fromAngelCode = function(Source,Data) {
	var fast = new haxe.xml.Fast(Data.firstElement());
	var fontName = Std.string(fast.node.resolve("info").att.resolve("face"));
	var font = terrylib.bitmapFont.BitmapFont.get(fontName);
	if(font != null) return font;
	font = new terrylib.bitmapFont.BitmapFont(fontName,Source);
	font.lineHeight = Std.parseInt(fast.node.resolve("common").att.resolve("lineHeight"));
	font.size = Std.parseInt(fast.node.resolve("info").att.resolve("size"));
	font.fontName = Std.string(fast.node.resolve("info").att.resolve("face"));
	font.bold = Std.parseInt(fast.node.resolve("info").att.resolve("bold")) != 0;
	font.italic = Std.parseInt(fast.node.resolve("info").att.resolve("italic")) != 0;
	var frame;
	var glyph;
	var charCode;
	var spaceCharCode = HxOverrides.cca(" ",0);
	var xOffset;
	var yOffset;
	var xAdvance;
	var frameHeight;
	var chars = fast.node.resolve("chars");
	var $it0 = chars.nodes.resolve("char").iterator();
	while( $it0.hasNext() ) {
		var $char = $it0.next();
		frame = new openfl.geom.Rectangle();
		frame.x = Std.parseInt($char.att.resolve("x"));
		frame.y = Std.parseInt($char.att.resolve("y"));
		frame.width = Std.parseInt($char.att.resolve("width"));
		frameHeight = Std.parseInt($char.att.resolve("height"));
		frame.height = frameHeight;
		if($char.has.resolve("xoffset")) xOffset = Std.parseInt($char.att.resolve("xoffset")); else xOffset = 0;
		if($char.has.resolve("yoffset")) yOffset = Std.parseInt($char.att.resolve("yoffset")); else yOffset = 0;
		if($char.has.resolve("xadvance")) xAdvance = Std.parseInt($char.att.resolve("xadvance")); else xAdvance = 0;
		if(font.minOffsetX > xOffset) font.minOffsetX = xOffset; else font.minOffsetX = font.minOffsetX;
		glyph = null;
		charCode = -1;
		if($char.has.resolve("letter")) glyph = $char.att.resolve("letter"); else if($char.has.resolve("id")) charCode = Std.parseInt($char.att.resolve("id"));
		if(charCode == -1 && glyph == null) throw "Invalid font xml data!";
		if(glyph != null) {
			switch(glyph) {
			case "space":
				glyph = " ";
				break;
			case "&quot;":
				glyph = "\"";
				break;
			case "&amp;":
				glyph = "&";
				break;
			case "&gt;":
				glyph = ">";
				break;
			case "&lt;":
				glyph = "<";
				break;
			default:
				glyph = glyph;
			}
			charCode = HxOverrides.cca(glyph,0);
		}
		font.addGlyphFrame(charCode,frame,xOffset,yOffset,xAdvance);
		if(charCode == spaceCharCode) font.spaceWidth = xAdvance; else if(font.lineHeight > frameHeight + yOffset) font.lineHeight = font.lineHeight; else font.lineHeight = frameHeight + yOffset;
	}
	return font;
};
terrylib.bitmapFont.BitmapFont.fromXNA = function(key,source,letters,glyphBGColor) {
	if(glyphBGColor == null) glyphBGColor = 0;
	var font = terrylib.bitmapFont.BitmapFont.get(key);
	if(font != null) return font;
	font = new terrylib.bitmapFont.BitmapFont(key,source);
	font.fontName = key;
	if(letters == null) letters = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~"; else letters = letters;
	var bmd = source;
	var globalBGColor = bmd.getPixel(0,0);
	var cy = 0;
	var cx;
	var letterIdx = 0;
	var charCode;
	var numLetters = letters.length;
	var rect;
	var xAdvance;
	while(cy < bmd.height && letterIdx < numLetters) {
		var rowHeight = 0;
		cx = 0;
		while(cx < bmd.width && letterIdx < numLetters) {
			if(Std["int"](bmd.getPixel(cx,cy)) != globalBGColor) {
				var gx = cx;
				var gy = cy;
				while(Std["int"](bmd.getPixel(gx,cy)) != globalBGColor) gx++;
				while(Std["int"](bmd.getPixel(cx,gy)) != globalBGColor) gy++;
				var gw = gx - cx;
				var gh = gy - cy;
				charCode = HxOverrides.cca(letters,letterIdx);
				rect = new openfl.geom.Rectangle(cx,cy,gw,gh);
				xAdvance = gw;
				font.addGlyphFrame(charCode,rect,0,0,xAdvance);
				if(charCode == 32) font.spaceWidth = xAdvance;
				if(gh > rowHeight) rowHeight = gh;
				if(gh > font.size) font.size = gh;
				cx += gw;
				letterIdx++;
			}
			cx++;
		}
		cy += rowHeight + 1;
	}
	font.lineHeight = font.size;
	terrylib.bitmapFont.BitmapFont.POINT.x = terrylib.bitmapFont.BitmapFont.POINT.y = 0;
	var bgColor32 = bmd.getPixel32(0,0);
	terrylib.bitmapFont.BitmapFont.replaceColor(bmd,bgColor32,0);
	if(glyphBGColor != 0) terrylib.bitmapFont.BitmapFont.replaceColor(bmd,glyphBGColor,0);
	return font;
};
terrylib.bitmapFont.BitmapFont.replaceColor = function(bitmapData,color,newColor) {
	var row = 0;
	var column = 0;
	var rows = bitmapData.height;
	var columns = bitmapData.width;
	bitmapData.lock();
	while(row < rows) {
		column = 0;
		while(column < columns) {
			if(bitmapData.getPixel32(column,row) == color) bitmapData.setPixel32(column,row,newColor);
			column++;
		}
		row++;
	}
	bitmapData.unlock();
	return bitmapData;
};
terrylib.bitmapFont.BitmapFont.prototype = {
	addGlyphFrame: function(charCode,frame,offsetX,offsetY,xAdvance) {
		if(xAdvance == null) xAdvance = 0;
		if(offsetY == null) offsetY = 0;
		if(offsetX == null) offsetX = 0;
		if(frame.width == 0 || frame.height == 0 || this.glyphs.get(charCode) != null) return;
		var glyphFrame = new terrylib.bitmapFont.BitmapGlyphFrame(this);
		glyphFrame.charCode = charCode;
		glyphFrame.xoffset = offsetX;
		glyphFrame.yoffset = offsetY;
		glyphFrame.xadvance = xAdvance;
		glyphFrame.rect = frame;
		this.glyphs.set(charCode,glyphFrame);
	}
	,prepareGlyphs: function(scale,color,useColor,smoothing) {
		if(smoothing == null) smoothing = false;
		if(useColor == null) useColor = true;
		return new terrylib.bitmapFont.BitmapGlyphCollection(this,scale,color,useColor,smoothing);
	}
	,__class__: terrylib.bitmapFont.BitmapFont
};
terrylib.bitmapFont.BitmapGlyphFrame = function(parent) {
	this.parent = parent;
};
$hxClasses["terrylib.bitmapFont.BitmapGlyphFrame"] = terrylib.bitmapFont.BitmapGlyphFrame;
terrylib.bitmapFont.BitmapGlyphFrame.__name__ = true;
terrylib.bitmapFont.BitmapGlyphFrame.prototype = {
	get_bitmap: function() {
		if(this._bitmap != null) return this._bitmap;
		this._bitmap = new openfl.display.BitmapData(Math.ceil(this.rect.width),Math.ceil(this.rect.height),true,0);
		this._bitmap.copyPixels(this.parent.bitmap,this.rect,new openfl.geom.Point());
		return this._bitmap;
	}
	,__class__: terrylib.bitmapFont.BitmapGlyphFrame
};
terrylib.bitmapFont.BitmapGlyphCollection = function(font,scale,color,useColor,smoothing) {
	if(smoothing == null) smoothing = false;
	if(useColor == null) useColor = true;
	this.spaceWidth = 0;
	this.minOffsetX = 0;
	this.glyphMap = new haxe.ds.IntMap();
	this.glyphs = new Array();
	this.font = font;
	this.scale = scale;
	if(useColor) this.color = color; else this.color = -1;
	this.minOffsetX = font.minOffsetX * scale;
	this.prepareGlyphs(smoothing);
};
$hxClasses["terrylib.bitmapFont.BitmapGlyphCollection"] = terrylib.bitmapFont.BitmapGlyphCollection;
terrylib.bitmapFont.BitmapGlyphCollection.__name__ = true;
terrylib.bitmapFont.BitmapGlyphCollection.prototype = {
	prepareGlyphs: function(smoothing) {
		if(smoothing == null) smoothing = false;
		var matrix = new openfl.geom.Matrix();
		matrix.scale(this.scale,this.scale);
		var colorTransform = new openfl.geom.ColorTransform();
		colorTransform.redMultiplier = (function($this) {
			var $r;
			var $int = $this.color >> 16 & 255;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)) / (function($this) {
			var $r;
			var int1 = 255;
			$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
			return $r;
		}(this));
		colorTransform.greenMultiplier = (function($this) {
			var $r;
			var int2 = $this.color >> 8 & 255;
			$r = int2 < 0?4294967296.0 + int2:int2 + 0.0;
			return $r;
		}(this)) / (function($this) {
			var $r;
			var int3 = 255;
			$r = int3 < 0?4294967296.0 + int3:int3 + 0.0;
			return $r;
		}(this));
		colorTransform.blueMultiplier = (function($this) {
			var $r;
			var int4 = $this.color & 255;
			$r = int4 < 0?4294967296.0 + int4:int4 + 0.0;
			return $r;
		}(this)) / (function($this) {
			var $r;
			var int5 = 255;
			$r = int5 < 0?4294967296.0 + int5:int5 + 0.0;
			return $r;
		}(this));
		colorTransform.alphaMultiplier = (function($this) {
			var $r;
			var int6 = $this.color >> 24 & 255;
			$r = int6 < 0?4294967296.0 + int6:int6 + 0.0;
			return $r;
		}(this)) / (function($this) {
			var $r;
			var int7 = 255;
			$r = int7 < 0?4294967296.0 + int7:int7 + 0.0;
			return $r;
		}(this));
		var glyphBD;
		var preparedBD;
		var glyph;
		var preparedGlyph;
		var bdWidth;
		var bdHeight;
		var offsetX;
		var offsetY;
		var xAdvance;
		this.spaceWidth = this.font.spaceWidth * this.scale;
		var $it0 = this.font.glyphs.iterator();
		while( $it0.hasNext() ) {
			var glyph1 = $it0.next();
			glyphBD = glyph1.get_bitmap();
			bdWidth = Math.ceil(glyphBD.width * this.scale);
			bdHeight = Math.ceil(glyphBD.height * this.scale);
			if(bdWidth > 0) bdWidth = bdWidth; else bdWidth = 1;
			if(bdHeight > 0) bdHeight = bdHeight; else bdHeight = 1;
			preparedBD = new openfl.display.BitmapData(bdWidth,bdHeight,true,0);
			preparedBD.draw(glyphBD,matrix,null,null,null,smoothing);
			preparedBD.colorTransform(preparedBD.rect,colorTransform);
			offsetX = Math.ceil(glyph1.xoffset * this.scale);
			offsetY = Math.ceil(glyph1.yoffset * this.scale);
			xAdvance = Math.ceil(glyph1.xadvance * this.scale);
			preparedGlyph = new terrylib.bitmapFont.BitmapGlyph(glyph1.charCode,preparedBD,offsetX,offsetY,xAdvance);
			this.glyphs.push(preparedGlyph);
			this.glyphMap.set(preparedGlyph.charCode,preparedGlyph);
		}
	}
	,dispose: function() {
		if(this.glyphs != null) {
			var _g = 0;
			var _g1 = this.glyphs;
			while(_g < _g1.length) {
				var glyph = _g1[_g];
				++_g;
				glyph.dispose();
			}
		}
		this.glyphs = null;
		this.glyphMap = null;
		this.font = null;
	}
	,__class__: terrylib.bitmapFont.BitmapGlyphCollection
};
terrylib.bitmapFont.BitmapGlyph = function(charCode,bmd,offsetX,offsetY,xAdvance) {
	if(xAdvance == null) xAdvance = 0;
	if(offsetY == null) offsetY = 0;
	if(offsetX == null) offsetX = 0;
	this.xAdvance = 0;
	this.offsetY = 0;
	this.offsetX = 0;
	this.charCode = charCode;
	this.bitmap = bmd;
	this.offsetX = offsetX;
	this.offsetY = offsetY;
	this.xAdvance = xAdvance;
	this.rect = bmd.rect;
};
$hxClasses["terrylib.bitmapFont.BitmapGlyph"] = terrylib.bitmapFont.BitmapGlyph;
terrylib.bitmapFont.BitmapGlyph.__name__ = true;
terrylib.bitmapFont.BitmapGlyph.prototype = {
	dispose: function() {
		if(this.bitmap != null) this.bitmap.dispose();
		this.bitmap = null;
	}
	,__class__: terrylib.bitmapFont.BitmapGlyph
};
terrylib.bitmapFont.BitmapTextField = function(font,text,pixelSnapping,smoothing) {
	if(smoothing == null) smoothing = false;
	if(text == null) text = "";
	this._fieldHeight = 1;
	this._fieldWidth = 1;
	this._pendingBorderGlyphsChange = false;
	this._pendingTextGlyphsChange = true;
	this._pendingGraphicChange = true;
	this._pendingTextChange = true;
	this.updateImmediately = true;
	this.size = 1;
	this.multiLine = true;
	this.backgroundColor = 0;
	this.background = false;
	this.borderQuality = 0;
	this.borderSize = 1;
	this.borderColor = -16777216;
	this.borderStyle = terrylib.bitmapFont.TextBorderStyle.NONE;
	this.useTextColor = false;
	this.textColor = -1;
	this.numSpacesInTab = 4;
	this.padding = 0;
	this.autoSize = true;
	this.wrapByWord = true;
	this.wordWrap = true;
	this.autoUpperCase = false;
	this.letterSpacing = 0;
	this.lineSpacing = 0;
	this.alignment = "left";
	this._linesWidth = [];
	this._lines = [];
	this.text = "";
	openfl.display.Sprite.call(this);
	this.shadowOffset = new openfl.geom.Point(1,1);
	if(pixelSnapping == null) pixelSnapping = openfl.display.PixelSnapping.AUTO; else pixelSnapping = pixelSnapping;
	this._bitmapData = new openfl.display.BitmapData(this._fieldWidth,this._fieldHeight,true,0);
	this._bitmap = new openfl.display.Bitmap(this._bitmapData,pixelSnapping,smoothing);
	this._bitmap.smoothing = false;
	this.addChild(this._bitmap);
	this._point = new openfl.geom.Point();
	if(font == null) font = terrylib.bitmapFont.BitmapFont.getDefaultFont();
	this.set_font(font);
	this.set_text(text);
	this.set_smoothing(smoothing);
};
$hxClasses["terrylib.bitmapFont.BitmapTextField"] = terrylib.bitmapFont.BitmapTextField;
terrylib.bitmapFont.BitmapTextField.__name__ = true;
terrylib.bitmapFont.BitmapTextField.__super__ = openfl.display.Sprite;
terrylib.bitmapFont.BitmapTextField.prototype = $extend(openfl.display.Sprite.prototype,{
	set_textColor: function(value) {
		if((function($this) {
			var $r;
			var $int = $this.textColor;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)) != (function($this) {
			var $r;
			var int1 = value;
			$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
			return $r;
		}(this))) {
			this.textColor = value;
			this._pendingTextGlyphsChange = true;
			if(this.updateImmediately) {
				if(this._pendingTextGlyphsChange) this.updateTextGlyphs();
				if(this._pendingBorderGlyphsChange) this.updateBorderGlyphs();
				if(this._pendingTextChange) {
					this.updateText();
					this._pendingGraphicChange = true;
				}
				if(this._pendingGraphicChange) this.updateGraphic();
			}
		}
		return value;
	}
	,set_useTextColor: function(value) {
		if(this.useTextColor != value) {
			this.useTextColor = value;
			this._pendingTextGlyphsChange = true;
			if(this.updateImmediately) {
				if(this._pendingTextGlyphsChange) this.updateTextGlyphs();
				if(this._pendingBorderGlyphsChange) this.updateBorderGlyphs();
				if(this._pendingTextChange) {
					this.updateText();
					this._pendingGraphicChange = true;
				}
				if(this._pendingGraphicChange) this.updateGraphic();
			}
		}
		return value;
	}
	,set_text: function(value) {
		if(value != this.text && value != null) {
			this.text = value;
			this._pendingTextChange = true;
			if(this.updateImmediately) {
				if(this._pendingTextGlyphsChange) this.updateTextGlyphs();
				if(this._pendingBorderGlyphsChange) this.updateBorderGlyphs();
				if(this._pendingTextChange) {
					this.updateText();
					this._pendingGraphicChange = true;
				}
				if(this._pendingGraphicChange) this.updateGraphic();
			}
		}
		return value;
	}
	,updateText: function() {
		var tmp;
		if(this.autoUpperCase) tmp = this.text.toUpperCase(); else tmp = this.text;
		this._lines = tmp.split("\n");
		if(!this.autoSize) {
			if(this.wordWrap) this.wrap(); else this.cutLines();
		}
		if(!this.multiLine) this._lines = [this._lines[0]];
		this._pendingTextChange = false;
		this._pendingGraphicChange = true;
	}
	,computeTextSize: function() {
		var txtWidth = Math.ceil(this._fieldWidth);
		var txtHeight = Math.ceil(this.get_textHeight()) + 2 * this.padding;
		var tw = Math.ceil(this.get_textWidth());
		if(this.autoSize) txtWidth = tw + 2 * this.padding; else txtWidth = Math.ceil(this._fieldWidth);
		if(txtWidth == 0) this._fieldWidth = 1; else this._fieldWidth = txtWidth;
		if(txtHeight == 0) this._fieldHeight = 1; else this._fieldHeight = txtHeight;
	}
	,getLineWidth: function(lineIndex) {
		if(lineIndex < 0 || lineIndex >= this._lines.length) return 0;
		return this.getStringWidth(this._lines[lineIndex]);
	}
	,getStringWidth: function(str,fordrawing) {
		if(fordrawing == null) fordrawing = true;
		var spaceWidth = Math.ceil(this.font.spaceWidth * this.size);
		var tabWidth = Math.ceil(spaceWidth * this.numSpacesInTab);
		var lineLength = str.length;
		var lineWidth = Math.ceil(Math.abs(this.font.minOffsetX) * this.size);
		if(!fordrawing) lineWidth = 0;
		var charCode;
		var charWidth = 0;
		var widthPlusOffset = 0;
		var glyphFrame;
		var _g = 0;
		while(_g < lineLength) {
			var c = _g++;
			charCode = HxOverrides.cca(str,c);
			if(charCode == 32) charWidth = spaceWidth; else if(charCode == 9) charWidth = tabWidth; else if(this.font.glyphs.exists(charCode)) {
				glyphFrame = this.font.glyphs.get(charCode);
				charWidth = Math.ceil(glyphFrame.xadvance * this.size);
				if(c == lineLength - 1) {
					widthPlusOffset = Math.ceil((glyphFrame.xoffset + glyphFrame.get_bitmap().width) * this.size);
					if(widthPlusOffset > charWidth) charWidth = widthPlusOffset;
				}
			} else charWidth = 0;
			lineWidth += charWidth + this.letterSpacing;
		}
		if(lineLength > 0) lineWidth -= this.letterSpacing;
		return lineWidth;
	}
	,cutLines: function() {
		var newLines = [];
		var lineLength;
		var c;
		var $char;
		var charCode;
		var charWidth = 0;
		var subLine;
		var subLineWidth;
		var spaceWidth = this.font.spaceWidth * this.size;
		var tabWidth = spaceWidth * this.numSpacesInTab;
		var startX = Math.abs(this.font.minOffsetX) * this.size;
		var _g = 0;
		var _g1 = this._lines;
		while(_g < _g1.length) {
			var line = _g1[_g];
			++_g;
			lineLength = line.length;
			subLine = new haxe.Utf8();
			subLineWidth = startX;
			c = 0;
			while(c < lineLength) {
				charCode = HxOverrides.cca(line,c);
				if(charCode == 32) charWidth = spaceWidth; else if(charCode == 9) charWidth = tabWidth; else if(this.font.glyphs.exists(charCode)) charWidth = this.font.glyphs.get(charCode).xadvance * this.size; else charWidth = 0;
				charWidth += this.letterSpacing;
				if(subLineWidth + charWidth > this._fieldWidth - 2 * this.padding) {
					subLine.__b += String.fromCharCode(charCode);
					newLines.push(subLine.__b);
					subLine = new haxe.Utf8();
					subLineWidth = startX;
					c = lineLength;
				} else {
					subLine.__b += String.fromCharCode(charCode);
					subLineWidth += charWidth;
				}
				c++;
			}
		}
		this._lines = newLines;
	}
	,wrap: function() {
		var newLines = [];
		var words;
		var _g = 0;
		var _g1 = this._lines;
		while(_g < _g1.length) {
			var line = _g1[_g];
			++_g;
			words = [];
			this.splitLineIntoWords(line,words);
			if(this.wrapByWord) this.wrapLineByWord(words,newLines); else this.wrapLineByCharacter(words,newLines);
		}
		this._lines = newLines;
	}
	,splitLineIntoWords: function(line,words) {
		var word = "";
		var wordUtf8 = new haxe.Utf8();
		var isSpaceWord = false;
		var lineLength = line.length;
		var hyphenCode = HxOverrides.cca("-",0);
		var c = 0;
		var charCode;
		var charUtf8;
		while(c < lineLength) {
			charCode = HxOverrides.cca(line,c);
			word = wordUtf8.__b;
			if(charCode == 32 || charCode == 9) {
				if(!isSpaceWord) {
					isSpaceWord = true;
					if(word != "") {
						words.push(word);
						wordUtf8 = new haxe.Utf8();
					}
				}
				wordUtf8.__b += String.fromCharCode(charCode);
			} else if(charCode == hyphenCode) {
				if(isSpaceWord && word != "") {
					isSpaceWord = false;
					words.push(word);
					words.push("-");
				} else if(isSpaceWord == false) {
					charUtf8 = new haxe.Utf8();
					charUtf8.__b += String.fromCharCode(charCode);
					words.push(word + charUtf8.__b);
				}
				wordUtf8 = new haxe.Utf8();
			} else {
				if(isSpaceWord && word != "") {
					isSpaceWord = false;
					words.push(word);
					wordUtf8 = new haxe.Utf8();
				}
				wordUtf8.__b += String.fromCharCode(charCode);
			}
			c++;
		}
		word = wordUtf8.__b;
		if(word != "") words.push(word);
	}
	,wrapLineByWord: function(words,newLines) {
		var numWords = words.length;
		var w;
		var word;
		var wordWidth;
		var wordLength;
		var isSpaceWord = false;
		var charCode;
		var charWidth = 0;
		var subLines = [];
		var subLine;
		var subLineWidth;
		var spaceWidth = this.font.spaceWidth * this.size;
		var tabWidth = spaceWidth * this.numSpacesInTab;
		var startX = Math.abs(this.font.minOffsetX) * this.size;
		if(numWords > 0) {
			w = 0;
			subLineWidth = startX;
			subLine = "";
			while(w < numWords) {
				wordWidth = 0;
				word = words[w];
				wordLength = word.length;
				charCode = HxOverrides.cca(word,0);
				isSpaceWord = charCode == 32 || charCode == 9;
				var _g = 0;
				while(_g < wordLength) {
					var c = _g++;
					charCode = HxOverrides.cca(word,c);
					if(charCode == 32) charWidth = spaceWidth; else if(charCode == 9) charWidth = tabWidth; else if(this.font.glyphs.exists(charCode)) charWidth = this.font.glyphs.get(charCode).xadvance * this.size; else charWidth = 0;
					wordWidth += charWidth;
				}
				wordWidth += (wordLength - 1) * this.letterSpacing;
				if(subLineWidth + wordWidth > this._fieldWidth - 2 * this.padding) {
					if(isSpaceWord) {
						subLines.push(subLine);
						subLine = "";
						subLineWidth = startX;
					} else if(subLine != "") {
						subLines.push(subLine);
						subLine = word;
						subLineWidth = startX + wordWidth + this.letterSpacing;
					} else {
						subLine = word;
						subLineWidth = startX + wordWidth + this.letterSpacing;
					}
				} else {
					subLine += word;
					subLineWidth += wordWidth + this.letterSpacing;
				}
				w++;
			}
			if(subLine != "") subLines.push(subLine);
		}
		var _g1 = 0;
		while(_g1 < subLines.length) {
			var subline = subLines[_g1];
			++_g1;
			newLines.push(subline);
		}
	}
	,wrapLineByCharacter: function(words,newLines) {
		var numWords = words.length;
		var w;
		var word;
		var wordLength;
		var isSpaceWord = false;
		var $char;
		var charCode;
		var c;
		var charWidth = 0;
		var subLines = [];
		var subLine;
		var subLineUtf8;
		var subLineWidth;
		var spaceWidth = this.font.spaceWidth * this.size;
		var tabWidth = spaceWidth * this.numSpacesInTab;
		var startX = Math.abs(this.font.minOffsetX) * this.size;
		if(numWords > 0) {
			w = 0;
			subLineWidth = startX;
			subLineUtf8 = new haxe.Utf8();
			while(w < numWords) {
				word = words[w];
				wordLength = word.length;
				charCode = HxOverrides.cca(word,0);
				isSpaceWord = charCode == 32 || charCode == 9;
				c = 0;
				while(c < wordLength) {
					charCode = HxOverrides.cca(word,c);
					if(charCode == 32) charWidth = spaceWidth; else if(charCode == 9) charWidth = tabWidth; else if(this.font.glyphs.exists(charCode)) charWidth = this.font.glyphs.get(charCode).xadvance * this.size; else charWidth = 0;
					if(subLineWidth + charWidth > this._fieldWidth - 2 * this.padding) {
						subLine = subLineUtf8.__b;
						if(isSpaceWord) {
							subLines.push(subLine);
							c = wordLength;
							subLineUtf8 = new haxe.Utf8();
							subLineWidth = startX;
						} else if(subLine != "") {
							subLines.push(subLine);
							subLineUtf8 = new haxe.Utf8();
							subLineUtf8.__b += String.fromCharCode(charCode);
							subLineWidth = startX + charWidth + this.letterSpacing;
						} else {
							subLineUtf8 = new haxe.Utf8();
							subLineUtf8.__b += String.fromCharCode(charCode);
							subLineWidth = startX + charWidth + this.letterSpacing;
						}
					} else {
						subLineUtf8.__b += String.fromCharCode(charCode);
						subLineWidth += charWidth + this.letterSpacing;
					}
					c++;
				}
				w++;
			}
			subLine = subLineUtf8.__b;
			if(subLine != "") subLines.push(subLine);
		}
		var _g = 0;
		while(_g < subLines.length) {
			var subline = subLines[_g];
			++_g;
			newLines.push(subline);
		}
	}
	,updateGraphic: function() {
		this.computeTextSize();
		var colorForFill;
		if(this.background) colorForFill = this.backgroundColor; else colorForFill = 0;
		if(this._bitmapData == null || (this._fieldWidth != this._bitmapData.width || this._fieldHeight != this._bitmapData.height)) {
			if(this._bitmapData != null) this._bitmapData.dispose();
			this._bitmapData = new openfl.display.BitmapData(this._fieldWidth,this._fieldHeight,true,colorForFill);
			this._bitmap.bitmapData = this._bitmapData;
			this._bitmap.smoothing = this.smoothing;
		} else this._bitmapData.fillRect(this._bitmapData.rect,colorForFill);
		if(this.size > 0) {
			this._bitmapData.lock();
			var numLines = this._lines.length;
			var line;
			var lineWidth;
			var ox;
			var oy;
			var iterations = this.borderSize * this.borderQuality | 0;
			if(iterations <= 0) iterations = 1; else iterations = iterations;
			var delta = this.borderSize / iterations | 0;
			var iterationsX = 1;
			var iterationsY = 1;
			var deltaX = 1;
			var deltaY = 1;
			if(this.borderStyle == terrylib.bitmapFont.TextBorderStyle.SHADOW) {
				iterationsX = Math.round(Math.abs(this.shadowOffset.x) * this.borderQuality);
				if(iterationsX <= 0) iterationsX = 1; else iterationsX = iterationsX;
				iterationsY = Math.round(Math.abs(this.shadowOffset.y) * this.borderQuality);
				if(iterationsY <= 0) iterationsY = 1; else iterationsY = iterationsY;
				deltaX = Math.round(this.shadowOffset.x / iterationsX);
				deltaY = Math.round(this.shadowOffset.y / iterationsY);
			}
			var _g = 0;
			while(_g < numLines) {
				var i = _g++;
				line = this._lines[i];
				lineWidth = this._linesWidth[i];
				ox = Std["int"](Math.abs(this.font.minOffsetX) * this.size);
				oy = (i * (this.font.lineHeight * this.size + this.lineSpacing) | 0) + this.padding;
				if(this.alignment == "center") ox += ((this._fieldWidth - lineWidth) / 2 | 0) - this.padding;
				if(this.alignment == "right") ox += this._fieldWidth - (lineWidth | 0) - this.padding; else ox += this.padding;
				var _g1 = this.borderStyle;
				switch(_g1[1]) {
				case 1:
					var _g2 = 0;
					while(_g2 < iterationsY) {
						var iterY = _g2++;
						var _g3 = 0;
						while(_g3 < iterationsX) {
							var iterX = _g3++;
							this.blitLine(line,this.borderGlyphs,ox + deltaX * (iterX + 1),oy + deltaY * (iterY + 1));
						}
					}
					break;
				case 2:
					var itd = 0;
					var _g21 = 0;
					while(_g21 < iterations) {
						var iter = _g21++;
						itd = delta * (iter + 1);
						this.blitLine(line,this.borderGlyphs,ox - itd,oy - itd);
						this.blitLine(line,this.borderGlyphs,ox,oy - itd);
						this.blitLine(line,this.borderGlyphs,ox + itd,oy - itd);
						this.blitLine(line,this.borderGlyphs,ox - itd,oy);
						this.blitLine(line,this.borderGlyphs,ox + itd,oy);
						this.blitLine(line,this.borderGlyphs,ox - itd,oy + itd);
						this.blitLine(line,this.borderGlyphs,ox,oy + itd);
						this.blitLine(line,this.borderGlyphs,ox + itd,oy + itd);
					}
					break;
				case 3:
					var itd1 = 0;
					var _g22 = 0;
					while(_g22 < iterations) {
						var iter1 = _g22++;
						itd1 = delta * (iter1 + 1);
						this.blitLine(line,this.borderGlyphs,ox - itd1,oy - itd1);
						this.blitLine(line,this.borderGlyphs,ox + itd1,oy - itd1);
						this.blitLine(line,this.borderGlyphs,ox - itd1,oy + itd1);
						this.blitLine(line,this.borderGlyphs,ox + itd1,oy + itd1);
					}
					break;
				case 0:
					break;
				}
			}
			var _g4 = 0;
			while(_g4 < numLines) {
				var i1 = _g4++;
				line = this._lines[i1];
				lineWidth = this._linesWidth[i1];
				ox = Std["int"](Math.abs(this.font.minOffsetX) * this.size);
				oy = (i1 * (this.font.lineHeight * this.size + this.lineSpacing) | 0) + this.padding;
				if(this.alignment == "center") ox += ((this._fieldWidth - lineWidth) / 2 | 0) - this.padding;
				if(this.alignment == "right") ox += this._fieldWidth - (lineWidth | 0) - this.padding; else ox += this.padding;
				this.blitLine(line,this.textGlyphs,ox,oy);
			}
			this._bitmapData.unlock();
		}
		this._pendingGraphicChange = false;
	}
	,blitLine: function(line,glyphs,startX,startY) {
		if(glyphs == null) return;
		var glyph;
		var charCode;
		var curX = startX;
		var curY = startY;
		var spaceWidth = this.font.spaceWidth * this.size | 0;
		var tabWidth = spaceWidth * this.numSpacesInTab | 0;
		var lineLength = line.length;
		var _g = 0;
		while(_g < lineLength) {
			var i = _g++;
			charCode = HxOverrides.cca(line,i);
			if(charCode == 32) curX += spaceWidth; else if(charCode == 9) curX += tabWidth; else {
				glyph = glyphs.glyphMap.get(charCode);
				if(glyph != null) {
					this._point.x = curX + glyph.offsetX;
					this._point.y = curY + glyph.offsetY;
					this._bitmapData.copyPixels(glyph.bitmap,glyph.rect,this._point,null,null,true);
					curX += glyph.xAdvance;
				}
			}
			curX += this.letterSpacing;
		}
	}
	,set_font: function(value) {
		if(this.font != value && value != null) {
			this.font = value;
			this._pendingTextChange = true;
			this._pendingBorderGlyphsChange = true;
			if(this.updateImmediately) {
				if(this._pendingTextGlyphsChange) this.updateTextGlyphs();
				if(this._pendingBorderGlyphsChange) this.updateBorderGlyphs();
				if(this._pendingTextChange) {
					this.updateText();
					this._pendingGraphicChange = true;
				}
				if(this._pendingGraphicChange) this.updateGraphic();
			}
		}
		return value;
	}
	,set_background: function(value) {
		if(this.background != value) {
			this.background = value;
			this._pendingGraphicChange = true;
			if(this.updateImmediately) {
				if(this._pendingTextGlyphsChange) this.updateTextGlyphs();
				if(this._pendingBorderGlyphsChange) this.updateBorderGlyphs();
				if(this._pendingTextChange) {
					this.updateText();
					this._pendingGraphicChange = true;
				}
				if(this._pendingGraphicChange) this.updateGraphic();
			}
		}
		return value;
	}
	,get_textWidth: function() {
		var max = 0;
		var numLines = this._lines.length;
		var lineWidth;
		this._linesWidth = [];
		var _g = 0;
		while(_g < numLines) {
			var i = _g++;
			lineWidth = this.getLineWidth(i);
			this._linesWidth[i] = lineWidth;
			max = Math.max(max,lineWidth);
		}
		return max;
	}
	,get_textHeight: function() {
		return (this.get_lineHeight() + this.lineSpacing) * this._lines.length - this.lineSpacing;
	}
	,get_lineHeight: function() {
		return this.font.lineHeight * this.size;
	}
	,set_smoothing: function(value) {
		this._bitmap.smoothing = value;
		return this.smoothing = value;
	}
	,updateTextGlyphs: function() {
		if(this.font == null) return;
		if(this.textGlyphs != null) this.textGlyphs.dispose();
		this.textGlyphs = this.font.prepareGlyphs(this.size,this.textColor,this.useTextColor,this.smoothing);
		this._pendingTextGlyphsChange = false;
		this._pendingGraphicChange = true;
	}
	,updateBorderGlyphs: function() {
		if(this.font != null && (this.borderGlyphs == null || (function($this) {
			var $r;
			var $int = $this.borderColor;
			$r = $int < 0?4294967296.0 + $int:$int + 0.0;
			return $r;
		}(this)) != (function($this) {
			var $r;
			var int1 = $this.borderGlyphs.color;
			$r = int1 < 0?4294967296.0 + int1:int1 + 0.0;
			return $r;
		}(this)) || this.size != this.borderGlyphs.scale || this.font != this.borderGlyphs.font)) {
			if(this.borderGlyphs != null) this.borderGlyphs.dispose();
			this.borderGlyphs = this.font.prepareGlyphs(this.size,this.borderColor,true,this.smoothing);
		}
		this._pendingBorderGlyphsChange = false;
		this._pendingGraphicChange = true;
	}
	,__class__: terrylib.bitmapFont.BitmapTextField
});
terrylib.bitmapFont.TextBorderStyle = $hxClasses["terrylib.bitmapFont.TextBorderStyle"] = { __ename__ : true, __constructs__ : ["NONE","SHADOW","OUTLINE","OUTLINE_FAST"] };
terrylib.bitmapFont.TextBorderStyle.NONE = ["NONE",0];
terrylib.bitmapFont.TextBorderStyle.NONE.toString = $estr;
terrylib.bitmapFont.TextBorderStyle.NONE.__enum__ = terrylib.bitmapFont.TextBorderStyle;
terrylib.bitmapFont.TextBorderStyle.SHADOW = ["SHADOW",1];
terrylib.bitmapFont.TextBorderStyle.SHADOW.toString = $estr;
terrylib.bitmapFont.TextBorderStyle.SHADOW.__enum__ = terrylib.bitmapFont.TextBorderStyle;
terrylib.bitmapFont.TextBorderStyle.OUTLINE = ["OUTLINE",2];
terrylib.bitmapFont.TextBorderStyle.OUTLINE.toString = $estr;
terrylib.bitmapFont.TextBorderStyle.OUTLINE.__enum__ = terrylib.bitmapFont.TextBorderStyle;
terrylib.bitmapFont.TextBorderStyle.OUTLINE_FAST = ["OUTLINE_FAST",3];
terrylib.bitmapFont.TextBorderStyle.OUTLINE_FAST.toString = $estr;
terrylib.bitmapFont.TextBorderStyle.OUTLINE_FAST.__enum__ = terrylib.bitmapFont.TextBorderStyle;
terrylib.util = {};
terrylib.util.Fontclass = function(_name,_size) {
	this.type = terrylib.Text.fontfile[terrylib.Text.fontfileindex.get(_name)].type;
	if(this.type == "bitmap") this.loadbitmapfont(_name,_size); else if(this.type == "ttf") this.loadttffont(_name,_size);
};
$hxClasses["terrylib.util.Fontclass"] = terrylib.util.Fontclass;
terrylib.util.Fontclass.__name__ = true;
terrylib.util.Fontclass.prototype = {
	loadbitmapfont: function(_name,_size) {
		this.name = _name;
		this.size = _size;
		this.tf_bitmap = new terrylib.bitmapFont.BitmapTextField(terrylib.Text.fontfile[terrylib.Text.fontfileindex.get(_name)].bitmapfont);
		this.tf_bitmap.set_text("???");
		this.tf_bitmap.set_background(false);
		this.tfbitmap = new openfl.display.BitmapData(terrylib.Gfx.screenwidth,terrylib.Gfx.screenheight,true,0);
	}
	,loadttffont: function(_name,_size) {
		this.name = _name;
		this.size = _size;
		this.tf_ttf = new openfl.text.TextField();
		this.tf_ttf.set_embedFonts(true);
		this.tf_ttf.set_defaultTextFormat(new openfl.text.TextFormat(terrylib.Text.getfonttypename(_name),this.size,0,false));
		this.tf_ttf.set_selectable(false);
		this.tf_ttf.set_width(terrylib.Gfx.screenwidth);
		this.tf_ttf.set_height(terrylib.Gfx.screenheight);
		this.tf_ttf.set_antiAliasType(openfl.text.AntiAliasType.NORMAL);
		this.tf_ttf.set_text("???");
		this.tfbitmap = new openfl.display.BitmapData(terrylib.Gfx.screenwidth,terrylib.Gfx.screenheight,true,0);
		this.tf_ttf.set_height(terrylib.Gfx.screenheight);
	}
	,clearbitmap: function() {
		this.tfbitmap.fillRect(this.tfbitmap.rect,0);
	}
	,__class__: terrylib.util.Fontclass
};
terrylib.util.Fontfile = function(_file) {
	if(openfl.Assets.exists("data/fonts/" + _file + "/" + _file + ".fnt")) {
		this.type = "bitmap";
		this.fontxml = Xml.parse(openfl.Assets.getText("data/fonts/" + _file + "/" + _file + ".fnt"));
		var tempfontimage = openfl.Assets.getBitmapData("data/fonts/" + _file + "/" + _file + "_0.png");
		this.fontimage = new openfl.display.BitmapData(tempfontimage.width,tempfontimage.height,true,0);
		var _g1 = 0;
		var _g = tempfontimage.height;
		while(_g1 < _g) {
			var j = _g1++;
			var _g3 = 0;
			var _g2 = tempfontimage.width;
			while(_g3 < _g2) {
				var i = _g3++;
				var cpixel = tempfontimage.getPixel(i,j);
				if(cpixel != 0 && cpixel != 0) this.fontimage.setPixel32(i,j,-1);
			}
		}
		this.bitmapfont = terrylib.bitmapFont.BitmapFont.fromAngelCode(this.fontimage,this.fontxml);
		this.typename = _file;
	} else if(openfl.Assets.exists("data/fonts/" + _file + "/" + _file + ".ttf")) {
		this.type = "ttf";
		this.filename = "data/fonts/" + _file + "/" + _file + ".ttf";
		this.font = openfl.Assets.getFont(this.filename);
		this.typename = this.font.name;
	} else throw "ERROR: Cannot set font to \"" + _file + "\", no TTF or Bitmap Font found.";
};
$hxClasses["terrylib.util.Fontfile"] = terrylib.util.Fontfile;
terrylib.util.Fontfile.__name__ = true;
terrylib.util.Fontfile.prototype = {
	__class__: terrylib.util.Fontfile
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = true;
$hxClasses.Array = Array;
Array.__name__ = true;
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.ProcessingInstruction = "processingInstruction";
Xml.Document = "document";
var this1;
this1 = new Uint32Array(256);
lime.math.color._RGBA.RGBA_Impl_.__alpha16 = this1;
var _g = 0;
while(_g < 256) {
	var i = _g++;
	var val = Math.ceil(i * 257.00392156862745);
	lime.math.color._RGBA.RGBA_Impl_.__alpha16[i] = val;
}
var this2;
this2 = new Uint8Array(510);
lime.math.color._RGBA.RGBA_Impl_.__clamp = this2;
var _g1 = 0;
while(_g1 < 255) {
	var i1 = _g1++;
	lime.math.color._RGBA.RGBA_Impl_.__clamp[i1] = i1;
}
var _g11 = 255;
var _g2 = 511;
while(_g11 < _g2) {
	var i2 = _g11++;
	lime.math.color._RGBA.RGBA_Impl_.__clamp[i2] = 255;
}
if(window.createjs != null) createjs.Sound.alternateExtensions = ["ogg","mp3","wav"];
openfl.display.DisplayObject.__instanceCount = 0;
openfl.display.DisplayObject.__worldRenderDirty = 0;
openfl.display.DisplayObject.__worldTransformDirty = 0;
Err.PRE_BRACKETMISMATCH = 0;
Err.PRE_MISSINGUPDATE = 1;
Err.PARSER_INIT = 2;
Err.PARSER_NEW = 3;
Err.RUNTIME_INIT = 4;
Err.RUNTIME_UPDATE = 5;
Err.dumpstack = false;
Webfont.ZERO4B11 = "04b11";
Webfont.APPLE = "apple";
Webfont.BOLD = "bold";
Webfont.C64 = "c64";
Webfont.CASUAL = "casual";
Webfont.COMIC = "comic";
Webfont.CRYPT = "crypt";
Webfont.DEFAULT = "default";
Webfont.DOS = "dos";
Webfont.HANDY = "handy";
Webfont.GANON = "ganon";
Webfont.NOKIA = "nokia";
Webfont.OLDENGLISH = "oldenglish";
Webfont.PIXEL = "pixel";
Webfont.PRESSSTART = "pressstart";
Webfont.RETROFUTURE = "retrofuture";
Webfont.ROMAN = "roman";
Webfont.SPECIAL = "special";
Webfont.VISITOR = "visitor";
Webfont.YOSTER = "yoster";
Webscript.counter = 0;
Webscript.oldfont = "";
Webscript.oldfontsize = 0;
haxe.ds.ObjectMap.count = 0;
haxe.xml.Parser.escapes = (function($this) {
	var $r;
	var h = new haxe.ds.StringMap();
	h.set("lt","<");
	h.set("gt",">");
	h.set("amp","&");
	h.set("quot","\"");
	h.set("apos","'");
	h.set("nbsp",String.fromCharCode(160));
	$r = h;
	return $r;
}(this));
js.Boot.__toStr = {}.toString;
lime.Assets.cache = new lime.AssetCache();
lime.Assets.libraries = new haxe.ds.StringMap();
lime.Assets.initialized = false;
lime._backend.html5.HTML5Window.windowID = 0;
lime.app.Preloader.images = new haxe.ds.StringMap();
lime.app.Preloader.loaders = new haxe.ds.StringMap();
lime.ui.Gamepad.onConnect = new lime.app.Event();
lime.ui.Touch.onEnd = new lime.app.Event();
lime.ui.Touch.onMove = new lime.app.Event();
lime.ui.Touch.onStart = new lime.app.Event();
openfl.Assets.cache = new openfl.AssetCache();
openfl.display.LoaderInfo.__rootURL = window.document.URL;
openfl.system.ApplicationDomain.currentDomain = new openfl.system.ApplicationDomain(null);
openfl.geom.Matrix.__temp = new openfl.geom.Matrix();
openfl.geom.Matrix.__identity = new openfl.geom.Matrix();
openfl.Lib.current = new openfl.display.MovieClip();
openfl.Lib.__sentWarnings = new haxe.ds.StringMap();
openfl._internal.renderer.GraphicsPaths.SIN45 = 0.70710678118654752440084436210485;
openfl._internal.renderer.GraphicsPaths.TAN22 = 0.4142135623730950488016887242097;
openfl._internal.renderer.cairo.CairoGraphics.SIN45 = 0.70710678118654752440084436210485;
openfl._internal.renderer.cairo.CairoGraphics.TAN22 = 0.4142135623730950488016887242097;
openfl._internal.renderer.canvas.CanvasGraphics.SIN45 = 0.70710678118654752440084436210485;
openfl._internal.renderer.canvas.CanvasGraphics.TAN22 = 0.4142135623730950488016887242097;
openfl._internal.renderer.canvas.CanvasGraphics.fillCommands = new Array();
openfl._internal.renderer.canvas.CanvasGraphics.strokeCommands = new Array();
openfl._internal.renderer.opengl.GLRenderer.glContextId = 0;
openfl._internal.renderer.opengl.GLRenderer.glContexts = [];
openfl._internal.renderer.opengl.shaders2.Shader.UID = 0;
openfl._internal.renderer.opengl.utils.PathBuiler.__currentWinding = 0;
openfl._internal.renderer.opengl.utils.PathBuiler.__fillIndex = 0;
openfl.geom.Rectangle.__temp = new openfl.geom.Rectangle();
openfl._internal.renderer.opengl.utils.GraphicsRenderer.fillVertexAttributes = [new openfl._internal.renderer.opengl.utils.VertexAttribute(2,5126,false,"aPosition")];
openfl._internal.renderer.opengl.utils.GraphicsRenderer.drawTrianglesVertexAttributes = [new openfl._internal.renderer.opengl.utils.VertexAttribute(2,5126,false,"aPosition"),new openfl._internal.renderer.opengl.utils.VertexAttribute(2,5126,false,"aTexCoord0"),new openfl._internal.renderer.opengl.utils.VertexAttribute(4,5121,true,"aColor")];
openfl._internal.renderer.opengl.utils.GraphicsRenderer.primitiveVertexAttributes = [new openfl._internal.renderer.opengl.utils.VertexAttribute(2,5126,false,"aPosition"),new openfl._internal.renderer.opengl.utils.VertexAttribute(4,5126,false,"aColor")];
openfl._internal.renderer.opengl.utils.GraphicsRenderer.bucketPool = [];
openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectPosition = new openfl.geom.Point();
openfl._internal.renderer.opengl.utils.GraphicsRenderer.objectBounds = new openfl.geom.Rectangle();
openfl.events.Event.ACTIVATE = "activate";
openfl.events.Event.ADDED = "added";
openfl.events.Event.ADDED_TO_STAGE = "addedToStage";
openfl.events.Event.CHANGE = "change";
openfl.events.Event.COMPLETE = "complete";
openfl.events.Event.DEACTIVATE = "deactivate";
openfl.events.Event.ENTER_FRAME = "enterFrame";
openfl.events.Event.MOUSE_LEAVE = "mouseLeave";
openfl.events.Event.REMOVED = "removed";
openfl.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
openfl.events.Event.RENDER = "render";
openfl.events.Event.RESIZE = "resize";
openfl.events.TextEvent.TEXT_INPUT = "textInput";
openfl.events.FocusEvent.FOCUS_IN = "focusIn";
openfl.events.FocusEvent.FOCUS_OUT = "focusOut";
openfl.events.GameInputEvent.DEVICE_ADDED = "deviceAdded";
openfl.events.GameInputEvent.DEVICE_REMOVED = "deviceRemoved";
openfl.events.IOErrorEvent.IO_ERROR = "ioError";
openfl.events.KeyboardEvent.KEY_DOWN = "keyDown";
openfl.events.KeyboardEvent.KEY_UP = "keyUp";
openfl.events.MouseEvent.CLICK = "click";
openfl.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
openfl.events.MouseEvent.MIDDLE_CLICK = "middleClick";
openfl.events.MouseEvent.MIDDLE_MOUSE_DOWN = "middleMouseDown";
openfl.events.MouseEvent.MIDDLE_MOUSE_UP = "middleMouseUp";
openfl.events.MouseEvent.MOUSE_DOWN = "mouseDown";
openfl.events.MouseEvent.MOUSE_MOVE = "mouseMove";
openfl.events.MouseEvent.MOUSE_OUT = "mouseOut";
openfl.events.MouseEvent.MOUSE_OVER = "mouseOver";
openfl.events.MouseEvent.MOUSE_UP = "mouseUp";
openfl.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
openfl.events.MouseEvent.RIGHT_CLICK = "rightClick";
openfl.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
openfl.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
openfl.events.TimerEvent.TIMER = "timer";
openfl.events.TimerEvent.TIMER_COMPLETE = "timerComplete";
openfl.media.Sound.__registeredSounds = new haxe.ds.StringMap();
openfl.ui.GameInput.numDevices = 0;
openfl.ui.GameInput.__devices = new haxe.ds.ObjectMap();
openfl.ui.GameInput.__instances = [];
terrylib.Col.BLACK = 0;
terrylib.Col.WHITE = 16777215;
terrylib.Col.RED = 12461619;
terrylib.Col.YELLOW = 16245355;
terrylib.Col.NIGHTBLUE = 1779250;
terrylib.Col.BLUE = 3252978;
terrylib.Debug.debuglog = new Array();
terrylib.Gfx.bresx = new Array();
terrylib.Gfx.bresy = new Array();
terrylib.Gfx.bresswap = new Array();
terrylib.Gfx.hslval = new Array();
terrylib.Input.keymap = new haxe.ds.EnumValueMap();
terrylib.Input.lookup = new haxe.ds.IntMap();
terrylib.Input.current = new Array();
terrylib.Input.last = new Array();
terrylib.Input.keydelay = new Array();
terrylib.Input.keyheld = new Array();
terrylib.Input.numletters = 256;
terrylib.Mouse.mousewheel = 0;
terrylib.Mouse.gotosite = "";
terrylib.Random.seed = 0;
terrylib.Text.cachedtextindex = new haxe.ds.StringMap();
terrylib.Text.cachedtext = [];
terrylib.Text.fontfile = new Array();
terrylib.Text.fontfileindex = new haxe.ds.StringMap();
terrylib.Text.typeface = new Array();
terrylib.Text.typefaceindex = new haxe.ds.StringMap();
terrylib.Text.fontmatrix = new openfl.geom.Matrix();
terrylib.Text.currentindex = -1;
terrylib.Text.currentfont = "null";
terrylib.Text.currentsize = -1;
terrylib.Text.LEFT = -20000;
terrylib.Text.RIGHT = -20001;
terrylib.Text.TOP = -20002;
terrylib.Text.BOTTOM = -20003;
terrylib.Text.CENTER = -20004;
terrylib.Text.inputField = new openfl.text.TextField();
terrylib.bitmapFont.BitmapFont.fonts = new haxe.ds.StringMap();
terrylib.bitmapFont.BitmapFont.POINT = new openfl.geom.Point();
ApplicationMain.main();
})(typeof window != "undefined" ? window : exports);
