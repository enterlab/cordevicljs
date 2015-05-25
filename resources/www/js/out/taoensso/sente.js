// Compiled by ClojureScript 0.0-3291 {}
goog.provide('taoensso.sente');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('taoensso.encore');
goog.require('taoensso.sente.interfaces');
taoensso.sente.set_logging_level_BANG_ = (function taoensso$sente$set_logging_level_BANG_(level){
return taoensso.encore._STAR_log_level_STAR_ = level;
});
/**
 * Alpha - subject to change.
 * Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 * Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 * (ajax-call "/my-post-route"
 * {:method     :post
 * :params     {:username "Rich Hickey"
 * :type     "Awesome"}
 * :headers    {"Foo" "Bar"}
 * :resp-type  :text
 * :timeout-ms 7000}
 * (fn async-callback [resp-map]
 * (let [{:keys [?status ?error ?content ?content-type]} resp-map]
 * ;; ?status - 200, 404, ..., or nil on no response
 * ;; ?error  - e/o #{:xhr-pool-depleted :exception :http-error :abort
 * ;;                 :timeout <http-error-status> nil}
 * (js/alert (str "Ajax response: " resp-map)))))
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915);
} else {
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null).call(null,cljs.core.count.call(null,x)))){
return new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281);
} else {
var vec__30998 = x;
var ev_id = cljs.core.nth.call(null,vec__30998,(0),null);
var _ = cljs.core.nth.call(null,vec__30998,(1),null);
if(!((ev_id instanceof cljs.core.Keyword))){
return new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689);
} else {
if(cljs.core.not.call(null,cljs.core.namespace.call(null,ev_id))){
return new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772);
} else {
return null;

}
}

}
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event.call(null,x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
if(cljs.core.truth_(taoensso.sente.event_QMARK_.call(null,x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
}
});
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__4423__auto__ = taoensso.sente.validate_event.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var _QMARK_err = temp__4423__auto__;
var err_fmt = [cljs.core.str((function (){var G__31000 = (((_QMARK_err instanceof cljs.core.Keyword))?_QMARK_err.fqn:null);
switch (G__31000) {
case "wrong-type":
return "Malformed event (wrong type).";

break;
case "wrong-length":
return "Malformed event (wrong length).";

break;
case "wrong-id-type":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "unnamespaced-id":
return "Malformed event (`ev-id` should be a namespaced keyword).";

break;
case "else":
return "Malformed event (unknown error).";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(_QMARK_err)].join('')));

}
})()),cljs.core.str(" Event should be of `[ev-id ?ev-data]` form: %s")].join('');
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,err_fmt,[cljs.core.str(x)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"malformed-event","malformed-event",-2090896605),x], null));
} else {
return null;
}
});
taoensso.sente.event_msg_QMARK_ = (function taoensso$sente$event_msg_QMARK_(x){
var and__23398__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__23398__auto__){
var and__23398__auto____$1 = taoensso.encore.keys_EQ_.call(null,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null));
if(cljs.core.truth_(and__23398__auto____$1)){
var map__31003 = x;
var map__31003__$1 = ((cljs.core.seq_QMARK_.call(null,map__31003))?cljs.core.apply.call(null,cljs.core.hash_map,map__31003):map__31003);
var ch_recv = cljs.core.get.call(null,map__31003__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.call(null,map__31003__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.call(null,map__31003__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.call(null,map__31003__$1,new cljs.core.Keyword(null,"event","event",301435442));
var and__23398__auto____$2 = taoensso.encore.chan_QMARK_.call(null,ch_recv);
if(cljs.core.truth_(and__23398__auto____$2)){
var and__23398__auto____$3 = cljs.core.ifn_QMARK_.call(null,send_fn);
if(and__23398__auto____$3){
var and__23398__auto____$4 = taoensso.encore.atom_QMARK_.call(null,state);
if(cljs.core.truth_(and__23398__auto____$4)){
return taoensso.sente.event_QMARK_.call(null,event);
} else {
return and__23398__auto____$4;
}
} else {
return and__23398__auto____$3;
}
} else {
return and__23398__auto____$2;
}
} else {
return and__23398__auto____$1;
}
} else {
return and__23398__auto__;
}
});
/**
 * Note that cb reply need _not_ be `event` form!
 */
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null).call(null,cb_reply_clj));
});
/**
 * pstr->clj
 */
taoensso.sente.unpack_STAR_ = (function taoensso$sente$unpack_STAR_(packer,pstr){
try{return taoensso.sente.interfaces.unpack.call(null,packer,(function (){var vec__31010 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pstr], null);
}catch (e31012){if((e31012 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31012;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31012;

}
}})();
var x__8955__auto__ = cljs.core.nth.call(null,vec__31010,(0),null);
var _QMARK_x_err__8956__auto__ = cljs.core.nth.call(null,vec__31010,(1),null);
var have_x_QMARK___8957__auto__ = (_QMARK_x_err__8956__auto__ == null);
var vec__31011 = ((have_x_QMARK___8957__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.string_QMARK_).call(null,x__8955__auto__)], null);
}catch (e31013){if((e31013 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31013;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31013;

}
}})():null);
var pass_QMARK___8958__auto__ = cljs.core.nth.call(null,vec__31011,(0),null);
var _QMARK_pred_err__8959__auto__ = cljs.core.nth.call(null,vec__31011,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto__)){
return x__8955__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",214,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pstr","pstr",221763868,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___8957__auto__)?x__8955__auto__:_QMARK_x_err__8956__auto__),_QMARK_pred_err__8959__auto__);
}
})());
}catch (e31009){var t = e31009;
taoensso.encore.debugf.call(null,"Bad package: %s (%s)",pstr,t);

throw t;
}});
taoensso.sente.with__QMARK_meta = (function taoensso$sente$with__QMARK_meta(x,_QMARK_m){
if(cljs.core.seq.call(null,_QMARK_m)){
return cljs.core.with_meta.call(null,x,_QMARK_m);
} else {
return x;
}
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack_STAR_ = (function taoensso$sente$pack_STAR_(){
var G__31015 = arguments.length;
switch (G__31015) {
case 3:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (packer,_QMARK_packer_meta,clj){
return [cljs.core.str("-"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (packer,_QMARK_packer_meta,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
return [cljs.core.str("+"),cljs.core.str(taoensso.sente.interfaces.pack.call(null,packer,taoensso.sente.with__QMARK_meta.call(null,wrapped_clj,_QMARK_packer_meta)))].join('');
});

taoensso.sente.pack_STAR_.cljs$lang$maxFixedArity = 4;
taoensso.sente.pack = (function taoensso$sente$pack(){
var argseq__24450__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(argseq__24450__auto__);
});

taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var pstr = cljs.core.apply.call(null,taoensso.sente.pack_STAR_,args);
taoensso.encore.tracef.call(null,"Packing: %s -> %s",args,pstr);

return pstr;
});

taoensso.sente.pack.cljs$lang$maxFixedArity = (0);

taoensso.sente.pack.cljs$lang$applyTo = (function (seq31017){
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31017));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
var vec__31024_31030 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefixed_pstr], null);
}catch (e31026){if((e31026 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31026;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31026;

}
}})();
var x__8955__auto___31031 = cljs.core.nth.call(null,vec__31024_31030,(0),null);
var _QMARK_x_err__8956__auto___31032 = cljs.core.nth.call(null,vec__31024_31030,(1),null);
var have_x_QMARK___8957__auto___31033 = (_QMARK_x_err__8956__auto___31032 == null);
var vec__31025_31034 = ((have_x_QMARK___8957__auto___31033)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.string_QMARK_).call(null,x__8955__auto___31031)], null);
}catch (e31027){if((e31027 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31027;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31027;

}
}})():null);
var pass_QMARK___8958__auto___31035 = cljs.core.nth.call(null,vec__31025_31034,(0),null);
var _QMARK_pred_err__8959__auto___31036 = cljs.core.nth.call(null,vec__31025_31034,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___31035)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.sente",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefixed-pstr","prefixed-pstr",-515747107,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___8957__auto___31033)?x__8955__auto___31031:_QMARK_x_err__8956__auto___31032),_QMARK_pred_err__8959__auto___31036);
}


var prefix = taoensso.encore.substr.call(null,prefixed_pstr,(0),(1));
var pstr = taoensso.encore.substr.call(null,prefixed_pstr,(1));
var clj = taoensso.sente.unpack_STAR_.call(null,packer,pstr);
var wrapped_QMARK_ = (function (){var G__31029 = prefix;
switch (G__31029) {
case "-":
return false;

break;
case "+":
return true;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(prefix)].join('')));

}
})();
var vec__31028 = (cljs.core.truth_(wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.call(null,vec__31028,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__31028,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.call(null,(0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.encore.tracef.call(null,"Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});

taoensso.sente.IChSocket = (function (){var obj31039 = {};
return obj31039;
})();

/**
 * Implementation detail.
 */
taoensso.sente.chsk_init_BANG_ = (function taoensso$sente$chsk_init_BANG_(chsk){
if((function (){var and__23398__auto__ = chsk;
if(and__23398__auto__){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1;
} else {
return and__23398__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1(chsk);
} else {
var x__24046__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__23410__auto__ = (taoensso.sente.chsk_init_BANG_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (taoensso.sente.chsk_init_BANG_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-init!",chsk);
}
}
})().call(null,chsk);
}
});

/**
 * Kills socket, stops auto-reconnects.
 */
taoensso.sente.chsk_destroy_BANG_ = (function taoensso$sente$chsk_destroy_BANG_(chsk){
if((function (){var and__23398__auto__ = chsk;
if(and__23398__auto__){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1;
} else {
return and__23398__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1(chsk);
} else {
var x__24046__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__23410__auto__ = (taoensso.sente.chsk_destroy_BANG_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (taoensso.sente.chsk_destroy_BANG_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-destroy!",chsk);
}
}
})().call(null,chsk);
}
});

/**
 * Drops connection, allows auto-reconnect. Useful for reauthenticating after login/logout.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
if((function (){var and__23398__auto__ = chsk;
if(and__23398__auto__){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1;
} else {
return and__23398__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1(chsk);
} else {
var x__24046__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__23410__auto__ = (taoensso.sente.chsk_reconnect_BANG_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (taoensso.sente.chsk_reconnect_BANG_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-reconnect!",chsk);
}
}
})().call(null,chsk);
}
});

/**
 * Implementation detail.
 */
taoensso.sente.chsk_send_BANG__STAR_ = (function taoensso$sente$chsk_send_BANG__STAR_(chsk,ev,opts){
if((function (){var and__23398__auto__ = chsk;
if(and__23398__auto__){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3;
} else {
return and__23398__auto__;
}
})()){
return chsk.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3(chsk,ev,opts);
} else {
var x__24046__auto__ = (((chsk == null))?null:chsk);
return (function (){var or__23410__auto__ = (taoensso.sente.chsk_send_BANG__STAR_[goog.typeOf(x__24046__auto__)]);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (taoensso.sente.chsk_send_BANG__STAR_["_"]);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IChSocket.chsk-send!*",chsk);
}
}
})().call(null,chsk,ev,opts);
}
});

/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(){
var G__31041 = arguments.length;
switch (G__31041) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.call(null,chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
});

taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.encore.tracef.call(null,"Chsk send: (%s) %s",cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev);

return taoensso.sente.chsk_send_BANG__STAR_.call(null,chsk,ev,opts);
});

taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4;
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event.call(null,x);

if(cljs.core.truth_((function (){var or__23410__auto__ = ((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null));
if(or__23410__auto__){
return or__23410__auto__;
} else {
return taoensso.encore.nneg_int_QMARK_.call(null,_QMARK_timeout_ms);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb requires a timeout; timeout-ms should be a +ive integer: %s",_QMARK_timeout_ms)),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null)),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null))),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol("enc","nneg-int?","enc/nneg-int?",803640858,null),new cljs.core.Symbol(null,"?timeout-ms","?timeout-ms",-651193632,null))))))].join('')));
}

if(cljs.core.truth_((function (){var or__23410__auto__ = (_QMARK_cb == null);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = cljs.core.ifn_QMARK_.call(null,_QMARK_cb);
if(or__23410__auto____$1){
return or__23410__auto____$1;
} else {
return taoensso.encore.chan_QMARK_.call(null,_QMARK_cb);
}
}
})())){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(taoensso.encore.format.call(null,"cb should be nil, an ifn, or a channel: %s",cljs.core.type.call(null,_QMARK_cb))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),cljs.core.list(new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null),new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)))))].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__4423__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto__)){
var cb_uuid = temp__4423__auto__;
return taoensso.encore.swap_in_BANG_.call(null,cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),((function (cb_uuid,temp__4423__auto__){
return (function (_QMARK_f){
return taoensso.encore.swapped.call(null,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
});})(cb_uuid,temp__4423__auto__))
);
} else {
return null;
}
});
taoensso.sente.merge_GT_chsk_state_BANG_ = (function taoensso$sente$merge_GT_chsk_state_BANG_(p__31043,merge_state){
var map__31046 = p__31043;
var map__31046__$1 = ((cljs.core.seq_QMARK_.call(null,map__31046))?cljs.core.apply.call(null,cljs.core.hash_map,map__31046):map__31046);
var chsk = map__31046__$1;
var chs = cljs.core.get.call(null,map__31046__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var state_ = cljs.core.get.call(null,map__31046__$1,new cljs.core.Keyword(null,"state_","state_",957667102));
var vec__31047 = taoensso.encore.swap_in_BANG_.call(null,state_,cljs.core.PersistentVector.EMPTY,((function (map__31046,map__31046__$1,chsk,chs,state_){
return (function (old_state){
var new_state = cljs.core.merge.call(null,old_state,merge_state);
var new_state__$1 = ((cljs.core.not.call(null,(function (){var and__23398__auto__ = new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116).cljs$core$IFn$_invoke$arity$1(old_state);
if(cljs.core.truth_(and__23398__auto__)){
var and__23398__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state);
if(cljs.core.truth_(and__23398__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(old_state));
} else {
return and__23398__auto____$1;
}
} else {
return and__23398__auto__;
}
})()))?new_state:cljs.core.assoc.call(null,cljs.core.dissoc.call(null,new_state,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116)),new cljs.core.Keyword(null,"requested-reconnect?","requested-reconnect?",-1504983666),true));
return taoensso.encore.swapped.call(null,new_state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$1], null));
});})(map__31046,map__31046__$1,chsk,chs,state_))
);
var old_state = cljs.core.nth.call(null,vec__31047,(0),null);
var new_state = cljs.core.nth.call(null,vec__31047,(1),null);
if(cljs.core.not_EQ_.call(null,old_state,new_state)){
cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(chs),new_state);

return new_state;
} else {
return null;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 * instead of a cb-fn. The channel will receive values of form
 * [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if(((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_.call(null,_QMARK_cb))){
return _QMARK_cb;
} else {
var vec__31053_31058 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_cb], null);
}catch (e31055){if((e31055 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31055;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31055;

}
}})();
var x__8955__auto___31059 = cljs.core.nth.call(null,vec__31053_31058,(0),null);
var _QMARK_x_err__8956__auto___31060 = cljs.core.nth.call(null,vec__31053_31058,(1),null);
var have_x_QMARK___8957__auto___31061 = (_QMARK_x_err__8956__auto___31060 == null);
var vec__31054_31062 = ((have_x_QMARK___8957__auto___31061)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.chan_QMARK_).call(null,x__8955__auto___31059)], null);
}catch (e31056){if((e31056 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31056;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31056;

}
}})():null);
var pass_QMARK___8958__auto___31063 = cljs.core.nth.call(null,vec__31054_31062,(0),null);
var _QMARK_pred_err__8959__auto___31064 = cljs.core.nth.call(null,vec__31054_31062,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___31063)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.sente",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"?cb","?cb",-1346810436,null)),new cljs.core.Symbol("enc","chan?","enc/chan?",1377166,null)),((have_x_QMARK___8957__auto___31061)?x__8955__auto___31059:_QMARK_x_err__8956__auto___31060),_QMARK_pred_err__8959__auto___31064);
}


taoensso.sente.assert_event.call(null,ev);

var vec__31057 = ev;
var ev_id = cljs.core.nth.call(null,vec__31057,(0),null);
var _ = cljs.core.nth.call(null,vec__31057,(1),null);
var cb_ch = _QMARK_cb;
return ((function (vec__31057,ev_id,_,cb_ch){
return (function (reply){
return cljs.core.async.put_BANG_.call(null,cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[cljs.core.str(taoensso.encore.fq_name.call(null,ev_id)),cljs.core.str(".cb")].join('')),reply], null));
});
;})(vec__31057,ev_id,_,cb_ch))
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.encore.tracef.call(null,"receive-buffered-evs!: %s",clj);

var buffered_evs = (function (){var vec__31073 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null);
}catch (e31075){if((e31075 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31075;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31075;

}
}})();
var x__8955__auto__ = cljs.core.nth.call(null,vec__31073,(0),null);
var _QMARK_x_err__8956__auto__ = cljs.core.nth.call(null,vec__31073,(1),null);
var have_x_QMARK___8957__auto__ = (_QMARK_x_err__8956__auto__ == null);
var vec__31074 = ((have_x_QMARK___8957__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.vector_QMARK_).call(null,x__8955__auto__)], null);
}catch (e31076){if((e31076 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31076;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31076;

}
}})():null);
var pass_QMARK___8958__auto__ = cljs.core.nth.call(null,vec__31074,(0),null);
var _QMARK_pred_err__8959__auto__ = cljs.core.nth.call(null,vec__31074,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto__)){
return x__8955__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",738,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"clj","clj",980036099,null)),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null)),((have_x_QMARK___8957__auto__)?x__8955__auto__:_QMARK_x_err__8956__auto__),_QMARK_pred_err__8959__auto__);
}
})();
var seq__31077 = cljs.core.seq.call(null,buffered_evs);
var chunk__31078 = null;
var count__31079 = (0);
var i__31080 = (0);
while(true){
if((i__31080 < count__31079)){
var ev = cljs.core._nth.call(null,chunk__31078,i__31080);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__31081 = seq__31077;
var G__31082 = chunk__31078;
var G__31083 = count__31079;
var G__31084 = (i__31080 + (1));
seq__31077 = G__31081;
chunk__31078 = G__31082;
count__31079 = G__31083;
i__31080 = G__31084;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__31077);
if(temp__4423__auto__){
var seq__31077__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31077__$1)){
var c__24195__auto__ = cljs.core.chunk_first.call(null,seq__31077__$1);
var G__31085 = cljs.core.chunk_rest.call(null,seq__31077__$1);
var G__31086 = c__24195__auto__;
var G__31087 = cljs.core.count.call(null,c__24195__auto__);
var G__31088 = (0);
seq__31077 = G__31085;
chunk__31078 = G__31086;
count__31079 = G__31087;
i__31080 = G__31088;
continue;
} else {
var ev = cljs.core.first.call(null,seq__31077__$1);
taoensso.sente.assert_event.call(null,ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);

var G__31089 = cljs.core.next.call(null,seq__31077__$1);
var G__31090 = null;
var G__31091 = (0);
var G__31092 = (0);
seq__31077 = G__31089;
chunk__31078 = G__31090;
count__31079 = G__31091;
i__31080 = G__31092;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handle_when_handshake_BANG_ = (function taoensso$sente$handle_when_handshake_BANG_(chsk,chs,clj){
var handshake_QMARK_ = (cljs.core.vector_QMARK_.call(null,clj)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,clj),new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686)));
taoensso.encore.tracef.call(null,"handle-when-handshake (%s): %s",((handshake_QMARK_)?new cljs.core.Keyword(null,"handshake","handshake",68079331):new cljs.core.Keyword(null,"non-handshake","non-handshake",576986062)),clj);

if(handshake_QMARK_){
var vec__31095 = clj;
var _ = cljs.core.nth.call(null,vec__31095,(0),null);
var vec__31096 = cljs.core.nth.call(null,vec__31095,(1),null);
var _QMARK_uid = cljs.core.nth.call(null,vec__31096,(0),null);
var _QMARK_csrf_token = cljs.core.nth.call(null,vec__31096,(1),null);
var _QMARK_handshake_data = cljs.core.nth.call(null,vec__31096,(2),null);
var handshake_ev = vec__31095;
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,_QMARK_csrf_token))){
taoensso.encore.warnf.call(null,"SECURITY WARNING: no CSRF token available for use by Sente");
} else {
}

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),_QMARK_csrf_token], null));

taoensso.sente.assert_event.call(null,handshake_ev);

cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
} else {
return null;
}
});
taoensso.sente.set_exp_backoff_timeout_BANG_ = (function taoensso$sente$set_exp_backoff_timeout_BANG_(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__31099){
var vec__31100 = p__31099;
var nattempt = cljs.core.nth.call(null,vec__31100,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__23410__auto__ = nattempt;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return (0);
}
})()));
});

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq31097){
var G__31098 = cljs.core.first.call(null,seq31097);
var seq31097__$1 = cljs.core.next.call(null,seq31097);
return taoensso.sente.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31098,seq31097__$1);
});

/**
* @constructor
* @param {*} client_id
* @param {*} url
* @param {*} chs
* @param {*} socket_
* @param {*} kalive_ms
* @param {*} kalive_timer_
* @param {*} kalive_due_QMARK__
* @param {*} nattempt_
* @param {*} cbs_waiting_
* @param {*} state_
* @param {*} packer
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
taoensso.sente.ChWebSocket = (function (client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.socket_ = socket_;
this.kalive_ms = kalive_ms;
this.kalive_timer_ = kalive_timer_;
this.kalive_due_QMARK__ = kalive_due_QMARK__;
this.nattempt_ = nattempt_;
this.cbs_waiting_ = cbs_waiting_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24005__auto__,k__24006__auto__){
var self__ = this;
var this__24005__auto____$1 = this;
return cljs.core._lookup.call(null,this__24005__auto____$1,k__24006__auto__,null);
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24007__auto__,k31102,else__24008__auto__){
var self__ = this;
var this__24007__auto____$1 = this;
var G__31104 = (((k31102 instanceof cljs.core.Keyword))?k31102.fqn:null);
switch (G__31104) {
case "client-id":
return self__.client_id;

break;
case "kalive-ms":
return self__.kalive_ms;

break;
case "nattempt_":
return self__.nattempt_;

break;
case "packer":
return self__.packer;

break;
case "chs":
return self__.chs;

break;
case "socket_":
return self__.socket_;

break;
case "url":
return self__.url;

break;
case "kalive-due?_":
return self__.kalive_due_QMARK__;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "kalive-timer_":
return self__.kalive_timer_;

break;
case "state_":
return self__.state_;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31102,else__24008__auto__);

}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24019__auto__,writer__24020__auto__,opts__24021__auto__){
var self__ = this;
var this__24019__auto____$1 = this;
var pr_pair__24022__auto__ = ((function (this__24019__auto____$1){
return (function (keyval__24023__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24020__auto__,cljs.core.pr_writer,""," ","",opts__24021__auto__,keyval__24023__auto__);
});})(this__24019__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24020__auto__,pr_pair__24022__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__24021__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24003__auto__){
var self__ = this;
var this__24003__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__23999__auto__){
var self__ = this;
var this__23999__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24009__auto__){
var self__ = this;
var this__24009__auto____$1 = this;
return (11 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24000__auto__){
var self__ = this;
var this__24000__auto____$1 = this;
var h__23826__auto__ = self__.__hash;
if(!((h__23826__auto__ == null))){
return h__23826__auto__;
} else {
var h__23826__auto____$1 = cljs.core.hash_imap.call(null,this__24000__auto____$1);
self__.__hash = h__23826__auto____$1;

return h__23826__auto____$1;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24001__auto__,other__24002__auto__){
var self__ = this;
var this__24001__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23398__auto__ = other__24002__auto__;
if(cljs.core.truth_(and__23398__auto__)){
var and__23398__auto____$1 = (this__24001__auto____$1.constructor === other__24002__auto__.constructor);
if(and__23398__auto____$1){
return cljs.core.equiv_map.call(null,this__24001__auto____$1,other__24002__auto__);
} else {
return and__23398__auto____$1;
}
} else {
return and__23398__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24014__auto__,k__24015__auto__){
var self__ = this;
var this__24014__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__24015__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24014__auto____$1),self__.__meta),k__24015__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24015__auto__)),null));
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24012__auto__,k__24013__auto__,G__31101){
var self__ = this;
var this__24012__auto____$1 = this;
var pred__31105 = cljs.core.keyword_identical_QMARK_;
var expr__31106 = k__24013__auto__;
if(cljs.core.truth_(pred__31105.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__31106))){
return (new taoensso.sente.ChWebSocket(G__31101,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31105.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__31106))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__31101,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31105.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__31106))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,G__31101,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31105.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__31106))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,G__31101,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31105.call(null,new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),expr__31106))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,G__31101,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31105.call(null,new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),expr__31106))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,G__31101,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31105.call(null,new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),expr__31106))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,G__31101,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31105.call(null,new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),expr__31106))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,G__31101,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31105.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__31106))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,G__31101,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31105.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__31106))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,G__31101,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31105.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__31106))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,G__31101,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24013__auto__,G__31101),null));
}
}
}
}
}
}
}
}
}
}
}
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24017__auto__){
var self__ = this;
var this__24017__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),self__.kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),self__.kalive_timer_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),self__.kalive_due_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),self__.nattempt_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24004__auto__,G__31101){
var self__ = this;
var this__24004__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.url,self__.chs,self__.socket_,self__.kalive_ms,self__.kalive_timer_,self__.kalive_due_QMARK__,self__.nattempt_,self__.cbs_waiting_,self__.state_,self__.packer,G__31101,self__.__extmap,self__.__hash));
});

taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24010__auto__,entry__24011__auto__){
var self__ = this;
var this__24010__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24011__auto__)){
return cljs.core._assoc.call(null,this__24010__auto____$1,cljs.core._nth.call(null,entry__24011__auto__,(0)),cljs.core._nth.call(null,entry__24011__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24010__auto____$1,entry__24011__auto__);
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__31108){
var self__ = this;
var map__31109 = p__31108;
var map__31109__$1 = ((cljs.core.seq_QMARK_.call(null,map__31109))?cljs.core.apply.call(null,cljs.core.hash_map,map__31109):map__31109);
var opts = map__31109__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__31109__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__31109__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__31109__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.encore.warnf.call(null,"Chsk send against closed chsk.");

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.call(null,(6)):null);
var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,_QMARK_cb_uuid);
var temp__4423__auto___31150 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto___31150)){
var cb_uuid_31151 = temp__4423__auto___31150;
taoensso.encore.reset_in_BANG_.call(null,self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_31151], null),(function (){var vec__31110 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_cb_fn], null);
}catch (e31112){if((e31112 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31112;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31112;

}
}})();
var x__8955__auto__ = cljs.core.nth.call(null,vec__31110,(0),null);
var _QMARK_x_err__8956__auto__ = cljs.core.nth.call(null,vec__31110,(1),null);
var have_x_QMARK___8957__auto__ = (_QMARK_x_err__8956__auto__ == null);
var vec__31111 = ((have_x_QMARK___8957__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__8955__auto__)], null);
}catch (e31113){if((e31113 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31113;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31113;

}
}})():null);
var pass_QMARK___8958__auto__ = cljs.core.nth.call(null,vec__31111,(0),null);
var _QMARK_pred_err__8959__auto__ = cljs.core.nth.call(null,vec__31111,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto__)){
return x__8955__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",803,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null)),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___8957__auto__)?x__8955__auto__:_QMARK_x_err__8956__auto__),_QMARK_pred_err__8959__auto__);
}
})());

var temp__4423__auto___31152__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__4423__auto___31152__$1)){
var timeout_ms_31153 = temp__4423__auto___31152__$1;
var c__25507__auto___31154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___31154,timeout_ms_31153,temp__4423__auto___31152__$1,cb_uuid_31151,temp__4423__auto___31150,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__31109,map__31109__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___31154,timeout_ms_31153,temp__4423__auto___31152__$1,cb_uuid_31151,temp__4423__auto___31150,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__31109,map__31109__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function (state_31124){
var state_val_31125 = (state_31124[(1)]);
if((state_val_31125 === (1))){
var inst_31114 = cljs.core.async.timeout.call(null,timeout_ms_31153);
var state_31124__$1 = state_31124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31124__$1,(2),inst_31114);
} else {
if((state_val_31125 === (2))){
var inst_31117 = (state_31124[(7)]);
var inst_31116 = (state_31124[(2)]);
var inst_31117__$1 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,_QMARK_cb_uuid);
var state_31124__$1 = (function (){var statearr_31126 = state_31124;
(statearr_31126[(8)] = inst_31116);

(statearr_31126[(7)] = inst_31117__$1);

return statearr_31126;
})();
if(cljs.core.truth_(inst_31117__$1)){
var statearr_31127_31155 = state_31124__$1;
(statearr_31127_31155[(1)] = (3));

} else {
var statearr_31128_31156 = state_31124__$1;
(statearr_31128_31156[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (3))){
var inst_31117 = (state_31124[(7)]);
var inst_31119 = inst_31117.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_31124__$1 = state_31124;
var statearr_31129_31157 = state_31124__$1;
(statearr_31129_31157[(2)] = inst_31119);

(statearr_31129_31157[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (4))){
var state_31124__$1 = state_31124;
var statearr_31130_31158 = state_31124__$1;
(statearr_31130_31158[(2)] = null);

(statearr_31130_31158[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31125 === (5))){
var inst_31122 = (state_31124[(2)]);
var state_31124__$1 = state_31124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31124__$1,inst_31122);
} else {
return null;
}
}
}
}
}
});})(c__25507__auto___31154,timeout_ms_31153,temp__4423__auto___31152__$1,cb_uuid_31151,temp__4423__auto___31150,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__31109,map__31109__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
;
return ((function (switch__25445__auto__,c__25507__auto___31154,timeout_ms_31153,temp__4423__auto___31152__$1,cb_uuid_31151,temp__4423__auto___31150,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__31109,map__31109__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function() {
var taoensso$sente$state_machine__25446__auto__ = null;
var taoensso$sente$state_machine__25446__auto____0 = (function (){
var statearr_31134 = [null,null,null,null,null,null,null,null,null];
(statearr_31134[(0)] = taoensso$sente$state_machine__25446__auto__);

(statearr_31134[(1)] = (1));

return statearr_31134;
});
var taoensso$sente$state_machine__25446__auto____1 = (function (state_31124){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_31124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e31135){if((e31135 instanceof Object)){
var ex__25449__auto__ = e31135;
var statearr_31136_31159 = state_31124;
(statearr_31136_31159[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31160 = state_31124;
state_31124 = G__31160;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
taoensso$sente$state_machine__25446__auto__ = function(state_31124){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__25446__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__25446__auto____1.call(this,state_31124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__25446__auto____0;
taoensso$sente$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__25446__auto____1;
return taoensso$sente$state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___31154,timeout_ms_31153,temp__4423__auto___31152__$1,cb_uuid_31151,temp__4423__auto___31150,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__31109,map__31109__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
})();
var state__25509__auto__ = (function (){var statearr_31137 = f__25508__auto__.call(null);
(statearr_31137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___31154);

return statearr_31137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___31154,timeout_ms_31153,temp__4423__auto___31152__$1,cb_uuid_31151,temp__4423__auto___31150,_QMARK_cb_uuid,ppstr,_QMARK_cb_fn,chsk__$1,map__31109,map__31109__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

} else {
}
} else {
}

try{cljs.core.deref.call(null,self__.socket_).send(ppstr);

cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,false);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e31138){if((e31138 instanceof Error)){
var e = e31138;
taoensso.encore.errorf.call(null,"Chsk send error: %s",e);

var temp__4423__auto___31161 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4423__auto___31161)){
var cb_uuid_31162 = temp__4423__auto___31161;
var cb_fn_STAR__31163 = (function (){var or__23410__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid_31162);
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
var vec__31139 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_cb_fn], null);
}catch (e31141){if((e31141 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31141;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31141;

}
}})();
var x__8955__auto__ = cljs.core.nth.call(null,vec__31139,(0),null);
var _QMARK_x_err__8956__auto__ = cljs.core.nth.call(null,vec__31139,(1),null);
var have_x_QMARK___8957__auto__ = (_QMARK_x_err__8956__auto__ == null);
var vec__31140 = ((have_x_QMARK___8957__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__8955__auto__)], null);
}catch (e31142){if((e31142 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31142;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31142;

}
}})():null);
var pass_QMARK___8958__auto__ = cljs.core.nth.call(null,vec__31140,(0),null);
var _QMARK_pred_err__8959__auto__ = cljs.core.nth.call(null,vec__31140,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto__)){
return x__8955__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.sente",817,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"?cb-fn","?cb-fn",-1734331361,null)),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___8957__auto__)?x__8955__auto__:_QMARK_x_err__8956__auto__),_QMARK_pred_err__8959__auto__);
}
}
})();
cb_fn_STAR__31163.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
}

return false;
} else {
throw e31138;

}
}}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4423__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4423__auto__)){
var s = temp__4423__auto__;
return s.close((3000),"SENTE_RECONNECT");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4423__auto__ = cljs.core.deref.call(null,self__.socket_);
if(cljs.core.truth_(temp__4423__auto__)){
var s = temp__4423__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
});

taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__4423__auto__ = (function (){var or__23410__auto__ = (window["WebSocket"]);
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return (window["MozWebSocket"]);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var WebSocket = temp__4423__auto__;
((function (WebSocket,temp__4423__auto__,chsk__$1){
return (function taoensso$sente$connect_BANG_(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (WebSocket,temp__4423__auto__,chsk__$1){
return (function (){
var nattempt_STAR_ = cljs.core.swap_BANG_.call(null,self__.nattempt_,cljs.core.inc);
window.clearInterval(cljs.core.deref.call(null,self__.kalive_timer_));

taoensso.encore.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,taoensso$sente$connect_BANG_,nattempt_STAR_);
});})(WebSocket,temp__4423__auto__,chsk__$1))
;
var temp__4421__auto__ = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null))));
}catch (e31146){if((e31146 instanceof Error)){
var e = e31146;
taoensso.encore.errorf.call(null,"WebSocket js/Error: %s",e);

return null;
} else {
throw e31146;

}
}})();
if(cljs.core.truth_(temp__4421__auto__)){
var socket = temp__4421__auto__;
return cljs.core.reset_BANG_.call(null,self__.socket_,(function (){var G__31147 = socket;
(G__31147["onerror"] = ((function (G__31147,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1){
return (function (ws_ev){
return taoensso.encore.errorf.call(null,"WebSocket error: %s",ws_ev);
});})(G__31147,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1))
);

(G__31147["onmessage"] = ((function (G__31147,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1){
return (function (ws_ev){
var ppstr = (ws_ev["data"]);
var vec__31148 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__31148,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.call(null,vec__31148,(1),null);
var or__23410__auto__ = (function (){var and__23398__auto__ = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(and__23398__auto__)){
return cljs.core.reset_BANG_.call(null,self__.nattempt_,(0));
} else {
return and__23398__auto__;
}
})();
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
var temp__4421__auto____$1 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__4421__auto____$1)){
var cb_uuid = temp__4421__auto____$1;
var temp__4421__auto____$2 = taoensso.sente.pull_unused_cb_fn_BANG_.call(null,self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__4421__auto____$2)){
var cb_fn = temp__4421__auto____$2;
return cb_fn.call(null,clj);
} else {
return taoensso.encore.warnf.call(null,"Cb reply w/o local cb-fn: %s",clj);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs);
}
}
});})(G__31147,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1))
);

(G__31147["onopen"] = ((function (G__31147,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1){
return (function (_ws_ev){
return cljs.core.reset_BANG_.call(null,self__.kalive_timer_,window.setInterval(((function (G__31147,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,self__.kalive_due_QMARK__))){
taoensso.sente.chsk_send_BANG_.call(null,chsk__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,self__.kalive_due_QMARK__,true);
});})(G__31147,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1))
,self__.kalive_ms));
});})(G__31147,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1))
);

(G__31147["onclose"] = ((function (G__31147,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1){
return (function (_ws_ev){
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);
});})(G__31147,socket,temp__4421__auto__,retry_BANG_,WebSocket,temp__4423__auto__,chsk__$1))
);

return G__31147;
})());
} else {
return retry_BANG_.call(null);
}
}
});})(WebSocket,temp__4423__auto__,chsk__$1))
.call(null);

return chsk__$1;
} else {
return null;
}
});

taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"kalive-ms","kalive-ms",1851265548,null),new cljs.core.Symbol(null,"kalive-timer_","kalive-timer_",-1096022620,null),new cljs.core.Symbol(null,"kalive-due?_","kalive-due?_",1679969599,null),new cljs.core.Symbol(null,"nattempt_","nattempt_",-674239217,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null)], null);
});

taoensso.sente.ChWebSocket.cljs$lang$type = true;

taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__24039__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChWebSocket");
});

taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__24039__auto__,writer__24040__auto__){
return cljs.core._write.call(null,writer__24040__auto__,"taoensso.sente/ChWebSocket");
});

taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer){
return (new taoensso.sente.ChWebSocket(client_id,url,chs,socket_,kalive_ms,kalive_timer_,kalive_due_QMARK__,nattempt_,cbs_waiting_,state_,packer,null,null,null));
});

taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__31103){
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__31103),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__31103),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__31103),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__31103),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021).cljs$core$IFn$_invoke$arity$1(G__31103),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149).cljs$core$IFn$_invoke$arity$1(G__31103),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072).cljs$core$IFn$_invoke$arity$1(G__31103),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552).cljs$core$IFn$_invoke$arity$1(G__31103),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__31103),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__31103),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__31103),null,cljs.core.dissoc.call(null,G__31103,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)),null));
});


/**
* @constructor
* @param {*} client_id
* @param {*} url
* @param {*} chs
* @param {*} timeout_ms
* @param {*} curr_xhr_
* @param {*} state_
* @param {*} packer
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
taoensso.sente.ChAjaxSocket = (function (client_id,url,chs,timeout_ms,curr_xhr_,state_,packer,__meta,__extmap,__hash){
this.client_id = client_id;
this.url = url;
this.chs = chs;
this.timeout_ms = timeout_ms;
this.curr_xhr_ = curr_xhr_;
this.state_ = state_;
this.packer = packer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24005__auto__,k__24006__auto__){
var self__ = this;
var this__24005__auto____$1 = this;
return cljs.core._lookup.call(null,this__24005__auto____$1,k__24006__auto__,null);
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24007__auto__,k31165,else__24008__auto__){
var self__ = this;
var this__24007__auto____$1 = this;
var G__31167 = (((k31165 instanceof cljs.core.Keyword))?k31165.fqn:null);
switch (G__31167) {
case "client-id":
return self__.client_id;

break;
case "url":
return self__.url;

break;
case "chs":
return self__.chs;

break;
case "timeout-ms":
return self__.timeout_ms;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
case "state_":
return self__.state_;

break;
case "packer":
return self__.packer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31165,else__24008__auto__);

}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24019__auto__,writer__24020__auto__,opts__24021__auto__){
var self__ = this;
var this__24019__auto____$1 = this;
var pr_pair__24022__auto__ = ((function (this__24019__auto____$1){
return (function (keyval__24023__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24020__auto__,cljs.core.pr_writer,""," ","",opts__24021__auto__,keyval__24023__auto__);
});})(this__24019__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24020__auto__,pr_pair__24022__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__24021__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24003__auto__){
var self__ = this;
var this__24003__auto____$1 = this;
return self__.__meta;
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__23999__auto__){
var self__ = this;
var this__23999__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24009__auto__){
var self__ = this;
var this__24009__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24000__auto__){
var self__ = this;
var this__24000__auto____$1 = this;
var h__23826__auto__ = self__.__hash;
if(!((h__23826__auto__ == null))){
return h__23826__auto__;
} else {
var h__23826__auto____$1 = cljs.core.hash_imap.call(null,this__24000__auto____$1);
self__.__hash = h__23826__auto____$1;

return h__23826__auto____$1;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24001__auto__,other__24002__auto__){
var self__ = this;
var this__24001__auto____$1 = this;
if(cljs.core.truth_((function (){var and__23398__auto__ = other__24002__auto__;
if(cljs.core.truth_(and__23398__auto__)){
var and__23398__auto____$1 = (this__24001__auto____$1.constructor === other__24002__auto__.constructor);
if(and__23398__auto____$1){
return cljs.core.equiv_map.call(null,this__24001__auto____$1,other__24002__auto__);
} else {
return and__23398__auto____$1;
}
} else {
return and__23398__auto__;
}
})())){
return true;
} else {
return false;
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24014__auto__,k__24015__auto__){
var self__ = this;
var this__24014__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__24015__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24014__auto____$1),self__.__meta),k__24015__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24015__auto__)),null));
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24012__auto__,k__24013__auto__,G__31164){
var self__ = this;
var this__24012__auto____$1 = this;
var pred__31168 = cljs.core.keyword_identical_QMARK_;
var expr__31169 = k__24013__auto__;
if(cljs.core.truth_(pred__31168.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__31169))){
return (new taoensso.sente.ChAjaxSocket(G__31164,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31168.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__31169))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__31164,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31168.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__31169))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,G__31164,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31168.call(null,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),expr__31169))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,G__31164,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31168.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__31169))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,G__31164,self__.state_,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31168.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__31169))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,G__31164,self__.packer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31168.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__31169))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,G__31164,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24013__auto__,G__31164),null));
}
}
}
}
}
}
}
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24017__auto__){
var self__ = this;
var this__24017__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null))], null),self__.__extmap));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24004__auto__,G__31164){
var self__ = this;
var this__24004__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.url,self__.chs,self__.timeout_ms,self__.curr_xhr_,self__.state_,self__.packer,G__31164,self__.__extmap,self__.__hash));
});

taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24010__auto__,entry__24011__auto__){
var self__ = this;
var this__24010__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24011__auto__)){
return cljs.core._assoc.call(null,this__24010__auto____$1,cljs.core._nth.call(null,entry__24011__auto__,(0)),cljs.core._nth.call(null,entry__24011__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24010__auto____$1,entry__24011__auto__);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = true;

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_send_BANG__STAR_$arity$3 = (function (chsk,ev,p__31171){
var self__ = this;
var map__31172 = p__31171;
var map__31172__$1 = ((cljs.core.seq_QMARK_.call(null,map__31172))?cljs.core.apply.call(null,cljs.core.hash_map,map__31172):map__31172);
var opts = map__31172__$1;
var _QMARK_timeout_ms = cljs.core.get.call(null,map__31172__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.call(null,map__31172__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.call(null,map__31172__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var chsk__$1 = this;
taoensso.sente.assert_send_args.call(null,ev,_QMARK_timeout_ms,_QMARK_cb);

var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn.call(null,_QMARK_cb,ev);
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
taoensso.encore.warnf.call(null,"Chsk send against closed chsk.");

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264));
} else {
return null;
}
} else {
taoensso.sente.ajax_call.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.call(null,self__.packer,cljs.core.meta.call(null,ev),ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)),new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null);
})()], null),((function (_QMARK_cb_fn,chsk__$1,map__31172,map__31172__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_){
return (function taoensso$sente$ajax_cb(p__31173){
var map__31176 = p__31173;
var map__31176__$1 = ((cljs.core.seq_QMARK_.call(null,map__31176))?cljs.core.apply.call(null,cljs.core.hash_map,map__31176):map__31176);
var _QMARK_error = cljs.core.get.call(null,map__31176__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__31176__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
} else {
return null;
}
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.truth_(_QMARK_cb_fn)){
return _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__31177 = taoensso.sente.unpack.call(null,self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.call(null,vec__31177,(0),null);
var _ = cljs.core.nth.call(null,vec__31177,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
_QMARK_cb_fn.call(null,resp_clj);
} else {
if(cljs.core.not_EQ_.call(null,resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.encore.warnf.call(null,"Cb reply w/o local cb-fn: %s",resp_clj);
} else {
}
}

return taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}
});})(_QMARK_cb_fn,chsk__$1,map__31172,map__31172__$1,opts,_QMARK_timeout_ms,_QMARK_cb,flush_QMARK_))
);

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"requested-reconnect-pending?","requested-reconnect-pending?",-299841116),true], null));

var temp__4423__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4423__auto__)){
var x = temp__4423__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_destroy_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),true], null));

var temp__4423__auto__ = cljs.core.deref.call(null,self__.curr_xhr_);
if(cljs.core.truth_(temp__4423__auto__)){
var x = temp__4423__auto__;
return x.abort();
} else {
return null;
}
});

taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$chsk_init_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
((function (chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG_(nattempt){
taoensso.encore.tracef.call(null,"async-poll-for-update!");

if(cljs.core.truth_(new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))){
return null;
} else {
var retry_BANG_ = ((function (chsk__$1){
return (function (){
var nattempt_STAR_ = (nattempt + (1));
taoensso.encore.warnf.call(null,"Chsk is closed: will try reconnect (%s).",nattempt_STAR_);

return taoensso.sente.set_exp_backoff_timeout_BANG_.call(null,cljs.core.partial.call(null,taoensso$sente$async_poll_for_update_BANG_,nattempt_STAR_),nattempt_STAR_);
});})(chsk__$1))
;
return cljs.core.reset_BANG_.call(null,self__.curr_xhr_,taoensso.sente.ajax_call.call(null,self__.url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),self__.timeout_ms,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"_","_",1453416199),taoensso.encore.now_udt.call(null),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null)))], null),((function (retry_BANG_,chsk__$1){
return (function taoensso$sente$async_poll_for_update_BANG__$_ajax_cb(p__31183){
var map__31186 = p__31183;
var map__31186__$1 = ((cljs.core.seq_QMARK_.call(null,map__31186))?cljs.core.apply.call(null,cljs.core.hash_map,map__31186):map__31186);
var _QMARK_error = cljs.core.get.call(null,map__31186__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.call(null,map__31186__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.call(null,_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
} else {
taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

return retry_BANG_.call(null);

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__31187 = taoensso.sente.unpack.call(null,self__.packer,ppstr);
var clj = cljs.core.nth.call(null,vec__31187,(0),null);
var _ = cljs.core.nth.call(null,vec__31187,(1),null);
var or__23410__auto___31189 = taoensso.sente.handle_when_handshake_BANG_.call(null,chsk__$1,self__.chs,clj);
if(cljs.core.truth_(or__23410__auto___31189)){
} else {
var buffered_evs_31190 = clj;
taoensso.sente.receive_buffered_evs_BANG_.call(null,self__.chs,buffered_evs_31190);

taoensso.sente.merge_GT_chsk_state_BANG_.call(null,chsk__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

return taoensso$sente$async_poll_for_update_BANG_.call(null,(0));
}
});})(retry_BANG_,chsk__$1))
));
}
});})(chsk__$1))
.call(null,(0));

return chsk__$1;
});

taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null)], null);
});

taoensso.sente.ChAjaxSocket.cljs$lang$type = true;

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__24039__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__24039__auto__,writer__24040__auto__){
return cljs.core._write.call(null,writer__24040__auto__,"taoensso.sente/ChAjaxSocket");
});

taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,url,chs,timeout_ms,curr_xhr_,state_,packer){
return (new taoensso.sente.ChAjaxSocket(client_id,url,chs,timeout_ms,curr_xhr_,state_,packer,null,null,null));
});

taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__31166){
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__31166),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__31166),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__31166),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(G__31166),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__31166),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__31166),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__31166),null,cljs.core.dissoc.call(null,G__31166,new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"packer","packer",66077544)),null));
});

/**
 * (ƒ [path window-location websocket?]) -> server-side chsk route URL string.
 * 
 * * path       - As provided to client-side `make-channel-socket!` fn
 * (usu. "/chsk").
 * * websocket? - True for WebSocket connections, false for Ajax (long-polling)
 * connections.
 * * window-location - Map with keys:
 * :href     ; "http://www.example.org:80/foo/bar?q=baz#bang"
 * :protocol ; "http:" ; Note the :
 * :hostname ; "example.org"
 * :host     ; "example.org:80"
 * :pathname ; "/foo/bar"
 * :search   ; "?q=baz"
 * :hash     ; "#bang"
 * 
 * Note that the *same* URL is used for: WebSockets, POSTs, GETs. Server-side
 * routes should be configured accordingly.
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__31191,websocket_QMARK_){
var map__31193 = p__31191;
var map__31193__$1 = ((cljs.core.seq_QMARK_.call(null,map__31193))?cljs.core.apply.call(null,cljs.core.hash_map,map__31193):map__31193);
var window_location = map__31193__$1;
var protocol = cljs.core.get.call(null,map__31193__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.call(null,map__31193__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.call(null,map__31193__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
return [cljs.core.str(((cljs.core.not.call(null,websocket_QMARK_))?protocol:((cljs.core._EQ_.call(null,protocol,"https:"))?"wss:":"ws:"))),cljs.core.str("//"),cljs.core.str(host),cljs.core.str((function (){var or__23410__auto__ = path;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return pathname;
}
})())].join('');
});
/**
 * Returns a map with keys:
 * :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 * ; May `put!` (inject) arbitrary `event`s to this channel.
 * :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 * :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 * :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 * Common options:
 * :type         ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 * :ws-kalive-ms ; Ping to keep a WebSocket conn alive if no activity w/in given
 * ; number of milliseconds.
 * :lp-kalive-ms ; Ping to keep a long-polling (Ajax) conn alive ''.
 * :chsk-url-fn  ; Please see `default-chsk-url-fn` for details.
 * :packer       ; :edn (default), or an IPacker implementation (experimental).
 */
taoensso.sente.make_channel_socket_BANG_ = (function taoensso$sente$make_channel_socket_BANG_(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__31196){
var vec__31197 = p__31196;
var map__31198 = cljs.core.nth.call(null,vec__31197,(0),null);
var map__31198__$1 = ((cljs.core.seq_QMARK_.call(null,map__31198))?cljs.core.apply.call(null,cljs.core.hash_map,map__31198):map__31198);
var opts = map__31198__$1;
var type = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var recv_buf_or_n = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer.call(null,(2048)));
var ws_kalive_ms = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),(25000));
var lp_timeout_ms = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),(25000));
var chsk_url_fn = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),taoensso.sente.default_chsk_url_fn);
var packer = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var client_id = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__23410__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return taoensso.encore.uuid_str.call(null);
}
})());
var _deprecated_more_opts = cljs.core.nth.call(null,vec__31197,(1),null);
if((function (){
var vec__31199_31209 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null);
}catch (e31201){if((e31201 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31201;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31201;

}
}})();
var x__8955__auto___31210 = cljs.core.nth.call(null,vec__31199_31209,(0),null);
var _QMARK_x_err__8956__auto___31211 = cljs.core.nth.call(null,vec__31199_31209,(1),null);
var have_x_QMARK___8957__auto___31212 = (_QMARK_x_err__8956__auto___31211 == null);
var vec__31200_31213 = ((have_x_QMARK___8957__auto___31212)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null)).call(null,x__8955__auto___31210)], null);
}catch (e31202){if((e31202 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31202;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31202;

}
}})():null);
var pass_QMARK___8958__auto___31214 = cljs.core.nth.call(null,vec__31200_31213,(0),null);
var _QMARK_pred_err__8959__auto___31215 = cljs.core.nth.call(null,vec__31200_31213,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___31214)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.sente",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"type","type",-1480165421,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null)),((have_x_QMARK___8957__auto___31212)?x__8955__auto___31210:_QMARK_x_err__8956__auto___31211),_QMARK_pred_err__8959__auto___31215);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null)], null),new cljs.core.Symbol(null,"type","type",-1480165421,null))))].join('')));
}

if((function (){
var vec__31203_31216 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client_id], null);
}catch (e31205){if((e31205 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31205;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31205;

}
}})();
var x__8955__auto___31217 = cljs.core.nth.call(null,vec__31203_31216,(0),null);
var _QMARK_x_err__8956__auto___31218 = cljs.core.nth.call(null,vec__31203_31216,(1),null);
var have_x_QMARK___8957__auto___31219 = (_QMARK_x_err__8956__auto___31218 == null);
var vec__31204_31220 = ((have_x_QMARK___8957__auto___31219)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nblank_str_QMARK_).call(null,x__8955__auto___31217)], null);
}catch (e31206){if((e31206 instanceof java.lang.Throwable)){
var t__8843__auto__ = e31206;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e31206;

}
}})():null);
var pass_QMARK___8958__auto___31221 = cljs.core.nth.call(null,vec__31204_31220,(0),null);
var _QMARK_pred_err__8959__auto___31222 = cljs.core.nth.call(null,vec__31204_31220,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___31221)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.sente",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"client-id","client-id",1175909387,null)),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null)),((have_x_QMARK___8957__auto___31219)?x__8955__auto___31217:_QMARK_x_err__8956__auto___31218),_QMARK_pred_err__8959__auto___31222);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol("enc","nblank-str?","enc/nblank-str?",19952870,null),new cljs.core.Symbol(null,"client-id","client-id",1175909387,null))))].join('')));
}

if(!((_deprecated_more_opts == null))){
taoensso.encore.warnf.call(null,"`make-channel-socket!` fn signature CHANGED with Sente v0.10.0.");
} else {
}

if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.encore.warnf.call(null,":lp-timeout opt has CHANGED; please use :lp-timout-ms.");
} else {
}

var packer__$1 = taoensso.sente.interfaces.coerce_packer.call(null,packer);
var window_location = taoensso.encore.get_window_location.call(null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),cljs.core.async.chan.call(null,recv_buf_or_n)], null);
var ever_opened_QMARK__ = cljs.core.atom.call(null,false);
var state_STAR_ = ((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__31197,map__31198,map__31198__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,_deprecated_more_opts){
return (function (state){
if(cljs.core.truth_((function (){var or__23410__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state));
if(or__23410__auto__){
return or__23410__auto__;
} else {
return cljs.core.deref.call(null,ever_opened_QMARK__);
}
})())){
return state;
} else {
cljs.core.reset_BANG_.call(null,ever_opened_QMARK__,true);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true);
}
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,vec__31197,map__31198,map__31198__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,_deprecated_more_opts))
;
var public_ch_recv = cljs.core.async.merge.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__31197,map__31198,map__31198__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,_deprecated_more_opts){
return (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),state_STAR_.call(null,state)], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__31197,map__31198,map__31198__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,_deprecated_more_opts))
,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs)),cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__31197,map__31198,map__31198__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,_deprecated_more_opts){
return (function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,vec__31197,map__31198,map__31198__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,_deprecated_more_opts))
,new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs))], null));
var chsk = (function (){var or__23410__auto__ = (function (){var and__23398__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ajax","ajax",814345549));
if(and__23398__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChWebSocket.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"kalive-ms","kalive-ms",210734021),new cljs.core.Keyword(null,"nattempt_","nattempt_",1980196552),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"kalive-due?_","kalive-due?_",39438072),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"kalive-timer_","kalive-timer_",1558413149),new cljs.core.Keyword(null,"state_","state_",957667102)],[client_id,ws_kalive_ms,cljs.core.atom.call(null,(0)),packer__$1,private_chs,cljs.core.atom.call(null,null),chsk_url_fn.call(null,path,window_location,new cljs.core.Keyword(null,"ws","ws",86841443)),cljs.core.atom.call(null,true),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.atom.call(null,null),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))])));
} else {
return and__23398__auto__;
}
})();
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
var and__23398__auto__ = cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"ws","ws",86841443));
if(and__23398__auto__){
return taoensso.sente.chsk_init_BANG_.call(null,taoensso.sente.map__GT_ChAjaxSocket.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"url","url",276297046),chsk_url_fn.call(null,path,window_location,cljs.core.not.call(null,new cljs.core.Keyword(null,"ws","ws",86841443))),new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),lp_timeout_ms,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.call(null,null),new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"destroyed?","destroyed?",1049634064),false], null))], null)));
} else {
return and__23398__auto__;
}
}
})();
var _ = (cljs.core.truth_(chsk)?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Failed to create channel socket"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"chsk","chsk",776828446,null)))].join('')))})());
var send_fn = cljs.core.partial.call(null,taoensso.sente.chsk_send_BANG_,chsk);
var public_ch_recv__$1 = cljs.core.async.map_LT_.call(null,((function (packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__31197,map__31198,map__31198__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,_deprecated_more_opts){
return (function taoensso$sente$ev__GT_ev_msg(ev){
var vec__31208 = taoensso.sente.as_event.call(null,ev);
var ev_id = cljs.core.nth.call(null,vec__31208,(0),null);
var ev__QMARK_data = cljs.core.nth.call(null,vec__31208,(1),null);
var ev__$1 = vec__31208;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
});})(packer__$1,window_location,private_chs,ever_opened_QMARK__,state_STAR_,public_ch_recv,chsk,_,send_fn,vec__31197,map__31198,map__31198__$1,opts,type,recv_buf_or_n,ws_kalive_ms,lp_timeout_ms,chsk_url_fn,packer,client_id,_deprecated_more_opts))
,public_ch_recv);
if(cljs.core.truth_(chsk)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),public_ch_recv__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return null;
}
});

taoensso.sente.make_channel_socket_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.sente.make_channel_socket_BANG_.cljs$lang$applyTo = (function (seq31194){
var G__31195 = cljs.core.first.call(null,seq31194);
var seq31194__$1 = cljs.core.next.call(null,seq31194);
return taoensso.sente.make_channel_socket_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31195,seq31194__$1);
});
/**
 * Creates a go-loop to call `(event-msg-handler <event-msg>)` and returns a
 * `(fn stop! [])`. Catches & logs errors. Advanced users may choose to instead
 * write their own loop against `ch-recv`.
 */
taoensso.sente.start_chsk_router_BANG_ = (function taoensso$sente$start_chsk_router_BANG_(){
var argseq__24450__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24450__auto__);
});

taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__31226){
var vec__31227 = p__31226;
var map__31228 = cljs.core.nth.call(null,vec__31227,(0),null);
var map__31228__$1 = ((cljs.core.seq_QMARK_.call(null,map__31228))?cljs.core.apply.call(null,cljs.core.hash_map,map__31228):map__31228);
var opts = map__31228__$1;
var trace_evs_QMARK_ = cljs.core.get.call(null,map__31228__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var ch_ctrl = cljs.core.async.chan.call(null);
var c__25507__auto___31330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___31330,ch_ctrl,vec__31227,map__31228,map__31228__$1,opts,trace_evs_QMARK_){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___31330,ch_ctrl,vec__31227,map__31228,map__31228__$1,opts,trace_evs_QMARK_){
return (function (state_31287){
var state_val_31288 = (state_31287[(1)]);
if((state_val_31288 === (7))){
var inst_31240 = (state_31287[(2)]);
var inst_31241 = cljs.core.nth.call(null,inst_31240,(0),null);
var inst_31242 = cljs.core.nth.call(null,inst_31240,(1),null);
var inst_31243 = taoensso.encore.kw_identical_QMARK_.call(null,inst_31242,ch_ctrl);
var state_31287__$1 = (function (){var statearr_31289 = state_31287;
(statearr_31289[(7)] = inst_31241);

return statearr_31289;
})();
if(cljs.core.truth_(inst_31243)){
var statearr_31290_31331 = state_31287__$1;
(statearr_31290_31331[(1)] = (8));

} else {
var statearr_31291_31332 = state_31287__$1;
(statearr_31291_31332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (20))){
var inst_31253 = (state_31287[(8)]);
var inst_31267 = taoensso.encore.errorf.call(null,"Bad event: %s",inst_31253);
var state_31287__$1 = state_31287;
var statearr_31292_31333 = state_31287__$1;
(statearr_31292_31333[(2)] = inst_31267);

(statearr_31292_31333[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (1))){
var state_31287__$1 = state_31287;
var statearr_31293_31334 = state_31287__$1;
(statearr_31293_31334[(2)] = null);

(statearr_31293_31334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (24))){
var state_31287__$1 = state_31287;
var statearr_31294_31335 = state_31287__$1;
(statearr_31294_31335[(2)] = null);

(statearr_31294_31335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (4))){
var inst_31277 = (state_31287[(2)]);
var inst_31278 = taoensso.encore.kw_identical_QMARK_.call(null,new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571),inst_31277);
var state_31287__$1 = state_31287;
if(cljs.core.truth_(inst_31278)){
var statearr_31295_31336 = state_31287__$1;
(statearr_31295_31336[(1)] = (23));

} else {
var statearr_31296_31337 = state_31287__$1;
(statearr_31296_31337[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (15))){
var inst_31253 = (state_31287[(8)]);
var inst_31254 = (state_31287[(2)]);
var inst_31255 = taoensso.encore.errorf.call(null,"Chsk router handling error: %s",inst_31253);
var state_31287__$1 = (function (){var statearr_31297 = state_31287;
(statearr_31297[(9)] = inst_31254);

return statearr_31297;
})();
var statearr_31298_31338 = state_31287__$1;
(statearr_31298_31338[(2)] = inst_31255);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31287__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (21))){
var inst_31252 = (state_31287[(10)]);
var inst_31269 = event_msg_handler.call(null,inst_31252);
var state_31287__$1 = state_31287;
var statearr_31299_31339 = state_31287__$1;
(statearr_31299_31339[(2)] = inst_31269);

(statearr_31299_31339[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (13))){
var inst_31252 = (state_31287[(10)]);
var inst_31252__$1 = (state_31287[(2)]);
var inst_31253 = cljs.core.get.call(null,inst_31252__$1,new cljs.core.Keyword(null,"event","event",301435442));
var state_31287__$1 = (function (){var statearr_31300 = state_31287;
(statearr_31300[(8)] = inst_31253);

(statearr_31300[(10)] = inst_31252__$1);

return statearr_31300;
})();
var statearr_31301_31340 = state_31287__$1;
(statearr_31301_31340[(2)] = null);

(statearr_31301_31340[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (22))){
var inst_31271 = (state_31287[(2)]);
var state_31287__$1 = (function (){var statearr_31302 = state_31287;
(statearr_31302[(11)] = inst_31271);

return statearr_31302;
})();
var statearr_31303_31341 = state_31287__$1;
(statearr_31303_31341[(2)] = null);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31287__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (6))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31287,(5),Error,null,(4));
var inst_31236 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31237 = [ch_recv,ch_ctrl];
var inst_31238 = (new cljs.core.PersistentVector(null,2,(5),inst_31236,inst_31237,null));
var state_31287__$1 = state_31287;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31287__$1,(7),inst_31238);
} else {
if((state_val_31288 === (25))){
var inst_31283 = (state_31287[(2)]);
var state_31287__$1 = state_31287;
var statearr_31304_31342 = state_31287__$1;
(statearr_31304_31342[(2)] = inst_31283);

(statearr_31304_31342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (17))){
var inst_31253 = (state_31287[(8)]);
var inst_31260 = taoensso.encore.tracef.call(null,"Pre-handler event: %s",inst_31253);
var state_31287__$1 = state_31287;
var statearr_31305_31343 = state_31287__$1;
(statearr_31305_31343[(2)] = inst_31260);

(statearr_31305_31343[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (3))){
var inst_31285 = (state_31287[(2)]);
var state_31287__$1 = state_31287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31287__$1,inst_31285);
} else {
if((state_val_31288 === (12))){
var inst_31241 = (state_31287[(7)]);
var state_31287__$1 = state_31287;
var statearr_31306_31344 = state_31287__$1;
(statearr_31306_31344[(2)] = inst_31241);

(statearr_31306_31344[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (2))){
var state_31287__$1 = state_31287;
var statearr_31307_31345 = state_31287__$1;
(statearr_31307_31345[(2)] = null);

(statearr_31307_31345[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (23))){
var state_31287__$1 = state_31287;
var statearr_31308_31346 = state_31287__$1;
(statearr_31308_31346[(2)] = null);

(statearr_31308_31346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (19))){
var inst_31252 = (state_31287[(10)]);
var inst_31263 = (state_31287[(2)]);
var inst_31264 = taoensso.sente.event_msg_QMARK_.call(null,inst_31252);
var inst_31265 = cljs.core.not.call(null,inst_31264);
var state_31287__$1 = (function (){var statearr_31309 = state_31287;
(statearr_31309[(12)] = inst_31263);

return statearr_31309;
})();
if(inst_31265){
var statearr_31310_31347 = state_31287__$1;
(statearr_31310_31347[(1)] = (20));

} else {
var statearr_31311_31348 = state_31287__$1;
(statearr_31311_31348[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (11))){
var inst_31241 = (state_31287[(7)]);
var inst_31249 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31241);
var state_31287__$1 = state_31287;
var statearr_31312_31349 = state_31287__$1;
(statearr_31312_31349[(2)] = inst_31249);

(statearr_31312_31349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (9))){
var inst_31241 = (state_31287[(7)]);
var inst_31247 = cljs.core.seq_QMARK_.call(null,inst_31241);
var state_31287__$1 = state_31287;
if(inst_31247){
var statearr_31313_31350 = state_31287__$1;
(statearr_31313_31350[(1)] = (11));

} else {
var statearr_31314_31351 = state_31287__$1;
(statearr_31314_31351[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (5))){
var inst_31230 = (state_31287[(2)]);
var inst_31231 = taoensso.encore.errorf.call(null,"Chsk router channel error!");
var state_31287__$1 = (function (){var statearr_31315 = state_31287;
(statearr_31315[(13)] = inst_31230);

return statearr_31315;
})();
var statearr_31316_31352 = state_31287__$1;
(statearr_31316_31352[(2)] = inst_31231);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31287__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (14))){
var inst_31273 = (state_31287[(2)]);
var state_31287__$1 = state_31287;
var statearr_31317_31353 = state_31287__$1;
(statearr_31317_31353[(2)] = inst_31273);

(statearr_31317_31353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (16))){
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31287,(15),Error,null,(14));
var state_31287__$1 = state_31287;
if(cljs.core.truth_(trace_evs_QMARK_)){
var statearr_31318_31354 = state_31287__$1;
(statearr_31318_31354[(1)] = (17));

} else {
var statearr_31319_31355 = state_31287__$1;
(statearr_31319_31355[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (10))){
var inst_31275 = (state_31287[(2)]);
var state_31287__$1 = state_31287;
var statearr_31320_31356 = state_31287__$1;
(statearr_31320_31356[(2)] = inst_31275);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31287__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (18))){
var state_31287__$1 = state_31287;
var statearr_31321_31357 = state_31287__$1;
(statearr_31321_31357[(2)] = null);

(statearr_31321_31357[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31288 === (8))){
var state_31287__$1 = state_31287;
var statearr_31322_31358 = state_31287__$1;
(statearr_31322_31358[(2)] = new cljs.core.Keyword("taoensso.sente","stop","taoensso.sente/stop",-1361782571));

(statearr_31322_31358[(1)] = (10));


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
});})(c__25507__auto___31330,ch_ctrl,vec__31227,map__31228,map__31228__$1,opts,trace_evs_QMARK_))
;
return ((function (switch__25445__auto__,c__25507__auto___31330,ch_ctrl,vec__31227,map__31228,map__31228__$1,opts,trace_evs_QMARK_){
return (function() {
var taoensso$sente$state_machine__25446__auto__ = null;
var taoensso$sente$state_machine__25446__auto____0 = (function (){
var statearr_31326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31326[(0)] = taoensso$sente$state_machine__25446__auto__);

(statearr_31326[(1)] = (1));

return statearr_31326;
});
var taoensso$sente$state_machine__25446__auto____1 = (function (state_31287){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_31287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e31327){if((e31327 instanceof Object)){
var ex__25449__auto__ = e31327;
var statearr_31328_31359 = state_31287;
(statearr_31328_31359[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31360 = state_31287;
state_31287 = G__31360;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
taoensso$sente$state_machine__25446__auto__ = function(state_31287){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__25446__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__25446__auto____1.call(this,state_31287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__25446__auto____0;
taoensso$sente$state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__25446__auto____1;
return taoensso$sente$state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___31330,ch_ctrl,vec__31227,map__31228,map__31228__$1,opts,trace_evs_QMARK_))
})();
var state__25509__auto__ = (function (){var statearr_31329 = f__25508__auto__.call(null);
(statearr_31329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___31330);

return statearr_31329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___31330,ch_ctrl,vec__31227,map__31228,map__31228__$1,opts,trace_evs_QMARK_))
);


return ((function (ch_ctrl,vec__31227,map__31228,map__31228__$1,opts,trace_evs_QMARK_){
return (function taoensso$sente$stop_BANG_(){
return cljs.core.async.close_BANG_.call(null,ch_ctrl);
});
;})(ch_ctrl,vec__31227,map__31228,map__31228__$1,opts,trace_evs_QMARK_))
});

taoensso.sente.start_chsk_router_BANG_.cljs$lang$maxFixedArity = (2);

taoensso.sente.start_chsk_router_BANG_.cljs$lang$applyTo = (function (seq31223){
var G__31224 = cljs.core.first.call(null,seq31223);
var seq31223__$1 = cljs.core.next.call(null,seq31223);
var G__31225 = cljs.core.first.call(null,seq31223__$1);
var seq31223__$2 = cljs.core.next.call(null,seq31223__$1);
return taoensso.sente.start_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31224,G__31225,seq31223__$2);
});
/**
 * DEPRECATED: Please use `start-chsk-router!` instead.
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_chsk_router_BANG_.call(null,ch_recv,(function (ev_msg){
return event_handler.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg));
}));
});

//# sourceMappingURL=sente.js.map