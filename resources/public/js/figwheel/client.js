// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
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
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26022 = cljs.core._EQ_;
var expr__26023 = (function (){var or__16785__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26022.call(null,"true",expr__26023))){
return true;
} else {
if(cljs.core.truth_(pred__26022.call(null,"false",expr__26023))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26023)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26025__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26025 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26026__i = 0, G__26026__a = new Array(arguments.length -  0);
while (G__26026__i < G__26026__a.length) {G__26026__a[G__26026__i] = arguments[G__26026__i + 0]; ++G__26026__i;}
  args = new cljs.core.IndexedSeq(G__26026__a,0);
} 
return G__26025__delegate.call(this,args);};
G__26025.cljs$lang$maxFixedArity = 0;
G__26025.cljs$lang$applyTo = (function (arglist__26027){
var args = cljs.core.seq(arglist__26027);
return G__26025__delegate(args);
});
G__26025.cljs$core$IFn$_invoke$arity$variadic = G__26025__delegate;
return G__26025;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26028){
var map__26031 = p__26028;
var map__26031__$1 = ((((!((map__26031 == null)))?((((map__26031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26031):map__26031);
var message = cljs.core.get.call(null,map__26031__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26031__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16785__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16773__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16773__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16773__auto__;
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
var c__21710__auto___26193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___26193,ch){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___26193,ch){
return (function (state_26162){
var state_val_26163 = (state_26162[(1)]);
if((state_val_26163 === (7))){
var inst_26158 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26164_26194 = state_26162__$1;
(statearr_26164_26194[(2)] = inst_26158);

(statearr_26164_26194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (1))){
var state_26162__$1 = state_26162;
var statearr_26165_26195 = state_26162__$1;
(statearr_26165_26195[(2)] = null);

(statearr_26165_26195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (4))){
var inst_26115 = (state_26162[(7)]);
var inst_26115__$1 = (state_26162[(2)]);
var state_26162__$1 = (function (){var statearr_26166 = state_26162;
(statearr_26166[(7)] = inst_26115__$1);

return statearr_26166;
})();
if(cljs.core.truth_(inst_26115__$1)){
var statearr_26167_26196 = state_26162__$1;
(statearr_26167_26196[(1)] = (5));

} else {
var statearr_26168_26197 = state_26162__$1;
(statearr_26168_26197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (15))){
var inst_26122 = (state_26162[(8)]);
var inst_26137 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26122);
var inst_26138 = cljs.core.first.call(null,inst_26137);
var inst_26139 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26138);
var inst_26140 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26139)].join('');
var inst_26141 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26140);
var state_26162__$1 = state_26162;
var statearr_26169_26198 = state_26162__$1;
(statearr_26169_26198[(2)] = inst_26141);

(statearr_26169_26198[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (13))){
var inst_26146 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26170_26199 = state_26162__$1;
(statearr_26170_26199[(2)] = inst_26146);

(statearr_26170_26199[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (6))){
var state_26162__$1 = state_26162;
var statearr_26171_26200 = state_26162__$1;
(statearr_26171_26200[(2)] = null);

(statearr_26171_26200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (17))){
var inst_26144 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26172_26201 = state_26162__$1;
(statearr_26172_26201[(2)] = inst_26144);

(statearr_26172_26201[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (3))){
var inst_26160 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26162__$1,inst_26160);
} else {
if((state_val_26163 === (12))){
var inst_26121 = (state_26162[(9)]);
var inst_26135 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26121,opts);
var state_26162__$1 = state_26162;
if(cljs.core.truth_(inst_26135)){
var statearr_26173_26202 = state_26162__$1;
(statearr_26173_26202[(1)] = (15));

} else {
var statearr_26174_26203 = state_26162__$1;
(statearr_26174_26203[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (2))){
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26162__$1,(4),ch);
} else {
if((state_val_26163 === (11))){
var inst_26122 = (state_26162[(8)]);
var inst_26127 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26128 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26122);
var inst_26129 = cljs.core.async.timeout.call(null,(1000));
var inst_26130 = [inst_26128,inst_26129];
var inst_26131 = (new cljs.core.PersistentVector(null,2,(5),inst_26127,inst_26130,null));
var state_26162__$1 = state_26162;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26162__$1,(14),inst_26131);
} else {
if((state_val_26163 === (9))){
var inst_26122 = (state_26162[(8)]);
var inst_26148 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26149 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26122);
var inst_26150 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26149);
var inst_26151 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26150)].join('');
var inst_26152 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26151);
var state_26162__$1 = (function (){var statearr_26175 = state_26162;
(statearr_26175[(10)] = inst_26148);

return statearr_26175;
})();
var statearr_26176_26204 = state_26162__$1;
(statearr_26176_26204[(2)] = inst_26152);

(statearr_26176_26204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (5))){
var inst_26115 = (state_26162[(7)]);
var inst_26117 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26118 = (new cljs.core.PersistentArrayMap(null,2,inst_26117,null));
var inst_26119 = (new cljs.core.PersistentHashSet(null,inst_26118,null));
var inst_26120 = figwheel.client.focus_msgs.call(null,inst_26119,inst_26115);
var inst_26121 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26120);
var inst_26122 = cljs.core.first.call(null,inst_26120);
var inst_26123 = figwheel.client.autoload_QMARK_.call(null);
var state_26162__$1 = (function (){var statearr_26177 = state_26162;
(statearr_26177[(8)] = inst_26122);

(statearr_26177[(9)] = inst_26121);

return statearr_26177;
})();
if(cljs.core.truth_(inst_26123)){
var statearr_26178_26205 = state_26162__$1;
(statearr_26178_26205[(1)] = (8));

} else {
var statearr_26179_26206 = state_26162__$1;
(statearr_26179_26206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (14))){
var inst_26133 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26180_26207 = state_26162__$1;
(statearr_26180_26207[(2)] = inst_26133);

(statearr_26180_26207[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (16))){
var state_26162__$1 = state_26162;
var statearr_26181_26208 = state_26162__$1;
(statearr_26181_26208[(2)] = null);

(statearr_26181_26208[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (10))){
var inst_26154 = (state_26162[(2)]);
var state_26162__$1 = (function (){var statearr_26182 = state_26162;
(statearr_26182[(11)] = inst_26154);

return statearr_26182;
})();
var statearr_26183_26209 = state_26162__$1;
(statearr_26183_26209[(2)] = null);

(statearr_26183_26209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (8))){
var inst_26121 = (state_26162[(9)]);
var inst_26125 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26121,opts);
var state_26162__$1 = state_26162;
if(cljs.core.truth_(inst_26125)){
var statearr_26184_26210 = state_26162__$1;
(statearr_26184_26210[(1)] = (11));

} else {
var statearr_26185_26211 = state_26162__$1;
(statearr_26185_26211[(1)] = (12));

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
});})(c__21710__auto___26193,ch))
;
return ((function (switch__21598__auto__,c__21710__auto___26193,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21599__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21599__auto____0 = (function (){
var statearr_26189 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26189[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21599__auto__);

(statearr_26189[(1)] = (1));

return statearr_26189;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21599__auto____1 = (function (state_26162){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_26162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e26190){if((e26190 instanceof Object)){
var ex__21602__auto__ = e26190;
var statearr_26191_26212 = state_26162;
(statearr_26191_26212[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26213 = state_26162;
state_26162 = G__26213;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21599__auto__ = function(state_26162){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21599__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21599__auto____1.call(this,state_26162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21599__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21599__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___26193,ch))
})();
var state__21712__auto__ = (function (){var statearr_26192 = f__21711__auto__.call(null);
(statearr_26192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___26193);

return statearr_26192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___26193,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26214_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26214_SHARP_));
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
var base_path_26221 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26221){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26219 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26220 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26219,_STAR_print_newline_STAR_26220,base_path_26221){
return (function() { 
var G__26222__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26223__i = 0, G__26223__a = new Array(arguments.length -  0);
while (G__26223__i < G__26223__a.length) {G__26223__a[G__26223__i] = arguments[G__26223__i + 0]; ++G__26223__i;}
  args = new cljs.core.IndexedSeq(G__26223__a,0);
} 
return G__26222__delegate.call(this,args);};
G__26222.cljs$lang$maxFixedArity = 0;
G__26222.cljs$lang$applyTo = (function (arglist__26224){
var args = cljs.core.seq(arglist__26224);
return G__26222__delegate(args);
});
G__26222.cljs$core$IFn$_invoke$arity$variadic = G__26222__delegate;
return G__26222;
})()
;})(_STAR_print_fn_STAR_26219,_STAR_print_newline_STAR_26220,base_path_26221))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26220;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26219;
}}catch (e26218){if((e26218 instanceof Error)){
var e = e26218;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26221], null));
} else {
var e = e26218;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26221))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26225){
var map__26232 = p__26225;
var map__26232__$1 = ((((!((map__26232 == null)))?((((map__26232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26232):map__26232);
var opts = map__26232__$1;
var build_id = cljs.core.get.call(null,map__26232__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26232,map__26232__$1,opts,build_id){
return (function (p__26234){
var vec__26235 = p__26234;
var map__26236 = cljs.core.nth.call(null,vec__26235,(0),null);
var map__26236__$1 = ((((!((map__26236 == null)))?((((map__26236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26236):map__26236);
var msg = map__26236__$1;
var msg_name = cljs.core.get.call(null,map__26236__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26235,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26235,map__26236,map__26236__$1,msg,msg_name,_,map__26232,map__26232__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26235,map__26236,map__26236__$1,msg,msg_name,_,map__26232,map__26232__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26232,map__26232__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26242){
var vec__26243 = p__26242;
var map__26244 = cljs.core.nth.call(null,vec__26243,(0),null);
var map__26244__$1 = ((((!((map__26244 == null)))?((((map__26244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26244):map__26244);
var msg = map__26244__$1;
var msg_name = cljs.core.get.call(null,map__26244__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26243,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26246){
var map__26256 = p__26246;
var map__26256__$1 = ((((!((map__26256 == null)))?((((map__26256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26256):map__26256);
var on_compile_warning = cljs.core.get.call(null,map__26256__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26256__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26256,map__26256__$1,on_compile_warning,on_compile_fail){
return (function (p__26258){
var vec__26259 = p__26258;
var map__26260 = cljs.core.nth.call(null,vec__26259,(0),null);
var map__26260__$1 = ((((!((map__26260 == null)))?((((map__26260.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26260.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26260):map__26260);
var msg = map__26260__$1;
var msg_name = cljs.core.get.call(null,map__26260__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26259,(1));
var pred__26262 = cljs.core._EQ_;
var expr__26263 = msg_name;
if(cljs.core.truth_(pred__26262.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26263))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26262.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26263))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26256,map__26256__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto__,msg_hist,msg_names,msg){
return (function (state_26479){
var state_val_26480 = (state_26479[(1)]);
if((state_val_26480 === (7))){
var inst_26403 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
if(cljs.core.truth_(inst_26403)){
var statearr_26481_26527 = state_26479__$1;
(statearr_26481_26527[(1)] = (8));

} else {
var statearr_26482_26528 = state_26479__$1;
(statearr_26482_26528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (20))){
var inst_26473 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26483_26529 = state_26479__$1;
(statearr_26483_26529[(2)] = inst_26473);

(statearr_26483_26529[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (27))){
var inst_26469 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26484_26530 = state_26479__$1;
(statearr_26484_26530[(2)] = inst_26469);

(statearr_26484_26530[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (1))){
var inst_26396 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26479__$1 = state_26479;
if(cljs.core.truth_(inst_26396)){
var statearr_26485_26531 = state_26479__$1;
(statearr_26485_26531[(1)] = (2));

} else {
var statearr_26486_26532 = state_26479__$1;
(statearr_26486_26532[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (24))){
var inst_26471 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26487_26533 = state_26479__$1;
(statearr_26487_26533[(2)] = inst_26471);

(statearr_26487_26533[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (4))){
var inst_26477 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26479__$1,inst_26477);
} else {
if((state_val_26480 === (15))){
var inst_26475 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26488_26534 = state_26479__$1;
(statearr_26488_26534[(2)] = inst_26475);

(statearr_26488_26534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (21))){
var inst_26434 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26489_26535 = state_26479__$1;
(statearr_26489_26535[(2)] = inst_26434);

(statearr_26489_26535[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (31))){
var inst_26458 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26479__$1 = state_26479;
if(cljs.core.truth_(inst_26458)){
var statearr_26490_26536 = state_26479__$1;
(statearr_26490_26536[(1)] = (34));

} else {
var statearr_26491_26537 = state_26479__$1;
(statearr_26491_26537[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (32))){
var inst_26467 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26492_26538 = state_26479__$1;
(statearr_26492_26538[(2)] = inst_26467);

(statearr_26492_26538[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (33))){
var inst_26456 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26493_26539 = state_26479__$1;
(statearr_26493_26539[(2)] = inst_26456);

(statearr_26493_26539[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (13))){
var inst_26417 = figwheel.client.heads_up.clear.call(null);
var state_26479__$1 = state_26479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26479__$1,(16),inst_26417);
} else {
if((state_val_26480 === (22))){
var inst_26438 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26439 = figwheel.client.heads_up.append_message.call(null,inst_26438);
var state_26479__$1 = state_26479;
var statearr_26494_26540 = state_26479__$1;
(statearr_26494_26540[(2)] = inst_26439);

(statearr_26494_26540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (36))){
var inst_26465 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26495_26541 = state_26479__$1;
(statearr_26495_26541[(2)] = inst_26465);

(statearr_26495_26541[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (29))){
var inst_26449 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26496_26542 = state_26479__$1;
(statearr_26496_26542[(2)] = inst_26449);

(statearr_26496_26542[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (6))){
var inst_26398 = (state_26479[(7)]);
var state_26479__$1 = state_26479;
var statearr_26497_26543 = state_26479__$1;
(statearr_26497_26543[(2)] = inst_26398);

(statearr_26497_26543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (28))){
var inst_26445 = (state_26479[(2)]);
var inst_26446 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26447 = figwheel.client.heads_up.display_warning.call(null,inst_26446);
var state_26479__$1 = (function (){var statearr_26498 = state_26479;
(statearr_26498[(8)] = inst_26445);

return statearr_26498;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26479__$1,(29),inst_26447);
} else {
if((state_val_26480 === (25))){
var inst_26443 = figwheel.client.heads_up.clear.call(null);
var state_26479__$1 = state_26479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26479__$1,(28),inst_26443);
} else {
if((state_val_26480 === (34))){
var inst_26460 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26479__$1 = state_26479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26479__$1,(37),inst_26460);
} else {
if((state_val_26480 === (17))){
var inst_26425 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26499_26544 = state_26479__$1;
(statearr_26499_26544[(2)] = inst_26425);

(statearr_26499_26544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (3))){
var inst_26415 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26479__$1 = state_26479;
if(cljs.core.truth_(inst_26415)){
var statearr_26500_26545 = state_26479__$1;
(statearr_26500_26545[(1)] = (13));

} else {
var statearr_26501_26546 = state_26479__$1;
(statearr_26501_26546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (12))){
var inst_26411 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26502_26547 = state_26479__$1;
(statearr_26502_26547[(2)] = inst_26411);

(statearr_26502_26547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (2))){
var inst_26398 = (state_26479[(7)]);
var inst_26398__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26479__$1 = (function (){var statearr_26503 = state_26479;
(statearr_26503[(7)] = inst_26398__$1);

return statearr_26503;
})();
if(cljs.core.truth_(inst_26398__$1)){
var statearr_26504_26548 = state_26479__$1;
(statearr_26504_26548[(1)] = (5));

} else {
var statearr_26505_26549 = state_26479__$1;
(statearr_26505_26549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (23))){
var inst_26441 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26479__$1 = state_26479;
if(cljs.core.truth_(inst_26441)){
var statearr_26506_26550 = state_26479__$1;
(statearr_26506_26550[(1)] = (25));

} else {
var statearr_26507_26551 = state_26479__$1;
(statearr_26507_26551[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (35))){
var state_26479__$1 = state_26479;
var statearr_26508_26552 = state_26479__$1;
(statearr_26508_26552[(2)] = null);

(statearr_26508_26552[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (19))){
var inst_26436 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26479__$1 = state_26479;
if(cljs.core.truth_(inst_26436)){
var statearr_26509_26553 = state_26479__$1;
(statearr_26509_26553[(1)] = (22));

} else {
var statearr_26510_26554 = state_26479__$1;
(statearr_26510_26554[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (11))){
var inst_26407 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26511_26555 = state_26479__$1;
(statearr_26511_26555[(2)] = inst_26407);

(statearr_26511_26555[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (9))){
var inst_26409 = figwheel.client.heads_up.clear.call(null);
var state_26479__$1 = state_26479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26479__$1,(12),inst_26409);
} else {
if((state_val_26480 === (5))){
var inst_26400 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26479__$1 = state_26479;
var statearr_26512_26556 = state_26479__$1;
(statearr_26512_26556[(2)] = inst_26400);

(statearr_26512_26556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (14))){
var inst_26427 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26479__$1 = state_26479;
if(cljs.core.truth_(inst_26427)){
var statearr_26513_26557 = state_26479__$1;
(statearr_26513_26557[(1)] = (18));

} else {
var statearr_26514_26558 = state_26479__$1;
(statearr_26514_26558[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (26))){
var inst_26451 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26479__$1 = state_26479;
if(cljs.core.truth_(inst_26451)){
var statearr_26515_26559 = state_26479__$1;
(statearr_26515_26559[(1)] = (30));

} else {
var statearr_26516_26560 = state_26479__$1;
(statearr_26516_26560[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (16))){
var inst_26419 = (state_26479[(2)]);
var inst_26420 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26421 = figwheel.client.format_messages.call(null,inst_26420);
var inst_26422 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26423 = figwheel.client.heads_up.display_error.call(null,inst_26421,inst_26422);
var state_26479__$1 = (function (){var statearr_26517 = state_26479;
(statearr_26517[(9)] = inst_26419);

return statearr_26517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26479__$1,(17),inst_26423);
} else {
if((state_val_26480 === (30))){
var inst_26453 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26454 = figwheel.client.heads_up.display_warning.call(null,inst_26453);
var state_26479__$1 = state_26479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26479__$1,(33),inst_26454);
} else {
if((state_val_26480 === (10))){
var inst_26413 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26518_26561 = state_26479__$1;
(statearr_26518_26561[(2)] = inst_26413);

(statearr_26518_26561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (18))){
var inst_26429 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26430 = figwheel.client.format_messages.call(null,inst_26429);
var inst_26431 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26432 = figwheel.client.heads_up.display_error.call(null,inst_26430,inst_26431);
var state_26479__$1 = state_26479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26479__$1,(21),inst_26432);
} else {
if((state_val_26480 === (37))){
var inst_26462 = (state_26479[(2)]);
var state_26479__$1 = state_26479;
var statearr_26519_26562 = state_26479__$1;
(statearr_26519_26562[(2)] = inst_26462);

(statearr_26519_26562[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26480 === (8))){
var inst_26405 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26479__$1 = state_26479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26479__$1,(11),inst_26405);
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
});})(c__21710__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21598__auto__,c__21710__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto____0 = (function (){
var statearr_26523 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26523[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto__);

(statearr_26523[(1)] = (1));

return statearr_26523;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto____1 = (function (state_26479){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_26479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e26524){if((e26524 instanceof Object)){
var ex__21602__auto__ = e26524;
var statearr_26525_26563 = state_26479;
(statearr_26525_26563[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26564 = state_26479;
state_26479 = G__26564;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto__ = function(state_26479){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto____1.call(this,state_26479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto__,msg_hist,msg_names,msg))
})();
var state__21712__auto__ = (function (){var statearr_26526 = f__21711__auto__.call(null);
(statearr_26526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto__);

return statearr_26526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto__,msg_hist,msg_names,msg))
);

return c__21710__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21710__auto___26627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___26627,ch){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___26627,ch){
return (function (state_26610){
var state_val_26611 = (state_26610[(1)]);
if((state_val_26611 === (1))){
var state_26610__$1 = state_26610;
var statearr_26612_26628 = state_26610__$1;
(statearr_26612_26628[(2)] = null);

(statearr_26612_26628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (2))){
var state_26610__$1 = state_26610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26610__$1,(4),ch);
} else {
if((state_val_26611 === (3))){
var inst_26608 = (state_26610[(2)]);
var state_26610__$1 = state_26610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26610__$1,inst_26608);
} else {
if((state_val_26611 === (4))){
var inst_26598 = (state_26610[(7)]);
var inst_26598__$1 = (state_26610[(2)]);
var state_26610__$1 = (function (){var statearr_26613 = state_26610;
(statearr_26613[(7)] = inst_26598__$1);

return statearr_26613;
})();
if(cljs.core.truth_(inst_26598__$1)){
var statearr_26614_26629 = state_26610__$1;
(statearr_26614_26629[(1)] = (5));

} else {
var statearr_26615_26630 = state_26610__$1;
(statearr_26615_26630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (5))){
var inst_26598 = (state_26610[(7)]);
var inst_26600 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26598);
var state_26610__$1 = state_26610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26610__$1,(8),inst_26600);
} else {
if((state_val_26611 === (6))){
var state_26610__$1 = state_26610;
var statearr_26616_26631 = state_26610__$1;
(statearr_26616_26631[(2)] = null);

(statearr_26616_26631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (7))){
var inst_26606 = (state_26610[(2)]);
var state_26610__$1 = state_26610;
var statearr_26617_26632 = state_26610__$1;
(statearr_26617_26632[(2)] = inst_26606);

(statearr_26617_26632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26611 === (8))){
var inst_26602 = (state_26610[(2)]);
var state_26610__$1 = (function (){var statearr_26618 = state_26610;
(statearr_26618[(8)] = inst_26602);

return statearr_26618;
})();
var statearr_26619_26633 = state_26610__$1;
(statearr_26619_26633[(2)] = null);

(statearr_26619_26633[(1)] = (2));


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
});})(c__21710__auto___26627,ch))
;
return ((function (switch__21598__auto__,c__21710__auto___26627,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21599__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21599__auto____0 = (function (){
var statearr_26623 = [null,null,null,null,null,null,null,null,null];
(statearr_26623[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21599__auto__);

(statearr_26623[(1)] = (1));

return statearr_26623;
});
var figwheel$client$heads_up_plugin_$_state_machine__21599__auto____1 = (function (state_26610){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_26610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e26624){if((e26624 instanceof Object)){
var ex__21602__auto__ = e26624;
var statearr_26625_26634 = state_26610;
(statearr_26625_26634[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26635 = state_26610;
state_26610 = G__26635;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21599__auto__ = function(state_26610){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21599__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21599__auto____1.call(this,state_26610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21599__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21599__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___26627,ch))
})();
var state__21712__auto__ = (function (){var statearr_26626 = f__21711__auto__.call(null);
(statearr_26626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___26627);

return statearr_26626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___26627,ch))
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
var c__21710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto__){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto__){
return (function (state_26656){
var state_val_26657 = (state_26656[(1)]);
if((state_val_26657 === (1))){
var inst_26651 = cljs.core.async.timeout.call(null,(3000));
var state_26656__$1 = state_26656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26656__$1,(2),inst_26651);
} else {
if((state_val_26657 === (2))){
var inst_26653 = (state_26656[(2)]);
var inst_26654 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26656__$1 = (function (){var statearr_26658 = state_26656;
(statearr_26658[(7)] = inst_26653);

return statearr_26658;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26656__$1,inst_26654);
} else {
return null;
}
}
});})(c__21710__auto__))
;
return ((function (switch__21598__auto__,c__21710__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21599__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21599__auto____0 = (function (){
var statearr_26662 = [null,null,null,null,null,null,null,null];
(statearr_26662[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21599__auto__);

(statearr_26662[(1)] = (1));

return statearr_26662;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21599__auto____1 = (function (state_26656){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_26656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e26663){if((e26663 instanceof Object)){
var ex__21602__auto__ = e26663;
var statearr_26664_26666 = state_26656;
(statearr_26664_26666[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26667 = state_26656;
state_26656 = G__26667;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21599__auto__ = function(state_26656){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21599__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21599__auto____1.call(this,state_26656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21599__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21599__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto__))
})();
var state__21712__auto__ = (function (){var statearr_26665 = f__21711__auto__.call(null);
(statearr_26665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto__);

return statearr_26665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto__))
);

return c__21710__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26668){
var map__26675 = p__26668;
var map__26675__$1 = ((((!((map__26675 == null)))?((((map__26675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26675):map__26675);
var ed = map__26675__$1;
var formatted_exception = cljs.core.get.call(null,map__26675__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26675__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26675__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26677_26681 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26678_26682 = null;
var count__26679_26683 = (0);
var i__26680_26684 = (0);
while(true){
if((i__26680_26684 < count__26679_26683)){
var msg_26685 = cljs.core._nth.call(null,chunk__26678_26682,i__26680_26684);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26685);

var G__26686 = seq__26677_26681;
var G__26687 = chunk__26678_26682;
var G__26688 = count__26679_26683;
var G__26689 = (i__26680_26684 + (1));
seq__26677_26681 = G__26686;
chunk__26678_26682 = G__26687;
count__26679_26683 = G__26688;
i__26680_26684 = G__26689;
continue;
} else {
var temp__4425__auto___26690 = cljs.core.seq.call(null,seq__26677_26681);
if(temp__4425__auto___26690){
var seq__26677_26691__$1 = temp__4425__auto___26690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26677_26691__$1)){
var c__17589__auto___26692 = cljs.core.chunk_first.call(null,seq__26677_26691__$1);
var G__26693 = cljs.core.chunk_rest.call(null,seq__26677_26691__$1);
var G__26694 = c__17589__auto___26692;
var G__26695 = cljs.core.count.call(null,c__17589__auto___26692);
var G__26696 = (0);
seq__26677_26681 = G__26693;
chunk__26678_26682 = G__26694;
count__26679_26683 = G__26695;
i__26680_26684 = G__26696;
continue;
} else {
var msg_26697 = cljs.core.first.call(null,seq__26677_26691__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26697);

var G__26698 = cljs.core.next.call(null,seq__26677_26691__$1);
var G__26699 = null;
var G__26700 = (0);
var G__26701 = (0);
seq__26677_26681 = G__26698;
chunk__26678_26682 = G__26699;
count__26679_26683 = G__26700;
i__26680_26684 = G__26701;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26702){
var map__26705 = p__26702;
var map__26705__$1 = ((((!((map__26705 == null)))?((((map__26705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26705):map__26705);
var w = map__26705__$1;
var message = cljs.core.get.call(null,map__26705__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16773__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16773__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16773__auto__;
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
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26713 = cljs.core.seq.call(null,plugins);
var chunk__26714 = null;
var count__26715 = (0);
var i__26716 = (0);
while(true){
if((i__26716 < count__26715)){
var vec__26717 = cljs.core._nth.call(null,chunk__26714,i__26716);
var k = cljs.core.nth.call(null,vec__26717,(0),null);
var plugin = cljs.core.nth.call(null,vec__26717,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26719 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26713,chunk__26714,count__26715,i__26716,pl_26719,vec__26717,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26719.call(null,msg_hist);
});})(seq__26713,chunk__26714,count__26715,i__26716,pl_26719,vec__26717,k,plugin))
);
} else {
}

var G__26720 = seq__26713;
var G__26721 = chunk__26714;
var G__26722 = count__26715;
var G__26723 = (i__26716 + (1));
seq__26713 = G__26720;
chunk__26714 = G__26721;
count__26715 = G__26722;
i__26716 = G__26723;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26713);
if(temp__4425__auto__){
var seq__26713__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26713__$1)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,seq__26713__$1);
var G__26724 = cljs.core.chunk_rest.call(null,seq__26713__$1);
var G__26725 = c__17589__auto__;
var G__26726 = cljs.core.count.call(null,c__17589__auto__);
var G__26727 = (0);
seq__26713 = G__26724;
chunk__26714 = G__26725;
count__26715 = G__26726;
i__26716 = G__26727;
continue;
} else {
var vec__26718 = cljs.core.first.call(null,seq__26713__$1);
var k = cljs.core.nth.call(null,vec__26718,(0),null);
var plugin = cljs.core.nth.call(null,vec__26718,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26728 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26713,chunk__26714,count__26715,i__26716,pl_26728,vec__26718,k,plugin,seq__26713__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26728.call(null,msg_hist);
});})(seq__26713,chunk__26714,count__26715,i__26716,pl_26728,vec__26718,k,plugin,seq__26713__$1,temp__4425__auto__))
);
} else {
}

var G__26729 = cljs.core.next.call(null,seq__26713__$1);
var G__26730 = null;
var G__26731 = (0);
var G__26732 = (0);
seq__26713 = G__26729;
chunk__26714 = G__26730;
count__26715 = G__26731;
i__26716 = G__26732;
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
var args26733 = [];
var len__17844__auto___26736 = arguments.length;
var i__17845__auto___26737 = (0);
while(true){
if((i__17845__auto___26737 < len__17844__auto___26736)){
args26733.push((arguments[i__17845__auto___26737]));

var G__26738 = (i__17845__auto___26737 + (1));
i__17845__auto___26737 = G__26738;
continue;
} else {
}
break;
}

var G__26735 = args26733.length;
switch (G__26735) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26733.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
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
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17851__auto__ = [];
var len__17844__auto___26744 = arguments.length;
var i__17845__auto___26745 = (0);
while(true){
if((i__17845__auto___26745 < len__17844__auto___26744)){
args__17851__auto__.push((arguments[i__17845__auto___26745]));

var G__26746 = (i__17845__auto___26745 + (1));
i__17845__auto___26745 = G__26746;
continue;
} else {
}
break;
}

var argseq__17852__auto__ = ((((0) < args__17851__auto__.length))?(new cljs.core.IndexedSeq(args__17851__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17852__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26741){
var map__26742 = p__26741;
var map__26742__$1 = ((((!((map__26742 == null)))?((((map__26742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26742):map__26742);
var opts = map__26742__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26740){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26740));
});

//# sourceMappingURL=client.js.map