// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cordevicljs.client.ws');
goog.require('cljs.core');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');
if(typeof cordevicljs.client.ws.push_msg_handler !== 'undefined'){
} else {
cordevicljs.client.ws.push_msg_handler = (function (){var method_table__24305__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24306__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24307__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24308__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24309__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cordevicljs.client.ws","push-msg-handler"),((function (method_table__24305__auto__,prefer_table__24306__auto__,method_cache__24307__auto__,cached_hierarchy__24308__auto__,hierarchy__24309__auto__){
return (function (p__35895){
var vec__35896 = p__35895;
var id = cljs.core.nth.call(null,vec__35896,(0),null);
var _ = cljs.core.nth.call(null,vec__35896,(1),null);
return id;
});})(method_table__24305__auto__,prefer_table__24306__auto__,method_cache__24307__auto__,cached_hierarchy__24308__auto__,hierarchy__24309__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24309__auto__,method_table__24305__auto__,prefer_table__24306__auto__,method_cache__24307__auto__,cached_hierarchy__24308__auto__));
})();
}
cljs.core._add_method.call(null,cordevicljs.client.ws.push_msg_handler,new cljs.core.Keyword("cordevicljs","testevent","cordevicljs/testevent",-993852638),(function (p__35897){
var vec__35898 = p__35897;
var _ = cljs.core.nth.call(null,vec__35898,(0),null);
var event = cljs.core.nth.call(null,vec__35898,(1),null);
return console.log("PUSHed :cordevicljs/testevent from server: %s ",cljs.core.pr_str.call(null,event));
}));
if(typeof cordevicljs.client.ws.event_msg_handler !== 'undefined'){
} else {
cordevicljs.client.ws.event_msg_handler = (function (){var method_table__24305__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24306__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24307__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24308__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24309__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cordevicljs.client.ws","event-msg-handler"),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24309__auto__,method_table__24305__auto__,prefer_table__24306__auto__,method_cache__24307__auto__,cached_hierarchy__24308__auto__));
})();
}
cljs.core._add_method.call(null,cordevicljs.client.ws.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35899){
var map__35900 = p__35899;
var map__35900__$1 = ((cljs.core.seq_QMARK_.call(null,map__35900))?cljs.core.apply.call(null,cljs.core.hash_map,map__35900):map__35900);
var ev_msg = map__35900__$1;
var event = cljs.core.get.call(null,map__35900__$1,new cljs.core.Keyword(null,"event","event",301435442));
return console.log("Unhandled event: %s",cljs.core.pr_str.call(null,event));
}));
cljs.core._add_method.call(null,cordevicljs.client.ws.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__35901){
var map__35902 = p__35901;
var map__35902__$1 = ((cljs.core.seq_QMARK_.call(null,map__35902))?cljs.core.apply.call(null,cljs.core.hash_map,map__35902):map__35902);
var ev_msg = map__35902__$1;
var _QMARK_data = cljs.core.get.call(null,map__35902__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core._EQ_.call(null,_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true], null))){
return console.log("Channel socket successfully established!");
} else {
return console.log("Channel socket state change: %s",cljs.core.pr_str.call(null,_QMARK_data));
}
}));
cljs.core._add_method.call(null,cordevicljs.client.ws.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__35903){
var map__35904 = p__35903;
var map__35904__$1 = ((cljs.core.seq_QMARK_.call(null,map__35904))?cljs.core.apply.call(null,cljs.core.hash_map,map__35904):map__35904);
var ev_msg = map__35904__$1;
var _QMARK_data = cljs.core.get.call(null,map__35904__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return cordevicljs.client.ws.push_msg_handler.call(null,_QMARK_data);
}));
cordevicljs.client.ws.event_msg_handler_STAR_ = (function cordevicljs$client$ws$event_msg_handler_STAR_(p__35905){
var map__35907 = p__35905;
var map__35907__$1 = ((cljs.core.seq_QMARK_.call(null,map__35907))?cljs.core.apply.call(null,cljs.core.hash_map,map__35907):map__35907);
var ev_msg = map__35907__$1;
var id = cljs.core.get.call(null,map__35907__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__35907__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__35907__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cordevicljs.client.ws.event_msg_handler.call(null,ev_msg);
});
cordevicljs.client.ws.test_socket_callback = (function cordevicljs$client$ws$test_socket_callback(){
return cordevicljs.client.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cordevicljs","testevent","cordevicljs/testevent",-993852638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello socket Callback!"], null)], null),(2000),(function (p1__35908_SHARP_){
return console.log("CALLBACK from server: ",cljs.core.pr_str.call(null,p1__35908_SHARP_));
}));
});
cordevicljs.client.ws.test_socket_event = (function cordevicljs$client$ws$test_socket_event(){
return cordevicljs.client.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cordevicljs","testevent","cordevicljs/testevent",-993852638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello socket Event!"], null)], null));
});

//# sourceMappingURL=ws.js.map