function AS(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in n)){const a=Object.getOwnPropertyDescriptor(i,s);a&&Object.defineProperty(n,s,a.get?a:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function CS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Lh={exports:{}},xa={},Ph={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function LS(){if(Ov)return tt;Ov=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),m=Symbol.iterator;function g(D){return D===null||typeof D!="object"?null:(D=m&&D[m]||D["@@iterator"],typeof D=="function"?D:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,S={};function M(D,J,ve){this.props=D,this.context=J,this.refs=S,this.updater=ve||y}M.prototype.isReactComponent={},M.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},M.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function b(){}b.prototype=M.prototype;function w(D,J,ve){this.props=D,this.context=J,this.refs=S,this.updater=ve||y}var C=w.prototype=new b;C.constructor=w,_(C,M.prototype),C.isPureReactComponent=!0;var R=Array.isArray,A=Object.prototype.hasOwnProperty,T={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function U(D,J,ve){var K,Ie={},Pe=null,Ce=null;if(J!=null)for(K in J.ref!==void 0&&(Ce=J.ref),J.key!==void 0&&(Pe=""+J.key),J)A.call(J,K)&&!B.hasOwnProperty(K)&&(Ie[K]=J[K]);var be=arguments.length-2;if(be===1)Ie.children=ve;else if(1<be){for(var Be=Array(be),Ue=0;Ue<be;Ue++)Be[Ue]=arguments[Ue+2];Ie.children=Be}if(D&&D.defaultProps)for(K in be=D.defaultProps,be)Ie[K]===void 0&&(Ie[K]=be[K]);return{$$typeof:n,type:D,key:Pe,ref:Ce,props:Ie,_owner:T.current}}function q(D,J){return{$$typeof:n,type:D.type,key:J,ref:D.ref,props:D.props,_owner:D._owner}}function ee(D){return typeof D=="object"&&D!==null&&D.$$typeof===n}function ae(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ve){return J[ve]})}var oe=/\/+/g;function z(D,J){return typeof D=="object"&&D!==null&&D.key!=null?ae(""+D.key):J.toString(36)}function G(D,J,ve,K,Ie){var Pe=typeof D;(Pe==="undefined"||Pe==="boolean")&&(D=null);var Ce=!1;if(D===null)Ce=!0;else switch(Pe){case"string":case"number":Ce=!0;break;case"object":switch(D.$$typeof){case n:case e:Ce=!0}}if(Ce)return Ce=D,Ie=Ie(Ce),D=K===""?"."+z(Ce,0):K,R(Ie)?(ve="",D!=null&&(ve=D.replace(oe,"$&/")+"/"),G(Ie,J,ve,"",function(Ue){return Ue})):Ie!=null&&(ee(Ie)&&(Ie=q(Ie,ve+(!Ie.key||Ce&&Ce.key===Ie.key?"":(""+Ie.key).replace(oe,"$&/")+"/")+D)),J.push(Ie)),1;if(Ce=0,K=K===""?".":K+":",R(D))for(var be=0;be<D.length;be++){Pe=D[be];var Be=K+z(Pe,be);Ce+=G(Pe,J,ve,Be,Ie)}else if(Be=g(D),typeof Be=="function")for(D=Be.call(D),be=0;!(Pe=D.next()).done;)Pe=Pe.value,Be=K+z(Pe,be++),Ce+=G(Pe,J,ve,Be,Ie);else if(Pe==="object")throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return Ce}function W(D,J,ve){if(D==null)return D;var K=[],Ie=0;return G(D,K,"","",function(Pe){return J.call(ve,Pe,Ie++)}),K}function V(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(ve){(D._status===0||D._status===-1)&&(D._status=1,D._result=ve)},function(ve){(D._status===0||D._status===-1)&&(D._status=2,D._result=ve)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var ie={current:null},X={transition:null},ne={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:X,ReactCurrentOwner:T};function re(){throw Error("act(...) is not supported in production builds of React.")}return tt.Children={map:W,forEach:function(D,J,ve){W(D,function(){J.apply(this,arguments)},ve)},count:function(D){var J=0;return W(D,function(){J++}),J},toArray:function(D){return W(D,function(J){return J})||[]},only:function(D){if(!ee(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},tt.Component=M,tt.Fragment=t,tt.Profiler=s,tt.PureComponent=w,tt.StrictMode=i,tt.Suspense=d,tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,tt.act=re,tt.cloneElement=function(D,J,ve){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var K=_({},D.props),Ie=D.key,Pe=D.ref,Ce=D._owner;if(J!=null){if(J.ref!==void 0&&(Pe=J.ref,Ce=T.current),J.key!==void 0&&(Ie=""+J.key),D.type&&D.type.defaultProps)var be=D.type.defaultProps;for(Be in J)A.call(J,Be)&&!B.hasOwnProperty(Be)&&(K[Be]=J[Be]===void 0&&be!==void 0?be[Be]:J[Be])}var Be=arguments.length-2;if(Be===1)K.children=ve;else if(1<Be){be=Array(Be);for(var Ue=0;Ue<Be;Ue++)be[Ue]=arguments[Ue+2];K.children=be}return{$$typeof:n,type:D.type,key:Ie,ref:Pe,props:K,_owner:Ce}},tt.createContext=function(D){return D={$$typeof:l,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:a,_context:D},D.Consumer=D},tt.createElement=U,tt.createFactory=function(D){var J=U.bind(null,D);return J.type=D,J},tt.createRef=function(){return{current:null}},tt.forwardRef=function(D){return{$$typeof:u,render:D}},tt.isValidElement=ee,tt.lazy=function(D){return{$$typeof:p,_payload:{_status:-1,_result:D},_init:V}},tt.memo=function(D,J){return{$$typeof:h,type:D,compare:J===void 0?null:J}},tt.startTransition=function(D){var J=X.transition;X.transition={};try{D()}finally{X.transition=J}},tt.unstable_act=re,tt.useCallback=function(D,J){return ie.current.useCallback(D,J)},tt.useContext=function(D){return ie.current.useContext(D)},tt.useDebugValue=function(){},tt.useDeferredValue=function(D){return ie.current.useDeferredValue(D)},tt.useEffect=function(D,J){return ie.current.useEffect(D,J)},tt.useId=function(){return ie.current.useId()},tt.useImperativeHandle=function(D,J,ve){return ie.current.useImperativeHandle(D,J,ve)},tt.useInsertionEffect=function(D,J){return ie.current.useInsertionEffect(D,J)},tt.useLayoutEffect=function(D,J){return ie.current.useLayoutEffect(D,J)},tt.useMemo=function(D,J){return ie.current.useMemo(D,J)},tt.useReducer=function(D,J,ve){return ie.current.useReducer(D,J,ve)},tt.useRef=function(D){return ie.current.useRef(D)},tt.useState=function(D){return ie.current.useState(D)},tt.useSyncExternalStore=function(D,J,ve){return ie.current.useSyncExternalStore(D,J,ve)},tt.useTransition=function(){return ie.current.useTransition()},tt.version="18.3.1",tt}var Vv;function up(){return Vv||(Vv=1,Ph.exports=LS()),Ph.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv;function PS(){if(Uv)return xa;Uv=1;var n=up(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(u,d,h){var p,m={},g=null,y=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(y=d.ref);for(p in d)i.call(d,p)&&!a.hasOwnProperty(p)&&(m[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)m[p]===void 0&&(m[p]=d[p]);return{$$typeof:e,type:u,key:g,ref:y,props:m,_owner:s.current}}return xa.Fragment=t,xa.jsx=l,xa.jsxs=l,xa}var Hv;function RS(){return Hv||(Hv=1,Lh.exports=PS()),Lh.exports}var te=RS(),Y=up();const kS=CS(Y),DS=AS({__proto__:null,default:kS},[Y]);var Mc={},Rh={exports:{}},Tn={},kh={exports:{}},Dh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function IS(){return Gv||(Gv=1,(function(n){function e(X,ne){var re=X.length;X.push(ne);e:for(;0<re;){var D=re-1>>>1,J=X[D];if(0<s(J,ne))X[D]=ne,X[re]=J,re=D;else break e}}function t(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var ne=X[0],re=X.pop();if(re!==ne){X[0]=re;e:for(var D=0,J=X.length,ve=J>>>1;D<ve;){var K=2*(D+1)-1,Ie=X[K],Pe=K+1,Ce=X[Pe];if(0>s(Ie,re))Pe<J&&0>s(Ce,Ie)?(X[D]=Ce,X[Pe]=re,D=Pe):(X[D]=Ie,X[K]=re,D=K);else if(Pe<J&&0>s(Ce,re))X[D]=Ce,X[Pe]=re,D=Pe;else break e}}return ne}function s(X,ne){var re=X.sortIndex-ne.sortIndex;return re!==0?re:X.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var l=Date,u=l.now();n.unstable_now=function(){return l.now()-u}}var d=[],h=[],p=1,m=null,g=3,y=!1,_=!1,S=!1,M=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(X){for(var ne=t(h);ne!==null;){if(ne.callback===null)i(h);else if(ne.startTime<=X)i(h),ne.sortIndex=ne.expirationTime,e(d,ne);else break;ne=t(h)}}function R(X){if(S=!1,C(X),!_)if(t(d)!==null)_=!0,V(A);else{var ne=t(h);ne!==null&&ie(R,ne.startTime-X)}}function A(X,ne){_=!1,S&&(S=!1,b(U),U=-1),y=!0;var re=g;try{for(C(ne),m=t(d);m!==null&&(!(m.expirationTime>ne)||X&&!ae());){var D=m.callback;if(typeof D=="function"){m.callback=null,g=m.priorityLevel;var J=D(m.expirationTime<=ne);ne=n.unstable_now(),typeof J=="function"?m.callback=J:m===t(d)&&i(d),C(ne)}else i(d);m=t(d)}if(m!==null)var ve=!0;else{var K=t(h);K!==null&&ie(R,K.startTime-ne),ve=!1}return ve}finally{m=null,g=re,y=!1}}var T=!1,B=null,U=-1,q=5,ee=-1;function ae(){return!(n.unstable_now()-ee<q)}function oe(){if(B!==null){var X=n.unstable_now();ee=X;var ne=!0;try{ne=B(!0,X)}finally{ne?z():(T=!1,B=null)}}else T=!1}var z;if(typeof w=="function")z=function(){w(oe)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,W=G.port2;G.port1.onmessage=oe,z=function(){W.postMessage(null)}}else z=function(){M(oe,0)};function V(X){B=X,T||(T=!0,z())}function ie(X,ne){U=M(function(){X(n.unstable_now())},ne)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_continueExecution=function(){_||y||(_=!0,V(A))},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(X){switch(g){case 1:case 2:case 3:var ne=3;break;default:ne=g}var re=g;g=ne;try{return X()}finally{g=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(X,ne){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var re=g;g=X;try{return ne()}finally{g=re}},n.unstable_scheduleCallback=function(X,ne,re){var D=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?D+re:D):re=D,X){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=re+J,X={id:p++,callback:ne,priorityLevel:X,startTime:re,expirationTime:J,sortIndex:-1},re>D?(X.sortIndex=re,e(h,X),t(d)===null&&X===t(h)&&(S?(b(U),U=-1):S=!0,ie(R,re-D))):(X.sortIndex=J,e(d,X),_||y||(_=!0,V(A))),X},n.unstable_shouldYield=ae,n.unstable_wrapCallback=function(X){var ne=g;return function(){var re=g;g=ne;try{return X.apply(this,arguments)}finally{g=re}}}})(Dh)),Dh}var Wv;function NS(){return Wv||(Wv=1,kh.exports=IS()),kh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function FS(){if(jv)return Tn;jv=1;var n=up(),e=NS();function t(r){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+r,c=1;c<arguments.length;c++)o+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+r+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(r,o){l(r,o),l(r+"Capture",o)}function l(r,o){for(s[r]=o,r=0;r<o.length;r++)i.add(o[r])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function g(r){return d.call(m,r)?!0:d.call(p,r)?!1:h.test(r)?m[r]=!0:(p[r]=!0,!1)}function y(r,o,c,f){if(c!==null&&c.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return f?!1:c!==null?!c.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function _(r,o,c,f){if(o===null||typeof o>"u"||y(r,o,c,f))return!0;if(f)return!1;if(c!==null)switch(c.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function S(r,o,c,f,v,x,E){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=f,this.attributeNamespace=v,this.mustUseProperty=c,this.propertyName=r,this.type=o,this.sanitizeURL=x,this.removeEmptyString=E}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){M[r]=new S(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var o=r[0];M[o]=new S(o,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){M[r]=new S(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){M[r]=new S(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){M[r]=new S(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){M[r]=new S(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){M[r]=new S(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){M[r]=new S(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){M[r]=new S(r,5,!1,r.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function w(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var o=r.replace(b,w);M[o]=new S(o,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var o=r.replace(b,w);M[o]=new S(o,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var o=r.replace(b,w);M[o]=new S(o,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){M[r]=new S(r,1,!1,r.toLowerCase(),null,!1,!1)}),M.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){M[r]=new S(r,1,!1,r.toLowerCase(),null,!0,!0)});function C(r,o,c,f){var v=M.hasOwnProperty(o)?M[o]:null;(v!==null?v.type!==0:f||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(_(o,c,v,f)&&(c=null),f||v===null?g(o)&&(c===null?r.removeAttribute(o):r.setAttribute(o,""+c)):v.mustUseProperty?r[v.propertyName]=c===null?v.type===3?!1:"":c:(o=v.attributeName,f=v.attributeNamespace,c===null?r.removeAttribute(o):(v=v.type,c=v===3||v===4&&c===!0?"":""+c,f?r.setAttributeNS(f,o,c):r.setAttribute(o,c))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),T=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),ee=Symbol.for("react.provider"),ae=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),X=Symbol.iterator;function ne(r){return r===null||typeof r!="object"?null:(r=X&&r[X]||r["@@iterator"],typeof r=="function"?r:null)}var re=Object.assign,D;function J(r){if(D===void 0)try{throw Error()}catch(c){var o=c.stack.trim().match(/\n( *(at )?)/);D=o&&o[1]||""}return`
`+D+r}var ve=!1;function K(r,o){if(!r||ve)return"";ve=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(Q){var f=Q}Reflect.construct(r,[],o)}else{try{o.call()}catch(Q){f=Q}r.call(o.prototype)}else{try{throw Error()}catch(Q){f=Q}r()}}catch(Q){if(Q&&f&&typeof Q.stack=="string"){for(var v=Q.stack.split(`
`),x=f.stack.split(`
`),E=v.length-1,k=x.length-1;1<=E&&0<=k&&v[E]!==x[k];)k--;for(;1<=E&&0<=k;E--,k--)if(v[E]!==x[k]){if(E!==1||k!==1)do if(E--,k--,0>k||v[E]!==x[k]){var F=`
`+v[E].replace(" at new "," at ");return r.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",r.displayName)),F}while(1<=E&&0<=k);break}}}finally{ve=!1,Error.prepareStackTrace=c}return(r=r?r.displayName||r.name:"")?J(r):""}function Ie(r){switch(r.tag){case 5:return J(r.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return r=K(r.type,!1),r;case 11:return r=K(r.type.render,!1),r;case 1:return r=K(r.type,!0),r;default:return""}}function Pe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case B:return"Fragment";case T:return"Portal";case q:return"Profiler";case U:return"StrictMode";case z:return"Suspense";case G:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case ae:return(r.displayName||"Context")+".Consumer";case ee:return(r._context.displayName||"Context")+".Provider";case oe:var o=r.render;return r=r.displayName,r||(r=o.displayName||o.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case W:return o=r.displayName||null,o!==null?o:Pe(r.type)||"Memo";case V:o=r._payload,r=r._init;try{return Pe(r(o))}catch{}}return null}function Ce(r){var o=r.type;switch(r.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=o.render,r=r.displayName||r.name||"",o.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(o);case 8:return o===U?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function be(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Be(r){var o=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Ue(r){var o=Be(r)?"checked":"value",c=Object.getOwnPropertyDescriptor(r.constructor.prototype,o),f=""+r[o];if(!r.hasOwnProperty(o)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var v=c.get,x=c.set;return Object.defineProperty(r,o,{configurable:!0,get:function(){return v.call(this)},set:function(E){f=""+E,x.call(this,E)}}),Object.defineProperty(r,o,{enumerable:c.enumerable}),{getValue:function(){return f},setValue:function(E){f=""+E},stopTracking:function(){r._valueTracker=null,delete r[o]}}}}function Qe(r){r._valueTracker||(r._valueTracker=Ue(r))}function ge(r){if(!r)return!1;var o=r._valueTracker;if(!o)return!0;var c=o.getValue(),f="";return r&&(f=Be(r)?r.checked?"true":"false":r.value),r=f,r!==c?(o.setValue(r),!0):!1}function xe(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Se(r,o){var c=o.checked;return re({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??r._wrapperState.initialChecked})}function ze(r,o){var c=o.defaultValue==null?"":o.defaultValue,f=o.checked!=null?o.checked:o.defaultChecked;c=be(o.value!=null?o.value:c),r._wrapperState={initialChecked:f,initialValue:c,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Ae(r,o){o=o.checked,o!=null&&C(r,"checked",o,!1)}function I(r,o){Ae(r,o);var c=be(o.value),f=o.type;if(c!=null)f==="number"?(c===0&&r.value===""||r.value!=c)&&(r.value=""+c):r.value!==""+c&&(r.value=""+c);else if(f==="submit"||f==="reset"){r.removeAttribute("value");return}o.hasOwnProperty("value")?ce(r,o.type,c):o.hasOwnProperty("defaultValue")&&ce(r,o.type,be(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(r.defaultChecked=!!o.defaultChecked)}function P(r,o,c){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var f=o.type;if(!(f!=="submit"&&f!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+r._wrapperState.initialValue,c||o===r.value||(r.value=o),r.defaultValue=o}c=r.name,c!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,c!==""&&(r.name=c)}function ce(r,o,c){(o!=="number"||xe(r.ownerDocument)!==r)&&(c==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+c&&(r.defaultValue=""+c))}var ue=Array.isArray;function Me(r,o,c,f){if(r=r.options,o){o={};for(var v=0;v<c.length;v++)o["$"+c[v]]=!0;for(c=0;c<r.length;c++)v=o.hasOwnProperty("$"+r[c].value),r[c].selected!==v&&(r[c].selected=v),v&&f&&(r[c].defaultSelected=!0)}else{for(c=""+be(c),o=null,v=0;v<r.length;v++){if(r[v].value===c){r[v].selected=!0,f&&(r[v].defaultSelected=!0);return}o!==null||r[v].disabled||(o=r[v])}o!==null&&(o.selected=!0)}}function Ne(r,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},o,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function rt(r,o){var c=o.value;if(c==null){if(c=o.children,o=o.defaultValue,c!=null){if(o!=null)throw Error(t(92));if(ue(c)){if(1<c.length)throw Error(t(93));c=c[0]}o=c}o==null&&(o=""),c=o}r._wrapperState={initialValue:be(c)}}function qe(r,o){var c=be(o.value),f=be(o.defaultValue);c!=null&&(c=""+c,c!==r.value&&(r.value=c),o.defaultValue==null&&r.defaultValue!==c&&(r.defaultValue=c)),f!=null&&(r.defaultValue=""+f)}function H(r){var o=r.textContent;o===r._wrapperState.initialValue&&o!==""&&o!==null&&(r.value=o)}function ye(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(r,o){return r==null||r==="http://www.w3.org/1999/xhtml"?ye(o):r==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Oe,he=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,c,f,v){MSApp.execUnsafeLocalFunction(function(){return r(o,c,f,v)})}:r})(function(r,o){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=o;else{for(Oe=Oe||document.createElement("div"),Oe.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Oe.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;o.firstChild;)r.appendChild(o.firstChild)}});function We(r,o){if(o){var c=r.firstChild;if(c&&c===r.lastChild&&c.nodeType===3){c.nodeValue=o;return}}r.textContent=o}var st={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rt=["Webkit","ms","Moz","O"];Object.keys(st).forEach(function(r){Rt.forEach(function(o){o=o+r.charAt(0).toUpperCase()+r.substring(1),st[o]=st[r]})});function gi(r,o,c){return o==null||typeof o=="boolean"||o===""?"":c||typeof o!="number"||o===0||st.hasOwnProperty(r)&&st[r]?(""+o).trim():o+"px"}function _t(r,o){r=r.style;for(var c in o)if(o.hasOwnProperty(c)){var f=c.indexOf("--")===0,v=gi(c,o[c],f);c==="float"&&(c="cssFloat"),f?r.setProperty(c,v):r[c]=v}}var Kn=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pn(r,o){if(o){if(Kn[r]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function No(r,o){if(r.indexOf("-")===-1)return typeof o.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ps=null;function ms(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Qn=null,Ii=null,Ni=null;function Fo(r){if(r=ra(r)){if(typeof Qn!="function")throw Error(t(280));var o=r.stateNode;o&&(o=Ol(o),Qn(r.stateNode,r.type,o))}}function gs(r){Ii?Ni?Ni.push(r):Ni=[r]:Ii=r}function zo(){if(Ii){var r=Ii,o=Ni;if(Ni=Ii=null,Fo(r),o)for(r=0;r<o.length;r++)Fo(o[r])}}function Bo(r,o){return r(o)}function yl(){}var Oo=!1;function L(r,o,c){if(Oo)return r(o,c);Oo=!0;try{return Bo(r,o,c)}finally{Oo=!1,(Ii!==null||Ni!==null)&&(yl(),zo())}}function se(r,o){var c=r.stateNode;if(c===null)return null;var f=Ol(c);if(f===null)return null;c=f[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(r=r.type,f=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!f;break e;default:r=!1}if(r)return null;if(c&&typeof c!="function")throw Error(t(231,o,typeof c));return c}var Z=!1;if(u)try{var le={};Object.defineProperty(le,"passive",{get:function(){Z=!0}}),window.addEventListener("test",le,le),window.removeEventListener("test",le,le)}catch{Z=!1}function Ee(r,o,c,f,v,x,E,k,F){var Q=Array.prototype.slice.call(arguments,3);try{o.apply(c,Q)}catch(fe){this.onError(fe)}}var et=!1,Ye=null,$e=!1,ut=null,Ke={onError:function(r){et=!0,Ye=r}};function ot(r,o,c,f,v,x,E,k,F){et=!1,Ye=null,Ee.apply(Ke,arguments)}function Je(r,o,c,f,v,x,E,k,F){if(ot.apply(this,arguments),et){if(et){var Q=Ye;et=!1,Ye=null}else throw Error(t(198));$e||($e=!0,ut=Q)}}function nt(r){var o=r,c=r;if(r.alternate)for(;o.return;)o=o.return;else{r=o;do o=r,(o.flags&4098)!==0&&(c=o.return),r=o.return;while(r)}return o.tag===3?c:null}function Ln(r){if(r.tag===13){var o=r.memoizedState;if(o===null&&(r=r.alternate,r!==null&&(o=r.memoizedState)),o!==null)return o.dehydrated}return null}function Xt(r){if(nt(r)!==r)throw Error(t(188))}function Fi(r){var o=r.alternate;if(!o){if(o=nt(r),o===null)throw Error(t(188));return o!==r?null:r}for(var c=r,f=o;;){var v=c.return;if(v===null)break;var x=v.alternate;if(x===null){if(f=v.return,f!==null){c=f;continue}break}if(v.child===x.child){for(x=v.child;x;){if(x===c)return Xt(v),r;if(x===f)return Xt(v),o;x=x.sibling}throw Error(t(188))}if(c.return!==f.return)c=v,f=x;else{for(var E=!1,k=v.child;k;){if(k===c){E=!0,c=v,f=x;break}if(k===f){E=!0,f=v,c=x;break}k=k.sibling}if(!E){for(k=x.child;k;){if(k===c){E=!0,c=x,f=v;break}if(k===f){E=!0,f=x,c=v;break}k=k.sibling}if(!E)throw Error(t(189))}}if(c.alternate!==f)throw Error(t(190))}if(c.tag!==3)throw Error(t(188));return c.stateNode.current===c?r:o}function kt(r){return r=Fi(r),r!==null?vi(r):null}function vi(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var o=vi(r);if(o!==null)return o;r=r.sibling}return null}var Et=e.unstable_scheduleCallback,vs=e.unstable_cancelCallback,on=e.unstable_shouldYield,ei=e.unstable_requestPaint,Tt=e.unstable_now,V1=e.unstable_getCurrentPriorityLevel,$u=e.unstable_ImmediatePriority,pm=e.unstable_UserBlockingPriority,xl=e.unstable_NormalPriority,U1=e.unstable_LowPriority,mm=e.unstable_IdlePriority,wl=null,yi=null;function H1(r){if(yi&&typeof yi.onCommitFiberRoot=="function")try{yi.onCommitFiberRoot(wl,r,void 0,(r.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:j1,G1=Math.log,W1=Math.LN2;function j1(r){return r>>>=0,r===0?32:31-(G1(r)/W1|0)|0}var _l=64,bl=4194304;function Vo(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Sl(r,o){var c=r.pendingLanes;if(c===0)return 0;var f=0,v=r.suspendedLanes,x=r.pingedLanes,E=c&268435455;if(E!==0){var k=E&~v;k!==0?f=Vo(k):(x&=E,x!==0&&(f=Vo(x)))}else E=c&~v,E!==0?f=Vo(E):x!==0&&(f=Vo(x));if(f===0)return 0;if(o!==0&&o!==f&&(o&v)===0&&(v=f&-f,x=o&-o,v>=x||v===16&&(x&4194240)!==0))return o;if((f&4)!==0&&(f|=c&16),o=r.entangledLanes,o!==0)for(r=r.entanglements,o&=f;0<o;)c=31-ti(o),v=1<<c,f|=r[c],o&=~v;return f}function X1(r,o){switch(r){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y1(r,o){for(var c=r.suspendedLanes,f=r.pingedLanes,v=r.expirationTimes,x=r.pendingLanes;0<x;){var E=31-ti(x),k=1<<E,F=v[E];F===-1?((k&c)===0||(k&f)!==0)&&(v[E]=X1(k,o)):F<=o&&(r.expiredLanes|=k),x&=~k}}function Zu(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function gm(){var r=_l;return _l<<=1,(_l&4194240)===0&&(_l=64),r}function Ju(r){for(var o=[],c=0;31>c;c++)o.push(r);return o}function Uo(r,o,c){r.pendingLanes|=o,o!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,o=31-ti(o),r[o]=c}function q1(r,o){var c=r.pendingLanes&~o;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=o,r.mutableReadLanes&=o,r.entangledLanes&=o,o=r.entanglements;var f=r.eventTimes;for(r=r.expirationTimes;0<c;){var v=31-ti(c),x=1<<v;o[v]=0,f[v]=-1,r[v]=-1,c&=~x}}function Ku(r,o){var c=r.entangledLanes|=o;for(r=r.entanglements;c;){var f=31-ti(c),v=1<<f;v&o|r[f]&o&&(r[f]|=o),c&=~v}}var ht=0;function vm(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var ym,Qu,xm,wm,_m,ed=!1,Ml=[],Ki=null,Qi=null,er=null,Ho=new Map,Go=new Map,tr=[],$1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bm(r,o){switch(r){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Ho.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(o.pointerId)}}function Wo(r,o,c,f,v,x){return r===null||r.nativeEvent!==x?(r={blockedOn:o,domEventName:c,eventSystemFlags:f,nativeEvent:x,targetContainers:[v]},o!==null&&(o=ra(o),o!==null&&Qu(o)),r):(r.eventSystemFlags|=f,o=r.targetContainers,v!==null&&o.indexOf(v)===-1&&o.push(v),r)}function Z1(r,o,c,f,v){switch(o){case"focusin":return Ki=Wo(Ki,r,o,c,f,v),!0;case"dragenter":return Qi=Wo(Qi,r,o,c,f,v),!0;case"mouseover":return er=Wo(er,r,o,c,f,v),!0;case"pointerover":var x=v.pointerId;return Ho.set(x,Wo(Ho.get(x)||null,r,o,c,f,v)),!0;case"gotpointercapture":return x=v.pointerId,Go.set(x,Wo(Go.get(x)||null,r,o,c,f,v)),!0}return!1}function Sm(r){var o=Vr(r.target);if(o!==null){var c=nt(o);if(c!==null){if(o=c.tag,o===13){if(o=Ln(c),o!==null){r.blockedOn=o,_m(r.priority,function(){xm(c)});return}}else if(o===3&&c.stateNode.current.memoizedState.isDehydrated){r.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}r.blockedOn=null}function El(r){if(r.blockedOn!==null)return!1;for(var o=r.targetContainers;0<o.length;){var c=nd(r.domEventName,r.eventSystemFlags,o[0],r.nativeEvent);if(c===null){c=r.nativeEvent;var f=new c.constructor(c.type,c);ps=f,c.target.dispatchEvent(f),ps=null}else return o=ra(c),o!==null&&Qu(o),r.blockedOn=c,!1;o.shift()}return!0}function Mm(r,o,c){El(r)&&c.delete(o)}function J1(){ed=!1,Ki!==null&&El(Ki)&&(Ki=null),Qi!==null&&El(Qi)&&(Qi=null),er!==null&&El(er)&&(er=null),Ho.forEach(Mm),Go.forEach(Mm)}function jo(r,o){r.blockedOn===o&&(r.blockedOn=null,ed||(ed=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,J1)))}function Xo(r){function o(v){return jo(v,r)}if(0<Ml.length){jo(Ml[0],r);for(var c=1;c<Ml.length;c++){var f=Ml[c];f.blockedOn===r&&(f.blockedOn=null)}}for(Ki!==null&&jo(Ki,r),Qi!==null&&jo(Qi,r),er!==null&&jo(er,r),Ho.forEach(o),Go.forEach(o),c=0;c<tr.length;c++)f=tr[c],f.blockedOn===r&&(f.blockedOn=null);for(;0<tr.length&&(c=tr[0],c.blockedOn===null);)Sm(c),c.blockedOn===null&&tr.shift()}var ys=R.ReactCurrentBatchConfig,Tl=!0;function K1(r,o,c,f){var v=ht,x=ys.transition;ys.transition=null;try{ht=1,td(r,o,c,f)}finally{ht=v,ys.transition=x}}function Q1(r,o,c,f){var v=ht,x=ys.transition;ys.transition=null;try{ht=4,td(r,o,c,f)}finally{ht=v,ys.transition=x}}function td(r,o,c,f){if(Tl){var v=nd(r,o,c,f);if(v===null)xd(r,o,f,Al,c),bm(r,f);else if(Z1(v,r,o,c,f))f.stopPropagation();else if(bm(r,f),o&4&&-1<$1.indexOf(r)){for(;v!==null;){var x=ra(v);if(x!==null&&ym(x),x=nd(r,o,c,f),x===null&&xd(r,o,f,Al,c),x===v)break;v=x}v!==null&&f.stopPropagation()}else xd(r,o,f,null,c)}}var Al=null;function nd(r,o,c,f){if(Al=null,r=ms(f),r=Vr(r),r!==null)if(o=nt(r),o===null)r=null;else if(c=o.tag,c===13){if(r=Ln(o),r!==null)return r;r=null}else if(c===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;r=null}else o!==r&&(r=null);return Al=r,null}function Em(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(V1()){case $u:return 1;case pm:return 4;case xl:case U1:return 16;case mm:return 536870912;default:return 16}default:return 16}}var nr=null,id=null,Cl=null;function Tm(){if(Cl)return Cl;var r,o=id,c=o.length,f,v="value"in nr?nr.value:nr.textContent,x=v.length;for(r=0;r<c&&o[r]===v[r];r++);var E=c-r;for(f=1;f<=E&&o[c-f]===v[x-f];f++);return Cl=v.slice(r,1<f?1-f:void 0)}function Ll(r){var o=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&o===13&&(r=13)):r=o,r===10&&(r=13),32<=r||r===13?r:0}function Pl(){return!0}function Am(){return!1}function Pn(r){function o(c,f,v,x,E){this._reactName=c,this._targetInst=v,this.type=f,this.nativeEvent=x,this.target=E,this.currentTarget=null;for(var k in r)r.hasOwnProperty(k)&&(c=r[k],this[k]=c?c(x):x[k]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Pl:Am,this.isPropagationStopped=Am,this}return re(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),o}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rd=Pn(xs),Yo=re({},xs,{view:0,detail:0}),eb=Pn(Yo),sd,od,qo,Rl=re({},Yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ld,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==qo&&(qo&&r.type==="mousemove"?(sd=r.screenX-qo.screenX,od=r.screenY-qo.screenY):od=sd=0,qo=r),sd)},movementY:function(r){return"movementY"in r?r.movementY:od}}),Cm=Pn(Rl),tb=re({},Rl,{dataTransfer:0}),nb=Pn(tb),ib=re({},Yo,{relatedTarget:0}),ad=Pn(ib),rb=re({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),sb=Pn(rb),ob=re({},xs,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),ab=Pn(ob),lb=re({},xs,{data:0}),Lm=Pn(lb),cb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ub={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},db={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hb(r){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(r):(r=db[r])?!!o[r]:!1}function ld(){return hb}var fb=re({},Yo,{key:function(r){if(r.key){var o=cb[r.key]||r.key;if(o!=="Unidentified")return o}return r.type==="keypress"?(r=Ll(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?ub[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ld,charCode:function(r){return r.type==="keypress"?Ll(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ll(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),pb=Pn(fb),mb=re({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pm=Pn(mb),gb=re({},Yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ld}),vb=Pn(gb),yb=re({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),xb=Pn(yb),wb=re({},Rl,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),_b=Pn(wb),bb=[9,13,27,32],cd=u&&"CompositionEvent"in window,$o=null;u&&"documentMode"in document&&($o=document.documentMode);var Sb=u&&"TextEvent"in window&&!$o,Rm=u&&(!cd||$o&&8<$o&&11>=$o),km=" ",Dm=!1;function Im(r,o){switch(r){case"keyup":return bb.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nm(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ws=!1;function Mb(r,o){switch(r){case"compositionend":return Nm(o);case"keypress":return o.which!==32?null:(Dm=!0,km);case"textInput":return r=o.data,r===km&&Dm?null:r;default:return null}}function Eb(r,o){if(ws)return r==="compositionend"||!cd&&Im(r,o)?(r=Tm(),Cl=id=nr=null,ws=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Rm&&o.locale!=="ko"?null:o.data;default:return null}}var Tb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o==="input"?!!Tb[r.type]:o==="textarea"}function zm(r,o,c,f){gs(f),o=Fl(o,"onChange"),0<o.length&&(c=new rd("onChange","change",null,c,f),r.push({event:c,listeners:o}))}var Zo=null,Jo=null;function Ab(r){tg(r,0)}function kl(r){var o=Es(r);if(ge(o))return r}function Cb(r,o){if(r==="change")return o}var Bm=!1;if(u){var ud;if(u){var dd="oninput"in document;if(!dd){var Om=document.createElement("div");Om.setAttribute("oninput","return;"),dd=typeof Om.oninput=="function"}ud=dd}else ud=!1;Bm=ud&&(!document.documentMode||9<document.documentMode)}function Vm(){Zo&&(Zo.detachEvent("onpropertychange",Um),Jo=Zo=null)}function Um(r){if(r.propertyName==="value"&&kl(Jo)){var o=[];zm(o,Jo,r,ms(r)),L(Ab,o)}}function Lb(r,o,c){r==="focusin"?(Vm(),Zo=o,Jo=c,Zo.attachEvent("onpropertychange",Um)):r==="focusout"&&Vm()}function Pb(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return kl(Jo)}function Rb(r,o){if(r==="click")return kl(o)}function kb(r,o){if(r==="input"||r==="change")return kl(o)}function Db(r,o){return r===o&&(r!==0||1/r===1/o)||r!==r&&o!==o}var ni=typeof Object.is=="function"?Object.is:Db;function Ko(r,o){if(ni(r,o))return!0;if(typeof r!="object"||r===null||typeof o!="object"||o===null)return!1;var c=Object.keys(r),f=Object.keys(o);if(c.length!==f.length)return!1;for(f=0;f<c.length;f++){var v=c[f];if(!d.call(o,v)||!ni(r[v],o[v]))return!1}return!0}function Hm(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Gm(r,o){var c=Hm(r);r=0;for(var f;c;){if(c.nodeType===3){if(f=r+c.textContent.length,r<=o&&f>=o)return{node:c,offset:o-r};r=f}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=Hm(c)}}function Wm(r,o){return r&&o?r===o?!0:r&&r.nodeType===3?!1:o&&o.nodeType===3?Wm(r,o.parentNode):"contains"in r?r.contains(o):r.compareDocumentPosition?!!(r.compareDocumentPosition(o)&16):!1:!1}function jm(){for(var r=window,o=xe();o instanceof r.HTMLIFrameElement;){try{var c=typeof o.contentWindow.location.href=="string"}catch{c=!1}if(c)r=o.contentWindow;else break;o=xe(r.document)}return o}function hd(r){var o=r&&r.nodeName&&r.nodeName.toLowerCase();return o&&(o==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||o==="textarea"||r.contentEditable==="true")}function Ib(r){var o=jm(),c=r.focusedElem,f=r.selectionRange;if(o!==c&&c&&c.ownerDocument&&Wm(c.ownerDocument.documentElement,c)){if(f!==null&&hd(c)){if(o=f.start,r=f.end,r===void 0&&(r=o),"selectionStart"in c)c.selectionStart=o,c.selectionEnd=Math.min(r,c.value.length);else if(r=(o=c.ownerDocument||document)&&o.defaultView||window,r.getSelection){r=r.getSelection();var v=c.textContent.length,x=Math.min(f.start,v);f=f.end===void 0?x:Math.min(f.end,v),!r.extend&&x>f&&(v=f,f=x,x=v),v=Gm(c,x);var E=Gm(c,f);v&&E&&(r.rangeCount!==1||r.anchorNode!==v.node||r.anchorOffset!==v.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(o=o.createRange(),o.setStart(v.node,v.offset),r.removeAllRanges(),x>f?(r.addRange(o),r.extend(E.node,E.offset)):(o.setEnd(E.node,E.offset),r.addRange(o)))}}for(o=[],r=c;r=r.parentNode;)r.nodeType===1&&o.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<o.length;c++)r=o[c],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Nb=u&&"documentMode"in document&&11>=document.documentMode,_s=null,fd=null,Qo=null,pd=!1;function Xm(r,o,c){var f=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;pd||_s==null||_s!==xe(f)||(f=_s,"selectionStart"in f&&hd(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Qo&&Ko(Qo,f)||(Qo=f,f=Fl(fd,"onSelect"),0<f.length&&(o=new rd("onSelect","select",null,o,c),r.push({event:o,listeners:f}),o.target=_s)))}function Dl(r,o){var c={};return c[r.toLowerCase()]=o.toLowerCase(),c["Webkit"+r]="webkit"+o,c["Moz"+r]="moz"+o,c}var bs={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionend:Dl("Transition","TransitionEnd")},md={},Ym={};u&&(Ym=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Il(r){if(md[r])return md[r];if(!bs[r])return r;var o=bs[r],c;for(c in o)if(o.hasOwnProperty(c)&&c in Ym)return md[r]=o[c];return r}var qm=Il("animationend"),$m=Il("animationiteration"),Zm=Il("animationstart"),Jm=Il("transitionend"),Km=new Map,Qm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(r,o){Km.set(r,o),a(o,[r])}for(var gd=0;gd<Qm.length;gd++){var vd=Qm[gd],Fb=vd.toLowerCase(),zb=vd[0].toUpperCase()+vd.slice(1);ir(Fb,"on"+zb)}ir(qm,"onAnimationEnd"),ir($m,"onAnimationIteration"),ir(Zm,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(Jm,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bb=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function eg(r,o,c){var f=r.type||"unknown-event";r.currentTarget=c,Je(f,o,void 0,r),r.currentTarget=null}function tg(r,o){o=(o&4)!==0;for(var c=0;c<r.length;c++){var f=r[c],v=f.event;f=f.listeners;e:{var x=void 0;if(o)for(var E=f.length-1;0<=E;E--){var k=f[E],F=k.instance,Q=k.currentTarget;if(k=k.listener,F!==x&&v.isPropagationStopped())break e;eg(v,k,Q),x=F}else for(E=0;E<f.length;E++){if(k=f[E],F=k.instance,Q=k.currentTarget,k=k.listener,F!==x&&v.isPropagationStopped())break e;eg(v,k,Q),x=F}}}if($e)throw r=ut,$e=!1,ut=null,r}function xt(r,o){var c=o[Ed];c===void 0&&(c=o[Ed]=new Set);var f=r+"__bubble";c.has(f)||(ng(o,r,2,!1),c.add(f))}function yd(r,o,c){var f=0;o&&(f|=4),ng(c,r,f,o)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function ta(r){if(!r[Nl]){r[Nl]=!0,i.forEach(function(c){c!=="selectionchange"&&(Bb.has(c)||yd(c,!1,r),yd(c,!0,r))});var o=r.nodeType===9?r:r.ownerDocument;o===null||o[Nl]||(o[Nl]=!0,yd("selectionchange",!1,o))}}function ng(r,o,c,f){switch(Em(o)){case 1:var v=K1;break;case 4:v=Q1;break;default:v=td}c=v.bind(null,o,c,r),v=void 0,!Z||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(v=!0),f?v!==void 0?r.addEventListener(o,c,{capture:!0,passive:v}):r.addEventListener(o,c,!0):v!==void 0?r.addEventListener(o,c,{passive:v}):r.addEventListener(o,c,!1)}function xd(r,o,c,f,v){var x=f;if((o&1)===0&&(o&2)===0&&f!==null)e:for(;;){if(f===null)return;var E=f.tag;if(E===3||E===4){var k=f.stateNode.containerInfo;if(k===v||k.nodeType===8&&k.parentNode===v)break;if(E===4)for(E=f.return;E!==null;){var F=E.tag;if((F===3||F===4)&&(F=E.stateNode.containerInfo,F===v||F.nodeType===8&&F.parentNode===v))return;E=E.return}for(;k!==null;){if(E=Vr(k),E===null)return;if(F=E.tag,F===5||F===6){f=x=E;continue e}k=k.parentNode}}f=f.return}L(function(){var Q=x,fe=ms(c),pe=[];e:{var de=Km.get(r);if(de!==void 0){var Le=rd,ke=r;switch(r){case"keypress":if(Ll(c)===0)break e;case"keydown":case"keyup":Le=pb;break;case"focusin":ke="focus",Le=ad;break;case"focusout":ke="blur",Le=ad;break;case"beforeblur":case"afterblur":Le=ad;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=nb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=vb;break;case qm:case $m:case Zm:Le=sb;break;case Jm:Le=xb;break;case"scroll":Le=eb;break;case"wheel":Le=_b;break;case"copy":case"cut":case"paste":Le=ab;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Pm}var De=(o&4)!==0,zt=!De&&r==="scroll",j=De?de!==null?de+"Capture":null:de;De=[];for(var O=Q,$;O!==null;){$=O;var me=$.stateNode;if($.tag===5&&me!==null&&($=me,j!==null&&(me=se(O,j),me!=null&&De.push(na(O,me,$)))),zt)break;O=O.return}0<De.length&&(de=new Le(de,ke,null,c,fe),pe.push({event:de,listeners:De}))}}if((o&7)===0){e:{if(de=r==="mouseover"||r==="pointerover",Le=r==="mouseout"||r==="pointerout",de&&c!==ps&&(ke=c.relatedTarget||c.fromElement)&&(Vr(ke)||ke[zi]))break e;if((Le||de)&&(de=fe.window===fe?fe:(de=fe.ownerDocument)?de.defaultView||de.parentWindow:window,Le?(ke=c.relatedTarget||c.toElement,Le=Q,ke=ke?Vr(ke):null,ke!==null&&(zt=nt(ke),ke!==zt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Le=null,ke=Q),Le!==ke)){if(De=Cm,me="onMouseLeave",j="onMouseEnter",O="mouse",(r==="pointerout"||r==="pointerover")&&(De=Pm,me="onPointerLeave",j="onPointerEnter",O="pointer"),zt=Le==null?de:Es(Le),$=ke==null?de:Es(ke),de=new De(me,O+"leave",Le,c,fe),de.target=zt,de.relatedTarget=$,me=null,Vr(fe)===Q&&(De=new De(j,O+"enter",ke,c,fe),De.target=$,De.relatedTarget=zt,me=De),zt=me,Le&&ke)t:{for(De=Le,j=ke,O=0,$=De;$;$=Ss($))O++;for($=0,me=j;me;me=Ss(me))$++;for(;0<O-$;)De=Ss(De),O--;for(;0<$-O;)j=Ss(j),$--;for(;O--;){if(De===j||j!==null&&De===j.alternate)break t;De=Ss(De),j=Ss(j)}De=null}else De=null;Le!==null&&ig(pe,de,Le,De,!1),ke!==null&&zt!==null&&ig(pe,zt,ke,De,!0)}}e:{if(de=Q?Es(Q):window,Le=de.nodeName&&de.nodeName.toLowerCase(),Le==="select"||Le==="input"&&de.type==="file")var Fe=Cb;else if(Fm(de))if(Bm)Fe=kb;else{Fe=Pb;var He=Lb}else(Le=de.nodeName)&&Le.toLowerCase()==="input"&&(de.type==="checkbox"||de.type==="radio")&&(Fe=Rb);if(Fe&&(Fe=Fe(r,Q))){zm(pe,Fe,c,fe);break e}He&&He(r,de,Q),r==="focusout"&&(He=de._wrapperState)&&He.controlled&&de.type==="number"&&ce(de,"number",de.value)}switch(He=Q?Es(Q):window,r){case"focusin":(Fm(He)||He.contentEditable==="true")&&(_s=He,fd=Q,Qo=null);break;case"focusout":Qo=fd=_s=null;break;case"mousedown":pd=!0;break;case"contextmenu":case"mouseup":case"dragend":pd=!1,Xm(pe,c,fe);break;case"selectionchange":if(Nb)break;case"keydown":case"keyup":Xm(pe,c,fe)}var Ge;if(cd)e:{switch(r){case"compositionstart":var Ze="onCompositionStart";break e;case"compositionend":Ze="onCompositionEnd";break e;case"compositionupdate":Ze="onCompositionUpdate";break e}Ze=void 0}else ws?Im(r,c)&&(Ze="onCompositionEnd"):r==="keydown"&&c.keyCode===229&&(Ze="onCompositionStart");Ze&&(Rm&&c.locale!=="ko"&&(ws||Ze!=="onCompositionStart"?Ze==="onCompositionEnd"&&ws&&(Ge=Tm()):(nr=fe,id="value"in nr?nr.value:nr.textContent,ws=!0)),He=Fl(Q,Ze),0<He.length&&(Ze=new Lm(Ze,r,null,c,fe),pe.push({event:Ze,listeners:He}),Ge?Ze.data=Ge:(Ge=Nm(c),Ge!==null&&(Ze.data=Ge)))),(Ge=Sb?Mb(r,c):Eb(r,c))&&(Q=Fl(Q,"onBeforeInput"),0<Q.length&&(fe=new Lm("onBeforeInput","beforeinput",null,c,fe),pe.push({event:fe,listeners:Q}),fe.data=Ge))}tg(pe,o)})}function na(r,o,c){return{instance:r,listener:o,currentTarget:c}}function Fl(r,o){for(var c=o+"Capture",f=[];r!==null;){var v=r,x=v.stateNode;v.tag===5&&x!==null&&(v=x,x=se(r,c),x!=null&&f.unshift(na(r,x,v)),x=se(r,o),x!=null&&f.push(na(r,x,v))),r=r.return}return f}function Ss(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function ig(r,o,c,f,v){for(var x=o._reactName,E=[];c!==null&&c!==f;){var k=c,F=k.alternate,Q=k.stateNode;if(F!==null&&F===f)break;k.tag===5&&Q!==null&&(k=Q,v?(F=se(c,x),F!=null&&E.unshift(na(c,F,k))):v||(F=se(c,x),F!=null&&E.push(na(c,F,k)))),c=c.return}E.length!==0&&r.push({event:o,listeners:E})}var Ob=/\r\n?/g,Vb=/\u0000|\uFFFD/g;function rg(r){return(typeof r=="string"?r:""+r).replace(Ob,`
`).replace(Vb,"")}function zl(r,o,c){if(o=rg(o),rg(r)!==o&&c)throw Error(t(425))}function Bl(){}var wd=null,_d=null;function bd(r,o){return r==="textarea"||r==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Sd=typeof setTimeout=="function"?setTimeout:void 0,Ub=typeof clearTimeout=="function"?clearTimeout:void 0,sg=typeof Promise=="function"?Promise:void 0,Hb=typeof queueMicrotask=="function"?queueMicrotask:typeof sg<"u"?function(r){return sg.resolve(null).then(r).catch(Gb)}:Sd;function Gb(r){setTimeout(function(){throw r})}function Md(r,o){var c=o,f=0;do{var v=c.nextSibling;if(r.removeChild(c),v&&v.nodeType===8)if(c=v.data,c==="/$"){if(f===0){r.removeChild(v),Xo(o);return}f--}else c!=="$"&&c!=="$?"&&c!=="$!"||f++;c=v}while(c);Xo(o)}function rr(r){for(;r!=null;r=r.nextSibling){var o=r.nodeType;if(o===1||o===3)break;if(o===8){if(o=r.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return r}function og(r){r=r.previousSibling;for(var o=0;r;){if(r.nodeType===8){var c=r.data;if(c==="$"||c==="$!"||c==="$?"){if(o===0)return r;o--}else c==="/$"&&o++}r=r.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),xi="__reactFiber$"+Ms,ia="__reactProps$"+Ms,zi="__reactContainer$"+Ms,Ed="__reactEvents$"+Ms,Wb="__reactListeners$"+Ms,jb="__reactHandles$"+Ms;function Vr(r){var o=r[xi];if(o)return o;for(var c=r.parentNode;c;){if(o=c[zi]||c[xi]){if(c=o.alternate,o.child!==null||c!==null&&c.child!==null)for(r=og(r);r!==null;){if(c=r[xi])return c;r=og(r)}return o}r=c,c=r.parentNode}return null}function ra(r){return r=r[xi]||r[zi],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Es(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Ol(r){return r[ia]||null}var Td=[],Ts=-1;function sr(r){return{current:r}}function wt(r){0>Ts||(r.current=Td[Ts],Td[Ts]=null,Ts--)}function vt(r,o){Ts++,Td[Ts]=r.current,r.current=o}var or={},an=sr(or),_n=sr(!1),Ur=or;function As(r,o){var c=r.type.contextTypes;if(!c)return or;var f=r.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===o)return f.__reactInternalMemoizedMaskedChildContext;var v={},x;for(x in c)v[x]=o[x];return f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=o,r.__reactInternalMemoizedMaskedChildContext=v),v}function bn(r){return r=r.childContextTypes,r!=null}function Vl(){wt(_n),wt(an)}function ag(r,o,c){if(an.current!==or)throw Error(t(168));vt(an,o),vt(_n,c)}function lg(r,o,c){var f=r.stateNode;if(o=o.childContextTypes,typeof f.getChildContext!="function")return c;f=f.getChildContext();for(var v in f)if(!(v in o))throw Error(t(108,Ce(r)||"Unknown",v));return re({},c,f)}function Ul(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||or,Ur=an.current,vt(an,r),vt(_n,_n.current),!0}function cg(r,o,c){var f=r.stateNode;if(!f)throw Error(t(169));c?(r=lg(r,o,Ur),f.__reactInternalMemoizedMergedChildContext=r,wt(_n),wt(an),vt(an,r)):wt(_n),vt(_n,c)}var Bi=null,Hl=!1,Ad=!1;function ug(r){Bi===null?Bi=[r]:Bi.push(r)}function Xb(r){Hl=!0,ug(r)}function ar(){if(!Ad&&Bi!==null){Ad=!0;var r=0,o=ht;try{var c=Bi;for(ht=1;r<c.length;r++){var f=c[r];do f=f(!0);while(f!==null)}Bi=null,Hl=!1}catch(v){throw Bi!==null&&(Bi=Bi.slice(r+1)),Et($u,ar),v}finally{ht=o,Ad=!1}}return null}var Cs=[],Ls=0,Gl=null,Wl=0,On=[],Vn=0,Hr=null,Oi=1,Vi="";function Gr(r,o){Cs[Ls++]=Wl,Cs[Ls++]=Gl,Gl=r,Wl=o}function dg(r,o,c){On[Vn++]=Oi,On[Vn++]=Vi,On[Vn++]=Hr,Hr=r;var f=Oi;r=Vi;var v=32-ti(f)-1;f&=~(1<<v),c+=1;var x=32-ti(o)+v;if(30<x){var E=v-v%5;x=(f&(1<<E)-1).toString(32),f>>=E,v-=E,Oi=1<<32-ti(o)+v|c<<v|f,Vi=x+r}else Oi=1<<x|c<<v|f,Vi=r}function Cd(r){r.return!==null&&(Gr(r,1),dg(r,1,0))}function Ld(r){for(;r===Gl;)Gl=Cs[--Ls],Cs[Ls]=null,Wl=Cs[--Ls],Cs[Ls]=null;for(;r===Hr;)Hr=On[--Vn],On[Vn]=null,Vi=On[--Vn],On[Vn]=null,Oi=On[--Vn],On[Vn]=null}var Rn=null,kn=null,bt=!1,ii=null;function hg(r,o){var c=Wn(5,null,null,0);c.elementType="DELETED",c.stateNode=o,c.return=r,o=r.deletions,o===null?(r.deletions=[c],r.flags|=16):o.push(c)}function fg(r,o){switch(r.tag){case 5:var c=r.type;return o=o.nodeType!==1||c.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(r.stateNode=o,Rn=r,kn=rr(o.firstChild),!0):!1;case 6:return o=r.pendingProps===""||o.nodeType!==3?null:o,o!==null?(r.stateNode=o,Rn=r,kn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(c=Hr!==null?{id:Oi,overflow:Vi}:null,r.memoizedState={dehydrated:o,treeContext:c,retryLane:1073741824},c=Wn(18,null,null,0),c.stateNode=o,c.return=r,r.child=c,Rn=r,kn=null,!0):!1;default:return!1}}function Pd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Rd(r){if(bt){var o=kn;if(o){var c=o;if(!fg(r,o)){if(Pd(r))throw Error(t(418));o=rr(c.nextSibling);var f=Rn;o&&fg(r,o)?hg(f,c):(r.flags=r.flags&-4097|2,bt=!1,Rn=r)}}else{if(Pd(r))throw Error(t(418));r.flags=r.flags&-4097|2,bt=!1,Rn=r}}}function pg(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Rn=r}function jl(r){if(r!==Rn)return!1;if(!bt)return pg(r),bt=!0,!1;var o;if((o=r.tag!==3)&&!(o=r.tag!==5)&&(o=r.type,o=o!=="head"&&o!=="body"&&!bd(r.type,r.memoizedProps)),o&&(o=kn)){if(Pd(r))throw mg(),Error(t(418));for(;o;)hg(r,o),o=rr(o.nextSibling)}if(pg(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,o=0;r;){if(r.nodeType===8){var c=r.data;if(c==="/$"){if(o===0){kn=rr(r.nextSibling);break e}o--}else c!=="$"&&c!=="$!"&&c!=="$?"||o++}r=r.nextSibling}kn=null}}else kn=Rn?rr(r.stateNode.nextSibling):null;return!0}function mg(){for(var r=kn;r;)r=rr(r.nextSibling)}function Ps(){kn=Rn=null,bt=!1}function kd(r){ii===null?ii=[r]:ii.push(r)}var Yb=R.ReactCurrentBatchConfig;function sa(r,o,c){if(r=c.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(t(309));var f=c.stateNode}if(!f)throw Error(t(147,r));var v=f,x=""+r;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===x?o.ref:(o=function(E){var k=v.refs;E===null?delete k[x]:k[x]=E},o._stringRef=x,o)}if(typeof r!="string")throw Error(t(284));if(!c._owner)throw Error(t(290,r))}return r}function Xl(r,o){throw r=Object.prototype.toString.call(o),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":r))}function gg(r){var o=r._init;return o(r._payload)}function vg(r){function o(j,O){if(r){var $=j.deletions;$===null?(j.deletions=[O],j.flags|=16):$.push(O)}}function c(j,O){if(!r)return null;for(;O!==null;)o(j,O),O=O.sibling;return null}function f(j,O){for(j=new Map;O!==null;)O.key!==null?j.set(O.key,O):j.set(O.index,O),O=O.sibling;return j}function v(j,O){return j=mr(j,O),j.index=0,j.sibling=null,j}function x(j,O,$){return j.index=$,r?($=j.alternate,$!==null?($=$.index,$<O?(j.flags|=2,O):$):(j.flags|=2,O)):(j.flags|=1048576,O)}function E(j){return r&&j.alternate===null&&(j.flags|=2),j}function k(j,O,$,me){return O===null||O.tag!==6?(O=Sh($,j.mode,me),O.return=j,O):(O=v(O,$),O.return=j,O)}function F(j,O,$,me){var Fe=$.type;return Fe===B?fe(j,O,$.props.children,me,$.key):O!==null&&(O.elementType===Fe||typeof Fe=="object"&&Fe!==null&&Fe.$$typeof===V&&gg(Fe)===O.type)?(me=v(O,$.props),me.ref=sa(j,O,$),me.return=j,me):(me=gc($.type,$.key,$.props,null,j.mode,me),me.ref=sa(j,O,$),me.return=j,me)}function Q(j,O,$,me){return O===null||O.tag!==4||O.stateNode.containerInfo!==$.containerInfo||O.stateNode.implementation!==$.implementation?(O=Mh($,j.mode,me),O.return=j,O):(O=v(O,$.children||[]),O.return=j,O)}function fe(j,O,$,me,Fe){return O===null||O.tag!==7?(O=Jr($,j.mode,me,Fe),O.return=j,O):(O=v(O,$),O.return=j,O)}function pe(j,O,$){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Sh(""+O,j.mode,$),O.return=j,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case A:return $=gc(O.type,O.key,O.props,null,j.mode,$),$.ref=sa(j,null,O),$.return=j,$;case T:return O=Mh(O,j.mode,$),O.return=j,O;case V:var me=O._init;return pe(j,me(O._payload),$)}if(ue(O)||ne(O))return O=Jr(O,j.mode,$,null),O.return=j,O;Xl(j,O)}return null}function de(j,O,$,me){var Fe=O!==null?O.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Fe!==null?null:k(j,O,""+$,me);if(typeof $=="object"&&$!==null){switch($.$$typeof){case A:return $.key===Fe?F(j,O,$,me):null;case T:return $.key===Fe?Q(j,O,$,me):null;case V:return Fe=$._init,de(j,O,Fe($._payload),me)}if(ue($)||ne($))return Fe!==null?null:fe(j,O,$,me,null);Xl(j,$)}return null}function Le(j,O,$,me,Fe){if(typeof me=="string"&&me!==""||typeof me=="number")return j=j.get($)||null,k(O,j,""+me,Fe);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case A:return j=j.get(me.key===null?$:me.key)||null,F(O,j,me,Fe);case T:return j=j.get(me.key===null?$:me.key)||null,Q(O,j,me,Fe);case V:var He=me._init;return Le(j,O,$,He(me._payload),Fe)}if(ue(me)||ne(me))return j=j.get($)||null,fe(O,j,me,Fe,null);Xl(O,me)}return null}function ke(j,O,$,me){for(var Fe=null,He=null,Ge=O,Ze=O=0,$t=null;Ge!==null&&Ze<$.length;Ze++){Ge.index>Ze?($t=Ge,Ge=null):$t=Ge.sibling;var lt=de(j,Ge,$[Ze],me);if(lt===null){Ge===null&&(Ge=$t);break}r&&Ge&&lt.alternate===null&&o(j,Ge),O=x(lt,O,Ze),He===null?Fe=lt:He.sibling=lt,He=lt,Ge=$t}if(Ze===$.length)return c(j,Ge),bt&&Gr(j,Ze),Fe;if(Ge===null){for(;Ze<$.length;Ze++)Ge=pe(j,$[Ze],me),Ge!==null&&(O=x(Ge,O,Ze),He===null?Fe=Ge:He.sibling=Ge,He=Ge);return bt&&Gr(j,Ze),Fe}for(Ge=f(j,Ge);Ze<$.length;Ze++)$t=Le(Ge,j,Ze,$[Ze],me),$t!==null&&(r&&$t.alternate!==null&&Ge.delete($t.key===null?Ze:$t.key),O=x($t,O,Ze),He===null?Fe=$t:He.sibling=$t,He=$t);return r&&Ge.forEach(function(gr){return o(j,gr)}),bt&&Gr(j,Ze),Fe}function De(j,O,$,me){var Fe=ne($);if(typeof Fe!="function")throw Error(t(150));if($=Fe.call($),$==null)throw Error(t(151));for(var He=Fe=null,Ge=O,Ze=O=0,$t=null,lt=$.next();Ge!==null&&!lt.done;Ze++,lt=$.next()){Ge.index>Ze?($t=Ge,Ge=null):$t=Ge.sibling;var gr=de(j,Ge,lt.value,me);if(gr===null){Ge===null&&(Ge=$t);break}r&&Ge&&gr.alternate===null&&o(j,Ge),O=x(gr,O,Ze),He===null?Fe=gr:He.sibling=gr,He=gr,Ge=$t}if(lt.done)return c(j,Ge),bt&&Gr(j,Ze),Fe;if(Ge===null){for(;!lt.done;Ze++,lt=$.next())lt=pe(j,lt.value,me),lt!==null&&(O=x(lt,O,Ze),He===null?Fe=lt:He.sibling=lt,He=lt);return bt&&Gr(j,Ze),Fe}for(Ge=f(j,Ge);!lt.done;Ze++,lt=$.next())lt=Le(Ge,j,Ze,lt.value,me),lt!==null&&(r&&lt.alternate!==null&&Ge.delete(lt.key===null?Ze:lt.key),O=x(lt,O,Ze),He===null?Fe=lt:He.sibling=lt,He=lt);return r&&Ge.forEach(function(TS){return o(j,TS)}),bt&&Gr(j,Ze),Fe}function zt(j,O,$,me){if(typeof $=="object"&&$!==null&&$.type===B&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case A:e:{for(var Fe=$.key,He=O;He!==null;){if(He.key===Fe){if(Fe=$.type,Fe===B){if(He.tag===7){c(j,He.sibling),O=v(He,$.props.children),O.return=j,j=O;break e}}else if(He.elementType===Fe||typeof Fe=="object"&&Fe!==null&&Fe.$$typeof===V&&gg(Fe)===He.type){c(j,He.sibling),O=v(He,$.props),O.ref=sa(j,He,$),O.return=j,j=O;break e}c(j,He);break}else o(j,He);He=He.sibling}$.type===B?(O=Jr($.props.children,j.mode,me,$.key),O.return=j,j=O):(me=gc($.type,$.key,$.props,null,j.mode,me),me.ref=sa(j,O,$),me.return=j,j=me)}return E(j);case T:e:{for(He=$.key;O!==null;){if(O.key===He)if(O.tag===4&&O.stateNode.containerInfo===$.containerInfo&&O.stateNode.implementation===$.implementation){c(j,O.sibling),O=v(O,$.children||[]),O.return=j,j=O;break e}else{c(j,O);break}else o(j,O);O=O.sibling}O=Mh($,j.mode,me),O.return=j,j=O}return E(j);case V:return He=$._init,zt(j,O,He($._payload),me)}if(ue($))return ke(j,O,$,me);if(ne($))return De(j,O,$,me);Xl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,O!==null&&O.tag===6?(c(j,O.sibling),O=v(O,$),O.return=j,j=O):(c(j,O),O=Sh($,j.mode,me),O.return=j,j=O),E(j)):c(j,O)}return zt}var Rs=vg(!0),yg=vg(!1),Yl=sr(null),ql=null,ks=null,Dd=null;function Id(){Dd=ks=ql=null}function Nd(r){var o=Yl.current;wt(Yl),r._currentValue=o}function Fd(r,o,c){for(;r!==null;){var f=r.alternate;if((r.childLanes&o)!==o?(r.childLanes|=o,f!==null&&(f.childLanes|=o)):f!==null&&(f.childLanes&o)!==o&&(f.childLanes|=o),r===c)break;r=r.return}}function Ds(r,o){ql=r,Dd=ks=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&o)!==0&&(Sn=!0),r.firstContext=null)}function Un(r){var o=r._currentValue;if(Dd!==r)if(r={context:r,memoizedValue:o,next:null},ks===null){if(ql===null)throw Error(t(308));ks=r,ql.dependencies={lanes:0,firstContext:r}}else ks=ks.next=r;return o}var Wr=null;function zd(r){Wr===null?Wr=[r]:Wr.push(r)}function xg(r,o,c,f){var v=o.interleaved;return v===null?(c.next=c,zd(o)):(c.next=v.next,v.next=c),o.interleaved=c,Ui(r,f)}function Ui(r,o){r.lanes|=o;var c=r.alternate;for(c!==null&&(c.lanes|=o),c=r,r=r.return;r!==null;)r.childLanes|=o,c=r.alternate,c!==null&&(c.childLanes|=o),c=r,r=r.return;return c.tag===3?c.stateNode:null}var lr=!1;function Bd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wg(r,o){r=r.updateQueue,o.updateQueue===r&&(o.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Hi(r,o){return{eventTime:r,lane:o,tag:0,payload:null,callback:null,next:null}}function cr(r,o,c){var f=r.updateQueue;if(f===null)return null;if(f=f.shared,(at&2)!==0){var v=f.pending;return v===null?o.next=o:(o.next=v.next,v.next=o),f.pending=o,Ui(r,c)}return v=f.interleaved,v===null?(o.next=o,zd(f)):(o.next=v.next,v.next=o),f.interleaved=o,Ui(r,c)}function $l(r,o,c){if(o=o.updateQueue,o!==null&&(o=o.shared,(c&4194240)!==0)){var f=o.lanes;f&=r.pendingLanes,c|=f,o.lanes=c,Ku(r,c)}}function _g(r,o){var c=r.updateQueue,f=r.alternate;if(f!==null&&(f=f.updateQueue,c===f)){var v=null,x=null;if(c=c.firstBaseUpdate,c!==null){do{var E={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};x===null?v=x=E:x=x.next=E,c=c.next}while(c!==null);x===null?v=x=o:x=x.next=o}else v=x=o;c={baseState:f.baseState,firstBaseUpdate:v,lastBaseUpdate:x,shared:f.shared,effects:f.effects},r.updateQueue=c;return}r=c.lastBaseUpdate,r===null?c.firstBaseUpdate=o:r.next=o,c.lastBaseUpdate=o}function Zl(r,o,c,f){var v=r.updateQueue;lr=!1;var x=v.firstBaseUpdate,E=v.lastBaseUpdate,k=v.shared.pending;if(k!==null){v.shared.pending=null;var F=k,Q=F.next;F.next=null,E===null?x=Q:E.next=Q,E=F;var fe=r.alternate;fe!==null&&(fe=fe.updateQueue,k=fe.lastBaseUpdate,k!==E&&(k===null?fe.firstBaseUpdate=Q:k.next=Q,fe.lastBaseUpdate=F))}if(x!==null){var pe=v.baseState;E=0,fe=Q=F=null,k=x;do{var de=k.lane,Le=k.eventTime;if((f&de)===de){fe!==null&&(fe=fe.next={eventTime:Le,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var ke=r,De=k;switch(de=o,Le=c,De.tag){case 1:if(ke=De.payload,typeof ke=="function"){pe=ke.call(Le,pe,de);break e}pe=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=De.payload,de=typeof ke=="function"?ke.call(Le,pe,de):ke,de==null)break e;pe=re({},pe,de);break e;case 2:lr=!0}}k.callback!==null&&k.lane!==0&&(r.flags|=64,de=v.effects,de===null?v.effects=[k]:de.push(k))}else Le={eventTime:Le,lane:de,tag:k.tag,payload:k.payload,callback:k.callback,next:null},fe===null?(Q=fe=Le,F=pe):fe=fe.next=Le,E|=de;if(k=k.next,k===null){if(k=v.shared.pending,k===null)break;de=k,k=de.next,de.next=null,v.lastBaseUpdate=de,v.shared.pending=null}}while(!0);if(fe===null&&(F=pe),v.baseState=F,v.firstBaseUpdate=Q,v.lastBaseUpdate=fe,o=v.shared.interleaved,o!==null){v=o;do E|=v.lane,v=v.next;while(v!==o)}else x===null&&(v.shared.lanes=0);Yr|=E,r.lanes=E,r.memoizedState=pe}}function bg(r,o,c){if(r=o.effects,o.effects=null,r!==null)for(o=0;o<r.length;o++){var f=r[o],v=f.callback;if(v!==null){if(f.callback=null,f=c,typeof v!="function")throw Error(t(191,v));v.call(f)}}}var oa={},wi=sr(oa),aa=sr(oa),la=sr(oa);function jr(r){if(r===oa)throw Error(t(174));return r}function Od(r,o){switch(vt(la,o),vt(aa,r),vt(wi,oa),r=o.nodeType,r){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:_e(null,"");break;default:r=r===8?o.parentNode:o,o=r.namespaceURI||null,r=r.tagName,o=_e(o,r)}wt(wi),vt(wi,o)}function Is(){wt(wi),wt(aa),wt(la)}function Sg(r){jr(la.current);var o=jr(wi.current),c=_e(o,r.type);o!==c&&(vt(aa,r),vt(wi,c))}function Vd(r){aa.current===r&&(wt(wi),wt(aa))}var At=sr(0);function Jl(r){for(var o=r;o!==null;){if(o.tag===13){var c=o.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var Ud=[];function Hd(){for(var r=0;r<Ud.length;r++)Ud[r]._workInProgressVersionPrimary=null;Ud.length=0}var Kl=R.ReactCurrentDispatcher,Gd=R.ReactCurrentBatchConfig,Xr=0,Ct=null,Ht=null,Yt=null,Ql=!1,ca=!1,ua=0,qb=0;function ln(){throw Error(t(321))}function Wd(r,o){if(o===null)return!1;for(var c=0;c<o.length&&c<r.length;c++)if(!ni(r[c],o[c]))return!1;return!0}function jd(r,o,c,f,v,x){if(Xr=x,Ct=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Kl.current=r===null||r.memoizedState===null?Kb:Qb,r=c(f,v),ca){x=0;do{if(ca=!1,ua=0,25<=x)throw Error(t(301));x+=1,Yt=Ht=null,o.updateQueue=null,Kl.current=eS,r=c(f,v)}while(ca)}if(Kl.current=nc,o=Ht!==null&&Ht.next!==null,Xr=0,Yt=Ht=Ct=null,Ql=!1,o)throw Error(t(300));return r}function Xd(){var r=ua!==0;return ua=0,r}function _i(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?Ct.memoizedState=Yt=r:Yt=Yt.next=r,Yt}function Hn(){if(Ht===null){var r=Ct.alternate;r=r!==null?r.memoizedState:null}else r=Ht.next;var o=Yt===null?Ct.memoizedState:Yt.next;if(o!==null)Yt=o,Ht=r;else{if(r===null)throw Error(t(310));Ht=r,r={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},Yt===null?Ct.memoizedState=Yt=r:Yt=Yt.next=r}return Yt}function da(r,o){return typeof o=="function"?o(r):o}function Yd(r){var o=Hn(),c=o.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=r;var f=Ht,v=f.baseQueue,x=c.pending;if(x!==null){if(v!==null){var E=v.next;v.next=x.next,x.next=E}f.baseQueue=v=x,c.pending=null}if(v!==null){x=v.next,f=f.baseState;var k=E=null,F=null,Q=x;do{var fe=Q.lane;if((Xr&fe)===fe)F!==null&&(F=F.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),f=Q.hasEagerState?Q.eagerState:r(f,Q.action);else{var pe={lane:fe,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};F===null?(k=F=pe,E=f):F=F.next=pe,Ct.lanes|=fe,Yr|=fe}Q=Q.next}while(Q!==null&&Q!==x);F===null?E=f:F.next=k,ni(f,o.memoizedState)||(Sn=!0),o.memoizedState=f,o.baseState=E,o.baseQueue=F,c.lastRenderedState=f}if(r=c.interleaved,r!==null){v=r;do x=v.lane,Ct.lanes|=x,Yr|=x,v=v.next;while(v!==r)}else v===null&&(c.lanes=0);return[o.memoizedState,c.dispatch]}function qd(r){var o=Hn(),c=o.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=r;var f=c.dispatch,v=c.pending,x=o.memoizedState;if(v!==null){c.pending=null;var E=v=v.next;do x=r(x,E.action),E=E.next;while(E!==v);ni(x,o.memoizedState)||(Sn=!0),o.memoizedState=x,o.baseQueue===null&&(o.baseState=x),c.lastRenderedState=x}return[x,f]}function Mg(){}function Eg(r,o){var c=Ct,f=Hn(),v=o(),x=!ni(f.memoizedState,v);if(x&&(f.memoizedState=v,Sn=!0),f=f.queue,$d(Cg.bind(null,c,f,r),[r]),f.getSnapshot!==o||x||Yt!==null&&Yt.memoizedState.tag&1){if(c.flags|=2048,ha(9,Ag.bind(null,c,f,v,o),void 0,null),qt===null)throw Error(t(349));(Xr&30)!==0||Tg(c,o,v)}return v}function Tg(r,o,c){r.flags|=16384,r={getSnapshot:o,value:c},o=Ct.updateQueue,o===null?(o={lastEffect:null,stores:null},Ct.updateQueue=o,o.stores=[r]):(c=o.stores,c===null?o.stores=[r]:c.push(r))}function Ag(r,o,c,f){o.value=c,o.getSnapshot=f,Lg(o)&&Pg(r)}function Cg(r,o,c){return c(function(){Lg(o)&&Pg(r)})}function Lg(r){var o=r.getSnapshot;r=r.value;try{var c=o();return!ni(r,c)}catch{return!0}}function Pg(r){var o=Ui(r,1);o!==null&&ai(o,r,1,-1)}function Rg(r){var o=_i();return typeof r=="function"&&(r=r()),o.memoizedState=o.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:r},o.queue=r,r=r.dispatch=Jb.bind(null,Ct,r),[o.memoizedState,r]}function ha(r,o,c,f){return r={tag:r,create:o,destroy:c,deps:f,next:null},o=Ct.updateQueue,o===null?(o={lastEffect:null,stores:null},Ct.updateQueue=o,o.lastEffect=r.next=r):(c=o.lastEffect,c===null?o.lastEffect=r.next=r:(f=c.next,c.next=r,r.next=f,o.lastEffect=r)),r}function kg(){return Hn().memoizedState}function ec(r,o,c,f){var v=_i();Ct.flags|=r,v.memoizedState=ha(1|o,c,void 0,f===void 0?null:f)}function tc(r,o,c,f){var v=Hn();f=f===void 0?null:f;var x=void 0;if(Ht!==null){var E=Ht.memoizedState;if(x=E.destroy,f!==null&&Wd(f,E.deps)){v.memoizedState=ha(o,c,x,f);return}}Ct.flags|=r,v.memoizedState=ha(1|o,c,x,f)}function Dg(r,o){return ec(8390656,8,r,o)}function $d(r,o){return tc(2048,8,r,o)}function Ig(r,o){return tc(4,2,r,o)}function Ng(r,o){return tc(4,4,r,o)}function Fg(r,o){if(typeof o=="function")return r=r(),o(r),function(){o(null)};if(o!=null)return r=r(),o.current=r,function(){o.current=null}}function zg(r,o,c){return c=c!=null?c.concat([r]):null,tc(4,4,Fg.bind(null,o,r),c)}function Zd(){}function Bg(r,o){var c=Hn();o=o===void 0?null:o;var f=c.memoizedState;return f!==null&&o!==null&&Wd(o,f[1])?f[0]:(c.memoizedState=[r,o],r)}function Og(r,o){var c=Hn();o=o===void 0?null:o;var f=c.memoizedState;return f!==null&&o!==null&&Wd(o,f[1])?f[0]:(r=r(),c.memoizedState=[r,o],r)}function Vg(r,o,c){return(Xr&21)===0?(r.baseState&&(r.baseState=!1,Sn=!0),r.memoizedState=c):(ni(c,o)||(c=gm(),Ct.lanes|=c,Yr|=c,r.baseState=!0),o)}function $b(r,o){var c=ht;ht=c!==0&&4>c?c:4,r(!0);var f=Gd.transition;Gd.transition={};try{r(!1),o()}finally{ht=c,Gd.transition=f}}function Ug(){return Hn().memoizedState}function Zb(r,o,c){var f=fr(r);if(c={lane:f,action:c,hasEagerState:!1,eagerState:null,next:null},Hg(r))Gg(o,c);else if(c=xg(r,o,c,f),c!==null){var v=gn();ai(c,r,f,v),Wg(c,o,f)}}function Jb(r,o,c){var f=fr(r),v={lane:f,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hg(r))Gg(o,v);else{var x=r.alternate;if(r.lanes===0&&(x===null||x.lanes===0)&&(x=o.lastRenderedReducer,x!==null))try{var E=o.lastRenderedState,k=x(E,c);if(v.hasEagerState=!0,v.eagerState=k,ni(k,E)){var F=o.interleaved;F===null?(v.next=v,zd(o)):(v.next=F.next,F.next=v),o.interleaved=v;return}}catch{}finally{}c=xg(r,o,v,f),c!==null&&(v=gn(),ai(c,r,f,v),Wg(c,o,f))}}function Hg(r){var o=r.alternate;return r===Ct||o!==null&&o===Ct}function Gg(r,o){ca=Ql=!0;var c=r.pending;c===null?o.next=o:(o.next=c.next,c.next=o),r.pending=o}function Wg(r,o,c){if((c&4194240)!==0){var f=o.lanes;f&=r.pendingLanes,c|=f,o.lanes=c,Ku(r,c)}}var nc={readContext:Un,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},Kb={readContext:Un,useCallback:function(r,o){return _i().memoizedState=[r,o===void 0?null:o],r},useContext:Un,useEffect:Dg,useImperativeHandle:function(r,o,c){return c=c!=null?c.concat([r]):null,ec(4194308,4,Fg.bind(null,o,r),c)},useLayoutEffect:function(r,o){return ec(4194308,4,r,o)},useInsertionEffect:function(r,o){return ec(4,2,r,o)},useMemo:function(r,o){var c=_i();return o=o===void 0?null:o,r=r(),c.memoizedState=[r,o],r},useReducer:function(r,o,c){var f=_i();return o=c!==void 0?c(o):o,f.memoizedState=f.baseState=o,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:o},f.queue=r,r=r.dispatch=Zb.bind(null,Ct,r),[f.memoizedState,r]},useRef:function(r){var o=_i();return r={current:r},o.memoizedState=r},useState:Rg,useDebugValue:Zd,useDeferredValue:function(r){return _i().memoizedState=r},useTransition:function(){var r=Rg(!1),o=r[0];return r=$b.bind(null,r[1]),_i().memoizedState=r,[o,r]},useMutableSource:function(){},useSyncExternalStore:function(r,o,c){var f=Ct,v=_i();if(bt){if(c===void 0)throw Error(t(407));c=c()}else{if(c=o(),qt===null)throw Error(t(349));(Xr&30)!==0||Tg(f,o,c)}v.memoizedState=c;var x={value:c,getSnapshot:o};return v.queue=x,Dg(Cg.bind(null,f,x,r),[r]),f.flags|=2048,ha(9,Ag.bind(null,f,x,c,o),void 0,null),c},useId:function(){var r=_i(),o=qt.identifierPrefix;if(bt){var c=Vi,f=Oi;c=(f&~(1<<32-ti(f)-1)).toString(32)+c,o=":"+o+"R"+c,c=ua++,0<c&&(o+="H"+c.toString(32)),o+=":"}else c=qb++,o=":"+o+"r"+c.toString(32)+":";return r.memoizedState=o},unstable_isNewReconciler:!1},Qb={readContext:Un,useCallback:Bg,useContext:Un,useEffect:$d,useImperativeHandle:zg,useInsertionEffect:Ig,useLayoutEffect:Ng,useMemo:Og,useReducer:Yd,useRef:kg,useState:function(){return Yd(da)},useDebugValue:Zd,useDeferredValue:function(r){var o=Hn();return Vg(o,Ht.memoizedState,r)},useTransition:function(){var r=Yd(da)[0],o=Hn().memoizedState;return[r,o]},useMutableSource:Mg,useSyncExternalStore:Eg,useId:Ug,unstable_isNewReconciler:!1},eS={readContext:Un,useCallback:Bg,useContext:Un,useEffect:$d,useImperativeHandle:zg,useInsertionEffect:Ig,useLayoutEffect:Ng,useMemo:Og,useReducer:qd,useRef:kg,useState:function(){return qd(da)},useDebugValue:Zd,useDeferredValue:function(r){var o=Hn();return Ht===null?o.memoizedState=r:Vg(o,Ht.memoizedState,r)},useTransition:function(){var r=qd(da)[0],o=Hn().memoizedState;return[r,o]},useMutableSource:Mg,useSyncExternalStore:Eg,useId:Ug,unstable_isNewReconciler:!1};function ri(r,o){if(r&&r.defaultProps){o=re({},o),r=r.defaultProps;for(var c in r)o[c]===void 0&&(o[c]=r[c]);return o}return o}function Jd(r,o,c,f){o=r.memoizedState,c=c(f,o),c=c==null?o:re({},o,c),r.memoizedState=c,r.lanes===0&&(r.updateQueue.baseState=c)}var ic={isMounted:function(r){return(r=r._reactInternals)?nt(r)===r:!1},enqueueSetState:function(r,o,c){r=r._reactInternals;var f=gn(),v=fr(r),x=Hi(f,v);x.payload=o,c!=null&&(x.callback=c),o=cr(r,x,v),o!==null&&(ai(o,r,v,f),$l(o,r,v))},enqueueReplaceState:function(r,o,c){r=r._reactInternals;var f=gn(),v=fr(r),x=Hi(f,v);x.tag=1,x.payload=o,c!=null&&(x.callback=c),o=cr(r,x,v),o!==null&&(ai(o,r,v,f),$l(o,r,v))},enqueueForceUpdate:function(r,o){r=r._reactInternals;var c=gn(),f=fr(r),v=Hi(c,f);v.tag=2,o!=null&&(v.callback=o),o=cr(r,v,f),o!==null&&(ai(o,r,f,c),$l(o,r,f))}};function jg(r,o,c,f,v,x,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(f,x,E):o.prototype&&o.prototype.isPureReactComponent?!Ko(c,f)||!Ko(v,x):!0}function Xg(r,o,c){var f=!1,v=or,x=o.contextType;return typeof x=="object"&&x!==null?x=Un(x):(v=bn(o)?Ur:an.current,f=o.contextTypes,x=(f=f!=null)?As(r,v):or),o=new o(c,x),r.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ic,r.stateNode=o,o._reactInternals=r,f&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=v,r.__reactInternalMemoizedMaskedChildContext=x),o}function Yg(r,o,c,f){r=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(c,f),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(c,f),o.state!==r&&ic.enqueueReplaceState(o,o.state,null)}function Kd(r,o,c,f){var v=r.stateNode;v.props=c,v.state=r.memoizedState,v.refs={},Bd(r);var x=o.contextType;typeof x=="object"&&x!==null?v.context=Un(x):(x=bn(o)?Ur:an.current,v.context=As(r,x)),v.state=r.memoizedState,x=o.getDerivedStateFromProps,typeof x=="function"&&(Jd(r,o,x,c),v.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(o=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),o!==v.state&&ic.enqueueReplaceState(v,v.state,null),Zl(r,c,v,f),v.state=r.memoizedState),typeof v.componentDidMount=="function"&&(r.flags|=4194308)}function Ns(r,o){try{var c="",f=o;do c+=Ie(f),f=f.return;while(f);var v=c}catch(x){v=`
Error generating stack: `+x.message+`
`+x.stack}return{value:r,source:o,stack:v,digest:null}}function Qd(r,o,c){return{value:r,source:null,stack:c??null,digest:o??null}}function eh(r,o){try{console.error(o.value)}catch(c){setTimeout(function(){throw c})}}var tS=typeof WeakMap=="function"?WeakMap:Map;function qg(r,o,c){c=Hi(-1,c),c.tag=3,c.payload={element:null};var f=o.value;return c.callback=function(){uc||(uc=!0,mh=f),eh(r,o)},c}function $g(r,o,c){c=Hi(-1,c),c.tag=3;var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var v=o.value;c.payload=function(){return f(v)},c.callback=function(){eh(r,o)}}var x=r.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(c.callback=function(){eh(r,o),typeof f!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})}),c}function Zg(r,o,c){var f=r.pingCache;if(f===null){f=r.pingCache=new tS;var v=new Set;f.set(o,v)}else v=f.get(o),v===void 0&&(v=new Set,f.set(o,v));v.has(c)||(v.add(c),r=mS.bind(null,r,o,c),o.then(r,r))}function Jg(r){do{var o;if((o=r.tag===13)&&(o=r.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return r;r=r.return}while(r!==null);return null}function Kg(r,o,c,f,v){return(r.mode&1)===0?(r===o?r.flags|=65536:(r.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(o=Hi(-1,1),o.tag=2,cr(c,o,1))),c.lanes|=1),r):(r.flags|=65536,r.lanes=v,r)}var nS=R.ReactCurrentOwner,Sn=!1;function mn(r,o,c,f){o.child=r===null?yg(o,null,c,f):Rs(o,r.child,c,f)}function Qg(r,o,c,f,v){c=c.render;var x=o.ref;return Ds(o,v),f=jd(r,o,c,f,x,v),c=Xd(),r!==null&&!Sn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~v,Gi(r,o,v)):(bt&&c&&Cd(o),o.flags|=1,mn(r,o,f,v),o.child)}function ev(r,o,c,f,v){if(r===null){var x=c.type;return typeof x=="function"&&!bh(x)&&x.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(o.tag=15,o.type=x,tv(r,o,x,f,v)):(r=gc(c.type,null,f,o,o.mode,v),r.ref=o.ref,r.return=o,o.child=r)}if(x=r.child,(r.lanes&v)===0){var E=x.memoizedProps;if(c=c.compare,c=c!==null?c:Ko,c(E,f)&&r.ref===o.ref)return Gi(r,o,v)}return o.flags|=1,r=mr(x,f),r.ref=o.ref,r.return=o,o.child=r}function tv(r,o,c,f,v){if(r!==null){var x=r.memoizedProps;if(Ko(x,f)&&r.ref===o.ref)if(Sn=!1,o.pendingProps=f=x,(r.lanes&v)!==0)(r.flags&131072)!==0&&(Sn=!0);else return o.lanes=r.lanes,Gi(r,o,v)}return th(r,o,c,f,v)}function nv(r,o,c){var f=o.pendingProps,v=f.children,x=r!==null?r.memoizedState:null;if(f.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(zs,Dn),Dn|=c;else{if((c&1073741824)===0)return r=x!==null?x.baseLanes|c:c,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:r,cachePool:null,transitions:null},o.updateQueue=null,vt(zs,Dn),Dn|=r,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:c,vt(zs,Dn),Dn|=f}else x!==null?(f=x.baseLanes|c,o.memoizedState=null):f=c,vt(zs,Dn),Dn|=f;return mn(r,o,v,c),o.child}function iv(r,o){var c=o.ref;(r===null&&c!==null||r!==null&&r.ref!==c)&&(o.flags|=512,o.flags|=2097152)}function th(r,o,c,f,v){var x=bn(c)?Ur:an.current;return x=As(o,x),Ds(o,v),c=jd(r,o,c,f,x,v),f=Xd(),r!==null&&!Sn?(o.updateQueue=r.updateQueue,o.flags&=-2053,r.lanes&=~v,Gi(r,o,v)):(bt&&f&&Cd(o),o.flags|=1,mn(r,o,c,v),o.child)}function rv(r,o,c,f,v){if(bn(c)){var x=!0;Ul(o)}else x=!1;if(Ds(o,v),o.stateNode===null)sc(r,o),Xg(o,c,f),Kd(o,c,f,v),f=!0;else if(r===null){var E=o.stateNode,k=o.memoizedProps;E.props=k;var F=E.context,Q=c.contextType;typeof Q=="object"&&Q!==null?Q=Un(Q):(Q=bn(c)?Ur:an.current,Q=As(o,Q));var fe=c.getDerivedStateFromProps,pe=typeof fe=="function"||typeof E.getSnapshotBeforeUpdate=="function";pe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==f||F!==Q)&&Yg(o,E,f,Q),lr=!1;var de=o.memoizedState;E.state=de,Zl(o,f,E,v),F=o.memoizedState,k!==f||de!==F||_n.current||lr?(typeof fe=="function"&&(Jd(o,c,fe,f),F=o.memoizedState),(k=lr||jg(o,c,k,f,de,F,Q))?(pe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(o.flags|=4194308)):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=f,o.memoizedState=F),E.props=f,E.state=F,E.context=Q,f=k):(typeof E.componentDidMount=="function"&&(o.flags|=4194308),f=!1)}else{E=o.stateNode,wg(r,o),k=o.memoizedProps,Q=o.type===o.elementType?k:ri(o.type,k),E.props=Q,pe=o.pendingProps,de=E.context,F=c.contextType,typeof F=="object"&&F!==null?F=Un(F):(F=bn(c)?Ur:an.current,F=As(o,F));var Le=c.getDerivedStateFromProps;(fe=typeof Le=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==pe||de!==F)&&Yg(o,E,f,F),lr=!1,de=o.memoizedState,E.state=de,Zl(o,f,E,v);var ke=o.memoizedState;k!==pe||de!==ke||_n.current||lr?(typeof Le=="function"&&(Jd(o,c,Le,f),ke=o.memoizedState),(Q=lr||jg(o,c,Q,f,de,ke,F)||!1)?(fe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(f,ke,F),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(f,ke,F)),typeof E.componentDidUpdate=="function"&&(o.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof E.componentDidUpdate!="function"||k===r.memoizedProps&&de===r.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&de===r.memoizedState||(o.flags|=1024),o.memoizedProps=f,o.memoizedState=ke),E.props=f,E.state=ke,E.context=F,f=Q):(typeof E.componentDidUpdate!="function"||k===r.memoizedProps&&de===r.memoizedState||(o.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===r.memoizedProps&&de===r.memoizedState||(o.flags|=1024),f=!1)}return nh(r,o,c,f,x,v)}function nh(r,o,c,f,v,x){iv(r,o);var E=(o.flags&128)!==0;if(!f&&!E)return v&&cg(o,c,!1),Gi(r,o,x);f=o.stateNode,nS.current=o;var k=E&&typeof c.getDerivedStateFromError!="function"?null:f.render();return o.flags|=1,r!==null&&E?(o.child=Rs(o,r.child,null,x),o.child=Rs(o,null,k,x)):mn(r,o,k,x),o.memoizedState=f.state,v&&cg(o,c,!0),o.child}function sv(r){var o=r.stateNode;o.pendingContext?ag(r,o.pendingContext,o.pendingContext!==o.context):o.context&&ag(r,o.context,!1),Od(r,o.containerInfo)}function ov(r,o,c,f,v){return Ps(),kd(v),o.flags|=256,mn(r,o,c,f),o.child}var ih={dehydrated:null,treeContext:null,retryLane:0};function rh(r){return{baseLanes:r,cachePool:null,transitions:null}}function av(r,o,c){var f=o.pendingProps,v=At.current,x=!1,E=(o.flags&128)!==0,k;if((k=E)||(k=r!==null&&r.memoizedState===null?!1:(v&2)!==0),k?(x=!0,o.flags&=-129):(r===null||r.memoizedState!==null)&&(v|=1),vt(At,v&1),r===null)return Rd(o),r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((o.mode&1)===0?o.lanes=1:r.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(E=f.children,r=f.fallback,x?(f=o.mode,x=o.child,E={mode:"hidden",children:E},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=E):x=vc(E,f,0,null),r=Jr(r,f,c,null),x.return=o,r.return=o,x.sibling=r,o.child=x,o.child.memoizedState=rh(c),o.memoizedState=ih,r):sh(o,E));if(v=r.memoizedState,v!==null&&(k=v.dehydrated,k!==null))return iS(r,o,E,f,k,v,c);if(x){x=f.fallback,E=o.mode,v=r.child,k=v.sibling;var F={mode:"hidden",children:f.children};return(E&1)===0&&o.child!==v?(f=o.child,f.childLanes=0,f.pendingProps=F,o.deletions=null):(f=mr(v,F),f.subtreeFlags=v.subtreeFlags&14680064),k!==null?x=mr(k,x):(x=Jr(x,E,c,null),x.flags|=2),x.return=o,f.return=o,f.sibling=x,o.child=f,f=x,x=o.child,E=r.child.memoizedState,E=E===null?rh(c):{baseLanes:E.baseLanes|c,cachePool:null,transitions:E.transitions},x.memoizedState=E,x.childLanes=r.childLanes&~c,o.memoizedState=ih,f}return x=r.child,r=x.sibling,f=mr(x,{mode:"visible",children:f.children}),(o.mode&1)===0&&(f.lanes=c),f.return=o,f.sibling=null,r!==null&&(c=o.deletions,c===null?(o.deletions=[r],o.flags|=16):c.push(r)),o.child=f,o.memoizedState=null,f}function sh(r,o){return o=vc({mode:"visible",children:o},r.mode,0,null),o.return=r,r.child=o}function rc(r,o,c,f){return f!==null&&kd(f),Rs(o,r.child,null,c),r=sh(o,o.pendingProps.children),r.flags|=2,o.memoizedState=null,r}function iS(r,o,c,f,v,x,E){if(c)return o.flags&256?(o.flags&=-257,f=Qd(Error(t(422))),rc(r,o,E,f)):o.memoizedState!==null?(o.child=r.child,o.flags|=128,null):(x=f.fallback,v=o.mode,f=vc({mode:"visible",children:f.children},v,0,null),x=Jr(x,v,E,null),x.flags|=2,f.return=o,x.return=o,f.sibling=x,o.child=f,(o.mode&1)!==0&&Rs(o,r.child,null,E),o.child.memoizedState=rh(E),o.memoizedState=ih,x);if((o.mode&1)===0)return rc(r,o,E,null);if(v.data==="$!"){if(f=v.nextSibling&&v.nextSibling.dataset,f)var k=f.dgst;return f=k,x=Error(t(419)),f=Qd(x,f,void 0),rc(r,o,E,f)}if(k=(E&r.childLanes)!==0,Sn||k){if(f=qt,f!==null){switch(E&-E){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(f.suspendedLanes|E))!==0?0:v,v!==0&&v!==x.retryLane&&(x.retryLane=v,Ui(r,v),ai(f,r,v,-1))}return _h(),f=Qd(Error(t(421))),rc(r,o,E,f)}return v.data==="$?"?(o.flags|=128,o.child=r.child,o=gS.bind(null,r),v._reactRetry=o,null):(r=x.treeContext,kn=rr(v.nextSibling),Rn=o,bt=!0,ii=null,r!==null&&(On[Vn++]=Oi,On[Vn++]=Vi,On[Vn++]=Hr,Oi=r.id,Vi=r.overflow,Hr=o),o=sh(o,f.children),o.flags|=4096,o)}function lv(r,o,c){r.lanes|=o;var f=r.alternate;f!==null&&(f.lanes|=o),Fd(r.return,o,c)}function oh(r,o,c,f,v){var x=r.memoizedState;x===null?r.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:f,tail:c,tailMode:v}:(x.isBackwards=o,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=c,x.tailMode=v)}function cv(r,o,c){var f=o.pendingProps,v=f.revealOrder,x=f.tail;if(mn(r,o,f.children,c),f=At.current,(f&2)!==0)f=f&1|2,o.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=o.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&lv(r,c,o);else if(r.tag===19)lv(r,c,o);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===o)break e;for(;r.sibling===null;){if(r.return===null||r.return===o)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}f&=1}if(vt(At,f),(o.mode&1)===0)o.memoizedState=null;else switch(v){case"forwards":for(c=o.child,v=null;c!==null;)r=c.alternate,r!==null&&Jl(r)===null&&(v=c),c=c.sibling;c=v,c===null?(v=o.child,o.child=null):(v=c.sibling,c.sibling=null),oh(o,!1,v,c,x);break;case"backwards":for(c=null,v=o.child,o.child=null;v!==null;){if(r=v.alternate,r!==null&&Jl(r)===null){o.child=v;break}r=v.sibling,v.sibling=c,c=v,v=r}oh(o,!0,c,null,x);break;case"together":oh(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function sc(r,o){(o.mode&1)===0&&r!==null&&(r.alternate=null,o.alternate=null,o.flags|=2)}function Gi(r,o,c){if(r!==null&&(o.dependencies=r.dependencies),Yr|=o.lanes,(c&o.childLanes)===0)return null;if(r!==null&&o.child!==r.child)throw Error(t(153));if(o.child!==null){for(r=o.child,c=mr(r,r.pendingProps),o.child=c,c.return=o;r.sibling!==null;)r=r.sibling,c=c.sibling=mr(r,r.pendingProps),c.return=o;c.sibling=null}return o.child}function rS(r,o,c){switch(o.tag){case 3:sv(o),Ps();break;case 5:Sg(o);break;case 1:bn(o.type)&&Ul(o);break;case 4:Od(o,o.stateNode.containerInfo);break;case 10:var f=o.type._context,v=o.memoizedProps.value;vt(Yl,f._currentValue),f._currentValue=v;break;case 13:if(f=o.memoizedState,f!==null)return f.dehydrated!==null?(vt(At,At.current&1),o.flags|=128,null):(c&o.child.childLanes)!==0?av(r,o,c):(vt(At,At.current&1),r=Gi(r,o,c),r!==null?r.sibling:null);vt(At,At.current&1);break;case 19:if(f=(c&o.childLanes)!==0,(r.flags&128)!==0){if(f)return cv(r,o,c);o.flags|=128}if(v=o.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),vt(At,At.current),f)break;return null;case 22:case 23:return o.lanes=0,nv(r,o,c)}return Gi(r,o,c)}var uv,ah,dv,hv;uv=function(r,o){for(var c=o.child;c!==null;){if(c.tag===5||c.tag===6)r.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===o)break;for(;c.sibling===null;){if(c.return===null||c.return===o)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},ah=function(){},dv=function(r,o,c,f){var v=r.memoizedProps;if(v!==f){r=o.stateNode,jr(wi.current);var x=null;switch(c){case"input":v=Se(r,v),f=Se(r,f),x=[];break;case"select":v=re({},v,{value:void 0}),f=re({},f,{value:void 0}),x=[];break;case"textarea":v=Ne(r,v),f=Ne(r,f),x=[];break;default:typeof v.onClick!="function"&&typeof f.onClick=="function"&&(r.onclick=Bl)}pn(c,f);var E;c=null;for(Q in v)if(!f.hasOwnProperty(Q)&&v.hasOwnProperty(Q)&&v[Q]!=null)if(Q==="style"){var k=v[Q];for(E in k)k.hasOwnProperty(E)&&(c||(c={}),c[E]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(s.hasOwnProperty(Q)?x||(x=[]):(x=x||[]).push(Q,null));for(Q in f){var F=f[Q];if(k=v!=null?v[Q]:void 0,f.hasOwnProperty(Q)&&F!==k&&(F!=null||k!=null))if(Q==="style")if(k){for(E in k)!k.hasOwnProperty(E)||F&&F.hasOwnProperty(E)||(c||(c={}),c[E]="");for(E in F)F.hasOwnProperty(E)&&k[E]!==F[E]&&(c||(c={}),c[E]=F[E])}else c||(x||(x=[]),x.push(Q,c)),c=F;else Q==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,k=k?k.__html:void 0,F!=null&&k!==F&&(x=x||[]).push(Q,F)):Q==="children"?typeof F!="string"&&typeof F!="number"||(x=x||[]).push(Q,""+F):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(s.hasOwnProperty(Q)?(F!=null&&Q==="onScroll"&&xt("scroll",r),x||k===F||(x=[])):(x=x||[]).push(Q,F))}c&&(x=x||[]).push("style",c);var Q=x;(o.updateQueue=Q)&&(o.flags|=4)}},hv=function(r,o,c,f){c!==f&&(o.flags|=4)};function fa(r,o){if(!bt)switch(r.tailMode){case"hidden":o=r.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r.tail=null:c.sibling=null;break;case"collapsed":c=r.tail;for(var f=null;c!==null;)c.alternate!==null&&(f=c),c=c.sibling;f===null?o||r.tail===null?r.tail=null:r.tail.sibling=null:f.sibling=null}}function cn(r){var o=r.alternate!==null&&r.alternate.child===r.child,c=0,f=0;if(o)for(var v=r.child;v!==null;)c|=v.lanes|v.childLanes,f|=v.subtreeFlags&14680064,f|=v.flags&14680064,v.return=r,v=v.sibling;else for(v=r.child;v!==null;)c|=v.lanes|v.childLanes,f|=v.subtreeFlags,f|=v.flags,v.return=r,v=v.sibling;return r.subtreeFlags|=f,r.childLanes=c,o}function sS(r,o,c){var f=o.pendingProps;switch(Ld(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(o),null;case 1:return bn(o.type)&&Vl(),cn(o),null;case 3:return f=o.stateNode,Is(),wt(_n),wt(an),Hd(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(r===null||r.child===null)&&(jl(o)?o.flags|=4:r===null||r.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,ii!==null&&(yh(ii),ii=null))),ah(r,o),cn(o),null;case 5:Vd(o);var v=jr(la.current);if(c=o.type,r!==null&&o.stateNode!=null)dv(r,o,c,f,v),r.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!f){if(o.stateNode===null)throw Error(t(166));return cn(o),null}if(r=jr(wi.current),jl(o)){f=o.stateNode,c=o.type;var x=o.memoizedProps;switch(f[xi]=o,f[ia]=x,r=(o.mode&1)!==0,c){case"dialog":xt("cancel",f),xt("close",f);break;case"iframe":case"object":case"embed":xt("load",f);break;case"video":case"audio":for(v=0;v<ea.length;v++)xt(ea[v],f);break;case"source":xt("error",f);break;case"img":case"image":case"link":xt("error",f),xt("load",f);break;case"details":xt("toggle",f);break;case"input":ze(f,x),xt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},xt("invalid",f);break;case"textarea":rt(f,x),xt("invalid",f)}pn(c,x),v=null;for(var E in x)if(x.hasOwnProperty(E)){var k=x[E];E==="children"?typeof k=="string"?f.textContent!==k&&(x.suppressHydrationWarning!==!0&&zl(f.textContent,k,r),v=["children",k]):typeof k=="number"&&f.textContent!==""+k&&(x.suppressHydrationWarning!==!0&&zl(f.textContent,k,r),v=["children",""+k]):s.hasOwnProperty(E)&&k!=null&&E==="onScroll"&&xt("scroll",f)}switch(c){case"input":Qe(f),P(f,x,!0);break;case"textarea":Qe(f),H(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=Bl)}f=v,o.updateQueue=f,f!==null&&(o.flags|=4)}else{E=v.nodeType===9?v:v.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ye(c)),r==="http://www.w3.org/1999/xhtml"?c==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof f.is=="string"?r=E.createElement(c,{is:f.is}):(r=E.createElement(c),c==="select"&&(E=r,f.multiple?E.multiple=!0:f.size&&(E.size=f.size))):r=E.createElementNS(r,c),r[xi]=o,r[ia]=f,uv(r,o,!1,!1),o.stateNode=r;e:{switch(E=No(c,f),c){case"dialog":xt("cancel",r),xt("close",r),v=f;break;case"iframe":case"object":case"embed":xt("load",r),v=f;break;case"video":case"audio":for(v=0;v<ea.length;v++)xt(ea[v],r);v=f;break;case"source":xt("error",r),v=f;break;case"img":case"image":case"link":xt("error",r),xt("load",r),v=f;break;case"details":xt("toggle",r),v=f;break;case"input":ze(r,f),v=Se(r,f),xt("invalid",r);break;case"option":v=f;break;case"select":r._wrapperState={wasMultiple:!!f.multiple},v=re({},f,{value:void 0}),xt("invalid",r);break;case"textarea":rt(r,f),v=Ne(r,f),xt("invalid",r);break;default:v=f}pn(c,v),k=v;for(x in k)if(k.hasOwnProperty(x)){var F=k[x];x==="style"?_t(r,F):x==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&he(r,F)):x==="children"?typeof F=="string"?(c!=="textarea"||F!=="")&&We(r,F):typeof F=="number"&&We(r,""+F):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(s.hasOwnProperty(x)?F!=null&&x==="onScroll"&&xt("scroll",r):F!=null&&C(r,x,F,E))}switch(c){case"input":Qe(r),P(r,f,!1);break;case"textarea":Qe(r),H(r);break;case"option":f.value!=null&&r.setAttribute("value",""+be(f.value));break;case"select":r.multiple=!!f.multiple,x=f.value,x!=null?Me(r,!!f.multiple,x,!1):f.defaultValue!=null&&Me(r,!!f.multiple,f.defaultValue,!0);break;default:typeof v.onClick=="function"&&(r.onclick=Bl)}switch(c){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return cn(o),null;case 6:if(r&&o.stateNode!=null)hv(r,o,r.memoizedProps,f);else{if(typeof f!="string"&&o.stateNode===null)throw Error(t(166));if(c=jr(la.current),jr(wi.current),jl(o)){if(f=o.stateNode,c=o.memoizedProps,f[xi]=o,(x=f.nodeValue!==c)&&(r=Rn,r!==null))switch(r.tag){case 3:zl(f.nodeValue,c,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&zl(f.nodeValue,c,(r.mode&1)!==0)}x&&(o.flags|=4)}else f=(c.nodeType===9?c:c.ownerDocument).createTextNode(f),f[xi]=o,o.stateNode=f}return cn(o),null;case 13:if(wt(At),f=o.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(bt&&kn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)mg(),Ps(),o.flags|=98560,x=!1;else if(x=jl(o),f!==null&&f.dehydrated!==null){if(r===null){if(!x)throw Error(t(318));if(x=o.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[xi]=o}else Ps(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;cn(o),x=!1}else ii!==null&&(yh(ii),ii=null),x=!0;if(!x)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=c,o):(f=f!==null,f!==(r!==null&&r.memoizedState!==null)&&f&&(o.child.flags|=8192,(o.mode&1)!==0&&(r===null||(At.current&1)!==0?Gt===0&&(Gt=3):_h())),o.updateQueue!==null&&(o.flags|=4),cn(o),null);case 4:return Is(),ah(r,o),r===null&&ta(o.stateNode.containerInfo),cn(o),null;case 10:return Nd(o.type._context),cn(o),null;case 17:return bn(o.type)&&Vl(),cn(o),null;case 19:if(wt(At),x=o.memoizedState,x===null)return cn(o),null;if(f=(o.flags&128)!==0,E=x.rendering,E===null)if(f)fa(x,!1);else{if(Gt!==0||r!==null&&(r.flags&128)!==0)for(r=o.child;r!==null;){if(E=Jl(r),E!==null){for(o.flags|=128,fa(x,!1),f=E.updateQueue,f!==null&&(o.updateQueue=f,o.flags|=4),o.subtreeFlags=0,f=c,c=o.child;c!==null;)x=c,r=f,x.flags&=14680066,E=x.alternate,E===null?(x.childLanes=0,x.lanes=r,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=E.childLanes,x.lanes=E.lanes,x.child=E.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=E.memoizedProps,x.memoizedState=E.memoizedState,x.updateQueue=E.updateQueue,x.type=E.type,r=E.dependencies,x.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),c=c.sibling;return vt(At,At.current&1|2),o.child}r=r.sibling}x.tail!==null&&Tt()>Bs&&(o.flags|=128,f=!0,fa(x,!1),o.lanes=4194304)}else{if(!f)if(r=Jl(E),r!==null){if(o.flags|=128,f=!0,c=r.updateQueue,c!==null&&(o.updateQueue=c,o.flags|=4),fa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!E.alternate&&!bt)return cn(o),null}else 2*Tt()-x.renderingStartTime>Bs&&c!==1073741824&&(o.flags|=128,f=!0,fa(x,!1),o.lanes=4194304);x.isBackwards?(E.sibling=o.child,o.child=E):(c=x.last,c!==null?c.sibling=E:o.child=E,x.last=E)}return x.tail!==null?(o=x.tail,x.rendering=o,x.tail=o.sibling,x.renderingStartTime=Tt(),o.sibling=null,c=At.current,vt(At,f?c&1|2:c&1),o):(cn(o),null);case 22:case 23:return wh(),f=o.memoizedState!==null,r!==null&&r.memoizedState!==null!==f&&(o.flags|=8192),f&&(o.mode&1)!==0?(Dn&1073741824)!==0&&(cn(o),o.subtreeFlags&6&&(o.flags|=8192)):cn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function oS(r,o){switch(Ld(o),o.tag){case 1:return bn(o.type)&&Vl(),r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 3:return Is(),wt(_n),wt(an),Hd(),r=o.flags,(r&65536)!==0&&(r&128)===0?(o.flags=r&-65537|128,o):null;case 5:return Vd(o),null;case 13:if(wt(At),r=o.memoizedState,r!==null&&r.dehydrated!==null){if(o.alternate===null)throw Error(t(340));Ps()}return r=o.flags,r&65536?(o.flags=r&-65537|128,o):null;case 19:return wt(At),null;case 4:return Is(),null;case 10:return Nd(o.type._context),null;case 22:case 23:return wh(),null;case 24:return null;default:return null}}var oc=!1,un=!1,aS=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Fs(r,o){var c=r.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(f){Dt(r,o,f)}else c.current=null}function lh(r,o,c){try{c()}catch(f){Dt(r,o,f)}}var fv=!1;function lS(r,o){if(wd=Tl,r=jm(),hd(r)){if("selectionStart"in r)var c={start:r.selectionStart,end:r.selectionEnd};else e:{c=(c=r.ownerDocument)&&c.defaultView||window;var f=c.getSelection&&c.getSelection();if(f&&f.rangeCount!==0){c=f.anchorNode;var v=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{c.nodeType,x.nodeType}catch{c=null;break e}var E=0,k=-1,F=-1,Q=0,fe=0,pe=r,de=null;t:for(;;){for(var Le;pe!==c||v!==0&&pe.nodeType!==3||(k=E+v),pe!==x||f!==0&&pe.nodeType!==3||(F=E+f),pe.nodeType===3&&(E+=pe.nodeValue.length),(Le=pe.firstChild)!==null;)de=pe,pe=Le;for(;;){if(pe===r)break t;if(de===c&&++Q===v&&(k=E),de===x&&++fe===f&&(F=E),(Le=pe.nextSibling)!==null)break;pe=de,de=pe.parentNode}pe=Le}c=k===-1||F===-1?null:{start:k,end:F}}else c=null}c=c||{start:0,end:0}}else c=null;for(_d={focusedElem:r,selectionRange:c},Tl=!1,Re=o;Re!==null;)if(o=Re,r=o.child,(o.subtreeFlags&1028)!==0&&r!==null)r.return=o,Re=r;else for(;Re!==null;){o=Re;try{var ke=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var De=ke.memoizedProps,zt=ke.memoizedState,j=o.stateNode,O=j.getSnapshotBeforeUpdate(o.elementType===o.type?De:ri(o.type,De),zt);j.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var $=o.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(me){Dt(o,o.return,me)}if(r=o.sibling,r!==null){r.return=o.return,Re=r;break}Re=o.return}return ke=fv,fv=!1,ke}function pa(r,o,c){var f=o.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var v=f=f.next;do{if((v.tag&r)===r){var x=v.destroy;v.destroy=void 0,x!==void 0&&lh(o,c,x)}v=v.next}while(v!==f)}}function ac(r,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var c=o=o.next;do{if((c.tag&r)===r){var f=c.create;c.destroy=f()}c=c.next}while(c!==o)}}function ch(r){var o=r.ref;if(o!==null){var c=r.stateNode;switch(r.tag){case 5:r=c;break;default:r=c}typeof o=="function"?o(r):o.current=r}}function pv(r){var o=r.alternate;o!==null&&(r.alternate=null,pv(o)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(o=r.stateNode,o!==null&&(delete o[xi],delete o[ia],delete o[Ed],delete o[Wb],delete o[jb])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function mv(r){return r.tag===5||r.tag===3||r.tag===4}function gv(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||mv(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function uh(r,o,c){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?c.nodeType===8?c.parentNode.insertBefore(r,o):c.insertBefore(r,o):(c.nodeType===8?(o=c.parentNode,o.insertBefore(r,c)):(o=c,o.appendChild(r)),c=c._reactRootContainer,c!=null||o.onclick!==null||(o.onclick=Bl));else if(f!==4&&(r=r.child,r!==null))for(uh(r,o,c),r=r.sibling;r!==null;)uh(r,o,c),r=r.sibling}function dh(r,o,c){var f=r.tag;if(f===5||f===6)r=r.stateNode,o?c.insertBefore(r,o):c.appendChild(r);else if(f!==4&&(r=r.child,r!==null))for(dh(r,o,c),r=r.sibling;r!==null;)dh(r,o,c),r=r.sibling}var en=null,si=!1;function ur(r,o,c){for(c=c.child;c!==null;)vv(r,o,c),c=c.sibling}function vv(r,o,c){if(yi&&typeof yi.onCommitFiberUnmount=="function")try{yi.onCommitFiberUnmount(wl,c)}catch{}switch(c.tag){case 5:un||Fs(c,o);case 6:var f=en,v=si;en=null,ur(r,o,c),en=f,si=v,en!==null&&(si?(r=en,c=c.stateNode,r.nodeType===8?r.parentNode.removeChild(c):r.removeChild(c)):en.removeChild(c.stateNode));break;case 18:en!==null&&(si?(r=en,c=c.stateNode,r.nodeType===8?Md(r.parentNode,c):r.nodeType===1&&Md(r,c),Xo(r)):Md(en,c.stateNode));break;case 4:f=en,v=si,en=c.stateNode.containerInfo,si=!0,ur(r,o,c),en=f,si=v;break;case 0:case 11:case 14:case 15:if(!un&&(f=c.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){v=f=f.next;do{var x=v,E=x.destroy;x=x.tag,E!==void 0&&((x&2)!==0||(x&4)!==0)&&lh(c,o,E),v=v.next}while(v!==f)}ur(r,o,c);break;case 1:if(!un&&(Fs(c,o),f=c.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=c.memoizedProps,f.state=c.memoizedState,f.componentWillUnmount()}catch(k){Dt(c,o,k)}ur(r,o,c);break;case 21:ur(r,o,c);break;case 22:c.mode&1?(un=(f=un)||c.memoizedState!==null,ur(r,o,c),un=f):ur(r,o,c);break;default:ur(r,o,c)}}function yv(r){var o=r.updateQueue;if(o!==null){r.updateQueue=null;var c=r.stateNode;c===null&&(c=r.stateNode=new aS),o.forEach(function(f){var v=vS.bind(null,r,f);c.has(f)||(c.add(f),f.then(v,v))})}}function oi(r,o){var c=o.deletions;if(c!==null)for(var f=0;f<c.length;f++){var v=c[f];try{var x=r,E=o,k=E;e:for(;k!==null;){switch(k.tag){case 5:en=k.stateNode,si=!1;break e;case 3:en=k.stateNode.containerInfo,si=!0;break e;case 4:en=k.stateNode.containerInfo,si=!0;break e}k=k.return}if(en===null)throw Error(t(160));vv(x,E,v),en=null,si=!1;var F=v.alternate;F!==null&&(F.return=null),v.return=null}catch(Q){Dt(v,o,Q)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)xv(o,r),o=o.sibling}function xv(r,o){var c=r.alternate,f=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(oi(o,r),bi(r),f&4){try{pa(3,r,r.return),ac(3,r)}catch(De){Dt(r,r.return,De)}try{pa(5,r,r.return)}catch(De){Dt(r,r.return,De)}}break;case 1:oi(o,r),bi(r),f&512&&c!==null&&Fs(c,c.return);break;case 5:if(oi(o,r),bi(r),f&512&&c!==null&&Fs(c,c.return),r.flags&32){var v=r.stateNode;try{We(v,"")}catch(De){Dt(r,r.return,De)}}if(f&4&&(v=r.stateNode,v!=null)){var x=r.memoizedProps,E=c!==null?c.memoizedProps:x,k=r.type,F=r.updateQueue;if(r.updateQueue=null,F!==null)try{k==="input"&&x.type==="radio"&&x.name!=null&&Ae(v,x),No(k,E);var Q=No(k,x);for(E=0;E<F.length;E+=2){var fe=F[E],pe=F[E+1];fe==="style"?_t(v,pe):fe==="dangerouslySetInnerHTML"?he(v,pe):fe==="children"?We(v,pe):C(v,fe,pe,Q)}switch(k){case"input":I(v,x);break;case"textarea":qe(v,x);break;case"select":var de=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!x.multiple;var Le=x.value;Le!=null?Me(v,!!x.multiple,Le,!1):de!==!!x.multiple&&(x.defaultValue!=null?Me(v,!!x.multiple,x.defaultValue,!0):Me(v,!!x.multiple,x.multiple?[]:"",!1))}v[ia]=x}catch(De){Dt(r,r.return,De)}}break;case 6:if(oi(o,r),bi(r),f&4){if(r.stateNode===null)throw Error(t(162));v=r.stateNode,x=r.memoizedProps;try{v.nodeValue=x}catch(De){Dt(r,r.return,De)}}break;case 3:if(oi(o,r),bi(r),f&4&&c!==null&&c.memoizedState.isDehydrated)try{Xo(o.containerInfo)}catch(De){Dt(r,r.return,De)}break;case 4:oi(o,r),bi(r);break;case 13:oi(o,r),bi(r),v=r.child,v.flags&8192&&(x=v.memoizedState!==null,v.stateNode.isHidden=x,!x||v.alternate!==null&&v.alternate.memoizedState!==null||(ph=Tt())),f&4&&yv(r);break;case 22:if(fe=c!==null&&c.memoizedState!==null,r.mode&1?(un=(Q=un)||fe,oi(o,r),un=Q):oi(o,r),bi(r),f&8192){if(Q=r.memoizedState!==null,(r.stateNode.isHidden=Q)&&!fe&&(r.mode&1)!==0)for(Re=r,fe=r.child;fe!==null;){for(pe=Re=fe;Re!==null;){switch(de=Re,Le=de.child,de.tag){case 0:case 11:case 14:case 15:pa(4,de,de.return);break;case 1:Fs(de,de.return);var ke=de.stateNode;if(typeof ke.componentWillUnmount=="function"){f=de,c=de.return;try{o=f,ke.props=o.memoizedProps,ke.state=o.memoizedState,ke.componentWillUnmount()}catch(De){Dt(f,c,De)}}break;case 5:Fs(de,de.return);break;case 22:if(de.memoizedState!==null){bv(pe);continue}}Le!==null?(Le.return=de,Re=Le):bv(pe)}fe=fe.sibling}e:for(fe=null,pe=r;;){if(pe.tag===5){if(fe===null){fe=pe;try{v=pe.stateNode,Q?(x=v.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(k=pe.stateNode,F=pe.memoizedProps.style,E=F!=null&&F.hasOwnProperty("display")?F.display:null,k.style.display=gi("display",E))}catch(De){Dt(r,r.return,De)}}}else if(pe.tag===6){if(fe===null)try{pe.stateNode.nodeValue=Q?"":pe.memoizedProps}catch(De){Dt(r,r.return,De)}}else if((pe.tag!==22&&pe.tag!==23||pe.memoizedState===null||pe===r)&&pe.child!==null){pe.child.return=pe,pe=pe.child;continue}if(pe===r)break e;for(;pe.sibling===null;){if(pe.return===null||pe.return===r)break e;fe===pe&&(fe=null),pe=pe.return}fe===pe&&(fe=null),pe.sibling.return=pe.return,pe=pe.sibling}}break;case 19:oi(o,r),bi(r),f&4&&yv(r);break;case 21:break;default:oi(o,r),bi(r)}}function bi(r){var o=r.flags;if(o&2){try{e:{for(var c=r.return;c!==null;){if(mv(c)){var f=c;break e}c=c.return}throw Error(t(160))}switch(f.tag){case 5:var v=f.stateNode;f.flags&32&&(We(v,""),f.flags&=-33);var x=gv(r);dh(r,x,v);break;case 3:case 4:var E=f.stateNode.containerInfo,k=gv(r);uh(r,k,E);break;default:throw Error(t(161))}}catch(F){Dt(r,r.return,F)}r.flags&=-3}o&4096&&(r.flags&=-4097)}function cS(r,o,c){Re=r,wv(r)}function wv(r,o,c){for(var f=(r.mode&1)!==0;Re!==null;){var v=Re,x=v.child;if(v.tag===22&&f){var E=v.memoizedState!==null||oc;if(!E){var k=v.alternate,F=k!==null&&k.memoizedState!==null||un;k=oc;var Q=un;if(oc=E,(un=F)&&!Q)for(Re=v;Re!==null;)E=Re,F=E.child,E.tag===22&&E.memoizedState!==null?Sv(v):F!==null?(F.return=E,Re=F):Sv(v);for(;x!==null;)Re=x,wv(x),x=x.sibling;Re=v,oc=k,un=Q}_v(r)}else(v.subtreeFlags&8772)!==0&&x!==null?(x.return=v,Re=x):_v(r)}}function _v(r){for(;Re!==null;){var o=Re;if((o.flags&8772)!==0){var c=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:un||ac(5,o);break;case 1:var f=o.stateNode;if(o.flags&4&&!un)if(c===null)f.componentDidMount();else{var v=o.elementType===o.type?c.memoizedProps:ri(o.type,c.memoizedProps);f.componentDidUpdate(v,c.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=o.updateQueue;x!==null&&bg(o,x,f);break;case 3:var E=o.updateQueue;if(E!==null){if(c=null,o.child!==null)switch(o.child.tag){case 5:c=o.child.stateNode;break;case 1:c=o.child.stateNode}bg(o,E,c)}break;case 5:var k=o.stateNode;if(c===null&&o.flags&4){c=k;var F=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&c.focus();break;case"img":F.src&&(c.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var Q=o.alternate;if(Q!==null){var fe=Q.memoizedState;if(fe!==null){var pe=fe.dehydrated;pe!==null&&Xo(pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}un||o.flags&512&&ch(o)}catch(de){Dt(o,o.return,de)}}if(o===r){Re=null;break}if(c=o.sibling,c!==null){c.return=o.return,Re=c;break}Re=o.return}}function bv(r){for(;Re!==null;){var o=Re;if(o===r){Re=null;break}var c=o.sibling;if(c!==null){c.return=o.return,Re=c;break}Re=o.return}}function Sv(r){for(;Re!==null;){var o=Re;try{switch(o.tag){case 0:case 11:case 15:var c=o.return;try{ac(4,o)}catch(F){Dt(o,c,F)}break;case 1:var f=o.stateNode;if(typeof f.componentDidMount=="function"){var v=o.return;try{f.componentDidMount()}catch(F){Dt(o,v,F)}}var x=o.return;try{ch(o)}catch(F){Dt(o,x,F)}break;case 5:var E=o.return;try{ch(o)}catch(F){Dt(o,E,F)}}}catch(F){Dt(o,o.return,F)}if(o===r){Re=null;break}var k=o.sibling;if(k!==null){k.return=o.return,Re=k;break}Re=o.return}}var uS=Math.ceil,lc=R.ReactCurrentDispatcher,hh=R.ReactCurrentOwner,Gn=R.ReactCurrentBatchConfig,at=0,qt=null,Vt=null,tn=0,Dn=0,zs=sr(0),Gt=0,ma=null,Yr=0,cc=0,fh=0,ga=null,Mn=null,ph=0,Bs=1/0,Wi=null,uc=!1,mh=null,dr=null,dc=!1,hr=null,hc=0,va=0,gh=null,fc=-1,pc=0;function gn(){return(at&6)!==0?Tt():fc!==-1?fc:fc=Tt()}function fr(r){return(r.mode&1)===0?1:(at&2)!==0&&tn!==0?tn&-tn:Yb.transition!==null?(pc===0&&(pc=gm()),pc):(r=ht,r!==0||(r=window.event,r=r===void 0?16:Em(r.type)),r)}function ai(r,o,c,f){if(50<va)throw va=0,gh=null,Error(t(185));Uo(r,c,f),((at&2)===0||r!==qt)&&(r===qt&&((at&2)===0&&(cc|=c),Gt===4&&pr(r,tn)),En(r,f),c===1&&at===0&&(o.mode&1)===0&&(Bs=Tt()+500,Hl&&ar()))}function En(r,o){var c=r.callbackNode;Y1(r,o);var f=Sl(r,r===qt?tn:0);if(f===0)c!==null&&vs(c),r.callbackNode=null,r.callbackPriority=0;else if(o=f&-f,r.callbackPriority!==o){if(c!=null&&vs(c),o===1)r.tag===0?Xb(Ev.bind(null,r)):ug(Ev.bind(null,r)),Hb(function(){(at&6)===0&&ar()}),c=null;else{switch(vm(f)){case 1:c=$u;break;case 4:c=pm;break;case 16:c=xl;break;case 536870912:c=mm;break;default:c=xl}c=Dv(c,Mv.bind(null,r))}r.callbackPriority=o,r.callbackNode=c}}function Mv(r,o){if(fc=-1,pc=0,(at&6)!==0)throw Error(t(327));var c=r.callbackNode;if(Os()&&r.callbackNode!==c)return null;var f=Sl(r,r===qt?tn:0);if(f===0)return null;if((f&30)!==0||(f&r.expiredLanes)!==0||o)o=mc(r,f);else{o=f;var v=at;at|=2;var x=Av();(qt!==r||tn!==o)&&(Wi=null,Bs=Tt()+500,$r(r,o));do try{fS();break}catch(k){Tv(r,k)}while(!0);Id(),lc.current=x,at=v,Vt!==null?o=0:(qt=null,tn=0,o=Gt)}if(o!==0){if(o===2&&(v=Zu(r),v!==0&&(f=v,o=vh(r,v))),o===1)throw c=ma,$r(r,0),pr(r,f),En(r,Tt()),c;if(o===6)pr(r,f);else{if(v=r.current.alternate,(f&30)===0&&!dS(v)&&(o=mc(r,f),o===2&&(x=Zu(r),x!==0&&(f=x,o=vh(r,x))),o===1))throw c=ma,$r(r,0),pr(r,f),En(r,Tt()),c;switch(r.finishedWork=v,r.finishedLanes=f,o){case 0:case 1:throw Error(t(345));case 2:Zr(r,Mn,Wi);break;case 3:if(pr(r,f),(f&130023424)===f&&(o=ph+500-Tt(),10<o)){if(Sl(r,0)!==0)break;if(v=r.suspendedLanes,(v&f)!==f){gn(),r.pingedLanes|=r.suspendedLanes&v;break}r.timeoutHandle=Sd(Zr.bind(null,r,Mn,Wi),o);break}Zr(r,Mn,Wi);break;case 4:if(pr(r,f),(f&4194240)===f)break;for(o=r.eventTimes,v=-1;0<f;){var E=31-ti(f);x=1<<E,E=o[E],E>v&&(v=E),f&=~x}if(f=v,f=Tt()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*uS(f/1960))-f,10<f){r.timeoutHandle=Sd(Zr.bind(null,r,Mn,Wi),f);break}Zr(r,Mn,Wi);break;case 5:Zr(r,Mn,Wi);break;default:throw Error(t(329))}}}return En(r,Tt()),r.callbackNode===c?Mv.bind(null,r):null}function vh(r,o){var c=ga;return r.current.memoizedState.isDehydrated&&($r(r,o).flags|=256),r=mc(r,o),r!==2&&(o=Mn,Mn=c,o!==null&&yh(o)),r}function yh(r){Mn===null?Mn=r:Mn.push.apply(Mn,r)}function dS(r){for(var o=r;;){if(o.flags&16384){var c=o.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var f=0;f<c.length;f++){var v=c[f],x=v.getSnapshot;v=v.value;try{if(!ni(x(),v))return!1}catch{return!1}}}if(c=o.child,o.subtreeFlags&16384&&c!==null)c.return=o,o=c;else{if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function pr(r,o){for(o&=~fh,o&=~cc,r.suspendedLanes|=o,r.pingedLanes&=~o,r=r.expirationTimes;0<o;){var c=31-ti(o),f=1<<c;r[c]=-1,o&=~f}}function Ev(r){if((at&6)!==0)throw Error(t(327));Os();var o=Sl(r,0);if((o&1)===0)return En(r,Tt()),null;var c=mc(r,o);if(r.tag!==0&&c===2){var f=Zu(r);f!==0&&(o=f,c=vh(r,f))}if(c===1)throw c=ma,$r(r,0),pr(r,o),En(r,Tt()),c;if(c===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=o,Zr(r,Mn,Wi),En(r,Tt()),null}function xh(r,o){var c=at;at|=1;try{return r(o)}finally{at=c,at===0&&(Bs=Tt()+500,Hl&&ar())}}function qr(r){hr!==null&&hr.tag===0&&(at&6)===0&&Os();var o=at;at|=1;var c=Gn.transition,f=ht;try{if(Gn.transition=null,ht=1,r)return r()}finally{ht=f,Gn.transition=c,at=o,(at&6)===0&&ar()}}function wh(){Dn=zs.current,wt(zs)}function $r(r,o){r.finishedWork=null,r.finishedLanes=0;var c=r.timeoutHandle;if(c!==-1&&(r.timeoutHandle=-1,Ub(c)),Vt!==null)for(c=Vt.return;c!==null;){var f=c;switch(Ld(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Vl();break;case 3:Is(),wt(_n),wt(an),Hd();break;case 5:Vd(f);break;case 4:Is();break;case 13:wt(At);break;case 19:wt(At);break;case 10:Nd(f.type._context);break;case 22:case 23:wh()}c=c.return}if(qt=r,Vt=r=mr(r.current,null),tn=Dn=o,Gt=0,ma=null,fh=cc=Yr=0,Mn=ga=null,Wr!==null){for(o=0;o<Wr.length;o++)if(c=Wr[o],f=c.interleaved,f!==null){c.interleaved=null;var v=f.next,x=c.pending;if(x!==null){var E=x.next;x.next=v,f.next=E}c.pending=f}Wr=null}return r}function Tv(r,o){do{var c=Vt;try{if(Id(),Kl.current=nc,Ql){for(var f=Ct.memoizedState;f!==null;){var v=f.queue;v!==null&&(v.pending=null),f=f.next}Ql=!1}if(Xr=0,Yt=Ht=Ct=null,ca=!1,ua=0,hh.current=null,c===null||c.return===null){Gt=1,ma=o,Vt=null;break}e:{var x=r,E=c.return,k=c,F=o;if(o=tn,k.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var Q=F,fe=k,pe=fe.tag;if((fe.mode&1)===0&&(pe===0||pe===11||pe===15)){var de=fe.alternate;de?(fe.updateQueue=de.updateQueue,fe.memoizedState=de.memoizedState,fe.lanes=de.lanes):(fe.updateQueue=null,fe.memoizedState=null)}var Le=Jg(E);if(Le!==null){Le.flags&=-257,Kg(Le,E,k,x,o),Le.mode&1&&Zg(x,Q,o),o=Le,F=Q;var ke=o.updateQueue;if(ke===null){var De=new Set;De.add(F),o.updateQueue=De}else ke.add(F);break e}else{if((o&1)===0){Zg(x,Q,o),_h();break e}F=Error(t(426))}}else if(bt&&k.mode&1){var zt=Jg(E);if(zt!==null){(zt.flags&65536)===0&&(zt.flags|=256),Kg(zt,E,k,x,o),kd(Ns(F,k));break e}}x=F=Ns(F,k),Gt!==4&&(Gt=2),ga===null?ga=[x]:ga.push(x),x=E;do{switch(x.tag){case 3:x.flags|=65536,o&=-o,x.lanes|=o;var j=qg(x,F,o);_g(x,j);break e;case 1:k=F;var O=x.type,$=x.stateNode;if((x.flags&128)===0&&(typeof O.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(dr===null||!dr.has($)))){x.flags|=65536,o&=-o,x.lanes|=o;var me=$g(x,k,o);_g(x,me);break e}}x=x.return}while(x!==null)}Lv(c)}catch(Fe){o=Fe,Vt===c&&c!==null&&(Vt=c=c.return);continue}break}while(!0)}function Av(){var r=lc.current;return lc.current=nc,r===null?nc:r}function _h(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),qt===null||(Yr&268435455)===0&&(cc&268435455)===0||pr(qt,tn)}function mc(r,o){var c=at;at|=2;var f=Av();(qt!==r||tn!==o)&&(Wi=null,$r(r,o));do try{hS();break}catch(v){Tv(r,v)}while(!0);if(Id(),at=c,lc.current=f,Vt!==null)throw Error(t(261));return qt=null,tn=0,Gt}function hS(){for(;Vt!==null;)Cv(Vt)}function fS(){for(;Vt!==null&&!on();)Cv(Vt)}function Cv(r){var o=kv(r.alternate,r,Dn);r.memoizedProps=r.pendingProps,o===null?Lv(r):Vt=o,hh.current=null}function Lv(r){var o=r;do{var c=o.alternate;if(r=o.return,(o.flags&32768)===0){if(c=sS(c,o,Dn),c!==null){Vt=c;return}}else{if(c=oS(c,o),c!==null){c.flags&=32767,Vt=c;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Gt=6,Vt=null;return}}if(o=o.sibling,o!==null){Vt=o;return}Vt=o=r}while(o!==null);Gt===0&&(Gt=5)}function Zr(r,o,c){var f=ht,v=Gn.transition;try{Gn.transition=null,ht=1,pS(r,o,c,f)}finally{Gn.transition=v,ht=f}return null}function pS(r,o,c,f){do Os();while(hr!==null);if((at&6)!==0)throw Error(t(327));c=r.finishedWork;var v=r.finishedLanes;if(c===null)return null;if(r.finishedWork=null,r.finishedLanes=0,c===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var x=c.lanes|c.childLanes;if(q1(r,x),r===qt&&(Vt=qt=null,tn=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||dc||(dc=!0,Dv(xl,function(){return Os(),null})),x=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||x){x=Gn.transition,Gn.transition=null;var E=ht;ht=1;var k=at;at|=4,hh.current=null,lS(r,c),xv(c,r),Ib(_d),Tl=!!wd,_d=wd=null,r.current=c,cS(c),ei(),at=k,ht=E,Gn.transition=x}else r.current=c;if(dc&&(dc=!1,hr=r,hc=v),x=r.pendingLanes,x===0&&(dr=null),H1(c.stateNode),En(r,Tt()),o!==null)for(f=r.onRecoverableError,c=0;c<o.length;c++)v=o[c],f(v.value,{componentStack:v.stack,digest:v.digest});if(uc)throw uc=!1,r=mh,mh=null,r;return(hc&1)!==0&&r.tag!==0&&Os(),x=r.pendingLanes,(x&1)!==0?r===gh?va++:(va=0,gh=r):va=0,ar(),null}function Os(){if(hr!==null){var r=vm(hc),o=Gn.transition,c=ht;try{if(Gn.transition=null,ht=16>r?16:r,hr===null)var f=!1;else{if(r=hr,hr=null,hc=0,(at&6)!==0)throw Error(t(331));var v=at;for(at|=4,Re=r.current;Re!==null;){var x=Re,E=x.child;if((Re.flags&16)!==0){var k=x.deletions;if(k!==null){for(var F=0;F<k.length;F++){var Q=k[F];for(Re=Q;Re!==null;){var fe=Re;switch(fe.tag){case 0:case 11:case 15:pa(8,fe,x)}var pe=fe.child;if(pe!==null)pe.return=fe,Re=pe;else for(;Re!==null;){fe=Re;var de=fe.sibling,Le=fe.return;if(pv(fe),fe===Q){Re=null;break}if(de!==null){de.return=Le,Re=de;break}Re=Le}}}var ke=x.alternate;if(ke!==null){var De=ke.child;if(De!==null){ke.child=null;do{var zt=De.sibling;De.sibling=null,De=zt}while(De!==null)}}Re=x}}if((x.subtreeFlags&2064)!==0&&E!==null)E.return=x,Re=E;else e:for(;Re!==null;){if(x=Re,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:pa(9,x,x.return)}var j=x.sibling;if(j!==null){j.return=x.return,Re=j;break e}Re=x.return}}var O=r.current;for(Re=O;Re!==null;){E=Re;var $=E.child;if((E.subtreeFlags&2064)!==0&&$!==null)$.return=E,Re=$;else e:for(E=O;Re!==null;){if(k=Re,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:ac(9,k)}}catch(Fe){Dt(k,k.return,Fe)}if(k===E){Re=null;break e}var me=k.sibling;if(me!==null){me.return=k.return,Re=me;break e}Re=k.return}}if(at=v,ar(),yi&&typeof yi.onPostCommitFiberRoot=="function")try{yi.onPostCommitFiberRoot(wl,r)}catch{}f=!0}return f}finally{ht=c,Gn.transition=o}}return!1}function Pv(r,o,c){o=Ns(c,o),o=qg(r,o,1),r=cr(r,o,1),o=gn(),r!==null&&(Uo(r,1,o),En(r,o))}function Dt(r,o,c){if(r.tag===3)Pv(r,r,c);else for(;o!==null;){if(o.tag===3){Pv(o,r,c);break}else if(o.tag===1){var f=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(dr===null||!dr.has(f))){r=Ns(c,r),r=$g(o,r,1),o=cr(o,r,1),r=gn(),o!==null&&(Uo(o,1,r),En(o,r));break}}o=o.return}}function mS(r,o,c){var f=r.pingCache;f!==null&&f.delete(o),o=gn(),r.pingedLanes|=r.suspendedLanes&c,qt===r&&(tn&c)===c&&(Gt===4||Gt===3&&(tn&130023424)===tn&&500>Tt()-ph?$r(r,0):fh|=c),En(r,o)}function Rv(r,o){o===0&&((r.mode&1)===0?o=1:(o=bl,bl<<=1,(bl&130023424)===0&&(bl=4194304)));var c=gn();r=Ui(r,o),r!==null&&(Uo(r,o,c),En(r,c))}function gS(r){var o=r.memoizedState,c=0;o!==null&&(c=o.retryLane),Rv(r,c)}function vS(r,o){var c=0;switch(r.tag){case 13:var f=r.stateNode,v=r.memoizedState;v!==null&&(c=v.retryLane);break;case 19:f=r.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(o),Rv(r,c)}var kv;kv=function(r,o,c){if(r!==null)if(r.memoizedProps!==o.pendingProps||_n.current)Sn=!0;else{if((r.lanes&c)===0&&(o.flags&128)===0)return Sn=!1,rS(r,o,c);Sn=(r.flags&131072)!==0}else Sn=!1,bt&&(o.flags&1048576)!==0&&dg(o,Wl,o.index);switch(o.lanes=0,o.tag){case 2:var f=o.type;sc(r,o),r=o.pendingProps;var v=As(o,an.current);Ds(o,c),v=jd(null,o,f,r,v,c);var x=Xd();return o.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,bn(f)?(x=!0,Ul(o)):x=!1,o.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,Bd(o),v.updater=ic,o.stateNode=v,v._reactInternals=o,Kd(o,f,r,c),o=nh(null,o,f,!0,x,c)):(o.tag=0,bt&&x&&Cd(o),mn(null,o,v,c),o=o.child),o;case 16:f=o.elementType;e:{switch(sc(r,o),r=o.pendingProps,v=f._init,f=v(f._payload),o.type=f,v=o.tag=xS(f),r=ri(f,r),v){case 0:o=th(null,o,f,r,c);break e;case 1:o=rv(null,o,f,r,c);break e;case 11:o=Qg(null,o,f,r,c);break e;case 14:o=ev(null,o,f,ri(f.type,r),c);break e}throw Error(t(306,f,""))}return o;case 0:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:ri(f,v),th(r,o,f,v,c);case 1:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:ri(f,v),rv(r,o,f,v,c);case 3:e:{if(sv(o),r===null)throw Error(t(387));f=o.pendingProps,x=o.memoizedState,v=x.element,wg(r,o),Zl(o,f,null,c);var E=o.memoizedState;if(f=E.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},o.updateQueue.baseState=x,o.memoizedState=x,o.flags&256){v=Ns(Error(t(423)),o),o=ov(r,o,f,c,v);break e}else if(f!==v){v=Ns(Error(t(424)),o),o=ov(r,o,f,c,v);break e}else for(kn=rr(o.stateNode.containerInfo.firstChild),Rn=o,bt=!0,ii=null,c=yg(o,null,f,c),o.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Ps(),f===v){o=Gi(r,o,c);break e}mn(r,o,f,c)}o=o.child}return o;case 5:return Sg(o),r===null&&Rd(o),f=o.type,v=o.pendingProps,x=r!==null?r.memoizedProps:null,E=v.children,bd(f,v)?E=null:x!==null&&bd(f,x)&&(o.flags|=32),iv(r,o),mn(r,o,E,c),o.child;case 6:return r===null&&Rd(o),null;case 13:return av(r,o,c);case 4:return Od(o,o.stateNode.containerInfo),f=o.pendingProps,r===null?o.child=Rs(o,null,f,c):mn(r,o,f,c),o.child;case 11:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:ri(f,v),Qg(r,o,f,v,c);case 7:return mn(r,o,o.pendingProps,c),o.child;case 8:return mn(r,o,o.pendingProps.children,c),o.child;case 12:return mn(r,o,o.pendingProps.children,c),o.child;case 10:e:{if(f=o.type._context,v=o.pendingProps,x=o.memoizedProps,E=v.value,vt(Yl,f._currentValue),f._currentValue=E,x!==null)if(ni(x.value,E)){if(x.children===v.children&&!_n.current){o=Gi(r,o,c);break e}}else for(x=o.child,x!==null&&(x.return=o);x!==null;){var k=x.dependencies;if(k!==null){E=x.child;for(var F=k.firstContext;F!==null;){if(F.context===f){if(x.tag===1){F=Hi(-1,c&-c),F.tag=2;var Q=x.updateQueue;if(Q!==null){Q=Q.shared;var fe=Q.pending;fe===null?F.next=F:(F.next=fe.next,fe.next=F),Q.pending=F}}x.lanes|=c,F=x.alternate,F!==null&&(F.lanes|=c),Fd(x.return,c,o),k.lanes|=c;break}F=F.next}}else if(x.tag===10)E=x.type===o.type?null:x.child;else if(x.tag===18){if(E=x.return,E===null)throw Error(t(341));E.lanes|=c,k=E.alternate,k!==null&&(k.lanes|=c),Fd(E,c,o),E=x.sibling}else E=x.child;if(E!==null)E.return=x;else for(E=x;E!==null;){if(E===o){E=null;break}if(x=E.sibling,x!==null){x.return=E.return,E=x;break}E=E.return}x=E}mn(r,o,v.children,c),o=o.child}return o;case 9:return v=o.type,f=o.pendingProps.children,Ds(o,c),v=Un(v),f=f(v),o.flags|=1,mn(r,o,f,c),o.child;case 14:return f=o.type,v=ri(f,o.pendingProps),v=ri(f.type,v),ev(r,o,f,v,c);case 15:return tv(r,o,o.type,o.pendingProps,c);case 17:return f=o.type,v=o.pendingProps,v=o.elementType===f?v:ri(f,v),sc(r,o),o.tag=1,bn(f)?(r=!0,Ul(o)):r=!1,Ds(o,c),Xg(o,f,v),Kd(o,f,v,c),nh(null,o,f,!0,r,c);case 19:return cv(r,o,c);case 22:return nv(r,o,c)}throw Error(t(156,o.tag))};function Dv(r,o){return Et(r,o)}function yS(r,o,c,f){this.tag=r,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(r,o,c,f){return new yS(r,o,c,f)}function bh(r){return r=r.prototype,!(!r||!r.isReactComponent)}function xS(r){if(typeof r=="function")return bh(r)?1:0;if(r!=null){if(r=r.$$typeof,r===oe)return 11;if(r===W)return 14}return 2}function mr(r,o){var c=r.alternate;return c===null?(c=Wn(r.tag,o,r.key,r.mode),c.elementType=r.elementType,c.type=r.type,c.stateNode=r.stateNode,c.alternate=r,r.alternate=c):(c.pendingProps=o,c.type=r.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=r.flags&14680064,c.childLanes=r.childLanes,c.lanes=r.lanes,c.child=r.child,c.memoizedProps=r.memoizedProps,c.memoizedState=r.memoizedState,c.updateQueue=r.updateQueue,o=r.dependencies,c.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},c.sibling=r.sibling,c.index=r.index,c.ref=r.ref,c}function gc(r,o,c,f,v,x){var E=2;if(f=r,typeof r=="function")bh(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case B:return Jr(c.children,v,x,o);case U:E=8,v|=8;break;case q:return r=Wn(12,c,o,v|2),r.elementType=q,r.lanes=x,r;case z:return r=Wn(13,c,o,v),r.elementType=z,r.lanes=x,r;case G:return r=Wn(19,c,o,v),r.elementType=G,r.lanes=x,r;case ie:return vc(c,v,x,o);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ee:E=10;break e;case ae:E=9;break e;case oe:E=11;break e;case W:E=14;break e;case V:E=16,f=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return o=Wn(E,c,o,v),o.elementType=r,o.type=f,o.lanes=x,o}function Jr(r,o,c,f){return r=Wn(7,r,f,o),r.lanes=c,r}function vc(r,o,c,f){return r=Wn(22,r,f,o),r.elementType=ie,r.lanes=c,r.stateNode={isHidden:!1},r}function Sh(r,o,c){return r=Wn(6,r,null,o),r.lanes=c,r}function Mh(r,o,c){return o=Wn(4,r.children!==null?r.children:[],r.key,o),o.lanes=c,o.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},o}function wS(r,o,c,f,v){this.tag=o,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ju(0),this.expirationTimes=Ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.identifierPrefix=f,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function Eh(r,o,c,f,v,x,E,k,F){return r=new wS(r,o,c,k,F),o===1?(o=1,x===!0&&(o|=8)):o=0,x=Wn(3,null,null,o),r.current=x,x.stateNode=r,x.memoizedState={element:f,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bd(x),r}function _S(r,o,c){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:f==null?null:""+f,children:r,containerInfo:o,implementation:c}}function Iv(r){if(!r)return or;r=r._reactInternals;e:{if(nt(r)!==r||r.tag!==1)throw Error(t(170));var o=r;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(bn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(r.tag===1){var c=r.type;if(bn(c))return lg(r,c,o)}return o}function Nv(r,o,c,f,v,x,E,k,F){return r=Eh(c,f,!0,r,v,x,E,k,F),r.context=Iv(null),c=r.current,f=gn(),v=fr(c),x=Hi(f,v),x.callback=o??null,cr(c,x,v),r.current.lanes=v,Uo(r,v,f),En(r,f),r}function yc(r,o,c,f){var v=o.current,x=gn(),E=fr(v);return c=Iv(c),o.context===null?o.context=c:o.pendingContext=c,o=Hi(x,E),o.payload={element:r},f=f===void 0?null:f,f!==null&&(o.callback=f),r=cr(v,o,E),r!==null&&(ai(r,v,E,x),$l(r,v,E)),E}function xc(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Fv(r,o){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var c=r.retryLane;r.retryLane=c!==0&&c<o?c:o}}function Th(r,o){Fv(r,o),(r=r.alternate)&&Fv(r,o)}function bS(){return null}var zv=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ah(r){this._internalRoot=r}wc.prototype.render=Ah.prototype.render=function(r){var o=this._internalRoot;if(o===null)throw Error(t(409));yc(r,o,null,null)},wc.prototype.unmount=Ah.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var o=r.containerInfo;qr(function(){yc(null,r,null,null)}),o[zi]=null}};function wc(r){this._internalRoot=r}wc.prototype.unstable_scheduleHydration=function(r){if(r){var o=wm();r={blockedOn:null,target:r,priority:o};for(var c=0;c<tr.length&&o!==0&&o<tr[c].priority;c++);tr.splice(c,0,r),c===0&&Sm(r)}};function Ch(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function _c(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Bv(){}function SS(r,o,c,f,v){if(v){if(typeof f=="function"){var x=f;f=function(){var Q=xc(E);x.call(Q)}}var E=Nv(o,f,r,0,null,!1,!1,"",Bv);return r._reactRootContainer=E,r[zi]=E.current,ta(r.nodeType===8?r.parentNode:r),qr(),E}for(;v=r.lastChild;)r.removeChild(v);if(typeof f=="function"){var k=f;f=function(){var Q=xc(F);k.call(Q)}}var F=Eh(r,0,!1,null,null,!1,!1,"",Bv);return r._reactRootContainer=F,r[zi]=F.current,ta(r.nodeType===8?r.parentNode:r),qr(function(){yc(o,F,c,f)}),F}function bc(r,o,c,f,v){var x=c._reactRootContainer;if(x){var E=x;if(typeof v=="function"){var k=v;v=function(){var F=xc(E);k.call(F)}}yc(o,E,r,v)}else E=SS(c,o,r,v,f);return xc(E)}ym=function(r){switch(r.tag){case 3:var o=r.stateNode;if(o.current.memoizedState.isDehydrated){var c=Vo(o.pendingLanes);c!==0&&(Ku(o,c|1),En(o,Tt()),(at&6)===0&&(Bs=Tt()+500,ar()))}break;case 13:qr(function(){var f=Ui(r,1);if(f!==null){var v=gn();ai(f,r,1,v)}}),Th(r,1)}},Qu=function(r){if(r.tag===13){var o=Ui(r,134217728);if(o!==null){var c=gn();ai(o,r,134217728,c)}Th(r,134217728)}},xm=function(r){if(r.tag===13){var o=fr(r),c=Ui(r,o);if(c!==null){var f=gn();ai(c,r,o,f)}Th(r,o)}},wm=function(){return ht},_m=function(r,o){var c=ht;try{return ht=r,o()}finally{ht=c}},Qn=function(r,o,c){switch(o){case"input":if(I(r,c),o=c.name,c.type==="radio"&&o!=null){for(c=r;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<c.length;o++){var f=c[o];if(f!==r&&f.form===r.form){var v=Ol(f);if(!v)throw Error(t(90));ge(f),I(f,v)}}}break;case"textarea":qe(r,c);break;case"select":o=c.value,o!=null&&Me(r,!!c.multiple,o,!1)}},Bo=xh,yl=qr;var MS={usingClientEntryPoint:!1,Events:[ra,Es,Ol,gs,zo,xh]},ya={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ES={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=kt(r),r===null?null:r.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||bS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{wl=Sc.inject(ES),yi=Sc}catch{}}return Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=MS,Tn.createPortal=function(r,o){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ch(o))throw Error(t(200));return _S(r,o,null,c)},Tn.createRoot=function(r,o){if(!Ch(r))throw Error(t(299));var c=!1,f="",v=zv;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),o=Eh(r,1,!1,null,null,c,!1,f,v),r[zi]=o.current,ta(r.nodeType===8?r.parentNode:r),new Ah(o)},Tn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var o=r._reactInternals;if(o===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=kt(o),r=r===null?null:r.stateNode,r},Tn.flushSync=function(r){return qr(r)},Tn.hydrate=function(r,o,c){if(!_c(o))throw Error(t(200));return bc(null,r,o,!0,c)},Tn.hydrateRoot=function(r,o,c){if(!Ch(r))throw Error(t(405));var f=c!=null&&c.hydratedSources||null,v=!1,x="",E=zv;if(c!=null&&(c.unstable_strictMode===!0&&(v=!0),c.identifierPrefix!==void 0&&(x=c.identifierPrefix),c.onRecoverableError!==void 0&&(E=c.onRecoverableError)),o=Nv(o,null,r,1,c??null,v,!1,x,E),r[zi]=o.current,ta(r),f)for(r=0;r<f.length;r++)c=f[r],v=c._getVersion,v=v(c._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[c,v]:o.mutableSourceEagerHydrationData.push(c,v);return new wc(o)},Tn.render=function(r,o,c){if(!_c(o))throw Error(t(200));return bc(null,r,o,!1,c)},Tn.unmountComponentAtNode=function(r){if(!_c(r))throw Error(t(40));return r._reactRootContainer?(qr(function(){bc(null,null,r,!1,function(){r._reactRootContainer=null,r[zi]=null})}),!0):!1},Tn.unstable_batchedUpdates=xh,Tn.unstable_renderSubtreeIntoContainer=function(r,o,c,f){if(!_c(c))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return bc(r,o,c,!1,f)},Tn.version="18.3.1-next-f1338f8080-20240426",Tn}var Xv;function Yx(){if(Xv)return Rh.exports;Xv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Rh.exports=FS(),Rh.exports}var Yv;function zS(){if(Yv)return Mc;Yv=1;var n=Yx();return Mc.createRoot=n.createRoot,Mc.hydrateRoot=n.hydrateRoot,Mc}var BS=zS();Yx();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Za.apply(null,arguments)}var Cr;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Cr||(Cr={}));const qv="popstate";function OS(n){n===void 0&&(n={});function e(i,s){let{pathname:a,search:l,hash:u}=i.location;return Df("",{pathname:a,search:l,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(i,s){return typeof s=="string"?s:du(s)}return US(e,t,null,n)}function Nt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function qx(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function VS(){return Math.random().toString(36).substr(2,8)}function $v(n,e){return{usr:n.state,key:n.key,idx:e}}function Df(n,e,t,i){return t===void 0&&(t=null),Za({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?bo(e):e,{state:t,key:e&&e.key||i||VS()})}function du(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function bo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function US(n,e,t,i){i===void 0&&(i={});let{window:s=document.defaultView,v5Compat:a=!1}=i,l=s.history,u=Cr.Pop,d=null,h=p();h==null&&(h=0,l.replaceState(Za({},l.state,{idx:h}),""));function p(){return(l.state||{idx:null}).idx}function m(){u=Cr.Pop;let M=p(),b=M==null?null:M-h;h=M,d&&d({action:u,location:S.location,delta:b})}function g(M,b){u=Cr.Push;let w=Df(S.location,M,b);h=p()+1;let C=$v(w,h),R=S.createHref(w);try{l.pushState(C,"",R)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;s.location.assign(R)}a&&d&&d({action:u,location:S.location,delta:1})}function y(M,b){u=Cr.Replace;let w=Df(S.location,M,b);h=p();let C=$v(w,h),R=S.createHref(w);l.replaceState(C,"",R),a&&d&&d({action:u,location:S.location,delta:0})}function _(M){let b=s.location.origin!=="null"?s.location.origin:s.location.href,w=typeof M=="string"?M:du(M);return w=w.replace(/ $/,"%20"),Nt(b,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,b)}let S={get action(){return u},get location(){return n(s,l)},listen(M){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(qv,m),d=M,()=>{s.removeEventListener(qv,m),d=null}},createHref(M){return e(s,M)},createURL:_,encodeLocation(M){let b=_(M);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:g,replace:y,go(M){return l.go(M)}};return S}var Zv;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Zv||(Zv={}));function HS(n,e,t){return t===void 0&&(t="/"),GS(n,e,t)}function GS(n,e,t,i){let s=typeof e=="string"?bo(e):e,a=vo(s.pathname||"/",t);if(a==null)return null;let l=$x(n);WS(l);let u=null,d=tM(a);for(let h=0;u==null&&h<l.length;++h)u=QS(l[h],d);return u}function $x(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let s=(a,l,u)=>{let d={relativePath:u===void 0?a.path||"":u,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};d.relativePath.startsWith("/")&&(Nt(d.relativePath.startsWith(i),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(i.length));let h=Lr([i,d.relativePath]),p=t.concat(d);a.children&&a.children.length>0&&(Nt(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),$x(a.children,e,p,h)),!(a.path==null&&!a.index)&&e.push({path:h,score:JS(h,a.index),routesMeta:p})};return n.forEach((a,l)=>{var u;if(a.path===""||!((u=a.path)!=null&&u.includes("?")))s(a,l);else for(let d of Zx(a.path))s(a,l,d)}),e}function Zx(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,s=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return s?[a,""]:[a];let l=Zx(i.join("/")),u=[];return u.push(...l.map(d=>d===""?a:[a,d].join("/"))),s&&u.push(...l),u.map(d=>n.startsWith("/")&&d===""?"/":d)}function WS(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:KS(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const jS=/^:[\w-]+$/,XS=3,YS=2,qS=1,$S=10,ZS=-2,Jv=n=>n==="*";function JS(n,e){let t=n.split("/"),i=t.length;return t.some(Jv)&&(i+=ZS),e&&(i+=YS),t.filter(s=>!Jv(s)).reduce((s,a)=>s+(jS.test(a)?XS:a===""?qS:$S),i)}function KS(n,e){return n.length===e.length&&n.slice(0,-1).every((i,s)=>i===e[s])?n[n.length-1]-e[e.length-1]:0}function QS(n,e,t){let{routesMeta:i}=n,s={},a="/",l=[];for(let u=0;u<i.length;++u){let d=i[u],h=u===i.length-1,p=a==="/"?e:e.slice(a.length)||"/",m=If({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},p),g=d.route;if(!m)return null;Object.assign(s,m.params),l.push({params:s,pathname:Lr([a,m.pathname]),pathnameBase:rM(Lr([a,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(a=Lr([a,m.pathnameBase]))}return l}function If(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=eM(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let a=s[0],l=a.replace(/(.)\/+$/,"$1"),u=s.slice(1);return{params:i.reduce((h,p,m)=>{let{paramName:g,isOptional:y}=p;if(g==="*"){let S=u[m]||"";l=a.slice(0,a.length-S.length).replace(/(.)\/+$/,"$1")}const _=u[m];return y&&!_?h[g]=void 0:h[g]=(_||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:l,pattern:n}}function eM(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),qx(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,u,d)=>(i.push({paramName:u,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function tM(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qx(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function vo(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function nM(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:s=""}=typeof n=="string"?bo(n):n,a;return t?(t=Qx(t),t.startsWith("/")?a=Kv(t.substring(1),"/"):a=Kv(t,e)):a=e,{pathname:a,search:sM(i),hash:oM(s)}}function Kv(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function Ih(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iM(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Jx(n,e){let t=iM(n);return e?t.map((i,s)=>s===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Kx(n,e,t,i){i===void 0&&(i=!1);let s;typeof n=="string"?s=bo(n):(s=Za({},n),Nt(!s.pathname||!s.pathname.includes("?"),Ih("?","pathname","search",s)),Nt(!s.pathname||!s.pathname.includes("#"),Ih("#","pathname","hash",s)),Nt(!s.search||!s.search.includes("#"),Ih("#","search","hash",s)));let a=n===""||s.pathname==="",l=a?"/":s.pathname,u;if(l==null)u=t;else{let m=e.length-1;if(!i&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),m-=1;s.pathname=g.join("/")}u=m>=0?e[m]:"/"}let d=nM(s,u),h=l&&l!=="/"&&l.endsWith("/"),p=(a||l===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(h||p)&&(d.pathname+="/"),d}const Qx=n=>n.replace(/\/\/+/g,"/"),Lr=n=>Qx(n.join("/")),rM=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),sM=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,oM=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function aM(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const ew=["post","put","patch","delete"];new Set(ew);const lM=["get",...ew];new Set(lM);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ja.apply(null,arguments)}const Cu=Y.createContext(null),tw=Y.createContext(null),Nr=Y.createContext(null),Lu=Y.createContext(null),cs=Y.createContext({outlet:null,matches:[],isDataRoute:!1}),nw=Y.createContext(null);function cM(n,e){let{relative:t}=e===void 0?{}:e;cl()||Nt(!1);let{basename:i,navigator:s}=Y.useContext(Nr),{hash:a,pathname:l,search:u}=Pu(n,{relative:t}),d=l;return i!=="/"&&(d=l==="/"?i:Lr([i,l])),s.createHref({pathname:d,search:u,hash:a})}function cl(){return Y.useContext(Lu)!=null}function us(){return cl()||Nt(!1),Y.useContext(Lu).location}function iw(n){Y.useContext(Nr).static||Y.useLayoutEffect(n)}function uM(){let{isDataRoute:n}=Y.useContext(cs);return n?SM():dM()}function dM(){cl()||Nt(!1);let n=Y.useContext(Cu),{basename:e,future:t,navigator:i}=Y.useContext(Nr),{matches:s}=Y.useContext(cs),{pathname:a}=us(),l=JSON.stringify(Jx(s,t.v7_relativeSplatPath)),u=Y.useRef(!1);return iw(()=>{u.current=!0}),Y.useCallback(function(h,p){if(p===void 0&&(p={}),!u.current)return;if(typeof h=="number"){i.go(h);return}let m=Kx(h,JSON.parse(l),a,p.relative==="path");n==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Lr([e,m.pathname])),(p.replace?i.replace:i.push)(m,p.state,p)},[e,i,l,a,n])}function Pu(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=Y.useContext(Nr),{matches:s}=Y.useContext(cs),{pathname:a}=us(),l=JSON.stringify(Jx(s,i.v7_relativeSplatPath));return Y.useMemo(()=>Kx(n,JSON.parse(l),a,t==="path"),[n,l,a,t])}function hM(n,e){return fM(n,e)}function fM(n,e,t,i){cl()||Nt(!1);let{navigator:s}=Y.useContext(Nr),{matches:a}=Y.useContext(cs),l=a[a.length-1],u=l?l.params:{};l&&l.pathname;let d=l?l.pathnameBase:"/";l&&l.route;let h=us(),p;if(e){var m;let M=typeof e=="string"?bo(e):e;d==="/"||(m=M.pathname)!=null&&m.startsWith(d)||Nt(!1),p=M}else p=h;let g=p.pathname||"/",y=g;if(d!=="/"){let M=d.replace(/^\//,"").split("/");y="/"+g.replace(/^\//,"").split("/").slice(M.length).join("/")}let _=HS(n,{pathname:y}),S=yM(_&&_.map(M=>Object.assign({},M,{params:Object.assign({},u,M.params),pathname:Lr([d,s.encodeLocation?s.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?d:Lr([d,s.encodeLocation?s.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),a,t,i);return e&&S?Y.createElement(Lu.Provider,{value:{location:Ja({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Cr.Pop}},S):S}function pM(){let n=bM(),e=aM(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:s},t):null,null)}const mM=Y.createElement(pM,null);class gM extends Y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Y.createElement(cs.Provider,{value:this.props.routeContext},Y.createElement(nw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vM(n){let{routeContext:e,match:t,children:i}=n,s=Y.useContext(Cu);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),Y.createElement(cs.Provider,{value:e},i)}function yM(n,e,t,i){var s;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var a;if(!t)return null;if(t.errors)n=t.matches;else if((a=i)!=null&&a.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let l=n,u=(s=t)==null?void 0:s.errors;if(u!=null){let p=l.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);p>=0||Nt(!1),l=l.slice(0,Math.min(l.length,p+1))}let d=!1,h=-1;if(t&&i&&i.v7_partialHydration)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:g,errors:y}=t,_=m.route.loader&&g[m.route.id]===void 0&&(!y||y[m.route.id]===void 0);if(m.route.lazy||_){d=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,m,g)=>{let y,_=!1,S=null,M=null;t&&(y=u&&m.route.id?u[m.route.id]:void 0,S=m.route.errorElement||mM,d&&(h<0&&g===0?(MM("route-fallback"),_=!0,M=null):h===g&&(_=!0,M=m.route.hydrateFallbackElement||null)));let b=e.concat(l.slice(0,g+1)),w=()=>{let C;return y?C=S:_?C=M:m.route.Component?C=Y.createElement(m.route.Component,null):m.route.element?C=m.route.element:C=p,Y.createElement(vM,{match:m,routeContext:{outlet:p,matches:b,isDataRoute:t!=null},children:C})};return t&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?Y.createElement(gM,{location:t.location,revalidation:t.revalidation,component:S,error:y,children:w(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):w()},null)}var rw=(function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n})(rw||{}),sw=(function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n})(sw||{});function xM(n){let e=Y.useContext(Cu);return e||Nt(!1),e}function wM(n){let e=Y.useContext(tw);return e||Nt(!1),e}function _M(n){let e=Y.useContext(cs);return e||Nt(!1),e}function ow(n){let e=_M(),t=e.matches[e.matches.length-1];return t.route.id||Nt(!1),t.route.id}function bM(){var n;let e=Y.useContext(nw),t=wM(),i=ow();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function SM(){let{router:n}=xM(rw.UseNavigateStable),e=ow(sw.UseNavigateStable),t=Y.useRef(!1);return iw(()=>{t.current=!0}),Y.useCallback(function(s,a){a===void 0&&(a={}),t.current&&(typeof s=="number"?n.navigate(s):n.navigate(s,Ja({fromRouteId:e},a)))},[n,e])}const Qv={};function MM(n,e,t){Qv[n]||(Qv[n]=!0)}function EM(n,e){n==null||n.v7_startTransition,n==null||n.v7_relativeSplatPath}function ro(n){Nt(!1)}function TM(n){let{basename:e="/",children:t=null,location:i,navigationType:s=Cr.Pop,navigator:a,static:l=!1,future:u}=n;cl()&&Nt(!1);let d=e.replace(/^\/*/,"/"),h=Y.useMemo(()=>({basename:d,navigator:a,static:l,future:Ja({v7_relativeSplatPath:!1},u)}),[d,u,a,l]);typeof i=="string"&&(i=bo(i));let{pathname:p="/",search:m="",hash:g="",state:y=null,key:_="default"}=i,S=Y.useMemo(()=>{let M=vo(p,d);return M==null?null:{location:{pathname:M,search:m,hash:g,state:y,key:_},navigationType:s}},[d,p,m,g,y,_,s]);return S==null?null:Y.createElement(Nr.Provider,{value:h},Y.createElement(Lu.Provider,{children:t,value:S}))}function AM(n){let{children:e,location:t}=n;return hM(Nf(e),t)}new Promise(()=>{});function Nf(n,e){e===void 0&&(e=[]);let t=[];return Y.Children.forEach(n,(i,s)=>{if(!Y.isValidElement(i))return;let a=[...e,s];if(i.type===Y.Fragment){t.push.apply(t,Nf(i.props.children,a));return}i.type!==ro&&Nt(!1),!i.props.index||!i.props.children||Nt(!1);let l={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(l.children=Nf(i.props.children,a)),t.push(l)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hu(){return hu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},hu.apply(null,arguments)}function aw(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}function CM(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function LM(n,e){return n.button===0&&(!e||e==="_self")&&!CM(n)}const PM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],RM=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],kM="6";try{window.__reactRouterVersion=kM}catch{}const DM=Y.createContext({isTransitioning:!1}),IM="startTransition",e0=DS[IM];function NM(n){let{basename:e,children:t,future:i,window:s}=n,a=Y.useRef();a.current==null&&(a.current=OS({window:s,v5Compat:!0}));let l=a.current,[u,d]=Y.useState({action:l.action,location:l.location}),{v7_startTransition:h}=i||{},p=Y.useCallback(m=>{h&&e0?e0(()=>d(m)):d(m)},[d,h]);return Y.useLayoutEffect(()=>l.listen(p),[l,p]),Y.useEffect(()=>EM(i),[i]),Y.createElement(TM,{basename:e,children:t,location:u.location,navigationType:u.action,navigator:l,future:i})}const FM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ru=Y.forwardRef(function(e,t){let{onClick:i,relative:s,reloadDocument:a,replace:l,state:u,target:d,to:h,preventScrollReset:p,viewTransition:m}=e,g=aw(e,PM),{basename:y}=Y.useContext(Nr),_,S=!1;if(typeof h=="string"&&zM.test(h)&&(_=h,FM))try{let C=new URL(window.location.href),R=h.startsWith("//")?new URL(C.protocol+h):new URL(h),A=vo(R.pathname,y);R.origin===C.origin&&A!=null?h=A+R.search+R.hash:S=!0}catch{}let M=cM(h,{relative:s}),b=VM(h,{replace:l,state:u,target:d,preventScrollReset:p,relative:s,viewTransition:m});function w(C){i&&i(C),C.defaultPrevented||b(C)}return Y.createElement("a",hu({},g,{href:_||M,onClick:S||a?i:w,ref:t,target:d}))}),BM=Y.forwardRef(function(e,t){let{"aria-current":i="page",caseSensitive:s=!1,className:a="",end:l=!1,style:u,to:d,viewTransition:h,children:p}=e,m=aw(e,RM),g=Pu(d,{relative:m.relative}),y=us(),_=Y.useContext(tw),{navigator:S,basename:M}=Y.useContext(Nr),b=_!=null&&UM(g)&&h===!0,w=S.encodeLocation?S.encodeLocation(g).pathname:g.pathname,C=y.pathname,R=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;s||(C=C.toLowerCase(),R=R?R.toLowerCase():null,w=w.toLowerCase()),R&&M&&(R=vo(R,M)||R);const A=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let T=C===w||!l&&C.startsWith(w)&&C.charAt(A)==="/",B=R!=null&&(R===w||!l&&R.startsWith(w)&&R.charAt(w.length)==="/"),U={isActive:T,isPending:B,isTransitioning:b},q=T?i:void 0,ee;typeof a=="function"?ee=a(U):ee=[a,T?"active":null,B?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let ae=typeof u=="function"?u(U):u;return Y.createElement(ru,hu({},m,{"aria-current":q,className:ee,ref:t,style:ae,to:d,viewTransition:h}),typeof p=="function"?p(U):p)});var Ff;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ff||(Ff={}));var t0;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(t0||(t0={}));function OM(n){let e=Y.useContext(Cu);return e||Nt(!1),e}function VM(n,e){let{target:t,replace:i,state:s,preventScrollReset:a,relative:l,viewTransition:u}=e===void 0?{}:e,d=uM(),h=us(),p=Pu(n,{relative:l});return Y.useCallback(m=>{if(LM(m,t)){m.preventDefault();let g=i!==void 0?i:du(h)===du(p);d(n,{replace:g,state:s,preventScrollReset:a,relative:l,viewTransition:u})}},[h,d,p,i,s,t,n,a,l,u])}function UM(n,e){e===void 0&&(e={});let t=Y.useContext(DM);t==null&&Nt(!1);let{basename:i}=OM(Ff.useViewTransitionState),s=Pu(n,{relative:e.relative});if(!t.isTransitioning)return!1;let a=vo(t.currentLocation.pathname,i)||t.currentLocation.pathname,l=vo(t.nextLocation.pathname,i)||t.nextLocation.pathname;return If(s.pathname,l)!=null||If(s.pathname,a)!=null}const dp=Y.createContext({});function So(n){const e=Y.useRef(null);return e.current===null&&(e.current=n()),e.current}const Ru=Y.createContext(null),ul=Y.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class HM extends Y.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=t.offsetHeight||0,i.width=t.offsetWidth||0,i.top=t.offsetTop,i.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function GM({children:n,isPresent:e}){const t=Y.useId(),i=Y.useRef(null),s=Y.useRef({width:0,height:0,top:0,left:0}),{nonce:a}=Y.useContext(ul);return Y.useInsertionEffect(()=>{const{width:l,height:u,top:d,left:h}=s.current;if(e||!i.current||!l||!u)return;i.current.dataset.motionPopId=t;const p=document.createElement("style");return a&&(p.nonce=a),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${u}px !important;
            top: ${d}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(p)}},[e]),te.jsx(HM,{isPresent:e,childRef:i,sizeRef:s,children:Y.cloneElement(n,{ref:i})})}const WM=({children:n,initial:e,isPresent:t,onExitComplete:i,custom:s,presenceAffectsLayout:a,mode:l})=>{const u=So(jM),d=Y.useId(),h=Y.useCallback(m=>{u.set(m,!0);for(const g of u.values())if(!g)return;i&&i()},[u,i]),p=Y.useMemo(()=>({id:d,initial:e,isPresent:t,custom:s,onExitComplete:h,register:m=>(u.set(m,!1),()=>u.delete(m))}),a?[Math.random(),h]:[t,h]);return Y.useMemo(()=>{u.forEach((m,g)=>u.set(g,!1))},[t]),Y.useEffect(()=>{!t&&!u.size&&i&&i()},[t]),l==="popLayout"&&(n=te.jsx(GM,{isPresent:t,children:n})),te.jsx(Ru.Provider,{value:p,children:n})};function jM(){return new Map}function lw(n=!0){const e=Y.useContext(Ru);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:i,register:s}=e,a=Y.useId();Y.useEffect(()=>{n&&s(a)},[n]);const l=Y.useCallback(()=>n&&i&&i(a),[a,i,n]);return!t&&i?[!1,l]:[!0]}const Ec=n=>n.key||"";function n0(n){const e=[];return Y.Children.forEach(n,t=>{Y.isValidElement(t)&&e.push(t)}),e}const hp=typeof window<"u",dl=hp?Y.useLayoutEffect:Y.useEffect,XM=({children:n,custom:e,initial:t=!0,onExitComplete:i,presenceAffectsLayout:s=!0,mode:a="sync",propagate:l=!1})=>{const[u,d]=lw(l),h=Y.useMemo(()=>n0(n),[n]),p=l&&!u?[]:h.map(Ec),m=Y.useRef(!0),g=Y.useRef(h),y=So(()=>new Map),[_,S]=Y.useState(h),[M,b]=Y.useState(h);dl(()=>{m.current=!1,g.current=h;for(let R=0;R<M.length;R++){const A=Ec(M[R]);p.includes(A)?y.delete(A):y.get(A)!==!0&&y.set(A,!1)}},[M,p.length,p.join("-")]);const w=[];if(h!==_){let R=[...h];for(let A=0;A<M.length;A++){const T=M[A],B=Ec(T);p.includes(B)||(R.splice(A,0,T),w.push(T))}a==="wait"&&w.length&&(R=w),b(n0(R)),S(h);return}const{forceRender:C}=Y.useContext(dp);return te.jsx(te.Fragment,{children:M.map(R=>{const A=Ec(R),T=l&&!u?!1:h===M||p.includes(A),B=()=>{if(y.has(A))y.set(A,!0);else return;let U=!0;y.forEach(q=>{q||(U=!1)}),U&&(C==null||C(),b(g.current),l&&(d==null||d()),i&&i())};return te.jsx(WM,{isPresent:T,initial:!m.current||t?void 0:!1,custom:T?void 0:e,presenceAffectsLayout:s,mode:a,onExitComplete:T?void 0:B,children:R},A)})})},yn=n=>n;let YM=yn,cw=yn;function fp(n){let e;return()=>(e===void 0&&(e=n()),e)}const as=(n,e,t)=>{const i=e-n;return i===0?1:(t-n)/i},Zi=n=>n*1e3,Ji=n=>n/1e3,qM={useManualTiming:!1};function $M(n){let e=new Set,t=new Set,i=!1,s=!1;const a=new WeakSet;let l={delta:0,timestamp:0,isProcessing:!1};function u(h){a.has(h)&&(d.schedule(h),n()),h(l)}const d={schedule:(h,p=!1,m=!1)=>{const y=m&&i?e:t;return p&&a.add(h),y.has(h)||y.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(l=h,i){s=!0;return}i=!0,[e,t]=[t,e],e.forEach(u),e.clear(),i=!1,s&&(s=!1,d.process(h))}};return d}const Tc=["read","resolveKeyframes","update","preRender","render","postRender"],ZM=40;function uw(n,e){let t=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,l=Tc.reduce((b,w)=>(b[w]=$M(a),b),{}),{read:u,resolveKeyframes:d,update:h,preRender:p,render:m,postRender:g}=l,y=()=>{const b=performance.now();t=!1,s.delta=i?1e3/60:Math.max(Math.min(b-s.timestamp,ZM),1),s.timestamp=b,s.isProcessing=!0,u.process(s),d.process(s),h.process(s),p.process(s),m.process(s),g.process(s),s.isProcessing=!1,t&&e&&(i=!1,n(y))},_=()=>{t=!0,i=!0,s.isProcessing||n(y)};return{schedule:Tc.reduce((b,w)=>{const C=l[w];return b[w]=(R,A=!1,T=!1)=>(t||_(),C.schedule(R,A,T)),b},{}),cancel:b=>{for(let w=0;w<Tc.length;w++)l[Tc[w]].cancel(b)},state:s,steps:l}}const{schedule:ct,cancel:mi,state:Wt,steps:Nh}=uw(typeof requestAnimationFrame<"u"?requestAnimationFrame:yn,!0),dw=Y.createContext({strict:!1}),i0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},yo={};for(const n in i0)yo[n]={isEnabled:e=>i0[n].some(t=>!!e[t])};function JM(n){for(const e in n)yo[e]={...yo[e],...n[e]}}const KM=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function fu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||KM.has(n)}let hw=n=>!fu(n);function QM(n){n&&(hw=e=>e.startsWith("on")?!fu(e):n(e))}try{QM(require("@emotion/is-prop-valid").default)}catch{}function eE(n,e,t){const i={};for(const s in n)s==="values"&&typeof n.values=="object"||(hw(s)||t===!0&&fu(s)||!e&&!fu(s)||n.draggable&&s.startsWith("onDrag"))&&(i[s]=n[s]);return i}function tE(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...i)=>n(...i);return new Proxy(t,{get:(i,s)=>s==="create"?n:(e.has(s)||e.set(s,n(s)),e.get(s))})}const ku=Y.createContext({});function Ka(n){return typeof n=="string"||Array.isArray(n)}function Du(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const pp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],mp=["initial",...pp];function Iu(n){return Du(n.animate)||mp.some(e=>Ka(n[e]))}function fw(n){return!!(Iu(n)||n.variants)}function nE(n,e){if(Iu(n)){const{initial:t,animate:i}=n;return{initial:t===!1||Ka(t)?t:void 0,animate:Ka(i)?i:void 0}}return n.inherit!==!1?e:{}}function iE(n){const{initial:e,animate:t}=nE(n,Y.useContext(ku));return Y.useMemo(()=>({initial:e,animate:t}),[r0(e),r0(t)])}function r0(n){return Array.isArray(n)?n.join(" "):n}const rE=Symbol.for("motionComponentSymbol");function oo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function sE(n,e,t){return Y.useCallback(i=>{i&&n.onMount&&n.onMount(i),e&&(i?e.mount(i):e.unmount()),t&&(typeof t=="function"?t(i):oo(t)&&(t.current=i))},[e])}const gp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),oE="framerAppearId",pw="data-"+gp(oE),{schedule:vp}=uw(queueMicrotask,!1),mw=Y.createContext({});function aE(n,e,t,i,s){var a,l;const{visualElement:u}=Y.useContext(ku),d=Y.useContext(dw),h=Y.useContext(Ru),p=Y.useContext(ul).reducedMotion,m=Y.useRef(null);i=i||d.renderer,!m.current&&i&&(m.current=i(n,{visualState:e,parent:u,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:p}));const g=m.current,y=Y.useContext(mw);g&&!g.projection&&s&&(g.type==="html"||g.type==="svg")&&lE(m.current,t,s,y);const _=Y.useRef(!1);Y.useInsertionEffect(()=>{g&&_.current&&g.update(t,h)});const S=t[pw],M=Y.useRef(!!S&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,S))&&((l=window.MotionHasOptimisedAnimation)===null||l===void 0?void 0:l.call(window,S)));return dl(()=>{g&&(_.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),vp.render(g.render),M.current&&g.animationState&&g.animationState.animateChanges())}),Y.useEffect(()=>{g&&(!M.current&&g.animationState&&g.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{var b;(b=window.MotionHandoffMarkAsComplete)===null||b===void 0||b.call(window,S)}),M.current=!1))}),g}function lE(n,e,t,i){const{layoutId:s,layout:a,drag:l,dragConstraints:u,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:gw(n.parent)),n.projection.setOptions({layoutId:s,layout:a,alwaysMeasureLayout:!!l||u&&oo(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:i,layoutScroll:d,layoutRoot:h})}function gw(n){if(n)return n.options.allowProjection!==!1?n.projection:gw(n.parent)}function cE({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:i,Component:s}){var a,l;n&&JM(n);function u(h,p){let m;const g={...Y.useContext(ul),...h,layoutId:uE(h)},{isStatic:y}=g,_=iE(h),S=i(h,y);if(!y&&hp){dE();const M=hE(g);m=M.MeasureLayout,_.visualElement=aE(s,S,g,e,M.ProjectionNode)}return te.jsxs(ku.Provider,{value:_,children:[m&&_.visualElement?te.jsx(m,{visualElement:_.visualElement,...g}):null,t(s,h,sE(S,_.visualElement,p),S,y,_.visualElement)]})}u.displayName=`motion.${typeof s=="string"?s:`create(${(l=(a=s.displayName)!==null&&a!==void 0?a:s.name)!==null&&l!==void 0?l:""})`}`;const d=Y.forwardRef(u);return d[rE]=s,d}function uE({layoutId:n}){const e=Y.useContext(dp).id;return e&&n!==void 0?e+"-"+n:n}function dE(n,e){Y.useContext(dw).strict}function hE(n){const{drag:e,layout:t}=yo;if(!e&&!t)return{};const i={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const fE=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function yp(n){return typeof n!="string"||n.includes("-")?!1:!!(fE.indexOf(n)>-1||/[A-Z]/u.test(n))}function s0(n){const e=[{},{}];return n==null||n.values.forEach((t,i)=>{e[0][i]=t.get(),e[1][i]=t.getVelocity()}),e}function xp(n,e,t,i){if(typeof e=="function"){const[s,a]=s0(i);e=e(t!==void 0?t:n.custom,s,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[s,a]=s0(i);e=e(t!==void 0?t:n.custom,s,a)}return e}const zf=n=>Array.isArray(n),pE=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),mE=n=>zf(n)?n[n.length-1]||0:n,Kt=n=>!!(n&&n.getVelocity);function su(n){const e=Kt(n)?n.get():n;return pE(e)?e.toValue():e}function gE({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},i,s,a){const l={latestValues:vE(i,s,a,n),renderState:e()};return t&&(l.onMount=u=>t({props:i,current:u,...l}),l.onUpdate=u=>t(u)),l}const vw=n=>(e,t)=>{const i=Y.useContext(ku),s=Y.useContext(Ru),a=()=>gE(n,e,i,s);return t?a():So(a)};function vE(n,e,t,i){const s={},a=i(n,{});for(const g in a)s[g]=su(a[g]);let{initial:l,animate:u}=n;const d=Iu(n),h=fw(n);e&&h&&!d&&n.inherit!==!1&&(l===void 0&&(l=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||l===!1;const m=p?u:l;if(m&&typeof m!="boolean"&&!Du(m)){const g=Array.isArray(m)?m:[m];for(let y=0;y<g.length;y++){const _=xp(n,g[y]);if(_){const{transitionEnd:S,transition:M,...b}=_;for(const w in b){let C=b[w];if(Array.isArray(C)){const R=p?C.length-1:0;C=C[R]}C!==null&&(s[w]=C)}for(const w in S)s[w]=S[w]}}}return s}const Mo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ds=new Set(Mo),yw=n=>e=>typeof e=="string"&&e.startsWith(n),xw=yw("--"),yE=yw("var(--"),wp=n=>yE(n)?xE.test(n.split("/*")[0].trim()):!1,xE=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ww=(n,e)=>e&&typeof n=="number"?e.transform(n):n,Ri=(n,e,t)=>t>e?e:t<n?n:t,Eo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Qa={...Eo,transform:n=>Ri(0,1,n)},Ac={...Eo,default:1},hl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Er=hl("deg"),Ci=hl("%"),je=hl("px"),wE=hl("vh"),_E=hl("vw"),o0={...Ci,parse:n=>Ci.parse(n)/100,transform:n=>Ci.transform(n*100)},bE={borderWidth:je,borderTopWidth:je,borderRightWidth:je,borderBottomWidth:je,borderLeftWidth:je,borderRadius:je,radius:je,borderTopLeftRadius:je,borderTopRightRadius:je,borderBottomRightRadius:je,borderBottomLeftRadius:je,width:je,maxWidth:je,height:je,maxHeight:je,top:je,right:je,bottom:je,left:je,padding:je,paddingTop:je,paddingRight:je,paddingBottom:je,paddingLeft:je,margin:je,marginTop:je,marginRight:je,marginBottom:je,marginLeft:je,backgroundPositionX:je,backgroundPositionY:je},SE={rotate:Er,rotateX:Er,rotateY:Er,rotateZ:Er,scale:Ac,scaleX:Ac,scaleY:Ac,scaleZ:Ac,skew:Er,skewX:Er,skewY:Er,distance:je,translateX:je,translateY:je,translateZ:je,x:je,y:je,z:je,perspective:je,transformPerspective:je,opacity:Qa,originX:o0,originY:o0,originZ:je},a0={...Eo,transform:Math.round},_p={...bE,...SE,zIndex:a0,size:je,fillOpacity:Qa,strokeOpacity:Qa,numOctaves:a0},ME={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},EE=Mo.length;function TE(n,e,t){let i="",s=!0;for(let a=0;a<EE;a++){const l=Mo[a],u=n[l];if(u===void 0)continue;let d=!0;if(typeof u=="number"?d=u===(l.startsWith("scale")?1:0):d=parseFloat(u)===0,!d||t){const h=ww(u,_p[l]);if(!d){s=!1;const p=ME[l]||l;i+=`${p}(${h}) `}t&&(e[l]=h)}}return i=i.trim(),t?i=t(e,s?"":i):s&&(i="none"),i}function bp(n,e,t){const{style:i,vars:s,transformOrigin:a}=n;let l=!1,u=!1;for(const d in e){const h=e[d];if(ds.has(d)){l=!0;continue}else if(xw(d)){s[d]=h;continue}else{const p=ww(h,_p[d]);d.startsWith("origin")?(u=!0,a[d]=p):i[d]=p}}if(e.transform||(l||t?i.transform=TE(e,n.transform,t):i.transform&&(i.transform="none")),u){const{originX:d="50%",originY:h="50%",originZ:p=0}=a;i.transformOrigin=`${d} ${h} ${p}`}}const AE={offset:"stroke-dashoffset",array:"stroke-dasharray"},CE={offset:"strokeDashoffset",array:"strokeDasharray"};function LE(n,e,t=1,i=0,s=!0){n.pathLength=1;const a=s?AE:CE;n[a.offset]=je.transform(-i);const l=je.transform(e),u=je.transform(t);n[a.array]=`${l} ${u}`}function l0(n,e,t){return typeof n=="string"?n:je.transform(e+t*n)}function PE(n,e,t){const i=l0(e,n.x,n.width),s=l0(t,n.y,n.height);return`${i} ${s}`}function Sp(n,{attrX:e,attrY:t,attrScale:i,originX:s,originY:a,pathLength:l,pathSpacing:u=1,pathOffset:d=0,...h},p,m){if(bp(n,h,m),p){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:g,style:y,dimensions:_}=n;g.transform&&(_&&(y.transform=g.transform),delete g.transform),_&&(s!==void 0||a!==void 0||y.transform)&&(y.transformOrigin=PE(_,s!==void 0?s:.5,a!==void 0?a:.5)),e!==void 0&&(g.x=e),t!==void 0&&(g.y=t),i!==void 0&&(g.scale=i),l!==void 0&&LE(g,l,u,d,!1)}const Mp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),_w=()=>({...Mp(),attrs:{}}),Ep=n=>typeof n=="string"&&n.toLowerCase()==="svg";function bw(n,{style:e,vars:t},i,s){Object.assign(n.style,e,s&&s.getProjectionStyles(i));for(const a in t)n.style.setProperty(a,t[a])}const Sw=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Mw(n,e,t,i){bw(n,e,void 0,i);for(const s in e.attrs)n.setAttribute(Sw.has(s)?s:gp(s),e.attrs[s])}const pu={};function RE(n){Object.assign(pu,n)}function Ew(n,{layout:e,layoutId:t}){return ds.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!pu[n]||n==="opacity")}function Tp(n,e,t){var i;const{style:s}=n,a={};for(const l in s)(Kt(s[l])||e.style&&Kt(e.style[l])||Ew(l,n)||((i=t==null?void 0:t.getValue(l))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(a[l]=s[l]);return a}function Tw(n,e,t){const i=Tp(n,e,t);for(const s in n)if(Kt(n[s])||Kt(e[s])){const a=Mo.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[a]=n[s]}return i}function kE(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const c0=["x","y","width","height","cx","cy","r"],DE={useVisualState:vw({scrapeMotionValuesFromProps:Tw,createRenderState:_w,onUpdate:({props:n,prevProps:e,current:t,renderState:i,latestValues:s})=>{if(!t)return;let a=!!n.drag;if(!a){for(const u in s)if(ds.has(u)){a=!0;break}}if(!a)return;let l=!e;if(e)for(let u=0;u<c0.length;u++){const d=c0[u];n[d]!==e[d]&&(l=!0)}l&&ct.read(()=>{kE(t,i),ct.render(()=>{Sp(i,s,Ep(t.tagName),n.transformTemplate),Mw(t,i)})})}})},IE={useVisualState:vw({scrapeMotionValuesFromProps:Tp,createRenderState:Mp})};function Aw(n,e,t){for(const i in e)!Kt(e[i])&&!Ew(i,t)&&(n[i]=e[i])}function NE({transformTemplate:n},e){return Y.useMemo(()=>{const t=Mp();return bp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function FE(n,e){const t=n.style||{},i={};return Aw(i,t,n),Object.assign(i,NE(n,e)),i}function zE(n,e){const t={},i=FE(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=i,t}function BE(n,e,t,i){const s=Y.useMemo(()=>{const a=_w();return Sp(a,e,Ep(i),n.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};Aw(a,n.style,n),s.style={...a,...s.style}}return s}function OE(n=!1){return(t,i,s,{latestValues:a},l)=>{const d=(yp(t)?BE:zE)(i,a,l,t),h=eE(i,typeof t=="string",n),p=t!==Y.Fragment?{...h,...d,ref:s}:{},{children:m}=i,g=Y.useMemo(()=>Kt(m)?m.get():m,[m]);return Y.createElement(t,{...p,children:g})}}function VE(n,e){return function(i,{forwardMotionProps:s}={forwardMotionProps:!1}){const l={...yp(i)?DE:IE,preloadedFeatures:n,useRender:OE(s),createVisualElement:e,Component:i};return cE(l)}}function Cw(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let i=0;i<t;i++)if(e[i]!==n[i])return!1;return!0}function Nu(n,e,t){const i=n.getProps();return xp(i,e,t!==void 0?t:i.custom,n)}const Lw=fp(()=>window.ScrollTimeline!==void 0);class UE{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=t}attachTimeline(e,t){const i=this.animations.map(s=>{if(Lw()&&s.attachTimeline)return s.attachTimeline(e);if(typeof t=="function")return t(s)});return()=>{i.forEach((s,a)=>{s&&s(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class HE extends UE{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function Ap(n,e){return n?n[e]||n.default||n:void 0}const Bf=2e4;function Pw(n){let e=0;const t=50;let i=n.next(e);for(;!i.done&&e<Bf;)e+=t,i=n.next(e);return e>=Bf?1/0:e}function Cp(n){return typeof n=="function"}function u0(n,e){n.timeline=e,n.onfinish=null}const Lp=n=>Array.isArray(n)&&typeof n[0]=="number",GE={linearEasing:void 0};function WE(n,e){const t=fp(n);return()=>{var i;return(i=GE[e])!==null&&i!==void 0?i:t()}}const mu=WE(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Rw=(n,e,t=10)=>{let i="";const s=Math.max(Math.round(e/t),2);for(let a=0;a<s;a++)i+=n(as(0,s-1,a))+", ";return`linear(${i.substring(0,i.length-2)})`};function kw(n){return!!(typeof n=="function"&&mu()||!n||typeof n=="string"&&(n in Of||mu())||Lp(n)||Array.isArray(n)&&n.every(kw))}const ka=([n,e,t,i])=>`cubic-bezier(${n}, ${e}, ${t}, ${i})`,Of={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ka([0,.65,.55,1]),circOut:ka([.55,0,1,.45]),backIn:ka([.31,.01,.66,-.59]),backOut:ka([.33,1.53,.69,.99])};function Dw(n,e){if(n)return typeof n=="function"&&mu()?Rw(n,e):Lp(n)?ka(n):Array.isArray(n)?n.map(t=>Dw(t,e)||Of.easeOut):Of[n]}const hi={x:!1,y:!1};function Iw(){return hi.x||hi.y}function Pp(n,e,t){var i;if(n instanceof Element)return[n];if(typeof n=="string"){let s=document;const a=(i=void 0)!==null&&i!==void 0?i:s.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n)}function Nw(n,e){const t=Pp(n),i=new AbortController,s={passive:!0,...e,signal:i.signal};return[t,s,()=>i.abort()]}function d0(n){return e=>{e.pointerType==="touch"||Iw()||n(e)}}function jE(n,e,t={}){const[i,s,a]=Nw(n,t),l=d0(u=>{const{target:d}=u,h=e(u);if(typeof h!="function"||!d)return;const p=d0(m=>{h(m),d.removeEventListener("pointerleave",p)});d.addEventListener("pointerleave",p,s)});return i.forEach(u=>{u.addEventListener("pointerenter",l,s)}),a}const Fw=(n,e)=>e?n===e?!0:Fw(n,e.parentElement):!1,Rp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,XE=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function YE(n){return XE.has(n.tagName)||n.tabIndex!==-1}const Da=new WeakSet;function h0(n){return e=>{e.key==="Enter"&&n(e)}}function Fh(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const qE=(n,e)=>{const t=n.currentTarget;if(!t)return;const i=h0(()=>{if(Da.has(t))return;Fh(t,"down");const s=h0(()=>{Fh(t,"up")}),a=()=>Fh(t,"cancel");t.addEventListener("keyup",s,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",i,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",i),e)};function f0(n){return Rp(n)&&!Iw()}function $E(n,e,t={}){const[i,s,a]=Nw(n,t),l=u=>{const d=u.currentTarget;if(!f0(u)||Da.has(d))return;Da.add(d);const h=e(u),p=(y,_)=>{window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",g),!(!f0(y)||!Da.has(d))&&(Da.delete(d),typeof h=="function"&&h(y,{success:_}))},m=y=>{p(y,t.useGlobalTarget||Fw(d,y.target))},g=y=>{p(y,!1)};window.addEventListener("pointerup",m,s),window.addEventListener("pointercancel",g,s)};return i.forEach(u=>{!YE(u)&&u.getAttribute("tabindex")===null&&(u.tabIndex=0),(t.useGlobalTarget?window:u).addEventListener("pointerdown",l,s),u.addEventListener("focus",h=>qE(h,s),s)}),a}function ZE(n){return n==="x"||n==="y"?hi[n]?null:(hi[n]=!0,()=>{hi[n]=!1}):hi.x||hi.y?null:(hi.x=hi.y=!0,()=>{hi.x=hi.y=!1})}const zw=new Set(["width","height","top","left","right","bottom",...Mo]);let ou;function JE(){ou=void 0}const Li={now:()=>(ou===void 0&&Li.set(Wt.isProcessing||qM.useManualTiming?Wt.timestamp:performance.now()),ou),set:n=>{ou=n,queueMicrotask(JE)}};function kp(n,e){n.indexOf(e)===-1&&n.push(e)}function Dp(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class Ip{constructor(){this.subscriptions=[]}add(e){return kp(this.subscriptions,e),()=>Dp(this.subscriptions,e)}notify(e,t,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,t,i);else for(let a=0;a<s;a++){const l=this.subscriptions[a];l&&l(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Np(n,e){return e?n*(1e3/e):0}const p0=30,KE=n=>!isNaN(parseFloat(n)),za={current:void 0};class QE{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,s=!0)=>{const a=Li.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Li.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=KE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Ip);const i=this.events[e].add(t);return e==="change"?()=>{i(),ct.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return za.current&&za.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Li.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>p0)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,p0);return Np(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ai(n,e){return new QE(n,e)}function eT(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Ai(t))}function tT(n,e){const t=Nu(n,e);let{transitionEnd:i={},transition:s={},...a}=t||{};a={...a,...i};for(const l in a){const u=mE(a[l]);eT(n,l,u)}}function nT(n){return!!(Kt(n)&&n.add)}function Vf(n,e){const t=n.getValue("willChange");if(nT(t))return t.add(e)}function Bw(n){return n.props[pw]}const Ow=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,iT=1e-7,rT=12;function sT(n,e,t,i,s){let a,l,u=0;do l=e+(t-e)/2,a=Ow(l,i,s)-n,a>0?t=l:e=l;while(Math.abs(a)>iT&&++u<rT);return l}function fl(n,e,t,i){if(n===e&&t===i)return yn;const s=a=>sT(a,0,1,n,t);return a=>a===0||a===1?a:Ow(s(a),e,i)}const Vw=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Uw=n=>e=>1-n(1-e),Hw=fl(.33,1.53,.69,.99),Fp=Uw(Hw),Gw=Vw(Fp),Ww=n=>(n*=2)<1?.5*Fp(n):.5*(2-Math.pow(2,-10*(n-1))),zp=n=>1-Math.sin(Math.acos(n)),jw=Uw(zp),Xw=Vw(zp),Yw=n=>/^0[^.\s]+$/u.test(n);function oT(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Yw(n):!0}const Ba=n=>Math.round(n*1e5)/1e5,Bp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function aT(n){return n==null}const lT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Op=(n,e)=>t=>!!(typeof t=="string"&&lT.test(t)&&t.startsWith(n)||e&&!aT(t)&&Object.prototype.hasOwnProperty.call(t,e)),qw=(n,e,t)=>i=>{if(typeof i!="string")return i;const[s,a,l,u]=i.match(Bp);return{[n]:parseFloat(s),[e]:parseFloat(a),[t]:parseFloat(l),alpha:u!==void 0?parseFloat(u):1}},cT=n=>Ri(0,255,n),zh={...Eo,transform:n=>Math.round(cT(n))},is={test:Op("rgb","red"),parse:qw("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:i=1})=>"rgba("+zh.transform(n)+", "+zh.transform(e)+", "+zh.transform(t)+", "+Ba(Qa.transform(i))+")"};function uT(n){let e="",t="",i="",s="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),i=n.substring(5,7),s=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),i=n.substring(3,4),s=n.substring(4,5),e+=e,t+=t,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Uf={test:Op("#"),parse:uT,transform:is.transform},ao={test:Op("hsl","hue"),parse:qw("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(n)+", "+Ci.transform(Ba(e))+", "+Ci.transform(Ba(t))+", "+Ba(Qa.transform(i))+")"},hn={test:n=>is.test(n)||Uf.test(n)||ao.test(n),parse:n=>is.test(n)?is.parse(n):ao.test(n)?ao.parse(n):Uf.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?is.transform(n):ao.transform(n)},dT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function hT(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Bp))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(dT))===null||t===void 0?void 0:t.length)||0)>0}const $w="number",Zw="color",fT="var",pT="var(",m0="${}",mT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function el(n){const e=n.toString(),t=[],i={color:[],number:[],var:[]},s=[];let a=0;const u=e.replace(mT,d=>(hn.test(d)?(i.color.push(a),s.push(Zw),t.push(hn.parse(d))):d.startsWith(pT)?(i.var.push(a),s.push(fT),t.push(d)):(i.number.push(a),s.push($w),t.push(parseFloat(d))),++a,m0)).split(m0);return{values:t,split:u,indexes:i,types:s}}function Jw(n){return el(n).values}function Kw(n){const{split:e,types:t}=el(n),i=e.length;return s=>{let a="";for(let l=0;l<i;l++)if(a+=e[l],s[l]!==void 0){const u=t[l];u===$w?a+=Ba(s[l]):u===Zw?a+=hn.transform(s[l]):a+=s[l]}return a}}const gT=n=>typeof n=="number"?0:n;function vT(n){const e=Jw(n);return Kw(n)(e.map(gT))}const kr={test:hT,parse:Jw,createTransformer:Kw,getAnimatableNone:vT},yT=new Set(["brightness","contrast","saturate","opacity"]);function xT(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[i]=t.match(Bp)||[];if(!i)return n;const s=t.replace(i,"");let a=yT.has(e)?1:0;return i!==t&&(a*=100),e+"("+a+s+")"}const wT=/\b([a-z-]*)\(.*?\)/gu,Hf={...kr,getAnimatableNone:n=>{const e=n.match(wT);return e?e.map(xT).join(" "):n}},_T={..._p,color:hn,backgroundColor:hn,outlineColor:hn,fill:hn,stroke:hn,borderColor:hn,borderTopColor:hn,borderRightColor:hn,borderBottomColor:hn,borderLeftColor:hn,filter:Hf,WebkitFilter:Hf},Vp=n=>_T[n];function Qw(n,e){let t=Vp(n);return t!==Hf&&(t=kr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const bT=new Set(["auto","none","0"]);function ST(n,e,t){let i=0,s;for(;i<n.length&&!s;){const a=n[i];typeof a=="string"&&!bT.has(a)&&el(a).values.length&&(s=n[i]),i++}if(s&&t)for(const a of e)n[a]=Qw(t,s)}const g0=n=>n===Eo||n===je,v0=(n,e)=>parseFloat(n.split(", ")[e]),y0=(n,e)=>(t,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/u);if(s)return v0(s[1],e);{const a=i.match(/^matrix\((.+)\)$/u);return a?v0(a[1],n):0}},MT=new Set(["x","y","z"]),ET=Mo.filter(n=>!MT.has(n));function TT(n){const e=[];return ET.forEach(t=>{const i=n.getValue(t);i!==void 0&&(e.push([t,i.get()]),i.set(t.startsWith("scale")?1:0))}),e}const xo={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:y0(4,13),y:y0(5,14)};xo.translateX=xo.x;xo.translateY=xo.y;const rs=new Set;let Gf=!1,Wf=!1;function e_(){if(Wf){const n=Array.from(rs).filter(i=>i.needsMeasurement),e=new Set(n.map(i=>i.element)),t=new Map;e.forEach(i=>{const s=TT(i);s.length&&(t.set(i,s),i.render())}),n.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const s=t.get(i);s&&s.forEach(([a,l])=>{var u;(u=i.getValue(a))===null||u===void 0||u.set(l)})}),n.forEach(i=>i.measureEndState()),n.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Wf=!1,Gf=!1,rs.forEach(n=>n.complete()),rs.clear()}function t_(){rs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Wf=!0)})}function AT(){t_(),e_()}class Up{constructor(e,t,i,s,a,l=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=s,this.element=a,this.isAsync=l}scheduleResolve(){this.isScheduled=!0,this.isAsync?(rs.add(this),Gf||(Gf=!0,ct.read(t_),ct.resolveKeyframes(e_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:i,motionValue:s}=this;for(let a=0;a<e.length;a++)if(e[a]===null)if(a===0){const l=s==null?void 0:s.get(),u=e[e.length-1];if(l!==void 0)e[0]=l;else if(i&&t){const d=i.readValue(t,u);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=u),s&&l===void 0&&s.set(e[0])}else e[a]=e[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),rs.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,rs.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const n_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),CT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function LT(n){const e=CT.exec(n);if(!e)return[,];const[,t,i,s]=e;return[`--${t??i}`,s]}function i_(n,e,t=1){const[i,s]=LT(n);if(!i)return;const a=window.getComputedStyle(e).getPropertyValue(i);if(a){const l=a.trim();return n_(l)?parseFloat(l):l}return wp(s)?i_(s,e,t+1):s}const r_=n=>e=>e.test(n),PT={test:n=>n==="auto",parse:n=>n},s_=[Eo,je,Ci,Er,_E,wE,PT],x0=n=>s_.find(r_(n));class o_ extends Up{constructor(e,t,i,s,a){super(e,t,i,s,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),wp(h))){const p=i_(h,t.current);p!==void 0&&(e[d]=p),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!zw.has(i)||e.length!==2)return;const[s,a]=e,l=x0(s),u=x0(a);if(l!==u)if(g0(l)&&g0(u))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,i=[];for(let s=0;s<e.length;s++)oT(e[s])&&i.push(s);i.length&&ST(e,i,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=xo[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const s=t[t.length-1];s!==void 0&&e.getValue(i,s).jump(s,!1)}measureEndState(){var e;const{element:t,name:i,unresolvedKeyframes:s}=this;if(!t||!t.current)return;const a=t.getValue(i);a&&a.jump(this.measuredOrigin,!1);const l=s.length-1,u=s[l];s[l]=xo[i](t.measureViewportBox(),window.getComputedStyle(t.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const w0=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(kr.test(n)||n==="0")&&!n.startsWith("url("));function RT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function kT(n,e,t,i){const s=n[0];if(s===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],l=w0(s,e),u=w0(a,e);return!l||!u?!1:RT(n)||(t==="spring"||Cp(t))&&i}const DT=n=>n!==null;function Fu(n,{repeat:e,repeatType:t="loop"},i){const s=n.filter(DT),a=e&&t!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const IT=40;class a_{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:s=0,repeatDelay:a=0,repeatType:l="loop",...u}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Li.now(),this.options={autoplay:e,delay:t,type:i,repeat:s,repeatDelay:a,repeatType:l,...u},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>IT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&AT(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Li.now(),this.hasAttemptedResolve=!0;const{name:i,type:s,velocity:a,delay:l,onComplete:u,onUpdate:d,isGenerator:h}=this.options;if(!h&&!kT(e,i,s,a))if(l)this.options.duration=0;else{d&&d(Fu(e,this.options,t)),u&&u(),this.resolveFinishedPromise();return}const p=this.initPlayback(e,t);p!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...p},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Lt=(n,e,t)=>n+(e-n)*t;function Bh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function NT({hue:n,saturation:e,lightness:t,alpha:i}){n/=360,e/=100,t/=100;let s=0,a=0,l=0;if(!e)s=a=l=t;else{const u=t<.5?t*(1+e):t+e-t*e,d=2*t-u;s=Bh(d,u,n+1/3),a=Bh(d,u,n),l=Bh(d,u,n-1/3)}return{red:Math.round(s*255),green:Math.round(a*255),blue:Math.round(l*255),alpha:i}}function gu(n,e){return t=>t>0?e:n}const Oh=(n,e,t)=>{const i=n*n,s=t*(e*e-i)+i;return s<0?0:Math.sqrt(s)},FT=[Uf,is,ao],zT=n=>FT.find(e=>e.test(n));function _0(n){const e=zT(n);if(!e)return!1;let t=e.parse(n);return e===ao&&(t=NT(t)),t}const b0=(n,e)=>{const t=_0(n),i=_0(e);if(!t||!i)return gu(n,e);const s={...t};return a=>(s.red=Oh(t.red,i.red,a),s.green=Oh(t.green,i.green,a),s.blue=Oh(t.blue,i.blue,a),s.alpha=Lt(t.alpha,i.alpha,a),is.transform(s))},BT=(n,e)=>t=>e(n(t)),pl=(...n)=>n.reduce(BT),jf=new Set(["none","hidden"]);function OT(n,e){return jf.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function VT(n,e){return t=>Lt(n,e,t)}function Hp(n){return typeof n=="number"?VT:typeof n=="string"?wp(n)?gu:hn.test(n)?b0:GT:Array.isArray(n)?l_:typeof n=="object"?hn.test(n)?b0:UT:gu}function l_(n,e){const t=[...n],i=t.length,s=n.map((a,l)=>Hp(a)(a,e[l]));return a=>{for(let l=0;l<i;l++)t[l]=s[l](a);return t}}function UT(n,e){const t={...n,...e},i={};for(const s in t)n[s]!==void 0&&e[s]!==void 0&&(i[s]=Hp(n[s])(n[s],e[s]));return s=>{for(const a in i)t[a]=i[a](s);return t}}function HT(n,e){var t;const i=[],s={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const l=e.types[a],u=n.indexes[l][s[l]],d=(t=n.values[u])!==null&&t!==void 0?t:0;i[a]=d,s[l]++}return i}const GT=(n,e)=>{const t=kr.createTransformer(e),i=el(n),s=el(e);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?jf.has(n)&&!s.values.length||jf.has(e)&&!i.values.length?OT(n,e):pl(l_(HT(i,s),s.values),t):gu(n,e)};function c_(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Lt(n,e,t):Hp(n)(n,e)}const WT=5;function u_(n,e,t){const i=Math.max(e-WT,0);return Np(t-n(i),e-i)}const It={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Vh=.001;function jT({duration:n=It.duration,bounce:e=It.bounce,velocity:t=It.velocity,mass:i=It.mass}){let s,a,l=1-e;l=Ri(It.minDamping,It.maxDamping,l),n=Ri(It.minDuration,It.maxDuration,Ji(n)),l<1?(s=h=>{const p=h*l,m=p*n,g=p-t,y=Xf(h,l),_=Math.exp(-m);return Vh-g/y*_},a=h=>{const m=h*l*n,g=m*t+t,y=Math.pow(l,2)*Math.pow(h,2)*n,_=Math.exp(-m),S=Xf(Math.pow(h,2),l);return(-s(h)+Vh>0?-1:1)*((g-y)*_)/S}):(s=h=>{const p=Math.exp(-h*n),m=(h-t)*n+1;return-Vh+p*m},a=h=>{const p=Math.exp(-h*n),m=(t-h)*(n*n);return p*m});const u=5/n,d=YT(s,a,u);if(n=Zi(n),isNaN(d))return{stiffness:It.stiffness,damping:It.damping,duration:n};{const h=Math.pow(d,2)*i;return{stiffness:h,damping:l*2*Math.sqrt(i*h),duration:n}}}const XT=12;function YT(n,e,t){let i=t;for(let s=1;s<XT;s++)i=i-n(i)/e(i);return i}function Xf(n,e){return n*Math.sqrt(1-e*e)}const qT=["duration","bounce"],$T=["stiffness","damping","mass"];function S0(n,e){return e.some(t=>n[t]!==void 0)}function ZT(n){let e={velocity:It.velocity,stiffness:It.stiffness,damping:It.damping,mass:It.mass,isResolvedFromDuration:!1,...n};if(!S0(n,$T)&&S0(n,qT))if(n.visualDuration){const t=n.visualDuration,i=2*Math.PI/(t*1.2),s=i*i,a=2*Ri(.05,1,1-(n.bounce||0))*Math.sqrt(s);e={...e,mass:It.mass,stiffness:s,damping:a}}else{const t=jT(n);e={...e,...t,mass:It.mass},e.isResolvedFromDuration=!0}return e}function d_(n=It.visualDuration,e=It.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:i,restDelta:s}=t;const a=t.keyframes[0],l=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:d,damping:h,mass:p,duration:m,velocity:g,isResolvedFromDuration:y}=ZT({...t,velocity:-Ji(t.velocity||0)}),_=g||0,S=h/(2*Math.sqrt(d*p)),M=l-a,b=Ji(Math.sqrt(d/p)),w=Math.abs(M)<5;i||(i=w?It.restSpeed.granular:It.restSpeed.default),s||(s=w?It.restDelta.granular:It.restDelta.default);let C;if(S<1){const A=Xf(b,S);C=T=>{const B=Math.exp(-S*b*T);return l-B*((_+S*b*M)/A*Math.sin(A*T)+M*Math.cos(A*T))}}else if(S===1)C=A=>l-Math.exp(-b*A)*(M+(_+b*M)*A);else{const A=b*Math.sqrt(S*S-1);C=T=>{const B=Math.exp(-S*b*T),U=Math.min(A*T,300);return l-B*((_+S*b*M)*Math.sinh(U)+A*M*Math.cosh(U))/A}}const R={calculatedDuration:y&&m||null,next:A=>{const T=C(A);if(y)u.done=A>=m;else{let B=0;S<1&&(B=A===0?Zi(_):u_(C,A,T));const U=Math.abs(B)<=i,q=Math.abs(l-T)<=s;u.done=U&&q}return u.value=u.done?l:T,u},toString:()=>{const A=Math.min(Pw(R),Bf),T=Rw(B=>R.next(A*B).value,A,30);return A+"ms "+T}};return R}function M0({keyframes:n,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:a=500,modifyTarget:l,min:u,max:d,restDelta:h=.5,restSpeed:p}){const m=n[0],g={done:!1,value:m},y=U=>u!==void 0&&U<u||d!==void 0&&U>d,_=U=>u===void 0?d:d===void 0||Math.abs(u-U)<Math.abs(d-U)?u:d;let S=t*e;const M=m+S,b=l===void 0?M:l(M);b!==M&&(S=b-m);const w=U=>-S*Math.exp(-U/i),C=U=>b+w(U),R=U=>{const q=w(U),ee=C(U);g.done=Math.abs(q)<=h,g.value=g.done?b:ee};let A,T;const B=U=>{y(g.value)&&(A=U,T=d_({keyframes:[g.value,_(g.value)],velocity:u_(C,U,g.value),damping:s,stiffness:a,restDelta:h,restSpeed:p}))};return B(0),{calculatedDuration:null,next:U=>{let q=!1;return!T&&A===void 0&&(q=!0,R(U),B(U)),A!==void 0&&U>=A?T.next(U-A):(!q&&R(U),g)}}}const JT=fl(.42,0,1,1),KT=fl(0,0,.58,1),h_=fl(.42,0,.58,1),QT=n=>Array.isArray(n)&&typeof n[0]!="number",e2={linear:yn,easeIn:JT,easeInOut:h_,easeOut:KT,circIn:zp,circInOut:Xw,circOut:jw,backIn:Fp,backInOut:Gw,backOut:Hw,anticipate:Ww},E0=n=>{if(Lp(n)){cw(n.length===4);const[e,t,i,s]=n;return fl(e,t,i,s)}else if(typeof n=="string")return e2[n];return n};function t2(n,e,t){const i=[],s=t||c_,a=n.length-1;for(let l=0;l<a;l++){let u=s(n[l],n[l+1]);if(e){const d=Array.isArray(e)?e[l]||yn:e;u=pl(d,u)}i.push(u)}return i}function Gp(n,e,{clamp:t=!0,ease:i,mixer:s}={}){const a=n.length;if(cw(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const l=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=t2(e,i,s),d=u.length,h=p=>{if(l&&p<n[0])return e[0];let m=0;if(d>1)for(;m<n.length-2&&!(p<n[m+1]);m++);const g=as(n[m],n[m+1],p);return u[m](g)};return t?p=>h(Ri(n[0],n[a-1],p)):h}function n2(n,e){const t=n[n.length-1];for(let i=1;i<=e;i++){const s=as(0,e,i);n.push(Lt(t,1,s))}}function f_(n){const e=[0];return n2(e,n.length-1),e}function i2(n,e){return n.map(t=>t*e)}function r2(n,e){return n.map(()=>e||h_).splice(0,n.length-1)}function vu({duration:n=300,keyframes:e,times:t,ease:i="easeInOut"}){const s=QT(i)?i.map(E0):E0(i),a={done:!1,value:e[0]},l=i2(t&&t.length===e.length?t:f_(e),n),u=Gp(l,e,{ease:Array.isArray(s)?s:r2(e,s)});return{calculatedDuration:n,next:d=>(a.value=u(d),a.done=d>=n,a)}}const s2=n=>{const e=({timestamp:t})=>n(t);return{start:()=>ct.update(e,!0),stop:()=>mi(e),now:()=>Wt.isProcessing?Wt.timestamp:Li.now()}},o2={decay:M0,inertia:M0,tween:vu,keyframes:vu,spring:d_},a2=n=>n/100;class zu extends a_{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:i,element:s,keyframes:a}=this.options,l=(s==null?void 0:s.KeyframeResolver)||Up,u=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new l(a,u,t,i,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:a,velocity:l=0}=this.options,u=Cp(t)?t:o2[t]||vu;let d,h;u!==vu&&typeof e[0]!="number"&&(d=pl(a2,c_(e[0],e[1])),e=[0,100]);const p=u({...this.options,keyframes:e});a==="mirror"&&(h=u({...this.options,keyframes:[...e].reverse(),velocity:-l})),p.calculatedDuration===null&&(p.calculatedDuration=Pw(p));const{calculatedDuration:m}=p,g=m+s,y=g*(i+1)-s;return{generator:p,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:m,resolvedDuration:g,totalDuration:y}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:i}=this;if(!i){const{keyframes:U}=this.options;return{done:!0,value:U[U.length-1]}}const{finalKeyframe:s,generator:a,mirroredGenerator:l,mapPercentToKeyframes:u,keyframes:d,calculatedDuration:h,totalDuration:p,resolvedDuration:m}=i;if(this.startTime===null)return a.next(0);const{delay:g,repeat:y,repeatType:_,repeatDelay:S,onUpdate:M}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-p/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const b=this.currentTime-g*(this.speed>=0?1:-1),w=this.speed>=0?b<0:b>p;this.currentTime=Math.max(b,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=p);let C=this.currentTime,R=a;if(y){const U=Math.min(this.currentTime,p)/m;let q=Math.floor(U),ee=U%1;!ee&&U>=1&&(ee=1),ee===1&&q--,q=Math.min(q,y+1),!!(q%2)&&(_==="reverse"?(ee=1-ee,S&&(ee-=S/m)):_==="mirror"&&(R=l)),C=Ri(0,1,ee)*m}const A=w?{done:!1,value:d[0]}:R.next(C);u&&(A.value=u(A.value));let{done:T}=A;!w&&h!==null&&(T=this.speed>=0?this.currentTime>=p:this.currentTime<=0);const B=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return B&&s!==void 0&&(A.value=Fu(d,this.options,s)),M&&M(A.value),B&&this.finish(),A}get duration(){const{resolved:e}=this;return e?Ji(e.calculatedDuration):0}get time(){return Ji(this.currentTime)}set time(e){e=Zi(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Ji(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=s2,onPlay:t,startTime:i}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),t&&t();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}function l2(n){return new zu(n)}const c2=new Set(["opacity","clipPath","filter","transform"]);function u2(n,e,t,{delay:i=0,duration:s=300,repeat:a=0,repeatType:l="loop",ease:u="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const p=Dw(u,s);return Array.isArray(p)&&(h.easing=p),n.animate(h,{delay:i,duration:s,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:a+1,direction:l==="reverse"?"alternate":"normal"})}const d2=fp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),yu=10,h2=2e4;function f2(n){return Cp(n.type)||n.type==="spring"||!kw(n.ease)}function p2(n,e){const t=new zu({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:n[0]};const s=[];let a=0;for(;!i.done&&a<h2;)i=t.sample(a),s.push(i.value),a+=yu;return{times:void 0,keyframes:s,duration:a-yu,ease:"linear"}}const p_={anticipate:Ww,backInOut:Gw,circInOut:Xw};function m2(n){return n in p_}class T0 extends a_{constructor(e){super(e);const{name:t,motionValue:i,element:s,keyframes:a}=this.options;this.resolver=new o_(a,(l,u)=>this.onKeyframesResolved(l,u),t,i,s),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:i=300,times:s,ease:a,type:l,motionValue:u,name:d,startTime:h}=this.options;if(!u.owner||!u.owner.current)return!1;if(typeof a=="string"&&mu()&&m2(a)&&(a=p_[a]),f2(this.options)){const{onComplete:m,onUpdate:g,motionValue:y,element:_,...S}=this.options,M=p2(e,S);e=M.keyframes,e.length===1&&(e[1]=e[0]),i=M.duration,s=M.times,a=M.ease,l="keyframes"}const p=u2(u.owner.current,d,e,{...this.options,duration:i,times:s,ease:a});return p.startTime=h??this.calcStartTime(),this.pendingTimeline?(u0(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:m}=this.options;u.set(Fu(e,this.options,t)),m&&m(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:i,times:s,type:l,ease:a,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Ji(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Ji(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.currentTime=Zi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:i}=t;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return yn;const{animation:i}=t;u0(i,e)}return yn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:i,duration:s,type:a,ease:l,times:u}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:p,onComplete:m,element:g,...y}=this.options,_=new zu({...y,keyframes:i,duration:s,type:a,ease:l,times:u,isGenerator:!0}),S=Zi(this.time);h.setWithVelocity(_.sample(S-yu).value,_.sample(S).value,yu)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:i,repeatDelay:s,repeatType:a,damping:l,type:u}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return d2()&&i&&c2.has(i)&&!d&&!h&&!s&&a!=="mirror"&&l!==0&&u!=="inertia"}}const g2={type:"spring",stiffness:500,damping:25,restSpeed:10},v2=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),y2={type:"keyframes",duration:.8},x2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},w2=(n,{keyframes:e})=>e.length>2?y2:ds.has(n)?n.startsWith("scale")?v2(e[1]):g2:x2;function _2({when:n,delay:e,delayChildren:t,staggerChildren:i,staggerDirection:s,repeat:a,repeatType:l,repeatDelay:u,from:d,elapsed:h,...p}){return!!Object.keys(p).length}const Wp=(n,e,t,i={},s,a)=>l=>{const u=Ap(i,n)||{},d=u.delay||i.delay||0;let{elapsed:h=0}=i;h=h-Zi(d);let p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:g=>{e.set(g),u.onUpdate&&u.onUpdate(g)},onComplete:()=>{l(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:s};_2(u)||(p={...p,...w2(n,p)}),p.duration&&(p.duration=Zi(p.duration)),p.repeatDelay&&(p.repeatDelay=Zi(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let m=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(p.duration=0,p.delay===0&&(m=!0)),m&&!a&&e.get()!==void 0){const g=Fu(p.keyframes,u);if(g!==void 0)return ct.update(()=>{p.onUpdate(g),p.onComplete()}),new HE([])}return!a&&T0.supports(p)?new T0(p):new zu(p)};function b2({protectedKeys:n,needsAnimating:e},t){const i=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,i}function m_(n,e,{delay:t=0,transitionOverride:i,type:s}={}){var a;let{transition:l=n.getDefaultTransition(),transitionEnd:u,...d}=e;i&&(l=i);const h=[],p=s&&n.animationState&&n.animationState.getState()[s];for(const m in d){const g=n.getValue(m,(a=n.latestValues[m])!==null&&a!==void 0?a:null),y=d[m];if(y===void 0||p&&b2(p,m))continue;const _={delay:t,...Ap(l||{},m)};let S=!1;if(window.MotionHandoffAnimation){const b=Bw(n);if(b){const w=window.MotionHandoffAnimation(b,m,ct);w!==null&&(_.startTime=w,S=!0)}}Vf(n,m),g.start(Wp(m,g,y,n.shouldReduceMotion&&zw.has(m)?{type:!1}:_,n,S));const M=g.animation;M&&h.push(M)}return u&&Promise.all(h).then(()=>{ct.update(()=>{u&&tT(n,u)})}),h}function Yf(n,e,t={}){var i;const s=Nu(n,e,t.type==="exit"?(i=n.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=s||{};t.transitionOverride&&(a=t.transitionOverride);const l=s?()=>Promise.all(m_(n,s,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:m,staggerDirection:g}=a;return S2(n,e,p+h,m,g,t)}:()=>Promise.resolve(),{when:d}=a;if(d){const[h,p]=d==="beforeChildren"?[l,u]:[u,l];return h().then(()=>p())}else return Promise.all([l(),u(t.delay)])}function S2(n,e,t=0,i=0,s=1,a){const l=[],u=(n.variantChildren.size-1)*i,d=s===1?(h=0)=>h*i:(h=0)=>u-h*i;return Array.from(n.variantChildren).sort(M2).forEach((h,p)=>{h.notify("AnimationStart",e),l.push(Yf(h,e,{...a,delay:t+d(p)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(l)}function M2(n,e){return n.sortNodePosition(e)}function E2(n,e,t={}){n.notify("AnimationStart",e);let i;if(Array.isArray(e)){const s=e.map(a=>Yf(n,a,t));i=Promise.all(s)}else if(typeof e=="string")i=Yf(n,e,t);else{const s=typeof e=="function"?Nu(n,e,t.custom):e;i=Promise.all(m_(n,s,t))}return i.then(()=>{n.notify("AnimationComplete",e)})}const T2=mp.length;function g_(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?g_(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<T2;t++){const i=mp[t],s=n.props[i];(Ka(s)||s===!1)&&(e[i]=s)}return e}const A2=[...pp].reverse(),C2=pp.length;function L2(n){return e=>Promise.all(e.map(({animation:t,options:i})=>E2(n,t,i)))}function P2(n){let e=L2(n),t=A0(),i=!0;const s=d=>(h,p)=>{var m;const g=Nu(n,p,d==="exit"?(m=n.presenceContext)===null||m===void 0?void 0:m.custom:void 0);if(g){const{transition:y,transitionEnd:_,...S}=g;h={...h,...S,..._}}return h};function a(d){e=d(n)}function l(d){const{props:h}=n,p=g_(n.parent)||{},m=[],g=new Set;let y={},_=1/0;for(let M=0;M<C2;M++){const b=A2[M],w=t[b],C=h[b]!==void 0?h[b]:p[b],R=Ka(C),A=b===d?w.isActive:null;A===!1&&(_=M);let T=C===p[b]&&C!==h[b]&&R;if(T&&i&&n.manuallyAnimateOnMount&&(T=!1),w.protectedKeys={...y},!w.isActive&&A===null||!C&&!w.prevProp||Du(C)||typeof C=="boolean")continue;const B=R2(w.prevProp,C);let U=B||b===d&&w.isActive&&!T&&R||M>_&&R,q=!1;const ee=Array.isArray(C)?C:[C];let ae=ee.reduce(s(b),{});A===!1&&(ae={});const{prevResolvedValues:oe={}}=w,z={...oe,...ae},G=ie=>{U=!0,g.has(ie)&&(q=!0,g.delete(ie)),w.needsAnimating[ie]=!0;const X=n.getValue(ie);X&&(X.liveStyle=!1)};for(const ie in z){const X=ae[ie],ne=oe[ie];if(y.hasOwnProperty(ie))continue;let re=!1;zf(X)&&zf(ne)?re=!Cw(X,ne):re=X!==ne,re?X!=null?G(ie):g.add(ie):X!==void 0&&g.has(ie)?G(ie):w.protectedKeys[ie]=!0}w.prevProp=C,w.prevResolvedValues=ae,w.isActive&&(y={...y,...ae}),i&&n.blockInitialAnimation&&(U=!1),U&&(!(T&&B)||q)&&m.push(...ee.map(ie=>({animation:ie,options:{type:b}})))}if(g.size){const M={};g.forEach(b=>{const w=n.getBaseTarget(b),C=n.getValue(b);C&&(C.liveStyle=!0),M[b]=w??null}),m.push({animation:M})}let S=!!m.length;return i&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(S=!1),i=!1,S?e(m):Promise.resolve()}function u(d,h){var p;if(t[d].isActive===h)return Promise.resolve();(p=n.variantChildren)===null||p===void 0||p.forEach(g=>{var y;return(y=g.animationState)===null||y===void 0?void 0:y.setActive(d,h)}),t[d].isActive=h;const m=l(d);for(const g in t)t[g].protectedKeys={};return m}return{animateChanges:l,setActive:u,setAnimateFunction:a,getState:()=>t,reset:()=>{t=A0(),i=!0}}}function R2(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Cw(e,n):!1}function Kr(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function A0(){return{animate:Kr(!0),whileInView:Kr(),whileHover:Kr(),whileTap:Kr(),whileDrag:Kr(),whileFocus:Kr(),exit:Kr()}}class Fr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class k2 extends Fr{constructor(e){super(e),e.animationState||(e.animationState=P2(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Du(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let D2=0;class I2 extends Fr{constructor(){super(...arguments),this.id=D2++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const s=this.node.animationState.setActive("exit",!e);t&&!e&&s.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const N2={animation:{Feature:k2},exit:{Feature:I2}};function tl(n,e,t,i={passive:!0}){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t)}function ml(n){return{point:{x:n.pageX,y:n.pageY}}}const F2=n=>e=>Rp(e)&&n(e,ml(e));function Oa(n,e,t,i){return tl(n,e,F2(t),i)}const C0=(n,e)=>Math.abs(n-e);function z2(n,e){const t=C0(n.x,e.x),i=C0(n.y,e.y);return Math.sqrt(t**2+i**2)}class v_{constructor(e,t,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Hh(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,y=z2(m.offset,{x:0,y:0})>=3;if(!g&&!y)return;const{point:_}=m,{timestamp:S}=Wt;this.history.push({..._,timestamp:S});const{onStart:M,onMove:b}=this.handlers;g||(M&&M(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),b&&b(this.lastMoveEvent,m)},this.handlePointerMove=(m,g)=>{this.lastMoveEvent=m,this.lastMoveEventInfo=Uh(g,this.transformPagePoint),ct.update(this.updatePoint,!0)},this.handlePointerUp=(m,g)=>{this.end();const{onEnd:y,onSessionEnd:_,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=Hh(m.type==="pointercancel"?this.lastMoveEventInfo:Uh(g,this.transformPagePoint),this.history);this.startEvent&&y&&y(m,M),_&&_(m,M)},!Rp(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=i,this.contextWindow=s||window;const l=ml(e),u=Uh(l,this.transformPagePoint),{point:d}=u,{timestamp:h}=Wt;this.history=[{...d,timestamp:h}];const{onSessionStart:p}=t;p&&p(e,Hh(u,this.history)),this.removeListeners=pl(Oa(this.contextWindow,"pointermove",this.handlePointerMove),Oa(this.contextWindow,"pointerup",this.handlePointerUp),Oa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),mi(this.updatePoint)}}function Uh(n,e){return e?{point:e(n.point)}:n}function L0(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Hh({point:n},e){return{point:n,delta:L0(n,y_(e)),offset:L0(n,B2(e)),velocity:O2(e,.1)}}function B2(n){return n[0]}function y_(n){return n[n.length-1]}function O2(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,i=null;const s=y_(n);for(;t>=0&&(i=n[t],!(s.timestamp-i.timestamp>Zi(e)));)t--;if(!i)return{x:0,y:0};const a=Ji(s.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const l={x:(s.x-i.x)/a,y:(s.y-i.y)/a};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}const x_=1e-4,V2=1-x_,U2=1+x_,w_=.01,H2=0-w_,G2=0+w_;function zn(n){return n.max-n.min}function W2(n,e,t){return Math.abs(n-e)<=t}function P0(n,e,t,i=.5){n.origin=i,n.originPoint=Lt(e.min,e.max,n.origin),n.scale=zn(t)/zn(e),n.translate=Lt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=V2&&n.scale<=U2||isNaN(n.scale))&&(n.scale=1),(n.translate>=H2&&n.translate<=G2||isNaN(n.translate))&&(n.translate=0)}function Va(n,e,t,i){P0(n.x,e.x,t.x,i?i.originX:void 0),P0(n.y,e.y,t.y,i?i.originY:void 0)}function R0(n,e,t){n.min=t.min+e.min,n.max=n.min+zn(e)}function j2(n,e,t){R0(n.x,e.x,t.x),R0(n.y,e.y,t.y)}function k0(n,e,t){n.min=e.min-t.min,n.max=n.min+zn(e)}function Ua(n,e,t){k0(n.x,e.x,t.x),k0(n.y,e.y,t.y)}function X2(n,{min:e,max:t},i){return e!==void 0&&n<e?n=i?Lt(e,n,i.min):Math.max(n,e):t!==void 0&&n>t&&(n=i?Lt(t,n,i.max):Math.min(n,t)),n}function D0(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function Y2(n,{top:e,left:t,bottom:i,right:s}){return{x:D0(n.x,t,s),y:D0(n.y,e,i)}}function I0(n,e){let t=e.min-n.min,i=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,i]=[i,t]),{min:t,max:i}}function q2(n,e){return{x:I0(n.x,e.x),y:I0(n.y,e.y)}}function $2(n,e){let t=.5;const i=zn(n),s=zn(e);return s>i?t=as(e.min,e.max-i,n.min):i>s&&(t=as(n.min,n.max-s,e.min)),Ri(0,1,t)}function Z2(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const qf=.35;function J2(n=qf){return n===!1?n=0:n===!0&&(n=qf),{x:N0(n,"left","right"),y:N0(n,"top","bottom")}}function N0(n,e,t){return{min:F0(n,e),max:F0(n,t)}}function F0(n,e){return typeof n=="number"?n:n[e]||0}const z0=()=>({translate:0,scale:1,origin:0,originPoint:0}),lo=()=>({x:z0(),y:z0()}),B0=()=>({min:0,max:0}),Ot=()=>({x:B0(),y:B0()});function Yn(n){return[n("x"),n("y")]}function __({top:n,left:e,right:t,bottom:i}){return{x:{min:e,max:t},y:{min:n,max:i}}}function K2({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function Q2(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),i=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:i.y,right:i.x}}function Gh(n){return n===void 0||n===1}function $f({scale:n,scaleX:e,scaleY:t}){return!Gh(n)||!Gh(e)||!Gh(t)}function ts(n){return $f(n)||b_(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function b_(n){return O0(n.x)||O0(n.y)}function O0(n){return n&&n!=="0%"}function xu(n,e,t){const i=n-t,s=e*i;return t+s}function V0(n,e,t,i,s){return s!==void 0&&(n=xu(n,s,i)),xu(n,t,i)+e}function Zf(n,e=0,t=1,i,s){n.min=V0(n.min,e,t,i,s),n.max=V0(n.max,e,t,i,s)}function S_(n,{x:e,y:t}){Zf(n.x,e.translate,e.scale,e.originPoint),Zf(n.y,t.translate,t.scale,t.originPoint)}const U0=.999999999999,H0=1.0000000000001;function eA(n,e,t,i=!1){const s=t.length;if(!s)return;e.x=e.y=1;let a,l;for(let u=0;u<s;u++){a=t[u],l=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(i&&a.options.layoutScroll&&a.scroll&&a!==a.root&&uo(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),l&&(e.x*=l.x.scale,e.y*=l.y.scale,S_(n,l)),i&&ts(a.latestValues)&&uo(n,a.latestValues))}e.x<H0&&e.x>U0&&(e.x=1),e.y<H0&&e.y>U0&&(e.y=1)}function co(n,e){n.min=n.min+e,n.max=n.max+e}function G0(n,e,t,i,s=.5){const a=Lt(n.min,n.max,s);Zf(n,e,t,a,i)}function uo(n,e){G0(n.x,e.x,e.scaleX,e.scale,e.originX),G0(n.y,e.y,e.scaleY,e.scale,e.originY)}function M_(n,e){return __(Q2(n.getBoundingClientRect(),e))}function tA(n,e,t){const i=M_(n,t),{scroll:s}=e;return s&&(co(i.x,s.offset.x),co(i.y,s.offset.y)),i}const E_=({current:n})=>n?n.ownerDocument.defaultView:null,nA=new WeakMap;class iA{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ot(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=p=>{const{dragSnapToOrigin:m}=this.getProps();m?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(ml(p).point)},a=(p,m)=>{const{drag:g,dragPropagation:y,onDragStart:_}=this.getProps();if(g&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ZE(g),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Yn(M=>{let b=this.getAxisMotionValue(M).get()||0;if(Ci.test(b)){const{projection:w}=this.visualElement;if(w&&w.layout){const C=w.layout.layoutBox[M];C&&(b=zn(C)*(parseFloat(b)/100))}}this.originPoint[M]=b}),_&&ct.postRender(()=>_(p,m)),Vf(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},l=(p,m)=>{const{dragPropagation:g,dragDirectionLock:y,onDirectionLock:_,onDrag:S}=this.getProps();if(!g&&!this.openDragLock)return;const{offset:M}=m;if(y&&this.currentDirection===null){this.currentDirection=rA(M),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",m.point,M),this.updateAxis("y",m.point,M),this.visualElement.render(),S&&S(p,m)},u=(p,m)=>this.stop(p,m),d=()=>Yn(p=>{var m;return this.getAnimationState(p)==="paused"&&((m=this.getAxisMotionValue(p).animation)===null||m===void 0?void 0:m.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new v_(e,{onSessionStart:s,onStart:a,onMove:l,onSessionEnd:u,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:E_(this.visualElement)})}stop(e,t){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=t;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&ct.postRender(()=>a(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,i){const{drag:s}=this.getProps();if(!i||!Cc(e,s,this.currentDirection))return;const a=this.getAxisMotionValue(e);let l=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(l=X2(l,this.constraints[e],this.elastic[e])),a.set(l)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,a=this.constraints;t&&oo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&s?this.constraints=Y2(s.layoutBox,t):this.constraints=!1,this.elastic=J2(i),a!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Yn(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=Z2(s.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!oo(e))return!1;const i=e.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const a=tA(i,s.root,this.visualElement.getTransformPagePoint());let l=q2(s.layout.layoutBox,a);if(t){const u=t(K2(l));this.hasMutatedConstraints=!!u,u&&(l=__(u))}return l}startAnimation(e){const{drag:t,dragMomentum:i,dragElastic:s,dragTransition:a,dragSnapToOrigin:l,onDragTransitionEnd:u}=this.getProps(),d=this.constraints||{},h=Yn(p=>{if(!Cc(p,t,this.currentDirection))return;let m=d&&d[p]||{};l&&(m={min:0,max:0});const g=s?200:1e6,y=s?40:1e7,_={type:"inertia",velocity:i?e[p]:0,bounceStiffness:g,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...a,...m};return this.startAxisValueAnimation(p,_)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const i=this.getAxisMotionValue(e);return Vf(this.visualElement,e),i.start(Wp(e,i,0,t,this.visualElement,!1))}stopAnimation(){Yn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Yn(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),s=i[t];return s||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Yn(t=>{const{drag:i}=this.getProps();if(!Cc(t,i,this.currentDirection))return;const{projection:s}=this.visualElement,a=this.getAxisMotionValue(t);if(s&&s.layout){const{min:l,max:u}=s.layout.layoutBox[t];a.set(e[t]-Lt(l,u,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!oo(t)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Yn(l=>{const u=this.getAxisMotionValue(l);if(u&&this.constraints!==!1){const d=u.get();s[l]=$2({min:d,max:d},this.constraints[l])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Yn(l=>{if(!Cc(l,e,null))return;const u=this.getAxisMotionValue(l),{min:d,max:h}=this.constraints[l];u.set(Lt(d,h,s[l]))})}addListeners(){if(!this.visualElement.current)return;nA.set(this.visualElement,this);const e=this.visualElement.current,t=Oa(e,"pointerdown",d=>{const{drag:h,dragListener:p=!0}=this.getProps();h&&p&&this.start(d)}),i=()=>{const{dragConstraints:d}=this.getProps();oo(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,a=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),ct.read(i);const l=tl(window,"resize",()=>this.scalePositionWithinConstraints()),u=s.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(Yn(p=>{const m=this.getAxisMotionValue(p);m&&(this.originPoint[p]+=d[p].translate,m.set(m.get()+d[p].translate))}),this.visualElement.render())}));return()=>{l(),t(),a(),u&&u()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:a=!1,dragElastic:l=qf,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:s,dragConstraints:a,dragElastic:l,dragMomentum:u}}}function Cc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function rA(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class sA extends Fr{constructor(e){super(e),this.removeGroupControls=yn,this.removeListeners=yn,this.controls=new iA(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||yn}unmount(){this.removeGroupControls(),this.removeListeners()}}const W0=n=>(e,t)=>{n&&ct.postRender(()=>n(e,t))};class oA extends Fr{constructor(){super(...arguments),this.removePointerDownListener=yn}onPointerDown(e){this.session=new v_(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:E_(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:W0(e),onStart:W0(t),onMove:i,onEnd:(a,l)=>{delete this.session,s&&ct.postRender(()=>s(a,l))}}}mount(){this.removePointerDownListener=Oa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const au={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function j0(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const wa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(je.test(n))n=parseFloat(n);else return n;const t=j0(n,e.target.x),i=j0(n,e.target.y);return`${t}% ${i}%`}},aA={correct:(n,{treeScale:e,projectionDelta:t})=>{const i=n,s=kr.parse(n);if(s.length>5)return i;const a=kr.createTransformer(n),l=typeof s[0]!="number"?1:0,u=t.x.scale*e.x,d=t.y.scale*e.y;s[0+l]/=u,s[1+l]/=d;const h=Lt(u,d,.5);return typeof s[2+l]=="number"&&(s[2+l]/=h),typeof s[3+l]=="number"&&(s[3+l]/=h),a(s)}};class lA extends Y.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:s}=this.props,{projection:a}=e;RE(cA),a&&(t.group&&t.group.add(a),i&&i.register&&s&&i.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),au.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:i,drag:s,isPresent:a}=this.props,l=i.projection;return l&&(l.isPresent=a,s||e.layoutDependency!==t||t===void 0?l.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?l.promote():l.relegate()||ct.postRender(()=>{const u=l.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),vp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:s}=e;s&&(s.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function T_(n){const[e,t]=lw(),i=Y.useContext(dp);return te.jsx(lA,{...n,layoutGroup:i,switchLayoutGroup:Y.useContext(mw),isPresent:e,safeToRemove:t})}const cA={borderRadius:{...wa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wa,borderTopRightRadius:wa,borderBottomLeftRadius:wa,borderBottomRightRadius:wa,boxShadow:aA};function uA(n,e,t){const i=Kt(n)?n:Ai(n);return i.start(Wp("",i,e,t)),i.animation}function dA(n){return n instanceof SVGElement&&n.tagName!=="svg"}const hA=(n,e)=>n.depth-e.depth;class fA{constructor(){this.children=[],this.isDirty=!1}add(e){kp(this.children,e),this.isDirty=!0}remove(e){Dp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(hA),this.isDirty=!1,this.children.forEach(e)}}function pA(n,e){const t=Li.now(),i=({timestamp:s})=>{const a=s-t;a>=e&&(mi(i),n(a-e))};return ct.read(i,!0),()=>mi(i)}const A_=["TopLeft","TopRight","BottomLeft","BottomRight"],mA=A_.length,X0=n=>typeof n=="string"?parseFloat(n):n,Y0=n=>typeof n=="number"||je.test(n);function gA(n,e,t,i,s,a){s?(n.opacity=Lt(0,t.opacity!==void 0?t.opacity:1,vA(i)),n.opacityExit=Lt(e.opacity!==void 0?e.opacity:1,0,yA(i))):a&&(n.opacity=Lt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,i));for(let l=0;l<mA;l++){const u=`border${A_[l]}Radius`;let d=q0(e,u),h=q0(t,u);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Y0(d)===Y0(h)?(n[u]=Math.max(Lt(X0(d),X0(h),i),0),(Ci.test(h)||Ci.test(d))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=Lt(e.rotate||0,t.rotate||0,i))}function q0(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const vA=C_(0,.5,jw),yA=C_(.5,.95,yn);function C_(n,e,t){return i=>i<n?0:i>e?1:t(as(n,e,i))}function $0(n,e){n.min=e.min,n.max=e.max}function jn(n,e){$0(n.x,e.x),$0(n.y,e.y)}function Z0(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function J0(n,e,t,i,s){return n-=e,n=xu(n,1/t,i),s!==void 0&&(n=xu(n,1/s,i)),n}function xA(n,e=0,t=1,i=.5,s,a=n,l=n){if(Ci.test(e)&&(e=parseFloat(e),e=Lt(l.min,l.max,e/100)-l.min),typeof e!="number")return;let u=Lt(a.min,a.max,i);n===a&&(u-=e),n.min=J0(n.min,e,t,u,s),n.max=J0(n.max,e,t,u,s)}function K0(n,e,[t,i,s],a,l){xA(n,e[t],e[i],e[s],e.scale,a,l)}const wA=["x","scaleX","originX"],_A=["y","scaleY","originY"];function Q0(n,e,t,i){K0(n.x,e,wA,t?t.x:void 0,i?i.x:void 0),K0(n.y,e,_A,t?t.y:void 0,i?i.y:void 0)}function ey(n){return n.translate===0&&n.scale===1}function L_(n){return ey(n.x)&&ey(n.y)}function ty(n,e){return n.min===e.min&&n.max===e.max}function bA(n,e){return ty(n.x,e.x)&&ty(n.y,e.y)}function ny(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function P_(n,e){return ny(n.x,e.x)&&ny(n.y,e.y)}function iy(n){return zn(n.x)/zn(n.y)}function ry(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class SA{constructor(){this.members=[]}add(e){kp(this.members,e),e.scheduleRender()}remove(e){if(Dp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(s=>e===s);if(t===0)return!1;let i;for(let s=t;s>=0;s--){const a=this.members[s];if(a.isPresent!==!1){i=a;break}}return i?(this.promote(i),!0):!1}promote(e,t){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:s}=e.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function MA(n,e,t){let i="";const s=n.x.translate/e.x,a=n.y.translate/e.y,l=(t==null?void 0:t.z)||0;if((s||a||l)&&(i=`translate3d(${s}px, ${a}px, ${l}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:m,rotateY:g,skewX:y,skewY:_}=t;h&&(i=`perspective(${h}px) ${i}`),p&&(i+=`rotate(${p}deg) `),m&&(i+=`rotateX(${m}deg) `),g&&(i+=`rotateY(${g}deg) `),y&&(i+=`skewX(${y}deg) `),_&&(i+=`skewY(${_}deg) `)}const u=n.x.scale*e.x,d=n.y.scale*e.y;return(u!==1||d!==1)&&(i+=`scale(${u}, ${d})`),i||"none"}const ns={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ia=typeof window<"u"&&window.MotionDebug!==void 0,Wh=["","X","Y","Z"],EA={visibility:"hidden"},sy=1e3;let TA=0;function jh(n,e,t,i){const{latestValues:s}=e;s[n]&&(t[n]=s[n],e.setStaticValue(n,0),i&&(i[n]=0))}function R_(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Bw(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:s,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",ct,!(s||a))}const{parent:i}=n;i&&!i.hasCheckedOptimisedAppear&&R_(i)}function k_({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(l={},u=e==null?void 0:e()){this.id=TA++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ia&&(ns.totalNodes=ns.resolvedTargetDeltas=ns.recalculatedProjection=0),this.nodes.forEach(LA),this.nodes.forEach(IA),this.nodes.forEach(NA),this.nodes.forEach(PA),Ia&&window.MotionDebug.record(ns)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=l,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new fA)}addEventListener(l,u){return this.eventHandlers.has(l)||this.eventHandlers.set(l,new Ip),this.eventHandlers.get(l).add(u)}notifyListeners(l,...u){const d=this.eventHandlers.get(l);d&&d.notify(...u)}hasListeners(l){return this.eventHandlers.has(l)}mount(l,u=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=dA(l),this.instance=l;const{layoutId:d,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(l),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),u&&(h||d)&&(this.isLayoutDirty=!0),n){let m;const g=()=>this.root.updateBlockedByResize=!1;n(l,()=>{this.root.updateBlockedByResize=!0,m&&m(),m=pA(g,250),au.hasAnimatedSinceResize&&(au.hasAnimatedSinceResize=!1,this.nodes.forEach(ay))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&p&&(d||h)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:g,hasRelativeTargetChanged:y,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||p.getDefaultTransition()||VA,{onLayoutAnimationStart:M,onLayoutAnimationComplete:b}=p.getProps(),w=!this.targetLayout||!P_(this.targetLayout,_)||y,C=!g&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||C||g&&(w||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(m,C);const R={...Ap(S,"layout"),onPlay:M,onComplete:b};(p.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R)}else g||ay(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const l=this.getStack();l&&l.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,mi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(FA),this.animationId++)}getTransformTemplate(){const{visualElement:l}=this.options;return l&&l.getProps().transformTemplate}willUpdate(l=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&R_(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const m=this.path[p];m.shouldResetTransform=!0,m.updateScroll("snapshot"),m.options.layoutRoot&&m.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),l&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(oy);return}this.isUpdating||this.nodes.forEach(kA),this.isUpdating=!1,this.nodes.forEach(DA),this.nodes.forEach(AA),this.nodes.forEach(CA),this.clearAllSnapshots();const u=Li.now();Wt.delta=Ri(0,1e3/60,u-Wt.timestamp),Wt.timestamp=u,Wt.isProcessing=!0,Nh.update.process(Wt),Nh.preRender.process(Wt),Nh.render.process(Wt),Wt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,vp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(RA),this.sharedNodes.forEach(zA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ct.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ct.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const l=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ot(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,l?l.layoutBox:void 0)}updateScroll(l="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===l&&(u=!1),u){const d=i(this.instance);this.scroll={animationId:this.root.animationId,phase:l,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!s)return;const l=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!L_(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;l&&(u||ts(this.latestValues)||p)&&(s(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(l=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);return l&&(d=this.removeTransform(d)),UA(d),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var l;const{visualElement:u}=this.options;if(!u)return Ot();const d=u.measureViewportBox();if(!(((l=this.scroll)===null||l===void 0?void 0:l.wasRoot)||this.path.some(HA))){const{scroll:p}=this.root;p&&(co(d.x,p.offset.x),co(d.y,p.offset.y))}return d}removeElementScroll(l){var u;const d=Ot();if(jn(d,l),!((u=this.scroll)===null||u===void 0)&&u.wasRoot)return d;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:m,options:g}=p;p!==this.root&&m&&g.layoutScroll&&(m.wasRoot&&jn(d,l),co(d.x,m.offset.x),co(d.y,m.offset.y))}return d}applyTransform(l,u=!1){const d=Ot();jn(d,l);for(let h=0;h<this.path.length;h++){const p=this.path[h];!u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&uo(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),ts(p.latestValues)&&uo(d,p.latestValues)}return ts(this.latestValues)&&uo(d,this.latestValues),d}removeTransform(l){const u=Ot();jn(u,l);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!ts(h.latestValues))continue;$f(h.latestValues)&&h.updateSnapshot();const p=Ot(),m=h.measurePageBox();jn(p,m),Q0(u,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return ts(this.latestValues)&&Q0(u,this.latestValues),u}setTargetDelta(l){this.targetDelta=l,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(l){this.options={...this.options,...l,crossfade:l.crossfade!==void 0?l.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Wt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(l=!1){var u;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(l||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:g}=this.options;if(!(!this.layout||!(m||g))){if(this.resolvedRelativeTargetAt=Wt.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ot(),this.relativeTargetOrigin=Ot(),Ua(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),jn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ot(),this.targetWithTransforms=Ot()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),j2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):jn(this.target,this.layout.layoutBox),S_(this.target,this.targetDelta)):jn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ot(),this.relativeTargetOrigin=Ot(),Ua(this.relativeTargetOrigin,this.target,y.target),jn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ia&&ns.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||$f(this.parent.latestValues)||b_(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var l;const u=this.getLead(),d=!!this.resumingFrom||this!==u;let h=!0;if((this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Wt.timestamp&&(h=!1),h)return;const{layout:p,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||m))return;jn(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,y=this.treeScale.y;eA(this.layoutCorrected,this.treeScale,this.path,d),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Ot());const{target:_}=u;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Z0(this.prevProjectionDelta.x,this.projectionDelta.x),Z0(this.prevProjectionDelta.y,this.projectionDelta.y)),Va(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==y||!ry(this.projectionDelta.x,this.prevProjectionDelta.x)||!ry(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_)),Ia&&ns.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(l=!0){var u;if((u=this.options.visualElement)===null||u===void 0||u.scheduleRender(),l){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=lo(),this.projectionDelta=lo(),this.projectionDeltaWithTransform=lo()}setAnimationOrigin(l,u=!1){const d=this.snapshot,h=d?d.latestValues:{},p={...this.latestValues},m=lo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const g=Ot(),y=d?d.source:void 0,_=this.layout?this.layout.source:void 0,S=y!==_,M=this.getStack(),b=!M||M.members.length<=1,w=!!(S&&!b&&this.options.crossfade===!0&&!this.path.some(OA));this.animationProgress=0;let C;this.mixTargetDelta=R=>{const A=R/1e3;ly(m.x,l.x,A),ly(m.y,l.y,A),this.setTargetDelta(m),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ua(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox),BA(this.relativeTarget,this.relativeTargetOrigin,g,A),C&&bA(this.relativeTarget,C)&&(this.isProjectionDirty=!1),C||(C=Ot()),jn(C,this.relativeTarget)),S&&(this.animationValues=p,gA(p,h,this.latestValues,A,w,b)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=A},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(l){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(mi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ct.update(()=>{au.hasAnimatedSinceResize=!0,this.currentAnimation=uA(0,sy,{...l,onUpdate:u=>{this.mixTargetDelta(u),l.onUpdate&&l.onUpdate(u)},onComplete:()=>{l.onComplete&&l.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const l=this.getStack();l&&l.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(sy),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const l=this.getLead();let{targetWithTransforms:u,target:d,layout:h,latestValues:p}=l;if(!(!u||!d||!h)){if(this!==l&&this.layout&&h&&D_(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||Ot();const m=zn(this.layout.layoutBox.x);d.x.min=l.target.x.min,d.x.max=d.x.min+m;const g=zn(this.layout.layoutBox.y);d.y.min=l.target.y.min,d.y.max=d.y.min+g}jn(u,d),uo(u,p),Va(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(l,u){this.sharedNodes.has(l)||this.sharedNodes.set(l,new SA),this.sharedNodes.get(l).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const l=this.getStack();return l?l.lead===this:!0}getLead(){var l;const{layoutId:u}=this.options;return u?((l=this.getStack())===null||l===void 0?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:u}=this.options;return u?(l=this.getStack())===null||l===void 0?void 0:l.prevLead:void 0}getStack(){const{layoutId:l}=this.options;if(l)return this.root.sharedNodes.get(l)}promote({needsReset:l,transition:u,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),l&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const l=this.getStack();return l?l.relegate(this):!1}resetSkewAndRotation(){const{visualElement:l}=this.options;if(!l)return;let u=!1;const{latestValues:d}=l;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(u=!0),!u)return;const h={};d.z&&jh("z",l,h,this.animationValues);for(let p=0;p<Wh.length;p++)jh(`rotate${Wh[p]}`,l,h,this.animationValues),jh(`skew${Wh[p]}`,l,h,this.animationValues);l.render();for(const p in h)l.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);l.scheduleRender()}getProjectionStyles(l){var u,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return EA;const h={visibility:""},p=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=su(l==null?void 0:l.pointerEvents)||"",h.transform=p?p(this.latestValues,""):"none",h;const m=this.getLead();if(!this.projectionDelta||!this.layout||!m.target){const S={};return this.options.layoutId&&(S.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,S.pointerEvents=su(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!ts(this.latestValues)&&(S.transform=p?p({},""):"none",this.hasProjected=!1),S}const g=m.animationValues||m.latestValues;this.applyTransformsToTarget(),h.transform=MA(this.projectionDeltaWithTransform,this.treeScale,g),p&&(h.transform=p(g,h.transform));const{x:y,y:_}=this.projectionDelta;h.transformOrigin=`${y.origin*100}% ${_.origin*100}% 0`,m.animationValues?h.opacity=m===this?(d=(u=g.opacity)!==null&&u!==void 0?u:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:g.opacityExit:h.opacity=m===this?g.opacity!==void 0?g.opacity:"":g.opacityExit!==void 0?g.opacityExit:0;for(const S in pu){if(g[S]===void 0)continue;const{correct:M,applyTo:b}=pu[S],w=h.transform==="none"?g[S]:M(g[S],m);if(b){const C=b.length;for(let R=0;R<C;R++)h[b[R]]=w}else h[S]=w}return this.options.layoutId&&(h.pointerEvents=m===this?su(l==null?void 0:l.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(l=>{var u;return(u=l.currentAnimation)===null||u===void 0?void 0:u.stop()}),this.root.nodes.forEach(oy),this.root.sharedNodes.clear()}}}function AA(n){n.updateLayout()}function CA(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=n.layout,{animationType:a}=n.options,l=t.source!==n.layout.source;a==="size"?Yn(m=>{const g=l?t.measuredBox[m]:t.layoutBox[m],y=zn(g);g.min=i[m].min,g.max=g.min+y}):D_(a,t.layoutBox,i)&&Yn(m=>{const g=l?t.measuredBox[m]:t.layoutBox[m],y=zn(i[m]);g.max=g.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[m].max=n.relativeTarget[m].min+y)});const u=lo();Va(u,i,t.layoutBox);const d=lo();l?Va(d,n.applyTransform(s,!0),t.measuredBox):Va(d,i,t.layoutBox);const h=!L_(u);let p=!1;if(!n.resumeFrom){const m=n.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:g,layout:y}=m;if(g&&y){const _=Ot();Ua(_,t.layoutBox,g.layoutBox);const S=Ot();Ua(S,i,y.layoutBox),P_(_,S)||(p=!0),m.options.layoutRoot&&(n.relativeTarget=S,n.relativeTargetOrigin=_,n.relativeParent=m)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:d,layoutDelta:u,hasLayoutChanged:h,hasRelativeTargetChanged:p})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function LA(n){Ia&&ns.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function PA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function RA(n){n.clearSnapshot()}function oy(n){n.clearMeasurements()}function kA(n){n.isLayoutDirty=!1}function DA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function ay(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function IA(n){n.resolveTargetDelta()}function NA(n){n.calcProjection()}function FA(n){n.resetSkewAndRotation()}function zA(n){n.removeLeadSnapshot()}function ly(n,e,t){n.translate=Lt(e.translate,0,t),n.scale=Lt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function cy(n,e,t,i){n.min=Lt(e.min,t.min,i),n.max=Lt(e.max,t.max,i)}function BA(n,e,t,i){cy(n.x,e.x,t.x,i),cy(n.y,e.y,t.y,i)}function OA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const VA={duration:.45,ease:[.4,0,.1,1]},uy=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),dy=uy("applewebkit/")&&!uy("chrome/")?Math.round:yn;function hy(n){n.min=dy(n.min),n.max=dy(n.max)}function UA(n){hy(n.x),hy(n.y)}function D_(n,e,t){return n==="position"||n==="preserve-aspect"&&!W2(iy(e),iy(t),.2)}function HA(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const GA=k_({attachResizeListener:(n,e)=>tl(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Xh={current:void 0},I_=k_({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Xh.current){const n=new GA({});n.mount(window),n.setOptions({layoutScroll:!0}),Xh.current=n}return Xh.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),WA={pan:{Feature:oA},drag:{Feature:sA,ProjectionNode:I_,MeasureLayout:T_}};function fy(n,e,t){const{props:i}=n;n.animationState&&i.whileHover&&n.animationState.setActive("whileHover",t==="Start");const s="onHover"+t,a=i[s];a&&ct.postRender(()=>a(e,ml(e)))}class jA extends Fr{mount(){const{current:e}=this.node;e&&(this.unmount=jE(e,t=>(fy(this.node,t,"Start"),i=>fy(this.node,i,"End"))))}unmount(){}}class XA extends Fr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=pl(tl(this.node.current,"focus",()=>this.onFocus()),tl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function py(n,e,t){const{props:i}=n;n.animationState&&i.whileTap&&n.animationState.setActive("whileTap",t==="Start");const s="onTap"+(t==="End"?"":t),a=i[s];a&&ct.postRender(()=>a(e,ml(e)))}class YA extends Fr{mount(){const{current:e}=this.node;e&&(this.unmount=$E(e,t=>(py(this.node,t,"Start"),(i,{success:s})=>py(this.node,i,s?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Jf=new WeakMap,Yh=new WeakMap,qA=n=>{const e=Jf.get(n.target);e&&e(n)},$A=n=>{n.forEach(qA)};function ZA({root:n,...e}){const t=n||document;Yh.has(t)||Yh.set(t,{});const i=Yh.get(t),s=JSON.stringify(e);return i[s]||(i[s]=new IntersectionObserver($A,{root:n,...e})),i[s]}function JA(n,e,t){const i=ZA(e);return Jf.set(n,t),i.observe(n),()=>{Jf.delete(n),i.unobserve(n)}}const KA={some:0,all:1};class QA extends Fr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:i,amount:s="some",once:a}=e,l={root:t?t.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:KA[s]},u=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:m}=this.node.getProps(),g=h?p:m;g&&g(d)};return JA(this.node.current,l,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(eC(e,t))&&this.startObserver()}unmount(){}}function eC({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const tC={inView:{Feature:QA},tap:{Feature:YA},focus:{Feature:XA},hover:{Feature:jA}},nC={layout:{ProjectionNode:I_,MeasureLayout:T_}},Kf={current:null},N_={current:!1};function iC(){if(N_.current=!0,!!hp)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Kf.current=n.matches;n.addListener(e),e()}else Kf.current=!1}const rC=[...s_,hn,kr],sC=n=>rC.find(r_(n)),my=new WeakMap;function oC(n,e,t){for(const i in e){const s=e[i],a=t[i];if(Kt(s))n.addValue(i,s);else if(Kt(a))n.addValue(i,Ai(s,{owner:n}));else if(a!==s)if(n.hasValue(i)){const l=n.getValue(i);l.liveStyle===!0?l.jump(s):l.hasAnimated||l.set(s)}else{const l=n.getStaticValue(i);n.addValue(i,Ai(l!==void 0?l:s,{owner:n}))}}for(const i in t)e[i]===void 0&&n.removeValue(i);return e}const gy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class aC{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:a,visualState:l},u={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Up,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Li.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,ct.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:p}=l;this.onUpdate=p,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=s,this.options=u,this.blockInitialAnimation=!!a,this.isControllingVariants=Iu(t),this.isVariantNode=fw(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:m,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const y in g){const _=g[y];d[y]!==void 0&&Kt(_)&&_.set(d[y],!1)}}mount(e){this.current=e,my.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,i)=>this.bindToMotionValue(i,t)),N_.current||iC(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Kf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){my.delete(this.current),this.projection&&this.projection.unmount(),mi(this.notifyUpdate),mi(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=ds.has(e),s=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&ct.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),a=t.on("renderRequest",this.scheduleRender);let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{s(),a(),l&&l(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in yo){const t=yo[e];if(!t)continue;const{isEnabled:i,Feature:s}=t;if(!this.features[e]&&s&&i(this.props)&&(this.features[e]=new s(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ot()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let i=0;i<gy.length;i++){const s=gy[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const a="on"+s,l=e[a];l&&(this.propEventSubscriptions[s]=this.on(s,l))}this.prevMotionValues=oC(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&t!==void 0&&(i=Ai(t===null?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){var i;let s=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return s!=null&&(typeof s=="string"&&(n_(s)||Yw(s))?s=parseFloat(s):!sC(s)&&kr.test(t)&&(s=Qw(e,t)),this.setBaseTarget(e,Kt(s)?s.get():s)),Kt(s)?s.get():s}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:i}=this.props;let s;if(typeof i=="string"||typeof i=="object"){const l=xp(this.props,i,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);l&&(s=l[e])}if(i&&s!==void 0)return s;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!Kt(a)?a:this.initialValues[e]!==void 0&&s===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Ip),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class F_ extends aC{constructor(){super(...arguments),this.KeyframeResolver=o_}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Kt(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function lC(n){return window.getComputedStyle(n)}class cC extends F_{constructor(){super(...arguments),this.type="html",this.renderInstance=bw}readValueFromInstance(e,t){if(ds.has(t)){const i=Vp(t);return i&&i.default||0}else{const i=lC(e),s=(xw(t)?i.getPropertyValue(t):i[t])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:t}){return M_(e,t)}build(e,t,i){bp(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return Tp(e,t,i)}}class uC extends F_{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ot}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ds.has(t)){const i=Vp(t);return i&&i.default||0}return t=Sw.has(t)?t:gp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return Tw(e,t,i)}build(e,t,i){Sp(e,t,this.isSVGTag,i.transformTemplate)}renderInstance(e,t,i,s){Mw(e,t,i,s)}mount(e){this.isSVGTag=Ep(e.tagName),super.mount(e)}}const dC=(n,e)=>yp(n)?new uC(e):new cC(e,{allowProjection:n!==Y.Fragment}),hC=VE({...N2,...tC,...WA,...nC},dC),Mt=tE(hC);function fC(n,e,t){Y.useInsertionEffect(()=>n.on(e,t),[n,e,t])}function z_(n,e){let t;const i=()=>{const{currentTime:s}=e,l=(s===null?0:s.value)/100;t!==l&&n(l),t=l};return ct.update(i,!0),()=>mi(i)}const lu=new WeakMap;let Tr;function pC(n,e){if(e){const{inlineSize:t,blockSize:i}=e[0];return{width:t,height:i}}else return n instanceof SVGElement&&"getBBox"in n?n.getBBox():{width:n.offsetWidth,height:n.offsetHeight}}function mC({target:n,contentRect:e,borderBoxSize:t}){var i;(i=lu.get(n))===null||i===void 0||i.forEach(s=>{s({target:n,contentSize:e,get size(){return pC(n,t)}})})}function gC(n){n.forEach(mC)}function vC(){typeof ResizeObserver>"u"||(Tr=new ResizeObserver(gC))}function yC(n,e){Tr||vC();const t=Pp(n);return t.forEach(i=>{let s=lu.get(i);s||(s=new Set,lu.set(i,s)),s.add(e),Tr==null||Tr.observe(i)}),()=>{t.forEach(i=>{const s=lu.get(i);s==null||s.delete(e),s!=null&&s.size||Tr==null||Tr.unobserve(i)})}}const cu=new Set;let Ha;function xC(){Ha=()=>{const n={width:window.innerWidth,height:window.innerHeight},e={target:window,size:n,contentSize:n};cu.forEach(t=>t(e))},window.addEventListener("resize",Ha)}function wC(n){return cu.add(n),Ha||xC(),()=>{cu.delete(n),!cu.size&&Ha&&(Ha=void 0)}}function _C(n,e){return typeof n=="function"?wC(n):yC(n,e)}const bC=50,vy=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),SC=()=>({time:0,x:vy(),y:vy()}),MC={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function yy(n,e,t,i){const s=t[e],{length:a,position:l}=MC[e],u=s.current,d=t.time;s.current=n[`scroll${l}`],s.scrollLength=n[`scroll${a}`]-n[`client${a}`],s.offset.length=0,s.offset[0]=0,s.offset[1]=s.scrollLength,s.progress=as(0,s.scrollLength,s.current);const h=i-d;s.velocity=h>bC?0:Np(s.current-u,h)}function EC(n,e,t){yy(n,"x",e,t),yy(n,"y",e,t),e.time=t}function TC(n,e){const t={x:0,y:0};let i=n;for(;i&&i!==e;)if(i instanceof HTMLElement)t.x+=i.offsetLeft,t.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const s=i.getBoundingClientRect();i=i.parentElement;const a=i.getBoundingClientRect();t.x+=s.left-a.left,t.y+=s.top-a.top}else if(i instanceof SVGGraphicsElement){const{x:s,y:a}=i.getBBox();t.x+=s,t.y+=a;let l=null,u=i.parentNode;for(;!l;)u.tagName==="svg"&&(l=u),u=i.parentNode;i=l}else break;return t}const Qf={start:0,center:.5,end:1};function xy(n,e,t=0){let i=0;if(n in Qf&&(n=Qf[n]),typeof n=="string"){const s=parseFloat(n);n.endsWith("px")?i=s:n.endsWith("%")?n=s/100:n.endsWith("vw")?i=s/100*document.documentElement.clientWidth:n.endsWith("vh")?i=s/100*document.documentElement.clientHeight:n=s}return typeof n=="number"&&(i=e*n),t+i}const AC=[0,0];function CC(n,e,t,i){let s=Array.isArray(n)?n:AC,a=0,l=0;return typeof n=="number"?s=[n,n]:typeof n=="string"&&(n=n.trim(),n.includes(" ")?s=n.split(" "):s=[n,Qf[n]?n:"0"]),a=xy(s[0],t,i),l=xy(s[1],e),a-l}const LC={All:[[0,0],[1,1]]},PC={x:0,y:0};function RC(n){return"getBBox"in n&&n.tagName!=="svg"?n.getBBox():{width:n.clientWidth,height:n.clientHeight}}function kC(n,e,t){const{offset:i=LC.All}=t,{target:s=n,axis:a="y"}=t,l=a==="y"?"height":"width",u=s!==n?TC(s,n):PC,d=s===n?{width:n.scrollWidth,height:n.scrollHeight}:RC(s),h={width:n.clientWidth,height:n.clientHeight};e[a].offset.length=0;let p=!e[a].interpolate;const m=i.length;for(let g=0;g<m;g++){const y=CC(i[g],h[l],d[l],u[a]);!p&&y!==e[a].interpolatorOffsets[g]&&(p=!0),e[a].offset[g]=y}p&&(e[a].interpolate=Gp(e[a].offset,f_(i),{clamp:!1}),e[a].interpolatorOffsets=[...e[a].offset]),e[a].progress=Ri(0,1,e[a].interpolate(e[a].current))}function DC(n,e=n,t){if(t.x.targetOffset=0,t.y.targetOffset=0,e!==n){let i=e;for(;i&&i!==n;)t.x.targetOffset+=i.offsetLeft,t.y.targetOffset+=i.offsetTop,i=i.offsetParent}t.x.targetLength=e===n?e.scrollWidth:e.clientWidth,t.y.targetLength=e===n?e.scrollHeight:e.clientHeight,t.x.containerLength=n.clientWidth,t.y.containerLength=n.clientHeight}function IC(n,e,t,i={}){return{measure:()=>DC(n,i.target,t),update:s=>{EC(n,t,s),(i.offset||i.target)&&kC(n,t,i)},notify:()=>e(t)}}const _a=new WeakMap,wy=new WeakMap,qh=new WeakMap,_y=n=>n===document.documentElement?window:n;function jp(n,{container:e=document.documentElement,...t}={}){let i=qh.get(e);i||(i=new Set,qh.set(e,i));const s=SC(),a=IC(e,n,s,t);if(i.add(a),!_a.has(e)){const u=()=>{for(const g of i)g.measure()},d=()=>{for(const g of i)g.update(Wt.timestamp)},h=()=>{for(const g of i)g.notify()},p=()=>{ct.read(u,!1,!0),ct.read(d,!1,!0),ct.update(h,!1,!0)};_a.set(e,p);const m=_y(e);window.addEventListener("resize",p,{passive:!0}),e!==document.documentElement&&wy.set(e,_C(e,p)),m.addEventListener("scroll",p,{passive:!0})}const l=_a.get(e);return ct.read(l,!1,!0),()=>{var u;mi(l);const d=qh.get(e);if(!d||(d.delete(a),d.size))return;const h=_a.get(e);_a.delete(e),h&&(_y(e).removeEventListener("scroll",h),(u=wy.get(e))===null||u===void 0||u(),window.removeEventListener("resize",h))}}function NC({source:n,container:e,axis:t="y"}){n&&(e=n);const i={value:0},s=jp(a=>{i.value=a[t].progress*100},{container:e,axis:t});return{currentTime:i,cancel:s}}const $h=new Map;function B_({source:n,container:e=document.documentElement,axis:t="y"}={}){n&&(e=n),$h.has(e)||$h.set(e,{});const i=$h.get(e);return i[t]||(i[t]=Lw()?new ScrollTimeline({source:e,axis:t}):NC({source:e,axis:t})),i[t]}function FC(n){return n.length===2}function O_(n){return n&&(n.target||n.offset)}function zC(n,e){return FC(n)||O_(e)?jp(t=>{n(t[e.axis].progress,t)},e):z_(n,B_(e))}function BC(n,e){if(n.flatten(),O_(e))return n.pause(),jp(t=>{n.time=n.duration*t[e.axis].progress},e);{const t=B_(e);return n.attachTimeline?n.attachTimeline(t,i=>(i.pause(),z_(s=>{i.time=i.duration*s},t))):yn}}function OC(n,{axis:e="y",...t}={}){const i={axis:e,...t};return typeof n=="function"?zC(n,i):BC(n,i)}function by(n,e){YM(!!(!e||e.current))}const VC=()=>({scrollX:Ai(0),scrollY:Ai(0),scrollXProgress:Ai(0),scrollYProgress:Ai(0)});function V_({container:n,target:e,layoutEffect:t=!0,...i}={}){const s=So(VC);return(t?dl:Y.useEffect)(()=>(by("target",e),by("container",n),OC((l,{x:u,y:d})=>{s.scrollX.set(u.current),s.scrollXProgress.set(u.progress),s.scrollY.set(d.current),s.scrollYProgress.set(d.progress)},{...i,container:(n==null?void 0:n.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[n,e,JSON.stringify(i.offset)]),s}function U_(n){const e=So(()=>Ai(n)),{isStatic:t}=Y.useContext(ul);if(t){const[,i]=Y.useState(n);Y.useEffect(()=>e.on("change",i),[])}return e}function H_(n,e){const t=U_(e()),i=()=>t.set(e());return i(),dl(()=>{const s=()=>ct.preRender(i,!1,!0),a=n.map(l=>l.on("change",s));return()=>{a.forEach(l=>l()),mi(i)}}),t}function Sy(n){return typeof n=="number"?n:parseFloat(n)}function UC(n,e={}){const{isStatic:t}=Y.useContext(ul),i=Y.useRef(null),s=U_(Kt(n)?Sy(n.get()):n),a=Y.useRef(s.get()),l=Y.useRef(()=>{}),u=()=>{const h=i.current;h&&h.time===0&&h.sample(Wt.delta),d(),i.current=l2({keyframes:[s.get(),a.current],velocity:s.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...e,onUpdate:l.current})},d=()=>{i.current&&i.current.stop()};return Y.useInsertionEffect(()=>s.attach((h,p)=>t?p(h):(a.current=h,l.current=p,ct.update(u),s.get()),d),[JSON.stringify(e)]),dl(()=>{if(Kt(n))return n.on("change",h=>s.set(Sy(h)))},[s]),s}const HC=n=>n&&typeof n=="object"&&n.mix,GC=n=>HC(n)?n.mix:void 0;function WC(...n){const e=!Array.isArray(n[0]),t=e?0:-1,i=n[0+t],s=n[1+t],a=n[2+t],l=n[3+t],u=Gp(s,a,{mixer:GC(a[0]),...l});return e?u(i):u}function jC(n){za.current=[],n();const e=H_(za.current,n);return za.current=void 0,e}function My(n,e,t,i){if(typeof n=="function")return jC(n);const s=typeof e=="function"?e:WC(e,t,i);return Array.isArray(n)?Ey(n,s):Ey([n],([a])=>s(a))}function Ey(n,e){const t=So(()=>[]);return H_(n,()=>{t.length=0;const i=n.length;for(let s=0;s<i;s++)t[s]=n[s].get();return e(t)})}const XC={some:0,all:1};function YC(n,e,{root:t,margin:i,amount:s="some"}={}){const a=Pp(n),l=new WeakMap,u=h=>{h.forEach(p=>{const m=l.get(p.target);if(p.isIntersecting!==!!m)if(p.isIntersecting){const g=e(p);typeof g=="function"?l.set(p.target,g):d.unobserve(p.target)}else typeof m=="function"&&(m(p),l.delete(p.target))})},d=new IntersectionObserver(u,{root:t,rootMargin:i,threshold:typeof s=="number"?s:XC[s]});return a.forEach(h=>d.observe(h)),()=>d.disconnect()}function qC(n,{root:e,margin:t,amount:i,once:s=!1}={}){const[a,l]=Y.useState(!1);return Y.useEffect(()=>{if(!n.current||s&&a)return;const u=()=>(l(!0),s?void 0:()=>l(!1)),d={root:e&&e.current||void 0,margin:t,amount:i};return YC(n.current,u,d)},[e,n,t,s,i]),a}const $C=[{to:"/",label:"Home"},{to:"/work",label:"Work"},{to:"/about",label:"About"},{to:"/contact",label:"Contact"}];function ZC(){return te.jsx("nav",{className:"pill-nav",children:$C.map(n=>te.jsx(Mt.div,{whileHover:{scale:1.06},whileTap:{scale:.94},children:te.jsx(BM,{to:n.to,className:({isActive:e})=>e?"active":"",end:n.to==="/",children:n.label})},n.to))})}/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const G_="128",JC=0,Ty=1,KC=2,W_=1,QC=2,Na=3,Bu=0,Jt=1,Ou=2,j_=1,Ga=0,Wa=1,ja=2,Ay=3,Cy=4,eL=5,so=100,tL=101,nL=102,Ly=103,Py=104,iL=200,rL=201,sL=202,oL=203,X_=204,Y_=205,aL=206,lL=207,cL=208,uL=209,dL=210,hL=0,fL=1,pL=2,ep=3,mL=4,gL=5,vL=6,yL=7,Vu=0,xL=1,wL=2,Xa=0,_L=1,bL=2,SL=3,ML=4,EL=5,q_=300,Xp=301,Yp=302,Ry=303,ky=304,qp=306,$p=307,tp=1e3,fi=1001,np=1002,vn=1003,Dy=1004,Iy=1005,qn=1006,TL=1007,Zp=1008,Jp=1009,AL=1010,CL=1011,wu=1012,LL=1013,uu=1014,Ar=1015,_u=1016,PL=1017,RL=1018,kL=1019,Ya=1020,DL=1021,ss=1022,pi=1023,IL=1024,NL=1025,go=1026,nl=1027,FL=1028,zL=1029,BL=1030,OL=1031,VL=1032,UL=1033,Ny=33776,Fy=33777,zy=33778,By=33779,Oy=35840,Vy=35841,Uy=35842,Hy=35843,HL=36196,Gy=37492,Wy=37496,GL=37808,WL=37809,jL=37810,XL=37811,YL=37812,qL=37813,$L=37814,ZL=37815,JL=37816,KL=37817,QL=37818,e3=37819,t3=37820,n3=37821,i3=36492,r3=37840,s3=37841,o3=37842,a3=37843,l3=37844,c3=37845,u3=37846,d3=37847,h3=37848,f3=37849,p3=37850,m3=37851,g3=37852,v3=37853,y3=2200,x3=2201,w3=2202,bu=2300,Su=2301,Zh=2302,ho=2400,fo=2401,Mu=2402,Kp=2500,$_=2501,_3=0,gl=3e3,Z_=3001,b3=3007,S3=3002,M3=3003,E3=3004,T3=3005,A3=3006,C3=3200,L3=3201,To=0,P3=1,Jh=7680,R3=519,il=35044,Eu=35048,jy="300 es";class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,l=s.length;a<l;a++)s[a].call(this,e);e.target=null}}}const nn=[];for(let n=0;n<256;n++)nn[n]=(n<16?"0":"")+n.toString(16);const Kh=Math.PI/180,ip=180/Math.PI;function Pi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toUpperCase()}function Fn(n,e,t){return Math.max(e,Math.min(t,n))}function k3(n,e){return(n%e+e)%e}function Qh(n,e,t){return(1-t)*n+t*e}function Xy(n){return(n&n-1)===0&&n!==0}function D3(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function I3(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class we{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*i-l*s+e.x,this.y=a*s+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}}we.prototype.isVector2=!0;class rn{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,s,a,l,u,d,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=a,p[5]=d,p[6]=i,p[7]=l,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,l=i[0],u=i[3],d=i[6],h=i[1],p=i[4],m=i[7],g=i[2],y=i[5],_=i[8],S=s[0],M=s[3],b=s[6],w=s[1],C=s[4],R=s[7],A=s[2],T=s[5],B=s[8];return a[0]=l*S+u*w+d*A,a[3]=l*M+u*C+d*T,a[6]=l*b+u*R+d*B,a[1]=h*S+p*w+m*A,a[4]=h*M+p*C+m*T,a[7]=h*b+p*R+m*B,a[2]=g*S+y*w+_*A,a[5]=g*M+y*C+_*T,a[8]=g*b+y*R+_*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],l=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*l*p-t*u*h-i*a*p+i*u*d+s*a*h-s*l*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],l=e[4],u=e[5],d=e[6],h=e[7],p=e[8],m=p*l-u*h,g=u*d-p*a,y=h*a-l*d,_=t*m+i*g+s*y;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=m*S,e[1]=(s*h-p*i)*S,e[2]=(u*i-s*l)*S,e[3]=g*S,e[4]=(p*t-s*d)*S,e[5]=(s*a-u*t)*S,e[6]=y*S,e[7]=(i*d-h*t)*S,e[8]=(l*t-i*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,l,u){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*l+h*u)+l+e,-s*h,s*d,-s*(-h*l+d*u)+u+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),s=this.elements,a=s[0],l=s[3],u=s[6],d=s[1],h=s[4],p=s[7];return s[0]=t*a+i*d,s[3]=t*l+i*h,s[6]=t*u+i*p,s[1]=-i*a+t*d,s[4]=-i*l+t*h,s[7]=-i*u+t*p,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}rn.prototype.isMatrix3=!0;let Vs;class Ao{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vs===void 0&&(Vs=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),Vs.width=e.width,Vs.height=e.height;const i=Vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let N3=0;class sn extends hs{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,i=fi,s=fi,a=qn,l=Zp,u=pi,d=Jp,h=1,p=gl){super(),Object.defineProperty(this,"id",{value:N3++}),this.uuid=Pi(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=p,this.version=0,this.onUpdate=null}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const s=this.image;if(s.uuid===void 0&&(s.uuid=Pi()),!t&&e.images[s.uuid]===void 0){let a;if(Array.isArray(s)){a=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?a.push(ef(s[l].image)):a.push(ef(s[l]))}else a=ef(s);e.images[s.uuid]={uuid:s.uuid,url:a}}i.image=s.uuid}return t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==q_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tp:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case np:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tp:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case np:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}sn.DEFAULT_IMAGE=void 0;sn.DEFAULT_MAPPING=q_;sn.prototype.isTexture=!0;function ef(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ao.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class mt{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*s+l[12]*a,this.y=l[1]*t+l[5]*i+l[9]*s+l[13]*a,this.z=l[2]*t+l[6]*i+l[10]*s+l[14]*a,this.w=l[3]*t+l[7]*i+l[11]*s+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const d=e.elements,h=d[0],p=d[4],m=d[8],g=d[1],y=d[5],_=d[9],S=d[2],M=d[6],b=d[10];if(Math.abs(p-g)<.01&&Math.abs(m-S)<.01&&Math.abs(_-M)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+S)<.1&&Math.abs(_+M)<.1&&Math.abs(h+y+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(h+1)/2,R=(y+1)/2,A=(b+1)/2,T=(p+g)/4,B=(m+S)/4,U=(_+M)/4;return C>R&&C>A?C<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(C),s=T/i,a=B/i):R>A?R<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(R),i=T/s,a=U/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=B/a,s=U/a),this.set(i,s,a,t),this}let w=Math.sqrt((M-_)*(M-_)+(m-S)*(m-S)+(g-p)*(g-p));return Math.abs(w)<.001&&(w=1),this.x=(M-_)/w,this.y=(m-S)/w,this.z=(g-p)/w,this.w=Math.acos((h+y+b-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}}mt.prototype.isVector4=!0;class os extends hs{constructor(e,t,i){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),i=i||{},this.texture=new sn(void 0,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.image={},this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:qn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}os.prototype.isWebGLRenderTarget=!0;class F3 extends os{constructor(e,t,i){super(e,t,i),this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}F3.prototype.isWebGLMultisampleRenderTarget=!0;class xn{constructor(e=0,t=0,i=0,s=1){this._x=e,this._y=t,this._z=i,this._w=s}static slerp(e,t,i,s){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,s)}static slerpFlat(e,t,i,s,a,l,u){let d=i[s+0],h=i[s+1],p=i[s+2],m=i[s+3];const g=a[l+0],y=a[l+1],_=a[l+2],S=a[l+3];if(u===0){e[t+0]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m;return}if(u===1){e[t+0]=g,e[t+1]=y,e[t+2]=_,e[t+3]=S;return}if(m!==S||d!==g||h!==y||p!==_){let M=1-u;const b=d*g+h*y+p*_+m*S,w=b>=0?1:-1,C=1-b*b;if(C>Number.EPSILON){const A=Math.sqrt(C),T=Math.atan2(A,b*w);M=Math.sin(M*T)/A,u=Math.sin(u*T)/A}const R=u*w;if(d=d*M+g*R,h=h*M+y*R,p=p*M+_*R,m=m*M+S*R,M===1-u){const A=1/Math.sqrt(d*d+h*h+p*p+m*m);d*=A,h*=A,p*=A,m*=A}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,s,a,l){const u=i[s],d=i[s+1],h=i[s+2],p=i[s+3],m=a[l],g=a[l+1],y=a[l+2],_=a[l+3];return e[t]=u*_+p*m+d*y-h*g,e[t+1]=d*_+p*g+h*m-u*y,e[t+2]=h*_+p*y+u*g-d*m,e[t+3]=p*_-u*m-d*g-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,s=e._y,a=e._z,l=e._order,u=Math.cos,d=Math.sin,h=u(i/2),p=u(s/2),m=u(a/2),g=d(i/2),y=d(s/2),_=d(a/2);switch(l){case"XYZ":this._x=g*p*m+h*y*_,this._y=h*y*m-g*p*_,this._z=h*p*_+g*y*m,this._w=h*p*m-g*y*_;break;case"YXZ":this._x=g*p*m+h*y*_,this._y=h*y*m-g*p*_,this._z=h*p*_-g*y*m,this._w=h*p*m+g*y*_;break;case"ZXY":this._x=g*p*m-h*y*_,this._y=h*y*m+g*p*_,this._z=h*p*_+g*y*m,this._w=h*p*m-g*y*_;break;case"ZYX":this._x=g*p*m-h*y*_,this._y=h*y*m+g*p*_,this._z=h*p*_-g*y*m,this._w=h*p*m+g*y*_;break;case"YZX":this._x=g*p*m+h*y*_,this._y=h*y*m+g*p*_,this._z=h*p*_-g*y*m,this._w=h*p*m-g*y*_;break;case"XZY":this._x=g*p*m-h*y*_,this._y=h*y*m-g*p*_,this._z=h*p*_+g*y*m,this._w=h*p*m+g*y*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],l=t[1],u=t[5],d=t[9],h=t[2],p=t[6],m=t[10],g=i+u+m;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(p-d)*y,this._y=(a-h)*y,this._z=(l-s)*y}else if(i>u&&i>m){const y=2*Math.sqrt(1+i-u-m);this._w=(p-d)/y,this._x=.25*y,this._y=(s+l)/y,this._z=(a+h)/y}else if(u>m){const y=2*Math.sqrt(1+u-i-m);this._w=(a-h)/y,this._x=(s+l)/y,this._y=.25*y,this._z=(d+p)/y}else{const y=2*Math.sqrt(1+m-i-u);this._w=(l-s)/y,this._x=(a+h)/y,this._y=(d+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,l=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+l*u+s*h-a*d,this._y=s*p+l*d+a*u-i*h,this._z=a*p+l*h+i*d-s*u,this._w=l*p-i*u-s*d-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,l=this._w;let u=l*e._w+i*e._x+s*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=i,this._y=s,this._z=a,this;const d=1-u*u;if(d<=Number.EPSILON){const y=1-t;return this._w=y*l+t*this._w,this._x=y*i+t*this._x,this._y=y*s+t*this._y,this._z=y*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(d),p=Math.atan2(h,u),m=Math.sin((1-t)*p)/h,g=Math.sin(t*p)/h;return this._w=l*m+this._w*g,this._x=i*m+this._x*g,this._y=s*m+this._y*g,this._z=a*m+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,i){this.copy(e).slerp(t,i)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}xn.prototype.isQuaternion=!0;class N{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Yy.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yy.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,l=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*l,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*l,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*l,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,l=e.y,u=e.z,d=e.w,h=d*t+l*s-u*i,p=d*i+u*t-a*s,m=d*s+a*i-l*t,g=-a*t-l*i-u*s;return this.x=h*d+g*-a+p*-u-m*-l,this.y=p*d+g*-l+m*-a-h*-u,this.z=m*d+g*-u+h*-l-p*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,l=t.x,u=t.y,d=t.z;return this.x=s*d-a*u,this.y=a*l-i*d,this.z=i*u-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tf.copy(this).projectOnVector(e),this.sub(tf)}reflect(e){return this.sub(tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}N.prototype.isVector3=!0;const tf=new N,Yy=new xn;class Jn{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,s=1/0,a=-1/0,l=-1/0,u=-1/0;for(let d=0,h=e.length;d<h;d+=3){const p=e[d],m=e[d+1],g=e[d+2];p<t&&(t=p),m<i&&(i=m),g<s&&(s=g),p>a&&(a=p),m>l&&(l=m),g>u&&(u=g)}return this.min.set(t,i,s),this.max.set(a,l,u),this}setFromBufferAttribute(e){let t=1/0,i=1/0,s=1/0,a=-1/0,l=-1/0,u=-1/0;for(let d=0,h=e.count;d<h;d++){const p=e.getX(d),m=e.getY(d),g=e.getZ(d);p<t&&(t=p),m<i&&(i=m),g<s&&(s=g),p>a&&(a=p),m>l&&(l=m),g>u&&(u=g)}return this.min.set(t,i,s),this.max.set(a,l,u),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ba.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return e===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),e=new N),this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),e=new N),this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),nf.copy(t.boundingBox),nf.applyMatrix4(e.matrixWorld),this.union(nf));const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),t=new N),t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ba),ba.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),Lc.subVectors(this.max,Sa),Us.subVectors(e.a,Sa),Hs.subVectors(e.b,Sa),Gs.subVectors(e.c,Sa),vr.subVectors(Hs,Us),yr.subVectors(Gs,Hs),Qr.subVectors(Us,Gs);let t=[0,-vr.z,vr.y,0,-yr.z,yr.y,0,-Qr.z,Qr.y,vr.z,0,-vr.x,yr.z,0,-yr.x,Qr.z,0,-Qr.x,-vr.y,vr.x,0,-yr.y,yr.x,0,-Qr.y,Qr.x,0];return!rf(t,Us,Hs,Gs,Lc)||(t=[1,0,0,0,1,0,0,0,1],!rf(t,Us,Hs,Gs,Lc))?!1:(Pc.crossVectors(vr,yr),t=[Pc.x,Pc.y,Pc.z],rf(t,Us,Hs,Gs,Lc))}clampPoint(e,t){return t===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),t=new N),t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ba.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return e===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(e.center),e.radius=this.getSize(ba).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Jn.prototype.isBox3=!0;const ji=[new N,new N,new N,new N,new N,new N,new N,new N],ba=new N,nf=new Jn,Us=new N,Hs=new N,Gs=new N,vr=new N,yr=new N,Qr=new N,Sa=new N,Lc=new N,Pc=new N,es=new N;function rf(n,e,t,i,s){for(let a=0,l=n.length-3;a<=l;a+=3){es.fromArray(n,a);const u=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),d=e.dot(es),h=t.dot(es),p=i.dot(es);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const z3=new Jn,qy=new N,sf=new N,of=new N;class Co{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):z3.setFromPoints(e).getCenter(i);let s=0;for(let a=0,l=e.length;a<l;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),t=new N),t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return e===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),e=new Jn),this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){of.subVectors(e,this.center);const t=of.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.add(of.multiplyScalar(s/i)),this.radius+=s}return this}union(e){return sf.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(qy.copy(e.center).add(sf)),this.expandByPoint(qy.copy(e.center).sub(sf)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new N,af=new N,Rc=new N,xr=new N,lf=new N,kc=new N,cf=new N;class Lo{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t===void 0&&(console.warn("THREE.Ray: .at() target is now required"),t=new N),t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),t=new N),t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.direction).multiplyScalar(t).add(this.origin),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){af.copy(e).add(t).multiplyScalar(.5),Rc.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(af);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Rc),u=xr.dot(this.direction),d=-xr.dot(Rc),h=xr.lengthSq(),p=Math.abs(1-l*l);let m,g,y,_;if(p>0)if(m=l*d-u,g=l*u-d,_=a*p,m>=0)if(g>=-_)if(g<=_){const S=1/p;m*=S,g*=S,y=m*(m+l*g+2*u)+g*(l*m+g+2*d)+h}else g=a,m=Math.max(0,-(l*g+u)),y=-m*m+g*(g+2*d)+h;else g=-a,m=Math.max(0,-(l*g+u)),y=-m*m+g*(g+2*d)+h;else g<=-_?(m=Math.max(0,-(-l*a+u)),g=m>0?-a:Math.min(Math.max(-a,-d),a),y=-m*m+g*(g+2*d)+h):g<=_?(m=0,g=Math.min(Math.max(-a,-d),a),y=g*(g+2*d)+h):(m=Math.max(0,-(l*a+u)),g=m>0?a:Math.min(Math.max(-a,-d),a),y=-m*m+g*(g+2*d)+h);else g=l>0?-a:a,m=Math.max(0,-(l*g+u)),y=-m*m+g*(g+2*d)+h;return i&&i.copy(this.direction).multiplyScalar(m).add(this.origin),s&&s.copy(Rc).multiplyScalar(g).add(af),y}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const i=Xi.dot(this.direction),s=Xi.dot(Xi)-i*i,a=e.radius*e.radius;if(s>a)return null;const l=Math.sqrt(a-s),u=i-l,d=i+l;return u<0&&d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,l,u,d;const h=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,s=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,s=(e.min.x-g.x)*h),p>=0?(a=(e.min.y-g.y)*p,l=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,l=(e.min.y-g.y)*p),i>l||a>s||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),m>=0?(u=(e.min.z-g.z)*m,d=(e.max.z-g.z)*m):(u=(e.max.z-g.z)*m,d=(e.min.z-g.z)*m),i>d||u>s)||((u>i||i!==i)&&(i=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,i,s,a){lf.subVectors(t,e),kc.subVectors(i,e),cf.crossVectors(lf,kc);let l=this.direction.dot(cf),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;xr.subVectors(this.origin,e);const d=u*this.direction.dot(kc.crossVectors(xr,kc));if(d<0)return null;const h=u*this.direction.dot(lf.cross(xr));if(h<0||d+h>l)return null;const p=-u*xr.dot(cf);return p<0?null:this.at(p/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,s,a,l,u,d,h,p,m,g,y,_,S,M){const b=this.elements;return b[0]=e,b[4]=t,b[8]=i,b[12]=s,b[1]=a,b[5]=l,b[9]=u,b[13]=d,b[2]=h,b[6]=p,b[10]=m,b[14]=g,b[3]=y,b[7]=_,b[11]=S,b[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),a=1/Ws.setFromMatrixColumn(e,1).length(),l=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*l,t[9]=i[9]*l,t[10]=i[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,s=e.y,a=e.z,l=Math.cos(i),u=Math.sin(i),d=Math.cos(s),h=Math.sin(s),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const g=l*p,y=l*m,_=u*p,S=u*m;t[0]=d*p,t[4]=-d*m,t[8]=h,t[1]=y+_*h,t[5]=g-S*h,t[9]=-u*d,t[2]=S-g*h,t[6]=_+y*h,t[10]=l*d}else if(e.order==="YXZ"){const g=d*p,y=d*m,_=h*p,S=h*m;t[0]=g+S*u,t[4]=_*u-y,t[8]=l*h,t[1]=l*m,t[5]=l*p,t[9]=-u,t[2]=y*u-_,t[6]=S+g*u,t[10]=l*d}else if(e.order==="ZXY"){const g=d*p,y=d*m,_=h*p,S=h*m;t[0]=g-S*u,t[4]=-l*m,t[8]=_+y*u,t[1]=y+_*u,t[5]=l*p,t[9]=S-g*u,t[2]=-l*h,t[6]=u,t[10]=l*d}else if(e.order==="ZYX"){const g=l*p,y=l*m,_=u*p,S=u*m;t[0]=d*p,t[4]=_*h-y,t[8]=g*h+S,t[1]=d*m,t[5]=S*h+g,t[9]=y*h-_,t[2]=-h,t[6]=u*d,t[10]=l*d}else if(e.order==="YZX"){const g=l*d,y=l*h,_=u*d,S=u*h;t[0]=d*p,t[4]=S-g*m,t[8]=_*m+y,t[1]=m,t[5]=l*p,t[9]=-u*p,t[2]=-h*p,t[6]=y*m+_,t[10]=g-S*m}else if(e.order==="XZY"){const g=l*d,y=l*h,_=u*d,S=u*h;t[0]=d*p,t[4]=-m,t[8]=h*p,t[1]=g*m+S,t[5]=l*p,t[9]=y*m-_,t[2]=_*m-y,t[6]=u*p,t[10]=S*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B3,e,O3)}lookAt(e,t,i){const s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),wr.crossVectors(i,In),wr.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),wr.crossVectors(i,In)),wr.normalize(),Dc.crossVectors(In,wr),s[0]=wr.x,s[4]=Dc.x,s[8]=In.x,s[1]=wr.y,s[5]=Dc.y,s[9]=In.y,s[2]=wr.z,s[6]=Dc.z,s[10]=In.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,l=i[0],u=i[4],d=i[8],h=i[12],p=i[1],m=i[5],g=i[9],y=i[13],_=i[2],S=i[6],M=i[10],b=i[14],w=i[3],C=i[7],R=i[11],A=i[15],T=s[0],B=s[4],U=s[8],q=s[12],ee=s[1],ae=s[5],oe=s[9],z=s[13],G=s[2],W=s[6],V=s[10],ie=s[14],X=s[3],ne=s[7],re=s[11],D=s[15];return a[0]=l*T+u*ee+d*G+h*X,a[4]=l*B+u*ae+d*W+h*ne,a[8]=l*U+u*oe+d*V+h*re,a[12]=l*q+u*z+d*ie+h*D,a[1]=p*T+m*ee+g*G+y*X,a[5]=p*B+m*ae+g*W+y*ne,a[9]=p*U+m*oe+g*V+y*re,a[13]=p*q+m*z+g*ie+y*D,a[2]=_*T+S*ee+M*G+b*X,a[6]=_*B+S*ae+M*W+b*ne,a[10]=_*U+S*oe+M*V+b*re,a[14]=_*q+S*z+M*ie+b*D,a[3]=w*T+C*ee+R*G+A*X,a[7]=w*B+C*ae+R*W+A*ne,a[11]=w*U+C*oe+R*V+A*re,a[15]=w*q+C*z+R*ie+A*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],l=e[1],u=e[5],d=e[9],h=e[13],p=e[2],m=e[6],g=e[10],y=e[14],_=e[3],S=e[7],M=e[11],b=e[15];return _*(+a*d*m-s*h*m-a*u*g+i*h*g+s*u*y-i*d*y)+S*(+t*d*y-t*h*g+a*l*g-s*l*y+s*h*p-a*d*p)+M*(+t*h*m-t*u*y-a*l*m+i*l*y+a*u*p-i*h*p)+b*(-s*u*p-t*d*m+t*u*g+s*l*m-i*l*g+i*d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],l=e[4],u=e[5],d=e[6],h=e[7],p=e[8],m=e[9],g=e[10],y=e[11],_=e[12],S=e[13],M=e[14],b=e[15],w=m*M*h-S*g*h+S*d*y-u*M*y-m*d*b+u*g*b,C=_*g*h-p*M*h-_*d*y+l*M*y+p*d*b-l*g*b,R=p*S*h-_*m*h+_*u*y-l*S*y-p*u*b+l*m*b,A=_*m*d-p*S*d-_*u*g+l*S*g+p*u*M-l*m*M,T=t*w+i*C+s*R+a*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/T;return e[0]=w*B,e[1]=(S*g*a-m*M*a-S*s*y+i*M*y+m*s*b-i*g*b)*B,e[2]=(u*M*a-S*d*a+S*s*h-i*M*h-u*s*b+i*d*b)*B,e[3]=(m*d*a-u*g*a-m*s*h+i*g*h+u*s*y-i*d*y)*B,e[4]=C*B,e[5]=(p*M*a-_*g*a+_*s*y-t*M*y-p*s*b+t*g*b)*B,e[6]=(_*d*a-l*M*a-_*s*h+t*M*h+l*s*b-t*d*b)*B,e[7]=(l*g*a-p*d*a+p*s*h-t*g*h-l*s*y+t*d*y)*B,e[8]=R*B,e[9]=(_*m*a-p*S*a-_*i*y+t*S*y+p*i*b-t*m*b)*B,e[10]=(l*S*a-_*u*a+_*i*h-t*S*h-l*i*b+t*u*b)*B,e[11]=(p*u*a-l*m*a-p*i*h+t*m*h+l*i*y-t*u*y)*B,e[12]=A*B,e[13]=(p*S*s-_*m*s+_*i*g-t*S*g-p*i*M+t*m*M)*B,e[14]=(_*u*s-l*S*s-_*i*d+t*S*d+l*i*M-t*u*M)*B,e[15]=(l*m*s-p*u*s+p*i*d-t*m*d-l*i*g+t*u*g)*B,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,l=e.x,u=e.y,d=e.z,h=a*l,p=a*u;return this.set(h*l+i,h*u-s*d,h*d+s*u,0,h*u+s*d,p*u+i,p*d-s*l,0,h*d-s*u,p*d+s*l,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i){return this.set(1,t,i,0,e,1,i,0,e,t,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,l=t._y,u=t._z,d=t._w,h=a+a,p=l+l,m=u+u,g=a*h,y=a*p,_=a*m,S=l*p,M=l*m,b=u*m,w=d*h,C=d*p,R=d*m,A=i.x,T=i.y,B=i.z;return s[0]=(1-(S+b))*A,s[1]=(y+R)*A,s[2]=(_-C)*A,s[3]=0,s[4]=(y-R)*T,s[5]=(1-(g+b))*T,s[6]=(M+w)*T,s[7]=0,s[8]=(_+C)*B,s[9]=(M-w)*B,s[10]=(1-(g+S))*B,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=Ws.set(s[0],s[1],s[2]).length();const l=Ws.set(s[4],s[5],s[6]).length(),u=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],li.copy(this);const h=1/a,p=1/l,m=1/u;return li.elements[0]*=h,li.elements[1]*=h,li.elements[2]*=h,li.elements[4]*=p,li.elements[5]*=p,li.elements[6]*=p,li.elements[8]*=m,li.elements[9]*=m,li.elements[10]*=m,t.setFromRotationMatrix(li),i.x=a,i.y=l,i.z=u,this}makePerspective(e,t,i,s,a,l){l===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const u=this.elements,d=2*a/(t-e),h=2*a/(i-s),p=(t+e)/(t-e),m=(i+s)/(i-s),g=-(l+a)/(l-a),y=-2*l*a/(l-a);return u[0]=d,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=h,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,s,a,l){const u=this.elements,d=1/(t-e),h=1/(i-s),p=1/(l-a),m=(t+e)*d,g=(i+s)*h,y=(l+a)*p;return u[0]=2*d,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=-2*p,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}Xe.prototype.isMatrix4=!0;const Ws=new N,li=new Xe,B3=new N(0,0,0),O3=new N(1,1,1),wr=new N,Dc=new N,In=new N,$y=new Xe,Zy=new xn;class Po{constructor(e=0,t=0,i=0,s=Po.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._order=s||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t,i){const s=e.elements,a=s[0],l=s[4],u=s[8],d=s[1],h=s[5],p=s[9],m=s[2],g=s[6],y=s[10];switch(t=t||this._order,t){case"XYZ":this._y=Math.asin(Fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Fn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(Fn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,y),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Fn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(Fn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i!==!1&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $y.makeRotationFromQuaternion(e),this.setFromRotationMatrix($y,t,i)}setFromVector3(e,t){return this.set(e.x,e.y,e.z,t||this._order)}reorder(e){return Zy.setFromEuler(this),this.setFromQuaternion(Zy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new N(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Po.prototype.isEuler=!0;Po.DefaultOrder="XYZ";Po.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class V3{constructor(){this.mask=1}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}}let U3=0;const Jy=new N,js=new xn,Yi=new Xe,Ic=new N,Ma=new N,H3=new N,G3=new xn,Ky=new N(1,0,0),Qy=new N(0,1,0),ex=new N(0,0,1),W3={type:"added"},tx={type:"removed"};class dt extends hs{constructor(){super(),Object.defineProperty(this,"id",{value:U3++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DefaultUp.clone();const e=new N,t=new Po,i=new xn,s=new N(1,1,1);function a(){i.setFromEuler(t,!1)}function l(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new rn}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=dt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new V3,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Ky,e)}rotateY(e){return this.rotateOnAxis(Qy,e)}rotateZ(e){return this.rotateOnAxis(ex,e)}translateOnAxis(e,t){return Jy.copy(e).applyQuaternion(this.quaternion),this.position.add(Jy.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ky,e)}translateY(e){return this.translateOnAxis(Qy,e)}translateZ(e){return this.translateOnAxis(ex,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ic.copy(e):Ic.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Ma,Ic,this.up):Yi.lookAt(Ic,Ma,this.up),this.quaternion.setFromRotationMatrix(Yi),s&&(Yi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Yi),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(W3)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tx)),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(tx)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(e,t);if(l!==void 0)return l}}getWorldPosition(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),e=new N),this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),e=new xn),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,H3),e}getWorldScale(e){return e===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),e=new N),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,G3,e),e}getWorldDirection(e){e===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),e=new N),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const m=d[h];a(e.shapes,m)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(a(e.materials,this.material[d]));s.material=u}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];s.animations.push(a(e.animations,d))}}if(t){const u=l(e.geometries),d=l(e.materials),h=l(e.textures),p=l(e.images),m=l(e.shapes),g=l(e.skeletons),y=l(e.animations);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),m.length>0&&(i.shapes=m),g.length>0&&(i.skeletons=g),y.length>0&&(i.animations=y)}return i.object=s,i;function l(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}dt.DefaultUp=new N(0,1,0);dt.DefaultMatrixAutoUpdate=!0;dt.prototype.isObject3D=!0;const uf=new N,j3=new N,X3=new rn;class Ei{constructor(e=new N(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=uf.subVectors(i,t).cross(j3.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),t=new N),t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){t===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),t=new N);const i=e.delta(uf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(i).multiplyScalar(a).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),e=new N),e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||X3.getNormalMatrix(e),s=this.coplanarPoint(uf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}Ei.prototype.isPlane=!0;const ci=new N,qi=new N,df=new N,$i=new N,Xs=new N,Ys=new N,nx=new N,hf=new N,ff=new N,pf=new N;class jt{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),s=new N),s.subVectors(i,t),ci.subVectors(e,t),s.cross(ci);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){ci.subVectors(s,t),qi.subVectors(i,t),df.subVectors(e,t);const l=ci.dot(ci),u=ci.dot(qi),d=ci.dot(df),h=qi.dot(qi),p=qi.dot(df),m=l*h-u*u;if(a===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),a=new N),m===0)return a.set(-2,-1,-1);const g=1/m,y=(h*d-u*p)*g,_=(l*p-u*d)*g;return a.set(1-y-_,_,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,$i),$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getUV(e,t,i,s,a,l,u,d){return this.getBarycoord(e,t,i,s,$i),d.set(0,0),d.addScaledVector(a,$i.x),d.addScaledVector(l,$i.y),d.addScaledVector(u,$i.z),d}static isFrontFacing(e,t,i,s){return ci.subVectors(i,t),qi.subVectors(e,t),ci.cross(qi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),ci.cross(qi).length()*.5}getMidpoint(e){return e===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),e=new N),e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),e=new Ei),e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,a){return jt.getUV(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){t===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),t=new N);const i=this.a,s=this.b,a=this.c;let l,u;Xs.subVectors(s,i),Ys.subVectors(a,i),hf.subVectors(e,i);const d=Xs.dot(hf),h=Ys.dot(hf);if(d<=0&&h<=0)return t.copy(i);ff.subVectors(e,s);const p=Xs.dot(ff),m=Ys.dot(ff);if(p>=0&&m<=p)return t.copy(s);const g=d*m-p*h;if(g<=0&&d>=0&&p<=0)return l=d/(d-p),t.copy(i).addScaledVector(Xs,l);pf.subVectors(e,a);const y=Xs.dot(pf),_=Ys.dot(pf);if(_>=0&&y<=_)return t.copy(a);const S=y*h-d*_;if(S<=0&&h>=0&&_<=0)return u=h/(h-_),t.copy(i).addScaledVector(Ys,u);const M=p*_-y*m;if(M<=0&&m-p>=0&&y-_>=0)return nx.subVectors(a,s),u=(m-p)/(m-p+(y-_)),t.copy(s).addScaledVector(nx,u);const b=1/(M+S+g);return l=S*b,u=g*b,t.copy(i).addScaledVector(Xs,l).addScaledVector(Ys,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Y3=0;function Qt(){Object.defineProperty(this,"id",{value:Y3++}),this.uuid=Pi(),this.name="",this.type="Material",this.fog=!0,this.blending=Wa,this.side=Bu,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=X_,this.blendDst=Y_,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ep,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R3,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jh,this.stencilZFail=Jh,this.stencilZPass=Jh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}Qt.prototype=Object.assign(Object.create(hs.prototype),{constructor:Qt,isMaterial:!0,onBuild:function(){},onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(n){if(n!==void 0)for(const e in n){const t=n[e];if(t===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=t===j_;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}},toJSON:function(n){const e=n===void 0||typeof n=="string";e&&(n={textures:{},images:{}});const t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(t.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(n).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(n).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(n).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(n).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(n).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(n).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(n).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(n).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(n).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(n).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(n).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(n).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(n).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(n).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(n).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(n).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(n).uuid),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Wa&&(t.blending=this.blending),this.side!==Bu&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(t.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(t.morphTargets=!0),this.morphNormals===!0&&(t.morphNormals=!0),this.skinning===!0&&(t.skinning=!0),this.flatShading===!0&&(t.flatShading=this.flatShading),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(t.userData=this.userData);function i(s){const a=[];for(const l in s){const u=s[l];delete u.metadata,a.push(u)}return a}if(e){const s=i(n.textures),a=i(n.images);s.length>0&&(t.textures=s),a.length>0&&(t.images=a)}return t},clone:function(){return new this.constructor().copy(this)},copy:function(n){this.name=n.name,this.fog=n.fog,this.blending=n.blending,this.side=n.side,this.vertexColors=n.vertexColors,this.opacity=n.opacity,this.transparent=n.transparent,this.blendSrc=n.blendSrc,this.blendDst=n.blendDst,this.blendEquation=n.blendEquation,this.blendSrcAlpha=n.blendSrcAlpha,this.blendDstAlpha=n.blendDstAlpha,this.blendEquationAlpha=n.blendEquationAlpha,this.depthFunc=n.depthFunc,this.depthTest=n.depthTest,this.depthWrite=n.depthWrite,this.stencilWriteMask=n.stencilWriteMask,this.stencilFunc=n.stencilFunc,this.stencilRef=n.stencilRef,this.stencilFuncMask=n.stencilFuncMask,this.stencilFail=n.stencilFail,this.stencilZFail=n.stencilZFail,this.stencilZPass=n.stencilZPass,this.stencilWrite=n.stencilWrite;const e=n.clippingPlanes;let t=null;if(e!==null){const i=e.length;t=new Array(i);for(let s=0;s!==i;++s)t[s]=e[s].clone()}return this.clippingPlanes=t,this.clipIntersection=n.clipIntersection,this.clipShadows=n.clipShadows,this.shadowSide=n.shadowSide,this.colorWrite=n.colorWrite,this.precision=n.precision,this.polygonOffset=n.polygonOffset,this.polygonOffsetFactor=n.polygonOffsetFactor,this.polygonOffsetUnits=n.polygonOffsetUnits,this.dithering=n.dithering,this.alphaTest=n.alphaTest,this.alphaToCoverage=n.alphaToCoverage,this.premultipliedAlpha=n.premultipliedAlpha,this.visible=n.visible,this.toneMapped=n.toneMapped,this.userData=JSON.parse(JSON.stringify(n.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(Qt.prototype,"needsUpdate",{set:function(n){n===!0&&this.version++}});const J_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function mf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function gf(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}class Ve{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=k3(e,1),t=Fn(t,0,1),i=Fn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=mf(a,s,e+1/3),this.g=mf(a,s,e),this.b=mf(a,s,e-1/3)}return this}setStyle(e){function t(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],l=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,t(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,t(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const u=parseFloat(s[1])/360,d=parseInt(s[2],10)/100,h=parseInt(s[3],10)/100;return t(s[4]),this.setHSL(u,d,h)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=J_[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const i=t>0?1/t:1;return this.r=Math.pow(e.r,i),this.g=Math.pow(e.g,i),this.b=Math.pow(e.b,i),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=gf(e.r),this.g=gf(e.g),this.b=gf(e.b),this}copyLinearToSRGB(e){return this.r=vf(e.r),this.g=vf(e.g),this.b=vf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){e===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),e={h:0,s:0,l:0});const t=this.r,i=this.g,s=this.b,a=Math.max(t,i,s),l=Math.min(t,i,s);let u,d;const h=(l+a)/2;if(l===a)u=0,d=0;else{const p=a-l;switch(d=h<=.5?p/(a+l):p/(2-a-l),a){case t:u=(i-s)/p+(i<s?6:0);break;case i:u=(s-t)/p+2;break;case s:u=(t-i)/p+4;break}u/=6}return e.h=u,e.s=d,e.l=h,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(ui),ui.h+=e,ui.s+=t,ui.l+=i,this.setHSL(ui.h,ui.s,ui.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Nc);const i=Qh(ui.h,Nc.h,t),s=Qh(ui.s,Nc.s,t),a=Qh(ui.l,Nc.l,t);return this.setHSL(i,s,a),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Ve.NAMES=J_;Ve.prototype.isColor=!0;Ve.prototype.r=1;Ve.prototype.g=1;Ve.prototype.b=1;class rl extends Qt{constructor(e){super(),this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this}}rl.prototype.isMeshBasicMaterial=!0;const yt=new N,Fc=new we;class Ut{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=il,this.updateRange={offset:0,count:-1},this.version=0,this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let s=0,a=e.length;s<a;s++){let l=e[s];l===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",s),l=new Ve),t[i++]=l.r,t[i++]=l.g,t[i++]=l.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let s=0,a=e.length;s<a;s++){let l=e[s];l===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",s),l=new we),t[i++]=l.x,t[i++]=l.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let s=0,a=e.length;s<a;s++){let l=e[s];l===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",s),l=new N),t[i++]=l.x,t[i++]=l.y,t[i++]=l.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let s=0,a=e.length;s<a;s++){let l=e[s];l===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",s),l=new mt),t[i++]=l.x,t[i++]=l.y,t[i++]=l.z,t[i++]=l.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fc.fromBufferAttribute(this,t),Fc.applyMatrix3(e),this.setXY(t,Fc.x,Fc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.x=this.getX(t),yt.y=this.getY(t),yt.z=this.getZ(t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.x=this.getX(t),yt.y=this.getY(t),yt.z=this.getZ(t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.x=this.getX(t),yt.y=this.getY(t),yt.z=this.getZ(t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==il&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}Ut.prototype.isBufferAttribute=!0;class K_ extends Ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Q_ extends Ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class q3 extends Ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}}q3.prototype.isFloat16BufferAttribute=!0;class Ft extends Ut{constructor(e,t,i){super(new Float32Array(e),t,i)}}function e1(n){if(n.length===0)return-1/0;let e=n[0];for(let t=1,i=n.length;t<i;++t)n[t]>e&&(e=n[t]);return e}let $3=0;const Si=new Xe,yf=new dt,qs=new N,Nn=new Jn,Ea=new Jn,Zt=new N;class pt extends hs{constructor(){super(),Object.defineProperty(this,"id",{value:$3++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e1(e)>65535?Q_:K_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new rn().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,i){return Si.makeTranslation(e,t,i),this.applyMatrix4(Si),this}scale(e,t,i){return Si.makeScale(e,t,i),this.applyMatrix4(Si),this}lookAt(e){return yf.lookAt(e),yf.updateMatrix(),this.applyMatrix4(yf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];Nn.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const u=t[a];Ea.setFromBufferAttribute(u),this.morphTargetsRelative?(Zt.addVectors(Nn.min,Ea.min),Nn.expandByPoint(Zt),Zt.addVectors(Nn.max,Ea.max),Nn.expandByPoint(Zt)):(Nn.expandByPoint(Ea.min),Nn.expandByPoint(Ea.max))}Nn.getCenter(i);let s=0;for(let a=0,l=e.count;a<l;a++)Zt.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(Zt));if(t)for(let a=0,l=t.length;a<l;a++){const u=t[a],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)Zt.fromBufferAttribute(u,h),d&&(qs.fromBufferAttribute(e,h),Zt.add(qs)),s=Math.max(s,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeFaceNormals(){}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,a=t.normal.array,l=t.uv.array,u=s.length/3;t.tangent===void 0&&this.setAttribute("tangent",new Ut(new Float32Array(4*u),4));const d=t.tangent.array,h=[],p=[];for(let ee=0;ee<u;ee++)h[ee]=new N,p[ee]=new N;const m=new N,g=new N,y=new N,_=new we,S=new we,M=new we,b=new N,w=new N;function C(ee,ae,oe){m.fromArray(s,ee*3),g.fromArray(s,ae*3),y.fromArray(s,oe*3),_.fromArray(l,ee*2),S.fromArray(l,ae*2),M.fromArray(l,oe*2),g.sub(m),y.sub(m),S.sub(_),M.sub(_);const z=1/(S.x*M.y-M.x*S.y);isFinite(z)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(y,-S.y).multiplyScalar(z),w.copy(y).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(z),h[ee].add(b),h[ae].add(b),h[oe].add(b),p[ee].add(w),p[ae].add(w),p[oe].add(w))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let ee=0,ae=R.length;ee<ae;++ee){const oe=R[ee],z=oe.start,G=oe.count;for(let W=z,V=z+G;W<V;W+=3)C(i[W+0],i[W+1],i[W+2])}const A=new N,T=new N,B=new N,U=new N;function q(ee){B.fromArray(a,ee*3),U.copy(B);const ae=h[ee];A.copy(ae),A.sub(B.multiplyScalar(B.dot(ae))).normalize(),T.crossVectors(U,ae);const z=T.dot(p[ee])<0?-1:1;d[ee*4]=A.x,d[ee*4+1]=A.y,d[ee*4+2]=A.z,d[ee*4+3]=z}for(let ee=0,ae=R.length;ee<ae;++ee){const oe=R[ee],z=oe.start,G=oe.count;for(let W=z,V=z+G;W<V;W+=3)q(i[W+0]),q(i[W+1]),q(i[W+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,y=i.count;g<y;g++)i.setXYZ(g,0,0,0);const s=new N,a=new N,l=new N,u=new N,d=new N,h=new N,p=new N,m=new N;if(e)for(let g=0,y=e.count;g<y;g+=3){const _=e.getX(g+0),S=e.getX(g+1),M=e.getX(g+2);s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,S),l.fromBufferAttribute(t,M),p.subVectors(l,a),m.subVectors(s,a),p.cross(m),u.fromBufferAttribute(i,_),d.fromBufferAttribute(i,S),h.fromBufferAttribute(i,M),u.add(p),d.add(p),h.add(p),i.setXYZ(_,u.x,u.y,u.z),i.setXYZ(S,d.x,d.y,d.z),i.setXYZ(M,h.x,h.y,h.z)}else for(let g=0,y=t.count;g<y;g+=3)s.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),l.fromBufferAttribute(t,g+2),p.subVectors(l,a),m.subVectors(s,a),p.cross(m),i.setXYZ(g+0,p.x,p.y,p.z),i.setXYZ(g+1,p.x,p.y,p.z),i.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const s in i){if(e.attributes[s]===void 0)continue;const l=i[s].array,u=e.attributes[s],d=u.array,h=u.itemSize*t,p=Math.min(d.length,l.length-h);for(let m=0,g=h;m<p;m++,g++)l[g]=d[m]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,m=u.normalized,g=new h.constructor(d.length*p);let y=0,_=0;for(let S=0,M=d.length;S<M;S++){y=d[S]*p;for(let b=0;b<p;b++)g[_++]=h[y++]}return new Ut(g,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,i=this.index.array,s=this.attributes;for(const u in s){const d=s[u],h=e(d,i);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const d=[],h=a[u];for(let p=0,m=h.length;p<m;p++){const g=h[p],y=e(g,i);d.push(y)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,d=l.length;u<d;u++){const h=l[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let m=0,g=h.length;m<g;m++){const y=h[m];p.push(y.toJSON(e.data))}p.length>0&&(s[d]=p,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new pt().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],m=a[h];for(let g=0,y=m.length;g<y;g++)p.push(m[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,p=l.length;h<p;h++){const m=l[h];this.addGroup(m.start,m.count,m.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}pt.prototype.isBufferGeometry=!0;const ix=new Xe,$s=new Lo,xf=new Co,_r=new N,br=new N,Sr=new N,wf=new N,_f=new N,bf=new N,zc=new N,Bc=new N,Oc=new N,Vc=new we,Uc=new we,Hc=new we,Sf=new N,Gc=new N;class Bn extends dt{constructor(e=new pt,t=new rl){super(),this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),xf.copy(i.boundingSphere),xf.applyMatrix4(a),e.ray.intersectsSphere(xf)===!1)||(ix.copy(a).invert(),$s.copy(e.ray).applyMatrix4(ix),i.boundingBox!==null&&$s.intersectsBox(i.boundingBox)===!1))return;let l;if(i.isBufferGeometry){const u=i.index,d=i.attributes.position,h=i.morphAttributes.position,p=i.morphTargetsRelative,m=i.attributes.uv,g=i.attributes.uv2,y=i.groups,_=i.drawRange;if(u!==null)if(Array.isArray(s))for(let S=0,M=y.length;S<M;S++){const b=y[S],w=s[b.materialIndex],C=Math.max(b.start,_.start),R=Math.min(b.start+b.count,_.start+_.count);for(let A=C,T=R;A<T;A+=3){const B=u.getX(A),U=u.getX(A+1),q=u.getX(A+2);l=Wc(this,w,e,$s,d,h,p,m,g,B,U,q),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=b.materialIndex,t.push(l))}}else{const S=Math.max(0,_.start),M=Math.min(u.count,_.start+_.count);for(let b=S,w=M;b<w;b+=3){const C=u.getX(b),R=u.getX(b+1),A=u.getX(b+2);l=Wc(this,s,e,$s,d,h,p,m,g,C,R,A),l&&(l.faceIndex=Math.floor(b/3),t.push(l))}}else if(d!==void 0)if(Array.isArray(s))for(let S=0,M=y.length;S<M;S++){const b=y[S],w=s[b.materialIndex],C=Math.max(b.start,_.start),R=Math.min(b.start+b.count,_.start+_.count);for(let A=C,T=R;A<T;A+=3){const B=A,U=A+1,q=A+2;l=Wc(this,w,e,$s,d,h,p,m,g,B,U,q),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=b.materialIndex,t.push(l))}}else{const S=Math.max(0,_.start),M=Math.min(d.count,_.start+_.count);for(let b=S,w=M;b<w;b+=3){const C=b,R=b+1,A=b+2;l=Wc(this,s,e,$s,d,h,p,m,g,C,R,A),l&&(l.faceIndex=Math.floor(b/3),t.push(l))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Bn.prototype.isMesh=!0;function Z3(n,e,t,i,s,a,l,u){let d;if(e.side===Jt?d=i.intersectTriangle(l,a,s,!0,u):d=i.intersectTriangle(s,a,l,e.side!==Ou,u),d===null)return null;Gc.copy(u),Gc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Gc);return h<t.near||h>t.far?null:{distance:h,point:Gc.clone(),object:n}}function Wc(n,e,t,i,s,a,l,u,d,h,p,m){_r.fromBufferAttribute(s,h),br.fromBufferAttribute(s,p),Sr.fromBufferAttribute(s,m);const g=n.morphTargetInfluences;if(e.morphTargets&&a&&g){zc.set(0,0,0),Bc.set(0,0,0),Oc.set(0,0,0);for(let _=0,S=a.length;_<S;_++){const M=g[_],b=a[_];M!==0&&(wf.fromBufferAttribute(b,h),_f.fromBufferAttribute(b,p),bf.fromBufferAttribute(b,m),l?(zc.addScaledVector(wf,M),Bc.addScaledVector(_f,M),Oc.addScaledVector(bf,M)):(zc.addScaledVector(wf.sub(_r),M),Bc.addScaledVector(_f.sub(br),M),Oc.addScaledVector(bf.sub(Sr),M)))}_r.add(zc),br.add(Bc),Sr.add(Oc)}n.isSkinnedMesh&&e.skinning&&(n.boneTransform(h,_r),n.boneTransform(p,br),n.boneTransform(m,Sr));const y=Z3(n,e,t,i,_r,br,Sr,Sf);if(y){u&&(Vc.fromBufferAttribute(u,h),Uc.fromBufferAttribute(u,p),Hc.fromBufferAttribute(u,m),y.uv=jt.getUV(Sf,_r,br,Sr,Vc,Uc,Hc,new we)),d&&(Vc.fromBufferAttribute(d,h),Uc.fromBufferAttribute(d,p),Hc.fromBufferAttribute(d,m),y.uv2=jt.getUV(Sf,_r,br,Sr,Vc,Uc,Hc,new we));const _={a:h,b:p,c:m,normal:new N,materialIndex:0};jt.getNormal(_r,br,Sr,_.normal),y.face=_}return y}class Qp extends pt{constructor(e=1,t=1,i=1,s=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:l};const u=this;s=Math.floor(s),a=Math.floor(a),l=Math.floor(l);const d=[],h=[],p=[],m=[];let g=0,y=0;_("z","y","x",-1,-1,i,t,e,l,a,0),_("z","y","x",1,-1,i,t,-e,l,a,1),_("x","z","y",1,1,e,i,t,s,l,2),_("x","z","y",1,-1,e,i,-t,s,l,3),_("x","y","z",1,-1,e,t,i,s,a,4),_("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new Ft(h,3)),this.setAttribute("normal",new Ft(p,3)),this.setAttribute("uv",new Ft(m,2));function _(S,M,b,w,C,R,A,T,B,U,q){const ee=R/B,ae=A/U,oe=R/2,z=A/2,G=T/2,W=B+1,V=U+1;let ie=0,X=0;const ne=new N;for(let re=0;re<V;re++){const D=re*ae-z;for(let J=0;J<W;J++){const ve=J*ee-oe;ne[S]=ve*w,ne[M]=D*C,ne[b]=G,h.push(ne.x,ne.y,ne.z),ne[S]=0,ne[M]=0,ne[b]=T>0?1:-1,p.push(ne.x,ne.y,ne.z),m.push(J/B),m.push(1-re/U),ie+=1}}for(let re=0;re<U;re++)for(let D=0;D<B;D++){const J=g+D+W*re,ve=g+D+W*(re+1),K=g+(D+1)+W*(re+1),Ie=g+(D+1)+W*re;d.push(J,ve,Ie),d.push(ve,K,Ie),X+=6}u.addGroup(y,X,q),y+=X,g+=ie}}}function wo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function dn(n){const e={};for(let t=0;t<n.length;t++){const i=wo(n[t]);for(const s in i)e[s]=i[s]}return e}const J3={clone:wo,merge:dn};var K3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ls extends Qt{constructor(e){super(),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=K3,this.fragmentShader=Q3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}ls.prototype.isShaderMaterial=!0;class em extends dt{constructor(){super(),this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){e===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),e=new N),this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}em.prototype.isCamera=!0;class Cn extends em{constructor(e=50,t=1,i=.1,s=2e3){super(),this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ip*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ip*2*Math.atan(Math.tan(Kh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kh*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,h=l.fullHeight;a+=l.offsetX*s/d,t-=l.offsetY*i/h,s*=l.width/d,i*=l.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Cn.prototype.isPerspectiveCamera=!0;const Zs=90,Js=1;class tm extends dt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const s=new Cn(Zs,Js,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(1,0,0)),this.add(s);const a=new Cn(Zs,Js,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new N(-1,0,0)),this.add(a);const l=new Cn(Zs,Js,e,t);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(new N(0,1,0)),this.add(l);const u=new Cn(Zs,Js,e,t);u.layers=this.layers,u.up.set(0,0,-1),u.lookAt(new N(0,-1,0)),this.add(u);const d=new Cn(Zs,Js,e,t);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new N(0,0,1)),this.add(d);const h=new Cn(Zs,Js,e,t);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new N(0,0,-1)),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,a,l,u,d,h]=this.children,p=e.xr.enabled,m=e.getRenderTarget();e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,s),e.setRenderTarget(i,1),e.render(t,a),e.setRenderTarget(i,2),e.render(t,l),e.setRenderTarget(i,3),e.render(t,u),e.setRenderTarget(i,4),e.render(t,d),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,h),e.setRenderTarget(m),e.xr.enabled=p}}class Uu extends sn{constructor(e,t,i,s,a,l,u,d,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Xp,u=u!==void 0?u:ss,super(e,t,i,s,a,l,u,d,h,p),this._needsFlipEnvMap=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Uu.prototype.isCubeTexture=!0;class t1 extends os{constructor(e,t,i){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=i),super(e,e,t),t=t||{},this.texture=new Uu(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=pi,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qp(5,5,5),a=new ls({name:"CubemapFromEquirect",uniforms:wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Ga});a.uniforms.tEquirect.value=t;const l=new Bn(s,a),u=t.minFilter;return t.minFilter===Zp&&(t.minFilter=qn),new tm(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,i,s);e.setRenderTarget(a)}}t1.prototype.isWebGLCubeRenderTarget=!0;class n1 extends sn{constructor(e,t,i,s,a,l,u,d,h,p,m,g){super(null,l,u,d,h,p,s,a,m,g),this.image={data:e||null,width:t||1,height:i||1},this.magFilter=h!==void 0?h:vn,this.minFilter=p!==void 0?p:vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}n1.prototype.isDataTexture=!0;const Ks=new Co,jc=new N;class Hu{constructor(e=new Ei,t=new Ei,i=new Ei,s=new Ei,a=new Ei,l=new Ei){this.planes=[e,t,i,s,a,l]}set(e,t,i,s,a,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(a),u[5].copy(l),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,s=i[0],a=i[1],l=i[2],u=i[3],d=i[4],h=i[5],p=i[6],m=i[7],g=i[8],y=i[9],_=i[10],S=i[11],M=i[12],b=i[13],w=i[14],C=i[15];return t[0].setComponents(u-s,m-d,S-g,C-M).normalize(),t[1].setComponents(u+s,m+d,S+g,C+M).normalize(),t[2].setComponents(u+a,m+h,S+y,C+b).normalize(),t[3].setComponents(u-a,m-h,S-y,C-b).normalize(),t[4].setComponents(u-l,m-p,S-_,C-w).normalize(),t[5].setComponents(u+l,m+p,S+_,C+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSprite(e){return Ks.center.set(0,0,0),Ks.radius=.7071067811865476,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(jc.x=s.normal.x>0?e.max.x:e.min.x,jc.y=s.normal.y>0?e.max.y:e.min.y,jc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function i1(){let n=null,e=!1,t=null,i=null;function s(a,l){t(a,l),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function eP(n,e){const t=e.isWebGL2,i=new WeakMap;function s(h,p){const m=h.array,g=h.usage,y=n.createBuffer();n.bindBuffer(p,y),n.bufferData(p,m,g),h.onUploadCallback();let _=5126;return m instanceof Float32Array?_=5126:m instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):m instanceof Uint16Array?h.isFloat16BufferAttribute?t?_=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):_=5123:m instanceof Int16Array?_=5122:m instanceof Uint32Array?_=5125:m instanceof Int32Array?_=5124:m instanceof Int8Array?_=5120:m instanceof Uint8Array&&(_=5121),{buffer:y,type:_,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version}}function a(h,p,m){const g=p.array,y=p.updateRange;n.bindBuffer(m,h),y.count===-1?n.bufferSubData(m,0,g):(t?n.bufferSubData(m,y.offset*g.BYTES_PER_ELEMENT,g,y.offset,y.count):n.bufferSubData(m,y.offset*g.BYTES_PER_ELEMENT,g.subarray(y.offset,y.offset+y.count)),y.count=-1)}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=i.get(h);p&&(n.deleteBuffer(p.buffer),i.delete(h))}function d(h,p){if(h.isGLBufferAttribute){const g=i.get(h);(!g||g.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const m=i.get(h);m===void 0?i.set(h,s(h,p)):m.version<h.version&&(a(m.buffer,h,p),m.version=h.version)}return{get:l,remove:u,update:d}}class tP extends pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,l=t/2,u=Math.floor(i),d=Math.floor(s),h=u+1,p=d+1,m=e/u,g=t/d,y=[],_=[],S=[],M=[];for(let b=0;b<p;b++){const w=b*g-l;for(let C=0;C<h;C++){const R=C*m-a;_.push(R,-w,0),S.push(0,0,1),M.push(C/u),M.push(1-b/d)}}for(let b=0;b<d;b++)for(let w=0;w<u;w++){const C=w+h*b,R=w+h*(b+1),A=w+1+h*(b+1),T=w+1+h*b;y.push(C,R,T),y.push(R,A,T)}this.setIndex(y),this.setAttribute("position",new Ft(_,3)),this.setAttribute("normal",new Ft(S,3)),this.setAttribute("uv",new Ft(M,2))}}var nP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,iP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rP=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,sP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,oP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aP="vec3 transformed = vec3( position );",lP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cP=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,uP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,hP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,yP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,wP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_P=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,MP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TP="gl_FragColor = linearToOutputTexel( gl_FragColor );",AP=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,CP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,LP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,RP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DP=`#ifdef USE_FOG
	fogDepth = - mvPosition.z;
#endif`,IP=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,NP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,BP=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,OP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VP=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,UP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,HP=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( -viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
			vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,GP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WP=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,jP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XP=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,YP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,qP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float specularRoughness;
	vec3 specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$P=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,JP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,KP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QP=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nR=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,iR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,cR=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
		uniform float morphTargetInfluences[ 8 ];
	#else
		uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,uR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
		transformed += morphTarget4 * morphTargetInfluences[ 4 ];
		transformed += morphTarget5 * morphTargetInfluences[ 5 ];
		transformed += morphTarget6 * morphTargetInfluences[ 6 ];
		transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,dR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,hR=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fR=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,pR=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,mR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,gR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,vR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,yR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_R=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MR=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ER=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TR=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,AR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,PR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NR=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FR=`#ifdef USE_TRANSMISSIONMAP
	totalTransmission *= texture2D( transmissionMap, vUv ).r;
#endif`,zR=`#ifdef USE_TRANSMISSIONMAP
	uniform sampler2D transmissionMap;
#endif`,BR=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,OR=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,VR=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,UR=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,HR=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,GR=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,WR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jR=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,XR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YR=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$R=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ZR=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,JR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,KR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ek=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tk=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nk=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ik=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rk=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sk=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ok=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ak=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lk=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ck=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uk=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dk=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hk=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fk=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
	uniform float transmission;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#ifdef TRANSMISSION
		float totalTransmission = transmission;
	#endif
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <transmissionmap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSMISSION
		diffuseColor.a *= mix( saturate( 1. - totalTransmission + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) ), 1.0, metalness );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pk=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mk=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,gk=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vk=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yk=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xk=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wk=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_k=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,bk=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const it={alphamap_fragment:nP,alphamap_pars_fragment:iP,alphatest_fragment:rP,aomap_fragment:sP,aomap_pars_fragment:oP,begin_vertex:aP,beginnormal_vertex:lP,bsdfs:cP,bumpmap_pars_fragment:uP,clipping_planes_fragment:dP,clipping_planes_pars_fragment:hP,clipping_planes_pars_vertex:fP,clipping_planes_vertex:pP,color_fragment:mP,color_pars_fragment:gP,color_pars_vertex:vP,color_vertex:yP,common:xP,cube_uv_reflection_fragment:wP,defaultnormal_vertex:_P,displacementmap_pars_vertex:bP,displacementmap_vertex:SP,emissivemap_fragment:MP,emissivemap_pars_fragment:EP,encodings_fragment:TP,encodings_pars_fragment:AP,envmap_fragment:CP,envmap_common_pars_fragment:LP,envmap_pars_fragment:PP,envmap_pars_vertex:RP,envmap_physical_pars_fragment:HP,envmap_vertex:kP,fog_vertex:DP,fog_pars_vertex:IP,fog_fragment:NP,fog_pars_fragment:FP,gradientmap_pars_fragment:zP,lightmap_fragment:BP,lightmap_pars_fragment:OP,lights_lambert_vertex:VP,lights_pars_begin:UP,lights_toon_fragment:GP,lights_toon_pars_fragment:WP,lights_phong_fragment:jP,lights_phong_pars_fragment:XP,lights_physical_fragment:YP,lights_physical_pars_fragment:qP,lights_fragment_begin:$P,lights_fragment_maps:ZP,lights_fragment_end:JP,logdepthbuf_fragment:KP,logdepthbuf_pars_fragment:QP,logdepthbuf_pars_vertex:eR,logdepthbuf_vertex:tR,map_fragment:nR,map_pars_fragment:iR,map_particle_fragment:rR,map_particle_pars_fragment:sR,metalnessmap_fragment:oR,metalnessmap_pars_fragment:aR,morphnormal_vertex:lR,morphtarget_pars_vertex:cR,morphtarget_vertex:uR,normal_fragment_begin:dR,normal_fragment_maps:hR,normalmap_pars_fragment:fR,clearcoat_normal_fragment_begin:pR,clearcoat_normal_fragment_maps:mR,clearcoat_pars_fragment:gR,packing:vR,premultiplied_alpha_fragment:yR,project_vertex:xR,dithering_fragment:wR,dithering_pars_fragment:_R,roughnessmap_fragment:bR,roughnessmap_pars_fragment:SR,shadowmap_pars_fragment:MR,shadowmap_pars_vertex:ER,shadowmap_vertex:TR,shadowmask_pars_fragment:AR,skinbase_vertex:CR,skinning_pars_vertex:LR,skinning_vertex:PR,skinnormal_vertex:RR,specularmap_fragment:kR,specularmap_pars_fragment:DR,tonemapping_fragment:IR,tonemapping_pars_fragment:NR,transmissionmap_fragment:FR,transmissionmap_pars_fragment:zR,uv_pars_fragment:BR,uv_pars_vertex:OR,uv_vertex:VR,uv2_pars_fragment:UR,uv2_pars_vertex:HR,uv2_vertex:GR,worldpos_vertex:WR,background_frag:jR,background_vert:XR,cube_frag:YR,cube_vert:qR,depth_frag:$R,depth_vert:ZR,distanceRGBA_frag:JR,distanceRGBA_vert:KR,equirect_frag:QR,equirect_vert:ek,linedashed_frag:tk,linedashed_vert:nk,meshbasic_frag:ik,meshbasic_vert:rk,meshlambert_frag:sk,meshlambert_vert:ok,meshmatcap_frag:ak,meshmatcap_vert:lk,meshtoon_frag:ck,meshtoon_vert:uk,meshphong_frag:dk,meshphong_vert:hk,meshphysical_frag:fk,meshphysical_vert:pk,normal_frag:mk,normal_vert:gk,points_frag:vk,points_vert:yk,shadow_frag:xk,shadow_vert:wk,sprite_frag:_k,sprite_vert:bk},Te={common:{diffuse:{value:new Ve(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new rn},uv2Transform:{value:new rn},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new rn}},sprite:{diffuse:{value:new Ve(15658734)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new rn}}},Ti={basic:{uniforms:dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.fog,Te.lights,{emissive:{value:new Ve(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:dn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:dn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:dn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ve(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:dn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:dn([Te.points,Te.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:dn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:dn([Te.common,Te.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:dn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:it.normal_vert,fragmentShader:it.normal_frag},sprite:{uniforms:dn([Te.sprite,Te.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new rn},t2D:{value:null}},vertexShader:it.background_vert,fragmentShader:it.background_frag},cube:{uniforms:dn([Te.envmap,{opacity:{value:1}}]),vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:dn([Te.common,Te.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:dn([Te.lights,Te.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Ti.physical={uniforms:dn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new we(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new Ve(0)},transmission:{value:0},transmissionMap:{value:null}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};function Sk(n,e,t,i,s){const a=new Ve(0);let l=0,u,d,h=null,p=0,m=null;function g(_,S,M,b){let w=S.isScene===!0?S.background:null;w&&w.isTexture&&(w=e.get(w));const C=n.xr,R=C.getSession&&C.getSession();R&&R.environmentBlendMode==="additive"&&(w=null),w===null?y(a,l):w&&w.isColor&&(y(w,1),b=!0),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),w&&(w.isCubeTexture||w.mapping===qp)?(d===void 0&&(d=new Bn(new Qp(1,1,1),new ls({name:"BackgroundCubeMaterial",uniforms:wo(Ti.cube.uniforms),vertexShader:Ti.cube.vertexShader,fragmentShader:Ti.cube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,T,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w._needsFlipEnvMap?-1:1,(h!==w||p!==w.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,h=w,p=w.version,m=n.toneMapping),_.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new Bn(new tP(2,2),new ls({name:"BackgroundMaterial",uniforms:wo(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Bu,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||p!==w.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=w,p=w.version,m=n.toneMapping),_.unshift(u,u.geometry,u.material,0,0,null))}function y(_,S){t.buffers.color.setClear(_.r,_.g,_.b,S,s)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),l=S,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,y(a,l)},render:g}}function Mk(n,e,t,i){const s=n.getParameter(34921),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),l=i.isWebGL2||a!==null,u={},d=S(null);let h=d;function p(z,G,W,V,ie){let X=!1;if(l){const ne=_(V,W,G);h!==ne&&(h=ne,g(h.object)),X=M(V,ie),X&&b(V,ie)}else{const ne=G.wireframe===!0;(h.geometry!==V.id||h.program!==W.id||h.wireframe!==ne)&&(h.geometry=V.id,h.program=W.id,h.wireframe=ne,X=!0)}z.isInstancedMesh===!0&&(X=!0),ie!==null&&t.update(ie,34963),X&&(B(z,G,W,V),ie!==null&&n.bindBuffer(34963,t.get(ie).buffer))}function m(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function g(z){return i.isWebGL2?n.bindVertexArray(z):a.bindVertexArrayOES(z)}function y(z){return i.isWebGL2?n.deleteVertexArray(z):a.deleteVertexArrayOES(z)}function _(z,G,W){const V=W.wireframe===!0;let ie=u[z.id];ie===void 0&&(ie={},u[z.id]=ie);let X=ie[G.id];X===void 0&&(X={},ie[G.id]=X);let ne=X[V];return ne===void 0&&(ne=S(m()),X[V]=ne),ne}function S(z){const G=[],W=[],V=[];for(let ie=0;ie<s;ie++)G[ie]=0,W[ie]=0,V[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:W,attributeDivisors:V,object:z,attributes:{},index:null}}function M(z,G){const W=h.attributes,V=z.attributes;let ie=0;for(const X in V){const ne=W[X],re=V[X];if(ne===void 0||ne.attribute!==re||ne.data!==re.data)return!0;ie++}return h.attributesNum!==ie||h.index!==G}function b(z,G){const W={},V=z.attributes;let ie=0;for(const X in V){const ne=V[X],re={};re.attribute=ne,ne.data&&(re.data=ne.data),W[X]=re,ie++}h.attributes=W,h.attributesNum=ie,h.index=G}function w(){const z=h.newAttributes;for(let G=0,W=z.length;G<W;G++)z[G]=0}function C(z){R(z,0)}function R(z,G){const W=h.newAttributes,V=h.enabledAttributes,ie=h.attributeDivisors;W[z]=1,V[z]===0&&(n.enableVertexAttribArray(z),V[z]=1),ie[z]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,G),ie[z]=G)}function A(){const z=h.newAttributes,G=h.enabledAttributes;for(let W=0,V=G.length;W<V;W++)G[W]!==z[W]&&(n.disableVertexAttribArray(W),G[W]=0)}function T(z,G,W,V,ie,X){i.isWebGL2===!0&&(W===5124||W===5125)?n.vertexAttribIPointer(z,G,W,ie,X):n.vertexAttribPointer(z,G,W,V,ie,X)}function B(z,G,W,V){if(i.isWebGL2===!1&&(z.isInstancedMesh||V.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const ie=V.attributes,X=W.getAttributes(),ne=G.defaultAttributeValues;for(const re in X){const D=X[re];if(D>=0){const J=ie[re];if(J!==void 0){const ve=J.normalized,K=J.itemSize,Ie=t.get(J);if(Ie===void 0)continue;const Pe=Ie.buffer,Ce=Ie.type,be=Ie.bytesPerElement;if(J.isInterleavedBufferAttribute){const Be=J.data,Ue=Be.stride,Qe=J.offset;Be&&Be.isInstancedInterleavedBuffer?(R(D,Be.meshPerAttribute),V._maxInstanceCount===void 0&&(V._maxInstanceCount=Be.meshPerAttribute*Be.count)):C(D),n.bindBuffer(34962,Pe),T(D,K,Ce,ve,Ue*be,Qe*be)}else J.isInstancedBufferAttribute?(R(D,J.meshPerAttribute),V._maxInstanceCount===void 0&&(V._maxInstanceCount=J.meshPerAttribute*J.count)):C(D),n.bindBuffer(34962,Pe),T(D,K,Ce,ve,0,0)}else if(re==="instanceMatrix"){const ve=t.get(z.instanceMatrix);if(ve===void 0)continue;const K=ve.buffer,Ie=ve.type;R(D+0,1),R(D+1,1),R(D+2,1),R(D+3,1),n.bindBuffer(34962,K),n.vertexAttribPointer(D+0,4,Ie,!1,64,0),n.vertexAttribPointer(D+1,4,Ie,!1,64,16),n.vertexAttribPointer(D+2,4,Ie,!1,64,32),n.vertexAttribPointer(D+3,4,Ie,!1,64,48)}else if(re==="instanceColor"){const ve=t.get(z.instanceColor);if(ve===void 0)continue;const K=ve.buffer,Ie=ve.type;R(D,1),n.bindBuffer(34962,K),n.vertexAttribPointer(D,3,Ie,!1,12,0)}else if(ne!==void 0){const ve=ne[re];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(D,ve);break;case 3:n.vertexAttrib3fv(D,ve);break;case 4:n.vertexAttrib4fv(D,ve);break;default:n.vertexAttrib1fv(D,ve)}}}}A()}function U(){ae();for(const z in u){const G=u[z];for(const W in G){const V=G[W];for(const ie in V)y(V[ie].object),delete V[ie];delete G[W]}delete u[z]}}function q(z){if(u[z.id]===void 0)return;const G=u[z.id];for(const W in G){const V=G[W];for(const ie in V)y(V[ie].object),delete V[ie];delete G[W]}delete u[z.id]}function ee(z){for(const G in u){const W=u[G];if(W[z.id]===void 0)continue;const V=W[z.id];for(const ie in V)y(V[ie].object),delete V[ie];delete W[z.id]}}function ae(){oe(),h!==d&&(h=d,g(h.object))}function oe(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:p,reset:ae,resetDefaultState:oe,dispose:U,releaseStatesOfGeometry:q,releaseStatesOfProgram:ee,initAttributes:w,enableAttribute:C,disableUnusedAttributes:A}}function Ek(n,e,t,i){const s=i.isWebGL2;let a;function l(h){a=h}function u(h,p){n.drawArrays(a,h,p),t.update(p,a,1)}function d(h,p,m){if(m===0)return;let g,y;if(s)g=n,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](a,h,p,m),t.update(p,a,m)}this.setMode=l,this.render=u,this.renderInstances=d}function Tk(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){if(T==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&n instanceof WebGL2ComputeRenderingContext;let u=t.precision!==void 0?t.precision:"highp";const d=a(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=t.logarithmicDepthBuffer===!0,p=n.getParameter(34930),m=n.getParameter(35660),g=n.getParameter(3379),y=n.getParameter(34076),_=n.getParameter(34921),S=n.getParameter(36347),M=n.getParameter(36348),b=n.getParameter(36349),w=m>0,C=l||e.has("OES_texture_float"),R=w&&C,A=l?n.getParameter(36183):0;return{isWebGL2:l,getMaxAnisotropy:s,getMaxPrecision:a,precision:u,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:w,floatFragmentTextures:C,floatVertexTextures:R,maxSamples:A}}function Ak(n){const e=this;let t=null,i=0,s=!1,a=!1;const l=new Ei,u=new rn,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g,y){const _=m.length!==0||g||i!==0||s;return s=g,t=p(m,y,0),i=m.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1,h()},this.setState=function(m,g,y){const _=m.clippingPlanes,S=m.clipIntersection,M=m.clipShadows,b=n.get(m);if(!s||_===null||_.length===0||a&&!M)a?p(null):h();else{const w=a?0:i,C=w*4;let R=b.clippingState||null;d.value=R,R=p(_,g,C,y);for(let A=0;A!==C;++A)R[A]=t[A];b.clippingState=R,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(m,g,y,_){const S=m!==null?m.length:0;let M=null;if(S!==0){if(M=d.value,_!==!0||M===null){const b=y+S*4,w=g.matrixWorldInverse;u.getNormalMatrix(w),(M===null||M.length<b)&&(M=new Float32Array(b));for(let C=0,R=y;C!==S;++C,R+=4)l.copy(m[C]).applyMatrix4(w,u),l.normal.toArray(M,R),M[R+3]=l.constant}d.value=M,d.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,M}}function Ck(n){let e=new WeakMap;function t(l,u){return u===Ry?l.mapping=Xp:u===ky&&(l.mapping=Yp),l}function i(l){if(l&&l.isTexture){const u=l.mapping;if(u===Ry||u===ky)if(e.has(l)){const d=e.get(l).texture;return t(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const h=n.getRenderTarget(),p=new t1(d.height/2);return p.fromEquirectangularTexture(n,l),e.set(l,p),n.setRenderTarget(h),l.addEventListener("dispose",s),t(p.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}function Lk(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Pk(n,e,t,i){const s={},a=new WeakMap;function l(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const _ in g.attributes)e.remove(g.attributes[_]);g.removeEventListener("dispose",l),delete s[g.id];const y=a.get(g);y&&(e.remove(y),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(m,g){return s[g.id]===!0||(g.addEventListener("dispose",l),s[g.id]=!0,t.memory.geometries++),g}function d(m){const g=m.attributes;for(const _ in g)e.update(g[_],34962);const y=m.morphAttributes;for(const _ in y){const S=y[_];for(let M=0,b=S.length;M<b;M++)e.update(S[M],34962)}}function h(m){const g=[],y=m.index,_=m.attributes.position;let S=0;if(y!==null){const w=y.array;S=y.version;for(let C=0,R=w.length;C<R;C+=3){const A=w[C+0],T=w[C+1],B=w[C+2];g.push(A,T,T,B,B,A)}}else{const w=_.array;S=_.version;for(let C=0,R=w.length/3-1;C<R;C+=3){const A=C+0,T=C+1,B=C+2;g.push(A,T,T,B,B,A)}}const M=new(e1(g)>65535?Q_:K_)(g,1);M.version=S;const b=a.get(m);b&&e.remove(b),a.set(m,M)}function p(m){const g=a.get(m);if(g){const y=m.index;y!==null&&g.version<y.version&&h(m)}else h(m);return a.get(m)}return{get:u,update:d,getWireframeAttribute:p}}function Rk(n,e,t,i){const s=i.isWebGL2;let a;function l(g){a=g}let u,d;function h(g){u=g.type,d=g.bytesPerElement}function p(g,y){n.drawElements(a,y,u,g*d),t.update(y,a,1)}function m(g,y,_){if(_===0)return;let S,M;if(s)S=n,M="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),M="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[M](a,y,u,g*d,_),t.update(y,a,_)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m}function kk(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,l,u){switch(t.calls++,l){case 4:t.triangles+=u*(a/3);break;case 1:t.lines+=u*(a/2);break;case 3:t.lines+=u*(a-1);break;case 2:t.lines+=u*a;break;case 0:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Dk(n,e){return n[0]-e[0]}function Ik(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Nk(n){const e={},t=new Float32Array(8),i=[];for(let a=0;a<8;a++)i[a]=[a,0];function s(a,l,u,d){const h=a.morphTargetInfluences,p=h===void 0?0:h.length;let m=e[l.id];if(m===void 0){m=[];for(let M=0;M<p;M++)m[M]=[M,0];e[l.id]=m}for(let M=0;M<p;M++){const b=m[M];b[0]=M,b[1]=h[M]}m.sort(Ik);for(let M=0;M<8;M++)M<p&&m[M][1]?(i[M][0]=m[M][0],i[M][1]=m[M][1]):(i[M][0]=Number.MAX_SAFE_INTEGER,i[M][1]=0);i.sort(Dk);const g=u.morphTargets&&l.morphAttributes.position,y=u.morphNormals&&l.morphAttributes.normal;let _=0;for(let M=0;M<8;M++){const b=i[M],w=b[0],C=b[1];w!==Number.MAX_SAFE_INTEGER&&C?(g&&l.getAttribute("morphTarget"+M)!==g[w]&&l.setAttribute("morphTarget"+M,g[w]),y&&l.getAttribute("morphNormal"+M)!==y[w]&&l.setAttribute("morphNormal"+M,y[w]),t[M]=C,_+=C):(g&&l.hasAttribute("morphTarget"+M)===!0&&l.deleteAttribute("morphTarget"+M),y&&l.hasAttribute("morphNormal"+M)===!0&&l.deleteAttribute("morphNormal"+M),t[M]=0)}const S=l.morphTargetsRelative?1:1-_;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",t)}return{update:s}}function Fk(n,e,t,i){let s=new WeakMap;function a(d){const h=i.render.frame,p=d.geometry,m=e.get(d,p);return s.get(m)!==h&&(e.update(m),s.set(m,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),t.update(d.instanceMatrix,34962),d.instanceColor!==null&&t.update(d.instanceColor,34962)),m}function l(){s=new WeakMap}function u(d){const h=d.target;h.removeEventListener("dispose",u),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:l}}class r1 extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}r1.prototype.isDataTexture2DArray=!0;class s1 extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.image={data:e,width:t,height:i,depth:s},this.magFilter=vn,this.minFilter=vn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}s1.prototype.isDataTexture3D=!0;const o1=new sn,zk=new r1,Bk=new s1,a1=new Uu,rx=[],sx=[],ox=new Float32Array(16),ax=new Float32Array(9),lx=new Float32Array(4);function Ro(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let a=rx[s];if(a===void 0&&(a=new Float32Array(s),rx[s]=a),e!==0){i.toArray(a,0);for(let l=1,u=0;l!==e;++l)u+=t,n[l].toArray(a,u)}return a}function wn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function l1(n,e){let t=sx[e];t===void 0&&(t=new Int32Array(e),sx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ok(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Vk(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function Uk(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wn(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function Hk(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function Gk(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(wn(t,i))return;lx.set(i),n.uniformMatrix2fv(this.addr,!1,lx),fn(t,i)}}function Wk(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(wn(t,i))return;ax.set(i),n.uniformMatrix3fv(this.addr,!1,ax),fn(t,i)}}function jk(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(wn(t,i))return;ox.set(i),n.uniformMatrix4fv(this.addr,!1,ox),fn(t,i)}}function Xk(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Yk(n,e){const t=this.cache;wn(t,e)||(n.uniform2iv(this.addr,e),fn(t,e))}function qk(n,e){const t=this.cache;wn(t,e)||(n.uniform3iv(this.addr,e),fn(t,e))}function $k(n,e){const t=this.cache;wn(t,e)||(n.uniform4iv(this.addr,e),fn(t,e))}function Zk(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jk(n,e){const t=this.cache;wn(t,e)||(n.uniform2uiv(this.addr,e),fn(t,e))}function Kk(n,e){const t=this.cache;wn(t,e)||(n.uniform3uiv(this.addr,e),fn(t,e))}function Qk(n,e){const t=this.cache;wn(t,e)||(n.uniform4uiv(this.addr,e),fn(t,e))}function eD(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.safeSetTexture2D(e||o1,s)}function tD(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Bk,s)}function nD(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.safeSetTextureCube(e||a1,s)}function iD(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||zk,s)}function rD(n){switch(n){case 5126:return Ok;case 35664:return Vk;case 35665:return Uk;case 35666:return Hk;case 35674:return Gk;case 35675:return Wk;case 35676:return jk;case 5124:case 35670:return Xk;case 35667:case 35671:return Yk;case 35668:case 35672:return qk;case 35669:case 35673:return $k;case 5125:return Zk;case 36294:return Jk;case 36295:return Kk;case 36296:return Qk;case 35678:case 36198:case 36298:case 36306:case 35682:return eD;case 35679:case 36299:case 36307:return tD;case 35680:case 36300:case 36308:case 36293:return nD;case 36289:case 36303:case 36311:case 36292:return iD}}function sD(n,e){n.uniform1fv(this.addr,e)}function oD(n,e){const t=Ro(e,this.size,2);n.uniform2fv(this.addr,t)}function aD(n,e){const t=Ro(e,this.size,3);n.uniform3fv(this.addr,t)}function lD(n,e){const t=Ro(e,this.size,4);n.uniform4fv(this.addr,t)}function cD(n,e){const t=Ro(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function uD(n,e){const t=Ro(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function dD(n,e){const t=Ro(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hD(n,e){n.uniform1iv(this.addr,e)}function fD(n,e){n.uniform2iv(this.addr,e)}function pD(n,e){n.uniform3iv(this.addr,e)}function mD(n,e){n.uniform4iv(this.addr,e)}function gD(n,e){n.uniform1uiv(this.addr,e)}function vD(n,e){n.uniform2uiv(this.addr,e)}function yD(n,e){n.uniform3uiv(this.addr,e)}function xD(n,e){n.uniform4uiv(this.addr,e)}function wD(n,e,t){const i=e.length,s=l1(t,i);n.uniform1iv(this.addr,s);for(let a=0;a!==i;++a)t.safeSetTexture2D(e[a]||o1,s[a])}function _D(n,e,t){const i=e.length,s=l1(t,i);n.uniform1iv(this.addr,s);for(let a=0;a!==i;++a)t.safeSetTextureCube(e[a]||a1,s[a])}function bD(n){switch(n){case 5126:return sD;case 35664:return oD;case 35665:return aD;case 35666:return lD;case 35674:return cD;case 35675:return uD;case 35676:return dD;case 5124:case 35670:return hD;case 35667:case 35671:return fD;case 35668:case 35672:return pD;case 35669:case 35673:return mD;case 5125:return gD;case 36294:return vD;case 36295:return yD;case 36296:return xD;case 35678:case 36198:case 36298:case 36306:case 35682:return wD;case 35680:case 36300:case 36308:case 36293:return _D}}function SD(n,e,t){this.id=n,this.addr=t,this.cache=[],this.setValue=rD(e.type)}function c1(n,e,t){this.id=n,this.addr=t,this.cache=[],this.size=e.size,this.setValue=bD(e.type)}c1.prototype.updateCache=function(n){const e=this.cache;n instanceof Float32Array&&e.length!==n.length&&(this.cache=new Float32Array(n.length)),fn(e,n)};function u1(n){this.id=n,this.seq=[],this.map={}}u1.prototype.setValue=function(n,e,t){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const l=i[s];l.setValue(n,e[l.id],t)}};const Mf=/(\w+)(\])?(\[|\.)?/g;function cx(n,e){n.seq.push(e),n.map[e.id]=e}function MD(n,e,t){const i=n.name,s=i.length;for(Mf.lastIndex=0;;){const a=Mf.exec(i),l=Mf.lastIndex;let u=a[1];const d=a[2]==="]",h=a[3];if(d&&(u=u|0),h===void 0||h==="["&&l+2===s){cx(t,h===void 0?new SD(u,n,e):new c1(u,n,e));break}else{let m=t.map[u];m===void 0&&(m=new u1(u),cx(t,m)),t=m}}}function Pr(n,e){this.seq=[],this.map={};const t=n.getProgramParameter(e,35718);for(let i=0;i<t;++i){const s=n.getActiveUniform(e,i),a=n.getUniformLocation(e,s.name);MD(s,a,this)}}Pr.prototype.setValue=function(n,e,t,i){const s=this.map[e];s!==void 0&&s.setValue(n,t,i)};Pr.prototype.setOptional=function(n,e,t){const i=e[t];i!==void 0&&this.setValue(n,t,i)};Pr.upload=function(n,e,t,i){for(let s=0,a=e.length;s!==a;++s){const l=e[s],u=t[l.id];u.needsUpdate!==!1&&l.setValue(n,u.value,i)}};Pr.seqWithValue=function(n,e){const t=[];for(let i=0,s=n.length;i!==s;++i){const a=n[i];a.id in e&&t.push(a)}return t};function ux(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let ED=0;function TD(n){const e=n.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function d1(n){switch(n){case gl:return["Linear","( value )"];case Z_:return["sRGB","( value )"];case S3:return["RGBE","( value )"];case E3:return["RGBM","( value, 7.0 )"];case T3:return["RGBM","( value, 16.0 )"];case A3:return["RGBD","( value, 256.0 )"];case b3:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case M3:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function dx(n,e,t){const i=n.getShaderParameter(e,35713),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=n.getShaderSource(e);return"THREE.WebGLShader: gl.getShaderInfoLog() "+t+`
`+s+TD(a)}function Ta(n,e){const t=d1(e);return"vec4 "+n+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function AD(n,e){const t=d1(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function CD(n,e){let t;switch(e){case _L:t="Linear";break;case bL:t="Reinhard";break;case SL:t="OptimizedCineon";break;case ML:t="ACESFilmic";break;case EL:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function LD(n){return[n.extensionDerivatives||n.envMapCubeUV||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fa).join(`
`)}function PD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function RD(n,e){const t={},i=n.getProgramParameter(e,35721);for(let s=0;s<i;s++){const l=n.getActiveAttrib(e,s).name;t[l]=n.getAttribLocation(e,l)}return t}function Fa(n){return n!==""}function hx(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kD=/^[ \t]*#include +<([\w\d./]+)>/gm;function rp(n){return n.replace(kD,DD)}function DD(n,e){const t=it[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return rp(t)}const ID=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,ND=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function px(n){return n.replace(ND,h1).replace(ID,FD)}function FD(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),h1(n,e,t,i)}function h1(n,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function mx(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===W_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===QC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Na&&(e="SHADOWMAP_TYPE_VSM"),e}function BD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xp:case Yp:e="ENVMAP_TYPE_CUBE";break;case qp:case $p:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OD(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yp:case $p:e="ENVMAP_MODE_REFRACTION";break}return e}function VD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vu:e="ENVMAP_BLENDING_MULTIPLY";break;case xL:e="ENVMAP_BLENDING_MIX";break;case wL:e="ENVMAP_BLENDING_ADD";break}return e}function UD(n,e,t,i){const s=n.getContext(),a=t.defines;let l=t.vertexShader,u=t.fragmentShader;const d=zD(t),h=BD(t),p=OD(t),m=VD(t),g=n.gammaFactor>0?n.gammaFactor:1,y=t.isWebGL2?"":LD(t),_=PD(a),S=s.createProgram();let M,b,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=[_].filter(Fa).join(`
`),M.length>0&&(M+=`
`),b=[y,_].filter(Fa).join(`
`),b.length>0&&(b+=`
`)):(M=[mx(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+g,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),b=[y,mx(t),"#define SHADER_NAME "+t.shaderName,_,t.alphaTest?"#define ALPHATEST "+t.alphaTest+(t.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.sheen?"#define USE_SHEEN":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xa?"#define TONE_MAPPING":"",t.toneMapping!==Xa?it.tonemapping_pars_fragment:"",t.toneMapping!==Xa?CD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",it.encodings_pars_fragment,t.map?Ta("mapTexelToLinear",t.mapEncoding):"",t.matcap?Ta("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Ta("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Ta("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.lightMap?Ta("lightMapTexelToLinear",t.lightMapEncoding):"",AD("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),l=rp(l),l=hx(l,t),l=fx(l,t),u=rp(u),u=hx(u,t),u=fx(u,t),l=px(l),u=px(u),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=["#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,b=["#define varying in",t.glslVersion===jy?"":"out highp vec4 pc_fragColor;",t.glslVersion===jy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const C=w+M+l,R=w+b+u,A=ux(s,35633,C),T=ux(s,35632,R);if(s.attachShader(S,A),s.attachShader(S,T),t.index0AttributeName!==void 0?s.bindAttribLocation(S,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S),n.debug.checkShaderErrors){const q=s.getProgramInfoLog(S).trim(),ee=s.getShaderInfoLog(A).trim(),ae=s.getShaderInfoLog(T).trim();let oe=!0,z=!0;if(s.getProgramParameter(S,35714)===!1){oe=!1;const G=dx(s,A,"vertex"),W=dx(s,T,"fragment");console.error("THREE.WebGLProgram: shader error: ",s.getError(),"35715",s.getProgramParameter(S,35715),"gl.getProgramInfoLog",q,G,W)}else q!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",q):(ee===""||ae==="")&&(z=!1);z&&(this.diagnostics={runnable:oe,programLog:q,vertexShader:{log:ee,prefix:M},fragmentShader:{log:ae,prefix:b}})}s.deleteShader(A),s.deleteShader(T);let B;this.getUniforms=function(){return B===void 0&&(B=new Pr(s,S)),B};let U;return this.getAttributes=function(){return U===void 0&&(U=RD(s,S)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.name=t.shaderName,this.id=ED++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=A,this.fragmentShader=T,this}function HD(n,e,t,i,s,a){const l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.floatVertexTextures,p=i.maxVertexUniforms,m=i.vertexTextures;let g=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},_=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen","transmissionMap"];function S(T){const U=T.skeleton.bones;if(h)return 1024;{const ee=Math.floor((p-20)/4),ae=Math.min(ee,U.length);return ae<U.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+U.length+" bones. This GPU supports "+ae+"."),0):ae}}function M(T){let B;return T&&T.isTexture?B=T.encoding:T&&T.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),B=T.texture.encoding):B=gl,B}function b(T,B,U,q,ee){const ae=q.fog,oe=T.isMeshStandardMaterial?q.environment:null,z=e.get(T.envMap||oe),G=y[T.type],W=ee.isSkinnedMesh?S(ee):0;T.precision!==null&&(g=i.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));let V,ie;if(G){const re=Ti[G];V=re.vertexShader,ie=re.fragmentShader}else V=T.vertexShader,ie=T.fragmentShader;const X=n.getRenderTarget();return{isWebGL2:u,shaderID:G,shaderName:T.type,vertexShader:V,fragmentShader:ie,defines:T.defines,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,instancing:ee.isInstancedMesh===!0,instancingColor:ee.isInstancedMesh===!0&&ee.instanceColor!==null,supportsVertexTextures:m,outputEncoding:X!==null?M(X.texture):n.outputEncoding,map:!!T.map,mapEncoding:M(T.map),matcap:!!T.matcap,matcapEncoding:M(T.matcap),envMap:!!z,envMapMode:z&&z.mapping,envMapEncoding:M(z),envMapCubeUV:!!z&&(z.mapping===qp||z.mapping===$p),lightMap:!!T.lightMap,lightMapEncoding:M(T.lightMap),aoMap:!!T.aoMap,emissiveMap:!!T.emissiveMap,emissiveMapEncoding:M(T.emissiveMap),bumpMap:!!T.bumpMap,normalMap:!!T.normalMap,objectSpaceNormalMap:T.normalMapType===P3,tangentSpaceNormalMap:T.normalMapType===To,clearcoatMap:!!T.clearcoatMap,clearcoatRoughnessMap:!!T.clearcoatRoughnessMap,clearcoatNormalMap:!!T.clearcoatNormalMap,displacementMap:!!T.displacementMap,roughnessMap:!!T.roughnessMap,metalnessMap:!!T.metalnessMap,specularMap:!!T.specularMap,alphaMap:!!T.alphaMap,gradientMap:!!T.gradientMap,sheen:!!T.sheen,transmissionMap:!!T.transmissionMap,combine:T.combine,vertexTangents:T.normalMap&&T.vertexTangents,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&ee.geometry&&ee.geometry.attributes.color&&ee.geometry.attributes.color.itemSize===4,vertexUvs:!!T.map||!!T.bumpMap||!!T.normalMap||!!T.specularMap||!!T.alphaMap||!!T.emissiveMap||!!T.roughnessMap||!!T.metalnessMap||!!T.clearcoatMap||!!T.clearcoatRoughnessMap||!!T.clearcoatNormalMap||!!T.displacementMap||!!T.transmissionMap,uvsVertexOnly:!(T.map||T.bumpMap||T.normalMap||T.specularMap||T.alphaMap||T.emissiveMap||T.roughnessMap||T.metalnessMap||T.clearcoatNormalMap||T.transmissionMap)&&!!T.displacementMap,fog:!!ae,useFog:T.fog,fogExp2:ae&&ae.isFogExp2,flatShading:!!T.flatShading,sizeAttenuation:T.sizeAttenuation,logarithmicDepthBuffer:d,skinning:T.skinning&&W>0,maxBones:W,useVertexTexture:h,morphTargets:T.morphTargets,morphNormals:T.morphNormals,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:T.toneMapped?n.toneMapping:Xa,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:T.premultipliedAlpha,alphaTest:T.alphaTest,doubleSided:T.side===Ou,flipSided:T.side===Jt,depthPacking:T.depthPacking!==void 0?T.depthPacking:!1,index0AttributeName:T.index0AttributeName,extensionDerivatives:T.extensions&&T.extensions.derivatives,extensionFragDepth:T.extensions&&T.extensions.fragDepth,extensionDrawBuffers:T.extensions&&T.extensions.drawBuffers,extensionShaderTextureLOD:T.extensions&&T.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||t.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||t.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||t.has("EXT_shader_texture_lod"),customProgramCacheKey:T.customProgramCacheKey()}}function w(T){const B=[];if(T.shaderID?B.push(T.shaderID):(B.push(T.fragmentShader),B.push(T.vertexShader)),T.defines!==void 0)for(const U in T.defines)B.push(U),B.push(T.defines[U]);if(T.isRawShaderMaterial===!1){for(let U=0;U<_.length;U++)B.push(T[_[U]]);B.push(n.outputEncoding),B.push(n.gammaFactor)}return B.push(T.customProgramCacheKey),B.join()}function C(T){const B=y[T.type];let U;if(B){const q=Ti[B];U=J3.clone(q.uniforms)}else U=T.uniforms;return U}function R(T,B){let U;for(let q=0,ee=l.length;q<ee;q++){const ae=l[q];if(ae.cacheKey===B){U=ae,++U.usedTimes;break}}return U===void 0&&(U=new UD(n,B,T,s),l.push(U)),U}function A(T){if(--T.usedTimes===0){const B=l.indexOf(T);l[B]=l[l.length-1],l.pop(),T.destroy()}}return{getParameters:b,getProgramCacheKey:w,getUniforms:C,acquireProgram:R,releaseProgram:A,programs:l}}function GD(){let n=new WeakMap;function e(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function t(a){n.delete(a)}function i(a,l,u){n.get(a)[l]=u}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function WD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.program!==e.program?n.program.id-e.program.id:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gx(n){const e=[];let t=0;const i=[],s=[],a={id:-1};function l(){t=0,i.length=0,s.length=0}function u(g,y,_,S,M,b){let w=e[t];const C=n.get(_);return w===void 0?(w={id:g.id,object:g,geometry:y,material:_,program:C.program||a,groupOrder:S,renderOrder:g.renderOrder,z:M,group:b},e[t]=w):(w.id=g.id,w.object=g,w.geometry=y,w.material=_,w.program=C.program||a,w.groupOrder=S,w.renderOrder=g.renderOrder,w.z=M,w.group=b),t++,w}function d(g,y,_,S,M,b){const w=u(g,y,_,S,M,b);(_.transparent===!0?s:i).push(w)}function h(g,y,_,S,M,b){const w=u(g,y,_,S,M,b);(_.transparent===!0?s:i).unshift(w)}function p(g,y){i.length>1&&i.sort(g||WD),s.length>1&&s.sort(y||jD)}function m(){for(let g=t,y=e.length;g<y;g++){const _=e[g];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.program=null,_.group=null}}return{opaque:i,transparent:s,init:l,push:d,unshift:h,finish:m,sort:p}}function XD(n){let e=new WeakMap;function t(s,a){let l;return e.has(s)===!1?(l=new gx(n),e.set(s,[l])):a>=e.get(s).length?(l=new gx(n),e.get(s).push(l)):l=e.get(s)[a],l}function i(){e=new WeakMap}return{get:t,dispose:i}}function YD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ve};break;case"SpotLight":t={position:new N,direction:new N,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function qD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $D=0;function ZD(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function JD(n,e){const t=new YD,i=qD(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let p=0;p<9;p++)s.probe.push(new N);const a=new N,l=new Xe,u=new Xe;function d(p){let m=0,g=0,y=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let _=0,S=0,M=0,b=0,w=0,C=0,R=0,A=0;p.sort(ZD);for(let B=0,U=p.length;B<U;B++){const q=p[B],ee=q.color,ae=q.intensity,oe=q.distance,z=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)m+=ee.r*ae,g+=ee.g*ae,y+=ee.b*ae;else if(q.isLightProbe)for(let G=0;G<9;G++)s.probe[G].addScaledVector(q.sh.coefficients[G],ae);else if(q.isDirectionalLight){const G=t.get(q);if(G.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const W=q.shadow,V=i.get(q);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,s.directionalShadow[_]=V,s.directionalShadowMap[_]=z,s.directionalShadowMatrix[_]=q.shadow.matrix,C++}s.directional[_]=G,_++}else if(q.isSpotLight){const G=t.get(q);if(G.position.setFromMatrixPosition(q.matrixWorld),G.color.copy(ee).multiplyScalar(ae),G.distance=oe,G.coneCos=Math.cos(q.angle),G.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),G.decay=q.decay,q.castShadow){const W=q.shadow,V=i.get(q);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,s.spotShadow[M]=V,s.spotShadowMap[M]=z,s.spotShadowMatrix[M]=q.shadow.matrix,A++}s.spot[M]=G,M++}else if(q.isRectAreaLight){const G=t.get(q);G.color.copy(ee).multiplyScalar(ae),G.halfWidth.set(q.width*.5,0,0),G.halfHeight.set(0,q.height*.5,0),s.rectArea[b]=G,b++}else if(q.isPointLight){const G=t.get(q);if(G.color.copy(q.color).multiplyScalar(q.intensity),G.distance=q.distance,G.decay=q.decay,q.castShadow){const W=q.shadow,V=i.get(q);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,s.pointShadow[S]=V,s.pointShadowMap[S]=z,s.pointShadowMatrix[S]=q.shadow.matrix,R++}s.point[S]=G,S++}else if(q.isHemisphereLight){const G=t.get(q);G.skyColor.copy(q.color).multiplyScalar(ae),G.groundColor.copy(q.groundColor).multiplyScalar(ae),s.hemi[w]=G,w++}}b>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=m,s.ambient[1]=g,s.ambient[2]=y;const T=s.hash;(T.directionalLength!==_||T.pointLength!==S||T.spotLength!==M||T.rectAreaLength!==b||T.hemiLength!==w||T.numDirectionalShadows!==C||T.numPointShadows!==R||T.numSpotShadows!==A)&&(s.directional.length=_,s.spot.length=M,s.rectArea.length=b,s.point.length=S,s.hemi.length=w,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=R,s.spotShadowMatrix.length=A,T.directionalLength=_,T.pointLength=S,T.spotLength=M,T.rectAreaLength=b,T.hemiLength=w,T.numDirectionalShadows=C,T.numPointShadows=R,T.numSpotShadows=A,s.version=$D++)}function h(p,m){let g=0,y=0,_=0,S=0,M=0;const b=m.matrixWorldInverse;for(let w=0,C=p.length;w<C;w++){const R=p[w];if(R.isDirectionalLight){const A=s.directional[g];A.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(b),g++}else if(R.isSpotLight){const A=s.spot[_];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(b),A.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(b),_++}else if(R.isRectAreaLight){const A=s.rectArea[S];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(b),u.identity(),l.copy(R.matrixWorld),l.premultiply(b),u.extractRotation(l),A.halfWidth.set(R.width*.5,0,0),A.halfHeight.set(0,R.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),S++}else if(R.isPointLight){const A=s.point[y];A.position.setFromMatrixPosition(R.matrixWorld),A.position.applyMatrix4(b),y++}else if(R.isHemisphereLight){const A=s.hemi[M];A.direction.setFromMatrixPosition(R.matrixWorld),A.direction.transformDirection(b),A.direction.normalize(),M++}}}return{setup:d,setupView:h,state:s}}function vx(n,e){const t=new JD(n,e),i=[],s=[];function a(){i.length=0,s.length=0}function l(m){i.push(m)}function u(m){s.push(m)}function d(){t.setup(i)}function h(m){t.setupView(i,m)}return{init:a,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function KD(n,e){let t=new WeakMap;function i(a,l=0){let u;return t.has(a)===!1?(u=new vx(n,e),t.set(a,[u])):l>=t.get(a).length?(u=new vx(n,e),t.get(a).push(u)):u=t.get(a)[l],u}function s(){t=new WeakMap}return{get:i,dispose:s}}class f1 extends Qt{constructor(e){super(),this.type="MeshDepthMaterial",this.depthPacking=C3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}f1.prototype.isMeshDepthMaterial=!0;class p1 extends Qt{constructor(e){super(),this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}p1.prototype.isMeshDistanceMaterial=!0;var QD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	float mean = 0.0;
	float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );
	for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, i ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean * HALF_SAMPLE_RATE;
	squared_mean = squared_mean * HALF_SAMPLE_RATE;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,eI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function m1(n,e,t){let i=new Hu;const s=new we,a=new we,l=new mt,u=[],d=[],h={},p=t.maxTextureSize,m={0:Jt,1:Bu,2:Ou},g=new ls({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:eI,fragmentShader:QD}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const _=new pt;_.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Bn(_,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W_,this.render=function(T,B,U){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||T.length===0)return;const q=n.getRenderTarget(),ee=n.getActiveCubeFace(),ae=n.getActiveMipmapLevel(),oe=n.state;oe.setBlending(Ga),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);for(let z=0,G=T.length;z<G;z++){const W=T[z],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ie=V.getFrameExtents();if(s.multiply(ie),a.copy(V.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(a.x=Math.floor(p/ie.x),s.x=a.x*ie.x,V.mapSize.x=a.x),s.y>p&&(a.y=Math.floor(p/ie.y),s.y=a.y*ie.y,V.mapSize.y=a.y)),V.map===null&&!V.isPointLightShadow&&this.type===Na){const ne={minFilter:qn,magFilter:qn,format:pi};V.map=new os(s.x,s.y,ne),V.map.texture.name=W.name+".shadowMap",V.mapPass=new os(s.x,s.y,ne),V.camera.updateProjectionMatrix()}if(V.map===null){const ne={minFilter:vn,magFilter:vn,format:pi};V.map=new os(s.x,s.y,ne),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const X=V.getViewportCount();for(let ne=0;ne<X;ne++){const re=V.getViewport(ne);l.set(a.x*re.x,a.y*re.y,a.x*re.z,a.y*re.w),oe.viewport(l),V.updateMatrices(W,ne),i=V.getFrustum(),A(B,U,V.camera,W,this.type)}!V.isPointLightShadow&&this.type===Na&&b(V,U),V.needsUpdate=!1}M.needsUpdate=!1,n.setRenderTarget(q,ee,ae)};function b(T,B){const U=e.update(S);g.uniforms.shadow_pass.value=T.map.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(B,null,U,g,S,null),y.uniforms.shadow_pass.value=T.mapPass.texture,y.uniforms.resolution.value=T.mapSize,y.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(B,null,U,y,S,null)}function w(T,B,U){const q=T<<0|B<<1|U<<2;let ee=u[q];return ee===void 0&&(ee=new f1({depthPacking:L3,morphTargets:T,skinning:B}),u[q]=ee),ee}function C(T,B,U){const q=T<<0|B<<1|U<<2;let ee=d[q];return ee===void 0&&(ee=new p1({morphTargets:T,skinning:B}),d[q]=ee),ee}function R(T,B,U,q,ee,ae,oe){let z=null,G=w,W=T.customDepthMaterial;if(q.isPointLight===!0&&(G=C,W=T.customDistanceMaterial),W===void 0){let V=!1;U.morphTargets===!0&&(V=B.morphAttributes&&B.morphAttributes.position&&B.morphAttributes.position.length>0);let ie=!1;T.isSkinnedMesh===!0&&(U.skinning===!0?ie=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",T));const X=T.isInstancedMesh===!0;z=G(V,ie,X)}else z=W;if(n.localClippingEnabled&&U.clipShadows===!0&&U.clippingPlanes.length!==0){const V=z.uuid,ie=U.uuid;let X=h[V];X===void 0&&(X={},h[V]=X);let ne=X[ie];ne===void 0&&(ne=z.clone(),X[ie]=ne),z=ne}return z.visible=U.visible,z.wireframe=U.wireframe,oe===Na?z.side=U.shadowSide!==null?U.shadowSide:U.side:z.side=U.shadowSide!==null?U.shadowSide:m[U.side],z.clipShadows=U.clipShadows,z.clippingPlanes=U.clippingPlanes,z.clipIntersection=U.clipIntersection,z.wireframeLinewidth=U.wireframeLinewidth,z.linewidth=U.linewidth,q.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(q.matrixWorld),z.nearDistance=ee,z.farDistance=ae),z}function A(T,B,U,q,ee){if(T.visible===!1)return;if(T.layers.test(B.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&ee===Na)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);const z=e.update(T),G=T.material;if(Array.isArray(G)){const W=z.groups;for(let V=0,ie=W.length;V<ie;V++){const X=W[V],ne=G[X.materialIndex];if(ne&&ne.visible){const re=R(T,z,ne,q,U.near,U.far,ee);n.renderBufferDirect(U,null,z,re,T,X)}}}else if(G.visible){const W=R(T,z,G,q,U.near,U.far,ee);n.renderBufferDirect(U,null,z,W,T,null)}}const oe=T.children;for(let z=0,G=oe.length;z<G;z++)A(oe[z],B,U,q,ee)}}function tI(n,e,t){const i=t.isWebGL2;function s(){let H=!1;const ye=new mt;let _e=null;const Oe=new mt(0,0,0,0);return{setMask:function(he){_e!==he&&!H&&(n.colorMask(he,he,he,he),_e=he)},setLocked:function(he){H=he},setClear:function(he,We,st,Rt,gi){gi===!0&&(he*=Rt,We*=Rt,st*=Rt),ye.set(he,We,st,Rt),Oe.equals(ye)===!1&&(n.clearColor(he,We,st,Rt),Oe.copy(ye))},reset:function(){H=!1,_e=null,Oe.set(-1,0,0,0)}}}function a(){let H=!1,ye=null,_e=null,Oe=null;return{setTest:function(he){he?J(2929):ve(2929)},setMask:function(he){ye!==he&&!H&&(n.depthMask(he),ye=he)},setFunc:function(he){if(_e!==he){if(he)switch(he){case hL:n.depthFunc(512);break;case fL:n.depthFunc(519);break;case pL:n.depthFunc(513);break;case ep:n.depthFunc(515);break;case mL:n.depthFunc(514);break;case gL:n.depthFunc(518);break;case vL:n.depthFunc(516);break;case yL:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);_e=he}},setLocked:function(he){H=he},setClear:function(he){Oe!==he&&(n.clearDepth(he),Oe=he)},reset:function(){H=!1,ye=null,_e=null,Oe=null}}}function l(){let H=!1,ye=null,_e=null,Oe=null,he=null,We=null,st=null,Rt=null,gi=null;return{setTest:function(_t){H||(_t?J(2960):ve(2960))},setMask:function(_t){ye!==_t&&!H&&(n.stencilMask(_t),ye=_t)},setFunc:function(_t,Kn,pn){(_e!==_t||Oe!==Kn||he!==pn)&&(n.stencilFunc(_t,Kn,pn),_e=_t,Oe=Kn,he=pn)},setOp:function(_t,Kn,pn){(We!==_t||st!==Kn||Rt!==pn)&&(n.stencilOp(_t,Kn,pn),We=_t,st=Kn,Rt=pn)},setLocked:function(_t){H=_t},setClear:function(_t){gi!==_t&&(n.clearStencil(_t),gi=_t)},reset:function(){H=!1,ye=null,_e=null,Oe=null,he=null,We=null,st=null,Rt=null,gi=null}}}const u=new s,d=new a,h=new l;let p={},m=null,g={},y=null,_=!1,S=null,M=null,b=null,w=null,C=null,R=null,A=null,T=!1,B=null,U=null,q=null,ee=null,ae=null;const oe=n.getParameter(35661);let z=!1,G=0;const W=n.getParameter(7938);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=G>=2);let V=null,ie={};const X=new mt(0,0,n.canvas.width,n.canvas.height),ne=new mt(0,0,n.canvas.width,n.canvas.height);function re(H,ye,_e){const Oe=new Uint8Array(4),he=n.createTexture();n.bindTexture(H,he),n.texParameteri(H,10241,9728),n.texParameteri(H,10240,9728);for(let We=0;We<_e;We++)n.texImage2D(ye+We,0,6408,1,1,0,6408,5121,Oe);return he}const D={};D[3553]=re(3553,3553,1),D[34067]=re(34067,34069,6),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),J(2929),d.setFunc(ep),Qe(!1),ge(Ty),J(2884),Be(Ga);function J(H){p[H]!==!0&&(n.enable(H),p[H]=!0)}function ve(H){p[H]!==!1&&(n.disable(H),p[H]=!1)}function K(H){H!==m&&(n.bindFramebuffer(36160,H),m=H)}function Ie(H,ye){ye===null&&m!==null&&(ye=m),g[H]!==ye&&(n.bindFramebuffer(H,ye),g[H]=ye,i&&(H===36009&&(g[36160]=ye),H===36160&&(g[36009]=ye)))}function Pe(H){return y!==H?(n.useProgram(H),y=H,!0):!1}const Ce={[so]:32774,[tL]:32778,[nL]:32779};if(i)Ce[Ly]=32775,Ce[Py]=32776;else{const H=e.get("EXT_blend_minmax");H!==null&&(Ce[Ly]=H.MIN_EXT,Ce[Py]=H.MAX_EXT)}const be={[iL]:0,[rL]:1,[sL]:768,[X_]:770,[dL]:776,[cL]:774,[aL]:772,[oL]:769,[Y_]:771,[uL]:775,[lL]:773};function Be(H,ye,_e,Oe,he,We,st,Rt){if(H===Ga){_===!0&&(ve(3042),_=!1);return}if(_===!1&&(J(3042),_=!0),H!==eL){if(H!==S||Rt!==T){if((M!==so||C!==so)&&(n.blendEquation(32774),M=so,C=so),Rt)switch(H){case Wa:n.blendFuncSeparate(1,771,1,771);break;case ja:n.blendFunc(1,1);break;case Ay:n.blendFuncSeparate(0,0,769,771);break;case Cy:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Wa:n.blendFuncSeparate(770,771,1,771);break;case ja:n.blendFunc(770,1);break;case Ay:n.blendFunc(0,769);break;case Cy:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,w=null,R=null,A=null,S=H,T=Rt}return}he=he||ye,We=We||_e,st=st||Oe,(ye!==M||he!==C)&&(n.blendEquationSeparate(Ce[ye],Ce[he]),M=ye,C=he),(_e!==b||Oe!==w||We!==R||st!==A)&&(n.blendFuncSeparate(be[_e],be[Oe],be[We],be[st]),b=_e,w=Oe,R=We,A=st),S=H,T=null}function Ue(H,ye){H.side===Ou?ve(2884):J(2884);let _e=H.side===Jt;ye&&(_e=!_e),Qe(_e),H.blending===Wa&&H.transparent===!1?Be(Ga):Be(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),u.setMask(H.colorWrite);const Oe=H.stencilWrite;h.setTest(Oe),Oe&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Se(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?J(32926):ve(32926)}function Qe(H){B!==H&&(H?n.frontFace(2304):n.frontFace(2305),B=H)}function ge(H){H!==JC?(J(2884),H!==U&&(H===Ty?n.cullFace(1029):H===KC?n.cullFace(1028):n.cullFace(1032))):ve(2884),U=H}function xe(H){H!==q&&(z&&n.lineWidth(H),q=H)}function Se(H,ye,_e){H?(J(32823),(ee!==ye||ae!==_e)&&(n.polygonOffset(ye,_e),ee=ye,ae=_e)):ve(32823)}function ze(H){H?J(3089):ve(3089)}function Ae(H){H===void 0&&(H=33984+oe-1),V!==H&&(n.activeTexture(H),V=H)}function I(H,ye){V===null&&Ae();let _e=ie[V];_e===void 0&&(_e={type:void 0,texture:void 0},ie[V]=_e),(_e.type!==H||_e.texture!==ye)&&(n.bindTexture(H,ye||D[H]),_e.type=H,_e.texture=ye)}function P(){const H=ie[V];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ce(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(H){X.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),X.copy(H))}function rt(H){ne.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),ne.copy(H))}function qe(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},V=null,ie={},m=null,g={},y=null,_=!1,S=null,M=null,b=null,w=null,C=null,R=null,A=null,T=!1,B=null,U=null,q=null,ee=null,ae=null,X.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:J,disable:ve,bindFramebuffer:Ie,bindXRFramebuffer:K,useProgram:Pe,setBlending:Be,setMaterial:Ue,setFlipSided:Qe,setCullFace:ge,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:ze,activeTexture:Ae,bindTexture:I,unbindTexture:P,compressedTexImage2D:ce,texImage2D:ue,texImage3D:Me,scissor:Ne,viewport:rt,reset:qe}}function nI(n,e,t,i,s,a,l){const u=s.isWebGL2,d=s.maxTextures,h=s.maxCubemapSize,p=s.maxTextureSize,m=s.maxSamples,g=new WeakMap;let y,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,P){return _?new OffscreenCanvas(I,P):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function M(I,P,ce,ue){let Me=1;if((I.width>ue||I.height>ue)&&(Me=ue/Math.max(I.width,I.height)),Me<1||P===!0)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap){const Ne=P?I3:Math.floor,rt=Ne(Me*I.width),qe=Ne(Me*I.height);y===void 0&&(y=S(rt,qe));const H=ce?S(rt,qe):y;return H.width=rt,H.height=qe,H.getContext("2d").drawImage(I,0,0,rt,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+rt+"x"+qe+")."),H}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),I;return I}function b(I){return Xy(I.width)&&Xy(I.height)}function w(I){return u?!1:I.wrapS!==fi||I.wrapT!==fi||I.minFilter!==vn&&I.minFilter!==qn}function C(I,P){return I.generateMipmaps&&P&&I.minFilter!==vn&&I.minFilter!==qn}function R(I,P,ce,ue){n.generateMipmap(I);const Me=i.get(P);Me.__maxMipLevel=Math.log2(Math.max(ce,ue))}function A(I,P,ce){if(u===!1)return P;if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ue=P;return P===6403&&(ce===5126&&(ue=33326),ce===5131&&(ue=33325),ce===5121&&(ue=33321)),P===6407&&(ce===5126&&(ue=34837),ce===5131&&(ue=34843),ce===5121&&(ue=32849)),P===6408&&(ce===5126&&(ue=34836),ce===5131&&(ue=34842),ce===5121&&(ue=32856)),(ue===33325||ue===33326||ue===34842||ue===34836)&&e.get("EXT_color_buffer_float"),ue}function T(I){return I===vn||I===Dy||I===Iy?9728:9729}function B(I){const P=I.target;P.removeEventListener("dispose",B),q(P),P.isVideoTexture&&g.delete(P),l.memory.textures--}function U(I){const P=I.target;P.removeEventListener("dispose",U),ee(P),l.memory.textures--}function q(I){const P=i.get(I);P.__webglInit!==void 0&&(n.deleteTexture(P.__webglTexture),i.remove(I))}function ee(I){const P=I.texture,ce=i.get(I),ue=i.get(P);if(I){if(ue.__webglTexture!==void 0&&n.deleteTexture(ue.__webglTexture),I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++)n.deleteFramebuffer(ce.__webglFramebuffer[Me]),ce.__webglDepthbuffer&&n.deleteRenderbuffer(ce.__webglDepthbuffer[Me]);else n.deleteFramebuffer(ce.__webglFramebuffer),ce.__webglDepthbuffer&&n.deleteRenderbuffer(ce.__webglDepthbuffer),ce.__webglMultisampledFramebuffer&&n.deleteFramebuffer(ce.__webglMultisampledFramebuffer),ce.__webglColorRenderbuffer&&n.deleteRenderbuffer(ce.__webglColorRenderbuffer),ce.__webglDepthRenderbuffer&&n.deleteRenderbuffer(ce.__webglDepthRenderbuffer);i.remove(P),i.remove(I)}}let ae=0;function oe(){ae=0}function z(){const I=ae;return I>=d&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+d),ae+=1,I}function G(I,P){const ce=i.get(I);if(I.isVideoTexture&&ge(I),I.version>0&&ce.__version!==I.version){const ue=I.image;if(ue===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(ce,I,P);return}}t.activeTexture(33984+P),t.bindTexture(3553,ce.__webglTexture)}function W(I,P){const ce=i.get(I);if(I.version>0&&ce.__version!==I.version){J(ce,I,P);return}t.activeTexture(33984+P),t.bindTexture(35866,ce.__webglTexture)}function V(I,P){const ce=i.get(I);if(I.version>0&&ce.__version!==I.version){J(ce,I,P);return}t.activeTexture(33984+P),t.bindTexture(32879,ce.__webglTexture)}function ie(I,P){const ce=i.get(I);if(I.version>0&&ce.__version!==I.version){ve(ce,I,P);return}t.activeTexture(33984+P),t.bindTexture(34067,ce.__webglTexture)}const X={[tp]:10497,[fi]:33071,[np]:33648},ne={[vn]:9728,[Dy]:9984,[Iy]:9986,[qn]:9729,[TL]:9985,[Zp]:9987};function re(I,P,ce){if(ce?(n.texParameteri(I,10242,X[P.wrapS]),n.texParameteri(I,10243,X[P.wrapT]),(I===32879||I===35866)&&n.texParameteri(I,32882,X[P.wrapR]),n.texParameteri(I,10240,ne[P.magFilter]),n.texParameteri(I,10241,ne[P.minFilter])):(n.texParameteri(I,10242,33071),n.texParameteri(I,10243,33071),(I===32879||I===35866)&&n.texParameteri(I,32882,33071),(P.wrapS!==fi||P.wrapT!==fi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(I,10240,T(P.magFilter)),n.texParameteri(I,10241,T(P.minFilter)),P.minFilter!==vn&&P.minFilter!==qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ue=e.get("EXT_texture_filter_anisotropic");if(P.type===Ar&&e.has("OES_texture_float_linear")===!1||u===!1&&P.type===_u&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||i.get(P).__currentAnisotropy)&&(n.texParameterf(I,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,s.getMaxAnisotropy())),i.get(P).__currentAnisotropy=P.anisotropy)}}function D(I,P){I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",B),I.__webglTexture=n.createTexture(),l.memory.textures++)}function J(I,P,ce){let ue=3553;P.isDataTexture2DArray&&(ue=35866),P.isDataTexture3D&&(ue=32879),D(I,P),t.activeTexture(33984+ce),t.bindTexture(ue,I.__webglTexture),n.pixelStorei(37440,P.flipY),n.pixelStorei(37441,P.premultiplyAlpha),n.pixelStorei(3317,P.unpackAlignment),n.pixelStorei(37443,0);const Me=w(P)&&b(P.image)===!1,Ne=M(P.image,Me,!1,p),rt=b(Ne)||u,qe=a.convert(P.format);let H=a.convert(P.type),ye=A(P.internalFormat,qe,H);re(ue,P,rt);let _e;const Oe=P.mipmaps;if(P.isDepthTexture)ye=6402,u?P.type===Ar?ye=36012:P.type===uu?ye=33190:P.type===Ya?ye=35056:ye=33189:P.type===Ar&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===go&&ye===6402&&P.type!==wu&&P.type!==uu&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=wu,H=a.convert(P.type)),P.format===nl&&ye===6402&&(ye=34041,P.type!==Ya&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Ya,H=a.convert(P.type))),t.texImage2D(3553,0,ye,Ne.width,Ne.height,0,qe,H,null);else if(P.isDataTexture)if(Oe.length>0&&rt){for(let he=0,We=Oe.length;he<We;he++)_e=Oe[he],t.texImage2D(3553,he,ye,_e.width,_e.height,0,qe,H,_e.data);P.generateMipmaps=!1,I.__maxMipLevel=Oe.length-1}else t.texImage2D(3553,0,ye,Ne.width,Ne.height,0,qe,H,Ne.data),I.__maxMipLevel=0;else if(P.isCompressedTexture){for(let he=0,We=Oe.length;he<We;he++)_e=Oe[he],P.format!==pi&&P.format!==ss?qe!==null?t.compressedTexImage2D(3553,he,ye,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,he,ye,_e.width,_e.height,0,qe,H,_e.data);I.__maxMipLevel=Oe.length-1}else if(P.isDataTexture2DArray)t.texImage3D(35866,0,ye,Ne.width,Ne.height,Ne.depth,0,qe,H,Ne.data),I.__maxMipLevel=0;else if(P.isDataTexture3D)t.texImage3D(32879,0,ye,Ne.width,Ne.height,Ne.depth,0,qe,H,Ne.data),I.__maxMipLevel=0;else if(Oe.length>0&&rt){for(let he=0,We=Oe.length;he<We;he++)_e=Oe[he],t.texImage2D(3553,he,ye,qe,H,_e);P.generateMipmaps=!1,I.__maxMipLevel=Oe.length-1}else t.texImage2D(3553,0,ye,qe,H,Ne),I.__maxMipLevel=0;C(P,rt)&&R(ue,P,Ne.width,Ne.height),I.__version=P.version,P.onUpdate&&P.onUpdate(P)}function ve(I,P,ce){if(P.image.length!==6)return;D(I,P),t.activeTexture(33984+ce),t.bindTexture(34067,I.__webglTexture),n.pixelStorei(37440,P.flipY),n.pixelStorei(37441,P.premultiplyAlpha),n.pixelStorei(3317,P.unpackAlignment),n.pixelStorei(37443,0);const ue=P&&(P.isCompressedTexture||P.image[0].isCompressedTexture),Me=P.image[0]&&P.image[0].isDataTexture,Ne=[];for(let he=0;he<6;he++)!ue&&!Me?Ne[he]=M(P.image[he],!1,!0,h):Ne[he]=Me?P.image[he].image:P.image[he];const rt=Ne[0],qe=b(rt)||u,H=a.convert(P.format),ye=a.convert(P.type),_e=A(P.internalFormat,H,ye);re(34067,P,qe);let Oe;if(ue){for(let he=0;he<6;he++){Oe=Ne[he].mipmaps;for(let We=0;We<Oe.length;We++){const st=Oe[We];P.format!==pi&&P.format!==ss?H!==null?t.compressedTexImage2D(34069+he,We,_e,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+he,We,_e,st.width,st.height,0,H,ye,st.data)}}I.__maxMipLevel=Oe.length-1}else{Oe=P.mipmaps;for(let he=0;he<6;he++)if(Me){t.texImage2D(34069+he,0,_e,Ne[he].width,Ne[he].height,0,H,ye,Ne[he].data);for(let We=0;We<Oe.length;We++){const Rt=Oe[We].image[he].image;t.texImage2D(34069+he,We+1,_e,Rt.width,Rt.height,0,H,ye,Rt.data)}}else{t.texImage2D(34069+he,0,_e,H,ye,Ne[he]);for(let We=0;We<Oe.length;We++){const st=Oe[We];t.texImage2D(34069+he,We+1,_e,H,ye,st.image[he])}}I.__maxMipLevel=Oe.length}C(P,qe)&&R(34067,P,rt.width,rt.height),I.__version=P.version,P.onUpdate&&P.onUpdate(P)}function K(I,P,ce,ue){const Me=P.texture,Ne=a.convert(Me.format),rt=a.convert(Me.type),qe=A(Me.internalFormat,Ne,rt);ue===32879||ue===35866?t.texImage3D(ue,0,qe,P.width,P.height,P.depth,0,Ne,rt,null):t.texImage2D(ue,0,qe,P.width,P.height,0,Ne,rt,null),t.bindFramebuffer(36160,I),n.framebufferTexture2D(36160,ce,ue,i.get(Me).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ie(I,P,ce){if(n.bindRenderbuffer(36161,I),P.depthBuffer&&!P.stencilBuffer){let ue=33189;if(ce){const Me=P.depthTexture;Me&&Me.isDepthTexture&&(Me.type===Ar?ue=36012:Me.type===uu&&(ue=33190));const Ne=Qe(P);n.renderbufferStorageMultisample(36161,Ne,ue,P.width,P.height)}else n.renderbufferStorage(36161,ue,P.width,P.height);n.framebufferRenderbuffer(36160,36096,36161,I)}else if(P.depthBuffer&&P.stencilBuffer){if(ce){const ue=Qe(P);n.renderbufferStorageMultisample(36161,ue,35056,P.width,P.height)}else n.renderbufferStorage(36161,34041,P.width,P.height);n.framebufferRenderbuffer(36160,33306,36161,I)}else{const ue=P.texture,Me=a.convert(ue.format),Ne=a.convert(ue.type),rt=A(ue.internalFormat,Me,Ne);if(ce){const qe=Qe(P);n.renderbufferStorageMultisample(36161,qe,rt,P.width,P.height)}else n.renderbufferStorage(36161,rt,P.width,P.height)}n.bindRenderbuffer(36161,null)}function Pe(I,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),G(P.depthTexture,0);const ue=i.get(P.depthTexture).__webglTexture;if(P.depthTexture.format===go)n.framebufferTexture2D(36160,36096,3553,ue,0);else if(P.depthTexture.format===nl)n.framebufferTexture2D(36160,33306,3553,ue,0);else throw new Error("Unknown depthTexture format")}function Ce(I){const P=i.get(I),ce=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture){if(ce)throw new Error("target.depthTexture not supported in Cube render targets");Pe(P.__webglFramebuffer,I)}else if(ce){P.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(36160,P.__webglFramebuffer[ue]),P.__webglDepthbuffer[ue]=n.createRenderbuffer(),Ie(P.__webglDepthbuffer[ue],I,!1)}else t.bindFramebuffer(36160,P.__webglFramebuffer),P.__webglDepthbuffer=n.createRenderbuffer(),Ie(P.__webglDepthbuffer,I,!1);t.bindFramebuffer(36160,null)}function be(I){const P=I.texture,ce=i.get(I),ue=i.get(P);I.addEventListener("dispose",U),ue.__webglTexture=n.createTexture(),ue.__version=P.version,l.memory.textures++;const Me=I.isWebGLCubeRenderTarget===!0,Ne=I.isWebGLMultisampleRenderTarget===!0,rt=P.isDataTexture3D||P.isDataTexture2DArray,qe=b(I)||u;if(u&&P.format===ss&&(P.type===Ar||P.type===_u)&&(P.format=pi,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),Me){ce.__webglFramebuffer=[];for(let H=0;H<6;H++)ce.__webglFramebuffer[H]=n.createFramebuffer()}else if(ce.__webglFramebuffer=n.createFramebuffer(),Ne)if(u){ce.__webglMultisampledFramebuffer=n.createFramebuffer(),ce.__webglColorRenderbuffer=n.createRenderbuffer(),n.bindRenderbuffer(36161,ce.__webglColorRenderbuffer);const H=a.convert(P.format),ye=a.convert(P.type),_e=A(P.internalFormat,H,ye),Oe=Qe(I);n.renderbufferStorageMultisample(36161,Oe,_e,I.width,I.height),t.bindFramebuffer(36160,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064,36161,ce.__webglColorRenderbuffer),n.bindRenderbuffer(36161,null),I.depthBuffer&&(ce.__webglDepthRenderbuffer=n.createRenderbuffer(),Ie(ce.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(Me){t.bindTexture(34067,ue.__webglTexture),re(34067,P,qe);for(let H=0;H<6;H++)K(ce.__webglFramebuffer[H],I,36064,34069+H);C(P,qe)&&R(34067,P,I.width,I.height),t.bindTexture(34067,null)}else{let H=3553;rt&&(u?H=P.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(H,ue.__webglTexture),re(H,P,qe),K(ce.__webglFramebuffer,I,36064,H),C(P,qe)&&R(3553,P,I.width,I.height),t.bindTexture(3553,null)}I.depthBuffer&&Ce(I)}function Be(I){const P=I.texture,ce=b(I)||u;if(C(P,ce)){const ue=I.isWebGLCubeRenderTarget?34067:3553,Me=i.get(P).__webglTexture;t.bindTexture(ue,Me),R(ue,P,I.width,I.height),t.bindTexture(ue,null)}}function Ue(I){if(I.isWebGLMultisampleRenderTarget)if(u){const P=I.width,ce=I.height;let ue=16384;I.depthBuffer&&(ue|=256),I.stencilBuffer&&(ue|=1024);const Me=i.get(I);t.bindFramebuffer(36008,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Me.__webglFramebuffer),n.blitFramebuffer(0,0,P,ce,0,0,P,ce,ue,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,Me.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function Qe(I){return u&&I.isWebGLMultisampleRenderTarget?Math.min(m,I.samples):0}function ge(I){const P=l.render.frame;g.get(I)!==P&&(g.set(I,P),I.update())}let xe=!1,Se=!1;function ze(I,P){I&&I.isWebGLRenderTarget&&(xe===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),xe=!0),I=I.texture),G(I,P)}function Ae(I,P){I&&I.isWebGLCubeRenderTarget&&(Se===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),Se=!0),I=I.texture),ie(I,P)}this.allocateTextureUnit=z,this.resetTextureUnits=oe,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=V,this.setTextureCube=ie,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Ue,this.safeSetTexture2D=ze,this.safeSetTextureCube=Ae}function iI(n,e,t){const i=t.isWebGL2;function s(a){let l;if(a===Jp)return 5121;if(a===PL)return 32819;if(a===RL)return 32820;if(a===kL)return 33635;if(a===AL)return 5120;if(a===CL)return 5122;if(a===wu)return 5123;if(a===LL)return 5124;if(a===uu)return 5125;if(a===Ar)return 5126;if(a===_u)return i?5131:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(a===DL)return 6406;if(a===ss)return 6407;if(a===pi)return 6408;if(a===IL)return 6409;if(a===NL)return 6410;if(a===go)return 6402;if(a===nl)return 34041;if(a===FL)return 6403;if(a===zL)return 36244;if(a===BL)return 33319;if(a===OL)return 33320;if(a===VL)return 36248;if(a===UL)return 36249;if(a===Ny||a===Fy||a===zy||a===By)if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Ny)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Fy)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===zy)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===By)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Oy||a===Vy||a===Uy||a===Hy)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Oy)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Vy)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Uy)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Hy)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===HL)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if((a===Gy||a===Wy)&&(l=e.get("WEBGL_compressed_texture_etc"),l!==null)){if(a===Gy)return l.COMPRESSED_RGB8_ETC2;if(a===Wy)return l.COMPRESSED_RGBA8_ETC2_EAC}if(a===GL||a===WL||a===jL||a===XL||a===YL||a===qL||a===$L||a===ZL||a===JL||a===KL||a===QL||a===e3||a===t3||a===n3||a===r3||a===s3||a===o3||a===a3||a===l3||a===c3||a===u3||a===d3||a===h3||a===f3||a===p3||a===m3||a===g3||a===v3)return l=e.get("WEBGL_compressed_texture_astc"),l!==null?a:null;if(a===i3)return l=e.get("EXT_texture_compression_bptc"),l!==null?a:null;if(a===Ya)return i?34042:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:s}}class g1 extends Cn{constructor(e=[]){super(),this.cameras=e}}g1.prototype.isArrayCamera=!0;class po extends dt{constructor(){super(),this.type="Group"}}po.prototype.isGroup=!0;const rI={type:"move"};class Ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,l=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(u!==null&&(s=t.getPose(e.targetRaySpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(rI))),h&&e.hand){l=!0;for(const S of e.hand.values()){const M=t.getJointPose(S,i);if(h.joints[S.jointName]===void 0){const w=new po;w.matrixAutoUpdate=!1,w.visible=!1,h.joints[S.jointName]=w,h.add(w)}const b=h.joints[S.jointName];M!==null&&(b.matrix.fromArray(M.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.jointRadius=M.radius),b.visible=M!==null}const p=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],g=p.position.distanceTo(m.position),y=.02,_=.005;h.inputState.pinching&&g>y+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=y-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),this}}class sI extends hs{constructor(e,t){super();const i=this,s=e.state;let a=null,l=1,u=null,d="local-floor",h=null;const p=[],m=new Map,g=new Cn;g.layers.enable(1),g.viewport=new mt;const y=new Cn;y.layers.enable(2),y.viewport=new mt;const _=[g,y],S=new g1;S.layers.enable(1),S.layers.enable(2);let M=null,b=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let z=p[oe];return z===void 0&&(z=new Ef,p[oe]=z),z.getTargetRaySpace()},this.getControllerGrip=function(oe){let z=p[oe];return z===void 0&&(z=new Ef,p[oe]=z),z.getGripSpace()},this.getHand=function(oe){let z=p[oe];return z===void 0&&(z=new Ef,p[oe]=z),z.getHandSpace()};function w(oe){const z=m.get(oe.inputSource);z&&z.dispatchEvent({type:oe.type,data:oe.inputSource})}function C(){m.forEach(function(oe,z){oe.disconnect(z)}),m.clear(),M=null,b=null,s.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),ae.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){d=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u},this.getSession=function(){return a},this.setSession=async function(oe){if(a=oe,a!==null){a.addEventListener("select",w),a.addEventListener("selectstart",w),a.addEventListener("selectend",w),a.addEventListener("squeeze",w),a.addEventListener("squeezestart",w),a.addEventListener("squeezeend",w),a.addEventListener("end",C),a.addEventListener("inputsourceschange",R);const z=t.getContextAttributes();z.xrCompatible!==!0&&await t.makeXRCompatible();const G={antialias:z.antialias,alpha:z.alpha,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:l},W=new XRWebGLLayer(a,t,G);a.updateRenderState({baseLayer:W}),u=await a.requestReferenceSpace(d),ae.setContext(a),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function R(oe){const z=a.inputSources;for(let G=0;G<p.length;G++)m.set(z[G],p[G]);for(let G=0;G<oe.removed.length;G++){const W=oe.removed[G],V=m.get(W);V&&(V.dispatchEvent({type:"disconnected",data:W}),m.delete(W))}for(let G=0;G<oe.added.length;G++){const W=oe.added[G],V=m.get(W);V&&V.dispatchEvent({type:"connected",data:W})}}const A=new N,T=new N;function B(oe,z,G){A.setFromMatrixPosition(z.matrixWorld),T.setFromMatrixPosition(G.matrixWorld);const W=A.distanceTo(T),V=z.projectionMatrix.elements,ie=G.projectionMatrix.elements,X=V[14]/(V[10]-1),ne=V[14]/(V[10]+1),re=(V[9]+1)/V[5],D=(V[9]-1)/V[5],J=(V[8]-1)/V[0],ve=(ie[8]+1)/ie[0],K=X*J,Ie=X*ve,Pe=W/(-J+ve),Ce=Pe*-J;z.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ce),oe.translateZ(Pe),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert();const be=X+Pe,Be=ne+Pe,Ue=K-Ce,Qe=Ie+(W-Ce),ge=re*ne/Be*be,xe=D*ne/Be*be;oe.projectionMatrix.makePerspective(Ue,Qe,ge,xe,be,Be)}function U(oe,z){z===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(z.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.getCamera=function(oe){S.near=y.near=g.near=oe.near,S.far=y.far=g.far=oe.far,(M!==S.near||b!==S.far)&&(a.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,b=S.far);const z=oe.parent,G=S.cameras;U(S,z);for(let V=0;V<G.length;V++)U(G[V],z);oe.matrixWorld.copy(S.matrixWorld),oe.matrix.copy(S.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale);const W=oe.children;for(let V=0,ie=W.length;V<ie;V++)W[V].updateMatrixWorld(!0);return G.length===2?B(S,g,y):S.projectionMatrix.copy(g.projectionMatrix),S};let q=null;function ee(oe,z){if(h=z.getViewerPose(u),h!==null){const W=h.views,V=a.renderState.baseLayer;s.bindXRFramebuffer(V.framebuffer);let ie=!1;W.length!==S.cameras.length&&(S.cameras.length=0,ie=!0);for(let X=0;X<W.length;X++){const ne=W[X],re=V.getViewport(ne),D=_[X];D.matrix.fromArray(ne.transform.matrix),D.projectionMatrix.fromArray(ne.projectionMatrix),D.viewport.set(re.x,re.y,re.width,re.height),X===0&&S.matrix.copy(D.matrix),ie===!0&&S.cameras.push(D)}}const G=a.inputSources;for(let W=0;W<p.length;W++){const V=p[W],ie=G[W];V.update(ie,z,u)}q&&q(oe,z)}const ae=new i1;ae.setAnimationLoop(ee),this.setAnimationLoop=function(oe){q=oe},this.dispose=function(){}}}function oI(n){function e(b,w){b.fogColor.value.copy(w.color),w.isFog?(b.fogNear.value=w.near,b.fogFar.value=w.far):w.isFogExp2&&(b.fogDensity.value=w.density)}function t(b,w,C,R){w.isMeshBasicMaterial?i(b,w):w.isMeshLambertMaterial?(i(b,w),d(b,w)):w.isMeshToonMaterial?(i(b,w),p(b,w)):w.isMeshPhongMaterial?(i(b,w),h(b,w)):w.isMeshStandardMaterial?(i(b,w),w.isMeshPhysicalMaterial?g(b,w):m(b,w)):w.isMeshMatcapMaterial?(i(b,w),y(b,w)):w.isMeshDepthMaterial?(i(b,w),_(b,w)):w.isMeshDistanceMaterial?(i(b,w),S(b,w)):w.isMeshNormalMaterial?(i(b,w),M(b,w)):w.isLineBasicMaterial?(s(b,w),w.isLineDashedMaterial&&a(b,w)):w.isPointsMaterial?l(b,w,C,R):w.isSpriteMaterial?u(b,w):w.isShadowMaterial?(b.color.value.copy(w.color),b.opacity.value=w.opacity):w.isShaderMaterial&&(w.uniformsNeedUpdate=!1)}function i(b,w){b.opacity.value=w.opacity,w.color&&b.diffuse.value.copy(w.color),w.emissive&&b.emissive.value.copy(w.emissive).multiplyScalar(w.emissiveIntensity),w.map&&(b.map.value=w.map),w.alphaMap&&(b.alphaMap.value=w.alphaMap),w.specularMap&&(b.specularMap.value=w.specularMap);const C=n.get(w).envMap;if(C){b.envMap.value=C,b.flipEnvMap.value=C.isCubeTexture&&C._needsFlipEnvMap?-1:1,b.reflectivity.value=w.reflectivity,b.refractionRatio.value=w.refractionRatio;const T=n.get(C).__maxMipLevel;T!==void 0&&(b.maxMipLevel.value=T)}w.lightMap&&(b.lightMap.value=w.lightMap,b.lightMapIntensity.value=w.lightMapIntensity),w.aoMap&&(b.aoMap.value=w.aoMap,b.aoMapIntensity.value=w.aoMapIntensity);let R;w.map?R=w.map:w.specularMap?R=w.specularMap:w.displacementMap?R=w.displacementMap:w.normalMap?R=w.normalMap:w.bumpMap?R=w.bumpMap:w.roughnessMap?R=w.roughnessMap:w.metalnessMap?R=w.metalnessMap:w.alphaMap?R=w.alphaMap:w.emissiveMap?R=w.emissiveMap:w.clearcoatMap?R=w.clearcoatMap:w.clearcoatNormalMap?R=w.clearcoatNormalMap:w.clearcoatRoughnessMap&&(R=w.clearcoatRoughnessMap),R!==void 0&&(R.isWebGLRenderTarget&&(R=R.texture),R.matrixAutoUpdate===!0&&R.updateMatrix(),b.uvTransform.value.copy(R.matrix));let A;w.aoMap?A=w.aoMap:w.lightMap&&(A=w.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),b.uv2Transform.value.copy(A.matrix))}function s(b,w){b.diffuse.value.copy(w.color),b.opacity.value=w.opacity}function a(b,w){b.dashSize.value=w.dashSize,b.totalSize.value=w.dashSize+w.gapSize,b.scale.value=w.scale}function l(b,w,C,R){b.diffuse.value.copy(w.color),b.opacity.value=w.opacity,b.size.value=w.size*C,b.scale.value=R*.5,w.map&&(b.map.value=w.map),w.alphaMap&&(b.alphaMap.value=w.alphaMap);let A;w.map?A=w.map:w.alphaMap&&(A=w.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),b.uvTransform.value.copy(A.matrix))}function u(b,w){b.diffuse.value.copy(w.color),b.opacity.value=w.opacity,b.rotation.value=w.rotation,w.map&&(b.map.value=w.map),w.alphaMap&&(b.alphaMap.value=w.alphaMap);let C;w.map?C=w.map:w.alphaMap&&(C=w.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),b.uvTransform.value.copy(C.matrix))}function d(b,w){w.emissiveMap&&(b.emissiveMap.value=w.emissiveMap)}function h(b,w){b.specular.value.copy(w.specular),b.shininess.value=Math.max(w.shininess,1e-4),w.emissiveMap&&(b.emissiveMap.value=w.emissiveMap),w.bumpMap&&(b.bumpMap.value=w.bumpMap,b.bumpScale.value=w.bumpScale,w.side===Jt&&(b.bumpScale.value*=-1)),w.normalMap&&(b.normalMap.value=w.normalMap,b.normalScale.value.copy(w.normalScale),w.side===Jt&&b.normalScale.value.negate()),w.displacementMap&&(b.displacementMap.value=w.displacementMap,b.displacementScale.value=w.displacementScale,b.displacementBias.value=w.displacementBias)}function p(b,w){w.gradientMap&&(b.gradientMap.value=w.gradientMap),w.emissiveMap&&(b.emissiveMap.value=w.emissiveMap),w.bumpMap&&(b.bumpMap.value=w.bumpMap,b.bumpScale.value=w.bumpScale,w.side===Jt&&(b.bumpScale.value*=-1)),w.normalMap&&(b.normalMap.value=w.normalMap,b.normalScale.value.copy(w.normalScale),w.side===Jt&&b.normalScale.value.negate()),w.displacementMap&&(b.displacementMap.value=w.displacementMap,b.displacementScale.value=w.displacementScale,b.displacementBias.value=w.displacementBias)}function m(b,w){b.roughness.value=w.roughness,b.metalness.value=w.metalness,w.roughnessMap&&(b.roughnessMap.value=w.roughnessMap),w.metalnessMap&&(b.metalnessMap.value=w.metalnessMap),w.emissiveMap&&(b.emissiveMap.value=w.emissiveMap),w.bumpMap&&(b.bumpMap.value=w.bumpMap,b.bumpScale.value=w.bumpScale,w.side===Jt&&(b.bumpScale.value*=-1)),w.normalMap&&(b.normalMap.value=w.normalMap,b.normalScale.value.copy(w.normalScale),w.side===Jt&&b.normalScale.value.negate()),w.displacementMap&&(b.displacementMap.value=w.displacementMap,b.displacementScale.value=w.displacementScale,b.displacementBias.value=w.displacementBias),n.get(w).envMap&&(b.envMapIntensity.value=w.envMapIntensity)}function g(b,w){m(b,w),b.reflectivity.value=w.reflectivity,b.clearcoat.value=w.clearcoat,b.clearcoatRoughness.value=w.clearcoatRoughness,w.sheen&&b.sheen.value.copy(w.sheen),w.clearcoatMap&&(b.clearcoatMap.value=w.clearcoatMap),w.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=w.clearcoatRoughnessMap),w.clearcoatNormalMap&&(b.clearcoatNormalScale.value.copy(w.clearcoatNormalScale),b.clearcoatNormalMap.value=w.clearcoatNormalMap,w.side===Jt&&b.clearcoatNormalScale.value.negate()),b.transmission.value=w.transmission,w.transmissionMap&&(b.transmissionMap.value=w.transmissionMap)}function y(b,w){w.matcap&&(b.matcap.value=w.matcap),w.bumpMap&&(b.bumpMap.value=w.bumpMap,b.bumpScale.value=w.bumpScale,w.side===Jt&&(b.bumpScale.value*=-1)),w.normalMap&&(b.normalMap.value=w.normalMap,b.normalScale.value.copy(w.normalScale),w.side===Jt&&b.normalScale.value.negate()),w.displacementMap&&(b.displacementMap.value=w.displacementMap,b.displacementScale.value=w.displacementScale,b.displacementBias.value=w.displacementBias)}function _(b,w){w.displacementMap&&(b.displacementMap.value=w.displacementMap,b.displacementScale.value=w.displacementScale,b.displacementBias.value=w.displacementBias)}function S(b,w){w.displacementMap&&(b.displacementMap.value=w.displacementMap,b.displacementScale.value=w.displacementScale,b.displacementBias.value=w.displacementBias),b.referencePosition.value.copy(w.referencePosition),b.nearDistance.value=w.nearDistance,b.farDistance.value=w.farDistance}function M(b,w){w.bumpMap&&(b.bumpMap.value=w.bumpMap,b.bumpScale.value=w.bumpScale,w.side===Jt&&(b.bumpScale.value*=-1)),w.normalMap&&(b.normalMap.value=w.normalMap,b.normalScale.value.copy(w.normalScale),w.side===Jt&&b.normalScale.value.negate()),w.displacementMap&&(b.displacementMap.value=w.displacementMap,b.displacementScale.value=w.displacementScale,b.displacementBias.value=w.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function aI(){const n=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");return n.style.display="block",n}function gt(n){n=n||{};const e=n.canvas!==void 0?n.canvas:aI(),t=n.context!==void 0?n.context:null,i=n.alpha!==void 0?n.alpha:!1,s=n.depth!==void 0?n.depth:!0,a=n.stencil!==void 0?n.stencil:!0,l=n.antialias!==void 0?n.antialias:!1,u=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,d=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,h=n.powerPreference!==void 0?n.powerPreference:"default",p=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let m=null,g=null;const y=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=gl,this.physicallyCorrectLights=!1,this.toneMapping=Xa,this.toneMappingExposure=1;const S=this;let M=!1,b=0,w=0,C=null,R=-1,A=null;const T=new mt,B=new mt;let U=null,q=e.width,ee=e.height,ae=1,oe=null,z=null;const G=new mt(0,0,q,ee),W=new mt(0,0,q,ee);let V=!1;const ie=new Hu;let X=!1,ne=!1;const re=new Xe,D=new N,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return C===null?ae:1}let K=t;function Ie(L,se){for(let Z=0;Z<L.length;Z++){const le=L[Z],Ee=e.getContext(le,se);if(Ee!==null)return Ee}return null}try{const L={alpha:i,depth:s,stencil:a,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:h,failIfMajorPerformanceCaveat:p};if(e.addEventListener("webglcontextlost",We,!1),e.addEventListener("webglcontextrestored",st,!1),K===null){const se=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&se.shift(),K=Ie(se,L),K===null)throw Ie(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}K.getShaderPrecisionFormat===void 0&&(K.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Pe,Ce,be,Be,Ue,Qe,ge,xe,Se,ze,Ae,I,P,ce,ue,Me,Ne,rt,qe,H,ye,_e;function Oe(){Pe=new Lk(K),Ce=new Tk(K,Pe,n),Pe.init(Ce),ye=new iI(K,Pe,Ce),be=new tI(K,Pe,Ce),Be=new kk,Ue=new GD,Qe=new nI(K,Pe,be,Ue,Ce,ye,Be),ge=new Ck(S),xe=new eP(K,Ce),_e=new Mk(K,Pe,xe,Ce),Se=new Pk(K,xe,Be,_e),ze=new Fk(K,Se,xe,Be),rt=new Nk(K),ue=new Ak(Ue),Ae=new HD(S,ge,Pe,Ce,_e,ue),I=new oI(Ue),P=new XD(Ue),ce=new KD(Pe,Ce),Ne=new Sk(S,ge,be,ze,u),Me=new m1(S,ze,Ce),qe=new Ek(K,Pe,Be,Ce),H=new Rk(K,Pe,Be,Ce),Be.programs=Ae.programs,S.capabilities=Ce,S.extensions=Pe,S.properties=Ue,S.renderLists=P,S.shadowMap=Me,S.state=be,S.info=Be}Oe();const he=new sI(S,K);this.xr=he,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const L=Pe.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Pe.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(L){L!==void 0&&(ae=L,this.setSize(q,ee,!1))},this.getSize=function(L){return L===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),L=new we),L.set(q,ee)},this.setSize=function(L,se,Z){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=L,ee=se,e.width=Math.floor(L*ae),e.height=Math.floor(se*ae),Z!==!1&&(e.style.width=L+"px",e.style.height=se+"px"),this.setViewport(0,0,L,se)},this.getDrawingBufferSize=function(L){return L===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),L=new we),L.set(q*ae,ee*ae).floor()},this.setDrawingBufferSize=function(L,se,Z){q=L,ee=se,ae=Z,e.width=Math.floor(L*Z),e.height=Math.floor(se*Z),this.setViewport(0,0,L,se)},this.getCurrentViewport=function(L){return L===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),L=new mt),L.copy(T)},this.getViewport=function(L){return L.copy(G)},this.setViewport=function(L,se,Z,le){L.isVector4?G.set(L.x,L.y,L.z,L.w):G.set(L,se,Z,le),be.viewport(T.copy(G).multiplyScalar(ae).floor())},this.getScissor=function(L){return L.copy(W)},this.setScissor=function(L,se,Z,le){L.isVector4?W.set(L.x,L.y,L.z,L.w):W.set(L,se,Z,le),be.scissor(B.copy(W).multiplyScalar(ae).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(L){be.setScissorTest(V=L)},this.setOpaqueSort=function(L){oe=L},this.setTransparentSort=function(L){z=L},this.getClearColor=function(L){return L===void 0&&(console.warn("WebGLRenderer: .getClearColor() now requires a Color as an argument"),L=new Ve),L.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(L,se,Z){let le=0;(L===void 0||L)&&(le|=16384),(se===void 0||se)&&(le|=256),(Z===void 0||Z)&&(le|=1024),K.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",We,!1),e.removeEventListener("webglcontextrestored",st,!1),P.dispose(),ce.dispose(),Ue.dispose(),ge.dispose(),ze.dispose(),_e.dispose(),he.dispose(),he.removeEventListener("sessionstart",ps),he.removeEventListener("sessionend",ms),Qn.stop()};function We(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function st(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const L=Be.autoReset,se=Me.enabled,Z=Me.autoUpdate,le=Me.needsUpdate,Ee=Me.type;Oe(),Be.autoReset=L,Me.enabled=se,Me.autoUpdate=Z,Me.needsUpdate=le,Me.type=Ee}function Rt(L){const se=L.target;se.removeEventListener("dispose",Rt),gi(se)}function gi(L){_t(L),Ue.remove(L)}function _t(L){const se=Ue.get(L).programs;se!==void 0&&se.forEach(function(Z){Ae.releaseProgram(Z)})}function Kn(L,se){L.render(function(Z){S.renderBufferImmediate(Z,se)})}this.renderBufferImmediate=function(L,se){_e.initAttributes();const Z=Ue.get(L);L.hasPositions&&!Z.position&&(Z.position=K.createBuffer()),L.hasNormals&&!Z.normal&&(Z.normal=K.createBuffer()),L.hasUvs&&!Z.uv&&(Z.uv=K.createBuffer()),L.hasColors&&!Z.color&&(Z.color=K.createBuffer());const le=se.getAttributes();L.hasPositions&&(K.bindBuffer(34962,Z.position),K.bufferData(34962,L.positionArray,35048),_e.enableAttribute(le.position),K.vertexAttribPointer(le.position,3,5126,!1,0,0)),L.hasNormals&&(K.bindBuffer(34962,Z.normal),K.bufferData(34962,L.normalArray,35048),_e.enableAttribute(le.normal),K.vertexAttribPointer(le.normal,3,5126,!1,0,0)),L.hasUvs&&(K.bindBuffer(34962,Z.uv),K.bufferData(34962,L.uvArray,35048),_e.enableAttribute(le.uv),K.vertexAttribPointer(le.uv,2,5126,!1,0,0)),L.hasColors&&(K.bindBuffer(34962,Z.color),K.bufferData(34962,L.colorArray,35048),_e.enableAttribute(le.color),K.vertexAttribPointer(le.color,3,5126,!1,0,0)),_e.disableUnusedAttributes(),K.drawArrays(4,0,L.count),L.count=0},this.renderBufferDirect=function(L,se,Z,le,Ee,et){se===null&&(se=J);const Ye=Ee.isMesh&&Ee.matrixWorld.determinant()<0,$e=Bo(L,se,le,Ee);be.setMaterial(le,Ye);let ut=Z.index;const Ke=Z.attributes.position;if(ut===null){if(Ke===void 0||Ke.count===0)return}else if(ut.count===0)return;let ot=1;le.wireframe===!0&&(ut=Se.getWireframeAttribute(Z),ot=2),(le.morphTargets||le.morphNormals)&&rt.update(Ee,Z,le,$e),_e.setup(Ee,le,$e,Z,ut);let Je,nt=qe;ut!==null&&(Je=xe.get(ut),nt=H,nt.setIndex(Je));const Ln=ut!==null?ut.count:Ke.count,Xt=Z.drawRange.start*ot,Fi=Z.drawRange.count*ot,kt=et!==null?et.start*ot:0,vi=et!==null?et.count*ot:1/0,Et=Math.max(Xt,kt),vs=Math.min(Ln,Xt+Fi,kt+vi)-1,on=Math.max(0,vs-Et+1);if(on!==0){if(Ee.isMesh)le.wireframe===!0?(be.setLineWidth(le.wireframeLinewidth*ve()),nt.setMode(1)):nt.setMode(4);else if(Ee.isLine){let ei=le.linewidth;ei===void 0&&(ei=1),be.setLineWidth(ei*ve()),Ee.isLineSegments?nt.setMode(1):Ee.isLineLoop?nt.setMode(2):nt.setMode(3)}else Ee.isPoints?nt.setMode(0):Ee.isSprite&&nt.setMode(4);if(Ee.isInstancedMesh)nt.renderInstances(Et,on,Ee.count);else if(Z.isInstancedBufferGeometry){const ei=Math.min(Z.instanceCount,Z._maxInstanceCount);nt.renderInstances(Et,on,ei)}else nt.render(Et,on)}},this.compile=function(L,se){g=ce.get(L),g.init(),L.traverseVisible(function(Z){Z.isLight&&Z.layers.test(se.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights(),L.traverse(function(Z){const le=Z.material;if(le)if(Array.isArray(le))for(let Ee=0;Ee<le.length;Ee++){const et=le[Ee];gs(et,L,Z)}else gs(le,L,Z)})};let pn=null;function No(L){pn&&pn(L)}function ps(){Qn.stop()}function ms(){Qn.start()}const Qn=new i1;Qn.setAnimationLoop(No),typeof window<"u"&&Qn.setContext(window),this.setAnimationLoop=function(L){pn=L,he.setAnimationLoop(L),L===null?Qn.stop():Qn.start()},he.addEventListener("sessionstart",ps),he.addEventListener("sessionend",ms),this.render=function(L,se){let Z,le;if(arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),Z=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),le=arguments[3]),se!==void 0&&se.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;L.autoUpdate===!0&&L.updateMatrixWorld(),se.parent===null&&se.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(se=he.getCamera(se)),L.isScene===!0&&L.onBeforeRender(S,L,se,Z||C),g=ce.get(L,_.length),g.init(),_.push(g),re.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),ie.setFromProjectionMatrix(re),ne=this.localClippingEnabled,X=ue.init(this.clippingPlanes,ne,se),m=P.get(L,y.length),m.init(),y.push(m),Ii(L,se,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(oe,z),X===!0&&ue.beginShadows();const Ee=g.state.shadowsArray;Me.render(Ee,L,se),g.setupLights(),g.setupLightsView(se),X===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z!==void 0&&this.setRenderTarget(Z),Ne.render(m,L,se,le);const et=m.opaque,Ye=m.transparent;et.length>0&&Ni(et,L,se),Ye.length>0&&Ni(Ye,L,se),C!==null&&(Qe.updateRenderTargetMipmap(C),Qe.updateMultisampleRenderTarget(C)),L.isScene===!0&&L.onAfterRender(S,L,se),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1),_e.resetDefaultState(),R=-1,A=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ii(L,se,Z,le){if(L.visible===!1)return;if(L.layers.test(se.layers)){if(L.isGroup)Z=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(se);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ie.intersectsSprite(L)){le&&D.setFromMatrixPosition(L.matrixWorld).applyMatrix4(re);const Ye=ze.update(L),$e=L.material;$e.visible&&m.push(L,Ye,$e,Z,D.z,null)}}else if(L.isImmediateRenderObject)le&&D.setFromMatrixPosition(L.matrixWorld).applyMatrix4(re),m.push(L,null,L.material,Z,D.z,null);else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==Be.render.frame&&(L.skeleton.update(),L.skeleton.frame=Be.render.frame),!L.frustumCulled||ie.intersectsObject(L))){le&&D.setFromMatrixPosition(L.matrixWorld).applyMatrix4(re);const Ye=ze.update(L),$e=L.material;if(Array.isArray($e)){const ut=Ye.groups;for(let Ke=0,ot=ut.length;Ke<ot;Ke++){const Je=ut[Ke],nt=$e[Je.materialIndex];nt&&nt.visible&&m.push(L,Ye,nt,Z,D.z,Je)}}else $e.visible&&m.push(L,Ye,$e,Z,D.z,null)}}const et=L.children;for(let Ye=0,$e=et.length;Ye<$e;Ye++)Ii(et[Ye],se,Z,le)}function Ni(L,se,Z){const le=se.isScene===!0?se.overrideMaterial:null;for(let Ee=0,et=L.length;Ee<et;Ee++){const Ye=L[Ee],$e=Ye.object,ut=Ye.geometry,Ke=le===null?Ye.material:le,ot=Ye.group;if(Z.isArrayCamera){const Je=Z.cameras;for(let nt=0,Ln=Je.length;nt<Ln;nt++){const Xt=Je[nt];$e.layers.test(Xt.layers)&&(be.viewport(T.copy(Xt.viewport)),g.setupLightsView(Xt),Fo($e,se,Xt,ut,Ke,ot))}}else Fo($e,se,Z,ut,Ke,ot)}}function Fo(L,se,Z,le,Ee,et){if(L.onBeforeRender(S,se,Z,le,Ee,et),L.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),L.isImmediateRenderObject){const Ye=Bo(Z,se,Ee,L);be.setMaterial(Ee),_e.reset(),Kn(L,Ye)}else S.renderBufferDirect(Z,se,le,Ee,L,et);L.onAfterRender(S,se,Z,le,Ee,et)}function gs(L,se,Z){se.isScene!==!0&&(se=J);const le=Ue.get(L),Ee=g.state.lights,et=g.state.shadowsArray,Ye=Ee.state.version,$e=Ae.getParameters(L,Ee.state,et,se,Z),ut=Ae.getProgramCacheKey($e);let Ke=le.programs;le.environment=L.isMeshStandardMaterial?se.environment:null,le.fog=se.fog,le.envMap=ge.get(L.envMap||le.environment),Ke===void 0&&(L.addEventListener("dispose",Rt),Ke=new Map,le.programs=Ke);let ot=Ke.get(ut);if(ot!==void 0){if(le.currentProgram===ot&&le.lightsStateVersion===Ye)return zo(L,$e),ot}else $e.uniforms=Ae.getUniforms(L),L.onBuild($e,S),L.onBeforeCompile($e,S),ot=Ae.acquireProgram($e,ut),Ke.set(ut,ot),le.uniforms=$e.uniforms;const Je=le.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Je.clippingPlanes=ue.uniform),zo(L,$e),le.needsLights=Oo(L),le.lightsStateVersion=Ye,le.needsLights&&(Je.ambientLightColor.value=Ee.state.ambient,Je.lightProbe.value=Ee.state.probe,Je.directionalLights.value=Ee.state.directional,Je.directionalLightShadows.value=Ee.state.directionalShadow,Je.spotLights.value=Ee.state.spot,Je.spotLightShadows.value=Ee.state.spotShadow,Je.rectAreaLights.value=Ee.state.rectArea,Je.ltc_1.value=Ee.state.rectAreaLTC1,Je.ltc_2.value=Ee.state.rectAreaLTC2,Je.pointLights.value=Ee.state.point,Je.pointLightShadows.value=Ee.state.pointShadow,Je.hemisphereLights.value=Ee.state.hemi,Je.directionalShadowMap.value=Ee.state.directionalShadowMap,Je.directionalShadowMatrix.value=Ee.state.directionalShadowMatrix,Je.spotShadowMap.value=Ee.state.spotShadowMap,Je.spotShadowMatrix.value=Ee.state.spotShadowMatrix,Je.pointShadowMap.value=Ee.state.pointShadowMap,Je.pointShadowMatrix.value=Ee.state.pointShadowMatrix);const nt=ot.getUniforms(),Ln=Pr.seqWithValue(nt.seq,Je);return le.currentProgram=ot,le.uniformsList=Ln,ot}function zo(L,se){const Z=Ue.get(L);Z.outputEncoding=se.outputEncoding,Z.instancing=se.instancing,Z.numClippingPlanes=se.numClippingPlanes,Z.numIntersection=se.numClipIntersection,Z.vertexAlphas=se.vertexAlphas}function Bo(L,se,Z,le){se.isScene!==!0&&(se=J),Qe.resetTextureUnits();const Ee=se.fog,et=Z.isMeshStandardMaterial?se.environment:null,Ye=C===null?S.outputEncoding:C.texture.encoding,$e=ge.get(Z.envMap||et),ut=Z.vertexColors===!0&&le.geometry&&le.geometry.attributes.color&&le.geometry.attributes.color.itemSize===4,Ke=Ue.get(Z),ot=g.state.lights;if(X===!0&&(ne===!0||L!==A)){const Et=L===A&&Z.id===R;ue.setState(Z,L,Et)}let Je=!1;Z.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==ot.state.version||Ke.outputEncoding!==Ye||le.isInstancedMesh&&Ke.instancing===!1||!le.isInstancedMesh&&Ke.instancing===!0||Ke.envMap!==$e||Z.fog&&Ke.fog!==Ee||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ue.numPlanes||Ke.numIntersection!==ue.numIntersection)||Ke.vertexAlphas!==ut)&&(Je=!0):(Je=!0,Ke.__version=Z.version);let nt=Ke.currentProgram;Je===!0&&(nt=gs(Z,se,le));let Ln=!1,Xt=!1,Fi=!1;const kt=nt.getUniforms(),vi=Ke.uniforms;if(be.useProgram(nt.program)&&(Ln=!0,Xt=!0,Fi=!0),Z.id!==R&&(R=Z.id,Xt=!0),Ln||A!==L){if(kt.setValue(K,"projectionMatrix",L.projectionMatrix),Ce.logarithmicDepthBuffer&&kt.setValue(K,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),A!==L&&(A=L,Xt=!0,Fi=!0),Z.isShaderMaterial||Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshStandardMaterial||Z.envMap){const Et=kt.map.cameraPosition;Et!==void 0&&Et.setValue(K,D.setFromMatrixPosition(L.matrixWorld))}(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&kt.setValue(K,"isOrthographic",L.isOrthographicCamera===!0),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial||Z.isShadowMaterial||Z.skinning)&&kt.setValue(K,"viewMatrix",L.matrixWorldInverse)}if(Z.skinning){kt.setOptional(K,le,"bindMatrix"),kt.setOptional(K,le,"bindMatrixInverse");const Et=le.skeleton;if(Et){const vs=Et.bones;if(Ce.floatVertexTextures){if(Et.boneTexture===null){let on=Math.sqrt(vs.length*4);on=D3(on),on=Math.max(on,4);const ei=new Float32Array(on*on*4);ei.set(Et.boneMatrices);const Tt=new n1(ei,on,on,pi,Ar);Et.boneMatrices=ei,Et.boneTexture=Tt,Et.boneTextureSize=on}kt.setValue(K,"boneTexture",Et.boneTexture,Qe),kt.setValue(K,"boneTextureSize",Et.boneTextureSize)}else kt.setOptional(K,Et,"boneMatrices")}}return(Xt||Ke.receiveShadow!==le.receiveShadow)&&(Ke.receiveShadow=le.receiveShadow,kt.setValue(K,"receiveShadow",le.receiveShadow)),Xt&&(kt.setValue(K,"toneMappingExposure",S.toneMappingExposure),Ke.needsLights&&yl(vi,Fi),Ee&&Z.fog&&I.refreshFogUniforms(vi,Ee),I.refreshMaterialUniforms(vi,Z,ae,ee),Pr.upload(K,Ke.uniformsList,vi,Qe)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Pr.upload(K,Ke.uniformsList,vi,Qe),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&kt.setValue(K,"center",le.center),kt.setValue(K,"modelViewMatrix",le.modelViewMatrix),kt.setValue(K,"normalMatrix",le.normalMatrix),kt.setValue(K,"modelMatrix",le.matrixWorld),nt}function yl(L,se){L.ambientLightColor.needsUpdate=se,L.lightProbe.needsUpdate=se,L.directionalLights.needsUpdate=se,L.directionalLightShadows.needsUpdate=se,L.pointLights.needsUpdate=se,L.pointLightShadows.needsUpdate=se,L.spotLights.needsUpdate=se,L.spotLightShadows.needsUpdate=se,L.rectAreaLights.needsUpdate=se,L.hemisphereLights.needsUpdate=se}function Oo(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTarget=function(L,se=0,Z=0){C=L,b=se,w=Z,L&&Ue.get(L).__webglFramebuffer===void 0&&Qe.setupRenderTarget(L);let le=null,Ee=!1,et=!1;if(L){const Ye=L.texture;(Ye.isDataTexture3D||Ye.isDataTexture2DArray)&&(et=!0);const $e=Ue.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(le=$e[se],Ee=!0):L.isWebGLMultisampleRenderTarget?le=Ue.get(L).__webglMultisampledFramebuffer:le=$e,T.copy(L.viewport),B.copy(L.scissor),U=L.scissorTest}else T.copy(G).multiplyScalar(ae).floor(),B.copy(W).multiplyScalar(ae).floor(),U=V;if(be.bindFramebuffer(36160,le),be.viewport(T),be.scissor(B),be.setScissorTest(U),Ee){const Ye=Ue.get(L.texture);K.framebufferTexture2D(36160,36064,34069+se,Ye.__webglTexture,Z)}else if(et){const Ye=Ue.get(L.texture),$e=se||0;K.framebufferTextureLayer(36160,36064,Ye.__webglTexture,Z||0,$e)}},this.readRenderTargetPixels=function(L,se,Z,le,Ee,et,Ye){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=Ue.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ye!==void 0&&($e=$e[Ye]),$e){be.bindFramebuffer(36160,$e);try{const ut=L.texture,Ke=ut.format,ot=ut.type;if(Ke!==pi&&ye.convert(Ke)!==K.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Je=ot===_u&&(Pe.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(ot!==Jp&&ye.convert(ot)!==K.getParameter(35738)&&!(ot===Ar&&(Ce.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K.checkFramebufferStatus(36160)===36053?se>=0&&se<=L.width-le&&Z>=0&&Z<=L.height-Ee&&K.readPixels(se,Z,le,Ee,ye.convert(Ke),ye.convert(ot),et):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const ut=C!==null?Ue.get(C).__webglFramebuffer:null;be.bindFramebuffer(36160,ut)}}},this.copyFramebufferToTexture=function(L,se,Z=0){const le=Math.pow(2,-Z),Ee=Math.floor(se.image.width*le),et=Math.floor(se.image.height*le),Ye=ye.convert(se.format);Qe.setTexture2D(se,0),K.copyTexImage2D(3553,Z,Ye,L.x,L.y,Ee,et,0),be.unbindTexture()},this.copyTextureToTexture=function(L,se,Z,le=0){const Ee=se.image.width,et=se.image.height,Ye=ye.convert(Z.format),$e=ye.convert(Z.type);Qe.setTexture2D(Z,0),K.pixelStorei(37440,Z.flipY),K.pixelStorei(37441,Z.premultiplyAlpha),K.pixelStorei(3317,Z.unpackAlignment),se.isDataTexture?K.texSubImage2D(3553,le,L.x,L.y,Ee,et,Ye,$e,se.image.data):se.isCompressedTexture?K.compressedTexSubImage2D(3553,le,L.x,L.y,se.mipmaps[0].width,se.mipmaps[0].height,Ye,se.mipmaps[0].data):K.texSubImage2D(3553,le,L.x,L.y,Ye,$e,se.image),le===0&&Z.generateMipmaps&&K.generateMipmap(3553),be.unbindTexture()},this.copyTextureToTexture3D=function(L,se,Z,le,Ee=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const{width:et,height:Ye,data:$e}=Z.image,ut=ye.convert(le.format),Ke=ye.convert(le.type);let ot;if(le.isDataTexture3D)Qe.setTexture3D(le,0),ot=32879;else if(le.isDataTexture2DArray)Qe.setTexture2DArray(le,0),ot=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(37440,le.flipY),K.pixelStorei(37441,le.premultiplyAlpha),K.pixelStorei(3317,le.unpackAlignment);const Je=K.getParameter(3314),nt=K.getParameter(32878),Ln=K.getParameter(3316),Xt=K.getParameter(3315),Fi=K.getParameter(32877);K.pixelStorei(3314,et),K.pixelStorei(32878,Ye),K.pixelStorei(3316,L.min.x),K.pixelStorei(3315,L.min.y),K.pixelStorei(32877,L.min.z),K.texSubImage3D(ot,Ee,se.x,se.y,se.z,L.max.x-L.min.x+1,L.max.y-L.min.y+1,L.max.z-L.min.z+1,ut,Ke,$e),K.pixelStorei(3314,Je),K.pixelStorei(32878,nt),K.pixelStorei(3316,Ln),K.pixelStorei(3315,Xt),K.pixelStorei(32877,Fi),Ee===0&&le.generateMipmaps&&K.generateMipmap(ot),be.unbindTexture()},this.initTexture=function(L){Qe.setTexture2D(L,0),be.unbindTexture()},this.resetState=function(){b=0,w=0,C=null,be.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class lI extends gt{}lI.prototype.isWebGL1Renderer=!0;class nm extends dt{constructor(){super(),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.background!==null&&(t.object.background=this.background.toJSON(e)),this.environment!==null&&(t.object.environment=this.environment.toJSON(e)),this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}nm.prototype.isScene=!0;class fs{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=il,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Pi(),this.onUploadCallback=function(){}}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new fs(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}fs.prototype.isInterleavedBuffer=!0;const Bt=new N;class sl{constructor(e,t,i,s){this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Bt.x=this.getX(t),Bt.y=this.getY(t),Bt.z=this.getZ(t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.x=this.getX(t),Bt.y=this.getY(t),Bt.z=this.getZ(t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.x=this.getX(t),Bt.y=this.getY(t),Bt.z=this.getZ(t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new sl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}sl.prototype.isInterleavedBufferAttribute=!0;class v1 extends Qt{constructor(e){super(),this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}v1.prototype.isSpriteMaterial=!0;let Qs;const Aa=new N,eo=new N,to=new N,no=new we,Ca=new we,y1=new Xe,Xc=new N,La=new N,Yc=new N,yx=new we,Tf=new we,xx=new we;class cI extends dt{constructor(e){if(super(),this.type="Sprite",Qs===void 0){Qs=new pt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fs(t,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new sl(i,3,0,!1)),Qs.setAttribute("uv",new sl(i,2,3,!1))}this.geometry=Qs,this.material=e!==void 0?e:new v1,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),eo.setFromMatrixScale(this.matrixWorld),y1.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),to.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&eo.multiplyScalar(-to.z);const i=this.material.rotation;let s,a;i!==0&&(a=Math.cos(i),s=Math.sin(i));const l=this.center;qc(Xc.set(-.5,-.5,0),to,l,eo,s,a),qc(La.set(.5,-.5,0),to,l,eo,s,a),qc(Yc.set(.5,.5,0),to,l,eo,s,a),yx.set(0,0),Tf.set(1,0),xx.set(1,1);let u=e.ray.intersectTriangle(Xc,La,Yc,!1,Aa);if(u===null&&(qc(La.set(-.5,.5,0),to,l,eo,s,a),Tf.set(0,1),u=e.ray.intersectTriangle(Xc,Yc,La,!1,Aa),u===null))return;const d=e.ray.origin.distanceTo(Aa);d<e.near||d>e.far||t.push({distance:d,point:Aa.clone(),uv:jt.getUV(Aa,Xc,La,Yc,yx,Tf,xx,new we),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}cI.prototype.isSprite=!0;function qc(n,e,t,i,s,a){no.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ca.x=a*no.x-s*no.y,Ca.y=s*no.x+a*no.y):Ca.copy(no),n.copy(e),n.x+=Ca.x,n.y+=Ca.y,n.applyMatrix4(y1)}const wx=new N,_x=new mt,bx=new mt,uI=new N,Sx=new Xe;class x1 extends Bn{constructor(e,t){super(e,t),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new mt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.x=t.getX(i),e.y=t.getY(i),e.z=t.getZ(i),e.w=t.getW(i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,s=this.geometry;_x.fromBufferAttribute(s.attributes.skinIndex,e),bx.fromBufferAttribute(s.attributes.skinWeight,e),wx.fromBufferAttribute(s.attributes.position,e).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const l=bx.getComponent(a);if(l!==0){const u=_x.getComponent(a);Sx.multiplyMatrices(i.bones[u].matrixWorld,i.boneInverses[u]),t.addScaledVector(uI.copy(wx).applyMatrix4(Sx),l)}}return t.applyMatrix4(this.bindMatrixInverse)}}x1.prototype.isSkinnedMesh=!0;class dI extends dt{constructor(){super(),this.type="Bone"}}dI.prototype.isBone=!0;const Mx=new Xe,Ex=new Xe,$c=[],Pa=new Bn;class hI extends Bn{constructor(e,t,i){super(e,t),this.instanceMatrix=new Ut(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0)for(let a=0;a<s;a++){this.getMatrixAt(a,Mx),Ex.multiplyMatrices(i,Mx),Pa.matrixWorld=Ex,Pa.raycast(e,$c);for(let l=0,u=$c.length;l<u;l++){const d=$c[l];d.instanceId=a,d.object=this,t.push(d)}$c.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ut(new Float32Array(this.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}hI.prototype.isInstancedMesh=!0;class ko extends Qt{constructor(e){super(),this.type="LineBasicMaterial",this.color=new Ve(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.morphTargets=e.morphTargets,this}}ko.prototype.isLineBasicMaterial=!0;const Tx=new N,Ax=new N,Cx=new Xe,Af=new Lo,Zc=new Co;class Gu extends dt{constructor(e=new pt,t=new ko){super(),this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Tx.fromBufferAttribute(t,s-1),Ax.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Tx.distanceTo(Ax);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zc.copy(i.boundingSphere),Zc.applyMatrix4(s),Zc.radius+=a,e.ray.intersectsSphere(Zc)===!1)return;Cx.copy(s).invert(),Af.copy(e.ray).applyMatrix4(Cx);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,h=new N,p=new N,m=new N,g=new N,y=this.isLineSegments?2:1;if(i.isBufferGeometry){const _=i.index,M=i.attributes.position;if(_!==null){const b=Math.max(0,l.start),w=Math.min(_.count,l.start+l.count);for(let C=b,R=w-1;C<R;C+=y){const A=_.getX(C),T=_.getX(C+1);if(h.fromBufferAttribute(M,A),p.fromBufferAttribute(M,T),Af.distanceSqToSegment(h,p,g,m)>d)continue;g.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(g);U<e.near||U>e.far||t.push({distance:U,point:m.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const b=Math.max(0,l.start),w=Math.min(M.count,l.start+l.count);for(let C=b,R=w-1;C<R;C+=y){if(h.fromBufferAttribute(M,C),p.fromBufferAttribute(M,C+1),Af.distanceSqToSegment(h,p,g,m)>d)continue;g.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(g);T<e.near||T>e.far||t.push({distance:T,point:m.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}else i.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Gu.prototype.isLine=!0;const Lx=new N,Px=new N;class im extends Gu{constructor(e,t){super(e,t),this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)Lx.fromBufferAttribute(t,s),Px.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Lx.distanceTo(Px);e.setAttribute("lineDistance",new Ft(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}im.prototype.isLineSegments=!0;class fI extends Gu{constructor(e,t){super(e,t),this.type="LineLoop"}}fI.prototype.isLineLoop=!0;class rm extends Qt{constructor(e){super(),this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.morphTargets=e.morphTargets,this}}rm.prototype.isPointsMaterial=!0;const Rx=new Xe,sp=new Lo,Jc=new Co,Kc=new N;class w1 extends dt{constructor(e=new pt,t=new rm){super(),this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jc.copy(i.boundingSphere),Jc.applyMatrix4(s),Jc.radius+=a,e.ray.intersectsSphere(Jc)===!1)return;Rx.copy(s).invert(),sp.copy(e.ray).applyMatrix4(Rx);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u;if(i.isBufferGeometry){const h=i.index,m=i.attributes.position;if(h!==null){const g=Math.max(0,l.start),y=Math.min(h.count,l.start+l.count);for(let _=g,S=y;_<S;_++){const M=h.getX(_);Kc.fromBufferAttribute(m,M),kx(Kc,M,d,s,e,t,this)}}else{const g=Math.max(0,l.start),y=Math.min(m.count,l.start+l.count);for(let _=g,S=y;_<S;_++)Kc.fromBufferAttribute(m,_),kx(Kc,_,d,s,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=s.length;a<l;a++){const u=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}w1.prototype.isPoints=!0;function kx(n,e,t,i,s,a,l){const u=sp.distanceSqToPoint(n);if(u<t){const d=new N;sp.closestPointToPoint(n,d),d.applyMatrix4(i);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(u),point:d,index:e,face:null,object:l})}}class pI extends sn{constructor(e,t,i,s,a,l,u,d,h){super(e,t,i,s,a,l,u,d,h),this.format=u!==void 0?u:ss,this.minFilter=l!==void 0?l:qn,this.magFilter=a!==void 0?a:qn,this.generateMipmaps=!1;const p=this;function m(){p.needsUpdate=!0,e.requestVideoFrameCallback(m)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(m)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}pI.prototype.isVideoTexture=!0;class mI extends sn{constructor(e,t,i,s,a,l,u,d,h,p,m,g){super(null,l,u,d,h,p,s,a,m,g),this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}mI.prototype.isCompressedTexture=!0;class gI extends sn{constructor(e,t,i,s,a,l,u,d,h){super(e,t,i,s,a,l,u,d,h),this.needsUpdate=!0}}gI.prototype.isCanvasTexture=!0;class vI extends sn{constructor(e,t,i,s,a,l,u,d,h,p){if(p=p!==void 0?p:go,p!==go&&p!==nl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===go&&(i=wu),i===void 0&&p===nl&&(i=Ya),super(null,s,a,l,u,d,p,i,h),this.image={width:e,height:t},this.magFilter=u!==void 0?u:vn,this.minFilter=d!==void 0?d:vn,this.flipY=!1,this.generateMipmaps=!1}}vI.prototype.isDepthTexture=!0;const yI={triangulate:function(n,e,t){t=t||2;const i=e&&e.length,s=i?e[0]*t:n.length;let a=_1(n,0,s,t,!0);const l=[];if(!a||a.next===a.prev)return l;let u,d,h,p,m,g,y;if(i&&(a=SI(n,e,a,t)),n.length>80*t){u=h=n[0],d=p=n[1];for(let _=t;_<s;_+=t)m=n[_],g=n[_+1],m<u&&(u=m),g<d&&(d=g),m>h&&(h=m),g>p&&(p=g);y=Math.max(h-u,p-d),y=y!==0?1/y:0}return ol(a,l,t,u,d,y),l}};function _1(n,e,t,i,s){let a,l;if(s===II(n,e,t,i)>0)for(a=e;a<t;a+=i)l=Dx(a,n[a],n[a+1],l);else for(a=t-i;a>=e;a-=i)l=Dx(a,n[a],n[a+1],l);return l&&Wu(l,l.next)&&(ll(l),l=l.next),l}function Dr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Wu(t,t.next)||Pt(t.prev,t,t.next)===0)){if(ll(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ol(n,e,t,i,s,a,l){if(!n)return;!l&&a&&CI(n,i,s,a);let u=n,d,h;for(;n.prev!==n.next;){if(d=n.prev,h=n.next,a?wI(n,i,s,a):xI(n)){e.push(d.i/t),e.push(n.i/t),e.push(h.i/t),ll(n),n=h.next,u=h.next;continue}if(n=h,n===u){l?l===1?(n=_I(Dr(n),e,t),ol(n,e,t,i,s,a,2)):l===2&&bI(n,e,t,i,s,a):ol(Dr(n),e,t,i,s,a,1);break}}}function xI(n){const e=n.prev,t=n,i=n.next;if(Pt(e,t,i)>=0)return!1;let s=n.next.next;for(;s!==n.prev;){if(mo(e.x,e.y,t.x,t.y,i.x,i.y,s.x,s.y)&&Pt(s.prev,s,s.next)>=0)return!1;s=s.next}return!0}function wI(n,e,t,i){const s=n.prev,a=n,l=n.next;if(Pt(s,a,l)>=0)return!1;const u=s.x<a.x?s.x<l.x?s.x:l.x:a.x<l.x?a.x:l.x,d=s.y<a.y?s.y<l.y?s.y:l.y:a.y<l.y?a.y:l.y,h=s.x>a.x?s.x>l.x?s.x:l.x:a.x>l.x?a.x:l.x,p=s.y>a.y?s.y>l.y?s.y:l.y:a.y>l.y?a.y:l.y,m=op(u,d,e,t,i),g=op(h,p,e,t,i);let y=n.prevZ,_=n.nextZ;for(;y&&y.z>=m&&_&&_.z<=g;){if(y!==n.prev&&y!==n.next&&mo(s.x,s.y,a.x,a.y,l.x,l.y,y.x,y.y)&&Pt(y.prev,y,y.next)>=0||(y=y.prevZ,_!==n.prev&&_!==n.next&&mo(s.x,s.y,a.x,a.y,l.x,l.y,_.x,_.y)&&Pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=m;){if(y!==n.prev&&y!==n.next&&mo(s.x,s.y,a.x,a.y,l.x,l.y,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=g;){if(_!==n.prev&&_!==n.next&&mo(s.x,s.y,a.x,a.y,l.x,l.y,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function _I(n,e,t){let i=n;do{const s=i.prev,a=i.next.next;!Wu(s,a)&&b1(s,i,i.next,a)&&al(s,a)&&al(a,s)&&(e.push(s.i/t),e.push(i.i/t),e.push(a.i/t),ll(i),ll(i.next),i=n=a),i=i.next}while(i!==n);return Dr(i)}function bI(n,e,t,i,s,a){let l=n;do{let u=l.next.next;for(;u!==l.prev;){if(l.i!==u.i&&RI(l,u)){let d=S1(l,u);l=Dr(l,l.next),d=Dr(d,d.next),ol(l,e,t,i,s,a),ol(d,e,t,i,s,a);return}u=u.next}l=l.next}while(l!==n)}function SI(n,e,t,i){const s=[];let a,l,u,d,h;for(a=0,l=e.length;a<l;a++)u=e[a]*i,d=a<l-1?e[a+1]*i:n.length,h=_1(n,u,d,i,!1),h===h.next&&(h.steiner=!0),s.push(PI(h));for(s.sort(MI),a=0;a<s.length;a++)EI(s[a],t),t=Dr(t,t.next);return t}function MI(n,e){return n.x-e.x}function EI(n,e){if(e=TI(n,e),e){const t=S1(e,n);Dr(e,e.next),Dr(t,t.next)}}function TI(n,e){let t=e;const i=n.x,s=n.y;let a=-1/0,l;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const g=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=i&&g>a){if(a=g,g===i){if(s===t.y)return t;if(s===t.next.y)return t.next}l=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!l)return null;if(i===a)return l;const u=l,d=l.x,h=l.y;let p=1/0,m;t=l;do i>=t.x&&t.x>=d&&i!==t.x&&mo(s<h?i:a,s,d,h,s<h?a:i,s,t.x,t.y)&&(m=Math.abs(s-t.y)/(i-t.x),al(t,n)&&(m<p||m===p&&(t.x>l.x||t.x===l.x&&AI(l,t)))&&(l=t,p=m)),t=t.next;while(t!==u);return l}function AI(n,e){return Pt(n.prev,n,e.prev)<0&&Pt(e.next,n,n.next)<0}function CI(n,e,t,i){let s=n;do s.z===null&&(s.z=op(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,LI(s)}function LI(n){let e,t,i,s,a,l,u,d,h=1;do{for(t=n,n=null,a=null,l=0;t;){for(l++,i=t,u=0,e=0;e<h&&(u++,i=i.nextZ,!!i);e++);for(d=h;u>0||d>0&&i;)u!==0&&(d===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,u--):(s=i,i=i.nextZ,d--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;t=i}a.nextZ=null,h*=2}while(l>1);return n}function op(n,e,t,i,s){return n=32767*(n-t)*s,e=32767*(e-i)*s,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function PI(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function mo(n,e,t,i,s,a,l,u){return(s-l)*(e-u)-(n-l)*(a-u)>=0&&(n-l)*(i-u)-(t-l)*(e-u)>=0&&(t-l)*(a-u)-(s-l)*(i-u)>=0}function RI(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!kI(n,e)&&(al(n,e)&&al(e,n)&&DI(n,e)&&(Pt(n.prev,n,e.prev)||Pt(n,e.prev,e))||Wu(n,e)&&Pt(n.prev,n,n.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Wu(n,e){return n.x===e.x&&n.y===e.y}function b1(n,e,t,i){const s=eu(Pt(n,e,t)),a=eu(Pt(n,e,i)),l=eu(Pt(t,i,n)),u=eu(Pt(t,i,e));return!!(s!==a&&l!==u||s===0&&Qc(n,t,e)||a===0&&Qc(n,i,e)||l===0&&Qc(t,n,i)||u===0&&Qc(t,e,i))}function Qc(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function eu(n){return n>0?1:n<0?-1:0}function kI(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&b1(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function al(n,e){return Pt(n.prev,n,n.next)<0?Pt(n,e,n.next)>=0&&Pt(n,n.prev,e)>=0:Pt(n,e,n.prev)<0||Pt(n,n.next,e)<0}function DI(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function S1(n,e){const t=new ap(n.i,n.x,n.y),i=new ap(e.i,e.x,e.y),s=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function Dx(n,e,t,i){const s=new ap(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ll(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ap(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function II(n,e,t,i){let s=0;for(let a=e,l=t-i;a<t;a+=i)s+=(n[l]-n[a])*(n[a+1]+n[l+1]),l=a;return s}class Rr{static area(e){const t=e.length;let i=0;for(let s=t-1,a=0;a<t;s=a++)i+=e[s].x*e[a].y-e[a].x*e[s].y;return i*.5}static isClockWise(e){return Rr.area(e)<0}static triangulateShape(e,t){const i=[],s=[],a=[];Ix(e),Nx(i,e);let l=e.length;t.forEach(Ix);for(let d=0;d<t.length;d++)s.push(l),l+=t[d].length,Nx(i,t[d]);const u=yI.triangulate(i,s);for(let d=0;d<u.length;d+=3)a.push(u.slice(d,d+3));return a}}function Ix(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Nx(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class ju extends pt{constructor(e,t){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],a=[];for(let u=0,d=e.length;u<d;u++){const h=e[u];l(h)}this.setAttribute("position",new Ft(s,3)),this.setAttribute("uv",new Ft(a,2)),this.computeVertexNormals();function l(u){const d=[],h=t.curveSegments!==void 0?t.curveSegments:12,p=t.steps!==void 0?t.steps:1;let m=t.depth!==void 0?t.depth:100,g=t.bevelEnabled!==void 0?t.bevelEnabled:!0,y=t.bevelThickness!==void 0?t.bevelThickness:6,_=t.bevelSize!==void 0?t.bevelSize:y-2,S=t.bevelOffset!==void 0?t.bevelOffset:0,M=t.bevelSegments!==void 0?t.bevelSegments:3;const b=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:NI;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),m=t.amount);let C,R=!1,A,T,B,U;b&&(C=b.getSpacedPoints(p),R=!0,g=!1,A=b.computeFrenetFrames(p,!1),T=new N,B=new N,U=new N),g||(M=0,y=0,_=0,S=0);const q=u.extractPoints(h);let ee=q.shape;const ae=q.holes;if(!Rr.isClockWise(ee)){ee=ee.reverse();for(let ge=0,xe=ae.length;ge<xe;ge++){const Se=ae[ge];Rr.isClockWise(Se)&&(ae[ge]=Se.reverse())}}const z=Rr.triangulateShape(ee,ae),G=ee;for(let ge=0,xe=ae.length;ge<xe;ge++){const Se=ae[ge];ee=ee.concat(Se)}function W(ge,xe,Se){return xe||console.error("THREE.ExtrudeGeometry: vec does not exist"),xe.clone().multiplyScalar(Se).add(ge)}const V=ee.length,ie=z.length;function X(ge,xe,Se){let ze,Ae,I;const P=ge.x-xe.x,ce=ge.y-xe.y,ue=Se.x-ge.x,Me=Se.y-ge.y,Ne=P*P+ce*ce,rt=P*Me-ce*ue;if(Math.abs(rt)>Number.EPSILON){const qe=Math.sqrt(Ne),H=Math.sqrt(ue*ue+Me*Me),ye=xe.x-ce/qe,_e=xe.y+P/qe,Oe=Se.x-Me/H,he=Se.y+ue/H,We=((Oe-ye)*Me-(he-_e)*ue)/(P*Me-ce*ue);ze=ye+P*We-ge.x,Ae=_e+ce*We-ge.y;const st=ze*ze+Ae*Ae;if(st<=2)return new we(ze,Ae);I=Math.sqrt(st/2)}else{let qe=!1;P>Number.EPSILON?ue>Number.EPSILON&&(qe=!0):P<-Number.EPSILON?ue<-Number.EPSILON&&(qe=!0):Math.sign(ce)===Math.sign(Me)&&(qe=!0),qe?(ze=-ce,Ae=P,I=Math.sqrt(Ne)):(ze=P,Ae=ce,I=Math.sqrt(Ne/2))}return new we(ze/I,Ae/I)}const ne=[];for(let ge=0,xe=G.length,Se=xe-1,ze=ge+1;ge<xe;ge++,Se++,ze++)Se===xe&&(Se=0),ze===xe&&(ze=0),ne[ge]=X(G[ge],G[Se],G[ze]);const re=[];let D,J=ne.concat();for(let ge=0,xe=ae.length;ge<xe;ge++){const Se=ae[ge];D=[];for(let ze=0,Ae=Se.length,I=Ae-1,P=ze+1;ze<Ae;ze++,I++,P++)I===Ae&&(I=0),P===Ae&&(P=0),D[ze]=X(Se[ze],Se[I],Se[P]);re.push(D),J=J.concat(D)}for(let ge=0;ge<M;ge++){const xe=ge/M,Se=y*Math.cos(xe*Math.PI/2),ze=_*Math.sin(xe*Math.PI/2)+S;for(let Ae=0,I=G.length;Ae<I;Ae++){const P=W(G[Ae],ne[Ae],ze);Ce(P.x,P.y,-Se)}for(let Ae=0,I=ae.length;Ae<I;Ae++){const P=ae[Ae];D=re[Ae];for(let ce=0,ue=P.length;ce<ue;ce++){const Me=W(P[ce],D[ce],ze);Ce(Me.x,Me.y,-Se)}}}const ve=_+S;for(let ge=0;ge<V;ge++){const xe=g?W(ee[ge],J[ge],ve):ee[ge];R?(B.copy(A.normals[0]).multiplyScalar(xe.x),T.copy(A.binormals[0]).multiplyScalar(xe.y),U.copy(C[0]).add(B).add(T),Ce(U.x,U.y,U.z)):Ce(xe.x,xe.y,0)}for(let ge=1;ge<=p;ge++)for(let xe=0;xe<V;xe++){const Se=g?W(ee[xe],J[xe],ve):ee[xe];R?(B.copy(A.normals[ge]).multiplyScalar(Se.x),T.copy(A.binormals[ge]).multiplyScalar(Se.y),U.copy(C[ge]).add(B).add(T),Ce(U.x,U.y,U.z)):Ce(Se.x,Se.y,m/p*ge)}for(let ge=M-1;ge>=0;ge--){const xe=ge/M,Se=y*Math.cos(xe*Math.PI/2),ze=_*Math.sin(xe*Math.PI/2)+S;for(let Ae=0,I=G.length;Ae<I;Ae++){const P=W(G[Ae],ne[Ae],ze);Ce(P.x,P.y,m+Se)}for(let Ae=0,I=ae.length;Ae<I;Ae++){const P=ae[Ae];D=re[Ae];for(let ce=0,ue=P.length;ce<ue;ce++){const Me=W(P[ce],D[ce],ze);R?Ce(Me.x,Me.y+C[p-1].y,C[p-1].x+Se):Ce(Me.x,Me.y,m+Se)}}}K(),Ie();function K(){const ge=s.length/3;if(g){let xe=0,Se=V*xe;for(let ze=0;ze<ie;ze++){const Ae=z[ze];be(Ae[2]+Se,Ae[1]+Se,Ae[0]+Se)}xe=p+M*2,Se=V*xe;for(let ze=0;ze<ie;ze++){const Ae=z[ze];be(Ae[0]+Se,Ae[1]+Se,Ae[2]+Se)}}else{for(let xe=0;xe<ie;xe++){const Se=z[xe];be(Se[2],Se[1],Se[0])}for(let xe=0;xe<ie;xe++){const Se=z[xe];be(Se[0]+V*p,Se[1]+V*p,Se[2]+V*p)}}i.addGroup(ge,s.length/3-ge,0)}function Ie(){const ge=s.length/3;let xe=0;Pe(G,xe),xe+=G.length;for(let Se=0,ze=ae.length;Se<ze;Se++){const Ae=ae[Se];Pe(Ae,xe),xe+=Ae.length}i.addGroup(ge,s.length/3-ge,1)}function Pe(ge,xe){let Se=ge.length;for(;--Se>=0;){const ze=Se;let Ae=Se-1;Ae<0&&(Ae=ge.length-1);for(let I=0,P=p+M*2;I<P;I++){const ce=V*I,ue=V*(I+1),Me=xe+ze+ce,Ne=xe+Ae+ce,rt=xe+Ae+ue,qe=xe+ze+ue;Be(Me,Ne,rt,qe)}}}function Ce(ge,xe,Se){d.push(ge),d.push(xe),d.push(Se)}function be(ge,xe,Se){Ue(ge),Ue(xe),Ue(Se);const ze=s.length/3,Ae=w.generateTopUV(i,s,ze-3,ze-2,ze-1);Qe(Ae[0]),Qe(Ae[1]),Qe(Ae[2])}function Be(ge,xe,Se,ze){Ue(ge),Ue(xe),Ue(ze),Ue(xe),Ue(Se),Ue(ze);const Ae=s.length/3,I=w.generateSideWallUV(i,s,Ae-6,Ae-3,Ae-2,Ae-1);Qe(I[0]),Qe(I[1]),Qe(I[3]),Qe(I[1]),Qe(I[2]),Qe(I[3])}function Ue(ge){s.push(d[ge*3+0]),s.push(d[ge*3+1]),s.push(d[ge*3+2])}function Qe(ge){a.push(ge.x),a.push(ge.y)}}}toJSON(){const e=pt.prototype.toJSON.call(this),t=this.parameters.shapes,i=this.parameters.options;return FI(t,i,e)}}const NI={generateTopUV:function(n,e,t,i,s){const a=e[t*3],l=e[t*3+1],u=e[i*3],d=e[i*3+1],h=e[s*3],p=e[s*3+1];return[new we(a,l),new we(u,d),new we(h,p)]},generateSideWallUV:function(n,e,t,i,s,a){const l=e[t*3],u=e[t*3+1],d=e[t*3+2],h=e[i*3],p=e[i*3+1],m=e[i*3+2],g=e[s*3],y=e[s*3+1],_=e[s*3+2],S=e[a*3],M=e[a*3+1],b=e[a*3+2];return Math.abs(u-p)<.01?[new we(l,1-d),new we(h,1-m),new we(g,1-_),new we(S,1-b)]:[new we(u,1-d),new we(p,1-m),new we(y,1-_),new we(M,1-b)]}};function FI(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const a=n[i];t.shapes.push(a.uuid)}else t.shapes.push(n.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class zI extends pt{constructor(e,t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],a=[],l=[];let u=0,d=0;if(Array.isArray(e)===!1)h(e);else for(let p=0;p<e.length;p++)h(e[p]),this.addGroup(u,d,p),u+=d,d=0;this.setIndex(i),this.setAttribute("position",new Ft(s,3)),this.setAttribute("normal",new Ft(a,3)),this.setAttribute("uv",new Ft(l,2));function h(p){const m=s.length/3,g=p.extractPoints(t);let y=g.shape;const _=g.holes;Rr.isClockWise(y)===!1&&(y=y.reverse());for(let M=0,b=_.length;M<b;M++){const w=_[M];Rr.isClockWise(w)===!0&&(_[M]=w.reverse())}const S=Rr.triangulateShape(y,_);for(let M=0,b=_.length;M<b;M++){const w=_[M];y=y.concat(w)}for(let M=0,b=y.length;M<b;M++){const w=y[M];s.push(w.x,w.y,0),a.push(0,0,1),l.push(w.x,w.y)}for(let M=0,b=S.length;M<b;M++){const w=S[M],C=w[0]+m,R=w[1]+m,A=w[2]+m;i.push(C,R,A),d+=3}}}toJSON(){const e=pt.prototype.toJSON.call(this),t=this.parameters.shapes;return BI(t,e)}}function BI(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Fx extends pt{constructor(e=1,t=8,i=6,s=0,a=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:a,thetaStart:l,thetaLength:u},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(l+u,Math.PI);let h=0;const p=[],m=new N,g=new N,y=[],_=[],S=[],M=[];for(let b=0;b<=i;b++){const w=[],C=b/i;let R=0;b==0&&l==0?R=.5/t:b==i&&d==Math.PI&&(R=-.5/t);for(let A=0;A<=t;A++){const T=A/t;m.x=-e*Math.cos(s+T*a)*Math.sin(l+C*u),m.y=e*Math.cos(l+C*u),m.z=e*Math.sin(s+T*a)*Math.sin(l+C*u),_.push(m.x,m.y,m.z),g.copy(m).normalize(),S.push(g.x,g.y,g.z),M.push(T+R,1-C),w.push(h++)}p.push(w)}for(let b=0;b<i;b++)for(let w=0;w<t;w++){const C=p[b][w+1],R=p[b][w],A=p[b+1][w],T=p[b+1][w+1];(b!==0||l>0)&&y.push(C,R,T),(b!==i-1||d<Math.PI)&&y.push(R,A,T)}this.setIndex(y),this.setAttribute("position",new Ft(_,3)),this.setAttribute("normal",new Ft(S,3)),this.setAttribute("uv",new Ft(M,2))}}class OI extends Qt{constructor(e){super(),this.type="ShadowMaterial",this.color=new Ve(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}OI.prototype.isShadowMaterial=!0;class VI extends ls{constructor(e){super(e),this.type="RawShaderMaterial"}}VI.prototype.isRawShaderMaterial=!0;class M1 extends Qt{constructor(e){super(),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.vertexTangents=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this.vertexTangents=e.vertexTangents,this}}M1.prototype.isMeshStandardMaterial=!0;class UI extends M1{constructor(e){super(),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,Object.defineProperty(this,"ior",{get:function(){return(1+.4*this.reflectivity)/(1-.4*this.reflectivity)},set:function(t){this.reflectivity=Fn(2.5*(t-1)/(t+1),0,1)}}),this.sheen=null,this.transmission=0,this.transmissionMap=null,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.reflectivity=e.reflectivity,e.sheen?this.sheen=(this.sheen||new Ve).copy(e.sheen):this.sheen=null,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this}}UI.prototype.isMeshPhysicalMaterial=!0;class HI extends Qt{constructor(e){super(),this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}HI.prototype.isMeshPhongMaterial=!0;class GI extends Qt{constructor(e){super(),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}GI.prototype.isMeshToonMaterial=!0;class WI extends Qt{constructor(e){super(),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}WI.prototype.isMeshNormalMaterial=!0;class jI extends Qt{constructor(e){super(),this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this}}jI.prototype.isMeshLambertMaterial=!0;class XI extends Qt{constructor(e){super(),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.skinning=e.skinning,this.morphTargets=e.morphTargets,this.morphNormals=e.morphNormals,this.flatShading=e.flatShading,this}}XI.prototype.isMeshMatcapMaterial=!0;class YI extends ko{constructor(e){super(),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}YI.prototype.isLineDashedMaterial=!0;const St={arraySlice:function(n,e,t){return St.isTypedArray(n)?new n.constructor(n.subarray(e,t!==void 0?t:n.length)):n.slice(e,t)},convertArray:function(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)},isTypedArray:function(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)},getKeyframeOrder:function(n){function e(s,a){return n[s]-n[a]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i},sortedArray:function(n,e,t){const i=n.length,s=new n.constructor(i);for(let a=0,l=0;l!==i;++a){const u=t[a]*e;for(let d=0;d!==e;++d)s[l++]=n[u+d]}return s},flattenJSON:function(n,e,t,i){let s=1,a=n[0];for(;a!==void 0&&a[i]===void 0;)a=n[s++];if(a===void 0)return;let l=a[i];if(l!==void 0)if(Array.isArray(l))do l=a[i],l!==void 0&&(e.push(a.time),t.push.apply(t,l)),a=n[s++];while(a!==void 0);else if(l.toArray!==void 0)do l=a[i],l!==void 0&&(e.push(a.time),l.toArray(t,t.length)),a=n[s++];while(a!==void 0);else do l=a[i],l!==void 0&&(e.push(a.time),t.push(l)),a=n[s++];while(a!==void 0)},subclip:function(n,e,t,i,s=30){const a=n.clone();a.name=e;const l=[];for(let d=0;d<a.tracks.length;++d){const h=a.tracks[d],p=h.getValueSize(),m=[],g=[];for(let y=0;y<h.times.length;++y){const _=h.times[y]*s;if(!(_<t||_>=i)){m.push(h.times[y]);for(let S=0;S<p;++S)g.push(h.values[y*p+S])}}m.length!==0&&(h.times=St.convertArray(m,h.times.constructor),h.values=St.convertArray(g,h.values.constructor),l.push(h))}a.tracks=l;let u=1/0;for(let d=0;d<a.tracks.length;++d)u>a.tracks[d].times[0]&&(u=a.tracks[d].times[0]);for(let d=0;d<a.tracks.length;++d)a.tracks[d].shift(-1*u);return a.resetDuration(),a},makeClipAdditive:function(n,e=0,t=n,i=30){i<=0&&(i=30);const s=t.tracks.length,a=e/i;for(let l=0;l<s;++l){const u=t.tracks[l],d=u.ValueTypeName;if(d==="bool"||d==="string")continue;const h=n.tracks.find(function(b){return b.name===u.name&&b.ValueTypeName===d});if(h===void 0)continue;let p=0;const m=u.getValueSize();u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(p=m/3);let g=0;const y=h.getValueSize();h.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(g=y/3);const _=u.times.length-1;let S;if(a<=u.times[0]){const b=p,w=m-p;S=St.arraySlice(u.values,b,w)}else if(a>=u.times[_]){const b=_*m+p,w=b+m-p;S=St.arraySlice(u.values,b,w)}else{const b=u.createInterpolant(),w=p,C=m-p;b.evaluate(a),S=St.arraySlice(b.resultBuffer,w,C)}d==="quaternion"&&new xn().fromArray(S).normalize().conjugate().toArray(S);const M=h.times.length;for(let b=0;b<M;++b){const w=b*y+g;if(d==="quaternion")xn.multiplyQuaternionsFlat(h.values,w,S,0,h.values,w);else{const C=y-g*2;for(let R=0;R<C;++R)h.values[w+R]-=S[R]}}}return n.blendMode=$_,n}};class Ir{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let l;n:{i:if(!(e<s)){for(let u=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,e,a)}if(i===u)break;if(a=s,s=t[++i],e<s)break t}l=t.length;break n}if(!(e>=a)){const u=t[1];e<u&&(i=2,a=u);for(let d=i-2;;){if(a===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,s);if(i===d)break;if(s=a,a=t[--i-1],e>=a)break t}l=i,i=0;break n}break e}for(;i<l;){const u=i+l>>>1;e<t[u]?l=u:i=u+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,s);if(s===void 0)return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,a,e)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let l=0;l!==s;++l)t[l]=i[a+l];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Ir.prototype.beforeStart_=Ir.prototype.copySampleValue_;Ir.prototype.afterEnd_=Ir.prototype.copySampleValue_;class qI extends Ir{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ho,endingEnd:ho}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,l=e+1,u=s[a],d=s[l];if(u===void 0)switch(this.getSettings_().endingStart){case fo:a=e,u=2*t-i;break;case Mu:a=s.length-2,u=t+s[a]-s[a+1];break;default:a=e,u=i}if(d===void 0)switch(this.getSettings_().endingEnd){case fo:l=e,d=2*i-t;break;case Mu:l=1,d=i+s[1]-s[0];break;default:l=e-1,d=t}const h=(i-t)*.5,p=this.valueSize;this._weightPrev=h/(t-u),this._weightNext=h/(d-i),this._offsetPrev=a*p,this._offsetNext=l*p}interpolate_(e,t,i,s){const a=this.resultBuffer,l=this.sampleValues,u=this.valueSize,d=e*u,h=d-u,p=this._offsetPrev,m=this._offsetNext,g=this._weightPrev,y=this._weightNext,_=(i-t)/(s-t),S=_*_,M=S*_,b=-g*M+2*g*S-g*_,w=(1+g)*M+(-1.5-2*g)*S+(-.5+g)*_+1,C=(-1-y)*M+(1.5+y)*S+.5*_,R=y*M-y*S;for(let A=0;A!==u;++A)a[A]=b*l[p+A]+w*l[h+A]+C*l[d+A]+R*l[m+A];return a}}class E1 extends Ir{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,l=this.sampleValues,u=this.valueSize,d=e*u,h=d-u,p=(i-t)/(s-t),m=1-p;for(let g=0;g!==u;++g)a[g]=l[h+g]*m+l[d+g]*p;return a}}class $I extends Ir{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Di{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=St.convertArray(t,this.TimeBufferType),this.values=St.convertArray(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:St.convertArray(e.times,Array),values:St.convertArray(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $I(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new E1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qI(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bu:t=this.InterpolantFactoryMethodDiscrete;break;case Su:t=this.InterpolantFactoryMethodLinear;break;case Zh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bu;case this.InterpolantFactoryMethodLinear:return Su;case this.InterpolantFactoryMethodSmooth:return Zh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,l=s-1;for(;a!==s&&i[a]<e;)++a;for(;l!==-1&&i[l]>t;)--l;if(++l,a!==0||l!==s){a>=l&&(l=Math.max(l,1),a=l-1);const u=this.getValueSize();this.times=St.arraySlice(i,a,l),this.values=St.arraySlice(this.values,a*u,l*u)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let l=null;for(let u=0;u!==a;u++){const d=i[u];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,u,d),e=!1;break}if(l!==null&&l>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,u,d,l),e=!1;break}l=d}if(s!==void 0&&St.isTypedArray(s))for(let u=0,d=s.length;u!==d;++u){const h=s[u];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,u,h),e=!1;break}}return e}optimize(){const e=St.arraySlice(this.times),t=St.arraySlice(this.values),i=this.getValueSize(),s=this.getInterpolation()===Zh,a=e.length-1;let l=1;for(let u=1;u<a;++u){let d=!1;const h=e[u],p=e[u+1];if(h!==p&&(u!==1||h!==e[0]))if(s)d=!0;else{const m=u*i,g=m-i,y=m+i;for(let _=0;_!==i;++_){const S=t[m+_];if(S!==t[g+_]||S!==t[y+_]){d=!0;break}}}if(d){if(u!==l){e[l]=e[u];const m=u*i,g=l*i;for(let y=0;y!==i;++y)t[g+y]=t[m+y]}++l}}if(a>0){e[l]=e[a];for(let u=a*i,d=l*i,h=0;h!==i;++h)t[d+h]=t[u+h];++l}return l!==e.length?(this.times=St.arraySlice(e,0,l),this.values=St.arraySlice(t,0,l*i)):(this.times=e,this.values=t),this}clone(){const e=St.arraySlice(this.times,0),t=St.arraySlice(this.values,0),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=Su;class Do extends Di{}Do.prototype.ValueTypeName="bool";Do.prototype.ValueBufferType=Array;Do.prototype.DefaultInterpolation=bu;Do.prototype.InterpolantFactoryMethodLinear=void 0;Do.prototype.InterpolantFactoryMethodSmooth=void 0;class T1 extends Di{}T1.prototype.ValueTypeName="color";class Tu extends Di{}Tu.prototype.ValueTypeName="number";class ZI extends Ir{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,l=this.sampleValues,u=this.valueSize,d=(i-t)/(s-t);let h=e*u;for(let p=h+u;h!==p;h+=4)xn.slerpFlat(a,0,l,h-u,l,h,d);return a}}class vl extends Di{InterpolantFactoryMethodLinear(e){return new ZI(this.times,this.values,this.getValueSize(),e)}}vl.prototype.ValueTypeName="quaternion";vl.prototype.DefaultInterpolation=Su;vl.prototype.InterpolantFactoryMethodSmooth=void 0;class Io extends Di{}Io.prototype.ValueTypeName="string";Io.prototype.ValueBufferType=Array;Io.prototype.DefaultInterpolation=bu;Io.prototype.InterpolantFactoryMethodLinear=void 0;Io.prototype.InterpolantFactoryMethodSmooth=void 0;class Au extends Di{}Au.prototype.ValueTypeName="vector";class zx{constructor(e,t=-1,i,s=Kp){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Pi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let l=0,u=i.length;l!==u;++l)t.push(KI(i[l]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,l=i.length;a!==l;++a)t.push(Di.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,l=[];for(let u=0;u<a;u++){let d=[],h=[];d.push((u+a-1)%a,u,(u+1)%a),h.push(0,1,0);const p=St.getKeyframeOrder(d);d=St.sortedArray(d,1,p),h=St.sortedArray(h,1,p),!s&&d[0]===0&&(d.push(a),h.push(h[0])),l.push(new Tu(".morphTargetInfluences["+t[u].name+"]",d,h).scale(1/i))}return new this(e,-1,l)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let u=0,d=e.length;u<d;u++){const h=e[u],p=h.name.match(a);if(p&&p.length>1){const m=p[1];let g=s[m];g||(s[m]=g=[]),g.push(h)}}const l=[];for(const u in s)l.push(this.CreateFromMorphTargetSequence(u,s[u],t,i));return l}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(m,g,y,_,S){if(y.length!==0){const M=[],b=[];St.flattenJSON(y,M,b,_),M.length!==0&&S.push(new m(g,M,b))}},s=[],a=e.name||"default",l=e.fps||30,u=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let m=0;m<h.length;m++){const g=h[m].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const y={};let _;for(_=0;_<g.length;_++)if(g[_].morphTargets)for(let S=0;S<g[_].morphTargets.length;S++)y[g[_].morphTargets[S]]=-1;for(const S in y){const M=[],b=[];for(let w=0;w!==g[_].morphTargets.length;++w){const C=g[_];M.push(C.time),b.push(C.morphTarget===S?1:0)}s.push(new Tu(".morphTargetInfluence["+S+"]",M,b))}d=y.length*l}else{const y=".bones["+t[m].name+"]";i(Au,y+".position",g,"pos",s),i(vl,y+".quaternion",g,"rot",s),i(Au,y+".scale",g,"scl",s)}}return s.length===0?null:new this(a,d,s,u)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function JI(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Tu;case"vector":case"vector2":case"vector3":case"vector4":return Au;case"color":return T1;case"quaternion":return vl;case"bool":case"boolean":return Do;case"string":return Io}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function KI(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=JI(n.type);if(n.times===void 0){const t=[],i=[];St.flattenJSON(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const _o={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class QI{constructor(e,t,i){const s=this;let a=!1,l=0,u=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(p){u++,a===!1&&s.onStart!==void 0&&s.onStart(p,l,u),a=!0},this.itemEnd=function(p){l++,s.onProgress!==void 0&&s.onProgress(p,l,u),l===u&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,m){return h.push(p,m),this},this.removeHandler=function(p){const m=h.indexOf(p);return m!==-1&&h.splice(m,2),this},this.getHandler=function(p){for(let m=0,g=h.length;m<g;m+=2){const y=h[m],_=h[m+1];if(y.global&&(y.lastIndex=0),y.test(p))return _}return null}}}const eN=new QI;class zr{constructor(e){this.manager=e!==void 0?e:eN,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const di={};class tN extends zr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=_o.get(e);if(l!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l;if(di[e]!==void 0){di[e].push({onLoad:t,onProgress:i,onError:s});return}const u=/^data:(.*?)(;base64)?,(.*)$/,d=e.match(u);let h;if(d){const p=d[1],m=!!d[2];let g=d[3];g=decodeURIComponent(g),m&&(g=atob(g));try{let y;const _=(this.responseType||"").toLowerCase();switch(_){case"arraybuffer":case"blob":const S=new Uint8Array(g.length);for(let b=0;b<g.length;b++)S[b]=g.charCodeAt(b);_==="blob"?y=new Blob([S.buffer],{type:p}):y=S.buffer;break;case"document":y=new DOMParser().parseFromString(g,p);break;case"json":y=JSON.parse(g);break;default:y=g;break}setTimeout(function(){t&&t(y),a.manager.itemEnd(e)},0)}catch(y){setTimeout(function(){s&&s(y),a.manager.itemError(e),a.manager.itemEnd(e)},0)}}else{di[e]=[],di[e].push({onLoad:t,onProgress:i,onError:s}),h=new XMLHttpRequest,h.open("GET",e,!0),h.addEventListener("load",function(p){const m=this.response,g=di[e];if(delete di[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),_o.add(e,m);for(let y=0,_=g.length;y<_;y++){const S=g[y];S.onLoad&&S.onLoad(m)}a.manager.itemEnd(e)}else{for(let y=0,_=g.length;y<_;y++){const S=g[y];S.onError&&S.onError(p)}a.manager.itemError(e),a.manager.itemEnd(e)}},!1),h.addEventListener("progress",function(p){const m=di[e];for(let g=0,y=m.length;g<y;g++){const _=m[g];_.onProgress&&_.onProgress(p)}},!1),h.addEventListener("error",function(p){const m=di[e];delete di[e];for(let g=0,y=m.length;g<y;g++){const _=m[g];_.onError&&_.onError(p)}a.manager.itemError(e),a.manager.itemEnd(e)},!1),h.addEventListener("abort",function(p){const m=di[e];delete di[e];for(let g=0,y=m.length;g<y;g++){const _=m[g];_.onError&&_.onError(p)}a.manager.itemError(e),a.manager.itemEnd(e)},!1),this.responseType!==void 0&&(h.responseType=this.responseType),this.withCredentials!==void 0&&(h.withCredentials=this.withCredentials),h.overrideMimeType&&h.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const p in this.requestHeader)h.setRequestHeader(p,this.requestHeader[p]);h.send(null)}return a.manager.itemStart(e),h}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class A1 extends zr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=_o.get(e);if(l!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l;const u=document.createElementNS("http://www.w3.org/1999/xhtml","img");function d(){u.removeEventListener("load",d,!1),u.removeEventListener("error",h,!1),_o.add(e,this),t&&t(this),a.manager.itemEnd(e)}function h(p){u.removeEventListener("load",d,!1),u.removeEventListener("error",h,!1),s&&s(p),a.manager.itemError(e),a.manager.itemEnd(e)}return u.addEventListener("load",d,!1),u.addEventListener("error",h,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class nN extends zr{constructor(e){super(e)}load(e,t,i,s){const a=new Uu,l=new A1(this.manager);l.setCrossOrigin(this.crossOrigin),l.setPath(this.path);let u=0;function d(h){l.load(e[h],function(p){a.images[h]=p,u++,u===6&&(a.needsUpdate=!0,t&&t(a))},void 0,s)}for(let h=0;h<e.length;++h)d(h);return a}}class iN extends zr{constructor(e){super(e)}load(e,t,i,s){const a=new sn,l=new A1(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(u){a.image=u;const d=e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0;a.format=d?ss:pi,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),a=0;t.push(0);for(let l=1;l<=e;l++)i=this.getPoint(l/e),a+=i.distanceTo(s),t.push(a),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const a=i.length;let l;t?l=t:l=e*i[a-1];let u=0,d=a-1,h;for(;u<=d;)if(s=Math.floor(u+(d-u)/2),h=i[s]-l,h<0)u=s+1;else if(h>0)d=s-1;else{d=s;break}if(s=d,i[s]===l)return s/(a-1);const p=i[s],g=i[s+1]-p,y=(l-p)/g;return(s+y)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);const l=this.getPoint(s),u=this.getPoint(a),d=t||(l.isVector2?new we:new N);return d.copy(u).sub(l).normalize(),d}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new N,s=[],a=[],l=[],u=new N,d=new Xe;for(let y=0;y<=e;y++){const _=y/e;s[y]=this.getTangentAt(_,new N),s[y].normalize()}a[0]=new N,l[0]=new N;let h=Number.MAX_VALUE;const p=Math.abs(s[0].x),m=Math.abs(s[0].y),g=Math.abs(s[0].z);p<=h&&(h=p,i.set(1,0,0)),m<=h&&(h=m,i.set(0,1,0)),g<=h&&i.set(0,0,1),u.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],u),l[0].crossVectors(s[0],a[0]);for(let y=1;y<=e;y++){if(a[y]=a[y-1].clone(),l[y]=l[y-1].clone(),u.crossVectors(s[y-1],s[y]),u.length()>Number.EPSILON){u.normalize();const _=Math.acos(Fn(s[y-1].dot(s[y]),-1,1));a[y].applyMatrix4(d.makeRotationAxis(u,_))}l[y].crossVectors(s[y],a[y])}if(t===!0){let y=Math.acos(Fn(a[0].dot(a[e]),-1,1));y/=e,s[0].dot(u.crossVectors(a[0],a[e]))>0&&(y=-y);for(let _=1;_<=e;_++)a[_].applyMatrix4(d.makeRotationAxis(s[_],y*_)),l[_].crossVectors(s[_],a[_])}return{tangents:s,normals:a,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xu extends Zn{constructor(e=0,t=0,i=1,s=1,a=0,l=Math.PI*2,u=!1,d=0){super(),this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=l,this.aClockwise=u,this.aRotation=d}getPoint(e,t){const i=t||new we,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const l=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(l?a=0:a=s),this.aClockwise===!0&&!l&&(a===s?a=-s:a=a-s);const u=this.aStartAngle+e*a;let d=this.aX+this.xRadius*Math.cos(u),h=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const p=Math.cos(this.aRotation),m=Math.sin(this.aRotation),g=d-this.aX,y=h-this.aY;d=g*p-y*m+this.aX,h=g*m+y*p+this.aY}return i.set(d,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Xu.prototype.isEllipseCurve=!0;class C1 extends Xu{constructor(e,t,i,s,a,l){super(e,t,i,i,s,a,l),this.type="ArcCurve"}}C1.prototype.isArcCurve=!0;function sm(){let n=0,e=0,t=0,i=0;function s(a,l,u,d){n=a,e=u,t=-3*a+3*l-2*u-d,i=2*a-2*l+u+d}return{initCatmullRom:function(a,l,u,d,h){s(l,u,h*(u-a),h*(d-l))},initNonuniformCatmullRom:function(a,l,u,d,h,p,m){let g=(l-a)/h-(u-a)/(h+p)+(u-l)/p,y=(u-l)/p-(d-l)/(p+m)+(d-u)/m;g*=p,y*=p,s(l,u,g,y)},calc:function(a){const l=a*a,u=l*a;return n+e*a+t*l+i*u}}}const tu=new N,Cf=new sm,Lf=new sm,Pf=new sm;class L1 extends Zn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new N){const i=t,s=this.points,a=s.length,l=(a-(this.closed?0:1))*e;let u=Math.floor(l),d=l-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/a)+1)*a:d===0&&u===a-1&&(u=a-2,d=1);let h,p;this.closed||u>0?h=s[(u-1)%a]:(tu.subVectors(s[0],s[1]).add(s[0]),h=tu);const m=s[u%a],g=s[(u+1)%a];if(this.closed||u+2<a?p=s[(u+2)%a]:(tu.subVectors(s[a-1],s[a-2]).add(s[a-1]),p=tu),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let _=Math.pow(h.distanceToSquared(m),y),S=Math.pow(m.distanceToSquared(g),y),M=Math.pow(g.distanceToSquared(p),y);S<1e-4&&(S=1),_<1e-4&&(_=S),M<1e-4&&(M=S),Cf.initNonuniformCatmullRom(h.x,m.x,g.x,p.x,_,S,M),Lf.initNonuniformCatmullRom(h.y,m.y,g.y,p.y,_,S,M),Pf.initNonuniformCatmullRom(h.z,m.z,g.z,p.z,_,S,M)}else this.curveType==="catmullrom"&&(Cf.initCatmullRom(h.x,m.x,g.x,p.x,this.tension),Lf.initCatmullRom(h.y,m.y,g.y,p.y,this.tension),Pf.initCatmullRom(h.z,m.z,g.z,p.z,this.tension));return i.set(Cf.calc(d),Lf.calc(d),Pf.calc(d)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}L1.prototype.isCatmullRomCurve3=!0;function Bx(n,e,t,i,s){const a=(i-e)*.5,l=(s-t)*.5,u=n*n,d=n*u;return(2*t-2*i+a+l)*d+(-3*t+3*i-2*a-l)*u+a*n+t}function rN(n,e){const t=1-n;return t*t*e}function sN(n,e){return 2*(1-n)*n*e}function oN(n,e){return n*n*e}function qa(n,e,t,i){return rN(n,e)+sN(n,t)+oN(n,i)}function aN(n,e){const t=1-n;return t*t*t*e}function lN(n,e){const t=1-n;return 3*t*t*n*e}function cN(n,e){return 3*(1-n)*n*n*e}function uN(n,e){return n*n*n*e}function $a(n,e,t,i,s){return aN(n,e)+lN(n,t)+cN(n,i)+uN(n,s)}class om extends Zn{constructor(e=new we,t=new we,i=new we,s=new we){super(),this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new we){const i=t,s=this.v0,a=this.v1,l=this.v2,u=this.v3;return i.set($a(e,s.x,a.x,l.x,u.x),$a(e,s.y,a.y,l.y,u.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}om.prototype.isCubicBezierCurve=!0;class P1 extends Zn{constructor(e=new N,t=new N,i=new N,s=new N){super(),this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new N){const i=t,s=this.v0,a=this.v1,l=this.v2,u=this.v3;return i.set($a(e,s.x,a.x,l.x,u.x),$a(e,s.y,a.y,l.y,u.y),$a(e,s.z,a.z,l.z,u.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}P1.prototype.isCubicBezierCurve3=!0;class Yu extends Zn{constructor(e=new we,t=new we){super(),this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new we;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Yu.prototype.isLineCurve=!0;class dN extends Zn{constructor(e=new N,t=new N){super(),this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new N){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class am extends Zn{constructor(e=new we,t=new we,i=new we){super(),this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new we){const i=t,s=this.v0,a=this.v1,l=this.v2;return i.set(qa(e,s.x,a.x,l.x),qa(e,s.y,a.y,l.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}am.prototype.isQuadraticBezierCurve=!0;class R1 extends Zn{constructor(e=new N,t=new N,i=new N){super(),this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){const i=t,s=this.v0,a=this.v1,l=this.v2;return i.set(qa(e,s.x,a.x,l.x),qa(e,s.y,a.y,l.y),qa(e,s.z,a.z,l.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}R1.prototype.isQuadraticBezierCurve3=!0;class lm extends Zn{constructor(e=[]){super(),this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const i=t,s=this.points,a=(s.length-1)*e,l=Math.floor(a),u=a-l,d=s[l===0?l:l-1],h=s[l],p=s[l>s.length-2?s.length-1:l+1],m=s[l>s.length-3?s.length-1:l+2];return i.set(Bx(u,d.x,h.x,p.x,m.x),Bx(u,d.y,h.y,p.y,m.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new we().fromArray(s))}return this}}lm.prototype.isSplineCurve=!0;var hN=Object.freeze({__proto__:null,ArcCurve:C1,CatmullRomCurve3:L1,CubicBezierCurve:om,CubicBezierCurve3:P1,EllipseCurve:Xu,LineCurve:Yu,LineCurve3:dN,QuadraticBezierCurve:am,QuadraticBezierCurve3:R1,SplineCurve:lm});class fN extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Yu(t,e))}getPoint(e){const t=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=t){const a=i[s]-t,l=this.curves[s],u=l.getLength(),d=u===0?0:1-a/u;return l.getPointAt(d)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,a=this.curves;s<a.length;s++){const l=a[s],u=l&&l.isEllipseCurve?e*2:l&&(l.isLineCurve||l.isLineCurve3)?1:l&&l.isSplineCurve?e*l.points.length:e,d=l.getPoints(u);for(let h=0;h<d.length;h++){const p=d[h];i&&i.equals(p)||(t.push(p),i=p)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new hN[s.type]().fromJSON(s))}return this}}class lp extends fN{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Yu(this.currentPoint.clone(),new we(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const a=new am(this.currentPoint.clone(),new we(e,t),new we(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,a,l){const u=new om(this.currentPoint.clone(),new we(e,t),new we(i,s),new we(a,l));return this.curves.push(u),this.currentPoint.set(a,l),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new lm(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,a,l){const u=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(e+u,t+d,i,s,a,l),this}absarc(e,t,i,s,a,l){return this.absellipse(e,t,i,i,s,a,l),this}ellipse(e,t,i,s,a,l,u,d){const h=this.currentPoint.x,p=this.currentPoint.y;return this.absellipse(e+h,t+p,i,s,a,l,u,d),this}absellipse(e,t,i,s,a,l,u,d){const h=new Xu(e,t,i,s,a,l,u,d);if(this.curves.length>0){const m=h.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(h);const p=h.getPoint(1);return this.currentPoint.copy(p),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class cm extends lp{constructor(e){super(e),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new lp().fromJSON(s))}return this}}class ki extends dt{constructor(e,t=1){super(),this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}ki.prototype.isLight=!0;class pN extends ki{constructor(e,t,i){super(e,i),this.type="HemisphereLight",this.position.copy(dt.DefaultUp),this.updateMatrix(),this.groundColor=new Ve(t)}copy(e){return ki.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}pN.prototype.isHemisphereLight=!0;const Ox=new Xe,Vx=new N,Ux=new N;class um{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hu,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Vx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vx),Ux.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ux),t.updateMatrixWorld(),Ox.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ox),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class k1 extends um{constructor(){super(new Cn(50,1,.5,500)),this.focus=1}updateMatrices(e){const t=this.camera,i=ip*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}k1.prototype.isSpotLightShadow=!0;class mN extends ki{constructor(e,t,i=0,s=Math.PI/3,a=0,l=1){super(e,t),this.type="SpotLight",this.position.copy(dt.DefaultUp),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=l,this.shadow=new k1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}mN.prototype.isSpotLight=!0;const Hx=new Xe,Ra=new N,Rf=new N;class D1 extends um{constructor(){super(new Cn(90,1,.5,500)),this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new mt(2,1,1,1),new mt(0,1,1,1),new mt(3,1,1,1),new mt(1,1,1,1),new mt(3,0,1,1),new mt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Ra.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ra),Rf.copy(i.position),Rf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Rf),i.updateMatrixWorld(),s.makeTranslation(-Ra.x,-Ra.y,-Ra.z),Hx.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hx)}}D1.prototype.isPointLightShadow=!0;class gN extends ki{constructor(e,t,i=0,s=1){super(e,t),this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new D1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}gN.prototype.isPointLight=!0;class I1 extends em{constructor(e=-1,t=1,i=1,s=-1,a=.1,l=2e3){super(),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,l=i+e,u=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,l=a+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,l,u,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}I1.prototype.isOrthographicCamera=!0;class N1 extends um{constructor(){super(new I1(-5,5,5,-5,.5,500))}}N1.prototype.isDirectionalLightShadow=!0;class vN extends ki{constructor(e,t){super(e,t),this.type="DirectionalLight",this.position.copy(dt.DefaultUp),this.updateMatrix(),this.target=new dt,this.shadow=new N1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}vN.prototype.isDirectionalLight=!0;class yN extends ki{constructor(e,t){super(e,t),this.type="AmbientLight"}}yN.prototype.isAmbientLight=!0;class xN extends ki{constructor(e,t,i=10,s=10){super(e,t),this.type="RectAreaLight",this.width=i,this.height=s}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}xN.prototype.isRectAreaLight=!0;class F1{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new N)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,s=e.y,a=e.z,l=this.coefficients;return t.copy(l[0]).multiplyScalar(.282095),t.addScaledVector(l[1],.488603*s),t.addScaledVector(l[2],.488603*a),t.addScaledVector(l[3],.488603*i),t.addScaledVector(l[4],1.092548*(i*s)),t.addScaledVector(l[5],1.092548*(s*a)),t.addScaledVector(l[6],.315392*(3*a*a-1)),t.addScaledVector(l[7],1.092548*(i*a)),t.addScaledVector(l[8],.546274*(i*i-s*s)),t}getIrradianceAt(e,t){const i=e.x,s=e.y,a=e.z,l=this.coefficients;return t.copy(l[0]).multiplyScalar(.886227),t.addScaledVector(l[1],2*.511664*s),t.addScaledVector(l[2],2*.511664*a),t.addScaledVector(l[3],2*.511664*i),t.addScaledVector(l[4],2*.429043*i*s),t.addScaledVector(l[5],2*.429043*s*a),t.addScaledVector(l[6],.743125*a*a-.247708),t.addScaledVector(l[7],2*.429043*i*a),t.addScaledVector(l[8],.429043*(i*i-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let s=0;s<9;s++)i[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let s=0;s<9;s++)i[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){const i=e.x,s=e.y,a=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*a,t[3]=.488603*i,t[4]=1.092548*i*s,t[5]=1.092548*s*a,t[6]=.315392*(3*a*a-1),t[7]=1.092548*i*a,t[8]=.546274*(i*i-s*s)}}F1.prototype.isSphericalHarmonics3=!0;class dm extends ki{constructor(e=new F1,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}dm.prototype.isLightProbe=!0;class wN{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class _N extends pt{constructor(){super(),this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}_N.prototype.isInstancedBufferGeometry=!0;class bN extends Ut{constructor(e,t,i,s){typeof i=="number"&&(s=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),super(e,t,i),this.meshPerAttribute=s||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}bN.prototype.isInstancedBufferAttribute=!0;class SN extends zr{constructor(e){super(e),typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=_o.get(e);if(l!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l;const u={};u.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",u.headers=this.requestHeader,fetch(e,u).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(d){_o.add(e,d),t&&t(d),a.manager.itemEnd(e)}).catch(function(d){s&&s(d),a.manager.itemError(e),a.manager.itemEnd(e)}),a.manager.itemStart(e)}}SN.prototype.isImageBitmapLoader=!0;let nu;const MN={getContext:function(){return nu===void 0&&(nu=new(window.AudioContext||window.webkitAudioContext)),nu},setContext:function(n){nu=n}};class EN extends zr{constructor(e){super(e)}load(e,t,i,s){const a=this,l=new tN(this.manager);l.setResponseType("arraybuffer"),l.setPath(this.path),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{const d=u.slice(0);MN.getContext().decodeAudioData(d,function(p){t(p)})}catch(d){s?s(d):console.error(d),a.manager.itemError(e)}},i,s)}}class TN extends dm{constructor(e,t,i=1){super(void 0,i);const s=new Ve().set(e),a=new Ve().set(t),l=new N(s.r,s.g,s.b),u=new N(a.r,a.g,a.b),d=Math.sqrt(Math.PI),h=d*Math.sqrt(.75);this.sh.coefficients[0].copy(l).add(u).multiplyScalar(d),this.sh.coefficients[1].copy(l).sub(u).multiplyScalar(h)}}TN.prototype.isHemisphereLightProbe=!0;class AN extends dm{constructor(e,t=1){super(void 0,t);const i=new Ve().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}}AN.prototype.isAmbientLightProbe=!0;class CN extends dt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class LN{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,a,l;switch(t){case"quaternion":s=this._slerp,a=this._slerpAdditive,l=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,a=this._select,l=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,a=this._lerpAdditive,l=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=a,this._setIdentity=l,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,a=e*s+s;let l=this.cumulativeWeight;if(l===0){for(let u=0;u!==s;++u)i[a+u]=i[u];l=t}else{l+=t;const u=t/l;this._mixBufferRegion(i,a,0,u,s)}this.cumulativeWeight=l}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,a=this.cumulativeWeight,l=this.cumulativeWeightAdditive,u=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,a<1){const d=t*this._origIndex;this._mixBufferRegion(i,s,d,1-a,t)}l>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let d=t,h=t+t;d!==h;++d)if(i[d]!==i[d+t]){u.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let a=i,l=s;a!==l;++a)t[a]=t[s+a%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,a){if(s>=.5)for(let l=0;l!==a;++l)e[t+l]=e[i+l]}_slerp(e,t,i,s){xn.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,a){const l=this._workIndex*a;xn.multiplyQuaternionsFlat(e,l,e,t,e,i),xn.slerpFlat(e,t,e,t,e,l,s)}_lerp(e,t,i,s,a){const l=1-s;for(let u=0;u!==a;++u){const d=t+u;e[d]=e[d]*l+e[i+u]*s}}_lerpAdditive(e,t,i,s,a){for(let l=0;l!==a;++l){const u=t+l;e[u]=e[u]+e[i+l]*s}}}const hm="\\[\\]\\.:\\/",PN=new RegExp("["+hm+"]","g"),fm="[^"+hm+"]",RN="[^"+hm.replace("\\.","")+"]",kN=/((?:WC+[\/:])*)/.source.replace("WC",fm),DN=/(WCOD+)?/.source.replace("WCOD",RN),IN=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fm),NN=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fm),FN=new RegExp("^"+kN+DN+IN+NN+"$"),zN=["material","materials","bones"];class BN{constructor(e,t,i){const s=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ft{constructor(e,t,i){this.path=t,this.parsedPath=i||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,i):new ft(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(PN,"")}static parseTrackName(e){const t=FN.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);zN.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let l=0;l<a.length;l++){const u=a[l];if(u.name===t||u.uuid===t)return u;const d=i(u.children);if(d)return d}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.node[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===h){h=p;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const l=e[s];if(l===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let u=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?u=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(u=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}d=this.BindingType.ArrayElement,this.resolvedProperty=l,this.propertyIndex=a}else l.fromArray!==void 0&&l.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=l):Array.isArray(l)?(d=this.BindingType.EntireArray,this.resolvedProperty=l):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][u]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=BN;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ON{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const a=t.tracks,l=a.length,u=new Array(l),d={endingStart:ho,endingEnd:ho};for(let h=0;h!==l;++h){const p=a[h].createInterpolant(null);u[h]=p,p.settings=d}this._interpolantSettings=d,this._interpolants=u,this._propertyBindings=new Array(l),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=x3,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const s=this._clip.duration,a=e._clip.duration,l=a/s,u=s/a;e.warp(1,l,t),this.warp(u,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,a=s.time,l=this.timeScale;let u=this._timeScaleInterpolant;u===null&&(u=s._lendControlInterpolant(),this._timeScaleInterpolant=u);const d=u.parameterPositions,h=u.sampleValues;return d[0]=a,d[1]=a+i,h[0]=e/l,h[1]=t/l,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const a=this._startTime;if(a!==null){const d=(e-a)*i;if(d<0||i===0)return;this._startTime=null,t=i*d}t*=this._updateTimeScale(e);const l=this._updateTime(t),u=this._updateWeight(e);if(u>0){const d=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case $_:for(let p=0,m=d.length;p!==m;++p)d[p].evaluate(l),h[p].accumulateAdditive(u);break;case Kp:default:for(let p=0,m=d.length;p!==m;++p)d[p].evaluate(l),h[p].accumulate(s,u)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,a=this._loopCount;const l=i===w3;if(e===0)return a===-1?s:l&&(a&1)===1?t-s:s;if(i===y3){a===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(a===-1&&(e>=0?(a=0,this._setEndings(!0,this.repetitions===0,l)):this._setEndings(this.repetitions===0,!0,l)),s>=t||s<0){const u=Math.floor(s/t);s-=t*u,a+=Math.abs(u);const d=this.repetitions-a;if(d<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(d===1){const h=e<0;this._setEndings(h,!h,l)}else this._setEndings(!1,!1,l);this._loopCount=a,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:u})}}else this.time=s;if(l&&(a&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=fo,s.endingEnd=fo):(e?s.endingStart=this.zeroSlopeAtStart?fo:ho:s.endingStart=Mu,t?s.endingEnd=this.zeroSlopeAtEnd?fo:ho:s.endingEnd=Mu)}_scheduleFading(e,t,i){const s=this._mixer,a=s.time;let l=this._weightInterpolant;l===null&&(l=s._lendControlInterpolant(),this._weightInterpolant=l);const u=l.parameterPositions,d=l.sampleValues;return u[0]=a,d[0]=t,u[1]=a+e,d[1]=i,this}}class VN extends hs{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,a=s.length,l=e._propertyBindings,u=e._interpolants,d=i.uuid,h=this._bindingsByRootAndName;let p=h[d];p===void 0&&(p={},h[d]=p);for(let m=0;m!==a;++m){const g=s[m],y=g.name;let _=p[y];if(_!==void 0)l[m]=_;else{if(_=l[m],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,d,y));continue}const S=t&&t._propertyBindings[m].binding.parsedPath;_=new LN(ft.create(i,y,S),g.ValueTypeName,g.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,d,y),l[m]=_}u[m].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,a=this._actionsByClip[s];this._bindAction(e,a&&a.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.useCount++===0&&(this._lendBinding(a),a.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const a=t[i];--a.useCount===0&&(a.restoreOriginalState(),this._takeBackBinding(a))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,a=this._actionsByClip;let l=a[t];if(l===void 0)l={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,a[t]=l;else{const u=l.knownActions;e._byClipCacheIndex=u.length,u.push(e)}e._cacheIndex=s.length,s.push(e),l.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const a=e._clip.uuid,l=this._actionsByClip,u=l[a],d=u.knownActions,h=d[d.length-1],p=e._byClipCacheIndex;h._byClipCacheIndex=p,d[p]=h,d.pop(),e._byClipCacheIndex=null;const m=u.actionByRoot,g=(e._localRoot||this._root).uuid;delete m[g],d.length===0&&delete l[a],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const a=t[i];--a.referenceCount===0&&this._removeInactiveBinding(a)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,a=this._bindings;let l=s[t];l===void 0&&(l={},s[t]=l),l[i]=e,e._cacheIndex=a.length,a.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,a=i.path,l=this._bindingsByRootAndName,u=l[s],d=t[t.length-1],h=e._cacheIndex;d._cacheIndex=h,t[h]=d,t.pop(),delete u[a],Object.keys(u).length===0&&delete l[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,a=t[s];e._cacheIndex=s,t[s]=e,a._cacheIndex=i,t[i]=a}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new E1(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,a=t[s];e.__cacheIndex=s,t[s]=e,a.__cacheIndex=i,t[i]=a}clipAction(e,t,i){const s=t||this._root,a=s.uuid;let l=typeof e=="string"?zx.findByName(s,e):e;const u=l!==null?l.uuid:e,d=this._actionsByClip[u];let h=null;if(i===void 0&&(l!==null?i=l.blendMode:i=Kp),d!==void 0){const m=d.actionByRoot[a];if(m!==void 0&&m.blendMode===i)return m;h=d.knownActions[0],l===null&&(l=h._clip)}if(l===null)return null;const p=new ON(this,l,t,i);return this._bindAction(p,h),this._addInactiveAction(p,u,a),p}existingAction(e,t){const i=t||this._root,s=i.uuid,a=typeof e=="string"?zx.findByName(i,e):e,l=a?a.uuid:e,u=this._actionsByClip[l];return u!==void 0&&u.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,a=Math.sign(e),l=this._accuIndex^=1;for(let h=0;h!==i;++h)t[h]._update(s,e,a,l);const u=this._bindings,d=this._nActiveBindings;for(let h=0;h!==d;++h)u[h].apply(l);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,a=s[i];if(a!==void 0){const l=a.knownActions;for(let u=0,d=l.length;u!==d;++u){const h=l[u];this._deactivateAction(h);const p=h._cacheIndex,m=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,m._cacheIndex=p,t[p]=m,t.pop(),this._removeInactiveBindingsForAction(h)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const l in i){const u=i[l].actionByRoot,d=u[t];d!==void 0&&(this._deactivateAction(d),this._removeInactiveAction(d))}const s=this._bindingsByRootAndName,a=s[t];if(a!==void 0)for(const l in a){const u=a[l];u.restoreOriginalState(),this._removeInactiveBinding(u)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}VN.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class UN extends fs{constructor(e,t,i=1){super(e,t),this.meshPerAttribute=i||1}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}UN.prototype.isInstancedInterleavedBuffer=!0;class HN extends dt{constructor(e){super(),this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}HN.prototype.isImmediateRenderObject=!0;const Mr=new N,iu=new Xe,kf=new Xe;class GN extends im{constructor(e){const t=z1(e),i=new pt,s=[],a=[],l=new Ve(0,0,1),u=new Ve(0,1,0);for(let h=0;h<t.length;h++){const p=t[h];p.parent&&p.parent.isBone&&(s.push(0,0,0),s.push(0,0,0),a.push(l.r,l.g,l.b),a.push(u.r,u.g,u.b))}i.setAttribute("position",new Ft(s,3)),i.setAttribute("color",new Ft(a,3));const d=new ko({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,d),this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,s=i.getAttribute("position");kf.copy(this.root.matrixWorld).invert();for(let a=0,l=0;a<t.length;a++){const u=t[a];u.parent&&u.parent.isBone&&(iu.multiplyMatrices(kf,u.matrixWorld),Mr.setFromMatrixPosition(iu),s.setXYZ(l,Mr.x,Mr.y,Mr.z),iu.multiplyMatrices(kf,u.parent.matrixWorld),Mr.setFromMatrixPosition(iu),s.setXYZ(l+1,Mr.x,Mr.y,Mr.z),l+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function z1(n){const e=[];n&&n.isBone&&e.push(n);for(let t=0;t<n.children.length;t++)e.push.apply(e,z1(n.children[t]));return e}class WN extends im{constructor(e=10,t=10,i=4473924,s=8947848){i=new Ve(i),s=new Ve(s);const a=t/2,l=e/t,u=e/2,d=[],h=[];for(let g=0,y=0,_=-u;g<=t;g++,_+=l){d.push(-u,0,_,u,0,_),d.push(_,0,-u,_,0,u);const S=g===a?i:s;S.toArray(h,y),y+=3,S.toArray(h,y),y+=3,S.toArray(h,y),y+=3,S.toArray(h,y),y+=3}const p=new pt;p.setAttribute("position",new Ft(d,3)),p.setAttribute("color",new Ft(h,3));const m=new ko({vertexColors:!0,toneMapped:!1});super(p,m),this.type="GridHelper"}}const jN=new Float32Array(1);new Int32Array(jN.buffer);const XN=new rl({side:Jt,depthWrite:!1,depthTest:!1});new Bn(new Qp,XN);Zn.create=function(n,e){return console.log("THREE.Curve.create() has been deprecated"),n.prototype=Object.create(Zn.prototype),n.prototype.constructor=n,n.prototype.getPoint=e,n};lp.prototype.fromPoints=function(n){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(n)};WN.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};GN.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};zr.prototype.extractUrlBase=function(n){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),wN.extractUrlBase(n)};zr.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Jn.prototype.center=function(n){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(n)};Jn.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Jn.prototype.isIntersectionBox=function(n){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};Jn.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};Jn.prototype.size=function(n){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(n)};Co.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Hu.prototype.setFromMatrix=function(n){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(n)};rn.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};rn.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};rn.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};rn.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),n.applyMatrix3(this)};rn.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};rn.prototype.getInverse=function(n){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};Xe.prototype.extractPosition=function(n){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(n)};Xe.prototype.flattenToArrayOffset=function(n,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(n,e)};Xe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new N().setFromMatrixColumn(this,3)};Xe.prototype.setRotationFromQuaternion=function(n){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(n)};Xe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Xe.prototype.multiplyVector3=function(n){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};Xe.prototype.multiplyVector4=function(n){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};Xe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Xe.prototype.rotateAxis=function(n){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),n.transformDirection(this)};Xe.prototype.crossVector=function(n){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};Xe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Xe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Xe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Xe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Xe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Xe.prototype.applyToBufferAttribute=function(n){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),n.applyMatrix4(this)};Xe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Xe.prototype.makeFrustum=function(n,e,t,i,s,a){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(n,e,i,t,s,a)};Xe.prototype.getInverse=function(n){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(n).invert()};Ei.prototype.isIntersectionLine=function(n){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(n)};xn.prototype.multiplyVector3=function(n){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),n.applyQuaternion(this)};xn.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Lo.prototype.isIntersectionBox=function(n){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(n)};Lo.prototype.isIntersectionPlane=function(n){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(n)};Lo.prototype.isIntersectionSphere=function(n){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(n)};jt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};jt.prototype.barycoordFromPoint=function(n,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(n,e)};jt.prototype.midpoint=function(n){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(n)};jt.prototypenormal=function(n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(n)};jt.prototype.plane=function(n){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(n)};jt.barycoordFromPoint=function(n,e,t,i,s){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),jt.getBarycoord(n,e,t,i,s)};jt.normal=function(n,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),jt.getNormal(n,e,t,i)};cm.prototype.extractAllPoints=function(n){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(n)};cm.prototype.extrude=function(n){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new ju(this,n)};cm.prototype.makeGeometry=function(n){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new zI(this,n)};we.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};we.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};we.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};N.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};N.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};N.prototype.getPositionFromMatrix=function(n){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(n)};N.prototype.getScaleFromMatrix=function(n){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(n)};N.prototype.getColumnFromMatrix=function(n,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,n)};N.prototype.applyProjection=function(n){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(n)};N.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};N.prototype.distanceToManhattan=function(n){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(n)};N.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};mt.prototype.fromAttribute=function(n,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(n,e,t)};mt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};dt.prototype.getChildByName=function(n){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(n)};dt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};dt.prototype.translate=function(n,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,n)};dt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};dt.prototype.applyMatrix=function(n){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(dt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(n){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=n}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Bn.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Bn.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),_3},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});x1.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Cn.prototype.setLens=function(n,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(n)};Object.defineProperties(ki.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(n){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=n}},shadowCameraLeft:{set:function(n){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=n}},shadowCameraRight:{set:function(n){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=n}},shadowCameraTop:{set:function(n){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=n}},shadowCameraBottom:{set:function(n){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=n}},shadowCameraNear:{set:function(n){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=n}},shadowCameraFar:{set:function(n){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=n}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(n){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=n}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(n){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=n}},shadowMapHeight:{set:function(n){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=n}}});Object.defineProperties(Ut.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Eu},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Eu)}}});Ut.prototype.setDynamic=function(n){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?Eu:il),this};Ut.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Ut.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};pt.prototype.addIndex=function(n){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(n)};pt.prototype.addAttribute=function(n,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(n,new Ut(arguments[1],arguments[2]))):n==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(n,e)};pt.prototype.addDrawCall=function(n,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(n,e)};pt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};pt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};pt.prototype.removeAttribute=function(n){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(n)};pt.prototype.applyMatrix=function(n){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(n)};Object.defineProperties(pt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});fs.prototype.setDynamic=function(n){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(n===!0?Eu:il),this};fs.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};ju.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};ju.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};ju.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};nm.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Qt.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Ve}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(n){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===j_}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(n){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=n}}});Object.defineProperties(ls.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(n){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=n}}});gt.prototype.clearTarget=function(n,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(n),this.clear(e,t,i)};gt.prototype.animate=function(n){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(n)};gt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};gt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};gt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};gt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};gt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};gt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};gt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};gt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};gt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};gt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};gt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};gt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};gt.prototype.enableScissorTest=function(n){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(n)};gt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};gt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};gt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};gt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};gt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};gt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};gt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};gt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};gt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};gt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(gt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=n}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(n){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=n}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(n){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=n===!0?Z_:gl}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(m1.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(os.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=n}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(n){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=n}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=n}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(n){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=n}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(n){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=n}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(n){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=n}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(n){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=n}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(n){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=n}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(n){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=n}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(n){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=n}}});CN.prototype.load=function(n){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new EN().load(n,function(i){e.setBuffer(i)}),this};tm.prototype.updateCubeMap=function(n,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(n,e)};tm.prototype.clear=function(n,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(n,e,t,i)};Ao.crossOrigin=void 0;Ao.loadTexture=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const s=new iN;s.setCrossOrigin(this.crossOrigin);const a=s.load(n,t,void 0,i);return e&&(a.mapping=e),a};Ao.loadTextureCube=function(n,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const s=new nN;s.setCrossOrigin(this.crossOrigin);const a=s.load(n,t,void 0,i);return e&&(a.mapping=e),a};Ao.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Ao.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:G_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=G_);const Gx={speed:1,particleSize:.015,particleOpacity:.8,orbitOpacity:.25,scale:1,haloOpacity:.2,hue:0};function YN(n,e){const t=new nm,i=new Cn(45,1,.1,1e3),s=new gt({canvas:n,alpha:!0,antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2));const a=new po;t.add(a);const l=2.2,u=15e3,d=new Float32Array(u*3),h=new Float32Array(u*3),p=new Ve(10980346),m=new Ve(7346805);let g=0;for(let A=0;A<u;A+=1){const T=Math.acos(-1+2*A/u),B=Math.sqrt(u*Math.PI)*T,U=l*Math.cos(B)*Math.sin(T),q=l*Math.sin(B)*Math.sin(T),ee=l*Math.cos(T),ae=Math.sin(U*3.5)*Math.cos(q*3.5)*Math.sin(ee*3.5)+Math.cos(U*6)*.4;if(ae<=-.1)continue;const oe=1+ae*.1;d[g*3]=U*oe,d[g*3+1]=q*oe,d[g*3+2]=ee*oe;const z=m.clone().lerp(p,ae>.5?1:.3);h[g*3]=z.r,h[g*3+1]=z.g,h[g*3+2]=z.b,g+=1}const y=new pt;y.setAttribute("position",new Ut(d.slice(0,g*3),3)),y.setAttribute("color",new Ut(h.slice(0,g*3),3));const _=new rm({size:.015,vertexColors:!0,transparent:!0,opacity:.8,blending:ja,depthWrite:!1});a.add(new w1(y,_));const S=new ko({color:9133302,transparent:!0,opacity:.25,blending:ja}),M=[],b=[],w=[],C=[];let R=1;for(let A=0;A<6;A+=1){const T=new pt,B=[],U=l*(1.08+Math.random()*.2);for(let ee=0;ee<=90;ee+=1){const ae=ee/90*Math.PI*2;B.push(Math.cos(ae)*U,Math.sin(ae)*U,Math.sin(ae*4)*.1)}T.setAttribute("position",new Ft(B,3)),M.push(T);const q=new Gu(T,S);if(q.rotation.x=Math.random()*Math.PI*2,q.rotation.y=Math.random()*Math.PI*2,a.add(q),A%2!==0){const ee=new Fx(.025,16,16),ae=new rl({color:14239471}),oe=new Bn(ee,ae),z=Math.random()*Math.PI*2;oe.position.set(Math.cos(z)*U,Math.sin(z)*U,0),q.add(oe);const G=new Fx(.08,16,16),W=new rl({color:12616956,transparent:!0,opacity:.2,blending:ja}),V=new Bn(G,W);oe.add(V),b.push(ee,G),w.push(ae,W),C.push(W)}}return{resize(A,T){i.aspect=A/Math.max(1,T),i.updateProjectionMatrix(),s.setSize(A,T,!1);const B=e();A>=1024?(a.position.set(2.5,0,-2),R=1.15,i.position.z=5.5):(a.position.set(0,-1,-3),R=1,i.position.z=6.5),a.scale.setScalar(R*B.scale)},render(){const A=e();_.size=A.particleSize,_.opacity=A.particleOpacity,S.opacity=A.orbitOpacity,C.forEach(T=>T.opacity=A.haloOpacity),a.scale.setScalar(R*A.scale),a.rotation.y+=8e-4*A.speed,a.rotation.x+=3e-4*A.speed,a.children.forEach((T,B)=>{T.type==="Line"&&(T.rotation.z+=4e-4*A.speed*(B%2===0?1:-1))}),s.render(t,i)},dispose(){y.dispose(),_.dispose(),S.dispose(),M.forEach(A=>A.dispose()),b.forEach(A=>A.dispose()),w.forEach(A=>A.dispose()),s.dispose()}}}function qN({className:n="",...e}){const t=Y.useRef(null),i=Y.useRef(null),s=Y.useRef({...Gx,...e});return s.current={...Gx,...e},Y.useEffect(()=>{const a=t.current,l=i.current;if(!a||!l)return;const u=YN(l,()=>s.current);let d=0,h=!0;const p=()=>{const _=a.getBoundingClientRect();u.resize(_.width,_.height),u.render()},m=()=>{u.render(),d=h&&!document.hidden?requestAnimationFrame(m):0},g=new ResizeObserver(p),y=new IntersectionObserver(([_])=>{h=(_==null?void 0:_.isIntersecting)??!0,h&&!d&&(d=requestAnimationFrame(m)),!h&&d&&(cancelAnimationFrame(d),d=0)});return g.observe(a),y.observe(a),p(),d=requestAnimationFrame(m),()=>{d&&cancelAnimationFrame(d),g.disconnect(),y.disconnect(),u.dispose()}},[]),te.jsx("div",{ref:t,className:`threeui-background orbital-sphere${n?` ${n}`:""}`,children:te.jsx("canvas",{ref:i,style:{filter:`hue-rotate(${s.current.hue}deg)`}})})}const cp=[.22,1,.36,1],$N={initial:{opacity:0,y:24,filter:"blur(6px)"},enter:{opacity:1,y:0,filter:"blur(0px)",transition:{duration:.6,ease:cp,when:"beforeChildren",staggerChildren:.08}},exit:{opacity:0,y:-18,filter:"blur(6px)",transition:{duration:.4,ease:cp}}};function qu({children:n,className:e=""}){return te.jsx(Mt.main,{className:`page ${e}`,variants:$N,initial:"initial",animate:"enter",exit:"exit",children:n})}function $n({children:n,className:e="",delay:t=0,y:i=28}){const s=Y.useRef(null),a=qC(s,{once:!0,amount:.25});return te.jsx(Mt.div,{ref:s,className:e,initial:{opacity:0,y:i},animate:a?{opacity:1,y:0}:{opacity:0,y:i},transition:{duration:.7,ease:cp,delay:t},children:n})}const ZN=["Precision","in","Finance"],JN=["Passion","for","People"],KN=[{year:"2025 — Present",role:"Assistant Coordinator — JYEP",org:"City Montessori School, Lucknow",detail:"Coordinate the Joyful Yatra Enabling Program: scheduling, finance tracking, and keeping student-led initiatives on course."},{year:"2024",role:"B.Com Graduate",org:"University of Lucknow",detail:"Built a foundation in accounting, economics, and business administration — the analytical backbone behind my coordination work."},{year:"2023 — 2024",role:"Marketing & Operations Support",org:"Campus Initiatives",detail:"Ran outreach campaigns and helped organize events that grew program participation across departments."}];function Wx(){const n=Y.useRef(null),{scrollYProgress:e}=V_({target:n,offset:["start start","end start"]}),t=My(e,[0,1],[0,-120]),i=My(e,[0,.8],[1,0]),[s,a]=Y.useState(0);return fC(e,"change",l=>{l>.85&&a(1)}),te.jsxs(qu,{children:[te.jsxs("section",{id:"home",className:"hero",ref:n,children:[te.jsxs(Mt.div,{style:{y:t,opacity:i},className:"hero-copy",children:[te.jsxs(Mt.div,{className:"eyebrow",initial:{opacity:0,y:-16},animate:{opacity:1,y:0},transition:{duration:.5},children:[te.jsx("span",{className:"dot"}),"Assistant Coordinator · City Montessori School"]}),te.jsxs(Mt.h1,{className:"hero-headline",initial:"hidden",animate:"visible",variants:{hidden:{},visible:{transition:{staggerChildren:.09,delayChildren:.15}}},children:[te.jsx(Mt.span,{style:{display:"block"},children:ZN.map(l=>te.jsx(Mt.span,{variants:{hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.22,1,.36,1]}}},style:{display:"inline-block",marginRight:"0.28em"},children:l==="Finance"?te.jsx("em",{children:l}):l},l))}),te.jsx(Mt.span,{style:{display:"block"},children:JN.map(l=>te.jsx(Mt.span,{variants:{hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.6,ease:[.22,1,.36,1]}}},style:{display:"inline-block",marginRight:"0.28em"},children:l==="People"?te.jsx("em",{children:l}):l},l))})]}),te.jsx(Mt.p,{className:"hero-subtitle",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4,ease:[.22,1,.36,1]},children:"I'm Saman Rizvi — a B.Com graduate and Assistant Coordinator for the Joyful Yatra Enabling Program at City Montessori School, Lucknow. I work across finance coordination, marketing, and operations to keep student initiatives running smoothly."}),te.jsxs(Mt.div,{className:"cta-group",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.55,ease:[.22,1,.36,1]},children:[te.jsx(Mt.div,{whileHover:{scale:1.04,y:-2},whileTap:{scale:.97},children:te.jsxs(ru,{to:"/work",className:"btn btn-primary",children:["Explore My Work",te.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:te.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})}),te.jsx(Mt.div,{whileHover:{scale:1.04},whileTap:{scale:.97},children:te.jsx(ru,{to:"/contact",className:"btn btn-secondary",children:"Get In Touch"})})]})]}),te.jsxs(Mt.div,{className:"hero-portrait",initial:{opacity:0,scale:.9,rotateY:12},animate:{opacity:1,scale:1,rotateY:0},transition:{duration:.9,ease:[.22,1,.36,1],delay:.2},whileHover:{scale:1.03,rotate:-1.5},children:[te.jsx(qN,{className:"hero-orbit"}),te.jsx("span",{className:"corner-accent"}),te.jsx("span",{className:"initials",children:"SR"})]})]}),te.jsx("section",{className:"snap-strip",children:[{k:"1+",v:"Year in Coordination"},{k:"200+",v:"Students Guided"},{k:"5+",v:"Programs Run"},{k:"10+",v:"Events Co-led"}].map((l,u)=>te.jsxs($n,{delay:u*.08,className:"snap-item",children:[te.jsx("div",{className:"snap-k",children:l.k}),te.jsx("div",{className:"snap-v",children:l.v})]},l.v))}),te.jsxs("section",{className:"home-timeline",children:[te.jsxs($n,{children:[te.jsx("span",{className:"section-kicker",children:"The Path So Far"}),te.jsx("h2",{className:"section-title",children:"A short, deliberate journey"})]}),te.jsx("div",{className:"timeline",children:KN.map((l,u)=>te.jsxs($n,{delay:u*.1,className:"timeline-row",children:[te.jsx("div",{className:"timeline-year",children:l.year}),te.jsxs("div",{className:"timeline-body",children:[te.jsx("h3",{children:l.role}),te.jsx("span",{className:"timeline-org",children:l.org}),te.jsx("p",{children:l.detail})]})]},l.role))}),te.jsx($n,{className:"home-about-cta",children:te.jsxs(ru,{to:"/about",className:"link-arrow",children:["More about me ",te.jsx("span",{children:"→"})]})})]})]})}const QN=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lumira - Advanced Analytics</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>

<body class="relative min-h-screen overflow-x-hidden flex flex-col font-sans text-[#F2F4FB] bg-[#070914] selection:bg-[#7FC4FF]/30 selection:text-[#7FC4FF]">

    <!-- WebGL Constellation Canvas Shell & Depth Overlay -->
    <div class="fixed inset-0 -z-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_#0E1222_0%,_#070914_100%)]"></div>
    <div class="fixed inset-0 -z-10 pointer-events-none">
        <canvas id="constellationCanvas" class="w-full h-full"></canvas>
    </div>
    <div class="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-transparent via-[#0E1222]/40 to-[#070914] opacity-80"></div>

    <!-- Header (Elevated Glassy UI) -->
    <nav class="w-full relative z-20 bg-[#0E1222]/40 backdrop-blur-md border-b border-[#1C2236] shadow-[0_2px_8px_rgba(0,0,0,0.30)]">
        <div class="flex justify-between items-center py-5 px-6 md:px-12 max-w-[90rem] mx-auto">
            
            <!-- Brand -->
            <div class="flex items-center gap-2 text-[#F2F4FB]">
                <div class="relative h-8 w-8 bg-transparent border border-[#1C2236] flex items-center justify-center rounded-md" style="box-shadow: 0 2px 8px rgba(0,0,0,0.30);">
                    <span class="h-2 w-2 rounded-full bg-[#E6C879]" style="box-shadow: 0 0 12px rgba(230,200,121,0.6);"></span>
                </div>
                <span class="text-xl font-thin tracking-tight uppercase ml-1">Lumira</span>
            </div>

            <div class="hidden md:flex items-center gap-10 text-xs font-normal uppercase text-[#9AA3BC] tracking-widest">
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Features</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Use Cases</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Developers</a>
                <a href="#" class="hover:text-[#F2F4FB] transition-colors hover:shadow-[0_0_8px_rgba(127,196,255,0.4)]">Pricing</a>
            </div>

            <!-- Gradient Border Shell CTA -->
            <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/30 to-transparent">
                <a href="#" class="block bg-[#0E1222]/80 backdrop-blur-sm text-[#E6C879] px-6 py-2.5 rounded-full text-xs font-normal uppercase tracking-widest hover:bg-[#E6C879] hover:text-[#0E1222] transition-colors">
                    Get Access
                </a>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center relative z-10 px-6 pt-24 pb-28 md:pt-32 lg:pt-40">

        <div class="max-w-5xl mx-auto w-full flex flex-col items-center text-center">

            <!-- Trust Indicators -->
            <div class="flex items-center gap-4 mb-12 fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);">
                <div class="flex -space-x-3">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg" alt="User 1" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-30 opacity-80 mix-blend-luminosity">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" alt="User 2" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-20 opacity-80 mix-blend-luminosity">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg" alt="User 3" class="w-12 h-12 rounded-full border border-[#1C2236] object-cover relative z-10 opacity-80 mix-blend-luminosity">
                </div>

                <div class="flex flex-col items-start gap-1">
                    <div class="flex items-center text-[#E6C879] text-lg">
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                        <iconify-icon icon="solar:star-linear" stroke-width="1.5"></iconify-icon>
                    </div>
                    <span class="text-xs font-normal uppercase text-[#9AA3BC] tracking-widest">Trusted by 10,000+ data teams</span>
                </div>
            </div>

            <!-- Headline (Ultralight System Display - GSAP Masked Reveal) -->
            <h1 class="masked-reveal text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight text-[#F2F4FB] text-center leading-tight max-w-5xl cursor-default">
                Uncover hidden patterns<br />with intelligent analytics
            </h1>

            <!-- Subheadline (GSAP Masked Reveal) -->
            <p class="masked-reveal mt-8 text-lg md:text-xl text-[#9AA3BC] max-w-2xl font-normal leading-relaxed">
                Lumira synthesizes complex datasets, disparate sources, and endless metrics into actionable, automated insights that guide your decisions.
            </p>

            <!-- Chunky CTAs to Refined Border Shells -->
            <div class="flex flex-col sm:flex-row items-center gap-6 mt-14 w-full justify-center fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.5s;">
                
                <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/40 to-transparent w-full sm:w-auto" style="box-shadow: 0 16px 40px rgba(0,0,0,0.36);">
                    <a href="#" class="w-full sm:w-auto bg-[#E6C879] text-[#0E1222] px-12 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-[#E6C879]/90 transition-colors flex items-center justify-center">
                        Get Access
                    </a>
                </div>

                <div class="p-[1px] rounded-full bg-gradient-to-br from-[#E6C879]/16 to-transparent w-full sm:w-auto" style="box-shadow: 0 2px 8px rgba(0,0,0,0.30);">
                    <a href="#" class="w-full sm:w-auto bg-[#0E1222]/60 backdrop-blur-md text-[#F2F4FB] px-10 py-4 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-[#1C2236]/80 transition-colors flex items-center justify-center gap-2 group">
                        Explore Demo
                        <iconify-icon icon="solar:arrow-right-linear" class="text-xl text-[#7FC4FF] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" stroke-width="1.5"></iconify-icon>
                    </a>
                </div>

            </div>
        </div>

        <!-- Logos Section -->
        <div class="w-full mt-28 md:mt-32 max-w-6xl mx-auto flex flex-col items-center fade-in-up" style="opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;">
            <p class="text-xs font-normal text-[#5C668A] mb-12 tracking-widest uppercase">Powering data-driven enterprises</p>

            <div class="flex flex-wrap justify-center items-center gap-10 md:gap-16">

                <div class="flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:box-linear" stroke-width="1.5"></iconify-icon>
                    Quantus
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:globus-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    NexusData
                </div>

                <div class="flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    OmniStream
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:routing-2-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    Veridian
                </div>

                <div class="flex items-center gap-2 text-lg font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    <iconify-icon icon="solar:letter-linear" class="text-xl" stroke-width="1.5"></iconify-icon>
                    ApexMetrics
                </div>

                <div class="hidden lg:flex items-center gap-2 text-xl font-thin text-[#9AA3BC] hover:text-[#7FC4FF] hover:shadow-[0_0_12px_rgba(127,196,255,0.2)] transition-all cursor-default">
                    Zenith
                </div>

            </div>
        </div>

    </main>

    <script>
        // WebGL Drifting Nodes & Network Logic
        const canvas = document.getElementById('constellationCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let nodes = [];
        const LINK = 160; 
        const MAX_NODES = window.innerWidth < 768 ? 40 : 85;
        let pointer = { x: -1000, y: -1000 };

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
        }
        
        window.addEventListener('resize', () => {
            resize();
            initNodes();
        });
        resize();

        function initNodes() {
            nodes = [];
            for(let i=0; i<MAX_NODES; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 2.4 + 1.8
                });
            }
        }
        initNodes();

        // Pointer gravity tracker
        document.addEventListener('mousemove', e => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
        });

        // Clear pointer on leave
        document.addEventListener('mouseleave', () => {
            pointer.x = -1000;
            pointer.y = -1000;
        });

        function dist(a, b) {
            return Math.hypot(a.x - b.x, a.y - b.y);
        }

        // Render Loop
        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            // Draw Links first so nodes sit crisp on top
            ctx.strokeStyle = '#E6C879';
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const d = dist(nodes[i], nodes[j]);
                    if (d < LINK) {
                        ctx.globalAlpha = 0.22 + (1 - d/LINK) * 0.55;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                
                // Bounce off edges
                if(node.x < 0 || node.x > width) node.vx *= -1;
                if(node.y < 0 || node.y > height) node.vy *= -1;

                // Gentle Pointer gravity
                const pd = dist(node, pointer);
                if(pd < 220) {
                    node.x -= (node.x - pointer.x) * 0.005;
                    node.y -= (node.y - pointer.y) * 0.005;
                }
                
                // Draw Node (Pale Gold) — core + soft halo so particles read at retina scale
                const pulse = 0.78 + Math.sin(Date.now() * 0.001 + node.x) * 0.22;
                ctx.fillStyle = '#E6C879';
                ctx.globalAlpha = pulse * 0.28;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius * 2.4, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = pulse;
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            ctx.globalAlpha = 1;
            requestAnimationFrame(animateCanvas);
        }
        
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            animateCanvas();
        }

        // --- Intersection Observer for structural fade-ins ---
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
        });

        // --- GSAP Masked Staggered Word Reveal ---
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof gsap !== 'undefined' && !prefersReducedMotion) {
                gsap.registerPlugin(ScrollTrigger);
                
                const revealElements = document.querySelectorAll('.masked-reveal');
                
                revealElements.forEach(el => {
                    // Non-destructive split that respects <br> tags
                    const html = el.innerHTML;
                    const fragments = html.split(/(<br\\s*\\/?>|\\s+)/);
                    el.innerHTML = '';
                    
                    fragments.forEach(frag => {
                        if (/<br/i.test(frag)) {
                            el.appendChild(document.createElement('br'));
                        } else if (frag.trim() !== '') {
                            const wrapper = document.createElement('span');
                            wrapper.style.cssText = 'overflow: hidden; display: inline-block; vertical-align: bottom; padding-top: 0.1em; margin-top: -0.1em;';
                            
                            const inner = document.createElement('span');
                            inner.className = 'reveal-word';
                            inner.style.cssText = 'display: inline-block; transform: translateY(110%); will-change: transform;';
                            inner.innerHTML = frag;
                            
                            wrapper.appendChild(inner);
                            el.appendChild(wrapper);
                        } else {
                            // Preserve spaces
                            el.appendChild(document.createTextNode(frag));
                        }
                    });

                    // Trigger the animation
                    gsap.to(el.querySelectorAll('.reveal-word'), {
                        y: '0%',
                        duration: 1.2,
                        ease: 'power4.out',
                        stagger: 0.04,
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                        }
                    });
                });
            }
        });
    <\/script>
</body>
</html>`,eF=`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zenith Compute Network</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:wght@400&display=swap" rel="stylesheet">
</head>
<body class="bg-[#030509] min-h-screen flex items-center justify-center p-4 md:p-12 font-sans antialiased text-[#FFFFFF] overflow-x-hidden selection:bg-[#60A5FA] selection:text-[#030509]">

    <!-- Gradient Border Shell Technique -->
    <div class="w-full max-w-[1440px] shadow-[0px_100px_80px_rgba(0,0,0,0.12),_0px_41.8px_33.4px_rgba(0,0,0,0.086),_0px_22.3px_17.9px_rgba(0,0,0,0.07)]" style="display:inline-block; padding:1px; border-radius:24px; background:linear-gradient(to right bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0));">
        
        <!-- Main Inner Surface -->
        <div class="relative w-full flex flex-col md:flex-row overflow-hidden min-h-[600px] md:min-h-[650px]" style="background:#030509; border-radius:23px; box-shadow:rgba(255, 255, 255, 0.02) 0px 0px 40px 0px inset;">
            
            <!-- Canvas Particle System Background Field -->
            <canvas id="particle-canvas" class="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-100"></canvas>

            <!-- Matte Noise Texture Overlay -->
            <div class="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-10" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>

            <!-- Left Column: Copy & Controls -->
            <div class="w-full md:w-[38%] px-8 lg:px-16 py-10 md:py-14 flex flex-col justify-between relative z-20 shrink-0 border-r border-white/5">
                
                <!-- Lineart Detail: Corner Brackets -->
                <div class="absolute top-6 left-6 w-3 h-3 border-t border-l border-white/20"></div>
                <div class="absolute top-6 right-6 w-3 h-3 border-t border-r border-white/20"></div>
                <div class="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-white/20"></div>
                <div class="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-white/20"></div>

                <!-- Top Badge -->
                <div class="fade-in-el opacity-0 inline-flex items-center gap-2 px-3 py-1 text-xs font-light tracking-widest uppercase mb-16 border border-white/10 text-[#60A5FA] rounded-full w-max bg-white/5 backdrop-blur-sm">
                    <iconify-icon icon="solar:server-square-linear" stroke-width="1.5" class="text-sm"></iconify-icon>
                    ZENITH COMPUTE
                </div>

                <!-- Heading (Playfair Display) -->
                <div>
                    <h1 id="hero-heading" class="text-5xl md:text-7xl tracking-tight text-[#FFFFFF] mb-6 leading-none opacity-0 font-light" style="font-family: 'Playfair Display', serif;">
                        Infinite execution threads.<br>The cognitive backbone.
                    </h1>

                    <!-- Body Text -->
                    <p class="fade-in-el opacity-0 text-[#9CA3AF] text-lg leading-relaxed max-w-[320px] font-light mb-8" style="font-family: 'Inter', sans-serif;">
                        An autonomous state-management protocol synchronizing distributed workloads across edge micro-clusters and centralized servers. Adjust the target environment to refine processing speed.
                    </p>
                    
                    <!-- Primary Action Button -->
                    <button class="fade-in-el opacity-0 bg-[#60A5FA] text-[#030509] px-8 py-3.5 rounded-full text-sm font-light w-max hover:bg-blue-300 transition-colors flex items-center gap-2" style="font-family: 'Inter', sans-serif;">
                        Provision Network
                        <iconify-icon icon="solar:cpu-linear" stroke-width="1.5" class="text-lg"></iconify-icon>
                    </button>
                </div>

                <!-- Custom Slider Control -->
                <div class="fade-in-el opacity-0 mt-16 pt-8 w-full relative">
                    <!-- Track Line -->
                    <div class="w-full h-[1px] bg-white/10 relative">
                        <!-- Thumb / Active Indicator -->
                        <div class="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#60A5FA] rounded-full shadow-[0_0_12px_rgba(96,165,250,0.6)]"></div>
                    </div>
                    
                    <!-- Labels -->
                    <div class="flex justify-between mt-4 w-full" style="font-family: 'Inter', sans-serif;">
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Local</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Edge</span>
                        <span class="text-xs font-light tracking-widest uppercase text-[#60A5FA] cursor-default">Ring</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Core</span>
                        <span class="text-xs font-light tracking-widest uppercase text-white/30 transition-colors hover:text-[#60A5FA] cursor-pointer">Cloud</span>
                    </div>
                </div>

            </div>

            <!-- Right Column: Media Frame -->
            <div class="w-full md:w-[62%] relative bg-transparent overflow-hidden min-h-[400px] md:min-h-0 border-t md:border-t-0 border-white/5 pointer-events-none" style="transform-style: preserve-3d;">
                
                <!-- Deep Integration Gradients -->
                <div class="absolute inset-0 z-30 pointer-events-none bg-gradient-to-r from-[#030509] via-transparent to-transparent opacity-90"></div>
                <div class="absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-[#030509] via-[#030509]/30 to-transparent opacity-80"></div>
                
                <!-- Glassmorphism Floating Logic Card -->
                <div id="floating-card" class="absolute top-[25%] right-[12%] z-40 bg-white/[0.03] backdrop-blur-xl border border-[#60A5FA]/20 p-5 rounded-2xl shadow-[0_22px_40px_rgba(0,0,0,0.4)] w-[220px] text-[#60A5FA] pointer-events-auto">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-8 h-8 rounded-full bg-[#60A5FA]/10 border border-[#60A5FA]/20 text-[#60A5FA] flex items-center justify-center">
                            <iconify-icon icon="solar:transfer-horizontal-linear" stroke-width="1.5"></iconify-icon>
                        </div>
                        <span class="text-xs uppercase tracking-widest font-light" style="font-family: 'Inter', sans-serif;">Throughput</span>
                    </div>
                    <div class="text-3xl leading-9 tracking-tighter mb-1" style="font-family: 'Inter', sans-serif;">128.6 PB/s</div>
                    <div class="text-xs uppercase tracking-widest text-[#60A5FA]/60" style="font-family: 'Inter', sans-serif;">Sync Efficiency</div>
                </div>

            </div>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // --- ASCII Particle System Implementation ---
            const canvas = document.getElementById('particle-canvas');
            const ctx = canvas.getContext('2d');

            let width, height;
            let nodes = [];
            let beams = [];
            const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*()'.split('');
            let mouse = { x: -1000, y: -1000 };

            function resize() {
                width = canvas.clientWidth;
                height = canvas.clientHeight;
                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
            }

            window.addEventListener('resize', () => {
                resize();
                initParticles();
            });

            window.addEventListener('mousemove', e => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });

            function initParticles() {
                nodes = Array.from({ length: 90 }).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vy: (Math.random() * 0.4) + 0.1,
                    char: chars[Math.floor(Math.random() * chars.length)]
                }));

                beams = Array.from({ length: 25 }).map(() => ({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    length: Math.random() * 100 + 50,
                    speed: (Math.random() * 6) + 3,
                    opacity: Math.random() * 0.5 + 0.3
                }));
            }

            resize();
            initParticles();

            function draw() {
                ctx.clearRect(0, 0, width, height);

                // 1. Upward Beams (Fast)
                beams.forEach(b => {
                    b.y -= b.speed;
                    if (b.y + b.length < 0) {
                        b.y = height + 100;
                        b.x = Math.random() * width;
                    }
                    let g = ctx.createLinearGradient(b.x, b.y, b.x, b.y + b.length);
                    g.addColorStop(0, \`rgba(96, 165, 250, \${b.opacity})\`);
                    g.addColorStop(1, 'transparent');
                    ctx.strokeStyle = g;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(b.x, b.y);
                    ctx.lineTo(b.x, b.y + b.length);
                    ctx.stroke();
                });

                // 2. Interactive Nodes (ASCII)
                ctx.font = '12px monospace';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Proximity Lines
                ctx.lineWidth = 0.5;
                for(let i = 0; i < nodes.length; i++) {
                    let n1 = nodes[i];
                    for(let j = i + 1; j < nodes.length; j++) {
                        let n2 = nodes[j];
                        let d = Math.hypot(n1.x - n2.x, n1.y - n2.y);
                        if(d < 120) {
                            ctx.strokeStyle = \`rgba(156, 163, 175, \${0.15 * (1 - d/120)})\`;
                            ctx.beginPath();
                            ctx.moveTo(n1.x, n1.y);
                            ctx.lineTo(n2.x, n2.y);
                            ctx.stroke();
                        }
                    }
                }

                nodes.forEach(n => {
                    n.y += n.vy; // Slow drift
                    if(n.y > height + 20) {
                        n.y = -20;
                        n.x = Math.random() * width;
                    }

                    let dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);

                    // Dynamic Character Swap
                    if (dist < 180 || Math.random() > 0.98) n.char = chars[Math.floor(Math.random() * chars.length)];

                    // Mouse Connection
                    if (dist < 180) {
                        ctx.strokeStyle = \`rgba(96, 165, 250, \${0.5 * (1 - dist/180)})\`;
                        ctx.beginPath(); 
                        ctx.moveTo(n.x, n.y); 
                        ctx.lineTo(mouse.x, mouse.y); 
                        ctx.stroke();
                    }

                    ctx.fillStyle = dist < 180 ? '#60A5FA' : 'rgba(156, 163, 175, 0.4)';
                    ctx.fillText(n.char, n.x, n.y);
                });

                requestAnimationFrame(draw);
            }
            draw();

            // --- GSAP Timeline Reveals ---
            const heading = document.getElementById('hero-heading');
            
            // Staggered vertical masked word setup
            const words = heading.innerHTML.trim().split(/(<br\\s*\\/?>|\\s+)/).filter(w => w.trim().length > 0 || w.toLowerCase().includes('<br'));
            let newHTML = '';
            words.forEach(word => {
                if(word.toLowerCase().includes('<br')) {
                    newHTML += '<br/>';
                } else if (word.trim() !== '') {
                    newHTML += \`<span class="inline-block overflow-hidden align-bottom pb-1 -mb-1"><span class="reveal-word inline-block translate-y-full opacity-0">\${word}</span></span> \`;
                }
            });
            heading.innerHTML = newHTML;
            heading.style.opacity = 1;

            const tl = gsap.timeline({ 
                scrollTrigger: {
                    trigger: heading,
                    start: "top 85%"
                },
                delay: 0.1 
            });

            tl.to('.reveal-word', {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.04,
                ease: "power4.out"
            }, 0);

            tl.to('.fade-in-el', {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out"
            }, 0.6);

            // Canvas Timeline Integration
            tl.to(canvas, { opacity: 1, duration: 2, ease: "power2.inOut" }, 0.2);

            // Floating Logic independent 3D shifts
            gsap.to('#floating-card', {
                y: "-=12",
                rotationX: 4,
                rotationY: -4,
                duration: 4,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            });
        });
    <\/script>
</body>
</html>`,tF=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Omnichannel Data Intelligence</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400&display=swap" rel="stylesheet">
</head>
<body class="font-sans antialiased text-white m-0 p-0 h-screen w-full flex flex-col overflow-hidden selection:bg-blue-500/30 bg-black relative" style="font-family: 'Inter', sans-serif;">

    <!-- Background Image Stage -->
    <div class="absolute inset-0 z-0 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_3840w.jpg')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen"></div>
    
    <!-- Directional Tonal Washes for Readability -->
    <div class="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    <div class="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

    <!-- Visible Structural Grid Scaffold -->
    <div class="absolute inset-0 z-10 pointer-events-none flex justify-center w-full">
        <div class="w-full max-w-7xl h-full grid grid-cols-1 md:grid-cols-4 border-x border-white/5 divide-y-0 md:divide-x divide-white/5 relative">
            <!-- Structural Line Markers -->
            <div class="hidden md:block absolute top-[20%] -left-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute top-[20%] -right-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute bottom-[35%] -left-1 w-2 h-[1px] bg-white/30"></div>
            <div class="hidden md:block absolute bottom-[35%] -right-1 w-2 h-[1px] bg-white/30"></div>
            <!-- Grid columns -->
            <div class="relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block relative"><div class="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div></div>
            <div class="hidden md:block"></div>
        </div>
    </div>

    <!-- Controls Box (Top Right Anchored) -->
    <div class="absolute top-6 right-6 md:top-8 md:right-8 z-40 flex gap-3">
        <!-- Gradient Border Treatment Applied via wrapper -->
        <div class="w-10 h-10 rounded p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent">
            <button id="pauseBtn" class="w-full h-full rounded bg-black/40 backdrop-blur-md flex items-center justify-center text-[#6a9ded] hover:bg-white/10 transition-all cursor-pointer outline-none focus:ring-1 focus:ring-[#6a9ded]/50 group" aria-label="Pause Animation">
                <iconify-icon icon="solar:pause-linear" width="18" height="18" stroke-width="1.5" class="group-hover:scale-110 transition-transform"></iconify-icon>
            </button>
        </div>
        <div class="w-10 h-10 rounded p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent">
            <button class="w-full h-full rounded bg-black/40 backdrop-blur-md flex items-center justify-center text-[#6a9ded] hover:bg-white/10 transition-all cursor-pointer outline-none focus:ring-1 focus:ring-[#6a9ded]/50 group" aria-label="Settings">
                <iconify-icon icon="solar:settings-linear" width="18" height="18" stroke-width="1.5" class="group-hover:rotate-90 transition-transform duration-500"></iconify-icon>
            </button>
        </div>
    </div>

    <!-- Additive Canvas Overlay -->
    <canvas id="particle-canvas" class="absolute inset-0 w-full h-full z-20 pointer-events-none"></canvas>

    <!-- Anchored Content Overlay low in viewport -->
    <main class="relative z-30 flex-grow w-full flex flex-col justify-end pb-12 md:pb-24">
        <div class="w-full max-w-7xl mx-auto px-6 md:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 items-end">
                
                <!-- Primary Headline Block -->
                <header class="md:col-span-2 flex flex-col gap-6">
                    <h1 class="text-4xl md:text-5xl font-extralight tracking-tight leading-tight text-white drop-shadow-lg">
                        <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Omnichannel</span></span> <br>
                        <span class="text-white/60">
                            <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Data</span></span>
                            <span class="inline-block overflow-hidden align-bottom"><span class="inline-block gsap-word translate-y-full">Intelligence</span></span>
                        </span>
                    </h1>
                    <p id="split-text-target" class="text-sm md:text-base font-extralight text-white/50 max-w-sm leading-relaxed tracking-wide">
                        Empowering next-generation analytics platforms with real-time distributed insights and secure, scalable hybrid-cloud processing architectures.
                    </p>
                </header>

                <!-- Secondary Framed Grid Lane (Stats) with Premium Gradient Border -->
                <div class="md:col-span-2 relative p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent backdrop-blur-sm">
                    <!-- Corner structural crosses -->
                    <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 border-t border-l border-white/40 z-10"></div>
                    <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 border-t border-r border-white/40 z-10"></div>
                    <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 border-b border-l border-white/40 z-10"></div>
                    <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 border-b border-r border-white/40 z-10"></div>

                    <!-- Grid Layout for Stats inside Gradient Wrapper -->
                    <div class="grid grid-cols-2 gap-px bg-white/5 w-full h-full relative z-0">
                        <!-- Stat 1 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">120+</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Edge<br>Nodes</span>
                        </div>

                        <!-- Stat 2 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">5.2P</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Data<br>Indexed</span>
                        </div>

                        <!-- Stat 3 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">&lt;10ms</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Query<br>Latency</span>
                        </div>

                        <!-- Stat 4 -->
                        <div class="bg-black/60 p-6 flex flex-col gap-2 hover:bg-black/40 transition-colors">
                            <span class="text-3xl font-extralight tracking-tight text-[#6a9ded] overflow-hidden"><span class="inline-block gsap-word translate-y-full">3.4B+</span></span>
                            <span class="text-xs font-light uppercase tracking-widest text-white/40 leading-tight">Event<br>Triggers</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>

    <script>
        // Set up the masked text reveal dynamically for the paragraph text
        const p = document.getElementById('split-text-target');
        const text = p.innerText.trim();
        const words = text.split(/\\s+/);
        p.innerHTML = '';
        words.forEach(word => {
            p.innerHTML += \`<span class="inline-block overflow-hidden align-bottom pb-1"><span class="inline-block gsap-word translate-y-full">\${word}</span></span> \`;
        });

        // Initialize GSAP ScrollTrigger for masked reveal
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('.gsap-word', {
            y: "0%",
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.04,
            scrollTrigger: {
                trigger: "main",
                start: "top 95%"
            }
        });

        // Canvas Particle Network (Original logic preserved)
        const canvas = document.getElementById('particle-canvas');
        const ctx = canvas.getContext('2d');
        const pauseBtn = document.getElementById('pauseBtn');
        let isPaused = false;

        let width, height;
        let particles = [];
        const particleCount = 200;
        const speedMultiplier = 1.1;

        let originX, originY;

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            originX = width / 2;
            originY = height * 0.7; // Lowered slightly to fit grid stage better
        }

        class Particle {
            constructor() {
                this.reset();
                this.z = Math.random() * 1000;
            }

            reset() {
                const angle = Math.random() * Math.PI * 2;
                const radius = Math.random() * 600;
                
                this.x = Math.cos(angle) * radius;
                this.y = (Math.sin(angle) * radius) - 150; 
                
                this.z = 1000; 
                this.speed = (Math.random() * 2 + 1) * speedMultiplier;
                
                // Restrained blue and white hues for technical atmosphere
                const hue = Math.random() > 0.5 ? '200, 220, 255' : '106, 157, 237';
                this.color = \`rgb(\${hue})\`;
                this.length = Math.random() * 2 + 0.5;
            }

            update() {
                this.z -= this.speed;
                if (this.z <= 0) {
                    this.reset();
                }
            }

            draw() {
                const fov = 300; 
                
                const scale = fov / this.z;
                const px = originX + this.x * scale;
                const py = originY + this.y * scale;

                const prevZ = this.z + this.speed * this.length;
                const prevScale = fov / prevZ;
                const prevPx = originX + this.x * prevScale;
                const prevPy = originY + this.y * prevScale;

                let opacity = 1 - (this.z / 1000);
                if (this.z < 100) opacity = this.z / 100; 
                if (opacity < 0) opacity = 0;

                ctx.beginPath();
                ctx.moveTo(prevPx, prevPy);
                ctx.lineTo(px, py);
                
                ctx.strokeStyle = this.color.replace('rgb', 'rgba').replace(')', \`, \${opacity * 0.9})\`);
                // Hairline strokes stay crisp under retina DPR scaling
                ctx.lineWidth = Math.max(0.25, (1 - (this.z / 1000)) * 0.4);
                ctx.lineCap = 'butt';
                ctx.lineJoin = 'miter';
                
                ctx.stroke();
            }
        }

        function init() {
            resize();
            window.addEventListener('resize', resize);
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            animate();
        }

        function animate() {
            requestAnimationFrame(animate);

            if (!isPaused) {
                // Faster fade keeps streaks sharp instead of smeared
                ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
                ctx.fillRect(0, 0, width, height);

                particles.forEach(p => {
                    p.update();
                    p.draw();
                });
            }
        }

        pauseBtn.addEventListener('click', () => {
            isPaused = !isPaused;
            const icon = pauseBtn.querySelector('iconify-icon');
            if (isPaused) {
                icon.setAttribute('icon', 'solar:play-linear');
            } else {
                icon.setAttribute('icon', 'solar:pause-linear');
            }
        });

        init();
    <\/script>
</body>
</html>`,nF=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus Gateway</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300&display=swap" rel="stylesheet">
</head>
<body class="bg-black text-slate-300 antialiased min-h-screen flex flex-col selection:bg-slate-700 selection:text-white relative" style="font-family: 'Inter', sans-serif;">

    <!-- Global Dither Overlay -->
    <div class="fixed inset-0 z-50 pointer-events-none opacity-[0.15]" style="background-image: url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%202%202%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23ffffff%22%2F%3E%3Crect%20x%3D%221%22%20y%3D%221%22%20width%3D%221%22%20height%3D%221%22%20fill%3D%22%23ffffff%22%2F%3E%3C%2Fsvg%3E'); background-size: 2px 2px;"></div>

    <!-- Visualization Background -->
    <div class="fixed inset-0 z-0 overflow-hidden bg-black">
        <div class="absolute inset-0 z-0 opacity-10" style="background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.01) 0%, rgba(0, 0, 0, 0) 80%);"></div>
        <canvas id="flow-canvas" class="absolute inset-0 w-full h-full z-10"></canvas>
    </div>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center relative z-30 px-6 py-12 min-h-screen w-full">
        
        <!-- Premium Login Card with Hover Border Gradient -->
        <div class="max-w-md w-full bg-black/95 backdrop-blur-xl rounded-2xl p-7 md:p-8 shadow-2xl flex flex-col relative group">
            
            <!-- Base Border -->
            <div class="absolute inset-0 border border-white/[0.04] rounded-2xl pointer-events-none transition-colors duration-500 group-hover:border-transparent"></div>
            
            <!-- Hover Gradient Border -->
            <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.15),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

            <!-- Header Text -->
            <div class="text-center mb-8 w-full relative z-20">
                <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/50 border border-slate-700/50 mb-6 shadow-inner">
                    <iconify-icon icon="solar:cpu-bolt-linear" width="24" height="24" stroke-width="1.5" class="text-slate-200"></iconify-icon>
                </div>
                <h1 id="reveal-title" class="text-3xl md:text-4xl font-thin tracking-tight text-white leading-tight mb-3 uppercase flex flex-wrap justify-center gap-x-2">
                    <span class="overflow-hidden inline-block pt-1"><span class="reveal-word inline-block translate-y-[120%]">Nexus</span></span>
                    <span class="overflow-hidden inline-block pt-1"><span class="reveal-word inline-block translate-y-[120%]">Gateway</span></span>
                </h1>
                <p class="text-sm text-slate-500 font-extralight leading-relaxed">
                    Verify identity to initialize secure connection with the primary framework. Oversee active protocols and routing.
                </p>
            </div>

            <!-- Form -->
            <form class="space-y-5 relative z-20">
                <div>
                    <label for="identifier" class="text-xs font-light text-slate-400 mb-1.5 block uppercase tracking-widest">Operative ID</label>
                    <div class="relative rounded-lg bg-black/80 group/input">
                        <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/input:border-transparent focus-within:border-transparent"></div>
                        <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/input:opacity-100 focus-within:opacity-100 transition-opacity duration-300 z-10"></div>
                        <input type="text" id="identifier" class="relative w-full bg-transparent px-3 py-2 text-sm text-slate-200 focus:outline-none z-20 placeholder-slate-700 font-extralight" placeholder="operative@nexus.net">
                    </div>
                </div>
                <div>
                    <div class="flex justify-between items-center mb-1.5">
                        <label for="key" class="text-xs font-light text-slate-400 block uppercase tracking-widest">Security Key</label>
                        <a href="#" class="text-xs font-extralight text-slate-400 hover:text-white transition-colors underline decoration-slate-700 underline-offset-2">Recover access</a>
                    </div>
                    <div class="relative rounded-lg bg-black/80 group/input">
                        <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/input:border-transparent focus-within:border-transparent"></div>
                        <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/input:opacity-100 focus-within:opacity-100 transition-opacity duration-300 z-10"></div>
                        <input type="password" id="key" class="relative w-full bg-transparent pl-3 pr-10 py-2 text-sm text-slate-200 focus:outline-none z-20 placeholder-slate-700 font-extralight" placeholder="••••••••">
                        <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white transition-colors z-30" aria-label="Toggle visibility">
                            <iconify-icon icon="solar:eye-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                        </button>
                    </div>
                </div>
                <div class="flex items-center gap-2 pt-1">
                    <div class="relative flex items-center justify-center w-4 h-4">
                        <input type="checkbox" id="session" class="peer appearance-none w-4 h-4 border border-slate-700 rounded bg-black/50 checked:bg-slate-300 checked:border-slate-300 cursor-pointer transition-colors">
                        <iconify-icon icon="solar:check-linear" width="12" height="12" stroke-width="1.5" class="absolute text-black opacity-0 peer-checked:opacity-100 pointer-events-none"></iconify-icon>
                    </div>
                    <label for="session" class="text-xs font-extralight text-slate-400 cursor-pointer select-none uppercase tracking-wider">Maintain persistent uplink</label>
                </div>
                
                <!-- Primary Button -->
                <button type="submit" class="w-full bg-[#0a0a0a] hover:bg-[#111] text-white text-sm font-light py-2.5 rounded-lg transition-all mt-2 uppercase tracking-widest relative group/btn shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_25px_rgba(255,255,255,0.06)]">
                    <div class="absolute inset-0 border border-white/10 rounded-lg pointer-events-none transition-colors duration-300 group-hover/btn:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.4),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20">Initialize Uplink</span>
                </button>
            </form>

            <!-- Divider -->
            <div class="relative flex items-center py-6 z-20">
                <div class="flex-grow border-t border-slate-800/60"></div>
                <span class="flex-shrink-0 px-4 text-xs font-extralight text-slate-600 uppercase tracking-widest">Alternative Auth</span>
                <div class="flex-grow border-t border-slate-800/60"></div>
            </div>

            <!-- Alternative Options -->
            <div class="grid grid-cols-2 gap-3 z-20">
                <button type="button" class="relative flex items-center justify-center gap-2 w-full bg-black/40 hover:bg-slate-900 rounded-lg py-2.5 text-sm text-slate-400 hover:text-slate-200 transition-colors font-extralight group/alt">
                    <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/alt:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/alt:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20 flex items-center gap-2"><iconify-icon icon="solar:buildings-linear" width="18" height="18" stroke-width="1.5"></iconify-icon> Corporate SSO</span>
                </button>
                <button type="button" class="relative flex items-center justify-center gap-2 w-full bg-black/40 hover:bg-slate-900 rounded-lg py-2.5 text-sm text-slate-400 hover:text-slate-200 transition-colors font-extralight group/alt">
                    <div class="absolute inset-0 border border-slate-800/80 rounded-lg pointer-events-none transition-colors duration-300 group-hover/alt:border-transparent"></div>
                    <div class="absolute inset-0 p-[1px] bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.25),transparent)] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor] pointer-events-none rounded-lg opacity-0 group-hover/alt:opacity-100 transition-opacity duration-300 z-10"></div>
                    <span class="relative z-20 flex items-center gap-2"><iconify-icon icon="solar:code-circle-linear" width="18" height="18" stroke-width="1.5"></iconify-icon> Git Auth</span>
                </button>
            </div>
        </div>

        <!-- Social Proof -->
        <div class="mt-8 flex flex-col items-center gap-4 relative z-20">
            <div class="flex -space-x-2">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_800w.jpg" alt="Active Node" class="w-10 h-10 rounded-full border border-slate-800 bg-black object-cover shadow-lg">
                <div class="w-10 h-10 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center text-xs text-slate-300 font-extralight shadow-lg">+</div>
            </div>
            <p class="text-xs text-slate-600 font-extralight uppercase tracking-widest">Validated by distributed consensus nodes</p>
        </div>

    </main>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // GSAP Masked Reveal for Heading
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(".reveal-word", {
                y: "0%",
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: "#reveal-title",
                    start: "top 95%",
                }
            });

            // Flow Canvas Animation
            const canvas = document.getElementById('flow-canvas');
            const ctx = canvas.getContext('2d');
            
            let width, height;
            let explosions = [];

            function resize() {
                const dpr = window.devicePixelRatio || 1;
                width = window.innerWidth;
                height = window.innerHeight;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
            }
            window.addEventListener('resize', resize);
            resize();

            window.addEventListener('click', (e) => {
                explosions.push({ x: e.clientX, y: e.clientY, radius: 0, life: 1 });
            });

            const paths = [];
            const numPaths = 80;
            
            for(let i = 0; i < numPaths; i++) {
                paths.push({
                    isLeft: i % 2 === 0,
                    startY: (i / numPaths) * height * 1.4 - height * 0.2,
                    particles: [{
                        t: Math.random(),
                        speed: 0.0015 + Math.random() * 0.002
                    }]
                });
            }

            function getBezierPoint(t, p0, p1, p2, p3) {
                const u = 1 - t;
                return {
                    x: u**3 * p0.x + 3 * u**2 * t * p1.x + 3 * u * t**2 * p2.x + t**3 * p3.x,
                    y: u**3 * p0.y + 3 * u**2 * t * p1.y + 3 * u * t**2 * p2.y + t**3 * p3.y
                };
            }

            function render() {
                ctx.clearRect(0, 0, width, height);
                const centerX = width / 2;
                const centerY = height / 2;

                explosions.forEach(exp => {
                    exp.radius += 15;
                    exp.life -= 0.015;
                });
                explosions = explosions.filter(exp => exp.life > 0);

                paths.forEach(path => {
                    const p0 = { x: path.isLeft ? 0 : width, y: path.startY };
                    const p1 = { x: path.isLeft ? centerX * 0.5 : width - centerX * 0.5, y: path.startY };
                    const p2 = { x: path.isLeft ? centerX * 0.8 : width - centerX * 0.8, y: centerY };
                    const p3 = { x: centerX, y: centerY };

                    ctx.beginPath();
                    ctx.moveTo(p0.x, p0.y);
                    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
                    ctx.lineWidth = 1.2;
                    ctx.setLineDash([1, 4]);
                    ctx.stroke();
                    ctx.setLineDash([]);

                    path.particles.forEach(p => {
                        p.t += p.speed;
                        if (p.t > 1) {
                            p.t = 0;
                            path.startY += (Math.random() - 0.5) * 10;
                        }

                        let pos = getBezierPoint(p.t, p0, p1, p2, p3);

                        let dxTotal = 0, dyTotal = 0;
                        explosions.forEach(exp => {
                            let dx = pos.x - exp.x;
                            let dy = pos.y - exp.y;
                            let dist = Math.hypot(dx, dy);
                            if (dist < exp.radius + 120 && dist > exp.radius - 120) {
                                let force = (1 - Math.abs(dist - exp.radius) / 120) * exp.life;
                                dxTotal += (dx / dist) * force * 80;
                                dyTotal += (dy / dist) * force * 80;
                            }
                        });
                        
                        pos.x += dxTotal;
                        pos.y += dyTotal;

                        ctx.fillStyle = \`rgba(255, 255, 255, 0.7)\`;
                        ctx.fillRect(pos.x - 1.5, pos.y - 1.5, 3, 3);
                    });
                });
                
                requestAnimationFrame(render);
            }
            
            render();
        });
    <\/script>
</body>
</html>`,iF=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Connectivity Nexus</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="font-sans antialiased text-blue-950 min-h-screen flex flex-col" style="background: linear-gradient(180deg, rgba(240,244,248,0.92) 0%, rgba(225,234,244,0.92) 40%, rgba(196,217,239,0.92) 80%, rgba(166,200,234,0.92) 100%), url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg') center/cover no-repeat fixed; background-blend-mode: normal;">

    <!-- Main Structural Container -->
    <div class="max-w-6xl mx-auto w-full flex-grow flex flex-col border-x border-transparent relative bg-white/20 backdrop-blur-[2px]" style="border-image: linear-gradient(to bottom, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
        
        <!-- Top Corner Squares -->
        <div class="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        <div class="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>

        <!-- Header Section -->
        <header class="pt-24 pb-20 px-6 text-center border-b border-transparent relative z-10" style="border-image: linear-gradient(to right, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
            <h1 id="reveal-title" class="text-5xl md:text-6xl font-normal tracking-tight text-blue-950 max-w-3xl mx-auto leading-tight">
                The nexus of <br> global connectivity
            </h1>
            
            <!-- Header Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </header>

        <!-- Stats Section -->
        <section class="border-b border-transparent relative z-10 bg-white/10" style="border-image: linear-gradient(to right, rgba(147,197,253,0.1), rgba(147,197,253,0.7), rgba(147,197,253,0.1)) 1;">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-blue-300/40 text-center">
                
                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-950 tracking-tight">150+</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        countries integrated worldwide
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-800/90 tracking-tight">
                        <span class="text-blue-500/80 font-light mr-1">$</span>3.1T
                    </div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        annual transfer volume
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6 relative">
                    <div class="text-4xl font-normal text-blue-800/80 tracking-tight">99.999%</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        infrastructure reliability
                    </div>
                    <!-- Internal Grid Intersection Square -->
                    <div class="hidden lg:block absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
                </div>

                <div class="flex flex-col items-center justify-center space-y-3 py-14 px-6">
                    <div class="text-4xl font-normal text-blue-700/80 tracking-tight">850M+</div>
                    <div class="text-sm text-blue-800/70 max-w-[160px] leading-relaxed">
                        verified digital identities
                    </div>
                </div>

            </div>
            
            <!-- Stats Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </section>

        <!-- Animation Section -->
        <main class="flex-grow relative overflow-hidden min-h-[500px]">
            
            <!-- Controls -->
            <div class="absolute top-6 right-6 flex gap-2 z-20">
                <button id="pauseBtn" class="w-8 h-8 flex items-center justify-center bg-white/40 hover:bg-white/60 backdrop-blur-md border border-blue-300/40 rounded text-blue-800 transition-all cursor-pointer" aria-label="Pause animation">
                    <iconify-icon icon="solar:pause-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>
                </button>
                <button class="w-8 h-8 flex items-center justify-center bg-white/40 hover:bg-white/60 backdrop-blur-md border border-blue-300/40 rounded text-blue-800 transition-all cursor-pointer" aria-label="Settings">
                    <iconify-icon icon="solar:settings-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>
                </button>
            </div>

            <!-- Canvas Container -->
            <canvas id="networkCanvas" class="absolute inset-0 w-full h-full block z-0"></canvas>
            
            <!-- Bottom Corner Squares -->
            <div class="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
            <div class="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-blue-400/70 z-20"></div>
        </main>
    </div>

    <script>
        // Background Canvas Animation
        const canvas = document.getElementById('networkCanvas');
        const ctx = canvas.getContext('2d', { alpha: true });
        let width, height;
        let particles = [];
        let isPlaying = true;
        let animationFrameId;

        function resize() {
            width = canvas.clientWidth;
            height = canvas.clientHeight;
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            initParticles();
        }

        class Particle {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.angle = Math.PI + (Math.random() * Math.PI); 
                if (Math.random() > 0.3) {
                    this.angle = Math.PI * 1.25 + (Math.random() * Math.PI * 0.5);
                }

                this.speed = 0.5 + Math.random() * 2.5;
                this.distance = initial ? Math.random() * (height * 1.2) : Math.random() * 50;
                this.maxLength = 20 + Math.random() * 180;
                this.length = 0;
                this.alpha = 0;
            }

            update() {
                this.distance += this.speed;
                this.length = Math.min(this.maxLength, this.distance * 0.8);
                
                const normalizedDist = this.distance / (height * 1.2);
                this.alpha = Math.min(1, this.distance / 100) * Math.max(0, 1 - normalizedDist);

                if (this.distance > height * 1.5) {
                    this.reset();
                }
            }

            draw() {
                const originX = width / 2;
                const originY = height + 50;

                const startX = originX + Math.cos(this.angle) * this.distance;
                const startY = originY + Math.sin(this.angle) * this.distance;
                const endX = originX + Math.cos(this.angle) * (this.distance + this.length);
                const endY = originY + Math.sin(this.angle) * (this.distance + this.length);

                const distRatio = Math.min(1, this.distance / height);
                const hue = 220 + (distRatio * 15);
                const lightness = 15 + (distRatio * 35);
                
                const color = \`hsla(\${hue}, 90%, \${lightness}%, \${this.alpha})\`;
                const tailColor = \`hsla(\${hue}, 90%, \${Math.max(5, lightness - 15)}%, \${this.alpha * 0.05})\`;

                ctx.beginPath();
                const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
                gradient.addColorStop(0, tailColor);
                gradient.addColorStop(1, color);
                
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 0.5 + (distRatio * 2);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(endX, endY, 0.5 + (distRatio * 1.5), 0, Math.PI * 2);
                ctx.fillStyle = \`hsla(\${hue}, 100%, \${lightness + 20}%, \${this.alpha * 1.5})\`;
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = window.innerWidth < 768 ? 150 : 400;
            for(let i=0; i<particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            if (!isPlaying) return;
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            cancelAnimationFrame(animationFrameId);
            resize();
            if(isPlaying) animate();
        });

        resize();
        animate();

        const pauseBtn = document.getElementById('pauseBtn');
        pauseBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                pauseBtn.innerHTML = '<iconify-icon icon="solar:pause-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>';
                animate();
            } else {
                pauseBtn.innerHTML = '<iconify-icon icon="solar:play-linear" width="16" height="16" style="stroke-width: 1.5;"></iconify-icon>';
                cancelAnimationFrame(animationFrameId);
            }
        });

        // GSAP Masked Text Reveal
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);
            
            const titleEl = document.getElementById('reveal-title');
            if (titleEl) {
                const lines = titleEl.innerHTML.split(/<br\\s*\\/?>/i);
                titleEl.innerHTML = '';
                
                lines.forEach((line, index) => {
                    const words = line.split(' ');
                    words.forEach((word) => {
                        if (word.trim() !== '') {
                            const wrapper = document.createElement('span');
                            wrapper.className = 'inline-block overflow-hidden align-bottom';
                            wrapper.style.paddingBottom = '0.1em'; 
                            wrapper.style.marginBottom = '-0.1em';
                            
                            const inner = document.createElement('span');
                            inner.className = 'inline-block reveal-text';
                            inner.style.transform = 'translateY(110%)';
                            inner.innerHTML = word;
                            
                            wrapper.appendChild(inner);
                            titleEl.appendChild(wrapper);
                            titleEl.appendChild(document.createTextNode(' '));
                        }
                    });
                    if (index < lines.length - 1) {
                        titleEl.appendChild(document.createElement('br'));
                    }
                });

                gsap.to('.reveal-text', {
                    y: 0,
                    ease: 'power4.out',
                    duration: 1.2,
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: '#reveal-title',
                        start: 'top 90%',
                    }
                });
            }
        });
    <\/script>
</body>
</html>`,rF=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>System Interface</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-[#0a0a0c] text-zinc-400 font-mono min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden selection:bg-zinc-800 selection:text-white">
    
    <!-- Aura Asset Background Image -->
    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg" 
         class="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen pointer-events-none z-0" 
         alt="">

    <!-- WebGL-simulated Background Animation -->
    <canvas id="bg-canvas" class="absolute inset-0 z-0 pointer-events-none"></canvas>

    <!-- Main UI Container -->
    <main class="relative z-10 w-full max-w-2xl flex flex-col gap-12 sm:gap-20">

        <!-- PANEL 1: CORE (Red/Orange) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-[#c87a65]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-4 text-[#c87a65]">
                
                <!-- Top Row -->
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#c87a65]/20 pb-2">
                    <h1 class="gsap-reveal text-3xl sm:text-4xl tracking-tight font-medium uppercase animate-pulse" style="animation-duration: 4s;">[ CORE ]</h1>
                    <div class="flex gap-6 text-xs tracking-wider">
                        <div class="flex flex-col gap-1">
                            <span>CONF.SYS</span>
                            <span class="opacity-70">RESTART</span>
                            <span class="opacity-70">SLEEP</span>
                        </div>
                        <div class="flex flex-col gap-1">
                            <span>BUILD_11</span>
                            <span class="opacity-70">ANALYZE</span>
                            <span class="opacity-70">INPUT NEEDED</span>
                        </div>
                    </div>
                </div>

                <!-- Middle Row -->
                <div class="flex flex-col sm:flex-row justify-between items-start gap-6">
                    <!-- Dot Matrix -->
                    <div class="grid grid-cols-[repeat(20,minmax(0,1fr))] gap-1 opacity-80" id="matrix-1">
                        <!-- Populated by JS for brevity -->
                    </div>
                    
                    <!-- Right Controls -->
                    <div class="flex flex-col gap-2 min-w-[200px]">
                        <div class="flex items-center justify-between border-b border-[#c87a65]/20 pb-1">
                            <div class="flex items-center gap-2">
                                <div class="w-3 h-3 rounded-full bg-[#c87a65] animate-ping" style="animation-duration: 3s;"></div>
                                <span class="text-lg tracking-widest">++</span>
                            </div>
                            <span class="text-xs">HASH: 0x3C9A</span>
                        </div>
                        <div class="flex items-center justify-between text-xs pt-1">
                            <span>2B-44 - TEMP: 61°C</span>
                            <div class="w-8 h-3 rounded-full border border-[#c87a65]/50 flex items-center p-[1px]">
                                <div class="w-2 h-full bg-[#c87a65] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PANEL 2: SECURE (Green) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-l from-[#7a9f65]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-3 text-[#7a9f65]">
                
                <!-- Ruler -->
                <div class="relative w-full h-4 border-t border-[#7a9f65]/30 flex justify-between">
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                    <div class="w-px h-1 bg-[#7a9f65]/30"></div>
                    <div class="w-px h-2 bg-[#7a9f65]/50"></div>
                </div>

                <div class="flex flex-col sm:flex-row justify-between items-end gap-6">
                    <!-- Large Dot Pattern -->
                    <div class="flex flex-col gap-2 opacity-90">
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div></div>
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div></div>
                        <div class="flex gap-2"><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current"></div><div class="w-2 h-2 rounded-full bg-current opacity-20"></div></div>
                    </div>

                    <!-- Info Box & Title -->
                    <div class="flex flex-col items-end gap-2 w-full sm:w-auto">
                        <div class="flex items-stretch gap-2">
                            <div class="border border-[#7a9f65]/30 p-2 text-xs flex flex-col justify-center min-w-[120px]">
                                <span>APPROVED</span>
                                <span class="opacity-70">ID: X7-44</span>
                                <span class="opacity-70">SEQ: #0933</span>
                            </div>
                            <div class="border border-[#7a9f65]/30 p-2 flex items-center justify-center">
                                <iconify-icon icon="solar:clock-circle-linear" class="text-xl"></iconify-icon>
                            </div>
                            <!-- Logo Box -->
                            <div class="w-12 h-12 bg-[#7a9f65] relative overflow-hidden flex-shrink-0">
                                <div class="absolute w-16 h-4 bg-[#0a0a0c] -rotate-45 top-4 -left-2"></div>
                            </div>
                        </div>
                        <h2 class="gsap-reveal text-2xl sm:text-3xl tracking-tight font-medium uppercase">SECURE</h2>
                    </div>
                </div>

                <!-- Bottom Text -->
                <div class="flex flex-col sm:flex-row justify-between text-xs mt-2 opacity-80">
                    <span>LOADING <span class="animate-pulse">...</span></span>
                    <span>//KEY: <span class="text-white opacity-90">0x7B11</span>//</span>
                </div>
                <div class="text-xs opacity-70">
                    SYNCING - ID: 88-K - DATA DROP: 0.2% SECTOR 9
                </div>
            </div>
        </section>

        <!-- PANEL 3: 909 (Purple/Blue) -->
        <section class="relative group">
            <!-- Border Gradient Skill Application -->
            <div class="absolute -inset-[1px] rounded-lg bg-gradient-to-t from-[#756a9f]/40 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" style="mask-image: linear-gradient(black, black); -webkit-mask-image: -webkit-linear-gradient(black, black);"></div>
            
            <div class="relative bg-[#0a0a0c] rounded-lg p-2 flex flex-col gap-4 text-[#756a9f]">
                
                <div class="flex flex-col sm:flex-row items-center justify-between gap-8">
                    
                    <!-- Left: Node Diagram -->
                    <div class="relative w-32 h-16 flex-shrink-0 hidden sm:block">
                        <!-- Lines -->
                        <div class="absolute top-2 left-2 w-20 h-px bg-[#756a9f]/50"></div>
                        <div class="absolute top-10 left-6 w-16 h-px bg-[#756a9f]/50"></div>
                        <div class="absolute top-2 left-22 w-px h-8 bg-[#756a9f]/50 rotate-45 origin-top-left"></div>
                        <div class="absolute top-10 left-6 w-px h-6 bg-[#756a9f]/50 -rotate-45 origin-top-left"></div>
                        
                        <!-- Nodes -->
                        <div class="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-1.5 left-21.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-9.5 left-5.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-9.5 left-21.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        <div class="absolute top-14.5 left-1.5 w-1.5 h-1.5 rounded-full border border-[#756a9f] bg-[#0a0a0c]"></div>
                        
                        <!-- Arrows -->
                        <div class="absolute top-5 left-0 flex items-center gap-1">
                            <iconify-icon icon="solar:alt-arrow-right-linear" class="text-lg"></iconify-icon>
                            <div class="w-8 h-px bg-[#756a9f]"></div>
                        </div>
                    </div>

                    <!-- Middle: Title -->
                    <div class="flex items-center gap-4">
                        <div class="flex items-center gap-1 sm:hidden">
                            <iconify-icon icon="solar:alt-arrow-right-linear" class="text-lg"></iconify-icon>
                            <div class="w-8 h-px bg-[#756a9f]"></div>
                        </div>
                        <h3 class="gsap-reveal text-5xl sm:text-6xl tracking-tight font-normal">909</h3>
                    </div>

                    <!-- Right: Info & Circle -->
                    <div class="flex items-center gap-6">
                        <div class="flex flex-col text-xs">
                            <span>SECURITY-NET</span>
                            <span class="opacity-70">ACTIVE</span>
                            <span class="opacity-70">STAT: 0xBB02</span>
                            <div class="flex gap-1 mt-1">
                                <div class="w-1.5 h-1.5 rounded-full border border-current"></div>
                                <div class="w-1.5 h-1.5 rounded-full border border-current"></div>
                                <div class="w-1.5 h-1.5 rounded-full border border-current bg-current"></div>
                            </div>
                        </div>
                        
                        <!-- Circular Dots -->
                        <div class="relative w-12 h-12 animate-spin" style="animation-duration: 10s; animation-timing-function: linear;">
                            <div class="absolute inset-0" id="circle-dots">
                                <!-- Populated by JS -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom Text -->
                <div class="text-center sm:text-left text-xs flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-8 mt-2 opacity-80">
                    <span>UPLINK STATUS - <span class="text-white opacity-90">ONLINE</span></span>
                    <span>POWER: 48V - DRAW: 1.8A</span>
                </div>
            </div>
        </section>

    </main>

    <script>
        // GSAP Masked Staggered Reveal Logic
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.gsap-reveal').forEach(el => {
            const text = el.innerText;
            const words = text.split(' ');
            el.innerHTML = '';
            words.forEach((word, i) => {
                const outer = document.createElement('span');
                // Ensure overflow hidden and adjust alignment
                outer.className = 'inline-block overflow-hidden pb-1 -mb-1 align-bottom';
                const inner = document.createElement('span');
                inner.className = 'inline-block translate-y-[120%]';
                inner.innerText = word + (i < words.length - 1 ? '\\u00A0' : '');
                outer.appendChild(inner);
                el.appendChild(outer);
                
                gsap.to(inner, {
                    y: "0%",
                    duration: 0.8,
                    ease: "power3.out",
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 95%",
                    }
                });
            });
        });

        // Populate Matrix 1
        const matrixContainer = document.getElementById('matrix-1');
        let matrixHTML = '';
        for(let i=0; i<80; i++) {
            const isFilled = Math.random() > 0.6;
            const isDim = Math.random() > 0.5;
            matrixHTML += \`<div class="w-1.5 h-1.5 rounded-full border border-current \${isFilled ? 'bg-current' : ''} \${isDim ? 'opacity-30' : ''}"></div>\`;
        }
        matrixContainer.innerHTML = matrixHTML;

        // Populate Circle Dots
        const circleContainer = document.getElementById('circle-dots');
        let circleHTML = '';
        for(let i=0; i<12; i++) {
            const angle = (i * 30) * (Math.PI / 180);
            const x = 24 + 20 * Math.cos(angle) - 3; // center 24, radius 20, offset half width
            const y = 24 + 20 * Math.sin(angle) - 3;
            const isFilled = i % 3 === 0;
            circleHTML += \`<div class="absolute w-1.5 h-1.5 rounded-full border border-current \${isFilled ? 'bg-current' : ''}" style="left: \${x}px; top: \${y}px;"></div>\`;
        }
        circleContainer.innerHTML = circleHTML;

        // WebGL-simulated Canvas Animation
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function initCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            particles = [];
            const numParticles = window.innerWidth < 640 ? 30 : 70;
            for (let i = 0; i < numParticles; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
        }

        function drawLines() {
            ctx.clearRect(0, 0, width, height);
            ctx.lineWidth = 1;
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                for (let j = i + 1; j < particles.length; j++) {
                    let p2 = particles[j];
                    let dx = p.x - p2.x;
                    let dy = p.y - p2.y;
                    let dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = \`rgba(255, 255, 255, \${0.28 + (1 - dist / 120) * 0.42})\`;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }

                ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
                ctx.fillRect(p.x - 0.75, p.y - 0.75, 1.5, 1.5);
            }
            requestAnimationFrame(drawLines);
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();
        drawLines();
    <\/script>
</body>
</html>`,sF=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cyber Defenses</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400&family=Plus+Jakarta+Sans:wght@300;400&display=swap" rel="stylesheet">
</head>
<body class="bg-[#030303] min-h-screen flex flex-col items-center justify-center overflow-hidden text-white relative antialiased selection:bg-red-500/30" style="font-family: 'Plus Jakarta Sans', sans-serif;">
    
    <!-- Canvas for background line animation -->
    <canvas id="bg-canvas" class="absolute inset-0 z-0 opacity-50 pointer-events-none"></canvas>

    <!-- Ambient background glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[800px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

    <main class="relative z-10 flex flex-col items-center justify-center w-full min-h-screen max-w-7xl mx-auto px-4 sm:px-6">
        
        <!-- 3D Card Carousel -->
        <div class="relative flex items-center justify-center w-full h-[400px] sm:h-[650px]" style="perspective: 1200px;">
            <div id="carousel" class="relative w-full h-full flex items-center justify-center" style="transform-style: preserve-3d;">
                
                <!-- Left Cards -->
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-0 bg-gradient-to-r from-[#0a0202] to-[#1f0505] border border-red-900/10 cursor-pointer pointer-events-auto" style="transform: translateX(-180%) translateZ(-400px) rotateY(35deg); opacity: 0.15; box-shadow: inset 0 0 20px rgba(0,0,0,0.8);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-10 bg-gradient-to-r from-[#140303] to-[#3d0a0a] border border-red-900/20 cursor-pointer pointer-events-auto" style="transform: translateX(-120%) translateZ(-250px) rotateY(25deg); opacity: 0.4; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-20 bg-gradient-to-r from-[#290606] to-[#6b1111] border border-red-700/30 cursor-pointer pointer-events-auto" style="transform: translateX(-60%) translateZ(-100px) rotateY(15deg); opacity: 0.7; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);"></div>

                <!-- Right Cards -->
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-0 bg-gradient-to-l from-[#0a0202] to-[#1f0505] border border-red-900/10 cursor-pointer pointer-events-auto" style="transform: translateX(180%) translateZ(-400px) rotateY(-35deg); opacity: 0.15; box-shadow: inset 0 0 20px rgba(0,0,0,0.8);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-10 bg-gradient-to-l from-[#140303] to-[#3d0a0a] border border-red-900/20 cursor-pointer pointer-events-auto" style="transform: translateX(120%) translateZ(-250px) rotateY(-25deg); opacity: 0.4; box-shadow: inset 0 0 20px rgba(0,0,0,0.5);"></div>
                <div class="card absolute w-32 sm:w-64 h-[230px] sm:h-[422px] rounded-xl z-20 bg-gradient-to-l from-[#290606] to-[#6b1111] border border-red-700/30 cursor-pointer pointer-events-auto" style="transform: translateX(60%) translateZ(-100px) rotateY(-15deg); opacity: 0.7; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);"></div>

                <!-- Center Active Card -->
                <div class="card absolute w-36 sm:w-72 h-[269px] sm:h-[461px] bg-gradient-to-br from-[#ff4747] to-[#cc0000] rounded-xl flex items-center justify-center z-30 border border-red-300/40 overflow-hidden cursor-pointer pointer-events-auto" style="transform: translateZ(50px); box-shadow: 0 0 80px 15px rgba(220, 38, 38, 0.35), inset 0 0 30px rgba(255,255,255,0.15);">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg" class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply pointer-events-none" alt="Abstract Pattern">
                    <div class="relative flex w-full h-full pointer-events-none" style="background-image: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%), repeating-linear-gradient(-45deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 2px, transparent 2px, transparent 12px);">
                    </div>
                </div>
            </div>
        </div>

        <!-- Typography Section (Overlayed) -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-40" id="hero-text">
            
            <!-- Monospaced Technical Badge -->
            <div id="hero-badge" class="opacity-0 flex items-center gap-3 px-4 py-2 rounded-full bg-[#1a0505]/80 backdrop-blur-md text-red-400 text-xs font-light tracking-widest uppercase mb-8" style="font-family: 'DM Mono', monospace; box-shadow: 0 0 20px rgba(220,38,38,0.15); border: 1px solid transparent; background-clip: padding-box, border-box; background-origin: padding-box, border-box; background-image: linear-gradient(#1a0505, #1a0505), linear-gradient(to right, rgba(153,27,27,0.6), rgba(239,68,68,0.3));">
                <iconify-icon icon="solar:radar-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                <span>Continuous Network Surveillance</span>
            </div>
            
            <!-- Elegant Serif Headline -->
            <h1 class="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#f5f5f5] leading-none max-w-5xl flex flex-col items-center gap-y-2 sm:gap-y-4" style="font-family: 'Cormorant Garamond', serif; text-shadow: 0 10px 40px rgba(0,0,0,0.9);">
                <div class="flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">Expose</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">hidden</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">vulnerabilities</span></span>
                </div>
                <div class="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 italic text-red-100">
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">within</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">your</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">cloud</span></span>
                    <span class="inline-flex overflow-hidden pb-1 sm:pb-2"><span class="word translate-y-[120%] inline-block">infrastructure</span></span>
                </div>
            </h1>

            <!-- Clean Sans-Serif CTA -->
            <button id="hero-button" class="opacity-0 group relative mt-10 sm:mt-14 px-8 py-4 rounded-lg text-sm font-light text-white transition-all active:scale-95 pointer-events-auto flex items-center justify-center bg-red-600 border border-red-500/50 overflow-hidden" style="font-family: 'Plus Jakarta Sans', sans-serif;">
                <span class="absolute inset-0 w-full h-full bg-red-500 transition-all duration-500 ease-out [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(150%_at_50%_50%)] z-0"></span>
                <span class="relative z-10 flex items-center gap-2">
                    Start Threat Assessment
                    <iconify-icon icon="solar:arrow-right-linear" width="18" height="18" stroke-width="1.5"></iconify-icon>
                </span>
            </button>
        </div>
    </main>

    <script>
        // Background Canvas Animation
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function initCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.max(1, Math.floor(width * dpr));
            canvas.height = Math.max(1, Math.floor(height * dpr));
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.imageSmoothingEnabled = false;
            particles = [];
            const particleCount = window.innerWidth < 768 ? 40 : 100;
            
            for(let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    baseLength: Math.random() * 80 + 20,
                    speedY: Math.random() * 0.8 + 0.2,
                    baseOpacity: Math.random() * 0.2 + 0.05
                });
            }
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            const centerX = width / 2;
            const centerY = height / 2;
            ctx.lineCap = 'butt';
            ctx.lineJoin = 'miter';
            
            particles.forEach(p => {
                const distFromCenterX = Math.abs(p.x - centerX);
                const distFromCenterY = Math.abs(p.y - centerY);
                
                const proximityX = Math.max(0, 1 - (distFromCenterX / (width / 2)));
                const proximityY = Math.max(0, 1 - (distFromCenterY / (height / 2)));
                const centerProximity = proximityX * (0.4 + proximityY * 0.6);
                
                const currentLength = p.baseLength * (1 + centerProximity * 4); 
                
                const currentOpacity = Math.min(1.0, p.baseOpacity + (centerProximity * 2.0));
                const brightness = Math.floor(centerProximity * 180);
                
                ctx.beginPath();
                const grad = ctx.createLinearGradient(p.x, p.y, p.x, p.y + currentLength);
                grad.addColorStop(0, \`rgba(220, 38, 38, 0)\`);
                grad.addColorStop(0.5, \`rgba(255, \${38 + brightness}, \${38 + brightness}, \${currentOpacity})\`);
                grad.addColorStop(1, \`rgba(220, 38, 38, 0)\`);
                
                ctx.strokeStyle = grad;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x, p.y + currentLength);
                ctx.stroke();

                p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5);
                
                if(p.y + currentLength < 0) {
                    p.y = height;
                    p.x = Math.random() * width;
                }
            });
            requestAnimationFrame(animateCanvas);
        }
        animateCanvas();

        // 3D Cards Floating, Mouse Tracking & Hover Animation
        const carousel = document.getElementById('carousel');
        const cards = document.querySelectorAll('.card');
        let time = 0;
        let targetRotateY = 0;
        let currentRotateY = 0;

        cards.forEach(card => {
            card.addEventListener('mouseenter', () => card.isHovered = true);
            card.addEventListener('mouseleave', () => card.isHovered = false);
            card.hoverAmt = 0;
        });

        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            targetRotateY = x * 40; 
        });

        function animateCards() {
            time += 0.015;
            currentRotateY += (targetRotateY - currentRotateY) * 0.08;
            carousel.style.transform = \`rotateY(\${currentRotateY}deg)\`;

            cards.forEach((card, index) => {
                if(!card.dataset.baseTransform) {
                    card.dataset.baseTransform = card.style.transform;
                    const match = card.dataset.baseTransform.match(/translateX\\(([^)]+)\\)/);
                    card.directionX = match ? parseFloat(match[1]) : 0;
                }
                
                const targetHover = card.isHovered ? 1 : 0;
                card.hoverAmt += (targetHover - card.hoverAmt) * 0.15;
                
                const hoverZ = card.hoverAmt * 60;
                const hoverY = card.hoverAmt * -20;
                let hoverX = 0;
                
                if (card.directionX < 0) hoverX = card.hoverAmt * -40;
                else if (card.directionX > 0) hoverX = card.hoverAmt * 40;

                const offset = Math.sin(time + (index * 0.5)) * 8;
                
                card.style.transform = \`\${card.dataset.baseTransform} translateX(\${hoverX}px) translateY(\${offset + hoverY}px) translateZ(\${hoverZ}px)\`;
            });
            requestAnimationFrame(animateCards);
        }
        animateCards();

        // Entrance Animation with GSAP Masked Reveal
        gsap.registerPlugin(ScrollTrigger);

        setTimeout(() => {
            // Animate headline words in a masked stagger
            gsap.to('.word', {
                y: "0%",
                duration: 1.2,
                stagger: 0.06,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: "#hero-text",
                    start: "top 90%"
                }
            });

            // Fade in and float up the badge and button sequentially
            gsap.fromTo(['#hero-badge', '#hero-button'], 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out", delay: 0.4 }
            );
        }, 150);
    <\/script>
</body>
</html>`,oF=`<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NexusNode Infrastructure</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP & ScrollTrigger for Masked Reveal -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-black text-white font-sans min-h-screen relative overflow-x-hidden selection:bg-white/20 selection:text-white font-light" style="background-color: #000; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;">

    <!-- WebGL Background Container -->
    <div class="fixed inset-0 z-0 pointer-events-none">
        <canvas id="topo-canvas" class="w-full h-full"></canvas>
        <!-- Gradient overlay to fade bottom and top for text readability -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black z-10"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-90 z-10"></div>
    </div>

    <!-- Main Content -->
    <main class="relative z-20 flex flex-col min-h-screen">
        
        <!-- Navigation -->
        <header class="container mx-auto px-6 py-6 flex items-center justify-between reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out">
            <div class="flex items-center gap-2 text-white hover:text-neutral-300 transition-colors cursor-pointer">
                <iconify-icon icon="solar:radar-linear" width="24"></iconify-icon>
                <span class="font-light text-sm tracking-tight">NexusNode</span>
            </div>
            <nav class="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-extralight">
                <a href="#" class="hover:text-white transition-colors">Compute Clusters</a>
                <a href="#" class="hover:text-white transition-colors">Observability</a>
                <a href="#" class="hover:text-white transition-colors">Throughput</a>
                <a href="#" class="hover:text-white transition-colors">Consensus</a>
            </nav>
            <div class="flex items-center gap-4">
                <a href="#" class="hidden md:block text-sm text-neutral-400 font-extralight hover:text-white transition-colors">Sign In</a>
                <button class="bg-white text-black px-4 py-2 rounded-full text-sm font-light hover:bg-neutral-200 transition-colors">
                    Get Started
                </button>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="flex-grow flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
            <div class="max-w-4xl mx-auto flex flex-col items-center">
                
                <!-- Pill Badge -->
                <div class="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
                    <span class="flex h-2 w-2 relative">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <span class="text-xs font-extralight text-neutral-300 tracking-wide uppercase">Nexus OS v4.2 deployment ready</span>
                    <iconify-icon icon="solar:alt-arrow-right-linear" width="14" class="text-neutral-500"></iconify-icon>
                </div>

                <h1 class="mask-container text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[1.1]">
                    <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Orchestrate</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">the</span></span>
                    <br class="hidden md:block" />
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-600 font-extralight inline-block">
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">neural</span></span>
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">compute</span></span>
                        <span class="overflow-hidden inline-block align-bottom pb-2"><span class="mask-word inline-block opacity-0 translate-y-[120%]">fabric.</span></span>
                    </span>
                </h1>
                
                <p class="mask-container mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-extralight">
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Provision</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">ultra-low</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">latency</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">inference</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">nodes</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">with</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">zero</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">configuration.</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Enterprise-grade</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">AI</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">infrastructure</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">built</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">for</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">real-time</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">model</span></span>
                    <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">serving.</span></span>
                </p>
                
                <div class="reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-300 mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <button class="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-light hover:bg-neutral-200 transition-colors group">
                        Launch Workspace
                        <iconify-icon icon="solar:transfer-horizontal-linear" width="18" class="group-hover:translate-x-0.5 transition-transform"></iconify-icon>
                    </button>
                    <button class="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-light text-white border border-white/20 hover:bg-white/5 transition-colors">
                        View Documentation
                    </button>
                </div>
            </div>
        </section>

        <!-- Features Matrix with Subtler Gradient Borders -->
        <section class="container mx-auto px-6 py-24 pb-32">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 reveal opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-300">
                
                <!-- Feature Card 1 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:scanner-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Homomorphic</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Encryption</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">Cryptographic isolation guaranteeing absolute data privacy during active model inference across edge nodes.</p>
                    </div>
                </div>

                <!-- Feature Card 2 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Serverless</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">GPUs</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">On-demand distributed compute layers. Elastic scaling powered by decentralized tensor processing units.</p>
                    </div>
                </div>

                <!-- Feature Card 3 -->
                <div class="group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/10 overflow-hidden shadow-2xl shadow-white/5">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="relative h-full bg-[#050505] rounded-[15px] p-8 flex flex-col gap-4 z-10">
                        <div class="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-2">
                            <iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
                        </div>
                        <h3 class="mask-container text-xl font-light tracking-tight text-white">
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Global</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">State</span></span>
                            <span class="overflow-hidden inline-block align-bottom pb-1"><span class="mask-word inline-block opacity-0 translate-y-[120%]">Sync</span></span>
                        </h3>
                        <p class="text-sm text-neutral-400 font-extralight leading-relaxed">Distributed vector database integration. Access and mutate embedding states with sub-millisecond precision.</p>
                    </div>
                </div>

            </div>
        </section>

    </main>

    <!-- Interactions & WebGL Implementation -->
    <script>
        // Native Reveal Animations Trigger
        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => {
                el.classList.remove('opacity-0', 'translate-y-4');
            });
        }, 100);

        // GSAP Masked Reveal Implementation
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll('.mask-container').forEach(container => {
            const words = container.querySelectorAll('.mask-word');
            gsap.to(words, {
                scrollTrigger: {
                    trigger: container,
                    start: "top 95%",
                },
                y: "0%",
                opacity: 1,
                duration: 1.1,
                stagger: 0.05,
                ease: "power4.out",
                delay: 0.1
            });
        });

        // WebGL Topography
        const canvas = document.getElementById('topo-canvas');
        const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false });

        if (gl) {
            const vsSource = \`
                attribute vec2 a_position;
                void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
            \`;

            const fsSource = \`
                precision highp float;
                uniform vec2 u_resolution;
                uniform float u_time;
                uniform float u_dpr;

                vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
                float snoise(vec2 v){
                    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                    vec2 i  = floor(v + dot(v, C.yy) );
                    vec2 x0 = v -   i + dot(i, C.xx);
                    vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1;
                    i = mod(i, 289.0);
                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                    m = m*m; m = m*m;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0;
                    vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                    vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }

                void main() {
                    vec2 st = gl_FragCoord.xy / u_resolution.xy;
                    st.x *= u_resolution.x / u_resolution.y;

                    // 1px physical grid rendering
                    float gridSize = 48.0 * u_dpr;
                    vec2 gridSt = gl_FragCoord.xy / gridSize;
                    vec2 gridFract = fract(gridSt);
                    float lineThickness = 1.0 / gridSize;
                    float gridLines = step(1.0 - lineThickness, gridFract.x) + step(1.0 - lineThickness, gridFract.y);
                    gridLines = clamp(gridLines, 0.0, 1.0) * 0.12; 

                    // Ultra-thin Topographic Lines
                    float noiseScale = 1.4;
                    vec2 noisePos = st * noiseScale + vec2(u_time * 0.015, u_time * 0.025);
                    float n = snoise(noisePos) * 0.5 + 0.5;
                    float numBands = 10.0;
                    float bandVal = n * numBands;
                    float triangleWave = abs(fract(bandVal) - 0.5) * 2.0; 
                    
                    // Thinner smoothstep constraint for fine industrial aesthetic
                    float topoLines = smoothstep(0.02, 0.00, triangleWave) * 0.45;

                    vec3 color = vec3(0.0);
                    color += vec3(1.0) * gridLines;
                    color += vec3(1.0) * topoLines;

                    gl_FragColor = vec4(color, 1.0);
                }
            \`;

            function createShader(gl, type, source) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                return shader;
            }

            const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
            const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, "a_position");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
            const timeLocation = gl.getUniformLocation(program, "u_time");
            const dprLocation = gl.getUniformLocation(program, "u_dpr");

            function resizeCanvas() {
                const dpr = window.devicePixelRatio || 1;
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                gl.viewport(0, 0, canvas.width, canvas.height);
                gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
                gl.uniform1f(dprLocation, dpr);
            }

            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();

            let startTime = performance.now();
            function render(time) {
                gl.uniform1f(timeLocation, (time - startTime) * 0.001);
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                requestAnimationFrame(render);
            }
            requestAnimationFrame(render);
        }
    <\/script>
</body>
</html>`,An={mode:"dark",speed:1,size:1,gap:2,length:1,density:1,strokeWidth:1,opacity:1,hue:0,saturation:1,brightness:1},io="#eef1f6";function Mi(n,e,t){return Math.min(t,Math.max(e,n))}function Xn(n,e,t=1){return Math.max(t,Math.round(n*e))}function jx(n,e=3){const t=Number(n).toFixed(e);return t.includes(".")?t:`${t}.0`}function aF(n,e="dark"){return n==null?e:n==="light"||n===1||n==="1"?"light":"dark"}function Xx(){if(typeof document>"u"||typeof window>"u")return"dark";const n=document.documentElement,e=n.dataset.scheme??n.dataset.theme;return e==="light"||e==="dark"?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function lF(n){const[e,t]=Y.useState(Xx);return Y.useEffect(()=>{if(!n||typeof document>"u"||typeof window>"u")return;const i=document.documentElement,s=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>t(Xx()),l=new MutationObserver(a);return l.observe(i,{attributes:!0,attributeFilter:["data-scheme","data-theme"]}),s.addEventListener("change",a),a(),()=>{l.disconnect(),s.removeEventListener("change",a)}},[n]),e}function B1(n,e){return typeof n=="function"?n(e):n}const Br={constellationField:{title:"Constellation Field",source:QN,supportsMode:!0,background:n=>n==="light"?io:"#070914",targets:[{selector:"#constellationCanvas",role:"background"}],patch(n,{size:e,length:t,density:i,strokeWidth:s,mode:a}){let l=n.replace("const LINK = 160;",`const LINK = ${Math.round(160*t)};`).replace("const MAX_NODES = window.innerWidth < 768 ? 40 : 85;",`const MAX_NODES = window.innerWidth < 768 ? ${Xn(40,i,8)} : ${Xn(85,i,12)};`).replace("radius: Math.random() * 2.4 + 1.8",`radius: (Math.random() * 2.4 + 1.8) * ${e}`).replace("ctx.lineWidth = 1;",`ctx.lineWidth = ${Number(Math.max(.25,s).toFixed(2))};`).replace("node.x += node.vx;","node.x += node.vx * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("node.y += node.vy;","node.y += node.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);");return a==="light"&&(l=l.replace("ctx.strokeStyle = '#E6C879';","ctx.strokeStyle = '#8B6914';").replace("ctx.fillStyle = '#E6C879';","ctx.fillStyle = '#8B6914';")),l}},particleDrift:{title:"Particle Drift",source:eF,supportsMode:!0,background:n=>n==="light"?io:"#030509",targets:[{selector:"#particle-canvas",role:"background"}],patch(n,{size:e,length:t,density:i,mode:s}){const a=Math.round(120*t),l=s==="light"?.22:.15;let u=n.replace("Array.from({ length: 90 })",`Array.from({ length: ${Xn(90,i,12)} })`).replace("Array.from({ length: 25 })",`Array.from({ length: ${Xn(25,i,4)} })`).replace("length: Math.random() * 100 + 50,",`length: (Math.random() * 100 + 50) * ${t},`).replace("n.y += n.vy; // Slow drift","n.y += n.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1); // Slow drift").replace("b.y -= b.speed;","b.y -= b.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("if(d < 120) {",`if(d < ${a}) {`).replace("0.15 * (1 - d/120)",`${l} * (1 - d/${a})`).replace("ctx.lineWidth = 1.5;",`ctx.lineWidth = ${Number((1.5*e).toFixed(2))};`);return s==="light"&&(u=u.replaceAll("rgba(96, 165, 250,","rgba(37, 99, 235,").replaceAll("rgba(156, 163, 175,","rgba(36, 48, 68,").replace("ctx.fillStyle = dist < 180 ? '#60A5FA' : 'rgba(36, 48, 68, 0.4)';","ctx.fillStyle = dist < 180 ? '#2563EB' : 'rgba(36, 48, 68, 0.55)';")),u}},particleNetwork:{title:"Particle Network",source:tF,supportsMode:!0,background:n=>n==="light"?io:"#05070d",targets:[{selector:"#particle-canvas",role:"background"}],patch(n,{size:e,length:t,density:i,mode:s}){let a=n.replace("const particleCount = 200;",`const particleCount = ${Xn(200,i,40)};`).replace("this.length = Math.random() * 2 + 0.5;",`this.length = (Math.random() * 2 + 0.5) * ${t};`).replace("this.z -= this.speed;","this.z -= this.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("const fov = 300;",`const fov = ${Math.round(300/Math.max(.4,e))};`);return s==="light"&&(a=a.replace("ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';","ctx.fillStyle = 'rgba(238, 241, 246, 0.55)';").replace("const hue = Math.random() > 0.5 ? '200, 220, 255' : '106, 157, 237';","const hue = Math.random() > 0.5 ? '36, 48, 68' : '37, 99, 235';")),a}},gatewayFlow:{title:"Gateway Flow",source:nF,supportsMode:!0,background:n=>n==="light"?io:"#000000",targets:[{selector:"#flow-canvas",role:"background"}],patch(n,{size:e,density:t,mode:i}){let s=n.replace("const numPaths = 80;",`const numPaths = ${Xn(80,t,12)};`).replace("p.t += p.speed;","p.t += p.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("ctx.lineWidth = 1.2;",`ctx.lineWidth = ${Number((1.2*e).toFixed(2))};`);return i==="light"&&(s=s.replace("ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';","ctx.strokeStyle = 'rgba(26, 31, 42, 0.4)';").replace("ctx.fillStyle = `rgba(255, 255, 255, 0.7)`;","ctx.fillStyle = `rgba(26, 31, 42, 0.75)`;")),s}},connectivityGraph:{title:"Connectivity Graph",source:iF,supportsMode:!0,defaultMode:"light",background:n=>n==="light"?"#c4d9ef":"#0a1220",targets:[{selector:"#networkCanvas",role:"background"}],patch(n,{size:e,length:t,density:i,mode:s}){let a=n.replace("const particleCount = window.innerWidth < 768 ? 150 : 400;",`const particleCount = window.innerWidth < 768 ? ${Xn(150,i,30)} : ${Xn(400,i,60)};`).replace("this.maxLength = 20 + Math.random() * 180;",`this.maxLength = (20 + Math.random() * 180) * ${t};`).replace("this.distance += this.speed;","this.distance += this.speed * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("ctx.lineWidth = 0.5 + (distRatio * 2);",`ctx.lineWidth = (0.5 + (distRatio * 2)) * ${e};`);return s==="dark"&&(a=a.replace("const lightness = 15 + (distRatio * 35);","const lightness = 58 + (distRatio * 28);").replace("const tailColor = `hsla(${hue}, 90%, ${Math.max(5, lightness - 15)}%, ${this.alpha * 0.05})`;","const tailColor = `hsla(${hue}, 90%, ${Math.max(40, lightness - 15)}%, ${this.alpha * 0.08})`;")),a}},interfaceLines:{title:"Interface Lines",source:rF,supportsMode:!0,background:n=>n==="light"?io:"#050505",targets:[{selector:"#bg-canvas",role:"background"}],patch(n,{size:e,length:t,density:i,mode:s}){const a=Math.round(120*t);let l=n.replace("const numParticles = window.innerWidth < 640 ? 30 : 70;",`const numParticles = window.innerWidth < 640 ? ${Xn(30,i,8)} : ${Xn(70,i,12)};`).replace("p.x += p.vx;","p.x += p.vx * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("p.y += p.vy;","p.y += p.vy * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("if (dist < 120)",`if (dist < ${a})`).replace("ctx.lineWidth = 1;",`ctx.lineWidth = ${Number((1*e).toFixed(2))};`);return s==="light"?l=l.replace("ctx.strokeStyle = `rgba(255, 255, 255, ${0.28 + (1 - dist / 120) * 0.42})`;",`ctx.strokeStyle = \`rgba(26, 31, 42, \${0.28 + (1 - dist / ${a}) * 0.42})\`;`).replace("ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';","ctx.fillStyle = 'rgba(26, 31, 42, 0.85)';"):l=l.replace("ctx.strokeStyle = `rgba(255, 255, 255, ${0.28 + (1 - dist / 120) * 0.42})`;",`ctx.strokeStyle = \`rgba(255, 255, 255, \${0.28 + (1 - dist / ${a}) * 0.42})\`;`),l}},defenseLines:{title:"Defense Lines",source:sF,supportsMode:!0,background:n=>n==="light"?"#f4ecec":"#120303",targets:[{selector:"#bg-canvas",role:"background"}],patch(n,{size:e,length:t,density:i,mode:s}){let a=n.replace("const particleCount = window.innerWidth < 768 ? 40 : 100;",`const particleCount = window.innerWidth < 768 ? ${Xn(40,i,8)} : ${Xn(100,i,16)};`).replace("baseLength: Math.random() * 80 + 20,",`baseLength: (Math.random() * 80 + 20) * ${t},`).replace("p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5);","p.y -= p.speedY * 1.5 * (1 + centerProximity * 0.5) * ((window.__SF_CONTROLS&&window.__SF_CONTROLS.speed)||1);").replace("ctx.lineWidth = 0.5;",`ctx.lineWidth = ${Number((.5*e).toFixed(2))};`);return s==="light"&&(a=a.replaceAll("rgba(220, 38, 38, 0)","rgba(153, 27, 27, 0)").replace("grad.addColorStop(0.5, `rgba(255, ${38 + brightness}, ${38 + brightness}, ${currentOpacity})`);","grad.addColorStop(0.5, `rgba(185, ${20 + brightness * 0.55}, ${20 + brightness * 0.55}, ${currentOpacity})`);")),a}},topoField:{title:"Topo Field",source:oF,supportsMode:!0,background:n=>n==="light"?io:"#000000",targets:[{selector:"#topo-canvas",role:"background"}],patch(n,{length:e,density:t,mode:i}){let s=n.replace("float noiseScale = 1.4;",`float noiseScale = ${jx(1.4*e,3)};`).replace("float numBands = 10.0;",`float numBands = ${jx(10*t,2)};`);return i==="light"&&(s=s.replace("gridLines = clamp(gridLines, 0.0, 1.0) * 0.12;","gridLines = clamp(gridLines, 0.0, 1.0) * 0.55;").replace("float topoLines = smoothstep(0.02, 0.00, triangleWave) * 0.45;","float topoLines = smoothstep(0.03, 0.00, triangleWave) * 0.95;").replace(`vec3 color = vec3(0.0);
                    color += vec3(1.0) * gridLines;
                    color += vec3(1.0) * topoLines;`,`vec3 paper = vec3(0.933, 0.945, 0.965);
                    vec3 ink = vec3(0.12, 0.14, 0.18);
                    float lines = clamp(gridLines + topoLines, 0.0, 1.0);
                    vec3 color = mix(paper, ink, lines);`)),s}}};function cF(n,e){const t=e.mode,i=B1(n.background,t),s=JSON.stringify(n.targets).replace(/</g,"\\u003c"),a=JSON.stringify({mode:t,speed:e.speed,size:e.size,gap:e.gap,length:e.length,density:e.density,strokeWidth:e.strokeWidth,opacity:e.opacity}).replace(/</g,"\\u003c"),l=n.patch?n.patch(n.source,{variant:e.variant,size:e.size,gap:e.gap,length:e.length,density:e.density,strokeWidth:e.strokeWidth,mode:t}):n.source,u=`<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${i} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; }
[data-threeui-role="ui"] { position: relative !important; z-index: 1 !important; width: min(calc(100% - 32px), var(--threeui-target-width, 1040px)) !important; max-width: none !important; max-height: calc(100% - 32px) !important; margin: auto !important; overflow: auto !important; opacity: 1 !important; transform: none !important; filter: none !important; flex: none !important; box-sizing: border-box !important; }
${n.focusCss??""}
</style>`,d=`<script data-threeui-controls>
(function () {
  var controls = ${a};
  window.__SF_CONTROLS = controls;
  var origin = performance.now();
  var virtual = 0;
  var last = origin;
  var performanceNow = performance.now.bind(performance);
  var dateNow = Date.now.bind(Date);
  var dateOrigin = dateNow();
  performance.now = function () {
    var real = performanceNow();
    virtual += (real - last) * (controls.speed || 1);
    last = real;
    return origin + virtual;
  };
  Date.now = function () {
    return dateOrigin + (performance.now() - origin);
  };
  var raf = window.requestAnimationFrame.bind(window);
  window.requestAnimationFrame = function (callback) {
    return raf(function () {
      callback(performance.now());
    });
  };
  function applyVisual() {
    var opacity = controls.opacity == null ? 1 : controls.opacity;
    var size = controls.size == null ? 1 : controls.size;
    Array.prototype.forEach.call(document.querySelectorAll('[data-threeui-role]'), function (element) {
      element.style.opacity = String(opacity);
      if (element.getAttribute('data-threeui-role') === 'ui') {
        element.style.transform = 'scale(' + size + ')';
        element.style.transformOrigin = 'center center';
      }
    });
  }
  window.addEventListener('message', function (event) {
    if (!event.data || event.data.type !== 'threeui-controls') return;
    var next = event.data.controls || {};
    Object.keys(next).forEach(function (key) { controls[key] = next[key]; });
    applyVisual();
  });
  window.__SF_APPLY_CONTROLS = applyVisual;
})();
<\/script>`,h=`<script data-threeui-focus>
(function () {
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${s};
    var roots = [];
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.width) element.style.setProperty('--threeui-target-width', spec.width);
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) { document.body.appendChild(root); });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    if (window.__SF_APPLY_CONTROLS) window.__SF_APPLY_CONTROLS();
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
<\/script>`;return l.replace(/<head([^>]*)>/i,`<head$1>${d}${u}`).replace(/<\/body>/i,`${h}</body>`)}function uF({definition:n,variant:e="cube",mode:t,speed:i=An.speed,size:s=An.size,gap:a=An.gap,length:l=An.length,density:u=An.density,strokeWidth:d=An.strokeWidth,opacity:h=An.opacity,hue:p=An.hue,saturation:m=An.saturation,brightness:g=An.brightness,className:y,style:_}){const S=Y.useRef(null),M=t??n.defaultMode??An.mode,b=lF(M==="auto"),w=M==="auto"?b:aF(M,An.mode),C=B1(n.background,w),R=Mi(i,0,3),A=Mi(s,.05,200),T=Mi(a,0,64),B=Mi(l,.35,2.5),U=Mi(u,.25,2.5),q=Mi(d,.25,8),ee=Mi(h,.05,1),ae=Mi(p,-180,180),oe=Mi(m,0,2),z=Mi(g,.35,1.65),G=Y.useMemo(()=>cF(n,{variant:e,mode:w,speed:An.speed,size:A,gap:T,length:B,density:U,strokeWidth:q,opacity:An.opacity}),[n,w,U,T,B,A,q,e]);Y.useEffect(()=>{var ie;const V=(ie=S.current)==null?void 0:ie.contentWindow;V&&V.postMessage({type:"threeui-controls",controls:{mode:w,speed:R,size:A,gap:T,length:B,density:U,strokeWidth:q,opacity:ee}},"*")},[w,U,T,B,ee,A,R,q,G]);const W=ae===0&&oe===1&&z===1?void 0:`hue-rotate(${ae}deg) saturate(${oe}) brightness(${z})`;return te.jsx("iframe",{ref:S,className:y,title:n.title,srcDoc:G,sandbox:"allow-scripts",loading:"eager",style:{display:"block",width:"100%",height:"100%",border:0,background:C,filter:W,..._}})}function Or(n){return function(e){return te.jsx(uF,{...e,definition:n})}}const dF=Or(Br.constellationField),O1=Or(Br.particleDrift),hF=Or(Br.particleNetwork),fF=Or(Br.gatewayFlow),pF=Or(Br.connectivityGraph),mF=Or(Br.interfaceLines),gF=Or(Br.defenseLines),vF=Or(Br.topoField),yF={"constellation-field":dF,"particle-drift":O1,"particle-network":hF,"gateway-flow":fF,"connectivity-graph":pF,"interface-lines":mF,"defense-lines":gF,"topo-field":vF};function xF({variant:n="constellation-field",...e}){const t=yF[n];return te.jsx(t,{...e})}const wF=[{tag:"Program Coordination",title:"Joyful Yatra Enabling Program",desc:"As Assistant Coordinator at City Montessori School, I keep student initiatives organized, funded, and on schedule — from planning decks to day-of logistics.",span:"wide"},{tag:"Finance",title:"Budget & Expense Tracking",desc:"Built lightweight tracking for program spend so every rupee is accountable and reporting takes minutes, not hours.",span:"tall"},{tag:"Marketing",title:"Outreach Campaigns",desc:"Designed and ran awareness drives across campus that lifted participation across departments.",span:"normal"},{tag:"Events",title:"Event Operations",desc:"Co-led 10+ events end-to-end: scheduling, vendors, volunteers, and run-of-show.",span:"normal"},{tag:"Communications",title:"Reporting & Storytelling",desc:"Turned program outcomes into clear updates for coordinators, students, and stakeholders.",span:"wide"}],_F=["All","Finance","Marketing","Events","Communications","Program Coordination"];function bF(){const[n,e]=Y.useState("All"),t=wF.filter(i=>n==="All"||i.tag===n);return te.jsx(qu,{children:te.jsxs("div",{className:"page-inner work-page",children:[te.jsx(xF,{className:"page-field",variant:"constellation-field"}),te.jsxs($n,{children:[te.jsx("span",{className:"section-kicker",children:"Selected Work"}),te.jsx("h1",{className:"page-title",children:"Coordination, finance & outreach"}),te.jsx("p",{className:"page-lede",children:"A focused body of work across program coordination, finance, and people-facing operations — the kind of behind-the-scenes effort that makes programs land."})]}),te.jsx("div",{className:"filter-row",children:_F.map(i=>te.jsx("button",{className:`filter-chip ${n===i?"active":""}`,onClick:()=>e(i),children:i},i))}),te.jsx(Mt.div,{layout:!0,className:"work-grid",children:t.map(i=>te.jsxs(Mt.article,{layout:!0,className:`bento-card work-card ${i.span}`,initial:{opacity:0,y:24},animate:{opacity:1,y:0},exit:{opacity:0,scale:.96},transition:{duration:.5,ease:[.22,1,.36,1]},whileHover:{y:-6},children:[te.jsx("span",{className:"work-tag",children:i.tag}),te.jsx("h3",{children:i.title}),te.jsx("p",{children:i.desc})]},i.title))})]})})}const SF=[{t:"Order",d:"Finance discipline and clear systems so nothing falls through the cracks."},{t:"People",d:"Coordination is really about people — I keep students and teams moving together."},{t:"Care",d:"Small details in comms and logistics are what make a program feel effortless."}],MF=["Finance Coordination","Marketing","Event Management","Operations","Student Engagement","Communications","Reporting","Scheduling"];function EF(){return te.jsx(qu,{children:te.jsxs("div",{className:"page-inner about-page",children:[te.jsx(O1,{className:"page-field alt"}),te.jsxs($n,{children:[te.jsx("span",{className:"section-kicker",children:"About"}),te.jsx("h1",{className:"page-title",children:"Saman Rizvi"}),te.jsx("p",{className:"page-lede",children:"B.Com graduate and Assistant Coordinator for the Joyful Yatra Enabling Program at City Montessori School, Lucknow. I sit at the intersection of finance and people — the person who makes sure the plan is funded, the message lands, and the day runs smooth."})]}),te.jsxs("div",{className:"about-split",children:[te.jsxs($n,{className:"about-bio",children:[te.jsx("h2",{className:"section-title",children:"How I work"}),te.jsx("p",{children:"My background in commerce gives me the analytical backbone; my coordination role gives me the people muscle. I like turning loose ideas into scheduled, budgeted, communicated reality — and I care about the experience of everyone involved."}),te.jsx("p",{children:"Outside program work, I'm drawn to design and thoughtful communication, which is partly why this little site exists — to present the professional me with the same care I bring to a program."})]}),te.jsx($n,{className:"about-values",delay:.1,children:SF.map(n=>te.jsxs("div",{className:"value-card",children:[te.jsx("h3",{children:n.t}),te.jsx("p",{children:n.d})]},n.t))})]}),te.jsxs($n,{className:"about-skills",children:[te.jsx("span",{className:"section-kicker",children:"Focus Areas"}),te.jsx("div",{className:"skill-tags",children:MF.map(n=>te.jsx(Mt.span,{className:"skill-tag",whileHover:{backgroundColor:"var(--crimson)",color:"var(--white)"},children:n},n))})]})]})})}function TF(){const[n,e]=Y.useState(!1),t=i=>{i.preventDefault(),e(!0)};return te.jsx(qu,{children:te.jsxs("div",{className:"page-inner contact-page",children:[te.jsxs($n,{children:[te.jsx("span",{className:"section-kicker",children:"Let's build something"}),te.jsx("h1",{className:"page-title",children:"Get in touch"}),te.jsx("p",{className:"page-lede",children:"Open to program, operations, and marketing collaborations. Send a note or reach me directly."})]}),te.jsxs("div",{className:"contact-grid",children:[te.jsx($n,{className:"contact-form-wrap",children:n?te.jsxs(Mt.div,{className:"sent-card",initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},transition:{duration:.5,ease:[.22,1,.36,1]},children:[te.jsx("h3",{children:"Thank you 💌"}),te.jsx("p",{children:"Your message is on its way. I'll reply soon."})]}):te.jsxs("form",{className:"contact-form",onSubmit:t,children:[te.jsxs("label",{children:[te.jsx("span",{children:"Name"}),te.jsx("input",{type:"text",name:"name",required:!0,placeholder:"Your name"})]}),te.jsxs("label",{children:[te.jsx("span",{children:"Email"}),te.jsx("input",{type:"email",name:"email",required:!0,placeholder:"you@email.com"})]}),te.jsxs("label",{children:[te.jsx("span",{children:"Message"}),te.jsx("textarea",{name:"message",rows:4,required:!0,placeholder:"How can we work together?"})]}),te.jsx(Mt.button,{type:"submit",className:"btn btn-primary",whileHover:{scale:1.03},whileTap:{scale:.97},children:"Send Message"})]})}),te.jsx($n,{className:"contact-aside",delay:.1,children:te.jsxs("div",{className:"contact-card",children:[te.jsx("h3",{children:"Direct"}),te.jsx(Mt.a,{href:"mailto:hello@samanrizvi.com",className:"contact-link",whileHover:{scale:1.04},whileTap:{scale:.96},children:"hello@samanrizvi.com"}),te.jsx(Mt.a,{href:"https://www.linkedin.com/in/saman-r-0453b2297",target:"_blank",rel:"noreferrer",className:"contact-link",whileHover:{scale:1.04},whileTap:{scale:.96},children:"LinkedIn"}),te.jsx(Mt.a,{href:"https://wa.me/",target:"_blank",rel:"noreferrer",className:"contact-link",whileHover:{scale:1.04},whileTap:{scale:.96},children:"WhatsApp"})]})})]})]})})}function AF(){const{pathname:n}=us();return Y.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"in window?"instant":"auto"})},[n]),null}function CF(){const n=us(),{scrollYProgress:e}=V_(),t=UC(e,{stiffness:120,damping:30,restDelta:.001});return te.jsxs(te.Fragment,{children:[te.jsx(Mt.div,{style:{position:"fixed",top:0,left:0,right:0,height:4,background:"var(--crimson)",transformOrigin:"0%",scaleX:t,zIndex:2e3}}),te.jsx(ZC,{}),te.jsx(AF,{}),te.jsx(XM,{mode:"wait",children:te.jsxs(AM,{location:n,children:[te.jsx(ro,{path:"/",element:te.jsx(Wx,{})}),te.jsx(ro,{path:"/work",element:te.jsx(bF,{})}),te.jsx(ro,{path:"/about",element:te.jsx(EF,{})}),te.jsx(ro,{path:"/contact",element:te.jsx(TF,{})}),te.jsx(ro,{path:"*",element:te.jsx(Wx,{})})]},n.pathname)}),te.jsxs("footer",{className:"footer",children:["© ",new Date().getFullYear()," Saman Rizvi — Crafted with Motion"]})]})}BS.createRoot(document.getElementById("root")).render(te.jsx(Y.StrictMode,{children:te.jsx(NM,{children:te.jsx(CF,{})})}));
