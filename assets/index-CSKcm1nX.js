function B4(t,e){for(var i=0;i<e.length;i++){const o=e[i];if(typeof o!="string"&&!Array.isArray(o)){for(const c in o)if(c!=="default"&&!(c in t)){const m=Object.getOwnPropertyDescriptor(o,c);m&&Object.defineProperty(t,c,m.get?m:{enumerable:!0,get:()=>o[c]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const m of c)if(m.type==="childList")for(const d of m.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const m={};return c.integrity&&(m.integrity=c.integrity),c.referrerPolicy&&(m.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?m.credentials="include":c.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function o(c){if(c.ep)return;c.ep=!0;const m=i(c);fetch(c.href,m)}})();function Um(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Md={exports:{}},Za={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jx;function z4(){if(Jx)return Za;Jx=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(o,c,m){var d=null;if(m!==void 0&&(d=""+m),c.key!==void 0&&(d=""+c.key),"key"in c){m={};for(var h in c)h!=="key"&&(m[h]=c[h])}else m=c;return c=m.ref,{$$typeof:t,type:o,key:d,ref:c!==void 0?c:null,props:m}}return Za.Fragment=e,Za.jsx=i,Za.jsxs=i,Za}var e0;function U4(){return e0||(e0=1,Md.exports=z4()),Md.exports}var n=U4(),Ad={exports:{}},Ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n0;function P4(){if(n0)return Ae;n0=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function S(w){return w===null||typeof w!="object"?null:(w=y&&w[y]||w["@@iterator"],typeof w=="function"?w:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,L={};function k(w,q,ie){this.props=w,this.context=q,this.refs=L,this.updater=ie||_}k.prototype.isReactComponent={},k.prototype.setState=function(w,q){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,q,"setState")},k.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function A(){}A.prototype=k.prototype;function O(w,q,ie){this.props=w,this.context=q,this.refs=L,this.updater=ie||_}var B=O.prototype=new A;B.constructor=O,T(B,k.prototype),B.isPureReactComponent=!0;var F=Array.isArray,z={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function de(w,q,ie,pe,ne,Te){return ie=Te.ref,{$$typeof:t,type:w,key:q,ref:ie!==void 0?ie:null,props:Te}}function te(w,q){return de(w.type,q,void 0,void 0,void 0,w.props)}function Z(w){return typeof w=="object"&&w!==null&&w.$$typeof===t}function me(w){var q={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ie){return q[ie]})}var De=/\/+/g;function ge(w,q){return typeof w=="object"&&w!==null&&w.key!=null?me(""+w.key):q.toString(36)}function tn(){}function We(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(tn,tn):(w.status="pending",w.then(function(q){w.status==="pending"&&(w.status="fulfilled",w.value=q)},function(q){w.status==="pending"&&(w.status="rejected",w.reason=q)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function Xe(w,q,ie,pe,ne){var Te=typeof w;(Te==="undefined"||Te==="boolean")&&(w=null);var be=!1;if(w===null)be=!0;else switch(Te){case"bigint":case"string":case"number":be=!0;break;case"object":switch(w.$$typeof){case t:case e:be=!0;break;case v:return be=w._init,Xe(be(w._payload),q,ie,pe,ne)}}if(be)return ne=ne(w),be=pe===""?"."+ge(w,0):pe,F(ne)?(ie="",be!=null&&(ie=be.replace(De,"$&/")+"/"),Xe(ne,q,ie,"",function(fn){return fn})):ne!=null&&(Z(ne)&&(ne=te(ne,ie+(ne.key==null||w&&w.key===ne.key?"":(""+ne.key).replace(De,"$&/")+"/")+be)),q.push(ne)),1;be=0;var Bn=pe===""?".":pe+":";if(F(w))for(var Be=0;Be<w.length;Be++)pe=w[Be],Te=Bn+ge(pe,Be),be+=Xe(pe,q,ie,Te,ne);else if(Be=S(w),typeof Be=="function")for(w=Be.call(w),Be=0;!(pe=w.next()).done;)pe=pe.value,Te=Bn+ge(pe,Be++),be+=Xe(pe,q,ie,Te,ne);else if(Te==="object"){if(typeof w.then=="function")return Xe(We(w),q,ie,pe,ne);throw q=String(w),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return be}function I(w,q,ie){if(w==null)return w;var pe=[],ne=0;return Xe(w,pe,"","",function(Te){return q.call(ie,Te,ne++)}),pe}function J(w){if(w._status===-1){var q=w._result;q=q(),q.then(function(ie){(w._status===0||w._status===-1)&&(w._status=1,w._result=ie)},function(ie){(w._status===0||w._status===-1)&&(w._status=2,w._result=ie)}),w._status===-1&&(w._status=0,w._result=q)}if(w._status===1)return w._result.default;throw w._result}var W=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function ve(){}return Ae.Children={map:I,forEach:function(w,q,ie){I(w,function(){q.apply(this,arguments)},ie)},count:function(w){var q=0;return I(w,function(){q++}),q},toArray:function(w){return I(w,function(q){return q})||[]},only:function(w){if(!Z(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},Ae.Component=k,Ae.Fragment=i,Ae.Profiler=c,Ae.PureComponent=O,Ae.StrictMode=o,Ae.Suspense=f,Ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,Ae.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ae.cache=function(w){return function(){return w.apply(null,arguments)}},Ae.cloneElement=function(w,q,ie){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var pe=T({},w.props),ne=w.key,Te=void 0;if(q!=null)for(be in q.ref!==void 0&&(Te=void 0),q.key!==void 0&&(ne=""+q.key),q)!Y.call(q,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&q.ref===void 0||(pe[be]=q[be]);var be=arguments.length-2;if(be===1)pe.children=ie;else if(1<be){for(var Bn=Array(be),Be=0;Be<be;Be++)Bn[Be]=arguments[Be+2];pe.children=Bn}return de(w.type,ne,void 0,void 0,Te,pe)},Ae.createContext=function(w){return w={$$typeof:d,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:m,_context:w},w},Ae.createElement=function(w,q,ie){var pe,ne={},Te=null;if(q!=null)for(pe in q.key!==void 0&&(Te=""+q.key),q)Y.call(q,pe)&&pe!=="key"&&pe!=="__self"&&pe!=="__source"&&(ne[pe]=q[pe]);var be=arguments.length-2;if(be===1)ne.children=ie;else if(1<be){for(var Bn=Array(be),Be=0;Be<be;Be++)Bn[Be]=arguments[Be+2];ne.children=Bn}if(w&&w.defaultProps)for(pe in be=w.defaultProps,be)ne[pe]===void 0&&(ne[pe]=be[pe]);return de(w,Te,void 0,void 0,null,ne)},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(w){return{$$typeof:h,render:w}},Ae.isValidElement=Z,Ae.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:J}},Ae.memo=function(w,q){return{$$typeof:x,type:w,compare:q===void 0?null:q}},Ae.startTransition=function(w){var q=z.T,ie={};z.T=ie;try{var pe=w(),ne=z.S;ne!==null&&ne(ie,pe),typeof pe=="object"&&pe!==null&&typeof pe.then=="function"&&pe.then(ve,W)}catch(Te){W(Te)}finally{z.T=q}},Ae.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},Ae.use=function(w){return z.H.use(w)},Ae.useActionState=function(w,q,ie){return z.H.useActionState(w,q,ie)},Ae.useCallback=function(w,q){return z.H.useCallback(w,q)},Ae.useContext=function(w){return z.H.useContext(w)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(w,q){return z.H.useDeferredValue(w,q)},Ae.useEffect=function(w,q){return z.H.useEffect(w,q)},Ae.useId=function(){return z.H.useId()},Ae.useImperativeHandle=function(w,q,ie){return z.H.useImperativeHandle(w,q,ie)},Ae.useInsertionEffect=function(w,q){return z.H.useInsertionEffect(w,q)},Ae.useLayoutEffect=function(w,q){return z.H.useLayoutEffect(w,q)},Ae.useMemo=function(w,q){return z.H.useMemo(w,q)},Ae.useOptimistic=function(w,q){return z.H.useOptimistic(w,q)},Ae.useReducer=function(w,q,ie){return z.H.useReducer(w,q,ie)},Ae.useRef=function(w){return z.H.useRef(w)},Ae.useState=function(w){return z.H.useState(w)},Ae.useSyncExternalStore=function(w,q,ie){return z.H.useSyncExternalStore(w,q,ie)},Ae.useTransition=function(){return z.H.useTransition()},Ae.version="19.0.0",Ae}var t0;function Pm(){return t0||(t0=1,Ad.exports=P4()),Ad.exports}var j=Pm();const Ut=Um(j),H4=B4({__proto__:null,default:Ut},[j]);var Rd={exports:{}},Ka={},Ld={exports:{}},Td={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function V4(){return s0||(s0=1,function(t){function e(I,J){var W=I.length;I.push(J);e:for(;0<W;){var ve=W-1>>>1,w=I[ve];if(0<c(w,J))I[ve]=J,I[W]=w,W=ve;else break e}}function i(I){return I.length===0?null:I[0]}function o(I){if(I.length===0)return null;var J=I[0],W=I.pop();if(W!==J){I[0]=W;e:for(var ve=0,w=I.length,q=w>>>1;ve<q;){var ie=2*(ve+1)-1,pe=I[ie],ne=ie+1,Te=I[ne];if(0>c(pe,W))ne<w&&0>c(Te,pe)?(I[ve]=Te,I[ne]=W,ve=ne):(I[ve]=pe,I[ie]=W,ve=ie);else if(ne<w&&0>c(Te,W))I[ve]=Te,I[ne]=W,ve=ne;else break e}}return J}function c(I,J){var W=I.sortIndex-J.sortIndex;return W!==0?W:I.id-J.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;t.unstable_now=function(){return m.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var f=[],x=[],v=1,y=null,S=3,_=!1,T=!1,L=!1,k=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function B(I){for(var J=i(x);J!==null;){if(J.callback===null)o(x);else if(J.startTime<=I)o(x),J.sortIndex=J.expirationTime,e(f,J);else break;J=i(x)}}function F(I){if(L=!1,B(I),!T)if(i(f)!==null)T=!0,We();else{var J=i(x);J!==null&&Xe(F,J.startTime-I)}}var z=!1,Y=-1,de=5,te=-1;function Z(){return!(t.unstable_now()-te<de)}function me(){if(z){var I=t.unstable_now();te=I;var J=!0;try{e:{T=!1,L&&(L=!1,A(Y),Y=-1),_=!0;var W=S;try{n:{for(B(I),y=i(f);y!==null&&!(y.expirationTime>I&&Z());){var ve=y.callback;if(typeof ve=="function"){y.callback=null,S=y.priorityLevel;var w=ve(y.expirationTime<=I);if(I=t.unstable_now(),typeof w=="function"){y.callback=w,B(I),J=!0;break n}y===i(f)&&o(f),B(I)}else o(f);y=i(f)}if(y!==null)J=!0;else{var q=i(x);q!==null&&Xe(F,q.startTime-I),J=!1}}break e}finally{y=null,S=W,_=!1}J=void 0}}finally{J?De():z=!1}}}var De;if(typeof O=="function")De=function(){O(me)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,tn=ge.port2;ge.port1.onmessage=me,De=function(){tn.postMessage(null)}}else De=function(){k(me,0)};function We(){z||(z=!0,De())}function Xe(I,J){Y=k(function(){I(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,We())},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_getFirstCallbackNode=function(){return i(f)},t.unstable_next=function(I){switch(S){case 1:case 2:case 3:var J=3;break;default:J=S}var W=S;S=J;try{return I()}finally{S=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,J){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var W=S;S=I;try{return J()}finally{S=W}},t.unstable_scheduleCallback=function(I,J,W){var ve=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ve+W:ve):W=ve,I){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=W+w,I={id:v++,callback:J,priorityLevel:I,startTime:W,expirationTime:w,sortIndex:-1},W>ve?(I.sortIndex=W,e(x,I),i(f)===null&&I===i(x)&&(L?(A(Y),Y=-1):L=!0,Xe(F,W-ve))):(I.sortIndex=w,e(f,I),T||_||(T=!0,We())),I},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(I){var J=S;return function(){var W=S;S=J;try{return I.apply(this,arguments)}finally{S=W}}}}(Td)),Td}var r0;function q4(){return r0||(r0=1,Ld.exports=V4()),Ld.exports}var Ed={exports:{}},Zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0;function F4(){if(i0)return Zn;i0=1;var t=Pm();function e(f){var x="https://react.dev/errors/"+f;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)x+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+f+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function m(f,x,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:""+y,children:f,containerInfo:x,implementation:v}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(f,x){if(f==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Zn.createPortal=function(f,x){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(e(299));return m(f,x,null,v)},Zn.flushSync=function(f){var x=d.T,v=o.p;try{if(d.T=null,o.p=2,f)return f()}finally{d.T=x,o.p=v,o.d.f()}},Zn.preconnect=function(f,x){typeof f=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,o.d.C(f,x))},Zn.prefetchDNS=function(f){typeof f=="string"&&o.d.D(f)},Zn.preinit=function(f,x){if(typeof f=="string"&&x&&typeof x.as=="string"){var v=x.as,y=h(v,x.crossOrigin),S=typeof x.integrity=="string"?x.integrity:void 0,_=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;v==="style"?o.d.S(f,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:y,integrity:S,fetchPriority:_}):v==="script"&&o.d.X(f,{crossOrigin:y,integrity:S,fetchPriority:_,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Zn.preinitModule=function(f,x){if(typeof f=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var v=h(x.as,x.crossOrigin);o.d.M(f,{crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&o.d.M(f)},Zn.preload=function(f,x){if(typeof f=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var v=x.as,y=h(v,x.crossOrigin);o.d.L(f,v,{crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Zn.preloadModule=function(f,x){if(typeof f=="string")if(x){var v=h(x.as,x.crossOrigin);o.d.m(f,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:v,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else o.d.m(f)},Zn.requestFormReset=function(f){o.d.r(f)},Zn.unstable_batchedUpdates=function(f,x){return f(x)},Zn.useFormState=function(f,x,v){return d.H.useFormState(f,x,v)},Zn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Zn.version="19.0.0",Zn}var a0;function Pv(){if(a0)return Ed.exports;a0=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Ed.exports=F4(),Ed.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function X4(){if(o0)return Ka;o0=1;var t=q4(),e=Pm(),i=Pv();function o(s){var r="https://react.dev/errors/"+s;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+s+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}var m=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),S=Symbol.for("react.consumer"),_=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),B=Symbol.for("react.offscreen"),F=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function Y(s){return s===null||typeof s!="object"?null:(s=z&&s[z]||s["@@iterator"],typeof s=="function"?s:null)}var de=Symbol.for("react.client.reference");function te(s){if(s==null)return null;if(typeof s=="function")return s.$$typeof===de?null:s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case f:return"Fragment";case h:return"Portal";case v:return"Profiler";case x:return"StrictMode";case L:return"Suspense";case k:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case _:return(s.displayName||"Context")+".Provider";case S:return(s._context.displayName||"Context")+".Consumer";case T:var r=s.render;return s=s.displayName,s||(s=r.displayName||r.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case A:return r=s.displayName||null,r!==null?r:te(s.type)||"Memo";case O:r=s._payload,s=s._init;try{return te(s(r))}catch{}}return null}var Z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me=Object.assign,De,ge;function tn(s){if(De===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);De=r&&r[1]||"",ge=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+De+s+ge}var We=!1;function Xe(s,r){if(!s||We)return"";We=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(U){var D=U}Reflect.construct(s,[],X)}else{try{X.call()}catch(U){D=U}s.call(X.prototype)}}else{try{throw Error()}catch(U){D=U}(X=s())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(U){if(U&&D&&typeof U.stack=="string")return[U.stack,D.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),g=p[0],b=p[1];if(g&&b){var N=g.split(`
`),M=b.split(`
`);for(u=l=0;l<N.length&&!N[l].includes("DetermineComponentFrameRoot");)l++;for(;u<M.length&&!M[u].includes("DetermineComponentFrameRoot");)u++;if(l===N.length||u===M.length)for(l=N.length-1,u=M.length-1;1<=l&&0<=u&&N[l]!==M[u];)u--;for(;1<=l&&0<=u;l--,u--)if(N[l]!==M[u]){if(l!==1||u!==1)do if(l--,u--,0>u||N[l]!==M[u]){var P=`
`+N[l].replace(" at new "," at ");return s.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",s.displayName)),P}while(1<=l&&0<=u);break}}}finally{We=!1,Error.prepareStackTrace=a}return(a=s?s.displayName||s.name:"")?tn(a):""}function I(s){switch(s.tag){case 26:case 27:case 5:return tn(s.type);case 16:return tn("Lazy");case 13:return tn("Suspense");case 19:return tn("SuspenseList");case 0:case 15:return s=Xe(s.type,!1),s;case 11:return s=Xe(s.type.render,!1),s;case 1:return s=Xe(s.type,!0),s;default:return""}}function J(s){try{var r="";do r+=I(s),s=s.return;while(s);return r}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function W(s){var r=s,a=s;if(s.alternate)for(;r.return;)r=r.return;else{s=r;do r=s,r.flags&4098&&(a=r.return),s=r.return;while(s)}return r.tag===3?a:null}function ve(s){if(s.tag===13){var r=s.memoizedState;if(r===null&&(s=s.alternate,s!==null&&(r=s.memoizedState)),r!==null)return r.dehydrated}return null}function w(s){if(W(s)!==s)throw Error(o(188))}function q(s){var r=s.alternate;if(!r){if(r=W(s),r===null)throw Error(o(188));return r!==s?null:s}for(var a=s,l=r;;){var u=a.return;if(u===null)break;var p=u.alternate;if(p===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===a)return w(u),s;if(p===l)return w(u),r;p=p.sibling}throw Error(o(188))}if(a.return!==l.return)a=u,l=p;else{for(var g=!1,b=u.child;b;){if(b===a){g=!0,a=u,l=p;break}if(b===l){g=!0,l=u,a=p;break}b=b.sibling}if(!g){for(b=p.child;b;){if(b===a){g=!0,a=p,l=u;break}if(b===l){g=!0,l=p,a=u;break}b=b.sibling}if(!g)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?s:r}function ie(s){var r=s.tag;if(r===5||r===26||r===27||r===6)return s;for(s=s.child;s!==null;){if(r=ie(s),r!==null)return r;s=s.sibling}return null}var pe=Array.isArray,ne=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Te={pending:!1,data:null,method:null,action:null},be=[],Bn=-1;function Be(s){return{current:s}}function fn(s){0>Bn||(s.current=be[Bn],be[Bn]=null,Bn--)}function sn(s,r){Bn++,be[Bn]=s.current,s.current=r}var ft=Be(null),cr=Be(null),Ht=Be(null),Xr=Be(null);function Gr(s,r){switch(sn(Ht,r),sn(cr,s),sn(ft,null),s=r.nodeType,s){case 9:case 11:r=(r=r.documentElement)&&(r=r.namespaceURI)?Mx(r):0;break;default:if(s=s===8?r.parentNode:r,r=s.tagName,s=s.namespaceURI)s=Mx(s),r=Ax(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}fn(ft),sn(ft,r)}function ts(){fn(ft),fn(cr),fn(Ht)}function Ii(s){s.memoizedState!==null&&sn(Xr,s);var r=ft.current,a=Ax(r,s.type);r!==a&&(sn(cr,s),sn(ft,a))}function Ir(s){cr.current===s&&(fn(ft),fn(cr)),Xr.current===s&&(fn(Xr),Fa._currentValue=Te)}var Yi=Object.prototype.hasOwnProperty,Yr=t.unstable_scheduleCallback,Zi=t.unstable_cancelCallback,Cc=t.unstable_shouldYield,kc=t.unstable_requestPaint,xt=t.unstable_now,Mc=t.unstable_getCurrentPriorityLevel,Zr=t.unstable_ImmediatePriority,Ki=t.unstable_UserBlockingPriority,Kr=t.unstable_NormalPriority,Co=t.unstable_LowPriority,Wr=t.unstable_IdlePriority,ko=t.log,rt=t.unstable_setDisableYieldValue,ss=null,Gn=null;function Mo(s){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(ss,s,void 0,(s.current.flags&128)===128)}catch{}}function rs(s){if(typeof ko=="function"&&rt(s),Gn&&typeof Gn.setStrictMode=="function")try{Gn.setStrictMode(ss,s)}catch{}}var Jn=Math.clz32?Math.clz32:K,E=Math.log,H=Math.LN2;function K(s){return s>>>=0,s===0?32:31-(E(s)/H|0)|0}var he=128,Pe=4194304;function Ee(s){var r=s&42;if(r!==0)return r;switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return s&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return s}}function cn(s,r){var a=s.pendingLanes;if(a===0)return 0;var l=0,u=s.suspendedLanes,p=s.pingedLanes,g=s.warmLanes;s=s.finishedLanes!==0;var b=a&134217727;return b!==0?(a=b&~u,a!==0?l=Ee(a):(p&=b,p!==0?l=Ee(p):s||(g=b&~g,g!==0&&(l=Ee(g))))):(b=a&~u,b!==0?l=Ee(b):p!==0?l=Ee(p):s||(g=a&~g,g!==0&&(l=Ee(g)))),l===0?0:r!==0&&r!==l&&!(r&u)&&(u=l&-l,g=r&-r,u>=g||u===32&&(g&4194176)!==0)?r:l}function Q(s,r){return(s.pendingLanes&~(s.suspendedLanes&~s.pingedLanes)&r)===0}function oe(s,r){switch(s){case 1:case 2:case 4:case 8:return r+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var s=he;return he<<=1,!(he&4194176)&&(he=128),s}function ke(){var s=Pe;return Pe<<=1,!(Pe&62914560)&&(Pe=4194304),s}function rn(s){for(var r=[],a=0;31>a;a++)r.push(s);return r}function it(s,r){s.pendingLanes|=r,r!==268435456&&(s.suspendedLanes=0,s.pingedLanes=0,s.warmLanes=0)}function Wi(s,r,a,l,u,p){var g=s.pendingLanes;s.pendingLanes=a,s.suspendedLanes=0,s.pingedLanes=0,s.warmLanes=0,s.expiredLanes&=a,s.entangledLanes&=a,s.errorRecoveryDisabledLanes&=a,s.shellSuspendCounter=0;var b=s.entanglements,N=s.expirationTimes,M=s.hiddenUpdates;for(a=g&~a;0<a;){var P=31-Jn(a),X=1<<P;b[P]=0,N[P]=-1;var D=M[P];if(D!==null)for(M[P]=null,P=0;P<D.length;P++){var U=D[P];U!==null&&(U.lane&=-536870913)}a&=~X}l!==0&&Qr(s,l,0),p!==0&&u===0&&s.tag!==0&&(s.suspendedLanes|=p&~(g&~r))}function Qr(s,r,a){s.pendingLanes|=r,s.suspendedLanes&=~r;var l=31-Jn(r);s.entangledLanes|=r,s.entanglements[l]=s.entanglements[l]|1073741824|a&4194218}function Ao(s,r){var a=s.entangledLanes|=r;for(s=s.entanglements;a;){var l=31-Jn(a),u=1<<l;u&r|s[l]&r&&(s[l]|=r),a&=~u}}function Ro(s){return s&=-s,2<s?8<s?s&134217727?32:268435456:8:2}function Lo(){var s=ne.p;return s!==0?s:(s=window.event,s===void 0?32:Ix(s.type))}function Ac(s,r){var a=ne.p;try{return ne.p=s,r()}finally{ne.p=a}}var Vt=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Vt,In="__reactProps$"+Vt,qt="__reactContainer$"+Vt,Qi="__reactEvents$"+Vt,Ji="__reactListeners$"+Vt,To="__reactHandles$"+Vt,Eo="__reactResources$"+Vt,ur="__reactMarker$"+Vt;function ea(s){delete s[Sn],delete s[In],delete s[Qi],delete s[Ji],delete s[To]}function is(s){var r=s[Sn];if(r)return r;for(var a=s.parentNode;a;){if(r=a[qt]||a[Sn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(s=Tx(s);s!==null;){if(a=s[Sn])return a;s=Tx(s)}return r}s=a,a=s.parentNode}return null}function As(s){if(s=s[Sn]||s[qt]){var r=s.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return s}return null}function et(s){var r=s.tag;if(r===5||r===26||r===27||r===6)return s.stateNode;throw Error(o(33))}function as(s){var r=s[Eo];return r||(r=s[Eo]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Nn(s){s[ur]=!0}var $o=new Set,Do={};function gt(s,r){Rs(s,r),Rs(s+"Capture",r)}function Rs(s,r){for(Do[s]=r,s=0;s<r.length;s++)$o.add(r[s])}var Lt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),G=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),re={},ze={};function Qe(s){return Yi.call(ze,s)?!0:Yi.call(re,s)?!1:G.test(s)?ze[s]=!0:(re[s]=!0,!1)}function un(s,r,a){if(Qe(r))if(a===null)s.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":s.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){s.removeAttribute(r);return}}s.setAttribute(r,""+a)}}function vt(s,r,a){if(a===null)s.removeAttribute(r);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":s.removeAttribute(r);return}s.setAttribute(r,""+a)}}function Rn(s,r,a,l){if(l===null)s.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":s.removeAttribute(a);return}s.setAttributeNS(r,a,""+l)}}function dn(s){switch(typeof s){case"bigint":case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function lt(s){var r=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ft(s){var r=lt(s)?"checked":"value",a=Object.getOwnPropertyDescriptor(s.constructor.prototype,r),l=""+s[r];if(!s.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,p=a.set;return Object.defineProperty(s,r,{configurable:!0,get:function(){return u.call(this)},set:function(g){l=""+g,p.call(this,g)}}),Object.defineProperty(s,r,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(g){l=""+g},stopTracking:function(){s._valueTracker=null,delete s[r]}}}}function Jr(s){s._valueTracker||(s._valueTracker=Ft(s))}function Oo(s){if(!s)return!1;var r=s._valueTracker;if(!r)return!0;var a=r.getValue(),l="";return s&&(l=lt(s)?s.checked?"true":"false":s.value),s=l,s!==a?(r.setValue(s),!0):!1}function ei(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}var Rc=/[\n"\\]/g;function Vn(s){return s.replace(Rc,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function ni(s,r,a,l,u,p,g,b){s.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?s.type=g:s.removeAttribute("type"),r!=null?g==="number"?(r===0&&s.value===""||s.value!=r)&&(s.value=""+dn(r)):s.value!==""+dn(r)&&(s.value=""+dn(r)):g!=="submit"&&g!=="reset"||s.removeAttribute("value"),r!=null?na(s,g,dn(r)):a!=null?na(s,g,dn(a)):l!=null&&s.removeAttribute("value"),u==null&&p!=null&&(s.defaultChecked=!!p),u!=null&&(s.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?s.name=""+dn(b):s.removeAttribute("name")}function os(s,r,a,l,u,p,g,b){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(s.type=p),r!=null||a!=null){if(!(p!=="submit"&&p!=="reset"||r!=null))return;a=a!=null?""+dn(a):"",r=r!=null?""+dn(r):a,b||r===s.value||(s.value=r),s.defaultValue=r}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,s.checked=b?s.checked:!!l,s.defaultChecked=!!l,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(s.name=g)}function na(s,r,a){r==="number"&&ei(s.ownerDocument)===s||s.defaultValue===""+a||(s.defaultValue=""+a)}function Xt(s,r,a,l){if(s=s.options,r){r={};for(var u=0;u<a.length;u++)r["$"+a[u]]=!0;for(a=0;a<s.length;a++)u=r.hasOwnProperty("$"+s[a].value),s[a].selected!==u&&(s[a].selected=u),u&&l&&(s[a].defaultSelected=!0)}else{for(a=""+dn(a),r=null,u=0;u<s.length;u++){if(s[u].value===a){s[u].selected=!0,l&&(s[u].defaultSelected=!0);return}r!==null||s[u].disabled||(r=s[u])}r!==null&&(r.selected=!0)}}function Le(s,r,a){if(r!=null&&(r=""+dn(r),r!==s.value&&(s.value=r),a==null)){s.defaultValue!==r&&(s.defaultValue=r);return}s.defaultValue=a!=null?""+dn(a):""}function ta(s,r,a,l){if(r==null){if(l!=null){if(a!=null)throw Error(o(92));if(pe(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),r=a}a=dn(r),s.defaultValue=a,l=s.textContent,l===a&&l!==""&&l!==null&&(s.value=l)}function xn(s,r){if(r){var a=s.firstChild;if(a&&a===s.lastChild&&a.nodeType===3){a.nodeValue=r;return}}s.textContent=r}var gn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dr(s,r,a){var l=r.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?s.setProperty(r,""):r==="float"?s.cssFloat="":s[r]="":l?s.setProperty(r,a):typeof a!="number"||a===0||gn.has(r)?r==="float"?s.cssFloat=a:s[r]=(""+a).trim():s[r]=a+"px"}function ls(s,r,a){if(r!=null&&typeof r!="object")throw Error(o(62));if(s=s.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?s.setProperty(l,""):l==="float"?s.cssFloat="":s[l]="");for(var u in r)l=r[u],r.hasOwnProperty(u)&&a[u]!==l&&dr(s,u,l)}else for(var p in r)r.hasOwnProperty(p)&&dr(s,p,r[p])}function mr(s){if(s.indexOf("-")===-1)return!1;switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sa=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),le=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xe(s){return le.test(""+s)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":s}var Me=null;function Ge(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var wn=null,Tt=null;function Bo(s){var r=As(s);if(r&&(s=r.stateNode)){var a=s[In]||null;e:switch(s=r.stateNode,r.type){case"input":if(ni(s,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),r=a.name,a.type==="radio"&&r!=null){for(a=s;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vn(""+r)+'"][type="radio"]'),r=0;r<a.length;r++){var l=a[r];if(l!==s&&l.form===s.form){var u=l[In]||null;if(!u)throw Error(o(90));ni(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(r=0;r<a.length;r++)l=a[r],l.form===s.form&&Oo(l)}break e;case"textarea":Le(s,a.value,a.defaultValue);break e;case"select":r=a.value,r!=null&&Xt(s,!!a.multiple,r,!1)}}}var Lc=!1;function zp(s,r,a){if(Lc)return s(r,a);Lc=!0;try{var l=s(r);return l}finally{if(Lc=!1,(wn!==null||Tt!==null)&&(yl(),wn&&(r=wn,s=Tt,Tt=wn=null,Bo(r),s)))for(r=0;r<s.length;r++)Bo(s[r])}}function ra(s,r){var a=s.stateNode;if(a===null)return null;var l=a[In]||null;if(l===null)return null;a=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(s=s.type,l=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!l;break e;default:s=!1}if(s)return null;if(a&&typeof a!="function")throw Error(o(231,r,typeof a));return a}var Tc=!1;if(Lt)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){Tc=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{Tc=!1}var Ls=null,Ec=null,zo=null;function Up(){if(zo)return zo;var s,r=Ec,a=r.length,l,u="value"in Ls?Ls.value:Ls.textContent,p=u.length;for(s=0;s<a&&r[s]===u[s];s++);var g=a-s;for(l=1;l<=g&&r[a-l]===u[p-l];l++);return zo=u.slice(s,1<l?1-l:void 0)}function Uo(s){var r=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&r===13&&(s=13)):s=r,s===10&&(s=13),32<=s||s===13?s:0}function Po(){return!0}function Pp(){return!1}function at(s){function r(a,l,u,p,g){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=p,this.target=g,this.currentTarget=null;for(var b in s)s.hasOwnProperty(b)&&(a=s[b],this[b]=a?a(p):p[b]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Po:Pp,this.isPropagationStopped=Pp,this}return me(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),r}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ho=at(pr),aa=me({},pr,{view:0,detail:0}),Bb=at(aa),$c,Dc,oa,Vo=me({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bc,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==oa&&(oa&&s.type==="mousemove"?($c=s.screenX-oa.screenX,Dc=s.screenY-oa.screenY):Dc=$c=0,oa=s),$c)},movementY:function(s){return"movementY"in s?s.movementY:Dc}}),Hp=at(Vo),zb=me({},Vo,{dataTransfer:0}),Ub=at(zb),Pb=me({},aa,{relatedTarget:0}),Oc=at(Pb),Hb=me({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Vb=at(Hb),qb=me({},pr,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),Fb=at(qb),Xb=me({},pr,{data:0}),Vp=at(Xb),Gb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ib={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zb(s){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(s):(s=Yb[s])?!!r[s]:!1}function Bc(){return Zb}var Kb=me({},aa,{key:function(s){if(s.key){var r=Gb[s.key]||s.key;if(r!=="Unidentified")return r}return s.type==="keypress"?(s=Uo(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?Ib[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bc,charCode:function(s){return s.type==="keypress"?Uo(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Uo(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),Wb=at(Kb),Qb=me({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qp=at(Qb),Jb=me({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bc}),e2=at(Jb),n2=me({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),t2=at(n2),s2=me({},Vo,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),r2=at(s2),i2=me({},pr,{newState:0,oldState:0}),a2=at(i2),o2=[9,13,27,32],zc=Lt&&"CompositionEvent"in window,la=null;Lt&&"documentMode"in document&&(la=document.documentMode);var l2=Lt&&"TextEvent"in window&&!la,Fp=Lt&&(!zc||la&&8<la&&11>=la),Xp=" ",Gp=!1;function Ip(s,r){switch(s){case"keyup":return o2.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var ti=!1;function c2(s,r){switch(s){case"compositionend":return Yp(r);case"keypress":return r.which!==32?null:(Gp=!0,Xp);case"textInput":return s=r.data,s===Xp&&Gp?null:s;default:return null}}function u2(s,r){if(ti)return s==="compositionend"||!zc&&Ip(s,r)?(s=Up(),zo=Ec=Ls=null,ti=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Fp&&r.locale!=="ko"?null:r.data;default:return null}}var d2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(s){var r=s&&s.nodeName&&s.nodeName.toLowerCase();return r==="input"?!!d2[s.type]:r==="textarea"}function Kp(s,r,a,l){wn?Tt?Tt.push(l):Tt=[l]:wn=l,r=_l(r,"onChange"),0<r.length&&(a=new Ho("onChange","change",null,a,l),s.push({event:a,listeners:r}))}var ca=null,ua=null;function m2(s){Nx(s,0)}function qo(s){var r=et(s);if(Oo(r))return s}function Wp(s,r){if(s==="change")return r}var Qp=!1;if(Lt){var Uc;if(Lt){var Pc="oninput"in document;if(!Pc){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),Pc=typeof Jp.oninput=="function"}Uc=Pc}else Uc=!1;Qp=Uc&&(!document.documentMode||9<document.documentMode)}function eh(){ca&&(ca.detachEvent("onpropertychange",nh),ua=ca=null)}function nh(s){if(s.propertyName==="value"&&qo(ua)){var r=[];Kp(r,ua,s,Ge(s)),zp(m2,r)}}function p2(s,r,a){s==="focusin"?(eh(),ca=r,ua=a,ca.attachEvent("onpropertychange",nh)):s==="focusout"&&eh()}function h2(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return qo(ua)}function f2(s,r){if(s==="click")return qo(r)}function x2(s,r){if(s==="input"||s==="change")return qo(r)}function g2(s,r){return s===r&&(s!==0||1/s===1/r)||s!==s&&r!==r}var ct=typeof Object.is=="function"?Object.is:g2;function da(s,r){if(ct(s,r))return!0;if(typeof s!="object"||s===null||typeof r!="object"||r===null)return!1;var a=Object.keys(s),l=Object.keys(r);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!Yi.call(r,u)||!ct(s[u],r[u]))return!1}return!0}function th(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function sh(s,r){var a=th(s);s=0;for(var l;a;){if(a.nodeType===3){if(l=s+a.textContent.length,s<=r&&l>=r)return{node:a,offset:r-s};s=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=th(a)}}function rh(s,r){return s&&r?s===r?!0:s&&s.nodeType===3?!1:r&&r.nodeType===3?rh(s,r.parentNode):"contains"in s?s.contains(r):s.compareDocumentPosition?!!(s.compareDocumentPosition(r)&16):!1:!1}function ih(s){s=s!=null&&s.ownerDocument!=null&&s.ownerDocument.defaultView!=null?s.ownerDocument.defaultView:window;for(var r=ei(s.document);r instanceof s.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)s=r.contentWindow;else break;r=ei(s.document)}return r}function Hc(s){var r=s&&s.nodeName&&s.nodeName.toLowerCase();return r&&(r==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||r==="textarea"||s.contentEditable==="true")}function v2(s,r){var a=ih(r);r=s.focusedElem;var l=s.selectionRange;if(a!==r&&r&&r.ownerDocument&&rh(r.ownerDocument.documentElement,r)){if(l!==null&&Hc(r)){if(s=l.start,a=l.end,a===void 0&&(a=s),"selectionStart"in r)r.selectionStart=s,r.selectionEnd=Math.min(a,r.value.length);else if(a=(s=r.ownerDocument||document)&&s.defaultView||window,a.getSelection){a=a.getSelection();var u=r.textContent.length,p=Math.min(l.start,u);l=l.end===void 0?p:Math.min(l.end,u),!a.extend&&p>l&&(u=l,l=p,p=u),u=sh(r,p);var g=sh(r,l);u&&g&&(a.rangeCount!==1||a.anchorNode!==u.node||a.anchorOffset!==u.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(s=s.createRange(),s.setStart(u.node,u.offset),a.removeAllRanges(),p>l?(a.addRange(s),a.extend(g.node,g.offset)):(s.setEnd(g.node,g.offset),a.addRange(s)))}}for(s=[],a=r;a=a.parentNode;)a.nodeType===1&&s.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<s.length;r++)a=s[r],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var j2=Lt&&"documentMode"in document&&11>=document.documentMode,si=null,Vc=null,ma=null,qc=!1;function ah(s,r,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qc||si==null||si!==ei(l)||(l=si,"selectionStart"in l&&Hc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ma&&da(ma,l)||(ma=l,l=_l(Vc,"onSelect"),0<l.length&&(r=new Ho("onSelect","select",null,r,a),s.push({event:r,listeners:l}),r.target=si)))}function hr(s,r){var a={};return a[s.toLowerCase()]=r.toLowerCase(),a["Webkit"+s]="webkit"+r,a["Moz"+s]="moz"+r,a}var ri={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},Fc={},oh={};Lt&&(oh=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function fr(s){if(Fc[s])return Fc[s];if(!ri[s])return s;var r=ri[s],a;for(a in r)if(r.hasOwnProperty(a)&&a in oh)return Fc[s]=r[a];return s}var lh=fr("animationend"),ch=fr("animationiteration"),uh=fr("animationstart"),y2=fr("transitionrun"),b2=fr("transitionstart"),S2=fr("transitioncancel"),dh=fr("transitionend"),mh=new Map,ph="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Et(s,r){mh.set(s,r),gt(r,[s])}var jt=[],ii=0,Xc=0;function Fo(){for(var s=ii,r=Xc=ii=0;r<s;){var a=jt[r];jt[r++]=null;var l=jt[r];jt[r++]=null;var u=jt[r];jt[r++]=null;var p=jt[r];if(jt[r++]=null,l!==null&&u!==null){var g=l.pending;g===null?u.next=u:(u.next=g.next,g.next=u),l.pending=u}p!==0&&hh(a,u,p)}}function Xo(s,r,a,l){jt[ii++]=s,jt[ii++]=r,jt[ii++]=a,jt[ii++]=l,Xc|=l,s.lanes|=l,s=s.alternate,s!==null&&(s.lanes|=l)}function Gc(s,r,a,l){return Xo(s,r,a,l),Go(s)}function Ts(s,r){return Xo(s,null,null,r),Go(s)}function hh(s,r,a){s.lanes|=a;var l=s.alternate;l!==null&&(l.lanes|=a);for(var u=!1,p=s.return;p!==null;)p.childLanes|=a,l=p.alternate,l!==null&&(l.childLanes|=a),p.tag===22&&(s=p.stateNode,s===null||s._visibility&1||(u=!0)),s=p,p=p.return;u&&r!==null&&s.tag===3&&(p=s.stateNode,u=31-Jn(a),p=p.hiddenUpdates,s=p[u],s===null?p[u]=[r]:s.push(r),r.lane=a|536870912)}function Go(s){if(50<Ba)throw Ba=0,Qu=null,Error(o(185));for(var r=s.return;r!==null;)s=r,r=s.return;return s.tag===3?s.stateNode:null}var ai={},fh=new WeakMap;function yt(s,r){if(typeof s=="object"&&s!==null){var a=fh.get(s);return a!==void 0?a:(r={value:s,source:r,stack:J(r)},fh.set(s,r),r)}return{value:s,source:r,stack:J(r)}}var oi=[],li=0,Io=null,Yo=0,bt=[],St=0,xr=null,cs=1,us="";function gr(s,r){oi[li++]=Yo,oi[li++]=Io,Io=s,Yo=r}function xh(s,r,a){bt[St++]=cs,bt[St++]=us,bt[St++]=xr,xr=s;var l=cs;s=us;var u=32-Jn(l)-1;l&=~(1<<u),a+=1;var p=32-Jn(r)+u;if(30<p){var g=u-u%5;p=(l&(1<<g)-1).toString(32),l>>=g,u-=g,cs=1<<32-Jn(r)+u|a<<u|l,us=p+s}else cs=1<<p|a<<u|l,us=s}function Ic(s){s.return!==null&&(gr(s,1),xh(s,1,0))}function Yc(s){for(;s===Io;)Io=oi[--li],oi[li]=null,Yo=oi[--li],oi[li]=null;for(;s===xr;)xr=bt[--St],bt[St]=null,us=bt[--St],bt[St]=null,cs=bt[--St],bt[St]=null}var nt=null,qn=null,Ie=!1,$t=null,Gt=!1,Zc=Error(o(519));function vr(s){var r=Error(o(418,""));throw fa(yt(r,s)),Zc}function gh(s){var r=s.stateNode,a=s.type,l=s.memoizedProps;switch(r[Sn]=s,r[In]=l,a){case"dialog":He("cancel",r),He("close",r);break;case"iframe":case"object":case"embed":He("load",r);break;case"video":case"audio":for(a=0;a<Ua.length;a++)He(Ua[a],r);break;case"source":He("error",r);break;case"img":case"image":case"link":He("error",r),He("load",r);break;case"details":He("toggle",r);break;case"input":He("invalid",r),os(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Jr(r);break;case"select":He("invalid",r);break;case"textarea":He("invalid",r),ta(r,l.value,l.defaultValue,l.children),Jr(r)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||r.textContent===""+a||l.suppressHydrationWarning===!0||kx(r.textContent,a)?(l.popover!=null&&(He("beforetoggle",r),He("toggle",r)),l.onScroll!=null&&He("scroll",r),l.onScrollEnd!=null&&He("scrollend",r),l.onClick!=null&&(r.onclick=Cl),r=!0):r=!1,r||vr(s)}function vh(s){for(nt=s.return;nt;)switch(nt.tag){case 3:case 27:Gt=!0;return;case 5:case 13:Gt=!1;return;default:nt=nt.return}}function pa(s){if(s!==nt)return!1;if(!Ie)return vh(s),Ie=!0,!1;var r=!1,a;if((a=s.tag!==3&&s.tag!==27)&&((a=s.tag===5)&&(a=s.type,a=!(a!=="form"&&a!=="button")||fd(s.type,s.memoizedProps)),a=!a),a&&(r=!0),r&&qn&&vr(s),vh(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));e:{for(s=s.nextSibling,r=0;s;){if(s.nodeType===8)if(a=s.data,a==="/$"){if(r===0){qn=Ot(s.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++;s=s.nextSibling}qn=null}}else qn=nt?Ot(s.stateNode.nextSibling):null;return!0}function ha(){qn=nt=null,Ie=!1}function fa(s){$t===null?$t=[s]:$t.push(s)}var xa=Error(o(460)),jh=Error(o(474)),Kc={then:function(){}};function yh(s){return s=s.status,s==="fulfilled"||s==="rejected"}function Zo(){}function bh(s,r,a){switch(a=s[a],a===void 0?s.push(r):a!==r&&(r.then(Zo,Zo),r=a),r.status){case"fulfilled":return r.value;case"rejected":throw s=r.reason,s===xa?Error(o(483)):s;default:if(typeof r.status=="string")r.then(Zo,Zo);else{if(s=an,s!==null&&100<s.shellSuspendCounter)throw Error(o(482));s=r,s.status="pending",s.then(function(l){if(r.status==="pending"){var u=r;u.status="fulfilled",u.value=l}},function(l){if(r.status==="pending"){var u=r;u.status="rejected",u.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw s=r.reason,s===xa?Error(o(483)):s}throw ga=r,xa}}var ga=null;function Sh(){if(ga===null)throw Error(o(459));var s=ga;return ga=null,s}var ci=null,va=0;function Ko(s){var r=va;return va+=1,ci===null&&(ci=[]),bh(ci,s,r)}function ja(s,r){r=r.props.ref,s.ref=r!==void 0?r:null}function Wo(s,r){throw r.$$typeof===m?Error(o(525)):(s=Object.prototype.toString.call(r),Error(o(31,s==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":s)))}function Nh(s){var r=s._init;return r(s._payload)}function wh(s){function r(R,C){if(s){var $=R.deletions;$===null?(R.deletions=[C],R.flags|=16):$.push(C)}}function a(R,C){if(!s)return null;for(;C!==null;)r(R,C),C=C.sibling;return null}function l(R){for(var C=new Map;R!==null;)R.key!==null?C.set(R.key,R):C.set(R.index,R),R=R.sibling;return C}function u(R,C){return R=Fs(R,C),R.index=0,R.sibling=null,R}function p(R,C,$){return R.index=$,s?($=R.alternate,$!==null?($=$.index,$<C?(R.flags|=33554434,C):$):(R.flags|=33554434,C)):(R.flags|=1048576,C)}function g(R){return s&&R.alternate===null&&(R.flags|=33554434),R}function b(R,C,$,V){return C===null||C.tag!==6?(C=Fu($,R.mode,V),C.return=R,C):(C=u(C,$),C.return=R,C)}function N(R,C,$,V){var se=$.type;return se===f?P(R,C,$.props.children,V,$.key):C!==null&&(C.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===O&&Nh(se)===C.type)?(C=u(C,$.props),ja(C,$),C.return=R,C):(C=fl($.type,$.key,$.props,null,R.mode,V),ja(C,$),C.return=R,C)}function M(R,C,$,V){return C===null||C.tag!==4||C.stateNode.containerInfo!==$.containerInfo||C.stateNode.implementation!==$.implementation?(C=Xu($,R.mode,V),C.return=R,C):(C=u(C,$.children||[]),C.return=R,C)}function P(R,C,$,V,se){return C===null||C.tag!==7?(C=Mr($,R.mode,V,se),C.return=R,C):(C=u(C,$),C.return=R,C)}function X(R,C,$){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return C=Fu(""+C,R.mode,$),C.return=R,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case d:return $=fl(C.type,C.key,C.props,null,R.mode,$),ja($,C),$.return=R,$;case h:return C=Xu(C,R.mode,$),C.return=R,C;case O:var V=C._init;return C=V(C._payload),X(R,C,$)}if(pe(C)||Y(C))return C=Mr(C,R.mode,$,null),C.return=R,C;if(typeof C.then=="function")return X(R,Ko(C),$);if(C.$$typeof===_)return X(R,ml(R,C),$);Wo(R,C)}return null}function D(R,C,$,V){var se=C!==null?C.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return se!==null?null:b(R,C,""+$,V);if(typeof $=="object"&&$!==null){switch($.$$typeof){case d:return $.key===se?N(R,C,$,V):null;case h:return $.key===se?M(R,C,$,V):null;case O:return se=$._init,$=se($._payload),D(R,C,$,V)}if(pe($)||Y($))return se!==null?null:P(R,C,$,V,null);if(typeof $.then=="function")return D(R,C,Ko($),V);if($.$$typeof===_)return D(R,C,ml(R,$),V);Wo(R,$)}return null}function U(R,C,$,V,se){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return R=R.get($)||null,b(C,R,""+V,se);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case d:return R=R.get(V.key===null?$:V.key)||null,N(C,R,V,se);case h:return R=R.get(V.key===null?$:V.key)||null,M(C,R,V,se);case O:var Oe=V._init;return V=Oe(V._payload),U(R,C,$,V,se)}if(pe(V)||Y(V))return R=R.get($)||null,P(C,R,V,se,null);if(typeof V.then=="function")return U(R,C,$,Ko(V),se);if(V.$$typeof===_)return U(R,C,$,ml(C,V),se);Wo(C,V)}return null}function ce(R,C,$,V){for(var se=null,Oe=null,fe=C,je=C=0,Pn=null;fe!==null&&je<$.length;je++){fe.index>je?(Pn=fe,fe=null):Pn=fe.sibling;var Ye=D(R,fe,$[je],V);if(Ye===null){fe===null&&(fe=Pn);break}s&&fe&&Ye.alternate===null&&r(R,fe),C=p(Ye,C,je),Oe===null?se=Ye:Oe.sibling=Ye,Oe=Ye,fe=Pn}if(je===$.length)return a(R,fe),Ie&&gr(R,je),se;if(fe===null){for(;je<$.length;je++)fe=X(R,$[je],V),fe!==null&&(C=p(fe,C,je),Oe===null?se=fe:Oe.sibling=fe,Oe=fe);return Ie&&gr(R,je),se}for(fe=l(fe);je<$.length;je++)Pn=U(fe,R,je,$[je],V),Pn!==null&&(s&&Pn.alternate!==null&&fe.delete(Pn.key===null?je:Pn.key),C=p(Pn,C,je),Oe===null?se=Pn:Oe.sibling=Pn,Oe=Pn);return s&&fe.forEach(function(Ws){return r(R,Ws)}),Ie&&gr(R,je),se}function _e(R,C,$,V){if($==null)throw Error(o(151));for(var se=null,Oe=null,fe=C,je=C=0,Pn=null,Ye=$.next();fe!==null&&!Ye.done;je++,Ye=$.next()){fe.index>je?(Pn=fe,fe=null):Pn=fe.sibling;var Ws=D(R,fe,Ye.value,V);if(Ws===null){fe===null&&(fe=Pn);break}s&&fe&&Ws.alternate===null&&r(R,fe),C=p(Ws,C,je),Oe===null?se=Ws:Oe.sibling=Ws,Oe=Ws,fe=Pn}if(Ye.done)return a(R,fe),Ie&&gr(R,je),se;if(fe===null){for(;!Ye.done;je++,Ye=$.next())Ye=X(R,Ye.value,V),Ye!==null&&(C=p(Ye,C,je),Oe===null?se=Ye:Oe.sibling=Ye,Oe=Ye);return Ie&&gr(R,je),se}for(fe=l(fe);!Ye.done;je++,Ye=$.next())Ye=U(fe,R,je,Ye.value,V),Ye!==null&&(s&&Ye.alternate!==null&&fe.delete(Ye.key===null?je:Ye.key),C=p(Ye,C,je),Oe===null?se=Ye:Oe.sibling=Ye,Oe=Ye);return s&&fe.forEach(function(O4){return r(R,O4)}),Ie&&gr(R,je),se}function yn(R,C,$,V){if(typeof $=="object"&&$!==null&&$.type===f&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case d:e:{for(var se=$.key;C!==null;){if(C.key===se){if(se=$.type,se===f){if(C.tag===7){a(R,C.sibling),V=u(C,$.props.children),V.return=R,R=V;break e}}else if(C.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===O&&Nh(se)===C.type){a(R,C.sibling),V=u(C,$.props),ja(V,$),V.return=R,R=V;break e}a(R,C);break}else r(R,C);C=C.sibling}$.type===f?(V=Mr($.props.children,R.mode,V,$.key),V.return=R,R=V):(V=fl($.type,$.key,$.props,null,R.mode,V),ja(V,$),V.return=R,R=V)}return g(R);case h:e:{for(se=$.key;C!==null;){if(C.key===se)if(C.tag===4&&C.stateNode.containerInfo===$.containerInfo&&C.stateNode.implementation===$.implementation){a(R,C.sibling),V=u(C,$.children||[]),V.return=R,R=V;break e}else{a(R,C);break}else r(R,C);C=C.sibling}V=Xu($,R.mode,V),V.return=R,R=V}return g(R);case O:return se=$._init,$=se($._payload),yn(R,C,$,V)}if(pe($))return ce(R,C,$,V);if(Y($)){if(se=Y($),typeof se!="function")throw Error(o(150));return $=se.call($),_e(R,C,$,V)}if(typeof $.then=="function")return yn(R,C,Ko($),V);if($.$$typeof===_)return yn(R,C,ml(R,$),V);Wo(R,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,C!==null&&C.tag===6?(a(R,C.sibling),V=u(C,$),V.return=R,R=V):(a(R,C),V=Fu($,R.mode,V),V.return=R,R=V),g(R)):a(R,C)}return function(R,C,$,V){try{va=0;var se=yn(R,C,$,V);return ci=null,se}catch(fe){if(fe===xa)throw fe;var Oe=Ct(29,fe,null,R.mode);return Oe.lanes=V,Oe.return=R,Oe}finally{}}}var jr=wh(!0),_h=wh(!1),ui=Be(null),Qo=Be(0);function Ch(s,r){s=bs,sn(Qo,s),sn(ui,r),bs=s|r.baseLanes}function Wc(){sn(Qo,bs),sn(ui,ui.current)}function Qc(){bs=Qo.current,fn(ui),fn(Qo)}var Nt=Be(null),It=null;function Es(s){var r=s.alternate;sn(Dn,Dn.current&1),sn(Nt,s),It===null&&(r===null||ui.current!==null||r.memoizedState!==null)&&(It=s)}function kh(s){if(s.tag===22){if(sn(Dn,Dn.current),sn(Nt,s),It===null){var r=s.alternate;r!==null&&r.memoizedState!==null&&(It=s)}}else $s()}function $s(){sn(Dn,Dn.current),sn(Nt,Nt.current)}function ds(s){fn(Nt),It===s&&(It=null),fn(Dn)}var Dn=Be(0);function Jo(s){for(var r=s;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break;for(;r.sibling===null;){if(r.return===null||r.return===s)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var N2=typeof AbortController<"u"?AbortController:function(){var s=[],r=this.signal={aborted:!1,addEventListener:function(a,l){s.push(l)}};this.abort=function(){r.aborted=!0,s.forEach(function(a){return a()})}},w2=t.unstable_scheduleCallback,_2=t.unstable_NormalPriority,On={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jc(){return{controller:new N2,data:new Map,refCount:0}}function ya(s){s.refCount--,s.refCount===0&&w2(_2,function(){s.controller.abort()})}var ba=null,eu=0,di=0,mi=null;function C2(s,r){if(ba===null){var a=ba=[];eu=0,di=ad(),mi={status:"pending",value:void 0,then:function(l){a.push(l)}}}return eu++,r.then(Mh,Mh),r}function Mh(){if(--eu===0&&ba!==null){mi!==null&&(mi.status="fulfilled");var s=ba;ba=null,di=0,mi=null;for(var r=0;r<s.length;r++)(0,s[r])()}}function k2(s,r){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return s.then(function(){l.status="fulfilled",l.value=r;for(var u=0;u<a.length;u++)(0,a[u])(r)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var Ah=Z.S;Z.S=function(s,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&C2(s,r),Ah!==null&&Ah(s,r)};var yr=Be(null);function nu(){var s=yr.current;return s!==null?s:an.pooledCache}function el(s,r){r===null?sn(yr,yr.current):sn(yr,r.pool)}function Rh(){var s=nu();return s===null?null:{parent:On._currentValue,pool:s}}var Ds=0,$e=null,Je=null,Ln=null,nl=!1,pi=!1,br=!1,tl=0,Sa=0,hi=null,M2=0;function _n(){throw Error(o(321))}function tu(s,r){if(r===null)return!1;for(var a=0;a<r.length&&a<s.length;a++)if(!ct(s[a],r[a]))return!1;return!0}function su(s,r,a,l,u,p){return Ds=p,$e=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Z.H=s===null||s.memoizedState===null?Sr:Os,br=!1,p=a(l,u),br=!1,pi&&(p=Th(r,a,l,u)),Lh(s),p}function Lh(s){Z.H=Yt;var r=Je!==null&&Je.next!==null;if(Ds=0,Ln=Je=$e=null,nl=!1,Sa=0,hi=null,r)throw Error(o(300));s===null||zn||(s=s.dependencies,s!==null&&dl(s)&&(zn=!0))}function Th(s,r,a,l){$e=s;var u=0;do{if(pi&&(hi=null),Sa=0,pi=!1,25<=u)throw Error(o(301));if(u+=1,Ln=Je=null,s.updateQueue!=null){var p=s.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}Z.H=Nr,p=r(a,l)}while(pi);return p}function A2(){var s=Z.H,r=s.useState()[0];return r=typeof r.then=="function"?Na(r):r,s=s.useState()[0],(Je!==null?Je.memoizedState:null)!==s&&($e.flags|=1024),r}function ru(){var s=tl!==0;return tl=0,s}function iu(s,r,a){r.updateQueue=s.updateQueue,r.flags&=-2053,s.lanes&=~a}function au(s){if(nl){for(s=s.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}nl=!1}Ds=0,Ln=Je=$e=null,pi=!1,Sa=tl=0,hi=null}function ot(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ln===null?$e.memoizedState=Ln=s:Ln=Ln.next=s,Ln}function Tn(){if(Je===null){var s=$e.alternate;s=s!==null?s.memoizedState:null}else s=Je.next;var r=Ln===null?$e.memoizedState:Ln.next;if(r!==null)Ln=r,Je=s;else{if(s===null)throw $e.alternate===null?Error(o(467)):Error(o(310));Je=s,s={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},Ln===null?$e.memoizedState=Ln=s:Ln=Ln.next=s}return Ln}var sl;sl=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Na(s){var r=Sa;return Sa+=1,hi===null&&(hi=[]),s=bh(hi,s,r),r=$e,(Ln===null?r.memoizedState:Ln.next)===null&&(r=r.alternate,Z.H=r===null||r.memoizedState===null?Sr:Os),s}function rl(s){if(s!==null&&typeof s=="object"){if(typeof s.then=="function")return Na(s);if(s.$$typeof===_)return Yn(s)}throw Error(o(438,String(s)))}function ou(s){var r=null,a=$e.updateQueue;if(a!==null&&(r=a.memoCache),r==null){var l=$e.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(u){return u.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),a===null&&(a=sl(),$e.updateQueue=a),a.memoCache=r,a=r.data[r.index],a===void 0)for(a=r.data[r.index]=Array(s),l=0;l<s;l++)a[l]=F;return r.index++,a}function ms(s,r){return typeof r=="function"?r(s):r}function il(s){var r=Tn();return lu(r,Je,s)}function lu(s,r,a){var l=s.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var u=s.baseQueue,p=l.pending;if(p!==null){if(u!==null){var g=u.next;u.next=p.next,p.next=g}r.baseQueue=u=p,l.pending=null}if(p=s.baseState,u===null)s.memoizedState=p;else{r=u.next;var b=g=null,N=null,M=r,P=!1;do{var X=M.lane&-536870913;if(X!==M.lane?(Ve&X)===X:(Ds&X)===X){var D=M.revertLane;if(D===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),X===di&&(P=!0);else if((Ds&D)===D){M=M.next,D===di&&(P=!0);continue}else X={lane:0,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},N===null?(b=N=X,g=p):N=N.next=X,$e.lanes|=D,Xs|=D;X=M.action,br&&a(p,X),p=M.hasEagerState?M.eagerState:a(p,X)}else D={lane:X,revertLane:M.revertLane,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},N===null?(b=N=D,g=p):N=N.next=D,$e.lanes|=X,Xs|=X;M=M.next}while(M!==null&&M!==r);if(N===null?g=p:N.next=b,!ct(p,s.memoizedState)&&(zn=!0,P&&(a=mi,a!==null)))throw a;s.memoizedState=p,s.baseState=g,s.baseQueue=N,l.lastRenderedState=p}return u===null&&(l.lanes=0),[s.memoizedState,l.dispatch]}function cu(s){var r=Tn(),a=r.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=s;var l=a.dispatch,u=a.pending,p=r.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do p=s(p,g.action),g=g.next;while(g!==u);ct(p,r.memoizedState)||(zn=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),a.lastRenderedState=p}return[p,l]}function Eh(s,r,a){var l=$e,u=Tn(),p=Ie;if(p){if(a===void 0)throw Error(o(407));a=a()}else a=r();var g=!ct((Je||u).memoizedState,a);if(g&&(u.memoizedState=a,zn=!0),u=u.queue,mu(Oh.bind(null,l,u,s),[s]),u.getSnapshot!==r||g||Ln!==null&&Ln.memoizedState.tag&1){if(l.flags|=2048,fi(9,Dh.bind(null,l,u,a,r),{destroy:void 0},null),an===null)throw Error(o(349));p||Ds&60||$h(l,r,a)}return a}function $h(s,r,a){s.flags|=16384,s={getSnapshot:r,value:a},r=$e.updateQueue,r===null?(r=sl(),$e.updateQueue=r,r.stores=[s]):(a=r.stores,a===null?r.stores=[s]:a.push(s))}function Dh(s,r,a,l){r.value=a,r.getSnapshot=l,Bh(r)&&zh(s)}function Oh(s,r,a){return a(function(){Bh(r)&&zh(s)})}function Bh(s){var r=s.getSnapshot;s=s.value;try{var a=r();return!ct(s,a)}catch{return!0}}function zh(s){var r=Ts(s,2);r!==null&&tt(r,s,2)}function uu(s){var r=ot();if(typeof s=="function"){var a=s;if(s=a(),br){rs(!0);try{a()}finally{rs(!1)}}}return r.memoizedState=r.baseState=s,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:s},r}function Uh(s,r,a,l){return s.baseState=a,lu(s,Je,typeof l=="function"?l:ms)}function R2(s,r,a,l,u){if(ll(s))throw Error(o(485));if(s=r.action,s!==null){var p={payload:u,action:s,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){p.listeners.push(g)}};Z.T!==null?a(!0):p.isTransition=!1,l(p),a=r.pending,a===null?(p.next=r.pending=p,Ph(r,p)):(p.next=a.next,r.pending=a.next=p)}}function Ph(s,r){var a=r.action,l=r.payload,u=s.state;if(r.isTransition){var p=Z.T,g={};Z.T=g;try{var b=a(u,l),N=Z.S;N!==null&&N(g,b),Hh(s,r,b)}catch(M){du(s,r,M)}finally{Z.T=p}}else try{p=a(u,l),Hh(s,r,p)}catch(M){du(s,r,M)}}function Hh(s,r,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Vh(s,r,l)},function(l){return du(s,r,l)}):Vh(s,r,a)}function Vh(s,r,a){r.status="fulfilled",r.value=a,qh(r),s.state=a,r=s.pending,r!==null&&(a=r.next,a===r?s.pending=null:(a=a.next,r.next=a,Ph(s,a)))}function du(s,r,a){var l=s.pending;if(s.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=a,qh(r),r=r.next;while(r!==l)}s.action=null}function qh(s){s=s.listeners;for(var r=0;r<s.length;r++)(0,s[r])()}function Fh(s,r){return r}function Xh(s,r){if(Ie){var a=an.formState;if(a!==null){e:{var l=$e;if(Ie){if(qn){n:{for(var u=qn,p=Gt;u.nodeType!==8;){if(!p){u=null;break n}if(u=Ot(u.nextSibling),u===null){u=null;break n}}p=u.data,u=p==="F!"||p==="F"?u:null}if(u){qn=Ot(u.nextSibling),l=u.data==="F!";break e}}vr(l)}l=!1}l&&(r=a[0])}}return a=ot(),a.memoizedState=a.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fh,lastRenderedState:r},a.queue=l,a=uf.bind(null,$e,l),l.dispatch=a,l=uu(!1),p=gu.bind(null,$e,!1,l.queue),l=ot(),u={state:r,dispatch:null,action:s,pending:null},l.queue=u,a=R2.bind(null,$e,u,p,a),u.dispatch=a,l.memoizedState=s,[r,a,!1]}function Gh(s){var r=Tn();return Ih(r,Je,s)}function Ih(s,r,a){r=lu(s,r,Fh)[0],s=il(ms)[0],r=typeof r=="object"&&r!==null&&typeof r.then=="function"?Na(r):r;var l=Tn(),u=l.queue,p=u.dispatch;return a!==l.memoizedState&&($e.flags|=2048,fi(9,L2.bind(null,u,a),{destroy:void 0},null)),[r,p,s]}function L2(s,r){s.action=r}function Yh(s){var r=Tn(),a=Je;if(a!==null)return Ih(r,a,s);Tn(),r=r.memoizedState,a=Tn();var l=a.queue.dispatch;return a.memoizedState=s,[r,l,!1]}function fi(s,r,a,l){return s={tag:s,create:r,inst:a,deps:l,next:null},r=$e.updateQueue,r===null&&(r=sl(),$e.updateQueue=r),a=r.lastEffect,a===null?r.lastEffect=s.next=s:(l=a.next,a.next=s,s.next=l,r.lastEffect=s),s}function Zh(){return Tn().memoizedState}function al(s,r,a,l){var u=ot();$e.flags|=s,u.memoizedState=fi(1|r,a,{destroy:void 0},l===void 0?null:l)}function ol(s,r,a,l){var u=Tn();l=l===void 0?null:l;var p=u.memoizedState.inst;Je!==null&&l!==null&&tu(l,Je.memoizedState.deps)?u.memoizedState=fi(r,a,p,l):($e.flags|=s,u.memoizedState=fi(1|r,a,p,l))}function Kh(s,r){al(8390656,8,s,r)}function mu(s,r){ol(2048,8,s,r)}function Wh(s,r){return ol(4,2,s,r)}function Qh(s,r){return ol(4,4,s,r)}function Jh(s,r){if(typeof r=="function"){s=s();var a=r(s);return function(){typeof a=="function"?a():r(null)}}if(r!=null)return s=s(),r.current=s,function(){r.current=null}}function ef(s,r,a){a=a!=null?a.concat([s]):null,ol(4,4,Jh.bind(null,r,s),a)}function pu(){}function nf(s,r){var a=Tn();r=r===void 0?null:r;var l=a.memoizedState;return r!==null&&tu(r,l[1])?l[0]:(a.memoizedState=[s,r],s)}function tf(s,r){var a=Tn();r=r===void 0?null:r;var l=a.memoizedState;if(r!==null&&tu(r,l[1]))return l[0];if(l=s(),br){rs(!0);try{s()}finally{rs(!1)}}return a.memoizedState=[l,r],l}function hu(s,r,a){return a===void 0||Ds&1073741824?s.memoizedState=r:(s.memoizedState=a,s=ix(),$e.lanes|=s,Xs|=s,a)}function sf(s,r,a,l){return ct(a,r)?a:ui.current!==null?(s=hu(s,a,l),ct(s,r)||(zn=!0),s):Ds&42?(s=ix(),$e.lanes|=s,Xs|=s,r):(zn=!0,s.memoizedState=a)}function rf(s,r,a,l,u){var p=ne.p;ne.p=p!==0&&8>p?p:8;var g=Z.T,b={};Z.T=b,gu(s,!1,r,a);try{var N=u(),M=Z.S;if(M!==null&&M(b,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var P=k2(N,l);wa(s,r,P,pt(s))}else wa(s,r,l,pt(s))}catch(X){wa(s,r,{then:function(){},status:"rejected",reason:X},pt())}finally{ne.p=p,Z.T=g}}function T2(){}function fu(s,r,a,l){if(s.tag!==5)throw Error(o(476));var u=af(s).queue;rf(s,u,r,Te,a===null?T2:function(){return of(s),a(l)})}function af(s){var r=s.memoizedState;if(r!==null)return r;r={memoizedState:Te,baseState:Te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:Te},next:null};var a={};return r.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:a},next:null},s.memoizedState=r,s=s.alternate,s!==null&&(s.memoizedState=r),r}function of(s){var r=af(s).next.queue;wa(s,r,{},pt())}function xu(){return Yn(Fa)}function lf(){return Tn().memoizedState}function cf(){return Tn().memoizedState}function E2(s){for(var r=s.return;r!==null;){switch(r.tag){case 24:case 3:var a=pt();s=Us(a);var l=Ps(r,s,a);l!==null&&(tt(l,r,a),ka(l,r,a)),r={cache:Jc()},s.payload=r;return}r=r.return}}function $2(s,r,a){var l=pt();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ll(s)?df(r,a):(a=Gc(s,r,a,l),a!==null&&(tt(a,s,l),mf(a,r,l)))}function uf(s,r,a){var l=pt();wa(s,r,a,l)}function wa(s,r,a,l){var u={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ll(s))df(r,u);else{var p=s.alternate;if(s.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var g=r.lastRenderedState,b=p(g,a);if(u.hasEagerState=!0,u.eagerState=b,ct(b,g))return Xo(s,r,u,0),an===null&&Fo(),!1}catch{}finally{}if(a=Gc(s,r,u,l),a!==null)return tt(a,s,l),mf(a,r,l),!0}return!1}function gu(s,r,a,l){if(l={lane:2,revertLane:ad(),action:l,hasEagerState:!1,eagerState:null,next:null},ll(s)){if(r)throw Error(o(479))}else r=Gc(s,a,l,2),r!==null&&tt(r,s,2)}function ll(s){var r=s.alternate;return s===$e||r!==null&&r===$e}function df(s,r){pi=nl=!0;var a=s.pending;a===null?r.next=r:(r.next=a.next,a.next=r),s.pending=r}function mf(s,r,a){if(a&4194176){var l=r.lanes;l&=s.pendingLanes,a|=l,r.lanes=a,Ao(s,a)}}var Yt={readContext:Yn,use:rl,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n};Yt.useCacheRefresh=_n,Yt.useMemoCache=_n,Yt.useHostTransitionStatus=_n,Yt.useFormState=_n,Yt.useActionState=_n,Yt.useOptimistic=_n;var Sr={readContext:Yn,use:rl,useCallback:function(s,r){return ot().memoizedState=[s,r===void 0?null:r],s},useContext:Yn,useEffect:Kh,useImperativeHandle:function(s,r,a){a=a!=null?a.concat([s]):null,al(4194308,4,Jh.bind(null,r,s),a)},useLayoutEffect:function(s,r){return al(4194308,4,s,r)},useInsertionEffect:function(s,r){al(4,2,s,r)},useMemo:function(s,r){var a=ot();r=r===void 0?null:r;var l=s();if(br){rs(!0);try{s()}finally{rs(!1)}}return a.memoizedState=[l,r],l},useReducer:function(s,r,a){var l=ot();if(a!==void 0){var u=a(r);if(br){rs(!0);try{a(r)}finally{rs(!1)}}}else u=r;return l.memoizedState=l.baseState=u,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:u},l.queue=s,s=s.dispatch=$2.bind(null,$e,s),[l.memoizedState,s]},useRef:function(s){var r=ot();return s={current:s},r.memoizedState=s},useState:function(s){s=uu(s);var r=s.queue,a=uf.bind(null,$e,r);return r.dispatch=a,[s.memoizedState,a]},useDebugValue:pu,useDeferredValue:function(s,r){var a=ot();return hu(a,s,r)},useTransition:function(){var s=uu(!1);return s=rf.bind(null,$e,s.queue,!0,!1),ot().memoizedState=s,[!1,s]},useSyncExternalStore:function(s,r,a){var l=$e,u=ot();if(Ie){if(a===void 0)throw Error(o(407));a=a()}else{if(a=r(),an===null)throw Error(o(349));Ve&60||$h(l,r,a)}u.memoizedState=a;var p={value:a,getSnapshot:r};return u.queue=p,Kh(Oh.bind(null,l,p,s),[s]),l.flags|=2048,fi(9,Dh.bind(null,l,p,a,r),{destroy:void 0},null),a},useId:function(){var s=ot(),r=an.identifierPrefix;if(Ie){var a=us,l=cs;a=(l&~(1<<32-Jn(l)-1)).toString(32)+a,r=":"+r+"R"+a,a=tl++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=M2++,r=":"+r+"r"+a.toString(32)+":";return s.memoizedState=r},useCacheRefresh:function(){return ot().memoizedState=E2.bind(null,$e)}};Sr.useMemoCache=ou,Sr.useHostTransitionStatus=xu,Sr.useFormState=Xh,Sr.useActionState=Xh,Sr.useOptimistic=function(s){var r=ot();r.memoizedState=r.baseState=s;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=a,r=gu.bind(null,$e,!0,a),a.dispatch=r,[s,r]};var Os={readContext:Yn,use:rl,useCallback:nf,useContext:Yn,useEffect:mu,useImperativeHandle:ef,useInsertionEffect:Wh,useLayoutEffect:Qh,useMemo:tf,useReducer:il,useRef:Zh,useState:function(){return il(ms)},useDebugValue:pu,useDeferredValue:function(s,r){var a=Tn();return sf(a,Je.memoizedState,s,r)},useTransition:function(){var s=il(ms)[0],r=Tn().memoizedState;return[typeof s=="boolean"?s:Na(s),r]},useSyncExternalStore:Eh,useId:lf};Os.useCacheRefresh=cf,Os.useMemoCache=ou,Os.useHostTransitionStatus=xu,Os.useFormState=Gh,Os.useActionState=Gh,Os.useOptimistic=function(s,r){var a=Tn();return Uh(a,Je,s,r)};var Nr={readContext:Yn,use:rl,useCallback:nf,useContext:Yn,useEffect:mu,useImperativeHandle:ef,useInsertionEffect:Wh,useLayoutEffect:Qh,useMemo:tf,useReducer:cu,useRef:Zh,useState:function(){return cu(ms)},useDebugValue:pu,useDeferredValue:function(s,r){var a=Tn();return Je===null?hu(a,s,r):sf(a,Je.memoizedState,s,r)},useTransition:function(){var s=cu(ms)[0],r=Tn().memoizedState;return[typeof s=="boolean"?s:Na(s),r]},useSyncExternalStore:Eh,useId:lf};Nr.useCacheRefresh=cf,Nr.useMemoCache=ou,Nr.useHostTransitionStatus=xu,Nr.useFormState=Yh,Nr.useActionState=Yh,Nr.useOptimistic=function(s,r){var a=Tn();return Je!==null?Uh(a,Je,s,r):(a.baseState=s,[s,a.queue.dispatch])};function vu(s,r,a,l){r=s.memoizedState,a=a(l,r),a=a==null?r:me({},r,a),s.memoizedState=a,s.lanes===0&&(s.updateQueue.baseState=a)}var ju={isMounted:function(s){return(s=s._reactInternals)?W(s)===s:!1},enqueueSetState:function(s,r,a){s=s._reactInternals;var l=pt(),u=Us(l);u.payload=r,a!=null&&(u.callback=a),r=Ps(s,u,l),r!==null&&(tt(r,s,l),ka(r,s,l))},enqueueReplaceState:function(s,r,a){s=s._reactInternals;var l=pt(),u=Us(l);u.tag=1,u.payload=r,a!=null&&(u.callback=a),r=Ps(s,u,l),r!==null&&(tt(r,s,l),ka(r,s,l))},enqueueForceUpdate:function(s,r){s=s._reactInternals;var a=pt(),l=Us(a);l.tag=2,r!=null&&(l.callback=r),r=Ps(s,l,a),r!==null&&(tt(r,s,a),ka(r,s,a))}};function pf(s,r,a,l,u,p,g){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(l,p,g):r.prototype&&r.prototype.isPureReactComponent?!da(a,l)||!da(u,p):!0}function hf(s,r,a,l){s=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,l),r.state!==s&&ju.enqueueReplaceState(r,r.state,null)}function wr(s,r){var a=r;if("ref"in r){a={};for(var l in r)l!=="ref"&&(a[l]=r[l])}if(s=s.defaultProps){a===r&&(a=me({},a));for(var u in s)a[u]===void 0&&(a[u]=s[u])}return a}var cl=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function ff(s){cl(s)}function xf(s){console.error(s)}function gf(s){cl(s)}function ul(s,r){try{var a=s.onUncaughtError;a(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function vf(s,r,a){try{var l=s.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yu(s,r,a){return a=Us(a),a.tag=3,a.payload={element:null},a.callback=function(){ul(s,r)},a}function jf(s){return s=Us(s),s.tag=3,s}function yf(s,r,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var p=l.value;s.payload=function(){return u(p)},s.callback=function(){vf(r,a,l)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(s.callback=function(){vf(r,a,l),typeof u!="function"&&(Gs===null?Gs=new Set([this]):Gs.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function D2(s,r,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=a.alternate,r!==null&&Ca(r,a,u,!0),a=Nt.current,a!==null){switch(a.tag){case 13:return It===null?nd():a.alternate===null&&jn===0&&(jn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===Kc?a.flags|=16384:(r=a.updateQueue,r===null?a.updateQueue=new Set([l]):r.add(l),sd(s,l,u)),!1;case 22:return a.flags|=65536,l===Kc?a.flags|=16384:(r=a.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=r):(a=r.retryQueue,a===null?r.retryQueue=new Set([l]):a.add(l)),sd(s,l,u)),!1}throw Error(o(435,a.tag))}return sd(s,l,u),nd(),!1}if(Ie)return r=Nt.current,r!==null?(!(r.flags&65536)&&(r.flags|=256),r.flags|=65536,r.lanes=u,l!==Zc&&(s=Error(o(422),{cause:l}),fa(yt(s,a)))):(l!==Zc&&(r=Error(o(423),{cause:l}),fa(yt(r,a))),s=s.current.alternate,s.flags|=65536,u&=-u,s.lanes|=u,l=yt(l,a),u=yu(s.stateNode,l,u),Du(s,u),jn!==4&&(jn=2)),!1;var p=Error(o(520),{cause:l});if(p=yt(p,a),Da===null?Da=[p]:Da.push(p),jn!==4&&(jn=2),r===null)return!0;l=yt(l,a),a=r;do{switch(a.tag){case 3:return a.flags|=65536,s=u&-u,a.lanes|=s,s=yu(a.stateNode,l,s),Du(a,s),!1;case 1:if(r=a.type,p=a.stateNode,(a.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Gs===null||!Gs.has(p))))return a.flags|=65536,u&=-u,a.lanes|=u,u=jf(u),yf(u,s,a,l),Du(a,u),!1}a=a.return}while(a!==null);return!1}var bf=Error(o(461)),zn=!1;function Fn(s,r,a,l){r.child=s===null?_h(r,null,a,l):jr(r,s.child,a,l)}function Sf(s,r,a,l,u){a=a.render;var p=r.ref;if("ref"in l){var g={};for(var b in l)b!=="ref"&&(g[b]=l[b])}else g=l;return Cr(r),l=su(s,r,a,g,p,u),b=ru(),s!==null&&!zn?(iu(s,r,u),ps(s,r,u)):(Ie&&b&&Ic(r),r.flags|=1,Fn(s,r,l,u),r.child)}function Nf(s,r,a,l,u){if(s===null){var p=a.type;return typeof p=="function"&&!qu(p)&&p.defaultProps===void 0&&a.compare===null?(r.tag=15,r.type=p,wf(s,r,p,l,u)):(s=fl(a.type,null,l,r,r.mode,u),s.ref=r.ref,s.return=r,r.child=s)}if(p=s.child,!Au(s,u)){var g=p.memoizedProps;if(a=a.compare,a=a!==null?a:da,a(g,l)&&s.ref===r.ref)return ps(s,r,u)}return r.flags|=1,s=Fs(p,l),s.ref=r.ref,s.return=r,r.child=s}function wf(s,r,a,l,u){if(s!==null){var p=s.memoizedProps;if(da(p,l)&&s.ref===r.ref)if(zn=!1,r.pendingProps=l=p,Au(s,u))s.flags&131072&&(zn=!0);else return r.lanes=s.lanes,ps(s,r,u)}return bu(s,r,a,l,u)}function _f(s,r,a){var l=r.pendingProps,u=l.children,p=(r.stateNode._pendingVisibility&2)!==0,g=s!==null?s.memoizedState:null;if(_a(s,r),l.mode==="hidden"||p){if(r.flags&128){if(l=g!==null?g.baseLanes|a:a,s!==null){for(u=r.child=s.child,p=0;u!==null;)p=p|u.lanes|u.childLanes,u=u.sibling;r.childLanes=p&~l}else r.childLanes=0,r.child=null;return Cf(s,r,l,a)}if(a&536870912)r.memoizedState={baseLanes:0,cachePool:null},s!==null&&el(r,g!==null?g.cachePool:null),g!==null?Ch(r,g):Wc(),kh(r);else return r.lanes=r.childLanes=536870912,Cf(s,r,g!==null?g.baseLanes|a:a,a)}else g!==null?(el(r,g.cachePool),Ch(r,g),$s(),r.memoizedState=null):(s!==null&&el(r,null),Wc(),$s());return Fn(s,r,u,a),r.child}function Cf(s,r,a,l){var u=nu();return u=u===null?null:{parent:On._currentValue,pool:u},r.memoizedState={baseLanes:a,cachePool:u},s!==null&&el(r,null),Wc(),kh(r),s!==null&&Ca(s,r,l,!0),null}function _a(s,r){var a=r.ref;if(a===null)s!==null&&s.ref!==null&&(r.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(s===null||s.ref!==a)&&(r.flags|=2097664)}}function bu(s,r,a,l,u){return Cr(r),a=su(s,r,a,l,void 0,u),l=ru(),s!==null&&!zn?(iu(s,r,u),ps(s,r,u)):(Ie&&l&&Ic(r),r.flags|=1,Fn(s,r,a,u),r.child)}function kf(s,r,a,l,u,p){return Cr(r),r.updateQueue=null,a=Th(r,l,a,u),Lh(s),l=ru(),s!==null&&!zn?(iu(s,r,p),ps(s,r,p)):(Ie&&l&&Ic(r),r.flags|=1,Fn(s,r,a,p),r.child)}function Mf(s,r,a,l,u){if(Cr(r),r.stateNode===null){var p=ai,g=a.contextType;typeof g=="object"&&g!==null&&(p=Yn(g)),p=new a(l,p),r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=ju,r.stateNode=p,p._reactInternals=r,p=r.stateNode,p.props=l,p.state=r.memoizedState,p.refs={},Eu(r),g=a.contextType,p.context=typeof g=="object"&&g!==null?Yn(g):ai,p.state=r.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(vu(r,a,g,l),p.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(g=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),g!==p.state&&ju.enqueueReplaceState(p,p.state,null),Aa(r,l,p,u),Ma(),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(s===null){p=r.stateNode;var b=r.memoizedProps,N=wr(a,b);p.props=N;var M=p.context,P=a.contextType;g=ai,typeof P=="object"&&P!==null&&(g=Yn(P));var X=a.getDerivedStateFromProps;P=typeof X=="function"||typeof p.getSnapshotBeforeUpdate=="function",b=r.pendingProps!==b,P||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(b||M!==g)&&hf(r,p,l,g),zs=!1;var D=r.memoizedState;p.state=D,Aa(r,l,p,u),Ma(),M=r.memoizedState,b||D!==M||zs?(typeof X=="function"&&(vu(r,a,X,l),M=r.memoizedState),(N=zs||pf(r,a,N,l,D,M,g))?(P||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=M),p.props=l,p.state=M,p.context=g,l=N):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{p=r.stateNode,$u(s,r),g=r.memoizedProps,P=wr(a,g),p.props=P,X=r.pendingProps,D=p.context,M=a.contextType,N=ai,typeof M=="object"&&M!==null&&(N=Yn(M)),b=a.getDerivedStateFromProps,(M=typeof b=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(g!==X||D!==N)&&hf(r,p,l,N),zs=!1,D=r.memoizedState,p.state=D,Aa(r,l,p,u),Ma();var U=r.memoizedState;g!==X||D!==U||zs||s!==null&&s.dependencies!==null&&dl(s.dependencies)?(typeof b=="function"&&(vu(r,a,b,l),U=r.memoizedState),(P=zs||pf(r,a,P,l,D,U,N)||s!==null&&s.dependencies!==null&&dl(s.dependencies))?(M||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,U,N),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,U,N)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||g===s.memoizedProps&&D===s.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||g===s.memoizedProps&&D===s.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=U),p.props=l,p.state=U,p.context=N,l=P):(typeof p.componentDidUpdate!="function"||g===s.memoizedProps&&D===s.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||g===s.memoizedProps&&D===s.memoizedState||(r.flags|=1024),l=!1)}return p=l,_a(s,r),l=(r.flags&128)!==0,p||l?(p=r.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:p.render(),r.flags|=1,s!==null&&l?(r.child=jr(r,s.child,null,u),r.child=jr(r,null,a,u)):Fn(s,r,a,u),r.memoizedState=p.state,s=r.child):s=ps(s,r,u),s}function Af(s,r,a,l){return ha(),r.flags|=256,Fn(s,r,a,l),r.child}var Su={dehydrated:null,treeContext:null,retryLane:0};function Nu(s){return{baseLanes:s,cachePool:Rh()}}function wu(s,r,a){return s=s!==null?s.childLanes&~a:0,r&&(s|=kt),s}function Rf(s,r,a){var l=r.pendingProps,u=!1,p=(r.flags&128)!==0,g;if((g=p)||(g=s!==null&&s.memoizedState===null?!1:(Dn.current&2)!==0),g&&(u=!0,r.flags&=-129),g=(r.flags&32)!==0,r.flags&=-33,s===null){if(Ie){if(u?Es(r):$s(),Ie){var b=qn,N;if(N=b){e:{for(N=b,b=Gt;N.nodeType!==8;){if(!b){b=null;break e}if(N=Ot(N.nextSibling),N===null){b=null;break e}}b=N}b!==null?(r.memoizedState={dehydrated:b,treeContext:xr!==null?{id:cs,overflow:us}:null,retryLane:536870912},N=Ct(18,null,null,0),N.stateNode=b,N.return=r,r.child=N,nt=r,qn=null,N=!0):N=!1}N||vr(r)}if(b=r.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return b.data==="$!"?r.lanes=16:r.lanes=536870912,null;ds(r)}return b=l.children,l=l.fallback,u?($s(),u=r.mode,b=Cu({mode:"hidden",children:b},u),l=Mr(l,u,a,null),b.return=r,l.return=r,b.sibling=l,r.child=b,u=r.child,u.memoizedState=Nu(a),u.childLanes=wu(s,g,a),r.memoizedState=Su,l):(Es(r),_u(r,b))}if(N=s.memoizedState,N!==null&&(b=N.dehydrated,b!==null)){if(p)r.flags&256?(Es(r),r.flags&=-257,r=ku(s,r,a)):r.memoizedState!==null?($s(),r.child=s.child,r.flags|=128,r=null):($s(),u=l.fallback,b=r.mode,l=Cu({mode:"visible",children:l.children},b),u=Mr(u,b,a,null),u.flags|=2,l.return=r,u.return=r,l.sibling=u,r.child=l,jr(r,s.child,null,a),l=r.child,l.memoizedState=Nu(a),l.childLanes=wu(s,g,a),r.memoizedState=Su,r=u);else if(Es(r),b.data==="$!"){if(g=b.nextSibling&&b.nextSibling.dataset,g)var M=g.dgst;g=M,l=Error(o(419)),l.stack="",l.digest=g,fa({value:l,source:null,stack:null}),r=ku(s,r,a)}else if(zn||Ca(s,r,a,!1),g=(a&s.childLanes)!==0,zn||g){if(g=an,g!==null){if(l=a&-a,l&42)l=1;else switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=64;break;case 268435456:l=134217728;break;default:l=0}if(l=l&(g.suspendedLanes|a)?0:l,l!==0&&l!==N.retryLane)throw N.retryLane=l,Ts(s,l),tt(g,s,l),bf}b.data==="$?"||nd(),r=ku(s,r,a)}else b.data==="$?"?(r.flags|=128,r.child=s.child,r=K2.bind(null,s),b._reactRetry=r,r=null):(s=N.treeContext,qn=Ot(b.nextSibling),nt=r,Ie=!0,$t=null,Gt=!1,s!==null&&(bt[St++]=cs,bt[St++]=us,bt[St++]=xr,cs=s.id,us=s.overflow,xr=r),r=_u(r,l.children),r.flags|=4096);return r}return u?($s(),u=l.fallback,b=r.mode,N=s.child,M=N.sibling,l=Fs(N,{mode:"hidden",children:l.children}),l.subtreeFlags=N.subtreeFlags&31457280,M!==null?u=Fs(M,u):(u=Mr(u,b,a,null),u.flags|=2),u.return=r,l.return=r,l.sibling=u,r.child=l,l=u,u=r.child,b=s.child.memoizedState,b===null?b=Nu(a):(N=b.cachePool,N!==null?(M=On._currentValue,N=N.parent!==M?{parent:M,pool:M}:N):N=Rh(),b={baseLanes:b.baseLanes|a,cachePool:N}),u.memoizedState=b,u.childLanes=wu(s,g,a),r.memoizedState=Su,l):(Es(r),a=s.child,s=a.sibling,a=Fs(a,{mode:"visible",children:l.children}),a.return=r,a.sibling=null,s!==null&&(g=r.deletions,g===null?(r.deletions=[s],r.flags|=16):g.push(s)),r.child=a,r.memoizedState=null,a)}function _u(s,r){return r=Cu({mode:"visible",children:r},s.mode),r.return=s,s.child=r}function Cu(s,r){return tx(s,r,0,null)}function ku(s,r,a){return jr(r,s.child,null,a),s=_u(r,r.pendingProps.children),s.flags|=2,r.memoizedState=null,s}function Lf(s,r,a){s.lanes|=r;var l=s.alternate;l!==null&&(l.lanes|=r),Lu(s.return,r,a)}function Mu(s,r,a,l,u){var p=s.memoizedState;p===null?s.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=u)}function Tf(s,r,a){var l=r.pendingProps,u=l.revealOrder,p=l.tail;if(Fn(s,r,l.children,a),l=Dn.current,l&2)l=l&1|2,r.flags|=128;else{if(s!==null&&s.flags&128)e:for(s=r.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&Lf(s,a,r);else if(s.tag===19)Lf(s,a,r);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}l&=1}switch(sn(Dn,l),u){case"forwards":for(a=r.child,u=null;a!==null;)s=a.alternate,s!==null&&Jo(s)===null&&(u=a),a=a.sibling;a=u,a===null?(u=r.child,r.child=null):(u=a.sibling,a.sibling=null),Mu(r,!1,u,a,p);break;case"backwards":for(a=null,u=r.child,r.child=null;u!==null;){if(s=u.alternate,s!==null&&Jo(s)===null){r.child=u;break}s=u.sibling,u.sibling=a,a=u,u=s}Mu(r,!0,a,null,p);break;case"together":Mu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ps(s,r,a){if(s!==null&&(r.dependencies=s.dependencies),Xs|=r.lanes,!(a&r.childLanes))if(s!==null){if(Ca(s,r,a,!1),(a&r.childLanes)===0)return null}else return null;if(s!==null&&r.child!==s.child)throw Error(o(153));if(r.child!==null){for(s=r.child,a=Fs(s,s.pendingProps),r.child=a,a.return=r;s.sibling!==null;)s=s.sibling,a=a.sibling=Fs(s,s.pendingProps),a.return=r;a.sibling=null}return r.child}function Au(s,r){return s.lanes&r?!0:(s=s.dependencies,!!(s!==null&&dl(s)))}function O2(s,r,a){switch(r.tag){case 3:Gr(r,r.stateNode.containerInfo),Bs(r,On,s.memoizedState.cache),ha();break;case 27:case 5:Ii(r);break;case 4:Gr(r,r.stateNode.containerInfo);break;case 10:Bs(r,r.type,r.memoizedProps.value);break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(Es(r),r.flags|=128,null):a&r.child.childLanes?Rf(s,r,a):(Es(r),s=ps(s,r,a),s!==null?s.sibling:null);Es(r);break;case 19:var u=(s.flags&128)!==0;if(l=(a&r.childLanes)!==0,l||(Ca(s,r,a,!1),l=(a&r.childLanes)!==0),u){if(l)return Tf(s,r,a);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),sn(Dn,Dn.current),l)break;return null;case 22:case 23:return r.lanes=0,_f(s,r,a);case 24:Bs(r,On,s.memoizedState.cache)}return ps(s,r,a)}function Ef(s,r,a){if(s!==null)if(s.memoizedProps!==r.pendingProps)zn=!0;else{if(!Au(s,a)&&!(r.flags&128))return zn=!1,O2(s,r,a);zn=!!(s.flags&131072)}else zn=!1,Ie&&r.flags&1048576&&xh(r,Yo,r.index);switch(r.lanes=0,r.tag){case 16:e:{s=r.pendingProps;var l=r.elementType,u=l._init;if(l=u(l._payload),r.type=l,typeof l=="function")qu(l)?(s=wr(l,s),r.tag=1,r=Mf(null,r,l,s,a)):(r.tag=0,r=bu(null,r,l,s,a));else{if(l!=null){if(u=l.$$typeof,u===T){r.tag=11,r=Sf(null,r,l,s,a);break e}else if(u===A){r.tag=14,r=Nf(null,r,l,s,a);break e}}throw r=te(l)||l,Error(o(306,r,""))}}return r;case 0:return bu(s,r,r.type,r.pendingProps,a);case 1:return l=r.type,u=wr(l,r.pendingProps),Mf(s,r,l,u,a);case 3:e:{if(Gr(r,r.stateNode.containerInfo),s===null)throw Error(o(387));var p=r.pendingProps;u=r.memoizedState,l=u.element,$u(s,r),Aa(r,p,null,a);var g=r.memoizedState;if(p=g.cache,Bs(r,On,p),p!==u.cache&&Tu(r,[On],a,!0),Ma(),p=g.element,u.isDehydrated)if(u={element:p,isDehydrated:!1,cache:g.cache},r.updateQueue.baseState=u,r.memoizedState=u,r.flags&256){r=Af(s,r,p,a);break e}else if(p!==l){l=yt(Error(o(424)),r),fa(l),r=Af(s,r,p,a);break e}else for(qn=Ot(r.stateNode.containerInfo.firstChild),nt=r,Ie=!0,$t=null,Gt=!0,a=_h(r,null,p,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ha(),p===l){r=ps(s,r,a);break e}Fn(s,r,p,a)}r=r.child}return r;case 26:return _a(s,r),s===null?(a=Ox(r.type,null,r.pendingProps,null))?r.memoizedState=a:Ie||(a=r.type,s=r.pendingProps,l=kl(Ht.current).createElement(a),l[Sn]=r,l[In]=s,Xn(l,a,s),Nn(l),r.stateNode=l):r.memoizedState=Ox(r.type,s.memoizedProps,r.pendingProps,s.memoizedState),null;case 27:return Ii(r),s===null&&Ie&&(l=r.stateNode=Ex(r.type,r.pendingProps,Ht.current),nt=r,Gt=!0,qn=Ot(l.firstChild)),l=r.pendingProps.children,s!==null||Ie?Fn(s,r,l,a):r.child=jr(r,null,l,a),_a(s,r),r.child;case 5:return s===null&&Ie&&((u=l=qn)&&(l=m4(l,r.type,r.pendingProps,Gt),l!==null?(r.stateNode=l,nt=r,qn=Ot(l.firstChild),Gt=!1,u=!0):u=!1),u||vr(r)),Ii(r),u=r.type,p=r.pendingProps,g=s!==null?s.memoizedProps:null,l=p.children,fd(u,p)?l=null:g!==null&&fd(u,g)&&(r.flags|=32),r.memoizedState!==null&&(u=su(s,r,A2,null,null,a),Fa._currentValue=u),_a(s,r),Fn(s,r,l,a),r.child;case 6:return s===null&&Ie&&((s=a=qn)&&(a=p4(a,r.pendingProps,Gt),a!==null?(r.stateNode=a,nt=r,qn=null,s=!0):s=!1),s||vr(r)),null;case 13:return Rf(s,r,a);case 4:return Gr(r,r.stateNode.containerInfo),l=r.pendingProps,s===null?r.child=jr(r,null,l,a):Fn(s,r,l,a),r.child;case 11:return Sf(s,r,r.type,r.pendingProps,a);case 7:return Fn(s,r,r.pendingProps,a),r.child;case 8:return Fn(s,r,r.pendingProps.children,a),r.child;case 12:return Fn(s,r,r.pendingProps.children,a),r.child;case 10:return l=r.pendingProps,Bs(r,r.type,l.value),Fn(s,r,l.children,a),r.child;case 9:return u=r.type._context,l=r.pendingProps.children,Cr(r),u=Yn(u),l=l(u),r.flags|=1,Fn(s,r,l,a),r.child;case 14:return Nf(s,r,r.type,r.pendingProps,a);case 15:return wf(s,r,r.type,r.pendingProps,a);case 19:return Tf(s,r,a);case 22:return _f(s,r,a);case 24:return Cr(r),l=Yn(On),s===null?(u=nu(),u===null&&(u=an,p=Jc(),u.pooledCache=p,p.refCount++,p!==null&&(u.pooledCacheLanes|=a),u=p),r.memoizedState={parent:l,cache:u},Eu(r),Bs(r,On,u)):(s.lanes&a&&($u(s,r),Aa(r,null,null,a),Ma()),u=s.memoizedState,p=r.memoizedState,u.parent!==l?(u={parent:l,cache:l},r.memoizedState=u,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=u),Bs(r,On,l)):(l=p.cache,Bs(r,On,l),l!==u.cache&&Tu(r,[On],a,!0))),Fn(s,r,r.pendingProps.children,a),r.child;case 29:throw r.pendingProps}throw Error(o(156,r.tag))}var Ru=Be(null),_r=null,hs=null;function Bs(s,r,a){sn(Ru,r._currentValue),r._currentValue=a}function fs(s){s._currentValue=Ru.current,fn(Ru)}function Lu(s,r,a){for(;s!==null;){var l=s.alternate;if((s.childLanes&r)!==r?(s.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),s===a)break;s=s.return}}function Tu(s,r,a,l){var u=s.child;for(u!==null&&(u.return=s);u!==null;){var p=u.dependencies;if(p!==null){var g=u.child;p=p.firstContext;e:for(;p!==null;){var b=p;p=u;for(var N=0;N<r.length;N++)if(b.context===r[N]){p.lanes|=a,b=p.alternate,b!==null&&(b.lanes|=a),Lu(p.return,a,s),l||(g=null);break e}p=b.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(o(341));g.lanes|=a,p=g.alternate,p!==null&&(p.lanes|=a),Lu(g,a,s),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===s){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Ca(s,r,a,l){s=null;for(var u=r,p=!1;u!==null;){if(!p){if(u.flags&524288)p=!0;else if(u.flags&262144)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(o(387));if(g=g.memoizedProps,g!==null){var b=u.type;ct(u.pendingProps.value,g.value)||(s!==null?s.push(b):s=[b])}}else if(u===Xr.current){if(g=u.alternate,g===null)throw Error(o(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(s!==null?s.push(Fa):s=[Fa])}u=u.return}s!==null&&Tu(r,s,a,l),r.flags|=262144}function dl(s){for(s=s.firstContext;s!==null;){if(!ct(s.context._currentValue,s.memoizedValue))return!0;s=s.next}return!1}function Cr(s){_r=s,hs=null,s=s.dependencies,s!==null&&(s.firstContext=null)}function Yn(s){return $f(_r,s)}function ml(s,r){return _r===null&&Cr(s),$f(s,r)}function $f(s,r){var a=r._currentValue;if(r={context:r,memoizedValue:a,next:null},hs===null){if(s===null)throw Error(o(308));hs=r,s.dependencies={lanes:0,firstContext:r},s.flags|=524288}else hs=hs.next=r;return a}var zs=!1;function Eu(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(s,r){s=s.updateQueue,r.updateQueue===s&&(r.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,callbacks:null})}function Us(s){return{lane:s,tag:0,payload:null,callback:null,next:null}}function Ps(s,r,a){var l=s.updateQueue;if(l===null)return null;if(l=l.shared,pn&2){var u=l.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),l.pending=r,r=Go(s),hh(s,null,a),r}return Xo(s,l,r,a),Go(s)}function ka(s,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194176)!==0)){var l=r.lanes;l&=s.pendingLanes,a|=l,r.lanes=a,Ao(s,a)}}function Du(s,r){var a=s.updateQueue,l=s.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};p===null?u=p=g:p=p.next=g,a=a.next}while(a!==null);p===null?u=p=r:p=p.next=r}else u=p=r;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},s.updateQueue=a;return}s=a.lastBaseUpdate,s===null?a.firstBaseUpdate=r:s.next=r,a.lastBaseUpdate=r}var Ou=!1;function Ma(){if(Ou){var s=mi;if(s!==null)throw s}}function Aa(s,r,a,l){Ou=!1;var u=s.updateQueue;zs=!1;var p=u.firstBaseUpdate,g=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var N=b,M=N.next;N.next=null,g===null?p=M:g.next=M,g=N;var P=s.alternate;P!==null&&(P=P.updateQueue,b=P.lastBaseUpdate,b!==g&&(b===null?P.firstBaseUpdate=M:b.next=M,P.lastBaseUpdate=N))}if(p!==null){var X=u.baseState;g=0,P=M=N=null,b=p;do{var D=b.lane&-536870913,U=D!==b.lane;if(U?(Ve&D)===D:(l&D)===D){D!==0&&D===di&&(Ou=!0),P!==null&&(P=P.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ce=s,_e=b;D=r;var yn=a;switch(_e.tag){case 1:if(ce=_e.payload,typeof ce=="function"){X=ce.call(yn,X,D);break e}X=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=_e.payload,D=typeof ce=="function"?ce.call(yn,X,D):ce,D==null)break e;X=me({},X,D);break e;case 2:zs=!0}}D=b.callback,D!==null&&(s.flags|=64,U&&(s.flags|=8192),U=u.callbacks,U===null?u.callbacks=[D]:U.push(D))}else U={lane:D,tag:b.tag,payload:b.payload,callback:b.callback,next:null},P===null?(M=P=U,N=X):P=P.next=U,g|=D;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;U=b,b=U.next,U.next=null,u.lastBaseUpdate=U,u.shared.pending=null}}while(!0);P===null&&(N=X),u.baseState=N,u.firstBaseUpdate=M,u.lastBaseUpdate=P,p===null&&(u.shared.lanes=0),Xs|=g,s.lanes=g,s.memoizedState=X}}function Df(s,r){if(typeof s!="function")throw Error(o(191,s));s.call(r)}function Of(s,r){var a=s.callbacks;if(a!==null)for(s.callbacks=null,s=0;s<a.length;s++)Df(a[s],r)}function Ra(s,r){try{var a=r.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&s)===s){l=void 0;var p=a.create,g=a.inst;l=p(),g.destroy=l}a=a.next}while(a!==u)}}catch(b){nn(r,r.return,b)}}function Hs(s,r,a){try{var l=r.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var p=u.next;l=p;do{if((l.tag&s)===s){var g=l.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,u=r;var N=a;try{b()}catch(M){nn(u,N,M)}}}l=l.next}while(l!==p)}}catch(M){nn(r,r.return,M)}}function Bf(s){var r=s.updateQueue;if(r!==null){var a=s.stateNode;try{Of(r,a)}catch(l){nn(s,s.return,l)}}}function zf(s,r,a){a.props=wr(s.type,s.memoizedProps),a.state=s.memoizedState;try{a.componentWillUnmount()}catch(l){nn(s,r,l)}}function kr(s,r){try{var a=s.ref;if(a!==null){var l=s.stateNode;switch(s.tag){case 26:case 27:case 5:var u=l;break;default:u=l}typeof a=="function"?s.refCleanup=a(u):a.current=u}}catch(p){nn(s,r,p)}}function ut(s,r){var a=s.ref,l=s.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){nn(s,r,u)}finally{s.refCleanup=null,s=s.alternate,s!=null&&(s.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){nn(s,r,u)}else a.current=null}function Uf(s){var r=s.type,a=s.memoizedProps,l=s.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){nn(s,s.return,u)}}function Pf(s,r,a){try{var l=s.stateNode;o4(l,s.type,a,r),l[In]=r}catch(u){nn(s,s.return,u)}}function Hf(s){return s.tag===5||s.tag===3||s.tag===26||s.tag===27||s.tag===4}function Bu(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||Hf(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==27&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function zu(s,r,a){var l=s.tag;if(l===5||l===6)s=s.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(s,r):a.insertBefore(s,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(s,a)):(r=a,r.appendChild(s)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Cl));else if(l!==4&&l!==27&&(s=s.child,s!==null))for(zu(s,r,a),s=s.sibling;s!==null;)zu(s,r,a),s=s.sibling}function pl(s,r,a){var l=s.tag;if(l===5||l===6)s=s.stateNode,r?a.insertBefore(s,r):a.appendChild(s);else if(l!==4&&l!==27&&(s=s.child,s!==null))for(pl(s,r,a),s=s.sibling;s!==null;)pl(s,r,a),s=s.sibling}var xs=!1,vn=!1,Uu=!1,Vf=typeof WeakSet=="function"?WeakSet:Set,Un=null,qf=!1;function B2(s,r){if(s=s.containerInfo,pd=El,s=ih(s),Hc(s)){if("selectionStart"in s)var a={start:s.selectionStart,end:s.selectionEnd};else e:{a=(a=s.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var g=0,b=-1,N=-1,M=0,P=0,X=s,D=null;n:for(;;){for(var U;X!==a||u!==0&&X.nodeType!==3||(b=g+u),X!==p||l!==0&&X.nodeType!==3||(N=g+l),X.nodeType===3&&(g+=X.nodeValue.length),(U=X.firstChild)!==null;)D=X,X=U;for(;;){if(X===s)break n;if(D===a&&++M===u&&(b=g),D===p&&++P===l&&(N=g),(U=X.nextSibling)!==null)break;X=D,D=X.parentNode}X=U}a=b===-1||N===-1?null:{start:b,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(hd={focusedElem:s,selectionRange:a},El=!1,Un=r;Un!==null;)if(r=Un,s=r.child,(r.subtreeFlags&1028)!==0&&s!==null)s.return=r,Un=s;else for(;Un!==null;){switch(r=Un,p=r.alternate,s=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if(s&1024&&p!==null){s=void 0,a=r,u=p.memoizedProps,p=p.memoizedState,l=a.stateNode;try{var ce=wr(a.type,u,a.elementType===a.type);s=l.getSnapshotBeforeUpdate(ce,p),l.__reactInternalSnapshotBeforeUpdate=s}catch(_e){nn(a,a.return,_e)}}break;case 3:if(s&1024){if(s=r.stateNode.containerInfo,a=s.nodeType,a===9)vd(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":vd(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(s&1024)throw Error(o(163))}if(s=r.sibling,s!==null){s.return=r.return,Un=s;break}Un=r.return}return ce=qf,qf=!1,ce}function Ff(s,r,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:vs(s,a),l&4&&Ra(5,a);break;case 1:if(vs(s,a),l&4)if(s=a.stateNode,r===null)try{s.componentDidMount()}catch(b){nn(a,a.return,b)}else{var u=wr(a.type,r.memoizedProps);r=r.memoizedState;try{s.componentDidUpdate(u,r,s.__reactInternalSnapshotBeforeUpdate)}catch(b){nn(a,a.return,b)}}l&64&&Bf(a),l&512&&kr(a,a.return);break;case 3:if(vs(s,a),l&64&&(l=a.updateQueue,l!==null)){if(s=null,a.child!==null)switch(a.child.tag){case 27:case 5:s=a.child.stateNode;break;case 1:s=a.child.stateNode}try{Of(l,s)}catch(b){nn(a,a.return,b)}}break;case 26:vs(s,a),l&512&&kr(a,a.return);break;case 27:case 5:vs(s,a),r===null&&l&4&&Uf(a),l&512&&kr(a,a.return);break;case 12:vs(s,a);break;case 13:vs(s,a),l&4&&If(s,a);break;case 22:if(u=a.memoizedState!==null||xs,!u){r=r!==null&&r.memoizedState!==null||vn;var p=xs,g=vn;xs=u,(vn=r)&&!g?Vs(s,a,(a.subtreeFlags&8772)!==0):vs(s,a),xs=p,vn=g}l&512&&(a.memoizedProps.mode==="manual"?kr(a,a.return):ut(a,a.return));break;default:vs(s,a)}}function Xf(s){var r=s.alternate;r!==null&&(s.alternate=null,Xf(r)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(r=s.stateNode,r!==null&&ea(r)),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}var En=null,dt=!1;function gs(s,r,a){for(a=a.child;a!==null;)Gf(s,r,a),a=a.sibling}function Gf(s,r,a){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(ss,a)}catch{}switch(a.tag){case 26:vn||ut(a,r),gs(s,r,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||ut(a,r);var l=En,u=dt;for(En=a.stateNode,gs(s,r,a),a=a.stateNode,r=a.attributes;r.length;)a.removeAttributeNode(r[0]);ea(a),En=l,dt=u;break;case 5:vn||ut(a,r);case 6:u=En;var p=dt;if(En=null,gs(s,r,a),En=u,dt=p,En!==null)if(dt)try{s=En,l=a.stateNode,s.nodeType===8?s.parentNode.removeChild(l):s.removeChild(l)}catch(g){nn(a,r,g)}else try{En.removeChild(a.stateNode)}catch(g){nn(a,r,g)}break;case 18:En!==null&&(dt?(r=En,a=a.stateNode,r.nodeType===8?gd(r.parentNode,a):r.nodeType===1&&gd(r,a),Ya(r)):gd(En,a.stateNode));break;case 4:l=En,u=dt,En=a.stateNode.containerInfo,dt=!0,gs(s,r,a),En=l,dt=u;break;case 0:case 11:case 14:case 15:vn||Hs(2,a,r),vn||Hs(4,a,r),gs(s,r,a);break;case 1:vn||(ut(a,r),l=a.stateNode,typeof l.componentWillUnmount=="function"&&zf(a,r,l)),gs(s,r,a);break;case 21:gs(s,r,a);break;case 22:vn||ut(a,r),vn=(l=vn)||a.memoizedState!==null,gs(s,r,a),vn=l;break;default:gs(s,r,a)}}function If(s,r){if(r.memoizedState===null&&(s=r.alternate,s!==null&&(s=s.memoizedState,s!==null&&(s=s.dehydrated,s!==null))))try{Ya(s)}catch(a){nn(r,r.return,a)}}function z2(s){switch(s.tag){case 13:case 19:var r=s.stateNode;return r===null&&(r=s.stateNode=new Vf),r;case 22:return s=s.stateNode,r=s._retryCache,r===null&&(r=s._retryCache=new Vf),r;default:throw Error(o(435,s.tag))}}function Pu(s,r){var a=z2(s);r.forEach(function(l){var u=W2.bind(null,s,l);a.has(l)||(a.add(l),l.then(u,u))})}function wt(s,r){var a=r.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],p=s,g=r,b=g;e:for(;b!==null;){switch(b.tag){case 27:case 5:En=b.stateNode,dt=!1;break e;case 3:En=b.stateNode.containerInfo,dt=!0;break e;case 4:En=b.stateNode.containerInfo,dt=!0;break e}b=b.return}if(En===null)throw Error(o(160));Gf(p,g,u),En=null,dt=!1,p=u.alternate,p!==null&&(p.return=null),u.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Yf(r,s),r=r.sibling}var Dt=null;function Yf(s,r){var a=s.alternate,l=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:wt(r,s),_t(s),l&4&&(Hs(3,s,s.return),Ra(3,s),Hs(5,s,s.return));break;case 1:wt(r,s),_t(s),l&512&&(vn||a===null||ut(a,a.return)),l&64&&xs&&(s=s.updateQueue,s!==null&&(l=s.callbacks,l!==null&&(a=s.shared.hiddenCallbacks,s.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=Dt;if(wt(r,s),_t(s),l&512&&(vn||a===null||ut(a,a.return)),l&4){var p=a!==null?a.memoizedState:null;if(l=s.memoizedState,a===null)if(l===null)if(s.stateNode===null){e:{l=s.type,a=s.memoizedProps,u=u.ownerDocument||u;n:switch(l){case"title":p=u.getElementsByTagName("title")[0],(!p||p[ur]||p[Sn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=u.createElement(l),u.head.insertBefore(p,u.querySelector("head > title"))),Xn(p,l,a),p[Sn]=s,Nn(p),l=p;break e;case"link":var g=Ux("link","href",u).get(l+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(p=g[b],p.getAttribute("href")===(a.href==null?null:a.href)&&p.getAttribute("rel")===(a.rel==null?null:a.rel)&&p.getAttribute("title")===(a.title==null?null:a.title)&&p.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break n}}p=u.createElement(l),Xn(p,l,a),u.head.appendChild(p);break;case"meta":if(g=Ux("meta","content",u).get(l+(a.content||""))){for(b=0;b<g.length;b++)if(p=g[b],p.getAttribute("content")===(a.content==null?null:""+a.content)&&p.getAttribute("name")===(a.name==null?null:a.name)&&p.getAttribute("property")===(a.property==null?null:a.property)&&p.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&p.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break n}}p=u.createElement(l),Xn(p,l,a),u.head.appendChild(p);break;default:throw Error(o(468,l))}p[Sn]=s,Nn(p),l=p}s.stateNode=l}else Px(u,s.type,s.stateNode);else s.stateNode=zx(u,l,s.memoizedProps);else p!==l?(p===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):p.count--,l===null?Px(u,s.type,s.stateNode):zx(u,l,s.memoizedProps)):l===null&&s.stateNode!==null&&Pf(s,s.memoizedProps,a.memoizedProps)}break;case 27:if(l&4&&s.alternate===null){u=s.stateNode,p=s.memoizedProps;try{for(var N=u.firstChild;N;){var M=N.nextSibling,P=N.nodeName;N[ur]||P==="HEAD"||P==="BODY"||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&N.rel.toLowerCase()==="stylesheet"||u.removeChild(N),N=M}for(var X=s.type,D=u.attributes;D.length;)u.removeAttributeNode(D[0]);Xn(u,X,p),u[Sn]=s,u[In]=p}catch(ce){nn(s,s.return,ce)}}case 5:if(wt(r,s),_t(s),l&512&&(vn||a===null||ut(a,a.return)),s.flags&32){u=s.stateNode;try{xn(u,"")}catch(ce){nn(s,s.return,ce)}}l&4&&s.stateNode!=null&&(u=s.memoizedProps,Pf(s,u,a!==null?a.memoizedProps:u)),l&1024&&(Uu=!0);break;case 6:if(wt(r,s),_t(s),l&4){if(s.stateNode===null)throw Error(o(162));l=s.memoizedProps,a=s.stateNode;try{a.nodeValue=l}catch(ce){nn(s,s.return,ce)}}break;case 3:if(Rl=null,u=Dt,Dt=Ml(r.containerInfo),wt(r,s),Dt=u,_t(s),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ya(r.containerInfo)}catch(ce){nn(s,s.return,ce)}Uu&&(Uu=!1,Zf(s));break;case 4:l=Dt,Dt=Ml(s.stateNode.containerInfo),wt(r,s),_t(s),Dt=l;break;case 12:wt(r,s),_t(s);break;case 13:wt(r,s),_t(s),s.child.flags&8192&&s.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zu=xt()),l&4&&(l=s.updateQueue,l!==null&&(s.updateQueue=null,Pu(s,l)));break;case 22:if(l&512&&(vn||a===null||ut(a,a.return)),N=s.memoizedState!==null,M=a!==null&&a.memoizedState!==null,P=xs,X=vn,xs=P||N,vn=X||M,wt(r,s),vn=X,xs=P,_t(s),r=s.stateNode,r._current=s,r._visibility&=-3,r._visibility|=r._pendingVisibility&2,l&8192&&(r._visibility=N?r._visibility&-2:r._visibility|1,N&&(r=xs||vn,a===null||M||r||xi(s)),s.memoizedProps===null||s.memoizedProps.mode!=="manual"))e:for(a=null,r=s;;){if(r.tag===5||r.tag===26||r.tag===27){if(a===null){M=a=r;try{if(u=M.stateNode,N)p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{g=M.stateNode,b=M.memoizedProps.style;var U=b!=null&&b.hasOwnProperty("display")?b.display:null;g.style.display=U==null||typeof U=="boolean"?"":(""+U).trim()}}catch(ce){nn(M,M.return,ce)}}}else if(r.tag===6){if(a===null){M=r;try{M.stateNode.nodeValue=N?"":M.memoizedProps}catch(ce){nn(M,M.return,ce)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===s)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;a===r&&(a=null),r=r.return}a===r&&(a=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=s.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Pu(s,a))));break;case 19:wt(r,s),_t(s),l&4&&(l=s.updateQueue,l!==null&&(s.updateQueue=null,Pu(s,l)));break;case 21:break;default:wt(r,s),_t(s)}}function _t(s){var r=s.flags;if(r&2){try{if(s.tag!==27){e:{for(var a=s.return;a!==null;){if(Hf(a)){var l=a;break e}a=a.return}throw Error(o(160))}switch(l.tag){case 27:var u=l.stateNode,p=Bu(s);pl(s,p,u);break;case 5:var g=l.stateNode;l.flags&32&&(xn(g,""),l.flags&=-33);var b=Bu(s);pl(s,b,g);break;case 3:case 4:var N=l.stateNode.containerInfo,M=Bu(s);zu(s,M,N);break;default:throw Error(o(161))}}}catch(P){nn(s,s.return,P)}s.flags&=-3}r&4096&&(s.flags&=-4097)}function Zf(s){if(s.subtreeFlags&1024)for(s=s.child;s!==null;){var r=s;Zf(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),s=s.sibling}}function vs(s,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Ff(s,r.alternate,r),r=r.sibling}function xi(s){for(s=s.child;s!==null;){var r=s;switch(r.tag){case 0:case 11:case 14:case 15:Hs(4,r,r.return),xi(r);break;case 1:ut(r,r.return);var a=r.stateNode;typeof a.componentWillUnmount=="function"&&zf(r,r.return,a),xi(r);break;case 26:case 27:case 5:ut(r,r.return),xi(r);break;case 22:ut(r,r.return),r.memoizedState===null&&xi(r);break;default:xi(r)}s=s.sibling}}function Vs(s,r,a){for(a=a&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,u=s,p=r,g=p.flags;switch(p.tag){case 0:case 11:case 15:Vs(u,p,a),Ra(4,p);break;case 1:if(Vs(u,p,a),l=p,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(M){nn(l,l.return,M)}if(l=p,u=l.updateQueue,u!==null){var b=l.stateNode;try{var N=u.shared.hiddenCallbacks;if(N!==null)for(u.shared.hiddenCallbacks=null,u=0;u<N.length;u++)Df(N[u],b)}catch(M){nn(l,l.return,M)}}a&&g&64&&Bf(p),kr(p,p.return);break;case 26:case 27:case 5:Vs(u,p,a),a&&l===null&&g&4&&Uf(p),kr(p,p.return);break;case 12:Vs(u,p,a);break;case 13:Vs(u,p,a),a&&g&4&&If(u,p);break;case 22:p.memoizedState===null&&Vs(u,p,a),kr(p,p.return);break;default:Vs(u,p,a)}r=r.sibling}}function Hu(s,r){var a=null;s!==null&&s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(a=s.memoizedState.cachePool.pool),s=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(s=r.memoizedState.cachePool.pool),s!==a&&(s!=null&&s.refCount++,a!=null&&ya(a))}function Vu(s,r){s=null,r.alternate!==null&&(s=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==s&&(r.refCount++,s!=null&&ya(s))}function qs(s,r,a,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Kf(s,r,a,l),r=r.sibling}function Kf(s,r,a,l){var u=r.flags;switch(r.tag){case 0:case 11:case 15:qs(s,r,a,l),u&2048&&Ra(9,r);break;case 3:qs(s,r,a,l),u&2048&&(s=null,r.alternate!==null&&(s=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==s&&(r.refCount++,s!=null&&ya(s)));break;case 12:if(u&2048){qs(s,r,a,l),s=r.stateNode;try{var p=r.memoizedProps,g=p.id,b=p.onPostCommit;typeof b=="function"&&b(g,r.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(N){nn(r,r.return,N)}}else qs(s,r,a,l);break;case 23:break;case 22:p=r.stateNode,r.memoizedState!==null?p._visibility&4?qs(s,r,a,l):La(s,r):p._visibility&4?qs(s,r,a,l):(p._visibility|=4,gi(s,r,a,l,(r.subtreeFlags&10256)!==0)),u&2048&&Hu(r.alternate,r);break;case 24:qs(s,r,a,l),u&2048&&Vu(r.alternate,r);break;default:qs(s,r,a,l)}}function gi(s,r,a,l,u){for(u=u&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var p=s,g=r,b=a,N=l,M=g.flags;switch(g.tag){case 0:case 11:case 15:gi(p,g,b,N,u),Ra(8,g);break;case 23:break;case 22:var P=g.stateNode;g.memoizedState!==null?P._visibility&4?gi(p,g,b,N,u):La(p,g):(P._visibility|=4,gi(p,g,b,N,u)),u&&M&2048&&Hu(g.alternate,g);break;case 24:gi(p,g,b,N,u),u&&M&2048&&Vu(g.alternate,g);break;default:gi(p,g,b,N,u)}r=r.sibling}}function La(s,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var a=s,l=r,u=l.flags;switch(l.tag){case 22:La(a,l),u&2048&&Hu(l.alternate,l);break;case 24:La(a,l),u&2048&&Vu(l.alternate,l);break;default:La(a,l)}r=r.sibling}}var Ta=8192;function vi(s){if(s.subtreeFlags&Ta)for(s=s.child;s!==null;)Wf(s),s=s.sibling}function Wf(s){switch(s.tag){case 26:vi(s),s.flags&Ta&&s.memoizedState!==null&&C4(Dt,s.memoizedState,s.memoizedProps);break;case 5:vi(s);break;case 3:case 4:var r=Dt;Dt=Ml(s.stateNode.containerInfo),vi(s),Dt=r;break;case 22:s.memoizedState===null&&(r=s.alternate,r!==null&&r.memoizedState!==null?(r=Ta,Ta=16777216,vi(s),Ta=r):vi(s));break;default:vi(s)}}function Qf(s){var r=s.alternate;if(r!==null&&(s=r.child,s!==null)){r.child=null;do r=s.sibling,s.sibling=null,s=r;while(s!==null)}}function Ea(s){var r=s.deletions;if(s.flags&16){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Un=l,ex(l,s)}Qf(s)}if(s.subtreeFlags&10256)for(s=s.child;s!==null;)Jf(s),s=s.sibling}function Jf(s){switch(s.tag){case 0:case 11:case 15:Ea(s),s.flags&2048&&Hs(9,s,s.return);break;case 3:Ea(s);break;case 12:Ea(s);break;case 22:var r=s.stateNode;s.memoizedState!==null&&r._visibility&4&&(s.return===null||s.return.tag!==13)?(r._visibility&=-5,hl(s)):Ea(s);break;default:Ea(s)}}function hl(s){var r=s.deletions;if(s.flags&16){if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];Un=l,ex(l,s)}Qf(s)}for(s=s.child;s!==null;){switch(r=s,r.tag){case 0:case 11:case 15:Hs(8,r,r.return),hl(r);break;case 22:a=r.stateNode,a._visibility&4&&(a._visibility&=-5,hl(r));break;default:hl(r)}s=s.sibling}}function ex(s,r){for(;Un!==null;){var a=Un;switch(a.tag){case 0:case 11:case 15:Hs(8,a,r);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ya(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Un=l;else e:for(a=s;Un!==null;){l=Un;var u=l.sibling,p=l.return;if(Xf(l),l===a){Un=null;break e}if(u!==null){u.return=p,Un=u;break e}Un=p}}}function U2(s,r,a,l){this.tag=s,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(s,r,a,l){return new U2(s,r,a,l)}function qu(s){return s=s.prototype,!(!s||!s.isReactComponent)}function Fs(s,r){var a=s.alternate;return a===null?(a=Ct(s.tag,r,s.key,s.mode),a.elementType=s.elementType,a.type=s.type,a.stateNode=s.stateNode,a.alternate=s,s.alternate=a):(a.pendingProps=r,a.type=s.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=s.flags&31457280,a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,r=s.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=s.sibling,a.index=s.index,a.ref=s.ref,a.refCleanup=s.refCleanup,a}function nx(s,r){s.flags&=31457282;var a=s.alternate;return a===null?(s.childLanes=0,s.lanes=r,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,r=a.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),s}function fl(s,r,a,l,u,p){var g=0;if(l=s,typeof s=="function")qu(s)&&(g=1);else if(typeof s=="string")g=w4(s,a,ft.current)?26:s==="html"||s==="head"||s==="body"?27:5;else e:switch(s){case f:return Mr(a.children,u,p,r);case x:g=8,u|=24;break;case v:return s=Ct(12,a,r,u|2),s.elementType=v,s.lanes=p,s;case L:return s=Ct(13,a,r,u),s.elementType=L,s.lanes=p,s;case k:return s=Ct(19,a,r,u),s.elementType=k,s.lanes=p,s;case B:return tx(a,u,p,r);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case y:case _:g=10;break e;case S:g=9;break e;case T:g=11;break e;case A:g=14;break e;case O:g=16,l=null;break e}g=29,a=Error(o(130,s===null?"null":typeof s,"")),l=null}return r=Ct(g,a,r,u),r.elementType=s,r.type=l,r.lanes=p,r}function Mr(s,r,a,l){return s=Ct(7,s,l,r),s.lanes=a,s}function tx(s,r,a,l){s=Ct(22,s,l,r),s.elementType=B,s.lanes=a;var u={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var p=u._current;if(p===null)throw Error(o(456));if(!(u._pendingVisibility&2)){var g=Ts(p,2);g!==null&&(u._pendingVisibility|=2,tt(g,p,2))}},attach:function(){var p=u._current;if(p===null)throw Error(o(456));if(u._pendingVisibility&2){var g=Ts(p,2);g!==null&&(u._pendingVisibility&=-3,tt(g,p,2))}}};return s.stateNode=u,s}function Fu(s,r,a){return s=Ct(6,s,null,r),s.lanes=a,s}function Xu(s,r,a){return r=Ct(4,s.children!==null?s.children:[],s.key,r),r.lanes=a,r.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},r}function js(s){s.flags|=4}function sx(s,r){if(r.type!=="stylesheet"||r.state.loading&4)s.flags&=-16777217;else if(s.flags|=16777216,!Hx(r)){if(r=Nt.current,r!==null&&((Ve&4194176)===Ve?It!==null:(Ve&62914560)!==Ve&&!(Ve&536870912)||r!==It))throw ga=Kc,jh;s.flags|=8192}}function xl(s,r){r!==null&&(s.flags|=4),s.flags&16384&&(r=s.tag!==22?ke():536870912,s.lanes|=r,yi|=r)}function $a(s,r){if(!Ie)switch(s.tailMode){case"hidden":r=s.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?s.tail=null:a.sibling=null;break;case"collapsed":a=s.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?r||s.tail===null?s.tail=null:s.tail.sibling=null:l.sibling=null}}function mn(s){var r=s.alternate!==null&&s.alternate.child===s.child,a=0,l=0;if(r)for(var u=s.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&31457280,l|=u.flags&31457280,u.return=s,u=u.sibling;else for(u=s.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=s,u=u.sibling;return s.subtreeFlags|=l,s.childLanes=a,r}function P2(s,r,a){var l=r.pendingProps;switch(Yc(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(r),null;case 1:return mn(r),null;case 3:return a=r.stateNode,l=null,s!==null&&(l=s.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),fs(On),ts(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(s===null||s.child===null)&&(pa(r)?js(r):s===null||s.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,$t!==null&&(Ju($t),$t=null))),mn(r),null;case 26:return a=r.memoizedState,s===null?(js(r),a!==null?(mn(r),sx(r,a)):(mn(r),r.flags&=-16777217)):a?a!==s.memoizedState?(js(r),mn(r),sx(r,a)):(mn(r),r.flags&=-16777217):(s.memoizedProps!==l&&js(r),mn(r),r.flags&=-16777217),null;case 27:Ir(r),a=Ht.current;var u=r.type;if(s!==null&&r.stateNode!=null)s.memoizedProps!==l&&js(r);else{if(!l){if(r.stateNode===null)throw Error(o(166));return mn(r),null}s=ft.current,pa(r)?gh(r):(s=Ex(u,l,a),r.stateNode=s,js(r))}return mn(r),null;case 5:if(Ir(r),a=r.type,s!==null&&r.stateNode!=null)s.memoizedProps!==l&&js(r);else{if(!l){if(r.stateNode===null)throw Error(o(166));return mn(r),null}if(s=ft.current,pa(r))gh(r);else{switch(u=kl(Ht.current),s){case 1:s=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:s=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":s=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":s=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":s=u.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?u.createElement(a,{is:l.is}):u.createElement(a)}}s[Sn]=r,s[In]=l;e:for(u=r.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===r)break e;for(;u.sibling===null;){if(u.return===null||u.return===r)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}r.stateNode=s;e:switch(Xn(s,a,l),a){case"button":case"input":case"select":case"textarea":s=!!l.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&js(r)}}return mn(r),r.flags&=-16777217,null;case 6:if(s&&r.stateNode!=null)s.memoizedProps!==l&&js(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(o(166));if(s=Ht.current,pa(r)){if(s=r.stateNode,a=r.memoizedProps,l=null,u=nt,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}s[Sn]=r,s=!!(s.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||kx(s.nodeValue,a)),s||vr(r)}else s=kl(s).createTextNode(l),s[Sn]=r,r.stateNode=s}return mn(r),null;case 13:if(l=r.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(u=pa(r),l!==null&&l.dehydrated!==null){if(s===null){if(!u)throw Error(o(318));if(u=r.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[Sn]=r}else ha(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;mn(r),u=!1}else $t!==null&&(Ju($t),$t=null),u=!0;if(!u)return r.flags&256?(ds(r),r):(ds(r),null)}if(ds(r),r.flags&128)return r.lanes=a,r;if(a=l!==null,s=s!==null&&s.memoizedState!==null,a){l=r.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var p=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==u&&(l.flags|=2048)}return a!==s&&a&&(r.child.flags|=8192),xl(r,r.updateQueue),mn(r),null;case 4:return ts(),s===null&&ud(r.stateNode.containerInfo),mn(r),null;case 10:return fs(r.type),mn(r),null;case 19:if(fn(Dn),u=r.memoizedState,u===null)return mn(r),null;if(l=(r.flags&128)!==0,p=u.rendering,p===null)if(l)$a(u,!1);else{if(jn!==0||s!==null&&s.flags&128)for(s=r.child;s!==null;){if(p=Jo(s),p!==null){for(r.flags|=128,$a(u,!1),s=p.updateQueue,r.updateQueue=s,xl(r,s),r.subtreeFlags=0,s=a,a=r.child;a!==null;)nx(a,s),a=a.sibling;return sn(Dn,Dn.current&1|2),r.child}s=s.sibling}u.tail!==null&&xt()>gl&&(r.flags|=128,l=!0,$a(u,!1),r.lanes=4194304)}else{if(!l)if(s=Jo(p),s!==null){if(r.flags|=128,l=!0,s=s.updateQueue,r.updateQueue=s,xl(r,s),$a(u,!0),u.tail===null&&u.tailMode==="hidden"&&!p.alternate&&!Ie)return mn(r),null}else 2*xt()-u.renderingStartTime>gl&&a!==536870912&&(r.flags|=128,l=!0,$a(u,!1),r.lanes=4194304);u.isBackwards?(p.sibling=r.child,r.child=p):(s=u.last,s!==null?s.sibling=p:r.child=p,u.last=p)}return u.tail!==null?(r=u.tail,u.rendering=r,u.tail=r.sibling,u.renderingStartTime=xt(),r.sibling=null,s=Dn.current,sn(Dn,l?s&1|2:s&1),r):(mn(r),null);case 22:case 23:return ds(r),Qc(),l=r.memoizedState!==null,s!==null?s.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?a&536870912&&!(r.flags&128)&&(mn(r),r.subtreeFlags&6&&(r.flags|=8192)):mn(r),a=r.updateQueue,a!==null&&xl(r,a.retryQueue),a=null,s!==null&&s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(a=s.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048),s!==null&&fn(yr),null;case 24:return a=null,s!==null&&(a=s.memoizedState.cache),r.memoizedState.cache!==a&&(r.flags|=2048),fs(On),mn(r),null;case 25:return null}throw Error(o(156,r.tag))}function H2(s,r){switch(Yc(r),r.tag){case 1:return s=r.flags,s&65536?(r.flags=s&-65537|128,r):null;case 3:return fs(On),ts(),s=r.flags,s&65536&&!(s&128)?(r.flags=s&-65537|128,r):null;case 26:case 27:case 5:return Ir(r),null;case 13:if(ds(r),s=r.memoizedState,s!==null&&s.dehydrated!==null){if(r.alternate===null)throw Error(o(340));ha()}return s=r.flags,s&65536?(r.flags=s&-65537|128,r):null;case 19:return fn(Dn),null;case 4:return ts(),null;case 10:return fs(r.type),null;case 22:case 23:return ds(r),Qc(),s!==null&&fn(yr),s=r.flags,s&65536?(r.flags=s&-65537|128,r):null;case 24:return fs(On),null;case 25:return null;default:return null}}function rx(s,r){switch(Yc(r),r.tag){case 3:fs(On),ts();break;case 26:case 27:case 5:Ir(r);break;case 4:ts();break;case 13:ds(r);break;case 19:fn(Dn);break;case 10:fs(r.type);break;case 22:case 23:ds(r),Qc(),s!==null&&fn(yr);break;case 24:fs(On)}}var V2={getCacheForType:function(s){var r=Yn(On),a=r.data.get(s);return a===void 0&&(a=s(),r.data.set(s,a)),a}},q2=typeof WeakMap=="function"?WeakMap:Map,pn=0,an=null,Ue=null,Ve=0,on=0,mt=null,ys=!1,ji=!1,Gu=!1,bs=0,jn=0,Xs=0,Ar=0,Iu=0,kt=0,yi=0,Da=null,Zt=null,Yu=!1,Zu=0,gl=1/0,vl=null,Gs=null,jl=!1,Rr=null,Oa=0,Ku=0,Wu=null,Ba=0,Qu=null;function pt(){if(pn&2&&Ve!==0)return Ve&-Ve;if(Z.T!==null){var s=di;return s!==0?s:ad()}return Lo()}function ix(){kt===0&&(kt=!(Ve&536870912)||Ie?Ne():536870912);var s=Nt.current;return s!==null&&(s.flags|=32),kt}function tt(s,r,a){(s===an&&on===2||s.cancelPendingCommit!==null)&&(bi(s,0),Ss(s,Ve,kt,!1)),it(s,a),(!(pn&2)||s!==an)&&(s===an&&(!(pn&2)&&(Ar|=a),jn===4&&Ss(s,Ve,kt,!1)),Kt(s))}function ax(s,r,a){if(pn&6)throw Error(o(327));var l=!a&&(r&60)===0&&(r&s.expiredLanes)===0||Q(s,r),u=l?G2(s,r):td(s,r,!0),p=l;do{if(u===0){ji&&!l&&Ss(s,r,0,!1);break}else if(u===6)Ss(s,r,0,!ys);else{if(a=s.current.alternate,p&&!F2(a)){u=td(s,r,!1),p=!1;continue}if(u===2){if(p=r,s.errorRecoveryDisabledLanes&p)var g=0;else g=s.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){r=g;e:{var b=s;u=Da;var N=b.current.memoizedState.isDehydrated;if(N&&(bi(b,g).flags|=256),g=td(b,g,!1),g!==2){if(Gu&&!N){b.errorRecoveryDisabledLanes|=p,Ar|=p,u=4;break e}p=Zt,Zt=u,p!==null&&Ju(p)}u=g}if(p=!1,u!==2)continue}}if(u===1){bi(s,0),Ss(s,r,0,!0);break}e:{switch(l=s,u){case 0:case 1:throw Error(o(345));case 4:if((r&4194176)===r){Ss(l,r,kt,!ys);break e}break;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(o(329))}if(l.finishedWork=a,l.finishedLanes=r,(r&62914560)===r&&(p=Zu+300-xt(),10<p)){if(Ss(l,r,kt,!ys),cn(l,0)!==0)break e;l.timeoutHandle=Rx(ox.bind(null,l,a,Zt,vl,Yu,r,kt,Ar,yi,ys,2,-0,0),p);break e}ox(l,a,Zt,vl,Yu,r,kt,Ar,yi,ys,0,-0,0)}}break}while(!0);Kt(s)}function Ju(s){Zt===null?Zt=s:Zt.push.apply(Zt,s)}function ox(s,r,a,l,u,p,g,b,N,M,P,X,D){var U=r.subtreeFlags;if((U&8192||(U&16785408)===16785408)&&(qa={stylesheets:null,count:0,unsuspend:_4},Wf(r),r=k4(),r!==null)){s.cancelPendingCommit=r(hx.bind(null,s,a,l,u,g,b,N,1,X,D)),Ss(s,p,g,!M);return}hx(s,a,l,u,g,b,N,P,X,D)}function F2(s){for(var r=s;;){var a=r.tag;if((a===0||a===11||a===15)&&r.flags&16384&&(a=r.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],p=u.getSnapshot;u=u.value;try{if(!ct(p(),u))return!1}catch{return!1}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===s)break;for(;r.sibling===null;){if(r.return===null||r.return===s)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ss(s,r,a,l){r&=~Iu,r&=~Ar,s.suspendedLanes|=r,s.pingedLanes&=~r,l&&(s.warmLanes|=r),l=s.expirationTimes;for(var u=r;0<u;){var p=31-Jn(u),g=1<<p;l[p]=-1,u&=~g}a!==0&&Qr(s,a,r)}function yl(){return pn&6?!0:(za(0),!1)}function ed(){if(Ue!==null){if(on===0)var s=Ue.return;else s=Ue,hs=_r=null,au(s),ci=null,va=0,s=Ue;for(;s!==null;)rx(s.alternate,s),s=s.return;Ue=null}}function bi(s,r){s.finishedWork=null,s.finishedLanes=0;var a=s.timeoutHandle;a!==-1&&(s.timeoutHandle=-1,c4(a)),a=s.cancelPendingCommit,a!==null&&(s.cancelPendingCommit=null,a()),ed(),an=s,Ue=a=Fs(s.current,null),Ve=r,on=0,mt=null,ys=!1,ji=Q(s,r),Gu=!1,yi=kt=Iu=Ar=Xs=jn=0,Zt=Da=null,Yu=!1,r&8&&(r|=r&32);var l=s.entangledLanes;if(l!==0)for(s=s.entanglements,l&=r;0<l;){var u=31-Jn(l),p=1<<u;r|=s[u],l&=~p}return bs=r,Fo(),a}function lx(s,r){$e=null,Z.H=Yt,r===xa?(r=Sh(),on=3):r===jh?(r=Sh(),on=4):on=r===bf?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,mt=r,Ue===null&&(jn=1,ul(s,yt(r,s.current)))}function cx(){var s=Z.H;return Z.H=Yt,s===null?Yt:s}function ux(){var s=Z.A;return Z.A=V2,s}function nd(){jn=4,ys||(Ve&4194176)!==Ve&&Nt.current!==null||(ji=!0),!(Xs&134217727)&&!(Ar&134217727)||an===null||Ss(an,Ve,kt,!1)}function td(s,r,a){var l=pn;pn|=2;var u=cx(),p=ux();(an!==s||Ve!==r)&&(vl=null,bi(s,r)),r=!1;var g=jn;e:do try{if(on!==0&&Ue!==null){var b=Ue,N=mt;switch(on){case 8:ed(),g=6;break e;case 3:case 2:case 6:Nt.current===null&&(r=!0);var M=on;if(on=0,mt=null,Si(s,b,N,M),a&&ji){g=0;break e}break;default:M=on,on=0,mt=null,Si(s,b,N,M)}}X2(),g=jn;break}catch(P){lx(s,P)}while(!0);return r&&s.shellSuspendCounter++,hs=_r=null,pn=l,Z.H=u,Z.A=p,Ue===null&&(an=null,Ve=0,Fo()),g}function X2(){for(;Ue!==null;)dx(Ue)}function G2(s,r){var a=pn;pn|=2;var l=cx(),u=ux();an!==s||Ve!==r?(vl=null,gl=xt()+500,bi(s,r)):ji=Q(s,r);e:do try{if(on!==0&&Ue!==null){r=Ue;var p=mt;n:switch(on){case 1:on=0,mt=null,Si(s,r,p,1);break;case 2:if(yh(p)){on=0,mt=null,mx(r);break}r=function(){on===2&&an===s&&(on=7),Kt(s)},p.then(r,r);break e;case 3:on=7;break e;case 4:on=5;break e;case 7:yh(p)?(on=0,mt=null,mx(r)):(on=0,mt=null,Si(s,r,p,7));break;case 5:var g=null;switch(Ue.tag){case 26:g=Ue.memoizedState;case 5:case 27:var b=Ue;if(!g||Hx(g)){on=0,mt=null;var N=b.sibling;if(N!==null)Ue=N;else{var M=b.return;M!==null?(Ue=M,bl(M)):Ue=null}break n}}on=0,mt=null,Si(s,r,p,5);break;case 6:on=0,mt=null,Si(s,r,p,6);break;case 8:ed(),jn=6;break e;default:throw Error(o(462))}}I2();break}catch(P){lx(s,P)}while(!0);return hs=_r=null,Z.H=l,Z.A=u,pn=a,Ue!==null?0:(an=null,Ve=0,Fo(),jn)}function I2(){for(;Ue!==null&&!Cc();)dx(Ue)}function dx(s){var r=Ef(s.alternate,s,bs);s.memoizedProps=s.pendingProps,r===null?bl(s):Ue=r}function mx(s){var r=s,a=r.alternate;switch(r.tag){case 15:case 0:r=kf(a,r,r.pendingProps,r.type,void 0,Ve);break;case 11:r=kf(a,r,r.pendingProps,r.type.render,r.ref,Ve);break;case 5:au(r);default:rx(a,r),r=Ue=nx(r,bs),r=Ef(a,r,bs)}s.memoizedProps=s.pendingProps,r===null?bl(s):Ue=r}function Si(s,r,a,l){hs=_r=null,au(r),ci=null,va=0;var u=r.return;try{if(D2(s,u,r,a,Ve)){jn=1,ul(s,yt(a,s.current)),Ue=null;return}}catch(p){if(u!==null)throw Ue=u,p;jn=1,ul(s,yt(a,s.current)),Ue=null;return}r.flags&32768?(Ie||l===1?s=!0:ji||Ve&536870912?s=!1:(ys=s=!0,(l===2||l===3||l===6)&&(l=Nt.current,l!==null&&l.tag===13&&(l.flags|=16384))),px(r,s)):bl(r)}function bl(s){var r=s;do{if(r.flags&32768){px(r,ys);return}s=r.return;var a=P2(r.alternate,r,bs);if(a!==null){Ue=a;return}if(r=r.sibling,r!==null){Ue=r;return}Ue=r=s}while(r!==null);jn===0&&(jn=5)}function px(s,r){do{var a=H2(s.alternate,s);if(a!==null){a.flags&=32767,Ue=a;return}if(a=s.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!r&&(s=s.sibling,s!==null)){Ue=s;return}Ue=s=a}while(s!==null);jn=6,Ue=null}function hx(s,r,a,l,u,p,g,b,N,M){var P=Z.T,X=ne.p;try{ne.p=2,Z.T=null,Y2(s,r,a,l,X,u,p,g,b,N,M)}finally{Z.T=P,ne.p=X}}function Y2(s,r,a,l,u,p,g,b){do Ni();while(Rr!==null);if(pn&6)throw Error(o(327));var N=s.finishedWork;if(l=s.finishedLanes,N===null)return null;if(s.finishedWork=null,s.finishedLanes=0,N===s.current)throw Error(o(177));s.callbackNode=null,s.callbackPriority=0,s.cancelPendingCommit=null;var M=N.lanes|N.childLanes;if(M|=Xc,Wi(s,l,M,p,g,b),s===an&&(Ue=an=null,Ve=0),!(N.subtreeFlags&10256)&&!(N.flags&10256)||jl||(jl=!0,Ku=M,Wu=a,Q2(Kr,function(){return Ni(),null})),a=(N.flags&15990)!==0,N.subtreeFlags&15990||a?(a=Z.T,Z.T=null,p=ne.p,ne.p=2,g=pn,pn|=4,B2(s,N),Yf(N,s),v2(hd,s.containerInfo),El=!!pd,hd=pd=null,s.current=N,Ff(s,N.alternate,N),kc(),pn=g,ne.p=p,Z.T=a):s.current=N,jl?(jl=!1,Rr=s,Oa=l):fx(s,M),M=s.pendingLanes,M===0&&(Gs=null),Mo(N.stateNode),Kt(s),r!==null)for(u=s.onRecoverableError,N=0;N<r.length;N++)M=r[N],u(M.value,{componentStack:M.stack});return Oa&3&&Ni(),M=s.pendingLanes,l&4194218&&M&42?s===Qu?Ba++:(Ba=0,Qu=s):Ba=0,za(0),null}function fx(s,r){(s.pooledCacheLanes&=r)===0&&(r=s.pooledCache,r!=null&&(s.pooledCache=null,ya(r)))}function Ni(){if(Rr!==null){var s=Rr,r=Ku;Ku=0;var a=Ro(Oa),l=Z.T,u=ne.p;try{if(ne.p=32>a?32:a,Z.T=null,Rr===null)var p=!1;else{a=Wu,Wu=null;var g=Rr,b=Oa;if(Rr=null,Oa=0,pn&6)throw Error(o(331));var N=pn;if(pn|=4,Jf(g.current),Kf(g,g.current,b,a),pn=N,za(0,!1),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(ss,g)}catch{}p=!0}return p}finally{ne.p=u,Z.T=l,fx(s,r)}}return!1}function xx(s,r,a){r=yt(a,r),r=yu(s.stateNode,r,2),s=Ps(s,r,2),s!==null&&(it(s,2),Kt(s))}function nn(s,r,a){if(s.tag===3)xx(s,s,a);else for(;r!==null;){if(r.tag===3){xx(r,s,a);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Gs===null||!Gs.has(l))){s=yt(a,s),a=jf(2),l=Ps(r,a,2),l!==null&&(yf(a,l,r,s),it(l,2),Kt(l));break}}r=r.return}}function sd(s,r,a){var l=s.pingCache;if(l===null){l=s.pingCache=new q2;var u=new Set;l.set(r,u)}else u=l.get(r),u===void 0&&(u=new Set,l.set(r,u));u.has(a)||(Gu=!0,u.add(a),s=Z2.bind(null,s,r,a),r.then(s,s))}function Z2(s,r,a){var l=s.pingCache;l!==null&&l.delete(r),s.pingedLanes|=s.suspendedLanes&a,s.warmLanes&=~a,an===s&&(Ve&a)===a&&(jn===4||jn===3&&(Ve&62914560)===Ve&&300>xt()-Zu?!(pn&2)&&bi(s,0):Iu|=a,yi===Ve&&(yi=0)),Kt(s)}function gx(s,r){r===0&&(r=ke()),s=Ts(s,r),s!==null&&(it(s,r),Kt(s))}function K2(s){var r=s.memoizedState,a=0;r!==null&&(a=r.retryLane),gx(s,a)}function W2(s,r){var a=0;switch(s.tag){case 13:var l=s.stateNode,u=s.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=s.stateNode;break;case 22:l=s.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(r),gx(s,a)}function Q2(s,r){return Yr(s,r)}var Sl=null,wi=null,rd=!1,Nl=!1,id=!1,Lr=0;function Kt(s){s!==wi&&s.next===null&&(wi===null?Sl=wi=s:wi=wi.next=s),Nl=!0,rd||(rd=!0,e4(J2))}function za(s,r){if(!id&&Nl){id=!0;do for(var a=!1,l=Sl;l!==null;){if(s!==0){var u=l.pendingLanes;if(u===0)var p=0;else{var g=l.suspendedLanes,b=l.pingedLanes;p=(1<<31-Jn(42|s)+1)-1,p&=u&~(g&~b),p=p&201326677?p&201326677|1:p?p|2:0}p!==0&&(a=!0,yx(l,p))}else p=Ve,p=cn(l,l===an?p:0),!(p&3)||Q(l,p)||(a=!0,yx(l,p));l=l.next}while(a);id=!1}}function J2(){Nl=rd=!1;var s=0;Lr!==0&&(l4()&&(s=Lr),Lr=0);for(var r=xt(),a=null,l=Sl;l!==null;){var u=l.next,p=vx(l,r);p===0?(l.next=null,a===null?Sl=u:a.next=u,u===null&&(wi=a)):(a=l,(s!==0||p&3)&&(Nl=!0)),l=u}za(s)}function vx(s,r){for(var a=s.suspendedLanes,l=s.pingedLanes,u=s.expirationTimes,p=s.pendingLanes&-62914561;0<p;){var g=31-Jn(p),b=1<<g,N=u[g];N===-1?(!(b&a)||b&l)&&(u[g]=oe(b,r)):N<=r&&(s.expiredLanes|=b),p&=~b}if(r=an,a=Ve,a=cn(s,s===r?a:0),l=s.callbackNode,a===0||s===r&&on===2||s.cancelPendingCommit!==null)return l!==null&&l!==null&&Zi(l),s.callbackNode=null,s.callbackPriority=0;if(!(a&3)||Q(s,a)){if(r=a&-a,r===s.callbackPriority)return r;switch(l!==null&&Zi(l),Ro(a)){case 2:case 8:a=Ki;break;case 32:a=Kr;break;case 268435456:a=Wr;break;default:a=Kr}return l=jx.bind(null,s),a=Yr(a,l),s.callbackPriority=r,s.callbackNode=a,r}return l!==null&&l!==null&&Zi(l),s.callbackPriority=2,s.callbackNode=null,2}function jx(s,r){var a=s.callbackNode;if(Ni()&&s.callbackNode!==a)return null;var l=Ve;return l=cn(s,s===an?l:0),l===0?null:(ax(s,l,r),vx(s,xt()),s.callbackNode!=null&&s.callbackNode===a?jx.bind(null,s):null)}function yx(s,r){if(Ni())return null;ax(s,r,!0)}function e4(s){u4(function(){pn&6?Yr(Zr,s):s()})}function ad(){return Lr===0&&(Lr=Ne()),Lr}function bx(s){return s==null||typeof s=="symbol"||typeof s=="boolean"?null:typeof s=="function"?s:xe(""+s)}function Sx(s,r){var a=r.ownerDocument.createElement("input");return a.name=r.name,a.value=r.value,s.id&&a.setAttribute("form",s.id),r.parentNode.insertBefore(a,r),s=new FormData(s),a.parentNode.removeChild(a),s}function n4(s,r,a,l,u){if(r==="submit"&&a&&a.stateNode===u){var p=bx((u[In]||null).action),g=l.submitter;g&&(r=(r=g[In]||null)?bx(r.formAction):g.getAttribute("formAction"),r!==null&&(p=r,g=null));var b=new Ho("action","action",null,l,u);s.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Lr!==0){var N=g?Sx(u,g):new FormData(u);fu(a,{pending:!0,data:N,method:u.method,action:p},null,N)}}else typeof p=="function"&&(b.preventDefault(),N=g?Sx(u,g):new FormData(u),fu(a,{pending:!0,data:N,method:u.method,action:p},p,N))},currentTarget:u}]})}}for(var od=0;od<ph.length;od++){var ld=ph[od],t4=ld.toLowerCase(),s4=ld[0].toUpperCase()+ld.slice(1);Et(t4,"on"+s4)}Et(lh,"onAnimationEnd"),Et(ch,"onAnimationIteration"),Et(uh,"onAnimationStart"),Et("dblclick","onDoubleClick"),Et("focusin","onFocus"),Et("focusout","onBlur"),Et(y2,"onTransitionRun"),Et(b2,"onTransitionStart"),Et(S2,"onTransitionCancel"),Et(dh,"onTransitionEnd"),Rs("onMouseEnter",["mouseout","mouseover"]),Rs("onMouseLeave",["mouseout","mouseover"]),Rs("onPointerEnter",["pointerout","pointerover"]),Rs("onPointerLeave",["pointerout","pointerover"]),gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gt("onBeforeInput",["compositionend","keypress","textInput","paste"]),gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r4=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ua));function Nx(s,r){r=(r&4)!==0;for(var a=0;a<s.length;a++){var l=s[a],u=l.event;l=l.listeners;e:{var p=void 0;if(r)for(var g=l.length-1;0<=g;g--){var b=l[g],N=b.instance,M=b.currentTarget;if(b=b.listener,N!==p&&u.isPropagationStopped())break e;p=b,u.currentTarget=M;try{p(u)}catch(P){cl(P)}u.currentTarget=null,p=N}else for(g=0;g<l.length;g++){if(b=l[g],N=b.instance,M=b.currentTarget,b=b.listener,N!==p&&u.isPropagationStopped())break e;p=b,u.currentTarget=M;try{p(u)}catch(P){cl(P)}u.currentTarget=null,p=N}}}}function He(s,r){var a=r[Qi];a===void 0&&(a=r[Qi]=new Set);var l=s+"__bubble";a.has(l)||(wx(r,s,2,!1),a.add(l))}function cd(s,r,a){var l=0;r&&(l|=4),wx(a,s,l,r)}var wl="_reactListening"+Math.random().toString(36).slice(2);function ud(s){if(!s[wl]){s[wl]=!0,$o.forEach(function(a){a!=="selectionchange"&&(r4.has(a)||cd(a,!1,s),cd(a,!0,s))});var r=s.nodeType===9?s:s.ownerDocument;r===null||r[wl]||(r[wl]=!0,cd("selectionchange",!1,r))}}function wx(s,r,a,l){switch(Ix(r)){case 2:var u=R4;break;case 8:u=L4;break;default:u=Nd}a=u.bind(null,r,a,s),u=void 0,!Tc||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),l?u!==void 0?s.addEventListener(r,a,{capture:!0,passive:u}):s.addEventListener(r,a,!0):u!==void 0?s.addEventListener(r,a,{passive:u}):s.addEventListener(r,a,!1)}function dd(s,r,a,l,u){var p=l;if(!(r&1)&&!(r&2)&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var b=l.stateNode.containerInfo;if(b===u||b.nodeType===8&&b.parentNode===u)break;if(g===4)for(g=l.return;g!==null;){var N=g.tag;if((N===3||N===4)&&(N=g.stateNode.containerInfo,N===u||N.nodeType===8&&N.parentNode===u))return;g=g.return}for(;b!==null;){if(g=is(b),g===null)return;if(N=g.tag,N===5||N===6||N===26||N===27){l=p=g;continue e}b=b.parentNode}}l=l.return}zp(function(){var M=p,P=Ge(a),X=[];e:{var D=mh.get(s);if(D!==void 0){var U=Ho,ce=s;switch(s){case"keypress":if(Uo(a)===0)break e;case"keydown":case"keyup":U=Wb;break;case"focusin":ce="focus",U=Oc;break;case"focusout":ce="blur",U=Oc;break;case"beforeblur":case"afterblur":U=Oc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Ub;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=e2;break;case lh:case ch:case uh:U=Vb;break;case dh:U=t2;break;case"scroll":case"scrollend":U=Bb;break;case"wheel":U=r2;break;case"copy":case"cut":case"paste":U=Fb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=qp;break;case"toggle":case"beforetoggle":U=a2}var _e=(r&4)!==0,yn=!_e&&(s==="scroll"||s==="scrollend"),R=_e?D!==null?D+"Capture":null:D;_e=[];for(var C=M,$;C!==null;){var V=C;if($=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||$===null||R===null||(V=ra(C,R),V!=null&&_e.push(Pa(C,V,$))),yn)break;C=C.return}0<_e.length&&(D=new U(D,ce,null,a,P),X.push({event:D,listeners:_e}))}}if(!(r&7)){e:{if(D=s==="mouseover"||s==="pointerover",U=s==="mouseout"||s==="pointerout",D&&a!==Me&&(ce=a.relatedTarget||a.fromElement)&&(is(ce)||ce[qt]))break e;if((U||D)&&(D=P.window===P?P:(D=P.ownerDocument)?D.defaultView||D.parentWindow:window,U?(ce=a.relatedTarget||a.toElement,U=M,ce=ce?is(ce):null,ce!==null&&(yn=W(ce),_e=ce.tag,ce!==yn||_e!==5&&_e!==27&&_e!==6)&&(ce=null)):(U=null,ce=M),U!==ce)){if(_e=Hp,V="onMouseLeave",R="onMouseEnter",C="mouse",(s==="pointerout"||s==="pointerover")&&(_e=qp,V="onPointerLeave",R="onPointerEnter",C="pointer"),yn=U==null?D:et(U),$=ce==null?D:et(ce),D=new _e(V,C+"leave",U,a,P),D.target=yn,D.relatedTarget=$,V=null,is(P)===M&&(_e=new _e(R,C+"enter",ce,a,P),_e.target=$,_e.relatedTarget=yn,V=_e),yn=V,U&&ce)n:{for(_e=U,R=ce,C=0,$=_e;$;$=_i($))C++;for($=0,V=R;V;V=_i(V))$++;for(;0<C-$;)_e=_i(_e),C--;for(;0<$-C;)R=_i(R),$--;for(;C--;){if(_e===R||R!==null&&_e===R.alternate)break n;_e=_i(_e),R=_i(R)}_e=null}else _e=null;U!==null&&_x(X,D,U,_e,!1),ce!==null&&yn!==null&&_x(X,yn,ce,_e,!0)}}e:{if(D=M?et(M):window,U=D.nodeName&&D.nodeName.toLowerCase(),U==="select"||U==="input"&&D.type==="file")var se=Wp;else if(Zp(D))if(Qp)se=x2;else{se=h2;var Oe=p2}else U=D.nodeName,!U||U.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?M&&mr(M.elementType)&&(se=Wp):se=f2;if(se&&(se=se(s,M))){Kp(X,se,a,P);break e}Oe&&Oe(s,D,M),s==="focusout"&&M&&D.type==="number"&&M.memoizedProps.value!=null&&na(D,"number",D.value)}switch(Oe=M?et(M):window,s){case"focusin":(Zp(Oe)||Oe.contentEditable==="true")&&(si=Oe,Vc=M,ma=null);break;case"focusout":ma=Vc=si=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,ah(X,a,P);break;case"selectionchange":if(j2)break;case"keydown":case"keyup":ah(X,a,P)}var fe;if(zc)e:{switch(s){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else ti?Ip(s,a)&&(je="onCompositionEnd"):s==="keydown"&&a.keyCode===229&&(je="onCompositionStart");je&&(Fp&&a.locale!=="ko"&&(ti||je!=="onCompositionStart"?je==="onCompositionEnd"&&ti&&(fe=Up()):(Ls=P,Ec="value"in Ls?Ls.value:Ls.textContent,ti=!0)),Oe=_l(M,je),0<Oe.length&&(je=new Vp(je,s,null,a,P),X.push({event:je,listeners:Oe}),fe?je.data=fe:(fe=Yp(a),fe!==null&&(je.data=fe)))),(fe=l2?c2(s,a):u2(s,a))&&(je=_l(M,"onBeforeInput"),0<je.length&&(Oe=new Vp("onBeforeInput","beforeinput",null,a,P),X.push({event:Oe,listeners:je}),Oe.data=fe)),n4(X,s,M,a,P)}Nx(X,r)})}function Pa(s,r,a){return{instance:s,listener:r,currentTarget:a}}function _l(s,r){for(var a=r+"Capture",l=[];s!==null;){var u=s,p=u.stateNode;u=u.tag,u!==5&&u!==26&&u!==27||p===null||(u=ra(s,a),u!=null&&l.unshift(Pa(s,u,p)),u=ra(s,r),u!=null&&l.push(Pa(s,u,p))),s=s.return}return l}function _i(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5&&s.tag!==27);return s||null}function _x(s,r,a,l,u){for(var p=r._reactName,g=[];a!==null&&a!==l;){var b=a,N=b.alternate,M=b.stateNode;if(b=b.tag,N!==null&&N===l)break;b!==5&&b!==26&&b!==27||M===null||(N=M,u?(M=ra(a,p),M!=null&&g.unshift(Pa(a,M,N))):u||(M=ra(a,p),M!=null&&g.push(Pa(a,M,N)))),a=a.return}g.length!==0&&s.push({event:r,listeners:g})}var i4=/\r\n?/g,a4=/\u0000|\uFFFD/g;function Cx(s){return(typeof s=="string"?s:""+s).replace(i4,`
`).replace(a4,"")}function kx(s,r){return r=Cx(r),Cx(s)===r}function Cl(){}function en(s,r,a,l,u,p){switch(a){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||xn(s,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&xn(s,""+l);break;case"className":vt(s,"class",l);break;case"tabIndex":vt(s,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":vt(s,a,l);break;case"style":ls(s,l,p);break;case"data":if(r!=="object"){vt(s,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||a!=="href")){s.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){s.removeAttribute(a);break}l=xe(""+l),s.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){s.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(a==="formAction"?(r!=="input"&&en(s,r,"name",u.name,u,null),en(s,r,"formEncType",u.formEncType,u,null),en(s,r,"formMethod",u.formMethod,u,null),en(s,r,"formTarget",u.formTarget,u,null)):(en(s,r,"encType",u.encType,u,null),en(s,r,"method",u.method,u,null),en(s,r,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){s.removeAttribute(a);break}l=xe(""+l),s.setAttribute(a,l);break;case"onClick":l!=null&&(s.onclick=Cl);break;case"onScroll":l!=null&&He("scroll",s);break;case"onScrollEnd":l!=null&&He("scrollend",s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(o(60));s.innerHTML=a}}break;case"multiple":s.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":s.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){s.removeAttribute("xlink:href");break}a=xe(""+l),s.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?s.setAttribute(a,""+l):s.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?s.setAttribute(a,""):s.removeAttribute(a);break;case"capture":case"download":l===!0?s.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?s.setAttribute(a,l):s.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?s.setAttribute(a,l):s.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?s.removeAttribute(a):s.setAttribute(a,l);break;case"popover":He("beforetoggle",s),He("toggle",s),un(s,"popover",l);break;case"xlinkActuate":Rn(s,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Rn(s,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Rn(s,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Rn(s,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Rn(s,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Rn(s,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Rn(s,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Rn(s,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Rn(s,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":un(s,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=sa.get(a)||a,un(s,a,l))}}function md(s,r,a,l,u,p){switch(a){case"style":ls(s,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(o(60));s.innerHTML=a}}break;case"children":typeof l=="string"?xn(s,l):(typeof l=="number"||typeof l=="bigint")&&xn(s,""+l);break;case"onScroll":l!=null&&He("scroll",s);break;case"onScrollEnd":l!=null&&He("scrollend",s);break;case"onClick":l!=null&&(s.onclick=Cl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Do.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),r=a.slice(2,u?a.length-7:void 0),p=s[In]||null,p=p!=null?p[a]:null,typeof p=="function"&&s.removeEventListener(r,p,u),typeof l=="function")){typeof p!="function"&&p!==null&&(a in s?s[a]=null:s.hasAttribute(a)&&s.removeAttribute(a)),s.addEventListener(r,l,u);break e}a in s?s[a]=l:l===!0?s.setAttribute(a,""):un(s,a,l)}}}function Xn(s,r,a){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",s),He("load",s);var l=!1,u=!1,p;for(p in a)if(a.hasOwnProperty(p)){var g=a[p];if(g!=null)switch(p){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,r));default:en(s,r,p,g,a,null)}}u&&en(s,r,"srcSet",a.srcSet,a,null),l&&en(s,r,"src",a.src,a,null);return;case"input":He("invalid",s);var b=p=g=u=null,N=null,M=null;for(l in a)if(a.hasOwnProperty(l)){var P=a[l];if(P!=null)switch(l){case"name":u=P;break;case"type":g=P;break;case"checked":N=P;break;case"defaultChecked":M=P;break;case"value":p=P;break;case"defaultValue":b=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(o(137,r));break;default:en(s,r,l,P,a,null)}}os(s,p,b,N,M,g,u,!1),Jr(s);return;case"select":He("invalid",s),l=g=p=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":p=b;break;case"defaultValue":g=b;break;case"multiple":l=b;default:en(s,r,u,b,a,null)}r=p,a=g,s.multiple=!!l,r!=null?Xt(s,!!l,r,!1):a!=null&&Xt(s,!!l,a,!0);return;case"textarea":He("invalid",s),p=u=l=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":l=b;break;case"defaultValue":u=b;break;case"children":p=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(91));break;default:en(s,r,g,b,a,null)}ta(s,l,u,p),Jr(s);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(l=a[N],l!=null))switch(N){case"selected":s.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:en(s,r,N,l,a,null)}return;case"dialog":He("cancel",s),He("close",s);break;case"iframe":case"object":He("load",s);break;case"video":case"audio":for(l=0;l<Ua.length;l++)He(Ua[l],s);break;case"image":He("error",s),He("load",s);break;case"details":He("toggle",s);break;case"embed":case"source":case"link":He("error",s),He("load",s);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in a)if(a.hasOwnProperty(M)&&(l=a[M],l!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,r));default:en(s,r,M,l,a,null)}return;default:if(mr(r)){for(P in a)a.hasOwnProperty(P)&&(l=a[P],l!==void 0&&md(s,r,P,l,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!=null&&en(s,r,b,l,a,null))}function o4(s,r,a,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,p=null,g=null,b=null,N=null,M=null,P=null;for(U in a){var X=a[U];if(a.hasOwnProperty(U)&&X!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":N=X;default:l.hasOwnProperty(U)||en(s,r,U,null,l,X)}}for(var D in l){var U=l[D];if(X=a[D],l.hasOwnProperty(D)&&(U!=null||X!=null))switch(D){case"type":p=U;break;case"name":u=U;break;case"checked":M=U;break;case"defaultChecked":P=U;break;case"value":g=U;break;case"defaultValue":b=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,r));break;default:U!==X&&en(s,r,D,U,l,X)}}ni(s,g,b,N,M,P,p,u);return;case"select":U=g=b=D=null;for(p in a)if(N=a[p],a.hasOwnProperty(p)&&N!=null)switch(p){case"value":break;case"multiple":U=N;default:l.hasOwnProperty(p)||en(s,r,p,null,l,N)}for(u in l)if(p=l[u],N=a[u],l.hasOwnProperty(u)&&(p!=null||N!=null))switch(u){case"value":D=p;break;case"defaultValue":b=p;break;case"multiple":g=p;default:p!==N&&en(s,r,u,p,l,N)}r=b,a=g,l=U,D!=null?Xt(s,!!a,D,!1):!!l!=!!a&&(r!=null?Xt(s,!!a,r,!0):Xt(s,!!a,a?[]:"",!1));return;case"textarea":U=D=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:en(s,r,b,null,l,u)}for(g in l)if(u=l[g],p=a[g],l.hasOwnProperty(g)&&(u!=null||p!=null))switch(g){case"value":D=u;break;case"defaultValue":U=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==p&&en(s,r,g,u,l,p)}Le(s,D,U);return;case"option":for(var ce in a)if(D=a[ce],a.hasOwnProperty(ce)&&D!=null&&!l.hasOwnProperty(ce))switch(ce){case"selected":s.selected=!1;break;default:en(s,r,ce,null,l,D)}for(N in l)if(D=l[N],U=a[N],l.hasOwnProperty(N)&&D!==U&&(D!=null||U!=null))switch(N){case"selected":s.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:en(s,r,N,D,l,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in a)D=a[_e],a.hasOwnProperty(_e)&&D!=null&&!l.hasOwnProperty(_e)&&en(s,r,_e,null,l,D);for(M in l)if(D=l[M],U=a[M],l.hasOwnProperty(M)&&D!==U&&(D!=null||U!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(o(137,r));break;default:en(s,r,M,D,l,U)}return;default:if(mr(r)){for(var yn in a)D=a[yn],a.hasOwnProperty(yn)&&D!==void 0&&!l.hasOwnProperty(yn)&&md(s,r,yn,void 0,l,D);for(P in l)D=l[P],U=a[P],!l.hasOwnProperty(P)||D===U||D===void 0&&U===void 0||md(s,r,P,D,l,U);return}}for(var R in a)D=a[R],a.hasOwnProperty(R)&&D!=null&&!l.hasOwnProperty(R)&&en(s,r,R,null,l,D);for(X in l)D=l[X],U=a[X],!l.hasOwnProperty(X)||D===U||D==null&&U==null||en(s,r,X,D,l,U)}var pd=null,hd=null;function kl(s){return s.nodeType===9?s:s.ownerDocument}function Mx(s){switch(s){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ax(s,r){if(s===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return s===1&&r==="foreignObject"?0:s}function fd(s,r){return s==="textarea"||s==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var xd=null;function l4(){var s=window.event;return s&&s.type==="popstate"?s===xd?!1:(xd=s,!0):(xd=null,!1)}var Rx=typeof setTimeout=="function"?setTimeout:void 0,c4=typeof clearTimeout=="function"?clearTimeout:void 0,Lx=typeof Promise=="function"?Promise:void 0,u4=typeof queueMicrotask=="function"?queueMicrotask:typeof Lx<"u"?function(s){return Lx.resolve(null).then(s).catch(d4)}:Rx;function d4(s){setTimeout(function(){throw s})}function gd(s,r){var a=r,l=0;do{var u=a.nextSibling;if(s.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(l===0){s.removeChild(u),Ya(r);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=u}while(a);Ya(r)}function vd(s){var r=s.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var a=r;switch(r=r.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":vd(a),ea(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}s.removeChild(a)}}function m4(s,r,a,l){for(;s.nodeType===1;){var u=a;if(s.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(s.nodeName!=="INPUT"||s.type!=="hidden"))break}else if(l){if(!s[ur])switch(r){case"meta":if(!s.hasAttribute("itemprop"))break;return s;case"link":if(p=s.getAttribute("rel"),p==="stylesheet"&&s.hasAttribute("data-precedence"))break;if(p!==u.rel||s.getAttribute("href")!==(u.href==null?null:u.href)||s.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||s.getAttribute("title")!==(u.title==null?null:u.title))break;return s;case"style":if(s.hasAttribute("data-precedence"))break;return s;case"script":if(p=s.getAttribute("src"),(p!==(u.src==null?null:u.src)||s.getAttribute("type")!==(u.type==null?null:u.type)||s.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&p&&s.hasAttribute("async")&&!s.hasAttribute("itemprop"))break;return s;default:return s}}else if(r==="input"&&s.type==="hidden"){var p=u.name==null?null:""+u.name;if(u.type==="hidden"&&s.getAttribute("name")===p)return s}else return s;if(s=Ot(s.nextSibling),s===null)break}return null}function p4(s,r,a){if(r==="")return null;for(;s.nodeType!==3;)if((s.nodeType!==1||s.nodeName!=="INPUT"||s.type!=="hidden")&&!a||(s=Ot(s.nextSibling),s===null))return null;return s}function Ot(s){for(;s!=null;s=s.nextSibling){var r=s.nodeType;if(r===1||r===3)break;if(r===8){if(r=s.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return s}function Tx(s){s=s.previousSibling;for(var r=0;s;){if(s.nodeType===8){var a=s.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return s;r--}else a==="/$"&&r++}s=s.previousSibling}return null}function Ex(s,r,a){switch(r=kl(a),s){case"html":if(s=r.documentElement,!s)throw Error(o(452));return s;case"head":if(s=r.head,!s)throw Error(o(453));return s;case"body":if(s=r.body,!s)throw Error(o(454));return s;default:throw Error(o(451))}}var Mt=new Map,$x=new Set;function Ml(s){return typeof s.getRootNode=="function"?s.getRootNode():s.ownerDocument}var Ns=ne.d;ne.d={f:h4,r:f4,D:x4,C:g4,L:v4,m:j4,X:b4,S:y4,M:S4};function h4(){var s=Ns.f(),r=yl();return s||r}function f4(s){var r=As(s);r!==null&&r.tag===5&&r.type==="form"?of(r):Ns.r(s)}var Ci=typeof document>"u"?null:document;function Dx(s,r,a){var l=Ci;if(l&&typeof r=="string"&&r){var u=Vn(r);u='link[rel="'+s+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),$x.has(u)||($x.add(u),s={rel:s,crossOrigin:a,href:r},l.querySelector(u)===null&&(r=l.createElement("link"),Xn(r,"link",s),Nn(r),l.head.appendChild(r)))}}function x4(s){Ns.D(s),Dx("dns-prefetch",s,null)}function g4(s,r){Ns.C(s,r),Dx("preconnect",s,r)}function v4(s,r,a){Ns.L(s,r,a);var l=Ci;if(l&&s&&r){var u='link[rel="preload"][as="'+Vn(r)+'"]';r==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Vn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Vn(a.imageSizes)+'"]')):u+='[href="'+Vn(s)+'"]';var p=u;switch(r){case"style":p=ki(s);break;case"script":p=Mi(s)}Mt.has(p)||(s=me({rel:"preload",href:r==="image"&&a&&a.imageSrcSet?void 0:s,as:r},a),Mt.set(p,s),l.querySelector(u)!==null||r==="style"&&l.querySelector(Ha(p))||r==="script"&&l.querySelector(Va(p))||(r=l.createElement("link"),Xn(r,"link",s),Nn(r),l.head.appendChild(r)))}}function j4(s,r){Ns.m(s,r);var a=Ci;if(a&&s){var l=r&&typeof r.as=="string"?r.as:"script",u='link[rel="modulepreload"][as="'+Vn(l)+'"][href="'+Vn(s)+'"]',p=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Mi(s)}if(!Mt.has(p)&&(s=me({rel:"modulepreload",href:s},r),Mt.set(p,s),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Va(p)))return}l=a.createElement("link"),Xn(l,"link",s),Nn(l),a.head.appendChild(l)}}}function y4(s,r,a){Ns.S(s,r,a);var l=Ci;if(l&&s){var u=as(l).hoistableStyles,p=ki(s);r=r||"default";var g=u.get(p);if(!g){var b={loading:0,preload:null};if(g=l.querySelector(Ha(p)))b.loading=5;else{s=me({rel:"stylesheet",href:s,"data-precedence":r},a),(a=Mt.get(p))&&jd(s,a);var N=g=l.createElement("link");Nn(N),Xn(N,"link",s),N._p=new Promise(function(M,P){N.onload=M,N.onerror=P}),N.addEventListener("load",function(){b.loading|=1}),N.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Al(g,r,l)}g={type:"stylesheet",instance:g,count:1,state:b},u.set(p,g)}}}function b4(s,r){Ns.X(s,r);var a=Ci;if(a&&s){var l=as(a).hoistableScripts,u=Mi(s),p=l.get(u);p||(p=a.querySelector(Va(u)),p||(s=me({src:s,async:!0},r),(r=Mt.get(u))&&yd(s,r),p=a.createElement("script"),Nn(p),Xn(p,"link",s),a.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(u,p))}}function S4(s,r){Ns.M(s,r);var a=Ci;if(a&&s){var l=as(a).hoistableScripts,u=Mi(s),p=l.get(u);p||(p=a.querySelector(Va(u)),p||(s=me({src:s,async:!0,type:"module"},r),(r=Mt.get(u))&&yd(s,r),p=a.createElement("script"),Nn(p),Xn(p,"link",s),a.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(u,p))}}function Ox(s,r,a,l){var u=(u=Ht.current)?Ml(u):null;if(!u)throw Error(o(446));switch(s){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(r=ki(a.href),a=as(u).hoistableStyles,l=a.get(r),l||(l={type:"style",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){s=ki(a.href);var p=as(u).hoistableStyles,g=p.get(s);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(s,g),(p=u.querySelector(Ha(s)))&&!p._p&&(g.instance=p,g.state.loading=5),Mt.has(s)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mt.set(s,a),p||N4(u,s,a,g.state))),r&&l===null)throw Error(o(528,""));return g}if(r&&l!==null)throw Error(o(529,""));return null;case"script":return r=a.async,a=a.src,typeof a=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Mi(a),a=as(u).hoistableScripts,l=a.get(r),l||(l={type:"script",instance:null,count:0,state:null},a.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,s))}}function ki(s){return'href="'+Vn(s)+'"'}function Ha(s){return'link[rel="stylesheet"]['+s+"]"}function Bx(s){return me({},s,{"data-precedence":s.precedence,precedence:null})}function N4(s,r,a,l){s.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=s.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),Xn(r,"link",a),Nn(r),s.head.appendChild(r))}function Mi(s){return'[src="'+Vn(s)+'"]'}function Va(s){return"script[async]"+s}function zx(s,r,a){if(r.count++,r.instance===null)switch(r.type){case"style":var l=s.querySelector('style[data-href~="'+Vn(a.href)+'"]');if(l)return r.instance=l,Nn(l),l;var u=me({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(s.ownerDocument||s).createElement("style"),Nn(l),Xn(l,"style",u),Al(l,a.precedence,s),r.instance=l;case"stylesheet":u=ki(a.href);var p=s.querySelector(Ha(u));if(p)return r.state.loading|=4,r.instance=p,Nn(p),p;l=Bx(a),(u=Mt.get(u))&&jd(l,u),p=(s.ownerDocument||s).createElement("link"),Nn(p);var g=p;return g._p=new Promise(function(b,N){g.onload=b,g.onerror=N}),Xn(p,"link",l),r.state.loading|=4,Al(p,a.precedence,s),r.instance=p;case"script":return p=Mi(a.src),(u=s.querySelector(Va(p)))?(r.instance=u,Nn(u),u):(l=a,(u=Mt.get(p))&&(l=me({},a),yd(l,u)),s=s.ownerDocument||s,u=s.createElement("script"),Nn(u),Xn(u,"link",l),s.head.appendChild(u),r.instance=u);case"void":return null;default:throw Error(o(443,r.type))}else r.type==="stylesheet"&&!(r.state.loading&4)&&(l=r.instance,r.state.loading|=4,Al(l,a.precedence,s));return r.instance}function Al(s,r,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,p=u,g=0;g<l.length;g++){var b=l[g];if(b.dataset.precedence===r)p=b;else if(p!==u)break}p?p.parentNode.insertBefore(s,p.nextSibling):(r=a.nodeType===9?a.head:a,r.insertBefore(s,r.firstChild))}function jd(s,r){s.crossOrigin==null&&(s.crossOrigin=r.crossOrigin),s.referrerPolicy==null&&(s.referrerPolicy=r.referrerPolicy),s.title==null&&(s.title=r.title)}function yd(s,r){s.crossOrigin==null&&(s.crossOrigin=r.crossOrigin),s.referrerPolicy==null&&(s.referrerPolicy=r.referrerPolicy),s.integrity==null&&(s.integrity=r.integrity)}var Rl=null;function Ux(s,r,a){if(Rl===null){var l=new Map,u=Rl=new Map;u.set(a,l)}else u=Rl,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(s))return l;for(l.set(s,null),a=a.getElementsByTagName(s),u=0;u<a.length;u++){var p=a[u];if(!(p[ur]||p[Sn]||s==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var g=p.getAttribute(r)||"";g=s+g;var b=l.get(g);b?b.push(p):l.set(g,[p])}}return l}function Px(s,r,a){s=s.ownerDocument||s,s.head.insertBefore(a,r==="title"?s.querySelector("head > title"):null)}function w4(s,r,a){if(a===1||r.itemProp!=null)return!1;switch(s){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return s=r.disabled,typeof r.precedence=="string"&&s==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Hx(s){return!(s.type==="stylesheet"&&!(s.state.loading&3))}var qa=null;function _4(){}function C4(s,r,a){if(qa===null)throw Error(o(475));var l=qa;if(r.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(r.state.loading&4)){if(r.instance===null){var u=ki(a.href),p=s.querySelector(Ha(u));if(p){s=p._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(l.count++,l=Ll.bind(l),s.then(l,l)),r.state.loading|=4,r.instance=p,Nn(p);return}p=s.ownerDocument||s,a=Bx(a),(u=Mt.get(u))&&jd(a,u),p=p.createElement("link"),Nn(p);var g=p;g._p=new Promise(function(b,N){g.onload=b,g.onerror=N}),Xn(p,"link",a),r.instance=p}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(r,s),(s=r.state.preload)&&!(r.state.loading&3)&&(l.count++,r=Ll.bind(l),s.addEventListener("load",r),s.addEventListener("error",r))}}function k4(){if(qa===null)throw Error(o(475));var s=qa;return s.stylesheets&&s.count===0&&bd(s,s.stylesheets),0<s.count?function(r){var a=setTimeout(function(){if(s.stylesheets&&bd(s,s.stylesheets),s.unsuspend){var l=s.unsuspend;s.unsuspend=null,l()}},6e4);return s.unsuspend=r,function(){s.unsuspend=null,clearTimeout(a)}}:null}function Ll(){if(this.count--,this.count===0){if(this.stylesheets)bd(this,this.stylesheets);else if(this.unsuspend){var s=this.unsuspend;this.unsuspend=null,s()}}}var Tl=null;function bd(s,r){s.stylesheets=null,s.unsuspend!==null&&(s.count++,Tl=new Map,r.forEach(M4,s),Tl=null,Ll.call(s))}function M4(s,r){if(!(r.state.loading&4)){var a=Tl.get(s);if(a)var l=a.get(null);else{a=new Map,Tl.set(s,a);for(var u=s.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<u.length;p++){var g=u[p];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),l=g)}l&&a.set(null,l)}u=r.instance,g=u.getAttribute("data-precedence"),p=a.get(g)||l,p===l&&a.set(null,u),a.set(g,u),this.count++,l=Ll.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),p?p.parentNode.insertBefore(u,p.nextSibling):(s=s.nodeType===9?s.head:s,s.insertBefore(u,s.firstChild)),r.state.loading|=4}}var Fa={$$typeof:_,Provider:null,Consumer:null,_currentValue:Te,_currentValue2:Te,_threadCount:0};function A4(s,r,a,l,u,p,g,b){this.tag=1,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rn(0),this.hiddenUpdates=rn(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=p,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function Vx(s,r,a,l,u,p,g,b,N,M,P,X){return s=new A4(s,r,a,g,b,N,M,X),r=1,p===!0&&(r|=24),p=Ct(3,null,null,r),s.current=p,p.stateNode=s,r=Jc(),r.refCount++,s.pooledCache=r,r.refCount++,p.memoizedState={element:l,isDehydrated:a,cache:r},Eu(p),s}function qx(s){return s?(s=ai,s):ai}function Fx(s,r,a,l,u,p){u=qx(u),l.context===null?l.context=u:l.pendingContext=u,l=Us(r),l.payload={element:a},p=p===void 0?null:p,p!==null&&(l.callback=p),a=Ps(s,l,r),a!==null&&(tt(a,s,r),ka(a,s,r))}function Xx(s,r){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var a=s.retryLane;s.retryLane=a!==0&&a<r?a:r}}function Sd(s,r){Xx(s,r),(s=s.alternate)&&Xx(s,r)}function Gx(s){if(s.tag===13){var r=Ts(s,67108864);r!==null&&tt(r,s,67108864),Sd(s,67108864)}}var El=!0;function R4(s,r,a,l){var u=Z.T;Z.T=null;var p=ne.p;try{ne.p=2,Nd(s,r,a,l)}finally{ne.p=p,Z.T=u}}function L4(s,r,a,l){var u=Z.T;Z.T=null;var p=ne.p;try{ne.p=8,Nd(s,r,a,l)}finally{ne.p=p,Z.T=u}}function Nd(s,r,a,l){if(El){var u=wd(l);if(u===null)dd(s,r,l,$l,a),Yx(s,l);else if(E4(u,s,r,a,l))l.stopPropagation();else if(Yx(s,l),r&4&&-1<T4.indexOf(s)){for(;u!==null;){var p=As(u);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var g=Ee(p.pendingLanes);if(g!==0){var b=p;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var N=1<<31-Jn(g);b.entanglements[1]|=N,g&=~N}Kt(p),!(pn&6)&&(gl=xt()+500,za(0))}}break;case 13:b=Ts(p,2),b!==null&&tt(b,p,2),yl(),Sd(p,2)}if(p=wd(l),p===null&&dd(s,r,l,$l,a),p===u)break;u=p}u!==null&&l.stopPropagation()}else dd(s,r,l,null,a)}}function wd(s){return s=Ge(s),_d(s)}var $l=null;function _d(s){if($l=null,s=is(s),s!==null){var r=W(s);if(r===null)s=null;else{var a=r.tag;if(a===13){if(s=ve(r),s!==null)return s;s=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;s=null}else r!==s&&(s=null)}}return $l=s,null}function Ix(s){switch(s){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mc()){case Zr:return 2;case Ki:return 8;case Kr:case Co:return 32;case Wr:return 268435456;default:return 32}default:return 32}}var Cd=!1,Is=null,Ys=null,Zs=null,Xa=new Map,Ga=new Map,Ks=[],T4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yx(s,r){switch(s){case"focusin":case"focusout":Is=null;break;case"dragenter":case"dragleave":Ys=null;break;case"mouseover":case"mouseout":Zs=null;break;case"pointerover":case"pointerout":Xa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(r.pointerId)}}function Ia(s,r,a,l,u,p){return s===null||s.nativeEvent!==p?(s={blockedOn:r,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[u]},r!==null&&(r=As(r),r!==null&&Gx(r)),s):(s.eventSystemFlags|=l,r=s.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),s)}function E4(s,r,a,l,u){switch(r){case"focusin":return Is=Ia(Is,s,r,a,l,u),!0;case"dragenter":return Ys=Ia(Ys,s,r,a,l,u),!0;case"mouseover":return Zs=Ia(Zs,s,r,a,l,u),!0;case"pointerover":var p=u.pointerId;return Xa.set(p,Ia(Xa.get(p)||null,s,r,a,l,u)),!0;case"gotpointercapture":return p=u.pointerId,Ga.set(p,Ia(Ga.get(p)||null,s,r,a,l,u)),!0}return!1}function Zx(s){var r=is(s.target);if(r!==null){var a=W(r);if(a!==null){if(r=a.tag,r===13){if(r=ve(a),r!==null){s.blockedOn=r,Ac(s.priority,function(){if(a.tag===13){var l=pt(),u=Ts(a,l);u!==null&&tt(u,a,l),Sd(a,l)}});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){s.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}s.blockedOn=null}function Dl(s){if(s.blockedOn!==null)return!1;for(var r=s.targetContainers;0<r.length;){var a=wd(s.nativeEvent);if(a===null){a=s.nativeEvent;var l=new a.constructor(a.type,a);Me=l,a.target.dispatchEvent(l),Me=null}else return r=As(a),r!==null&&Gx(r),s.blockedOn=a,!1;r.shift()}return!0}function Kx(s,r,a){Dl(s)&&a.delete(r)}function $4(){Cd=!1,Is!==null&&Dl(Is)&&(Is=null),Ys!==null&&Dl(Ys)&&(Ys=null),Zs!==null&&Dl(Zs)&&(Zs=null),Xa.forEach(Kx),Ga.forEach(Kx)}function Ol(s,r){s.blockedOn===r&&(s.blockedOn=null,Cd||(Cd=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,$4)))}var Bl=null;function Wx(s){Bl!==s&&(Bl=s,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bl===s&&(Bl=null);for(var r=0;r<s.length;r+=3){var a=s[r],l=s[r+1],u=s[r+2];if(typeof l!="function"){if(_d(l||a)===null)continue;break}var p=As(a);p!==null&&(s.splice(r,3),r-=3,fu(p,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function Ya(s){function r(N){return Ol(N,s)}Is!==null&&Ol(Is,s),Ys!==null&&Ol(Ys,s),Zs!==null&&Ol(Zs,s),Xa.forEach(r),Ga.forEach(r);for(var a=0;a<Ks.length;a++){var l=Ks[a];l.blockedOn===s&&(l.blockedOn=null)}for(;0<Ks.length&&(a=Ks[0],a.blockedOn===null);)Zx(a),a.blockedOn===null&&Ks.shift();if(a=(s.ownerDocument||s).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],p=a[l+1],g=u[In]||null;if(typeof p=="function")g||Wx(a);else if(g){var b=null;if(p&&p.hasAttribute("formAction")){if(u=p,g=p[In]||null)b=g.formAction;else if(_d(u)!==null)continue}else b=g.action;typeof b=="function"?a[l+1]=b:(a.splice(l,3),l-=3),Wx(a)}}}function kd(s){this._internalRoot=s}zl.prototype.render=kd.prototype.render=function(s){var r=this._internalRoot;if(r===null)throw Error(o(409));var a=r.current,l=pt();Fx(a,l,s,r,null,null)},zl.prototype.unmount=kd.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var r=s.containerInfo;s.tag===0&&Ni(),Fx(s.current,2,null,s,null,null),yl(),r[qt]=null}};function zl(s){this._internalRoot=s}zl.prototype.unstable_scheduleHydration=function(s){if(s){var r=Lo();s={blockedOn:null,target:s,priority:r};for(var a=0;a<Ks.length&&r!==0&&r<Ks[a].priority;a++);Ks.splice(a,0,s),a===0&&Zx(s)}};var Qx=e.version;if(Qx!=="19.0.0")throw Error(o(527,Qx,"19.0.0"));ne.findDOMNode=function(s){var r=s._reactInternals;if(r===void 0)throw typeof s.render=="function"?Error(o(188)):(s=Object.keys(s).join(","),Error(o(268,s)));return s=q(r),s=s!==null?ie(s):null,s=s===null?null:s.stateNode,s};var D4={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:Z,findFiberByHostInstance:is,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{ss=Ul.inject(D4),Gn=Ul}catch{}}return Ka.createRoot=function(s,r){if(!c(s))throw Error(o(299));var a=!1,l="",u=ff,p=xf,g=gf,b=null;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(u=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(g=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(b=r.unstable_transitionCallbacks)),r=Vx(s,1,!1,null,null,a,l,u,p,g,b,null),s[qt]=r.current,ud(s.nodeType===8?s.parentNode:s),new kd(r)},Ka.hydrateRoot=function(s,r,a){if(!c(s))throw Error(o(299));var l=!1,u="",p=ff,g=xf,b=gf,N=null,M=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(p=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(M=a.formState)),r=Vx(s,1,!0,r,a??null,l,u,p,g,b,N,M),r.context=qx(null),a=r.current,l=pt(),u=Us(l),u.callback=null,Ps(a,u,l),r.current.lanes=l,it(r,l),Kt(r),s[qt]=r.current,ud(s),new zl(r)},Ka.version="19.0.0",Ka}var l0;function G4(){if(l0)return Rd.exports;l0=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Rd.exports=X4(),Rd.exports}var I4=G4(),cc=Pv();/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},mo.apply(this,arguments)}var sr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(sr||(sr={}));const c0="popstate";function Y4(t){t===void 0&&(t={});function e(o,c){let{pathname:m,search:d,hash:h}=o.location;return dm("",{pathname:m,search:d,hash:h},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(o,c){return typeof c=="string"?c:ec(c)}return K4(e,i,null,t)}function kn(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Hv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Z4(){return Math.random().toString(36).substr(2,8)}function u0(t,e){return{usr:t.state,key:t.key,idx:e}}function dm(t,e,i,o){return i===void 0&&(i=null),mo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Hi(e):e,{state:i,key:e&&e.key||o||Z4()})}function ec(t){let{pathname:e="/",search:i="",hash:o=""}=t;return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function Hi(t){let e={};if(t){let i=t.indexOf("#");i>=0&&(e.hash=t.substr(i),t=t.substr(0,i));let o=t.indexOf("?");o>=0&&(e.search=t.substr(o),t=t.substr(0,o)),t&&(e.pathname=t)}return e}function K4(t,e,i,o){o===void 0&&(o={});let{window:c=document.defaultView,v5Compat:m=!1}=o,d=c.history,h=sr.Pop,f=null,x=v();x==null&&(x=0,d.replaceState(mo({},d.state,{idx:x}),""));function v(){return(d.state||{idx:null}).idx}function y(){h=sr.Pop;let k=v(),A=k==null?null:k-x;x=k,f&&f({action:h,location:L.location,delta:A})}function S(k,A){h=sr.Push;let O=dm(L.location,k,A);x=v()+1;let B=u0(O,x),F=L.createHref(O);try{d.pushState(B,"",F)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;c.location.assign(F)}m&&f&&f({action:h,location:L.location,delta:1})}function _(k,A){h=sr.Replace;let O=dm(L.location,k,A);x=v();let B=u0(O,x),F=L.createHref(O);d.replaceState(B,"",F),m&&f&&f({action:h,location:L.location,delta:0})}function T(k){let A=c.location.origin!=="null"?c.location.origin:c.location.href,O=typeof k=="string"?k:ec(k);return O=O.replace(/ $/,"%20"),kn(A,"No window.location.(origin|href) available to create URL for href: "+O),new URL(O,A)}let L={get action(){return h},get location(){return t(c,d)},listen(k){if(f)throw new Error("A history only accepts one active listener");return c.addEventListener(c0,y),f=k,()=>{c.removeEventListener(c0,y),f=null}},createHref(k){return e(c,k)},createURL:T,encodeLocation(k){let A=T(k);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:S,replace:_,go(k){return d.go(k)}};return L}var d0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(d0||(d0={}));function W4(t,e,i){i===void 0&&(i="/");let o=typeof e=="string"?Hi(e):e,c=Hm(o.pathname||"/",i);if(c==null)return null;let m=Vv(t);Q4(m);let d=null;for(let h=0;d==null&&h<m.length;++h){let f=c5(c);d=o5(m[h],f)}return d}function Vv(t,e,i,o){e===void 0&&(e=[]),i===void 0&&(i=[]),o===void 0&&(o="");let c=(m,d,h)=>{let f={relativePath:h===void 0?m.path||"":h,caseSensitive:m.caseSensitive===!0,childrenIndex:d,route:m};f.relativePath.startsWith("/")&&(kn(f.relativePath.startsWith(o),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(o.length));let x=rr([o,f.relativePath]),v=i.concat(f);m.children&&m.children.length>0&&(kn(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+x+'".')),Vv(m.children,e,v,x)),!(m.path==null&&!m.index)&&e.push({path:x,score:i5(x,m.index),routesMeta:v})};return t.forEach((m,d)=>{var h;if(m.path===""||!((h=m.path)!=null&&h.includes("?")))c(m,d);else for(let f of qv(m.path))c(m,d,f)}),e}function qv(t){let e=t.split("/");if(e.length===0)return[];let[i,...o]=e,c=i.endsWith("?"),m=i.replace(/\?$/,"");if(o.length===0)return c?[m,""]:[m];let d=qv(o.join("/")),h=[];return h.push(...d.map(f=>f===""?m:[m,f].join("/"))),c&&h.push(...d),h.map(f=>t.startsWith("/")&&f===""?"/":f)}function Q4(t){t.sort((e,i)=>e.score!==i.score?i.score-e.score:a5(e.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}const J4=/^:[\w-]+$/,e5=3,n5=2,t5=1,s5=10,r5=-2,m0=t=>t==="*";function i5(t,e){let i=t.split("/"),o=i.length;return i.some(m0)&&(o+=r5),e&&(o+=n5),i.filter(c=>!m0(c)).reduce((c,m)=>c+(J4.test(m)?e5:m===""?t5:s5),o)}function a5(t,e){return t.length===e.length&&t.slice(0,-1).every((o,c)=>o===e[c])?t[t.length-1]-e[e.length-1]:0}function o5(t,e){let{routesMeta:i}=t,o={},c="/",m=[];for(let d=0;d<i.length;++d){let h=i[d],f=d===i.length-1,x=c==="/"?e:e.slice(c.length)||"/",v=Fv({path:h.relativePath,caseSensitive:h.caseSensitive,end:f},x);if(!v)return null;Object.assign(o,v.params);let y=h.route;m.push({params:o,pathname:rr([c,v.pathname]),pathnameBase:p5(rr([c,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(c=rr([c,v.pathnameBase]))}return m}function Fv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,o]=l5(t.path,t.caseSensitive,t.end),c=e.match(i);if(!c)return null;let m=c[0],d=m.replace(/(.)\/+$/,"$1"),h=c.slice(1);return{params:o.reduce((x,v,y)=>{let{paramName:S,isOptional:_}=v;if(S==="*"){let L=h[y]||"";d=m.slice(0,m.length-L.length).replace(/(.)\/+$/,"$1")}const T=h[y];return _&&!T?x[S]=void 0:x[S]=(T||"").replace(/%2F/g,"/"),x},{}),pathname:m,pathnameBase:d,pattern:t}}function l5(t,e,i){e===void 0&&(e=!1),i===void 0&&(i=!0),Hv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let o=[],c="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,f)=>(o.push({paramName:h,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(o.push({paramName:"*"}),c+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?c+="\\/*$":t!==""&&t!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,e?void 0:"i"),o]}function c5(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Hm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,o=t.charAt(i);return o&&o!=="/"?null:t.slice(i)||"/"}function u5(t,e){e===void 0&&(e="/");let{pathname:i,search:o="",hash:c=""}=typeof t=="string"?Hi(t):t;return{pathname:i?i.startsWith("/")?i:d5(i,e):e,search:h5(o),hash:f5(c)}}function d5(t,e){let i=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(c=>{c===".."?i.length>1&&i.pop():c!=="."&&i.push(c)}),i.length>1?i.join("/"):"/"}function $d(t,e,i,o){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function m5(t){return t.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Xv(t,e){let i=m5(t);return e?i.map((o,c)=>c===t.length-1?o.pathname:o.pathnameBase):i.map(o=>o.pathnameBase)}function Gv(t,e,i,o){o===void 0&&(o=!1);let c;typeof t=="string"?c=Hi(t):(c=mo({},t),kn(!c.pathname||!c.pathname.includes("?"),$d("?","pathname","search",c)),kn(!c.pathname||!c.pathname.includes("#"),$d("#","pathname","hash",c)),kn(!c.search||!c.search.includes("#"),$d("#","search","hash",c)));let m=t===""||c.pathname==="",d=m?"/":c.pathname,h;if(d==null)h=i;else{let y=e.length-1;if(!o&&d.startsWith("..")){let S=d.split("/");for(;S[0]==="..";)S.shift(),y-=1;c.pathname=S.join("/")}h=y>=0?e[y]:"/"}let f=u5(c,h),x=d&&d!=="/"&&d.endsWith("/"),v=(m||d===".")&&i.endsWith("/");return!f.pathname.endsWith("/")&&(x||v)&&(f.pathname+="/"),f}const rr=t=>t.join("/").replace(/\/\/+/g,"/"),p5=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),h5=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,f5=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function x5(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Iv=["post","put","patch","delete"];new Set(Iv);const g5=["get",...Iv];new Set(g5);/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function po(){return po=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},po.apply(this,arguments)}const Vm=j.createContext(null),v5=j.createContext(null),Pr=j.createContext(null),uc=j.createContext(null),ar=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Yv=j.createContext(null);function j5(t,e){let{relative:i}=e===void 0?{}:e;Vi()||kn(!1);let{basename:o,navigator:c}=j.useContext(Pr),{hash:m,pathname:d,search:h}=qm(t,{relative:i}),f=d;return o!=="/"&&(f=d==="/"?o:rr([o,d])),c.createHref({pathname:f,search:h,hash:m})}function Vi(){return j.useContext(uc)!=null}function or(){return Vi()||kn(!1),j.useContext(uc).location}function y5(t){Vi()||kn(!1);let{pathname:e}=or();return j.useMemo(()=>Fv(t,e),[e,t])}function Zv(t){j.useContext(Pr).static||j.useLayoutEffect(t)}function dc(){let{isDataRoute:t}=j.useContext(ar);return t?$5():b5()}function b5(){Vi()||kn(!1);let t=j.useContext(Vm),{basename:e,future:i,navigator:o}=j.useContext(Pr),{matches:c}=j.useContext(ar),{pathname:m}=or(),d=JSON.stringify(Xv(c,i.v7_relativeSplatPath)),h=j.useRef(!1);return Zv(()=>{h.current=!0}),j.useCallback(function(x,v){if(v===void 0&&(v={}),!h.current)return;if(typeof x=="number"){o.go(x);return}let y=Gv(x,JSON.parse(d),m,v.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:rr([e,y.pathname])),(v.replace?o.replace:o.push)(y,v.state,v)},[e,o,d,m,t])}const S5=j.createContext(null);function mc(t){let e=j.useContext(ar).outlet;return e&&j.createElement(S5.Provider,{value:t},e)}function qm(t,e){let{relative:i}=e===void 0?{}:e,{future:o}=j.useContext(Pr),{matches:c}=j.useContext(ar),{pathname:m}=or(),d=JSON.stringify(Xv(c,o.v7_relativeSplatPath));return j.useMemo(()=>Gv(t,JSON.parse(d),m,i==="path"),[t,d,m,i])}function N5(t,e){return w5(t,e)}function w5(t,e,i,o){Vi()||kn(!1);let{navigator:c}=j.useContext(Pr),{matches:m}=j.useContext(ar),d=m[m.length-1],h=d?d.params:{};d&&d.pathname;let f=d?d.pathnameBase:"/";d&&d.route;let x=or(),v;if(e){var y;let k=typeof e=="string"?Hi(e):e;f==="/"||(y=k.pathname)!=null&&y.startsWith(f)||kn(!1),v=k}else v=x;let S=v.pathname||"/",_=S;if(f!=="/"){let k=f.replace(/^\//,"").split("/");_="/"+S.replace(/^\//,"").split("/").slice(k.length).join("/")}let T=W4(t,{pathname:_}),L=A5(T&&T.map(k=>Object.assign({},k,{params:Object.assign({},h,k.params),pathname:rr([f,c.encodeLocation?c.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?f:rr([f,c.encodeLocation?c.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),m,i,o);return e&&L?j.createElement(uc.Provider,{value:{location:po({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:sr.Pop}},L):L}function _5(){let t=E5(),e=x5(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,c={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),i?j.createElement("pre",{style:c},i):null,null)}const C5=j.createElement(_5,null);class k5 extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?j.createElement(ar.Provider,{value:this.props.routeContext},j.createElement(Yv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function M5(t){let{routeContext:e,match:i,children:o}=t,c=j.useContext(Vm);return c&&c.static&&c.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=i.route.id),j.createElement(ar.Provider,{value:e},o)}function A5(t,e,i,o){var c;if(e===void 0&&(e=[]),i===void 0&&(i=null),o===void 0&&(o=null),t==null){var m;if((m=i)!=null&&m.errors)t=i.matches;else return null}let d=t,h=(c=i)==null?void 0:c.errors;if(h!=null){let v=d.findIndex(y=>y.route.id&&(h==null?void 0:h[y.route.id])!==void 0);v>=0||kn(!1),d=d.slice(0,Math.min(d.length,v+1))}let f=!1,x=-1;if(i&&o&&o.v7_partialHydration)for(let v=0;v<d.length;v++){let y=d[v];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(x=v),y.route.id){let{loaderData:S,errors:_}=i,T=y.route.loader&&S[y.route.id]===void 0&&(!_||_[y.route.id]===void 0);if(y.route.lazy||T){f=!0,x>=0?d=d.slice(0,x+1):d=[d[0]];break}}}return d.reduceRight((v,y,S)=>{let _,T=!1,L=null,k=null;i&&(_=h&&y.route.id?h[y.route.id]:void 0,L=y.route.errorElement||C5,f&&(x<0&&S===0?(T=!0,k=null):x===S&&(T=!0,k=y.route.hydrateFallbackElement||null)));let A=e.concat(d.slice(0,S+1)),O=()=>{let B;return _?B=L:T?B=k:y.route.Component?B=j.createElement(y.route.Component,null):y.route.element?B=y.route.element:B=v,j.createElement(M5,{match:y,routeContext:{outlet:v,matches:A,isDataRoute:i!=null},children:B})};return i&&(y.route.ErrorBoundary||y.route.errorElement||S===0)?j.createElement(k5,{location:i.location,revalidation:i.revalidation,component:L,error:_,children:O(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):O()},null)}var Kv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Kv||{}),nc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(nc||{});function R5(t){let e=j.useContext(Vm);return e||kn(!1),e}function L5(t){let e=j.useContext(v5);return e||kn(!1),e}function T5(t){let e=j.useContext(ar);return e||kn(!1),e}function Wv(t){let e=T5(),i=e.matches[e.matches.length-1];return i.route.id||kn(!1),i.route.id}function E5(){var t;let e=j.useContext(Yv),i=L5(nc.UseRouteError),o=Wv(nc.UseRouteError);return e!==void 0?e:(t=i.errors)==null?void 0:t[o]}function $5(){let{router:t}=R5(Kv.UseNavigateStable),e=Wv(nc.UseNavigateStable),i=j.useRef(!1);return Zv(()=>{i.current=!0}),j.useCallback(function(c,m){m===void 0&&(m={}),i.current&&(typeof c=="number"?t.navigate(c):t.navigate(c,po({fromRouteId:e},m)))},[t,e])}function D5(t){return mc(t.context)}function Bt(t){kn(!1)}function O5(t){let{basename:e="/",children:i=null,location:o,navigationType:c=sr.Pop,navigator:m,static:d=!1,future:h}=t;Vi()&&kn(!1);let f=e.replace(/^\/*/,"/"),x=j.useMemo(()=>({basename:f,navigator:m,static:d,future:po({v7_relativeSplatPath:!1},h)}),[f,h,m,d]);typeof o=="string"&&(o=Hi(o));let{pathname:v="/",search:y="",hash:S="",state:_=null,key:T="default"}=o,L=j.useMemo(()=>{let k=Hm(v,f);return k==null?null:{location:{pathname:k,search:y,hash:S,state:_,key:T},navigationType:c}},[f,v,y,S,_,T,c]);return L==null?null:j.createElement(Pr.Provider,{value:x},j.createElement(uc.Provider,{children:i,value:L}))}function B5(t){let{children:e,location:i}=t;return N5(mm(e),i)}new Promise(()=>{});function mm(t,e){e===void 0&&(e=[]);let i=[];return j.Children.forEach(t,(o,c)=>{if(!j.isValidElement(o))return;let m=[...e,c];if(o.type===j.Fragment){i.push.apply(i,mm(o.props.children,m));return}o.type!==Bt&&kn(!1),!o.props.index||!o.props.children||kn(!1);let d={id:o.props.id||m.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=mm(o.props.children,m)),i.push(d)}),i}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pm(){return pm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},pm.apply(this,arguments)}function z5(t,e){if(t==null)return{};var i={},o=Object.keys(t),c,m;for(m=0;m<o.length;m++)c=o[m],!(e.indexOf(c)>=0)&&(i[c]=t[c]);return i}function U5(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function P5(t,e){return t.button===0&&(!e||e==="_self")&&!U5(t)}const H5=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],V5="6";try{window.__reactRouterVersion=V5}catch{}const q5="startTransition",p0=H4[q5];function F5(t){let{basename:e,children:i,future:o,window:c}=t,m=j.useRef();m.current==null&&(m.current=Y4({window:c,v5Compat:!0}));let d=m.current,[h,f]=j.useState({action:d.action,location:d.location}),{v7_startTransition:x}=o||{},v=j.useCallback(y=>{x&&p0?p0(()=>f(y)):f(y)},[f,x]);return j.useLayoutEffect(()=>d.listen(v),[d,v]),j.createElement(O5,{basename:e,children:i,location:h.location,navigationType:h.action,navigator:d,future:o})}const X5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",G5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$n=j.forwardRef(function(e,i){let{onClick:o,relative:c,reloadDocument:m,replace:d,state:h,target:f,to:x,preventScrollReset:v,unstable_viewTransition:y}=e,S=z5(e,H5),{basename:_}=j.useContext(Pr),T,L=!1;if(typeof x=="string"&&G5.test(x)&&(T=x,X5))try{let B=new URL(window.location.href),F=x.startsWith("//")?new URL(B.protocol+x):new URL(x),z=Hm(F.pathname,_);F.origin===B.origin&&z!=null?x=z+F.search+F.hash:L=!0}catch{}let k=j5(x,{relative:c}),A=I5(x,{replace:d,state:h,target:f,preventScrollReset:v,relative:c,unstable_viewTransition:y});function O(B){o&&o(B),B.defaultPrevented||A(B)}return j.createElement("a",pm({},S,{href:T||k,onClick:L||m?o:O,ref:i,target:f}))});var h0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(h0||(h0={}));var f0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(f0||(f0={}));function I5(t,e){let{target:i,replace:o,state:c,preventScrollReset:m,relative:d,unstable_viewTransition:h}=e===void 0?{}:e,f=dc(),x=or(),v=qm(t,{relative:d});return j.useCallback(y=>{if(P5(y,i)){y.preventDefault();let S=o!==void 0?o:ec(x)===ec(v);f(t,{replace:S,state:c,preventScrollReset:m,relative:d,unstable_viewTransition:h})}},[x,f,v,o,c,i,t,m,d,h])}function Dd(){return n.jsxs("div",{className:"w-full h-64 flex flex-col items-center justify-center",children:[n.jsx("div",{className:"loader"}),n.jsx("div",{className:"text-sm text-blue-500 mt-3",children:"page loading..."})]})}function Qv(t){var e,i,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var c=t.length;for(e=0;e<c;e++)t[e]&&(i=Qv(t[e]))&&(o&&(o+=" "),o+=i)}else for(i in t)t[i]&&(o&&(o+=" "),o+=i);return o}function Fe(){for(var t,e,i=0,o="",c=arguments.length;i<c;i++)(t=arguments[i])&&(e=Qv(t))&&(o&&(o+=" "),o+=e);return o}const Fm="-";function Y5(t){const e=K5(t),{conflictingClassGroups:i,conflictingClassGroupModifiers:o}=t;function c(d){const h=d.split(Fm);return h[0]===""&&h.length!==1&&h.shift(),Jv(h,e)||Z5(d)}function m(d,h){const f=i[d]||[];return h&&o[d]?[...f,...o[d]]:f}return{getClassGroupId:c,getConflictingClassGroupIds:m}}function Jv(t,e){var d;if(t.length===0)return e.classGroupId;const i=t[0],o=e.nextPart.get(i),c=o?Jv(t.slice(1),o):void 0;if(c)return c;if(e.validators.length===0)return;const m=t.join(Fm);return(d=e.validators.find(({validator:h})=>h(m)))==null?void 0:d.classGroupId}const x0=/^\[(.+)\]$/;function Z5(t){if(x0.test(t)){const e=x0.exec(t)[1],i=e==null?void 0:e.substring(0,e.indexOf(":"));if(i)return"arbitrary.."+i}}function K5(t){const{theme:e,prefix:i}=t,o={nextPart:new Map,validators:[]};return Q5(Object.entries(t.classGroups),i).forEach(([m,d])=>{hm(d,o,m,e)}),o}function hm(t,e,i,o){t.forEach(c=>{if(typeof c=="string"){const m=c===""?e:g0(e,c);m.classGroupId=i;return}if(typeof c=="function"){if(W5(c)){hm(c(o),e,i,o);return}e.validators.push({validator:c,classGroupId:i});return}Object.entries(c).forEach(([m,d])=>{hm(d,g0(e,m),i,o)})})}function g0(t,e){let i=t;return e.split(Fm).forEach(o=>{i.nextPart.has(o)||i.nextPart.set(o,{nextPart:new Map,validators:[]}),i=i.nextPart.get(o)}),i}function W5(t){return t.isThemeGetter}function Q5(t,e){return e?t.map(([i,o])=>{const c=o.map(m=>typeof m=="string"?e+m:typeof m=="object"?Object.fromEntries(Object.entries(m).map(([d,h])=>[e+d,h])):m);return[i,c]}):t}function J5(t){if(t<1)return{get:()=>{},set:()=>{}};let e=0,i=new Map,o=new Map;function c(m,d){i.set(m,d),e++,e>t&&(e=0,o=i,i=new Map)}return{get(m){let d=i.get(m);if(d!==void 0)return d;if((d=o.get(m))!==void 0)return c(m,d),d},set(m,d){i.has(m)?i.set(m,d):c(m,d)}}}const ej="!";function e3(t){const e=t.separator,i=e.length===1,o=e[0],c=e.length;return function(d){const h=[];let f=0,x=0,v;for(let L=0;L<d.length;L++){let k=d[L];if(f===0){if(k===o&&(i||d.slice(L,L+c)===e)){h.push(d.slice(x,L)),x=L+c;continue}if(k==="/"){v=L;continue}}k==="["?f++:k==="]"&&f--}const y=h.length===0?d:d.substring(x),S=y.startsWith(ej),_=S?y.substring(1):y,T=v&&v>x?v-x:void 0;return{modifiers:h,hasImportantModifier:S,baseClassName:_,maybePostfixModifierPosition:T}}}function n3(t){if(t.length<=1)return t;const e=[];let i=[];return t.forEach(o=>{o[0]==="["?(e.push(...i.sort(),o),i=[]):i.push(o)}),e.push(...i.sort()),e}function t3(t){return{cache:J5(t.cacheSize),splitModifiers:e3(t),...Y5(t)}}const s3=/\s+/;function r3(t,e){const{splitModifiers:i,getClassGroupId:o,getConflictingClassGroupIds:c}=e,m=new Set;return t.trim().split(s3).map(d=>{const{modifiers:h,hasImportantModifier:f,baseClassName:x,maybePostfixModifierPosition:v}=i(d);let y=o(v?x.substring(0,v):x),S=!!v;if(!y){if(!v)return{isTailwindClass:!1,originalClassName:d};if(y=o(x),!y)return{isTailwindClass:!1,originalClassName:d};S=!1}const _=n3(h).join(":");return{isTailwindClass:!0,modifierId:f?_+ej:_,classGroupId:y,originalClassName:d,hasPostfixModifier:S}}).reverse().filter(d=>{if(!d.isTailwindClass)return!0;const{modifierId:h,classGroupId:f,hasPostfixModifier:x}=d,v=h+f;return m.has(v)?!1:(m.add(v),c(f,x).forEach(y=>m.add(h+y)),!0)}).reverse().map(d=>d.originalClassName).join(" ")}function i3(){let t=0,e,i,o="";for(;t<arguments.length;)(e=arguments[t++])&&(i=nj(e))&&(o&&(o+=" "),o+=i);return o}function nj(t){if(typeof t=="string")return t;let e,i="";for(let o=0;o<t.length;o++)t[o]&&(e=nj(t[o]))&&(i&&(i+=" "),i+=e);return i}function a3(t,...e){let i,o,c,m=d;function d(f){const x=e.reduce((v,y)=>y(v),t());return i=t3(x),o=i.cache.get,c=i.cache.set,m=h,h(f)}function h(f){const x=o(f);if(x)return x;const v=r3(f,i);return c(f,v),v}return function(){return m(i3.apply(null,arguments))}}function ln(t){const e=i=>i[t]||[];return e.isThemeGetter=!0,e}const tj=/^\[(?:([a-z-]+):)?(.+)\]$/i,o3=/^\d+\/\d+$/,l3=new Set(["px","full","screen"]),c3=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,u3=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,d3=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,m3=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,p3=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function ws(t){return Or(t)||l3.has(t)||o3.test(t)}function Qs(t){return qi(t,"length",b3)}function Or(t){return!!t&&!Number.isNaN(Number(t))}function Pl(t){return qi(t,"number",Or)}function Wa(t){return!!t&&Number.isInteger(Number(t))}function h3(t){return t.endsWith("%")&&Or(t.slice(0,-1))}function Re(t){return tj.test(t)}function Js(t){return c3.test(t)}const f3=new Set(["length","size","percentage"]);function x3(t){return qi(t,f3,sj)}function g3(t){return qi(t,"position",sj)}const v3=new Set(["image","url"]);function j3(t){return qi(t,v3,N3)}function y3(t){return qi(t,"",S3)}function Qa(){return!0}function qi(t,e,i){const o=tj.exec(t);return o?o[1]?typeof e=="string"?o[1]===e:e.has(o[1]):i(o[2]):!1}function b3(t){return u3.test(t)&&!d3.test(t)}function sj(){return!1}function S3(t){return m3.test(t)}function N3(t){return p3.test(t)}function w3(){const t=ln("colors"),e=ln("spacing"),i=ln("blur"),o=ln("brightness"),c=ln("borderColor"),m=ln("borderRadius"),d=ln("borderSpacing"),h=ln("borderWidth"),f=ln("contrast"),x=ln("grayscale"),v=ln("hueRotate"),y=ln("invert"),S=ln("gap"),_=ln("gradientColorStops"),T=ln("gradientColorStopPositions"),L=ln("inset"),k=ln("margin"),A=ln("opacity"),O=ln("padding"),B=ln("saturate"),F=ln("scale"),z=ln("sepia"),Y=ln("skew"),de=ln("space"),te=ln("translate"),Z=()=>["auto","contain","none"],me=()=>["auto","hidden","clip","visible","scroll"],De=()=>["auto",Re,e],ge=()=>[Re,e],tn=()=>["",ws,Qs],We=()=>["auto",Or,Re],Xe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],I=()=>["solid","dashed","dotted","double","none"],J=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],W=()=>["start","end","center","between","around","evenly","stretch"],ve=()=>["","0",Re],w=()=>["auto","avoid","all","avoid-page","page","left","right","column"],q=()=>[Or,Pl],ie=()=>[Or,Re];return{cacheSize:500,separator:":",theme:{colors:[Qa],spacing:[ws,Qs],blur:["none","",Js,Re],brightness:q(),borderColor:[t],borderRadius:["none","","full",Js,Re],borderSpacing:ge(),borderWidth:tn(),contrast:q(),grayscale:ve(),hueRotate:ie(),invert:ve(),gap:ge(),gradientColorStops:[t],gradientColorStopPositions:[h3,Qs],inset:De(),margin:De(),opacity:q(),padding:ge(),saturate:q(),scale:q(),sepia:ve(),skew:ie(),space:ge(),translate:ge()},classGroups:{aspect:[{aspect:["auto","square","video",Re]}],container:["container"],columns:[{columns:[Js]}],"break-after":[{"break-after":w()}],"break-before":[{"break-before":w()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Xe(),Re]}],overflow:[{overflow:me()}],"overflow-x":[{"overflow-x":me()}],"overflow-y":[{"overflow-y":me()}],overscroll:[{overscroll:Z()}],"overscroll-x":[{"overscroll-x":Z()}],"overscroll-y":[{"overscroll-y":Z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[L]}],"inset-x":[{"inset-x":[L]}],"inset-y":[{"inset-y":[L]}],start:[{start:[L]}],end:[{end:[L]}],top:[{top:[L]}],right:[{right:[L]}],bottom:[{bottom:[L]}],left:[{left:[L]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Wa,Re]}],basis:[{basis:De()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Re]}],grow:[{grow:ve()}],shrink:[{shrink:ve()}],order:[{order:["first","last","none",Wa,Re]}],"grid-cols":[{"grid-cols":[Qa]}],"col-start-end":[{col:["auto",{span:["full",Wa,Re]},Re]}],"col-start":[{"col-start":We()}],"col-end":[{"col-end":We()}],"grid-rows":[{"grid-rows":[Qa]}],"row-start-end":[{row:["auto",{span:[Wa,Re]},Re]}],"row-start":[{"row-start":We()}],"row-end":[{"row-end":We()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Re]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Re]}],gap:[{gap:[S]}],"gap-x":[{"gap-x":[S]}],"gap-y":[{"gap-y":[S]}],"justify-content":[{justify:["normal",...W()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...W(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...W(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[O]}],px:[{px:[O]}],py:[{py:[O]}],ps:[{ps:[O]}],pe:[{pe:[O]}],pt:[{pt:[O]}],pr:[{pr:[O]}],pb:[{pb:[O]}],pl:[{pl:[O]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],ms:[{ms:[k]}],me:[{me:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[de]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[de]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Re,e]}],"min-w":[{"min-w":[Re,e,"min","max","fit"]}],"max-w":[{"max-w":[Re,e,"none","full","min","max","fit","prose",{screen:[Js]},Js]}],h:[{h:[Re,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Re,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Re,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Re,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Js,Qs]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Pl]}],"font-family":[{font:[Qa]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Re]}],"line-clamp":[{"line-clamp":["none",Or,Pl]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",ws,Re]}],"list-image":[{"list-image":["none",Re]}],"list-style-type":[{list:["none","disc","decimal",Re]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[A]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[A]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...I(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",ws,Qs]}],"underline-offset":[{"underline-offset":["auto",ws,Re]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ge()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Re]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Re]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[A]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Xe(),g3]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",x3]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},j3]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[T]}],"gradient-via-pos":[{via:[T]}],"gradient-to-pos":[{to:[T]}],"gradient-from":[{from:[_]}],"gradient-via":[{via:[_]}],"gradient-to":[{to:[_]}],rounded:[{rounded:[m]}],"rounded-s":[{"rounded-s":[m]}],"rounded-e":[{"rounded-e":[m]}],"rounded-t":[{"rounded-t":[m]}],"rounded-r":[{"rounded-r":[m]}],"rounded-b":[{"rounded-b":[m]}],"rounded-l":[{"rounded-l":[m]}],"rounded-ss":[{"rounded-ss":[m]}],"rounded-se":[{"rounded-se":[m]}],"rounded-ee":[{"rounded-ee":[m]}],"rounded-es":[{"rounded-es":[m]}],"rounded-tl":[{"rounded-tl":[m]}],"rounded-tr":[{"rounded-tr":[m]}],"rounded-br":[{"rounded-br":[m]}],"rounded-bl":[{"rounded-bl":[m]}],"border-w":[{border:[h]}],"border-w-x":[{"border-x":[h]}],"border-w-y":[{"border-y":[h]}],"border-w-s":[{"border-s":[h]}],"border-w-e":[{"border-e":[h]}],"border-w-t":[{"border-t":[h]}],"border-w-r":[{"border-r":[h]}],"border-w-b":[{"border-b":[h]}],"border-w-l":[{"border-l":[h]}],"border-opacity":[{"border-opacity":[A]}],"border-style":[{border:[...I(),"hidden"]}],"divide-x":[{"divide-x":[h]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[h]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[A]}],"divide-style":[{divide:I()}],"border-color":[{border:[c]}],"border-color-x":[{"border-x":[c]}],"border-color-y":[{"border-y":[c]}],"border-color-t":[{"border-t":[c]}],"border-color-r":[{"border-r":[c]}],"border-color-b":[{"border-b":[c]}],"border-color-l":[{"border-l":[c]}],"divide-color":[{divide:[c]}],"outline-style":[{outline:["",...I()]}],"outline-offset":[{"outline-offset":[ws,Re]}],"outline-w":[{outline:[ws,Qs]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:tn()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[A]}],"ring-offset-w":[{"ring-offset":[ws,Qs]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Js,y3]}],"shadow-color":[{shadow:[Qa]}],opacity:[{opacity:[A]}],"mix-blend":[{"mix-blend":[...J(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":J()}],filter:[{filter:["","none"]}],blur:[{blur:[i]}],brightness:[{brightness:[o]}],contrast:[{contrast:[f]}],"drop-shadow":[{"drop-shadow":["","none",Js,Re]}],grayscale:[{grayscale:[x]}],"hue-rotate":[{"hue-rotate":[v]}],invert:[{invert:[y]}],saturate:[{saturate:[B]}],sepia:[{sepia:[z]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[i]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[f]}],"backdrop-grayscale":[{"backdrop-grayscale":[x]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[v]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[A]}],"backdrop-saturate":[{"backdrop-saturate":[B]}],"backdrop-sepia":[{"backdrop-sepia":[z]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[d]}],"border-spacing-x":[{"border-spacing-x":[d]}],"border-spacing-y":[{"border-spacing-y":[d]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Re]}],duration:[{duration:ie()}],ease:[{ease:["linear","in","out","in-out",Re]}],delay:[{delay:ie()}],animate:[{animate:["none","spin","ping","pulse","bounce",Re]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[F]}],"scale-x":[{"scale-x":[F]}],"scale-y":[{"scale-y":[F]}],rotate:[{rotate:[Wa,Re]}],"translate-x":[{"translate-x":[te]}],"translate-y":[{"translate-y":[te]}],"skew-x":[{"skew-x":[Y]}],"skew-y":[{"skew-y":[Y]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Re]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Re]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ge()}],"scroll-mx":[{"scroll-mx":ge()}],"scroll-my":[{"scroll-my":ge()}],"scroll-ms":[{"scroll-ms":ge()}],"scroll-me":[{"scroll-me":ge()}],"scroll-mt":[{"scroll-mt":ge()}],"scroll-mr":[{"scroll-mr":ge()}],"scroll-mb":[{"scroll-mb":ge()}],"scroll-ml":[{"scroll-ml":ge()}],"scroll-p":[{"scroll-p":ge()}],"scroll-px":[{"scroll-px":ge()}],"scroll-py":[{"scroll-py":ge()}],"scroll-ps":[{"scroll-ps":ge()}],"scroll-pe":[{"scroll-pe":ge()}],"scroll-pt":[{"scroll-pt":ge()}],"scroll-pr":[{"scroll-pr":ge()}],"scroll-pb":[{"scroll-pb":ge()}],"scroll-pl":[{"scroll-pl":ge()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Re]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[ws,Qs,Pl]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Hr=a3(w3);function Vr(t){const{children:e,className:i="",end:o=!0,activeName:c,to:m,onClick:d,...h}=t,f=qm(m);let x=y5({path:f.pathname,end:o});const v=Hr(Fe(i,"transition cursor-pointer",{[c]:!!x}));function y(S){x&&S.preventDefault(),d&&d(S)}return n.jsx($n,{className:v,to:m,...h,onClick:y,children:e})}function Xm(t){const{onClose:e,children:i,ref:o}=t,[c,m]=j.useState(!1),[d,h]=j.useState(!1);j.useImperativeHandle(o,()=>({show:()=>{m(!0),document.body.style.overflow="hidden",h(!0)},close:()=>{document.body.style.overflow="visible",m(!1)}}));const f=Fe("modal",{"animation-in":c,"animation-out":!c});function x(){c||h(!1)}function v(){m(!1),document.body.style.overflow="visible",e&&e()}return d?cc.createPortal(n.jsx("div",{onAnimationEnd:x,className:f,onClick:v,children:i}),document.body):null}function rj(t){const{when:e,fallback:i=null,children:o}=t;return e?o:i}function _3(t,e){let i="bg-gray-100 text-gray-500",o="hover:bg-gray-200 active:bg-gray-300";return e&&(i="bg-transparent text-gray-500",o="hover:bg-gray-50 active:bg-gray-100 hover:text-gray-600 active:text-gray-700"),t?Fe("opacity-70 cursor-not-allowed",i):Fe(i,o)}function C3(t,e){let i="bg-blue-500 text-white",o="hover:bg-blue-600 active:bg-blue-700";return e&&(i="bg-transparent text-blue-500",o="hover:bg-blue-50 active:bg-blue-100 hover:text-blue-600 active:text-blue-700"),t?Fe("opacity-70 cursor-not-allowed",i):Fe(i,o)}function k3(t,e){let i="bg-red-500 text-white",o="hover:bg-red-600 active:bg-red-700";return e&&(i="bg-transparent text-red-500",o="hover:bg-red-50 active:bg-red-100 hover:text-red-600 active:text-red-700"),t?Fe("opacity-70 cursor-not-allowed",i):Fe(i,o)}function M3(t,e){let i="bg-green-500 text-white",o="hover:bg-green-600 active:bg-green-700";return e&&(i="bg-transparent text-green-500",o="hover:bg-green-50 active:bg-green-100 hover:text-green-600 active:text-green-700"),t?Fe("opacity-70 cursor-not-allowed",i):Fe(i,o)}function A3(t){let e="bg-white border-sky-300 text-sky-500",i="hover:border-sky-400 active:bg-sky-500 hover:text-sky-600 active:text-sky-700 hover:bg-sky-50 active:bg-sky-100";return t?Fe("opacity-70 cursor-not-allowed",e):Fe(e,i)}function ue(t){const{className:e,primary:i,danger:o,sm:c,lg:m,signal:d,success:h,ghost:f,rect:x,disabled:v,...y}=t,S="rounded-md border border-transparent font-medium cursor-pointer transition relative text-gray-600 hover:bg-transparent",_="text-xs py-2 px-4",T=!i&&!o&&!h&&!d,L=Hr(Fe(S,_,{[_3(v,f)]:T,[C3(v,f)]:i,[k3(v,f)]:o,[M3(v,f)]:h,[A3(v)]:d,"text-xs py-1.5 px-3":c,"text-lg py-2 px-6":m,"p-2":x},e));return n.jsxs("button",{className:L,...y,disabled:v,children:[t.children,n.jsx(rj,{when:d,children:n.jsxs("span",{className:"absolute flex h-3 w-3 right-[-5px] top-[-5px]",children:[n.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"}),n.jsx("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-sky-500"})]})})]})}let ro;const R3=t=>{ro={x:t.pageX,y:t.pageY},setTimeout(()=>{ro=null},100)};document.documentElement.addEventListener("click",R3,!0);function L3(t,e){var i=t.style;["Webkit","Moz","Ms","ms"].forEach(function(o){i[o+"TransformOrigin"]=e}),i.transformOrigin=e}function T3(t){const e=t.getBoundingClientRect(),i={left:e.left,top:e.top},c=t.ownerDocument.defaultView;return i.left+=v0(c),i.top+=v0(c,1),i}function v0(t,e){var i=t["page"+(e?"Y":"X")+"Offset"],o="scroll"+(e?"Top":"Left");if(typeof i!="number"){var c=t.document;i=c.documentElement[o],typeof i!="number"&&(i=c.body[o])}return i}function yo(t){const{title:e,onClose:i,children:o,onSure:c,onCancel:m,ref:d,footer:h}=t,[f,x]=j.useState(!1),[v,y]=j.useState(!1),S=j.useRef(null),_=j.useRef(null);j.useImperativeHandle(d,()=>({show:()=>{_.current.show(),document.body.style.overflow="hidden",x(!0),y(!0)},close:T}));function T(){x(!1),_.current.close(),document.body.style.overflow="visible"}function L(){T(),i&&i()}function k(F){F.stopPropagation()}function A(F){F.stopPropagation(),c&&c()}function O(){f||y(!1)}const B=Fe("dialog-wrapper",{in:f,out:!f});return j.useEffect(()=>{const F=S.current;if(v&&F){const z=T3(F);ro&&L3(F,ro.x-z.left+"px "+(ro.y-z.top)+"px")}},[v]),n.jsx(Xm,{ref:_,onClose:L,children:v?n.jsxs("div",{ref:S,className:B,onClick:k,onAnimationEnd:O,children:[n.jsxs("header",{className:"flex justify-between items-center mb-2",children:[n.jsx("div",{className:"font-bold text-lg leading-6",children:e}),n.jsx("div",{onClick:L,className:"p-2 rounded-md cursor-pointer transition hover:bg-gray-200",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"})})})]}),n.jsx("section",{className:"leading-6",children:o}),h||n.jsx("footer",{className:"text-end mt-4",children:n.jsx(ue,{primary:!0,onClick:A,children:"确认"})})]}):null})}/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ij=(...t)=>t.filter((e,i,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=j.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:c="",children:m,iconNode:d,...h},f)=>j.createElement("svg",{ref:f,...$3,width:e,height:e,stroke:t,strokeWidth:o?Number(i)*24/Number(e):i,className:ij("lucide",c),...h},[...d.map(([x,v])=>j.createElement(x,v)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=(t,e)=>{const i=j.forwardRef(({className:o,...c},m)=>j.createElement(D3,{ref:m,iconNode:e,className:ij(`lucide-${E3(t)}`,o),...c}));return i.displayName=`${t}`,i};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=Ze("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=Ze("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=Ze("ArrowUpToLine",[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=Ze("BellDot",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665",key:"1tip0g"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=Ze("BellElectric",[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9",key:"xve1fh"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2",key:"17f3te"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6",key:"n7odp6"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=Ze("BellRing",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=Ze("Castle",[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4",key:"1k4jtn"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=Ze("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=Ze("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=Ze("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=Ze("Drum",[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=Ze("GitPullRequestDraft",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=Ze("Grape",[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=Ze("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=Ze("MapPinPlus",[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738",key:"fcdtly"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M16 18h6",key:"987eiv"}],["path",{d:"M19 15v6",key:"10aioa"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=Ze("Milestone",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z",key:"1btarq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=Ze("MonitorPlay",[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=Ze("MousePointerClick",[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=Ze("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=Ze("Nut",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=Ze("Pizza",[["path",{d:"m12 14-1 1",key:"11onhr"}],["path",{d:"m13.75 18.25-1.25 1.42",key:"1yisr3"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12",key:"1qtqk6"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7",key:"fbbbr2"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",key:"1hyfdd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=Ze("PlaneTakeoff",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=Ze("Projector",[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=Ze("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=Ze("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=Ze("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=Ze("Telescope",[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=Ze("Tent",[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=Ze("TvMinimalPlay",[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=Ze("Unplug",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=Ze("UserRoundCheck",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=Ze("UserRoundPlus",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);function aj(){const t=j.useRef(null);function e(i){i.preventDefault(),t.current.show()}return n.jsxs(n.Fragment,{children:[n.jsxs(Vr,{className:"flex items-center",onClick:e,children:[n.jsx(sS,{size:18}),n.jsx("div",{className:"ml-2",children:"交流群"})]}),n.jsxs(yo,{ref:t,title:"Message",onSure:()=>t.current.close(),children:["添加我的微信：",n.jsx("span",{className:"text-red-500 text-xl",children:"icanmeetu"}),"， 注明：添加 react19 付费交流群"]})]})}const oj="https://xinyuzone.cn",Wm="e89ookqtbk74";async function Fi(t,e){let i=e;if(!i.grant_type){let d=localStorage.getItem("access_token"),h=localStorage.getItem("open_id");i={...i,access_token:d,open_id:h}}const o=new URLSearchParams(i).toString(),c=`${oj}${t}?${o}`;return(await fetch(c)).json()}function fc(){const e=`appid=${Wm}&redirect_uri=${encodeURIComponent("https://usehook.cn/")}&response_type=code&scope=openapi_userinfo#xinyu_redirect`;return`${oj}/connect/oauth2/authorize?${e}`}function rS(t){return Fi("/eden/v1/open/oauth2/access_token",{app_id:Wm,code:t,grant_type:"authorization_code"})}function iS(t){return Fi("/eden/v1/open/oauth2/refresh_token",{app_id:Wm,grant_type:"refresh_token",refresh_token:t})}function aS(){return Fi("/eden/v1/open/userinfo",{})}async function oS(){let t=localStorage.getItem("access_token"),e=localStorage.getItem("refresh_token"),i=localStorage.getItem("open_id");const o=new URLSearchParams(window.location.search.slice(1)),m=Object.fromEntries(o.entries()).code;if(!t&&!m)return{isLogin:!1};let d={};if(!t&&m?d=await rS(m):d=await iS(e||""),d.status_code!=0)return console.error(d.status_msg),localStorage.setItem("access_token",""),{isLogin:!1};t=d.access_token,e=d.refresh_token,i=d.open_id,localStorage.setItem("access_token",t),localStorage.setItem("refresh_token",e),localStorage.setItem("open_id",i);const h=await aS();return{isLogin:!0,access_token:t,open_id:i,...h}}let xm={};function qr(){return xm}function lS(t){xm={...xm,...t}}function lj(){const{isLogin:t,avatar_url:e,nickname:i,user_id:o}=qr();if(!t)return n.jsx($n,{className:"flex items-center px-8 py-1 rounded bg-blue-500 text-white",to:fc(),children:n.jsx("div",{children:"登录"})});const c=`https://xinyuzone.cn/user/${o}`;return n.jsxs($n,{to:c,target:"_blank",className:"flex items-center",children:[n.jsx("div",{className:"w-6 h-6 ml-0 md:ml-4 border rounded-full overflow-hidden",children:n.jsx("img",{className:"w-full h-full",src:e,alt:""})}),n.jsx("span",{className:"ml-2",children:i})]})}function xc(t){const{onClose:e,children:i,ref:o,width:c,direction:m="left",...d}=t,h=j.useRef(null),[f,x]=j.useState(!1);j.useImperativeHandle(o,()=>({show:()=>{h.current&&h.current.show(),x(!0)},close:()=>{h.current&&h.current.close(),x(!1)}}),[]);const v=Fe("drawer",{"animation-in":f,"animation-out":!f});function y(){x(!1),e&&e()}function S(T){T.stopPropagation()}let _={};return m==="right"&&(_={right:0,"--drawer-wdith":c,"--drawer-x":c}),m==="left"&&(_={left:0,"--drawer-wdith":c,"--drawer-x":`-${c}`}),n.jsx(Xm,{onClose:y,ref:h,...d,children:n.jsx("div",{className:v,onClick:S,style:_,children:i})})}function cS(t){if(typeof Proxy>"u")return t;const e=new Map,i=(...o)=>t(...o);return new Proxy(i,{get:(o,c)=>c==="create"?t:(e.has(c)||e.set(c,t(c)),e.get(c))})}function gc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const gm=t=>Array.isArray(t);function cj(t,e){if(!Array.isArray(e))return!1;const i=e.length;if(i!==t.length)return!1;for(let o=0;o<i;o++)if(e[o]!==t[o])return!1;return!0}function ho(t){return typeof t=="string"||Array.isArray(t)}function j0(t){const e=[{},{}];return t==null||t.values.forEach((i,o)=>{e[0][o]=i.get(),e[1][o]=i.getVelocity()}),e}function Qm(t,e,i,o){if(typeof e=="function"){const[c,m]=j0(o);e=e(i!==void 0?i:t.custom,c,m)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[c,m]=j0(o);e=e(i!==void 0?i:t.custom,c,m)}return e}function vc(t,e,i){const o=t.getProps();return Qm(o,e,i!==void 0?i:o.custom,t)}const Jm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ep=["initial",...Jm],bo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Fr=new Set(bo),Cs=t=>t*1e3,ks=t=>t/1e3,uS={type:"spring",stiffness:500,damping:25,restSpeed:10},dS=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),mS={type:"keyframes",duration:.8},pS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},hS=(t,{keyframes:e})=>e.length>2?mS:Fr.has(t)?t.startsWith("scale")?dS(e[1]):uS:pS;function np(t,e){return t?t[e]||t.default||t:void 0}const fS={skipAnimations:!1,useManualTiming:!1},xS=t=>t!==null;function jc(t,{repeat:e,repeatType:i="loop"},o){const c=t.filter(xS),m=e&&i!=="loop"&&e%2===1?0:c.length-1;return!m||o===void 0?c[m]:o}const st=t=>t;let gS=st,vm=st;function vS(t){let e=new Set,i=new Set,o=!1,c=!1;const m=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function h(x){m.has(x)&&(f.schedule(x),t()),x(d)}const f={schedule:(x,v=!1,y=!1)=>{const _=y&&o?e:i;return v&&m.add(x),_.has(x)||_.add(x),x},cancel:x=>{i.delete(x),m.delete(x)},process:x=>{if(d=x,o){c=!0;return}o=!0,[e,i]=[i,e],e.forEach(h),e.clear(),o=!1,c&&(c=!1,f.process(x))}};return f}const Hl=["read","resolveKeyframes","update","preRender","render","postRender"],jS=40;function uj(t,e){let i=!1,o=!0;const c={delta:0,timestamp:0,isProcessing:!1},m=()=>i=!0,d=Hl.reduce((A,O)=>(A[O]=vS(m),A),{}),{read:h,resolveKeyframes:f,update:x,preRender:v,render:y,postRender:S}=d,_=()=>{const A=performance.now();i=!1,c.delta=o?1e3/60:Math.max(Math.min(A-c.timestamp,jS),1),c.timestamp=A,c.isProcessing=!0,h.process(c),f.process(c),x.process(c),v.process(c),y.process(c),S.process(c),c.isProcessing=!1,i&&e&&(o=!1,t(_))},T=()=>{i=!0,o=!0,c.isProcessing||t(_)};return{schedule:Hl.reduce((A,O)=>{const B=d[O];return A[O]=(F,z=!1,Y=!1)=>(i||T(),B.schedule(F,z,Y)),A},{}),cancel:A=>{for(let O=0;O<Hl.length;O++)d[Hl[O]].cancel(A)},state:c,steps:d}}const{schedule:Ke,cancel:Pt,state:Hn,steps:Od}=uj(typeof requestAnimationFrame<"u"?requestAnimationFrame:st,!0),dj=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,yS=1e-7,bS=12;function SS(t,e,i,o,c){let m,d,h=0;do d=e+(i-e)/2,m=dj(d,o,c)-t,m>0?i=d:e=d;while(Math.abs(m)>yS&&++h<bS);return d}function So(t,e,i,o){if(t===e&&i===o)return st;const c=m=>SS(m,0,1,t,i);return m=>m===0||m===1?m:dj(c(m),e,o)}const mj=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,pj=t=>e=>1-t(1-e),hj=So(.33,1.53,.69,.99),tp=pj(hj),fj=mj(tp),xj=t=>(t*=2)<1?.5*tp(t):.5*(2-Math.pow(2,-10*(t-1))),sp=t=>1-Math.sin(Math.acos(t)),gj=pj(sp),vj=mj(sp),jj=t=>/^0[^.\s]+$/u.test(t);function NS(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||jj(t):!0}const yj=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),bj=t=>e=>typeof e=="string"&&e.startsWith(t),Sj=bj("--"),wS=bj("var(--"),rp=t=>wS(t)?_S.test(t.split("/*")[0].trim()):!1,_S=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,CS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function kS(t){const e=CS.exec(t);if(!e)return[,];const[,i,o,c]=e;return[`--${i??o}`,c]}function Nj(t,e,i=1){const[o,c]=kS(t);if(!o)return;const m=window.getComputedStyle(e).getPropertyValue(o);if(m){const d=m.trim();return yj(d)?parseFloat(d):d}return rp(c)?Nj(c,e,i+1):c}const Ms=(t,e,i)=>i>e?e:i<t?t:i,Xi={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},fo={...Xi,transform:t=>Ms(0,1,t)},Vl={...Xi,default:1},No=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),nr=No("deg"),Jt=No("%"),ye=No("px"),MS=No("vh"),AS=No("vw"),y0={...Jt,parse:t=>Jt.parse(t)/100,transform:t=>Jt.transform(t*100)},RS=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),b0=t=>t===Xi||t===ye,S0=(t,e)=>parseFloat(t.split(", ")[e]),N0=(t,e)=>(i,{transform:o})=>{if(o==="none"||!o)return 0;const c=o.match(/^matrix3d\((.+)\)$/u);if(c)return S0(c[1],e);{const m=o.match(/^matrix\((.+)\)$/u);return m?S0(m[1],t):0}},LS=new Set(["x","y","z"]),TS=bo.filter(t=>!LS.has(t));function ES(t){const e=[];return TS.forEach(i=>{const o=t.getValue(i);o!==void 0&&(e.push([i,o.get()]),o.set(i.startsWith("scale")?1:0))}),e}const Bi={width:({x:t},{paddingLeft:e="0",paddingRight:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),height:({y:t},{paddingTop:e="0",paddingBottom:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:N0(4,13),y:N0(5,14)};Bi.translateX=Bi.x;Bi.translateY=Bi.y;const wj=t=>e=>e.test(t),$S={test:t=>t==="auto",parse:t=>t},_j=[Xi,ye,Jt,nr,AS,MS,$S],w0=t=>_j.find(wj(t)),zr=new Set;let jm=!1,ym=!1;function Cj(){if(ym){const t=Array.from(zr).filter(o=>o.needsMeasurement),e=new Set(t.map(o=>o.element)),i=new Map;e.forEach(o=>{const c=ES(o);c.length&&(i.set(o,c),o.render())}),t.forEach(o=>o.measureInitialState()),e.forEach(o=>{o.render();const c=i.get(o);c&&c.forEach(([m,d])=>{var h;(h=o.getValue(m))===null||h===void 0||h.set(d)})}),t.forEach(o=>o.measureEndState()),t.forEach(o=>{o.suspendedScrollY!==void 0&&window.scrollTo(0,o.suspendedScrollY)})}ym=!1,jm=!1,zr.forEach(t=>t.complete()),zr.clear()}function kj(){zr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(ym=!0)})}function DS(){kj(),Cj()}class ip{constructor(e,i,o,c,m,d=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=i,this.name=o,this.motionValue=c,this.element=m,this.isAsync=d}scheduleResolve(){this.isScheduled=!0,this.isAsync?(zr.add(this),jm||(jm=!0,Ke.read(kj),Ke.resolveKeyframes(Cj))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:i,element:o,motionValue:c}=this;for(let m=0;m<e.length;m++)if(e[m]===null)if(m===0){const d=c==null?void 0:c.get(),h=e[e.length-1];if(d!==void 0)e[0]=d;else if(o&&i){const f=o.readValue(i,h);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=h),c&&d===void 0&&c.set(e[0])}else e[m]=e[m-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),zr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,zr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const io=t=>Math.round(t*1e5)/1e5,ap=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function OS(t){return t==null}const BS=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,op=(t,e)=>i=>!!(typeof i=="string"&&BS.test(i)&&i.startsWith(t)||e&&!OS(i)&&Object.prototype.hasOwnProperty.call(i,e)),Mj=(t,e,i)=>o=>{if(typeof o!="string")return o;const[c,m,d,h]=o.match(ap);return{[t]:parseFloat(c),[e]:parseFloat(m),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},zS=t=>Ms(0,255,t),Bd={...Xi,transform:t=>Math.round(zS(t))},Br={test:op("rgb","red"),parse:Mj("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:o=1})=>"rgba("+Bd.transform(t)+", "+Bd.transform(e)+", "+Bd.transform(i)+", "+io(fo.transform(o))+")"};function US(t){let e="",i="",o="",c="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),o=t.substring(5,7),c=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),o=t.substring(3,4),c=t.substring(4,5),e+=e,i+=i,o+=o,c+=c),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(o,16),alpha:c?parseInt(c,16)/255:1}}const bm={test:op("#"),parse:US,transform:Br.transform},Ai={test:op("hsl","hue"),parse:Mj("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:o=1})=>"hsla("+Math.round(t)+", "+Jt.transform(io(e))+", "+Jt.transform(io(i))+", "+io(fo.transform(o))+")"},Kn={test:t=>Br.test(t)||bm.test(t)||Ai.test(t),parse:t=>Br.test(t)?Br.parse(t):Ai.test(t)?Ai.parse(t):bm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Br.transform(t):Ai.transform(t)},PS=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function HS(t){var e,i;return isNaN(t)&&typeof t=="string"&&(((e=t.match(ap))===null||e===void 0?void 0:e.length)||0)+(((i=t.match(PS))===null||i===void 0?void 0:i.length)||0)>0}const Aj="number",Rj="color",VS="var",qS="var(",_0="${}",FS=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function xo(t){const e=t.toString(),i=[],o={color:[],number:[],var:[]},c=[];let m=0;const h=e.replace(FS,f=>(Kn.test(f)?(o.color.push(m),c.push(Rj),i.push(Kn.parse(f))):f.startsWith(qS)?(o.var.push(m),c.push(VS),i.push(f)):(o.number.push(m),c.push(Aj),i.push(parseFloat(f))),++m,_0)).split(_0);return{values:i,split:h,indexes:o,types:c}}function Lj(t){return xo(t).values}function Tj(t){const{split:e,types:i}=xo(t),o=e.length;return c=>{let m="";for(let d=0;d<o;d++)if(m+=e[d],c[d]!==void 0){const h=i[d];h===Aj?m+=io(c[d]):h===Rj?m+=Kn.transform(c[d]):m+=c[d]}return m}}const XS=t=>typeof t=="number"?0:t;function GS(t){const e=Lj(t);return Tj(t)(e.map(XS))}const ir={test:HS,parse:Lj,createTransformer:Tj,getAnimatableNone:GS},IS=new Set(["brightness","contrast","saturate","opacity"]);function YS(t){const[e,i]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[o]=i.match(ap)||[];if(!o)return t;const c=i.replace(o,"");let m=IS.has(e)?1:0;return o!==i&&(m*=100),e+"("+m+c+")"}const ZS=/\b([a-z-]*)\(.*?\)/gu,Sm={...ir,getAnimatableNone:t=>{const e=t.match(ZS);return e?e.map(YS).join(" "):t}},KS={borderWidth:ye,borderTopWidth:ye,borderRightWidth:ye,borderBottomWidth:ye,borderLeftWidth:ye,borderRadius:ye,radius:ye,borderTopLeftRadius:ye,borderTopRightRadius:ye,borderBottomRightRadius:ye,borderBottomLeftRadius:ye,width:ye,maxWidth:ye,height:ye,maxHeight:ye,top:ye,right:ye,bottom:ye,left:ye,padding:ye,paddingTop:ye,paddingRight:ye,paddingBottom:ye,paddingLeft:ye,margin:ye,marginTop:ye,marginRight:ye,marginBottom:ye,marginLeft:ye,backgroundPositionX:ye,backgroundPositionY:ye},WS={rotate:nr,rotateX:nr,rotateY:nr,rotateZ:nr,scale:Vl,scaleX:Vl,scaleY:Vl,scaleZ:Vl,skew:nr,skewX:nr,skewY:nr,distance:ye,translateX:ye,translateY:ye,translateZ:ye,x:ye,y:ye,z:ye,perspective:ye,transformPerspective:ye,opacity:fo,originX:y0,originY:y0,originZ:ye},C0={...Xi,transform:Math.round},lp={...KS,...WS,zIndex:C0,size:ye,fillOpacity:fo,strokeOpacity:fo,numOctaves:C0},QS={...lp,color:Kn,backgroundColor:Kn,outlineColor:Kn,fill:Kn,stroke:Kn,borderColor:Kn,borderTopColor:Kn,borderRightColor:Kn,borderBottomColor:Kn,borderLeftColor:Kn,filter:Sm,WebkitFilter:Sm},cp=t=>QS[t];function Ej(t,e){let i=cp(t);return i!==Sm&&(i=ir),i.getAnimatableNone?i.getAnimatableNone(e):void 0}const JS=new Set(["auto","none","0"]);function e7(t,e,i){let o=0,c;for(;o<t.length&&!c;){const m=t[o];typeof m=="string"&&!JS.has(m)&&xo(m).values.length&&(c=t[o]),o++}if(c&&i)for(const m of e)t[m]=Ej(i,c)}class $j extends ip{constructor(e,i,o,c,m){super(e,i,o,c,m,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:i,name:o}=this;if(!i||!i.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let x=e[f];if(typeof x=="string"&&(x=x.trim(),rp(x))){const v=Nj(x,i.current);v!==void 0&&(e[f]=v),f===e.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!RS.has(o)||e.length!==2)return;const[c,m]=e,d=w0(c),h=w0(m);if(d!==h)if(b0(d)&&b0(h))for(let f=0;f<e.length;f++){const x=e[f];typeof x=="string"&&(e[f]=parseFloat(x))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:i}=this,o=[];for(let c=0;c<e.length;c++)NS(e[c])&&o.push(c);o.length&&e7(e,o,i)}measureInitialState(){const{element:e,unresolvedKeyframes:i,name:o}=this;if(!e||!e.current)return;o==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Bi[o](e.measureViewportBox(),window.getComputedStyle(e.current)),i[0]=this.measuredOrigin;const c=i[i.length-1];c!==void 0&&e.getValue(o,c).jump(c,!1)}measureEndState(){var e;const{element:i,name:o,unresolvedKeyframes:c}=this;if(!i||!i.current)return;const m=i.getValue(o);m&&m.jump(this.measuredOrigin,!1);const d=c.length-1,h=c[d];c[d]=Bi[o](i.measureViewportBox(),window.getComputedStyle(i.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([f,x])=>{i.getValue(f).set(x)}),this.resolveNoneKeyframes()}}function up(t){return typeof t=="function"}let Il;function n7(){Il=void 0}const es={now:()=>(Il===void 0&&es.set(Hn.isProcessing||fS.useManualTiming?Hn.timestamp:performance.now()),Il),set:t=>{Il=t,queueMicrotask(n7)}},k0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ir.test(t)||t==="0")&&!t.startsWith("url("));function t7(t){const e=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==e)return!0}function s7(t,e,i,o){const c=t[0];if(c===null)return!1;if(e==="display"||e==="visibility")return!0;const m=t[t.length-1],d=k0(c,e),h=k0(m,e);return!d||!h?!1:t7(t)||(i==="spring"||up(i))&&o}const r7=40;class Dj{constructor({autoplay:e=!0,delay:i=0,type:o="keyframes",repeat:c=0,repeatDelay:m=0,repeatType:d="loop",...h}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=es.now(),this.options={autoplay:e,delay:i,type:o,repeat:c,repeatDelay:m,repeatType:d,...h},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>r7?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&DS(),this._resolved}onKeyframesResolved(e,i){this.resolvedAt=es.now(),this.hasAttemptedResolve=!0;const{name:o,type:c,velocity:m,delay:d,onComplete:h,onUpdate:f,isGenerator:x}=this.options;if(!x&&!s7(e,o,c,m))if(d)this.options.duration=0;else{f==null||f(jc(e,this.options,i)),h==null||h(),this.resolveFinishedPromise();return}const v=this.initPlayback(e,i);v!==!1&&(this._resolved={keyframes:e,finalKeyframe:i,...v},this.onPostResolved())}onPostResolved(){}then(e,i){return this.currentFinishedPromise.then(e,i)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Ur=(t,e,i)=>{const o=e-t;return o===0?1:(i-t)/o},Oj=(t,e,i=10)=>{let o="";const c=Math.max(Math.round(e/i),2);for(let m=0;m<c;m++)o+=t(Ur(0,c-1,m))+", ";return`linear(${o.substring(0,o.length-2)})`};function dp(t,e){return e?t*(1e3/e):0}const i7=5;function Bj(t,e,i){const o=Math.max(e-i7,0);return dp(i-t(o),e-o)}const bn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},zd=.001;function a7({duration:t=bn.duration,bounce:e=bn.bounce,velocity:i=bn.velocity,mass:o=bn.mass}){let c,m,d=1-e;d=Ms(bn.minDamping,bn.maxDamping,d),t=Ms(bn.minDuration,bn.maxDuration,ks(t)),d<1?(c=x=>{const v=x*d,y=v*t,S=v-i,_=Nm(x,d),T=Math.exp(-y);return zd-S/_*T},m=x=>{const y=x*d*t,S=y*i+i,_=Math.pow(d,2)*Math.pow(x,2)*t,T=Math.exp(-y),L=Nm(Math.pow(x,2),d);return(-c(x)+zd>0?-1:1)*((S-_)*T)/L}):(c=x=>{const v=Math.exp(-x*t),y=(x-i)*t+1;return-zd+v*y},m=x=>{const v=Math.exp(-x*t),y=(i-x)*(t*t);return v*y});const h=5/t,f=l7(c,m,h);if(t=Cs(t),isNaN(f))return{stiffness:bn.stiffness,damping:bn.damping,duration:t};{const x=Math.pow(f,2)*o;return{stiffness:x,damping:d*2*Math.sqrt(o*x),duration:t}}}const o7=12;function l7(t,e,i){let o=i;for(let c=1;c<o7;c++)o=o-t(o)/e(o);return o}function Nm(t,e){return t*Math.sqrt(1-e*e)}const wm=2e4;function zj(t){let e=0;const i=50;let o=t.next(e);for(;!o.done&&e<wm;)e+=i,o=t.next(e);return e>=wm?1/0:e}const c7=["duration","bounce"],u7=["stiffness","damping","mass"];function M0(t,e){return e.some(i=>t[i]!==void 0)}function d7(t){let e={velocity:bn.velocity,stiffness:bn.stiffness,damping:bn.damping,mass:bn.mass,isResolvedFromDuration:!1,...t};if(!M0(t,u7)&&M0(t,c7))if(t.visualDuration){const i=t.visualDuration,o=2*Math.PI/(i*1.2),c=o*o,m=2*Ms(.05,1,1-t.bounce)*Math.sqrt(c);e={...e,mass:bn.mass,stiffness:c,damping:m}}else{const i=a7(t);e={...e,...i,mass:bn.mass},e.isResolvedFromDuration=!0}return e}function Uj(t=bn.visualDuration,e=bn.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:o,restDelta:c}=i;const m=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:m},{stiffness:f,damping:x,mass:v,duration:y,velocity:S,isResolvedFromDuration:_}=d7({...i,velocity:-ks(i.velocity||0)}),T=S||0,L=x/(2*Math.sqrt(f*v)),k=d-m,A=ks(Math.sqrt(f/v)),O=Math.abs(k)<5;o||(o=O?bn.restSpeed.granular:bn.restSpeed.default),c||(c=O?bn.restDelta.granular:bn.restDelta.default);let B;if(L<1){const z=Nm(A,L);B=Y=>{const de=Math.exp(-L*A*Y);return d-de*((T+L*A*k)/z*Math.sin(z*Y)+k*Math.cos(z*Y))}}else if(L===1)B=z=>d-Math.exp(-A*z)*(k+(T+A*k)*z);else{const z=A*Math.sqrt(L*L-1);B=Y=>{const de=Math.exp(-L*A*Y),te=Math.min(z*Y,300);return d-de*((T+L*A*k)*Math.sinh(te)+z*k*Math.cosh(te))/z}}const F={calculatedDuration:_&&y||null,next:z=>{const Y=B(z);if(_)h.done=z>=y;else{let de=0;L<1&&(de=z===0?Cs(T):Bj(B,z,Y));const te=Math.abs(de)<=o,Z=Math.abs(d-Y)<=c;h.done=te&&Z}return h.value=h.done?d:Y,h},toString:()=>{const z=Math.min(zj(F),wm),Y=Oj(de=>F.next(z*de).value,z,30);return z+"ms "+Y}};return F}function A0({keyframes:t,velocity:e=0,power:i=.8,timeConstant:o=325,bounceDamping:c=10,bounceStiffness:m=500,modifyTarget:d,min:h,max:f,restDelta:x=.5,restSpeed:v}){const y=t[0],S={done:!1,value:y},_=te=>h!==void 0&&te<h||f!==void 0&&te>f,T=te=>h===void 0?f:f===void 0||Math.abs(h-te)<Math.abs(f-te)?h:f;let L=i*e;const k=y+L,A=d===void 0?k:d(k);A!==k&&(L=A-y);const O=te=>-L*Math.exp(-te/o),B=te=>A+O(te),F=te=>{const Z=O(te),me=B(te);S.done=Math.abs(Z)<=x,S.value=S.done?A:me};let z,Y;const de=te=>{_(S.value)&&(z=te,Y=Uj({keyframes:[S.value,T(S.value)],velocity:Bj(B,te,S.value),damping:c,stiffness:m,restDelta:x,restSpeed:v}))};return de(0),{calculatedDuration:null,next:te=>{let Z=!1;return!Y&&z===void 0&&(Z=!0,F(te),de(te)),z!==void 0&&te>=z?Y.next(te-z):(!Z&&F(te),S)}}}const m7=So(.42,0,1,1),p7=So(0,0,.58,1),Pj=So(.42,0,.58,1),h7=t=>Array.isArray(t)&&typeof t[0]!="number",mp=t=>Array.isArray(t)&&typeof t[0]=="number",R0={linear:st,easeIn:m7,easeInOut:Pj,easeOut:p7,circIn:sp,circInOut:vj,circOut:gj,backIn:tp,backInOut:fj,backOut:hj,anticipate:xj},L0=t=>{if(mp(t)){vm(t.length===4);const[e,i,o,c]=t;return So(e,i,o,c)}else if(typeof t=="string")return vm(R0[t]!==void 0),R0[t];return t},f7=(t,e)=>i=>e(t(i)),wo=(...t)=>t.reduce(f7),hn=(t,e,i)=>t+(e-t)*i;function Ud(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function x7({hue:t,saturation:e,lightness:i,alpha:o}){t/=360,e/=100,i/=100;let c=0,m=0,d=0;if(!e)c=m=d=i;else{const h=i<.5?i*(1+e):i+e-i*e,f=2*i-h;c=Ud(f,h,t+1/3),m=Ud(f,h,t),d=Ud(f,h,t-1/3)}return{red:Math.round(c*255),green:Math.round(m*255),blue:Math.round(d*255),alpha:o}}function tc(t,e){return i=>i>0?e:t}const Pd=(t,e,i)=>{const o=t*t,c=i*(e*e-o)+o;return c<0?0:Math.sqrt(c)},g7=[bm,Br,Ai],v7=t=>g7.find(e=>e.test(t));function T0(t){const e=v7(t);if(!e)return!1;let i=e.parse(t);return e===Ai&&(i=x7(i)),i}const E0=(t,e)=>{const i=T0(t),o=T0(e);if(!i||!o)return tc(t,e);const c={...i};return m=>(c.red=Pd(i.red,o.red,m),c.green=Pd(i.green,o.green,m),c.blue=Pd(i.blue,o.blue,m),c.alpha=hn(i.alpha,o.alpha,m),Br.transform(c))},_m=new Set(["none","hidden"]);function j7(t,e){return _m.has(t)?i=>i<=0?t:e:i=>i>=1?e:t}function y7(t,e){return i=>hn(t,e,i)}function pp(t){return typeof t=="number"?y7:typeof t=="string"?rp(t)?tc:Kn.test(t)?E0:N7:Array.isArray(t)?Hj:typeof t=="object"?Kn.test(t)?E0:b7:tc}function Hj(t,e){const i=[...t],o=i.length,c=t.map((m,d)=>pp(m)(m,e[d]));return m=>{for(let d=0;d<o;d++)i[d]=c[d](m);return i}}function b7(t,e){const i={...t,...e},o={};for(const c in i)t[c]!==void 0&&e[c]!==void 0&&(o[c]=pp(t[c])(t[c],e[c]));return c=>{for(const m in o)i[m]=o[m](c);return i}}function S7(t,e){var i;const o=[],c={color:0,var:0,number:0};for(let m=0;m<e.values.length;m++){const d=e.types[m],h=t.indexes[d][c[d]],f=(i=t.values[h])!==null&&i!==void 0?i:0;o[m]=f,c[d]++}return o}const N7=(t,e)=>{const i=ir.createTransformer(e),o=xo(t),c=xo(e);return o.indexes.var.length===c.indexes.var.length&&o.indexes.color.length===c.indexes.color.length&&o.indexes.number.length>=c.indexes.number.length?_m.has(t)&&!c.values.length||_m.has(e)&&!o.values.length?j7(t,e):wo(Hj(S7(o,c),c.values),i):tc(t,e)};function Vj(t,e,i){return typeof t=="number"&&typeof e=="number"&&typeof i=="number"?hn(t,e,i):pp(t)(t,e)}function w7(t,e,i){const o=[],c=i||Vj,m=t.length-1;for(let d=0;d<m;d++){let h=c(t[d],t[d+1]);if(e){const f=Array.isArray(e)?e[d]||st:e;h=wo(f,h)}o.push(h)}return o}function hp(t,e,{clamp:i=!0,ease:o,mixer:c}={}){const m=t.length;if(vm(m===e.length),m===1)return()=>e[0];if(m===2&&t[0]===t[1])return()=>e[1];t[0]>t[m-1]&&(t=[...t].reverse(),e=[...e].reverse());const d=w7(e,o,c),h=d.length,f=x=>{let v=0;if(h>1)for(;v<t.length-2&&!(x<t[v+1]);v++);const y=Ur(t[v],t[v+1],x);return d[v](y)};return i?x=>f(Ms(t[0],t[m-1],x)):f}function _7(t,e){const i=t[t.length-1];for(let o=1;o<=e;o++){const c=Ur(0,e,o);t.push(hn(i,1,c))}}function qj(t){const e=[0];return _7(e,t.length-1),e}function C7(t,e){return t.map(i=>i*e)}function k7(t,e){return t.map(()=>e||Pj).splice(0,t.length-1)}function sc({duration:t=300,keyframes:e,times:i,ease:o="easeInOut"}){const c=h7(o)?o.map(L0):L0(o),m={done:!1,value:e[0]},d=C7(i&&i.length===e.length?i:qj(e),t),h=hp(d,e,{ease:Array.isArray(c)?c:k7(e,c)});return{calculatedDuration:t,next:f=>(m.value=h(f),m.done=f>=t,m)}}const M7=t=>{const e=({timestamp:i})=>t(i);return{start:()=>Ke.update(e,!0),stop:()=>Pt(e),now:()=>Hn.isProcessing?Hn.timestamp:es.now()}},A7={decay:A0,inertia:A0,tween:sc,keyframes:sc,spring:Uj},R7=t=>t/100;class fp extends Dj{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:f}=this.options;f&&f()};const{name:i,motionValue:o,element:c,keyframes:m}=this.options,d=(c==null?void 0:c.KeyframeResolver)||ip,h=(f,x)=>this.onKeyframesResolved(f,x);this.resolver=new d(m,h,i,o,c),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:i="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:m,velocity:d=0}=this.options,h=up(i)?i:A7[i]||sc;let f,x;h!==sc&&typeof e[0]!="number"&&(f=wo(R7,Vj(e[0],e[1])),e=[0,100]);const v=h({...this.options,keyframes:e});m==="mirror"&&(x=h({...this.options,keyframes:[...e].reverse(),velocity:-d})),v.calculatedDuration===null&&(v.calculatedDuration=zj(v));const{calculatedDuration:y}=v,S=y+c,_=S*(o+1)-c;return{generator:v,mirroredGenerator:x,mapPercentToKeyframes:f,calculatedDuration:y,resolvedDuration:S,totalDuration:_}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,i=!1){const{resolved:o}=this;if(!o){const{keyframes:te}=this.options;return{done:!0,value:te[te.length-1]}}const{finalKeyframe:c,generator:m,mirroredGenerator:d,mapPercentToKeyframes:h,keyframes:f,calculatedDuration:x,totalDuration:v,resolvedDuration:y}=o;if(this.startTime===null)return m.next(0);const{delay:S,repeat:_,repeatType:T,repeatDelay:L,onUpdate:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-v/this.speed,this.startTime)),i?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const A=this.currentTime-S*(this.speed>=0?1:-1),O=this.speed>=0?A<0:A>v;this.currentTime=Math.max(A,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=v);let B=this.currentTime,F=m;if(_){const te=Math.min(this.currentTime,v)/y;let Z=Math.floor(te),me=te%1;!me&&te>=1&&(me=1),me===1&&Z--,Z=Math.min(Z,_+1),!!(Z%2)&&(T==="reverse"?(me=1-me,L&&(me-=L/y)):T==="mirror"&&(F=d)),B=Ms(0,1,me)*y}const z=O?{done:!1,value:f[0]}:F.next(B);h&&(z.value=h(z.value));let{done:Y}=z;!O&&x!==null&&(Y=this.speed>=0?this.currentTime>=v:this.currentTime<=0);const de=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&Y);return de&&c!==void 0&&(z.value=jc(f,this.options,c)),k&&k(z.value),de&&this.finish(),z}get duration(){const{resolved:e}=this;return e?ks(e.calculatedDuration):0}get time(){return ks(this.currentTime)}set time(e){e=Cs(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const i=this.playbackSpeed!==e;this.playbackSpeed=e,i&&(this.time=ks(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=M7,onPlay:i,startTime:o}=this.options;this.driver||(this.driver=e(m=>this.tick(m))),i&&i();const c=this.driver.now();this.holdTime!==null?this.startTime=c-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=c):this.startTime=o??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const L7=new Set(["opacity","clipPath","filter","transform"]);function xp(t){let e;return()=>(e===void 0&&(e=t()),e)}const T7={linearEasing:void 0};function E7(t,e){const i=xp(t);return()=>{var o;return(o=T7[e])!==null&&o!==void 0?o:i()}}const rc=E7(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function Fj(t){return!!(typeof t=="function"&&rc()||!t||typeof t=="string"&&(t in Cm||rc())||mp(t)||Array.isArray(t)&&t.every(Fj))}const no=([t,e,i,o])=>`cubic-bezier(${t}, ${e}, ${i}, ${o})`,Cm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:no([0,.65,.55,1]),circOut:no([.55,0,1,.45]),backIn:no([.31,.01,.66,-.59]),backOut:no([.33,1.53,.69,.99])};function Xj(t,e){if(t)return typeof t=="function"&&rc()?Oj(t,e):mp(t)?no(t):Array.isArray(t)?t.map(i=>Xj(i,e)||Cm.easeOut):Cm[t]}function $7(t,e,i,{delay:o=0,duration:c=300,repeat:m=0,repeatType:d="loop",ease:h="easeInOut",times:f}={}){const x={[e]:i};f&&(x.offset=f);const v=Xj(h,c);return Array.isArray(v)&&(x.easing=v),t.animate(x,{delay:o,duration:c,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:m+1,direction:d==="reverse"?"alternate":"normal"})}function $0(t,e){t.timeline=e,t.onfinish=null}const D7=xp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ic=10,O7=2e4;function B7(t){return up(t.type)||t.type==="spring"||!Fj(t.ease)}function z7(t,e){const i=new fp({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let o={done:!1,value:t[0]};const c=[];let m=0;for(;!o.done&&m<O7;)o=i.sample(m),c.push(o.value),m+=ic;return{times:void 0,keyframes:c,duration:m-ic,ease:"linear"}}const Gj={anticipate:xj,backInOut:fj,circInOut:vj};function U7(t){return t in Gj}class D0 extends Dj{constructor(e){super(e);const{name:i,motionValue:o,element:c,keyframes:m}=this.options;this.resolver=new $j(m,(d,h)=>this.onKeyframesResolved(d,h),i,o,c),this.resolver.scheduleResolve()}initPlayback(e,i){var o;let{duration:c=300,times:m,ease:d,type:h,motionValue:f,name:x,startTime:v}=this.options;if(!(!((o=f.owner)===null||o===void 0)&&o.current))return!1;if(typeof d=="string"&&rc()&&U7(d)&&(d=Gj[d]),B7(this.options)){const{onComplete:S,onUpdate:_,motionValue:T,element:L,...k}=this.options,A=z7(e,k);e=A.keyframes,e.length===1&&(e[1]=e[0]),c=A.duration,m=A.times,d=A.ease,h="keyframes"}const y=$7(f.owner.current,x,e,{...this.options,duration:c,times:m,ease:d});return y.startTime=v??this.calcStartTime(),this.pendingTimeline?($0(y,this.pendingTimeline),this.pendingTimeline=void 0):y.onfinish=()=>{const{onComplete:S}=this.options;f.set(jc(e,this.options,i)),S&&S(),this.cancel(),this.resolveFinishedPromise()},{animation:y,duration:c,times:m,type:h,ease:d,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:i}=e;return ks(i)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:i}=e;return ks(i.currentTime||0)}set time(e){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.currentTime=Cs(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:i}=e;return i.playbackRate}set speed(e){const{resolved:i}=this;if(!i)return;const{animation:o}=i;o.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:i}=e;return i.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:i}=e;return i.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:i}=this;if(!i)return st;const{animation:o}=i;$0(o,e)}return st}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:i}=e;i.playState==="finished"&&this.updateFinishedPromise(),i.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:i}=e;i.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:i,keyframes:o,duration:c,type:m,ease:d,times:h}=e;if(i.playState==="idle"||i.playState==="finished")return;if(this.time){const{motionValue:x,onUpdate:v,onComplete:y,element:S,..._}=this.options,T=new fp({..._,keyframes:o,duration:c,type:m,ease:d,times:h,isGenerator:!0}),L=Cs(this.time);x.setWithVelocity(T.sample(L-ic).value,T.sample(L).value,ic)}const{onStop:f}=this.options;f&&f(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:i,name:o,repeatDelay:c,repeatType:m,damping:d,type:h}=e;return D7()&&o&&L7.has(o)&&i&&i.owner&&i.owner.current instanceof HTMLElement&&!i.owner.getProps().onUpdate&&!c&&m!=="mirror"&&d!==0&&h!=="inertia"}}const Ij=xp(()=>window.ScrollTimeline!==void 0);class P7{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,i){return Promise.all(this.animations).then(e).catch(i)}getAll(e){return this.animations[0][e]}setAll(e,i){for(let o=0;o<this.animations.length;o++)this.animations[o][e]=i}attachTimeline(e,i){const o=this.animations.map(c=>Ij()&&c.attachTimeline?c.attachTimeline(e):i(c));return()=>{o.forEach((c,m)=>{c&&c(),this.animations[m].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let i=0;i<this.animations.length;i++)e=Math.max(e,this.animations[i].duration);return e}runAll(e){this.animations.forEach(i=>i[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function H7({when:t,delay:e,delayChildren:i,staggerChildren:o,staggerDirection:c,repeat:m,repeatType:d,repeatDelay:h,from:f,elapsed:x,...v}){return!!Object.keys(v).length}const gp=(t,e,i,o={},c,m)=>d=>{const h=np(o,t)||{},f=h.delay||o.delay||0;let{elapsed:x=0}=o;x=x-Cs(f);let v={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:e.getVelocity(),...h,delay:-x,onUpdate:S=>{e.set(S),h.onUpdate&&h.onUpdate(S)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:e,element:m?void 0:c};H7(h)||(v={...v,...hS(t,v)}),v.duration&&(v.duration=Cs(v.duration)),v.repeatDelay&&(v.repeatDelay=Cs(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let y=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(y=!0)),y&&!m&&e.get()!==void 0){const S=jc(v.keyframes,h);if(S!==void 0)return Ke.update(()=>{v.onUpdate(S),v.onComplete()}),new P7([])}return!m&&D0.supports(v)?new D0(v):new fp(v)},V7=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),q7=t=>gm(t)?t[t.length-1]||0:t;function vp(t,e){t.indexOf(e)===-1&&t.push(e)}function jp(t,e){const i=t.indexOf(e);i>-1&&t.splice(i,1)}class yp{constructor(){this.subscriptions=[]}add(e){return vp(this.subscriptions,e),()=>jp(this.subscriptions,e)}notify(e,i,o){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](e,i,o);else for(let m=0;m<c;m++){const d=this.subscriptions[m];d&&d(e,i,o)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const O0=30,F7=t=>!isNaN(parseFloat(t)),ao={current:void 0};class X7{constructor(e,i={}){this.version="11.15.0",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(o,c=!0)=>{const m=es.now();this.updatedAt!==m&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(o),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),c&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=i.owner}setCurrent(e){this.current=e,this.updatedAt=es.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=F7(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,i){this.events[e]||(this.events[e]=new yp);const o=this.events[e].add(i);return e==="change"?()=>{o(),Ke.read(()=>{this.events.change.getSize()||this.stop()})}:o}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,i){this.passiveEffect=e,this.stopPassiveEffect=i}set(e,i=!0){!i||!this.passiveEffect?this.updateAndNotify(e,i):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,i,o){this.set(i),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-o}jump(e,i=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return ao.current&&ao.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=es.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>O0)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,O0);return dp(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(e){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=e(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Qt(t,e){return new X7(t,e)}function G7(t,e,i){t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,Qt(i))}function I7(t,e){const i=vc(t,e);let{transitionEnd:o={},transition:c={},...m}=i||{};m={...m,...o};for(const d in m){const h=q7(m[d]);G7(t,d,h)}}const bp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Y7="framerAppearId",Yj="data-"+bp(Y7);function Zj(t){return t.props[Yj]}const Qn=t=>!!(t&&t.getVelocity);function Z7(t){return!!(Qn(t)&&t.add)}function km(t,e){const i=t.getValue("willChange");if(Z7(i))return i.add(e)}function K7({protectedKeys:t,needsAnimating:e},i){const o=t.hasOwnProperty(i)&&e[i]!==!0;return e[i]=!1,o}function Kj(t,e,{delay:i=0,transitionOverride:o,type:c}={}){var m;let{transition:d=t.getDefaultTransition(),transitionEnd:h,...f}=e;o&&(d=o);const x=[],v=c&&t.animationState&&t.animationState.getState()[c];for(const y in f){const S=t.getValue(y,(m=t.latestValues[y])!==null&&m!==void 0?m:null),_=f[y];if(_===void 0||v&&K7(v,y))continue;const T={delay:i,...np(d||{},y)};let L=!1;if(window.MotionHandoffAnimation){const A=Zj(t);if(A){const O=window.MotionHandoffAnimation(A,y,Ke);O!==null&&(T.startTime=O,L=!0)}}km(t,y),S.start(gp(y,S,_,t.shouldReduceMotion&&Fr.has(y)?{type:!1}:T,t,L));const k=S.animation;k&&x.push(k)}return h&&Promise.all(x).then(()=>{Ke.update(()=>{h&&I7(t,h)})}),x}function Mm(t,e,i={}){var o;const c=vc(t,e,i.type==="exit"?(o=t.presenceContext)===null||o===void 0?void 0:o.custom:void 0);let{transition:m=t.getDefaultTransition()||{}}=c||{};i.transitionOverride&&(m=i.transitionOverride);const d=c?()=>Promise.all(Kj(t,c,i)):()=>Promise.resolve(),h=t.variantChildren&&t.variantChildren.size?(x=0)=>{const{delayChildren:v=0,staggerChildren:y,staggerDirection:S}=m;return W7(t,e,v+x,y,S,i)}:()=>Promise.resolve(),{when:f}=m;if(f){const[x,v]=f==="beforeChildren"?[d,h]:[h,d];return x().then(()=>v())}else return Promise.all([d(),h(i.delay)])}function W7(t,e,i=0,o=0,c=1,m){const d=[],h=(t.variantChildren.size-1)*o,f=c===1?(x=0)=>x*o:(x=0)=>h-x*o;return Array.from(t.variantChildren).sort(Q7).forEach((x,v)=>{x.notify("AnimationStart",e),d.push(Mm(x,e,{...m,delay:i+f(v)}).then(()=>x.notify("AnimationComplete",e)))}),Promise.all(d)}function Q7(t,e){return t.sortNodePosition(e)}function J7(t,e,i={}){t.notify("AnimationStart",e);let o;if(Array.isArray(e)){const c=e.map(m=>Mm(t,m,i));o=Promise.all(c)}else if(typeof e=="string")o=Mm(t,e,i);else{const c=typeof e=="function"?vc(t,e,i.custom):e;o=Promise.all(Kj(t,c,i))}return o.then(()=>{t.notify("AnimationComplete",e)})}const e6=ep.length;function Wj(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?Wj(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const e={};for(let i=0;i<e6;i++){const o=ep[i],c=t.props[o];(ho(c)||c===!1)&&(e[o]=c)}return e}const n6=[...Jm].reverse(),t6=Jm.length;function s6(t){return e=>Promise.all(e.map(({animation:i,options:o})=>J7(t,i,o)))}function r6(t){let e=s6(t),i=B0(),o=!0;const c=f=>(x,v)=>{var y;const S=vc(t,v,f==="exit"?(y=t.presenceContext)===null||y===void 0?void 0:y.custom:void 0);if(S){const{transition:_,transitionEnd:T,...L}=S;x={...x,...L,...T}}return x};function m(f){e=f(t)}function d(f){const{props:x}=t,v=Wj(t.parent)||{},y=[],S=new Set;let _={},T=1/0;for(let k=0;k<t6;k++){const A=n6[k],O=i[A],B=x[A]!==void 0?x[A]:v[A],F=ho(B),z=A===f?O.isActive:null;z===!1&&(T=k);let Y=B===v[A]&&B!==x[A]&&F;if(Y&&o&&t.manuallyAnimateOnMount&&(Y=!1),O.protectedKeys={..._},!O.isActive&&z===null||!B&&!O.prevProp||gc(B)||typeof B=="boolean")continue;const de=i6(O.prevProp,B);let te=de||A===f&&O.isActive&&!Y&&F||k>T&&F,Z=!1;const me=Array.isArray(B)?B:[B];let De=me.reduce(c(A),{});z===!1&&(De={});const{prevResolvedValues:ge={}}=O,tn={...ge,...De},We=J=>{te=!0,S.has(J)&&(Z=!0,S.delete(J)),O.needsAnimating[J]=!0;const W=t.getValue(J);W&&(W.liveStyle=!1)};for(const J in tn){const W=De[J],ve=ge[J];if(_.hasOwnProperty(J))continue;let w=!1;gm(W)&&gm(ve)?w=!cj(W,ve):w=W!==ve,w?W!=null?We(J):S.add(J):W!==void 0&&S.has(J)?We(J):O.protectedKeys[J]=!0}O.prevProp=B,O.prevResolvedValues=De,O.isActive&&(_={..._,...De}),o&&t.blockInitialAnimation&&(te=!1),te&&(!(Y&&de)||Z)&&y.push(...me.map(J=>({animation:J,options:{type:A}})))}if(S.size){const k={};S.forEach(A=>{const O=t.getBaseTarget(A),B=t.getValue(A);B&&(B.liveStyle=!0),k[A]=O??null}),y.push({animation:k})}let L=!!y.length;return o&&(x.initial===!1||x.initial===x.animate)&&!t.manuallyAnimateOnMount&&(L=!1),o=!1,L?e(y):Promise.resolve()}function h(f,x){var v;if(i[f].isActive===x)return Promise.resolve();(v=t.variantChildren)===null||v===void 0||v.forEach(S=>{var _;return(_=S.animationState)===null||_===void 0?void 0:_.setActive(f,x)}),i[f].isActive=x;const y=d(f);for(const S in i)i[S].protectedKeys={};return y}return{animateChanges:d,setActive:h,setAnimateFunction:m,getState:()=>i,reset:()=>{i=B0(),o=!0}}}function i6(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!cj(e,t):!1}function Tr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function B0(){return{animate:Tr(!0),whileInView:Tr(),whileHover:Tr(),whileTap:Tr(),whileDrag:Tr(),whileFocus:Tr(),exit:Tr()}}class lr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class a6 extends lr{constructor(e){super(e),e.animationState||(e.animationState=r6(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();gc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:i}=this.node.prevProps||{};e!==i&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let o6=0;class l6 extends lr{constructor(){super(...arguments),this.id=o6++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:i}=this.node.presenceContext,{isPresent:o}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===o)return;const c=this.node.animationState.setActive("exit",!e);i&&!e&&c.then(()=>i(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const c6={animation:{Feature:a6},exit:{Feature:l6}},zt={x:!1,y:!1};function Qj(){return zt.x||zt.y}function u6(t){return t==="x"||t==="y"?zt[t]?null:(zt[t]=!0,()=>{zt[t]=!1}):zt.x||zt.y?null:(zt.x=zt.y=!0,()=>{zt.x=zt.y=!1})}const Sp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function _o(t){return{point:{x:t.pageX,y:t.pageY}}}const d6=t=>e=>Sp(e)&&t(e,_o(e));function go(t,e,i,o={passive:!0}){return t.addEventListener(e,i,o),()=>t.removeEventListener(e,i)}function oo(t,e,i,o){return go(t,e,d6(i),o)}const z0=(t,e)=>Math.abs(t-e);function m6(t,e){const i=z0(t.x,e.x),o=z0(t.y,e.y);return Math.sqrt(i**2+o**2)}class Jj{constructor(e,i,{transformPagePoint:o,contextWindow:c,dragSnapToOrigin:m=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Vd(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,_=m6(y.offset,{x:0,y:0})>=3;if(!S&&!_)return;const{point:T}=y,{timestamp:L}=Hn;this.history.push({...T,timestamp:L});const{onStart:k,onMove:A}=this.handlers;S||(k&&k(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),A&&A(this.lastMoveEvent,y)},this.handlePointerMove=(y,S)=>{this.lastMoveEvent=y,this.lastMoveEventInfo=Hd(S,this.transformPagePoint),Ke.update(this.updatePoint,!0)},this.handlePointerUp=(y,S)=>{this.end();const{onEnd:_,onSessionEnd:T,resumeAnimation:L}=this.handlers;if(this.dragSnapToOrigin&&L&&L(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=Vd(y.type==="pointercancel"?this.lastMoveEventInfo:Hd(S,this.transformPagePoint),this.history);this.startEvent&&_&&_(y,k),T&&T(y,k)},!Sp(e))return;this.dragSnapToOrigin=m,this.handlers=i,this.transformPagePoint=o,this.contextWindow=c||window;const d=_o(e),h=Hd(d,this.transformPagePoint),{point:f}=h,{timestamp:x}=Hn;this.history=[{...f,timestamp:x}];const{onSessionStart:v}=i;v&&v(e,Vd(h,this.history)),this.removeListeners=wo(oo(this.contextWindow,"pointermove",this.handlePointerMove),oo(this.contextWindow,"pointerup",this.handlePointerUp),oo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Pt(this.updatePoint)}}function Hd(t,e){return e?{point:e(t.point)}:t}function U0(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Vd({point:t},e){return{point:t,delta:U0(t,ey(e)),offset:U0(t,p6(e)),velocity:h6(e,.1)}}function p6(t){return t[0]}function ey(t){return t[t.length-1]}function h6(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,o=null;const c=ey(t);for(;i>=0&&(o=t[i],!(c.timestamp-o.timestamp>Cs(e)));)i--;if(!o)return{x:0,y:0};const m=ks(c.timestamp-o.timestamp);if(m===0)return{x:0,y:0};const d={x:(c.x-o.x)/m,y:(c.y-o.y)/m};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function Ri(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}const ny=1e-4,f6=1-ny,x6=1+ny,ty=.01,g6=0-ty,v6=0+ty;function ht(t){return t.max-t.min}function j6(t,e,i){return Math.abs(t-e)<=i}function P0(t,e,i,o=.5){t.origin=o,t.originPoint=hn(e.min,e.max,t.origin),t.scale=ht(i)/ht(e),t.translate=hn(i.min,i.max,t.origin)-t.originPoint,(t.scale>=f6&&t.scale<=x6||isNaN(t.scale))&&(t.scale=1),(t.translate>=g6&&t.translate<=v6||isNaN(t.translate))&&(t.translate=0)}function lo(t,e,i,o){P0(t.x,e.x,i.x,o?o.originX:void 0),P0(t.y,e.y,i.y,o?o.originY:void 0)}function H0(t,e,i){t.min=i.min+e.min,t.max=t.min+ht(e)}function y6(t,e,i){H0(t.x,e.x,i.x),H0(t.y,e.y,i.y)}function V0(t,e,i){t.min=e.min-i.min,t.max=t.min+ht(e)}function co(t,e,i){V0(t.x,e.x,i.x),V0(t.y,e.y,i.y)}function b6(t,{min:e,max:i},o){return e!==void 0&&t<e?t=o?hn(e,t,o.min):Math.max(t,e):i!==void 0&&t>i&&(t=o?hn(i,t,o.max):Math.min(t,i)),t}function q0(t,e,i){return{min:e!==void 0?t.min+e:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function S6(t,{top:e,left:i,bottom:o,right:c}){return{x:q0(t.x,i,c),y:q0(t.y,e,o)}}function F0(t,e){let i=e.min-t.min,o=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,o]=[o,i]),{min:i,max:o}}function N6(t,e){return{x:F0(t.x,e.x),y:F0(t.y,e.y)}}function w6(t,e){let i=.5;const o=ht(t),c=ht(e);return c>o?i=Ur(e.min,e.max-o,t.min):o>c&&(i=Ur(t.min,t.max-c,e.min)),Ms(0,1,i)}function _6(t,e){const i={};return e.min!==void 0&&(i.min=e.min-t.min),e.max!==void 0&&(i.max=e.max-t.min),i}const Am=.35;function C6(t=Am){return t===!1?t=0:t===!0&&(t=Am),{x:X0(t,"left","right"),y:X0(t,"top","bottom")}}function X0(t,e,i){return{min:G0(t,e),max:G0(t,i)}}function G0(t,e){return typeof t=="number"?t:t[e]||0}const I0=()=>({translate:0,scale:1,origin:0,originPoint:0}),Li=()=>({x:I0(),y:I0()}),Y0=()=>({min:0,max:0}),Cn=()=>({x:Y0(),y:Y0()});function Rt(t){return[t("x"),t("y")]}function sy({top:t,left:e,right:i,bottom:o}){return{x:{min:e,max:i},y:{min:t,max:o}}}function k6({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function M6(t,e){if(!e)return t;const i=e({x:t.left,y:t.top}),o=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:o.y,right:o.x}}function qd(t){return t===void 0||t===1}function Rm({scale:t,scaleX:e,scaleY:i}){return!qd(t)||!qd(e)||!qd(i)}function $r(t){return Rm(t)||ry(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function ry(t){return Z0(t.x)||Z0(t.y)}function Z0(t){return t&&t!=="0%"}function ac(t,e,i){const o=t-i,c=e*o;return i+c}function K0(t,e,i,o,c){return c!==void 0&&(t=ac(t,c,o)),ac(t,i,o)+e}function Lm(t,e=0,i=1,o,c){t.min=K0(t.min,e,i,o,c),t.max=K0(t.max,e,i,o,c)}function iy(t,{x:e,y:i}){Lm(t.x,e.translate,e.scale,e.originPoint),Lm(t.y,i.translate,i.scale,i.originPoint)}const W0=.999999999999,Q0=1.0000000000001;function A6(t,e,i,o=!1){const c=i.length;if(!c)return;e.x=e.y=1;let m,d;for(let h=0;h<c;h++){m=i[h],d=m.projectionDelta;const{visualElement:f}=m.options;f&&f.props.style&&f.props.style.display==="contents"||(o&&m.options.layoutScroll&&m.scroll&&m!==m.root&&Ei(t,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),d&&(e.x*=d.x.scale,e.y*=d.y.scale,iy(t,d)),o&&$r(m.latestValues)&&Ei(t,m.latestValues))}e.x<Q0&&e.x>W0&&(e.x=1),e.y<Q0&&e.y>W0&&(e.y=1)}function Ti(t,e){t.min=t.min+e,t.max=t.max+e}function J0(t,e,i,o,c=.5){const m=hn(t.min,t.max,c);Lm(t,e,i,m,o)}function Ei(t,e){J0(t.x,e.x,e.scaleX,e.scale,e.originX),J0(t.y,e.y,e.scaleY,e.scale,e.originY)}function ay(t,e){return sy(M6(t.getBoundingClientRect(),e))}function R6(t,e,i){const o=ay(t,i),{scroll:c}=e;return c&&(Ti(o.x,c.offset.x),Ti(o.y,c.offset.y)),o}const oy=({current:t})=>t?t.ownerDocument.defaultView:null,L6=new WeakMap;class T6{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Cn(),this.visualElement=e}start(e,{snapToCursor:i=!1}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=v=>{const{dragSnapToOrigin:y}=this.getProps();y?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(_o(v).point)},m=(v,y)=>{const{drag:S,dragPropagation:_,onDragStart:T}=this.getProps();if(S&&!_&&(this.openDragLock&&this.openDragLock(),this.openDragLock=u6(S),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Rt(k=>{let A=this.getAxisMotionValue(k).get()||0;if(Jt.test(A)){const{projection:O}=this.visualElement;if(O&&O.layout){const B=O.layout.layoutBox[k];B&&(A=ht(B)*(parseFloat(A)/100))}}this.originPoint[k]=A}),T&&Ke.postRender(()=>T(v,y)),km(this.visualElement,"transform");const{animationState:L}=this.visualElement;L&&L.setActive("whileDrag",!0)},d=(v,y)=>{const{dragPropagation:S,dragDirectionLock:_,onDirectionLock:T,onDrag:L}=this.getProps();if(!S&&!this.openDragLock)return;const{offset:k}=y;if(_&&this.currentDirection===null){this.currentDirection=E6(k),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",y.point,k),this.updateAxis("y",y.point,k),this.visualElement.render(),L&&L(v,y)},h=(v,y)=>this.stop(v,y),f=()=>Rt(v=>{var y;return this.getAnimationState(v)==="paused"&&((y=this.getAxisMotionValue(v).animation)===null||y===void 0?void 0:y.play())}),{dragSnapToOrigin:x}=this.getProps();this.panSession=new Jj(e,{onSessionStart:c,onStart:m,onMove:d,onSessionEnd:h,resumeAnimation:f},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:x,contextWindow:oy(this.visualElement)})}stop(e,i){const o=this.isDragging;if(this.cancel(),!o)return;const{velocity:c}=i;this.startAnimation(c);const{onDragEnd:m}=this.getProps();m&&Ke.postRender(()=>m(e,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:o}=this.getProps();!o&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(e,i,o){const{drag:c}=this.getProps();if(!o||!ql(e,c,this.currentDirection))return;const m=this.getAxisMotionValue(e);let d=this.originPoint[e]+o[e];this.constraints&&this.constraints[e]&&(d=b6(d,this.constraints[e],this.elastic[e])),m.set(d)}resolveConstraints(){var e;const{dragConstraints:i,dragElastic:o}=this.getProps(),c=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,m=this.constraints;i&&Ri(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&c?this.constraints=S6(c.layoutBox,i):this.constraints=!1,this.elastic=C6(o),m!==this.constraints&&c&&this.constraints&&!this.hasMutatedConstraints&&Rt(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=_6(c.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!Ri(e))return!1;const o=e.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;const m=R6(o,c.root,this.visualElement.getTransformPagePoint());let d=N6(c.layout.layoutBox,m);if(i){const h=i(k6(d));this.hasMutatedConstraints=!!h,h&&(d=sy(h))}return d}startAnimation(e){const{drag:i,dragMomentum:o,dragElastic:c,dragTransition:m,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),f=this.constraints||{},x=Rt(v=>{if(!ql(v,i,this.currentDirection))return;let y=f[v]||{};d&&(y={min:0,max:0});const S=c?200:1e6,_=c?40:1e7,T={type:"inertia",velocity:o?e[v]:0,bounceStiffness:S,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...m,...y};return this.startAxisValueAnimation(v,T)});return Promise.all(x).then(h)}startAxisValueAnimation(e,i){const o=this.getAxisMotionValue(e);return km(this.visualElement,e),o.start(gp(e,o,0,i,this.visualElement,!1))}stopAnimation(){Rt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Rt(e=>{var i;return(i=this.getAxisMotionValue(e).animation)===null||i===void 0?void 0:i.pause()})}getAnimationState(e){var i;return(i=this.getAxisMotionValue(e).animation)===null||i===void 0?void 0:i.state}getAxisMotionValue(e){const i=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps(),c=o[i];return c||this.visualElement.getValue(e,(o.initial?o.initial[e]:void 0)||0)}snapToCursor(e){Rt(i=>{const{drag:o}=this.getProps();if(!ql(i,o,this.currentDirection))return;const{projection:c}=this.visualElement,m=this.getAxisMotionValue(i);if(c&&c.layout){const{min:d,max:h}=c.layout.layoutBox[i];m.set(e[i]-hn(d,h,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:o}=this.visualElement;if(!Ri(i)||!o||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Rt(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const f=h.get();c[d]=w6({min:f,max:f},this.constraints[d])}});const{transformTemplate:m}=this.visualElement.getProps();this.visualElement.current.style.transform=m?m({},""):"none",o.root&&o.root.updateScroll(),o.updateLayout(),this.resolveConstraints(),Rt(d=>{if(!ql(d,e,null))return;const h=this.getAxisMotionValue(d),{min:f,max:x}=this.constraints[d];h.set(hn(f,x,c[d]))})}addListeners(){if(!this.visualElement.current)return;L6.set(this.visualElement,this);const e=this.visualElement.current,i=oo(e,"pointerdown",f=>{const{drag:x,dragListener:v=!0}=this.getProps();x&&v&&this.start(f)}),o=()=>{const{dragConstraints:f}=this.getProps();Ri(f)&&f.current&&(this.constraints=this.resolveRefConstraints())},{projection:c}=this.visualElement,m=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Ke.read(o);const d=go(window,"resize",()=>this.scalePositionWithinConstraints()),h=c.addEventListener("didUpdate",({delta:f,hasLayoutChanged:x})=>{this.isDragging&&x&&(Rt(v=>{const y=this.getAxisMotionValue(v);y&&(this.originPoint[v]+=f[v].translate,y.set(y.get()+f[v].translate))}),this.visualElement.render())});return()=>{d(),i(),m(),h&&h()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:o=!1,dragPropagation:c=!1,dragConstraints:m=!1,dragElastic:d=Am,dragMomentum:h=!0}=e;return{...e,drag:i,dragDirectionLock:o,dragPropagation:c,dragConstraints:m,dragElastic:d,dragMomentum:h}}}function ql(t,e,i){return(e===!0||e===t)&&(i===null||i===t)}function E6(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}class $6 extends lr{constructor(e){super(e),this.removeGroupControls=st,this.removeListeners=st,this.controls=new T6(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||st}unmount(){this.removeGroupControls(),this.removeListeners()}}const eg=t=>(e,i)=>{t&&Ke.postRender(()=>t(e,i))};class D6 extends lr{constructor(){super(...arguments),this.removePointerDownListener=st}onPointerDown(e){this.session=new Jj(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:oy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:o,onPanEnd:c}=this.node.getProps();return{onSessionStart:eg(e),onStart:eg(i),onMove:o,onEnd:(m,d)=>{delete this.session,c&&Ke.postRender(()=>c(m,d))}}}mount(){this.removePointerDownListener=oo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const yc=j.createContext(null);function O6(){const t=j.useContext(yc);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:i,register:o}=t,c=j.useId();j.useEffect(()=>o(c),[]);const m=j.useCallback(()=>i&&i(c),[c,i]);return!e&&i?[!1,m]:[!0]}const Np=j.createContext({}),ly=j.createContext({}),Yl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ng(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ja={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(ye.test(t))t=parseFloat(t);else return t;const i=ng(t,e.target.x),o=ng(t,e.target.y);return`${i}% ${o}%`}},B6={correct:(t,{treeScale:e,projectionDelta:i})=>{const o=t,c=ir.parse(t);if(c.length>5)return o;const m=ir.createTransformer(t),d=typeof c[0]!="number"?1:0,h=i.x.scale*e.x,f=i.y.scale*e.y;c[0+d]/=h,c[1+d]/=f;const x=hn(h,f,.5);return typeof c[2+d]=="number"&&(c[2+d]/=x),typeof c[3+d]=="number"&&(c[3+d]/=x),m(c)}},oc={};function z6(t){Object.assign(oc,t)}const{schedule:wp,cancel:bU}=uj(queueMicrotask,!1);class U6 extends j.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:o,layoutId:c}=this.props,{projection:m}=e;z6(P6),m&&(i.group&&i.group.add(m),o&&o.register&&c&&o.register(m),m.root.didUpdate(),m.addEventListener("animationComplete",()=>{this.safeToRemove()}),m.setOptions({...m.options,onExitComplete:()=>this.safeToRemove()})),Yl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:o,drag:c,isPresent:m}=this.props,d=o.projection;return d&&(d.isPresent=m,c||e.layoutDependency!==i||i===void 0?d.willUpdate():this.safeToRemove(),e.isPresent!==m&&(m?d.promote():d.relegate()||Ke.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),wp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:o}=this.props,{projection:c}=e;c&&(c.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(c),o&&o.deregister&&o.deregister(c))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function cy(t){const[e,i]=O6(),o=j.useContext(Np);return n.jsx(U6,{...t,layoutGroup:o,switchLayoutGroup:j.useContext(ly),isPresent:e,safeToRemove:i})}const P6={borderRadius:{...Ja,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ja,borderTopRightRadius:Ja,borderBottomLeftRadius:Ja,borderBottomRightRadius:Ja,boxShadow:B6},uy=["TopLeft","TopRight","BottomLeft","BottomRight"],H6=uy.length,tg=t=>typeof t=="string"?parseFloat(t):t,sg=t=>typeof t=="number"||ye.test(t);function V6(t,e,i,o,c,m){c?(t.opacity=hn(0,i.opacity!==void 0?i.opacity:1,q6(o)),t.opacityExit=hn(e.opacity!==void 0?e.opacity:1,0,F6(o))):m&&(t.opacity=hn(e.opacity!==void 0?e.opacity:1,i.opacity!==void 0?i.opacity:1,o));for(let d=0;d<H6;d++){const h=`border${uy[d]}Radius`;let f=rg(e,h),x=rg(i,h);if(f===void 0&&x===void 0)continue;f||(f=0),x||(x=0),f===0||x===0||sg(f)===sg(x)?(t[h]=Math.max(hn(tg(f),tg(x),o),0),(Jt.test(x)||Jt.test(f))&&(t[h]+="%")):t[h]=x}(e.rotate||i.rotate)&&(t.rotate=hn(e.rotate||0,i.rotate||0,o))}function rg(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const q6=dy(0,.5,gj),F6=dy(.5,.95,st);function dy(t,e,i){return o=>o<t?0:o>e?1:i(Ur(t,e,o))}function ig(t,e){t.min=e.min,t.max=e.max}function At(t,e){ig(t.x,e.x),ig(t.y,e.y)}function ag(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function og(t,e,i,o,c){return t-=e,t=ac(t,1/i,o),c!==void 0&&(t=ac(t,1/c,o)),t}function X6(t,e=0,i=1,o=.5,c,m=t,d=t){if(Jt.test(e)&&(e=parseFloat(e),e=hn(d.min,d.max,e/100)-d.min),typeof e!="number")return;let h=hn(m.min,m.max,o);t===m&&(h-=e),t.min=og(t.min,e,i,h,c),t.max=og(t.max,e,i,h,c)}function lg(t,e,[i,o,c],m,d){X6(t,e[i],e[o],e[c],e.scale,m,d)}const G6=["x","scaleX","originX"],I6=["y","scaleY","originY"];function cg(t,e,i,o){lg(t.x,e,G6,i?i.x:void 0,o?o.x:void 0),lg(t.y,e,I6,i?i.y:void 0,o?o.y:void 0)}function ug(t){return t.translate===0&&t.scale===1}function my(t){return ug(t.x)&&ug(t.y)}function dg(t,e){return t.min===e.min&&t.max===e.max}function Y6(t,e){return dg(t.x,e.x)&&dg(t.y,e.y)}function mg(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function py(t,e){return mg(t.x,e.x)&&mg(t.y,e.y)}function pg(t){return ht(t.x)/ht(t.y)}function hg(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class Z6{constructor(){this.members=[]}add(e){vp(this.members,e),e.scheduleRender()}remove(e){if(jp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){const i=this.members.findIndex(c=>e===c);if(i===0)return!1;let o;for(let c=i;c>=0;c--){const m=this.members[c];if(m.isPresent!==!1){o=m;break}}return o?(this.promote(o),!0):!1}promote(e,i){const o=this.lead;if(e!==o&&(this.prevLead=o,this.lead=e,e.show(),o)){o.instance&&o.scheduleRender(),e.scheduleRender(),e.resumeFrom=o,i&&(e.resumeFrom.preserveOpacity=!0),o.snapshot&&(e.snapshot=o.snapshot,e.snapshot.latestValues=o.animationValues||o.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:c}=e.options;c===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:i,resumingFrom:o}=e;i.onExitComplete&&i.onExitComplete(),o&&o.options.onExitComplete&&o.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function K6(t,e,i){let o="";const c=t.x.translate/e.x,m=t.y.translate/e.y,d=(i==null?void 0:i.z)||0;if((c||m||d)&&(o=`translate3d(${c}px, ${m}px, ${d}px) `),(e.x!==1||e.y!==1)&&(o+=`scale(${1/e.x}, ${1/e.y}) `),i){const{transformPerspective:x,rotate:v,rotateX:y,rotateY:S,skewX:_,skewY:T}=i;x&&(o=`perspective(${x}px) ${o}`),v&&(o+=`rotate(${v}deg) `),y&&(o+=`rotateX(${y}deg) `),S&&(o+=`rotateY(${S}deg) `),_&&(o+=`skewX(${_}deg) `),T&&(o+=`skewY(${T}deg) `)}const h=t.x.scale*e.x,f=t.y.scale*e.y;return(h!==1||f!==1)&&(o+=`scale(${h}, ${f})`),o||"none"}const W6=(t,e)=>t.depth-e.depth;class Q6{constructor(){this.children=[],this.isDirty=!1}add(e){vp(this.children,e),this.isDirty=!0}remove(e){jp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(W6),this.isDirty=!1,this.children.forEach(e)}}function Zl(t){const e=Qn(t)?t.get():t;return V7(e)?e.toValue():e}function J6(t,e){const i=es.now(),o=({timestamp:c})=>{const m=c-i;m>=e&&(Pt(o),t(m-e))};return Ke.read(o,!0),()=>Pt(o)}function eN(t){return t instanceof SVGElement&&t.tagName!=="svg"}function nN(t,e,i){const o=Qn(t)?t:Qt(t);return o.start(gp("",o,e,i)),o.animation}const Dr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},to=typeof window<"u"&&window.MotionDebug!==void 0,Fd=["","X","Y","Z"],tN={visibility:"hidden"},fg=1e3;let sN=0;function Xd(t,e,i,o){const{latestValues:c}=e;c[t]&&(i[t]=c[t],e.setStaticValue(t,0),o&&(o[t]=0))}function hy(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const i=Zj(e);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:c,layoutId:m}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",Ke,!(c||m))}const{parent:o}=t;o&&!o.hasCheckedOptimisedAppear&&hy(o)}function fy({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:o,resetTransform:c}){return class{constructor(d={},h=e==null?void 0:e()){this.id=sN++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,to&&(Dr.totalNodes=Dr.resolvedTargetDeltas=Dr.recalculatedProjection=0),this.nodes.forEach(aN),this.nodes.forEach(dN),this.nodes.forEach(mN),this.nodes.forEach(oN),to&&window.MotionDebug.record(Dr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let f=0;f<this.path.length;f++)this.path[f].shouldResetTransform=!0;this.root===this&&(this.nodes=new Q6)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new yp),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const f=this.eventHandlers.get(d);f&&f.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,h=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=eN(d),this.instance=d;const{layoutId:f,layout:x,visualElement:v}=this.options;if(v&&!v.current&&v.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),h&&(x||f)&&(this.isLayoutDirty=!0),t){let y;const S=()=>this.root.updateBlockedByResize=!1;t(d,()=>{this.root.updateBlockedByResize=!0,y&&y(),y=J6(S,250),Yl.hasAnimatedSinceResize&&(Yl.hasAnimatedSinceResize=!1,this.nodes.forEach(gg))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&v&&(f||x)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:S,hasRelativeTargetChanged:_,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const L=this.options.transition||v.getDefaultTransition()||gN,{onLayoutAnimationStart:k,onLayoutAnimationComplete:A}=v.getProps(),O=!this.targetLayout||!py(this.targetLayout,T)||_,B=!S&&_;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||B||S&&(O||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(y,B);const F={...np(L,"layout"),onPlay:k,onComplete:A};(v.shouldReduceMotion||this.options.layoutRoot)&&(F.delay=0,F.type=!1),this.startAnimation(F)}else S||gg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(pN),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&hy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const y=this.path[v];y.shouldResetTransform=!0,y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:h,layout:f}=this.options;if(h===void 0&&!f)return;const x=this.getTransformTemplate();this.prevTransformTemplateValue=x?x(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(xg);return}this.isUpdating||this.nodes.forEach(cN),this.isUpdating=!1,this.nodes.forEach(uN),this.nodes.forEach(rN),this.nodes.forEach(iN),this.clearAllSnapshots();const h=es.now();Hn.delta=Ms(0,1e3/60,h-Hn.timestamp),Hn.timestamp=h,Hn.isProcessing=!0,Od.update.process(Hn),Od.preRender.process(Hn),Od.render.process(Hn),Hn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,wp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(lN),this.sharedNodes.forEach(hN)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ke.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ke.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let f=0;f<this.path.length;f++)this.path[f].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Cn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h){const f=o(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:f,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:f}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!my(this.projectionDelta),f=this.getTransformTemplate(),x=f?f(this.latestValues,""):void 0,v=x!==this.prevTransformTemplateValue;d&&(h||$r(this.latestValues)||v)&&(c(this.instance,x),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let f=this.removeElementScroll(h);return d&&(f=this.removeTransform(f)),vN(f),{animationId:this.root.animationId,measuredBox:h,layoutBox:f,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:h}=this.options;if(!h)return Cn();const f=h.measureViewportBox();if(!(((d=this.scroll)===null||d===void 0?void 0:d.wasRoot)||this.path.some(jN))){const{scroll:v}=this.root;v&&(Ti(f.x,v.offset.x),Ti(f.y,v.offset.y))}return f}removeElementScroll(d){var h;const f=Cn();if(At(f,d),!((h=this.scroll)===null||h===void 0)&&h.wasRoot)return f;for(let x=0;x<this.path.length;x++){const v=this.path[x],{scroll:y,options:S}=v;v!==this.root&&y&&S.layoutScroll&&(y.wasRoot&&At(f,d),Ti(f.x,y.offset.x),Ti(f.y,y.offset.y))}return f}applyTransform(d,h=!1){const f=Cn();At(f,d);for(let x=0;x<this.path.length;x++){const v=this.path[x];!h&&v.options.layoutScroll&&v.scroll&&v!==v.root&&Ei(f,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),$r(v.latestValues)&&Ei(f,v.latestValues)}return $r(this.latestValues)&&Ei(f,this.latestValues),f}removeTransform(d){const h=Cn();At(h,d);for(let f=0;f<this.path.length;f++){const x=this.path[f];if(!x.instance||!$r(x.latestValues))continue;Rm(x.latestValues)&&x.updateSnapshot();const v=Cn(),y=x.measurePageBox();At(v,y),cg(h,x.latestValues,x.snapshot?x.snapshot.layoutBox:void 0,v)}return $r(this.latestValues)&&cg(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Hn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var h;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const x=!!this.resumingFrom||this!==f;if(!(d||x&&this.isSharedProjectionDirty||this.isProjectionDirty||!((h=this.parent)===null||h===void 0)&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:S}=this.options;if(!(!this.layout||!(y||S))){if(this.resolvedRelativeTargetAt=Hn.timestamp,!this.targetDelta&&!this.relativeTarget){const _=this.getClosestProjectingParent();_&&_.layout&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Cn(),this.relativeTargetOrigin=Cn(),co(this.relativeTargetOrigin,this.layout.layoutBox,_.layout.layoutBox),At(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Cn(),this.targetWithTransforms=Cn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),y6(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):At(this.target,this.layout.layoutBox),iy(this.target,this.targetDelta)):At(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const _=this.getClosestProjectingParent();_&&!!_.resumingFrom==!!this.resumingFrom&&!_.options.layoutScroll&&_.target&&this.animationProgress!==1?(this.relativeParent=_,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Cn(),this.relativeTargetOrigin=Cn(),co(this.relativeTargetOrigin,this.target,_.target),At(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}to&&Dr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Rm(this.parent.latestValues)||ry(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const h=this.getLead(),f=!!this.resumingFrom||this!==h;let x=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(x=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(x=!1),this.resolvedRelativeTargetAt===Hn.timestamp&&(x=!1),x)return;const{layout:v,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(v||y))return;At(this.layoutCorrected,this.layout.layoutBox);const S=this.treeScale.x,_=this.treeScale.y;A6(this.layoutCorrected,this.treeScale,this.path,f),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=Cn());const{target:T}=h;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ag(this.prevProjectionDelta.x,this.projectionDelta.x),ag(this.prevProjectionDelta.y,this.projectionDelta.y)),lo(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==S||this.treeScale.y!==_||!hg(this.projectionDelta.x,this.prevProjectionDelta.x)||!hg(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T)),to&&Dr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)===null||h===void 0||h.scheduleRender(),d){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Li(),this.projectionDelta=Li(),this.projectionDeltaWithTransform=Li()}setAnimationOrigin(d,h=!1){const f=this.snapshot,x=f?f.latestValues:{},v={...this.latestValues},y=Li();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const S=Cn(),_=f?f.source:void 0,T=this.layout?this.layout.source:void 0,L=_!==T,k=this.getStack(),A=!k||k.members.length<=1,O=!!(L&&!A&&this.options.crossfade===!0&&!this.path.some(xN));this.animationProgress=0;let B;this.mixTargetDelta=F=>{const z=F/1e3;vg(y.x,d.x,z),vg(y.y,d.y,z),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(co(S,this.layout.layoutBox,this.relativeParent.layout.layoutBox),fN(this.relativeTarget,this.relativeTargetOrigin,S,z),B&&Y6(this.relativeTarget,B)&&(this.isProjectionDirty=!1),B||(B=Cn()),At(B,this.relativeTarget)),L&&(this.animationValues=v,V6(v,x,this.latestValues,z,O,A)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=z},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ke.update(()=>{Yl.hasAnimatedSinceResize=!0,this.currentAnimation=nN(0,fg,{...d,onUpdate:h=>{this.mixTargetDelta(h),d.onUpdate&&d.onUpdate(h)},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(fg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:f,layout:x,latestValues:v}=d;if(!(!h||!f||!x)){if(this!==d&&this.layout&&x&&xy(this.options.animationType,this.layout.layoutBox,x.layoutBox)){f=this.target||Cn();const y=ht(this.layout.layoutBox.x);f.x.min=d.target.x.min,f.x.max=f.x.min+y;const S=ht(this.layout.layoutBox.y);f.y.min=d.target.y.min,f.y.max=f.y.min+S}At(h,f),Ei(h,v),lo(this.projectionDeltaWithTransform,this.layoutCorrected,h,v)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new Z6),this.sharedNodes.get(d).add(h);const x=h.options.initialPromotionConfig;h.promote({transition:x?x.transition:void 0,preserveFollowOpacity:x&&x.shouldPreserveFollowOpacity?x.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:h}=this.options;return h?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:h}=this.options;return h?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:f}={}){const x=this.getStack();x&&x.promote(this,f),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:f}=d;if((f.z||f.rotate||f.rotateX||f.rotateY||f.rotateZ||f.skewX||f.skewY)&&(h=!0),!h)return;const x={};f.z&&Xd("z",d,x,this.animationValues);for(let v=0;v<Fd.length;v++)Xd(`rotate${Fd[v]}`,d,x,this.animationValues),Xd(`skew${Fd[v]}`,d,x,this.animationValues);d.render();for(const v in x)d.setStaticValue(v,x[v]),this.animationValues&&(this.animationValues[v]=x[v]);d.scheduleRender()}getProjectionStyles(d){var h,f;if(!this.instance||this.isSVG)return;if(!this.isVisible)return tN;const x={visibility:""},v=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,x.opacity="",x.pointerEvents=Zl(d==null?void 0:d.pointerEvents)||"",x.transform=v?v(this.latestValues,""):"none",x;const y=this.getLead();if(!this.projectionDelta||!this.layout||!y.target){const L={};return this.options.layoutId&&(L.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,L.pointerEvents=Zl(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!$r(this.latestValues)&&(L.transform=v?v({},""):"none",this.hasProjected=!1),L}const S=y.animationValues||y.latestValues;this.applyTransformsToTarget(),x.transform=K6(this.projectionDeltaWithTransform,this.treeScale,S),v&&(x.transform=v(S,x.transform));const{x:_,y:T}=this.projectionDelta;x.transformOrigin=`${_.origin*100}% ${T.origin*100}% 0`,y.animationValues?x.opacity=y===this?(f=(h=S.opacity)!==null&&h!==void 0?h:this.latestValues.opacity)!==null&&f!==void 0?f:1:this.preserveOpacity?this.latestValues.opacity:S.opacityExit:x.opacity=y===this?S.opacity!==void 0?S.opacity:"":S.opacityExit!==void 0?S.opacityExit:0;for(const L in oc){if(S[L]===void 0)continue;const{correct:k,applyTo:A}=oc[L],O=x.transform==="none"?S[L]:k(S[L],y);if(A){const B=A.length;for(let F=0;F<B;F++)x[A[F]]=O}else x[L]=O}return this.options.layoutId&&(x.pointerEvents=y===this?Zl(d==null?void 0:d.pointerEvents)||"":"none"),x}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)===null||h===void 0?void 0:h.stop()}),this.root.nodes.forEach(xg),this.root.sharedNodes.clear()}}}function rN(t){t.updateLayout()}function iN(t){var e;const i=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&i&&t.hasListeners("didUpdate")){const{layoutBox:o,measuredBox:c}=t.layout,{animationType:m}=t.options,d=i.source!==t.layout.source;m==="size"?Rt(y=>{const S=d?i.measuredBox[y]:i.layoutBox[y],_=ht(S);S.min=o[y].min,S.max=S.min+_}):xy(m,i.layoutBox,o)&&Rt(y=>{const S=d?i.measuredBox[y]:i.layoutBox[y],_=ht(o[y]);S.max=S.min+_,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+_)});const h=Li();lo(h,o,i.layoutBox);const f=Li();d?lo(f,t.applyTransform(c,!0),i.measuredBox):lo(f,o,i.layoutBox);const x=!my(h);let v=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:S,layout:_}=y;if(S&&_){const T=Cn();co(T,i.layoutBox,S.layoutBox);const L=Cn();co(L,o,_.layoutBox),py(T,L)||(v=!0),y.options.layoutRoot&&(t.relativeTarget=L,t.relativeTargetOrigin=T,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:o,snapshot:i,delta:f,layoutDelta:h,hasLayoutChanged:x,hasRelativeTargetChanged:v})}else if(t.isLead()){const{onExitComplete:o}=t.options;o&&o()}t.options.transition=void 0}function aN(t){to&&Dr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function oN(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function lN(t){t.clearSnapshot()}function xg(t){t.clearMeasurements()}function cN(t){t.isLayoutDirty=!1}function uN(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function gg(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function dN(t){t.resolveTargetDelta()}function mN(t){t.calcProjection()}function pN(t){t.resetSkewAndRotation()}function hN(t){t.removeLeadSnapshot()}function vg(t,e,i){t.translate=hn(e.translate,0,i),t.scale=hn(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function jg(t,e,i,o){t.min=hn(e.min,i.min,o),t.max=hn(e.max,i.max,o)}function fN(t,e,i,o){jg(t.x,e.x,i.x,o),jg(t.y,e.y,i.y,o)}function xN(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const gN={duration:.45,ease:[.4,0,.1,1]},yg=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),bg=yg("applewebkit/")&&!yg("chrome/")?Math.round:st;function Sg(t){t.min=bg(t.min),t.max=bg(t.max)}function vN(t){Sg(t.x),Sg(t.y)}function xy(t,e,i){return t==="position"||t==="preserve-aspect"&&!j6(pg(e),pg(i),.2)}function jN(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const yN=fy({attachResizeListener:(t,e)=>go(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Gd={current:void 0},gy=fy({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Gd.current){const t=new yN({});t.mount(window),t.setOptions({layoutScroll:!0}),Gd.current=t}return Gd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),bN={pan:{Feature:D6},drag:{Feature:$6,ProjectionNode:gy,MeasureLayout:cy}};function vy(t,e,i){var o;if(t instanceof Element)return[t];if(typeof t=="string"){let c=document;const m=(o=void 0)!==null&&o!==void 0?o:c.querySelectorAll(t);return m?Array.from(m):[]}return Array.from(t)}function jy(t,e){const i=vy(t),o=new AbortController,c={passive:!0,...e,signal:o.signal};return[i,c,()=>o.abort()]}function Ng(t){return e=>{e.pointerType==="touch"||Qj()||t(e)}}function SN(t,e,i={}){const[o,c,m]=jy(t,i),d=Ng(h=>{const{target:f}=h,x=e(h);if(!x||!f)return;const v=Ng(y=>{x(y),f.removeEventListener("pointerleave",v)});f.addEventListener("pointerleave",v,c)});return o.forEach(h=>{h.addEventListener("pointerenter",d,c)}),m}function wg(t,e,i){const{props:o}=t;t.animationState&&o.whileHover&&t.animationState.setActive("whileHover",i==="Start");const c="onHover"+i,m=o[c];m&&Ke.postRender(()=>m(e,_o(e)))}class NN extends lr{mount(){const{current:e}=this.node;e&&(this.unmount=SN(e,i=>(wg(this.node,i,"Start"),o=>wg(this.node,o,"End"))))}unmount(){}}class wN extends lr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=wo(go(this.node.current,"focus",()=>this.onFocus()),go(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const so=new WeakSet;function _g(t){return e=>{e.key==="Enter"&&t(e)}}function Id(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const _N=(t,e)=>{const i=t.currentTarget;if(!i)return;const o=_g(()=>{if(so.has(i))return;Id(i,"down");const c=_g(()=>{Id(i,"up")}),m=()=>Id(i,"cancel");i.addEventListener("keyup",c,e),i.addEventListener("blur",m,e)});i.addEventListener("keydown",o,e),i.addEventListener("blur",()=>i.removeEventListener("keydown",o),e)},CN=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function kN(t){return CN.has(t.tagName)||t.tabIndex!==-1}const yy=(t,e)=>e?t===e?!0:yy(t,e.parentElement):!1;function Cg(t){return Sp(t)&&!Qj()}function MN(t,e,i={}){const[o,c,m]=jy(t,i),d=h=>{const f=h.currentTarget;if(!Cg(h)||so.has(f))return;so.add(f);const x=e(h),v=(_,T)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",S),!(!Cg(_)||!so.has(f))&&(so.delete(f),x&&x(_,{success:T}))},y=_=>{v(_,i.useGlobalTarget||yy(f,_.target))},S=_=>{v(_,!1)};window.addEventListener("pointerup",y,c),window.addEventListener("pointercancel",S,c)};return o.forEach(h=>{kN(h)||(h.tabIndex=0),(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,c),h.addEventListener("focus",x=>_N(x,c),c)}),m}function kg(t,e,i){const{props:o}=t;t.animationState&&o.whileTap&&t.animationState.setActive("whileTap",i==="Start");const c="onTap"+(i==="End"?"":i),m=o[c];m&&Ke.postRender(()=>m(e,_o(e)))}class AN extends lr{mount(){const{current:e}=this.node;e&&(this.unmount=MN(e,i=>(kg(this.node,i,"Start"),(o,{success:c})=>kg(this.node,o,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Tm=new WeakMap,Yd=new WeakMap,RN=t=>{const e=Tm.get(t.target);e&&e(t)},LN=t=>{t.forEach(RN)};function TN({root:t,...e}){const i=t||document;Yd.has(i)||Yd.set(i,{});const o=Yd.get(i),c=JSON.stringify(e);return o[c]||(o[c]=new IntersectionObserver(LN,{root:t,...e})),o[c]}function EN(t,e,i){const o=TN(e);return Tm.set(t,i),o.observe(t),()=>{Tm.delete(t),o.unobserve(t)}}const $N={some:0,all:1};class DN extends lr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:i,margin:o,amount:c="some",once:m}=e,d={root:i?i.current:void 0,rootMargin:o,threshold:typeof c=="number"?c:$N[c]},h=f=>{const{isIntersecting:x}=f;if(this.isInView===x||(this.isInView=x,m&&!x&&this.hasEnteredView))return;x&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",x);const{onViewportEnter:v,onViewportLeave:y}=this.node.getProps(),S=x?v:y;S&&S(f)};return EN(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:i}=this.node;["amount","margin","root"].some(ON(e,i))&&this.startObserver()}unmount(){}}function ON({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}const BN={inView:{Feature:DN},tap:{Feature:AN},focus:{Feature:wN},hover:{Feature:NN}},zN={layout:{ProjectionNode:gy,MeasureLayout:cy}},bc=j.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Sc=j.createContext({}),_p=typeof window<"u",Nc=_p?j.useLayoutEffect:j.useEffect,by=j.createContext({strict:!1});function UN(t,e,i,o,c){var m,d;const{visualElement:h}=j.useContext(Sc),f=j.useContext(by),x=j.useContext(yc),v=j.useContext(bc).reducedMotion,y=j.useRef(null);o=o||f.renderer,!y.current&&o&&(y.current=o(t,{visualState:e,parent:h,props:i,presenceContext:x,blockInitialAnimation:x?x.initial===!1:!1,reducedMotionConfig:v}));const S=y.current,_=j.useContext(ly);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&PN(y.current,i,c,_);const T=j.useRef(!1);j.useInsertionEffect(()=>{S&&T.current&&S.update(i,x)});const L=i[Yj],k=j.useRef(!!L&&!(!((m=window.MotionHandoffIsComplete)===null||m===void 0)&&m.call(window,L))&&((d=window.MotionHasOptimisedAnimation)===null||d===void 0?void 0:d.call(window,L)));return Nc(()=>{S&&(T.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),wp.render(S.render),k.current&&S.animationState&&S.animationState.animateChanges())}),j.useEffect(()=>{S&&(!k.current&&S.animationState&&S.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{var A;(A=window.MotionHandoffMarkAsComplete)===null||A===void 0||A.call(window,L)}),k.current=!1))}),S}function PN(t,e,i,o){const{layoutId:c,layout:m,drag:d,dragConstraints:h,layoutScroll:f,layoutRoot:x}=e;t.projection=new i(t.latestValues,e["data-framer-portal-id"]?void 0:Sy(t.parent)),t.projection.setOptions({layoutId:c,layout:m,alwaysMeasureLayout:!!d||h&&Ri(h),visualElement:t,animationType:typeof m=="string"?m:"both",initialPromotionConfig:o,layoutScroll:f,layoutRoot:x})}function Sy(t){if(t)return t.options.allowProjection!==!1?t.projection:Sy(t.parent)}function HN(t,e,i){return j.useCallback(o=>{o&&t.mount&&t.mount(o),e&&(o?e.mount(o):e.unmount()),i&&(typeof i=="function"?i(o):Ri(i)&&(i.current=o))},[e])}function wc(t){return gc(t.animate)||ep.some(e=>ho(t[e]))}function Ny(t){return!!(wc(t)||t.variants)}function VN(t,e){if(wc(t)){const{initial:i,animate:o}=t;return{initial:i===!1||ho(i)?i:void 0,animate:ho(o)?o:void 0}}return t.inherit!==!1?e:{}}function qN(t){const{initial:e,animate:i}=VN(t,j.useContext(Sc));return j.useMemo(()=>({initial:e,animate:i}),[Mg(e),Mg(i)])}function Mg(t){return Array.isArray(t)?t.join(" "):t}const Ag={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},zi={};for(const t in Ag)zi[t]={isEnabled:e=>Ag[t].some(i=>!!e[i])};function FN(t){for(const e in t)zi[e]={...zi[e],...t[e]}}const XN=Symbol.for("motionComponentSymbol");function GN({preloadedFeatures:t,createVisualElement:e,useRender:i,useVisualState:o,Component:c}){t&&FN(t);function m(h,f){let x;const v={...j.useContext(bc),...h,layoutId:IN(h)},{isStatic:y}=v,S=qN(h),_=o(h,y);if(!y&&_p){YN();const T=ZN(v);x=T.MeasureLayout,S.visualElement=UN(c,_,v,e,T.ProjectionNode)}return n.jsxs(Sc.Provider,{value:S,children:[x&&S.visualElement?n.jsx(x,{visualElement:S.visualElement,...v}):null,i(c,h,HN(_,S.visualElement,f),_,y,S.visualElement)]})}const d=j.forwardRef(m);return d[XN]=c,d}function IN({layoutId:t}){const e=j.useContext(Np).id;return e&&t!==void 0?e+"-"+t:t}function YN(t,e){j.useContext(by).strict}function ZN(t){const{drag:e,layout:i}=zi;if(!e&&!i)return{};const o={...e,...i};return{MeasureLayout:e!=null&&e.isEnabled(t)||i!=null&&i.isEnabled(t)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}const KN=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Cp(t){return typeof t!="string"||t.includes("-")?!1:!!(KN.indexOf(t)>-1||/[A-Z]/u.test(t))}function wy(t,{style:e,vars:i},o,c){Object.assign(t.style,e,c&&c.getProjectionStyles(o));for(const m in i)t.style.setProperty(m,i[m])}const _y=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Cy(t,e,i,o){wy(t,e,void 0,o);for(const c in e.attrs)t.setAttribute(_y.has(c)?c:bp(c),e.attrs[c])}function ky(t,{layout:e,layoutId:i}){return Fr.has(t)||t.startsWith("origin")||(e||i!==void 0)&&(!!oc[t]||t==="opacity")}function kp(t,e,i){var o;const{style:c}=t,m={};for(const d in c)(Qn(c[d])||e.style&&Qn(e.style[d])||ky(d,t)||((o=i==null?void 0:i.getValue(d))===null||o===void 0?void 0:o.liveStyle)!==void 0)&&(m[d]=c[d]);return m}function My(t,e,i){const o=kp(t,e,i);for(const c in t)if(Qn(t[c])||Qn(e[c])){const m=bo.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;o[m]=t[c]}return o}function Gi(t){const e=j.useRef(null);return e.current===null&&(e.current=t()),e.current}function WN({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:i},o,c,m){const d={latestValues:QN(o,c,m,t),renderState:e()};return i&&(d.mount=h=>i(o,h,d)),d}const Ay=t=>(e,i)=>{const o=j.useContext(Sc),c=j.useContext(yc),m=()=>WN(t,e,o,c);return i?m():Gi(m)};function QN(t,e,i,o){const c={},m=o(t,{});for(const S in m)c[S]=Zl(m[S]);let{initial:d,animate:h}=t;const f=wc(t),x=Ny(t);e&&x&&!f&&t.inherit!==!1&&(d===void 0&&(d=e.initial),h===void 0&&(h=e.animate));let v=i?i.initial===!1:!1;v=v||d===!1;const y=v?h:d;if(y&&typeof y!="boolean"&&!gc(y)){const S=Array.isArray(y)?y:[y];for(let _=0;_<S.length;_++){const T=Qm(t,S[_]);if(T){const{transitionEnd:L,transition:k,...A}=T;for(const O in A){let B=A[O];if(Array.isArray(B)){const F=v?B.length-1:0;B=B[F]}B!==null&&(c[O]=B)}for(const O in L)c[O]=L[O]}}}return c}const Mp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Ry=()=>({...Mp(),attrs:{}}),Ly=(t,e)=>e&&typeof t=="number"?e.transform(t):t,JN={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ew=bo.length;function nw(t,e,i){let o="",c=!0;for(let m=0;m<ew;m++){const d=bo[m],h=t[d];if(h===void 0)continue;let f=!0;if(typeof h=="number"?f=h===(d.startsWith("scale")?1:0):f=parseFloat(h)===0,!f||i){const x=Ly(h,lp[d]);if(!f){c=!1;const v=JN[d]||d;o+=`${v}(${x}) `}i&&(e[d]=x)}}return o=o.trim(),i?o=i(e,c?"":o):c&&(o="none"),o}function Ap(t,e,i){const{style:o,vars:c,transformOrigin:m}=t;let d=!1,h=!1;for(const f in e){const x=e[f];if(Fr.has(f)){d=!0;continue}else if(Sj(f)){c[f]=x;continue}else{const v=Ly(x,lp[f]);f.startsWith("origin")?(h=!0,m[f]=v):o[f]=v}}if(e.transform||(d||i?o.transform=nw(e,t.transform,i):o.transform&&(o.transform="none")),h){const{originX:f="50%",originY:x="50%",originZ:v=0}=m;o.transformOrigin=`${f} ${x} ${v}`}}function Rg(t,e,i){return typeof t=="string"?t:ye.transform(e+i*t)}function tw(t,e,i){const o=Rg(e,t.x,t.width),c=Rg(i,t.y,t.height);return`${o} ${c}`}const sw={offset:"stroke-dashoffset",array:"stroke-dasharray"},rw={offset:"strokeDashoffset",array:"strokeDasharray"};function iw(t,e,i=1,o=0,c=!0){t.pathLength=1;const m=c?sw:rw;t[m.offset]=ye.transform(-o);const d=ye.transform(e),h=ye.transform(i);t[m.array]=`${d} ${h}`}function Rp(t,{attrX:e,attrY:i,attrScale:o,originX:c,originY:m,pathLength:d,pathSpacing:h=1,pathOffset:f=0,...x},v,y){if(Ap(t,x,y),v){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:S,style:_,dimensions:T}=t;S.transform&&(T&&(_.transform=S.transform),delete S.transform),T&&(c!==void 0||m!==void 0||_.transform)&&(_.transformOrigin=tw(T,c!==void 0?c:.5,m!==void 0?m:.5)),e!==void 0&&(S.x=e),i!==void 0&&(S.y=i),o!==void 0&&(S.scale=o),d!==void 0&&iw(S,d,h,f,!1)}const Lp=t=>typeof t=="string"&&t.toLowerCase()==="svg",aw={useVisualState:Ay({scrapeMotionValuesFromProps:My,createRenderState:Ry,onMount:(t,e,{renderState:i,latestValues:o})=>{Ke.read(()=>{try{i.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}),Ke.render(()=>{Rp(i,o,Lp(e.tagName),t.transformTemplate),Cy(e,i)})}})},ow={useVisualState:Ay({scrapeMotionValuesFromProps:kp,createRenderState:Mp})};function Ty(t,e,i){for(const o in e)!Qn(e[o])&&!ky(o,i)&&(t[o]=e[o])}function lw({transformTemplate:t},e){return j.useMemo(()=>{const i=Mp();return Ap(i,e,t),Object.assign({},i.vars,i.style)},[e])}function cw(t,e){const i=t.style||{},o={};return Ty(o,i,t),Object.assign(o,lw(t,e)),o}function uw(t,e){const i={},o=cw(t,e);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=o,i}const dw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function lc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||dw.has(t)}let Ey=t=>!lc(t);function mw(t){t&&(Ey=e=>e.startsWith("on")?!lc(e):t(e))}try{mw(require("@emotion/is-prop-valid").default)}catch{}function pw(t,e,i){const o={};for(const c in t)c==="values"&&typeof t.values=="object"||(Ey(c)||i===!0&&lc(c)||!e&&!lc(c)||t.draggable&&c.startsWith("onDrag"))&&(o[c]=t[c]);return o}function hw(t,e,i,o){const c=j.useMemo(()=>{const m=Ry();return Rp(m,e,Lp(o),t.transformTemplate),{...m.attrs,style:{...m.style}}},[e]);if(t.style){const m={};Ty(m,t.style,t),c.style={...m,...c.style}}return c}function fw(t=!1){return(i,o,c,{latestValues:m},d)=>{const f=(Cp(i)?hw:uw)(o,m,d,i),x=pw(o,typeof i=="string",t),v=i!==j.Fragment?{...x,...f,ref:c}:{},{children:y}=o,S=j.useMemo(()=>Qn(y)?y.get():y,[y]);return j.createElement(i,{...v,children:S})}}function xw(t,e){return function(o,{forwardMotionProps:c}={forwardMotionProps:!1}){const d={...Cp(o)?aw:ow,preloadedFeatures:t,useRender:fw(c),createVisualElement:e,Component:o};return GN(d)}}const Em={current:null},$y={current:!1};function gw(){if($y.current=!0,!!_p)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Em.current=t.matches;t.addListener(e),e()}else Em.current=!1}function vw(t,e,i){for(const o in e){const c=e[o],m=i[o];if(Qn(c))t.addValue(o,c);else if(Qn(m))t.addValue(o,Qt(c,{owner:t}));else if(m!==c)if(t.hasValue(o)){const d=t.getValue(o);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=t.getStaticValue(o);t.addValue(o,Qt(d!==void 0?d:c,{owner:t}))}}for(const o in i)e[o]===void 0&&t.removeValue(o);return e}const Lg=new WeakMap,jw=[..._j,Kn,ir],yw=t=>jw.find(wj(t)),Tg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class bw{scrapeMotionValuesFromProps(e,i,o){return{}}constructor({parent:e,props:i,presenceContext:o,reducedMotionConfig:c,blockInitialAnimation:m,visualState:d},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ip,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const S=es.now();this.renderScheduledAt<S&&(this.renderScheduledAt=S,Ke.render(this.render,!1,!0))};const{latestValues:f,renderState:x}=d;this.latestValues=f,this.baseTarget={...f},this.initialValues=i.initial?{...f}:{},this.renderState=x,this.parent=e,this.props=i,this.presenceContext=o,this.depth=e?e.depth+1:0,this.reducedMotionConfig=c,this.options=h,this.blockInitialAnimation=!!m,this.isControllingVariants=wc(i),this.isVariantNode=Ny(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...y}=this.scrapeMotionValuesFromProps(i,{},this);for(const S in y){const _=y[S];f[S]!==void 0&&Qn(_)&&_.set(f[S],!1)}}mount(e){this.current=e,Lg.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),$y.current||gw(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Em.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Lg.delete(this.current),this.projection&&this.projection.unmount(),Pt(this.notifyUpdate),Pt(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const i=this.features[e];i&&(i.unmount(),i.isMounted=!1)}this.current=null}bindToMotionValue(e,i){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const o=Fr.has(e),c=i.on("change",h=>{this.latestValues[e]=h,this.props.onUpdate&&Ke.preRender(this.notifyUpdate),o&&this.projection&&(this.projection.isTransformDirty=!0)}),m=i.on("renderRequest",this.scheduleRender);let d;window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,e,i)),this.valueSubscriptions.set(e,()=>{c(),m(),d&&d(),i.owner&&i.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in zi){const i=zi[e];if(!i)continue;const{isEnabled:o,Feature:c}=i;if(!this.features[e]&&c&&o(this.props)&&(this.features[e]=new c(this)),this.features[e]){const m=this.features[e];m.isMounted?m.update():(m.mount(),m.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Cn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,i){this.latestValues[e]=i}update(e,i){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let o=0;o<Tg.length;o++){const c=Tg[o];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const m="on"+c,d=e[m];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=vw(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(e),()=>i.variantChildren.delete(e)}addValue(e,i){const o=this.values.get(e);i!==o&&(o&&this.removeValue(e),this.bindToMotionValue(e,i),this.values.set(e,i),this.latestValues[e]=i.get())}removeValue(e){this.values.delete(e);const i=this.valueSubscriptions.get(e);i&&(i(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,i){if(this.props.values&&this.props.values[e])return this.props.values[e];let o=this.values.get(e);return o===void 0&&i!==void 0&&(o=Qt(i===null?void 0:i,{owner:this}),this.addValue(e,o)),o}readValue(e,i){var o;let c=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(o=this.getBaseTargetFromProps(this.props,e))!==null&&o!==void 0?o:this.readValueFromInstance(this.current,e,this.options);return c!=null&&(typeof c=="string"&&(yj(c)||jj(c))?c=parseFloat(c):!yw(c)&&ir.test(i)&&(c=Ej(e,i)),this.setBaseTarget(e,Qn(c)?c.get():c)),Qn(c)?c.get():c}setBaseTarget(e,i){this.baseTarget[e]=i}getBaseTarget(e){var i;const{initial:o}=this.props;let c;if(typeof o=="string"||typeof o=="object"){const d=Qm(this.props,o,(i=this.presenceContext)===null||i===void 0?void 0:i.custom);d&&(c=d[e])}if(o&&c!==void 0)return c;const m=this.getBaseTargetFromProps(this.props,e);return m!==void 0&&!Qn(m)?m:this.initialValues[e]!==void 0&&c===void 0?void 0:this.baseTarget[e]}on(e,i){return this.events[e]||(this.events[e]=new yp),this.events[e].add(i)}notify(e,...i){this.events[e]&&this.events[e].notify(...i)}}class Dy extends bw{constructor(){super(...arguments),this.KeyframeResolver=$j}sortInstanceNodePosition(e,i){return e.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(e,i){return e.style?e.style[i]:void 0}removeValueFromRenderState(e,{vars:i,style:o}){delete i[e],delete o[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Qn(e)&&(this.childSubscription=e.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}function Sw(t){return window.getComputedStyle(t)}class Nw extends Dy{constructor(){super(...arguments),this.type="html",this.renderInstance=wy}readValueFromInstance(e,i){if(Fr.has(i)){const o=cp(i);return o&&o.default||0}else{const o=Sw(e),c=(Sj(i)?o.getPropertyValue(i):o[i])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(e,{transformPagePoint:i}){return ay(e,i)}build(e,i,o){Ap(e,i,o.transformTemplate)}scrapeMotionValuesFromProps(e,i,o){return kp(e,i,o)}}class ww extends Dy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Cn}getBaseTargetFromProps(e,i){return e[i]}readValueFromInstance(e,i){if(Fr.has(i)){const o=cp(i);return o&&o.default||0}return i=_y.has(i)?i:bp(i),e.getAttribute(i)}scrapeMotionValuesFromProps(e,i,o){return My(e,i,o)}build(e,i,o){Rp(e,i,this.isSVGTag,o.transformTemplate)}renderInstance(e,i,o,c){Cy(e,i,o,c)}mount(e){this.isSVGTag=Lp(e.tagName),super.mount(e)}}const _w=(t,e)=>Cp(t)?new ww(e):new Nw(e,{allowProjection:t!==j.Fragment}),Cw=xw({...c6,...BN,...bN,...zN},_w),qe=cS(Cw);class kw extends j.Component{getSnapshotBeforeUpdate(e){const i=this.props.childRef.current;if(i&&e.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=i.offsetHeight||0,o.width=i.offsetWidth||0,o.top=i.offsetTop,o.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Mw({children:t,isPresent:e}){const i=j.useId(),o=j.useRef(null),c=j.useRef({width:0,height:0,top:0,left:0}),{nonce:m}=j.useContext(bc);return j.useInsertionEffect(()=>{const{width:d,height:h,top:f,left:x}=c.current;if(e||!o.current||!d||!h)return;o.current.dataset.motionPopId=i;const v=document.createElement("style");return m&&(v.nonce=m),document.head.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${h}px !important;
            top: ${f}px !important;
            left: ${x}px !important;
          }
        `),()=>{document.head.removeChild(v)}},[e]),n.jsx(kw,{isPresent:e,childRef:o,sizeRef:c,children:j.cloneElement(t,{ref:o})})}const Aw=({children:t,initial:e,isPresent:i,onExitComplete:o,custom:c,presenceAffectsLayout:m,mode:d})=>{const h=Gi(Rw),f=j.useId(),x=j.useCallback(y=>{h.set(y,!0);for(const S of h.values())if(!S)return;o&&o()},[h,o]),v=j.useMemo(()=>({id:f,initial:e,isPresent:i,custom:c,onExitComplete:x,register:y=>(h.set(y,!1),()=>h.delete(y))}),m?[Math.random(),x]:[i,x]);return j.useMemo(()=>{h.forEach((y,S)=>h.set(S,!1))},[i]),j.useEffect(()=>{!i&&!h.size&&o&&o()},[i]),d==="popLayout"&&(t=n.jsx(Mw,{isPresent:i,children:t})),n.jsx(yc.Provider,{value:v,children:t})};function Rw(){return new Map}const Fl=t=>t.key||"";function Eg(t){const e=[];return j.Children.forEach(t,i=>{j.isValidElement(i)&&e.push(i)}),e}const Lw=({children:t,exitBeforeEnter:e,custom:i,initial:o=!0,onExitComplete:c,presenceAffectsLayout:m=!0,mode:d="sync"})=>{const h=j.useMemo(()=>Eg(t),[t]),f=h.map(Fl),x=j.useRef(!0),v=j.useRef(h),y=Gi(()=>new Map),[S,_]=j.useState(h),[T,L]=j.useState(h);Nc(()=>{x.current=!1,v.current=h;for(let O=0;O<T.length;O++){const B=Fl(T[O]);f.includes(B)?y.delete(B):y.get(B)!==!0&&y.set(B,!1)}},[T,f.length,f.join("-")]);const k=[];if(h!==S){let O=[...h];for(let B=0;B<T.length;B++){const F=T[B],z=Fl(F);f.includes(z)||(O.splice(B,0,F),k.push(F))}d==="wait"&&k.length&&(O=k),L(Eg(O)),_(h);return}const{forceRender:A}=j.useContext(Np);return n.jsx(n.Fragment,{children:T.map(O=>{const B=Fl(O),F=h===T||f.includes(B),z=()=>{if(y.has(B))y.set(B,!0);else return;let Y=!0;y.forEach(de=>{de||(Y=!1)}),Y&&(A==null||A(),L(v.current),c&&c())};return n.jsx(Aw,{isPresent:F,initial:!x.current||o?void 0:!1,custom:F?void 0:i,presenceAffectsLayout:m,mode:d,onExitComplete:F?void 0:z,children:O},B)})})};function Tw(t){const e=Gi(()=>Qt(t)),{isStatic:i}=j.useContext(bc);if(i){const[,o]=j.useState(t);j.useEffect(()=>e.on("change",o),[])}return e}function Oy(t,e){const i=Tw(e()),o=()=>i.set(e());return o(),Nc(()=>{const c=()=>Ke.preRender(o,!1,!0),m=t.map(d=>d.on("change",c));return()=>{m.forEach(d=>d()),Pt(o)}}),i}const Ew=t=>t&&typeof t=="object"&&t.mix,$w=t=>Ew(t)?t.mix:void 0;function Dw(...t){const e=!Array.isArray(t[0]),i=e?0:-1,o=t[0+i],c=t[1+i],m=t[2+i],d=t[3+i],h=hp(c,m,{mixer:$w(m[0]),...d});return e?h(o):h}function Ow(t){ao.current=[],t();const e=Oy(ao.current,t);return ao.current=void 0,e}function Zd(t,e,i,o){if(typeof t=="function")return Ow(t);const c=typeof e=="function"?e:Dw(e,i,o);return Array.isArray(t)?$g(t,c):$g([t],([m])=>c(m))}function $g(t,e){const i=Gi(()=>[]);return Oy(t,()=>{i.length=0;const o=t.length;for(let c=0;c<o;c++)i[c]=t[c].get();return e(i)})}const Kl=new WeakMap;let tr;function Bw(t,e){if(e){const{inlineSize:i,blockSize:o}=e[0];return{width:i,height:o}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function zw({target:t,contentRect:e,borderBoxSize:i}){var o;(o=Kl.get(t))===null||o===void 0||o.forEach(c=>{c({target:t,contentSize:e,get size(){return Bw(t,i)}})})}function Uw(t){t.forEach(zw)}function Pw(){typeof ResizeObserver>"u"||(tr=new ResizeObserver(Uw))}function Hw(t,e){tr||Pw();const i=vy(t);return i.forEach(o=>{let c=Kl.get(o);c||(c=new Set,Kl.set(o,c)),c.add(e),tr==null||tr.observe(o)}),()=>{i.forEach(o=>{const c=Kl.get(o);c==null||c.delete(e),c!=null&&c.size||tr==null||tr.unobserve(o)})}}const Wl=new Set;let uo;function Vw(){uo=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};Wl.forEach(i=>i(e))},window.addEventListener("resize",uo)}function qw(t){return Wl.add(t),uo||Vw(),()=>{Wl.delete(t),!Wl.size&&uo&&(uo=void 0)}}function Fw(t,e){return typeof t=="function"?qw(t):Hw(t,e)}const Xw=50,Dg=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),Gw=()=>({time:0,x:Dg(),y:Dg()}),Iw={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Og(t,e,i,o){const c=i[e],{length:m,position:d}=Iw[e],h=c.current,f=i.time;c.current=t[`scroll${d}`],c.scrollLength=t[`scroll${m}`]-t[`client${m}`],c.offset.length=0,c.offset[0]=0,c.offset[1]=c.scrollLength,c.progress=Ur(0,c.scrollLength,c.current);const x=o-f;c.velocity=x>Xw?0:dp(c.current-h,x)}function Yw(t,e,i){Og(t,"x",e,i),Og(t,"y",e,i),e.time=i}function Zw(t,e){const i={x:0,y:0};let o=t;for(;o&&o!==e;)if(o instanceof HTMLElement)i.x+=o.offsetLeft,i.y+=o.offsetTop,o=o.offsetParent;else if(o.tagName==="svg"){const c=o.getBoundingClientRect();o=o.parentElement;const m=o.getBoundingClientRect();i.x+=c.left-m.left,i.y+=c.top-m.top}else if(o instanceof SVGGraphicsElement){const{x:c,y:m}=o.getBBox();i.x+=c,i.y+=m;let d=null,h=o.parentNode;for(;!d;)h.tagName==="svg"&&(d=h),h=o.parentNode;o=d}else break;return i}const Kw={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},$m={start:0,center:.5,end:1};function Bg(t,e,i=0){let o=0;if(t in $m&&(t=$m[t]),typeof t=="string"){const c=parseFloat(t);t.endsWith("px")?o=c:t.endsWith("%")?t=c/100:t.endsWith("vw")?o=c/100*document.documentElement.clientWidth:t.endsWith("vh")?o=c/100*document.documentElement.clientHeight:t=c}return typeof t=="number"&&(o=e*t),i+o}const Ww=[0,0];function Qw(t,e,i,o){let c=Array.isArray(t)?t:Ww,m=0,d=0;return typeof t=="number"?c=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?c=t.split(" "):c=[t,$m[t]?t:"0"]),m=Bg(c[0],i,o),d=Bg(c[1],e),m-d}const Jw={x:0,y:0};function e_(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function n_(t,e,i){const{offset:o=Kw.All}=i,{target:c=t,axis:m="y"}=i,d=m==="y"?"height":"width",h=c!==t?Zw(c,t):Jw,f=c===t?{width:t.scrollWidth,height:t.scrollHeight}:e_(c),x={width:t.clientWidth,height:t.clientHeight};e[m].offset.length=0;let v=!e[m].interpolate;const y=o.length;for(let S=0;S<y;S++){const _=Qw(o[S],x[d],f[d],h[m]);!v&&_!==e[m].interpolatorOffsets[S]&&(v=!0),e[m].offset[S]=_}v&&(e[m].interpolate=hp(e[m].offset,qj(o)),e[m].interpolatorOffsets=[...e[m].offset]),e[m].progress=e[m].interpolate(e[m].current)}function t_(t,e=t,i){if(i.x.targetOffset=0,i.y.targetOffset=0,e!==t){let o=e;for(;o&&o!==t;)i.x.targetOffset+=o.offsetLeft,i.y.targetOffset+=o.offsetTop,o=o.offsetParent}i.x.targetLength=e===t?e.scrollWidth:e.clientWidth,i.y.targetLength=e===t?e.scrollHeight:e.clientHeight,i.x.containerLength=t.clientWidth,i.y.containerLength=t.clientHeight}function s_(t,e,i,o={}){return{measure:()=>t_(t,o.target,i),update:c=>{Yw(t,i,c),(o.offset||o.target)&&n_(t,i,o)},notify:()=>e(i)}}const eo=new WeakMap,zg=new WeakMap,Kd=new WeakMap,Ug=t=>t===document.documentElement?window:t;function Tp(t,{container:e=document.documentElement,...i}={}){let o=Kd.get(e);o||(o=new Set,Kd.set(e,o));const c=Gw(),m=s_(e,t,c,i);if(o.add(m),!eo.has(e)){const h=()=>{for(const S of o)S.measure()},f=()=>{for(const S of o)S.update(Hn.timestamp)},x=()=>{for(const S of o)S.notify()},v=()=>{Ke.read(h,!1,!0),Ke.read(f,!1,!0),Ke.update(x,!1,!0)};eo.set(e,v);const y=Ug(e);window.addEventListener("resize",v,{passive:!0}),e!==document.documentElement&&zg.set(e,Fw(e,v)),y.addEventListener("scroll",v,{passive:!0})}const d=eo.get(e);return Ke.read(d,!1,!0),()=>{var h;Pt(d);const f=Kd.get(e);if(!f||(f.delete(m),f.size))return;const x=eo.get(e);eo.delete(e),x&&(Ug(e).removeEventListener("scroll",x),(h=zg.get(e))===null||h===void 0||h(),window.removeEventListener("resize",x))}}function By(t,e){let i;const o=()=>{const{currentTime:c}=e,d=(c===null?0:c.value)/100;i!==d&&t(d),i=d};return Ke.update(o,!0),()=>Pt(o)}function r_({source:t,container:e,axis:i="y"}){t&&(e=t);const o={value:0},c=Tp(m=>{o.value=m[i].progress*100},{container:e,axis:i});return{currentTime:o,cancel:c}}const Wd=new Map;function zy({source:t,container:e=document.documentElement,axis:i="y"}={}){t&&(e=t),Wd.has(e)||Wd.set(e,{});const o=Wd.get(e);return o[i]||(o[i]=Ij()?new ScrollTimeline({source:e,axis:i}):r_({source:e,axis:i})),o[i]}function i_(t){return t.length===2}function Uy(t){return t&&(t.target||t.offset)}function a_(t,e){return i_(t)||Uy(e)?Tp(i=>{t(i[e.axis].progress,i)},e):By(t,zy(e))}function o_(t,e){if(t.flatten(),Uy(e))return t.pause(),Tp(i=>{t.time=t.duration*i[e.axis].progress},e);{const i=zy(e);return t.attachTimeline?t.attachTimeline(i,o=>(o.pause(),By(c=>{o.time=o.duration*c},i))):st}}function l_(t,{axis:e="y",...i}={}){const o={axis:e,...i};return typeof t=="function"?a_(t,o):o_(t,o)}function Pg(t,e){gS(!!(!e||e.current))}const c_=()=>({scrollX:Qt(0),scrollY:Qt(0),scrollXProgress:Qt(0),scrollYProgress:Qt(0)});function u_({container:t,target:e,layoutEffect:i=!0,...o}={}){const c=Gi(c_);return(i?Nc:j.useEffect)(()=>(Pg("target",e),Pg("container",t),l_((d,{x:h,y:f})=>{c.scrollX.set(h.current),c.scrollXProgress.set(h.progress),c.scrollY.set(f.current),c.scrollYProgress.set(f.progress)},{...o,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[t,e,JSON.stringify(o.offset)]),c}const d_=[{path:"tutorial",text:"基础版",icon:B3},{path:"advance",text:"架构尊享版",icon:z3},{path:"docs",text:"内置组件",icon:U3}];function m_(){const t=j.useRef(null);return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"md:hidden flex items-center text-gray-700",onClick:()=>t.current.show(),children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"})})}),n.jsxs(xc,{ref:t,direction:"right",width:"70%",children:[n.jsxs(qe.header,{className:"sticky top-0 flex px-6 h-24 items-center",...Xl(),children:[n.jsx("div",{className:"rounded-full p-2 bg-gray-800",children:n.jsx(G3,{size:20,color:"#FFF"})}),n.jsxs("div",{className:"ml-3",children:[n.jsx("div",{children:"导航"}),n.jsx("div",{className:"text-xs text-gray-400",children:"开发者：这波能反杀"})]})]}),d_.map((e,i)=>n.jsx(qe.div,{className:"flex items-center text-gray-700 bg-white px-6 py-4",...Xl(.1*(i+1)),children:n.jsxs(Vr,{className:"flex items-center justify-between w-full",to:e.path,children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx(e.icon,{size:20}),n.jsx("div",{className:"ml-2",children:e.text})]}),n.jsx(fm,{size:18})]})},e.path)),n.jsxs(qe.div,{className:"flex items-center bg-white px-6 py-4 justify-between",...Xl(.4),children:[n.jsx(aj,{}),n.jsx(fm,{size:18})]}),n.jsx(qe.div,{className:"flex bg-white justify-center mt-8",...Xl(.5),children:n.jsx(lj,{})})]})]})}function Xl(t=0){return{initial:{x:30,opacity:0},animate:{x:0,opacity:1},transition:{duration:.4,delay:t}}}const p_=[{path:"tutorial",text:"基础版"},{path:"advance",text:"尊享版"},{path:"docs",text:"内置组件"}];function h_(){return n.jsxs(qe.header,{initial:{y:-60,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},className:"fixed z-50 top-0 flex justify-between min-w-[320px] bg-white/80 border-b border-slate-200 backdrop-blur-sm w-full",children:[n.jsx("aside",{id:"vp-aside",className:"fixed top-0 h-16 bg-gray-50 items-center",children:n.jsx("div",{className:"px-4",children:n.jsx(vo,{})})}),n.jsxs("div",{id:"vp-content",className:"h-16 flex items-center pr-4 md:pr-0",children:[n.jsxs("div",{className:"flex px-4 md:px-8 2xl:px-24 flex-1",children:[n.jsx("div",{className:"md:hidden",children:n.jsx(vo,{})}),p_.map((t,e)=>n.jsx(Vr,{to:t.path,className:"hidden md:block mr-6 text-gray-500",end:!1,activeName:"text-gray-900",children:t.text},t.path))]}),n.jsxs("aside",{id:"hp-aside",className:"hidden md:flex h-16 items-center pr-4 lg:pr-6 space-x-4",children:[n.jsx(aj,{}),n.jsx(lj,{})]}),n.jsx(m_,{})]})]})}function vo(){return n.jsxs(Vr,{className:"flex items-center",to:"/",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-6",children:n.jsx("path",{fillRule:"evenodd",d:"M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})}),n.jsx("div",{className:"font-bold ml-2",children:"React 19 全解"})]})}function f_(){const[t]=j.useState(oS);return n.jsx(j.Suspense,{children:n.jsx(x_,{promise:t})})}function x_({promise:t}){const e=j.use(t);return lS(e),n.jsxs(n.Fragment,{children:[n.jsx(h_,{className:"line",auth:e}),n.jsx(D5,{})]})}function g_(){return n.jsx("div",{className:"fixed top-0 inset-0 -z-10 mx-0 max-w-none overflow-hidden",children:n.jsxs("div",{className:"absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]",children:[n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100",children:n.jsxs("svg",{"aria-hidden":"true",className:"absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5",children:[n.jsx("defs",{children:n.jsx("pattern",{id:":S1:",width:"72",height:"56",patternUnits:"userSpaceOnUse",x:"-12",y:"4",children:n.jsx("path",{d:"M.5 56V.5H72",fill:"none"})})}),n.jsx("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#:S1:)"}),n.jsxs("svg",{x:"-12",y:"4",className:"overflow-visible",children:[n.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"288",y:"168"}),n.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"144",y:"56"}),n.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"504",y:"168"}),n.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"720",y:"336"})]})]})}),n.jsx("svg",{viewBox:"0 0 1113 440","aria-hidden":"true",className:"absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden",children:n.jsx("path",{d:"M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"})})]})})}const v_="/assets/ercode-w1g_eexN.png";function j_(){const t=j.useRef(null),e=j.useRef(null),{scrollYProgress:i}=u_({target:e,offset:["end start","start start"]});function o(f){f.preventDefault(),t.current.show()}function c(f){{const x=document.getElementById(f);x&&x.scrollIntoView({block:"start",behavior:"smooth"})}}const m=Zd(i,[1,0],[0,555]),d=Zd(i,[1,0],[1,0]),h=Zd(i,[1,0],[1.5,1]);return n.jsxs(qe.div,{id:"banner",ref:e,className:"relative overflow-hidden -mt-16",children:[n.jsx("div",{className:"bg-white bg-opacity-90",children:n.jsxs("div",{className:"pt-32 pb-14 md:py-56 max-w-[800px] mx-auto px-6 md:px-8 space-y-8 md:space-y-12",children:[n.jsxs(qe.div,{className:"flex items-center space-x-2 justify-center",initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.5},children:[n.jsx("span",{children:"Created by"}),n.jsx("img",{className:"size-8 rounded-full overflow-hidden",src:"https://avatars.githubusercontent.com/u/13758605?u=1c26a12708f649e096bc17d934d317d01255ee92&v=4",alt:""}),n.jsx("span",{children:"这波能反杀"})]}),n.jsx(qe.h2,{...Mn(),className:"text-3xl md:text-5xl text-center font-bold",children:"React 19 全解"}),n.jsx(qe.p,{...Mn(.1),className:"text-gray-800 leading-8 text-md text-center text-lg tracking-wide",children:"React@19 为开发者带来了新的开发理念，这又是一次开发方式上的一次变革。并且在开发体验和性能上都有大幅度的提升，值得每一位 React 开发者学习。 本专栏是全网第一本系统学习 React 19 的专栏。在公众号「这波能反杀」首发，受到了大量粉丝的喜爱。专栏中包含大量实践案例，深入简出，理论结合实践为大家分享 React19 的学习，赶紧行动吧。"}),n.jsxs(qe.div,{...Mn(.2),className:"flex items-center justify-center",children:[n.jsxs($n,{to:"tutorial/index",className:"inline-flex items-center px-5 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm rounded-md",children:[n.jsx("span",{className:"mr-2",children:"快速开始"}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"})})]}),n.jsx("a",{onClick:o,href:"",className:"inline-flex px-4 py-2 text-gray-600 ring-1 ring-gray-200 text-sm rounded-md ml-4",children:n.jsx("span",{children:"关注公众号"})}),n.jsx(yo,{ref:t,title:"Follow me!",children:n.jsx("img",{src:v_,alt:""})}),n.jsxs("a",{onClick:()=>c("price"),className:"inline-flex px-4 py-2 text-white text-sm rounded-md ml-4 bg-red-600 space-x-2 cursor-pointer",children:[n.jsx(J3,{size:18}),n.jsx("span",{children:"立即购买"})]})]})]})}),n.jsx(qe.div,{className:"absolute -z-10 bottom-0 h-full w-full bg-blue-300 min-w-[1255px]",style:{opacity:d,translateY:m,scale:h},children:n.jsx("img",{className:"w-full",src:"https://buildui.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F82X8TbwR0mxbABn6Hyoi&w=750&q=75",alt:""})})]})}function we(t){const{children:e,start:i,end:o,around:c,between:m,className:d,center:h,col:f,...x}=t,y=Fe("flex items-center flex-row",{"flex-col":f,"justify-start":i,"justify-end":o,"justify-around":c,"justify-between":m,"justify-center":h},d);return n.jsx(y_,{className:Hr(y),...x,children:e})}function y_(t){const{className:e,children:i,...o}=t;let c="",m="",d="";Object.keys(o).forEach(f=>{f.indexOf("bg-")===0&&(c+=`${f} `),f.indexOf("border-")===0&&(m+=` ${f} `),f.indexOf("rounded-")===0&&(d+=` ${f} `)});const h=Fe(c,m,d,e);return n.jsx("div",{className:Hr(h),...o,children:i})}function b_(){const t=[{desc:"已购买",count:700,icon:tS,delay:.1},{desc:"已更新",count:50,icon:Y3,delay:.2},{desc:"内置案例",count:60,icon:I3,delay:.3}];return n.jsx("div",{className:"py-14 md:py-28 bg-opacity-70 max-w-[1080px] mx-auto px-6 flex justify-between",children:t.map((e,i)=>j.createElement(qe.a,{className:"block",href:e.url,...Mn(e.delay),target:"_blank",key:e.url},n.jsxs(we,{className:"",children:[n.jsx(we,{className:"bg-red-100 rounded-full p-2 md:p-5",children:n.jsx(e.icon,{className:"text-red-600"})}),n.jsxs("div",{col:!0,className:"ml-2 md:ml-10",children:[n.jsxs("div",{className:"font-bold text-base md:text-2xl",children:[e.count,"+"]}),n.jsx("div",{className:"md:mt-2 text-sm md:text-base",children:e.desc})]})]})))})}const Hg=t=>{let e;const i=new Set,o=(x,v)=>{const y=typeof x=="function"?x(e):x;if(!Object.is(y,e)){const S=e;e=v??(typeof y!="object"||y===null)?y:Object.assign({},e,y),i.forEach(_=>_(e,S))}},c=()=>e,h={setState:o,getState:c,getInitialState:()=>f,subscribe:x=>(i.add(x),()=>i.delete(x))},f=e=t(o,c,h);return h},S_=t=>t?Hg(t):Hg,N_=t=>t;function w_(t,e=N_){const i=Ut.useSyncExternalStore(t.subscribe,()=>e(t.getState()),()=>e(t.getInitialState()));return Ut.useDebugValue(i),i}const __=t=>{const e=S_(t),i=o=>w_(e,o);return Object.assign(i,e),i},C_=t=>__(t),k_=[{icon:"🍅",label:"Tomato"},{icon:"🥬",label:"Lettuce"},{icon:"🧀",label:"Cheese"},{icon:"🥕",label:"Carrot"},{icon:"🍌",label:"Banana"},{icon:"🫐",label:"Blueberries"},{icon:"🥂",label:"Champers?"}],[M_,A_,R_]=k_,Vg=[M_,A_,R_],Py=C_(t=>({tabs:Vg,selectedTab:Vg[0],setSelectedTab:e=>t(()=>({selectedTab:e}))}));function L_(){const{tabs:t,selectedTab:e,setSelectedTab:i}=Py(o=>o);return n.jsx("ul",{className:"reset tabs",children:t.map(o=>n.jsxs(qe.li,{className:"reset tab",initial:!1,animate:{backgroundColor:o===e?"#eee":"#eee0"},onClick:()=>i(o),children:[`${o.icon} ${o.label}`,o===e?n.jsx(qe.div,{className:"underline",layoutId:"underline",id:"underline"}):null]},o.label))})}function T_(){const t=Py(e=>e.selectedTab);return n.jsx(Lw,{mode:"wait",children:n.jsx(qe.div,{className:"icon",initial:{y:10,opacity:0},animate:{y:0,opacity:1},exit:{y:-10,opacity:0},transition:{duration:.2},children:t?t.icon:"😋"},t?t.label:"empty")})}function E_(){return n.jsxs("div",{className:"index_tab_case",children:[n.jsx("nav",{className:"nav",children:n.jsx(L_,{})}),n.jsx("main",{children:n.jsx(T_,{})})]})}const $_=`import TabCaseHeader from './header'
import TabCaseContent from './content'
import './index.css'

export default function SharedLayoutAnimation() {  
  return (
    <div className='index_tab_case'>
      <nav className='nav'>
        <TabCaseHeader />
      </nav>
      <main>
        <TabCaseContent />
      </main>
    </div>
  )
}

`,D_=`import { motion } from 'motion/react'
import {useStore} from './store'
import './index.css'

export default function TabCaseHeader() {
  const {tabs, selectedTab, setSelectedTab} = useStore((state) => state)
  return (
    <ul className='reset tabs'>
      {tabs.map((item) => (
        <motion.li 
          className='reset tab'
          key={item.label} 
          initial={false}
          animate={{ backgroundColor: item === selectedTab ? "#eee" : "#eee0" }}
          onClick={() => setSelectedTab(item)}
        >
          {\`\${item.icon} \${item.label}\`}
          {item === selectedTab ? <motion.div className='underline' layoutId="underline" id="underline" /> : null}
        </motion.li>
      ))}
    </ul>
  )
}

`,O_=`import { AnimatePresence, motion } from 'motion/react'
import {useStore} from './store'
import './index.css'

export default function TabCaseContent() {
  const selectedTab =  useStore(state => state.selectedTab)
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className='icon'
        key={selectedTab ? selectedTab.label : "empty"}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {selectedTab ? selectedTab.icon : "😋"} 
      </motion.div>
    </AnimatePresence>
  )
}

`,B_=`import {create} from 'zustand'

export const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
]

const [tomato, lettuce, cheese] = allIngredients
const tabs = [tomato, lettuce, cheese]

export const useStore = create((set) => {
  return {
    tabs,
    selectedTab: tabs[0],
    setSelectedTab: (item) => set(() => ({selectedTab: item}))
  }
})`;function Wn(t){const{className:e}=t,[i,o]=j.useState(!0),c=j.useRef(null);j.useEffect(()=>{setTimeout(()=>{const f=c.current.getBoundingClientRect().height;c.current.style.minHeight=`${f}px`},50)},[]);function m(){o(!1),setTimeout(()=>{o(!0)},40)}const h=Fe("border rounded border-gray-200",e);return n.jsxs("div",{className:h,children:[n.jsxs("header",{className:"flex border-b border-gray-200 bg-gray-50 items-center justify-between px-4 py-2",children:[n.jsxs(we,{children:[n.jsx(eS,{size:18}),n.jsx("div",{className:"ml-2",children:"Preview"})]}),n.jsx(Q3,{size:18,className:"text-red-400 cursor-pointer",onClick:m})]}),n.jsx("div",{className:"p-4",ref:c,children:i?t.children:null})]})}function z_(t,e){if(t==null)return{};var i={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(e.indexOf(o)>=0)continue;i[o]=t[o]}return i}function U_(t,e){if(t==null)return{};var i,o,c=z_(t,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(t);for(o=0;o<m.length;o++)i=m[o],e.indexOf(i)>=0||{}.propertyIsEnumerable.call(t,i)&&(c[i]=t[i])}return c}function Dm(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,o=Array(e);i<e;i++)o[i]=t[i];return o}function P_(t){if(Array.isArray(t))return Dm(t)}function H_(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function V_(t,e){if(t){if(typeof t=="string")return Dm(t,e);var i={}.toString.call(t).slice(8,-1);return i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set"?Array.from(t):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?Dm(t,e):void 0}}function q_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F_(t){return P_(t)||H_(t)||V_(t)||q_()}function jo(t){"@babel/helpers - typeof";return jo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jo(t)}function X_(t,e){if(jo(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e||"default");if(jo(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function G_(t){var e=X_(t,"string");return jo(e)=="symbol"?e:e+""}function Hy(t,e,i){return(e=G_(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Om(){return Om=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)({}).hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},Om.apply(null,arguments)}function qg(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),i.push.apply(i,o)}return i}function $i(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?qg(Object(i),!0).forEach(function(o){Hy(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):qg(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function I_(t){var e=t.length;if(e===0||e===1)return t;if(e===2)return[t[0],t[1],"".concat(t[0],".").concat(t[1]),"".concat(t[1],".").concat(t[0])];if(e===3)return[t[0],t[1],t[2],"".concat(t[0],".").concat(t[1]),"".concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[0]),"".concat(t[1],".").concat(t[2]),"".concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[1]),"".concat(t[0],".").concat(t[1],".").concat(t[2]),"".concat(t[0],".").concat(t[2],".").concat(t[1]),"".concat(t[1],".").concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[0],".").concat(t[1]),"".concat(t[2],".").concat(t[1],".").concat(t[0])];if(e>=4)return[t[0],t[1],t[2],t[3],"".concat(t[0],".").concat(t[1]),"".concat(t[0],".").concat(t[2]),"".concat(t[0],".").concat(t[3]),"".concat(t[1],".").concat(t[0]),"".concat(t[1],".").concat(t[2]),"".concat(t[1],".").concat(t[3]),"".concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[1]),"".concat(t[2],".").concat(t[3]),"".concat(t[3],".").concat(t[0]),"".concat(t[3],".").concat(t[1]),"".concat(t[3],".").concat(t[2]),"".concat(t[0],".").concat(t[1],".").concat(t[2]),"".concat(t[0],".").concat(t[1],".").concat(t[3]),"".concat(t[0],".").concat(t[2],".").concat(t[1]),"".concat(t[0],".").concat(t[2],".").concat(t[3]),"".concat(t[0],".").concat(t[3],".").concat(t[1]),"".concat(t[0],".").concat(t[3],".").concat(t[2]),"".concat(t[1],".").concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[0],".").concat(t[3]),"".concat(t[1],".").concat(t[2],".").concat(t[0]),"".concat(t[1],".").concat(t[2],".").concat(t[3]),"".concat(t[1],".").concat(t[3],".").concat(t[0]),"".concat(t[1],".").concat(t[3],".").concat(t[2]),"".concat(t[2],".").concat(t[0],".").concat(t[1]),"".concat(t[2],".").concat(t[0],".").concat(t[3]),"".concat(t[2],".").concat(t[1],".").concat(t[0]),"".concat(t[2],".").concat(t[1],".").concat(t[3]),"".concat(t[2],".").concat(t[3],".").concat(t[0]),"".concat(t[2],".").concat(t[3],".").concat(t[1]),"".concat(t[3],".").concat(t[0],".").concat(t[1]),"".concat(t[3],".").concat(t[0],".").concat(t[2]),"".concat(t[3],".").concat(t[1],".").concat(t[0]),"".concat(t[3],".").concat(t[1],".").concat(t[2]),"".concat(t[3],".").concat(t[2],".").concat(t[0]),"".concat(t[3],".").concat(t[2],".").concat(t[1]),"".concat(t[0],".").concat(t[1],".").concat(t[2],".").concat(t[3]),"".concat(t[0],".").concat(t[1],".").concat(t[3],".").concat(t[2]),"".concat(t[0],".").concat(t[2],".").concat(t[1],".").concat(t[3]),"".concat(t[0],".").concat(t[2],".").concat(t[3],".").concat(t[1]),"".concat(t[0],".").concat(t[3],".").concat(t[1],".").concat(t[2]),"".concat(t[0],".").concat(t[3],".").concat(t[2],".").concat(t[1]),"".concat(t[1],".").concat(t[0],".").concat(t[2],".").concat(t[3]),"".concat(t[1],".").concat(t[0],".").concat(t[3],".").concat(t[2]),"".concat(t[1],".").concat(t[2],".").concat(t[0],".").concat(t[3]),"".concat(t[1],".").concat(t[2],".").concat(t[3],".").concat(t[0]),"".concat(t[1],".").concat(t[3],".").concat(t[0],".").concat(t[2]),"".concat(t[1],".").concat(t[3],".").concat(t[2],".").concat(t[0]),"".concat(t[2],".").concat(t[0],".").concat(t[1],".").concat(t[3]),"".concat(t[2],".").concat(t[0],".").concat(t[3],".").concat(t[1]),"".concat(t[2],".").concat(t[1],".").concat(t[0],".").concat(t[3]),"".concat(t[2],".").concat(t[1],".").concat(t[3],".").concat(t[0]),"".concat(t[2],".").concat(t[3],".").concat(t[0],".").concat(t[1]),"".concat(t[2],".").concat(t[3],".").concat(t[1],".").concat(t[0]),"".concat(t[3],".").concat(t[0],".").concat(t[1],".").concat(t[2]),"".concat(t[3],".").concat(t[0],".").concat(t[2],".").concat(t[1]),"".concat(t[3],".").concat(t[1],".").concat(t[0],".").concat(t[2]),"".concat(t[3],".").concat(t[1],".").concat(t[2],".").concat(t[0]),"".concat(t[3],".").concat(t[2],".").concat(t[0],".").concat(t[1]),"".concat(t[3],".").concat(t[2],".").concat(t[1],".").concat(t[0])]}var Qd={};function Y_(t){if(t.length===0||t.length===1)return t;var e=t.join(".");return Qd[e]||(Qd[e]=I_(t)),Qd[e]}function Z_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0,o=t.filter(function(m){return m!=="token"}),c=Y_(o);return c.reduce(function(m,d){return $i($i({},m),i[d])},e)}function Fg(t){return t.join(" ")}function K_(t,e){var i=0;return function(o){return i+=1,o.map(function(c,m){return Vy({node:c,stylesheet:t,useInlineStyles:e,key:"code-segment-".concat(i,"-").concat(m)})})}}function Vy(t){var e=t.node,i=t.stylesheet,o=t.style,c=o===void 0?{}:o,m=t.useInlineStyles,d=t.key,h=e.properties,f=e.type,x=e.tagName,v=e.value;if(f==="text")return v;if(x){var y=K_(i,m),S;if(!m)S=$i($i({},h),{},{className:Fg(h.className)});else{var _=Object.keys(i).reduce(function(A,O){return O.split(".").forEach(function(B){A.includes(B)||A.push(B)}),A},[]),T=h.className&&h.className.includes("token")?["token"]:[],L=h.className&&T.concat(h.className.filter(function(A){return!_.includes(A)}));S=$i($i({},h),{},{className:Fg(L)||void 0,style:Z_(h.className,Object.assign({},h.style,c),i)})}var k=y(e.children);return Ut.createElement(x,Om({key:d},S),k)}}const W_=function(t,e){var i=t.listLanguages();return i.indexOf(e)!==-1};var Q_=["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","wrapLongLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"];function Xg(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),i.push.apply(i,o)}return i}function Wt(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Xg(Object(i),!0).forEach(function(o){Hy(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Xg(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}var J_=/\n/g;function e8(t){return t.match(J_)}function n8(t){var e=t.lines,i=t.startingLineNumber,o=t.style;return e.map(function(c,m){var d=m+i;return Ut.createElement("span",{key:"line-".concat(m),className:"react-syntax-highlighter-line-number",style:typeof o=="function"?o(d):o},"".concat(d,`
`))})}function t8(t){var e=t.codeString,i=t.codeStyle,o=t.containerStyle,c=o===void 0?{float:"left",paddingRight:"10px"}:o,m=t.numberStyle,d=m===void 0?{}:m,h=t.startingLineNumber;return Ut.createElement("code",{style:Object.assign({},i,c)},n8({lines:e.replace(/\n$/,"").split(`
`),style:d,startingLineNumber:h}))}function s8(t){return"".concat(t.toString().length,".25em")}function qy(t,e){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(t),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:e},children:[{type:"text",value:t}]}}function Fy(t,e,i){var o={display:"inline-block",minWidth:s8(i),paddingRight:"1em",textAlign:"right",userSelect:"none"},c=typeof t=="function"?t(e):t,m=Wt(Wt({},o),c);return m}function Ql(t){var e=t.children,i=t.lineNumber,o=t.lineNumberStyle,c=t.largestLineNumber,m=t.showInlineLineNumbers,d=t.lineProps,h=d===void 0?{}:d,f=t.className,x=f===void 0?[]:f,v=t.showLineNumbers,y=t.wrapLongLines,S=typeof h=="function"?h(i):h;if(S.className=x,i&&m){var _=Fy(o,i,c);e.unshift(qy(i,_))}return y&v&&(S.style=Wt(Wt({},S.style),{},{display:"flex"})),{type:"element",tagName:"span",properties:S,children:e}}function Xy(t){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[],o=0;o<t.length;o++){var c=t[o];if(c.type==="text")i.push(Ql({children:[c],className:F_(new Set(e))}));else if(c.children){var m=e.concat(c.properties.className);Xy(c.children,m).forEach(function(d){return i.push(d)})}}return i}function r8(t,e,i,o,c,m,d,h,f){var x,v=Xy(t.value),y=[],S=-1,_=0;function T(z,Y){var de=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return Ql({children:z,lineNumber:Y,lineNumberStyle:h,largestLineNumber:d,showInlineLineNumbers:c,lineProps:i,className:de,showLineNumbers:o,wrapLongLines:f})}function L(z,Y){if(o&&Y&&c){var de=Fy(h,Y,d);z.unshift(qy(Y,de))}return z}function k(z,Y){var de=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return e||de.length>0?T(z,Y,de):L(z,Y)}for(var A=function(){var Y=v[_],de=Y.children[0].value,te=e8(de);if(te){var Z=de.split(`
`);Z.forEach(function(me,De){var ge=o&&y.length+m,tn={type:"text",value:"".concat(me,`
`)};if(De===0){var We=v.slice(S+1,_).concat(Ql({children:[tn],className:Y.properties.className})),Xe=k(We,ge);y.push(Xe)}else if(De===Z.length-1){var I=v[_+1]&&v[_+1].children&&v[_+1].children[0],J={type:"text",value:"".concat(me)};if(I){var W=Ql({children:[J],className:Y.properties.className});v.splice(_+1,0,W)}else{var ve=[J],w=k(ve,ge,Y.properties.className);y.push(w)}}else{var q=[tn],ie=k(q,ge,Y.properties.className);y.push(ie)}}),S=_}_++};_<v.length;)A();if(S!==v.length-1){var O=v.slice(S+1,v.length);if(O&&O.length){var B=o&&y.length+m,F=k(O,B);y.push(F)}}return e?y:(x=[]).concat.apply(x,y)}function i8(t){var e=t.rows,i=t.stylesheet,o=t.useInlineStyles;return e.map(function(c,m){return Vy({node:c,stylesheet:i,useInlineStyles:o,key:"code-segement".concat(m)})})}function Gy(t){return t&&typeof t.highlightAuto<"u"}function a8(t){var e=t.astGenerator,i=t.language,o=t.code,c=t.defaultCodeValue;if(Gy(e)){var m=W_(e,i);return i==="text"?{value:c,language:"text"}:m?e.highlight(i,o):e.highlightAuto(o)}try{return i&&i!=="text"?{value:e.highlight(o,i)}:{value:c}}catch{return{value:c}}}function o8(t,e){return function(o){var c=o.language,m=o.children,d=o.style,h=d===void 0?e:d,f=o.customStyle,x=f===void 0?{}:f,v=o.codeTagProps,y=v===void 0?{className:c?"language-".concat(c):void 0,style:Wt(Wt({},h['code[class*="language-"]']),h['code[class*="language-'.concat(c,'"]')])}:v,S=o.useInlineStyles,_=S===void 0?!0:S,T=o.showLineNumbers,L=T===void 0?!1:T,k=o.showInlineLineNumbers,A=k===void 0?!0:k,O=o.startingLineNumber,B=O===void 0?1:O,F=o.lineNumberContainerStyle,z=o.lineNumberStyle,Y=z===void 0?{}:z,de=o.wrapLines,te=o.wrapLongLines,Z=te===void 0?!1:te,me=o.lineProps,De=me===void 0?{}:me,ge=o.renderer,tn=o.PreTag,We=tn===void 0?"pre":tn,Xe=o.CodeTag,I=Xe===void 0?"code":Xe,J=o.code,W=J===void 0?(Array.isArray(m)?m[0]:m)||"":J,ve=o.astGenerator,w=U_(o,Q_);ve=ve||t;var q=L?Ut.createElement(t8,{containerStyle:F,codeStyle:y.style||{},numberStyle:Y,startingLineNumber:B,codeString:W}):null,ie=h.hljs||h['pre[class*="language-"]']||{backgroundColor:"#fff"},pe=Gy(ve)?"hljs":"prismjs",ne=_?Object.assign({},w,{style:Object.assign({},ie,x)}):Object.assign({},w,{className:w.className?"".concat(pe," ").concat(w.className):pe,style:Object.assign({},x)});if(Z?y.style=Wt(Wt({},y.style),{},{whiteSpace:"pre-wrap"}):y.style=Wt(Wt({},y.style),{},{whiteSpace:"pre"}),!ve)return Ut.createElement(We,ne,q,Ut.createElement(I,y,W));(de===void 0&&ge||Z)&&(de=!0),ge=ge||i8;var Te=[{type:"text",value:W}],be=a8({astGenerator:ve,language:c,code:W,defaultCodeValue:Te});be.language===null&&(be.value=Te);var Bn=be.value.length+B,Be=r8(be,de,De,L,A,B,Bn,Y,Z);return Ut.createElement(We,ne,Ut.createElement(I,y,!A&&q,ge({rows:Be,stylesheet:h,useInlineStyles:_})))}}var Er={},Jd,Gg;function l8(){if(Gg)return Jd;Gg=1;function t(E){return E instanceof Map?E.clear=E.delete=E.set=function(){throw new Error("map is read-only")}:E instanceof Set&&(E.add=E.clear=E.delete=function(){throw new Error("set is read-only")}),Object.freeze(E),Object.getOwnPropertyNames(E).forEach(function(H){var K=E[H];typeof K=="object"&&!Object.isFrozen(K)&&t(K)}),E}var e=t,i=t;e.default=i;class o{constructor(H){H.data===void 0&&(H.data={}),this.data=H.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function c(E){return E.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function m(E,...H){const K=Object.create(null);for(const he in E)K[he]=E[he];return H.forEach(function(he){for(const Pe in he)K[Pe]=he[Pe]}),K}const d="</span>",h=E=>!!E.kind;class f{constructor(H,K){this.buffer="",this.classPrefix=K.classPrefix,H.walk(this)}addText(H){this.buffer+=c(H)}openNode(H){if(!h(H))return;let K=H.kind;H.sublanguage||(K=`${this.classPrefix}${K}`),this.span(K)}closeNode(H){h(H)&&(this.buffer+=d)}value(){return this.buffer}span(H){this.buffer+=`<span class="${H}">`}}class x{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(H){this.top.children.push(H)}openNode(H){const K={kind:H,children:[]};this.add(K),this.stack.push(K)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(H){return this.constructor._walk(H,this.rootNode)}static _walk(H,K){return typeof K=="string"?H.addText(K):K.children&&(H.openNode(K),K.children.forEach(he=>this._walk(H,he)),H.closeNode(K)),H}static _collapse(H){typeof H!="string"&&H.children&&(H.children.every(K=>typeof K=="string")?H.children=[H.children.join("")]:H.children.forEach(K=>{x._collapse(K)}))}}class v extends x{constructor(H){super(),this.options=H}addKeyword(H,K){H!==""&&(this.openNode(K),this.addText(H),this.closeNode())}addText(H){H!==""&&this.add(H)}addSublanguage(H,K){const he=H.root;he.kind=K,he.sublanguage=!0,this.add(he)}toHTML(){return new f(this,this.options).value()}finalize(){return!0}}function y(E){return new RegExp(E.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function S(E){return E?typeof E=="string"?E:E.source:null}function _(...E){return E.map(K=>S(K)).join("")}function T(...E){return"("+E.map(K=>S(K)).join("|")+")"}function L(E){return new RegExp(E.toString()+"|").exec("").length-1}function k(E,H){const K=E&&E.exec(H);return K&&K.index===0}const A=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function O(E,H="|"){let K=0;return E.map(he=>{K+=1;const Pe=K;let Ee=S(he),cn="";for(;Ee.length>0;){const Q=A.exec(Ee);if(!Q){cn+=Ee;break}cn+=Ee.substring(0,Q.index),Ee=Ee.substring(Q.index+Q[0].length),Q[0][0]==="\\"&&Q[1]?cn+="\\"+String(Number(Q[1])+Pe):(cn+=Q[0],Q[0]==="("&&K++)}return cn}).map(he=>`(${he})`).join(H)}const B=/\b\B/,F="[a-zA-Z]\\w*",z="[a-zA-Z_]\\w*",Y="\\b\\d+(\\.\\d+)?",de="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",te="\\b(0b[01]+)",Z="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",me=(E={})=>{const H=/^#![ ]*\//;return E.binary&&(E.begin=_(H,/.*\b/,E.binary,/\b.*/)),m({className:"meta",begin:H,end:/$/,relevance:0,"on:begin":(K,he)=>{K.index!==0&&he.ignoreMatch()}},E)},De={begin:"\\\\[\\s\\S]",relevance:0},ge={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[De]},tn={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[De]},We={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Xe=function(E,H,K={}){const he=m({className:"comment",begin:E,end:H,contains:[]},K);return he.contains.push(We),he.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),he},I=Xe("//","$"),J=Xe("/\\*","\\*/"),W=Xe("#","$"),ve={className:"number",begin:Y,relevance:0},w={className:"number",begin:de,relevance:0},q={className:"number",begin:te,relevance:0},ie={className:"number",begin:Y+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},pe={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[De,{begin:/\[/,end:/\]/,relevance:0,contains:[De]}]}]},ne={className:"title",begin:F,relevance:0},Te={className:"title",begin:z,relevance:0},be={begin:"\\.\\s*"+z,relevance:0};var Be=Object.freeze({__proto__:null,MATCH_NOTHING_RE:B,IDENT_RE:F,UNDERSCORE_IDENT_RE:z,NUMBER_RE:Y,C_NUMBER_RE:de,BINARY_NUMBER_RE:te,RE_STARTERS_RE:Z,SHEBANG:me,BACKSLASH_ESCAPE:De,APOS_STRING_MODE:ge,QUOTE_STRING_MODE:tn,PHRASAL_WORDS_MODE:We,COMMENT:Xe,C_LINE_COMMENT_MODE:I,C_BLOCK_COMMENT_MODE:J,HASH_COMMENT_MODE:W,NUMBER_MODE:ve,C_NUMBER_MODE:w,BINARY_NUMBER_MODE:q,CSS_NUMBER_MODE:ie,REGEXP_MODE:pe,TITLE_MODE:ne,UNDERSCORE_TITLE_MODE:Te,METHOD_GUARD:be,END_SAME_AS_BEGIN:function(E){return Object.assign(E,{"on:begin":(H,K)=>{K.data._beginMatch=H[1]},"on:end":(H,K)=>{K.data._beginMatch!==H[1]&&K.ignoreMatch()}})}});function fn(E,H){E.input[E.index-1]==="."&&H.ignoreMatch()}function sn(E,H){H&&E.beginKeywords&&(E.begin="\\b("+E.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",E.__beforeBegin=fn,E.keywords=E.keywords||E.beginKeywords,delete E.beginKeywords,E.relevance===void 0&&(E.relevance=0))}function ft(E,H){Array.isArray(E.illegal)&&(E.illegal=T(...E.illegal))}function cr(E,H){if(E.match){if(E.begin||E.end)throw new Error("begin & end are not supported with match");E.begin=E.match,delete E.match}}function Ht(E,H){E.relevance===void 0&&(E.relevance=1)}const Xr=["of","and","for","in","not","or","if","then","parent","list","value"],Gr="keyword";function ts(E,H,K=Gr){const he={};return typeof E=="string"?Pe(K,E.split(" ")):Array.isArray(E)?Pe(K,E):Object.keys(E).forEach(function(Ee){Object.assign(he,ts(E[Ee],H,Ee))}),he;function Pe(Ee,cn){H&&(cn=cn.map(Q=>Q.toLowerCase())),cn.forEach(function(Q){const oe=Q.split("|");he[oe[0]]=[Ee,Ii(oe[0],oe[1])]})}}function Ii(E,H){return H?Number(H):Ir(E)?0:1}function Ir(E){return Xr.includes(E.toLowerCase())}function Yi(E,{plugins:H}){function K(Q,oe){return new RegExp(S(Q),"m"+(E.case_insensitive?"i":"")+(oe?"g":""))}class he{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(oe,Ne){Ne.position=this.position++,this.matchIndexes[this.matchAt]=Ne,this.regexes.push([Ne,oe]),this.matchAt+=L(oe)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const oe=this.regexes.map(Ne=>Ne[1]);this.matcherRe=K(O(oe),!0),this.lastIndex=0}exec(oe){this.matcherRe.lastIndex=this.lastIndex;const Ne=this.matcherRe.exec(oe);if(!Ne)return null;const ke=Ne.findIndex((it,Wi)=>Wi>0&&it!==void 0),rn=this.matchIndexes[ke];return Ne.splice(0,ke),Object.assign(Ne,rn)}}class Pe{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(oe){if(this.multiRegexes[oe])return this.multiRegexes[oe];const Ne=new he;return this.rules.slice(oe).forEach(([ke,rn])=>Ne.addRule(ke,rn)),Ne.compile(),this.multiRegexes[oe]=Ne,Ne}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(oe,Ne){this.rules.push([oe,Ne]),Ne.type==="begin"&&this.count++}exec(oe){const Ne=this.getMatcher(this.regexIndex);Ne.lastIndex=this.lastIndex;let ke=Ne.exec(oe);if(this.resumingScanAtSamePosition()&&!(ke&&ke.index===this.lastIndex)){const rn=this.getMatcher(0);rn.lastIndex=this.lastIndex+1,ke=rn.exec(oe)}return ke&&(this.regexIndex+=ke.position+1,this.regexIndex===this.count&&this.considerAll()),ke}}function Ee(Q){const oe=new Pe;return Q.contains.forEach(Ne=>oe.addRule(Ne.begin,{rule:Ne,type:"begin"})),Q.terminatorEnd&&oe.addRule(Q.terminatorEnd,{type:"end"}),Q.illegal&&oe.addRule(Q.illegal,{type:"illegal"}),oe}function cn(Q,oe){const Ne=Q;if(Q.isCompiled)return Ne;[cr].forEach(rn=>rn(Q,oe)),E.compilerExtensions.forEach(rn=>rn(Q,oe)),Q.__beforeBegin=null,[sn,ft,Ht].forEach(rn=>rn(Q,oe)),Q.isCompiled=!0;let ke=null;if(typeof Q.keywords=="object"&&(ke=Q.keywords.$pattern,delete Q.keywords.$pattern),Q.keywords&&(Q.keywords=ts(Q.keywords,E.case_insensitive)),Q.lexemes&&ke)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return ke=ke||Q.lexemes||/\w+/,Ne.keywordPatternRe=K(ke,!0),oe&&(Q.begin||(Q.begin=/\B|\b/),Ne.beginRe=K(Q.begin),Q.endSameAsBegin&&(Q.end=Q.begin),!Q.end&&!Q.endsWithParent&&(Q.end=/\B|\b/),Q.end&&(Ne.endRe=K(Q.end)),Ne.terminatorEnd=S(Q.end)||"",Q.endsWithParent&&oe.terminatorEnd&&(Ne.terminatorEnd+=(Q.end?"|":"")+oe.terminatorEnd)),Q.illegal&&(Ne.illegalRe=K(Q.illegal)),Q.contains||(Q.contains=[]),Q.contains=[].concat(...Q.contains.map(function(rn){return Zi(rn==="self"?Q:rn)})),Q.contains.forEach(function(rn){cn(rn,Ne)}),Q.starts&&cn(Q.starts,oe),Ne.matcher=Ee(Ne),Ne}if(E.compilerExtensions||(E.compilerExtensions=[]),E.contains&&E.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return E.classNameAliases=m(E.classNameAliases||{}),cn(E)}function Yr(E){return E?E.endsWithParent||Yr(E.starts):!1}function Zi(E){return E.variants&&!E.cachedVariants&&(E.cachedVariants=E.variants.map(function(H){return m(E,{variants:null},H)})),E.cachedVariants?E.cachedVariants:Yr(E)?m(E,{starts:E.starts?m(E.starts):null}):Object.isFrozen(E)?m(E):E}var Cc="10.7.3";function kc(E){return!!(E||E==="")}function xt(E){const H={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!E.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,c(this.code);let he={};return this.autoDetect?(he=E.highlightAuto(this.code),this.detectedLanguage=he.language):(he=E.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),he.value},autoDetect(){return!this.language||kc(this.autodetect)},ignoreIllegals(){return!0}},render(he){return he("pre",{},[he("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:H,VuePlugin:{install(he){he.component("highlightjs",H)}}}}const Mc={"after:highlightElement":({el:E,result:H,text:K})=>{const he=Ki(E);if(!he.length)return;const Pe=document.createElement("div");Pe.innerHTML=H.value,H.value=Kr(he,Ki(Pe),K)}};function Zr(E){return E.nodeName.toLowerCase()}function Ki(E){const H=[];return function K(he,Pe){for(let Ee=he.firstChild;Ee;Ee=Ee.nextSibling)Ee.nodeType===3?Pe+=Ee.nodeValue.length:Ee.nodeType===1&&(H.push({event:"start",offset:Pe,node:Ee}),Pe=K(Ee,Pe),Zr(Ee).match(/br|hr|img|input/)||H.push({event:"stop",offset:Pe,node:Ee}));return Pe}(E,0),H}function Kr(E,H,K){let he=0,Pe="";const Ee=[];function cn(){return!E.length||!H.length?E.length?E:H:E[0].offset!==H[0].offset?E[0].offset<H[0].offset?E:H:H[0].event==="start"?E:H}function Q(ke){function rn(it){return" "+it.nodeName+'="'+c(it.value)+'"'}Pe+="<"+Zr(ke)+[].map.call(ke.attributes,rn).join("")+">"}function oe(ke){Pe+="</"+Zr(ke)+">"}function Ne(ke){(ke.event==="start"?Q:oe)(ke.node)}for(;E.length||H.length;){let ke=cn();if(Pe+=c(K.substring(he,ke[0].offset)),he=ke[0].offset,ke===E){Ee.reverse().forEach(oe);do Ne(ke.splice(0,1)[0]),ke=cn();while(ke===E&&ke.length&&ke[0].offset===he);Ee.reverse().forEach(Q)}else ke[0].event==="start"?Ee.push(ke[0].node):Ee.pop(),Ne(ke.splice(0,1)[0])}return Pe+c(K.substr(he))}const Co={},Wr=E=>{console.error(E)},ko=(E,...H)=>{console.log(`WARN: ${E}`,...H)},rt=(E,H)=>{Co[`${E}/${H}`]||(console.log(`Deprecated as of ${E}. ${H}`),Co[`${E}/${H}`]=!0)},ss=c,Gn=m,Mo=Symbol("nomatch");var Jn=function(E){const H=Object.create(null),K=Object.create(null),he=[];let Pe=!0;const Ee=/(^(<[^>]+>|\t|)+|\n)/gm,cn="Could not find the language '{}', did you forget to load/include a language module?",Q={disableAutodetect:!0,name:"Plain text",contains:[]};let oe={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:v};function Ne(G){return oe.noHighlightRe.test(G)}function ke(G){let re=G.className+" ";re+=G.parentNode?G.parentNode.className:"";const ze=oe.languageDetectRe.exec(re);if(ze){const Qe=et(ze[1]);return Qe||(ko(cn.replace("{}",ze[1])),ko("Falling back to no-highlight mode for this block.",G)),Qe?ze[1]:"no-highlight"}return re.split(/\s+/).find(Qe=>Ne(Qe)||et(Qe))}function rn(G,re,ze,Qe){let un="",vt="";typeof re=="object"?(un=G,ze=re.ignoreIllegals,vt=re.language,Qe=void 0):(rt("10.7.0","highlight(lang, code, ...args) has been deprecated."),rt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),vt=G,un=re);const Rn={code:un,language:vt};gt("before:highlight",Rn);const dn=Rn.result?Rn.result:it(Rn.language,Rn.code,ze,Qe);return dn.code=Rn.code,gt("after:highlight",dn),dn}function it(G,re,ze,Qe){function un(le,xe){const Me=os.case_insensitive?xe[0].toLowerCase():xe[0];return Object.prototype.hasOwnProperty.call(le.keywords,Me)&&le.keywords[Me]}function vt(){if(!Le.keywords){xn.addText(gn);return}let le=0;Le.keywordPatternRe.lastIndex=0;let xe=Le.keywordPatternRe.exec(gn),Me="";for(;xe;){Me+=gn.substring(le,xe.index);const Ge=un(Le,xe);if(Ge){const[wn,Tt]=Ge;if(xn.addText(Me),Me="",dr+=Tt,wn.startsWith("_"))Me+=xe[0];else{const Bo=os.classNameAliases[wn]||wn;xn.addKeyword(xe[0],Bo)}}else Me+=xe[0];le=Le.keywordPatternRe.lastIndex,xe=Le.keywordPatternRe.exec(gn)}Me+=gn.substr(le),xn.addText(Me)}function Rn(){if(gn==="")return;let le=null;if(typeof Le.subLanguage=="string"){if(!H[Le.subLanguage]){xn.addText(gn);return}le=it(Le.subLanguage,gn,!0,ta[Le.subLanguage]),ta[Le.subLanguage]=le.top}else le=Qr(gn,Le.subLanguage.length?Le.subLanguage:null);Le.relevance>0&&(dr+=le.relevance),xn.addSublanguage(le.emitter,le.language)}function dn(){Le.subLanguage!=null?Rn():vt(),gn=""}function lt(le){return le.className&&xn.openNode(os.classNameAliases[le.className]||le.className),Le=Object.create(le,{parent:{value:Le}}),Le}function Ft(le,xe,Me){let Ge=k(le.endRe,Me);if(Ge){if(le["on:end"]){const wn=new o(le);le["on:end"](xe,wn),wn.isMatchIgnored&&(Ge=!1)}if(Ge){for(;le.endsParent&&le.parent;)le=le.parent;return le}}if(le.endsWithParent)return Ft(le.parent,xe,Me)}function Jr(le){return Le.matcher.regexIndex===0?(gn+=le[0],1):(sa=!0,0)}function Oo(le){const xe=le[0],Me=le.rule,Ge=new o(Me),wn=[Me.__beforeBegin,Me["on:begin"]];for(const Tt of wn)if(Tt&&(Tt(le,Ge),Ge.isMatchIgnored))return Jr(xe);return Me&&Me.endSameAsBegin&&(Me.endRe=y(xe)),Me.skip?gn+=xe:(Me.excludeBegin&&(gn+=xe),dn(),!Me.returnBegin&&!Me.excludeBegin&&(gn=xe)),lt(Me),Me.returnBegin?0:xe.length}function ei(le){const xe=le[0],Me=re.substr(le.index),Ge=Ft(Le,le,Me);if(!Ge)return Mo;const wn=Le;wn.skip?gn+=xe:(wn.returnEnd||wn.excludeEnd||(gn+=xe),dn(),wn.excludeEnd&&(gn=xe));do Le.className&&xn.closeNode(),!Le.skip&&!Le.subLanguage&&(dr+=Le.relevance),Le=Le.parent;while(Le!==Ge.parent);return Ge.starts&&(Ge.endSameAsBegin&&(Ge.starts.endRe=Ge.endRe),lt(Ge.starts)),wn.returnEnd?0:xe.length}function Rc(){const le=[];for(let xe=Le;xe!==os;xe=xe.parent)xe.className&&le.unshift(xe.className);le.forEach(xe=>xn.openNode(xe))}let Vn={};function ni(le,xe){const Me=xe&&xe[0];if(gn+=le,Me==null)return dn(),0;if(Vn.type==="begin"&&xe.type==="end"&&Vn.index===xe.index&&Me===""){if(gn+=re.slice(xe.index,xe.index+1),!Pe){const Ge=new Error("0 width match regex");throw Ge.languageName=G,Ge.badRule=Vn.rule,Ge}return 1}if(Vn=xe,xe.type==="begin")return Oo(xe);if(xe.type==="illegal"&&!ze){const Ge=new Error('Illegal lexeme "'+Me+'" for mode "'+(Le.className||"<unnamed>")+'"');throw Ge.mode=Le,Ge}else if(xe.type==="end"){const Ge=ei(xe);if(Ge!==Mo)return Ge}if(xe.type==="illegal"&&Me==="")return 1;if(mr>1e5&&mr>xe.index*3)throw new Error("potential infinite loop, way more iterations than matches");return gn+=Me,Me.length}const os=et(G);if(!os)throw Wr(cn.replace("{}",G)),new Error('Unknown language: "'+G+'"');const na=Yi(os,{plugins:he});let Xt="",Le=Qe||na;const ta={},xn=new oe.__emitter(oe);Rc();let gn="",dr=0,ls=0,mr=0,sa=!1;try{for(Le.matcher.considerAll();;){mr++,sa?sa=!1:Le.matcher.considerAll(),Le.matcher.lastIndex=ls;const le=Le.matcher.exec(re);if(!le)break;const xe=re.substring(ls,le.index),Me=ni(xe,le);ls=le.index+Me}return ni(re.substr(ls)),xn.closeAllNodes(),xn.finalize(),Xt=xn.toHTML(),{relevance:Math.floor(dr),value:Xt,language:G,illegal:!1,emitter:xn,top:Le}}catch(le){if(le.message&&le.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:le.message,context:re.slice(ls-100,ls+100),mode:le.mode},sofar:Xt,relevance:0,value:ss(re),emitter:xn};if(Pe)return{illegal:!1,relevance:0,value:ss(re),emitter:xn,language:G,top:Le,errorRaised:le};throw le}}function Wi(G){const re={relevance:0,emitter:new oe.__emitter(oe),value:ss(G),illegal:!1,top:Q};return re.emitter.addText(G),re}function Qr(G,re){re=re||oe.languages||Object.keys(H);const ze=Wi(G),Qe=re.filter(et).filter(Nn).map(lt=>it(lt,G,!1));Qe.unshift(ze);const un=Qe.sort((lt,Ft)=>{if(lt.relevance!==Ft.relevance)return Ft.relevance-lt.relevance;if(lt.language&&Ft.language){if(et(lt.language).supersetOf===Ft.language)return 1;if(et(Ft.language).supersetOf===lt.language)return-1}return 0}),[vt,Rn]=un,dn=vt;return dn.second_best=Rn,dn}function Ao(G){return oe.tabReplace||oe.useBR?G.replace(Ee,re=>re===`
`?oe.useBR?"<br>":re:oe.tabReplace?re.replace(/\t/g,oe.tabReplace):re):G}function Ro(G,re,ze){const Qe=re?K[re]:ze;G.classList.add("hljs"),Qe&&G.classList.add(Qe)}const Lo={"before:highlightElement":({el:G})=>{oe.useBR&&(G.innerHTML=G.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,`
`))},"after:highlightElement":({result:G})=>{oe.useBR&&(G.value=G.value.replace(/\n/g,"<br>"))}},Ac=/^(<[^>]+>|\t)+/gm,Vt={"after:highlightElement":({result:G})=>{oe.tabReplace&&(G.value=G.value.replace(Ac,re=>re.replace(/\t/g,oe.tabReplace)))}};function Sn(G){let re=null;const ze=ke(G);if(Ne(ze))return;gt("before:highlightElement",{el:G,language:ze}),re=G;const Qe=re.textContent,un=ze?rn(Qe,{language:ze,ignoreIllegals:!0}):Qr(Qe);gt("after:highlightElement",{el:G,result:un,text:Qe}),G.innerHTML=un.value,Ro(G,ze,un.language),G.result={language:un.language,re:un.relevance,relavance:un.relevance},un.second_best&&(G.second_best={language:un.second_best.language,re:un.second_best.relevance,relavance:un.second_best.relevance})}function In(G){G.useBR&&(rt("10.3.0","'useBR' will be removed entirely in v11.0"),rt("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),oe=Gn(oe,G)}const qt=()=>{if(qt.called)return;qt.called=!0,rt("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(Sn)};function Qi(){rt("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),Ji=!0}let Ji=!1;function To(){if(document.readyState==="loading"){Ji=!0;return}document.querySelectorAll("pre code").forEach(Sn)}function Eo(){Ji&&To()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Eo,!1);function ur(G,re){let ze=null;try{ze=re(E)}catch(Qe){if(Wr("Language definition for '{}' could not be registered.".replace("{}",G)),Pe)Wr(Qe);else throw Qe;ze=Q}ze.name||(ze.name=G),H[G]=ze,ze.rawDefinition=re.bind(null,E),ze.aliases&&as(ze.aliases,{languageName:G})}function ea(G){delete H[G];for(const re of Object.keys(K))K[re]===G&&delete K[re]}function is(){return Object.keys(H)}function As(G){rt("10.4.0","requireLanguage will be removed entirely in v11."),rt("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const re=et(G);if(re)return re;throw new Error("The '{}' language is required, but not loaded.".replace("{}",G))}function et(G){return G=(G||"").toLowerCase(),H[G]||H[K[G]]}function as(G,{languageName:re}){typeof G=="string"&&(G=[G]),G.forEach(ze=>{K[ze.toLowerCase()]=re})}function Nn(G){const re=et(G);return re&&!re.disableAutodetect}function $o(G){G["before:highlightBlock"]&&!G["before:highlightElement"]&&(G["before:highlightElement"]=re=>{G["before:highlightBlock"](Object.assign({block:re.el},re))}),G["after:highlightBlock"]&&!G["after:highlightElement"]&&(G["after:highlightElement"]=re=>{G["after:highlightBlock"](Object.assign({block:re.el},re))})}function Do(G){$o(G),he.push(G)}function gt(G,re){const ze=G;he.forEach(function(Qe){Qe[ze]&&Qe[ze](re)})}function Rs(G){return rt("10.2.0","fixMarkup will be removed entirely in v11.0"),rt("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),Ao(G)}function Lt(G){return rt("10.7.0","highlightBlock will be removed entirely in v12.0"),rt("10.7.0","Please use highlightElement now."),Sn(G)}Object.assign(E,{highlight:rn,highlightAuto:Qr,highlightAll:To,fixMarkup:Rs,highlightElement:Sn,highlightBlock:Lt,configure:In,initHighlighting:qt,initHighlightingOnLoad:Qi,registerLanguage:ur,unregisterLanguage:ea,listLanguages:is,getLanguage:et,registerAliases:as,requireLanguage:As,autoDetection:Nn,inherit:Gn,addPlugin:Do,vuePlugin:xt(E).VuePlugin}),E.debugMode=function(){Pe=!1},E.safeMode=function(){Pe=!0},E.versionString=Cc;for(const G in Be)typeof Be[G]=="object"&&e(Be[G]);return Object.assign(E,Be),E.addPlugin(Lo),E.addPlugin(Mc),E.addPlugin(Vt),E}({});return Jd=Jn,Jd}var em={exports:{}},Ig;function c8(){return Ig||(Ig=1,function(t){(function(){var e;e=t.exports=c,e.format=c,e.vsprintf=o,typeof console<"u"&&typeof console.log=="function"&&(e.printf=i);function i(){console.log(c.apply(null,arguments))}function o(m,d){return c.apply(null,[m].concat(d))}function c(m){for(var d=1,h=[].slice.call(arguments),f=0,x=m.length,v="",y,S=!1,_,T,L=!1,k,A=function(){return h[d++]},O=function(){for(var B="";/\d/.test(m[f]);)B+=m[f++],y=m[f];return B.length>0?parseInt(B):null};f<x;++f)if(y=m[f],S)switch(S=!1,y=="."?(L=!1,y=m[++f]):y=="0"&&m[f+1]=="."?(L=!0,f+=2,y=m[f]):L=!0,k=O(),y){case"b":v+=parseInt(A(),10).toString(2);break;case"c":_=A(),typeof _=="string"||_ instanceof String?v+=_:v+=String.fromCharCode(parseInt(_,10));break;case"d":v+=parseInt(A(),10);break;case"f":T=String(parseFloat(A()).toFixed(k||6)),v+=L?T:T.replace(/^0/,"");break;case"j":v+=JSON.stringify(A());break;case"o":v+="0"+parseInt(A(),10).toString(8);break;case"s":v+=A();break;case"x":v+="0x"+parseInt(A(),10).toString(16);break;case"X":v+="0x"+parseInt(A(),10).toString(16).toUpperCase();break;default:v+=y;break}else y==="%"?S=!0:v+=y;return v}})()}(em)),em.exports}var nm,Yg;function u8(){if(Yg)return nm;Yg=1;var t=c8(),e=i(Error);nm=e,e.eval=i(EvalError),e.range=i(RangeError),e.reference=i(ReferenceError),e.syntax=i(SyntaxError),e.type=i(TypeError),e.uri=i(URIError),e.create=i;function i(o){return c.displayName=o.displayName||o.name,c;function c(m){return m&&(m=t.apply(null,arguments)),new o(m)}}return nm}var Zg;function d8(){if(Zg)return Er;Zg=1;var t=l8(),e=u8();Er.highlight=o,Er.highlightAuto=c,Er.registerLanguage=m,Er.listLanguages=d,Er.registerAlias=h,f.prototype.addText=y,f.prototype.addKeyword=x,f.prototype.addSublanguage=v,f.prototype.openNode=S,f.prototype.closeNode=_,f.prototype.closeAllNodes=L,f.prototype.finalize=L,f.prototype.toHTML=T;var i="hljs-";function o(k,A,O){var B=t.configure({}),F=O||{},z=F.prefix,Y;if(typeof k!="string")throw e("Expected `string` for name, got `%s`",k);if(!t.getLanguage(k))throw e("Unknown language: `%s` is not registered",k);if(typeof A!="string")throw e("Expected `string` for value, got `%s`",A);if(z==null&&(z=i),t.configure({__emitter:f,classPrefix:z}),Y=t.highlight(A,{language:k,ignoreIllegals:!0}),t.configure(B||{}),Y.errorRaised)throw Y.errorRaised;return{relevance:Y.relevance,language:Y.language,value:Y.emitter.rootNode.children}}function c(k,A){var O=A||{},B=O.subset||t.listLanguages();O.prefix;var F=B.length,z=-1,Y,de,te,Z;if(typeof k!="string")throw e("Expected `string` for value, got `%s`",k);for(de={relevance:0,language:null,value:[]},Y={relevance:0,language:null,value:[]};++z<F;)Z=B[z],t.getLanguage(Z)&&(te=o(Z,k,A),te.language=Z,te.relevance>de.relevance&&(de=te),te.relevance>Y.relevance&&(de=Y,Y=te));return de.language&&(Y.secondBest=de),Y}function m(k,A){t.registerLanguage(k,A)}function d(){return t.listLanguages()}function h(k,A){var O=k,B;A&&(O={},O[k]=A);for(B in O)t.registerAliases(O[B],{languageName:B})}function f(k){this.options=k,this.rootNode={children:[]},this.stack=[this.rootNode]}function x(k,A){this.openNode(A),this.addText(k),this.closeNode()}function v(k,A){var O=this.stack,B=O[O.length-1],F=k.rootNode.children,z=A?{type:"element",tagName:"span",properties:{className:[A]},children:F}:F;B.children=B.children.concat(z)}function y(k){var A=this.stack,O,B;k!==""&&(O=A[A.length-1],B=O.children[O.children.length-1],B&&B.type==="text"?B.value+=k:O.children.push({type:"text",value:k}))}function S(k){var A=this.stack,O=this.options.classPrefix+k,B=A[A.length-1],F={type:"element",tagName:"span",properties:{className:[O]},children:[]};B.children.push(F),A.push(F)}function _(){this.stack.pop()}function T(){return""}function L(){}return Er}var tm,Kg;function m8(){if(Kg)return tm;Kg=1;const t="[A-Za-z$_][0-9A-Za-z$_]*",e=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],i=["true","false","null","undefined","NaN","Infinity"],o=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],c=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],m=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],d=["arguments","this","super","console","window","document","localStorage","module","global"],h=[].concat(m,d,o,c);function f(S){return S?typeof S=="string"?S:S.source:null}function x(S){return v("(?=",S,")")}function v(...S){return S.map(T=>f(T)).join("")}function y(S){const _=(I,{after:J})=>{const W="</"+I[0].slice(1);return I.input.indexOf(W,J)!==-1},T=t,L={begin:"<>",end:"</>"},k={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(I,J)=>{const W=I[0].length+I.index,ve=I.input[W];if(ve==="<"){J.ignoreMatch();return}ve===">"&&(_(I,{after:W})||J.ignoreMatch())}},A={$pattern:t,keyword:e,literal:i,built_in:h},O="[0-9](_?[0-9])*",B=`\\.(${O})`,F="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",z={className:"number",variants:[{begin:`(\\b(${F})((${B})|\\.)?|(${B}))[eE][+-]?(${O})\\b`},{begin:`\\b(${F})\\b((${B})\\b|\\.)?|(${B})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},Y={className:"subst",begin:"\\$\\{",end:"\\}",keywords:A,contains:[]},de={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[S.BACKSLASH_ESCAPE,Y],subLanguage:"xml"}},te={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[S.BACKSLASH_ESCAPE,Y],subLanguage:"css"}},Z={className:"string",begin:"`",end:"`",contains:[S.BACKSLASH_ESCAPE,Y]},De={className:"comment",variants:[S.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:T+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),S.C_BLOCK_COMMENT_MODE,S.C_LINE_COMMENT_MODE]},ge=[S.APOS_STRING_MODE,S.QUOTE_STRING_MODE,de,te,Z,z,S.REGEXP_MODE];Y.contains=ge.concat({begin:/\{/,end:/\}/,keywords:A,contains:["self"].concat(ge)});const tn=[].concat(De,Y.contains),We=tn.concat([{begin:/\(/,end:/\)/,keywords:A,contains:["self"].concat(tn)}]),Xe={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:A,contains:We};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:A,exports:{PARAMS_CONTAINS:We},illegal:/#(?![$_A-z])/,contains:[S.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},S.APOS_STRING_MODE,S.QUOTE_STRING_MODE,de,te,Z,De,z,{begin:v(/[{,\n]\s*/,x(v(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,T+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:T+x("\\s*:"),relevance:0}]},{begin:"("+S.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[De,S.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+S.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:S.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:A,contains:We}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:L.begin,end:L.end},{begin:k.begin,"on:begin":k.isTrulyOpeningTag,end:k.end}],subLanguage:"xml",contains:[{begin:k.begin,end:k.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:A,contains:["self",S.inherit(S.TITLE_MODE,{begin:T}),Xe],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:S.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[Xe,S.inherit(S.TITLE_MODE,{begin:T})]},{variants:[{begin:"\\."+T},{begin:"\\$"+T}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},S.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[S.inherit(S.TITLE_MODE,{begin:T}),"self",Xe]},{begin:"(get|set)\\s+(?="+T+"\\()",end:/\{/,keywords:"get set",contains:[S.inherit(S.TITLE_MODE,{begin:T}),{begin:/\(\)/},Xe]},{begin:/\$[(.]/}]}}return tm=y,tm}const p8="modulepreload",h8=function(t){return"/"+t},Wg={},f8=function(e,i,o){let c=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));c=Promise.allSettled(i.map(f=>{if(f=h8(f),f in Wg)return;Wg[f]=!0;const x=f.endsWith(".css"),v=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${v}`))return;const y=document.createElement("link");if(y.rel=x?"stylesheet":p8,x||(y.as="script"),y.crossOrigin="",y.href=f,h&&y.setAttribute("nonce",h),document.head.appendChild(y),x)return new Promise((S,_)=>{y.addEventListener("load",S),y.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${f}`)))})}))}function m(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return c.then(d=>{for(const h of d||[])h.status==="rejected"&&m(h.reason);return e().catch(m)})};var x8=d8();const Iy=Um(x8);var Ep=o8(Iy,{});Ep.registerLanguage=Iy.registerLanguage;var g8=m8();const v8=Um(g8),j8={hljs:{display:"block",overflowX:"auto",padding:"0.5em",color:"#383a42",background:"#fafafa"},"hljs-comment":{color:"#a0a1a7",fontStyle:"italic"},"hljs-quote":{color:"#a0a1a7",fontStyle:"italic"},"hljs-doctag":{color:"#a626a4"},"hljs-keyword":{color:"#a626a4"},"hljs-formula":{color:"#a626a4"},"hljs-section":{color:"#e45649"},"hljs-name":{color:"#e45649"},"hljs-selector-tag":{color:"#e45649"},"hljs-deletion":{color:"#e45649"},"hljs-subst":{color:"#e45649"},"hljs-literal":{color:"#0184bb"},"hljs-string":{color:"#50a14f"},"hljs-regexp":{color:"#50a14f"},"hljs-addition":{color:"#50a14f"},"hljs-attribute":{color:"#50a14f"},"hljs-meta-string":{color:"#50a14f"},"hljs-built_in":{color:"#c18401"},"hljs-class .hljs-title":{color:"#c18401"},"hljs-attr":{color:"#986801"},"hljs-variable":{color:"#986801"},"hljs-template-variable":{color:"#986801"},"hljs-type":{color:"#986801"},"hljs-selector-class":{color:"#986801"},"hljs-selector-attr":{color:"#986801"},"hljs-selector-pseudo":{color:"#986801"},"hljs-number":{color:"#986801"},"hljs-symbol":{color:"#4078f2"},"hljs-bullet":{color:"#4078f2"},"hljs-link":{color:"#4078f2",textDecoration:"underline"},"hljs-meta":{color:"#4078f2"},"hljs-selector-id":{color:"#4078f2"},"hljs-title":{color:"#4078f2"},"hljs-emphasis":{fontStyle:"italic"},"hljs-strong":{fontWeight:"bold"}};Ep.registerLanguage("js",v8);function Yy({className:t,...e}){const i=/language-(\w+)/.exec(t||"");return i?n.jsx(Ep,{language:i[1],PreTag:"div",...e,style:j8}):n.jsx("code",{className:t,...e})}const y8=`import Button from 'components/Button'

export default function ButtonCase() {
  return (
    <>
      <div className='min-w-[400px] mx-auto px-16 h-[300px] flex flex-col justify-center'>
        <div className='my-2'>
          <div className='font-bold'>按钮类型</div>
        </div>
        <div className='flex items-center justify-between my-4'>
          <Button>Normal</Button>
          <Button danger>Danger</Button>
          <Button primary>Primary</Button>
          <Button success>Success</Button>
        </div>
      </div>
    </>
  )
}`,Zy=`import {twMerge} from 'tailwind-merge'
import Show from '../Show'
import clsx from 'clsx'


function generatorDefault(disabled, ghost) {
  let base = 'bg-gray-100 text-gray-500'
  let inter = 'hover:bg-gray-200 active:bg-gray-300'

  if (ghost) {
    base = 'bg-transparent text-gray-500'
    inter = 'hover:bg-gray-50 active:bg-gray-100 hover:text-gray-600 active:text-gray-700'
  }
  if (disabled) {
    return clsx('opacity-70 cursor-not-allowed', base)
  }
  return clsx(base, inter)
}

function generatorPrimary(disable, ghost) {
  let base = 'bg-blue-500 text-white'
  let inter = 'hover:bg-blue-600 active:bg-blue-700'
  if (ghost) {
    base = 'bg-transparent text-blue-500'
    inter = 'hover:bg-blue-50 active:bg-blue-100 hover:text-blue-600 active:text-blue-700'
  }
  if (disable) {
    return clsx('opacity-70 cursor-not-allowed', base)
  }
  return clsx(base, inter)
}

function generatorDanger(disabled, ghost) {
  let base = 'bg-red-500 text-white'
  let inter = 'hover:bg-red-600 active:bg-red-700'

  if (ghost) {
    base = 'bg-transparent text-red-500'
    inter = 'hover:bg-red-50 active:bg-red-100 hover:text-red-600 active:text-red-700'
  }
  if (disabled) {
    return clsx('opacity-70 cursor-not-allowed', base)
  }
  return clsx(base, inter)
}

function generatorSucess(disabled, ghost) {
  let base = 'bg-green-500 text-white'
  let inter = 'hover:bg-green-600 active:bg-green-700'

  if (ghost) {
    base = 'bg-transparent text-green-500'
    inter = 'hover:bg-green-50 active:bg-green-100 hover:text-green-600 active:text-green-700'
  }
  if (disabled) {
    return clsx('opacity-70 cursor-not-allowed', base)
  }
  return clsx(base, inter)
}

function generatorSignal(disabled) {
  let base = 'bg-white border-sky-300 text-sky-500'
  let inter = 'hover:border-sky-400 active:bg-sky-500 hover:text-sky-600 active:text-sky-700 hover:bg-sky-50 active:bg-sky-100'

  if (disabled) {
    return clsx('opacity-70 cursor-not-allowed', base)
  }
  return clsx(base, inter)
}

export default function Button(props) {
  const {className, primary, danger, sm, lg, signal, success, ghost, rect, disabled, ...other} = props
  const base = 'rounded-md border border-transparent font-medium cursor-pointer transition relative text-gray-600 hover:bg-transparent'

  // size
  const md = 'text-xs py-2 px-4'

  const def = !primary && !danger && !success && !signal

  const cls = twMerge(clsx(base, md, {
    // type
    [generatorDefault(disabled, ghost)]: def,
    [generatorPrimary(disabled, ghost)]: primary,
    [generatorDanger(disabled, ghost)]: danger,
    [generatorSucess(disabled, ghost)]: success,
    [generatorSignal(disabled)]: signal,

    // size
    ['text-xs py-1.5 px-3']: sm,
    ['text-lg py-2 px-6']: lg,
    ['p-2']: rect,
  }, className))

  return (
    <button className={cls} {...other} disabled={disabled}>
      {props.children}
      <Show when={signal}>
        <span className="absolute flex h-3 w-3 right-[-5px] top-[-5px]">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      </Show>
    </button>
  )
}
`,b8={ButtonCase:y8,Button:Zy};function ee(t){const{files:e=b8,caseRender:i,active:o=0,className:c}=t,m=Object.keys(e),[d,h]=j.useState(m[o]);function f(y){h(m[y])}const v=Fe("flex bg-white flex-col-reverse rounded my-5",c);return n.jsxs("div",{className:v,children:[n.jsxs("div",{className:"overflow-scroll flex-1 relative",children:[n.jsx("header",{className:"flex border-b border-x border-gray-200 sticky top-0 bg-gray-50 py-1 rounded overflow-auto",children:m.map((y,S)=>n.jsx(ue,{ghost:!0,onClick:()=>f(S),className:d===y?"text-green-500":"",children:y},y))}),n.jsx("div",{className:"keep codepack",children:n.jsx("pre",{className:"border-x border-b rounded",children:n.jsx(Yy,{className:"language-js",children:e[d]})})})]}),n.jsx(rj,{when:i,children:n.jsx(Wn,{reload:!0,children:i})})]})}const S8={index:$_,header:D_,content:O_,store:B_};function N8(){return n.jsx("div",{id:"case",className:"backdrop-blur-sm py-14 md:py-28 bg-gray-50 bg-opacity-70 overflow-hidden px-6 md:px-8",children:n.jsxs("div",{className:"max-w-[1080px] mx-auto overflow-hidden",children:[n.jsx(qe.h2,{...Mn(),className:"text-2xl md:text-4xl text-center font-bold",children:"Immersive"}),n.jsx(qe.p,{...Mn(.1),className:"py-8 md:py-12 text-center px-10",children:"沉浸式学习体验。通过在线可演示的案例，你能获得更极致的学习收益"}),n.jsx(qe.div,{...Mn(.2),children:n.jsx(ee,{files:S8,caseRender:n.jsx(E_,{}),auth:!0})})]})})}function w8(){const t="text-gray-600 mt-5 rounded-md border border-gray-200 py-3 px-4 bg-gray-50 hover:border-green-500 transition",e=[{desc:"具备一定的 JavaScript 基础",tip:"JavaScript 核心进阶",url:"https://xinyuzone.cn/column/1818097927437131776",delay:.3},{desc:"熟悉异步请求，熟悉 fetch 与 Promise",tip:"fetch",url:"https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch",delay:.4},{desc:"熟悉 React 之前的版本的使用",tip:"React 知命境",url:"https://react.usehook.cn/",delay:.5}];return n.jsxs("div",{className:"bg-white backdrop-blur-sm py-14 md:py-28 bg-opacity-70 max-w-[1080px] mx-auto md:px-32 px-6",children:[n.jsx(qe.h2,{className:"text-2xl md:text-4xl font-bold text-center",...Mn(),children:"Learn Before"}),n.jsx(qe.p,{...Mn(.1),className:"text-center my-8 md:my-12",children:"学习之前，你需要具备一些前置的基础能力"}),e.map((i,o)=>j.createElement(qe.a,{className:"block",href:i.url,...Mn(i.delay),target:"_blank",key:i.url},n.jsxs(we,{className:t,between:!0,children:[n.jsxs(we,{children:[n.jsx(V3,{className:"text-primary",size:18}),n.jsx("div",{className:"ml-2",children:i.desc})]}),n.jsxs(we,{className:"space-x-2",children:[n.jsx("span",{children:i.tip}),n.jsx(fm,{size:18})]})]})))]})}function _8(){return n.jsx("div",{className:"backdrop-blur-sm py-14 md:py-28 bg-gray-50 bg-opacity-70 px-6 md:px-8 overflow-hidden",children:n.jsxs("div",{className:"md:flex max-w-[1080px] mx-auto md:space-x-14 md:items-start",children:[n.jsxs(qe.div,{initial:{x:-60,opacity:0},whileInView:{x:0,opacity:1},transition:{duration:.5,type:"spring"},className:"flex-1 md:space-y-12 space-y-8",children:[n.jsx("h2",{className:"text-2xl md:text-4xl font-bold text-center md:text-start",children:"高效学习是我们共同的目的"}),n.jsx("p",{className:"leading-8",children:"和之前的版本不同，React 19 是一次开发方式的变革。因此，想要彻底掌握 React 19 的最佳实践，是一件比较困难的事情，普通学习者想要通过自学达到这个程度，需要花费大量的时间去做尝试和验证。"}),n.jsx("p",{className:"leading-8",children:"因此，为了让付费用户可以更加轻松的掌握 React 19，我在写这本小册时，在如果高效学习上，做了非常多的思考与设计。更是提前与 200 名付费用户深度沟通交流，在内容和案例编排也反复的打磨才最终成型。"}),n.jsx("div",{children:n.jsxs("a",{className:"inline-flex py-2.5 space-x-2 px-4 items-center rounded-full border hover:border-green-500",href:"https://mp.weixin.qq.com/s/y2CibsN_0aRcpg9YIz8u1A",target:"_blank",children:[n.jsx(Z3,{size:18}),n.jsx("span",{children:"了解更多关于学习方法的思考"}),n.jsx(O3,{size:18})]})})]}),n.jsxs(qe.div,{initial:{x:60,opacity:0},whileInView:{x:0,opacity:1},transition:{duration:.5,type:"spring"},className:"md:flex-1 mt-12 md:mt-0",children:[n.jsxs(we,{className:"text-gray-500 space-x-2",children:[n.jsx(H3,{size:18}),n.jsx("span",{children:"特性"})]}),n.jsxs("div",{className:"grid grid-cols-2 gap-6 mt-8",children:[n.jsxs(we,{col:!0,className:"flex-1 border h-36 rounded-md hover:bg-gray-100 transition p-6 justify-between items-start",children:[n.jsx(P3,{size:28,className:"text-green-400"}),n.jsx("p",{className:"text-lg",children:"知识点覆盖完整"})]}),n.jsxs(we,{col:!0,className:"flex-1 border h-36 rounded-md hover:bg-gray-100 transition p-6 justify-between items-start",children:[n.jsx(F3,{size:28,className:"text-green-400"}),n.jsx("p",{className:"text-lg",children:"深入浅出，理论结合实践"})]}),n.jsxs(we,{col:!0,className:"flex-1 border h-36 rounded-md hover:bg-gray-100 transition p-6 justify-between items-start",children:[n.jsx(W3,{size:28,className:"text-green-400"}),n.jsx("p",{className:"text-lg",children:"实践案例内置可演示"})]}),n.jsxs(we,{col:!0,className:"flex-1 border h-36 rounded-md hover:bg-gray-100 transition p-6 justify-between items-start",children:[n.jsx(nS,{size:28,className:"text-green-400"}),n.jsx("p",{className:"text-lg",children:"付费群内容直播答疑"})]})]})]})]})})}function Di({title:t,desc:e="",path:i,className:o,delay:c}){const[m,d]=j.useState({x:0,y:0}),h=j.useRef(null),f=unescape(t.replace(/\\u/gi,"%u")),x=unescape(e.replace(/\\u/gi,"%u"));j.useEffect(()=>{const _=h.current.getBoundingClientRect();function T(L){d({x:L.x-_.left,y:L.y+document.documentElement.scrollTop-_.top})}h.current.addEventListener("mouseenter",L=>{document.addEventListener("mousemove",T,!1)},!1),h.current.addEventListener("mouseleave",L=>{document.removeEventListener("mousemove",T,!1)},!1)},[]);const v=`radial-gradient(180px at ${m.x}px ${m.y}px, white, transparent)`,S=Fe("group relative flex rounded-md bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5",o);return n.jsxs(qe.div,{ref:h,className:S,...Mn(c),children:[n.jsxs("div",{className:"pointer-events-none",children:[n.jsx("div",{className:"absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50",children:n.jsxs("svg",{"aria-hidden":"true",className:"absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5",children:[n.jsx("defs",{children:n.jsx("pattern",{id:":Rkq5jsqja:",width:"72",height:"56",patternUnits:"userSpaceOnUse",x:"50%",y:"16",children:n.jsx("path",{d:"M.5 56V.5H72",fill:"none"})})}),n.jsx("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#:Rkq5jsqja:)"}),n.jsxs("svg",{x:"50%",y:"16",className:"overflow-visible",children:[n.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"0",y:"56"}),n.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"72",y:"168"})]})]})}),n.jsx("div",{className:"absolute inset-0 rounded-md bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]",style:{maskImage:v}}),n.jsx("div",{className:"absolute inset-0 rounded-md opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100",style:{maskImage:v},children:n.jsxs("svg",{"aria-hidden":"true",className:"absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10",children:[n.jsx("defs",{children:n.jsx("pattern",{id:":R5kq5jsqja:",width:"72",height:"56",patternUnits:"userSpaceOnUse",x:"50%",y:"16",children:n.jsx("path",{d:"M.5 56V.5H72",fill:"none"})})}),n.jsx("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#:R5kq5jsqja:)"}),n.jsxs("svg",{x:"50%",y:"16",className:"overflow-visible",children:[n.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"0",y:"56"}),n.jsx("rect",{strokeWidth:"0",width:"73",height:"57",x:"72",y:"168"})]})]})})]}),n.jsx("div",{className:"absolute inset-0 rounded-md ring-1 ring-gray-200 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"}),n.jsxs("div",{className:"relative rounded-md px-4 pb-4 pt-16",children:[n.jsx("div",{className:"flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400",children:n.jsxs("svg",{viewBox:"0 0 20 20","aria-hidden":"true",className:"h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400",children:[n.jsx("path",{strokeWidth:"0",fillRule:"evenodd",clipRule:"evenodd",d:"M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"}),n.jsx("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",d:"M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"}),n.jsx("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",d:"M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"})]})}),n.jsx("h3",{className:"mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white",children:n.jsxs("a",{href:i,children:[n.jsx("span",{className:"absolute inset-0 rounded-md"}),f]})}),n.jsx("p",{className:"mt-1 text-sm text-zinc-600 dark:text-zinc-400",children:x})]})]})}function C8(){return n.jsx("div",{className:"bg-white backdrop-blur-sm py-14 md:py-28 bg-opacity-70 mx-auto px-6 md:px-8",children:n.jsxs("div",{className:"max-w-[1080px] mx-auto",children:[n.jsx(qe.h2,{className:"text-2xl md:text-4xl font-bold text-center",...Mn(),children:"主要内容"}),n.jsx(qe.p,{...Mn(.1),className:"text-center my-8 md:my-12 px-10",children:"React 19 给开发者带来了巨大的变化和提升，主要体现在如下几个方面"}),n.jsxs("div",{className:"flex items-stretch md:justify-between flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0",children:[n.jsx(Di,{title:"Compiler",path:"./tutorial/use/importwith19",desc:"你可以不再使用 memo、useMemo、useCallback 来优化你的项目性能，大幅度提高开发体验",className:"flex-1",delay:.3}),n.jsx(Di,{title:"新的架构思路",path:"./tutorial/index",desc:"并发模式变得更加实用，得益于并发模式的成熟，我们将可以使用新的架构思路构思我的项目",className:"flex-1",delay:.4}),n.jsx(Di,{title:"新的交互方式",path:"./tutorial/use/base",desc:"React 在人机交互的开发体验上做了很多努力和尝试，他们将在这个版本中得以体现",className:"flex-1",delay:.5})]})]})})}function sm(...t){return t.filter(Boolean).join(" ")}const k8=["学习方法之如何理解体系化","架构思维总览","BFF架构与运用","组件拆分原则","解耦与嵌套","瀑布流渲染","复杂接口请求处理方式","其他大量实践案例","项目亮点表达方式","群内直播讲解","群内大量高质量答疑视频"],Qg={frequencies:[{value:"monthly",label:"Monthly",priceSuffix:"/终身制"},{value:"annually",label:"Annually",priceSuffix:"/year"}],tiers:[{name:"基础版",id:"tier-hobby",href:"https://xinyuzone.cn/column/1876449089626005504",price:{monthly:"￥40",annually:"$144"},description:"大量可演示实践案例，帮助学习者轻松掌握 React 19.",delay:.4,features:["基础理论","use promise","Suspense","低版本兼容方案","use context","并发 api","React Compiler","Compiler 低版本引入","Form Action","乐观更新","直播课录屏"],mostPopular:!1},{name:"尊享版",id:"tier-freelancer",href:"https://xinyuzone.cn/column/1876560978079080448",price:{monthly:"￥400",annually:"$288"},description:"严格践行一套架构思维扩展复杂场景的使用",features:k8,mostPopular:!0,delay:.5},{name:"KeepCoder",id:"tier-enterprise",href:"https://www.yuque.com/coreadvance/ar2my1/apk8cr",price:{monthly:"￥2W",annually:"$864"},description:"1V1 顶级私人辅导，构建核心竞争力，全方面助你提高",features:["1V1服务","终身制服务","量身定制学习方式","顶级的前端技术能力","学霸级学习方法","全方位认知升级","构建完善的知识体系","全面的职场综合能力","顶尖的团队管理能力","完整的产品思维","完整的全栈思维"],mostPopular:!1,delay:.6}]};function M8(){const[t]=j.useState(Qg.frequencies[0]);return n.jsx("main",{className:"backdrop-blur-sm py-14 md:py-28 bg-gray-50 bg-opacity-70 px-6 md:px-8",children:n.jsxs("div",{className:"mx-auto max-w-[1080px]",children:[n.jsx(qe.a,{...Mn(),className:"font-bold text-2xl md:text-4xl text-center block scroll-mt-52",href:"#price",name:"price",id:"price",children:"价格"}),n.jsx(qe.p,{...Mn(.1),className:"mt-8 md:mt-12 text-center leading-8 px-10",children:"请根据自己的学习意愿和经济能力综合考虑，理性消费。我负责提供过硬的学习质量，确保每一位用户都能学有所得"}),n.jsx("div",{className:"isolate mx-auto mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:max-w-none xl:grid-cols-3",children:Qg.tiers.map((e,i)=>j.createElement(qe.div,{...Mn(e.delay),key:e.id,className:sm(e.mostPopular?"ring-2 ring-indigo-600":"ring-1 ring-gray-200","rounded-md p-8")},n.jsx("h2",{id:e.id,className:sm(e.mostPopular?"text-indigo-600":"text-gray-900","text-lg font-semibold leading-8"),children:e.name}),n.jsx("p",{className:"mt-4 text-sm leading-6 text-gray-600",children:e.description}),n.jsxs("p",{className:"mt-6 flex items-baseline gap-x-1",children:[n.jsx("span",{className:"text-4xl font-bold tracking-tight text-gray-900",children:e.price[t.value]}),n.jsx("span",{className:"text-sm font-semibold leading-6 text-gray-600",children:t.priceSuffix})]}),n.jsx($n,{"aria-describedby":e.id,target:"_blank",to:e.href,className:sm(e.mostPopular?"bg-indigo-600 text-white shadow-sm hover:bg-indigo-500":"text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300","mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"),children:i<2?"点击购买":"了解详情"}),n.jsx("ul",{role:"list",className:"mt-8 space-y-3 text-sm leading-6 text-gray-600",children:e.features.map((o,c)=>n.jsxs("li",{className:"flex gap-x-3 items-center",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:c<11?"size-4":"size-4 text-red-500",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})}),c<11?o:n.jsx("div",{className:"text-red-500",children:o})]},o))})))})]})})}function A8(){const[t,e]=j.useState(""),i=`relative ${t} bg-skin-fill overflow-hidden rounded`;return n.jsxs(qe.div,{className:"my-8 border border-gray-150 rounded px-8 pb-8",...Mn(.3),children:[n.jsxs("div",{className:"text-center py-4 space-x-4",children:[n.jsxs(ue,{primary:t==="",onClick:()=>e(""),className:"inline-flex space-x-2 items-center",children:[n.jsx(K3,{size:18}),n.jsx("span",{children:"Default"})]}),n.jsxs(ue,{primary:t==="theme-swiss",onClick:()=>e("theme-swiss"),className:"inline-flex space-x-2 items-center",children:[n.jsx(q3,{size:18}),n.jsx("span",{children:"Swiss"})]}),n.jsxs(ue,{primary:t==="theme-neon",onClick:()=>e("theme-neon"),className:"inline-flex space-x-2 items-center",children:[n.jsx(X3,{size:18}),n.jsx("span",{children:"Neon"})]})]}),n.jsxs("div",{className:i,children:[n.jsx("img",{className:"absolute inset-0 h-full w-full object-cover opacity-30",src:"https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:""}),n.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90 transition"}),n.jsxs("div",{className:"relative max-w-2xl mx-auto text-center py-16 px-8",children:[n.jsx("h2",{className:"font-extrabold text-skin-base text-2xl transition",children:n.jsx("span",{children:"极客时间、掘金买课优惠"})}),n.jsx("p",{className:"mt-4 text-md text-left text-skin-muted transition leading-8",children:"官方的课程返现全部归还，需要从网站 coursesub.top 或者公众号「课程减减」通过邀请链接进行下单，购买后添加客服微信发送课程名确认后即可收到红包，可正常使用极客时间的优惠券或者学生半价优惠。"}),n.jsx("div",{className:"mt-10 max-w-sm mx-auto sm:max-w-one sm:flex sm:justify-center",children:n.jsxs("div",{className:"space-y-0 mx-auto inline-grid grid-cols-2 gap-5",children:[n.jsx("a",{target:"_blank",className:"transition text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-md shadow-lg px-8",href:"https://coursesub.top/?key=react",children:"去选课"}),n.jsx("a",{target:"_blank",className:"transition text-skin-base bg-skin-button-muted hover:bg-opacity-70 flex items-center justify-center py-3 border border-transparent text-base font-medium rounded-lg shadow-sm px-8",href:"https://mp.weixin.qq.com/s?__biz=MzUyMjkwNTgwOA==&mid=2247485923&idx=1&sn=0710d33fd1e1287e10f88bd4139e0a0e&chksm=f9c5f85cceb2714a585567f21751ae703f8ba80519a7a089746079a05c4f916c962fe81332d1#rd",children:"详细规则"})]})})]})]})]})}function R8(){return n.jsx("div",{className:"bg-white backdrop-blur-sm py-14 md:py-28 bg-opacity-70 mx-auto px-6 md:px-8",children:n.jsxs("div",{className:"max-w-[1080px] mx-auto",children:[n.jsx(qe.h2,{className:"text-2xl md:text-4xl font-bold text-center",...Mn(),children:"赞助商广告"}),n.jsx(qe.p,{...Mn(.1),className:"text-center my-8 md:my-12 px-10",children:"所见即所得。演示案例内置于文章中直接渲染，可以直接交互。如下所示"}),n.jsx(A8,{})]})})}function L8(){return n.jsx("main",{className:"backdrop-blur-sm py-14 md:py-28 bg-gray-50 bg-opacity-70 px-6 md:px-8",children:n.jsxs("div",{className:"mx-auto max-w-[1080px]",children:[n.jsx(qe.p,{...Mn(),className:"font-bold text-2xl md:text-3xl text-center",children:"我的其他付费课程"}),n.jsx(qe.p,{...Mn(.1),className:"my-8 md:my-12 text-center leading-8",children:"请根据自己的学习意愿和经济能力综合考虑，理性消费。我负责提供过硬的学习质量，确保每一位用户都能学有所得"}),n.jsxs("div",{className:"flex mt-12 justify-between flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6",children:[n.jsx(Di,{title:"1V1定向指导",path:"https://appxw863qeq2150.h5.xiaoeknow.com/v1/goods/goods_detail/course_2YWwycNZDt3u59naEs57g0gGa0H?",desc:"前端专家：这波能反杀，为您提供全网最专业的技术、面试辅导，结合个人目标与工作经验，时长 2 ~ 3 小时，一次沟通，解决所有问题",className:"flex-1",delay:.3}),n.jsx(Di,{title:"keepCharts",path:"https://www.yuque.com/coreadvance/ar2my1/em5rrk6p1umptsxw",desc:"聚焦技术深度，手写基于 Canvas 的渲染引擎，并在此基础之上实现可视化图表等应用层库，打造自己牢不可破的核心竞争力",className:"flex-1",delay:.4}),n.jsx(Di,{title:"keepCoder",path:"https://www.yuque.com/coreadvance/ar2my1/apk8cr",desc:"资深前端进阶通道，1V1深度沟通辅导，聚焦学习方法，深挖知识体系，深挖应用场景，凝聚核心竞争力",className:"flex-1",delay:.4})]})]})})}function Ky({id:t,host:e,repo:i,repoId:o,category:c,categoryId:m,mapping:d,term:h,strict:f,reactionsEnabled:x,emitMetadata:v,inputPosition:y,theme:S,lang:_,loading:T}){const[L,k]=j.useState(!1);return j.useEffect(()=>{L||(f8(()=>import("./giscus-BNK3dBIH-B_EkeIy7.js"),[]),k(!0))},[]),L?n.jsx("giscus-widget",{id:t,host:e,repo:i,repoid:o,category:c,categoryid:m,mapping:d,term:h,strict:f,reactionsenabled:x,emitmetadata:v,inputposition:y,theme:S,lang:_,loading:T}):null}function T8(){return n.jsx("main",{className:"backdrop-blur-sm my-14 bg-white bg-opacity-70 px-6 md:px-8",children:n.jsx("div",{className:"mx-auto max-w-[1080px]",children:n.jsx(Ky,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",loading:"lazy",crossorigin:"anonymous",async:!0})})})}function E8(){return n.jsx("main",{className:"backdrop-blur-sm py-4 bg-gray-50 bg-opacity-70 px-6 md:px-8",children:n.jsx("div",{className:"mx-auto max-w-[1080px]",children:n.jsxs("div",{className:"flex justify-between",children:[n.jsxs("span",{className:"text-gray-400",children:["© Copyright 2024.",n.jsx("a",{href:"https://beian.miit.gov.cn/",target:"_blank",children:"这波能反杀."}),n.jsx("a",{href:"https://beian.miit.gov.cn/",target:"_blank",children:"粤ICP备2024222174号"})]}),n.jsxs("div",{className:"flex",children:[n.jsx("div",{className:"ml-3",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"})})}),n.jsx("div",{className:"ml-3",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"})})}),n.jsx("div",{className:"ml-3",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"})})})]})]})})})}function Mn(t=0){return{initial:{y:60,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.5,delay:t},viewport:{once:!0}}}function $8(){return n.jsxs("div",{className:"relative pt-16",children:[n.jsx(g_,{}),n.jsxs("div",{children:[n.jsx(j_,{}),n.jsx(b_,{}),n.jsx(N8,{}),n.jsx(w8,{}),n.jsx(_8,{}),n.jsx(C8,{}),n.jsx(M8,{}),n.jsx(R8,{}),n.jsx(L8,{}),n.jsx(T8,{}),n.jsx(E8,{})]})]})}const D8="/assets/30-Do4OqOfW.jpg",O8="/assets/200-CadH3lOz.jpg",B8="/assets/400-C00ssYqp.jpg",z8={30:"基础版",200:"尊享版提前投资",400:"尊享版"},U8={30:D8,200:O8,400:B8};function P8(){const t=window.location.search.split("=")[1];return n.jsxs("div",{className:"mt-24 md:mx-auto mx-4 max-w-[640px] px-4 md:px-16 py-8 border rounded-lg mb-4",children:[n.jsxs("div",{className:"flex items-center space-x-2 mb-8",children:[n.jsx("svg",{className:"icon",viewBox:"0 0 1228 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"24",height:"24",children:n.jsx("path",{d:"M530.8928 703.1296a41.472 41.472 0 0 1-35.7376-19.8144l-2.7136-5.5808L278.272 394.752a18.7392 18.7392 0 0 1-2.048-8.1408 19.968 19.968 0 0 1 20.48-19.3536c4.608 0 8.8576 1.4336 12.288 3.84l234.3936 139.9296a64.4096 64.4096 0 0 0 54.528 5.9392L1116.2624 204.8C1004.9536 80.896 821.76 0 614.4 0 275.0464 0 0 216.576 0 483.6352c0 145.7152 82.7392 276.8896 212.2752 365.5168a38.1952 38.1952 0 0 1 17.2032 31.488 44.4928 44.4928 0 0 1-2.1504 12.3904l-27.6992 97.4848c-1.3312 4.608-3.328 9.3696-3.328 14.1312 0 10.752 9.216 19.3536 20.48 19.3536 4.4032 0 8.0384-1.536 11.776-3.584l134.5536-73.3184c10.1376-5.5296 20.7872-8.96 32.6144-8.96 6.2976 0 12.288 0.9216 18.0736 2.5088 62.72 17.0496 130.4576 26.5728 200.5504 26.5728C953.7024 967.168 1228.8 750.592 1228.8 483.6352c0-80.9472-25.4464-157.1328-70.0416-224.1024l-604.9792 436.992-4.4544 2.4064a42.1376 42.1376 0 0 1-18.432 4.1984z",fill:"#15BA11"})}),n.jsx("div",{children:"微信支付"}),n.jsx("div",{children:"|"}),n.jsx("div",{children:"转账支付"})]}),n.jsxs(we,{className:"items-center justify-between flex-col md:flex-row",children:[n.jsxs("div",{children:[n.jsx("img",{src:U8[t],alt:"",width:"250",height:"250"}),n.jsx("div",{})]}),n.jsx("div",{className:"w-48 md:w-0 border-t my-16 md:border-l border-gray-300 md:h-48 border-dashed"}),n.jsxs("div",{className:"pl-10",children:[n.jsxs("div",{children:["您正在购买 React 19 ",z8[t]]}),n.jsxs(we,{className:"items-center",children:["￥",n.jsx("div",{className:"",style:{fontSize:64},children:t})]}),n.jsxs("div",{className:"mt-4",children:[n.jsx("span",{className:"text-gray-400",children:"收款方："}),"这波能反杀"]}),n.jsxs("div",{className:"mt-2",children:[n.jsx("span",{className:"text-gray-400",children:"微信号："}),"icanmeetu"]}),n.jsxs("div",{className:"mt-2",children:[n.jsx("span",{className:"text-gray-400",children:"激活码："}),"私信我获得激活码"]})]})]})]})}function $p(t){const{label:e,type:i,primary:o,warning:c,danger:m,newer:d,hard:h,className:f}=t,v=Fe("text-sm text-gray-500 border px-3 rounded-full",{"bg-blue-100 text-blue-500 border-blue-500":!!o,"bg-green-100 text-green-500 border-green-500":!!d,"bg-red-100 text-red-500 border-red-500":!!m,"bg-orange-100-100 text-orange-500 border-orange-500":!!m,"bg-fuchsia-100 text-fuchsia-500 border-fuchsia-500":!!h},f);return n.jsx("label",{className:Hr(v),children:e})}function ae(t){const{renderArticle:e}=t;return n.jsxs(n.Fragment,{children:[e(Yy),n.jsx("div",{id:"diviler_",className:"border-b mt-20 mb-8 text-lg font-bold pb-3 border-dashed scroll-mt-24"}),n.jsx(Ky,{repo:"yangbo5207/react19feature",repoId:"R_kgDOMGiHOw",category:"General",categoryId:"DIC_kwDOMGiHO84Cf8dR",maping:"pathname",term:"欢迎道友",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",lang:"zh-CN",crossorigin:"anonymous",async:!0})]})}const H8="/assets/react-CqE24J1b.svg",V8="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='31.88'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20257'%3e%3cdefs%3e%3clinearGradient%20id='IconifyId1813088fe1fbc01fb466'%20x1='-.828%25'%20x2='57.636%25'%20y1='7.652%25'%20y2='78.411%25'%3e%3cstop%20offset='0%25'%20stop-color='%2341D1FF'%3e%3c/stop%3e%3cstop%20offset='100%25'%20stop-color='%23BD34FE'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient%20id='IconifyId1813088fe1fbc01fb467'%20x1='43.376%25'%20x2='50.316%25'%20y1='2.242%25'%20y2='89.03%25'%3e%3cstop%20offset='0%25'%20stop-color='%23FFEA83'%3e%3c/stop%3e%3cstop%20offset='8.333%25'%20stop-color='%23FFDD35'%3e%3c/stop%3e%3cstop%20offset='100%25'%20stop-color='%23FFA800'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20fill='url(%23IconifyId1813088fe1fbc01fb466)'%20d='M255.153%2037.938L134.897%20252.976c-2.483%204.44-8.862%204.466-11.382.048L.875%2037.958c-2.746-4.814%201.371-10.646%206.827-9.67l120.385%2021.517a6.537%206.537%200%200%200%202.322-.004l117.867-21.483c5.438-.991%209.574%204.796%206.877%209.62Z'%3e%3c/path%3e%3cpath%20fill='url(%23IconifyId1813088fe1fbc01fb467)'%20d='M185.432.063L96.44%2017.501a3.268%203.268%200%200%200-2.634%203.014l-5.474%2092.456a3.268%203.268%200%200%200%203.997%203.378l24.777-5.718c2.318-.535%204.413%201.507%203.936%203.838l-7.361%2036.047c-.495%202.426%201.782%204.5%204.151%203.78l15.304-4.649c2.372-.72%204.652%201.36%204.15%203.788l-11.698%2056.621c-.732%203.542%203.979%205.473%205.943%202.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505%204.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z'%3e%3c/path%3e%3c/svg%3e";function q8(){const[t,e]=j.useState(0);return n.jsxs("div",{className:"flex items-center justify-center flex-col",children:[n.jsxs("div",{children:[n.jsx("a",{href:"https://vitejs.dev",target:"_blank",children:n.jsx("img",{src:V8,className:"logo",alt:"Vite logo"})}),n.jsx("a",{href:"https://react.dev",target:"_blank",children:n.jsx("img",{src:H8,className:"logo react",alt:"React logo"})})]}),n.jsx("h1",{children:"Vite + React"}),n.jsxs("div",{className:"text-center",children:[n.jsxs("button",{onClick:()=>e(i=>i+1),children:["count is ",t]}),n.jsxs("p",{children:["Edit ",n.jsx("code",{children:"src/App.tsx"})," and save to test HMR"]})]}),n.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"})]})}const F8=`import { useState } from 'react'
import reactLogo from './react.svg'
import viteLogo from './vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex items-center justify-center flex-col'>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="text-center">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
`;function X8(){return n.jsx(ee,{files:{index:F8},caseRender:n.jsx(q8,{})})}function Jg(t){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"首先，我们使用 vite 创建一个 React 项目"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm create vite
`})}),`
`,n.jsxs(e.p,{children:["上面的命令执行完成之后，会引导你输入项目名称，我们将项目名称取为：",n.jsx(e.code,{children:"react19feature"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`✔ Project name: react19feature
`})}),`
`,n.jsx(e.p,{children:"输入之后，按下回车，选择前端框架"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`    vanilla
    vue
 >  react
    react-ts
    preact
    lit
    svelte
`})}),`
`,n.jsxs(e.p,{children:["我们选择 ",n.jsx(e.code,{children:"react"}),"，执行完毕之后，vite 会在当前目录中创建项目 ",n.jsx(e.code,{children:"react19feature"}),"，我们通过如下指令进入到项目文件"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`cd react19feature
`})}),`
`,n.jsxs(e.p,{children:["然后用编辑器打开项目文件，在根目录的 ",n.jsx(e.code,{children:"package.json"})," 文件中修改 ",n.jsx(e.code,{children:"react"})," 与 ",n.jsx(e.code,{children:"react-dom"})," 的依赖版本为 react 19."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`"dependencies": {
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"注意：如果已经正式发版，那么vite 创建的版本可能会直接更新为最新版而不需要我们手动修改"}),`
`]}),`
`,n.jsx(e.p,{children:"修改完成之后，执行如下指令安装依赖"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm i
`})}),`
`,n.jsx(e.p,{children:"然后执行如下指令运行项目"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm run dev
`})}),`
`,n.jsxs(e.p,{children:["成功启动之后，我们可以在浏览器中输入 ",n.jsx(e.code,{children:"http://localhost:5173"})," 访问到项目"]}),`
`,n.jsx(X8,{}),`
`,n.jsxs(e.p,{children:["由于我们项目需要用到 ",n.jsx(e.code,{children:"require"}),"，但是 vite 中使用 ES module 作为模块方案，因此并没有内置对CommonJS 的支持，如果你需要在项目中支持 ",n.jsx(e.code,{children:"require"})," 语法引入模块，则需要做点其他的操作"]}),`
`,n.jsxs(e.p,{children:["首先，我们需要",n.jsx(e.strong,{children:"安装如下依赖"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm i vite-plugin-require-transform --save-dev
`})}),`
`,n.jsxs(e.p,{children:["然后，在 ",n.jsx(e.code,{children:"vite.config.js"})," 中新增如下配置"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
+ import requireTransform from 'vite-plugin-require-transform'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
+   requireTransform({
+     fileRegex: /.js$|.jsx$/,
+   }),
  ],
})
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["如果你需要支持更多的文件后缀，则需要在 ",n.jsx(e.code,{children:"fileRegex"})," 中添加，本项目仅支持 ",n.jsx(e.code,{children:".js"})," 与 ",n.jsx(e.code,{children:".jsx"})]}),`
`]}),`
`,n.jsx(e.p,{children:"最后重启项目即可。"}),`
`,n.jsxs(e.p,{children:["除此之外，如果你的项目中需要使用路由库，我们可以安装 ",n.jsx(e.code,{children:"react-router"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`npm i react-router
`})}),`
`,n.jsxs(e.p,{children:["状态管理库 ",n.jsx(e.code,{children:"zustand"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`npm i zustand
`})})]})}function G8(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Jg,{...t})}):Jg(t)}function I8(){return n.jsx(ae,{renderArticle:t=>n.jsx(G8,{components:{code:t}})})}function e1(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"这篇文章文字内容不会很多，但是是整个专栏最重要的部分之一。"}),`
`,n.jsx(e.p,{children:"本专栏会围绕如下三个层次逐渐为大家由浅入深分析 React19 的学习，他们确保了我们的学习方向的正确性与难度的循序渐进。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"0"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"初级版：优化异步开发体验"})}),`
`,n.jsx(e.p,{children:"React 19 引入了好几个新的 hook 用于优化异步开发体验。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`use
useActionState
useFormStatus
useOptimistic
`})}),`
`,n.jsx(e.p,{children:"他们的主要目的是试图在项目开发中，引导开发者削弱 useEffect 的使用。因此我们在实践案例中，需要谨记这个核心思想，不至于在开发中偏离轨迹，而忽视了新 hook 的强大能力。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"注：并非完全不用 useEffect"}),`
`]}),`
`,n.jsx(e.p,{children:"如果你只是专注于项目开发，学习到这里基本上已经可以了。因为大多数项目涉及不到更高的理解层次。大多数 React 开发者也很难通过自学有更强的理解。《React 19 全解》基础版也主要围绕这个目标来展开分享。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"进阶版：强化并发模式"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"只有少部分顶级前端开发需要关注并发模式。"})," 他的理解难度并不低。充分消化并发模式并运用于实践能够让一个前端程序员完成蜕变，你可以很容易突破前端开发的瓶颈。"]}),`
`,n.jsx(e.p,{children:"在 React 中，并发模式并非是一个新概念。在 React Fiber 架构提出之初，我们就陆陆续续的听说了它。"}),`
`,n.jsx(e.p,{children:"但是经过好几个大版本的迭代，并发模式在开发者中的感受并不深刻。甚至由于之前设计的几个并发模式的 API 不好用，导致很多开发者也对 React 的并发模式并不感兴趣。"}),`
`,n.jsx(e.p,{children:"React 19 从源码层面简化和改进了并发模式，摈弃了之前的同步模式。除此之外，React 19 还对并发模式的 API 进行了调整和优化，例如重新设计了 Suspense，它支持更好的代码逻辑拆分，我们可以在普通的页面开发中使用到它。"}),`
`,n.jsx(e.p,{children:"在后续的章节中，我们会单独学习并发模式所涉及到的 API。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"2"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"顶级版：深入理解 React Compiler"})}),`
`,n.jsxs(e.p,{children:["毫无疑问，React Compiler 的使用一定是简单的，但是对于其原理的透彻理解，就需要一点底子了。很显然，这",n.jsx(e.strong,{children:"必定会称为面试中的常客"}),"。因此，如果你希望在面试中有一个更好的表现，对其实现原理如数家珍会为你",n.jsx(e.strong,{children:"上大分"}),"。"]}),`
`,n.jsx(e.p,{children:"当然，如果你并不需要在面试中通过表达自己对 Compiler 的理解来加分，那么这一部分也是可以不需要学习的。"}),`
`,n.jsx(e.p,{children:"正是由于他的必要性不是很高，我才把这一部分内容放到专栏的最后一个部分。理解它在项目开发中的实用价值并不高。"}),`
`,n.jsx(e.p,{children:"透彻理解 React Compiler 的原理，需要对现有 React 的底层原理有一个大概的了解，这样我们才能形成一个完整的知识体系闭环。学习之前，做好这个心理准备和知识铺垫即可。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["在 ",n.jsx(e.strong,{children:"React 知命境"})," 中，我有几篇高质量的文章介绍了 React 的底层原理，读者朋友们可以去看看。"]}),`
`]})]})}function Y8(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(e1,{...t})}):e1(t)}function Z8(){return n.jsx(ae,{renderArticle:t=>n.jsx(Y8,{components:{code:t}})})}const K8=t=>{const e=j.use(t.response);return n.jsx("div",{className:"leading-6 transition border rounded-md p-4",children:e.value})};function Se(t){return t.type==="card"?n.jsx("div",{className:"border border-blue-100 rounded p-4 w-full my-4",children:n.jsx("div",{className:"animate-pulse flex space-x-4 items-center",children:[1,2,3,4].map((e,i)=>n.jsxs("div",{className:"flex-1",children:[n.jsx("div",{className:"rounded-md bg-slate-200  h-32"}),n.jsxs("div",{className:"grid grid-cols-3 gap-4 mt-2",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),n.jsx("div",{className:"grid grid-cols-4 gap-4 mt-2",children:n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-3"})})]},`z-${i}`))})}):t.type==="header"?n.jsx("div",{className:"border border-blue-100 rounded p-4 w-full my-4",children:n.jsxs("div",{className:"animate-pulse flex space-x-4 items-center",children:[n.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),n.jsxs("div",{className:"flex-1 space-y-3 py-1",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded"}),n.jsx("div",{className:"space-y-3",children:n.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]})})]})]})}):n.jsx("div",{className:"border border-blue-100 rounded p-4 w-full my-4",children:n.jsxs("div",{className:"animate-pulse flex space-x-4",children:[n.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),n.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded"}),n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),n.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}const W8=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];var Wy=new Headers;Wy.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var Q8={method:"GET",headers:Wy,redirect:"follow",data:"hex"};const J8="https://echo.apifox.com/delay/1",Bm=async()=>{await fetch(J8,Q8);const t=Math.floor(Math.random()*10)%5;return{value:W8[t]}};function e9(){const t=Bm();return n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(K8,{response:t})})}const n9=`import {Suspense} from 'react'
import Message from './Message'
import Skeleton from 'components/Skeleton'
import {getApi} from '../api'

export default function App() {
  const promise = getApi()

  return (
    <Suspense fallback={<Skeleton />}>
      <Message response={promise} />
    </Suspense>
  )
}
`,t9=`import { use } from 'react'

const Message = (props) => {
  const content = use(props.response)
  return (
    <div className='leading-6 transition border rounded-md p-4'>
      {content.value}
    </div>
  )
}
export default Message
`,Qy=`const random = [
  'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.',
  'Whether you work on your own or with thousands of other developers, using React feels the same.',
  'React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.',
  'This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ',
  'You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.'
]

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

export const getApi = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i]
  }
}
`;function s9(){return n.jsx(ee,{files:{index:n9,message:t9,api:Qy},caseRender:n.jsx(e9,{})})}const r9=t=>{const{isPending:e,response:i}=t,o=j.use(i);return n.jsx("div",{className:"leading-6 transition border border-blue-100 rounded p-4",style:{opacity:e?.5:1},children:o.value})};function i9(){const[t,e]=j.useState(Bm),[i,o]=j.useTransition();function c(){o(()=>{e(Bm())})}return n.jsxs("div",{className:"space-y-4",children:[n.jsx("div",{className:"flex justify-end",children:n.jsx(ue,{onClick:c,disabled:i,children:"点击更新"})}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(r9,{response:t,isPending:i})})]})}const a9=`import {Suspense, useState, useTransition} from 'react'
import Message from './Message'
import Button from 'components/Button'
import Skeleton from 'components/Skeleton'
import {getApi} from '../api'

export default function App() {
  const [response, setApi] = useState(getApi)
  const [isPending, startTransition] = useTransition()

  function __click() {
    startTransition(() => {
      setApi(getApi())
    })
  }

  return (
    <div className='space-y-4'>
      <div className='flex justify-end'>
        <Button onClick={__click} disabled={isPending}>点击更新</Button>
      </div>
      
      <Suspense fallback={<Skeleton />}>
        <Message response={response} isPending={isPending} />
      </Suspense>
    </div>
  )
}
`,o9=`import { use } from 'react'

const Message = (props) => {
  const {isPending, response} = props
  const content = use(response)
  return (
    <div className='leading-6 transition border border-blue-100 rounded p-4' style={{opacity: isPending ? 0.5 : 1}}>
      {content.value}
    </div>
  )
}
export default Message
`;function l9(){return n.jsx(ee,{files:{index:a9,message:o9,api:Qy},caseRender:n.jsx(i9,{})})}function n1(t){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:n.jsx(e.em,{children:"0"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"序"})}),`
`,n.jsx(e.p,{children:"目前写 React 19 的文章已经有很多很多了，但是，写到点子上的并不多。包括官方文档，只是简单的罗列出了它新增了一些 hook，一些特性，却并没有进一步说明这些 hook 背后所代表的含义，它们的最佳实践是什么。"}),`
`,n.jsx(e.p,{children:"以至于，在这个时间节点，期待 React 19 的人也并不是很多。"}),`
`,n.jsxs(e.p,{children:["但是，我要告诉大家的是，",n.jsx(e.strong,{children:"我们都严重低估了 React 19"}),"。"]}),`
`,n.jsx(e.p,{children:"经过我长达一整年的使用体验，我的感受是："}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"我们的开发方式，又要迎来一次重大升级了。"})," 因为新的 hook 真的太好用了。"]}),`
`,n.jsx(e.p,{children:"所以我准备写一系列合集，为大家完整、详细的介绍 React 19 的新的最佳实践。在后续的文章中，我会详细分析新的开发方式的思考。"}),`
`,n.jsx(e.p,{children:"和过去的 React 版本相比，React 19 主要从如下两个方面带来了显著的提升。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"性能"})}),`
`,n.jsx(e.p,{children:"最近几年，许多其他前端框架纷纷拥抱基于 Signal 的细粒度更新，在特定场景有接近原生开发的性能体验，把前端框架的性能问题推上了风口浪尖。而 React 基于 Fiber 的 Diff 更新则自然而然的成为了最大的缺陷与短板。大量冗余 re-render 造成的性能损耗，是 React 不得不面对的挑战。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"注：细粒度更新并非所有场景都具有明显的优势，也不要完全相信框架而忽视掌握性能优化技能的重要性"}),`
`]}),`
`,n.jsxs(e.p,{children:["虽然 React 提供了 ",n.jsx(e.code,{children:"memo/useMemo/useCallback"})," 来帮助开发者优化项目性能。但是他们的学习成本并不低，想要在项目中得心应手的使用他们更是不易。这就造成了许多团队在没有完全消化他们的情况下，对他们的使用存在滥用的情况。"]}),`
`,n.jsxs(e.p,{children:["在这样的背景之下，React 19 将会推出 ",n.jsx(e.strong,{children:"React Compiler"}),"，在开发者不调整任何代码的情况下，自动优化项目性能。"]}),`
`,n.jsxs(e.p,{children:["React Compiler 能够帮助我们在不使用 ",n.jsx(e.code,{children:"memo/useMemo/useCallback"})," 的情况下，方便得处理好项目 re-render 的问题。你的项目最终只会在需要更新的地方 re-render。"]}),`
`,n.jsx(e.p,{children:"并且最重要的是，React Compiler 编译之后，你的代码并不会改变现有渲染机制，而是在已有机制下完成对项目的优化。React Compiler 的愿景非常庞大，他需要在兼顾大量老项目的情况下，做到对项目的性能优化。因此与提出一个新的解决方案相比，他的开发难度要高出很多。破坏性更新显得更加容易，但是对于开发者和大量老项目而言，这是一种严重的伤害。React Compiler 则选择了最难搞的一种更新方式。"}),`
`,n.jsx(e.p,{children:"与依赖追踪的细粒度更新不同，React Compiler 通过记忆的方式，让组件更新只发生在需要更新的组件，从而减少大量 re-render 的组件，我会在后续的章节中详细介绍他的使用原理。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"但是请注意，React Compiler 并非全能，如果你写的代码过于灵活，无法被提前预判执行行为，那么 React Compiler 将会跳过这一部分的优化。因此好的方式是在项目中引入严格模式，在严格模式的指导下完成的开发，基本都在 React Compiler 的辐射范围之内"}),`
`]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"2"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"开发体验"})}),`
`,n.jsxs(e.p,{children:["与性能带来的提升相比，真正令我非常期待的是，React 19 将会迎来一次",n.jsx(e.strong,{children:"开发体验的重大提升"}),"。毕竟没有 React Compiler，我自己也能优化好我的项目性能。"]}),`
`,n.jsxs(e.p,{children:["开发体验的提升主要体现在，",n.jsxs(e.strong,{children:["React 19 之后，我们可能不再那么需要 ",n.jsx(e.code,{children:"useEffect"})]})," 了。"]}),`
`,n.jsx(e.p,{children:"useEffect 是一个功能强大的 hook，但他又是最难驾驭的一个 hook，理解不够的开发者可能会由于滥用它而导致项目失控。包括被讨论最多的闭包问题，也往往跟它有关。其中最考验开发者水平的，是对于 useEffect 依赖项的正确处理。"}),`
`,n.jsxs(e.p,{children:["React19 的大部分更新，几乎都是围绕如何在开发中尽量不用或者少用 useEffect 来展开。在之前的项目开发中，",n.jsx(e.code,{children:"useEffect"})," 是我们处理异步问题必须使用的重要 hook 之一，他几乎存在于每一个页面组件之中。"]}),`
`,n.jsxs(e.p,{children:["React 19 则引入了新的 hook，让我们",n.jsx(e.strong,{children:"处理异步开发时，不再需要"})," ",n.jsx(e.code,{children:"useEffect"}),"，从而极大的改变我们的开发方式。我会在后续的章节中，结合",n.jsx(e.strong,{children:"大量实践案例"}),"，一一介绍这些 API 的详细使用方法，确保每个读者都能彻底掌握他。"]}),`
`,n.jsxs(e.p,{children:["除此之外，React19 想要彻底改变我们在项目开发中的 UI 交互方式。对于 React19 而言，",n.jsx(e.code,{children:"Suspense"})," 的重要性将会变得越来越高, 瀑布流式的开发方式将会被认可。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"Suspense"})," 虽然早在 React18 中都能够被正常使用，但是由于异步请求方案的不成熟，它们并没有被普及开，包括 React 官方文档也并没有进一步说明如何触发 ",n.jsx(e.code,{children:"Suspense"})," 的回调机制。因此它们只是小范围的被一些顶尖的前端开发所使用。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<Suspense fallback={<div>loading...</div>}>
  <List api={__api} />
</Suspense>
`})}),`
`,n.jsxs(e.p,{children:["React19 之后，",n.jsx(e.strong,{children:"它们将会得到普及"}),"。这将会进一步深化组件解释一切的开发思想。"]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"3"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"新的架构思维"})}),`
`,n.jsx(e.p,{children:"React 19 之前，React 高手与普通开发者之间，开发的项目无论是从性能上、还是从代码优雅上差距都非常大。因此不同的人对于 React 的感受完全不一样。"}),`
`,n.jsxs(e.p,{children:["而 React 19 则借由推出一些新的 hook，暗中传递一种",n.jsx(e.strong,{children:"框架思维"}),"「最佳实践」，这将会极大的拉进普通开发者与顶尖高手之间的差距。对于大多数 React 开发者而言，这会是一个极大的提升。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"这一意图在 React 新的官方文档与 Next.js 中体现得非常明显"}),`
`]}),`
`,n.jsxs(e.p,{children:["这一最佳实践主要围绕如何改进异步编程的开发体验而展开。在后续的章节中大家可以自行感受。我也会在后续的实践案例中弱化对 ",n.jsx(e.code,{children:"useEffect"})," 的使用。"]}),`
`,n.jsx(e.p,{children:"例如，当我想要实现如下效果时。"}),`
`,n.jsx(e.p,{children:"在项目开发中，新页面渲染时请求一个接口的场景非常常见。新的架构思维的开发代码如下所示。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"该案例没有引入任何三方库"}),`
`]}),`
`,n.jsx(e.p,{children:"首先我们需要定义一个 API 用于请求数据。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`export const getApi = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i]
  }
}
`})}),`
`,n.jsx(e.p,{children:"需要注意的是，本案例中的 api 都使用的是模拟接口，许多数据无任何业务描述，仅用于呈现 UI 的显示和变化。因此写法会与实际开发过程中稍有差异。"}),`
`,n.jsx(e.p,{children:"然后创建一个函数组件，并执行该 api"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`export default function App() {
  const promise = getApi()

  return (
    <Suspense fallback={<Skeleton />}>
      <Message response={promise} />
    </Suspense>
  )
}
`})}),`
`,n.jsx(e.p,{children:"最后在子组件中，获取 api 执行之后得到的数据"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { use } from 'react'

const Message = (props) => {
  const content = use(props.response)
  return (
    <div className='leading-6 transition border rounded-md p-4'>
      {content.value}
    </div>
  )
}
export default Message
`})}),`
`,n.jsx(e.p,{children:"演示效果如下"}),`
`,n.jsx(s9,{}),`
`,n.jsxs(e.p,{children:["大家可以自行感受一下新的开发方式与以前基于 ",n.jsx(e.code,{children:"useEffect"})," 请求数据有什么不同之处。我在下方案例演示中，还提供了更完整更具代表性的案例。大家可以先瞄一眼体会一下。案例代码有对应的完整演示效果，你可以通过修改代码观察案例的变化。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"注意：一套成熟架构思维，不是使用一个简单的方案解决某一个问题，而是要基于这套思维去解决项目中的绝大多数场景。因此我们一定要结合大量的场景去理解一套项目架构思维。"}),`
`]}),`
`,n.jsx(l9,{}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"5"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"合集介绍"})}),`
`,n.jsxs(e.p,{children:["本合集名为：",n.jsx(e.strong,{children:"「React19 全解」"})," ，是 ",n.jsx(e.strong,{children:"「React 知命境」"})," 的续集。首发于公众号",n.jsx(e.a,{href:"",children:"这波能反杀"}),"。后为了提高大家的学习体验，迁移至此处。在这里我基于",n.jsx(e.strong,{children:"沉浸式"}),"的学习体验，内置了大量可操作可交互的真实案例。摒弃了使用截图演示案例的方式。除此之外，为了让大家能够获得更好的学习效果，每一个案例都精心设计了 UI。在细节上精心打磨，争取让大家能够所学即所得。快速掌握 React19."]}),`
`,n.jsx(e.p,{children:"希望大家能够在这里获得全网最好的学习体验！Let's go."})]})}function c9(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(n1,{...t})}):n1(t)}function u9(){return n.jsx(ae,{renderArticle:t=>n.jsx(c9,{components:{code:t}})})}function t1(t){const e={a:"a",h3:"h3",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{children:"直播录屏地址"}),`
`,n.jsxs(e.p,{children:["1、 ",n.jsx(e.a,{href:"https://pan.baidu.com/s/1wUuRM1U1Jegj3pXP5J8KLQ?pwd=vxw3",children:"https://pan.baidu.com/s/1wUuRM1U1Jegj3pXP5J8KLQ?pwd=vxw3"})," 提取码: vxw3"]})]})}function d9(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(t1,{...t})}):t1(t)}function m9(){return n.jsx(ae,{renderArticle:t=>n.jsx(d9,{components:{code:t}})})}const p9=t=>{const e=t.message;return n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:"Heads Up!"}),n.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})};function An(){for(var t=[],e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",i=0;i<16;i++)t[i]=e.substr(Math.floor(Math.random()*16),1);return t[8]="-",t.join("")}const h9=["React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.","Whether you work on your own or with thousands of other developers, using React feels the same.","React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.","This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. ","You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it."];function Ce(){const t=Math.floor(Math.random()*10)%5;return h9[t]}const f9=new Promise(t=>{t({value:Ce()})});function x9(){const t=j.use(f9);return n.jsx(p9,{message:t.value})}const g9=`import {use} from 'react'
import Message from './message'
import {createRandomMessage} from 'utils'

const _api2 = new Promise((resolve) => {
  resolve({ value: createRandomMessage() })
})

export default function Demo01() {
  const result = use(_api2)
  return (
    <Message message={result.value} />
  )
}
`,v9=`const Message = (props) => {
  const message = props.message;
  return (
    <div className='flex border border-blue-100 p-4 rounded'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='text-sm mt-1 text-gray-600'>{message}</div>
      </div>
    </div>
  )
}

export default Message
`;function j9(){return n.jsx(ee,{files:{index:g9,message:v9},caseRender:n.jsx(x9,{})})}const y9=t=>{const e=t.message;return n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:"Heads Up!"}),n.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})},b9=new Promise(t=>{t({value:Ce()})});function S9(){const[t,e]=j.useState(!1);let i={value:""};return t||(i=j.use(b9)),n.jsxs(n.Fragment,{children:[t?n.jsx(Se,{}):n.jsx(y9,{message:i.value}),n.jsx("div",{className:"mt-4 text-right",children:n.jsx(ue,{signal:!0,onClick:()=>e(!t),children:"切换"})})]})}const N9=`import {use, useState} from 'react'
import Button from 'components/Button'
import Skeleton from 'components/Skeleton'
import Message from './message'
import {createRandomMessage} from 'utils'

const _api2 = new Promise((resolve) => {
  resolve({ value: createRandomMessage() })
})

export default function Demo01() {
  const [loading, setLoading] = useState(false)
  let result = {value: ''}
  if (!loading) {
    result = use(_api2)
  }

  return (
    <>
      {loading ? <Skeleton /> : <Message message={result.value} />}
      <div className='mt-4 text-right'>
        <Button signal onClick={() => setLoading(!loading)}>切换</Button>
      </div>
    </>
  )
}
`,w9=`const Message = (props) => {
  const message = props.message;
  return (
    <div className='flex border border-blue-100 p-4 rounded'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='text-sm mt-1 text-gray-600'>{message}</div>
      </div>
    </div>
  )
}

export default Message
`;function _9(){return n.jsx(ee,{files:{index:N9,message:w9},caseRender:n.jsx(S9,{})})}const C9=t=>{const e=t.message;return n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6 mt-2",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"})}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:"Heads Up!"}),n.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})},k9="https://echo.apifox.com/delay/1";var Jy=new Headers;Jy.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var M9={method:"GET",headers:Jy,redirect:"follow",data:"hex"};const A9=async()=>(await fetch(k9,M9),{value:Ce()});function R9(){let[t,e]=j.useState(!0);const i=j.useRef(A9().then(c=>(e(!1),c)));let o={value:"",icon_url:""};return t?n.jsx(Se,{}):(o=j.use(i.current),n.jsx(C9,{message:o.value}))}const L9=`import React, { useState, use, useRef } from 'react';
import Skeleton from 'components/Skeleton'
import Message from './message'
import {getMessage} from './api'

export default function Demo03() {
  let [loading, setLoading] = useState(true)

  const promise = useRef(getMessage().then(res => {
    setLoading(false)
    return res
  }))

  let result = {value: '', icon_url: ''}

  if (!loading) {
    result = use(promise.current)
    return <Message message={result.value} />
  }

  return <Skeleton />
}
`,T9=`const Message = (props) => {
  const message = props.message;
  return (
    <div className='flex border border-blue-100 p-4 rounded'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='text-sm mt-1 text-gray-600'>{message}</div>
      </div>
    </div>
  )
}

export default Message
`,E9=`import {createRandomMessage} from 'utils'

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

export const getMessage = async () => {
  await fetch(url, requestOptions)
  return { value: createRandomMessage() }
}
`;function $9(){return n.jsx(j.Suspense,{children:n.jsx(ee,{files:{index:L9,message:T9,api:E9},caseRender:n.jsx(R9,{})})})}function s1(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.p,{children:[n.jsx(e.code,{children:"use()"})," 是 React19 提升异步开发体验最重要的 hook。也是让 useEffect 重要性大幅度削弱的主要原因。"]}),`
`,n.jsxs(e.p,{children:["我们可以利用 use 读取 ",n.jsx(e.code,{children:"Promise"})," 中的值。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"也可以使用 use 读取 context 中的资源，后续详细介绍该能力"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const value = use(promise)
`})}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"0"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"正确理解 promise"})}),`
`,n.jsxs(e.p,{children:["这里我们需要特别注意的是，",n.jsx(e.strong,{children:"Promise"})," 是指的一个已经创建好的 Promise 对象，并且，在该 promise 对象中已经有了确定的 ",n.jsx(e.code,{children:"resolve"})," 的结果，use 读取的是 resolve 的值。"]}),`
`,n.jsx(e.p,{children:"注意观察一下下面两种写法"}),`
`,n.jsx(e.p,{children:"第一种是已经有了结果状态的 Promise 对象"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const _api2 = new Promise((resolve) => {
  resolve({ value: '_api2' })
})

// good
const result = use(_api2)
`})}),`
`,n.jsx(e.p,{children:"第二种是函数运行创建 Promise 对象，此时我们需要注意，虽然 _api3 执行之后会立即返回一个带有 resolve 结果状态的 Promise，但是 use 并不能第一时间读取到其值。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`const _api3 = () => {
  return new Promise(resolve => {
    resolve({ value: '_api3' })
  })
}

// bad: get an error
const result = use(_api3())
`})}),`
`,n.jsx(e.p,{children:"如果我们按照以往的习惯，直接使用第二种，那么运行之后，React19 会给你如下一个报错。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-error",children:"async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.\n"})}),`
`,n.jsx(e.p,{children:"一个完整的案例代码以及演示效果如下"}),`
`,n.jsx(j9,{}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"在条件判断中使用"})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"这是一个反模式，并不建议在实践中真的这样使用"}),`
`]}),`
`,n.jsxs(e.p,{children:["和其他 hook 一样，",n.jsx(e.code,{children:"use()"})," 必须在函数组件中使用。但是很不一样的是，use 可以在循环和条件判断语句中使用。我们这里如下案例来演示这个结论。"]}),`
`,n.jsxs(e.p,{children:["在这个例子中，",n.jsx(e.code,{children:"use"})," 被使用在 ",n.jsx(e.code,{children:"if(!loading)"})," 条件判断中来获取 result 的值。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`if (!loading) {
  result = use(_api2)
}
`})}),`
`,n.jsx(e.p,{children:"完整的代码与最终的演示效果如下，你可以在演示案例中多次点击切换按钮查看交互效果。"}),`
`,n.jsx(_9,{}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"2"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"在异步请求中使用"})}),`
`,n.jsx(e.p,{children:"通常，我们在处理异步请求时，也会结合 promise 来使用。但是我们并不能直接使用 use 来读取异步请求中的 promise，因为我们已经非常明确，use 只能读取有确定 resolve 结果的 promise 中的值。但是有可能第一时间异步请求包装的 promise 状态为 pending。因此在这种情况下，我们必须结合 Suspense 来使用。"}),`
`,n.jsx(e.p,{children:"当然，为了加强对 use 的理解，我们也准备了一个不顾任何风险提示，强行等 promise 请求完成之后使用 use 去读取它的值的案例。代码与演示效果如下。"}),`
`,n.jsx($9,{}),`
`,n.jsx(e.p,{children:"点击预览工具栏中的刷新按钮可以重新加载执行该组件。"}),`
`,n.jsx(e.p,{children:"我们可以观察一下效果，在目前的 React 版本中，并不能合理的处理好这种存在风险的读取方式，虽然我们最终读取到了 promise 中的值，内容也顺利渲染出来了，但是中间存在一次明显的闪烁。表现为包括按钮在内的内容全部消失，这种体验非常的糟糕。"}),`
`,n.jsx(e.p,{children:"因此，在实践中，如果我们要读取异步请求的 promise 中的值，必须结合 Suspense 来处理。"}),`
`,n.jsx(e.p,{children:"因此接下来我们要学习 Suspense 的详细知识。"})]})}function D9(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(s1,{...t})}):s1(t)}function O9(){return n.jsx(ae,{renderArticle:t=>n.jsx(D9,{components:{code:t}})})}const B9=t=>{const{value:e}=j.use(t.promise);return n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded",children:[n.jsx(ns,{}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:"Heads Up!"}),n.jsx("div",{className:"mt-1 text-gray-600",children:e})]})]})},z9=()=>new Promise(t=>{t({value:Ce()})});function U9(){const t=z9();return n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(B9,{promise:t})})}const P9=`import {Suspense} from 'react'
import Message from './message'
import Skeleton from 'components/Skeleton'
import {messageApi} from './api'

export default function Page() {
  const promise = messageApi()
  return (
    <Suspense fallback={<Skeleton />}>
      <Message promise={promise} />
    </Suspense>
  )
}
`,H9=`import {use} from 'react'
import {MapPinPlus} from 'lucide-react'

const Message = (props) => {
  const {value} = use(props.promise)
  return (
    <div className='flex border border-blue-100 p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{value}</div>
      </div>
    </div>
  )
}

export default Message
`,V9=`import {createRandomMessage} from 'utils'

export const messageApi = () => {
  return new Promise(resolve => {
    resolve({ value: createRandomMessage() })
  })
}`;function q9(){return n.jsx(ee,{files:{index:P9,message:H9,api:V9},caseRender:n.jsx(U9,{})})}const F9=t=>{const{value:e}=j.use(t.promise);return n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded",children:[n.jsx(ns,{}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:"Heads Up!"}),n.jsx("div",{className:"mt-1 text-gray-600",children:e})]})]})},X9="https://echo.apifox.com/delay/1";var eb=new Headers;eb.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var G9={method:"GET",headers:eb,redirect:"follow",data:"hex"};const I9=async()=>(await fetch(X9,G9),{value:Ce()});function Y9(){const t=I9();return n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(F9,{promise:t})})}const Z9=`import {Suspense} from 'react'
import Message from './message'
import Skeleton from 'components/Skeleton'
import {getMessage} from './api'

export default function Page() {
  const promise = getMessage()
  return (
    <Suspense fallback={<Skeleton />}>
      <Message promise={promise} />
    </Suspense>
  )
}
`,K9=`import {use} from 'react'
import {MapPinPlus} from 'lucide-react'

const Message = (props) => {
  const {value} = use(props.promise)
  return (
    <div className='flex border border-blue-100 p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{value}</div>
      </div>
    </div>
  )
}

export default Message
`,W9=`import {createRandomMessage} from 'utils'

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

export const getMessage = async () => {
  await fetch(url, requestOptions)
  return { value: createRandomMessage() }
}
`;function r1(){return n.jsx(ee,{files:{index:Z9,message:K9,api:W9},caseRender:n.jsx(Y9,{})})}const Q9=t=>n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded",children:[n.jsx(ns,{}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:"Heads Up!"}),n.jsx("div",{className:"mt-1 text-gray-600",children:t.message})]})]});function J9(){return n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(Q9,{message:Ce(),title:"Primary"})})}const eC=`import React, { Suspense } from 'react';
import Skeleton from 'components/Skeleton'
import {createRandomMessage} from 'utils'
import Message from './message'


export default function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Message message={createRandomMessage()} title='Primary' />
    </Suspense>
  )
}
`,nC=`import {MapPinPlus} from 'lucide-react'

const Message = (props) => {
  return (
    <div className='flex border border-blue-100 p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{props.message}</div>
      </div>
    </div>
  )
}

export default Message
`;function tC(){return n.jsx(ee,{files:{index:eC,message:nC},caseRender:n.jsx(J9,{})})}const sC=t=>n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded",children:[n.jsx(ns,{}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:"Heads Up!"}),n.jsx("div",{className:"mt-1 text-gray-600",children:t.message})]})]}),rC="https://echo.apifox.com/delay/1";var nb=new Headers;nb.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var iC={method:"GET",headers:nb,redirect:"follow",data:"hex"};const aC=async()=>(await fetch(rC,iC),{value:Ce()});function oC(){const[t,e]=j.useState({value:""}),[i,o]=j.useState(!0);return j.useEffect(()=>{aC().then(c=>{e(c),o(!1)})},[]),i?n.jsx(Se,{}):n.jsx(sC,{message:t.value})}const lC=`import React, { useEffect, useState } from 'react';
import Skeleton from 'components/Skeleton'
import Message from './message'
import {getMessage} from './api'

export default function Index() {
  const [content, update] = useState({value: ''})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }, []);

  if (loading) {
    return <Skeleton />
  }

  return <Message message={content.value} />
}
`,cC=`import {MapPinPlus} from 'lucide-react'

const Message = (props) => {
  return (
    <div className='flex border border-blue-100 p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{props.message}</div>
      </div>
    </div>
  )
}

export default Message
`,uC=`import {createRandomMessage} from 'utils'

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

export const getMessage = async () => {
  await fetch(url, requestOptions)
  return { value: createRandomMessage() }
}
`;function dC(){return n.jsx(ee,{files:{index:lC,message:cC,api:uC},caseRender:n.jsx(oC,{})})}function i1(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:n.jsx(e.em,{children:"0"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Suspense"})}),`
`,n.jsx(e.p,{children:"在前面一篇文中，我们知道，如果直接使用 use 获取未直接 resolve 的 Promise 中的值，会抛出一个异常。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const _api3 = () => {
  return new Promise(resolve => {
    resolve({ value: '_api3' })
  })
}

// bad: get an error
const result = use(_api3())
`})}),`
`,n.jsx(e.p,{children:"在实践中，大多数情况都是这种并没有直接得到 Promise resolve 的结果状态，那我们应该怎么办呢？这个时候我们可以利用 Suspense 来解决这个问题。"}),`
`,n.jsxs(e.p,{children:["Suspense 可以捕获 use 无法读取到数据时抛出的异常，然后此时会在页面上渲染回退组件 ",n.jsx(e.code,{children:"fallback"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Suspense fallback={<Skeleton />}>
  <Message promise={promise} />
</Suspense>
`})}),`
`,n.jsxs(e.p,{children:["接下来看一个简单的演示案例。在这个例子中，为了让 Suspense 捕获更小范围的组件，我们单独定义了一个子组件 ",n.jsx(e.code,{children:"Message"})," 来使用 use 获取 promise 中的数据。"]}),`
`,n.jsx(q9,{}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Suspense + use 读取异步接口请求数据"})}),`
`,n.jsx(e.p,{children:"当然，在开发中更常见的效果是使用 use 读取异步 promise，主要的场景就是接口请求。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Suspense fallback={<Loading />}>
  <Albums />
</Suspense>
`})}),`
`,n.jsxs(e.p,{children:["在 React 19 中，",n.jsx(e.code,{children:"use(promise)"})," 被设计成完全符合 Suspense 规范的 hook，因此我们可以轻松的结合他们两者来完成页面开发。当 ",n.jsx(e.code,{children:"use(promise)"})," 读取数据失败时，会抛出一个异常交给 Suspense 捕获，此时 Suspense 会渲染 ",n.jsx(e.code,{children:"fallback"})," 回退组件。当请求成功之后，组件会重新渲染，此时 ",n.jsx(e.code,{children:"use(promise)"})," 则可以读取到正确的值。"]}),`
`,n.jsx(e.p,{children:"我们来梳理一下代码流程。"}),`
`,n.jsx(e.p,{children:"首先，我们定义好一个用于接口请求的函数，该函数执行返回 promise"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 由于访问限制，演示案例中使用了别的接口，可在演示案例中的代码中查看
export const getMessage = async () => {
  const res = await fetch('https://api.chucknorris.io/jokes/random')
  return res.json()
}
`})}),`
`,n.jsx(e.p,{children:"然后我们定义一个子组件 Message，该子组件接受一个 promise 作为参数。然后在子组件内部，我们使用 use 读取该 promise 中的值。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const Message = (props) => {
  const {value} = use(props.promise)
  return (
    <div className='flex border border-blue-100 p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{value}</div>
      </div>
    </div>
  )
}
`})}),`
`,n.jsx(e.p,{children:"有了这个子组件之后，我们使用 Suspense 包裹捕获该组件的错误，防止错误溢出到更高层级的组件。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`export default function Page() {
  const promise = getMessage()
  return (
    <Suspense fallback={<Skeleton />}>
      <Message promise={promise} />
    </Suspense>
  )
}
`})}),`
`,n.jsx(e.p,{children:"完整代码及演示"}),`
`,n.jsx(r1,{}),`
`,n.jsxs(e.p,{children:["当 Message 组件首次渲染时，由于直接读取 promise 导致报错，Suspense 捕获到该异常后，会渲染 ",n.jsx(e.code,{children:"fallback"})," 中设置的组件。此时我们设置了一个骨架屏 Skeleton 组件，大家可以多次点击 reload 按钮查看演示效果。"]}),`
`,n.jsx(e.p,{children:"因此，这个案例的视觉表现应该为：1. 首先渲染 Skeleton 组件。然后请求成功之后，use 渲染 Message 组件。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"2"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Suspense 工作原理"})}),`
`,n.jsxs(e.p,{children:["Suspense 提供了一个加载数据的标准。在源码中，Suspense 的子组件被称为 ",n.jsx(e.code,{children:"primary"}),"。"]}),`
`,n.jsxs(e.p,{children:["当 react 在 beginWork 的过程中（diff 过程），遇到 ",n.jsx(e.code,{children:"Suspense"})," 时，首先会尝试加载 ",n.jsx(e.code,{children:"primary"})," 组件。如果 ",n.jsx(e.code,{children:"primary"})," 组件只是一个普通组件，那么就顺利渲染完成。"]}),`
`,n.jsxs(e.p,{children:["如果 ",n.jsx(e.code,{children:"primary"})," 组件是一个包含了 use 读取异步 promise 的组件，它会在首次渲染时，",n.jsx(e.strong,{children:"抛出一个异常"}),"。react 捕获到该异常之后，发现是一个我们在语法中约定好的 promise，那么就会将其 ",n.jsx(e.code,{children:"then"})," 的回调函数保存下来，并将下一个 ",n.jsx(e.code,{children:"next"})," beginWork 的组件重新指定为 ",n.jsx(e.code,{children:"Suspense"}),"。"]}),`
`,n.jsxs(e.p,{children:["此时 promise 在请求阶段，因此再次 beginWork Suspense 组件时，会跳过 ",n.jsx(e.code,{children:"primary"})," 的执行而直接渲染 ",n.jsx(e.code,{children:"fallback"})]}),`
`,n.jsxs(e.p,{children:["当 ",n.jsx(e.code,{children:"primary"})," 中的 promise 执行完成时「resolve」，会执行刚才保存的 ",n.jsx(e.code,{children:"then"})," 方法，此时会触发 ",n.jsx(e.code,{children:"Suspense"})," 再次执行「调度一个更新任务」。由于此时 ",n.jsx(e.code,{children:"primary"})," 中的 promise 已经 resolve，因此此时就可以拿到数据直接渲染 ",n.jsx(e.code,{children:"primary"})," 组件。"]}),`
`,n.jsx(e.p,{children:"整个流程可以简单表示为："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`Suspense ->
primary ->
Suspense ->
fallback ->
waiting -> resolve() ->
Suspense ->
primary ->
`})}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"3"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"primary 为普通组件时"})}),`
`,n.jsxs(e.p,{children:["当 ",n.jsx(e.code,{children:"primary"})," 为普通组件时，会直接渲染普通组件，如下案例所示。"]}),`
`,n.jsx(tC,{}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"4"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"新旧实现对比"})}),`
`,n.jsx(e.p,{children:"在前面我们 结合 use 与 Suspense 实现了一个初始化加载的案例。该案例的视觉表现是在初始化时，首先显示 Skeleton 组件，请求成功之后，显示 Message 组件。"}),`
`,n.jsx(e.p,{children:"刷新页面时重新请求数据渲染，请求过程中显示骨架屏组件 Skeleton"}),`
`,n.jsx(e.p,{children:"核心代码与演示效果如下，点击刷新按钮重复观察执行效果"}),`
`,n.jsx(r1,{}),`
`,n.jsxs(e.p,{children:["这里我们需要关注的是，对比以前必须要借助 ",n.jsx(e.code,{children:"state"})," ",n.jsx(e.code,{children:"useEffect"})," 的实现方式，体会一下差别"]}),`
`,n.jsx(e.p,{children:"完整实现如下"}),`
`,n.jsx(dC,{}),`
`,n.jsx(e.p,{children:"可以很明显的看出，新的方式使用 use + Suspense ，代码更加简洁。"}),`
`,n.jsxs(e.p,{children:["除此之外，在严格模式下，开发环境组件首次加载会执行两次，因此我们还需要想额外的办法防止重复执行，代码会变得更加冗余。一个很明显的差别就是 ",n.jsx(e.code,{children:"Suspense + use"})," 的方式会自动帮助我们弃用第二次的请求数据。而使用 ",n.jsx(e.code,{children:"useEffect"})," 则需要我们自己来处理防止重复请求的逻辑。"]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"5"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"总结"})}),`
`,n.jsxs(e.p,{children:["与老版本使用 ",n.jsx(e.code,{children:"state"})," + ",n.jsx(e.code,{children:"useEffect"})," 完成首页初始化的需求相比，新的开发方式更加的简洁，代码舒适度更高。"]}),`
`,n.jsxs(e.p,{children:["需要注意区分的是，在以前的开发方式中，我们可以通过自定义 hook 的方式，把状态与 ",n.jsx(e.code,{children:"useEffect"})," 封装成自定义 hook."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function useFetch() {
  const [content, update] = useState({value: ''})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api().then(res => {
      setLoading(false)
      update(res)
    })
  }, [])

  return {content, loading}
}
`})}),`
`,n.jsx(e.p,{children:"最终在应用组件中也可以写出非常类似的非常简洁的代码。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function Index2() {
  const {content, loading} =  useFetch()

  if (loading) {
    return <Skeleton />
  }

  return (
    <Message message={content.value} />
  )
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Vue3 也是这种类似自定义 hook 的方式。但是这两种开发方式是有本质区别的。"}),`
`]}),`
`,n.jsx(e.p,{children:"这是我们之前版本的最佳实践。注意体会他们之间的区别。相似，但却不同。我们后续会列举更多案例，尽可能用新的开发思路去复现开发过程中会出现的场景。"})]})}function mC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(i1,{...t})}):i1(t)}function pC(){return n.jsx(ae,{renderArticle:t=>n.jsx(mC,{components:{code:t}})})}const hC=t=>{if(!t.promise)return n.jsxs(we,{col:!0,className:"border p-4 rounded",children:[n.jsx(pc,{}),n.jsx("div",{className:"mt-2",children:"no data."})]});const e=j.use(t.promise);return n.jsxs(we,{className:"border border-blue-100 p-4 rounded",children:[n.jsx(ns,{}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:"Heads Up!"}),n.jsx("div",{className:"mt-1 text-gray-600",children:e.value})]})]})},fC="https://echo.apifox.com/delay/1";var tb=new Headers;tb.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var xC={method:"GET",headers:tb,redirect:"follow",data:"hex"};const gC=async()=>(await fetch(fC,xC),{value:Ce()});function vC(){const[t,e]=j.useState(null);function i(){e(gC())}return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"text-right mb-4",children:n.jsx("button",{onClick:i,children:"更新数据"})}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(hC,{promise:t})})]})}const jC=`import {Suspense, useState} from 'react'
import Message from './message'
import Skeleton from 'components/Skeleton'
import {getMessage} from './api'

export default function Page() {
  const [promise, update] = useState(null)

  function __handler() {
    update(getMessage())
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button onClick={__handler}>更新数据</button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Message promise={promise} />
      </Suspense>
    </>
  )
}`,yC=`import {use} from 'react'
import {MapPinPlus, Inbox} from 'lucide-react'
import Flex from 'components/Flex'

const Message = (props) => {
  if (!props.promise) {
    return (
      <Flex col className='border p-4 rounded'>
        <Inbox />
        <div className='mt-2'>no data.</div>
      </Flex>
    )
  }
  
  const result = use(props.promise)

  return (
    <Flex className='border border-blue-100 p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{result.value}</div>
      </div>
    </Flex>
  )
}

export default Message
`,bC=`import {createRandomMessage} from 'utils'

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

export const getMessage = async () => {
  await fetch(url, requestOptions)
  return { value: createRandomMessage() }
}
`;function a1(){return n.jsx(ee,{files:{index:jC,message:yC,api:bC},caseRender:n.jsx(vC,{})})}const SC=t=>{const e=j.use(t.promise);return e.promise?n.jsxs(we,{className:"border p-4 rounded",children:[n.jsx(ns,{}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:"Heads Up!"}),n.jsx("div",{className:"mt-1 text-gray-600",children:e.value})]})]}):n.jsxs(we,{col:!0,className:"border p-4 rounded",children:[n.jsx(pc,{}),n.jsx("div",{className:"mt-2",children:"no data."})]})},NC="https://echo.apifox.com/delay/1";var sb=new Headers;sb.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var wC={method:"GET",headers:sb,redirect:"follow",data:"hex"};const _C=async()=>(await fetch(NC,wC),{value:Ce()});function CC(){const[t,e]=j.useState(Promise.resolve({value:""}));function i(){e(_C())}return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"text-right mb-4",children:n.jsx("button",{onClick:i,children:"更新数据"})}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(SC,{promise:t})})]})}const kC=`import {Suspense, useState} from 'react'
import Message from './message'
import Skeleton from 'components/Skeleton'
import {getMessage} from './api'

export default function Page() {
  const [promise, update] = useState(Promise.resolve({value: ''}))

  function __handler() {
    update(getMessage())
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button onClick={__handler}>更新数据</button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Message promise={promise} />
      </Suspense>
    </>
  )
}`,MC=`import {use} from 'react'
import {MapPinPlus, Inbox} from 'lucide-react'
import Flex from 'components/Flex'

const Message = (props) => {
  const result = use(props.promise)

  if (!result.promise) {
    return (
      <Flex col className='border p-4 rounded'>
        <Inbox />
        <div className='mt-2'>no data.</div>
      </Flex>
    )
  }

  return (
    <Flex className='border p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{result.value}</div>
      </div>
    </Flex>
  )
}

export default Message
`,AC=`import {createRandomMessage} from 'utils'

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

export const getMessage = async () => {
  await fetch(url, requestOptions)
  return { value: createRandomMessage() }
}
`;function RC(){return n.jsx(ee,{files:{index:kC,message:MC,api:AC},caseRender:n.jsx(CC,{})})}function o1(t){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"接下来，我们将会以大量的实践案例来展开 React 19 新 hook 的运用。"}),`
`,n.jsxs(e.p,{children:["本文模拟的实践案例为",n.jsx(e.strong,{children:"点击按钮更新数据"}),"。这在开发中是一个非常常见的场景。"]}),`
`,n.jsx(e.p,{children:"案例的视觉表现为：初始化时没有请求，所以组件显示为空数据样式。当我们点击按钮时请求一条数据，数据更新，请求成功之后显示更新之后的内容。"}),`
`,n.jsx(e.p,{children:"案例完成之后的最终演示效果如下"}),`
`,n.jsx(a1,{}),`
`,n.jsx(e.p,{children:"接下来，我们直接用 React 19 新的开发方式来完成这个需求。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"0"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"基础实现"})}),`
`,n.jsx(e.p,{children:"首先创建一个方法用于请求数据，请确保该方法执行会返回一个 promise 对象。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`export const getMessage = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {
    value: random[i]
  }
}
`})}),`
`,n.jsxs(e.p,{children:["这里一个非常关键的地方就在于，当我们要更新的数据时，我们不再需要设计一个 ",n.jsx(e.code,{children:"loading"})," 状态去记录数据是否正在发生请求行为，因为 ",n.jsx(e.code,{children:"Suspense"})," 帮助我们解决了 Loading 组件的显示问题。"]}),`
`,n.jsxs(e.p,{children:["与此同时，",n.jsx(e.code,{children:"use()"})," 又帮助我们解决了数据获取的问题。这个时候，好像我们也不需要设计一个状态去存储数据。"]}),`
`,n.jsx(e.p,{children:"那么我们应该怎么办呢？"}),`
`,n.jsxs(e.p,{children:["这里有一个",n.jsx(e.strong,{children:"非常巧妙"}),"的方式，就是把",n.jsx(e.strong,{children:"创建的 promise 作为状态值"}),"来触发组件的重新执行。每次点击，我们都需要创建新的 promise"]}),`
`,n.jsx(e.p,{children:"代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// 记住这个初始值
const [promise, update] = useState(null)
`})}),`
`,n.jsx(e.p,{children:"这个时候，当我们点击事件执行时，则只需要执行如下代码去触发组件的更新即可。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function __handler() {
  // 每次点击，都会创建新的 promise 对象
  update(getMessage())
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"getMessage()"})," 执行，新的请求会发生。他的执行结果，又返回了一个新的 promise."]}),`
`,n.jsx(e.p,{children:"因此，点击之后会创建的新 promise 值，promise 此时就会作为状态更改触发组件的更新。"}),`
`,n.jsx(e.p,{children:"完整代码如下"}),`
`,n.jsx(a1,{}),`
`,n.jsx(e.p,{children:"接下来，我们还需要进一步分析一下这个案例。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"案例分析"})}),`
`,n.jsx(e.p,{children:"这里我们需要注意观察两个事情。"}),`
`,n.jsxs(e.p,{children:["一个是观察当前组件更新，更上层的父组件是否发生了变化。我们可以在 ",n.jsx(e.code,{children:"App"})," 组件中执行一次打印。"]}),`
`,n.jsx(e.p,{children:"发现，当我们重新请求时，当前组件更新，但是上层组件并不会重新执行。"}),`
`,n.jsxs(e.p,{children:["很显然：",n.jsx(e.strong,{children:"更简洁的状态设计，有利于命中 React 默认的性能优化规则"}),"。"]}),`
`,n.jsx(e.p,{children:"更简洁的状态设计，也是 React 19 所倡导的开发思路。我们需要尽可能少的使用 useState，例如，这里借助了 Suspense 减少了 loading 状态的维护。"}),`
`,n.jsxs(e.p,{children:["另外一个事情，是我们要特别特别注意观察子组件 ",n.jsx(e.code,{children:"Message"})," 的实现。"]}),`
`,n.jsxs(e.p,{children:["首先因为我们初始化时，给状态 ",n.jsx(e.code,{children:"promise"})," 赋予的默认值是 ",n.jsx(e.code,{children:"null"}),"。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// 记住这个初始值
const [promise, update] = useState(null)
`})}),`
`,n.jsxs(e.p,{children:["之后，我们就将状态 promise 传给了子组件 ",n.jsx(e.code,{children:"Message"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`<Suspense fallback={<Skeleton />}>
  <Message promise={promise} />
</Suspense>
`})}),`
`,n.jsxs(e.p,{children:["然后在 Message 组件的内部实现中，因为我们直接把 promise 传给了 ",n.jsx(e.code,{children:"use"}),"，那么此时直接执行肯定会报错"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const {value} = use(props.promise)
`})}),`
`,n.jsxs(e.p,{children:["要注意的是，我们刚才说，使用 ",n.jsx(e.code,{children:"Suspense"})," 会捕获子组件的异常，但是不是捕获所有异常，它只能识别 promise 的异常。因此，这里的报错会直接影响到整个页面。"]}),`
`,n.jsxs(e.p,{children:["所以，为了处理好初始化时传入 ",n.jsx(e.code,{children:"api"})," 值为 null，我在内部实现代码逻辑中，使用了 ",n.jsx(e.code,{children:"if"})," 判断该条件，然后执行了一次 ",n.jsx(e.code,{children:"return"}),"。我试图让 ",n.jsx(e.code,{children:"use(null)"})," 得不到执行的时机。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function Message(props) {
  if (!props.promise) {
    return ...
  }

  const {value} = use(props.promise)
  return ...
}
`})}),`
`,n.jsx(e.p,{children:"还有一种方式是，我们可以给状态 promise 一个默认的，自带 resolve 值的 Promise 对象作为初始值，这样可以在子组件中避免这个异常判断。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const [promise, update] = useState(Promise.resolve({value: ''}))
`})}),`
`,n.jsx(e.p,{children:"演示效果如下图所示"}),`
`,n.jsx(RC,{}),`
`,n.jsx(e.p,{children:"这种写法有一个瑕疵，就是在初始化时，也不可避免的显示了 Skeleton 组件，实际上是不需要的。因此具体采用哪种写法，要依据实践中的需求而定。"})]})}function LC(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(o1,{...t})}):o1(t)}function TC(){return n.jsx(ae,{renderArticle:t=>n.jsx(LC,{components:{code:t}})})}const EC=({message:t})=>n.jsxs(we,{className:"border border-blue-100 p-4 rounded",children:[n.jsx(ns,{}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:"Heads Up!"}),n.jsx("div",{className:"mt-1 text-gray-600",children:t})]})]}),$C="https://echo.apifox.com/delay/1";var rb=new Headers;rb.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var DC={method:"GET",headers:rb,redirect:"follow",data:"hex"};const l1=async()=>(await fetch($C,DC),{value:Ce()});function OC(){const[t,e]=j.useState({value:""}),[i,o]=j.useState(!0);j.useEffect(()=>{l1().then(m=>{e(m),o(!1)})},[]);function c(){o(!0),l1().then(m=>{e(m),o(!1)})}return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"text-right mb-4",children:n.jsx("button",{onClick:c,children:"更新数据"})}),i?n.jsx(Se,{}):n.jsx(EC,{message:t.value})]})}const BC=`import {useState, useEffect} from 'react'
import Message from './message'
import Skeleton from 'components/Skeleton'
import {getMessage} from './api'

export default function Page() {
  const [content, update] = useState({value: ''})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }, []);

  function __handler() {
    setLoading(true)
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button onClick={__handler}>更新数据</button>
      </div>
      {loading ? <Skeleton /> : <Message message={content.value} />}
    </>
  )
}
`,zC=`import {MapPinPlus} from 'lucide-react'
import Flex from 'components/Flex'

const Message = ({message}) => {
  return (
    <Flex className='border border-blue-100 p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{message}</div>
      </div>
    </Flex>
  )
}

export default Message
`,UC=`import {createRandomMessage} from 'utils'

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

export const getMessage = async () => {
  await fetch(url, requestOptions)
  return { value: createRandomMessage() }
}
`;function ib(){return n.jsx(ee,{files:{index:BC,message:zC,api:UC},caseRender:n.jsx(OC,{})})}const PC=t=>{if(!t.promise)return n.jsxs(we,{col:!0,className:"border p-4 rounded",children:[n.jsx(pc,{}),n.jsx("div",{className:"mt-2",children:"no data."})]});const e=j.use(t.promise);return n.jsxs(we,{className:"border border-blue-100 p-4 rounded",children:[n.jsx(ns,{}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:"Heads Up!"}),n.jsx("div",{className:"mt-1 text-gray-600",children:e.value})]})]})},HC="https://echo.apifox.com/delay/1";var ab=new Headers;ab.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var VC={method:"GET",headers:ab,redirect:"follow",data:"hex"};const c1=async()=>(await fetch(HC,VC),{value:Ce()});function qC(){const[t,e]=j.useState(c1());function i(){e(c1())}return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"text-right mb-4",children:n.jsx("button",{onClick:i,children:"更新数据"})}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(PC,{promise:t})})]})}const FC=`import {Suspense, useState} from 'react'
import Message from './message'
import Skeleton from 'components/Skeleton'
import {getMessage} from './api'

export default function Page() {
  const [promise, update] = useState(getMessage())

  function __handler() {
    update(getMessage())
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button onClick={__handler}>更新数据</button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Message promise={promise} />
      </Suspense>
    </>
  )
}`,XC=`import {use} from 'react'
import {MapPinPlus, Inbox} from 'lucide-react'
import Flex from 'components/Flex'

const Message = (props) => {
  if (!props.promise) {
    return (
      <Flex col className='border p-4 rounded'>
        <Inbox />
        <div className='mt-2'>no data.</div>
      </Flex>
    )
  }
  
  const result = use(props.promise)

  return (
    <Flex className='border border-blue-100 p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{result.value}</div>
      </div>
    </Flex>
  )
}

export default Message
`,GC=`import {createRandomMessage} from 'utils'

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

export const getMessage = async () => {
  await fetch(url, requestOptions)
  return { value: createRandomMessage() }
}
`;function IC(){return n.jsx(ee,{files:{index:FC,message:XC,api:GC},caseRender:n.jsx(qC,{})})}const YC=t=>{if(!t.promise)return n.jsxs(we,{col:!0,className:"border p-4 rounded",children:[n.jsx(pc,{}),n.jsx("div",{className:"mt-2",children:"no data."})]});const e=j.use(t.promise);return n.jsxs(we,{className:"border border-blue-100 p-4 rounded",children:[n.jsx(ns,{}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:"Heads Up!"}),n.jsx("div",{className:"mt-1 text-gray-600",children:e.value})]})]})},ZC="https://echo.apifox.com/delay/1";var ob=new Headers;ob.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var KC={method:"GET",headers:ob,redirect:"follow",data:"hex"};const u1=async()=>(await fetch(ZC,KC),{value:Ce()});function WC(){const[t,e]=j.useState(u1);function i(){e(u1())}return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"text-right mb-4",children:n.jsx("button",{onClick:i,children:"更新数据"})}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(YC,{promise:t})})]})}const QC=`import {Suspense, useState} from 'react'
import Message from './message'
import Skeleton from 'components/Skeleton'
import {getMessage} from './api'

export default function Page() {
  const [promise, update] = useState(getMessage)

  function __handler() {
    update(getMessage())
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button onClick={__handler}>更新数据</button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Message promise={promise} />
      </Suspense>
    </>
  )
}`,JC=`import {use} from 'react'
import {MapPinPlus, Inbox} from 'lucide-react'
import Flex from 'components/Flex'

const Message = (props) => {
  if (!props.promise) {
    return (
      <Flex col className='border p-4 rounded'>
        <Inbox />
        <div className='mt-2'>no data.</div>
      </Flex>
    )
  }
  
  const result = use(props.promise)

  return (
    <Flex className='border border-blue-100 p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{result.value}</div>
      </div>
    </Flex>
  )
}

export default Message
`,ek=`import {createRandomMessage} from 'utils'

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

export const getMessage = async () => {
  await fetch(url, requestOptions)
  return { value: createRandomMessage() }
}
`;function nk(){return n.jsx(ee,{files:{index:QC,message:JC,api:ek},caseRender:n.jsx(WC,{})})}function d1(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"在上一章的基础之上，我们来做一个小的需求变动。"}),`
`,n.jsxs(e.p,{children:["上一章的案例要求我们不要初始化时请求一条数据，因此，默认渲染结果是 ",n.jsx(e.code,{children:"no data"})]}),`
`,n.jsxs(e.p,{children:["这一章的案例则不同，我们需要",n.jsx(e.strong,{children:"在初始化时"}),"请求数据。也就是说，我们此时同时需要初始化和更新的逻辑"]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"0"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"需求变动之后的思考"})}),`
`,n.jsx(e.p,{children:"在以前版本的实现中，由于接口数据的触发方式不同，因此我们需要分别处理这两种触发时机。"}),`
`,n.jsx(e.p,{children:"首先，我们需要定义两个状态来管理数据结果和 loading 状态"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const [content, update] = useState({value: ''})
const [loading, setLoading] = useState(true)
`})}),`
`,n.jsxs(e.p,{children:["然后，我们利用 ",n.jsx(e.code,{children:"useEffect"})," 来实现初始化时的数据请求逻辑"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`useEffect(() => {
  getMessage().then(res => {
    update(res)
    setLoading(false)
  })
}, []);
`})}),`
`,n.jsx(e.p,{children:"按钮点击事件触发时，我们通过回调函数来实现数据的更新"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`function __handler() {
  setLoading(true)
  getMessage().then(res => {
    update(res)
    setLoading(false)
  })
}
`})}),`
`,n.jsx(e.p,{children:"完整代码如下"}),`
`,n.jsx(ib,{}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"新的实现方式"})}),`
`,n.jsx(e.p,{children:"与之前版本的实现方式相比，新的开发方式就简单了许多。"}),`
`,n.jsx(e.p,{children:"我们只需要在上一章的案例中，做一个小的修改即可满足需求。那就是在给状态 promise 的初始值做一个小小的变动即可。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`- const [promise, update] = useState(null)
// 只需要改这一点代码
+ const [promise, update] = useState(getMessage())
`})}),`
`,n.jsx(e.p,{children:"这里的思路就是给状态 promise 赋值一个 Promise 对象作为初始值。修改之后的完整代码如下"}),`
`,n.jsx(IC,{}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"非常的方便省事。"})}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"2"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"完善细节"})}),`
`,n.jsxs(e.p,{children:["这里有一个非常重要的小的细节，如果不考虑 Compiler 编译之后的代码去缓存初始化时的 ",n.jsx(e.code,{children:"getMessage()"}),"，那么每次更新组件时，该方法都会执行一次，因此，会导致冗余的接口请求。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"使用 Compiler 编译之后，这段代码会被缓存下来而不会重复执行"}),`
`]}),`
`,n.jsx(e.p,{children:"我们期望的是 useState 中的初始化方法仅在组件首次渲染时执行一次，因此，最好的方式是进一步调整一下，利用 useState 的初始化机制修改如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`- const [promise, update] = useState(getMessage())
+ const [promise, update] = useState(getMessage)
`})}),`
`,n.jsx(e.p,{children:"这样，即使不用 Compiler 编译缓存，也不会出现冗余请求的情况。结果如下"}),`
`,n.jsx(nk,{})]})}function tk(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(d1,{...t})}):d1(t)}function sk(){return n.jsx(ae,{renderArticle:t=>n.jsx(tk,{components:{code:t}})})}const rk="https://echo.apifox.com/delay/1";var lb=new Headers;lb.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var ik={method:"GET",headers:lb,redirect:"follow",data:"hex"};const m1=async()=>(await fetch(rk,ik),{value:Ce(),id:An()}),ak=t=>{const e=unescape(t.message.replace(/\\u/gi,"%u")),i=unescape((t.username||"").replace(/\\u/gi,"%u")),o=t.index||0;return n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded-md my-4 items-start",children:[n.jsx("img",{className:"w-10",src:`https://api.dicebear.com/7.x/miniavs/svg?seed=${o}`,alt:""}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:i||"no name"}),n.jsx("div",{className:"text-sm mt-1 text-gray-600",children:e})]})]})};function ok(t){const e=t.list;return n.jsx(n.Fragment,{children:e.map((i,o)=>i.type==="loading"?n.jsx(Se,{},`loading-${o}`):n.jsx(ak,{index:o,username:i.id,message:i.value},i.id))})}function lk(){const[t,e]=j.useState([]);j.useEffect(()=>{e([...t,{type:"loading"}]),m1().then(o=>{e([...t,o])})},[]);function i(){e([...t,{type:"loading"}]),m1().then(o=>{e([...t,o])})}return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"text-right mb-4",children:n.jsx("button",{onClick:i,children:"新增数据"})}),n.jsx(ok,{list:t})]})}const ck=`import {useState, useEffect} from 'react'
import {getMessage} from './api'
import List from './list'

export default function Page() {
  const [list, updateList] = useState([])

  useEffect(() => {
    updateList([...list, {type: 'loading'}])
    getMessage().then(res => {
      updateList([...list, res])
    })
  }, []);

  function __handler() {
    updateList([...list, {type: 'loading'}])
    getMessage().then(res => {
      updateList([...list, res])
    })
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button onClick={__handler}>新增数据</button>
      </div>
      <List list={list} />
    </>
  )
}`,uk=`import Skeleton from 'components/Skeleton'
import Userinfo from './userinfo'

export default function List(props) {
  const list = props.list
  return (
    <>
      {list.map((item, index) => {
        if (item.type === 'loading') {
          return <Skeleton key={\`loading-\${index}\`} />
        }
        return <Userinfo index={index} username={item.id} message={item.value} key={item.id} />
      })}
    </>
  )
}
`,dk=`const Userinfo = (props) => {
  const message = unescape(props.message.replace(/\\\\u/gi,'%u'));
  const username = unescape((props.username || '').replace(/\\\\u/gi,'%u'));
  const index = props.index || 0;

  let base = 'flex border border-blue-100 p-4 rounded-md my-4 items-start'

  return (
    <div className={base}>
      <img className='w-10' src={\`https://api.dicebear.com/7.x/miniavs/svg?seed=\${index}\`} alt='' />
      <div className='flex-1 ml-3'>
        <div>{username || 'no name'}</div>
        <div className='text-sm mt-1 text-gray-600'>{message}</div>
      </div>
    </div>
  )
}

export default Userinfo
`,mk=`import {createRandomMessage, uuid} from 'utils'

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

export const getMessage = async () => {
  await fetch(url, requestOptions)
  return { value: createRandomMessage(), id: uuid() }
}`;function pk(){return n.jsx(ee,{files:{index:ck,List:uk,Userinfo:dk,api:mk},caseRender:n.jsx(lk,{})})}const hk="https://echo.apifox.com/delay/1";var cb=new Headers;cb.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var fk={method:"GET",headers:cb,redirect:"follow",data:"hex"};const p1=async()=>(await fetch(hk,fk),{value:Ce(),id:An()}),xk=t=>{const{id:e,value:i}=j.use(t.promise),o=t.index||0;return n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded my-4 items-start",children:[n.jsx("img",{className:"w-10",src:`https://api.dicebear.com/7.x/miniavs/svg?seed=${o}`,alt:""}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:e||"no name"}),n.jsx("div",{className:"text-sm mt-1 text-gray-600",children:i})]})]})};function gk(){const[t,e]=j.useState(()=>[p1()]);function i(){e([...t,p1()])}return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"text-right mb-4",children:n.jsx("button",{onClick:i,children:"新增数据"})}),t.map((o,c)=>n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(xk,{promise:o,index:c})},An()))]})}const vk=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {uuid} from 'utils'
import {getMessage} from './api'
import Userinfo from './userinfo'

export default function Demo01() {
  const [promise, updatePromise] = useState(() => [getMessage()])

  function __handler() {
    updatePromise([...promise, getMessage()])
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button onClick={__handler}>新增数据</button>
      </div>
      {promise.map((item, index) => (
        <Suspense fallback={<Skeleton />} key={uuid()}>
          <Userinfo promise={item} index={index} />
        </Suspense>
      ))}
    </>
  )
}
`,jk=`import {use} from 'react'

const Userinfo = (props) => {
  const {id, value} = use(props.promise)
  const index = props.index || 0;

  return (
    <div className='flex border border-blue-100 p-4 rounded my-4 items-start'>
      <img className='w-10' src={\`https://api.dicebear.com/7.x/miniavs/svg?seed=\${index}\`} alt='' />
      <div className='flex-1 ml-3'>
        <div>{id || 'no name'}</div>
        <div className='text-sm mt-1 text-gray-600'>{value}</div>
      </div>
    </div>
  )
}

export default Userinfo`,yk=`import {createRandomMessage, uuid} from 'utils'

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

export const getMessage = async () => {
  await fetch(url, requestOptions)
  return { value: createRandomMessage(), id: uuid() }
}`;function bk(){return n.jsx(ee,{files:{index:vk,Userinfo:jk,api:yk},caseRender:n.jsx(gk,{})})}function h1(t){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"这一章我们要学习的是一个新增加载项到列表的案例。首先我们会通过接口获取到一条数据，然后将该数据渲染到列表中。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"0"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"使用旧的方案实现"})}),`
`,n.jsx(e.p,{children:"首先，先定义请求数据的 promise"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// api.js
export const getMessage = async () => {
  await fetch(url, requestOptions)
  const i = Math.floor(Math.random() * 10) % 5
  return {value: random[i], id: getUuid()}
}
`})}),`
`,n.jsx(e.p,{children:"然后需要定义一个状态用于存储列表。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const [list, updateList] = useState([])
`})}),`
`,n.jsxs(e.p,{children:["由于每一项在请求时，都需要显示一个 Loading 状态，此时我们可以使用一个巧妙的方式来解决这个问题。那就是暂时往 list 中新增一条 ",n.jsx(e.code,{children:"type: loading"})," 的数据。在遍历的时候判断出该数据渲染成 ",n.jsx(e.code,{children:"Skeleton"})," 组件。"]}),`
`,n.jsxs(e.p,{children:["因此，我们单独声明一个列表组件 List，该组件接收 ",n.jsx(e.code,{children:"list"})," 作为参数"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function List(props) {
  const list = props.list
  return (
    <>
      {list.map((item, index) => {
        if (item.type === 'loading') {
          return <Skeleton />
        }
        return <Userinfo index={index} username={item.id} message={item.value} />
      })}
    </>
  )
}
`})}),`
`,n.jsxs(e.p,{children:["当我们在发送请求时，先往 list 中新增一条 ",n.jsx(e.code,{children:"type: loading"})," 的数据。此时我们利用 list 的特性与闭包的缓存特性，在接口请求成功之后再把请求过来的有效数据更新到 list 中即可。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`useEffect(() => {
  updateList([...list, {type: 'loading'}])
  getMessage().then(res => {
    updateList([...list, res])
  })
}, []);
`})}),`
`,n.jsx(e.p,{children:"完整代码如下："}),`
`,n.jsx(pk,{}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"新的思路"})}),`
`,n.jsx(e.p,{children:"旧的思路在实现上非常巧妙。但是简洁度依然弱于新的实现方案。除此之外，旧的实现思路还有许多问题需要处理，例如初始化时请求了两次，我们要考虑接口防重的问题。以及当我们多次连续点击按钮时，会出现竞态问题而导致渲染结果出现混乱。"}),`
`,n.jsx(e.p,{children:"我们基于 use + Suspense 的思路来考虑新的方案。"}),`
`,n.jsx(e.p,{children:"首先，我们应该将数据存储在 promise 中，因此很自然就能想到，多个数据，那么我们应该需要维护多个 promise，因此，我们需要定义一个由 promise 组成的数组。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const [promise, updatePromise] = useState(() => [getMessage()])
`})}),`
`,n.jsxs(e.p,{children:["由于初始化时，我们需要自动请求一条数据，因此我们给该数组的初始值为 ",n.jsx(e.code,{children:"[getMessage()]"})]}),`
`,n.jsx(e.p,{children:"点击时，需要新增一个数据，那么其实就是新增一个 promise，所以代码也非常简单，就是如下所示"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function __handler() {
  updatePromise([...promise, getMessage()])
}
`})}),`
`,n.jsx(e.p,{children:"处理好之后，我们只需要使用 map 遍历该数组即可。在遍历逻辑中，每一项都返回 Suspense 包裹的子组件。我们将 promise 传递给该子组件，并在子组件中使用 use 读取 promise 中的值。"}),`
`,n.jsx(e.p,{children:"最终的完整代码如下"}),`
`,n.jsx(bk,{}),`
`,n.jsx(e.p,{children:"你可以通过快速点击新增按钮观察演示效果。"}),`
`,n.jsx(e.p,{children:"并且当我们多次连续点击新增时，不会出现接口竞态混乱的问题。"}),`
`,n.jsx(e.p,{children:"希望大家能够通过这个案例，进一步感受到新的开发思维的强大之处。"})]})}function Sk(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(h1,{...t})}):h1(t)}function Nk(){return n.jsx(ae,{renderArticle:t=>n.jsx(Sk,{components:{code:t}})})}const wk=3,_k=`https://randomuser.me/api/?results=${wk}&inc=name,gender,email,nat,picture&noinfo`,f1=async()=>{const e=await(await fetch(_k)).json();return e.results=e.results.map(i=>(i.desc=Ce(),i.id=An(),i)),e};function Ck({promise:t}){const{results:e}=j.use(t);return n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border-b py-4 mx-4 items-center border-dashed",children:[n.jsx("img",{className:"w-14 h-14 rounded-full",src:i.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 line-clamp-1",children:i.desc})]})]},i.id))})}const kk=()=>{const[t,e]=j.useState(()=>[f1()]),i=()=>{e([...t,f1()])};return n.jsxs(n.Fragment,{children:[t.map((o,c)=>n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(Ck,{promise:o})},An())),n.jsx("div",{className:"text-center my-4",children:n.jsx("button",{onClick:i,children:"loading more"})})]})},Mk=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {uuid} from 'utils'
import { fetchList} from './api'

import List from './list'

const Index = () => {
  const [promises, increasePromise] = useState(() => [fetchList()])

  const onLoadMore = () => {
    increasePromise([...promises, fetchList()])
  };

  return (
    <>
      {promises.map((promise, i) => (
        <Suspense fallback={<Skeleton />} key={uuid()}>
          <List promise={promise} />
        </Suspense>
      ))}
      <div className='text-center my-4'>
        <button onClick={onLoadMore}>loading more</button>
      </div>
    </>
  );
};
export default Index;
`,Ak=`import { use } from 'react'

export default function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={item.id} className='flex border-b py-4 mx-4 items-center border-dashed'>
          <img className='w-14 h-14 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,Rk=`import {use} from 'react'

const Userinfo = (props) => {
  const {id, value} = use(props.promise)
  const index = props.index || 0;

  return (
    <div className='flex border border-blue-100 p-4 rounded my-4 items-start'>
      <img className='w-10' src={\`https://api.dicebear.com/7.x/miniavs/svg?seed=\${index}\`} alt='' />
      <div className='flex-1 ml-3'>
        <div>{id || 'no name'}</div>
        <div className='text-sm mt-1 text-gray-600'>{value}</div>
      </div>
    </div>
  )
}

export default Userinfo`,Lk=`import {createRandomMessage, uuid} from 'utils'

const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  const json = await res.json()
  json.results = json.results.map(item => {
    item.desc = createRandomMessage()
    item.id = uuid()
    return item
  })
  return json
}
`;function x1(){return n.jsx(ee,{files:{index:Mk,List:Ak,Userinfo:Rk,api:Lk},caseRender:n.jsx(kk,{})})}function g1(t){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"我们可以在思维上将上一节课的解决方案扩展到分页列表中，加载更多的场景。"}),`
`,n.jsx(x1,{}),`
`,n.jsx(e.p,{children:"这里唯一的一个小区别就是，上一章中，我们只在 promise 中存储了一条数据。如果我们将一页数据也存在 promise 中呢？"}),`
`,n.jsx(e.p,{children:"加载更多的分页逻辑就会变得非常简单。为了方便演示，我们这里以一页数据只有三条为例。"}),`
`,n.jsxs(e.p,{children:["首先简单约定接口，该接口返回一页数据。",n.jsx(e.code,{children:"3条"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// api.js
const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;

export const fetchList = async () => {
  const res = await fetch(fakeDataUrl)
  return res.json()
}
`})}),`
`,n.jsx(e.p,{children:"然后定义一个可以遍历显示一页数据的组件。该组件接收一个 promise，并使用 use 读取请求结果。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`// List.jsx
import { use } from 'react'

export default function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={item.id} className='flex border-b py-4 mx-4 items-center border-dashed'>
          <img className='w-14 h-14 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`})}),`
`,n.jsx(e.p,{children:"此时我们稍微梳理一下逻辑，首先我们有多个 promise，然后每个 promise 中有一页数据，因此，我们可以遍历 promise，并在遍历中渲染能显示一页数据的 List 组件。"}),`
`,n.jsx(e.p,{children:"因此，我们首先要定义一个状态用于保存 promise 数组"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const [promises, increasePromise] = useState(() => [fetchList()])
`})}),`
`,n.jsxs(e.p,{children:["初始化时需要渲染一页数据，所以我们设置该数组的默认值为 ",n.jsx(e.code,{children:"[fetchList()]"})]}),`
`,n.jsx(e.p,{children:"loadmore 事件触发之后，我们只需要往该数组中新增一个 promise 即可"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const onLoadMore = () => {
  increasePromise([...promises, fetchList()])
};
`})}),`
`,n.jsxs(e.p,{children:["然后遍历 promises，在遍历中使用 ",n.jsx(e.code,{children:"Suspense"})," 包裹内部有 use 逻辑的 List 组件"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`{promises.map((promise, i) => (
  <Suspense fallback={<Skeleton />} key={\`hello \${i}\`}>
    <List promise={promise} />
  </Suspense>
))}
`})}),`
`,n.jsx(e.p,{children:"完整的代码与演示效果如下。"}),`
`,n.jsx(x1,{}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"分页参数的维护、最后一页的判断，大家在实践中要自行维护，这里只做方案的演示，没有考虑所有边界情况"}),`
`]})]})}function Tk(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(g1,{...t})}):g1(t)}function Ek(){return n.jsx(ae,{renderArticle:t=>n.jsx(Tk,{components:{code:t}})})}const $k="https://randomuser.me";async function v1(){const t=Math.floor(Math.random()*10)%10,e=new URLSearchParams({inc:"name,gender,email,nat,picture",results:t,noinfo:!0});return(await fetch(`${$k}/api/?${e.toString()}`)).json()}function Dk({promise:t}){const{results:e}=j.use(t);return console.log("List with use renderred."),n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:Ce()})]})]},`v${o}`))})}function Ok(t){return n.jsxs("div",{className:"flex items-center border px-2 rounded text-gray-500",children:[n.jsx(hc,{size:20}),n.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...t})]})}function Bk(){const[t,e]=j.useState(v1);function i(){e(v1())}return n.jsxs("div",{children:[n.jsx(Ok,{onChange:i,placeholder:"Enter something"}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(Dk,{promise:t})})]})}const zk=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {fetchList} from './api'
import List from './List'
import Input from './Input'

export default function Demo01() {
  const [promise, update] = useState(fetchList)

  function __inputChange() {    
    update(fetchList())
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,Uk=`import {Search} from 'lucide-react'

export default function Input(props) {
  return (
    <div className='flex items-center border px-2 rounded text-gray-500'>
      <Search size={20} />
      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...props}
      />
    </div>
  )
}
`,Pk=`import { use } from 'react';
import { createRandomMessage } from 'utils'

export default function CurrentList({promise}) {
  const {results} = use(promise)
  console.log('List with use renderred.')
  return (
    <div>
      {results.map((item, i) => (
        <div className='flex border p-4 items-center my-4 rounded' key={\`v\${i}\`}>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{createRandomMessage()}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,Hk=`export const host = 'https://randomuser.me'

export async function fetchList() {
  const i = Math.floor(Math.random() * 10) % 10
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: i,
    noinfo: true
  })
  
  const res = await fetch(\`\${host}/api/?\${query.toString()}\`)
  return res.json()
}
`;function j1(){return n.jsx(ee,{files:{index:zk,Input:Uk,List:Pk,api:Hk},caseRender:n.jsx(Bk,{})})}const Vk="https://randomuser.me",y1=()=>{const t=Math.floor(Math.random()*10)%10,e=new URLSearchParams({inc:"name,gender,email,nat,picture",results:t,noinfo:!0});let i=new AbortController,o=i.signal;const c=new Promise(m=>{fetch(`${Vk}/api/?${e.toString()}`,{signal:o}).then(d=>{m(d.json())}).catch(()=>{console.log("接口成功取消！")})});return c.cancel=()=>{i&&i.abort()},c};function qk({promise:t}){const{results:e}=j.use(t);return console.log("List with use renderred."),n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:Ce()})]})]},`v${o}`))})}function Fk(t){return n.jsxs("div",{className:"flex items-center border px-2 rounded text-gray-500",children:[n.jsx(hc,{size:20}),n.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...t})]})}function Xk(){const[t,e]=j.useState(y1);function i(){t.cancel(),e(y1())}return n.jsxs("div",{children:[n.jsx(Fk,{onChange:i,placeholder:"Enter something"}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(qk,{promise:t})})]})}const Gk=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'

export default function Demo01() {
  const [promise, update] = useState(fetchListWithCancel)

  function __inputChange() {
    promise.cancel()
    update(fetchListWithCancel())
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,Ik=`import {Search} from 'lucide-react'

export default function Input(props) {
  return (
    <div className='flex items-center border px-2 rounded text-gray-500'>
      <Search size={20} />
      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...props}
      />
    </div>
  )
}
`,Yk=`import { use } from 'react';
import { createRandomMessage } from 'utils'

export default function CurrentList({promise}) {
  const {results} = use(promise)
  console.log('List with use renderred.')
  return (
    <div>
      {results.map((item, i) => (
        <div className='flex border p-4 items-center my-4 rounded' key={\`v\${i}\`}>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{createRandomMessage()}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,Zk=`export const host = 'https://randomuser.me'

export const fetchListWithCancel = () => {
  const i = Math.floor(Math.random() * 10) % 10
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: i,
    noinfo: true
  })
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(\`\${host}/api/?\${query.toString()}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;function Kk(){return n.jsx(ee,{files:{index:Gk,Input:Ik,List:Yk,api:Zk},caseRender:n.jsx(Xk,{})})}function b1(t){const e={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"这是一个搜索的案例。当我们学会把数据存放在 promise 中时，实现这个案例的代码将会非常简单。"}),`
`,n.jsx(e.p,{children:"案例演示"}),`
`,n.jsx(j1,{}),`
`,n.jsx(e.p,{children:"首先，我们需要定义一个 List 组件，用于显示列表数据。我们计划将列表数据存放在一个 promise 中，然后使用 use 从该 promise 中读取列表然后渲染。"}),`
`,n.jsx(e.p,{children:"该 List 组件的代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { use } from 'react';
import { createRandomMessage } from 'utils'

export default function CurrentList({promise}) {
  const {results} = use(promise)
  console.log('List with use renderred.')
  return (
    <div>
      {results.map((item, i) => (
        <div className='flex border p-4 items-center my-4 rounded' key={\`v\${i}\`}>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{createRandomMessage()}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`})}),`
`,n.jsx(e.p,{children:"然后，我们只需要在 useState 中存储一个 promise 即可"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const [promise, update] = useState(fetchList)
`})}),`
`,n.jsx(e.p,{children:"更新时，更改该 promise"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function __inputChange() {    
  update(fetchList())
}
`})}),`
`,n.jsx(e.p,{children:"最后结合 Suspense，完整代码如下"}),`
`,n.jsx(j1,{}),`
`,n.jsx(e.p,{children:"在演示这个例子时，我们要结合 chrome 开发者工具一起查看。观察接口请求的情况。我们发现，当我们快速输入时，此时会发起多个接口请求。React 会帮助我们解决竞态的问题，将接口任务依次排列好执行。"}),`
`,n.jsx(e.p,{children:"但是在请求结果的获取上，反馈到页面上只会获取最后一次请求的结果。这一点非常舒适。"}),`
`,n.jsx(e.p,{children:"另外一个小的知识点是，如果接口需要传入参数，我们可以按照如下的方式处理"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const [promise, update] = useState(() => fetchList())
`})}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"取消上一次请求"})}),`
`,n.jsx(e.p,{children:"由于上面的实现方式，每次都会发送接口请求，因此在耗时上可能会比较久，所以我们可以使用防抖或者节流的方式减少请求次数。这两个也是面试中比较常见的需要考察的小知识点。"}),`
`,n.jsx(e.p,{children:"除此之外，我们这里介绍一种新的方案来解决这个问题，那就是在新的请求发生时，取消上一次还未完成的请求。我们一起来学习一下"}),`
`,n.jsxs(e.p,{children:["在 JavaScript 中，有一个特殊的内建对象 ",n.jsx(e.code,{children:"AbortController"})," 可以终止异步任务。我们可以利用该对象实例来终止 ",n.jsx(e.code,{children:"fetch"})," 请求。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`let controller = new AbortController();
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"controller"})," 具有单个属性 ",n.jsx(e.code,{children:"signal"}),"，我们可以在这个属性上设置事件监听。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`let signal = controller.signal
signal.addEventListener('abort', () => alert("abort!"));
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"controller"})," 具有单个方法：",n.jsx(e.code,{children:"abort()"}),"，当 ",n.jsx(e.code,{children:"abort()"})," 调用时，signal 的事件监听就会执行。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`controller.abort();

// 事件触发，signal.aborted 变为 true
alert(signal.aborted); // true
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"fetch"})," 中封装了 ",n.jsx(e.code,{children:"signal"})," 的事件监听，因此它可以很好的与 ",n.jsx(e.code,{children:"AbortController"})," 对象一起工作。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"fetch"})," 的第二个参数 option 可以接收 ",n.jsx(e.code,{children:"signal"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`fetch(url, {
  signal: controller.signal
});
`})}),`
`,n.jsxs(e.p,{children:["当我们在任意地方调用 ",n.jsx(e.code,{children:"abort"})," 时，对应的请求就会被取消"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`controller.abort();
`})}),`
`,n.jsx(e.p,{children:"借助这些基础知识，我们就可以封装一个可以被取消的 promise。"}),`
`,n.jsx(e.h2,{children:"2"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"封装一个新的 api 函数"})}),`
`,n.jsx(e.p,{children:"封装代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`export const host = 'https://randomuser.me'

export const fetchListWithCancel = () => {
  const i = Math.floor(Math.random() * 10) % 10
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: i,
    noinfo: true
  })
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(\`\${host}/api/?\${query.toString()}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`})}),`
`,n.jsxs(e.p,{children:["我这里使用了一个返回结果是一个列表的案例接口。然后将 ",n.jsx(e.code,{children:"abort"})," 函数挂载到返回的 ",n.jsx(e.code,{children:"promise"})," 中"]}),`
`,n.jsxs(e.p,{children:["使用时，只需要调用 ",n.jsx(e.code,{children:"promise.cancel()"})," 就可以取消对应的请求了。"]}),`
`,n.jsx(e.h2,{children:"3"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"结合 react 19 使用"})}),`
`,n.jsx(e.p,{children:"直接观察演示案例"}),`
`,n.jsx(Kk,{}),`
`,n.jsx(e.p,{children:"和之前相比，我们的代码仅新增了一行"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`function __inputChange() {
+ promise.cancel()
  update(fetchListWithCancel())
}
`})})]})}function Wk(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(b1,{...t})}):b1(t)}function Qk(){return n.jsx(ae,{renderArticle:t=>n.jsx(Wk,{components:{code:t}})})}function Jk(...t){return t.filter(Boolean).join(" ")}function eM({tabs:t,onSwitch:e}){return n.jsxs("div",{children:[n.jsxs("div",{className:"hidden",children:[n.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),n.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:t.find(i=>i.current).name,onChange:i=>e(i.target.selectedIndex),children:t.map(i=>n.jsx("option",{children:i.name},i.name))})]}),n.jsx("div",{className:"block",children:n.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:t.map((i,o)=>n.jsx("a",{href:i.href,className:Jk(i.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":i.current?"page":void 0,onClick:c=>{c.preventDefault(),e(o)},children:i.name},i.name))})})]})}const Gl=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function nM(){const[t,e]=j.useState(0);function i(o){Gl[t].current=!1,Gl[o].current=!0,e(o)}return n.jsxs("div",{children:[n.jsx(eM,{tabs:Gl,onSwitch:i}),n.jsxs("div",{className:"mt-4 text-gray-500",children:["当前选中：",Gl[t].name]})]})}const tM=`import {useState} from 'react'
import Tabs from './tabs'

const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
]

export default function Example() {
  const [current, switchToSelected] = useState(0)

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />
      <div className='mt-4 text-gray-500'>
        当前选中：{tabs[current].name}
      </div>
    </div>
  )
}
`,sM=`function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({tabs, onSwitch}) {
  return (
    <div>
      <div className="hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
          onChange={(e) => onSwitch(e.target.selectedIndex)}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab, i) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
              aria-current={tab.current ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                onSwitch(i)
              }}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`;function rM(){return n.jsx(ee,{files:{index:tM,tab:sM},caseRender:n.jsx(nM,{})})}const iM="https://randomuser.me",S1=()=>{const t=Math.floor(Math.random()*10)%10,e=new URLSearchParams({inc:"name,gender,email,nat,picture",results:t,noinfo:!0});let i=new AbortController,o=i.signal;const c=new Promise(m=>{fetch(`${iM}/api/?${e.toString()}`,{signal:o}).then(d=>{m(d.json())}).catch(()=>{console.log("接口成功取消！")})});return c.cancel=()=>{i&&i.abort()},c};function aM(...t){return t.filter(Boolean).join(" ")}function oM({tabs:t,onSwitch:e}){return n.jsxs("div",{children:[n.jsxs("div",{className:"hidden",children:[n.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),n.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:t.find(i=>i.current).name,onChange:i=>e(i.target.selectedIndex),children:t.map(i=>n.jsx("option",{children:i.name},i.name))})]}),n.jsx("div",{className:"block",children:n.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:t.map((i,o)=>n.jsx("a",{href:i.href,className:aM(i.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":i.current?"page":void 0,onClick:c=>{c.preventDefault(),e(o)},children:i.name},i.name))})})]})}function lM({promise:t}){const{results:e}=j.use(t);return console.log("List with use renderred."),n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:Ce()})]})]},`v${o}`))})}const rm=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function cM(){const[t,e]=j.useState(0),[i,o]=j.useState(S1);function c(m){rm[t].current=!1,rm[m].current=!0,e(m),i.cancel(),o(S1())}return n.jsxs("div",{children:[n.jsx(oM,{tabs:rm,onSwitch:c}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(lM,{promise:i})})]})}const uM=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {fetchListWithCancel} from './api'
import Tabs from './tabs'
import List from './List'

const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
]

export default function Example() {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(fetchListWithCancel)

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)

    promise.cancel()
    update(fetchListWithCancel())
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,dM=`function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({tabs, onSwitch}) {
  return (
    <div>
      <div className="hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
          onChange={(e) => onSwitch(e.target.selectedIndex)}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab, i) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
              aria-current={tab.current ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                onSwitch(i)
              }}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`,mM=`import { use } from 'react';
import { createRandomMessage } from 'utils'

export default function CurrentList({promise}) {
  const {results} = use(promise)
  console.log('List with use renderred.')
  return (
    <div>
      {results.map((item, i) => (
        <div className='flex border p-4 items-center my-4 rounded' key={\`v\${i}\`}>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{createRandomMessage()}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,pM=`export const host = 'https://randomuser.me'

export const fetchListWithCancel = () => {
  const i = Math.floor(Math.random() * 10) % 10
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: i,
    noinfo: true
  })
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(\`\${host}/api/?\${query.toString()}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;function ub(){return n.jsx(ee,{files:{index:uM,tab:dM,list:mM,api:pM},caseRender:n.jsx(cM,{})})}function N1(t){const e={code:"code",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"Tab 切换的过程中，请求接口也是日常开发中非常常见的交互方式。不过 tabs 切换的情况比较多，很考验开发者的个人能力。我们准备了三个不同的场景以供大家直接学习。"}),`
`,n.jsxs(e.p,{children:["第一个案例比较简单。是",n.jsx(e.strong,{children:"多对一"}),"：多个 tab 按钮，对应一个组件。具体表现为按钮切换时，该组件本身重新获取数据渲染。演示效果如右侧案例所示。"]}),`
`,n.jsxs(e.p,{children:["首先，我们需要先封装一个 Tab 切换按钮。具体的封装代码可以查看右面的 ",n.jsx(e.code,{children:"Tabs.jsx"})," 文件。"]}),`
`,n.jsx(e.p,{children:"然后使用一下，检测一下效果"}),`
`,n.jsx(rM,{}),`
`,n.jsx(e.p,{children:"这里需要注意观察的是，案例中我们对 tabs 数据和 current 当前选中项的一个管理方式。在使用过程中，我们可以尽量减少对于 state 的使用，能不用就不用。但是许多人在开发过程中会非常依赖于 state，管理不善时，可能会导致数据的大量冗余 re-render 产生。这里当我们切换点击时，会修改两个数据，但是最终只有一个 state 变化。"}),`
`,n.jsx(e.p,{children:"接下来的事情就比较简单了，跟之前的案例一样，只需要在切换时，通过改变 promise 的方式请求接口即可。"}),`
`,n.jsx(e.p,{children:"所以我们需要声明一个新的状态 promise"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const [promise, update] = useState(fetchListWithCancel)
`})}),`
`,n.jsx(e.p,{children:"然后再点击时重新请求并修改 state promise 即可。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`function __handler(index) {
  tabs[current].current = false
  tabs[index].current = true
  switchToSelected(index)

+ promise.cancel()
+ update(fetchListWithCancel())
}
`})}),`
`,n.jsx(e.p,{children:"这里我们依然需要取消上一次请求是因为可能有的使用者会连续快速切换，我们可以通过取消为完成请求的方式让页面响应变得合理与流畅。"}),`
`,n.jsx(ub,{})]})}function hM(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(N1,{...t})}):N1(t)}function fM(){return n.jsx(ae,{renderArticle:t=>n.jsx(hM,{components:{code:t}})})}function xM(...t){return t.filter(Boolean).join(" ")}function gM({tabs:t,onSwitch:e}){return n.jsxs("div",{children:[n.jsxs("div",{className:"hidden",children:[n.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),n.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:t.find(i=>i.current).name,onChange:i=>e(i.target.selectedIndex),children:t.map(i=>n.jsx("option",{children:i.name},i.name))})]}),n.jsx("div",{className:"block",children:n.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:t.map((i,o)=>n.jsx("a",{href:i.href,className:xM(i.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":i.current?"page":void 0,onClick:()=>e(o),children:i.name},i.name))})})]})}const vM="https://randomuser.me",zm=()=>{const t=Math.floor(Math.random()*10)%10,e=new URLSearchParams({inc:"name,gender,email,nat,picture",results:t,noinfo:!0});let i=new AbortController,o=i.signal;const c=new Promise(m=>{fetch(`${vM}/api/?${e.toString()}`,{signal:o}).then(d=>{m(d.json())}).catch(()=>{console.log("接口成功取消！")})});return c.cancel=()=>{i&&i.abort()},c};function db({promise:t}){const{results:e}=j.use(t);return console.log("List with use renderred."),n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:Ce()})]})]},`v${o}`))})}function im(t){const[e]=j.useState(zm),i=Fe({hidden:!t.selected});return n.jsx("div",{className:i,children:n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(db,{promise:e})})})}function jM(t){return n.jsxs("div",{className:"flex items-center border px-2 rounded text-gray-500",children:[n.jsx(hc,{size:20}),n.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...t})]})}function yM(t){const[e,i]=j.useState(zm);function o(){e.cancel(),i(zm())}const c=Fe("pt-4",{hidden:!t.selected});return n.jsxs("div",{className:c,children:[n.jsx(jM,{onChange:o,placeholder:"Enter something"}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(db,{promise:e})})]})}function bM(){const[t,e]=j.useState(0),i=j.useRef([{name:"My Account",href:"#",current:!0,element:im},{name:"Company",href:"#",current:!1,element:im},{name:"Team Members",href:"#",current:!1,element:im},{name:"Billing",href:"#",current:!1,element:yM}]),o=j.useRef(new Set([i.current[t]]));function c(d){i.current[t].current=!1,i.current[d].current=!0;const h=i.current[d];o.current.has(h)||o.current.add(h),e(d)}let m=Array.from(o.current);return n.jsxs("div",{children:[n.jsx(gM,{tabs:i.current,onSwitch:c}),m.map((d,h)=>n.jsx(d.element,{selected:d.current},`v-${h}`))]})}const SM=`import {useState, useRef} from 'react'
import Tabs from './tabs'

import Account from './Account'
import Search from './Search'

export default function Page() {
  const [current, switchToSelected] = useState(0)
  const t = useRef([
    { name: 'My Account', href: '#', current: true, element: Account },
    { name: 'Company', href: '#', current: false, element: Account },
    { name: 'Team Members', href: '#', current: false, element: Account },
    { name: 'Billing', href: '#', current: false, element: Search },
  ])
  const map = useRef(new Set([t.current[current]]))

  function __handler(index) {
    t.current[current].current = false
    t.current[index].current = true

    const item = t.current[index]
    if (!map.current.has(item)) {
      map.current.add(item)
    }

    switchToSelected(index)
  }

  let arr = Array.from(map.current)

  return (
    <div>
      <Tabs tabs={t.current} onSwitch={__handler} />
      {arr.map((item, index) => (
        <item.element selected={item.current} key={\`v-\${index}\`}/>
      ))}
    </div>
  )
}
`,NM=`function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({tabs, onSwitch}) {
  return (
    <div>
      <div className="hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
          onChange={(e) => onSwitch(e.target.selectedIndex)}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab, i) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
              aria-current={tab.current ? 'page' : undefined}
              onClick={() => onSwitch(i)}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`,wM=`import clsx from 'clsx'
import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'

export default function Account(props) {
  const [promise] = useState(fetchListWithCancel)

  const cls = clsx({
    ['hidden']: !props.selected
  })

  return (
    <div className={cls}>
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,_M=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'
import clsx from 'clsx'

export default function Search(props) {
  const [promise, update] = useState(fetchListWithCancel)

  function __inputChange() {
    promise.cancel()
    update(fetchListWithCancel())
  }

  const cls = clsx('pt-4', {
    ['hidden']: !props.selected
  })

  return (
    <div className={cls}>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,CM=`import {Search} from 'lucide-react'

export default function Input(props) {
  return (
    <div className='flex items-center border px-2 rounded text-gray-500'>
      <Search size={20} />
      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...props}
      />
    </div>
  )
}
`,kM=`import { use } from 'react';
import { createRandomMessage } from 'utils'

export default function CurrentList({promise}) {
  const {results} = use(promise)
  console.log('List with use renderred.')
  return (
    <div>
      {results.map((item, i) => (
        <div className='flex border p-4 items-center my-4 rounded' key={\`v\${i}\`}>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{createRandomMessage()}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,MM=`export const host = 'https://randomuser.me'

export const fetchListWithCancel = () => {
  const i = Math.floor(Math.random() * 10) % 10
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: i,
    noinfo: true
  })
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(\`\${host}/api/?\${query.toString()}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;function w1(){return n.jsx(ee,{files:{index:SM,tab:NM,account:wM,search:_M,input:CM,list:kM,api:MM},caseRender:n.jsx(bM,{})})}function _1(t){const e={blockquote:"blockquote",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(w1,{}),`
`,n.jsx(e.p,{children:"这个案例的实现就稍微有点难度了。我们需要满足如下条件"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"1、初始化时，只渲染默认的当前列页，而不会渲染其他任何未被点击过的页面/组件。"}),`
`,n.jsx(e.li,{children:"2、渲染过的页面，在切换离开之后，需要缓存下来，下一次切换回事来直接显示即可，效果类似于 keep-alive"}),`
`,n.jsx(e.li,{children:"3、每个 tab 按钮，对应一个页面，按钮与页面之间应该是 1 对 1 的关系"}),`
`]}),`
`,n.jsx(e.p,{children:"首先，我们应该设计 tabs 的格式如下。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const tabs = [
  { name: 'My Account', href: '#', current: true, element: Account },
  { name: 'Company', href: '#', current: false, element: Account },
  { name: 'Team Members', href: '#', current: false, element: Account },
  { name: 'Billing', href: '#', current: false, element: Search },
]
`})}),`
`,n.jsx(e.p,{children:"由于是一对一的关系，因此每个项可以自由对应需求所需要的页面组件"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"这里需要注意的是，虽然有几个对应的组件名是一样的，但是他们最终的实例是不同的"}),`
`]}),`
`,n.jsx(e.p,{children:"接下来比较难的是，如何设计数据来确保同时满足上面的几个需求。"}),`
`,n.jsx(e.p,{children:"我的方案如下"}),`
`,n.jsx(e.p,{children:"首先，定义一个 map 对象，用于存储已经渲染过的页面。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const map = useRef(new Set([tabs[current]]))
`})}),`
`,n.jsx(e.p,{children:"每次点击时，将页面案例加进来，但是在这之前，需要判断是否已经存在"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function __handler(index) {
  tabs[current].current = false
  tabs[index].current = true

  const item = tabs[index]
  if (!map.current.has(item)) {
    map.current.add(item)
  }

  switchToSelected(index)
}
`})}),`
`,n.jsx(e.p,{children:"最后遍历 map 中的数据将页面渲染出来即可。"}),`
`,n.jsx(e.p,{children:"这里需要注意的是，由于页面是 1 对 1 的关系，因此，每个页面的数据单独维护即可。"}),`
`,n.jsx(e.p,{children:"例如其中一个组件代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import clsx from 'clsx'
import {useState, Suspense} from 'react'
import Skeleton from './Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'

export default function Account(props) {
  const [promise, update] = useState(() => fetchListWithCancel(5))

  const cls = clsx({
    ['hidden']: !props.selected
  })

  return (
    <div className={cls}>
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`})}),`
`,n.jsxs(e.p,{children:["这里我们还要考虑一个布局的问题。只能当前选中的页面显示出来。因此我们这里通过利用 ",n.jsx(e.code,{children:"display"})," 的值来控制。传入一个 ",n.jsx(e.code,{children:"selected"})," 来判断是否需要将其值从 ",n.jsx(e.code,{children:"block"})," 改变为 ",n.jsx(e.code,{children:"none"})]}),`
`,n.jsx(e.p,{children:"完整代码如下所示"}),`
`,n.jsx(w1,{})]})}function AM(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(_1,{...t})}):_1(t)}function RM(){return n.jsx(ae,{renderArticle:t=>n.jsx(AM,{components:{code:t}})})}const LM="https://randomuser.me",C1=()=>{const t=Math.floor(Math.random()*10)%10,e=new URLSearchParams({inc:"name,gender,email,nat,picture",results:t,noinfo:!0});let i=new AbortController,o=i.signal;const c=new Promise(m=>{fetch(`${LM}/api/?${e.toString()}`,{signal:o}).then(d=>{m(d.json())}).catch(()=>{console.log("接口成功取消！")})});return c.cancel=()=>{i&&i.abort()},c};function k1(...t){return t.filter(Boolean).join(" ")}function TM({tabs:t,onSwitch:e}){return n.jsx("div",{className:"overflow-auto",children:n.jsx("div",{className:"border-b border-gray-200",children:n.jsx("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:t.map((i,o)=>n.jsxs("a",{href:"#",onClick:()=>e(o),className:k1(i.current?"border-indigo-500 text-indigo-600":"border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700","flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"),"aria-current":i.current?"page":void 0,children:[i.name,i.count?n.jsx("span",{className:k1(i.current?"bg-indigo-100 text-indigo-600":"bg-gray-100 text-gray-900","ml-3 rounded-full px-2.5 py-0.5 text-xs font-medium inline-block"),children:i.count}):null]},i.name))})})})}function EM({promise:t,onComplete:e}){const{results:i}=j.use(t);return j.useEffect(()=>{e&&e(i.length)},[i.length]),console.log("List with use renderred."),n.jsx("div",{children:i.map((o,c)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:o.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:o.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:Ce()})]})]},`v${c}`))})}const $M=[{name:"Applied",href:"#",count:0,current:!0},{name:"Phone Screening",href:"#",count:0,current:!1},{name:"Interview",href:"#",count:0,current:!1}];function DM(){const[t,e]=j.useState(0),[i,o]=j.useState(C1),[c,m]=j.useState($M);function d(f){c[t].current=!1,c[f].current=!0,e(f),m([...c]),i.cancel(),o(C1())}function h(f){c[t].count=f,m([...c])}return n.jsxs("div",{children:[n.jsx(TM,{tabs:c,onSwitch:d}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(EM,{promise:i,onComplete:h})})]})}const OM=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {fetchListWithCancel} from './api'
import Tabs from './Tabs'
import List from './List'

const config = [
  { name: 'Applied', href: '#', count: 0, current: true },
  { name: 'Phone Screening', href: '#', count: 0, current: false },
  { name: 'Interview', href: '#', count: 0, current: false }
]

export default function Page() {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(fetchListWithCancel)
  const [tabs, changeTabs] = useState(config)

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)
    changeTabs([...tabs])

    promise.cancel()
    update(fetchListWithCancel())
  }

  function __complete(number) {
    tabs[current].count = number
    changeTabs([...tabs])
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      <Suspense fallback={<Skeleton />}>
        <List promise={promise} onComplete={__complete} />
      </Suspense>
    </div>
  )
}
`,BM=`function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({tabs, onSwitch}) {
  return (
    <div className='overflow-auto'>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <a
              key={tab.name}
              href="#"
              onClick={() => onSwitch(index)}
              className={classNames(
                tab.current
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700',
                'flex whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
              {tab.count ? (
                <span
                  className={classNames(
                    tab.current ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-900',
                    'ml-3 rounded-full px-2.5 py-0.5 text-xs font-medium inline-block',
                  )}
                >
                  {tab.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`,zM=`import { use, useEffect } from 'react'
import { createRandomMessage } from 'utils'

export default function CurrentList({promise, onComplete}) {
  const {results} = use(promise)
  useEffect(() => {
    onComplete && onComplete(results.length)
  }, [results.length]);
  console.log('List with use renderred.')
  return (
    <div>
      {results.map((item, i) => (
        <div className='flex border p-4 items-center my-4 rounded' key={\`v\${i}\`}>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{createRandomMessage()}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,UM=`export const host = 'https://randomuser.me'

export const fetchListWithCancel = () => {
  const i = Math.floor(Math.random() * 10) % 10
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: i,
    noinfo: true
  })
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(\`\${host}/api/?\${query.toString()}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;function PM(){return n.jsx(ee,{files:{index:OM,tab:BM,list:zM,api:UM},caseRender:n.jsx(DM,{})})}function M1(t){const e={code:"code",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"有的时候我们需要从 Suspense 包裹的子组件中获取数据。"}),`
`,n.jsx(PM,{}),`
`,n.jsx(e.p,{children:"注意看这个案例。我设计了一个随机数量的请求，每一次请求返回随机数量的列表，Tabs 中的按钮旁边需要显示当前列表的长度。"}),`
`,n.jsx(e.p,{children:"但是此时，和将列表数据直接维护到 state 中不同，此时我们在 state 中维护的是 promise ，然后我们使用 use 从 promise 中读取数据。所以只有子组件使用 use 读取才能获得列表的长度。这个时候，我们如何在保持现有解决方案的前提之下，在父组件中拿到列表的数据呢？"}),`
`,n.jsx(e.p,{children:"首先父组件要拿到子组件的数据，我们可以给子组件传一个事件进去，让子组件在得到数据时，执行这个事件回调。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`<Suspense fallback={<Skeleton />}>
  <List promise={promise} onComplete={__complete} />
</Suspense>
`})}),`
`,n.jsxs(e.p,{children:["子组件在执行 ",n.jsx(e.code,{children:"onComplete"})," 的时候，把父组件需要的数据作为参数返回出来即可"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function CurrentList({promise, onComplete}) {
  const {results} = use(promise)
  onComplete && onComplete(results.length)

  return (...)
}
`})}),`
`,n.jsxs(e.p,{children:["这里我们需要考虑的一个问题就是 ",n.jsx(e.code,{children:"onComplete"})," 的执行时机要怎么比较合适。因为如果 onComplete 中执行逻辑在父组件中，子组件无法控制，因此父组件的执行逻辑有可能会导致子组件re-render，因此我们可以简单使用 useEffect 来防止 onComplete 反复执行"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`function CurrentList({promise, onComplete}) {
  const {results} = use(promise)
+ useEffect(() => {
    onComplete && onComplete(results.length)
+ }, [results.length]);

  return (...)
}
`})}),`
`,n.jsx(e.p,{children:"这样处理之后，我们就可以轻松在父组件中，无压力拿到子组件中的数据了。父组件的代码示例如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function __complete(number) {
  tabs[current].count = number
  changeTabs([...tabs])
}
`})})]})}function HM(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(M1,{...t})}):M1(t)}function VM(){return n.jsx(ae,{renderArticle:t=>n.jsx(HM,{components:{code:t}})})}const qM="https://randomuser.me";async function mb(t){const e=new URLSearchParams({inc:"name,gender,email,nat,picture",results:t,noinfo:!0});return(await fetch(`${qM}/api/?${e.toString()}`)).json()}function FM({promise:t}){const{results:e}=j.use(t);return n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 line-clamp-1",children:Ce()})]})]},`h${o}`))})}function XM(t){const{results:e}=j.use(t.promise),[i]=j.useState(()=>mb(e.length));return n.jsxs("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:[n.jsx("div",{className:"flex space-x-4",children:e.map((o,c)=>n.jsxs("div",{className:"flex-1 overflow-hidden",children:[n.jsx("div",{className:"rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${o.picture.large})`}}),n.jsx("div",{className:"mt-4 font-bold",children:o.name.last}),n.jsx("div",{className:"mt-1 text-gray-400 text-sm",children:o.email})]},`z-${c}`))}),n.jsx("div",{className:"mt-8 text-gray-400 text-sm",children:"Account users"}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(FM,{promise:i})})]})}function GM(){const t=mb(4);return n.jsx("div",{children:n.jsx(j.Suspense,{fallback:n.jsx(Se,{type:"card"}),children:n.jsx(XM,{promise:t})})})}const IM=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import Account from './Account'
import {fetchList} from './api'

export default function Page() {
  const promise = fetchList(4)
  return (
    <div>
      <Suspense fallback={<Skeleton type='card' />}>
        <Account promise={promise} />
      </Suspense>
    </div>
  )
}
`,YM=`import {use, useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {fetchList} from './api'
import List from './List'

export default function Account(props) {
  const {results} = use(props.promise)
  const [promise] = useState(() => fetchList(results.length))
  return (
    <div className='border border-blue-100 shadow rounded-md p-4 w-full mt-4'>
      <div className='flex space-x-4'>
        {results.map((item, index) => (
          <div className="flex-1 overflow-hidden" key={\`z-\${index}\`}>
            <div className='rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center' style={{backgroundImage: \`url(\${item.picture.large})\`}}></div>
            <div className="mt-4 font-bold">{item.name.last}</div>
            <div className="mt-1 text-gray-400 text-sm">{item.email}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-gray-400 text-sm">Account users</div>
      <Suspense fallback={<Skeleton/>}>
        <List promise={promise}/>
      </Suspense>
    </div>
  )
}
`,ZM=`import {createRandomMessage} from 'utils'
import { use } from 'react'

export default function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 line-clamp-1'>
              {createRandomMessage()}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,KM=`export const host = 'https://randomuser.me'

export async function fetchList(count) {
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: count,
    noinfo: true
  })
  
  const res = await fetch(\`\${host}/api/?\${query.toString()}\`)
  return res.json()
}
`;function WM(){return n.jsx(ee,{files:{index:IM,account:YM,list:ZM,api:KM},caseRender:n.jsx(GM,{})})}function A1(t){const e={code:"code",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(WM,{}),`
`,n.jsxs(e.p,{children:["如案例演示的这样，有的时候，我们需要这种",n.jsx(e.strong,{children:"瀑布流式"}),"的接口请求交互方式。也就是上一个模块请求成功之后，再请求下一个模块。"]}),`
`,n.jsx(e.p,{children:"我们可以利用 Suspense 的嵌套来轻松做到这个事情。"}),`
`,n.jsx(e.p,{children:"我们可以在父组件中，通过一个 promise 向子组件传递数据"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`export default function Page() {
  const promise = fetchList(4)
  return (
    <div>
      <Suspense fallback={<Skeleton type='card' />}>
        <Account promise={promise} />
      </Suspense>
    </div>
  )
}
`})}),`
`,n.jsx(e.p,{children:"然后在子组件 Account 中，使用同样的方式向它的子组件传递数据"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function Account(props) {
  const {results} = use(props.promise)
  const [promise] = useState(() => fetchList(results.length))
  return (
    <div className='border border-blue-100 shadow rounded-md p-4 w-full mt-4'>
      <div>...</div>

      <Suspense fallback={<Skeleton/>}>
        <List promise={promise}/>
      </Suspense>
    </div>
  )
}
`})}),`
`,n.jsx(e.p,{children:"最后在之后的子组件 List 中仅使用 use 获取数据即可"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`export default function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          ...
        </div>
      ))}
    </div>
  )
}
`})}),`
`,n.jsx(e.p,{children:"这里需要注意的是，当你决定这样用时，往往后请求的接口都会依赖先请求的结果，如果并没有明确的先后依赖关系，我们并不建议采用这种交互方案。"})]})}function QM(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(A1,{...t})}):A1(t)}function JM(){return n.jsx(ae,{renderArticle:t=>n.jsx(QM,{components:{code:t}})})}const eA="https://echo.apifox.com/delay/1";var pb=new Headers;pb.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var nA={method:"GET",headers:pb,redirect:"follow",data:"hex"};const R1=async()=>(await fetch(eA,nA),{value:Ce(),id:An()});function tA(t){if(t.status==="fulfilled")return t.value;throw t.status==="rejected"?t.reason:(t.status==="pending"||(t.status="pending",t.then(e=>{t.status="fulfilled",t.value=e},e=>{t.status="rejected",t.reason=e})),t)}const sA=t=>{const{id:e,value:i}=tA(t.promise),o=t.index||0;return n.jsxs("div",{className:"flex border border-blue-100 p-4 rounded my-4 items-start",children:[n.jsx("img",{className:"w-10",src:`https://api.dicebear.com/7.x/miniavs/svg?seed=${o}`,alt:""}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:e||"no name"}),n.jsx("div",{className:"text-sm mt-1 text-gray-600",children:i})]})]})};function rA(){const[t,e]=j.useState(()=>[R1()]);function i(){e([...t,R1()])}return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"text-right mb-4",children:n.jsx("button",{onClick:i,children:"新增数据"})}),t.map((o,c)=>n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(sA,{promise:o,index:c})},An()))]})}const iA=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {uuid} from 'utils'
import {getMessage} from './api'
import Userinfo from './Userinfo'

export default function Demo01() {
  const [promise, updatePromise] = useState(() => [getMessage()])

  function __handler() {
    updatePromise([...promise, getMessage()])
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button onClick={__handler}>新增数据</button>
      </div>
      {promise.map((item, index) => (
        <Suspense fallback={<Skeleton />} key={uuid()}>
          <Userinfo promise={item} index={index} />
        </Suspense>
      ))}
    </>
  )
}
`,aA=`export default function use(promise) {
  if (promise.status === 'fulfilled') {
    return promise.value
  } else if (promise.status === 'rejected') {
    throw promise.reason
  } else if (promise.status === 'pending') {
    throw promise
  } else {
    promise.status = 'pending'
    promise.then(result => {
      promise.status = 'fulfilled'
      promise.value = result
    }, reason => {
      promise.status = 'rejected'
      promise.reason = reason
    })
    throw promise
  }
}
`,oA=`import use from './use'

const Userinfo = (props) => {
  const {id, value} = use(props.promise)
  const index = props.index || 0;

  return (
    <div className='flex border border-blue-100 p-4 rounded my-4 items-start'>
      <img className='w-10' src={\`https://api.dicebear.com/7.x/miniavs/svg?seed=\${index}\`} alt='' />
      <div className='flex-1 ml-3'>
        <div>{id || 'no name'}</div>
        <div className='text-sm mt-1 text-gray-600'>{value}</div>
      </div>
    </div>
  )
}

export default Userinfo`,lA=`import {createRandomMessage, uuid} from 'utils'

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

export const getMessage = async () => {
  await fetch(url, requestOptions)
  return { value: createRandomMessage(), id: uuid() }
}`;function cA(){return n.jsx(ee,{files:{index:iA,use:aA,useinfo:oA,api:lA},caseRender:n.jsx(rA,{}),active:2})}function L1(t){const e={code:"code",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"use + Suspense 的结合，可以极大的简化我们的开发代码，在开发体验上的提升是非常明显的。但是，如果由于客观原因，我们的项目无法升级到 React 19，那么我们就无法享受这种开发体验带来的提升了吗？"}),`
`,n.jsx(e.p,{children:"当然不是。早在 React 16 的后期版本中，就提供了对 Suspense 的支持，因此，我们只需要在这个基础之上，自己定义一个 use 方法，去读取 promise 中的值就可以实现我们前面所有章节的效果了。"}),`
`,n.jsx(e.p,{children:"自定义的代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`export default function use(promise) {
  if (promise.status === 'fulfilled') {
    return promise.value
  } else if (promise.status === 'rejected') {
    throw promise.reason
  } else if (promise.status === 'pending') {
    throw promise
  } else {
    promise.status = 'pending'
    promise.then(result => {
      promise.status = 'fulfilled'
      promise.value = result
    }, reason => {
      promise.status = 'rejected'
      promise.reason = reason
    })
    throw promise
  }
}
`})}),`
`,n.jsx(e.p,{children:"如果你要理解这段代码，可以结合我们前面专门分析过的 Suspense 的运行原理来理解。"}),`
`,n.jsx(e.p,{children:"定义好之后，我们原本需要从 React 中引入的 use 方法，从这个模块里引入就可以了"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`- import React, {use} from 'react'
+ import use from './use'
`})}),`
`,n.jsx(cA,{})]})}function uA(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(L1,{...t})}):L1(t)}function dA(){return n.jsx(ae,{renderArticle:t=>n.jsx(uA,{components:{code:t}})})}function mA(){const t=j.useRef(null);return n.jsxs("div",{className:"flex justify-between",children:[n.jsx("input",{ref:t,type:"text",className:"border p-2 rounded flex-1"}),n.jsx("button",{onClick:()=>t.current.focus(),className:"ml-3",children:"点击获取焦"})]})}const pA=`import { useRef } from 'react'

export default function Demo01() {
  const input = useRef(null)
  return (
    <div className='flex justify-between'>
      <input ref={input} type='text' className='border p-2 rounded flex-1' />
      <button
        onClick={() => input.current.focus()}
        className='ml-3'
      >点击获取焦</button>
    </div>
  )
}
`;function hA(){return n.jsx(ee,{files:{index:pA},caseRender:n.jsx(mA,{})})}function fA(t){const{ref:e,className:i,...o}=t,m=Fe("flex items-center border px-2 rounded-md text-gray-500",i);return n.jsxs("div",{className:Hr(m),children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),n.jsx("input",{ref:e,className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...o})]})}function xA(){const t=j.useRef(null);return n.jsxs("div",{className:"flex justify-between",children:[n.jsx(fA,{ref:t,type:"text",className:"flex-1"}),n.jsx("button",{onClick:()=>t.current.focus(),className:"ml-3",children:"点击获取焦"})]})}const gA=`import { useRef } from 'react'
import Input from './Input'

export default function Demo02() {
  const input = useRef(null)
  return (
    <div className='flex justify-between'>
      <Input ref={input} type='text' className='flex-1' />
      <button
        onClick={() => input.current.focus()}
        className='ml-3'
      >点击获取焦</button>
    </div>
  )
}
`,vA=`import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'

export default function Input(props) {
  const {ref, className, ...other} = props
  const base = 'flex items-center border px-2 rounded-md text-gray-500'
  const cls = clsx(base, className)
  return (
    <div className={twMerge(cls)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        ref={ref}
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`;function jA(){return n.jsx(ee,{files:{index:gA,Input:vA},caseRender:n.jsx(xA,{})})}function yA({ref:t}){const e=j.useRef(null);j.useImperativeHandle(t,()=>({scrollToBottom(){const o=e.current;o.scrollTop=o.scrollHeight}}),[]);let i=[];for(let o=0;o<50;o++)i.push(n.jsxs("p",{children:["Comment #",o]},o));return n.jsx("div",{className:"border p-4 rounded h-32 overflow-y-auto",ref:e,children:i})}function bA(t){const{ref:e,className:i,...o}=t,m=Fe("flex items-center border px-2 rounded-md text-gray-500",i);return n.jsxs("div",{className:Hr(m),children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),n.jsx("input",{ref:e,className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...o})]})}function SA(t){return n.jsx(bA,{placeholder:"Add comment...",ref:t.ref,className:"mt-4"})}function NA({ref:t}){const e=j.useRef(null),i=j.useRef(null);return j.useImperativeHandle(t,()=>({scrollAndFocusAddComment(){e.current.scrollToBottom(),i.current.focus()}}),[]),n.jsxs(n.Fragment,{children:[n.jsx("article",{children:n.jsx("p",{children:"Welcome to my Blog!"})}),n.jsx(yA,{ref:e}),n.jsx(SA,{ref:i})]})}function wA(){const t=j.useRef(null);function e(){t.current.scrollAndFocusAddComment()}return n.jsxs(n.Fragment,{children:[n.jsx(ue,{onClick:e,primary:!0,children:"Write a comment"}),n.jsx(NA,{ref:t})]})}const _A=`import { useRef } from 'react';
import Button from 'components/Button'
import Post from './Post'

export default function Demo03() {
  const postRef = useRef(null);

  function handleClick() {
    postRef.current.scrollAndFocusAddComment();
  }

  return (
    <>
      <Button onClick={handleClick} primary>Write a comment</Button>
      <Post ref={postRef} />
    </>
  );
}
`,CA=`import { useRef, useImperativeHandle } from 'react'
import CommentList from './comment-list'
import AddComment from './add-comment'

export default function Post({ref}) {
  const commentsRef = useRef(null);
  const addCommentRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      scrollAndFocusAddComment() {
        commentsRef.current.scrollToBottom();
        addCommentRef.current.focus();
      }
    };
  }, []);

  return (
    <>
      <article>
        <p>Welcome to my Blog!</p>
      </article>
      <CommentList ref={commentsRef} />
      <AddComment ref={addCommentRef} />
    </>
  );
}`,kA=`import { useRef, useImperativeHandle } from 'react'

export default function CommentList({ref}) {
  const divRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      scrollToBottom() {
        const node = divRef.current;
        node.scrollTop = node.scrollHeight;
      }
    };
  }, []);

  let comments = [];
  for (let i = 0; i < 50; i++) {
    comments.push(<p key={i}>Comment #{i}</p>);
  }

  return (
    <div className="border p-4 rounded h-32 overflow-y-auto" ref={divRef}>
      {comments}
    </div>
  );
};
`,MA=`import Input from './Input'

export default function AddComment(props) {
  return (
    <Input placeholder="Add comment..." ref={props.ref} className="mt-4" />
  )
}
`,AA=`import clsx from 'clsx'
import {twMerge} from 'tailwind-merge'

export default function Input(props) {
  const {ref, className, ...other} = props
  const base = 'flex items-center border px-2 rounded-md text-gray-500'
  const cls = clsx(base, className)
  return (
    <div className={twMerge(cls)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        ref={ref}
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`;function RA(){return n.jsx(ee,{files:{index:_A,Post:CA,CommentList:kA,AddComment:MA,Input:AA},caseRender:n.jsx(wA,{})})}function T1(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"React 中的控制反转"})}),`
`,n.jsx(e.p,{children:"在面向对象编程中，IOC (Inversion of Control) 控制反转是一个非常高级的概念。它是一种设计理念，在减少对象之间的耦合关系上有非常重要的作用。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"许多前端虽然对其有所耳闻，但说实话，能理解的并不多。甚至很多前端对解耦这个概念都是一头雾水。"}),`
`]}),`
`,n.jsxs(e.p,{children:["IOC 的设计理念里，有三个角色，一个角色是",n.jsx(e.strong,{children:"容器 C"}),"，一个角色是",n.jsx(e.strong,{children:"被控制者 B"}),"，一个角色是",n.jsx(e.strong,{children:"控制者 A"}),"，许多时候，在代码开发中，控制者 A 直接去控制对象 B，会导致 B 被多次实例化而从让代码逻辑变得更加复杂。因此 IOC 的理念是让 控制者 A 失去对 B 的直接控制权，它只能与容器交互。从而将 A 与 B 的直接联系隔离开。"]}),`
`,n.jsx(e.p,{children:"这样说可能会有点绕，但是呢，我们使用一个大家经常使用的代码来说明一下，你一下就能明白。"}),`
`,n.jsxs(e.p,{children:["在实践中，我们可以通过 ref 直接拿到 input 的对象，然后通过调用 ",n.jsx(e.code,{children:".focus"})," 让输入框获取焦点。代码如下"]}),`
`,n.jsx(hA,{}),`
`,n.jsxs(e.p,{children:["但是许多时候，直接使用 ",n.jsx(e.code,{children:"input"})," 标签并不能满足我们的需求，我们需要基于 input 做额外的封装。但是封装之后，我们还是希望能通过调用 ",n.jsx(e.code,{children:".focus"})," 让输入框获取焦点。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const input = useRef(null)
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<Input ref={input} type='text' />
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`input.current.focus()
`})}),`
`,n.jsx(e.p,{children:"封装之后的区别就在于，我们使用封装之后的 Input，就无法直接拿到内部的 input 对象了，但是我们的目标依然是获取 input 对象，然后调用 focus"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`var input = document.getElementById('input')
input.focus()
`})}),`
`,n.jsx(e.p,{children:"但是在模块的划分上，input 元素本身并不属于当前模块/组件，因此，调用 input 方法的行为，其实是属于一种混乱。除非我们不做解耦和封装。"}),`
`,n.jsx(e.p,{children:"因此，在 React 的组件封装中，并不支持直接获取到 input 的引用，而是以一种传入控制器的方式来调用它。在这个场景里:"}),`
`,n.jsx(e.p,{children:`input 对象本身是被调用者
Input 组件是容器
ref 是控制器`}),`
`,n.jsx(e.p,{children:"当前组件利用 ref 来调用 input。从而让代码的解耦变得非常合理。可扩展性也很强。"}),`
`,n.jsx(e.p,{children:"这个案例的代码封装逻辑如下"}),`
`,n.jsx(jA,{}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["注意一些概念上的区分：",n.jsx(e.strong,{children:"控制反转是一种设计思维"}),"，依赖注入是控制反转的一种具体实现，在 React 中，ref 也是一种控制反转的具体实现"]}),`
`]}),`
`,n.jsx(e.p,{children:"所以不要听着别人吹控制反转就觉得牛，你可能也天天在用"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"2"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"forwardRef 基础知识"})}),`
`,n.jsx(e.p,{children:"forwardRef 能够帮助 React 组件传递 ref。或者说是内部对象控制权的转移与转发。它接收一个组件作为参数"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { forwardRef } from 'react';

function MyInput(props, ref) {
  // ...
}

const InputNumber = forwardRef(MyInput);
`})}),`
`,n.jsx(e.p,{children:"这里需要注意的是，我们需要把 ref 放在自定义组件的参数中"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function MyInput(props, ref) {
  // ...
}
`})}),`
`,n.jsx(e.p,{children:"forwardRef 返回一个可渲染的函数组件。因此，我们可以通过一个简单的案例完善上面的代码"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function MyInput(props, ref) {
  return (
    <label>
      {props.label}
      <input ref={ref} />
    </label>
  );
}

const InputNumber = forwardRef(MyInput)
`})}),`
`,n.jsx(e.p,{children:"所以呢，在 React 的开发中，forwardRef 能够帮助我们实现更良好的解耦，这也是我一直非常喜欢使用 forwardRef 的原因。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"3"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"React19 中，ref 机制更改，forwardRef 被无情抛弃"})}),`
`,n.jsx(e.p,{children:"但是，在 React 19 中，forwardRef 被直接背刺，由于 ref 传递机制的更改，我们可以不用 forwardRef 也能做到同样的事情了。"}),`
`,n.jsx(e.p,{children:"首先，在声明组件时，ref 不再独立成为一个参数，而是作为 props 属性中的一个属性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function MyInput(props) {
  return (
    <label>
      {props.label}
      <input ref={props.ref} />
    </label>
  );
}
`})}),`
`,n.jsx(e.p,{children:"其次，代码这样写了之后，就可以直接在父组件中，通过 ref 拿到 input 的控制权"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function Index() {
  const input = useRef(null)

  function __clickHandler() {
    input.current.focus()
  }

  return (
    <div>
      <button onClick={__clickHandler}>
        点击获取焦点
      </button>
      <MyInput ref={input} />
    </div>
  )
}
`})}),`
`,n.jsx(e.p,{children:"在父组件中的使用与以前一样，但是子组件由于不再需要 forwardRef，变得更加简单了。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useRef } from 'react'

export default function Demo02() {
  const input = useRef(null)
  return (
    <div className='flex justify-between'>
      <input ref={input} type='text' className='border p-2 rounded-md flex-1' />
      <button
        onClick={() => input.current.focus()}
        className='ml-3'
      >点击获取焦</button>
    </div>
  )
}
`})}),`
`,n.jsx(e.h2,{children:"4"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"useImperativeHandle 与 ref 的新配合"})}),`
`,n.jsx(e.p,{children:"除了直接拿到元素对象本身就已经存在的 ref，我们还可以通过 useImperativeHandle 来自定义 ref 控制器能执行哪些方法"}),`
`,n.jsx(e.p,{children:"useImperativeHandle 接收三个参数，分别是"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ref:"})," 组件声明时传入的 ref"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"createHandle:"})," 回调函数，需要返回 ref 引用的对象，我们也是在这里重写 ref 引用"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"deps:"})," 依赖项数组，可选。state，props 以及内部定义的其他变量都可以作为依赖项，React 内部会使用 Object.is 来对比依赖项是否发生了变化。依赖项发生变化时，createHandle 会重新执行，ref 引用会更新。如果不传入依赖项，那么每次更新 createHandle 都会重新执行"]}),`
`]}),`
`,n.jsx(e.p,{children:"在官方文档中，有这样一个案例，演示效果如图所示，当我点击按钮时，下方的 input 自动获取焦点，并且中间的滚动条滚动到最底部。"}),`
`,n.jsx(e.p,{children:"我们结合新的 ref 传递机制和 useImperativeHandle 一起来分析一下这个案例应该怎么实现。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"思考时，请一定要把封装的思维带入进来，否则可能很难感受到这样做在解耦上的具体好处"}),`
`]}),`
`,n.jsx(e.p,{children:"首先我们先进行组件拆分，将整个内容拆分为按钮部分与信息部分，信息部分主要负责信息的展示与输入，因此页面组件大概长这样"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<>
  <button>Write a comment</button>
  <Post />
</>
`})}),`
`,n.jsx(e.p,{children:"我们期望点击按钮时，信息部分的输入框自动获取焦点，信息部分的信息展示区域能滚动到最底部，因此整个页面组件的代码可以表示为如下："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { useRef } from 'react'
import Post from './Post'

export default function Page() {
  const postRef = useRef(null);

  function handleClick() {
    postRef.current.scrollAndFocusAddComment();
  }

  return (
    <>
      <button onClick={handleClick}>
        Write a comment
      </button>
      <Post ref={postRef} />
    </>
  );
}
`})}),`
`,n.jsx(e.p,{children:"再来思考信息部分。"}),`
`,n.jsx(e.p,{children:"信息部分 Post 又分为两个部分，分别是信息展示部分与信息输入部分。此时这两个部分的 ref 要透传给 Post，并最终再次透传给页面组件。因此他们的组件结构应该长这样"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<>
  <article>
    <p>Welcome to my blog!</p>
  </article>
  <CommentList ref={commentsRef} />
  <AddComment ref={addCommentRef} />
</>
`})}),`
`,n.jsx(e.p,{children:"这个时候，有一个需要考虑的点就是，有两个对象需要被控制，因此我们需要借助 useImperativeHandle 来自定义控制器，并在控制的方法中，整合他们"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`useImperativeHandle(ref, () => {
  return {
    scrollAndFocusAddComment() {
      commentsRef.current.scrollToBottom();
      addCommentRef.current.focus();
    }
  };
}, []);
`})}),`
`,n.jsx(e.p,{children:"ref 的传递，只需要把它看成是一个普通的 props 即可。完整代码如下"}),`
`,n.jsx(RA,{}),`
`,n.jsx(e.h2,{children:"5"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"总结"})}),`
`,n.jsx(e.p,{children:"如果你对封装解耦比较重视，那么你一定能明显感受到，ref 与 useImperativeHandle 的结合能发挥的想象空间远不止于此，这种方式给 React 提供了一种扩展 React 能力的重要手段，因此，当你成为 React 高手之后，你一定会非常喜欢使用它们，他们的组合能让 React 项目变得更加多样化。"})]})}function LA(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(T1,{...t})}):T1(t)}function TA(){return n.jsx(ae,{renderArticle:t=>n.jsx(LA,{components:{code:t}})})}function EA(){const t=j.useRef(null);return n.jsxs("div",{className:"flex justify-between",children:[n.jsx("button",{onClick:()=>t.current.show(),className:"ml-3",children:"点击弹窗显示"}),n.jsx(Xm,{ref:t,children:n.jsx("div",{className:"bg-white p-4 max-w-xl mt-48 mx-auto rounded",children:"这是一个小弹窗"})})]})}const $A=`import { useRef } from 'react'
import Modal from 'components/Modal'

export default function Demo01() {
  const modal = useRef(null)
  return (
    <div className='flex justify-between'>
      <button onClick={() => modal.current.show()} className='ml-3'>点击弹窗显示</button>
      <Modal ref={modal}>
        <div className='bg-white p-4 max-w-xl mt-48 mx-auto rounded'>
          这是一个小弹窗
        </div>
      </Modal>
    </div>
  )
}
`,DA=`import { useState, useImperativeHandle} from "react";
import {createPortal} from 'react-dom'
import clsx from 'clsx'
import './index.css'

export default function Modal(props) {
  const {onClose, children, ref} = props
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)

  useImperativeHandle(ref, () => ({
    show: () => {
      setShow(true);
      document.body.style.overflow = 'hidden'
      setDisplay(true)
    },
    close: () => {
      document.body.style.overflow = 'visible'
      setShow(false)
    }
  }))

  const cls = clsx('modal', {
    'animation-in': show,
    'animation-out': !show
  })

  function __animationendHandler() {
    if (!show) setDisplay(false)
  }

  function __closeHandler() {
    setShow(false)
    document.body.style.overflow = 'visible'
    onClose && onClose()
  }

  if (!display) { return null }


  return createPortal(
    <div
      onAnimationEnd={__animationendHandler}
      className={cls}
      onClick={__closeHandler}
    >{children}</div>, document.body
  )
}
`;function OA(){return n.jsx(ee,{files:{index:$A,Modal:DA},caseRender:n.jsx(EA,{})})}function BA(){const t=j.useRef(null);return n.jsxs("div",{className:"flex justify-between",children:[n.jsx("button",{onClick:()=>t.current.show(),className:"ml-3",children:"点击我，显示对话框组件"}),n.jsxs(yo,{ref:t,title:"Message For You",onSure:()=>t.current.close(),children:[n.jsx("strong",{className:"text-red-500",children:"React 19"})," 是全网学习体验最好的小册，没有之一。它能帮助你快速领悟到 React 的独特的开发魅力，你将会感受到更快的学习速度，更高效的开发速度，更专业的开发思维。",n.jsx("div",{className:"mt-4",children:n.jsx("img",{src:"https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:""})})]})]})}const zA=`import { useRef } from 'react'
import Dialog from 'components/Dialog'

export default function Demo03() {
  const dialog = useRef(null)
  return (
    <div className='flex justify-between'>
      <button onClick={() => dialog.current.show()} className='ml-3'>点击我，显示对话框组件</button>
      <Dialog ref={dialog} title='Message For You' onSure={() => dialog.current.close()}>
        <strong className='text-red-500'>React 19</strong> 是全网学习体验最好的小册，没有之一。它能帮助你快速领悟到 React 的独特的开发魅力，你将会感受到更快的学习速度，更高效的开发速度，更专业的开发思维。
        <div className='mt-4'>
          <img src='https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
        </div>
      </Dialog>
    </div>
  )
}
`,UA=`import { useEffect, useRef, useState, useImperativeHandle } from 'react';
import Modal from '../Modal'
import Button from "components/Button";
import clsx from 'clsx'
import './index.css'

let mousePosition

const getClickPosition = (e) => {
  mousePosition = {
    x: e.pageX,
    y: e.pageY
  }
  setTimeout(() => {
    mousePosition = null
  }, 100)
}

document.documentElement.addEventListener('click', getClickPosition, true)

function setTransformOrigin(node, value) {
  var style = node.style;
  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
    style[prefix + 'TransformOrigin'] = value;
  });
  style['transformOrigin'] = value;
}

function offset(el) {
  const rect = el.getBoundingClientRect()
  const pos = {
    left: rect.left,
    top: rect.top
  }
  const doc = el.ownerDocument
  const w = doc.defaultView
  pos.left += getScroll(w)
  pos.top += getScroll(w, 1)
  return pos
}

// 1st use window.pageXOffset and window.pageYOffset
// 2nd use window.document.documentElement.scrollLeft/scrollTop
// 3rd use window.document.body.scrollLeft/scrollTop
function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }
  return ret;
}

export default function Dialog(props) {
  const {title, onClose, children, onSure, onCancel, ref, footer} = props
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)
  const wrapperRef = useRef(null)
  const modal = useRef(null)

  useImperativeHandle(ref, () => ({
    show: () => {
      modal.current.show()
      document.body.style.overflow = 'hidden'
      setShow(true)
      setDisplay(true)
    },
    close
  }))

  function close() {
    setShow(false)
    modal.current.close()
    document.body.style.overflow = 'visible'
  }

  function closeHandler() {
    close()
    onClose && onClose()
  }

  function clickHander(e) {
    e.stopPropagation()
  }

  function sureClickHander(e) {
    e.stopPropagation()
    onSure && onSure()
  }

  function animationendHandler() {
    if (!show) {
      setDisplay(false)
    }
  }

  const cls = clsx('dialog-wrapper', {
    in: show,
    out: !show
  })

  useEffect(() => {
    const node = wrapperRef.current
    if (display && node) {
      const elOffset = offset(node)

      if (mousePosition)
        setTransformOrigin(node, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px')
    }
  }, [display])

  return (
    <Modal ref={modal} onClose={closeHandler}>
      {display ? (
        <div ref={wrapperRef} className={cls} onClick={clickHander} onAnimationEnd={animationendHandler}>
          <header className="flex justify-between items-center mb-2">
            <div className="font-bold text-lg leading-6">
              {title}
            </div>
            <div onClick={closeHandler} className='p-2 rounded-md cursor-pointer transition hover:bg-gray-200'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
              </svg>
            </div>
          </header>
          <section className="leading-6">
            {children}
          </section>
          {footer || (
            <footer className="text-end mt-4">
              <Button primary onClick={sureClickHander}>确认</Button>
            </footer>
          )}

        </div>
      ) : null}
    </Modal>
  )
}
`;function PA(){return n.jsx(ee,{files:{index:zA,Dialog:UA},caseRender:n.jsx(BA,{})})}function E1(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"本章内容理解起来难度偏高，无需非要全部掌握，理解和感受 ref 的作用即可。"}),`
`]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"基于 ref 封装一个 Madal 组件"})}),`
`,n.jsxs(e.p,{children:["我们的目标是封装一个 Modal 组件，但是我并不需要传入 ",n.jsx(e.code,{children:"show"})," 等状态来控制 Modal 的显示与隐藏。而是使用 ref 来控制。目标代码如下"]}),`
`,n.jsx(OA,{}),`
`,n.jsxs(e.p,{children:["这里的核心是，当我想要让弹窗显示时，只需要调用 ",n.jsx(e.code,{children:"modal.current.show()"})," 即可。这种方式可以有效避免在应用层组件中声明过多的状态来控制一切。"]}),`
`,n.jsx(e.p,{children:"对于刚接触 React 的新人来说，要实现这种带有动画的显示隐藏效果比较困难。我们这里就简单来拆解一下实现思路。"}),`
`,n.jsxs(e.p,{children:["首先，基于数据驱动 UI 的思路，那么在弹窗组件内部，我们肯定要首先定义一个状态 ",n.jsx(e.code,{children:"show"}),"， 用于控制弹窗的显示与隐藏。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function Modal() {
  const [show, setShow] = useState(false)
  ...
}
`})}),`
`,n.jsx(e.p,{children:"接下来估计部分道友就比较懵了，因为如果只是靠 show 的话，如何与动画结合起来考虑呢？很显然，隐藏的时候，我们最终要删除节点，但是节点删除之后，动画就直接消失了。因此在这个逻辑里，我们要分成两个步骤来处理动画的执行与节点的删除。"}),`
`,n.jsx(e.p,{children:"首先，在弹窗显示时，应该是先将 DOM 节点加入进来，然后再执行入场动画"}),`
`,n.jsx(e.p,{children:"在弹窗消失时，应该是先执行退场动画，然后再将 DOM 节点删除。"}),`
`,n.jsx(e.p,{children:"因此，这个时候，我们还需要引入另外一个状态用于分别控制动画的执行。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function Modal() {
  // 控制动画的执行
  const [show, setShow] = useState(false)
  // 控制节点的增删
  const [display, setDisplay] = useState(false)
  ...
}
`})}),`
`,n.jsxs(e.p,{children:["由于 show 我们约定是用来控制动画的执行，因此，在 css 上，我们根据 ",n.jsx(e.code,{children:"show"})," 的值来确定在 class 中加入入场动画还是退场动画"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const cls = clsx('modal', {
  'animation-in': show,
  'animation-out': !show
})
`})}),`
`,n.jsx(e.p,{children:"然后在入场时，首先要新增节点，并且立即执行动画"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`show: () => { setShow(true); setDisplay(true) }
`})}),`
`,n.jsx(e.p,{children:"在退场时，首先要执行动画，并在动画执行结束之后，再执行删除节点的操作"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`close: () => { setShow(false) }

...

function __animationendHandler() {
  if (!show) setDisplay(false)
}
`})}),`
`,n.jsx(e.p,{children:"这样，把逻辑稍微再整理一下，就能够实现动画效果了。"}),`
`,n.jsxs(e.p,{children:["当然，本次案例最核心的重点，还是使用 ",n.jsx(e.code,{children:"useImperativeHandle"})," 把内部的操作提供给外部的控制器 ref"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`useImperativeHandle(ref, () => ({
  show: () => { setShow(true); setDisplay(true) },
  close: () => { setShow(false) }
}))
`})}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"基于 Modal 封装 Dialog 组件"})}),`
`,n.jsx(e.p,{children:"先来点击按钮感受一下演示效果。"}),`
`,n.jsx(PA,{}),`
`,n.jsx(e.p,{children:"这个案例中，比较有难度的是我们记录了鼠标的点击位置，并基于该位置对内部元素进行放大显示。退场时，还要往这个位置进行缩小隐藏。原理并不复杂，只是如果自己实现的话，要稍微花点时间调一下位置的计算。大家在使用时可以直接 copy 这段代码就行，我在兼容性上也做了完整的处理。"}),`
`,n.jsx(e.p,{children:"动画是基于缩放 scale 来实现，这里我们只需要基于鼠标点击的位置和目标位置更改变换中心即可，具体的计算细节请看右侧代码。动画 css 代码如下所示。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.dialog.in {
  animation-name: dialog-show;
}
.dialog.out {
  animation-name: dialog-hide;
}

@keyframes dialog-show {
  0% {transform: scale(1); opacity: 0;}
  1% { transform: scale(0);}
  100% { transform: scale(1); opacity: 1; }
}
@keyframes dialog-hide {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0); opacity: 0; }
}
`})}),`
`,n.jsxs(e.p,{children:["这里我们需要观察的是，ref 的多层传递和使用。在我们使用 ",n.jsx(e.code,{children:"Modal"})," 时，并不需要特别关注 ref 在内部是如何处理的，只需要知道如何使用它即可。我们可以利用这种思维把类似的嵌套逻辑简化成单一逻辑。"]}),`
`,n.jsxs(e.p,{children:["最终的代码请看右侧案例中的 ",n.jsx(e.code,{children:"Dialog"})]})]})}function HA(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(E1,{...t})}):E1(t)}function VA(){return n.jsx(ae,{renderArticle:t=>n.jsx(HA,{components:{code:t}})})}const qA={task:"TASK-8878",content:"Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",status:"Progress",priority:"Medium"},Dp=j.createContext({});function FA({children:t}){const[e,i]=j.useState(qA);return n.jsx(Dp,{value:{task:e,updateTask:i},children:t})}function XA(t){const{ref:e,...i}=t,{task:o,updateTask:c}=j.use(Dp);function m(d){c({...o,content:d.target.value})}return n.jsxs(yo,{ref:e,...i,onSure:()=>e.current.close(),children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx("div",{className:"w-20",children:"name"}),n.jsx("div",{className:"flex-1 p-2 text-sm font-bold",children:o.task})]}),n.jsxs("div",{className:"flex items-center mt-4",children:[n.jsx("div",{className:"w-20",children:"content"}),n.jsx("input",{value:o.content,className:"flex-1 border rounded-md p-2 text-sm",onChange:m})]}),n.jsxs("div",{className:"flex items-center mt-4",children:[n.jsx("div",{className:"w-20",children:"status"}),n.jsx("div",{className:"flex-1 p-2 text-sm text-green-500",children:o.status})]}),n.jsxs("div",{className:"flex items-center mt-4",children:[n.jsx("div",{className:"w-20",children:"Priority"}),n.jsx("div",{className:"flex-1 p-2 text-sm text-red-500",children:o.priority})]})]})}function GA(){const t=j.useRef(null),{task:e}=j.use(Dp);return n.jsxs("div",{className:"flex items-center border-t pt-4",children:[n.jsx("div",{className:"font-bold",children:e.task}),n.jsx("div",{className:"flex-1 mx-3 line-clamp-1",children:e.content}),n.jsx("div",{className:"text-green-500",children:e.status}),n.jsx("button",{onClick:()=>t.current.show(),className:"ml-3",children:"edit"}),n.jsx(XA,{ref:t,title:"Editor"})]})}function hb(){return n.jsxs(FA,{children:[n.jsx("h3",{className:"font-bold",children:"Your Task"}),n.jsx("p",{className:"!text-gray-400",children:"Here's a task for you!"}),n.jsx(GA,{})]})}const IA=`import Provider from './context'
import Task from './task'

export default function App() {
  return (
    <Provider>
      <h3 className='font-bold'>Your Task</h3>
      <p className='!text-gray-400'>Here's a task for you!</p>
      <Task />
    </Provider>
  )
}
`,YA=`import {createContext, useState} from 'react'

const def = {
  task: 'TASK-8878',
  content: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
  status: 'Progress',
  priority: 'Medium'
}

export const Context = createContext({})

export default function Provider({ children }) {
  const [task, updateTask] = useState(def)

  return (
    <Context value={{task, updateTask}}>{children}</Context>
  )
}
`,ZA=`import { use } from 'react'
import Dialog from 'components/Dialog'
import {Context} from './context'

export default function Editor(props) {
  const {ref, ...other} = props
  const {task, updateTask} = use(Context)

  function __inputchange(e) {
    updateTask({
      ...task,
      content: e.target.value,
    })
  }

  return (
    <Dialog ref={ref} {...other} onSure={() => ref.current.close()}>
      <div className='flex items-center'>
        <div className='w-20'>name</div>
        <div className='flex-1 p-2 text-sm font-bold'>{task.task}</div>
      </div>

      <div className='flex items-center mt-4'>
        <div className='w-20'>content</div>
        <input
          value={task.content}
          className='flex-1 border rounded-md p-2 text-sm'
          onChange={__inputchange}
        />
      </div>

      <div className='flex items-center mt-4'>
        <div className='w-20'>status</div>
        <div className='flex-1 p-2 text-sm text-green-500'>{task.status}</div>
      </div>

      <div className='flex items-center mt-4'>
        <div className='w-20'>Priority</div>
        <div className='flex-1 p-2 text-sm text-red-500'>{task.priority}</div>
      </div>
    </Dialog>
  )
}
`,KA=`import { useRef, use } from 'react'
import Editor from './editor'
import {Context} from './context'

export default function Demo03() {
  const editor = useRef(null)
  const {task} = use(Context)

  return (
    <div className='flex items-center border-t pt-4'>
      <div className='font-bold'>{task.task}</div>
      <div className='flex-1 mx-3 line-clamp-1'>{task.content}</div>
      <div className='text-green-500'>{task.status}</div>

      <button
        onClick={() => editor.current.show()}
        className='ml-3'
      >edit</button>
      <Editor ref={editor} title='Editor' />
    </div>
  )
}
`;function WA(){return n.jsx(ee,{files:{index:IA,Context:YA,Editor:ZA,Task:KA},caseRender:n.jsx(hb,{})})}function $1(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(Wn,{children:n.jsx(hb,{})}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"0"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"改动"})}),`
`,n.jsx(e.p,{children:"与之前的版本相比，在 React19 中，context 有一些细微的变化。主要体现在如下三个方面。"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"1、删除旧版 Context"})}),`
`,n.jsx(e.p,{children:"旧版本的 Context 在 2018 年 10 月（v16.6.0）被废弃。但是为了保证平滑的升级，旧版代码一直沿用到了现在。在 React 19 中，这些代码会正式被删除。旧版本的 Context 仅在使用 contextTypes 和 getChildContext API 的类组件中可用。因此它的删除对现在的项目应该只会造成很小的影响。"}),`
`,n.jsx(e.p,{children:"如果你在项目中仍然使用了旧版 Context，你可以参考下面新旧版本的对比写法进行调整升级。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 之前
import PropTypes from 'prop-types';

class Parent extends React.Component {
  static childContextTypes = {
    foo: PropTypes.string.isRequired,
  };

  getChildContext() {
    return { foo: 'bar' };
  }

  render() {
    return <Child />;
  }
}

class Child extends React.Component {
  static contextTypes = {
    foo: PropTypes.string.isRequired,
  };

  render() {
    return <div>{this.context.foo}</div>;
  }
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 之后
const FooContext = React.createContext();

class Parent extends React.Component {
  render() {
    return (
      <FooContext value='bar'>
        <Child />
      </FooContext>
    );
  }
}

class Child extends React.Component {
  static contextType = FooContext;

  render() {
    return <div>{this.context}</div>;
  }
}
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"2、简化 Provider 的使用"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const Context = createContext({})
`})}),`
`,n.jsx(e.p,{children:"在以前的使用中，我们需要使用 Context.Provider 来包裹子组件。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`<Context.Provider value={value}>
  {props.children}
</Context.Provider>
`})}),`
`,n.jsx(e.p,{children:"在 React19 中，我们可以直接使用 Context 来代替 Provider，从而让代表变得更加简洁。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`<Context value={value}>
  {props.children}
</Context>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"3、可以使用 use 获取 context"})}),`
`,n.jsx(e.p,{children:"以前的版本中，在组件内部我们使用 useContext 来获取 context 中的状态。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// after
import { use } from 'react';

function MyComponent() {
  const theme = use(ThemeContext);
  // ...
`})}),`
`,n.jsx(e.h2,{children:"2"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"重学一次 context"})}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://files.mdnice.com/user/3925/9cb65ddb-71ee-42c2-8062-347ca8312b92.png",alt:""})}),`
`,n.jsxs(e.p,{children:["在 React 中，props 能够帮助我们将数据层层往下传递。但是，当数据传递太多层之后，不仅代码上比较繁琐，理解上也容易混乱不清。因此，我们需要一种能够",n.jsx(e.strong,{children:"跨越组件层级"}),"让直达子组件的数据传递方式，这就是 context."]}),`
`,n.jsxs(e.p,{children:["context 表示组件实例在运行期间能够",n.jsx(e.strong,{children:"直接读取"}),"的状态和内容。他记录了内存中的活跃数据。我们可以将这些数据使用 ",n.jsx(e.code,{children:"useState"})," 来定义。那么，context 中的数据更改，就会驱动所有使用到该数据的 UI 发生变化。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"context 的学习主要分为如下三个部分"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"一、"})," 如何创建 context"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"二、"})," 顶层组件中如何传递数据"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"三、"})," 子组件中如何获取数据"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"一、如何创建 context"})}),`
`,n.jsxs(e.p,{children:["我们可以使用 ",n.jsx(e.code,{children:"createContext"})," 来创建 context."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const SomeContext = createContext(defaultValue)
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"defaultValue"})," 表示默认值。他可以作为数据的兜底结果。当你无法从 ",n.jsx(e.code,{children:"value"})," 中读取具体的值时，则会使用 ",n.jsx(e.code,{children:"defaultValue"})," 中的值。在代码运行过程中，默认值始终保持不变。如果没有默认值，我们至少需要传入一个 ",n.jsx(e.code,{children:"null"}),"。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"createContext"})," 执行之后的返回值，就是我们需要的 ",n.jsx(e.code,{children:"context"}),"。"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"二、如何传递 context"})}),`
`,n.jsx(e.p,{children:"返回的 context 通常是一系列组件的顶层父组件。因此，在使用时，我们通常会首先定义该顶层父组件。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function Provider(props) {
  const value = {...}
  return (
    <SomeContext value={value}>
      {props.children}
    </SomeContext>
  )
}
export default Provider
`})}),`
`,n.jsxs(e.p,{children:["在该顶层父组件中，我们使用刚才创建的 ",n.jsx(e.code,{children:"context"})," 作为父级标签，把子组件包起来。并作为渲染内容返回。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<SomeContext value={value}>
  {props.children}
</SomeContext>
`})}),`
`,n.jsxs(e.p,{children:["此处的 ",n.jsx(e.code,{children:"value"})," 表示我们在上下文中定义好的值。我们可以自己随意定义你想要传递给子组件的所有数据/方法。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"这些数据/方法通常被多个不同的子组件共同使用。否则我们没必要将数据/方法存储在 context 中。"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { createContext } from 'react';

const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');
  // ...
  return (
    <ThemeContext value={theme}>
      <Page />
    </ThemeContext>
  );
}
`})}),`
`,n.jsxs(e.p,{children:["此时，案例中 ",n.jsx(e.code,{children:"Page"})," 组件的所有后代子组件，都可以直接获取 context 中的值，不管层级有多深。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"value 可以是任何类型，你可以根据自己的项目需要设计合适的数据类型。"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"三、如何获取 context 中的值"})}),`
`,n.jsxs(e.p,{children:["在任意被包裹的子组件中，我们可以使用 ",n.jsx(e.code,{children:"use"})," 来获取 context 中的值。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function Button() {
  // ✅ Recommended way
  const theme = use(ThemeContext);
  return <button className={theme} />;
}
`})}),`
`,n.jsx(e.p,{children:"获取方法非常简单，接下来，我们使用具体的实践案例来分享 context 的使用。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["需要注意，多个 Context ",n.jsx(e.strong,{children:"可以嵌套使用"}),"，只是在实践中，这种场景不算多见。"]}),`
`]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"3"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"案例：在弹窗中更改页面的值"})}),`
`,n.jsx(e.p,{children:"学习了 context 的知识之后，我们来结合之前自定义的弹窗组件，一起来实现一下页面最开始的那个案例。"}),`
`,n.jsx(WA,{}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"由于是演示案例，所以数据比较简单，组件层级也不够深，所以大家把重点关注在 context 的技术学习上即可。并非代表真实实践中需要这样使用。"}),`
`]}),`
`,n.jsx(e.p,{children:"首先，我们创建一个 context 文件，该文件中，我们会创建 Context，并在其中定义好需要传递到各子组件中的去的数据和方法"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const def = {
  task: 'TASK-8878',
  content: 'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
  status: 'Progress',
  priority: 'Medium'
}

export const Context = createContext({})

export default function Provider({ children }) {
  const [task, updateTask] = useState(def)

  return (
    <Context value={{task, updateTask}}>{children}</Context>
  )
}
`})}),`
`,n.jsx(e.p,{children:"然后在父组件中，使用 Provider 包裹需要用到的子组件。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import Provider from './context'
import Task from './task'

export default function App() {
  return (
    <Provider>
      <h3 className='font-bold'>Your Task</h3>
      <p className='!text-gray-400'>Here's a task for you!</p>
      <Task />
    </Provider>
  )
}
`})}),`
`,n.jsxs(e.p,{children:["然后在各子组件中，使用 ",n.jsx(e.code,{children:"use(Context)"})," 获取当前组件需要的数据和方法即可"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { use } from 'react'
import {Context} from './context.jsx'

export default function Editor(props) {
  const {ref, ...other} = props
  const {task, updateTask} = use(Context)
  ...
`})}),`
`,n.jsxs(e.p,{children:["这里比较有意思的一个地方是在 ",n.jsx(e.code,{children:"editor.jsx"})," 文件中，对于 ref 的使用和处理，大家可以留心观察一下。"]})]})}function QA(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx($1,{...t})}):$1(t)}function JA(){return n.jsx(ae,{renderArticle:t=>n.jsx(QA,{components:{code:t}})})}const Op=j.createContext({});function eR({children:t}){const[e,i]=j.useState(0),o={count:e,incrementer:i};return n.jsx(Op,{value:o,children:t})}function nR(){const{count:t}=j.use(Op);return n.jsxs("div",{children:[n.jsx("h3",{className:"font-bold",children:"Total Switch Count"}),n.jsxs("p",{className:"!text-gray-400",children:["这里统计的是所有组件的切换次数: ",t]})]})}function tR(t){const{value:e=!1,onChange:i}=t,[o,c]=j.useState(e),m=o?"switch right":"switch left";function d(h){c(h),i&&i(h)}return n.jsx("div",{className:m,onClick:()=>d(!o),children:n.jsx("div",{className:"circle"})})}function am(){const{count:t,incrementer:e}=j.use(Op),[i,o]=j.useState("theme-light"),[c,m]=j.useState(0);function d(h){o(h?"theme-dark":"theme-light"),m(c+1),e(t+1)}return n.jsxs("div",{className:i,children:[n.jsxs("div",{className:"context-card p-4 rounded transition",children:[n.jsx("div",{className:"title font-bold",children:"Canary"}),n.jsx("div",{className:"mt-4",children:"The useActionState Hook is currently only available in React’s Canary and experimental channels. Learn more about release channels here. "})]}),n.jsxs("div",{className:"flex justify-between py-4 items-center",children:[n.jsxs("div",{className:"mr-4 text-green-500",children:["当前组件切换次数: ",c]}),n.jsx(tR,{onChange:d})]})]})}function sR(){return n.jsxs(eR,{children:[n.jsx(nR,{}),n.jsx(am,{}),n.jsx(am,{}),n.jsx(am,{})]})}const rR=`import Provider from './context'
import Total from './Total'
import Card from './Card'
import './skin.css'

export default function App() {
  return (
    <Provider>
      <Total />
      <Card />
      <Card />
      <Card />
    </Provider>
  )
}
`,iR=`import {createContext, useState} from 'react'

export const Context = createContext({})

export default function Provider({ children }) {
  const [count, incrementer] = useState(0)

  const value = {
    count,
    incrementer
  }

  return (
    <Context value={value}>{children}</Context>
  )
}
`,aR=`import {use, useState} from 'react'
import {Context} from './context.jsx'
import Switch from 'components/Switch/index.jsx'

export default function Card() {
  const {count, incrementer} = use(Context)
  const [theme, setTheme] = useState('theme-light')
  const [number, setNumber] = useState(0)

  function onSwitch(bool) {
    setTheme(bool ? 'theme-dark' : 'theme-light')
    setNumber(number + 1)
    incrementer(count + 1)
  }

  return (
    <div className={theme}>
      <div className='context-card p-4 rounded transition'>
        <div className="title font-bold">Canary</div>
        <div className='mt-4'>The useActionState Hook is currently only available in React’s Canary and experimental channels. Learn more about release channels here. </div>
      </div>

      <div className='flex justify-between py-4 items-center'>
        <div className='mr-4 text-green-500'>当前组件切换次数: {number}</div>
        <Switch onChange={onSwitch} />
      </div>
    </div>
  )
}
`,oR=`import {use, useState} from 'react'
import {Context} from './context.jsx'

export default function Total() {
  const {count} = use(Context)
  return (
    <div>
      <h3 className='font-bold'>Total Switch Count</h3>
      <p className='!text-gray-400'>这里统计的是所有组件的切换次数: {count}</p>
    </div>
  )
}
`,lR=`@layer context_count {
  .theme-dark {
    --text-color: rgba(255, 255, 255, 0.8);
    --bg-color: rgba(0, 0, 0, 0.8);
    --border-color: rgba(0, 0, 0, 0.1);
  }
  .theme-light {
    --text-color: rgba(0, 0, 0, 0.88);
    --bg-color: rgba(0, 0, 0, 0.02);
    --border-color: rgba(0, 0, 0, 0.1);
  }
}
.context-card {
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  color: var(--text-color);
}
`;function cR(){return n.jsx(ee,{files:{index:rR,Context:iR,Card:aR,Total:oR,"skin.css":lR},caseRender:n.jsx(sR,{})})}function D1(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:n.jsx(e.em,{children:"0"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"皮肤切换方案"})}),`
`,n.jsx(e.p,{children:"利用 CSS 变量来实现皮肤切换，是目前最简单优雅的方案，也是最流行的方案。"}),`
`,n.jsxs(e.p,{children:["CSS 变量又称之为",n.jsx(e.strong,{children:"自定义属性"}),"。他已经在主流浏览器中被普遍支持，我们可以在许多项目中使用该特性。我们熟知的 antd 中就大量运用了自定义属性。"]}),`
`,n.jsxs(e.p,{children:["声明一个自定义属性，需要以 ",n.jsx(e.code,{children:"--"})," 开头，属性值可以是任何有效的 CSS 值。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`element {
  --main-bg-color: brown;
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["注意理解这句话：",n.jsx(e.strong,{children:"自定义属性和其他属性一样，是写在规则集之内的。"})," 因此，它的改变，也能触发 transition 动画的执行"]}),`
`]}),`
`,n.jsx(e.p,{children:"并且要注意的是，规则集所指定的选择器定义了自定义属性的可见作用域。通常的最佳实践是定义在根伪类 :root 下，这样就可以在 HTML 文档的任何地方访问到它了"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`:root {
  --main-bg-color: brown;
}
`})}),`
`,n.jsx(e.p,{children:"当然，我也应该根据实践运用灵活选择作用域。"}),`
`,n.jsx(e.p,{children:"在本案例中，我们仅定义一个对当前代码生效的自定义属性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@layer context_count {
  .theme-dark {
    --text-color: rgba(255, 255, 255, 0.8);
    --bg-color: rgba(0, 0, 0, 0.8);
    --border-color: rgba(0, 0, 0, 0.1);
  }
  .theme-light {
    --text-color: rgba(0, 0, 0, 0.88);
    --bg-color: rgba(0, 0, 0, 0.02);
    --border-color: rgba(0, 0, 0, 0.1);
  }
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"@layer"})," 表示降低当前属性的优先级，从而不影响其他任何元素的样式。哪怕是同名的也不会受到影响，此时我们将与皮肤属性相关的都自定义在主题中，不同的主题对应不同的属性。"]}),`
`,n.jsx(e.p,{children:"然后运用到具体的元素上"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.context-card {
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  color: var(--text-color);
}
`})}),`
`,n.jsx(e.p,{children:"此时，我们只需要构建如下所示的父子关系，然后更改父元素的 className，就可以轻松做到主题切换"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- 所有使用了主题自定义变量的元素，是 \`.theme-light\` 的子元素 -->
<div class='theme-light'>
  <div class='context-card'></div>
</div>
`})}),`
`,n.jsx(e.p,{children:"切换主题时，只需要更改父元素的 class 即可。将其修改成另外一个配置好的主题。"}),`
`,n.jsx(e.p,{children:"有了这些皮肤切换的基础知识之后，我们来结合 context 实现一个皮肤切换并统计切换总次数的案例。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"多个模块皮肤切换总次数统计"})}),`
`,n.jsx(e.p,{children:"首先，我们要创建一个 context，并在 context 中准备好可能会用到的全局数据。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import {createContext, useState} from 'react'

export const Context = createContext({})

export default function Provider({ children }) {
  const [count, incrementer] = useState(0)

  const value = {
    count,
    incrementer
  }

  return (
    <Context value={value}>{children}</Context>
  )
}
`})}),`
`,n.jsx(e.p,{children:"然后，我们要在顶层父组件中，使用 Provider 将所有的子组件包裹起来，这里也顺带引入皮肤切换相关的 css 文件"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import Provider from './context'
import Total from './Total'
import Card from './Card.jsx'
import './skin.css'

export default function App() {
  return (
    <Provider>
      <Total />
      <Card />
      <Card />
      <Card />
    </Provider>
  )
}
`})}),`
`,n.jsx(e.p,{children:"最后，我们只需要在子组件中，使用 use 读取对应的数据和方法"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import {use, useState} from 'react'
import {Context} from './context'

export default function Total() {
  const {count} = use(Context)
  return (
    <div>
      <h3 className='font-bold'>Total Switch Count</h3>
      <p className='!text-gray-400'>这里统计的是所有组件的切换次数: {count}</p>
    </div>
  )
}
`})}),`
`,n.jsx(e.p,{children:"演示效果、完整代码如下"}),`
`,n.jsx(cR,{}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"2"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"皮肤切换思路的扩展"})}),`
`,n.jsx(e.p,{children:"我们可以把皮肤切换的方案，扩展到类似于 Switch 组件的实现上。在 Switch 组件中，当我们点击时，除了有颜色相关的样式切换之外，还有元素的位置要发生变化，因此，我们只需要额外多设计一个自定义属性就可以用完全一样的思路来实现这个组件了。"}),`
`,n.jsx(e.p,{children:"代码如下，非常的简洁。演示效果请看上面的皮肤切换案例。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@layer switch {
  .left {
    --bg-color: rgba(0, 0, 0, 0.1);
    --x: 0;
  }

  .right {
    --bg-color: rgba(0, 0, 0, 0.9);
    --x: 24px;
  }
}

.switch {
  @apply p-[1px] border w-14 rounded-full cursor-pointer transition;
  background-color: var(--bg-color);
}

.switch .circle {
  @apply rounded-full w-6 h-6 transition;
  background-color: white;
  transform: translateX(var(--x));
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import {useState} from 'react'
import './index.css'

export default function Switch(props) {
  const {value = false, onChange} = props
  const [checked, toggle] = useState(value)

  const cls = checked ? 'switch right' : 'switch left'

  function __click(value) {
    toggle(value)
    onChange && onChange(value)
  }

  return (
    <div className={cls} onClick={() => __click(!checked)}>
      <div className='circle'></div>
    </div>
  )
}
`})})]})}function uR(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(D1,{...t})}):D1(t)}function dR(){return n.jsx(ae,{renderArticle:t=>n.jsx(uR,{components:{code:t}})})}function _c(t){const{loading:e,type:i="icon"}=t,[o,c]=j.useState(!1),[m,d]=j.useState(!1);j.useEffect(()=>{e?(c(!0),d(!0)):c(!1)},[e]);const f=Fe("spin flex items-center justify-center top-0 bg-white bg-opacity-50",{in:o,out:!o});function x(){o||d(!1)}return n.jsxs("div",{className:"relative",children:[t.children,m?n.jsx("div",{className:f,onAnimationEnd:x,children:i==="icon"&&n.jsx("svg",{className:"animate-spin",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"24",height:"24",children:n.jsx("path",{d:"M249.836 210.77c5.558-3.827 10.73-7.527 15.812-10.695 4.967-3.314 9.807-6.121 14.208-8.785 2.18-1.362 4.374-2.515 6.425-3.673l5.873-3.281c0.945-0.551 1.789-0.953 2.625-1.377l2.425-1.226 4.381-2.233 1.954-1.004 2.219-1.093 3.918-1.924 7.184-3.527c2.883-1.44 5.996-3.272 8.694-5.22 26.969-19.458 33.057-57.094 13.599-84.063-19.458-26.968-57.094-33.057-84.063-13.599l-6.49 4.682-3.54 2.554-2.071 1.499-2.62 1.947-5.824 4.351a7267.87 7267.87 0 0 0-3.193 2.399c-1.091 0.824-2.25 1.676-3.282 2.533a33346.62 33346.62 0 0 1-6.735 5.441c-2.343 1.915-4.833 3.859-7.308 6.046-4.991 4.313-10.423 8.905-15.952 14.121-5.645 5.071-11.353 10.792-17.394 16.739-5.886 6.125-12.079 12.515-18.185 19.505-12.303 13.875-24.827 29.53-36.839 46.835a494.61 494.61 0 0 0-33.896 56.497 491.342 491.342 0 0 0-27.329 64.159c-1.02 2.77-1.888 5.605-2.789 8.428l-2.688 8.477c-1.692 5.691-3.266 11.429-4.857 17.152l-2.135 8.669c-0.683 2.896-1.479 5.756-2.051 8.682l-1.84 8.729-0.914 4.358-0.785 4.387a479.254 479.254 0 0 0-7.583 69.967c-0.302 5.759-0.239 11.514-0.279 17.214l-0.017 4.267c-0.001 1.42 0.069 2.841 0.101 4.257l0.25 8.464 0.127 4.204 0.264 4.188 0.531 8.317 0.278 4.451 0.399 3.933 0.792 7.821c0.14 1.313 0.244 2.561 0.412 3.918l0.527 4.098 1.056 8.115c0.185 1.337 0.33 2.695 0.549 4.002l0.648 3.91 1.289 7.744c1.825 10.246 3.911 20.188 6.263 29.766a463.195 463.195 0 0 0 16.342 52.81l2.255 5.904 1.108 2.899 1.186 2.836 4.611 10.976c3.247 7.033 6.19 13.723 9.353 19.831 6.048 12.328 12.043 22.661 17.007 31.096 5.121 8.359 9.212 14.84 12.197 19.141l4.472 6.638-3.293-7.292c-2.209-4.713-5.148-11.776-8.748-20.761-3.443-9.059-7.545-20.055-11.346-32.919-2.041-6.376-3.771-13.301-5.726-20.516l-2.612-11.204-0.667-2.878-0.583-2.935-1.183-5.957c-3.105-16.055-5.568-33.549-6.889-52.052-0.668-9.251-1.027-18.753-1.1-28.437l0.03-7.3 0.014-3.67c0.002-1.227 0.084-2.416 0.122-3.629l0.284-7.263 0.139-3.644c0.053-1.229 0.166-2.577 0.247-3.863a35704.717 35704.717 0 0 1 0.798-11.787l0.017-0.247c0.013 0.588 0.018 0.028 0.027 0.098l0.05-0.472 0.101-0.945 0.2-1.891 0.8-7.581 0.4-3.801 0.535-3.801 1.069-7.62c0.187-1.271 0.335-2.545 0.555-3.815l0.67-3.811c0.909-5.082 1.708-10.185 2.859-15.253a424.734 424.734 0 0 1 17.057-60.03l1.316-3.663 1.437-3.623 2.859-7.225c0.907-2.417 2.03-4.761 3.033-7.135l3.079-7.082c2.208-4.653 4.37-9.295 6.624-13.867l3.508-6.783c1.167-2.252 2.294-4.513 3.565-6.702a414.503 414.503 0 0 1 31.89-49.502 407.116 407.116 0 0 1 35.476-41.25 406.598 406.598 0 0 1 35.793-32.288c5.751-4.687 11.515-8.857 16.918-12.861zM1023.966 510.486l-0.001-0.005-0.875-7.954-1.051-9.554-0.687-6.125-1.153-8.152c-0.828-5.729-1.741-12.089-2.813-18.907l-4.259-20.887c-0.691-3.726-1.738-7.517-2.729-11.425l-3.102-12.024c-0.558-2.048-1.019-4.142-1.677-6.221l-1.958-6.314-4.07-13.021-1.049-3.333-1.211-3.324c-0.814-2.223-1.638-4.467-2.469-6.732-1.673-4.522-3.34-9.131-5.115-13.781l-5.938-13.981-3.046-7.123c-1.037-2.384-2.247-4.72-3.375-7.102l-6.997-14.388c-0.569-1.22-1.222-2.408-1.877-3.598l-1.958-3.583-3.95-7.211-3.995-7.265c-1.354-2.422-2.881-4.773-4.324-7.175l-8.875-14.427c-12.567-18.998-26.533-37.793-42.018-55.643-15.662-17.71-32.638-34.534-50.581-50.045a527.617 527.617 0 0 0-56.726-41.602c-19.622-12.201-39.702-22.647-59.484-31.64l-14.925-6.188c-2.47-0.995-4.881-2.072-7.356-2.979l-7.402-2.651-7.306-2.609-3.615-1.289c-1.198-0.434-2.394-0.863-3.618-1.21l-14.37-4.353c-2.366-0.691-4.68-1.466-7.035-2.069l-7.02-1.754-13.669-3.402c-4.524-0.941-8.985-1.788-13.341-2.655l-6.47-1.271-3.184-0.621-3.186-0.465-12.373-1.797-5.96-0.862c-1.957-0.298-3.928-0.403-5.85-0.61l-11.239-1.057c-3.638-0.329-7.151-0.735-10.598-0.81l-19.18-0.823-16.258 0.11-6.935 0.057c-2.177 0.091-4.219 0.237-6.115 0.34l-9.619 0.566-7.982 0.472 7.959 0.875 9.529 1.05c1.872 0.215 3.884 0.411 6.023 0.683l6.797 1.101 15.801 2.578 18.393 3.951c3.283 0.628 6.614 1.603 10.051 2.514l10.571 2.838c1.801 0.509 3.644 0.92 5.469 1.526l5.542 1.793 11.432 3.697 2.927 0.946 2.914 1.104 5.902 2.242c3.965 1.517 8.007 3.017 12.084 4.613l12.243 5.366 6.241 2.733c2.088 0.929 4.128 2.029 6.212 3.044l12.59 6.277c1.068 0.506 2.106 1.094 3.145 1.685l3.131 1.761 6.302 3.542 6.353 3.568c2.118 1.209 4.165 2.586 6.263 3.878l12.601 7.922c16.565 11.247 32.949 23.681 48.48 37.44a473.639 473.639 0 0 1 43.435 44.87 467.917 467.917 0 0 1 35.892 50.115c10.476 17.304 19.389 34.971 27.062 52.322 1.761 4.404 3.506 8.772 5.234 13.098 0.843 2.166 1.771 4.273 2.532 6.444l2.224 6.49 2.201 6.396 1.093 3.162c0.368 1.047 0.734 2.092 1.019 3.166l3.633 12.572c0.578 2.068 1.242 4.086 1.738 6.146l1.441 6.137 2.829 11.931 2.152 11.645 1.045 5.64 0.514 2.772 0.362 2.779 1.423 10.784 0.697 5.188c0.245 1.704 0.3 3.423 0.458 5.098l0.794 9.786c0.249 3.167 0.584 6.22 0.595 9.223l0.516 16.686-0.346 13.152-0.109 5.579-0.343 6.014-0.567 9.595-0.472 7.988c-0.169 3.219-0.107 6.829 0.256 10.138 3.638 33.056 33.383 56.904 66.438 53.267 33.056-3.637 56.905-33.382 53.268-66.438zM885.176 762.451l-4.868 5.897c-1.711 2.052-3.44 4.238-5.4 6.399-3.858 4.365-7.946 9.128-12.608 13.957-4.517 4.944-9.632 9.919-14.922 15.205-5.467 5.131-11.147 10.547-17.374 15.864-12.349 10.726-26.262 21.624-41.613 32.046a434.435 434.435 0 0 1-50.026 29.303 431.157 431.157 0 0 1-56.59 23.39c-2.436 0.874-4.935 1.6-7.419 2.361l-7.455 2.279c-5.006 1.425-10.053 2.742-15.078 4.091-2.536 0.593-5.075 1.187-7.617 1.78-2.545 0.566-5.051 1.25-7.622 1.714l-7.663 1.523-3.822 0.763-3.851 0.64a419.278 419.278 0 0 1-61.304 5.938c-5.039 0.219-10.081 0.088-15.068 0.072l-3.733-0.022c-1.238-0.012-2.392-0.1-3.587-0.145l-7.067-0.313-3.505-0.146-3.997-0.27-7.961-0.537-1.981-0.133-0.989-0.067-0.494-0.033c0.221-0.008-0.844-0.005 0.433-0.022l-0.226-0.025-3.593-0.396-7.127-0.78a406.62 406.62 0 0 1-53.494-10.013 402.48 402.48 0 0 1-45.808-14.792l-5.111-2.022-2.511-0.99-2.452-1.066-9.494-4.124c-6.074-2.917-11.861-5.522-17.131-8.352-10.648-5.379-19.552-10.718-26.826-15.11l-1.338-0.807a1085.391 1085.391 0 0 0-3.457-2.276l-4.116-2.687c-0.638-0.414-1.252-0.813-1.842-1.194l-2.021-1.354-3.621-2.439-6.637-4.472c-2.685-1.782-5.825-3.567-8.857-4.938-30.307-13.689-65.973-0.218-79.662 30.089-13.689 30.308-0.218 65.974 30.089 79.663l7.293 3.294 3.979 1.797 2.369 1.063 2.994 1.302c2.073 0.896 4.3 1.857 6.676 2.885l3.672 1.574 1.917 0.819 1.9 0.745c10.22 4.014 22.646 8.772 37.189 13.242 7.215 2.375 15.042 4.443 23.216 6.727l12.687 3.1 3.261 0.787 3.325 0.701 6.75 1.415c18.195 3.715 38.044 6.719 59.054 8.439a494.284 494.284 0 0 0 65.863 0.997l8.535-0.519 4.285-0.266 0.268-0.017c1.44-0.02 0.541-0.02 0.927-0.03l0.492-0.051 0.986-0.1 1.977-0.201 7.938-0.807 3.991-0.406 4.502-0.554 9.015-1.133c1.492-0.2 3.034-0.365 4.486-0.598l4.344-0.709c5.795-0.965 11.61-1.832 17.399-3.066a485.178 485.178 0 0 0 68.692-18.701l4.2-1.463 4.157-1.588 8.292-3.176c2.771-1.016 5.468-2.251 8.194-3.37l8.134-3.434c5.351-2.451 10.685-4.869 15.941-7.39l7.805-3.918c2.591-1.307 5.188-2.576 7.712-3.991a474.344 474.344 0 0 0 57.071-35.83 467.174 467.174 0 0 0 47.72-40.068 466.596 466.596 0 0 0 37.51-40.586c5.455-6.542 10.335-13.082 14.998-19.24 4.483-6.313 8.789-12.218 12.512-18 3.868-5.667 7.179-11.177 10.297-16.204 1.589-2.492 2.957-4.989 4.318-7.332 1.349-2.348 2.635-4.586 3.854-6.711 4.686-8.611 8.271-15.384 10.509-20.116l3.527-7.185-4.682 6.489c-2.985 4.266-7.65 10.33-13.635 17.935z"})})}):null]})}const mR="https://randomuser.me",O1=()=>{const t=Math.floor(Math.random()*10)%10,e=new URLSearchParams({inc:"name,gender,email,nat,picture",results:t,noinfo:!0});let i=new AbortController,o=i.signal;const c=new Promise(m=>{fetch(`${mR}/api/?${e.toString()}`,{signal:o}).then(d=>{m(d.json())}).catch(()=>{console.log("接口成功取消！")})});return c.cancel=()=>{i&&i.abort()},c};function pR({promise:t}){const{results:e}=j.use(t);return console.log("List with use renderred."),n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:Ce()})]})]},`v${o}`))})}const hR=j.memo(pR);function fR(t){const{...e}=t;return n.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),n.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function fb(){const[t,e]=j.useState(O1),i=j.useDeferredValue(t);function o(){t.cancel(),e(O1())}return n.jsxs("div",{children:[n.jsx(fR,{onChange:o,placeholder:"Enter something"}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(_c,{loading:i!==t,type:"mask",children:n.jsx(hR,{promise:i})})})]})}const xR="https://randomuser.me",B1=()=>{const t=Math.floor(Math.random()*10)%10,e=new URLSearchParams({inc:"name,gender,email,nat,picture",results:t,noinfo:!0});let i=new AbortController,o=i.signal;const c=new Promise(m=>{fetch(`${xR}/api/?${e.toString()}`,{signal:o}).then(d=>{m(d.json())}).catch(()=>{console.log("接口成功取消！")})});return c.cancel=()=>{i&&i.abort()},c};function gR({promise:t}){const{results:e}=j.use(t);return console.log("List with use renderred."),n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:Ce()})]})]},`v${o}`))})}const vR=j.memo(gR);function jR(t){const{...e}=t;return n.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),n.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function yR(){const[t,e]=j.useState(B1);function i(){t.cancel(),e(B1())}return n.jsxs("div",{children:[n.jsx(jR,{onChange:i,placeholder:"Enter something"}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(vR,{promise:t})})]})}const bR=`import {useState, Suspense, useDeferredValue} from 'react'
import Spin from 'components/Spin'
import Skeleton from 'components/Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'

export default function Demo01() {
  const [promise, update] = useState(fetchListWithCancel)
  const deferred = useDeferredValue(promise)

  function __inputChange() {
    promise.cancel()
    update(fetchListWithCancel())
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <Spin loading={deferred !== promise} type='mask'>
          <List promise={deferred} />
        </Spin>
      </Suspense>
    </div>
  )
}
`,SR=`import { memo, use } from 'react';
import { createRandomMessage } from 'utils'

function CurrentList({promise}) {
  const {results} = use(promise)
  console.log('List with use renderred.')
  return (
    <div>
      {results.map((item, i) => (
        <div className='flex border p-4 items-center my-4 rounded' key={\`v\${i}\`}>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{createRandomMessage()}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default memo(CurrentList)`,NR=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`,wR=`export const host = 'https://randomuser.me'

export const fetchListWithCancel = () => {
  const i = Math.floor(Math.random() * 10) % 10
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: i,
    noinfo: true
  })
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(\`\${host}/api/?\${query.toString()}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,_R=`import {useState, useEffect} from 'react'
import clsx from 'clsx'
import './index.css'

export default function Index(props) {
  const {loading, type = 'icon'} = props
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    if (loading) { setShow(true); setDisplay(true)
    } else { setShow(false) }
  }, [loading]);

  const base = 'spin flex items-center justify-center top-0 bg-white bg-opacity-50'
  const cls = clsx(base, {
    in: show,
    out: !show
  })

  function __animationendHandler() {
    if (!show) setDisplay(false)
  }

  return (
    <div className='relative'>
      {props.children}
      {display ? (
        <div className={cls} onAnimationEnd={__animationendHandler}>
          {type === 'icon' && (
            <svg className="animate-spin" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24">
              <path d="M249.836 210.77c5.558-3.827 10.73-7.527 15.812-10.695 4.967-3.314 9.807-6.121 14.208-8.785 2.18-1.362 4.374-2.515 6.425-3.673l5.873-3.281c0.945-0.551 1.789-0.953 2.625-1.377l2.425-1.226 4.381-2.233 1.954-1.004 2.219-1.093 3.918-1.924 7.184-3.527c2.883-1.44 5.996-3.272 8.694-5.22 26.969-19.458 33.057-57.094 13.599-84.063-19.458-26.968-57.094-33.057-84.063-13.599l-6.49 4.682-3.54 2.554-2.071 1.499-2.62 1.947-5.824 4.351a7267.87 7267.87 0 0 0-3.193 2.399c-1.091 0.824-2.25 1.676-3.282 2.533a33346.62 33346.62 0 0 1-6.735 5.441c-2.343 1.915-4.833 3.859-7.308 6.046-4.991 4.313-10.423 8.905-15.952 14.121-5.645 5.071-11.353 10.792-17.394 16.739-5.886 6.125-12.079 12.515-18.185 19.505-12.303 13.875-24.827 29.53-36.839 46.835a494.61 494.61 0 0 0-33.896 56.497 491.342 491.342 0 0 0-27.329 64.159c-1.02 2.77-1.888 5.605-2.789 8.428l-2.688 8.477c-1.692 5.691-3.266 11.429-4.857 17.152l-2.135 8.669c-0.683 2.896-1.479 5.756-2.051 8.682l-1.84 8.729-0.914 4.358-0.785 4.387a479.254 479.254 0 0 0-7.583 69.967c-0.302 5.759-0.239 11.514-0.279 17.214l-0.017 4.267c-0.001 1.42 0.069 2.841 0.101 4.257l0.25 8.464 0.127 4.204 0.264 4.188 0.531 8.317 0.278 4.451 0.399 3.933 0.792 7.821c0.14 1.313 0.244 2.561 0.412 3.918l0.527 4.098 1.056 8.115c0.185 1.337 0.33 2.695 0.549 4.002l0.648 3.91 1.289 7.744c1.825 10.246 3.911 20.188 6.263 29.766a463.195 463.195 0 0 0 16.342 52.81l2.255 5.904 1.108 2.899 1.186 2.836 4.611 10.976c3.247 7.033 6.19 13.723 9.353 19.831 6.048 12.328 12.043 22.661 17.007 31.096 5.121 8.359 9.212 14.84 12.197 19.141l4.472 6.638-3.293-7.292c-2.209-4.713-5.148-11.776-8.748-20.761-3.443-9.059-7.545-20.055-11.346-32.919-2.041-6.376-3.771-13.301-5.726-20.516l-2.612-11.204-0.667-2.878-0.583-2.935-1.183-5.957c-3.105-16.055-5.568-33.549-6.889-52.052-0.668-9.251-1.027-18.753-1.1-28.437l0.03-7.3 0.014-3.67c0.002-1.227 0.084-2.416 0.122-3.629l0.284-7.263 0.139-3.644c0.053-1.229 0.166-2.577 0.247-3.863a35704.717 35704.717 0 0 1 0.798-11.787l0.017-0.247c0.013 0.588 0.018 0.028 0.027 0.098l0.05-0.472 0.101-0.945 0.2-1.891 0.8-7.581 0.4-3.801 0.535-3.801 1.069-7.62c0.187-1.271 0.335-2.545 0.555-3.815l0.67-3.811c0.909-5.082 1.708-10.185 2.859-15.253a424.734 424.734 0 0 1 17.057-60.03l1.316-3.663 1.437-3.623 2.859-7.225c0.907-2.417 2.03-4.761 3.033-7.135l3.079-7.082c2.208-4.653 4.37-9.295 6.624-13.867l3.508-6.783c1.167-2.252 2.294-4.513 3.565-6.702a414.503 414.503 0 0 1 31.89-49.502 407.116 407.116 0 0 1 35.476-41.25 406.598 406.598 0 0 1 35.793-32.288c5.751-4.687 11.515-8.857 16.918-12.861zM1023.966 510.486l-0.001-0.005-0.875-7.954-1.051-9.554-0.687-6.125-1.153-8.152c-0.828-5.729-1.741-12.089-2.813-18.907l-4.259-20.887c-0.691-3.726-1.738-7.517-2.729-11.425l-3.102-12.024c-0.558-2.048-1.019-4.142-1.677-6.221l-1.958-6.314-4.07-13.021-1.049-3.333-1.211-3.324c-0.814-2.223-1.638-4.467-2.469-6.732-1.673-4.522-3.34-9.131-5.115-13.781l-5.938-13.981-3.046-7.123c-1.037-2.384-2.247-4.72-3.375-7.102l-6.997-14.388c-0.569-1.22-1.222-2.408-1.877-3.598l-1.958-3.583-3.95-7.211-3.995-7.265c-1.354-2.422-2.881-4.773-4.324-7.175l-8.875-14.427c-12.567-18.998-26.533-37.793-42.018-55.643-15.662-17.71-32.638-34.534-50.581-50.045a527.617 527.617 0 0 0-56.726-41.602c-19.622-12.201-39.702-22.647-59.484-31.64l-14.925-6.188c-2.47-0.995-4.881-2.072-7.356-2.979l-7.402-2.651-7.306-2.609-3.615-1.289c-1.198-0.434-2.394-0.863-3.618-1.21l-14.37-4.353c-2.366-0.691-4.68-1.466-7.035-2.069l-7.02-1.754-13.669-3.402c-4.524-0.941-8.985-1.788-13.341-2.655l-6.47-1.271-3.184-0.621-3.186-0.465-12.373-1.797-5.96-0.862c-1.957-0.298-3.928-0.403-5.85-0.61l-11.239-1.057c-3.638-0.329-7.151-0.735-10.598-0.81l-19.18-0.823-16.258 0.11-6.935 0.057c-2.177 0.091-4.219 0.237-6.115 0.34l-9.619 0.566-7.982 0.472 7.959 0.875 9.529 1.05c1.872 0.215 3.884 0.411 6.023 0.683l6.797 1.101 15.801 2.578 18.393 3.951c3.283 0.628 6.614 1.603 10.051 2.514l10.571 2.838c1.801 0.509 3.644 0.92 5.469 1.526l5.542 1.793 11.432 3.697 2.927 0.946 2.914 1.104 5.902 2.242c3.965 1.517 8.007 3.017 12.084 4.613l12.243 5.366 6.241 2.733c2.088 0.929 4.128 2.029 6.212 3.044l12.59 6.277c1.068 0.506 2.106 1.094 3.145 1.685l3.131 1.761 6.302 3.542 6.353 3.568c2.118 1.209 4.165 2.586 6.263 3.878l12.601 7.922c16.565 11.247 32.949 23.681 48.48 37.44a473.639 473.639 0 0 1 43.435 44.87 467.917 467.917 0 0 1 35.892 50.115c10.476 17.304 19.389 34.971 27.062 52.322 1.761 4.404 3.506 8.772 5.234 13.098 0.843 2.166 1.771 4.273 2.532 6.444l2.224 6.49 2.201 6.396 1.093 3.162c0.368 1.047 0.734 2.092 1.019 3.166l3.633 12.572c0.578 2.068 1.242 4.086 1.738 6.146l1.441 6.137 2.829 11.931 2.152 11.645 1.045 5.64 0.514 2.772 0.362 2.779 1.423 10.784 0.697 5.188c0.245 1.704 0.3 3.423 0.458 5.098l0.794 9.786c0.249 3.167 0.584 6.22 0.595 9.223l0.516 16.686-0.346 13.152-0.109 5.579-0.343 6.014-0.567 9.595-0.472 7.988c-0.169 3.219-0.107 6.829 0.256 10.138 3.638 33.056 33.383 56.904 66.438 53.267 33.056-3.637 56.905-33.382 53.268-66.438zM885.176 762.451l-4.868 5.897c-1.711 2.052-3.44 4.238-5.4 6.399-3.858 4.365-7.946 9.128-12.608 13.957-4.517 4.944-9.632 9.919-14.922 15.205-5.467 5.131-11.147 10.547-17.374 15.864-12.349 10.726-26.262 21.624-41.613 32.046a434.435 434.435 0 0 1-50.026 29.303 431.157 431.157 0 0 1-56.59 23.39c-2.436 0.874-4.935 1.6-7.419 2.361l-7.455 2.279c-5.006 1.425-10.053 2.742-15.078 4.091-2.536 0.593-5.075 1.187-7.617 1.78-2.545 0.566-5.051 1.25-7.622 1.714l-7.663 1.523-3.822 0.763-3.851 0.64a419.278 419.278 0 0 1-61.304 5.938c-5.039 0.219-10.081 0.088-15.068 0.072l-3.733-0.022c-1.238-0.012-2.392-0.1-3.587-0.145l-7.067-0.313-3.505-0.146-3.997-0.27-7.961-0.537-1.981-0.133-0.989-0.067-0.494-0.033c0.221-0.008-0.844-0.005 0.433-0.022l-0.226-0.025-3.593-0.396-7.127-0.78a406.62 406.62 0 0 1-53.494-10.013 402.48 402.48 0 0 1-45.808-14.792l-5.111-2.022-2.511-0.99-2.452-1.066-9.494-4.124c-6.074-2.917-11.861-5.522-17.131-8.352-10.648-5.379-19.552-10.718-26.826-15.11l-1.338-0.807a1085.391 1085.391 0 0 0-3.457-2.276l-4.116-2.687c-0.638-0.414-1.252-0.813-1.842-1.194l-2.021-1.354-3.621-2.439-6.637-4.472c-2.685-1.782-5.825-3.567-8.857-4.938-30.307-13.689-65.973-0.218-79.662 30.089-13.689 30.308-0.218 65.974 30.089 79.663l7.293 3.294 3.979 1.797 2.369 1.063 2.994 1.302c2.073 0.896 4.3 1.857 6.676 2.885l3.672 1.574 1.917 0.819 1.9 0.745c10.22 4.014 22.646 8.772 37.189 13.242 7.215 2.375 15.042 4.443 23.216 6.727l12.687 3.1 3.261 0.787 3.325 0.701 6.75 1.415c18.195 3.715 38.044 6.719 59.054 8.439a494.284 494.284 0 0 0 65.863 0.997l8.535-0.519 4.285-0.266 0.268-0.017c1.44-0.02 0.541-0.02 0.927-0.03l0.492-0.051 0.986-0.1 1.977-0.201 7.938-0.807 3.991-0.406 4.502-0.554 9.015-1.133c1.492-0.2 3.034-0.365 4.486-0.598l4.344-0.709c5.795-0.965 11.61-1.832 17.399-3.066a485.178 485.178 0 0 0 68.692-18.701l4.2-1.463 4.157-1.588 8.292-3.176c2.771-1.016 5.468-2.251 8.194-3.37l8.134-3.434c5.351-2.451 10.685-4.869 15.941-7.39l7.805-3.918c2.591-1.307 5.188-2.576 7.712-3.991a474.344 474.344 0 0 0 57.071-35.83 467.174 467.174 0 0 0 47.72-40.068 466.596 466.596 0 0 0 37.51-40.586c5.455-6.542 10.335-13.082 14.998-19.24 4.483-6.313 8.789-12.218 12.512-18 3.868-5.667 7.179-11.177 10.297-16.204 1.589-2.492 2.957-4.989 4.318-7.332 1.349-2.348 2.635-4.586 3.854-6.711 4.686-8.611 8.271-15.384 10.509-20.116l3.527-7.185-4.682 6.489c-2.985 4.266-7.65 10.33-13.635 17.935z"></path>
            </svg>
          )}
        </div>
      ) : null}
    </div>
  )
}
`;function CR(){return n.jsx(ee,{files:{index:bR,List:SR,Input:NR,api:wR,Spin:_R},caseRender:n.jsx(fb,{})})}function kR(){const[t,e]=j.useState(0);function i(){e(t+1)}return n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsxs("div",{children:[n.jsxs("div",{children:["counter: ",t]}),n.jsxs("div",{className:"mt-4",children:["counter: ",t]})]}),n.jsx("button",{onClick:i,children:"counter++"})]})}const MR=`import {useState} from 'react'

export default function Index() {
  const [counter, setCounter] = useState(0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <div>counter: {counter}</div>
        <div className="mt-4">counter: {counter}</div>
      </div>
      <button onClick={__clickHanler}>counter++</button>
    </div>
  )
}
`;function AR(){return n.jsx(ee,{files:{index:MR},caseRender:n.jsx(kR,{})})}function RR(){const[t,e]=j.useState(0),i=j.useDeferredValue(t);function o(){e(t+1)}return n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsxs("div",{children:[n.jsxs("div",{children:["counter: ",t]}),n.jsxs("div",{className:"mt-4",children:["counter: ",i]})]}),n.jsx("button",{onClick:o,children:"counter++"})]})}const LR=`import {useState, useDeferredValue} from 'react'

export default function Index() {
  const [counter, setCounter] = useState(0)
  const deferred = useDeferredValue(counter)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <div>counter: {counter}</div>
        <div className='mt-4'>counter: {deferred}</div>
      </div>
      <button onClick={__clickHanler}>counter++</button>
    </div>
  )
}
`;function TR(){return n.jsx(ee,{files:{index:LR},caseRender:n.jsx(RR,{})})}const ER=({counter:t})=>{const e=performance.now();for(;performance.now()-e<200;);return n.jsxs("div",{className:"mt-4",children:["Deferred: ",t]})};function $R(){const[t,e]=j.useState(0),i=j.useDeferredValue(t,0);function o(){e(t+1)}return n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsxs("div",{children:[n.jsxs("div",{children:["counter: ",t]}),n.jsx(ER,{counter:i})]}),n.jsx("button",{onClick:o,children:"counter++"})]})}const DR=`import {useState, useDeferredValue} from 'react'
import Expensive from './expensive'

export default function Index() {
  const [counter, setCounter] = useState(0)
  const deferred = useDeferredValue(counter, 0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <div>counter: {counter}</div>
        <Expensive counter={deferred} />
      </div>
      <button onClick={__clickHanler}>counter++</button>
    </div>
  )
}`,OR=`const Expensive = ({counter}) => {
  const start = performance.now()
  while (performance.now() - start < 200) {}
  return (
    <div className="mt-4">Deferred: {counter}</div>
  )
}

export default Expensive`;function BR(){return n.jsx(ee,{files:{index:DR,Expensive:OR},caseRender:n.jsx($R,{})})}function zR({counter:t}){let e=performance.now();for(;performance.now()-e<1;);return n.jsx("li",{children:t})}const UR=({counter:t})=>{let e=[];for(let i=0;i<200;i++)e.push(n.jsx(zR,{counter:t},i));return n.jsxs("div",{className:"mt-4 text-green-500",children:[n.jsxs("div",{children:["Deferred: ",t]}),n.jsx("ul",{className:"h-32 hidden",children:e})]})},PR=j.memo(UR);function HR(){const[t,e]=j.useState(0),i=j.useDeferredValue(t);function o(){e(t+1)}return n.jsxs("div",{className:"flex justify-between items-center",children:[n.jsxs("div",{children:[n.jsxs("div",{children:["counter: ",t]}),n.jsx(PR,{counter:i})]}),n.jsx("button",{onClick:o,children:"counter++"})]})}const VR=`import {useState, useDeferredValue} from 'react'
import Expensive from './expensive'

export default function Index() {
  const [counter, setCounter] = useState(0)
  const deferred = useDeferredValue(counter)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div className='flex justify-between items-center'>
      <div>
        <div>counter: {counter}</div>
        <Expensive counter={deferred} />
      </div>
      <button onClick={__clickHanler}>counter++</button>
    </div>
  )
}`,qR=`import {memo} from 'react'
import SlowItem from './slow-item'

const Expensive = ({counter}) => {
  let items = []
  for (let i = 0; i < 200; i++) {
    items.push(<SlowItem key={i} counter={counter} />);
  }

  return (
    <div className='mt-4 text-green-500'>
      <div>Deferred: {counter}</div>
      <ul className='h-32 hidden'>
        {items}
      </ul>
    </div>
  );
}

export default memo(Expensive)`,FR=`function SlowItem({counter}) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <li>{counter}</li>
  )
}

export default SlowItem`;function XR(){return n.jsx(ee,{files:{index:VR,Expensive:qR,SlowItem:FR},caseRender:n.jsx(HR,{})})}function z1(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"重头戏来了！"}),`
`,n.jsx(e.p,{children:"在进一步学习之前，道友们先操作感受一下这个案例中，搜索时 loading 的交互状态。在输入框中，快速输入任意内容。"}),`
`,n.jsx(Wn,{reload:!0,children:n.jsx(fb,{})}),`
`,n.jsx(e.p,{children:"然后再对比一下前后两种 Loading 交互方式的区别。"}),`
`,n.jsx(Wn,{children:n.jsx(yR,{})}),`
`,n.jsx(e.p,{children:"很显然，大多数时候，第一种 Loading 交互方案的体验是更好的。"}),`
`,n.jsx(e.p,{children:"他的具体表现为：初始化时，显示 Skeleton 组件，表示此时列表中没有内容，即将加载新的内容进来。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"更新时，保持现有列表"}),"，可在此的基础之上显示 Loading/蒙层/透明度，如果你确定接口请求的时间非常短，也可以没有任何 Loading 显示"]}),`
`,n.jsx(e.p,{children:"在前面的学习中，我们利用 Suspense 与 use 轻松做到了第二种交互方案，这种交互方案无论是在初始化还是在更新时，都是通过显示 Skeleton 来表示请求正在发生。接下来，我们需要学习如何利用新的知识，来做到第一种交互方案。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"useDeferredValue"})}),`
`,n.jsx(e.p,{children:"在 React 并发模式的基础之上，我们可以利用 useDeferredValue 在不变动代码顺序的情况之下，推迟指定 UI 更新任务的执行。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"并发模式的基础理论详细学习，你需要关注我的 React 知命境"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const deferredValue = useDeferredValue(value, initialValue?)
`})}),`
`,n.jsx(e.p,{children:"对于刚接触的道友们来说，useDeferredValue 理解起来比较困难，我们循序渐进的用 4 个案例来理解一下。"}),`
`,n.jsx(e.p,{children:"首先，在正常情况下，一个 state 的变化，会导致 UI 发生变化。"}),`
`,n.jsxs(e.p,{children:["例如下面这个案例，状态 ",n.jsx(e.code,{children:"counter"})," 被两个元素使用，这两个元素的更改，实际上是",n.jsx(e.strong,{children:"一个任务"}),"，他们必定会同时响应 counter 的变化。"]}),`
`,n.jsx(e.p,{children:"因此，当你快速点击按钮时，两个元素的变化是同时进行的。"}),`
`,n.jsx(AR,{}),`
`,n.jsx(e.p,{children:"这个时候，我们可以利用 useDeferredValue，把他们拆分成两个任务。"}),`
`,n.jsx(TR,{}),`
`,n.jsx(e.p,{children:"注意看，我们使用 counter 作为 useDeferredValue 的初始值，并将其返回值替换第二个元素"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const deferred = useDeferredValue(counter)
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div className='mt-4'>counter: {deferred}</div>
`})}),`
`,n.jsx(e.p,{children:"此时，第二个元素的更新，就不再与第一个元素同步。它更新的优先级被降低。这个时候它的执行在理论上是可以被更高的优先级插队和中断的。"}),`
`,n.jsx(e.p,{children:"快速点击按钮查看一下演示效果，但是由于渲染都太短了，我们肉眼无法区分出来两个任务已经被分开了，因此，从视觉上的表现结果和刚才的案例没啥区别。"}),`
`,n.jsx(e.p,{children:"为了看出区别，我们把第二个元素重构成一个子组件，并模拟成一个耗时组件"}),`
`,n.jsx(BR,{}),`
`,n.jsx(e.p,{children:"快速点击按钮，此时我们发现，两个按钮的更新可以区分开了。并且在快速点击时，第二个 counter 的更新，会落后于第一个 counter，此时表示，我们可以利用 useDeferredValue 推迟 UI 的更新。将对应任务的优先级降低，使其可以被插队与中断。"}),`
`,n.jsxs(e.p,{children:["此时我们也发现另外一个情况，那就是 counter 直接对应的高优先级执行也没有那么流畅，这是为什么呢？其实很简单，因为在我们的模拟案例中，",n.jsx(e.strong,{children:"并没有把耗时定位在渲染上"}),"。这就和实际的情况不太一样了。我们把耗时写在了 Expensive 函数里，而这个函数每次都会执行，它的执行阻塞了渲染。所以我们会觉得第一个 counter 的更新变得比较卡顿"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"所以这里我们一定要区分开渲染任务和 Expensive 函数，他们是不同的，UI 渲染是一个异步任务，而 Expensive 函数是同步执行的。useDeferredValue 推迟的是 UI 渲染任务。因此，我们需要特别注意的是，不要在同步逻辑上执行过多的耗时任务。"}),`
`]}),`
`,n.jsx(e.p,{children:"这里我们可以通过任务拆分的方式，把执行耗时时间分散到更多的子组件中去，这样 React 就可以利用任务中断的机制，在不阻塞渲染的情况下，中断低优先级的任务。"}),`
`,n.jsx(e.p,{children:"再来感受一下演示结果，我们就发现，第一个 counter 的更新也变得非常流畅了。"}),`
`,n.jsx(XR,{}),`
`,n.jsx(e.p,{children:"此时我们注意观察，不要错漏这个细节。slowList 中包含了 250 个子组件。每个子组件都渲染 1ms，那么整个组件渲染就需要耗时至少 250ms."}),`
`,n.jsx(e.p,{children:"在父组件中，我们把 deferred 传递给 Expensive"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<Expensive counter={deferred} />
`})}),`
`,n.jsx(e.p,{children:"那么此时表示，Expensive 的 UI 更新任务是低优先级。counter 对应的任务可以中断它的执行。"}),`
`,n.jsx(e.p,{children:"此时一个很明显的区别就是，counter 的 UI 变化变得更加流畅了。这是因为耗时被拆分到了多个子组件中，React 就有机会中断这些函数的执行，并执行优先级更高的任务，以确保高优先级任务的流畅。"}),`
`,n.jsxs(e.p,{children:["如果你没有使用 React Compiler，你需要使用 memo 手动缓存 ",n.jsx(e.code,{children:"Expensive"}),"。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`export default memo(function Expensive({ text }) {
  // ...
});
`})}),`
`,n.jsx(e.p,{children:"当更新发生时，useDefferdValue 会首先使用旧值传递给组件。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<Expensive counter={deferred} />
`})}),`
`,n.jsx(e.p,{children:"因此，当 counter 发生变化时，deferred 依然是旧值，那么此时，如果我们使用 memo 包裹，Expensive 的 props 就没有发生变化，我们可以跳过此次针对 Expensive 的更新。所以当我们快速点击时，Expensive 总是接受到旧值，它本身的渲染也会被中断，因此最终的表现结果是，当我们连续点击 7 次，counter 从 0 依次变成 7，而 deferred 会直接从 0 变成 7."}),`
`,n.jsx(e.p,{children:"这跟 React 的性能优化策略有关。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"2"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"运行原理"})}),`
`,n.jsx(e.p,{children:"看了上面两个例子，肯定还是有一部分人会觉得很懵，不要急，接下来我们把运行原理分析一下，整个情况就清晰了。"}),`
`,n.jsx(e.p,{children:"useDeferredValue 会尝试将 UI 任务更新两次。"}),`
`,n.jsxs(e.p,{children:["第一次，会给子组件传递旧值。此时 ",n.jsx(e.code,{children:"Expensive"})," 接收到的 props 会与上一次完全相同。如果结合了 React.memo，那么该组件就不会重新渲染。该组件可以重复使用之前的渲染结果"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Compiler 编译之后不需要 memo"}),`
`]}),`
`,n.jsxs(e.p,{children:["此时，高优先级的任务渲染会发生，渲染完成之后，将会开始第二次渲染。此时，将会传入刚才更新之后的新值。对于 ",n.jsx(e.code,{children:"Expensive"})," 而言，props 发生了变化，整个组件会重新渲染。"]}),`
`,n.jsx(e.p,{children:"我们通常会将已经非常明确的耗时任务标记为 deferred，因此，这些任务都被视为低优先级。当重要的高优先级更新已经完成，低优先级任务在第二次渲染时尝试更新..."}),`
`,n.jsx(e.p,{children:"在它第二次更新的过程中，如果又有新的高优先级任务进来，那么 React 就会中断并放弃第二次更新，去执行高优先级的任务。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"注意：是中断，并放弃这次更新，所以表现出来的结果就是，中间会漏掉许多任务的执行"}),`
`]}),`
`,n.jsx(e.p,{children:"这样的运行机制有一个非常重要的好处。"}),`
`,n.jsx(e.p,{children:"那就是，如果你的电脑性能足够强悍，那么第二次的更新可能会快速完成，高优先级的任务来不及中断，那么我们的页面响应就是非常理想的。"}),`
`,n.jsx(e.p,{children:"但是如果我们的电脑性能比较差，第二次更新还没完成，新的高优先级任务又来了，那么就可以通过中断的方式，降级处理，保证重要 UI 的流畅，放弃低优先级任务。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"在不同性能的设备上，有不同的反应，这个是跟防抖、节流的最重要的区别"}),`
`]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"3"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"重新分析取消请求案例"})}),`
`,n.jsx(e.p,{children:"那我们回过头来，分析一下最开始的那个案例，重新看一眼代码"}),`
`,n.jsx(CR,{}),`
`,n.jsx(e.p,{children:"这里我们将 promise 做为 state，当 promise 被重新赋值时，List 会经历两次更新。"}),`
`,n.jsx(e.p,{children:"首先点击事件触发，请求立即发生。promise 被改变。触发组件更新。"}),`
`,n.jsx(e.p,{children:"第一次更新时，deferred 使用旧值传参，此时对于 List 而言，api 没有发生变化。因此，利用这个机制，我们可以阻止 Suspense 直接渲染成 fallback."}),`
`,n.jsx(e.p,{children:"在 Suspense 包裹之下，只有当接口请求成功之后，deferred 的第二次更新才会发生，因此，在这个过程中，如果我们快速进行第二次点击，可以直接取消上一次请求，让第二次更新来不及执行。此时新的请求发生。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"4"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"总结"})}),`
`,n.jsx(e.p,{children:"这种场景的最佳实践代码非常的简洁和优雅。写起来也很舒服，性能也非常强悍。但是理解起来会比较困难。因此想要做到灵活运用，还需要多多消化。"}),`
`,n.jsx(e.p,{children:"但是，等你彻底掌握它之后，你就会发现 React 19 在异步交互上真的太优雅了。这样的开发体验，是依赖 useEffect 完全比不了的。"})]})}function GR(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(z1,{...t})}):z1(t)}function IR(){return n.jsx(ae,{renderArticle:t=>n.jsx(GR,{components:{code:t}})})}const YR=({promise:t})=>{const{value:e}=j.use(t);return n.jsxs(we,{className:"border border-blue-100 p-4 rounded",children:[n.jsx(ns,{}),n.jsxs("div",{className:"flex-1 ml-3",children:[n.jsx("div",{children:"Heads Up!"}),n.jsx("div",{className:"mt-1 text-gray-600",children:e})]})]})},ZR="https://echo.apifox.com/delay/1";var xb=new Headers;xb.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var KR={method:"GET",headers:xb,redirect:"follow",data:"hex"};const U1=async()=>(await fetch(ZR,KR),{value:Ce()});function WR(){const[t,e]=j.useState(U1()),[i,o]=j.useTransition();function c(){o(()=>{e(U1())})}return n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"text-right mb-4",children:n.jsx("button",{onClick:c,children:"更新数据"})}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(_c,{loading:i,children:n.jsx(YR,{promise:t})})})]})}const QR=`import {use, useState, Suspense, useTransition} from 'react'
import Message from './Message'
import Skeleton from 'components/Skeleton'
import Spin from 'components/Spin'
import {getMessage} from './api'

export default function Demo01() {
  const [promise, update] = useState(getMessage())
  const [isPending, startTransition] = useTransition()

  function __handler() {
    startTransition(() => {
      update(getMessage())
    })
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button onClick={__handler}>更新数据</button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Spin loading={isPending}>
          <Message promise={promise} />
        </Spin>
      </Suspense>
    </>
  )
}
`,JR=`import {MapPinPlus} from 'lucide-react'
import Flex from 'components/Flex'
import { use } from 'react'

const Message = ({promise}) => {
  const {value} = use(promise)
  return (
    <Flex className='border border-blue-100 p-4 rounded'>
      <MapPinPlus />
      <div className='flex-1 ml-3'>
        <div>Heads Up!</div>
        <div className='mt-1 text-gray-600'>{value}</div>
      </div>
    </Flex>
  )
}

export default Message
`,eL=`import {createRandomMessage} from 'utils'

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

export const getMessage = async () => {
  await fetch(url, requestOptions)
  return { value: createRandomMessage() }
}
`;function nL(){return n.jsx(ee,{files:{index:QR,message:JR,api:eL},caseRender:n.jsx(WR,{})})}const tL="https://randomuser.me",P1=t=>{const e=new URLSearchParams({inc:"name,gender,email,nat,picture",results:t,noinfo:!0});let i=new AbortController,o=i.signal;const c=new Promise(m=>{fetch(`${tL}/api/?${e.toString()}`,{signal:o}).then(d=>{m(d.json())}).catch(()=>{console.log("接口成功取消！")})});return c.cancel=()=>{i&&i.abort()},c};function sL(...t){return t.filter(Boolean).join(" ")}function rL({tabs:t,onSwitch:e}){return n.jsxs("div",{children:[n.jsxs("div",{className:"hidden",children:[n.jsx("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),n.jsx("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:t.find(i=>i.current).name,onChange:i=>e(i.target.selectedIndex),children:t.map(i=>n.jsx("option",{children:i.name},i.name))})]}),n.jsx("div",{className:"block",children:n.jsx("nav",{className:"flex space-x-4","aria-label":"Tabs",children:t.map((i,o)=>n.jsx("a",{href:i.href,className:sL(i.current?"bg-indigo-100 text-indigo-700":"text-gray-500 hover:text-gray-700","rounded-md px-3 py-2 text-sm font-medium"),"aria-current":i.current?"page":void 0,onClick:c=>{c.preventDefault(),e(o)},children:i.name},i.name))})})]})}function iL({promise:t}){const{results:e}=j.use(t);return console.log("List with use renderred."),n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:Ce()})]})]},`v${o}`))})}const om=[{name:"My Account",href:"#",current:!0},{name:"Company",href:"#",current:!1},{name:"Team Members",href:"#",current:!1},{name:"Billing",href:"#",current:!1}];function aL(){const[t,e]=j.useState(0),[i,o]=j.useState(()=>P1(5)),c=j.useDeferredValue(i);function m(d){om[t].current=!1,om[d].current=!0,e(d),i.cancel(),o(P1(5))}return n.jsxs("div",{children:[n.jsx(rL,{tabs:om,onSwitch:m}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(_c,{loading:c!==i,type:"mask",children:n.jsx(iL,{promise:c})})})]})}const oL=`import {useState, Suspense, useDeferredValue} from 'react'
import Skeleton from 'components/Skeleton'
import Spin from 'components/Spin'
import {fetchListWithCancel} from './api'
import Tabs from './Tabs'
import List from './List'


const tabs = [
  { name: 'My Account', href: '#', current: true },
  { name: 'Company', href: '#', current: false },
  { name: 'Team Members', href: '#', current: false },
  { name: 'Billing', href: '#', current: false },
]

export default function Example() {
  const [current, switchToSelected] = useState(0)
  const [promise, update] = useState(() => fetchListWithCancel(5))
  const deferred = useDeferredValue(promise)

  function __handler(index) {
    tabs[current].current = false
    tabs[index].current = true
    switchToSelected(index)

    promise.cancel()
    update(fetchListWithCancel(5))
  }

  return (
    <div>
      <Tabs tabs={tabs} onSwitch={__handler} />

      <Suspense fallback={<Skeleton />}>
        <Spin loading={deferred !== promise} type='mask'>
          <List promise={deferred} />
        </Spin>
      </Suspense>
    </div>
  )
}
`,lL=`function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs({tabs, onSwitch}) {
  return (
    <div>
      <div className="hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          defaultValue={tabs.find((tab) => tab.current).name}
          onChange={(e) => onSwitch(e.target.selectedIndex)}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab, i) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                'rounded-md px-3 py-2 text-sm font-medium',
              )}
              aria-current={tab.current ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                onSwitch(i)
              }}
            >
              {tab.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
`,cL=`import { use } from 'react';
import { createRandomMessage } from 'utils'

export default function CurrentList({promise}) {
  const {results} = use(promise)
  console.log('List with use renderred.')
  return (
    <div>
      {results.map((item, i) => (
        <div className='flex border p-4 items-center my-4 rounded' key={\`v\${i}\`}>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{createRandomMessage()}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,uL=`export const host = 'https://randomuser.me'

export const fetchListWithCancel = (i) => {
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: i,
    noinfo: true
  })
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(\`\${host}/api/?\${query.toString()}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;function dL(){return n.jsx(ee,{files:{index:oL,tab:lL,list:cL,api:uL},caseRender:n.jsx(aL,{})})}function H1(t){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"useTransition 与 useDeferredValue 有几乎一致的作用。他们都可以降低 UI 任务更新的优先级。只是在语法上有一些不太一样。因此这一章我们主要重点是介绍 useTransition 的语法，以及它与 useDeferredValue 的细微差异。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const [isPending, startTransition] = useTransition()
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"startTransition"})," 可以标记一个或者多个状态的 ",n.jsx(e.code,{children:"set"})," 方法，将他们标记为 ",n.jsx(e.code,{children:"transition"}),"，也就是调低他们更新的优先级。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"但是这里需要注意的是，被调低的不是 set 方法本身的执行，而是其对应的 UI 更新。"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"isPending"})," 表示是否还有未完成的 UI 更新任务。我们可以利用这个状态来判断请求是否正在发生。来看一个完整的演示案例，点击按钮更新数据时，注意观察交互。"]}),`
`,n.jsx(nL,{}),`
`,n.jsx(e.p,{children:"但是这里需要注意的是，被调低的不是 set 方法本身的执行，而是其对应的 UI 更新。因此当我们连续点击 10 次按钮时，update 就紧跟着会执行 10 次。只是在目前的 Suspense 的机制中，会将 10 次接口请求串行执行"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"这个机制目前存在争议，可能会在未来发生改变"}),`
`]}),`
`,n.jsx(e.p,{children:"当我试图使用这种方案取消上一次请求时，我们会发生并没有效果，这里的原因是因为状态 promise 在 update 执行完之后，就已经交给 Suspense 的机制去处理了，React 并没有支持这种中断机制。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function __handler() {
  startTransition(() => {
    promise.cancel()
    update(getMessage())
  })
}
`})}),`
`,n.jsx(e.p,{children:"因此，我们可以想办法在 promise 交给 Suspense 处理之前中断请求，在上一章中，我们使用了 useDeferredValue 的机制做到了这个事情。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`export default function App() {
  const [promise, update] = useState(fetchListWithCancel)
  const deferred = useDeferredValue(promise)


  function __inputChange(e) {
    promise.cancel()
    update(fetchListWithCancel())
  }
  ...
`})}),`
`,n.jsx(e.p,{children:"这里我们发现，我们第一时间交给 Suspense 的处理的并不是 promise，而是 deferred，因此我们可以在这之前，中断请求。"}),`
`,n.jsx(e.p,{children:"除了这个区别之外，useTransition 可以在组件顶层同时将多个 state 的 set 方法设置为低优先级。这一点是 useDeferredValue 做不到的。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState('about');
  const [other, setOther] = useState(false);

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
      setOther(true)
    });
  }
  // ...
}
`})}),`
`,n.jsx(e.p,{children:"useDeferredValue 可以在子组件中，设置来自 props 的状态延迟。这个也是 useTransition 不方便做到的"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`export default function Ex(props) {
  const deferred = useDeferredValue(props.value)
  ...
}
`})}),`
`,n.jsx(e.p,{children:"最后直接来看这个案例，大家可以通过连续快速点击多次 Tab 按钮，来验证接口是否被取消"}),`
`,n.jsx(dL,{})]})}function mL(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(H1,{...t})}):H1(t)}function pL(){return n.jsx(ae,{renderArticle:t=>n.jsx(mL,{components:{code:t}})})}function V1(t){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"我们对 React Compiler 期待已久。"}),`
`,n.jsx(e.p,{children:"自从从它第一次在 React Conf 2021 亮相。到现在 React Conf 2024 正式开源，已经过去了三年之久。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"以前叫 React Forget，现改名为 React Compiler"}),`
`]}),`
`,n.jsx(e.h3,{children:"背景"}),`
`,n.jsxs(e.p,{children:["要了解 React Compiler，这还需要从 React 的更新机制说起。",n.jsx(e.strong,{children:"React 项目中的任何一个组件发生 state 状态的变更，React 更新机制都会从最顶层的根节点开始往下递归对比，通过双缓存机制判断出哪些节点发生了变化，然后更新节点"}),"。这样的更新机制成本并不小，因为在判断过程中，如果 React 发现 ",n.jsx(e.code,{children:"props、state、context"})," 任意一个不同，那么就认为该节点被更新了。因此，冗余的 ",n.jsx(e.code,{children:"re-render"})," 在这个过程中会",n.jsx(e.strong,{children:"大量发生"}),"。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"对比的成本非常小，但是 re-render 的成本较高"}),"，当我们在短时间之内快速更改 state 时，程序大概率会存在性能问题。因此在以往的开发方式中，掌握性能优化的手段是高级 React 开发者的必备能力"]}),`
`]}),`
`,n.jsx(e.p,{children:"一个组件节点在 React 中很难被判断为没有发生过更新。因为 props 的比较总是不同的。它的比较方式如下。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{} === {} // false
`})}),`
`,n.jsx(e.p,{children:"因此，高级 React 开发者需要非常了解 React 的默认优化机制，让 props 的比较不发生，因为一旦发生，那么结果必定是 false。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"事实上，对 React 默认优化机制了解的开发者非常少，我们在开发过程中也不会为了优化这个性能去重新调整组件的分布。更多的还是使用 memo 与 useMemo/useCallback 暴力缓存节点"}),`
`]}),`
`,n.jsxs(e.p,{children:["在这样的背景之下，冗余的 ",n.jsx(e.code,{children:"re-render"})," 在大量的项目中发生。这也是为什么 React 总是呗吐槽性能不好的主要原因。当然，大多数项目并没有频繁更新 state 的需求，因此这一点性能问题表现得并不是很明显。"]}),`
`,n.jsxs(e.p,{children:["如果我们要解决冗余 re-render 的问题，需要对 React 默认优化技能有非常深刻的理解，需要对 ",n.jsx(e.code,{children:"memo、useCallback、useMemo"})," 有准确的理解。但是普通的 React 开发者很难理解他们，有的开发者虽然在项目中大量使用了，但是未必就达到了理想的效果。React Compiler 则是为了解决这个问题，它可以自动帮助我们记忆已经存在、并且没有发生更新的组件，从而解决组件冗余 ",n.jsx(e.code,{children:"re-render"})," 的问题。"]}),`
`,n.jsxs(e.p,{children:["从使用结果的体验来看，React Compiler 被集成在代码自动编译中，因此只要我们在项目中引入成功，就不再需要关注它的存在。",n.jsx(e.strong,{children:"我们的开发方式不会发生任何改变。"})," 它不会更改 React 现有的开发范式和更新方式，侵入性非常弱。这一点对于老项目来说，非常非常重要。"]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"检测"})}),`
`,n.jsxs(e.p,{children:["并非所有的组件都能被优化。因此早在 React 18 的版本中，React 官方团队就提前发布了严格模式。在顶层根节点中，套一层 ",n.jsx(e.code,{children:"StrictMode"})," 即可。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</StrictMode>
`})}),`
`,n.jsx(e.p,{children:"遵循严格模式的规范，我们的组件更容易符合 React Compiler 的优化规则。"}),`
`,n.jsx(e.p,{children:"我们可以使用如下方式首先检测代码库是否兼容。在项目根目录下执行如下指令。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx react-compiler-healthcheck
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"该脚本主要用于检测"}),`
`,n.jsxs(e.p,{children:["1、项目中有多少组件可以成功优化：",n.jsx(e.strong,{children:"越多越好"})]}),`
`,n.jsx(e.p,{children:"2、是否使用严格模式，使用了优化成功率更高"}),`
`,n.jsx(e.p,{children:"3、是否使用了与 Compiler 不兼容的三方库"}),`
`]}),`
`,n.jsx(e.p,{children:"例如，我的其中一个项目，检测结果如下"}),`
`,n.jsxs("div",{style:{color:"rgb(23, 163, 74)"},className:"border p-4 rounded",children:[n.jsx("div",{children:"Successfully compiled 38 out of 40 components. "}),n.jsx("div",{children:"StrictMode usage found."}),n.jsx("div",{children:"Found no usage of incompatible libraries."})]}),`
`,n.jsx(e.p,{children:"每一项都基本上通过了，那我就可以放心的在项目中引入对应的插件开始体验了。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"2"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"在项目中引入"})}),`
`,n.jsx(e.p,{children:"官方文档中已经明确表示，由于 JavaScript 的灵活性，Compiler 无法捕获所有可能的意外行为，甚至编译之后还会出现错误。因此，目前而言，Compiler 依然可能会有他粗糙的一面。因此，我们可以通过配置，在具体的某一个小目录中运行 Compiler。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const ReactCompilerConfig = {
  sources: (filename) => {
    return filename.indexOf('src/path/to/dir') !== -1;
  },
};
`})}),`
`,n.jsx(e.p,{children:"React Compiler 还支持对应的 eslint 插件。该插件可以独立运行。不用非得与 Compiler 一起运行。"}),`
`,n.jsx(e.p,{children:"可以使用如下指令安装该插件"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm i eslint-plugin-react-compiler
`})}),`
`,n.jsx(e.p,{children:"然后在 eslint 的配置中添加"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`module.exports = {
  plugins: [
    'eslint-plugin-react-compiler',
  ],
  rules: {
    'react-compiler/react-compiler': 2,
  },
}
`})}),`
`,n.jsx(e.p,{children:"Compiler 目前结合 Babel 插件一起使用，因此，我们首先需要在项目中引入该插件"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm i babel-plugin-react-compiler
`})}),`
`,n.jsx(e.p,{children:"然后，在不同的项目中，有不同的配置。"}),`
`,n.jsxs(e.p,{children:[n.jsxs(e.strong,{children:["添加到 ",n.jsx(e.code,{children:"Babel"})," 的配置中"]}),"，如下所示"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`module.exports = function () {
  return {
    plugins: [
      ['babel-plugin-react-compiler', ReactCompilerConfig], // must run first!
      // ...
    ],
  };
};
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"注意，该插件应该在其他 Babel 插件之前运行"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"在 vite 中使用"})}),`
`,n.jsxs(e.p,{children:["首先，我们需要安装 ",n.jsx(e.code,{children:"vite-plugin-react"}),"，注意不用搞错了，群里有的同学使用了 ",n.jsx(e.code,{children:"vite-plugin-react-swc"})," 结果搞了很久没配置成功。然后在 vite.config.js 中，添加如下配置"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`export default defineConfig(() => {
  return {
    plugins: [
      react({
        babel: {
          plugins: [
            ["babel-plugin-react-compiler", ReactCompilerConfig],
          ],
        },
      }),
    ],
    // ...
  };
});
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"在 Next.js 中使用"})}),`
`,n.jsxs(e.p,{children:["创建 ",n.jsx(e.code,{children:"babel.config.js"})," 并添加上面 Babel 同样的配置即可。"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"在 Remix 中使用"})}),`
`,n.jsx(e.p,{children:"安装如下插件，并且添加对应的配置项目。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm i vite-plugin-babel
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// vite.config.js
import babel from "vite-plugin-babel";

const ReactCompilerConfig = { /* ... */ };

export default defineConfig({
  plugins: [
    remix({ /* ... */}),
    babel({
      filter: /\\.[jt]sx?$/,
      babelConfig: {
        presets: ["@babel/preset-typescript"], // if you use TypeScript
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig],
        ],
      },
    }),
  ],
});
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"在 Webpack 中使用"})}),`
`,n.jsx(e.p,{children:"我们可以单独为 Compiler 创建一个 Loader. 代码如下所示。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const ReactCompilerConfig = { /* ... */ };
const BabelPluginReactCompiler = require('babel-plugin-react-compiler');

function reactCompilerLoader(sourceCode, sourceMap) {
  // ...
  const result = transformSync(sourceCode, {
    // ...
    plugins: [
      [BabelPluginReactCompiler, ReactCompilerConfig],
    ],
  // ...
  });

  if (result === null) {
    this.callback(
      Error(
        \`Failed to transform "\${options.filename}"\`
      )
    );
    return;
  }

  this.callback(
    null,
    result.code,
    result.map === null ? undefined : result.map
  );
}

module.exports = reactCompilerLoader;
`})}),`
`,n.jsx(e.p,{children:"我们可以在 React 官方了解到更多关于 React Compiler 的介绍与注意事项。具体地址如下"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://react.dev/learn/react-compiler",children:"https://react.dev/learn/react-compiler"})}),`
`,n.jsxs(e.p,{children:["引入成功之后，我们可以在开发者工具中的 ",n.jsx(e.code,{children:"Sources"})," 面板的 ",n.jsx(e.code,{children:"Page"})," 目录中查看编译之后的代码，长得跟右侧代码差不多就表示编译成功了。"]})]})}function hL(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(V1,{...t})}):V1(t)}function fL(){return n.jsx(ae,{renderArticle:t=>n.jsx(hL,{components:{code:t}})})}function q1(t){const e={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"也许你学习时，该方法已经得到了官方的支持"}),`
`]}),`
`,n.jsx(e.p,{children:"非常的 nice，经过几天的尝试和研究，我在 React 低版本中成功引入了 Compiler，目前已经在 vite 中运行起来了。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["我的思考过程，你可以",n.jsx(e.a,{href:"https://mp.weixin.qq.com/s/RQ1c6YdNgyG-vCCPQBFMjw",children:"点击这篇文章阅读"}),"，其他脚手架暂时还没试过，不过基本原理应该都是一致的，大家可以自己按照我的思路尝试一下"]}),`
`]}),`
`,n.jsxs(e.p,{children:["这里的关键就是在低版本中，缓存 hook ",n.jsx(e.code,{children:"useCacheMemo"})," 的缺失，当然这个名字只是一个语义化的称呼，在底层可能不一定是这个名字，我们只需要找个地方自定义这个 hook 即可。代码如下，非常的简单。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { useState } from "react";

export function c(size) {
  return useState(() => new Array(size))[0];
}
`})}),`
`,n.jsxs(e.p,{children:["我们将其存储在某一个文件中，并取名为 ",n.jsx(e.code,{children:"usecache.js"})]}),`
`,n.jsxs(e.p,{children:["接下来要在 ",n.jsx(e.code,{children:"vite.config.js"})," 中，配置具体的 ReactCompilerConfig，让 ",n.jsx(e.code,{children:"runtimeModule"})," 指向我们刚才的 usecache.js。这里的目的是重新改写 ",n.jsx(e.code,{children:"react-compiler-runtime"})," 的引用路径。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const ReactCompilerConfig = {
  runtimeModule: "@/usecache",
};
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"@/*"})," 是在 vite 中配置的路径别名，完整的配置文件如下"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const ReactCompilerConfig = {
  runtimeModule: "@/usecache",
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      }
    })
  ],
})
`})}),`
`,n.jsx(e.p,{children:"配置搞好之后，我们再引入 babel 插件，就可以正常运行了。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`yarn add babel-plugin-react-compiler
`})}),`
`,n.jsx(e.p,{children:"运行项目，查看开发者工具的 Sources 面板中的 Page 目录，我们发现 App.jsx 已经被编译成了右侧代码的样子。搞定。"})]})}function xL(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(q1,{...t})}):q1(t)}function gL(){return n.jsx(ae,{renderArticle:t=>n.jsx(xL,{components:{code:t}})})}function F1(t){const e={a:"a",code:"code",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"在 webpack 中引入会稍微麻烦一点，因为我们要自己定义一个 Loader，许多小伙伴对于 webpack 自定义 loader 比较陌生，因此我这里直接放了一个比较完整的代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const babel = require('@babel/core')


const ReactCompilerConfig = {
  // 这里是针对 react 低版本的配置，务必要按需使用
  // runtimeModule: "src/hooks/useMemoCache",
};

const BabelPluginReactCompiler = require('babel-plugin-react-compiler');

function reactCompilerLoader(sourceCode, sourceMap) {
  // ...
  const result = babel.transformSync(sourceCode, {
    // ...
    sourceFileName: this.resourcePath,
    filename: this.resourcePath,
    plugins: [
      [BabelPluginReactCompiler, ReactCompilerConfig],
    ],
    // ...
  });

  if (result === null) {
    this.callback(
      Error(
        \`Failed to transform "\${options.filename}"\`
      )
    );
    return;
  }

  this.callback(
    null,
    result.code,
    result.map === null ? undefined : result.map
  );
}

module.exports = reactCompilerLoader;
`})}),`
`,n.jsxs(e.p,{children:["定义好了这个 loader 之后，这里我们需要注意，如果你是 React 低版本，那么就需要使用我们自己定义一个 ",n.jsx(e.code,{children:"react-compiler-runtime"}),"，这里需要注意的是，与 vite 中低版本使用的项目的细微差异。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// src/hooks/useMemoCache
const React = require('react');
const $empty = Symbol.for("react.memo_cache_sentinel");
/**
 * DANGER: this hook is NEVER meant to be called directly!
 *
 * Note that this is a temporary userspace implementation of this function
 * from React 19. It is not as efficient and may invalidate more frequently
 * than the official API. Please upgrade to React 19 as soon as you can.
 **/
export function c(size: number) {
  return React.useState(() => {
    const $ = new Array(size);
    for (let ii = 0; ii < size; ii++) {
      $[ii] = $empty;
    }
    // @ts-ignore
    $[$empty] = true;
    return $;
  })[0];
}
`})}),`
`,n.jsx(e.p,{children:"然后在 Loader 中修改 ReactCompilerConfig 的配置，植入到你自己的项目中时，请一定要注意路径要对应上"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const ReactCompilerConfig = {
  runtimeModule: "src/hooks/useMemoCache",
};
`})}),`
`,n.jsx(e.p,{children:"然后在 webpack 的 Loader 配置中引入即可。"}),`
`,n.jsxs(e.p,{children:["你也可以使用 ",n.jsx(e.code,{children:"react-compiler-webpack"})," 这个插件使用。具体的使用方式请结合",n.jsx(e.a,{href:"https://github.com/SukkaW/react-compiler-webpack",children:"它的github说明使用"}),"。"]}),`
`,n.jsx(e.p,{children:"只是需要注意的是，在低版本中，我们需要额外配置 runtime 的指向"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`{
  test: /\\.[mc]?[jt]sx$/i,
  exclude: /node_modules/,
  use: [
    // babel-loader, swc-loader, esbuild-loader, or anything you like to transpile JSX should go here.
    // If you are using rspack, the rspack's buiilt-in react transformation is sufficient.
    // { loader: 'swc-loader' },
    // Now add forgetti-loader
    {
      loader: reactCompilerLoader,
      options: defineReactCompilerLoaderOption({
        runtimeModule: "src/hooks/useMemoCache"
      })
    }
  ]
}
`})})]})}function vL(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(F1,{...t})}):F1(t)}function jL(){return n.jsx(ae,{renderArticle:t=>n.jsx(vL,{components:{code:t}})})}function yL(t){return j.useState(()=>Array.from(t))[0]}function bL(){const t=yL(10);if(t[0]!=="a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac"){for(let x=0;x<10;x+=1)t[x]=Symbol.for("react.memo_cache_sentinel");t[0]="a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac"}const[e,i]=j.useState(0);let o;t[0]!==e?(o=function(){i(e+1)},t[0]=e,t[1]=o):o=t[1];const c=o;let m;t[2]===Symbol.for("react.memo_cache_sentinel")?(m=n.jsx("div",{children:"A Base Case"}),t[2]=m):m=t[2];let d;t[3]!==e?(d=n.jsxs("div",{children:["currnt count is: ",e]}),t[3]=e,t[4]=d):d=t[4];let h;t[5]!==c?(h=n.jsx("button",{onClick:c,children:"Increment"}),t[5]=c,t[6]=h):h=t[6];let f;return t[7]!==d||t[8]!==h?(f=n.jsxs("div",{children:[m,n.jsxs("div",{className:"flex items-center justify-between",children:[d,h]})]}),t[7]=d,t[8]=h,t[9]=f):f=t[9],f}const SL=`import {useState} from 'react'
import {_c} from './useCache.js'

export default function Counter() {
  const $ = _c(10);

  if ($[0] !== "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac") {
    for (let $i = 0; $i < 10; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac";
  }

  const [count, setCount] = useState(0);
  let t0;

  if ($[0] !== count) {
    t0 = function __clickHanler() {
      setCount(count + 1);
    };

    $[0] = count;
    $[1] = t0;
  } else {
    t0 = $[1];
  }

  const __clickHanler = t0;
  let t1;

  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div>A Base Case</div>;
    $[2] = t1;
  } else {
    t1 = $[2];
  }

  let t2;

  if ($[3] !== count) {
    t2 = <div>currnt count is: {count}</div>;
    $[3] = count;
    $[4] = t2;
  } else {
    t2 = $[4];
  }

  let t3;

  if ($[5] !== __clickHanler) {
    t3 = <button onClick={__clickHanler}>Increment</button>;
    $[5] = __clickHanler;
    $[6] = t3;
  } else {
    t3 = $[6];
  }

  let t4;

  if ($[7] !== t2 || $[8] !== t3) {
    t4 = (
      <div>
        {t1}
        <div className="flex items-center justify-between">
          {t2}
          {t3}
        </div>
      </div>
    );
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }

  return t4;
}
`,NL=`import {useState} from 'react'
export function _c(size) {
  return useState(() => Array.from(size))[0]
}
`,wL=`import {useState} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  function __clickHanler() {
    setCount(count + 1)
  }

  return (
    <div>
      <div>A Base Case</div>
      <div className="flex items-center justify-between">
        <div>currnt count is: {count}</div>
        <button onClick={__clickHanler}>Increment</button>
      </div>
    </div>
  )
}
`;function _L(){return n.jsx(ee,{files:{index:SL,useCache:NL,源码:wL},caseRender:n.jsx(bL,{})})}function X1(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"如何查看编译之后的代码"})}),`
`,n.jsxs(e.p,{children:["通常情况下，你只需要在合适的位置打印一个 log。然后我们就可以通过下图所示的位置，在 ",n.jsx(e.code,{children:"console"})," 面板中，点击跳转到编译之后的代码。"]}),`
`,n.jsx(e.p,{children:"当然，我们可以直接在 Sources 面板中查看。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`Chrome 开发者工具 -> Sources -> Page -> src
`})}),`
`,n.jsxs(e.p,{children:["除此之外，你也可以把代码拷贝到 ",n.jsx("a",{href:"https://playground.react.dev/",target:"_blank",children:n.jsx(e.strong,{children:"React Compiler Playground"})})," 。这是一个在线的代码编译转换工具。我们可以利用这个工具方便的将代码转换成 Compiler 编译之后的代码，学习非常方便。"]}),`
`,n.jsx(e.p,{children:"如果你存在任何疑问，完整的链接可以包含你的具体案例，在沟通和交流上非常方便。你可以在 react 的 issue 里看到大量 Compiler 不支持的骚操作。"}),`
`,n.jsx(e.p,{children:"知道了怎么查看编译之后的代码之后，那我们就需要看得懂才行。因此接下来"}),`
`,n.jsx(e.h2,{children:"2"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Symbol.for"})}),`
`,n.jsx(e.p,{children:"我本来最初的想法是看懂编译之后的代码不是很有必要。但是偶尔会出现一些情况，程序运行的结果跟我预想的不一样。"}),`
`,n.jsx(e.p,{children:"出现这种迷惑行为的时候就感觉贼困惑，为啥会这样呢？布吉岛 ～，如何调整我自己的写法呢？也不知道。我很不喜欢这种一脸懵逼的感觉。"}),`
`,n.jsx(e.p,{children:"看是得看懂才行。虽然这个代码很不像是正常人应该去阅读的代码。先来感受一下编译之后的代码长什么样，下面是一个案例的运行结果与其对应的代码。"}),`
`,n.jsx(_L,{}),`
`,n.jsxs(e.p,{children:["在 Compiler 编译后的代码中，有一个比较少见的语法会频繁出现：",n.jsx(e.code,{children:"Symbol.for"}),"，我先把这个知识点科普一下。"]}),`
`,n.jsx(e.p,{children:"Symbol 在 JavaScript 中，是一种基础数据类型。我们常常用 Symbol 来创建全局唯一值。例如，下面两个变量，虽然写法是一样的，但是他们的比较结果并不相等"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`var a = Symbol('hello')
var b = Symbol('hello')

a === b // false
`})}),`
`,n.jsx(e.p,{children:"Symbol.for 则不同，Symbol.for 传入相同字符串时，它不会重复创建不同的值。而是在后续的调用中，读取之前已经创建好的值。因此下面的代码对比结果为 true"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`var a = Symbol.for('for')
var b = Symbol.for('for')

a === b // true
`})}),`
`,n.jsxs(e.p,{children:["或者我们用另外一种说法来表达这种",n.jsx(e.strong,{children:"创建 -> 读取"}),"的过程。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// 创建一个 symbol 并放入 symbol 注册表中，键为 "foo"
Symbol.for("foo");

// 从 symbol 注册表中读取键为"foo"的 symbol
Symbol.for("foo");
`})}),`
`,n.jsxs(e.p,{children:["在 Compiler 编译后的代码中，组件依赖 ",n.jsx(e.code,{children:"useMemoCache"})," 来缓存所有运算表达式，包括组件、函数等。在下面的例子中，",n.jsx(e.code,{children:"useMemoCache"})," 传入参数为 12，说明在该组件中，有 12 个单位需要被缓存。"]}),`
`,n.jsx(e.p,{children:"在初始化时，会默认给所有的缓存变量初始一个值。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`$ = useMemoCache(12)

for (let $i = 0; $i < 12; $i += 1) {
  $[$i] = Symbol.for("react.memo_cache_sentinel");
}
`})}),`
`,n.jsxs(e.p,{children:["那么，组件就可以根据缓存值是否等于 ",n.jsx(e.code,{children:"Symbol.for"})," 的初始值，来判断某一段内容是否被初始化过。",n.jsx(e.strong,{children:"如果相等，则没有被初始化。"})]}),`
`,n.jsx(e.p,{children:"如下："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`let t1;

if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
  t1 = <div id="tips">Tab 切换</div>;
  $[1] = t1;
} else {
  t1 = $[1];
}
`})}),`
`,n.jsx(e.h2,{children:"3"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"缓存原理详细分析"})}),`
`,n.jsx(e.p,{children:"我们需要重新详细解读一下上面那段代码。这是整个编译原理的核心理论。对于每一段可缓存内容，这里以一个元素为例，"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`<div>A Base Case</div>
`})}),`
`,n.jsx(e.p,{children:"我们会先声明一个中间变量，用于接收元素对象。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`let t1
`})}),`
`,n.jsxs(e.p,{children:["但是在接收之前，我们需要判断一下是否已经初始化过。如果没有初始化，那么则执行如下逻辑，创建该元素对象。创建完成之后，赋值给 t1，并缓存在 ",n.jsx(e.code,{children:"$[1]"})," 中。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
  t1 = <div>A Base Case</div>;
  $[2] = t1;
}
`})}),`
`,n.jsxs(e.p,{children:["如果已经初始化过，那么就直接读取之前缓存在 ",n.jsx(e.code,{children:"$[1]"})," 中的值即可。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`...
} else {
  t1 = $[2];
}
`})}),`
`,n.jsx(e.p,{children:"这样，当函数组件多次执行时，该元素组件就永远只会创建一次，而不会多次创建。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["这里需要注意的是，",n.jsx(e.strong,{children:"判断成本非常低"}),"，但是创建元素的成本会偏高，因此这种置换是非常划算的，我们后续会明确用数据告诉大家判断的成本"]}),`
`]}),`
`,n.jsx(e.p,{children:"对于一个函数组件中声明的函数而言，缓存的逻辑会根据情况不同有所变化。这里主要分为两种情况，一种情况是函数内部不依赖外部状态，例如"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function __clickHanler(index) {
  tabRef.current[index].appeared = true
  setCurrent(index)
}
`})}),`
`,n.jsx(e.p,{children:"那么编译缓存逻辑与上面的元素是完全一致的，代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`let t0;

if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
  t0 = function __clickHanler(index) {
    tabRef.current[index].appeared = true;
    setCurrent(index);
  };

  $[0] = t0;
} else {
  t0 = $[0];
}
`})}),`
`,n.jsx(e.p,{children:"另外一种情况是有依赖外部状态，例如"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const [count, setCount] = useState(0)

// 此时依赖 counter，注意区分他们的细微差别
function __clickHanler() {
  setCount(count + 1)
}
`})}),`
`,n.jsx(e.p,{children:"那么编译结果，则只需要把是否重新初始化的判断条件调整一下即可"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`let t0;

if ($[0] !== count) {
  t0 = function __clickHanler() {
    setCount(count + 1);
  };

  $[0] = count;
  $[1] = t0;
} else {
  t0 = $[1];
}
`})}),`
`,n.jsx(e.p,{children:"这样，当 count 发生变化，t0 就会重新赋值，而不会采用缓存值，从而完美的绕开了闭包问题。"}),`
`,n.jsxs(e.p,{children:["除此在外，无论是函数、还是组件元素的缓存判断条件，都会优先考虑外部条件，使用 ",n.jsx(e.code,{children:"Symbol.for"})," 来判断时，则表示没有其他任何值的变化会影响到该缓存结果。"]}),`
`,n.jsx(e.p,{children:"例如，一个组件元素如下所示"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`<button onClick={__clickHanler}>counter++</button>
`})}),`
`,n.jsxs(e.p,{children:["此时它的渲染结果受到 ",n.jsx(e.code,{children:"__clickHanler"})," 的影响，因此，判断条件则不会使用 ",n.jsx(e.code,{children:"Symbol.for"}),"，编译结果如下"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`let t3;

if ($[5] !== __clickHanler) {
  t3 = <button onClick={__clickHanler}>Increment</button>;
  $[5] = __clickHanler;
  $[6] = t3;
} else {
  t3 = $[6];
}
`})}),`
`,n.jsxs(e.p,{children:["又例如下面这个元素组件，他的渲染结果受到 ",n.jsx(e.code,{children:"counter"})," 的影响。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<div>currnt count is: {count}</div>
`})}),`
`,n.jsx(e.p,{children:"因此，它的编译结果为："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`let t2;

if ($[3] !== count) {
  t2 = <div>currnt count is: {count}</div>;
  $[3] = count;
  $[4] = t2;
} else {
  t2 = $[4];
}
`})}),`
`,n.jsx(e.p,{children:"对与这样的编译细节的理解至关重要。在以后的开发中，我们就可以完全不用担心闭包问题而导致程序出现你意想不到的结果了。"}),`
`,n.jsx(e.p,{children:"所有的可缓存对象，全部都是这个类似的逻辑。他的粒度细到每一个函数，每一个元素。这一点意义非凡，他具体代表着什么，我们在后续聊性能优化的时候再来明确。"}),`
`,n.jsx(e.p,{children:"不过需要注意的是，对于 map 的循环语法，在编译结果中，缓存的是整个结果，而不是渲染出来的每一个元素。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{tabs.map((item, index) => {
  return (
    <item.component
      appearder={item.appeared}
      key={item.title}
      selected={current === index}
    />
  )
})}
`})}),`
`,n.jsx(e.p,{children:"编译结果表现如下："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`let t4;

if ($[7] !== current) {
  t4 = tabs.map((item_0, index_1) => (
    <item_0.component
      appearder={item_0.appeared}
      key={item_0.title}
      selected={current === index_1}
    />
  ));
  $[7] = current;
  $[8] = t4;
} else {
  t4 = $[8];
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"对这种情况的了解非常重要，因为有的时候我们需要做更极限的性能优化时，map 循环可能无法满足我们的需求。因为此时循环依然在执行，后面的案例中我们会更具体的分析 Map 的表现"}),`
`]}),`
`,n.jsx(e.p,{children:"目前这个阶段，我们最主要的是关心程序执行逻辑与预想的要保持一致，因此接下来，我们利用三个案例，来分析编译之后的执行过程。"}),`
`,n.jsx(e.h2,{children:"4"}),`
`,n.jsx(e.p,{children:"实践案例一：counter 递增"}),`
`,n.jsxs(e.p,{children:["通过上面对 Compiler 渲染结果的理解，我们应该已经大概知道下面这段代码最终会渲染成什么样。我们目前要思考的问题就是，这个例子，编译之后，",n.jsx(e.strong,{children:"收益表现在哪里？"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function Index() {
  const [counter, setCounter] = useState(0)

  function __clickHanler() {
    console.log(counter)
    setCounter(counter + 1)
  }

  return (
    <div>
      <div id='tips'>基础案例，state 递增</div>
      <button onClick={__clickHanler}>counter++</button>
      <div className="counter">counter: {counter}</div>
    </div>
  )
}
`})}),`
`,n.jsxs(e.p,{children:["一起来分析一下，当我们点击按钮时，此时 ",n.jsx(e.code,{children:"counter"})," 增加，因此 ",n.jsx(e.code,{children:"__clickHanler"})," 无法缓存，需要重新创建，那么 button 按钮和 counter 标签都无法缓存。"]}),`
`,n.jsxs(e.p,{children:["此时，只有 ",n.jsx(e.code,{children:"tips"})," 元素可以被缓存。但是 ",n.jsx(e.code,{children:"tips"})," 元素本身是一个基础元素，在原本的逻辑中，经历一个简单的判断就能知道不需要重新创建节点因此本案例的编译之后收益非常效果。"]}),`
`,n.jsx(e.p,{children:"编译代码结果如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function Index() {
  const $ = _c(10);

  const [counter, setCounter] = useState(0);
  let t0;

  if ($[0] !== counter) {
    t0 = function __clickHanler() {
      console.log(counter);
      setCounter(counter + 1);
    };

    $[0] = counter;
    $[1] = t0;
  } else {
    t0 = $[1];
  }

  const __clickHanler = t0;
  let t1;

  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div id="tips">基础案例，state 递增</div>;
    $[2] = t1;
  } else {
    t1 = $[2];
  }

  let t2;

  if ($[3] !== __clickHanler) {
    t2 = <button onClick={__clickHanler}>counter++</button>;
    $[3] = __clickHanler;
    $[4] = t2;
  } else {
    t2 = $[4];
  }

  let t3;

  if ($[5] !== counter) {
    t3 = <div className="counter">counter: {counter}</div>;
    $[5] = counter;
    $[6] = t3;
  } else {
    t3 = $[6];
  }

  let t4;

  if ($[7] !== t2 || $[8] !== t3) {
    t4 = (
      <div>
        {t1}
        {t2}
        {t3}
      </div>
    );
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }

  return t4;
}
`})}),`
`,n.jsx(e.h2,{children:"5"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"实践案例二：昂贵的子组件"})}),`
`,n.jsx(e.p,{children:"在上面一个例子的基础之上，我们新增一个子组件。该子组件的渲染非常耗时。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function Expensive() {
  var cur = performance.now()
  while (performance.now() - cur < 1000) {
    // block 1000ms
  }
  console.log('hellow')
  return (
    <div>我是一个耗时组件</div>
  )
}
`})}),`
`,n.jsx(e.p,{children:"父组件中引入该子组件，其他逻辑完全一致。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`function Index() {
  const [counter, setCounter] = useState(0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <div id='tips'>基础案例，state 递增</div>
      <button onClick={__clickHanler}>counter++</button>
      <div className="counter">counter: {counter}</div>
+      <Expensive />
    </div>
  )
}
`})}),`
`,n.jsxs(e.p,{children:["我们在之前「React 知命境」的学习中，对于性能优化已经有非常深厚的积累。因此我们知道，在这种情况之下，由于父组件的状态发生了变化，导致子组件 ",n.jsx(e.code,{children:"Expensive"})," 会在 counter 递增时重复执行。从而导致页面渲染时非常卡顿。"]}),`
`,n.jsx(e.p,{children:"编译之后，针对这一段逻辑的优化代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`let t4;

if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
  t4 = <Expensive />;
  $[7] = t4;
} else {
  t4 = $[7];
}
`})}),`
`,n.jsx(e.p,{children:"正如代码所表达的一样，由于这一个组件，并没有依赖任何外部状态，因此只需要在初始化时赋值一次即可。后续直接使用缓存值。"}),`
`,n.jsxs(e.p,{children:["因此，在这个案例中，Compiler 编译之后的",n.jsx(e.strong,{children:"优化效果非常明显，收益巨大"}),"。"]}),`
`,n.jsx(e.h2,{children:"6"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"实践案例三：Tab 切换"})}),`
`,n.jsx(e.p,{children:"这个案例会非常的复杂，经验稍微欠缺一点的前端开发可能都实现不了。"}),`
`,n.jsx(e.p,{children:"1、我希望首次渲染时，页面渲染更少的内容，因此此时，只能先渲染默认的 Panel。其他 Panel 需要在点击对应的按钮时，才渲染出来。"}),`
`,n.jsx(e.p,{children:"2、在切换过程中，我希望能够缓存已经渲染好的 Panel，只需要在样式上做隐藏，而不需要在后续的交互中重复渲染内容"}),`
`,n.jsx(e.p,{children:"3、当四个页面都渲染出来之后，再做切换时，此时只会有两个页面会发生变化，上一个选中的页面与下一个选中的页面。另外的页面不参与交互，则不应该 re-render。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"这个案例和要求不算特别难，但是对综合能力的要求还是蛮高的，大家有空可以自己尝试实现一下，看看能不能完全达到要求"}),`
`]}),`
`,n.jsx(e.p,{children:"这里，我主要想跟大家分享的就是 map 方法的小细节。有如下代码"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{tabs.map((item, index) => {
  return (
    <item.component
      appearder={item.appeared}
      key={item.title}
      selected={current === index}
    />
  )
})}
`})}),`
`,n.jsx(e.p,{children:"它的编译结果表现如下："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`let t4;

if ($[7] !== current) {
  t4 = tabs.map((item_0, index_1) => (
    <item_0.component
      appearder={item_0.appeared}
      key={item_0.title}
      selected={current === index_1}
    />
  ));
  $[7] = current;
  $[8] = t4;
} else {
  t4 = $[8];
}
`})}),`
`,n.jsxs(e.p,{children:["我们会发现，此时编译缓存的是整个 map 表达式，但是由于 map 表达式又依赖于 ",n.jsx(e.code,{children:"current"}),"，因此，在我们点击切换的交互过程中，每一次的 current 都会发生变化，那么这里针对 map 表达式的缓存就没有了任何意义。"]}),`
`,n.jsxs(e.p,{children:["但是实际上，我们可以观察到，我们有 4 个 Panel，点击切换的交互发生时，实际上只有两个 Pannel 发生了变化。因此，最极限的优化是，只有这两个组件对应的函数需要重新 ",n.jsx(e.code,{children:"re-render"}),"，那么我们的代码应该怎么写呢？"]}),`
`,n.jsx(e.p,{children:"其实非常简单，那就是不用 map，将数组拆开直接手写，代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`let c1 = tabRef.current[0]
let c2 = tabRef.current[1]
let c3 = tabRef.current[2]
let c4 = tabRef.current[3]
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`<c1.component appearder={c1.appeared} selected={current === 0}/>
<c2.component appearder={c2.appeared} selected={current === 1}/>
<c3.component appearder={c3.appeared} selected={current === 2}/>
<c4.component appearder={c4.appeared} selected={current === 3}/>
`})}),`
`,n.jsx(e.p,{children:"然后，我们就会发现，在编译结果中，不再缓存 map 表达式的结果，而是缓存每一个组件"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`let t5;

if ($[7] !== c1.component || $[8] !== c1.appeared || $[9] !== t4) {
  t5 = <c1.component appearder={c1.appeared} selected={t4} />;
  $[7] = c1.component;
  $[8] = c1.appeared;
  $[9] = t4;
  $[10] = t5;
} else {
  t5 = $[10];
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"这样做的收益在特定场景下的收益将会非常高。"}),`
`]}),`
`,n.jsx(e.h2,{children:"7"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"强悍的性能：细粒度记忆化更新"})}),`
`,n.jsx(e.p,{children:"经过上面的学习，想必各位道友对 React Compiler 的工作机制已经有了非常深刻的理解。此时，我们就需要分析一下，这样的记忆化更新机制，到底有多强。"}),`
`,n.jsx(e.p,{children:"首先明确一点，和 Vue 等其他框架的依赖收集不同，React Compiler 依然不做依赖收集。"}),`
`,n.jsx(e.p,{children:"React 依然通过从根节点自上而下的 diff 来找出需要更新的节点。在这个过程中，我们会通过大量的判断来决定使用缓存值。可以明确的是，Compiler 编译之后的代码，缓存命中的概率非常高，几乎所有应该缓存的元素和函数都会被缓存起来。"}),`
`,n.jsx(e.p,{children:"**因此，React Compiler 也能够在不做依赖收集的情况下，做到元素级别的超级细粒度更细。**但是，这样做的代价就是，React 需要经历大量的判断来决定是否需要更新。"}),`
`,n.jsx(e.p,{children:"所以这个时候，我们就需要明确，我所谓的大量判断的时间成本，到底有多少？它会不会导致新的性能问题？"}),`
`,n.jsx(e.p,{children:"可以看到，几乎所有的比较都是使用了全等比较，因此，我们可以写一个例子来感知一下，超大量的全等比较到底需要花费多少时间。"}),`
`,n.jsx(e.p,{children:"测试代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`var cur = performance.now()

for(let i = 0; i < 1000000; i++) {
  'xxx' == 'xx'
}
var now = performance.now()
console.log(now - cur)
`})}),`
`,n.jsxs(e.p,{children:["执行结果，比较 100 万次，只需要花费不到 ",n.jsx(e.strong,{children:"1.3 毫秒"}),"。卧槽(¬д¬。)，这太强了啊。我们很难有项目能够达到 1000,000 次的比较级别，甚至许多达到 10000 都难。那也就意味着，这里大量的比较成本，几乎可以忽略不计。"]}),`
`,n.jsx(e.p,{children:"为了对比具体的效果，我们可以判断一下依赖收集的时间成本。"}),`
`,n.jsx(e.p,{children:"首先是使用数组来收集依赖。依然是 100 万次，具体执行结果如下。耗时 8 毫秒。"}),`
`,n.jsx(e.p,{children:"使用 Map 来收集依赖。100 万次依赖收集耗时 54 ms。"}),`
`,n.jsx(e.p,{children:"使用 WeakMap 来收集依赖，那就更慢了。100万次依赖收集耗时 200 毫秒。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"WeakMap 的 key 不能是一个 number 类型"}),`
`]}),`
`,n.jsx(e.p,{children:"数据展示给大家了，具体强不强，大家自行判断。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["这里我要明确的是，这样的性能表现，在之前版本的项目中，合理运用 ",n.jsx(e.code,{children:"useCallback/memo"})," 也能做到。只是由于对 React 底层默认命中规则不理解，导致大多数人不知道如何优化到这种程度。React Compiler 简化了这个过程"]}),`
`]}),`
`,n.jsx(e.h2,{children:"8"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"React Compiler 最佳实践"})}),`
`,n.jsx(e.p,{children:"有许多骚操作，React Compiler 并不支持，例如下面这种写法。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{[1, 2, 3, 4, 5].map((counter) => {
  const [number, setNumber] = useState(0)
  return (
    <div key={\`hello\${counter}\`} onClick={() => setNumber(number + 1)}>
      number: {number}
    </div>
  )
})}
`})}),`
`,n.jsx(e.p,{children:"这个操作骚归骚，但是真的有大佬想要这样写。React 之前的版本依然不支持这种写法。不过好消息是，React 19 支持了..."}),`
`,n.jsx(e.p,{children:"但是 React Compiler 并不支持。对于这些不支持的语法，React Compiler 的做法就是直接跳过不编译，而直接沿用原组件写法。"}),`
`,n.jsx(e.p,{children:"因此，React Compiler 的最佳实践我总结了几条"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"1、不再使用 useCallback、useMemo、Memo 等缓存函数"}),`
`,n.jsx(e.li,{children:"2、丢掉闭包的心智负担，放心使用即可"}),`
`,n.jsx(e.li,{children:"3、引入严格模式"}),`
`,n.jsx(e.li,{children:"4、在你不熟悉的时候引入 eslint-plugin-react-compiler"}),`
`,n.jsx(e.li,{children:"5、当你熟练之后，弃用它，因为有的时候我们就是不想让它编译我们的组件"}),`
`,n.jsx(e.li,{children:"6、更多的使用 use 与 Action 来处理异步逻辑"}),`
`,n.jsx(e.li,{children:"7、尽可能少的使用 useEffect"}),`
`]}),`
`,n.jsxs(e.p,{children:["因此，一个小小的彩蛋就是，当你不希望你的组件被 Compiler 编译时，你只需要使用 ",n.jsx(e.code,{children:"var"})," 来声明状态即可。因为这不符合它的语法规范"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`var [counter, setCounter] = useState(0)
`})}),`
`,n.jsxs(e.p,{children:["而你改成 ",n.jsx(e.code,{children:"const/let"}),"，它就会又重新编译该组件。可控性与自由度非常高。"]}),`
`,n.jsx(e.h2,{children:"9"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"总结"})}),`
`,n.jsx(e.p,{children:"React Compiler 在保持了函数式编程的开发范式的同时，弥补了之前可能存在性能问题的缺陷，这无疑是进一步确认了 React 在前端框架方向都领先地位。"}),`
`,n.jsx(e.p,{children:"并且 React Compiler 上手成本低，理解起来也不难，未来肯定会快速被开发者所接受。作为开发者我们只需要耐心等待整个生态的跟进，目前从 npm 下载数据上来看，整个生态适配 React19 的积极性非常高。因此距离能成熟使用的时间肯定是不会太长"})]})}function CL(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(X1,{...t})}):X1(t)}function kL(){return n.jsx(ae,{renderArticle:t=>n.jsx(CL,{components:{code:t}})})}function ML(){const[t,e]=j.useState(0);function i(){e(t+1)}return n.jsxs("div",{children:[n.jsx("div",{children:"A Base Case"}),n.jsxs("div",{className:"flex items-center justify-between",children:[n.jsxs("div",{children:["currnt count is: ",t]}),n.jsx("button",{onClick:i,children:"Increment"})]})]})}const AL=`import {useState} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  function __clickHanler() {
    setCount(count + 1)
  }

  return (
    <div>
      <div>A Base Case</div>
      <div className="flex items-center justify-between">
        <div>currnt count is: {count}</div>
        <button onClick={__clickHanler}>Increment</button>
      </div>
    </div>
  )
}
`,RL=`import {useState} from 'react'

export default function Counter() {
  const $ = _c(10);

  if ($[0] !== "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac") {
    for (let $i = 0; $i < 10; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac";
  }

  const [count, setCount] = useState(0);
  let t0;

  if ($[0] !== count) {
    t0 = function __clickHanler() {
      setCount(count + 1);
    };

    $[0] = count;
    $[1] = t0;
  } else {
    t0 = $[1];
  }

  const __clickHanler = t0;
  let t1;

  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div>A Base Case</div>;
    $[2] = t1;
  } else {
    t1 = $[2];
  }

  let t2;

  if ($[3] !== count) {
    t2 = <div>currnt count is: {count}</div>;
    $[3] = count;
    $[4] = t2;
  } else {
    t2 = $[4];
  }

  let t3;

  if ($[5] !== __clickHanler) {
    t3 = <button onClick={__clickHanler}>Increment</button>;
    $[5] = __clickHanler;
    $[6] = t3;
  } else {
    t3 = $[6];
  }

  let t4;

  if ($[7] !== t2 || $[8] !== t3) {
    t4 = (
      <div>
        {t1}
        <div className="flex items-center justify-between">
          {t2}
          {t3}
        </div>
      </div>
    );
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }

  return t4;
}
`;function LL(){return n.jsx(ee,{files:{index:AL,编译后:RL},caseRender:n.jsx(ML,{})})}function G1(t){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.p,{children:["通过上面对 Compiler 渲染结果的理解，我们应该已经大概知道我们的 React 代码最终会渲染成什么样。我们目前要思考的问题就是，我们的代码通过 Compiler 编译之后，",n.jsx(e.strong,{children:"收益表现在哪里？"})]}),`
`,n.jsx(e.p,{children:"接下来我们要分析三个不同的案例，来思考这个问题。这篇文章先分析第一个出现在上一章中，最简单的基础案例"}),`
`,n.jsx(LL,{}),`
`,n.jsxs(e.p,{children:["本文的这个案例中，当我们点击按钮时，此时 ",n.jsx(e.code,{children:"count"})," 增加，"]}),`
`,n.jsxs(e.p,{children:["由于 ",n.jsx(e.code,{children:"__clickHandler"})," 函数内部使用了外部的 ",n.jsx(e.code,{children:"count"})," 状态，因此 ",n.jsx(e.code,{children:"__clickHanler"})," 无法缓存，需要重新创建，"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function __clickHanler() {
  setCount(count + 1)
}
`})}),`
`,n.jsx(e.p,{children:"那么很显然的， button 按钮也就无法缓存"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// 无法缓存
<button onClick={__clickHanler}>Increment</button>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// 无法缓存
<div>currnt count is: {count}</div>
`})}),`
`,n.jsxs(e.p,{children:["最终，只有 ",n.jsx(e.code,{children:"A Base Case"})," 标签可以被缓存"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`<div>A Base Case</div>
`})}),`
`,n.jsxs(e.p,{children:["因此，在组件由于 count 的增加而反复重新执行的过程中，大多数元素都无法被缓存，需要重新创建，那么也就意味着，这个案例的编译之后的收益为",n.jsx(e.strong,{children:"负收益"}),"。因此，如果你经验比较丰富的话，你可以快速判断你写的当前的组件是否具备明确的正向收益，从而选择是否需要编译当前组件。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"我们可以通过有意违背规则的方式让编译不发生"}),`
`]}),`
`,n.jsx(e.p,{children:"当然，这里多执行的逻辑也并不是很多，我们也可以选择无视。"})]})}function TL(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(G1,{...t})}):G1(t)}function EL(){return n.jsx(ae,{renderArticle:t=>n.jsx(TL,{components:{code:t}})})}function gb(){for(var t=performance.now();performance.now()-t<300;);return n.jsx("div",{className:"border border-red-500 rounded p-4 mt-4 text-red-500 leading-6",children:"这是模拟的一个耗时子组件，我的渲染至少要损耗 100ms 的时间，因此如果不做任何优化的情况下，当你快速点击按钮时，你会感受到 counter 的递增会有明显的掉帧。"})}function $L(){var[t,e]=j.useState(0);function i(){e(t+1)}return n.jsxs("div",{children:[n.jsx("div",{children:"A Expensive Case"}),n.jsxs("div",{className:"flex items-center justify-between mt-4",children:[n.jsxs("div",{className:"counter",children:["current counter is: ",t]}),n.jsx("button",{onClick:i,children:"counter++"})]}),n.jsx(gb,{})]})}const DL=`import { useState } from 'react'
import Expensive from './expensive'

function App() {
  var [counter, setCounter] = useState(0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <div>A Expensive Case</div>
      <div className="flex items-center justify-between mt-4">
        <div className="counter">current counter is: {counter}</div>
        <button onClick={__clickHanler}>counter++</button>
      </div>
      <Expensive />
    </div>
  )
}

export default App
`,vb=`export default function Expensive() {
  var cur = performance.now()
  while (performance.now() - cur < 300) {
    // block
  }

  return (
    <div className='border border-red-500 rounded p-4 mt-4 text-red-500 leading-6'>
      这是模拟的一个耗时子组件，我的渲染至少要损耗 100ms 的时间，因此如果不做任何优化的情况下，当你快速点击按钮时，你会感受到 counter 的递增会有明显的掉帧。
    </div>
  )
}
`;function OL(){return n.jsx(ee,{files:{index:DL,expensive:vb},caseRender:n.jsx($L,{})})}function BL(t){return j.useState(()=>Array.from(t))[0]}function zL(){const t=BL(14);if(t[0]!=="a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac"){for(let y=0;y<13;y+=1)t[y]=Symbol.for("react.memo_cache_sentinel");t[0]="a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac"}const[e,i]=j.useState(0);let o;t[13]!==e?(o=function(){i(e+1)},t[13]=e,t[1]=o):o=t[13];const c=o;let m;t[2]===Symbol.for("react.memo_cache_sentinel")?(m=n.jsx("div",{children:"A Expensive Case"}),t[2]=m):m=t[2];let d;t[3]!==e?(d=n.jsxs("div",{className:"counter",children:["current counter is: ",e]}),t[3]=e,t[4]=d):d=t[4];let h;t[5]!==c?(h=n.jsx("button",{onClick:c,children:"counter++"}),t[5]=c,t[6]=h):h=t[6];let f;t[7]!==d||t[8]!==h?(f=n.jsxs("div",{className:"flex items-center justify-between mt-4",children:[d,h]}),t[7]=d,t[8]=h,t[9]=f):f=t[9];let x;t[10]===Symbol.for("react.memo_cache_sentinel")?(x=n.jsx(gb,{}),t[10]=x):x=t[10];let v;return t[11]!==f?(v=n.jsxs("div",{children:[m,f,x]}),t[11]=f,t[12]=v):v=t[12],v}const UL=`import {useState} from 'react'
import {_c} from './useCache'
import Expensive from './expensive'

export default function App() {
  const $ = _c(14);

  if ($[0] !== "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac") {
    for (let $i = 0; $i < 13; $i += 1) {
      $[$i] = Symbol.for("react.memo_cache_sentinel");
    }
    $[0] = "a13b836c47c4cd480504d73b45661476522265776f255f2150833079731132ac";
  }

  const [counter, setCounter] = useState(0);
  let t0;

  if ($[13] !== counter) {
    t0 = function __clickHanler() {
      setCounter(counter + 1);
    };

    $[13] = counter;
    $[1] = t0;
  } else {
    t0 = $[13];
  }

  const __clickHanler = t0;
  let t1;

  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t1 = <div>A Expensive Case</div>;
    $[2] = t1;
  } else {
    t1 = $[2];
  }

  let t2;

  if ($[3] !== counter) {
    t2 = <div className="counter">current counter is: {counter}</div>;
    $[3] = counter;
    $[4] = t2;
  } else {
    t2 = $[4];
  }

  let t3;

  if ($[5] !== __clickHanler) {
    t3 = <button onClick={__clickHanler}>counter++</button>;
    $[5] = __clickHanler;
    $[6] = t3;
  } else {
    t3 = $[6];
  }

  let t4;

  if ($[7] !== t2 || $[8] !== t3) {
    t4 = (
      <div className="flex items-center justify-between mt-4">
        {t2}
        {t3}
      </div>
    );
    $[7] = t2;
    $[8] = t3;
    $[9] = t4;
  } else {
    t4 = $[9];
  }

  let t5;

  if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
    t5 = <Expensive />;
    $[10] = t5;
  } else {
    t5 = $[10];
  }

  let t6;

  if ($[11] !== t4) {
    t6 = (
      <div>
        {t1}
        {t4}
        {t5}
      </div>
    );
    $[11] = t4;
    $[12] = t6;
  } else {
    t6 = $[12];
  }

  return t6;
}
`,PL=`import {useState} from 'react'
export function _c(size) {
  return useState(() => Array.from(size))[0]
}
`;function HL(){return n.jsx(ee,{files:{index:UL,expensive:vb,useCache:PL},caseRender:n.jsx(zL,{})})}function I1(t){const e={code:"code",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(OL,{}),`
`,n.jsx(e.p,{children:"然后大家可以通过快速点击按钮感受一下编译之后的优化提升，如下"}),`
`,n.jsx(HL,{}),`
`,n.jsx(e.p,{children:"我们来分析一下这段代码所带来的提升具体表现在什么地方。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function App() {
  var [counter, setCounter] = useState(0)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <div>A Expensive Case</div>
      <div className="flex items-center justify-between mt-4">
        <div className="counter">current counter is: {counter}</div>
        <button onClick={__clickHanler}>counter++</button>
      </div>
      <Expensive/>
    </div>
  )
}
`})}),`
`,n.jsxs(e.p,{children:["可以看到，这段代码和上一章的例子中的代码大多数都是一样的，唯一的区别就是这里多一个耗时的子任务 ",n.jsx(e.code,{children:"Expensive"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`<Expensive/>
`})}),`
`,n.jsx(e.p,{children:"由于该任务在渲染时，并未有入参依赖其他任何状态或者变量，因此，在初始化之后的更新中，我们可以将其缓存起来，当 counter 不停发生变化导致组件 re-render 时，这个耗时的子任务可以被缓存，它的编译代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`let t5;

if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
  t5 = <Expensive />;
  $[10] = t5;
} else {
  t5 = $[10];
}
`})}),`
`,n.jsxs(e.p,{children:["因此，编译优化之后，我们能够非常明显的感受到",n.jsx(e.strong,{children:"掉帧的现象"}),"消失了。在优化之前，由于 counter 导致组件 re-render，所以该子组件虽然没有任何参数传递进去，但是依然不可避免的需要重新执行，从而导致每次更新的耗时都非常大。"]})]})}function VL(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(I1,{...t})}):I1(t)}function qL(){return n.jsx(ae,{renderArticle:t=>n.jsx(VL,{components:{code:t}})})}function FL({selected:t,appeared:e}){if(!t&&!e)return null;const i=Fe("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!t});return n.jsx("div",{className:i,children:"A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."})}function XL({selected:t,appeared:e}){if(!t&&!e)return null;const i=Fe("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!t});return n.jsx("div",{className:i,children:"React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps."})}function GL({selected:t,appeared:e}){if(!t&&!e)return null;const i=Fe("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!t});return n.jsx("div",{className:i,children:"UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets."})}function IL({selected:t,appeared:e}){if(!t&&!e)return null;const i=Fe("border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8",{hidden:!t});return n.jsx("div",{className:i,children:"React Compiler is a new experimental compiler that we’ve open sourced to get early feedback from the community. It still has rough edges and is not yet fully ready for production."})}const Y1=[{title:"Tailwindcss",component:FL,appeared:!1},{title:"React",component:XL,appeared:!1},{title:"Unocss",component:GL,appeared:!1},{title:"Compiler",component:IL,appeared:!1}];function YL(){const[t,e]=j.useState(0),i=j.useRef([...Y1]);function o(f){i.current[f].appeared=!0,e(f)}let c=i.current[0],m=i.current[1],d=i.current[2],h=i.current[3];return n.jsxs("div",{className:"bg-gray-100 p-8 rounded-md border border-gray-200",children:[n.jsx("div",{children:Y1.map((f,x)=>n.jsx("button",{className:x===t?"text-blue-500":"text-gray-500",onClick:()=>o(x),children:f.title},f.title))}),n.jsx(c.component,{appearder:c.appeared,selected:t===0}),n.jsx(m.component,{appearder:m.appeared,selected:t===1}),n.jsx(d.component,{appearder:d.appeared,selected:t===2}),n.jsx(h.component,{appearder:h.appeared,selected:t===3})]})}const ZL=`import { useState, useRef } from 'react'
import Panel1 from './Panel1'
import Panel2 from './Panel2'
import Panel3 from './Panel3'
import Panel4 from './Panel4'

const tabs = [
  { title: 'Tailwindcss', component: Panel1, appeared: false },
  { title: 'React', component: Panel2, appeared: false },
  { title: 'Unocss', component: Panel3, appeared: false },
  { title: 'Compiler', component: Panel4, appeared: false }
]

function App() {
  const [current, setCurrent] = useState(0)
  const tabsconfig = useRef([...tabs])

  function __clickHanler(index) {
    tabsconfig.current[index].appeared = true
    setCurrent(index)
  }

  let c1 = tabsconfig.current[0]
  let c2 = tabsconfig.current[1]
  let c3 = tabsconfig.current[2]
  let c4 = tabsconfig.current[3]

  return (
    <div className='bg-gray-100 p-8 rounded-md border border-gray-200'>
      <div>
        {tabs.map((item, index) => (
          <button className={index === current ? 'text-blue-500' : 'text-gray-500'} key={item.title} onClick={() => __clickHanler(index)}>
            {item.title}
          </button>
        ))}
      </div>

      <c1.component appearder={c1.appeared} selected={current === 0}/>
      <c2.component appearder={c2.appeared} selected={current === 1}/>
      <c3.component appearder={c3.appeared} selected={current === 2}/>
      <c4.component appearder={c4.appeared} selected={current === 3}/>
    </div>
  )
}

export default App
`,KL=`import clsx from 'clsx'

function Panel({selected, appeared}) {
  // 这里是会执行的
  // console.log('panel 1 re-render')
  if (!selected && !appeared) {
    return null
  }

  const cls = clsx('border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8', {
    hidden: !selected
  })

  return (
    <div className={cls}>
      A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
    </div>
  )
}

export default Panel;
`,WL=`import clsx from 'clsx'

function Panel({selected, appeared}) {
  // 这里是会执行的
  // console.log('panel 1 re-render')
  if (!selected && !appeared) {
    return null
  }

  const cls = clsx('border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8', {
    hidden: !selected
  })

  return (
    <div className={cls}>
      React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.
    </div>
  )
}

export default Panel;
`,QL=`import clsx from 'clsx'

function Panel({selected, appeared}) {
  // 这里是会执行的
  // console.log('panel 1 re-render')
  if (!selected && !appeared) {
    return null
  }

  const cls = clsx('border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8', {
    hidden: !selected
  })

  return (
    <div className={cls}>
      UnoCSS is the instant atomic CSS engine, that is designed to be flexible and extensible. The core is un-opinionated and all the CSS utilities are provided via presets.
    </div>
  )
}

export default Panel;
`,JL=`import clsx from 'clsx'

function Panel({selected, appeared}) {
  // 这里是会执行的
  // console.log('panel 1 re-render')
  if (!selected && !appeared) {
    return null
  }

  const cls = clsx('border px-4 mt-4 py-4 rounded-md bg-gray-50 leading-8', {
    hidden: !selected
  })

  return (
    <div className={cls}>
      React Compiler is a new experimental compiler that we’ve open sourced to get early feedback from the community. It still has rough edges and is not yet fully ready for production.
    </div>
  )
}

export default Panel;
`;function eT(){return n.jsx(ee,{files:{index:ZL,Panel1:KL,Panel2:WL,Panel3:QL,Panel4:JL},caseRender:n.jsx(YL,{})})}function nT(){return n.jsxs("div",{children:[n.jsx(tT,{}),n.jsx(sT,{})]})}function tT(){var t=performance.now();return n.jsxs("div",{className:"mt-4",children:["仅执行 1000,000 次耗时 for 循环耗时：",n.jsxs("span",{className:"text-red-500",children:[performance.now()-t," ms"]})]})}function sT(){var t=performance.now();return n.jsxs("div",{className:"mt-4",children:["for 循环中，比较 1000,000 次耗时：",n.jsxs("span",{className:"text-red-500",children:[performance.now()-t," ms"]})]})}const rT=`export default function Demo02() {
  return (
    <div>
      <OnlyFor />
      <ForAndJudge />
    </div>
  )
}

function OnlyFor() {
  var cur = performance.now()

  for(let i = 0; i < 1000000; i++) {}

  return (
    <div className='mt-4'>
      仅执行 1000,000 次耗时 for 循环耗时：
      <span className='text-red-500'>{performance.now() - cur} ms</span>
    </div>
  )
}

function ForAndJudge() {
  var cur = performance.now()

  for(let i = 0; i < 1000000; i++) {
    'xxx' === 'xx'
  }

  return (
    <div className='mt-4'>
      for 循环中，比较 1000,000 次耗时：
      <span className='text-red-500'>{performance.now() - cur} ms</span>
    </div>
  )
}
`;function iT(){return n.jsx(ee,{files:{index:rT},caseRender:n.jsx(nT,{})})}function Z1(t){const e={blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(eT,{}),`
`,n.jsx(e.p,{children:"这个案例会非常的复杂，经验稍微欠缺一点的前端开发可能都实现不了。我们可以先操作一下上面的按钮，看一下我想要实现的演示效果。"}),`
`,n.jsx(e.p,{children:"从演示效果上来看，这是一个普通的 tab 切换。但是先别急，我还有要求。我希望能实现极限的性能优化。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"1、我希望首次渲染时，页面渲染更少的内容，因此此时，只能先渲染默认的 Panel。其他 Panel 需要在点击对应的按钮时，才渲染出来。"}),`
`,n.jsx(e.li,{children:"2、在切换过程中，我希望能够缓存已经渲染好的 Panel，只需要在样式上做隐藏，而不需要在后续的交互中重复渲染内容"}),`
`,n.jsx(e.li,{children:"3、当四个页面都渲染出来之后，再做切换时，此时只会有两个页面会发生变化，上一个选中的页面与下一个选中的页面。另外的页面不参与交互，则不应该 re-render。"}),`
`]}),`
`,n.jsx(e.p,{children:"这个案例和要求不算特别难，但是对综合能力的要求还是蛮高的，大家可以自己动手尝试一下试试看。"}),`
`,n.jsx(e.p,{children:"具体的完整实现请看右侧代码。"}),`
`,n.jsx(e.p,{children:"这里，我主要想跟大家分享的就是 map 方法的小细节。有如下代码"}),`
`,n.jsxs(e.p,{children:["因为在本案例中， 4 个按钮对应 4 个页面，因此我们通常会使用 ",n.jsx(e.code,{children:".map"})," 方法来渲染他们。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{tabs.map((item, index) => {
  return (
    <item.component
      appearder={item.appeared}
      key={item.title}
      selected={current === index}
    />
  )
})}
`})}),`
`,n.jsx(e.p,{children:"它的编译结果表现如下："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`let t4;

if ($[7] !== current) {
  t4 = tabs.map((item_0, index_1) => (
    <item_0.component
      appearder={item_0.appeared}
      key={item_0.title}
      selected={current === index_1}
    />
  ));
  $[7] = current;
  $[8] = t4;
} else {
  t4 = $[8];
}
`})}),`
`,n.jsxs(e.p,{children:["我们会发现，此时编译缓存的是整个 map 表达式，但是由于 map 表达式又依赖于 ",n.jsx(e.code,{children:"current"}),"，因此，在我们点击切换的交互过程中，每一次的 current 都会发生变化，那么这里针对 map 表达式的缓存就没有了任何意义。"]}),`
`,n.jsxs(e.p,{children:["但是实际上，我们可以观察到，我们有 4 个 Panel，点击切换的交互发生时，实际上只有两个 Pannel 发生了变化。因此，最极限的优化是，只有这两个组件对应的函数需要重新 ",n.jsx(e.code,{children:"re-render"}),"，那么我们的代码应该怎么写呢？"]}),`
`,n.jsx(e.p,{children:"其实非常简单，那就是不用 map，将数组拆开直接手写，代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`let c1 = tabsconfig.current[0]
let c2 = tabsconfig.current[1]
let c3 = tabsconfig.current[2]
let c4 = tabsconfig.current[3]
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<c1.component appearder={c1.appeared} selected={current === 0}/>
<c2.component appearder={c2.appeared} selected={current === 1}/>
<c3.component appearder={c3.appeared} selected={current === 2}/>
<c4.component appearder={c4.appeared} selected={current === 3}/>
`})}),`
`,n.jsx(e.p,{children:"然后，我们就会发现，在编译结果中，不再缓存 map 表达式的结果，而是缓存每一个组件"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`let t5;

if ($[7] !== c1.component || $[8] !== c1.appeared || $[9] !== t4) {
  t5 = <c1.component appearder={c1.appeared} selected={t4} />;
  $[7] = c1.component;
  $[8] = c1.appeared;
  $[9] = t4;
  $[10] = t5;
} else {
  t5 = $[10];
}
`})}),`
`,n.jsx(e.p,{children:"这样做的收益在特定场景下的收益将会非常高。因为我们这里省掉了其他页面的 re-render，有的时候，我们的 tab 页面可能有十多个。"}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"1"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"总结一下：强悍的性能：细粒度记忆化更新"})}),`
`,n.jsx(e.p,{children:"经过前面原理的分析与多个案例的分析，想必各位道友对 React Compiler 的工作机制已经有了非常深刻的理解。此时，我们就需要分析一下，这样的记忆化更新机制，到底有多强。"}),`
`,n.jsx(e.p,{children:"首先明确一点，和 Vue 等其他框架的依赖收集不同，React Compiler 依然不做依赖收集。"}),`
`,n.jsx(e.p,{children:"React 依然通过从根节点自上而下的 diff 来找出需要更新的节点。在这个过程中，我们会通过大量的判断来决定使用缓存值。可以明确的是，Compiler 编译之后的代码，缓存命中的概率非常高，几乎所有应该缓存的元素和函数都会被缓存起来。"}),`
`,n.jsx(e.p,{children:"**因此，React Compiler 也能够在不做依赖收集的情况下，做到元素级别的超级细粒度更细。**但是，这样做的代价就是，React 需要经历大量的判断来决定是否需要更新。"}),`
`,n.jsx(e.p,{children:"所以这个时候，我们就需要明确，我所谓的大量判断的时间成本，到底有多少？它会不会导致新的性能问题？"}),`
`,n.jsx(e.p,{children:"可以看到，几乎所有的比较都是使用了全等比较，因此，我们可以写一个例子来感知一下，超大量的全等比较到底需要花费多少时间。"}),`
`,n.jsx(e.p,{children:"测试代码如下"}),`
`,n.jsx(iT,{}),`
`,n.jsxs(e.p,{children:["由于 for 循环本身也会消耗一点时间，因此我这里单独列出来了 for 循环中不执行任何逻辑的耗时结果。我们可以多次点击 ",n.jsx(e.code,{children:"reload"})," 按钮查看耗时波动。"]}),`
`,n.jsx(e.p,{children:"执行结果发现，在我的设备上，在 for 循环中比较 100 万次，总花费时间在 0.5ms 到 1.5ms 之间波动，而且通过对比我们可以知道，这里边的耗时的一大部分是 for 循环的逻辑。如果去除 for 循环的耗时，我们会发现，纯粹的比较耗时可能仅 0.1ms 到 0.5ms 之间。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"由于执行耗时有小范围的波动，因此有的时候下面的执行时间反而更短这是正常的"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"卧槽(¬д¬。)，这太强了啊"}),"。"]}),`
`,n.jsxs(e.p,{children:["我们很难有项目能够达到 1000,000 次的比较级别，甚至许多达到 10000 都难。那也就意味着，",n.jsx(e.strong,{children:"这里大量比较的时间成本，几乎可以忽略不计"}),"。因此，在执行速度上，Compiler 的之后性能表现将会非常强悍。"]}),`
`,n.jsxs(e.p,{children:["由此我们可以得出结论，",n.jsx(e.strong,{children:"经过 Compiler 优化的项目，可以以极低的时间成本，做到元素级别的细粒度更新。"})]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["这里我要明确的是，这样的性能表现，在之前版本的项目中，合理运用 ",n.jsx(e.code,{children:"useCallback/memo"})," 也能做到。只是由于对 React 底层默认命中规则不理解，导致大多数人不知道如何优化到这种程度。React Compiler 简化了这个过程"]}),`
`]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"2"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"React Compiler 最佳实践"})}),`
`,n.jsx(e.p,{children:"有许多骚操作，React Compiler 并不支持，例如下面这种写法。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{[1, 2, 3, 4, 5].map((counter) => {
  const [number, setNumber] = useState(0)
  return (
    <div key={\`hello\${counter}\`} onClick={() => setNumber(number + 1)}>
      number: {number}
    </div>
  )
})}
`})}),`
`,n.jsx(e.p,{children:"这个操作骚归骚，但是真的有大佬想要这样写。React 之前的版本依然不支持这种写法。不过好消息是，React 19 支持了..."}),`
`,n.jsx(e.p,{children:"但是 React Compiler 并不支持。对于这些不支持的语法，React Compiler 的做法就是直接跳过不编译，而直接沿用原组件写法。"}),`
`,n.jsx(e.p,{children:"因此，React Compiler 的最佳实践我总结了几条"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"1、不再使用 useCallback、useMemo、Memo 等缓存函数"}),`
`,n.jsx(e.li,{children:"2、丢掉闭包的心智负担，放心使用即可"}),`
`,n.jsx(e.li,{children:"3、引入严格模式"}),`
`,n.jsx(e.li,{children:"4、在你不熟悉的时候引入 eslint-plugin-react-compiler"}),`
`,n.jsx(e.li,{children:"5、当你熟练之后，弃用它，因为有的时候我们就是不想让它编译我们的组件"}),`
`,n.jsx(e.li,{children:"6、更多的使用 use 与 Action 来处理异步逻辑"}),`
`,n.jsx(e.li,{children:"7、尽可能少的使用 useEffect"}),`
`]}),`
`,n.jsxs(e.p,{children:["因此，一个小小的彩蛋就是，当你不希望你的组件被 Compiler 编译时，你只需要使用 ",n.jsx(e.code,{children:"var"})," 来声明状态即可。因为这不符合严格模式的语法规范"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`var [counter, setCounter] = useState(0)
`})}),`
`,n.jsxs(e.p,{children:["而你改成 ",n.jsx(e.code,{children:"const/let"}),"，它就会又重新编译该组件。可控性与自由度非常高。"]}),`
`,n.jsx(e.h2,{children:n.jsx(e.em,{children:"3"})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"总结"})}),`
`,n.jsx(e.p,{children:"React Compiler 在保持了对原有语法的弱侵入性的同时，又做到了保持了函数式编程的开发范式，并且弥补了之前可能存在性能问题的缺陷，这无疑是进一步确认了 React 在前端框架方向都领先地位。React Compiler 把虚拟 DOM 的性能表现推向了极致。和进几年声望比较大的 signal 相比，将不会存在性能短板，甚至由于并发模式的存在，React 项目的上限将会比其他前端框架更高。"}),`
`,n.jsx(e.p,{children:"并且 React Compiler 上手成本低，理解起来也不难，未来肯定会快速被大量开发者所接受。作为开发者我们只需要放心使用即可。"})]})}function aT(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Z1,{...t})}):Z1(t)}function oT(){return n.jsx(ae,{renderArticle:t=>n.jsx(aT,{components:{code:t}})})}function lT(){return n.jsxs("form",{id:"form",method:"get",className:"space-y-3",children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx("label",{className:"w-[100px]",children:"First name: "}),n.jsx("input",{type:"text",defaultValue:"Jake",name:"fname"})]}),n.jsxs("div",{className:"flex items-center",children:[n.jsx("label",{className:"w-[100px]",children:"Last name: "}),n.jsx("input",{type:"text",defaultValue:"Ma",name:"lname"})]}),n.jsx("div",{className:"flex justify-end",children:n.jsx("button",{type:"submit",children:"提交"})})]})}function K1(t){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"在 html 的基础知识中，表单是很重要的一个环节"}),"，但是由于前端框架的盛行，原生表单开发方式相关的知识被部分前端框架所遗忘，很多人对 form action，formdata 很陌生。因此，当看到有消息称 React 19 支持了 form action 之后，许多前端感觉有点懵。这是啥？"]}),`
`,n.jsxs(e.p,{children:["React 19 在开发方式的引导上，意图非常明显，那就是希望开发者能尽量减少对 useState 与 useEffect 的使用。因此，在获取数据时，提供了 ",n.jsx(e.code,{children:"use(promise)"})," 开发方式，在提交数据时，则提供了 ",n.jsx(e.code,{children:"formaction"})," 的方式，这实际上是更加靠近原生 html 的思路。因此在学习 form action 时，需要道友们对 html 中的表单元素，有一个基础的认识。"]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"HTML form action"}),`
`,n.jsx(e.p,{children:"先来看一段简单的代码"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<form id="form" method="get">
  First name:
  <input type="text" value="Jake" name="fname">
  Last name:
  <input type="text" value="Ma" name="lname">
  <input type="submit" value="提交">
</form>
`})}),`
`,n.jsx(Wn,{reload:!0,children:n.jsx(lT,{})}),`
`,n.jsx(e.p,{children:"大家可以在 input 中修改输入内容，然后点击提高，此时页面会刷新，然后观察 url 中参数的变化。"}),`
`,n.jsxs(e.p,{children:["当我们使用表单 form 元素时，内部的表单元素可以根据 ",n.jsx(e.code,{children:"name"})," 属性与 ",n.jsx(e.code,{children:"value | defaultValue"})," 值自动组合成一个完整的序列化表单对象。我们不再需要额外去拼接他们。"]}),`
`,n.jsx(e.p,{children:"合成的序列化对象，我们称之为 FormData， 这是一个特殊的对象。我们可以直接通过如下方式获取到该对象"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`let formdata = new FormData(form)

formdata.get('fname')
formdata.get('lname')
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["我们无法直接观察到 FormData 的值，需要使用 ",n.jsx(e.code,{children:".get"})," 方法来获取。"]}),`
`]}),`
`,n.jsxs(e.p,{children:["FormData 也可以被网络请求支持，例如我们可以把 ",n.jsx(e.code,{children:"FormData"})," 对象作为 fetch 请求的 ",n.jsx(e.code,{children:"body"}),"，直接发送"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`form.onsubmit = async e => {
  e.preventDefault()

  const response = await fetch('/post/user', {
    method: 'POST',
    body: new FormData(form)
  })
  let res = await response.json()
  // do something
}
`})}),`
`,n.jsxs(e.p,{children:["在这个案例中，当 ",n.jsx(e.code,{children:"type='submit'"})," 的按钮点击提交时，",n.jsx(e.code,{children:"onsubmit"})," 就会触发，我们可以在这个回调函数里执行自己的提交逻辑。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"HTTP 中 content-type 字段有专门支持 FormData 的值，如下所示"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`Content-Type: multipart/form-data
`})}),`
`,n.jsxs(e.p,{children:["除此之外，我们可以使用 form 元素的 ",n.jsx(e.code,{children:"action"})," 属性来简化提交。不过它的表现会不太一样。"]}),`
`,n.jsxs(e.p,{children:["action 接收一个 ",n.jsx(e.code,{children:"URL"})," 作为参数，可以是绝对路径，也是可以相对路径。它表示携带表单数据向该地址发送请求。默认情况下页面会跳转到指定的 URL 地址。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<form id="form" action="xx.html" method="post">
  First name:
  <input type="text" value="Jake" name="fname">
  Last name:
  <input type="text" value="Ma" name="lname">
  <input type="submit" value="提交">
</form>
`})}),`
`,n.jsx(e.p,{children:"服务端可以拦截该地址，并定义响应行为。"}),`
`,n.jsx(e.p,{children:"这样做的好处就是我们可以简化提交行为的代码。无需使用 JavaScript 对逻辑进行任何额外的处理，就能完成一次提交操作。在没有额外要求的情况下，我们可以非常方便的使用这种方式来提交表单数据，上传文件等。"}),`
`,n.jsx(e.p,{children:"了解了这些html form 元素中的基础知识之后，我们下一章再来详细的学习一下 FormData 的基础知识。"})]})}function cT(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(K1,{...t})}):K1(t)}function uT(){return n.jsx(ae,{renderArticle:t=>n.jsx(cT,{components:{code:t}})})}function W1(t){const e={code:"code",h3:"h3",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{children:"FormData 使用详解"}),`
`,n.jsx(e.p,{children:"FormData API 如下所示。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-c++",children:`FormData
  [[Prototype]]
    .append: f append()
    .delete: f delete()
    .entries: f entries()
    .forEach: f forEach()
    .get: f ()
    .getAll: f getAll()
    .has: f has()
    .keys: f keys()
    .set: f ()
    .values: f values()
`})}),`
`,n.jsxs(e.p,{children:["我们可以先创建一个空的 FormData 对象，然后通过 ",n.jsx(e.code,{children:"append"})," 方法来添加属性。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const formdata = new FormData()
formdata.append('title', 'hello world')
`})}),`
`,n.jsx(e.p,{children:"也可以直接使用 form 元素对象进行初始化。并在子表单元素中合并具体的字段和值。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<form id="form" method="post">
  First name:
  <input type="text" value="Jake" name="fname">
  Last name:
  <input type="text" value="Ma" name="lname">
  <input type="submit" value="提交">
</form>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const formdata = new FormData(form)
`})}),`
`,n.jsxs(e.p,{children:["我们可以通过 ",n.jsx(e.code,{children:".get"})," 方法获取具体字段的值。在表单元素中，",n.jsx(e.code,{children:"name"})," 属性表示字段名。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`formdata.get('fname')
`})}),`
`,n.jsxs(e.p,{children:["可以有多个同名的 name，因此 ",n.jsx(e.code,{children:".get()"})," 表示获取第一个，",n.jsx(e.code,{children:".getAll()"})," 表示获取所有"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 获取所有 name 为 age 的字段，返回数组
formdata.getAll('age')
`})}),`
`,n.jsxs(e.p,{children:["我们可以通过 ",n.jsx(e.code,{children:".set"})," 方法设置对应字段的值。如果字段名不存在，则添加该字段。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`formdata.set('fname', 'Jake')
`})}),`
`,n.jsxs(e.p,{children:["可以通过 ",n.jsx(e.code,{children:".has(key)"})," 来判断是否存在某个字段。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`formdata.has('fname') // true
`})}),`
`,n.jsxs(e.p,{children:["可以通过 ",n.jsx(e.code,{children:".delete(key)"})," 删除某一个字段。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`formdata.delete('fname')
`})}),`
`,n.jsx(e.p,{children:"我们可以使用 formdata 来实现一个上传文件的功能。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<form id="form">
  <input type="text" name="firstName" value="John">
  Picture:
  <input type="file" name="picture" accept="image/*">
  <input type="submit">
</form>
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`form.onsubmit = async e => {
  e.preventDefault()

  const response = await fetch('/post/file', {
    method: 'POST',
    body: new FormData(form)
  })
  let res = await response.json()
  // do something
}
`})}),`
`,n.jsx(e.p,{children:"OK，简单了解了 FormData 的常用方式之后，有了这个基础，我们再来学习 react 中的 form action."})]})}function dT(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(W1,{...t})}):W1(t)}function mT(){return n.jsx(ae,{renderArticle:t=>n.jsx(dT,{components:{code:t}})})}function pT(){function t(e){const i=e.get("fname"),o=e.get("lname");alert(`输入内容：FirstName: ${i}, LastName: ${o}`)}return n.jsxs("form",{action:t,className:"space-y-3",children:[n.jsxs("div",{className:"flex items-center",children:[n.jsx("label",{className:"w-[100px]",children:"First name: "}),n.jsx("input",{type:"text",defaultValue:"Jake",name:"fname"})]}),n.jsxs("div",{className:"flex items-center",children:[n.jsx("label",{className:"w-[100px]",children:"Last name: "}),n.jsx("input",{type:"text",defaultValue:"Ma",name:"lname"})]}),n.jsx("div",{className:"flex justify-end",children:n.jsx("button",{type:"submit",children:"提交"})})]})}const hT=`export default function Demo01() {
  function __formAction(formData) {
    const fname = formData.get('fname')
    const lname = formData.get('lname')
    alert(\`输入内容：FirstName: \${fname}, LastName: \${lname}\`)
  }
  return (
    <form action={__formAction} className='space-y-3'>
      <div className='flex items-center'>
        <label className='w-[100px]'>First name: </label>
        <input type="text" defaultValue="Jake" name="fname" />
      </div>
      <div className='flex items-center'>
        <label className='w-[100px]'>Last name: </label>
        <input type="text" defaultValue="Ma" name="lname" />
      </div>
      <div className='flex justify-end'>
        <button type='submit'>提交</button>
      </div>
    </form>
  )
}
`;function fT(){return n.jsx(ee,{files:{index:hT},caseRender:n.jsx(pT,{})})}function _s(t){const{type:e="text",className:i,required:o,label:c,help:m="此项规则不匹配",pattern:d,...h}=t,{pending:f}=cc.useFormStatus(),x=Fe("flex items-center my-10",i);return n.jsxs("div",{className:x,children:[c&&n.jsxs("label",{className:"w-20 text-right font-bold",children:[c,"："]}),n.jsx("div",{className:"input flex-1",children:n.jsx("input",{type:e,required:o,pattern:d,...h,disabled:f})})]})}function xT(t){const{ref:e,onChange:i}=t;function o(c){const m={id:An(),name:c.get("name"),desc:c.get("desc"),hours:c.get("hours"),rate:c.get("rate"),price:c.get("price")};e.current.close(),i&&i(m)}return n.jsx(yo,{ref:e,footer:!0,children:n.jsxs("form",{action:o,children:[n.jsx(_s,{label:"Name",name:"name",placeholder:"Plase input your project name.",required:!0}),n.jsx(_s,{label:"Desc",name:"desc",placeholder:"please input your project description.",required:!0}),n.jsx(_s,{label:"Hours",name:"hours",type:"number",placeholder:"please input hours.",required:!0}),n.jsx(_s,{label:"Rate",name:"rate",type:"number",placeholder:"please input rate.",required:!0}),n.jsx("div",{className:"flex justify-end",children:n.jsx("button",{type:"submit",children:"Submit"})})]})})}function gT(){const t=j.useRef(null),[e,i]=j.useState([{id:An(),name:"Logo redesign",desc:"New logo and digital asset playbook.",hours:"20.0",rate:"100.00"}]);function o(m){i([...e,m])}const c=e.reduce((m,d)=>m+d.hours*d.rate,0);return n.jsxs("div",{className:"px-4 sm:px-6 lg:px-8",children:[n.jsxs("div",{className:"sm:flex sm:items-center",children:[n.jsxs("div",{className:"sm:flex-auto",children:[n.jsx("h1",{className:"text-base font-semibold leading-6 text-gray-900",children:"Invoice"}),n.jsxs("p",{className:"mt-2 text-sm text-gray-700",children:["For work completed from ",n.jsx("time",{dateTime:"2022-08-01",children:"August 1, 2022"})," to"," ",n.jsx("time",{dateTime:"2022-08-31",children:"August 31, 2022"}),"."]})]}),n.jsx("div",{className:"mt-4 sm:ml-16 sm:mt-0 sm:flex-none",children:n.jsx("button",{className:"primary",onClick:()=>t.current.show(),children:"Add"})})]}),n.jsx(xT,{ref:t,onChange:o}),n.jsx("div",{className:"-mx-4 mt-8 flow-root sm:mx-0",children:n.jsxs("table",{className:"min-w-full",children:[n.jsxs("colgroup",{children:[n.jsx("col",{className:"w-full sm:w-1/2"}),n.jsx("col",{className:"sm:w-1/6"}),n.jsx("col",{className:"sm:w-1/6"}),n.jsx("col",{className:"sm:w-1/6"})]}),n.jsx("thead",{className:"border-b border-gray-300 text-gray-900",children:n.jsxs("tr",{children:[n.jsx("th",{scope:"col",className:"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0",children:"Project"}),n.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Hours"}),n.jsx("th",{scope:"col",className:"hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell",children:"Rate"}),n.jsx("th",{scope:"col",className:"py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:"Price"})]})}),n.jsx("tbody",{children:e.map(m=>n.jsxs("tr",{className:"border-b border-gray-200",children:[n.jsxs("td",{className:"max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0",children:[n.jsx("div",{className:"font-medium text-gray-900",children:m.name}),n.jsx("div",{className:"mt-1 truncate text-gray-500",children:m.desc})]}),n.jsx("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:m.hours}),n.jsxs("td",{className:"hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell",children:["$",m.rate]}),n.jsxs("td",{className:"py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0",children:["$",m.hours*m.rate]})]},m.id))}),n.jsxs("tfoot",{children:[n.jsxs("tr",{children:[n.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Subtotal"}),n.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Subtotal"}),n.jsxs("td",{className:"pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0",children:["$",c]})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0",children:"Tax"}),n.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden",children:"Tax"}),n.jsx("td",{className:"pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0",children:"$1760.00"})]}),n.jsxs("tr",{children:[n.jsx("th",{scope:"row",colSpan:3,className:"hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0",children:"Total"}),n.jsx("th",{scope:"row",className:"pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden",children:"Total"}),n.jsxs("td",{className:"pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0",children:["$",c-1760]})]})]})]})})]})}const vT=`import { useState, useRef } from 'react'
import Modal from './Modal'
import {uuid} from 'utils'


export default function Table() {
  const modal = useRef(null)

  const [revenues, setRevenues] = useState([{
    id: uuid(),
    name: 'Logo redesign',
    desc: 'New logo and digital asset playbook.',
    hours: '20.0',
    rate: '100.00',
  }])

  function __onChange(data) {
    setRevenues([...revenues, data])
  }

  const subtotal = revenues.reduce((pre, cur) => {
    return pre + cur.hours * cur.rate
  }, 0)

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Invoice</h1>
          <p className="mt-2 text-sm text-gray-700">
            For work completed from <time dateTime="2022-08-01">August 1, 2022</time> to{' '}
            <time dateTime="2022-08-31">August 31, 2022</time>.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button className='primary' onClick={() => modal.current.show()}>Add</button>
        </div>
      </div>
      <Modal ref={modal} onChange={__onChange} />

      <div className="-mx-4 mt-8 flow-root sm:mx-0">
        <table className="min-w-full">
          <colgroup>
            <col className="w-full sm:w-1/2" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
          </colgroup>
          <thead className="border-b border-gray-300 text-gray-900">
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Project
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Hours
            </th>
            <th
              scope="col"
              className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
            >
              Rate
            </th>
            <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
              Price
            </th>
          </tr>
          </thead>
          <tbody>
          {revenues.map((project) => (
            <tr key={project.id} className="border-b border-gray-200">
              <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                <div className="font-medium text-gray-900">{project.name}</div>
                <div className="mt-1 truncate text-gray-500">{project.desc}</div>
              </td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{project.hours}</td>
              <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">\${project.rate}</td>
              <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">\${project.hours * project.rate}</td>
            </tr>
          ))}
          </tbody>
          <tfoot>
          <tr>
            <th
              scope="row"
              colSpan={3}
              className="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
            >
              Subtotal
            </th>
            <th scope="row" className="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">
              Subtotal
            </th>
            <td className="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0">\${subtotal}</td>
          </tr>
          <tr>
            <th
              scope="row"
              colSpan={3}
              className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
            >
              Tax
            </th>
            <th scope="row" className="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden">
              Tax
            </th>
            <td className="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0">$1760.00</td>
          </tr>
          <tr>
            <th
              scope="row"
              colSpan={3}
              className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
            >
              Total
            </th>
            <th scope="row" className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">
              Total
            </th>
            <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">\${subtotal - 1760}</td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
`,jT=`import Dialog from 'components/Dialog'
import Input from 'components/Input'
import {uuid} from 'utils'

export default function Modal(props) {
  const {ref, onChange} = props

  function action(f) {
    const item = {
      id: uuid(),
      name: f.get('name'),
      desc: f.get('desc'),
      hours: f.get('hours'),
      rate: f.get('rate'),
      price: f.get('price'),
    }
    ref.current.close()
    onChange && onChange(item)
  }

  return (
    <Dialog ref={ref} footer>
      <form action={action}>
        <Input label='Name' name='name' placeholder='Plase input your project name.' required />
        <Input label='Desc' name='desc' placeholder='please input your project description.' required/>
        <Input label='Hours' name='hours' type='number' placeholder='please input hours.' required/>
        <Input label='Rate' name='rate' type='number' placeholder='please input rate.' required/>

        <div className='flex justify-end'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </Dialog>
  )
}
`;function yT(){return n.jsx(ee,{files:{index:vT,Modal:jT},caseRender:n.jsx(gT,{})})}function Q1(t){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"React 19 在表单上提供了更多充满想象空间的 API，它们用好了非常爽，不过一个麻烦的事情是如果你通过自学，想要透彻理解并找到最佳实践可能会非常困难。"}),`
`,n.jsx(e.p,{children:"这里最核心的原因是因为开发思维发生了比较彻底的变化，主要体现在 React19 在尝试弱化受控组件的概念，尝试引导开发者尽可能少的使用 useEffect，并且尽可能少的使用 useState 存储数据。"}),`
`,n.jsx(e.p,{children:"抛开学习成本不谈，我个人认为这是一个非常好的变化，新的开发方式上在开发体验和性能表现上都有非常大的提升。它充分利用了 HTML 中表单元素本身已经支持的能力，例如表单验证，自定义异常样式，自定义错误信息等。"}),`
`,n.jsx(e.p,{children:"不过没关系，我会尽量拆分去学习。确保大家都能读有所得。这一章节就先简单给大家介绍一下 React 在表单上的基础表现。"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"action 基础"}),`
`,n.jsxs(e.p,{children:["在 HTML 的表单元素中，我们可以通过监听 form 对象的 onsubmit 来回调函数的执行。也可以通过 ",n.jsx(e.code,{children:"action"})," 属性来直接向服务端发送请求。"]}),`
`,n.jsx(e.p,{children:"在 React 19 中，form 元素支持的 action 在这个基础之上发生了一些变化。它支持给 action 传递一个回调函数以供我们使用。该回调函数会将 FormData 作为参数传入。我们可以通过这种方式拿到表单里的所有数据。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"这个变化主要是 React 中并不提倡直接获取元素对象，以及直接往后端发送请求的方式并不常用"}),`
`]}),`
`,n.jsx(fT,{}),`
`,n.jsxs(e.p,{children:["当我们点击提交按钮时，action 方法就会触发执行。当然，我们也可以给 ",n.jsx(e.code,{children:"submit"})," 一个 ",n.jsx(e.code,{children:"formAction"})," 属性来达到同样的效果"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`<form>
  ...
  <button formAction={__formAction} type='submit'>提交</button>
</form>
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["默认情况下，当我们点击提交之后，form 会自动清空内部的所有数据，或者重置回  ",n.jsx(e.code,{children:"defaultValue"})]}),`
`,n.jsxs(e.p,{children:["如果你在设置了 action 的同时，又设置了 onSubmit 回调，那么 onSubmit 会优先执行，我们可以通过在 onSbumit 中执行 ",n.jsx(e.code,{children:"e.preventDefault()"})," 来阻止 action 回调的执行"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function __onSubmit(e) {
  e.preventDefault()
  ...
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"案例"}),`
`,n.jsx(e.p,{children:"学习了这些基础知识之后，我们来完成一个比较简单的案例。我们在表单中输入信息，并把信息记录展示在一个列表中。"}),`
`,n.jsxs(e.p,{children:["在这个案例中，我们提供了一个 ",n.jsx(e.code,{children:"Add"})," 按钮，点击该按钮之后，会出现一个弹窗。在弹窗中，我们可以输入每一条信息。输入完成之后，点击提交，输入的信息就会展示在列表中。"]}),`
`,n.jsx(e.p,{children:"案例演示效果如下"}),`
`,n.jsx(yT,{})]})}function bT(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Q1,{...t})}):Q1(t)}function ST(){return n.jsx(ae,{renderArticle:t=>n.jsx(bT,{components:{code:t}})})}async function NT(t){const e=t.get("title"),i=t.get("content");if(!e||!i)return alert("Miss");await new Promise(o=>setTimeout(o,1e3)),alert(`Title: ${e}, Content: ${i}`)}function wT(){return n.jsxs("form",{action:NT,children:[n.jsx(_s,{label:"Title",name:"title"}),n.jsx(_s,{label:"content",name:"content"}),n.jsx(ue,{children:"Submit"})]})}const _T=`import Input from 'components/Input'
import Button from 'components/Button'
import {formAction} from './actions'

export default function Demo01() {
  return (
    <form action={formAction}>
      <Input label='Title' name='title' />
      <Input label='content' name='content' />
      <Button>Submit</Button>
    </form>
  )
}
`,CT=`export async function formAction(fd) {
  const title = fd.get('title')
  const content = fd.get('content')
  if (!title || !content) {
    return alert('Miss')
  }
  await new Promise(resolve => setTimeout(resolve, 1000))
  alert(\`Title: \${title}, Content: \${content}\`)
}
`;function kT(){return n.jsx(ee,{files:{index:_T,actions:CT},caseRender:n.jsx(wT,{})})}async function MT(t){const e=t.get("title"),i=t.get("content");if(!e||!i)return alert("Miss");await new Promise(o=>setTimeout(o,1e3)),alert(`Title: ${e}, Content: ${i}`)}function AT({children:t}){const{pending:e}=cc.useFormStatus();return n.jsx(ue,{primary:!0,disabled:e,children:e?"loading...":t})}function RT(){return n.jsxs("form",{action:MT,children:[n.jsx(_s,{label:"Title",name:"title"}),n.jsx(_s,{label:"content",name:"content"}),n.jsx(AT,{children:"Submit"})]})}const LT=`import Input from 'components/Input'
import {formAction} from './actions'
import SubmitButton from './SubmitButton'

export default function Demo01() {
  return (
    <form action={formAction}>
      <Input label='Title' name='title' />
      <Input label='content' name='content' />
      <SubmitButton>Submit</SubmitButton>
    </form>
  )
}
`,TT=`export async function formAction(fd) {
  const title = fd.get('title')
  const content = fd.get('content')
  if (!title || !content) {
    return alert('Miss')
  }
  await new Promise(resolve => setTimeout(resolve, 1000))
  alert(\`Title: \${title}, Content: \${content}\`)
}
`,ET=`import {useFormStatus} from 'react-dom'
import Button from "components/Button/index.jsx";

export default function SubmitButton({children}) {
  const {pending} = useFormStatus()
  return (
    <Button primary disabled={pending}>
      {pending ? 'loading...' : children}
    </Button>
  )
}
`,$T=`import {useState} from 'react'
import { useFormStatus } from 'react-dom'
import clsx from 'clsx'
import './index.css'

export default function Input(props) {
  const {type = 'text', className, required, label, help = '此项规则不匹配', pattern, ...other} = props
  const { pending } = useFormStatus()

  const pclsx = clsx('flex items-center my-10', className)

  return (
    <div className={pclsx}>
      {label && <label className="w-20 text-right font-bold">{label}：</label>}
      <div className='input flex-1'>
        <input type={type} required={required} pattern={pattern} {...other} disabled={pending} />
      </div>
    </div>
  )
}
`;function J1(){return n.jsx(ee,{files:{index:LT,actions:TT,SubmitButton:ET,Input:$T},caseRender:n.jsx(RT,{})})}function ev(t){const e={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"注：由于 FormAction 在 next.js 中的表现暂时还不稳定，因此，本文以及后续文章的探讨全部都是基于他们在客户端的交互与表现"}),`
`]}),`
`,n.jsx(e.h2,{children:"1"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"action 支持异步回调"})}),`
`,n.jsx(e.p,{children:"一个令人振奋的特性就是，在 React19 中，action 支持传入异步回调函数。我们可以在上面的案例中，输入内容，然后点击提交按钮，你会发现弹窗会在延迟一秒之后展示。"}),`
`,n.jsxs(e.p,{children:["这里一个比较好玩的事情是，我们可以把 ",n.jsx(e.code,{children:"formAction"})," 函数定义到组件外面去。"]}),`
`,n.jsx(e.p,{children:"案例完整代码如下"}),`
`,n.jsx(kT,{}),`
`,n.jsx(e.p,{children:"有了这个特性的支持，我们就可以非常方便的利用它来实现一些上传逻辑。不过一个小小的需求就是，点击提交之后，接口请求的过程中，我们希望按钮处于禁用状态，那应该怎么办呢？"}),`
`,n.jsxs(e.p,{children:["React 19 提供了名为 ",n.jsx(e.code,{children:"useFormStatus"})," 的 hook 来帮助我们做到这个事情。"]}),`
`,n.jsx(e.h2,{children:"2"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"useFormStatus"})}),`
`,n.jsxs(e.p,{children:["和别的 hook 不同的是，我们需要从 ",n.jsx(e.code,{children:"react-dom"})," 中获取到它的引用"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { useFormStatus } from "react-dom";
`})}),`
`,n.jsx(e.p,{children:"useFormStatus 能够在 form 元素的子组件中，获取到表单提交时的 pending 状态和表单内容。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"与 form 同属于一个组件，获取不到，只能是封装后的子组件才能获取到"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const { pending, data, method, action } = useFormStatus();
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"pending"})," 为 true 时，表示请求正在进行。我们可以利用这个值的变化在提交按钮上设置 Loading 样式"]}),`
`,n.jsx(e.p,{children:"data 格式为 FormData，表示此次提交里表单的所有内容。"}),`
`,n.jsxs(e.p,{children:["method 表示我们在提交时，所采用的请求方式，默认值为 ",n.jsx(e.code,{children:"get"}),"。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"需要注意的是，提交方式并不需要通过如下方式设置，这样做会报错。"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<form method="post">

</form>
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"action"})," 就是在 form 元素中的 action 回调函数的引用。"]}),`
`,n.jsx(e.h2,{children:"3"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"案例一：提交时设置禁用按钮"})}),`
`,n.jsx(e.p,{children:"为了防止重复提交，我们希望在提交之后就马上禁用按钮，等到提交完成之后再恢复按钮的点击。与此同时，我们可能还需要在 UI 交互上做出一些提示，让用户知道当前正在发送请求"}),`
`,n.jsxs(e.p,{children:["这里主要是针对提交按钮做的操作，因此我们需要单独将提交按钮相关的部分拿出来封装成为一个子组件，并在子组件中利用 ",n.jsx(e.code,{children:"useFormStatus"})," 获取异步 action 的 pending 状态。"]}),`
`,n.jsx(e.p,{children:"交互效果如如下，大家可以自行操作感受一下"}),`
`,n.jsx(J1,{}),`
`,n.jsx(e.h2,{children:"4"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"案例二：提交时禁止输入内容"})}),`
`,n.jsx(e.p,{children:"通常情况下，我们也希望在表单提交时，不允许输入内容。useFormStatus 可以很容易帮我们做到这一点。"}),`
`,n.jsx(e.p,{children:"实现非常简单，我们将某一个字段单独封装到子组件中，利用 useFormStatus 提供的 pending 状态来判断是否禁用输入，代码如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function Input2({required, name}) {
  const {pending} = useFormStatus()

  return (
    <div className="form_item">
      <div className="label">Name</div>
      <input
        name={name}
        type="text"
        placeholder='Enter you name'
        disabled={pending}
      />
    </div>
  )
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<form action={formAction}>
  <div className="form_item">
    <div className="label">Title</div>
    <input name='title' type="text" placeholder='Enter title' />
  </div>

  <Input2 required name='content' />

  <SubmitButton />
</form>
`})}),`
`,n.jsxs(e.p,{children:["我们还可以更激进一点，将其逻辑下层到 ",n.jsx(e.code,{children:"Input"})," 基础组件的封装，演示效果与代码如下"]}),`
`,n.jsx(J1,{}),`
`,n.jsx(e.h2,{children:"5"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"总结"})}),`
`,n.jsx(e.p,{children:"useFormStatus 是结合 action 异步请求时使用的 hook，它们是对 HTML 表单能力的增强。因此我们可以借助他们与 HTML 表单元素自身支持的特性实现更复杂的表单交互逻辑。"}),`
`,n.jsxs(e.p,{children:["这里我们需要注意的是 action 与 onSubmit 的区别。onSubmit 会优先于 action 执行。并且，如果我们在 onSubmit 的回调函数中，使用了 ",n.jsx(e.code,{children:"preventDefault"}),"，action 回调将不会执行"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function onSubmit(e) {
  e.preventDefault()
  // ...
}
`})}),`
`,n.jsx(e.p,{children:"在 onSubmit 中，我们可以结合 state，通过控制数据的行为来自定义表单行为，而无需过多依赖 HTML 表单元素本身的能力。具体如何抉择大家需要根据自身项目的需求情况来定。"})]})}function DT(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ev,{...t})}):ev(t)}function OT(){return n.jsx(ae,{renderArticle:t=>n.jsx(DT,{components:{code:t}})})}async function BT(t){return t+1}function zT(){const[t,e]=j.useActionState(BT,0);return n.jsxs("form",{action:e,className:"flex items-center",children:[n.jsx("button",{children:"count++"}),n.jsx("div",{className:"ml-4",children:t})]})}const UT=`import { useActionState } from 'react'

async function increment(cur) {
  return cur + 1
}

export default function Demo01() {
  const [state, action] = useActionState(increment, 0)
  return (
    <form action={action} className='flex items-center'>
      <button>count++</button>
      <div className='ml-4'>{state}</div>
    </form>
  )
}
`;function PT(){return n.jsx(ee,{files:{index:UT},caseRender:n.jsx(zT,{})})}function HT({cart:t=[]}){return n.jsx("div",{children:t.map((e,i)=>n.jsxs("div",{className:"border border-yellow-400 p-4 rounded my-4",children:[n.jsxs("div",{className:"font-bold",children:["title: ",e.title]}),n.jsxs("div",{children:["id: ",e.id]}),n.jsxs("div",{children:["count: ",e.count||0]})]},`cart_${i}`))})}async function VT(t,e,i){const o=e.get("id"),c=e.get("title");return await new Promise(m=>{setTimeout(()=>{i({id:o,title:c,count:t+1}),m()},300)}),t+1}function qT({children:t}){const{pending:e}=cc.useFormStatus();return n.jsxs(ue,{primary:!0,disabled:e,children:[t,e?"...":""]})}function nv({id:t,title:e,onSubmit:i}){const[o,c]=j.useActionState((m,d)=>VT(m,d,i),0);return n.jsxs("form",{action:c,className:"border p-4 my-3 rounded",children:[n.jsxs("h1",{className:"!my-2",children:["book name: ",e]}),n.jsx("input",{type:"hidden",name:"title",value:e}),n.jsx("input",{type:"hidden",name:"id",value:t}),n.jsxs("div",{style:{marginBottom:"20px"},children:["cart count: ",o]}),n.jsx(qT,{children:"ADD TO CART"})]})}function FT(){const[t,e]=j.useState([]);function i(o){const c=t.find(m=>m.id===o.id);if(c)return c.count+=1,e([...t]);e(m=>[...m,o])}return n.jsxs("div",{children:[n.jsx(nv,{id:"001",title:"JavaScript Core advance",onSubmit:i}),n.jsx(nv,{id:"002",title:"React19 all solution",onSubmit:i}),n.jsx(HT,{cart:t})]})}const XT=`import { useState } from 'react'

import List from './List'
import BookItem from './BookItem'

export default function Demo02() {
  const [carts, updateCarts] = useState([])

  function addToCart(book) {
    const target = carts.find(cart => cart.id === book.id)
    if (target) {
      target.count += 1
      return updateCarts([...carts])
    }
    updateCarts(carts => [...carts, book])
  }

  return (
    <div>
      <BookItem id='001' title='JavaScript Core advance' onSubmit={addToCart} />
      <BookItem id='002' title='React19 all solution' onSubmit={addToCart} />
      <List cart={carts} />
    </div>
  )
}
`,GT=`import {useActionState} from 'react'
import {submit} from './actions'
import SubmitButton from './SubmitButton'

function BookItem({id, title, onSubmit}) {
  const [count, formAction] = useActionState((cur, formData) => submit(cur, formData, onSubmit), 0)

  return (
    <form action={formAction} className='border p-4 my-3 rounded'>
      <h1 className='!my-2'>book name: {title}</h1>
      <input type="hidden" name='title' value={title} />
      <input type="hidden" name='id' value={id} />
      <div style={{marginBottom: '20px'}}>cart count: {count}</div>
      <SubmitButton>ADD TO CART</SubmitButton>
    </form>
  )
}

export default BookItem;
`,IT=`import {useFormStatus} from 'react-dom'
import Button from "components/Button";

export default function SubmitButton({children}) {
  const {pending} = useFormStatus()
  return (
    <Button primary disabled={pending}>
      {children}{pending ? '...' : ''}
    </Button>
  )
}
`,YT=`function CartList({cart = []}) {
  return (
    <div>
      {cart.map((item, index) => (
        <div key={\`cart_\${index}\`} className='border border-yellow-400 p-4 rounded my-4'>
          <div className='font-bold'>title: {item.title}</div>
          <div>id: {item.id}</div>
          <div>count: {item.count || 0}</div>
        </div>
      ))}
    </div>
  )
}

export default CartList
`,ZT=`export async function submit(cur, formData, onSubmit) {
  const id = formData.get('id')
  const title = formData.get('title')
  await new Promise((resolve) => {
    setTimeout(() => {
      onSubmit({id, title, count: cur + 1})
      resolve()
    }, 300)
  })
  return cur + 1
}
`;function KT(){return n.jsx(ee,{files:{index:XT,BookItem:GT,SubmitButton:IT,List:YT,actions:ZT},caseRender:n.jsx(FT,{})})}function tv(t){const e={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"注：由于 FormAction 在 next.js 中的表现暂时还不稳定，因此，本文以及后续文章的探讨全部都是基于他们在客户端的交互与表现"}),`
`]}),`
`,n.jsx(e.h2,{children:"1"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"useActionState"})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"useActionState"})," 与 useState 的使用基本上是一致的。它同样可以用来定义一个",n.jsx(e.strong,{children:"状态"}),"。他和 useState 不一样的是，",n.jsx(e.code,{children:"useActionState"})," 需要结合 form action 使用，它的更新机制依赖于 action。"]}),`
`,n.jsx(e.p,{children:"useActionState 接收两个参数，第一个参数是一个回调函数，用于获取 action 传递过来的值。第二个参数表示定义状态的初始值。"}),`
`,n.jsx(e.p,{children:"回调函数中，也接收两个参数，第一个参数表示当前状态值。第二参数表示表单 action 提交传递过来的 FormData 值。"}),`
`,n.jsx(e.p,{children:"简单的代码如下"}),`
`,n.jsx(PT,{}),`
`,n.jsxs(e.p,{children:["这里需要特别注意的是，我们可以轻松将 useActionAtate 的更新方法 ",n.jsx(e.code,{children:"increment"})," 放到函数之外去。这里的一个好处是更利于与其他组件或者 server 进行交互。在解耦上非常有用。"]}),`
`,n.jsx(e.h2,{children:"2"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"复杂案例"})}),`
`,n.jsx(e.p,{children:"大家先来看一下演示效果。然后再根据代码学习，这是一个比较复杂的案例。"}),`
`,n.jsx(KT,{}),`
`,n.jsxs(e.p,{children:["在 next.js 中使用时，我们可以把 action 单独执行服务端的逻辑，从而轻松做到客户端组件与服务端组件的交互。上面案例中的 ",n.jsx(e.code,{children:"actions.js"})," 则表示服务端的代码"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`"use server";

export async function addToCart(prevState, queryData) {
  const itemID = queryData.get('itemID');
  if (itemID === "1") {
    return {
      success: true,
      cartSize: 12,
    };
  } else {
    return {
      success: false,
      message: "The item is sold out.",
    };
  }
}
`})})]})}function WT(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(tv,{...t})}):tv(t)}function QT(){return n.jsx(ae,{renderArticle:t=>n.jsx(WT,{components:{code:t}})})}const JT="https://echo.apifox.com/delay/1";var jb=new Headers;jb.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var eE={method:"GET",headers:jb,redirect:"follow",data:"hex"};const nE=async()=>(await fetch(JT,eE),Ce());function tE(t,e){let i={text:e,sending:!0};return[...t,i]}function sE(){const[t,e]=j.useState([]),[i,o]=j.useOptimistic(t,tE),c=j.useRef(null);async function m(d){let h=d.get("message");o(h),c.current.reset();let f=await nE();e([...t,{text:f}])}return n.jsxs(n.Fragment,{children:[n.jsxs("form",{action:m,ref:c,className:"flex",children:[n.jsx("input",{type:"text",name:"message",placeholder:"enter your message"}),n.jsx("button",{type:"submit",className:"ml-2",children:"Send"})]}),i.map((d,h)=>n.jsxs("div",{className:"indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded",children:[d.text," ",!!d.sending&&n.jsx("small",{children:" (Sending...)"})]},h))]})}const rE=`import { useOptimistic, useState, useRef } from "react"
import { getMessage } from './api'
import {reducer} from './reducer'

export default function Index() {
  const [messages, setMessages] = useState([]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, reducer);

  const form = useRef(null);

  async function formAction(formData) {
    let newMessage = formData.get("message")
    addOptimisticMessage(newMessage);
    form.current.reset();
    let message = await getMessage(newMessage);
    setMessages([...messages, {text: message}])
  }

  return (
    <>
      <form action={formAction} ref={form} className='flex'>
        <input
          type="text"
          name="message"
          placeholder="enter your message"
        />
        <button type="submit" className='ml-2'>Send</button>
      </form>

      {optimisticMessages.map((message, index) => (
        <div key={index} className='indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded'>
          {message.text} {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
    </>
  );
}

`,iE=`export function reducer(state, newMessage) {
  let newItem = {
    text: newMessage,
    sending: true
  }
  return [...state, newItem]
}`;function aE(){return n.jsx(ee,{files:{index:rE,reducer:iE},caseRender:n.jsx(sE,{})})}function sv(t){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{children:n.jsx(e.strong,{children:"useOptimistic"})}),`
`,n.jsxs(e.p,{children:["如果你在之前的项目开发过程中，被乐观更新的需求折磨过，那么你一定会喜欢这个新 hook：",n.jsx(e.code,{children:"useOptimistic"}),"。它让原本实现起来比较困难的乐观更新，变得非常简单。"]}),`
`,n.jsx(e.p,{children:"通常是指在提交数据时，乐观估计请求结果，不等待真实的请求结果，而直接基于乐观结果修改页面状态的交互方式。例如，我们在聊天软件中，发送一条消息时，当我们点击发送之后，消息就会立即出现在聊天界面。而不会等待发送成功之后再更新页面 UI"}),`
`,n.jsx(e.p,{children:"普通的逻辑为"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`1、事件触发
2、发起请求，等待请求成功 Loading
3、请求成功
4、更新 UI 为正确结果
`})}),`
`,n.jsx(e.p,{children:"乐观更新的执行过程为"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`1、事件触发 -> 直接更新 UI
2、更新 UI 的同时发起请求 Loading
3、请求成功 -> 保持UI 不变
4、若请求失败 -> 则回退 UI
`})}),`
`,n.jsx(e.p,{children:"乐观更新在合适的场景之下，能够更加快速的响应用户交互，在体验上更好一些，因此这是许多项目都想要追求的交互结果。"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"适用场景"}),`
`,n.jsx(e.p,{children:"并不是所有的操作都适合乐观更新，这需要一些明确的前提条件"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"1、请求成功的概率非常大，几乎不会失败"}),`
`,n.jsx(e.li,{children:"2、不涉及到频繁的，密集的 UI 变化"}),`
`,n.jsx(e.li,{children:"3、可撤回的 UI 变化"}),`
`,n.jsx(e.li,{children:"4、与服务端的反馈时间短，不是一个长期的持续的响应过程"}),`
`]}),`
`,n.jsx(e.p,{children:"例如，在聊天软件中，发送一条消息，在阅读文章时，点赞收藏按钮的交互，给文章发送一条评论，删除一条评论等都非常适合乐观更新。"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"实现乐观更新需要具备的技术条件"}),`
`,n.jsxs(e.p,{children:["由于乐观更新是一种在",n.jsx(e.strong,{children:"低概率"}),"的情况下，需要撤回更新状态的交互机制，因此，我们在第一时间更新到最新状态时，需要保留上一次的更新状态以便撤回。"]}),`
`,n.jsxs(e.p,{children:["这样的场景与 ",n.jsx(e.code,{children:"redux/useReducer"})," 需要的技术架构非常类似。因此，每一次的更新我们都可以将其设计为一次 action，通过 reducer 的方式将其合并到完整数据中去"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`interface Action {
  // 操作方式
  type: string,
  // 乐观更新的数据结构
  state: {
    id: 'xxx',
    text: 'xxx'
  }
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// 假设 state 是一个列表
reducer(state, action) {
  return [...state, action.state]
}
`})}),`
`,n.jsx(e.p,{children:"如果保留了上一次的更新状态，我们也可以非常方便的还原数据。"}),`
`,n.jsxs(e.p,{children:["除此之外，乐观更新的数据结构是我们在客户端根据预估情况生成的，因此不能直接存储在服务端，有的数据需要按照服务端的逻辑来创建，例如一条数据包含了 ",n.jsx(e.code,{children:"id"}),"，那么我们就不能按照客户端的逻辑来创建 id，这个时候，需要我们",n.jsx(e.strong,{children:"在接口请求成功之后，完整的完成一次数据的替换"}),"。"]}),`
`,n.jsx(e.p,{children:"最后，还有一个非常重要的问题。那就是更新快速重复的发生时如何处理。这是乐观更新最考验开发者技术能力的地方。"}),`
`,n.jsx(e.p,{children:"当第一次请求还没结束的时候，但是此时当乐观更新重复发生，就会引发一系列不合理的问题。因此，什么时候将 action 合并到真实数据中去，就需要反正斟酌。"}),`
`,n.jsx(e.p,{children:"这里不仅要考虑更新失败时我们应该如何处理，更需要考虑竞态的顺序问题，我们必须以 action 创建的顺序将 action 合并到数据中。"}),`
`,n.jsx(e.p,{children:"在保证顺序的这个基础之上，我们还需要考虑前面如果某个 action 迟迟得不到响应，会阻塞后面 action 的合并。因此，我们还需要设计一个合理的超时机制。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"所以，如果我们自己来设计一套完善的乐观更新机制，对开发者开发能力的要求非常高，我们可以将其作为项目亮点在面试中去介绍"}),`
`]}),`
`,n.jsx(e.p,{children:"因此，显而易见的是，基于并发模式的 React，解决乐观更新这类交互问题非常的适合，接下来我们就一起来学习一下 React 19 中，针对乐观更新提出来的解决方案"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"React 19 是如何实现乐观更新的"}),`
`,n.jsx(e.p,{children:"React 19 针对乐观更新，提出了一个新的 hook，useOptimistic"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"注意，乐观更新完整的技术实现一定要结合我们刚才所提到的技术基础来理解，单独只学习一个 hook，无法构成乐观更新的完整方案"}),`
`]}),`
`,n.jsx(e.p,{children:"它的基础语法如下"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const [optimisticState, addOptimistic] = useOptimistic(state, updateFn);
`})}),`
`,n.jsxs(e.p,{children:["注意看，useOptimistic 接收两个参数，其实这两个参数与 ",n.jsx(e.code,{children:"reducer"})," 的参数非常相似。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"state"})," 表示当前状态，",n.jsx(e.code,{children:"updateFn"})," 表示我们如何将新的 action 合并到 ",n.jsx(e.code,{children:"state"})," 中去"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`updateFn = (currentState, value) => {
  // 根据上一次状态与新的 value 合并
  // merge and return new state
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"optimisticState"})," 表示合并之后的新状态。但是这里我们需要特别注意的是，它是一个临时状态，并非最终状态。通常情况下，我们会使用该临时状态渲染 UI，以便 UI 能够得到最快速的响应。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"addOptimistic"})," 是一次操作行为，类似于 dispatch，它会将参数传递给 ",n.jsx(e.code,{children:"updateFn"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`addOptimistic({a: 1})

->

// 此时 value = {a: 1}
updateFn = (currentState, value) => {
  return [...currentState, value]
}
`})}),`
`,n.jsx(e.p,{children:"因此，在使用 useOptimistic 之前，我们还需要借助 useState 创造一个状态，该状态为更新的真实状态。我们通过 useOptimistic 得到的状态是一个副本，它通过 useState 的状态来初始化，在接口请求成功之后，真实状态才会得到更新。"}),`
`,n.jsx(e.p,{children:"接下来，我们来实现一个简单的案例。"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"案例一：消息发送"}),`
`,n.jsx(e.p,{children:"直接来看一下目标案例"}),`
`,n.jsx(aE,{}),`
`,n.jsxs(e.p,{children:["消息发送是一个异步过程，因此我们把这个过程使用 ",n.jsx(e.code,{children:"Sending..."})," 字符来表示，当每条消息的 ",n.jsx(e.code,{children:"Sending..."})," 消失，才表示数据更新成功。"]}),`
`,n.jsx(e.p,{children:"先来考虑布局。"}),`
`,n.jsx(e.p,{children:"首先我们需要一个 form 表单来处理输入的交互"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<form id={s.form} action={formAction}>
  <input
    type="text"
    name="message"
    placeholder="enter your message"
  />
  <button type="submit">Send</button>
</form>
`})}),`
`,n.jsxs(e.p,{children:["然后我们需要一个列表来渲染输出之后的结果。根据我们之前的学习结果，该列表需要用 ",n.jsx(e.code,{children:"useOptimistic"})," 返回的临时状态来处理，这样我们才能够第一时间在 UI 上看到反馈结果"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`{optimisticMessages.map((message, index) => (
  <div key={index}>
    {message.text}
    {!!message.sending && <small> (Sending...)</small>}
  </div>
))}
`})}),`
`,n.jsx(e.p,{children:"再来思考状态如何设计。"}),`
`,n.jsx(e.p,{children:"首先我们需要使用 useState 来设计一个状态，用于存储真实的状态结果"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const [messages, setMessages] = useState([]);
`})}),`
`,n.jsxs(e.p,{children:["然后我们需要使用 ",n.jsx(e.code,{children:"useOptimistic"})," 来设计临时状态，这里需要注意的是，我们可以把它当成一个 reducer 来看待，第一个参数表示当前状态，第二参数表示一个合并方式"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const [optimisticMessages, addOptimisticMessage] = useOptimistic(
  messages,
  (state, newMessage) => [
    ...state,
    {
      text: newMessage,
      sending: true
    }
  ]
);
`})}),`
`,n.jsxs(e.p,{children:["临时状态中包含一个 ",n.jsx(e.code,{children:"sending: true"}),"，用于标识当前请求正在发生。"]}),`
`,n.jsxs(e.p,{children:["在 ",n.jsx(e.code,{children:"formAction"})," 回调函数中，我们会调用 ",n.jsx(e.code,{children:"addOptimisticMessage"})," 立即更新临时状态，并发送请求，我们提前把发送请求的接口写好"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// actions.js
export async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}
`})}),`
`,n.jsxs(e.p,{children:["那么，",n.jsx(e.code,{children:"formAction"})," 的完整逻辑为"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`async function formAction(formData) {
  let newMessage = formData.get("message")
  addOptimisticMessage(newMessage);
  let message = await deliverMessage(newMessage);
  setMessages([...messages, {text: message}])
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"请求发送成功之后，更新真实状态"}),`
`]}),`
`,n.jsx(e.p,{children:"这样，一个简单的乐观更新交互，我们就完成了"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"reset() 用于立即重置表单内容，可进行下一次输入。默认行为是接口请求成功之后才会重置"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"问题"}),`
`,n.jsxs(e.p,{children:["尝试一下快速连续输入内容并 ",n.jsx(e.code,{children:"Send"}),"，我们会发现，最终的效果并非我们所愿，此时会有多条内容同时正在 ",n.jsx(e.code,{children:"Sending"}),"，但是最终请求成功之后，这些同时的 ",n.jsx(e.code,{children:"Sending"})," 内容仅有一条信息被合并到最终结果中，其他的内容会消失。那么在此基础之上，我们需要如何来解决这个问题呢？下一章我们继续学习。"]})]})}function oE(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(sv,{...t})}):sv(t)}function lE(){return n.jsx(ae,{renderArticle:t=>n.jsx(oE,{components:{code:t}})})}const cE="https://echo.apifox.com/delay/1";var yb=new Headers;yb.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var uE={method:"GET",headers:yb,redirect:"follow",data:"hex"};const dE=async()=>(await fetch(cE,uE),Ce());function mE(t,e){let i={text:e,sending:!0};return[...t,i]}function pE(){const[t,e]=j.useState([]),[i,o]=j.useOptimistic(t,mE),[c,m]=j.useTransition(),d=j.useRef(null);async function h(f){let x=f.get("message");d.current.reset(),m(async()=>{o(x);let v=await dE();e([...t,{text:v}])})}return n.jsxs(n.Fragment,{children:[n.jsxs("form",{action:h,ref:d,className:"flex",children:[n.jsx("input",{type:"text",name:"message",placeholder:"enter your message",disabled:c}),n.jsx("button",{type:"submit",className:"ml-2",disabled:c,children:"Send"})]}),i.map((f,x)=>n.jsxs("div",{className:"indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded",children:[f.text," ",!!f.sending&&n.jsx("small",{children:" (Sending...)"})]},x))]})}const hE=`import { useOptimistic, useState, useRef, useTransition } from 'react'
import { getMessage } from './api'
import {reducer} from './reducer'

export default function Index() {
  const [messages, setMessages] = useState([]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, reducer);
  const [isPending, startTransition] = useTransition()

  const form = useRef(null);

  async function formAction(formData) {
    let newMessage = formData.get("message")
    form.current.reset();
    startTransition(async () => {
      addOptimisticMessage(newMessage);
      let message = await getMessage(newMessage);
      setMessages([...messages, {text: message}])
    })
  }

  return (
    <>
      <form action={formAction} ref={form} className='flex'>
        <input
          type="text"
          name="message"
          placeholder="enter your message"
          disabled={isPending}
        />
        <button type="submit" className='ml-2' disabled={isPending}>Send</button>
      </form>

      {optimisticMessages.map((message, index) => (
        <div key={index} className='indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded'>
          {message.text} {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
    </>
  );
}

`,fE=`export function reducer(state, newMessage) {
  let newItem = {
    text: newMessage,
    sending: true
  }
  return [...state, newItem]
}`;function xE(){return n.jsx(ee,{files:{index:hE,reducer:fE},caseRender:n.jsx(pE,{})})}function rv(t){const e={code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{children:"案例二：结合 useTransition"}),`
`,n.jsx(e.p,{children:"在上一章的案例中，当我们快速发送多条信息时，我们发现，并不是每一条消息都被成功合并到真实状态中了。最终结果是有的消息不见了。那如何解决这个问题呢？"}),`
`,n.jsxs(e.p,{children:["我们可以结合 ",n.jsx(e.code,{children:"useTransition"})," 来防止用户连续触发 ",n.jsx(e.code,{children:"formAction"})," 的执行"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const [isPending, startTransition] = useTransition()
`})}),`
`,n.jsx(e.p,{children:"formAction 的定义调整为："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`async function formAction(formData) {
  let newMessage = formData.get("message")
  form.current.reset()
  startTransition(async () => {
    addOptimisticMessage(newMessage);
    let message = await deliverMessage(newMessage);
    setMessages((messages) => [...messages, {text: message}])
  })
}
`})}),`
`,n.jsxs(e.p,{children:["然后使用 ",n.jsx(e.code,{children:"isPending"})," 来控制输入的禁用状态"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<form id={s.form} action={formAction} ref={form}>
  <input
    type="text"
    name="message"
    placeholder="Hello!"
    disabled={isPending}
  />
  <button
    type="submit"
    disabled={isPending}
    style={{marginLeft: '10px'}}
  >Send</button>
</form>
`})}),`
`,n.jsx(e.p,{children:"感受一下最终演示效果"}),`
`,n.jsx(xE,{}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"问题"}),`
`,n.jsxs(e.p,{children:["很明显，这并不是最合理的交互方案。我们期望的是，",n.jsx(e.strong,{children:"连续输入依然能够发生"}),"，在这个基础之上我们可以控制好数据的合并逻辑，那么借助 react 19 的机制，我们可以如何实现呢？"]})]})}function gE(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(rv,{...t})}):rv(t)}function vE(){return n.jsx(ae,{renderArticle:t=>n.jsx(gE,{components:{code:t}})})}const jE="https://echo.apifox.com/delay/1";var bb=new Headers;bb.append("User-Agent","Apifox/1.0.0 (https://apifox.com)");var yE={method:"GET",headers:bb,redirect:"follow",data:"hex"};const bE=async()=>(await fetch(jE,yE),Ce());function SE(){const[t,e]=j.useState([]),i=j.useRef(null);function o(c){let m=c.get("message");i.current.reset();let d={newMessage:m,promise:bE()};e(h=>[...h,d])}return n.jsxs(n.Fragment,{children:[n.jsxs("form",{action:o,ref:i,className:"flex",children:[n.jsx("input",{type:"text",name:"message",placeholder:"enter your message"}),n.jsx("button",{type:"submit",className:"ml-2",children:"Send"})]}),t.map((c,m)=>n.jsx(j.Suspense,{fallback:n.jsxs(Sb,{children:[c.newMessage,"(Seding...)"]}),children:n.jsx(NE,{promise:c.promise})},`h-${m}`))]})}function Sb({children:t}){return n.jsx("div",{className:"indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded",children:t})}function NE(t){const e=j.use(t.promise);return n.jsx(Sb,{children:e})}const wE=`import { useState, useRef, use, Suspense } from "react";
import { getMessage } from "./api.js";

export default function Index() {
  const [actions, updateActions] = useState([]);
  const form = useRef(null);

  function formAction(formData) {
    let newMessage = formData.get("message")
    form.current.reset();
    let action = {
      newMessage,
      promise: getMessage(newMessage)
    }
    updateActions((actions) => [...actions, action])
  }

  return (
    <>
      <form action={formAction} ref={form} className='flex'>
        <input
          type="text"
          name="message"
          placeholder="enter your message"
        />
        <button type="submit" className='ml-2'>Send</button>
      </form>

      {actions.map((action, index) => (
        <Suspense key={\`h-\${index}\`} fallback={<Message>{action.newMessage}(Seding...)</Message>}>
          <ListItem promise={action.promise} />
        </Suspense>
      ))}
    </>
  );
}

function Message({children}) {
  return (
    <div className='indent-1 text-slate-600 mt-1 hover:bg-slate-100 p-2 cursor-pointer rounded'>
      {children}
    </div>
  )
}

function ListItem(props) {
  const msg = use(props.promise)
  return (
    <Message>{msg}</Message>
  )
}
`,_E=`import {createRandomMessage} from 'utils'

// 你可以动态修改最后的数字，然后观察请求情况
const url = 'https://echo.apifox.com/delay/1'

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  data: 'hex'
};

export const getMessage = async () => {
  await fetch(url, requestOptions)
  return createRandomMessage()
}
`;function CE(){return n.jsx(ee,{files:{index:wE,api:_E},caseRender:n.jsx(SE,{})})}function iv(t){const e={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{children:n.jsx(e.strong,{children:"解决上一章的问题"})}),`
`,n.jsx(e.p,{children:"我们这一章要解决的问题是，如果我要连续快速输入，内容，又不想多个 Sending 中的信息被合并，同时呢，我们又不想使用一些方式限制用户的输入，那么我们应该怎么做？"}),`
`,n.jsx(e.p,{children:"我们在解决问题时，一定要对问题做出精准的分析，从而找到合适的解决方案。这里需求发生了一点变动，这里的变动就是，我不希望多个同时处于发送状态中的信息被回退重置。因此，我们要把状态拆分开，每一条信息各自维护自己的状态。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"因此，通常情况下，我们会把需求进一步调整成为请求失败也不回退，而是给出重试按钮或者异常状态，这种情况下，就和乐观更新的需求产生了一点微妙的差异。基于这个基础，我们来重新思考实现方案"}),`
`]}),`
`,n.jsx(e.p,{children:"即然已经跟乐观更新产生了差异，那么我们就只需要借助常规的手段来实现即可。这里需要注意的是，虽然从需求上来说，我们可以不再思考回退，但是还需要保持乐观更新的 UI 特性。因此，在数据结构的设计上就需要有一些技巧。"}),`
`,n.jsx(e.p,{children:"UI 需求的步骤为"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`1、事件触发 -> UI 立即更新
2、UI 更新的同时，发送请求，此时可以显示 Loading 状态
3、请求成功之后，UI 确定更新，Loading 状态小时
4、请求失败，显示失败状态
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"我们注意看，这里虽然与我们之前描述的乐观更新有所差异，但是保留了大部分乐观更新的核心特征，只是没有失败回退的效果，而是失败重置或者显示失败状态"}),`
`]}),`
`,n.jsxs(e.p,{children:["首先，我们设计一个状态数据结构，该状态将要保留了乐观更新时提前展示的消息，以及一个 promise 用于请求。我们准备结合 ",n.jsx(e.code,{children:"use"})," + ",n.jsx(e.code,{children:"Suspense"})," 共同完成这个事情。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`action = {
  newMessage: 'hello world',
  promise: getMessage(newMessage)
}
`})}),`
`,n.jsx(e.p,{children:"我们将会维护一个 action 组成的数组作为状态"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const [actions, updateActions] = useState([]);
`})}),`
`,n.jsxs(e.p,{children:["我们将结合 Suspense fallback 的特性，请求过程中通过 fallback 展示 ",n.jsx(e.code,{children:"newMessage"}),"，然后请求成功之后再使用 promise 的请求结果来替换"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`{actions.map((action, index) => (
  <Suspense key={\`h-\${index}\`} fallback={<Message>{action.newMessage}(Seding...)</Message>}>
    <ListItem promise={action.promise} />
  </Suspense>
))}
`})}),`
`,n.jsx(e.p,{children:"然后在 form 的 action 回调中，新增新的 action"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function formAction(formData) {
  let newMessage = formData.get("message")
  form.current.reset();
  let action = {
    newMessage,
    promise: getMessage(newMessage)
  }
  updateActions((actions) => [...actions, action])
}
`})}),`
`,n.jsx(e.p,{children:"完整代码请看右侧展示区域，代码演示如下"}),`
`,n.jsx(CE,{}),`
`,n.jsx(e.p,{children:"为了方便观察输入前和输入后的变化过程，我特意让请求成功之后返回的内容与输入时的内容不同。实际情况应该保持一致。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"剩下一个需求，是请求失败展示错误或者重试，留一个小挑战，大家可以自行扩展一下"}),`
`]})]})}function kE(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(iv,{...t})}):iv(t)}function ME(){return n.jsx(ae,{renderArticle:t=>n.jsx(kE,{components:{code:t}})})}function AE(t,e){return e}async function RE(t){return await new Promise((e,i)=>{setTimeout(()=>{Math.random()>.1?e(t):i(t)},1e3)}),t}const LE="_star_1fvk4_1",TE="_cen_1fvk4_8",EE="_active_1fvk4_13",$E="_aj_1fvk4_1",DE="_lef_1fvk4_1",OE="_c_1fvk4_8",BE="_rig_1fvk4_1",zE="_loading_1fvk4_37",er={star:LE,cen:TE,active:EE,aj:$E,lef:DE,c:OE,rig:BE,loading:zE};function UE(){const[t,e]=j.useState(!1),[i,o]=j.useOptimistic(t,AE),[c,m]=j.useTransition(),[d,h]=j.useState();function f(){if(c)return;let v=!t;m(async()=>{o(v);try{let y=await RE(v);e(y),h(!0)}catch{h(!1)}})}let x=i?`${er.cen} ${er.active}`:er.cen;return n.jsxs("div",{children:[n.jsxs("div",{className:er.star,onClick:f,children:[n.jsx("div",{id:er.lef,className:x}),n.jsx("div",{id:er.c,className:x}),n.jsx("div",{id:er.rig,className:x})]}),n.jsxs("div",{className:er.loading,children:["状态：",c&&"请求中...",!c&&d===!0&&"请求成功",!c&&d===!1&&"请求失败"]})]})}const PE=`import { useOptimistic, useState, useTransition } from "react";
import {reducer} from './reducer'
import { likeApi } from "./api";
import s from './index.module.css'

export default function Index() {
  const [like, setLike] = useState(false);
  const [optimisticLike, dispatch] = useOptimistic(like, reducer);
  const [isPending, startTransition] = useTransition()
  const [end, setEnd] = useState()

  function __clickHandler() {
    if (isPending) return
    let newState = !like;
    startTransition(async () => {
      dispatch(newState)
      try {
        let state = await likeApi(newState)
        setLike(state)
        setEnd(true)
      } catch (e) {
        setEnd(false)
      }
    })
  }

  let __cls = optimisticLike ? \`\${s.cen} \${s.active}\` : s.cen

  return (
    <div>
      <div className={s.star} onClick={__clickHandler}>
        <div id={s.lef} className={__cls}></div>
        <div id={s.c} className={__cls}></div>
        <div id={s.rig} className={__cls}></div>
      </div>
      <div className={s.loading}>
        状态：
        {isPending && '请求中...'}
        {!isPending && end === true && '请求成功'}
        {!isPending && end === false && '请求失败'}
      </div>
    </div>
  );
}

`,HE=`export function reducer(state, newState) {
  return newState
}
`,VE=`export async function likeApi(message) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(message)
      } else {
        reject(message)
      }
    }, 1000)
  });
  return message;
}
`,qE=`.star {
  position: relative;
  transform: scale(0.2);
  height: 200px;
  --active-color: #d5093c;
  --normal-color: #cdcdcd;
}
.cen {
  width: 200px;
  height: 200px;
  background-color: var(--normal-color);
}
.cen.active {
  background-color: var(--active-color);
  animation: 1s aj;
}

#lef {
  border-radius: 100px;
  position: absolute;
  top:200px;
  left: 300px;
}
#c {
  transform: rotate(45deg);
  position: absolute;
  top:275px;
  left: 375px;
}
#rig {
  border-radius: 100px;
  position: absolute;
  top:200px;
  left: 450px;
}

.loading {
  text-align: center;
}

@keyframes aj {
  0%{transform: scale(1)rotate(45deg);}
  50%{transform: scale(1.1)rotate(45deg);}
  100%{transform: scale(1)rotate(45deg);}
}
`;function FE(){return n.jsx(ee,{files:{index:PE,reducer:HE,api:VE,"index.module.css":qE},caseRender:n.jsx(UE,{})})}function av(t){const e={code:"code",h3:"h3",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{children:"一个复杂的案例"}),`
`,n.jsx(e.p,{children:"再来实现一个比较常见的点赞按钮的交互逻辑。演示效果如上图所示。具体需求如下："}),`
`,n.jsx(e.p,{children:"当按钮处于灰色状态时，表示用户还未点赞该文章。点击之后，变成红色，表示点赞。"}),`
`,n.jsx(e.p,{children:"当按钮处于红色状态时，表示用户已经点赞该文章。点击之后变成灰色，表示取消点赞。"}),`
`,n.jsxs(e.p,{children:["解决方案与前面提到的完全一致，同时也结合了 ",n.jsx(e.code,{children:"useTransition"})," ，我们就不再一一分析步骤，直接展示完整代码"]}),`
`,n.jsx(FE,{}),`
`,n.jsx(e.p,{children:"在 api 的请求中，我们可以通过判断随机数的大小来模拟请求失败时的表现。目前请求失败的概率是 10%"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// api.js
export async function likeApi(message) {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(message)
      } else {
        reject(message)
      }
    }, 1000)
  });
  return message;
}
`})}),`
`,n.jsx(e.p,{children:"由于逻辑与之前几乎保持一致，因此本案例主要通过代码学习，未做详细讲解，完整代码如右侧所示。"})]})}function XE(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(av,{...t})}):av(t)}function GE(){return n.jsx(ae,{renderArticle:t=>n.jsx(XE,{components:{code:t}})})}function ov(t){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{children:"完结感言"}),`
`,n.jsxs(e.p,{children:["从 5 月 18 号左右，萌生了要写一本这样的付费小册，到现在 7 月 27 号，历时两个多月，",n.jsx(e.strong,{children:"这本小册终于正式完结啦。"}),"  ｡:.ﾟヽ(*´∀`)ﾉﾟ.:｡ 由于我没有上班，几乎可以说是全职投入这本小册，因此看上去历时并不久，但是我经历的东西和过程确实非常多。"]}),`
`,n.jsx(e.p,{children:"当我看着付费群里的 300 多人，从盈利的角度来说，在没有经历过大面积长时间的宣传，这本小册无疑是非常非常成功的。"}),`
`,n.jsx(e.p,{children:"但是除此之外，在这本小册里，我还投入了对于新的学习方式和商业模式的探索，是对于我学习能力的一次重要考验，是对于我综合能力的一次有力验证，因此这本小册对我个人而言，意义非凡，它可能是一个重要的转折点。"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"学习方法上的探索"}),`
`,n.jsxs(e.p,{children:["大约从 2017 年开始，我就在",n.jsx(e.a,{href:"https://www.yuque.com/coreadvance/ar2my1/apk8cr",children:"从事 1V1 帮助别人提高前端技术能力的副业"}),"，在这个长达 7 年的教学生涯中，我接触到了大量的形形色色的人。在学习的基础能力上，每个人都各不相同。有的人本身就具备较强的基础学习能力，稍加指点，就能够在职场中获得巨大的蜕变。而更多的却是连最基础的学习方法都没有掌握的人。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"因此他们的一个共同的表现就是，他们在学习新知识的时候非常吃力。"})," 甚至还有很多人长时间不得其法。所以在这个过程中，我慢慢变得擅长为每个人量身定做适合的学习方法，并且在教学的过程中，把学习方法的培养变成重中之重。在这个基础之上，他们在跟我学习一段时间之后，就能够自己有足够的学习能力学习新的知识，从而具备自我成长的潜力。一个很好的结果就是，",n.jsx(e.strong,{children:"有好些人在技术方面的成就已经在我之上。"})]}),`
`,n.jsxs(e.p,{children:["但是一个很大的问题就是，这样量身定做学习方法的方式并",n.jsx(e.strong,{children:"不具备普适价值"}),"。我有一个很大的感受就是，",n.jsx(e.strong,{children:"学霸的学习方法往往都是共通的，但是学霸之外，大家在学习上的痛，就长得奇形怪状，千奇百怪。"})," 同样的学习方法，在一个人身上闪闪发光，但是在另外一个人的身上，甚至毫无作用。甚至有的人由于自律的问题，需要在沟通的过程中不停的给他施加压力，否则就是长时间的自我懈怠。"]}),`
`,n.jsx(e.p,{children:"更多的时候，还需要在学习过程中进行大量的心理辅导，帮助它解决各种原因导致的心里内耗。"}),`
`,n.jsxs(e.p,{children:["因此我一直在思考，如何找到一种适合更多人的学习方式。虽然这种学习方法效果不如学霸级学习方法那么立竿见影，但是至少能够保证大多数人都学有所得。经过很多次思考、探索、实践，后来我才发现被广为病垢的",n.jsx(e.strong,{children:"填鸭式学习法"}),"可能才是我想要找的内容。"]}),`
`,n.jsx(e.p,{children:"因为我在很长一段时间里，都一直认为填鸭式学习法是一种落后的，低效的学习方式，但是在带过很多学生之后发现，这可能是大多数人更愿意接受、并且效果性价比最高的一种学习方式。这样的思维转变对我来说非常困难。但是后来我重新审视了我自己长期以来带有偏见的观念。"}),`
`,n.jsx(e.p,{children:"这个思考的灵感来源于付费群里的同学有人跟我说，很多时候不用非得彻底理解，先知道怎么用，用多了自然就理解了。因此在这个基础之上，我在文章内容中，内置了大量的实战案例，以及对应的，原样的代码。大概如下所示。"}),`
`,n.jsx(ub,{}),`
`,n.jsx(e.p,{children:"在大量这样的案例的支撑之下，有可能读者无法快速理解我想要传达的开发思维与架构思维，但是现成的案例可以让他快速将其运用到项目实践中。大量的运用实践可以帮助读者在实践中消化，在实践中理解与感悟，这样的障碍和瓶颈会降低很多。学习推进的进度可能会比较慢，但不会让人感觉窒息，不得其法。"}),`
`,n.jsx(e.p,{children:"有真实案例运行的呈现方式，和只是贴代码或者截图很不一样。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"这里的不同则来源于很多时候，贴的代码可能会存在缺少部分细节从而导致代码压根无法正确运行的情况，给学习者带来巨大的困扰。"}),`
`,n.jsx(e.li,{children:"另外一方面则是排版的不规则和零散，会让学习者不得其法。"}),`
`,n.jsx(e.li,{children:"真实案例能够更加直观的展示出来一篇文章的目标，在理解成本上也会降低很多。"}),`
`,n.jsx(e.li,{children:"除此之外，很多只贴代码的表达，是可以不用经过验证的，许多人的文章虽然写出来了，但是并没有真的运行成功过，因此真实案例也是一次有效的验证成功，学习者不用担心这样的代码是无法运行的，减少了很多心里负担。"}),`
`]}),`
`,n.jsxs(e.p,{children:["也是到了后来，群友的正向学习反馈，让我更加理解了",n.jsx(e.strong,{children:"书读百遍，其义自现"}),"的含义。因此实际上这本小册很早就已经写完了，大概是 6 月 27 号发布了第一个版本。这一个月时间里，经历了许多群友的学习验证之后，我才敢写这篇完结感言，因为从大家的反馈中，我感受到了我的这一次探索是达到了我的预期成效的。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["我写的每一本付费小册，都会深度践行我在学习方法上的思考和感悟，因此在小册开头，我都会花费大量的篇幅为大家讲解在学习方法上我是如何思考的，以便于大家能够快速明确应该以什么样的心态和理念去学习它，例如之前的",n.jsx(e.a,{href:"https://mp.weixin.qq.com/s?__biz=MzI4NjE3MzQzNg==&mid=2649867007&idx=1&sn=6443ff970cd077bbb50de74ce84afa06",children:"《React 哲学》"}),"、",n.jsx(e.a,{href:"https://appxw863qeq2150.h5.xiaoeknow.com/v1/goods/goods_detail/course_2Y46vk3Fhd2CF4CrB5qSNjW6A9R?",children:"《JavaScript 核心进阶》"}),"，这本小册也是这样，可能未来我会将这些学习理念融合到一起，那么我的小册质量会越来越高"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"商业模式上的思考"}),`
`,n.jsxs(e.p,{children:["这本付费小册，是在我",n.jsx(e.a,{href:"https://mp.weixin.qq.com/s/W7jb77rSzML9vUbF-G0cPg",children:"探索微信小程序流量主模式失败"}),"之后的另外一种尝试。我希望能够在我获得收益的同时能够真实的帮助到他人，从而达到一种",n.jsx(e.strong,{children:"互利共赢"}),"的局面。"]}),`
`,n.jsxs(e.p,{children:["因此，在付费群里面我多次与大家分享了这本小册可以使用在什么地方。首先要明确的一个就是，React 19 代表了一种新的开发方式，",n.jsx(e.strong,{children:"它本身在架构思维上是具有很强的先进性的"}),"。因此我们可以"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"1、在面试中表达自己对 React19 的学习成果，从而展示自己对于新知识的热情"}),`
`,n.jsx(e.li,{children:"2、在团队中做相关的技术分享，为年底绩效等铺垫内容"}),`
`,n.jsx(e.li,{children:"3、彻底掌握 React19 的架构思维，重构团队中已经负重前行的项目，从而体现自己的团队贡献，为晋升打好基础，并且在这个过程中提升自己的项目架构能力"}),`
`]}),`
`,n.jsx(e.p,{children:"值得高兴的是，在这个一个月的时间里，确实有少数几位同学按照我的推荐去认真执行了，并且取得了不错的成效。因此，我希望这种商业模式能够健康的持续下去，以帮助到更多的人。"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"技术方案上的思考"}),`
`,n.jsx(e.p,{children:"从最开始萌生一个简单的想法，到最终将这个想法落地，其实中间还需要走很长的路。因此制作一本这样的付费小册的想法只需要一个一瞬间，但是真实要落地下来，面临的困难却非常多。如何实现它成为了一个难题。"}),`
`,n.jsxs(e.p,{children:["这其中比较困难的就在于，如何让演示案例与演示代码",n.jsx(e.strong,{children:"共存"}),"，并且案例运行的代码与展示的代码是同一份。这样就极大程度的确保了",n.jsx(e.strong,{children:"一致性"}),"。"]}),`
`,n.jsx(e.p,{children:"为了解决这个难题，我做了一些尝试"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"一、调研现有成熟的技术网站"})}),`
`,n.jsx(e.p,{children:"我调研了大多数常用的技术博客论坛，例如大家熟知的知乎、掘金、语雀、以及国外的一些平台，Medium，github 等，但是他们都无法支持我的想法，当然，我本身对我的想法能够被满足也不报太大的希望。"}),`
`,n.jsx(e.p,{children:n.jsxs(e.strong,{children:["二、与 ",n.jsx(e.code,{children:"mdnice"})," 核心开发大鹏沟通，是否能够新增一些需求满足我的想法"]})}),`
`,n.jsxs(e.p,{children:["大鹏是我在做自由职业时认识的一位大佬，他的个人作品 ",n.jsx(e.code,{children:"mdnice"})," 在 md 编辑器上的积累已经非常成熟，因此，因此我第二个想到的是看看能不能在这个基础之上做一些扩展，来满足我的需求，不过后续我们相互沟通之后发现我的这种需求放到他现有的体系里不是很合适，因为 ",n.jsx(e.code,{children:"mdnice"})," 主要面向的是针对公众号的布局开发。"]}),`
`,n.jsx(e.p,{children:"不过在后续的沟通过程中，我们又迸发了许多新的想法，并且后续我可能也会参与 mdnice 的一些开发工作，发挥我的独特优势进一步补全我们的想法，让 mdnice 在商业化的道路上变得更加完善。"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"三、调研现有的博客系统，例如 dumi、vitepress、Rspress"})}),`
`,n.jsx(e.p,{children:"这些都是非常成熟的解决方案。并且内置的 mdx 可以比较轻松的完成我的构想。但是由于我的设想中，定制化程度太高，在花费了俩三天时间学习 vitepress 的使用过程中，感觉有一些想要的东西还是实现不了，因此最终决定放弃使用别人现有的方案，而是基于 mdx 自己组装一套方案出来。"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"四、调研现有的技术方案"})}),`
`,n.jsx(e.p,{children:"得益于 React 生态的强大，我原本认为会很困难的事情，没想到都有好几种对应的解决方案。"}),`
`,n.jsx(e.p,{children:"这里边需要解决问题包括"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"1、md 文件格式的渲染。可选的方案有 react-markdown、mdx 等"}),`
`,n.jsx(e.li,{children:"2、代码高亮 可选的方案有 react-syntax-highlighter、remarkjs、highlight 等"}),`
`,n.jsx(e.li,{children:"3、内置编辑器有 Monaco Editor、Mirror Editor 等"}),`
`,n.jsx(e.li,{children:"4、案例热更新方案 Sandpack"}),`
`]}),`
`,n.jsx(e.p,{children:"我花了很大的精力去分别验证这些解决方案的可行性，最终经过试用淘汰，演变成目前的状态，虽然有的方案最终我并没有采用，但是在这个过程中我对他们的运用已经非常熟练。"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"对我综合能力的考验"}),`
`,n.jsx(e.p,{children:"自己开发一个网站，很多时候最考验我的，反而是综合能力。例如在做这个网站的过程中，我自己为整个网站摸索了 UI 风格，并且为每一个案例都精心准备了视觉效果良好的 UI 设计。例如这个案例"}),`
`,n.jsx(ib,{}),`
`,n.jsx(e.p,{children:"我自己设计并实现了常用的 UI 组件。"}),`
`,n.jsx(e.p,{children:"我自己从零到一完成了移动端的适配。"}),`
`,n.jsx(e.p,{children:"我自己重新设计了整个网站的架构，以便于扩展到下一份付费小册中去。"}),`
`,n.jsx(e.p,{children:"我自己招商引资，寻找了几个赞助商进行合作。"}),`
`,n.jsx(e.p,{children:"我自己负责宣传，虽然目前宣传力度很微弱，但是也在某种程度上让几百位同学认同了我的这本小册的价值。"}),`
`,n.jsx(e.p,{children:"所有的事情从头到尾都需要一个人来做，这对于我综合能力的要求是非常高的。事实上在刚开始的时候，我并没有很大的预期他能够取得成功，包括现在我也没有很大的底气能够得到更多人的认可。每一次的宣传都是小心翼翼的试探，很担心最终的结果是无人理会，只是我单方面的自娱自乐。"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"对于最佳实践的探索"}),`
`,n.jsxs(e.p,{children:["很显然，React 19 的出现，意味着一种",n.jsx(e.strong,{children:"新的开发思维"}),"被正式抬到了大众眼前。在这种新的开发思维之下，我也是从头开始尝试与学习，那么如何找到最佳实践本身就是一件充满挑战的事情。"]}),`
`,n.jsx(e.p,{children:"因此，在写每一个案例时，我都会非常小心的去求证和对比，感受每一种写法在开发思维上所带来的提升。这是最难的一个方向。因此在写这本小册之前，我会把每一个知识点我的学习体会、过程、疑问都放到公众号中与大家进行探讨，在多方求证之后，确定了这样的做法是目前的最佳实践之后，才形成完整的教学文章。"}),`
`,n.jsxs(e.p,{children:["因此，在我的个人公众号",n.jsx(e.code,{children:"这波能反杀"}),"中，你能看到一系列关于 React 19 的文章。幸运的是，在公众号中，我遇到了很多顶尖的大佬跟我探讨学习心得。这才确保了这本付费小册的质量是非常高的。感谢每一位参与过探讨帮助我成长的大佬。"]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"最后"}),`
`,n.jsxs(e.p,{children:["学习与进步是一个需要持续不断做下去的事情。在写这本小册的过程中，我也收获了大量的新的知识。我的进步非常大。很庆幸我自己可以",n.jsx(e.strong,{children:"很纯粹"}),"的做完这个事情。也希望自己能够长期保持下去，摈弃掉一些外界乱七八糟的杂念与内耗，持续学习，持续进步，以此与大家共勉。"]}),`
`,n.jsxs(e.p,{children:["小册目前价格：",n.jsx(e.strong,{children:"30 元"})]}),`
`,n.jsxs(e.p,{children:["购买方式：添加我的微信 ",n.jsx(e.code,{children:"icanmeetu"})," 微信转账即可，获得激活码即可阅读所有内容"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"为了大家能够更加快速的消化本文内容，后续我会在付费群中，直播为大家讲解本小册的内容，欢迎大家进群关注。后进群的朋友可以在群公告中看到录播视频"}),`
`]})]})}function IE(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(ov,{...t})}):ov(t)}function YE(){return n.jsx(ae,{renderArticle:t=>n.jsx(IE,{components:{code:t}})})}const Nb=[{path:"live",name:"0、直播录屏地址",component:m9},{type:"tip",name:"前言"},{path:"index",name:"1、开发方式变革",component:u9},{path:"layers",name:"2、学习的三个层次",component:Z8},{path:"create",name:"3、创建项目",component:I8},{type:"tip",name:"use(promise)"},{path:"use/base",name:"4、use 基础知识",component:O9},{path:"use/suspense",name:"5、Suspense",component:pC},{path:"use/update",name:"6、点击更新数据",component:TC},{path:"use/initialize",name:"7、初始化请求并更新",component:sk},{path:"use/updatetolist",name:"8、请求并新增到列表",component:Nk},{path:"use/loadmore",name:"9、分页列表加载更多",component:Ek},{path:"use/search",name:"10、搜索",component:Qk},{path:"use/tabs",name:"11、tab 简单切换",component:fM,label:"1"},{path:"use/tabshard",name:"12、tab 缓存切换",component:RM,label:"2"},{path:"use/fromchildren",name:"13、父级获取数据",component:VM,label:"3"},{path:"use/nest",name:"14、Suspense 嵌套",component:JM},{path:"use/react16",name:"15、在低版本中使用",component:dA},{type:"tip",name:"use(context)"},{path:"use/ref",name:"16、ref 调整",component:TA},{path:"use/modal",name:"17、自定义弹窗组件",component:VA},{path:"use/contextmodify",name:"18、弹窗中更改内容",component:JA},{path:"use/skinswitch",name:"19、皮肤切换次数",component:dR},{type:"tip",name:"并发 API"},{path:"use/deferred",name:"20、useDeferredValue",component:IR},{path:"use/transition",name:"21、useTransition",component:pL},{type:"tip",name:"Compiler"},{path:"use/importwith19",name:"22、React 19 中引入",component:fL},{path:"use/importwithlower",name:"23、低版本中引入",component:gL},{path:"use/importwithwebpack",name:"24、webpack中引入",component:jL},{path:"use/compilerbase",name:"25、Compiler 编译原理",component:kL},{path:"use/compilercount",name:"26、收益分析-递增",component:EL},{path:"use/compilerexpensive",name:"27、收益分析-耗时子组件",component:qL},{path:"use/compilertabs",name:"28、收益分析-tabs",component:oT},{type:"tip",name:"form action"},{path:"formaction/base",name:"29、form 基础",component:uT},{path:"formaction/formdata",name:"30、FormData 基础",component:mT},{path:"formaction/action",name:"31、form action",component:ST},{path:"formaction/useformstatus",name:"32、useFormStatus",component:OT},{path:"formaction/useactionstate",name:"33、useActionState",component:QT},{path:"formaction/useoptimistic",name:"34、useOptimistic",component:lE,label:"1"},{path:"formaction/useoptimistic2",name:"35、useOptimistic",component:vE,label:"2"},{path:"formaction/useoptimistic3",name:"36、useOptimistic",component:ME,label:"3"},{path:"formaction/useoptimistic4",name:"37、复杂案例",component:GE,label:"4"},{type:"tip",name:"后续闲谈"},{path:"formaction/end",name:"38、完结感言",component:YE}];function lv(){return n.jsx("div",{children:Nb.map((t,e)=>t.type==="tip"?n.jsx("div",{className:"text-sm text-gray-400 first:pt-0 pb-4 pt-8",children:t.name},`z-${e}`):n.jsx(Vr,{className:"text-gray-700",activeName:"text-blue-700",to:t.path,children:n.jsxs("li",{className:"py-3 text-sm transition flex items-center justify-between hover:text-blue-700",children:[n.jsx("div",{className:"line-clamp-1",children:t.name}),t.label?n.jsx($p,{label:t.label,primary:!0,className:"ml-2"}):null]},t.path)},t.path))})}const ZE=["1872285653694312448","1813145181655089152"],wb="1876449089626005504",KE="tutorial",WE="index",QE="React@19.0.0",JE=`https://xinyuzone.cn/column/${wb}`;function e$(){return ZE.includes(qr().user_id)?Promise.resolve({status_code:0,status:1}):Fi("/eden/v1/open/column/subscription/status",{column_id:wb})}let _b=0;function n$(t){_b=t}function t$(){return _b}function s$({children:t,pass:e}){const{isLogin:i}=qr();if(!e&&!i)return n.jsxs("div",{className:"w-full py-32 flex flex-col justify-center items-center",children:[n.jsx(Oi,{className:"text-cyan-500",size:32}),n.jsx("div",{className:"my-2 text-lg font-bold",children:"您还没有登录"}),n.jsx("div",{className:"text-xs",children:"本网站仅支持通过三方授权平台新语进行登录"}),n.jsx($n,{to:fc(),className:"bg-green-500 py-1.5 px-4 text-white rounded mt-8",children:"登录"})]});const o=t$();return!e&&o!==1?n.jsxs("div",{className:"w-full py-32 flex flex-col justify-center items-center",children:[n.jsx(Oi,{className:"text-cyan-500",size:32}),n.jsx("div",{className:"my-2 text-lg font-bold",children:"您还没有订阅"}),n.jsx("div",{children:"你需要在新语社区的专栏中订阅之后才能访问内容"}),n.jsx($n,{to:JE,className:"bg-green-500 py-1.5 px-4 text-white rounded mt-8",children:"订阅"})]}):t}function r$({promise:t}){const e=dc(),i=mc(),{pathname:o}=or(),c=j.use(t);return n$(c.status),j.useEffect(()=>{location.pathname===`/${KE}`&&e(WE),window.scrollTo(0,0)},[o]),n.jsx(s$,{children:i})}function i$(){const[t]=j.useState(e$),e=j.useRef(null);function i(){window.scrollTo({top:0,behavior:"smooth"})}function o(){const c=document.getElementById("diviler_");c&&c.scrollIntoView({block:"start",behavior:"smooth"})}return n.jsxs("div",{className:"pt-16 md:flex",children:[n.jsx("aside",{id:"vp-aside",className:"fixed top-0 left-0 bottom-0 overflow-y-scroll bg-gray-50 hidden md:block",children:n.jsxs("div",{className:"px-6 w-full",children:[n.jsxs("div",{className:"flex items-center pb-8 pt-24 sticky top-0 bg-gray-50 border-b mb-8",children:[n.jsx("div",{className:"flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 text-cyan-500",children:n.jsx("path",{fillRule:"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",clipRule:"evenodd"})})}),n.jsxs("div",{className:"text-sm",children:[n.jsx("div",{children:"当前版本"}),n.jsx("div",{className:"text-gray-500",children:QE})]})]}),n.jsx("nav",{className:"pb-8",children:n.jsx(lv,{})})]})}),n.jsxs("div",{id:"vp-content",children:[n.jsxs("div",{className:"pt-4 md:pt-8 relative flex justify-center",children:[n.jsx("div",{id:"cp-content",className:"keep px-4 md:px-8 2xl:px-24 pb-24 w-0 flex-1",children:n.jsx(j.Suspense,{fallback:n.jsx("div",{}),children:n.jsx(r$,{promise:t})})}),n.jsx("aside",{id:"cp-aside",className:"pr-6 relative items-start",children:n.jsxs("div",{id:"headings",className:"w-full sticky top-24 space-y-4 text-gray-700",children:[n.jsxs($n,{to:"https://xinyuzone.cn/column/1818097927437131776",className:"block rounded bg-gray-50 p-4 border border-gray-100",target:"_blank",children:[n.jsx(Km,{className:"text-blue-400"}),n.jsx("div",{className:"font-bold my-2",children:"JavaScript 核心进阶"}),n.jsx("div",{className:"text-sm leading-6",children:"从构建基础知识体系出发，抓紧核心基础内容，给你地道的前端进阶思维"})]}),n.jsxs($n,{href:"https://usehook.cn/",className:"block rounded bg-gray-50 p-4 border border-gray-100",target:"_blank",children:[n.jsx(Ym,{className:"text-green-400"}),n.jsx("div",{className:"font-bold my-2",children:"React 19 全解"}),n.jsx("div",{className:"text-sm leading-6",children:"全网第一本系统介绍 React 19 的小册，大量实践案例，给你沉浸式学习体验"})]}),n.jsxs($n,{href:"https://usehook.cn/advance/index",className:"block rounded bg-gray-50 p-4 border border-gray-100",target:"_blank",children:[n.jsx(Zm,{className:"text-red-400"}),n.jsx("div",{className:"font-bold my-2",children:"React 19 尊享版"}),n.jsx("div",{className:"text-sm leading-6",children:"专为前端资深架构师提供的进阶内容，聚焦项目架构，强化开发效率与开发体验"})]}),n.jsx("div",{className:"rounded bg-gray-100 py-8 text-center text-gray-500",children:n.jsx("div",{className:"",children:"成为赞助商"})}),n.jsxs("div",{onClick:i,className:"rounded py-2 border border-gray-200 text-center flex items-center justify-center cursor-pointer",children:[n.jsx(Im,{size:16}),n.jsx("div",{className:"ml-2",children:"滚动到顶部"})]}),n.jsxs("div",{onClick:o,className:"rounded py-2 border border-gray-200 text-center flex items-center justify-center cursor-pointer",children:[n.jsx(Gm,{size:16}),n.jsx("div",{className:"ml-2",children:"滚动到评论"})]})]})})]}),n.jsx(ue,{className:"fixed bottom-6 right-4 md:hidden",signal:!0,onClick:()=>e.current.show(),children:"目录"}),n.jsxs(xc,{ref:e,direction:"left",width:"60%",children:[n.jsx("header",{className:"h-16 flex items-center px-4",children:n.jsx(vo,{})}),n.jsx("nav",{className:"bg-white h-full py-8 overflow-scroll px-6",onClick:()=>e.current.close(),children:n.jsx(lv,{})})]})]})]})}function Jl(t){const{total:i=8,current:o=1,onChange:c}=t,m=j.useRef(Math.ceil(o/8)),d=j.useRef(o),[h,f]=j.useState((o-1)%8),x=[],v=m.current===Math.ceil(i/8)?i%8===0?8:i%8:8;for(let F=0;F<v;F++)x.push(8*(m.current-1)+F+1);const y="border border-blue-600";function S(F){f(F),d.current=8*(m.current-1)+F+1,c&&c(d.current)}function _(){let F=h+1;d.current+=1,F>=8&&(F=0,m.current+=1),f(F),c&&c(d.current)}function T(){let F=h-1;d.current-=1,F<0&&(F=7,m.current-=1),f(F),c&&c(d.current)}const L=d.current===1,k=d.current===i,A="flex items-center justify-center",O=Fe(A,{"cursor-not-allowed":L}),B=Fe(A,{"cursor-not-allowed":k});return n.jsxs("div",{className:"flex space-x-2",children:[n.jsx(ue,{disabled:L,rect:!0,className:O,onClick:T,children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"})})}),x.map((F,z)=>n.jsx(ue,{onClick:()=>S(z),ghost:!0,rect:!0,className:Fe("w-10",{[y]:h===z}),children:F},F)),n.jsx(ue,{disabled:k,rect:!0,className:B,onClick:_,children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})})})]})}function a$({promise:t,onChange:e,loading:i}){const o=j.use(t),[,c]=j.useReducer(x=>!x,!0);let m=j.useMemo(()=>o.map(x=>({selected:!1,...x})),[t]);function d(x,v){m[v].selected=x.target.checked,c()}const h=m.reduce((x,v)=>(v.selected&&(x+=1),x),0);function f(x){e&&e({current:x})}return n.jsxs("div",{className:i?"opacity-70":"opacity-100",children:[m.map((x,v)=>n.jsxs(we,{children:[n.jsx("input",{type:"checkbox",className:"w-5 mr-4",checked:x.selected,onChange:y=>d(y,v)}),n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md flex-1",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:x.thumbnail,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:x.name}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:x.desc})]})]})]},`h${v}`)),n.jsxs("div",{className:"mb-4",children:["选中项一共有：",h]}),n.jsx(Jl,{total:50,onChange:f})]})}function o$(t,e){let i=new AbortController,o=i.signal,c=Object.keys(e).reduce((d,h)=>`${d}${d?"&":""}${h}=${e[h]}`,"");const m=new Promise(d=>{fetch(`${t}?${c}`,{signal:o}).then(h=>{d(h.json())}).catch(()=>{console.log("接口成功取消！")})});return m.cancel=()=>{i&&i.abort()},m}const l$=t=>o$("https://randomuser.me/api",{results:t,inc:"name,gender,email,nat,picture&noinfo"}),c$=(t={})=>{const{number:e}=t;let i=l$(e),o=i.then(c=>c.results);return o.cancel=i.cancel,o},cv=t=>{const e=c$(t);return e.then(i=>(i.total=100,i.map((o,c)=>(o.desc=`${c}、${Ce()}`,o.name=o.name.first+" "+o.name.last,o.thumbnail=o.picture.thumbnail,o.id=An(),o)))),e};function u$(t){const{...e}=t;return n.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),n.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function d$({value:t,onChange:e}){const[i,o]=j.useState(t);function c(m){const d=m.target.value;o(d),e&&e(d)}return n.jsxs(we,{children:[n.jsx("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),n.jsxs("select",{id:"cars",className:"border rounded px-3 py-1",value:i,onChange:c,children:[n.jsx("option",{value:"1",children:"1"}),n.jsx("option",{value:"2",children:"2"}),n.jsx("option",{value:"3",children:"3"}),n.jsx("option",{value:"4",children:"4"})]})]})}function m$({onChange:t}){function e(o){t&&t({search:o.target.value})}function i(o){t&&t({number:o})}return n.jsxs(we,{between:!0,children:[n.jsx(u$,{onChange:e,placeholder:"Enter something"}),n.jsx(d$,{value:"4",onChange:i})]})}function p$(){const t=j.useRef({search:"",number:4,current:1}),[e,i]=j.useState(()=>cv(t.current)),o=j.useDeferredValue(e);function c(m){e.cancel(),t.current=Object.assign(t.current,m),i(cv(t.current))}return n.jsxs("div",{children:[n.jsx(m$,{onChange:c}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(a$,{promise:o,onChange:c,loading:o!==e})})]})}const h$=`import {useState, Suspense, useRef, useDeferredValue} from 'react'
import Skeleton from 'components/Skeleton'
import List from './List'

import {fetchListController} from './controller'
import Filter from './Filter'

export default function Demo01() {
  const parameter = useRef({
    search: '',
    number: 4,
    current: 1
  })

  const [promise, update] = useState(() => fetchListController(parameter.current))
  const deferred = useDeferredValue(promise)

  function __filterChange(option) {
    promise.cancel()
    parameter.current = Object.assign(parameter.current, option)
    update(fetchListController(parameter.current))
  }

  return (
    <div>
      <Filter onChange={__filterChange} />
      <Suspense fallback={<Skeleton/>}>
        <List promise={deferred} onChange={__filterChange} loading={deferred !== promise} />
      </Suspense>
    </div>
  )
}
`,f$=`import { use, useReducer, useMemo } from 'react'
import Flex from 'components/Flex'
import Pagination from 'components/Pagination'

export default function CurrentList({promise, onChange, loading}) {
  const results = use(promise)
  const [, forceUpdate] = useReducer((boolean) => !boolean, true)

  let list = useMemo(() => {
    return results.map(item => ({
      selected: false,
      ...item
    }))
  }, [promise])

  function __radioHandler(e, i) {
    list[i].selected = e.target.checked
    forceUpdate()
  }

  const count = list.reduce((prev, cur) => {
    if(cur.selected) { prev += 1 }
    return prev
  }, 0)

  function pageChange(index) {
    onChange && onChange({current: index})
  }

  return (
    <div className={loading ? 'opacity-70' : 'opacity-100'}>
      {list.map((item, i) => (
        <Flex key={\`h\${i}\`}>
          <input type="checkbox" className='w-5 mr-4' checked={item.selected} onChange={(e) => __radioHandler(e, i)} />
          <div className='flex border p-4 items-center my-4 rounded-md flex-1'>
            <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt=''/>
            <div className='flex-1 ml-4'>
              <div className='font-bold'>{item.name}</div>
              <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
            </div>
          </div>
        </Flex>
      ))}
      <div className='mb-4'>选中项一共有：{count}</div>
      <Pagination total={50} onChange={pageChange} />
    </div>
  )
}
`,x$=`import {fetchList} from './service'
import {uuid, createRandomMessage} from 'utils'

export const fetchListController = (parameter) => {
  const p = fetchList(parameter)

  p.then(list => {
    list.total = 100
    return list.map((item, index) => {
      item.desc = \`\${index}、\${createRandomMessage()}\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      item.id = uuid()
      return item
    })
  })

  return p
}
`,g$=`import {prevListApi} from './api'

export const fetchList = (parameter = {}) => {
  const {number} = parameter

  let prev = prevListApi(number)

  let p1 = prev.then((res) => {
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}
`,v$=`import {get} from './http'

export const prevListApi = (number) => {
  return get('https://randomuser.me/api', {
    results: number,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,j$=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,y$=`import {useState, Suspense, useRef} from 'react'
import Flex from 'components/Flex';
import Input from './Input'
import Select from './Select'

export default function Filter({onChange}) {

  function __inputChange(e) {
    onChange && onChange({search: e.target.value})
  }

  function __selected(value) {
    onChange && onChange({number: value})
  }

  return (
    <Flex between>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Select value='4' onChange={__selected} />
    </Flex>
  )
}
`,b$=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`,S$=`import {useState} from 'react'
import Flex from 'components/Flex';

// 这里的 value，只影响初始化的值
export default function Select({value, onChange}) {
  const [current, setCurrent] = useState(value)

  function __selected(e) {
    const v = e.target.value
    // 控制内部状态更改
    setCurrent(v)

    // 将选中的值传递给外部
    onChange && onChange(v)
  }

  return (
    <Flex>
      <label htmlFor='cars' className='mr-8'>每一页个数</label>
      <select id='cars' className='border rounded px-3 py-1' value={current} onChange={__selected}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
    </Flex>
  )
}
`;function N$(){return n.jsx(ee,{files:{index:h$,List:f$,controller:x$,service:g$,api:v$,http:j$,"Filter/index":y$,"Filter/Input":b$,"Filter/Select":S$},caseRender:n.jsx(p$,{})})}function uv(t){const e={h3:"h3",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(N$,{}),`
`,n.jsx(e.h3,{children:"场景描述"}),`
`,n.jsx(e.p,{children:"本案例在 [14、统一思考过滤条件] 的基础之上进行扩展。"}),`
`,n.jsx(e.p,{children:"当列表有单独的本地的状态需要修改时的做法如下"})]})}function w$(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(uv,{...t})}):uv(t)}function _$(){return n.jsx(ae,{renderArticle:t=>n.jsx(w$,{components:{code:t}})})}function C$({promise:t}){const e=j.use(t),[,i]=j.useReducer(d=>!d,!0);let o=j.useMemo(()=>e.map(d=>({selected:!1,...d})),[t]);function c(d,h){o[h].selected=d.target.checked,i()}const m=o.reduce((d,h)=>(h.selected&&(d+=1),d),0);return n.jsxs("div",{children:[o.map((d,h)=>n.jsxs(we,{children:[n.jsx("input",{type:"checkbox",className:"w-5 mr-4",checked:d.selected,onChange:f=>c(f,h)}),n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md flex-1",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:d.thumbnail,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:d.name}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:d.desc})]})]})]},d.id)),n.jsxs("div",{children:["选中项一共有：",m]})]})}function k$(t,e){let i=new AbortController,o=i.signal,c=Object.keys(e).reduce((d,h)=>`${d}${d?"&":""}${h}=${e[h]}`,"");const m=new Promise(d=>{fetch(`${t}?${c}`,{signal:o}).then(h=>{d(h.json())}).catch(()=>{console.log("接口成功取消！")})});return m.cancel=()=>{i&&i.abort()},m}const M$=t=>k$("https://randomuser.me/api",{results:t,inc:"name,gender,email,nat,picture&noinfo"}),A$=(t={})=>{const{search:e,number:i}=t;let o=`searchList:key:${e}-${i}`;const c=localStorage.getItem(o);if(c){let h=new Promise(f=>{f(JSON.parse(c))});return h.cancel=()=>{},h}let m=M$(i),d=m.then(h=>(localStorage.setItem(o,JSON.stringify(h.results)),h.results));return d.cancel=m.cancel,d},dv=t=>{const e=A$(t);return e.then(i=>i.map((o,c)=>(o.desc=`${c}、${Ce()}`,o.name=o.name.first+" "+o.name.last,o.thumbnail=o.picture.thumbnail,o.id=An(),o))),e};function R$(t){const{...e}=t;return n.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),n.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function L$({value:t,onChange:e}){const[i,o]=j.useState(t);function c(m){const d=m.target.value;o(d),e&&e(d)}return n.jsxs(we,{children:[n.jsx("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),n.jsxs("select",{id:"cars",className:"border rounded px-3 py-1",value:i,onChange:c,children:[n.jsx("option",{value:"1",children:"1"}),n.jsx("option",{value:"2",children:"2"}),n.jsx("option",{value:"3",children:"3"}),n.jsx("option",{value:"4",children:"4"})]})]})}function T$({onChange:t}){function e(o){t&&t({search:o.target.value})}function i(o){t&&t({number:o})}return n.jsxs(we,{between:!0,children:[n.jsx(R$,{onChange:e,placeholder:"Enter something"}),n.jsx(L$,{value:"4",onChange:i})]})}function E$(){const t=j.useRef({search:"",number:4}),[e,i]=j.useState(()=>dv(t.current));function o(c){e.cancel(),t.current=Object.assign(t.current,c),i(dv(t.current))}return n.jsxs("div",{children:[n.jsx(T$,{onChange:o}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(C$,{promise:e})})]})}const $$=`import {useState, Suspense, useRef} from 'react'
import Skeleton from 'components/Skeleton'
import List from './List'

import {fetchListController} from './controller'
import Filter from './Filter'

export default function Demo01() {
  const parameter = useRef({
    search: '',
    number: 4
  })

  const [promise, update] = useState(() => fetchListController(parameter.current))

  function __filterChange(option) {
    promise.cancel()
    parameter.current = Object.assign(parameter.current, option)
    update(fetchListController(parameter.current))
  }

  return (
    <div>
      <Filter onChange={__filterChange} />
      <Suspense fallback={<Skeleton/>}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,D$=`
import { use, useReducer, useMemo } from 'react';
import Flex from 'components/Flex'

export default function CurrentList({promise}) {
  const results = use(promise)
  const [, forceUpdate] = useReducer((boolean) => !boolean, true)

  let list = useMemo(() => {
    return results.map(item => ({
      selected: false,
      ...item
    }))
  }, [promise])

  function __radioHandler(e, i) {
    list[i].selected = e.target.checked
    forceUpdate()
  }

  const count = list.reduce((prev, cur) => {
    if(cur.selected) { prev += 1 }
    return prev
  }, 0)

  return (
    <div>
      {list.map((item, i) => (
        <Flex key={item.id}>
          <input type="checkbox" className='w-5 mr-4' checked={item.selected} onChange={(e) => __radioHandler(e, i)} />
          <div className='flex border p-4 items-center my-4 rounded-md flex-1'>
            <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt=''/>
            <div className='flex-1 ml-4'>
              <div className='font-bold'>{item.name}</div>
              <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
            </div>
          </div>
        </Flex>
      ))}
      <div>选中项一共有：{count}</div>
    </div>
  )
}
`,O$=`import {fetchList} from './service'
import {createRandomMessage, uuid} from 'utils'

export const fetchListController = (parameter) => {
  const p = fetchList(parameter)

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、\${createRandomMessage()}\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      item.id = uuid()
      return item
    })
  })

  return p
}
`,B$=`import {prevListApi} from './api'

export const fetchList = (parameter = {}) => {
  const {search, number} = parameter
  let cachekey = \`searchList:key:\${search}-\${number}\`
  const cacheArr = localStorage.getItem(cachekey)

  if (cacheArr) {
    let p = new Promise((resolve) => {
      resolve(JSON.parse(cacheArr))
    })
    p.cancel = () => {}
    return p
  }

  let prev = prevListApi(number)

  let p1 = prev.then((res) => {
    localStorage.setItem(cachekey, JSON.stringify(res.results))
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}
`,z$=`import {get} from './http'

// API 应该与服务端提供的接口文档严格保持一致
// export const prevListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }
//
// export const nextListApi = async () => {
//   const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
//   return res.json()
// }

export const prevListApi = (number) => {
  return get('https://randomuser.me/api', {
    results: number,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,U$=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,P$=`import {useState, Suspense, useRef} from 'react'
import Flex from 'components/Flex';
import Input from './Input'
import Select from './Select'

export default function Filter({onChange}) {

  function __inputChange(e) {
    onChange && onChange({search: e.target.value})
  }

  function __selected(value) {
    onChange && onChange({number: value})
  }

  return (
    <Flex between>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Select value='4' onChange={__selected} />
    </Flex>
  )
}
`,H$=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`,V$=`import {useState} from 'react'
import Flex from 'components/Flex';

// 这里的 value，只影响初始化的值
export default function Select({value, onChange}) {
  const [current, setCurrent] = useState(value)

  function __selected(e) {
    const v = e.target.value
    // 控制内部状态更改
    setCurrent(v)

    // 将选中的值传递给外部
    onChange && onChange(v)
  }

  return (
    <Flex>
      <label htmlFor='cars' className='mr-8'>每一页个数</label>
      <select id='cars' className='border rounded px-3 py-1' value={current} onChange={__selected}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
    </Flex>
  )
}
`;function q$(){return n.jsx(ee,{files:{index:$$,List:D$,controller:O$,service:B$,api:z$,http:U$,"Filter/index":P$,"Filter/Input":H$,"Filter/Select":V$},caseRender:n.jsx(E$,{})})}function mv(t){const e={code:"code",h3:"h3",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(q$,{}),`
`,n.jsx(e.h3,{children:"场景描述"}),`
`,n.jsx(e.p,{children:"本案例在 [14、统一思考过滤条件] 的基础之上进行扩展。"}),`
`,n.jsxs(e.p,{children:["当列表有单独的本地的状态需要修改时的做法观察 ",n.jsx(e.code,{children:"List"})," 组件"]})]})}function F$(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(mv,{...t})}):mv(t)}function X$(){return n.jsx(ae,{renderArticle:t=>n.jsx(F$,{components:{code:t}})})}function G$({promise:t}){const e=j.use(t);return n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.thumbnail,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:i.desc})]})]},i.id))})}function I$(t,e){let i=new AbortController,o=i.signal,c=Object.keys(e).reduce((d,h)=>`${d}${d?"&":""}${h}=${e[h]}`,"");const m=new Promise(d=>{fetch(`${t}?${c}`,{signal:o}).then(h=>{d(h.json())}).catch(()=>{console.log("接口成功取消！")})});return m.cancel=()=>{i&&i.abort()},m}const Y$=t=>I$("https://randomuser.me/api",{results:t,inc:"name,gender,email,nat,picture&noinfo"}),Z$=(t={})=>{const{search:e,number:i}=t;let o=`searchList:key:${e}-${i}`;const c=localStorage.getItem(o);if(c){let h=new Promise(f=>{f(JSON.parse(c))});return h.cancel=()=>{},h}let m=Y$(i),d=m.then(h=>(localStorage.setItem(o,JSON.stringify(h.results)),h.results));return d.cancel=m.cancel,d},pv=t=>{const e=Z$(t);return e.then(i=>i.map((o,c)=>(o.desc=`${c}、${Ce()}`,o.name=o.name.first+" "+o.name.last,o.thumbnail=o.picture.thumbnail,o.id=An(),o))),e};function K$(t){const{...e}=t;return n.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),n.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function W$({value:t,onChange:e}){const[i,o]=j.useState(t);function c(m){const d=m.target.value;o(d),e&&e(d)}return n.jsxs(we,{children:[n.jsx("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),n.jsxs("select",{id:"cars",className:"border rounded px-3 py-1",value:i,onChange:c,children:[n.jsx("option",{value:"1",children:"1"}),n.jsx("option",{value:"2",children:"2"}),n.jsx("option",{value:"3",children:"3"}),n.jsx("option",{value:"4",children:"4"})]})]})}function Q$({onChange:t}){function e(o){t&&t({search:o.target.value})}function i(o){t&&t({number:o})}return n.jsxs(we,{between:!0,children:[n.jsx(K$,{onChange:e,placeholder:"Enter something"}),n.jsx(W$,{value:"4",onChange:i})]})}function J$(){const t=j.useRef({search:"",number:4}),[e,i]=j.useState(()=>pv(t.current));function o(c){e.cancel(),t.current=Object.assign(t.current,c),i(pv(t.current))}return n.jsxs("div",{children:[n.jsx(Q$,{onChange:o}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(G$,{promise:e})})]})}const eD=`import {useState, Suspense, useRef} from 'react'
import Skeleton from 'components/Skeleton'
import List from './List'

import {fetchListController} from './controller'
import Filter from './Filter'

export default function Demo01() {
  const parameter = useRef({
    search: '',
    number: 4
  })

  const [promise, update] = useState(() => fetchListController(parameter.current))

  function __filterChange(option) {
    promise.cancel()
    parameter.current = Object.assign(parameter.current, option)
    update(fetchListController(parameter.current))
  }

  return (
    <div>
      <Filter onChange={__filterChange} />
      <Suspense fallback={<Skeleton/>}>
        <List promise={promise}/>
      </Suspense>
    </div>
  )
}
`,nD=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={item.id} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,tD=`import {fetchList} from './service'
import {createRandomMessage, uuid} from 'utils'

export const fetchListController = (parameter) => {
  const p = fetchList(parameter)

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、\${createRandomMessage()}\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      item.id = uuid()
      return item
    })
  })

  return p
}
`,sD=`import {prevListApi} from './api'

export const fetchList = (parameter = {}) => {
  const {search, number} = parameter
  let cachekey = \`searchList:key:\${search}-\${number}\`
  const cacheArr = localStorage.getItem(cachekey)

  if (cacheArr) {
    let p = new Promise((resolve) => {
      resolve(JSON.parse(cacheArr))
    })
    p.cancel = () => {}
    return p
  }

  let prev = prevListApi(number)

  let p1 = prev.then((res) => {
    localStorage.setItem(cachekey, JSON.stringify(res.results))
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}
`,rD=`import {get} from './http'

export const prevListApi = (number) => {
  return get('https://randomuser.me/api', {
    results: number,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,iD=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,aD=`import {useState, Suspense, useRef} from 'react'
import Flex from 'components/Flex';
import Input from './Input'
import Select from './Select'

export default function Filter({onChange}) {

  function __inputChange(e) {
    onChange && onChange({search: e.target.value})
  }

  function __selected(value) {
    onChange && onChange({number: value})
  }

  return (
    <Flex between>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Select value='4' onChange={__selected} />
    </Flex>
  )
}
`,oD=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`,lD=`import {useState} from 'react'
import Flex from 'components/Flex';

// 这里的 value，只影响初始化的值
export default function Select({value, onChange}) {
  const [current, setCurrent] = useState(value)

  function __selected(e) {
    const v = e.target.value
    // 控制内部状态更改
    setCurrent(v)

    // 将选中的值传递给外部
    onChange && onChange(v)
  }

  return (
    <Flex>
      <label htmlFor='cars' className='mr-8'>每一页个数</label>
      <select id='cars' className='border rounded px-3 py-1' value={current} onChange={__selected}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
    </Flex>
  )
}
`;function cD(){return n.jsx(ee,{files:{index:eD,List:nD,controller:tD,service:sD,api:rD,http:iD,"Filter/index":aD,"Filter/Input":oD,"Filter/Select":lD},caseRender:n.jsx(J$,{})})}function hv(t){const e={code:"code",h3:"h3",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(cD,{}),`
`,n.jsx(e.h3,{children:"场景描述"}),`
`,n.jsx(e.p,{children:"本案例在 [13、子组件数据解耦] 的基础之上进行修改。"}),`
`,n.jsx(e.p,{children:"当过滤条件过多时，我们需要将所有的过滤条件全部整合封装起来，以确保应用层代码的简洁。注意观察实现方式"}),`
`,n.jsx(e.p,{children:"文件结构"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`- index.jsx
- controller.js
- service.js
- api.js
- http.js
- List.jsx
+ Filter
  - index.jsx
  - Input.jsx
  - Select.jsx
`})})]})}function uD(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(hv,{...t})}):hv(t)}function dD(){return n.jsx(ae,{renderArticle:t=>n.jsx(uD,{components:{code:t}})})}document.documentElement.style.fontSize="14px";function mD(t){return n.jsx("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:n.jsxs("div",{className:"animate-pulse flex space-x-4",children:[n.jsx("div",{className:"rounded-full bg-slate-200 h-10 w-10"}),n.jsxs("div",{className:"flex-1 space-y-6 py-1",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded"}),n.jsxs("div",{className:"space-y-3",children:[n.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-2"}),n.jsx("div",{className:"h-2 bg-slate-200 rounded col-span-1"})]}),n.jsx("div",{className:"h-2 bg-slate-200 rounded"})]})]})]})})}function pD({promise:t}){const e=j.use(t);return n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.thumbnail,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:i.desc})]})]},`h${o}`))})}function hD(t){const{...e}=t;return n.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),n.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function fD({value:t,onChange:e}){const[i,o]=j.useState(t);function c(m){const d=m.target.value;o(d),e&&e(d)}return n.jsxs(we,{children:[n.jsx("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),n.jsxs("select",{id:"cars",className:"border rounded px-3 py-1",value:i,onChange:c,children:[n.jsx("option",{value:"1",children:"1"}),n.jsx("option",{value:"2",children:"2"}),n.jsx("option",{value:"3",children:"3"}),n.jsx("option",{value:"4",children:"4"})]})]})}function xD(t,e){let i=new AbortController,o=i.signal,c=Object.keys(e).reduce((d,h)=>`${d}${d?"&":""}${h}=${e[h]}`,"");const m=new Promise(d=>{fetch(`${t}?${c}`,{signal:o}).then(h=>{d(h.json())}).catch(()=>{console.log("接口成功取消！")})});return m.cancel=()=>{i&&i.abort()},m}const gD=t=>xD("https://randomuser.me/api",{results:t,inc:"name,gender,email,nat,picture&noinfo"}),vD=(t={})=>{const{search:e,number:i}=t;let o=`searchList:key:${e}-${i}`;const c=localStorage.getItem(o);if(c){let h=new Promise(f=>{f(JSON.parse(c))});return h.cancel=()=>{},h}let m=gD(i),d=m.then(h=>(localStorage.setItem(o,JSON.stringify(h.results)),h.results));return d.cancel=m.cancel,d},lm=t=>{const e=vD(t);return e.then(i=>i.map((o,c)=>(o.desc=`${c}、${Ce()}`,o.name=o.name.first+" "+o.name.last,o.thumbnail=o.picture.thumbnail,o.id=An(),o))),e};function jD(){const t=j.useRef({search:"",number:4}),[e,i]=j.useState(()=>lm(t.current));function o(m){e.cancel(),t.current.search=m.target.value,i(lm(t.current))}function c(m){t.current.number=m,i(lm(t.current))}return n.jsxs("div",{children:[n.jsxs(we,{between:!0,children:[n.jsx(hD,{onChange:o,placeholder:"Enter something"}),n.jsx(fD,{value:"4",onChange:c})]}),n.jsx(j.Suspense,{fallback:n.jsx(mD,{}),children:n.jsx(pD,{promise:e})})]})}const yD=`import {useState, Suspense, useRef} from 'react'
import Skeleton from './Skeleton'
import List from './List'
import Input from './Input'
import Select from './select'

import {fetchListController} from './controller'
import Flex from "components/Flex";

export default function Demo01() {
  const parameter = useRef({
    search: '',
    number: 4
  })

  const [promise, update] = useState(() => fetchListController(parameter.current))

  function __inputChange(e) {
    promise.cancel()
    parameter.current.search = e.target.value
    update(fetchListController(parameter.current))
  }

  function __selected(value) {
    parameter.current.number = value
    update(fetchListController(parameter.current))
  }

  return (
    <div>
      <Flex between>
        <Input onChange={__inputChange} placeholder='Enter something' />
        <Select value='4' onChange={__selected} />
      </Flex>

      <Suspense fallback={<Skeleton/>}>
        <List promise={promise}/>
      </Suspense>
    </div>
  )
}`,bD=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,SD=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`,ND=`import {useState} from 'react'

import Flex from "components/Flex";

// 这里的 value，只影响初始化的值
export default function Select({value, onChange}) {
  const [current, setCurrent] = useState(value)

  function __selected(e) {
    const v = e.target.value
    // 控制内部状态更改
    setCurrent(v)

    // 将选中的值传递给外部
    onChange && onChange(v)
  }

  return (
    <Flex>
      <label htmlFor='cars' className='mr-8'>每一页个数</label>
      <select id='cars' className='border rounded px-3 py-1' value={current} onChange={__selected}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
    </Flex>
  )
}
`,wD=`import {fetchList} from './service'
import {createRandomMessage, uuid} from 'utils'

export const fetchListController = (parameter) => {
  const p = fetchList(parameter)

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、\${createRandomMessage()}\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      item.id = uuid()
      return item
    })
  })

  return p
}
`,_D=`import {prevListApi} from './api'

export const fetchList = (parameter = {}) => {
  const {search, number} = parameter
  let cachekey = \`searchList:key:\${search}-\${number}\`
  const cacheArr = localStorage.getItem(cachekey)

  if (cacheArr) {
    let p = new Promise((resolve) => {
      resolve(JSON.parse(cacheArr))
    })
    p.cancel = () => {}
    return p
  }

  let prev = prevListApi(number)

  let p1 = prev.then((res) => {
    localStorage.setItem(cachekey, JSON.stringify(res.results))
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}
`,CD=`import {get} from './http'

export const prevListApi = (number) => {
  return get('https://randomuser.me/api', {
    results: number,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,kD=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;function MD(){return n.jsx(ee,{files:{index:yD,Select:ND,List:bD,Input:SD,controller:wD,service:_D,api:CD,http:kD},caseRender:n.jsx(jD,{})})}function fv(t){const e={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(MD,{}),`
`,n.jsx(e.h3,{children:"场景描述"}),`
`,n.jsx(e.p,{children:"本案例在 [10、多个更新条件] 的基础之上进行修改。"}),`
`,n.jsx(e.p,{children:"在本次案例中，有一个多选一的搜索条件。我们计划将其封装成为一个独立的子组件。"}),`
`,n.jsxs(e.p,{children:["当我们封装成独立的子组件时，注意案例中，该组件中有一个数据与父组件的交互方式。这种方式可以帮助我们在很多场景脱离",n.jsx(e.strong,{children:"受控组件的限制"}),"，从而做到父子组件数据解耦。这里重点关注 Select 组件的封装与使用方式"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// 这里的 value，只影响初始化的值
function Select({value, onChange}) {
  const [current, setCurrent] = useState(value)

  function __selected(e) {
    const v = e.target.value
    // 控制内部状态更改
    setCurrent(v)

    // 将选中的值传递给外部
    onChange && onChange(v)
  }

  return (
    <Flex>
      <label htmlFor='cars' className='mr-8'>每一页个数</label>
      <select id='cars' className='border rounded px-3 py-1' value={current} onChange={__selected}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
      </select>
    </Flex>
  )
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"该组件通常应该独立封装处理，这里偷了个懒没有创建新的文件"}),`
`]})]})}function AD(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(fv,{...t})}):fv(t)}function RD(){return n.jsx(ae,{renderArticle:t=>n.jsx(AD,{components:{code:t}})})}const LD="https://randomuser.me",TD=t=>{const e=new URLSearchParams({inc:"name,gender,email,nat,picture",results:t,noinfo:!0});let i=new AbortController,o=i.signal;const c=new Promise(m=>{fetch(`${LD}/api/?${e.toString()}`,{signal:o}).then(d=>{m(d.json())}).catch(()=>{console.log("接口成功取消！")})});return c.cancel=()=>{i&&i.abort()},c},xv=t=>{const e=TD(t);return e.then(i=>i.results.map((o,c)=>(o.desc=`${c}、${Ce()}`,o.name=o.name.first+" "+o.name.last,o.thumbnail=o.picture.thumbnail,o.id=An(),o))),e};function ED({promise:t}){const{results:e}=j.use(t);return n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:i.desc})]})]},i.id))})}function $D(){const[t,e]=j.useState(()=>xv(5)),i=j.useDeferredValue(t);function o(){t.cancel(),e(xv(5))}return n.jsxs(n.Fragment,{children:[n.jsxs(we,{between:!0,justify:!0,className:"mt-8",children:[n.jsx("div",{className:"text-gray-400 text-sm",children:"Account users"}),n.jsx("button",{onClick:o,children:"update"})]}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(_c,{loading:i!==t,type:"icon",children:n.jsx(ED,{promise:i})})})]})}function DD(t){const{results:e}=j.use(t.promise);return n.jsxs("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:[n.jsx("div",{className:"flex space-x-4",children:e.map((i,o)=>n.jsxs("div",{className:"flex-1 overflow-hidden",children:[n.jsx("div",{className:"rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${i.picture.large})`}}),n.jsx("div",{className:"mt-4 font-bold",children:i.name.last}),n.jsx("div",{className:"mt-1 text-gray-400 text-sm",children:i.email})]},`z-${o}`))}),n.jsx($D,{})]})}const OD="https://randomuser.me";async function BD(t){const e=new URLSearchParams({inc:"name,gender,email,nat,picture",results:t,noinfo:!0});return(await fetch(`${OD}/api/?${e.toString()}`)).json()}function zD(){const t=BD(4);return n.jsx("div",{children:n.jsx(j.Suspense,{fallback:n.jsx(Se,{type:"card"}),children:n.jsx(DD,{promise:t})})})}const UD=`import {use, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import UserAccount from './user-account'
import {fetchList} from './api'

export default function Page() {
  const banners = fetchList(4)
  return (
    <div>
      <Suspense fallback={<Skeleton type='card' />}>
        <UserAccount promise={banners} />
      </Suspense>
    </div>
  )
}
`,PD=`import {use} from 'react'
import List from './List'

export default function UserAccount(props) {
  const {results} = use(props.promise)
  return (
    <div className='border border-blue-100 shadow rounded-md p-4 w-full mt-4'>
      <div className='flex space-x-4'>
        {results.map((item, index) => (
          <div className="flex-1 overflow-hidden" key={\`z-\${index}\`}>
            <div className='rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center' style={{backgroundImage: \`url(\${item.picture.large})\`}}></div>
            <div className="mt-4 font-bold">{item.name.last}</div>
            <div className="mt-1 text-gray-400 text-sm">{item.email}</div>
          </div>
        ))}
      </div>
      <List />
    </div>
  )
}
`,HD=`export const host = 'https://randomuser.me'

export async function fetchList(count) {
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: count,
    noinfo: true
  })
  
  const res = await fetch(\`\${host}/api/?\${query.toString()}\`)
  return res.json()
}
`,VD=`import { Suspense, useState, useDeferredValue } from 'react';
import {fetchListController} from './controller'
import UserList from './user-list'
import Skeleton from 'components/Skeleton'
import Flex from 'components/Flex'
import Spin from 'components/Spin'

export default function List() {
  const [promise, update] = useState(() => fetchListController(5))
  const deferred = useDeferredValue(promise)

  function clickhandler() {
    promise.cancel()
    update(fetchListController(5))
  }

  return (
    <>
      <Flex between justify className='mt-8'>
        <div className="text-gray-400 text-sm">Account users</div>
        <button onClick={clickhandler}>update</button>
      </Flex>

      <Suspense fallback={<Skeleton/>}>
        <Spin loading={deferred !== promise} type='icon'>
          <UserList promise={deferred}/>
        </Spin>
      </Suspense>
    </>
  )
}`,qD=`export const host = 'https://randomuser.me'

export const fetchListWithCancel = (i) => {
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: i,
    noinfo: true
  })
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(\`\${host}/api/?\${query.toString()}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,FD=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchListWithCancel} from './service'
import {createRandomMessage, uuid} from 'utils'

export const fetchListController = (i) => {
  const p = fetchListWithCancel(i)

  p.then(list => {
    return list.results.map((item, index) => {
      item.desc = \`\${index}、\${createRandomMessage()}\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      item.id = uuid()
      return item
    })
  })

  return p
}
`,XD=`import { use } from 'react'

export default function UserList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={item.id} className='flex border p-4 items-center my-4 rounded'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
`;function GD(){return n.jsx(ee,{files:{index:UD,UserAccount:PD,api:HD,"List/index":VD,"List/controller":FD,"List/service":qD,"List/user-list":XD},caseRender:n.jsx(zD,{})})}function gv(t){const e={code:"code",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(GD,{}),`
`,n.jsx(e.p,{children:"场景："}),`
`,n.jsx(e.p,{children:"1、支持单独更新列表"}),`
`,n.jsxs(e.p,{children:["2、可快速点击 ",n.jsx(e.code,{children:"update"})," 按钮，会取消上一次请求"]}),`
`,n.jsx(e.p,{children:"3、支持并发更新"})]})}function ID(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(gv,{...t})}):gv(t)}function YD(){return n.jsx(ae,{renderArticle:t=>n.jsx(ID,{components:{code:t}})})}function ZD({promise:t}){const e=j.use(t);return n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.thumbnail,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.fname}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:i.desc})]})]},i.id))})}function KD(t){const{...e}=t;return n.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),n.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function Cb(t,e){let i=new AbortController,o=i.signal,c=Object.keys(e).reduce((d,h)=>`${d}${d?"&":""}${h}=${e[h]}`,"");const m=new Promise(d=>{fetch(`${t}?${c}`,{signal:o}).then(h=>{d(h.json())}).catch(()=>{console.log("接口成功取消！")})});return m.cancel=()=>{i&&i.abort()},m}const kb=()=>Cb("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"}),Mb=()=>Cb("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"});let Ui=[],Pi=[];function Bp(){Ui=[],Pi=[]}const WD=()=>{const t=kb(),e=Mb(),i=Promise.all([t,e]).then(o=>(Ui=o[0].results,Pi=o[1].results,[...Ui,...Pi]));return i.cancel=()=>{t.cancel(),e.cancel()},i.clear=Bp,i},QD=()=>{let t=new Promise(e=>{kb().then(i=>{Ui=i.results,e([...Ui,...Pi])})});return t.cancel=()=>{},t.clear=Bp,t},JD=()=>{let t=new Promise(e=>{Mb().then(i=>{Pi=i.results,e([...Ui,...Pi])})});return t.cancel=()=>{},t.clear=Bp,t},eO=t=>t==="prev"?QD():t==="next"?JD():WD(),cm=(t="")=>{const e=eO(t);return e.then(i=>i.map((o,c)=>(o.desc=`${c}、React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.`,o.fname=o.name.first+" "+o.name.last,o.thumbnail=o.picture.thumbnail,o.id=An(),o))),e};function nO(){const[t,e]=j.useState(cm),i=j.useDeferredValue(t),o=j.useRef();function c(m){t.cancel(),e(cm())}return j.useEffect(()=>(o.current=setInterval(()=>{e(cm("prev"))},3e3),()=>{clearInterval(o.current),t.clear()}),[]),n.jsxs("div",{children:[n.jsx(KD,{onChange:c,placeholder:"Enter something"}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(ZD,{promise:i})})]})}const tO=`import {useState, Suspense, useEffect, useDeferredValue, useRef} from 'react'
import Skeleton from 'components/Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise, update] = useState(fetchListController)
  const deferred = useDeferredValue(promise)
  const timer = useRef()

  function __inputChange(e) {
    promise.cancel()
    update(fetchListController())
  }

  useEffect(() => {
    timer.current = setInterval(() => {
      update(fetchListController('prev'))
    }, 3000)

    return () => {
      clearInterval(timer.current)
      promise.clear()
    }
  }, []);

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={deferred} />
      </Suspense>
    </div>
  )
}
`,sO=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={item.id} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.fname}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,rO=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`,iO=`import {fetchList} from './service'
import {uuid} from 'utils'

export const fetchListController = (params = '') => {
  const p = fetchList(params)

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.\`
      item.fname = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      item.id = uuid()
      return item
    })
  })

  return p
}
`,aO=`import {prevListApi, nextListApi} from './api'

// 缓存请求结果
let prevCache = []
let nextCache = []

function clear() {
  prevCache = []
  nextCache = []
}

export const fetchListInit = () => {
  const prev = prevListApi()
  const next = nextListApi()
  const promise = Promise.all([prev, next]).then(res => {
    prevCache = res[0].results
    nextCache = res[1].results
    return [...prevCache, ...nextCache]
  })

  promise.cancel = () => {
    prev.cancel()
    next.cancel()
  }

  promise.clear = clear

  return promise
}

export const fetchPrevAPI = () => {
  let p = new Promise((resolve) => {
    prevListApi().then(res => {
      prevCache = res.results
      resolve([...prevCache, ...nextCache])
    })
  })
  p.cancel = () => {}
  p.clear = clear
  return p
}

export const fetchNextAPI = () => {
  let p = new Promise((resolve) => {
    nextListApi().then(res => {
      nextCache = res.results
      resolve([...prevCache, ...nextCache])
    })
  })

  p.cancel = () => {}
  p.clear = clear
  return p
}

export const fetchList = (params) => {
  if (params === 'prev') {
    return fetchPrevAPI()
  }
  if (params === 'next') {
    return fetchNextAPI()
  }
  return fetchListInit()
}
`,oO=`import {get} from './http'

export const prevListApi = () => {
  return get('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}

export const nextListApi = () => {
  return get('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,lO=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;function cO(){return n.jsx(ee,{files:{index:tO,List:sO,Input:rO,controller:iO,service:aO,api:oO,http:lO},caseRender:n.jsx(nO,{})})}function vv(t){const e={h3:"h3",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(cO,{}),`
`,n.jsx(e.h3,{children:"场景描述"}),`
`,n.jsx(e.p,{children:"更新频率不一致"}),`
`,n.jsx(e.p,{children:"1、两个接口"}),`
`,n.jsx(e.p,{children:"2、搜索更新时，更新全部"}),`
`,n.jsx(e.p,{children:"3、自动更新时，仅更新第一个接口"})]})}function uO(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(vv,{...t})}):vv(t)}function dO(){return n.jsx(ae,{renderArticle:t=>n.jsx(uO,{components:{code:t}})})}function mO({promise:t}){const e=j.use(t);return n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.thumbnail,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:i.desc})]})]},i.id))})}function pO(t){const{...e}=t;return n.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),n.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function hO(t,e){let i=new AbortController,o=i.signal,c=Object.keys(e).reduce((d,h)=>`${d}${d?"&":""}${h}=${e[h]}`,"");const m=new Promise(d=>{fetch(`${t}?${c}`,{signal:o}).then(h=>{d(h.json())}).catch(()=>{console.log("接口成功取消！")})});return m.cancel=()=>{i&&i.abort()},m}const fO=t=>hO("https://randomuser.me/api",{results:t,inc:"name,gender,email,nat,picture&noinfo"}),xO=(t={})=>{const{search:e,number:i}=t;let o=`searchList:key:${e}-${i}`;const c=localStorage.getItem(o);if(c){let h=new Promise(f=>{f(JSON.parse(c))});return h.cancel=()=>{},h}let m=fO(i),d=m.then(h=>(localStorage.setItem(o,JSON.stringify(h.results)),h.results));return d.cancel=m.cancel,d},um=t=>{const e=xO(t);return e.then(i=>i.map((o,c)=>(o.desc=`${c}、${Ce()}`,o.name=o.name.first+" "+o.name.last,o.thumbnail=o.picture.thumbnail,o.id=An(),o))),e};function gO(){const[t,e]=j.useState(um),i=j.useRef({search:"",number:4});function o(m){t.cancel(),i.current.search=m.target.value,e(um(i.current))}function c(m){i.current.number=m.target.value,e(um(i.current))}return n.jsxs("div",{children:[n.jsxs(we,{between:!0,children:[n.jsx(pO,{onChange:o,placeholder:"Enter something"}),n.jsxs(we,{children:[n.jsx("label",{htmlFor:"cars",className:"mr-8",children:"每一页个数"}),n.jsxs("select",{id:"cars",className:"border rounded px-3 py-1",onChange:c,children:[n.jsx("option",{value:"1",children:"1"}),n.jsx("option",{value:"2",children:"2"}),n.jsx("option",{value:"3",children:"3"}),n.jsx("option",{value:"4",children:"4"})]})]})]}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(mO,{promise:t})})]})}const vO=`import {useState, Suspense, useRef} from 'react'
import Skeleton from 'components/Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'
import Flex from "components/Flex";

export default function Demo01() {
  const [promise, update] = useState(fetchListController)
  const parameter = useRef({
    search: '',
    number: 4
  })

  function __inputChange(e) {
    promise.cancel()
    parameter.current.search = e.target.value
    update(fetchListController(parameter.current))
  }

  function __selected(e) {
    parameter.current.number = e.target.value
    update(fetchListController(parameter.current))
  }

  return (
    <div>
      <Flex between>
        <Input onChange={__inputChange} placeholder='Enter something' />
        <Flex>
          <label htmlFor='cars' className='mr-8'>每一页个数</label>
          <select id='cars' className='border rounded px-3 py-1' onChange={__selected}>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </Flex>
      </Flex>

      <Suspense fallback={<Skeleton/>}>
        <List promise={promise}/>
      </Suspense>
    </div>
  )
}
`,jO=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={item.id} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,yO=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`,bO=`import {fetchList} from './service'
import {createRandomMessage, uuid} from 'utils'

export const fetchListController = (parameter) => {
  const p = fetchList(parameter)

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、\${createRandomMessage()}\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      item.id = uuid()
      return item
    })
  })

  return p
}
`,SO=`import {prevListApi} from './api'

export const fetchList = (parameter = {}) => {
  const {search, number} = parameter
  let cachekey = \`searchList:key:\${search}-\${number}\`
  const cacheArr = localStorage.getItem(cachekey)

  if (cacheArr) {
    let p = new Promise((resolve) => {
      resolve(JSON.parse(cacheArr))
    })
    p.cancel = () => {}
    return p
  }

  let prev = prevListApi(number)

  let p1 = prev.then((res) => {
    localStorage.setItem(cachekey, JSON.stringify(res.results))
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}
`,NO=`import {get} from './http'

export const prevListApi = (number) => {
  return get('https://randomuser.me/api', {
    results: number,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,wO=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;function _O(){return n.jsx(ee,{files:{index:vO,List:jO,Input:yO,controller:bO,service:SO,api:NO,http:wO},caseRender:n.jsx(gO,{})})}function jv(t){const e={h3:"h3",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(_O,{}),`
`,n.jsx(e.h3,{children:"场景描述"}),`
`,n.jsx(e.p,{children:"1、在上一个案例的基础之上，新增更新条件，选择每一页个数时，重新请求接口"}),`
`,n.jsx(e.p,{children:"2、缓存key值调整，具体看代码"})]})}function CO(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(jv,{...t})}):jv(t)}function kO(){return n.jsx(ae,{renderArticle:t=>n.jsx(CO,{components:{code:t}})})}function MO({promise:t}){const e=j.use(t);return n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.thumbnail,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:i.desc})]})]},i.id))})}function AO(t){const{...e}=t;return n.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),n.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function RO(t,e){let i=new AbortController,o=i.signal,c=Object.keys(e).reduce((d,h)=>`${d}${d?"&":""}${h}=${e[h]}`,"");const m=new Promise(d=>{fetch(`${t}?${c}`,{signal:o}).then(h=>{d(h.json())}).catch(()=>{console.log("接口成功取消！")})});return m.cancel=()=>{i&&i.abort()},m}const LO=()=>RO("https://randomuser.me/api",{results:4,inc:"name,gender,email,nat,picture&noinfo"}),TO=t=>{const e=localStorage.getItem(t);if(e){let c=new Promise(m=>{m(JSON.parse(e))});return c.cancel=()=>{},c}let i=LO(),o=i.then(c=>(localStorage.setItem(t,JSON.stringify(c.results)),c.results));return o.cancel=i.cancel,o},yv=t=>{const e=TO(t);return e.then(i=>i.map((o,c)=>(o.desc=`${c}、${Ce()}`,o.name=o.name.first+" "+o.name.last,o.thumbnail=o.picture.thumbnail,o.id=An(),o))),e};function EO(){const[t,e]=j.useState(yv);function i(o){t.cancel(),e(yv(o.target.value))}return n.jsxs("div",{children:[n.jsx(AO,{onChange:i,placeholder:"Enter something"}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(MO,{promise:t})})]})}const $O=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise, update] = useState(fetchListController)

  function __inputChange(e) {
    promise.cancel()
    update(fetchListController(e.target.value))
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,DO=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={item.id} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,OO=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`,BO=`import {fetchList} from './service'
import {createRandomMessage, uuid} from 'utils'

export const fetchListController = (search) => {
  const p = fetchList(search)

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、\${createRandomMessage()}\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      item.id = uuid()
      return item
    })
  })

  return p
}
`,zO=`import {prevListApi} from './api'

export const fetchList = (search) => {
  const cacheArr = localStorage.getItem(search)

  if (cacheArr) {
    let p = new Promise((resolve) => {
      resolve(JSON.parse(cacheArr))
    })
    p.cancel = () => {}
    return p
  }

  let prev = prevListApi()

  let p1 = prev.then((res) => {
    localStorage.setItem(search, JSON.stringify(res.results))
    return res.results
  })

  p1.cancel = prev.cancel

  return p1
}
`,UO=`import {get} from './http'

export const prevListApi = () => {
  return get('https://randomuser.me/api', {
    results: 4,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,PO=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;function HO(){return n.jsx(ee,{files:{index:$O,List:DO,Input:OO,controller:BO,service:zO,api:UO,http:PO},caseRender:n.jsx(EO,{})})}function bv(t){const e={h3:"h3",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(HO,{}),`
`,n.jsx(e.h3,{children:"场景描述"}),`
`,n.jsx(e.p,{children:"1、根据参数缓存数据结果，如果有缓存，则获取缓存中的结果"}),`
`,n.jsx(e.p,{children:"2、如果没有缓存，则发起请求"}),`
`,n.jsx(e.p,{children:"3、支持取消，缓存时无需这段逻辑"})]})}function VO(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(bv,{...t})}):bv(t)}function qO(){return n.jsx(ae,{renderArticle:t=>n.jsx(VO,{components:{code:t}})})}function FO({promise:t}){const e=j.use(t);return n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.thumbnail,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:i.desc})]})]},i.id))})}function XO(t){const{...e}=t;return n.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),n.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function Ab(t,e){let i=new AbortController,o=i.signal,c=Object.keys(e).reduce((d,h)=>`${d}${d?"&":""}${h}=${e[h]}`,"");const m=new Promise(d=>{fetch(`${t}?${c}`,{signal:o}).then(h=>{d(h.json())}).catch(()=>{console.log("接口成功取消！")})});return m.cancel=()=>{i&&i.abort()},m}const GO=()=>Ab("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"}),IO=()=>Ab("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"}),YO=()=>{const t=GO(),e=new Promise(i=>{t.then(o=>{IO().then(c=>{i(o.results.concat(c.results))})})});return e.cancel=t.cancel,e},Sv=()=>{const t=YO();return t.then(e=>e.map((i,o)=>(i.desc=`${o}、${Ce()}`,i.name=i.name.first+" "+i.name.last,i.thumbnail=i.picture.thumbnail,i.id=An(),i))),t};function ZO(){const[t,e]=j.useState(Sv);function i(o){t.cancel(),e(Sv())}return n.jsxs("div",{children:[n.jsx(XO,{onChange:i,placeholder:"Enter something"}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(FO,{promise:t})})]})}const KO=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise, update] = useState(fetchListController)

  function __inputChange(e) {
    promise.cancel()
    update(fetchListController())
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,WO=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={item.id} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,QO=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`,JO=`import {fetchList} from './service'
import {createRandomMessage, uuid} from 'utils'

export const fetchListController = () => {
  const p = fetchList()

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、\${createRandomMessage()}\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      item.id = uuid()
      return item
    })
  })

  return p
}
`,eB=`import {prevListApi, nextListApi} from './api'

export const fetchList =  () => {
  const prev = prevListApi()

  const p = new Promise((resolve) => {
    prev.then(res => {
      nextListApi().then(res2 => {
        resolve(res.results.concat(res2.results))
      })
    })
  })

  p.cancel = prev.cancel

  return p
}
`,nB=`import {get} from './http'

export const prevListApi = () => {
  return get('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}

export const nextListApi = () => {
  return get('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,tB=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;function sB(){return n.jsx(ee,{files:{index:KO,List:WO,Input:QO,controller:JO,service:eB,api:nB,http:tB},caseRender:n.jsx(ZO,{})})}function Nv(t){const e={h3:"h3",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(sB,{}),`
`,n.jsx(e.h3,{children:"场景描述"}),`
`,n.jsx(e.p,{children:"1、组件初始化时，需要请求多个接口。此时接口有先后依赖关系，上一个请求完成之后，才能请求下一个接口。"}),`
`,n.jsx(e.p,{children:"2、更新时，支持取消上一次请求"})]})}function rB(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Nv,{...t})}):Nv(t)}function iB(){return n.jsx(ae,{renderArticle:t=>n.jsx(rB,{components:{code:t}})})}function aB({promise:t}){const e=j.use(t);return n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.thumbnail,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:i.desc})]})]},`h${o}`))})}function oB(t){const{...e}=t;return n.jsxs("div",{className:"flex items-center border px-2 rounded-md text-gray-500",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"})}),n.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...e})]})}function Rb(t,e){let i=new AbortController,o=i.signal,c=Object.keys(e).reduce((d,h)=>`${d}${d?"&":""}${h}=${e[h]}`,"");const m=new Promise(d=>{fetch(`${t}?${c}`,{signal:o}).then(h=>{d(h.json())}).catch(()=>{console.log("接口成功取消！")})});return m.cancel=()=>{i&&i.abort()},m}const lB=()=>Rb("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"}),cB=()=>Rb("https://randomuser.me/api",{results:2,inc:"name,gender,email,nat,picture&noinfo"}),uB=()=>{const t=lB(),e=cB(),i=Promise.all([t,e]).then(o=>o.reduce((c,m)=>c.concat(m.results),[]));return i.cancel=()=>{t.cancel(),e.cancel()},i},wv=()=>{const t=uB();return t.then(e=>e.map((i,o)=>(i.desc=`${o}、${Ce()}`,i.name=i.name.first+" "+i.name.last,i.thumbnail=i.picture.thumbnail,i.id=An(),i))),t};function dB(){const[t,e]=j.useState(wv);function i(o){t.cancel(),e(wv())}return n.jsxs("div",{children:[n.jsx(oB,{onChange:i,placeholder:"Enter something"}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(aB,{promise:t})})]})}const mB=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import List from './List'
import Input from './Input'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise, update] = useState(fetchListController)

  function __inputChange(e) {
    promise.cancel()
    update(fetchListController())
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,pB=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,hB=`export default function Input(props) {
  const {...other} = props
  return (
    <div className='flex items-center border px-2 rounded-md text-gray-500'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>

      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...other}
      />
    </div>
  )
}
`,fB=`import {fetchList} from './service'
import {createRandomMessage, uuid} from 'utils'

export const fetchListController = () => {
  const p = fetchList()

  p.then(list => {
    return list.map((item, index) => {
      item.desc = \`\${index}、\${createRandomMessage()}\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      item.id = uuid()
      return item
    })
  })

  return p
}
`,xB=`import {prevListApi, nextListApi} from './api'

export const fetchList = () => {
  const prev = prevListApi()
  const next = nextListApi()
  const promise = Promise.all([prev, next]).then(res => {
    return res.reduce((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })
  promise.cancel = () => {
    prev.cancel()
    next.cancel()
  }
  return promise
}
`,gB=`import {get} from './http'

export const prevListApi = () => {
  return get('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}

export const nextListApi = () => {
  return get('https://randomuser.me/api', {
    results: 2,
    inc: 'name,gender,email,nat,picture&noinfo',
  })
}
`,vB=`export function get(path, params) {
  let controller = new AbortController();
  let signal = controller.signal;

  let p = Object.keys(params).reduce((prev, cur) => {
    return \`\${prev}\${prev ? '&' : ''}\${cur}=\${params[cur]}\`
  }, '')

  const promise = new Promise(resolve => {
    fetch(\`\${path}?\${p}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;function jB(){return n.jsx(ee,{files:{index:mB,List:pB,Input:hB,controller:fB,service:xB,api:gB,http:vB},caseRender:n.jsx(dB,{})})}function _v(t){const e={h3:"h3",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(jB,{}),`
`,n.jsx(e.h3,{children:"场景描述"}),`
`,n.jsx(e.p,{children:"组件初始化时，需要请求多个接口。此时接口不分先后顺序，只需要将返回结果按照需求组合在一起。"}),`
`,n.jsx(e.p,{children:"1、支持快速输入时，取消上一次的两次请求"})]})}function yB(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(_v,{...t})}):_v(t)}function bB(){return n.jsx(ae,{renderArticle:t=>n.jsx(yB,{components:{code:t}})})}const SB="https://randomuser.me",NB=t=>{const e=new URLSearchParams({inc:"name,gender,email,nat,picture",results:t,noinfo:!0});let i=new AbortController,o=i.signal;const c=new Promise(m=>{fetch(`${SB}/api/?${e.toString()}`,{signal:o}).then(d=>{m(d.json())}).catch(()=>{console.log("接口成功取消！")})});return c.cancel=()=>{i&&i.abort()},c},wB=t=>{const e=NB(t);return e.then(i=>i.results.map((o,c)=>(o.desc=`${c}、${Ce()}`,o.name=o.name.first+" "+o.name.last,o.thumbnail=o.picture.thumbnail,o.id=An(),o))),e};function _B({promise:t}){const{results:e}=j.use(t);return n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:i.desc})]})]},i.id))})}function CB(){const[t]=j.useState(()=>wB(5));return n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(_B,{promise:t})})}function kB(t){const{results:e}=j.use(t.promise);return n.jsxs("div",{className:"border border-blue-100 shadow rounded-md p-4 w-full mt-4",children:[n.jsx("div",{className:"flex space-x-4",children:e.map((i,o)=>n.jsxs("div",{className:"flex-1 overflow-hidden",children:[n.jsx("div",{className:"rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center",style:{backgroundImage:`url(${i.picture.large})`}}),n.jsx("div",{className:"mt-4 font-bold",children:i.name.last}),n.jsx("div",{className:"mt-1 text-gray-400 text-sm",children:i.email})]},`z-${o}`))}),n.jsx(CB,{})]})}const MB="https://randomuser.me";async function AB(t){const e=new URLSearchParams({inc:"name,gender,email,nat,picture",results:t,noinfo:!0});return(await fetch(`${MB}/api/?${e.toString()}`)).json()}function RB(){const t=AB(4);return n.jsx("div",{children:n.jsx(j.Suspense,{fallback:n.jsx(Se,{type:"card"}),children:n.jsx(kB,{promise:t})})})}const LB=`import {Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import UserAccount from './user-account'
import {fetchList} from './api'

export default function Page() {
  const banners = fetchList(4)
  return (
    <div>
      <Suspense fallback={<Skeleton type='card' />}>
        <UserAccount promise={banners} />
      </Suspense>
    </div>
  )
}
`,TB=`import {use} from 'react'
import List from './List'

export default function UserAccount(props) {
  const {results} = use(props.promise)
  return (
    <div className='border border-blue-100 shadow rounded-md p-4 w-full mt-4'>
      <div className='flex space-x-4'>
        {results.map((item, index) => (
          <div className="flex-1 overflow-hidden" key={\`z-\${index}\`}>
            <div className='rounded-md h-32 overflow-hidden bg-cover bg-no-repeat bg-center' style={{backgroundImage: \`url(\${item.picture.large})\`}}></div>
            <div className="mt-4 font-bold">{item.name.last}</div>
            <div className="mt-1 text-gray-400 text-sm">{item.email}</div>
          </div>
        ))}
      </div>
      <List />
    </div>
  )
}
`,EB=`export const host = 'https://randomuser.me'

export async function fetchList(count) {
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: count,
    noinfo: true
  })
  
  const res = await fetch(\`\${host}/api/?\${query.toString()}\`)
  return res.json()
}
`,$B=`import { Suspense, useState } from 'react'
import {fetchListController} from './controller'
import UserList from './user-list'
import Skeleton from 'components/Skeleton'

export default function List() {
  const [promise] = useState(() => fetchListController(5))

  return (
    <Suspense fallback={<Skeleton/>}>
      <UserList promise={promise}/>
    </Suspense>
  )
}`,DB=`export const host = 'https://randomuser.me'

export const fetchListWithCancel = (i) => {
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: i,
    noinfo: true
  })
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(\`\${host}/api/?\${query.toString()}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`,OB=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchListWithCancel} from './service'
import {createRandomMessage, uuid} from 'utils'

export const fetchListController = (i) => {
  const p = fetchListWithCancel(i)

  p.then(list => {
    return list.results.map((item, index) => {
      item.desc = \`\${index}、\${createRandomMessage()}\`
      item.name = item.name.first + ' ' + item.name.last
      item.thumbnail = item.picture.thumbnail
      item.id = uuid()
      return item
    })
  })

  return p
}
`,BB=`import { use } from 'react'

export default function UserList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={item.id} className='flex border p-4 items-center my-4 rounded'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
`;function zB(){return n.jsx(ee,{files:{index:LB,UserAccount:TB,api:EB,"List/index":$B,"List/controller":OB,"List/service":DB,"List/user-list":BB},caseRender:n.jsx(RB,{})})}function Cv(t){const e={p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(zB,{}),`
`,n.jsx(e.p,{children:"场景：上一个模块请求成功之后，再请求下一个模块。"}),`
`,n.jsx(e.p,{children:"之前出现过类似的场景，但是我严格按照 MVC 架构重新组织了代码逻辑。"})]})}function UB(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Cv,{...t})}):Cv(t)}function PB(){return n.jsx(ae,{renderArticle:t=>n.jsx(UB,{components:{code:t}})})}function HB({promise:t}){const e=j.use(t);return n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.thumbnail,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:i.desc})]})]},`h${o}`))})}const VB=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),qB=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),FB=async()=>Promise.all([VB(),qB()]).then(t=>t.reduce((e,i)=>e.concat(i.results),[])),XB=async()=>(await FB()).map((e,i)=>(e.desc=`${i}、${Ce()}`,e.name=e.name.first+" "+e.name.last,e.thumbnail=e.picture.thumbnail,e));function GB(){const[t]=j.useState(XB);return n.jsx("div",{children:n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(HB,{promise:t})})})}const IB=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import List from './List'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise] = useState(fetchListController)

  return (
    <div>
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,YB=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,ZB=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'
import {createRandomMessage} from 'utils'

export const fetchListController = async () => {
  const list = await fetchList()
  return list.map((item, index) => {
    item.desc = \`\${index}、\${createRandomMessage()}\`
    item.name = item.name.first + ' ' + item.name.last
    item.thumbnail = item.picture.thumbnail
    return item
  })
}
`,KB=`import {prevListApi, nextListApi} from './api'

export const fetchList = async () => {
  return Promise.all([prevListApi(), nextListApi()]).then(res => {
    return res.reduce((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })
}
`,WB=`// API 应该与服务端提供的接口文档严格保持一致
export const prevListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const nextListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}
`;function QB(){return n.jsx(ee,{files:{"index.jsx":IB,List:YB,controller:ZB,service:KB,api:WB},caseRender:n.jsx(GB,{})})}function kv(t){const e={blockquote:"blockquote",code:"code",h3:"h3",p:"p",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(QB,{}),`
`,n.jsx(e.h3,{children:"一、解耦"}),`
`,n.jsxs(e.p,{children:["解耦实际上是一个非常抽象的说法，理解起来比较困难。",n.jsx(e.strong,{children:"他建立在你对于语义化的掌握基础之上。"})]}),`
`,n.jsx(e.p,{children:"当我们有能力，非常清晰的把某个逻辑片段赋予准确的语义，做逻辑解耦就是一个非常轻松的事情。"}),`
`,n.jsxs(e.p,{children:["解耦之所以难，是因为当语义不明时，很多逻辑的边界非常模糊。本文中的案例，演示的是之前章节中，两个接口合并成一个列表的情况。我们在实现该逻辑时，分别抽象出来了 ",n.jsx(e.code,{children:"controller"})," 层与 ",n.jsx(e.code,{children:"service"})," 层。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"service"})," 层做的事情用语义表达出来的结果是：请求两个接口并将其返回的结果合并成一个列表。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"controller"})," 层做的事情是：将 ",n.jsx(e.code,{children:"service"})," 层合并的列表，进行二次结构整理，补全与调整字段。"]}),`
`,n.jsx(e.p,{children:"对于初学者而言，这里很容易引发的一个问题就是，这有必要吗？逻辑其实也不复杂，为什么要单独拆出来呢？我合在一起写可以不可以？"}),`
`,n.jsx(e.p,{children:"从功能上来说，肯定是可以的。你甚至也可以在架构中这样干"}),`
`,n.jsx(e.p,{children:"但是，这里需要注意的是，当你合在一起写之后，那么，这个专门针理数据的请求与处理的模块，我们就必须单独给他定义一个合理的语义：例如：数据层。"}),`
`,n.jsxs(e.p,{children:["因此，我们发现，当 ",n.jsx(e.code,{children:"service"})," 与 ",n.jsx(e.code,{children:"controller"})," 层比较复杂，我们可以通过明确语义的方式，把他们解耦开来处理，从而降低开发难度。合在一起之后，",n.jsx(e.strong,{children:"变复杂的可能不是代码，而是你思考问题的复杂度"}),"。许多人觉得自己面临的问题很困难的根源就在这里。"]}),`
`,n.jsx(e.p,{children:"正确的思考方式是基于语义化的理解，利用嵌套思维简化问题的复杂度，一层一层的去解决问题。"}),`
`,n.jsx(e.h3,{children:"二、嵌套思维"}),`
`,n.jsx(e.p,{children:"在解决困难问题时，嵌套思维是一个必备的思维方式。也是架构师必须要具备的能力。我们以前面思考过的架构举例。"}),`
`,n.jsxs(e.p,{children:["在之前我们介绍的是 ",n.jsx(e.code,{children:"MVC + BFF"})," 混合的架构模式。但是有一个比较奇怪的地方，就是，当我们在单独思考数据层时，又划分了几个角色出来：",n.jsx(e.code,{children:"service"}),"、",n.jsx(e.code,{children:"controller"}),"、",n.jsx(e.code,{children:"model"})]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["如果我们需要约定数据类型，那么我们可以把类型定义在 ",n.jsx(e.code,{children:"model.d.ts"})," 中，来表示数据模型。"]}),`
`]}),`
`,n.jsx(e.p,{children:"实际上，这就是嵌套思维。"}),`
`,n.jsxs(e.p,{children:["当我们在思考整个组件时，我们需要考虑的是 ",n.jsx(e.code,{children:"数据驱动 UI"})," 的角色如何处理。但是这个时候，我们并不会去考虑，如果数据太复杂了应该怎么办的问题。很多人在学习的时候，往往会觉得学习起来困难，就是因为他在这个时候，就已经开始超前思考数据太复杂了应该怎么办。有的人想了几年想不出答案，于是就自我评价说：我没有天赋。"]}),`
`,n.jsx(e.p,{children:"实际上情况并非如此，因为超前思考本身就是一件难度很大的事情。"}),`
`,n.jsx(e.p,{children:"在嵌套思维的指导下，此时我们应该模糊化数据层的复杂度。先把第一层的情况搞情况再说，然后再单独思考数据层。"}),`
`,n.jsxs(e.p,{children:["当我们单独思考数据层时，这个时候的问题，就变成了：",n.jsx(e.strong,{children:"如何给应用层提供一个它需要的数据。"})," 这个时候问题就简单了，因为应用层始终只需要一个数据。很多人会耦合接口个数的逻辑，在应用层中去处理多个请求结果，那么难度自然是很高的，写出来的代码也不优雅。"]}),`
`,n.jsx(e.p,{children:"嵌套思维运用得好，你会发现他无处不在。例如函数中也能执行函数，div 也能成为一个父级元素，队列中可以包含队列，数组中也能包含数组。利用嵌套思维去解决这些问题，都会被你拆解得很简单。"})]})}function JB(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(kv,{...t})}):kv(t)}function ez(){return n.jsx(ae,{renderArticle:t=>n.jsx(JB,{components:{code:t}})})}function nz({promise:t}){const e=j.use(t);return n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.thumbnail,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:i.desc})]})]},i.id))})}const tz=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),sz=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),rz=async()=>Promise.all([tz(),sz()]).then(t=>t.reduce((e,i)=>e.concat(i.results),[])),iz=async()=>(await rz()).map((e,i)=>(e.desc=`${i}、${Ce()}`,e.name=e.name.first+" "+e.name.last,e.thumbnail=e.picture.thumbnail,e.id=An(),e));function az(){const[t]=j.useState(iz);return n.jsx("div",{children:n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(nz,{promise:t})})})}const oz=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import List from './List'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise] = useState(fetchListController)

  return (
    <div>
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,lz=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={item.id} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,cz=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'
import {createRandomMessage, uuid} from 'utils'

export const fetchListController = async () => {
  const list = await fetchList()
  return list.map((item, index) => {
    item.desc = \`\${index}、\${createRandomMessage()}\`
    item.name = item.name.first + ' ' + item.name.last
    item.thumbnail = item.picture.thumbnail
    item.id = uuid()
    return item
  })
}
`,uz=`import {prevListApi, nextListApi} from './api'

export const fetchList = async () => {
  return Promise.all([prevListApi(), nextListApi()]).then(res => {
    return res.reduce((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })
}
`,dz=`// API 应该与服务端提供的接口文档严格保持一致
export const prevListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const nextListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}
`;function mz(){return n.jsx(ee,{files:{"index.jsx":oz,List:lz,controller:cz,service:uz,api:dz},caseRender:n.jsx(az,{})})}function Mv(t){const e={blockquote:"blockquote",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"学习了架构思维之后，我们也必须要重视一个问题，那就是要做到合理的拆分组件。"}),`
`,n.jsx(e.p,{children:"合理拆分组件是我们能够正确践行架构思维的前提条件。很多同学往往没有理论依据，把场景变得更加复杂，从而脱离了架构思维的覆盖范围。自己的工作也变得更加困难。"}),`
`,n.jsx(e.p,{children:"因此，这篇文章，需要跟大家分享一下在异步请求逻辑中，合理拆分组件的一些重要标准。"}),`
`,n.jsx(e.h3,{children:"一、总分总原则"}),`
`,n.jsx(e.p,{children:"我们在开发一个页面之前，首先会看到该页面的设计稿或者原型图。因此，这个页面要做成什么样子，是我们需要提前知道的。这里的完整的页面包括：布局、交互、数据逻辑。如果在开发之前，你仍然对这个页面的成品有疑问，那么就应该把这些疑问先搞清楚，而不是直接动手开发。"}),`
`,n.jsx(e.p,{children:"搞清楚了完整的页面应该长什么样子之后，我们再基于合理的开发的需求，去把这个页面拆分成为多个组件。"}),`
`,n.jsx(e.p,{children:"最后，这些组件会组合成为一个整体，形成最终的可运行的页面成品。"}),`
`,n.jsx(e.p,{children:"这就是我们在写页面的总分总原则。"}),`
`,n.jsxs(e.p,{children:["总分总原则给我们的开发最直观的指导就是：先思考整体，再思考细节。许多同学喜欢一上来就开始写页面，",n.jsx(e.strong,{children:"凭感觉"}),"对页面进行拆分。写到一半发现写不下去了，又回过头来思考发现页面组件拆分不合理，于是就陷入了开发困境。",n.jsx(e.strong,{children:"先思考整体"}),"是非常容易被忽略的。"]}),`
`,n.jsx(e.h3,{children:"二、拆分目的：提高可读性和可维护性"}),`
`,n.jsxs(e.p,{children:["许多人错误的把拆分与封装的目的理解为",n.jsx(e.strong,{children:"仅复用"}),"。因此，在组件拆分时，往往会存在许多不知道怎么办的情况。因为很多时候一个子组件拆分出来，也没别的地方会复用它。所以，这里我们，我们要正确的理解拆分的目的：是为了提高可读性和可维护性，而复用，是提高可维护性的一种情况。"]}),`
`,n.jsx(e.p,{children:"在组件拆分的过程中，有许多组件单独拆分出来，单纯是因为代码太多、或者逻辑稍微复杂了一点。拆分的标准就是：这一段逻辑/代码在后期维护时，是可以不用过多关注从而简化重新阅读难度，从而快速定位问题。"}),`
`,n.jsx(e.p,{children:"例如，我们可以使用一个简单的逻辑表示一个列表的渲染"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{list.map((item) => (
  <div key={item.id}>{item.name}</div>
))}
`})}),`
`,n.jsx(e.p,{children:"但是，很多时候，列表中的其中一项，涉及到的代码比较复杂，比较多，于是，我们就可以单独把每一项拆出来"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`<div>
  {list.map((item) => (
    <User key={item.id} data={item} />
  ))}
</div>
`})}),`
`,n.jsx(e.p,{children:"有的开发者有良好的封装思维。但是也存在过度封装的时候。因此，我们在封装的时候，需要注意一个标准：那就是如果你觉得足够复杂才需要考虑封装，如果复杂度不是很高，就不需要拆出来封装一个子组件。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"刚开始，如果你还无法把控是否复杂的具体粒度，可以通过一个简单的规定来约束：一个文件的代码不能超过 200 行，如果超过了，就需要考虑拆分"}),`
`]}),`
`,n.jsx(e.h3,{children:"三、拆分单位：需要能提炼出明确的语义"}),`
`,n.jsxs(e.p,{children:["无论是封装函数，还是抽象一个架构层级，或者是拆分一个组件出来，我们都需要重视",n.jsx(e.strong,{children:"语义化"}),"。也就是说，你拆分出来的任何模块、函数，你都能够提炼出来明确的语义。用来表示他的职能。这跟设计模式中的单一原则有一点类似，但是更宽泛一点。"]}),`
`,n.jsx(e.p,{children:"在组件拆分中，列举一个常见的语义：列表的子项、导航栏、新闻/xxxx模块、头图、推荐列表、评论列表..."}),`
`,n.jsx(e.p,{children:"如果你发现，你想要拆分出来的某一个逻辑，你无法提炼出明确的语义，那么就有可能存在拆分不合理的情况，以这个标准可以锻炼自己的封装能力。"}),`
`,n.jsx(e.h3,{children:"四、异步组件基础标准：Loading 与 组件是一对一的关系"}),`
`,n.jsx(e.p,{children:"一个异步逻辑所对应的接口情况多种多样，比较复杂，但..."}),`
`,n.jsxs(e.p,{children:["我们设计在页面上的每一个 Loading 组件，都代表了一个完整的异步逻辑：初始化中 loading -> 初始化完成 -> 更新中 loading -> 更新完成。因此，设计 Loading 时，往往不会考虑接口请求的具体情况。而是考虑将具有统一更新逻辑的区域设计为一个独立的组件。在实际情况中，初学者很难自己从",n.jsx(e.strong,{children:"一致的更新逻辑"}),"这个角度去思考自己的组件拆分，从而导致了某些情况下处理起来比较混乱。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"Loading 个数是基于交互设计而言，与接口个数无关，我们只需要通过中间层来抹平差异即可"}),`
`]}),`
`,n.jsx(e.p,{children:"例如下面这个例子，一个列表中的数据，由两个 api 的返回结果组合而成。但是很明显只设计一个 Loading 是比较合理的。那么，我们就将其看成是一个组件，该案例的完整代码在右侧代码区。点击刷新按钮可重新初始化观察 loading 效果。"}),`
`,n.jsx(mz,{})]})}function pz(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Mv,{...t})}):Mv(t)}function hz(){return n.jsx(ae,{renderArticle:t=>n.jsx(pz,{components:{code:t}})})}function fz({promise:t}){const e=j.use(t);return n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded-md",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.thumbnail,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:i.desc})]})]},`h${o}`))})}const xz=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),gz=async()=>(await fetch("https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo")).json(),vz=async()=>Promise.all([xz(),gz()]).then(t=>t.reduce((e,i)=>e.concat(i.results),[])),jz=async()=>(await vz()).map((e,i)=>(e.desc=`${i}、${Ce()}`,e.name=e.name.first+" "+e.name.last,e.thumbnail=e.picture.thumbnail,e));function yz(){const[t]=j.useState(jz);return n.jsx("div",{children:n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(fz,{promise:t})})})}const bz=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import List from './List'

import {fetchListController} from './controller'

export default function Demo01() {
  const [promise] = useState(fetchListController)

  return (
    <div>
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,Sz=`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,Nz=`/**
 * 完成额外的数据处理逻辑，可能包括
 * 1. 数据校验
 * 2. 数据二次处理, 整理返回给 View 层的基本格式
 */
import {fetchList} from './service'
import {createRandomMessage} from 'utils'

export const fetchListController = async () => {
  const list = await fetchList()
  return list.map((item, index) => {
    item.desc = \`\${index}、\${createRandomMessage()}\`
    item.name = item.name.first + ' ' + item.name.last
    item.thumbnail = item.picture.thumbnail
    return item
  })
}
`,wz=`import {prevListApi, nextListApi} from './api'

export const fetchList = async () => {
  return Promise.all([prevListApi(), nextListApi()]).then(res => {
    return res.reduce((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })
}
`,_z=`// API 应该与服务端提供的接口文档严格保持一致
export const prevListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const nextListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}
`;function Cz(){return n.jsx(ee,{files:{"index.jsx":bz,List:Sz,controller:Nz,service:wz,api:_z},caseRender:n.jsx(yz,{})})}function Av(t){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(Cz,{}),`
`,n.jsx(e.h3,{children:"一、前置场景"}),`
`,n.jsx(e.p,{children:"在前面一章，我们基于项目架构整体，为大家分享了 MVC 模式的学习。但是我们知道，在 MVC 模式中，由于 M 数据模型层常常会由于需求的复杂性高、后端的配合度低等实际情况而变得非常复杂。在数据层，我们要处理的数据包括但不限于"}),`
`,n.jsx(e.p,{children:"1、定义应用层需要使用的数据类型"}),`
`,n.jsx(e.p,{children:"2、向服务端请求数据结果"}),`
`,n.jsx(e.p,{children:"3、验证返回的数据类型是否符合要求，例如，我们通常会使用 zod 进行类型判断"}),`
`,n.jsx(e.p,{children:"4、对接口返回的数据进行二次处理，以达到应用层的使用需求。这种情况是造成数据模型层复杂度非常高的主要原因。例如，我们前端封装好的一个 UI 组件需要的数据格式是一个树形结构。但是后端返回的接口却是一个扁平化的数组结构。那么此时，我们就需要针对该数组结构做二次处理以达到 View 层的使用标准。"}),`
`,n.jsx(e.p,{children:"因此，单独的只考虑 MVC 架构，还无法非常完整的处理好我们的项目架构。在此基础之上，我们还需要 BFF 架构理念来帮助我们进一步解耦数据层的复杂情况。"}),`
`,n.jsx(e.h3,{children:"二、BFF 架构"}),`
`,n.jsxs(e.p,{children:["BFF 架构是 Backend For Frontend 的简称。通常情况下指的是在前端与后端之间设计一个",n.jsx(e.strong,{children:"中间层"}),"，用于处理前后端之间数据的差异。例如，对于一个前端页面而言，需要的数据分别来自两个接口，如果把这个逻辑交给前端来处理，前端的场景就变得复杂了，我们需要思考如何在初始化直接请求两个接口的情况。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"由于缺乏架构思维的加持，许多自学成才的程序员就很难优雅的处理这种情况"}),`
`]}),`
`,n.jsx(e.p,{children:"那么此时，一个比较好的做法，就是在前端与后端之间，设计一个 node 服务，专门用于聚合处理后端多个接口的逻辑。然后对于前端来说，一个页面，或者一个组件单位，永远只有一个接口，这样处理起来就非常简单了。"}),`
`,n.jsx(e.p,{children:"这种解耦的做法，是把数据都处理从前端页面应用层剥离出去，后置于中间层。而这种加一个中间层的架构思维，就是 BFF 架构。"}),`
`,n.jsx(e.p,{children:"在一些比较大的团队中，经常会使用这种方案，在前端与后端之间还有一个中间层 node 端。在后端的项目全局架构思维中，BFF 架构思维多用于微服务架构。"}),`
`,n.jsx(e.p,{children:"但是这种做法，却并不是最完美的解决方案。主要的缺点表现如下"}),`
`,n.jsx(e.p,{children:"1、沟通成本高，团队沟通过程中方案的争议点比较多。通常情况下，中间层的逻辑职责划分并不明确，可以前端做，也可以后端做，也可以中间层做，因此，由于 node 中间层的存在，在项目管能力理薄弱的团队，往往会因此产生大量的争吵、甩锅、推诿等现象"}),`
`,n.jsx(e.p,{children:"2、维护成本更高。单独起一个 node 中间层服务，那么就需要专门针对 node 做更多的维护工作，包括日志、异常监控、稳定性维护、问题排查方案等等"}),`
`,n.jsx(e.p,{children:"3、进一步低智化、边缘化前端开发。在管理良好的 BFF 项目架构模式之下，前端开发所涉及的业务问题会更少，因此长期处于这种情况之下，普通前端开发会对项目整体架构的理解几乎一无所知，项目复杂度不够，从而缺乏核心能力的沉淀。"}),`
`,n.jsx(e.p,{children:"4、灵活性不足。如果中间层开发组与前端业务层开发组，不是同一波人，那么一些更具体的方案选择，灵活性会大打折扣。通常会遵循更为死板的架构标准，从而让简单的问题复杂化。例如：有的页面，如果本身只需要一个接口，但是由于 node 中间层的存在，及时本身就不需要进行额外的处理，但是也依然需要按照架构规范从 node 服务走一边。"}),`
`,n.jsx(e.h3,{children:"二、BFF 在前端项目中的运用"}),`
`,n.jsxs(e.p,{children:["我们可以脱离服务端，仅在单独的 react 前端项目中运用 ",n.jsx(e.code,{children:"BFF + MVC"})," 架构来解决数据层比较复杂的问题。"]}),`
`,n.jsxs(e.p,{children:["理念依旧是一样的，只是换了一个场景。我们只需要把 ",n.jsx(e.code,{children:"MVC"})," 模式中的 M 作为中间层来理解即可。核心的代码请看右侧案例演示"]}),`
`,n.jsx(e.p,{children:"我们预设一个场景，前端页面要展示一个列表中的数据，由于后端技术方案的问题，导致了该列表是由两个接口返回两个数组拼接而成。此时，我们要如何做呢？"}),`
`,n.jsxs(e.p,{children:["在非 TS 的项目中，第一步，我们需要有一个 ",n.jsx(e.code,{children:"api.js"})," 的文件，该文件主要用于编写两个请求函数，该请求需要与接口文档保持完全一致，在前端项目中，接口的形式需要返回 Promise。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// API 应该与服务端提供的接口文档严格保持一致
export const prevListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}

export const nextListApi = async () => {
  const res = await fetch(\`https://randomuser.me/api/?results=2&inc=name,gender,email,nat,picture&noinfo\`)
  return res.json()
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"在 MVC 模式下，UI 层被成为 View 层，在 BFF 模式下，UI 层被称为应用层，由于前端的项目通常是 MVC 与 BFF 混合使用，因此后续的文章可能会随机用到某一个表述，我们明白表达的是什么就行了"}),`
`]}),`
`,n.jsx(e.p,{children:"正常情况下，如果应用层只需要一个接口，并且接口的返回类型与 View 层需要的数据类型完全一致，那么我们就可以在 View 层中使用"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// index.js
import {nextListApi} from './api'
`})}),`
`,n.jsxs(e.p,{children:["但是此时，API 只是为了与后端接口保持一致，方便可读性，我们能够从代码结构中清晰快速的明确当前接口是怎么回事。情况的混乱导致我们并不能在应用层直接使用 ",n.jsx(e.code,{children:"api"}),"。此时应用层需要的是两个接口返回的数组合并成为一个数组，因此，这个时候，我们需要抽象出来一个 ",n.jsx(e.code,{children:"service"})," 层，用于处理数据的请求"]}),`
`,n.jsxs(e.p,{children:["在当前文件夹下，定义一个 ",n.jsx(e.code,{children:"service.js"}),"，编写代码如下"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import {prevListApi, nextListApi} from './api'

export const fetchList = async () => {
  return Promise.all([prevListApi(), nextListApi()]).then(res => {
    return res.reduce((prev, cur) => {
      return prev.concat(cur.results)
    }, [])
  })
}
`})}),`
`,n.jsxs(e.p,{children:["如果数组的合并前后顺序无所谓，我们可以使用 ",n.jsx(e.code,{children:"Promise.all"}),"，如果有先后关系要求，则可以使用 ",n.jsx(e.code,{children:"await"}),"。极少数的情况下可能会存在竞争关系，则使用 ",n.jsx(e.code,{children:"Promise.race"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"service"})," 层通常用来处理一个组件需要多个接口才能完成初始化的情况，并最终向应用层或者 ",n.jsx(e.code,{children:"controller"})," 层",n.jsx(e.strong,{children:"提供一个唯一数据源"}),"。如果该页面的接口本身就只有一个，那么则可以不需要它。或者不需要 ",n.jsx(e.code,{children:"api"})," 层，此时可以由你自己根据偏好来决定。"]}),`
`,n.jsxs(e.p,{children:["此时，我们发现，接口返回的数据格式中，缺乏一个描述字段，",n.jsx(e.code,{children:".desc"}),"，当前完整的格式如下"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{
  gender: 'female',
  email: 'clementine.lambert@example.com',
  name: {
    title: 'Miss',
    first: 'Clémentine',
    last: 'Lambert'
  },
  nat: 'FR',
  picture: {
    large: 'https://randomuser.me/api/portraits/women/15.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/15.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/15.jpg'
  }
}
`})}),`
`,n.jsx(e.p,{children:"针对这个数据格式，我们前端有额外的几个需求要调整，以简化应用层的使用"}),`
`,n.jsxs(e.p,{children:["1、需要补充一个字段 ",n.jsx(e.code,{children:".desc"})]}),`
`,n.jsxs(e.p,{children:["2、name 我希望是完整的名称，JSX 中使用 ",n.jsx(e.code,{children:".name"})," 即可渲染"]}),`
`,n.jsxs(e.p,{children:["3、我已经明确知道此时我仅需要缩略图，不需要大图和中图，因此数据格式调整为 ",n.jsx(e.code,{children:".thumbnail"})]}),`
`,n.jsxs(e.p,{children:["此时我们发现，虽然通过 ",n.jsx(e.code,{children:"service"})," 的组合，我们得到了一个完整的数组结构，但是由于字段不满足需求，因此我们需要额外对该数组进行二次处理，此时，我们需要抽象出来一个 ",n.jsx(e.code,{children:"controller"})," 层，用于处理这些数据。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"controller"})," 层通常用于处理以下逻辑"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"1、验证数据字段内容与类型是否符合预期"}),`
`,n.jsx(e.li,{children:"2、验证安全性等其他额外逻辑"}),`
`,n.jsx(e.li,{children:"3、二次处理，整理成为应用层需要的结构"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"controller"})," 在不同的场景中，通常用于直接与 ",n.jsx(e.code,{children:"应用层/View层"})," 对接。例如，在 ",n.jsx(e.code,{children:"nest.js"})," 中，",n.jsx(e.code,{children:"controller"})," 负责处理来自前端的请求，然后将结果返回给前端。"]}),`
`,n.jsxs(e.p,{children:["在我们这个场景，可以直接定义一个 ",n.jsx(e.code,{children:"controller.js"})," 文件，然后编写如下代码完成逻辑"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import {fetchList} from './service'
import {createRandomMessage} from 'utils'

export const fetchListController = async () => {
  const list = await fetchList()
  return list.map((item, index) => {
    item.desc = \`\${index}、\${createRandomMessage()}\`
    item.name = item.name.first + ' ' + item.name.last
    item.thumbnail = item.picture.thumbnail
    return item
  })
}

`})}),`
`,n.jsxs(e.p,{children:["那么在应用层中，则直接使用 ",n.jsx(e.code,{children:"controller"})," 返回的 Promise 来获取数据"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import {fetchListController} from './controller'
`})}),`
`,n.jsx(e.p,{children:"此时的组件文件结构为"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`+ home // 表示页面
  - index.jsx
  - controller.js
  - service.js
  - api.js
  + components  // 表示子组件文件夹，如果子组件简单也可以展开组织
`})}),`
`,n.jsxs(e.p,{children:["通常情况下，",n.jsx(e.code,{children:"controller"})," 层是必须要存在的，因为一个成熟的架构需要对后端返回的数据结果做类型验证、安全性验证等工作，这是每个接口都必须要做的事情。当我们确保返回给应用层的数据是安全可用的之后，那么在应用层中，则可以简单很多，在 ",n.jsx(e.code,{children:"use + Suspense"})," 的场景下，我们可以不用在 JSX 中做数据安全性验证，我们的代码可以直接这样写."]}),`
`,n.jsxs(e.p,{children:["注意看我在 map 中对 ",n.jsx(e.code,{children:"item"})," 的运用方式。 直接使用 ",n.jsx(e.code,{children:"item.desc"}),"，而不是 ",n.jsx(e.code,{children:"item.desc || ''"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={\`h\${i}\`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["数据校验的方式不是本小册要分享的内容。但是我们可以自己封装，也可以使用 ",n.jsx(e.a,{href:"https://zod.dev/README_ZH",children:"zod"})," 这个工具。数据校验通常包括的逻辑有类型校验、缺省值补充、其他额外需求校验、小团队的项目可以简化这一过程，大型团队一般都比较重视。"]}),`
`]}),`
`,n.jsx(e.p,{children:"完整代码在右侧暂时，大家可以详细看一下"}),`
`,n.jsx(e.h3,{children:"四、总结"}),`
`,n.jsxs(e.p,{children:["在 ",n.jsx(e.code,{children:"MVC"})," + ",n.jsx(e.code,{children:"BFF"})," 混合的架构模式中，我们一定要做到的是，确保 ",n.jsx(e.code,{children:"View"})," 的简洁性，无论情况如何复杂，我们都要做到",n.jsx(e.strong,{children:"数据是唯一来源的、数据是拿来即用的"}),"。而不要把数据的额外处理放到应用层中来处理。导致代码逻辑混乱，维护困难。"]}),`
`,n.jsxs(e.p,{children:["在前端开发中，由于直接以文件作为模块，并不需要像 ",n.jsx(e.code,{children:"nest.js"})," 那种需要额外单独构建一套模块系统，因此，BFF 在前端项目中的运用非常灵活。我们可以非常自由的在每个组件中，根据具体场景决定自己是否需要使用 ",n.jsx(e.code,{children:"service、api、controller"}),"，或者仅使用他们中的一个。因此，这样的灵活性就确保了我们即可以以最简单的模块结构应对简单的后端接口，也可以以标准的文件结构应对不规范的后端接口。这样的灵活性是 node 中间层服务所不具备的。因此，直接在前端项目中使用 BFF 是一种开发成本与维护成本更低的方式"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"根据我的实践经验，大多数接口都可以通过沟通的方式简化大部分 service 与 controller 的逻辑。如果沟通失败，我们也有巧妙的方式来应对，从而在工作谈判中为自己争取更多有利的团队贡献素材。"}),`
`]}),`
`,n.jsxs(e.p,{children:["由于本项目并没有采用 ",n.jsx(e.code,{children:"TS"}),"，因此类型相关的逻辑没有额外描述。如果你有相关的疑问，可以在尊享群或者直播里跟我探讨。"]})]})}function kz(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Av,{...t})}):Av(t)}function Mz(){return n.jsx(ae,{renderArticle:t=>n.jsx(kz,{components:{code:t}})})}const Az="https://randomuser.me",Rv=()=>{const t=Math.floor(Math.random()*10)%10,e=new URLSearchParams({inc:"name,gender,email,nat,picture",results:t,noinfo:!0});let i=new AbortController,o=i.signal;const c=new Promise(m=>{fetch(`${Az}/api/?${e.toString()}`,{signal:o}).then(d=>{m(d.json())}).catch(()=>{console.log("接口成功取消！")})});return c.cancel=()=>{i&&i.abort()},c};function Rz({promise:t}){const{results:e}=j.use(t);return console.log("List with use renderred."),n.jsx("div",{children:e.map((i,o)=>n.jsxs("div",{className:"flex border p-4 items-center my-4 rounded",children:[n.jsx("img",{className:"w-12 h-12 rounded-full",src:i.picture.large,alt:""}),n.jsxs("div",{className:"flex-1 ml-4",children:[n.jsx("div",{className:"font-bold",children:i.name.last}),n.jsx("div",{className:"text-gray-400 mt-1 text-sm line-clamp-1",children:Ce()})]})]},`v${o}`))})}function Lz(t){return n.jsxs("div",{className:"flex items-center border px-2 rounded text-gray-500",children:[n.jsx(hc,{size:20}),n.jsx("input",{className:"flex-1 !border-none p-2",style:{outline:"none"},type:"text",...t})]})}function Tz(){const[t,e]=j.useState(Rv);function i(){t.cancel(),e(Rv())}return n.jsxs("div",{children:[n.jsx(Lz,{onChange:i,placeholder:"Enter something"}),n.jsx(j.Suspense,{fallback:n.jsx(Se,{}),children:n.jsx(Rz,{promise:t})})]})}const Ez=`import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {fetchListWithCancel} from './api'
import List from './List'
import Input from './Input'

export default function Demo01() {
  const [promise, update] = useState(fetchListWithCancel)

  function __inputChange() {
    promise.cancel()
    update(fetchListWithCancel())
  }

  return (
    <div>
      <Input onChange={__inputChange} placeholder='Enter something' />
      <Suspense fallback={<Skeleton />}>
        <List promise={promise} />
      </Suspense>
    </div>
  )
}
`,$z=`import {Search} from 'lucide-react'

export default function Input(props) {
  return (
    <div className='flex items-center border px-2 rounded text-gray-500'>
      <Search size={20} />
      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...props}
      />
    </div>
  )
}
`,Dz=`import { use } from 'react';
import { createRandomMessage } from 'utils'

export default function CurrentList({promise}) {
  const {results} = use(promise)
  console.log('List with use renderred.')
  return (
    <div>
      {results.map((item, i) => (
        <div className='flex border p-4 items-center my-4 rounded' key={\`v\${i}\`}>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{createRandomMessage()}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
`,Oz=`export const host = 'https://randomuser.me'

export const fetchListWithCancel = () => {
  const i = Math.floor(Math.random() * 10) % 10
  const query = new URLSearchParams({
    inc: 'name,gender,email,nat,picture',
    results: i,
    noinfo: true
  })
  let controller = new AbortController();
  let signal = controller.signal;
  const promise = new Promise(resolve => {
    fetch(\`\${host}/api/?\${query.toString()}\`, {signal}).then(res => {
      resolve(res.json())
    }).catch(() => {
      console.log('接口成功取消！')
    })
  })

  promise.cancel = () => {
    if (controller) {
      controller.abort()
    }
  }
  return promise
}
`;function Bz(){return n.jsx(ee,{files:{"index.jsx":Ez,Input:$z,List:Dz,api:Oz},caseRender:n.jsx(Tz,{})})}function Lv(t){const e={blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"接下来，我们正式开始学习 React 19 的进阶内容。"}),`
`,n.jsx(e.p,{children:"基本思路会以架构思维出发，然后基于这个架构思维，用大量实践按钮覆盖更多的业务场景。本文先讲理论，后续的文章以实践为主实践。"}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h3,{children:"一、项目结构设计"}),`
`,n.jsx(e.p,{children:"语义结构"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`+ src
  - main.tsx // 表示项目入口文件
  + pages  // 表示页面
  + components // 表示共用基础组件，可复用
  + utils  // 表示共用工具方法
  + hooks  // 表示公用 hook 方法，与 utils 类似
  + other // 根据项目需求自行添加
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"组件化内聚"})}),`
`,n.jsxs(e.p,{children:["例如一个页面组件，对外是一个完整的 Home 组件，与 Home 组件相关的内容都尽量放置在 home 文件之内，对内再进行职能和角色的拆分。这是一种",n.jsx(e.strong,{children:"高内聚的组件化思维"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`+ pages
  + home
    - index.tsx
    - index.d.ts
    - index.css
    - api.ts
    - model.ts   // Modal 数据层
    + components // 可能存在的子组件
`})}),`
`,n.jsx(e.h3,{children:"二、组件内的 MVC 模式"}),`
`,n.jsxs(e.p,{children:["在",n.jsx(e.strong,{children:"对内"}),"进行职能和角色的拆分时，我们要追求的目标就是",n.jsx(e.strong,{children:"低耦合"}),"。每个模块都有自己独立的语义，然后模块之间再通过特地语法规范或者接口进行组合与交互。"]}),`
`,n.jsx(e.p,{children:"通常情况下，前端项目都遵循传统的 MVC 设计模式进行拆分。"}),`
`,n.jsx(e.p,{children:"MVC 大家都不陌生，但这里对于前端开发来说，比较困难的是如何对号入座与融汇贯通。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"M，Model"})}),"，数据模型，表示一个处理数据的对象或者模块，是一个数据模型。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"在 React 的架构模型中，数据模型是最难理解的一个部分。也是我们需要特别学习和关注的一个模块"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"V, View"})}),"，视图，在前端通俗称之为 UI 层，在 React 组件内部，我们可以将 JSX 部分看成是 View 层。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"但是从底层实现上来说，这里的 View 层实际上指的是整个虚拟 DOM 树。React 的每一次更新，都是从根节点从上往下深度遍历 diff 的过程。不过本文探讨的 View 层只涉及到应用层面，不涉及到底层逻辑实现"}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:n.jsx(e.code,{children:"C，Controller"})}),"，控制器，数据变化时控制 UI 变化，在 React 中，定义在 useState 中的数据，自带控制器能力。当 state 中的数据发生了变化，UI 会自动变化，因此我们不会特别强调它，而是直接说：数据驱动 UI。"]}),`
`,n.jsx(e.p,{children:"但是在 React 19 中，控制器会稍微有一些不同。我们要分享的架构模式，是将数据存储在 promise 中，然后将 promise 存储在 state 中，因此，此时控制器将由 promise 的变化来承担。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"我们也可以把 setState 理解为控制器，它直接控制数据的变化，间接控制 UI 的变化"}),`
`]}),`
`,n.jsx(e.h3,{children:"三、结合案例来理解"}),`
`,n.jsx(e.p,{children:"例如下面这个案例，我们用代码实现大概如下"}),`
`,n.jsx(Bz,{}),`
`,n.jsx(e.p,{children:"其中"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"index.jsx"})," 表示 View 层"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"api.js"})," 表示 Model 层"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"update"})," 表示控制器。"]}),`
`,n.jsx(e.p,{children:"案例比较简单，所以大家理解起来应该不难。"}),`
`,n.jsx(e.p,{children:"但普通的开发在复杂场景中，有的同学没有足够的能力支撑他严格践行 MVC 模式，经常会把数据与 UI 耦合在一起编写。从而导致了代码的可维护性变得非常低。"}),`
`,n.jsx(e.p,{children:"因此，在后续的实践案例中，我们需要进一步学习如何在各类复杂场景中践行 MVC 的设计模式。"}),`
`,n.jsx(e.h3,{children:"三、在 promise 中存储数据"}),`
`,n.jsxs(e.p,{children:["在学习时，我们需要花更多的精力放在 Model 层的思考上。在 React 19 中，由于提供了 ",n.jsx(e.code,{children:"use + Suspense"})," 的语法方式，我们可以将数据存放在 promise 中，从而弱化副作用的语法表现，也因此，",n.jsxs(e.strong,{children:["我们可以不用在代码中依赖 ",n.jsx(e.code,{children:"useEffect"})," 来实现异步逻辑"]})]}),`
`,n.jsxs(e.p,{children:["因此，本小册在 Model 层的思考，都会依赖于 ",n.jsx(e.code,{children:"use + Suspense"})," 的思路来实现，我们会优先将数据存储在 promise 中，然后通过 use 来获取数据。"]}),`
`,n.jsx(e.p,{children:"基于以上架构思维原则，在同一个组件中，我们需要明确的是"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"1、View 层只应该有一个入口获取数据，而不是多个"}),`
`,n.jsx(e.li,{children:"2、如果你确实觉得需要多个入口，需要优先考虑拆分组件，然后满足第一条"}),`
`,n.jsxs(e.li,{children:["3、View 层不处理数据相关的任何逻辑，例如过滤数据，修改数据结构等，都应该在数据层处理好，View 层的数据应该是",n.jsx(e.strong,{children:"拿来即用"}),"的"]}),`
`]})]})}function zz(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Lv,{...t})}):Lv(t)}function Uz(){return n.jsx(ae,{renderArticle:t=>n.jsx(zz,{components:{code:t}})})}function Tv(t){const e={blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...t.components};return n.jsxs(n.Fragment,{children:[n.jsxs(e.p,{children:["从这一章开始，我们将要进入体系化的",n.jsx(e.strong,{children:"架构层面"}),"的学习。"]}),`
`,n.jsxs(e.p,{children:["在这之前，我需要跟大家分享一下，在学习方法这个层面，我是如何理解",n.jsx(e.strong,{children:"体系化"}),"的。消化这个概念，对于提高我们的学习能力和构建完整的知识体系有非常大的帮助。"]}),`
`,n.jsxs(e.p,{children:["我把",n.jsx(e.strong,{children:"理论结合实践"}),"抽象成一个简单的四象限。如下图所示"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`               结合实践
                  ^
                  |
              2   |   1
忽视理论 ---------------------> 重视理论
              4   |   3
                  |
               脱离实践
`})}),`
`,n.jsxs(e.p,{children:["单从结果上来说，大家当然知道",n.jsx(e.strong,{children:"理论结合实践"}),"是最好的方式，但是在真实的学习过程中，大多数人都会陷入到其他象限中而不自知。从而导致不理想的学习结果。"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"一、经验主义"})}),`
`,n.jsx(e.p,{children:"陷入第二象限我们称之为经验主义。陷入经验主义的人往往重视个人实践经验，但是忽视理论和逻辑。"}),`
`,n.jsxs(e.p,{children:["在学习前端技术上的体现就是，有的人会带着最开始学到的开发模式一直搞下去。很难理解和接受新的开发思维和模式。因此，在你最初进入到这个行业时，所接触到的开发方式会影响你很长时间。甚至有的人会影响自己的整个职业生涯。陷入经验主义的人具备非常显著的",n.jsx(e.strong,{children:"路径依赖"}),"。"]}),`
`,n.jsx(e.p,{children:"这里有一个很明显的问题是，由于缺乏理论依据，因此无法敏锐的发现表面上不同方案的共通性，因此学习能力会比较弱，很难具备举一反三的能力。例如，虽然你学会了 react，并能够熟练的开发项目，但是依然对自己掌握客户端开发没有什么底气。"}),`
`,n.jsx(e.p,{children:"当然，由于前端是一门非常重视技术实现的行业，因此在平时大家很难发觉自己陷入了经验主义，但是在面试时，这就会体现得比较明显。例如，你无法准确的表达出自己所做过的项目，觉得自己的项目没有亮点等。这都是平时忽视理论带来的不良影响。"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"二、教条主义"})}),`
`,n.jsxs(e.p,{children:["陷入第三象限，我们称之为教条主义。陷入教条主义的人，往往重视理论，但是脱离实践，许多方案无法落地，比较容易",n.jsx(e.strong,{children:"纸上谈兵"}),"。"]}),`
`,n.jsx(e.p,{children:"例如，某些大厂管理者，很难在小团队里干出成绩。因为他刻板的把大厂的管理模式、流程、制度、生搬硬套搞到小团队里。这一套理论是正确的，成功的，但是他们忽视了小团队里的人员配置和时间等因素与打团队完全不一样，因此，最终的结果就是很难有符合预期的产出。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"从另外一个层面上来说，这种情况也属于经验主义错误，依赖于之前的成功案例，但是由于条件发生了变化，这套理论无法成功落地。"}),`
`]}),`
`,n.jsxs(e.p,{children:["体现在前端这个行业里的现象就是许多老油条、学院派等比较喜欢夸夸而谈。但是具体落地实践却表现平平。在学习中的体现，就是比较容易觉得别人做出来的东西这个也很简单，那个也很简单，无法感受到实践落地时的具体困境。因此对于面试官来说，学会如何识别教条主义的候选人是非常重要的。如果公司计划裁员，优先要考虑的也是这种人。",n.jsx(e.strong,{children:"对于个人来说，长期处于脱离开发的管理岗，也很容易陷入到教条主义中去"}),"。"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"三、机会主义"})}),`
`,n.jsx(e.p,{children:"机会主义是指不重视理论，也不重视实践。全凭幻想和自我安慰。"}),`
`,n.jsx(e.p,{children:"比较经典的学习误区就是：跟着敲一遍，等于学会了！"}),`
`,n.jsx(e.p,{children:"但是脱离了一些必要依赖之后，代码就敲不出来了。时间久了之后，会在焦虑中变得非常痛苦。甚至对自己能够在这个行业持续的走下去失去信心。"}),`
`,n.jsx(e.p,{children:"在工作中的体现就是，会议讨论时，你可能会提出一个方案，但是你说不出来这个方案为什么更好。只是一种感觉，因此在工作沟通中会比较被动，或者陷入奇怪的争吵中去，或者会被同事轻视。"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"四、理论结合实践"})}),`
`,n.jsx(e.p,{children:"学习过程一定要理论结合实践。"}),`
`,n.jsx(e.p,{children:"否则，你的学习结果大概率会是：无法输出、很难表达、容易忘记、表达的内容经不起推敲，无法形成完整的逻辑闭环、无法具备举一反三的能力。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"我想这肯定是一个所有人都知道的结果。但是知道结果不代表自己能做到，本文之所以要单独的提出来，就是在学习之前，我们要做好这样的心里准备，能够在正确的学习方式的指导之下开始我们更高质量的学习。"}),`
`]}),`
`,n.jsx(e.p,{children:"没有理论，就不能解决普遍的问题。"}),`
`,n.jsx(e.p,{children:"没有实践，就不能解决特定的问题。"}),`
`,n.jsxs(e.p,{children:["在前端开发中，掌握一套架构理论，是每个高级开发者必备的",n.jsx(e.strong,{children:"基础能力"}),"。但是这套架构理论，运用到不同的场景中是如何体现的，就需要我们在实践中去感受。"]}),`
`,n.jsx(e.p,{children:"我们的现状就是，理论的结果，大家其实都是知道的。但是这套理论，是如何体现在我们的项目开发中的？许多人就说不清楚了。做不到理论结合实践，那么就表示并没有理解这套架构理论。"}),`
`,n.jsxs(e.p,{children:["很多人错误的把",n.jsx(e.strong,{children:"我知道了结果"}),"，当成了",n.jsx(e.strong,{children:"我掌握了结果"}),"。从而对某些知识产生轻视的情绪和态度，最终学习结果并不理想。实际上，这又是一种机会幻想主义思想，因此，我需要专门写一篇这样的序章，用于纠结部分同学的这种错误认知。"]}),`
`,n.jsx(e.p,{children:"在接下来的内容中，我会先讲理论，再讲实践。内容以理论结合实践的方式共同呈现。以提供最佳的学习效果。我们的目的是：不仅要会实现功能，还要会系统的表达，能够理论结合实践的想别人传达你的开发思想，从而达到一个很高的水平。"}),`
`,n.jsx(e.p,{children:"理想的学习情况是，当你掌握了理论知识，再结合少许几个实践，你就能应对或者自然掌握大多数实践场景。如果你之前有丰富的开发经验，那么这套理论也可以帮助你轻松优化自己的项目。而不一定非要完整的学习后续的实践部分。"}),`
`,n.jsx(e.p,{children:"因此，后续的章节学习速度会越来越快，你甚至能感受到似曾相识，变化的只是一些很小的细节。如果你有这样的感觉，那么，就表示我们的学习过程是成功的。"}),`
`,n.jsx(e.p,{children:"说明你已经达到了举一反三、化繁为简的学习效果。"})]})}function Pz(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Tv,{...t})}):Tv(t)}function Hz(){return n.jsx(ae,{renderArticle:t=>n.jsx(Pz,{components:{code:t}})})}function Ev(t){const e={a:"a",h3:"h3",p:"p",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{children:"直播录屏地址"}),`
`,n.jsxs(e.p,{children:["1、 ",n.jsx(e.a,{href:"https://pan.baidu.com/s/1KNO2wI8itqIVE5dMZQtAfA?pwd=vaiu",children:"两位大佬简历在线指导"})]}),`
`,n.jsxs(e.p,{children:["2、",n.jsx(e.a,{href:"https://pan.baidu.com/s/13QRillNbWDKnp03LX_N9EQ?pwd=qm33",children:"大量复杂实践案例思路解析"})]}),`
`,n.jsxs(e.p,{children:["3、",n.jsx(e.a,{href:"https://pan.baidu.com/s/1fqs5sjTsbEyRLhcbSPP5ig?pwd=msjy",children:"第一次直播答疑"})]}),`
`,n.jsxs(e.p,{children:["4、",n.jsx(e.a,{href:"https://pan.baidu.com/s/1XS4YnM_F0hrg8gJGX7puIw?pwd=3rsw",children:"第二次直播答疑"})]}),`
`,n.jsxs(e.p,{children:["5、",n.jsx(e.a,{href:"https://pan.baidu.com/s/1KNO2wI8itqIVE5dMZQtAfA?pwd=vaiu",children:"两位大佬简历在线修改实录"})]})]})}function Vz(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ev,{...t})}):Ev(t)}function qz(){return n.jsx(ae,{renderArticle:t=>n.jsx(Vz,{components:{code:t}})})}const Lb=[{path:"live",name:"0、直播讲解录屏",component:qz},{type:"tip",name:"序"},{path:"index",name:"1、如何理解体系化",component:Hz},{type:"tip",name:"理论篇"},{path:"architecture",name:"2、架构思维总览",component:Uz},{path:"bff",name:"3、BFF架构思维",component:Mz},{path:"split",name:"4、组件拆分原则",component:hz},{path:"nest",name:"5、解耦与嵌套",component:ez},{type:"tip",name:"实战篇"},{path:"streaming",name:"6、瀑布流",component:PB},{path:"multapi",name:"7、多个接口并行",component:bB},{path:"deps",name:"8、多个接口前后依赖",component:iB},{path:"cache",name:"9、数据缓存",component:qO},{path:"update",name:"10、多个更新条件",component:kO},{path:"different",name:"11、接口更新频率不一致",component:dO},{path:"pickapi",name:"12、更新其中某个接口",component:YD},{path:"childx",name:"13、子组件数据解耦",component:RD},{path:"cfilter",name:"14、统一思考过滤条件",component:dD},{path:"lstate",name:"15、单独维护列表状态",component:X$},{path:"reduce",name:"16、分页列表",component:_$}];function $v(){return n.jsx("div",{children:Lb.map((t,e)=>t.type==="tip"?n.jsx("div",{className:"text-sm text-gray-400 first:pt-0 pb-4 pt-8",children:t.name},`z-${e}`):n.jsx(Vr,{className:"text-gray-700",activeName:"text-blue-700",to:t.path,children:n.jsxs("li",{className:"py-3 text-sm transition flex items-center justify-between hover:text-blue-700",children:[n.jsx("div",{className:"line-clamp-1",children:t.name}),t.label?n.jsx($p,{label:t.label,primary:!0,className:"ml-2"}):null]},t.path)},t.path))})}const Fz=["1872285653694312448","1813145181655089152"],Tb="1876560978079080448",Xz="advance",Gz="index",Iz="React@19.0.0",Yz=`https://xinyuzone.cn/column/${Tb}`;function Zz(){return Fz.includes(qr().user_id)?Promise.resolve({status_code:0,status:1}):Fi("/eden/v1/open/column/subscription/status",{column_id:Tb})}let Eb=0;function Kz(t){Eb=t}function Wz(){return Eb}function Qz({children:t,pass:e}){const{isLogin:i}=qr();if(!e&&!i)return n.jsxs("div",{className:"w-full py-32 flex flex-col justify-center items-center",children:[n.jsx(Oi,{className:"text-cyan-500",size:32}),n.jsx("div",{className:"my-2 text-lg font-bold",children:"您还没有登录"}),n.jsx("div",{className:"text-xs",children:"本网站仅支持通过三方授权平台新语进行登录"}),n.jsx($n,{to:fc(),className:"bg-green-500 py-1.5 px-4 text-white rounded mt-8",children:"登录"})]});const o=Wz();return!e&&o!==1?n.jsxs("div",{className:"w-full py-32 flex flex-col justify-center items-center",children:[n.jsx(Oi,{className:"text-cyan-500",size:32}),n.jsx("div",{className:"my-2 text-lg font-bold",children:"您还没有订阅"}),n.jsx("div",{children:"你需要在新语社区的专栏中订阅之后才能访问内容"}),n.jsx($n,{to:Yz,className:"bg-green-500 py-1.5 px-4 text-white rounded mt-8",children:"订阅"})]}):t}function Jz({promise:t}){const e=dc(),i=mc(),{pathname:o}=or(),c=j.use(t);return Kz(c.status),j.useEffect(()=>{location.pathname===`/${Xz}`&&e(Gz),window.scrollTo(0,0)},[o]),n.jsx(Qz,{children:i})}function eU(){const[t]=j.useState(Zz),e=j.useRef(null);function i(){window.scrollTo({top:0,behavior:"smooth"})}function o(){const c=document.getElementById("diviler_");c&&c.scrollIntoView({block:"start",behavior:"smooth"})}return n.jsxs("div",{className:"pt-16 md:flex",children:[n.jsx("aside",{id:"vp-aside",className:"fixed top-0 left-0 bottom-0 overflow-y-scroll bg-gray-50 hidden md:block",children:n.jsxs("div",{className:"px-6 w-full",children:[n.jsxs("div",{className:"flex items-center pb-8 pt-24 sticky top-0 bg-gray-50 border-b mb-8",children:[n.jsx("div",{className:"flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 text-cyan-500",children:n.jsx("path",{fillRule:"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",clipRule:"evenodd"})})}),n.jsxs("div",{className:"text-sm",children:[n.jsx("div",{children:"当前版本"}),n.jsx("div",{className:"text-gray-500",children:Iz})]})]}),n.jsx("nav",{className:"pb-8",children:n.jsx($v,{})})]})}),n.jsxs("div",{id:"vp-content",children:[n.jsxs("div",{className:"pt-4 md:pt-8 relative flex justify-center",children:[n.jsx("div",{id:"cp-content",className:"keep px-4 md:px-8 2xl:px-24 pb-24 w-0 flex-1",children:n.jsx(j.Suspense,{fallback:n.jsx("div",{}),children:n.jsx(Jz,{promise:t})})}),n.jsx("aside",{id:"cp-aside",className:"pr-6 relative items-start",children:n.jsxs("div",{id:"headings",className:"w-full sticky top-24 space-y-4 text-gray-700",children:[n.jsxs($n,{to:"https://xinyuzone.cn/column/1818097927437131776",className:"block rounded bg-gray-50 p-4 border border-gray-100",target:"_blank",children:[n.jsx(Km,{className:"text-blue-400"}),n.jsx("div",{className:"font-bold my-2",children:"JavaScript 核心进阶"}),n.jsx("div",{className:"text-sm leading-6",children:"从构建基础知识体系出发，抓紧核心基础内容，给你地道的前端进阶思维"})]}),n.jsxs($n,{href:"https://usehook.cn/",className:"block rounded bg-gray-50 p-4 border border-gray-100",target:"_blank",children:[n.jsx(Ym,{className:"text-green-400"}),n.jsx("div",{className:"font-bold my-2",children:"React 19 全解"}),n.jsx("div",{className:"text-sm leading-6",children:"全网第一本系统介绍 React 19 的小册，大量实践案例，给你沉浸式学习体验"})]}),n.jsxs($n,{href:"https://usehook.cn/advance/index",className:"block rounded bg-gray-50 p-4 border border-gray-100",target:"_blank",children:[n.jsx(Zm,{className:"text-red-400"}),n.jsx("div",{className:"font-bold my-2",children:"React 19 尊享版"}),n.jsx("div",{className:"text-sm leading-6",children:"专为前端资深架构师提供的进阶内容，聚焦项目架构，强化开发效率与开发体验"})]}),n.jsx("div",{className:"rounded bg-gray-100 py-8 text-center text-gray-500",children:n.jsx("div",{className:"",children:"成为赞助商"})}),n.jsxs("div",{onClick:i,className:"rounded py-2 border border-gray-200 text-center flex items-center justify-center cursor-pointer",children:[n.jsx(Im,{size:16}),n.jsx("div",{className:"ml-2",children:"滚动到顶部"})]}),n.jsxs("div",{onClick:o,className:"rounded py-2 border border-gray-200 text-center flex items-center justify-center cursor-pointer",children:[n.jsx(Gm,{size:16}),n.jsx("div",{className:"ml-2",children:"滚动到评论"})]})]})})]}),n.jsx(ue,{className:"fixed bottom-6 right-4 md:hidden",signal:!0,onClick:()=>e.current.show(),children:"目录"}),n.jsxs(xc,{ref:e,direction:"left",width:"60%",children:[n.jsx("header",{className:"h-16 flex items-center px-4",children:n.jsx(vo,{})}),n.jsx("nav",{className:"bg-white h-full py-8 overflow-scroll px-6",onClick:()=>e.current.close(),children:n.jsx($v,{})})]})]})]})}function Dv(t){const e={code:"code",h3:"h3",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h3,{children:"Pagination"}),`
`,n.jsx(e.p,{children:"默认用法"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`<Pagination />
`})}),`
`,n.jsx(Wn,{children:n.jsx(Jl,{})}),`
`,n.jsx(e.p,{children:"传入参数"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`<Pagination total={22} current={18} />
`})}),`
`,n.jsx(Wn,{children:n.jsx(Jl,{total:22,current:18})}),`
`,n.jsx(e.p,{children:"onChange 事件获取 current"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`<Pagination total={22} current={18} onChange={(i) => {console.log(i)}} />
`})}),`
`,n.jsx(Wn,{reload:!0,children:n.jsx(Jl,{total:22,current:18,onChange:i=>{console.log(i)}})})]})}function nU(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Dv,{...t})}):Dv(t)}function tU(){return n.jsx(ae,{renderArticle:t=>n.jsx(nU,{components:{code:t}})})}function Ov(t){const e={code:"code",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"基础使用"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`<Skeleton />
`})}),`
`,n.jsx(Se,{})]})}function sU(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Ov,{...t})}):Ov(t)}function rU(){return n.jsx(ae,{renderArticle:t=>n.jsx(sU,{components:{code:t}})})}function Bv(t){const e={code:"code",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"Input 基础使用"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<Input placeholder="请输入任意内容" />
`})}),`
`,n.jsx(Wn,{children:n.jsx(_s,{placeholder:"请输入任意内容"})})]})}function iU(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(Bv,{...t})}):Bv(t)}function aU(){return n.jsx(ae,{renderArticle:t=>n.jsx(iU,{components:{code:t}})})}function zv(t){const e={code:"code",p:"p",pre:"pre",...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.p,{children:"基础使用"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<Button>hello button</Button>
`})}),`
`,n.jsx("div",{children:n.jsx(ue,{children:"hello button"})}),`
`,n.jsx(e.p,{children:"类型"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<Button danger>Danger</Button>
<Button primary>Primary</Button>
<Button success>Success</Button>
<Button signal>Signal</Button>
`})}),`
`,n.jsx(Wn,{children:n.jsxs("div",{className:"mt-4 flex justify-around",children:[n.jsx(ue,{children:"Default"}),n.jsx(ue,{danger:!0,children:"Danger"}),n.jsx(ue,{success:!0,children:"Success"}),n.jsx(ue,{primary:!0,children:"Primary"}),n.jsx(ue,{signal:!0,children:"Signal"}),n.jsx(ue,{ghost:!0,children:"ghost"})]})}),`
`,n.jsx(e.p,{children:"ghost 变体"}),`
`,n.jsx(Wn,{children:n.jsxs("div",{className:"mt-4 flex justify-around",children:[n.jsx(ue,{ghost:!0,children:"Default"}),n.jsx(ue,{ghost:!0,primary:!0,children:"primary"}),n.jsx(ue,{ghost:!0,danger:!0,children:"Danger"}),n.jsx(ue,{ghost:!0,success:!0,children:"Success"}),n.jsx(ue,{ghost:!0,signal:!0,children:"Signal"})]})}),`
`,n.jsx(e.p,{children:"disabled 变体"}),`
`,n.jsx(Wn,{children:n.jsxs("div",{className:"mt-4 flex justify-around",children:[n.jsx(ue,{ghost:!0,disabled:!0,children:"Default"}),n.jsx(ue,{ghost:!0,disabled:!0,primary:!0,children:"primary"}),n.jsx(ue,{ghost:!0,disabled:!0,danger:!0,children:"Danger"}),n.jsx(ue,{ghost:!0,disabled:!0,success:!0,children:"Success"}),n.jsx(ue,{ghost:!0,disabled:!0,signal:!0,children:"Signal"})]})}),`
`,n.jsx(e.p,{children:"大小"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<Button danger sm className="mr-4">Danger</Button>
<Button danger className="mr-4">Danger</Button>
<Button danger lg>Danger</Button>
`})}),`
`,n.jsxs(Wn,{children:[n.jsxs("div",{className:"mt-4",children:[n.jsx(ue,{danger:!0,sm:!0,className:"mr-4",children:"Danger"}),n.jsx(ue,{danger:!0,className:"mr-4",children:"Danger"}),n.jsx(ue,{danger:!0,lg:!0,children:"Danger"}),n.jsxs(ue,{primary:!0,className:"flex justify-center items-center space-x-2",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5",children:n.jsx("path",{fillRule:"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",clipRule:"evenodd"})}),n.jsx("span",{children:"File"})]})]}),n.jsxs("div",{className:"mt-4",children:[n.jsx(ue,{success:!0,lg:!0,className:"mr-4",children:"Success"}),n.jsx(ue,{success:!0,className:"mr-4",children:"Success"}),n.jsx(ue,{success:!0,sm:!0,children:"Success"})]}),n.jsxs("div",{className:"mt-4",children:[n.jsx(ue,{primary:!0,sm:!0,className:"mr-4",children:"Primary"}),n.jsx(ue,{primary:!0,className:"mr-4",children:"Primary"}),n.jsx(ue,{primary:!0,lg:!0,children:"Primary"})]}),n.jsxs("div",{className:"mt-4",children:[n.jsx(ue,{signal:!0,lg:!0,className:"mr-4",children:"Signal"}),n.jsx(ue,{signal:!0,className:"mr-4",children:"Signal"}),n.jsx(ue,{signal:!0,sm:!0,children:"Signal"})]})]}),`
`,n.jsx(e.p,{children:"子组件变体"}),`
`,n.jsx(Wn,{children:n.jsxs("div",{className:"mt-4 flex items-center justify-around",children:[n.jsx(ue,{primary:!0,children:n.jsxs(we,{className:"space-x-2",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:n.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})}),n.jsx("span",{children:"Primary File"})]})}),n.jsx(ue,{danger:!0,children:n.jsxs(we,{className:"space-x-2",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:n.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})}),n.jsx("span",{children:"Danger File"})]})}),n.jsx(ue,{default:!0,rect:!0,children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:n.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})})}),n.jsx(ue,{success:!0,rect:!0,children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:n.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})})}),n.jsx(ue,{rect:!0,signal:!0,children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"})})}),n.jsx(ue,{rect:!0,children:n.jsxs(we,{className:"space-x-2",children:[n.jsx("span",{children:"Default File"}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:n.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})})]})}),n.jsx(ue,{success:!0,rect:!0,children:n.jsxs(we,{className:"space-x-2",children:[n.jsx("span",{children:"Success File"}),n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:n.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})})]})})]})}),`
`,n.jsx(e.p,{children:"上下结构按钮"}),`
`,n.jsxs(Wn,{children:[n.jsx(ue,{success:!0,ghost:!0,children:n.jsxs(we,{col:!0,className:"space-y-2",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:n.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})}),n.jsx("span",{children:"File"})]})}),n.jsx(ue,{signal:!0,ghost:!0,children:n.jsxs(we,{col:!0,className:"space-y-2",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"})}),n.jsx("span",{children:"bell"})]})}),n.jsx(ue,{primary:!0,ghost:!0,children:n.jsxs(we,{col:!0,className:"space-y-2",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"})}),n.jsx("span",{children:"bolt"})]})})]}),`
`,n.jsx(e.p,{children:"利用 className 增强 Button 能力"}),`
`,n.jsx(Wn,{children:n.jsxs(we,{className:"space-x-2",children:[n.jsx(ue,{primary:!0,ghost:!0,className:"border-blue-500",children:n.jsxs(we,{col:!0,className:"space-y-2",children:[n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",class:"size-5",children:n.jsx("path",{"fill-rule":"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z","clip-rule":"evenodd"})}),n.jsx("span",{children:"File"})]})}),n.jsx(ue,{success:!0,ghost:!0,rect:!0,className:"rounded-full border-green-500",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-6",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m4.5 12.75 6 6 9-13.5"})})})]})}),`
`,n.jsx(e.p,{children:"完整源码"}),`
`,n.jsx(ee,{files:{"index.jsx":Zy},auth:!0})]})}function oU(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(zv,{...t})}):zv(t)}function lU(){return n.jsx(ae,{renderArticle:t=>n.jsx(oU,{components:{code:t}})})}const $b=[{type:"tip",name:"基础组件"},{path:"button",name:"1、按钮 Button",component:lU},{path:"input",name:"2、输入框 Input",component:aU},{path:"skeleton",name:"2、骨架屏 Skeleton",component:rU},{path:"pagination",name:"3、分页器 Pagination",component:tU}];function Uv(){return n.jsx("div",{children:$b.map((t,e)=>t.type==="tip"?n.jsx("div",{className:"text-sm text-gray-400 first:pt-0 pb-4 pt-8",children:t.name},`z-${e}`):n.jsx(Vr,{className:"text-gray-700",activeName:"text-blue-700",to:t.path,children:n.jsxs("li",{className:"py-3 text-sm transition flex items-center justify-between hover:text-blue-700",children:[n.jsx("div",{className:"line-clamp-1",children:t.name}),t.label?n.jsx($p,{label:t.label,primary:!0,className:"ml-2"}):null]},t.path)},t.path))})}const cU=["1872285653694312448","1813145181655089152"],Db="1876560978079080448",uU="docs",dU="button",mU="React@19.0.0",pU=`https://xinyuzone.cn/column/${Db}`;function hU(){return cU.includes(qr().user_id)?Promise.resolve({status_code:0,status:1}):Fi("/eden/v1/open/column/subscription/status",{column_id:Db})}let Ob=0;function fU(t){Ob=t}function xU(){return Ob}function gU({children:t,pass:e}){const{isLogin:i}=qr();if(!e&&!i)return n.jsxs("div",{className:"w-full py-32 flex flex-col justify-center items-center",children:[n.jsx(Oi,{className:"text-cyan-500",size:32}),n.jsx("div",{className:"my-2 text-lg font-bold",children:"您还没有登录"}),n.jsx("div",{className:"text-xs",children:"本网站仅支持通过三方授权平台新语进行登录"}),n.jsx($n,{to:fc(),className:"bg-green-500 py-1.5 px-4 text-white rounded mt-8",children:"登录"})]});const o=xU();return!e&&o!==1?n.jsxs("div",{className:"w-full py-32 flex flex-col justify-center items-center",children:[n.jsx(Oi,{className:"text-cyan-500",size:32}),n.jsx("div",{className:"my-2 text-lg font-bold",children:"您还没有订阅"}),n.jsx("div",{children:"你需要在新语社区的专栏中订阅之后才能访问内容"}),n.jsx($n,{to:pU,className:"bg-green-500 py-1.5 px-4 text-white rounded mt-8",children:"订阅"})]}):t}function vU({promise:t}){const e=dc(),i=mc(),{pathname:o}=or(),c=j.use(t);return fU(c.status),j.useEffect(()=>{location.pathname===`/${uU}`&&e(dU),window.scrollTo(0,0)},[o]),n.jsx(gU,{children:i})}function jU(){const[t]=j.useState(hU),e=j.useRef(null);function i(){window.scrollTo({top:0,behavior:"smooth"})}function o(){const c=document.getElementById("diviler_");c&&c.scrollIntoView({block:"start",behavior:"smooth"})}return n.jsxs("div",{className:"pt-16 md:flex",children:[n.jsx("aside",{id:"vp-aside",className:"fixed top-0 left-0 bottom-0 overflow-y-scroll bg-gray-50 hidden md:block",children:n.jsxs("div",{className:"px-6 w-full",children:[n.jsxs("div",{className:"flex items-center pb-8 pt-24 sticky top-0 bg-gray-50 border-b mb-8",children:[n.jsx("div",{className:"flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200",children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"size-5 text-cyan-500",children:n.jsx("path",{fillRule:"evenodd",d:"M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z",clipRule:"evenodd"})})}),n.jsxs("div",{className:"text-sm",children:[n.jsx("div",{children:"当前版本"}),n.jsx("div",{className:"text-gray-500",children:mU})]})]}),n.jsx("nav",{className:"pb-8",children:n.jsx(Uv,{})})]})}),n.jsxs("div",{id:"vp-content",children:[n.jsxs("div",{className:"pt-4 md:pt-8 relative flex justify-center",children:[n.jsx("div",{id:"cp-content",className:"keep px-4 md:px-8 2xl:px-24 pb-24 w-0 flex-1",children:n.jsx(j.Suspense,{fallback:n.jsx("div",{}),children:n.jsx(vU,{promise:t})})}),n.jsx("aside",{id:"cp-aside",className:"pr-6 relative items-start",children:n.jsxs("div",{id:"headings",className:"w-full sticky top-24 space-y-4 text-gray-700",children:[n.jsxs($n,{to:"https://xinyuzone.cn/column/1818097927437131776",className:"block rounded bg-gray-50 p-4 border border-gray-100",target:"_blank",children:[n.jsx(Km,{className:"text-blue-400"}),n.jsx("div",{className:"font-bold my-2",children:"JavaScript 核心进阶"}),n.jsx("div",{className:"text-sm leading-6",children:"从构建基础知识体系出发，抓紧核心基础内容，给你地道的前端进阶思维"})]}),n.jsxs($n,{href:"https://usehook.cn/",className:"block rounded bg-gray-50 p-4 border border-gray-100",target:"_blank",children:[n.jsx(Ym,{className:"text-green-400"}),n.jsx("div",{className:"font-bold my-2",children:"React 19 全解"}),n.jsx("div",{className:"text-sm leading-6",children:"全网第一本系统介绍 React 19 的小册，大量实践案例，给你沉浸式学习体验"})]}),n.jsxs($n,{href:"https://usehook.cn/advance/index",className:"block rounded bg-gray-50 p-4 border border-gray-100",target:"_blank",children:[n.jsx(Zm,{className:"text-red-400"}),n.jsx("div",{className:"font-bold my-2",children:"React 19 尊享版"}),n.jsx("div",{className:"text-sm leading-6",children:"专为前端资深架构师提供的进阶内容，聚焦项目架构，强化开发效率与开发体验"})]}),n.jsx("div",{className:"rounded bg-gray-100 py-8 text-center text-gray-500",children:n.jsx("div",{className:"",children:"成为赞助商"})}),n.jsxs("div",{onClick:i,className:"rounded py-2 border border-gray-200 text-center flex items-center justify-center cursor-pointer",children:[n.jsx(Im,{size:16}),n.jsx("div",{className:"ml-2",children:"滚动到顶部"})]}),n.jsxs("div",{onClick:o,className:"rounded py-2 border border-gray-200 text-center flex items-center justify-center cursor-pointer",children:[n.jsx(Gm,{size:16}),n.jsx("div",{className:"ml-2",children:"滚动到评论"})]})]})})]}),n.jsx(ue,{className:"fixed bottom-6 right-4 md:hidden",signal:!0,onClick:()=>e.current.show(),children:"目录"}),n.jsxs(xc,{ref:e,direction:"left",width:"60%",children:[n.jsx("header",{className:"h-16 flex items-center px-4",children:n.jsx(vo,{})}),n.jsx("nav",{className:"bg-white h-full py-8 overflow-scroll px-6",onClick:()=>e.current.close(),children:n.jsx(Uv,{})})]})]})]})}function yU(){return n.jsx(B5,{children:n.jsxs(Bt,{path:"/",element:n.jsx(f_,{}),children:[n.jsx(Bt,{index:!0,element:n.jsx($8,{})}),n.jsx(Bt,{path:"tutorial",element:n.jsx(i$,{}),children:Nb.filter(t=>!!t.path).map((t,e)=>n.jsx(Bt,{path:t.path,element:n.jsx(j.Suspense,{fallback:n.jsx(Dd,{}),children:n.jsx(t.component,{})})},t.path))}),n.jsx(Bt,{path:"advance",element:n.jsx(eU,{}),children:Lb.filter(t=>!!t.path).map((t,e)=>n.jsx(Bt,{path:t.path,element:n.jsx(j.Suspense,{fallback:n.jsx(Dd,{}),children:n.jsx(t.component,{})})},t.path))}),n.jsx(Bt,{path:"docs",element:n.jsx(jU,{}),children:$b.filter(t=>!!t.path).map((t,e)=>n.jsx(Bt,{path:t.path,element:n.jsx(j.Suspense,{fallback:n.jsx(Dd,{}),children:n.jsx(t.component,{})})},t.path))}),n.jsx(Bt,{path:"pay",element:n.jsx(P8,{})}),n.jsx(Bt,{path:"*",element:n.jsx("div",{className:"p-32",children:"暂无内容"})})]})})}I4.createRoot(document.getElementById("root")).render(n.jsx(F5,{children:n.jsx(yU,{})}));
