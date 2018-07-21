// Compiled by ClojureScript 1.10.339 {}
goog.provide('argyou_homepage.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
argyou_homepage.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
argyou_homepage.core.read = (function argyou_homepage$core$read(p__29189,key,params){
var map__29190 = p__29189;
var map__29190__$1 = ((((!((map__29190 == null)))?(((((map__29190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29190):map__29190);
var env = map__29190__$1;
var state = cljs.core.get.call(null,map__29190__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__5455__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__5455__auto__)){
var vec__29192 = temp__5455__auto__;
var _ = cljs.core.nth.call(null,vec__29192,(0),null);
var value = cljs.core.nth.call(null,vec__29192,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
argyou_homepage.core.mutate = (function argyou_homepage$core$mutate(p__29195,key,params){
var map__29196 = p__29195;
var map__29196__$1 = ((((!((map__29196 == null)))?(((((map__29196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29196):map__29196);
var env = map__29196__$1;
var state = cljs.core.get.call(null,map__29196__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"increment","increment",81700043,null),key)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__29196,map__29196__$1,env,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
});})(map__29196,map__29196__$1,env,state))
], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
});
/**
 * @constructor
 */
argyou_homepage.core.Counter = (function argyou_homepage$core$Counter(){
var this__27497__auto__ = this;
React.Component.apply(this__27497__auto__,arguments);

if(!((this__27497__auto__.initLocalState == null))){
this__27497__auto__.state = this__27497__auto__.initLocalState();
} else {
this__27497__auto__.state = {};
}

return this__27497__auto__;
});

argyou_homepage.core.Counter.prototype = goog.object.clone(React.Component.prototype);

var x29200_29212 = argyou_homepage.core.Counter.prototype;
x29200_29212.componentWillUpdate = ((function (x29200_29212){
return (function (next_props__27399__auto__,next_state__27400__auto__){
var this__27398__auto__ = this;
if(((!((this__27398__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__27398__auto__.om$next$Ident$))))?true:false):false)){
var ident__27402__auto___29213 = om.next.ident.call(null,this__27398__auto__,om.next.props.call(null,this__27398__auto__));
var next_ident__27403__auto___29214 = om.next.ident.call(null,this__27398__auto__,om.next._next_props.call(null,next_props__27399__auto__,this__27398__auto__));
if(cljs.core.not_EQ_.call(null,ident__27402__auto___29213,next_ident__27403__auto___29214)){
var idxr__27404__auto___29215 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__27398__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__27404__auto___29215 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__27404__auto___29215),((function (idxr__27404__auto___29215,ident__27402__auto___29213,next_ident__27403__auto___29214,this__27398__auto__,x29200_29212){
return (function (indexes__27405__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__27405__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__27402__auto___29213], null),cljs.core.disj,this__27398__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__27403__auto___29214], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__27398__auto__);
});})(idxr__27404__auto___29215,ident__27402__auto___29213,next_ident__27403__auto___29214,this__27398__auto__,x29200_29212))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__27398__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__27398__auto__);
});})(x29200_29212))
;

x29200_29212.shouldComponentUpdate = ((function (x29200_29212){
return (function (next_props__27399__auto__,next_state__27400__auto__){
var this__27398__auto__ = this;
var next_children__27401__auto__ = next_props__27399__auto__.children;
var next_props__27399__auto____$1 = goog.object.get(next_props__27399__auto__,"omcljs$value");
var next_props__27399__auto____$2 = (function (){var G__29202 = next_props__27399__auto____$1;
if((next_props__27399__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__29202);
} else {
return G__29202;
}
})();
var or__3949__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__27398__auto__),next_props__27399__auto____$2);
if(or__3949__auto__){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (function (){var and__3938__auto__ = this__27398__auto__.state;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__27398__auto__.state,"omcljs$state"),goog.object.get(next_state__27400__auto__,"omcljs$state"));
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__27398__auto__.props.children,next_children__27401__auto__);
}
}
});})(x29200_29212))
;

x29200_29212.componentWillUnmount = ((function (x29200_29212){
return (function (){
var this__27398__auto__ = this;
var r__27409__auto__ = om.next.get_reconciler.call(null,this__27398__auto__);
var cfg__27410__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__27409__auto__);
var st__27411__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__27410__auto__);
var indexer__27408__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__27410__auto__);
if(cljs.core.truth_((function (){var and__3938__auto__ = !((st__27411__auto__ == null));
if(and__3938__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__27411__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__27398__auto__], null));
} else {
return and__3938__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__27411__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__27398__auto__);
} else {
}

if((indexer__27408__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__27408__auto__,this__27398__auto__);
}
});})(x29200_29212))
;

x29200_29212.componentDidUpdate = ((function (x29200_29212){
return (function (prev_props__27406__auto__,prev_state__27407__auto__){
var this__27398__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__27398__auto__);
});})(x29200_29212))
;

x29200_29212.isMounted = ((function (x29200_29212){
return (function (){
var this__27398__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__27398__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29200_29212))
;

x29200_29212.componentWillMount = ((function (x29200_29212){
return (function (){
var this__27398__auto__ = this;
var indexer__27408__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__27398__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__27408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__27408__auto__,this__27398__auto__);
}
});})(x29200_29212))
;

x29200_29212.render = ((function (x29200_29212){
return (function (){
var this__27397__auto__ = this;
var this$ = this__27397__auto__;
var _STAR_reconciler_STAR_29203 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29204 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29205 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29206 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29207 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__27397__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__27397__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__27397__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__27397__auto__);

om.next._STAR_parent_STAR_ = this__27397__auto__;

try{var map__29208 = om.next.props.call(null,this$);
var map__29208__$1 = ((((!((map__29208 == null)))?(((((map__29208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29208):map__29208);
var count = cljs.core.get.call(null,map__29208__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,["Count: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)].join('')))),om.util.force_children.call(null,React.DOM.button(({"onClick": ((function (map__29208,map__29208__$1,count,_STAR_reconciler_STAR_29203,_STAR_depth_STAR_29204,_STAR_shared_STAR_29205,_STAR_instrument_STAR_29206,_STAR_parent_STAR_29207,this$,this__27397__auto__,x29200_29212){
return (function (e){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"increment","increment",81700043,null))], null));
});})(map__29208,map__29208__$1,count,_STAR_reconciler_STAR_29203,_STAR_depth_STAR_29204,_STAR_shared_STAR_29205,_STAR_instrument_STAR_29206,_STAR_parent_STAR_29207,this$,this__27397__auto__,x29200_29212))
}),om.util.force_children.call(null,"Click me to argue!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29207;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29206;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29205;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29204;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29203;
}});})(x29200_29212))
;


argyou_homepage.core.Counter.prototype.constructor = argyou_homepage.core.Counter;

argyou_homepage.core.Counter.prototype.constructor.displayName = "argyou-homepage.core/Counter";

argyou_homepage.core.Counter.prototype.om$isComponent = true;

var x29210_29216 = argyou_homepage.core.Counter;
x29210_29216.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x29210_29216.om$next$IQuery$query$arity$1 = ((function (x29210_29216){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x29210_29216))
;


var x29211_29217 = argyou_homepage.core.Counter.prototype;
x29211_29217.om$next$IQuery$ = cljs.core.PROTOCOL_SENTINEL;

x29211_29217.om$next$IQuery$query$arity$1 = ((function (x29211_29217){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null);
});})(x29211_29217))
;


argyou_homepage.core.Counter.cljs$lang$type = true;

argyou_homepage.core.Counter.cljs$lang$ctorStr = "argyou-homepage.core/Counter";

argyou_homepage.core.Counter.cljs$lang$ctorPrWriter = (function (this__27499__auto__,writer__27500__auto__,opt__27501__auto__){
return cljs.core._write.call(null,writer__27500__auto__,"argyou-homepage.core/Counter");
});
argyou_homepage.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),argyou_homepage.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),argyou_homepage.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),argyou_homepage.core.mutate], null))], null));
/**
 * @constructor
 */
argyou_homepage.core.AppMain = (function argyou_homepage$core$AppMain(){
var this__27497__auto__ = this;
React.Component.apply(this__27497__auto__,arguments);

if(!((this__27497__auto__.initLocalState == null))){
this__27497__auto__.state = this__27497__auto__.initLocalState();
} else {
this__27497__auto__.state = {};
}

return this__27497__auto__;
});

argyou_homepage.core.AppMain.prototype = goog.object.clone(React.Component.prototype);

var x29220_29230 = argyou_homepage.core.AppMain.prototype;
x29220_29230.componentWillUpdate = ((function (x29220_29230){
return (function (next_props__27399__auto__,next_state__27400__auto__){
var this__27398__auto__ = this;
if(((!((this__27398__auto__ == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this__27398__auto__.om$next$Ident$))))?true:false):false)){
var ident__27402__auto___29231 = om.next.ident.call(null,this__27398__auto__,om.next.props.call(null,this__27398__auto__));
var next_ident__27403__auto___29232 = om.next.ident.call(null,this__27398__auto__,om.next._next_props.call(null,next_props__27399__auto__,this__27398__auto__));
if(cljs.core.not_EQ_.call(null,ident__27402__auto___29231,next_ident__27403__auto___29232)){
var idxr__27404__auto___29233 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__27398__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__27404__auto___29233 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__27404__auto___29233),((function (idxr__27404__auto___29233,ident__27402__auto___29231,next_ident__27403__auto___29232,this__27398__auto__,x29220_29230){
return (function (indexes__27405__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__27405__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__27402__auto___29231], null),cljs.core.disj,this__27398__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__27403__auto___29232], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__27398__auto__);
});})(idxr__27404__auto___29233,ident__27402__auto___29231,next_ident__27403__auto___29232,this__27398__auto__,x29220_29230))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__27398__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__27398__auto__);
});})(x29220_29230))
;

x29220_29230.shouldComponentUpdate = ((function (x29220_29230){
return (function (next_props__27399__auto__,next_state__27400__auto__){
var this__27398__auto__ = this;
var next_children__27401__auto__ = next_props__27399__auto__.children;
var next_props__27399__auto____$1 = goog.object.get(next_props__27399__auto__,"omcljs$value");
var next_props__27399__auto____$2 = (function (){var G__29222 = next_props__27399__auto____$1;
if((next_props__27399__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__29222);
} else {
return G__29222;
}
})();
var or__3949__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__27398__auto__),next_props__27399__auto____$2);
if(or__3949__auto__){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = (function (){var and__3938__auto__ = this__27398__auto__.state;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__27398__auto__.state,"omcljs$state"),goog.object.get(next_state__27400__auto__,"omcljs$state"));
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__27398__auto__.props.children,next_children__27401__auto__);
}
}
});})(x29220_29230))
;

x29220_29230.componentWillUnmount = ((function (x29220_29230){
return (function (){
var this__27398__auto__ = this;
var r__27409__auto__ = om.next.get_reconciler.call(null,this__27398__auto__);
var cfg__27410__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__27409__auto__);
var st__27411__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__27410__auto__);
var indexer__27408__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__27410__auto__);
if(cljs.core.truth_((function (){var and__3938__auto__ = !((st__27411__auto__ == null));
if(and__3938__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__27411__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__27398__auto__], null));
} else {
return and__3938__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__27411__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__27398__auto__);
} else {
}

if((indexer__27408__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__27408__auto__,this__27398__auto__);
}
});})(x29220_29230))
;

x29220_29230.componentDidUpdate = ((function (x29220_29230){
return (function (prev_props__27406__auto__,prev_state__27407__auto__){
var this__27398__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__27398__auto__);
});})(x29220_29230))
;

x29220_29230.isMounted = ((function (x29220_29230){
return (function (){
var this__27398__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__27398__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29220_29230))
;

x29220_29230.componentWillMount = ((function (x29220_29230){
return (function (){
var this__27398__auto__ = this;
var indexer__27408__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__27398__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__27408__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__27408__auto__,this__27398__auto__);
}
});})(x29220_29230))
;

x29220_29230.render = ((function (x29220_29230){
return (function (){
var this__27397__auto__ = this;
var this$ = this__27397__auto__;
var _STAR_reconciler_STAR_29223 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29224 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29225 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29226 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29227 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__27397__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__27397__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__27397__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__27397__auto__);

om.next._STAR_parent_STAR_ = this__27397__auto__;

try{return React.DOM.div(null,om.util.force_children.call(null,cljs.core.get.call(null,om.next.props.call(null,this$),new cljs.core.Keyword(null,"title","title",636505583))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29227;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29226;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29225;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29224;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29223;
}});})(x29220_29230))
;


argyou_homepage.core.AppMain.prototype.constructor = argyou_homepage.core.AppMain;

argyou_homepage.core.AppMain.prototype.constructor.displayName = "argyou-homepage.core/AppMain";

argyou_homepage.core.AppMain.prototype.om$isComponent = true;

var x29228_29234 = argyou_homepage.core.AppMain;


var x29229_29235 = argyou_homepage.core.AppMain.prototype;


argyou_homepage.core.AppMain.cljs$lang$type = true;

argyou_homepage.core.AppMain.cljs$lang$ctorStr = "argyou-homepage.core/AppMain";

argyou_homepage.core.AppMain.cljs$lang$ctorPrWriter = (function (this__27499__auto__,writer__27500__auto__,opt__27501__auto__){
return cljs.core._write.call(null,writer__27500__auto__,"argyou-homepage.core/AppMain");
});
argyou_homepage.core.app = om.next.factory.call(null,argyou_homepage.core.AppMain);
argyou_homepage.core.init = (function argyou_homepage$core$init(){
return om.next.add_root_BANG_.call(null,argyou_homepage.core.reconciler,argyou_homepage.core.Counter,goog.dom.getElement("app"));
});

//# sourceMappingURL=core.js.map?rel=1531490626530
