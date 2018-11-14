// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16785__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16785__auto__){
return or__16785__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16785__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24579_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24579_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
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
var seq__24584 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24585 = null;
var count__24586 = (0);
var i__24587 = (0);
while(true){
if((i__24587 < count__24586)){
var n = cljs.core._nth.call(null,chunk__24585,i__24587);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24588 = seq__24584;
var G__24589 = chunk__24585;
var G__24590 = count__24586;
var G__24591 = (i__24587 + (1));
seq__24584 = G__24588;
chunk__24585 = G__24589;
count__24586 = G__24590;
i__24587 = G__24591;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24584);
if(temp__4425__auto__){
var seq__24584__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24584__$1)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,seq__24584__$1);
var G__24592 = cljs.core.chunk_rest.call(null,seq__24584__$1);
var G__24593 = c__17589__auto__;
var G__24594 = cljs.core.count.call(null,c__17589__auto__);
var G__24595 = (0);
seq__24584 = G__24592;
chunk__24585 = G__24593;
count__24586 = G__24594;
i__24587 = G__24595;
continue;
} else {
var n = cljs.core.first.call(null,seq__24584__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24596 = cljs.core.next.call(null,seq__24584__$1);
var G__24597 = null;
var G__24598 = (0);
var G__24599 = (0);
seq__24584 = G__24596;
chunk__24585 = G__24597;
count__24586 = G__24598;
i__24587 = G__24599;
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

var seq__24638_24645 = cljs.core.seq.call(null,deps);
var chunk__24639_24646 = null;
var count__24640_24647 = (0);
var i__24641_24648 = (0);
while(true){
if((i__24641_24648 < count__24640_24647)){
var dep_24649 = cljs.core._nth.call(null,chunk__24639_24646,i__24641_24648);
topo_sort_helper_STAR_.call(null,dep_24649,(depth + (1)),state);

var G__24650 = seq__24638_24645;
var G__24651 = chunk__24639_24646;
var G__24652 = count__24640_24647;
var G__24653 = (i__24641_24648 + (1));
seq__24638_24645 = G__24650;
chunk__24639_24646 = G__24651;
count__24640_24647 = G__24652;
i__24641_24648 = G__24653;
continue;
} else {
var temp__4425__auto___24654 = cljs.core.seq.call(null,seq__24638_24645);
if(temp__4425__auto___24654){
var seq__24638_24655__$1 = temp__4425__auto___24654;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24638_24655__$1)){
var c__17589__auto___24656 = cljs.core.chunk_first.call(null,seq__24638_24655__$1);
var G__24657 = cljs.core.chunk_rest.call(null,seq__24638_24655__$1);
var G__24658 = c__17589__auto___24656;
var G__24659 = cljs.core.count.call(null,c__17589__auto___24656);
var G__24660 = (0);
seq__24638_24645 = G__24657;
chunk__24639_24646 = G__24658;
count__24640_24647 = G__24659;
i__24641_24648 = G__24660;
continue;
} else {
var dep_24661 = cljs.core.first.call(null,seq__24638_24655__$1);
topo_sort_helper_STAR_.call(null,dep_24661,(depth + (1)),state);

var G__24662 = cljs.core.next.call(null,seq__24638_24655__$1);
var G__24663 = null;
var G__24664 = (0);
var G__24665 = (0);
seq__24638_24645 = G__24662;
chunk__24639_24646 = G__24663;
count__24640_24647 = G__24664;
i__24641_24648 = G__24665;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24642){
var vec__24644 = p__24642;
var x = cljs.core.nth.call(null,vec__24644,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24644,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24644,x,xs,get_deps__$1){
return (function (p1__24600_SHARP_){
return clojure.set.difference.call(null,p1__24600_SHARP_,x);
});})(vec__24644,x,xs,get_deps__$1))
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
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__24678 = cljs.core.seq.call(null,provides);
var chunk__24679 = null;
var count__24680 = (0);
var i__24681 = (0);
while(true){
if((i__24681 < count__24680)){
var prov = cljs.core._nth.call(null,chunk__24679,i__24681);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24682_24690 = cljs.core.seq.call(null,requires);
var chunk__24683_24691 = null;
var count__24684_24692 = (0);
var i__24685_24693 = (0);
while(true){
if((i__24685_24693 < count__24684_24692)){
var req_24694 = cljs.core._nth.call(null,chunk__24683_24691,i__24685_24693);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24694,prov);

var G__24695 = seq__24682_24690;
var G__24696 = chunk__24683_24691;
var G__24697 = count__24684_24692;
var G__24698 = (i__24685_24693 + (1));
seq__24682_24690 = G__24695;
chunk__24683_24691 = G__24696;
count__24684_24692 = G__24697;
i__24685_24693 = G__24698;
continue;
} else {
var temp__4425__auto___24699 = cljs.core.seq.call(null,seq__24682_24690);
if(temp__4425__auto___24699){
var seq__24682_24700__$1 = temp__4425__auto___24699;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24682_24700__$1)){
var c__17589__auto___24701 = cljs.core.chunk_first.call(null,seq__24682_24700__$1);
var G__24702 = cljs.core.chunk_rest.call(null,seq__24682_24700__$1);
var G__24703 = c__17589__auto___24701;
var G__24704 = cljs.core.count.call(null,c__17589__auto___24701);
var G__24705 = (0);
seq__24682_24690 = G__24702;
chunk__24683_24691 = G__24703;
count__24684_24692 = G__24704;
i__24685_24693 = G__24705;
continue;
} else {
var req_24706 = cljs.core.first.call(null,seq__24682_24700__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24706,prov);

var G__24707 = cljs.core.next.call(null,seq__24682_24700__$1);
var G__24708 = null;
var G__24709 = (0);
var G__24710 = (0);
seq__24682_24690 = G__24707;
chunk__24683_24691 = G__24708;
count__24684_24692 = G__24709;
i__24685_24693 = G__24710;
continue;
}
} else {
}
}
break;
}

var G__24711 = seq__24678;
var G__24712 = chunk__24679;
var G__24713 = count__24680;
var G__24714 = (i__24681 + (1));
seq__24678 = G__24711;
chunk__24679 = G__24712;
count__24680 = G__24713;
i__24681 = G__24714;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24678);
if(temp__4425__auto__){
var seq__24678__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24678__$1)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,seq__24678__$1);
var G__24715 = cljs.core.chunk_rest.call(null,seq__24678__$1);
var G__24716 = c__17589__auto__;
var G__24717 = cljs.core.count.call(null,c__17589__auto__);
var G__24718 = (0);
seq__24678 = G__24715;
chunk__24679 = G__24716;
count__24680 = G__24717;
i__24681 = G__24718;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24678__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24686_24719 = cljs.core.seq.call(null,requires);
var chunk__24687_24720 = null;
var count__24688_24721 = (0);
var i__24689_24722 = (0);
while(true){
if((i__24689_24722 < count__24688_24721)){
var req_24723 = cljs.core._nth.call(null,chunk__24687_24720,i__24689_24722);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24723,prov);

var G__24724 = seq__24686_24719;
var G__24725 = chunk__24687_24720;
var G__24726 = count__24688_24721;
var G__24727 = (i__24689_24722 + (1));
seq__24686_24719 = G__24724;
chunk__24687_24720 = G__24725;
count__24688_24721 = G__24726;
i__24689_24722 = G__24727;
continue;
} else {
var temp__4425__auto___24728__$1 = cljs.core.seq.call(null,seq__24686_24719);
if(temp__4425__auto___24728__$1){
var seq__24686_24729__$1 = temp__4425__auto___24728__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24686_24729__$1)){
var c__17589__auto___24730 = cljs.core.chunk_first.call(null,seq__24686_24729__$1);
var G__24731 = cljs.core.chunk_rest.call(null,seq__24686_24729__$1);
var G__24732 = c__17589__auto___24730;
var G__24733 = cljs.core.count.call(null,c__17589__auto___24730);
var G__24734 = (0);
seq__24686_24719 = G__24731;
chunk__24687_24720 = G__24732;
count__24688_24721 = G__24733;
i__24689_24722 = G__24734;
continue;
} else {
var req_24735 = cljs.core.first.call(null,seq__24686_24729__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24735,prov);

var G__24736 = cljs.core.next.call(null,seq__24686_24729__$1);
var G__24737 = null;
var G__24738 = (0);
var G__24739 = (0);
seq__24686_24719 = G__24736;
chunk__24687_24720 = G__24737;
count__24688_24721 = G__24738;
i__24689_24722 = G__24739;
continue;
}
} else {
}
}
break;
}

var G__24740 = cljs.core.next.call(null,seq__24678__$1);
var G__24741 = null;
var G__24742 = (0);
var G__24743 = (0);
seq__24678 = G__24740;
chunk__24679 = G__24741;
count__24680 = G__24742;
i__24681 = G__24743;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__24748_24752 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__24749_24753 = null;
var count__24750_24754 = (0);
var i__24751_24755 = (0);
while(true){
if((i__24751_24755 < count__24750_24754)){
var ns_24756 = cljs.core._nth.call(null,chunk__24749_24753,i__24751_24755);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24756);

var G__24757 = seq__24748_24752;
var G__24758 = chunk__24749_24753;
var G__24759 = count__24750_24754;
var G__24760 = (i__24751_24755 + (1));
seq__24748_24752 = G__24757;
chunk__24749_24753 = G__24758;
count__24750_24754 = G__24759;
i__24751_24755 = G__24760;
continue;
} else {
var temp__4425__auto___24761 = cljs.core.seq.call(null,seq__24748_24752);
if(temp__4425__auto___24761){
var seq__24748_24762__$1 = temp__4425__auto___24761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24748_24762__$1)){
var c__17589__auto___24763 = cljs.core.chunk_first.call(null,seq__24748_24762__$1);
var G__24764 = cljs.core.chunk_rest.call(null,seq__24748_24762__$1);
var G__24765 = c__17589__auto___24763;
var G__24766 = cljs.core.count.call(null,c__17589__auto___24763);
var G__24767 = (0);
seq__24748_24752 = G__24764;
chunk__24749_24753 = G__24765;
count__24750_24754 = G__24766;
i__24751_24755 = G__24767;
continue;
} else {
var ns_24768 = cljs.core.first.call(null,seq__24748_24762__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_24768);

var G__24769 = cljs.core.next.call(null,seq__24748_24762__$1);
var G__24770 = null;
var G__24771 = (0);
var G__24772 = (0);
seq__24748_24752 = G__24769;
chunk__24749_24753 = G__24770;
count__24750_24754 = G__24771;
i__24751_24755 = G__24772;
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
goog.require_figwheel_backup_ = (function (){var or__16785__auto__ = goog.require__;
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
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
var G__24773__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__24773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24774__i = 0, G__24774__a = new Array(arguments.length -  0);
while (G__24774__i < G__24774__a.length) {G__24774__a[G__24774__i] = arguments[G__24774__i + 0]; ++G__24774__i;}
  args = new cljs.core.IndexedSeq(G__24774__a,0);
} 
return G__24773__delegate.call(this,args);};
G__24773.cljs$lang$maxFixedArity = 0;
G__24773.cljs$lang$applyTo = (function (arglist__24775){
var args = cljs.core.seq(arglist__24775);
return G__24773__delegate(args);
});
G__24773.cljs$core$IFn$_invoke$arity$variadic = G__24773__delegate;
return G__24773;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__24777 = cljs.core._EQ_;
var expr__24778 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__24777.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__24778))){
var path_parts = ((function (pred__24777,expr__24778){
return (function (p1__24776_SHARP_){
return clojure.string.split.call(null,p1__24776_SHARP_,/[\/\\]/);
});})(pred__24777,expr__24778))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__24777,expr__24778){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e24780){if((e24780 instanceof Error)){
var e = e24780;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e24780;

}
}})());
});
;})(path_parts,sep,root,pred__24777,expr__24778))
} else {
if(cljs.core.truth_(pred__24777.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__24778))){
return ((function (pred__24777,expr__24778){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__24777,expr__24778){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__24777,expr__24778))
);

return deferred.addErrback(((function (deferred,pred__24777,expr__24778){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__24777,expr__24778))
);
});
;})(pred__24777,expr__24778))
} else {
return ((function (pred__24777,expr__24778){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__24777,expr__24778))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__24781,callback){
var map__24784 = p__24781;
var map__24784__$1 = ((((!((map__24784 == null)))?((((map__24784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24784):map__24784);
var file_msg = map__24784__$1;
var request_url = cljs.core.get.call(null,map__24784__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__24784,map__24784__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__24784,map__24784__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
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
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto__){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto__){
return (function (state_24808){
var state_val_24809 = (state_24808[(1)]);
if((state_val_24809 === (7))){
var inst_24804 = (state_24808[(2)]);
var state_24808__$1 = state_24808;
var statearr_24810_24830 = state_24808__$1;
(statearr_24810_24830[(2)] = inst_24804);

(statearr_24810_24830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (1))){
var state_24808__$1 = state_24808;
var statearr_24811_24831 = state_24808__$1;
(statearr_24811_24831[(2)] = null);

(statearr_24811_24831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (4))){
var inst_24788 = (state_24808[(7)]);
var inst_24788__$1 = (state_24808[(2)]);
var state_24808__$1 = (function (){var statearr_24812 = state_24808;
(statearr_24812[(7)] = inst_24788__$1);

return statearr_24812;
})();
if(cljs.core.truth_(inst_24788__$1)){
var statearr_24813_24832 = state_24808__$1;
(statearr_24813_24832[(1)] = (5));

} else {
var statearr_24814_24833 = state_24808__$1;
(statearr_24814_24833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (6))){
var state_24808__$1 = state_24808;
var statearr_24815_24834 = state_24808__$1;
(statearr_24815_24834[(2)] = null);

(statearr_24815_24834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (3))){
var inst_24806 = (state_24808[(2)]);
var state_24808__$1 = state_24808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24808__$1,inst_24806);
} else {
if((state_val_24809 === (2))){
var state_24808__$1 = state_24808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24808__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_24809 === (11))){
var inst_24800 = (state_24808[(2)]);
var state_24808__$1 = (function (){var statearr_24816 = state_24808;
(statearr_24816[(8)] = inst_24800);

return statearr_24816;
})();
var statearr_24817_24835 = state_24808__$1;
(statearr_24817_24835[(2)] = null);

(statearr_24817_24835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (9))){
var inst_24792 = (state_24808[(9)]);
var inst_24794 = (state_24808[(10)]);
var inst_24796 = inst_24794.call(null,inst_24792);
var state_24808__$1 = state_24808;
var statearr_24818_24836 = state_24808__$1;
(statearr_24818_24836[(2)] = inst_24796);

(statearr_24818_24836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (5))){
var inst_24788 = (state_24808[(7)]);
var inst_24790 = figwheel.client.file_reloading.blocking_load.call(null,inst_24788);
var state_24808__$1 = state_24808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24808__$1,(8),inst_24790);
} else {
if((state_val_24809 === (10))){
var inst_24792 = (state_24808[(9)]);
var inst_24798 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_24792);
var state_24808__$1 = state_24808;
var statearr_24819_24837 = state_24808__$1;
(statearr_24819_24837[(2)] = inst_24798);

(statearr_24819_24837[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (8))){
var inst_24788 = (state_24808[(7)]);
var inst_24794 = (state_24808[(10)]);
var inst_24792 = (state_24808[(2)]);
var inst_24793 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_24794__$1 = cljs.core.get.call(null,inst_24793,inst_24788);
var state_24808__$1 = (function (){var statearr_24820 = state_24808;
(statearr_24820[(9)] = inst_24792);

(statearr_24820[(10)] = inst_24794__$1);

return statearr_24820;
})();
if(cljs.core.truth_(inst_24794__$1)){
var statearr_24821_24838 = state_24808__$1;
(statearr_24821_24838[(1)] = (9));

} else {
var statearr_24822_24839 = state_24808__$1;
(statearr_24822_24839[(1)] = (10));

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
});})(c__21710__auto__))
;
return ((function (switch__21598__auto__,c__21710__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21599__auto__ = null;
var figwheel$client$file_reloading$state_machine__21599__auto____0 = (function (){
var statearr_24826 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24826[(0)] = figwheel$client$file_reloading$state_machine__21599__auto__);

(statearr_24826[(1)] = (1));

return statearr_24826;
});
var figwheel$client$file_reloading$state_machine__21599__auto____1 = (function (state_24808){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_24808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e24827){if((e24827 instanceof Object)){
var ex__21602__auto__ = e24827;
var statearr_24828_24840 = state_24808;
(statearr_24828_24840[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24841 = state_24808;
state_24808 = G__24841;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21599__auto__ = function(state_24808){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21599__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21599__auto____1.call(this,state_24808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21599__auto____0;
figwheel$client$file_reloading$state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21599__auto____1;
return figwheel$client$file_reloading$state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto__))
})();
var state__21712__auto__ = (function (){var statearr_24829 = f__21711__auto__.call(null);
(statearr_24829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto__);

return statearr_24829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto__))
);

return c__21710__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__24842,callback){
var map__24845 = p__24842;
var map__24845__$1 = ((((!((map__24845 == null)))?((((map__24845.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24845.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24845):map__24845);
var file_msg = map__24845__$1;
var namespace = cljs.core.get.call(null,map__24845__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__24845,map__24845__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__24845,map__24845__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__24847){
var map__24850 = p__24847;
var map__24850__$1 = ((((!((map__24850 == null)))?((((map__24850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24850):map__24850);
var file_msg = map__24850__$1;
var namespace = cljs.core.get.call(null,map__24850__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16773__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16773__auto__){
var or__16785__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16785__auto__)){
return or__16785__auto__;
} else {
var or__16785__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16785__auto____$1)){
return or__16785__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16773__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__24852,callback){
var map__24855 = p__24852;
var map__24855__$1 = ((((!((map__24855 == null)))?((((map__24855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24855):map__24855);
var file_msg = map__24855__$1;
var request_url = cljs.core.get.call(null,map__24855__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__24855__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__21710__auto___24943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto___24943,out){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto___24943,out){
return (function (state_24925){
var state_val_24926 = (state_24925[(1)]);
if((state_val_24926 === (1))){
var inst_24903 = cljs.core.nth.call(null,files,(0),null);
var inst_24904 = cljs.core.nthnext.call(null,files,(1));
var inst_24905 = files;
var state_24925__$1 = (function (){var statearr_24927 = state_24925;
(statearr_24927[(7)] = inst_24903);

(statearr_24927[(8)] = inst_24905);

(statearr_24927[(9)] = inst_24904);

return statearr_24927;
})();
var statearr_24928_24944 = state_24925__$1;
(statearr_24928_24944[(2)] = null);

(statearr_24928_24944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (2))){
var inst_24908 = (state_24925[(10)]);
var inst_24905 = (state_24925[(8)]);
var inst_24908__$1 = cljs.core.nth.call(null,inst_24905,(0),null);
var inst_24909 = cljs.core.nthnext.call(null,inst_24905,(1));
var inst_24910 = (inst_24908__$1 == null);
var inst_24911 = cljs.core.not.call(null,inst_24910);
var state_24925__$1 = (function (){var statearr_24929 = state_24925;
(statearr_24929[(10)] = inst_24908__$1);

(statearr_24929[(11)] = inst_24909);

return statearr_24929;
})();
if(inst_24911){
var statearr_24930_24945 = state_24925__$1;
(statearr_24930_24945[(1)] = (4));

} else {
var statearr_24931_24946 = state_24925__$1;
(statearr_24931_24946[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (3))){
var inst_24923 = (state_24925[(2)]);
var state_24925__$1 = state_24925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24925__$1,inst_24923);
} else {
if((state_val_24926 === (4))){
var inst_24908 = (state_24925[(10)]);
var inst_24913 = figwheel.client.file_reloading.reload_js_file.call(null,inst_24908);
var state_24925__$1 = state_24925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24925__$1,(7),inst_24913);
} else {
if((state_val_24926 === (5))){
var inst_24919 = cljs.core.async.close_BANG_.call(null,out);
var state_24925__$1 = state_24925;
var statearr_24932_24947 = state_24925__$1;
(statearr_24932_24947[(2)] = inst_24919);

(statearr_24932_24947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (6))){
var inst_24921 = (state_24925[(2)]);
var state_24925__$1 = state_24925;
var statearr_24933_24948 = state_24925__$1;
(statearr_24933_24948[(2)] = inst_24921);

(statearr_24933_24948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24926 === (7))){
var inst_24909 = (state_24925[(11)]);
var inst_24915 = (state_24925[(2)]);
var inst_24916 = cljs.core.async.put_BANG_.call(null,out,inst_24915);
var inst_24905 = inst_24909;
var state_24925__$1 = (function (){var statearr_24934 = state_24925;
(statearr_24934[(8)] = inst_24905);

(statearr_24934[(12)] = inst_24916);

return statearr_24934;
})();
var statearr_24935_24949 = state_24925__$1;
(statearr_24935_24949[(2)] = null);

(statearr_24935_24949[(1)] = (2));


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
});})(c__21710__auto___24943,out))
;
return ((function (switch__21598__auto__,c__21710__auto___24943,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto____0 = (function (){
var statearr_24939 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24939[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto__);

(statearr_24939[(1)] = (1));

return statearr_24939;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto____1 = (function (state_24925){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_24925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e24940){if((e24940 instanceof Object)){
var ex__21602__auto__ = e24940;
var statearr_24941_24950 = state_24925;
(statearr_24941_24950[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24951 = state_24925;
state_24925 = G__24951;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto__ = function(state_24925){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto____1.call(this,state_24925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto___24943,out))
})();
var state__21712__auto__ = (function (){var statearr_24942 = f__21711__auto__.call(null);
(statearr_24942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto___24943);

return statearr_24942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto___24943,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__24952,opts){
var map__24956 = p__24952;
var map__24956__$1 = ((((!((map__24956 == null)))?((((map__24956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24956):map__24956);
var eval_body__$1 = cljs.core.get.call(null,map__24956__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__24956__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16773__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16773__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16773__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e24958){var e = e24958;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__24959_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24959_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
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
return cljs.core.map.call(null,(function (p__24964){
var vec__24965 = p__24964;
var k = cljs.core.nth.call(null,vec__24965,(0),null);
var v = cljs.core.nth.call(null,vec__24965,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__24966){
var vec__24967 = p__24966;
var k = cljs.core.nth.call(null,vec__24967,(0),null);
var v = cljs.core.nth.call(null,vec__24967,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__24971,p__24972){
var map__25219 = p__24971;
var map__25219__$1 = ((((!((map__25219 == null)))?((((map__25219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25219):map__25219);
var opts = map__25219__$1;
var before_jsload = cljs.core.get.call(null,map__25219__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25219__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25219__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25220 = p__24972;
var map__25220__$1 = ((((!((map__25220 == null)))?((((map__25220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25220):map__25220);
var msg = map__25220__$1;
var files = cljs.core.get.call(null,map__25220__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25220__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25220__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21710__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21711__auto__ = (function (){var switch__21598__auto__ = ((function (c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25373){
var state_val_25374 = (state_25373[(1)]);
if((state_val_25374 === (7))){
var inst_25234 = (state_25373[(7)]);
var inst_25235 = (state_25373[(8)]);
var inst_25236 = (state_25373[(9)]);
var inst_25237 = (state_25373[(10)]);
var inst_25242 = cljs.core._nth.call(null,inst_25235,inst_25237);
var inst_25243 = figwheel.client.file_reloading.eval_body.call(null,inst_25242,opts);
var inst_25244 = (inst_25237 + (1));
var tmp25375 = inst_25234;
var tmp25376 = inst_25235;
var tmp25377 = inst_25236;
var inst_25234__$1 = tmp25375;
var inst_25235__$1 = tmp25376;
var inst_25236__$1 = tmp25377;
var inst_25237__$1 = inst_25244;
var state_25373__$1 = (function (){var statearr_25378 = state_25373;
(statearr_25378[(7)] = inst_25234__$1);

(statearr_25378[(11)] = inst_25243);

(statearr_25378[(8)] = inst_25235__$1);

(statearr_25378[(9)] = inst_25236__$1);

(statearr_25378[(10)] = inst_25237__$1);

return statearr_25378;
})();
var statearr_25379_25465 = state_25373__$1;
(statearr_25379_25465[(2)] = null);

(statearr_25379_25465[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (20))){
var inst_25277 = (state_25373[(12)]);
var inst_25285 = figwheel.client.file_reloading.sort_files.call(null,inst_25277);
var state_25373__$1 = state_25373;
var statearr_25380_25466 = state_25373__$1;
(statearr_25380_25466[(2)] = inst_25285);

(statearr_25380_25466[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (27))){
var state_25373__$1 = state_25373;
var statearr_25381_25467 = state_25373__$1;
(statearr_25381_25467[(2)] = null);

(statearr_25381_25467[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (1))){
var inst_25226 = (state_25373[(13)]);
var inst_25223 = before_jsload.call(null,files);
var inst_25224 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25225 = (function (){return ((function (inst_25226,inst_25223,inst_25224,state_val_25374,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24968_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24968_SHARP_);
});
;})(inst_25226,inst_25223,inst_25224,state_val_25374,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25226__$1 = cljs.core.filter.call(null,inst_25225,files);
var inst_25227 = cljs.core.not_empty.call(null,inst_25226__$1);
var state_25373__$1 = (function (){var statearr_25382 = state_25373;
(statearr_25382[(14)] = inst_25224);

(statearr_25382[(13)] = inst_25226__$1);

(statearr_25382[(15)] = inst_25223);

return statearr_25382;
})();
if(cljs.core.truth_(inst_25227)){
var statearr_25383_25468 = state_25373__$1;
(statearr_25383_25468[(1)] = (2));

} else {
var statearr_25384_25469 = state_25373__$1;
(statearr_25384_25469[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (24))){
var state_25373__$1 = state_25373;
var statearr_25385_25470 = state_25373__$1;
(statearr_25385_25470[(2)] = null);

(statearr_25385_25470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (39))){
var inst_25327 = (state_25373[(16)]);
var state_25373__$1 = state_25373;
var statearr_25386_25471 = state_25373__$1;
(statearr_25386_25471[(2)] = inst_25327);

(statearr_25386_25471[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (46))){
var inst_25368 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25387_25472 = state_25373__$1;
(statearr_25387_25472[(2)] = inst_25368);

(statearr_25387_25472[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (4))){
var inst_25271 = (state_25373[(2)]);
var inst_25272 = cljs.core.List.EMPTY;
var inst_25273 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25272);
var inst_25274 = (function (){return ((function (inst_25271,inst_25272,inst_25273,state_val_25374,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24969_SHARP_){
var and__16773__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__24969_SHARP_);
if(cljs.core.truth_(and__16773__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__24969_SHARP_));
} else {
return and__16773__auto__;
}
});
;})(inst_25271,inst_25272,inst_25273,state_val_25374,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25275 = cljs.core.filter.call(null,inst_25274,files);
var inst_25276 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25277 = cljs.core.concat.call(null,inst_25275,inst_25276);
var state_25373__$1 = (function (){var statearr_25388 = state_25373;
(statearr_25388[(17)] = inst_25271);

(statearr_25388[(18)] = inst_25273);

(statearr_25388[(12)] = inst_25277);

return statearr_25388;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25389_25473 = state_25373__$1;
(statearr_25389_25473[(1)] = (16));

} else {
var statearr_25390_25474 = state_25373__$1;
(statearr_25390_25474[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (15))){
var inst_25261 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25391_25475 = state_25373__$1;
(statearr_25391_25475[(2)] = inst_25261);

(statearr_25391_25475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (21))){
var inst_25287 = (state_25373[(19)]);
var inst_25287__$1 = (state_25373[(2)]);
var inst_25288 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25287__$1);
var state_25373__$1 = (function (){var statearr_25392 = state_25373;
(statearr_25392[(19)] = inst_25287__$1);

return statearr_25392;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25373__$1,(22),inst_25288);
} else {
if((state_val_25374 === (31))){
var inst_25371 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25373__$1,inst_25371);
} else {
if((state_val_25374 === (32))){
var inst_25327 = (state_25373[(16)]);
var inst_25332 = inst_25327.cljs$lang$protocol_mask$partition0$;
var inst_25333 = (inst_25332 & (64));
var inst_25334 = inst_25327.cljs$core$ISeq$;
var inst_25335 = (inst_25333) || (inst_25334);
var state_25373__$1 = state_25373;
if(cljs.core.truth_(inst_25335)){
var statearr_25393_25476 = state_25373__$1;
(statearr_25393_25476[(1)] = (35));

} else {
var statearr_25394_25477 = state_25373__$1;
(statearr_25394_25477[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (40))){
var inst_25348 = (state_25373[(20)]);
var inst_25347 = (state_25373[(2)]);
var inst_25348__$1 = cljs.core.get.call(null,inst_25347,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25349 = cljs.core.get.call(null,inst_25347,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25350 = cljs.core.not_empty.call(null,inst_25348__$1);
var state_25373__$1 = (function (){var statearr_25395 = state_25373;
(statearr_25395[(20)] = inst_25348__$1);

(statearr_25395[(21)] = inst_25349);

return statearr_25395;
})();
if(cljs.core.truth_(inst_25350)){
var statearr_25396_25478 = state_25373__$1;
(statearr_25396_25478[(1)] = (41));

} else {
var statearr_25397_25479 = state_25373__$1;
(statearr_25397_25479[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (33))){
var state_25373__$1 = state_25373;
var statearr_25398_25480 = state_25373__$1;
(statearr_25398_25480[(2)] = false);

(statearr_25398_25480[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (13))){
var inst_25247 = (state_25373[(22)]);
var inst_25251 = cljs.core.chunk_first.call(null,inst_25247);
var inst_25252 = cljs.core.chunk_rest.call(null,inst_25247);
var inst_25253 = cljs.core.count.call(null,inst_25251);
var inst_25234 = inst_25252;
var inst_25235 = inst_25251;
var inst_25236 = inst_25253;
var inst_25237 = (0);
var state_25373__$1 = (function (){var statearr_25399 = state_25373;
(statearr_25399[(7)] = inst_25234);

(statearr_25399[(8)] = inst_25235);

(statearr_25399[(9)] = inst_25236);

(statearr_25399[(10)] = inst_25237);

return statearr_25399;
})();
var statearr_25400_25481 = state_25373__$1;
(statearr_25400_25481[(2)] = null);

(statearr_25400_25481[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (22))){
var inst_25291 = (state_25373[(23)]);
var inst_25290 = (state_25373[(24)]);
var inst_25295 = (state_25373[(25)]);
var inst_25287 = (state_25373[(19)]);
var inst_25290__$1 = (state_25373[(2)]);
var inst_25291__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25290__$1);
var inst_25292 = (function (){var all_files = inst_25287;
var res_SINGLEQUOTE_ = inst_25290__$1;
var res = inst_25291__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25291,inst_25290,inst_25295,inst_25287,inst_25290__$1,inst_25291__$1,state_val_25374,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__24970_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__24970_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25291,inst_25290,inst_25295,inst_25287,inst_25290__$1,inst_25291__$1,state_val_25374,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25293 = cljs.core.filter.call(null,inst_25292,inst_25290__$1);
var inst_25294 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25295__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25294);
var inst_25296 = cljs.core.not_empty.call(null,inst_25295__$1);
var state_25373__$1 = (function (){var statearr_25401 = state_25373;
(statearr_25401[(23)] = inst_25291__$1);

(statearr_25401[(24)] = inst_25290__$1);

(statearr_25401[(25)] = inst_25295__$1);

(statearr_25401[(26)] = inst_25293);

return statearr_25401;
})();
if(cljs.core.truth_(inst_25296)){
var statearr_25402_25482 = state_25373__$1;
(statearr_25402_25482[(1)] = (23));

} else {
var statearr_25403_25483 = state_25373__$1;
(statearr_25403_25483[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (36))){
var state_25373__$1 = state_25373;
var statearr_25404_25484 = state_25373__$1;
(statearr_25404_25484[(2)] = false);

(statearr_25404_25484[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (41))){
var inst_25348 = (state_25373[(20)]);
var inst_25352 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25353 = cljs.core.map.call(null,inst_25352,inst_25348);
var inst_25354 = cljs.core.pr_str.call(null,inst_25353);
var inst_25355 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25354)].join('');
var inst_25356 = figwheel.client.utils.log.call(null,inst_25355);
var state_25373__$1 = state_25373;
var statearr_25405_25485 = state_25373__$1;
(statearr_25405_25485[(2)] = inst_25356);

(statearr_25405_25485[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (43))){
var inst_25349 = (state_25373[(21)]);
var inst_25359 = (state_25373[(2)]);
var inst_25360 = cljs.core.not_empty.call(null,inst_25349);
var state_25373__$1 = (function (){var statearr_25406 = state_25373;
(statearr_25406[(27)] = inst_25359);

return statearr_25406;
})();
if(cljs.core.truth_(inst_25360)){
var statearr_25407_25486 = state_25373__$1;
(statearr_25407_25486[(1)] = (44));

} else {
var statearr_25408_25487 = state_25373__$1;
(statearr_25408_25487[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (29))){
var inst_25291 = (state_25373[(23)]);
var inst_25290 = (state_25373[(24)]);
var inst_25295 = (state_25373[(25)]);
var inst_25327 = (state_25373[(16)]);
var inst_25293 = (state_25373[(26)]);
var inst_25287 = (state_25373[(19)]);
var inst_25323 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25326 = (function (){var all_files = inst_25287;
var res_SINGLEQUOTE_ = inst_25290;
var res = inst_25291;
var files_not_loaded = inst_25293;
var dependencies_that_loaded = inst_25295;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25291,inst_25290,inst_25295,inst_25327,inst_25293,inst_25287,inst_25323,state_val_25374,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25325){
var map__25409 = p__25325;
var map__25409__$1 = ((((!((map__25409 == null)))?((((map__25409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25409):map__25409);
var namespace = cljs.core.get.call(null,map__25409__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25291,inst_25290,inst_25295,inst_25327,inst_25293,inst_25287,inst_25323,state_val_25374,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25327__$1 = cljs.core.group_by.call(null,inst_25326,inst_25293);
var inst_25329 = (inst_25327__$1 == null);
var inst_25330 = cljs.core.not.call(null,inst_25329);
var state_25373__$1 = (function (){var statearr_25411 = state_25373;
(statearr_25411[(16)] = inst_25327__$1);

(statearr_25411[(28)] = inst_25323);

return statearr_25411;
})();
if(inst_25330){
var statearr_25412_25488 = state_25373__$1;
(statearr_25412_25488[(1)] = (32));

} else {
var statearr_25413_25489 = state_25373__$1;
(statearr_25413_25489[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (44))){
var inst_25349 = (state_25373[(21)]);
var inst_25362 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25349);
var inst_25363 = cljs.core.pr_str.call(null,inst_25362);
var inst_25364 = [cljs.core.str("not required: "),cljs.core.str(inst_25363)].join('');
var inst_25365 = figwheel.client.utils.log.call(null,inst_25364);
var state_25373__$1 = state_25373;
var statearr_25414_25490 = state_25373__$1;
(statearr_25414_25490[(2)] = inst_25365);

(statearr_25414_25490[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (6))){
var inst_25268 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25415_25491 = state_25373__$1;
(statearr_25415_25491[(2)] = inst_25268);

(statearr_25415_25491[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (28))){
var inst_25293 = (state_25373[(26)]);
var inst_25320 = (state_25373[(2)]);
var inst_25321 = cljs.core.not_empty.call(null,inst_25293);
var state_25373__$1 = (function (){var statearr_25416 = state_25373;
(statearr_25416[(29)] = inst_25320);

return statearr_25416;
})();
if(cljs.core.truth_(inst_25321)){
var statearr_25417_25492 = state_25373__$1;
(statearr_25417_25492[(1)] = (29));

} else {
var statearr_25418_25493 = state_25373__$1;
(statearr_25418_25493[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (25))){
var inst_25291 = (state_25373[(23)]);
var inst_25307 = (state_25373[(2)]);
var inst_25308 = cljs.core.not_empty.call(null,inst_25291);
var state_25373__$1 = (function (){var statearr_25419 = state_25373;
(statearr_25419[(30)] = inst_25307);

return statearr_25419;
})();
if(cljs.core.truth_(inst_25308)){
var statearr_25420_25494 = state_25373__$1;
(statearr_25420_25494[(1)] = (26));

} else {
var statearr_25421_25495 = state_25373__$1;
(statearr_25421_25495[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (34))){
var inst_25342 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
if(cljs.core.truth_(inst_25342)){
var statearr_25422_25496 = state_25373__$1;
(statearr_25422_25496[(1)] = (38));

} else {
var statearr_25423_25497 = state_25373__$1;
(statearr_25423_25497[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (17))){
var state_25373__$1 = state_25373;
var statearr_25424_25498 = state_25373__$1;
(statearr_25424_25498[(2)] = recompile_dependents);

(statearr_25424_25498[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (3))){
var state_25373__$1 = state_25373;
var statearr_25425_25499 = state_25373__$1;
(statearr_25425_25499[(2)] = null);

(statearr_25425_25499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (12))){
var inst_25264 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25426_25500 = state_25373__$1;
(statearr_25426_25500[(2)] = inst_25264);

(statearr_25426_25500[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (2))){
var inst_25226 = (state_25373[(13)]);
var inst_25233 = cljs.core.seq.call(null,inst_25226);
var inst_25234 = inst_25233;
var inst_25235 = null;
var inst_25236 = (0);
var inst_25237 = (0);
var state_25373__$1 = (function (){var statearr_25427 = state_25373;
(statearr_25427[(7)] = inst_25234);

(statearr_25427[(8)] = inst_25235);

(statearr_25427[(9)] = inst_25236);

(statearr_25427[(10)] = inst_25237);

return statearr_25427;
})();
var statearr_25428_25501 = state_25373__$1;
(statearr_25428_25501[(2)] = null);

(statearr_25428_25501[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (23))){
var inst_25291 = (state_25373[(23)]);
var inst_25290 = (state_25373[(24)]);
var inst_25295 = (state_25373[(25)]);
var inst_25293 = (state_25373[(26)]);
var inst_25287 = (state_25373[(19)]);
var inst_25298 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25300 = (function (){var all_files = inst_25287;
var res_SINGLEQUOTE_ = inst_25290;
var res = inst_25291;
var files_not_loaded = inst_25293;
var dependencies_that_loaded = inst_25295;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25291,inst_25290,inst_25295,inst_25293,inst_25287,inst_25298,state_val_25374,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25299){
var map__25429 = p__25299;
var map__25429__$1 = ((((!((map__25429 == null)))?((((map__25429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25429):map__25429);
var request_url = cljs.core.get.call(null,map__25429__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25291,inst_25290,inst_25295,inst_25293,inst_25287,inst_25298,state_val_25374,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25301 = cljs.core.reverse.call(null,inst_25295);
var inst_25302 = cljs.core.map.call(null,inst_25300,inst_25301);
var inst_25303 = cljs.core.pr_str.call(null,inst_25302);
var inst_25304 = figwheel.client.utils.log.call(null,inst_25303);
var state_25373__$1 = (function (){var statearr_25431 = state_25373;
(statearr_25431[(31)] = inst_25298);

return statearr_25431;
})();
var statearr_25432_25502 = state_25373__$1;
(statearr_25432_25502[(2)] = inst_25304);

(statearr_25432_25502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (35))){
var state_25373__$1 = state_25373;
var statearr_25433_25503 = state_25373__$1;
(statearr_25433_25503[(2)] = true);

(statearr_25433_25503[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (19))){
var inst_25277 = (state_25373[(12)]);
var inst_25283 = figwheel.client.file_reloading.expand_files.call(null,inst_25277);
var state_25373__$1 = state_25373;
var statearr_25434_25504 = state_25373__$1;
(statearr_25434_25504[(2)] = inst_25283);

(statearr_25434_25504[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (11))){
var state_25373__$1 = state_25373;
var statearr_25435_25505 = state_25373__$1;
(statearr_25435_25505[(2)] = null);

(statearr_25435_25505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (9))){
var inst_25266 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25436_25506 = state_25373__$1;
(statearr_25436_25506[(2)] = inst_25266);

(statearr_25436_25506[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (5))){
var inst_25236 = (state_25373[(9)]);
var inst_25237 = (state_25373[(10)]);
var inst_25239 = (inst_25237 < inst_25236);
var inst_25240 = inst_25239;
var state_25373__$1 = state_25373;
if(cljs.core.truth_(inst_25240)){
var statearr_25437_25507 = state_25373__$1;
(statearr_25437_25507[(1)] = (7));

} else {
var statearr_25438_25508 = state_25373__$1;
(statearr_25438_25508[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (14))){
var inst_25247 = (state_25373[(22)]);
var inst_25256 = cljs.core.first.call(null,inst_25247);
var inst_25257 = figwheel.client.file_reloading.eval_body.call(null,inst_25256,opts);
var inst_25258 = cljs.core.next.call(null,inst_25247);
var inst_25234 = inst_25258;
var inst_25235 = null;
var inst_25236 = (0);
var inst_25237 = (0);
var state_25373__$1 = (function (){var statearr_25439 = state_25373;
(statearr_25439[(32)] = inst_25257);

(statearr_25439[(7)] = inst_25234);

(statearr_25439[(8)] = inst_25235);

(statearr_25439[(9)] = inst_25236);

(statearr_25439[(10)] = inst_25237);

return statearr_25439;
})();
var statearr_25440_25509 = state_25373__$1;
(statearr_25440_25509[(2)] = null);

(statearr_25440_25509[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (45))){
var state_25373__$1 = state_25373;
var statearr_25441_25510 = state_25373__$1;
(statearr_25441_25510[(2)] = null);

(statearr_25441_25510[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (26))){
var inst_25291 = (state_25373[(23)]);
var inst_25290 = (state_25373[(24)]);
var inst_25295 = (state_25373[(25)]);
var inst_25293 = (state_25373[(26)]);
var inst_25287 = (state_25373[(19)]);
var inst_25310 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25312 = (function (){var all_files = inst_25287;
var res_SINGLEQUOTE_ = inst_25290;
var res = inst_25291;
var files_not_loaded = inst_25293;
var dependencies_that_loaded = inst_25295;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25291,inst_25290,inst_25295,inst_25293,inst_25287,inst_25310,state_val_25374,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25311){
var map__25442 = p__25311;
var map__25442__$1 = ((((!((map__25442 == null)))?((((map__25442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25442):map__25442);
var namespace = cljs.core.get.call(null,map__25442__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25442__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25291,inst_25290,inst_25295,inst_25293,inst_25287,inst_25310,state_val_25374,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25313 = cljs.core.map.call(null,inst_25312,inst_25291);
var inst_25314 = cljs.core.pr_str.call(null,inst_25313);
var inst_25315 = figwheel.client.utils.log.call(null,inst_25314);
var inst_25316 = (function (){var all_files = inst_25287;
var res_SINGLEQUOTE_ = inst_25290;
var res = inst_25291;
var files_not_loaded = inst_25293;
var dependencies_that_loaded = inst_25295;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25291,inst_25290,inst_25295,inst_25293,inst_25287,inst_25310,inst_25312,inst_25313,inst_25314,inst_25315,state_val_25374,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25291,inst_25290,inst_25295,inst_25293,inst_25287,inst_25310,inst_25312,inst_25313,inst_25314,inst_25315,state_val_25374,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25317 = setTimeout(inst_25316,(10));
var state_25373__$1 = (function (){var statearr_25444 = state_25373;
(statearr_25444[(33)] = inst_25310);

(statearr_25444[(34)] = inst_25315);

return statearr_25444;
})();
var statearr_25445_25511 = state_25373__$1;
(statearr_25445_25511[(2)] = inst_25317);

(statearr_25445_25511[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (16))){
var state_25373__$1 = state_25373;
var statearr_25446_25512 = state_25373__$1;
(statearr_25446_25512[(2)] = reload_dependents);

(statearr_25446_25512[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (38))){
var inst_25327 = (state_25373[(16)]);
var inst_25344 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25327);
var state_25373__$1 = state_25373;
var statearr_25447_25513 = state_25373__$1;
(statearr_25447_25513[(2)] = inst_25344);

(statearr_25447_25513[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (30))){
var state_25373__$1 = state_25373;
var statearr_25448_25514 = state_25373__$1;
(statearr_25448_25514[(2)] = null);

(statearr_25448_25514[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (10))){
var inst_25247 = (state_25373[(22)]);
var inst_25249 = cljs.core.chunked_seq_QMARK_.call(null,inst_25247);
var state_25373__$1 = state_25373;
if(inst_25249){
var statearr_25449_25515 = state_25373__$1;
(statearr_25449_25515[(1)] = (13));

} else {
var statearr_25450_25516 = state_25373__$1;
(statearr_25450_25516[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (18))){
var inst_25281 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
if(cljs.core.truth_(inst_25281)){
var statearr_25451_25517 = state_25373__$1;
(statearr_25451_25517[(1)] = (19));

} else {
var statearr_25452_25518 = state_25373__$1;
(statearr_25452_25518[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (42))){
var state_25373__$1 = state_25373;
var statearr_25453_25519 = state_25373__$1;
(statearr_25453_25519[(2)] = null);

(statearr_25453_25519[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (37))){
var inst_25339 = (state_25373[(2)]);
var state_25373__$1 = state_25373;
var statearr_25454_25520 = state_25373__$1;
(statearr_25454_25520[(2)] = inst_25339);

(statearr_25454_25520[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25374 === (8))){
var inst_25234 = (state_25373[(7)]);
var inst_25247 = (state_25373[(22)]);
var inst_25247__$1 = cljs.core.seq.call(null,inst_25234);
var state_25373__$1 = (function (){var statearr_25455 = state_25373;
(statearr_25455[(22)] = inst_25247__$1);

return statearr_25455;
})();
if(inst_25247__$1){
var statearr_25456_25521 = state_25373__$1;
(statearr_25456_25521[(1)] = (10));

} else {
var statearr_25457_25522 = state_25373__$1;
(statearr_25457_25522[(1)] = (11));

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
});})(c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21598__auto__,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto____0 = (function (){
var statearr_25461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25461[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto__);

(statearr_25461[(1)] = (1));

return statearr_25461;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto____1 = (function (state_25373){
while(true){
var ret_value__21600__auto__ = (function (){try{while(true){
var result__21601__auto__ = switch__21598__auto__.call(null,state_25373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21601__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21601__auto__;
}
break;
}
}catch (e25462){if((e25462 instanceof Object)){
var ex__21602__auto__ = e25462;
var statearr_25463_25523 = state_25373;
(statearr_25463_25523[(5)] = ex__21602__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25524 = state_25373;
state_25373 = G__25524;
continue;
} else {
return ret_value__21600__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto__ = function(state_25373){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto____1.call(this,state_25373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21599__auto__;
})()
;})(switch__21598__auto__,c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21712__auto__ = (function (){var statearr_25464 = f__21711__auto__.call(null);
(statearr_25464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21710__auto__);

return statearr_25464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21712__auto__);
});})(c__21710__auto__,map__25219,map__25219__$1,opts,before_jsload,on_jsload,reload_dependents,map__25220,map__25220__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21710__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25527,link){
var map__25530 = p__25527;
var map__25530__$1 = ((((!((map__25530 == null)))?((((map__25530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25530):map__25530);
var file = cljs.core.get.call(null,map__25530__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25530,map__25530__$1,file){
return (function (p1__25525_SHARP_,p2__25526_SHARP_){
if(cljs.core._EQ_.call(null,p1__25525_SHARP_,p2__25526_SHARP_)){
return p1__25525_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25530,map__25530__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25536){
var map__25537 = p__25536;
var map__25537__$1 = ((((!((map__25537 == null)))?((((map__25537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25537):map__25537);
var match_length = cljs.core.get.call(null,map__25537__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25537__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25532_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25532_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25539 = [];
var len__17844__auto___25542 = arguments.length;
var i__17845__auto___25543 = (0);
while(true){
if((i__17845__auto___25543 < len__17844__auto___25542)){
args25539.push((arguments[i__17845__auto___25543]));

var G__25544 = (i__17845__auto___25543 + (1));
i__17845__auto___25543 = G__25544;
continue;
} else {
}
break;
}

var G__25541 = args25539.length;
switch (G__25541) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25539.length)].join('')));

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
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25546_SHARP_,p2__25547_SHARP_){
return cljs.core.assoc.call(null,p1__25546_SHARP_,cljs.core.get.call(null,p2__25547_SHARP_,key),p2__25547_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25548){
var map__25551 = p__25548;
var map__25551__$1 = ((((!((map__25551 == null)))?((((map__25551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25551):map__25551);
var f_data = map__25551__$1;
var file = cljs.core.get.call(null,map__25551__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25553,files_msg){
var map__25560 = p__25553;
var map__25560__$1 = ((((!((map__25560 == null)))?((((map__25560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25560):map__25560);
var opts = map__25560__$1;
var on_cssload = cljs.core.get.call(null,map__25560__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25562_25566 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25563_25567 = null;
var count__25564_25568 = (0);
var i__25565_25569 = (0);
while(true){
if((i__25565_25569 < count__25564_25568)){
var f_25570 = cljs.core._nth.call(null,chunk__25563_25567,i__25565_25569);
figwheel.client.file_reloading.reload_css_file.call(null,f_25570);

var G__25571 = seq__25562_25566;
var G__25572 = chunk__25563_25567;
var G__25573 = count__25564_25568;
var G__25574 = (i__25565_25569 + (1));
seq__25562_25566 = G__25571;
chunk__25563_25567 = G__25572;
count__25564_25568 = G__25573;
i__25565_25569 = G__25574;
continue;
} else {
var temp__4425__auto___25575 = cljs.core.seq.call(null,seq__25562_25566);
if(temp__4425__auto___25575){
var seq__25562_25576__$1 = temp__4425__auto___25575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25562_25576__$1)){
var c__17589__auto___25577 = cljs.core.chunk_first.call(null,seq__25562_25576__$1);
var G__25578 = cljs.core.chunk_rest.call(null,seq__25562_25576__$1);
var G__25579 = c__17589__auto___25577;
var G__25580 = cljs.core.count.call(null,c__17589__auto___25577);
var G__25581 = (0);
seq__25562_25566 = G__25578;
chunk__25563_25567 = G__25579;
count__25564_25568 = G__25580;
i__25565_25569 = G__25581;
continue;
} else {
var f_25582 = cljs.core.first.call(null,seq__25562_25576__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25582);

var G__25583 = cljs.core.next.call(null,seq__25562_25576__$1);
var G__25584 = null;
var G__25585 = (0);
var G__25586 = (0);
seq__25562_25566 = G__25583;
chunk__25563_25567 = G__25584;
count__25564_25568 = G__25585;
i__25565_25569 = G__25586;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25560,map__25560__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25560,map__25560__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map