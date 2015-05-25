// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__34275__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34276__i = 0, G__34276__a = new Array(arguments.length -  0);
while (G__34276__i < G__34276__a.length) {G__34276__a[G__34276__i] = arguments[G__34276__i + 0]; ++G__34276__i;}
  args = new cljs.core.IndexedSeq(G__34276__a,0);
} 
return G__34275__delegate.call(this,args);};
G__34275.cljs$lang$maxFixedArity = 0;
G__34275.cljs$lang$applyTo = (function (arglist__34277){
var args = cljs.core.seq(arglist__34277);
return G__34275__delegate(args);
});
G__34275.cljs$core$IFn$_invoke$arity$variadic = G__34275__delegate;
return G__34275;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34278){
var map__34280 = p__34278;
var map__34280__$1 = ((cljs.core.seq_QMARK_.call(null,map__34280))?cljs.core.apply.call(null,cljs.core.hash_map,map__34280):map__34280);
var message = cljs.core.get.call(null,map__34280__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34280__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__23410__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__23398__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__23398__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__23398__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25507__auto___34409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___34409,ch){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___34409,ch){
return (function (state_34383){
var state_val_34384 = (state_34383[(1)]);
if((state_val_34384 === (7))){
var inst_34379 = (state_34383[(2)]);
var state_34383__$1 = state_34383;
var statearr_34385_34410 = state_34383__$1;
(statearr_34385_34410[(2)] = inst_34379);

(statearr_34385_34410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (1))){
var state_34383__$1 = state_34383;
var statearr_34386_34411 = state_34383__$1;
(statearr_34386_34411[(2)] = null);

(statearr_34386_34411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (4))){
var inst_34347 = (state_34383[(7)]);
var inst_34347__$1 = (state_34383[(2)]);
var state_34383__$1 = (function (){var statearr_34387 = state_34383;
(statearr_34387[(7)] = inst_34347__$1);

return statearr_34387;
})();
if(cljs.core.truth_(inst_34347__$1)){
var statearr_34388_34412 = state_34383__$1;
(statearr_34388_34412[(1)] = (5));

} else {
var statearr_34389_34413 = state_34383__$1;
(statearr_34389_34413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (13))){
var state_34383__$1 = state_34383;
var statearr_34390_34414 = state_34383__$1;
(statearr_34390_34414[(2)] = null);

(statearr_34390_34414[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (6))){
var state_34383__$1 = state_34383;
var statearr_34391_34415 = state_34383__$1;
(statearr_34391_34415[(2)] = null);

(statearr_34391_34415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (3))){
var inst_34381 = (state_34383[(2)]);
var state_34383__$1 = state_34383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34383__$1,inst_34381);
} else {
if((state_val_34384 === (12))){
var inst_34354 = (state_34383[(8)]);
var inst_34367 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34354);
var inst_34368 = cljs.core.first.call(null,inst_34367);
var inst_34369 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34368);
var inst_34370 = console.warn("Figwheel: Not loading code with warnings - ",inst_34369);
var state_34383__$1 = state_34383;
var statearr_34392_34416 = state_34383__$1;
(statearr_34392_34416[(2)] = inst_34370);

(statearr_34392_34416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (2))){
var state_34383__$1 = state_34383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34383__$1,(4),ch);
} else {
if((state_val_34384 === (11))){
var inst_34363 = (state_34383[(2)]);
var state_34383__$1 = state_34383;
var statearr_34393_34417 = state_34383__$1;
(statearr_34393_34417[(2)] = inst_34363);

(statearr_34393_34417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (9))){
var inst_34353 = (state_34383[(9)]);
var inst_34365 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34353,opts);
var state_34383__$1 = state_34383;
if(cljs.core.truth_(inst_34365)){
var statearr_34394_34418 = state_34383__$1;
(statearr_34394_34418[(1)] = (12));

} else {
var statearr_34395_34419 = state_34383__$1;
(statearr_34395_34419[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (5))){
var inst_34353 = (state_34383[(9)]);
var inst_34347 = (state_34383[(7)]);
var inst_34349 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34350 = (new cljs.core.PersistentArrayMap(null,2,inst_34349,null));
var inst_34351 = (new cljs.core.PersistentHashSet(null,inst_34350,null));
var inst_34352 = figwheel.client.focus_msgs.call(null,inst_34351,inst_34347);
var inst_34353__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34352);
var inst_34354 = cljs.core.first.call(null,inst_34352);
var inst_34355 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34353__$1,opts);
var state_34383__$1 = (function (){var statearr_34396 = state_34383;
(statearr_34396[(9)] = inst_34353__$1);

(statearr_34396[(8)] = inst_34354);

return statearr_34396;
})();
if(cljs.core.truth_(inst_34355)){
var statearr_34397_34420 = state_34383__$1;
(statearr_34397_34420[(1)] = (8));

} else {
var statearr_34398_34421 = state_34383__$1;
(statearr_34398_34421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (14))){
var inst_34373 = (state_34383[(2)]);
var state_34383__$1 = state_34383;
var statearr_34399_34422 = state_34383__$1;
(statearr_34399_34422[(2)] = inst_34373);

(statearr_34399_34422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (10))){
var inst_34375 = (state_34383[(2)]);
var state_34383__$1 = (function (){var statearr_34400 = state_34383;
(statearr_34400[(10)] = inst_34375);

return statearr_34400;
})();
var statearr_34401_34423 = state_34383__$1;
(statearr_34401_34423[(2)] = null);

(statearr_34401_34423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34384 === (8))){
var inst_34354 = (state_34383[(8)]);
var inst_34357 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34358 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34354);
var inst_34359 = cljs.core.async.timeout.call(null,(1000));
var inst_34360 = [inst_34358,inst_34359];
var inst_34361 = (new cljs.core.PersistentVector(null,2,(5),inst_34357,inst_34360,null));
var state_34383__$1 = state_34383;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34383__$1,(11),inst_34361);
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
});})(c__25507__auto___34409,ch))
;
return ((function (switch__25445__auto__,c__25507__auto___34409,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25446__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25446__auto____0 = (function (){
var statearr_34405 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34405[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25446__auto__);

(statearr_34405[(1)] = (1));

return statearr_34405;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25446__auto____1 = (function (state_34383){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_34383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e34406){if((e34406 instanceof Object)){
var ex__25449__auto__ = e34406;
var statearr_34407_34424 = state_34383;
(statearr_34407_34424[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34425 = state_34383;
state_34383 = G__34425;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25446__auto__ = function(state_34383){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25446__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25446__auto____1.call(this,state_34383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25446__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25446__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___34409,ch))
})();
var state__25509__auto__ = (function (){var statearr_34408 = f__25508__auto__.call(null);
(statearr_34408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___34409);

return statearr_34408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___34409,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34426_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34426_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_34435 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__34428_SHARP_,p2__34427_SHARP_){
return [cljs.core.str(p2__34427_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34435){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_34433 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_34434 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34433,_STAR_print_newline_STAR_34434,base_path_34435){
return (function() { 
var G__34436__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34436 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34437__i = 0, G__34437__a = new Array(arguments.length -  0);
while (G__34437__i < G__34437__a.length) {G__34437__a[G__34437__i] = arguments[G__34437__i + 0]; ++G__34437__i;}
  args = new cljs.core.IndexedSeq(G__34437__a,0);
} 
return G__34436__delegate.call(this,args);};
G__34436.cljs$lang$maxFixedArity = 0;
G__34436.cljs$lang$applyTo = (function (arglist__34438){
var args = cljs.core.seq(arglist__34438);
return G__34436__delegate(args);
});
G__34436.cljs$core$IFn$_invoke$arity$variadic = G__34436__delegate;
return G__34436;
})()
;})(_STAR_print_fn_STAR_34433,_STAR_print_newline_STAR_34434,base_path_34435))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34434;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34433;
}}catch (e34432){if((e34432 instanceof Error)){
var e = e34432;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34435], null));
} else {
var e = e34432;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34435))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34439){
var map__34444 = p__34439;
var map__34444__$1 = ((cljs.core.seq_QMARK_.call(null,map__34444))?cljs.core.apply.call(null,cljs.core.hash_map,map__34444):map__34444);
var opts = map__34444__$1;
var build_id = cljs.core.get.call(null,map__34444__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34444,map__34444__$1,opts,build_id){
return (function (p__34445){
var vec__34446 = p__34445;
var map__34447 = cljs.core.nth.call(null,vec__34446,(0),null);
var map__34447__$1 = ((cljs.core.seq_QMARK_.call(null,map__34447))?cljs.core.apply.call(null,cljs.core.hash_map,map__34447):map__34447);
var msg = map__34447__$1;
var msg_name = cljs.core.get.call(null,map__34447__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34446,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__34446,map__34447,map__34447__$1,msg,msg_name,_,map__34444,map__34444__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34446,map__34447,map__34447__$1,msg,msg_name,_,map__34444,map__34444__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34444,map__34444__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34451){
var vec__34452 = p__34451;
var map__34453 = cljs.core.nth.call(null,vec__34452,(0),null);
var map__34453__$1 = ((cljs.core.seq_QMARK_.call(null,map__34453))?cljs.core.apply.call(null,cljs.core.hash_map,map__34453):map__34453);
var msg = map__34453__$1;
var msg_name = cljs.core.get.call(null,map__34453__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34452,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34454){
var map__34462 = p__34454;
var map__34462__$1 = ((cljs.core.seq_QMARK_.call(null,map__34462))?cljs.core.apply.call(null,cljs.core.hash_map,map__34462):map__34462);
var on_compile_warning = cljs.core.get.call(null,map__34462__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34462__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34462,map__34462__$1,on_compile_warning,on_compile_fail){
return (function (p__34463){
var vec__34464 = p__34463;
var map__34465 = cljs.core.nth.call(null,vec__34464,(0),null);
var map__34465__$1 = ((cljs.core.seq_QMARK_.call(null,map__34465))?cljs.core.apply.call(null,cljs.core.hash_map,map__34465):map__34465);
var msg = map__34465__$1;
var msg_name = cljs.core.get.call(null,map__34465__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34464,(1));
var pred__34466 = cljs.core._EQ_;
var expr__34467 = msg_name;
if(cljs.core.truth_(pred__34466.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34467))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34466.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34467))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34462,map__34462__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto__,msg_hist,msg_names,msg){
return (function (state_34664){
var state_val_34665 = (state_34664[(1)]);
if((state_val_34665 === (7))){
var inst_34600 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34666_34707 = state_34664__$1;
(statearr_34666_34707[(2)] = inst_34600);

(statearr_34666_34707[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (20))){
var inst_34626 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34664__$1 = state_34664;
if(cljs.core.truth_(inst_34626)){
var statearr_34667_34708 = state_34664__$1;
(statearr_34667_34708[(1)] = (22));

} else {
var statearr_34668_34709 = state_34664__$1;
(statearr_34668_34709[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (27))){
var inst_34638 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34639 = figwheel.client.heads_up.display_warning.call(null,inst_34638);
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34664__$1,(30),inst_34639);
} else {
if((state_val_34665 === (1))){
var inst_34588 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34664__$1 = state_34664;
if(cljs.core.truth_(inst_34588)){
var statearr_34669_34710 = state_34664__$1;
(statearr_34669_34710[(1)] = (2));

} else {
var statearr_34670_34711 = state_34664__$1;
(statearr_34670_34711[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (24))){
var inst_34654 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34671_34712 = state_34664__$1;
(statearr_34671_34712[(2)] = inst_34654);

(statearr_34671_34712[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (4))){
var inst_34662 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34664__$1,inst_34662);
} else {
if((state_val_34665 === (15))){
var inst_34615 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34616 = figwheel.client.format_messages.call(null,inst_34615);
var inst_34617 = figwheel.client.heads_up.display_error.call(null,inst_34616);
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34664__$1,(18),inst_34617);
} else {
if((state_val_34665 === (21))){
var inst_34656 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34672_34713 = state_34664__$1;
(statearr_34672_34713[(2)] = inst_34656);

(statearr_34672_34713[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (31))){
var inst_34645 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34664__$1,(34),inst_34645);
} else {
if((state_val_34665 === (32))){
var state_34664__$1 = state_34664;
var statearr_34673_34714 = state_34664__$1;
(statearr_34673_34714[(2)] = null);

(statearr_34673_34714[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (33))){
var inst_34650 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34674_34715 = state_34664__$1;
(statearr_34674_34715[(2)] = inst_34650);

(statearr_34674_34715[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (13))){
var inst_34606 = (state_34664[(2)]);
var inst_34607 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34608 = figwheel.client.format_messages.call(null,inst_34607);
var inst_34609 = figwheel.client.heads_up.display_error.call(null,inst_34608);
var state_34664__$1 = (function (){var statearr_34675 = state_34664;
(statearr_34675[(7)] = inst_34606);

return statearr_34675;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34664__$1,(14),inst_34609);
} else {
if((state_val_34665 === (22))){
var inst_34628 = figwheel.client.heads_up.clear.call(null);
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34664__$1,(25),inst_34628);
} else {
if((state_val_34665 === (29))){
var inst_34652 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34676_34716 = state_34664__$1;
(statearr_34676_34716[(2)] = inst_34652);

(statearr_34676_34716[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (6))){
var inst_34596 = figwheel.client.heads_up.clear.call(null);
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34664__$1,(9),inst_34596);
} else {
if((state_val_34665 === (28))){
var inst_34643 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34664__$1 = state_34664;
if(cljs.core.truth_(inst_34643)){
var statearr_34677_34717 = state_34664__$1;
(statearr_34677_34717[(1)] = (31));

} else {
var statearr_34678_34718 = state_34664__$1;
(statearr_34678_34718[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (25))){
var inst_34630 = (state_34664[(2)]);
var inst_34631 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34632 = figwheel.client.heads_up.display_warning.call(null,inst_34631);
var state_34664__$1 = (function (){var statearr_34679 = state_34664;
(statearr_34679[(8)] = inst_34630);

return statearr_34679;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34664__$1,(26),inst_34632);
} else {
if((state_val_34665 === (34))){
var inst_34647 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34680_34719 = state_34664__$1;
(statearr_34680_34719[(2)] = inst_34647);

(statearr_34680_34719[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (17))){
var inst_34658 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34681_34720 = state_34664__$1;
(statearr_34681_34720[(2)] = inst_34658);

(statearr_34681_34720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (3))){
var inst_34602 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34664__$1 = state_34664;
if(cljs.core.truth_(inst_34602)){
var statearr_34682_34721 = state_34664__$1;
(statearr_34682_34721[(1)] = (10));

} else {
var statearr_34683_34722 = state_34664__$1;
(statearr_34683_34722[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (12))){
var inst_34660 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34684_34723 = state_34664__$1;
(statearr_34684_34723[(2)] = inst_34660);

(statearr_34684_34723[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (2))){
var inst_34590 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34664__$1 = state_34664;
if(cljs.core.truth_(inst_34590)){
var statearr_34685_34724 = state_34664__$1;
(statearr_34685_34724[(1)] = (5));

} else {
var statearr_34686_34725 = state_34664__$1;
(statearr_34686_34725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (23))){
var inst_34636 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34664__$1 = state_34664;
if(cljs.core.truth_(inst_34636)){
var statearr_34687_34726 = state_34664__$1;
(statearr_34687_34726[(1)] = (27));

} else {
var statearr_34688_34727 = state_34664__$1;
(statearr_34688_34727[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (19))){
var inst_34623 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34624 = figwheel.client.heads_up.append_message.call(null,inst_34623);
var state_34664__$1 = state_34664;
var statearr_34689_34728 = state_34664__$1;
(statearr_34689_34728[(2)] = inst_34624);

(statearr_34689_34728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (11))){
var inst_34613 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34664__$1 = state_34664;
if(cljs.core.truth_(inst_34613)){
var statearr_34690_34729 = state_34664__$1;
(statearr_34690_34729[(1)] = (15));

} else {
var statearr_34691_34730 = state_34664__$1;
(statearr_34691_34730[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (9))){
var inst_34598 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34692_34731 = state_34664__$1;
(statearr_34692_34731[(2)] = inst_34598);

(statearr_34692_34731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (5))){
var inst_34592 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34664__$1,(8),inst_34592);
} else {
if((state_val_34665 === (14))){
var inst_34611 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34693_34732 = state_34664__$1;
(statearr_34693_34732[(2)] = inst_34611);

(statearr_34693_34732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (26))){
var inst_34634 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34694_34733 = state_34664__$1;
(statearr_34694_34733[(2)] = inst_34634);

(statearr_34694_34733[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (16))){
var inst_34621 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34664__$1 = state_34664;
if(cljs.core.truth_(inst_34621)){
var statearr_34695_34734 = state_34664__$1;
(statearr_34695_34734[(1)] = (19));

} else {
var statearr_34696_34735 = state_34664__$1;
(statearr_34696_34735[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (30))){
var inst_34641 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34697_34736 = state_34664__$1;
(statearr_34697_34736[(2)] = inst_34641);

(statearr_34697_34736[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (10))){
var inst_34604 = figwheel.client.heads_up.clear.call(null);
var state_34664__$1 = state_34664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34664__$1,(13),inst_34604);
} else {
if((state_val_34665 === (18))){
var inst_34619 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34698_34737 = state_34664__$1;
(statearr_34698_34737[(2)] = inst_34619);

(statearr_34698_34737[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34665 === (8))){
var inst_34594 = (state_34664[(2)]);
var state_34664__$1 = state_34664;
var statearr_34699_34738 = state_34664__$1;
(statearr_34699_34738[(2)] = inst_34594);

(statearr_34699_34738[(1)] = (7));


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
});})(c__25507__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25445__auto__,c__25507__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25446__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25446__auto____0 = (function (){
var statearr_34703 = [null,null,null,null,null,null,null,null,null];
(statearr_34703[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25446__auto__);

(statearr_34703[(1)] = (1));

return statearr_34703;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25446__auto____1 = (function (state_34664){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_34664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e34704){if((e34704 instanceof Object)){
var ex__25449__auto__ = e34704;
var statearr_34705_34739 = state_34664;
(statearr_34705_34739[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34740 = state_34664;
state_34664 = G__34740;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25446__auto__ = function(state_34664){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25446__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25446__auto____1.call(this,state_34664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25446__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25446__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto__,msg_hist,msg_names,msg))
})();
var state__25509__auto__ = (function (){var statearr_34706 = f__25508__auto__.call(null);
(statearr_34706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto__);

return statearr_34706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto__,msg_hist,msg_names,msg))
);

return c__25507__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25507__auto___34803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___34803,ch){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___34803,ch){
return (function (state_34786){
var state_val_34787 = (state_34786[(1)]);
if((state_val_34787 === (1))){
var state_34786__$1 = state_34786;
var statearr_34788_34804 = state_34786__$1;
(statearr_34788_34804[(2)] = null);

(statearr_34788_34804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (2))){
var state_34786__$1 = state_34786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34786__$1,(4),ch);
} else {
if((state_val_34787 === (3))){
var inst_34784 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34786__$1,inst_34784);
} else {
if((state_val_34787 === (4))){
var inst_34774 = (state_34786[(7)]);
var inst_34774__$1 = (state_34786[(2)]);
var state_34786__$1 = (function (){var statearr_34789 = state_34786;
(statearr_34789[(7)] = inst_34774__$1);

return statearr_34789;
})();
if(cljs.core.truth_(inst_34774__$1)){
var statearr_34790_34805 = state_34786__$1;
(statearr_34790_34805[(1)] = (5));

} else {
var statearr_34791_34806 = state_34786__$1;
(statearr_34791_34806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (5))){
var inst_34774 = (state_34786[(7)]);
var inst_34776 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34774);
var state_34786__$1 = state_34786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34786__$1,(8),inst_34776);
} else {
if((state_val_34787 === (6))){
var state_34786__$1 = state_34786;
var statearr_34792_34807 = state_34786__$1;
(statearr_34792_34807[(2)] = null);

(statearr_34792_34807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (7))){
var inst_34782 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
var statearr_34793_34808 = state_34786__$1;
(statearr_34793_34808[(2)] = inst_34782);

(statearr_34793_34808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (8))){
var inst_34778 = (state_34786[(2)]);
var state_34786__$1 = (function (){var statearr_34794 = state_34786;
(statearr_34794[(8)] = inst_34778);

return statearr_34794;
})();
var statearr_34795_34809 = state_34786__$1;
(statearr_34795_34809[(2)] = null);

(statearr_34795_34809[(1)] = (2));


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
});})(c__25507__auto___34803,ch))
;
return ((function (switch__25445__auto__,c__25507__auto___34803,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25446__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25446__auto____0 = (function (){
var statearr_34799 = [null,null,null,null,null,null,null,null,null];
(statearr_34799[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25446__auto__);

(statearr_34799[(1)] = (1));

return statearr_34799;
});
var figwheel$client$heads_up_plugin_$_state_machine__25446__auto____1 = (function (state_34786){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_34786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e34800){if((e34800 instanceof Object)){
var ex__25449__auto__ = e34800;
var statearr_34801_34810 = state_34786;
(statearr_34801_34810[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34811 = state_34786;
state_34786 = G__34811;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25446__auto__ = function(state_34786){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25446__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25446__auto____1.call(this,state_34786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25446__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25446__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___34803,ch))
})();
var state__25509__auto__ = (function (){var statearr_34802 = f__25508__auto__.call(null);
(statearr_34802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___34803);

return statearr_34802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___34803,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto__){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto__){
return (function (state_34832){
var state_val_34833 = (state_34832[(1)]);
if((state_val_34833 === (1))){
var inst_34827 = cljs.core.async.timeout.call(null,(3000));
var state_34832__$1 = state_34832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34832__$1,(2),inst_34827);
} else {
if((state_val_34833 === (2))){
var inst_34829 = (state_34832[(2)]);
var inst_34830 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34832__$1 = (function (){var statearr_34834 = state_34832;
(statearr_34834[(7)] = inst_34829);

return statearr_34834;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34832__$1,inst_34830);
} else {
return null;
}
}
});})(c__25507__auto__))
;
return ((function (switch__25445__auto__,c__25507__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25446__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25446__auto____0 = (function (){
var statearr_34838 = [null,null,null,null,null,null,null,null];
(statearr_34838[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25446__auto__);

(statearr_34838[(1)] = (1));

return statearr_34838;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25446__auto____1 = (function (state_34832){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_34832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e34839){if((e34839 instanceof Object)){
var ex__25449__auto__ = e34839;
var statearr_34840_34842 = state_34832;
(statearr_34840_34842[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34843 = state_34832;
state_34832 = G__34843;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25446__auto__ = function(state_34832){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25446__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25446__auto____1.call(this,state_34832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25446__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25446__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto__))
})();
var state__25509__auto__ = (function (){var statearr_34841 = f__25508__auto__.call(null);
(statearr_34841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto__);

return statearr_34841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto__))
);

return c__25507__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__23398__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__23398__auto__)){
return ("CustomEvent" in window);
} else {
return and__23398__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj34847 = {"detail":url};
return obj34847;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34848){
var map__34854 = p__34848;
var map__34854__$1 = ((cljs.core.seq_QMARK_.call(null,map__34854))?cljs.core.apply.call(null,cljs.core.hash_map,map__34854):map__34854);
var ed = map__34854__$1;
var formatted_exception = cljs.core.get.call(null,map__34854__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34854__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34855_34859 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34856_34860 = null;
var count__34857_34861 = (0);
var i__34858_34862 = (0);
while(true){
if((i__34858_34862 < count__34857_34861)){
var msg_34863 = cljs.core._nth.call(null,chunk__34856_34860,i__34858_34862);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34863);

var G__34864 = seq__34855_34859;
var G__34865 = chunk__34856_34860;
var G__34866 = count__34857_34861;
var G__34867 = (i__34858_34862 + (1));
seq__34855_34859 = G__34864;
chunk__34856_34860 = G__34865;
count__34857_34861 = G__34866;
i__34858_34862 = G__34867;
continue;
} else {
var temp__4423__auto___34868 = cljs.core.seq.call(null,seq__34855_34859);
if(temp__4423__auto___34868){
var seq__34855_34869__$1 = temp__4423__auto___34868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34855_34869__$1)){
var c__24195__auto___34870 = cljs.core.chunk_first.call(null,seq__34855_34869__$1);
var G__34871 = cljs.core.chunk_rest.call(null,seq__34855_34869__$1);
var G__34872 = c__24195__auto___34870;
var G__34873 = cljs.core.count.call(null,c__24195__auto___34870);
var G__34874 = (0);
seq__34855_34859 = G__34871;
chunk__34856_34860 = G__34872;
count__34857_34861 = G__34873;
i__34858_34862 = G__34874;
continue;
} else {
var msg_34875 = cljs.core.first.call(null,seq__34855_34869__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34875);

var G__34876 = cljs.core.next.call(null,seq__34855_34869__$1);
var G__34877 = null;
var G__34878 = (0);
var G__34879 = (0);
seq__34855_34859 = G__34876;
chunk__34856_34860 = G__34877;
count__34857_34861 = G__34878;
i__34858_34862 = G__34879;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34880){
var map__34882 = p__34880;
var map__34882__$1 = ((cljs.core.seq_QMARK_.call(null,map__34882))?cljs.core.apply.call(null,cljs.core.hash_map,map__34882):map__34882);
var w = map__34882__$1;
var message = cljs.core.get.call(null,map__34882__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__23398__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__23398__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__23398__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34889 = cljs.core.seq.call(null,plugins);
var chunk__34890 = null;
var count__34891 = (0);
var i__34892 = (0);
while(true){
if((i__34892 < count__34891)){
var vec__34893 = cljs.core._nth.call(null,chunk__34890,i__34892);
var k = cljs.core.nth.call(null,vec__34893,(0),null);
var plugin = cljs.core.nth.call(null,vec__34893,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34895 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34889,chunk__34890,count__34891,i__34892,pl_34895,vec__34893,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34895.call(null,msg_hist);
});})(seq__34889,chunk__34890,count__34891,i__34892,pl_34895,vec__34893,k,plugin))
);
} else {
}

var G__34896 = seq__34889;
var G__34897 = chunk__34890;
var G__34898 = count__34891;
var G__34899 = (i__34892 + (1));
seq__34889 = G__34896;
chunk__34890 = G__34897;
count__34891 = G__34898;
i__34892 = G__34899;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__34889);
if(temp__4423__auto__){
var seq__34889__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34889__$1)){
var c__24195__auto__ = cljs.core.chunk_first.call(null,seq__34889__$1);
var G__34900 = cljs.core.chunk_rest.call(null,seq__34889__$1);
var G__34901 = c__24195__auto__;
var G__34902 = cljs.core.count.call(null,c__24195__auto__);
var G__34903 = (0);
seq__34889 = G__34900;
chunk__34890 = G__34901;
count__34891 = G__34902;
i__34892 = G__34903;
continue;
} else {
var vec__34894 = cljs.core.first.call(null,seq__34889__$1);
var k = cljs.core.nth.call(null,vec__34894,(0),null);
var plugin = cljs.core.nth.call(null,vec__34894,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34904 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34889,chunk__34890,count__34891,i__34892,pl_34904,vec__34894,k,plugin,seq__34889__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34904.call(null,msg_hist);
});})(seq__34889,chunk__34890,count__34891,i__34892,pl_34904,vec__34894,k,plugin,seq__34889__$1,temp__4423__auto__))
);
} else {
}

var G__34905 = cljs.core.next.call(null,seq__34889__$1);
var G__34906 = null;
var G__34907 = (0);
var G__34908 = (0);
seq__34889 = G__34905;
chunk__34890 = G__34906;
count__34891 = G__34907;
i__34892 = G__34908;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__34910 = arguments.length;
switch (G__34910) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__24450__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__24450__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34913){
var map__34914 = p__34913;
var map__34914__$1 = ((cljs.core.seq_QMARK_.call(null,map__34914))?cljs.core.apply.call(null,cljs.core.hash_map,map__34914):map__34914);
var opts = map__34914__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34912){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34912));
});

//# sourceMappingURL=client.js.map