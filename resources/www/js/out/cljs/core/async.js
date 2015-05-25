// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t31366 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31366 = (function (fn_handler,f,meta31367){
this.fn_handler = fn_handler;
this.f = f;
this.meta31367 = meta31367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31368,meta31367__$1){
var self__ = this;
var _31368__$1 = this;
return (new cljs.core.async.t31366(self__.fn_handler,self__.f,meta31367__$1));
});

cljs.core.async.t31366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31368){
var self__ = this;
var _31368__$1 = this;
return self__.meta31367;
});

cljs.core.async.t31366.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta31367","meta31367",-159803645,null)], null);
});

cljs.core.async.t31366.cljs$lang$type = true;

cljs.core.async.t31366.cljs$lang$ctorStr = "cljs.core.async/t31366";

cljs.core.async.t31366.cljs$lang$ctorPrWriter = (function (this__23989__auto__,writer__23990__auto__,opt__23991__auto__){
return cljs.core._write.call(null,writer__23990__auto__,"cljs.core.async/t31366");
});

cljs.core.async.__GT_t31366 = (function cljs$core$async$fn_handler_$___GT_t31366(fn_handler__$1,f__$1,meta31367){
return (new cljs.core.async.t31366(fn_handler__$1,f__$1,meta31367));
});

}

return (new cljs.core.async.t31366(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__31370 = buff;
if(G__31370){
var bit__24084__auto__ = null;
if(cljs.core.truth_((function (){var or__23410__auto__ = bit__24084__auto__;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return G__31370.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__31370.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31370);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31370);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__31372 = arguments.length;
switch (G__31372) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__31375 = arguments.length;
switch (G__31375) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31377 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31377);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31377,ret){
return (function (){
return fn1.call(null,val_31377);
});})(val_31377,ret))
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
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__31379 = arguments.length;
switch (G__31379) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
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
var n__24295__auto___31381 = n;
var x_31382 = (0);
while(true){
if((x_31382 < n__24295__auto___31381)){
(a[x_31382] = (0));

var G__31383 = (x_31382 + (1));
x_31382 = G__31383;
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

var G__31384 = (i + (1));
i = G__31384;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t31388 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31388 = (function (alt_flag,flag,meta31389){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31389 = meta31389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31390,meta31389__$1){
var self__ = this;
var _31390__$1 = this;
return (new cljs.core.async.t31388(self__.alt_flag,self__.flag,meta31389__$1));
});})(flag))
;

cljs.core.async.t31388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31390){
var self__ = this;
var _31390__$1 = this;
return self__.meta31389;
});})(flag))
;

cljs.core.async.t31388.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t31388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t31388.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31389","meta31389",-1361969882,null)], null);
});})(flag))
;

cljs.core.async.t31388.cljs$lang$type = true;

cljs.core.async.t31388.cljs$lang$ctorStr = "cljs.core.async/t31388";

cljs.core.async.t31388.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__23989__auto__,writer__23990__auto__,opt__23991__auto__){
return cljs.core._write.call(null,writer__23990__auto__,"cljs.core.async/t31388");
});})(flag))
;

cljs.core.async.__GT_t31388 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t31388(alt_flag__$1,flag__$1,meta31389){
return (new cljs.core.async.t31388(alt_flag__$1,flag__$1,meta31389));
});})(flag))
;

}

return (new cljs.core.async.t31388(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t31394 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31394 = (function (alt_handler,flag,cb,meta31395){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31395 = meta31395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31396,meta31395__$1){
var self__ = this;
var _31396__$1 = this;
return (new cljs.core.async.t31394(self__.alt_handler,self__.flag,self__.cb,meta31395__$1));
});

cljs.core.async.t31394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31396){
var self__ = this;
var _31396__$1 = this;
return self__.meta31395;
});

cljs.core.async.t31394.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31394.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t31394.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t31394.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31395","meta31395",-385901930,null)], null);
});

cljs.core.async.t31394.cljs$lang$type = true;

cljs.core.async.t31394.cljs$lang$ctorStr = "cljs.core.async/t31394";

cljs.core.async.t31394.cljs$lang$ctorPrWriter = (function (this__23989__auto__,writer__23990__auto__,opt__23991__auto__){
return cljs.core._write.call(null,writer__23990__auto__,"cljs.core.async/t31394");
});

cljs.core.async.__GT_t31394 = (function cljs$core$async$alt_handler_$___GT_t31394(alt_handler__$1,flag__$1,cb__$1,meta31395){
return (new cljs.core.async.t31394(alt_handler__$1,flag__$1,cb__$1,meta31395));
});

}

return (new cljs.core.async.t31394(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31397_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31397_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31398_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31398_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__23410__auto__ = wport;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31399 = (i + (1));
i = G__31399;
continue;
}
} else {
return null;
}
break;
}
})();
var or__23410__auto__ = ret;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__23398__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__23398__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__23398__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31402){
var map__31403 = p__31402;
var map__31403__$1 = ((cljs.core.seq_QMARK_.call(null,map__31403))?cljs.core.apply.call(null,cljs.core.hash_map,map__31403):map__31403);
var opts = map__31403__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31400){
var G__31401 = cljs.core.first.call(null,seq31400);
var seq31400__$1 = cljs.core.next.call(null,seq31400);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31401,seq31400__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__31405 = arguments.length;
switch (G__31405) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25507__auto___31454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___31454){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___31454){
return (function (state_31429){
var state_val_31430 = (state_31429[(1)]);
if((state_val_31430 === (7))){
var inst_31425 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31431_31455 = state_31429__$1;
(statearr_31431_31455[(2)] = inst_31425);

(statearr_31431_31455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (1))){
var state_31429__$1 = state_31429;
var statearr_31432_31456 = state_31429__$1;
(statearr_31432_31456[(2)] = null);

(statearr_31432_31456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (4))){
var inst_31408 = (state_31429[(7)]);
var inst_31408__$1 = (state_31429[(2)]);
var inst_31409 = (inst_31408__$1 == null);
var state_31429__$1 = (function (){var statearr_31433 = state_31429;
(statearr_31433[(7)] = inst_31408__$1);

return statearr_31433;
})();
if(cljs.core.truth_(inst_31409)){
var statearr_31434_31457 = state_31429__$1;
(statearr_31434_31457[(1)] = (5));

} else {
var statearr_31435_31458 = state_31429__$1;
(statearr_31435_31458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (13))){
var state_31429__$1 = state_31429;
var statearr_31436_31459 = state_31429__$1;
(statearr_31436_31459[(2)] = null);

(statearr_31436_31459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (6))){
var inst_31408 = (state_31429[(7)]);
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31429__$1,(11),to,inst_31408);
} else {
if((state_val_31430 === (3))){
var inst_31427 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31429__$1,inst_31427);
} else {
if((state_val_31430 === (12))){
var state_31429__$1 = state_31429;
var statearr_31437_31460 = state_31429__$1;
(statearr_31437_31460[(2)] = null);

(statearr_31437_31460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (2))){
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31429__$1,(4),from);
} else {
if((state_val_31430 === (11))){
var inst_31418 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
if(cljs.core.truth_(inst_31418)){
var statearr_31438_31461 = state_31429__$1;
(statearr_31438_31461[(1)] = (12));

} else {
var statearr_31439_31462 = state_31429__$1;
(statearr_31439_31462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (9))){
var state_31429__$1 = state_31429;
var statearr_31440_31463 = state_31429__$1;
(statearr_31440_31463[(2)] = null);

(statearr_31440_31463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (5))){
var state_31429__$1 = state_31429;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31441_31464 = state_31429__$1;
(statearr_31441_31464[(1)] = (8));

} else {
var statearr_31442_31465 = state_31429__$1;
(statearr_31442_31465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (14))){
var inst_31423 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31443_31466 = state_31429__$1;
(statearr_31443_31466[(2)] = inst_31423);

(statearr_31443_31466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (10))){
var inst_31415 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31444_31467 = state_31429__$1;
(statearr_31444_31467[(2)] = inst_31415);

(statearr_31444_31467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (8))){
var inst_31412 = cljs.core.async.close_BANG_.call(null,to);
var state_31429__$1 = state_31429;
var statearr_31445_31468 = state_31429__$1;
(statearr_31445_31468[(2)] = inst_31412);

(statearr_31445_31468[(1)] = (10));


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
});})(c__25507__auto___31454))
;
return ((function (switch__25445__auto__,c__25507__auto___31454){
return (function() {
var cljs$core$async$state_machine__25446__auto__ = null;
var cljs$core$async$state_machine__25446__auto____0 = (function (){
var statearr_31449 = [null,null,null,null,null,null,null,null];
(statearr_31449[(0)] = cljs$core$async$state_machine__25446__auto__);

(statearr_31449[(1)] = (1));

return statearr_31449;
});
var cljs$core$async$state_machine__25446__auto____1 = (function (state_31429){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_31429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e31450){if((e31450 instanceof Object)){
var ex__25449__auto__ = e31450;
var statearr_31451_31469 = state_31429;
(statearr_31451_31469[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31470 = state_31429;
state_31429 = G__31470;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$state_machine__25446__auto__ = function(state_31429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25446__auto____1.call(this,state_31429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25446__auto____0;
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25446__auto____1;
return cljs$core$async$state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___31454))
})();
var state__25509__auto__ = (function (){var statearr_31452 = f__25508__auto__.call(null);
(statearr_31452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___31454);

return statearr_31452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___31454))
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
return (function (p__31654){
var vec__31655 = p__31654;
var v = cljs.core.nth.call(null,vec__31655,(0),null);
var p = cljs.core.nth.call(null,vec__31655,(1),null);
var job = vec__31655;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25507__auto___31837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___31837,res,vec__31655,v,p,job,jobs,results){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___31837,res,vec__31655,v,p,job,jobs,results){
return (function (state_31660){
var state_val_31661 = (state_31660[(1)]);
if((state_val_31661 === (1))){
var state_31660__$1 = state_31660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31660__$1,(2),res,v);
} else {
if((state_val_31661 === (2))){
var inst_31657 = (state_31660[(2)]);
var inst_31658 = cljs.core.async.close_BANG_.call(null,res);
var state_31660__$1 = (function (){var statearr_31662 = state_31660;
(statearr_31662[(7)] = inst_31657);

return statearr_31662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31660__$1,inst_31658);
} else {
return null;
}
}
});})(c__25507__auto___31837,res,vec__31655,v,p,job,jobs,results))
;
return ((function (switch__25445__auto__,c__25507__auto___31837,res,vec__31655,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____0 = (function (){
var statearr_31666 = [null,null,null,null,null,null,null,null];
(statearr_31666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__);

(statearr_31666[(1)] = (1));

return statearr_31666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____1 = (function (state_31660){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_31660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e31667){if((e31667 instanceof Object)){
var ex__25449__auto__ = e31667;
var statearr_31668_31838 = state_31660;
(statearr_31668_31838[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31839 = state_31660;
state_31660 = G__31839;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__ = function(state_31660){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____1.call(this,state_31660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___31837,res,vec__31655,v,p,job,jobs,results))
})();
var state__25509__auto__ = (function (){var statearr_31669 = f__25508__auto__.call(null);
(statearr_31669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___31837);

return statearr_31669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___31837,res,vec__31655,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31670){
var vec__31671 = p__31670;
var v = cljs.core.nth.call(null,vec__31671,(0),null);
var p = cljs.core.nth.call(null,vec__31671,(1),null);
var job = vec__31671;
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
var n__24295__auto___31840 = n;
var __31841 = (0);
while(true){
if((__31841 < n__24295__auto___31840)){
var G__31672_31842 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31672_31842) {
case "compute":
var c__25507__auto___31844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31841,c__25507__auto___31844,G__31672_31842,n__24295__auto___31840,jobs,results,process,async){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (__31841,c__25507__auto___31844,G__31672_31842,n__24295__auto___31840,jobs,results,process,async){
return (function (state_31685){
var state_val_31686 = (state_31685[(1)]);
if((state_val_31686 === (1))){
var state_31685__$1 = state_31685;
var statearr_31687_31845 = state_31685__$1;
(statearr_31687_31845[(2)] = null);

(statearr_31687_31845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (2))){
var state_31685__$1 = state_31685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31685__$1,(4),jobs);
} else {
if((state_val_31686 === (3))){
var inst_31683 = (state_31685[(2)]);
var state_31685__$1 = state_31685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31685__$1,inst_31683);
} else {
if((state_val_31686 === (4))){
var inst_31675 = (state_31685[(2)]);
var inst_31676 = process.call(null,inst_31675);
var state_31685__$1 = state_31685;
if(cljs.core.truth_(inst_31676)){
var statearr_31688_31846 = state_31685__$1;
(statearr_31688_31846[(1)] = (5));

} else {
var statearr_31689_31847 = state_31685__$1;
(statearr_31689_31847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (5))){
var state_31685__$1 = state_31685;
var statearr_31690_31848 = state_31685__$1;
(statearr_31690_31848[(2)] = null);

(statearr_31690_31848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (6))){
var state_31685__$1 = state_31685;
var statearr_31691_31849 = state_31685__$1;
(statearr_31691_31849[(2)] = null);

(statearr_31691_31849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31686 === (7))){
var inst_31681 = (state_31685[(2)]);
var state_31685__$1 = state_31685;
var statearr_31692_31850 = state_31685__$1;
(statearr_31692_31850[(2)] = inst_31681);

(statearr_31692_31850[(1)] = (3));


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
});})(__31841,c__25507__auto___31844,G__31672_31842,n__24295__auto___31840,jobs,results,process,async))
;
return ((function (__31841,switch__25445__auto__,c__25507__auto___31844,G__31672_31842,n__24295__auto___31840,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____0 = (function (){
var statearr_31696 = [null,null,null,null,null,null,null];
(statearr_31696[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__);

(statearr_31696[(1)] = (1));

return statearr_31696;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____1 = (function (state_31685){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_31685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e31697){if((e31697 instanceof Object)){
var ex__25449__auto__ = e31697;
var statearr_31698_31851 = state_31685;
(statearr_31698_31851[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31852 = state_31685;
state_31685 = G__31852;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__ = function(state_31685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____1.call(this,state_31685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__;
})()
;})(__31841,switch__25445__auto__,c__25507__auto___31844,G__31672_31842,n__24295__auto___31840,jobs,results,process,async))
})();
var state__25509__auto__ = (function (){var statearr_31699 = f__25508__auto__.call(null);
(statearr_31699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___31844);

return statearr_31699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(__31841,c__25507__auto___31844,G__31672_31842,n__24295__auto___31840,jobs,results,process,async))
);


break;
case "async":
var c__25507__auto___31853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31841,c__25507__auto___31853,G__31672_31842,n__24295__auto___31840,jobs,results,process,async){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (__31841,c__25507__auto___31853,G__31672_31842,n__24295__auto___31840,jobs,results,process,async){
return (function (state_31712){
var state_val_31713 = (state_31712[(1)]);
if((state_val_31713 === (1))){
var state_31712__$1 = state_31712;
var statearr_31714_31854 = state_31712__$1;
(statearr_31714_31854[(2)] = null);

(statearr_31714_31854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (2))){
var state_31712__$1 = state_31712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31712__$1,(4),jobs);
} else {
if((state_val_31713 === (3))){
var inst_31710 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31712__$1,inst_31710);
} else {
if((state_val_31713 === (4))){
var inst_31702 = (state_31712[(2)]);
var inst_31703 = async.call(null,inst_31702);
var state_31712__$1 = state_31712;
if(cljs.core.truth_(inst_31703)){
var statearr_31715_31855 = state_31712__$1;
(statearr_31715_31855[(1)] = (5));

} else {
var statearr_31716_31856 = state_31712__$1;
(statearr_31716_31856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (5))){
var state_31712__$1 = state_31712;
var statearr_31717_31857 = state_31712__$1;
(statearr_31717_31857[(2)] = null);

(statearr_31717_31857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (6))){
var state_31712__$1 = state_31712;
var statearr_31718_31858 = state_31712__$1;
(statearr_31718_31858[(2)] = null);

(statearr_31718_31858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (7))){
var inst_31708 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
var statearr_31719_31859 = state_31712__$1;
(statearr_31719_31859[(2)] = inst_31708);

(statearr_31719_31859[(1)] = (3));


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
});})(__31841,c__25507__auto___31853,G__31672_31842,n__24295__auto___31840,jobs,results,process,async))
;
return ((function (__31841,switch__25445__auto__,c__25507__auto___31853,G__31672_31842,n__24295__auto___31840,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____0 = (function (){
var statearr_31723 = [null,null,null,null,null,null,null];
(statearr_31723[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__);

(statearr_31723[(1)] = (1));

return statearr_31723;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____1 = (function (state_31712){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_31712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e31724){if((e31724 instanceof Object)){
var ex__25449__auto__ = e31724;
var statearr_31725_31860 = state_31712;
(statearr_31725_31860[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31861 = state_31712;
state_31712 = G__31861;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__ = function(state_31712){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____1.call(this,state_31712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__;
})()
;})(__31841,switch__25445__auto__,c__25507__auto___31853,G__31672_31842,n__24295__auto___31840,jobs,results,process,async))
})();
var state__25509__auto__ = (function (){var statearr_31726 = f__25508__auto__.call(null);
(statearr_31726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___31853);

return statearr_31726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(__31841,c__25507__auto___31853,G__31672_31842,n__24295__auto___31840,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31862 = (__31841 + (1));
__31841 = G__31862;
continue;
} else {
}
break;
}

var c__25507__auto___31863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___31863,jobs,results,process,async){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___31863,jobs,results,process,async){
return (function (state_31748){
var state_val_31749 = (state_31748[(1)]);
if((state_val_31749 === (1))){
var state_31748__$1 = state_31748;
var statearr_31750_31864 = state_31748__$1;
(statearr_31750_31864[(2)] = null);

(statearr_31750_31864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31749 === (2))){
var state_31748__$1 = state_31748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31748__$1,(4),from);
} else {
if((state_val_31749 === (3))){
var inst_31746 = (state_31748[(2)]);
var state_31748__$1 = state_31748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31748__$1,inst_31746);
} else {
if((state_val_31749 === (4))){
var inst_31729 = (state_31748[(7)]);
var inst_31729__$1 = (state_31748[(2)]);
var inst_31730 = (inst_31729__$1 == null);
var state_31748__$1 = (function (){var statearr_31751 = state_31748;
(statearr_31751[(7)] = inst_31729__$1);

return statearr_31751;
})();
if(cljs.core.truth_(inst_31730)){
var statearr_31752_31865 = state_31748__$1;
(statearr_31752_31865[(1)] = (5));

} else {
var statearr_31753_31866 = state_31748__$1;
(statearr_31753_31866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31749 === (5))){
var inst_31732 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31748__$1 = state_31748;
var statearr_31754_31867 = state_31748__$1;
(statearr_31754_31867[(2)] = inst_31732);

(statearr_31754_31867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31749 === (6))){
var inst_31734 = (state_31748[(8)]);
var inst_31729 = (state_31748[(7)]);
var inst_31734__$1 = cljs.core.async.chan.call(null,(1));
var inst_31735 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31736 = [inst_31729,inst_31734__$1];
var inst_31737 = (new cljs.core.PersistentVector(null,2,(5),inst_31735,inst_31736,null));
var state_31748__$1 = (function (){var statearr_31755 = state_31748;
(statearr_31755[(8)] = inst_31734__$1);

return statearr_31755;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31748__$1,(8),jobs,inst_31737);
} else {
if((state_val_31749 === (7))){
var inst_31744 = (state_31748[(2)]);
var state_31748__$1 = state_31748;
var statearr_31756_31868 = state_31748__$1;
(statearr_31756_31868[(2)] = inst_31744);

(statearr_31756_31868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31749 === (8))){
var inst_31734 = (state_31748[(8)]);
var inst_31739 = (state_31748[(2)]);
var state_31748__$1 = (function (){var statearr_31757 = state_31748;
(statearr_31757[(9)] = inst_31739);

return statearr_31757;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31748__$1,(9),results,inst_31734);
} else {
if((state_val_31749 === (9))){
var inst_31741 = (state_31748[(2)]);
var state_31748__$1 = (function (){var statearr_31758 = state_31748;
(statearr_31758[(10)] = inst_31741);

return statearr_31758;
})();
var statearr_31759_31869 = state_31748__$1;
(statearr_31759_31869[(2)] = null);

(statearr_31759_31869[(1)] = (2));


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
});})(c__25507__auto___31863,jobs,results,process,async))
;
return ((function (switch__25445__auto__,c__25507__auto___31863,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____0 = (function (){
var statearr_31763 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31763[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__);

(statearr_31763[(1)] = (1));

return statearr_31763;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____1 = (function (state_31748){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_31748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e31764){if((e31764 instanceof Object)){
var ex__25449__auto__ = e31764;
var statearr_31765_31870 = state_31748;
(statearr_31765_31870[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31871 = state_31748;
state_31748 = G__31871;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__ = function(state_31748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____1.call(this,state_31748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___31863,jobs,results,process,async))
})();
var state__25509__auto__ = (function (){var statearr_31766 = f__25508__auto__.call(null);
(statearr_31766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___31863);

return statearr_31766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___31863,jobs,results,process,async))
);


var c__25507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto__,jobs,results,process,async){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto__,jobs,results,process,async){
return (function (state_31804){
var state_val_31805 = (state_31804[(1)]);
if((state_val_31805 === (7))){
var inst_31800 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
var statearr_31806_31872 = state_31804__$1;
(statearr_31806_31872[(2)] = inst_31800);

(statearr_31806_31872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (20))){
var state_31804__$1 = state_31804;
var statearr_31807_31873 = state_31804__$1;
(statearr_31807_31873[(2)] = null);

(statearr_31807_31873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (1))){
var state_31804__$1 = state_31804;
var statearr_31808_31874 = state_31804__$1;
(statearr_31808_31874[(2)] = null);

(statearr_31808_31874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (4))){
var inst_31769 = (state_31804[(7)]);
var inst_31769__$1 = (state_31804[(2)]);
var inst_31770 = (inst_31769__$1 == null);
var state_31804__$1 = (function (){var statearr_31809 = state_31804;
(statearr_31809[(7)] = inst_31769__$1);

return statearr_31809;
})();
if(cljs.core.truth_(inst_31770)){
var statearr_31810_31875 = state_31804__$1;
(statearr_31810_31875[(1)] = (5));

} else {
var statearr_31811_31876 = state_31804__$1;
(statearr_31811_31876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (15))){
var inst_31782 = (state_31804[(8)]);
var state_31804__$1 = state_31804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31804__$1,(18),to,inst_31782);
} else {
if((state_val_31805 === (21))){
var inst_31795 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
var statearr_31812_31877 = state_31804__$1;
(statearr_31812_31877[(2)] = inst_31795);

(statearr_31812_31877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (13))){
var inst_31797 = (state_31804[(2)]);
var state_31804__$1 = (function (){var statearr_31813 = state_31804;
(statearr_31813[(9)] = inst_31797);

return statearr_31813;
})();
var statearr_31814_31878 = state_31804__$1;
(statearr_31814_31878[(2)] = null);

(statearr_31814_31878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (6))){
var inst_31769 = (state_31804[(7)]);
var state_31804__$1 = state_31804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31804__$1,(11),inst_31769);
} else {
if((state_val_31805 === (17))){
var inst_31790 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
if(cljs.core.truth_(inst_31790)){
var statearr_31815_31879 = state_31804__$1;
(statearr_31815_31879[(1)] = (19));

} else {
var statearr_31816_31880 = state_31804__$1;
(statearr_31816_31880[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (3))){
var inst_31802 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31804__$1,inst_31802);
} else {
if((state_val_31805 === (12))){
var inst_31779 = (state_31804[(10)]);
var state_31804__$1 = state_31804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31804__$1,(14),inst_31779);
} else {
if((state_val_31805 === (2))){
var state_31804__$1 = state_31804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31804__$1,(4),results);
} else {
if((state_val_31805 === (19))){
var state_31804__$1 = state_31804;
var statearr_31817_31881 = state_31804__$1;
(statearr_31817_31881[(2)] = null);

(statearr_31817_31881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (11))){
var inst_31779 = (state_31804[(2)]);
var state_31804__$1 = (function (){var statearr_31818 = state_31804;
(statearr_31818[(10)] = inst_31779);

return statearr_31818;
})();
var statearr_31819_31882 = state_31804__$1;
(statearr_31819_31882[(2)] = null);

(statearr_31819_31882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (9))){
var state_31804__$1 = state_31804;
var statearr_31820_31883 = state_31804__$1;
(statearr_31820_31883[(2)] = null);

(statearr_31820_31883[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (5))){
var state_31804__$1 = state_31804;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31821_31884 = state_31804__$1;
(statearr_31821_31884[(1)] = (8));

} else {
var statearr_31822_31885 = state_31804__$1;
(statearr_31822_31885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (14))){
var inst_31782 = (state_31804[(8)]);
var inst_31784 = (state_31804[(11)]);
var inst_31782__$1 = (state_31804[(2)]);
var inst_31783 = (inst_31782__$1 == null);
var inst_31784__$1 = cljs.core.not.call(null,inst_31783);
var state_31804__$1 = (function (){var statearr_31823 = state_31804;
(statearr_31823[(8)] = inst_31782__$1);

(statearr_31823[(11)] = inst_31784__$1);

return statearr_31823;
})();
if(inst_31784__$1){
var statearr_31824_31886 = state_31804__$1;
(statearr_31824_31886[(1)] = (15));

} else {
var statearr_31825_31887 = state_31804__$1;
(statearr_31825_31887[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (16))){
var inst_31784 = (state_31804[(11)]);
var state_31804__$1 = state_31804;
var statearr_31826_31888 = state_31804__$1;
(statearr_31826_31888[(2)] = inst_31784);

(statearr_31826_31888[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (10))){
var inst_31776 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
var statearr_31827_31889 = state_31804__$1;
(statearr_31827_31889[(2)] = inst_31776);

(statearr_31827_31889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (18))){
var inst_31787 = (state_31804[(2)]);
var state_31804__$1 = state_31804;
var statearr_31828_31890 = state_31804__$1;
(statearr_31828_31890[(2)] = inst_31787);

(statearr_31828_31890[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31805 === (8))){
var inst_31773 = cljs.core.async.close_BANG_.call(null,to);
var state_31804__$1 = state_31804;
var statearr_31829_31891 = state_31804__$1;
(statearr_31829_31891[(2)] = inst_31773);

(statearr_31829_31891[(1)] = (10));


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
});})(c__25507__auto__,jobs,results,process,async))
;
return ((function (switch__25445__auto__,c__25507__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____0 = (function (){
var statearr_31833 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31833[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__);

(statearr_31833[(1)] = (1));

return statearr_31833;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____1 = (function (state_31804){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_31804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e31834){if((e31834 instanceof Object)){
var ex__25449__auto__ = e31834;
var statearr_31835_31892 = state_31804;
(statearr_31835_31892[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31893 = state_31804;
state_31804 = G__31893;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__ = function(state_31804){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____1.call(this,state_31804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25446__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto__,jobs,results,process,async))
})();
var state__25509__auto__ = (function (){var statearr_31836 = f__25508__auto__.call(null);
(statearr_31836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto__);

return statearr_31836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto__,jobs,results,process,async))
);

return c__25507__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__31895 = arguments.length;
switch (G__31895) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__31898 = arguments.length;
switch (G__31898) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__31901 = arguments.length;
switch (G__31901) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25507__auto___31953 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___31953,tc,fc){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___31953,tc,fc){
return (function (state_31927){
var state_val_31928 = (state_31927[(1)]);
if((state_val_31928 === (7))){
var inst_31923 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31929_31954 = state_31927__$1;
(statearr_31929_31954[(2)] = inst_31923);

(statearr_31929_31954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (1))){
var state_31927__$1 = state_31927;
var statearr_31930_31955 = state_31927__$1;
(statearr_31930_31955[(2)] = null);

(statearr_31930_31955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (4))){
var inst_31904 = (state_31927[(7)]);
var inst_31904__$1 = (state_31927[(2)]);
var inst_31905 = (inst_31904__$1 == null);
var state_31927__$1 = (function (){var statearr_31931 = state_31927;
(statearr_31931[(7)] = inst_31904__$1);

return statearr_31931;
})();
if(cljs.core.truth_(inst_31905)){
var statearr_31932_31956 = state_31927__$1;
(statearr_31932_31956[(1)] = (5));

} else {
var statearr_31933_31957 = state_31927__$1;
(statearr_31933_31957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (13))){
var state_31927__$1 = state_31927;
var statearr_31934_31958 = state_31927__$1;
(statearr_31934_31958[(2)] = null);

(statearr_31934_31958[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (6))){
var inst_31904 = (state_31927[(7)]);
var inst_31910 = p.call(null,inst_31904);
var state_31927__$1 = state_31927;
if(cljs.core.truth_(inst_31910)){
var statearr_31935_31959 = state_31927__$1;
(statearr_31935_31959[(1)] = (9));

} else {
var statearr_31936_31960 = state_31927__$1;
(statearr_31936_31960[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (3))){
var inst_31925 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31927__$1,inst_31925);
} else {
if((state_val_31928 === (12))){
var state_31927__$1 = state_31927;
var statearr_31937_31961 = state_31927__$1;
(statearr_31937_31961[(2)] = null);

(statearr_31937_31961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (2))){
var state_31927__$1 = state_31927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31927__$1,(4),ch);
} else {
if((state_val_31928 === (11))){
var inst_31904 = (state_31927[(7)]);
var inst_31914 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31927__$1,(8),inst_31914,inst_31904);
} else {
if((state_val_31928 === (9))){
var state_31927__$1 = state_31927;
var statearr_31938_31962 = state_31927__$1;
(statearr_31938_31962[(2)] = tc);

(statearr_31938_31962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (5))){
var inst_31907 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31908 = cljs.core.async.close_BANG_.call(null,fc);
var state_31927__$1 = (function (){var statearr_31939 = state_31927;
(statearr_31939[(8)] = inst_31907);

return statearr_31939;
})();
var statearr_31940_31963 = state_31927__$1;
(statearr_31940_31963[(2)] = inst_31908);

(statearr_31940_31963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (14))){
var inst_31921 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31941_31964 = state_31927__$1;
(statearr_31941_31964[(2)] = inst_31921);

(statearr_31941_31964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (10))){
var state_31927__$1 = state_31927;
var statearr_31942_31965 = state_31927__$1;
(statearr_31942_31965[(2)] = fc);

(statearr_31942_31965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (8))){
var inst_31916 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
if(cljs.core.truth_(inst_31916)){
var statearr_31943_31966 = state_31927__$1;
(statearr_31943_31966[(1)] = (12));

} else {
var statearr_31944_31967 = state_31927__$1;
(statearr_31944_31967[(1)] = (13));

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
});})(c__25507__auto___31953,tc,fc))
;
return ((function (switch__25445__auto__,c__25507__auto___31953,tc,fc){
return (function() {
var cljs$core$async$state_machine__25446__auto__ = null;
var cljs$core$async$state_machine__25446__auto____0 = (function (){
var statearr_31948 = [null,null,null,null,null,null,null,null,null];
(statearr_31948[(0)] = cljs$core$async$state_machine__25446__auto__);

(statearr_31948[(1)] = (1));

return statearr_31948;
});
var cljs$core$async$state_machine__25446__auto____1 = (function (state_31927){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_31927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e31949){if((e31949 instanceof Object)){
var ex__25449__auto__ = e31949;
var statearr_31950_31968 = state_31927;
(statearr_31950_31968[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31969 = state_31927;
state_31927 = G__31969;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$state_machine__25446__auto__ = function(state_31927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25446__auto____1.call(this,state_31927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25446__auto____0;
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25446__auto____1;
return cljs$core$async$state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___31953,tc,fc))
})();
var state__25509__auto__ = (function (){var statearr_31951 = f__25508__auto__.call(null);
(statearr_31951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___31953);

return statearr_31951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___31953,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto__){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto__){
return (function (state_32016){
var state_val_32017 = (state_32016[(1)]);
if((state_val_32017 === (1))){
var inst_32002 = init;
var state_32016__$1 = (function (){var statearr_32018 = state_32016;
(statearr_32018[(7)] = inst_32002);

return statearr_32018;
})();
var statearr_32019_32034 = state_32016__$1;
(statearr_32019_32034[(2)] = null);

(statearr_32019_32034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32017 === (2))){
var state_32016__$1 = state_32016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32016__$1,(4),ch);
} else {
if((state_val_32017 === (3))){
var inst_32014 = (state_32016[(2)]);
var state_32016__$1 = state_32016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32016__$1,inst_32014);
} else {
if((state_val_32017 === (4))){
var inst_32005 = (state_32016[(8)]);
var inst_32005__$1 = (state_32016[(2)]);
var inst_32006 = (inst_32005__$1 == null);
var state_32016__$1 = (function (){var statearr_32020 = state_32016;
(statearr_32020[(8)] = inst_32005__$1);

return statearr_32020;
})();
if(cljs.core.truth_(inst_32006)){
var statearr_32021_32035 = state_32016__$1;
(statearr_32021_32035[(1)] = (5));

} else {
var statearr_32022_32036 = state_32016__$1;
(statearr_32022_32036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32017 === (5))){
var inst_32002 = (state_32016[(7)]);
var state_32016__$1 = state_32016;
var statearr_32023_32037 = state_32016__$1;
(statearr_32023_32037[(2)] = inst_32002);

(statearr_32023_32037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32017 === (6))){
var inst_32002 = (state_32016[(7)]);
var inst_32005 = (state_32016[(8)]);
var inst_32009 = f.call(null,inst_32002,inst_32005);
var inst_32002__$1 = inst_32009;
var state_32016__$1 = (function (){var statearr_32024 = state_32016;
(statearr_32024[(7)] = inst_32002__$1);

return statearr_32024;
})();
var statearr_32025_32038 = state_32016__$1;
(statearr_32025_32038[(2)] = null);

(statearr_32025_32038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32017 === (7))){
var inst_32012 = (state_32016[(2)]);
var state_32016__$1 = state_32016;
var statearr_32026_32039 = state_32016__$1;
(statearr_32026_32039[(2)] = inst_32012);

(statearr_32026_32039[(1)] = (3));


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
});})(c__25507__auto__))
;
return ((function (switch__25445__auto__,c__25507__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25446__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25446__auto____0 = (function (){
var statearr_32030 = [null,null,null,null,null,null,null,null,null];
(statearr_32030[(0)] = cljs$core$async$reduce_$_state_machine__25446__auto__);

(statearr_32030[(1)] = (1));

return statearr_32030;
});
var cljs$core$async$reduce_$_state_machine__25446__auto____1 = (function (state_32016){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_32016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e32031){if((e32031 instanceof Object)){
var ex__25449__auto__ = e32031;
var statearr_32032_32040 = state_32016;
(statearr_32032_32040[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32041 = state_32016;
state_32016 = G__32041;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25446__auto__ = function(state_32016){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25446__auto____1.call(this,state_32016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25446__auto____0;
cljs$core$async$reduce_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25446__auto____1;
return cljs$core$async$reduce_$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto__))
})();
var state__25509__auto__ = (function (){var statearr_32033 = f__25508__auto__.call(null);
(statearr_32033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto__);

return statearr_32033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto__))
);

return c__25507__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__32043 = arguments.length;
switch (G__32043) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto__){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto__){
return (function (state_32068){
var state_val_32069 = (state_32068[(1)]);
if((state_val_32069 === (7))){
var inst_32050 = (state_32068[(2)]);
var state_32068__$1 = state_32068;
var statearr_32070_32094 = state_32068__$1;
(statearr_32070_32094[(2)] = inst_32050);

(statearr_32070_32094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (1))){
var inst_32044 = cljs.core.seq.call(null,coll);
var inst_32045 = inst_32044;
var state_32068__$1 = (function (){var statearr_32071 = state_32068;
(statearr_32071[(7)] = inst_32045);

return statearr_32071;
})();
var statearr_32072_32095 = state_32068__$1;
(statearr_32072_32095[(2)] = null);

(statearr_32072_32095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (4))){
var inst_32045 = (state_32068[(7)]);
var inst_32048 = cljs.core.first.call(null,inst_32045);
var state_32068__$1 = state_32068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32068__$1,(7),ch,inst_32048);
} else {
if((state_val_32069 === (13))){
var inst_32062 = (state_32068[(2)]);
var state_32068__$1 = state_32068;
var statearr_32073_32096 = state_32068__$1;
(statearr_32073_32096[(2)] = inst_32062);

(statearr_32073_32096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (6))){
var inst_32053 = (state_32068[(2)]);
var state_32068__$1 = state_32068;
if(cljs.core.truth_(inst_32053)){
var statearr_32074_32097 = state_32068__$1;
(statearr_32074_32097[(1)] = (8));

} else {
var statearr_32075_32098 = state_32068__$1;
(statearr_32075_32098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (3))){
var inst_32066 = (state_32068[(2)]);
var state_32068__$1 = state_32068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32068__$1,inst_32066);
} else {
if((state_val_32069 === (12))){
var state_32068__$1 = state_32068;
var statearr_32076_32099 = state_32068__$1;
(statearr_32076_32099[(2)] = null);

(statearr_32076_32099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (2))){
var inst_32045 = (state_32068[(7)]);
var state_32068__$1 = state_32068;
if(cljs.core.truth_(inst_32045)){
var statearr_32077_32100 = state_32068__$1;
(statearr_32077_32100[(1)] = (4));

} else {
var statearr_32078_32101 = state_32068__$1;
(statearr_32078_32101[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (11))){
var inst_32059 = cljs.core.async.close_BANG_.call(null,ch);
var state_32068__$1 = state_32068;
var statearr_32079_32102 = state_32068__$1;
(statearr_32079_32102[(2)] = inst_32059);

(statearr_32079_32102[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (9))){
var state_32068__$1 = state_32068;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32080_32103 = state_32068__$1;
(statearr_32080_32103[(1)] = (11));

} else {
var statearr_32081_32104 = state_32068__$1;
(statearr_32081_32104[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (5))){
var inst_32045 = (state_32068[(7)]);
var state_32068__$1 = state_32068;
var statearr_32082_32105 = state_32068__$1;
(statearr_32082_32105[(2)] = inst_32045);

(statearr_32082_32105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (10))){
var inst_32064 = (state_32068[(2)]);
var state_32068__$1 = state_32068;
var statearr_32083_32106 = state_32068__$1;
(statearr_32083_32106[(2)] = inst_32064);

(statearr_32083_32106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32069 === (8))){
var inst_32045 = (state_32068[(7)]);
var inst_32055 = cljs.core.next.call(null,inst_32045);
var inst_32045__$1 = inst_32055;
var state_32068__$1 = (function (){var statearr_32084 = state_32068;
(statearr_32084[(7)] = inst_32045__$1);

return statearr_32084;
})();
var statearr_32085_32107 = state_32068__$1;
(statearr_32085_32107[(2)] = null);

(statearr_32085_32107[(1)] = (2));


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
});})(c__25507__auto__))
;
return ((function (switch__25445__auto__,c__25507__auto__){
return (function() {
var cljs$core$async$state_machine__25446__auto__ = null;
var cljs$core$async$state_machine__25446__auto____0 = (function (){
var statearr_32089 = [null,null,null,null,null,null,null,null];
(statearr_32089[(0)] = cljs$core$async$state_machine__25446__auto__);

(statearr_32089[(1)] = (1));

return statearr_32089;
});
var cljs$core$async$state_machine__25446__auto____1 = (function (state_32068){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_32068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e32090){if((e32090 instanceof Object)){
var ex__25449__auto__ = e32090;
var statearr_32091_32108 = state_32068;
(statearr_32091_32108[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32109 = state_32068;
state_32068 = G__32109;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$state_machine__25446__auto__ = function(state_32068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25446__auto____1.call(this,state_32068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25446__auto____0;
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25446__auto____1;
return cljs$core$async$state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto__))
})();
var state__25509__auto__ = (function (){var statearr_32092 = f__25508__auto__.call(null);
(statearr_32092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto__);

return statearr_32092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto__))
);

return c__25507__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj32111 = {};
return obj32111;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__23398__auto__ = _;
if(and__23398__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__23398__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__24046__auto__ = (((_ == null))?null:_);
return (function (){var or__23410__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj32113 = {};
return obj32113;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__23398__auto__ = m;
if(and__23398__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__23398__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__24046__auto__ = (((m == null))?null:m);
return (function (){var or__23410__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__23398__auto__ = m;
if(and__23398__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__23398__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__24046__auto__ = (((m == null))?null:m);
return (function (){var or__23410__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__23398__auto__ = m;
if(and__23398__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__23398__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__24046__auto__ = (((m == null))?null:m);
return (function (){var or__23410__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t32335 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32335 = (function (mult,ch,cs,meta32336){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32336 = meta32336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32337,meta32336__$1){
var self__ = this;
var _32337__$1 = this;
return (new cljs.core.async.t32335(self__.mult,self__.ch,self__.cs,meta32336__$1));
});})(cs))
;

cljs.core.async.t32335.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32337){
var self__ = this;
var _32337__$1 = this;
return self__.meta32336;
});})(cs))
;

cljs.core.async.t32335.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32335.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32335.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32335.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32335.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32335.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t32335.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32336","meta32336",-1741368757,null)], null);
});})(cs))
;

cljs.core.async.t32335.cljs$lang$type = true;

cljs.core.async.t32335.cljs$lang$ctorStr = "cljs.core.async/t32335";

cljs.core.async.t32335.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__23989__auto__,writer__23990__auto__,opt__23991__auto__){
return cljs.core._write.call(null,writer__23990__auto__,"cljs.core.async/t32335");
});})(cs))
;

cljs.core.async.__GT_t32335 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t32335(mult__$1,ch__$1,cs__$1,meta32336){
return (new cljs.core.async.t32335(mult__$1,ch__$1,cs__$1,meta32336));
});})(cs))
;

}

return (new cljs.core.async.t32335(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25507__auto___32556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___32556,cs,m,dchan,dctr,done){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___32556,cs,m,dchan,dctr,done){
return (function (state_32468){
var state_val_32469 = (state_32468[(1)]);
if((state_val_32469 === (7))){
var inst_32464 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32470_32557 = state_32468__$1;
(statearr_32470_32557[(2)] = inst_32464);

(statearr_32470_32557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (20))){
var inst_32369 = (state_32468[(7)]);
var inst_32379 = cljs.core.first.call(null,inst_32369);
var inst_32380 = cljs.core.nth.call(null,inst_32379,(0),null);
var inst_32381 = cljs.core.nth.call(null,inst_32379,(1),null);
var state_32468__$1 = (function (){var statearr_32471 = state_32468;
(statearr_32471[(8)] = inst_32380);

return statearr_32471;
})();
if(cljs.core.truth_(inst_32381)){
var statearr_32472_32558 = state_32468__$1;
(statearr_32472_32558[(1)] = (22));

} else {
var statearr_32473_32559 = state_32468__$1;
(statearr_32473_32559[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (27))){
var inst_32411 = (state_32468[(9)]);
var inst_32416 = (state_32468[(10)]);
var inst_32340 = (state_32468[(11)]);
var inst_32409 = (state_32468[(12)]);
var inst_32416__$1 = cljs.core._nth.call(null,inst_32409,inst_32411);
var inst_32417 = cljs.core.async.put_BANG_.call(null,inst_32416__$1,inst_32340,done);
var state_32468__$1 = (function (){var statearr_32474 = state_32468;
(statearr_32474[(10)] = inst_32416__$1);

return statearr_32474;
})();
if(cljs.core.truth_(inst_32417)){
var statearr_32475_32560 = state_32468__$1;
(statearr_32475_32560[(1)] = (30));

} else {
var statearr_32476_32561 = state_32468__$1;
(statearr_32476_32561[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (1))){
var state_32468__$1 = state_32468;
var statearr_32477_32562 = state_32468__$1;
(statearr_32477_32562[(2)] = null);

(statearr_32477_32562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (24))){
var inst_32369 = (state_32468[(7)]);
var inst_32386 = (state_32468[(2)]);
var inst_32387 = cljs.core.next.call(null,inst_32369);
var inst_32349 = inst_32387;
var inst_32350 = null;
var inst_32351 = (0);
var inst_32352 = (0);
var state_32468__$1 = (function (){var statearr_32478 = state_32468;
(statearr_32478[(13)] = inst_32350);

(statearr_32478[(14)] = inst_32386);

(statearr_32478[(15)] = inst_32351);

(statearr_32478[(16)] = inst_32352);

(statearr_32478[(17)] = inst_32349);

return statearr_32478;
})();
var statearr_32479_32563 = state_32468__$1;
(statearr_32479_32563[(2)] = null);

(statearr_32479_32563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (39))){
var state_32468__$1 = state_32468;
var statearr_32483_32564 = state_32468__$1;
(statearr_32483_32564[(2)] = null);

(statearr_32483_32564[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (4))){
var inst_32340 = (state_32468[(11)]);
var inst_32340__$1 = (state_32468[(2)]);
var inst_32341 = (inst_32340__$1 == null);
var state_32468__$1 = (function (){var statearr_32484 = state_32468;
(statearr_32484[(11)] = inst_32340__$1);

return statearr_32484;
})();
if(cljs.core.truth_(inst_32341)){
var statearr_32485_32565 = state_32468__$1;
(statearr_32485_32565[(1)] = (5));

} else {
var statearr_32486_32566 = state_32468__$1;
(statearr_32486_32566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (15))){
var inst_32350 = (state_32468[(13)]);
var inst_32351 = (state_32468[(15)]);
var inst_32352 = (state_32468[(16)]);
var inst_32349 = (state_32468[(17)]);
var inst_32365 = (state_32468[(2)]);
var inst_32366 = (inst_32352 + (1));
var tmp32480 = inst_32350;
var tmp32481 = inst_32351;
var tmp32482 = inst_32349;
var inst_32349__$1 = tmp32482;
var inst_32350__$1 = tmp32480;
var inst_32351__$1 = tmp32481;
var inst_32352__$1 = inst_32366;
var state_32468__$1 = (function (){var statearr_32487 = state_32468;
(statearr_32487[(13)] = inst_32350__$1);

(statearr_32487[(15)] = inst_32351__$1);

(statearr_32487[(16)] = inst_32352__$1);

(statearr_32487[(18)] = inst_32365);

(statearr_32487[(17)] = inst_32349__$1);

return statearr_32487;
})();
var statearr_32488_32567 = state_32468__$1;
(statearr_32488_32567[(2)] = null);

(statearr_32488_32567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (21))){
var inst_32390 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32492_32568 = state_32468__$1;
(statearr_32492_32568[(2)] = inst_32390);

(statearr_32492_32568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (31))){
var inst_32416 = (state_32468[(10)]);
var inst_32420 = done.call(null,null);
var inst_32421 = cljs.core.async.untap_STAR_.call(null,m,inst_32416);
var state_32468__$1 = (function (){var statearr_32493 = state_32468;
(statearr_32493[(19)] = inst_32420);

return statearr_32493;
})();
var statearr_32494_32569 = state_32468__$1;
(statearr_32494_32569[(2)] = inst_32421);

(statearr_32494_32569[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (32))){
var inst_32411 = (state_32468[(9)]);
var inst_32410 = (state_32468[(20)]);
var inst_32409 = (state_32468[(12)]);
var inst_32408 = (state_32468[(21)]);
var inst_32423 = (state_32468[(2)]);
var inst_32424 = (inst_32411 + (1));
var tmp32489 = inst_32410;
var tmp32490 = inst_32409;
var tmp32491 = inst_32408;
var inst_32408__$1 = tmp32491;
var inst_32409__$1 = tmp32490;
var inst_32410__$1 = tmp32489;
var inst_32411__$1 = inst_32424;
var state_32468__$1 = (function (){var statearr_32495 = state_32468;
(statearr_32495[(9)] = inst_32411__$1);

(statearr_32495[(20)] = inst_32410__$1);

(statearr_32495[(22)] = inst_32423);

(statearr_32495[(12)] = inst_32409__$1);

(statearr_32495[(21)] = inst_32408__$1);

return statearr_32495;
})();
var statearr_32496_32570 = state_32468__$1;
(statearr_32496_32570[(2)] = null);

(statearr_32496_32570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (40))){
var inst_32436 = (state_32468[(23)]);
var inst_32440 = done.call(null,null);
var inst_32441 = cljs.core.async.untap_STAR_.call(null,m,inst_32436);
var state_32468__$1 = (function (){var statearr_32497 = state_32468;
(statearr_32497[(24)] = inst_32440);

return statearr_32497;
})();
var statearr_32498_32571 = state_32468__$1;
(statearr_32498_32571[(2)] = inst_32441);

(statearr_32498_32571[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (33))){
var inst_32427 = (state_32468[(25)]);
var inst_32429 = cljs.core.chunked_seq_QMARK_.call(null,inst_32427);
var state_32468__$1 = state_32468;
if(inst_32429){
var statearr_32499_32572 = state_32468__$1;
(statearr_32499_32572[(1)] = (36));

} else {
var statearr_32500_32573 = state_32468__$1;
(statearr_32500_32573[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (13))){
var inst_32359 = (state_32468[(26)]);
var inst_32362 = cljs.core.async.close_BANG_.call(null,inst_32359);
var state_32468__$1 = state_32468;
var statearr_32501_32574 = state_32468__$1;
(statearr_32501_32574[(2)] = inst_32362);

(statearr_32501_32574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (22))){
var inst_32380 = (state_32468[(8)]);
var inst_32383 = cljs.core.async.close_BANG_.call(null,inst_32380);
var state_32468__$1 = state_32468;
var statearr_32502_32575 = state_32468__$1;
(statearr_32502_32575[(2)] = inst_32383);

(statearr_32502_32575[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (36))){
var inst_32427 = (state_32468[(25)]);
var inst_32431 = cljs.core.chunk_first.call(null,inst_32427);
var inst_32432 = cljs.core.chunk_rest.call(null,inst_32427);
var inst_32433 = cljs.core.count.call(null,inst_32431);
var inst_32408 = inst_32432;
var inst_32409 = inst_32431;
var inst_32410 = inst_32433;
var inst_32411 = (0);
var state_32468__$1 = (function (){var statearr_32503 = state_32468;
(statearr_32503[(9)] = inst_32411);

(statearr_32503[(20)] = inst_32410);

(statearr_32503[(12)] = inst_32409);

(statearr_32503[(21)] = inst_32408);

return statearr_32503;
})();
var statearr_32504_32576 = state_32468__$1;
(statearr_32504_32576[(2)] = null);

(statearr_32504_32576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (41))){
var inst_32427 = (state_32468[(25)]);
var inst_32443 = (state_32468[(2)]);
var inst_32444 = cljs.core.next.call(null,inst_32427);
var inst_32408 = inst_32444;
var inst_32409 = null;
var inst_32410 = (0);
var inst_32411 = (0);
var state_32468__$1 = (function (){var statearr_32505 = state_32468;
(statearr_32505[(9)] = inst_32411);

(statearr_32505[(20)] = inst_32410);

(statearr_32505[(27)] = inst_32443);

(statearr_32505[(12)] = inst_32409);

(statearr_32505[(21)] = inst_32408);

return statearr_32505;
})();
var statearr_32506_32577 = state_32468__$1;
(statearr_32506_32577[(2)] = null);

(statearr_32506_32577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (43))){
var state_32468__$1 = state_32468;
var statearr_32507_32578 = state_32468__$1;
(statearr_32507_32578[(2)] = null);

(statearr_32507_32578[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (29))){
var inst_32452 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32508_32579 = state_32468__$1;
(statearr_32508_32579[(2)] = inst_32452);

(statearr_32508_32579[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (44))){
var inst_32461 = (state_32468[(2)]);
var state_32468__$1 = (function (){var statearr_32509 = state_32468;
(statearr_32509[(28)] = inst_32461);

return statearr_32509;
})();
var statearr_32510_32580 = state_32468__$1;
(statearr_32510_32580[(2)] = null);

(statearr_32510_32580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (6))){
var inst_32400 = (state_32468[(29)]);
var inst_32399 = cljs.core.deref.call(null,cs);
var inst_32400__$1 = cljs.core.keys.call(null,inst_32399);
var inst_32401 = cljs.core.count.call(null,inst_32400__$1);
var inst_32402 = cljs.core.reset_BANG_.call(null,dctr,inst_32401);
var inst_32407 = cljs.core.seq.call(null,inst_32400__$1);
var inst_32408 = inst_32407;
var inst_32409 = null;
var inst_32410 = (0);
var inst_32411 = (0);
var state_32468__$1 = (function (){var statearr_32511 = state_32468;
(statearr_32511[(9)] = inst_32411);

(statearr_32511[(29)] = inst_32400__$1);

(statearr_32511[(30)] = inst_32402);

(statearr_32511[(20)] = inst_32410);

(statearr_32511[(12)] = inst_32409);

(statearr_32511[(21)] = inst_32408);

return statearr_32511;
})();
var statearr_32512_32581 = state_32468__$1;
(statearr_32512_32581[(2)] = null);

(statearr_32512_32581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (28))){
var inst_32427 = (state_32468[(25)]);
var inst_32408 = (state_32468[(21)]);
var inst_32427__$1 = cljs.core.seq.call(null,inst_32408);
var state_32468__$1 = (function (){var statearr_32513 = state_32468;
(statearr_32513[(25)] = inst_32427__$1);

return statearr_32513;
})();
if(inst_32427__$1){
var statearr_32514_32582 = state_32468__$1;
(statearr_32514_32582[(1)] = (33));

} else {
var statearr_32515_32583 = state_32468__$1;
(statearr_32515_32583[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (25))){
var inst_32411 = (state_32468[(9)]);
var inst_32410 = (state_32468[(20)]);
var inst_32413 = (inst_32411 < inst_32410);
var inst_32414 = inst_32413;
var state_32468__$1 = state_32468;
if(cljs.core.truth_(inst_32414)){
var statearr_32516_32584 = state_32468__$1;
(statearr_32516_32584[(1)] = (27));

} else {
var statearr_32517_32585 = state_32468__$1;
(statearr_32517_32585[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (34))){
var state_32468__$1 = state_32468;
var statearr_32518_32586 = state_32468__$1;
(statearr_32518_32586[(2)] = null);

(statearr_32518_32586[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (17))){
var state_32468__$1 = state_32468;
var statearr_32519_32587 = state_32468__$1;
(statearr_32519_32587[(2)] = null);

(statearr_32519_32587[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (3))){
var inst_32466 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32468__$1,inst_32466);
} else {
if((state_val_32469 === (12))){
var inst_32395 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32520_32588 = state_32468__$1;
(statearr_32520_32588[(2)] = inst_32395);

(statearr_32520_32588[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (2))){
var state_32468__$1 = state_32468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32468__$1,(4),ch);
} else {
if((state_val_32469 === (23))){
var state_32468__$1 = state_32468;
var statearr_32521_32589 = state_32468__$1;
(statearr_32521_32589[(2)] = null);

(statearr_32521_32589[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (35))){
var inst_32450 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32522_32590 = state_32468__$1;
(statearr_32522_32590[(2)] = inst_32450);

(statearr_32522_32590[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (19))){
var inst_32369 = (state_32468[(7)]);
var inst_32373 = cljs.core.chunk_first.call(null,inst_32369);
var inst_32374 = cljs.core.chunk_rest.call(null,inst_32369);
var inst_32375 = cljs.core.count.call(null,inst_32373);
var inst_32349 = inst_32374;
var inst_32350 = inst_32373;
var inst_32351 = inst_32375;
var inst_32352 = (0);
var state_32468__$1 = (function (){var statearr_32523 = state_32468;
(statearr_32523[(13)] = inst_32350);

(statearr_32523[(15)] = inst_32351);

(statearr_32523[(16)] = inst_32352);

(statearr_32523[(17)] = inst_32349);

return statearr_32523;
})();
var statearr_32524_32591 = state_32468__$1;
(statearr_32524_32591[(2)] = null);

(statearr_32524_32591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (11))){
var inst_32369 = (state_32468[(7)]);
var inst_32349 = (state_32468[(17)]);
var inst_32369__$1 = cljs.core.seq.call(null,inst_32349);
var state_32468__$1 = (function (){var statearr_32525 = state_32468;
(statearr_32525[(7)] = inst_32369__$1);

return statearr_32525;
})();
if(inst_32369__$1){
var statearr_32526_32592 = state_32468__$1;
(statearr_32526_32592[(1)] = (16));

} else {
var statearr_32527_32593 = state_32468__$1;
(statearr_32527_32593[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (9))){
var inst_32397 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32528_32594 = state_32468__$1;
(statearr_32528_32594[(2)] = inst_32397);

(statearr_32528_32594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (5))){
var inst_32347 = cljs.core.deref.call(null,cs);
var inst_32348 = cljs.core.seq.call(null,inst_32347);
var inst_32349 = inst_32348;
var inst_32350 = null;
var inst_32351 = (0);
var inst_32352 = (0);
var state_32468__$1 = (function (){var statearr_32529 = state_32468;
(statearr_32529[(13)] = inst_32350);

(statearr_32529[(15)] = inst_32351);

(statearr_32529[(16)] = inst_32352);

(statearr_32529[(17)] = inst_32349);

return statearr_32529;
})();
var statearr_32530_32595 = state_32468__$1;
(statearr_32530_32595[(2)] = null);

(statearr_32530_32595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (14))){
var state_32468__$1 = state_32468;
var statearr_32531_32596 = state_32468__$1;
(statearr_32531_32596[(2)] = null);

(statearr_32531_32596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (45))){
var inst_32458 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32532_32597 = state_32468__$1;
(statearr_32532_32597[(2)] = inst_32458);

(statearr_32532_32597[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (26))){
var inst_32400 = (state_32468[(29)]);
var inst_32454 = (state_32468[(2)]);
var inst_32455 = cljs.core.seq.call(null,inst_32400);
var state_32468__$1 = (function (){var statearr_32533 = state_32468;
(statearr_32533[(31)] = inst_32454);

return statearr_32533;
})();
if(inst_32455){
var statearr_32534_32598 = state_32468__$1;
(statearr_32534_32598[(1)] = (42));

} else {
var statearr_32535_32599 = state_32468__$1;
(statearr_32535_32599[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (16))){
var inst_32369 = (state_32468[(7)]);
var inst_32371 = cljs.core.chunked_seq_QMARK_.call(null,inst_32369);
var state_32468__$1 = state_32468;
if(inst_32371){
var statearr_32536_32600 = state_32468__$1;
(statearr_32536_32600[(1)] = (19));

} else {
var statearr_32537_32601 = state_32468__$1;
(statearr_32537_32601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (38))){
var inst_32447 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32538_32602 = state_32468__$1;
(statearr_32538_32602[(2)] = inst_32447);

(statearr_32538_32602[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (30))){
var state_32468__$1 = state_32468;
var statearr_32539_32603 = state_32468__$1;
(statearr_32539_32603[(2)] = null);

(statearr_32539_32603[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (10))){
var inst_32350 = (state_32468[(13)]);
var inst_32352 = (state_32468[(16)]);
var inst_32358 = cljs.core._nth.call(null,inst_32350,inst_32352);
var inst_32359 = cljs.core.nth.call(null,inst_32358,(0),null);
var inst_32360 = cljs.core.nth.call(null,inst_32358,(1),null);
var state_32468__$1 = (function (){var statearr_32540 = state_32468;
(statearr_32540[(26)] = inst_32359);

return statearr_32540;
})();
if(cljs.core.truth_(inst_32360)){
var statearr_32541_32604 = state_32468__$1;
(statearr_32541_32604[(1)] = (13));

} else {
var statearr_32542_32605 = state_32468__$1;
(statearr_32542_32605[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (18))){
var inst_32393 = (state_32468[(2)]);
var state_32468__$1 = state_32468;
var statearr_32543_32606 = state_32468__$1;
(statearr_32543_32606[(2)] = inst_32393);

(statearr_32543_32606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (42))){
var state_32468__$1 = state_32468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32468__$1,(45),dchan);
} else {
if((state_val_32469 === (37))){
var inst_32436 = (state_32468[(23)]);
var inst_32427 = (state_32468[(25)]);
var inst_32340 = (state_32468[(11)]);
var inst_32436__$1 = cljs.core.first.call(null,inst_32427);
var inst_32437 = cljs.core.async.put_BANG_.call(null,inst_32436__$1,inst_32340,done);
var state_32468__$1 = (function (){var statearr_32544 = state_32468;
(statearr_32544[(23)] = inst_32436__$1);

return statearr_32544;
})();
if(cljs.core.truth_(inst_32437)){
var statearr_32545_32607 = state_32468__$1;
(statearr_32545_32607[(1)] = (39));

} else {
var statearr_32546_32608 = state_32468__$1;
(statearr_32546_32608[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32469 === (8))){
var inst_32351 = (state_32468[(15)]);
var inst_32352 = (state_32468[(16)]);
var inst_32354 = (inst_32352 < inst_32351);
var inst_32355 = inst_32354;
var state_32468__$1 = state_32468;
if(cljs.core.truth_(inst_32355)){
var statearr_32547_32609 = state_32468__$1;
(statearr_32547_32609[(1)] = (10));

} else {
var statearr_32548_32610 = state_32468__$1;
(statearr_32548_32610[(1)] = (11));

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
});})(c__25507__auto___32556,cs,m,dchan,dctr,done))
;
return ((function (switch__25445__auto__,c__25507__auto___32556,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25446__auto__ = null;
var cljs$core$async$mult_$_state_machine__25446__auto____0 = (function (){
var statearr_32552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32552[(0)] = cljs$core$async$mult_$_state_machine__25446__auto__);

(statearr_32552[(1)] = (1));

return statearr_32552;
});
var cljs$core$async$mult_$_state_machine__25446__auto____1 = (function (state_32468){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_32468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e32553){if((e32553 instanceof Object)){
var ex__25449__auto__ = e32553;
var statearr_32554_32611 = state_32468;
(statearr_32554_32611[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32612 = state_32468;
state_32468 = G__32612;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25446__auto__ = function(state_32468){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25446__auto____1.call(this,state_32468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25446__auto____0;
cljs$core$async$mult_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25446__auto____1;
return cljs$core$async$mult_$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___32556,cs,m,dchan,dctr,done))
})();
var state__25509__auto__ = (function (){var statearr_32555 = f__25508__auto__.call(null);
(statearr_32555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___32556);

return statearr_32555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___32556,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__32614 = arguments.length;
switch (G__32614) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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

cljs.core.async.Mix = (function (){var obj32617 = {};
return obj32617;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__23398__auto__ = m;
if(and__23398__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__23398__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__24046__auto__ = (((m == null))?null:m);
return (function (){var or__23410__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__23398__auto__ = m;
if(and__23398__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__23398__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__24046__auto__ = (((m == null))?null:m);
return (function (){var or__23410__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__23398__auto__ = m;
if(and__23398__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__23398__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__24046__auto__ = (((m == null))?null:m);
return (function (){var or__23410__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__23398__auto__ = m;
if(and__23398__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__23398__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__24046__auto__ = (((m == null))?null:m);
return (function (){var or__23410__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__23398__auto__ = m;
if(and__23398__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__23398__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__24046__auto__ = (((m == null))?null:m);
return (function (){var or__23410__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__24450__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__24450__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32622){
var map__32623 = p__32622;
var map__32623__$1 = ((cljs.core.seq_QMARK_.call(null,map__32623))?cljs.core.apply.call(null,cljs.core.hash_map,map__32623):map__32623);
var opts = map__32623__$1;
var statearr_32624_32627 = state;
(statearr_32624_32627[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__32623,map__32623__$1,opts){
return (function (val){
var statearr_32625_32628 = state;
(statearr_32625_32628[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32623,map__32623__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_32626_32629 = state;
(statearr_32626_32629[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32618){
var G__32619 = cljs.core.first.call(null,seq32618);
var seq32618__$1 = cljs.core.next.call(null,seq32618);
var G__32620 = cljs.core.first.call(null,seq32618__$1);
var seq32618__$2 = cljs.core.next.call(null,seq32618__$1);
var G__32621 = cljs.core.first.call(null,seq32618__$2);
var seq32618__$3 = cljs.core.next.call(null,seq32618__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32619,G__32620,G__32621,seq32618__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t32749 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32749 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32750){
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
this.meta32750 = meta32750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32751,meta32750__$1){
var self__ = this;
var _32751__$1 = this;
return (new cljs.core.async.t32749(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32750__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32751){
var self__ = this;
var _32751__$1 = this;
return self__.meta32750;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32749.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32749.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32749.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32749.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32749.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32749.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32749.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t32749.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32750","meta32750",1836167759,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32749.cljs$lang$type = true;

cljs.core.async.t32749.cljs$lang$ctorStr = "cljs.core.async/t32749";

cljs.core.async.t32749.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__23989__auto__,writer__23990__auto__,opt__23991__auto__){
return cljs.core._write.call(null,writer__23990__auto__,"cljs.core.async/t32749");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32749 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t32749(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32750){
return (new cljs.core.async.t32749(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32750));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32749(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25507__auto___32868 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___32868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___32868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32821){
var state_val_32822 = (state_32821[(1)]);
if((state_val_32822 === (7))){
var inst_32765 = (state_32821[(7)]);
var inst_32770 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32765);
var state_32821__$1 = state_32821;
var statearr_32823_32869 = state_32821__$1;
(statearr_32823_32869[(2)] = inst_32770);

(statearr_32823_32869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (20))){
var inst_32780 = (state_32821[(8)]);
var state_32821__$1 = state_32821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32821__$1,(23),out,inst_32780);
} else {
if((state_val_32822 === (1))){
var inst_32755 = (state_32821[(9)]);
var inst_32755__$1 = calc_state.call(null);
var inst_32756 = cljs.core.seq_QMARK_.call(null,inst_32755__$1);
var state_32821__$1 = (function (){var statearr_32824 = state_32821;
(statearr_32824[(9)] = inst_32755__$1);

return statearr_32824;
})();
if(inst_32756){
var statearr_32825_32870 = state_32821__$1;
(statearr_32825_32870[(1)] = (2));

} else {
var statearr_32826_32871 = state_32821__$1;
(statearr_32826_32871[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (24))){
var inst_32773 = (state_32821[(10)]);
var inst_32765 = inst_32773;
var state_32821__$1 = (function (){var statearr_32827 = state_32821;
(statearr_32827[(7)] = inst_32765);

return statearr_32827;
})();
var statearr_32828_32872 = state_32821__$1;
(statearr_32828_32872[(2)] = null);

(statearr_32828_32872[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (4))){
var inst_32755 = (state_32821[(9)]);
var inst_32761 = (state_32821[(2)]);
var inst_32762 = cljs.core.get.call(null,inst_32761,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32763 = cljs.core.get.call(null,inst_32761,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32764 = cljs.core.get.call(null,inst_32761,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32765 = inst_32755;
var state_32821__$1 = (function (){var statearr_32829 = state_32821;
(statearr_32829[(11)] = inst_32763);

(statearr_32829[(12)] = inst_32764);

(statearr_32829[(13)] = inst_32762);

(statearr_32829[(7)] = inst_32765);

return statearr_32829;
})();
var statearr_32830_32873 = state_32821__$1;
(statearr_32830_32873[(2)] = null);

(statearr_32830_32873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (15))){
var state_32821__$1 = state_32821;
var statearr_32831_32874 = state_32821__$1;
(statearr_32831_32874[(2)] = null);

(statearr_32831_32874[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (21))){
var inst_32773 = (state_32821[(10)]);
var inst_32765 = inst_32773;
var state_32821__$1 = (function (){var statearr_32832 = state_32821;
(statearr_32832[(7)] = inst_32765);

return statearr_32832;
})();
var statearr_32833_32875 = state_32821__$1;
(statearr_32833_32875[(2)] = null);

(statearr_32833_32875[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (13))){
var inst_32817 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32834_32876 = state_32821__$1;
(statearr_32834_32876[(2)] = inst_32817);

(statearr_32834_32876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (22))){
var inst_32815 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32835_32877 = state_32821__$1;
(statearr_32835_32877[(2)] = inst_32815);

(statearr_32835_32877[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (6))){
var inst_32819 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32821__$1,inst_32819);
} else {
if((state_val_32822 === (25))){
var state_32821__$1 = state_32821;
var statearr_32836_32878 = state_32821__$1;
(statearr_32836_32878[(2)] = null);

(statearr_32836_32878[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (17))){
var inst_32795 = (state_32821[(14)]);
var state_32821__$1 = state_32821;
var statearr_32837_32879 = state_32821__$1;
(statearr_32837_32879[(2)] = inst_32795);

(statearr_32837_32879[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (3))){
var inst_32755 = (state_32821[(9)]);
var state_32821__$1 = state_32821;
var statearr_32838_32880 = state_32821__$1;
(statearr_32838_32880[(2)] = inst_32755);

(statearr_32838_32880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (12))){
var inst_32781 = (state_32821[(15)]);
var inst_32795 = (state_32821[(14)]);
var inst_32774 = (state_32821[(16)]);
var inst_32795__$1 = inst_32774.call(null,inst_32781);
var state_32821__$1 = (function (){var statearr_32839 = state_32821;
(statearr_32839[(14)] = inst_32795__$1);

return statearr_32839;
})();
if(cljs.core.truth_(inst_32795__$1)){
var statearr_32840_32881 = state_32821__$1;
(statearr_32840_32881[(1)] = (17));

} else {
var statearr_32841_32882 = state_32821__$1;
(statearr_32841_32882[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (2))){
var inst_32755 = (state_32821[(9)]);
var inst_32758 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32755);
var state_32821__$1 = state_32821;
var statearr_32842_32883 = state_32821__$1;
(statearr_32842_32883[(2)] = inst_32758);

(statearr_32842_32883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (23))){
var inst_32806 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
if(cljs.core.truth_(inst_32806)){
var statearr_32843_32884 = state_32821__$1;
(statearr_32843_32884[(1)] = (24));

} else {
var statearr_32844_32885 = state_32821__$1;
(statearr_32844_32885[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (19))){
var inst_32803 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
if(cljs.core.truth_(inst_32803)){
var statearr_32845_32886 = state_32821__$1;
(statearr_32845_32886[(1)] = (20));

} else {
var statearr_32846_32887 = state_32821__$1;
(statearr_32846_32887[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (11))){
var inst_32780 = (state_32821[(8)]);
var inst_32786 = (inst_32780 == null);
var state_32821__$1 = state_32821;
if(cljs.core.truth_(inst_32786)){
var statearr_32847_32888 = state_32821__$1;
(statearr_32847_32888[(1)] = (14));

} else {
var statearr_32848_32889 = state_32821__$1;
(statearr_32848_32889[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (9))){
var inst_32773 = (state_32821[(10)]);
var inst_32773__$1 = (state_32821[(2)]);
var inst_32774 = cljs.core.get.call(null,inst_32773__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32775 = cljs.core.get.call(null,inst_32773__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32776 = cljs.core.get.call(null,inst_32773__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32821__$1 = (function (){var statearr_32849 = state_32821;
(statearr_32849[(10)] = inst_32773__$1);

(statearr_32849[(17)] = inst_32775);

(statearr_32849[(16)] = inst_32774);

return statearr_32849;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32821__$1,(10),inst_32776);
} else {
if((state_val_32822 === (5))){
var inst_32765 = (state_32821[(7)]);
var inst_32768 = cljs.core.seq_QMARK_.call(null,inst_32765);
var state_32821__$1 = state_32821;
if(inst_32768){
var statearr_32850_32890 = state_32821__$1;
(statearr_32850_32890[(1)] = (7));

} else {
var statearr_32851_32891 = state_32821__$1;
(statearr_32851_32891[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (14))){
var inst_32781 = (state_32821[(15)]);
var inst_32788 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32781);
var state_32821__$1 = state_32821;
var statearr_32852_32892 = state_32821__$1;
(statearr_32852_32892[(2)] = inst_32788);

(statearr_32852_32892[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (26))){
var inst_32811 = (state_32821[(2)]);
var state_32821__$1 = state_32821;
var statearr_32853_32893 = state_32821__$1;
(statearr_32853_32893[(2)] = inst_32811);

(statearr_32853_32893[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (16))){
var inst_32791 = (state_32821[(2)]);
var inst_32792 = calc_state.call(null);
var inst_32765 = inst_32792;
var state_32821__$1 = (function (){var statearr_32854 = state_32821;
(statearr_32854[(18)] = inst_32791);

(statearr_32854[(7)] = inst_32765);

return statearr_32854;
})();
var statearr_32855_32894 = state_32821__$1;
(statearr_32855_32894[(2)] = null);

(statearr_32855_32894[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (10))){
var inst_32780 = (state_32821[(8)]);
var inst_32781 = (state_32821[(15)]);
var inst_32779 = (state_32821[(2)]);
var inst_32780__$1 = cljs.core.nth.call(null,inst_32779,(0),null);
var inst_32781__$1 = cljs.core.nth.call(null,inst_32779,(1),null);
var inst_32782 = (inst_32780__$1 == null);
var inst_32783 = cljs.core._EQ_.call(null,inst_32781__$1,change);
var inst_32784 = (inst_32782) || (inst_32783);
var state_32821__$1 = (function (){var statearr_32856 = state_32821;
(statearr_32856[(8)] = inst_32780__$1);

(statearr_32856[(15)] = inst_32781__$1);

return statearr_32856;
})();
if(cljs.core.truth_(inst_32784)){
var statearr_32857_32895 = state_32821__$1;
(statearr_32857_32895[(1)] = (11));

} else {
var statearr_32858_32896 = state_32821__$1;
(statearr_32858_32896[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (18))){
var inst_32781 = (state_32821[(15)]);
var inst_32775 = (state_32821[(17)]);
var inst_32774 = (state_32821[(16)]);
var inst_32798 = cljs.core.empty_QMARK_.call(null,inst_32774);
var inst_32799 = inst_32775.call(null,inst_32781);
var inst_32800 = cljs.core.not.call(null,inst_32799);
var inst_32801 = (inst_32798) && (inst_32800);
var state_32821__$1 = state_32821;
var statearr_32859_32897 = state_32821__$1;
(statearr_32859_32897[(2)] = inst_32801);

(statearr_32859_32897[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32822 === (8))){
var inst_32765 = (state_32821[(7)]);
var state_32821__$1 = state_32821;
var statearr_32860_32898 = state_32821__$1;
(statearr_32860_32898[(2)] = inst_32765);

(statearr_32860_32898[(1)] = (9));


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
});})(c__25507__auto___32868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25445__auto__,c__25507__auto___32868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25446__auto__ = null;
var cljs$core$async$mix_$_state_machine__25446__auto____0 = (function (){
var statearr_32864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32864[(0)] = cljs$core$async$mix_$_state_machine__25446__auto__);

(statearr_32864[(1)] = (1));

return statearr_32864;
});
var cljs$core$async$mix_$_state_machine__25446__auto____1 = (function (state_32821){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_32821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e32865){if((e32865 instanceof Object)){
var ex__25449__auto__ = e32865;
var statearr_32866_32899 = state_32821;
(statearr_32866_32899[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32865;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32900 = state_32821;
state_32821 = G__32900;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25446__auto__ = function(state_32821){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25446__auto____1.call(this,state_32821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25446__auto____0;
cljs$core$async$mix_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25446__auto____1;
return cljs$core$async$mix_$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___32868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25509__auto__ = (function (){var statearr_32867 = f__25508__auto__.call(null);
(statearr_32867[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___32868);

return statearr_32867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___32868,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
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

cljs.core.async.Pub = (function (){var obj32902 = {};
return obj32902;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__23398__auto__ = p;
if(and__23398__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__23398__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__24046__auto__ = (((p == null))?null:p);
return (function (){var or__23410__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__23398__auto__ = p;
if(and__23398__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__23398__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__24046__auto__ = (((p == null))?null:p);
return (function (){var or__23410__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__32904 = arguments.length;
switch (G__32904) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__23398__auto__ = p;
if(and__23398__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__23398__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__24046__auto__ = (((p == null))?null:p);
return (function (){var or__23410__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__23398__auto__ = p;
if(and__23398__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__23398__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__24046__auto__ = (((p == null))?null:p);
return (function (){var or__23410__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__32908 = arguments.length;
switch (G__32908) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__23410__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__23410__auto__,mults){
return (function (p1__32906_SHARP_){
if(cljs.core.truth_(p1__32906_SHARP_.call(null,topic))){
return p1__32906_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32906_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__23410__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t32909 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32909 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32910){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32910 = meta32910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32911,meta32910__$1){
var self__ = this;
var _32911__$1 = this;
return (new cljs.core.async.t32909(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32910__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t32909.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32911){
var self__ = this;
var _32911__$1 = this;
return self__.meta32910;
});})(mults,ensure_mult))
;

cljs.core.async.t32909.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32909.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t32909.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t32909.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t32909.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t32909.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t32909.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t32909.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32910","meta32910",-550998729,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t32909.cljs$lang$type = true;

cljs.core.async.t32909.cljs$lang$ctorStr = "cljs.core.async/t32909";

cljs.core.async.t32909.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__23989__auto__,writer__23990__auto__,opt__23991__auto__){
return cljs.core._write.call(null,writer__23990__auto__,"cljs.core.async/t32909");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t32909 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t32909(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32910){
return (new cljs.core.async.t32909(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32910));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t32909(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25507__auto___33032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___33032,mults,ensure_mult,p){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___33032,mults,ensure_mult,p){
return (function (state_32983){
var state_val_32984 = (state_32983[(1)]);
if((state_val_32984 === (7))){
var inst_32979 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
var statearr_32985_33033 = state_32983__$1;
(statearr_32985_33033[(2)] = inst_32979);

(statearr_32985_33033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (20))){
var state_32983__$1 = state_32983;
var statearr_32986_33034 = state_32983__$1;
(statearr_32986_33034[(2)] = null);

(statearr_32986_33034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (1))){
var state_32983__$1 = state_32983;
var statearr_32987_33035 = state_32983__$1;
(statearr_32987_33035[(2)] = null);

(statearr_32987_33035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (24))){
var inst_32962 = (state_32983[(7)]);
var inst_32971 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32962);
var state_32983__$1 = state_32983;
var statearr_32988_33036 = state_32983__$1;
(statearr_32988_33036[(2)] = inst_32971);

(statearr_32988_33036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (4))){
var inst_32914 = (state_32983[(8)]);
var inst_32914__$1 = (state_32983[(2)]);
var inst_32915 = (inst_32914__$1 == null);
var state_32983__$1 = (function (){var statearr_32989 = state_32983;
(statearr_32989[(8)] = inst_32914__$1);

return statearr_32989;
})();
if(cljs.core.truth_(inst_32915)){
var statearr_32990_33037 = state_32983__$1;
(statearr_32990_33037[(1)] = (5));

} else {
var statearr_32991_33038 = state_32983__$1;
(statearr_32991_33038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (15))){
var inst_32956 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
var statearr_32992_33039 = state_32983__$1;
(statearr_32992_33039[(2)] = inst_32956);

(statearr_32992_33039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (21))){
var inst_32976 = (state_32983[(2)]);
var state_32983__$1 = (function (){var statearr_32993 = state_32983;
(statearr_32993[(9)] = inst_32976);

return statearr_32993;
})();
var statearr_32994_33040 = state_32983__$1;
(statearr_32994_33040[(2)] = null);

(statearr_32994_33040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (13))){
var inst_32938 = (state_32983[(10)]);
var inst_32940 = cljs.core.chunked_seq_QMARK_.call(null,inst_32938);
var state_32983__$1 = state_32983;
if(inst_32940){
var statearr_32995_33041 = state_32983__$1;
(statearr_32995_33041[(1)] = (16));

} else {
var statearr_32996_33042 = state_32983__$1;
(statearr_32996_33042[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (22))){
var inst_32968 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
if(cljs.core.truth_(inst_32968)){
var statearr_32997_33043 = state_32983__$1;
(statearr_32997_33043[(1)] = (23));

} else {
var statearr_32998_33044 = state_32983__$1;
(statearr_32998_33044[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (6))){
var inst_32964 = (state_32983[(11)]);
var inst_32914 = (state_32983[(8)]);
var inst_32962 = (state_32983[(7)]);
var inst_32962__$1 = topic_fn.call(null,inst_32914);
var inst_32963 = cljs.core.deref.call(null,mults);
var inst_32964__$1 = cljs.core.get.call(null,inst_32963,inst_32962__$1);
var state_32983__$1 = (function (){var statearr_32999 = state_32983;
(statearr_32999[(11)] = inst_32964__$1);

(statearr_32999[(7)] = inst_32962__$1);

return statearr_32999;
})();
if(cljs.core.truth_(inst_32964__$1)){
var statearr_33000_33045 = state_32983__$1;
(statearr_33000_33045[(1)] = (19));

} else {
var statearr_33001_33046 = state_32983__$1;
(statearr_33001_33046[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (25))){
var inst_32973 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
var statearr_33002_33047 = state_32983__$1;
(statearr_33002_33047[(2)] = inst_32973);

(statearr_33002_33047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (17))){
var inst_32938 = (state_32983[(10)]);
var inst_32947 = cljs.core.first.call(null,inst_32938);
var inst_32948 = cljs.core.async.muxch_STAR_.call(null,inst_32947);
var inst_32949 = cljs.core.async.close_BANG_.call(null,inst_32948);
var inst_32950 = cljs.core.next.call(null,inst_32938);
var inst_32924 = inst_32950;
var inst_32925 = null;
var inst_32926 = (0);
var inst_32927 = (0);
var state_32983__$1 = (function (){var statearr_33003 = state_32983;
(statearr_33003[(12)] = inst_32949);

(statearr_33003[(13)] = inst_32924);

(statearr_33003[(14)] = inst_32925);

(statearr_33003[(15)] = inst_32926);

(statearr_33003[(16)] = inst_32927);

return statearr_33003;
})();
var statearr_33004_33048 = state_32983__$1;
(statearr_33004_33048[(2)] = null);

(statearr_33004_33048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (3))){
var inst_32981 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32983__$1,inst_32981);
} else {
if((state_val_32984 === (12))){
var inst_32958 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
var statearr_33005_33049 = state_32983__$1;
(statearr_33005_33049[(2)] = inst_32958);

(statearr_33005_33049[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (2))){
var state_32983__$1 = state_32983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32983__$1,(4),ch);
} else {
if((state_val_32984 === (23))){
var state_32983__$1 = state_32983;
var statearr_33006_33050 = state_32983__$1;
(statearr_33006_33050[(2)] = null);

(statearr_33006_33050[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (19))){
var inst_32964 = (state_32983[(11)]);
var inst_32914 = (state_32983[(8)]);
var inst_32966 = cljs.core.async.muxch_STAR_.call(null,inst_32964);
var state_32983__$1 = state_32983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32983__$1,(22),inst_32966,inst_32914);
} else {
if((state_val_32984 === (11))){
var inst_32938 = (state_32983[(10)]);
var inst_32924 = (state_32983[(13)]);
var inst_32938__$1 = cljs.core.seq.call(null,inst_32924);
var state_32983__$1 = (function (){var statearr_33007 = state_32983;
(statearr_33007[(10)] = inst_32938__$1);

return statearr_33007;
})();
if(inst_32938__$1){
var statearr_33008_33051 = state_32983__$1;
(statearr_33008_33051[(1)] = (13));

} else {
var statearr_33009_33052 = state_32983__$1;
(statearr_33009_33052[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (9))){
var inst_32960 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
var statearr_33010_33053 = state_32983__$1;
(statearr_33010_33053[(2)] = inst_32960);

(statearr_33010_33053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (5))){
var inst_32921 = cljs.core.deref.call(null,mults);
var inst_32922 = cljs.core.vals.call(null,inst_32921);
var inst_32923 = cljs.core.seq.call(null,inst_32922);
var inst_32924 = inst_32923;
var inst_32925 = null;
var inst_32926 = (0);
var inst_32927 = (0);
var state_32983__$1 = (function (){var statearr_33011 = state_32983;
(statearr_33011[(13)] = inst_32924);

(statearr_33011[(14)] = inst_32925);

(statearr_33011[(15)] = inst_32926);

(statearr_33011[(16)] = inst_32927);

return statearr_33011;
})();
var statearr_33012_33054 = state_32983__$1;
(statearr_33012_33054[(2)] = null);

(statearr_33012_33054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (14))){
var state_32983__$1 = state_32983;
var statearr_33016_33055 = state_32983__$1;
(statearr_33016_33055[(2)] = null);

(statearr_33016_33055[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (16))){
var inst_32938 = (state_32983[(10)]);
var inst_32942 = cljs.core.chunk_first.call(null,inst_32938);
var inst_32943 = cljs.core.chunk_rest.call(null,inst_32938);
var inst_32944 = cljs.core.count.call(null,inst_32942);
var inst_32924 = inst_32943;
var inst_32925 = inst_32942;
var inst_32926 = inst_32944;
var inst_32927 = (0);
var state_32983__$1 = (function (){var statearr_33017 = state_32983;
(statearr_33017[(13)] = inst_32924);

(statearr_33017[(14)] = inst_32925);

(statearr_33017[(15)] = inst_32926);

(statearr_33017[(16)] = inst_32927);

return statearr_33017;
})();
var statearr_33018_33056 = state_32983__$1;
(statearr_33018_33056[(2)] = null);

(statearr_33018_33056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (10))){
var inst_32924 = (state_32983[(13)]);
var inst_32925 = (state_32983[(14)]);
var inst_32926 = (state_32983[(15)]);
var inst_32927 = (state_32983[(16)]);
var inst_32932 = cljs.core._nth.call(null,inst_32925,inst_32927);
var inst_32933 = cljs.core.async.muxch_STAR_.call(null,inst_32932);
var inst_32934 = cljs.core.async.close_BANG_.call(null,inst_32933);
var inst_32935 = (inst_32927 + (1));
var tmp33013 = inst_32924;
var tmp33014 = inst_32925;
var tmp33015 = inst_32926;
var inst_32924__$1 = tmp33013;
var inst_32925__$1 = tmp33014;
var inst_32926__$1 = tmp33015;
var inst_32927__$1 = inst_32935;
var state_32983__$1 = (function (){var statearr_33019 = state_32983;
(statearr_33019[(13)] = inst_32924__$1);

(statearr_33019[(14)] = inst_32925__$1);

(statearr_33019[(15)] = inst_32926__$1);

(statearr_33019[(16)] = inst_32927__$1);

(statearr_33019[(17)] = inst_32934);

return statearr_33019;
})();
var statearr_33020_33057 = state_32983__$1;
(statearr_33020_33057[(2)] = null);

(statearr_33020_33057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (18))){
var inst_32953 = (state_32983[(2)]);
var state_32983__$1 = state_32983;
var statearr_33021_33058 = state_32983__$1;
(statearr_33021_33058[(2)] = inst_32953);

(statearr_33021_33058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32984 === (8))){
var inst_32926 = (state_32983[(15)]);
var inst_32927 = (state_32983[(16)]);
var inst_32929 = (inst_32927 < inst_32926);
var inst_32930 = inst_32929;
var state_32983__$1 = state_32983;
if(cljs.core.truth_(inst_32930)){
var statearr_33022_33059 = state_32983__$1;
(statearr_33022_33059[(1)] = (10));

} else {
var statearr_33023_33060 = state_32983__$1;
(statearr_33023_33060[(1)] = (11));

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
});})(c__25507__auto___33032,mults,ensure_mult,p))
;
return ((function (switch__25445__auto__,c__25507__auto___33032,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25446__auto__ = null;
var cljs$core$async$state_machine__25446__auto____0 = (function (){
var statearr_33027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33027[(0)] = cljs$core$async$state_machine__25446__auto__);

(statearr_33027[(1)] = (1));

return statearr_33027;
});
var cljs$core$async$state_machine__25446__auto____1 = (function (state_32983){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_32983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e33028){if((e33028 instanceof Object)){
var ex__25449__auto__ = e33028;
var statearr_33029_33061 = state_32983;
(statearr_33029_33061[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33062 = state_32983;
state_32983 = G__33062;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$state_machine__25446__auto__ = function(state_32983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25446__auto____1.call(this,state_32983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25446__auto____0;
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25446__auto____1;
return cljs$core$async$state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___33032,mults,ensure_mult,p))
})();
var state__25509__auto__ = (function (){var statearr_33030 = f__25508__auto__.call(null);
(statearr_33030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___33032);

return statearr_33030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___33032,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__33064 = arguments.length;
switch (G__33064) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__33067 = arguments.length;
switch (G__33067) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__33070 = arguments.length;
switch (G__33070) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__25507__auto___33140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___33140,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___33140,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33109){
var state_val_33110 = (state_33109[(1)]);
if((state_val_33110 === (7))){
var state_33109__$1 = state_33109;
var statearr_33111_33141 = state_33109__$1;
(statearr_33111_33141[(2)] = null);

(statearr_33111_33141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (1))){
var state_33109__$1 = state_33109;
var statearr_33112_33142 = state_33109__$1;
(statearr_33112_33142[(2)] = null);

(statearr_33112_33142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (4))){
var inst_33073 = (state_33109[(7)]);
var inst_33075 = (inst_33073 < cnt);
var state_33109__$1 = state_33109;
if(cljs.core.truth_(inst_33075)){
var statearr_33113_33143 = state_33109__$1;
(statearr_33113_33143[(1)] = (6));

} else {
var statearr_33114_33144 = state_33109__$1;
(statearr_33114_33144[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (15))){
var inst_33105 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33115_33145 = state_33109__$1;
(statearr_33115_33145[(2)] = inst_33105);

(statearr_33115_33145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (13))){
var inst_33098 = cljs.core.async.close_BANG_.call(null,out);
var state_33109__$1 = state_33109;
var statearr_33116_33146 = state_33109__$1;
(statearr_33116_33146[(2)] = inst_33098);

(statearr_33116_33146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (6))){
var state_33109__$1 = state_33109;
var statearr_33117_33147 = state_33109__$1;
(statearr_33117_33147[(2)] = null);

(statearr_33117_33147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (3))){
var inst_33107 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33109__$1,inst_33107);
} else {
if((state_val_33110 === (12))){
var inst_33095 = (state_33109[(8)]);
var inst_33095__$1 = (state_33109[(2)]);
var inst_33096 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33095__$1);
var state_33109__$1 = (function (){var statearr_33118 = state_33109;
(statearr_33118[(8)] = inst_33095__$1);

return statearr_33118;
})();
if(cljs.core.truth_(inst_33096)){
var statearr_33119_33148 = state_33109__$1;
(statearr_33119_33148[(1)] = (13));

} else {
var statearr_33120_33149 = state_33109__$1;
(statearr_33120_33149[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (2))){
var inst_33072 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33073 = (0);
var state_33109__$1 = (function (){var statearr_33121 = state_33109;
(statearr_33121[(7)] = inst_33073);

(statearr_33121[(9)] = inst_33072);

return statearr_33121;
})();
var statearr_33122_33150 = state_33109__$1;
(statearr_33122_33150[(2)] = null);

(statearr_33122_33150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (11))){
var inst_33073 = (state_33109[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33109,(10),Object,null,(9));
var inst_33082 = chs__$1.call(null,inst_33073);
var inst_33083 = done.call(null,inst_33073);
var inst_33084 = cljs.core.async.take_BANG_.call(null,inst_33082,inst_33083);
var state_33109__$1 = state_33109;
var statearr_33123_33151 = state_33109__$1;
(statearr_33123_33151[(2)] = inst_33084);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33109__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (9))){
var inst_33073 = (state_33109[(7)]);
var inst_33086 = (state_33109[(2)]);
var inst_33087 = (inst_33073 + (1));
var inst_33073__$1 = inst_33087;
var state_33109__$1 = (function (){var statearr_33124 = state_33109;
(statearr_33124[(7)] = inst_33073__$1);

(statearr_33124[(10)] = inst_33086);

return statearr_33124;
})();
var statearr_33125_33152 = state_33109__$1;
(statearr_33125_33152[(2)] = null);

(statearr_33125_33152[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (5))){
var inst_33093 = (state_33109[(2)]);
var state_33109__$1 = (function (){var statearr_33126 = state_33109;
(statearr_33126[(11)] = inst_33093);

return statearr_33126;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33109__$1,(12),dchan);
} else {
if((state_val_33110 === (14))){
var inst_33095 = (state_33109[(8)]);
var inst_33100 = cljs.core.apply.call(null,f,inst_33095);
var state_33109__$1 = state_33109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33109__$1,(16),out,inst_33100);
} else {
if((state_val_33110 === (16))){
var inst_33102 = (state_33109[(2)]);
var state_33109__$1 = (function (){var statearr_33127 = state_33109;
(statearr_33127[(12)] = inst_33102);

return statearr_33127;
})();
var statearr_33128_33153 = state_33109__$1;
(statearr_33128_33153[(2)] = null);

(statearr_33128_33153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (10))){
var inst_33077 = (state_33109[(2)]);
var inst_33078 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33109__$1 = (function (){var statearr_33129 = state_33109;
(statearr_33129[(13)] = inst_33077);

return statearr_33129;
})();
var statearr_33130_33154 = state_33109__$1;
(statearr_33130_33154[(2)] = inst_33078);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33109__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33110 === (8))){
var inst_33091 = (state_33109[(2)]);
var state_33109__$1 = state_33109;
var statearr_33131_33155 = state_33109__$1;
(statearr_33131_33155[(2)] = inst_33091);

(statearr_33131_33155[(1)] = (5));


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
});})(c__25507__auto___33140,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25445__auto__,c__25507__auto___33140,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25446__auto__ = null;
var cljs$core$async$state_machine__25446__auto____0 = (function (){
var statearr_33135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33135[(0)] = cljs$core$async$state_machine__25446__auto__);

(statearr_33135[(1)] = (1));

return statearr_33135;
});
var cljs$core$async$state_machine__25446__auto____1 = (function (state_33109){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_33109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e33136){if((e33136 instanceof Object)){
var ex__25449__auto__ = e33136;
var statearr_33137_33156 = state_33109;
(statearr_33137_33156[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33157 = state_33109;
state_33109 = G__33157;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$state_machine__25446__auto__ = function(state_33109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25446__auto____1.call(this,state_33109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25446__auto____0;
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25446__auto____1;
return cljs$core$async$state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___33140,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25509__auto__ = (function (){var statearr_33138 = f__25508__auto__.call(null);
(statearr_33138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___33140);

return statearr_33138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___33140,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__33160 = arguments.length;
switch (G__33160) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25507__auto___33215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___33215,out){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___33215,out){
return (function (state_33190){
var state_val_33191 = (state_33190[(1)]);
if((state_val_33191 === (7))){
var inst_33169 = (state_33190[(7)]);
var inst_33170 = (state_33190[(8)]);
var inst_33169__$1 = (state_33190[(2)]);
var inst_33170__$1 = cljs.core.nth.call(null,inst_33169__$1,(0),null);
var inst_33171 = cljs.core.nth.call(null,inst_33169__$1,(1),null);
var inst_33172 = (inst_33170__$1 == null);
var state_33190__$1 = (function (){var statearr_33192 = state_33190;
(statearr_33192[(7)] = inst_33169__$1);

(statearr_33192[(9)] = inst_33171);

(statearr_33192[(8)] = inst_33170__$1);

return statearr_33192;
})();
if(cljs.core.truth_(inst_33172)){
var statearr_33193_33216 = state_33190__$1;
(statearr_33193_33216[(1)] = (8));

} else {
var statearr_33194_33217 = state_33190__$1;
(statearr_33194_33217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (1))){
var inst_33161 = cljs.core.vec.call(null,chs);
var inst_33162 = inst_33161;
var state_33190__$1 = (function (){var statearr_33195 = state_33190;
(statearr_33195[(10)] = inst_33162);

return statearr_33195;
})();
var statearr_33196_33218 = state_33190__$1;
(statearr_33196_33218[(2)] = null);

(statearr_33196_33218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (4))){
var inst_33162 = (state_33190[(10)]);
var state_33190__$1 = state_33190;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33190__$1,(7),inst_33162);
} else {
if((state_val_33191 === (6))){
var inst_33186 = (state_33190[(2)]);
var state_33190__$1 = state_33190;
var statearr_33197_33219 = state_33190__$1;
(statearr_33197_33219[(2)] = inst_33186);

(statearr_33197_33219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (3))){
var inst_33188 = (state_33190[(2)]);
var state_33190__$1 = state_33190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33190__$1,inst_33188);
} else {
if((state_val_33191 === (2))){
var inst_33162 = (state_33190[(10)]);
var inst_33164 = cljs.core.count.call(null,inst_33162);
var inst_33165 = (inst_33164 > (0));
var state_33190__$1 = state_33190;
if(cljs.core.truth_(inst_33165)){
var statearr_33199_33220 = state_33190__$1;
(statearr_33199_33220[(1)] = (4));

} else {
var statearr_33200_33221 = state_33190__$1;
(statearr_33200_33221[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (11))){
var inst_33162 = (state_33190[(10)]);
var inst_33179 = (state_33190[(2)]);
var tmp33198 = inst_33162;
var inst_33162__$1 = tmp33198;
var state_33190__$1 = (function (){var statearr_33201 = state_33190;
(statearr_33201[(11)] = inst_33179);

(statearr_33201[(10)] = inst_33162__$1);

return statearr_33201;
})();
var statearr_33202_33222 = state_33190__$1;
(statearr_33202_33222[(2)] = null);

(statearr_33202_33222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (9))){
var inst_33170 = (state_33190[(8)]);
var state_33190__$1 = state_33190;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33190__$1,(11),out,inst_33170);
} else {
if((state_val_33191 === (5))){
var inst_33184 = cljs.core.async.close_BANG_.call(null,out);
var state_33190__$1 = state_33190;
var statearr_33203_33223 = state_33190__$1;
(statearr_33203_33223[(2)] = inst_33184);

(statearr_33203_33223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (10))){
var inst_33182 = (state_33190[(2)]);
var state_33190__$1 = state_33190;
var statearr_33204_33224 = state_33190__$1;
(statearr_33204_33224[(2)] = inst_33182);

(statearr_33204_33224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33191 === (8))){
var inst_33169 = (state_33190[(7)]);
var inst_33171 = (state_33190[(9)]);
var inst_33170 = (state_33190[(8)]);
var inst_33162 = (state_33190[(10)]);
var inst_33174 = (function (){var cs = inst_33162;
var vec__33167 = inst_33169;
var v = inst_33170;
var c = inst_33171;
return ((function (cs,vec__33167,v,c,inst_33169,inst_33171,inst_33170,inst_33162,state_val_33191,c__25507__auto___33215,out){
return (function (p1__33158_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33158_SHARP_);
});
;})(cs,vec__33167,v,c,inst_33169,inst_33171,inst_33170,inst_33162,state_val_33191,c__25507__auto___33215,out))
})();
var inst_33175 = cljs.core.filterv.call(null,inst_33174,inst_33162);
var inst_33162__$1 = inst_33175;
var state_33190__$1 = (function (){var statearr_33205 = state_33190;
(statearr_33205[(10)] = inst_33162__$1);

return statearr_33205;
})();
var statearr_33206_33225 = state_33190__$1;
(statearr_33206_33225[(2)] = null);

(statearr_33206_33225[(1)] = (2));


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
});})(c__25507__auto___33215,out))
;
return ((function (switch__25445__auto__,c__25507__auto___33215,out){
return (function() {
var cljs$core$async$state_machine__25446__auto__ = null;
var cljs$core$async$state_machine__25446__auto____0 = (function (){
var statearr_33210 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33210[(0)] = cljs$core$async$state_machine__25446__auto__);

(statearr_33210[(1)] = (1));

return statearr_33210;
});
var cljs$core$async$state_machine__25446__auto____1 = (function (state_33190){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_33190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e33211){if((e33211 instanceof Object)){
var ex__25449__auto__ = e33211;
var statearr_33212_33226 = state_33190;
(statearr_33212_33226[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33227 = state_33190;
state_33190 = G__33227;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$state_machine__25446__auto__ = function(state_33190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25446__auto____1.call(this,state_33190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25446__auto____0;
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25446__auto____1;
return cljs$core$async$state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___33215,out))
})();
var state__25509__auto__ = (function (){var statearr_33213 = f__25508__auto__.call(null);
(statearr_33213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___33215);

return statearr_33213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___33215,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__33229 = arguments.length;
switch (G__33229) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25507__auto___33277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___33277,out){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___33277,out){
return (function (state_33253){
var state_val_33254 = (state_33253[(1)]);
if((state_val_33254 === (7))){
var inst_33235 = (state_33253[(7)]);
var inst_33235__$1 = (state_33253[(2)]);
var inst_33236 = (inst_33235__$1 == null);
var inst_33237 = cljs.core.not.call(null,inst_33236);
var state_33253__$1 = (function (){var statearr_33255 = state_33253;
(statearr_33255[(7)] = inst_33235__$1);

return statearr_33255;
})();
if(inst_33237){
var statearr_33256_33278 = state_33253__$1;
(statearr_33256_33278[(1)] = (8));

} else {
var statearr_33257_33279 = state_33253__$1;
(statearr_33257_33279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (1))){
var inst_33230 = (0);
var state_33253__$1 = (function (){var statearr_33258 = state_33253;
(statearr_33258[(8)] = inst_33230);

return statearr_33258;
})();
var statearr_33259_33280 = state_33253__$1;
(statearr_33259_33280[(2)] = null);

(statearr_33259_33280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (4))){
var state_33253__$1 = state_33253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33253__$1,(7),ch);
} else {
if((state_val_33254 === (6))){
var inst_33248 = (state_33253[(2)]);
var state_33253__$1 = state_33253;
var statearr_33260_33281 = state_33253__$1;
(statearr_33260_33281[(2)] = inst_33248);

(statearr_33260_33281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (3))){
var inst_33250 = (state_33253[(2)]);
var inst_33251 = cljs.core.async.close_BANG_.call(null,out);
var state_33253__$1 = (function (){var statearr_33261 = state_33253;
(statearr_33261[(9)] = inst_33250);

return statearr_33261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33253__$1,inst_33251);
} else {
if((state_val_33254 === (2))){
var inst_33230 = (state_33253[(8)]);
var inst_33232 = (inst_33230 < n);
var state_33253__$1 = state_33253;
if(cljs.core.truth_(inst_33232)){
var statearr_33262_33282 = state_33253__$1;
(statearr_33262_33282[(1)] = (4));

} else {
var statearr_33263_33283 = state_33253__$1;
(statearr_33263_33283[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (11))){
var inst_33230 = (state_33253[(8)]);
var inst_33240 = (state_33253[(2)]);
var inst_33241 = (inst_33230 + (1));
var inst_33230__$1 = inst_33241;
var state_33253__$1 = (function (){var statearr_33264 = state_33253;
(statearr_33264[(8)] = inst_33230__$1);

(statearr_33264[(10)] = inst_33240);

return statearr_33264;
})();
var statearr_33265_33284 = state_33253__$1;
(statearr_33265_33284[(2)] = null);

(statearr_33265_33284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (9))){
var state_33253__$1 = state_33253;
var statearr_33266_33285 = state_33253__$1;
(statearr_33266_33285[(2)] = null);

(statearr_33266_33285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (5))){
var state_33253__$1 = state_33253;
var statearr_33267_33286 = state_33253__$1;
(statearr_33267_33286[(2)] = null);

(statearr_33267_33286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (10))){
var inst_33245 = (state_33253[(2)]);
var state_33253__$1 = state_33253;
var statearr_33268_33287 = state_33253__$1;
(statearr_33268_33287[(2)] = inst_33245);

(statearr_33268_33287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33254 === (8))){
var inst_33235 = (state_33253[(7)]);
var state_33253__$1 = state_33253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33253__$1,(11),out,inst_33235);
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
});})(c__25507__auto___33277,out))
;
return ((function (switch__25445__auto__,c__25507__auto___33277,out){
return (function() {
var cljs$core$async$state_machine__25446__auto__ = null;
var cljs$core$async$state_machine__25446__auto____0 = (function (){
var statearr_33272 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33272[(0)] = cljs$core$async$state_machine__25446__auto__);

(statearr_33272[(1)] = (1));

return statearr_33272;
});
var cljs$core$async$state_machine__25446__auto____1 = (function (state_33253){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_33253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e33273){if((e33273 instanceof Object)){
var ex__25449__auto__ = e33273;
var statearr_33274_33288 = state_33253;
(statearr_33274_33288[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33289 = state_33253;
state_33253 = G__33289;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$state_machine__25446__auto__ = function(state_33253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25446__auto____1.call(this,state_33253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25446__auto____0;
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25446__auto____1;
return cljs$core$async$state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___33277,out))
})();
var state__25509__auto__ = (function (){var statearr_33275 = f__25508__auto__.call(null);
(statearr_33275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___33277);

return statearr_33275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___33277,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t33297 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33297 = (function (map_LT_,f,ch,meta33298){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33298 = meta33298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33299,meta33298__$1){
var self__ = this;
var _33299__$1 = this;
return (new cljs.core.async.t33297(self__.map_LT_,self__.f,self__.ch,meta33298__$1));
});

cljs.core.async.t33297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33299){
var self__ = this;
var _33299__$1 = this;
return self__.meta33298;
});

cljs.core.async.t33297.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33297.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33297.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33297.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33297.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t33300 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33300 = (function (map_LT_,f,ch,meta33298,_,fn1,meta33301){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33298 = meta33298;
this._ = _;
this.fn1 = fn1;
this.meta33301 = meta33301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33302,meta33301__$1){
var self__ = this;
var _33302__$1 = this;
return (new cljs.core.async.t33300(self__.map_LT_,self__.f,self__.ch,self__.meta33298,self__._,self__.fn1,meta33301__$1));
});})(___$1))
;

cljs.core.async.t33300.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33302){
var self__ = this;
var _33302__$1 = this;
return self__.meta33301;
});})(___$1))
;

cljs.core.async.t33300.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33300.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t33300.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33290_SHARP_){
return f1.call(null,(((p1__33290_SHARP_ == null))?null:self__.f.call(null,p1__33290_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33300.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33298","meta33298",-1384496803,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33301","meta33301",-276241258,null)], null);
});})(___$1))
;

cljs.core.async.t33300.cljs$lang$type = true;

cljs.core.async.t33300.cljs$lang$ctorStr = "cljs.core.async/t33300";

cljs.core.async.t33300.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__23989__auto__,writer__23990__auto__,opt__23991__auto__){
return cljs.core._write.call(null,writer__23990__auto__,"cljs.core.async/t33300");
});})(___$1))
;

cljs.core.async.__GT_t33300 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t33300(map_LT___$1,f__$1,ch__$1,meta33298__$1,___$2,fn1__$1,meta33301){
return (new cljs.core.async.t33300(map_LT___$1,f__$1,ch__$1,meta33298__$1,___$2,fn1__$1,meta33301));
});})(___$1))
;

}

return (new cljs.core.async.t33300(self__.map_LT_,self__.f,self__.ch,self__.meta33298,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__23398__auto__ = ret;
if(cljs.core.truth_(and__23398__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__23398__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t33297.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33297.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t33297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33298","meta33298",-1384496803,null)], null);
});

cljs.core.async.t33297.cljs$lang$type = true;

cljs.core.async.t33297.cljs$lang$ctorStr = "cljs.core.async/t33297";

cljs.core.async.t33297.cljs$lang$ctorPrWriter = (function (this__23989__auto__,writer__23990__auto__,opt__23991__auto__){
return cljs.core._write.call(null,writer__23990__auto__,"cljs.core.async/t33297");
});

cljs.core.async.__GT_t33297 = (function cljs$core$async$map_LT__$___GT_t33297(map_LT___$1,f__$1,ch__$1,meta33298){
return (new cljs.core.async.t33297(map_LT___$1,f__$1,ch__$1,meta33298));
});

}

return (new cljs.core.async.t33297(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t33306 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33306 = (function (map_GT_,f,ch,meta33307){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33307 = meta33307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33308,meta33307__$1){
var self__ = this;
var _33308__$1 = this;
return (new cljs.core.async.t33306(self__.map_GT_,self__.f,self__.ch,meta33307__$1));
});

cljs.core.async.t33306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33308){
var self__ = this;
var _33308__$1 = this;
return self__.meta33307;
});

cljs.core.async.t33306.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33306.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33306.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33306.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33306.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33306.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t33306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33307","meta33307",1579055410,null)], null);
});

cljs.core.async.t33306.cljs$lang$type = true;

cljs.core.async.t33306.cljs$lang$ctorStr = "cljs.core.async/t33306";

cljs.core.async.t33306.cljs$lang$ctorPrWriter = (function (this__23989__auto__,writer__23990__auto__,opt__23991__auto__){
return cljs.core._write.call(null,writer__23990__auto__,"cljs.core.async/t33306");
});

cljs.core.async.__GT_t33306 = (function cljs$core$async$map_GT__$___GT_t33306(map_GT___$1,f__$1,ch__$1,meta33307){
return (new cljs.core.async.t33306(map_GT___$1,f__$1,ch__$1,meta33307));
});

}

return (new cljs.core.async.t33306(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t33312 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33312 = (function (filter_GT_,p,ch,meta33313){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33313 = meta33313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33314,meta33313__$1){
var self__ = this;
var _33314__$1 = this;
return (new cljs.core.async.t33312(self__.filter_GT_,self__.p,self__.ch,meta33313__$1));
});

cljs.core.async.t33312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33314){
var self__ = this;
var _33314__$1 = this;
return self__.meta33313;
});

cljs.core.async.t33312.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33312.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33312.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33312.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t33312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33313","meta33313",-45000776,null)], null);
});

cljs.core.async.t33312.cljs$lang$type = true;

cljs.core.async.t33312.cljs$lang$ctorStr = "cljs.core.async/t33312";

cljs.core.async.t33312.cljs$lang$ctorPrWriter = (function (this__23989__auto__,writer__23990__auto__,opt__23991__auto__){
return cljs.core._write.call(null,writer__23990__auto__,"cljs.core.async/t33312");
});

cljs.core.async.__GT_t33312 = (function cljs$core$async$filter_GT__$___GT_t33312(filter_GT___$1,p__$1,ch__$1,meta33313){
return (new cljs.core.async.t33312(filter_GT___$1,p__$1,ch__$1,meta33313));
});

}

return (new cljs.core.async.t33312(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__33316 = arguments.length;
switch (G__33316) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25507__auto___33359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___33359,out){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___33359,out){
return (function (state_33337){
var state_val_33338 = (state_33337[(1)]);
if((state_val_33338 === (7))){
var inst_33333 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
var statearr_33339_33360 = state_33337__$1;
(statearr_33339_33360[(2)] = inst_33333);

(statearr_33339_33360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (1))){
var state_33337__$1 = state_33337;
var statearr_33340_33361 = state_33337__$1;
(statearr_33340_33361[(2)] = null);

(statearr_33340_33361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (4))){
var inst_33319 = (state_33337[(7)]);
var inst_33319__$1 = (state_33337[(2)]);
var inst_33320 = (inst_33319__$1 == null);
var state_33337__$1 = (function (){var statearr_33341 = state_33337;
(statearr_33341[(7)] = inst_33319__$1);

return statearr_33341;
})();
if(cljs.core.truth_(inst_33320)){
var statearr_33342_33362 = state_33337__$1;
(statearr_33342_33362[(1)] = (5));

} else {
var statearr_33343_33363 = state_33337__$1;
(statearr_33343_33363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (6))){
var inst_33319 = (state_33337[(7)]);
var inst_33324 = p.call(null,inst_33319);
var state_33337__$1 = state_33337;
if(cljs.core.truth_(inst_33324)){
var statearr_33344_33364 = state_33337__$1;
(statearr_33344_33364[(1)] = (8));

} else {
var statearr_33345_33365 = state_33337__$1;
(statearr_33345_33365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (3))){
var inst_33335 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33337__$1,inst_33335);
} else {
if((state_val_33338 === (2))){
var state_33337__$1 = state_33337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33337__$1,(4),ch);
} else {
if((state_val_33338 === (11))){
var inst_33327 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
var statearr_33346_33366 = state_33337__$1;
(statearr_33346_33366[(2)] = inst_33327);

(statearr_33346_33366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (9))){
var state_33337__$1 = state_33337;
var statearr_33347_33367 = state_33337__$1;
(statearr_33347_33367[(2)] = null);

(statearr_33347_33367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (5))){
var inst_33322 = cljs.core.async.close_BANG_.call(null,out);
var state_33337__$1 = state_33337;
var statearr_33348_33368 = state_33337__$1;
(statearr_33348_33368[(2)] = inst_33322);

(statearr_33348_33368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (10))){
var inst_33330 = (state_33337[(2)]);
var state_33337__$1 = (function (){var statearr_33349 = state_33337;
(statearr_33349[(8)] = inst_33330);

return statearr_33349;
})();
var statearr_33350_33369 = state_33337__$1;
(statearr_33350_33369[(2)] = null);

(statearr_33350_33369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (8))){
var inst_33319 = (state_33337[(7)]);
var state_33337__$1 = state_33337;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33337__$1,(11),out,inst_33319);
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
});})(c__25507__auto___33359,out))
;
return ((function (switch__25445__auto__,c__25507__auto___33359,out){
return (function() {
var cljs$core$async$state_machine__25446__auto__ = null;
var cljs$core$async$state_machine__25446__auto____0 = (function (){
var statearr_33354 = [null,null,null,null,null,null,null,null,null];
(statearr_33354[(0)] = cljs$core$async$state_machine__25446__auto__);

(statearr_33354[(1)] = (1));

return statearr_33354;
});
var cljs$core$async$state_machine__25446__auto____1 = (function (state_33337){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_33337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e33355){if((e33355 instanceof Object)){
var ex__25449__auto__ = e33355;
var statearr_33356_33370 = state_33337;
(statearr_33356_33370[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33371 = state_33337;
state_33337 = G__33371;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$state_machine__25446__auto__ = function(state_33337){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25446__auto____1.call(this,state_33337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25446__auto____0;
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25446__auto____1;
return cljs$core$async$state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___33359,out))
})();
var state__25509__auto__ = (function (){var statearr_33357 = f__25508__auto__.call(null);
(statearr_33357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___33359);

return statearr_33357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___33359,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__33373 = arguments.length;
switch (G__33373) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var c__25507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto__){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto__){
return (function (state_33540){
var state_val_33541 = (state_33540[(1)]);
if((state_val_33541 === (7))){
var inst_33536 = (state_33540[(2)]);
var state_33540__$1 = state_33540;
var statearr_33542_33583 = state_33540__$1;
(statearr_33542_33583[(2)] = inst_33536);

(statearr_33542_33583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (20))){
var inst_33506 = (state_33540[(7)]);
var inst_33517 = (state_33540[(2)]);
var inst_33518 = cljs.core.next.call(null,inst_33506);
var inst_33492 = inst_33518;
var inst_33493 = null;
var inst_33494 = (0);
var inst_33495 = (0);
var state_33540__$1 = (function (){var statearr_33543 = state_33540;
(statearr_33543[(8)] = inst_33492);

(statearr_33543[(9)] = inst_33495);

(statearr_33543[(10)] = inst_33517);

(statearr_33543[(11)] = inst_33494);

(statearr_33543[(12)] = inst_33493);

return statearr_33543;
})();
var statearr_33544_33584 = state_33540__$1;
(statearr_33544_33584[(2)] = null);

(statearr_33544_33584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (1))){
var state_33540__$1 = state_33540;
var statearr_33545_33585 = state_33540__$1;
(statearr_33545_33585[(2)] = null);

(statearr_33545_33585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (4))){
var inst_33481 = (state_33540[(13)]);
var inst_33481__$1 = (state_33540[(2)]);
var inst_33482 = (inst_33481__$1 == null);
var state_33540__$1 = (function (){var statearr_33546 = state_33540;
(statearr_33546[(13)] = inst_33481__$1);

return statearr_33546;
})();
if(cljs.core.truth_(inst_33482)){
var statearr_33547_33586 = state_33540__$1;
(statearr_33547_33586[(1)] = (5));

} else {
var statearr_33548_33587 = state_33540__$1;
(statearr_33548_33587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (15))){
var state_33540__$1 = state_33540;
var statearr_33552_33588 = state_33540__$1;
(statearr_33552_33588[(2)] = null);

(statearr_33552_33588[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (21))){
var state_33540__$1 = state_33540;
var statearr_33553_33589 = state_33540__$1;
(statearr_33553_33589[(2)] = null);

(statearr_33553_33589[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (13))){
var inst_33492 = (state_33540[(8)]);
var inst_33495 = (state_33540[(9)]);
var inst_33494 = (state_33540[(11)]);
var inst_33493 = (state_33540[(12)]);
var inst_33502 = (state_33540[(2)]);
var inst_33503 = (inst_33495 + (1));
var tmp33549 = inst_33492;
var tmp33550 = inst_33494;
var tmp33551 = inst_33493;
var inst_33492__$1 = tmp33549;
var inst_33493__$1 = tmp33551;
var inst_33494__$1 = tmp33550;
var inst_33495__$1 = inst_33503;
var state_33540__$1 = (function (){var statearr_33554 = state_33540;
(statearr_33554[(14)] = inst_33502);

(statearr_33554[(8)] = inst_33492__$1);

(statearr_33554[(9)] = inst_33495__$1);

(statearr_33554[(11)] = inst_33494__$1);

(statearr_33554[(12)] = inst_33493__$1);

return statearr_33554;
})();
var statearr_33555_33590 = state_33540__$1;
(statearr_33555_33590[(2)] = null);

(statearr_33555_33590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (22))){
var state_33540__$1 = state_33540;
var statearr_33556_33591 = state_33540__$1;
(statearr_33556_33591[(2)] = null);

(statearr_33556_33591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (6))){
var inst_33481 = (state_33540[(13)]);
var inst_33490 = f.call(null,inst_33481);
var inst_33491 = cljs.core.seq.call(null,inst_33490);
var inst_33492 = inst_33491;
var inst_33493 = null;
var inst_33494 = (0);
var inst_33495 = (0);
var state_33540__$1 = (function (){var statearr_33557 = state_33540;
(statearr_33557[(8)] = inst_33492);

(statearr_33557[(9)] = inst_33495);

(statearr_33557[(11)] = inst_33494);

(statearr_33557[(12)] = inst_33493);

return statearr_33557;
})();
var statearr_33558_33592 = state_33540__$1;
(statearr_33558_33592[(2)] = null);

(statearr_33558_33592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (17))){
var inst_33506 = (state_33540[(7)]);
var inst_33510 = cljs.core.chunk_first.call(null,inst_33506);
var inst_33511 = cljs.core.chunk_rest.call(null,inst_33506);
var inst_33512 = cljs.core.count.call(null,inst_33510);
var inst_33492 = inst_33511;
var inst_33493 = inst_33510;
var inst_33494 = inst_33512;
var inst_33495 = (0);
var state_33540__$1 = (function (){var statearr_33559 = state_33540;
(statearr_33559[(8)] = inst_33492);

(statearr_33559[(9)] = inst_33495);

(statearr_33559[(11)] = inst_33494);

(statearr_33559[(12)] = inst_33493);

return statearr_33559;
})();
var statearr_33560_33593 = state_33540__$1;
(statearr_33560_33593[(2)] = null);

(statearr_33560_33593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (3))){
var inst_33538 = (state_33540[(2)]);
var state_33540__$1 = state_33540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33540__$1,inst_33538);
} else {
if((state_val_33541 === (12))){
var inst_33526 = (state_33540[(2)]);
var state_33540__$1 = state_33540;
var statearr_33561_33594 = state_33540__$1;
(statearr_33561_33594[(2)] = inst_33526);

(statearr_33561_33594[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (2))){
var state_33540__$1 = state_33540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33540__$1,(4),in$);
} else {
if((state_val_33541 === (23))){
var inst_33534 = (state_33540[(2)]);
var state_33540__$1 = state_33540;
var statearr_33562_33595 = state_33540__$1;
(statearr_33562_33595[(2)] = inst_33534);

(statearr_33562_33595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (19))){
var inst_33521 = (state_33540[(2)]);
var state_33540__$1 = state_33540;
var statearr_33563_33596 = state_33540__$1;
(statearr_33563_33596[(2)] = inst_33521);

(statearr_33563_33596[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (11))){
var inst_33506 = (state_33540[(7)]);
var inst_33492 = (state_33540[(8)]);
var inst_33506__$1 = cljs.core.seq.call(null,inst_33492);
var state_33540__$1 = (function (){var statearr_33564 = state_33540;
(statearr_33564[(7)] = inst_33506__$1);

return statearr_33564;
})();
if(inst_33506__$1){
var statearr_33565_33597 = state_33540__$1;
(statearr_33565_33597[(1)] = (14));

} else {
var statearr_33566_33598 = state_33540__$1;
(statearr_33566_33598[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (9))){
var inst_33528 = (state_33540[(2)]);
var inst_33529 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33540__$1 = (function (){var statearr_33567 = state_33540;
(statearr_33567[(15)] = inst_33528);

return statearr_33567;
})();
if(cljs.core.truth_(inst_33529)){
var statearr_33568_33599 = state_33540__$1;
(statearr_33568_33599[(1)] = (21));

} else {
var statearr_33569_33600 = state_33540__$1;
(statearr_33569_33600[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (5))){
var inst_33484 = cljs.core.async.close_BANG_.call(null,out);
var state_33540__$1 = state_33540;
var statearr_33570_33601 = state_33540__$1;
(statearr_33570_33601[(2)] = inst_33484);

(statearr_33570_33601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (14))){
var inst_33506 = (state_33540[(7)]);
var inst_33508 = cljs.core.chunked_seq_QMARK_.call(null,inst_33506);
var state_33540__$1 = state_33540;
if(inst_33508){
var statearr_33571_33602 = state_33540__$1;
(statearr_33571_33602[(1)] = (17));

} else {
var statearr_33572_33603 = state_33540__$1;
(statearr_33572_33603[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (16))){
var inst_33524 = (state_33540[(2)]);
var state_33540__$1 = state_33540;
var statearr_33573_33604 = state_33540__$1;
(statearr_33573_33604[(2)] = inst_33524);

(statearr_33573_33604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33541 === (10))){
var inst_33495 = (state_33540[(9)]);
var inst_33493 = (state_33540[(12)]);
var inst_33500 = cljs.core._nth.call(null,inst_33493,inst_33495);
var state_33540__$1 = state_33540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33540__$1,(13),out,inst_33500);
} else {
if((state_val_33541 === (18))){
var inst_33506 = (state_33540[(7)]);
var inst_33515 = cljs.core.first.call(null,inst_33506);
var state_33540__$1 = state_33540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33540__$1,(20),out,inst_33515);
} else {
if((state_val_33541 === (8))){
var inst_33495 = (state_33540[(9)]);
var inst_33494 = (state_33540[(11)]);
var inst_33497 = (inst_33495 < inst_33494);
var inst_33498 = inst_33497;
var state_33540__$1 = state_33540;
if(cljs.core.truth_(inst_33498)){
var statearr_33574_33605 = state_33540__$1;
(statearr_33574_33605[(1)] = (10));

} else {
var statearr_33575_33606 = state_33540__$1;
(statearr_33575_33606[(1)] = (11));

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
});})(c__25507__auto__))
;
return ((function (switch__25445__auto__,c__25507__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25446__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25446__auto____0 = (function (){
var statearr_33579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33579[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25446__auto__);

(statearr_33579[(1)] = (1));

return statearr_33579;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25446__auto____1 = (function (state_33540){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_33540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e33580){if((e33580 instanceof Object)){
var ex__25449__auto__ = e33580;
var statearr_33581_33607 = state_33540;
(statearr_33581_33607[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33608 = state_33540;
state_33540 = G__33608;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25446__auto__ = function(state_33540){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25446__auto____1.call(this,state_33540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25446__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25446__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto__))
})();
var state__25509__auto__ = (function (){var statearr_33582 = f__25508__auto__.call(null);
(statearr_33582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto__);

return statearr_33582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto__))
);

return c__25507__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__33610 = arguments.length;
switch (G__33610) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__33613 = arguments.length;
switch (G__33613) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__33616 = arguments.length;
switch (G__33616) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25507__auto___33666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___33666,out){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___33666,out){
return (function (state_33640){
var state_val_33641 = (state_33640[(1)]);
if((state_val_33641 === (7))){
var inst_33635 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33642_33667 = state_33640__$1;
(statearr_33642_33667[(2)] = inst_33635);

(statearr_33642_33667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (1))){
var inst_33617 = null;
var state_33640__$1 = (function (){var statearr_33643 = state_33640;
(statearr_33643[(7)] = inst_33617);

return statearr_33643;
})();
var statearr_33644_33668 = state_33640__$1;
(statearr_33644_33668[(2)] = null);

(statearr_33644_33668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (4))){
var inst_33620 = (state_33640[(8)]);
var inst_33620__$1 = (state_33640[(2)]);
var inst_33621 = (inst_33620__$1 == null);
var inst_33622 = cljs.core.not.call(null,inst_33621);
var state_33640__$1 = (function (){var statearr_33645 = state_33640;
(statearr_33645[(8)] = inst_33620__$1);

return statearr_33645;
})();
if(inst_33622){
var statearr_33646_33669 = state_33640__$1;
(statearr_33646_33669[(1)] = (5));

} else {
var statearr_33647_33670 = state_33640__$1;
(statearr_33647_33670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (6))){
var state_33640__$1 = state_33640;
var statearr_33648_33671 = state_33640__$1;
(statearr_33648_33671[(2)] = null);

(statearr_33648_33671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (3))){
var inst_33637 = (state_33640[(2)]);
var inst_33638 = cljs.core.async.close_BANG_.call(null,out);
var state_33640__$1 = (function (){var statearr_33649 = state_33640;
(statearr_33649[(9)] = inst_33637);

return statearr_33649;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33640__$1,inst_33638);
} else {
if((state_val_33641 === (2))){
var state_33640__$1 = state_33640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33640__$1,(4),ch);
} else {
if((state_val_33641 === (11))){
var inst_33620 = (state_33640[(8)]);
var inst_33629 = (state_33640[(2)]);
var inst_33617 = inst_33620;
var state_33640__$1 = (function (){var statearr_33650 = state_33640;
(statearr_33650[(10)] = inst_33629);

(statearr_33650[(7)] = inst_33617);

return statearr_33650;
})();
var statearr_33651_33672 = state_33640__$1;
(statearr_33651_33672[(2)] = null);

(statearr_33651_33672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (9))){
var inst_33620 = (state_33640[(8)]);
var state_33640__$1 = state_33640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33640__$1,(11),out,inst_33620);
} else {
if((state_val_33641 === (5))){
var inst_33620 = (state_33640[(8)]);
var inst_33617 = (state_33640[(7)]);
var inst_33624 = cljs.core._EQ_.call(null,inst_33620,inst_33617);
var state_33640__$1 = state_33640;
if(inst_33624){
var statearr_33653_33673 = state_33640__$1;
(statearr_33653_33673[(1)] = (8));

} else {
var statearr_33654_33674 = state_33640__$1;
(statearr_33654_33674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (10))){
var inst_33632 = (state_33640[(2)]);
var state_33640__$1 = state_33640;
var statearr_33655_33675 = state_33640__$1;
(statearr_33655_33675[(2)] = inst_33632);

(statearr_33655_33675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33641 === (8))){
var inst_33617 = (state_33640[(7)]);
var tmp33652 = inst_33617;
var inst_33617__$1 = tmp33652;
var state_33640__$1 = (function (){var statearr_33656 = state_33640;
(statearr_33656[(7)] = inst_33617__$1);

return statearr_33656;
})();
var statearr_33657_33676 = state_33640__$1;
(statearr_33657_33676[(2)] = null);

(statearr_33657_33676[(1)] = (2));


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
});})(c__25507__auto___33666,out))
;
return ((function (switch__25445__auto__,c__25507__auto___33666,out){
return (function() {
var cljs$core$async$state_machine__25446__auto__ = null;
var cljs$core$async$state_machine__25446__auto____0 = (function (){
var statearr_33661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33661[(0)] = cljs$core$async$state_machine__25446__auto__);

(statearr_33661[(1)] = (1));

return statearr_33661;
});
var cljs$core$async$state_machine__25446__auto____1 = (function (state_33640){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_33640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e33662){if((e33662 instanceof Object)){
var ex__25449__auto__ = e33662;
var statearr_33663_33677 = state_33640;
(statearr_33663_33677[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33678 = state_33640;
state_33640 = G__33678;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$state_machine__25446__auto__ = function(state_33640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25446__auto____1.call(this,state_33640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25446__auto____0;
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25446__auto____1;
return cljs$core$async$state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___33666,out))
})();
var state__25509__auto__ = (function (){var statearr_33664 = f__25508__auto__.call(null);
(statearr_33664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___33666);

return statearr_33664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___33666,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__33680 = arguments.length;
switch (G__33680) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25507__auto___33749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___33749,out){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___33749,out){
return (function (state_33718){
var state_val_33719 = (state_33718[(1)]);
if((state_val_33719 === (7))){
var inst_33714 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33720_33750 = state_33718__$1;
(statearr_33720_33750[(2)] = inst_33714);

(statearr_33720_33750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (1))){
var inst_33681 = (new Array(n));
var inst_33682 = inst_33681;
var inst_33683 = (0);
var state_33718__$1 = (function (){var statearr_33721 = state_33718;
(statearr_33721[(7)] = inst_33682);

(statearr_33721[(8)] = inst_33683);

return statearr_33721;
})();
var statearr_33722_33751 = state_33718__$1;
(statearr_33722_33751[(2)] = null);

(statearr_33722_33751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (4))){
var inst_33686 = (state_33718[(9)]);
var inst_33686__$1 = (state_33718[(2)]);
var inst_33687 = (inst_33686__$1 == null);
var inst_33688 = cljs.core.not.call(null,inst_33687);
var state_33718__$1 = (function (){var statearr_33723 = state_33718;
(statearr_33723[(9)] = inst_33686__$1);

return statearr_33723;
})();
if(inst_33688){
var statearr_33724_33752 = state_33718__$1;
(statearr_33724_33752[(1)] = (5));

} else {
var statearr_33725_33753 = state_33718__$1;
(statearr_33725_33753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (15))){
var inst_33708 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33726_33754 = state_33718__$1;
(statearr_33726_33754[(2)] = inst_33708);

(statearr_33726_33754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (13))){
var state_33718__$1 = state_33718;
var statearr_33727_33755 = state_33718__$1;
(statearr_33727_33755[(2)] = null);

(statearr_33727_33755[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (6))){
var inst_33683 = (state_33718[(8)]);
var inst_33704 = (inst_33683 > (0));
var state_33718__$1 = state_33718;
if(cljs.core.truth_(inst_33704)){
var statearr_33728_33756 = state_33718__$1;
(statearr_33728_33756[(1)] = (12));

} else {
var statearr_33729_33757 = state_33718__$1;
(statearr_33729_33757[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (3))){
var inst_33716 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33718__$1,inst_33716);
} else {
if((state_val_33719 === (12))){
var inst_33682 = (state_33718[(7)]);
var inst_33706 = cljs.core.vec.call(null,inst_33682);
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33718__$1,(15),out,inst_33706);
} else {
if((state_val_33719 === (2))){
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33718__$1,(4),ch);
} else {
if((state_val_33719 === (11))){
var inst_33698 = (state_33718[(2)]);
var inst_33699 = (new Array(n));
var inst_33682 = inst_33699;
var inst_33683 = (0);
var state_33718__$1 = (function (){var statearr_33730 = state_33718;
(statearr_33730[(7)] = inst_33682);

(statearr_33730[(10)] = inst_33698);

(statearr_33730[(8)] = inst_33683);

return statearr_33730;
})();
var statearr_33731_33758 = state_33718__$1;
(statearr_33731_33758[(2)] = null);

(statearr_33731_33758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (9))){
var inst_33682 = (state_33718[(7)]);
var inst_33696 = cljs.core.vec.call(null,inst_33682);
var state_33718__$1 = state_33718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33718__$1,(11),out,inst_33696);
} else {
if((state_val_33719 === (5))){
var inst_33682 = (state_33718[(7)]);
var inst_33691 = (state_33718[(11)]);
var inst_33686 = (state_33718[(9)]);
var inst_33683 = (state_33718[(8)]);
var inst_33690 = (inst_33682[inst_33683] = inst_33686);
var inst_33691__$1 = (inst_33683 + (1));
var inst_33692 = (inst_33691__$1 < n);
var state_33718__$1 = (function (){var statearr_33732 = state_33718;
(statearr_33732[(11)] = inst_33691__$1);

(statearr_33732[(12)] = inst_33690);

return statearr_33732;
})();
if(cljs.core.truth_(inst_33692)){
var statearr_33733_33759 = state_33718__$1;
(statearr_33733_33759[(1)] = (8));

} else {
var statearr_33734_33760 = state_33718__$1;
(statearr_33734_33760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (14))){
var inst_33711 = (state_33718[(2)]);
var inst_33712 = cljs.core.async.close_BANG_.call(null,out);
var state_33718__$1 = (function (){var statearr_33736 = state_33718;
(statearr_33736[(13)] = inst_33711);

return statearr_33736;
})();
var statearr_33737_33761 = state_33718__$1;
(statearr_33737_33761[(2)] = inst_33712);

(statearr_33737_33761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (10))){
var inst_33702 = (state_33718[(2)]);
var state_33718__$1 = state_33718;
var statearr_33738_33762 = state_33718__$1;
(statearr_33738_33762[(2)] = inst_33702);

(statearr_33738_33762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33719 === (8))){
var inst_33682 = (state_33718[(7)]);
var inst_33691 = (state_33718[(11)]);
var tmp33735 = inst_33682;
var inst_33682__$1 = tmp33735;
var inst_33683 = inst_33691;
var state_33718__$1 = (function (){var statearr_33739 = state_33718;
(statearr_33739[(7)] = inst_33682__$1);

(statearr_33739[(8)] = inst_33683);

return statearr_33739;
})();
var statearr_33740_33763 = state_33718__$1;
(statearr_33740_33763[(2)] = null);

(statearr_33740_33763[(1)] = (2));


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
});})(c__25507__auto___33749,out))
;
return ((function (switch__25445__auto__,c__25507__auto___33749,out){
return (function() {
var cljs$core$async$state_machine__25446__auto__ = null;
var cljs$core$async$state_machine__25446__auto____0 = (function (){
var statearr_33744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33744[(0)] = cljs$core$async$state_machine__25446__auto__);

(statearr_33744[(1)] = (1));

return statearr_33744;
});
var cljs$core$async$state_machine__25446__auto____1 = (function (state_33718){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_33718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e33745){if((e33745 instanceof Object)){
var ex__25449__auto__ = e33745;
var statearr_33746_33764 = state_33718;
(statearr_33746_33764[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33765 = state_33718;
state_33718 = G__33765;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$state_machine__25446__auto__ = function(state_33718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25446__auto____1.call(this,state_33718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25446__auto____0;
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25446__auto____1;
return cljs$core$async$state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___33749,out))
})();
var state__25509__auto__ = (function (){var statearr_33747 = f__25508__auto__.call(null);
(statearr_33747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___33749);

return statearr_33747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___33749,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__33767 = arguments.length;
switch (G__33767) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25507__auto___33840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___33840,out){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___33840,out){
return (function (state_33809){
var state_val_33810 = (state_33809[(1)]);
if((state_val_33810 === (7))){
var inst_33805 = (state_33809[(2)]);
var state_33809__$1 = state_33809;
var statearr_33811_33841 = state_33809__$1;
(statearr_33811_33841[(2)] = inst_33805);

(statearr_33811_33841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33810 === (1))){
var inst_33768 = [];
var inst_33769 = inst_33768;
var inst_33770 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33809__$1 = (function (){var statearr_33812 = state_33809;
(statearr_33812[(7)] = inst_33770);

(statearr_33812[(8)] = inst_33769);

return statearr_33812;
})();
var statearr_33813_33842 = state_33809__$1;
(statearr_33813_33842[(2)] = null);

(statearr_33813_33842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33810 === (4))){
var inst_33773 = (state_33809[(9)]);
var inst_33773__$1 = (state_33809[(2)]);
var inst_33774 = (inst_33773__$1 == null);
var inst_33775 = cljs.core.not.call(null,inst_33774);
var state_33809__$1 = (function (){var statearr_33814 = state_33809;
(statearr_33814[(9)] = inst_33773__$1);

return statearr_33814;
})();
if(inst_33775){
var statearr_33815_33843 = state_33809__$1;
(statearr_33815_33843[(1)] = (5));

} else {
var statearr_33816_33844 = state_33809__$1;
(statearr_33816_33844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33810 === (15))){
var inst_33799 = (state_33809[(2)]);
var state_33809__$1 = state_33809;
var statearr_33817_33845 = state_33809__$1;
(statearr_33817_33845[(2)] = inst_33799);

(statearr_33817_33845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33810 === (13))){
var state_33809__$1 = state_33809;
var statearr_33818_33846 = state_33809__$1;
(statearr_33818_33846[(2)] = null);

(statearr_33818_33846[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33810 === (6))){
var inst_33769 = (state_33809[(8)]);
var inst_33794 = inst_33769.length;
var inst_33795 = (inst_33794 > (0));
var state_33809__$1 = state_33809;
if(cljs.core.truth_(inst_33795)){
var statearr_33819_33847 = state_33809__$1;
(statearr_33819_33847[(1)] = (12));

} else {
var statearr_33820_33848 = state_33809__$1;
(statearr_33820_33848[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33810 === (3))){
var inst_33807 = (state_33809[(2)]);
var state_33809__$1 = state_33809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33809__$1,inst_33807);
} else {
if((state_val_33810 === (12))){
var inst_33769 = (state_33809[(8)]);
var inst_33797 = cljs.core.vec.call(null,inst_33769);
var state_33809__$1 = state_33809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33809__$1,(15),out,inst_33797);
} else {
if((state_val_33810 === (2))){
var state_33809__$1 = state_33809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33809__$1,(4),ch);
} else {
if((state_val_33810 === (11))){
var inst_33773 = (state_33809[(9)]);
var inst_33777 = (state_33809[(10)]);
var inst_33787 = (state_33809[(2)]);
var inst_33788 = [];
var inst_33789 = inst_33788.push(inst_33773);
var inst_33769 = inst_33788;
var inst_33770 = inst_33777;
var state_33809__$1 = (function (){var statearr_33821 = state_33809;
(statearr_33821[(7)] = inst_33770);

(statearr_33821[(8)] = inst_33769);

(statearr_33821[(11)] = inst_33787);

(statearr_33821[(12)] = inst_33789);

return statearr_33821;
})();
var statearr_33822_33849 = state_33809__$1;
(statearr_33822_33849[(2)] = null);

(statearr_33822_33849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33810 === (9))){
var inst_33769 = (state_33809[(8)]);
var inst_33785 = cljs.core.vec.call(null,inst_33769);
var state_33809__$1 = state_33809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33809__$1,(11),out,inst_33785);
} else {
if((state_val_33810 === (5))){
var inst_33770 = (state_33809[(7)]);
var inst_33773 = (state_33809[(9)]);
var inst_33777 = (state_33809[(10)]);
var inst_33777__$1 = f.call(null,inst_33773);
var inst_33778 = cljs.core._EQ_.call(null,inst_33777__$1,inst_33770);
var inst_33779 = cljs.core.keyword_identical_QMARK_.call(null,inst_33770,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33780 = (inst_33778) || (inst_33779);
var state_33809__$1 = (function (){var statearr_33823 = state_33809;
(statearr_33823[(10)] = inst_33777__$1);

return statearr_33823;
})();
if(cljs.core.truth_(inst_33780)){
var statearr_33824_33850 = state_33809__$1;
(statearr_33824_33850[(1)] = (8));

} else {
var statearr_33825_33851 = state_33809__$1;
(statearr_33825_33851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33810 === (14))){
var inst_33802 = (state_33809[(2)]);
var inst_33803 = cljs.core.async.close_BANG_.call(null,out);
var state_33809__$1 = (function (){var statearr_33827 = state_33809;
(statearr_33827[(13)] = inst_33802);

return statearr_33827;
})();
var statearr_33828_33852 = state_33809__$1;
(statearr_33828_33852[(2)] = inst_33803);

(statearr_33828_33852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33810 === (10))){
var inst_33792 = (state_33809[(2)]);
var state_33809__$1 = state_33809;
var statearr_33829_33853 = state_33809__$1;
(statearr_33829_33853[(2)] = inst_33792);

(statearr_33829_33853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33810 === (8))){
var inst_33773 = (state_33809[(9)]);
var inst_33769 = (state_33809[(8)]);
var inst_33777 = (state_33809[(10)]);
var inst_33782 = inst_33769.push(inst_33773);
var tmp33826 = inst_33769;
var inst_33769__$1 = tmp33826;
var inst_33770 = inst_33777;
var state_33809__$1 = (function (){var statearr_33830 = state_33809;
(statearr_33830[(14)] = inst_33782);

(statearr_33830[(7)] = inst_33770);

(statearr_33830[(8)] = inst_33769__$1);

return statearr_33830;
})();
var statearr_33831_33854 = state_33809__$1;
(statearr_33831_33854[(2)] = null);

(statearr_33831_33854[(1)] = (2));


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
});})(c__25507__auto___33840,out))
;
return ((function (switch__25445__auto__,c__25507__auto___33840,out){
return (function() {
var cljs$core$async$state_machine__25446__auto__ = null;
var cljs$core$async$state_machine__25446__auto____0 = (function (){
var statearr_33835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33835[(0)] = cljs$core$async$state_machine__25446__auto__);

(statearr_33835[(1)] = (1));

return statearr_33835;
});
var cljs$core$async$state_machine__25446__auto____1 = (function (state_33809){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_33809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e33836){if((e33836 instanceof Object)){
var ex__25449__auto__ = e33836;
var statearr_33837_33855 = state_33809;
(statearr_33837_33855[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33856 = state_33809;
state_33809 = G__33856;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
cljs$core$async$state_machine__25446__auto__ = function(state_33809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25446__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25446__auto____1.call(this,state_33809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25446__auto____0;
cljs$core$async$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25446__auto____1;
return cljs$core$async$state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___33840,out))
})();
var state__25509__auto__ = (function (){var statearr_33838 = f__25508__auto__.call(null);
(statearr_33838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___33840);

return statearr_33838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___33840,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map