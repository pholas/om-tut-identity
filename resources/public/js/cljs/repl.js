// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
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
var seq__25603_25617 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25604_25618 = null;
var count__25605_25619 = (0);
var i__25606_25620 = (0);
while(true){
if((i__25606_25620 < count__25605_25619)){
var f_25621 = cljs.core._nth.call(null,chunk__25604_25618,i__25606_25620);
cljs.core.println.call(null,"  ",f_25621);

var G__25622 = seq__25603_25617;
var G__25623 = chunk__25604_25618;
var G__25624 = count__25605_25619;
var G__25625 = (i__25606_25620 + (1));
seq__25603_25617 = G__25622;
chunk__25604_25618 = G__25623;
count__25605_25619 = G__25624;
i__25606_25620 = G__25625;
continue;
} else {
var temp__4425__auto___25626 = cljs.core.seq.call(null,seq__25603_25617);
if(temp__4425__auto___25626){
var seq__25603_25627__$1 = temp__4425__auto___25626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25603_25627__$1)){
var c__17589__auto___25628 = cljs.core.chunk_first.call(null,seq__25603_25627__$1);
var G__25629 = cljs.core.chunk_rest.call(null,seq__25603_25627__$1);
var G__25630 = c__17589__auto___25628;
var G__25631 = cljs.core.count.call(null,c__17589__auto___25628);
var G__25632 = (0);
seq__25603_25617 = G__25629;
chunk__25604_25618 = G__25630;
count__25605_25619 = G__25631;
i__25606_25620 = G__25632;
continue;
} else {
var f_25633 = cljs.core.first.call(null,seq__25603_25627__$1);
cljs.core.println.call(null,"  ",f_25633);

var G__25634 = cljs.core.next.call(null,seq__25603_25627__$1);
var G__25635 = null;
var G__25636 = (0);
var G__25637 = (0);
seq__25603_25617 = G__25634;
chunk__25604_25618 = G__25635;
count__25605_25619 = G__25636;
i__25606_25620 = G__25637;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25638 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16785__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25638);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25638)))?cljs.core.second.call(null,arglists_25638):arglists_25638));
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
var seq__25607 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25608 = null;
var count__25609 = (0);
var i__25610 = (0);
while(true){
if((i__25610 < count__25609)){
var vec__25611 = cljs.core._nth.call(null,chunk__25608,i__25610);
var name = cljs.core.nth.call(null,vec__25611,(0),null);
var map__25612 = cljs.core.nth.call(null,vec__25611,(1),null);
var map__25612__$1 = ((((!((map__25612 == null)))?((((map__25612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25612):map__25612);
var doc = cljs.core.get.call(null,map__25612__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25612__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25639 = seq__25607;
var G__25640 = chunk__25608;
var G__25641 = count__25609;
var G__25642 = (i__25610 + (1));
seq__25607 = G__25639;
chunk__25608 = G__25640;
count__25609 = G__25641;
i__25610 = G__25642;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25607);
if(temp__4425__auto__){
var seq__25607__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25607__$1)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,seq__25607__$1);
var G__25643 = cljs.core.chunk_rest.call(null,seq__25607__$1);
var G__25644 = c__17589__auto__;
var G__25645 = cljs.core.count.call(null,c__17589__auto__);
var G__25646 = (0);
seq__25607 = G__25643;
chunk__25608 = G__25644;
count__25609 = G__25645;
i__25610 = G__25646;
continue;
} else {
var vec__25614 = cljs.core.first.call(null,seq__25607__$1);
var name = cljs.core.nth.call(null,vec__25614,(0),null);
var map__25615 = cljs.core.nth.call(null,vec__25614,(1),null);
var map__25615__$1 = ((((!((map__25615 == null)))?((((map__25615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25615):map__25615);
var doc = cljs.core.get.call(null,map__25615__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25615__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25647 = cljs.core.next.call(null,seq__25607__$1);
var G__25648 = null;
var G__25649 = (0);
var G__25650 = (0);
seq__25607 = G__25647;
chunk__25608 = G__25648;
count__25609 = G__25649;
i__25610 = G__25650;
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