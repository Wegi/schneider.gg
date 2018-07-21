// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30304){
var map__30305 = p__30304;
var map__30305__$1 = ((((!((map__30305 == null)))?(((((map__30305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30305):map__30305);
var m = map__30305__$1;
var n = cljs.core.get.call(null,map__30305__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30305__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30307_30329 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30308_30330 = null;
var count__30309_30331 = (0);
var i__30310_30332 = (0);
while(true){
if((i__30310_30332 < count__30309_30331)){
var f_30333 = cljs.core._nth.call(null,chunk__30308_30330,i__30310_30332);
cljs.core.println.call(null,"  ",f_30333);


var G__30334 = seq__30307_30329;
var G__30335 = chunk__30308_30330;
var G__30336 = count__30309_30331;
var G__30337 = (i__30310_30332 + (1));
seq__30307_30329 = G__30334;
chunk__30308_30330 = G__30335;
count__30309_30331 = G__30336;
i__30310_30332 = G__30337;
continue;
} else {
var temp__5457__auto___30338 = cljs.core.seq.call(null,seq__30307_30329);
if(temp__5457__auto___30338){
var seq__30307_30339__$1 = temp__5457__auto___30338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30307_30339__$1)){
var c__4351__auto___30340 = cljs.core.chunk_first.call(null,seq__30307_30339__$1);
var G__30341 = cljs.core.chunk_rest.call(null,seq__30307_30339__$1);
var G__30342 = c__4351__auto___30340;
var G__30343 = cljs.core.count.call(null,c__4351__auto___30340);
var G__30344 = (0);
seq__30307_30329 = G__30341;
chunk__30308_30330 = G__30342;
count__30309_30331 = G__30343;
i__30310_30332 = G__30344;
continue;
} else {
var f_30345 = cljs.core.first.call(null,seq__30307_30339__$1);
cljs.core.println.call(null,"  ",f_30345);


var G__30346 = cljs.core.next.call(null,seq__30307_30339__$1);
var G__30347 = null;
var G__30348 = (0);
var G__30349 = (0);
seq__30307_30329 = G__30346;
chunk__30308_30330 = G__30347;
count__30309_30331 = G__30348;
i__30310_30332 = G__30349;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30350 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30350);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30350)))?cljs.core.second.call(null,arglists_30350):arglists_30350));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__30311_30351 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30312_30352 = null;
var count__30313_30353 = (0);
var i__30314_30354 = (0);
while(true){
if((i__30314_30354 < count__30313_30353)){
var vec__30315_30355 = cljs.core._nth.call(null,chunk__30312_30352,i__30314_30354);
var name_30356 = cljs.core.nth.call(null,vec__30315_30355,(0),null);
var map__30318_30357 = cljs.core.nth.call(null,vec__30315_30355,(1),null);
var map__30318_30358__$1 = ((((!((map__30318_30357 == null)))?(((((map__30318_30357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30318_30357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30318_30357):map__30318_30357);
var doc_30359 = cljs.core.get.call(null,map__30318_30358__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30360 = cljs.core.get.call(null,map__30318_30358__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30356);

cljs.core.println.call(null," ",arglists_30360);

if(cljs.core.truth_(doc_30359)){
cljs.core.println.call(null," ",doc_30359);
} else {
}


var G__30361 = seq__30311_30351;
var G__30362 = chunk__30312_30352;
var G__30363 = count__30313_30353;
var G__30364 = (i__30314_30354 + (1));
seq__30311_30351 = G__30361;
chunk__30312_30352 = G__30362;
count__30313_30353 = G__30363;
i__30314_30354 = G__30364;
continue;
} else {
var temp__5457__auto___30365 = cljs.core.seq.call(null,seq__30311_30351);
if(temp__5457__auto___30365){
var seq__30311_30366__$1 = temp__5457__auto___30365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30311_30366__$1)){
var c__4351__auto___30367 = cljs.core.chunk_first.call(null,seq__30311_30366__$1);
var G__30368 = cljs.core.chunk_rest.call(null,seq__30311_30366__$1);
var G__30369 = c__4351__auto___30367;
var G__30370 = cljs.core.count.call(null,c__4351__auto___30367);
var G__30371 = (0);
seq__30311_30351 = G__30368;
chunk__30312_30352 = G__30369;
count__30313_30353 = G__30370;
i__30314_30354 = G__30371;
continue;
} else {
var vec__30320_30372 = cljs.core.first.call(null,seq__30311_30366__$1);
var name_30373 = cljs.core.nth.call(null,vec__30320_30372,(0),null);
var map__30323_30374 = cljs.core.nth.call(null,vec__30320_30372,(1),null);
var map__30323_30375__$1 = ((((!((map__30323_30374 == null)))?(((((map__30323_30374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30323_30374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30323_30374):map__30323_30374);
var doc_30376 = cljs.core.get.call(null,map__30323_30375__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30377 = cljs.core.get.call(null,map__30323_30375__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30373);

cljs.core.println.call(null," ",arglists_30377);

if(cljs.core.truth_(doc_30376)){
cljs.core.println.call(null," ",doc_30376);
} else {
}


var G__30378 = cljs.core.next.call(null,seq__30311_30366__$1);
var G__30379 = null;
var G__30380 = (0);
var G__30381 = (0);
seq__30311_30351 = G__30378;
chunk__30312_30352 = G__30379;
count__30313_30353 = G__30380;
i__30314_30354 = G__30381;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30325 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30326 = null;
var count__30327 = (0);
var i__30328 = (0);
while(true){
if((i__30328 < count__30327)){
var role = cljs.core._nth.call(null,chunk__30326,i__30328);
var temp__5457__auto___30382__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30382__$1)){
var spec_30383 = temp__5457__auto___30382__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30383));
} else {
}


var G__30384 = seq__30325;
var G__30385 = chunk__30326;
var G__30386 = count__30327;
var G__30387 = (i__30328 + (1));
seq__30325 = G__30384;
chunk__30326 = G__30385;
count__30327 = G__30386;
i__30328 = G__30387;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30325);
if(temp__5457__auto____$1){
var seq__30325__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30325__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30325__$1);
var G__30388 = cljs.core.chunk_rest.call(null,seq__30325__$1);
var G__30389 = c__4351__auto__;
var G__30390 = cljs.core.count.call(null,c__4351__auto__);
var G__30391 = (0);
seq__30325 = G__30388;
chunk__30326 = G__30389;
count__30327 = G__30390;
i__30328 = G__30391;
continue;
} else {
var role = cljs.core.first.call(null,seq__30325__$1);
var temp__5457__auto___30392__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30392__$2)){
var spec_30393 = temp__5457__auto___30392__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30393));
} else {
}


var G__30394 = cljs.core.next.call(null,seq__30325__$1);
var G__30395 = null;
var G__30396 = (0);
var G__30397 = (0);
seq__30325 = G__30394;
chunk__30326 = G__30395;
count__30327 = G__30396;
i__30328 = G__30397;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1531487471935
