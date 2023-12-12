System.register([],(function(e,t){"use strict";return{execute:function(){var e=document.createElement("style");function t(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}e.textContent="",document.head.appendChild(e);const n={},r=[],i=()=>{},s=()=>!1,o=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),a=e=>e.startsWith("onUpdate:"),c=Object.assign,l=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},u=Object.prototype.hasOwnProperty,d=(e,t)=>u.call(e,t),h=Array.isArray,p=e=>"[object Map]"===b(e),f=e=>"[object Set]"===b(e),g=e=>"function"==typeof e,m=e=>"string"==typeof e,v=e=>"symbol"==typeof e,y=e=>null!==e&&"object"==typeof e,_=e=>(y(e)||g(e))&&g(e.then)&&g(e.catch),w=Object.prototype.toString,b=e=>w.call(e),I=e=>b(e).slice(8,-1),T=e=>"[object Object]"===b(e),S=e=>m(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,E=t(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},C=/-(\w)/g,O=k((e=>e.replace(C,((e,t)=>t?t.toUpperCase():"")))),A=/\B([A-Z])/g,P=k((e=>e.replace(A,"-$1").toLowerCase())),R=k((e=>e.charAt(0).toUpperCase()+e.slice(1))),N=k((e=>e?`on${R(e)}`:"")),D=(e,t)=>!Object.is(e,t),L=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},x=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},M=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let U;const F=()=>U||(U="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function j(e){if(h(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=m(r)?H(r):j(r);if(i)for(const e in i)t[e]=i[e]}return t}if(m(e)||y(e))return e}const V=/;(?![^(]*\))/g,$=/:([^]+)/,B=/\/\*[^]*?\*\//g;function H(e){const t={};return e.replace(B,"").split(V).forEach((e=>{if(e){const n=e.split($);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function z(e){let t="";if(m(e))t=e;else if(h(e))for(let n=0;n<e.length;n++){const r=z(e[n]);r&&(t+=r+" ")}else if(y(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const W=t("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function q(e){return!!e||""===e}let K;class G{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=K,!e&&K&&(this.index=(K.scopes||(K.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=K;try{return K=this,e()}finally{K=t}}}on(){K=this}off(){K=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}const J=e=>{const t=new Set(e);return t.w=0,t.n=0,t},X=e=>(e.w&ee)>0,Y=e=>(e.n&ee)>0,Q=new WeakMap;let Z=0,ee=1;const te=30;let ne;const re=Symbol(""),ie=Symbol("");class se{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,function(e,t=K){t&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();let e=ne,t=ae;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ne,ne=this,ae=!0,ee=1<<++Z,Z<=te?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ee})(this):oe(this),this.fn()}finally{Z<=te&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];X(i)&&!Y(i)?i.delete(e):t[n++]=i,i.w&=~ee,i.n&=~ee}t.length=n}})(this),ee=1<<--Z,ne=this.parent,ae=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ne===this?this.deferStop=!0:this.active&&(oe(this),this.onStop&&this.onStop(),this.active=!1)}}function oe(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ae=!0;const ce=[];function le(){ce.push(ae),ae=!1}function ue(){const e=ce.pop();ae=void 0===e||e}function de(e,t,n){if(ae&&ne){let t=Q.get(e);t||Q.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=J()),he(r)}}function he(e,t){let n=!1;Z<=te?Y(e)||(e.n|=ee,n=!X(e)):n=!e.has(ne),n&&(e.add(ne),ne.deps.push(e))}function pe(e,t,n,r,i,s){const o=Q.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&h(e)){const e=Number(r);o.forEach(((t,n)=>{("length"===n||!v(n)&&n>=e)&&a.push(t)}))}else switch(void 0!==n&&a.push(o.get(n)),t){case"add":h(e)?S(n)&&a.push(o.get("length")):(a.push(o.get(re)),p(e)&&a.push(o.get(ie)));break;case"delete":h(e)||(a.push(o.get(re)),p(e)&&a.push(o.get(ie)));break;case"set":p(e)&&a.push(o.get(re))}if(1===a.length)a[0]&&fe(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);fe(J(e))}}function fe(e,t){const n=h(e)?e:[...e];for(const r of n)r.computed&&ge(r);for(const r of n)r.computed||ge(r)}function ge(e,t){(e!==ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const me=t("__proto__,__v_isRef,__isVue"),ve=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(v)),ye=_e();function _e(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=st(this);for(let t=0,i=this.length;t<i;t++)de(n,0,t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(st)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){le();const n=st(this)[t].apply(this,e);return ue(),n}})),e}function we(e){const t=st(this);return de(t,0,e),t.hasOwnProperty(e)}class be{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,n){const r=this._isReadonly,i=this._shallow;if("__v_isReactive"===t)return!r;if("__v_isReadonly"===t)return r;if("__v_isShallow"===t)return i;if("__v_raw"===t&&n===(r?i?Ye:Xe:i?Je:Ge).get(e))return e;const s=h(e);if(!r){if(s&&d(ye,t))return Reflect.get(ye,t,n);if("hasOwnProperty"===t)return we}const o=Reflect.get(e,t,n);return(v(t)?ve.has(t):me(t))?o:(r||de(e,0,t),i?o:lt(o)?s&&S(t)?o:o.value:y(o)?r?Ze(o):Qe(o):o)}}class Ie extends be{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t];if(nt(i)&&lt(i)&&!lt(n))return!1;if(!this._shallow&&(rt(n)||nt(n)||(i=st(i),n=st(n)),!h(e)&&lt(i)&&!lt(n)))return i.value=n,!0;const s=h(e)&&S(t)?Number(t)<e.length:d(e,t),o=Reflect.set(e,t,n,r);return e===st(r)&&(s?D(n,i)&&pe(e,"set",t,n):pe(e,"add",t,n)),o}deleteProperty(e,t){const n=d(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&pe(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return v(t)&&ve.has(t)||de(e,0,t),n}ownKeys(e){return de(e,0,h(e)?"length":re),Reflect.ownKeys(e)}}class Te extends be{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Se=new Ie,Ee=new Te,ke=new Ie(!0),Ce=e=>e,Oe=e=>Reflect.getPrototypeOf(e);function Ae(e,t,n=!1,r=!1){const i=st(e=e.__v_raw),s=st(t);n||(D(t,s)&&de(i,0,t),de(i,0,s));const{has:o}=Oe(i),a=r?Ce:n?ct:at;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Pe(e,t=!1){const n=this.__v_raw,r=st(n),i=st(e);return t||(D(e,i)&&de(r,0,e),de(r,0,i)),e===i?n.has(e):n.has(e)||n.has(i)}function Re(e,t=!1){return e=e.__v_raw,!t&&de(st(e),0,re),Reflect.get(e,"size",e)}function Ne(e){e=st(e);const t=st(this);return Oe(t).has.call(t,e)||(t.add(e),pe(t,"add",e,e)),this}function De(e,t){t=st(t);const n=st(this),{has:r,get:i}=Oe(n);let s=r.call(n,e);s||(e=st(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?D(t,o)&&pe(n,"set",e,t):pe(n,"add",e,t),this}function Le(e){const t=st(this),{has:n,get:r}=Oe(t);let i=n.call(t,e);i||(e=st(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&pe(t,"delete",e,void 0),s}function xe(){const e=st(this),t=0!==e.size,n=e.clear();return t&&pe(e,"clear",void 0,void 0),n}function Me(e,t){return function(n,r){const i=this,s=i.__v_raw,o=st(s),a=t?Ce:e?ct:at;return!e&&de(o,0,re),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function Ue(e,t,n){return function(...r){const i=this.__v_raw,s=st(i),o=p(s),a="entries"===e||e===Symbol.iterator&&o,c="keys"===e&&o,l=i[e](...r),u=n?Ce:t?ct:at;return!t&&de(s,0,c?ie:re),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Fe(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function je(){const e={get(e){return Ae(this,e)},get size(){return Re(this)},has:Pe,add:Ne,set:De,delete:Le,clear:xe,forEach:Me(!1,!1)},t={get(e){return Ae(this,e,!1,!0)},get size(){return Re(this)},has:Pe,add:Ne,set:De,delete:Le,clear:xe,forEach:Me(!1,!0)},n={get(e){return Ae(this,e,!0)},get size(){return Re(this,!0)},has(e){return Pe.call(this,e,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Me(!0,!1)},r={get(e){return Ae(this,e,!0,!0)},get size(){return Re(this,!0)},has(e){return Pe.call(this,e,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Me(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((i=>{e[i]=Ue(i,!1,!1),n[i]=Ue(i,!0,!1),t[i]=Ue(i,!1,!0),r[i]=Ue(i,!0,!0)})),[e,n,t,r]}const[Ve,$e,Be,He]=je();function ze(e,t){const n=t?e?He:Be:e?$e:Ve;return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(d(n,r)&&r in t?n:t,r,i)}const We={get:ze(!1,!1)},qe={get:ze(!1,!0)},Ke={get:ze(!0,!1)},Ge=new WeakMap,Je=new WeakMap,Xe=new WeakMap,Ye=new WeakMap;function Qe(e){return nt(e)?e:et(e,!1,Se,We,Ge)}function Ze(e){return et(e,!0,Ee,Ke,Xe)}function et(e,t,n,r,i){if(!y(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=(a=e).__v_skip||!Object.isExtensible(a)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(I(a));var a;if(0===o)return e;const c=new Proxy(e,2===o?r:n);return i.set(e,c),c}function tt(e){return nt(e)?tt(e.__v_raw):!(!e||!e.__v_isReactive)}function nt(e){return!(!e||!e.__v_isReadonly)}function rt(e){return!(!e||!e.__v_isShallow)}function it(e){return tt(e)||nt(e)}function st(e){const t=e&&e.__v_raw;return t?st(t):e}function ot(e){return x(e,"__v_skip",!0),e}const at=e=>y(e)?Qe(e):e,ct=e=>y(e)?Ze(e):e;function lt(e){return!(!e||!0!==e.__v_isRef)}const ut={get:(e,t,n)=>{return lt(r=Reflect.get(e,t,n))?r.value:r;var r},set:(e,t,n,r)=>{const i=e[t];return lt(i)&&!lt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function dt(e){return tt(e)?e:new Proxy(e,ut)}class ht{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new se(e,(()=>{this._dirty||(this._dirty=!0,function(e,t){const n=(e=st(e)).dep;n&&fe(n)}(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=st(this);var t;return t=e,ae&&ne&&he((t=st(t)).dep||(t.dep=J())),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function pt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){gt(s,t,n)}return i}function ft(e,t,n,r){if(g(e)){const i=pt(e,t,n,r);return i&&_(i)&&i.catch((e=>{gt(e,t,n)})),i}const i=[];for(let s=0;s<e.length;s++)i.push(ft(e[s],t,n,r));return i}function gt(e,t,n,r=!0){if(t&&t.vnode,t){let r=t.parent;const i=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void pt(o,null,10,[e,i,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let mt=!1,vt=!1;const yt=[];let _t=0;const wt=[];let bt=null,It=0;const Tt=Promise.resolve();let St=null;function Et(e){const t=St||Tt;return e?t.then(this?e.bind(this):e):t}function kt(e){yt.length&&yt.includes(e,mt&&e.allowRecurse?_t+1:_t)||(null==e.id?yt.push(e):yt.splice(function(e){let t=_t+1,n=yt.length;for(;t<n;){const r=t+n>>>1,i=yt[r],s=Pt(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}(e.id),0,e),Ct())}function Ct(){mt||vt||(vt=!0,St=Tt.then(Nt))}function Ot(e,t=(mt?_t+1:0)){for(;t<yt.length;t++){const e=yt[t];e&&e.pre&&(yt.splice(t,1),t--,e())}}function At(e){if(wt.length){const e=[...new Set(wt)];if(wt.length=0,bt)return void bt.push(...e);for(bt=e,bt.sort(((e,t)=>Pt(e)-Pt(t))),It=0;It<bt.length;It++)bt[It]();bt=null,It=0}}const Pt=e=>null==e.id?1/0:e.id,Rt=(e,t)=>{const n=Pt(e)-Pt(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Nt(e){vt=!1,mt=!0,yt.sort(Rt);try{for(_t=0;_t<yt.length;_t++){const e=yt[_t];e&&!1!==e.active&&pt(e,null,14)}}finally{_t=0,yt.length=0,At(),mt=!1,St=null,(yt.length||wt.length)&&Nt()}}function Dt(e,t,...r){if(e.isUnmounted)return;const i=e.vnode.props||n;let s=r;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in i){const e=`${"modelValue"===a?"model":a}Modifiers`,{number:t,trim:o}=i[e]||n;o&&(s=r.map((e=>m(e)?e.trim():e))),t&&(s=r.map(M))}let c,l=i[c=N(t)]||i[c=N(O(t))];!l&&o&&(l=i[c=N(P(t))]),l&&ft(l,e,6,s);const u=i[c+"Once"];if(u){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,ft(u,e,6,s)}}function Lt(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let o={},a=!1;if(!g(e)){const r=e=>{const n=Lt(e,t,!0);n&&(a=!0,c(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||a?(h(s)?s.forEach((e=>o[e]=null)):c(o,s),y(e)&&r.set(e,o),o):(y(e)&&r.set(e,null),null)}function xt(e,t){return!(!e||!o(t))&&(t=t.slice(2).replace(/Once$/,""),d(e,t[0].toLowerCase()+t.slice(1))||d(e,P(t))||d(e,t))}let Mt=null,Ut=null;function Ft(e){const t=Mt;return Mt=e,Ut=e&&e.type.__scopeId||null,t}function jt(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:c,attrs:l,emit:u,render:d,renderCache:h,data:p,setupState:f,ctx:g,inheritAttrs:m}=e;let v,y;const _=Ft(e);try{if(4&n.shapeFlag){const e=i||r,t=e;v=br(d.call(t,e,h,s,f,p,g)),y=l}else{const e=t;v=br(e.length>1?e(s,{attrs:l,slots:c,emit:u}):e(s,null)),y=t.props?l:Vt(l)}}catch(b){cr.length=0,gt(b,e,1),v=yr(or)}let w=v;if(y&&!1!==m){const e=Object.keys(y),{shapeFlag:t}=w;e.length&&7&t&&(o&&e.some(a)&&(y=$t(y,o)),w=_r(w,y))}return n.dirs&&(w=_r(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),v=w,Ft(_),v}const Vt=e=>{let t;for(const n in e)("class"===n||"style"===n||o(n))&&((t||(t={}))[n]=e[n]);return t},$t=(e,t)=>{const n={};for(const r in e)a(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Bt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!xt(n,s))return!0}return!1}const Ht=Symbol.for("v-ndc"),zt={};function Wt(e,t,n){return qt(e,t,n)}function qt(e,t,{immediate:r,deep:s,flush:o,onTrack:a,onTrigger:c}=n){var u;const d=K===(null==(u=Ar)?void 0:u.scope)?Ar:null;let p,f,m=!1,v=!1;if(lt(e)?(p=()=>e.value,m=rt(e)):tt(e)?(p=()=>e,s=!0):h(e)?(v=!0,m=e.some((e=>tt(e)||rt(e))),p=()=>e.map((e=>lt(e)?e.value:tt(e)?Jt(e):g(e)?pt(e,d,2):void 0))):p=g(e)?t?()=>pt(e,d,2):()=>{if(!d||!d.isUnmounted)return f&&f(),ft(e,d,3,[_])}:i,t&&s){const e=p;p=()=>Jt(e())}let y,_=e=>{f=T.onStop=()=>{pt(e,d,4),f=T.onStop=void 0}};if(xr){if(_=i,t?r&&ft(t,d,3,[p(),v?[]:void 0,_]):p(),"sync"!==o)return i;{const e=$r();y=e.__watcherHandles||(e.__watcherHandles=[])}}let w=v?new Array(e.length).fill(zt):zt;const b=()=>{if(T.active)if(t){const e=T.run();(s||m||(v?e.some(((e,t)=>D(e,w[t]))):D(e,w)))&&(f&&f(),ft(t,d,3,[e,w===zt?void 0:v&&w[0]===zt?[]:w,_]),w=e)}else T.run()};let I;b.allowRecurse=!!t,"sync"===o?I=b:"post"===o?I=()=>er(b,d&&d.suspense):(b.pre=!0,d&&(b.id=d.uid),I=()=>kt(b));const T=new se(p,I);t?r?b():w=T.run():"post"===o?er(T.run.bind(T),d&&d.suspense):T.run();const S=()=>{T.stop(),d&&d.scope&&l(d.scope.effects,T)};return y&&y.push(S),S}function Kt(e,t,n){const r=this.proxy,i=m(e)?e.includes(".")?Gt(r,e):()=>r[e]:e.bind(r,r);let s;g(t)?s=t:(s=t.handler,n=t);const o=Ar;Rr(this);const a=qt(i,s.bind(r),n);return o?Rr(o):Nr(),a}function Gt(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Jt(e,t){if(!y(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),lt(e))Jt(e.value,t);else if(h(e))for(let n=0;n<e.length;n++)Jt(e[n],t);else if(f(e)||p(e))e.forEach((e=>{Jt(e,t)}));else if(T(e))for(const n in e)Jt(e[n],t);return e}function Xt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(le(),ft(c,n,8,[e.el,a,e,t]),ue())}}const Yt=e=>!!e.type.__asyncLoader,Qt=e=>e.type.__isKeepAlive;function Zt(e,t){tn(e,"a",t)}function en(e,t){tn(e,"da",t)}function tn(e,t,n=Ar){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(rn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Qt(e.parent.vnode)&&nn(r,t,n,e),e=e.parent}}function nn(e,t,n,r){const i=rn(t,e,r,!0);dn((()=>{l(r[t],i)}),n)}function rn(e,t,n=Ar,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;le(),Rr(n);const i=ft(t,n,e,r);return Nr(),ue(),i});return r?i.unshift(s):i.push(s),s}}const sn=e=>(t,n=Ar)=>(!xr||"sp"===e)&&rn(e,((...e)=>t(...e)),n),on=sn("bm"),an=sn("m"),cn=sn("bu"),ln=sn("u"),un=sn("bum"),dn=sn("um"),hn=sn("sp"),pn=sn("rtg"),fn=sn("rtc");function gn(e,t=Ar){rn("ec",e,t)}const mn=e=>e?Dr(e)?Fr(e)||e.proxy:mn(e.parent):null,vn=c(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>mn(e.parent),$root:e=>mn(e.root),$emit:e=>e.emit,$options:e=>En(e),$forceUpdate:e=>e.f||(e.f=()=>kt(e.update)),$nextTick:e=>e.n||(e.n=Et.bind(e.proxy)),$watch:e=>Kt.bind(e)}),yn=(e,t)=>e!==n&&!e.__isScriptSetup&&d(e,t),_n={get({_:e},t){const{ctx:r,setupState:i,data:s,props:o,accessCache:a,type:c,appContext:l}=e;let u;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return i[t];case 2:return s[t];case 4:return r[t];case 3:return o[t]}else{if(yn(i,t))return a[t]=1,i[t];if(s!==n&&d(s,t))return a[t]=2,s[t];if((u=e.propsOptions[0])&&d(u,t))return a[t]=3,o[t];if(r!==n&&d(r,t))return a[t]=4,r[t];bn&&(a[t]=0)}}const h=vn[t];let p,f;return h?("$attrs"===t&&de(e,0,t),h(e)):(p=c.__cssModules)&&(p=p[t])?p:r!==n&&d(r,t)?(a[t]=4,r[t]):(f=l.config.globalProperties,d(f,t)?f[t]:void 0)},set({_:e},t,r){const{data:i,setupState:s,ctx:o}=e;return yn(s,t)?(s[t]=r,!0):i!==n&&d(i,t)?(i[t]=r,!0):!(d(e.props,t)||"$"===t[0]&&t.slice(1)in e||(o[t]=r,0))},has({_:{data:e,setupState:t,accessCache:r,ctx:i,appContext:s,propsOptions:o}},a){let c;return!!r[a]||e!==n&&d(e,a)||yn(t,a)||(c=o[0])&&d(c,a)||d(i,a)||d(vn,a)||d(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:d(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function wn(e){return h(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let bn=!0;function In(e){const t=En(e),n=e.proxy,r=e.ctx;bn=!1,t.beforeCreate&&Tn(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:a,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:f,beforeUpdate:m,updated:v,activated:_,deactivated:w,beforeDestroy:b,beforeUnmount:I,destroyed:T,unmounted:S,render:E,renderTracked:k,renderTriggered:C,errorCaptured:O,serverPrefetch:A,expose:P,inheritAttrs:R,components:N,directives:D,filters:L}=t;if(u&&function(e,t,n=i){h(e)&&(e=An(e));for(const r in e){const n=e[r];let i;i=y(n)?"default"in n?Un(n.from||r,n.default,!0):Un(n.from||r):Un(n),lt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[r]=i}}(u,r,null),a)for(const i in a){const e=a[i];g(e)&&(r[i]=e.bind(n))}if(s){const t=s.call(n,n);y(t)&&(e.data=Qe(t))}if(bn=!0,o)for(const h in o){const e=o[h],t=g(e)?e.bind(n,n):g(e.get)?e.get.bind(n,n):i,s=!g(e)&&g(e.set)?e.set.bind(n):i,a=jr({get:t,set:s});Object.defineProperty(r,h,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const i in c)Sn(c[i],r,n,i);if(l){const e=g(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{!function(e,t){if(Ar){let n=Ar.provides;const r=Ar.parent&&Ar.parent.provides;r===n&&(n=Ar.provides=Object.create(r)),n[e]=t}}(t,e[t])}))}function x(e,t){h(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Tn(d,e,"c"),x(on,p),x(an,f),x(cn,m),x(ln,v),x(Zt,_),x(en,w),x(gn,O),x(fn,k),x(pn,C),x(un,I),x(dn,S),x(hn,A),h(P))if(P.length){const t=e.exposed||(e.exposed={});P.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i&&(e.render=E),null!=R&&(e.inheritAttrs=R),N&&(e.components=N),D&&(e.directives=D)}function Tn(e,t,n){ft(h(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Sn(e,t,n,r){const i=r.includes(".")?Gt(n,r):()=>n[r];if(m(e)){const n=t[e];g(n)&&Wt(i,n)}else if(g(e))Wt(i,e.bind(n));else if(y(e))if(h(e))e.forEach((e=>Sn(e,t,n,r)));else{const r=g(e.handler)?e.handler.bind(n):t[e.handler];g(r)&&Wt(i,r,e)}}function En(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>kn(c,e,o,!0))),kn(c,t,o)):c=t,y(t)&&s.set(t,c),c}function kn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&kn(e,s,n,!0),i&&i.forEach((t=>kn(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Cn[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Cn={data:On,props:Nn,emits:Nn,methods:Rn,computed:Rn,beforeCreate:Pn,created:Pn,beforeMount:Pn,mounted:Pn,beforeUpdate:Pn,updated:Pn,beforeDestroy:Pn,beforeUnmount:Pn,destroyed:Pn,unmounted:Pn,activated:Pn,deactivated:Pn,errorCaptured:Pn,serverPrefetch:Pn,components:Rn,directives:Rn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=c(Object.create(null),e);for(const r in t)n[r]=Pn(e[r],t[r]);return n},provide:On,inject:function(e,t){return Rn(An(e),An(t))}};function On(e,t){return t?e?function(){return c(g(e)?e.call(this,this):e,g(t)?t.call(this,this):t)}:t:e}function An(e){if(h(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Pn(e,t){return e?[...new Set([].concat(e,t))]:t}function Rn(e,t){return e?c(Object.create(null),e,t):t}function Nn(e,t){return e?h(e)&&h(t)?[...new Set([...e,...t])]:c(Object.create(null),wn(e),wn(null!=t?t:{})):t}function Dn(){return{app:null,config:{isNativeTag:s,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ln=0;function xn(e,t){return function(n,r=null){g(n)||(n=c({},n)),null==r||y(r)||(r=null);const i=Dn(),s=new WeakSet;let o=!1;const a=i.app={_uid:Ln++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Br,get config(){return i.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&g(e.install)?(s.add(e),e.install(a,...t)):g(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(i.mixins.includes(e)||i.mixins.push(e),a),component:(e,t)=>t?(i.components[e]=t,a):i.components[e],directive:(e,t)=>t?(i.directives[e]=t,a):i.directives[e],mount(s,c,l){if(!o){const u=yr(n,r);return u.appContext=i,c&&t?t(u,s):e(u,s,l),o=!0,a._container=s,s.__vue_app__=a,Fr(u.component)||u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(i.provides[e]=t,a),runWithContext(e){Mn=a;try{return e()}finally{Mn=null}}};return a}}let Mn=null;function Un(e,t,n=!1){const r=Ar||Mt;if(r||Mn){const i=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Mn._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&g(t)?t.call(r&&r.proxy):t}}function Fn(e,t,n,r=!1){const i={},s={};x(s,fr,1),e.propsDefaults=Object.create(null),jn(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:et(i,!1,ke,qe,Je):e.type.props?e.props=i:e.props=s,e.attrs=s}function jn(e,t,r,i){const[s,o]=e.propsOptions;let a,c=!1;if(t)for(let n in t){if(E(n))continue;const l=t[n];let u;s&&d(s,u=O(n))?o&&o.includes(u)?(a||(a={}))[u]=l:r[u]=l:xt(e.emitsOptions,n)||n in i&&l===i[n]||(i[n]=l,c=!0)}if(o){const t=st(r),i=a||n;for(let n=0;n<o.length;n++){const a=o[n];r[a]=Vn(s,t,a,i[a],e,!d(i,a))}}return c}function Vn(e,t,n,r,i,s){const o=e[n];if(null!=o){const e=d(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&!o.skipFactory&&g(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(Rr(i),r=s[n]=e.call(null,t),Nr())}else r=e}o[0]&&(s&&!e?r=!1:!o[1]||""!==r&&r!==P(n)||(r=!0))}return r}function $n(e,t,i=!1){const s=t.propsCache,o=s.get(e);if(o)return o;const a=e.props,l={},u=[];let p=!1;if(!g(e)){const n=e=>{p=!0;const[n,r]=$n(e,t,!0);c(l,n),r&&u.push(...r)};!i&&t.mixins.length&&t.mixins.forEach(n),e.extends&&n(e.extends),e.mixins&&e.mixins.forEach(n)}if(!a&&!p)return y(e)&&s.set(e,r),r;if(h(a))for(let r=0;r<a.length;r++){const e=O(a[r]);Bn(e)&&(l[e]=n)}else if(a)for(const n in a){const e=O(n);if(Bn(e)){const t=a[n],r=l[e]=h(t)||g(t)?{type:t}:c({},t);if(r){const t=Wn(Boolean,r.type),n=Wn(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||d(r,"default"))&&u.push(e)}}}const f=[l,u];return y(e)&&s.set(e,f),f}function Bn(e){return"$"!==e[0]}function Hn(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:null===e?"null":""}function zn(e,t){return Hn(e)===Hn(t)}function Wn(e,t){return h(t)?t.findIndex((t=>zn(t,e))):g(t)&&zn(t,e)?0:-1}const qn=e=>"_"===e[0]||"$stable"===e,Kn=e=>h(e)?e.map(br):[br(e)],Gn=(e,t,n)=>{if(t._n)return t;const r=function(e,t=Mt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&dr(-1);const i=Ft(t);let s;try{s=e(...n)}finally{Ft(i),r._d&&dr(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}(((...e)=>Kn(t(...e))),n);return r._c=!1,r},Jn=(e,t,n)=>{const r=e._ctx;for(const i in e){if(qn(i))continue;const n=e[i];if(g(n))t[i]=Gn(0,n,r);else if(null!=n){const e=Kn(n);t[i]=()=>e}}},Xn=(e,t)=>{const n=Kn(t);e.slots.default=()=>n},Yn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=st(t),x(t,"_",n)):Jn(t,e.slots={})}else e.slots={},t&&Xn(e,t);x(e.slots,fr,1)},Qn=(e,t,r)=>{const{vnode:i,slots:s}=e;let o=!0,a=n;if(32&i.shapeFlag){const e=t._;e?r&&1===e?o=!1:(c(s,t),r||1!==e||delete s._):(o=!t.$stable,Jn(t,s)),a=t}else t&&(Xn(e,t),a={default:1});if(o)for(const n in s)qn(n)||null!=a[n]||delete s[n]};function Zn(e,t,r,i,s=!1){if(h(e))return void e.forEach(((e,n)=>Zn(e,t&&(h(t)?t[n]:t),r,i,s)));if(Yt(i)&&!s)return;const o=4&i.shapeFlag?Fr(i.component)||i.component.proxy:i.el,a=s?null:o,{i:c,r:u}=e,p=t&&t.r,f=c.refs===n?c.refs={}:c.refs,v=c.setupState;if(null!=p&&p!==u&&(m(p)?(f[p]=null,d(v,p)&&(v[p]=null)):lt(p)&&(p.value=null)),g(u))pt(u,c,12,[a,f]);else{const t=m(u),n=lt(u);if(t||n){const i=()=>{if(e.f){const n=t?d(v,u)?v[u]:f[u]:u.value;s?h(n)&&l(n,o):h(n)?n.includes(o)||n.push(o):t?(f[u]=[o],d(v,u)&&(v[u]=f[u])):(u.value=[o],e.k&&(f[e.k]=u.value))}else t?(f[u]=a,d(v,u)&&(v[u]=a)):n&&(u.value=a,e.k&&(f[e.k]=a))};a?(i.id=-1,er(i,r)):i()}}}const er=function(e,t){var n;t&&t.pendingBranch?h(e)?t.effects.push(...e):t.effects.push(e):(h(n=e)?wt.push(...n):bt&&bt.includes(n,n.allowRecurse?It+1:It)||wt.push(n),Ct())};function tr(e){return function(e,t){F().__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:p,parentNode:f,nextSibling:g,setScopeId:m=i,insertStaticContent:v}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!pr(e,t)&&(r=Z(e),K(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:d}=t;switch(l){case sr:w(e,t,n,r);break;case or:b(e,t,n,r);break;case ar:null==e&&I(t,n,r,o);break;case ir:M(e,t,n,r,i,s,o,a,c);break;default:1&d?k(e,t,n,r,i,s,o,a,c):6&d?U(e,t,n,r,i,s,o,a,c):(64&d||128&d)&&l.process(e,t,n,r,i,s,o,a,c,te)}null!=u&&i&&Zn(u,e&&e.ref,s,t||e,!t)},w=(e,t,n,r)=>{if(null==e)s(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},I=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r,e.el,e.anchor)},T=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=g(e),s(e,n,r),e=i;s(t,n,r)},S=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=g(e),o(e),e=n;o(t)},k=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?C(t,n,r,i,s,o,a,c):N(e,t,i,s,o,a,c)},C=(e,t,n,r,i,o,l,u)=>{let d,h;const{type:f,props:g,shapeFlag:m,transition:v,dirs:y}=e;if(d=e.el=c(e.type,o,g&&g.is,g),8&m?p(d,e.children):16&m&&R(e.children,d,null,r,i,o&&"foreignObject"!==f,l,u),y&&Xt(e,null,r,"created"),A(d,e,e.scopeId,l,r),g){for(const t in g)"value"===t||E(t)||a(d,t,null,g[t],o,e.children,r,i,Q);"value"in g&&a(d,"value",null,g.value),(h=g.onVnodeBeforeMount)&&Sr(h,r,e)}y&&Xt(e,null,r,"beforeMount");const _=function(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}(i,v);_&&v.beforeEnter(d),s(d,t,n),((h=g&&g.onVnodeMounted)||_||y)&&er((()=>{h&&Sr(h,r,e),_&&v.enter(d),y&&Xt(e,null,r,"mounted")}),i)},A=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i&&t===i.subTree){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}},R=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?Ir(e[l]):br(e[l]);y(null,c,t,n,r,i,s,o,a)}},N=(e,t,r,i,s,o,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:d,dirs:h}=t;u|=16&e.patchFlag;const f=e.props||n,g=t.props||n;let m;r&&nr(r,!1),(m=g.onVnodeBeforeUpdate)&&Sr(m,r,t,e),h&&Xt(t,e,r,"beforeUpdate"),r&&nr(r,!0);const v=s&&"foreignObject"!==t.type;if(d?D(e.dynamicChildren,d,l,r,i,v,o):c||H(e,t,l,null,r,i,v,o,!1),u>0){if(16&u)x(l,t,f,g,r,i,s);else if(2&u&&f.class!==g.class&&a(l,"class",null,g.class,s),4&u&&a(l,"style",f.style,g.style,s),8&u){const n=t.dynamicProps;for(let t=0;t<n.length;t++){const o=n[t],c=f[o],u=g[o];u===c&&"value"!==o||a(l,o,c,u,s,e.children,r,i,Q)}}1&u&&e.children!==t.children&&p(l,t.children)}else c||null!=d||x(l,t,f,g,r,i,s);((m=g.onVnodeUpdated)||h)&&er((()=>{m&&Sr(m,r,t,e),h&&Xt(t,e,r,"updated")}),i)},D=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===ir||!pr(c,l)||70&c.shapeFlag)?f(c.el):n;y(c,l,u,null,r,i,s,o,!0)}},x=(e,t,r,i,s,o,c)=>{if(r!==i){if(r!==n)for(const n in r)E(n)||n in i||a(e,n,r[n],null,c,t.children,s,o,Q);for(const n in i){if(E(n))continue;const l=i[n],u=r[n];l!==u&&"value"!==n&&a(e,n,u,l,c,t.children,s,o,Q)}"value"in i&&a(e,"value",r.value,i.value)}},M=(e,t,n,r,i,o,a,c,u)=>{const d=t.el=e?e.el:l(""),h=t.anchor=e?e.anchor:l("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(d,n,r),s(h,n,r),R(t.children,n,h,i,o,a,c,u)):p>0&&64&p&&f&&e.dynamicChildren?(D(e.dynamicChildren,f,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&rr(e,t,!0)):H(e,t,n,h,i,o,a,c,u)},U=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):j(t,n,r,i,s,o,c):V(e,t,c)},j=(e,t,r,i,s,o,a)=>{const c=e.component=function(e,t,r){const i=e.type,s=(t?t.appContext:e.appContext)||Er,o={uid:Or++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new G(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$n(i,s),emitsOptions:Lt(i,s),emit:null,emitted:null,propsDefaults:n,inheritAttrs:i.inheritAttrs,ctx:n,data:n,props:n,attrs:n,slots:n,refs:n,setupState:n,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Dt.bind(null,o),e.ce&&e.ce(o),o}(e,i,s);if(Qt(e)&&(c.ctx.renderer=te),function(e,t=!1){xr=t;const{props:n,children:r}=e.vnode,i=Dr(e);Fn(e,n,i,t),Yn(e,r);i&&function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ot(new Proxy(e.ctx,_n));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return function(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get:(t,n)=>(de(e,0,"$attrs"),t[n])}))}(e)},slots:e.slots,emit:e.emit,expose:t}}(e):null;Rr(e),le();const i=pt(r,e,0,[e.props,n]);if(ue(),Nr(),_(i)){if(i.then(Nr,Nr),t)return i.then((n=>{Mr(e,n,t)})).catch((t=>{gt(t,e,0)}));e.asyncDep=i}else Mr(e,i,t)}else Ur(e,t)}(e,t);xr=!1}(c),c.asyncDep){if(s&&s.registerDep(c,$),!e.el){const e=c.subTree=yr(or);b(null,e,t,r)}}else $(c,e,t,r,s,o,a)},V=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Bt(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Bt(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!xt(l,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,function(e){const t=yt.indexOf(e);t>_t&&yt.splice(t,1)}(r.update),r.update()}else t.el=e.el,r.vnode=t},$=(e,t,n,r,i,s,o)=>{const a=()=>{if(e.isMounted){let t,{next:n,bu:r,u:a,parent:c,vnode:l}=e,u=n;nr(e,!1),n?(n.el=l.el,B(e,n,o)):n=l,r&&L(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Sr(t,c,n,l),nr(e,!0);const d=jt(e),h=e.subTree;e.subTree=d,y(h,d,f(h.el),Z(h),e,i,s),n.el=d.el,null===u&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,d.el),a&&er(a,i),(t=n.props&&n.props.onVnodeUpdated)&&er((()=>Sr(t,c,n,l)),i)}else{let o;const{el:a,props:c}=t,{bm:l,m:u,parent:d}=e,h=Yt(t);if(nr(e,!1),l&&L(l),!h&&(o=c&&c.onVnodeBeforeMount)&&Sr(o,d,t),nr(e,!0),a&&re){const n=()=>{e.subTree=jt(e),re(a,e.subTree,e,i,null)};h?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=jt(e);y(null,o,n,r,e,i,s),t.el=o.el}if(u&&er(u,i),!h&&(o=c&&c.onVnodeMounted)){const e=t;er((()=>Sr(o,d,e)),i)}(256&t.shapeFlag||d&&Yt(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&er(e.a,i),e.isMounted=!0,t=n=r=null}},c=e.effect=new se(a,(()=>kt(l)),e.scope),l=e.update=()=>c.run();l.id=e.uid,nr(e,!0),l()},B=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=st(i),[c]=e.propsOptions;let l=!1;if(!(r||o>0)||16&o){let r;jn(e,t,i,s)&&(l=!0);for(const s in a)t&&(d(t,s)||(r=P(s))!==s&&d(t,r))||(c?!n||void 0===n[s]&&void 0===n[r]||(i[s]=Vn(c,a,s,void 0,e,!0)):delete i[s]);if(s!==a)for(const e in s)t&&d(t,e)||(delete s[e],l=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(xt(e.emitsOptions,o))continue;const u=t[o];if(c)if(d(s,o))u!==s[o]&&(s[o]=u,l=!0);else{const t=O(o);i[t]=Vn(c,a,t,u,e,!1)}else u!==s[o]&&(s[o]=u,l=!0)}}l&&pe(e,"set","$attrs")}(e,t.props,r,n),Qn(e,t.children,n),le(),Ot(),ue()},H=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:h,shapeFlag:f}=t;if(h>0){if(128&h)return void W(l,d,n,r,i,s,o,a,c);if(256&h)return void z(l,d,n,r,i,s,o,a,c)}8&f?(16&u&&Q(l,i,s),d!==l&&p(n,d)):16&u?16&f?W(l,d,n,r,i,s,o,a,c):Q(l,i,s,!0):(8&u&&p(n,""),16&f&&R(d,n,r,i,s,o,a,c))},z=(e,t,n,i,s,o,a,c,l)=>{t=t||r;const u=(e=e||r).length,d=t.length,h=Math.min(u,d);let p;for(p=0;p<h;p++){const r=t[p]=l?Ir(t[p]):br(t[p]);y(e[p],r,n,null,s,o,a,c,l)}u>d?Q(e,s,o,!0,!1,h):R(t,n,i,s,o,a,c,l,h)},W=(e,t,n,i,s,o,a,c,l)=>{let u=0;const d=t.length;let h=e.length-1,p=d-1;for(;u<=h&&u<=p;){const r=e[u],i=t[u]=l?Ir(t[u]):br(t[u]);if(!pr(r,i))break;y(r,i,n,null,s,o,a,c,l),u++}for(;u<=h&&u<=p;){const r=e[h],i=t[p]=l?Ir(t[p]):br(t[p]);if(!pr(r,i))break;y(r,i,n,null,s,o,a,c,l),h--,p--}if(u>h){if(u<=p){const e=p+1,r=e<d?t[e].el:i;for(;u<=p;)y(null,t[u]=l?Ir(t[u]):br(t[u]),n,r,s,o,a,c,l),u++}}else if(u>p)for(;u<=h;)K(e[u],s,o,!0),u++;else{const f=u,g=u,m=new Map;for(u=g;u<=p;u++){const e=t[u]=l?Ir(t[u]):br(t[u]);null!=e.key&&m.set(e.key,u)}let v,_=0;const w=p-g+1;let b=!1,I=0;const T=new Array(w);for(u=0;u<w;u++)T[u]=0;for(u=f;u<=h;u++){const r=e[u];if(_>=w){K(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=p;v++)if(0===T[v-g]&&pr(r,t[v])){i=v;break}void 0===i?K(r,s,o,!0):(T[i-g]=u+1,i>=I?I=i:b=!0,y(r,t[i],n,null,s,o,a,c,l),_++)}const S=b?function(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}(T):r;for(v=S.length-1,u=w-1;u>=0;u--){const e=g+u,r=t[e],h=e+1<d?t[e+1].el:i;0===T[u]?y(null,r,n,h,s,o,a,c,l):b&&(v<0||u!==S[v]?q(r,n,h,2):v--)}}},q=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)q(e.component.subTree,t,n,r);else if(128&u)e.suspense.move(t,n,r);else if(64&u)a.move(e,t,n,te);else if(a!==ir)if(a!==ar)if(2!==r&&1&u&&c)if(0===r)c.beforeEnter(o),s(o,t,n),er((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),l=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,l):l()}else s(o,t,n);else T(e,t,n);else{s(o,t,n);for(let e=0;e<l.length;e++)q(l[e],t,n,r);s(e.anchor,t,n)}},K=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:h}=e;if(null!=a&&Zn(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&h,f=!Yt(e);let g;if(f&&(g=o&&o.onVnodeBeforeUnmount)&&Sr(g,t,e),6&u)Y(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&Xt(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,te,r):l&&(s!==ir||d>0&&64&d)?Q(l,t,n,!1,!0):(s===ir&&384&d||!i&&16&u)&&Q(c,t,n),r&&J(e)}(f&&(g=o&&o.onVnodeUnmounted)||p)&&er((()=>{g&&Sr(g,t,e),p&&Xt(e,null,t,"unmounted")}),n)},J=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===ir)return void X(n,r);if(t===ar)return void S(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},X=(e,t)=>{let n;for(;e!==t;)n=g(e),o(e),e=n;o(t)},Y=(e,t,n)=>{const{bum:r,scope:i,update:s,subTree:o,um:a}=e;r&&L(r),i.stop(),s&&(s.active=!1,K(o,e,t,n)),a&&er(a,t),er((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Q=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)K(e[o],t,n,r,i)},Z=e=>6&e.shapeFlag?Z(e.component.subTree):128&e.shapeFlag?e.suspense.next():g(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),Ot(),At(),t._vnode=e},te={p:y,um:K,m:q,r:J,mt:j,mc:R,pc:H,pbc:D,n:Z,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:xn(ee,ne)}}(e)}function nr({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function rr(e,t,n=!1){const r=e.children,i=t.children;if(h(r)&&h(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=Ir(i[s]),t.el=e.el),n||rr(e,t)),t.type===sr&&(t.el=e.el)}}const ir=Symbol.for("v-fgt"),sr=Symbol.for("v-txt"),or=Symbol.for("v-cmt"),ar=Symbol.for("v-stc"),cr=[];let lr=null,ur=1;function dr(e){ur+=e}function hr(e){return e.dynamicChildren=ur>0?lr||r:null,cr.pop(),lr=cr[cr.length-1]||null,ur>0&&lr&&lr.push(e),e}function pr(e,t){return e.type===t.type&&e.key===t.key}const fr="__vInternal",gr=({key:e})=>null!=e?e:null,mr=({ref:e,ref_key:t,ref_for:n})=>("number"==typeof e&&(e=""+e),null!=e?m(e)||lt(e)||g(e)?{i:Mt,r:e,k:t,f:!!n}:e:null);function vr(e,t=null,n=null,r=0,i=null,s=(e===ir?0:1),o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&gr(t),ref:t&&mr(t),scopeId:Ut,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Mt};return a?(Tr(c,n),128&s&&e.normalize(c)):n&&(c.shapeFlag|=m(n)?8:16),ur>0&&!o&&lr&&(c.patchFlag>0||6&s)&&32!==c.patchFlag&&lr.push(c),c}const yr=function(e,t=null,n=null,r=0,i=null,s=!1){if(e&&e!==Ht||(e=or),(o=e)&&!0===o.__v_isVNode){const r=_r(e,t,!0);return n&&Tr(r,n),ur>0&&!s&&lr&&(6&r.shapeFlag?lr[lr.indexOf(e)]=r:lr.push(r)),r.patchFlag|=-2,r}var o;if(function(e){return g(e)&&"__vccOpts"in e}(e)&&(e=e.__vccOpts),t){t=function(e){return e?it(e)||fr in e?c({},e):e:null}(t);let{class:e,style:n}=t;e&&!m(e)&&(t.class=z(e)),y(n)&&(it(n)&&!h(n)&&(n=c({},n)),t.style=j(n))}const a=m(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:y(e)?4:g(e)?2:0;return vr(e,t,n,r,i,a,s,!0)};function _r(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,c=t?function(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=z([t.class,r.class]));else if("style"===e)t.style=j([t.style,r.style]);else if(o(e)){const n=t[e],i=r[e];!i||n===i||h(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&gr(c),ref:t&&t.ref?n&&i?h(i)?i.concat(mr(t)):[i,mr(t)]:mr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ir?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_r(e.ssContent),ssFallback:e.ssFallback&&_r(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function wr(e=" ",t=0){return yr(sr,null,e,t)}function br(e){return null==e||"boolean"==typeof e?yr(or):h(e)?yr(ir,null,e.slice()):"object"==typeof e?Ir(e):yr(sr,null,String(e))}function Ir(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:_r(e)}function Tr(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(h(t))n=16;else if("object"==typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Tr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||fr in t?3===r&&Mt&&(1===Mt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Mt}}else g(t)?(t={default:t,_ctx:Mt},n=32):(t=String(t),64&r?(n=16,t=[wr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Sr(e,t,n,r=null){ft(e,t,7,[n,r])}const Er=Dn();let kr,Cr,Or=0,Ar=null,Pr="__VUE_INSTANCE_SETTERS__";(Cr=F()[Pr])||(Cr=F()[Pr]=[]),Cr.push((e=>Ar=e)),kr=e=>{Cr.length>1?Cr.forEach((t=>t(e))):Cr[0](e)};const Rr=e=>{kr(e),e.scope.on()},Nr=()=>{Ar&&Ar.scope.off(),kr(null)};function Dr(e){return 4&e.vnode.shapeFlag}let Lr,xr=!1;function Mr(e,t,n){g(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:y(t)&&(e.setupState=dt(t)),Ur(e,n)}function Ur(e,t,n){const r=e.type;if(!e.render){if(!t&&Lr&&!r.render){const t=r.template||En(e).template;if(t){const{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:s,compilerOptions:o}=r,a=c(c({isCustomElement:n,delimiters:s},i),o);r.render=Lr(t,a)}}e.render=r.render||i}Rr(e),le();try{In(e)}finally{ue(),Nr()}}function Fr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(dt(ot(e.exposed)),{get:(t,n)=>n in t?t[n]:n in vn?vn[n](e):void 0,has:(e,t)=>t in e||t in vn}))}const jr=(e,t)=>function(e,t,n=!1){let r,s;const o=g(e);return o?(r=e,s=i):(r=e.get,s=e.set),new ht(r,s,o||!s,n)}(e,0,xr),Vr=Symbol.for("v-scx"),$r=()=>Un(Vr),Br="3.3.10",Hr="undefined"!=typeof document?document:null,zr=Hr&&Hr.createElement("template"),Wr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Hr.createElementNS("http://www.w3.org/2000/svg",e):Hr.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>Hr.createTextNode(e),createComment:e=>Hr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Hr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==s&&(i=i.nextSibling););else{zr.innerHTML=r?`<svg>${e}</svg>`:e;const i=zr.content;if(r){const e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},qr=Symbol("_vtc"),Kr=Symbol("_vod"),Gr=/\s*!important$/;function Jr(e,t,n){if(h(n))n.forEach((n=>Jr(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=Yr[t];if(n)return n;let r=O(t);if("filter"!==r&&r in e)return Yr[t]=r;r=R(r);for(let i=0;i<Xr.length;i++){const n=Xr[i]+r;if(n in e)return Yr[t]=n}return t}(e,t);Gr.test(n)?e.setProperty(P(r),n.replace(Gr,""),"important"):e[r]=n}}const Xr=["Webkit","Moz","ms"],Yr={},Qr="http://www.w3.org/1999/xlink",Zr=Symbol("_vei");function ei(e,t,n,r,i=null){const s=e[Zr]||(e[Zr]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(ti.test(e)){let n;for(t={};n=e.match(ti);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):P(e.slice(2));return[n,t]}(t);if(r){const o=s[t]=function(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();ft(function(e,t){if(h(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=ii(),n}(r,i);!function(e,t,n,r){e.addEventListener(t,n,r)}(e,n,o,a)}else o&&(function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),s[t]=void 0)}}const ti=/(?:Once|Passive|Capture)$/;let ni=0;const ri=Promise.resolve(),ii=()=>ni||(ri.then((()=>ni=0)),ni=Date.now()),si=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,oi=c({patchProp:(e,t,n,r,i=!1,s,c,l,u)=>{"class"===t?function(e,t,n){const r=e[qr];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,r,i):"style"===t?function(e,t,n){const r=e.style,i=m(n);if(n&&!i){if(t&&!m(t))for(const e in t)null==n[e]&&Jr(r,e,"");for(const e in n)Jr(r,e,n[e])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Kr in e&&(r.display=s)}}(e,n,r):o(t)?a(t)||ei(e,t,0,r,c):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):function(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&si(t)&&g(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;return!("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)}return(!si(t)||!m(n))&&t in e}(e,t,r,i))?function(e,t,n,r,i,s,o){if("innerHTML"===t||"textContent"===t)return r&&o(r,i,s),void(e[t]=null==n?"":n);const a=e.tagName;if("value"===t&&"PROGRESS"!==a&&!a.includes("-")){e._value=n;const r=null==n?"":n;return("OPTION"===a?e.getAttribute("value"):e.value)!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=q(n):null==n&&"string"===r?(n="",c=!0):"number"===r&&(n=0,c=!0)}try{e[t]=n}catch(l){}c&&e.removeAttribute(t)}(e,t,r,s,c,l,u):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),function(e,t,n,r,i){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Qr,t.slice(6,t.length)):e.setAttributeNS(Qr,t,n);else{const r=W(t);null==n||r&&!q(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}(e,t,r,i))}},Wr);let ai;const ci=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},li={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let d=(15&o)<<2|c>>6,h=63&c;a||(h=64,s||(d=64)),r.push(n[l],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ci(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const o=i<e.length?n[e.charAt(i)]:64;++i;const a=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==o||null==a)throw new ui;const c=t<<2|s>>4;if(r.push(c),64!==o){const e=s<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
             */class ui extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const di=function(e){return function(e){const t=ci(e);return li.encodeByteArray(t,!0)}(e).replace(/\./g,"")},hi=function(e){try{return li.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null},pi=()=>
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
             */().__FIREBASE_DEFAULTS__,fi=()=>{try{return pi()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&hi(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},gi=()=>{var e;return null===(e=fi())||void 0===e?void 0:e.config},mi=e=>{var t;return null===(t=fi())||void 0===t?void 0:t[`_${e}`]};
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
class vi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
             */function yi(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function _i(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function wi(){try{return"object"==typeof indexedDB}catch(e){return!1}}function bi(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}class Ii extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ii.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(Si,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new Ii(r,o,n)}}const Si=/\{\$([^}]+)}/g;function Ei(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(ki(n)&&ki(s)){if(!Ei(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ki(e){return null!==e&&"object"==typeof e}
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
             */function Ci(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class Oi{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Ai),void 0===r.error&&(r.error=Ai),void 0===r.complete&&(r.complete=Ai);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Ai(){}
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
             */const Pi=1e3,Ri=2,Ni=144e5,Di=.5;function Li(e,t=Pi,n=Ri){const r=t*Math.pow(n,e),i=Math.round(Di*r*(Math.random()-.5)*2);return Math.min(Ni,r+i)}
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
             */function xi(e){return e&&e._delegate?e._delegate:e}class Mi{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
             */const Ui="[DEFAULT]";
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
             */class Fi{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new vi;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
             */(e))try{this.getOrInitializeService({instanceIdentifier:Ui})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=Ui){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Ui){return this.instances.has(e)}getOptions(e=Ui){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(i)&&s.resolve(r);return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Ui?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=Ui){return this.component?this.component.multipleInstances?e:Ui:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ji{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Fi(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
             */var Vi;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Vi||(Vi={}));const $i={debug:Vi.DEBUG,verbose:Vi.VERBOSE,info:Vi.INFO,warn:Vi.WARN,error:Vi.ERROR,silent:Vi.SILENT},Bi=Vi.INFO,Hi={[Vi.DEBUG]:"log",[Vi.VERBOSE]:"log",[Vi.INFO]:"info",[Vi.WARN]:"warn",[Vi.ERROR]:"error"},zi=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Hi[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Wi{constructor(e){this.name=e,this._logLevel=Bi,this._logHandler=zi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Vi))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?$i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Vi.DEBUG,...e),this._logHandler(this,Vi.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Vi.VERBOSE,...e),this._logHandler(this,Vi.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Vi.INFO,...e),this._logHandler(this,Vi.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Vi.WARN,...e),this._logHandler(this,Vi.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Vi.ERROR,...e),this._logHandler(this,Vi.ERROR,...e)}}const qi=(e,t)=>t.some((t=>e instanceof t));let Ki,Gi;const Ji=new WeakMap,Xi=new WeakMap,Yi=new WeakMap,Qi=new WeakMap,Zi=new WeakMap;let es={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Xi.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Yi.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rs(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ts(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Gi||(Gi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(is(this),t),rs(Ji.get(this))}:function(...t){return rs(e.apply(is(this),t))}:function(t,...n){const r=e.call(is(this),t,...n);return Yi.set(r,t.sort?t.sort():[t]),rs(r)}}function ns(e){return"function"==typeof e?ts(e):(e instanceof IDBTransaction&&function(e){if(Xi.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Xi.set(e,t)}(e),qi(e,Ki||(Ki=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,es):e)}function rs(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(rs(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Ji.set(t,e)})).catch((()=>{})),Zi.set(t,e),t}(e);if(Qi.has(e))return Qi.get(e);const t=ns(e);return t!==e&&(Qi.set(e,t),Zi.set(t,e)),t}const is=e=>Zi.get(e),ss=["get","getKey","getAll","getAllKeys","count"],os=["put","add","delete","clear"],as=new Map;function cs(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(as.get(t))return as.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=os.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!ss.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return as.set(t,s),s}var ls;ls=es,es={...ls,get:(e,t,n)=>cs(e,t)||ls.get(e,t,n),has:(e,t)=>!!cs(e,t)||ls.has(e,t)};
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
class us{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const ds="@firebase/app",hs="0.9.25",ps=new Wi("@firebase/app"),fs="[DEFAULT]",gs={[ds]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ms=new Map,vs=new Map;function ys(e,t){try{e.container.addComponent(t)}catch(n){ps.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function _s(e){const t=e.name;if(vs.has(t))return ps.debug(`There were multiple attempts to register component ${t}.`),!1;vs.set(t,e);for(const n of ms.values())ys(n,e);return!0}function ws(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
             */const bs=new Ti("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Is{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Mi("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bs.create("app-deleted",{appName:this._name})}}
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
             */const Ts="10.7.1";function Ss(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});const r=Object.assign({name:fs,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw bs.create("bad-app-name",{appName:String(i)});if(n||(n=gi()),!n)throw bs.create("no-options");const s=ms.get(i);if(s){if(Ei(n,s.options)&&Ei(r,s.config))return s;throw bs.create("duplicate-app",{appName:i})}const o=new ji(i);for(const c of vs.values())o.addComponent(c);const a=new Is(n,r,o);return ms.set(i,a),a}function Es(e=fs){const t=ms.get(e);if(!t&&e===fs&&gi())return Ss();if(!t)throw bs.create("no-app",{appName:e});return t}function ks(e,t,n){var r;let i=null!==(r=gs[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ps.warn(e.join(" "))}_s(new Mi(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
             */const Cs="firebase-heartbeat-database",Os=1,As="firebase-heartbeat-store";let Ps=null;function Rs(){return Ps||(Ps=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=rs(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(rs(o.result),e.oldVersion,e.newVersion,rs(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(Cs,Os,{upgrade:(e,t)=>{0===t&&e.createObjectStore(As)}}).catch((e=>{throw bs.create("idb-open",{originalErrorMessage:e.message})}))),Ps}async function Ns(e,t){try{const n=(await Rs()).transaction(As,"readwrite"),r=n.objectStore(As);await r.put(t,Ds(e)),await n.done}catch(n){if(n instanceof Ii)ps.warn(n.message);else{const e=bs.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});ps.warn(e.message)}}}function Ds(e){return`${e.name}!${e.options.appId}`}
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
             */class Ls{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ms(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=xs();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=xs(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Us(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Us(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=di(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xs(){return(new Date).toISOString().substring(0,10)}class Ms{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!wi()&&bi().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=await Rs();return await t.transaction(As).objectStore(As).get(Ds(e))}catch(t){if(t instanceof Ii)ps.warn(t.message);else{const e=bs.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});ps.warn(e.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ns(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ns(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Us(e){return di(JSON.stringify({version:2,heartbeats:e})).length}
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
             */var Fs;Fs="",_s(new Mi("platform-logger",(e=>new us(e)),"PRIVATE")),_s(new Mi("heartbeat",(e=>new Ls(e)),"PRIVATE")),ks(ds,hs,Fs),ks(ds,hs,"esm2017"),ks("fire-js",""),
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
ks("firebase","10.7.1","app");const js=(e,t)=>t.some((t=>e instanceof t));let Vs,$s;const Bs=new WeakMap,Hs=new WeakMap,zs=new WeakMap,Ws=new WeakMap,qs=new WeakMap;let Ks={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Hs.get(e);if("objectStoreNames"===t)return e.objectStoreNames||zs.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xs(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Gs(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?($s||($s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ys(this),t),Xs(Bs.get(this))}:function(...t){return Xs(e.apply(Ys(this),t))}:function(t,...n){const r=e.call(Ys(this),t,...n);return zs.set(r,t.sort?t.sort():[t]),Xs(r)}}function Js(e){return"function"==typeof e?Gs(e):(e instanceof IDBTransaction&&function(e){if(Hs.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Hs.set(e,t)}(e),js(e,Vs||(Vs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Ks):e)}function Xs(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Xs(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Bs.set(t,e)})).catch((()=>{})),qs.set(t,e),t}(e);if(Ws.has(e))return Ws.get(e);const t=Js(e);return t!==e&&(Ws.set(e,t),qs.set(t,e)),t}const Ys=e=>qs.get(e),Qs=["get","getKey","getAll","getAllKeys","count"],Zs=["put","add","delete","clear"],eo=new Map;function to(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(eo.get(t))return eo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Zs.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Qs.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return eo.set(t,s),s}!function(e){Ks=e(Ks)}((e=>({...e,get:(t,n,r)=>to(t,n)||e.get(t,n,r),has:(t,n)=>!!to(t,n)||e.has(t,n)})));const no="@firebase/installations",ro="0.6.4",io=1e4,so=`w:${ro}`,oo="FIS_v2",ao="https://firebaseinstallations.googleapis.com/v1",co=36e5,lo=new Ti("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function uo(e){return e instanceof Ii&&e.code.includes("request-failed")}
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
             */function ho({projectId:e}){return`${ao}/projects/${e}/installations`}function po(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function fo(e,t){const n=(await t.json()).error;return lo.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function go({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function mo(e,{refreshToken:t}){const n=go(e);return n.append("Authorization",function(e){return`${oo} ${e}`}
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
             */(t)),n}async function vo(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
             */function yo(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const _o=/^[cdef][\w-]{21}$/,wo="";function bo(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
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
             */(e);return _o.test(t)?t:wo}catch(e){return wo}}function Io(e){return`${e.appName}!${e.appId}`}
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
             */const To=new Map;function So(e,t){const n=Io(e);Eo(n,t),function(e,t){const n=(!ko&&"BroadcastChannel"in self&&(ko=new BroadcastChannel("[Firebase] FID Change"),ko.onmessage=e=>{Eo(e.data.key,e.data.fid)}),ko);n&&n.postMessage({key:e,fid:t}),0===To.size&&ko&&(ko.close(),ko=null)}(n,t)}function Eo(e,t){const n=To.get(e);if(n)for(const r of n)r(t)}let ko=null;
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
const Co="firebase-installations-database",Oo=1,Ao="firebase-installations-store";let Po=null;function Ro(){return Po||(Po=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Xs(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Xs(o.result),e.oldVersion,e.newVersion,Xs(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}(Co,Oo,{upgrade:(e,t)=>{0===t&&e.createObjectStore(Ao)}})),Po}async function No(e,t){const n=Io(e),r=(await Ro()).transaction(Ao,"readwrite"),i=r.objectStore(Ao),s=await i.get(n);return await i.put(t,n),await r.done,s&&s.fid===t.fid||So(e,t.fid),t}async function Do(e){const t=Io(e),n=(await Ro()).transaction(Ao,"readwrite");await n.objectStore(Ao).delete(t),await n.done}async function Lo(e,t){const n=Io(e),r=(await Ro()).transaction(Ao,"readwrite"),i=r.objectStore(Ao),s=await i.get(n),o=t(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||s&&s.fid===o.fid||So(e,o.fid),o}
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
             */async function xo(e){let t;const n=await Lo(e.appConfig,(n=>{const r=function(e){const t=e||{fid:bo(),registrationStatus:0};return Fo(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(lo.create("app-offline"))};const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ho(e),i=go(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:oo,appId:e.appId,sdkVersion:so},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await vo((()=>fetch(r,a)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:po(e.authToken)}}throw await fo("Create Installation",c)}(e,t);return No(e.appConfig,n)}catch(n){throw uo(n)&&409===n.customData.serverCode?await Do(e.appConfig):await No(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Mo(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===wo?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Mo(e){let t=await Uo(e.appConfig);for(;1===t.registrationStatus;)await yo(100),t=await Uo(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await xo(e);return n||t}return t}function Uo(e){return Lo(e,(e=>{if(!e)throw lo.create("installation-not-found");return Fo(e)}))}function Fo(e){return 1===(t=e).registrationStatus&&t.registrationTime+io<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
             */}async function jo({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${ho(e)}/${t}/authTokens:generate`}
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
             */(e,n),i=mo(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:so,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await vo((()=>fetch(r,a)));if(c.ok)return po(await c.json());throw await fo("Generate Auth Token",c)}async function Vo(e,t=!1){let n;const r=await Lo(e.appConfig,(r=>{if(!Bo(r))throw lo.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+co}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await $o(e.appConfig);for(;1===n.authToken.requestStatus;)await yo(100),n=await $o(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Vo(e,t):r}(e,t),r;{if(!navigator.onLine)throw lo.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await jo(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await No(e.appConfig,r),n}catch(n){if(!uo(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await No(e.appConfig,n)}else await Do(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function $o(e){return Lo(e,(e=>{if(!Bo(e))throw lo.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+io<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
             */}))}function Bo(e){return void 0!==e&&2===e.registrationStatus}
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
async function Ho(e,t=!1){const n=e;return await async function(e){const{registrationPromise:t}=await xo(e);t&&await t}
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
             */(n),(await Vo(n,t)).token}function zo(e){return lo.create("missing-app-config-values",{valueName:e})}
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
             */const Wo="installations",qo=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw zo("App Configuration");if(!e.name)throw zo("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw zo(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:ws(t,"heartbeat"),_delete:()=>Promise.resolve()}},Ko=e=>{const t=ws(e.getProvider("app").getImmediate(),Wo).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await xo(t);return r?r.catch(console.error):Vo(t).catch(console.error),n.fid}(t),getToken:e=>Ho(t,e)}};_s(new Mi(Wo,qo,"PUBLIC")),_s(new Mi("installations-internal",Ko,"PRIVATE")),ks(no,ro),ks(no,ro,"esm2017");
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
const Go="analytics",Jo="firebase_id",Xo="origin",Yo=6e4,Qo="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Zo="https://www.googletagmanager.com/gtag/js",ea=new Wi("@firebase/analytics"),ta=new Ti("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
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
function na(e){if(!e.startsWith(Zo)){const t=ta.create("invalid-gtag-resource",{gtagURL:e});return ea.warn(t.message),""}return e}function ra(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function ia(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:na}),r=document.createElement("script"),i=`${Zo}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function sa(e,t,n,r){return async function(i,...s){try{if("event"===i){const[r,i]=s;await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await ra(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){ea.error(s)}}(e,t,n,r,i)}else if("config"===i){const[i,o]=s;await async function(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=(await ra(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(a){ea.error(a)}e("config",i,s)}(e,t,n,r,i,o)}else if("consent"===i){const[t]=s;e("consent","update",t)}else if("get"===i){const[t,n,r]=s;e("get",t,n,r)}else if("set"===i){const[t]=s;e("set",t)}else e(i,...s)}catch(o){ea.error(o)}}}
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
const oa=30,aa=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function ca(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function la(e,t=aa,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw ta.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ta.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new da;return setTimeout((async()=>{a.abort()}),void 0!==n?n:Yo),ua({appId:r,apiKey:i,measurementId:s},o,a,t)}async function ua(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=aa){var s;const{appId:o,measurementId:a}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(ta.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(c){if(a)return ea.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:ca(r)},s=Qo.replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw ta.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return i.deleteThrottleMetadata(o),t}catch(c){const t=c;if(!function(e){if(!(e instanceof Ii&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(o),a)return ea.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:o,measurementId:a};throw c}const l=503===Number(null===(s=null==t?void 0:t.customData)||void 0===s?void 0:s.httpStatus)?Li(n,i.intervalMillis,oa):Li(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(o,u),ea.debug(`Calling attemptFetch again in ${l} millis`),ua(e,u,r,i)}}class da{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}async function ha(e,t,n,r,i,s,o){var a;const c=la(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&ea.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>ea.error(e))),t.push(c);const l=
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
async function(){if(!wi())return ea.warn(ta.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await bi()}catch(e){return ea.warn(ta.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[u,d]=await Promise.all([c,l]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Zo)&&n.src.includes(e))return n;return null})(s)||ia(s,u.measurementId),i("js",new Date);const h=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return h[Xo]="firebase",h.update=!0,null!=d&&(h[Jo]=d),i("config",u.measurementId,h),u.measurementId}
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
             */class pa{constructor(e){this.app=e}_delete(){return delete fa[this.app.options.appId],Promise.resolve()}}let fa={},ga=[];const ma={};let va,ya,_a="dataLayer",wa="gtag",ba=!1;function Ia(){const e=[];if(_i()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=ta.create("invalid-analytics-context",{errorInfo:t});ea.warn(n.message)}}function Ta(e,t,n){Ia();const r=e.options.appId;if(!r)throw ta.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw ta.create("no-api-key");ea.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=fa[r])throw ta.create("already-exists",{id:r});if(!ba){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(_a);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=sa(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(fa,ga,ma,_a,wa);ya=e,va=t,ba=!0}return fa[r]=ha(e,ga,ma,t,va,_a,n),new pa(e)}function Sa(e,t,n,r){e=xi(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(ya,fa[e.app.options.appId],t,n,r).catch((e=>ea.error(e)))}const Ea="@firebase/analytics",ka="0.10.0";function Ca(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Oa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}_s(new Mi(Go,((e,{options:t})=>Ta(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),_s(new Mi("analytics-internal",(function(e){try{const t=e.getProvider(Go).getImmediate();return{logEvent:(e,n,r)=>Sa(t,e,n,r)}}catch(t){throw ta.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),ks(Ea,ka),ks(Ea,ka,"esm2017"),"function"==typeof SuppressedError&&SuppressedError;const Aa=Oa,Pa=new Ti("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ra=new Wi("@firebase/auth");function Na(e,...t){Ra.logLevel<=Vi.ERROR&&Ra.error(`Auth (${Ts}): ${e}`,...t)}
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
             */function Da(e,...t){throw Ma(e,...t)}function La(e,...t){return Ma(e,...t)}function xa(e,t,n){const r=Object.assign(Object.assign({},Aa()),{[t]:n});return new Ti("auth","Firebase",r).create(t,{appName:e.name})}function Ma(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Pa.create(e,...t)}function Ua(e,t,...n){if(!e)throw Ma(t,...n)}function Fa(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Na(t),new Error(t)}function ja(e,t){e||Fa(t)}
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
             */function Va(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function $a(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
             */function Ba(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==$a()&&"https:"!==$a()&&!_i()&&!("connection"in navigator)||navigator.onLine}
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
class Ha{constructor(e,t){this.shortDelay=e,this.longDelay=t,ja(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yi())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Ba()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
             */function za(e,t){ja(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
             */class Wa{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Fa("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Fa("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Fa("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
             */const qa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Ka=new Ha(3e4,6e4);
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
             */function Ga(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ja(e,t,n,r,i={}){return Xa(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Ci(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Wa.fetch()(Ya(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Xa(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},qa),t);try{const t=new Qa(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Za(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Za(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Za(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Za(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw xa(e,a,o);Da(e,a)}}catch(i){if(i instanceof Ii)throw i;Da(e,"network-request-failed",{message:String(i)})}}function Ya(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?za(e.config,i):`${e.config.apiScheme}://${i}`}class Qa{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(La(this.auth,"network-request-failed"))),Ka.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Za(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=La(e,t,r);return i.customData._tokenResponse=n,i}
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
function ec(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function tc(e){return 1e3*Number(e)}function nc(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Na("JWT malformed, contained fewer than 3 sections"),null;try{const e=hi(n);return e?JSON.parse(e):(Na("Failed to decode base64 JWT payload"),null)}catch(i){return Na("Caught error parsing JWT payload as JSON",null==i?void 0:i.toString()),null}}
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
async function rc(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ii&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
             */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class ic{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
             */class sc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ec(this.lastLoginAt),this.creationTime=ec(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
             */async function oc(e){var t;const n=e.auth,r=await e.getIdToken(),i=await rc(e,async function(e,t){return Ja(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Ua(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ca(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[],a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),h=!!u&&d,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,p)}
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
class ac{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ua(e.idToken,"internal-error"),Ua(void 0!==e.idToken,"internal-error"),Ua(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=nc(e);return Ua(t,"internal-error"),Ua(void 0!==t.exp,"internal-error"),Ua(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ua(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=
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
             */await async function(e,t){const n=await Xa(e,{},(async()=>{const n=Ci({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Ya(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Wa.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ac;return n&&(Ua("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Ua("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Ua("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ac,this.toJSON())}_performRefresh(){return Fa("not implemented")}}
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
             */function cc(e,t){Ua("string"==typeof e||void 0===e,"internal-error",{appName:t})}class lc{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Ca(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ic(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await rc(this,this.stsTokenManager.getToken(this.auth,e));return Ua(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=xi(e),r=await n.getIdToken(t),i=nc(r);Ua(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ec(tc(i.auth_time)),issuedAtTime:ec(tc(i.iat)),expirationTime:ec(tc(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=xi(e);await oc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ua(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new lc(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ua(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await oc(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await rc(this,async function(e,t){return Ja(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:b,stsTokenManager:I}=t;Ua(y&&I,e,"internal-error");const T=ac.fromJSON(this.name,I);Ua("string"==typeof y,e,"internal-error"),cc(u,e.name),cc(d,e.name),Ua("boolean"==typeof _,e,"internal-error"),Ua("boolean"==typeof w,e,"internal-error"),cc(h,e.name),cc(p,e.name),cc(f,e.name),cc(g,e.name),cc(m,e.name),cc(v,e.name);const S=new lc({uid:y,auth:e,email:d,emailVerified:_,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:T,createdAt:m,lastLoginAt:v});return b&&Array.isArray(b)&&(S.providerData=b.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ac;r.updateFromServerResponse(t);const i=new lc({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await oc(i),i}}
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
             */const uc=new Map;function dc(e){ja(e instanceof Function,"Expected a class definition");let t=uc.get(e);return t?(ja(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,uc.set(e,t),t)}
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
             */class hc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}hc.type="NONE";const pc=hc;
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
             */function fc(e,t,n){return`firebase:${e}:${t}:${n}`}class gc{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=fc(this.userKey,r.apiKey,i),this.fullPersistenceKey=fc("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?lc._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new gc(dc(pc),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||dc(pc);const s=fc(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=lc._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new gc(i,e,n)):new gc(i,e,n)}}
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
             */function mc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(wc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ic(t))return"Blackberry";if(Tc(t))return"Webos";if(yc(t))return"Safari";if((t.includes("chrome/")||_c(t))&&!t.includes("edge/"))return"Chrome";if(bc(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function vc(e=yi()){return/firefox\//i.test(e)}function yc(e=yi()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _c(e=yi()){return/crios\//i.test(e)}function wc(e=yi()){return/iemobile/i.test(e)}function bc(e=yi()){return/android/i.test(e)}function Ic(e=yi()){return/blackberry/i.test(e)}function Tc(e=yi()){return/webos/i.test(e)}function Sc(e=yi()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ec(){return function(){const e=yi();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function kc(e=yi()){return Sc(e)||bc(e)||Tc(e)||Ic(e)||/windows phone/i.test(e)||wc(e)}
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
function Cc(e,t=[]){let n;switch(e){case"Browser":n=mc(yi());break;case"Worker":n=`${mc(yi())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${r}`}
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
             */class Oc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==n?void 0:n.message})}}}
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
             */class Ac{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
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
             */class Pc{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nc(this),this.idTokenSubscription=new Nc(this),this.beforeStateQueue=new Oc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dc(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await gc.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ua(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?xi(e):null;return t&&Ua(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ua(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(dc(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Ja(e,"GET","/v2/passwordPolicy",Ga(e,t))}
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
             */(this),t=new Ac(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Ja(e,"POST","/v2/accounts:revokeToken",Ga(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dc(e)||this._popupRedirectResolver;Ua(t,this,"argument-error"),this.redirectPersistenceManager=await gc.create(this,[dc(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ua(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ua(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Ra.logLevel<=Vi.WARN&&Ra.warn(`Auth (${Ts}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Rc(e){return xi(e)}class Nc{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Oi(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Ua(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
             */function Dc(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=La("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function Lc(e,t,n){const r=Rc(e);Ua(r._canInitEmulator,r,"emulator-config-failed"),Ua(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=xc(t),{host:o,port:a}=function(e){const t=xc(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Mc(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Mc(t)}}}(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
             */()}function xc(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Mc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Uc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Fa("not implemented")}_getIdTokenResponse(e){return Fa("not implemented")}_linkToIdToken(e,t){return Fa("not implemented")}_getReauthenticationResolver(e){return Fa("not implemented")}}
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
             */async function Fc(e,t){return async function(e,t,n,r,i={}){const s=await Ja(e,t,n,r,i);return"mfaPendingCredential"in s&&Da(e,"multi-factor-auth-required",{_serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",Ga(e,t))}
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
             */class jc extends Uc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new jc(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Da("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Ca(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new jc(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Fc(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fc(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fc(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ci(t)}return e}}
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
             */class Vc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
             */class $c extends Vc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
             */class Bc extends $c{constructor(){super("facebook.com")}static credential(e){return jc._fromParams({providerId:Bc.PROVIDER_ID,signInMethod:Bc.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bc.credentialFromTaggedObject(e)}static credentialFromError(e){return Bc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Bc.credential(e.oauthAccessToken)}catch(t){return null}}}Bc.FACEBOOK_SIGN_IN_METHOD="facebook.com",Bc.PROVIDER_ID="facebook.com";
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
class Hc extends $c{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return jc._fromParams({providerId:Hc.PROVIDER_ID,signInMethod:Hc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Hc.credentialFromTaggedObject(e)}static credentialFromError(e){return Hc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Hc.credential(t,n)}catch(r){return null}}}Hc.GOOGLE_SIGN_IN_METHOD="google.com",Hc.PROVIDER_ID="google.com";
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
class zc extends $c{constructor(){super("github.com")}static credential(e){return jc._fromParams({providerId:zc.PROVIDER_ID,signInMethod:zc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zc.credentialFromTaggedObject(e)}static credentialFromError(e){return zc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return zc.credential(e.oauthAccessToken)}catch(t){return null}}}zc.GITHUB_SIGN_IN_METHOD="github.com",zc.PROVIDER_ID="github.com";
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
class Wc extends $c{constructor(){super("twitter.com")}static credential(e,t){return jc._fromParams({providerId:Wc.PROVIDER_ID,signInMethod:Wc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Wc.credentialFromTaggedObject(e)}static credentialFromError(e){return Wc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Wc.credential(t,n)}catch(r){return null}}}Wc.TWITTER_SIGN_IN_METHOD="twitter.com",Wc.PROVIDER_ID="twitter.com";
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
class qc{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await lc._fromIdTokenResponse(e,n,r),s=Kc(n);return new qc({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Kc(n);return new qc({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Kc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
             */class Gc extends Ii{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Gc.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Gc(e,t,n,r)}}function Jc(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Gc._fromErrorAndOperation(e,n,t,r);throw n}))}const Xc="__sak";
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
             */class Yc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xc,"1"),this.storage.removeItem(Xc),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
             */class Qc extends Yc{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=yi();return yc(e)||Sc(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=kc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ec()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qc.type="LOCAL";const Zc=Qc;
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
             */class el extends Yc{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}el.type="SESSION";const tl=el;
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
class nl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new nl(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function rl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
             */nl.receivers=[];class il{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=rl("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
             */function sl(){return window}
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
function ol(){return void 0!==sl().WorkerGlobalScope&&"function"==typeof sl().importScripts}
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
const al="firebaseLocalStorageDb",cl="firebaseLocalStorage",ll="fbase_key";class ul{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function dl(e,t){return e.transaction([cl],t?"readwrite":"readonly").objectStore(cl)}function hl(){const e=indexedDB.open(al,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(cl,{keyPath:ll})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(cl)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(al);return new ul(e).toPromise()}(),t(await hl()))}))}))}async function pl(e,t,n){const r=dl(e,!0).put({[ll]:t,value:n});return new ul(r).toPromise()}function fl(e,t){const n=dl(e,!0).delete(t);return new ul(n).toPromise()}class gl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await hl()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ol()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nl._getInstance(ol()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new il(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hl();return await pl(e,Xc,"1"),await fl(e,Xc),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>pl(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=dl(e,!1).get(t),r=await new ul(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>fl(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=dl(e,!1).getAll();return new ul(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}gl.type="LOCAL";const ml=gl;
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
function vl(e,t){return t?dc(t):(Ua(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
             */new Ha(3e4,6e4);class yl extends Uc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fc(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fc(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fc(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _l(e){
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
             */return async function(e,t,n=!1){const r="signIn",i=await Jc(e,r,t),s=await qc._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new yl(e),e.bypassAuthState)}function wl(e){const{auth:t,user:n}=e;return Ua(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await rc(e,Jc(r,i,t,e),n);Ua(s.idToken,r,"internal-error");const o=nc(s.idToken);Ua(o,r,"internal-error");const{sub:a}=o;return Ua(e.uid===a,r,"user-mismatch"),qc._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&Da(r,"user-mismatch"),s}}(n,new yl(e),e.bypassAuthState)}async function bl(e){const{auth:t,user:n}=e;return Ua(n,t,"internal-error"),async function(e,t,n=!1){const r=await rc(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return qc._forOperation(e,"link",r)}(n,new yl(e),e.bypassAuthState)}
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
             */class Il{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _l;case"linkViaPopup":case"linkViaRedirect":return bl;case"reauthViaPopup":case"reauthViaRedirect":return wl;default:Da(this.auth,"internal-error")}}resolve(e){ja(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ja(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
             */const Tl=new Ha(2e3,1e4);async function Sl(e,t,n){const r=Rc(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Da(e,"argument-error"),xa(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,Vc);const i=vl(r,n);return new El(r,"signInViaPopup",t,i).executeNotNull()}class El extends Il{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,El.currentPopupAction&&El.currentPopupAction.cancel(),El.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ua(e,this.auth,"internal-error"),e}async onExecution(){ja(1===this.filter.length,"Popup operations only handle one event");const e=rl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(La(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(La(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,El.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(La(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Tl.get())};e()}}El.currentPopupAction=null;
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
const kl="pendingRedirect",Cl=new Map;class Ol extends Il{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Cl.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return fc(kl,e.config.apiKey,e.name)}(t),r=function(e){return dc(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Cl.set(this.auth._key(),e)}return this.bypassAuthState||Cl.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Al(e,t){Cl.set(e._key(),t)}async function Pl(e,t,n=!1){const r=Rc(e),i=vl(r,t),s=new Ol(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
             */class Rl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dl(e);default:return!1}}
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
             */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Dl(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(La(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nl(e))}saveEventToCache(e){this.cachedEventUids.add(Nl(e)),this.lastProcessedEventTime=Date.now()}}function Nl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Dl({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Ll=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xl=/^https?/;async function Ml(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ja(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(Ul(r))return}catch(n){}Da(e,"unauthorized-domain")}function Ul(e){const t=Va(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!xl.test(n))return!1;if(Ll.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
             */const Fl=new Ha(3e4,6e4);function jl(){const e=sl().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Vl(e){return new Promise(((t,n)=>{var r,i,s;function o(){jl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{jl(),n(La(e,"network-request-failed"))},timeout:Fl.get()})}if(null===(i=null===(r=sl().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=sl().gapi)||void 0===s?void 0:s.load)){const t=`__iframefcb${Math.floor(1e6*Math.random())}`;return sl()[t]=()=>{gapi.load?o():n(La(e,"network-request-failed"))},Dc(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw $l=null,e}))}let $l=null;
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
const Bl=new Ha(5e3,15e3),Hl="__/auth/iframe",zl="emulator/auth/iframe",Wl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ql=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Kl(e){const t=e.config;Ua(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?za(t,zl):`https://${e.config.authDomain}/${Hl}`,r={apiKey:t.apiKey,appName:e.name,v:Ts},i=ql.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ci(r).slice(1)}`}async function Gl(e){const t=await function(e){return $l=$l||Vl(e),$l}(e),n=sl().gapi;return Ua(n,e,"internal-error"),t.open({where:document.body,url:Kl(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wl,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=La(e,"network-request-failed"),s=sl().setTimeout((()=>{r(i)}),Bl.get());function o(){sl().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
             */const Jl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Xl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Yl(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Jl),{width:r.toString(),height:i.toString(),top:s,left:o}),l=yi().toLowerCase();n&&(a=_c(l)?"_blank":n),vc(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=yi()){var t;return Sc(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
             */(t||"",a),new Xl(null);const d=window.open(t||"",a,u);Ua(d,e,"popup-blocked");try{d.focus()}catch(h){}return new Xl(d)}const Ql="__/auth/handler",Zl="emulator/auth/handler",eu=encodeURIComponent("fac");async function tu(e,t,n,r,i,s){Ua(e.config.authDomain,e,"auth-domain-config-required"),Ua(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ts,eventId:i};if(t instanceof Vc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof $c){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))void 0===a[u]&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${eu}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?za(e,Zl):`https://${e.authDomain}/${Ql}`}
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
             */(e)}?${Ci(a).slice(1)}${l}`}const nu="webStorageSupport",ru=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tl,this._completeRedirectFn=Pl,this._overrideRedirectResult=Al}async _openPopup(e,t,n,r){var i;return ja(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()"),Yl(e,await tu(e,t,n,Va(),r),rl())}async _openRedirect(e,t,n,r){return await this._originValidation(e),function(e){sl().location.href=e}(await tu(e,t,n,Va(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ja(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Gl(e),n=new Rl(e);return t.register("authEvent",(t=>(Ua(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"})),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(nu,{type:nu},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[nu];void 0!==i&&t(!!i),Da(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ml(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kc()||yc()||Sc()}};var iu="@firebase/auth",su="1.5.1";
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
class ou{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ua(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const au=mi("authIdTokenMaxAge")||300;let cu=null;var lu;lu="Browser",_s(new Mi("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;Ua(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:lu,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cc(lu)},c=new Pc(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dc);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),_s(new Mi("auth-internal",(e=>(e=>new ou(e))(Rc(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),ks(iu,su,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(lu)),ks(iu,su,"esm2017"),function(e=Es()){const t=ws(e=xi(e),Go);t.isInitialized()?t.getImmediate():function(e,t={}){const n=ws(e,Go);if(n.isInitialized()){const e=n.getImmediate();if(Ei(t,n.getOptions()))return e;throw ta.create("already-initialized")}n.initialize({options:t})}(e)}(Ss({apiKey:"AIzaSyCA7u7USv_fIYdTX9Yf4Dp_Nc_ywMI5rGk",authDomain:"wired-plateau-407307.firebaseapp.com",projectId:"wired-plateau-407307",storageBucket:"wired-plateau-407307.appspot.com",messagingSenderId:"585374910303",appId:"1:585374910303:web:b8e25fc0b342ce0b0dd8ea",measurementId:"G-9FXJZDF51F"}));const uu=function(e=Es()){const t=ws(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
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
function(e,t){const n=ws(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Ei(n.getOptions(),null!=t?t:{}))return e;Da(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:ru,persistence:[ml,Zc,tl]}),r=mi("authTokenSyncURL");if(r){const e=(i=r,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>au)return;const r=null==t?void 0:t.token;cu!==r&&(cu=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){xi(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){xi(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}var i;const s=(o="auth",null===(c=null===(a=fi())||void 0===a?void 0:a.emulatorHosts)||void 0===c?void 0:c[o]);var o,a,c;return s&&Lc(n,`http://${s}`),n}();((...e)=>{const t=(ai||(ai=tr(oi))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){return m(e)?document.querySelector(e):e}(e);if(!r)return;const i=t._component;g(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t})(((e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n})({methods:{onclick(){(async()=>{const e=await Sl(uu,new Hc);console.log(e)})()},facebookLogin(){(()=>{const e=new Bc;Sl(uu,e).then((e=>{const t=e.user,n=Bc.credentialFromResult(e).accessToken;console.log(t),console.log(n)})).catch((e=>{console.log(e)}))})()},getUser(){console.log(null)}}},[["render",function(e,t,n,r,i,s){return function(e=!1){cr.push(lr=e?null:[])}(),o=ir,a=null,c=[vr("div",{onClick:t[0]||(t[0]=(...e)=>s.onclick&&s.onclick(...e))},"使用谷歌登录"),vr("div",{onClick:t[1]||(t[1]=(...e)=>s.facebookLogin&&s.facebookLogin(...e))},"Facebook"),vr("div",{onClick:t[2]||(t[2]=(...e)=>s.getUser&&s.getUser(...e))},"获取user")],hr(vr(o,a,c,64,l,u,!0));var o,a,c,l,u}]])).mount("#app")}}}));
