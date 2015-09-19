import hscript.*;

@:access(hscript.Expr)
@:keep
class InterpExtended extends hscript.Interp {

    override function get( o : Dynamic, f : String ) : Dynamic {
    	//ErrorDef should be just Error if compiled in fast mode
        if( o == null ) throw hscript.Expr.ErrorDef.EInvalidAccess(f);
        return Reflect.getProperty(o,f);
    }

    override function set( o : Dynamic, f : String, v : Dynamic ) : Dynamic {
        if( o == null ) throw hscript.Expr.ErrorDef.EInvalidAccess(f);
        Reflect.setProperty(o,f,v);
        return v;
    }

}