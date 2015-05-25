// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__35230_SHARP_,p2__35231_SHARP_){
var and__23398__auto__ = p1__35230_SHARP_;
if(cljs.core.truth_(and__23398__auto__)){
return p2__35231_SHARP_;
} else {
return and__23398__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__23410__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__23410__auto__){
return or__23410__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__35233_SHARP_,p2__35232_SHARP_){
return [cljs.core.str(p2__35232_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__23410__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__23410__auto__){
return or__23410__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__23410__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__24305__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24306__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24307__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24308__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24309__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24309__auto__,method_table__24305__auto__,prefer_table__24306__auto__,method_cache__24307__auto__,cached_hierarchy__24308__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35234){
var map__35235 = p__35234;
var map__35235__$1 = ((cljs.core.seq_QMARK_.call(null,map__35235))?cljs.core.apply.call(null,cljs.core.hash_map,map__35235):map__35235);
var file = cljs.core.get.call(null,map__35235__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__35236){
var map__35237 = p__35236;
var map__35237__$1 = ((cljs.core.seq_QMARK_.call(null,map__35237))?cljs.core.apply.call(null,cljs.core.hash_map,map__35237):map__35237);
var namespace = cljs.core.get.call(null,map__35237__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__24305__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24306__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24307__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24308__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24309__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24309__auto__,method_table__24305__auto__,prefer_table__24306__auto__,method_cache__24307__auto__,cached_hierarchy__24308__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e35238){if((e35238 instanceof Error)){
var e = e35238;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35238;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__35240 = arguments.length;
switch (G__35240) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35242,callback){
var map__35244 = p__35242;
var map__35244__$1 = ((cljs.core.seq_QMARK_.call(null,map__35244))?cljs.core.apply.call(null,cljs.core.hash_map,map__35244):map__35244);
var file_msg = map__35244__$1;
var request_url = cljs.core.get.call(null,map__35244__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35244,map__35244__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35244,map__35244__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35245){
var map__35247 = p__35245;
var map__35247__$1 = ((cljs.core.seq_QMARK_.call(null,map__35247))?cljs.core.apply.call(null,cljs.core.hash_map,map__35247):map__35247);
var file_msg = map__35247__$1;
var namespace = cljs.core.get.call(null,map__35247__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__35247__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__23410__auto__ = meta_data;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__23398__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__23398__auto__){
var or__23410__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
var or__23410__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__23410__auto____$1)){
return or__23410__auto____$1;
} else {
var and__23398__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__23398__auto____$1){
var or__23410__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__23410__auto____$2){
return or__23410__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__23398__auto____$1;
}
}
}
} else {
return and__23398__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35248,callback){
var map__35250 = p__35248;
var map__35250__$1 = ((cljs.core.seq_QMARK_.call(null,map__35250))?cljs.core.apply.call(null,cljs.core.hash_map,map__35250):map__35250);
var file_msg = map__35250__$1;
var request_url = cljs.core.get.call(null,map__35250__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35250__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25507__auto___35337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto___35337,out){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto___35337,out){
return (function (state_35319){
var state_val_35320 = (state_35319[(1)]);
if((state_val_35320 === (1))){
var inst_35297 = cljs.core.nth.call(null,files,(0),null);
var inst_35298 = cljs.core.nthnext.call(null,files,(1));
var inst_35299 = files;
var state_35319__$1 = (function (){var statearr_35321 = state_35319;
(statearr_35321[(7)] = inst_35298);

(statearr_35321[(8)] = inst_35297);

(statearr_35321[(9)] = inst_35299);

return statearr_35321;
})();
var statearr_35322_35338 = state_35319__$1;
(statearr_35322_35338[(2)] = null);

(statearr_35322_35338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (2))){
var inst_35299 = (state_35319[(9)]);
var inst_35302 = (state_35319[(10)]);
var inst_35302__$1 = cljs.core.nth.call(null,inst_35299,(0),null);
var inst_35303 = cljs.core.nthnext.call(null,inst_35299,(1));
var inst_35304 = (inst_35302__$1 == null);
var inst_35305 = cljs.core.not.call(null,inst_35304);
var state_35319__$1 = (function (){var statearr_35323 = state_35319;
(statearr_35323[(11)] = inst_35303);

(statearr_35323[(10)] = inst_35302__$1);

return statearr_35323;
})();
if(inst_35305){
var statearr_35324_35339 = state_35319__$1;
(statearr_35324_35339[(1)] = (4));

} else {
var statearr_35325_35340 = state_35319__$1;
(statearr_35325_35340[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (3))){
var inst_35317 = (state_35319[(2)]);
var state_35319__$1 = state_35319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35319__$1,inst_35317);
} else {
if((state_val_35320 === (4))){
var inst_35302 = (state_35319[(10)]);
var inst_35307 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35302);
var state_35319__$1 = state_35319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35319__$1,(7),inst_35307);
} else {
if((state_val_35320 === (5))){
var inst_35313 = cljs.core.async.close_BANG_.call(null,out);
var state_35319__$1 = state_35319;
var statearr_35326_35341 = state_35319__$1;
(statearr_35326_35341[(2)] = inst_35313);

(statearr_35326_35341[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (6))){
var inst_35315 = (state_35319[(2)]);
var state_35319__$1 = state_35319;
var statearr_35327_35342 = state_35319__$1;
(statearr_35327_35342[(2)] = inst_35315);

(statearr_35327_35342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35320 === (7))){
var inst_35303 = (state_35319[(11)]);
var inst_35309 = (state_35319[(2)]);
var inst_35310 = cljs.core.async.put_BANG_.call(null,out,inst_35309);
var inst_35299 = inst_35303;
var state_35319__$1 = (function (){var statearr_35328 = state_35319;
(statearr_35328[(9)] = inst_35299);

(statearr_35328[(12)] = inst_35310);

return statearr_35328;
})();
var statearr_35329_35343 = state_35319__$1;
(statearr_35329_35343[(2)] = null);

(statearr_35329_35343[(1)] = (2));


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
});})(c__25507__auto___35337,out))
;
return ((function (switch__25445__auto__,c__25507__auto___35337,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25446__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25446__auto____0 = (function (){
var statearr_35333 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35333[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25446__auto__);

(statearr_35333[(1)] = (1));

return statearr_35333;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25446__auto____1 = (function (state_35319){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_35319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e35334){if((e35334 instanceof Object)){
var ex__25449__auto__ = e35334;
var statearr_35335_35344 = state_35319;
(statearr_35335_35344[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35345 = state_35319;
state_35319 = G__35345;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25446__auto__ = function(state_35319){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25446__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25446__auto____1.call(this,state_35319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25446__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25446__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto___35337,out))
})();
var state__25509__auto__ = (function (){var statearr_35336 = f__25508__auto__.call(null);
(statearr_35336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto___35337);

return statearr_35336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto___35337,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__35346,p__35347){
var map__35350 = p__35346;
var map__35350__$1 = ((cljs.core.seq_QMARK_.call(null,map__35350))?cljs.core.apply.call(null,cljs.core.hash_map,map__35350):map__35350);
var opts = map__35350__$1;
var url_rewriter = cljs.core.get.call(null,map__35350__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__35351 = p__35347;
var map__35351__$1 = ((cljs.core.seq_QMARK_.call(null,map__35351))?cljs.core.apply.call(null,cljs.core.hash_map,map__35351):map__35351);
var file_msg = map__35351__$1;
var file = cljs.core.get.call(null,map__35351__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35352){
var map__35355 = p__35352;
var map__35355__$1 = ((cljs.core.seq_QMARK_.call(null,map__35355))?cljs.core.apply.call(null,cljs.core.hash_map,map__35355):map__35355);
var eval_body__$1 = cljs.core.get.call(null,map__35355__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35355__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__23398__auto__ = eval_body__$1;
if(cljs.core.truth_(and__23398__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__23398__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e35356){var e = e35356;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35361,p__35362){
var map__35563 = p__35361;
var map__35563__$1 = ((cljs.core.seq_QMARK_.call(null,map__35563))?cljs.core.apply.call(null,cljs.core.hash_map,map__35563):map__35563);
var opts = map__35563__$1;
var before_jsload = cljs.core.get.call(null,map__35563__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35563__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__35563__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__35564 = p__35362;
var map__35564__$1 = ((cljs.core.seq_QMARK_.call(null,map__35564))?cljs.core.apply.call(null,cljs.core.hash_map,map__35564):map__35564);
var msg = map__35564__$1;
var files = cljs.core.get.call(null,map__35564__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__25507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files){
return (function (state_35688){
var state_val_35689 = (state_35688[(1)]);
if((state_val_35689 === (7))){
var inst_35575 = (state_35688[(7)]);
var inst_35578 = (state_35688[(8)]);
var inst_35576 = (state_35688[(9)]);
var inst_35577 = (state_35688[(10)]);
var inst_35583 = cljs.core._nth.call(null,inst_35576,inst_35578);
var inst_35584 = figwheel.client.file_reloading.eval_body.call(null,inst_35583);
var inst_35585 = (inst_35578 + (1));
var tmp35690 = inst_35575;
var tmp35691 = inst_35576;
var tmp35692 = inst_35577;
var inst_35575__$1 = tmp35690;
var inst_35576__$1 = tmp35691;
var inst_35577__$1 = tmp35692;
var inst_35578__$1 = inst_35585;
var state_35688__$1 = (function (){var statearr_35693 = state_35688;
(statearr_35693[(7)] = inst_35575__$1);

(statearr_35693[(8)] = inst_35578__$1);

(statearr_35693[(9)] = inst_35576__$1);

(statearr_35693[(10)] = inst_35577__$1);

(statearr_35693[(11)] = inst_35584);

return statearr_35693;
})();
var statearr_35694_35763 = state_35688__$1;
(statearr_35694_35763[(2)] = null);

(statearr_35694_35763[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (20))){
var inst_35627 = (state_35688[(12)]);
var inst_35625 = (state_35688[(13)]);
var inst_35624 = (state_35688[(14)]);
var inst_35621 = (state_35688[(15)]);
var inst_35620 = (state_35688[(16)]);
var inst_35630 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35632 = (function (){var all_files = inst_35620;
var files_SINGLEQUOTE_ = inst_35621;
var res_SINGLEQUOTE_ = inst_35624;
var res = inst_35625;
var files_not_loaded = inst_35627;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35627,inst_35625,inst_35624,inst_35621,inst_35620,inst_35630,state_val_35689,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files){
return (function (p__35631){
var map__35695 = p__35631;
var map__35695__$1 = ((cljs.core.seq_QMARK_.call(null,map__35695))?cljs.core.apply.call(null,cljs.core.hash_map,map__35695):map__35695);
var namespace = cljs.core.get.call(null,map__35695__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35695__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35627,inst_35625,inst_35624,inst_35621,inst_35620,inst_35630,state_val_35689,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files))
})();
var inst_35633 = cljs.core.map.call(null,inst_35632,inst_35625);
var inst_35634 = cljs.core.pr_str.call(null,inst_35633);
var inst_35635 = figwheel.client.utils.log.call(null,inst_35634);
var inst_35636 = (function (){var all_files = inst_35620;
var files_SINGLEQUOTE_ = inst_35621;
var res_SINGLEQUOTE_ = inst_35624;
var res = inst_35625;
var files_not_loaded = inst_35627;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35627,inst_35625,inst_35624,inst_35621,inst_35620,inst_35630,inst_35632,inst_35633,inst_35634,inst_35635,state_val_35689,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35627,inst_35625,inst_35624,inst_35621,inst_35620,inst_35630,inst_35632,inst_35633,inst_35634,inst_35635,state_val_35689,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files))
})();
var inst_35637 = setTimeout(inst_35636,(10));
var state_35688__$1 = (function (){var statearr_35696 = state_35688;
(statearr_35696[(17)] = inst_35635);

(statearr_35696[(18)] = inst_35630);

return statearr_35696;
})();
var statearr_35697_35764 = state_35688__$1;
(statearr_35697_35764[(2)] = inst_35637);

(statearr_35697_35764[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (27))){
var inst_35647 = (state_35688[(19)]);
var state_35688__$1 = state_35688;
var statearr_35698_35765 = state_35688__$1;
(statearr_35698_35765[(2)] = inst_35647);

(statearr_35698_35765[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (1))){
var inst_35567 = (state_35688[(20)]);
var inst_35565 = before_jsload.call(null,files);
var inst_35566 = (function (){return ((function (inst_35567,inst_35565,state_val_35689,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files){
return (function (p1__35357_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35357_SHARP_);
});
;})(inst_35567,inst_35565,state_val_35689,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files))
})();
var inst_35567__$1 = cljs.core.filter.call(null,inst_35566,files);
var inst_35568 = cljs.core.not_empty.call(null,inst_35567__$1);
var state_35688__$1 = (function (){var statearr_35699 = state_35688;
(statearr_35699[(21)] = inst_35565);

(statearr_35699[(20)] = inst_35567__$1);

return statearr_35699;
})();
if(cljs.core.truth_(inst_35568)){
var statearr_35700_35766 = state_35688__$1;
(statearr_35700_35766[(1)] = (2));

} else {
var statearr_35701_35767 = state_35688__$1;
(statearr_35701_35767[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (24))){
var state_35688__$1 = state_35688;
var statearr_35702_35768 = state_35688__$1;
(statearr_35702_35768[(2)] = null);

(statearr_35702_35768[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (4))){
var inst_35612 = (state_35688[(2)]);
var inst_35613 = (function (){return ((function (inst_35612,state_val_35689,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files){
return (function (p1__35358_SHARP_){
var and__23398__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35358_SHARP_);
if(cljs.core.truth_(and__23398__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35358_SHARP_));
} else {
return and__23398__auto__;
}
});
;})(inst_35612,state_val_35689,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files))
})();
var inst_35614 = cljs.core.filter.call(null,inst_35613,files);
var state_35688__$1 = (function (){var statearr_35703 = state_35688;
(statearr_35703[(22)] = inst_35612);

(statearr_35703[(23)] = inst_35614);

return statearr_35703;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35704_35769 = state_35688__$1;
(statearr_35704_35769[(1)] = (16));

} else {
var statearr_35705_35770 = state_35688__$1;
(statearr_35705_35770[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (15))){
var inst_35602 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35706_35771 = state_35688__$1;
(statearr_35706_35771[(2)] = inst_35602);

(statearr_35706_35771[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (21))){
var state_35688__$1 = state_35688;
var statearr_35707_35772 = state_35688__$1;
(statearr_35707_35772[(2)] = null);

(statearr_35707_35772[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (31))){
var inst_35655 = (state_35688[(24)]);
var inst_35665 = (state_35688[(2)]);
var inst_35666 = cljs.core.not_empty.call(null,inst_35655);
var state_35688__$1 = (function (){var statearr_35708 = state_35688;
(statearr_35708[(25)] = inst_35665);

return statearr_35708;
})();
if(cljs.core.truth_(inst_35666)){
var statearr_35709_35773 = state_35688__$1;
(statearr_35709_35773[(1)] = (32));

} else {
var statearr_35710_35774 = state_35688__$1;
(statearr_35710_35774[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (32))){
var inst_35655 = (state_35688[(24)]);
var inst_35668 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35655);
var inst_35669 = cljs.core.pr_str.call(null,inst_35668);
var inst_35670 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_35669)].join('');
var inst_35671 = figwheel.client.utils.log.call(null,inst_35670);
var state_35688__$1 = state_35688;
var statearr_35711_35775 = state_35688__$1;
(statearr_35711_35775[(2)] = inst_35671);

(statearr_35711_35775[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (33))){
var state_35688__$1 = state_35688;
var statearr_35712_35776 = state_35688__$1;
(statearr_35712_35776[(2)] = null);

(statearr_35712_35776[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (13))){
var inst_35588 = (state_35688[(26)]);
var inst_35592 = cljs.core.chunk_first.call(null,inst_35588);
var inst_35593 = cljs.core.chunk_rest.call(null,inst_35588);
var inst_35594 = cljs.core.count.call(null,inst_35592);
var inst_35575 = inst_35593;
var inst_35576 = inst_35592;
var inst_35577 = inst_35594;
var inst_35578 = (0);
var state_35688__$1 = (function (){var statearr_35713 = state_35688;
(statearr_35713[(7)] = inst_35575);

(statearr_35713[(8)] = inst_35578);

(statearr_35713[(9)] = inst_35576);

(statearr_35713[(10)] = inst_35577);

return statearr_35713;
})();
var statearr_35714_35777 = state_35688__$1;
(statearr_35714_35777[(2)] = null);

(statearr_35714_35777[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (22))){
var inst_35627 = (state_35688[(12)]);
var inst_35640 = (state_35688[(2)]);
var inst_35641 = cljs.core.not_empty.call(null,inst_35627);
var state_35688__$1 = (function (){var statearr_35715 = state_35688;
(statearr_35715[(27)] = inst_35640);

return statearr_35715;
})();
if(cljs.core.truth_(inst_35641)){
var statearr_35716_35778 = state_35688__$1;
(statearr_35716_35778[(1)] = (23));

} else {
var statearr_35717_35779 = state_35688__$1;
(statearr_35717_35779[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (36))){
var state_35688__$1 = state_35688;
var statearr_35718_35780 = state_35688__$1;
(statearr_35718_35780[(2)] = null);

(statearr_35718_35780[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (29))){
var inst_35654 = (state_35688[(28)]);
var inst_35659 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35654);
var inst_35660 = cljs.core.pr_str.call(null,inst_35659);
var inst_35661 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35660)].join('');
var inst_35662 = figwheel.client.utils.log.call(null,inst_35661);
var state_35688__$1 = state_35688;
var statearr_35719_35781 = state_35688__$1;
(statearr_35719_35781[(2)] = inst_35662);

(statearr_35719_35781[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (6))){
var inst_35609 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35720_35782 = state_35688__$1;
(statearr_35720_35782[(2)] = inst_35609);

(statearr_35720_35782[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (28))){
var inst_35654 = (state_35688[(28)]);
var inst_35653 = (state_35688[(2)]);
var inst_35654__$1 = cljs.core.get.call(null,inst_35653,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35655 = cljs.core.get.call(null,inst_35653,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_35656 = cljs.core.get.call(null,inst_35653,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35657 = cljs.core.not_empty.call(null,inst_35654__$1);
var state_35688__$1 = (function (){var statearr_35721 = state_35688;
(statearr_35721[(28)] = inst_35654__$1);

(statearr_35721[(24)] = inst_35655);

(statearr_35721[(29)] = inst_35656);

return statearr_35721;
})();
if(cljs.core.truth_(inst_35657)){
var statearr_35722_35783 = state_35688__$1;
(statearr_35722_35783[(1)] = (29));

} else {
var statearr_35723_35784 = state_35688__$1;
(statearr_35723_35784[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (25))){
var inst_35686 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35688__$1,inst_35686);
} else {
if((state_val_35689 === (34))){
var inst_35656 = (state_35688[(29)]);
var inst_35674 = (state_35688[(2)]);
var inst_35675 = cljs.core.not_empty.call(null,inst_35656);
var state_35688__$1 = (function (){var statearr_35724 = state_35688;
(statearr_35724[(30)] = inst_35674);

return statearr_35724;
})();
if(cljs.core.truth_(inst_35675)){
var statearr_35725_35785 = state_35688__$1;
(statearr_35725_35785[(1)] = (35));

} else {
var statearr_35726_35786 = state_35688__$1;
(statearr_35726_35786[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (17))){
var inst_35614 = (state_35688[(23)]);
var state_35688__$1 = state_35688;
var statearr_35727_35787 = state_35688__$1;
(statearr_35727_35787[(2)] = inst_35614);

(statearr_35727_35787[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (3))){
var state_35688__$1 = state_35688;
var statearr_35728_35788 = state_35688__$1;
(statearr_35728_35788[(2)] = null);

(statearr_35728_35788[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (12))){
var inst_35605 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35729_35789 = state_35688__$1;
(statearr_35729_35789[(2)] = inst_35605);

(statearr_35729_35789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (2))){
var inst_35567 = (state_35688[(20)]);
var inst_35574 = cljs.core.seq.call(null,inst_35567);
var inst_35575 = inst_35574;
var inst_35576 = null;
var inst_35577 = (0);
var inst_35578 = (0);
var state_35688__$1 = (function (){var statearr_35730 = state_35688;
(statearr_35730[(7)] = inst_35575);

(statearr_35730[(8)] = inst_35578);

(statearr_35730[(9)] = inst_35576);

(statearr_35730[(10)] = inst_35577);

return statearr_35730;
})();
var statearr_35731_35790 = state_35688__$1;
(statearr_35731_35790[(2)] = null);

(statearr_35731_35790[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (23))){
var inst_35627 = (state_35688[(12)]);
var inst_35625 = (state_35688[(13)]);
var inst_35647 = (state_35688[(19)]);
var inst_35624 = (state_35688[(14)]);
var inst_35621 = (state_35688[(15)]);
var inst_35620 = (state_35688[(16)]);
var inst_35643 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35646 = (function (){var all_files = inst_35620;
var files_SINGLEQUOTE_ = inst_35621;
var res_SINGLEQUOTE_ = inst_35624;
var res = inst_35625;
var files_not_loaded = inst_35627;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35627,inst_35625,inst_35647,inst_35624,inst_35621,inst_35620,inst_35643,state_val_35689,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files){
return (function (p__35645){
var map__35732 = p__35645;
var map__35732__$1 = ((cljs.core.seq_QMARK_.call(null,map__35732))?cljs.core.apply.call(null,cljs.core.hash_map,map__35732):map__35732);
var meta_data = cljs.core.get.call(null,map__35732__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35627,inst_35625,inst_35647,inst_35624,inst_35621,inst_35620,inst_35643,state_val_35689,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files))
})();
var inst_35647__$1 = cljs.core.group_by.call(null,inst_35646,inst_35627);
var inst_35648 = cljs.core.seq_QMARK_.call(null,inst_35647__$1);
var state_35688__$1 = (function (){var statearr_35733 = state_35688;
(statearr_35733[(19)] = inst_35647__$1);

(statearr_35733[(31)] = inst_35643);

return statearr_35733;
})();
if(inst_35648){
var statearr_35734_35791 = state_35688__$1;
(statearr_35734_35791[(1)] = (26));

} else {
var statearr_35735_35792 = state_35688__$1;
(statearr_35735_35792[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (35))){
var inst_35656 = (state_35688[(29)]);
var inst_35677 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35656);
var inst_35678 = cljs.core.pr_str.call(null,inst_35677);
var inst_35679 = [cljs.core.str("not required: "),cljs.core.str(inst_35678)].join('');
var inst_35680 = figwheel.client.utils.log.call(null,inst_35679);
var state_35688__$1 = state_35688;
var statearr_35736_35793 = state_35688__$1;
(statearr_35736_35793[(2)] = inst_35680);

(statearr_35736_35793[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (19))){
var inst_35625 = (state_35688[(13)]);
var inst_35624 = (state_35688[(14)]);
var inst_35621 = (state_35688[(15)]);
var inst_35620 = (state_35688[(16)]);
var inst_35624__$1 = (state_35688[(2)]);
var inst_35625__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35624__$1);
var inst_35626 = (function (){var all_files = inst_35620;
var files_SINGLEQUOTE_ = inst_35621;
var res_SINGLEQUOTE_ = inst_35624__$1;
var res = inst_35625__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35625,inst_35624,inst_35621,inst_35620,inst_35624__$1,inst_35625__$1,state_val_35689,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files){
return (function (p1__35360_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35360_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35625,inst_35624,inst_35621,inst_35620,inst_35624__$1,inst_35625__$1,state_val_35689,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files))
})();
var inst_35627 = cljs.core.filter.call(null,inst_35626,inst_35624__$1);
var inst_35628 = cljs.core.not_empty.call(null,inst_35625__$1);
var state_35688__$1 = (function (){var statearr_35737 = state_35688;
(statearr_35737[(12)] = inst_35627);

(statearr_35737[(13)] = inst_35625__$1);

(statearr_35737[(14)] = inst_35624__$1);

return statearr_35737;
})();
if(cljs.core.truth_(inst_35628)){
var statearr_35738_35794 = state_35688__$1;
(statearr_35738_35794[(1)] = (20));

} else {
var statearr_35739_35795 = state_35688__$1;
(statearr_35739_35795[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (11))){
var state_35688__$1 = state_35688;
var statearr_35740_35796 = state_35688__$1;
(statearr_35740_35796[(2)] = null);

(statearr_35740_35796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (9))){
var inst_35607 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35741_35797 = state_35688__$1;
(statearr_35741_35797[(2)] = inst_35607);

(statearr_35741_35797[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (5))){
var inst_35578 = (state_35688[(8)]);
var inst_35577 = (state_35688[(10)]);
var inst_35580 = (inst_35578 < inst_35577);
var inst_35581 = inst_35580;
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35581)){
var statearr_35742_35798 = state_35688__$1;
(statearr_35742_35798[(1)] = (7));

} else {
var statearr_35743_35799 = state_35688__$1;
(statearr_35743_35799[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (14))){
var inst_35588 = (state_35688[(26)]);
var inst_35597 = cljs.core.first.call(null,inst_35588);
var inst_35598 = figwheel.client.file_reloading.eval_body.call(null,inst_35597);
var inst_35599 = cljs.core.next.call(null,inst_35588);
var inst_35575 = inst_35599;
var inst_35576 = null;
var inst_35577 = (0);
var inst_35578 = (0);
var state_35688__$1 = (function (){var statearr_35744 = state_35688;
(statearr_35744[(32)] = inst_35598);

(statearr_35744[(7)] = inst_35575);

(statearr_35744[(8)] = inst_35578);

(statearr_35744[(9)] = inst_35576);

(statearr_35744[(10)] = inst_35577);

return statearr_35744;
})();
var statearr_35745_35800 = state_35688__$1;
(statearr_35745_35800[(2)] = null);

(statearr_35745_35800[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (26))){
var inst_35647 = (state_35688[(19)]);
var inst_35650 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35647);
var state_35688__$1 = state_35688;
var statearr_35746_35801 = state_35688__$1;
(statearr_35746_35801[(2)] = inst_35650);

(statearr_35746_35801[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (16))){
var inst_35614 = (state_35688[(23)]);
var inst_35616 = (function (){var all_files = inst_35614;
return ((function (all_files,inst_35614,state_val_35689,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files){
return (function (p1__35359_SHARP_){
return cljs.core.update_in.call(null,p1__35359_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_35614,state_val_35689,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files))
})();
var inst_35617 = cljs.core.map.call(null,inst_35616,inst_35614);
var state_35688__$1 = state_35688;
var statearr_35747_35802 = state_35688__$1;
(statearr_35747_35802[(2)] = inst_35617);

(statearr_35747_35802[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (30))){
var state_35688__$1 = state_35688;
var statearr_35748_35803 = state_35688__$1;
(statearr_35748_35803[(2)] = null);

(statearr_35748_35803[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (10))){
var inst_35588 = (state_35688[(26)]);
var inst_35590 = cljs.core.chunked_seq_QMARK_.call(null,inst_35588);
var state_35688__$1 = state_35688;
if(inst_35590){
var statearr_35749_35804 = state_35688__$1;
(statearr_35749_35804[(1)] = (13));

} else {
var statearr_35750_35805 = state_35688__$1;
(statearr_35750_35805[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (18))){
var inst_35621 = (state_35688[(15)]);
var inst_35620 = (state_35688[(16)]);
var inst_35620__$1 = (state_35688[(2)]);
var inst_35621__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_35620__$1);
var inst_35622 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35621__$1);
var state_35688__$1 = (function (){var statearr_35751 = state_35688;
(statearr_35751[(15)] = inst_35621__$1);

(statearr_35751[(16)] = inst_35620__$1);

return statearr_35751;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35688__$1,(19),inst_35622);
} else {
if((state_val_35689 === (37))){
var inst_35683 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35752_35806 = state_35688__$1;
(statearr_35752_35806[(2)] = inst_35683);

(statearr_35752_35806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (8))){
var inst_35575 = (state_35688[(7)]);
var inst_35588 = (state_35688[(26)]);
var inst_35588__$1 = cljs.core.seq.call(null,inst_35575);
var state_35688__$1 = (function (){var statearr_35753 = state_35688;
(statearr_35753[(26)] = inst_35588__$1);

return statearr_35753;
})();
if(inst_35588__$1){
var statearr_35754_35807 = state_35688__$1;
(statearr_35754_35807[(1)] = (10));

} else {
var statearr_35755_35808 = state_35688__$1;
(statearr_35755_35808[(1)] = (11));

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
});})(c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files))
;
return ((function (switch__25445__auto__,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25446__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25446__auto____0 = (function (){
var statearr_35759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35759[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25446__auto__);

(statearr_35759[(1)] = (1));

return statearr_35759;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25446__auto____1 = (function (state_35688){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_35688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e35760){if((e35760 instanceof Object)){
var ex__25449__auto__ = e35760;
var statearr_35761_35809 = state_35688;
(statearr_35761_35809[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35810 = state_35688;
state_35688 = G__35810;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25446__auto__ = function(state_35688){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25446__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25446__auto____1.call(this,state_35688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25446__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25446__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files))
})();
var state__25509__auto__ = (function (){var statearr_35762 = f__25508__auto__.call(null);
(statearr_35762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto__);

return statearr_35762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto__,map__35563,map__35563__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35564,map__35564__$1,msg,files))
);

return c__25507__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35813,link){
var map__35815 = p__35813;
var map__35815__$1 = ((cljs.core.seq_QMARK_.call(null,map__35815))?cljs.core.apply.call(null,cljs.core.hash_map,map__35815):map__35815);
var file = cljs.core.get.call(null,map__35815__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__35815,map__35815__$1,file){
return (function (p1__35811_SHARP_,p2__35812_SHARP_){
if(cljs.core._EQ_.call(null,p1__35811_SHARP_,p2__35812_SHARP_)){
return p1__35811_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__35815,map__35815__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35819){
var map__35820 = p__35819;
var map__35820__$1 = ((cljs.core.seq_QMARK_.call(null,map__35820))?cljs.core.apply.call(null,cljs.core.hash_map,map__35820):map__35820);
var match_length = cljs.core.get.call(null,map__35820__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35820__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35816_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35816_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__35822 = arguments.length;
switch (G__35822) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35824){
var map__35826 = p__35824;
var map__35826__$1 = ((cljs.core.seq_QMARK_.call(null,map__35826))?cljs.core.apply.call(null,cljs.core.hash_map,map__35826):map__35826);
var f_data = map__35826__$1;
var file = cljs.core.get.call(null,map__35826__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__35826__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__23410__auto__ = request_url;
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35827,files_msg){
var map__35849 = p__35827;
var map__35849__$1 = ((cljs.core.seq_QMARK_.call(null,map__35849))?cljs.core.apply.call(null,cljs.core.hash_map,map__35849):map__35849);
var opts = map__35849__$1;
var on_cssload = cljs.core.get.call(null,map__35849__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35850_35870 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35851_35871 = null;
var count__35852_35872 = (0);
var i__35853_35873 = (0);
while(true){
if((i__35853_35873 < count__35852_35872)){
var f_35874 = cljs.core._nth.call(null,chunk__35851_35871,i__35853_35873);
figwheel.client.file_reloading.reload_css_file.call(null,f_35874);

var G__35875 = seq__35850_35870;
var G__35876 = chunk__35851_35871;
var G__35877 = count__35852_35872;
var G__35878 = (i__35853_35873 + (1));
seq__35850_35870 = G__35875;
chunk__35851_35871 = G__35876;
count__35852_35872 = G__35877;
i__35853_35873 = G__35878;
continue;
} else {
var temp__4423__auto___35879 = cljs.core.seq.call(null,seq__35850_35870);
if(temp__4423__auto___35879){
var seq__35850_35880__$1 = temp__4423__auto___35879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35850_35880__$1)){
var c__24195__auto___35881 = cljs.core.chunk_first.call(null,seq__35850_35880__$1);
var G__35882 = cljs.core.chunk_rest.call(null,seq__35850_35880__$1);
var G__35883 = c__24195__auto___35881;
var G__35884 = cljs.core.count.call(null,c__24195__auto___35881);
var G__35885 = (0);
seq__35850_35870 = G__35882;
chunk__35851_35871 = G__35883;
count__35852_35872 = G__35884;
i__35853_35873 = G__35885;
continue;
} else {
var f_35886 = cljs.core.first.call(null,seq__35850_35880__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35886);

var G__35887 = cljs.core.next.call(null,seq__35850_35880__$1);
var G__35888 = null;
var G__35889 = (0);
var G__35890 = (0);
seq__35850_35870 = G__35887;
chunk__35851_35871 = G__35888;
count__35852_35872 = G__35889;
i__35853_35873 = G__35890;
continue;
}
} else {
}
}
break;
}

var c__25507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto__,map__35849,map__35849__$1,opts,on_cssload){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto__,map__35849,map__35849__$1,opts,on_cssload){
return (function (state_35860){
var state_val_35861 = (state_35860[(1)]);
if((state_val_35861 === (1))){
var inst_35854 = cljs.core.async.timeout.call(null,(100));
var state_35860__$1 = state_35860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35860__$1,(2),inst_35854);
} else {
if((state_val_35861 === (2))){
var inst_35856 = (state_35860[(2)]);
var inst_35857 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35858 = on_cssload.call(null,inst_35857);
var state_35860__$1 = (function (){var statearr_35862 = state_35860;
(statearr_35862[(7)] = inst_35856);

return statearr_35862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35860__$1,inst_35858);
} else {
return null;
}
}
});})(c__25507__auto__,map__35849,map__35849__$1,opts,on_cssload))
;
return ((function (switch__25445__auto__,c__25507__auto__,map__35849,map__35849__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__25446__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__25446__auto____0 = (function (){
var statearr_35866 = [null,null,null,null,null,null,null,null];
(statearr_35866[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__25446__auto__);

(statearr_35866[(1)] = (1));

return statearr_35866;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__25446__auto____1 = (function (state_35860){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_35860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e35867){if((e35867 instanceof Object)){
var ex__25449__auto__ = e35867;
var statearr_35868_35891 = state_35860;
(statearr_35868_35891[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35892 = state_35860;
state_35860 = G__35892;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__25446__auto__ = function(state_35860){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__25446__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__25446__auto____1.call(this,state_35860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__25446__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__25446__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto__,map__35849,map__35849__$1,opts,on_cssload))
})();
var state__25509__auto__ = (function (){var statearr_35869 = f__25508__auto__.call(null);
(statearr_35869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto__);

return statearr_35869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto__,map__35849,map__35849__$1,opts,on_cssload))
);

return c__25507__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map