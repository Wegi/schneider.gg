// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e31004){if((e31004 instanceof Error)){
var e = e31004;
return "Error: Unable to stringify";
} else {
throw e31004;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31007 = arguments.length;
switch (G__31007) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31005_SHARP_){
if(typeof p1__31005_SHARP_ === 'string'){
return p1__31005_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31005_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31010 = arguments.length;
var i__4532__auto___31011 = (0);
while(true){
if((i__4532__auto___31011 < len__4531__auto___31010)){
args__4534__auto__.push((arguments[i__4532__auto___31011]));

var G__31012 = (i__4532__auto___31011 + (1));
i__4532__auto___31011 = G__31012;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31009){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31009));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31014 = arguments.length;
var i__4532__auto___31015 = (0);
while(true){
if((i__4532__auto___31015 < len__4531__auto___31014)){
args__4534__auto__.push((arguments[i__4532__auto___31015]));

var G__31016 = (i__4532__auto___31015 + (1));
i__4532__auto___31015 = G__31016;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31013){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31013));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31017){
var map__31018 = p__31017;
var map__31018__$1 = ((((!((map__31018 == null)))?(((((map__31018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31018):map__31018);
var message = cljs.core.get.call(null,map__31018__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31018__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
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
var c__28035__auto___31097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___31097,ch){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___31097,ch){
return (function (state_31069){
var state_val_31070 = (state_31069[(1)]);
if((state_val_31070 === (7))){
var inst_31065 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31071_31098 = state_31069__$1;
(statearr_31071_31098[(2)] = inst_31065);

(statearr_31071_31098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (1))){
var state_31069__$1 = state_31069;
var statearr_31072_31099 = state_31069__$1;
(statearr_31072_31099[(2)] = null);

(statearr_31072_31099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (4))){
var inst_31022 = (state_31069[(7)]);
var inst_31022__$1 = (state_31069[(2)]);
var state_31069__$1 = (function (){var statearr_31073 = state_31069;
(statearr_31073[(7)] = inst_31022__$1);

return statearr_31073;
})();
if(cljs.core.truth_(inst_31022__$1)){
var statearr_31074_31100 = state_31069__$1;
(statearr_31074_31100[(1)] = (5));

} else {
var statearr_31075_31101 = state_31069__$1;
(statearr_31075_31101[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (15))){
var inst_31029 = (state_31069[(8)]);
var inst_31044 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31029);
var inst_31045 = cljs.core.first.call(null,inst_31044);
var inst_31046 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31045);
var inst_31047 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31046)].join('');
var inst_31048 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31047);
var state_31069__$1 = state_31069;
var statearr_31076_31102 = state_31069__$1;
(statearr_31076_31102[(2)] = inst_31048);

(statearr_31076_31102[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (13))){
var inst_31053 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31077_31103 = state_31069__$1;
(statearr_31077_31103[(2)] = inst_31053);

(statearr_31077_31103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (6))){
var state_31069__$1 = state_31069;
var statearr_31078_31104 = state_31069__$1;
(statearr_31078_31104[(2)] = null);

(statearr_31078_31104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (17))){
var inst_31051 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31079_31105 = state_31069__$1;
(statearr_31079_31105[(2)] = inst_31051);

(statearr_31079_31105[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (3))){
var inst_31067 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31069__$1,inst_31067);
} else {
if((state_val_31070 === (12))){
var inst_31028 = (state_31069[(9)]);
var inst_31042 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31028,opts);
var state_31069__$1 = state_31069;
if(cljs.core.truth_(inst_31042)){
var statearr_31080_31106 = state_31069__$1;
(statearr_31080_31106[(1)] = (15));

} else {
var statearr_31081_31107 = state_31069__$1;
(statearr_31081_31107[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (2))){
var state_31069__$1 = state_31069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31069__$1,(4),ch);
} else {
if((state_val_31070 === (11))){
var inst_31029 = (state_31069[(8)]);
var inst_31034 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31035 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31029);
var inst_31036 = cljs.core.async.timeout.call(null,(1000));
var inst_31037 = [inst_31035,inst_31036];
var inst_31038 = (new cljs.core.PersistentVector(null,2,(5),inst_31034,inst_31037,null));
var state_31069__$1 = state_31069;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31069__$1,(14),inst_31038);
} else {
if((state_val_31070 === (9))){
var inst_31029 = (state_31069[(8)]);
var inst_31055 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31056 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31029);
var inst_31057 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31056);
var inst_31058 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31057)].join('');
var inst_31059 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31058);
var state_31069__$1 = (function (){var statearr_31082 = state_31069;
(statearr_31082[(10)] = inst_31055);

return statearr_31082;
})();
var statearr_31083_31108 = state_31069__$1;
(statearr_31083_31108[(2)] = inst_31059);

(statearr_31083_31108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (5))){
var inst_31022 = (state_31069[(7)]);
var inst_31024 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31025 = (new cljs.core.PersistentArrayMap(null,2,inst_31024,null));
var inst_31026 = (new cljs.core.PersistentHashSet(null,inst_31025,null));
var inst_31027 = figwheel.client.focus_msgs.call(null,inst_31026,inst_31022);
var inst_31028 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31027);
var inst_31029 = cljs.core.first.call(null,inst_31027);
var inst_31030 = figwheel.client.autoload_QMARK_.call(null);
var state_31069__$1 = (function (){var statearr_31084 = state_31069;
(statearr_31084[(9)] = inst_31028);

(statearr_31084[(8)] = inst_31029);

return statearr_31084;
})();
if(cljs.core.truth_(inst_31030)){
var statearr_31085_31109 = state_31069__$1;
(statearr_31085_31109[(1)] = (8));

} else {
var statearr_31086_31110 = state_31069__$1;
(statearr_31086_31110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (14))){
var inst_31040 = (state_31069[(2)]);
var state_31069__$1 = state_31069;
var statearr_31087_31111 = state_31069__$1;
(statearr_31087_31111[(2)] = inst_31040);

(statearr_31087_31111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (16))){
var state_31069__$1 = state_31069;
var statearr_31088_31112 = state_31069__$1;
(statearr_31088_31112[(2)] = null);

(statearr_31088_31112[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (10))){
var inst_31061 = (state_31069[(2)]);
var state_31069__$1 = (function (){var statearr_31089 = state_31069;
(statearr_31089[(11)] = inst_31061);

return statearr_31089;
})();
var statearr_31090_31113 = state_31069__$1;
(statearr_31090_31113[(2)] = null);

(statearr_31090_31113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31070 === (8))){
var inst_31028 = (state_31069[(9)]);
var inst_31032 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31028,opts);
var state_31069__$1 = state_31069;
if(cljs.core.truth_(inst_31032)){
var statearr_31091_31114 = state_31069__$1;
(statearr_31091_31114[(1)] = (11));

} else {
var statearr_31092_31115 = state_31069__$1;
(statearr_31092_31115[(1)] = (12));

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
});})(c__28035__auto___31097,ch))
;
return ((function (switch__25626__auto__,c__28035__auto___31097,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25627__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25627__auto____0 = (function (){
var statearr_31093 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31093[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25627__auto__);

(statearr_31093[(1)] = (1));

return statearr_31093;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25627__auto____1 = (function (state_31069){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_31069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e31094){if((e31094 instanceof Object)){
var ex__25630__auto__ = e31094;
var statearr_31095_31116 = state_31069;
(statearr_31095_31116[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31117 = state_31069;
state_31069 = G__31117;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25627__auto__ = function(state_31069){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25627__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25627__auto____1.call(this,state_31069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25627__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25627__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___31097,ch))
})();
var state__28037__auto__ = (function (){var statearr_31096 = f__28036__auto__.call(null);
(statearr_31096[(6)] = c__28035__auto___31097);

return statearr_31096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___31097,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31118_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31118_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31122 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31122){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31120 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31121 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31120,_STAR_print_fn_STAR_31121,sb,base_path_31122){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31120,_STAR_print_fn_STAR_31121,sb,base_path_31122))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31121;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31120;
}}catch (e31119){if((e31119 instanceof Error)){
var e = e31119;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31122], null));
} else {
var e = e31119;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31122))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31123){
var map__31124 = p__31123;
var map__31124__$1 = ((((!((map__31124 == null)))?(((((map__31124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31124):map__31124);
var opts = map__31124__$1;
var build_id = cljs.core.get.call(null,map__31124__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31124,map__31124__$1,opts,build_id){
return (function (p__31126){
var vec__31127 = p__31126;
var seq__31128 = cljs.core.seq.call(null,vec__31127);
var first__31129 = cljs.core.first.call(null,seq__31128);
var seq__31128__$1 = cljs.core.next.call(null,seq__31128);
var map__31130 = first__31129;
var map__31130__$1 = ((((!((map__31130 == null)))?(((((map__31130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31130):map__31130);
var msg = map__31130__$1;
var msg_name = cljs.core.get.call(null,map__31130__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31128__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31127,seq__31128,first__31129,seq__31128__$1,map__31130,map__31130__$1,msg,msg_name,_,map__31124,map__31124__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31127,seq__31128,first__31129,seq__31128__$1,map__31130,map__31130__$1,msg,msg_name,_,map__31124,map__31124__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31124,map__31124__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31132){
var vec__31133 = p__31132;
var seq__31134 = cljs.core.seq.call(null,vec__31133);
var first__31135 = cljs.core.first.call(null,seq__31134);
var seq__31134__$1 = cljs.core.next.call(null,seq__31134);
var map__31136 = first__31135;
var map__31136__$1 = ((((!((map__31136 == null)))?(((((map__31136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31136):map__31136);
var msg = map__31136__$1;
var msg_name = cljs.core.get.call(null,map__31136__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31134__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31138){
var map__31139 = p__31138;
var map__31139__$1 = ((((!((map__31139 == null)))?(((((map__31139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31139):map__31139);
var on_compile_warning = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31139__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31139,map__31139__$1,on_compile_warning,on_compile_fail){
return (function (p__31141){
var vec__31142 = p__31141;
var seq__31143 = cljs.core.seq.call(null,vec__31142);
var first__31144 = cljs.core.first.call(null,seq__31143);
var seq__31143__$1 = cljs.core.next.call(null,seq__31143);
var map__31145 = first__31144;
var map__31145__$1 = ((((!((map__31145 == null)))?(((((map__31145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31145):map__31145);
var msg = map__31145__$1;
var msg_name = cljs.core.get.call(null,map__31145__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31143__$1;
var pred__31147 = cljs.core._EQ_;
var expr__31148 = msg_name;
if(cljs.core.truth_(pred__31147.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31148))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31147.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31148))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31139,map__31139__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto__,msg_hist,msg_names,msg){
return (function (state_31237){
var state_val_31238 = (state_31237[(1)]);
if((state_val_31238 === (7))){
var inst_31157 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
if(cljs.core.truth_(inst_31157)){
var statearr_31239_31286 = state_31237__$1;
(statearr_31239_31286[(1)] = (8));

} else {
var statearr_31240_31287 = state_31237__$1;
(statearr_31240_31287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (20))){
var inst_31231 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
var statearr_31241_31288 = state_31237__$1;
(statearr_31241_31288[(2)] = inst_31231);

(statearr_31241_31288[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (27))){
var inst_31227 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
var statearr_31242_31289 = state_31237__$1;
(statearr_31242_31289[(2)] = inst_31227);

(statearr_31242_31289[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (1))){
var inst_31150 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31237__$1 = state_31237;
if(cljs.core.truth_(inst_31150)){
var statearr_31243_31290 = state_31237__$1;
(statearr_31243_31290[(1)] = (2));

} else {
var statearr_31244_31291 = state_31237__$1;
(statearr_31244_31291[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (24))){
var inst_31229 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
var statearr_31245_31292 = state_31237__$1;
(statearr_31245_31292[(2)] = inst_31229);

(statearr_31245_31292[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (4))){
var inst_31235 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31237__$1,inst_31235);
} else {
if((state_val_31238 === (15))){
var inst_31233 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
var statearr_31246_31293 = state_31237__$1;
(statearr_31246_31293[(2)] = inst_31233);

(statearr_31246_31293[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (21))){
var inst_31186 = (state_31237[(2)]);
var inst_31187 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31188 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31187);
var state_31237__$1 = (function (){var statearr_31247 = state_31237;
(statearr_31247[(7)] = inst_31186);

return statearr_31247;
})();
var statearr_31248_31294 = state_31237__$1;
(statearr_31248_31294[(2)] = inst_31188);

(statearr_31248_31294[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (31))){
var inst_31216 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31237__$1 = state_31237;
if(cljs.core.truth_(inst_31216)){
var statearr_31249_31295 = state_31237__$1;
(statearr_31249_31295[(1)] = (34));

} else {
var statearr_31250_31296 = state_31237__$1;
(statearr_31250_31296[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (32))){
var inst_31225 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
var statearr_31251_31297 = state_31237__$1;
(statearr_31251_31297[(2)] = inst_31225);

(statearr_31251_31297[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (33))){
var inst_31212 = (state_31237[(2)]);
var inst_31213 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31214 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31213);
var state_31237__$1 = (function (){var statearr_31252 = state_31237;
(statearr_31252[(8)] = inst_31212);

return statearr_31252;
})();
var statearr_31253_31298 = state_31237__$1;
(statearr_31253_31298[(2)] = inst_31214);

(statearr_31253_31298[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (13))){
var inst_31171 = figwheel.client.heads_up.clear.call(null);
var state_31237__$1 = state_31237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31237__$1,(16),inst_31171);
} else {
if((state_val_31238 === (22))){
var inst_31192 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31193 = figwheel.client.heads_up.append_warning_message.call(null,inst_31192);
var state_31237__$1 = state_31237;
var statearr_31254_31299 = state_31237__$1;
(statearr_31254_31299[(2)] = inst_31193);

(statearr_31254_31299[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (36))){
var inst_31223 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
var statearr_31255_31300 = state_31237__$1;
(statearr_31255_31300[(2)] = inst_31223);

(statearr_31255_31300[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (29))){
var inst_31203 = (state_31237[(2)]);
var inst_31204 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31205 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31204);
var state_31237__$1 = (function (){var statearr_31256 = state_31237;
(statearr_31256[(9)] = inst_31203);

return statearr_31256;
})();
var statearr_31257_31301 = state_31237__$1;
(statearr_31257_31301[(2)] = inst_31205);

(statearr_31257_31301[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (6))){
var inst_31152 = (state_31237[(10)]);
var state_31237__$1 = state_31237;
var statearr_31258_31302 = state_31237__$1;
(statearr_31258_31302[(2)] = inst_31152);

(statearr_31258_31302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (28))){
var inst_31199 = (state_31237[(2)]);
var inst_31200 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31201 = figwheel.client.heads_up.display_warning.call(null,inst_31200);
var state_31237__$1 = (function (){var statearr_31259 = state_31237;
(statearr_31259[(11)] = inst_31199);

return statearr_31259;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31237__$1,(29),inst_31201);
} else {
if((state_val_31238 === (25))){
var inst_31197 = figwheel.client.heads_up.clear.call(null);
var state_31237__$1 = state_31237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31237__$1,(28),inst_31197);
} else {
if((state_val_31238 === (34))){
var inst_31218 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31237__$1 = state_31237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31237__$1,(37),inst_31218);
} else {
if((state_val_31238 === (17))){
var inst_31177 = (state_31237[(2)]);
var inst_31178 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31179 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31178);
var state_31237__$1 = (function (){var statearr_31260 = state_31237;
(statearr_31260[(12)] = inst_31177);

return statearr_31260;
})();
var statearr_31261_31303 = state_31237__$1;
(statearr_31261_31303[(2)] = inst_31179);

(statearr_31261_31303[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (3))){
var inst_31169 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31237__$1 = state_31237;
if(cljs.core.truth_(inst_31169)){
var statearr_31262_31304 = state_31237__$1;
(statearr_31262_31304[(1)] = (13));

} else {
var statearr_31263_31305 = state_31237__$1;
(statearr_31263_31305[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (12))){
var inst_31165 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
var statearr_31264_31306 = state_31237__$1;
(statearr_31264_31306[(2)] = inst_31165);

(statearr_31264_31306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (2))){
var inst_31152 = (state_31237[(10)]);
var inst_31152__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31237__$1 = (function (){var statearr_31265 = state_31237;
(statearr_31265[(10)] = inst_31152__$1);

return statearr_31265;
})();
if(cljs.core.truth_(inst_31152__$1)){
var statearr_31266_31307 = state_31237__$1;
(statearr_31266_31307[(1)] = (5));

} else {
var statearr_31267_31308 = state_31237__$1;
(statearr_31267_31308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (23))){
var inst_31195 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31237__$1 = state_31237;
if(cljs.core.truth_(inst_31195)){
var statearr_31268_31309 = state_31237__$1;
(statearr_31268_31309[(1)] = (25));

} else {
var statearr_31269_31310 = state_31237__$1;
(statearr_31269_31310[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (35))){
var state_31237__$1 = state_31237;
var statearr_31270_31311 = state_31237__$1;
(statearr_31270_31311[(2)] = null);

(statearr_31270_31311[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (19))){
var inst_31190 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31237__$1 = state_31237;
if(cljs.core.truth_(inst_31190)){
var statearr_31271_31312 = state_31237__$1;
(statearr_31271_31312[(1)] = (22));

} else {
var statearr_31272_31313 = state_31237__$1;
(statearr_31272_31313[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (11))){
var inst_31161 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
var statearr_31273_31314 = state_31237__$1;
(statearr_31273_31314[(2)] = inst_31161);

(statearr_31273_31314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (9))){
var inst_31163 = figwheel.client.heads_up.clear.call(null);
var state_31237__$1 = state_31237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31237__$1,(12),inst_31163);
} else {
if((state_val_31238 === (5))){
var inst_31154 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31237__$1 = state_31237;
var statearr_31274_31315 = state_31237__$1;
(statearr_31274_31315[(2)] = inst_31154);

(statearr_31274_31315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (14))){
var inst_31181 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31237__$1 = state_31237;
if(cljs.core.truth_(inst_31181)){
var statearr_31275_31316 = state_31237__$1;
(statearr_31275_31316[(1)] = (18));

} else {
var statearr_31276_31317 = state_31237__$1;
(statearr_31276_31317[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (26))){
var inst_31207 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31237__$1 = state_31237;
if(cljs.core.truth_(inst_31207)){
var statearr_31277_31318 = state_31237__$1;
(statearr_31277_31318[(1)] = (30));

} else {
var statearr_31278_31319 = state_31237__$1;
(statearr_31278_31319[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (16))){
var inst_31173 = (state_31237[(2)]);
var inst_31174 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31175 = figwheel.client.heads_up.display_exception.call(null,inst_31174);
var state_31237__$1 = (function (){var statearr_31279 = state_31237;
(statearr_31279[(13)] = inst_31173);

return statearr_31279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31237__$1,(17),inst_31175);
} else {
if((state_val_31238 === (30))){
var inst_31209 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31210 = figwheel.client.heads_up.display_warning.call(null,inst_31209);
var state_31237__$1 = state_31237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31237__$1,(33),inst_31210);
} else {
if((state_val_31238 === (10))){
var inst_31167 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
var statearr_31280_31320 = state_31237__$1;
(statearr_31280_31320[(2)] = inst_31167);

(statearr_31280_31320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (18))){
var inst_31183 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31184 = figwheel.client.heads_up.display_exception.call(null,inst_31183);
var state_31237__$1 = state_31237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31237__$1,(21),inst_31184);
} else {
if((state_val_31238 === (37))){
var inst_31220 = (state_31237[(2)]);
var state_31237__$1 = state_31237;
var statearr_31281_31321 = state_31237__$1;
(statearr_31281_31321[(2)] = inst_31220);

(statearr_31281_31321[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31238 === (8))){
var inst_31159 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31237__$1 = state_31237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31237__$1,(11),inst_31159);
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
});})(c__28035__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25626__auto__,c__28035__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25627__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25627__auto____0 = (function (){
var statearr_31282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31282[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25627__auto__);

(statearr_31282[(1)] = (1));

return statearr_31282;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25627__auto____1 = (function (state_31237){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_31237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e31283){if((e31283 instanceof Object)){
var ex__25630__auto__ = e31283;
var statearr_31284_31322 = state_31237;
(statearr_31284_31322[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31323 = state_31237;
state_31237 = G__31323;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25627__auto__ = function(state_31237){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25627__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25627__auto____1.call(this,state_31237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25627__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25627__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto__,msg_hist,msg_names,msg))
})();
var state__28037__auto__ = (function (){var statearr_31285 = f__28036__auto__.call(null);
(statearr_31285[(6)] = c__28035__auto__);

return statearr_31285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto__,msg_hist,msg_names,msg))
);

return c__28035__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28035__auto___31352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto___31352,ch){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto___31352,ch){
return (function (state_31338){
var state_val_31339 = (state_31338[(1)]);
if((state_val_31339 === (1))){
var state_31338__$1 = state_31338;
var statearr_31340_31353 = state_31338__$1;
(statearr_31340_31353[(2)] = null);

(statearr_31340_31353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (2))){
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31338__$1,(4),ch);
} else {
if((state_val_31339 === (3))){
var inst_31336 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31338__$1,inst_31336);
} else {
if((state_val_31339 === (4))){
var inst_31326 = (state_31338[(7)]);
var inst_31326__$1 = (state_31338[(2)]);
var state_31338__$1 = (function (){var statearr_31341 = state_31338;
(statearr_31341[(7)] = inst_31326__$1);

return statearr_31341;
})();
if(cljs.core.truth_(inst_31326__$1)){
var statearr_31342_31354 = state_31338__$1;
(statearr_31342_31354[(1)] = (5));

} else {
var statearr_31343_31355 = state_31338__$1;
(statearr_31343_31355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (5))){
var inst_31326 = (state_31338[(7)]);
var inst_31328 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31326);
var state_31338__$1 = state_31338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31338__$1,(8),inst_31328);
} else {
if((state_val_31339 === (6))){
var state_31338__$1 = state_31338;
var statearr_31344_31356 = state_31338__$1;
(statearr_31344_31356[(2)] = null);

(statearr_31344_31356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (7))){
var inst_31334 = (state_31338[(2)]);
var state_31338__$1 = state_31338;
var statearr_31345_31357 = state_31338__$1;
(statearr_31345_31357[(2)] = inst_31334);

(statearr_31345_31357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31339 === (8))){
var inst_31330 = (state_31338[(2)]);
var state_31338__$1 = (function (){var statearr_31346 = state_31338;
(statearr_31346[(8)] = inst_31330);

return statearr_31346;
})();
var statearr_31347_31358 = state_31338__$1;
(statearr_31347_31358[(2)] = null);

(statearr_31347_31358[(1)] = (2));


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
});})(c__28035__auto___31352,ch))
;
return ((function (switch__25626__auto__,c__28035__auto___31352,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25627__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25627__auto____0 = (function (){
var statearr_31348 = [null,null,null,null,null,null,null,null,null];
(statearr_31348[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25627__auto__);

(statearr_31348[(1)] = (1));

return statearr_31348;
});
var figwheel$client$heads_up_plugin_$_state_machine__25627__auto____1 = (function (state_31338){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_31338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e31349){if((e31349 instanceof Object)){
var ex__25630__auto__ = e31349;
var statearr_31350_31359 = state_31338;
(statearr_31350_31359[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31360 = state_31338;
state_31338 = G__31360;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25627__auto__ = function(state_31338){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25627__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25627__auto____1.call(this,state_31338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25627__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25627__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto___31352,ch))
})();
var state__28037__auto__ = (function (){var statearr_31351 = f__28036__auto__.call(null);
(statearr_31351[(6)] = c__28035__auto___31352);

return statearr_31351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto___31352,ch))
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
var c__28035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto__){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto__){
return (function (state_31366){
var state_val_31367 = (state_31366[(1)]);
if((state_val_31367 === (1))){
var inst_31361 = cljs.core.async.timeout.call(null,(3000));
var state_31366__$1 = state_31366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31366__$1,(2),inst_31361);
} else {
if((state_val_31367 === (2))){
var inst_31363 = (state_31366[(2)]);
var inst_31364 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31366__$1 = (function (){var statearr_31368 = state_31366;
(statearr_31368[(7)] = inst_31363);

return statearr_31368;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31366__$1,inst_31364);
} else {
return null;
}
}
});})(c__28035__auto__))
;
return ((function (switch__25626__auto__,c__28035__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25627__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25627__auto____0 = (function (){
var statearr_31369 = [null,null,null,null,null,null,null,null];
(statearr_31369[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25627__auto__);

(statearr_31369[(1)] = (1));

return statearr_31369;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25627__auto____1 = (function (state_31366){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_31366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e31370){if((e31370 instanceof Object)){
var ex__25630__auto__ = e31370;
var statearr_31371_31373 = state_31366;
(statearr_31371_31373[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31374 = state_31366;
state_31366 = G__31374;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25627__auto__ = function(state_31366){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25627__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25627__auto____1.call(this,state_31366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25627__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25627__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto__))
})();
var state__28037__auto__ = (function (){var statearr_31372 = f__28036__auto__.call(null);
(statearr_31372[(6)] = c__28035__auto__);

return statearr_31372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto__))
);

return c__28035__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28035__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28035__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__28036__auto__ = (function (){var switch__25626__auto__ = ((function (c__28035__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31381){
var state_val_31382 = (state_31381[(1)]);
if((state_val_31382 === (1))){
var inst_31375 = cljs.core.async.timeout.call(null,(2000));
var state_31381__$1 = state_31381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31381__$1,(2),inst_31375);
} else {
if((state_val_31382 === (2))){
var inst_31377 = (state_31381[(2)]);
var inst_31378 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31379 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31378);
var state_31381__$1 = (function (){var statearr_31383 = state_31381;
(statearr_31383[(7)] = inst_31377);

return statearr_31383;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31381__$1,inst_31379);
} else {
return null;
}
}
});})(c__28035__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__25626__auto__,c__28035__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25627__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25627__auto____0 = (function (){
var statearr_31384 = [null,null,null,null,null,null,null,null];
(statearr_31384[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25627__auto__);

(statearr_31384[(1)] = (1));

return statearr_31384;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25627__auto____1 = (function (state_31381){
while(true){
var ret_value__25628__auto__ = (function (){try{while(true){
var result__25629__auto__ = switch__25626__auto__.call(null,state_31381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25629__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25629__auto__;
}
break;
}
}catch (e31385){if((e31385 instanceof Object)){
var ex__25630__auto__ = e31385;
var statearr_31386_31388 = state_31381;
(statearr_31386_31388[(5)] = ex__25630__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31389 = state_31381;
state_31381 = G__31389;
continue;
} else {
return ret_value__25628__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25627__auto__ = function(state_31381){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25627__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25627__auto____1.call(this,state_31381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25627__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25627__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25627__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25627__auto__;
})()
;})(switch__25626__auto__,c__28035__auto__,figwheel_version,temp__5457__auto__))
})();
var state__28037__auto__ = (function (){var statearr_31387 = f__28036__auto__.call(null);
(statearr_31387[(6)] = c__28035__auto__);

return statearr_31387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28037__auto__);
});})(c__28035__auto__,figwheel_version,temp__5457__auto__))
);

return c__28035__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31390){
var map__31391 = p__31390;
var map__31391__$1 = ((((!((map__31391 == null)))?(((((map__31391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31391):map__31391);
var file = cljs.core.get.call(null,map__31391__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31391__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31391__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31393 = "";
var G__31393__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31393),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31393);
var G__31393__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31393__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31393__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31393__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31393__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31394){
var map__31395 = p__31394;
var map__31395__$1 = ((((!((map__31395 == null)))?(((((map__31395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31395):map__31395);
var ed = map__31395__$1;
var formatted_exception = cljs.core.get.call(null,map__31395__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31395__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31395__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31397_31401 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31398_31402 = null;
var count__31399_31403 = (0);
var i__31400_31404 = (0);
while(true){
if((i__31400_31404 < count__31399_31403)){
var msg_31405 = cljs.core._nth.call(null,chunk__31398_31402,i__31400_31404);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31405);


var G__31406 = seq__31397_31401;
var G__31407 = chunk__31398_31402;
var G__31408 = count__31399_31403;
var G__31409 = (i__31400_31404 + (1));
seq__31397_31401 = G__31406;
chunk__31398_31402 = G__31407;
count__31399_31403 = G__31408;
i__31400_31404 = G__31409;
continue;
} else {
var temp__5457__auto___31410 = cljs.core.seq.call(null,seq__31397_31401);
if(temp__5457__auto___31410){
var seq__31397_31411__$1 = temp__5457__auto___31410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31397_31411__$1)){
var c__4351__auto___31412 = cljs.core.chunk_first.call(null,seq__31397_31411__$1);
var G__31413 = cljs.core.chunk_rest.call(null,seq__31397_31411__$1);
var G__31414 = c__4351__auto___31412;
var G__31415 = cljs.core.count.call(null,c__4351__auto___31412);
var G__31416 = (0);
seq__31397_31401 = G__31413;
chunk__31398_31402 = G__31414;
count__31399_31403 = G__31415;
i__31400_31404 = G__31416;
continue;
} else {
var msg_31417 = cljs.core.first.call(null,seq__31397_31411__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31417);


var G__31418 = cljs.core.next.call(null,seq__31397_31411__$1);
var G__31419 = null;
var G__31420 = (0);
var G__31421 = (0);
seq__31397_31401 = G__31418;
chunk__31398_31402 = G__31419;
count__31399_31403 = G__31420;
i__31400_31404 = G__31421;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31422){
var map__31423 = p__31422;
var map__31423__$1 = ((((!((map__31423 == null)))?(((((map__31423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31423):map__31423);
var w = map__31423__$1;
var message = cljs.core.get.call(null,map__31423__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31425 = cljs.core.seq.call(null,plugins);
var chunk__31426 = null;
var count__31427 = (0);
var i__31428 = (0);
while(true){
if((i__31428 < count__31427)){
var vec__31429 = cljs.core._nth.call(null,chunk__31426,i__31428);
var k = cljs.core.nth.call(null,vec__31429,(0),null);
var plugin = cljs.core.nth.call(null,vec__31429,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31435 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31425,chunk__31426,count__31427,i__31428,pl_31435,vec__31429,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31435.call(null,msg_hist);
});})(seq__31425,chunk__31426,count__31427,i__31428,pl_31435,vec__31429,k,plugin))
);
} else {
}


var G__31436 = seq__31425;
var G__31437 = chunk__31426;
var G__31438 = count__31427;
var G__31439 = (i__31428 + (1));
seq__31425 = G__31436;
chunk__31426 = G__31437;
count__31427 = G__31438;
i__31428 = G__31439;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31425);
if(temp__5457__auto__){
var seq__31425__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31425__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__31425__$1);
var G__31440 = cljs.core.chunk_rest.call(null,seq__31425__$1);
var G__31441 = c__4351__auto__;
var G__31442 = cljs.core.count.call(null,c__4351__auto__);
var G__31443 = (0);
seq__31425 = G__31440;
chunk__31426 = G__31441;
count__31427 = G__31442;
i__31428 = G__31443;
continue;
} else {
var vec__31432 = cljs.core.first.call(null,seq__31425__$1);
var k = cljs.core.nth.call(null,vec__31432,(0),null);
var plugin = cljs.core.nth.call(null,vec__31432,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31444 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31425,chunk__31426,count__31427,i__31428,pl_31444,vec__31432,k,plugin,seq__31425__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31444.call(null,msg_hist);
});})(seq__31425,chunk__31426,count__31427,i__31428,pl_31444,vec__31432,k,plugin,seq__31425__$1,temp__5457__auto__))
);
} else {
}


var G__31445 = cljs.core.next.call(null,seq__31425__$1);
var G__31446 = null;
var G__31447 = (0);
var G__31448 = (0);
seq__31425 = G__31445;
chunk__31426 = G__31446;
count__31427 = G__31447;
i__31428 = G__31448;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31450 = arguments.length;
switch (G__31450) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31451_31456 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31452_31457 = null;
var count__31453_31458 = (0);
var i__31454_31459 = (0);
while(true){
if((i__31454_31459 < count__31453_31458)){
var msg_31460 = cljs.core._nth.call(null,chunk__31452_31457,i__31454_31459);
figwheel.client.socket.handle_incoming_message.call(null,msg_31460);


var G__31461 = seq__31451_31456;
var G__31462 = chunk__31452_31457;
var G__31463 = count__31453_31458;
var G__31464 = (i__31454_31459 + (1));
seq__31451_31456 = G__31461;
chunk__31452_31457 = G__31462;
count__31453_31458 = G__31463;
i__31454_31459 = G__31464;
continue;
} else {
var temp__5457__auto___31465 = cljs.core.seq.call(null,seq__31451_31456);
if(temp__5457__auto___31465){
var seq__31451_31466__$1 = temp__5457__auto___31465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31451_31466__$1)){
var c__4351__auto___31467 = cljs.core.chunk_first.call(null,seq__31451_31466__$1);
var G__31468 = cljs.core.chunk_rest.call(null,seq__31451_31466__$1);
var G__31469 = c__4351__auto___31467;
var G__31470 = cljs.core.count.call(null,c__4351__auto___31467);
var G__31471 = (0);
seq__31451_31456 = G__31468;
chunk__31452_31457 = G__31469;
count__31453_31458 = G__31470;
i__31454_31459 = G__31471;
continue;
} else {
var msg_31472 = cljs.core.first.call(null,seq__31451_31466__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31472);


var G__31473 = cljs.core.next.call(null,seq__31451_31466__$1);
var G__31474 = null;
var G__31475 = (0);
var G__31476 = (0);
seq__31451_31456 = G__31473;
chunk__31452_31457 = G__31474;
count__31453_31458 = G__31475;
i__31454_31459 = G__31476;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___31481 = arguments.length;
var i__4532__auto___31482 = (0);
while(true){
if((i__4532__auto___31482 < len__4531__auto___31481)){
args__4534__auto__.push((arguments[i__4532__auto___31482]));

var G__31483 = (i__4532__auto___31482 + (1));
i__4532__auto___31482 = G__31483;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31478){
var map__31479 = p__31478;
var map__31479__$1 = ((((!((map__31479 == null)))?(((((map__31479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31479):map__31479);
var opts = map__31479__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31477){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31477));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31484){if((e31484 instanceof Error)){
var e = e31484;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31484;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31485){
var map__31486 = p__31485;
var map__31486__$1 = ((((!((map__31486 == null)))?(((((map__31486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31486):map__31486);
var msg_name = cljs.core.get.call(null,map__31486__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1531487549004
