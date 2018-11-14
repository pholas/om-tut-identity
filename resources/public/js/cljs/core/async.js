// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21755 = [];
var len__17844__auto___21761 = arguments.length;
var i__17845__auto___21762 = (0);
while(true){
if((i__17845__auto___21762 < len__17844__auto___21761)){
args21755.push((arguments[i__17845__auto___21762]));

var G__21763 = (i__17845__auto___21762 + (1));
i__17845__auto___21762 = G__21763;
continue;
} else {
}
break;
}

var G__21757 = args21755.length;
switch (G__21757) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21755.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21758 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21758 = (function (f,blockable,meta21759){
this.f = f;
this.blockable = blockable;
this.meta21759 = meta21759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21760,meta21759__$1){
var self__ = this;
var _21760__$1 = this;
return (new cljs.core.async.t_cljs$core$async21758(self__.f,self__.blockable,meta21759__$1));
});

cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21760){
var self__ = this;
var _21760__$1 = this;
return self__.meta21759;
});

cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21758.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21758.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21759","meta21759",1253994804,null)], null);
});

cljs.core.async.t_cljs$core$async21758.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21758.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21758";

cljs.core.async.t_cljs$core$async21758.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async21758");
});

cljs.core.async.__GT_t_cljs$core$async21758 = (function cljs$core$async$__GT_t_cljs$core$async21758(f__$1,blockable__$1,meta21759){
return (new cljs.core.async.t_cljs$core$async21758(f__$1,blockable__$1,meta21759));
});

}

return (new cljs.core.async.t_cljs$core$async21758(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args21767 = [];
var len__17844__auto___21770 = arguments.length;
var i__17845__auto___21771 = (0);
while(true){
if((i__17845__auto___21771 < len__17844__auto___21770)){
args21767.push((arguments[i__17845__auto___21771]));

var G__21772 = (i__17845__auto___21771 + (1));
i__17845__auto___21771 = G__21772;
continue;
} else {
}
break;
}

var G__21769 = args21767.length;
switch (G__21769) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21767.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
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
var args21774 = [];
var len__17844__auto___21777 = arguments.length;
var i__17845__auto___21778 = (0);
while(true){
if((i__17845__auto___21778 < len__17844__auto___21777)){
args21774.push((arguments[i__17845__auto___21778]));

var G__21779 = (i__17845__auto___21778 + (1));
i__17845__auto___21778 = G__21779;
continue;
} else {
}
break;
}

var G__21776 = args21774.length;
switch (G__21776) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21774.length)].join('')));

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
var args21781 = [];
var len__17844__auto___21784 = arguments.length;
var i__17845__auto___21785 = (0);
while(true){
if((i__17845__auto___21785 < len__17844__auto___21784)){
args21781.push((arguments[i__17845__auto___21785]));

var G__21786 = (i__17845__auto___21785 + (1));
i__17845__auto___21785 = G__21786;
continue;
} else {
}
break;
}

var G__21783 = args21781.length;
switch (G__21783) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21781.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21788 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21788);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21788,ret){
return (function (){
return fn1.call(null,val_21788);
});})(val_21788,ret))
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
var args21789 = [];
var len__17844__auto___21792 = arguments.length;
var i__17845__auto___21793 = (0);
while(true){
if((i__17845__auto___21793 < len__17844__auto___21792)){
args21789.push((arguments[i__17845__auto___21793]));

var G__21794 = (i__17845__auto___21793 + (1));
i__17845__auto___21793 = G__21794;
continue;
} else {
}
break;
}

var G__21791 = args21789.length;
switch (G__21791) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21789.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__17689__auto___21796 = n;
var x_21797 = (0);
while(true){
if((x_21797 < n__17689__auto___21796)){
(a[x_21797] = (0));

var G__21798 = (x_21797 + (1));
x_21797 = G__21798;
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

var G__21799 = (i + (1));
i = G__21799;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21803 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21803 = (function (alt_flag,flag,meta21804){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21804 = meta21804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21805,meta21804__$1){
var self__ = this;
var _21805__$1 = this;
return (new cljs.core.async.t_cljs$core$async21803(self__.alt_flag,self__.flag,meta21804__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21805){
var self__ = this;
var _21805__$1 = this;
return self__.meta21804;
});})(flag))
;

cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21803.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21803.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21804","meta21804",-1611322982,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21803.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21803.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21803";

cljs.core.async.t_cljs$core$async21803.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async21803");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21803 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21803(alt_flag__$1,flag__$1,meta21804){
return (new cljs.core.async.t_cljs$core$async21803(alt_flag__$1,flag__$1,meta21804));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21803(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21809 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21809 = (function (alt_handler,flag,cb,meta21810){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21810 = meta21810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21811,meta21810__$1){
var self__ = this;
var _21811__$1 = this;
return (new cljs.core.async.t_cljs$core$async21809(self__.alt_handler,self__.flag,self__.cb,meta21810__$1));
});

cljs.core.async.t_cljs$core$async21809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21811){
var self__ = this;
var _21811__$1 = this;
return self__.meta21810;
});

cljs.core.async.t_cljs$core$async21809.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21809.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21810","meta21810",1245054034,null)], null);
});

cljs.core.async.t_cljs$core$async21809.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21809";

cljs.core.async.t_cljs$core$async21809.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async21809");
});

cljs.core.async.__GT_t_cljs$core$async21809 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21809(alt_handler__$1,flag__$1,cb__$1,meta21810){
return (new cljs.core.async.t_cljs$core$async21809(alt_handler__$1,flag__$1,cb__$1,meta21810));
});

}

return (new cljs.core.async.t_cljs$core$async21809(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21812_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21812_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21813_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21813_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16785__auto__ = wport;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21814 = (i + (1));
i = G__21814;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16785__auto__ = ret;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16773__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16773__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__17851__auto__ = [];
var len__17844__auto___21820 = arguments.length;
var i__17845__auto___21821 = (0);
while(true){
if((i__17845__auto___21821 < len__17844__auto___21820)){
args__17851__auto__.push((arguments[i__17845__auto___21821]));

var G__21822 = (i__17845__auto___21821 + (1));
i__17845__auto___21821 = G__21822;
continue;
} else {
}
break;
}

var argseq__17852__auto__ = ((((1) < args__17851__auto__.length))?(new cljs.core.IndexedSeq(args__17851__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17852__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21817){
var map__21818 = p__21817;
var map__21818__$1 = ((((!((map__21818 == null)))?((((map__21818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21818):map__21818);
var opts = map__21818__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21815){
var G__21816 = cljs.core.first.call(null,seq21815);
var seq21815__$1 = cljs.core.next.call(null,seq21815);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21816,seq21815__$1);
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
var args21823 = [];
var len__17844__auto___21873 = arguments.length;
var i__17845__auto___21874 = (0);
while(true){
if((i__17845__auto___21874 < len__17844__auto___21873)){
args21823.push((arguments[i__17845__auto___21874]));

var G__21875 = (i__17845__auto___21874 + (1));
i__17845__auto___21874 = G__21875;
continue;
} else {
}
break;
}

var G__21825 = args21823.length;
switch (G__21825) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21823.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21710__auto___21877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___21877){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___21877){
return (function (state_21849){
var state_val_21850 = (state_21849[(1)]);
if((state_val_21850 === (7))){
var inst_21845 = (state_21849[(2)]);
var state_21849__$1 = state_21849;
var statearr_21851_21878 = state_21849__$1;
(statearr_21851_21878[(2)] = inst_21845);

(statearr_21851_21878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21850 === (1))){
var state_21849__$1 = state_21849;
var statearr_21852_21879 = state_21849__$1;
(statearr_21852_21879[(2)] = null);

(statearr_21852_21879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21850 === (4))){
var inst_21828 = (state_21849[(7)]);
var inst_21828__$1 = (state_21849[(2)]);
var inst_21829 = (inst_21828__$1 == null);
var state_21849__$1 = (function (){var statearr_21853 = state_21849;
(statearr_21853[(7)] = inst_21828__$1);

return statearr_21853;
})();
if(cljs.core.truth_(inst_21829)){
var statearr_21854_21880 = state_21849__$1;
(statearr_21854_21880[(1)] = (5));

} else {
var statearr_21855_21881 = state_21849__$1;
(statearr_21855_21881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21850 === (13))){
var state_21849__$1 = state_21849;
var statearr_21856_21882 = state_21849__$1;
(statearr_21856_21882[(2)] = null);

(statearr_21856_21882[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21850 === (6))){
var inst_21828 = (state_21849[(7)]);
var state_21849__$1 = state_21849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21849__$1,(11),to,inst_21828);
} else {
if((state_val_21850 === (3))){
var inst_21847 = (state_21849[(2)]);
var state_21849__$1 = state_21849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21849__$1,inst_21847);
} else {
if((state_val_21850 === (12))){
var state_21849__$1 = state_21849;
var statearr_21857_21883 = state_21849__$1;
(statearr_21857_21883[(2)] = null);

(statearr_21857_21883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21850 === (2))){
var state_21849__$1 = state_21849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21849__$1,(4),from);
} else {
if((state_val_21850 === (11))){
var inst_21838 = (state_21849[(2)]);
var state_21849__$1 = state_21849;
if(cljs.core.truth_(inst_21838)){
var statearr_21858_21884 = state_21849__$1;
(statearr_21858_21884[(1)] = (12));

} else {
var statearr_21859_21885 = state_21849__$1;
(statearr_21859_21885[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21850 === (9))){
var state_21849__$1 = state_21849;
var statearr_21860_21886 = state_21849__$1;
(statearr_21860_21886[(2)] = null);

(statearr_21860_21886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21850 === (5))){
var state_21849__$1 = state_21849;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21861_21887 = state_21849__$1;
(statearr_21861_21887[(1)] = (8));

} else {
var statearr_21862_21888 = state_21849__$1;
(statearr_21862_21888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21850 === (14))){
var inst_21843 = (state_21849[(2)]);
var state_21849__$1 = state_21849;
var statearr_21863_21889 = state_21849__$1;
(statearr_21863_21889[(2)] = inst_21843);

(statearr_21863_21889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21850 === (10))){
var inst_21835 = (state_21849[(2)]);
var state_21849__$1 = state_21849;
var statearr_21864_21890 = state_21849__$1;
(statearr_21864_21890[(2)] = inst_21835);

(statearr_21864_21890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21850 === (8))){
var inst_21832 = cljs.core.async.close_BANG_.call(null,to);
var state_21849__$1 = state_21849;
var statearr_21865_21891 = state_21849__$1;
(statearr_21865_21891[(2)] = inst_21832);

(statearr_21865_21891[(1)] = (10));


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
});})(c__21710__auto___21877))
;
return ((function (switch__21598__auto__,c__21710__auto___21877){
return (function() {
var cljs$core$async$state_machine__21599__auto__ = null;
var cljs$core$async$state_machine__21599__auto____0 = (function (){
var statearr_21869 = [null,null,null,null,null,null,null,null];
(statearr_21869[(0)] = cljs$core$async$state_machine__21599__auto__);

(statearr_21869[(1)] = (1));

return statearr_21869;
});
var cljs$core$async$state_machine__21599__auto____1 = (function (state_21849){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_21849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e21870){if((e21870 instanceof Object)){
var ex__21602__auto__ = e21870;
var statearr_21871_21892 = state_21849;
(statearr_21871_21892[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21870;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21893 = state_21849;
state_21849 = G__21893;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$state_machine__21599__auto__ = function(state_21849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21599__auto____1.call(this,state_21849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21599__auto____0;
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21599__auto____1;
return cljs$core$async$state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___21877))
})();
var state__21712__auto__ = (function (){var statearr_21872 = f__21711__auto__.call(null);
(statearr_21872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___21877);

return statearr_21872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___21877))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22077){
var vec__22078 = p__22077;
var v = cljs.core.nth.call(null,vec__22078,(0),null);
var p = cljs.core.nth.call(null,vec__22078,(1),null);
var job = vec__22078;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21710__auto___22260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___22260,res,vec__22078,v,p,job,jobs,results){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___22260,res,vec__22078,v,p,job,jobs,results){
return (function (state_22083){
var state_val_22084 = (state_22083[(1)]);
if((state_val_22084 === (1))){
var state_22083__$1 = state_22083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22083__$1,(2),res,v);
} else {
if((state_val_22084 === (2))){
var inst_22080 = (state_22083[(2)]);
var inst_22081 = cljs.core.async.close_BANG_.call(null,res);
var state_22083__$1 = (function (){var statearr_22085 = state_22083;
(statearr_22085[(7)] = inst_22080);

return statearr_22085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22083__$1,inst_22081);
} else {
return null;
}
}
});})(c__21710__auto___22260,res,vec__22078,v,p,job,jobs,results))
;
return ((function (switch__21598__auto__,c__21710__auto___22260,res,vec__22078,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____0 = (function (){
var statearr_22089 = [null,null,null,null,null,null,null,null];
(statearr_22089[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__);

(statearr_22089[(1)] = (1));

return statearr_22089;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____1 = (function (state_22083){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_22083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e22090){if((e22090 instanceof Object)){
var ex__21602__auto__ = e22090;
var statearr_22091_22261 = state_22083;
(statearr_22091_22261[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22262 = state_22083;
state_22083 = G__22262;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__ = function(state_22083){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____1.call(this,state_22083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___22260,res,vec__22078,v,p,job,jobs,results))
})();
var state__21712__auto__ = (function (){var statearr_22092 = f__21711__auto__.call(null);
(statearr_22092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___22260);

return statearr_22092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___22260,res,vec__22078,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22093){
var vec__22094 = p__22093;
var v = cljs.core.nth.call(null,vec__22094,(0),null);
var p = cljs.core.nth.call(null,vec__22094,(1),null);
var job = vec__22094;
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
var n__17689__auto___22263 = n;
var __22264 = (0);
while(true){
if((__22264 < n__17689__auto___22263)){
var G__22095_22265 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22095_22265) {
case "compute":
var c__21710__auto___22267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22264,c__21710__auto___22267,G__22095_22265,n__17689__auto___22263,jobs,results,process,async){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (__22264,c__21710__auto___22267,G__22095_22265,n__17689__auto___22263,jobs,results,process,async){
return (function (state_22108){
var state_val_22109 = (state_22108[(1)]);
if((state_val_22109 === (1))){
var state_22108__$1 = state_22108;
var statearr_22110_22268 = state_22108__$1;
(statearr_22110_22268[(2)] = null);

(statearr_22110_22268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (2))){
var state_22108__$1 = state_22108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22108__$1,(4),jobs);
} else {
if((state_val_22109 === (3))){
var inst_22106 = (state_22108[(2)]);
var state_22108__$1 = state_22108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22108__$1,inst_22106);
} else {
if((state_val_22109 === (4))){
var inst_22098 = (state_22108[(2)]);
var inst_22099 = process.call(null,inst_22098);
var state_22108__$1 = state_22108;
if(cljs.core.truth_(inst_22099)){
var statearr_22111_22269 = state_22108__$1;
(statearr_22111_22269[(1)] = (5));

} else {
var statearr_22112_22270 = state_22108__$1;
(statearr_22112_22270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (5))){
var state_22108__$1 = state_22108;
var statearr_22113_22271 = state_22108__$1;
(statearr_22113_22271[(2)] = null);

(statearr_22113_22271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (6))){
var state_22108__$1 = state_22108;
var statearr_22114_22272 = state_22108__$1;
(statearr_22114_22272[(2)] = null);

(statearr_22114_22272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (7))){
var inst_22104 = (state_22108[(2)]);
var state_22108__$1 = state_22108;
var statearr_22115_22273 = state_22108__$1;
(statearr_22115_22273[(2)] = inst_22104);

(statearr_22115_22273[(1)] = (3));


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
});})(__22264,c__21710__auto___22267,G__22095_22265,n__17689__auto___22263,jobs,results,process,async))
;
return ((function (__22264,switch__21598__auto__,c__21710__auto___22267,G__22095_22265,n__17689__auto___22263,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____0 = (function (){
var statearr_22119 = [null,null,null,null,null,null,null];
(statearr_22119[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__);

(statearr_22119[(1)] = (1));

return statearr_22119;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____1 = (function (state_22108){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_22108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e22120){if((e22120 instanceof Object)){
var ex__21602__auto__ = e22120;
var statearr_22121_22274 = state_22108;
(statearr_22121_22274[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22275 = state_22108;
state_22108 = G__22275;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__ = function(state_22108){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____1.call(this,state_22108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__;
})()
;})(__22264,switch__21598__auto__,c__21710__auto___22267,G__22095_22265,n__17689__auto___22263,jobs,results,process,async))
})();
var state__21712__auto__ = (function (){var statearr_22122 = f__21711__auto__.call(null);
(statearr_22122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___22267);

return statearr_22122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(__22264,c__21710__auto___22267,G__22095_22265,n__17689__auto___22263,jobs,results,process,async))
);


break;
case "async":
var c__21710__auto___22276 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22264,c__21710__auto___22276,G__22095_22265,n__17689__auto___22263,jobs,results,process,async){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (__22264,c__21710__auto___22276,G__22095_22265,n__17689__auto___22263,jobs,results,process,async){
return (function (state_22135){
var state_val_22136 = (state_22135[(1)]);
if((state_val_22136 === (1))){
var state_22135__$1 = state_22135;
var statearr_22137_22277 = state_22135__$1;
(statearr_22137_22277[(2)] = null);

(statearr_22137_22277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22136 === (2))){
var state_22135__$1 = state_22135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22135__$1,(4),jobs);
} else {
if((state_val_22136 === (3))){
var inst_22133 = (state_22135[(2)]);
var state_22135__$1 = state_22135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22135__$1,inst_22133);
} else {
if((state_val_22136 === (4))){
var inst_22125 = (state_22135[(2)]);
var inst_22126 = async.call(null,inst_22125);
var state_22135__$1 = state_22135;
if(cljs.core.truth_(inst_22126)){
var statearr_22138_22278 = state_22135__$1;
(statearr_22138_22278[(1)] = (5));

} else {
var statearr_22139_22279 = state_22135__$1;
(statearr_22139_22279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22136 === (5))){
var state_22135__$1 = state_22135;
var statearr_22140_22280 = state_22135__$1;
(statearr_22140_22280[(2)] = null);

(statearr_22140_22280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22136 === (6))){
var state_22135__$1 = state_22135;
var statearr_22141_22281 = state_22135__$1;
(statearr_22141_22281[(2)] = null);

(statearr_22141_22281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22136 === (7))){
var inst_22131 = (state_22135[(2)]);
var state_22135__$1 = state_22135;
var statearr_22142_22282 = state_22135__$1;
(statearr_22142_22282[(2)] = inst_22131);

(statearr_22142_22282[(1)] = (3));


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
});})(__22264,c__21710__auto___22276,G__22095_22265,n__17689__auto___22263,jobs,results,process,async))
;
return ((function (__22264,switch__21598__auto__,c__21710__auto___22276,G__22095_22265,n__17689__auto___22263,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____0 = (function (){
var statearr_22146 = [null,null,null,null,null,null,null];
(statearr_22146[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__);

(statearr_22146[(1)] = (1));

return statearr_22146;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____1 = (function (state_22135){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_22135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e22147){if((e22147 instanceof Object)){
var ex__21602__auto__ = e22147;
var statearr_22148_22283 = state_22135;
(statearr_22148_22283[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22284 = state_22135;
state_22135 = G__22284;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__ = function(state_22135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____1.call(this,state_22135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__;
})()
;})(__22264,switch__21598__auto__,c__21710__auto___22276,G__22095_22265,n__17689__auto___22263,jobs,results,process,async))
})();
var state__21712__auto__ = (function (){var statearr_22149 = f__21711__auto__.call(null);
(statearr_22149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___22276);

return statearr_22149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(__22264,c__21710__auto___22276,G__22095_22265,n__17689__auto___22263,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22285 = (__22264 + (1));
__22264 = G__22285;
continue;
} else {
}
break;
}

var c__21710__auto___22286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___22286,jobs,results,process,async){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___22286,jobs,results,process,async){
return (function (state_22171){
var state_val_22172 = (state_22171[(1)]);
if((state_val_22172 === (1))){
var state_22171__$1 = state_22171;
var statearr_22173_22287 = state_22171__$1;
(statearr_22173_22287[(2)] = null);

(statearr_22173_22287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22172 === (2))){
var state_22171__$1 = state_22171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22171__$1,(4),from);
} else {
if((state_val_22172 === (3))){
var inst_22169 = (state_22171[(2)]);
var state_22171__$1 = state_22171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22171__$1,inst_22169);
} else {
if((state_val_22172 === (4))){
var inst_22152 = (state_22171[(7)]);
var inst_22152__$1 = (state_22171[(2)]);
var inst_22153 = (inst_22152__$1 == null);
var state_22171__$1 = (function (){var statearr_22174 = state_22171;
(statearr_22174[(7)] = inst_22152__$1);

return statearr_22174;
})();
if(cljs.core.truth_(inst_22153)){
var statearr_22175_22288 = state_22171__$1;
(statearr_22175_22288[(1)] = (5));

} else {
var statearr_22176_22289 = state_22171__$1;
(statearr_22176_22289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22172 === (5))){
var inst_22155 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22171__$1 = state_22171;
var statearr_22177_22290 = state_22171__$1;
(statearr_22177_22290[(2)] = inst_22155);

(statearr_22177_22290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22172 === (6))){
var inst_22152 = (state_22171[(7)]);
var inst_22157 = (state_22171[(8)]);
var inst_22157__$1 = cljs.core.async.chan.call(null,(1));
var inst_22158 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22159 = [inst_22152,inst_22157__$1];
var inst_22160 = (new cljs.core.PersistentVector(null,2,(5),inst_22158,inst_22159,null));
var state_22171__$1 = (function (){var statearr_22178 = state_22171;
(statearr_22178[(8)] = inst_22157__$1);

return statearr_22178;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22171__$1,(8),jobs,inst_22160);
} else {
if((state_val_22172 === (7))){
var inst_22167 = (state_22171[(2)]);
var state_22171__$1 = state_22171;
var statearr_22179_22291 = state_22171__$1;
(statearr_22179_22291[(2)] = inst_22167);

(statearr_22179_22291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22172 === (8))){
var inst_22157 = (state_22171[(8)]);
var inst_22162 = (state_22171[(2)]);
var state_22171__$1 = (function (){var statearr_22180 = state_22171;
(statearr_22180[(9)] = inst_22162);

return statearr_22180;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22171__$1,(9),results,inst_22157);
} else {
if((state_val_22172 === (9))){
var inst_22164 = (state_22171[(2)]);
var state_22171__$1 = (function (){var statearr_22181 = state_22171;
(statearr_22181[(10)] = inst_22164);

return statearr_22181;
})();
var statearr_22182_22292 = state_22171__$1;
(statearr_22182_22292[(2)] = null);

(statearr_22182_22292[(1)] = (2));


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
});})(c__21710__auto___22286,jobs,results,process,async))
;
return ((function (switch__21598__auto__,c__21710__auto___22286,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____0 = (function (){
var statearr_22186 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22186[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__);

(statearr_22186[(1)] = (1));

return statearr_22186;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____1 = (function (state_22171){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_22171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e22187){if((e22187 instanceof Object)){
var ex__21602__auto__ = e22187;
var statearr_22188_22293 = state_22171;
(statearr_22188_22293[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22294 = state_22171;
state_22171 = G__22294;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__ = function(state_22171){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____1.call(this,state_22171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___22286,jobs,results,process,async))
})();
var state__21712__auto__ = (function (){var statearr_22189 = f__21711__auto__.call(null);
(statearr_22189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___22286);

return statearr_22189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___22286,jobs,results,process,async))
);


var c__21710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto__,jobs,results,process,async){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto__,jobs,results,process,async){
return (function (state_22227){
var state_val_22228 = (state_22227[(1)]);
if((state_val_22228 === (7))){
var inst_22223 = (state_22227[(2)]);
var state_22227__$1 = state_22227;
var statearr_22229_22295 = state_22227__$1;
(statearr_22229_22295[(2)] = inst_22223);

(statearr_22229_22295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (20))){
var state_22227__$1 = state_22227;
var statearr_22230_22296 = state_22227__$1;
(statearr_22230_22296[(2)] = null);

(statearr_22230_22296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (1))){
var state_22227__$1 = state_22227;
var statearr_22231_22297 = state_22227__$1;
(statearr_22231_22297[(2)] = null);

(statearr_22231_22297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (4))){
var inst_22192 = (state_22227[(7)]);
var inst_22192__$1 = (state_22227[(2)]);
var inst_22193 = (inst_22192__$1 == null);
var state_22227__$1 = (function (){var statearr_22232 = state_22227;
(statearr_22232[(7)] = inst_22192__$1);

return statearr_22232;
})();
if(cljs.core.truth_(inst_22193)){
var statearr_22233_22298 = state_22227__$1;
(statearr_22233_22298[(1)] = (5));

} else {
var statearr_22234_22299 = state_22227__$1;
(statearr_22234_22299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (15))){
var inst_22205 = (state_22227[(8)]);
var state_22227__$1 = state_22227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22227__$1,(18),to,inst_22205);
} else {
if((state_val_22228 === (21))){
var inst_22218 = (state_22227[(2)]);
var state_22227__$1 = state_22227;
var statearr_22235_22300 = state_22227__$1;
(statearr_22235_22300[(2)] = inst_22218);

(statearr_22235_22300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (13))){
var inst_22220 = (state_22227[(2)]);
var state_22227__$1 = (function (){var statearr_22236 = state_22227;
(statearr_22236[(9)] = inst_22220);

return statearr_22236;
})();
var statearr_22237_22301 = state_22227__$1;
(statearr_22237_22301[(2)] = null);

(statearr_22237_22301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (6))){
var inst_22192 = (state_22227[(7)]);
var state_22227__$1 = state_22227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22227__$1,(11),inst_22192);
} else {
if((state_val_22228 === (17))){
var inst_22213 = (state_22227[(2)]);
var state_22227__$1 = state_22227;
if(cljs.core.truth_(inst_22213)){
var statearr_22238_22302 = state_22227__$1;
(statearr_22238_22302[(1)] = (19));

} else {
var statearr_22239_22303 = state_22227__$1;
(statearr_22239_22303[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (3))){
var inst_22225 = (state_22227[(2)]);
var state_22227__$1 = state_22227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22227__$1,inst_22225);
} else {
if((state_val_22228 === (12))){
var inst_22202 = (state_22227[(10)]);
var state_22227__$1 = state_22227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22227__$1,(14),inst_22202);
} else {
if((state_val_22228 === (2))){
var state_22227__$1 = state_22227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22227__$1,(4),results);
} else {
if((state_val_22228 === (19))){
var state_22227__$1 = state_22227;
var statearr_22240_22304 = state_22227__$1;
(statearr_22240_22304[(2)] = null);

(statearr_22240_22304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (11))){
var inst_22202 = (state_22227[(2)]);
var state_22227__$1 = (function (){var statearr_22241 = state_22227;
(statearr_22241[(10)] = inst_22202);

return statearr_22241;
})();
var statearr_22242_22305 = state_22227__$1;
(statearr_22242_22305[(2)] = null);

(statearr_22242_22305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (9))){
var state_22227__$1 = state_22227;
var statearr_22243_22306 = state_22227__$1;
(statearr_22243_22306[(2)] = null);

(statearr_22243_22306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (5))){
var state_22227__$1 = state_22227;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22244_22307 = state_22227__$1;
(statearr_22244_22307[(1)] = (8));

} else {
var statearr_22245_22308 = state_22227__$1;
(statearr_22245_22308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (14))){
var inst_22207 = (state_22227[(11)]);
var inst_22205 = (state_22227[(8)]);
var inst_22205__$1 = (state_22227[(2)]);
var inst_22206 = (inst_22205__$1 == null);
var inst_22207__$1 = cljs.core.not.call(null,inst_22206);
var state_22227__$1 = (function (){var statearr_22246 = state_22227;
(statearr_22246[(11)] = inst_22207__$1);

(statearr_22246[(8)] = inst_22205__$1);

return statearr_22246;
})();
if(inst_22207__$1){
var statearr_22247_22309 = state_22227__$1;
(statearr_22247_22309[(1)] = (15));

} else {
var statearr_22248_22310 = state_22227__$1;
(statearr_22248_22310[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (16))){
var inst_22207 = (state_22227[(11)]);
var state_22227__$1 = state_22227;
var statearr_22249_22311 = state_22227__$1;
(statearr_22249_22311[(2)] = inst_22207);

(statearr_22249_22311[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (10))){
var inst_22199 = (state_22227[(2)]);
var state_22227__$1 = state_22227;
var statearr_22250_22312 = state_22227__$1;
(statearr_22250_22312[(2)] = inst_22199);

(statearr_22250_22312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (18))){
var inst_22210 = (state_22227[(2)]);
var state_22227__$1 = state_22227;
var statearr_22251_22313 = state_22227__$1;
(statearr_22251_22313[(2)] = inst_22210);

(statearr_22251_22313[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22228 === (8))){
var inst_22196 = cljs.core.async.close_BANG_.call(null,to);
var state_22227__$1 = state_22227;
var statearr_22252_22314 = state_22227__$1;
(statearr_22252_22314[(2)] = inst_22196);

(statearr_22252_22314[(1)] = (10));


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
});})(c__21710__auto__,jobs,results,process,async))
;
return ((function (switch__21598__auto__,c__21710__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____0 = (function (){
var statearr_22256 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22256[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__);

(statearr_22256[(1)] = (1));

return statearr_22256;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____1 = (function (state_22227){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_22227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e22257){if((e22257 instanceof Object)){
var ex__21602__auto__ = e22257;
var statearr_22258_22315 = state_22227;
(statearr_22258_22315[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22316 = state_22227;
state_22227 = G__22316;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__ = function(state_22227){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____1.call(this,state_22227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21599__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto__,jobs,results,process,async))
})();
var state__21712__auto__ = (function (){var statearr_22259 = f__21711__auto__.call(null);
(statearr_22259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto__);

return statearr_22259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto__,jobs,results,process,async))
);

return c__21710__auto__;
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
var args22317 = [];
var len__17844__auto___22320 = arguments.length;
var i__17845__auto___22321 = (0);
while(true){
if((i__17845__auto___22321 < len__17844__auto___22320)){
args22317.push((arguments[i__17845__auto___22321]));

var G__22322 = (i__17845__auto___22321 + (1));
i__17845__auto___22321 = G__22322;
continue;
} else {
}
break;
}

var G__22319 = args22317.length;
switch (G__22319) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22317.length)].join('')));

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
var args22324 = [];
var len__17844__auto___22327 = arguments.length;
var i__17845__auto___22328 = (0);
while(true){
if((i__17845__auto___22328 < len__17844__auto___22327)){
args22324.push((arguments[i__17845__auto___22328]));

var G__22329 = (i__17845__auto___22328 + (1));
i__17845__auto___22328 = G__22329;
continue;
} else {
}
break;
}

var G__22326 = args22324.length;
switch (G__22326) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22324.length)].join('')));

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
var args22331 = [];
var len__17844__auto___22384 = arguments.length;
var i__17845__auto___22385 = (0);
while(true){
if((i__17845__auto___22385 < len__17844__auto___22384)){
args22331.push((arguments[i__17845__auto___22385]));

var G__22386 = (i__17845__auto___22385 + (1));
i__17845__auto___22385 = G__22386;
continue;
} else {
}
break;
}

var G__22333 = args22331.length;
switch (G__22333) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22331.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21710__auto___22388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___22388,tc,fc){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___22388,tc,fc){
return (function (state_22359){
var state_val_22360 = (state_22359[(1)]);
if((state_val_22360 === (7))){
var inst_22355 = (state_22359[(2)]);
var state_22359__$1 = state_22359;
var statearr_22361_22389 = state_22359__$1;
(statearr_22361_22389[(2)] = inst_22355);

(statearr_22361_22389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22360 === (1))){
var state_22359__$1 = state_22359;
var statearr_22362_22390 = state_22359__$1;
(statearr_22362_22390[(2)] = null);

(statearr_22362_22390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22360 === (4))){
var inst_22336 = (state_22359[(7)]);
var inst_22336__$1 = (state_22359[(2)]);
var inst_22337 = (inst_22336__$1 == null);
var state_22359__$1 = (function (){var statearr_22363 = state_22359;
(statearr_22363[(7)] = inst_22336__$1);

return statearr_22363;
})();
if(cljs.core.truth_(inst_22337)){
var statearr_22364_22391 = state_22359__$1;
(statearr_22364_22391[(1)] = (5));

} else {
var statearr_22365_22392 = state_22359__$1;
(statearr_22365_22392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22360 === (13))){
var state_22359__$1 = state_22359;
var statearr_22366_22393 = state_22359__$1;
(statearr_22366_22393[(2)] = null);

(statearr_22366_22393[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22360 === (6))){
var inst_22336 = (state_22359[(7)]);
var inst_22342 = p.call(null,inst_22336);
var state_22359__$1 = state_22359;
if(cljs.core.truth_(inst_22342)){
var statearr_22367_22394 = state_22359__$1;
(statearr_22367_22394[(1)] = (9));

} else {
var statearr_22368_22395 = state_22359__$1;
(statearr_22368_22395[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22360 === (3))){
var inst_22357 = (state_22359[(2)]);
var state_22359__$1 = state_22359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22359__$1,inst_22357);
} else {
if((state_val_22360 === (12))){
var state_22359__$1 = state_22359;
var statearr_22369_22396 = state_22359__$1;
(statearr_22369_22396[(2)] = null);

(statearr_22369_22396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22360 === (2))){
var state_22359__$1 = state_22359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22359__$1,(4),ch);
} else {
if((state_val_22360 === (11))){
var inst_22336 = (state_22359[(7)]);
var inst_22346 = (state_22359[(2)]);
var state_22359__$1 = state_22359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22359__$1,(8),inst_22346,inst_22336);
} else {
if((state_val_22360 === (9))){
var state_22359__$1 = state_22359;
var statearr_22370_22397 = state_22359__$1;
(statearr_22370_22397[(2)] = tc);

(statearr_22370_22397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22360 === (5))){
var inst_22339 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22340 = cljs.core.async.close_BANG_.call(null,fc);
var state_22359__$1 = (function (){var statearr_22371 = state_22359;
(statearr_22371[(8)] = inst_22339);

return statearr_22371;
})();
var statearr_22372_22398 = state_22359__$1;
(statearr_22372_22398[(2)] = inst_22340);

(statearr_22372_22398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22360 === (14))){
var inst_22353 = (state_22359[(2)]);
var state_22359__$1 = state_22359;
var statearr_22373_22399 = state_22359__$1;
(statearr_22373_22399[(2)] = inst_22353);

(statearr_22373_22399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22360 === (10))){
var state_22359__$1 = state_22359;
var statearr_22374_22400 = state_22359__$1;
(statearr_22374_22400[(2)] = fc);

(statearr_22374_22400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22360 === (8))){
var inst_22348 = (state_22359[(2)]);
var state_22359__$1 = state_22359;
if(cljs.core.truth_(inst_22348)){
var statearr_22375_22401 = state_22359__$1;
(statearr_22375_22401[(1)] = (12));

} else {
var statearr_22376_22402 = state_22359__$1;
(statearr_22376_22402[(1)] = (13));

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
});})(c__21710__auto___22388,tc,fc))
;
return ((function (switch__21598__auto__,c__21710__auto___22388,tc,fc){
return (function() {
var cljs$core$async$state_machine__21599__auto__ = null;
var cljs$core$async$state_machine__21599__auto____0 = (function (){
var statearr_22380 = [null,null,null,null,null,null,null,null,null];
(statearr_22380[(0)] = cljs$core$async$state_machine__21599__auto__);

(statearr_22380[(1)] = (1));

return statearr_22380;
});
var cljs$core$async$state_machine__21599__auto____1 = (function (state_22359){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_22359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e22381){if((e22381 instanceof Object)){
var ex__21602__auto__ = e22381;
var statearr_22382_22403 = state_22359;
(statearr_22382_22403[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22404 = state_22359;
state_22359 = G__22404;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$state_machine__21599__auto__ = function(state_22359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21599__auto____1.call(this,state_22359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21599__auto____0;
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21599__auto____1;
return cljs$core$async$state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___22388,tc,fc))
})();
var state__21712__auto__ = (function (){var statearr_22383 = f__21711__auto__.call(null);
(statearr_22383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___22388);

return statearr_22383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___22388,tc,fc))
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
var c__21710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto__){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto__){
return (function (state_22468){
var state_val_22469 = (state_22468[(1)]);
if((state_val_22469 === (7))){
var inst_22464 = (state_22468[(2)]);
var state_22468__$1 = state_22468;
var statearr_22470_22491 = state_22468__$1;
(statearr_22470_22491[(2)] = inst_22464);

(statearr_22470_22491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (1))){
var inst_22448 = init;
var state_22468__$1 = (function (){var statearr_22471 = state_22468;
(statearr_22471[(7)] = inst_22448);

return statearr_22471;
})();
var statearr_22472_22492 = state_22468__$1;
(statearr_22472_22492[(2)] = null);

(statearr_22472_22492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (4))){
var inst_22451 = (state_22468[(8)]);
var inst_22451__$1 = (state_22468[(2)]);
var inst_22452 = (inst_22451__$1 == null);
var state_22468__$1 = (function (){var statearr_22473 = state_22468;
(statearr_22473[(8)] = inst_22451__$1);

return statearr_22473;
})();
if(cljs.core.truth_(inst_22452)){
var statearr_22474_22493 = state_22468__$1;
(statearr_22474_22493[(1)] = (5));

} else {
var statearr_22475_22494 = state_22468__$1;
(statearr_22475_22494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (6))){
var inst_22448 = (state_22468[(7)]);
var inst_22455 = (state_22468[(9)]);
var inst_22451 = (state_22468[(8)]);
var inst_22455__$1 = f.call(null,inst_22448,inst_22451);
var inst_22456 = cljs.core.reduced_QMARK_.call(null,inst_22455__$1);
var state_22468__$1 = (function (){var statearr_22476 = state_22468;
(statearr_22476[(9)] = inst_22455__$1);

return statearr_22476;
})();
if(inst_22456){
var statearr_22477_22495 = state_22468__$1;
(statearr_22477_22495[(1)] = (8));

} else {
var statearr_22478_22496 = state_22468__$1;
(statearr_22478_22496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (3))){
var inst_22466 = (state_22468[(2)]);
var state_22468__$1 = state_22468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22468__$1,inst_22466);
} else {
if((state_val_22469 === (2))){
var state_22468__$1 = state_22468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22468__$1,(4),ch);
} else {
if((state_val_22469 === (9))){
var inst_22455 = (state_22468[(9)]);
var inst_22448 = inst_22455;
var state_22468__$1 = (function (){var statearr_22479 = state_22468;
(statearr_22479[(7)] = inst_22448);

return statearr_22479;
})();
var statearr_22480_22497 = state_22468__$1;
(statearr_22480_22497[(2)] = null);

(statearr_22480_22497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (5))){
var inst_22448 = (state_22468[(7)]);
var state_22468__$1 = state_22468;
var statearr_22481_22498 = state_22468__$1;
(statearr_22481_22498[(2)] = inst_22448);

(statearr_22481_22498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (10))){
var inst_22462 = (state_22468[(2)]);
var state_22468__$1 = state_22468;
var statearr_22482_22499 = state_22468__$1;
(statearr_22482_22499[(2)] = inst_22462);

(statearr_22482_22499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22469 === (8))){
var inst_22455 = (state_22468[(9)]);
var inst_22458 = cljs.core.deref.call(null,inst_22455);
var state_22468__$1 = state_22468;
var statearr_22483_22500 = state_22468__$1;
(statearr_22483_22500[(2)] = inst_22458);

(statearr_22483_22500[(1)] = (10));


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
});})(c__21710__auto__))
;
return ((function (switch__21598__auto__,c__21710__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21599__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21599__auto____0 = (function (){
var statearr_22487 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22487[(0)] = cljs$core$async$reduce_$_state_machine__21599__auto__);

(statearr_22487[(1)] = (1));

return statearr_22487;
});
var cljs$core$async$reduce_$_state_machine__21599__auto____1 = (function (state_22468){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_22468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e22488){if((e22488 instanceof Object)){
var ex__21602__auto__ = e22488;
var statearr_22489_22501 = state_22468;
(statearr_22489_22501[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22502 = state_22468;
state_22468 = G__22502;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21599__auto__ = function(state_22468){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21599__auto____1.call(this,state_22468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21599__auto____0;
cljs$core$async$reduce_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21599__auto____1;
return cljs$core$async$reduce_$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto__))
})();
var state__21712__auto__ = (function (){var statearr_22490 = f__21711__auto__.call(null);
(statearr_22490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto__);

return statearr_22490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto__))
);

return c__21710__auto__;
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
var args22503 = [];
var len__17844__auto___22555 = arguments.length;
var i__17845__auto___22556 = (0);
while(true){
if((i__17845__auto___22556 < len__17844__auto___22555)){
args22503.push((arguments[i__17845__auto___22556]));

var G__22557 = (i__17845__auto___22556 + (1));
i__17845__auto___22556 = G__22557;
continue;
} else {
}
break;
}

var G__22505 = args22503.length;
switch (G__22505) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22503.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto__){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto__){
return (function (state_22530){
var state_val_22531 = (state_22530[(1)]);
if((state_val_22531 === (7))){
var inst_22512 = (state_22530[(2)]);
var state_22530__$1 = state_22530;
var statearr_22532_22559 = state_22530__$1;
(statearr_22532_22559[(2)] = inst_22512);

(statearr_22532_22559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (1))){
var inst_22506 = cljs.core.seq.call(null,coll);
var inst_22507 = inst_22506;
var state_22530__$1 = (function (){var statearr_22533 = state_22530;
(statearr_22533[(7)] = inst_22507);

return statearr_22533;
})();
var statearr_22534_22560 = state_22530__$1;
(statearr_22534_22560[(2)] = null);

(statearr_22534_22560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (4))){
var inst_22507 = (state_22530[(7)]);
var inst_22510 = cljs.core.first.call(null,inst_22507);
var state_22530__$1 = state_22530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22530__$1,(7),ch,inst_22510);
} else {
if((state_val_22531 === (13))){
var inst_22524 = (state_22530[(2)]);
var state_22530__$1 = state_22530;
var statearr_22535_22561 = state_22530__$1;
(statearr_22535_22561[(2)] = inst_22524);

(statearr_22535_22561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (6))){
var inst_22515 = (state_22530[(2)]);
var state_22530__$1 = state_22530;
if(cljs.core.truth_(inst_22515)){
var statearr_22536_22562 = state_22530__$1;
(statearr_22536_22562[(1)] = (8));

} else {
var statearr_22537_22563 = state_22530__$1;
(statearr_22537_22563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (3))){
var inst_22528 = (state_22530[(2)]);
var state_22530__$1 = state_22530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22530__$1,inst_22528);
} else {
if((state_val_22531 === (12))){
var state_22530__$1 = state_22530;
var statearr_22538_22564 = state_22530__$1;
(statearr_22538_22564[(2)] = null);

(statearr_22538_22564[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (2))){
var inst_22507 = (state_22530[(7)]);
var state_22530__$1 = state_22530;
if(cljs.core.truth_(inst_22507)){
var statearr_22539_22565 = state_22530__$1;
(statearr_22539_22565[(1)] = (4));

} else {
var statearr_22540_22566 = state_22530__$1;
(statearr_22540_22566[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (11))){
var inst_22521 = cljs.core.async.close_BANG_.call(null,ch);
var state_22530__$1 = state_22530;
var statearr_22541_22567 = state_22530__$1;
(statearr_22541_22567[(2)] = inst_22521);

(statearr_22541_22567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (9))){
var state_22530__$1 = state_22530;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22542_22568 = state_22530__$1;
(statearr_22542_22568[(1)] = (11));

} else {
var statearr_22543_22569 = state_22530__$1;
(statearr_22543_22569[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (5))){
var inst_22507 = (state_22530[(7)]);
var state_22530__$1 = state_22530;
var statearr_22544_22570 = state_22530__$1;
(statearr_22544_22570[(2)] = inst_22507);

(statearr_22544_22570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (10))){
var inst_22526 = (state_22530[(2)]);
var state_22530__$1 = state_22530;
var statearr_22545_22571 = state_22530__$1;
(statearr_22545_22571[(2)] = inst_22526);

(statearr_22545_22571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22531 === (8))){
var inst_22507 = (state_22530[(7)]);
var inst_22517 = cljs.core.next.call(null,inst_22507);
var inst_22507__$1 = inst_22517;
var state_22530__$1 = (function (){var statearr_22546 = state_22530;
(statearr_22546[(7)] = inst_22507__$1);

return statearr_22546;
})();
var statearr_22547_22572 = state_22530__$1;
(statearr_22547_22572[(2)] = null);

(statearr_22547_22572[(1)] = (2));


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
});})(c__21710__auto__))
;
return ((function (switch__21598__auto__,c__21710__auto__){
return (function() {
var cljs$core$async$state_machine__21599__auto__ = null;
var cljs$core$async$state_machine__21599__auto____0 = (function (){
var statearr_22551 = [null,null,null,null,null,null,null,null];
(statearr_22551[(0)] = cljs$core$async$state_machine__21599__auto__);

(statearr_22551[(1)] = (1));

return statearr_22551;
});
var cljs$core$async$state_machine__21599__auto____1 = (function (state_22530){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_22530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e22552){if((e22552 instanceof Object)){
var ex__21602__auto__ = e22552;
var statearr_22553_22573 = state_22530;
(statearr_22553_22573[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22574 = state_22530;
state_22530 = G__22574;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$state_machine__21599__auto__ = function(state_22530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21599__auto____1.call(this,state_22530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21599__auto____0;
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21599__auto____1;
return cljs$core$async$state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto__))
})();
var state__21712__auto__ = (function (){var statearr_22554 = f__21711__auto__.call(null);
(statearr_22554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto__);

return statearr_22554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto__))
);

return c__21710__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17440__auto__ = (((_ == null))?null:_);
var m__17441__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,_);
} else {
var m__17441__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17441__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m);
} else {
var m__17441__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async22796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22796 = (function (mult,ch,cs,meta22797){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22797 = meta22797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22798,meta22797__$1){
var self__ = this;
var _22798__$1 = this;
return (new cljs.core.async.t_cljs$core$async22796(self__.mult,self__.ch,self__.cs,meta22797__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22796.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22798){
var self__ = this;
var _22798__$1 = this;
return self__.meta22797;
});})(cs))
;

cljs.core.async.t_cljs$core$async22796.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22796.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22796.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22796.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22796.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22796.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22796.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22797","meta22797",785878093,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22796";

cljs.core.async.t_cljs$core$async22796.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async22796");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22796 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22796(mult__$1,ch__$1,cs__$1,meta22797){
return (new cljs.core.async.t_cljs$core$async22796(mult__$1,ch__$1,cs__$1,meta22797));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22796(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21710__auto___23017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___23017,cs,m,dchan,dctr,done){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___23017,cs,m,dchan,dctr,done){
return (function (state_22929){
var state_val_22930 = (state_22929[(1)]);
if((state_val_22930 === (7))){
var inst_22925 = (state_22929[(2)]);
var state_22929__$1 = state_22929;
var statearr_22931_23018 = state_22929__$1;
(statearr_22931_23018[(2)] = inst_22925);

(statearr_22931_23018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (20))){
var inst_22830 = (state_22929[(7)]);
var inst_22840 = cljs.core.first.call(null,inst_22830);
var inst_22841 = cljs.core.nth.call(null,inst_22840,(0),null);
var inst_22842 = cljs.core.nth.call(null,inst_22840,(1),null);
var state_22929__$1 = (function (){var statearr_22932 = state_22929;
(statearr_22932[(8)] = inst_22841);

return statearr_22932;
})();
if(cljs.core.truth_(inst_22842)){
var statearr_22933_23019 = state_22929__$1;
(statearr_22933_23019[(1)] = (22));

} else {
var statearr_22934_23020 = state_22929__$1;
(statearr_22934_23020[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (27))){
var inst_22870 = (state_22929[(9)]);
var inst_22877 = (state_22929[(10)]);
var inst_22801 = (state_22929[(11)]);
var inst_22872 = (state_22929[(12)]);
var inst_22877__$1 = cljs.core._nth.call(null,inst_22870,inst_22872);
var inst_22878 = cljs.core.async.put_BANG_.call(null,inst_22877__$1,inst_22801,done);
var state_22929__$1 = (function (){var statearr_22935 = state_22929;
(statearr_22935[(10)] = inst_22877__$1);

return statearr_22935;
})();
if(cljs.core.truth_(inst_22878)){
var statearr_22936_23021 = state_22929__$1;
(statearr_22936_23021[(1)] = (30));

} else {
var statearr_22937_23022 = state_22929__$1;
(statearr_22937_23022[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (1))){
var state_22929__$1 = state_22929;
var statearr_22938_23023 = state_22929__$1;
(statearr_22938_23023[(2)] = null);

(statearr_22938_23023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (24))){
var inst_22830 = (state_22929[(7)]);
var inst_22847 = (state_22929[(2)]);
var inst_22848 = cljs.core.next.call(null,inst_22830);
var inst_22810 = inst_22848;
var inst_22811 = null;
var inst_22812 = (0);
var inst_22813 = (0);
var state_22929__$1 = (function (){var statearr_22939 = state_22929;
(statearr_22939[(13)] = inst_22847);

(statearr_22939[(14)] = inst_22813);

(statearr_22939[(15)] = inst_22812);

(statearr_22939[(16)] = inst_22811);

(statearr_22939[(17)] = inst_22810);

return statearr_22939;
})();
var statearr_22940_23024 = state_22929__$1;
(statearr_22940_23024[(2)] = null);

(statearr_22940_23024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (39))){
var state_22929__$1 = state_22929;
var statearr_22944_23025 = state_22929__$1;
(statearr_22944_23025[(2)] = null);

(statearr_22944_23025[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (4))){
var inst_22801 = (state_22929[(11)]);
var inst_22801__$1 = (state_22929[(2)]);
var inst_22802 = (inst_22801__$1 == null);
var state_22929__$1 = (function (){var statearr_22945 = state_22929;
(statearr_22945[(11)] = inst_22801__$1);

return statearr_22945;
})();
if(cljs.core.truth_(inst_22802)){
var statearr_22946_23026 = state_22929__$1;
(statearr_22946_23026[(1)] = (5));

} else {
var statearr_22947_23027 = state_22929__$1;
(statearr_22947_23027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (15))){
var inst_22813 = (state_22929[(14)]);
var inst_22812 = (state_22929[(15)]);
var inst_22811 = (state_22929[(16)]);
var inst_22810 = (state_22929[(17)]);
var inst_22826 = (state_22929[(2)]);
var inst_22827 = (inst_22813 + (1));
var tmp22941 = inst_22812;
var tmp22942 = inst_22811;
var tmp22943 = inst_22810;
var inst_22810__$1 = tmp22943;
var inst_22811__$1 = tmp22942;
var inst_22812__$1 = tmp22941;
var inst_22813__$1 = inst_22827;
var state_22929__$1 = (function (){var statearr_22948 = state_22929;
(statearr_22948[(14)] = inst_22813__$1);

(statearr_22948[(18)] = inst_22826);

(statearr_22948[(15)] = inst_22812__$1);

(statearr_22948[(16)] = inst_22811__$1);

(statearr_22948[(17)] = inst_22810__$1);

return statearr_22948;
})();
var statearr_22949_23028 = state_22929__$1;
(statearr_22949_23028[(2)] = null);

(statearr_22949_23028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (21))){
var inst_22851 = (state_22929[(2)]);
var state_22929__$1 = state_22929;
var statearr_22953_23029 = state_22929__$1;
(statearr_22953_23029[(2)] = inst_22851);

(statearr_22953_23029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (31))){
var inst_22877 = (state_22929[(10)]);
var inst_22881 = done.call(null,null);
var inst_22882 = cljs.core.async.untap_STAR_.call(null,m,inst_22877);
var state_22929__$1 = (function (){var statearr_22954 = state_22929;
(statearr_22954[(19)] = inst_22881);

return statearr_22954;
})();
var statearr_22955_23030 = state_22929__$1;
(statearr_22955_23030[(2)] = inst_22882);

(statearr_22955_23030[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (32))){
var inst_22870 = (state_22929[(9)]);
var inst_22869 = (state_22929[(20)]);
var inst_22871 = (state_22929[(21)]);
var inst_22872 = (state_22929[(12)]);
var inst_22884 = (state_22929[(2)]);
var inst_22885 = (inst_22872 + (1));
var tmp22950 = inst_22870;
var tmp22951 = inst_22869;
var tmp22952 = inst_22871;
var inst_22869__$1 = tmp22951;
var inst_22870__$1 = tmp22950;
var inst_22871__$1 = tmp22952;
var inst_22872__$1 = inst_22885;
var state_22929__$1 = (function (){var statearr_22956 = state_22929;
(statearr_22956[(9)] = inst_22870__$1);

(statearr_22956[(20)] = inst_22869__$1);

(statearr_22956[(22)] = inst_22884);

(statearr_22956[(21)] = inst_22871__$1);

(statearr_22956[(12)] = inst_22872__$1);

return statearr_22956;
})();
var statearr_22957_23031 = state_22929__$1;
(statearr_22957_23031[(2)] = null);

(statearr_22957_23031[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (40))){
var inst_22897 = (state_22929[(23)]);
var inst_22901 = done.call(null,null);
var inst_22902 = cljs.core.async.untap_STAR_.call(null,m,inst_22897);
var state_22929__$1 = (function (){var statearr_22958 = state_22929;
(statearr_22958[(24)] = inst_22901);

return statearr_22958;
})();
var statearr_22959_23032 = state_22929__$1;
(statearr_22959_23032[(2)] = inst_22902);

(statearr_22959_23032[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (33))){
var inst_22888 = (state_22929[(25)]);
var inst_22890 = cljs.core.chunked_seq_QMARK_.call(null,inst_22888);
var state_22929__$1 = state_22929;
if(inst_22890){
var statearr_22960_23033 = state_22929__$1;
(statearr_22960_23033[(1)] = (36));

} else {
var statearr_22961_23034 = state_22929__$1;
(statearr_22961_23034[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (13))){
var inst_22820 = (state_22929[(26)]);
var inst_22823 = cljs.core.async.close_BANG_.call(null,inst_22820);
var state_22929__$1 = state_22929;
var statearr_22962_23035 = state_22929__$1;
(statearr_22962_23035[(2)] = inst_22823);

(statearr_22962_23035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (22))){
var inst_22841 = (state_22929[(8)]);
var inst_22844 = cljs.core.async.close_BANG_.call(null,inst_22841);
var state_22929__$1 = state_22929;
var statearr_22963_23036 = state_22929__$1;
(statearr_22963_23036[(2)] = inst_22844);

(statearr_22963_23036[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (36))){
var inst_22888 = (state_22929[(25)]);
var inst_22892 = cljs.core.chunk_first.call(null,inst_22888);
var inst_22893 = cljs.core.chunk_rest.call(null,inst_22888);
var inst_22894 = cljs.core.count.call(null,inst_22892);
var inst_22869 = inst_22893;
var inst_22870 = inst_22892;
var inst_22871 = inst_22894;
var inst_22872 = (0);
var state_22929__$1 = (function (){var statearr_22964 = state_22929;
(statearr_22964[(9)] = inst_22870);

(statearr_22964[(20)] = inst_22869);

(statearr_22964[(21)] = inst_22871);

(statearr_22964[(12)] = inst_22872);

return statearr_22964;
})();
var statearr_22965_23037 = state_22929__$1;
(statearr_22965_23037[(2)] = null);

(statearr_22965_23037[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (41))){
var inst_22888 = (state_22929[(25)]);
var inst_22904 = (state_22929[(2)]);
var inst_22905 = cljs.core.next.call(null,inst_22888);
var inst_22869 = inst_22905;
var inst_22870 = null;
var inst_22871 = (0);
var inst_22872 = (0);
var state_22929__$1 = (function (){var statearr_22966 = state_22929;
(statearr_22966[(9)] = inst_22870);

(statearr_22966[(20)] = inst_22869);

(statearr_22966[(27)] = inst_22904);

(statearr_22966[(21)] = inst_22871);

(statearr_22966[(12)] = inst_22872);

return statearr_22966;
})();
var statearr_22967_23038 = state_22929__$1;
(statearr_22967_23038[(2)] = null);

(statearr_22967_23038[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (43))){
var state_22929__$1 = state_22929;
var statearr_22968_23039 = state_22929__$1;
(statearr_22968_23039[(2)] = null);

(statearr_22968_23039[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (29))){
var inst_22913 = (state_22929[(2)]);
var state_22929__$1 = state_22929;
var statearr_22969_23040 = state_22929__$1;
(statearr_22969_23040[(2)] = inst_22913);

(statearr_22969_23040[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (44))){
var inst_22922 = (state_22929[(2)]);
var state_22929__$1 = (function (){var statearr_22970 = state_22929;
(statearr_22970[(28)] = inst_22922);

return statearr_22970;
})();
var statearr_22971_23041 = state_22929__$1;
(statearr_22971_23041[(2)] = null);

(statearr_22971_23041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (6))){
var inst_22861 = (state_22929[(29)]);
var inst_22860 = cljs.core.deref.call(null,cs);
var inst_22861__$1 = cljs.core.keys.call(null,inst_22860);
var inst_22862 = cljs.core.count.call(null,inst_22861__$1);
var inst_22863 = cljs.core.reset_BANG_.call(null,dctr,inst_22862);
var inst_22868 = cljs.core.seq.call(null,inst_22861__$1);
var inst_22869 = inst_22868;
var inst_22870 = null;
var inst_22871 = (0);
var inst_22872 = (0);
var state_22929__$1 = (function (){var statearr_22972 = state_22929;
(statearr_22972[(9)] = inst_22870);

(statearr_22972[(20)] = inst_22869);

(statearr_22972[(21)] = inst_22871);

(statearr_22972[(12)] = inst_22872);

(statearr_22972[(29)] = inst_22861__$1);

(statearr_22972[(30)] = inst_22863);

return statearr_22972;
})();
var statearr_22973_23042 = state_22929__$1;
(statearr_22973_23042[(2)] = null);

(statearr_22973_23042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (28))){
var inst_22869 = (state_22929[(20)]);
var inst_22888 = (state_22929[(25)]);
var inst_22888__$1 = cljs.core.seq.call(null,inst_22869);
var state_22929__$1 = (function (){var statearr_22974 = state_22929;
(statearr_22974[(25)] = inst_22888__$1);

return statearr_22974;
})();
if(inst_22888__$1){
var statearr_22975_23043 = state_22929__$1;
(statearr_22975_23043[(1)] = (33));

} else {
var statearr_22976_23044 = state_22929__$1;
(statearr_22976_23044[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (25))){
var inst_22871 = (state_22929[(21)]);
var inst_22872 = (state_22929[(12)]);
var inst_22874 = (inst_22872 < inst_22871);
var inst_22875 = inst_22874;
var state_22929__$1 = state_22929;
if(cljs.core.truth_(inst_22875)){
var statearr_22977_23045 = state_22929__$1;
(statearr_22977_23045[(1)] = (27));

} else {
var statearr_22978_23046 = state_22929__$1;
(statearr_22978_23046[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (34))){
var state_22929__$1 = state_22929;
var statearr_22979_23047 = state_22929__$1;
(statearr_22979_23047[(2)] = null);

(statearr_22979_23047[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (17))){
var state_22929__$1 = state_22929;
var statearr_22980_23048 = state_22929__$1;
(statearr_22980_23048[(2)] = null);

(statearr_22980_23048[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (3))){
var inst_22927 = (state_22929[(2)]);
var state_22929__$1 = state_22929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22929__$1,inst_22927);
} else {
if((state_val_22930 === (12))){
var inst_22856 = (state_22929[(2)]);
var state_22929__$1 = state_22929;
var statearr_22981_23049 = state_22929__$1;
(statearr_22981_23049[(2)] = inst_22856);

(statearr_22981_23049[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (2))){
var state_22929__$1 = state_22929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22929__$1,(4),ch);
} else {
if((state_val_22930 === (23))){
var state_22929__$1 = state_22929;
var statearr_22982_23050 = state_22929__$1;
(statearr_22982_23050[(2)] = null);

(statearr_22982_23050[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (35))){
var inst_22911 = (state_22929[(2)]);
var state_22929__$1 = state_22929;
var statearr_22983_23051 = state_22929__$1;
(statearr_22983_23051[(2)] = inst_22911);

(statearr_22983_23051[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (19))){
var inst_22830 = (state_22929[(7)]);
var inst_22834 = cljs.core.chunk_first.call(null,inst_22830);
var inst_22835 = cljs.core.chunk_rest.call(null,inst_22830);
var inst_22836 = cljs.core.count.call(null,inst_22834);
var inst_22810 = inst_22835;
var inst_22811 = inst_22834;
var inst_22812 = inst_22836;
var inst_22813 = (0);
var state_22929__$1 = (function (){var statearr_22984 = state_22929;
(statearr_22984[(14)] = inst_22813);

(statearr_22984[(15)] = inst_22812);

(statearr_22984[(16)] = inst_22811);

(statearr_22984[(17)] = inst_22810);

return statearr_22984;
})();
var statearr_22985_23052 = state_22929__$1;
(statearr_22985_23052[(2)] = null);

(statearr_22985_23052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (11))){
var inst_22830 = (state_22929[(7)]);
var inst_22810 = (state_22929[(17)]);
var inst_22830__$1 = cljs.core.seq.call(null,inst_22810);
var state_22929__$1 = (function (){var statearr_22986 = state_22929;
(statearr_22986[(7)] = inst_22830__$1);

return statearr_22986;
})();
if(inst_22830__$1){
var statearr_22987_23053 = state_22929__$1;
(statearr_22987_23053[(1)] = (16));

} else {
var statearr_22988_23054 = state_22929__$1;
(statearr_22988_23054[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (9))){
var inst_22858 = (state_22929[(2)]);
var state_22929__$1 = state_22929;
var statearr_22989_23055 = state_22929__$1;
(statearr_22989_23055[(2)] = inst_22858);

(statearr_22989_23055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (5))){
var inst_22808 = cljs.core.deref.call(null,cs);
var inst_22809 = cljs.core.seq.call(null,inst_22808);
var inst_22810 = inst_22809;
var inst_22811 = null;
var inst_22812 = (0);
var inst_22813 = (0);
var state_22929__$1 = (function (){var statearr_22990 = state_22929;
(statearr_22990[(14)] = inst_22813);

(statearr_22990[(15)] = inst_22812);

(statearr_22990[(16)] = inst_22811);

(statearr_22990[(17)] = inst_22810);

return statearr_22990;
})();
var statearr_22991_23056 = state_22929__$1;
(statearr_22991_23056[(2)] = null);

(statearr_22991_23056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (14))){
var state_22929__$1 = state_22929;
var statearr_22992_23057 = state_22929__$1;
(statearr_22992_23057[(2)] = null);

(statearr_22992_23057[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (45))){
var inst_22919 = (state_22929[(2)]);
var state_22929__$1 = state_22929;
var statearr_22993_23058 = state_22929__$1;
(statearr_22993_23058[(2)] = inst_22919);

(statearr_22993_23058[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (26))){
var inst_22861 = (state_22929[(29)]);
var inst_22915 = (state_22929[(2)]);
var inst_22916 = cljs.core.seq.call(null,inst_22861);
var state_22929__$1 = (function (){var statearr_22994 = state_22929;
(statearr_22994[(31)] = inst_22915);

return statearr_22994;
})();
if(inst_22916){
var statearr_22995_23059 = state_22929__$1;
(statearr_22995_23059[(1)] = (42));

} else {
var statearr_22996_23060 = state_22929__$1;
(statearr_22996_23060[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (16))){
var inst_22830 = (state_22929[(7)]);
var inst_22832 = cljs.core.chunked_seq_QMARK_.call(null,inst_22830);
var state_22929__$1 = state_22929;
if(inst_22832){
var statearr_22997_23061 = state_22929__$1;
(statearr_22997_23061[(1)] = (19));

} else {
var statearr_22998_23062 = state_22929__$1;
(statearr_22998_23062[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (38))){
var inst_22908 = (state_22929[(2)]);
var state_22929__$1 = state_22929;
var statearr_22999_23063 = state_22929__$1;
(statearr_22999_23063[(2)] = inst_22908);

(statearr_22999_23063[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (30))){
var state_22929__$1 = state_22929;
var statearr_23000_23064 = state_22929__$1;
(statearr_23000_23064[(2)] = null);

(statearr_23000_23064[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (10))){
var inst_22813 = (state_22929[(14)]);
var inst_22811 = (state_22929[(16)]);
var inst_22819 = cljs.core._nth.call(null,inst_22811,inst_22813);
var inst_22820 = cljs.core.nth.call(null,inst_22819,(0),null);
var inst_22821 = cljs.core.nth.call(null,inst_22819,(1),null);
var state_22929__$1 = (function (){var statearr_23001 = state_22929;
(statearr_23001[(26)] = inst_22820);

return statearr_23001;
})();
if(cljs.core.truth_(inst_22821)){
var statearr_23002_23065 = state_22929__$1;
(statearr_23002_23065[(1)] = (13));

} else {
var statearr_23003_23066 = state_22929__$1;
(statearr_23003_23066[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (18))){
var inst_22854 = (state_22929[(2)]);
var state_22929__$1 = state_22929;
var statearr_23004_23067 = state_22929__$1;
(statearr_23004_23067[(2)] = inst_22854);

(statearr_23004_23067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (42))){
var state_22929__$1 = state_22929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22929__$1,(45),dchan);
} else {
if((state_val_22930 === (37))){
var inst_22897 = (state_22929[(23)]);
var inst_22801 = (state_22929[(11)]);
var inst_22888 = (state_22929[(25)]);
var inst_22897__$1 = cljs.core.first.call(null,inst_22888);
var inst_22898 = cljs.core.async.put_BANG_.call(null,inst_22897__$1,inst_22801,done);
var state_22929__$1 = (function (){var statearr_23005 = state_22929;
(statearr_23005[(23)] = inst_22897__$1);

return statearr_23005;
})();
if(cljs.core.truth_(inst_22898)){
var statearr_23006_23068 = state_22929__$1;
(statearr_23006_23068[(1)] = (39));

} else {
var statearr_23007_23069 = state_22929__$1;
(statearr_23007_23069[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22930 === (8))){
var inst_22813 = (state_22929[(14)]);
var inst_22812 = (state_22929[(15)]);
var inst_22815 = (inst_22813 < inst_22812);
var inst_22816 = inst_22815;
var state_22929__$1 = state_22929;
if(cljs.core.truth_(inst_22816)){
var statearr_23008_23070 = state_22929__$1;
(statearr_23008_23070[(1)] = (10));

} else {
var statearr_23009_23071 = state_22929__$1;
(statearr_23009_23071[(1)] = (11));

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
});})(c__21710__auto___23017,cs,m,dchan,dctr,done))
;
return ((function (switch__21598__auto__,c__21710__auto___23017,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21599__auto__ = null;
var cljs$core$async$mult_$_state_machine__21599__auto____0 = (function (){
var statearr_23013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23013[(0)] = cljs$core$async$mult_$_state_machine__21599__auto__);

(statearr_23013[(1)] = (1));

return statearr_23013;
});
var cljs$core$async$mult_$_state_machine__21599__auto____1 = (function (state_22929){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_22929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e23014){if((e23014 instanceof Object)){
var ex__21602__auto__ = e23014;
var statearr_23015_23072 = state_22929;
(statearr_23015_23072[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23073 = state_22929;
state_22929 = G__23073;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21599__auto__ = function(state_22929){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21599__auto____1.call(this,state_22929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21599__auto____0;
cljs$core$async$mult_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21599__auto____1;
return cljs$core$async$mult_$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___23017,cs,m,dchan,dctr,done))
})();
var state__21712__auto__ = (function (){var statearr_23016 = f__21711__auto__.call(null);
(statearr_23016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___23017);

return statearr_23016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___23017,cs,m,dchan,dctr,done))
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
var args23074 = [];
var len__17844__auto___23077 = arguments.length;
var i__17845__auto___23078 = (0);
while(true){
if((i__17845__auto___23078 < len__17844__auto___23077)){
args23074.push((arguments[i__17845__auto___23078]));

var G__23079 = (i__17845__auto___23078 + (1));
i__17845__auto___23078 = G__23079;
continue;
} else {
}
break;
}

var G__23076 = args23074.length;
switch (G__23076) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23074.length)].join('')));

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m);
} else {
var m__17441__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,state_map);
} else {
var m__17441__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17440__auto__ = (((m == null))?null:m);
var m__17441__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,m,mode);
} else {
var m__17441__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17851__auto__ = [];
var len__17844__auto___23091 = arguments.length;
var i__17845__auto___23092 = (0);
while(true){
if((i__17845__auto___23092 < len__17844__auto___23091)){
args__17851__auto__.push((arguments[i__17845__auto___23092]));

var G__23093 = (i__17845__auto___23092 + (1));
i__17845__auto___23092 = G__23093;
continue;
} else {
}
break;
}

var argseq__17852__auto__ = ((((3) < args__17851__auto__.length))?(new cljs.core.IndexedSeq(args__17851__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17852__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23085){
var map__23086 = p__23085;
var map__23086__$1 = ((((!((map__23086 == null)))?((((map__23086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23086):map__23086);
var opts = map__23086__$1;
var statearr_23088_23094 = state;
(statearr_23088_23094[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23086,map__23086__$1,opts){
return (function (val){
var statearr_23089_23095 = state;
(statearr_23089_23095[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23086,map__23086__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23090_23096 = state;
(statearr_23090_23096[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23081){
var G__23082 = cljs.core.first.call(null,seq23081);
var seq23081__$1 = cljs.core.next.call(null,seq23081);
var G__23083 = cljs.core.first.call(null,seq23081__$1);
var seq23081__$2 = cljs.core.next.call(null,seq23081__$1);
var G__23084 = cljs.core.first.call(null,seq23081__$2);
var seq23081__$3 = cljs.core.next.call(null,seq23081__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23082,G__23083,G__23084,seq23081__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23260 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23261){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23261 = meta23261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23262,meta23261__$1){
var self__ = this;
var _23262__$1 = this;
return (new cljs.core.async.t_cljs$core$async23260(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23261__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23262){
var self__ = this;
var _23262__$1 = this;
return self__.meta23261;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23260.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23260.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23260.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23260.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23260.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23260.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23260.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23260.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23260.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23261","meta23261",-1061445456,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23260";

cljs.core.async.t_cljs$core$async23260.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23260");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23260 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23260(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23261){
return (new cljs.core.async.t_cljs$core$async23260(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23261));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23260(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21710__auto___23423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___23423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___23423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23360){
var state_val_23361 = (state_23360[(1)]);
if((state_val_23361 === (7))){
var inst_23278 = (state_23360[(2)]);
var state_23360__$1 = state_23360;
var statearr_23362_23424 = state_23360__$1;
(statearr_23362_23424[(2)] = inst_23278);

(statearr_23362_23424[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (20))){
var inst_23290 = (state_23360[(7)]);
var state_23360__$1 = state_23360;
var statearr_23363_23425 = state_23360__$1;
(statearr_23363_23425[(2)] = inst_23290);

(statearr_23363_23425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (27))){
var state_23360__$1 = state_23360;
var statearr_23364_23426 = state_23360__$1;
(statearr_23364_23426[(2)] = null);

(statearr_23364_23426[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (1))){
var inst_23266 = (state_23360[(8)]);
var inst_23266__$1 = calc_state.call(null);
var inst_23268 = (inst_23266__$1 == null);
var inst_23269 = cljs.core.not.call(null,inst_23268);
var state_23360__$1 = (function (){var statearr_23365 = state_23360;
(statearr_23365[(8)] = inst_23266__$1);

return statearr_23365;
})();
if(inst_23269){
var statearr_23366_23427 = state_23360__$1;
(statearr_23366_23427[(1)] = (2));

} else {
var statearr_23367_23428 = state_23360__$1;
(statearr_23367_23428[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (24))){
var inst_23320 = (state_23360[(9)]);
var inst_23313 = (state_23360[(10)]);
var inst_23334 = (state_23360[(11)]);
var inst_23334__$1 = inst_23313.call(null,inst_23320);
var state_23360__$1 = (function (){var statearr_23368 = state_23360;
(statearr_23368[(11)] = inst_23334__$1);

return statearr_23368;
})();
if(cljs.core.truth_(inst_23334__$1)){
var statearr_23369_23429 = state_23360__$1;
(statearr_23369_23429[(1)] = (29));

} else {
var statearr_23370_23430 = state_23360__$1;
(statearr_23370_23430[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (4))){
var inst_23281 = (state_23360[(2)]);
var state_23360__$1 = state_23360;
if(cljs.core.truth_(inst_23281)){
var statearr_23371_23431 = state_23360__$1;
(statearr_23371_23431[(1)] = (8));

} else {
var statearr_23372_23432 = state_23360__$1;
(statearr_23372_23432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (15))){
var inst_23307 = (state_23360[(2)]);
var state_23360__$1 = state_23360;
if(cljs.core.truth_(inst_23307)){
var statearr_23373_23433 = state_23360__$1;
(statearr_23373_23433[(1)] = (19));

} else {
var statearr_23374_23434 = state_23360__$1;
(statearr_23374_23434[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (21))){
var inst_23312 = (state_23360[(12)]);
var inst_23312__$1 = (state_23360[(2)]);
var inst_23313 = cljs.core.get.call(null,inst_23312__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23314 = cljs.core.get.call(null,inst_23312__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23315 = cljs.core.get.call(null,inst_23312__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23360__$1 = (function (){var statearr_23375 = state_23360;
(statearr_23375[(10)] = inst_23313);

(statearr_23375[(12)] = inst_23312__$1);

(statearr_23375[(13)] = inst_23314);

return statearr_23375;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23360__$1,(22),inst_23315);
} else {
if((state_val_23361 === (31))){
var inst_23342 = (state_23360[(2)]);
var state_23360__$1 = state_23360;
if(cljs.core.truth_(inst_23342)){
var statearr_23376_23435 = state_23360__$1;
(statearr_23376_23435[(1)] = (32));

} else {
var statearr_23377_23436 = state_23360__$1;
(statearr_23377_23436[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (32))){
var inst_23319 = (state_23360[(14)]);
var state_23360__$1 = state_23360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23360__$1,(35),out,inst_23319);
} else {
if((state_val_23361 === (33))){
var inst_23312 = (state_23360[(12)]);
var inst_23290 = inst_23312;
var state_23360__$1 = (function (){var statearr_23378 = state_23360;
(statearr_23378[(7)] = inst_23290);

return statearr_23378;
})();
var statearr_23379_23437 = state_23360__$1;
(statearr_23379_23437[(2)] = null);

(statearr_23379_23437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (13))){
var inst_23290 = (state_23360[(7)]);
var inst_23297 = inst_23290.cljs$lang$protocol_mask$partition0$;
var inst_23298 = (inst_23297 & (64));
var inst_23299 = inst_23290.cljs$core$ISeq$;
var inst_23300 = (inst_23298) || (inst_23299);
var state_23360__$1 = state_23360;
if(cljs.core.truth_(inst_23300)){
var statearr_23380_23438 = state_23360__$1;
(statearr_23380_23438[(1)] = (16));

} else {
var statearr_23381_23439 = state_23360__$1;
(statearr_23381_23439[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (22))){
var inst_23320 = (state_23360[(9)]);
var inst_23319 = (state_23360[(14)]);
var inst_23318 = (state_23360[(2)]);
var inst_23319__$1 = cljs.core.nth.call(null,inst_23318,(0),null);
var inst_23320__$1 = cljs.core.nth.call(null,inst_23318,(1),null);
var inst_23321 = (inst_23319__$1 == null);
var inst_23322 = cljs.core._EQ_.call(null,inst_23320__$1,change);
var inst_23323 = (inst_23321) || (inst_23322);
var state_23360__$1 = (function (){var statearr_23382 = state_23360;
(statearr_23382[(9)] = inst_23320__$1);

(statearr_23382[(14)] = inst_23319__$1);

return statearr_23382;
})();
if(cljs.core.truth_(inst_23323)){
var statearr_23383_23440 = state_23360__$1;
(statearr_23383_23440[(1)] = (23));

} else {
var statearr_23384_23441 = state_23360__$1;
(statearr_23384_23441[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (36))){
var inst_23312 = (state_23360[(12)]);
var inst_23290 = inst_23312;
var state_23360__$1 = (function (){var statearr_23385 = state_23360;
(statearr_23385[(7)] = inst_23290);

return statearr_23385;
})();
var statearr_23386_23442 = state_23360__$1;
(statearr_23386_23442[(2)] = null);

(statearr_23386_23442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (29))){
var inst_23334 = (state_23360[(11)]);
var state_23360__$1 = state_23360;
var statearr_23387_23443 = state_23360__$1;
(statearr_23387_23443[(2)] = inst_23334);

(statearr_23387_23443[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (6))){
var state_23360__$1 = state_23360;
var statearr_23388_23444 = state_23360__$1;
(statearr_23388_23444[(2)] = false);

(statearr_23388_23444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (28))){
var inst_23330 = (state_23360[(2)]);
var inst_23331 = calc_state.call(null);
var inst_23290 = inst_23331;
var state_23360__$1 = (function (){var statearr_23389 = state_23360;
(statearr_23389[(15)] = inst_23330);

(statearr_23389[(7)] = inst_23290);

return statearr_23389;
})();
var statearr_23390_23445 = state_23360__$1;
(statearr_23390_23445[(2)] = null);

(statearr_23390_23445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (25))){
var inst_23356 = (state_23360[(2)]);
var state_23360__$1 = state_23360;
var statearr_23391_23446 = state_23360__$1;
(statearr_23391_23446[(2)] = inst_23356);

(statearr_23391_23446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (34))){
var inst_23354 = (state_23360[(2)]);
var state_23360__$1 = state_23360;
var statearr_23392_23447 = state_23360__$1;
(statearr_23392_23447[(2)] = inst_23354);

(statearr_23392_23447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (17))){
var state_23360__$1 = state_23360;
var statearr_23393_23448 = state_23360__$1;
(statearr_23393_23448[(2)] = false);

(statearr_23393_23448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (3))){
var state_23360__$1 = state_23360;
var statearr_23394_23449 = state_23360__$1;
(statearr_23394_23449[(2)] = false);

(statearr_23394_23449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (12))){
var inst_23358 = (state_23360[(2)]);
var state_23360__$1 = state_23360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23360__$1,inst_23358);
} else {
if((state_val_23361 === (2))){
var inst_23266 = (state_23360[(8)]);
var inst_23271 = inst_23266.cljs$lang$protocol_mask$partition0$;
var inst_23272 = (inst_23271 & (64));
var inst_23273 = inst_23266.cljs$core$ISeq$;
var inst_23274 = (inst_23272) || (inst_23273);
var state_23360__$1 = state_23360;
if(cljs.core.truth_(inst_23274)){
var statearr_23395_23450 = state_23360__$1;
(statearr_23395_23450[(1)] = (5));

} else {
var statearr_23396_23451 = state_23360__$1;
(statearr_23396_23451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (23))){
var inst_23319 = (state_23360[(14)]);
var inst_23325 = (inst_23319 == null);
var state_23360__$1 = state_23360;
if(cljs.core.truth_(inst_23325)){
var statearr_23397_23452 = state_23360__$1;
(statearr_23397_23452[(1)] = (26));

} else {
var statearr_23398_23453 = state_23360__$1;
(statearr_23398_23453[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (35))){
var inst_23345 = (state_23360[(2)]);
var state_23360__$1 = state_23360;
if(cljs.core.truth_(inst_23345)){
var statearr_23399_23454 = state_23360__$1;
(statearr_23399_23454[(1)] = (36));

} else {
var statearr_23400_23455 = state_23360__$1;
(statearr_23400_23455[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (19))){
var inst_23290 = (state_23360[(7)]);
var inst_23309 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23290);
var state_23360__$1 = state_23360;
var statearr_23401_23456 = state_23360__$1;
(statearr_23401_23456[(2)] = inst_23309);

(statearr_23401_23456[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (11))){
var inst_23290 = (state_23360[(7)]);
var inst_23294 = (inst_23290 == null);
var inst_23295 = cljs.core.not.call(null,inst_23294);
var state_23360__$1 = state_23360;
if(inst_23295){
var statearr_23402_23457 = state_23360__$1;
(statearr_23402_23457[(1)] = (13));

} else {
var statearr_23403_23458 = state_23360__$1;
(statearr_23403_23458[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (9))){
var inst_23266 = (state_23360[(8)]);
var state_23360__$1 = state_23360;
var statearr_23404_23459 = state_23360__$1;
(statearr_23404_23459[(2)] = inst_23266);

(statearr_23404_23459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (5))){
var state_23360__$1 = state_23360;
var statearr_23405_23460 = state_23360__$1;
(statearr_23405_23460[(2)] = true);

(statearr_23405_23460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (14))){
var state_23360__$1 = state_23360;
var statearr_23406_23461 = state_23360__$1;
(statearr_23406_23461[(2)] = false);

(statearr_23406_23461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (26))){
var inst_23320 = (state_23360[(9)]);
var inst_23327 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23320);
var state_23360__$1 = state_23360;
var statearr_23407_23462 = state_23360__$1;
(statearr_23407_23462[(2)] = inst_23327);

(statearr_23407_23462[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (16))){
var state_23360__$1 = state_23360;
var statearr_23408_23463 = state_23360__$1;
(statearr_23408_23463[(2)] = true);

(statearr_23408_23463[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (38))){
var inst_23350 = (state_23360[(2)]);
var state_23360__$1 = state_23360;
var statearr_23409_23464 = state_23360__$1;
(statearr_23409_23464[(2)] = inst_23350);

(statearr_23409_23464[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (30))){
var inst_23320 = (state_23360[(9)]);
var inst_23313 = (state_23360[(10)]);
var inst_23314 = (state_23360[(13)]);
var inst_23337 = cljs.core.empty_QMARK_.call(null,inst_23313);
var inst_23338 = inst_23314.call(null,inst_23320);
var inst_23339 = cljs.core.not.call(null,inst_23338);
var inst_23340 = (inst_23337) && (inst_23339);
var state_23360__$1 = state_23360;
var statearr_23410_23465 = state_23360__$1;
(statearr_23410_23465[(2)] = inst_23340);

(statearr_23410_23465[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (10))){
var inst_23266 = (state_23360[(8)]);
var inst_23286 = (state_23360[(2)]);
var inst_23287 = cljs.core.get.call(null,inst_23286,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23288 = cljs.core.get.call(null,inst_23286,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23289 = cljs.core.get.call(null,inst_23286,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23290 = inst_23266;
var state_23360__$1 = (function (){var statearr_23411 = state_23360;
(statearr_23411[(16)] = inst_23289);

(statearr_23411[(17)] = inst_23288);

(statearr_23411[(7)] = inst_23290);

(statearr_23411[(18)] = inst_23287);

return statearr_23411;
})();
var statearr_23412_23466 = state_23360__$1;
(statearr_23412_23466[(2)] = null);

(statearr_23412_23466[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (18))){
var inst_23304 = (state_23360[(2)]);
var state_23360__$1 = state_23360;
var statearr_23413_23467 = state_23360__$1;
(statearr_23413_23467[(2)] = inst_23304);

(statearr_23413_23467[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (37))){
var state_23360__$1 = state_23360;
var statearr_23414_23468 = state_23360__$1;
(statearr_23414_23468[(2)] = null);

(statearr_23414_23468[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23361 === (8))){
var inst_23266 = (state_23360[(8)]);
var inst_23283 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23266);
var state_23360__$1 = state_23360;
var statearr_23415_23469 = state_23360__$1;
(statearr_23415_23469[(2)] = inst_23283);

(statearr_23415_23469[(1)] = (10));


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
});})(c__21710__auto___23423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21598__auto__,c__21710__auto___23423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21599__auto__ = null;
var cljs$core$async$mix_$_state_machine__21599__auto____0 = (function (){
var statearr_23419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23419[(0)] = cljs$core$async$mix_$_state_machine__21599__auto__);

(statearr_23419[(1)] = (1));

return statearr_23419;
});
var cljs$core$async$mix_$_state_machine__21599__auto____1 = (function (state_23360){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_23360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e23420){if((e23420 instanceof Object)){
var ex__21602__auto__ = e23420;
var statearr_23421_23470 = state_23360;
(statearr_23421_23470[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23471 = state_23360;
state_23360 = G__23471;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21599__auto__ = function(state_23360){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21599__auto____1.call(this,state_23360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21599__auto____0;
cljs$core$async$mix_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21599__auto____1;
return cljs$core$async$mix_$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___23423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21712__auto__ = (function (){var statearr_23422 = f__21711__auto__.call(null);
(statearr_23422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___23423);

return statearr_23422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___23423,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17441__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v,ch);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23472 = [];
var len__17844__auto___23475 = arguments.length;
var i__17845__auto___23476 = (0);
while(true){
if((i__17845__auto___23476 < len__17844__auto___23475)){
args23472.push((arguments[i__17845__auto___23476]));

var G__23477 = (i__17845__auto___23476 + (1));
i__17845__auto___23476 = G__23477;
continue;
} else {
}
break;
}

var G__23474 = args23472.length;
switch (G__23474) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23472.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17440__auto__ = (((p == null))?null:p);
var m__17441__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17440__auto__)]);
if(!((m__17441__auto__ == null))){
return m__17441__auto__.call(null,p,v);
} else {
var m__17441__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17441__auto____$1 == null))){
return m__17441__auto____$1.call(null,p,v);
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
var args23480 = [];
var len__17844__auto___23605 = arguments.length;
var i__17845__auto___23606 = (0);
while(true){
if((i__17845__auto___23606 < len__17844__auto___23605)){
args23480.push((arguments[i__17845__auto___23606]));

var G__23607 = (i__17845__auto___23606 + (1));
i__17845__auto___23606 = G__23607;
continue;
} else {
}
break;
}

var G__23482 = args23480.length;
switch (G__23482) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23480.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16785__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16785__auto__,mults){
return (function (p1__23479_SHARP_){
if(cljs.core.truth_(p1__23479_SHARP_.call(null,topic))){
return p1__23479_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23479_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16785__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23483 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23483 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23484){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23484 = meta23484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23485,meta23484__$1){
var self__ = this;
var _23485__$1 = this;
return (new cljs.core.async.t_cljs$core$async23483(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23484__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23483.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23485){
var self__ = this;
var _23485__$1 = this;
return self__.meta23484;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23483.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23483.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23483.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23483.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23483.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23483.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23483.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23483.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23484","meta23484",-1417846124,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23483";

cljs.core.async.t_cljs$core$async23483.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23483");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23483 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23483(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23484){
return (new cljs.core.async.t_cljs$core$async23483(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23484));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23483(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21710__auto___23609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___23609,mults,ensure_mult,p){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___23609,mults,ensure_mult,p){
return (function (state_23557){
var state_val_23558 = (state_23557[(1)]);
if((state_val_23558 === (7))){
var inst_23553 = (state_23557[(2)]);
var state_23557__$1 = state_23557;
var statearr_23559_23610 = state_23557__$1;
(statearr_23559_23610[(2)] = inst_23553);

(statearr_23559_23610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (20))){
var state_23557__$1 = state_23557;
var statearr_23560_23611 = state_23557__$1;
(statearr_23560_23611[(2)] = null);

(statearr_23560_23611[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (1))){
var state_23557__$1 = state_23557;
var statearr_23561_23612 = state_23557__$1;
(statearr_23561_23612[(2)] = null);

(statearr_23561_23612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (24))){
var inst_23536 = (state_23557[(7)]);
var inst_23545 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23536);
var state_23557__$1 = state_23557;
var statearr_23562_23613 = state_23557__$1;
(statearr_23562_23613[(2)] = inst_23545);

(statearr_23562_23613[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (4))){
var inst_23488 = (state_23557[(8)]);
var inst_23488__$1 = (state_23557[(2)]);
var inst_23489 = (inst_23488__$1 == null);
var state_23557__$1 = (function (){var statearr_23563 = state_23557;
(statearr_23563[(8)] = inst_23488__$1);

return statearr_23563;
})();
if(cljs.core.truth_(inst_23489)){
var statearr_23564_23614 = state_23557__$1;
(statearr_23564_23614[(1)] = (5));

} else {
var statearr_23565_23615 = state_23557__$1;
(statearr_23565_23615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (15))){
var inst_23530 = (state_23557[(2)]);
var state_23557__$1 = state_23557;
var statearr_23566_23616 = state_23557__$1;
(statearr_23566_23616[(2)] = inst_23530);

(statearr_23566_23616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (21))){
var inst_23550 = (state_23557[(2)]);
var state_23557__$1 = (function (){var statearr_23567 = state_23557;
(statearr_23567[(9)] = inst_23550);

return statearr_23567;
})();
var statearr_23568_23617 = state_23557__$1;
(statearr_23568_23617[(2)] = null);

(statearr_23568_23617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (13))){
var inst_23512 = (state_23557[(10)]);
var inst_23514 = cljs.core.chunked_seq_QMARK_.call(null,inst_23512);
var state_23557__$1 = state_23557;
if(inst_23514){
var statearr_23569_23618 = state_23557__$1;
(statearr_23569_23618[(1)] = (16));

} else {
var statearr_23570_23619 = state_23557__$1;
(statearr_23570_23619[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (22))){
var inst_23542 = (state_23557[(2)]);
var state_23557__$1 = state_23557;
if(cljs.core.truth_(inst_23542)){
var statearr_23571_23620 = state_23557__$1;
(statearr_23571_23620[(1)] = (23));

} else {
var statearr_23572_23621 = state_23557__$1;
(statearr_23572_23621[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (6))){
var inst_23488 = (state_23557[(8)]);
var inst_23538 = (state_23557[(11)]);
var inst_23536 = (state_23557[(7)]);
var inst_23536__$1 = topic_fn.call(null,inst_23488);
var inst_23537 = cljs.core.deref.call(null,mults);
var inst_23538__$1 = cljs.core.get.call(null,inst_23537,inst_23536__$1);
var state_23557__$1 = (function (){var statearr_23573 = state_23557;
(statearr_23573[(11)] = inst_23538__$1);

(statearr_23573[(7)] = inst_23536__$1);

return statearr_23573;
})();
if(cljs.core.truth_(inst_23538__$1)){
var statearr_23574_23622 = state_23557__$1;
(statearr_23574_23622[(1)] = (19));

} else {
var statearr_23575_23623 = state_23557__$1;
(statearr_23575_23623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (25))){
var inst_23547 = (state_23557[(2)]);
var state_23557__$1 = state_23557;
var statearr_23576_23624 = state_23557__$1;
(statearr_23576_23624[(2)] = inst_23547);

(statearr_23576_23624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (17))){
var inst_23512 = (state_23557[(10)]);
var inst_23521 = cljs.core.first.call(null,inst_23512);
var inst_23522 = cljs.core.async.muxch_STAR_.call(null,inst_23521);
var inst_23523 = cljs.core.async.close_BANG_.call(null,inst_23522);
var inst_23524 = cljs.core.next.call(null,inst_23512);
var inst_23498 = inst_23524;
var inst_23499 = null;
var inst_23500 = (0);
var inst_23501 = (0);
var state_23557__$1 = (function (){var statearr_23577 = state_23557;
(statearr_23577[(12)] = inst_23501);

(statearr_23577[(13)] = inst_23499);

(statearr_23577[(14)] = inst_23500);

(statearr_23577[(15)] = inst_23523);

(statearr_23577[(16)] = inst_23498);

return statearr_23577;
})();
var statearr_23578_23625 = state_23557__$1;
(statearr_23578_23625[(2)] = null);

(statearr_23578_23625[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (3))){
var inst_23555 = (state_23557[(2)]);
var state_23557__$1 = state_23557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23557__$1,inst_23555);
} else {
if((state_val_23558 === (12))){
var inst_23532 = (state_23557[(2)]);
var state_23557__$1 = state_23557;
var statearr_23579_23626 = state_23557__$1;
(statearr_23579_23626[(2)] = inst_23532);

(statearr_23579_23626[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (2))){
var state_23557__$1 = state_23557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23557__$1,(4),ch);
} else {
if((state_val_23558 === (23))){
var state_23557__$1 = state_23557;
var statearr_23580_23627 = state_23557__$1;
(statearr_23580_23627[(2)] = null);

(statearr_23580_23627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (19))){
var inst_23488 = (state_23557[(8)]);
var inst_23538 = (state_23557[(11)]);
var inst_23540 = cljs.core.async.muxch_STAR_.call(null,inst_23538);
var state_23557__$1 = state_23557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23557__$1,(22),inst_23540,inst_23488);
} else {
if((state_val_23558 === (11))){
var inst_23512 = (state_23557[(10)]);
var inst_23498 = (state_23557[(16)]);
var inst_23512__$1 = cljs.core.seq.call(null,inst_23498);
var state_23557__$1 = (function (){var statearr_23581 = state_23557;
(statearr_23581[(10)] = inst_23512__$1);

return statearr_23581;
})();
if(inst_23512__$1){
var statearr_23582_23628 = state_23557__$1;
(statearr_23582_23628[(1)] = (13));

} else {
var statearr_23583_23629 = state_23557__$1;
(statearr_23583_23629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (9))){
var inst_23534 = (state_23557[(2)]);
var state_23557__$1 = state_23557;
var statearr_23584_23630 = state_23557__$1;
(statearr_23584_23630[(2)] = inst_23534);

(statearr_23584_23630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (5))){
var inst_23495 = cljs.core.deref.call(null,mults);
var inst_23496 = cljs.core.vals.call(null,inst_23495);
var inst_23497 = cljs.core.seq.call(null,inst_23496);
var inst_23498 = inst_23497;
var inst_23499 = null;
var inst_23500 = (0);
var inst_23501 = (0);
var state_23557__$1 = (function (){var statearr_23585 = state_23557;
(statearr_23585[(12)] = inst_23501);

(statearr_23585[(13)] = inst_23499);

(statearr_23585[(14)] = inst_23500);

(statearr_23585[(16)] = inst_23498);

return statearr_23585;
})();
var statearr_23586_23631 = state_23557__$1;
(statearr_23586_23631[(2)] = null);

(statearr_23586_23631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (14))){
var state_23557__$1 = state_23557;
var statearr_23590_23632 = state_23557__$1;
(statearr_23590_23632[(2)] = null);

(statearr_23590_23632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (16))){
var inst_23512 = (state_23557[(10)]);
var inst_23516 = cljs.core.chunk_first.call(null,inst_23512);
var inst_23517 = cljs.core.chunk_rest.call(null,inst_23512);
var inst_23518 = cljs.core.count.call(null,inst_23516);
var inst_23498 = inst_23517;
var inst_23499 = inst_23516;
var inst_23500 = inst_23518;
var inst_23501 = (0);
var state_23557__$1 = (function (){var statearr_23591 = state_23557;
(statearr_23591[(12)] = inst_23501);

(statearr_23591[(13)] = inst_23499);

(statearr_23591[(14)] = inst_23500);

(statearr_23591[(16)] = inst_23498);

return statearr_23591;
})();
var statearr_23592_23633 = state_23557__$1;
(statearr_23592_23633[(2)] = null);

(statearr_23592_23633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (10))){
var inst_23501 = (state_23557[(12)]);
var inst_23499 = (state_23557[(13)]);
var inst_23500 = (state_23557[(14)]);
var inst_23498 = (state_23557[(16)]);
var inst_23506 = cljs.core._nth.call(null,inst_23499,inst_23501);
var inst_23507 = cljs.core.async.muxch_STAR_.call(null,inst_23506);
var inst_23508 = cljs.core.async.close_BANG_.call(null,inst_23507);
var inst_23509 = (inst_23501 + (1));
var tmp23587 = inst_23499;
var tmp23588 = inst_23500;
var tmp23589 = inst_23498;
var inst_23498__$1 = tmp23589;
var inst_23499__$1 = tmp23587;
var inst_23500__$1 = tmp23588;
var inst_23501__$1 = inst_23509;
var state_23557__$1 = (function (){var statearr_23593 = state_23557;
(statearr_23593[(12)] = inst_23501__$1);

(statearr_23593[(13)] = inst_23499__$1);

(statearr_23593[(17)] = inst_23508);

(statearr_23593[(14)] = inst_23500__$1);

(statearr_23593[(16)] = inst_23498__$1);

return statearr_23593;
})();
var statearr_23594_23634 = state_23557__$1;
(statearr_23594_23634[(2)] = null);

(statearr_23594_23634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (18))){
var inst_23527 = (state_23557[(2)]);
var state_23557__$1 = state_23557;
var statearr_23595_23635 = state_23557__$1;
(statearr_23595_23635[(2)] = inst_23527);

(statearr_23595_23635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23558 === (8))){
var inst_23501 = (state_23557[(12)]);
var inst_23500 = (state_23557[(14)]);
var inst_23503 = (inst_23501 < inst_23500);
var inst_23504 = inst_23503;
var state_23557__$1 = state_23557;
if(cljs.core.truth_(inst_23504)){
var statearr_23596_23636 = state_23557__$1;
(statearr_23596_23636[(1)] = (10));

} else {
var statearr_23597_23637 = state_23557__$1;
(statearr_23597_23637[(1)] = (11));

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
});})(c__21710__auto___23609,mults,ensure_mult,p))
;
return ((function (switch__21598__auto__,c__21710__auto___23609,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21599__auto__ = null;
var cljs$core$async$state_machine__21599__auto____0 = (function (){
var statearr_23601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23601[(0)] = cljs$core$async$state_machine__21599__auto__);

(statearr_23601[(1)] = (1));

return statearr_23601;
});
var cljs$core$async$state_machine__21599__auto____1 = (function (state_23557){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_23557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e23602){if((e23602 instanceof Object)){
var ex__21602__auto__ = e23602;
var statearr_23603_23638 = state_23557;
(statearr_23603_23638[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23639 = state_23557;
state_23557 = G__23639;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$state_machine__21599__auto__ = function(state_23557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21599__auto____1.call(this,state_23557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21599__auto____0;
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21599__auto____1;
return cljs$core$async$state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___23609,mults,ensure_mult,p))
})();
var state__21712__auto__ = (function (){var statearr_23604 = f__21711__auto__.call(null);
(statearr_23604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___23609);

return statearr_23604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___23609,mults,ensure_mult,p))
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
var args23640 = [];
var len__17844__auto___23643 = arguments.length;
var i__17845__auto___23644 = (0);
while(true){
if((i__17845__auto___23644 < len__17844__auto___23643)){
args23640.push((arguments[i__17845__auto___23644]));

var G__23645 = (i__17845__auto___23644 + (1));
i__17845__auto___23644 = G__23645;
continue;
} else {
}
break;
}

var G__23642 = args23640.length;
switch (G__23642) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23640.length)].join('')));

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
var args23647 = [];
var len__17844__auto___23650 = arguments.length;
var i__17845__auto___23651 = (0);
while(true){
if((i__17845__auto___23651 < len__17844__auto___23650)){
args23647.push((arguments[i__17845__auto___23651]));

var G__23652 = (i__17845__auto___23651 + (1));
i__17845__auto___23651 = G__23652;
continue;
} else {
}
break;
}

var G__23649 = args23647.length;
switch (G__23649) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23647.length)].join('')));

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
var args23654 = [];
var len__17844__auto___23725 = arguments.length;
var i__17845__auto___23726 = (0);
while(true){
if((i__17845__auto___23726 < len__17844__auto___23725)){
args23654.push((arguments[i__17845__auto___23726]));

var G__23727 = (i__17845__auto___23726 + (1));
i__17845__auto___23726 = G__23727;
continue;
} else {
}
break;
}

var G__23656 = args23654.length;
switch (G__23656) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23654.length)].join('')));

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
var c__21710__auto___23729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___23729,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___23729,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23695){
var state_val_23696 = (state_23695[(1)]);
if((state_val_23696 === (7))){
var state_23695__$1 = state_23695;
var statearr_23697_23730 = state_23695__$1;
(statearr_23697_23730[(2)] = null);

(statearr_23697_23730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (1))){
var state_23695__$1 = state_23695;
var statearr_23698_23731 = state_23695__$1;
(statearr_23698_23731[(2)] = null);

(statearr_23698_23731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (4))){
var inst_23659 = (state_23695[(7)]);
var inst_23661 = (inst_23659 < cnt);
var state_23695__$1 = state_23695;
if(cljs.core.truth_(inst_23661)){
var statearr_23699_23732 = state_23695__$1;
(statearr_23699_23732[(1)] = (6));

} else {
var statearr_23700_23733 = state_23695__$1;
(statearr_23700_23733[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (15))){
var inst_23691 = (state_23695[(2)]);
var state_23695__$1 = state_23695;
var statearr_23701_23734 = state_23695__$1;
(statearr_23701_23734[(2)] = inst_23691);

(statearr_23701_23734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (13))){
var inst_23684 = cljs.core.async.close_BANG_.call(null,out);
var state_23695__$1 = state_23695;
var statearr_23702_23735 = state_23695__$1;
(statearr_23702_23735[(2)] = inst_23684);

(statearr_23702_23735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (6))){
var state_23695__$1 = state_23695;
var statearr_23703_23736 = state_23695__$1;
(statearr_23703_23736[(2)] = null);

(statearr_23703_23736[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (3))){
var inst_23693 = (state_23695[(2)]);
var state_23695__$1 = state_23695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23695__$1,inst_23693);
} else {
if((state_val_23696 === (12))){
var inst_23681 = (state_23695[(8)]);
var inst_23681__$1 = (state_23695[(2)]);
var inst_23682 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23681__$1);
var state_23695__$1 = (function (){var statearr_23704 = state_23695;
(statearr_23704[(8)] = inst_23681__$1);

return statearr_23704;
})();
if(cljs.core.truth_(inst_23682)){
var statearr_23705_23737 = state_23695__$1;
(statearr_23705_23737[(1)] = (13));

} else {
var statearr_23706_23738 = state_23695__$1;
(statearr_23706_23738[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (2))){
var inst_23658 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23659 = (0);
var state_23695__$1 = (function (){var statearr_23707 = state_23695;
(statearr_23707[(9)] = inst_23658);

(statearr_23707[(7)] = inst_23659);

return statearr_23707;
})();
var statearr_23708_23739 = state_23695__$1;
(statearr_23708_23739[(2)] = null);

(statearr_23708_23739[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (11))){
var inst_23659 = (state_23695[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23695,(10),Object,null,(9));
var inst_23668 = chs__$1.call(null,inst_23659);
var inst_23669 = done.call(null,inst_23659);
var inst_23670 = cljs.core.async.take_BANG_.call(null,inst_23668,inst_23669);
var state_23695__$1 = state_23695;
var statearr_23709_23740 = state_23695__$1;
(statearr_23709_23740[(2)] = inst_23670);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23695__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (9))){
var inst_23659 = (state_23695[(7)]);
var inst_23672 = (state_23695[(2)]);
var inst_23673 = (inst_23659 + (1));
var inst_23659__$1 = inst_23673;
var state_23695__$1 = (function (){var statearr_23710 = state_23695;
(statearr_23710[(7)] = inst_23659__$1);

(statearr_23710[(10)] = inst_23672);

return statearr_23710;
})();
var statearr_23711_23741 = state_23695__$1;
(statearr_23711_23741[(2)] = null);

(statearr_23711_23741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (5))){
var inst_23679 = (state_23695[(2)]);
var state_23695__$1 = (function (){var statearr_23712 = state_23695;
(statearr_23712[(11)] = inst_23679);

return statearr_23712;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23695__$1,(12),dchan);
} else {
if((state_val_23696 === (14))){
var inst_23681 = (state_23695[(8)]);
var inst_23686 = cljs.core.apply.call(null,f,inst_23681);
var state_23695__$1 = state_23695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23695__$1,(16),out,inst_23686);
} else {
if((state_val_23696 === (16))){
var inst_23688 = (state_23695[(2)]);
var state_23695__$1 = (function (){var statearr_23713 = state_23695;
(statearr_23713[(12)] = inst_23688);

return statearr_23713;
})();
var statearr_23714_23742 = state_23695__$1;
(statearr_23714_23742[(2)] = null);

(statearr_23714_23742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (10))){
var inst_23663 = (state_23695[(2)]);
var inst_23664 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23695__$1 = (function (){var statearr_23715 = state_23695;
(statearr_23715[(13)] = inst_23663);

return statearr_23715;
})();
var statearr_23716_23743 = state_23695__$1;
(statearr_23716_23743[(2)] = inst_23664);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23695__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23696 === (8))){
var inst_23677 = (state_23695[(2)]);
var state_23695__$1 = state_23695;
var statearr_23717_23744 = state_23695__$1;
(statearr_23717_23744[(2)] = inst_23677);

(statearr_23717_23744[(1)] = (5));


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
});})(c__21710__auto___23729,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21598__auto__,c__21710__auto___23729,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21599__auto__ = null;
var cljs$core$async$state_machine__21599__auto____0 = (function (){
var statearr_23721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23721[(0)] = cljs$core$async$state_machine__21599__auto__);

(statearr_23721[(1)] = (1));

return statearr_23721;
});
var cljs$core$async$state_machine__21599__auto____1 = (function (state_23695){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_23695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e23722){if((e23722 instanceof Object)){
var ex__21602__auto__ = e23722;
var statearr_23723_23745 = state_23695;
(statearr_23723_23745[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23746 = state_23695;
state_23695 = G__23746;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$state_machine__21599__auto__ = function(state_23695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21599__auto____1.call(this,state_23695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21599__auto____0;
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21599__auto____1;
return cljs$core$async$state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___23729,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21712__auto__ = (function (){var statearr_23724 = f__21711__auto__.call(null);
(statearr_23724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___23729);

return statearr_23724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___23729,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23748 = [];
var len__17844__auto___23804 = arguments.length;
var i__17845__auto___23805 = (0);
while(true){
if((i__17845__auto___23805 < len__17844__auto___23804)){
args23748.push((arguments[i__17845__auto___23805]));

var G__23806 = (i__17845__auto___23805 + (1));
i__17845__auto___23805 = G__23806;
continue;
} else {
}
break;
}

var G__23750 = args23748.length;
switch (G__23750) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23748.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21710__auto___23808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___23808,out){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___23808,out){
return (function (state_23780){
var state_val_23781 = (state_23780[(1)]);
if((state_val_23781 === (7))){
var inst_23759 = (state_23780[(7)]);
var inst_23760 = (state_23780[(8)]);
var inst_23759__$1 = (state_23780[(2)]);
var inst_23760__$1 = cljs.core.nth.call(null,inst_23759__$1,(0),null);
var inst_23761 = cljs.core.nth.call(null,inst_23759__$1,(1),null);
var inst_23762 = (inst_23760__$1 == null);
var state_23780__$1 = (function (){var statearr_23782 = state_23780;
(statearr_23782[(9)] = inst_23761);

(statearr_23782[(7)] = inst_23759__$1);

(statearr_23782[(8)] = inst_23760__$1);

return statearr_23782;
})();
if(cljs.core.truth_(inst_23762)){
var statearr_23783_23809 = state_23780__$1;
(statearr_23783_23809[(1)] = (8));

} else {
var statearr_23784_23810 = state_23780__$1;
(statearr_23784_23810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23781 === (1))){
var inst_23751 = cljs.core.vec.call(null,chs);
var inst_23752 = inst_23751;
var state_23780__$1 = (function (){var statearr_23785 = state_23780;
(statearr_23785[(10)] = inst_23752);

return statearr_23785;
})();
var statearr_23786_23811 = state_23780__$1;
(statearr_23786_23811[(2)] = null);

(statearr_23786_23811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23781 === (4))){
var inst_23752 = (state_23780[(10)]);
var state_23780__$1 = state_23780;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23780__$1,(7),inst_23752);
} else {
if((state_val_23781 === (6))){
var inst_23776 = (state_23780[(2)]);
var state_23780__$1 = state_23780;
var statearr_23787_23812 = state_23780__$1;
(statearr_23787_23812[(2)] = inst_23776);

(statearr_23787_23812[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23781 === (3))){
var inst_23778 = (state_23780[(2)]);
var state_23780__$1 = state_23780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23780__$1,inst_23778);
} else {
if((state_val_23781 === (2))){
var inst_23752 = (state_23780[(10)]);
var inst_23754 = cljs.core.count.call(null,inst_23752);
var inst_23755 = (inst_23754 > (0));
var state_23780__$1 = state_23780;
if(cljs.core.truth_(inst_23755)){
var statearr_23789_23813 = state_23780__$1;
(statearr_23789_23813[(1)] = (4));

} else {
var statearr_23790_23814 = state_23780__$1;
(statearr_23790_23814[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23781 === (11))){
var inst_23752 = (state_23780[(10)]);
var inst_23769 = (state_23780[(2)]);
var tmp23788 = inst_23752;
var inst_23752__$1 = tmp23788;
var state_23780__$1 = (function (){var statearr_23791 = state_23780;
(statearr_23791[(11)] = inst_23769);

(statearr_23791[(10)] = inst_23752__$1);

return statearr_23791;
})();
var statearr_23792_23815 = state_23780__$1;
(statearr_23792_23815[(2)] = null);

(statearr_23792_23815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23781 === (9))){
var inst_23760 = (state_23780[(8)]);
var state_23780__$1 = state_23780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23780__$1,(11),out,inst_23760);
} else {
if((state_val_23781 === (5))){
var inst_23774 = cljs.core.async.close_BANG_.call(null,out);
var state_23780__$1 = state_23780;
var statearr_23793_23816 = state_23780__$1;
(statearr_23793_23816[(2)] = inst_23774);

(statearr_23793_23816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23781 === (10))){
var inst_23772 = (state_23780[(2)]);
var state_23780__$1 = state_23780;
var statearr_23794_23817 = state_23780__$1;
(statearr_23794_23817[(2)] = inst_23772);

(statearr_23794_23817[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23781 === (8))){
var inst_23761 = (state_23780[(9)]);
var inst_23752 = (state_23780[(10)]);
var inst_23759 = (state_23780[(7)]);
var inst_23760 = (state_23780[(8)]);
var inst_23764 = (function (){var cs = inst_23752;
var vec__23757 = inst_23759;
var v = inst_23760;
var c = inst_23761;
return ((function (cs,vec__23757,v,c,inst_23761,inst_23752,inst_23759,inst_23760,state_val_23781,c__21710__auto___23808,out){
return (function (p1__23747_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23747_SHARP_);
});
;})(cs,vec__23757,v,c,inst_23761,inst_23752,inst_23759,inst_23760,state_val_23781,c__21710__auto___23808,out))
})();
var inst_23765 = cljs.core.filterv.call(null,inst_23764,inst_23752);
var inst_23752__$1 = inst_23765;
var state_23780__$1 = (function (){var statearr_23795 = state_23780;
(statearr_23795[(10)] = inst_23752__$1);

return statearr_23795;
})();
var statearr_23796_23818 = state_23780__$1;
(statearr_23796_23818[(2)] = null);

(statearr_23796_23818[(1)] = (2));


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
});})(c__21710__auto___23808,out))
;
return ((function (switch__21598__auto__,c__21710__auto___23808,out){
return (function() {
var cljs$core$async$state_machine__21599__auto__ = null;
var cljs$core$async$state_machine__21599__auto____0 = (function (){
var statearr_23800 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23800[(0)] = cljs$core$async$state_machine__21599__auto__);

(statearr_23800[(1)] = (1));

return statearr_23800;
});
var cljs$core$async$state_machine__21599__auto____1 = (function (state_23780){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_23780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e23801){if((e23801 instanceof Object)){
var ex__21602__auto__ = e23801;
var statearr_23802_23819 = state_23780;
(statearr_23802_23819[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23820 = state_23780;
state_23780 = G__23820;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$state_machine__21599__auto__ = function(state_23780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21599__auto____1.call(this,state_23780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21599__auto____0;
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21599__auto____1;
return cljs$core$async$state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___23808,out))
})();
var state__21712__auto__ = (function (){var statearr_23803 = f__21711__auto__.call(null);
(statearr_23803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___23808);

return statearr_23803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___23808,out))
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
var args23821 = [];
var len__17844__auto___23870 = arguments.length;
var i__17845__auto___23871 = (0);
while(true){
if((i__17845__auto___23871 < len__17844__auto___23870)){
args23821.push((arguments[i__17845__auto___23871]));

var G__23872 = (i__17845__auto___23871 + (1));
i__17845__auto___23871 = G__23872;
continue;
} else {
}
break;
}

var G__23823 = args23821.length;
switch (G__23823) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23821.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21710__auto___23874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___23874,out){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___23874,out){
return (function (state_23847){
var state_val_23848 = (state_23847[(1)]);
if((state_val_23848 === (7))){
var inst_23829 = (state_23847[(7)]);
var inst_23829__$1 = (state_23847[(2)]);
var inst_23830 = (inst_23829__$1 == null);
var inst_23831 = cljs.core.not.call(null,inst_23830);
var state_23847__$1 = (function (){var statearr_23849 = state_23847;
(statearr_23849[(7)] = inst_23829__$1);

return statearr_23849;
})();
if(inst_23831){
var statearr_23850_23875 = state_23847__$1;
(statearr_23850_23875[(1)] = (8));

} else {
var statearr_23851_23876 = state_23847__$1;
(statearr_23851_23876[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23848 === (1))){
var inst_23824 = (0);
var state_23847__$1 = (function (){var statearr_23852 = state_23847;
(statearr_23852[(8)] = inst_23824);

return statearr_23852;
})();
var statearr_23853_23877 = state_23847__$1;
(statearr_23853_23877[(2)] = null);

(statearr_23853_23877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23848 === (4))){
var state_23847__$1 = state_23847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23847__$1,(7),ch);
} else {
if((state_val_23848 === (6))){
var inst_23842 = (state_23847[(2)]);
var state_23847__$1 = state_23847;
var statearr_23854_23878 = state_23847__$1;
(statearr_23854_23878[(2)] = inst_23842);

(statearr_23854_23878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23848 === (3))){
var inst_23844 = (state_23847[(2)]);
var inst_23845 = cljs.core.async.close_BANG_.call(null,out);
var state_23847__$1 = (function (){var statearr_23855 = state_23847;
(statearr_23855[(9)] = inst_23844);

return statearr_23855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23847__$1,inst_23845);
} else {
if((state_val_23848 === (2))){
var inst_23824 = (state_23847[(8)]);
var inst_23826 = (inst_23824 < n);
var state_23847__$1 = state_23847;
if(cljs.core.truth_(inst_23826)){
var statearr_23856_23879 = state_23847__$1;
(statearr_23856_23879[(1)] = (4));

} else {
var statearr_23857_23880 = state_23847__$1;
(statearr_23857_23880[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23848 === (11))){
var inst_23824 = (state_23847[(8)]);
var inst_23834 = (state_23847[(2)]);
var inst_23835 = (inst_23824 + (1));
var inst_23824__$1 = inst_23835;
var state_23847__$1 = (function (){var statearr_23858 = state_23847;
(statearr_23858[(8)] = inst_23824__$1);

(statearr_23858[(10)] = inst_23834);

return statearr_23858;
})();
var statearr_23859_23881 = state_23847__$1;
(statearr_23859_23881[(2)] = null);

(statearr_23859_23881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23848 === (9))){
var state_23847__$1 = state_23847;
var statearr_23860_23882 = state_23847__$1;
(statearr_23860_23882[(2)] = null);

(statearr_23860_23882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23848 === (5))){
var state_23847__$1 = state_23847;
var statearr_23861_23883 = state_23847__$1;
(statearr_23861_23883[(2)] = null);

(statearr_23861_23883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23848 === (10))){
var inst_23839 = (state_23847[(2)]);
var state_23847__$1 = state_23847;
var statearr_23862_23884 = state_23847__$1;
(statearr_23862_23884[(2)] = inst_23839);

(statearr_23862_23884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23848 === (8))){
var inst_23829 = (state_23847[(7)]);
var state_23847__$1 = state_23847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23847__$1,(11),out,inst_23829);
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
});})(c__21710__auto___23874,out))
;
return ((function (switch__21598__auto__,c__21710__auto___23874,out){
return (function() {
var cljs$core$async$state_machine__21599__auto__ = null;
var cljs$core$async$state_machine__21599__auto____0 = (function (){
var statearr_23866 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23866[(0)] = cljs$core$async$state_machine__21599__auto__);

(statearr_23866[(1)] = (1));

return statearr_23866;
});
var cljs$core$async$state_machine__21599__auto____1 = (function (state_23847){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_23847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e23867){if((e23867 instanceof Object)){
var ex__21602__auto__ = e23867;
var statearr_23868_23885 = state_23847;
(statearr_23868_23885[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23886 = state_23847;
state_23847 = G__23886;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$state_machine__21599__auto__ = function(state_23847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21599__auto____1.call(this,state_23847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21599__auto____0;
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21599__auto____1;
return cljs$core$async$state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___23874,out))
})();
var state__21712__auto__ = (function (){var statearr_23869 = f__21711__auto__.call(null);
(statearr_23869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___23874);

return statearr_23869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___23874,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23894 = (function (map_LT_,f,ch,meta23895){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23895 = meta23895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23896,meta23895__$1){
var self__ = this;
var _23896__$1 = this;
return (new cljs.core.async.t_cljs$core$async23894(self__.map_LT_,self__.f,self__.ch,meta23895__$1));
});

cljs.core.async.t_cljs$core$async23894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23896){
var self__ = this;
var _23896__$1 = this;
return self__.meta23895;
});

cljs.core.async.t_cljs$core$async23894.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23894.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23894.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23894.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23894.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23897 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23897 = (function (map_LT_,f,ch,meta23895,_,fn1,meta23898){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23895 = meta23895;
this._ = _;
this.fn1 = fn1;
this.meta23898 = meta23898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23899,meta23898__$1){
var self__ = this;
var _23899__$1 = this;
return (new cljs.core.async.t_cljs$core$async23897(self__.map_LT_,self__.f,self__.ch,self__.meta23895,self__._,self__.fn1,meta23898__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23897.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23899){
var self__ = this;
var _23899__$1 = this;
return self__.meta23898;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23897.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23897.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23897.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23897.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23887_SHARP_){
return f1.call(null,(((p1__23887_SHARP_ == null))?null:self__.f.call(null,p1__23887_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23897.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23895","meta23895",927388853,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23894","cljs.core.async/t_cljs$core$async23894",661572840,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23898","meta23898",-1843666909,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23897.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23897";

cljs.core.async.t_cljs$core$async23897.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23897");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23897 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23897(map_LT___$1,f__$1,ch__$1,meta23895__$1,___$2,fn1__$1,meta23898){
return (new cljs.core.async.t_cljs$core$async23897(map_LT___$1,f__$1,ch__$1,meta23895__$1,___$2,fn1__$1,meta23898));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23897(self__.map_LT_,self__.f,self__.ch,self__.meta23895,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16773__auto__ = ret;
if(cljs.core.truth_(and__16773__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16773__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23894.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23894.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23895","meta23895",927388853,null)], null);
});

cljs.core.async.t_cljs$core$async23894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23894";

cljs.core.async.t_cljs$core$async23894.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23894");
});

cljs.core.async.__GT_t_cljs$core$async23894 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23894(map_LT___$1,f__$1,ch__$1,meta23895){
return (new cljs.core.async.t_cljs$core$async23894(map_LT___$1,f__$1,ch__$1,meta23895));
});

}

return (new cljs.core.async.t_cljs$core$async23894(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23903 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23903 = (function (map_GT_,f,ch,meta23904){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23904 = meta23904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23905,meta23904__$1){
var self__ = this;
var _23905__$1 = this;
return (new cljs.core.async.t_cljs$core$async23903(self__.map_GT_,self__.f,self__.ch,meta23904__$1));
});

cljs.core.async.t_cljs$core$async23903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23905){
var self__ = this;
var _23905__$1 = this;
return self__.meta23904;
});

cljs.core.async.t_cljs$core$async23903.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23903.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23903.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23903.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23903.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23903.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23904","meta23904",-1834366433,null)], null);
});

cljs.core.async.t_cljs$core$async23903.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23903";

cljs.core.async.t_cljs$core$async23903.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23903");
});

cljs.core.async.__GT_t_cljs$core$async23903 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23903(map_GT___$1,f__$1,ch__$1,meta23904){
return (new cljs.core.async.t_cljs$core$async23903(map_GT___$1,f__$1,ch__$1,meta23904));
});

}

return (new cljs.core.async.t_cljs$core$async23903(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23909 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23909 = (function (filter_GT_,p,ch,meta23910){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23910 = meta23910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23911,meta23910__$1){
var self__ = this;
var _23911__$1 = this;
return (new cljs.core.async.t_cljs$core$async23909(self__.filter_GT_,self__.p,self__.ch,meta23910__$1));
});

cljs.core.async.t_cljs$core$async23909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23911){
var self__ = this;
var _23911__$1 = this;
return self__.meta23910;
});

cljs.core.async.t_cljs$core$async23909.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23909.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23909.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23909.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23909.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23909.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23909.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23910","meta23910",-370567960,null)], null);
});

cljs.core.async.t_cljs$core$async23909.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23909.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23909";

cljs.core.async.t_cljs$core$async23909.cljs$lang$ctorPrWriter = (function (this__17383__auto__,writer__17384__auto__,opt__17385__auto__){
return cljs.core._write.call(null,writer__17384__auto__,"cljs.core.async/t_cljs$core$async23909");
});

cljs.core.async.__GT_t_cljs$core$async23909 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23909(filter_GT___$1,p__$1,ch__$1,meta23910){
return (new cljs.core.async.t_cljs$core$async23909(filter_GT___$1,p__$1,ch__$1,meta23910));
});

}

return (new cljs.core.async.t_cljs$core$async23909(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23912 = [];
var len__17844__auto___23956 = arguments.length;
var i__17845__auto___23957 = (0);
while(true){
if((i__17845__auto___23957 < len__17844__auto___23956)){
args23912.push((arguments[i__17845__auto___23957]));

var G__23958 = (i__17845__auto___23957 + (1));
i__17845__auto___23957 = G__23958;
continue;
} else {
}
break;
}

var G__23914 = args23912.length;
switch (G__23914) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23912.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21710__auto___23960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___23960,out){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___23960,out){
return (function (state_23935){
var state_val_23936 = (state_23935[(1)]);
if((state_val_23936 === (7))){
var inst_23931 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_23937_23961 = state_23935__$1;
(statearr_23937_23961[(2)] = inst_23931);

(statearr_23937_23961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (1))){
var state_23935__$1 = state_23935;
var statearr_23938_23962 = state_23935__$1;
(statearr_23938_23962[(2)] = null);

(statearr_23938_23962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (4))){
var inst_23917 = (state_23935[(7)]);
var inst_23917__$1 = (state_23935[(2)]);
var inst_23918 = (inst_23917__$1 == null);
var state_23935__$1 = (function (){var statearr_23939 = state_23935;
(statearr_23939[(7)] = inst_23917__$1);

return statearr_23939;
})();
if(cljs.core.truth_(inst_23918)){
var statearr_23940_23963 = state_23935__$1;
(statearr_23940_23963[(1)] = (5));

} else {
var statearr_23941_23964 = state_23935__$1;
(statearr_23941_23964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (6))){
var inst_23917 = (state_23935[(7)]);
var inst_23922 = p.call(null,inst_23917);
var state_23935__$1 = state_23935;
if(cljs.core.truth_(inst_23922)){
var statearr_23942_23965 = state_23935__$1;
(statearr_23942_23965[(1)] = (8));

} else {
var statearr_23943_23966 = state_23935__$1;
(statearr_23943_23966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (3))){
var inst_23933 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23935__$1,inst_23933);
} else {
if((state_val_23936 === (2))){
var state_23935__$1 = state_23935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23935__$1,(4),ch);
} else {
if((state_val_23936 === (11))){
var inst_23925 = (state_23935[(2)]);
var state_23935__$1 = state_23935;
var statearr_23944_23967 = state_23935__$1;
(statearr_23944_23967[(2)] = inst_23925);

(statearr_23944_23967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (9))){
var state_23935__$1 = state_23935;
var statearr_23945_23968 = state_23935__$1;
(statearr_23945_23968[(2)] = null);

(statearr_23945_23968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (5))){
var inst_23920 = cljs.core.async.close_BANG_.call(null,out);
var state_23935__$1 = state_23935;
var statearr_23946_23969 = state_23935__$1;
(statearr_23946_23969[(2)] = inst_23920);

(statearr_23946_23969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (10))){
var inst_23928 = (state_23935[(2)]);
var state_23935__$1 = (function (){var statearr_23947 = state_23935;
(statearr_23947[(8)] = inst_23928);

return statearr_23947;
})();
var statearr_23948_23970 = state_23935__$1;
(statearr_23948_23970[(2)] = null);

(statearr_23948_23970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23936 === (8))){
var inst_23917 = (state_23935[(7)]);
var state_23935__$1 = state_23935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23935__$1,(11),out,inst_23917);
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
});})(c__21710__auto___23960,out))
;
return ((function (switch__21598__auto__,c__21710__auto___23960,out){
return (function() {
var cljs$core$async$state_machine__21599__auto__ = null;
var cljs$core$async$state_machine__21599__auto____0 = (function (){
var statearr_23952 = [null,null,null,null,null,null,null,null,null];
(statearr_23952[(0)] = cljs$core$async$state_machine__21599__auto__);

(statearr_23952[(1)] = (1));

return statearr_23952;
});
var cljs$core$async$state_machine__21599__auto____1 = (function (state_23935){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_23935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e23953){if((e23953 instanceof Object)){
var ex__21602__auto__ = e23953;
var statearr_23954_23971 = state_23935;
(statearr_23954_23971[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23972 = state_23935;
state_23935 = G__23972;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$state_machine__21599__auto__ = function(state_23935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21599__auto____1.call(this,state_23935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21599__auto____0;
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21599__auto____1;
return cljs$core$async$state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___23960,out))
})();
var state__21712__auto__ = (function (){var statearr_23955 = f__21711__auto__.call(null);
(statearr_23955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___23960);

return statearr_23955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___23960,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23973 = [];
var len__17844__auto___23976 = arguments.length;
var i__17845__auto___23977 = (0);
while(true){
if((i__17845__auto___23977 < len__17844__auto___23976)){
args23973.push((arguments[i__17845__auto___23977]));

var G__23978 = (i__17845__auto___23977 + (1));
i__17845__auto___23977 = G__23978;
continue;
} else {
}
break;
}

var G__23975 = args23973.length;
switch (G__23975) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23973.length)].join('')));

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
var c__21710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto__){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto__){
return (function (state_24145){
var state_val_24146 = (state_24145[(1)]);
if((state_val_24146 === (7))){
var inst_24141 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24147_24188 = state_24145__$1;
(statearr_24147_24188[(2)] = inst_24141);

(statearr_24147_24188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (20))){
var inst_24111 = (state_24145[(7)]);
var inst_24122 = (state_24145[(2)]);
var inst_24123 = cljs.core.next.call(null,inst_24111);
var inst_24097 = inst_24123;
var inst_24098 = null;
var inst_24099 = (0);
var inst_24100 = (0);
var state_24145__$1 = (function (){var statearr_24148 = state_24145;
(statearr_24148[(8)] = inst_24099);

(statearr_24148[(9)] = inst_24097);

(statearr_24148[(10)] = inst_24122);

(statearr_24148[(11)] = inst_24098);

(statearr_24148[(12)] = inst_24100);

return statearr_24148;
})();
var statearr_24149_24189 = state_24145__$1;
(statearr_24149_24189[(2)] = null);

(statearr_24149_24189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (1))){
var state_24145__$1 = state_24145;
var statearr_24150_24190 = state_24145__$1;
(statearr_24150_24190[(2)] = null);

(statearr_24150_24190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (4))){
var inst_24086 = (state_24145[(13)]);
var inst_24086__$1 = (state_24145[(2)]);
var inst_24087 = (inst_24086__$1 == null);
var state_24145__$1 = (function (){var statearr_24151 = state_24145;
(statearr_24151[(13)] = inst_24086__$1);

return statearr_24151;
})();
if(cljs.core.truth_(inst_24087)){
var statearr_24152_24191 = state_24145__$1;
(statearr_24152_24191[(1)] = (5));

} else {
var statearr_24153_24192 = state_24145__$1;
(statearr_24153_24192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (15))){
var state_24145__$1 = state_24145;
var statearr_24157_24193 = state_24145__$1;
(statearr_24157_24193[(2)] = null);

(statearr_24157_24193[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (21))){
var state_24145__$1 = state_24145;
var statearr_24158_24194 = state_24145__$1;
(statearr_24158_24194[(2)] = null);

(statearr_24158_24194[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (13))){
var inst_24099 = (state_24145[(8)]);
var inst_24097 = (state_24145[(9)]);
var inst_24098 = (state_24145[(11)]);
var inst_24100 = (state_24145[(12)]);
var inst_24107 = (state_24145[(2)]);
var inst_24108 = (inst_24100 + (1));
var tmp24154 = inst_24099;
var tmp24155 = inst_24097;
var tmp24156 = inst_24098;
var inst_24097__$1 = tmp24155;
var inst_24098__$1 = tmp24156;
var inst_24099__$1 = tmp24154;
var inst_24100__$1 = inst_24108;
var state_24145__$1 = (function (){var statearr_24159 = state_24145;
(statearr_24159[(8)] = inst_24099__$1);

(statearr_24159[(9)] = inst_24097__$1);

(statearr_24159[(14)] = inst_24107);

(statearr_24159[(11)] = inst_24098__$1);

(statearr_24159[(12)] = inst_24100__$1);

return statearr_24159;
})();
var statearr_24160_24195 = state_24145__$1;
(statearr_24160_24195[(2)] = null);

(statearr_24160_24195[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (22))){
var state_24145__$1 = state_24145;
var statearr_24161_24196 = state_24145__$1;
(statearr_24161_24196[(2)] = null);

(statearr_24161_24196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (6))){
var inst_24086 = (state_24145[(13)]);
var inst_24095 = f.call(null,inst_24086);
var inst_24096 = cljs.core.seq.call(null,inst_24095);
var inst_24097 = inst_24096;
var inst_24098 = null;
var inst_24099 = (0);
var inst_24100 = (0);
var state_24145__$1 = (function (){var statearr_24162 = state_24145;
(statearr_24162[(8)] = inst_24099);

(statearr_24162[(9)] = inst_24097);

(statearr_24162[(11)] = inst_24098);

(statearr_24162[(12)] = inst_24100);

return statearr_24162;
})();
var statearr_24163_24197 = state_24145__$1;
(statearr_24163_24197[(2)] = null);

(statearr_24163_24197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (17))){
var inst_24111 = (state_24145[(7)]);
var inst_24115 = cljs.core.chunk_first.call(null,inst_24111);
var inst_24116 = cljs.core.chunk_rest.call(null,inst_24111);
var inst_24117 = cljs.core.count.call(null,inst_24115);
var inst_24097 = inst_24116;
var inst_24098 = inst_24115;
var inst_24099 = inst_24117;
var inst_24100 = (0);
var state_24145__$1 = (function (){var statearr_24164 = state_24145;
(statearr_24164[(8)] = inst_24099);

(statearr_24164[(9)] = inst_24097);

(statearr_24164[(11)] = inst_24098);

(statearr_24164[(12)] = inst_24100);

return statearr_24164;
})();
var statearr_24165_24198 = state_24145__$1;
(statearr_24165_24198[(2)] = null);

(statearr_24165_24198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (3))){
var inst_24143 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24145__$1,inst_24143);
} else {
if((state_val_24146 === (12))){
var inst_24131 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24166_24199 = state_24145__$1;
(statearr_24166_24199[(2)] = inst_24131);

(statearr_24166_24199[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (2))){
var state_24145__$1 = state_24145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24145__$1,(4),in$);
} else {
if((state_val_24146 === (23))){
var inst_24139 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24167_24200 = state_24145__$1;
(statearr_24167_24200[(2)] = inst_24139);

(statearr_24167_24200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (19))){
var inst_24126 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24168_24201 = state_24145__$1;
(statearr_24168_24201[(2)] = inst_24126);

(statearr_24168_24201[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (11))){
var inst_24097 = (state_24145[(9)]);
var inst_24111 = (state_24145[(7)]);
var inst_24111__$1 = cljs.core.seq.call(null,inst_24097);
var state_24145__$1 = (function (){var statearr_24169 = state_24145;
(statearr_24169[(7)] = inst_24111__$1);

return statearr_24169;
})();
if(inst_24111__$1){
var statearr_24170_24202 = state_24145__$1;
(statearr_24170_24202[(1)] = (14));

} else {
var statearr_24171_24203 = state_24145__$1;
(statearr_24171_24203[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (9))){
var inst_24133 = (state_24145[(2)]);
var inst_24134 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24145__$1 = (function (){var statearr_24172 = state_24145;
(statearr_24172[(15)] = inst_24133);

return statearr_24172;
})();
if(cljs.core.truth_(inst_24134)){
var statearr_24173_24204 = state_24145__$1;
(statearr_24173_24204[(1)] = (21));

} else {
var statearr_24174_24205 = state_24145__$1;
(statearr_24174_24205[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (5))){
var inst_24089 = cljs.core.async.close_BANG_.call(null,out);
var state_24145__$1 = state_24145;
var statearr_24175_24206 = state_24145__$1;
(statearr_24175_24206[(2)] = inst_24089);

(statearr_24175_24206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (14))){
var inst_24111 = (state_24145[(7)]);
var inst_24113 = cljs.core.chunked_seq_QMARK_.call(null,inst_24111);
var state_24145__$1 = state_24145;
if(inst_24113){
var statearr_24176_24207 = state_24145__$1;
(statearr_24176_24207[(1)] = (17));

} else {
var statearr_24177_24208 = state_24145__$1;
(statearr_24177_24208[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (16))){
var inst_24129 = (state_24145[(2)]);
var state_24145__$1 = state_24145;
var statearr_24178_24209 = state_24145__$1;
(statearr_24178_24209[(2)] = inst_24129);

(statearr_24178_24209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24146 === (10))){
var inst_24098 = (state_24145[(11)]);
var inst_24100 = (state_24145[(12)]);
var inst_24105 = cljs.core._nth.call(null,inst_24098,inst_24100);
var state_24145__$1 = state_24145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24145__$1,(13),out,inst_24105);
} else {
if((state_val_24146 === (18))){
var inst_24111 = (state_24145[(7)]);
var inst_24120 = cljs.core.first.call(null,inst_24111);
var state_24145__$1 = state_24145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24145__$1,(20),out,inst_24120);
} else {
if((state_val_24146 === (8))){
var inst_24099 = (state_24145[(8)]);
var inst_24100 = (state_24145[(12)]);
var inst_24102 = (inst_24100 < inst_24099);
var inst_24103 = inst_24102;
var state_24145__$1 = state_24145;
if(cljs.core.truth_(inst_24103)){
var statearr_24179_24210 = state_24145__$1;
(statearr_24179_24210[(1)] = (10));

} else {
var statearr_24180_24211 = state_24145__$1;
(statearr_24180_24211[(1)] = (11));

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
});})(c__21710__auto__))
;
return ((function (switch__21598__auto__,c__21710__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21599__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21599__auto____0 = (function (){
var statearr_24184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24184[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21599__auto__);

(statearr_24184[(1)] = (1));

return statearr_24184;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21599__auto____1 = (function (state_24145){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_24145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e24185){if((e24185 instanceof Object)){
var ex__21602__auto__ = e24185;
var statearr_24186_24212 = state_24145;
(statearr_24186_24212[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24213 = state_24145;
state_24145 = G__24213;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21599__auto__ = function(state_24145){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21599__auto____1.call(this,state_24145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21599__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21599__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto__))
})();
var state__21712__auto__ = (function (){var statearr_24187 = f__21711__auto__.call(null);
(statearr_24187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto__);

return statearr_24187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto__))
);

return c__21710__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24214 = [];
var len__17844__auto___24217 = arguments.length;
var i__17845__auto___24218 = (0);
while(true){
if((i__17845__auto___24218 < len__17844__auto___24217)){
args24214.push((arguments[i__17845__auto___24218]));

var G__24219 = (i__17845__auto___24218 + (1));
i__17845__auto___24218 = G__24219;
continue;
} else {
}
break;
}

var G__24216 = args24214.length;
switch (G__24216) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24214.length)].join('')));

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
var args24221 = [];
var len__17844__auto___24224 = arguments.length;
var i__17845__auto___24225 = (0);
while(true){
if((i__17845__auto___24225 < len__17844__auto___24224)){
args24221.push((arguments[i__17845__auto___24225]));

var G__24226 = (i__17845__auto___24225 + (1));
i__17845__auto___24225 = G__24226;
continue;
} else {
}
break;
}

var G__24223 = args24221.length;
switch (G__24223) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24221.length)].join('')));

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
var args24228 = [];
var len__17844__auto___24279 = arguments.length;
var i__17845__auto___24280 = (0);
while(true){
if((i__17845__auto___24280 < len__17844__auto___24279)){
args24228.push((arguments[i__17845__auto___24280]));

var G__24281 = (i__17845__auto___24280 + (1));
i__17845__auto___24280 = G__24281;
continue;
} else {
}
break;
}

var G__24230 = args24228.length;
switch (G__24230) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24228.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21710__auto___24283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___24283,out){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___24283,out){
return (function (state_24254){
var state_val_24255 = (state_24254[(1)]);
if((state_val_24255 === (7))){
var inst_24249 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24256_24284 = state_24254__$1;
(statearr_24256_24284[(2)] = inst_24249);

(statearr_24256_24284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (1))){
var inst_24231 = null;
var state_24254__$1 = (function (){var statearr_24257 = state_24254;
(statearr_24257[(7)] = inst_24231);

return statearr_24257;
})();
var statearr_24258_24285 = state_24254__$1;
(statearr_24258_24285[(2)] = null);

(statearr_24258_24285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (4))){
var inst_24234 = (state_24254[(8)]);
var inst_24234__$1 = (state_24254[(2)]);
var inst_24235 = (inst_24234__$1 == null);
var inst_24236 = cljs.core.not.call(null,inst_24235);
var state_24254__$1 = (function (){var statearr_24259 = state_24254;
(statearr_24259[(8)] = inst_24234__$1);

return statearr_24259;
})();
if(inst_24236){
var statearr_24260_24286 = state_24254__$1;
(statearr_24260_24286[(1)] = (5));

} else {
var statearr_24261_24287 = state_24254__$1;
(statearr_24261_24287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (6))){
var state_24254__$1 = state_24254;
var statearr_24262_24288 = state_24254__$1;
(statearr_24262_24288[(2)] = null);

(statearr_24262_24288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (3))){
var inst_24251 = (state_24254[(2)]);
var inst_24252 = cljs.core.async.close_BANG_.call(null,out);
var state_24254__$1 = (function (){var statearr_24263 = state_24254;
(statearr_24263[(9)] = inst_24251);

return statearr_24263;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24254__$1,inst_24252);
} else {
if((state_val_24255 === (2))){
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24254__$1,(4),ch);
} else {
if((state_val_24255 === (11))){
var inst_24234 = (state_24254[(8)]);
var inst_24243 = (state_24254[(2)]);
var inst_24231 = inst_24234;
var state_24254__$1 = (function (){var statearr_24264 = state_24254;
(statearr_24264[(10)] = inst_24243);

(statearr_24264[(7)] = inst_24231);

return statearr_24264;
})();
var statearr_24265_24289 = state_24254__$1;
(statearr_24265_24289[(2)] = null);

(statearr_24265_24289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (9))){
var inst_24234 = (state_24254[(8)]);
var state_24254__$1 = state_24254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24254__$1,(11),out,inst_24234);
} else {
if((state_val_24255 === (5))){
var inst_24234 = (state_24254[(8)]);
var inst_24231 = (state_24254[(7)]);
var inst_24238 = cljs.core._EQ_.call(null,inst_24234,inst_24231);
var state_24254__$1 = state_24254;
if(inst_24238){
var statearr_24267_24290 = state_24254__$1;
(statearr_24267_24290[(1)] = (8));

} else {
var statearr_24268_24291 = state_24254__$1;
(statearr_24268_24291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (10))){
var inst_24246 = (state_24254[(2)]);
var state_24254__$1 = state_24254;
var statearr_24269_24292 = state_24254__$1;
(statearr_24269_24292[(2)] = inst_24246);

(statearr_24269_24292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24255 === (8))){
var inst_24231 = (state_24254[(7)]);
var tmp24266 = inst_24231;
var inst_24231__$1 = tmp24266;
var state_24254__$1 = (function (){var statearr_24270 = state_24254;
(statearr_24270[(7)] = inst_24231__$1);

return statearr_24270;
})();
var statearr_24271_24293 = state_24254__$1;
(statearr_24271_24293[(2)] = null);

(statearr_24271_24293[(1)] = (2));


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
});})(c__21710__auto___24283,out))
;
return ((function (switch__21598__auto__,c__21710__auto___24283,out){
return (function() {
var cljs$core$async$state_machine__21599__auto__ = null;
var cljs$core$async$state_machine__21599__auto____0 = (function (){
var statearr_24275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24275[(0)] = cljs$core$async$state_machine__21599__auto__);

(statearr_24275[(1)] = (1));

return statearr_24275;
});
var cljs$core$async$state_machine__21599__auto____1 = (function (state_24254){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_24254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e24276){if((e24276 instanceof Object)){
var ex__21602__auto__ = e24276;
var statearr_24277_24294 = state_24254;
(statearr_24277_24294[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24295 = state_24254;
state_24254 = G__24295;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$state_machine__21599__auto__ = function(state_24254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21599__auto____1.call(this,state_24254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21599__auto____0;
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21599__auto____1;
return cljs$core$async$state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___24283,out))
})();
var state__21712__auto__ = (function (){var statearr_24278 = f__21711__auto__.call(null);
(statearr_24278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___24283);

return statearr_24278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___24283,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24296 = [];
var len__17844__auto___24366 = arguments.length;
var i__17845__auto___24367 = (0);
while(true){
if((i__17845__auto___24367 < len__17844__auto___24366)){
args24296.push((arguments[i__17845__auto___24367]));

var G__24368 = (i__17845__auto___24367 + (1));
i__17845__auto___24367 = G__24368;
continue;
} else {
}
break;
}

var G__24298 = args24296.length;
switch (G__24298) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24296.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21710__auto___24370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___24370,out){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___24370,out){
return (function (state_24336){
var state_val_24337 = (state_24336[(1)]);
if((state_val_24337 === (7))){
var inst_24332 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24338_24371 = state_24336__$1;
(statearr_24338_24371[(2)] = inst_24332);

(statearr_24338_24371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (1))){
var inst_24299 = (new Array(n));
var inst_24300 = inst_24299;
var inst_24301 = (0);
var state_24336__$1 = (function (){var statearr_24339 = state_24336;
(statearr_24339[(7)] = inst_24301);

(statearr_24339[(8)] = inst_24300);

return statearr_24339;
})();
var statearr_24340_24372 = state_24336__$1;
(statearr_24340_24372[(2)] = null);

(statearr_24340_24372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (4))){
var inst_24304 = (state_24336[(9)]);
var inst_24304__$1 = (state_24336[(2)]);
var inst_24305 = (inst_24304__$1 == null);
var inst_24306 = cljs.core.not.call(null,inst_24305);
var state_24336__$1 = (function (){var statearr_24341 = state_24336;
(statearr_24341[(9)] = inst_24304__$1);

return statearr_24341;
})();
if(inst_24306){
var statearr_24342_24373 = state_24336__$1;
(statearr_24342_24373[(1)] = (5));

} else {
var statearr_24343_24374 = state_24336__$1;
(statearr_24343_24374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (15))){
var inst_24326 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24344_24375 = state_24336__$1;
(statearr_24344_24375[(2)] = inst_24326);

(statearr_24344_24375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (13))){
var state_24336__$1 = state_24336;
var statearr_24345_24376 = state_24336__$1;
(statearr_24345_24376[(2)] = null);

(statearr_24345_24376[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (6))){
var inst_24301 = (state_24336[(7)]);
var inst_24322 = (inst_24301 > (0));
var state_24336__$1 = state_24336;
if(cljs.core.truth_(inst_24322)){
var statearr_24346_24377 = state_24336__$1;
(statearr_24346_24377[(1)] = (12));

} else {
var statearr_24347_24378 = state_24336__$1;
(statearr_24347_24378[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (3))){
var inst_24334 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24336__$1,inst_24334);
} else {
if((state_val_24337 === (12))){
var inst_24300 = (state_24336[(8)]);
var inst_24324 = cljs.core.vec.call(null,inst_24300);
var state_24336__$1 = state_24336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24336__$1,(15),out,inst_24324);
} else {
if((state_val_24337 === (2))){
var state_24336__$1 = state_24336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24336__$1,(4),ch);
} else {
if((state_val_24337 === (11))){
var inst_24316 = (state_24336[(2)]);
var inst_24317 = (new Array(n));
var inst_24300 = inst_24317;
var inst_24301 = (0);
var state_24336__$1 = (function (){var statearr_24348 = state_24336;
(statearr_24348[(7)] = inst_24301);

(statearr_24348[(8)] = inst_24300);

(statearr_24348[(10)] = inst_24316);

return statearr_24348;
})();
var statearr_24349_24379 = state_24336__$1;
(statearr_24349_24379[(2)] = null);

(statearr_24349_24379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (9))){
var inst_24300 = (state_24336[(8)]);
var inst_24314 = cljs.core.vec.call(null,inst_24300);
var state_24336__$1 = state_24336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24336__$1,(11),out,inst_24314);
} else {
if((state_val_24337 === (5))){
var inst_24301 = (state_24336[(7)]);
var inst_24304 = (state_24336[(9)]);
var inst_24300 = (state_24336[(8)]);
var inst_24309 = (state_24336[(11)]);
var inst_24308 = (inst_24300[inst_24301] = inst_24304);
var inst_24309__$1 = (inst_24301 + (1));
var inst_24310 = (inst_24309__$1 < n);
var state_24336__$1 = (function (){var statearr_24350 = state_24336;
(statearr_24350[(12)] = inst_24308);

(statearr_24350[(11)] = inst_24309__$1);

return statearr_24350;
})();
if(cljs.core.truth_(inst_24310)){
var statearr_24351_24380 = state_24336__$1;
(statearr_24351_24380[(1)] = (8));

} else {
var statearr_24352_24381 = state_24336__$1;
(statearr_24352_24381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (14))){
var inst_24329 = (state_24336[(2)]);
var inst_24330 = cljs.core.async.close_BANG_.call(null,out);
var state_24336__$1 = (function (){var statearr_24354 = state_24336;
(statearr_24354[(13)] = inst_24329);

return statearr_24354;
})();
var statearr_24355_24382 = state_24336__$1;
(statearr_24355_24382[(2)] = inst_24330);

(statearr_24355_24382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (10))){
var inst_24320 = (state_24336[(2)]);
var state_24336__$1 = state_24336;
var statearr_24356_24383 = state_24336__$1;
(statearr_24356_24383[(2)] = inst_24320);

(statearr_24356_24383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24337 === (8))){
var inst_24300 = (state_24336[(8)]);
var inst_24309 = (state_24336[(11)]);
var tmp24353 = inst_24300;
var inst_24300__$1 = tmp24353;
var inst_24301 = inst_24309;
var state_24336__$1 = (function (){var statearr_24357 = state_24336;
(statearr_24357[(7)] = inst_24301);

(statearr_24357[(8)] = inst_24300__$1);

return statearr_24357;
})();
var statearr_24358_24384 = state_24336__$1;
(statearr_24358_24384[(2)] = null);

(statearr_24358_24384[(1)] = (2));


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
});})(c__21710__auto___24370,out))
;
return ((function (switch__21598__auto__,c__21710__auto___24370,out){
return (function() {
var cljs$core$async$state_machine__21599__auto__ = null;
var cljs$core$async$state_machine__21599__auto____0 = (function (){
var statearr_24362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24362[(0)] = cljs$core$async$state_machine__21599__auto__);

(statearr_24362[(1)] = (1));

return statearr_24362;
});
var cljs$core$async$state_machine__21599__auto____1 = (function (state_24336){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_24336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e24363){if((e24363 instanceof Object)){
var ex__21602__auto__ = e24363;
var statearr_24364_24385 = state_24336;
(statearr_24364_24385[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24386 = state_24336;
state_24336 = G__24386;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$state_machine__21599__auto__ = function(state_24336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21599__auto____1.call(this,state_24336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21599__auto____0;
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21599__auto____1;
return cljs$core$async$state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___24370,out))
})();
var state__21712__auto__ = (function (){var statearr_24365 = f__21711__auto__.call(null);
(statearr_24365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___24370);

return statearr_24365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___24370,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24387 = [];
var len__17844__auto___24461 = arguments.length;
var i__17845__auto___24462 = (0);
while(true){
if((i__17845__auto___24462 < len__17844__auto___24461)){
args24387.push((arguments[i__17845__auto___24462]));

var G__24463 = (i__17845__auto___24462 + (1));
i__17845__auto___24462 = G__24463;
continue;
} else {
}
break;
}

var G__24389 = args24387.length;
switch (G__24389) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24387.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21710__auto___24465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___24465,out){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___24465,out){
return (function (state_24431){
var state_val_24432 = (state_24431[(1)]);
if((state_val_24432 === (7))){
var inst_24427 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
var statearr_24433_24466 = state_24431__$1;
(statearr_24433_24466[(2)] = inst_24427);

(statearr_24433_24466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (1))){
var inst_24390 = [];
var inst_24391 = inst_24390;
var inst_24392 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24431__$1 = (function (){var statearr_24434 = state_24431;
(statearr_24434[(7)] = inst_24392);

(statearr_24434[(8)] = inst_24391);

return statearr_24434;
})();
var statearr_24435_24467 = state_24431__$1;
(statearr_24435_24467[(2)] = null);

(statearr_24435_24467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (4))){
var inst_24395 = (state_24431[(9)]);
var inst_24395__$1 = (state_24431[(2)]);
var inst_24396 = (inst_24395__$1 == null);
var inst_24397 = cljs.core.not.call(null,inst_24396);
var state_24431__$1 = (function (){var statearr_24436 = state_24431;
(statearr_24436[(9)] = inst_24395__$1);

return statearr_24436;
})();
if(inst_24397){
var statearr_24437_24468 = state_24431__$1;
(statearr_24437_24468[(1)] = (5));

} else {
var statearr_24438_24469 = state_24431__$1;
(statearr_24438_24469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (15))){
var inst_24421 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
var statearr_24439_24470 = state_24431__$1;
(statearr_24439_24470[(2)] = inst_24421);

(statearr_24439_24470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (13))){
var state_24431__$1 = state_24431;
var statearr_24440_24471 = state_24431__$1;
(statearr_24440_24471[(2)] = null);

(statearr_24440_24471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (6))){
var inst_24391 = (state_24431[(8)]);
var inst_24416 = inst_24391.length;
var inst_24417 = (inst_24416 > (0));
var state_24431__$1 = state_24431;
if(cljs.core.truth_(inst_24417)){
var statearr_24441_24472 = state_24431__$1;
(statearr_24441_24472[(1)] = (12));

} else {
var statearr_24442_24473 = state_24431__$1;
(statearr_24442_24473[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (3))){
var inst_24429 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24431__$1,inst_24429);
} else {
if((state_val_24432 === (12))){
var inst_24391 = (state_24431[(8)]);
var inst_24419 = cljs.core.vec.call(null,inst_24391);
var state_24431__$1 = state_24431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24431__$1,(15),out,inst_24419);
} else {
if((state_val_24432 === (2))){
var state_24431__$1 = state_24431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24431__$1,(4),ch);
} else {
if((state_val_24432 === (11))){
var inst_24399 = (state_24431[(10)]);
var inst_24395 = (state_24431[(9)]);
var inst_24409 = (state_24431[(2)]);
var inst_24410 = [];
var inst_24411 = inst_24410.push(inst_24395);
var inst_24391 = inst_24410;
var inst_24392 = inst_24399;
var state_24431__$1 = (function (){var statearr_24443 = state_24431;
(statearr_24443[(11)] = inst_24411);

(statearr_24443[(12)] = inst_24409);

(statearr_24443[(7)] = inst_24392);

(statearr_24443[(8)] = inst_24391);

return statearr_24443;
})();
var statearr_24444_24474 = state_24431__$1;
(statearr_24444_24474[(2)] = null);

(statearr_24444_24474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (9))){
var inst_24391 = (state_24431[(8)]);
var inst_24407 = cljs.core.vec.call(null,inst_24391);
var state_24431__$1 = state_24431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24431__$1,(11),out,inst_24407);
} else {
if((state_val_24432 === (5))){
var inst_24392 = (state_24431[(7)]);
var inst_24399 = (state_24431[(10)]);
var inst_24395 = (state_24431[(9)]);
var inst_24399__$1 = f.call(null,inst_24395);
var inst_24400 = cljs.core._EQ_.call(null,inst_24399__$1,inst_24392);
var inst_24401 = cljs.core.keyword_identical_QMARK_.call(null,inst_24392,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24402 = (inst_24400) || (inst_24401);
var state_24431__$1 = (function (){var statearr_24445 = state_24431;
(statearr_24445[(10)] = inst_24399__$1);

return statearr_24445;
})();
if(cljs.core.truth_(inst_24402)){
var statearr_24446_24475 = state_24431__$1;
(statearr_24446_24475[(1)] = (8));

} else {
var statearr_24447_24476 = state_24431__$1;
(statearr_24447_24476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (14))){
var inst_24424 = (state_24431[(2)]);
var inst_24425 = cljs.core.async.close_BANG_.call(null,out);
var state_24431__$1 = (function (){var statearr_24449 = state_24431;
(statearr_24449[(13)] = inst_24424);

return statearr_24449;
})();
var statearr_24450_24477 = state_24431__$1;
(statearr_24450_24477[(2)] = inst_24425);

(statearr_24450_24477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (10))){
var inst_24414 = (state_24431[(2)]);
var state_24431__$1 = state_24431;
var statearr_24451_24478 = state_24431__$1;
(statearr_24451_24478[(2)] = inst_24414);

(statearr_24451_24478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24432 === (8))){
var inst_24391 = (state_24431[(8)]);
var inst_24399 = (state_24431[(10)]);
var inst_24395 = (state_24431[(9)]);
var inst_24404 = inst_24391.push(inst_24395);
var tmp24448 = inst_24391;
var inst_24391__$1 = tmp24448;
var inst_24392 = inst_24399;
var state_24431__$1 = (function (){var statearr_24452 = state_24431;
(statearr_24452[(7)] = inst_24392);

(statearr_24452[(8)] = inst_24391__$1);

(statearr_24452[(14)] = inst_24404);

return statearr_24452;
})();
var statearr_24453_24479 = state_24431__$1;
(statearr_24453_24479[(2)] = null);

(statearr_24453_24479[(1)] = (2));


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
});})(c__21710__auto___24465,out))
;
return ((function (switch__21598__auto__,c__21710__auto___24465,out){
return (function() {
var cljs$core$async$state_machine__21599__auto__ = null;
var cljs$core$async$state_machine__21599__auto____0 = (function (){
var statearr_24457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24457[(0)] = cljs$core$async$state_machine__21599__auto__);

(statearr_24457[(1)] = (1));

return statearr_24457;
});
var cljs$core$async$state_machine__21599__auto____1 = (function (state_24431){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_24431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e24458){if((e24458 instanceof Object)){
var ex__21602__auto__ = e24458;
var statearr_24459_24480 = state_24431;
(statearr_24459_24480[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24481 = state_24431;
state_24431 = G__24481;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
cljs$core$async$state_machine__21599__auto__ = function(state_24431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21599__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21599__auto____1.call(this,state_24431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21599__auto____0;
cljs$core$async$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21599__auto____1;
return cljs$core$async$state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___24465,out))
})();
var state__21712__auto__ = (function (){var statearr_24460 = f__21711__auto__.call(null);
(statearr_24460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___24465);

return statearr_24460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___24465,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map