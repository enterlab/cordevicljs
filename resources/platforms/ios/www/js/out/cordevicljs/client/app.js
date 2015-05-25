// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cordevicljs.client.app');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cordevicljs.client.views');
goog.require('cordevicljs.client.ws');
if(typeof cordevicljs.client.app.state !== 'undefined'){
} else {
cordevicljs.client.app.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"cordevicljs",new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"re-render-flip","re-render-flip",1682025136),false], null));
}
if(typeof cordevicljs.client.app.handle_event !== 'undefined'){
} else {
cordevicljs.client.app.handle_event = (function (){var method_table__24305__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24306__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24307__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24308__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24309__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cordevicljs.client.app","handle-event"),((function (method_table__24305__auto__,prefer_table__24306__auto__,method_cache__24307__auto__,cached_hierarchy__24308__auto__,hierarchy__24309__auto__){
return (function (data,p__35942){
var vec__35943 = p__35942;
var ev_id = cljs.core.nth.call(null,vec__35943,(0),null);
var ev_data = cljs.core.nth.call(null,vec__35943,(1),null);
return ev_id;
});})(method_table__24305__auto__,prefer_table__24306__auto__,method_cache__24307__auto__,cached_hierarchy__24308__auto__,hierarchy__24309__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24309__auto__,method_table__24305__auto__,prefer_table__24306__auto__,method_cache__24307__auto__,cached_hierarchy__24308__auto__));
})();
}
cljs.core._add_method.call(null,cordevicljs.client.app.handle_event,new cljs.core.Keyword(null,"default","default",-1987822328),(function (data,p__35945){
var vec__35946 = p__35945;
var _ = cljs.core.nth.call(null,vec__35946,(0),null);
var msg = cljs.core.nth.call(null,vec__35946,(1),null);
return cljs.core.swap_BANG_.call(null,data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"messages","messages",345434482)], null),((function (vec__35946,_,msg){
return (function (p1__35944_SHARP_){
return cljs.core.conj.call(null,p1__35944_SHARP_,msg);
});})(vec__35946,_,msg))
);
}));
cordevicljs.client.app.app = (function cordevicljs$client$app$app(data){
new cljs.core.Keyword(null,"re-render-flip","re-render-flip",1682025136).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cordevicljs.client.views.main,data], null);
});
cordevicljs.client.app.onDeviceReady = (function cordevicljs$client$app$onDeviceReady(){
return navigator.notification.alert("Device Native Bridge works!",(function (){
return null;
}),"","");
});
goog.exportSymbol('cordevicljs.client.app.onDeviceReady', cordevicljs.client.app.onDeviceReady);
cordevicljs.client.app.prepare_device = (function cordevicljs$client$app$prepare_device(){
return document.addEventListener("deviceready",cordevicljs.client.app.onDeviceReady,true);
});
goog.exportSymbol('cordevicljs.client.app.prepare_device', cordevicljs.client.app.prepare_device);
cordevicljs.client.app.main = (function cordevicljs$client$app$main(){
cordevicljs.client.app.prepare_device.call(null);

var temp__4423__auto__ = document.getElementById("app");
if(cljs.core.truth_(temp__4423__auto__)){
var root = temp__4423__auto__;
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cordevicljs.client.app.app,cordevicljs.client.app.state], null),root);
} else {
return null;
}
});
goog.exportSymbol('cordevicljs.client.app.main', cordevicljs.client.app.main);

//# sourceMappingURL=app.js.map