// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30144_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30144_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30145 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30146 = null;
var count__30147 = (0);
var i__30148 = (0);
while(true){
if((i__30148 < count__30147)){
var n = cljs.core._nth.call(null,chunk__30146,i__30148);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30149 = seq__30145;
var G__30150 = chunk__30146;
var G__30151 = count__30147;
var G__30152 = (i__30148 + (1));
seq__30145 = G__30149;
chunk__30146 = G__30150;
count__30147 = G__30151;
i__30148 = G__30152;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30145);
if(temp__5457__auto__){
var seq__30145__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30145__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30145__$1);
var G__30153 = cljs.core.chunk_rest.call(null,seq__30145__$1);
var G__30154 = c__4351__auto__;
var G__30155 = cljs.core.count.call(null,c__4351__auto__);
var G__30156 = (0);
seq__30145 = G__30153;
chunk__30146 = G__30154;
count__30147 = G__30155;
i__30148 = G__30156;
continue;
} else {
var n = cljs.core.first.call(null,seq__30145__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30157 = cljs.core.next.call(null,seq__30145__$1);
var G__30158 = null;
var G__30159 = (0);
var G__30160 = (0);
seq__30145 = G__30157;
chunk__30146 = G__30158;
count__30147 = G__30159;
i__30148 = G__30160;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30161){
var vec__30162 = p__30161;
var _ = cljs.core.nth.call(null,vec__30162,(0),null);
var v = cljs.core.nth.call(null,vec__30162,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__30165){
var vec__30166 = p__30165;
var k = cljs.core.nth.call(null,vec__30166,(0),null);
var v = cljs.core.nth.call(null,vec__30166,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30178_30186 = cljs.core.seq.call(null,deps);
var chunk__30179_30187 = null;
var count__30180_30188 = (0);
var i__30181_30189 = (0);
while(true){
if((i__30181_30189 < count__30180_30188)){
var dep_30190 = cljs.core._nth.call(null,chunk__30179_30187,i__30181_30189);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_30190;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30190));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30190,(depth + (1)),state);
} else {
}


var G__30191 = seq__30178_30186;
var G__30192 = chunk__30179_30187;
var G__30193 = count__30180_30188;
var G__30194 = (i__30181_30189 + (1));
seq__30178_30186 = G__30191;
chunk__30179_30187 = G__30192;
count__30180_30188 = G__30193;
i__30181_30189 = G__30194;
continue;
} else {
var temp__5457__auto___30195 = cljs.core.seq.call(null,seq__30178_30186);
if(temp__5457__auto___30195){
var seq__30178_30196__$1 = temp__5457__auto___30195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30178_30196__$1)){
var c__4351__auto___30197 = cljs.core.chunk_first.call(null,seq__30178_30196__$1);
var G__30198 = cljs.core.chunk_rest.call(null,seq__30178_30196__$1);
var G__30199 = c__4351__auto___30197;
var G__30200 = cljs.core.count.call(null,c__4351__auto___30197);
var G__30201 = (0);
seq__30178_30186 = G__30198;
chunk__30179_30187 = G__30199;
count__30180_30188 = G__30200;
i__30181_30189 = G__30201;
continue;
} else {
var dep_30202 = cljs.core.first.call(null,seq__30178_30196__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_30202;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30202));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30202,(depth + (1)),state);
} else {
}


var G__30203 = cljs.core.next.call(null,seq__30178_30196__$1);
var G__30204 = null;
var G__30205 = (0);
var G__30206 = (0);
seq__30178_30186 = G__30203;
chunk__30179_30187 = G__30204;
count__30180_30188 = G__30205;
i__30181_30189 = G__30206;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30182){
var vec__30183 = p__30182;
var seq__30184 = cljs.core.seq.call(null,vec__30183);
var first__30185 = cljs.core.first.call(null,seq__30184);
var seq__30184__$1 = cljs.core.next.call(null,seq__30184);
var x = first__30185;
var xs = seq__30184__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30183,seq__30184,first__30185,seq__30184__$1,x,xs,get_deps__$1){
return (function (p1__30169_SHARP_){
return clojure.set.difference.call(null,p1__30169_SHARP_,x);
});})(vec__30183,seq__30184,first__30185,seq__30184__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30207 = cljs.core.seq.call(null,provides);
var chunk__30208 = null;
var count__30209 = (0);
var i__30210 = (0);
while(true){
if((i__30210 < count__30209)){
var prov = cljs.core._nth.call(null,chunk__30208,i__30210);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30211_30219 = cljs.core.seq.call(null,requires);
var chunk__30212_30220 = null;
var count__30213_30221 = (0);
var i__30214_30222 = (0);
while(true){
if((i__30214_30222 < count__30213_30221)){
var req_30223 = cljs.core._nth.call(null,chunk__30212_30220,i__30214_30222);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30223,prov);


var G__30224 = seq__30211_30219;
var G__30225 = chunk__30212_30220;
var G__30226 = count__30213_30221;
var G__30227 = (i__30214_30222 + (1));
seq__30211_30219 = G__30224;
chunk__30212_30220 = G__30225;
count__30213_30221 = G__30226;
i__30214_30222 = G__30227;
continue;
} else {
var temp__5457__auto___30228 = cljs.core.seq.call(null,seq__30211_30219);
if(temp__5457__auto___30228){
var seq__30211_30229__$1 = temp__5457__auto___30228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30211_30229__$1)){
var c__4351__auto___30230 = cljs.core.chunk_first.call(null,seq__30211_30229__$1);
var G__30231 = cljs.core.chunk_rest.call(null,seq__30211_30229__$1);
var G__30232 = c__4351__auto___30230;
var G__30233 = cljs.core.count.call(null,c__4351__auto___30230);
var G__30234 = (0);
seq__30211_30219 = G__30231;
chunk__30212_30220 = G__30232;
count__30213_30221 = G__30233;
i__30214_30222 = G__30234;
continue;
} else {
var req_30235 = cljs.core.first.call(null,seq__30211_30229__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30235,prov);


var G__30236 = cljs.core.next.call(null,seq__30211_30229__$1);
var G__30237 = null;
var G__30238 = (0);
var G__30239 = (0);
seq__30211_30219 = G__30236;
chunk__30212_30220 = G__30237;
count__30213_30221 = G__30238;
i__30214_30222 = G__30239;
continue;
}
} else {
}
}
break;
}


var G__30240 = seq__30207;
var G__30241 = chunk__30208;
var G__30242 = count__30209;
var G__30243 = (i__30210 + (1));
seq__30207 = G__30240;
chunk__30208 = G__30241;
count__30209 = G__30242;
i__30210 = G__30243;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30207);
if(temp__5457__auto__){
var seq__30207__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30207__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__30207__$1);
var G__30244 = cljs.core.chunk_rest.call(null,seq__30207__$1);
var G__30245 = c__4351__auto__;
var G__30246 = cljs.core.count.call(null,c__4351__auto__);
var G__30247 = (0);
seq__30207 = G__30244;
chunk__30208 = G__30245;
count__30209 = G__30246;
i__30210 = G__30247;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30207__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30215_30248 = cljs.core.seq.call(null,requires);
var chunk__30216_30249 = null;
var count__30217_30250 = (0);
var i__30218_30251 = (0);
while(true){
if((i__30218_30251 < count__30217_30250)){
var req_30252 = cljs.core._nth.call(null,chunk__30216_30249,i__30218_30251);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30252,prov);


var G__30253 = seq__30215_30248;
var G__30254 = chunk__30216_30249;
var G__30255 = count__30217_30250;
var G__30256 = (i__30218_30251 + (1));
seq__30215_30248 = G__30253;
chunk__30216_30249 = G__30254;
count__30217_30250 = G__30255;
i__30218_30251 = G__30256;
continue;
} else {
var temp__5457__auto___30257__$1 = cljs.core.seq.call(null,seq__30215_30248);
if(temp__5457__auto___30257__$1){
var seq__30215_30258__$1 = temp__5457__auto___30257__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30215_30258__$1)){
var c__4351__auto___30259 = cljs.core.chunk_first.call(null,seq__30215_30258__$1);
var G__30260 = cljs.core.chunk_rest.call(null,seq__30215_30258__$1);
var G__30261 = c__4351__auto___30259;
var G__30262 = cljs.core.count.call(null,c__4351__auto___30259);
var G__30263 = (0);
seq__30215_30248 = G__30260;
chunk__30216_30249 = G__30261;
count__30217_30250 = G__30262;
i__30218_30251 = G__30263;
continue;
} else {
var req_30264 = cljs.core.first.call(null,seq__30215_30258__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30264,prov);


var G__30265 = cljs.core.next.call(null,seq__30215_30258__$1);
var G__30266 = null;
var G__30267 = (0);
var G__30268 = (0);
seq__30215_30248 = G__30265;
chunk__30216_30249 = G__30266;
count__30217_30250 = G__30267;
i__30218_30251 = G__30268;
continue;
}
} else {
}
}
break;
}


var G__30269 = cljs.core.next.call(null,seq__30207__$1);
var G__30270 = null;
var G__30271 = (0);
var G__30272 = (0);
seq__30207 = G__30269;
chunk__30208 = G__30270;
count__30209 = G__30271;
i__30210 = G__30272;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30273_30277 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30274_30278 = null;
var count__30275_30279 = (0);
var i__30276_30280 = (0);
while(true){
if((i__30276_30280 < count__30275_30279)){
var ns_30281 = cljs.core._nth.call(null,chunk__30274_30278,i__30276_30280);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30281);


var G__30282 = seq__30273_30277;
var G__30283 = chunk__30274_30278;
var G__30284 = count__30275_30279;
var G__30285 = (i__30276_30280 + (1));
seq__30273_30277 = G__30282;
chunk__30274_30278 = G__30283;
count__30275_30279 = G__30284;
i__30276_30280 = G__30285;
continue;
} else {
var temp__5457__auto___30286 = cljs.core.seq.call(null,seq__30273_30277);
if(temp__5457__auto___30286){
var seq__30273_30287__$1 = temp__5457__auto___30286;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30273_30287__$1)){
var c__4351__auto___30288 = cljs.core.chunk_first.call(null,seq__30273_30287__$1);
var G__30289 = cljs.core.chunk_rest.call(null,seq__30273_30287__$1);
var G__30290 = c__4351__auto___30288;
var G__30291 = cljs.core.count.call(null,c__4351__auto___30288);
var G__30292 = (0);
seq__30273_30277 = G__30289;
chunk__30274_30278 = G__30290;
count__30275_30279 = G__30291;
i__30276_30280 = G__30292;
continue;
} else {
var ns_30293 = cljs.core.first.call(null,seq__30273_30287__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30293);


var G__30294 = cljs.core.next.call(null,seq__30273_30287__$1);
var G__30295 = null;
var G__30296 = (0);
var G__30297 = (0);
seq__30273_30277 = G__30294;
chunk__30274_30278 = G__30295;
count__30275_30279 = G__30296;
i__30276_30280 = G__30297;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30298__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30298 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30299__i = 0, G__30299__a = new Array(arguments.length -  0);
while (G__30299__i < G__30299__a.length) {G__30299__a[G__30299__i] = arguments[G__30299__i + 0]; ++G__30299__i;}
  args = new cljs.core.IndexedSeq(G__30299__a,0,null);
} 
return G__30298__delegate.call(this,args);};
G__30298.cljs$lang$maxFixedArity = 0;
G__30298.cljs$lang$applyTo = (function (arglist__30300){
var args = cljs.core.seq(arglist__30300);
return G__30298__delegate(args);
});
G__30298.cljs$core$IFn$_invoke$arity$variadic = G__30298__delegate;
return G__30298;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__30301_SHARP_,p2__30302_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30301_SHARP_)].join('')),p2__30302_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__30303_SHARP_,p2__30304_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30303_SHARP_)].join(''),p2__30304_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30305 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30305.addCallback(((function (G__30305){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30305))
);

G__30305.addErrback(((function (G__30305){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30305))
);

return G__30305;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30306){if((e30306 instanceof Error)){
var e = e30306;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30306;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30307){if((e30307 instanceof Error)){
var e = e30307;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30307;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30308 = cljs.core._EQ_;
var expr__30309 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30308.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30309))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30308.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30309))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30308.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30309))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30308,expr__30309){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30308,expr__30309))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30311,callback){
var map__30312 = p__30311;
var map__30312__$1 = ((((!((map__30312 == null)))?(((((map__30312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30312):map__30312);
var file_msg = map__30312__$1;
var request_url = cljs.core.get.call(null,map__30312__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30312,map__30312__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30312,map__30312__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto__){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto__){
return (function (state_30350){
var state_val_30351 = (state_30350[(1)]);
if((state_val_30351 === (7))){
var inst_30346 = (state_30350[(2)]);
var state_30350__$1 = state_30350;
var statearr_30352_30378 = state_30350__$1;
(statearr_30352_30378[(2)] = inst_30346);

(statearr_30352_30378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (1))){
var state_30350__$1 = state_30350;
var statearr_30353_30379 = state_30350__$1;
(statearr_30353_30379[(2)] = null);

(statearr_30353_30379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (4))){
var inst_30316 = (state_30350[(7)]);
var inst_30316__$1 = (state_30350[(2)]);
var state_30350__$1 = (function (){var statearr_30354 = state_30350;
(statearr_30354[(7)] = inst_30316__$1);

return statearr_30354;
})();
if(cljs.core.truth_(inst_30316__$1)){
var statearr_30355_30380 = state_30350__$1;
(statearr_30355_30380[(1)] = (5));

} else {
var statearr_30356_30381 = state_30350__$1;
(statearr_30356_30381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (15))){
var inst_30329 = (state_30350[(8)]);
var inst_30331 = (state_30350[(9)]);
var inst_30333 = inst_30331.call(null,inst_30329);
var state_30350__$1 = state_30350;
var statearr_30357_30382 = state_30350__$1;
(statearr_30357_30382[(2)] = inst_30333);

(statearr_30357_30382[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (13))){
var inst_30340 = (state_30350[(2)]);
var state_30350__$1 = state_30350;
var statearr_30358_30383 = state_30350__$1;
(statearr_30358_30383[(2)] = inst_30340);

(statearr_30358_30383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (6))){
var state_30350__$1 = state_30350;
var statearr_30359_30384 = state_30350__$1;
(statearr_30359_30384[(2)] = null);

(statearr_30359_30384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (17))){
var inst_30337 = (state_30350[(2)]);
var state_30350__$1 = state_30350;
var statearr_30360_30385 = state_30350__$1;
(statearr_30360_30385[(2)] = inst_30337);

(statearr_30360_30385[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (3))){
var inst_30348 = (state_30350[(2)]);
var state_30350__$1 = state_30350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30350__$1,inst_30348);
} else {
if((state_val_30351 === (12))){
var state_30350__$1 = state_30350;
var statearr_30361_30386 = state_30350__$1;
(statearr_30361_30386[(2)] = null);

(statearr_30361_30386[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (2))){
var state_30350__$1 = state_30350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30350__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30351 === (11))){
var inst_30321 = (state_30350[(10)]);
var inst_30327 = figwheel.client.file_reloading.blocking_load.call(null,inst_30321);
var state_30350__$1 = state_30350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30350__$1,(14),inst_30327);
} else {
if((state_val_30351 === (9))){
var inst_30321 = (state_30350[(10)]);
var state_30350__$1 = state_30350;
if(cljs.core.truth_(inst_30321)){
var statearr_30362_30387 = state_30350__$1;
(statearr_30362_30387[(1)] = (11));

} else {
var statearr_30363_30388 = state_30350__$1;
(statearr_30363_30388[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (5))){
var inst_30322 = (state_30350[(11)]);
var inst_30316 = (state_30350[(7)]);
var inst_30321 = cljs.core.nth.call(null,inst_30316,(0),null);
var inst_30322__$1 = cljs.core.nth.call(null,inst_30316,(1),null);
var state_30350__$1 = (function (){var statearr_30364 = state_30350;
(statearr_30364[(11)] = inst_30322__$1);

(statearr_30364[(10)] = inst_30321);

return statearr_30364;
})();
if(cljs.core.truth_(inst_30322__$1)){
var statearr_30365_30389 = state_30350__$1;
(statearr_30365_30389[(1)] = (8));

} else {
var statearr_30366_30390 = state_30350__$1;
(statearr_30366_30390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (14))){
var inst_30321 = (state_30350[(10)]);
var inst_30331 = (state_30350[(9)]);
var inst_30329 = (state_30350[(2)]);
var inst_30330 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30331__$1 = cljs.core.get.call(null,inst_30330,inst_30321);
var state_30350__$1 = (function (){var statearr_30367 = state_30350;
(statearr_30367[(8)] = inst_30329);

(statearr_30367[(9)] = inst_30331__$1);

return statearr_30367;
})();
if(cljs.core.truth_(inst_30331__$1)){
var statearr_30368_30391 = state_30350__$1;
(statearr_30368_30391[(1)] = (15));

} else {
var statearr_30369_30392 = state_30350__$1;
(statearr_30369_30392[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (16))){
var inst_30329 = (state_30350[(8)]);
var inst_30335 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30329);
var state_30350__$1 = state_30350;
var statearr_30370_30393 = state_30350__$1;
(statearr_30370_30393[(2)] = inst_30335);

(statearr_30370_30393[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (10))){
var inst_30342 = (state_30350[(2)]);
var state_30350__$1 = (function (){var statearr_30371 = state_30350;
(statearr_30371[(12)] = inst_30342);

return statearr_30371;
})();
var statearr_30372_30394 = state_30350__$1;
(statearr_30372_30394[(2)] = null);

(statearr_30372_30394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30351 === (8))){
var inst_30322 = (state_30350[(11)]);
var inst_30324 = eval(inst_30322);
var state_30350__$1 = state_30350;
var statearr_30373_30395 = state_30350__$1;
(statearr_30373_30395[(2)] = inst_30324);

(statearr_30373_30395[(1)] = (10));


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
});})(c__28035__auto__))
;
return ((function (switch__25626__auto__,c__28035__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25627__auto__ = null;
var figwheel$client$file_reloading$state_machine__25627__auto____0 = (function (){
var statearr_30374 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30374[(0)] = figwheel$client$file_reloading$state_machine__25627__auto__);

(statearr_30374[(1)] = (1));

return statearr_30374;
});
var figwheel$client$file_reloading$state_machine__25627__auto____1 = (function (state_30350){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_30350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e30375){if((e30375 instanceof Object)){
var ex__25630__auto__ = e30375;
var statearr_30376_30396 = state_30350;
(statearr_30376_30396[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30397 = state_30350;
state_30350 = G__30397;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25627__auto__ = function(state_30350){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25627__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25627__auto____1.call(this,state_30350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25627__auto____0;
figwheel$client$file_reloading$state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25627__auto____1;
return figwheel$client$file_reloading$state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto__))
})();
var state__28037__auto__ = (function (){var statearr_30377 = f__28036__auto__.call(null);
(statearr_30377[(6)] = c__28035__auto__);

return statearr_30377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto__))
);

return c__28035__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30399 = arguments.length;
switch (G__30399) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30401,callback){
var map__30402 = p__30401;
var map__30402__$1 = ((((!((map__30402 == null)))?(((((map__30402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30402):map__30402);
var file_msg = map__30402__$1;
var namespace = cljs.core.get.call(null,map__30402__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30402,map__30402__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30402,map__30402__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30404){
var map__30405 = p__30404;
var map__30405__$1 = ((((!((map__30405 == null)))?(((((map__30405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30405):map__30405);
var file_msg = map__30405__$1;
var namespace = cljs.core.get.call(null,map__30405__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30407){
var map__30408 = p__30407;
var map__30408__$1 = ((((!((map__30408 == null)))?(((((map__30408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30408):map__30408);
var file_msg = map__30408__$1;
var namespace = cljs.core.get.call(null,map__30408__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30410,callback){
var map__30411 = p__30410;
var map__30411__$1 = ((((!((map__30411 == null)))?(((((map__30411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30411):map__30411);
var file_msg = map__30411__$1;
var request_url = cljs.core.get.call(null,map__30411__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30411__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28035__auto___30461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___30461,out){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___30461,out){
return (function (state_30446){
var state_val_30447 = (state_30446[(1)]);
if((state_val_30447 === (1))){
var inst_30420 = cljs.core.seq.call(null,files);
var inst_30421 = cljs.core.first.call(null,inst_30420);
var inst_30422 = cljs.core.next.call(null,inst_30420);
var inst_30423 = files;
var state_30446__$1 = (function (){var statearr_30448 = state_30446;
(statearr_30448[(7)] = inst_30423);

(statearr_30448[(8)] = inst_30422);

(statearr_30448[(9)] = inst_30421);

return statearr_30448;
})();
var statearr_30449_30462 = state_30446__$1;
(statearr_30449_30462[(2)] = null);

(statearr_30449_30462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (2))){
var inst_30423 = (state_30446[(7)]);
var inst_30429 = (state_30446[(10)]);
var inst_30428 = cljs.core.seq.call(null,inst_30423);
var inst_30429__$1 = cljs.core.first.call(null,inst_30428);
var inst_30430 = cljs.core.next.call(null,inst_30428);
var inst_30431 = (inst_30429__$1 == null);
var inst_30432 = cljs.core.not.call(null,inst_30431);
var state_30446__$1 = (function (){var statearr_30450 = state_30446;
(statearr_30450[(11)] = inst_30430);

(statearr_30450[(10)] = inst_30429__$1);

return statearr_30450;
})();
if(inst_30432){
var statearr_30451_30463 = state_30446__$1;
(statearr_30451_30463[(1)] = (4));

} else {
var statearr_30452_30464 = state_30446__$1;
(statearr_30452_30464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (3))){
var inst_30444 = (state_30446[(2)]);
var state_30446__$1 = state_30446;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30446__$1,inst_30444);
} else {
if((state_val_30447 === (4))){
var inst_30429 = (state_30446[(10)]);
var inst_30434 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30429);
var state_30446__$1 = state_30446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30446__$1,(7),inst_30434);
} else {
if((state_val_30447 === (5))){
var inst_30440 = cljs.core.async.close_BANG_.call(null,out);
var state_30446__$1 = state_30446;
var statearr_30453_30465 = state_30446__$1;
(statearr_30453_30465[(2)] = inst_30440);

(statearr_30453_30465[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (6))){
var inst_30442 = (state_30446[(2)]);
var state_30446__$1 = state_30446;
var statearr_30454_30466 = state_30446__$1;
(statearr_30454_30466[(2)] = inst_30442);

(statearr_30454_30466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30447 === (7))){
var inst_30430 = (state_30446[(11)]);
var inst_30436 = (state_30446[(2)]);
var inst_30437 = cljs.core.async.put_BANG_.call(null,out,inst_30436);
var inst_30423 = inst_30430;
var state_30446__$1 = (function (){var statearr_30455 = state_30446;
(statearr_30455[(7)] = inst_30423);

(statearr_30455[(12)] = inst_30437);

return statearr_30455;
})();
var statearr_30456_30467 = state_30446__$1;
(statearr_30456_30467[(2)] = null);

(statearr_30456_30467[(1)] = (2));


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
});})(c__28035__auto___30461,out))
;
return ((function (switch__25626__auto__,c__28035__auto___30461,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25627__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25627__auto____0 = (function (){
var statearr_30457 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30457[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25627__auto__);

(statearr_30457[(1)] = (1));

return statearr_30457;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25627__auto____1 = (function (state_30446){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_30446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e30458){if((e30458 instanceof Object)){
var ex__25630__auto__ = e30458;
var statearr_30459_30468 = state_30446;
(statearr_30459_30468[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30469 = state_30446;
state_30446 = G__30469;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25627__auto__ = function(state_30446){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25627__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25627__auto____1.call(this,state_30446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25627__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25627__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___30461,out))
})();
var state__28037__auto__ = (function (){var statearr_30460 = f__28036__auto__.call(null);
(statearr_30460[(6)] = c__28035__auto___30461);

return statearr_30460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___30461,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30470,opts){
var map__30471 = p__30470;
var map__30471__$1 = ((((!((map__30471 == null)))?(((((map__30471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30471):map__30471);
var eval_body = cljs.core.get.call(null,map__30471__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30471__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30473){var e = e30473;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30474_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30474_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30475){
var vec__30476 = p__30475;
var k = cljs.core.nth.call(null,vec__30476,(0),null);
var v = cljs.core.nth.call(null,vec__30476,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30479){
var vec__30480 = p__30479;
var k = cljs.core.nth.call(null,vec__30480,(0),null);
var v = cljs.core.nth.call(null,vec__30480,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30486,p__30487){
var map__30488 = p__30486;
var map__30488__$1 = ((((!((map__30488 == null)))?(((((map__30488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30488):map__30488);
var opts = map__30488__$1;
var before_jsload = cljs.core.get.call(null,map__30488__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30488__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30488__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30489 = p__30487;
var map__30489__$1 = ((((!((map__30489 == null)))?(((((map__30489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30489):map__30489);
var msg = map__30489__$1;
var files = cljs.core.get.call(null,map__30489__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30489__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30489__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30643){
var state_val_30644 = (state_30643[(1)]);
if((state_val_30644 === (7))){
var inst_30503 = (state_30643[(7)]);
var inst_30504 = (state_30643[(8)]);
var inst_30505 = (state_30643[(9)]);
var inst_30506 = (state_30643[(10)]);
var inst_30511 = cljs.core._nth.call(null,inst_30504,inst_30506);
var inst_30512 = figwheel.client.file_reloading.eval_body.call(null,inst_30511,opts);
var inst_30513 = (inst_30506 + (1));
var tmp30645 = inst_30503;
var tmp30646 = inst_30504;
var tmp30647 = inst_30505;
var inst_30503__$1 = tmp30645;
var inst_30504__$1 = tmp30646;
var inst_30505__$1 = tmp30647;
var inst_30506__$1 = inst_30513;
var state_30643__$1 = (function (){var statearr_30648 = state_30643;
(statearr_30648[(7)] = inst_30503__$1);

(statearr_30648[(8)] = inst_30504__$1);

(statearr_30648[(11)] = inst_30512);

(statearr_30648[(9)] = inst_30505__$1);

(statearr_30648[(10)] = inst_30506__$1);

return statearr_30648;
})();
var statearr_30649_30732 = state_30643__$1;
(statearr_30649_30732[(2)] = null);

(statearr_30649_30732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (20))){
var inst_30546 = (state_30643[(12)]);
var inst_30554 = figwheel.client.file_reloading.sort_files.call(null,inst_30546);
var state_30643__$1 = state_30643;
var statearr_30650_30733 = state_30643__$1;
(statearr_30650_30733[(2)] = inst_30554);

(statearr_30650_30733[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (27))){
var state_30643__$1 = state_30643;
var statearr_30651_30734 = state_30643__$1;
(statearr_30651_30734[(2)] = null);

(statearr_30651_30734[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (1))){
var inst_30495 = (state_30643[(13)]);
var inst_30492 = before_jsload.call(null,files);
var inst_30493 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30494 = (function (){return ((function (inst_30495,inst_30492,inst_30493,state_val_30644,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30483_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30483_SHARP_);
});
;})(inst_30495,inst_30492,inst_30493,state_val_30644,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30495__$1 = cljs.core.filter.call(null,inst_30494,files);
var inst_30496 = cljs.core.not_empty.call(null,inst_30495__$1);
var state_30643__$1 = (function (){var statearr_30652 = state_30643;
(statearr_30652[(14)] = inst_30492);

(statearr_30652[(13)] = inst_30495__$1);

(statearr_30652[(15)] = inst_30493);

return statearr_30652;
})();
if(cljs.core.truth_(inst_30496)){
var statearr_30653_30735 = state_30643__$1;
(statearr_30653_30735[(1)] = (2));

} else {
var statearr_30654_30736 = state_30643__$1;
(statearr_30654_30736[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (24))){
var state_30643__$1 = state_30643;
var statearr_30655_30737 = state_30643__$1;
(statearr_30655_30737[(2)] = null);

(statearr_30655_30737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (39))){
var inst_30596 = (state_30643[(16)]);
var state_30643__$1 = state_30643;
var statearr_30656_30738 = state_30643__$1;
(statearr_30656_30738[(2)] = inst_30596);

(statearr_30656_30738[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (46))){
var inst_30638 = (state_30643[(2)]);
var state_30643__$1 = state_30643;
var statearr_30657_30739 = state_30643__$1;
(statearr_30657_30739[(2)] = inst_30638);

(statearr_30657_30739[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (4))){
var inst_30540 = (state_30643[(2)]);
var inst_30541 = cljs.core.List.EMPTY;
var inst_30542 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30541);
var inst_30543 = (function (){return ((function (inst_30540,inst_30541,inst_30542,state_val_30644,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30484_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30484_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30484_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30484_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_30540,inst_30541,inst_30542,state_val_30644,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30544 = cljs.core.filter.call(null,inst_30543,files);
var inst_30545 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30546 = cljs.core.concat.call(null,inst_30544,inst_30545);
var state_30643__$1 = (function (){var statearr_30658 = state_30643;
(statearr_30658[(17)] = inst_30542);

(statearr_30658[(12)] = inst_30546);

(statearr_30658[(18)] = inst_30540);

return statearr_30658;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30659_30740 = state_30643__$1;
(statearr_30659_30740[(1)] = (16));

} else {
var statearr_30660_30741 = state_30643__$1;
(statearr_30660_30741[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (15))){
var inst_30530 = (state_30643[(2)]);
var state_30643__$1 = state_30643;
var statearr_30661_30742 = state_30643__$1;
(statearr_30661_30742[(2)] = inst_30530);

(statearr_30661_30742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (21))){
var inst_30556 = (state_30643[(19)]);
var inst_30556__$1 = (state_30643[(2)]);
var inst_30557 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30556__$1);
var state_30643__$1 = (function (){var statearr_30662 = state_30643;
(statearr_30662[(19)] = inst_30556__$1);

return statearr_30662;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30643__$1,(22),inst_30557);
} else {
if((state_val_30644 === (31))){
var inst_30641 = (state_30643[(2)]);
var state_30643__$1 = state_30643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30643__$1,inst_30641);
} else {
if((state_val_30644 === (32))){
var inst_30596 = (state_30643[(16)]);
var inst_30601 = inst_30596.cljs$lang$protocol_mask$partition0$;
var inst_30602 = (inst_30601 & (64));
var inst_30603 = inst_30596.cljs$core$ISeq$;
var inst_30604 = (cljs.core.PROTOCOL_SENTINEL === inst_30603);
var inst_30605 = ((inst_30602) || (inst_30604));
var state_30643__$1 = state_30643;
if(cljs.core.truth_(inst_30605)){
var statearr_30663_30743 = state_30643__$1;
(statearr_30663_30743[(1)] = (35));

} else {
var statearr_30664_30744 = state_30643__$1;
(statearr_30664_30744[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (40))){
var inst_30618 = (state_30643[(20)]);
var inst_30617 = (state_30643[(2)]);
var inst_30618__$1 = cljs.core.get.call(null,inst_30617,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30619 = cljs.core.get.call(null,inst_30617,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30620 = cljs.core.not_empty.call(null,inst_30618__$1);
var state_30643__$1 = (function (){var statearr_30665 = state_30643;
(statearr_30665[(21)] = inst_30619);

(statearr_30665[(20)] = inst_30618__$1);

return statearr_30665;
})();
if(cljs.core.truth_(inst_30620)){
var statearr_30666_30745 = state_30643__$1;
(statearr_30666_30745[(1)] = (41));

} else {
var statearr_30667_30746 = state_30643__$1;
(statearr_30667_30746[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (33))){
var state_30643__$1 = state_30643;
var statearr_30668_30747 = state_30643__$1;
(statearr_30668_30747[(2)] = false);

(statearr_30668_30747[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (13))){
var inst_30516 = (state_30643[(22)]);
var inst_30520 = cljs.core.chunk_first.call(null,inst_30516);
var inst_30521 = cljs.core.chunk_rest.call(null,inst_30516);
var inst_30522 = cljs.core.count.call(null,inst_30520);
var inst_30503 = inst_30521;
var inst_30504 = inst_30520;
var inst_30505 = inst_30522;
var inst_30506 = (0);
var state_30643__$1 = (function (){var statearr_30669 = state_30643;
(statearr_30669[(7)] = inst_30503);

(statearr_30669[(8)] = inst_30504);

(statearr_30669[(9)] = inst_30505);

(statearr_30669[(10)] = inst_30506);

return statearr_30669;
})();
var statearr_30670_30748 = state_30643__$1;
(statearr_30670_30748[(2)] = null);

(statearr_30670_30748[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (22))){
var inst_30564 = (state_30643[(23)]);
var inst_30556 = (state_30643[(19)]);
var inst_30559 = (state_30643[(24)]);
var inst_30560 = (state_30643[(25)]);
var inst_30559__$1 = (state_30643[(2)]);
var inst_30560__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30559__$1);
var inst_30561 = (function (){var all_files = inst_30556;
var res_SINGLEQUOTE_ = inst_30559__$1;
var res = inst_30560__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30564,inst_30556,inst_30559,inst_30560,inst_30559__$1,inst_30560__$1,state_val_30644,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30485_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30485_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30564,inst_30556,inst_30559,inst_30560,inst_30559__$1,inst_30560__$1,state_val_30644,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30562 = cljs.core.filter.call(null,inst_30561,inst_30559__$1);
var inst_30563 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30564__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30563);
var inst_30565 = cljs.core.not_empty.call(null,inst_30564__$1);
var state_30643__$1 = (function (){var statearr_30671 = state_30643;
(statearr_30671[(26)] = inst_30562);

(statearr_30671[(23)] = inst_30564__$1);

(statearr_30671[(24)] = inst_30559__$1);

(statearr_30671[(25)] = inst_30560__$1);

return statearr_30671;
})();
if(cljs.core.truth_(inst_30565)){
var statearr_30672_30749 = state_30643__$1;
(statearr_30672_30749[(1)] = (23));

} else {
var statearr_30673_30750 = state_30643__$1;
(statearr_30673_30750[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (36))){
var state_30643__$1 = state_30643;
var statearr_30674_30751 = state_30643__$1;
(statearr_30674_30751[(2)] = false);

(statearr_30674_30751[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (41))){
var inst_30618 = (state_30643[(20)]);
var inst_30622 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30623 = cljs.core.map.call(null,inst_30622,inst_30618);
var inst_30624 = cljs.core.pr_str.call(null,inst_30623);
var inst_30625 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30624)].join('');
var inst_30626 = figwheel.client.utils.log.call(null,inst_30625);
var state_30643__$1 = state_30643;
var statearr_30675_30752 = state_30643__$1;
(statearr_30675_30752[(2)] = inst_30626);

(statearr_30675_30752[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (43))){
var inst_30619 = (state_30643[(21)]);
var inst_30629 = (state_30643[(2)]);
var inst_30630 = cljs.core.not_empty.call(null,inst_30619);
var state_30643__$1 = (function (){var statearr_30676 = state_30643;
(statearr_30676[(27)] = inst_30629);

return statearr_30676;
})();
if(cljs.core.truth_(inst_30630)){
var statearr_30677_30753 = state_30643__$1;
(statearr_30677_30753[(1)] = (44));

} else {
var statearr_30678_30754 = state_30643__$1;
(statearr_30678_30754[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (29))){
var inst_30596 = (state_30643[(16)]);
var inst_30562 = (state_30643[(26)]);
var inst_30564 = (state_30643[(23)]);
var inst_30556 = (state_30643[(19)]);
var inst_30559 = (state_30643[(24)]);
var inst_30560 = (state_30643[(25)]);
var inst_30592 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30595 = (function (){var all_files = inst_30556;
var res_SINGLEQUOTE_ = inst_30559;
var res = inst_30560;
var files_not_loaded = inst_30562;
var dependencies_that_loaded = inst_30564;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30596,inst_30562,inst_30564,inst_30556,inst_30559,inst_30560,inst_30592,state_val_30644,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30594){
var map__30679 = p__30594;
var map__30679__$1 = ((((!((map__30679 == null)))?(((((map__30679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30679):map__30679);
var namespace = cljs.core.get.call(null,map__30679__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30596,inst_30562,inst_30564,inst_30556,inst_30559,inst_30560,inst_30592,state_val_30644,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30596__$1 = cljs.core.group_by.call(null,inst_30595,inst_30562);
var inst_30598 = (inst_30596__$1 == null);
var inst_30599 = cljs.core.not.call(null,inst_30598);
var state_30643__$1 = (function (){var statearr_30681 = state_30643;
(statearr_30681[(16)] = inst_30596__$1);

(statearr_30681[(28)] = inst_30592);

return statearr_30681;
})();
if(inst_30599){
var statearr_30682_30755 = state_30643__$1;
(statearr_30682_30755[(1)] = (32));

} else {
var statearr_30683_30756 = state_30643__$1;
(statearr_30683_30756[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (44))){
var inst_30619 = (state_30643[(21)]);
var inst_30632 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30619);
var inst_30633 = cljs.core.pr_str.call(null,inst_30632);
var inst_30634 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30633)].join('');
var inst_30635 = figwheel.client.utils.log.call(null,inst_30634);
var state_30643__$1 = state_30643;
var statearr_30684_30757 = state_30643__$1;
(statearr_30684_30757[(2)] = inst_30635);

(statearr_30684_30757[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (6))){
var inst_30537 = (state_30643[(2)]);
var state_30643__$1 = state_30643;
var statearr_30685_30758 = state_30643__$1;
(statearr_30685_30758[(2)] = inst_30537);

(statearr_30685_30758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (28))){
var inst_30562 = (state_30643[(26)]);
var inst_30589 = (state_30643[(2)]);
var inst_30590 = cljs.core.not_empty.call(null,inst_30562);
var state_30643__$1 = (function (){var statearr_30686 = state_30643;
(statearr_30686[(29)] = inst_30589);

return statearr_30686;
})();
if(cljs.core.truth_(inst_30590)){
var statearr_30687_30759 = state_30643__$1;
(statearr_30687_30759[(1)] = (29));

} else {
var statearr_30688_30760 = state_30643__$1;
(statearr_30688_30760[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (25))){
var inst_30560 = (state_30643[(25)]);
var inst_30576 = (state_30643[(2)]);
var inst_30577 = cljs.core.not_empty.call(null,inst_30560);
var state_30643__$1 = (function (){var statearr_30689 = state_30643;
(statearr_30689[(30)] = inst_30576);

return statearr_30689;
})();
if(cljs.core.truth_(inst_30577)){
var statearr_30690_30761 = state_30643__$1;
(statearr_30690_30761[(1)] = (26));

} else {
var statearr_30691_30762 = state_30643__$1;
(statearr_30691_30762[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (34))){
var inst_30612 = (state_30643[(2)]);
var state_30643__$1 = state_30643;
if(cljs.core.truth_(inst_30612)){
var statearr_30692_30763 = state_30643__$1;
(statearr_30692_30763[(1)] = (38));

} else {
var statearr_30693_30764 = state_30643__$1;
(statearr_30693_30764[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (17))){
var state_30643__$1 = state_30643;
var statearr_30694_30765 = state_30643__$1;
(statearr_30694_30765[(2)] = recompile_dependents);

(statearr_30694_30765[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (3))){
var state_30643__$1 = state_30643;
var statearr_30695_30766 = state_30643__$1;
(statearr_30695_30766[(2)] = null);

(statearr_30695_30766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (12))){
var inst_30533 = (state_30643[(2)]);
var state_30643__$1 = state_30643;
var statearr_30696_30767 = state_30643__$1;
(statearr_30696_30767[(2)] = inst_30533);

(statearr_30696_30767[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (2))){
var inst_30495 = (state_30643[(13)]);
var inst_30502 = cljs.core.seq.call(null,inst_30495);
var inst_30503 = inst_30502;
var inst_30504 = null;
var inst_30505 = (0);
var inst_30506 = (0);
var state_30643__$1 = (function (){var statearr_30697 = state_30643;
(statearr_30697[(7)] = inst_30503);

(statearr_30697[(8)] = inst_30504);

(statearr_30697[(9)] = inst_30505);

(statearr_30697[(10)] = inst_30506);

return statearr_30697;
})();
var statearr_30698_30768 = state_30643__$1;
(statearr_30698_30768[(2)] = null);

(statearr_30698_30768[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (23))){
var inst_30562 = (state_30643[(26)]);
var inst_30564 = (state_30643[(23)]);
var inst_30556 = (state_30643[(19)]);
var inst_30559 = (state_30643[(24)]);
var inst_30560 = (state_30643[(25)]);
var inst_30567 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30569 = (function (){var all_files = inst_30556;
var res_SINGLEQUOTE_ = inst_30559;
var res = inst_30560;
var files_not_loaded = inst_30562;
var dependencies_that_loaded = inst_30564;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30562,inst_30564,inst_30556,inst_30559,inst_30560,inst_30567,state_val_30644,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30568){
var map__30699 = p__30568;
var map__30699__$1 = ((((!((map__30699 == null)))?(((((map__30699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30699):map__30699);
var request_url = cljs.core.get.call(null,map__30699__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30562,inst_30564,inst_30556,inst_30559,inst_30560,inst_30567,state_val_30644,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30570 = cljs.core.reverse.call(null,inst_30564);
var inst_30571 = cljs.core.map.call(null,inst_30569,inst_30570);
var inst_30572 = cljs.core.pr_str.call(null,inst_30571);
var inst_30573 = figwheel.client.utils.log.call(null,inst_30572);
var state_30643__$1 = (function (){var statearr_30701 = state_30643;
(statearr_30701[(31)] = inst_30567);

return statearr_30701;
})();
var statearr_30702_30769 = state_30643__$1;
(statearr_30702_30769[(2)] = inst_30573);

(statearr_30702_30769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (35))){
var state_30643__$1 = state_30643;
var statearr_30703_30770 = state_30643__$1;
(statearr_30703_30770[(2)] = true);

(statearr_30703_30770[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (19))){
var inst_30546 = (state_30643[(12)]);
var inst_30552 = figwheel.client.file_reloading.expand_files.call(null,inst_30546);
var state_30643__$1 = state_30643;
var statearr_30704_30771 = state_30643__$1;
(statearr_30704_30771[(2)] = inst_30552);

(statearr_30704_30771[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (11))){
var state_30643__$1 = state_30643;
var statearr_30705_30772 = state_30643__$1;
(statearr_30705_30772[(2)] = null);

(statearr_30705_30772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (9))){
var inst_30535 = (state_30643[(2)]);
var state_30643__$1 = state_30643;
var statearr_30706_30773 = state_30643__$1;
(statearr_30706_30773[(2)] = inst_30535);

(statearr_30706_30773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (5))){
var inst_30505 = (state_30643[(9)]);
var inst_30506 = (state_30643[(10)]);
var inst_30508 = (inst_30506 < inst_30505);
var inst_30509 = inst_30508;
var state_30643__$1 = state_30643;
if(cljs.core.truth_(inst_30509)){
var statearr_30707_30774 = state_30643__$1;
(statearr_30707_30774[(1)] = (7));

} else {
var statearr_30708_30775 = state_30643__$1;
(statearr_30708_30775[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (14))){
var inst_30516 = (state_30643[(22)]);
var inst_30525 = cljs.core.first.call(null,inst_30516);
var inst_30526 = figwheel.client.file_reloading.eval_body.call(null,inst_30525,opts);
var inst_30527 = cljs.core.next.call(null,inst_30516);
var inst_30503 = inst_30527;
var inst_30504 = null;
var inst_30505 = (0);
var inst_30506 = (0);
var state_30643__$1 = (function (){var statearr_30709 = state_30643;
(statearr_30709[(7)] = inst_30503);

(statearr_30709[(8)] = inst_30504);

(statearr_30709[(32)] = inst_30526);

(statearr_30709[(9)] = inst_30505);

(statearr_30709[(10)] = inst_30506);

return statearr_30709;
})();
var statearr_30710_30776 = state_30643__$1;
(statearr_30710_30776[(2)] = null);

(statearr_30710_30776[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (45))){
var state_30643__$1 = state_30643;
var statearr_30711_30777 = state_30643__$1;
(statearr_30711_30777[(2)] = null);

(statearr_30711_30777[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (26))){
var inst_30562 = (state_30643[(26)]);
var inst_30564 = (state_30643[(23)]);
var inst_30556 = (state_30643[(19)]);
var inst_30559 = (state_30643[(24)]);
var inst_30560 = (state_30643[(25)]);
var inst_30579 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30581 = (function (){var all_files = inst_30556;
var res_SINGLEQUOTE_ = inst_30559;
var res = inst_30560;
var files_not_loaded = inst_30562;
var dependencies_that_loaded = inst_30564;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30562,inst_30564,inst_30556,inst_30559,inst_30560,inst_30579,state_val_30644,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30580){
var map__30712 = p__30580;
var map__30712__$1 = ((((!((map__30712 == null)))?(((((map__30712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30712):map__30712);
var namespace = cljs.core.get.call(null,map__30712__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30712__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30562,inst_30564,inst_30556,inst_30559,inst_30560,inst_30579,state_val_30644,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30582 = cljs.core.map.call(null,inst_30581,inst_30560);
var inst_30583 = cljs.core.pr_str.call(null,inst_30582);
var inst_30584 = figwheel.client.utils.log.call(null,inst_30583);
var inst_30585 = (function (){var all_files = inst_30556;
var res_SINGLEQUOTE_ = inst_30559;
var res = inst_30560;
var files_not_loaded = inst_30562;
var dependencies_that_loaded = inst_30564;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30562,inst_30564,inst_30556,inst_30559,inst_30560,inst_30579,inst_30581,inst_30582,inst_30583,inst_30584,state_val_30644,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30562,inst_30564,inst_30556,inst_30559,inst_30560,inst_30579,inst_30581,inst_30582,inst_30583,inst_30584,state_val_30644,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30586 = setTimeout(inst_30585,(10));
var state_30643__$1 = (function (){var statearr_30714 = state_30643;
(statearr_30714[(33)] = inst_30584);

(statearr_30714[(34)] = inst_30579);

return statearr_30714;
})();
var statearr_30715_30778 = state_30643__$1;
(statearr_30715_30778[(2)] = inst_30586);

(statearr_30715_30778[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (16))){
var state_30643__$1 = state_30643;
var statearr_30716_30779 = state_30643__$1;
(statearr_30716_30779[(2)] = reload_dependents);

(statearr_30716_30779[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (38))){
var inst_30596 = (state_30643[(16)]);
var inst_30614 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30596);
var state_30643__$1 = state_30643;
var statearr_30717_30780 = state_30643__$1;
(statearr_30717_30780[(2)] = inst_30614);

(statearr_30717_30780[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (30))){
var state_30643__$1 = state_30643;
var statearr_30718_30781 = state_30643__$1;
(statearr_30718_30781[(2)] = null);

(statearr_30718_30781[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (10))){
var inst_30516 = (state_30643[(22)]);
var inst_30518 = cljs.core.chunked_seq_QMARK_.call(null,inst_30516);
var state_30643__$1 = state_30643;
if(inst_30518){
var statearr_30719_30782 = state_30643__$1;
(statearr_30719_30782[(1)] = (13));

} else {
var statearr_30720_30783 = state_30643__$1;
(statearr_30720_30783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (18))){
var inst_30550 = (state_30643[(2)]);
var state_30643__$1 = state_30643;
if(cljs.core.truth_(inst_30550)){
var statearr_30721_30784 = state_30643__$1;
(statearr_30721_30784[(1)] = (19));

} else {
var statearr_30722_30785 = state_30643__$1;
(statearr_30722_30785[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (42))){
var state_30643__$1 = state_30643;
var statearr_30723_30786 = state_30643__$1;
(statearr_30723_30786[(2)] = null);

(statearr_30723_30786[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (37))){
var inst_30609 = (state_30643[(2)]);
var state_30643__$1 = state_30643;
var statearr_30724_30787 = state_30643__$1;
(statearr_30724_30787[(2)] = inst_30609);

(statearr_30724_30787[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30644 === (8))){
var inst_30503 = (state_30643[(7)]);
var inst_30516 = (state_30643[(22)]);
var inst_30516__$1 = cljs.core.seq.call(null,inst_30503);
var state_30643__$1 = (function (){var statearr_30725 = state_30643;
(statearr_30725[(22)] = inst_30516__$1);

return statearr_30725;
})();
if(inst_30516__$1){
var statearr_30726_30788 = state_30643__$1;
(statearr_30726_30788[(1)] = (10));

} else {
var statearr_30727_30789 = state_30643__$1;
(statearr_30727_30789[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
});})(c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25626__auto__,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25627__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25627__auto____0 = (function (){
var statearr_30728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30728[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25627__auto__);

(statearr_30728[(1)] = (1));

return statearr_30728;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25627__auto____1 = (function (state_30643){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_30643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e30729){if((e30729 instanceof Object)){
var ex__25630__auto__ = e30729;
var statearr_30730_30790 = state_30643;
(statearr_30730_30790[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30791 = state_30643;
state_30643 = G__30791;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25627__auto__ = function(state_30643){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25627__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25627__auto____1.call(this,state_30643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25627__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25627__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28037__auto__ = (function (){var statearr_30731 = f__28036__auto__.call(null);
(statearr_30731[(6)] = c__28035__auto__);

return statearr_30731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto__,map__30488,map__30488__$1,opts,before_jsload,on_jsload,reload_dependents,map__30489,map__30489__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28035__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30794,link){
var map__30795 = p__30794;
var map__30795__$1 = ((((!((map__30795 == null)))?(((((map__30795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30795):map__30795);
var file = cljs.core.get.call(null,map__30795__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30795,map__30795__$1,file){
return (function (p1__30792_SHARP_,p2__30793_SHARP_){
if(cljs.core._EQ_.call(null,p1__30792_SHARP_,p2__30793_SHARP_)){
return p1__30792_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30795,map__30795__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30798){
var map__30799 = p__30798;
var map__30799__$1 = ((((!((map__30799 == null)))?(((((map__30799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30799):map__30799);
var match_length = cljs.core.get.call(null,map__30799__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30799__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30797_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30797_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
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
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30801_SHARP_,p2__30802_SHARP_){
return cljs.core.assoc.call(null,p1__30801_SHARP_,cljs.core.get.call(null,p2__30802_SHARP_,key),p2__30802_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30803 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30803);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30803);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30804,p__30805){
var map__30806 = p__30804;
var map__30806__$1 = ((((!((map__30806 == null)))?(((((map__30806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30806):map__30806);
var on_cssload = cljs.core.get.call(null,map__30806__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30807 = p__30805;
var map__30807__$1 = ((((!((map__30807 == null)))?(((((map__30807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30807):map__30807);
var files_msg = map__30807__$1;
var files = cljs.core.get.call(null,map__30807__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1531487548154
