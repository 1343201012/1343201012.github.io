System.register([],(function(e,t){"use strict";return{execute:function(){var n=document.createElement("style");function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.textContent="",document.head.appendChild(n),e({a:Nr,c:kr,d:ln,o:Ir,u:eo});const i={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),l=e=>e.startsWith("onUpdate:"),u=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,p=(e,t)=>d.call(e,t),f=Array.isArray,m=e=>"[object Map]"===E(e),g=e=>"[object Set]"===E(e),v=e=>"function"==typeof e,y=e=>"string"==typeof e,w=e=>"symbol"==typeof e,b=e=>null!==e&&"object"==typeof e,_=e=>(b(e)||v(e))&&v(e.then)&&v(e.catch),I=Object.prototype.toString,E=e=>I.call(e),S=e=>E(e).slice(8,-1),T=e=>"[object Object]"===E(e),k=e=>y(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,C=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},P=/-(\w)/g,A=O((e=>e.replace(P,((e,t)=>t?t.toUpperCase():"")))),R=/\B([A-Z])/g,N=O((e=>e.replace(R,"-$1").toLowerCase())),D=O((e=>e.charAt(0).toUpperCase()+e.slice(1))),x=O((e=>e?`on${D(e)}`:"")),L=(e,t)=>!Object.is(e,t),M=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},U=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},j=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let F;const $=()=>F||(F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function V(e){if(f(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=y(r)?W(r):V(r);if(i)for(const e in i)t[e]=i[e]}return t}if(y(e)||b(e))return e}const B=/;(?![^(]*\))/g,H=/:([^]+)/,z=/\/\*[^]*?\*\//g;function W(e){const t={};return e.replace(z,"").split(B).forEach((e=>{if(e){const n=e.split(H);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function q(e){let t="";if(y(e))t=e;else if(f(e))for(let n=0;n<e.length;n++){const r=q(e[n]);r&&(t+=r+" ")}else if(b(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const K=r("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function G(e){return!!e||""===e}let J;class X{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=J,!e&&J&&(this.index=(J.scopes||(J.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=J;try{return J=this,e()}finally{J=t}}}on(){J=this}off(){J=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}const Y=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Q=e=>(e.w&ne)>0,Z=e=>(e.n&ne)>0,ee=new WeakMap;let te=0,ne=1;const re=30;let ie;const se=Symbol(""),oe=Symbol("");class ae{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,function(e,t=J){t&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();let e=ie,t=le;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ie,ie=this,le=!0,ne=1<<++te,te<=re?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ne})(this):ce(this),this.fn()}finally{te<=re&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Q(i)&&!Z(i)?i.delete(e):t[n++]=i,i.w&=~ne,i.n&=~ne}t.length=n}})(this),ne=1<<--te,ie=this.parent,le=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ie===this?this.deferStop=!0:this.active&&(ce(this),this.onStop&&this.onStop(),this.active=!1)}}function ce(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let le=!0;const ue=[];function he(){ue.push(le),le=!1}function de(){const e=ue.pop();le=void 0===e||e}function pe(e,t,n){if(le&&ie){let t=ee.get(e);t||ee.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=Y()),fe(r)}}function fe(e,t){let n=!1;te<=re?Z(e)||(e.n|=ne,n=!Q(e)):n=!e.has(ie),n&&(e.add(ie),ie.deps.push(e))}function me(e,t,n,r,i,s){const o=ee.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&f(e)){const e=Number(r);o.forEach(((t,n)=>{("length"===n||!w(n)&&n>=e)&&a.push(t)}))}else switch(void 0!==n&&a.push(o.get(n)),t){case"add":f(e)?k(n)&&a.push(o.get("length")):(a.push(o.get(se)),m(e)&&a.push(o.get(oe)));break;case"delete":f(e)||(a.push(o.get(se)),m(e)&&a.push(o.get(oe)));break;case"set":m(e)&&a.push(o.get(se))}if(1===a.length)a[0]&&ge(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);ge(Y(e))}}function ge(e,t){const n=f(e)?e:[...e];for(const r of n)r.computed&&ve(r);for(const r of n)r.computed||ve(r)}function ve(e,t){(e!==ie||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ye=r("__proto__,__v_isRef,__isVue"),we=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(w)),be=_e();function _e(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=ct(this);for(let t=0,i=this.length;t<i;t++)pe(n,0,t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(ct)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){he();const n=ct(this)[t].apply(this,e);return de(),n}})),e}function Ie(e){const t=ct(this);return pe(t,0,e),t.hasOwnProperty(e)}class Ee{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,n){const r=this._isReadonly,i=this._shallow;if("__v_isReactive"===t)return!r;if("__v_isReadonly"===t)return r;if("__v_isShallow"===t)return i;if("__v_raw"===t&&n===(r?i?Ze:Qe:i?Ye:Xe).get(e))return e;const s=f(e);if(!r){if(s&&p(be,t))return Reflect.get(be,t,n);if("hasOwnProperty"===t)return Ie}const o=Reflect.get(e,t,n);return(w(t)?we.has(t):ye(t))?o:(r||pe(e,0,t),i?o:ft(o)?s&&k(t)?o:o.value:b(o)?r?nt(o):et(o):o)}}class Se extends Ee{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t];if(st(i)&&ft(i)&&!ft(n))return!1;if(!this._shallow&&(ot(n)||st(n)||(i=ct(i),n=ct(n)),!f(e)&&ft(i)&&!ft(n)))return i.value=n,!0;const s=f(e)&&k(t)?Number(t)<e.length:p(e,t),o=Reflect.set(e,t,n,r);return e===ct(r)&&(s?L(n,i)&&me(e,"set",t,n):me(e,"add",t,n)),o}deleteProperty(e,t){const n=p(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&me(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return w(t)&&we.has(t)||pe(e,0,t),n}ownKeys(e){return pe(e,0,f(e)?"length":se),Reflect.ownKeys(e)}}class Te extends Ee{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ke=new Se,Ce=new Te,Oe=new Se(!0),Pe=e=>e,Ae=e=>Reflect.getPrototypeOf(e);function Re(e,t,n=!1,r=!1){const i=ct(e=e.__v_raw),s=ct(t);n||(L(t,s)&&pe(i,0,t),pe(i,0,s));const{has:o}=Ae(i),a=r?Pe:n?ht:ut;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Ne(e,t=!1){const n=this.__v_raw,r=ct(n),i=ct(e);return t||(L(e,i)&&pe(r,0,e),pe(r,0,i)),e===i?n.has(e):n.has(e)||n.has(i)}function De(e,t=!1){return e=e.__v_raw,!t&&pe(ct(e),0,se),Reflect.get(e,"size",e)}function xe(e){e=ct(e);const t=ct(this);return Ae(t).has.call(t,e)||(t.add(e),me(t,"add",e,e)),this}function Le(e,t){t=ct(t);const n=ct(this),{has:r,get:i}=Ae(n);let s=r.call(n,e);s||(e=ct(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?L(t,o)&&me(n,"set",e,t):me(n,"add",e,t),this}function Me(e){const t=ct(this),{has:n,get:r}=Ae(t);let i=n.call(t,e);i||(e=ct(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&me(t,"delete",e,void 0),s}function Ue(){const e=ct(this),t=0!==e.size,n=e.clear();return t&&me(e,"clear",void 0,void 0),n}function je(e,t){return function(n,r){const i=this,s=i.__v_raw,o=ct(s),a=t?Pe:e?ht:ut;return!e&&pe(o,0,se),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function Fe(e,t,n){return function(...r){const i=this.__v_raw,s=ct(i),o=m(s),a="entries"===e||e===Symbol.iterator&&o,c="keys"===e&&o,l=i[e](...r),u=n?Pe:t?ht:ut;return!t&&pe(s,0,c?oe:se),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function $e(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function Ve(){const e={get(e){return Re(this,e)},get size(){return De(this)},has:Ne,add:xe,set:Le,delete:Me,clear:Ue,forEach:je(!1,!1)},t={get(e){return Re(this,e,!1,!0)},get size(){return De(this)},has:Ne,add:xe,set:Le,delete:Me,clear:Ue,forEach:je(!1,!0)},n={get(e){return Re(this,e,!0)},get size(){return De(this,!0)},has(e){return Ne.call(this,e,!0)},add:$e("add"),set:$e("set"),delete:$e("delete"),clear:$e("clear"),forEach:je(!0,!1)},r={get(e){return Re(this,e,!0,!0)},get size(){return De(this,!0)},has(e){return Ne.call(this,e,!0)},add:$e("add"),set:$e("set"),delete:$e("delete"),clear:$e("clear"),forEach:je(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((i=>{e[i]=Fe(i,!1,!1),n[i]=Fe(i,!0,!1),t[i]=Fe(i,!1,!0),r[i]=Fe(i,!0,!0)})),[e,n,t,r]}const[Be,He,ze,We]=Ve();function qe(e,t){const n=t?e?We:ze:e?He:Be;return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(p(n,r)&&r in t?n:t,r,i)}const Ke={get:qe(!1,!1)},Ge={get:qe(!1,!0)},Je={get:qe(!0,!1)},Xe=new WeakMap,Ye=new WeakMap,Qe=new WeakMap,Ze=new WeakMap;function et(e){return st(e)?e:rt(e,!1,ke,Ke,Xe)}function tt(e){return rt(e,!1,Oe,Ge,Ye)}function nt(e){return rt(e,!0,Ce,Je,Qe)}function rt(e,t,n,r,i){if(!b(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=(a=e).__v_skip||!Object.isExtensible(a)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(S(a));var a;if(0===o)return e;const c=new Proxy(e,2===o?r:n);return i.set(e,c),c}function it(e){return st(e)?it(e.__v_raw):!(!e||!e.__v_isReactive)}function st(e){return!(!e||!e.__v_isReadonly)}function ot(e){return!(!e||!e.__v_isShallow)}function at(e){return it(e)||st(e)}function ct(e){const t=e&&e.__v_raw;return t?ct(t):e}function lt(e){return U(e,"__v_skip",!0),e}const ut=e=>b(e)?et(e):e,ht=e=>b(e)?nt(e):e;function dt(e){le&&ie&&fe((e=ct(e)).dep||(e.dep=Y()))}function pt(e,t){const n=(e=ct(e)).dep;n&&ge(n)}function ft(e){return!(!e||!0!==e.__v_isRef)}function mt(e,t){return ft(e)?e:new gt(e,t)}class gt{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ct(e),this._value=t?e:ut(e)}get value(){return dt(this),this._value}set value(e){const t=this.__v_isShallow||ot(e)||st(e);e=t?e:ct(e),L(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ut(e),pt(this))}}function vt(e){return ft(e)?e.value:e}const yt={get:(e,t,n)=>vt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return ft(i)&&!ft(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function wt(e){return it(e)?e:new Proxy(e,yt)}class bt{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ae(e,(()=>{this._dirty||(this._dirty=!0,pt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=ct(this);return dt(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function _t(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Et(s,t,n)}return i}function It(e,t,n,r){if(v(e)){const i=_t(e,t,n,r);return i&&_(i)&&i.catch((e=>{Et(e,t,n)})),i}const i=[];for(let s=0;s<e.length;s++)i.push(It(e[s],t,n,r));return i}function Et(e,t,n,r=!0){if(t&&t.vnode,t){let r=t.parent;const i=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void _t(o,null,10,[e,i,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let St=!1,Tt=!1;const kt=[];let Ct=0;const Ot=[];let Pt=null,At=0;const Rt=Promise.resolve();let Nt=null;function Dt(e){const t=Nt||Rt;return e?t.then(this?e.bind(this):e):t}function xt(e){kt.length&&kt.includes(e,St&&e.allowRecurse?Ct+1:Ct)||(null==e.id?kt.push(e):kt.splice(function(e){let t=Ct+1,n=kt.length;for(;t<n;){const r=t+n>>>1,i=kt[r],s=jt(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}(e.id),0,e),Lt())}function Lt(){St||Tt||(Tt=!0,Nt=Rt.then($t))}function Mt(e,t=(St?Ct+1:0)){for(;t<kt.length;t++){const e=kt[t];e&&e.pre&&(kt.splice(t,1),t--,e())}}function Ut(e){if(Ot.length){const e=[...new Set(Ot)];if(Ot.length=0,Pt)return void Pt.push(...e);for(Pt=e,Pt.sort(((e,t)=>jt(e)-jt(t))),At=0;At<Pt.length;At++)Pt[At]();Pt=null,At=0}}const jt=e=>null==e.id?1/0:e.id,Ft=(e,t)=>{const n=jt(e)-jt(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function $t(e){Tt=!1,St=!0,kt.sort(Ft);try{for(Ct=0;Ct<kt.length;Ct++){const e=kt[Ct];e&&!1!==e.active&&_t(e,null,14)}}finally{Ct=0,kt.length=0,Ut(),St=!1,Nt=null,(kt.length||Ot.length)&&$t()}}function Vt(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i;let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in r){const e=`${"modelValue"===a?"model":a}Modifiers`,{number:t,trim:o}=r[e]||i;o&&(s=n.map((e=>y(e)?e.trim():e))),t&&(s=n.map(j))}let c,l=r[c=x(t)]||r[c=x(A(t))];!l&&o&&(l=r[c=x(N(t))]),l&&It(l,e,6,s);const u=r[c+"Once"];if(u){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,It(u,e,6,s)}}function Bt(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let o={},a=!1;if(!v(e)){const r=e=>{const n=Bt(e,t,!0);n&&(a=!0,u(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||a?(f(s)?s.forEach((e=>o[e]=null)):u(o,s),b(e)&&r.set(e,o),o):(b(e)&&r.set(e,null),null)}function Ht(e,t){return!(!e||!c(t))&&(t=t.slice(2).replace(/Once$/,""),p(e,t[0].toLowerCase()+t.slice(1))||p(e,N(t))||p(e,t))}let zt=null,Wt=null;function qt(e){const t=zt;return zt=e,Wt=e&&e.type.__scopeId||null,t}function Kt(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:h,renderCache:d,data:p,setupState:f,ctx:m,inheritAttrs:g}=e;let v,y;const w=qt(e);try{if(4&n.shapeFlag){const e=i||r,t=e;v=Mr(h.call(t,e,d,s,f,p,m)),y=c}else{const e=t;v=Mr(e.length>1?e(s,{attrs:c,slots:a,emit:u}):e(s,null)),y=t.props?c:Gt(c)}}catch(_){br.length=0,Et(_,e,1),v=Dr(yr)}let b=v;if(y&&!1!==g){const e=Object.keys(y),{shapeFlag:t}=b;e.length&&7&t&&(o&&e.some(l)&&(y=Jt(y,o)),b=xr(b,y))}return n.dirs&&(b=xr(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),v=b,qt(w),v}const Gt=e=>{let t;for(const n in e)("class"===n||"style"===n||c(n))&&((t||(t={}))[n]=e[n]);return t},Jt=(e,t)=>{const n={};for(const r in e)l(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Xt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Ht(n,s))return!0}return!1}const Yt="components";function Qt(e,t){return function(e,t,n=!0,r=!1){const i=zt||zr;if(i){const n=i.type;if(e===Yt){const e=function(e,t=!0){return v(e)?e.displayName||e.name:e.name||t&&e.__name}(n,!1);if(e&&(e===t||e===A(t)||e===D(A(t))))return n}const s=en(i[e]||n[e],t)||en(i.appContext[e],t);return!s&&r?n:s}}(Yt,e,!0,t)||e}const Zt=Symbol.for("v-ndc");function en(e,t){return e&&(e[t]||e[A(t)]||e[D(A(t))])}const tn={};function nn(e,t,n){return rn(e,t,n)}function rn(e,t,{immediate:n,deep:r,flush:s,onTrack:a,onTrigger:c}=i){var l;const u=J===(null==(l=zr)?void 0:l.scope)?zr:null;let d,p,m=!1,g=!1;if(ft(e)?(d=()=>e.value,m=ot(e)):it(e)?(d=()=>e,r=!0):f(e)?(g=!0,m=e.some((e=>it(e)||ot(e))),d=()=>e.map((e=>ft(e)?e.value:it(e)?an(e):v(e)?_t(e,u,2):void 0))):d=v(e)?t?()=>_t(e,u,2):()=>{if(!u||!u.isUnmounted)return p&&p(),It(e,u,3,[w])}:o,t&&r){const e=d;d=()=>an(e())}let y,w=e=>{p=E.onStop=()=>{_t(e,u,4),p=E.onStop=void 0}};if(Xr){if(w=o,t?n&&It(t,u,3,[d(),g?[]:void 0,w]):d(),"sync"!==s)return o;{const e=ri();y=e.__watcherHandles||(e.__watcherHandles=[])}}let b=g?new Array(e.length).fill(tn):tn;const _=()=>{if(E.active)if(t){const e=E.run();(r||m||(g?e.some(((e,t)=>L(e,b[t]))):L(e,b)))&&(p&&p(),It(t,u,3,[e,b===tn?void 0:g&&b[0]===tn?[]:b,w]),b=e)}else E.run()};let I;_.allowRecurse=!!t,"sync"===s?I=_:"post"===s?I=()=>dr(_,u&&u.suspense):(_.pre=!0,u&&(_.id=u.uid),I=()=>xt(_));const E=new ae(d,I);t?n?_():b=E.run():"post"===s?dr(E.run.bind(E),u&&u.suspense):E.run();const S=()=>{E.stop(),u&&u.scope&&h(u.scope.effects,E)};return y&&y.push(S),S}function sn(e,t,n){const r=this.proxy,i=y(e)?e.includes(".")?on(r,e):()=>r[e]:e.bind(r,r);let s;v(t)?s=t:(s=t.handler,n=t);const o=zr;qr(this);const a=rn(i,s.bind(r),n);return o?qr(o):Kr(),a}function on(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function an(e,t){if(!b(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),ft(e))an(e.value,t);else if(f(e))for(let n=0;n<e.length;n++)an(e[n],t);else if(g(e)||m(e))e.forEach((e=>{an(e,t)}));else if(T(e))for(const n in e)an(e[n],t);return e}function cn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(he(),It(c,n,8,[e.el,a,e,t]),de())}}/*! #__NO_SIDE_EFFECTS__ */function ln(e,t){return v(e)?(()=>u({name:e.name},t,{setup:e}))():e}const un=e=>!!e.type.__asyncLoader,hn=e=>e.type.__isKeepAlive;function dn(e,t){fn(e,"a",t)}function pn(e,t){fn(e,"da",t)}function fn(e,t,n=zr){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(gn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)hn(e.parent.vnode)&&mn(r,t,n,e),e=e.parent}}function mn(e,t,n,r){const i=gn(t,e,r,!0);En((()=>{h(r[t],i)}),n)}function gn(e,t,n=zr,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;he(),qr(n);const i=It(t,n,e,r);return Kr(),de(),i});return r?i.unshift(s):i.push(s),s}}const vn=e=>(t,n=zr)=>(!Xr||"sp"===e)&&gn(e,((...e)=>t(...e)),n),yn=vn("bm"),wn=vn("m"),bn=vn("bu"),_n=vn("u"),In=vn("bum"),En=vn("um"),Sn=vn("sp"),Tn=vn("rtg"),kn=vn("rtc");function Cn(e,t=zr){gn("ec",e,t)}const On=e=>e?Gr(e)?Zr(e)||e.proxy:On(e.parent):null,Pn=u(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>On(e.parent),$root:e=>On(e.root),$emit:e=>e.emit,$options:e=>Un(e),$forceUpdate:e=>e.f||(e.f=()=>xt(e.update)),$nextTick:e=>e.n||(e.n=Dt.bind(e.proxy)),$watch:e=>sn.bind(e)}),An=(e,t)=>e!==i&&!e.__isScriptSetup&&p(e,t),Rn={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:a,type:c,appContext:l}=e;let u;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(An(r,t))return a[t]=1,r[t];if(s!==i&&p(s,t))return a[t]=2,s[t];if((u=e.propsOptions[0])&&p(u,t))return a[t]=3,o[t];if(n!==i&&p(n,t))return a[t]=4,n[t];Dn&&(a[t]=0)}}const h=Pn[t];let d,f;return h?("$attrs"===t&&pe(e,0,t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==i&&p(n,t)?(a[t]=4,n[t]):(f=l.config.globalProperties,p(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return An(s,t)?(s[t]=n,!0):r!==i&&p(r,t)?(r[t]=n,!0):!(p(e.props,t)||"$"===t[0]&&t.slice(1)in e||(o[t]=n,0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i&&p(e,a)||An(t,a)||(c=o[0])&&p(c,a)||p(r,a)||p(Pn,a)||p(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:p(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Nn(e){return f(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Dn=!0;function xn(e){const t=Un(e),n=e.proxy,r=e.ctx;Dn=!1,t.beforeCreate&&Ln(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:c,provide:l,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:w,beforeDestroy:_,beforeUnmount:I,destroyed:E,unmounted:S,render:T,renderTracked:k,renderTriggered:C,errorCaptured:O,serverPrefetch:P,expose:A,inheritAttrs:R,components:N,directives:D,filters:x}=t;if(u&&function(e,t,n=o){f(e)&&(e=Vn(e));for(const r in e){const n=e[r];let i;i=b(n)?"default"in n?Xn(n.from||r,n.default,!0):Xn(n.from||r):Xn(n),ft(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[r]=i}}(u,r,null),a)for(const o in a){const e=a[o];v(e)&&(r[o]=e.bind(n))}if(i){const t=i.call(n,n);b(t)&&(e.data=et(t))}if(Dn=!0,s)for(const f in s){const e=s[f],t=v(e)?e.bind(n,n):v(e.get)?e.get.bind(n,n):o,i=!v(e)&&v(e.set)?e.set.bind(n):o,a=ei({get:t,set:i});Object.defineProperty(r,f,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const o in c)Mn(c[o],r,n,o);if(l){const e=v(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{Jn(t,e[t])}))}function L(e,t){f(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(h&&Ln(h,e,"c"),L(yn,d),L(wn,p),L(bn,m),L(_n,g),L(dn,y),L(pn,w),L(Cn,O),L(kn,k),L(Tn,C),L(In,I),L(En,S),L(Sn,P),f(A))if(A.length){const t=e.exposed||(e.exposed={});A.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===o&&(e.render=T),null!=R&&(e.inheritAttrs=R),N&&(e.components=N),D&&(e.directives=D)}function Ln(e,t,n){It(f(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Mn(e,t,n,r){const i=r.includes(".")?on(n,r):()=>n[r];if(y(e)){const n=t[e];v(n)&&nn(i,n)}else if(v(e))nn(i,e.bind(n));else if(b(e))if(f(e))e.forEach((e=>Mn(e,t,n,r)));else{const r=v(e.handler)?e.handler.bind(n):t[e.handler];v(r)&&nn(i,r,e)}}function Un(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>jn(c,e,o,!0))),jn(c,t,o)):c=t,b(t)&&s.set(t,c),c}function jn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&jn(e,s,n,!0),i&&i.forEach((t=>jn(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Fn[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Fn={data:$n,props:zn,emits:zn,methods:Hn,computed:Hn,beforeCreate:Bn,created:Bn,beforeMount:Bn,mounted:Bn,beforeUpdate:Bn,updated:Bn,beforeDestroy:Bn,beforeUnmount:Bn,destroyed:Bn,unmounted:Bn,activated:Bn,deactivated:Bn,errorCaptured:Bn,serverPrefetch:Bn,components:Hn,directives:Hn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=u(Object.create(null),e);for(const r in t)n[r]=Bn(e[r],t[r]);return n},provide:$n,inject:function(e,t){return Hn(Vn(e),Vn(t))}};function $n(e,t){return t?e?function(){return u(v(e)?e.call(this,this):e,v(t)?t.call(this,this):t)}:t:e}function Vn(e){if(f(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Bn(e,t){return e?[...new Set([].concat(e,t))]:t}function Hn(e,t){return e?u(Object.create(null),e,t):t}function zn(e,t){return e?f(e)&&f(t)?[...new Set([...e,...t])]:u(Object.create(null),Nn(e),Nn(null!=t?t:{})):t}function Wn(){return{app:null,config:{isNativeTag:a,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qn=0;function Kn(e,t){return function(n,r=null){v(n)||(n=u({},n)),null==r||b(r)||(r=null);const i=Wn(),s=new WeakSet;let o=!1;const a=i.app={_uid:qn++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:ii,get config(){return i.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&v(e.install)?(s.add(e),e.install(a,...t)):v(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(i.mixins.includes(e)||i.mixins.push(e),a),component:(e,t)=>t?(i.components[e]=t,a):i.components[e],directive:(e,t)=>t?(i.directives[e]=t,a):i.directives[e],mount(s,c,l){if(!o){const u=Dr(n,r);return u.appContext=i,c&&t?t(u,s):e(u,s,l),o=!0,a._container=s,s.__vue_app__=a,Zr(u.component)||u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(i.provides[e]=t,a),runWithContext(e){Gn=a;try{return e()}finally{Gn=null}}};return a}}let Gn=null;function Jn(e,t){if(zr){let n=zr.provides;const r=zr.parent&&zr.parent.provides;r===n&&(n=zr.provides=Object.create(r)),n[e]=t}}function Xn(e,t,n=!1){const r=zr||zt;if(r||Gn){const i=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Gn._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&v(t)?t.call(r&&r.proxy):t}}function Yn(e,t,n,r){const[s,o]=e.propsOptions;let a,c=!1;if(t)for(let i in t){if(C(i))continue;const l=t[i];let u;s&&p(s,u=A(i))?o&&o.includes(u)?(a||(a={}))[u]=l:n[u]=l:Ht(e.emitsOptions,i)||i in r&&l===r[i]||(r[i]=l,c=!0)}if(o){const t=ct(n),r=a||i;for(let i=0;i<o.length;i++){const a=o[i];n[a]=Qn(s,t,a,r[a],e,!p(r,a))}}return c}function Qn(e,t,n,r,i,s){const o=e[n];if(null!=o){const e=p(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&!o.skipFactory&&v(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(qr(i),r=s[n]=e.call(null,t),Kr())}else r=e}o[0]&&(s&&!e?r=!1:!o[1]||""!==r&&r!==N(n)||(r=!0))}return r}function Zn(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const a=e.props,c={},l=[];let h=!1;if(!v(e)){const r=e=>{h=!0;const[n,r]=Zn(e,t,!0);u(c,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!h)return b(e)&&r.set(e,s),s;if(f(a))for(let s=0;s<a.length;s++){const e=A(a[s]);er(e)&&(c[e]=i)}else if(a)for(const i in a){const e=A(i);if(er(e)){const t=a[i],n=c[e]=f(t)||v(t)?{type:t}:u({},t);if(n){const t=rr(Boolean,n.type),r=rr(String,n.type);n[0]=t>-1,n[1]=r<0||t<r,(t>-1||p(n,"default"))&&l.push(e)}}}const d=[c,l];return b(e)&&r.set(e,d),d}function er(e){return"$"!==e[0]}function tr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function nr(e,t){return tr(e)===tr(t)}function rr(e,t){return f(t)?t.findIndex((t=>nr(t,e))):v(t)&&nr(t,e)?0:-1}const ir=e=>"_"===e[0]||"$stable"===e,sr=e=>f(e)?e.map(Mr):[Mr(e)],or=(e,t,n)=>{if(t._n)return t;const r=function(e,t=zt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Sr(-1);const i=qt(t);let s;try{s=e(...n)}finally{qt(i),r._d&&Sr(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}(((...e)=>sr(t(...e))),n);return r._c=!1,r},ar=(e,t,n)=>{const r=e._ctx;for(const i in e){if(ir(i))continue;const n=e[i];if(v(n))t[i]=or(0,n,r);else if(null!=n){const e=sr(n);t[i]=()=>e}}},cr=(e,t)=>{const n=sr(t);e.slots.default=()=>n},lr=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=ct(t),U(t,"_",n)):ar(t,e.slots={})}else e.slots={},t&&cr(e,t);U(e.slots,Pr,1)},ur=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:(u(s,t),n||1!==e||delete s._):(o=!t.$stable,ar(t,s)),a=t}else t&&(cr(e,t),a={default:1});if(o)for(const i in s)ir(i)||null!=a[i]||delete s[i]};function hr(e,t,n,r,s=!1){if(f(e))return void e.forEach(((e,i)=>hr(e,t&&(f(t)?t[i]:t),n,r,s)));if(un(r)&&!s)return;const o=4&r.shapeFlag?Zr(r.component)||r.component.proxy:r.el,a=s?null:o,{i:c,r:l}=e,u=t&&t.r,d=c.refs===i?c.refs={}:c.refs,m=c.setupState;if(null!=u&&u!==l&&(y(u)?(d[u]=null,p(m,u)&&(m[u]=null)):ft(u)&&(u.value=null)),v(l))_t(l,c,12,[a,d]);else{const t=y(l),r=ft(l);if(t||r){const i=()=>{if(e.f){const n=t?p(m,l)?m[l]:d[l]:l.value;s?f(n)&&h(n,o):f(n)?n.includes(o)||n.push(o):t?(d[l]=[o],p(m,l)&&(m[l]=d[l])):(l.value=[o],e.k&&(d[e.k]=l.value))}else t?(d[l]=a,p(m,l)&&(m[l]=a)):r&&(l.value=a,e.k&&(d[e.k]=a))};a?(i.id=-1,dr(i,n)):i()}}}const dr=function(e,t){var n;t&&t.pendingBranch?f(e)?t.effects.push(...e):t.effects.push(e):(f(n=e)?Ot.push(...n):Pt&&Pt.includes(n,n.allowRecurse?At+1:At)||Ot.push(n),Lt())};function pr(e){return function(e,t){$().__VUE__=!0;const{insert:n,remove:r,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:m,setScopeId:g=o,insertStaticContent:v}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Or(e,t)&&(r=ee(e),G(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case vr:w(e,t,n,r);break;case yr:b(e,t,n,r);break;case wr:null==e&&I(t,n,r,o);break;case gr:L(e,t,n,r,i,s,o,a,c);break;default:1&h?T(e,t,n,r,i,s,o,a,c):6&h?j(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,ne)}null!=u&&i&&hr(u,e&&e.ref,s,t||e,!t)},w=(e,t,r,i)=>{if(null==e)n(t.el=l(t.children),r,i);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,r,i)=>{null==e?n(t.el=u(t.children||""),r,i):t.el=e.el},I=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},r,i)=>{let s;for(;e&&e!==t;)s=m(e),n(e,r,i),e=s;n(t,r,i)},S=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=m(e),r(e),e=n;r(t)},T=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?k(t,n,r,i,s,o,a,c):R(e,t,i,s,o,a,c)},k=(e,t,r,i,s,o,l,u)=>{let h,p;const{type:f,props:m,shapeFlag:g,transition:v,dirs:y}=e;if(h=e.el=c(e.type,o,m&&m.is,m),8&g?d(h,e.children):16&g&&P(e.children,h,null,i,s,o&&"foreignObject"!==f,l,u),y&&cn(e,null,i,"created"),O(h,e,e.scopeId,l,i),m){for(const t in m)"value"===t||C(t)||a(h,t,null,m[t],o,e.children,i,s,Z);"value"in m&&a(h,"value",null,m.value),(p=m.onVnodeBeforeMount)&&Fr(p,i,e)}y&&cn(e,null,i,"beforeMount");const w=function(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}(s,v);w&&v.beforeEnter(h),n(h,t,r),((p=m&&m.onVnodeMounted)||w||y)&&dr((()=>{p&&Fr(p,i,e),w&&v.enter(h),y&&cn(e,null,i,"mounted")}),s)},O=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i&&t===i.subTree){const t=i.vnode;O(e,t,t.scopeId,t.slotScopeIds,i.parent)}},P=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?Ur(e[l]):Mr(e[l]);y(null,c,t,n,r,i,s,o,a)}},R=(e,t,n,r,s,o,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:p}=t;u|=16&e.patchFlag;const f=e.props||i,m=t.props||i;let g;n&&fr(n,!1),(g=m.onVnodeBeforeUpdate)&&Fr(g,n,t,e),p&&cn(t,e,n,"beforeUpdate"),n&&fr(n,!0);const v=s&&"foreignObject"!==t.type;if(h?D(e.dynamicChildren,h,l,n,r,v,o):c||z(e,t,l,null,n,r,v,o,!1),u>0){if(16&u)x(l,t,f,m,n,r,s);else if(2&u&&f.class!==m.class&&a(l,"class",null,m.class,s),4&u&&a(l,"style",f.style,m.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=f[o],u=m[o];u===c&&"value"!==o||a(l,o,c,u,s,e.children,n,r,Z)}}1&u&&e.children!==t.children&&d(l,t.children)}else c||null!=h||x(l,t,f,m,n,r,s);((g=m.onVnodeUpdated)||p)&&dr((()=>{g&&Fr(g,n,t,e),p&&cn(t,e,n,"updated")}),r)},D=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===gr||!Or(c,l)||70&c.shapeFlag)?f(c.el):n;y(c,l,u,null,r,i,s,o,!0)}},x=(e,t,n,r,s,o,c)=>{if(n!==r){if(n!==i)for(const i in n)C(i)||i in r||a(e,i,n[i],null,c,t.children,s,o,Z);for(const i in r){if(C(i))continue;const l=r[i],u=n[i];l!==u&&"value"!==i&&a(e,i,u,l,c,t.children,s,o,Z)}"value"in r&&a(e,"value",n.value,r.value)}},L=(e,t,r,i,s,o,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(n(h,r,i),n(d,r,i),P(t.children,r,d,s,o,a,c,u)):p>0&&64&p&&f&&e.dynamicChildren?(D(e.dynamicChildren,f,r,s,o,a,c),(null!=t.key||s&&t===s.subTree)&&mr(e,t,!0)):z(e,t,r,d,s,o,a,c,u)},j=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):F(t,n,r,i,s,o,c):V(e,t,c)},F=(e,t,n,r,s,o,a)=>{const c=e.component=function(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||$r,o={uid:Hr++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new X(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zn(r,s),emitsOptions:Bt(r,s),emit:null,emitted:null,propsDefaults:i,inheritAttrs:r.inheritAttrs,ctx:i,data:i,props:i,attrs:i,slots:i,refs:i,setupState:i,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Vt.bind(null,o),e.ce&&e.ce(o),o}(e,r,s);if(hn(e)&&(c.ctx.renderer=ne),function(e,t=!1){Xr=t;const{props:n,children:r}=e.vnode,i=Gr(e);(function(e,t,n,r=!1){const i={},s={};U(s,Pr,1),e.propsDefaults=Object.create(null),Yn(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:tt(i):e.type.props?e.props=i:e.props=s,e.attrs=s})(e,n,i,t),lr(e,r);i&&function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=lt(new Proxy(e.ctx,Rn));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return function(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get:(t,n)=>(pe(e,0,"$attrs"),t[n])}))}(e)},slots:e.slots,emit:e.emit,expose:t}}(e):null;qr(e),he();const i=_t(r,e,0,[e.props,n]);if(de(),Kr(),_(i)){if(i.then(Kr,Kr),t)return i.then((n=>{Yr(e,n,t)})).catch((t=>{Et(t,e,0)}));e.asyncDep=i}else Yr(e,i,t)}else Qr(e,t)}(e,t);Xr=!1}(c),c.asyncDep){if(s&&s.registerDep(c,B),!e.el){const e=c.subTree=Dr(yr);b(null,e,t,n)}}else B(c,e,t,n,s,o,a)},V=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Xt(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Xt(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Ht(l,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void H(r,t,n);r.next=t,function(e){const t=kt.indexOf(e);t>Ct&&kt.splice(t,1)}(r.update),r.update()}else t.el=e.el,r.vnode=t},B=(e,t,n,r,i,s,o)=>{const a=()=>{if(e.isMounted){let t,{next:n,bu:r,u:a,parent:c,vnode:l}=e,u=n;fr(e,!1),n?(n.el=l.el,H(e,n,o)):n=l,r&&M(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Fr(t,c,n,l),fr(e,!0);const h=Kt(e),d=e.subTree;e.subTree=h,y(d,h,f(d.el),ee(d),e,i,s),n.el=h.el,null===u&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,h.el),a&&dr(a,i),(t=n.props&&n.props.onVnodeUpdated)&&dr((()=>Fr(t,c,n,l)),i)}else{let o;const{el:a,props:c}=t,{bm:l,m:u,parent:h}=e,d=un(t);if(fr(e,!1),l&&M(l),!d&&(o=c&&c.onVnodeBeforeMount)&&Fr(o,h,t),fr(e,!0),a&&ie){const n=()=>{e.subTree=Kt(e),ie(a,e.subTree,e,i,null)};d?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=Kt(e);y(null,o,n,r,e,i,s),t.el=o.el}if(u&&dr(u,i),!d&&(o=c&&c.onVnodeMounted)){const e=t;dr((()=>Fr(o,h,e)),i)}(256&t.shapeFlag||h&&un(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&dr(e.a,i),e.isMounted=!0,t=n=r=null}},c=e.effect=new ae(a,(()=>xt(l)),e.scope),l=e.update=()=>c.run();l.id=e.uid,fr(e,!0),l()},H=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=ct(i),[c]=e.propsOptions;let l=!1;if(!(r||o>0)||16&o){let r;Yn(e,t,i,s)&&(l=!0);for(const s in a)t&&(p(t,s)||(r=N(s))!==s&&p(t,r))||(c?!n||void 0===n[s]&&void 0===n[r]||(i[s]=Qn(c,a,s,void 0,e,!0)):delete i[s]);if(s!==a)for(const e in s)t&&p(t,e)||(delete s[e],l=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Ht(e.emitsOptions,o))continue;const u=t[o];if(c)if(p(s,o))u!==s[o]&&(s[o]=u,l=!0);else{const t=A(o);i[t]=Qn(c,a,t,u,e,!1)}else u!==s[o]&&(s[o]=u,l=!0)}}l&&me(e,"set","$attrs")}(e,t.props,r,n),ur(e,t.children,n),he(),Mt(),de()},z=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void q(l,h,n,r,i,s,o,a,c);if(256&p)return void W(l,h,n,r,i,s,o,a,c)}8&f?(16&u&&Z(l,i,s),h!==l&&d(n,h)):16&u?16&f?q(l,h,n,r,i,s,o,a,c):Z(l,i,s,!0):(8&u&&d(n,""),16&f&&P(h,n,r,i,s,o,a,c))},W=(e,t,n,r,i,o,a,c,l)=>{t=t||s;const u=(e=e||s).length,h=t.length,d=Math.min(u,h);let p;for(p=0;p<d;p++){const r=t[p]=l?Ur(t[p]):Mr(t[p]);y(e[p],r,n,null,i,o,a,c,l)}u>h?Z(e,i,o,!0,!1,d):P(t,n,r,i,o,a,c,l,d)},q=(e,t,n,r,i,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,p=h-1;for(;u<=d&&u<=p;){const r=e[u],s=t[u]=l?Ur(t[u]):Mr(t[u]);if(!Or(r,s))break;y(r,s,n,null,i,o,a,c,l),u++}for(;u<=d&&u<=p;){const r=e[d],s=t[p]=l?Ur(t[p]):Mr(t[p]);if(!Or(r,s))break;y(r,s,n,null,i,o,a,c,l),d--,p--}if(u>d){if(u<=p){const e=p+1,s=e<h?t[e].el:r;for(;u<=p;)y(null,t[u]=l?Ur(t[u]):Mr(t[u]),n,s,i,o,a,c,l),u++}}else if(u>p)for(;u<=d;)G(e[u],i,o,!0),u++;else{const f=u,m=u,g=new Map;for(u=m;u<=p;u++){const e=t[u]=l?Ur(t[u]):Mr(t[u]);null!=e.key&&g.set(e.key,u)}let v,w=0;const b=p-m+1;let _=!1,I=0;const E=new Array(b);for(u=0;u<b;u++)E[u]=0;for(u=f;u<=d;u++){const r=e[u];if(w>=b){G(r,i,o,!0);continue}let s;if(null!=r.key)s=g.get(r.key);else for(v=m;v<=p;v++)if(0===E[v-m]&&Or(r,t[v])){s=v;break}void 0===s?G(r,i,o,!0):(E[s-m]=u+1,s>=I?I=s:_=!0,y(r,t[s],n,null,i,o,a,c,l),w++)}const S=_?function(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}(E):s;for(v=S.length-1,u=b-1;u>=0;u--){const e=m+u,s=t[e],d=e+1<h?t[e+1].el:r;0===E[u]?y(null,s,n,d,i,o,a,c,l):_&&(v<0||u!==S[v]?K(s,n,d,2):v--)}}},K=(e,t,r,i,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)K(e.component.subTree,t,r,i);else if(128&u)e.suspense.move(t,r,i);else if(64&u)a.move(e,t,r,ne);else if(a!==gr)if(a!==wr)if(2!==i&&1&u&&c)if(0===i)c.beforeEnter(o),n(o,t,r),dr((()=>c.enter(o)),s);else{const{leave:e,delayLeave:i,afterLeave:s}=c,a=()=>n(o,t,r),l=()=>{e(o,(()=>{a(),s&&s()}))};i?i(o,a,l):l()}else n(o,t,r);else E(e,t,r);else{n(o,t,r);for(let e=0;e<l.length;e++)K(l[e],t,r,i);n(e.anchor,t,r)}},G=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&hr(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!un(e);let m;if(f&&(m=o&&o.onVnodeBeforeUnmount)&&Fr(m,t,e),6&u)Q(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&cn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,ne,r):l&&(s!==gr||h>0&&64&h)?Z(l,t,n,!1,!0):(s===gr&&384&h||!i&&16&u)&&Z(c,t,n),r&&J(e)}(f&&(m=o&&o.onVnodeUnmounted)||p)&&dr((()=>{m&&Fr(m,t,e),p&&cn(e,null,t,"unmounted")}),n)},J=e=>{const{type:t,el:n,anchor:i,transition:s}=e;if(t===gr)return void Y(n,i);if(t===wr)return void S(e);const o=()=>{r(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},Y=(e,t)=>{let n;for(;e!==t;)n=m(e),r(e),e=n;r(t)},Q=(e,t,n)=>{const{bum:r,scope:i,update:s,subTree:o,um:a}=e;r&&M(r),i.stop(),s&&(s.active=!1,G(o,e,t,n)),a&&dr(a,t),dr((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Z=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)G(e[o],t,n,r,i)},ee=e=>6&e.shapeFlag?ee(e.component.subTree):128&e.shapeFlag?e.suspense.next():m(e.anchor||e.el),te=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),Mt(),Ut(),t._vnode=e},ne={p:y,um:G,m:K,r:J,mt:F,mc:P,pc:z,pbc:D,n:ee,o:e};let re,ie;return t&&([re,ie]=t(ne)),{render:te,hydrate:re,createApp:Kn(te,re)}}(e)}function fr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function mr(e,t,n=!1){const r=e.children,i=t.children;if(f(r)&&f(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=Ur(i[s]),t.el=e.el),n||mr(e,t)),t.type===vr&&(t.el=e.el)}}const gr=e("F",Symbol.for("v-fgt")),vr=Symbol.for("v-txt"),yr=Symbol.for("v-cmt"),wr=Symbol.for("v-stc"),br=[];let _r=null;function Ir(e=!1){br.push(_r=e?null:[])}let Er=1;function Sr(e){Er+=e}function Tr(e){return e.dynamicChildren=Er>0?_r||s:null,br.pop(),_r=br[br.length-1]||null,Er>0&&_r&&_r.push(e),e}function kr(e,t,n,r,i,s){return Tr(Nr(e,t,n,r,i,s,!0))}function Cr(e){return!!e&&!0===e.__v_isVNode}function Or(e,t){return e.type===t.type&&e.key===t.key}const Pr="__vInternal",Ar=({key:e})=>null!=e?e:null,Rr=({ref:e,ref_key:t,ref_for:n})=>("number"==typeof e&&(e=""+e),null!=e?y(e)||ft(e)||v(e)?{i:zt,r:e,k:t,f:!!n}:e:null);function Nr(e,t=null,n=null,r=0,i=null,s=(e===gr?0:1),o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ar(t),ref:t&&Rr(t),scopeId:Wt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:zt};return a?(jr(c,n),128&s&&e.normalize(c)):n&&(c.shapeFlag|=y(n)?8:16),Er>0&&!o&&_r&&(c.patchFlag>0||6&s)&&32!==c.patchFlag&&_r.push(c),c}const Dr=function(e,t=null,n=null,r=0,i=null,s=!1){if(e&&e!==Zt||(e=yr),Cr(e)){const r=xr(e,t,!0);return n&&jr(r,n),Er>0&&!s&&_r&&(6&r.shapeFlag?_r[_r.indexOf(e)]=r:_r.push(r)),r.patchFlag|=-2,r}var o;if(v(o=e)&&"__vccOpts"in o&&(e=e.__vccOpts),t){t=function(e){return e?at(e)||Pr in e?u({},e):e:null}(t);let{class:e,style:n}=t;e&&!y(e)&&(t.class=q(e)),b(n)&&(at(n)&&!f(n)&&(n=u({},n)),t.style=V(n))}const a=y(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:b(e)?4:v(e)?2:0;return Nr(e,t,n,r,i,a,s,!0)};function xr(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=e,a=t?function(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=q([t.class,r.class]));else if("style"===e)t.style=V([t.style,r.style]);else if(c(e)){const n=t[e],i=r[e];!i||n===i||f(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Ar(a),ref:t&&t.ref?n&&i?f(i)?i.concat(Rr(t)):[i,Rr(t)]:Rr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==gr?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&xr(e.ssContent),ssFallback:e.ssFallback&&xr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Lr(e=" ",t=0){return Dr(vr,null,e,t)}function Mr(e){return null==e||"boolean"==typeof e?Dr(yr):f(e)?Dr(gr,null,e.slice()):"object"==typeof e?Ur(e):Dr(vr,null,String(e))}function Ur(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:xr(e)}function jr(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(f(t))n=16;else if("object"==typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),jr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Pr in t?3===r&&zt&&(1===zt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=zt}}else v(t)?(t={default:t,_ctx:zt},n=32):(t=String(t),64&r?(n=16,t=[Lr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Fr(e,t,n,r=null){It(e,t,7,[n,r])}const $r=Wn();let Vr,Br,Hr=0,zr=null,Wr="__VUE_INSTANCE_SETTERS__";(Br=$()[Wr])||(Br=$()[Wr]=[]),Br.push((e=>zr=e)),Vr=e=>{Br.length>1?Br.forEach((t=>t(e))):Br[0](e)};const qr=e=>{Vr(e),e.scope.on()},Kr=()=>{zr&&zr.scope.off(),Vr(null)};function Gr(e){return 4&e.vnode.shapeFlag}let Jr,Xr=!1;function Yr(e,t,n){v(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:b(t)&&(e.setupState=wt(t)),Qr(e,n)}function Qr(e,t,n){const r=e.type;if(!e.render){if(!t&&Jr&&!r.render){const t=r.template||Un(e).template;if(t){const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:s,compilerOptions:o}=r,a=u(u({isCustomElement:n,delimiters:s},i),o);r.render=Jr(t,a)}}e.render=r.render||o}qr(e),he();try{xn(e)}finally{de(),Kr()}}function Zr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(wt(lt(e.exposed)),{get:(t,n)=>n in t?t[n]:n in Pn?Pn[n](e):void 0,has:(e,t)=>t in e||t in Pn}))}const ei=(e,t)=>function(e,t,n=!1){let r,i;const s=v(e);return s?(r=e,i=o):(r=e.get,i=e.set),new bt(r,i,s||!i,n)}(e,0,Xr);function ti(e,t,n){const r=arguments.length;return 2===r?b(t)&&!f(t)?Cr(t)?Dr(e,null,[t]):Dr(e,t):Dr(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Cr(n)&&(n=[n]),Dr(e,t,n))}const ni=Symbol.for("v-scx"),ri=()=>Xn(ni),ii="3.3.10",si="undefined"!=typeof document?document:null,oi=si&&si.createElement("template"),ai={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?si.createElementNS("http://www.w3.org/2000/svg",e):si.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>si.createTextNode(e),createComment:e=>si.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>si.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==s&&(i=i.nextSibling););else{oi.innerHTML=r?`<svg>${e}</svg>`:e;const i=oi.content;if(r){const e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},ci=Symbol("_vtc"),li=Symbol("_vod"),ui=/\s*!important$/;function hi(e,t,n){if(f(n))n.forEach((n=>hi(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=pi[t];if(n)return n;let r=A(t);if("filter"!==r&&r in e)return pi[t]=r;r=D(r);for(let i=0;i<di.length;i++){const n=di[i]+r;if(n in e)return pi[t]=n}return t}(e,t);ui.test(n)?e.setProperty(N(r),n.replace(ui,""),"important"):e[r]=n}}const di=["Webkit","Moz","ms"],pi={},fi="http://www.w3.org/1999/xlink",mi=Symbol("_vei");function gi(e,t,n,r,i=null){const s=e[mi]||(e[mi]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(vi.test(e)){let n;for(t={};n=e.match(vi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):N(e.slice(2));return[n,t]}(t);if(r){const o=s[t]=function(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();It(function(e,t){if(f(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=bi(),n}(r,i);!function(e,t,n,r){e.addEventListener(t,n,r)}(e,n,o,a)}else o&&(function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),s[t]=void 0)}}const vi=/(?:Once|Passive|Capture)$/;let yi=0;const wi=Promise.resolve(),bi=()=>yi||(wi.then((()=>yi=0)),yi=Date.now()),_i=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ii=u({patchProp:(e,t,n,r,i=!1,s,o,a,u)=>{"class"===t?function(e,t,n){const r=e[ci];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,r,i):"style"===t?function(e,t,n){const r=e.style,i=y(n);if(n&&!i){if(t&&!y(t))for(const e in t)null==n[e]&&hi(r,e,"");for(const e in n)hi(r,e,n[e])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),li in e&&(r.display=s)}}(e,n,r):c(t)?l(t)||gi(e,t,0,r,o):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):function(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&_i(t)&&v(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;return!("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)}return(!_i(t)||!y(n))&&t in e}(e,t,r,i))?function(e,t,n,r,i,s,o){if("innerHTML"===t||"textContent"===t)return r&&o(r,i,s),void(e[t]=null==n?"":n);const a=e.tagName;if("value"===t&&"PROGRESS"!==a&&!a.includes("-")){e._value=n;const r=null==n?"":n;return("OPTION"===a?e.getAttribute("value"):e.value)!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=G(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{e[t]=n}catch(l){}c&&e.removeAttribute(t)}(e,t,r,s,o,a,u):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),function(e,t,n,r,i){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(fi,t.slice(6,t.length)):e.setAttributeNS(fi,t,n);else{const r=K(t);null==n||r&&!G(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}(e,t,r,i))}},ai);let Ei;const Si=((e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n})({},[["render",function(e,t){const n=Qt("router-view");return Ir(),Tr(Dr(n,r,i,s,o,!0));var r,i,s,o}]]),Ti=function(e,t,n){return e()},ki="undefined"!=typeof window,Ci=Object.assign;function Oi(e,t){const n={};for(const r in t){const i=t[r];n[r]=Ai(i)?i.map(e):e(i)}return n}const Pi=()=>{},Ai=Array.isArray,Ri=/\/$/,Ni=e=>e.replace(Ri,"");function Di(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function xi(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function Li(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Mi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ui(e[n],t[n]))return!1;return!0}function Ui(e,t){return Ai(e)?ji(e,t):Ai(t)?ji(t,e):e===t}function ji(e,t){return Ai(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var Fi,$i;!function(e){e.pop="pop",e.push="push"}(Fi||(Fi={})),function(e){e.back="back",e.forward="forward",e.unknown=""}($i||($i={}));const Vi=/^[^#]+#/;function Bi(e,t){return e.replace(Vi,"#")+t}const Hi=()=>({left:window.pageXOffset,top:window.pageYOffset});function zi(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),i="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function Wi(e,t){return(history.state?history.state.position-t:-1)+e}const qi=new Map;let Ki=()=>location.protocol+"//"+location.host;function Gi(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),xi(n,"")}return xi(n,e)+r+i}function Ji(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Hi():null}}function Xi(e){return"string"==typeof e||"symbol"==typeof e}const Yi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qi=Symbol("");var Zi;function es(e,t){return Ci(new Error,{type:e,[Qi]:!0},t)}function ts(e,t){return e instanceof Error&&Qi in e&&(null==t||!!(e.type&t))}!function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"}(Zi||(Zi={}));const ns="[^/]+?",rs={sensitive:!1,strict:!1,start:!0,end:!0},is=/[.+*?^${}()[\]/\\]/g;function ss(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function os(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const e=ss(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(as(r))return 1;if(as(i))return-1}return i.length-r.length}function as(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const cs={type:0,value:""},ls=/[a-zA-Z0-9_]/;function us(e,t,n){const r=function(e,t){const n=Ci({},rs,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let t=0;t<c.length;t++){const r=c[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(is,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;s.push({name:e,repeatable:n,optional:l});const h=u||ns;if(h!==ns){o+=10;try{new RegExp(`(${h})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+a.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=l&&c.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),i+=d,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");return{re:o,score:r,keys:s,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Ai(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=Ai(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[cs]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}for(;c<e.length;)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ls.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}(e.path),n),i=Ci(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function hs(e,t){const n=[],r=new Map;function i(e,n,r){const a=!r,c=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ps(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);c.aliasOf=r&&r.record;const l=gs(t,e),u=[c];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(Ci({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=us(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!fs(h)&&s(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&o(h)}return d?()=>{s(d)}:Pi}function s(e){if(Xi(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function o(e){let t=0;for(;t<n.length&&os(e,n[t])>=0&&(e.record.path!==n[t].record.path||!vs(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!fs(e)&&r.set(e.record.name,e)}return t=gs({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:function(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw es(1,{location:e});o=i.record.name,a=Ci(ds(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&ds(e.params,i.keys.map((e=>e.name)))),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw es(1,{location:e,currentLocation:t});o=i.record.name,a=Ci({},t.params,e.params),s=i.stringify(a)}const c=[];let l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:ms(c)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function ds(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ps(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"==typeof n?n[r]:n;return t}function fs(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ms(e){return e.reduce(((e,t)=>Ci(e,t.meta)),{})}function gs(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function vs(e,t){return t.children.some((t=>t===e||vs(e,t)))}const ys=/#/g,ws=/&/g,bs=/\//g,_s=/=/g,Is=/\?/g,Es=/\+/g,Ss=/%5B/g,Ts=/%5D/g,ks=/%5E/g,Cs=/%60/g,Os=/%7B/g,Ps=/%7C/g,As=/%7D/g,Rs=/%20/g;function Ns(e){return encodeURI(""+e).replace(Ps,"|").replace(Ss,"[").replace(Ts,"]")}function Ds(e){return Ns(e).replace(Es,"%2B").replace(Rs,"+").replace(ys,"%23").replace(ws,"%26").replace(Cs,"`").replace(Os,"{").replace(As,"}").replace(ks,"^")}function xs(e){return null==e?"":function(e){return Ns(e).replace(ys,"%23").replace(Is,"%3F")}(e).replace(bs,"%2F")}function Ls(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ms(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(Es," "),i=e.indexOf("="),s=Ls(i<0?e:e.slice(0,i)),o=i<0?null:Ls(e.slice(i+1));if(s in t){let e=t[s];Ai(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Us(e){let t="";for(let n in e){const r=e[n];(n=Ds(n).replace(_s,"%3D"),null!=r)?(Ai(r)?r.map((e=>e&&Ds(e))):[r&&Ds(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})):void 0!==r&&(t+=(t.length?"&":"")+n)}return t}function js(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Ai(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fs=Symbol(""),$s=Symbol(""),Vs=Symbol(""),Bs=Symbol(""),Hs=Symbol("");function zs(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function Ws(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{var c;!1===e?a(es(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(c=e)||c&&"object"==typeof c?a(es(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"==typeof e&&s.push(e),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function qs(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(s=a)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(a.__vccOpts||a)[t];s&&i.push(Ws(s,n,r,o,e))}else{let s=a();i.push((()=>s.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=(a=i).__esModule||"Module"===a[Symbol.toStringTag]?i.default:i;var a;o.components[e]=s;const c=(s.__vccOpts||s)[t];return c&&Ws(c,n,r,o,e)()}))))}}var s;return i}function Ks(e){const t=Xn(Vs),n=Xn(Bs),r=ei((()=>t.resolve(vt(e.to)))),i=ei((()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(Li.bind(null,i));if(o>-1)return o;const a=Js(e[t-2]);return t>1&&Js(i)===a&&s[s.length-1].path!==a?s.findIndex(Li.bind(null,e[t-2])):o})),s=ei((()=>i.value>-1&&function(e,t){for(const n in t){const r=t[n],i=e[n];if("string"==typeof r){if(r!==i)return!1}else if(!Ai(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}(n.params,r.value.params))),o=ei((()=>i.value>-1&&i.value===n.matched.length-1&&Mi(n.params,r.value.params)));return{route:r,href:ei((()=>r.value.href)),isActive:s,isExactActive:o,navigate:function(n={}){return function(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}(n)?t[vt(e.replace)?"replace":"push"](vt(e.to)).catch(Pi):Promise.resolve()}}}const Gs=ln({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ks,setup(e,{slots:t}){const n=et(Ks(e)),{options:r}=Xn(Vs),i=ei((()=>({[Xs(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xs(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:ti("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Js(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xs=(e,t,n)=>null!=e?e:null!=t?t:n,Ys=ln({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Xn(Hs),i=ei((()=>e.route||r.value)),s=Xn($s,0),o=ei((()=>{let e=vt(s);const{matched:t}=i.value;let n;for(;(n=t[e])&&!n.components;)e++;return e})),a=ei((()=>i.value.matched[o.value]));Jn($s,ei((()=>o.value+1))),Jn(Fs,a),Jn(Hs,i);const c=mt(l,!1);var l;return nn((()=>[c.value,a.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&Li(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=i.value,s=e.name,o=a.value,l=o&&o.components[s];if(!l)return Qs(n.default,{Component:l,route:r});const u=o.props[s],h=u?!0===u?r.params:"function"==typeof u?u(r):u:null,d=ti(l,Ci({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[s]=null)},ref:c}));return Qs(n.default,{Component:d,route:r})||d}}});function Qs(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Zs=Ys;function eo(){return Xn(Vs)}
/**
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
             */
/**
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
             */const to=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},no={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(to(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const o=i<e.length?n[e.charAt(i)]:64;++i;const a=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==o||null==a)throw new ro;const c=t<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ro extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const io=function(e){return function(e){const t=to(e);return no.encodeByteArray(t,!0)}(e).replace(/\./g,"")},so=function(e){try{return no.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null},oo=()=>
/**
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
             */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
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
             */().__FIREBASE_DEFAULTS__,ao=()=>{try{return oo()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&so(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},co=()=>{var e;return null===(e=ao())||void 0===e?void 0:e.config},lo=e=>{var t;return null===(t=ao())||void 0===t?void 0:t[`_${e}`]};
/**
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
             */
class uo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
             */function ho(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function po(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function fo(){try{return"object"==typeof indexedDB}catch(e){return!1}}function mo(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}class go extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,go.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vo.prototype.create)}}class vo{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(yo,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new go(r,o,n)}}const yo=/\{\$([^}]+)}/g;function wo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(bo(n)&&bo(s)){if(!wo(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bo(e){return null!==e&&"object"==typeof e}
/**
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
             */function _o(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class Io{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Eo),void 0===r.error&&(r.error=Eo),void 0===r.complete&&(r.complete=Eo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Eo(){}
/**
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
             */const So=1e3,To=2,ko=144e5,Co=.5;function Oo(e,t=So,n=To){const r=t*Math.pow(n,e),i=Math.round(Co*r*(Math.random()-.5)*2);return Math.min(ko,r+i)}
/**
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
             */function Po(e){return e&&e._delegate?e._delegate:e}class Ao{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
             */const Ro="[DEFAULT]";
/**
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
             */class No{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new uo;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
             */(e))try{this.getOrInitializeService({instanceIdentifier:Ro})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=Ro){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Ro){return this.instances.has(e)}getOptions(e=Ro){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(i)&&s.resolve(r);return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Ro?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=Ro){return this.component?this.component.multipleInstances?e:Ro:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Do{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new No(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
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
             */var xo;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(xo||(xo={}));const Lo={debug:xo.DEBUG,verbose:xo.VERBOSE,info:xo.INFO,warn:xo.WARN,error:xo.ERROR,silent:xo.SILENT},Mo=xo.INFO,Uo={[xo.DEBUG]:"log",[xo.VERBOSE]:"log",[xo.INFO]:"info",[xo.WARN]:"warn",[xo.ERROR]:"error"},jo=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Uo[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Fo{constructor(e){this.name=e,this._logLevel=Mo,this._logHandler=jo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xo))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Lo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xo.DEBUG,...e),this._logHandler(this,xo.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xo.VERBOSE,...e),this._logHandler(this,xo.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xo.INFO,...e),this._logHandler(this,xo.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xo.WARN,...e),this._logHandler(this,xo.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xo.ERROR,...e),this._logHandler(this,xo.ERROR,...e)}}const $o=(e,t)=>t.some((t=>e instanceof t));let Vo,Bo;const Ho=new WeakMap,zo=new WeakMap,Wo=new WeakMap,qo=new WeakMap,Ko=new WeakMap;let Go={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return zo.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Wo.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yo(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Jo(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Bo||(Bo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Qo(this),t),Yo(Ho.get(this))}:function(...t){return Yo(e.apply(Qo(this),t))}:function(t,...n){const r=e.call(Qo(this),t,...n);return Wo.set(r,t.sort?t.sort():[t]),Yo(r)}}function Xo(e){return"function"==typeof e?Jo(e):(e instanceof IDBTransaction&&function(e){if(zo.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));zo.set(e,t)}(e),$o(e,Vo||(Vo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Go):e)}function Yo(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Yo(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Ho.set(t,e)})).catch((()=>{})),Ko.set(t,e),t}(e);if(qo.has(e))return qo.get(e);const t=Xo(e);return t!==e&&(qo.set(e,t),Ko.set(t,e)),t}const Qo=e=>Ko.get(e),Zo=["get","getKey","getAll","getAllKeys","count"],ea=["put","add","delete","clear"],ta=new Map;function na(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ta.get(t))return ta.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ea.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Zo.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return ta.set(t,s),s}var ra;ra=Go,Go={...ra,get:(e,t,n)=>na(e,t)||ra.get(e,t,n),has:(e,t)=>!!na(e,t)||ra.has(e,t)};
/**
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
             */
class ia{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const sa="@firebase/app",oa="0.9.25",aa=new Fo("@firebase/app"),ca="[DEFAULT]",la={[sa]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ua=new Map,ha=new Map;function da(e,t){try{e.container.addComponent(t)}catch(n){aa.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pa(e){const t=e.name;if(ha.has(t))return aa.debug(`There were multiple attempts to register component ${t}.`),!1;ha.set(t,e);for(const n of ua.values())da(n,e);return!0}function fa(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
             */const ma=new vo("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
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
             */
class ga{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ao("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ma.create("app-deleted",{appName:this._name})}}
/**
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
             */const va="10.7.1";function ya(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});const r=Object.assign({name:ca,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw ma.create("bad-app-name",{appName:String(i)});if(n||(n=co()),!n)throw ma.create("no-options");const s=ua.get(i);if(s){if(wo(n,s.options)&&wo(r,s.config))return s;throw ma.create("duplicate-app",{appName:i})}const o=new Do(i);for(const c of ha.values())o.addComponent(c);const a=new ga(n,r,o);return ua.set(i,a),a}function wa(e=ca){const t=ua.get(e);if(!t&&e===ca&&co())return ya();if(!t)throw ma.create("no-app",{appName:e});return t}function ba(e,t,n){var r;let i=null!==(r=la[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void aa.warn(e.join(" "))}pa(new Ao(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
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
             */const _a="firebase-heartbeat-database",Ia=1,Ea="firebase-heartbeat-store";let Sa=null;function Ta(){return Sa||(Sa=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Yo(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Yo(o.result),e.oldVersion,e.newVersion,Yo(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(_a,Ia,{upgrade:(e,t)=>{0===t&&e.createObjectStore(Ea)}}).catch((e=>{throw ma.create("idb-open",{originalErrorMessage:e.message})}))),Sa}async function ka(e,t){try{const n=(await Ta()).transaction(Ea,"readwrite"),r=n.objectStore(Ea);await r.put(t,Ca(e)),await n.done}catch(n){if(n instanceof go)aa.warn(n.message);else{const e=ma.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});aa.warn(e.message)}}}function Ca(e){return`${e.name}!${e.options.appId}`}
/**
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
             */class Oa{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Aa(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pa();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Pa(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ra(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ra(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=io(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pa(){return(new Date).toISOString().substring(0,10)}class Aa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!fo()&&mo().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=await Ta();return await t.transaction(Ea).objectStore(Ea).get(Ca(e))}catch(t){if(t instanceof go)aa.warn(t.message);else{const e=ma.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});aa.warn(e.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ka(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return ka(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ra(e){return io(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
             */var Na;function Da(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function xa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}Na="",pa(new Ao("platform-logger",(e=>new ia(e)),"PRIVATE")),pa(new Ao("heartbeat",(e=>new Oa(e)),"PRIVATE")),ba(sa,oa,Na),ba(sa,oa,"esm2017"),ba("fire-js",""),"function"==typeof SuppressedError&&SuppressedError;const La=xa,Ma=new vo("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ua=new Fo("@firebase/auth");function ja(e,...t){Ua.logLevel<=xo.ERROR&&Ua.error(`Auth (${va}): ${e}`,...t)}
/**
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
             */function Fa(e,...t){throw Ba(e,...t)}function $a(e,...t){return Ba(e,...t)}function Va(e,t,n){const r=Object.assign(Object.assign({},La()),{[t]:n});return new vo("auth","Firebase",r).create(t,{appName:e.name})}function Ba(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ma.create(e,...t)}function Ha(e,t,...n){if(!e)throw Ba(t,...n)}function za(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ja(t),new Error(t)}function Wa(e,t){e||za(t)}
/**
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
             */function qa(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Ka(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
             */function Ga(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Ka()&&"https:"!==Ka()&&!po()&&!("connection"in navigator)||navigator.onLine}
/**
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
             */
class Ja{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wa(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ho())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Ga()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
             */function Xa(e,t){Wa(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
             */class Ya{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void za("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void za("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void za("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
             */const Qa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Za=new Ja(3e4,6e4);
/**
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
             */function ec(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function tc(e,t,n,r,i={}){return nc(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=_o(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Ya.fetch()(rc(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function nc(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Qa),t);try{const t=new ic(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw sc(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw sc(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw sc(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw sc(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Va(e,a,o);Fa(e,a)}}catch(i){if(i instanceof go)throw i;Fa(e,"network-request-failed",{message:String(i)})}}function rc(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Xa(e.config,i):`${e.config.apiScheme}://${i}`}class ic{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t($a(this.auth,"network-request-failed"))),Za.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function sc(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$a(e,t,r);return i.customData._tokenResponse=n,i}
/**
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
             */
/**
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
             */
function oc(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function ac(e){return 1e3*Number(e)}function cc(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return ja("JWT malformed, contained fewer than 3 sections"),null;try{const e=so(n);return e?JSON.parse(e):(ja("Failed to decode base64 JWT payload"),null)}catch(i){return ja("Caught error parsing JWT payload as JSON",null==i?void 0:i.toString()),null}}
/**
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
             */
async function lc(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof go&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
             */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class uc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
             */class hc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oc(this.lastLoginAt),this.creationTime=oc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
             */async function dc(e){var t;const n=e.auth,r=await e.getIdToken(),i=await lc(e,async function(e,t){return tc(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Ha(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Da(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[],a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new hc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
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
             */
class pc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ha(e.idToken,"internal-error"),Ha(void 0!==e.idToken,"internal-error"),Ha(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=cc(e);return Ha(t,"internal-error"),Ha(void 0!==t.exp,"internal-error"),Ha(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ha(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=
/**
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
             */await async function(e,t){const n=await nc(e,{},(async()=>{const n=_o({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=rc(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ya.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new pc;return n&&(Ha("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Ha("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Ha("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pc,this.toJSON())}_performRefresh(){return za("not implemented")}}
/**
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
             */function fc(e,t){Ha("string"==typeof e||void 0===e,"internal-error",{appName:t})}class mc{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Da(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await lc(this,this.stsTokenManager.getToken(this.auth,e));return Ha(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Po(e),r=await n.getIdToken(t),i=cc(r);Ha(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:oc(ac(i.auth_time)),issuedAtTime:oc(ac(i.iat)),expirationTime:oc(ac(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Po(e);await dc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ha(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new mc(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ha(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await dc(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await lc(this,async function(e,t){return tc(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:I}=t;Ha(y&&I,e,"internal-error");const E=pc.fromJSON(this.name,I);Ha("string"==typeof y,e,"internal-error"),fc(u,e.name),fc(h,e.name),Ha("boolean"==typeof w,e,"internal-error"),Ha("boolean"==typeof b,e,"internal-error"),fc(d,e.name),fc(p,e.name),fc(f,e.name),fc(m,e.name),fc(g,e.name),fc(v,e.name);const S=new mc({uid:y,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:E,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(S.providerData=_.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new pc;r.updateFromServerResponse(t);const i=new mc({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await dc(i),i}}
/**
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
             */const gc=new Map;function vc(e){Wa(e instanceof Function,"Expected a class definition");let t=gc.get(e);return t?(Wa(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,gc.set(e,t),t)}
/**
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
             */class yc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yc.type="NONE";const wc=yc;
/**
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
             */function bc(e,t,n){return`firebase:${e}:${t}:${n}`}class _c{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=bc(this.userKey,r.apiKey,i),this.fullPersistenceKey=bc("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mc._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new _c(vc(wc),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||vc(wc);const s=bc(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=mc._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new _c(i,e,n)):new _c(i,e,n)}}
/**
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
             */function Ic(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(kc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ec(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Oc(t))return"Blackberry";if(Pc(t))return"Webos";if(Sc(t))return"Safari";if((t.includes("chrome/")||Tc(t))&&!t.includes("edge/"))return"Chrome";if(Cc(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ec(e=ho()){return/firefox\//i.test(e)}function Sc(e=ho()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Tc(e=ho()){return/crios\//i.test(e)}function kc(e=ho()){return/iemobile/i.test(e)}function Cc(e=ho()){return/android/i.test(e)}function Oc(e=ho()){return/blackberry/i.test(e)}function Pc(e=ho()){return/webos/i.test(e)}function Ac(e=ho()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Rc(){return function(){const e=ho();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Nc(e=ho()){return Ac(e)||Cc(e)||Pc(e)||Oc(e)||/windows phone/i.test(e)||kc(e)}
/**
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
             */
function Dc(e,t=[]){let n;switch(e){case"Browser":n=Ic(ho());break;case"Worker":n=`${Ic(ho())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${va}/${r}`}
/**
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
             */class xc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==n?void 0:n.message})}}}
/**
             * @license
             * Copyright 2023 Google LLC
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
             */class Lc{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
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
             */class Mc{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jc(this),this.idTokenSubscription=new jc(this),this.beforeStateQueue=new xc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ma,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vc(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await _c.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ha(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await dc(e)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Po(e):null;return t&&Ha(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ha(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(vc(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return tc(e,"GET","/v2/passwordPolicy",ec(e,t))}
/**
             * @license
             * Copyright 2023 Google LLC
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
             */(this),t=new Lc(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return tc(e,"POST","/v2/accounts:revokeToken",ec(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vc(e)||this._popupRedirectResolver;Ha(t,this,"argument-error"),this.redirectPersistenceManager=await _c.create(this,[vc(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ha(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ha(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Ua.logLevel<=xo.WARN&&Ua.warn(`Auth (${va}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Uc(e){return Po(e)}class jc{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Io(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Ha(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
             */function Fc(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=$a("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function $c(e,t,n){const r=Uc(e);Ha(r._canInitEmulator,r,"emulator-config-failed"),Ha(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Vc(t),{host:o,port:a}=function(e){const t=Vc(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Bc(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Bc(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
             */()}function Vc(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Bc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Hc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return za("not implemented")}_getIdTokenResponse(e){return za("not implemented")}_linkToIdToken(e,t){return za("not implemented")}_getReauthenticationResolver(e){return za("not implemented")}}
/**
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
             */async function zc(e,t){return async function(e,t,n,r,i={}){const s=await tc(e,t,n,r,i);return"mfaPendingCredential"in s&&Fa(e,"multi-factor-auth-required",{_serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",ec(e,t))}
/**
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
             */class Wc extends Hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Wc(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Fa("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Da(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Wc(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return zc(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,zc(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zc(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_o(t)}return e}}
/**
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
             */class qc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
             */class Kc extends qc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
             */class Gc extends Kc{constructor(){super("facebook.com")}static credential(e){return Wc._fromParams({providerId:Gc.PROVIDER_ID,signInMethod:Gc.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gc.credentialFromTaggedObject(e)}static credentialFromError(e){return Gc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Gc.credential(e.oauthAccessToken)}catch(t){return null}}}Gc.FACEBOOK_SIGN_IN_METHOD="facebook.com",Gc.PROVIDER_ID="facebook.com";
/**
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
             */
class Jc extends Kc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Wc._fromParams({providerId:Jc.PROVIDER_ID,signInMethod:Jc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Jc.credentialFromTaggedObject(e)}static credentialFromError(e){return Jc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Jc.credential(t,n)}catch(r){return null}}}Jc.GOOGLE_SIGN_IN_METHOD="google.com",Jc.PROVIDER_ID="google.com";
/**
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
             */
class Xc extends Kc{constructor(){super("github.com")}static credential(e){return Wc._fromParams({providerId:Xc.PROVIDER_ID,signInMethod:Xc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xc.credentialFromTaggedObject(e)}static credentialFromError(e){return Xc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Xc.credential(e.oauthAccessToken)}catch(t){return null}}}Xc.GITHUB_SIGN_IN_METHOD="github.com",Xc.PROVIDER_ID="github.com";
/**
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
             */
class Yc extends Kc{constructor(){super("twitter.com")}static credential(e,t){return Wc._fromParams({providerId:Yc.PROVIDER_ID,signInMethod:Yc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Yc.credentialFromTaggedObject(e)}static credentialFromError(e){return Yc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Yc.credential(t,n)}catch(r){return null}}}Yc.TWITTER_SIGN_IN_METHOD="twitter.com",Yc.PROVIDER_ID="twitter.com";
/**
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
             */
class Qc{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await mc._fromIdTokenResponse(e,n,r),s=Zc(n);return new Qc({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Zc(n);return new Qc({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Zc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
             */class el extends go{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,el.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new el(e,t,n,r)}}function tl(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw el._fromErrorAndOperation(e,n,t,r);throw n}))}const nl="__sak";
/**
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
             */class rl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(nl,"1"),this.storage.removeItem(nl),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
             */class il extends rl{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=ho();return Sc(e)||Ac(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Nc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Rc()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}il.type="LOCAL";const sl=il;
/**
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
             */class ol extends rl{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ol.type="SESSION";const al=ol;
/**
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
             */
/**
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
             */
class cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new cl(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
             */
function ll(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
             */cl.receivers=[];class ul{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=ll("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
             */function hl(){return window}
/**
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
             */
function dl(){return void 0!==hl().WorkerGlobalScope&&"function"==typeof hl().importScripts}
/**
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
             */
const pl="firebaseLocalStorageDb",fl="firebaseLocalStorage",ml="fbase_key";class gl{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function vl(e,t){return e.transaction([fl],t?"readwrite":"readonly").objectStore(fl)}function yl(){const e=indexedDB.open(pl,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(fl,{keyPath:ml})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(fl)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(pl);return new gl(e).toPromise()}(),t(await yl()))}))}))}async function wl(e,t,n){const r=vl(e,!0).put({[ml]:t,value:n});return new gl(r).toPromise()}function bl(e,t){const n=vl(e,!0).delete(t);return new gl(n).toPromise()}class _l{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await yl()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cl._getInstance(dl()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ul(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yl();return await wl(e,nl,"1"),await bl(e,nl),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>wl(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=vl(e,!1).get(t),r=await new gl(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>bl(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=vl(e,!1).getAll();return new gl(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}_l.type="LOCAL";const Il=_l;
/**
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
             */
function El(e,t){return t?vc(t):(Ha(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
             */new Ja(3e4,6e4);class Sl extends Hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zc(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zc(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zc(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Tl(e){
/**
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
             */return async function(e,t,n=!1){const r="signIn",i=await tl(e,r,t),s=await Qc._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}
/**
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
             */(e.auth,new Sl(e),e.bypassAuthState)}function kl(e){const{auth:t,user:n}=e;return Ha(n,t,"internal-error"),
/**
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
             */
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await lc(e,tl(r,i,t,e),n);Ha(s.idToken,r,"internal-error");const o=cc(s.idToken);Ha(o,r,"internal-error");const{sub:a}=o;return Ha(e.uid===a,r,"user-mismatch"),Qc._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&Fa(r,"user-mismatch"),s}}(n,new Sl(e),e.bypassAuthState)}async function Cl(e){const{auth:t,user:n}=e;return Ha(n,t,"internal-error"),async function(e,t,n=!1){const r=await lc(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Qc._forOperation(e,"link",r)}(n,new Sl(e),e.bypassAuthState)}
/**
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
             */class Ol{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tl;case"linkViaPopup":case"linkViaRedirect":return Cl;case"reauthViaPopup":case"reauthViaRedirect":return kl;default:Fa(this.auth,"internal-error")}}resolve(e){Wa(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wa(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
             */const Pl=new Ja(2e3,1e4);async function Al(e,t,n){const r=Uc(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Fa(e,"argument-error"),Va(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,qc);const i=El(r,n);return new Rl(r,"signInViaPopup",t,i).executeNotNull()}class Rl extends Ol{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Rl.currentPopupAction&&Rl.currentPopupAction.cancel(),Rl.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ha(e,this.auth,"internal-error"),e}async onExecution(){Wa(1===this.filter.length,"Popup operations only handle one event");const e=ll();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject($a(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject($a(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rl.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject($a(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Pl.get())};e()}}Rl.currentPopupAction=null;
/**
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
             */
const Nl="pendingRedirect",Dl=new Map;class xl extends Ol{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Dl.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return bc(Nl,e.config.apiKey,e.name)}(t),r=function(e){return vc(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Dl.set(this.auth._key(),e)}return this.bypassAuthState||Dl.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ll(e,t){Dl.set(e._key(),t)}async function Ml(e,t,n=!1){const r=Uc(e),i=El(r,t),s=new xl(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
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
             */class Ul{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fl(e);default:return!1}}
/**
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
             */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Fl(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError($a(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(jl(e))}saveEventToCache(e){this.cachedEventUids.add(jl(e)),this.lastProcessedEventTime=Date.now()}}function jl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Fl({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
             */
const $l=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vl=/^https?/;async function Bl(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return tc(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(Hl(r))return}catch(n){}Fa(e,"unauthorized-domain")}function Hl(e){const t=qa(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Vl.test(n))return!1;if($l.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
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
             */const zl=new Ja(3e4,6e4);function Wl(){const e=hl().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function ql(e){return new Promise(((t,n)=>{var r,i,s;function o(){Wl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Wl(),n($a(e,"network-request-failed"))},timeout:zl.get()})}if(null===(i=null===(r=hl().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=hl().gapi)||void 0===s?void 0:s.load)){const t=`__iframefcb${Math.floor(1e6*Math.random())}`;return hl()[t]=()=>{gapi.load?o():n($a(e,"network-request-failed"))},Fc(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Kl=null,e}))}let Kl=null;
/**
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
             */
const Gl=new Ja(5e3,15e3),Jl="__/auth/iframe",Xl="emulator/auth/iframe",Yl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ql=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zl(e){const t=e.config;Ha(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Xa(t,Xl):`https://${e.config.authDomain}/${Jl}`,r={apiKey:t.apiKey,appName:e.name,v:va},i=Ql.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_o(r).slice(1)}`}async function eu(e){const t=await function(e){return Kl=Kl||ql(e),Kl}(e),n=hl().gapi;return Ha(n,e,"internal-error"),t.open({where:document.body,url:Zl(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yl,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=$a(e,"network-request-failed"),s=hl().setTimeout((()=>{r(i)}),Gl.get());function o(){hl().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
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
             */const tu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class nu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ru(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tu),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ho().toLowerCase();n&&(a=Tc(l)?"_blank":n),Ec(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=ho()){var t;return Ac(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
             */(t||"",a),new nu(null);const h=window.open(t||"",a,u);Ha(h,e,"popup-blocked");try{h.focus()}catch(d){}return new nu(h)}const iu="__/auth/handler",su="emulator/auth/handler",ou=encodeURIComponent("fac");async function au(e,t,n,r,i,s){Ha(e.config.authDomain,e,"auth-domain-config-required"),Ha(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:va,eventId:i};if(t instanceof qc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Kc){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))void 0===a[u]&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${ou}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?Xa(e,su):`https://${e.authDomain}/${iu}`}
/**
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
             */(e)}?${_o(a).slice(1)}${l}`}const cu="webStorageSupport",lu=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=al,this._completeRedirectFn=Ml,this._overrideRedirectResult=Ll}async _openPopup(e,t,n,r){var i;return Wa(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()"),ru(e,await au(e,t,n,qa(),r),ll())}async _openRedirect(e,t,n,r){return await this._originValidation(e),function(e){hl().location.href=e}(await au(e,t,n,qa(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Wa(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await eu(e),n=new Ul(e);return t.register("authEvent",(t=>(Ha(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"})),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cu,{type:cu},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[cu];void 0!==i&&t(!!i),Fa(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Bl(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Nc()||Sc()||Ac()}};var uu="@firebase/auth",hu="1.5.1";
/**
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
             */
class du{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ha(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
             */
/**
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
             */
const pu=lo("authIdTokenMaxAge")||300;let fu=null;var mu;mu="Browser",pa(new Ao("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;Ha(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:mu,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dc(mu)},c=new Mc(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vc);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),pa(new Ao("auth-internal",(e=>(e=>new du(e))(Uc(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),ba(uu,hu,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(mu)),ba(uu,hu,"esm2017"),
/**
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
             */
ba("firebase","10.7.1","app");const gu=(e,t)=>t.some((t=>e instanceof t));let vu,yu;const wu=new WeakMap,bu=new WeakMap,_u=new WeakMap,Iu=new WeakMap,Eu=new WeakMap;let Su={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return bu.get(e);if("objectStoreNames"===t)return e.objectStoreNames||_u.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cu(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Tu(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(yu||(yu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ou(this),t),Cu(wu.get(this))}:function(...t){return Cu(e.apply(Ou(this),t))}:function(t,...n){const r=e.call(Ou(this),t,...n);return _u.set(r,t.sort?t.sort():[t]),Cu(r)}}function ku(e){return"function"==typeof e?Tu(e):(e instanceof IDBTransaction&&function(e){if(bu.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));bu.set(e,t)}(e),gu(e,vu||(vu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Su):e)}function Cu(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Cu(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&wu.set(t,e)})).catch((()=>{})),Eu.set(t,e),t}(e);if(Iu.has(e))return Iu.get(e);const t=ku(e);return t!==e&&(Iu.set(e,t),Eu.set(t,e)),t}const Ou=e=>Eu.get(e),Pu=["get","getKey","getAll","getAllKeys","count"],Au=["put","add","delete","clear"],Ru=new Map;function Nu(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ru.get(t))return Ru.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Au.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Pu.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Ru.set(t,s),s}!function(e){Su=e(Su)}((e=>({...e,get:(t,n,r)=>Nu(t,n)||e.get(t,n,r),has:(t,n)=>!!Nu(t,n)||e.has(t,n)})));const Du="@firebase/installations",xu="0.6.4",Lu=1e4,Mu=`w:${xu}`,Uu="FIS_v2",ju="https://firebaseinstallations.googleapis.com/v1",Fu=36e5,$u=new vo("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Vu(e){return e instanceof go&&e.code.includes("request-failed")}
/**
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
             */function Bu({projectId:e}){return`${ju}/projects/${e}/installations`}function Hu(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function zu(e,t){const n=(await t.json()).error;return $u.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Wu({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function qu(e,{refreshToken:t}){const n=Wu(e);return n.append("Authorization",function(e){return`${Uu} ${e}`}
/**
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
             */(t)),n}async function Ku(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
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
             */function Gu(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
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
             */
/**
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
             */
const Ju=/^[cdef][\w-]{21}$/,Xu="";function Yu(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
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
             */(e);return Ju.test(t)?t:Xu}catch(e){return Xu}}function Qu(e){return`${e.appName}!${e.appId}`}
/**
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
             */const Zu=new Map;function eh(e,t){const n=Qu(e);th(n,t),function(e,t){const n=(!nh&&"BroadcastChannel"in self&&(nh=new BroadcastChannel("[Firebase] FID Change"),nh.onmessage=e=>{th(e.data.key,e.data.fid)}),nh);n&&n.postMessage({key:e,fid:t}),0===Zu.size&&nh&&(nh.close(),nh=null)}(n,t)}function th(e,t){const n=Zu.get(e);if(n)for(const r of n)r(t)}let nh=null;
/**
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
             */
const rh="firebase-installations-database",ih=1,sh="firebase-installations-store";let oh=null;function ah(){return oh||(oh=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Cu(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Cu(o.result),e.oldVersion,e.newVersion,Cu(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}(rh,ih,{upgrade:(e,t)=>{0===t&&e.createObjectStore(sh)}})),oh}async function ch(e,t){const n=Qu(e),r=(await ah()).transaction(sh,"readwrite"),i=r.objectStore(sh),s=await i.get(n);return await i.put(t,n),await r.done,s&&s.fid===t.fid||eh(e,t.fid),t}async function lh(e){const t=Qu(e),n=(await ah()).transaction(sh,"readwrite");await n.objectStore(sh).delete(t),await n.done}async function uh(e,t){const n=Qu(e),r=(await ah()).transaction(sh,"readwrite"),i=r.objectStore(sh),s=await i.get(n),o=t(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||s&&s.fid===o.fid||eh(e,o.fid),o}
/**
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
             */async function hh(e){let t;const n=await uh(e.appConfig,(n=>{const r=function(e){const t=e||{fid:Yu(),registrationStatus:0};return fh(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject($u.create("app-offline"))};const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Bu(e),i=Wu(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:Uu,appId:e.appId,sdkVersion:Mu},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ku((()=>fetch(r,a)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Hu(e.authToken)}}throw await zu("Create Installation",c)}(e,t);return ch(e.appConfig,n)}catch(n){throw Vu(n)&&409===n.customData.serverCode?await lh(e.appConfig):await ch(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:dh(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===Xu?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function dh(e){let t=await ph(e.appConfig);for(;1===t.registrationStatus;)await Gu(100),t=await ph(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await hh(e);return n||t}return t}function ph(e){return uh(e,(e=>{if(!e)throw $u.create("installation-not-found");return fh(e)}))}function fh(e){return 1===(t=e).registrationStatus&&t.registrationTime+Lu<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
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
             */}async function mh({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${Bu(e)}/${t}/authTokens:generate`}
/**
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
             */(e,n),i=qu(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:Mu,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await Ku((()=>fetch(r,a)));if(c.ok)return Hu(await c.json());throw await zu("Generate Auth Token",c)}async function gh(e,t=!1){let n;const r=await uh(e.appConfig,(r=>{if(!yh(r))throw $u.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Fu}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await vh(e.appConfig);for(;1===n.authToken.requestStatus;)await Gu(100),n=await vh(e.appConfig);const r=n.authToken;return 0===r.requestStatus?gh(e,t):r}(e,t),r;{if(!navigator.onLine)throw $u.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await mh(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ch(e.appConfig,r),n}catch(n){if(!Vu(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ch(e.appConfig,n)}else await lh(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function vh(e){return uh(e,(e=>{if(!yh(e))throw $u.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Lu<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
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
             */}))}function yh(e){return void 0!==e&&2===e.registrationStatus}
/**
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
             */
async function wh(e,t=!1){const n=e;return await async function(e){const{registrationPromise:t}=await hh(e);t&&await t}
/**
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
             */(n),(await gh(n,t)).token}function bh(e){return $u.create("missing-app-config-values",{valueName:e})}
/**
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
             */const _h="installations",Ih=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw bh("App Configuration");if(!e.name)throw bh("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw bh(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:fa(t,"heartbeat"),_delete:()=>Promise.resolve()}},Eh=e=>{const t=fa(e.getProvider("app").getImmediate(),_h).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await hh(t);return r?r.catch(console.error):gh(t).catch(console.error),n.fid}(t),getToken:e=>wh(t,e)}};pa(new Ao(_h,Ih,"PUBLIC")),pa(new Ao("installations-internal",Eh,"PRIVATE")),ba(Du,xu),ba(Du,xu,"esm2017");
/**
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
             */
const Sh="analytics",Th="firebase_id",kh="origin",Ch=6e4,Oh="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ph="https://www.googletagmanager.com/gtag/js",Ah=new Fo("@firebase/analytics"),Rh=new vo("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
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
             */
function Nh(e){if(!e.startsWith(Ph)){const t=Rh.create("invalid-gtag-resource",{gtagURL:e});return Ah.warn(t.message),""}return e}function Dh(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function xh(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:Nh}),r=document.createElement("script"),i=`${Ph}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Lh(e,t,n,r){return async function(i,...s){try{if("event"===i){const[r,i]=s;await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await Dh(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Ah.error(s)}}(e,t,n,r,i)}else if("config"===i){const[i,o]=s;await async function(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=(await Dh(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(a){Ah.error(a)}e("config",i,s)}(e,t,n,r,i,o)}else if("consent"===i){const[t]=s;e("consent","update",t)}else if("get"===i){const[t,n,r]=s;e("get",t,n,r)}else if("set"===i){const[t]=s;e("set",t)}else e(i,...s)}catch(o){Ah.error(o)}}}
/**
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
             */
const Mh=30,Uh=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function jh(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Fh(e,t=Uh,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Rh.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Rh.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Vh;return setTimeout((async()=>{a.abort()}),void 0!==n?n:Ch),$h({appId:r,apiKey:i,measurementId:s},o,a,t)}async function $h(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Uh){var s;const{appId:o,measurementId:a}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(Rh.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(c){if(a)return Ah.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:jh(r)},s=Oh.replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw Rh.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return i.deleteThrottleMetadata(o),t}catch(c){const t=c;if(!function(e){if(!(e instanceof go&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(o),a)return Ah.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:o,measurementId:a};throw c}const l=503===Number(null===(s=null==t?void 0:t.customData)||void 0===s?void 0:s.httpStatus)?Oo(n,i.intervalMillis,Mh):Oo(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(o,u),Ah.debug(`Calling attemptFetch again in ${l} millis`),$h(e,u,r,i)}}class Vh{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}async function Bh(e,t,n,r,i,s,o){var a;const c=Fh(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Ah.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Ah.error(e))),t.push(c);const l=
/**
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
             */
async function(){if(!fo())return Ah.warn(Rh.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await mo()}catch(e){return Ah.warn(Rh.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[u,h]=await Promise.all([c,l]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Ph)&&n.src.includes(e))return n;return null})(s)||xh(s,u.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d[kh]="firebase",d.update=!0,null!=h&&(d[Th]=h),i("config",u.measurementId,d),u.measurementId}
/**
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
             */class Hh{constructor(e){this.app=e}_delete(){return delete zh[this.app.options.appId],Promise.resolve()}}let zh={},Wh=[];const qh={};let Kh,Gh,Jh="dataLayer",Xh="gtag",Yh=!1;function Qh(){const e=[];if(po()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Rh.create("invalid-analytics-context",{errorInfo:t});Ah.warn(n.message)}}function Zh(e,t,n){Qh();const r=e.options.appId;if(!r)throw Rh.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Rh.create("no-api-key");Ah.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=zh[r])throw Rh.create("already-exists",{id:r});if(!Yh){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Jh);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=Lh(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(zh,Wh,qh,Jh,Xh);Gh=e,Kh=t,Yh=!0}return zh[r]=Bh(e,Wh,qh,t,Kh,Jh,n),new Hh(e)}function ed(e,t,n,r){e=Po(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(Gh,zh[e.app.options.appId],t,n,r).catch((e=>Ah.error(e)))}const td="@firebase/analytics",nd="0.10.0";pa(new Ao(Sh,((e,{options:t})=>Zh(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),pa(new Ao("analytics-internal",(function(e){try{const t=e.getProvider(Sh).getImmediate();return{logEvent:(e,n,r)=>ed(t,e,n,r)}}catch(t){throw Rh.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),ba(td,nd),ba(td,nd,"esm2017"),function(e=wa()){const t=fa(e=Po(e),Sh);t.isInitialized()?t.getImmediate():function(e,t={}){const n=fa(e,Sh);if(n.isInitialized()){const e=n.getImmediate();if(wo(t,n.getOptions()))return e;throw Rh.create("already-initialized")}n.initialize({options:t})}(e)}(ya({apiKey:"AIzaSyCA7u7USv_fIYdTX9Yf4Dp_Nc_ywMI5rGk",authDomain:"wired-plateau-407307.firebaseapp.com",projectId:"wired-plateau-407307",storageBucket:"wired-plateau-407307.appspot.com",messagingSenderId:"585374910303",appId:"1:585374910303:web:b8e25fc0b342ce0b0dd8ea",measurementId:"G-9FXJZDF51F"}));const rd=function(e=wa()){const t=fa(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
/**
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
             */
function(e,t){const n=fa(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(wo(n.getOptions(),null!=t?t:{}))return e;Fa(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:lu,persistence:[Il,sl,al]}),r=lo("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>pu)return;const r=null==t?void 0:t.token;fu!==r&&(fu=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Po(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){Po(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=(o="auth",null===(c=null===(a=ao())||void 0===a?void 0:a.emulatorHosts)||void 0===c?void 0:c[o]);var o,a,c;return s&&$c(n,`http://${s}`),n}();(function(e,t){return Po(e).setPersistence(t)})(rd,al).then((()=>{})),e("g",(async()=>{const e=new Jc;return await Al(rd,e)})),window.addEventListener("load",(async()=>{})),e("f",(()=>{const e=new Gc;Al(rd,e).then((e=>{const t=e.user,n=Gc.credentialFromResult(e).accessToken;console.log(t),console.log(n)})).catch((e=>{console.log(e)}))}));const id=ln({__name:"index",setup(e){const t=eo(),n=async()=>{await function(e){return Po(e).signOut()}(rd),await t.push("/")};return(e,t)=>(Ir(),kr("div",{onClick:n},"退出"))}}),sd=function(e){const t=hs(e.routes,e),n=e.parseQuery||Ms,r=e.stringifyQuery||Us,i=e.history,s=zs(),o=zs(),a=zs(),c=mt(Yi,!0);let l=Yi;ki&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Oi.bind(null,(e=>""+e)),h=Oi.bind(null,xs),d=Oi.bind(null,Ls);function p(e,s){if(s=Ci({},s||c.value),"string"==typeof e){const r=Di(n,e,s.path),o=t.resolve({path:r.path},s),a=i.createHref(r.fullPath);return Ci(r,o,{params:d(o.params),hash:Ls(r.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=Ci({},e,{path:Di(n,e.path,s.path).path});else{const t=Ci({},e.params);for(const e in t)null==t[e]&&delete t[e];o=Ci({},e,{params:h(t)}),s.params=h(s.params)}const a=t.resolve(o,s),l=e.hash||"";a.params=u(d(a.params));const p=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,Ci({},e,{hash:(f=l,Ns(f).replace(Os,"{").replace(As,"}").replace(ks,"^")),path:a.path}));var f;const m=i.createHref(p);return Ci({fullPath:p,hash:l,query:r===Us?js(e.query):e.query||{}},a,{redirectedFrom:void 0,href:m})}function f(e){return"string"==typeof e?Di(n,e,c.value.path):Ci({},e)}function m(e,t){if(l!==e)return es(8,{from:t,to:e})}function g(e){return y(e)}function v(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=f(r):{path:r},r.params={}),Ci({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function y(e,t){const n=l=p(e),i=c.value,s=e.state,o=e.force,a=!0===e.replace,u=v(n);if(u)return y(Ci(f(u),{state:"object"==typeof u?Ci({},s,u.state):s,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Li(t.matched[r],n.matched[i])&&Mi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,i,n)&&(d=es(16,{to:h,from:i}),R(i,i,!0,!1)),(d?Promise.resolve(d):_(h,i)).catch((e=>ts(e)?ts(e,2)?e:A(e):P(e,h,i))).then((e=>{if(e){if(ts(e,2))return y(Ci({replace:a},f(e.to),{state:"object"==typeof e.to?Ci({},s,e.to.state):s,force:o}),t||h)}else e=E(h,i,!0,a,s);return I(h,i,e),e}))}function w(e,t){const n=m(e,t);return n?Promise.reject(n):Promise.resolve()}function b(e){const t=x.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function _(e,t){let n;const[r,i,a]=function(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>Li(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>Li(e,a)))||i.push(a))}return[n,r,i]}(e,t);n=qs(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(Ws(r,e,t))}));const c=w.bind(null,e,t);return n.push(c),M(n).then((()=>{n=[];for(const r of s.list())n.push(Ws(r,e,t));return n.push(c),M(n)})).then((()=>{n=qs(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Ws(r,e,t))}));return n.push(c),M(n)})).then((()=>{n=[];for(const r of a)if(r.beforeEnter)if(Ai(r.beforeEnter))for(const i of r.beforeEnter)n.push(Ws(i,e,t));else n.push(Ws(r.beforeEnter,e,t));return n.push(c),M(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=qs(a,"beforeRouteEnter",e,t),n.push(c),M(n)))).then((()=>{n=[];for(const r of o.list())n.push(Ws(r,e,t));return n.push(c),M(n)})).catch((e=>ts(e,8)?e:Promise.reject(e)))}function I(e,t,n){a.list().forEach((r=>b((()=>r(e,t,n)))))}function E(e,t,n,r,s){const o=m(e,t);if(o)return o;const a=t===Yi,l=ki?history.state:{};n&&(r||a?i.replace(e.fullPath,Ci({scroll:a&&l&&l.scroll},s)):i.push(e.fullPath,s)),c.value=e,R(e,t,n,a),A()}let S;function T(){S||(S=i.listen(((e,t,n)=>{if(!L.listening)return;const r=p(e),s=v(r);if(s)return void y(Ci(s,{replace:!0}),r).catch(Pi);l=r;const o=c.value;var a,u;ki&&(a=Wi(o.fullPath,n.delta),u=Hi(),qi.set(a,u)),_(r,o).catch((e=>ts(e,12)?e:ts(e,2)?(y(e.to,r).then((e=>{ts(e,20)&&!n.delta&&n.type===Fi.pop&&i.go(-1,!1)})).catch(Pi),Promise.reject()):(n.delta&&i.go(-n.delta,!1),P(e,r,o)))).then((e=>{(e=e||E(r,o,!1))&&(n.delta&&!ts(e,8)?i.go(-n.delta,!1):n.type===Fi.pop&&ts(e,20)&&i.go(-1,!1)),I(r,o,e)})).catch(Pi)})))}let k,C=zs(),O=zs();function P(e,t,n){A(e);const r=O.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function A(e){return k||(k=!e,T(),C.list().forEach((([t,n])=>e?n(e):t())),C.reset()),e}function R(t,n,r,i){const{scrollBehavior:s}=e;if(!ki||!s)return Promise.resolve();const o=!r&&function(e){const t=qi.get(e);return qi.delete(e),t}(Wi(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Dt().then((()=>s(t,n,o))).then((e=>e&&zi(e))).catch((e=>P(e,t,n)))}const N=e=>i.go(e);let D;const x=new Set,L={currentRoute:c,listening:!0,addRoute:function(e,n){let r,i;return Xi(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:p,options:e,push:g,replace:function(e){return g(Ci(f(e),{replace:!0}))},go:N,back:()=>N(-1),forward:()=>N(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:O.add,isReady:function(){return k&&c.value!==Yi?Promise.resolve():new Promise(((e,t)=>{C.add([e,t])}))},install(e){e.component("RouterLink",Gs),e.component("RouterView",Zs),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>vt(c)}),ki&&!D&&c.value===Yi&&(D=!0,g(i.location).catch((e=>{})));const t={};for(const r in Yi)Object.defineProperty(t,r,{get:()=>c.value[r],enumerable:!0});e.provide(Vs,this),e.provide(Bs,tt(t)),e.provide(Hs,c);const n=e.unmount;x.add(e),e.unmount=function(){x.delete(e),x.size<1&&(l=Yi,S&&S(),S=null,c.value=Yi,D=!1,k=!1),n()}}};function M(e){return e.reduce(((e,t)=>e.then((()=>b(t)))),Promise.resolve())}return L}({history:function(e){const t=function(e){const{history:t,location:n}=window,r={value:Gi(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:Ki()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:function(e,n){const o=Ci({},i.value,t.state,{forward:e,scroll:Hi()});s(o.current,o,!0),s(e,Ci({},Ji(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){s(e,Ci({},t.state,Ji(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}}}(e=function(e){if(!e)if(ki){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),Ni(e)}(e)),n=function(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=Gi(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:Fi.pop,direction:u?u>0?$i.forward:$i.back:$i.unknown})}))};function c(){const{history:e}=window;e.state&&e.replaceState(Ci({},e.state,{scroll:Hi()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:function(){o=n.value},listen:function(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}}}(e,t.state,t.location,t.replace),r=Ci({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:Bi.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}(),routes:[{path:"/login",name:"login",component:()=>Ti((()=>t.import("./login-legacy-d527a732.js")),0,t.meta.url)},{path:"/index",name:"index",component:id,children:[]}]});sd.beforeEach(((e,t,n)=>{"/"!=e.path?n():n("/login")})),((...e)=>{const t=(Ei||(Ei=pr(Ii))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){return y(e)?document.querySelector(e):e}(e);if(!r)return;const i=t._component;v(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t})(Si).use(sd).mount("#app")}}}));
