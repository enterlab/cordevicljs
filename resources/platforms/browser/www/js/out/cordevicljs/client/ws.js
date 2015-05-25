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
return (function (p__36024){
var vec__36025 = p__36024;
var id = cljs.core.nth.call(null,vec__36025,(0),null);
var _ = cljs.core.nth.call(null,vec__36025,(1),null);
return id;
});})(method_table__24305__auto__,prefer_table__24306__auto__,method_cache__24307__auto__,cached_hierarchy__24308__auto__,hierarchy__24309__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24309__auto__,method_table__24305__auto__,prefer_table__24306__auto__,method_cache__24307__auto__,cached_hierarchy__24308__auto__));
})();
}
cljs.core._add_method.call(null,cordevicljs.client.ws.push_msg_handler,new cljs.core.Keyword("cordevicljs","testevent","cordevicljs/testevent",-993852638),(function (p__36026){
var vec__36027 = p__36026;
var _ = cljs.core.nth.call(null,vec__36027,(0),null);
var event = cljs.core.nth.call(null,vec__36027,(1),null);
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
cljs.core._add_method.call(null,cordevicljs.client.ws.event_msg_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__36028){
var map__36029 = p__36028;
var map__36029__$1 = ((cljs.core.seq_QMARK_.call(null,map__36029))?cljs.core.apply.call(null,cljs.core.hash_map,map__36029):map__36029);
var ev_msg = map__36029__$1;
var event = cljs.core.get.call(null,map__36029__$1,new cljs.core.Keyword(null,"event","event",301435442));
return console.log("Unhandled event: %s",cljs.core.pr_str.call(null,event));
}));
cljs.core._add_method.call(null,cordevicljs.client.ws.event_msg_handler,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (p__36030){
var map__36031 = p__36030;
var map__36031__$1 = ((cljs.core.seq_QMARK_.call(null,map__36031))?cljs.core.apply.call(null,cljs.core.hash_map,map__36031):map__36031);
var ev_msg = map__36031__$1;
var _QMARK_data = cljs.core.get.call(null,map__36031__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
if(cljs.core._EQ_.call(null,_QMARK_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"first-open?","first-open?",396686530),true], null))){
return console.log("Channel socket successfully established!");
} else {
return console.log("Channel socket state change: %s",cljs.core.pr_str.call(null,_QMARK_data));
}
}));
cljs.core._add_method.call(null,cordevicljs.client.ws.event_msg_handler,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (p__36032){
var map__36033 = p__36032;
var map__36033__$1 = ((cljs.core.seq_QMARK_.call(null,map__36033))?cljs.core.apply.call(null,cljs.core.hash_map,map__36033):map__36033);
var ev_msg = map__36033__$1;
var _QMARK_data = cljs.core.get.call(null,map__36033__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
return cordevicljs.client.ws.push_msg_handler.call(null,_QMARK_data);
}));
cordevicljs.client.ws.event_msg_handler_STAR_ = (function cordevicljs$client$ws$event_msg_handler_STAR_(p__36034){
var map__36036 = p__36034;
var map__36036__$1 = ((cljs.core.seq_QMARK_.call(null,map__36036))?cljs.core.apply.call(null,cljs.core.hash_map,map__36036):map__36036);
var ev_msg = map__36036__$1;
var id = cljs.core.get.call(null,map__36036__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _QMARK_data = cljs.core.get.call(null,map__36036__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
var event = cljs.core.get.call(null,map__36036__$1,new cljs.core.Keyword(null,"event","event",301435442));
return cordevicljs.client.ws.event_msg_handler.call(null,ev_msg);
});
var packer_36038 = taoensso.sente.packers.transit.get_flexi_packer.call(null,new cljs.core.Keyword(null,"edn","edn",1317840885));
var map__36037_36039 = taoensso.sente.make_channel_socket_BANG_.call(null,"/chsk",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),packer_36038,new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294),cljs.core.constantly.call(null,"ws://localhost:8080/chsk")], null));
var map__36037_36040__$1 = ((cljs.core.seq_QMARK_.call(null,map__36037_36039))?cljs.core.apply.call(null,cljs.core.hash_map,map__36037_36039):map__36037_36039);
var chsk_36041 = cljs.core.get.call(null,map__36037_36040__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_36042 = cljs.core.get.call(null,map__36037_36040__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_36043 = cljs.core.get.call(null,map__36037_36040__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_36044 = cljs.core.get.call(null,map__36037_36040__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
cordevicljs.client.ws.chsk = chsk_36041;

cordevicljs.client.ws.ch_chsk = ch_recv_36042;

cordevicljs.client.ws.chsk_send_BANG_ = send_fn_36043;

cordevicljs.client.ws.chsk_state = state_36044;
taoensso.sente.start_chsk_router_BANG_.call(null,cordevicljs.client.ws.ch_chsk,cordevicljs.client.ws.event_msg_handler_STAR_);
cordevicljs.client.ws.test_socket_callback = (function cordevicljs$client$ws$test_socket_callback(){
return cordevicljs.client.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cordevicljs","testevent","cordevicljs/testevent",-993852638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello socket Callback!"], null)], null),(2000),(function (p1__36045_SHARP_){
return console.log("CALLBACK from server: ",cljs.core.pr_str.call(null,p1__36045_SHARP_));
}));
});
cordevicljs.client.ws.test_socket_event = (function cordevicljs$client$ws$test_socket_event(){
return cordevicljs.client.ws.chsk_send_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cordevicljs","testevent","cordevicljs/testevent",-993852638),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"Hello socket Event!"], null)], null));
});

//# sourceMappingURL=ws.js.map