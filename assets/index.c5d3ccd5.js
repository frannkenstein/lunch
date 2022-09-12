(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Tw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ze={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ns=Symbol.for("react.element"),Iw=Symbol.for("react.portal"),kw=Symbol.for("react.fragment"),Cw=Symbol.for("react.strict_mode"),Nw=Symbol.for("react.profiler"),Aw=Symbol.for("react.provider"),Dw=Symbol.for("react.context"),Rw=Symbol.for("react.forward_ref"),Pw=Symbol.for("react.suspense"),xw=Symbol.for("react.memo"),Ow=Symbol.for("react.lazy"),Hd=Symbol.iterator;function Lw(t){return t===null||typeof t!="object"?null:(t=Hd&&t[Hd]||t["@@iterator"],typeof t=="function"?t:null)}var gm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ym=Object.assign,vm={};function ii(t,e,n){this.props=t,this.context=e,this.refs=vm,this.updater=n||gm}ii.prototype.isReactComponent={};ii.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ii.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wm(){}wm.prototype=ii.prototype;function Bc(t,e,n){this.props=t,this.context=e,this.refs=vm,this.updater=n||gm}var jc=Bc.prototype=new wm;jc.constructor=Bc;ym(jc,ii.prototype);jc.isPureReactComponent=!0;var Kd=Array.isArray,Em=Object.prototype.hasOwnProperty,Hc={current:null},Sm={key:!0,ref:!0,__self:!0,__source:!0};function _m(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Em.call(e,r)&&!Sm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ns,type:t,key:s,ref:o,props:i,_owner:Hc.current}}function Mw(t,e){return{$$typeof:Ns,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ns}function $w(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wd=/\/+/g;function Pl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$w(""+t.key):e.toString(36)}function Co(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ns:case Iw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pl(o,0):r,Kd(i)?(n="",t!=null&&(n=t.replace(Wd,"$&/")+"/"),Co(i,e,n,"",function(u){return u})):i!=null&&(Kc(i)&&(i=Mw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Kd(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Pl(s,a);o+=Co(s,e,n,l,i)}else if(l=Lw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Pl(s,a++),o+=Co(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function to(t,e,n){if(t==null)return t;var r=[],i=0;return Co(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Uw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var We={current:null},No={transition:null},Fw={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:No,ReactCurrentOwner:Hc};j.Children={map:to,forEach:function(t,e,n){to(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return to(t,function(){e++}),e},toArray:function(t){return to(t,function(e){return e})||[]},only:function(t){if(!Kc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=ii;j.Fragment=kw;j.Profiler=Nw;j.PureComponent=Bc;j.StrictMode=Cw;j.Suspense=Pw;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fw;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ym({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Em.call(e,l)&&!Sm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ns,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:Dw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Aw,_context:t},t.Consumer=t};j.createElement=_m;j.createFactory=function(t){var e=_m.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:Rw,render:t}};j.isValidElement=Kc;j.lazy=function(t){return{$$typeof:Ow,_payload:{_status:-1,_result:t},_init:Uw}};j.memo=function(t,e){return{$$typeof:xw,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=No.transition;No.transition={};try{t()}finally{No.transition=e}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(t,e){return We.current.useCallback(t,e)};j.useContext=function(t){return We.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return We.current.useDeferredValue(t)};j.useEffect=function(t,e){return We.current.useEffect(t,e)};j.useId=function(){return We.current.useId()};j.useImperativeHandle=function(t,e,n){return We.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return We.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return We.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return We.current.useMemo(t,e)};j.useReducer=function(t,e,n){return We.current.useReducer(t,e,n)};j.useRef=function(t){return We.current.useRef(t)};j.useState=function(t){return We.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return We.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return We.current.useTransition()};j.version="18.2.0";(function(t){t.exports=j})(ze);const Vw=Tw(ze.exports);var Su={},Tm={exports:{}},ot={},Im={exports:{}},km={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,F){var V=C.length;C.push(F);e:for(;0<V;){var ae=V-1>>>1,ve=C[ae];if(0<i(ve,F))C[ae]=F,C[V]=ve,V=ae;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var F=C[0],V=C.pop();if(V!==F){C[0]=V;e:for(var ae=0,ve=C.length,Zs=ve>>>1;ae<Zs;){var $n=2*(ae+1)-1,Rl=C[$n],Un=$n+1,eo=C[Un];if(0>i(Rl,V))Un<ve&&0>i(eo,Rl)?(C[ae]=eo,C[Un]=V,ae=Un):(C[ae]=Rl,C[$n]=V,ae=$n);else if(Un<ve&&0>i(eo,V))C[ae]=eo,C[Un]=V,ae=Un;else break e}}return F}function i(C,F){var V=C.sortIndex-F.sortIndex;return V!==0?V:C.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,g=!1,y=!1,v=!1,D=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=C)r(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function w(C){if(v=!1,m(C),!y)if(n(l)!==null)y=!0,Al(T);else{var F=n(u);F!==null&&Dl(w,F.startTime-C)}}function T(C,F){y=!1,v&&(v=!1,p(P),P=-1),g=!0;var V=f;try{for(m(F),h=n(l);h!==null&&(!(h.expirationTime>F)||C&&!gt());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,f=h.priorityLevel;var ve=ae(h.expirationTime<=F);F=t.unstable_now(),typeof ve=="function"?h.callback=ve:h===n(l)&&r(l),m(F)}else r(l);h=n(l)}if(h!==null)var Zs=!0;else{var $n=n(u);$n!==null&&Dl(w,$n.startTime-F),Zs=!1}return Zs}finally{h=null,f=V,g=!1}}var N=!1,A=null,P=-1,X=5,z=-1;function gt(){return!(t.unstable_now()-z<X)}function pi(){if(A!==null){var C=t.unstable_now();z=C;var F=!0;try{F=A(!0,C)}finally{F?mi():(N=!1,A=null)}}else N=!1}var mi;if(typeof d=="function")mi=function(){d(pi)};else if(typeof MessageChannel<"u"){var jd=new MessageChannel,_w=jd.port2;jd.port1.onmessage=pi,mi=function(){_w.postMessage(null)}}else mi=function(){D(pi,0)};function Al(C){A=C,N||(N=!0,mi())}function Dl(C,F){P=D(function(){C(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Al(T))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(f){case 1:case 2:case 3:var F=3;break;default:F=f}var V=f;f=F;try{return C()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,F){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var V=f;f=C;try{return F()}finally{f=V}},t.unstable_scheduleCallback=function(C,F,V){var ae=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ae+V:ae):V=ae,C){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=V+ve,C={id:c++,callback:F,priorityLevel:C,startTime:V,expirationTime:ve,sortIndex:-1},V>ae?(C.sortIndex=V,e(u,C),n(l)===null&&C===n(u)&&(v?(p(P),P=-1):v=!0,Dl(w,V-ae))):(C.sortIndex=ve,e(l,C),y||g||(y=!0,Al(T))),C},t.unstable_shouldYield=gt,t.unstable_wrapCallback=function(C){var F=f;return function(){var V=f;f=F;try{return C.apply(this,arguments)}finally{f=V}}}})(km);(function(t){t.exports=km})(Im);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm=ze.exports,it=Im.exports;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Nm=new Set,Gi={};function hr(t,e){Br(t,e),Br(t+"Capture",e)}function Br(t,e){for(Gi[t]=e,t=0;t<e.length;t++)Nm.add(e[t])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=Object.prototype.hasOwnProperty,bw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qd={},Gd={};function zw(t){return _u.call(Gd,t)?!0:_u.call(qd,t)?!1:bw.test(t)?Gd[t]=!0:(qd[t]=!0,!1)}function Bw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jw(t,e,n,r){if(e===null||typeof e>"u"||Bw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function qe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Re[t]=new qe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Re[e]=new qe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Re[t]=new qe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Re[t]=new qe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Re[t]=new qe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Re[t]=new qe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Re[t]=new qe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Re[t]=new qe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Re[t]=new qe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wc=/[\-:]([a-z])/g;function qc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wc,qc);Re[e]=new qe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wc,qc);Re[e]=new qe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wc,qc);Re[e]=new qe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Re[t]=new qe(t,1,!1,t.toLowerCase(),null,!1,!1)});Re.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Re[t]=new qe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gc(t,e,n,r){var i=Re.hasOwnProperty(e)?Re[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jw(e,n,i,r)&&(n=null),r||i===null?zw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tn=Cm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),vr=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),Qc=Symbol.for("react.strict_mode"),Tu=Symbol.for("react.profiler"),Am=Symbol.for("react.provider"),Dm=Symbol.for("react.context"),Yc=Symbol.for("react.forward_ref"),Iu=Symbol.for("react.suspense"),ku=Symbol.for("react.suspense_list"),Xc=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Rm=Symbol.for("react.offscreen"),Qd=Symbol.iterator;function gi(t){return t===null||typeof t!="object"?null:(t=Qd&&t[Qd]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Object.assign,xl;function Ci(t){if(xl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xl=e&&e[1]||""}return`
`+xl+t}var Ol=!1;function Ll(t,e){if(!t||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ci(t):""}function Hw(t){switch(t.tag){case 5:return Ci(t.type);case 16:return Ci("Lazy");case 13:return Ci("Suspense");case 19:return Ci("SuspenseList");case 0:case 2:case 15:return t=Ll(t.type,!1),t;case 11:return t=Ll(t.type.render,!1),t;case 1:return t=Ll(t.type,!0),t;default:return""}}function Cu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wr:return"Fragment";case vr:return"Portal";case Tu:return"Profiler";case Qc:return"StrictMode";case Iu:return"Suspense";case ku:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dm:return(t.displayName||"Context")+".Consumer";case Am:return(t._context.displayName||"Context")+".Provider";case Yc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xc:return e=t.displayName||null,e!==null?e:Cu(t.type)||"Memo";case on:e=t._payload,t=t._init;try{return Cu(t(e))}catch{}}return null}function Kw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cu(e);case 8:return e===Qc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ww(t){var e=Pm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ro(t){t._valueTracker||(t._valueTracker=Ww(t))}function xm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Pm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ko(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nu(t,e){var n=e.checked;return ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Yd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Cn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Om(t,e){e=e.checked,e!=null&&Gc(t,"checked",e,!1)}function Au(t,e){Om(t,e);var n=Cn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Du(t,e.type,n):e.hasOwnProperty("defaultValue")&&Du(t,e.type,Cn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Du(t,e,n){(e!=="number"||Ko(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ni=Array.isArray;function xr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Cn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ru(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Ni(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cn(n)}}function Lm(t,e){var n=Cn(e.value),r=Cn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var io,$m=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=io.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qw=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(t){qw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),xi[e]=xi[t]})});function Um(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||xi.hasOwnProperty(t)&&xi[t]?(""+e).trim():e+"px"}function Fm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Um(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Gw=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xu(t,e){if(e){if(Gw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Ou(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lu=null;function Jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mu=null,Or=null,Lr=null;function ef(t){if(t=Rs(t)){if(typeof Mu!="function")throw Error(E(280));var e=t.stateNode;e&&(e=ja(e),Mu(t.stateNode,t.type,e))}}function Vm(t){Or?Lr?Lr.push(t):Lr=[t]:Or=t}function bm(){if(Or){var t=Or,e=Lr;if(Lr=Or=null,ef(t),e)for(t=0;t<e.length;t++)ef(e[t])}}function zm(t,e){return t(e)}function Bm(){}var Ml=!1;function jm(t,e,n){if(Ml)return t(e,n);Ml=!0;try{return zm(t,e,n)}finally{Ml=!1,(Or!==null||Lr!==null)&&(Bm(),bm())}}function Yi(t,e){var n=t.stateNode;if(n===null)return null;var r=ja(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var $u=!1;if(Wt)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){$u=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{$u=!1}function Qw(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Oi=!1,Wo=null,qo=!1,Uu=null,Yw={onError:function(t){Oi=!0,Wo=t}};function Xw(t,e,n,r,i,s,o,a,l){Oi=!1,Wo=null,Qw.apply(Yw,arguments)}function Jw(t,e,n,r,i,s,o,a,l){if(Xw.apply(this,arguments),Oi){if(Oi){var u=Wo;Oi=!1,Wo=null}else throw Error(E(198));qo||(qo=!0,Uu=u)}}function dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tf(t){if(dr(t)!==t)throw Error(E(188))}function Zw(t){var e=t.alternate;if(!e){if(e=dr(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return tf(i),t;if(s===r)return tf(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Km(t){return t=Zw(t),t!==null?Wm(t):null}function Wm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wm(t);if(e!==null)return e;t=t.sibling}return null}var qm=it.unstable_scheduleCallback,nf=it.unstable_cancelCallback,e1=it.unstable_shouldYield,t1=it.unstable_requestPaint,le=it.unstable_now,n1=it.unstable_getCurrentPriorityLevel,Zc=it.unstable_ImmediatePriority,Gm=it.unstable_UserBlockingPriority,Go=it.unstable_NormalPriority,r1=it.unstable_LowPriority,Qm=it.unstable_IdlePriority,Va=null,Nt=null;function i1(t){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Va,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:a1,s1=Math.log,o1=Math.LN2;function a1(t){return t>>>=0,t===0?32:31-(s1(t)/o1|0)|0}var so=64,oo=4194304;function Ai(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ai(a):(s&=o,s!==0&&(r=Ai(s)))}else o=n&~i,o!==0?r=Ai(o):s!==0&&(r=Ai(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-St(e),i=1<<n,r|=t[n],e&=~i;return r}function l1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-St(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=l1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Fu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ym(){var t=so;return so<<=1,(so&4194240)===0&&(so=64),t}function $l(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function As(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-St(e),t[e]=n}function c1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-St(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function eh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-St(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var G=0;function Xm(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Jm,th,Zm,eg,tg,Vu=!1,ao=[],mn=null,gn=null,yn=null,Xi=new Map,Ji=new Map,ln=[],h1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rf(t,e){switch(t){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":Xi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(e.pointerId)}}function vi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Rs(e),e!==null&&th(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function d1(t,e,n,r,i){switch(e){case"focusin":return mn=vi(mn,t,e,n,r,i),!0;case"dragenter":return gn=vi(gn,t,e,n,r,i),!0;case"mouseover":return yn=vi(yn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xi.set(s,vi(Xi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ji.set(s,vi(Ji.get(s)||null,t,e,n,r,i)),!0}return!1}function ng(t){var e=zn(t.target);if(e!==null){var n=dr(e);if(n!==null){if(e=n.tag,e===13){if(e=Hm(n),e!==null){t.blockedOn=e,tg(t.priority,function(){Zm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ao(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lu=r,n.target.dispatchEvent(r),Lu=null}else return e=Rs(n),e!==null&&th(e),t.blockedOn=n,!1;e.shift()}return!0}function sf(t,e,n){Ao(t)&&n.delete(e)}function f1(){Vu=!1,mn!==null&&Ao(mn)&&(mn=null),gn!==null&&Ao(gn)&&(gn=null),yn!==null&&Ao(yn)&&(yn=null),Xi.forEach(sf),Ji.forEach(sf)}function wi(t,e){t.blockedOn===e&&(t.blockedOn=null,Vu||(Vu=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,f1)))}function Zi(t){function e(i){return wi(i,t)}if(0<ao.length){wi(ao[0],t);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mn!==null&&wi(mn,t),gn!==null&&wi(gn,t),yn!==null&&wi(yn,t),Xi.forEach(e),Ji.forEach(e),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)ng(n),n.blockedOn===null&&ln.shift()}var Mr=tn.ReactCurrentBatchConfig,Yo=!0;function p1(t,e,n,r){var i=G,s=Mr.transition;Mr.transition=null;try{G=1,nh(t,e,n,r)}finally{G=i,Mr.transition=s}}function m1(t,e,n,r){var i=G,s=Mr.transition;Mr.transition=null;try{G=4,nh(t,e,n,r)}finally{G=i,Mr.transition=s}}function nh(t,e,n,r){if(Yo){var i=bu(t,e,n,r);if(i===null)Wl(t,e,r,Xo,n),rf(t,r);else if(d1(i,t,e,n,r))r.stopPropagation();else if(rf(t,r),e&4&&-1<h1.indexOf(t)){for(;i!==null;){var s=Rs(i);if(s!==null&&Jm(s),s=bu(t,e,n,r),s===null&&Wl(t,e,r,Xo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Wl(t,e,r,null,n)}}var Xo=null;function bu(t,e,n,r){if(Xo=null,t=Jc(r),t=zn(t),t!==null)if(e=dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Xo=t,null}function rg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n1()){case Zc:return 1;case Gm:return 4;case Go:case r1:return 16;case Qm:return 536870912;default:return 16}default:return 16}}var fn=null,rh=null,Do=null;function ig(){if(Do)return Do;var t,e=rh,n=e.length,r,i="value"in fn?fn.value:fn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Do=i.slice(t,1<r?1-r:void 0)}function Ro(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function of(){return!1}function at(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lo:of,this.isPropagationStopped=of,this}return ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ih=at(si),Ds=ie({},si,{view:0,detail:0}),g1=at(Ds),Ul,Fl,Ei,ba=ie({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ei&&(Ei&&t.type==="mousemove"?(Ul=t.screenX-Ei.screenX,Fl=t.screenY-Ei.screenY):Fl=Ul=0,Ei=t),Ul)},movementY:function(t){return"movementY"in t?t.movementY:Fl}}),af=at(ba),y1=ie({},ba,{dataTransfer:0}),v1=at(y1),w1=ie({},Ds,{relatedTarget:0}),Vl=at(w1),E1=ie({},si,{animationName:0,elapsedTime:0,pseudoElement:0}),S1=at(E1),_1=ie({},si,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),T1=at(_1),I1=ie({},si,{data:0}),lf=at(I1),k1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=N1[t])?!!e[t]:!1}function sh(){return A1}var D1=ie({},Ds,{key:function(t){if(t.key){var e=k1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sh,charCode:function(t){return t.type==="keypress"?Ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),R1=at(D1),P1=ie({},ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uf=at(P1),x1=ie({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sh}),O1=at(x1),L1=ie({},si,{propertyName:0,elapsedTime:0,pseudoElement:0}),M1=at(L1),$1=ie({},ba,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),U1=at($1),F1=[9,13,27,32],oh=Wt&&"CompositionEvent"in window,Li=null;Wt&&"documentMode"in document&&(Li=document.documentMode);var V1=Wt&&"TextEvent"in window&&!Li,sg=Wt&&(!oh||Li&&8<Li&&11>=Li),cf=String.fromCharCode(32),hf=!1;function og(t,e){switch(t){case"keyup":return F1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ag(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Er=!1;function b1(t,e){switch(t){case"compositionend":return ag(e);case"keypress":return e.which!==32?null:(hf=!0,cf);case"textInput":return t=e.data,t===cf&&hf?null:t;default:return null}}function z1(t,e){if(Er)return t==="compositionend"||!oh&&og(t,e)?(t=ig(),Do=rh=fn=null,Er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sg&&e.locale!=="ko"?null:e.data;default:return null}}var B1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function df(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!B1[t.type]:e==="textarea"}function lg(t,e,n,r){Vm(r),e=Jo(e,"onChange"),0<e.length&&(n=new ih("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Mi=null,es=null;function j1(t){wg(t,0)}function za(t){var e=Tr(t);if(xm(e))return t}function H1(t,e){if(t==="change")return e}var ug=!1;if(Wt){var bl;if(Wt){var zl="oninput"in document;if(!zl){var ff=document.createElement("div");ff.setAttribute("oninput","return;"),zl=typeof ff.oninput=="function"}bl=zl}else bl=!1;ug=bl&&(!document.documentMode||9<document.documentMode)}function pf(){Mi&&(Mi.detachEvent("onpropertychange",cg),es=Mi=null)}function cg(t){if(t.propertyName==="value"&&za(es)){var e=[];lg(e,es,t,Jc(t)),jm(j1,e)}}function K1(t,e,n){t==="focusin"?(pf(),Mi=e,es=n,Mi.attachEvent("onpropertychange",cg)):t==="focusout"&&pf()}function W1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return za(es)}function q1(t,e){if(t==="click")return za(e)}function G1(t,e){if(t==="input"||t==="change")return za(e)}function Q1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tt=typeof Object.is=="function"?Object.is:Q1;function ts(t,e){if(Tt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_u.call(e,i)||!Tt(t[i],e[i]))return!1}return!0}function mf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gf(t,e){var n=mf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mf(n)}}function hg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dg(){for(var t=window,e=Ko();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ko(t.document)}return e}function ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Y1(t){var e=dg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hg(n.ownerDocument.documentElement,n)){if(r!==null&&ah(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=gf(n,s);var o=gf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var X1=Wt&&"documentMode"in document&&11>=document.documentMode,Sr=null,zu=null,$i=null,Bu=!1;function yf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bu||Sr==null||Sr!==Ko(r)||(r=Sr,"selectionStart"in r&&ah(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$i&&ts($i,r)||($i=r,r=Jo(zu,"onSelect"),0<r.length&&(e=new ih("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Sr)))}function uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _r={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Bl={},fg={};Wt&&(fg=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function Ba(t){if(Bl[t])return Bl[t];if(!_r[t])return t;var e=_r[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fg)return Bl[t]=e[n];return t}var pg=Ba("animationend"),mg=Ba("animationiteration"),gg=Ba("animationstart"),yg=Ba("transitionend"),vg=new Map,vf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(t,e){vg.set(t,e),hr(e,[t])}for(var jl=0;jl<vf.length;jl++){var Hl=vf[jl],J1=Hl.toLowerCase(),Z1=Hl[0].toUpperCase()+Hl.slice(1);Pn(J1,"on"+Z1)}Pn(pg,"onAnimationEnd");Pn(mg,"onAnimationIteration");Pn(gg,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(yg,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Di));function wf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Jw(r,e,void 0,t),t.currentTarget=null}function wg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;wf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;wf(i,a,u),s=l}}}if(qo)throw t=Uu,qo=!1,Uu=null,t}function J(t,e){var n=e[qu];n===void 0&&(n=e[qu]=new Set);var r=t+"__bubble";n.has(r)||(Eg(e,t,2,!1),n.add(r))}function Kl(t,e,n){var r=0;e&&(r|=4),Eg(n,t,r,e)}var co="_reactListening"+Math.random().toString(36).slice(2);function ns(t){if(!t[co]){t[co]=!0,Nm.forEach(function(n){n!=="selectionchange"&&(eE.has(n)||Kl(n,!1,t),Kl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[co]||(e[co]=!0,Kl("selectionchange",!1,e))}}function Eg(t,e,n,r){switch(rg(e)){case 1:var i=p1;break;case 4:i=m1;break;default:i=nh}n=i.bind(null,e,n,t),i=void 0,!$u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Wl(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=zn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}jm(function(){var u=s,c=Jc(n),h=[];e:{var f=vg.get(t);if(f!==void 0){var g=ih,y=t;switch(t){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":g=R1;break;case"focusin":y="focus",g=Vl;break;case"focusout":y="blur",g=Vl;break;case"beforeblur":case"afterblur":g=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=v1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=O1;break;case pg:case mg:case gg:g=S1;break;case yg:g=M1;break;case"scroll":g=g1;break;case"wheel":g=U1;break;case"copy":case"cut":case"paste":g=T1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=uf}var v=(e&4)!==0,D=!v&&t==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var d=u,m;d!==null;){m=d;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Yi(d,p),w!=null&&v.push(rs(d,w,m)))),D)break;d=d.return}0<v.length&&(f=new g(f,y,null,n,c),h.push({event:f,listeners:v}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Lu&&(y=n.relatedTarget||n.fromElement)&&(zn(y)||y[qt]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?zn(y):null,y!==null&&(D=dr(y),y!==D||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=af,w="onMouseLeave",p="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=uf,w="onPointerLeave",p="onPointerEnter",d="pointer"),D=g==null?f:Tr(g),m=y==null?f:Tr(y),f=new v(w,d+"leave",g,n,c),f.target=D,f.relatedTarget=m,w=null,zn(c)===u&&(v=new v(p,d+"enter",y,n,c),v.target=m,v.relatedTarget=D,w=v),D=w,g&&y)t:{for(v=g,p=y,d=0,m=v;m;m=gr(m))d++;for(m=0,w=p;w;w=gr(w))m++;for(;0<d-m;)v=gr(v),d--;for(;0<m-d;)p=gr(p),m--;for(;d--;){if(v===p||p!==null&&v===p.alternate)break t;v=gr(v),p=gr(p)}v=null}else v=null;g!==null&&Ef(h,f,g,v,!1),y!==null&&D!==null&&Ef(h,D,y,v,!0)}}e:{if(f=u?Tr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var T=H1;else if(df(f))if(ug)T=G1;else{T=W1;var N=K1}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=q1);if(T&&(T=T(t,u))){lg(h,T,n,c);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&Du(f,"number",f.value)}switch(N=u?Tr(u):window,t){case"focusin":(df(N)||N.contentEditable==="true")&&(Sr=N,zu=u,$i=null);break;case"focusout":$i=zu=Sr=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,yf(h,n,c);break;case"selectionchange":if(X1)break;case"keydown":case"keyup":yf(h,n,c)}var A;if(oh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Er?og(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(sg&&n.locale!=="ko"&&(Er||P!=="onCompositionStart"?P==="onCompositionEnd"&&Er&&(A=ig()):(fn=c,rh="value"in fn?fn.value:fn.textContent,Er=!0)),N=Jo(u,P),0<N.length&&(P=new lf(P,t,null,n,c),h.push({event:P,listeners:N}),A?P.data=A:(A=ag(n),A!==null&&(P.data=A)))),(A=V1?b1(t,n):z1(t,n))&&(u=Jo(u,"onBeforeInput"),0<u.length&&(c=new lf("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}wg(h,e)})}function rs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Jo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Yi(t,n),s!=null&&r.unshift(rs(t,s,i)),s=Yi(t,e),s!=null&&r.push(rs(t,s,i))),t=t.return}return r}function gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ef(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Yi(n,s),l!=null&&o.unshift(rs(n,l,a))):i||(l=Yi(n,s),l!=null&&o.push(rs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var tE=/\r\n?/g,nE=/\u0000|\uFFFD/g;function Sf(t){return(typeof t=="string"?t:""+t).replace(tE,`
`).replace(nE,"")}function ho(t,e,n){if(e=Sf(e),Sf(t)!==e&&n)throw Error(E(425))}function Zo(){}var ju=null,Hu=null;function Ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,rE=typeof clearTimeout=="function"?clearTimeout:void 0,_f=typeof Promise=="function"?Promise:void 0,iE=typeof queueMicrotask=="function"?queueMicrotask:typeof _f<"u"?function(t){return _f.resolve(null).then(t).catch(sE)}:Wu;function sE(t){setTimeout(function(){throw t})}function ql(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Zi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zi(e)}function vn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oi=Math.random().toString(36).slice(2),Ct="__reactFiber$"+oi,is="__reactProps$"+oi,qt="__reactContainer$"+oi,qu="__reactEvents$"+oi,oE="__reactListeners$"+oi,aE="__reactHandles$"+oi;function zn(t){var e=t[Ct];if(e)return e;for(var n=t.parentNode;n;){if(e=n[qt]||n[Ct]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tf(t);t!==null;){if(n=t[Ct])return n;t=Tf(t)}return e}t=n,n=t.parentNode}return null}function Rs(t){return t=t[Ct]||t[qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Tr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function ja(t){return t[is]||null}var Gu=[],Ir=-1;function xn(t){return{current:t}}function Z(t){0>Ir||(t.current=Gu[Ir],Gu[Ir]=null,Ir--)}function Q(t,e){Ir++,Gu[Ir]=t.current,t.current=e}var Nn={},Fe=xn(Nn),Je=xn(!1),Jn=Nn;function jr(t,e){var n=t.type.contextTypes;if(!n)return Nn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ze(t){return t=t.childContextTypes,t!=null}function ea(){Z(Je),Z(Fe)}function If(t,e,n){if(Fe.current!==Nn)throw Error(E(168));Q(Fe,e),Q(Je,n)}function Sg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,Kw(t)||"Unknown",i));return ie({},n,r)}function ta(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nn,Jn=Fe.current,Q(Fe,t),Q(Je,Je.current),!0}function kf(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Sg(t,e,Jn),r.__reactInternalMemoizedMergedChildContext=t,Z(Je),Z(Fe),Q(Fe,t)):Z(Je),Q(Je,n)}var $t=null,Ha=!1,Gl=!1;function _g(t){$t===null?$t=[t]:$t.push(t)}function lE(t){Ha=!0,_g(t)}function On(){if(!Gl&&$t!==null){Gl=!0;var t=0,e=G;try{var n=$t;for(G=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$t=null,Ha=!1}catch(i){throw $t!==null&&($t=$t.slice(t+1)),qm(Zc,On),i}finally{G=e,Gl=!1}}return null}var kr=[],Cr=0,na=null,ra=0,lt=[],ut=0,Zn=null,Ft=1,Vt="";function Fn(t,e){kr[Cr++]=ra,kr[Cr++]=na,na=t,ra=e}function Tg(t,e,n){lt[ut++]=Ft,lt[ut++]=Vt,lt[ut++]=Zn,Zn=t;var r=Ft;t=Vt;var i=32-St(r)-1;r&=~(1<<i),n+=1;var s=32-St(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ft=1<<32-St(e)+i|n<<i|r,Vt=s+t}else Ft=1<<s|n<<i|r,Vt=t}function lh(t){t.return!==null&&(Fn(t,1),Tg(t,1,0))}function uh(t){for(;t===na;)na=kr[--Cr],kr[Cr]=null,ra=kr[--Cr],kr[Cr]=null;for(;t===Zn;)Zn=lt[--ut],lt[ut]=null,Vt=lt[--ut],lt[ut]=null,Ft=lt[--ut],lt[ut]=null}var rt=null,nt=null,ee=!1,Et=null;function Ig(t,e){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Cf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rt=t,nt=vn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rt=t,nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zn!==null?{id:Ft,overflow:Vt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rt=t,nt=null,!0):!1;default:return!1}}function Qu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yu(t){if(ee){var e=nt;if(e){var n=e;if(!Cf(t,e)){if(Qu(t))throw Error(E(418));e=vn(n.nextSibling);var r=rt;e&&Cf(t,e)?Ig(r,n):(t.flags=t.flags&-4097|2,ee=!1,rt=t)}}else{if(Qu(t))throw Error(E(418));t.flags=t.flags&-4097|2,ee=!1,rt=t}}}function Nf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rt=t}function fo(t){if(t!==rt)return!1;if(!ee)return Nf(t),ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ku(t.type,t.memoizedProps)),e&&(e=nt)){if(Qu(t))throw kg(),Error(E(418));for(;e;)Ig(t,e),e=vn(e.nextSibling)}if(Nf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nt=vn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nt=null}}else nt=rt?vn(t.stateNode.nextSibling):null;return!0}function kg(){for(var t=nt;t;)t=vn(t.nextSibling)}function Hr(){nt=rt=null,ee=!1}function ch(t){Et===null?Et=[t]:Et.push(t)}var uE=tn.ReactCurrentBatchConfig;function vt(t,e){if(t&&t.defaultProps){e=ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ia=xn(null),sa=null,Nr=null,hh=null;function dh(){hh=Nr=sa=null}function fh(t){var e=ia.current;Z(ia),t._currentValue=e}function Xu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function $r(t,e){sa=t,hh=Nr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ye=!0),t.firstContext=null)}function pt(t){var e=t._currentValue;if(hh!==t)if(t={context:t,memoizedValue:e,next:null},Nr===null){if(sa===null)throw Error(E(308));Nr=t,sa.dependencies={lanes:0,firstContext:t}}else Nr=Nr.next=t;return e}var Bn=null;function ph(t){Bn===null?Bn=[t]:Bn.push(t)}function Cg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ph(e)):(n.next=i.next,i.next=n),e.interleaved=n,Gt(t,r)}function Gt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var an=!1;function mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ng(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(K&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Gt(t,n)}return i=r.interleaved,i===null?(e.next=e,ph(r)):(e.next=i.next,i.next=e),r.interleaved=e,Gt(t,n)}function Po(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,eh(t,n)}}function Af(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function oa(t,e,n,r){var i=t.updateQueue;an=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(g,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(g,h,f):y,f==null)break e;h=ie({},h,f);break e;case 2:an=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=h):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);tr|=o,t.lanes=o,t.memoizedState=h}}function Df(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Ag=new Cm.Component().refs;function Ju(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ka={isMounted:function(t){return(t=t._reactInternals)?dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ke(),i=Sn(t),s=jt(r,i);s.payload=e,n!=null&&(s.callback=n),e=wn(t,s,i),e!==null&&(_t(e,t,i,r),Po(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ke(),i=Sn(t),s=jt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wn(t,s,i),e!==null&&(_t(e,t,i,r),Po(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ke(),r=Sn(t),i=jt(n,r);i.tag=2,e!=null&&(i.callback=e),e=wn(t,i,r),e!==null&&(_t(e,t,r,n),Po(e,t,r))}};function Rf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ts(n,r)||!ts(i,s):!0}function Dg(t,e,n){var r=!1,i=Nn,s=e.contextType;return typeof s=="object"&&s!==null?s=pt(s):(i=Ze(e)?Jn:Fe.current,r=e.contextTypes,s=(r=r!=null)?jr(t,i):Nn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ka,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ka.enqueueReplaceState(e,e.state,null)}function Zu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Ag,mh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pt(s):(s=Ze(e)?Jn:Fe.current,i.context=jr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ju(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ka.enqueueReplaceState(i,i.state,null),oa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Si(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Ag&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function po(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xf(t){var e=t._init;return e(t._payload)}function Rg(t){function e(p,d){if(t){var m=p.deletions;m===null?(p.deletions=[d],p.flags|=16):m.push(d)}}function n(p,d){if(!t)return null;for(;d!==null;)e(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function i(p,d){return p=_n(p,d),p.index=0,p.sibling=null,p}function s(p,d,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<d?(p.flags|=2,d):m):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,d,m,w){return d===null||d.tag!==6?(d=tu(m,p.mode,w),d.return=p,d):(d=i(d,m),d.return=p,d)}function l(p,d,m,w){var T=m.type;return T===wr?c(p,d,m.props.children,w,m.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===on&&xf(T)===d.type)?(w=i(d,m.props),w.ref=Si(p,d,m),w.return=p,w):(w=Uo(m.type,m.key,m.props,null,p.mode,w),w.ref=Si(p,d,m),w.return=p,w)}function u(p,d,m,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=nu(m,p.mode,w),d.return=p,d):(d=i(d,m.children||[]),d.return=p,d)}function c(p,d,m,w,T){return d===null||d.tag!==7?(d=Qn(m,p.mode,w,T),d.return=p,d):(d=i(d,m),d.return=p,d)}function h(p,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=tu(""+d,p.mode,m),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case no:return m=Uo(d.type,d.key,d.props,null,p.mode,m),m.ref=Si(p,null,d),m.return=p,m;case vr:return d=nu(d,p.mode,m),d.return=p,d;case on:var w=d._init;return h(p,w(d._payload),m)}if(Ni(d)||gi(d))return d=Qn(d,p.mode,m,null),d.return=p,d;po(p,d)}return null}function f(p,d,m,w){var T=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(p,d,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case no:return m.key===T?l(p,d,m,w):null;case vr:return m.key===T?u(p,d,m,w):null;case on:return T=m._init,f(p,d,T(m._payload),w)}if(Ni(m)||gi(m))return T!==null?null:c(p,d,m,w,null);po(p,m)}return null}function g(p,d,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(d,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case no:return p=p.get(w.key===null?m:w.key)||null,l(d,p,w,T);case vr:return p=p.get(w.key===null?m:w.key)||null,u(d,p,w,T);case on:var N=w._init;return g(p,d,m,N(w._payload),T)}if(Ni(w)||gi(w))return p=p.get(m)||null,c(d,p,w,T,null);po(d,w)}return null}function y(p,d,m,w){for(var T=null,N=null,A=d,P=d=0,X=null;A!==null&&P<m.length;P++){A.index>P?(X=A,A=null):X=A.sibling;var z=f(p,A,m[P],w);if(z===null){A===null&&(A=X);break}t&&A&&z.alternate===null&&e(p,A),d=s(z,d,P),N===null?T=z:N.sibling=z,N=z,A=X}if(P===m.length)return n(p,A),ee&&Fn(p,P),T;if(A===null){for(;P<m.length;P++)A=h(p,m[P],w),A!==null&&(d=s(A,d,P),N===null?T=A:N.sibling=A,N=A);return ee&&Fn(p,P),T}for(A=r(p,A);P<m.length;P++)X=g(A,p,P,m[P],w),X!==null&&(t&&X.alternate!==null&&A.delete(X.key===null?P:X.key),d=s(X,d,P),N===null?T=X:N.sibling=X,N=X);return t&&A.forEach(function(gt){return e(p,gt)}),ee&&Fn(p,P),T}function v(p,d,m,w){var T=gi(m);if(typeof T!="function")throw Error(E(150));if(m=T.call(m),m==null)throw Error(E(151));for(var N=T=null,A=d,P=d=0,X=null,z=m.next();A!==null&&!z.done;P++,z=m.next()){A.index>P?(X=A,A=null):X=A.sibling;var gt=f(p,A,z.value,w);if(gt===null){A===null&&(A=X);break}t&&A&&gt.alternate===null&&e(p,A),d=s(gt,d,P),N===null?T=gt:N.sibling=gt,N=gt,A=X}if(z.done)return n(p,A),ee&&Fn(p,P),T;if(A===null){for(;!z.done;P++,z=m.next())z=h(p,z.value,w),z!==null&&(d=s(z,d,P),N===null?T=z:N.sibling=z,N=z);return ee&&Fn(p,P),T}for(A=r(p,A);!z.done;P++,z=m.next())z=g(A,p,P,z.value,w),z!==null&&(t&&z.alternate!==null&&A.delete(z.key===null?P:z.key),d=s(z,d,P),N===null?T=z:N.sibling=z,N=z);return t&&A.forEach(function(pi){return e(p,pi)}),ee&&Fn(p,P),T}function D(p,d,m,w){if(typeof m=="object"&&m!==null&&m.type===wr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case no:e:{for(var T=m.key,N=d;N!==null;){if(N.key===T){if(T=m.type,T===wr){if(N.tag===7){n(p,N.sibling),d=i(N,m.props.children),d.return=p,p=d;break e}}else if(N.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===on&&xf(T)===N.type){n(p,N.sibling),d=i(N,m.props),d.ref=Si(p,N,m),d.return=p,p=d;break e}n(p,N);break}else e(p,N);N=N.sibling}m.type===wr?(d=Qn(m.props.children,p.mode,w,m.key),d.return=p,p=d):(w=Uo(m.type,m.key,m.props,null,p.mode,w),w.ref=Si(p,d,m),w.return=p,p=w)}return o(p);case vr:e:{for(N=m.key;d!==null;){if(d.key===N)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(p,d.sibling),d=i(d,m.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else e(p,d);d=d.sibling}d=nu(m,p.mode,w),d.return=p,p=d}return o(p);case on:return N=m._init,D(p,d,N(m._payload),w)}if(Ni(m))return y(p,d,m,w);if(gi(m))return v(p,d,m,w);po(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(p,d.sibling),d=i(d,m),d.return=p,p=d):(n(p,d),d=tu(m,p.mode,w),d.return=p,p=d),o(p)):n(p,d)}return D}var Kr=Rg(!0),Pg=Rg(!1),Ps={},At=xn(Ps),ss=xn(Ps),os=xn(Ps);function jn(t){if(t===Ps)throw Error(E(174));return t}function gh(t,e){switch(Q(os,e),Q(ss,t),Q(At,Ps),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pu(e,t)}Z(At),Q(At,e)}function Wr(){Z(At),Z(ss),Z(os)}function xg(t){jn(os.current);var e=jn(At.current),n=Pu(e,t.type);e!==n&&(Q(ss,t),Q(At,n))}function yh(t){ss.current===t&&(Z(At),Z(ss))}var ne=xn(0);function aa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ql=[];function vh(){for(var t=0;t<Ql.length;t++)Ql[t]._workInProgressVersionPrimary=null;Ql.length=0}var xo=tn.ReactCurrentDispatcher,Yl=tn.ReactCurrentBatchConfig,er=0,re=null,fe=null,Ee=null,la=!1,Ui=!1,as=0,cE=0;function Oe(){throw Error(E(321))}function wh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tt(t[n],e[n]))return!1;return!0}function Eh(t,e,n,r,i,s){if(er=s,re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,xo.current=t===null||t.memoizedState===null?pE:mE,t=n(r,i),Ui){s=0;do{if(Ui=!1,as=0,25<=s)throw Error(E(301));s+=1,Ee=fe=null,e.updateQueue=null,xo.current=gE,t=n(r,i)}while(Ui)}if(xo.current=ua,e=fe!==null&&fe.next!==null,er=0,Ee=fe=re=null,la=!1,e)throw Error(E(300));return t}function Sh(){var t=as!==0;return as=0,t}function kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?re.memoizedState=Ee=t:Ee=Ee.next=t,Ee}function mt(){if(fe===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=fe.next;var e=Ee===null?re.memoizedState:Ee.next;if(e!==null)Ee=e,fe=t;else{if(t===null)throw Error(E(310));fe=t,t={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},Ee===null?re.memoizedState=Ee=t:Ee=Ee.next=t}return Ee}function ls(t,e){return typeof e=="function"?e(t):e}function Xl(t){var e=mt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((er&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,re.lanes|=c,tr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Tt(r,e.memoizedState)||(Ye=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,re.lanes|=s,tr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jl(t){var e=mt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tt(s,e.memoizedState)||(Ye=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Og(){}function Lg(t,e){var n=re,r=mt(),i=e(),s=!Tt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ye=!0),r=r.queue,_h(Ug.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,us(9,$g.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(E(349));(er&30)!==0||Mg(n,e,i)}return i}function Mg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $g(t,e,n,r){e.value=n,e.getSnapshot=r,Fg(e)&&Vg(t)}function Ug(t,e,n){return n(function(){Fg(e)&&Vg(t)})}function Fg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tt(t,n)}catch{return!0}}function Vg(t){var e=Gt(t,1);e!==null&&_t(e,t,1,-1)}function Of(t){var e=kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:t},e.queue=t,t=t.dispatch=fE.bind(null,re,t),[e.memoizedState,t]}function us(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bg(){return mt().memoizedState}function Oo(t,e,n,r){var i=kt();re.flags|=t,i.memoizedState=us(1|e,n,void 0,r===void 0?null:r)}function Wa(t,e,n,r){var i=mt();r=r===void 0?null:r;var s=void 0;if(fe!==null){var o=fe.memoizedState;if(s=o.destroy,r!==null&&wh(r,o.deps)){i.memoizedState=us(e,n,s,r);return}}re.flags|=t,i.memoizedState=us(1|e,n,s,r)}function Lf(t,e){return Oo(8390656,8,t,e)}function _h(t,e){return Wa(2048,8,t,e)}function zg(t,e){return Wa(4,2,t,e)}function Bg(t,e){return Wa(4,4,t,e)}function jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hg(t,e,n){return n=n!=null?n.concat([t]):null,Wa(4,4,jg.bind(null,e,t),n)}function Th(){}function Kg(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Wg(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function qg(t,e,n){return(er&21)===0?(t.baseState&&(t.baseState=!1,Ye=!0),t.memoizedState=n):(Tt(n,e)||(n=Ym(),re.lanes|=n,tr|=n,t.baseState=!0),e)}function hE(t,e){var n=G;G=n!==0&&4>n?n:4,t(!0);var r=Yl.transition;Yl.transition={};try{t(!1),e()}finally{G=n,Yl.transition=r}}function Gg(){return mt().memoizedState}function dE(t,e,n){var r=Sn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qg(t))Yg(e,n);else if(n=Cg(t,e,n,r),n!==null){var i=Ke();_t(n,t,r,i),Xg(n,e,r)}}function fE(t,e,n){var r=Sn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qg(t))Yg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Tt(a,o)){var l=e.interleaved;l===null?(i.next=i,ph(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Cg(t,e,i,r),n!==null&&(i=Ke(),_t(n,t,r,i),Xg(n,e,r))}}function Qg(t){var e=t.alternate;return t===re||e!==null&&e===re}function Yg(t,e){Ui=la=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xg(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,eh(t,n)}}var ua={readContext:pt,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},pE={readContext:pt,useCallback:function(t,e){return kt().memoizedState=[t,e===void 0?null:e],t},useContext:pt,useEffect:Lf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oo(4194308,4,jg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oo(4,2,t,e)},useMemo:function(t,e){var n=kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=dE.bind(null,re,t),[r.memoizedState,t]},useRef:function(t){var e=kt();return t={current:t},e.memoizedState=t},useState:Of,useDebugValue:Th,useDeferredValue:function(t){return kt().memoizedState=t},useTransition:function(){var t=Of(!1),e=t[0];return t=hE.bind(null,t[1]),kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=re,i=kt();if(ee){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),Se===null)throw Error(E(349));(er&30)!==0||Mg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Lf(Ug.bind(null,r,s,t),[t]),r.flags|=2048,us(9,$g.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=kt(),e=Se.identifierPrefix;if(ee){var n=Vt,r=Ft;n=(r&~(1<<32-St(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=as++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=cE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},mE={readContext:pt,useCallback:Kg,useContext:pt,useEffect:_h,useImperativeHandle:Hg,useInsertionEffect:zg,useLayoutEffect:Bg,useMemo:Wg,useReducer:Xl,useRef:bg,useState:function(){return Xl(ls)},useDebugValue:Th,useDeferredValue:function(t){var e=mt();return qg(e,fe.memoizedState,t)},useTransition:function(){var t=Xl(ls)[0],e=mt().memoizedState;return[t,e]},useMutableSource:Og,useSyncExternalStore:Lg,useId:Gg,unstable_isNewReconciler:!1},gE={readContext:pt,useCallback:Kg,useContext:pt,useEffect:_h,useImperativeHandle:Hg,useInsertionEffect:zg,useLayoutEffect:Bg,useMemo:Wg,useReducer:Jl,useRef:bg,useState:function(){return Jl(ls)},useDebugValue:Th,useDeferredValue:function(t){var e=mt();return fe===null?e.memoizedState=t:qg(e,fe.memoizedState,t)},useTransition:function(){var t=Jl(ls)[0],e=mt().memoizedState;return[t,e]},useMutableSource:Og,useSyncExternalStore:Lg,useId:Gg,unstable_isNewReconciler:!1};function qr(t,e){try{var n="",r=e;do n+=Hw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zl(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function ec(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yE=typeof WeakMap=="function"?WeakMap:Map;function Jg(t,e,n){n=jt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ha||(ha=!0,cc=r),ec(t,e)},n}function Zg(t,e,n){n=jt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ec(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ec(t,e),typeof r!="function"&&(En===null?En=new Set([this]):En.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Mf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=PE.bind(null,t,e,n),e.then(t,t))}function $f(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Uf(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jt(-1,1),e.tag=2,wn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var vE=tn.ReactCurrentOwner,Ye=!1;function Ve(t,e,n,r){e.child=t===null?Pg(e,null,n,r):Kr(e,t.child,n,r)}function Ff(t,e,n,r,i){n=n.render;var s=e.ref;return $r(e,i),r=Eh(t,e,n,r,s,i),n=Sh(),t!==null&&!Ye?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qt(t,e,i)):(ee&&n&&lh(e),e.flags|=1,Ve(t,e,r,i),e.child)}function Vf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ph(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ey(t,e,s,r,i)):(t=Uo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ts,n(o,r)&&t.ref===e.ref)return Qt(t,e,i)}return e.flags|=1,t=_n(s,r),t.ref=e.ref,t.return=e,e.child=t}function ey(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ts(s,r)&&t.ref===e.ref)if(Ye=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ye=!0);else return e.lanes=t.lanes,Qt(t,e,i)}return tc(t,e,n,r,i)}function ty(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Dr,tt),tt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(Dr,tt),tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(Dr,tt),tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(Dr,tt),tt|=r;return Ve(t,e,i,n),e.child}function ny(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tc(t,e,n,r,i){var s=Ze(n)?Jn:Fe.current;return s=jr(e,s),$r(e,i),n=Eh(t,e,n,r,s,i),r=Sh(),t!==null&&!Ye?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qt(t,e,i)):(ee&&r&&lh(e),e.flags|=1,Ve(t,e,n,i),e.child)}function bf(t,e,n,r,i){if(Ze(n)){var s=!0;ta(e)}else s=!1;if($r(e,i),e.stateNode===null)Lo(t,e),Dg(e,n,r),Zu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=pt(u):(u=Ze(n)?Jn:Fe.current,u=jr(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Pf(e,o,r,u),an=!1;var f=e.memoizedState;o.state=f,oa(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Je.current||an?(typeof c=="function"&&(Ju(e,n,c,r),l=e.memoizedState),(a=an||Rf(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ng(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:vt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=pt(l):(l=Ze(n)?Jn:Fe.current,l=jr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Pf(e,o,r,l),an=!1,f=e.memoizedState,o.state=f,oa(e,r,o,i);var y=e.memoizedState;a!==h||f!==y||Je.current||an?(typeof g=="function"&&(Ju(e,n,g,r),y=e.memoizedState),(u=an||Rf(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return nc(t,e,n,r,s,i)}function nc(t,e,n,r,i,s){ny(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&kf(e,n,!1),Qt(t,e,s);r=e.stateNode,vE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Kr(e,t.child,null,s),e.child=Kr(e,null,a,s)):Ve(t,e,a,s),e.memoizedState=r.state,i&&kf(e,n,!0),e.child}function ry(t){var e=t.stateNode;e.pendingContext?If(t,e.pendingContext,e.pendingContext!==e.context):e.context&&If(t,e.context,!1),gh(t,e.containerInfo)}function zf(t,e,n,r,i){return Hr(),ch(i),e.flags|=256,Ve(t,e,n,r),e.child}var rc={dehydrated:null,treeContext:null,retryLane:0};function ic(t){return{baseLanes:t,cachePool:null,transitions:null}}function iy(t,e,n){var r=e.pendingProps,i=ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(ne,i&1),t===null)return Yu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qa(o,r,0,null),t=Qn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ic(n),e.memoizedState=rc,t):Ih(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wE(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=_n(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=_n(a,s):(s=Qn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ic(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rc,r}return s=t.child,t=s.sibling,r=_n(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ih(t,e){return e=Qa({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mo(t,e,n,r){return r!==null&&ch(r),Kr(e,t.child,null,n),t=Ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zl(Error(E(422))),mo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qa({mode:"visible",children:r.children},i,0,null),s=Qn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Kr(e,t.child,null,o),e.child.memoizedState=ic(o),e.memoizedState=rc,s);if((e.mode&1)===0)return mo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=Zl(s,r,void 0),mo(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ye||a){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gt(t,i),_t(r,t,i,-1))}return Rh(),r=Zl(Error(E(421))),mo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,nt=vn(i.nextSibling),rt=e,ee=!0,Et=null,t!==null&&(lt[ut++]=Ft,lt[ut++]=Vt,lt[ut++]=Zn,Ft=t.id,Vt=t.overflow,Zn=e),e=Ih(e,r.children),e.flags|=4096,e)}function Bf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xu(t.return,e,n)}function eu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function sy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ve(t,e,r.children,n),r=ne.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bf(t,n,e);else if(t.tag===19)Bf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(ne,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&aa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),eu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&aa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}eu(e,!0,n,null,s);break;case"together":eu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lo(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),tr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=_n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function EE(t,e,n){switch(e.tag){case 3:ry(e),Hr();break;case 5:xg(e);break;case 1:Ze(e.type)&&ta(e);break;case 4:gh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(ia,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(ne,ne.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?iy(t,e,n):(Q(ne,ne.current&1),t=Qt(t,e,n),t!==null?t.sibling:null);Q(ne,ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return sy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(ne,ne.current),r)break;return null;case 22:case 23:return e.lanes=0,ty(t,e,n)}return Qt(t,e,n)}var oy,sc,ay,ly;oy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sc=function(){};ay=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,jn(At.current);var s=null;switch(n){case"input":i=Nu(t,i),r=Nu(t,r),s=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),s=[];break;case"textarea":i=Ru(t,i),r=Ru(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zo)}xu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Gi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Gi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&J("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ly=function(t,e,n,r){n!==r&&(e.flags|=4)};function _i(t,e){if(!ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Le(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function SE(t,e,n){var r=e.pendingProps;switch(uh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(e),null;case 1:return Ze(e.type)&&ea(),Le(e),null;case 3:return r=e.stateNode,Wr(),Z(Je),Z(Fe),vh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Et!==null&&(fc(Et),Et=null))),sc(t,e),Le(e),null;case 5:yh(e);var i=jn(os.current);if(n=e.type,t!==null&&e.stateNode!=null)ay(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Le(e),null}if(t=jn(At.current),fo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ct]=e,r[is]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Di.length;i++)J(Di[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Yd(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":Jd(r,s),J("invalid",r)}xu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ho(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ho(r.textContent,a,t),i=["children",""+a]):Gi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":ro(r),Xd(r,s,!0);break;case"textarea":ro(r),Zd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ct]=e,t[is]=r,oy(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ou(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<Di.length;i++)J(Di[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":Yd(t,r),i=Nu(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),J("invalid",t);break;case"textarea":Jd(t,r),i=Ru(t,r),J("invalid",t);break;default:i=r}xu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Fm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$m(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Qi(t,l):typeof l=="number"&&Qi(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Gi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&J("scroll",t):l!=null&&Gc(t,s,l,o))}switch(n){case"input":ro(t),Xd(t,r,!1);break;case"textarea":ro(t),Zd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Cn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xr(t,!!r.multiple,s,!1):r.defaultValue!=null&&xr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Le(e),null;case 6:if(t&&e.stateNode!=null)ly(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=jn(os.current),jn(At.current),fo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ct]=e,(s=r.nodeValue!==n)&&(t=rt,t!==null))switch(t.tag){case 3:ho(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=e,e.stateNode=r}return Le(e),null;case 13:if(Z(ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ee&&nt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)kg(),Hr(),e.flags|=98560,s=!1;else if(s=fo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Ct]=e}else Hr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Le(e),s=!1}else Et!==null&&(fc(Et),Et=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ne.current&1)!==0?pe===0&&(pe=3):Rh())),e.updateQueue!==null&&(e.flags|=4),Le(e),null);case 4:return Wr(),sc(t,e),t===null&&ns(e.stateNode.containerInfo),Le(e),null;case 10:return fh(e.type._context),Le(e),null;case 17:return Ze(e.type)&&ea(),Le(e),null;case 19:if(Z(ne),s=e.memoizedState,s===null)return Le(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_i(s,!1);else{if(pe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=aa(t),o!==null){for(e.flags|=128,_i(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(ne,ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&le()>Gr&&(e.flags|=128,r=!0,_i(s,!1),e.lanes=4194304)}else{if(!r)if(t=aa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_i(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ee)return Le(e),null}else 2*le()-s.renderingStartTime>Gr&&n!==1073741824&&(e.flags|=128,r=!0,_i(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=le(),e.sibling=null,n=ne.current,Q(ne,r?n&1|2:n&1),e):(Le(e),null);case 22:case 23:return Dh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(tt&1073741824)!==0&&(Le(e),e.subtreeFlags&6&&(e.flags|=8192)):Le(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function _E(t,e){switch(uh(e),e.tag){case 1:return Ze(e.type)&&ea(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wr(),Z(Je),Z(Fe),vh(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return yh(e),null;case 13:if(Z(ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Hr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Z(ne),null;case 4:return Wr(),null;case 10:return fh(e.type._context),null;case 22:case 23:return Dh(),null;case 24:return null;default:return null}}var go=!1,Me=!1,TE=typeof WeakSet=="function"?WeakSet:Set,I=null;function Ar(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(t,e,r)}else n.current=null}function oc(t,e,n){try{n()}catch(r){se(t,e,r)}}var jf=!1;function IE(t,e){if(ju=Yo,t=dg(),ah(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var g;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hu={focusedElem:t,selectionRange:n},Yo=!1,I=e;I!==null;)if(e=I,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,I=t;else for(;I!==null;){e=I;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,D=y.memoizedState,p=e.stateNode,d=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:vt(e.type,v),D);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){se(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,I=t;break}I=e.return}return y=jf,jf=!1,y}function Fi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&oc(e,n,s)}i=i.next}while(i!==r)}}function qa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ac(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uy(t){var e=t.alternate;e!==null&&(t.alternate=null,uy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ct],delete e[is],delete e[qu],delete e[oE],delete e[aE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cy(t){return t.tag===5||t.tag===3||t.tag===4}function Hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zo));else if(r!==4&&(t=t.child,t!==null))for(lc(t,e,n),t=t.sibling;t!==null;)lc(t,e,n),t=t.sibling}function uc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(uc(t,e,n),t=t.sibling;t!==null;)uc(t,e,n),t=t.sibling}var Ie=null,wt=!1;function rn(t,e,n){for(n=n.child;n!==null;)hy(t,e,n),n=n.sibling}function hy(t,e,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Va,n)}catch{}switch(n.tag){case 5:Me||Ar(n,e);case 6:var r=Ie,i=wt;Ie=null,rn(t,e,n),Ie=r,wt=i,Ie!==null&&(wt?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(wt?(t=Ie,n=n.stateNode,t.nodeType===8?ql(t.parentNode,n):t.nodeType===1&&ql(t,n),Zi(t)):ql(Ie,n.stateNode));break;case 4:r=Ie,i=wt,Ie=n.stateNode.containerInfo,wt=!0,rn(t,e,n),Ie=r,wt=i;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&oc(n,e,o),i=i.next}while(i!==r)}rn(t,e,n);break;case 1:if(!Me&&(Ar(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){se(n,e,a)}rn(t,e,n);break;case 21:rn(t,e,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,rn(t,e,n),Me=r):rn(t,e,n);break;default:rn(t,e,n)}}function Kf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TE),e.forEach(function(r){var i=OE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ie=a.stateNode,wt=!1;break e;case 3:Ie=a.stateNode.containerInfo,wt=!0;break e;case 4:Ie=a.stateNode.containerInfo,wt=!0;break e}a=a.return}if(Ie===null)throw Error(E(160));hy(s,o,i),Ie=null,wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){se(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dy(e,t),e=e.sibling}function dy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yt(e,t),It(t),r&4){try{Fi(3,t,t.return),qa(3,t)}catch(v){se(t,t.return,v)}try{Fi(5,t,t.return)}catch(v){se(t,t.return,v)}}break;case 1:yt(e,t),It(t),r&512&&n!==null&&Ar(n,n.return);break;case 5:if(yt(e,t),It(t),r&512&&n!==null&&Ar(n,n.return),t.flags&32){var i=t.stateNode;try{Qi(i,"")}catch(v){se(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Om(i,s),Ou(a,o);var u=Ou(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Fm(i,h):c==="dangerouslySetInnerHTML"?$m(i,h):c==="children"?Qi(i,h):Gc(i,c,h,u)}switch(a){case"input":Au(i,s);break;case"textarea":Lm(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?xr(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?xr(i,!!s.multiple,s.defaultValue,!0):xr(i,!!s.multiple,s.multiple?[]:"",!1))}i[is]=s}catch(v){se(t,t.return,v)}}break;case 6:if(yt(e,t),It(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){se(t,t.return,v)}}break;case 3:if(yt(e,t),It(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zi(e.containerInfo)}catch(v){se(t,t.return,v)}break;case 4:yt(e,t),It(t);break;case 13:yt(e,t),It(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Nh=le())),r&4&&Kf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Me=(u=Me)||c,yt(e,t),Me=u):yt(e,t),It(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(I=t,c=t.child;c!==null;){for(h=I=c;I!==null;){switch(f=I,g=f.child,f.tag){case 0:case 11:case 14:case 15:Fi(4,f,f.return);break;case 1:Ar(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){se(r,n,v)}}break;case 5:Ar(f,f.return);break;case 22:if(f.memoizedState!==null){qf(h);continue}}g!==null?(g.return=f,I=g):qf(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Um("display",o))}catch(v){se(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){se(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:yt(e,t),It(t),r&4&&Kf(t);break;case 21:break;default:yt(e,t),It(t)}}function It(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(cy(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qi(i,""),r.flags&=-33);var s=Hf(t);uc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Hf(t);lc(t,a,o);break;default:throw Error(E(161))}}catch(l){se(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kE(t,e,n){I=t,fy(t)}function fy(t,e,n){for(var r=(t.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||go;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Me;a=go;var u=Me;if(go=o,(Me=l)&&!u)for(I=i;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?Gf(i):l!==null?(l.return=o,I=l):Gf(i);for(;s!==null;)I=s,fy(s),s=s.sibling;I=i,go=a,Me=u}Wf(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,I=s):Wf(t)}}function Wf(t){for(;I!==null;){var e=I;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Me||qa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Me)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Df(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Df(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Zi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Me||e.flags&512&&ac(e)}catch(f){se(e,e.return,f)}}if(e===t){I=null;break}if(n=e.sibling,n!==null){n.return=e.return,I=n;break}I=e.return}}function qf(t){for(;I!==null;){var e=I;if(e===t){I=null;break}var n=e.sibling;if(n!==null){n.return=e.return,I=n;break}I=e.return}}function Gf(t){for(;I!==null;){var e=I;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qa(4,e)}catch(l){se(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){se(e,i,l)}}var s=e.return;try{ac(e)}catch(l){se(e,s,l)}break;case 5:var o=e.return;try{ac(e)}catch(l){se(e,o,l)}}}catch(l){se(e,e.return,l)}if(e===t){I=null;break}var a=e.sibling;if(a!==null){a.return=e.return,I=a;break}I=e.return}}var CE=Math.ceil,ca=tn.ReactCurrentDispatcher,kh=tn.ReactCurrentOwner,dt=tn.ReactCurrentBatchConfig,K=0,Se=null,he=null,Ne=0,tt=0,Dr=xn(0),pe=0,cs=null,tr=0,Ga=0,Ch=0,Vi=null,Qe=null,Nh=0,Gr=1/0,Mt=null,ha=!1,cc=null,En=null,yo=!1,pn=null,da=0,bi=0,hc=null,Mo=-1,$o=0;function Ke(){return(K&6)!==0?le():Mo!==-1?Mo:Mo=le()}function Sn(t){return(t.mode&1)===0?1:(K&2)!==0&&Ne!==0?Ne&-Ne:uE.transition!==null?($o===0&&($o=Ym()),$o):(t=G,t!==0||(t=window.event,t=t===void 0?16:rg(t.type)),t)}function _t(t,e,n,r){if(50<bi)throw bi=0,hc=null,Error(E(185));As(t,n,r),((K&2)===0||t!==Se)&&(t===Se&&((K&2)===0&&(Ga|=n),pe===4&&un(t,Ne)),et(t,r),n===1&&K===0&&(e.mode&1)===0&&(Gr=le()+500,Ha&&On()))}function et(t,e){var n=t.callbackNode;u1(t,e);var r=Qo(t,t===Se?Ne:0);if(r===0)n!==null&&nf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&nf(n),e===1)t.tag===0?lE(Qf.bind(null,t)):_g(Qf.bind(null,t)),iE(function(){(K&6)===0&&On()}),n=null;else{switch(Xm(r)){case 1:n=Zc;break;case 4:n=Gm;break;case 16:n=Go;break;case 536870912:n=Qm;break;default:n=Go}n=Sy(n,py.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function py(t,e){if(Mo=-1,$o=0,(K&6)!==0)throw Error(E(327));var n=t.callbackNode;if(Ur()&&t.callbackNode!==n)return null;var r=Qo(t,t===Se?Ne:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=fa(t,r);else{e=r;var i=K;K|=2;var s=gy();(Se!==t||Ne!==e)&&(Mt=null,Gr=le()+500,Gn(t,e));do try{DE();break}catch(a){my(t,a)}while(1);dh(),ca.current=s,K=i,he!==null?e=0:(Se=null,Ne=0,e=pe)}if(e!==0){if(e===2&&(i=Fu(t),i!==0&&(r=i,e=dc(t,i))),e===1)throw n=cs,Gn(t,0),un(t,r),et(t,le()),n;if(e===6)un(t,r);else{if(i=t.current.alternate,(r&30)===0&&!NE(i)&&(e=fa(t,r),e===2&&(s=Fu(t),s!==0&&(r=s,e=dc(t,s))),e===1))throw n=cs,Gn(t,0),un(t,r),et(t,le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Vn(t,Qe,Mt);break;case 3:if(un(t,r),(r&130023424)===r&&(e=Nh+500-le(),10<e)){if(Qo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ke(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wu(Vn.bind(null,t,Qe,Mt),e);break}Vn(t,Qe,Mt);break;case 4:if(un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-St(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*CE(r/1960))-r,10<r){t.timeoutHandle=Wu(Vn.bind(null,t,Qe,Mt),r);break}Vn(t,Qe,Mt);break;case 5:Vn(t,Qe,Mt);break;default:throw Error(E(329))}}}return et(t,le()),t.callbackNode===n?py.bind(null,t):null}function dc(t,e){var n=Vi;return t.current.memoizedState.isDehydrated&&(Gn(t,e).flags|=256),t=fa(t,e),t!==2&&(e=Qe,Qe=n,e!==null&&fc(e)),t}function fc(t){Qe===null?Qe=t:Qe.push.apply(Qe,t)}function NE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function un(t,e){for(e&=~Ch,e&=~Ga,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-St(e),r=1<<n;t[n]=-1,e&=~r}}function Qf(t){if((K&6)!==0)throw Error(E(327));Ur();var e=Qo(t,0);if((e&1)===0)return et(t,le()),null;var n=fa(t,e);if(t.tag!==0&&n===2){var r=Fu(t);r!==0&&(e=r,n=dc(t,r))}if(n===1)throw n=cs,Gn(t,0),un(t,e),et(t,le()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vn(t,Qe,Mt),et(t,le()),null}function Ah(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(Gr=le()+500,Ha&&On())}}function nr(t){pn!==null&&pn.tag===0&&(K&6)===0&&Ur();var e=K;K|=1;var n=dt.transition,r=G;try{if(dt.transition=null,G=1,t)return t()}finally{G=r,dt.transition=n,K=e,(K&6)===0&&On()}}function Dh(){tt=Dr.current,Z(Dr)}function Gn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rE(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(uh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ea();break;case 3:Wr(),Z(Je),Z(Fe),vh();break;case 5:yh(r);break;case 4:Wr();break;case 13:Z(ne);break;case 19:Z(ne);break;case 10:fh(r.type._context);break;case 22:case 23:Dh()}n=n.return}if(Se=t,he=t=_n(t.current,null),Ne=tt=e,pe=0,cs=null,Ch=Ga=tr=0,Qe=Vi=null,Bn!==null){for(e=0;e<Bn.length;e++)if(n=Bn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Bn=null}return t}function my(t,e){do{var n=he;try{if(dh(),xo.current=ua,la){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}la=!1}if(er=0,Ee=fe=re=null,Ui=!1,as=0,kh.current=null,n===null||n.return===null){pe=1,cs=e,he=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=$f(o);if(g!==null){g.flags&=-257,Uf(g,o,a,s,e),g.mode&1&&Mf(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if((e&1)===0){Mf(s,u,e),Rh();break e}l=Error(E(426))}}else if(ee&&a.mode&1){var D=$f(o);if(D!==null){(D.flags&65536)===0&&(D.flags|=256),Uf(D,o,a,s,e),ch(qr(l,a));break e}}s=l=qr(l,a),pe!==4&&(pe=2),Vi===null?Vi=[s]:Vi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Jg(s,l,e);Af(s,p);break e;case 1:a=l;var d=s.type,m=s.stateNode;if((s.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(En===null||!En.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Zg(s,a,e);Af(s,w);break e}}s=s.return}while(s!==null)}vy(n)}catch(T){e=T,he===n&&n!==null&&(he=n=n.return);continue}break}while(1)}function gy(){var t=ca.current;return ca.current=ua,t===null?ua:t}function Rh(){(pe===0||pe===3||pe===2)&&(pe=4),Se===null||(tr&268435455)===0&&(Ga&268435455)===0||un(Se,Ne)}function fa(t,e){var n=K;K|=2;var r=gy();(Se!==t||Ne!==e)&&(Mt=null,Gn(t,e));do try{AE();break}catch(i){my(t,i)}while(1);if(dh(),K=n,ca.current=r,he!==null)throw Error(E(261));return Se=null,Ne=0,pe}function AE(){for(;he!==null;)yy(he)}function DE(){for(;he!==null&&!e1();)yy(he)}function yy(t){var e=Ey(t.alternate,t,tt);t.memoizedProps=t.pendingProps,e===null?vy(t):he=e,kh.current=null}function vy(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=SE(n,e,tt),n!==null){he=n;return}}else{if(n=_E(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pe=6,he=null;return}}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);pe===0&&(pe=5)}function Vn(t,e,n){var r=G,i=dt.transition;try{dt.transition=null,G=1,RE(t,e,n,r)}finally{dt.transition=i,G=r}return null}function RE(t,e,n,r){do Ur();while(pn!==null);if((K&6)!==0)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(c1(t,s),t===Se&&(he=Se=null,Ne=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yo||(yo=!0,Sy(Go,function(){return Ur(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=dt.transition,dt.transition=null;var o=G;G=1;var a=K;K|=4,kh.current=null,IE(t,n),dy(n,t),Y1(Hu),Yo=!!ju,Hu=ju=null,t.current=n,kE(n),t1(),K=a,G=o,dt.transition=s}else t.current=n;if(yo&&(yo=!1,pn=t,da=i),s=t.pendingLanes,s===0&&(En=null),i1(n.stateNode),et(t,le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ha)throw ha=!1,t=cc,cc=null,t;return(da&1)!==0&&t.tag!==0&&Ur(),s=t.pendingLanes,(s&1)!==0?t===hc?bi++:(bi=0,hc=t):bi=0,On(),null}function Ur(){if(pn!==null){var t=Xm(da),e=dt.transition,n=G;try{if(dt.transition=null,G=16>t?16:t,pn===null)var r=!1;else{if(t=pn,pn=null,da=0,(K&6)!==0)throw Error(E(331));var i=K;for(K|=4,I=t.current;I!==null;){var s=I,o=s.child;if((I.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var c=I;switch(c.tag){case 0:case 11:case 15:Fi(8,c,s)}var h=c.child;if(h!==null)h.return=c,I=h;else for(;I!==null;){c=I;var f=c.sibling,g=c.return;if(uy(c),c===u){I=null;break}if(f!==null){f.return=g,I=f;break}I=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var D=v.sibling;v.sibling=null,v=D}while(v!==null)}}I=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Fi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,I=p;break e}I=s.return}}var d=t.current;for(I=d;I!==null;){o=I;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,I=m;else e:for(o=d;I!==null;){if(a=I,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:qa(9,a)}}catch(T){se(a,a.return,T)}if(a===o){I=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,I=w;break e}I=a.return}}if(K=i,On(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Va,t)}catch{}r=!0}return r}finally{G=n,dt.transition=e}}return!1}function Yf(t,e,n){e=qr(n,e),e=Jg(t,e,1),t=wn(t,e,1),e=Ke(),t!==null&&(As(t,1,e),et(t,e))}function se(t,e,n){if(t.tag===3)Yf(t,t,n);else for(;e!==null;){if(e.tag===3){Yf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(En===null||!En.has(r))){t=qr(n,t),t=Zg(e,t,1),e=wn(e,t,1),t=Ke(),e!==null&&(As(e,1,t),et(e,t));break}}e=e.return}}function PE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ke(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Ne&n)===n&&(pe===4||pe===3&&(Ne&130023424)===Ne&&500>le()-Nh?Gn(t,0):Ch|=n),et(t,e)}function wy(t,e){e===0&&((t.mode&1)===0?e=1:(e=oo,oo<<=1,(oo&130023424)===0&&(oo=4194304)));var n=Ke();t=Gt(t,e),t!==null&&(As(t,e,n),et(t,n))}function xE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wy(t,n)}function OE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),wy(t,n)}var Ey;Ey=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Je.current)Ye=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ye=!1,EE(t,e,n);Ye=(t.flags&131072)!==0}else Ye=!1,ee&&(e.flags&1048576)!==0&&Tg(e,ra,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Lo(t,e),t=e.pendingProps;var i=jr(e,Fe.current);$r(e,n),i=Eh(null,e,r,t,i,n);var s=Sh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ze(r)?(s=!0,ta(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mh(e),i.updater=Ka,e.stateNode=i,i._reactInternals=e,Zu(e,r,t,n),e=nc(null,e,r,!0,s,n)):(e.tag=0,ee&&s&&lh(e),Ve(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Lo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ME(r),t=vt(r,t),i){case 0:e=tc(null,e,r,t,n);break e;case 1:e=bf(null,e,r,t,n);break e;case 11:e=Ff(null,e,r,t,n);break e;case 14:e=Vf(null,e,r,vt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),tc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),bf(t,e,r,i,n);case 3:e:{if(ry(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Ng(t,e),oa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qr(Error(E(423)),e),e=zf(t,e,r,n,i);break e}else if(r!==i){i=qr(Error(E(424)),e),e=zf(t,e,r,n,i);break e}else for(nt=vn(e.stateNode.containerInfo.firstChild),rt=e,ee=!0,Et=null,n=Pg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hr(),r===i){e=Qt(t,e,n);break e}Ve(t,e,r,n)}e=e.child}return e;case 5:return xg(e),t===null&&Yu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ku(r,i)?o=null:s!==null&&Ku(r,s)&&(e.flags|=32),ny(t,e),Ve(t,e,o,n),e.child;case 6:return t===null&&Yu(e),null;case 13:return iy(t,e,n);case 4:return gh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Kr(e,null,r,n):Ve(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),Ff(t,e,r,i,n);case 7:return Ve(t,e,e.pendingProps,n),e.child;case 8:return Ve(t,e,e.pendingProps.children,n),e.child;case 12:return Ve(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(ia,r._currentValue),r._currentValue=o,s!==null)if(Tt(s.value,o)){if(s.children===i.children&&!Je.current){e=Qt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=jt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Xu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ve(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,$r(e,n),i=pt(i),r=r(i),e.flags|=1,Ve(t,e,r,n),e.child;case 14:return r=e.type,i=vt(r,e.pendingProps),i=vt(r.type,i),Vf(t,e,r,i,n);case 15:return ey(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),Lo(t,e),e.tag=1,Ze(r)?(t=!0,ta(e)):t=!1,$r(e,n),Dg(e,r,i),Zu(e,r,i,n),nc(null,e,r,!0,t,n);case 19:return sy(t,e,n);case 22:return ty(t,e,n)}throw Error(E(156,e.tag))};function Sy(t,e){return qm(t,e)}function LE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(t,e,n,r){return new LE(t,e,n,r)}function Ph(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ME(t){if(typeof t=="function")return Ph(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yc)return 11;if(t===Xc)return 14}return 2}function _n(t,e){var n=t.alternate;return n===null?(n=ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Uo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ph(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wr:return Qn(n.children,i,s,e);case Qc:o=8,i|=8;break;case Tu:return t=ht(12,n,e,i|2),t.elementType=Tu,t.lanes=s,t;case Iu:return t=ht(13,n,e,i),t.elementType=Iu,t.lanes=s,t;case ku:return t=ht(19,n,e,i),t.elementType=ku,t.lanes=s,t;case Rm:return Qa(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Am:o=10;break e;case Dm:o=9;break e;case Yc:o=11;break e;case Xc:o=14;break e;case on:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qn(t,e,n,r){return t=ht(7,t,r,e),t.lanes=n,t}function Qa(t,e,n,r){return t=ht(22,t,r,e),t.elementType=Rm,t.lanes=n,t.stateNode={isHidden:!1},t}function tu(t,e,n){return t=ht(6,t,null,e),t.lanes=n,t}function nu(t,e,n){return e=ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $E(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$l(0),this.expirationTimes=$l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xh(t,e,n,r,i,s,o,a,l){return t=new $E(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mh(s),t}function UE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function _y(t){if(!t)return Nn;t=t._reactInternals;e:{if(dr(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ze(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Ze(n))return Sg(t,n,e)}return e}function Ty(t,e,n,r,i,s,o,a,l){return t=xh(n,r,!0,t,i,s,o,a,l),t.context=_y(null),n=t.current,r=Ke(),i=Sn(n),s=jt(r,i),s.callback=e!=null?e:null,wn(n,s,i),t.current.lanes=i,As(t,i,r),et(t,r),t}function Ya(t,e,n,r){var i=e.current,s=Ke(),o=Sn(i);return n=_y(n),e.context===null?e.context=n:e.pendingContext=n,e=jt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wn(i,e,o),t!==null&&(_t(t,i,o,s),Po(t,i,o)),o}function pa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Oh(t,e){Xf(t,e),(t=t.alternate)&&Xf(t,e)}function FE(){return null}var Iy=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lh(t){this._internalRoot=t}Xa.prototype.render=Lh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));Ya(t,e,null,null)};Xa.prototype.unmount=Lh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;nr(function(){Ya(null,t,null,null)}),e[qt]=null}};function Xa(t){this._internalRoot=t}Xa.prototype.unstable_scheduleHydration=function(t){if(t){var e=eg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ln.length&&e!==0&&e<ln[n].priority;n++);ln.splice(n,0,t),n===0&&ng(t)}};function Mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ja(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jf(){}function VE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=pa(o);s.call(u)}}var o=Ty(e,r,t,0,null,!1,!1,"",Jf);return t._reactRootContainer=o,t[qt]=o.current,ns(t.nodeType===8?t.parentNode:t),nr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=pa(l);a.call(u)}}var l=xh(t,0,!1,null,null,!1,!1,"",Jf);return t._reactRootContainer=l,t[qt]=l.current,ns(t.nodeType===8?t.parentNode:t),nr(function(){Ya(e,l,n,r)}),l}function Za(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=pa(o);a.call(l)}}Ya(e,o,t,i)}else o=VE(n,e,t,i,r);return pa(o)}Jm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ai(e.pendingLanes);n!==0&&(eh(e,n|1),et(e,le()),(K&6)===0&&(Gr=le()+500,On()))}break;case 13:nr(function(){var r=Gt(t,1);if(r!==null){var i=Ke();_t(r,t,1,i)}}),Oh(t,1)}};th=function(t){if(t.tag===13){var e=Gt(t,134217728);if(e!==null){var n=Ke();_t(e,t,134217728,n)}Oh(t,134217728)}};Zm=function(t){if(t.tag===13){var e=Sn(t),n=Gt(t,e);if(n!==null){var r=Ke();_t(n,t,e,r)}Oh(t,e)}};eg=function(){return G};tg=function(t,e){var n=G;try{return G=t,e()}finally{G=n}};Mu=function(t,e,n){switch(e){case"input":if(Au(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ja(r);if(!i)throw Error(E(90));xm(r),Au(r,i)}}}break;case"textarea":Lm(t,n);break;case"select":e=n.value,e!=null&&xr(t,!!n.multiple,e,!1)}};zm=Ah;Bm=nr;var bE={usingClientEntryPoint:!1,Events:[Rs,Tr,ja,Vm,bm,Ah]},Ti={findFiberByHostInstance:zn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zE={bundleType:Ti.bundleType,version:Ti.version,rendererPackageName:Ti.rendererPackageName,rendererConfig:Ti.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Km(t),t===null?null:t.stateNode},findFiberByHostInstance:Ti.findFiberByHostInstance||FE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vo.isDisabled&&vo.supportsFiber)try{Va=vo.inject(zE),Nt=vo}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bE;ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mh(e))throw Error(E(200));return UE(t,e,null,n)};ot.createRoot=function(t,e){if(!Mh(t))throw Error(E(299));var n=!1,r="",i=Iy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=xh(t,1,!1,null,null,n,!1,r,i),t[qt]=e.current,ns(t.nodeType===8?t.parentNode:t),new Lh(e)};ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Km(e),t=t===null?null:t.stateNode,t};ot.flushSync=function(t){return nr(t)};ot.hydrate=function(t,e,n){if(!Ja(e))throw Error(E(200));return Za(null,t,e,!0,n)};ot.hydrateRoot=function(t,e,n){if(!Mh(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Iy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ty(e,null,t,1,n!=null?n:null,i,!1,s,o),t[qt]=e.current,ns(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Xa(e)};ot.render=function(t,e,n){if(!Ja(e))throw Error(E(200));return Za(null,t,e,!1,n)};ot.unmountComponentAtNode=function(t){if(!Ja(t))throw Error(E(40));return t._reactRootContainer?(nr(function(){Za(null,null,t,!1,function(){t._reactRootContainer=null,t[qt]=null})}),!0):!1};ot.unstable_batchedUpdates=Ah;ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ja(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Za(t,e,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=ot})(Tm);var Zf=Tm.exports;Su.createRoot=Zf.createRoot,Su.hydrateRoot=Zf.hydrateRoot;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},BE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Cy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ky(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},jE=function(t){const e=ky(t);return Cy.encodeByteArray(e,!0)},Ny=function(t){return jE(t).replace(/\./g,"")},HE=function(t){try{return Cy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ay(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function Dy(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ry(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WE(){return _e().indexOf("Electron/")>=0}function Py(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qE(){return _e().indexOf("MSAppHost/")>=0}function GE(){return typeof indexedDB=="object"}function QE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="FirebaseError";class nn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=YE,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?XE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nn(i,a,r)}}function XE(t,e){return t.replace(JE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const JE=/\{\$([^}]+)}/g;function ZE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ma(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ep(s)&&ep(o)){if(!ma(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ep(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eS(t,e){const n=new tS(t,e);return n.subscribe.bind(n)}class tS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ru),i.error===void 0&&(i.error=ru),i.complete===void 0&&(i.complete=ru);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ru(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){return t&&t._delegate?t._delegate:t}class rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new KE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sS(e))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bn){return this.instances.has(e)}getOptions(e=bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=bn){return this.component?this.component.multipleInstances?e:bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iS(t){return t===bn?void 0:t}function sS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const aS={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},lS=W.INFO,uS={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},cS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=uS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $h{constructor(e){this.name=e,this._logLevel=lS,this._logHandler=cS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const hS=(t,e)=>e.some(n=>t instanceof n);let tp,np;function dS(){return tp||(tp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fS(){return np||(np=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xy=new WeakMap,pc=new WeakMap,Oy=new WeakMap,iu=new WeakMap,Uh=new WeakMap;function pS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Tn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xy.set(n,t)}).catch(()=>{}),Uh.set(e,t),e}function mS(t){if(pc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});pc.set(t,e)}let mc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Oy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gS(t){mc=t(mc)}function yS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(su(this),e,...n);return Oy.set(r,e.sort?e.sort():[e]),Tn(r)}:fS().includes(t)?function(...e){return t.apply(su(this),e),Tn(xy.get(this))}:function(...e){return Tn(t.apply(su(this),e))}}function vS(t){return typeof t=="function"?yS(t):(t instanceof IDBTransaction&&mS(t),hS(t,dS())?new Proxy(t,mc):t)}function Tn(t){if(t instanceof IDBRequest)return pS(t);if(iu.has(t))return iu.get(t);const e=vS(t);return e!==t&&(iu.set(t,e),Uh.set(e,t)),e}const su=t=>Uh.get(t);function wS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Tn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Tn(o.result),l.oldVersion,l.newVersion,Tn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ES=["get","getKey","getAll","getAllKeys","count"],SS=["put","add","delete","clear"],ou=new Map;function rp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ou.get(e))return ou.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=SS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ES.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return ou.set(e,s),s}gS(t=>({...t,get:(e,n,r)=>rp(e,n)||t.get(e,n,r),has:(e,n)=>!!rp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gc="@firebase/app",ip="0.7.32";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new $h("@firebase/app"),IS="@firebase/app-compat",kS="@firebase/analytics-compat",CS="@firebase/analytics",NS="@firebase/app-check-compat",AS="@firebase/app-check",DS="@firebase/auth",RS="@firebase/auth-compat",PS="@firebase/database",xS="@firebase/database-compat",OS="@firebase/functions",LS="@firebase/functions-compat",MS="@firebase/installations",$S="@firebase/installations-compat",US="@firebase/messaging",FS="@firebase/messaging-compat",VS="@firebase/performance",bS="@firebase/performance-compat",zS="@firebase/remote-config",BS="@firebase/remote-config-compat",jS="@firebase/storage",HS="@firebase/storage-compat",KS="@firebase/firestore",WS="@firebase/firestore-compat",qS="firebase",GS="9.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="[DEFAULT]",QS={[gc]:"fire-core",[IS]:"fire-core-compat",[CS]:"fire-analytics",[kS]:"fire-analytics-compat",[AS]:"fire-app-check",[NS]:"fire-app-check-compat",[DS]:"fire-auth",[RS]:"fire-auth-compat",[PS]:"fire-rtdb",[xS]:"fire-rtdb-compat",[OS]:"fire-fn",[LS]:"fire-fn-compat",[MS]:"fire-iid",[$S]:"fire-iid-compat",[US]:"fire-fcm",[FS]:"fire-fcm-compat",[VS]:"fire-perf",[bS]:"fire-perf-compat",[zS]:"fire-rc",[BS]:"fire-rc-compat",[jS]:"fire-gcs",[HS]:"fire-gcs-compat",[KS]:"fire-fst",[WS]:"fire-fst-compat","fire-js":"fire-js",[qS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new Map,yc=new Map;function YS(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qr(t){const e=t.name;if(yc.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;yc.set(e,t);for(const n of ga.values())YS(n,t);return!0}function Fh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},sr=new xs("app","Firebase",XS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=GS;function ZS(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Ly,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw sr.create("bad-app-name",{appName:String(r)});const i=ga.get(r);if(i){if(ma(t,i.options)&&ma(n,i.config))return i;throw sr.create("duplicate-app",{appName:r})}const s=new oS(r);for(const a of yc.values())s.addComponent(a);const o=new JS(t,n,s);return ga.set(r,o),o}function My(t=Ly){const e=ga.get(t);if(!e)throw sr.create("no-app",{appName:t});return e}function In(t,e,n){var r;let i=(r=QS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}Qr(new rr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="firebase-heartbeat-database",t_=1,hs="firebase-heartbeat-store";let au=null;function $y(){return au||(au=wS(e_,t_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(hs)}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),au}async function n_(t){var e;try{return(await $y()).transaction(hs).objectStore(hs).get(Uy(t))}catch(n){if(n instanceof nn)ir.warn(n.message);else{const r=sr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});ir.warn(r.message)}}}async function sp(t,e){var n;try{const i=(await $y()).transaction(hs,"readwrite");return await i.objectStore(hs).put(e,Uy(t)),i.done}catch(r){if(r instanceof nn)ir.warn(r.message);else{const i=sr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});ir.warn(i.message)}}}function Uy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=1024,i_=30*24*60*60*1e3;class s_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=op();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=i_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=op(),{heartbeatsToSend:n,unsentEntries:r}=o_(this._heartbeatsCache.heartbeats),i=Ny(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function op(){return new Date().toISOString().substring(0,10)}function o_(t,e=r_){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ap(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ap(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class a_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GE()?QE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await n_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ap(t){return Ny(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t){Qr(new rr("platform-logger",e=>new _S(e),"PRIVATE")),Qr(new rr("heartbeat",e=>new s_(e),"PRIVATE")),In(gc,ip,t),In(gc,ip,"esm2017"),In("fire-js","")}l_("");function Vh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Fy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u_=Fy,Vy=new xs("auth","Firebase",Fy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=new $h("@firebase/auth");function Fo(t,...e){lp.logLevel<=W.ERROR&&lp.error(`Auth (${Ls}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,...e){throw bh(t,...e)}function Dt(t,...e){return bh(t,...e)}function by(t,e,n){const r=Object.assign(Object.assign({},u_()),{[e]:n});return new xs("auth","Firebase",r).create(e,{appName:t.name})}function c_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ot(t,"argument-error"),by(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Vy.create(t,...e)}function M(t,e,...n){if(!t)throw bh(e,...n)}function bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fo(e),new Error(e)}function Yt(t,e){t||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new Map;function zt(t){Yt(t instanceof Function,"Expected a class definition");let e=up.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,up.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t,e){const n=Fh(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ma(s,e!=null?e:{}))return i;Ot(i,"already-initialized")}return n.initialize({options:e})}function d_(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function f_(){return cp()==="http:"||cp()==="https:"}function cp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(f_()||Dy()||"connection"in navigator)?navigator.onLine:!0}function m_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ay()||Ry()}get(){return p_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=new Ms(3e4,6e4);function v_(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function el(t,e,n,r,i={}){return By(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Os(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),zy.fetch()(jy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function By(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},g_),e);try{const i=new E_(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw by(t,c,u);Ot(t,c)}}catch(i){if(i instanceof nn)throw i;Ot(t,"network-request-failed")}}async function w_(t,e,n,r,i={}){const s=await el(t,e,n,r,i);return"mfaPendingCredential"in s&&Ot(t,"multi-factor-auth-required",{_serverResponse:s}),s}function jy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zh(t.config,i):`${t.config.apiScheme}://${i}`}class E_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),y_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S_(t,e){return el(t,"POST","/v1/accounts:delete",e)}async function __(t,e){return el(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function T_(t,e=!1){const n=xt(t),r=await n.getIdToken(e),i=Bh(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zi(lu(i.auth_time)),issuedAtTime:zi(lu(i.iat)),expirationTime:zi(lu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function lu(t){return Number(t)*1e3}function Bh(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Fo("JWT malformed, contained fewer than 3 sections"),null;try{const s=HE(r);return s?JSON.parse(s):(Fo("Failed to decode base64 JWT payload"),null)}catch(s){return Fo("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function I_(t){const e=Bh(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nn&&k_(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function k_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ds(t,__(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?D_(s.providerUserInfo):[],a=A_(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Hy(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function N_(t){const e=xt(t);await ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function A_(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function D_(t){return t.map(e=>{var{providerId:n}=e,r=Vh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(t,e){const n=await By(t,{},async()=>{const r=Os({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=jy(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):I_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await R_(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fs;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fs,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new C_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ds(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return T_(this,e)}reload(){return N_(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ya(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ds(this,S_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:N,stsTokenManager:A}=n;M(m&&A,e,"internal-error");const P=fs.fromJSON(this.name,A);M(typeof m=="string",e,"internal-error"),sn(h,e.name),sn(f,e.name),M(typeof w=="boolean",e,"internal-error"),M(typeof T=="boolean",e,"internal-error"),sn(g,e.name),sn(y,e.name),sn(v,e.name),sn(D,e.name),sn(p,e.name),sn(d,e.name);const X=new Yn({uid:m,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:P,createdAt:p,lastLoginAt:d});return N&&Array.isArray(N)&&(X.providerData=N.map(z=>Object.assign({},z))),D&&(X._redirectEventId=D),X}static async _fromIdTokenResponse(e,n,r=!1){const i=new fs;i.updateFromServerResponse(n);const s=new Yn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ya(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ky.type="NONE";const hp=Ky;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t,e,n){return`firebase:${t}:${e}:${n}`}class Fr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Vo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Vo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Fr(zt(hp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||zt(hp);const o=Vo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Yn._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Fr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Fr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yy(e))return"Blackberry";if(Xy(e))return"Webos";if(jh(e))return"Safari";if((e.includes("chrome/")||qy(e))&&!e.includes("edge/"))return"Chrome";if(Qy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wy(t=_e()){return/firefox\//i.test(t)}function jh(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qy(t=_e()){return/crios\//i.test(t)}function Gy(t=_e()){return/iemobile/i.test(t)}function Qy(t=_e()){return/android/i.test(t)}function Yy(t=_e()){return/blackberry/i.test(t)}function Xy(t=_e()){return/webos/i.test(t)}function tl(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function P_(t=_e()){var e;return tl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function x_(){return Py()&&document.documentMode===10}function Jy(t=_e()){return tl(t)||Qy(t)||Xy(t)||Yy(t)||/windows phone/i.test(t)||Gy(t)}function O_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t,e=[]){let n;switch(t){case"Browser":n=dp(_e());break;case"Worker":n=`${dp(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fp(this),this.idTokenSubscription=new fp(this),this.beforeStateQueue=new L_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ya(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=m_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xt(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Fr.create(this,[zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return M(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Hh(t){return xt(t)}class fp{constructor(e){this.auth=e,this.observer=null,this.addObserver=eS(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,n){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(t,e){return w_(t,"POST","/v1/accounts:signInWithIdp",v_(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="http://localhost";class or extends ev{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new or(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vr(e,n)}buildRequest(){const e={requestUri:$_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Os(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends Kh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends $s{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cn.credential(e.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends $s{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return or._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ut.credential(n,r)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends $s{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends $s{constructor(){super("twitter.com")}static credential(e,n){return or._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Yn._fromIdTokenResponse(e,r,i),o=pp(r);return new Yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=pp(r);return new Yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function pp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends nn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,va.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new va(e,n,r,i)}}function tv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?va._fromErrorAndOperation(t,s,e,r):s})}async function U_(t,e,n=!1){const r=await ds(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await ds(t,tv(i,s,e,t),n);M(o.idToken,i,"internal-error");const a=Bh(o.idToken);M(a,i,"internal-error");const{sub:l}=a;return M(t.uid===l,i,"user-mismatch"),Yr._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Ot(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(t,e,n=!1){const r="signIn",i=await tv(t,r,e),s=await Yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function b_(t,e,n,r){return xt(t).onAuthStateChanged(e,n,r)}function nv(t){return xt(t).signOut()}const wa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wa,"1"),this.storage.removeItem(wa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(){const t=_e();return jh(t)||tl(t)}const B_=1e3,j_=10;class iv extends rv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=z_()&&O_(),this.fallbackToPolling=Jy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);x_()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,j_):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},B_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iv.type="LOCAL";const H_=iv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv extends rv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sv.type="SESSION";const ov=sv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new nl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await K_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Wh("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){return window}function q_(t){Rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function G_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Q_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Y_(){return av()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="firebaseLocalStorageDb",X_=1,Ea="firebaseLocalStorage",uv="fbase_key";class Us{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rl(t,e){return t.transaction([Ea],e?"readwrite":"readonly").objectStore(Ea)}function J_(){const t=indexedDB.deleteDatabase(lv);return new Us(t).toPromise()}function wc(){const t=indexedDB.open(lv,X_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ea,{keyPath:uv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ea)?e(r):(r.close(),await J_(),e(await wc()))})})}async function mp(t,e,n){const r=rl(t,!0).put({[uv]:e,value:n});return new Us(r).toPromise()}async function Z_(t,e){const n=rl(t,!1).get(e),r=await new Us(n).toPromise();return r===void 0?null:r.value}function gp(t,e){const n=rl(t,!0).delete(e);return new Us(n).toPromise()}const eT=800,tT=3;class cv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>tT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return av()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nl._getInstance(Y_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await G_(),!this.activeServiceWorker)return;this.sender=new W_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Q_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wc();return await mp(e,wa,"1"),await gp(e,wa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>mp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Z_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=rl(i,!1).getAll();return new Us(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cv.type="LOCAL";const nT=cv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function iT(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Dt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",rT().appendChild(r)})}function sT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ms(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(t,e){return e?zt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh extends ev{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oT(t){return V_(t.auth,new qh(t),t.bypassAuthState)}function aT(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),F_(n,new qh(t),t.bypassAuthState)}async function lT(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),U_(n,new qh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oT;case"linkViaPopup":case"linkViaRedirect":return lT;case"reauthViaPopup":case"reauthViaRedirect":return aT;default:Ot(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=new Ms(2e3,1e4);async function cT(t,e,n){const r=Hh(t);c_(t,e,Kh);const i=hv(r,n);return new Hn(r,"signInViaPopup",e,i).executeNotNull()}class Hn extends dv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=Wh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,uT.get())};e()}}Hn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="pendingRedirect",bo=new Map;class dT extends dv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bo.get(this.auth._key());if(!e){try{const r=await fT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bo.set(this.auth._key(),e)}return this.bypassAuthState||bo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fT(t,e){const n=gT(e),r=mT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pT(t,e){bo.set(t._key(),e)}function mT(t){return zt(t._redirectPersistence)}function gT(t){return Vo(hT,t.config.apiKey,t.name)}async function yT(t,e,n=!1){const r=Hh(t),i=hv(r,e),o=await new dT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=10*60*1e3;class wT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ET(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vT&&this.cachedEventUids.clear(),this.cachedEventUids.has(yp(e))}saveEventToCache(e){this.cachedEventUids.add(yp(e)),this.lastProcessedEventTime=Date.now()}}function yp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ET(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(t,e={}){return el(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TT=/^https?/;async function IT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ST(t);for(const n of e)try{if(kT(n))return}catch{}Ot(t,"unauthorized-domain")}function kT(t){const e=vc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TT.test(n))return!1;if(_T.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new Ms(3e4,6e4);function vp(){const t=Rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NT(t){return new Promise((e,n)=>{var r,i,s;function o(){vp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vp(),n(Dt(t,"network-request-failed"))},timeout:CT.get()})}if(!((i=(r=Rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Rt().gapi)===null||s===void 0)&&s.load)o();else{const a=sT("iframefcb");return Rt()[a]=()=>{gapi.load?o():n(Dt(t,"network-request-failed"))},iT(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw zo=null,e})}let zo=null;function AT(t){return zo=zo||NT(t),zo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=new Ms(5e3,15e3),RT="__/auth/iframe",PT="emulator/auth/iframe",xT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LT(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zh(e,PT):`https://${t.config.authDomain}/${RT}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},i=OT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Os(r).slice(1)}`}async function MT(t){const e=await AT(t),n=Rt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:LT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),a=Rt().setTimeout(()=>{s(o)},DT.get());function l(){Rt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UT=500,FT=600,VT="_blank",bT="http://localhost";class wp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zT(t,e,n,r=UT,i=FT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},$T),{width:r.toString(),height:i.toString(),top:s,left:o}),u=_e().toLowerCase();n&&(a=qy(u)?VT:n),Wy(u)&&(e=e||bT,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(P_(u)&&a!=="_self")return BT(e||"",a),new wp(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new wp(h)}function BT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="__/auth/handler",HT="emulator/auth/handler";function Ep(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:i};if(e instanceof Kh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ZE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof $s){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${KT(t)}?${Os(a).slice(1)}`}function KT({config:t}){return t.emulator?zh(t,HT):`https://${t.authDomain}/${jT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="webStorageSupport";class WT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ov,this._completeRedirectFn=yT,this._overrideRedirectResult=pT}async _openPopup(e,n,r,i){var s;Yt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Ep(e,n,r,vc(),i);return zT(e,o,Wh())}async _openRedirect(e,n,r,i){return await this._originValidation(e),q_(Ep(e,n,r,vc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await MT(e),r=new wT(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uu,{type:uu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[uu];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jy()||jh()||tl()}}const qT=WT;var Sp="@firebase/auth",_p="0.20.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function YT(t){Qr(new rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{M(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),M(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zy(t)},c=new M_(a,l,u);return d_(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qr(new rr("auth-internal",e=>{const n=Hh(e.getProvider("auth").getImmediate());return(r=>new GT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Sp,_p,QT(t)),In(Sp,_p,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t=My()){const e=Fh(t,"auth");return e.isInitialized()?e.getImmediate():h_(t,{popupRedirectResolver:qT,persistence:[nT,H_,ov]})}YT("Browser");var XT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,Gh=Gh||{},L=XT||self;function _a(){}function Ec(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fs(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function JT(t){return Object.prototype.hasOwnProperty.call(t,cu)&&t[cu]||(t[cu]=++ZT)}var cu="closure_uid_"+(1e9*Math.random()>>>0),ZT=0;function eI(t,e,n){return t.call.apply(t.bind,arguments)}function tI(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ae(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ae=eI:Ae=tI,Ae.apply(null,arguments)}function Eo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function xe(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ln(){this.s=this.s,this.o=this.o}var nI=0;Ln.prototype.s=!1;Ln.prototype.na=function(){!this.s&&(this.s=!0,this.M(),nI!=0)&&JT(this)};Ln.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},mv=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function rI(t){e:{var e=GI;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Tp(t){return Array.prototype.concat.apply([],arguments)}function Qh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ta(t){return/^[\s\xa0]*$/.test(t)}var Ip=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Be(t,e){return t.indexOf(e)!=-1}function hu(t,e){return t<e?-1:t>e?1:0}var je;e:{var kp=L.navigator;if(kp){var Cp=kp.userAgent;if(Cp){je=Cp;break e}}je=""}function Yh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function gv(t){const e={};for(const n in t)e[n]=t[n];return e}var Np="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Np.length;s++)n=Np[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Xh(t){return Xh[" "](t),t}Xh[" "]=_a;function iI(t){var e=aI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var sI=Be(je,"Opera"),Xr=Be(je,"Trident")||Be(je,"MSIE"),vv=Be(je,"Edge"),Sc=vv||Xr,wv=Be(je,"Gecko")&&!(Be(je.toLowerCase(),"webkit")&&!Be(je,"Edge"))&&!(Be(je,"Trident")||Be(je,"MSIE"))&&!Be(je,"Edge"),oI=Be(je.toLowerCase(),"webkit")&&!Be(je,"Edge");function Ev(){var t=L.document;return t?t.documentMode:void 0}var Ia;e:{var du="",fu=function(){var t=je;if(wv)return/rv:([^\);]+)(\)|;)/.exec(t);if(vv)return/Edge\/([\d\.]+)/.exec(t);if(Xr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(oI)return/WebKit\/(\S+)/.exec(t);if(sI)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(fu&&(du=fu?fu[1]:""),Xr){var pu=Ev();if(pu!=null&&pu>parseFloat(du)){Ia=String(pu);break e}}Ia=du}var aI={};function lI(){return iI(function(){let t=0;const e=Ip(String(Ia)).split("."),n=Ip("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=hu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||hu(i[2].length==0,s[2].length==0)||hu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var _c;if(L.document&&Xr){var Ap=Ev();_c=Ap||parseInt(Ia,10)||void 0}else _c=void 0;var uI=_c,cI=function(){if(!L.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{L.addEventListener("test",_a,e),L.removeEventListener("test",_a,e)}catch{}return t}();function Ue(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};function ps(t,e){if(Ue.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(wv){e:{try{Xh(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hI[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ps.Z.h.call(this)}}xe(ps,Ue);var hI={2:"touch",3:"pen",4:"mouse"};ps.prototype.h=function(){ps.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Vs="closure_listenable_"+(1e6*Math.random()|0),dI=0;function fI(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++dI,this.ca=this.fa=!1}function il(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function sl(t){this.src=t,this.g={},this.h=0}sl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ic(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new fI(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Tc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=pv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(il(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ic(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Jh="closure_lm_"+(1e6*Math.random()|0),mu={};function Sv(t,e,n,r,i){if(r&&r.once)return Tv(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Sv(t,e[s],n,r,i);return null}return n=td(n),t&&t[Vs]?t.N(e,n,Fs(r)?!!r.capture:!!r,i):_v(t,e,n,!1,r,i)}function _v(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Fs(i)?!!i.capture:!!i,a=ed(t);if(a||(t[Jh]=a=new sl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=pI(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)cI||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(kv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function pI(){function t(n){return e.call(t.src,t.listener,n)}var e=mI;return t}function Tv(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Tv(t,e[s],n,r,i);return null}return n=td(n),t&&t[Vs]?t.O(e,n,Fs(r)?!!r.capture:!!r,i):_v(t,e,n,!0,r,i)}function Iv(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Iv(t,e[s],n,r,i);else r=Fs(r)?!!r.capture:!!r,n=td(n),t&&t[Vs]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ic(s,n,r,i),-1<n&&(il(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ed(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ic(e,n,r,i)),(n=-1<t?e[t]:null)&&Zh(n))}function Zh(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Vs])Tc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(kv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ed(e))?(Tc(n,t),n.h==0&&(n.src=null,e[Jh]=null)):il(t)}}}function kv(t){return t in mu?mu[t]:mu[t]="on"+t}function mI(t,e){if(t.ca)t=!0;else{e=new ps(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Zh(t),t=n.call(r,e)}return t}function ed(t){return t=t[Jh],t instanceof sl?t:null}var gu="__closure_events_fn_"+(1e9*Math.random()>>>0);function td(t){return typeof t=="function"?t:(t[gu]||(t[gu]=function(e){return t.handleEvent(e)}),t[gu])}function Te(){Ln.call(this),this.i=new sl(this),this.P=this,this.I=null}xe(Te,Ln);Te.prototype[Vs]=!0;Te.prototype.removeEventListener=function(t,e,n,r){Iv(this,t,e,n,r)};function De(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ue(e,t);else if(e instanceof Ue)e.target=e.target||t;else{var i=e;e=new Ue(r,t),yv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=So(o,r,!0,e)&&i}if(o=e.g=t,i=So(o,r,!0,e)&&i,i=So(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=So(o,r,!1,e)&&i}Te.prototype.M=function(){if(Te.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)il(n[r]);delete t.g[e],t.h--}}this.I=null};Te.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Te.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function So(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Tc(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var nd=L.JSON.stringify;function gI(){var t=Nv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yI{constructor(){this.h=this.g=null}add(e,n){const r=Cv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Cv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new vI,t=>t.reset());class vI{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function wI(t){L.setTimeout(()=>{throw t},0)}function rd(t,e){kc||EI(),Cc||(kc(),Cc=!0),Nv.add(t,e)}var kc;function EI(){var t=L.Promise.resolve(void 0);kc=function(){t.then(SI)}}var Cc=!1,Nv=new yI;function SI(){for(var t;t=gI();){try{t.h.call(t.g)}catch(n){wI(n)}var e=Cv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Cc=!1}function ol(t,e){Te.call(this),this.h=t||1,this.g=e||L,this.j=Ae(this.kb,this),this.l=Date.now()}xe(ol,Te);k=ol.prototype;k.da=!1;k.S=null;k.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),De(this,"tick"),this.da&&(id(this),this.start()))}};k.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function id(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}k.M=function(){ol.Z.M.call(this),id(this),delete this.g};function sd(t,e,n){if(typeof t=="function")n&&(t=Ae(t,n));else if(t&&typeof t.handleEvent=="function")t=Ae(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:L.setTimeout(t,e||0)}function Av(t){t.g=sd(()=>{t.g=null,t.i&&(t.i=!1,Av(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class _I extends Ln{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Av(this)}M(){super.M(),this.g&&(L.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ms(t){Ln.call(this),this.h=t,this.g={}}xe(ms,Ln);var Dp=[];function Dv(t,e,n,r){Array.isArray(n)||(n&&(Dp[0]=n.toString()),n=Dp);for(var i=0;i<n.length;i++){var s=Sv(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Rv(t){Yh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Zh(e)},t),t.g={}}ms.prototype.M=function(){ms.Z.M.call(this),Rv(this)};ms.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function al(){this.g=!0}al.prototype.Aa=function(){this.g=!1};function TI(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function II(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Rr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+CI(t,n)+(r?" "+r:"")})}function kI(t,e){t.info(function(){return"TIMEOUT: "+e})}al.prototype.info=function(){};function CI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return nd(n)}catch{return e}}var fr={},Rp=null;function ll(){return Rp=Rp||new Te}fr.Ma="serverreachability";function Pv(t){Ue.call(this,fr.Ma,t)}xe(Pv,Ue);function gs(t){const e=ll();De(e,new Pv(e))}fr.STAT_EVENT="statevent";function xv(t,e){Ue.call(this,fr.STAT_EVENT,t),this.stat=e}xe(xv,Ue);function He(t){const e=ll();De(e,new xv(e,t))}fr.Na="timingevent";function Ov(t,e){Ue.call(this,fr.Na,t),this.size=e}xe(Ov,Ue);function bs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return L.setTimeout(function(){t()},e)}var ul={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Lv={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function od(){}od.prototype.h=null;function Pp(t){return t.h||(t.h=t.i())}function Mv(){}var zs={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ad(){Ue.call(this,"d")}xe(ad,Ue);function ld(){Ue.call(this,"c")}xe(ld,Ue);var Nc;function cl(){}xe(cl,od);cl.prototype.g=function(){return new XMLHttpRequest};cl.prototype.i=function(){return{}};Nc=new cl;function Bs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new ms(this),this.P=NI,t=Sc?125:void 0,this.W=new ol(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new $v}function $v(){this.i=null,this.g="",this.h=!1}var NI=45e3,Ac={},ka={};k=Bs.prototype;k.setTimeout=function(t){this.P=t};function Dc(t,e,n){t.K=1,t.v=dl(Xt(e)),t.s=n,t.U=!0,Uv(t,null)}function Uv(t,e){t.F=Date.now(),js(t),t.A=Xt(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Hv(n.h,"t",r),t.C=0,n=t.l.H,t.h=new $v,t.g=c0(t.l,n?e:null,!t.s),0<t.O&&(t.L=new _I(Ae(t.Ia,t,t.g),t.O)),Dv(t.V,t.g,"readystatechange",t.gb),e=t.H?gv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),gs(),TI(t.j,t.u,t.A,t.m,t.X,t.s)}k.gb=function(t){t=t.target;const e=this.L;e&&Bt(t)==3?e.l():this.Ia(t)};k.Ia=function(t){try{if(t==this.g)e:{const c=Bt(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Sc||this.g&&(this.h.h||this.g.ga()||Mp(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?gs(3):gs(2)),hl(this);var n=this.g.ba();this.N=n;t:if(Fv(this)){var r=Mp(this.g);t="";var i=r.length,s=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kn(this),Bi(this);var o="";break t}this.h.i=new L.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,II(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ta(a)){var u=a;break t}}u=null}if(n=u)Rr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Rc(this,n);else{this.i=!1,this.o=3,He(12),Kn(this),Bi(this);break e}}this.U?(Vv(this,c,o),Sc&&this.i&&c==3&&(Dv(this.V,this.W,"tick",this.fb),this.W.start())):(Rr(this.j,this.m,o,null),Rc(this,o)),c==4&&Kn(this),this.i&&!this.I&&(c==4?o0(this.l,this):(this.i=!1,js(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,He(12)):(this.o=0,He(13)),Kn(this),Bi(this)}}}catch{}finally{}};function Fv(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function Vv(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=AI(t,n),i==ka){e==4&&(t.o=4,He(14),r=!1),Rr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Ac){t.o=4,He(15),Rr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Rr(t.j,t.m,i,null),Rc(t,i);Fv(t)&&i!=ka&&i!=Ac&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,He(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),yd(e),e.L=!0,He(11))):(Rr(t.j,t.m,n,"[Invalid Chunked Response]"),Kn(t),Bi(t))}k.fb=function(){if(this.g){var t=Bt(this.g),e=this.g.ga();this.C<e.length&&(hl(this),Vv(this,t,e),this.i&&t!=4&&js(this))}};function AI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ka:(n=Number(e.substring(n,r)),isNaN(n)?Ac:(r+=1,r+n>e.length?ka:(e=e.substr(r,n),t.C=r+n,e)))}k.cancel=function(){this.I=!0,Kn(this)};function js(t){t.Y=Date.now()+t.P,bv(t,t.P)}function bv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=bs(Ae(t.eb,t),e)}function hl(t){t.B&&(L.clearTimeout(t.B),t.B=null)}k.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(kI(this.j,this.A),this.K!=2&&(gs(),He(17)),Kn(this),this.o=2,Bi(this)):bv(this,this.Y-t)};function Bi(t){t.l.G==0||t.I||o0(t.l,t)}function Kn(t){hl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,id(t.W),Rv(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Rc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Pc(n.i,t))){if(n.I=t.N,!t.J&&Pc(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Da(n),ml(n);else break e;gd(n),He(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=bs(Ae(n.ab,n),6e3));if(1>=qv(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Wn(n,11)}else if((t.J||n.g==t)&&Da(n),!Ta(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;!s.g&&(Be(y,"spdy")||Be(y,"quic")||Be(y,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(hd(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,te(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=u0(r,r.H?r.la:null,r.W),o.J){Gv(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(hl(a),js(a)),r.g=o}else i0(r);0<n.l.length&&gl(n)}else u[0]!="stop"&&u[0]!="close"||Wn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Wn(n,7):md(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}gs(4)}catch{}}function DI(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Ec(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ud(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ec(t)||typeof t=="string")mv(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Ec(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=DI(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function ai(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof ai)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}k=ai.prototype;k.R=function(){cd(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};k.T=function(){return cd(this),this.g.concat()};function cd(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ar(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],ar(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}k.get=function(t,e){return ar(this.h,t)?this.h[t]:e};k.set=function(t,e){ar(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};k.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function ar(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var zv=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function RI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function lr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof lr){this.g=e!==void 0?e:t.g,Ca(this,t.j),this.s=t.s,Na(this,t.i),Aa(this,t.m),this.l=t.l,e=t.h;var n=new ys;n.i=e.i,e.g&&(n.g=new ai(e.g),n.h=e.h),xp(this,n),this.o=t.o}else t&&(n=String(t).match(zv))?(this.g=!!e,Ca(this,n[1]||"",!0),this.s=ji(n[2]||""),Na(this,n[3]||"",!0),Aa(this,n[4]),this.l=ji(n[5]||"",!0),xp(this,n[6]||"",!0),this.o=ji(n[7]||"")):(this.g=!!e,this.h=new ys(null,this.g))}lr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ri(e,Op,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ri(e,Op,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ri(n,n.charAt(0)=="/"?MI:LI,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ri(n,UI)),t.join("")};function Xt(t){return new lr(t)}function Ca(t,e,n){t.j=n?ji(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Na(t,e,n){t.i=n?ji(e,!0):e}function Aa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xp(t,e,n){e instanceof ys?(t.h=e,FI(t.h,t.g)):(n||(e=Ri(e,$I)),t.h=new ys(e,t.g))}function te(t,e,n){t.h.set(e,n)}function dl(t){return te(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function PI(t){return t instanceof lr?Xt(t):new lr(t,void 0)}function xI(t,e,n,r){var i=new lr(null,void 0);return t&&Ca(i,t),e&&Na(i,e),n&&Aa(i,n),r&&(i.l=r),i}function ji(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ri(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,OI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function OI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Op=/[#\/\?@]/g,LI=/[#\?:]/g,MI=/[#\?]/g,$I=/[#\?@]/g,UI=/#/g;function ys(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Mn(t){t.g||(t.g=new ai,t.h=0,t.i&&RI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=ys.prototype;k.add=function(t,e){Mn(this),this.i=null,t=li(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Bv(t,e){Mn(t),e=li(t,e),ar(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ar(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&cd(t)))}function jv(t,e){return Mn(t),e=li(t,e),ar(t.g.h,e)}k.forEach=function(t,e){Mn(this),this.g.forEach(function(n,r){mv(n,function(i){t.call(e,i,r,this)},this)},this)};k.T=function(){Mn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};k.R=function(t){Mn(this);var e=[];if(typeof t=="string")jv(this,t)&&(e=Tp(e,this.g.get(li(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Tp(e,t[n])}return e};k.set=function(t,e){return Mn(this),this.i=null,t=li(this,t),jv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function Hv(t,e,n){Bv(t,e),0<n.length&&(t.i=null,t.g.set(li(t,e),Qh(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function li(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function FI(t,e){e&&!t.j&&(Mn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Bv(this,r),Hv(this,i,n))},t)),t.j=e}var VI=class{constructor(t,e){this.h=t,this.g=e}};function Kv(t){this.l=t||bI,L.PerformanceNavigationTiming?(t=L.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(L.g&&L.g.Ea&&L.g.Ea()&&L.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bI=10;function Wv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function qv(t){return t.h?1:t.g?t.g.size:0}function Pc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function hd(t,e){t.g?t.g.add(e):t.h=e}function Gv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Kv.prototype.cancel=function(){if(this.i=Qv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Qv(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Qh(t.i)}function dd(){}dd.prototype.stringify=function(t){return L.JSON.stringify(t,void 0)};dd.prototype.parse=function(t){return L.JSON.parse(t,void 0)};function zI(){this.g=new dd}function BI(t,e,n){const r=n||"";try{ud(t,function(i,s){let o=i;Fs(i)&&(o=nd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function jI(t,e){const n=new al;if(L.Image){const r=new Image;r.onload=Eo(_o,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Eo(_o,n,r,"TestLoadImage: error",!1,e),r.onabort=Eo(_o,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Eo(_o,n,r,"TestLoadImage: timeout",!1,e),L.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function _o(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Hs(t){this.l=t.$b||null,this.j=t.ib||!1}xe(Hs,od);Hs.prototype.g=function(){return new fl(this.l,this.j)};Hs.prototype.i=function(t){return function(){return t}}({});function fl(t,e){Te.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=fd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xe(fl,Te);var fd=0;k=fl.prototype;k.open=function(t,e){if(this.readyState!=fd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vs(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||L).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ks(this)),this.readyState=fd};k.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vs(this)),this.g&&(this.readyState=3,vs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof L.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yv(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Yv(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}k.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ks(this):vs(this),this.readyState==3&&Yv(this)}};k.Ua=function(t){this.g&&(this.response=this.responseText=t,Ks(this))};k.Ta=function(t){this.g&&(this.response=t,Ks(this))};k.ha=function(){this.g&&Ks(this)};function Ks(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vs(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(fl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var HI=L.JSON.parse;function de(t){Te.call(this),this.headers=new ai,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Xv,this.K=this.L=!1}xe(de,Te);var Xv="",KI=/^https?$/i,WI=["POST","PUT"];k=de.prototype;k.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Nc.g(),this.C=this.u?Pp(this.u):Pp(Nc),this.g.onreadystatechange=Ae(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Lp(this,s);return}t=n||"";const i=new ai(this.headers);r&&ud(r,function(s,o){i.set(o,s)}),r=rI(i.T()),n=L.FormData&&t instanceof L.FormData,!(0<=pv(WI,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{e0(this),0<this.B&&((this.K=qI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ae(this.pa,this)):this.A=sd(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Lp(this,s)}};function qI(t){return Xr&&lI()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function GI(t){return t.toLowerCase()=="content-type"}k.pa=function(){typeof Gh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,De(this,"timeout"),this.abort(8))};function Lp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Jv(t),pl(t)}function Jv(t){t.D||(t.D=!0,De(t,"complete"),De(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,De(this,"complete"),De(this,"abort"),pl(this))};k.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),pl(this,!0)),de.Z.M.call(this)};k.Fa=function(){this.s||(this.F||this.v||this.l?Zv(this):this.cb())};k.cb=function(){Zv(this)};function Zv(t){if(t.h&&typeof Gh<"u"&&(!t.C[1]||Bt(t)!=4||t.ba()!=2)){if(t.v&&Bt(t)==4)sd(t.Fa,0,t);else if(De(t,"readystatechange"),Bt(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(zv)[1]||null;if(!i&&L.self&&L.self.location){var s=L.self.location.protocol;i=s.substr(0,s.length-1)}r=!KI.test(i?i.toLowerCase():"")}n=r}if(n)De(t,"complete"),De(t,"success");else{t.m=6;try{var o=2<Bt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",Jv(t)}}finally{pl(t)}}}}function pl(t,e){if(t.g){e0(t);const n=t.g,r=t.C[0]?_a:null;t.g=null,t.C=null,e||De(t,"ready");try{n.onreadystatechange=r}catch{}}}function e0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(L.clearTimeout(t.A),t.A=null)}function Bt(t){return t.g?t.g.readyState:0}k.ba=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}};k.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),HI(e)}};function Mp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Xv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}k.Da=function(){return this.m};k.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function QI(t){let e="";return Yh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function pd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=QI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):te(t,e,n))}function Ii(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function t0(t){this.za=0,this.l=[],this.h=new al,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ii("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ii("baseRetryDelayMs",5e3,t),this.$a=Ii("retryDelaySeedMs",1e4,t),this.Ya=Ii("forwardChannelMaxRetries",2,t),this.ra=Ii("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new Kv(t&&t.concurrentRequestLimit),this.Ca=new zI,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}k=t0.prototype;k.ma=8;k.G=1;function md(t){if(n0(t),t.G==3){var e=t.V++,n=Xt(t.F);te(n,"SID",t.J),te(n,"RID",e),te(n,"TYPE","terminate"),Ws(t,n),e=new Bs(t,t.h,e,void 0),e.K=2,e.v=dl(Xt(n)),n=!1,L.navigator&&L.navigator.sendBeacon&&(n=L.navigator.sendBeacon(e.v.toString(),"")),!n&&L.Image&&(new Image().src=e.v,n=!0),n||(e.g=c0(e.l,null),e.g.ea(e.v)),e.F=Date.now(),js(e)}l0(t)}k.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function ml(t){t.g&&(yd(t),t.g.cancel(),t.g=null)}function n0(t){ml(t),t.u&&(L.clearTimeout(t.u),t.u=null),Da(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&L.clearTimeout(t.m),t.m=null)}function yu(t,e){t.l.push(new VI(t.Za++,e)),t.G==3&&gl(t)}function gl(t){Wv(t.i)||t.m||(t.m=!0,rd(t.Ha,t),t.C=0)}function YI(t,e){return qv(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=bs(Ae(t.Ha,t,e),a0(t,t.C)),t.C++,!0)}k.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Bs(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=gv(s),yv(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=r0(this,i,e),n=Xt(this.F),te(n,"RID",t),te(n,"CVER",22),this.D&&te(n,"X-HTTP-Session-Id",this.D),Ws(this,n),this.o&&s&&pd(n,this.o,s),hd(this.i,i),this.Ra&&te(n,"TYPE","init"),this.ja?(te(n,"$req",e),te(n,"SID","null"),i.$=!0,Dc(i,n,null)):Dc(i,n,e),this.G=2}}else this.G==3&&(t?$p(this,t):this.l.length==0||Wv(this.i)||$p(this))};function $p(t,e){var n;e?n=e.m:n=t.V++;const r=Xt(t.F);te(r,"SID",t.J),te(r,"RID",n),te(r,"AID",t.U),Ws(t,r),t.o&&t.s&&pd(r,t.o,t.s),n=new Bs(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=r0(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),hd(t.i,n),Dc(n,r,e)}function Ws(t,e){t.j&&ud({},function(n,r){te(e,r,n)})}function r0(t,e,n){n=Math.min(t.l.length,n);var r=t.j?Ae(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{BI(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function i0(t){t.g||t.u||(t.Y=1,rd(t.Ga,t),t.A=0)}function gd(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=bs(Ae(t.Ga,t),a0(t,t.A)),t.A++,!0)}k.Ga=function(){if(this.u=null,s0(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=bs(Ae(this.bb,this),t)}};k.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,He(10),ml(this),s0(this))};function yd(t){t.B!=null&&(L.clearTimeout(t.B),t.B=null)}function s0(t){t.g=new Bs(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Xt(t.oa);te(e,"RID","rpc"),te(e,"SID",t.J),te(e,"CI",t.N?"0":"1"),te(e,"AID",t.U),Ws(t,e),te(e,"TYPE","xmlhttp"),t.o&&t.s&&pd(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=dl(Xt(e)),n.s=null,n.U=!0,Uv(n,t)}k.ab=function(){this.v!=null&&(this.v=null,ml(this),gd(this),He(19))};function Da(t){t.v!=null&&(L.clearTimeout(t.v),t.v=null)}function o0(t,e){var n=null;if(t.g==e){Da(t),yd(t),t.g=null;var r=2}else if(Pc(t.i,e))n=e.D,Gv(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ll(),De(r,new Ov(r,n)),gl(t)}else i0(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&YI(t,e)||r==2&&gd(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Wn(t,5);break;case 4:Wn(t,10);break;case 3:Wn(t,6);break;default:Wn(t,2)}}}function a0(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Wn(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=Ae(t.jb,t);n||(n=new lr("//www.google.com/images/cleardot.gif"),L.location&&L.location.protocol=="http"||Ca(n,"https"),dl(n)),jI(n.toString(),r)}else He(2);t.G=0,t.j&&t.j.va(e),l0(t),n0(t)}k.jb=function(t){t?(this.h.info("Successfully pinged google.com"),He(2)):(this.h.info("Failed to ping google.com"),He(1))};function l0(t){t.G=0,t.I=-1,t.j&&((Qv(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Qh(t.l),t.l.length=0),t.j.ua())}function u0(t,e,n){let r=PI(n);if(r.i!="")e&&Na(r,e+"."+r.i),Aa(r,r.m);else{const i=L.location;r=xI(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Yh(t.aa,function(i,s){te(r,s,i)}),e=t.D,n=t.sa,e&&n&&te(r,e,n),te(r,"VER",t.ma),Ws(t,r),r}function c0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new de(new Hs({ib:!0})):new de(t.qa),e.L=t.H,e}function h0(){}k=h0.prototype;k.xa=function(){};k.wa=function(){};k.va=function(){};k.ua=function(){};k.Oa=function(){};function Ra(){if(Xr&&!(10<=Number(uI)))throw Error("Environmental error: no available transport.")}Ra.prototype.g=function(t,e){return new st(t,e)};function st(t,e){Te.call(this),this.g=new t0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ta(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ta(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ui(this)}xe(st,Te);st.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),rd(Ae(t.hb,t,e))),He(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=u0(t,null,t.W),gl(t)};st.prototype.close=function(){md(this.g)};st.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,yu(this.g,e)}else this.v?(e={},e.__data__=nd(t),yu(this.g,e)):yu(this.g,t)};st.prototype.M=function(){this.g.j=null,delete this.j,md(this.g),delete this.g,st.Z.M.call(this)};function d0(t){ad.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}xe(d0,ad);function f0(){ld.call(this),this.status=1}xe(f0,ld);function ui(t){this.g=t}xe(ui,h0);ui.prototype.xa=function(){De(this.g,"a")};ui.prototype.wa=function(t){De(this.g,new d0(t))};ui.prototype.va=function(t){De(this.g,new f0)};ui.prototype.ua=function(){De(this.g,"b")};Ra.prototype.createWebChannel=Ra.prototype.g;st.prototype.send=st.prototype.u;st.prototype.open=st.prototype.m;st.prototype.close=st.prototype.close;ul.NO_ERROR=0;ul.TIMEOUT=8;ul.HTTP_ERROR=6;Lv.COMPLETE="complete";Mv.EventType=zs;zs.OPEN="a";zs.CLOSE="b";zs.ERROR="c";zs.MESSAGE="d";Te.prototype.listen=Te.prototype.N;de.prototype.listenOnce=de.prototype.O;de.prototype.getLastError=de.prototype.La;de.prototype.getLastErrorCode=de.prototype.Da;de.prototype.getStatus=de.prototype.ba;de.prototype.getResponseJson=de.prototype.Qa;de.prototype.getResponseText=de.prototype.ga;de.prototype.send=de.prototype.ea;var XI=function(){return new Ra},JI=function(){return ll()},vu=ul,ZI=Lv,ek=fr,Up={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},tk=Hs,To=Mv,nk=de;const Fp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci="9.9.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new $h("@firebase/firestore");function Vp(){return ur.logLevel}function R(t,...e){if(ur.logLevel<=W.DEBUG){const n=e.map(vd);ur.debug(`Firestore (${ci}): ${t}`,...n)}}function Jt(t,...e){if(ur.logLevel<=W.ERROR){const n=e.map(vd);ur.error(`Firestore (${ci}): ${t}`,...n)}}function bp(t,...e){if(ur.logLevel<=W.WARN){const n=e.map(vd);ur.warn(`Firestore (${ci}): ${t}`,...n)}}function vd(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t="Unexpected state"){const e=`FIRESTORE (${ci}) INTERNAL ASSERTION FAILED: `+t;throw Jt(e),new Error(e)}function Y(t,e){t||$()}function U(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends nn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ik{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class sk{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new kn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new rk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new Ge(e)}}class ok{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Y(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class ak{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new ok(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class lk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uk{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Y(typeof n.token=="string"),this.A=n.token,new lk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ck(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function q(t,e){return t<e?-1:t>e?1:0}function Jr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.timestamp=e}static fromTimestamp(e){return new b(e)}static min(){return new b(new me(0,0))}static max(){return new b(new me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ws.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ws?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends ws{construct(e,n,r){return new oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const hk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $e extends ws{construct(e,n,r){return new $e(e,n,r)}static isValidIdentifier(e){return hk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$e.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $e(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $e(n)}static emptyPath(){return new $e([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(oe.fromString(e))}static fromName(e){return new x(oe.fromString(e).popFirst(5))}static empty(){return new x(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new oe(e.slice()))}}function dk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=b.fromTimestamp(r===1e9?new me(n+1,0):new me(n,r));return new An(i,x.empty(),e)}function fk(t){return new An(t.readTime,t.key,-1)}class An{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new An(b.min(),x.empty(),-1)}static max(){return new An(b.max(),x.empty(),-1)}}function pk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=x.comparator(t.documentKey,e.documentKey),n!==0?n:q(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qs(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==mk)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Gs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function m0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wd.at=-1;class ye{constructor(e,n){this.comparator=e,this.root=n||ke.EMPTY}insert(e,n){return new ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ke.BLACK,null,null))}remove(e){return new ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Io(this.root,e,this.comparator,!1)}getReverseIterator(){return new Io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Io(this.root,e,this.comparator,!0)}}class Io{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ke.RED,this.left=i!=null?i:ke.EMPTY,this.right=s!=null?s:ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ke(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ke.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}ke.EMPTY=null,ke.RED=!0,ke.BLACK=!1;ke.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ke(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.comparator=e,this.data=new ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Bp(this.data.getIterator())}getIteratorFrom(e){return new Bp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ge(this.comparator);return n.data=e,n}}class Bp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort($e.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new ge($e.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Jr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Pe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Pe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const yk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dn(t){if(Y(!!t),typeof t=="string"){let e=0;const n=yk.exec(t);if(Y(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(t.seconds),nanos:ce(t.nanos)}}function ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?Pe.fromBase64String(t):Pe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function y0(t){const e=t.mapValue.fields.__previous_value__;return g0(e)?y0(e):e}function Es(t){const e=Dn(t.mapValue.fields.__local_write_time__.timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ss{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ss("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ss&&e.projectId===this.projectId&&e.database===this.database}}function yl(t){return t==null}function Pa(t){return t===0&&1/t==-1/0}function wk(t){return typeof t=="number"&&Number.isInteger(t)&&!Pa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?g0(t)?4:Ek(t)?9007199254740991:10:$()}function Lt(t,e){if(t===e)return!0;const n=cr(t);if(n!==cr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Es(t).isEqual(Es(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Dn(r.timestampValue),o=Dn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Zr(r.bytesValue).isEqual(Zr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ce(r.geoPointValue.latitude)===ce(i.geoPointValue.latitude)&&ce(r.geoPointValue.longitude)===ce(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ce(r.integerValue)===ce(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ce(r.doubleValue),o=ce(i.doubleValue);return s===o?Pa(s)===Pa(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Jr(t.arrayValue.values||[],e.arrayValue.values||[],Lt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(zp(s)!==zp(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Lt(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function _s(t,e){return(t.values||[]).find(n=>Lt(n,e))!==void 0}function ei(t,e){if(t===e)return 0;const n=cr(t),r=cr(e);if(n!==r)return q(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return q(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ce(i.integerValue||i.doubleValue),a=ce(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return jp(t.timestampValue,e.timestampValue);case 4:return jp(Es(t),Es(e));case 5:return q(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Zr(i),a=Zr(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=q(o[l],a[l]);if(u!==0)return u}return q(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=q(ce(i.latitude),ce(s.latitude));return o!==0?o:q(ce(i.longitude),ce(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ei(o[l],a[l]);if(u)return u}return q(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ko.mapValue&&s===ko.mapValue)return 0;if(i===ko.mapValue)return 1;if(s===ko.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=q(a[c],u[c]);if(h!==0)return h;const f=ei(o[a[c]],l[u[c]]);if(f!==0)return f}return q(a.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function jp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return q(t,e);const n=Dn(t),r=Dn(e),i=q(n.seconds,r.seconds);return i!==0?i:q(n.nanos,r.nanos)}function br(t){return xc(t)}function xc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Dn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Zr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,x.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=xc(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${xc(r.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function Oc(t){return!!t&&"integerValue"in t}function Ed(t){return!!t&&"arrayValue"in t}function Hp(t){return!!t&&"nullValue"in t}function Kp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bo(t){return!!t&&"mapValue"in t}function Hi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ek(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hi(n)}setAll(e){let n=$e.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Hi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Bo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Lt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Bo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(Hi(this.value))}}function v0(t){const e=[];return hi(t.fields,(n,r)=>{const i=new $e([n]);if(Bo(r)){const s=v0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ce(e,0,b.min(),b.min(),ct.empty(),0)}static newFoundDocument(e,n,r){return new Ce(e,1,n,b.min(),r,0)}static newNoDocument(e,n){return new Ce(e,2,n,b.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Ce(e,3,n,b.min(),ct.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function Wp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Sk(t,e,n,r,i,s,o)}function Sd(t){const e=U(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+br(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),yl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>br(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>br(r)).join(",")),e.ht=n}return e.ht}function _k(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${br(r.value)}`;var r}).join(", ")}]`),yl(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>br(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>br(n)).join(",")),`Target(${e})`}function _d(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Rk(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Lt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gp(t.startAt,e.startAt)&&Gp(t.endAt,e.endAt)}function Lc(t){return x.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Xe extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new Tk(e,n,r):n==="array-contains"?new Ck(e,r):n==="in"?new Nk(e,r):n==="not-in"?new Ak(e,r):n==="array-contains-any"?new Dk(e,r):new Xe(e,n,r)}static lt(e,n,r){return n==="in"?new Ik(e,r):new kk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(ei(n,this.value)):n!==null&&cr(this.value)===cr(n)&&this.ft(ei(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Tk extends Xe{constructor(e,n,r){super(e,n,r),this.key=x.fromName(r.referenceValue)}matches(e){const n=x.comparator(e.key,this.key);return this.ft(n)}}class Ik extends Xe{constructor(e,n){super(e,"in",n),this.keys=w0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kk extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=w0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function w0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>x.fromName(r.referenceValue))}class Ck extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ed(n)&&_s(n.arrayValue,this.value)}}class Nk extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_s(this.value.arrayValue,n)}}class Ak extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(_s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!_s(this.value.arrayValue,n)}}class Dk extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ed(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_s(this.value.arrayValue,r))}}class xa{constructor(e,n){this.position=e,this.inclusive=n}}class Ki{constructor(e,n="asc"){this.field=e,this.dir=n}}function Rk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function qp(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=x.comparator(x.fromName(o.referenceValue),n.key):r=ei(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Lt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function Pk(t,e,n,r,i,s,o,a){return new vl(t,e,n,r,i,s,o,a)}function Td(t){return new vl(t)}function Qp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function xk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ok(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Lk(t){return t.collectionGroup!==null}function Ts(t){const e=U(t);if(e._t===null){e._t=[];const n=Ok(e),r=xk(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Ki(n)),e._t.push(new Ki($e.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ki($e.keyField(),s))}}}return e._t}function Zt(t){const e=U(t);if(!e.wt)if(e.limitType==="F")e.wt=Wp(e.path,e.collectionGroup,Ts(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ts(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ki(s.field,o))}const r=e.endAt?new xa(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new xa(e.startAt.position,e.startAt.inclusive):null;e.wt=Wp(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Mc(t,e,n){return new vl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wl(t,e){return _d(Zt(t),Zt(e))&&t.limitType===e.limitType}function E0(t){return`${Sd(Zt(t))}|lt:${t.limitType}`}function $c(t){return`Query(target=${_k(Zt(t))}; limitType=${t.limitType})`}function Id(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):x.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=qp(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ts(n),r)||n.endAt&&!function(i,s,o){const a=qp(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ts(n),r))}(t,e)}function Mk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function S0(t){return(e,n)=>{let r=!1;for(const i of Ts(t)){const s=$k(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $k(t,e,n){const r=t.field.isKeyField()?x.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ei(a,l):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pa(e)?"-0":e}}function T0(t){return{integerValue:""+t}}function Uk(t,e){return wk(e)?T0(e):_0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(){this._=void 0}}function Fk(t,e,n){return t instanceof Oa?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Is?k0(t,e):t instanceof ks?C0(t,e):function(r,i){const s=I0(r,i),o=Yp(s)+Yp(r.yt);return Oc(s)&&Oc(r.yt)?T0(o):_0(r.It,o)}(t,e)}function Vk(t,e,n){return t instanceof Is?k0(t,e):t instanceof ks?C0(t,e):n}function I0(t,e){return t instanceof La?Oc(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Oa extends El{}class Is extends El{constructor(e){super(),this.elements=e}}function k0(t,e){const n=N0(e);for(const r of t.elements)n.some(i=>Lt(i,r))||n.push(r);return{arrayValue:{values:n}}}class ks extends El{constructor(e){super(),this.elements=e}}function C0(t,e){let n=N0(e);for(const r of t.elements)n=n.filter(i=>!Lt(i,r));return{arrayValue:{values:n}}}class La extends El{constructor(e,n){super(),this.It=e,this.yt=n}}function Yp(t){return ce(t.integerValue||t.doubleValue)}function N0(t){return Ed(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function bk(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Is&&r instanceof Is||n instanceof ks&&r instanceof ks?Jr(n.elements,r.elements,Lt):n instanceof La&&r instanceof La?Lt(n.yt,r.yt):n instanceof Oa&&r instanceof Oa}(t.transform,e.transform)}class zk{constructor(e,n){this.version=e,this.transformResults=n}}class Ht{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ht}static exists(e){return new Ht(void 0,e)}static updateTime(e){return new Ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sl{}function A0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new R0(t.key,Ht.none()):new Qs(t.key,t.data,Ht.none());{const n=t.data,r=ct.empty();let i=new ge($e.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new pr(t.key,r,new Pt(i.toArray()),Ht.none())}}function Bk(t,e,n){t instanceof Qs?function(r,i,s){const o=r.value.clone(),a=Jp(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof pr?function(r,i,s){if(!jo(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Jp(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(D0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Wi(t,e,n,r){return t instanceof Qs?function(i,s,o,a){if(!jo(i.precondition,s))return o;const l=i.value.clone(),u=Zp(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof pr?function(i,s,o,a){if(!jo(i.precondition,s))return o;const l=Zp(i.fieldTransforms,a,s),u=s.data;return u.setAll(D0(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return jo(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function jk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=I0(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function Xp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Jr(n,r,(i,s)=>bk(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qs extends Sl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pr extends Sl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function D0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Jp(t,e,n){const r=new Map;Y(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Vk(o,a,n[i]))}return r}function Zp(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Fk(s,o,e))}return r}class R0 extends Sl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hk extends Sl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,H;function Wk(t){switch(t){default:return $();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function P0(t){if(t===void 0)return Jt("GRPC error has no .code"),_.UNKNOWN;switch(t){case ue.OK:return _.OK;case ue.CANCELLED:return _.CANCELLED;case ue.UNKNOWN:return _.UNKNOWN;case ue.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case ue.INTERNAL:return _.INTERNAL;case ue.UNAVAILABLE:return _.UNAVAILABLE;case ue.UNAUTHENTICATED:return _.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case ue.NOT_FOUND:return _.NOT_FOUND;case ue.ALREADY_EXISTS:return _.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return _.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case ue.ABORTED:return _.ABORTED;case ue.OUT_OF_RANGE:return _.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return _.UNIMPLEMENTED;case ue.DATA_LOSS:return _.DATA_LOSS;default:return $()}}(H=ue||(ue={}))[H.OK=0]="OK",H[H.CANCELLED=1]="CANCELLED",H[H.UNKNOWN=2]="UNKNOWN",H[H.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",H[H.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",H[H.NOT_FOUND=5]="NOT_FOUND",H[H.ALREADY_EXISTS=6]="ALREADY_EXISTS",H[H.PERMISSION_DENIED=7]="PERMISSION_DENIED",H[H.UNAUTHENTICATED=16]="UNAUTHENTICATED",H[H.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",H[H.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",H[H.ABORTED=10]="ABORTED",H[H.OUT_OF_RANGE=11]="OUT_OF_RANGE",H[H.UNIMPLEMENTED=12]="UNIMPLEMENTED",H[H.INTERNAL=13]="INTERNAL",H[H.UNAVAILABLE=14]="UNAVAILABLE",H[H.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return m0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk=new ye(x.comparator);function en(){return qk}const x0=new ye(x.comparator);function Pi(...t){let e=x0;for(const n of t)e=e.insert(n.key,n);return e}function O0(t){let e=x0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qn(){return qi()}function L0(){return qi()}function qi(){return new di(t=>t.toString(),(t,e)=>t.isEqual(e))}const Gk=new ye(x.comparator),Qk=new ge(x.comparator);function B(...t){let e=Qk;for(const n of t)e=e.add(n);return e}const Yk=new ge(q);function M0(){return Yk}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Ys.createSynthesizedTargetChangeForCurrentChange(e,n)),new _l(b.min(),r,M0(),en(),B())}}class Ys{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ys(Pe.EMPTY_BYTE_STRING,n,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class $0{constructor(e,n){this.targetId=e,this.At=n}}class U0{constructor(e,n,r=Pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class em{constructor(){this.Rt=0,this.bt=nm(),this.Pt=Pe.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=B(),n=B(),r=B();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new Ys(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=nm()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Mt(e){this.Vt=!0,this.bt=this.bt.remove(e)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Xk{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=en(),this.qt=tm(),this.Kt=new ge(q)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(Lc(s))if(r===0){const o=new x(s.path);this.jt(n,o,Ce.newNoDocument(o,b.min()))}else Y(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&Lc(a.target)){const l=new x(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Ce.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=B();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new _l(e,n,this.Kt,this.Ut,r);return this.Ut=en(),this.qt=tm(),this.Kt=new ge(q),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Mt(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.zt(e).Ot()}zt(e){let n=this.Lt.get(e);return n||(n=new em,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new ge(q),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new em),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function tm(){return new ye(x.comparator)}function nm(){return new ye(x.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Zk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class eC{constructor(e,n){this.databaseId=e,this.gt=n}}function Ma(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function F0(t,e){return t.gt?e.toBase64():e.toUint8Array()}function tC(t,e){return Ma(t,e.toTimestamp())}function Kt(t){return Y(!!t),b.fromTimestamp(function(e){const n=Dn(e);return new me(n.seconds,n.nanos)}(t))}function kd(t,e){return function(n){return new oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function V0(t){const e=oe.fromString(t);return Y(B0(e)),e}function Uc(t,e){return kd(t.databaseId,e.path)}function wu(t,e){const n=V0(e);if(n.get(1)!==t.databaseId.projectId)throw new O(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new x(b0(n))}function Fc(t,e){return kd(t.databaseId,e)}function nC(t){const e=V0(t);return e.length===4?oe.emptyPath():b0(e)}function Vc(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function b0(t){return Y(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rm(t,e,n){return{name:Uc(t,e),fields:n.value.mapValue.fields}}function rC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(Y(u===void 0||typeof u=="string"),Pe.fromBase64String(u||"")):(Y(u===void 0||u instanceof Uint8Array),Pe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?_.UNKNOWN:P0(l.code);return new O(u,l.message||"")}(o);n=new U0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=wu(t,r.document.name),s=Kt(r.document.updateTime),o=new ct({mapValue:{fields:r.document.fields}}),a=Ce.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ho(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=wu(t,r.document),s=r.readTime?Kt(r.readTime):b.min(),o=Ce.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ho([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=wu(t,r.document),s=r.removedTargetIds||[];n=new Ho([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new Kk(i),o=r.targetId;n=new $0(o,s)}}return n}function iC(t,e){let n;if(e instanceof Qs)n={update:rm(t,e.key,e.value)};else if(e instanceof R0)n={delete:Uc(t,e.key)};else if(e instanceof pr)n={update:rm(t,e.key,e.data),updateMask:pC(e.fieldMask)};else{if(!(e instanceof Hk))return $();n={verify:Uc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Oa)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Is)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ks)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof La)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:tC(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function sC(t,e){return t&&t.length>0?(Y(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Kt(r.updateTime):Kt(i);return s.isEqual(b.min())&&(s=Kt(i)),new zk(s,r.transformResults||[])}(n,e))):[]}function oC(t,e){return{documents:[Fc(t,e.path)]}}function aC(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Fc(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Fc(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(Kp(h.value))return{unaryFilter:{field:yr(h.field),op:"IS_NAN"}};if(Hp(h.value))return{unaryFilter:{field:yr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Kp(h.value))return{unaryFilter:{field:yr(h.field),op:"IS_NOT_NAN"}};if(Hp(h.value))return{unaryFilter:{field:yr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yr(h.field),op:hC(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:yr(c.field),direction:cC(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||yl(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function lC(t){let e=nC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Y(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=z0(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ki(Pr(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,yl(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new xa(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new xa(f,h)}(n.endAt)),Pk(e,i,o,s,a,"F",l,u)}function uC(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function z0(t){return t?t.unaryFilter!==void 0?[fC(t)]:t.fieldFilter!==void 0?[dC(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>z0(e)).reduce((e,n)=>e.concat(n)):$():[]}function cC(t){return Jk[t]}function hC(t){return Zk[t]}function yr(t){return{fieldPath:t.canonicalString()}}function Pr(t){return $e.fromServerFormat(t.fieldPath)}function dC(t){return Xe.create(Pr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(t.fieldFilter.op),t.fieldFilter.value)}function fC(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Pr(t.unaryFilter.field);return Xe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Pr(t.unaryFilter.field);return Xe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Pr(t.unaryFilter.field);return Xe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Pr(t.unaryFilter.field);return Xe.create(i,"!=",{nullValue:"NULL_VALUE"});default:return $()}}function pC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function B0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Bk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Wi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Wi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=L0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=A0(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),B())}isEqual(e){return this.batchId===e.batchId&&Jr(this.mutations,e.mutations,(n,r)=>Xp(n,r))&&Jr(this.baseMutations,e.baseMutations,(n,r)=>Xp(n,r))}}class Cd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Y(e.mutations.length===r.length);let i=Gk;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Cd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r,i,s=b.min(),o=b.min(),a=Pe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.re=e}}function vC(t){const e=lC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Mc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this.Ye=new EC}addToCollectionParentIndex(e,n){return this.Ye.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(An.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(An.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class EC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ge(oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ge(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ti(0)}static vn(){return new ti(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(){this.changes=new di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Wi(r.mutation,i,Pt.empty(),me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,B()).next(()=>r))}getLocalViewOfDocuments(e,n,r=B()){const i=qn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Pi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,B()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=en();const o=qi(),a=qi();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof pr)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),Wi(c.mutation,u,c.mutation.getFieldMask(),me.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new _C(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=qi();let i=new ye((o,a)=>o-a),s=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Pt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||B()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=L0();c.forEach(f=>{if(!s.has(f)){const g=A0(n.get(f),r.get(f));g!==null&&h.set(f,g),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return x.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Lk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(qn());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.getBaseDocument(e,c,h).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,B())).next(c=>({batchId:a,changes:O0(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new x(n)).next(r=>{let i=Pi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Pi();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(u,c){return new vl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Ce.newInvalidDocument(u)))});let o=Pi();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Wi(u.mutation,l,Pt.empty(),me.now()),Id(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):S.resolve(Ce.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Kt(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:vC(r.bundledQuery),readTime:Kt(r.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.overlays=new ye(x.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qn();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=qn(),s=n.length+1,o=new x(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ye((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=qn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=qn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new gC(n,r));let s=this.es.get(n);s===void 0&&(s=B(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.ns=new ge(we.ss),this.rs=new ge(we.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new we(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new we(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new x(new oe([])),r=new we(n,e),i=new we(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new x(new oe([])),r=new we(n,e),i=new we(n,e+1);let s=B();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new we(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class we{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return x.comparator(e.key,n.key)||q(e._s,n._s)}static os(e,n){return q(e._s,n._s)||x.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new ge(we.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new mC(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new we(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new we(n,0),i=new we(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(q);return n.forEach(i=>{const s=new we(i,0),o=new we(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),S.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;x.isDocumentKey(s)||(s=s.child(""));const o=new we(new x(s),0);let a=new ge(q);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Y(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return S.forEach(n.mutations,i=>{const s=new we(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new we(n,0),i=this.gs.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e){this.Es=e,this.docs=new ye(x.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(n))}getEntries(e,n){let r=en();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ce.newInvalidDocument(i))}),S.resolve(r)}getAllFromCollection(e,n,r){let i=en();const s=new x(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||pk(fk(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,i){$()}As(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new AC(this)}getSize(e){return S.resolve(this.size)}}class AC extends SC{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.persistence=e,this.Rs=new di(n=>Sd(n),_d),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Nd,this.targetCount=0,this.vs=ti.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ti(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new wd(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new DC(this),this.indexManager=new wC,this.remoteDocumentCache=function(r){return new NC(r)}(r=>this.referenceDelegate.xs(r)),this.It=new yC(n),this.Ns=new IC(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new kC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new CC(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new PC(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Ms(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return S.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class PC extends gk{constructor(e){super(),this.currentSequenceNumber=e}}class Ad{constructor(e){this.persistence=e,this.Fs=new Nd,this.$s=null}static Bs(e){return new Ad(e)}get Ls(){if(this.$s)return this.$s;throw $()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Ms(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,r=>{const i=x.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,b.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=B(),i=B();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Dd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Mi(e,n,i,r)).next(s=>s||this.Oi(e,n))}ki(e,n){if(Qp(n))return S.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Mc(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=B(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,Mc(n,null,"F")):this.Bi(e,u,n,l)}))})))}Mi(e,n,r,i){return Qp(n)||i.isEqual(b.min())?this.Oi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Oi(e,n):(Vp()<=W.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$c(n)),this.Bi(e,o,n,dk(i,-1)))})}Fi(e,n){let r=new ge(S0(e));return n.forEach((i,s)=>{Id(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return Vp()<=W.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",$c(n)),this.Ni.getDocumentsMatchingQuery(e,n,An.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new ye(q),this.qi=new di(s=>Sd(s),_d),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TC(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function LC(t,e,n,r){return new OC(t,e,n,r)}async function j0(t,e){const n=U(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=B();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function MC(t,e){const n=U(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let f=S.resolve();return h.forEach(g=>{f=f.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);Y(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=B();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function H0(t){const e=U(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function $C(t,e){const n=U(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let g=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Pe.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(y,v,D){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(f,g,c)&&a.push(n.Cs.updateTargetData(s,g))});let l=en(),u=B();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(UC(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(b.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function UC(t,e,n){let r=B(),i=B();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=en();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(b.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function FC(t,e){const n=U(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function VC(t,e){const n=U(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Xn(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function bc(t,e,n){const r=U(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Gs(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function im(t,e,n){const r=U(t);let i=b.min(),s=B();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=U(a),h=c.qi.get(u);return h!==void 0?S.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,Zt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:b.min(),n?s:B())).next(a=>(bC(r,Mk(e),a),{documents:a,Hi:s})))}function bC(t,e,n){let r=b.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class sm{constructor(){this.activeTargetIds=M0()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zC{constructor(){this.Lr=new sm,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new sm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(e,n,r,i,s){const o=this.ao(e,n);R("RestConnection","Sending: ",o,r);const a={};return this.ho(a,i,s),this.lo(e,o,a,r).then(l=>(R("RestConnection","Received: ",l),l),l=>{throw bp("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ci,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=jC[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){return new Promise((s,o)=>{const a=new nk;a.listenOnce(ZI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case vu.NO_ERROR:const u=a.getResponseJson();R("Connection","XHR received:",JSON.stringify(u)),s(u);break;case vu.TIMEOUT:R("Connection",'RPC "'+e+'" timed out'),o(new O(_.DEADLINE_EXCEEDED,"Request time out"));break;case vu.HTTP_ERROR:const c=a.getStatus();if(R("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(g){const y=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(y)>=0?y:_.UNKNOWN}(h.status);o(new O(f,h.message))}else o(new O(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new O(_.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{R("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}_o(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=XI(),o=JI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new tk({})),this.ho(a.initMessageHeaders,n,r),Ay()||Ry()||WE()||Py()||qE()||Dy()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");R("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const f=new HC({Hr:y=>{h?R("Connection","Not sending because WebChannel is closed:",y):(c||(R("Connection","Opening WebChannel transport."),u.open(),c=!0),R("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,v,D)=>{y.listen(v,p=>{try{D(p)}catch(d){setTimeout(()=>{throw d},0)}})};return g(u,To.EventType.OPEN,()=>{h||R("Connection","WebChannel transport opened.")}),g(u,To.EventType.CLOSE,()=>{h||(h=!0,R("Connection","WebChannel transport closed"),f.io())}),g(u,To.EventType.ERROR,y=>{h||(h=!0,bp("Connection","WebChannel transport errored:",y),f.io(new O(_.UNAVAILABLE,"The operation could not be completed")))}),g(u,To.EventType.MESSAGE,y=>{var v;if(!h){const D=y.data[0];Y(!!D);const p=D,d=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(d){R("Connection","WebChannel received error:",d);const m=d.status;let w=function(N){const A=ue[N];if(A!==void 0)return P0(A)}(m),T=d.message;w===void 0&&(w=_.INTERNAL,T="Unknown error status: "+m+" with message "+d.message),h=!0,f.io(new O(w,T)),u.close()}else R("Connection","WebChannel received:",D),f.ro(D)}}),g(o,ek.STAT_EVENT,y=>{y.stat===Up.PROXY?R("Connection","Detected buffering proxy"):y.stat===Up.NOPROXY&&R("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Eu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t){return new eC(t,!0)}class K0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.wo=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.Po=r,this.vo=i,this.Vo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new K0(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Jt(n.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new O(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.xo.Ao(async()=>{this.state=0,this.start()})}Qo(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WC extends W0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}jo(e,n){return this.Vo._o("Listen",e,n)}onMessage(e){this.xo.reset();const n=rC(this.It,e),r=function(i){if(!("targetChange"in i))return b.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?b.min():s.readTime?Kt(s.readTime):b.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Vc(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=Lc(a)?{documents:oC(i,a)}:{query:aC(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=F0(i,s.resumeToken):s.snapshotVersion.compareTo(b.min())>0&&(o.readTime=Ma(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=uC(this.It,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Vc(this.It),n.removeTarget=e,this.Bo(n)}}class qC extends W0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Jo&&this.Xo([])}jo(e,n){return this.Vo._o("Write",e,n)}onMessage(e){if(Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=sC(e.writeResults,e.commitTime),r=Kt(e.commitTime);return this.listener.Zo(r,n)}return Y(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Vc(this.It),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>iC(this.It,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.Vo=r,this.It=i,this.nu=!1}su(){if(this.nu)throw new O(_.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.Vo.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(_.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.Vo.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(_.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class QC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Jt(n),this.ou=!1):R("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.qr(o=>{r.enqueueAndForget(async()=>{mr(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=U(a);l._u.add(4),await Xs(l),l.gu.set("Unknown"),l._u.delete(4),await Il(l)}(this))})}),this.gu=new QC(r,i)}}async function Il(t){if(mr(t))for(const e of t.wu)await e(!0)}async function Xs(t){for(const e of t.wu)await e(!1)}function q0(t,e){const n=U(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),xd(n)?Pd(n):fi(n).ko()&&Rd(n,e))}function G0(t,e){const n=U(t),r=fi(n);n.du.delete(e),r.ko()&&Q0(n,e),n.du.size===0&&(r.ko()?r.Fo():mr(n)&&n.gu.set("Unknown"))}function Rd(t,e){t.yu.Ot(e.targetId),fi(t).zo(e)}function Q0(t,e){t.yu.Ot(e),fi(t).Ho(e)}function Pd(t){t.yu=new Xk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),fi(t).start(),t.gu.uu()}function xd(t){return mr(t)&&!fi(t).No()&&t.du.size>0}function mr(t){return U(t)._u.size===0}function Y0(t){t.yu=void 0}async function XC(t){t.du.forEach((e,n)=>{Rd(t,e)})}async function JC(t,e){Y0(t),xd(t)?(t.gu.hu(e),Pd(t)):t.gu.set("Unknown")}async function ZC(t,e,n){if(t.gu.set("Online"),e instanceof U0&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await $a(t,r)}else if(e instanceof Ho?t.yu.Gt(e):e instanceof $0?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(b.min()))try{const r=await H0(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Pe.EMPTY_BYTE_STRING,l.snapshotVersion)),Q0(i,a);const u=new Xn(l.target,a,1,l.sequenceNumber);Rd(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await $a(t,r)}}async function $a(t,e,n){if(!Gs(e))throw e;t._u.add(1),await Xs(t),t.gu.set("Offline"),n||(n=()=>H0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Il(t)})}function X0(t,e){return e().catch(n=>$a(t,n,e))}async function kl(t){const e=U(t),n=Rn(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;eN(e);)try{const i=await FC(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,tN(e,i)}catch(i){await $a(e,i)}J0(e)&&Z0(e)}function eN(t){return mr(t)&&t.fu.length<10}function tN(t,e){t.fu.push(e);const n=Rn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function J0(t){return mr(t)&&!Rn(t).No()&&t.fu.length>0}function Z0(t){Rn(t).start()}async function nN(t){Rn(t).eu()}async function rN(t){const e=Rn(t);for(const n of t.fu)e.Xo(n.mutations)}async function iN(t,e,n){const r=t.fu.shift(),i=Cd.from(r,e,n);await X0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await kl(t)}async function sN(t,e){e&&Rn(t).Yo&&await async function(n,r){if(i=r.code,Wk(i)&&i!==_.ABORTED){const s=n.fu.shift();Rn(n).Oo(),await X0(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await kl(n)}var i}(t,e),J0(t)&&Z0(t)}async function am(t,e){const n=U(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=mr(n);n._u.add(3),await Xs(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Il(n)}async function oN(t,e){const n=U(t);e?(n._u.delete(2),await Il(n)):e||(n._u.add(2),await Xs(n),n.gu.set("Unknown"))}function fi(t){return t.pu||(t.pu=function(e,n,r){const i=U(e);return i.su(),new WC(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:XC.bind(null,t),Zr:JC.bind(null,t),Wo:ZC.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),xd(t)?Pd(t):t.gu.set("Unknown")):(await t.pu.stop(),Y0(t))})),t.pu}function Rn(t){return t.Iu||(t.Iu=function(e,n,r){const i=U(e);return i.su(),new qC(n,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:nN.bind(null,t),Zr:sN.bind(null,t),tu:rN.bind(null,t),Zo:iN.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Oo(),await kl(t)):(await t.Iu.stop(),t.fu.length>0&&(R("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Od(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ld(t,e){if(Jt("AsyncQueue",`${e}: ${t}`),Gs(t))return new O(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||x.comparator(n.key,r.key):(n,r)=>x.comparator(n.key,r.key),this.keyedMap=Pi(),this.sortedSet=new ye(this.comparator)}static emptySet(e){return new zr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof zr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new zr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(){this.Tu=new ye(x.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):$():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ni{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new ni(e,n,zr.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(){this.Au=void 0,this.listeners=[]}}class lN{constructor(){this.queries=new di(e=>E0(e),wl),this.onlineState="Unknown",this.Ru=new Set}}async function uN(t,e){const n=U(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new aN),i)try{s.Au=await n.onListen(r)}catch(o){const a=Ld(o,`Initialization of query '${$c(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Md(n)}async function cN(t,e){const n=U(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function hN(t,e){const n=U(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&Md(n)}function dN(t,e,n){const r=U(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Md(t){t.Ru.forEach(e=>{e.next()})}class fN{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ni(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ni.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e){this.key=e}}class tw{constructor(e){this.key=e}}class pN{constructor(e,n){this.query=e,this.Lu=n,this.Uu=null,this.current=!1,this.qu=B(),this.mutatedKeys=B(),this.Ku=S0(e),this.Gu=new zr(this.Ku)}get Qu(){return this.Lu}ju(e,n){const r=n?n.Wu:new lm,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),g=Id(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let D=!1;f&&g?f.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),D=!0):this.zu(f,g)||(r.track({type:2,doc:g}),D=!0,(l&&this.Ku(g,l)>0||u&&this.Ku(g,u)<0)&&(a=!0)):!f&&g?(r.track({type:0,doc:g}),D=!0):f&&!g&&(r.track({type:1,doc:f}),D=!0,(l||u)&&(a=!0)),D&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,Wu:r,$i:a,mutatedKeys:s}}zu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.Wu.Eu();s.sort((u,c)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return g(h)-g(f)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.qu.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new ni(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1),Yu:o}:{Yu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new lm,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.qu;this.qu=B(),this.Gu.forEach(r=>{this.Xu(r.key)&&(this.qu=this.qu.add(r.key))});const n=[];return e.forEach(r=>{this.qu.has(r)||n.push(new tw(r))}),this.qu.forEach(r=>{e.has(r)||n.push(new ew(r))}),n}Zu(e){this.Lu=e.Hi,this.qu=B();const n=this.ju(e.documents);return this.applyChanges(n,!0)}tc(){return ni.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.Uu===0)}}class mN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class gN{constructor(e){this.key=e,this.ec=!1}}class yN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new di(a=>E0(a),wl),this.ic=new Map,this.rc=new Set,this.oc=new ye(x.comparator),this.uc=new Map,this.cc=new Nd,this.ac={},this.hc=new Map,this.lc=ti.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function vN(t,e){const n=AN(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await VC(n.localStore,Zt(e));n.isPrimaryClient&&q0(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await wN(n,e,r,a==="current")}return i}async function wN(t,e,n,r){t.dc=(c,h,f)=>async function(g,y,v,D){let p=y.view.ju(v);p.$i&&(p=await im(g.localStore,y.query,!1).then(({documents:w})=>y.view.ju(w,p)));const d=D&&D.targetChanges.get(y.targetId),m=y.view.applyChanges(p,g.isPrimaryClient,d);return cm(g,y.targetId,m.Yu),m.snapshot}(t,c,h,f);const i=await im(t.localStore,e,!0),s=new pN(e,i.Hi),o=s.ju(i.documents),a=Ys.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);cm(t,n,l.Yu);const u=new mN(e,n,s);return t.sc.set(e,u),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),l.snapshot}async function EN(t,e){const n=U(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!wl(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await bc(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),G0(n.remoteStore,r.targetId),zc(n,r.targetId)}).catch(qs)):(zc(n,r.targetId),await bc(n.localStore,r.targetId,!0))}async function SN(t,e,n){const r=DN(t);try{const i=await function(s,o){const a=U(s),l=me.now(),u=o.reduce((f,g)=>f.add(g.key),B());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=en(),y=B();return a.Gi.getEntries(f,u).next(v=>{g=v,g.forEach((D,p)=>{p.isValidDocument()||(y=y.add(D))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(v=>{c=v;const D=[];for(const p of o){const d=jk(p,c.get(p.key).overlayedDocument);d!=null&&D.push(new pr(p.key,d,v0(d.value.mapValue),Ht.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,D,o)}).next(v=>{h=v;const D=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(f,v.batchId,D)})}).then(()=>({batchId:h.batchId,changes:O0(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new ye(q)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await Js(r,i.changes),await kl(r.remoteStore)}catch(i){const s=Ld(i,"Failed to persist write");n.reject(s)}}async function nw(t,e){const n=U(t);try{const r=await $C(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Y(o.ec):i.removedDocuments.size>0&&(Y(o.ec),o.ec=!1))}),await Js(n,r,e)}catch(r){await qs(r)}}function um(t,e,n){const r=U(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=U(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&Md(a)}(r.eventManager,e),i.length&&r.nc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _N(t,e,n){const r=U(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new ye(x.comparator);o=o.insert(s,Ce.newNoDocument(s,b.min()));const a=B().add(s),l=new _l(b.min(),new Map,new ge(q),o,a);await nw(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),$d(r)}else await bc(r.localStore,e,!1).then(()=>zc(r,e,n)).catch(qs)}async function TN(t,e){const n=U(t),r=e.batch.batchId;try{const i=await MC(n.localStore,e);iw(n,r,null),rw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Js(n,i)}catch(i){await qs(i)}}async function IN(t,e,n){const r=U(t);try{const i=await function(s,o){const a=U(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Y(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);iw(r,e,n),rw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Js(r,i)}catch(i){await qs(i)}}function rw(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function iw(t,e,n){const r=U(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function zc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc._c(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach(r=>{t.cc.containsKey(r)||sw(t,r)})}function sw(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(G0(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),$d(t))}function cm(t,e,n){for(const r of n)r instanceof ew?(t.cc.addReference(r.key,e),kN(t,r)):r instanceof tw?(R("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||sw(t,r.key)):$()}function kN(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(R("SyncEngine","New document in limbo: "+n),t.rc.add(r),$d(t))}function $d(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new x(oe.fromString(e)),r=t.lc.next();t.uc.set(r,new gN(n)),t.oc=t.oc.insert(n,r),q0(t.remoteStore,new Xn(Zt(Td(n.path)),r,2,wd.at))}}async function Js(t,e,n){const r=U(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=Dd.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.Wo(i),await async function(a,l){const u=U(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(l,h=>S.forEach(h.Si,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>S.forEach(h.Di,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!Gs(c))throw c;R("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.Ui.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.Ui=u.Ui.insert(h,y)}}}(r.localStore,s))}async function CN(t,e){const n=U(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await j0(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new O(_.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Js(n,r.ji)}}function NN(t,e){const n=U(t),r=n.uc.get(e);if(r&&r.ec)return B().add(r.key);{let i=B();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function AN(t){const e=U(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=nw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_N.bind(null,e),e.nc.Wo=hN.bind(null,e.eventManager),e.nc._c=dN.bind(null,e.eventManager),e}function DN(t){const e=U(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IN.bind(null,e),e}class RN{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Tl(e.databaseInfo.databaseId),this.sharedClientState=this.mc(e),this.persistence=this.gc(e),await this.persistence.start(),this.localStore=this.yc(e),this.gcScheduler=this.Ic(e,this.localStore),this.indexBackfillerScheduler=this.Tc(e,this.localStore)}Ic(e,n){return null}Tc(e,n){return null}yc(e){return LC(this.persistence,new xC,e.initialUser,this.It)}gc(e){return new RC(Ad.Bs,this.It)}mc(e){return new zC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class PN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>um(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CN.bind(null,this.syncEngine),await oN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lN}createDatastore(e){const n=Tl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new KC(i));var i;return function(s,o,a,l){return new GC(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>um(this.syncEngine,a,0),o=om.C()?new om:new BC,new YC(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new yN(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=U(e);R("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Xs(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ac(this.observer.next,e)}error(e){this.observer.error?this.Ac(this.observer.error,e):Jt("Uncaught Error in snapshot listener:",e)}Rc(){this.muted=!0}Ac(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ge.UNAUTHENTICATED,this.clientId=p0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ld(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function LN(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await j0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function MN(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $N(t);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>am(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>am(e.remoteStore,s)),t.onlineComponents=e}async function $N(t){return t.offlineComponents||(R("FirestoreClient","Using default OfflineComponentProvider"),await LN(t,new RN)),t.offlineComponents}async function ow(t){return t.onlineComponents||(R("FirestoreClient","Using default OnlineComponentProvider"),await MN(t,new PN)),t.onlineComponents}function UN(t){return ow(t).then(e=>e.syncEngine)}async function FN(t){const e=await ow(t),n=e.eventManager;return n.onListen=vN.bind(null,e.syncEngine),n.onUnlisten=EN.bind(null,e.syncEngine),n}function VN(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new xN({next:h=>{s.enqueueAndForget(()=>cN(i,c));const f=h.docs.has(o);!f&&h.fromCache?l.reject(new O(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?l.reject(new O(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new fN(Td(o.path),u,{includeMetadataChanges:!0,Nu:!0});return uN(i,c)}(await FN(t),t.asyncQueue,e,n,r)),r.promise}const hm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bN(t,e,n){if(!n)throw new O(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zN(t,e,n,r){if(e===!0&&r===!0)throw new O(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dm(t){if(!x.isDocumentKey(t))throw new O(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ud(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function Ua(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ud(t);throw new O(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new O(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,zN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ik;switch(n.type){case"gapi":const r=n.client;return new ak(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new O(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=hm.get(e);n&&(R("ComponentProvider","Removing Datastore"),hm.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}}class Fd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fd(this.firestore,e,this._query)}}class Cs extends Fd{constructor(e,n,r){super(e,n,Td(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new x(e))}withConverter(e){return new Cs(this.firestore,e,this._path)}}function pm(t,e,...n){if(t=xt(t),arguments.length===1&&(e=p0.R()),bN("doc","path",e),t instanceof aw){const r=oe.fromString(e,...n);return dm(r),new ft(t,null,new x(r))}{if(!(t instanceof ft||t instanceof Cs))throw new O(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return dm(r),new ft(t.firestore,t instanceof Cs?t.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new K0(this,"async_queue_retry"),this.jc=()=>{const n=Eu();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.bo()};const e=Eu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Wc(),this.zc(e)}enterRestrictedMode(e){if(!this.Lc){this.Lc=!0,this.Gc=e||!1;const n=Eu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Wc(),this.Lc)return new Promise(()=>{});const n=new kn;return this.zc(()=>this.Lc&&this.Gc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Bc.push(e),this.Hc()))}async Hc(){if(this.Bc.length!==0){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(e){if(!Gs(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Bc.length>0&&this.xo.Ao(()=>this.Hc())}}zc(e){const n=this.$c.then(()=>(this.Kc=!0,e().catch(r=>{this.qc=r,this.Kc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Jt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Kc=!1,r))));return this.$c=n,n}enqueueAfterDelay(e,n,r){this.Wc(),this.Qc.indexOf(e)>-1&&(n=0);const i=Od.createAndSchedule(this,e,n,r,s=>this.Jc(s));return this.Uc.push(i),i}Wc(){this.qc&&$()}verifyOperationInProgress(){}async Yc(){let e;do e=this.$c,await e;while(e!==this.$c)}Xc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}Zc(e){return this.Yc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Yc()})}ta(e){this.Qc.push(e)}Jc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Vd extends aw{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new BN,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uw(this),this._firestoreClient.terminate()}}function jN(t,e){const n=typeof t=="object"?t:My(),r=typeof t=="string"?t:e||"(default)";return Fh(n,"firestore").getImmediate({identifier:r})}function lw(t){return t._firestoreClient||uw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uw(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new vk(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ON(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ri(Pe.fromBase64String(e))}catch(n){throw new O(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ri(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=/^__.*__$/;class KN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qs(e,this.data,n,this.fieldTransforms)}}function hw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Bd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ea(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get na(){return this.settings.na}sa(e){return new Bd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.oa(e),i}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.sa({path:r,ra:!1});return i.ea(),i}ca(e){return this.sa({path:void 0,ra:!0})}aa(e){return Fa(e,this.settings.methodName,this.settings.ha||!1,this.path,this.settings.la)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ea(){if(this.path)for(let e=0;e<this.path.length;e++)this.oa(this.path.get(e))}oa(e){if(e.length===0)throw this.aa("Document fields must not be empty");if(hw(this.na)&&HN.test(e))throw this.aa('Document fields cannot begin and end with "__"')}}class WN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Tl(e)}fa(e,n,r,i=!1){return new Bd({na:e,methodName:n,la:r,path:$e.emptyPath(),ra:!1,ha:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function qN(t){const e=t._freezeSettings(),n=Tl(t._databaseId);return new WN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function GN(t,e,n,r,i,s={}){const o=t.fa(s.merge||s.mergeFields?2:0,e,n,i);mw("Data must be an object, but it was:",o,r);const a=fw(r,o);let l,u;if(s.merge)l=new Pt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=QN(e,h,n);if(!o.contains(f))throw new O(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);XN(c,f)||c.push(f)}l=new Pt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new KN(new ct(a),l,u)}function dw(t,e){if(pw(t=xt(t)))return mw("Unsupported field value:",e,t),fw(t,e);if(t instanceof cw)return function(n,r){if(!hw(r.na))throw r.aa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.aa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ra&&e.na!==4)throw e.aa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=dw(o,r.ca(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=xt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Uk(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=me.fromDate(n);return{timestampValue:Ma(r.It,i)}}if(n instanceof me){const i=new me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ma(r.It,i)}}if(n instanceof zd)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ri)return{bytesValue:F0(r.It,n._byteString)};if(n instanceof ft){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.aa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:kd(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.aa(`Unsupported field value: ${Ud(n)}`)}(t,e)}function fw(t,e){const n={};return m0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(t,(r,i)=>{const s=dw(i,e.ia(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function pw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof zd||t instanceof ri||t instanceof ft||t instanceof cw)}function mw(t,e,n){if(!pw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ud(n);throw r==="an object"?e.aa(t+" a custom object"):e.aa(t+" "+r)}}function QN(t,e,n){if((e=xt(e))instanceof bd)return e._internalPath;if(typeof e=="string")return gw(t,e);throw Fa("Field path arguments must be of type string or ",t,!1,void 0,n)}const YN=new RegExp("[~\\*/\\[\\]]");function gw(t,e,n){if(e.search(YN)>=0)throw Fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bd(...e.split("."))._internalPath}catch{throw Fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fa(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(_.INVALID_ARGUMENT,a+t+l)}function XN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JN extends yw{data(){return super.data()}}function vw(t,e){return typeof e=="string"?gw(t,e):e instanceof bd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ww extends yw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new eA(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(vw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class eA extends ww{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{convertValue(e,n="none"){switch(cr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){const r={};return hi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new zd(ce(e.latitude),ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=y0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Es(e));default:return null}}convertTimestamp(e){const n=Dn(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=oe.fromString(e);Y(B0(r));const i=new Ss(r.get(1),r.get(3)),s=new x(r.popFirst(5));return i.isEqual(n)||Jt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(t){t=Ua(t,ft);const e=Ua(t.firestore,Vd);return VN(lw(e),t._key).then(n=>aA(e,t,n))}class iA extends tA{constructor(e){super(),this.firestore=e}convertBytes(e){return new ri(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function sA(t,e,n){t=Ua(t,ft);const r=Ua(t.firestore,Vd),i=nA(t.converter,e,n);return oA(r,[GN(qN(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ht.none())])}function oA(t,e){return function(n,r){const i=new kn;return n.asyncQueue.enqueueAndForget(async()=>SN(await UN(n),r,i)),i.promise}(lw(t),e)}function aA(t,e,n){const r=n.docs.get(e._key),i=new iA(t);return new ww(t,i,e._key,r,new ZN(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ci=n})(Ls),Qr(new rr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Vd(new sk(n.getProvider("auth-internal")),new uk(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new O(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ss(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),In(Fp,"3.4.15",t),In(Fp,"3.4.15","esm2017")})();var lA="firebase",uA="9.9.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(lA,uA,"app");const cA={apiKey:"AIzaSyBFzvwuzT1KjUcCFQSW5KnFhEPDx9CKI7s",authDomain:"lunch-e91b2.firebaseapp.com",projectId:"lunch-e91b2",storageBucket:"lunch-e91b2.appspot.com",messagingSenderId:"833990154478",appId:"1:833990154478:web:33344ea7b0cb469fba7bff",measurementId:"G-PLWGLTQZ3X"},Ew=ZS(cA),mm="/assets/food.410ab55f.jpeg";var Cl={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hA=ze.exports,dA=Symbol.for("react.element"),fA=Symbol.for("react.fragment"),pA=Object.prototype.hasOwnProperty,mA=hA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gA={key:!0,ref:!0,__self:!0,__source:!0};function Sw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pA.call(e,r)&&!gA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:dA,type:t,key:s,ref:o,props:i,_owner:mA.current}}Nl.Fragment=fA;Nl.jsx=Sw;Nl.jsxs=Sw;(function(t){t.exports=Nl})(Cl);const yA=Cl.exports.Fragment,be=Cl.exports.jsx,ki=Cl.exports.jsxs,vA=t=>{const[e,n]=ze.exports.useState({loading:!0,show:!1}),[r,i]=ze.exports.useState({yes:!1,no:!1}),[s,o]=ze.exports.useState(0),a=jN(Ew),[l,u]=ze.exports.useState([]),[c,h]=ze.exports.useState("Submit"),f=async()=>{const v=pm(a,"food","WYjtCaQCSxEKZN6eqlVP"),D=await rA(v);if(D.exists()){const p=D.data().names;o(p.length-1),p.includes(t.name)?n({loading:!1,show:!1}):(n({loading:!1,show:!0}),u(D.data().names))}else console.log("No such document!")};ze.exports.useEffect(()=>{f()},[]);const g=v=>{i(v?{yes:!0,no:!1}:{yes:!1,no:!0})},y=async()=>{h("Saving..."),await sA(pm(a,"food","WYjtCaQCSxEKZN6eqlVP"),{names:[...l,t.name]},{merge:!0}).then(v=>{n({loading:!1,show:!1}),h("Done")}).catch(v=>{console.log(v.message)})};return ki("div",{className:"foodPage",children:[e.loading?be("img",{src:mm}):e.show?ki(yA,{children:[ki("div",{className:"foodPageHeading",children:[t.name,","]}),be("div",{className:"foodPageHeading",children:"Want lunch for Tomorrow?"}),ki("div",{className:"foodButtonContainer",children:[be("button",{className:"foodButton",disabled:r.yes,onClick:()=>g(!0),children:"Yes"}),r.yes&&be("button",{className:"foodButton",disabled:r.no,onClick:()=>g(!1),children:"No"})]}),r.yes&&be("button",{className:"foodButton",onClick:()=>y(),children:c}),be("div",{style:{display:"flex",flexDirection:"column"},children:l.map(v=>be("div",{children:v}))})]}):ki("div",{className:"foodPageHeading",children:[t.name,", Order have been placed",be("img",{src:mm})]}),be("button",{className:"foodButton",style:{marginTop:"1rem"},onClick:()=>{nv(Sa())},children:"Logout"})]})};const wA=()=>{const t=ze.exports.useCallback(()=>{const e=new Ut,n=Sa();cT(n,e).then(r=>{}).catch(()=>{})},[]);return be("button",{onClick:()=>t(),children:"Login with aftershoot Email"})},EA=()=>{const[t,e]=ze.exports.useState(!1),[n,r]=ze.exports.useState(""),[i,s]=ze.exports.useState(null);return ze.exports.useEffect(()=>{const o=Sa(Ew);b_(o,a=>{if(a){const l=a.email,u=l==null?void 0:l.substring(l.lastIndexOf("@")+1);s(a.displayName),u==="aftershoot.com"?(e(!0),r(a.uid)):(alert("Login with aftershoot email"),nv(Sa()))}else e(!1)})},[]),be("div",{className:"App",children:t?be(vA,{userid:n,name:i}):be(wA,{})})};Su.createRoot(document.getElementById("root")).render(be(Vw.StrictMode,{children:be(EA,{})}));
