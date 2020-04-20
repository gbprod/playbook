(this.webpackJsonpplaybook=this.webpackJsonpplaybook||[]).push([[0],{128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},133:function(e,t,n){var a={"./debug.json":[135,4],"./lluba.json":[136,5],"./morenita.json":[137,6]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(a)},r.id=133,e.exports=r},134:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),i=(n(99),n(16)),s=n(17),o=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(m,null),t)},u=n(140),m=function(){return r.a.createElement(u.h,{fixedToTop:!0},r.a.createElement(u.i,null,r.a.createElement(u.j,null,r.a.createElement(i.b,{to:"/"},"Playbook "))))},f=function(e){var t=e.songs;return r.a.createElement(u.n,null,t.sort((function(e,t){return e.title.localeCompare(t.artist)})).map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(i.b,{to:"song/".concat(e.id)},e.title))})))},E=n(21),d=n(18),b=n(6),h=function(e){var t=e.settings,n=e.onUpdate,a=r.a.createElement(u.d,null,r.a.createElement(u.l,{checked:t.gridVisible,label:"Grid",onChange:function(){return n(Object(d.a)({},t,{gridVisible:!t.gridVisible}))}}),r.a.createElement(u.l,{checked:t.lyricsVisible,label:"Paroles",onChange:function(){return n(Object(d.a)({},t,{lyricsVisible:!t.lyricsVisible}))}}),r.a.createElement(u.l,{checked:t.notesVisible,label:"Notes",onChange:function(){return n(Object(d.a)({},t,{notesVisible:!t.notesVisible}))}}),r.a.createElement(u.l,{checked:t.chordsVisible,label:"Accords",onChange:function(){return n(Object(d.a)({},t,{chordsVisible:!t.chordsVisible}))}}),r.a.createElement(u.l,{checked:t.referencesVisible,label:"R\xe9f\xe9rences",onChange:function(){return n(Object(d.a)({},t,{referencesVisible:!t.referencesVisible}))}}));return r.a.createElement("div",null,r.a.createElement(u.c,null,r.a.createElement(u.b,{icon:"minus",onClick:function(){return n(Object(d.a)({},t,{lyricsFontSize:t.lyricsFontSize-1}))}}),r.a.createElement(u.b,{active:!1,icon:"font"}),r.a.createElement(u.b,{icon:"plus",onClick:function(){return n(Object(d.a)({},t,{lyricsFontSize:t.lyricsFontSize+1}))}}),r.a.createElement(u.k,{content:a,position:b.a.BOTTOM},r.a.createElement(u.a,{rightIcon:"caret-down",icon:"eye-open"}))))},p=function(e){var t,n=e.bar,a=e.defaultBeats,c=[],l=0;return n.chords.forEach((function(e){c.push(r.a.createElement("div",{key:l,className:"bar-chord starts-".concat(l," beats-").concat(e.beats)},r.a.createElement("span",{className:"chord"},e.name))),l+=e.beats})),r.a.createElement("div",{className:"bar bar-".concat(null!==(t=n.beats)&&void 0!==t?t:a)},c)},g=function(e){var t=e.phrase;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.g,null,t.name),r.a.createElement("div",{className:"phrase"},t.bars.map((function(e,n){return r.a.createElement(p,{defaultBeats:t.beats,bar:e,key:n})}))))},v=function(e){var t=e.grid;return r.a.createElement("div",{className:"chord-grid"},t.phrases.map((function(e,t){return r.a.createElement(g,{phrase:e,key:t})})))},y=(n(128),function(e){var t=e.text;return r.a.createElement(u.d,null,t.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e,r.a.createElement("br",null))})))}),k=(n(129),function(e){var t=e.schemas;return r.a.createElement("div",{className:"ChordSchemas"},t.map((function(e,t){return r.a.createElement(u.e,{className:"ChordSchemas__chord",key:t},e.name,": ",e.frets)})))}),V=function(e){var t=e.song,n=e.settings;return r.a.createElement("div",{className:"Header"},r.a.createElement(u.f,null,t.title," - ",t.artist),t.notes&&n.notesVisible&&r.a.createElement("div",{className:"Header__notes"},r.a.createElement(y,{text:t.notes})),r.a.createElement("div",{className:"Header__subtitle"},(t.capo||t.tunning)&&r.a.createElement("div",{className:"Header__tags"},t.capo&&r.a.createElement(u.m,{className:"Header__tag"},"Capo ",t.capo),t.tunning&&r.a.createElement(u.m,{className:"Header__tag"},"Tunning ",t.tunning)),t.schemas&&n.chordsVisible&&r.a.createElement("div",{className:"Header__schemas"},r.a.createElement(k,{schemas:t.schemas}))))},j=(n(130),function(e){var t=e.text,n=e.fontSize;return r.a.createElement("div",null,r.a.createElement(u.g,null,"Paroles"),r.a.createElement("div",{className:"lyrics",style:{fontSize:"".concat(n,"px")}},t.map((function(e,t){return r.a.createElement("p",{key:t},e.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},e,r.a.createElement("br",null))})))}))))}),O=function(e){var t=e.references;return r.a.createElement("div",null,r.a.createElement(u.g,null,"R\xe9f\xe9rences"),r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},e))}))))},N=(n(131),function(e){var t=e.song,n=Object(a.useState)({lyricsFontSize:14,gridVisible:!0,lyricsVisible:!0,notesVisible:!0,chordsVisible:!0,referencesVisible:!1}),c=Object(E.a)(n,2),l=c[0],i=c[1];return r.a.createElement("div",{className:"song_wrapper"},r.a.createElement("div",{className:"actions"},r.a.createElement(h,{settings:l,onUpdate:function(e){i(e)}})),r.a.createElement("header",null,r.a.createElement(V,{song:t,settings:l})),l.gridVisible&&r.a.createElement("article",null,r.a.createElement(v,{grid:t.grid})),l.lyricsVisible&&r.a.createElement("aside",null,t.lyrics&&r.a.createElement(j,{text:t.lyrics,fontSize:l.lyricsFontSize})),t.references&&l.referencesVisible&&r.a.createElement("footer",null,r.a.createElement(O,{references:t.references})))}),_=n(22),w=n.n(_),S=n(33),x=function(){var e=Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3).then(n.t.bind(null,141,3));case 2:return t=e.sent.default,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(S.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(133)("./".concat(t,".json"));case 2:return a=e.sent.default,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(a.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){x().then((function(e){c(e)}))}),[]),r.a.createElement(f,{songs:n})},z=function(){var e=Object(a.useState)(),t=Object(E.a)(e,2),n=t[0],c=t[1],l=Object(s.f)().id;return Object(a.useEffect)((function(){C(l).then((function(e){c(e)}))}),[l]),r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(N,{song:n}))},H=function(){return r.a.createElement(o,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/song/:id"},r.a.createElement(z,null)),r.a.createElement(s.a,{path:"/"},r.a.createElement(F,null))))},T=function(){return r.a.createElement(i.a,null,r.a.createElement(H,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,n){e.exports=n(134)},99:function(e,t,n){}},[[94,1,2]]]);
//# sourceMappingURL=main.1f8cfc7a.chunk.js.map