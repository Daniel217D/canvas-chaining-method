!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.$c=r():t.$c=r()}(window,(function(){return function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=102)}([function(t,r,n){var e=n(1),o=n(27),i=n(2),u=n(28),c=n(32),a=n(48),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)||(c&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,r,n){(function(r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r&&r)||Function("return this")()}).call(this,n(66))},function(t,r){var n={}.hasOwnProperty;t.exports=function(t,r){return n.call(t,r)}},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,r,n){var e=n(6),o=n(39),i=n(8),u=n(16),c=Object.defineProperty;r.f=e?c:function(t,r,n){if(i(t),r=u(r,!0),i(n),o)try{return c(t,r,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},function(t,r,n){var e=n(3);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,r,n){var e=n(6),o=n(5),i=n(11);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},function(t,r,n){var e=n(4);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,r,n){var e=n(1),o=n(23).f,i=n(7),u=n(12),c=n(26),a=n(43),f=n(70);t.exports=function(t,r){var n,s,l,p,v,y=t.target,h=t.global,d=t.stat;if(n=h?e:d?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in r){if(p=r[s],l=t.noTargetGet?(v=o(n,s))&&v.value:n[s],!f(h?s:y+(d?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(n,s,p,t)}}},function(t,r,n){var e=n(38),o=n(25);t.exports=function(t){return e(o(t))}},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,n){var e=n(1),o=n(7),i=n(2),u=n(26),c=n(41),a=n(17),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,r,n,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof r||i(n,"name")||o(n,"name",r),s(n).source=l.join("string"==typeof r?r:"")),t!==e?(a?!p&&t[r]&&(f=!0):delete t[r],f?t[r]=n:o(t,r,n)):f?t[r]=n:u(r,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},function(t,r,n){var e=n(30),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,r,n){var e=n(25);t.exports=function(t){return Object(e(t))}},function(t,r){t.exports={}},function(t,r,n){var e=n(4);t.exports=function(t,r){if(!e(t))return t;var n,o;if(r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!e(o=n.call(t)))return o;if(!r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,r,n){var e,o,i,u=n(67),c=n(1),a=n(4),f=n(7),s=n(2),l=n(18),p=n(20),v=c.WeakMap;if(u){var y=new v,h=y.get,d=y.has,g=y.set;e=function(t,r){return g.call(y,t,r),r},o=function(t){return h.call(y,t)||{}},i=function(t){return d.call(y,t)}}else{var m=l("state");p[m]=!0,e=function(t,r){return f(t,m,r),r},o=function(t){return s(t,m)?t[m]:{}},i=function(t){return s(t,m)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(r){var n;if(!a(r)||(n=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,r,n){var e=n(27),o=n(28),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,r){t.exports=!1},function(t,r){t.exports={}},function(t,r,n){var e=n(44),o=n(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][r]||o[t]&&o[t][r]}},function(t,r,n){var e=n(24);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,r,n){var e=n(6),o=n(37),i=n(11),u=n(10),c=n(16),a=n(2),f=n(39),s=Object.getOwnPropertyDescriptor;r.f=e?s:function(t,r){if(t=u(t),r=c(r,!0),f)try{return s(t,r)}catch(t){}if(a(t,r))return i(!o.f.call(t,r),t[r])}},function(t,r){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,r){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,r,n){var e=n(1),o=n(7);t.exports=function(t,r){try{o(e,t,r)}catch(n){e[t]=r}return r}},function(t,r,n){var e=n(19),o=n(42);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.4",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,r){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},function(t,r,n){var e=n(45),o=n(31).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,r){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,r,n){var e=n(3);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,r,n){var e,o=n(8),i=n(71),u=n(31),c=n(20),a=n(72),f=n(40),s=n(18),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,r;y=e?function(t){t.write(v("")),t.close();var r=t.parentWindow.Object;return t=null,r}(e):((r=f("iframe")).style.display="none",a.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var n=u.length;n--;)delete y.prototype[u[n]];return y()};c[l]=!0,t.exports=Object.create||function(t,r){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=y(),void 0===r?n:i(n,r)}},function(t,r,n){var e=n(5).f,o=n(2),i=n(0)("toStringTag");t.exports=function(t,r,n){t&&!o(t=n?t:t.prototype,i)&&e(t,i,{configurable:!0,value:r})}},function(t,r,n){"use strict";var e=n(16),o=n(5),i=n(11);t.exports=function(t,r,n){var u=e(r);u in t?o.f(t,u,i(0,n)):t[u]=n}},function(t,r,n){var e={};e[n(0)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,r,n){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);r.f=i?function(t){var r=o(this,t);return!!r&&r.enumerable}:e},function(t,r,n){var e=n(3),o=n(24),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,r,n){var e=n(6),o=n(3),i=n(40);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,r,n){var e=n(1),o=n(4),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,r,n){var e=n(42),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,r,n){var e=n(1),o=n(26),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,r,n){var e=n(2),o=n(68),i=n(23),u=n(5);t.exports=function(t,r){for(var n=o(r),c=u.f,a=i.f,f=0;f<n.length;f++){var s=n[f];e(t,s)||c(t,s,a(r,s))}}},function(t,r,n){var e=n(1);t.exports=e},function(t,r,n){var e=n(2),o=n(10),i=n(69).indexOf,u=n(20);t.exports=function(t,r){var n,c=o(t),a=0,f=[];for(n in c)!e(u,n)&&e(c,n)&&f.push(n);for(;r.length>a;)e(c,n=r[a++])&&(~i(f,n)||f.push(n));return f}},function(t,r,n){var e=n(30),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r,n){var e=n(32);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,r,n){var e=n(45),o=n(31);t.exports=Object.keys||function(t){return e(t,o)}},function(t,r,n){var e=n(0);r.f=e},function(t,r,n){var e=n(44),o=n(2),i=n(50),u=n(5).f;t.exports=function(t){var r=e.Symbol||(e.Symbol={});o(r,t)||u(r,t,{value:i.f(t)})}},function(t,r,n){var e=n(53),o=n(38),i=n(14),u=n(13),c=n(54),a=[].push,f=function(t){var r=1==t,n=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,y,h,d){for(var g,m,b=i(v),x=o(b),S=e(y,h,3),w=u(x.length),O=0,j=d||c,A=r?j(v,w):n?j(v,0):void 0;w>O;O++)if((p||O in x)&&(m=S(g=x[O],O,b),t))if(r)A[O]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return O;case 2:a.call(A,g)}else if(s)return!1;return l?-1:f||s?s:A}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,r,n){var e=n(74);t.exports=function(t,r,n){if(e(t),void 0===r)return t;switch(n){case 0:return function(){return t.call(r)};case 1:return function(n){return t.call(r,n)};case 2:return function(n,e){return t.call(r,n,e)};case 3:return function(n,e,o){return t.call(r,n,e,o)}}return function(){return t.apply(r,arguments)}}},function(t,r,n){var e=n(4),o=n(22),i=n(0)("species");t.exports=function(t,r){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?e(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},function(t,r,n){var e=n(3),o=n(0),i=n(56),u=o("species");t.exports=function(t){return i>=51||!e((function(){var r=[];return(r.constructor={})[u]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},function(t,r,n){var e,o,i=n(1),u=n(78),c=i.process,a=c&&c.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,r,n){"use strict";var e=n(52).forEach,o=n(80),i=n(58),u=o("forEach"),c=i("forEach");t.exports=u&&c?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,r,n){var e=n(6),o=n(3),i=n(2),u=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,r){if(i(c,t))return c[t];r||(r={});var n=[][t],f=!!i(r,"ACCESSORS")&&r.ACCESSORS,s=i(r,0)?r[0]:a,l=i(r,1)?r[1]:void 0;return c[t]=!!n&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?u(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,s,l)}))}},function(t,r,n){var e=n(36),o=n(24),i=n(0)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var r,n,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),i))?n:u?o(r):"Object"==(e=o(r))&&"function"==typeof r.callee?"Arguments":e}},function(t,r,n){"use strict";var e=n(10),o=n(87),i=n(15),u=n(17),c=n(61),a=u.set,f=u.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,r){a(this,{type:"Array Iterator",target:e(t),index:0,kind:r})}),(function(){var t=f(this),r=t.target,n=t.kind,e=t.index++;return!r||e>=r.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:e,done:!1}:"values"==n?{value:r[e],done:!1}:{value:[e,r[e]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,r,n){"use strict";var e=n(9),o=n(88),i=n(63),u=n(90),c=n(34),a=n(7),f=n(12),s=n(0),l=n(19),p=n(15),v=n(62),y=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,d=s("iterator"),g=function(){return this};t.exports=function(t,r,n,s,v,m,b){o(n,r,s);var x,S,w,O=function(t){if(t===v&&P)return P;if(!h&&t in T)return T[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},j=r+" Iterator",A=!1,T=t.prototype,E=T[d]||T["@@iterator"]||v&&T[v],P=!h&&E||O(v),_="Array"==r&&T.entries||E;if(_&&(x=i(_.call(new t)),y!==Object.prototype&&x.next&&(l||i(x)===y||(u?u(x,y):"function"!=typeof x[d]&&a(x,d,g)),c(x,j,!0,!0),l&&(p[j]=g))),"values"==v&&E&&"values"!==E.name&&(A=!0,P=function(){return E.call(this)}),l&&!b||T[d]===P||a(T,d,P),p[r]=P,v)if(S={values:O("values"),keys:m?P:O("keys"),entries:O("entries")},b)for(w in S)!h&&!A&&w in T||f(T,w,S[w]);else e({target:r,proto:!0,forced:h||A},S);return S}},function(t,r,n){"use strict";var e,o,i,u=n(63),c=n(7),a=n(2),f=n(0),s=n(19),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||a(e,l)||c(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,r,n){var e=n(2),o=n(14),i=n(18),u=n(89),c=i("IE_PROTO"),a=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),e(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,r){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,r,n){"use strict";var e=n(9),o=n(1),i=n(21),u=n(19),c=n(6),a=n(32),f=n(48),s=n(3),l=n(2),p=n(22),v=n(4),y=n(8),h=n(14),d=n(10),g=n(16),m=n(11),b=n(33),x=n(49),S=n(29),w=n(73),O=n(47),j=n(23),A=n(5),T=n(37),E=n(7),P=n(12),_=n(27),I=n(18),C=n(20),L=n(28),M=n(0),k=n(50),R=n(51),F=n(34),N=n(17),G=n(52).forEach,D=I("hidden"),V=M("toPrimitive"),z=N.set,H=N.getterFor("Symbol"),U=Object.prototype,W=o.Symbol,$=i("JSON","stringify"),B=j.f,q=A.f,Y=w.f,J=T.f,K=_("symbols"),Q=_("op-symbols"),X=_("string-to-symbol-registry"),Z=_("symbol-to-string-registry"),tt=_("wks"),rt=o.QObject,nt=!rt||!rt.prototype||!rt.prototype.findChild,et=c&&s((function(){return 7!=b(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,r,n){var e=B(U,r);e&&delete U[r],q(t,r,n),e&&t!==U&&q(U,r,e)}:q,ot=function(t,r){var n=K[t]=b(W.prototype);return z(n,{type:"Symbol",tag:t,description:r}),c||(n.description=r),n},it=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ut=function(t,r,n){t===U&&ut(Q,r,n),y(t);var e=g(r,!0);return y(n),l(K,e)?(n.enumerable?(l(t,D)&&t[D][e]&&(t[D][e]=!1),n=b(n,{enumerable:m(0,!1)})):(l(t,D)||q(t,D,m(1,{})),t[D][e]=!0),et(t,e,n)):q(t,e,n)},ct=function(t,r){y(t);var n=d(r),e=x(n).concat(lt(n));return G(e,(function(r){c&&!at.call(n,r)||ut(t,r,n[r])})),t},at=function(t){var r=g(t,!0),n=J.call(this,r);return!(this===U&&l(K,r)&&!l(Q,r))&&(!(n||!l(this,r)||!l(K,r)||l(this,D)&&this[D][r])||n)},ft=function(t,r){var n=d(t),e=g(r,!0);if(n!==U||!l(K,e)||l(Q,e)){var o=B(n,e);return!o||!l(K,e)||l(n,D)&&n[D][e]||(o.enumerable=!0),o}},st=function(t){var r=Y(d(t)),n=[];return G(r,(function(t){l(K,t)||l(C,t)||n.push(t)})),n},lt=function(t){var r=t===U,n=Y(r?Q:d(t)),e=[];return G(n,(function(t){!l(K,t)||r&&!l(U,t)||e.push(K[t])})),e};(a||(P((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=L(t),n=function(t){this===U&&n.call(Q,t),l(this,D)&&l(this[D],r)&&(this[D][r]=!1),et(this,r,m(1,t))};return c&&nt&&et(U,r,{configurable:!0,set:n}),ot(r,t)}).prototype,"toString",(function(){return H(this).tag})),P(W,"withoutSetter",(function(t){return ot(L(t),t)})),T.f=at,A.f=ut,j.f=ft,S.f=w.f=st,O.f=lt,k.f=function(t){return ot(M(t),t)},c&&(q(W.prototype,"description",{configurable:!0,get:function(){return H(this).description}}),u||P(U,"propertyIsEnumerable",at,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:W}),G(x(tt),(function(t){R(t)})),e({target:"Symbol",stat:!0,forced:!a},{for:function(t){var r=String(t);if(l(X,r))return X[r];var n=W(r);return X[r]=n,Z[n]=r,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),e({target:"Object",stat:!0,forced:!a,sham:!c},{create:function(t,r){return void 0===r?b(t):ct(b(t),r)},defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:ft}),e({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:st,getOwnPropertySymbols:lt}),e({target:"Object",stat:!0,forced:s((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(h(t))}}),$)&&e({target:"JSON",stat:!0,forced:!a||s((function(){var t=W();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))}))},{stringify:function(t,r,n){for(var e,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(e=r,(v(r)||void 0!==t)&&!it(t))return p(r)||(r=function(t,r){if("function"==typeof e&&(r=e.call(this,t,r)),!it(r))return r}),o[1]=r,$.apply(null,o)}});W.prototype[V]||E(W.prototype,V,W.prototype.valueOf),F(W,"Symbol"),C[D]=!0},function(t,r){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,r,n){var e=n(1),o=n(41),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,r,n){var e=n(21),o=n(29),i=n(47),u=n(8);t.exports=e("Reflect","ownKeys")||function(t){var r=o.f(u(t)),n=i.f;return n?r.concat(n(t)):r}},function(t,r,n){var e=n(10),o=n(13),i=n(46),u=function(t){return function(r,n,u){var c,a=e(r),f=o(a.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,r,n){var e=n(3),o=/#|\.prototype\./,i=function(t,r){var n=c[u(t)];return n==f||n!=a&&("function"==typeof r?e(r):!!r)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,r,n){var e=n(6),o=n(5),i=n(8),u=n(49);t.exports=e?Object.defineProperties:function(t,r){i(t);for(var n,e=u(r),c=e.length,a=0;c>a;)o.f(t,n=e[a++],r[n]);return t}},function(t,r,n){var e=n(21);t.exports=e("document","documentElement")},function(t,r,n){var e=n(10),o=n(29).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(e(t))}},function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,r,n){"use strict";var e=n(9),o=n(6),i=n(1),u=n(2),c=n(4),a=n(5).f,f=n(43),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[r]=!0),r};f(p,s);var v=p.prototype=s.prototype;v.constructor=p;var y=v.toString,h="Symbol(test)"==String(s("test")),d=/^Symbol\((.*)\)[^)]+$/;a(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,r=y.call(t);if(u(l,t))return"";var n=h?r.slice(7,-1):r.replace(d,"$1");return""===n?void 0:n}}),e({global:!0,forced:!0},{Symbol:p})}},function(t,r,n){n(51)("iterator")},function(t,r,n){"use strict";var e=n(9),o=n(3),i=n(22),u=n(4),c=n(14),a=n(13),f=n(35),s=n(54),l=n(55),p=n(0),v=n(56),y=p("isConcatSpreadable"),h=v>=51||!o((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),d=l("concat"),g=function(t){if(!u(t))return!1;var r=t[y];return void 0!==r?!!r:i(t)};e({target:"Array",proto:!0,forced:!h||!d},{concat:function(t){var r,n,e,o,i,u=c(this),l=s(u,0),p=0;for(r=-1,e=arguments.length;r<e;r++)if(i=-1===r?u:arguments[r],g(i)){if(p+(o=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&f(l,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},function(t,r,n){var e=n(21);t.exports=e("navigator","userAgent")||""},function(t,r,n){"use strict";var e=n(9),o=n(57);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,r,n){"use strict";var e=n(3);t.exports=function(t,r){var n=[][t];return!!n&&e((function(){n.call(null,r||function(){throw 1},1)}))}},function(t,r,n){var e=n(9),o=n(82);e({target:"Array",stat:!0,forced:!n(86)((function(t){Array.from(t)}))},{from:o})},function(t,r,n){"use strict";var e=n(53),o=n(14),i=n(83),u=n(84),c=n(13),a=n(35),f=n(85);t.exports=function(t){var r,n,s,l,p,v,y=o(t),h="function"==typeof this?this:Array,d=arguments.length,g=d>1?arguments[1]:void 0,m=void 0!==g,b=f(y),x=0;if(m&&(g=e(g,d>2?arguments[2]:void 0,2)),null==b||h==Array&&u(b))for(n=new h(r=c(y.length));r>x;x++)v=m?g(y[x],x):y[x],a(n,x,v);else for(p=(l=b.call(y)).next,n=new h;!(s=p.call(l)).done;x++)v=m?i(l,g,[s.value,x],!0):s.value,a(n,x,v);return n.length=x,n}},function(t,r,n){var e=n(8);t.exports=function(t,r,n,o){try{return o?r(e(n)[0],n[1]):r(n)}catch(r){var i=t.return;throw void 0!==i&&e(i.call(t)),r}}},function(t,r,n){var e=n(0),o=n(15),i=e("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},function(t,r,n){var e=n(59),o=n(15),i=n(0)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,r,n){var e=n(0)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[e]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var n=!1;try{var i={};i[e]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,r,n){var e=n(0),o=n(33),i=n(5),u=e("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,r,n){"use strict";var e=n(62).IteratorPrototype,o=n(33),i=n(11),u=n(34),c=n(15),a=function(){return this};t.exports=function(t,r,n){var f=r+" Iterator";return t.prototype=o(e,{next:i(1,n)}),u(t,f,!1,!0),c[f]=a,t}},function(t,r,n){var e=n(3);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,r,n){var e=n(8),o=n(91);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),r=n instanceof Array}catch(t){}return function(n,i){return e(n),o(i),r?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,r,n){var e=n(4);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,r,n){"use strict";var e=n(9),o=n(4),i=n(22),u=n(46),c=n(13),a=n(10),f=n(35),s=n(0),l=n(55),p=n(58),v=l("slice"),y=p("slice",{ACCESSORS:!0,0:0,1:2}),h=s("species"),d=[].slice,g=Math.max;e({target:"Array",proto:!0,forced:!v||!y},{slice:function(t,r){var n,e,s,l=a(this),p=c(l.length),v=u(t,p),y=u(void 0===r?p:r,p);if(i(l)&&("function"!=typeof(n=l.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[h])&&(n=void 0):n=void 0,n===Array||void 0===n))return d.call(l,v,y);for(e=new(void 0===n?Array:n)(g(y-v,0)),s=0;v<y;v++,s++)v in l&&f(e,s,l[v]);return e.length=s,e}})},function(t,r,n){var e=n(6),o=n(5).f,i=Function.prototype,u=i.toString,c=/^\s*function ([^ (]*)/;!e||"name"in i||o(i,"name",{configurable:!0,get:function(){try{return u.call(this).match(c)[1]}catch(t){return""}}})},function(t,r,n){var e=n(36),o=n(12),i=n(95);e||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,r,n){"use strict";var e=n(36),o=n(59);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,r,n){"use strict";var e=n(12),o=n(8),i=n(3),u=n(97),c=RegExp.prototype,a=c.toString,f=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(f||s)&&e(RegExp.prototype,"toString",(function(){var t=o(this),r=String(t.source),n=t.flags;return"/"+r+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?u.call(t):n)}),{unsafe:!0})},function(t,r,n){"use strict";var e=n(8);t.exports=function(){var t=e(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},function(t,r,n){"use strict";var e=n(99).charAt,o=n(17),i=n(61),u=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){u(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,r=c(this),n=r.string,o=r.index;return o>=n.length?{value:void 0,done:!0}:(t=e(n,o),r.index+=t.length,{value:t,done:!1})}))},function(t,r,n){var e=n(30),o=n(25),i=function(t){return function(r,n){var i,u,c=String(o(r)),a=e(n),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,r,n){var e=n(1),o=n(64),i=n(57),u=n(7);for(var c in o){var a=e[c],f=a&&a.prototype;if(f&&f.forEach!==i)try{u(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,r,n){var e=n(1),o=n(64),i=n(60),u=n(7),c=n(0),a=c("iterator"),f=c("toStringTag"),s=i.values;for(var l in o){var p=e[l],v=p&&p.prototype;if(v){if(v[a]!==s)try{u(v,a,s)}catch(t){v[a]=s}if(v[f]||u(v,f,l),o[l])for(var y in i)if(v[y]!==i[y])try{u(v,y,i[y])}catch(t){v[y]=i[y]}}}},function(t,r,n){"use strict";n.r(r),n.d(r,"CanvasCM",(function(){return a}));n(65),n(75),n(76),n(77),n(79),n(81),n(60),n(92),n(93),n(94),n(96),n(98),n(100),n(101);function e(t){return t*Math.PI/180}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return u(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function c(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var a=function t(r){var n=this;if(function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,"setSize",(function(t,r){return void 0===t&&void 0===r?(n.canvas.width=parseInt(getComputedStyle(n.canvas).width),n.canvas.height=parseInt(getComputedStyle(n.canvas).height)):void 0!==t&&void 0!==r?(n.canvas.width=t,n.canvas.height=r):(t=void 0===t?r:t,n.canvas.width=t,n.canvas.height=t),n})),c(this,"line",(function(t,r,e,o){return n.moveTo(t,r).lineTo(e,o)})),c(this,"lines",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.forEach((function(t){n.line.apply(n,i(t))})),n})),c(this,"square",(function(t,r,e){return n.rect(t,r,e,e)})),c(this,"circle",(function(t,r,o){return n.arc(t,r,o,0,e(360))})),c(this,"drawImage",(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2?arguments[2]:void 0,o=r.length;if(2!==o&&4!==o&&8!==o)return console.error("Uncaught TypeError: Failed to execute 'drawImage' on 'CanvasRenderingContext2D': Valid arities are: [2, 4, 8], but "+sc+" arguments provided."),n;var u=new Image;return u.onload=function(){var t;(t=n.ctx).drawImage.apply(t,[u].concat(i(r))),e&&e.call(n,n)},u.src=t,n})),c(this,"rotate",(function(t,r,o){return void 0!==r&&(o=void 0===o?r:o,n.ctx.translate(r,o)),n.ctx.rotate(e(t)),void 0!==r&&n.ctx.translate(-r,-o),n})),c(this,"clear",(function(){return n.ctx.clearRect(0,0,n.canvas.width,n.canvas.height),n})),c(this,"get",(function(t){switch(t.toLowerCase()){case"canvas":return n.canvas;case"ctx":return n.ctx;case"width":case"w":return n.canvas.width;case"height":case"h":return n.canvas.height}return n.ctx[t]})),c(this,"on",(function(t,r){return Array.isArray(t)||(t=[t]),t.forEach((function(t){n.canvas.addEventListener(t,(function(t){return r.call(n,t,n)}))})),n})),c(this,"set",(function(t,r){if("object"===o(t)&&null!==t)for(var e in t)t.hasOwnProperty(e)&&(n.ctx[e]=t[e]);else void 0!==t&&void 0!==r&&(n.ctx[t]=r);return n})),void 0===r||!(r instanceof HTMLCanvasElement))throw"Problems with canvas";this.canvas=r,this.ctx=r.getContext("2d");var u=function(t){"function"==typeof n.ctx[t]&&void 0===n[t]&&(n[t]=function(){var r;return(r=n.ctx)[t].apply(r,arguments),n})};for(var a in this.ctx)u(a)},f=function(t){return new a(t)};a.prototype._intervals=[],a.prototype._timeouts=[],a.prototype.interval=function(t,r,n,e){var o=this;this._intervals[r]&&clearInterval(this._intervals[r]);var i=0;return t.call(this,i++),this._intervals[r]=setInterval((function(){t.call(o,i++)}),n),void 0!==e&&this.cinterval(r,e),this},a.prototype.cinterval=function(t,r){var n=this;return r=void 0===r?0:r,this._intervals[t]&&setTimeout((function(){clearInterval(n._intervals[t])}),r),this},a.prototype.timeout=function(t,r,n){return this._timeouts[r]&&clearTimeout(this._timeouts[r]),this._timeouts[r]=setTimeout(t.bind(this),n),this},a.prototype.ctimeout=function(t,r){var n=this;return r=void 0===r?0:r,this._timeouts[t]&&setTimeout((function(){clearTimeout(n._timeouts[t])}),r),this};r.default=f}])}));
//# sourceMappingURL=index.js.map