// Compiled by ClojureScript 0.0-3291 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35170_35182 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35171_35183 = null;
var count__35172_35184 = (0);
var i__35173_35185 = (0);
while(true){
if((i__35173_35185 < count__35172_35184)){
var f_35186 = cljs.core._nth.call(null,chunk__35171_35183,i__35173_35185);
cljs.core.println.call(null,"  ",f_35186);

var G__35187 = seq__35170_35182;
var G__35188 = chunk__35171_35183;
var G__35189 = count__35172_35184;
var G__35190 = (i__35173_35185 + (1));
seq__35170_35182 = G__35187;
chunk__35171_35183 = G__35188;
count__35172_35184 = G__35189;
i__35173_35185 = G__35190;
continue;
} else {
var temp__4423__auto___35191 = cljs.core.seq.call(null,seq__35170_35182);
if(temp__4423__auto___35191){
var seq__35170_35192__$1 = temp__4423__auto___35191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35170_35192__$1)){
var c__24195__auto___35193 = cljs.core.chunk_first.call(null,seq__35170_35192__$1);
var G__35194 = cljs.core.chunk_rest.call(null,seq__35170_35192__$1);
var G__35195 = c__24195__auto___35193;
var G__35196 = cljs.core.count.call(null,c__24195__auto___35193);
var G__35197 = (0);
seq__35170_35182 = G__35194;
chunk__35171_35183 = G__35195;
count__35172_35184 = G__35196;
i__35173_35185 = G__35197;
continue;
} else {
var f_35198 = cljs.core.first.call(null,seq__35170_35192__$1);
cljs.core.println.call(null,"  ",f_35198);

var G__35199 = cljs.core.next.call(null,seq__35170_35192__$1);
var G__35200 = null;
var G__35201 = (0);
var G__35202 = (0);
seq__35170_35182 = G__35199;
chunk__35171_35183 = G__35200;
count__35172_35184 = G__35201;
i__35173_35185 = G__35202;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35203 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__23410__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__23410__auto__)){
return or__23410__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35203);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35203)))?cljs.core.second.call(null,arglists_35203):arglists_35203));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35174 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35175 = null;
var count__35176 = (0);
var i__35177 = (0);
while(true){
if((i__35177 < count__35176)){
var vec__35178 = cljs.core._nth.call(null,chunk__35175,i__35177);
var name = cljs.core.nth.call(null,vec__35178,(0),null);
var map__35179 = cljs.core.nth.call(null,vec__35178,(1),null);
var map__35179__$1 = ((cljs.core.seq_QMARK_.call(null,map__35179))?cljs.core.apply.call(null,cljs.core.hash_map,map__35179):map__35179);
var doc = cljs.core.get.call(null,map__35179__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35179__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35204 = seq__35174;
var G__35205 = chunk__35175;
var G__35206 = count__35176;
var G__35207 = (i__35177 + (1));
seq__35174 = G__35204;
chunk__35175 = G__35205;
count__35176 = G__35206;
i__35177 = G__35207;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__35174);
if(temp__4423__auto__){
var seq__35174__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35174__$1)){
var c__24195__auto__ = cljs.core.chunk_first.call(null,seq__35174__$1);
var G__35208 = cljs.core.chunk_rest.call(null,seq__35174__$1);
var G__35209 = c__24195__auto__;
var G__35210 = cljs.core.count.call(null,c__24195__auto__);
var G__35211 = (0);
seq__35174 = G__35208;
chunk__35175 = G__35209;
count__35176 = G__35210;
i__35177 = G__35211;
continue;
} else {
var vec__35180 = cljs.core.first.call(null,seq__35174__$1);
var name = cljs.core.nth.call(null,vec__35180,(0),null);
var map__35181 = cljs.core.nth.call(null,vec__35180,(1),null);
var map__35181__$1 = ((cljs.core.seq_QMARK_.call(null,map__35181))?cljs.core.apply.call(null,cljs.core.hash_map,map__35181):map__35181);
var doc = cljs.core.get.call(null,map__35181__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35181__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35212 = cljs.core.next.call(null,seq__35174__$1);
var G__35213 = null;
var G__35214 = (0);
var G__35215 = (0);
seq__35174 = G__35212;
chunk__35175 = G__35213;
count__35176 = G__35214;
i__35177 = G__35215;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map