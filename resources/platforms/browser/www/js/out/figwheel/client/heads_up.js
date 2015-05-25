// Compiled by ClojureScript 0.0-3291 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__24450__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__24450__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__34927_34935 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34928_34936 = null;
var count__34929_34937 = (0);
var i__34930_34938 = (0);
while(true){
if((i__34930_34938 < count__34929_34937)){
var k_34939 = cljs.core._nth.call(null,chunk__34928_34936,i__34930_34938);
e.setAttribute(cljs.core.name.call(null,k_34939),cljs.core.get.call(null,attrs,k_34939));

var G__34940 = seq__34927_34935;
var G__34941 = chunk__34928_34936;
var G__34942 = count__34929_34937;
var G__34943 = (i__34930_34938 + (1));
seq__34927_34935 = G__34940;
chunk__34928_34936 = G__34941;
count__34929_34937 = G__34942;
i__34930_34938 = G__34943;
continue;
} else {
var temp__4423__auto___34944 = cljs.core.seq.call(null,seq__34927_34935);
if(temp__4423__auto___34944){
var seq__34927_34945__$1 = temp__4423__auto___34944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34927_34945__$1)){
var c__24195__auto___34946 = cljs.core.chunk_first.call(null,seq__34927_34945__$1);
var G__34947 = cljs.core.chunk_rest.call(null,seq__34927_34945__$1);
var G__34948 = c__24195__auto___34946;
var G__34949 = cljs.core.count.call(null,c__24195__auto___34946);
var G__34950 = (0);
seq__34927_34935 = G__34947;
chunk__34928_34936 = G__34948;
count__34929_34937 = G__34949;
i__34930_34938 = G__34950;
continue;
} else {
var k_34951 = cljs.core.first.call(null,seq__34927_34945__$1);
e.setAttribute(cljs.core.name.call(null,k_34951),cljs.core.get.call(null,attrs,k_34951));

var G__34952 = cljs.core.next.call(null,seq__34927_34945__$1);
var G__34953 = null;
var G__34954 = (0);
var G__34955 = (0);
seq__34927_34935 = G__34952;
chunk__34928_34936 = G__34953;
count__34929_34937 = G__34954;
i__34930_34938 = G__34955;
continue;
}
} else {
}
}
break;
}

var seq__34931_34956 = cljs.core.seq.call(null,children);
var chunk__34932_34957 = null;
var count__34933_34958 = (0);
var i__34934_34959 = (0);
while(true){
if((i__34934_34959 < count__34933_34958)){
var ch_34960 = cljs.core._nth.call(null,chunk__34932_34957,i__34934_34959);
e.appendChild(ch_34960);

var G__34961 = seq__34931_34956;
var G__34962 = chunk__34932_34957;
var G__34963 = count__34933_34958;
var G__34964 = (i__34934_34959 + (1));
seq__34931_34956 = G__34961;
chunk__34932_34957 = G__34962;
count__34933_34958 = G__34963;
i__34934_34959 = G__34964;
continue;
} else {
var temp__4423__auto___34965 = cljs.core.seq.call(null,seq__34931_34956);
if(temp__4423__auto___34965){
var seq__34931_34966__$1 = temp__4423__auto___34965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34931_34966__$1)){
var c__24195__auto___34967 = cljs.core.chunk_first.call(null,seq__34931_34966__$1);
var G__34968 = cljs.core.chunk_rest.call(null,seq__34931_34966__$1);
var G__34969 = c__24195__auto___34967;
var G__34970 = cljs.core.count.call(null,c__24195__auto___34967);
var G__34971 = (0);
seq__34931_34956 = G__34968;
chunk__34932_34957 = G__34969;
count__34933_34958 = G__34970;
i__34934_34959 = G__34971;
continue;
} else {
var ch_34972 = cljs.core.first.call(null,seq__34931_34966__$1);
e.appendChild(ch_34972);

var G__34973 = cljs.core.next.call(null,seq__34931_34966__$1);
var G__34974 = null;
var G__34975 = (0);
var G__34976 = (0);
seq__34931_34956 = G__34973;
chunk__34932_34957 = G__34974;
count__34933_34958 = G__34975;
i__34934_34959 = G__34976;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq34924){
var G__34925 = cljs.core.first.call(null,seq34924);
var seq34924__$1 = cljs.core.next.call(null,seq34924);
var G__34926 = cljs.core.first.call(null,seq34924__$1);
var seq34924__$2 = cljs.core.next.call(null,seq34924__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__34925,G__34926,seq34924__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__24305__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__24306__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__24307__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__24308__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__24309__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__24305__auto__,prefer_table__24306__auto__,method_cache__24307__auto__,cached_hierarchy__24308__auto__,hierarchy__24309__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__24305__auto__,prefer_table__24306__auto__,method_cache__24307__auto__,cached_hierarchy__24308__auto__,hierarchy__24309__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__24309__auto__,method_table__24305__auto__,prefer_table__24306__auto__,method_cache__24307__auto__,cached_hierarchy__24308__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_34977 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_34977.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34977.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_34977.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34977);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__34978,st_map){
var map__34982 = p__34978;
var map__34982__$1 = ((cljs.core.seq_QMARK_.call(null,map__34982))?cljs.core.apply.call(null,cljs.core.hash_map,map__34982):map__34982);
var container_el = cljs.core.get.call(null,map__34982__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34982,map__34982__$1,container_el){
return (function (p__34983){
var vec__34984 = p__34983;
var k = cljs.core.nth.call(null,vec__34984,(0),null);
var v = cljs.core.nth.call(null,vec__34984,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34982,map__34982__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__34985,dom_str){
var map__34987 = p__34985;
var map__34987__$1 = ((cljs.core.seq_QMARK_.call(null,map__34987))?cljs.core.apply.call(null,cljs.core.hash_map,map__34987):map__34987);
var c = map__34987__$1;
var content_area_el = cljs.core.get.call(null,map__34987__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__34988){
var map__34990 = p__34988;
var map__34990__$1 = ((cljs.core.seq_QMARK_.call(null,map__34990))?cljs.core.apply.call(null,cljs.core.hash_map,map__34990):map__34990);
var content_area_el = cljs.core.get.call(null,map__34990__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__25507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto__){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto__){
return (function (state_35032){
var state_val_35033 = (state_35032[(1)]);
if((state_val_35033 === (1))){
var inst_35017 = (state_35032[(7)]);
var inst_35017__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35018 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35019 = ["10px","10px","100%","68px","1.0"];
var inst_35020 = cljs.core.PersistentHashMap.fromArrays(inst_35018,inst_35019);
var inst_35021 = cljs.core.merge.call(null,inst_35020,style);
var inst_35022 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35017__$1,inst_35021);
var inst_35023 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35017__$1,msg);
var inst_35024 = cljs.core.async.timeout.call(null,(300));
var state_35032__$1 = (function (){var statearr_35034 = state_35032;
(statearr_35034[(8)] = inst_35023);

(statearr_35034[(7)] = inst_35017__$1);

(statearr_35034[(9)] = inst_35022);

return statearr_35034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35032__$1,(2),inst_35024);
} else {
if((state_val_35033 === (2))){
var inst_35017 = (state_35032[(7)]);
var inst_35026 = (state_35032[(2)]);
var inst_35027 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_35028 = ["auto"];
var inst_35029 = cljs.core.PersistentHashMap.fromArrays(inst_35027,inst_35028);
var inst_35030 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35017,inst_35029);
var state_35032__$1 = (function (){var statearr_35035 = state_35032;
(statearr_35035[(10)] = inst_35026);

return statearr_35035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35032__$1,inst_35030);
} else {
return null;
}
}
});})(c__25507__auto__))
;
return ((function (switch__25445__auto__,c__25507__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__25446__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__25446__auto____0 = (function (){
var statearr_35039 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35039[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__25446__auto__);

(statearr_35039[(1)] = (1));

return statearr_35039;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__25446__auto____1 = (function (state_35032){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_35032);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e35040){if((e35040 instanceof Object)){
var ex__25449__auto__ = e35040;
var statearr_35041_35043 = state_35032;
(statearr_35041_35043[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35044 = state_35032;
state_35032 = G__35044;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__25446__auto__ = function(state_35032){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__25446__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__25446__auto____1.call(this,state_35032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__25446__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__25446__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto__))
})();
var state__25509__auto__ = (function (){var statearr_35042 = f__25508__auto__.call(null);
(statearr_35042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto__);

return statearr_35042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto__))
);

return c__25507__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4421__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__35046 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__35046,(0),null);
var ln = cljs.core.nth.call(null,vec__35046,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__35049 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__35049,(0),null);
var file_line = cljs.core.nth.call(null,vec__35049,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__35049,file_name,file_line){
return (function (p1__35047_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__35047_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__35049,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__35051 = figwheel.client.heads_up.ensure_container.call(null);
var map__35051__$1 = ((cljs.core.seq_QMARK_.call(null,map__35051))?cljs.core.apply.call(null,cljs.core.hash_map,map__35051):map__35051);
var content_area_el = cljs.core.get.call(null,map__35051__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__25507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto__){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto__){
return (function (state_35098){
var state_val_35099 = (state_35098[(1)]);
if((state_val_35099 === (1))){
var inst_35081 = (state_35098[(7)]);
var inst_35081__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35082 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35083 = ["0.0"];
var inst_35084 = cljs.core.PersistentHashMap.fromArrays(inst_35082,inst_35083);
var inst_35085 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35081__$1,inst_35084);
var inst_35086 = cljs.core.async.timeout.call(null,(300));
var state_35098__$1 = (function (){var statearr_35100 = state_35098;
(statearr_35100[(7)] = inst_35081__$1);

(statearr_35100[(8)] = inst_35085);

return statearr_35100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35098__$1,(2),inst_35086);
} else {
if((state_val_35099 === (2))){
var inst_35081 = (state_35098[(7)]);
var inst_35088 = (state_35098[(2)]);
var inst_35089 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_35090 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_35091 = cljs.core.PersistentHashMap.fromArrays(inst_35089,inst_35090);
var inst_35092 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35081,inst_35091);
var inst_35093 = cljs.core.async.timeout.call(null,(200));
var state_35098__$1 = (function (){var statearr_35101 = state_35098;
(statearr_35101[(9)] = inst_35092);

(statearr_35101[(10)] = inst_35088);

return statearr_35101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35098__$1,(3),inst_35093);
} else {
if((state_val_35099 === (3))){
var inst_35081 = (state_35098[(7)]);
var inst_35095 = (state_35098[(2)]);
var inst_35096 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35081,"");
var state_35098__$1 = (function (){var statearr_35102 = state_35098;
(statearr_35102[(11)] = inst_35095);

return statearr_35102;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35098__$1,inst_35096);
} else {
return null;
}
}
}
});})(c__25507__auto__))
;
return ((function (switch__25445__auto__,c__25507__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__25446__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__25446__auto____0 = (function (){
var statearr_35106 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35106[(0)] = figwheel$client$heads_up$clear_$_state_machine__25446__auto__);

(statearr_35106[(1)] = (1));

return statearr_35106;
});
var figwheel$client$heads_up$clear_$_state_machine__25446__auto____1 = (function (state_35098){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_35098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e35107){if((e35107 instanceof Object)){
var ex__25449__auto__ = e35107;
var statearr_35108_35110 = state_35098;
(statearr_35108_35110[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35111 = state_35098;
state_35098 = G__35111;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__25446__auto__ = function(state_35098){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__25446__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__25446__auto____1.call(this,state_35098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__25446__auto____0;
figwheel$client$heads_up$clear_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__25446__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto__))
})();
var state__25509__auto__ = (function (){var statearr_35109 = f__25508__auto__.call(null);
(statearr_35109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto__);

return statearr_35109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto__))
);

return c__25507__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__25507__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25507__auto__){
return (function (){
var f__25508__auto__ = (function (){var switch__25445__auto__ = ((function (c__25507__auto__){
return (function (state_35143){
var state_val_35144 = (state_35143[(1)]);
if((state_val_35144 === (1))){
var inst_35133 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_35143__$1 = state_35143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35143__$1,(2),inst_35133);
} else {
if((state_val_35144 === (2))){
var inst_35135 = (state_35143[(2)]);
var inst_35136 = cljs.core.async.timeout.call(null,(400));
var state_35143__$1 = (function (){var statearr_35145 = state_35143;
(statearr_35145[(7)] = inst_35135);

return statearr_35145;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35143__$1,(3),inst_35136);
} else {
if((state_val_35144 === (3))){
var inst_35138 = (state_35143[(2)]);
var inst_35139 = figwheel.client.heads_up.clear.call(null);
var state_35143__$1 = (function (){var statearr_35146 = state_35143;
(statearr_35146[(8)] = inst_35138);

return statearr_35146;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35143__$1,(4),inst_35139);
} else {
if((state_val_35144 === (4))){
var inst_35141 = (state_35143[(2)]);
var state_35143__$1 = state_35143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35143__$1,inst_35141);
} else {
return null;
}
}
}
}
});})(c__25507__auto__))
;
return ((function (switch__25445__auto__,c__25507__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__25446__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__25446__auto____0 = (function (){
var statearr_35150 = [null,null,null,null,null,null,null,null,null];
(statearr_35150[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__25446__auto__);

(statearr_35150[(1)] = (1));

return statearr_35150;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__25446__auto____1 = (function (state_35143){
while(true){
var ret_value__25447__auto__ = (function (){try{while(true){
var result__25448__auto__ = switch__25445__auto__.call(null,state_35143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25448__auto__;
}
break;
}
}catch (e35151){if((e35151 instanceof Object)){
var ex__25449__auto__ = e35151;
var statearr_35152_35154 = state_35143;
(statearr_35152_35154[(5)] = ex__25449__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35155 = state_35143;
state_35143 = G__35155;
continue;
} else {
return ret_value__25447__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__25446__auto__ = function(state_35143){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__25446__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__25446__auto____1.call(this,state_35143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__25446__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__25446__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__25446__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__25446__auto__;
})()
;})(switch__25445__auto__,c__25507__auto__))
})();
var state__25509__auto__ = (function (){var statearr_35153 = f__25508__auto__.call(null);
(statearr_35153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25507__auto__);

return statearr_35153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25509__auto__);
});})(c__25507__auto__))
);

return c__25507__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map