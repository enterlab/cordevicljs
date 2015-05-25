// Compiled by ClojureScript 0.0-3291 {}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('goog.net.XhrIoPool');
goog.require('goog.events');
goog.require('clojure.set');
goog.require('goog.net.XhrIo');
goog.require('goog.Uri.QueryData');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.net.EventType');
goog.require('goog.structs');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');
/**
 * Used for lib-consumer version assertions
 */
taoensso.encore.encore_version = 1.21;
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
if((taoensso.encore.encore_version < min_version)){
throw cljs.core.ex_info.call(null,taoensso.encore.format.call(null,"Insufficient com.taoensso/encore version: %s < %s. You may have a Leiningen dependency conflict (see http://goo.gl/qBbLvC for solution).",taoensso.encore.encore_version,min_version),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),min_version,new cljs.core.Keyword(null,"this-version","this-version",355666086),taoensso.encore.encore_version], null));
} else {
return null;
}
});
/**
 * Handles optional docstrings & attr maps for a macro def's name.
 * Stolen from `clojure.tools.macro`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(name,macro_args){
var vec__30181 = ((typeof cljs.core.first.call(null,macro_args) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args),cljs.core.next.call(null,macro_args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,macro_args], null));
var docstring = cljs.core.nth.call(null,vec__30181,(0),null);
var macro_args__$1 = cljs.core.nth.call(null,vec__30181,(1),null);
var vec__30182 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,macro_args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,macro_args__$1),cljs.core.next.call(null,macro_args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,macro_args__$1], null));
var attr = cljs.core.nth.call(null,vec__30182,(0),null);
var macro_args__$2 = cljs.core.nth.call(null,vec__30182,(1),null);
var attr__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,attr,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):attr);
var attr__$2 = (cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.conj.call(null,cljs.core.meta.call(null,name),attr__$1):attr__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,name,attr__$2),macro_args__$2], null);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});
taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});
/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var temp__4423__auto__ = (function (){var or__23410__auto__ = cljs.core.ex_data.call(null,x);
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var data_map = temp__4423__auto__;
return cljs.core.merge.call(null,(function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type.call(null,err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.nnil_QMARK_ = (function taoensso$encore$nnil_QMARK_(x){
return !((x == null));
});
taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,x));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});
taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && ((x > (0)));
});
taoensso.encore.nneg_int_QMARK_ = (function taoensso$encore$nneg_int_QMARK_(x){
return (cljs.core.integer_QMARK_.call(null,x)) && (!((x < (0))));
});
taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),n));
});
taoensso.encore.udt_QMARK_ = taoensso.encore.nneg_int_QMARK_;
taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(2),x);
});
taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return taoensso.encore.nvec_QMARK_.call(null,(3),x);
});
taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,x)));
});
taoensso.encore.nneg_num_QMARK_ = (function taoensso$encore$nneg_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});
taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});
taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.call(null,(0),x);
});
taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,x))){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.call(null,x);
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});
taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.call(null,x,(0))) || (cljs.core._EQ_.call(null,x,"false")) || (cljs.core._EQ_.call(null,x,"FALSE")) || (cljs.core._EQ_.call(null,x,"0"))){
return false;
} else {
if((cljs.core._EQ_.call(null,x,(1))) || (cljs.core._EQ_.call(null,x,"true")) || (cljs.core._EQ_.call(null,x,"TRUE")) || (cljs.core._EQ_.call(null,x,"1"))){
return true;
} else {
return null;
}
}
}
}
});
taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return cljs.core.long$.call(null,x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if((x == null)){
return null;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNan(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
}
});
taoensso.encore.nnil_EQ_ = (function taoensso$encore$nnil_EQ_(){
var G__30189 = arguments.length;
switch (G__30189) {
case 2:
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__24461__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24461__auto__);

}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var and__23398__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__23398__auto__)){
return cljs.core._EQ_.call(null,x,y);
} else {
return and__23398__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__23398__auto__ = taoensso.encore.nnil_QMARK_.call(null,x);
if(cljs.core.truth_(and__23398__auto__)){
return cljs.core.apply.call(null,cljs.core._EQ_,x,y,more);
} else {
return and__23398__auto__;
}
});

taoensso.encore.nnil_EQ_.cljs$lang$applyTo = (function (seq30185){
var G__30186 = cljs.core.first.call(null,seq30185);
var seq30185__$1 = cljs.core.next.call(null,seq30185);
var G__30187 = cljs.core.first.call(null,seq30185__$1);
var seq30185__$2 = cljs.core.next.call(null,seq30185__$1);
return taoensso.encore.nnil_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__30186,G__30187,seq30185__$2);
});

taoensso.encore.nnil_EQ_.cljs$lang$maxFixedArity = (2);
taoensso.encore.vec_STAR_ = (function taoensso$encore$vec_STAR_(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.vec.call(null,x);
}
});
taoensso.encore.set_STAR_ = (function taoensso$encore$set_STAR_(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
return cljs.core.set.call(null,x);
}
});
taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.call(null,taoensso.encore.set_STAR_.call(null,x),null);
});
taoensso.encore.conj_some = (function taoensso$encore$conj_some(coll,_QMARK_x){
if(cljs.core.truth_(taoensso.encore.nnil_QMARK_.call(null,_QMARK_x))){
return cljs.core.conj.call(null,coll,_QMARK_x);
} else {
return coll;
}
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,m)),taoensso.encore.set_STAR_.call(null,ks));
});
taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return cljs.core.every_QMARK_.call(null,(function (p1__30191_SHARP_){
return taoensso.encore.nnil_QMARK_.call(null,cljs.core.get.call(null,m,p1__30191_SHARP_));
}),ks);
});
taoensso.encore.assertion_error = (function taoensso$encore$assertion_error(msg){
return (new Error(msg));
});
/**
 * Implementation detail.
 */
taoensso.encore.hthrow = (function taoensso$encore$hthrow(){
var argseq__24450__auto__ = ((((5) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(5)),(0))):null);
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__24450__auto__);
});

taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic = (function (hard_QMARK_,ns_str,_QMARK_line,form,val,p__30198){
var vec__30199 = p__30198;
var _QMARK_err = cljs.core.nth.call(null,vec__30199,(0),null);
var pattern = "Condition failed in `%s:%s` [pred-form, val]: [%s, %s]";
var line_str = (function (){var or__23410__auto__ = _QMARK_line;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return "?";
}
})();
var form_str = cljs.core.pr_str.call(null,form);
var val_str = cljs.core.pr_str.call(null,val);
var _QMARK_err_str = (function (){var temp__4423__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__4423__auto__)){
var e = temp__4423__auto__;
return cljs.core.pr_str.call(null,_QMARK_err);
} else {
return null;
}
})();
var msg = (function (){var m = taoensso.encore.format.call(null,pattern,ns_str,line_str,form_str,val_str);
if(cljs.core.not.call(null,_QMARK_err_str)){
return m;
} else {
return [cljs.core.str(m),cljs.core.str("\nPredicate error: "),cljs.core.str(_QMARK_err_str)].join('');
}
})();
throw ((cljs.core.not.call(null,hard_QMARK_))?taoensso.encore.assertion_error.call(null,msg):cljs.core.ex_info.call(null,msg,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),ns_str,new cljs.core.Keyword(null,"?line","?line",-631853385),_QMARK_line,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"?err","?err",549653299),_QMARK_err], null)));
});

taoensso.encore.hthrow.cljs$lang$maxFixedArity = (5);

taoensso.encore.hthrow.cljs$lang$applyTo = (function (seq30192){
var G__30193 = cljs.core.first.call(null,seq30192);
var seq30192__$1 = cljs.core.next.call(null,seq30192);
var G__30194 = cljs.core.first.call(null,seq30192__$1);
var seq30192__$2 = cljs.core.next.call(null,seq30192__$1);
var G__30195 = cljs.core.first.call(null,seq30192__$2);
var seq30192__$3 = cljs.core.next.call(null,seq30192__$2);
var G__30196 = cljs.core.first.call(null,seq30192__$3);
var seq30192__$4 = cljs.core.next.call(null,seq30192__$3);
var G__30197 = cljs.core.first.call(null,seq30192__$4);
var seq30192__$5 = cljs.core.next.call(null,seq30192__$4);
return taoensso.encore.hthrow.cljs$core$IFn$_invoke$arity$variadic(G__30193,G__30194,G__30195,G__30196,G__30197,seq30192__$5);
});
taoensso.encore.non_throwing = (function taoensso$encore$non_throwing(pred){
return (function (x){
var vec__30202 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pred.call(null,x)], null);
}catch (e30203){if((e30203 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30203;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30203;

}
}})();
var _QMARK_r = cljs.core.nth.call(null,vec__30202,(0),null);
var _ = cljs.core.nth.call(null,vec__30202,(1),null);
return _QMARK_r;
});
});
/**
 * Implementation detail.
 */
taoensso.encore.hpred = (function taoensso$encore$hpred(pred_form){
if(!(cljs.core.vector_QMARK_.call(null,pred_form))){
return pred_form;
} else {
var vec__30209 = pred_form;
var type = cljs.core.nth.call(null,vec__30209,(0),null);
var p1 = cljs.core.nth.call(null,vec__30209,(1),null);
var p2 = cljs.core.nth.call(null,vec__30209,(2),null);
var more = cljs.core.nthnext.call(null,vec__30209,(3));
var G__30210 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30210) {
case "el":
return ((function (G__30210,vec__30209,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__30210,vec__30209,type,p1,p2,more))

break;
case "ks-nnil?":
return ((function (G__30210,vec__30209,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_nnil_QMARK_.call(null,p1,x);
});
;})(G__30210,vec__30209,type,p1,p2,more))

break;
case "ks<=":
return ((function (G__30210,vec__30209,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_LT__EQ_.call(null,p1,x);
});
;})(G__30210,vec__30209,type,p1,p2,more))

break;
case "or":
return ((function (G__30210,vec__30209,type,p1,p2,more){
return (function (x){
var or__23410__auto__ = (cljs.core.truth_(p1)?taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p1)).call(null,x):null);
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (cljs.core.truth_(p2)?taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p2)).call(null,x):null);
if(cljs.core.truth_(or__23410__auto____$1)){
return or__23410__auto____$1;
} else {
return cljs.core.some.call(null,((function (or__23410__auto____$1,or__23410__auto__,G__30210,vec__30209,type,p1,p2,more){
return (function (p1__30205_SHARP_){
return taoensso.encore.non_throwing.call(null,taoensso$encore$hpred.call(null,p1__30205_SHARP_)).call(null,x);
});})(or__23410__auto____$1,or__23410__auto__,G__30210,vec__30209,type,p1,p2,more))
,more);
}
}
});
;})(G__30210,vec__30209,type,p1,p2,more))

break;
case "not":
return ((function (G__30210,vec__30209,type,p1,p2,more){
return (function (x){
var and__23398__auto__ = ((cljs.core.not.call(null,p1))?true:cljs.core.not.call(null,taoensso$encore$hpred.call(null,p1).call(null,x)));
if(and__23398__auto__){
var and__23398__auto____$1 = ((cljs.core.not.call(null,p2))?true:cljs.core.not.call(null,taoensso$encore$hpred.call(null,p2).call(null,x)));
if(and__23398__auto____$1){
return cljs.core.every_QMARK_.call(null,((function (and__23398__auto____$1,and__23398__auto__,G__30210,vec__30209,type,p1,p2,more){
return (function (p1__30204_SHARP_){
return cljs.core.not.call(null,taoensso$encore$hpred.call(null,p1__30204_SHARP_).call(null,x));
});})(and__23398__auto____$1,and__23398__auto__,G__30210,vec__30209,type,p1,p2,more))
,more);
} else {
return and__23398__auto____$1;
}
} else {
return and__23398__auto__;
}
});
;})(G__30210,vec__30209,type,p1,p2,more))

break;
case "ks=":
return ((function (G__30210,vec__30209,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_EQ_.call(null,p1,x);
});
;})(G__30210,vec__30209,type,p1,p2,more))

break;
case "and":
return ((function (G__30210,vec__30209,type,p1,p2,more){
return (function (x){
var and__23398__auto__ = ((cljs.core.not.call(null,p1))?true:taoensso$encore$hpred.call(null,p1).call(null,x));
if(cljs.core.truth_(and__23398__auto__)){
var and__23398__auto____$1 = ((cljs.core.not.call(null,p2))?true:taoensso$encore$hpred.call(null,p2).call(null,x));
if(cljs.core.truth_(and__23398__auto____$1)){
return cljs.core.every_QMARK_.call(null,((function (and__23398__auto____$1,and__23398__auto__,G__30210,vec__30209,type,p1,p2,more){
return (function (p1__30206_SHARP_){
return taoensso$encore$hpred.call(null,p1__30206_SHARP_).call(null,x);
});})(and__23398__auto____$1,and__23398__auto__,G__30210,vec__30209,type,p1,p2,more))
,more);
} else {
return and__23398__auto____$1;
}
} else {
return and__23398__auto__;
}
});
;})(G__30210,vec__30209,type,p1,p2,more))

break;
case "ks>=":
return ((function (G__30210,vec__30209,type,p1,p2,more){
return (function (x){
return taoensso.encore.ks_GT__EQ_.call(null,p1,x);
});
;})(G__30210,vec__30209,type,p1,p2,more))

break;
case "not-in":
return ((function (G__30210,vec__30209,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__30210,vec__30209,type,p1,p2,more))

break;
case "not-el":
return ((function (G__30210,vec__30209,type,p1,p2,more){
return (function (x){
return !(cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x));
});
;})(G__30210,vec__30209,type,p1,p2,more))

break;
case "in":
return ((function (G__30210,vec__30209,type,p1,p2,more){
return (function (x){
return cljs.core.contains_QMARK_.call(null,taoensso.encore.set_STAR_.call(null,p1),x);
});
;})(G__30210,vec__30209,type,p1,p2,more))

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
}
});
/**
 * Like `name` but includes namespace in string when present.
 */
taoensso.encore.fq_name = (function taoensso$encore$fq_name(x){
if(typeof x === 'string'){
return x;
} else {
var n = cljs.core.name.call(null,x);
var temp__4421__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(temp__4421__auto__)){
var ns = temp__4421__auto__;
return [cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(n)].join('');
} else {
return n;
}
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.call(null,taoensso.encore.fq_name.call(null,k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__30214){
var vec__30215 = p__30214;
var as_ns_QMARK_ = cljs.core.nth.call(null,vec__30215,(0),null);
var parts = cljs.core.reduce.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY,cljs.core.mapv.call(null,taoensso.encore.explode_keyword,cljs.core.filterv.call(null,cljs.core.identity,ks)));
if(cljs.core.empty_QMARK_.call(null,parts)){
return null;
} else {
if(cljs.core.truth_(as_ns_QMARK_)){
return cljs.core.keyword.call(null,clojure.string.join.call(null,".",parts));
} else {
var ppop = cljs.core.pop.call(null,parts);
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,ppop))?null:clojure.string.join.call(null,".",ppop)),cljs.core.peek.call(null,parts));
}
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_keywords.cljs$lang$applyTo = (function (seq30212){
var G__30213 = cljs.core.first.call(null,seq30212);
var seq30212__$1 = cljs.core.next.call(null,seq30212);
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$variadic(G__30213,seq30212__$1);
});
taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round = (function taoensso$encore$round(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__30218){
var vec__30219 = p__30218;
var type = cljs.core.nth.call(null,vec__30219,(0),null);
var nplaces = cljs.core.nth.call(null,vec__30219,(1),null);
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = ((cljs.core.not.call(null,modifier))?n__$1:(n__$1 * modifier));
var rounded = (function (){var G__30220 = ((((function (){var or__23410__auto__ = type;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})() instanceof cljs.core.Keyword))?(function (){var or__23410__auto__ = type;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})().fqn:null);
switch (G__30220) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$.call(null,n_STAR_);

break;
default:
throw cljs.core.ex_info.call(null,"Unknown round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
})();
if(cljs.core.not.call(null,modifier)){
return cljs.core.long$.call(null,rounded);
} else {
return (rounded / modifier);
}
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq30216){
var G__30217 = cljs.core.first.call(null,seq30216);
var seq30216__$1 = cljs.core.next.call(null,seq30216);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__30217,seq30216__$1);
});
taoensso.encore.round_STAR_ = taoensso.encore.round;
/**
 * Optimized common case.
 */
taoensso.encore.round1 = (function taoensso$encore$round1(n){
return (Math.round((n * 10.0)) / 10.0);
});
/**
 * Optimized common case.
 */
taoensso.encore.round2 = (function taoensso$encore$round2(n){
return (Math.round((n * 100.0)) / 100.0);
});
/**
 * Returns binary exponential backoff value.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic = (function (nattempt,p__30224){
var vec__30225 = p__30224;
var map__30226 = cljs.core.nth.call(null,vec__30225,(0),null);
var map__30226__$1 = ((cljs.core.seq_QMARK_.call(null,map__30226))?cljs.core.apply.call(null,cljs.core.hash_map,map__30226):map__30226);
var min_SINGLEQUOTE_ = cljs.core.get.call(null,map__30226__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max_SINGLEQUOTE_ = cljs.core.get.call(null,map__30226__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.call(null,map__30226__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var binary_exp = Math.pow((2),(nattempt - (1)));
var time = (((binary_exp + cljs.core.rand.call(null,binary_exp)) * 0.5) * factor);
return cljs.core.long$.call(null,(function (){var time__$1 = (cljs.core.truth_(min_SINGLEQUOTE_)?(function (){var x__23722__auto__ = min_SINGLEQUOTE_;
var y__23723__auto__ = time;
return ((x__23722__auto__ > y__23723__auto__) ? x__23722__auto__ : y__23723__auto__);
})():time);
var time__$2 = (cljs.core.truth_(max_SINGLEQUOTE_)?(function (){var x__23729__auto__ = max_SINGLEQUOTE_;
var y__23730__auto__ = time__$1;
return ((x__23729__auto__ < y__23730__auto__) ? x__23729__auto__ : y__23730__auto__);
})():time__$1);
return time__$2;
})());
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = (1);

taoensso.encore.exp_backoff.cljs$lang$applyTo = (function (seq30222){
var G__30223 = cljs.core.first.call(null,seq30222);
var seq30222__$1 = cljs.core.next.call(null,seq30222);
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$variadic(G__30223,seq30222__$1);
});
taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});
taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});
/**
 * Useful for testing.
 */
taoensso.encore.now_udt_mock_fn = (function taoensso$encore$now_udt_mock_fn(){
var argseq__24450__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__24450__auto__);
});

taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic = (function (p__30228){
var vec__30229 = p__30228;
var mock_udts = cljs.core.nth.call(null,vec__30229,(0),null);
var mock_udts__$1 = (function (){var or__23410__auto__ = mock_udts;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return cljs.core.range.call(null);
}
})();
var idx = cljs.core.atom.call(null,(-1));
return ((function (mock_udts__$1,idx,vec__30229,mock_udts){
return (function (){
return cljs.core.nth.call(null,mock_udts__$1,cljs.core.swap_BANG_.call(null,idx,cljs.core.inc));
});
;})(mock_udts__$1,idx,vec__30229,mock_udts))
});

taoensso.encore.now_udt_mock_fn.cljs$lang$maxFixedArity = (0);

taoensso.encore.now_udt_mock_fn.cljs$lang$applyTo = (function (seq30227){
return taoensso.encore.now_udt_mock_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30227));
});
taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (secs * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot.call(null,ms,(1000));
});
/**
 * Returns number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(){
var argseq__24450__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__24450__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__30231){
var map__30232 = p__30231;
var map__30232__$1 = ((cljs.core.seq_QMARK_.call(null,map__30232))?cljs.core.apply.call(null,cljs.core.hash_map,map__30232):map__30232);
var opts = map__30232__$1;
var years = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.call(null,map__30232__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
if(cljs.core.truth_(cljs.core.mapv.call(null,((function (map__30232,map__30232__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (hcond_in__30233){
var vec__30234 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hcond_in__30233], null);
}catch (e30236){if((e30236 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30236;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30236;

}
}})();
var x__8955__auto__ = cljs.core.nth.call(null,vec__30234,(0),null);
var _QMARK_x_err__8956__auto__ = cljs.core.nth.call(null,vec__30234,(1),null);
var have_x_QMARK___8957__auto__ = (_QMARK_x_err__8956__auto__ == null);
var vec__30235 = ((have_x_QMARK___8957__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null)).call(null,x__8955__auto__)], null);
}catch (e30237){if((e30237 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30237;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30237;

}
}})():null);
var pass_QMARK___8958__auto__ = cljs.core.nth.call(null,vec__30235,(0),null);
var _QMARK_pred_err__8959__auto__ = cljs.core.nth.call(null,vec__30235,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto__)){
return x__8955__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hcond-in__30233","hcond-in__30233",-256970224,null)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null)),((have_x_QMARK___8957__auto__)?x__8955__auto__:_QMARK_x_err__8956__auto__),_QMARK_pred_err__8959__auto__);
}
});})(map__30232,map__30232__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys.call(null,opts)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have","have",574419306,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null),new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)))))].join('')));
}

return taoensso.encore.round.call(null,(((((((((cljs.core.truth_(years)?(((((years * (1000)) * (60)) * (60)) * (24)) * (365)):(0)) + (cljs.core.truth_(months)?cljs.core.long$.call(null,(((((months * (1000)) * (60)) * (60)) * (24)) * 29.53)):(0))) + (cljs.core.truth_(weeks)?(((((weeks * (1000)) * (60)) * (60)) * (24)) * (7)):(0))) + (cljs.core.truth_(days)?((((days * (1000)) * (60)) * (60)) * (24)):(0))) + (cljs.core.truth_(hours)?(((hours * (1000)) * (60)) * (60)):(0))) + (cljs.core.truth_(mins)?((mins * (1000)) * (60)):(0))) + (cljs.core.truth_(secs)?(secs * (1000)):(0))) + (cljs.core.truth_(msecs)?msecs:(0))) + (cljs.core.truth_(ms)?ms:(0))));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq30230){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30230));
});
taoensso.encore.secs = cljs.core.comp.call(null,taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__23729__auto__ = signed_idx;
var y__23730__auto__ = max_idx;
return ((x__23729__auto__ < y__23730__auto__) ? x__23729__auto__ : y__23730__auto__);
} else {
var x__23722__auto__ = (0);
var y__23723__auto__ = (signed_idx + max_idx);
return ((x__23722__auto__ > y__23723__auto__) ? x__23722__auto__ : y__23723__auto__);
}
});
/**
 * Returns [<inclusive-start-idx*> <exclusive-end-idx*>] for counted 0-indexed
 * input (str, vec, etc.) with support for:
 * * Clamping of indexes beyond limits.
 * * Max-length -> end-index.
 * * -ive indexes (as +ive indexes but work from back of input):
 * (+0) (+1) (+2) (+3) (+4)  ; inclusive +ive indexes
 * h    e    l    l    o   ; 5 count
 * (-5) (-4) (-3) (-2) (-1)  ; inclusive -ive indexes
 */
taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(){
var argseq__24450__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24450__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__30245){
var map__30246 = p__30245;
var map__30246__$1 = ((cljs.core.seq_QMARK_.call(null,map__30246))?cljs.core.apply.call(null,cljs.core.hash_map,map__30246):map__30246);
var max_len = cljs.core.get.call(null,map__30246__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.call(null,map__30246__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
if((function (){
var vec__30247_30251 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [max_len], null);
}catch (e30249){if((e30249 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30249;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30249;

}
}})();
var x__8955__auto___30252 = cljs.core.nth.call(null,vec__30247_30251,(0),null);
var _QMARK_x_err__8956__auto___30253 = cljs.core.nth.call(null,vec__30247_30251,(1),null);
var have_x_QMARK___8957__auto___30254 = (_QMARK_x_err__8956__auto___30253 == null);
var vec__30248_30255 = ((have_x_QMARK___8957__auto___30254)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,x__8955__auto___30252)], null);
}catch (e30250){if((e30250 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30250;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30250;

}
}})():null);
var pass_QMARK___8958__auto___30256 = cljs.core.nth.call(null,vec__30248_30255,(0),null);
var _QMARK_pred_err__8959__auto___30257 = cljs.core.nth.call(null,vec__30248_30255,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___30256)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"max-len","max-len",1621685511,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null)),((have_x_QMARK___8957__auto___30254)?x__8955__auto___30252:_QMARK_x_err__8956__auto___30253),_QMARK_pred_err__8959__auto___30257);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"max-len","max-len",1621685511,null))))].join('')));
}

var start_idx__$1 = start_idx;
var xlen = cljs.core.count.call(null,x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx.call(null,start_idx__$1,xlen);
var end_idx_STAR_ = (cljs.core.truth_(max_len)?(function (){var n1__9017__auto__ = (start_idx_STAR_ + max_len);
var n2__9018__auto__ = xlen;
if((n1__9017__auto__ > n2__9018__auto__)){
return n2__9018__auto__;
} else {
return n1__9017__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx.call(null,end_idx,xlen) + (1)):xlen
));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq30242){
var G__30243 = cljs.core.first.call(null,seq30242);
var seq30242__$1 = cljs.core.next.call(null,seq30242);
var G__30244 = cljs.core.first.call(null,seq30242__$1);
var seq30242__$2 = cljs.core.next.call(null,seq30242__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__30243,G__30244,seq30242__$2);
});
/**
 * Like `subvec` but uses `sub-indexes`.
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(){
var argseq__24450__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24450__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__30261){
var vec__30262 = p__30261;
var _QMARK_max_len = cljs.core.nth.call(null,vec__30262,(0),null);
if((function (){
var vec__30263_30268 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}catch (e30265){if((e30265 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30265;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30265;

}
}})();
var x__8955__auto___30269 = cljs.core.nth.call(null,vec__30263_30268,(0),null);
var _QMARK_x_err__8956__auto___30270 = cljs.core.nth.call(null,vec__30263_30268,(1),null);
var have_x_QMARK___8957__auto___30271 = (_QMARK_x_err__8956__auto___30270 == null);
var vec__30264_30272 = ((have_x_QMARK___8957__auto___30271)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.vector_QMARK_).call(null,x__8955__auto___30269)], null);
}catch (e30266){if((e30266 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30266;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30266;

}
}})():null);
var pass_QMARK___8958__auto___30273 = cljs.core.nth.call(null,vec__30264_30272,(0),null);
var _QMARK_pred_err__8959__auto___30274 = cljs.core.nth.call(null,vec__30264_30272,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___30273)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"v","v",1661996586,null)),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null)),((have_x_QMARK___8957__auto___30271)?x__8955__auto___30269:_QMARK_x_err__8956__auto___30270),_QMARK_pred_err__8959__auto___30274);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var vec__30267 = taoensso.encore.sub_indexes.call(null,v,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__30267,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__30267,(1),null);
return cljs.core.subvec.call(null,v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq30258){
var G__30259 = cljs.core.first.call(null,seq30258);
var seq30258__$1 = cljs.core.next.call(null,seq30258);
var G__30260 = cljs.core.first.call(null,seq30258__$1);
var seq30258__$2 = cljs.core.next.call(null,seq30258__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30259,G__30260,seq30258__$2);
});

/**
* @constructor
* @param {*} new_val
* @param {*} return_val
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
taoensso.encore.Swapped = (function (new_val,return_val,__meta,__extmap,__hash){
this.new_val = new_val;
this.return_val = return_val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__24005__auto__,k__24006__auto__){
var self__ = this;
var this__24005__auto____$1 = this;
return cljs.core._lookup.call(null,this__24005__auto____$1,k__24006__auto__,null);
});

taoensso.encore.Swapped.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__24007__auto__,k30276,else__24008__auto__){
var self__ = this;
var this__24007__auto____$1 = this;
var G__30278 = (((k30276 instanceof cljs.core.Keyword))?k30276.fqn:null);
switch (G__30278) {
case "new-val":
return self__.new_val;

break;
case "return-val":
return self__.return_val;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k30276,else__24008__auto__);

}
});

taoensso.encore.Swapped.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__24019__auto__,writer__24020__auto__,opts__24021__auto__){
var self__ = this;
var this__24019__auto____$1 = this;
var pr_pair__24022__auto__ = ((function (this__24019__auto____$1){
return (function (keyval__24023__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__24020__auto__,cljs.core.pr_writer,""," ","",opts__24021__auto__,keyval__24023__auto__);
});})(this__24019__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__24020__auto__,pr_pair__24022__auto__,"#taoensso.encore.Swapped{",", ","}",opts__24021__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__24003__auto__){
var self__ = this;
var this__24003__auto____$1 = this;
return self__.__meta;
});

taoensso.encore.Swapped.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__23999__auto__){
var self__ = this;
var this__23999__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__24009__auto__){
var self__ = this;
var this__24009__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__24000__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__24001__auto__,other__24002__auto__){
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

taoensso.encore.Swapped.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__24014__auto__,k__24015__auto__){
var self__ = this;
var this__24014__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return-val","return-val",-512772489),null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),null], null), null),k__24015__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__24014__auto____$1),self__.__meta),k__24015__auto__);
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__24015__auto__)),null));
}
});

taoensso.encore.Swapped.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__24012__auto__,k__24013__auto__,G__30275){
var self__ = this;
var this__24012__auto____$1 = this;
var pred__30279 = cljs.core.keyword_identical_QMARK_;
var expr__30280 = k__24013__auto__;
if(cljs.core.truth_(pred__30279.call(null,new cljs.core.Keyword(null,"new-val","new-val",-738158599),expr__30280))){
return (new taoensso.encore.Swapped(G__30275,self__.return_val,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__30279.call(null,new cljs.core.Keyword(null,"return-val","return-val",-512772489),expr__30280))){
return (new taoensso.encore.Swapped(self__.new_val,G__30275,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__24013__auto__,G__30275),null));
}
}
});

taoensso.encore.Swapped.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__24017__auto__){
var self__ = this;
var this__24017__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"new-val","new-val",-738158599),self__.new_val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"return-val","return-val",-512772489),self__.return_val],null))], null),self__.__extmap));
});

taoensso.encore.Swapped.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__24004__auto__,G__30275){
var self__ = this;
var this__24004__auto____$1 = this;
return (new taoensso.encore.Swapped(self__.new_val,self__.return_val,G__30275,self__.__extmap,self__.__hash));
});

taoensso.encore.Swapped.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__24010__auto__,entry__24011__auto__){
var self__ = this;
var this__24010__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__24011__auto__)){
return cljs.core._assoc.call(null,this__24010__auto____$1,cljs.core._nth.call(null,entry__24011__auto__,(0)),cljs.core._nth.call(null,entry__24011__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__24010__auto____$1,entry__24011__auto__);
}
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-val","new-val",902372928,null),new cljs.core.Symbol(null,"return-val","return-val",1127759038,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorPrSeq = (function (this__24039__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"taoensso.encore/Swapped");
});

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__24039__auto__,writer__24040__auto__){
return cljs.core._write.call(null,writer__24040__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});

taoensso.encore.map__GT_Swapped = (function taoensso$encore$map__GT_Swapped(G__30277){
return (new taoensso.encore.Swapped(new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(G__30277),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(G__30277),null,cljs.core.dissoc.call(null,G__30277,new cljs.core.Keyword(null,"new-val","new-val",-738158599),new cljs.core.Keyword(null,"return-val","return-val",-512772489)),null));
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val,null,null,null));
});
taoensso.encore.swapped_STAR_ = (function taoensso$encore$swapped_STAR_(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-val","new-val",-738158599).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"return-val","return-val",-512772489).cljs$core$IFn$_invoke$arity$1(x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});
/**
 * [<new-val> <return-val>]
 */
taoensso.encore.swapped_STAR__in = (function taoensso$encore$swapped_STAR__in(m,ks,f){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,f,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))){
return taoensso.encore.swapped_STAR_.call(null,taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)));
} else {
var old_val_in = cljs.core.get_in.call(null,m,ks);
var vec__30284 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val_in));
var new_val_in = cljs.core.nth.call(null,vec__30284,(0),null);
var return_val = cljs.core.nth.call(null,vec__30284,(1),null);
var new_val = (cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,new_val_in,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782)))?taoensso.encore.dissoc_in.call(null,m,cljs.core.butlast.call(null,ks),cljs.core.last.call(null,ks)):cljs.core.assoc_in.call(null,m,ks,new_val_in));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_val,return_val], null);
}
});
/**
 * Reduces input with
 * [<type> <ks> <reset-val-or-swap-fn>] or
 * [<ks> <reset-val-or-swap-fn>] ops.
 */
taoensso.encore.replace_in_STAR_ = (function taoensso$encore$replace_in_STAR_(_QMARK_vf_type,m,ops){
return cljs.core.reduce.call(null,(function (accum,_QMARK_op){
if(cljs.core.not.call(null,_QMARK_op)){
return accum;
} else {
var vec__30287 = ((cljs.core.not.call(null,_QMARK_vf_type))?_QMARK_op:cljs.core.cons.call(null,_QMARK_vf_type,_QMARK_op));
var vf_type = cljs.core.nth.call(null,vec__30287,(0),null);
var ks = cljs.core.nth.call(null,vec__30287,(1),null);
var valf = cljs.core.nth.call(null,vec__30287,(2),null);
var G__30288 = (((vf_type instanceof cljs.core.Keyword))?vf_type.fqn:null);
switch (G__30288) {
case "reset":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf;
} else {
return cljs.core.assoc_in.call(null,accum,ks,valf);
}

break;
case "swap":
if(cljs.core.empty_QMARK_.call(null,ks)){
return valf.call(null,accum);
} else {
return cljs.core.nth.call(null,taoensso.encore.swapped_STAR__in.call(null,accum,ks,valf),(0));
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(vf_type)].join('')));

}
}
}),m,ops);
});
/**
 * Experimental. For use with `swap!`, etc.
 */
taoensso.encore.replace_in = (function taoensso$encore$replace_in(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return taoensso.encore.replace_in_STAR_.call(null,null,m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq30290){
var G__30291 = cljs.core.first.call(null,seq30290);
var seq30290__$1 = cljs.core.next.call(null,seq30290);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__30291,seq30290__$1);
});
/**
 * More powerful version of `swap!`:
 * * Supports optional `update-in` semantics.
 * * Swap fn can return `(swapped <new-val> <return-val>)` rather than just
 * <new-val>. This is useful when writing atomic pull fns, etc.
 */
taoensso.encore.swap_in_BANG_ = (function taoensso$encore$swap_in_BANG_(){
var G__30297 = arguments.length;
switch (G__30297) {
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__24461__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0)));
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__24461__auto__);

}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,f){
if(cljs.core.empty_QMARK_.call(null,ks)){
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__30298 = taoensso.encore.swapped_STAR_.call(null,f.call(null,old_val));
var new_val = cljs.core.nth.call(null,vec__30298,(0),null);
var return_val = cljs.core.nth.call(null,vec__30298,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
} else {
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var vec__30299 = taoensso.encore.swapped_STAR__in.call(null,old_val,ks,f);
var new_val = cljs.core.nth.call(null,vec__30299,(0),null);
var return_val = cljs.core.nth.call(null,vec__30299,(1),null);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return return_val;
}
break;
}
}
});

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,f,more){
if((function (){
var vec__30300_30305 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,more)], null);
}catch (e30302){if((e30302 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30302;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30302;

}
}})();
var x__8955__auto___30306 = cljs.core.nth.call(null,vec__30300_30305,(0),null);
var _QMARK_x_err__8956__auto___30307 = cljs.core.nth.call(null,vec__30300_30305,(1),null);
var have_x_QMARK___8957__auto___30308 = (_QMARK_x_err__8956__auto___30307 == null);
var vec__30301_30309 = ((have_x_QMARK___8957__auto___30308)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__8955__auto___30306)], null);
}catch (e30303){if((e30303 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30303;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30303;

}
}})():null);
var pass_QMARK___8958__auto___30310 = cljs.core.nth.call(null,vec__30301_30309,(0),null);
var _QMARK_pred_err__8959__auto___30311 = cljs.core.nth.call(null,vec__30301_30309,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___30310)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___8957__auto___30308)?x__8955__auto___30306:_QMARK_x_err__8956__auto___30307),_QMARK_pred_err__8959__auto___30311);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,f], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"swap","swap",228675637),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val], null);
}
break;
}
});

taoensso.encore.swap_in_BANG_.cljs$lang$applyTo = (function (seq30292){
var G__30293 = cljs.core.first.call(null,seq30292);
var seq30292__$1 = cljs.core.next.call(null,seq30292);
var G__30294 = cljs.core.first.call(null,seq30292__$1);
var seq30292__$2 = cljs.core.next.call(null,seq30292__$1);
var G__30295 = cljs.core.first.call(null,seq30292__$2);
var seq30292__$3 = cljs.core.next.call(null,seq30292__$2);
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30293,G__30294,G__30295,seq30292__$3);
});

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Is to `reset!` as `swap-in!` is to `swap!`.
 */
taoensso.encore.reset_in_BANG_ = (function taoensso$encore$reset_in_BANG_(){
var G__30317 = arguments.length;
switch (G__30317) {
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__24461__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0)));
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__24461__auto__);

}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,ks,new_val){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.reset_BANG_.call(null,atom_,new_val);
} else {
return cljs.core.swap_BANG_.call(null,atom_,(function (old_val){
return cljs.core.assoc_in.call(null,old_val,ks,new_val);
}));
}
});

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom_,ks,new_val,more){
if((function (){
var vec__30318_30323 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,more)], null);
}catch (e30320){if((e30320 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30320;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30320;

}
}})();
var x__8955__auto___30324 = cljs.core.nth.call(null,vec__30318_30323,(0),null);
var _QMARK_x_err__8956__auto___30325 = cljs.core.nth.call(null,vec__30318_30323,(1),null);
var have_x_QMARK___8957__auto___30326 = (_QMARK_x_err__8956__auto___30325 == null);
var vec__30319_30327 = ((have_x_QMARK___8957__auto___30326)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__8955__auto___30324)], null);
}catch (e30321){if((e30321 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30321;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30321;

}
}})():null);
var pass_QMARK___8958__auto___30328 = cljs.core.nth.call(null,vec__30319_30327,(0),null);
var _QMARK_pred_err__8959__auto___30329 = cljs.core.nth.call(null,vec__30319_30327,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___30328)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___8957__auto___30326)?x__8955__auto___30324:_QMARK_x_err__8956__auto___30325),_QMARK_pred_err__8959__auto___30329);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"more","more",-418290273,null)))))].join('')));
}

var pairs = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ks,new_val], null)], null),cljs.core.partition.call(null,(2),more));
while(true){
var old_val = cljs.core.deref.call(null,atom_);
var new_val__$1 = taoensso.encore.replace_in_STAR_.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),old_val,pairs);
if(cljs.core.not.call(null,cljs.core.compare_and_set_BANG_.call(null,atom_,old_val,new_val__$1))){
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old_val,new cljs.core.Keyword(null,"new","new",-2085437848),new_val__$1], null);
}
break;
}
});

taoensso.encore.reset_in_BANG_.cljs$lang$applyTo = (function (seq30312){
var G__30313 = cljs.core.first.call(null,seq30312);
var seq30312__$1 = cljs.core.next.call(null,seq30312);
var G__30314 = cljs.core.first.call(null,seq30312__$1);
var seq30312__$2 = cljs.core.next.call(null,seq30312__$1);
var G__30315 = cljs.core.first.call(null,seq30312__$2);
var seq30312__$3 = cljs.core.next.call(null,seq30312__$2);
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30313,G__30314,G__30315,seq30312__$3);
});

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = (3);
taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(){
var argseq__24450__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24450__auto__);
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_ks){
if(cljs.core.empty_QMARK_.call(null,ks)){
return cljs.core.apply.call(null,cljs.core.dissoc,m,dissoc_ks);
} else {
return cljs.core.apply.call(null,cljs.core.update_in,m,ks,cljs.core.dissoc,dissoc_ks);
}
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (2);

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq30330){
var G__30331 = cljs.core.first.call(null,seq30330);
var seq30330__$1 = cljs.core.next.call(null,seq30330);
var G__30332 = cljs.core.first.call(null,seq30330__$1);
var seq30330__$2 = cljs.core.next.call(null,seq30330__$1);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__30331,G__30332,seq30330__$2);
});
taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(coll,ks){
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,coll,cljs.core.butlast.call(null,ks)),cljs.core.last.call(null,ks));
});
/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if((function (){
var vec__30335_30347 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,kvs)], null);
}catch (e30337){if((e30337 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30337;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30337;

}
}})();
var x__8955__auto___30348 = cljs.core.nth.call(null,vec__30335_30347,(0),null);
var _QMARK_x_err__8956__auto___30349 = cljs.core.nth.call(null,vec__30335_30347,(1),null);
var have_x_QMARK___8957__auto___30350 = (_QMARK_x_err__8956__auto___30349 == null);
var vec__30336_30351 = ((have_x_QMARK___8957__auto___30350)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__8955__auto___30348)], null);
}catch (e30338){if((e30338 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30338;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30338;

}
}})():null);
var pass_QMARK___8958__auto___30352 = cljs.core.nth.call(null,vec__30336_30351,(0),null);
var _QMARK_pred_err__8959__auto___30353 = cljs.core.nth.call(null,vec__30336_30351,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___30352)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___8957__auto___30350)?x__8955__auto___30348:_QMARK_x_err__8956__auto___30349),_QMARK_pred_err__8959__auto___30353);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__23410__auto__ = m;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__24164__auto__ = (function taoensso$encore$iter__30339(s__30340){
return (new cljs.core.LazySeq(null,(function (){
var s__30340__$1 = s__30340;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__30340__$1);
if(temp__4423__auto__){
var s__30340__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30340__$2)){
var c__24162__auto__ = cljs.core.chunk_first.call(null,s__30340__$2);
var size__24163__auto__ = cljs.core.count.call(null,c__24162__auto__);
var b__30342 = cljs.core.chunk_buffer.call(null,size__24163__auto__);
if((function (){var i__30341 = (0);
while(true){
if((i__30341 < size__24163__auto__)){
var vec__30345 = cljs.core._nth.call(null,c__24162__auto__,i__30341);
var k = cljs.core.nth.call(null,vec__30345,(0),null);
var v = cljs.core.nth.call(null,vec__30345,(1),null);
if(!((v == null))){
cljs.core.chunk_append.call(null,b__30342,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__30354 = (i__30341 + (1));
i__30341 = G__30354;
continue;
} else {
var G__30355 = (i__30341 + (1));
i__30341 = G__30355;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30342),taoensso$encore$iter__30339.call(null,cljs.core.chunk_rest.call(null,s__30340__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30342),null);
}
} else {
var vec__30346 = cljs.core.first.call(null,s__30340__$2);
var k = cljs.core.nth.call(null,vec__30346,(0),null);
var v = cljs.core.nth.call(null,vec__30346,(1),null);
if(!((v == null))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__30339.call(null,cljs.core.rest.call(null,s__30340__$2)));
} else {
var G__30356 = cljs.core.rest.call(null,s__30340__$2);
s__30340__$1 = G__30356;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24164__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq30333){
var G__30334 = cljs.core.first.call(null,seq30333);
var seq30333__$1 = cljs.core.next.call(null,seq30333);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__30334,seq30333__$1);
});
/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if((function (){
var vec__30359_30371 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,kvs)], null);
}catch (e30361){if((e30361 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30361;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30361;

}
}})();
var x__8955__auto___30372 = cljs.core.nth.call(null,vec__30359_30371,(0),null);
var _QMARK_x_err__8956__auto___30373 = cljs.core.nth.call(null,vec__30359_30371,(1),null);
var have_x_QMARK___8957__auto___30374 = (_QMARK_x_err__8956__auto___30373 == null);
var vec__30360_30375 = ((have_x_QMARK___8957__auto___30374)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.even_QMARK_).call(null,x__8955__auto___30372)], null);
}catch (e30362){if((e30362 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30362;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30362;

}
}})():null);
var pass_QMARK___8958__auto___30376 = cljs.core.nth.call(null,vec__30360_30375,(0),null);
var _QMARK_pred_err__8959__auto___30377 = cljs.core.nth.call(null,vec__30360_30375,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___30376)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))),new cljs.core.Symbol(null,"even?","even?",-1827825394,null)),((have_x_QMARK___8957__auto___30374)?x__8955__auto___30372:_QMARK_x_err__8956__auto___30373),_QMARK_pred_err__8959__auto___30377);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__23410__auto__ = m;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__24164__auto__ = (function taoensso$encore$iter__30363(s__30364){
return (new cljs.core.LazySeq(null,(function (){
var s__30364__$1 = s__30364;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__30364__$1);
if(temp__4423__auto__){
var s__30364__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30364__$2)){
var c__24162__auto__ = cljs.core.chunk_first.call(null,s__30364__$2);
var size__24163__auto__ = cljs.core.count.call(null,c__24162__auto__);
var b__30366 = cljs.core.chunk_buffer.call(null,size__24163__auto__);
if((function (){var i__30365 = (0);
while(true){
if((i__30365 < size__24163__auto__)){
var vec__30369 = cljs.core._nth.call(null,c__24162__auto__,i__30365);
var k = cljs.core.nth.call(null,vec__30369,(0),null);
var v = cljs.core.nth.call(null,vec__30369,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__30366,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__30378 = (i__30365 + (1));
i__30365 = G__30378;
continue;
} else {
var G__30379 = (i__30365 + (1));
i__30365 = G__30379;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30366),taoensso$encore$iter__30363.call(null,cljs.core.chunk_rest.call(null,s__30364__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30366),null);
}
} else {
var vec__30370 = cljs.core.first.call(null,s__30364__$2);
var k = cljs.core.nth.call(null,vec__30370,(0),null);
var v = cljs.core.nth.call(null,vec__30370,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),taoensso$encore$iter__30363.call(null,cljs.core.rest.call(null,s__30364__$2)));
} else {
var G__30380 = cljs.core.rest.call(null,s__30364__$2);
s__30364__$1 = G__30380;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__24164__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (1);

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq30357){
var G__30358 = cljs.core.first.call(null,seq30357);
var seq30357__$1 = cljs.core.next.call(null,seq30357);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__30358,seq30357__$1);
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(){
var G__30382 = arguments.length;
switch (G__30382) {
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,taoensso.encore.queue.call(null),coll);
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;
taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(){
var argseq__24450__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__24450__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.call(null,items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq30384){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30384));
});
/**
 * (seq     {:a :A}) => ([:a :A])
 * (seq-kvs {:a :A}) => (:a :A)
 */
taoensso.encore.seq_kvs = cljs.core.partial.call(null,cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but assumes last arg is a map whose elements should be applied
 * to `f` as an unpaired seq:
 * (mapply (fn [x & {:keys [y z]}] (str x y z)) 1 {:y 2 :z 3})
 * where fn will receive args as: `(1 :y 2 :z 3)`.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,f,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),taoensso.encore.seq_kvs.call(null,cljs.core.last.call(null,args))));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq30385){
var G__30386 = cljs.core.first.call(null,seq30385);
var seq30385__$1 = cljs.core.next.call(null,seq30385);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__30386,seq30385__$1);
});
/**
 * Workaround for Clojure versions [1.4, 1.5) that blow up on `reduce-kv`s
 * against a nil coll, Ref. http://dev.clojure.org/jira/browse/CLJ-1098.
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__23410__auto__ = x;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:(function (k,_){
return cljs.core.keyword.call(null,k);
}));
var vf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,vf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?vf:((function (kf__$1){
return (function (_,v){
return cljs.core.keyword.call(null,v);
});})(kf__$1))
);
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,((function (kf__$1,vf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.call(null,m__$1,(cljs.core.truth_(kf__$1)?kf__$1.call(null,k,v):k),(cljs.core.truth_(vf__$1)?vf__$1.call(null,k,v):v));
});})(kf__$1,vf__$1))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
}
});
taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
return taoensso.encore.map_kvs.call(null,(function (k,_){
return f.call(null,k);
}),null,m);
});
taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
return taoensso.encore.map_kvs.call(null,null,(function (_,v){
return f.call(null,v);
}),m);
});
taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(predk,predv,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_((function (){var and__23398__auto__ = predk.call(null,k);
if(cljs.core.truth_(and__23398__auto__)){
return predv.call(null,v);
} else {
return and__23398__auto__;
}
})())){
return m__$1;
} else {
return cljs.core.dissoc.call(null,m__$1,k);
}
}),m,m);
}
});
taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
return taoensso.encore.filter_kvs.call(null,pred,cljs.core.constantly.call(null,true),m);
});
taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
return taoensso.encore.filter_kvs.call(null,cljs.core.constantly.call(null,true),pred,m);
});
/**
 * Smaller, common-case version of `filter-vals`. Esp useful with `nil?`/`blank?`
 * pred when constructing maps: {:foo (when _ <...>) :bar (when _ <...>)} in a
 * way that preservers :or semantics.
 */
taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
if(cljs.core.not.call(null,m)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,cljs.core.keyword.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});
/**
 * Cross between `hash-map` & `map-kvs`.
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__30389){
var vec__30390 = p__30389;
var kf = cljs.core.nth.call(null,vec__30390,(0),null);
var vf = cljs.core.nth.call(null,vec__30390,(1),null);
if((function (){
var vec__30391_30411 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvs], null);
}catch (e30393){if((e30393 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30393;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30393;

}
}})();
var x__8955__auto___30412 = cljs.core.nth.call(null,vec__30391_30411,(0),null);
var _QMARK_x_err__8956__auto___30413 = cljs.core.nth.call(null,vec__30391_30411,(1),null);
var have_x_QMARK___8957__auto___30414 = (_QMARK_x_err__8956__auto___30413 == null);
var vec__30392_30415 = ((have_x_QMARK___8957__auto___30414)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.sequential_QMARK_], null)).call(null,x__8955__auto___30412)], null);
}catch (e30394){if((e30394 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30394;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30394;

}
}})():null);
var pass_QMARK___8958__auto___30416 = cljs.core.nth.call(null,vec__30392_30415,(0),null);
var _QMARK_pred_err__8959__auto___30417 = cljs.core.nth.call(null,vec__30392_30415,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___30416)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null)),((have_x_QMARK___8957__auto___30414)?x__8955__auto___30412:_QMARK_x_err__8956__auto___30413),_QMARK_pred_err__8959__auto___30417);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null)], null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))].join('')));
}

if((function (){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var vec__30395 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kf], null);
}catch (e30397){if((e30397 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30397;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30397;

}
}})();
var x__8955__auto__ = cljs.core.nth.call(null,vec__30395,(0),null);
var _QMARK_x_err__8956__auto__ = cljs.core.nth.call(null,vec__30395,(1),null);
var have_x_QMARK___8957__auto__ = (_QMARK_x_err__8956__auto__ == null);
var vec__30396 = ((have_x_QMARK___8957__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null)).call(null,x__8955__auto__)], null);
}catch (e30398){if((e30398 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30398;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30398;

}
}})():null);
var pass_QMARK___8958__auto__ = cljs.core.nth.call(null,vec__30396,(0),null);
var _QMARK_pred_err__8959__auto__ = cljs.core.nth.call(null,vec__30396,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto__)){
return x__8955__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"kf","kf",-1046348180,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null)),((have_x_QMARK___8957__auto__)?x__8955__auto__:_QMARK_x_err__8956__auto__),_QMARK_pred_err__8959__auto__);
}
})(),(function (){var vec__30399 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vf], null);
}catch (e30401){if((e30401 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30401;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30401;

}
}})();
var x__8955__auto__ = cljs.core.nth.call(null,vec__30399,(0),null);
var _QMARK_x_err__8956__auto__ = cljs.core.nth.call(null,vec__30399,(1),null);
var have_x_QMARK___8957__auto__ = (_QMARK_x_err__8956__auto__ == null);
var vec__30400 = ((have_x_QMARK___8957__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.ifn_QMARK_], null)).call(null,x__8955__auto__)], null);
}catch (e30402){if((e30402 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30402;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30402;

}
}})():null);
var pass_QMARK___8958__auto__ = cljs.core.nth.call(null,vec__30400,(0),null);
var _QMARK_pred_err__8959__auto__ = cljs.core.nth.call(null,vec__30400,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto__)){
return x__8955__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vf","vf",1319108258,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null)),((have_x_QMARK___8957__auto__)?x__8955__auto__:_QMARK_x_err__8956__auto__),_QMARK_pred_err__8959__auto__);
}
})()], null);

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null)], null),new cljs.core.Symbol(null,"kf","kf",-1046348180,null),new cljs.core.Symbol(null,"vf","vf",1319108258,null))))].join('')));
}

var _PERCENT_ = ((cljs.core.empty_QMARK_.call(null,kvs))?cljs.core.PersistentArrayMap.EMPTY:(function (){var kf__$1 = ((cljs.core.not.call(null,taoensso.encore.kw_identical_QMARK_.call(null,kf,new cljs.core.Keyword(null,"keywordize","keywordize",1381210758))))?kf:((function (vec__30390,kf,vf){
return (function (k,_){
return cljs.core.keyword.call(null,k);
});})(vec__30390,kf,vf))
);
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var G__30404 = kvs;
var vec__30405 = G__30404;
var k = cljs.core.nth.call(null,vec__30405,(0),null);
var v = cljs.core.nth.call(null,vec__30405,(1),null);
var s = vec__30405;
var m__$1 = m;
var G__30404__$1 = G__30404;
while(true){
var m__$2 = m__$1;
var vec__30406 = G__30404__$1;
var k__$1 = cljs.core.nth.call(null,vec__30406,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__30406,(1),null);
var s__$1 = vec__30406;
var k__$2 = ((cljs.core.not.call(null,kf__$1))?k__$1:kf__$1.call(null,k__$1,v__$1));
var v__$2 = ((cljs.core.not.call(null,vf))?v__$1:vf.call(null,k__$2,v__$1));
var new_m = cljs.core.assoc_BANG_.call(null,m__$2,k__$2,v__$2);
var temp__4421__auto__ = cljs.core.nnext.call(null,s__$1);
if(cljs.core.truth_(temp__4421__auto__)){
var n = temp__4421__auto__;
var G__30418 = new_m;
var G__30419 = n;
m__$1 = G__30418;
G__30404__$1 = G__30419;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,new_m);
}
break;
}
})());
if((function (){
var vec__30407_30420 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_PERCENT_], null);
}catch (e30409){if((e30409 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30409;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30409;

}
}})();
var x__8955__auto___30421 = cljs.core.nth.call(null,vec__30407_30420,(0),null);
var _QMARK_x_err__8956__auto___30422 = cljs.core.nth.call(null,vec__30407_30420,(1),null);
var have_x_QMARK___8957__auto___30423 = (_QMARK_x_err__8956__auto___30422 == null);
var vec__30408_30424 = ((have_x_QMARK___8957__auto___30423)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,x__8955__auto___30421)], null);
}catch (e30410){if((e30410 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30410;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30410;

}
}})():null);
var pass_QMARK___8958__auto___30425 = cljs.core.nth.call(null,vec__30408_30424,(0),null);
var _QMARK_pred_err__8959__auto___30426 = cljs.core.nth.call(null,vec__30408_30424,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___30425)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null)),((have_x_QMARK___8957__auto___30423)?x__8955__auto___30421:_QMARK_x_err__8956__auto___30422),_QMARK_pred_err__8959__auto___30426);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq30387){
var G__30388 = cljs.core.first.call(null,seq30387);
var seq30387__$1 = cljs.core.next.call(null,seq30387);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__30388,seq30387__$1);
});
/**
 * Faster `zipmap`.
 */
taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq.call(null,ks);
var vs__$1 = cljs.core.seq.call(null,vs);
while(true){
if(!((ks__$1) && (vs__$1))){
return cljs.core.persistent_BANG_.call(null,m);
} else {
var G__30427 = cljs.core.assoc_BANG_.call(null,m,cljs.core.first.call(null,ks__$1),cljs.core.first.call(null,vs__$1));
var G__30428 = cljs.core.next.call(null,ks__$1);
var G__30429 = cljs.core.next.call(null,vs__$1);
m = G__30427;
ks__$1 = G__30428;
vs__$1 = G__30429;
continue;
}
break;
}
});
/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(){
var G__30434 = arguments.length;
switch (G__30434) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__24461__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24461__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.call(null,to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.into.call(null,to,from),more);
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq30430){
var G__30431 = cljs.core.first.call(null,seq30430);
var seq30430__$1 = cljs.core.next.call(null,seq30430);
var G__30432 = cljs.core.first.call(null,seq30430__$1);
var seq30430__$2 = cljs.core.next.call(null,seq30430__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__30431,G__30432,seq30430__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);
/**
 * Greedy version of `interleave`.
 * Ref. https://groups.google.com/d/msg/clojure/o4Hg0s_1Avs/rPn3P4Ig6MsJ
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(){
var G__30440 = arguments.length;
switch (G__30440) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__24461__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24461__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),taoensso.encore.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,taoensso.encore.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq30436){
var G__30437 = cljs.core.first.call(null,seq30436);
var seq30436__$1 = cljs.core.next.call(null,seq30436);
var G__30438 = cljs.core.first.call(null,seq30436__$1);
var seq30436__$2 = cljs.core.next.call(null,seq30436__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__30437,G__30438,seq30436__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_.call(null,coll)){
return taoensso.encore.subvec_STAR_.call(null,coll,(0),n);
} else {
return cljs.core.vec.call(null,cljs.core.take.call(null,n,coll));
}
});
/**
 * Prefer `set` when order doesn't matter (much faster).
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(){
var G__30443 = arguments.length;
switch (G__30443) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__30444,in$){
var vec__30445 = p__30444;
var v = cljs.core.nth.call(null,vec__30445,(0),null);
var seen = cljs.core.nth.call(null,vec__30445,(1),null);
if(!(cljs.core.contains_QMARK_.call(null,seen,in$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in$)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.nth.call(null,cljs.core.reduce.call(null,(function (p__30446,in$){
var vec__30447 = p__30446;
var v = cljs.core.nth.call(null,vec__30447,(0),null);
var seen = cljs.core.nth.call(null,vec__30447,(1),null);
var in_STAR_ = keyfn.call(null,in$);
if(!(cljs.core.contains_QMARK_.call(null,seen,in_STAR_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,v,in$),cljs.core.conj.call(null,seen,in_STAR_)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll),(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;
/**
 * Like `sort-by` for distinct. Based on clojure.core/distinct.
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__30455,seen__$1){
while(true){
var vec__30456 = p__30455;
var v = cljs.core.nth.call(null,vec__30456,(0),null);
var xs__$1 = vec__30456;
var temp__4423__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4423__auto__){
var s = temp__4423__auto__;
var v_STAR_ = keyfn.call(null,v);
if(cljs.core.contains_QMARK_.call(null,seen__$1,v_STAR_)){
var G__30457 = cljs.core.rest.call(null,s);
var G__30458 = seen__$1;
p__30455 = G__30457;
seen__$1 = G__30458;
continue;
} else {
return cljs.core.cons.call(null,v,taoensso$encore$distinct_by_$_step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare.call(null,y,x);
});
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.key.call(null,e);
var rv = cljs.core.val.call(null,e);
if(!(cljs.core.contains_QMARK_.call(null,m,k))){
return cljs.core.assoc.call(null,m,k,rv);
} else {
var lv = cljs.core.get.call(null,m,k);
if((cljs.core.map_QMARK_.call(null,lv)) && (cljs.core.map_QMARK_.call(null,rv))){
return cljs.core.assoc.call(null,m,k,taoensso.encore.nested_merge_with.call(null,f,lv,rv));
} else {
return cljs.core.assoc.call(null,m,k,f.call(null,lv,rv));
}
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__23410__auto__ = m1;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq30459){
var G__30460 = cljs.core.first.call(null,seq30459);
var seq30459__$1 = cljs.core.next.call(null,seq30459);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__30460,seq30459__$1);
});
taoensso.encore.nested_merge = cljs.core.partial.call(null,taoensso.encore.nested_merge_with,(function (x,y){
if((cljs.core.map_QMARK_.call(null,x)) && ((y == null))){
return x;
} else {
return y;
}
}));
/**
 * Returns the 'greatest' element in coll in O(n) time.
 */
taoensso.encore.greatest = (function taoensso$encore$greatest(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__30465){
var vec__30466 = p__30465;
var _QMARK_comparator = cljs.core.nth.call(null,vec__30466,(0),null);
var comparator = (function (){var or__23410__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__30466,_QMARK_comparator){
return (function (p1__30461_SHARP_,p2__30462_SHARP_){
if((comparator.call(null,p1__30461_SHARP_,p2__30462_SHARP_) > (0))){
return p2__30462_SHARP_;
} else {
return p1__30461_SHARP_;
}
});})(comparator,vec__30466,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq30463){
var G__30464 = cljs.core.first.call(null,seq30463);
var seq30463__$1 = cljs.core.next.call(null,seq30463);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__30464,seq30463__$1);
});
/**
 * Returns the 'least' element in coll in O(n) time.
 */
taoensso.encore.least = (function taoensso$encore$least(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__30471){
var vec__30472 = p__30471;
var _QMARK_comparator = cljs.core.nth.call(null,vec__30472,(0),null);
var comparator = (function (){var or__23410__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.call(null,((function (comparator,vec__30472,_QMARK_comparator){
return (function (p1__30467_SHARP_,p2__30468_SHARP_){
if((comparator.call(null,p1__30467_SHARP_,p2__30468_SHARP_) < (0))){
return p2__30468_SHARP_;
} else {
return p1__30467_SHARP_;
}
});})(comparator,vec__30472,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq30469){
var G__30470 = cljs.core.first.call(null,seq30469);
var seq30469__$1 = cljs.core.next.call(null,seq30469);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__30470,seq30469__$1);
});
/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((coll instanceof clojure.lang.IEditableCollection)){
var v = cljs.core.transient$.call(null,coll);
var idx = (0);
while(true){
if((idx >= n)){
return cljs.core.persistent_BANG_.call(null,v);
} else {
var G__30473 = cljs.core.conj_BANG_.call(null,v,f.call(null));
var G__30474 = (idx + (1));
v = G__30473;
idx = G__30474;
continue;
}
break;
}
} else {
var v = coll;
var idx = (0);
while(true){
if((idx >= n)){
return v;
} else {
var G__30475 = cljs.core.conj.call(null,v,f.call(null));
var G__30476 = (idx + (1));
v = G__30475;
idx = G__30476;
continue;
}
break;
}
}
});
taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});
taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,xs));
});
taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.call(null," ",cljs.core.mapv.call(null,taoensso.encore.undefined__GT_nil,xs));
});
/**
 * Like `clojure.core/format` but:
 * * Returns "" when fmt is nil rather than throwing an NPE.
 * * Formats nil as "nil" rather than "null".
 * * Provides ClojureScript support via goog.string.format (this has fewer
 * formatting options!).
 */
taoensso.encore.format = (function taoensso$encore$format(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var fmt__$1 = (function (){var or__23410__auto__ = fmt;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.call(null,taoensso.encore.nil__GT_str,args);
return cljs.core.apply.call(null,goog.string.format,fmt__$1,args__$1);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq30477){
var G__30478 = cljs.core.first.call(null,seq30477);
var seq30477__$1 = cljs.core.next.call(null,seq30477);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__30478,seq30477__$1);
});
/**
 * Gives a consistent, flexible, cross-platform substring API built on
 * `sub-indexes`.
 */
taoensso.encore.substr = (function taoensso$encore$substr(){
var argseq__24450__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24450__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__30482){
var vec__30483 = p__30482;
var _QMARK_max_len = cljs.core.nth.call(null,vec__30483,(0),null);
if((function (){
var vec__30484_30489 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
}catch (e30486){if((e30486 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30486;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30486;

}
}})();
var x__8955__auto___30490 = cljs.core.nth.call(null,vec__30484_30489,(0),null);
var _QMARK_x_err__8956__auto___30491 = cljs.core.nth.call(null,vec__30484_30489,(1),null);
var have_x_QMARK___8957__auto___30492 = (_QMARK_x_err__8956__auto___30491 == null);
var vec__30485_30493 = ((have_x_QMARK___8957__auto___30492)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.string_QMARK_).call(null,x__8955__auto___30490)], null);
}catch (e30487){if((e30487 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30487;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30487;

}
}})():null);
var pass_QMARK___8958__auto___30494 = cljs.core.nth.call(null,vec__30485_30493,(0),null);
var _QMARK_pred_err__8959__auto___30495 = cljs.core.nth.call(null,vec__30485_30493,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___30494)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"s","s",-948495851,null)),new cljs.core.Symbol(null,"string?","string?",-1129175764,null)),((have_x_QMARK___8957__auto___30492)?x__8955__auto___30490:_QMARK_x_err__8956__auto___30491),_QMARK_pred_err__8959__auto___30495);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"s","s",-948495851,null))))].join('')));
}

var vec__30488 = taoensso.encore.sub_indexes.call(null,s,start_idx,new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len);
var start_idx_STAR_ = cljs.core.nth.call(null,vec__30488,(0),null);
var end_idx_STAR_ = cljs.core.nth.call(null,vec__30488,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq30479){
var G__30480 = cljs.core.first.call(null,seq30479);
var seq30479__$1 = cljs.core.next.call(null,seq30479);
var G__30481 = cljs.core.first.call(null,seq30479__$1);
var seq30479__$2 = cljs.core.next.call(null,seq30479__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__30480,G__30481,seq30479__$2);
});
taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.call(null,(-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
/**
 * Like `clojure.string/join` but ensures no double separators.
 */
taoensso.encore.join_once = (function taoensso$encore$join_once(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (separator,coll){
return cljs.core.reduce.call(null,(function (s1,s2){
var s1__$1 = [cljs.core.str(s1)].join('');
var s2__$1 = [cljs.core.str(s2)].join('');
if(cljs.core.truth_(taoensso.encore.str_ends_with_QMARK_.call(null,s1__$1,separator))){
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1.substring((1)))].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
}
} else {
if(cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s2__$1,separator))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
if((cljs.core._EQ_.call(null,s1__$1,"")) || (cljs.core._EQ_.call(null,s2__$1,""))){
return [cljs.core.str(s1__$1),cljs.core.str(s2__$1)].join('');
} else {
return [cljs.core.str(s1__$1),cljs.core.str(separator),cljs.core.str(s2__$1)].join('');
}
}
}
}),null,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq30496){
var G__30497 = cljs.core.first.call(null,seq30496);
var seq30496__$1 = cljs.core.next.call(null,seq30496);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__30497,seq30496__$1);
});
/**
 * Joins string paths (URLs, file paths, etc.) ensuring correct "/"
 * interposition.
 */
taoensso.encore.path = (function taoensso$encore$path(){
var argseq__24450__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__24450__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return cljs.core.apply.call(null,taoensso.encore.join_once,"/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq30498){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30498));
});
/**
 * Converts all word breaks of any form and length (including line breaks of any
 * form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace.call(null,[cljs.core.str(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return (0);
} else {
return cljs.core.count.call(null,clojure.string.split.call(null,s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
 * Ref. http://www.ietf.org/rfc/rfc4122.txt,
 * https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(){
var G__30500 = arguments.length;
switch (G__30500) {
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var fs = (function (n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeatedly.call(null,n,(function (){
return cljs.core.rand_int.call(null,(16)).toString((16));
})));
});
var g = ((function (fs){
return (function (){
return ((8) | ((3) & cljs.core.rand_int.call(null,(15)))).toString((16));
});})(fs))
;
var sb = (new goog.string.StringBuffer()).append(fs.call(null,(8)),"-",fs.call(null,(4)),"-4",fs.call(null,(3)),"-",g.call(null),fs.call(null,(3)),"-",fs.call(null,(12)));
return sb.toString();
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.substr.call(null,taoensso.encore.uuid_str.call(null),(0),max_length);
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;
taoensso.encore.gc_rate = (1.0 / (16000));
taoensso.encore.gc_now_QMARK_ = (function taoensso$encore$gc_now_QMARK_(){
return (cljs.core.rand.call(null) <= taoensso.encore.gc_rate);
});
/**
 * Swaps associative value at key and returns the new value.
 * Specialized, fast `swap-in!` for use mostly by memoization utils.
 */
taoensso.encore.swap_val_BANG_ = (function taoensso$encore$swap_val_BANG_(atom_,k,f){
while(true){
var old_m = cljs.core.deref.call(null,atom_);
var new_v = f.call(null,cljs.core.get.call(null,old_m,k));
var new_m = cljs.core.assoc.call(null,old_m,k,new_v);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,atom_,old_m,new_m))){
return new_v;
} else {
continue;
}
break;
}
});
/**
 * Like `(memoize* f)` but takes an explicit cache atom (possibly nil)
 * and immediately applies memoized f to given arguments.
 */
taoensso.encore.memoized = (function taoensso$encore$memoized(){
var argseq__24450__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24450__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.not.call(null,cache)){
return cljs.core.apply.call(null,f,args);
} else {
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args,(function (p1__30502_SHARP_){
if(cljs.core.truth_(p1__30502_SHARP_)){
return p1__30502_SHARP_;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,f,args);
}),null));
}
})));
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq30503){
var G__30504 = cljs.core.first.call(null,seq30503);
var seq30503__$1 = cljs.core.next.call(null,seq30503);
var G__30505 = cljs.core.first.call(null,seq30503__$1);
var seq30503__$2 = cljs.core.next.call(null,seq30503__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__30504,G__30505,seq30503__$2);
});
/**
 * Like `clojure.core/memoize` but:
 * * Uses delays to prevent race conditions on writes.
 * * Supports auto invalidation & gc with `ttl-ms` option.
 * * Supports manual invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 * * Supports cache size limit & gc with `cache-size` option.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(){
var G__30509 = arguments.length;
switch (G__30509) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__30543__delegate = function (p__30510){
var vec__30511 = p__30510;
var arg1 = cljs.core.nth.call(null,vec__30511,(0),null);
var argn = cljs.core.nthnext.call(null,vec__30511,(1));
var args = vec__30511;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
return cljs.core.deref.call(null,taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,vec__30511,arg1,argn,args,cache){
return (function (_QMARK_dv){
if(cljs.core.truth_((function (){var and__23398__auto__ = _QMARK_dv;
if(cljs.core.truth_(and__23398__auto__)){
return cljs.core.not.call(null,fresh_QMARK_);
} else {
return and__23398__auto__;
}
})())){
return _QMARK_dv;
} else {
return (new cljs.core.Delay(((function (fresh_QMARK_,args__$1,vec__30511,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,vec__30511,arg1,argn,args,cache))
,null));
}
});})(fresh_QMARK_,args__$1,vec__30511,arg1,argn,args,cache))
));
}
};
var G__30543 = function (var_args){
var p__30510 = null;
if (arguments.length > 0) {
var G__30544__i = 0, G__30544__a = new Array(arguments.length -  0);
while (G__30544__i < G__30544__a.length) {G__30544__a[G__30544__i] = arguments[G__30544__i + 0]; ++G__30544__i;}
  p__30510 = new cljs.core.IndexedSeq(G__30544__a,0);
} 
return G__30543__delegate.call(this,p__30510);};
G__30543.cljs$lang$maxFixedArity = 0;
G__30543.cljs$lang$applyTo = (function (arglist__30545){
var p__30510 = cljs.core.seq(arglist__30545);
return G__30543__delegate(p__30510);
});
G__30543.cljs$core$IFn$_invoke$arity$variadic = G__30543__delegate;
return G__30543;
})()
;
;})(cache))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var vec__30512_30546 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttl_ms], null);
}catch (e30514){if((e30514 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30514;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30514;

}
}})();
var x__8955__auto___30547 = cljs.core.nth.call(null,vec__30512_30546,(0),null);
var _QMARK_x_err__8956__auto___30548 = cljs.core.nth.call(null,vec__30512_30546,(1),null);
var have_x_QMARK___8957__auto___30549 = (_QMARK_x_err__8956__auto___30548 == null);
var vec__30513_30550 = ((have_x_QMARK___8957__auto___30549)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,x__8955__auto___30547)], null);
}catch (e30515){if((e30515 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30515;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30515;

}
}})():null);
var pass_QMARK___8958__auto___30551 = cljs.core.nth.call(null,vec__30513_30550,(0),null);
var _QMARK_pred_err__8959__auto___30552 = cljs.core.nth.call(null,vec__30513_30550,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___30551)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null)),((have_x_QMARK___8957__auto___30549)?x__8955__auto___30547:_QMARK_x_err__8956__auto___30548),_QMARK_pred_err__8959__auto___30552);
}


var cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache){
return (function() { 
var G__30553__delegate = function (p__30516){
var vec__30517 = p__30516;
var arg1 = cljs.core.nth.call(null,vec__30517,(0),null);
var argn = cljs.core.nthnext.call(null,vec__30517,(1));
var args = vec__30517;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,cache,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.swap_BANG_.call(null,cache,cljs.core.dissoc,argn);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.gc_now_QMARK_.call(null))){
var instant_30554 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,cache,((function (instant_30554,vec__30517,arg1,argn,args,cache){
return (function (m){
return cljs.core.reduce_kv.call(null,((function (instant_30554,vec__30517,arg1,argn,args,cache){
return (function (m_STAR_,k,p__30518){
var vec__30519 = p__30518;
var dv = cljs.core.nth.call(null,vec__30519,(0),null);
var udt = cljs.core.nth.call(null,vec__30519,(1),null);
var cv = vec__30519;
if(((instant_30554 - udt) > ttl_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,k,cv);
}
});})(instant_30554,vec__30517,arg1,argn,args,cache))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m));
});})(instant_30554,vec__30517,arg1,argn,args,cache))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var instant = taoensso.encore.now_udt.call(null);
var vec__30520 = taoensso.encore.swap_val_BANG_.call(null,cache,args__$1,((function (fresh_QMARK_,args__$1,instant,vec__30517,arg1,argn,args,cache){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__23398__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__23398__auto__)){
var and__23398__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__23398__auto____$1){
var vec__30522 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__30522,(0),null);
var udt = cljs.core.nth.call(null,vec__30522,(1),null);
return ((instant - udt) < ttl_ms);
} else {
return and__23398__auto____$1;
}
} else {
return and__23398__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,vec__30517,arg1,argn,args,cache){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,instant,vec__30517,arg1,argn,args,cache))
,null)),instant], null);
}
});})(fresh_QMARK_,args__$1,instant,vec__30517,arg1,argn,args,cache))
);
var dv = cljs.core.nth.call(null,vec__30520,(0),null);
return cljs.core.deref.call(null,dv);
}
};
var G__30553 = function (var_args){
var p__30516 = null;
if (arguments.length > 0) {
var G__30555__i = 0, G__30555__a = new Array(arguments.length -  0);
while (G__30555__i < G__30555__a.length) {G__30555__a[G__30555__i] = arguments[G__30555__i + 0]; ++G__30555__i;}
  p__30516 = new cljs.core.IndexedSeq(G__30555__a,0);
} 
return G__30553__delegate.call(this,p__30516);};
G__30553.cljs$lang$maxFixedArity = 0;
G__30553.cljs$lang$applyTo = (function (arglist__30556){
var p__30516 = cljs.core.seq(arglist__30556);
return G__30553__delegate(p__30516);
});
G__30553.cljs$core$IFn$_invoke$arity$variadic = G__30553__delegate;
return G__30553;
})()
;
;})(cache))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
var vec__30523_30557 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttl_ms], null);
}catch (e30525){if((e30525 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30525;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30525;

}
}})();
var x__8955__auto___30558 = cljs.core.nth.call(null,vec__30523_30557,(0),null);
var _QMARK_x_err__8956__auto___30559 = cljs.core.nth.call(null,vec__30523_30557,(1),null);
var have_x_QMARK___8957__auto___30560 = (_QMARK_x_err__8956__auto___30559 == null);
var vec__30524_30561 = ((have_x_QMARK___8957__auto___30560)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.pos_int_QMARK_], null)).call(null,x__8955__auto___30558)], null);
}catch (e30526){if((e30526 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30526;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30526;

}
}})():null);
var pass_QMARK___8958__auto___30562 = cljs.core.nth.call(null,vec__30524_30561,(0),null);
var _QMARK_pred_err__8959__auto___30563 = cljs.core.nth.call(null,vec__30524_30561,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___30562)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ttl-ms","ttl-ms",-1349172894,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)], null)),((have_x_QMARK___8957__auto___30560)?x__8955__auto___30558:_QMARK_x_err__8956__auto___30559),_QMARK_pred_err__8959__auto___30563);
}


var vec__30527_30564 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cache_size], null);
}catch (e30529){if((e30529 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30529;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30529;

}
}})();
var x__8955__auto___30565 = cljs.core.nth.call(null,vec__30527_30564,(0),null);
var _QMARK_x_err__8956__auto___30566 = cljs.core.nth.call(null,vec__30527_30564,(1),null);
var have_x_QMARK___8957__auto___30567 = (_QMARK_x_err__8956__auto___30566 == null);
var vec__30528_30568 = ((have_x_QMARK___8957__auto___30567)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.pos_int_QMARK_).call(null,x__8955__auto___30565)], null);
}catch (e30530){if((e30530 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30530;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30530;

}
}})():null);
var pass_QMARK___8958__auto___30569 = cljs.core.nth.call(null,vec__30528_30568,(0),null);
var _QMARK_pred_err__8959__auto___30570 = cljs.core.nth.call(null,vec__30528_30568,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___30569)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cache-size","cache-size",1049002054,null)),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)),((have_x_QMARK___8957__auto___30567)?x__8955__auto___30565:_QMARK_x_err__8956__auto___30566),_QMARK_pred_err__8959__auto___30570);
}


var state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
return ((function (state){
return (function() { 
var G__30571__delegate = function (p__30531){
var vec__30532 = p__30531;
var arg1 = cljs.core.nth.call(null,vec__30532,(0),null);
var argn = cljs.core.nthnext.call(null,vec__30532,(1));
var args = vec__30532;
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","del","mem/del",574870667)))){
if(cljs.core.truth_(taoensso.encore.kw_identical_QMARK_.call(null,cljs.core.first.call(null,argn),new cljs.core.Keyword("mem","all","mem/all",892075139)))){
cljs.core.reset_BANG_.call(null,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tick","tick",-835886976),(0)], null));
} else {
cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,argn);
}

return null;
} else {
if(cljs.core.truth_(taoensso.encore.gc_now_QMARK_.call(null))){
var instant_30572 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_30572,vec__30532,arg1,argn,args,state){
return (function (m){
var m_STAR_ = cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"tick","tick",-835886976));
var m_STAR___$1 = ((cljs.core.not.call(null,ttl_ms))?m_STAR_:cljs.core.reduce_kv.call(null,((function (m_STAR_,instant_30572,vec__30532,arg1,argn,args,state){
return (function (m_STAR___$1,k,p__30533){
var vec__30534 = p__30533;
var dv = cljs.core.nth.call(null,vec__30534,(0),null);
var udt = cljs.core.nth.call(null,vec__30534,(1),null);
var _ = cljs.core.nth.call(null,vec__30534,(2),null);
var ___$1 = cljs.core.nth.call(null,vec__30534,(3),null);
var cv = vec__30534;
if(((instant_30572 - udt) > ttl_ms)){
return m_STAR___$1;
} else {
return cljs.core.assoc.call(null,m_STAR___$1,k,cv);
}
});})(m_STAR_,instant_30572,vec__30532,arg1,argn,args,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m_STAR_)));
var n_to_prune = (cljs.core.count.call(null,m_STAR___$1) - cache_size);
var m_STAR___$2 = ((!((n_to_prune > (0))))?m_STAR___$1:cljs.core.apply.call(null,cljs.core.dissoc,m_STAR___$1,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_30572,vec__30532,arg1,argn,args,state){
return (function (p1__30507_SHARP_){
return cljs.core.nth.call(null,p1__30507_SHARP_,(1));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_30572,vec__30532,arg1,argn,args,state))
,cljs.core.take.call(null,n_to_prune,cljs.core.sort_by.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_30572,vec__30532,arg1,argn,args,state){
return (function (p1__30506_SHARP_){
return cljs.core.nth.call(null,p1__30506_SHARP_,(0));
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_30572,vec__30532,arg1,argn,args,state))
,cljs.core.mapv.call(null,((function (m_STAR_,m_STAR___$1,n_to_prune,instant_30572,vec__30532,arg1,argn,args,state){
return (function (k){
var vec__30535 = m_STAR___$1.call(null,k);
var _ = cljs.core.nth.call(null,vec__30535,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__30535,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__30535,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__30535,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(tick_lru + tick_lfu),k], null);
});})(m_STAR_,m_STAR___$1,n_to_prune,instant_30572,vec__30532,arg1,argn,args,state))
,cljs.core.keys.call(null,m_STAR___$1)))))));
return cljs.core.assoc.call(null,m_STAR___$2,new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(m));
});})(instant_30572,vec__30532,arg1,argn,args,state))
);
} else {
}

var fresh_QMARK_ = taoensso.encore.kw_identical_QMARK_.call(null,arg1,new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133));
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?argn:args);
var _QMARK_instant = (cljs.core.truth_(ttl_ms)?taoensso.encore.now_udt.call(null):null);
var tick_SINGLEQUOTE_ = new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var vec__30536 = taoensso.encore.swap_val_BANG_.call(null,state,args__$1,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__30532,arg1,argn,args,state){
return (function (_QMARK_cv){
if(cljs.core.truth_((function (){var and__23398__auto__ = _QMARK_cv;
if(cljs.core.truth_(and__23398__auto__)){
var and__23398__auto____$1 = cljs.core.not.call(null,fresh_QMARK_);
if(and__23398__auto____$1){
var or__23410__auto__ = (_QMARK_instant == null);
if(or__23410__auto__){
return or__23410__auto__;
} else {
var vec__30540 = _QMARK_cv;
var _dv = cljs.core.nth.call(null,vec__30540,(0),null);
var udt = cljs.core.nth.call(null,vec__30540,(1),null);
return ((_QMARK_instant - udt) < ttl_ms);
}
} else {
return and__23398__auto____$1;
}
} else {
return and__23398__auto__;
}
})())){
return _QMARK_cv;
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Delay(((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__30532,arg1,argn,args,state){
return (function (){
return cljs.core.apply.call(null,f,args__$1);
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__30532,arg1,argn,args,state))
,null)),_QMARK_instant,tick_SINGLEQUOTE_,(1)], null);
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__30532,arg1,argn,args,state))
);
var dv = cljs.core.nth.call(null,vec__30536,(0),null);
cljs.core.swap_BANG_.call(null,state,((function (fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__30536,dv,vec__30532,arg1,argn,args,state){
return (function (m){
var temp__4423__auto__ = cljs.core.get.call(null,m,args__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__30541 = temp__4423__auto__;
var dv__$1 = cljs.core.nth.call(null,vec__30541,(0),null);
var _QMARK_udt = cljs.core.nth.call(null,vec__30541,(1),null);
var tick_lru = cljs.core.nth.call(null,vec__30541,(2),null);
var tick_lfu = cljs.core.nth.call(null,vec__30541,(3),null);
var cv = vec__30541;
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"tick","tick",-835886976),(tick_SINGLEQUOTE_ + (1)),args__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [dv__$1,_QMARK_udt,tick_SINGLEQUOTE_,(tick_lfu + (1))], null)], true, false));
} else {
return null;
}
});})(fresh_QMARK_,args__$1,_QMARK_instant,tick_SINGLEQUOTE_,vec__30536,dv,vec__30532,arg1,argn,args,state))
);

return cljs.core.deref.call(null,dv);
}
};
var G__30571 = function (var_args){
var p__30531 = null;
if (arguments.length > 0) {
var G__30573__i = 0, G__30573__a = new Array(arguments.length -  0);
while (G__30573__i < G__30573__a.length) {G__30573__a[G__30573__i] = arguments[G__30573__i + 0]; ++G__30573__i;}
  p__30531 = new cljs.core.IndexedSeq(G__30573__a,0);
} 
return G__30571__delegate.call(this,p__30531);};
G__30571.cljs$lang$maxFixedArity = 0;
G__30571.cljs$lang$applyTo = (function (arglist__30574){
var p__30531 = cljs.core.seq(arglist__30574);
return G__30571__delegate(p__30531);
});
G__30571.cljs$core$IFn$_invoke$arity$variadic = G__30571__delegate;
return G__30571;
})()
;
;})(state))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * A particularly cheap+simple single-val memoize. Useful for Reactjs render op
 * caching on mobile devices, etc.
 */
taoensso.encore.memoize_1 = (function taoensso$encore$memoize_1(f){
var cache_ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__30575__delegate = function (args){
var temp__4421__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cache_),args);
if(cljs.core.truth_(temp__4421__auto__)){
var dv_ = temp__4421__auto__;
return cljs.core.deref.call(null,dv_);
} else {
var cache = cljs.core.swap_BANG_.call(null,cache_,((function (temp__4421__auto__,cache_){
return (function (cache){
var temp__4421__auto____$1 = cljs.core.get.call(null,cache,args);
if(cljs.core.truth_(temp__4421__auto____$1)){
var dv_ = temp__4421__auto____$1;
return cache;
} else {
return new cljs.core.PersistentArrayMap.fromArray([args,(new cljs.core.Delay(((function (temp__4421__auto____$1,temp__4421__auto__,cache_){
return (function (){
return cljs.core.apply.call(null,f,args);
});})(temp__4421__auto____$1,temp__4421__auto__,cache_))
,null))], true, false);
}
});})(temp__4421__auto__,cache_))
);
var dv_ = cljs.core.get.call(null,cache,args);
return cljs.core.deref.call(null,dv_);
}
};
var G__30575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30576__i = 0, G__30576__a = new Array(arguments.length -  0);
while (G__30576__i < G__30576__a.length) {G__30576__a[G__30576__i] = arguments[G__30576__i + 0]; ++G__30576__i;}
  args = new cljs.core.IndexedSeq(G__30576__a,0);
} 
return G__30575__delegate.call(this,args);};
G__30575.cljs$lang$maxFixedArity = 0;
G__30575.cljs$lang$applyTo = (function (arglist__30577){
var args = cljs.core.seq(arglist__30577);
return G__30575__delegate(args);
});
G__30575.cljs$core$IFn$_invoke$arity$variadic = G__30575__delegate;
return G__30575;
})()
;
;})(cache_))
});
/**
 * Returns a `(fn [& [id]])` that returns either `nil` (limit okay) or number of
 * msecs until next rate limit window (rate limited).
 */
taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
var state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null));
return ((function (state){
return (function() { 
var G__30596__delegate = function (p__30587){
var vec__30588 = p__30587;
var id = cljs.core.nth.call(null,vec__30588,(0),null);
if(cljs.core.truth_(taoensso.encore.gc_now_QMARK_.call(null))){
var instant_30597 = taoensso.encore.now_udt.call(null);
cljs.core.swap_BANG_.call(null,state,((function (instant_30597,vec__30588,id,state){
return (function (p__30589){
var vec__30590 = p__30589;
var _ = cljs.core.nth.call(null,vec__30590,(0),null);
var m = cljs.core.nth.call(null,vec__30590,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.reduce_kv.call(null,((function (vec__30590,_,m,instant_30597,vec__30588,id,state){
return (function (m_STAR_,id__$1,p__30591){
var vec__30592 = p__30591;
var udt_window_start = cljs.core.nth.call(null,vec__30592,(0),null);
var ncalls = cljs.core.nth.call(null,vec__30592,(1),null);
if(((instant_30597 - udt_window_start) > window_ms)){
return m_STAR_;
} else {
return cljs.core.assoc.call(null,m_STAR_,id__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,ncalls], null));
}
});})(vec__30590,_,m,instant_30597,vec__30588,id,state))
,cljs.core.PersistentArrayMap.EMPTY,taoensso.encore.clj1098.call(null,m))], null);
});})(instant_30597,vec__30588,id,state))
);
} else {
}

return cljs.core.nth.call(null,(function (){var instant = taoensso.encore.now_udt.call(null);
return cljs.core.swap_BANG_.call(null,state,((function (instant,vec__30588,id,state){
return (function (p__30593){
var vec__30594 = p__30593;
var _ = cljs.core.nth.call(null,vec__30594,(0),null);
var m = cljs.core.nth.call(null,vec__30594,(1),null);
var temp__4421__auto__ = m.call(null,id);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__30595 = temp__4421__auto__;
var udt_window_start = cljs.core.nth.call(null,vec__30595,(0),null);
var ncalls = cljs.core.nth.call(null,vec__30595,(1),null);
if(((instant - udt_window_start) > window_ms)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,(1)], null))], null);
} else {
if((ncalls < ncalls_limit)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [udt_window_start,(ncalls + (1))], null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((udt_window_start + window_ms) - instant),m], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.assoc.call(null,m,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instant,(1)], null))], null);
}
});})(instant,vec__30588,id,state))
);
})(),(0));
};
var G__30596 = function (var_args){
var p__30587 = null;
if (arguments.length > 0) {
var G__30598__i = 0, G__30598__a = new Array(arguments.length -  0);
while (G__30598__i < G__30598__a.length) {G__30598__a[G__30598__i] = arguments[G__30598__i + 0]; ++G__30598__i;}
  p__30587 = new cljs.core.IndexedSeq(G__30598__a,0);
} 
return G__30596__delegate.call(this,p__30587);};
G__30596.cljs$lang$maxFixedArity = 0;
G__30596.cljs$lang$applyTo = (function (arglist__30599){
var p__30587 = cljs.core.seq(arglist__30599);
return G__30596__delegate(p__30587);
});
G__30596.cljs$core$IFn$_invoke$arity$variadic = G__30596__delegate;
return G__30596;
})()
;
;})(state))
});
/**
 * Wraps fn so that it returns {:result _ :backoff-ms _}.
 */
taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter.call(null,ncalls_limit,window_ms);
return ((function (rl){
return (function() { 
var G__30600__delegate = function (args){
var temp__4421__auto__ = rl.call(null);
if(cljs.core.truth_(temp__4421__auto__)){
var backoff_ms = temp__4421__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),f.call(null)], null);
}
};
var G__30600 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30601__i = 0, G__30601__a = new Array(arguments.length -  0);
while (G__30601__i < G__30601__a.length) {G__30601__a[G__30601__i] = arguments[G__30601__i + 0]; ++G__30601__i;}
  args = new cljs.core.IndexedSeq(G__30601__a,0);
} 
return G__30600__delegate.call(this,args);};
G__30600.cljs$lang$maxFixedArity = 0;
G__30600.cljs$lang$applyTo = (function (arglist__30602){
var args = cljs.core.seq(arglist__30602);
return G__30600__delegate(args);
});
G__30600.cljs$core$IFn$_invoke$arity$variadic = G__30600__delegate;
return G__30600;
})()
;
;})(rl))
});
taoensso.encore.nano_time = (function (){var temp__4421__auto__ = (function (){var and__23398__auto__ = typeof window !== 'undefined';
if(and__23398__auto__){
return (window["performance"]);
} else {
return and__23398__auto__;
}
})();
if(cljs.core.truth_(temp__4421__auto__)){
var perf = temp__4421__auto__;
var temp__4421__auto____$1 = (function (){var or__23410__auto__ = (perf["now"]);
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = (perf["mozNow"]);
if(cljs.core.truth_(or__23410__auto____$1)){
return or__23410__auto____$1;
} else {
var or__23410__auto____$2 = (perf["msNow"]);
if(cljs.core.truth_(or__23410__auto____$2)){
return or__23410__auto____$2;
} else {
var or__23410__auto____$3 = (perf["oNow"]);
if(cljs.core.truth_(or__23410__auto____$3)){
return or__23410__auto____$3;
} else {
return (perf["webkitNow"]);
}
}
}
}
})();
if(cljs.core.truth_(temp__4421__auto____$1)){
var f = temp__4421__auto____$1;
return ((function (f,temp__4421__auto____$1,perf,temp__4421__auto__){
return (function (){
return cljs.core.long$.call(null,(1000000.0 * f.call(perf)));
});
;})(f,temp__4421__auto____$1,perf,temp__4421__auto__))
} else {
return ((function (temp__4421__auto____$1,perf,temp__4421__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4421__auto____$1,perf,temp__4421__auto__))
}
} else {
return ((function (temp__4421__auto__){
return (function (){
return (1000000.0 * taoensso.encore.now_udt.call(null));
});
;})(temp__4421__auto__))
}
})();
taoensso.encore.qb_min_times = (function taoensso$encore$qb_min_times(times){
return cljs.core.apply.call(null,cljs.core.min,times);
});
taoensso.encore.have_console_QMARK_ = typeof console !== 'undefined';

taoensso.encore.console_log = (function (){var temp__4421__auto__ = (function (){var and__23398__auto__ = taoensso.encore.have_console_QMARK_;
if(cljs.core.truth_(and__23398__auto__)){
return console.log;
} else {
return and__23398__auto__;
}
})();
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
return ((function (f,temp__4421__auto__){
return (function (xs){
f.apply(console,cljs.core.into_array.call(null,xs));

return null;
});
;})(f,temp__4421__auto__))
} else {
return ((function (temp__4421__auto__){
return (function (xs){
return null;
});
;})(temp__4421__auto__))
}
})();

taoensso.encore.console_warn = (function (){var temp__4421__auto__ = (function (){var and__23398__auto__ = taoensso.encore.have_console_QMARK_;
if(cljs.core.truth_(and__23398__auto__)){
return console.warn;
} else {
return and__23398__auto__;
}
})();
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
return ((function (f,temp__4421__auto__){
return (function (xs){
f.apply(console,cljs.core.into_array.call(null,xs));

return null;
});
;})(f,temp__4421__auto__))
} else {
return taoensso.encore.console_log;
}
})();

taoensso.encore.console_error = (function (){var temp__4421__auto__ = (function (){var and__23398__auto__ = taoensso.encore.have_console_QMARK_;
if(cljs.core.truth_(and__23398__auto__)){
return console.error;
} else {
return and__23398__auto__;
}
})();
if(cljs.core.truth_(temp__4421__auto__)){
var f = temp__4421__auto__;
return ((function (f,temp__4421__auto__){
return (function (xs){
f.apply(console,cljs.core.into_array.call(null,xs));

return null;
});
;})(f,temp__4421__auto__))
} else {
return taoensso.encore.console_log;
}
})();

if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * Log only logging calls >= <this-level>. Change val with `set!`/`binding`.
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

if(typeof taoensso.encore._STAR_log_fn_STAR_ !== 'undefined'){
} else {
/**
 * Experimental. Logger (fn [{:keys [level ?fmt xs msg_]}])->nil with:
 * :level ; e/o #{:trace :debug :info :warn :error :fatal :report}
 * :?fmt  ; Pattern for message formatting (when formatting)
 * :xs    ; Raw logging call arguments (excl. pattern for message formatting)
 * :msg_  ; Delay-wrapped formatted message string
 * Change val with `set!`/`binding`.
 */
taoensso.encore._STAR_log_fn_STAR_ = cljs.core.with_meta((function taoensso$encore$_STAR_log_fn_STAR_(p__30603){
var map__30606 = p__30603;
var map__30606__$1 = ((cljs.core.seq_QMARK_.call(null,map__30606))?cljs.core.apply.call(null,cljs.core.hash_map,map__30606):map__30606);
var level = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var _QMARK_fmt = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"?fmt","?fmt",-1448350268));
var xs = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"xs","xs",649443341));
var msg_ = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"msg_","msg_",-1925147000));
var G__30607_30637 = (((level instanceof cljs.core.Keyword))?level.fqn:null);
switch (G__30607_30637) {
case "warn":
taoensso.encore.console_warn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("WARN: "),cljs.core.str(cljs.core.deref.call(null,msg_))].join('')], null));

break;
case "error":
taoensso.encore.console_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("ERROR: "),cljs.core.str(cljs.core.deref.call(null,msg_))].join('')], null));

break;
case "fatal":
taoensso.encore.console_error.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("FATAL: "),cljs.core.str(cljs.core.deref.call(null,msg_))].join('')], null));

break;
default:
taoensso.encore.console_log.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,msg_)], null));

}

return null;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),true], null));
}

taoensso.encore.log_level_sufficient_QMARK_ = (function (){var ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888),new cljs.core.Keyword(null,"report","report",1394055010)], null);
var scored_levels = cljs.core.zipmap.call(null,ordered_levels,cljs.core.next.call(null,cljs.core.range.call(null)));
var valid_level_QMARK_ = cljs.core.set.call(null,ordered_levels);
return ((function (ordered_levels,scored_levels,valid_level_QMARK_){
return (function (level){
var current_level = taoensso.encore._STAR_log_level_STAR_;
return (scored_levels.call(null,(function (){var vec__30608 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [level], null);
}catch (e30610){if((e30610 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30610;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30610;

}
}})();
var x__8955__auto__ = cljs.core.nth.call(null,vec__30608,(0),null);
var _QMARK_x_err__8956__auto__ = cljs.core.nth.call(null,vec__30608,(1),null);
var have_x_QMARK___8957__auto__ = (_QMARK_x_err__8956__auto__ == null);
var vec__30609 = ((have_x_QMARK___8957__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,valid_level_QMARK_).call(null,x__8955__auto__)], null);
}catch (e30611){if((e30611 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30611;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30611;

}
}})():null);
var pass_QMARK___8958__auto__ = cljs.core.nth.call(null,vec__30609,(0),null);
var _QMARK_pred_err__8959__auto__ = cljs.core.nth.call(null,vec__30609,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto__)){
return x__8955__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1687,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"level","level",-1363938217,null)),new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null)),((have_x_QMARK___8957__auto__)?x__8955__auto__:_QMARK_x_err__8956__auto__),_QMARK_pred_err__8959__auto__);
}
})()) >= scored_levels.call(null,(function (){var vec__30612 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_level], null);
}catch (e30614){if((e30614 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30614;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30614;

}
}})();
var x__8955__auto__ = cljs.core.nth.call(null,vec__30612,(0),null);
var _QMARK_x_err__8956__auto__ = cljs.core.nth.call(null,vec__30612,(1),null);
var have_x_QMARK___8957__auto__ = (_QMARK_x_err__8956__auto__ == null);
var vec__30613 = ((have_x_QMARK___8957__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,valid_level_QMARK_).call(null,x__8955__auto__)], null);
}catch (e30615){if((e30615 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30615;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30615;

}
}})():null);
var pass_QMARK___8958__auto__ = cljs.core.nth.call(null,vec__30613,(0),null);
var _QMARK_pred_err__8959__auto__ = cljs.core.nth.call(null,vec__30613,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto__)){
return x__8955__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",1688,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"current-level","current-level",1628605637,null)),new cljs.core.Symbol(null,"valid-level?","valid-level?",-1401143417,null)),((have_x_QMARK___8957__auto__)?x__8955__auto__:_QMARK_x_err__8956__auto__),_QMARK_pred_err__8959__auto__);
}
})()));
});
;})(ordered_levels,scored_levels,valid_level_QMARK_))
})();


taoensso.encore.log = (function taoensso$encore$log(){
var argseq__24450__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(argseq__24450__auto__);
});

taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.encore.console_log.call(null,xs);
});

taoensso.encore.log.cljs$lang$maxFixedArity = (0);

taoensso.encore.log.cljs$lang$applyTo = (function (seq30616){
return taoensso.encore.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30616));
});

taoensso.encore.logp = (function taoensso$encore$logp(){
var argseq__24450__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__24450__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
taoensso.encore._STAR_log_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xs","xs",649443341),xs,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
return taoensso.encore.spaced_str.call(null,xs);
}),null))], null));

return null;
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq30617){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30617));
});

taoensso.encore.logf = (function taoensso$encore$logf(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
taoensso.encore._STAR_log_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"?fmt","?fmt",-1448350268),fmt,new cljs.core.Keyword(null,"xs","xs",649443341),xs,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
return cljs.core.apply.call(null,taoensso.encore.format,fmt,xs);
}),null))], null));

return null;
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq30618){
var G__30619 = cljs.core.first.call(null,seq30618);
var seq30618__$1 = cljs.core.next.call(null,seq30618);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__30619,seq30618__$1);
});

taoensso.encore.sayp = (function taoensso$encore$sayp(){
var argseq__24450__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__24450__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.spaced_str.call(null,xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq30620){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30620));
});

taoensso.encore.sayf = (function taoensso$encore$sayf(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(cljs.core.apply.call(null,taoensso.encore.format,fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq30621){
var G__30622 = cljs.core.first.call(null,seq30621);
var seq30621__$1 = cljs.core.next.call(null,seq30621);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__30622,seq30621__$1);
});

var logf_STAR__30639 = (function (level,fmt,xs){
if(cljs.core.truth_(taoensso.encore.log_level_sufficient_QMARK_.call(null,level))){
taoensso.encore._STAR_log_fn_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"?fmt","?fmt",-1448350268),fmt,new cljs.core.Keyword(null,"xs","xs",649443341),xs,new cljs.core.Keyword(null,"msg_","msg_",-1925147000),(new cljs.core.Delay((function (){
return cljs.core.apply.call(null,taoensso.encore.format,fmt,xs);
}),null))], null));

return null;
} else {
return null;
}
});
taoensso.encore.tracef = ((function (logf_STAR__30639){
return (function taoensso$encore$tracef(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});})(logf_STAR__30639))
;

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__30639){
return (function (fmt,xs){
return logf_STAR__30639.call(null,new cljs.core.Keyword(null,"trace","trace",-1082747415),fmt,xs);
});})(logf_STAR__30639))
;

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = ((function (logf_STAR__30639){
return (function (seq30623){
var G__30624 = cljs.core.first.call(null,seq30623);
var seq30623__$1 = cljs.core.next.call(null,seq30623);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__30624,seq30623__$1);
});})(logf_STAR__30639))
;

taoensso.encore.debugf = ((function (logf_STAR__30639){
return (function taoensso$encore$debugf(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});})(logf_STAR__30639))
;

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__30639){
return (function (fmt,xs){
return logf_STAR__30639.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),fmt,xs);
});})(logf_STAR__30639))
;

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = ((function (logf_STAR__30639){
return (function (seq30625){
var G__30626 = cljs.core.first.call(null,seq30625);
var seq30625__$1 = cljs.core.next.call(null,seq30625);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__30626,seq30625__$1);
});})(logf_STAR__30639))
;

taoensso.encore.infof = ((function (logf_STAR__30639){
return (function taoensso$encore$infof(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});})(logf_STAR__30639))
;

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__30639){
return (function (fmt,xs){
return logf_STAR__30639.call(null,new cljs.core.Keyword(null,"info","info",-317069002),fmt,xs);
});})(logf_STAR__30639))
;

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = ((function (logf_STAR__30639){
return (function (seq30627){
var G__30628 = cljs.core.first.call(null,seq30627);
var seq30627__$1 = cljs.core.next.call(null,seq30627);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__30628,seq30627__$1);
});})(logf_STAR__30639))
;

taoensso.encore.warnf = ((function (logf_STAR__30639){
return (function taoensso$encore$warnf(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});})(logf_STAR__30639))
;

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__30639){
return (function (fmt,xs){
return logf_STAR__30639.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),fmt,xs);
});})(logf_STAR__30639))
;

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = ((function (logf_STAR__30639){
return (function (seq30629){
var G__30630 = cljs.core.first.call(null,seq30629);
var seq30629__$1 = cljs.core.next.call(null,seq30629);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__30630,seq30629__$1);
});})(logf_STAR__30639))
;

taoensso.encore.errorf = ((function (logf_STAR__30639){
return (function taoensso$encore$errorf(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});})(logf_STAR__30639))
;

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__30639){
return (function (fmt,xs){
return logf_STAR__30639.call(null,new cljs.core.Keyword(null,"error","error",-978969032),fmt,xs);
});})(logf_STAR__30639))
;

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = ((function (logf_STAR__30639){
return (function (seq30631){
var G__30632 = cljs.core.first.call(null,seq30631);
var seq30631__$1 = cljs.core.next.call(null,seq30631);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__30632,seq30631__$1);
});})(logf_STAR__30639))
;

taoensso.encore.fatalf = ((function (logf_STAR__30639){
return (function taoensso$encore$fatalf(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});})(logf_STAR__30639))
;

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__30639){
return (function (fmt,xs){
return logf_STAR__30639.call(null,new cljs.core.Keyword(null,"fatal","fatal",1874419888),fmt,xs);
});})(logf_STAR__30639))
;

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = ((function (logf_STAR__30639){
return (function (seq30633){
var G__30634 = cljs.core.first.call(null,seq30633);
var seq30633__$1 = cljs.core.next.call(null,seq30633);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__30634,seq30633__$1);
});})(logf_STAR__30639))
;

taoensso.encore.reportf = ((function (logf_STAR__30639){
return (function taoensso$encore$reportf(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});})(logf_STAR__30639))
;

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = ((function (logf_STAR__30639){
return (function (fmt,xs){
return logf_STAR__30639.call(null,new cljs.core.Keyword(null,"report","report",1394055010),fmt,xs);
});})(logf_STAR__30639))
;

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = ((function (logf_STAR__30639){
return (function (seq30635){
var G__30636 = cljs.core.first.call(null,seq30635);
var seq30635__$1 = cljs.core.next.call(null,seq30635);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__30636,seq30635__$1);
});})(logf_STAR__30639))
;
/**
 * Returns browser window's current location. Forgeable.
 */
taoensso.encore.get_window_location = (function taoensso$encore$get_window_location(){
var loc_STAR_ = window.location;
var loc = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc_STAR_.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc_STAR_.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc_STAR_.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc_STAR_.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc_STAR_.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc_STAR_.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc_STAR_.hash], null);
return loc;
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));
/**
 * Returns an immediately available XhrIo instance, or nil. The instance must be
 * released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref.call(null,taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});
/**
 * [uri method get-or-post-params] -> [uri post-content]
 */
taoensso.encore.coerce_xhr_params = (function taoensso$encore$coerce_xhr_params(uri,method,params){
if((function (){
var vec__30645_30650 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [params], null);
}catch (e30647){if((e30647 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30647;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30647;

}
}})();
var x__8955__auto___30651 = cljs.core.nth.call(null,vec__30645_30650,(0),null);
var _QMARK_x_err__8956__auto___30652 = cljs.core.nth.call(null,vec__30645_30650,(1),null);
var have_x_QMARK___8957__auto___30653 = (_QMARK_x_err__8956__auto___30652 == null);
var vec__30646_30654 = ((have_x_QMARK___8957__auto___30653)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,cljs.core.map_QMARK_], null)).call(null,x__8955__auto___30651)], null);
}catch (e30648){if((e30648 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30648;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30648;

}
}})():null);
var pass_QMARK___8958__auto___30655 = cljs.core.nth.call(null,vec__30646_30654,(0),null);
var _QMARK_pred_err__8959__auto___30656 = cljs.core.nth.call(null,vec__30646_30654,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___30655)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"params","params",-1943919534,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null)),((have_x_QMARK___8957__auto___30653)?x__8955__auto___30651:_QMARK_x_err__8956__auto___30652),_QMARK_pred_err__8959__auto___30656);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)], null),new cljs.core.Symbol(null,"params","params",-1943919534,null))))].join('')));
}

var _QMARK_pstr = ((cljs.core.empty_QMARK_.call(null,params))?null:(function (){var s = goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
})());
var G__30649 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__30649) {
case "get":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(_QMARK_pstr)?[cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(_QMARK_pstr)].join(''):uri),null], null);

break;
case "post":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,_QMARK_pstr], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
});
/**
 * Alpha - subject to change.
 * Simple+lightweight Ajax via Google Closure. Returns nil, or the xhr instance.
 * Ref. https://developers.google.com/closure/library/docs/xhrio.
 * 
 * (ajax-lite "/my-post-route"
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
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__30660,callback){
var map__30680 = p__30660;
var map__30680__$1 = ((cljs.core.seq_QMARK_.call(null,map__30680))?cljs.core.apply.call(null,cljs.core.hash_map,map__30680):map__30680);
var opts = map__30680__$1;
var method = cljs.core.get.call(null,map__30680__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.call(null,map__30680__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__30680__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.call(null,map__30680__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.call(null,map__30680__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
if((function (){
var vec__30681_30699 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [timeout_ms], null);
}catch (e30683){if((e30683 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30683;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30683;

}
}})();
var x__8955__auto___30700 = cljs.core.nth.call(null,vec__30681_30699,(0),null);
var _QMARK_x_err__8956__auto___30701 = cljs.core.nth.call(null,vec__30681_30699,(1),null);
var have_x_QMARK___8957__auto___30702 = (_QMARK_x_err__8956__auto___30701 == null);
var vec__30682_30703 = ((have_x_QMARK___8957__auto___30702)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.nil_QMARK_,taoensso.encore.nneg_int_QMARK_], null)).call(null,x__8955__auto___30700)], null);
}catch (e30684){if((e30684 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30684;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30684;

}
}})():null);
var pass_QMARK___8958__auto___30704 = cljs.core.nth.call(null,vec__30682_30703,(0),null);
var _QMARK_pred_err__8959__auto___30705 = cljs.core.nth.call(null,vec__30682_30703,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___30704)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null)),((have_x_QMARK___8957__auto___30702)?x__8955__auto___30700:_QMARK_x_err__8956__auto___30701),_QMARK_pred_err__8959__auto___30705);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"nneg-int?","nneg-int?",803479360,null)], null),new cljs.core.Symbol(null,"timeout-ms","timeout-ms",-1900214363,null))))].join('')));
}

var temp__4421__auto__ = taoensso.encore.get_pooled_xhr_BANG_.call(null);
if(cljs.core.truth_(temp__4421__auto__)){
var xhr = temp__4421__auto__;
try{var timeout_ms__$1 = (function (){var or__23410__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return timeout_ms;
}
})();
var method_STAR_ = (function (){var G__30687 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__30687) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(method)].join('')));

}
})();
var params__$1 = taoensso.encore.map_keys.call(null,cljs.core.name,params);
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["X-Requested-With","XMLHTTPRequest"], null),taoensso.encore.map_keys.call(null,cljs.core.name,headers));
var vec__30686 = taoensso.encore.coerce_xhr_params.call(null,uri,method,params__$1);
var uri_STAR_ = cljs.core.nth.call(null,vec__30686,(0),null);
var post_content_STAR_ = cljs.core.nth.call(null,vec__30686,(1),null);
var headers_STAR_ = cljs.core.clj__GT_js.call(null,((cljs.core.not.call(null,post_content_STAR_))?headers__$1:cljs.core.assoc.call(null,headers__$1,"Content-Type","application/x-www-form-urlencoded; charset=UTF-8")));
var G__30688_30707 = xhr;
goog.events.listenOnce(G__30688_30707,goog.net.EventType.READY,((function (G__30688_30707,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__30686,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4421__auto__,map__30680,map__30680__$1,opts,method,params,headers,timeout_ms,resp_type){
return (function (_){
return cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__30688_30707,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__30686,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4421__auto__,map__30680,map__30680__$1,opts,method,params,headers,timeout_ms,resp_type))
);

goog.events.listenOnce(G__30688_30707,goog.net.EventType.COMPLETE,((function (G__30688_30707,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__30686,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4421__auto__,map__30680,map__30680__$1,opts,method,params,headers,timeout_ms,resp_type){
return (function taoensso$encore$ajax_lite_$_wrapped_callback(resp){
var status = xhr.getStatus();
var _QMARK_http_status = ((cljs.core.not_EQ_.call(null,status,(-1)))?status:null);
var _QMARK_content_type = (cljs.core.truth_(_QMARK_http_status)?xhr.getResponseHeader("Content-Type"):null);
var _QMARK_content = (cljs.core.truth_(_QMARK_http_status)?(function (){var resp_type__$1 = ((!(cljs.core._EQ_.call(null,resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492))))?resp_type:(function (){var pred__30694 = ((function (status,_QMARK_http_status,_QMARK_content_type,G__30688_30707,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__30686,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4421__auto__,map__30680,map__30680__$1,opts,method,params,headers,timeout_ms,resp_type){
return (function (p1__30659_SHARP_,p2__30658_SHARP_){
return taoensso.encore.str_contains_QMARK_.call(null,p2__30658_SHARP_,p1__30659_SHARP_);
});})(status,_QMARK_http_status,_QMARK_content_type,G__30688_30707,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__30686,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4421__auto__,map__30680,map__30680__$1,opts,method,params,headers,timeout_ms,resp_type))
;
var expr__30695 = [cljs.core.str(_QMARK_content_type)].join('');
if(cljs.core.truth_(pred__30694.call(null,"/edn",expr__30695))){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(cljs.core.truth_(pred__30694.call(null,"/json",expr__30695))){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core.truth_(pred__30694.call(null,"/xml",expr__30695))){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
if(cljs.core.truth_(pred__30694.call(null,"/html",expr__30695))){
return new cljs.core.Keyword(null,"text","text",-1790561697);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
}
})());
try{var G__30698 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__30698) {
case "text":
return xhr.getResponseText();

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "edn":
return cljs.reader.read_string.call(null,xhr.getResponseText());

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(resp_type__$1)].join('')));

}
}catch (e30697){var e = e30697;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
}})():null);
var cb_arg = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),(cljs.core.truth_(_QMARK_http_status)?_QMARK_content_type:null),new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_http_status,new cljs.core.Keyword(null,"?error","?error",1070752222),(function (){var or__23410__auto__ = (cljs.core.truth_(_QMARK_http_status)?(function (){var n = _QMARK_http_status;
if((((200) <= n)) && ((n <= (299)))){
return null;
} else {
return _QMARK_http_status;
}
})():cljs.core.get.call(null,new cljs.core.PersistentArrayMap.fromArray([goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)], true, false),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881)));
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
if((_QMARK_content == null)){
return new cljs.core.Keyword(null,"no-content","no-content",-1860206018);
} else {
return null;
}
}
})()], null);
return callback.call(null,cb_arg);
});})(G__30688_30707,timeout_ms__$1,method_STAR_,params__$1,headers__$1,vec__30686,uri_STAR_,post_content_STAR_,headers_STAR_,xhr,temp__4421__auto__,map__30680,map__30680__$1,opts,method,params,headers,timeout_ms,resp_type))
);

G__30688_30707.setTimeoutInterval((function (){var or__23410__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return (0);
}
})());

G__30688_30707.send(uri_STAR_,method_STAR_,post_content_STAR_,headers_STAR_);


return xhr;
}catch (e30685){if((e30685 instanceof Error)){
var e = e30685;
taoensso.encore.errorf.call(null,"`ajax-lite` error: %s",e);

cljs.core.deref.call(null,taoensso.encore.xhr_pool_).releaseObject(xhr);

return null;
} else {
throw e30685;

}
}} else {
callback.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1.
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join(''),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1.
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__30711){
var vec__30712 = p__30711;
var encoding = cljs.core.nth.call(null,vec__30712,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq30709){
var G__30710 = cljs.core.first.call(null,seq30709);
var seq30709__$1 = cljs.core.next.call(null,seq30709);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__30710,seq30709__$1);
});
taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str(taoensso.encore.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(taoensso.encore.url_encode.call(null,v))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.call(null,"&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_.call(null,m)){
return null;
} else {
return join.call(null,(function (){var iter__24164__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__30721(s__30722){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__30722__$1 = s__30722;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__30722__$1);
if(temp__4423__auto__){
var s__30722__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30722__$2)){
var c__24162__auto__ = cljs.core.chunk_first.call(null,s__30722__$2);
var size__24163__auto__ = cljs.core.count.call(null,c__24162__auto__);
var b__30724 = cljs.core.chunk_buffer.call(null,size__24163__auto__);
if((function (){var i__30723 = (0);
while(true){
if((i__30723 < size__24163__auto__)){
var vec__30727 = cljs.core._nth.call(null,c__24162__auto__,i__30723);
var k = cljs.core.nth.call(null,vec__30727,(0),null);
var v = cljs.core.nth.call(null,vec__30727,(1),null);
cljs.core.chunk_append.call(null,b__30724,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__23410__auto__ = cljs.core.seq.call(null,v);
if(or__23410__auto__){
return or__23410__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)));

var G__30729 = (i__30723 + (1));
i__30723 = G__30729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30724),taoensso$encore$format_query_string_$_iter__30721.call(null,cljs.core.chunk_rest.call(null,s__30722__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30724),null);
}
} else {
var vec__30728 = cljs.core.first.call(null,s__30722__$2);
var k = cljs.core.nth.call(null,vec__30728,(0),null);
var v = cljs.core.nth.call(null,vec__30728,(1),null);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,v))?join.call(null,cljs.core.mapv.call(null,cljs.core.partial.call(null,param,k),(function (){var or__23410__auto__ = cljs.core.seq.call(null,v);
if(or__23410__auto__){
return or__23410__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param.call(null,k,v)),taoensso$encore$format_query_string_$_iter__30721.call(null,cljs.core.rest.call(null,s__30722__$2)));
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__24164__auto__.call(null,m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.call(null,m,k,(function (){var temp__4421__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4421__auto__)){
var cur = temp__4421__auto__;
if(cljs.core.vector_QMARK_.call(null,cur)){
return cljs.core.conj.call(null,cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__30732){
var vec__30733 = p__30732;
var keywordize_QMARK_ = cljs.core.nth.call(null,vec__30733,(0),null);
var encoding = cljs.core.nth.call(null,vec__30733,(1),null);
var _PERCENT_ = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))?cljs.core.PersistentArrayMap.EMPTY:(function (){var s__$1 = (cljs.core.truth_(taoensso.encore.str_starts_with_QMARK_.call(null,s,"?"))?taoensso.encore.substr.call(null,s,(1)):s);
if(cljs.core.not.call(null,taoensso.encore.str_contains_QMARK_.call(null,s__$1,"="))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var m = cljs.core.reduce.call(null,((function (s__$1,vec__30733,keywordize_QMARK_,encoding){
return (function (m,param){
var temp__4421__auto__ = clojure.string.split.call(null,param,/=/,(2));
if(cljs.core.truth_(temp__4421__auto__)){
var vec__30734 = temp__4421__auto__;
var k = cljs.core.nth.call(null,vec__30734,(0),null);
var v = cljs.core.nth.call(null,vec__30734,(1),null);
return taoensso.encore.assoc_conj.call(null,m,taoensso.encore.url_decode.call(null,k,encoding),taoensso.encore.url_decode.call(null,v,encoding));
} else {
return m;
}
});})(s__$1,vec__30733,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,s__$1,/&/));
if(cljs.core.not.call(null,keywordize_QMARK_)){
return m;
} else {
return taoensso.encore.keywordize_map.call(null,m);
}
}
})());
if((function (){
var vec__30735_30739 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_PERCENT_], null);
}catch (e30737){if((e30737 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30737;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30737;

}
}})();
var x__8955__auto___30740 = cljs.core.nth.call(null,vec__30735_30739,(0),null);
var _QMARK_x_err__8956__auto___30741 = cljs.core.nth.call(null,vec__30735_30739,(1),null);
var have_x_QMARK___8957__auto___30742 = (_QMARK_x_err__8956__auto___30741 == null);
var vec__30736_30743 = ((have_x_QMARK___8957__auto___30742)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,cljs.core.map_QMARK_).call(null,x__8955__auto___30740)], null);
}catch (e30738){if((e30738 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30738;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30738;

}
}})():null);
var pass_QMARK___8958__auto___30744 = cljs.core.nth.call(null,vec__30736_30743,(0),null);
var _QMARK_pred_err__8959__auto___30745 = cljs.core.nth.call(null,vec__30736_30743,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto___30744)){
} else {
taoensso.encore.hthrow.call(null,false,"taoensso.encore",null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null)),((have_x_QMARK___8957__auto___30742)?x__8955__auto___30740:_QMARK_x_err__8956__auto___30741),_QMARK_pred_err__8959__auto___30745);
}

return true;
})()
){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"have?","have?",-1685305646,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq30730){
var G__30731 = cljs.core.first.call(null,seq30730);
var seq30730__$1 = cljs.core.next.call(null,seq30730);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__30731,seq30730__$1);
});
taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__30747 = clojure.string.split.call(null,[cljs.core.str(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.call(null,vec__30747,(0),null);
var _QMARK_qstr = cljs.core.nth.call(null,vec__30747,(1),null);
var qmap = cljs.core.merge.call(null,(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.keywordize_map.call(null,taoensso.encore.parse_query_params.call(null,_QMARK_qstr)):null),taoensso.encore.keywordize_map.call(null,m));
return [cljs.core.str(url__$1),cljs.core.str((function (){var temp__4423__auto__ = taoensso.encore.format_query_string.call(null,qmap);
if(cljs.core.truth_(temp__4423__auto__)){
var qstr = temp__4423__auto__;
return [cljs.core.str("?"),cljs.core.str(qstr)].join('');
} else {
return null;
}
})())].join('');
});
taoensso.encore.logging_level = cljs.core.atom.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596));
taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(){
var argseq__24450__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__24450__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__30750){
var vec__30751 = p__30750;
var nattempt = cljs.core.nth.call(null,vec__30751,(0),null);
return window.setTimeout(nullary_f,taoensso.encore.exp_backoff.call(null,(function (){var or__23410__auto__ = nattempt;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return (0);
}
})()));
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq30748){
var G__30749 = cljs.core.first.call(null,seq30748);
var seq30748__$1 = cljs.core.next.call(null,seq30748);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30749,seq30748__$1);
});
taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_.call(null,ks,m);
});
taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_.call(null,ks,m);
});
taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_.call(null,ks,m);
});
taoensso.encore.parse_bool = cljs.core.partial.call(null,taoensso.encore.as__QMARK_bool);
taoensso.encore.parse_int = cljs.core.partial.call(null,taoensso.encore.as__QMARK_int);
taoensso.encore.parse_float = cljs.core.partial.call(null,taoensso.encore.as__QMARK_float);
taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
if(cljs.core.truth_(x)){
var vec__30756 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_bool.call(null,x)], null);
}catch (e30758){if((e30758 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30758;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30758;

}
}})();
var x__8955__auto__ = cljs.core.nth.call(null,vec__30756,(0),null);
var _QMARK_x_err__8956__auto__ = cljs.core.nth.call(null,vec__30756,(1),null);
var have_x_QMARK___8957__auto__ = (_QMARK_x_err__8956__auto__ == null);
var vec__30757 = ((have_x_QMARK___8957__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__8955__auto__)], null);
}catch (e30759){if((e30759 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30759;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30759;

}
}})():null);
var pass_QMARK___8958__auto__ = cljs.core.nth.call(null,vec__30757,(0),null);
var _QMARK_pred_err__8959__auto__ = cljs.core.nth.call(null,vec__30757,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto__)){
return x__8955__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",2015,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"as-?bool","as-?bool",1645711161,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___8957__auto__)?x__8955__auto__:_QMARK_x_err__8956__auto__),_QMARK_pred_err__8959__auto__);
}
} else {
return null;
}
});
taoensso.encore.as_int = (function taoensso$encore$as_int(x){
if(cljs.core.truth_(x)){
var vec__30764 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_int.call(null,x)], null);
}catch (e30766){if((e30766 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30766;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30766;

}
}})();
var x__8955__auto__ = cljs.core.nth.call(null,vec__30764,(0),null);
var _QMARK_x_err__8956__auto__ = cljs.core.nth.call(null,vec__30764,(1),null);
var have_x_QMARK___8957__auto__ = (_QMARK_x_err__8956__auto__ == null);
var vec__30765 = ((have_x_QMARK___8957__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__8955__auto__)], null);
}catch (e30767){if((e30767 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30767;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30767;

}
}})():null);
var pass_QMARK___8958__auto__ = cljs.core.nth.call(null,vec__30765,(0),null);
var _QMARK_pred_err__8959__auto__ = cljs.core.nth.call(null,vec__30765,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto__)){
return x__8955__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",2016,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"as-?int","as-?int",2107097360,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___8957__auto__)?x__8955__auto__:_QMARK_x_err__8956__auto__),_QMARK_pred_err__8959__auto__);
}
} else {
return null;
}
});
taoensso.encore.as_float = (function taoensso$encore$as_float(x){
if(cljs.core.truth_(x)){
var vec__30772 = (function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.as__QMARK_float.call(null,x)], null);
}catch (e30774){if((e30774 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30774;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30774;

}
}})();
var x__8955__auto__ = cljs.core.nth.call(null,vec__30772,(0),null);
var _QMARK_x_err__8956__auto__ = cljs.core.nth.call(null,vec__30772,(1),null);
var have_x_QMARK___8957__auto__ = (_QMARK_x_err__8956__auto__ == null);
var vec__30773 = ((have_x_QMARK___8957__auto__)?(function (){try{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.encore.hpred.call(null,taoensso.encore.nnil_QMARK_).call(null,x__8955__auto__)], null);
}catch (e30775){if((e30775 instanceof java.lang.Throwable)){
var t__8843__auto__ = e30775;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,t__8843__auto__], null);
} else {
throw e30775;

}
}})():null);
var pass_QMARK___8958__auto__ = cljs.core.nth.call(null,vec__30773,(0),null);
var _QMARK_pred_err__8959__auto__ = cljs.core.nth.call(null,vec__30773,(1),null);
if(cljs.core.truth_(pass_QMARK___8958__auto__)){
return x__8955__auto__;
} else {
return taoensso.encore.hthrow.call(null,false,"taoensso.encore",2017,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.list(new cljs.core.Symbol(null,"as-?float","as-?float",2124831706,null),new cljs.core.Symbol(null,"x","x",-555367584,null))),new cljs.core.Symbol("taoensso.encore","nnil?","taoensso.encore/nnil?",-1813154343,null)),((have_x_QMARK___8957__auto__)?x__8955__auto__:_QMARK_x_err__8956__auto__),_QMARK_pred_err__8959__auto__);
}
} else {
return null;
}
});
taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;
taoensso.encore.merge_deep = taoensso.encore.nested_merge;

//# sourceMappingURL=encore.js.map