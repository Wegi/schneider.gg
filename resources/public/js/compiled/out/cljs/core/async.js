// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28095 = arguments.length;
switch (G__28095) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28096 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28096 = (function (f,blockable,meta28097){
this.f = f;
this.blockable = blockable;
this.meta28097 = meta28097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28098,meta28097__$1){
var self__ = this;
var _28098__$1 = this;
return (new cljs.core.async.t_cljs$core$async28096(self__.f,self__.blockable,meta28097__$1));
});

cljs.core.async.t_cljs$core$async28096.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28098){
var self__ = this;
var _28098__$1 = this;
return self__.meta28097;
});

cljs.core.async.t_cljs$core$async28096.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28096.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28096.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28096.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28096.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28097","meta28097",2000274176,null)], null);
});

cljs.core.async.t_cljs$core$async28096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28096";

cljs.core.async.t_cljs$core$async28096.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28096");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28096.
 */
cljs.core.async.__GT_t_cljs$core$async28096 = (function cljs$core$async$__GT_t_cljs$core$async28096(f__$1,blockable__$1,meta28097){
return (new cljs.core.async.t_cljs$core$async28096(f__$1,blockable__$1,meta28097));
});

}

return (new cljs.core.async.t_cljs$core$async28096(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28102 = arguments.length;
switch (G__28102) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28105 = arguments.length;
switch (G__28105) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28108 = arguments.length;
switch (G__28108) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28110 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28110);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28110,ret){
return (function (){
return fn1.call(null,val_28110);
});})(val_28110,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28112 = arguments.length;
switch (G__28112) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___28114 = n;
var x_28115 = (0);
while(true){
if((x_28115 < n__4408__auto___28114)){
(a[x_28115] = (0));

var G__28116 = (x_28115 + (1));
x_28115 = G__28116;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28117 = (i + (1));
i = G__28117;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28118 = (function (flag,meta28119){
this.flag = flag;
this.meta28119 = meta28119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28120,meta28119__$1){
var self__ = this;
var _28120__$1 = this;
return (new cljs.core.async.t_cljs$core$async28118(self__.flag,meta28119__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28118.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28120){
var self__ = this;
var _28120__$1 = this;
return self__.meta28119;
});})(flag))
;

cljs.core.async.t_cljs$core$async28118.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28118.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28119","meta28119",-407573117,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28118.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28118";

cljs.core.async.t_cljs$core$async28118.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28118");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28118.
 */
cljs.core.async.__GT_t_cljs$core$async28118 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28118(flag__$1,meta28119){
return (new cljs.core.async.t_cljs$core$async28118(flag__$1,meta28119));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28118(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28121 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28121 = (function (flag,cb,meta28122){
this.flag = flag;
this.cb = cb;
this.meta28122 = meta28122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28123,meta28122__$1){
var self__ = this;
var _28123__$1 = this;
return (new cljs.core.async.t_cljs$core$async28121(self__.flag,self__.cb,meta28122__$1));
});

cljs.core.async.t_cljs$core$async28121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28123){
var self__ = this;
var _28123__$1 = this;
return self__.meta28122;
});

cljs.core.async.t_cljs$core$async28121.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28121.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28122","meta28122",-11022984,null)], null);
});

cljs.core.async.t_cljs$core$async28121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28121";

cljs.core.async.t_cljs$core$async28121.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28121");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28121.
 */
cljs.core.async.__GT_t_cljs$core$async28121 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28121(flag__$1,cb__$1,meta28122){
return (new cljs.core.async.t_cljs$core$async28121(flag__$1,cb__$1,meta28122));
});

}

return (new cljs.core.async.t_cljs$core$async28121(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28124_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28124_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28125_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28125_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28126 = (i + (1));
i = G__28126;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28132 = arguments.length;
var i__4532__auto___28133 = (0);
while(true){
if((i__4532__auto___28133 < len__4531__auto___28132)){
args__4534__auto__.push((arguments[i__4532__auto___28133]));

var G__28134 = (i__4532__auto___28133 + (1));
i__4532__auto___28133 = G__28134;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28129){
var map__28130 = p__28129;
var map__28130__$1 = ((((!((map__28130 == null)))?(((((map__28130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28130):map__28130);
var opts = map__28130__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28127){
var G__28128 = cljs.core.first.call(null,seq28127);
var seq28127__$1 = cljs.core.next.call(null,seq28127);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28128,seq28127__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28136 = arguments.length;
switch (G__28136) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28035__auto___28182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___28182){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___28182){
return (function (state_28160){
var state_val_28161 = (state_28160[(1)]);
if((state_val_28161 === (7))){
var inst_28156 = (state_28160[(2)]);
var state_28160__$1 = state_28160;
var statearr_28162_28183 = state_28160__$1;
(statearr_28162_28183[(2)] = inst_28156);

(statearr_28162_28183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (1))){
var state_28160__$1 = state_28160;
var statearr_28163_28184 = state_28160__$1;
(statearr_28163_28184[(2)] = null);

(statearr_28163_28184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (4))){
var inst_28139 = (state_28160[(7)]);
var inst_28139__$1 = (state_28160[(2)]);
var inst_28140 = (inst_28139__$1 == null);
var state_28160__$1 = (function (){var statearr_28164 = state_28160;
(statearr_28164[(7)] = inst_28139__$1);

return statearr_28164;
})();
if(cljs.core.truth_(inst_28140)){
var statearr_28165_28185 = state_28160__$1;
(statearr_28165_28185[(1)] = (5));

} else {
var statearr_28166_28186 = state_28160__$1;
(statearr_28166_28186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (13))){
var state_28160__$1 = state_28160;
var statearr_28167_28187 = state_28160__$1;
(statearr_28167_28187[(2)] = null);

(statearr_28167_28187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (6))){
var inst_28139 = (state_28160[(7)]);
var state_28160__$1 = state_28160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28160__$1,(11),to,inst_28139);
} else {
if((state_val_28161 === (3))){
var inst_28158 = (state_28160[(2)]);
var state_28160__$1 = state_28160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28160__$1,inst_28158);
} else {
if((state_val_28161 === (12))){
var state_28160__$1 = state_28160;
var statearr_28168_28188 = state_28160__$1;
(statearr_28168_28188[(2)] = null);

(statearr_28168_28188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (2))){
var state_28160__$1 = state_28160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28160__$1,(4),from);
} else {
if((state_val_28161 === (11))){
var inst_28149 = (state_28160[(2)]);
var state_28160__$1 = state_28160;
if(cljs.core.truth_(inst_28149)){
var statearr_28169_28189 = state_28160__$1;
(statearr_28169_28189[(1)] = (12));

} else {
var statearr_28170_28190 = state_28160__$1;
(statearr_28170_28190[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (9))){
var state_28160__$1 = state_28160;
var statearr_28171_28191 = state_28160__$1;
(statearr_28171_28191[(2)] = null);

(statearr_28171_28191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (5))){
var state_28160__$1 = state_28160;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28172_28192 = state_28160__$1;
(statearr_28172_28192[(1)] = (8));

} else {
var statearr_28173_28193 = state_28160__$1;
(statearr_28173_28193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (14))){
var inst_28154 = (state_28160[(2)]);
var state_28160__$1 = state_28160;
var statearr_28174_28194 = state_28160__$1;
(statearr_28174_28194[(2)] = inst_28154);

(statearr_28174_28194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (10))){
var inst_28146 = (state_28160[(2)]);
var state_28160__$1 = state_28160;
var statearr_28175_28195 = state_28160__$1;
(statearr_28175_28195[(2)] = inst_28146);

(statearr_28175_28195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28161 === (8))){
var inst_28143 = cljs.core.async.close_BANG_.call(null,to);
var state_28160__$1 = state_28160;
var statearr_28176_28196 = state_28160__$1;
(statearr_28176_28196[(2)] = inst_28143);

(statearr_28176_28196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto___28182))
;
return ((function (switch__25626__auto__,c__28035__auto___28182){
return (function() {
var cljs$core$async$state_machine__25627__auto__ = null;
var cljs$core$async$state_machine__25627__auto____0 = (function (){
var statearr_28177 = [null,null,null,null,null,null,null,null];
(statearr_28177[(0)] = cljs$core$async$state_machine__25627__auto__);

(statearr_28177[(1)] = (1));

return statearr_28177;
});
var cljs$core$async$state_machine__25627__auto____1 = (function (state_28160){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_28160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e28178){if((e28178 instanceof Object)){
var ex__25630__auto__ = e28178;
var statearr_28179_28197 = state_28160;
(statearr_28179_28197[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28198 = state_28160;
state_28160 = G__28198;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$state_machine__25627__auto__ = function(state_28160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25627__auto____1.call(this,state_28160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25627__auto____0;
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25627__auto____1;
return cljs$core$async$state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___28182))
})();
var state__28037__auto__ = (function (){var statearr_28180 = f__28036__auto__.call(null);
(statearr_28180[(6)] = c__28035__auto___28182);

return statearr_28180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___28182))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28199){
var vec__28200 = p__28199;
var v = cljs.core.nth.call(null,vec__28200,(0),null);
var p = cljs.core.nth.call(null,vec__28200,(1),null);
var job = vec__28200;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28035__auto___28371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___28371,res,vec__28200,v,p,job,jobs,results){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___28371,res,vec__28200,v,p,job,jobs,results){
return (function (state_28207){
var state_val_28208 = (state_28207[(1)]);
if((state_val_28208 === (1))){
var state_28207__$1 = state_28207;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28207__$1,(2),res,v);
} else {
if((state_val_28208 === (2))){
var inst_28204 = (state_28207[(2)]);
var inst_28205 = cljs.core.async.close_BANG_.call(null,res);
var state_28207__$1 = (function (){var statearr_28209 = state_28207;
(statearr_28209[(7)] = inst_28204);

return statearr_28209;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28207__$1,inst_28205);
} else {
return null;
}
}
});})(c__28035__auto___28371,res,vec__28200,v,p,job,jobs,results))
;
return ((function (switch__25626__auto__,c__28035__auto___28371,res,vec__28200,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____0 = (function (){
var statearr_28210 = [null,null,null,null,null,null,null,null];
(statearr_28210[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__);

(statearr_28210[(1)] = (1));

return statearr_28210;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____1 = (function (state_28207){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_28207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e28211){if((e28211 instanceof Object)){
var ex__25630__auto__ = e28211;
var statearr_28212_28372 = state_28207;
(statearr_28212_28372[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28373 = state_28207;
state_28207 = G__28373;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__ = function(state_28207){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____1.call(this,state_28207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___28371,res,vec__28200,v,p,job,jobs,results))
})();
var state__28037__auto__ = (function (){var statearr_28213 = f__28036__auto__.call(null);
(statearr_28213[(6)] = c__28035__auto___28371);

return statearr_28213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___28371,res,vec__28200,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28214){
var vec__28215 = p__28214;
var v = cljs.core.nth.call(null,vec__28215,(0),null);
var p = cljs.core.nth.call(null,vec__28215,(1),null);
var job = vec__28215;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___28374 = n;
var __28375 = (0);
while(true){
if((__28375 < n__4408__auto___28374)){
var G__28218_28376 = type;
var G__28218_28377__$1 = (((G__28218_28376 instanceof cljs.core.Keyword))?G__28218_28376.fqn:null);
switch (G__28218_28377__$1) {
case "compute":
var c__28035__auto___28379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28375,c__28035__auto___28379,G__28218_28376,G__28218_28377__$1,n__4408__auto___28374,jobs,results,process,async){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (__28375,c__28035__auto___28379,G__28218_28376,G__28218_28377__$1,n__4408__auto___28374,jobs,results,process,async){
return (function (state_28231){
var state_val_28232 = (state_28231[(1)]);
if((state_val_28232 === (1))){
var state_28231__$1 = state_28231;
var statearr_28233_28380 = state_28231__$1;
(statearr_28233_28380[(2)] = null);

(statearr_28233_28380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (2))){
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28231__$1,(4),jobs);
} else {
if((state_val_28232 === (3))){
var inst_28229 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28231__$1,inst_28229);
} else {
if((state_val_28232 === (4))){
var inst_28221 = (state_28231[(2)]);
var inst_28222 = process.call(null,inst_28221);
var state_28231__$1 = state_28231;
if(cljs.core.truth_(inst_28222)){
var statearr_28234_28381 = state_28231__$1;
(statearr_28234_28381[(1)] = (5));

} else {
var statearr_28235_28382 = state_28231__$1;
(statearr_28235_28382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (5))){
var state_28231__$1 = state_28231;
var statearr_28236_28383 = state_28231__$1;
(statearr_28236_28383[(2)] = null);

(statearr_28236_28383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (6))){
var state_28231__$1 = state_28231;
var statearr_28237_28384 = state_28231__$1;
(statearr_28237_28384[(2)] = null);

(statearr_28237_28384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (7))){
var inst_28227 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28238_28385 = state_28231__$1;
(statearr_28238_28385[(2)] = inst_28227);

(statearr_28238_28385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28375,c__28035__auto___28379,G__28218_28376,G__28218_28377__$1,n__4408__auto___28374,jobs,results,process,async))
;
return ((function (__28375,switch__25626__auto__,c__28035__auto___28379,G__28218_28376,G__28218_28377__$1,n__4408__auto___28374,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____0 = (function (){
var statearr_28239 = [null,null,null,null,null,null,null];
(statearr_28239[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__);

(statearr_28239[(1)] = (1));

return statearr_28239;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____1 = (function (state_28231){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_28231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e28240){if((e28240 instanceof Object)){
var ex__25630__auto__ = e28240;
var statearr_28241_28386 = state_28231;
(statearr_28241_28386[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28387 = state_28231;
state_28231 = G__28387;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__ = function(state_28231){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____1.call(this,state_28231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__;
})()
;})(__28375,switch__25626__auto__,c__28035__auto___28379,G__28218_28376,G__28218_28377__$1,n__4408__auto___28374,jobs,results,process,async))
})();
var state__28037__auto__ = (function (){var statearr_28242 = f__28036__auto__.call(null);
(statearr_28242[(6)] = c__28035__auto___28379);

return statearr_28242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(__28375,c__28035__auto___28379,G__28218_28376,G__28218_28377__$1,n__4408__auto___28374,jobs,results,process,async))
);


break;
case "async":
var c__28035__auto___28388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28375,c__28035__auto___28388,G__28218_28376,G__28218_28377__$1,n__4408__auto___28374,jobs,results,process,async){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (__28375,c__28035__auto___28388,G__28218_28376,G__28218_28377__$1,n__4408__auto___28374,jobs,results,process,async){
return (function (state_28255){
var state_val_28256 = (state_28255[(1)]);
if((state_val_28256 === (1))){
var state_28255__$1 = state_28255;
var statearr_28257_28389 = state_28255__$1;
(statearr_28257_28389[(2)] = null);

(statearr_28257_28389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (2))){
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28255__$1,(4),jobs);
} else {
if((state_val_28256 === (3))){
var inst_28253 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28255__$1,inst_28253);
} else {
if((state_val_28256 === (4))){
var inst_28245 = (state_28255[(2)]);
var inst_28246 = async.call(null,inst_28245);
var state_28255__$1 = state_28255;
if(cljs.core.truth_(inst_28246)){
var statearr_28258_28390 = state_28255__$1;
(statearr_28258_28390[(1)] = (5));

} else {
var statearr_28259_28391 = state_28255__$1;
(statearr_28259_28391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (5))){
var state_28255__$1 = state_28255;
var statearr_28260_28392 = state_28255__$1;
(statearr_28260_28392[(2)] = null);

(statearr_28260_28392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (6))){
var state_28255__$1 = state_28255;
var statearr_28261_28393 = state_28255__$1;
(statearr_28261_28393[(2)] = null);

(statearr_28261_28393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28256 === (7))){
var inst_28251 = (state_28255[(2)]);
var state_28255__$1 = state_28255;
var statearr_28262_28394 = state_28255__$1;
(statearr_28262_28394[(2)] = inst_28251);

(statearr_28262_28394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__28375,c__28035__auto___28388,G__28218_28376,G__28218_28377__$1,n__4408__auto___28374,jobs,results,process,async))
;
return ((function (__28375,switch__25626__auto__,c__28035__auto___28388,G__28218_28376,G__28218_28377__$1,n__4408__auto___28374,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____0 = (function (){
var statearr_28263 = [null,null,null,null,null,null,null];
(statearr_28263[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__);

(statearr_28263[(1)] = (1));

return statearr_28263;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____1 = (function (state_28255){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_28255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e28264){if((e28264 instanceof Object)){
var ex__25630__auto__ = e28264;
var statearr_28265_28395 = state_28255;
(statearr_28265_28395[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28396 = state_28255;
state_28255 = G__28396;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__ = function(state_28255){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____1.call(this,state_28255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__;
})()
;})(__28375,switch__25626__auto__,c__28035__auto___28388,G__28218_28376,G__28218_28377__$1,n__4408__auto___28374,jobs,results,process,async))
})();
var state__28037__auto__ = (function (){var statearr_28266 = f__28036__auto__.call(null);
(statearr_28266[(6)] = c__28035__auto___28388);

return statearr_28266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(__28375,c__28035__auto___28388,G__28218_28376,G__28218_28377__$1,n__4408__auto___28374,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28218_28377__$1)].join('')));

}

var G__28397 = (__28375 + (1));
__28375 = G__28397;
continue;
} else {
}
break;
}

var c__28035__auto___28398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___28398,jobs,results,process,async){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___28398,jobs,results,process,async){
return (function (state_28288){
var state_val_28289 = (state_28288[(1)]);
if((state_val_28289 === (1))){
var state_28288__$1 = state_28288;
var statearr_28290_28399 = state_28288__$1;
(statearr_28290_28399[(2)] = null);

(statearr_28290_28399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (2))){
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28288__$1,(4),from);
} else {
if((state_val_28289 === (3))){
var inst_28286 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28288__$1,inst_28286);
} else {
if((state_val_28289 === (4))){
var inst_28269 = (state_28288[(7)]);
var inst_28269__$1 = (state_28288[(2)]);
var inst_28270 = (inst_28269__$1 == null);
var state_28288__$1 = (function (){var statearr_28291 = state_28288;
(statearr_28291[(7)] = inst_28269__$1);

return statearr_28291;
})();
if(cljs.core.truth_(inst_28270)){
var statearr_28292_28400 = state_28288__$1;
(statearr_28292_28400[(1)] = (5));

} else {
var statearr_28293_28401 = state_28288__$1;
(statearr_28293_28401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (5))){
var inst_28272 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28288__$1 = state_28288;
var statearr_28294_28402 = state_28288__$1;
(statearr_28294_28402[(2)] = inst_28272);

(statearr_28294_28402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (6))){
var inst_28269 = (state_28288[(7)]);
var inst_28274 = (state_28288[(8)]);
var inst_28274__$1 = cljs.core.async.chan.call(null,(1));
var inst_28275 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28276 = [inst_28269,inst_28274__$1];
var inst_28277 = (new cljs.core.PersistentVector(null,2,(5),inst_28275,inst_28276,null));
var state_28288__$1 = (function (){var statearr_28295 = state_28288;
(statearr_28295[(8)] = inst_28274__$1);

return statearr_28295;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28288__$1,(8),jobs,inst_28277);
} else {
if((state_val_28289 === (7))){
var inst_28284 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
var statearr_28296_28403 = state_28288__$1;
(statearr_28296_28403[(2)] = inst_28284);

(statearr_28296_28403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (8))){
var inst_28274 = (state_28288[(8)]);
var inst_28279 = (state_28288[(2)]);
var state_28288__$1 = (function (){var statearr_28297 = state_28288;
(statearr_28297[(9)] = inst_28279);

return statearr_28297;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28288__$1,(9),results,inst_28274);
} else {
if((state_val_28289 === (9))){
var inst_28281 = (state_28288[(2)]);
var state_28288__$1 = (function (){var statearr_28298 = state_28288;
(statearr_28298[(10)] = inst_28281);

return statearr_28298;
})();
var statearr_28299_28404 = state_28288__$1;
(statearr_28299_28404[(2)] = null);

(statearr_28299_28404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__28035__auto___28398,jobs,results,process,async))
;
return ((function (switch__25626__auto__,c__28035__auto___28398,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____0 = (function (){
var statearr_28300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__);

(statearr_28300[(1)] = (1));

return statearr_28300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____1 = (function (state_28288){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_28288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e28301){if((e28301 instanceof Object)){
var ex__25630__auto__ = e28301;
var statearr_28302_28405 = state_28288;
(statearr_28302_28405[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28406 = state_28288;
state_28288 = G__28406;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__ = function(state_28288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____1.call(this,state_28288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___28398,jobs,results,process,async))
})();
var state__28037__auto__ = (function (){var statearr_28303 = f__28036__auto__.call(null);
(statearr_28303[(6)] = c__28035__auto___28398);

return statearr_28303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___28398,jobs,results,process,async))
);


var c__28035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto__,jobs,results,process,async){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto__,jobs,results,process,async){
return (function (state_28341){
var state_val_28342 = (state_28341[(1)]);
if((state_val_28342 === (7))){
var inst_28337 = (state_28341[(2)]);
var state_28341__$1 = state_28341;
var statearr_28343_28407 = state_28341__$1;
(statearr_28343_28407[(2)] = inst_28337);

(statearr_28343_28407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (20))){
var state_28341__$1 = state_28341;
var statearr_28344_28408 = state_28341__$1;
(statearr_28344_28408[(2)] = null);

(statearr_28344_28408[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (1))){
var state_28341__$1 = state_28341;
var statearr_28345_28409 = state_28341__$1;
(statearr_28345_28409[(2)] = null);

(statearr_28345_28409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (4))){
var inst_28306 = (state_28341[(7)]);
var inst_28306__$1 = (state_28341[(2)]);
var inst_28307 = (inst_28306__$1 == null);
var state_28341__$1 = (function (){var statearr_28346 = state_28341;
(statearr_28346[(7)] = inst_28306__$1);

return statearr_28346;
})();
if(cljs.core.truth_(inst_28307)){
var statearr_28347_28410 = state_28341__$1;
(statearr_28347_28410[(1)] = (5));

} else {
var statearr_28348_28411 = state_28341__$1;
(statearr_28348_28411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (15))){
var inst_28319 = (state_28341[(8)]);
var state_28341__$1 = state_28341;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28341__$1,(18),to,inst_28319);
} else {
if((state_val_28342 === (21))){
var inst_28332 = (state_28341[(2)]);
var state_28341__$1 = state_28341;
var statearr_28349_28412 = state_28341__$1;
(statearr_28349_28412[(2)] = inst_28332);

(statearr_28349_28412[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (13))){
var inst_28334 = (state_28341[(2)]);
var state_28341__$1 = (function (){var statearr_28350 = state_28341;
(statearr_28350[(9)] = inst_28334);

return statearr_28350;
})();
var statearr_28351_28413 = state_28341__$1;
(statearr_28351_28413[(2)] = null);

(statearr_28351_28413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (6))){
var inst_28306 = (state_28341[(7)]);
var state_28341__$1 = state_28341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28341__$1,(11),inst_28306);
} else {
if((state_val_28342 === (17))){
var inst_28327 = (state_28341[(2)]);
var state_28341__$1 = state_28341;
if(cljs.core.truth_(inst_28327)){
var statearr_28352_28414 = state_28341__$1;
(statearr_28352_28414[(1)] = (19));

} else {
var statearr_28353_28415 = state_28341__$1;
(statearr_28353_28415[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (3))){
var inst_28339 = (state_28341[(2)]);
var state_28341__$1 = state_28341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28341__$1,inst_28339);
} else {
if((state_val_28342 === (12))){
var inst_28316 = (state_28341[(10)]);
var state_28341__$1 = state_28341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28341__$1,(14),inst_28316);
} else {
if((state_val_28342 === (2))){
var state_28341__$1 = state_28341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28341__$1,(4),results);
} else {
if((state_val_28342 === (19))){
var state_28341__$1 = state_28341;
var statearr_28354_28416 = state_28341__$1;
(statearr_28354_28416[(2)] = null);

(statearr_28354_28416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (11))){
var inst_28316 = (state_28341[(2)]);
var state_28341__$1 = (function (){var statearr_28355 = state_28341;
(statearr_28355[(10)] = inst_28316);

return statearr_28355;
})();
var statearr_28356_28417 = state_28341__$1;
(statearr_28356_28417[(2)] = null);

(statearr_28356_28417[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (9))){
var state_28341__$1 = state_28341;
var statearr_28357_28418 = state_28341__$1;
(statearr_28357_28418[(2)] = null);

(statearr_28357_28418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (5))){
var state_28341__$1 = state_28341;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28358_28419 = state_28341__$1;
(statearr_28358_28419[(1)] = (8));

} else {
var statearr_28359_28420 = state_28341__$1;
(statearr_28359_28420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (14))){
var inst_28321 = (state_28341[(11)]);
var inst_28319 = (state_28341[(8)]);
var inst_28319__$1 = (state_28341[(2)]);
var inst_28320 = (inst_28319__$1 == null);
var inst_28321__$1 = cljs.core.not.call(null,inst_28320);
var state_28341__$1 = (function (){var statearr_28360 = state_28341;
(statearr_28360[(11)] = inst_28321__$1);

(statearr_28360[(8)] = inst_28319__$1);

return statearr_28360;
})();
if(inst_28321__$1){
var statearr_28361_28421 = state_28341__$1;
(statearr_28361_28421[(1)] = (15));

} else {
var statearr_28362_28422 = state_28341__$1;
(statearr_28362_28422[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (16))){
var inst_28321 = (state_28341[(11)]);
var state_28341__$1 = state_28341;
var statearr_28363_28423 = state_28341__$1;
(statearr_28363_28423[(2)] = inst_28321);

(statearr_28363_28423[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (10))){
var inst_28313 = (state_28341[(2)]);
var state_28341__$1 = state_28341;
var statearr_28364_28424 = state_28341__$1;
(statearr_28364_28424[(2)] = inst_28313);

(statearr_28364_28424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (18))){
var inst_28324 = (state_28341[(2)]);
var state_28341__$1 = state_28341;
var statearr_28365_28425 = state_28341__$1;
(statearr_28365_28425[(2)] = inst_28324);

(statearr_28365_28425[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28342 === (8))){
var inst_28310 = cljs.core.async.close_BANG_.call(null,to);
var state_28341__$1 = state_28341;
var statearr_28366_28426 = state_28341__$1;
(statearr_28366_28426[(2)] = inst_28310);

(statearr_28366_28426[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto__,jobs,results,process,async))
;
return ((function (switch__25626__auto__,c__28035__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____0 = (function (){
var statearr_28367 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__);

(statearr_28367[(1)] = (1));

return statearr_28367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____1 = (function (state_28341){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_28341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e28368){if((e28368 instanceof Object)){
var ex__25630__auto__ = e28368;
var statearr_28369_28427 = state_28341;
(statearr_28369_28427[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28428 = state_28341;
state_28341 = G__28428;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__ = function(state_28341){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____1.call(this,state_28341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25627__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto__,jobs,results,process,async))
})();
var state__28037__auto__ = (function (){var statearr_28370 = f__28036__auto__.call(null);
(statearr_28370[(6)] = c__28035__auto__);

return statearr_28370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto__,jobs,results,process,async))
);

return c__28035__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28430 = arguments.length;
switch (G__28430) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28433 = arguments.length;
switch (G__28433) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28436 = arguments.length;
switch (G__28436) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28035__auto___28485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___28485,tc,fc){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___28485,tc,fc){
return (function (state_28462){
var state_val_28463 = (state_28462[(1)]);
if((state_val_28463 === (7))){
var inst_28458 = (state_28462[(2)]);
var state_28462__$1 = state_28462;
var statearr_28464_28486 = state_28462__$1;
(statearr_28464_28486[(2)] = inst_28458);

(statearr_28464_28486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (1))){
var state_28462__$1 = state_28462;
var statearr_28465_28487 = state_28462__$1;
(statearr_28465_28487[(2)] = null);

(statearr_28465_28487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (4))){
var inst_28439 = (state_28462[(7)]);
var inst_28439__$1 = (state_28462[(2)]);
var inst_28440 = (inst_28439__$1 == null);
var state_28462__$1 = (function (){var statearr_28466 = state_28462;
(statearr_28466[(7)] = inst_28439__$1);

return statearr_28466;
})();
if(cljs.core.truth_(inst_28440)){
var statearr_28467_28488 = state_28462__$1;
(statearr_28467_28488[(1)] = (5));

} else {
var statearr_28468_28489 = state_28462__$1;
(statearr_28468_28489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (13))){
var state_28462__$1 = state_28462;
var statearr_28469_28490 = state_28462__$1;
(statearr_28469_28490[(2)] = null);

(statearr_28469_28490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (6))){
var inst_28439 = (state_28462[(7)]);
var inst_28445 = p.call(null,inst_28439);
var state_28462__$1 = state_28462;
if(cljs.core.truth_(inst_28445)){
var statearr_28470_28491 = state_28462__$1;
(statearr_28470_28491[(1)] = (9));

} else {
var statearr_28471_28492 = state_28462__$1;
(statearr_28471_28492[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (3))){
var inst_28460 = (state_28462[(2)]);
var state_28462__$1 = state_28462;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28462__$1,inst_28460);
} else {
if((state_val_28463 === (12))){
var state_28462__$1 = state_28462;
var statearr_28472_28493 = state_28462__$1;
(statearr_28472_28493[(2)] = null);

(statearr_28472_28493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (2))){
var state_28462__$1 = state_28462;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28462__$1,(4),ch);
} else {
if((state_val_28463 === (11))){
var inst_28439 = (state_28462[(7)]);
var inst_28449 = (state_28462[(2)]);
var state_28462__$1 = state_28462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28462__$1,(8),inst_28449,inst_28439);
} else {
if((state_val_28463 === (9))){
var state_28462__$1 = state_28462;
var statearr_28473_28494 = state_28462__$1;
(statearr_28473_28494[(2)] = tc);

(statearr_28473_28494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (5))){
var inst_28442 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28443 = cljs.core.async.close_BANG_.call(null,fc);
var state_28462__$1 = (function (){var statearr_28474 = state_28462;
(statearr_28474[(8)] = inst_28442);

return statearr_28474;
})();
var statearr_28475_28495 = state_28462__$1;
(statearr_28475_28495[(2)] = inst_28443);

(statearr_28475_28495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (14))){
var inst_28456 = (state_28462[(2)]);
var state_28462__$1 = state_28462;
var statearr_28476_28496 = state_28462__$1;
(statearr_28476_28496[(2)] = inst_28456);

(statearr_28476_28496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (10))){
var state_28462__$1 = state_28462;
var statearr_28477_28497 = state_28462__$1;
(statearr_28477_28497[(2)] = fc);

(statearr_28477_28497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28463 === (8))){
var inst_28451 = (state_28462[(2)]);
var state_28462__$1 = state_28462;
if(cljs.core.truth_(inst_28451)){
var statearr_28478_28498 = state_28462__$1;
(statearr_28478_28498[(1)] = (12));

} else {
var statearr_28479_28499 = state_28462__$1;
(statearr_28479_28499[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto___28485,tc,fc))
;
return ((function (switch__25626__auto__,c__28035__auto___28485,tc,fc){
return (function() {
var cljs$core$async$state_machine__25627__auto__ = null;
var cljs$core$async$state_machine__25627__auto____0 = (function (){
var statearr_28480 = [null,null,null,null,null,null,null,null,null];
(statearr_28480[(0)] = cljs$core$async$state_machine__25627__auto__);

(statearr_28480[(1)] = (1));

return statearr_28480;
});
var cljs$core$async$state_machine__25627__auto____1 = (function (state_28462){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_28462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e28481){if((e28481 instanceof Object)){
var ex__25630__auto__ = e28481;
var statearr_28482_28500 = state_28462;
(statearr_28482_28500[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28501 = state_28462;
state_28462 = G__28501;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$state_machine__25627__auto__ = function(state_28462){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25627__auto____1.call(this,state_28462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25627__auto____0;
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25627__auto____1;
return cljs$core$async$state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___28485,tc,fc))
})();
var state__28037__auto__ = (function (){var statearr_28483 = f__28036__auto__.call(null);
(statearr_28483[(6)] = c__28035__auto___28485);

return statearr_28483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___28485,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto__){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto__){
return (function (state_28522){
var state_val_28523 = (state_28522[(1)]);
if((state_val_28523 === (7))){
var inst_28518 = (state_28522[(2)]);
var state_28522__$1 = state_28522;
var statearr_28524_28542 = state_28522__$1;
(statearr_28524_28542[(2)] = inst_28518);

(statearr_28524_28542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (1))){
var inst_28502 = init;
var state_28522__$1 = (function (){var statearr_28525 = state_28522;
(statearr_28525[(7)] = inst_28502);

return statearr_28525;
})();
var statearr_28526_28543 = state_28522__$1;
(statearr_28526_28543[(2)] = null);

(statearr_28526_28543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (4))){
var inst_28505 = (state_28522[(8)]);
var inst_28505__$1 = (state_28522[(2)]);
var inst_28506 = (inst_28505__$1 == null);
var state_28522__$1 = (function (){var statearr_28527 = state_28522;
(statearr_28527[(8)] = inst_28505__$1);

return statearr_28527;
})();
if(cljs.core.truth_(inst_28506)){
var statearr_28528_28544 = state_28522__$1;
(statearr_28528_28544[(1)] = (5));

} else {
var statearr_28529_28545 = state_28522__$1;
(statearr_28529_28545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (6))){
var inst_28505 = (state_28522[(8)]);
var inst_28502 = (state_28522[(7)]);
var inst_28509 = (state_28522[(9)]);
var inst_28509__$1 = f.call(null,inst_28502,inst_28505);
var inst_28510 = cljs.core.reduced_QMARK_.call(null,inst_28509__$1);
var state_28522__$1 = (function (){var statearr_28530 = state_28522;
(statearr_28530[(9)] = inst_28509__$1);

return statearr_28530;
})();
if(inst_28510){
var statearr_28531_28546 = state_28522__$1;
(statearr_28531_28546[(1)] = (8));

} else {
var statearr_28532_28547 = state_28522__$1;
(statearr_28532_28547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (3))){
var inst_28520 = (state_28522[(2)]);
var state_28522__$1 = state_28522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28522__$1,inst_28520);
} else {
if((state_val_28523 === (2))){
var state_28522__$1 = state_28522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28522__$1,(4),ch);
} else {
if((state_val_28523 === (9))){
var inst_28509 = (state_28522[(9)]);
var inst_28502 = inst_28509;
var state_28522__$1 = (function (){var statearr_28533 = state_28522;
(statearr_28533[(7)] = inst_28502);

return statearr_28533;
})();
var statearr_28534_28548 = state_28522__$1;
(statearr_28534_28548[(2)] = null);

(statearr_28534_28548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (5))){
var inst_28502 = (state_28522[(7)]);
var state_28522__$1 = state_28522;
var statearr_28535_28549 = state_28522__$1;
(statearr_28535_28549[(2)] = inst_28502);

(statearr_28535_28549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (10))){
var inst_28516 = (state_28522[(2)]);
var state_28522__$1 = state_28522;
var statearr_28536_28550 = state_28522__$1;
(statearr_28536_28550[(2)] = inst_28516);

(statearr_28536_28550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28523 === (8))){
var inst_28509 = (state_28522[(9)]);
var inst_28512 = cljs.core.deref.call(null,inst_28509);
var state_28522__$1 = state_28522;
var statearr_28537_28551 = state_28522__$1;
(statearr_28537_28551[(2)] = inst_28512);

(statearr_28537_28551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto__))
;
return ((function (switch__25626__auto__,c__28035__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25627__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25627__auto____0 = (function (){
var statearr_28538 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28538[(0)] = cljs$core$async$reduce_$_state_machine__25627__auto__);

(statearr_28538[(1)] = (1));

return statearr_28538;
});
var cljs$core$async$reduce_$_state_machine__25627__auto____1 = (function (state_28522){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_28522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e28539){if((e28539 instanceof Object)){
var ex__25630__auto__ = e28539;
var statearr_28540_28552 = state_28522;
(statearr_28540_28552[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28553 = state_28522;
state_28522 = G__28553;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25627__auto__ = function(state_28522){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25627__auto____1.call(this,state_28522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25627__auto____0;
cljs$core$async$reduce_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25627__auto____1;
return cljs$core$async$reduce_$_state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto__))
})();
var state__28037__auto__ = (function (){var statearr_28541 = f__28036__auto__.call(null);
(statearr_28541[(6)] = c__28035__auto__);

return statearr_28541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto__))
);

return c__28035__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto__,f__$1){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto__,f__$1){
return (function (state_28559){
var state_val_28560 = (state_28559[(1)]);
if((state_val_28560 === (1))){
var inst_28554 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28559__$1 = state_28559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28559__$1,(2),inst_28554);
} else {
if((state_val_28560 === (2))){
var inst_28556 = (state_28559[(2)]);
var inst_28557 = f__$1.call(null,inst_28556);
var state_28559__$1 = state_28559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28559__$1,inst_28557);
} else {
return null;
}
}
});})(c__28035__auto__,f__$1))
;
return ((function (switch__25626__auto__,c__28035__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25627__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25627__auto____0 = (function (){
var statearr_28561 = [null,null,null,null,null,null,null];
(statearr_28561[(0)] = cljs$core$async$transduce_$_state_machine__25627__auto__);

(statearr_28561[(1)] = (1));

return statearr_28561;
});
var cljs$core$async$transduce_$_state_machine__25627__auto____1 = (function (state_28559){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_28559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e28562){if((e28562 instanceof Object)){
var ex__25630__auto__ = e28562;
var statearr_28563_28565 = state_28559;
(statearr_28563_28565[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28566 = state_28559;
state_28559 = G__28566;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25627__auto__ = function(state_28559){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25627__auto____1.call(this,state_28559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25627__auto____0;
cljs$core$async$transduce_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25627__auto____1;
return cljs$core$async$transduce_$_state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto__,f__$1))
})();
var state__28037__auto__ = (function (){var statearr_28564 = f__28036__auto__.call(null);
(statearr_28564[(6)] = c__28035__auto__);

return statearr_28564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto__,f__$1))
);

return c__28035__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28568 = arguments.length;
switch (G__28568) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto__){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto__){
return (function (state_28593){
var state_val_28594 = (state_28593[(1)]);
if((state_val_28594 === (7))){
var inst_28575 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
var statearr_28595_28616 = state_28593__$1;
(statearr_28595_28616[(2)] = inst_28575);

(statearr_28595_28616[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (1))){
var inst_28569 = cljs.core.seq.call(null,coll);
var inst_28570 = inst_28569;
var state_28593__$1 = (function (){var statearr_28596 = state_28593;
(statearr_28596[(7)] = inst_28570);

return statearr_28596;
})();
var statearr_28597_28617 = state_28593__$1;
(statearr_28597_28617[(2)] = null);

(statearr_28597_28617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (4))){
var inst_28570 = (state_28593[(7)]);
var inst_28573 = cljs.core.first.call(null,inst_28570);
var state_28593__$1 = state_28593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28593__$1,(7),ch,inst_28573);
} else {
if((state_val_28594 === (13))){
var inst_28587 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
var statearr_28598_28618 = state_28593__$1;
(statearr_28598_28618[(2)] = inst_28587);

(statearr_28598_28618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (6))){
var inst_28578 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
if(cljs.core.truth_(inst_28578)){
var statearr_28599_28619 = state_28593__$1;
(statearr_28599_28619[(1)] = (8));

} else {
var statearr_28600_28620 = state_28593__$1;
(statearr_28600_28620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (3))){
var inst_28591 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28593__$1,inst_28591);
} else {
if((state_val_28594 === (12))){
var state_28593__$1 = state_28593;
var statearr_28601_28621 = state_28593__$1;
(statearr_28601_28621[(2)] = null);

(statearr_28601_28621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (2))){
var inst_28570 = (state_28593[(7)]);
var state_28593__$1 = state_28593;
if(cljs.core.truth_(inst_28570)){
var statearr_28602_28622 = state_28593__$1;
(statearr_28602_28622[(1)] = (4));

} else {
var statearr_28603_28623 = state_28593__$1;
(statearr_28603_28623[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (11))){
var inst_28584 = cljs.core.async.close_BANG_.call(null,ch);
var state_28593__$1 = state_28593;
var statearr_28604_28624 = state_28593__$1;
(statearr_28604_28624[(2)] = inst_28584);

(statearr_28604_28624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (9))){
var state_28593__$1 = state_28593;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28605_28625 = state_28593__$1;
(statearr_28605_28625[(1)] = (11));

} else {
var statearr_28606_28626 = state_28593__$1;
(statearr_28606_28626[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (5))){
var inst_28570 = (state_28593[(7)]);
var state_28593__$1 = state_28593;
var statearr_28607_28627 = state_28593__$1;
(statearr_28607_28627[(2)] = inst_28570);

(statearr_28607_28627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (10))){
var inst_28589 = (state_28593[(2)]);
var state_28593__$1 = state_28593;
var statearr_28608_28628 = state_28593__$1;
(statearr_28608_28628[(2)] = inst_28589);

(statearr_28608_28628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28594 === (8))){
var inst_28570 = (state_28593[(7)]);
var inst_28580 = cljs.core.next.call(null,inst_28570);
var inst_28570__$1 = inst_28580;
var state_28593__$1 = (function (){var statearr_28609 = state_28593;
(statearr_28609[(7)] = inst_28570__$1);

return statearr_28609;
})();
var statearr_28610_28629 = state_28593__$1;
(statearr_28610_28629[(2)] = null);

(statearr_28610_28629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto__))
;
return ((function (switch__25626__auto__,c__28035__auto__){
return (function() {
var cljs$core$async$state_machine__25627__auto__ = null;
var cljs$core$async$state_machine__25627__auto____0 = (function (){
var statearr_28611 = [null,null,null,null,null,null,null,null];
(statearr_28611[(0)] = cljs$core$async$state_machine__25627__auto__);

(statearr_28611[(1)] = (1));

return statearr_28611;
});
var cljs$core$async$state_machine__25627__auto____1 = (function (state_28593){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_28593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e28612){if((e28612 instanceof Object)){
var ex__25630__auto__ = e28612;
var statearr_28613_28630 = state_28593;
(statearr_28613_28630[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28631 = state_28593;
state_28593 = G__28631;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$state_machine__25627__auto__ = function(state_28593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25627__auto____1.call(this,state_28593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25627__auto____0;
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25627__auto____1;
return cljs$core$async$state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto__))
})();
var state__28037__auto__ = (function (){var statearr_28614 = f__28036__auto__.call(null);
(statearr_28614[(6)] = c__28035__auto__);

return statearr_28614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto__))
);

return c__28035__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28632 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28632 = (function (ch,cs,meta28633){
this.ch = ch;
this.cs = cs;
this.meta28633 = meta28633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28634,meta28633__$1){
var self__ = this;
var _28634__$1 = this;
return (new cljs.core.async.t_cljs$core$async28632(self__.ch,self__.cs,meta28633__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28634){
var self__ = this;
var _28634__$1 = this;
return self__.meta28633;
});})(cs))
;

cljs.core.async.t_cljs$core$async28632.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28632.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28632.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28632.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28632.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28632.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28632.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28633","meta28633",-987535956,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28632";

cljs.core.async.t_cljs$core$async28632.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28632");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28632.
 */
cljs.core.async.__GT_t_cljs$core$async28632 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28632(ch__$1,cs__$1,meta28633){
return (new cljs.core.async.t_cljs$core$async28632(ch__$1,cs__$1,meta28633));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28632(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28035__auto___28854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___28854,cs,m,dchan,dctr,done){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___28854,cs,m,dchan,dctr,done){
return (function (state_28769){
var state_val_28770 = (state_28769[(1)]);
if((state_val_28770 === (7))){
var inst_28765 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28771_28855 = state_28769__$1;
(statearr_28771_28855[(2)] = inst_28765);

(statearr_28771_28855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (20))){
var inst_28668 = (state_28769[(7)]);
var inst_28680 = cljs.core.first.call(null,inst_28668);
var inst_28681 = cljs.core.nth.call(null,inst_28680,(0),null);
var inst_28682 = cljs.core.nth.call(null,inst_28680,(1),null);
var state_28769__$1 = (function (){var statearr_28772 = state_28769;
(statearr_28772[(8)] = inst_28681);

return statearr_28772;
})();
if(cljs.core.truth_(inst_28682)){
var statearr_28773_28856 = state_28769__$1;
(statearr_28773_28856[(1)] = (22));

} else {
var statearr_28774_28857 = state_28769__$1;
(statearr_28774_28857[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (27))){
var inst_28717 = (state_28769[(9)]);
var inst_28637 = (state_28769[(10)]);
var inst_28710 = (state_28769[(11)]);
var inst_28712 = (state_28769[(12)]);
var inst_28717__$1 = cljs.core._nth.call(null,inst_28710,inst_28712);
var inst_28718 = cljs.core.async.put_BANG_.call(null,inst_28717__$1,inst_28637,done);
var state_28769__$1 = (function (){var statearr_28775 = state_28769;
(statearr_28775[(9)] = inst_28717__$1);

return statearr_28775;
})();
if(cljs.core.truth_(inst_28718)){
var statearr_28776_28858 = state_28769__$1;
(statearr_28776_28858[(1)] = (30));

} else {
var statearr_28777_28859 = state_28769__$1;
(statearr_28777_28859[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (1))){
var state_28769__$1 = state_28769;
var statearr_28778_28860 = state_28769__$1;
(statearr_28778_28860[(2)] = null);

(statearr_28778_28860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (24))){
var inst_28668 = (state_28769[(7)]);
var inst_28687 = (state_28769[(2)]);
var inst_28688 = cljs.core.next.call(null,inst_28668);
var inst_28646 = inst_28688;
var inst_28647 = null;
var inst_28648 = (0);
var inst_28649 = (0);
var state_28769__$1 = (function (){var statearr_28779 = state_28769;
(statearr_28779[(13)] = inst_28648);

(statearr_28779[(14)] = inst_28646);

(statearr_28779[(15)] = inst_28647);

(statearr_28779[(16)] = inst_28687);

(statearr_28779[(17)] = inst_28649);

return statearr_28779;
})();
var statearr_28780_28861 = state_28769__$1;
(statearr_28780_28861[(2)] = null);

(statearr_28780_28861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (39))){
var state_28769__$1 = state_28769;
var statearr_28784_28862 = state_28769__$1;
(statearr_28784_28862[(2)] = null);

(statearr_28784_28862[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (4))){
var inst_28637 = (state_28769[(10)]);
var inst_28637__$1 = (state_28769[(2)]);
var inst_28638 = (inst_28637__$1 == null);
var state_28769__$1 = (function (){var statearr_28785 = state_28769;
(statearr_28785[(10)] = inst_28637__$1);

return statearr_28785;
})();
if(cljs.core.truth_(inst_28638)){
var statearr_28786_28863 = state_28769__$1;
(statearr_28786_28863[(1)] = (5));

} else {
var statearr_28787_28864 = state_28769__$1;
(statearr_28787_28864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (15))){
var inst_28648 = (state_28769[(13)]);
var inst_28646 = (state_28769[(14)]);
var inst_28647 = (state_28769[(15)]);
var inst_28649 = (state_28769[(17)]);
var inst_28664 = (state_28769[(2)]);
var inst_28665 = (inst_28649 + (1));
var tmp28781 = inst_28648;
var tmp28782 = inst_28646;
var tmp28783 = inst_28647;
var inst_28646__$1 = tmp28782;
var inst_28647__$1 = tmp28783;
var inst_28648__$1 = tmp28781;
var inst_28649__$1 = inst_28665;
var state_28769__$1 = (function (){var statearr_28788 = state_28769;
(statearr_28788[(13)] = inst_28648__$1);

(statearr_28788[(14)] = inst_28646__$1);

(statearr_28788[(18)] = inst_28664);

(statearr_28788[(15)] = inst_28647__$1);

(statearr_28788[(17)] = inst_28649__$1);

return statearr_28788;
})();
var statearr_28789_28865 = state_28769__$1;
(statearr_28789_28865[(2)] = null);

(statearr_28789_28865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (21))){
var inst_28691 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28793_28866 = state_28769__$1;
(statearr_28793_28866[(2)] = inst_28691);

(statearr_28793_28866[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (31))){
var inst_28717 = (state_28769[(9)]);
var inst_28721 = done.call(null,null);
var inst_28722 = cljs.core.async.untap_STAR_.call(null,m,inst_28717);
var state_28769__$1 = (function (){var statearr_28794 = state_28769;
(statearr_28794[(19)] = inst_28721);

return statearr_28794;
})();
var statearr_28795_28867 = state_28769__$1;
(statearr_28795_28867[(2)] = inst_28722);

(statearr_28795_28867[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (32))){
var inst_28709 = (state_28769[(20)]);
var inst_28711 = (state_28769[(21)]);
var inst_28710 = (state_28769[(11)]);
var inst_28712 = (state_28769[(12)]);
var inst_28724 = (state_28769[(2)]);
var inst_28725 = (inst_28712 + (1));
var tmp28790 = inst_28709;
var tmp28791 = inst_28711;
var tmp28792 = inst_28710;
var inst_28709__$1 = tmp28790;
var inst_28710__$1 = tmp28792;
var inst_28711__$1 = tmp28791;
var inst_28712__$1 = inst_28725;
var state_28769__$1 = (function (){var statearr_28796 = state_28769;
(statearr_28796[(20)] = inst_28709__$1);

(statearr_28796[(22)] = inst_28724);

(statearr_28796[(21)] = inst_28711__$1);

(statearr_28796[(11)] = inst_28710__$1);

(statearr_28796[(12)] = inst_28712__$1);

return statearr_28796;
})();
var statearr_28797_28868 = state_28769__$1;
(statearr_28797_28868[(2)] = null);

(statearr_28797_28868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (40))){
var inst_28737 = (state_28769[(23)]);
var inst_28741 = done.call(null,null);
var inst_28742 = cljs.core.async.untap_STAR_.call(null,m,inst_28737);
var state_28769__$1 = (function (){var statearr_28798 = state_28769;
(statearr_28798[(24)] = inst_28741);

return statearr_28798;
})();
var statearr_28799_28869 = state_28769__$1;
(statearr_28799_28869[(2)] = inst_28742);

(statearr_28799_28869[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (33))){
var inst_28728 = (state_28769[(25)]);
var inst_28730 = cljs.core.chunked_seq_QMARK_.call(null,inst_28728);
var state_28769__$1 = state_28769;
if(inst_28730){
var statearr_28800_28870 = state_28769__$1;
(statearr_28800_28870[(1)] = (36));

} else {
var statearr_28801_28871 = state_28769__$1;
(statearr_28801_28871[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (13))){
var inst_28658 = (state_28769[(26)]);
var inst_28661 = cljs.core.async.close_BANG_.call(null,inst_28658);
var state_28769__$1 = state_28769;
var statearr_28802_28872 = state_28769__$1;
(statearr_28802_28872[(2)] = inst_28661);

(statearr_28802_28872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (22))){
var inst_28681 = (state_28769[(8)]);
var inst_28684 = cljs.core.async.close_BANG_.call(null,inst_28681);
var state_28769__$1 = state_28769;
var statearr_28803_28873 = state_28769__$1;
(statearr_28803_28873[(2)] = inst_28684);

(statearr_28803_28873[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (36))){
var inst_28728 = (state_28769[(25)]);
var inst_28732 = cljs.core.chunk_first.call(null,inst_28728);
var inst_28733 = cljs.core.chunk_rest.call(null,inst_28728);
var inst_28734 = cljs.core.count.call(null,inst_28732);
var inst_28709 = inst_28733;
var inst_28710 = inst_28732;
var inst_28711 = inst_28734;
var inst_28712 = (0);
var state_28769__$1 = (function (){var statearr_28804 = state_28769;
(statearr_28804[(20)] = inst_28709);

(statearr_28804[(21)] = inst_28711);

(statearr_28804[(11)] = inst_28710);

(statearr_28804[(12)] = inst_28712);

return statearr_28804;
})();
var statearr_28805_28874 = state_28769__$1;
(statearr_28805_28874[(2)] = null);

(statearr_28805_28874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (41))){
var inst_28728 = (state_28769[(25)]);
var inst_28744 = (state_28769[(2)]);
var inst_28745 = cljs.core.next.call(null,inst_28728);
var inst_28709 = inst_28745;
var inst_28710 = null;
var inst_28711 = (0);
var inst_28712 = (0);
var state_28769__$1 = (function (){var statearr_28806 = state_28769;
(statearr_28806[(20)] = inst_28709);

(statearr_28806[(21)] = inst_28711);

(statearr_28806[(11)] = inst_28710);

(statearr_28806[(27)] = inst_28744);

(statearr_28806[(12)] = inst_28712);

return statearr_28806;
})();
var statearr_28807_28875 = state_28769__$1;
(statearr_28807_28875[(2)] = null);

(statearr_28807_28875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (43))){
var state_28769__$1 = state_28769;
var statearr_28808_28876 = state_28769__$1;
(statearr_28808_28876[(2)] = null);

(statearr_28808_28876[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (29))){
var inst_28753 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28809_28877 = state_28769__$1;
(statearr_28809_28877[(2)] = inst_28753);

(statearr_28809_28877[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (44))){
var inst_28762 = (state_28769[(2)]);
var state_28769__$1 = (function (){var statearr_28810 = state_28769;
(statearr_28810[(28)] = inst_28762);

return statearr_28810;
})();
var statearr_28811_28878 = state_28769__$1;
(statearr_28811_28878[(2)] = null);

(statearr_28811_28878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (6))){
var inst_28701 = (state_28769[(29)]);
var inst_28700 = cljs.core.deref.call(null,cs);
var inst_28701__$1 = cljs.core.keys.call(null,inst_28700);
var inst_28702 = cljs.core.count.call(null,inst_28701__$1);
var inst_28703 = cljs.core.reset_BANG_.call(null,dctr,inst_28702);
var inst_28708 = cljs.core.seq.call(null,inst_28701__$1);
var inst_28709 = inst_28708;
var inst_28710 = null;
var inst_28711 = (0);
var inst_28712 = (0);
var state_28769__$1 = (function (){var statearr_28812 = state_28769;
(statearr_28812[(20)] = inst_28709);

(statearr_28812[(29)] = inst_28701__$1);

(statearr_28812[(21)] = inst_28711);

(statearr_28812[(30)] = inst_28703);

(statearr_28812[(11)] = inst_28710);

(statearr_28812[(12)] = inst_28712);

return statearr_28812;
})();
var statearr_28813_28879 = state_28769__$1;
(statearr_28813_28879[(2)] = null);

(statearr_28813_28879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (28))){
var inst_28709 = (state_28769[(20)]);
var inst_28728 = (state_28769[(25)]);
var inst_28728__$1 = cljs.core.seq.call(null,inst_28709);
var state_28769__$1 = (function (){var statearr_28814 = state_28769;
(statearr_28814[(25)] = inst_28728__$1);

return statearr_28814;
})();
if(inst_28728__$1){
var statearr_28815_28880 = state_28769__$1;
(statearr_28815_28880[(1)] = (33));

} else {
var statearr_28816_28881 = state_28769__$1;
(statearr_28816_28881[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (25))){
var inst_28711 = (state_28769[(21)]);
var inst_28712 = (state_28769[(12)]);
var inst_28714 = (inst_28712 < inst_28711);
var inst_28715 = inst_28714;
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28715)){
var statearr_28817_28882 = state_28769__$1;
(statearr_28817_28882[(1)] = (27));

} else {
var statearr_28818_28883 = state_28769__$1;
(statearr_28818_28883[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (34))){
var state_28769__$1 = state_28769;
var statearr_28819_28884 = state_28769__$1;
(statearr_28819_28884[(2)] = null);

(statearr_28819_28884[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (17))){
var state_28769__$1 = state_28769;
var statearr_28820_28885 = state_28769__$1;
(statearr_28820_28885[(2)] = null);

(statearr_28820_28885[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (3))){
var inst_28767 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28769__$1,inst_28767);
} else {
if((state_val_28770 === (12))){
var inst_28696 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28821_28886 = state_28769__$1;
(statearr_28821_28886[(2)] = inst_28696);

(statearr_28821_28886[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (2))){
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(4),ch);
} else {
if((state_val_28770 === (23))){
var state_28769__$1 = state_28769;
var statearr_28822_28887 = state_28769__$1;
(statearr_28822_28887[(2)] = null);

(statearr_28822_28887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (35))){
var inst_28751 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28823_28888 = state_28769__$1;
(statearr_28823_28888[(2)] = inst_28751);

(statearr_28823_28888[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (19))){
var inst_28668 = (state_28769[(7)]);
var inst_28672 = cljs.core.chunk_first.call(null,inst_28668);
var inst_28673 = cljs.core.chunk_rest.call(null,inst_28668);
var inst_28674 = cljs.core.count.call(null,inst_28672);
var inst_28646 = inst_28673;
var inst_28647 = inst_28672;
var inst_28648 = inst_28674;
var inst_28649 = (0);
var state_28769__$1 = (function (){var statearr_28824 = state_28769;
(statearr_28824[(13)] = inst_28648);

(statearr_28824[(14)] = inst_28646);

(statearr_28824[(15)] = inst_28647);

(statearr_28824[(17)] = inst_28649);

return statearr_28824;
})();
var statearr_28825_28889 = state_28769__$1;
(statearr_28825_28889[(2)] = null);

(statearr_28825_28889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (11))){
var inst_28646 = (state_28769[(14)]);
var inst_28668 = (state_28769[(7)]);
var inst_28668__$1 = cljs.core.seq.call(null,inst_28646);
var state_28769__$1 = (function (){var statearr_28826 = state_28769;
(statearr_28826[(7)] = inst_28668__$1);

return statearr_28826;
})();
if(inst_28668__$1){
var statearr_28827_28890 = state_28769__$1;
(statearr_28827_28890[(1)] = (16));

} else {
var statearr_28828_28891 = state_28769__$1;
(statearr_28828_28891[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (9))){
var inst_28698 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28829_28892 = state_28769__$1;
(statearr_28829_28892[(2)] = inst_28698);

(statearr_28829_28892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (5))){
var inst_28644 = cljs.core.deref.call(null,cs);
var inst_28645 = cljs.core.seq.call(null,inst_28644);
var inst_28646 = inst_28645;
var inst_28647 = null;
var inst_28648 = (0);
var inst_28649 = (0);
var state_28769__$1 = (function (){var statearr_28830 = state_28769;
(statearr_28830[(13)] = inst_28648);

(statearr_28830[(14)] = inst_28646);

(statearr_28830[(15)] = inst_28647);

(statearr_28830[(17)] = inst_28649);

return statearr_28830;
})();
var statearr_28831_28893 = state_28769__$1;
(statearr_28831_28893[(2)] = null);

(statearr_28831_28893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (14))){
var state_28769__$1 = state_28769;
var statearr_28832_28894 = state_28769__$1;
(statearr_28832_28894[(2)] = null);

(statearr_28832_28894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (45))){
var inst_28759 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28833_28895 = state_28769__$1;
(statearr_28833_28895[(2)] = inst_28759);

(statearr_28833_28895[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (26))){
var inst_28701 = (state_28769[(29)]);
var inst_28755 = (state_28769[(2)]);
var inst_28756 = cljs.core.seq.call(null,inst_28701);
var state_28769__$1 = (function (){var statearr_28834 = state_28769;
(statearr_28834[(31)] = inst_28755);

return statearr_28834;
})();
if(inst_28756){
var statearr_28835_28896 = state_28769__$1;
(statearr_28835_28896[(1)] = (42));

} else {
var statearr_28836_28897 = state_28769__$1;
(statearr_28836_28897[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (16))){
var inst_28668 = (state_28769[(7)]);
var inst_28670 = cljs.core.chunked_seq_QMARK_.call(null,inst_28668);
var state_28769__$1 = state_28769;
if(inst_28670){
var statearr_28837_28898 = state_28769__$1;
(statearr_28837_28898[(1)] = (19));

} else {
var statearr_28838_28899 = state_28769__$1;
(statearr_28838_28899[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (38))){
var inst_28748 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28839_28900 = state_28769__$1;
(statearr_28839_28900[(2)] = inst_28748);

(statearr_28839_28900[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (30))){
var state_28769__$1 = state_28769;
var statearr_28840_28901 = state_28769__$1;
(statearr_28840_28901[(2)] = null);

(statearr_28840_28901[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (10))){
var inst_28647 = (state_28769[(15)]);
var inst_28649 = (state_28769[(17)]);
var inst_28657 = cljs.core._nth.call(null,inst_28647,inst_28649);
var inst_28658 = cljs.core.nth.call(null,inst_28657,(0),null);
var inst_28659 = cljs.core.nth.call(null,inst_28657,(1),null);
var state_28769__$1 = (function (){var statearr_28841 = state_28769;
(statearr_28841[(26)] = inst_28658);

return statearr_28841;
})();
if(cljs.core.truth_(inst_28659)){
var statearr_28842_28902 = state_28769__$1;
(statearr_28842_28902[(1)] = (13));

} else {
var statearr_28843_28903 = state_28769__$1;
(statearr_28843_28903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (18))){
var inst_28694 = (state_28769[(2)]);
var state_28769__$1 = state_28769;
var statearr_28844_28904 = state_28769__$1;
(statearr_28844_28904[(2)] = inst_28694);

(statearr_28844_28904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (42))){
var state_28769__$1 = state_28769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28769__$1,(45),dchan);
} else {
if((state_val_28770 === (37))){
var inst_28637 = (state_28769[(10)]);
var inst_28728 = (state_28769[(25)]);
var inst_28737 = (state_28769[(23)]);
var inst_28737__$1 = cljs.core.first.call(null,inst_28728);
var inst_28738 = cljs.core.async.put_BANG_.call(null,inst_28737__$1,inst_28637,done);
var state_28769__$1 = (function (){var statearr_28845 = state_28769;
(statearr_28845[(23)] = inst_28737__$1);

return statearr_28845;
})();
if(cljs.core.truth_(inst_28738)){
var statearr_28846_28905 = state_28769__$1;
(statearr_28846_28905[(1)] = (39));

} else {
var statearr_28847_28906 = state_28769__$1;
(statearr_28847_28906[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28770 === (8))){
var inst_28648 = (state_28769[(13)]);
var inst_28649 = (state_28769[(17)]);
var inst_28651 = (inst_28649 < inst_28648);
var inst_28652 = inst_28651;
var state_28769__$1 = state_28769;
if(cljs.core.truth_(inst_28652)){
var statearr_28848_28907 = state_28769__$1;
(statearr_28848_28907[(1)] = (10));

} else {
var statearr_28849_28908 = state_28769__$1;
(statearr_28849_28908[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto___28854,cs,m,dchan,dctr,done))
;
return ((function (switch__25626__auto__,c__28035__auto___28854,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25627__auto__ = null;
var cljs$core$async$mult_$_state_machine__25627__auto____0 = (function (){
var statearr_28850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28850[(0)] = cljs$core$async$mult_$_state_machine__25627__auto__);

(statearr_28850[(1)] = (1));

return statearr_28850;
});
var cljs$core$async$mult_$_state_machine__25627__auto____1 = (function (state_28769){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_28769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e28851){if((e28851 instanceof Object)){
var ex__25630__auto__ = e28851;
var statearr_28852_28909 = state_28769;
(statearr_28852_28909[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28910 = state_28769;
state_28769 = G__28910;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25627__auto__ = function(state_28769){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25627__auto____1.call(this,state_28769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25627__auto____0;
cljs$core$async$mult_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25627__auto____1;
return cljs$core$async$mult_$_state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___28854,cs,m,dchan,dctr,done))
})();
var state__28037__auto__ = (function (){var statearr_28853 = f__28036__auto__.call(null);
(statearr_28853[(6)] = c__28035__auto___28854);

return statearr_28853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___28854,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28912 = arguments.length;
switch (G__28912) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___28924 = arguments.length;
var i__4532__auto___28925 = (0);
while(true){
if((i__4532__auto___28925 < len__4531__auto___28924)){
args__4534__auto__.push((arguments[i__4532__auto___28925]));

var G__28926 = (i__4532__auto___28925 + (1));
i__4532__auto___28925 = G__28926;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28918){
var map__28919 = p__28918;
var map__28919__$1 = ((((!((map__28919 == null)))?(((((map__28919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28919):map__28919);
var opts = map__28919__$1;
var statearr_28921_28927 = state;
(statearr_28921_28927[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__28919,map__28919__$1,opts){
return (function (val){
var statearr_28922_28928 = state;
(statearr_28922_28928[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28919,map__28919__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28923_28929 = state;
(statearr_28923_28929[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28914){
var G__28915 = cljs.core.first.call(null,seq28914);
var seq28914__$1 = cljs.core.next.call(null,seq28914);
var G__28916 = cljs.core.first.call(null,seq28914__$1);
var seq28914__$2 = cljs.core.next.call(null,seq28914__$1);
var G__28917 = cljs.core.first.call(null,seq28914__$2);
var seq28914__$3 = cljs.core.next.call(null,seq28914__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28915,G__28916,G__28917,seq28914__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28930 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28931){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28931 = meta28931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28932,meta28931__$1){
var self__ = this;
var _28932__$1 = this;
return (new cljs.core.async.t_cljs$core$async28930(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28931__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28932){
var self__ = this;
var _28932__$1 = this;
return self__.meta28931;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28930.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28930.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28931","meta28931",-789428644,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28930";

cljs.core.async.t_cljs$core$async28930.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async28930");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28930.
 */
cljs.core.async.__GT_t_cljs$core$async28930 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28930(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28931){
return (new cljs.core.async.t_cljs$core$async28930(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28931));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28930(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28035__auto___29094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___29094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___29094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29034){
var state_val_29035 = (state_29034[(1)]);
if((state_val_29035 === (7))){
var inst_28949 = (state_29034[(2)]);
var state_29034__$1 = state_29034;
var statearr_29036_29095 = state_29034__$1;
(statearr_29036_29095[(2)] = inst_28949);

(statearr_29036_29095[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (20))){
var inst_28961 = (state_29034[(7)]);
var state_29034__$1 = state_29034;
var statearr_29037_29096 = state_29034__$1;
(statearr_29037_29096[(2)] = inst_28961);

(statearr_29037_29096[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (27))){
var state_29034__$1 = state_29034;
var statearr_29038_29097 = state_29034__$1;
(statearr_29038_29097[(2)] = null);

(statearr_29038_29097[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (1))){
var inst_28936 = (state_29034[(8)]);
var inst_28936__$1 = calc_state.call(null);
var inst_28938 = (inst_28936__$1 == null);
var inst_28939 = cljs.core.not.call(null,inst_28938);
var state_29034__$1 = (function (){var statearr_29039 = state_29034;
(statearr_29039[(8)] = inst_28936__$1);

return statearr_29039;
})();
if(inst_28939){
var statearr_29040_29098 = state_29034__$1;
(statearr_29040_29098[(1)] = (2));

} else {
var statearr_29041_29099 = state_29034__$1;
(statearr_29041_29099[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (24))){
var inst_28994 = (state_29034[(9)]);
var inst_29008 = (state_29034[(10)]);
var inst_28985 = (state_29034[(11)]);
var inst_29008__$1 = inst_28985.call(null,inst_28994);
var state_29034__$1 = (function (){var statearr_29042 = state_29034;
(statearr_29042[(10)] = inst_29008__$1);

return statearr_29042;
})();
if(cljs.core.truth_(inst_29008__$1)){
var statearr_29043_29100 = state_29034__$1;
(statearr_29043_29100[(1)] = (29));

} else {
var statearr_29044_29101 = state_29034__$1;
(statearr_29044_29101[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (4))){
var inst_28952 = (state_29034[(2)]);
var state_29034__$1 = state_29034;
if(cljs.core.truth_(inst_28952)){
var statearr_29045_29102 = state_29034__$1;
(statearr_29045_29102[(1)] = (8));

} else {
var statearr_29046_29103 = state_29034__$1;
(statearr_29046_29103[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (15))){
var inst_28979 = (state_29034[(2)]);
var state_29034__$1 = state_29034;
if(cljs.core.truth_(inst_28979)){
var statearr_29047_29104 = state_29034__$1;
(statearr_29047_29104[(1)] = (19));

} else {
var statearr_29048_29105 = state_29034__$1;
(statearr_29048_29105[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (21))){
var inst_28984 = (state_29034[(12)]);
var inst_28984__$1 = (state_29034[(2)]);
var inst_28985 = cljs.core.get.call(null,inst_28984__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28986 = cljs.core.get.call(null,inst_28984__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28987 = cljs.core.get.call(null,inst_28984__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29034__$1 = (function (){var statearr_29049 = state_29034;
(statearr_29049[(13)] = inst_28986);

(statearr_29049[(12)] = inst_28984__$1);

(statearr_29049[(11)] = inst_28985);

return statearr_29049;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29034__$1,(22),inst_28987);
} else {
if((state_val_29035 === (31))){
var inst_29016 = (state_29034[(2)]);
var state_29034__$1 = state_29034;
if(cljs.core.truth_(inst_29016)){
var statearr_29050_29106 = state_29034__$1;
(statearr_29050_29106[(1)] = (32));

} else {
var statearr_29051_29107 = state_29034__$1;
(statearr_29051_29107[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (32))){
var inst_28993 = (state_29034[(14)]);
var state_29034__$1 = state_29034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29034__$1,(35),out,inst_28993);
} else {
if((state_val_29035 === (33))){
var inst_28984 = (state_29034[(12)]);
var inst_28961 = inst_28984;
var state_29034__$1 = (function (){var statearr_29052 = state_29034;
(statearr_29052[(7)] = inst_28961);

return statearr_29052;
})();
var statearr_29053_29108 = state_29034__$1;
(statearr_29053_29108[(2)] = null);

(statearr_29053_29108[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (13))){
var inst_28961 = (state_29034[(7)]);
var inst_28968 = inst_28961.cljs$lang$protocol_mask$partition0$;
var inst_28969 = (inst_28968 & (64));
var inst_28970 = inst_28961.cljs$core$ISeq$;
var inst_28971 = (cljs.core.PROTOCOL_SENTINEL === inst_28970);
var inst_28972 = ((inst_28969) || (inst_28971));
var state_29034__$1 = state_29034;
if(cljs.core.truth_(inst_28972)){
var statearr_29054_29109 = state_29034__$1;
(statearr_29054_29109[(1)] = (16));

} else {
var statearr_29055_29110 = state_29034__$1;
(statearr_29055_29110[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (22))){
var inst_28994 = (state_29034[(9)]);
var inst_28993 = (state_29034[(14)]);
var inst_28992 = (state_29034[(2)]);
var inst_28993__$1 = cljs.core.nth.call(null,inst_28992,(0),null);
var inst_28994__$1 = cljs.core.nth.call(null,inst_28992,(1),null);
var inst_28995 = (inst_28993__$1 == null);
var inst_28996 = cljs.core._EQ_.call(null,inst_28994__$1,change);
var inst_28997 = ((inst_28995) || (inst_28996));
var state_29034__$1 = (function (){var statearr_29056 = state_29034;
(statearr_29056[(9)] = inst_28994__$1);

(statearr_29056[(14)] = inst_28993__$1);

return statearr_29056;
})();
if(cljs.core.truth_(inst_28997)){
var statearr_29057_29111 = state_29034__$1;
(statearr_29057_29111[(1)] = (23));

} else {
var statearr_29058_29112 = state_29034__$1;
(statearr_29058_29112[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (36))){
var inst_28984 = (state_29034[(12)]);
var inst_28961 = inst_28984;
var state_29034__$1 = (function (){var statearr_29059 = state_29034;
(statearr_29059[(7)] = inst_28961);

return statearr_29059;
})();
var statearr_29060_29113 = state_29034__$1;
(statearr_29060_29113[(2)] = null);

(statearr_29060_29113[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (29))){
var inst_29008 = (state_29034[(10)]);
var state_29034__$1 = state_29034;
var statearr_29061_29114 = state_29034__$1;
(statearr_29061_29114[(2)] = inst_29008);

(statearr_29061_29114[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (6))){
var state_29034__$1 = state_29034;
var statearr_29062_29115 = state_29034__$1;
(statearr_29062_29115[(2)] = false);

(statearr_29062_29115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (28))){
var inst_29004 = (state_29034[(2)]);
var inst_29005 = calc_state.call(null);
var inst_28961 = inst_29005;
var state_29034__$1 = (function (){var statearr_29063 = state_29034;
(statearr_29063[(15)] = inst_29004);

(statearr_29063[(7)] = inst_28961);

return statearr_29063;
})();
var statearr_29064_29116 = state_29034__$1;
(statearr_29064_29116[(2)] = null);

(statearr_29064_29116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (25))){
var inst_29030 = (state_29034[(2)]);
var state_29034__$1 = state_29034;
var statearr_29065_29117 = state_29034__$1;
(statearr_29065_29117[(2)] = inst_29030);

(statearr_29065_29117[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (34))){
var inst_29028 = (state_29034[(2)]);
var state_29034__$1 = state_29034;
var statearr_29066_29118 = state_29034__$1;
(statearr_29066_29118[(2)] = inst_29028);

(statearr_29066_29118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (17))){
var state_29034__$1 = state_29034;
var statearr_29067_29119 = state_29034__$1;
(statearr_29067_29119[(2)] = false);

(statearr_29067_29119[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (3))){
var state_29034__$1 = state_29034;
var statearr_29068_29120 = state_29034__$1;
(statearr_29068_29120[(2)] = false);

(statearr_29068_29120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (12))){
var inst_29032 = (state_29034[(2)]);
var state_29034__$1 = state_29034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29034__$1,inst_29032);
} else {
if((state_val_29035 === (2))){
var inst_28936 = (state_29034[(8)]);
var inst_28941 = inst_28936.cljs$lang$protocol_mask$partition0$;
var inst_28942 = (inst_28941 & (64));
var inst_28943 = inst_28936.cljs$core$ISeq$;
var inst_28944 = (cljs.core.PROTOCOL_SENTINEL === inst_28943);
var inst_28945 = ((inst_28942) || (inst_28944));
var state_29034__$1 = state_29034;
if(cljs.core.truth_(inst_28945)){
var statearr_29069_29121 = state_29034__$1;
(statearr_29069_29121[(1)] = (5));

} else {
var statearr_29070_29122 = state_29034__$1;
(statearr_29070_29122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (23))){
var inst_28993 = (state_29034[(14)]);
var inst_28999 = (inst_28993 == null);
var state_29034__$1 = state_29034;
if(cljs.core.truth_(inst_28999)){
var statearr_29071_29123 = state_29034__$1;
(statearr_29071_29123[(1)] = (26));

} else {
var statearr_29072_29124 = state_29034__$1;
(statearr_29072_29124[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (35))){
var inst_29019 = (state_29034[(2)]);
var state_29034__$1 = state_29034;
if(cljs.core.truth_(inst_29019)){
var statearr_29073_29125 = state_29034__$1;
(statearr_29073_29125[(1)] = (36));

} else {
var statearr_29074_29126 = state_29034__$1;
(statearr_29074_29126[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (19))){
var inst_28961 = (state_29034[(7)]);
var inst_28981 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28961);
var state_29034__$1 = state_29034;
var statearr_29075_29127 = state_29034__$1;
(statearr_29075_29127[(2)] = inst_28981);

(statearr_29075_29127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (11))){
var inst_28961 = (state_29034[(7)]);
var inst_28965 = (inst_28961 == null);
var inst_28966 = cljs.core.not.call(null,inst_28965);
var state_29034__$1 = state_29034;
if(inst_28966){
var statearr_29076_29128 = state_29034__$1;
(statearr_29076_29128[(1)] = (13));

} else {
var statearr_29077_29129 = state_29034__$1;
(statearr_29077_29129[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (9))){
var inst_28936 = (state_29034[(8)]);
var state_29034__$1 = state_29034;
var statearr_29078_29130 = state_29034__$1;
(statearr_29078_29130[(2)] = inst_28936);

(statearr_29078_29130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (5))){
var state_29034__$1 = state_29034;
var statearr_29079_29131 = state_29034__$1;
(statearr_29079_29131[(2)] = true);

(statearr_29079_29131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (14))){
var state_29034__$1 = state_29034;
var statearr_29080_29132 = state_29034__$1;
(statearr_29080_29132[(2)] = false);

(statearr_29080_29132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (26))){
var inst_28994 = (state_29034[(9)]);
var inst_29001 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28994);
var state_29034__$1 = state_29034;
var statearr_29081_29133 = state_29034__$1;
(statearr_29081_29133[(2)] = inst_29001);

(statearr_29081_29133[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (16))){
var state_29034__$1 = state_29034;
var statearr_29082_29134 = state_29034__$1;
(statearr_29082_29134[(2)] = true);

(statearr_29082_29134[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (38))){
var inst_29024 = (state_29034[(2)]);
var state_29034__$1 = state_29034;
var statearr_29083_29135 = state_29034__$1;
(statearr_29083_29135[(2)] = inst_29024);

(statearr_29083_29135[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (30))){
var inst_28994 = (state_29034[(9)]);
var inst_28986 = (state_29034[(13)]);
var inst_28985 = (state_29034[(11)]);
var inst_29011 = cljs.core.empty_QMARK_.call(null,inst_28985);
var inst_29012 = inst_28986.call(null,inst_28994);
var inst_29013 = cljs.core.not.call(null,inst_29012);
var inst_29014 = ((inst_29011) && (inst_29013));
var state_29034__$1 = state_29034;
var statearr_29084_29136 = state_29034__$1;
(statearr_29084_29136[(2)] = inst_29014);

(statearr_29084_29136[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (10))){
var inst_28936 = (state_29034[(8)]);
var inst_28957 = (state_29034[(2)]);
var inst_28958 = cljs.core.get.call(null,inst_28957,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28959 = cljs.core.get.call(null,inst_28957,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28960 = cljs.core.get.call(null,inst_28957,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28961 = inst_28936;
var state_29034__$1 = (function (){var statearr_29085 = state_29034;
(statearr_29085[(16)] = inst_28960);

(statearr_29085[(17)] = inst_28959);

(statearr_29085[(18)] = inst_28958);

(statearr_29085[(7)] = inst_28961);

return statearr_29085;
})();
var statearr_29086_29137 = state_29034__$1;
(statearr_29086_29137[(2)] = null);

(statearr_29086_29137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (18))){
var inst_28976 = (state_29034[(2)]);
var state_29034__$1 = state_29034;
var statearr_29087_29138 = state_29034__$1;
(statearr_29087_29138[(2)] = inst_28976);

(statearr_29087_29138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (37))){
var state_29034__$1 = state_29034;
var statearr_29088_29139 = state_29034__$1;
(statearr_29088_29139[(2)] = null);

(statearr_29088_29139[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29035 === (8))){
var inst_28936 = (state_29034[(8)]);
var inst_28954 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28936);
var state_29034__$1 = state_29034;
var statearr_29089_29140 = state_29034__$1;
(statearr_29089_29140[(2)] = inst_28954);

(statearr_29089_29140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto___29094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25626__auto__,c__28035__auto___29094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25627__auto__ = null;
var cljs$core$async$mix_$_state_machine__25627__auto____0 = (function (){
var statearr_29090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29090[(0)] = cljs$core$async$mix_$_state_machine__25627__auto__);

(statearr_29090[(1)] = (1));

return statearr_29090;
});
var cljs$core$async$mix_$_state_machine__25627__auto____1 = (function (state_29034){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_29034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e29091){if((e29091 instanceof Object)){
var ex__25630__auto__ = e29091;
var statearr_29092_29141 = state_29034;
(statearr_29092_29141[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29142 = state_29034;
state_29034 = G__29142;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25627__auto__ = function(state_29034){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25627__auto____1.call(this,state_29034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25627__auto____0;
cljs$core$async$mix_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25627__auto____1;
return cljs$core$async$mix_$_state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___29094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28037__auto__ = (function (){var statearr_29093 = f__28036__auto__.call(null);
(statearr_29093[(6)] = c__28035__auto___29094);

return statearr_29093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___29094,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29144 = arguments.length;
switch (G__29144) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29148 = arguments.length;
switch (G__29148) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__29146_SHARP_){
if(cljs.core.truth_(p1__29146_SHARP_.call(null,topic))){
return p1__29146_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29146_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29149 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29150){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29150 = meta29150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29151,meta29150__$1){
var self__ = this;
var _29151__$1 = this;
return (new cljs.core.async.t_cljs$core$async29149(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29150__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29151){
var self__ = this;
var _29151__$1 = this;
return self__.meta29150;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29149.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29149.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29150","meta29150",2061446072,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29149";

cljs.core.async.t_cljs$core$async29149.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29149");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29149.
 */
cljs.core.async.__GT_t_cljs$core$async29149 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29149(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29150){
return (new cljs.core.async.t_cljs$core$async29149(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29150));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29149(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28035__auto___29269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___29269,mults,ensure_mult,p){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___29269,mults,ensure_mult,p){
return (function (state_29223){
var state_val_29224 = (state_29223[(1)]);
if((state_val_29224 === (7))){
var inst_29219 = (state_29223[(2)]);
var state_29223__$1 = state_29223;
var statearr_29225_29270 = state_29223__$1;
(statearr_29225_29270[(2)] = inst_29219);

(statearr_29225_29270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (20))){
var state_29223__$1 = state_29223;
var statearr_29226_29271 = state_29223__$1;
(statearr_29226_29271[(2)] = null);

(statearr_29226_29271[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (1))){
var state_29223__$1 = state_29223;
var statearr_29227_29272 = state_29223__$1;
(statearr_29227_29272[(2)] = null);

(statearr_29227_29272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (24))){
var inst_29202 = (state_29223[(7)]);
var inst_29211 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29202);
var state_29223__$1 = state_29223;
var statearr_29228_29273 = state_29223__$1;
(statearr_29228_29273[(2)] = inst_29211);

(statearr_29228_29273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (4))){
var inst_29154 = (state_29223[(8)]);
var inst_29154__$1 = (state_29223[(2)]);
var inst_29155 = (inst_29154__$1 == null);
var state_29223__$1 = (function (){var statearr_29229 = state_29223;
(statearr_29229[(8)] = inst_29154__$1);

return statearr_29229;
})();
if(cljs.core.truth_(inst_29155)){
var statearr_29230_29274 = state_29223__$1;
(statearr_29230_29274[(1)] = (5));

} else {
var statearr_29231_29275 = state_29223__$1;
(statearr_29231_29275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (15))){
var inst_29196 = (state_29223[(2)]);
var state_29223__$1 = state_29223;
var statearr_29232_29276 = state_29223__$1;
(statearr_29232_29276[(2)] = inst_29196);

(statearr_29232_29276[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (21))){
var inst_29216 = (state_29223[(2)]);
var state_29223__$1 = (function (){var statearr_29233 = state_29223;
(statearr_29233[(9)] = inst_29216);

return statearr_29233;
})();
var statearr_29234_29277 = state_29223__$1;
(statearr_29234_29277[(2)] = null);

(statearr_29234_29277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (13))){
var inst_29178 = (state_29223[(10)]);
var inst_29180 = cljs.core.chunked_seq_QMARK_.call(null,inst_29178);
var state_29223__$1 = state_29223;
if(inst_29180){
var statearr_29235_29278 = state_29223__$1;
(statearr_29235_29278[(1)] = (16));

} else {
var statearr_29236_29279 = state_29223__$1;
(statearr_29236_29279[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (22))){
var inst_29208 = (state_29223[(2)]);
var state_29223__$1 = state_29223;
if(cljs.core.truth_(inst_29208)){
var statearr_29237_29280 = state_29223__$1;
(statearr_29237_29280[(1)] = (23));

} else {
var statearr_29238_29281 = state_29223__$1;
(statearr_29238_29281[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (6))){
var inst_29202 = (state_29223[(7)]);
var inst_29154 = (state_29223[(8)]);
var inst_29204 = (state_29223[(11)]);
var inst_29202__$1 = topic_fn.call(null,inst_29154);
var inst_29203 = cljs.core.deref.call(null,mults);
var inst_29204__$1 = cljs.core.get.call(null,inst_29203,inst_29202__$1);
var state_29223__$1 = (function (){var statearr_29239 = state_29223;
(statearr_29239[(7)] = inst_29202__$1);

(statearr_29239[(11)] = inst_29204__$1);

return statearr_29239;
})();
if(cljs.core.truth_(inst_29204__$1)){
var statearr_29240_29282 = state_29223__$1;
(statearr_29240_29282[(1)] = (19));

} else {
var statearr_29241_29283 = state_29223__$1;
(statearr_29241_29283[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (25))){
var inst_29213 = (state_29223[(2)]);
var state_29223__$1 = state_29223;
var statearr_29242_29284 = state_29223__$1;
(statearr_29242_29284[(2)] = inst_29213);

(statearr_29242_29284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (17))){
var inst_29178 = (state_29223[(10)]);
var inst_29187 = cljs.core.first.call(null,inst_29178);
var inst_29188 = cljs.core.async.muxch_STAR_.call(null,inst_29187);
var inst_29189 = cljs.core.async.close_BANG_.call(null,inst_29188);
var inst_29190 = cljs.core.next.call(null,inst_29178);
var inst_29164 = inst_29190;
var inst_29165 = null;
var inst_29166 = (0);
var inst_29167 = (0);
var state_29223__$1 = (function (){var statearr_29243 = state_29223;
(statearr_29243[(12)] = inst_29189);

(statearr_29243[(13)] = inst_29167);

(statearr_29243[(14)] = inst_29165);

(statearr_29243[(15)] = inst_29166);

(statearr_29243[(16)] = inst_29164);

return statearr_29243;
})();
var statearr_29244_29285 = state_29223__$1;
(statearr_29244_29285[(2)] = null);

(statearr_29244_29285[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (3))){
var inst_29221 = (state_29223[(2)]);
var state_29223__$1 = state_29223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29223__$1,inst_29221);
} else {
if((state_val_29224 === (12))){
var inst_29198 = (state_29223[(2)]);
var state_29223__$1 = state_29223;
var statearr_29245_29286 = state_29223__$1;
(statearr_29245_29286[(2)] = inst_29198);

(statearr_29245_29286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (2))){
var state_29223__$1 = state_29223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29223__$1,(4),ch);
} else {
if((state_val_29224 === (23))){
var state_29223__$1 = state_29223;
var statearr_29246_29287 = state_29223__$1;
(statearr_29246_29287[(2)] = null);

(statearr_29246_29287[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (19))){
var inst_29154 = (state_29223[(8)]);
var inst_29204 = (state_29223[(11)]);
var inst_29206 = cljs.core.async.muxch_STAR_.call(null,inst_29204);
var state_29223__$1 = state_29223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29223__$1,(22),inst_29206,inst_29154);
} else {
if((state_val_29224 === (11))){
var inst_29178 = (state_29223[(10)]);
var inst_29164 = (state_29223[(16)]);
var inst_29178__$1 = cljs.core.seq.call(null,inst_29164);
var state_29223__$1 = (function (){var statearr_29247 = state_29223;
(statearr_29247[(10)] = inst_29178__$1);

return statearr_29247;
})();
if(inst_29178__$1){
var statearr_29248_29288 = state_29223__$1;
(statearr_29248_29288[(1)] = (13));

} else {
var statearr_29249_29289 = state_29223__$1;
(statearr_29249_29289[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (9))){
var inst_29200 = (state_29223[(2)]);
var state_29223__$1 = state_29223;
var statearr_29250_29290 = state_29223__$1;
(statearr_29250_29290[(2)] = inst_29200);

(statearr_29250_29290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (5))){
var inst_29161 = cljs.core.deref.call(null,mults);
var inst_29162 = cljs.core.vals.call(null,inst_29161);
var inst_29163 = cljs.core.seq.call(null,inst_29162);
var inst_29164 = inst_29163;
var inst_29165 = null;
var inst_29166 = (0);
var inst_29167 = (0);
var state_29223__$1 = (function (){var statearr_29251 = state_29223;
(statearr_29251[(13)] = inst_29167);

(statearr_29251[(14)] = inst_29165);

(statearr_29251[(15)] = inst_29166);

(statearr_29251[(16)] = inst_29164);

return statearr_29251;
})();
var statearr_29252_29291 = state_29223__$1;
(statearr_29252_29291[(2)] = null);

(statearr_29252_29291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (14))){
var state_29223__$1 = state_29223;
var statearr_29256_29292 = state_29223__$1;
(statearr_29256_29292[(2)] = null);

(statearr_29256_29292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (16))){
var inst_29178 = (state_29223[(10)]);
var inst_29182 = cljs.core.chunk_first.call(null,inst_29178);
var inst_29183 = cljs.core.chunk_rest.call(null,inst_29178);
var inst_29184 = cljs.core.count.call(null,inst_29182);
var inst_29164 = inst_29183;
var inst_29165 = inst_29182;
var inst_29166 = inst_29184;
var inst_29167 = (0);
var state_29223__$1 = (function (){var statearr_29257 = state_29223;
(statearr_29257[(13)] = inst_29167);

(statearr_29257[(14)] = inst_29165);

(statearr_29257[(15)] = inst_29166);

(statearr_29257[(16)] = inst_29164);

return statearr_29257;
})();
var statearr_29258_29293 = state_29223__$1;
(statearr_29258_29293[(2)] = null);

(statearr_29258_29293[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (10))){
var inst_29167 = (state_29223[(13)]);
var inst_29165 = (state_29223[(14)]);
var inst_29166 = (state_29223[(15)]);
var inst_29164 = (state_29223[(16)]);
var inst_29172 = cljs.core._nth.call(null,inst_29165,inst_29167);
var inst_29173 = cljs.core.async.muxch_STAR_.call(null,inst_29172);
var inst_29174 = cljs.core.async.close_BANG_.call(null,inst_29173);
var inst_29175 = (inst_29167 + (1));
var tmp29253 = inst_29165;
var tmp29254 = inst_29166;
var tmp29255 = inst_29164;
var inst_29164__$1 = tmp29255;
var inst_29165__$1 = tmp29253;
var inst_29166__$1 = tmp29254;
var inst_29167__$1 = inst_29175;
var state_29223__$1 = (function (){var statearr_29259 = state_29223;
(statearr_29259[(13)] = inst_29167__$1);

(statearr_29259[(14)] = inst_29165__$1);

(statearr_29259[(15)] = inst_29166__$1);

(statearr_29259[(17)] = inst_29174);

(statearr_29259[(16)] = inst_29164__$1);

return statearr_29259;
})();
var statearr_29260_29294 = state_29223__$1;
(statearr_29260_29294[(2)] = null);

(statearr_29260_29294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (18))){
var inst_29193 = (state_29223[(2)]);
var state_29223__$1 = state_29223;
var statearr_29261_29295 = state_29223__$1;
(statearr_29261_29295[(2)] = inst_29193);

(statearr_29261_29295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29224 === (8))){
var inst_29167 = (state_29223[(13)]);
var inst_29166 = (state_29223[(15)]);
var inst_29169 = (inst_29167 < inst_29166);
var inst_29170 = inst_29169;
var state_29223__$1 = state_29223;
if(cljs.core.truth_(inst_29170)){
var statearr_29262_29296 = state_29223__$1;
(statearr_29262_29296[(1)] = (10));

} else {
var statearr_29263_29297 = state_29223__$1;
(statearr_29263_29297[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto___29269,mults,ensure_mult,p))
;
return ((function (switch__25626__auto__,c__28035__auto___29269,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25627__auto__ = null;
var cljs$core$async$state_machine__25627__auto____0 = (function (){
var statearr_29264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29264[(0)] = cljs$core$async$state_machine__25627__auto__);

(statearr_29264[(1)] = (1));

return statearr_29264;
});
var cljs$core$async$state_machine__25627__auto____1 = (function (state_29223){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_29223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e29265){if((e29265 instanceof Object)){
var ex__25630__auto__ = e29265;
var statearr_29266_29298 = state_29223;
(statearr_29266_29298[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29299 = state_29223;
state_29223 = G__29299;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$state_machine__25627__auto__ = function(state_29223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25627__auto____1.call(this,state_29223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25627__auto____0;
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25627__auto____1;
return cljs$core$async$state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___29269,mults,ensure_mult,p))
})();
var state__28037__auto__ = (function (){var statearr_29267 = f__28036__auto__.call(null);
(statearr_29267[(6)] = c__28035__auto___29269);

return statearr_29267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___29269,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29301 = arguments.length;
switch (G__29301) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29304 = arguments.length;
switch (G__29304) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29307 = arguments.length;
switch (G__29307) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28035__auto___29374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___29374,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___29374,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29346){
var state_val_29347 = (state_29346[(1)]);
if((state_val_29347 === (7))){
var state_29346__$1 = state_29346;
var statearr_29348_29375 = state_29346__$1;
(statearr_29348_29375[(2)] = null);

(statearr_29348_29375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29347 === (1))){
var state_29346__$1 = state_29346;
var statearr_29349_29376 = state_29346__$1;
(statearr_29349_29376[(2)] = null);

(statearr_29349_29376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29347 === (4))){
var inst_29310 = (state_29346[(7)]);
var inst_29312 = (inst_29310 < cnt);
var state_29346__$1 = state_29346;
if(cljs.core.truth_(inst_29312)){
var statearr_29350_29377 = state_29346__$1;
(statearr_29350_29377[(1)] = (6));

} else {
var statearr_29351_29378 = state_29346__$1;
(statearr_29351_29378[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29347 === (15))){
var inst_29342 = (state_29346[(2)]);
var state_29346__$1 = state_29346;
var statearr_29352_29379 = state_29346__$1;
(statearr_29352_29379[(2)] = inst_29342);

(statearr_29352_29379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29347 === (13))){
var inst_29335 = cljs.core.async.close_BANG_.call(null,out);
var state_29346__$1 = state_29346;
var statearr_29353_29380 = state_29346__$1;
(statearr_29353_29380[(2)] = inst_29335);

(statearr_29353_29380[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29347 === (6))){
var state_29346__$1 = state_29346;
var statearr_29354_29381 = state_29346__$1;
(statearr_29354_29381[(2)] = null);

(statearr_29354_29381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29347 === (3))){
var inst_29344 = (state_29346[(2)]);
var state_29346__$1 = state_29346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29346__$1,inst_29344);
} else {
if((state_val_29347 === (12))){
var inst_29332 = (state_29346[(8)]);
var inst_29332__$1 = (state_29346[(2)]);
var inst_29333 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29332__$1);
var state_29346__$1 = (function (){var statearr_29355 = state_29346;
(statearr_29355[(8)] = inst_29332__$1);

return statearr_29355;
})();
if(cljs.core.truth_(inst_29333)){
var statearr_29356_29382 = state_29346__$1;
(statearr_29356_29382[(1)] = (13));

} else {
var statearr_29357_29383 = state_29346__$1;
(statearr_29357_29383[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29347 === (2))){
var inst_29309 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29310 = (0);
var state_29346__$1 = (function (){var statearr_29358 = state_29346;
(statearr_29358[(9)] = inst_29309);

(statearr_29358[(7)] = inst_29310);

return statearr_29358;
})();
var statearr_29359_29384 = state_29346__$1;
(statearr_29359_29384[(2)] = null);

(statearr_29359_29384[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29347 === (11))){
var inst_29310 = (state_29346[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29346,(10),Object,null,(9));
var inst_29319 = chs__$1.call(null,inst_29310);
var inst_29320 = done.call(null,inst_29310);
var inst_29321 = cljs.core.async.take_BANG_.call(null,inst_29319,inst_29320);
var state_29346__$1 = state_29346;
var statearr_29360_29385 = state_29346__$1;
(statearr_29360_29385[(2)] = inst_29321);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29346__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29347 === (9))){
var inst_29310 = (state_29346[(7)]);
var inst_29323 = (state_29346[(2)]);
var inst_29324 = (inst_29310 + (1));
var inst_29310__$1 = inst_29324;
var state_29346__$1 = (function (){var statearr_29361 = state_29346;
(statearr_29361[(10)] = inst_29323);

(statearr_29361[(7)] = inst_29310__$1);

return statearr_29361;
})();
var statearr_29362_29386 = state_29346__$1;
(statearr_29362_29386[(2)] = null);

(statearr_29362_29386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29347 === (5))){
var inst_29330 = (state_29346[(2)]);
var state_29346__$1 = (function (){var statearr_29363 = state_29346;
(statearr_29363[(11)] = inst_29330);

return statearr_29363;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29346__$1,(12),dchan);
} else {
if((state_val_29347 === (14))){
var inst_29332 = (state_29346[(8)]);
var inst_29337 = cljs.core.apply.call(null,f,inst_29332);
var state_29346__$1 = state_29346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29346__$1,(16),out,inst_29337);
} else {
if((state_val_29347 === (16))){
var inst_29339 = (state_29346[(2)]);
var state_29346__$1 = (function (){var statearr_29364 = state_29346;
(statearr_29364[(12)] = inst_29339);

return statearr_29364;
})();
var statearr_29365_29387 = state_29346__$1;
(statearr_29365_29387[(2)] = null);

(statearr_29365_29387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29347 === (10))){
var inst_29314 = (state_29346[(2)]);
var inst_29315 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29346__$1 = (function (){var statearr_29366 = state_29346;
(statearr_29366[(13)] = inst_29314);

return statearr_29366;
})();
var statearr_29367_29388 = state_29346__$1;
(statearr_29367_29388[(2)] = inst_29315);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29346__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29347 === (8))){
var inst_29328 = (state_29346[(2)]);
var state_29346__$1 = state_29346;
var statearr_29368_29389 = state_29346__$1;
(statearr_29368_29389[(2)] = inst_29328);

(statearr_29368_29389[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto___29374,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25626__auto__,c__28035__auto___29374,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25627__auto__ = null;
var cljs$core$async$state_machine__25627__auto____0 = (function (){
var statearr_29369 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29369[(0)] = cljs$core$async$state_machine__25627__auto__);

(statearr_29369[(1)] = (1));

return statearr_29369;
});
var cljs$core$async$state_machine__25627__auto____1 = (function (state_29346){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_29346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e29370){if((e29370 instanceof Object)){
var ex__25630__auto__ = e29370;
var statearr_29371_29390 = state_29346;
(statearr_29371_29390[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29391 = state_29346;
state_29346 = G__29391;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$state_machine__25627__auto__ = function(state_29346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25627__auto____1.call(this,state_29346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25627__auto____0;
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25627__auto____1;
return cljs$core$async$state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___29374,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28037__auto__ = (function (){var statearr_29372 = f__28036__auto__.call(null);
(statearr_29372[(6)] = c__28035__auto___29374);

return statearr_29372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___29374,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29394 = arguments.length;
switch (G__29394) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28035__auto___29448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___29448,out){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___29448,out){
return (function (state_29426){
var state_val_29427 = (state_29426[(1)]);
if((state_val_29427 === (7))){
var inst_29406 = (state_29426[(7)]);
var inst_29405 = (state_29426[(8)]);
var inst_29405__$1 = (state_29426[(2)]);
var inst_29406__$1 = cljs.core.nth.call(null,inst_29405__$1,(0),null);
var inst_29407 = cljs.core.nth.call(null,inst_29405__$1,(1),null);
var inst_29408 = (inst_29406__$1 == null);
var state_29426__$1 = (function (){var statearr_29428 = state_29426;
(statearr_29428[(9)] = inst_29407);

(statearr_29428[(7)] = inst_29406__$1);

(statearr_29428[(8)] = inst_29405__$1);

return statearr_29428;
})();
if(cljs.core.truth_(inst_29408)){
var statearr_29429_29449 = state_29426__$1;
(statearr_29429_29449[(1)] = (8));

} else {
var statearr_29430_29450 = state_29426__$1;
(statearr_29430_29450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (1))){
var inst_29395 = cljs.core.vec.call(null,chs);
var inst_29396 = inst_29395;
var state_29426__$1 = (function (){var statearr_29431 = state_29426;
(statearr_29431[(10)] = inst_29396);

return statearr_29431;
})();
var statearr_29432_29451 = state_29426__$1;
(statearr_29432_29451[(2)] = null);

(statearr_29432_29451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (4))){
var inst_29396 = (state_29426[(10)]);
var state_29426__$1 = state_29426;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29426__$1,(7),inst_29396);
} else {
if((state_val_29427 === (6))){
var inst_29422 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
var statearr_29433_29452 = state_29426__$1;
(statearr_29433_29452[(2)] = inst_29422);

(statearr_29433_29452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (3))){
var inst_29424 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29426__$1,inst_29424);
} else {
if((state_val_29427 === (2))){
var inst_29396 = (state_29426[(10)]);
var inst_29398 = cljs.core.count.call(null,inst_29396);
var inst_29399 = (inst_29398 > (0));
var state_29426__$1 = state_29426;
if(cljs.core.truth_(inst_29399)){
var statearr_29435_29453 = state_29426__$1;
(statearr_29435_29453[(1)] = (4));

} else {
var statearr_29436_29454 = state_29426__$1;
(statearr_29436_29454[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (11))){
var inst_29396 = (state_29426[(10)]);
var inst_29415 = (state_29426[(2)]);
var tmp29434 = inst_29396;
var inst_29396__$1 = tmp29434;
var state_29426__$1 = (function (){var statearr_29437 = state_29426;
(statearr_29437[(10)] = inst_29396__$1);

(statearr_29437[(11)] = inst_29415);

return statearr_29437;
})();
var statearr_29438_29455 = state_29426__$1;
(statearr_29438_29455[(2)] = null);

(statearr_29438_29455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (9))){
var inst_29406 = (state_29426[(7)]);
var state_29426__$1 = state_29426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29426__$1,(11),out,inst_29406);
} else {
if((state_val_29427 === (5))){
var inst_29420 = cljs.core.async.close_BANG_.call(null,out);
var state_29426__$1 = state_29426;
var statearr_29439_29456 = state_29426__$1;
(statearr_29439_29456[(2)] = inst_29420);

(statearr_29439_29456[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (10))){
var inst_29418 = (state_29426[(2)]);
var state_29426__$1 = state_29426;
var statearr_29440_29457 = state_29426__$1;
(statearr_29440_29457[(2)] = inst_29418);

(statearr_29440_29457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29427 === (8))){
var inst_29407 = (state_29426[(9)]);
var inst_29406 = (state_29426[(7)]);
var inst_29396 = (state_29426[(10)]);
var inst_29405 = (state_29426[(8)]);
var inst_29410 = (function (){var cs = inst_29396;
var vec__29401 = inst_29405;
var v = inst_29406;
var c = inst_29407;
return ((function (cs,vec__29401,v,c,inst_29407,inst_29406,inst_29396,inst_29405,state_val_29427,c__28035__auto___29448,out){
return (function (p1__29392_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29392_SHARP_);
});
;})(cs,vec__29401,v,c,inst_29407,inst_29406,inst_29396,inst_29405,state_val_29427,c__28035__auto___29448,out))
})();
var inst_29411 = cljs.core.filterv.call(null,inst_29410,inst_29396);
var inst_29396__$1 = inst_29411;
var state_29426__$1 = (function (){var statearr_29441 = state_29426;
(statearr_29441[(10)] = inst_29396__$1);

return statearr_29441;
})();
var statearr_29442_29458 = state_29426__$1;
(statearr_29442_29458[(2)] = null);

(statearr_29442_29458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto___29448,out))
;
return ((function (switch__25626__auto__,c__28035__auto___29448,out){
return (function() {
var cljs$core$async$state_machine__25627__auto__ = null;
var cljs$core$async$state_machine__25627__auto____0 = (function (){
var statearr_29443 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29443[(0)] = cljs$core$async$state_machine__25627__auto__);

(statearr_29443[(1)] = (1));

return statearr_29443;
});
var cljs$core$async$state_machine__25627__auto____1 = (function (state_29426){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_29426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e29444){if((e29444 instanceof Object)){
var ex__25630__auto__ = e29444;
var statearr_29445_29459 = state_29426;
(statearr_29445_29459[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29460 = state_29426;
state_29426 = G__29460;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$state_machine__25627__auto__ = function(state_29426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25627__auto____1.call(this,state_29426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25627__auto____0;
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25627__auto____1;
return cljs$core$async$state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___29448,out))
})();
var state__28037__auto__ = (function (){var statearr_29446 = f__28036__auto__.call(null);
(statearr_29446[(6)] = c__28035__auto___29448);

return statearr_29446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___29448,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29462 = arguments.length;
switch (G__29462) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28035__auto___29507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___29507,out){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___29507,out){
return (function (state_29486){
var state_val_29487 = (state_29486[(1)]);
if((state_val_29487 === (7))){
var inst_29468 = (state_29486[(7)]);
var inst_29468__$1 = (state_29486[(2)]);
var inst_29469 = (inst_29468__$1 == null);
var inst_29470 = cljs.core.not.call(null,inst_29469);
var state_29486__$1 = (function (){var statearr_29488 = state_29486;
(statearr_29488[(7)] = inst_29468__$1);

return statearr_29488;
})();
if(inst_29470){
var statearr_29489_29508 = state_29486__$1;
(statearr_29489_29508[(1)] = (8));

} else {
var statearr_29490_29509 = state_29486__$1;
(statearr_29490_29509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (1))){
var inst_29463 = (0);
var state_29486__$1 = (function (){var statearr_29491 = state_29486;
(statearr_29491[(8)] = inst_29463);

return statearr_29491;
})();
var statearr_29492_29510 = state_29486__$1;
(statearr_29492_29510[(2)] = null);

(statearr_29492_29510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (4))){
var state_29486__$1 = state_29486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29486__$1,(7),ch);
} else {
if((state_val_29487 === (6))){
var inst_29481 = (state_29486[(2)]);
var state_29486__$1 = state_29486;
var statearr_29493_29511 = state_29486__$1;
(statearr_29493_29511[(2)] = inst_29481);

(statearr_29493_29511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (3))){
var inst_29483 = (state_29486[(2)]);
var inst_29484 = cljs.core.async.close_BANG_.call(null,out);
var state_29486__$1 = (function (){var statearr_29494 = state_29486;
(statearr_29494[(9)] = inst_29483);

return statearr_29494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29486__$1,inst_29484);
} else {
if((state_val_29487 === (2))){
var inst_29463 = (state_29486[(8)]);
var inst_29465 = (inst_29463 < n);
var state_29486__$1 = state_29486;
if(cljs.core.truth_(inst_29465)){
var statearr_29495_29512 = state_29486__$1;
(statearr_29495_29512[(1)] = (4));

} else {
var statearr_29496_29513 = state_29486__$1;
(statearr_29496_29513[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (11))){
var inst_29463 = (state_29486[(8)]);
var inst_29473 = (state_29486[(2)]);
var inst_29474 = (inst_29463 + (1));
var inst_29463__$1 = inst_29474;
var state_29486__$1 = (function (){var statearr_29497 = state_29486;
(statearr_29497[(8)] = inst_29463__$1);

(statearr_29497[(10)] = inst_29473);

return statearr_29497;
})();
var statearr_29498_29514 = state_29486__$1;
(statearr_29498_29514[(2)] = null);

(statearr_29498_29514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (9))){
var state_29486__$1 = state_29486;
var statearr_29499_29515 = state_29486__$1;
(statearr_29499_29515[(2)] = null);

(statearr_29499_29515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (5))){
var state_29486__$1 = state_29486;
var statearr_29500_29516 = state_29486__$1;
(statearr_29500_29516[(2)] = null);

(statearr_29500_29516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (10))){
var inst_29478 = (state_29486[(2)]);
var state_29486__$1 = state_29486;
var statearr_29501_29517 = state_29486__$1;
(statearr_29501_29517[(2)] = inst_29478);

(statearr_29501_29517[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29487 === (8))){
var inst_29468 = (state_29486[(7)]);
var state_29486__$1 = state_29486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29486__$1,(11),out,inst_29468);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto___29507,out))
;
return ((function (switch__25626__auto__,c__28035__auto___29507,out){
return (function() {
var cljs$core$async$state_machine__25627__auto__ = null;
var cljs$core$async$state_machine__25627__auto____0 = (function (){
var statearr_29502 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29502[(0)] = cljs$core$async$state_machine__25627__auto__);

(statearr_29502[(1)] = (1));

return statearr_29502;
});
var cljs$core$async$state_machine__25627__auto____1 = (function (state_29486){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_29486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e29503){if((e29503 instanceof Object)){
var ex__25630__auto__ = e29503;
var statearr_29504_29518 = state_29486;
(statearr_29504_29518[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29519 = state_29486;
state_29486 = G__29519;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$state_machine__25627__auto__ = function(state_29486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25627__auto____1.call(this,state_29486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25627__auto____0;
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25627__auto____1;
return cljs$core$async$state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___29507,out))
})();
var state__28037__auto__ = (function (){var statearr_29505 = f__28036__auto__.call(null);
(statearr_29505[(6)] = c__28035__auto___29507);

return statearr_29505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___29507,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29521 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29521 = (function (f,ch,meta29522){
this.f = f;
this.ch = ch;
this.meta29522 = meta29522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29523,meta29522__$1){
var self__ = this;
var _29523__$1 = this;
return (new cljs.core.async.t_cljs$core$async29521(self__.f,self__.ch,meta29522__$1));
});

cljs.core.async.t_cljs$core$async29521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29523){
var self__ = this;
var _29523__$1 = this;
return self__.meta29522;
});

cljs.core.async.t_cljs$core$async29521.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29521.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29521.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29521.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29521.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29524 = (function (f,ch,meta29522,_,fn1,meta29525){
this.f = f;
this.ch = ch;
this.meta29522 = meta29522;
this._ = _;
this.fn1 = fn1;
this.meta29525 = meta29525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29526,meta29525__$1){
var self__ = this;
var _29526__$1 = this;
return (new cljs.core.async.t_cljs$core$async29524(self__.f,self__.ch,self__.meta29522,self__._,self__.fn1,meta29525__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29526){
var self__ = this;
var _29526__$1 = this;
return self__.meta29525;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29524.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29520_SHARP_){
return f1.call(null,(((p1__29520_SHARP_ == null))?null:self__.f.call(null,p1__29520_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29524.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29522","meta29522",-1691712185,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29521","cljs.core.async/t_cljs$core$async29521",-1993892035,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29525","meta29525",-1460357962,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29524";

cljs.core.async.t_cljs$core$async29524.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29524");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29524.
 */
cljs.core.async.__GT_t_cljs$core$async29524 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29524(f__$1,ch__$1,meta29522__$1,___$2,fn1__$1,meta29525){
return (new cljs.core.async.t_cljs$core$async29524(f__$1,ch__$1,meta29522__$1,___$2,fn1__$1,meta29525));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29524(self__.f,self__.ch,self__.meta29522,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29521.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29521.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29522","meta29522",-1691712185,null)], null);
});

cljs.core.async.t_cljs$core$async29521.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29521";

cljs.core.async.t_cljs$core$async29521.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29521");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29521.
 */
cljs.core.async.__GT_t_cljs$core$async29521 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29521(f__$1,ch__$1,meta29522){
return (new cljs.core.async.t_cljs$core$async29521(f__$1,ch__$1,meta29522));
});

}

return (new cljs.core.async.t_cljs$core$async29521(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29527 = (function (f,ch,meta29528){
this.f = f;
this.ch = ch;
this.meta29528 = meta29528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29529,meta29528__$1){
var self__ = this;
var _29529__$1 = this;
return (new cljs.core.async.t_cljs$core$async29527(self__.f,self__.ch,meta29528__$1));
});

cljs.core.async.t_cljs$core$async29527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29529){
var self__ = this;
var _29529__$1 = this;
return self__.meta29528;
});

cljs.core.async.t_cljs$core$async29527.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29527.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29527.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29527.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29527.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29527.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29528","meta29528",644807599,null)], null);
});

cljs.core.async.t_cljs$core$async29527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29527";

cljs.core.async.t_cljs$core$async29527.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29527");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29527.
 */
cljs.core.async.__GT_t_cljs$core$async29527 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29527(f__$1,ch__$1,meta29528){
return (new cljs.core.async.t_cljs$core$async29527(f__$1,ch__$1,meta29528));
});

}

return (new cljs.core.async.t_cljs$core$async29527(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29530 = (function (p,ch,meta29531){
this.p = p;
this.ch = ch;
this.meta29531 = meta29531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29532,meta29531__$1){
var self__ = this;
var _29532__$1 = this;
return (new cljs.core.async.t_cljs$core$async29530(self__.p,self__.ch,meta29531__$1));
});

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29532){
var self__ = this;
var _29532__$1 = this;
return self__.meta29531;
});

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29531","meta29531",645449630,null)], null);
});

cljs.core.async.t_cljs$core$async29530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29530";

cljs.core.async.t_cljs$core$async29530.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async29530");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29530.
 */
cljs.core.async.__GT_t_cljs$core$async29530 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29530(p__$1,ch__$1,meta29531){
return (new cljs.core.async.t_cljs$core$async29530(p__$1,ch__$1,meta29531));
});

}

return (new cljs.core.async.t_cljs$core$async29530(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29534 = arguments.length;
switch (G__29534) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28035__auto___29574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___29574,out){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___29574,out){
return (function (state_29555){
var state_val_29556 = (state_29555[(1)]);
if((state_val_29556 === (7))){
var inst_29551 = (state_29555[(2)]);
var state_29555__$1 = state_29555;
var statearr_29557_29575 = state_29555__$1;
(statearr_29557_29575[(2)] = inst_29551);

(statearr_29557_29575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (1))){
var state_29555__$1 = state_29555;
var statearr_29558_29576 = state_29555__$1;
(statearr_29558_29576[(2)] = null);

(statearr_29558_29576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (4))){
var inst_29537 = (state_29555[(7)]);
var inst_29537__$1 = (state_29555[(2)]);
var inst_29538 = (inst_29537__$1 == null);
var state_29555__$1 = (function (){var statearr_29559 = state_29555;
(statearr_29559[(7)] = inst_29537__$1);

return statearr_29559;
})();
if(cljs.core.truth_(inst_29538)){
var statearr_29560_29577 = state_29555__$1;
(statearr_29560_29577[(1)] = (5));

} else {
var statearr_29561_29578 = state_29555__$1;
(statearr_29561_29578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (6))){
var inst_29537 = (state_29555[(7)]);
var inst_29542 = p.call(null,inst_29537);
var state_29555__$1 = state_29555;
if(cljs.core.truth_(inst_29542)){
var statearr_29562_29579 = state_29555__$1;
(statearr_29562_29579[(1)] = (8));

} else {
var statearr_29563_29580 = state_29555__$1;
(statearr_29563_29580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (3))){
var inst_29553 = (state_29555[(2)]);
var state_29555__$1 = state_29555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29555__$1,inst_29553);
} else {
if((state_val_29556 === (2))){
var state_29555__$1 = state_29555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29555__$1,(4),ch);
} else {
if((state_val_29556 === (11))){
var inst_29545 = (state_29555[(2)]);
var state_29555__$1 = state_29555;
var statearr_29564_29581 = state_29555__$1;
(statearr_29564_29581[(2)] = inst_29545);

(statearr_29564_29581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (9))){
var state_29555__$1 = state_29555;
var statearr_29565_29582 = state_29555__$1;
(statearr_29565_29582[(2)] = null);

(statearr_29565_29582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (5))){
var inst_29540 = cljs.core.async.close_BANG_.call(null,out);
var state_29555__$1 = state_29555;
var statearr_29566_29583 = state_29555__$1;
(statearr_29566_29583[(2)] = inst_29540);

(statearr_29566_29583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (10))){
var inst_29548 = (state_29555[(2)]);
var state_29555__$1 = (function (){var statearr_29567 = state_29555;
(statearr_29567[(8)] = inst_29548);

return statearr_29567;
})();
var statearr_29568_29584 = state_29555__$1;
(statearr_29568_29584[(2)] = null);

(statearr_29568_29584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29556 === (8))){
var inst_29537 = (state_29555[(7)]);
var state_29555__$1 = state_29555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29555__$1,(11),out,inst_29537);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto___29574,out))
;
return ((function (switch__25626__auto__,c__28035__auto___29574,out){
return (function() {
var cljs$core$async$state_machine__25627__auto__ = null;
var cljs$core$async$state_machine__25627__auto____0 = (function (){
var statearr_29569 = [null,null,null,null,null,null,null,null,null];
(statearr_29569[(0)] = cljs$core$async$state_machine__25627__auto__);

(statearr_29569[(1)] = (1));

return statearr_29569;
});
var cljs$core$async$state_machine__25627__auto____1 = (function (state_29555){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_29555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e29570){if((e29570 instanceof Object)){
var ex__25630__auto__ = e29570;
var statearr_29571_29585 = state_29555;
(statearr_29571_29585[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29586 = state_29555;
state_29555 = G__29586;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$state_machine__25627__auto__ = function(state_29555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25627__auto____1.call(this,state_29555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25627__auto____0;
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25627__auto____1;
return cljs$core$async$state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___29574,out))
})();
var state__28037__auto__ = (function (){var statearr_29572 = f__28036__auto__.call(null);
(statearr_29572[(6)] = c__28035__auto___29574);

return statearr_29572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___29574,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29588 = arguments.length;
switch (G__29588) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto__){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto__){
return (function (state_29651){
var state_val_29652 = (state_29651[(1)]);
if((state_val_29652 === (7))){
var inst_29647 = (state_29651[(2)]);
var state_29651__$1 = state_29651;
var statearr_29653_29691 = state_29651__$1;
(statearr_29653_29691[(2)] = inst_29647);

(statearr_29653_29691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (20))){
var inst_29617 = (state_29651[(7)]);
var inst_29628 = (state_29651[(2)]);
var inst_29629 = cljs.core.next.call(null,inst_29617);
var inst_29603 = inst_29629;
var inst_29604 = null;
var inst_29605 = (0);
var inst_29606 = (0);
var state_29651__$1 = (function (){var statearr_29654 = state_29651;
(statearr_29654[(8)] = inst_29603);

(statearr_29654[(9)] = inst_29605);

(statearr_29654[(10)] = inst_29604);

(statearr_29654[(11)] = inst_29628);

(statearr_29654[(12)] = inst_29606);

return statearr_29654;
})();
var statearr_29655_29692 = state_29651__$1;
(statearr_29655_29692[(2)] = null);

(statearr_29655_29692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (1))){
var state_29651__$1 = state_29651;
var statearr_29656_29693 = state_29651__$1;
(statearr_29656_29693[(2)] = null);

(statearr_29656_29693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (4))){
var inst_29592 = (state_29651[(13)]);
var inst_29592__$1 = (state_29651[(2)]);
var inst_29593 = (inst_29592__$1 == null);
var state_29651__$1 = (function (){var statearr_29657 = state_29651;
(statearr_29657[(13)] = inst_29592__$1);

return statearr_29657;
})();
if(cljs.core.truth_(inst_29593)){
var statearr_29658_29694 = state_29651__$1;
(statearr_29658_29694[(1)] = (5));

} else {
var statearr_29659_29695 = state_29651__$1;
(statearr_29659_29695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (15))){
var state_29651__$1 = state_29651;
var statearr_29663_29696 = state_29651__$1;
(statearr_29663_29696[(2)] = null);

(statearr_29663_29696[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (21))){
var state_29651__$1 = state_29651;
var statearr_29664_29697 = state_29651__$1;
(statearr_29664_29697[(2)] = null);

(statearr_29664_29697[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (13))){
var inst_29603 = (state_29651[(8)]);
var inst_29605 = (state_29651[(9)]);
var inst_29604 = (state_29651[(10)]);
var inst_29606 = (state_29651[(12)]);
var inst_29613 = (state_29651[(2)]);
var inst_29614 = (inst_29606 + (1));
var tmp29660 = inst_29603;
var tmp29661 = inst_29605;
var tmp29662 = inst_29604;
var inst_29603__$1 = tmp29660;
var inst_29604__$1 = tmp29662;
var inst_29605__$1 = tmp29661;
var inst_29606__$1 = inst_29614;
var state_29651__$1 = (function (){var statearr_29665 = state_29651;
(statearr_29665[(14)] = inst_29613);

(statearr_29665[(8)] = inst_29603__$1);

(statearr_29665[(9)] = inst_29605__$1);

(statearr_29665[(10)] = inst_29604__$1);

(statearr_29665[(12)] = inst_29606__$1);

return statearr_29665;
})();
var statearr_29666_29698 = state_29651__$1;
(statearr_29666_29698[(2)] = null);

(statearr_29666_29698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (22))){
var state_29651__$1 = state_29651;
var statearr_29667_29699 = state_29651__$1;
(statearr_29667_29699[(2)] = null);

(statearr_29667_29699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (6))){
var inst_29592 = (state_29651[(13)]);
var inst_29601 = f.call(null,inst_29592);
var inst_29602 = cljs.core.seq.call(null,inst_29601);
var inst_29603 = inst_29602;
var inst_29604 = null;
var inst_29605 = (0);
var inst_29606 = (0);
var state_29651__$1 = (function (){var statearr_29668 = state_29651;
(statearr_29668[(8)] = inst_29603);

(statearr_29668[(9)] = inst_29605);

(statearr_29668[(10)] = inst_29604);

(statearr_29668[(12)] = inst_29606);

return statearr_29668;
})();
var statearr_29669_29700 = state_29651__$1;
(statearr_29669_29700[(2)] = null);

(statearr_29669_29700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (17))){
var inst_29617 = (state_29651[(7)]);
var inst_29621 = cljs.core.chunk_first.call(null,inst_29617);
var inst_29622 = cljs.core.chunk_rest.call(null,inst_29617);
var inst_29623 = cljs.core.count.call(null,inst_29621);
var inst_29603 = inst_29622;
var inst_29604 = inst_29621;
var inst_29605 = inst_29623;
var inst_29606 = (0);
var state_29651__$1 = (function (){var statearr_29670 = state_29651;
(statearr_29670[(8)] = inst_29603);

(statearr_29670[(9)] = inst_29605);

(statearr_29670[(10)] = inst_29604);

(statearr_29670[(12)] = inst_29606);

return statearr_29670;
})();
var statearr_29671_29701 = state_29651__$1;
(statearr_29671_29701[(2)] = null);

(statearr_29671_29701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (3))){
var inst_29649 = (state_29651[(2)]);
var state_29651__$1 = state_29651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29651__$1,inst_29649);
} else {
if((state_val_29652 === (12))){
var inst_29637 = (state_29651[(2)]);
var state_29651__$1 = state_29651;
var statearr_29672_29702 = state_29651__$1;
(statearr_29672_29702[(2)] = inst_29637);

(statearr_29672_29702[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (2))){
var state_29651__$1 = state_29651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29651__$1,(4),in$);
} else {
if((state_val_29652 === (23))){
var inst_29645 = (state_29651[(2)]);
var state_29651__$1 = state_29651;
var statearr_29673_29703 = state_29651__$1;
(statearr_29673_29703[(2)] = inst_29645);

(statearr_29673_29703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (19))){
var inst_29632 = (state_29651[(2)]);
var state_29651__$1 = state_29651;
var statearr_29674_29704 = state_29651__$1;
(statearr_29674_29704[(2)] = inst_29632);

(statearr_29674_29704[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (11))){
var inst_29617 = (state_29651[(7)]);
var inst_29603 = (state_29651[(8)]);
var inst_29617__$1 = cljs.core.seq.call(null,inst_29603);
var state_29651__$1 = (function (){var statearr_29675 = state_29651;
(statearr_29675[(7)] = inst_29617__$1);

return statearr_29675;
})();
if(inst_29617__$1){
var statearr_29676_29705 = state_29651__$1;
(statearr_29676_29705[(1)] = (14));

} else {
var statearr_29677_29706 = state_29651__$1;
(statearr_29677_29706[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (9))){
var inst_29639 = (state_29651[(2)]);
var inst_29640 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29651__$1 = (function (){var statearr_29678 = state_29651;
(statearr_29678[(15)] = inst_29639);

return statearr_29678;
})();
if(cljs.core.truth_(inst_29640)){
var statearr_29679_29707 = state_29651__$1;
(statearr_29679_29707[(1)] = (21));

} else {
var statearr_29680_29708 = state_29651__$1;
(statearr_29680_29708[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (5))){
var inst_29595 = cljs.core.async.close_BANG_.call(null,out);
var state_29651__$1 = state_29651;
var statearr_29681_29709 = state_29651__$1;
(statearr_29681_29709[(2)] = inst_29595);

(statearr_29681_29709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (14))){
var inst_29617 = (state_29651[(7)]);
var inst_29619 = cljs.core.chunked_seq_QMARK_.call(null,inst_29617);
var state_29651__$1 = state_29651;
if(inst_29619){
var statearr_29682_29710 = state_29651__$1;
(statearr_29682_29710[(1)] = (17));

} else {
var statearr_29683_29711 = state_29651__$1;
(statearr_29683_29711[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (16))){
var inst_29635 = (state_29651[(2)]);
var state_29651__$1 = state_29651;
var statearr_29684_29712 = state_29651__$1;
(statearr_29684_29712[(2)] = inst_29635);

(statearr_29684_29712[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (10))){
var inst_29604 = (state_29651[(10)]);
var inst_29606 = (state_29651[(12)]);
var inst_29611 = cljs.core._nth.call(null,inst_29604,inst_29606);
var state_29651__$1 = state_29651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29651__$1,(13),out,inst_29611);
} else {
if((state_val_29652 === (18))){
var inst_29617 = (state_29651[(7)]);
var inst_29626 = cljs.core.first.call(null,inst_29617);
var state_29651__$1 = state_29651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29651__$1,(20),out,inst_29626);
} else {
if((state_val_29652 === (8))){
var inst_29605 = (state_29651[(9)]);
var inst_29606 = (state_29651[(12)]);
var inst_29608 = (inst_29606 < inst_29605);
var inst_29609 = inst_29608;
var state_29651__$1 = state_29651;
if(cljs.core.truth_(inst_29609)){
var statearr_29685_29713 = state_29651__$1;
(statearr_29685_29713[(1)] = (10));

} else {
var statearr_29686_29714 = state_29651__$1;
(statearr_29686_29714[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto__))
;
return ((function (switch__25626__auto__,c__28035__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25627__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25627__auto____0 = (function (){
var statearr_29687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29687[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25627__auto__);

(statearr_29687[(1)] = (1));

return statearr_29687;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25627__auto____1 = (function (state_29651){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_29651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e29688){if((e29688 instanceof Object)){
var ex__25630__auto__ = e29688;
var statearr_29689_29715 = state_29651;
(statearr_29689_29715[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29716 = state_29651;
state_29651 = G__29716;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25627__auto__ = function(state_29651){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25627__auto____1.call(this,state_29651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25627__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25627__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto__))
})();
var state__28037__auto__ = (function (){var statearr_29690 = f__28036__auto__.call(null);
(statearr_29690[(6)] = c__28035__auto__);

return statearr_29690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto__))
);

return c__28035__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29718 = arguments.length;
switch (G__29718) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29721 = arguments.length;
switch (G__29721) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29724 = arguments.length;
switch (G__29724) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28035__auto___29771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___29771,out){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___29771,out){
return (function (state_29748){
var state_val_29749 = (state_29748[(1)]);
if((state_val_29749 === (7))){
var inst_29743 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
var statearr_29750_29772 = state_29748__$1;
(statearr_29750_29772[(2)] = inst_29743);

(statearr_29750_29772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (1))){
var inst_29725 = null;
var state_29748__$1 = (function (){var statearr_29751 = state_29748;
(statearr_29751[(7)] = inst_29725);

return statearr_29751;
})();
var statearr_29752_29773 = state_29748__$1;
(statearr_29752_29773[(2)] = null);

(statearr_29752_29773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (4))){
var inst_29728 = (state_29748[(8)]);
var inst_29728__$1 = (state_29748[(2)]);
var inst_29729 = (inst_29728__$1 == null);
var inst_29730 = cljs.core.not.call(null,inst_29729);
var state_29748__$1 = (function (){var statearr_29753 = state_29748;
(statearr_29753[(8)] = inst_29728__$1);

return statearr_29753;
})();
if(inst_29730){
var statearr_29754_29774 = state_29748__$1;
(statearr_29754_29774[(1)] = (5));

} else {
var statearr_29755_29775 = state_29748__$1;
(statearr_29755_29775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (6))){
var state_29748__$1 = state_29748;
var statearr_29756_29776 = state_29748__$1;
(statearr_29756_29776[(2)] = null);

(statearr_29756_29776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (3))){
var inst_29745 = (state_29748[(2)]);
var inst_29746 = cljs.core.async.close_BANG_.call(null,out);
var state_29748__$1 = (function (){var statearr_29757 = state_29748;
(statearr_29757[(9)] = inst_29745);

return statearr_29757;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29748__$1,inst_29746);
} else {
if((state_val_29749 === (2))){
var state_29748__$1 = state_29748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29748__$1,(4),ch);
} else {
if((state_val_29749 === (11))){
var inst_29728 = (state_29748[(8)]);
var inst_29737 = (state_29748[(2)]);
var inst_29725 = inst_29728;
var state_29748__$1 = (function (){var statearr_29758 = state_29748;
(statearr_29758[(7)] = inst_29725);

(statearr_29758[(10)] = inst_29737);

return statearr_29758;
})();
var statearr_29759_29777 = state_29748__$1;
(statearr_29759_29777[(2)] = null);

(statearr_29759_29777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (9))){
var inst_29728 = (state_29748[(8)]);
var state_29748__$1 = state_29748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29748__$1,(11),out,inst_29728);
} else {
if((state_val_29749 === (5))){
var inst_29725 = (state_29748[(7)]);
var inst_29728 = (state_29748[(8)]);
var inst_29732 = cljs.core._EQ_.call(null,inst_29728,inst_29725);
var state_29748__$1 = state_29748;
if(inst_29732){
var statearr_29761_29778 = state_29748__$1;
(statearr_29761_29778[(1)] = (8));

} else {
var statearr_29762_29779 = state_29748__$1;
(statearr_29762_29779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (10))){
var inst_29740 = (state_29748[(2)]);
var state_29748__$1 = state_29748;
var statearr_29763_29780 = state_29748__$1;
(statearr_29763_29780[(2)] = inst_29740);

(statearr_29763_29780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29749 === (8))){
var inst_29725 = (state_29748[(7)]);
var tmp29760 = inst_29725;
var inst_29725__$1 = tmp29760;
var state_29748__$1 = (function (){var statearr_29764 = state_29748;
(statearr_29764[(7)] = inst_29725__$1);

return statearr_29764;
})();
var statearr_29765_29781 = state_29748__$1;
(statearr_29765_29781[(2)] = null);

(statearr_29765_29781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto___29771,out))
;
return ((function (switch__25626__auto__,c__28035__auto___29771,out){
return (function() {
var cljs$core$async$state_machine__25627__auto__ = null;
var cljs$core$async$state_machine__25627__auto____0 = (function (){
var statearr_29766 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29766[(0)] = cljs$core$async$state_machine__25627__auto__);

(statearr_29766[(1)] = (1));

return statearr_29766;
});
var cljs$core$async$state_machine__25627__auto____1 = (function (state_29748){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_29748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e29767){if((e29767 instanceof Object)){
var ex__25630__auto__ = e29767;
var statearr_29768_29782 = state_29748;
(statearr_29768_29782[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29783 = state_29748;
state_29748 = G__29783;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$state_machine__25627__auto__ = function(state_29748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25627__auto____1.call(this,state_29748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25627__auto____0;
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25627__auto____1;
return cljs$core$async$state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___29771,out))
})();
var state__28037__auto__ = (function (){var statearr_29769 = f__28036__auto__.call(null);
(statearr_29769[(6)] = c__28035__auto___29771);

return statearr_29769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___29771,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29785 = arguments.length;
switch (G__29785) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28035__auto___29851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___29851,out){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___29851,out){
return (function (state_29823){
var state_val_29824 = (state_29823[(1)]);
if((state_val_29824 === (7))){
var inst_29819 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
var statearr_29825_29852 = state_29823__$1;
(statearr_29825_29852[(2)] = inst_29819);

(statearr_29825_29852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (1))){
var inst_29786 = (new Array(n));
var inst_29787 = inst_29786;
var inst_29788 = (0);
var state_29823__$1 = (function (){var statearr_29826 = state_29823;
(statearr_29826[(7)] = inst_29788);

(statearr_29826[(8)] = inst_29787);

return statearr_29826;
})();
var statearr_29827_29853 = state_29823__$1;
(statearr_29827_29853[(2)] = null);

(statearr_29827_29853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (4))){
var inst_29791 = (state_29823[(9)]);
var inst_29791__$1 = (state_29823[(2)]);
var inst_29792 = (inst_29791__$1 == null);
var inst_29793 = cljs.core.not.call(null,inst_29792);
var state_29823__$1 = (function (){var statearr_29828 = state_29823;
(statearr_29828[(9)] = inst_29791__$1);

return statearr_29828;
})();
if(inst_29793){
var statearr_29829_29854 = state_29823__$1;
(statearr_29829_29854[(1)] = (5));

} else {
var statearr_29830_29855 = state_29823__$1;
(statearr_29830_29855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (15))){
var inst_29813 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
var statearr_29831_29856 = state_29823__$1;
(statearr_29831_29856[(2)] = inst_29813);

(statearr_29831_29856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (13))){
var state_29823__$1 = state_29823;
var statearr_29832_29857 = state_29823__$1;
(statearr_29832_29857[(2)] = null);

(statearr_29832_29857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (6))){
var inst_29788 = (state_29823[(7)]);
var inst_29809 = (inst_29788 > (0));
var state_29823__$1 = state_29823;
if(cljs.core.truth_(inst_29809)){
var statearr_29833_29858 = state_29823__$1;
(statearr_29833_29858[(1)] = (12));

} else {
var statearr_29834_29859 = state_29823__$1;
(statearr_29834_29859[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (3))){
var inst_29821 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29823__$1,inst_29821);
} else {
if((state_val_29824 === (12))){
var inst_29787 = (state_29823[(8)]);
var inst_29811 = cljs.core.vec.call(null,inst_29787);
var state_29823__$1 = state_29823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29823__$1,(15),out,inst_29811);
} else {
if((state_val_29824 === (2))){
var state_29823__$1 = state_29823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29823__$1,(4),ch);
} else {
if((state_val_29824 === (11))){
var inst_29803 = (state_29823[(2)]);
var inst_29804 = (new Array(n));
var inst_29787 = inst_29804;
var inst_29788 = (0);
var state_29823__$1 = (function (){var statearr_29835 = state_29823;
(statearr_29835[(7)] = inst_29788);

(statearr_29835[(8)] = inst_29787);

(statearr_29835[(10)] = inst_29803);

return statearr_29835;
})();
var statearr_29836_29860 = state_29823__$1;
(statearr_29836_29860[(2)] = null);

(statearr_29836_29860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (9))){
var inst_29787 = (state_29823[(8)]);
var inst_29801 = cljs.core.vec.call(null,inst_29787);
var state_29823__$1 = state_29823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29823__$1,(11),out,inst_29801);
} else {
if((state_val_29824 === (5))){
var inst_29796 = (state_29823[(11)]);
var inst_29788 = (state_29823[(7)]);
var inst_29791 = (state_29823[(9)]);
var inst_29787 = (state_29823[(8)]);
var inst_29795 = (inst_29787[inst_29788] = inst_29791);
var inst_29796__$1 = (inst_29788 + (1));
var inst_29797 = (inst_29796__$1 < n);
var state_29823__$1 = (function (){var statearr_29837 = state_29823;
(statearr_29837[(11)] = inst_29796__$1);

(statearr_29837[(12)] = inst_29795);

return statearr_29837;
})();
if(cljs.core.truth_(inst_29797)){
var statearr_29838_29861 = state_29823__$1;
(statearr_29838_29861[(1)] = (8));

} else {
var statearr_29839_29862 = state_29823__$1;
(statearr_29839_29862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (14))){
var inst_29816 = (state_29823[(2)]);
var inst_29817 = cljs.core.async.close_BANG_.call(null,out);
var state_29823__$1 = (function (){var statearr_29841 = state_29823;
(statearr_29841[(13)] = inst_29816);

return statearr_29841;
})();
var statearr_29842_29863 = state_29823__$1;
(statearr_29842_29863[(2)] = inst_29817);

(statearr_29842_29863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (10))){
var inst_29807 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
var statearr_29843_29864 = state_29823__$1;
(statearr_29843_29864[(2)] = inst_29807);

(statearr_29843_29864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (8))){
var inst_29796 = (state_29823[(11)]);
var inst_29787 = (state_29823[(8)]);
var tmp29840 = inst_29787;
var inst_29787__$1 = tmp29840;
var inst_29788 = inst_29796;
var state_29823__$1 = (function (){var statearr_29844 = state_29823;
(statearr_29844[(7)] = inst_29788);

(statearr_29844[(8)] = inst_29787__$1);

return statearr_29844;
})();
var statearr_29845_29865 = state_29823__$1;
(statearr_29845_29865[(2)] = null);

(statearr_29845_29865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto___29851,out))
;
return ((function (switch__25626__auto__,c__28035__auto___29851,out){
return (function() {
var cljs$core$async$state_machine__25627__auto__ = null;
var cljs$core$async$state_machine__25627__auto____0 = (function (){
var statearr_29846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29846[(0)] = cljs$core$async$state_machine__25627__auto__);

(statearr_29846[(1)] = (1));

return statearr_29846;
});
var cljs$core$async$state_machine__25627__auto____1 = (function (state_29823){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_29823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e29847){if((e29847 instanceof Object)){
var ex__25630__auto__ = e29847;
var statearr_29848_29866 = state_29823;
(statearr_29848_29866[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29867 = state_29823;
state_29823 = G__29867;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$state_machine__25627__auto__ = function(state_29823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25627__auto____1.call(this,state_29823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25627__auto____0;
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25627__auto____1;
return cljs$core$async$state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___29851,out))
})();
var state__28037__auto__ = (function (){var statearr_29849 = f__28036__auto__.call(null);
(statearr_29849[(6)] = c__28035__auto___29851);

return statearr_29849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___29851,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29869 = arguments.length;
switch (G__29869) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28035__auto___29939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___29939,out){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___29939,out){
return (function (state_29911){
var state_val_29912 = (state_29911[(1)]);
if((state_val_29912 === (7))){
var inst_29907 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29913_29940 = state_29911__$1;
(statearr_29913_29940[(2)] = inst_29907);

(statearr_29913_29940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (1))){
var inst_29870 = [];
var inst_29871 = inst_29870;
var inst_29872 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29911__$1 = (function (){var statearr_29914 = state_29911;
(statearr_29914[(7)] = inst_29871);

(statearr_29914[(8)] = inst_29872);

return statearr_29914;
})();
var statearr_29915_29941 = state_29911__$1;
(statearr_29915_29941[(2)] = null);

(statearr_29915_29941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (4))){
var inst_29875 = (state_29911[(9)]);
var inst_29875__$1 = (state_29911[(2)]);
var inst_29876 = (inst_29875__$1 == null);
var inst_29877 = cljs.core.not.call(null,inst_29876);
var state_29911__$1 = (function (){var statearr_29916 = state_29911;
(statearr_29916[(9)] = inst_29875__$1);

return statearr_29916;
})();
if(inst_29877){
var statearr_29917_29942 = state_29911__$1;
(statearr_29917_29942[(1)] = (5));

} else {
var statearr_29918_29943 = state_29911__$1;
(statearr_29918_29943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (15))){
var inst_29901 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29919_29944 = state_29911__$1;
(statearr_29919_29944[(2)] = inst_29901);

(statearr_29919_29944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (13))){
var state_29911__$1 = state_29911;
var statearr_29920_29945 = state_29911__$1;
(statearr_29920_29945[(2)] = null);

(statearr_29920_29945[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (6))){
var inst_29871 = (state_29911[(7)]);
var inst_29896 = inst_29871.length;
var inst_29897 = (inst_29896 > (0));
var state_29911__$1 = state_29911;
if(cljs.core.truth_(inst_29897)){
var statearr_29921_29946 = state_29911__$1;
(statearr_29921_29946[(1)] = (12));

} else {
var statearr_29922_29947 = state_29911__$1;
(statearr_29922_29947[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (3))){
var inst_29909 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29911__$1,inst_29909);
} else {
if((state_val_29912 === (12))){
var inst_29871 = (state_29911[(7)]);
var inst_29899 = cljs.core.vec.call(null,inst_29871);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29911__$1,(15),out,inst_29899);
} else {
if((state_val_29912 === (2))){
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(4),ch);
} else {
if((state_val_29912 === (11))){
var inst_29875 = (state_29911[(9)]);
var inst_29879 = (state_29911[(10)]);
var inst_29889 = (state_29911[(2)]);
var inst_29890 = [];
var inst_29891 = inst_29890.push(inst_29875);
var inst_29871 = inst_29890;
var inst_29872 = inst_29879;
var state_29911__$1 = (function (){var statearr_29923 = state_29911;
(statearr_29923[(11)] = inst_29891);

(statearr_29923[(7)] = inst_29871);

(statearr_29923[(12)] = inst_29889);

(statearr_29923[(8)] = inst_29872);

return statearr_29923;
})();
var statearr_29924_29948 = state_29911__$1;
(statearr_29924_29948[(2)] = null);

(statearr_29924_29948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (9))){
var inst_29871 = (state_29911[(7)]);
var inst_29887 = cljs.core.vec.call(null,inst_29871);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29911__$1,(11),out,inst_29887);
} else {
if((state_val_29912 === (5))){
var inst_29875 = (state_29911[(9)]);
var inst_29879 = (state_29911[(10)]);
var inst_29872 = (state_29911[(8)]);
var inst_29879__$1 = f.call(null,inst_29875);
var inst_29880 = cljs.core._EQ_.call(null,inst_29879__$1,inst_29872);
var inst_29881 = cljs.core.keyword_identical_QMARK_.call(null,inst_29872,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29882 = ((inst_29880) || (inst_29881));
var state_29911__$1 = (function (){var statearr_29925 = state_29911;
(statearr_29925[(10)] = inst_29879__$1);

return statearr_29925;
})();
if(cljs.core.truth_(inst_29882)){
var statearr_29926_29949 = state_29911__$1;
(statearr_29926_29949[(1)] = (8));

} else {
var statearr_29927_29950 = state_29911__$1;
(statearr_29927_29950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (14))){
var inst_29904 = (state_29911[(2)]);
var inst_29905 = cljs.core.async.close_BANG_.call(null,out);
var state_29911__$1 = (function (){var statearr_29929 = state_29911;
(statearr_29929[(13)] = inst_29904);

return statearr_29929;
})();
var statearr_29930_29951 = state_29911__$1;
(statearr_29930_29951[(2)] = inst_29905);

(statearr_29930_29951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (10))){
var inst_29894 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29931_29952 = state_29911__$1;
(statearr_29931_29952[(2)] = inst_29894);

(statearr_29931_29952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (8))){
var inst_29875 = (state_29911[(9)]);
var inst_29871 = (state_29911[(7)]);
var inst_29879 = (state_29911[(10)]);
var inst_29884 = inst_29871.push(inst_29875);
var tmp29928 = inst_29871;
var inst_29871__$1 = tmp29928;
var inst_29872 = inst_29879;
var state_29911__$1 = (function (){var statearr_29932 = state_29911;
(statearr_29932[(14)] = inst_29884);

(statearr_29932[(7)] = inst_29871__$1);

(statearr_29932[(8)] = inst_29872);

return statearr_29932;
})();
var statearr_29933_29953 = state_29911__$1;
(statearr_29933_29953[(2)] = null);

(statearr_29933_29953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28035__auto___29939,out))
;
return ((function (switch__25626__auto__,c__28035__auto___29939,out){
return (function() {
var cljs$core$async$state_machine__25627__auto__ = null;
var cljs$core$async$state_machine__25627__auto____0 = (function (){
var statearr_29934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29934[(0)] = cljs$core$async$state_machine__25627__auto__);

(statearr_29934[(1)] = (1));

return statearr_29934;
});
var cljs$core$async$state_machine__25627__auto____1 = (function (state_29911){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_29911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e29935){if((e29935 instanceof Object)){
var ex__25630__auto__ = e29935;
var statearr_29936_29954 = state_29911;
(statearr_29936_29954[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29955 = state_29911;
state_29911 = G__29955;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
cljs$core$async$state_machine__25627__auto__ = function(state_29911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25627__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25627__auto____1.call(this,state_29911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25627__auto____0;
cljs$core$async$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25627__auto____1;
return cljs$core$async$state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___29939,out))
})();
var state__28037__auto__ = (function (){var statearr_29937 = f__28036__auto__.call(null);
(statearr_29937[(6)] = c__28035__auto___29939);

return statearr_29937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___29939,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1531487547243
