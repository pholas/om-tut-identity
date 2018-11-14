// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
cljs.core.enable_console_print_BANG_.call(null);
om_tutorial.core.init_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("list","one","list/one",942123326),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"John",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Mary",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Bob",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null)], null),new cljs.core.Keyword("list","two","list/two",521811255),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Mary",new cljs.core.Keyword(null,"points","points",-1486596883),(0),new cljs.core.Keyword(null,"age","age",-604307804),(27)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Gwen",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Jeff",new cljs.core.Keyword(null,"points","points",-1486596883),(0)], null)], null)], null);
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__17699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17703__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17703__auto__,method_table__17699__auto__,prefer_table__17700__auto__,method_cache__17701__auto__,cached_hierarchy__17702__auto__));
})();
}
om_tutorial.core.get_people = (function om_tutorial$core$get_people(state,key){
var st = cljs.core.deref.call(null,state);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st){
return (function (p1__29284_SHARP_){
return cljs.core.get_in.call(null,st,p1__29284_SHARP_);
});})(st))
),cljs.core.get.call(null,st,key));
});
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword(null,"name","name",1843675177),(function (env,key,params){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"JACK"], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("list","one","list/one",942123326),(function (p__29285,key,params){
var map__29286 = p__29285;
var map__29286__$1 = ((((!((map__29286 == null)))?((((map__29286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29286):map__29286);
var env = map__29286__$1;
var state = cljs.core.get.call(null,map__29286__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ast = cljs.core.get.call(null,map__29286__$1,new cljs.core.Keyword(null,"ast","ast",-860334068));
var query = cljs.core.get.call(null,map__29286__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
cljs.core.println.call(null,query);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_tutorial.core.get_people.call(null,state,key)], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("list","two","list/two",521811255),(function (p__29288,key,params){
var map__29289 = p__29288;
var map__29289__$1 = ((((!((map__29289 == null)))?((((map__29289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29289):map__29289);
var env = map__29289__$1;
var state = cljs.core.get.call(null,map__29289__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om_tutorial.core.get_people.call(null,state,key)], null);
}));
if(typeof om_tutorial.core.mutate !== 'undefined'){
} else {
om_tutorial.core.mutate = (function (){var method_table__17699__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17700__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17701__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17702__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17703__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17703__auto__,method_table__17699__auto__,prefer_table__17700__auto__,method_cache__17701__auto__,cached_hierarchy__17702__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","increment","points/increment",1315621678,null),(function (p__29291,_,p__29292){
var map__29293 = p__29291;
var map__29293__$1 = ((((!((map__29293 == null)))?((((map__29293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29293):map__29293);
var state = cljs.core.get.call(null,map__29293__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__29294 = p__29292;
var map__29294__$1 = ((((!((map__29294 == null)))?((((map__29294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29294):map__29294);
var name = cljs.core.get.call(null,map__29294__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__29293,map__29293__$1,state,map__29294,map__29294__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"points","points",-1486596883)], null),cljs.core.inc);
});})(map__29293,map__29293__$1,state,map__29294,map__29294__$1,name))
], null);
}));
cljs.core._add_method.call(null,om_tutorial.core.mutate,new cljs.core.Symbol("points","decrement","points/decrement",-848171965,null),(function (p__29298,_,p__29299){
var map__29300 = p__29298;
var map__29300__$1 = ((((!((map__29300 == null)))?((((map__29300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29300):map__29300);
var state = cljs.core.get.call(null,map__29300__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__29301 = p__29299;
var map__29301__$1 = ((((!((map__29301 == null)))?((((map__29301.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29301.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29301):map__29301);
var name = cljs.core.get.call(null,map__29301__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__29300,map__29300__$1,state,map__29301,map__29301__$1,name){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name,new cljs.core.Keyword(null,"points","points",-1486596883)], null),((function (map__29300,map__29300__$1,state,map__29301,map__29301__$1,name){
return (function (p1__29297_SHARP_){
var n = (p1__29297_SHARP_ - (1));
if((n < (0))){
return (0);
} else {
return n;
}
});})(map__29300,map__29300__$1,state,map__29301,map__29301__$1,name))
);
});})(map__29300,map__29300__$1,state,map__29301,map__29301__$1,name))
], null);
}));
/**
 * @constructor
 */
om_tutorial.core.Person = (function om_tutorial$core$Person(){
var this__20054__auto__ = this;
React.Component.apply(this__20054__auto__,arguments);

if(!((this__20054__auto__.initLocalState == null))){
this__20054__auto__.state = this__20054__auto__.initLocalState();
} else {
this__20054__auto__.state = {};
}

return this__20054__auto__;
});

om_tutorial.core.Person.prototype = goog.object.clone(React.Component.prototype);

var x29308_29324 = om_tutorial.core.Person.prototype;
x29308_29324.componentWillUpdate = ((function (x29308_29324){
return (function (next_props__19995__auto__,next_state__19996__auto__){
var this__19994__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19994__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19994__auto__);
});})(x29308_29324))
;

x29308_29324.shouldComponentUpdate = ((function (x29308_29324){
return (function (next_props__19995__auto__,next_state__19996__auto__){
var this__19994__auto__ = this;
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19994__auto__),goog.object.get(next_props__19995__auto__,"omcljs$value"));
if(or__16785__auto__){
return or__16785__auto__;
} else {
var and__16773__auto__ = this__19994__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19994__auto__.state,"omcljs$state"),goog.object.get(next_state__19996__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
}
});})(x29308_29324))
;

x29308_29324.componentWillUnmount = ((function (x29308_29324){
return (function (){
var this__19994__auto__ = this;
var r__20000__auto__ = om.next.get_reconciler.call(null,this__19994__auto__);
var cfg__20001__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20000__auto__);
var st__20002__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20001__auto__);
var indexer__19999__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20001__auto__);
if((st__20002__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__20002__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19994__auto__);
}

if((indexer__19999__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19999__auto__,this__19994__auto__);
}
});})(x29308_29324))
;

x29308_29324.componentDidUpdate = ((function (x29308_29324){
return (function (prev_props__19997__auto__,prev_state__19998__auto__){
var this__19994__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19994__auto__);
});})(x29308_29324))
;

x29308_29324.isMounted = ((function (x29308_29324){
return (function (){
var this__19994__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19994__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29308_29324))
;

x29308_29324.componentWillMount = ((function (x29308_29324){
return (function (){
var this__19994__auto__ = this;
var indexer__19999__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19994__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19999__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19999__auto__,this__19994__auto__);
}
});})(x29308_29324))
;

x29308_29324.render = ((function (x29308_29324){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_29309 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29310 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29311 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29312 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29313 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{cljs.core.println.call(null,"Render Person",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)),", ",om.next.path.call(null,this$));

var map__29314 = om.next.props.call(null,this$);
var map__29314__$1 = ((((!((map__29314 == null)))?((((map__29314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29314):map__29314);
var props = map__29314__$1;
var points = cljs.core.get.call(null,map__29314__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var name = cljs.core.get.call(null,map__29314__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return React.DOM.li(null,om.util.force_children.call(null,React.DOM.label(null,om.util.force_children.call(null,[cljs.core.str(name),cljs.core.str(", points: "),cljs.core.str(points)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__29314,map__29314__$1,props,points,name,_STAR_reconciler_STAR_29309,_STAR_depth_STAR_29310,_STAR_shared_STAR_29311,_STAR_instrument_STAR_29312,_STAR_parent_STAR_29313,this$,x29308_29324){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("points","increment","points/increment",1315621678,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))))))));
});})(map__29314,map__29314__$1,props,points,name,_STAR_reconciler_STAR_29309,_STAR_depth_STAR_29310,_STAR_shared_STAR_29311,_STAR_instrument_STAR_29312,_STAR_parent_STAR_29313,this$,x29308_29324))
},om.util.force_children.call(null,"+"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__29314,map__29314__$1,props,points,name,_STAR_reconciler_STAR_29309,_STAR_depth_STAR_29310,_STAR_shared_STAR_29311,_STAR_instrument_STAR_29312,_STAR_parent_STAR_29313,this$,x29308_29324){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("points","decrement","points/decrement",-848171965,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props))))))))));
});})(map__29314,map__29314__$1,props,points,name,_STAR_reconciler_STAR_29309,_STAR_depth_STAR_29310,_STAR_shared_STAR_29311,_STAR_instrument_STAR_29312,_STAR_parent_STAR_29313,this$,x29308_29324))
},om.util.force_children.call(null,"-"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29313;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29312;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29311;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29310;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29309;
}});})(x29308_29324))
;


om_tutorial.core.Person.prototype.constructor = om_tutorial.core.Person;

om_tutorial.core.Person.prototype.om$isComponent = true;

var x29316_29325 = om_tutorial.core.Person;
x29316_29325.om$next$Ident$ = true;

x29316_29325.om$next$Ident$ident$arity$2 = ((function (x29316_29325){
return (function (this$,p__29317){
var map__29318 = p__29317;
var map__29318__$1 = ((((!((map__29318 == null)))?((((map__29318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29318):map__29318);
var name = cljs.core.get.call(null,map__29318__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name], null);
});})(x29316_29325))
;

x29316_29325.om$next$IQuery$ = true;

x29316_29325.om$next$IQuery$query$arity$1 = ((function (x29316_29325){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"age","age",-604307804)], null);
});})(x29316_29325))
;


var x29320_29326 = om_tutorial.core.Person.prototype;
x29320_29326.om$next$Ident$ = true;

x29320_29326.om$next$Ident$ident$arity$2 = ((function (x29320_29326){
return (function (this$,p__29321){
var map__29322 = p__29321;
var map__29322__$1 = ((((!((map__29322 == null)))?((((map__29322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29322):map__29322);
var name = cljs.core.get.call(null,map__29322__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("person","by-name","person/by-name",-187459505),name], null);
});})(x29320_29326))
;

x29320_29326.om$next$IQuery$ = true;

x29320_29326.om$next$IQuery$query$arity$1 = ((function (x29320_29326){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"age","age",-604307804)], null);
});})(x29320_29326))
;


om_tutorial.core.Person.cljs$lang$type = true;

om_tutorial.core.Person.cljs$lang$ctorStr = "om-tutorial.core/Person";

om_tutorial.core.Person.cljs$lang$ctorPrWriter = (function (this__20056__auto__,writer__20057__auto__,opt__20058__auto__){
return cljs.core._write.call(null,writer__20057__auto__,"om-tutorial.core/Person");
});
om_tutorial.core.person = om.next.factory.call(null,om_tutorial.core.Person,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"name","name",1843675177)], null));
/**
 * @constructor
 */
om_tutorial.core.ListView = (function om_tutorial$core$ListView(){
var this__20054__auto__ = this;
React.Component.apply(this__20054__auto__,arguments);

if(!((this__20054__auto__.initLocalState == null))){
this__20054__auto__.state = this__20054__auto__.initLocalState();
} else {
this__20054__auto__.state = {};
}

return this__20054__auto__;
});

om_tutorial.core.ListView.prototype = goog.object.clone(React.Component.prototype);

var x29331_29339 = om_tutorial.core.ListView.prototype;
x29331_29339.componentWillUpdate = ((function (x29331_29339){
return (function (next_props__19995__auto__,next_state__19996__auto__){
var this__19994__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19994__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19994__auto__);
});})(x29331_29339))
;

x29331_29339.shouldComponentUpdate = ((function (x29331_29339){
return (function (next_props__19995__auto__,next_state__19996__auto__){
var this__19994__auto__ = this;
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19994__auto__),goog.object.get(next_props__19995__auto__,"omcljs$value"));
if(or__16785__auto__){
return or__16785__auto__;
} else {
var and__16773__auto__ = this__19994__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19994__auto__.state,"omcljs$state"),goog.object.get(next_state__19996__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
}
});})(x29331_29339))
;

x29331_29339.componentWillUnmount = ((function (x29331_29339){
return (function (){
var this__19994__auto__ = this;
var r__20000__auto__ = om.next.get_reconciler.call(null,this__19994__auto__);
var cfg__20001__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20000__auto__);
var st__20002__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20001__auto__);
var indexer__19999__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20001__auto__);
if((st__20002__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__20002__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19994__auto__);
}

if((indexer__19999__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19999__auto__,this__19994__auto__);
}
});})(x29331_29339))
;

x29331_29339.componentDidUpdate = ((function (x29331_29339){
return (function (prev_props__19997__auto__,prev_state__19998__auto__){
var this__19994__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19994__auto__);
});})(x29331_29339))
;

x29331_29339.isMounted = ((function (x29331_29339){
return (function (){
var this__19994__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19994__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29331_29339))
;

x29331_29339.componentWillMount = ((function (x29331_29339){
return (function (){
var this__19994__auto__ = this;
var indexer__19999__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19994__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19999__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19999__auto__,this__19994__auto__);
}
});})(x29331_29339))
;

x29331_29339.render = ((function (x29331_29339){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_29332 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29333 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29334 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29335 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29336 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{cljs.core.println.call(null,"Render ListView",cljs.core.first.call(null,om.next.path.call(null,this$)));

var list = om.next.props.call(null,this$);
return cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,om_tutorial.core.person,list));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29336;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29335;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29334;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29333;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29332;
}});})(x29331_29339))
;


om_tutorial.core.ListView.prototype.constructor = om_tutorial.core.ListView;

om_tutorial.core.ListView.prototype.om$isComponent = true;

var x29337_29340 = om_tutorial.core.ListView;


var x29338_29341 = om_tutorial.core.ListView.prototype;


om_tutorial.core.ListView.cljs$lang$type = true;

om_tutorial.core.ListView.cljs$lang$ctorStr = "om-tutorial.core/ListView";

om_tutorial.core.ListView.cljs$lang$ctorPrWriter = (function (this__20056__auto__,writer__20057__auto__,opt__20058__auto__){
return cljs.core._write.call(null,writer__20057__auto__,"om-tutorial.core/ListView");
});
om_tutorial.core.list_view = om.next.factory.call(null,om_tutorial.core.ListView);
/**
 * @constructor
 */
om_tutorial.core.RootView = (function om_tutorial$core$RootView(){
var this__20054__auto__ = this;
React.Component.apply(this__20054__auto__,arguments);

if(!((this__20054__auto__.initLocalState == null))){
this__20054__auto__.state = this__20054__auto__.initLocalState();
} else {
this__20054__auto__.state = {};
}

return this__20054__auto__;
});

om_tutorial.core.RootView.prototype = goog.object.clone(React.Component.prototype);

var x29346_29356 = om_tutorial.core.RootView.prototype;
x29346_29356.componentWillUpdate = ((function (x29346_29356){
return (function (next_props__19995__auto__,next_state__19996__auto__){
var this__19994__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19994__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19994__auto__);
});})(x29346_29356))
;

x29346_29356.shouldComponentUpdate = ((function (x29346_29356){
return (function (next_props__19995__auto__,next_state__19996__auto__){
var this__19994__auto__ = this;
var or__16785__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19994__auto__),goog.object.get(next_props__19995__auto__,"omcljs$value"));
if(or__16785__auto__){
return or__16785__auto__;
} else {
var and__16773__auto__ = this__19994__auto__.state;
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19994__auto__.state,"omcljs$state"),goog.object.get(next_state__19996__auto__,"omcljs$state"));
} else {
return and__16773__auto__;
}
}
});})(x29346_29356))
;

x29346_29356.componentWillUnmount = ((function (x29346_29356){
return (function (){
var this__19994__auto__ = this;
var r__20000__auto__ = om.next.get_reconciler.call(null,this__19994__auto__);
var cfg__20001__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20000__auto__);
var st__20002__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20001__auto__);
var indexer__19999__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20001__auto__);
if((st__20002__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__20002__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19994__auto__);
}

if((indexer__19999__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19999__auto__,this__19994__auto__);
}
});})(x29346_29356))
;

x29346_29356.componentDidUpdate = ((function (x29346_29356){
return (function (prev_props__19997__auto__,prev_state__19998__auto__){
var this__19994__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19994__auto__);
});})(x29346_29356))
;

x29346_29356.isMounted = ((function (x29346_29356){
return (function (){
var this__19994__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19994__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29346_29356))
;

x29346_29356.componentWillMount = ((function (x29346_29356){
return (function (){
var this__19994__auto__ = this;
var indexer__19999__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19994__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19999__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19999__auto__,this__19994__auto__);
}
});})(x29346_29356))
;

x29346_29356.render = ((function (x29346_29356){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_29347 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29348 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29349 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29350 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29351 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{cljs.core.println.call(null,"Render RootView, ",om.next.path.call(null,this$));

var map__29352 = om.next.props.call(null,this$);
var map__29352__$1 = ((((!((map__29352 == null)))?((((map__29352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29352):map__29352);
var one = cljs.core.get.call(null,map__29352__$1,new cljs.core.Keyword("list","one","list/one",942123326));
var two = cljs.core.get.call(null,map__29352__$1,new cljs.core.Keyword("list","two","list/two",521811255));
return cljs.core.apply.call(null,om.dom.div,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.h2(null,om.util.force_children.call(null,"List A")),om_tutorial.core.list_view.call(null,one),React.DOM.h2(null,om.util.force_children.call(null,"List B")),om_tutorial.core.list_view.call(null,two)], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29351;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29350;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29349;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29348;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29347;
}});})(x29346_29356))
;


om_tutorial.core.RootView.prototype.constructor = om_tutorial.core.RootView;

om_tutorial.core.RootView.prototype.om$isComponent = true;

var x29354_29357 = om_tutorial.core.RootView;
x29354_29357.om$next$IQuery$ = true;

x29354_29357.om$next$IQuery$query$arity$1 = ((function (x29354_29357){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,om_tutorial.core.Person);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","one","list/one",942123326)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","two","list/two",521811255)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery))))))))));
});})(x29354_29357))
;


var x29355_29358 = om_tutorial.core.RootView.prototype;
x29355_29358.om$next$IQuery$ = true;

x29355_29358.om$next$IQuery$query$arity$1 = ((function (x29355_29358){
return (function (this$){
var this$__$1 = this;
var subquery = om.next.get_query.call(null,om_tutorial.core.Person);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","one","list/one",942123326)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("list","two","list/two",521811255)),cljs.core._conj.call(null,cljs.core.List.EMPTY,subquery))))))))));
});})(x29355_29358))
;


om_tutorial.core.RootView.cljs$lang$type = true;

om_tutorial.core.RootView.cljs$lang$ctorStr = "om-tutorial.core/RootView";

om_tutorial.core.RootView.cljs$lang$ctorPrWriter = (function (this__20056__auto__,writer__20057__auto__,opt__20058__auto__){
return cljs.core._write.call(null,writer__20057__auto__,"om-tutorial.core/RootView");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.init_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),om_tutorial.core.mutate], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.RootView,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map