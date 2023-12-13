function dv(){import.meta.url,import("_").catch(()=>1);async function*t(){}}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Os(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Q={},Wt=[],Ce=()=>{},_l=()=>!1,pr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ks=t=>t.startsWith("onUpdate:"),ie=Object.assign,Ns=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vl=Object.prototype.hasOwnProperty,V=(t,e)=>vl.call(t,e),$=Array.isArray,pn=t=>mr(t)==="[object Map]",yl=t=>mr(t)==="[object Set]",B=t=>typeof t=="function",oe=t=>typeof t=="string",gr=t=>typeof t=="symbol",ee=t=>t!==null&&typeof t=="object",Yo=t=>(ee(t)||B(t))&&B(t.then)&&B(t.catch),bl=Object.prototype.toString,mr=t=>bl.call(t),wl=t=>mr(t).slice(8,-1),Il=t=>mr(t)==="[object Object]",Ds=t=>oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zn=Os(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_r=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},El=/-(\w)/g,Ve=_r(t=>t.replace(El,(e,n)=>n?n.toUpperCase():"")),Tl=/\B([A-Z])/g,nn=_r(t=>t.replace(Tl,"-$1").toLowerCase()),vr=_r(t=>t.charAt(0).toUpperCase()+t.slice(1)),xr=_r(t=>t?"on".concat(vr(t)):""),kt=(t,e)=>!Object.is(t,e),Lr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},er=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Sl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yi;const ss=()=>yi||(yi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ms(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=oe(r)?Pl(r):Ms(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(oe(t)||ee(t))return t}const Al=/;(?![^(]*\))/g,Rl=/:([^]+)/,Cl=/\/\*[^]*?\*\//g;function Pl(t){const e={};return t.replace(Cl,"").split(Al).forEach(n=>{if(n){const r=n.split(Rl);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xs(t){let e="";if(oe(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=xs(t[n]);r&&(e+=r+" ")}else if(ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ol="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kl=Os(Ol);function Xo(t){return!!t||t===""}let Ee;class Nl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ee,!e&&Ee&&(this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ee;try{return Ee=this,e()}finally{Ee=n}}}on(){Ee=this}off(){Ee=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Dl(t,e=Ee){e&&e.active&&e.effects.push(t)}function Ml(){return Ee}const Ls=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Qo=t=>(t.w&yt)>0,Zo=t=>(t.n&yt)>0,xl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=yt},Ll=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Qo(s)&&!Zo(s)?s.delete(t):e[n++]=s,s.w&=~yt,s.n&=~yt}e.length=n}},is=new WeakMap;let dn=0,yt=1;const os=30;let Te;const Ct=Symbol(""),as=Symbol("");class Us{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Dl(this,r)}run(){if(!this.active)return this.fn();let e=Te,n=pt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Te,Te=this,pt=!0,yt=1<<++dn,dn<=os?xl(this):bi(this),this.fn()}finally{dn<=os&&Ll(this),yt=1<<--dn,Te=this.parent,pt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(bi(this),this.onStop&&this.onStop(),this.active=!1)}}function bi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let pt=!0;const ea=[];function rn(){ea.push(pt),pt=!1}function sn(){const t=ea.pop();pt=t===void 0?!0:t}function me(t,e,n){if(pt&&Te){let r=is.get(t);r||is.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ls()),ta(s)}}function ta(t,e){let n=!1;dn<=os?Zo(t)||(t.n|=yt,n=!Qo(t)):n=!t.has(Te),n&&(t.add(Te),Te.deps.push(t))}function tt(t,e,n,r,s,i){const o=is.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&$(t)){const a=Number(r);o.forEach((l,u)=>{(u==="length"||!gr(u)&&u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":$(t)?Ds(n)&&c.push(o.get("length")):(c.push(o.get(Ct)),pn(t)&&c.push(o.get(as)));break;case"delete":$(t)||(c.push(o.get(Ct)),pn(t)&&c.push(o.get(as)));break;case"set":pn(t)&&c.push(o.get(Ct));break}if(c.length===1)c[0]&&cs(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);cs(Ls(a))}}function cs(t,e){const n=$(t)?t:[...t];for(const r of n)r.computed&&wi(r);for(const r of n)r.computed||wi(r)}function wi(t,e){(t!==Te||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ul=Os("__proto__,__v_isRef,__isVue"),na=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gr)),Ii=Fl();function Fl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=W(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(W)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){rn();const r=W(this)[e].apply(this,n);return sn(),r}}),t}function $l(t){const e=W(this);return me(e,"has",t),e.hasOwnProperty(t)}class ra{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?Ql:aa:i?oa:ia).get(e))return e;const o=$(e);if(!s){if(o&&V(Ii,n))return Reflect.get(Ii,n,r);if(n==="hasOwnProperty")return $l}const c=Reflect.get(e,n,r);return(gr(n)?na.has(n):Ul(n))||(s||me(e,"get",n),i)?c:le(c)?o&&Ds(n)?c:c.value:ee(c)?s?la(c):br(c):c}}class sa extends ra{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(Yt(i)&&le(i)&&!le(r))return!1;if(!this._shallow&&(!tr(r)&&!Yt(r)&&(i=W(i),r=W(r)),!$(e)&&le(i)&&!le(r)))return i.value=r,!0;const o=$(e)&&Ds(n)?Number(n)<e.length:V(e,n),c=Reflect.set(e,n,r,s);return e===W(s)&&(o?kt(r,i)&&tt(e,"set",n,r):tt(e,"add",n,r)),c}deleteProperty(e,n){const r=V(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&tt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!gr(n)||!na.has(n))&&me(e,"has",n),r}ownKeys(e){return me(e,"iterate",$(e)?"length":Ct),Reflect.ownKeys(e)}}class Bl extends ra{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const jl=new sa,Hl=new Bl,Vl=new sa(!0),Fs=t=>t,yr=t=>Reflect.getPrototypeOf(t);function Fn(t,e,n=!1,r=!1){t=t.__v_raw;const s=W(t),i=W(e);n||(kt(e,i)&&me(s,"get",e),me(s,"get",i));const{has:o}=yr(s),c=r?Fs:n?js:wn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function $n(t,e=!1){const n=this.__v_raw,r=W(n),s=W(t);return e||(kt(t,s)&&me(r,"has",t),me(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Bn(t,e=!1){return t=t.__v_raw,!e&&me(W(t),"iterate",Ct),Reflect.get(t,"size",t)}function Ei(t){t=W(t);const e=W(this);return yr(e).has.call(e,t)||(e.add(t),tt(e,"add",t,t)),this}function Ti(t,e){e=W(e);const n=W(this),{has:r,get:s}=yr(n);let i=r.call(n,t);i||(t=W(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?kt(e,o)&&tt(n,"set",t,e):tt(n,"add",t,e),this}function Si(t){const e=W(this),{has:n,get:r}=yr(e);let s=n.call(e,t);s||(t=W(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&tt(e,"delete",t,void 0),i}function Ai(){const t=W(this),e=t.size!==0,n=t.clear();return e&&tt(t,"clear",void 0,void 0),n}function jn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=W(o),a=e?Fs:t?js:wn;return!t&&me(c,"iterate",Ct),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function Hn(t,e,n){return function(...r){const s=this.__v_raw,i=W(s),o=pn(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),u=n?Fs:e?js:wn;return!e&&me(i,"iterate",a?as:Ct),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:c?[u(h[0]),u(h[1])]:u(h),done:g}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Wl(){const t={get(i){return Fn(this,i)},get size(){return Bn(this)},has:$n,add:Ei,set:Ti,delete:Si,clear:Ai,forEach:jn(!1,!1)},e={get(i){return Fn(this,i,!1,!0)},get size(){return Bn(this)},has:$n,add:Ei,set:Ti,delete:Si,clear:Ai,forEach:jn(!1,!0)},n={get(i){return Fn(this,i,!0)},get size(){return Bn(this,!0)},has(i){return $n.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:jn(!0,!1)},r={get(i){return Fn(this,i,!0,!0)},get size(){return Bn(this,!0)},has(i){return $n.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:jn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Hn(i,!1,!1),n[i]=Hn(i,!0,!1),e[i]=Hn(i,!1,!0),r[i]=Hn(i,!0,!0)}),[t,n,e,r]}const[zl,Kl,ql,Gl]=Wl();function $s(t,e){const n=e?t?Gl:ql:t?Kl:zl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(V(n,s)&&s in r?n:r,s,i)}const Jl={get:$s(!1,!1)},Yl={get:$s(!1,!0)},Xl={get:$s(!0,!1)},ia=new WeakMap,oa=new WeakMap,aa=new WeakMap,Ql=new WeakMap;function Zl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eu(t){return t.__v_skip||!Object.isExtensible(t)?0:Zl(wl(t))}function br(t){return Yt(t)?t:Bs(t,!1,jl,Jl,ia)}function ca(t){return Bs(t,!1,Vl,Yl,oa)}function la(t){return Bs(t,!0,Hl,Xl,aa)}function Bs(t,e,n,r,s){if(!ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=eu(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function zt(t){return Yt(t)?zt(t.__v_raw):!!(t&&t.__v_isReactive)}function Yt(t){return!!(t&&t.__v_isReadonly)}function tr(t){return!!(t&&t.__v_isShallow)}function ua(t){return zt(t)||Yt(t)}function W(t){const e=t&&t.__v_raw;return e?W(e):t}function fa(t){return er(t,"__v_skip",!0),t}const wn=t=>ee(t)?br(t):t,js=t=>ee(t)?la(t):t;function da(t){pt&&Te&&(t=W(t),ta(t.dep||(t.dep=Ls())))}function ha(t,e){t=W(t);const n=t.dep;n&&cs(n)}function le(t){return!!(t&&t.__v_isRef===!0)}function tu(t){return pa(t,!1)}function nu(t){return pa(t,!0)}function pa(t,e){return le(t)?t:new ru(t,e)}class ru{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:W(e),this._value=n?e:wn(e)}get value(){return da(this),this._value}set value(e){const n=this.__v_isShallow||tr(e)||Yt(e);e=n?e:W(e),kt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:wn(e),ha(this))}}function Kt(t){return le(t)?t.value:t}const su={get:(t,e,n)=>Kt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return le(s)&&!le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ga(t){return zt(t)?t:new Proxy(t,su)}class iu{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Us(e,()=>{this._dirty||(this._dirty=!0,ha(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=W(this);return da(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ou(t,e,n=!1){let r,s;const i=B(t);return i?(r=t,s=Ce):(r=t.get,s=t.set),new iu(r,s,i||!s,n)}function gt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){wr(i,e,n)}return s}function Pe(t,e,n,r){if(B(t)){const i=gt(t,e,n,r);return i&&Yo(i)&&i.catch(o=>{wr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Pe(t[i],e,n,r));return s}function wr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){gt(a,null,10,[t,o,c]);return}}au(t,n,s,r)}function au(t,e,n,r=!0){console.error(t)}let In=!1,ls=!1;const ce=[];let Ue=0;const qt=[];let Ye=null,Tt=0;const ma=Promise.resolve();let Hs=null;function _a(t){const e=Hs||ma;return t?e.then(this?t.bind(this):t):e}function cu(t){let e=Ue+1,n=ce.length;for(;e<n;){const r=e+n>>>1,s=ce[r],i=En(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Vs(t){(!ce.length||!ce.includes(t,In&&t.allowRecurse?Ue+1:Ue))&&(t.id==null?ce.push(t):ce.splice(cu(t.id),0,t),va())}function va(){!In&&!ls&&(ls=!0,Hs=ma.then(ba))}function lu(t){const e=ce.indexOf(t);e>Ue&&ce.splice(e,1)}function uu(t){$(t)?qt.push(...t):(!Ye||!Ye.includes(t,t.allowRecurse?Tt+1:Tt))&&qt.push(t),va()}function Ri(t,e=In?Ue+1:0){for(;e<ce.length;e++){const n=ce[e];n&&n.pre&&(ce.splice(e,1),e--,n())}}function ya(t){if(qt.length){const e=[...new Set(qt)];if(qt.length=0,Ye){Ye.push(...e);return}for(Ye=e,Ye.sort((n,r)=>En(n)-En(r)),Tt=0;Tt<Ye.length;Tt++)Ye[Tt]();Ye=null,Tt=0}}const En=t=>t.id==null?1/0:t.id,fu=(t,e)=>{const n=En(t)-En(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ba(t){ls=!1,In=!0,ce.sort(fu);const e=Ce;try{for(Ue=0;Ue<ce.length;Ue++){const n=ce[Ue];n&&n.active!==!1&&gt(n,null,14)}}finally{Ue=0,ce.length=0,ya(),In=!1,Hs=null,(ce.length||qt.length)&&ba()}}function du(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u="".concat(o==="modelValue"?"model":o,"Modifiers"),{number:h,trim:g}=r[u]||Q;g&&(s=n.map(_=>oe(_)?_.trim():_)),h&&(s=n.map(Sl))}let c,a=r[c=xr(e)]||r[c=xr(Ve(e))];!a&&i&&(a=r[c=xr(nn(e))]),a&&Pe(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Pe(l,t,6,s)}}function wa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!B(t)){const a=l=>{const u=wa(l,e,!0);u&&(c=!0,ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(ee(t)&&r.set(t,null),null):($(i)?i.forEach(a=>o[a]=null):ie(o,i),ee(t)&&r.set(t,o),o)}function Ir(t,e){return!t||!pr(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,nn(e))||V(t,e))}let Ae=null,Ia=null;function nr(t){const e=Ae;return Ae=t,Ia=t&&t.type.__scopeId||null,e}function hu(t,e=Ae,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Fi(-1);const i=nr(e);let o;try{o=t(...s)}finally{nr(i),r._d&&Fi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ur(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:u,renderCache:h,data:g,setupState:_,ctx:R,inheritAttrs:P}=t;let L,k;const N=nr(t);try{if(n.shapeFlag&4){const x=s||r,Z=x;L=Le(u.call(Z,x,h,i,_,g,R)),k=a}else{const x=e;L=Le(x.length>1?x(i,{attrs:a,slots:c,emit:l}):x(i,null)),k=e.props?a:pu(a)}}catch(x){mn.length=0,wr(x,t,1),L=we(Tn)}let H=L;if(k&&P!==!1){const x=Object.keys(k),{shapeFlag:Z}=H;x.length&&Z&7&&(o&&x.some(ks)&&(k=gu(k,o)),H=Xt(H,k))}return n.dirs&&(H=Xt(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),L=H,nr(N),L}const pu=t=>{let e;for(const n in t)(n==="class"||n==="style"||pr(n))&&((e||(e={}))[n]=t[n]);return e},gu=(t,e)=>{const n={};for(const r in t)(!ks(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function mu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Ci(r,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(o[g]!==r[g]&&!Ir(l,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Ci(r,o,l):!0:!!o;return!1}function Ci(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ir(n,i))return!0}return!1}function _u({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ea="components";function vu(t,e){return bu(Ea,t,!0,e)||t}const yu=Symbol.for("v-ndc");function bu(t,e,n=!0,r=!1){const s=Ae||se;if(s){const i=s.type;if(t===Ea){const c=gf(i,!1);if(c&&(c===e||c===Ve(e)||c===vr(Ve(e))))return i}const o=Pi(s[t]||i[t],e)||Pi(s.appContext[t],e);return!o&&r?i:o}}function Pi(t,e){return t&&(t[e]||t[Ve(e)]||t[vr(Ve(e))])}const wu=t=>t.__isSuspense;function Iu(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):uu(t)}const Vn={};function Kn(t,e,n){return Ta(t,e,n)}function Ta(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){var c;const a=Ml()===((c=se)==null?void 0:c.scope)?se:null;let l,u=!1,h=!1;if(le(t)?(l=()=>t.value,u=tr(t)):zt(t)?(l=()=>t,r=!0):$(t)?(h=!0,u=t.some(x=>zt(x)||tr(x)),l=()=>t.map(x=>{if(le(x))return x.value;if(zt(x))return Vt(x);if(B(x))return gt(x,a,2)})):B(t)?e?l=()=>gt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return g&&g(),Pe(t,a,3,[_])}:l=Ce,e&&r){const x=l;l=()=>Vt(x())}let g,_=x=>{g=N.onStop=()=>{gt(x,a,4),g=N.onStop=void 0}},R;if(An)if(_=Ce,e?n&&Pe(e,a,3,[l(),h?[]:void 0,_]):l(),s==="sync"){const x=vf();R=x.__watcherHandles||(x.__watcherHandles=[])}else return Ce;let P=h?new Array(t.length).fill(Vn):Vn;const L=()=>{if(N.active)if(e){const x=N.run();(r||u||(h?x.some((Z,te)=>kt(Z,P[te])):kt(x,P)))&&(g&&g(),Pe(e,a,3,[x,P===Vn?void 0:h&&P[0]===Vn?[]:P,_]),P=x)}else N.run()};L.allowRecurse=!!e;let k;s==="sync"?k=L:s==="post"?k=()=>pe(L,a&&a.suspense):(L.pre=!0,a&&(L.id=a.uid),k=()=>Vs(L));const N=new Us(l,k);e?n?L():P=N.run():s==="post"?pe(N.run.bind(N),a&&a.suspense):N.run();const H=()=>{N.stop(),a&&a.scope&&Ns(a.scope.effects,N)};return R&&R.push(H),H}function Eu(t,e,n){const r=this.proxy,s=oe(t)?t.includes(".")?Sa(r,t):()=>r[t]:t.bind(r,r);let i;B(e)?i=e:(i=e.handler,n=e);const o=se;Qt(this);const c=Ta(s,i.bind(r),n);return o?Qt(o):Pt(),c}function Sa(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Vt(t,e){if(!ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),le(t))Vt(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Vt(t[n],e);else if(yl(t)||pn(t))t.forEach(n=>{Vt(n,e)});else if(Il(t))for(const n in t)Vt(t[n],e);return t}function wt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(rn(),Pe(a,n,8,[t.el,c,t,e]),sn())}}/*! #__NO_SIDE_EFFECTS__ */function Ws(t,e){return B(t)?(()=>ie({name:t.name},e,{setup:t}))():t}const qn=t=>!!t.type.__asyncLoader,Aa=t=>t.type.__isKeepAlive;function Tu(t,e){Ra(t,"a",e)}function Su(t,e){Ra(t,"da",e)}function Ra(t,e,n=se){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Er(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Aa(s.parent.vnode)&&Au(r,e,n,s),s=s.parent}}function Au(t,e,n,r){const s=Er(e,t,r,!0);Ca(()=>{Ns(r[e],s)},n)}function Er(t,e,n=se,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;rn(),Qt(n);const c=Pe(e,n,t,o);return Pt(),sn(),c});return r?s.unshift(i):s.push(i),i}}const st=t=>(e,n=se)=>(!An||t==="sp")&&Er(t,(...r)=>e(...r),n),Ru=st("bm"),Cu=st("m"),Pu=st("bu"),Ou=st("u"),ku=st("bum"),Ca=st("um"),Nu=st("sp"),Du=st("rtg"),Mu=st("rtc");function xu(t,e=se){Er("ec",t,e)}const us=t=>t?ja(t)?Js(t)||t.proxy:us(t.parent):null,gn=ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>us(t.parent),$root:t=>us(t.root),$emit:t=>t.emit,$options:t=>zs(t),$forceUpdate:t=>t.f||(t.f=()=>Vs(t.update)),$nextTick:t=>t.n||(t.n=_a.bind(t.proxy)),$watch:t=>Eu.bind(t)}),Fr=(t,e)=>t!==Q&&!t.__isScriptSetup&&V(t,e),Lu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Fr(r,e))return o[e]=1,r[e];if(s!==Q&&V(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&V(l,e))return o[e]=3,i[e];if(n!==Q&&V(n,e))return o[e]=4,n[e];fs&&(o[e]=0)}}const u=gn[e];let h,g;if(u)return e==="$attrs"&&me(t,"get",e),u(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Q&&V(n,e))return o[e]=4,n[e];if(g=a.config.globalProperties,V(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Fr(s,e)?(s[e]=n,!0):r!==Q&&V(r,e)?(r[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Q&&V(t,o)||Fr(e,o)||(c=i[0])&&V(c,o)||V(r,o)||V(gn,o)||V(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Oi(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fs=!0;function Uu(t){const e=zs(t),n=t.proxy,r=t.ctx;fs=!1,e.beforeCreate&&ki(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:h,mounted:g,beforeUpdate:_,updated:R,activated:P,deactivated:L,beforeDestroy:k,beforeUnmount:N,destroyed:H,unmounted:x,render:Z,renderTracked:te,renderTriggered:de,errorCaptured:ye,serverPrefetch:ke,expose:be,inheritAttrs:it,components:bt,directives:Ne,filters:cn}=e;if(l&&Fu(l,r,null),o)for(const J in o){const z=o[J];B(z)&&(r[J]=z.bind(n))}if(s){const J=s.call(n,n);ee(J)&&(t.data=br(J))}if(fs=!0,i)for(const J in i){const z=i[J],Ge=B(z)?z.bind(n,n):B(z.get)?z.get.bind(n,n):Ce,ot=!B(z)&&B(z.set)?z.set.bind(n):Ce,De=Se({get:Ge,set:ot});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>De.value,set:he=>De.value=he})}if(c)for(const J in c)Pa(c[J],r,n,J);if(a){const J=B(a)?a.call(n):a;Reflect.ownKeys(J).forEach(z=>{Gn(z,J[z])})}u&&ki(u,t,"c");function re(J,z){$(z)?z.forEach(Ge=>J(Ge.bind(n))):z&&J(z.bind(n))}if(re(Ru,h),re(Cu,g),re(Pu,_),re(Ou,R),re(Tu,P),re(Su,L),re(xu,ye),re(Mu,te),re(Du,de),re(ku,N),re(Ca,x),re(Nu,ke),$(be))if(be.length){const J=t.exposed||(t.exposed={});be.forEach(z=>{Object.defineProperty(J,z,{get:()=>n[z],set:Ge=>n[z]=Ge})})}else t.exposed||(t.exposed={});Z&&t.render===Ce&&(t.render=Z),it!=null&&(t.inheritAttrs=it),bt&&(t.components=bt),Ne&&(t.directives=Ne)}function Fu(t,e,n=Ce){$(t)&&(t=ds(t));for(const r in t){const s=t[r];let i;ee(s)?"default"in s?i=$e(s.from||r,s.default,!0):i=$e(s.from||r):i=$e(s),le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ki(t,e,n){Pe($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pa(t,e,n,r){const s=r.includes(".")?Sa(n,r):()=>n[r];if(oe(t)){const i=e[t];B(i)&&Kn(s,i)}else if(B(t))Kn(s,t.bind(n));else if(ee(t))if($(t))t.forEach(i=>Pa(i,e,n,r));else{const i=B(t.handler)?t.handler.bind(n):e[t.handler];B(i)&&Kn(s,i,t)}}function zs(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>rr(a,l,o,!0)),rr(a,e,o)),ee(e)&&i.set(e,a),a}function rr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&rr(t,i,n,!0),s&&s.forEach(o=>rr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=$u[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const $u={data:Ni,props:Di,emits:Di,methods:hn,computed:hn,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:hn,directives:hn,watch:ju,provide:Ni,inject:Bu};function Ni(t,e){return e?t?function(){return ie(B(t)?t.call(this,this):t,B(e)?e.call(this,this):e)}:e:t}function Bu(t,e){return hn(ds(t),ds(e))}function ds(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function fe(t,e){return t?[...new Set([].concat(t,e))]:e}function hn(t,e){return t?ie(Object.create(null),t,e):e}function Di(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ie(Object.create(null),Oi(t),Oi(e!=null?e:{})):e}function ju(t,e){if(!t)return e;if(!e)return t;const n=ie(Object.create(null),t);for(const r in e)n[r]=fe(t[r],e[r]);return n}function Oa(){return{app:null,config:{isNativeTag:_l,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hu=0;function Vu(t,e){return function(r,s=null){B(r)||(r=ie({},r)),s!=null&&!ee(s)&&(s=null);const i=Oa(),o=new WeakSet;let c=!1;const a=i.app={_uid:Hu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:yf,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&B(l.install)?(o.add(l),l.install(a,...u)):B(l)&&(o.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,h){if(!c){const g=we(r,s);return g.appContext=i,u&&e?e(g,l):t(g,l,h),c=!0,a._container=l,l.__vue_app__=a,Js(g.component)||g.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a},runWithContext(l){sr=a;try{return l()}finally{sr=null}}};return a}}let sr=null;function Gn(t,e){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[t]=e}}function $e(t,e,n=!1){const r=se||Ae;if(r||sr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:sr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&B(e)?e.call(r&&r.proxy):e}}function Wu(t,e,n,r=!1){const s={},i={};er(i,Sr,1),t.propsDefaults=Object.create(null),ka(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:ca(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function zu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=W(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];if(Ir(t.emitsOptions,g))continue;const _=e[g];if(a)if(V(i,g))_!==i[g]&&(i[g]=_,l=!0);else{const R=Ve(g);s[R]=hs(a,c,R,_,t,!1)}else _!==i[g]&&(i[g]=_,l=!0)}}}else{ka(t,e,s,i)&&(l=!0);let u;for(const h in c)(!e||!V(e,h)&&((u=nn(h))===h||!V(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=hs(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!V(e,h))&&(delete i[h],l=!0)}l&&tt(t,"set","$attrs")}function ka(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(zn(a))continue;const l=e[a];let u;s&&V(s,u=Ve(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:Ir(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=W(n),l=c||Q;for(let u=0;u<i.length;u++){const h=i[u];n[h]=hs(s,a,h,l[h],t,!V(l,h))}}return o}function hs(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=V(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&B(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(Qt(s),r=l[n]=a.call(null,e),Pt())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===nn(n))&&(r=!0))}return r}function Na(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!B(t)){const u=h=>{a=!0;const[g,_]=Na(h,e,!0);ie(o,g),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return ee(t)&&r.set(t,Wt),Wt;if($(i))for(let u=0;u<i.length;u++){const h=Ve(i[u]);Mi(h)&&(o[h]=Q)}else if(i)for(const u in i){const h=Ve(u);if(Mi(h)){const g=i[u],_=o[h]=$(g)||B(g)?{type:g}:ie({},g);if(_){const R=Ui(Boolean,_.type),P=Ui(String,_.type);_[0]=R>-1,_[1]=P<0||R<P,(R>-1||V(_,"default"))&&c.push(h)}}}const l=[o,c];return ee(t)&&r.set(t,l),l}function Mi(t){return t[0]!=="$"}function xi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Li(t,e){return xi(t)===xi(e)}function Ui(t,e){return $(e)?e.findIndex(n=>Li(n,t)):B(e)&&Li(e,t)?0:-1}const Da=t=>t[0]==="_"||t==="$stable",Ks=t=>$(t)?t.map(Le):[Le(t)],Ku=(t,e,n)=>{if(e._n)return e;const r=hu((...s)=>Ks(e(...s)),n);return r._c=!1,r},Ma=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Da(s))continue;const i=t[s];if(B(i))e[s]=Ku(s,i,r);else if(i!=null){const o=Ks(i);e[s]=()=>o}}},xa=(t,e)=>{const n=Ks(e);t.slots.default=()=>n},qu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=W(e),er(e,"_",n)):Ma(e,t.slots={})}else t.slots={},e&&xa(t,e);er(t.slots,Sr,1)},Gu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(ie(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Ma(e,s)),o=e}else e&&(xa(t,e),o={default:1});if(i)for(const c in s)!Da(c)&&o[c]==null&&delete s[c]};function ps(t,e,n,r,s=!1){if($(t)){t.forEach((g,_)=>ps(g,e&&($(e)?e[_]:e),n,r,s));return}if(qn(r)&&!s)return;const i=r.shapeFlag&4?Js(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===Q?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(oe(l)?(u[l]=null,V(h,l)&&(h[l]=null)):le(l)&&(l.value=null)),B(a))gt(a,c,12,[o,u]);else{const g=oe(a),_=le(a);if(g||_){const R=()=>{if(t.f){const P=g?V(h,a)?h[a]:u[a]:a.value;s?$(P)&&Ns(P,i):$(P)?P.includes(i)||P.push(i):g?(u[a]=[i],V(h,a)&&(h[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else g?(u[a]=o,V(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(R.id=-1,pe(R,n)):R()}}}const pe=Iu;function Ju(t){return Yu(t)}function Yu(t,e){const n=ss();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:h,nextSibling:g,setScopeId:_=Ce,insertStaticContent:R}=t,P=(f,d,p,m=null,y=null,b=null,S=!1,I=null,E=!!d.dynamicChildren)=>{if(f===d)return;f&&!un(f,d)&&(m=v(f),he(f,y,b,!0),f=null),d.patchFlag===-2&&(E=!1,d.dynamicChildren=null);const{type:w,ref:D,shapeFlag:C}=d;switch(w){case Tr:L(f,d,p,m);break;case Tn:k(f,d,p,m);break;case $r:f==null&&N(d,p,m,S);break;case Xe:bt(f,d,p,m,y,b,S,I,E);break;default:C&1?Z(f,d,p,m,y,b,S,I,E):C&6?Ne(f,d,p,m,y,b,S,I,E):(C&64||C&128)&&w.process(f,d,p,m,y,b,S,I,E,T)}D!=null&&y&&ps(D,f&&f.ref,b,d||f,!d)},L=(f,d,p,m)=>{if(f==null)r(d.el=c(d.children),p,m);else{const y=d.el=f.el;d.children!==f.children&&l(y,d.children)}},k=(f,d,p,m)=>{f==null?r(d.el=a(d.children||""),p,m):d.el=f.el},N=(f,d,p,m)=>{[f.el,f.anchor]=R(f.children,d,p,m,f.el,f.anchor)},H=({el:f,anchor:d},p,m)=>{let y;for(;f&&f!==d;)y=g(f),r(f,p,m),f=y;r(d,p,m)},x=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=g(f),s(f),f=p;s(d)},Z=(f,d,p,m,y,b,S,I,E)=>{S=S||d.type==="svg",f==null?te(d,p,m,y,b,S,I,E):ke(f,d,y,b,S,I,E)},te=(f,d,p,m,y,b,S,I)=>{let E,w;const{type:D,props:C,shapeFlag:M,transition:F,dirs:j}=f;if(E=f.el=o(f.type,b,C&&C.is,C),M&8?u(E,f.children):M&16&&ye(f.children,E,null,m,y,b&&D!=="foreignObject",S,I),j&&wt(f,null,m,"created"),de(E,f,f.scopeId,S,m),C){for(const G in C)G!=="value"&&!zn(G)&&i(E,G,null,C[G],b,f.children,m,y,ae);"value"in C&&i(E,"value",null,C.value),(w=C.onVnodeBeforeMount)&&xe(w,m,f)}j&&wt(f,null,m,"beforeMount");const X=Xu(y,F);X&&F.beforeEnter(E),r(E,d,p),((w=C&&C.onVnodeMounted)||X||j)&&pe(()=>{w&&xe(w,m,f),X&&F.enter(E),j&&wt(f,null,m,"mounted")},y)},de=(f,d,p,m,y)=>{if(p&&_(f,p),m)for(let b=0;b<m.length;b++)_(f,m[b]);if(y){let b=y.subTree;if(d===b){const S=y.vnode;de(f,S,S.scopeId,S.slotScopeIds,y.parent)}}},ye=(f,d,p,m,y,b,S,I,E=0)=>{for(let w=E;w<f.length;w++){const D=f[w]=I?ut(f[w]):Le(f[w]);P(null,D,d,p,m,y,b,S,I)}},ke=(f,d,p,m,y,b,S)=>{const I=d.el=f.el;let{patchFlag:E,dynamicChildren:w,dirs:D}=d;E|=f.patchFlag&16;const C=f.props||Q,M=d.props||Q;let F;p&&It(p,!1),(F=M.onVnodeBeforeUpdate)&&xe(F,p,d,f),D&&wt(d,f,p,"beforeUpdate"),p&&It(p,!0);const j=y&&d.type!=="foreignObject";if(w?be(f.dynamicChildren,w,I,p,m,j,b):S||z(f,d,I,null,p,m,j,b,!1),E>0){if(E&16)it(I,d,C,M,p,m,y);else if(E&2&&C.class!==M.class&&i(I,"class",null,M.class,y),E&4&&i(I,"style",C.style,M.style,y),E&8){const X=d.dynamicProps;for(let G=0;G<X.length;G++){const ne=X[G],Ie=C[ne],Bt=M[ne];(Bt!==Ie||ne==="value")&&i(I,ne,Ie,Bt,y,f.children,p,m,ae)}}E&1&&f.children!==d.children&&u(I,d.children)}else!S&&w==null&&it(I,d,C,M,p,m,y);((F=M.onVnodeUpdated)||D)&&pe(()=>{F&&xe(F,p,d,f),D&&wt(d,f,p,"updated")},m)},be=(f,d,p,m,y,b,S)=>{for(let I=0;I<d.length;I++){const E=f[I],w=d[I],D=E.el&&(E.type===Xe||!un(E,w)||E.shapeFlag&70)?h(E.el):p;P(E,w,D,null,m,y,b,S,!0)}},it=(f,d,p,m,y,b,S)=>{if(p!==m){if(p!==Q)for(const I in p)!zn(I)&&!(I in m)&&i(f,I,p[I],null,S,d.children,y,b,ae);for(const I in m){if(zn(I))continue;const E=m[I],w=p[I];E!==w&&I!=="value"&&i(f,I,w,E,S,d.children,y,b,ae)}"value"in m&&i(f,"value",p.value,m.value)}},bt=(f,d,p,m,y,b,S,I,E)=>{const w=d.el=f?f.el:c(""),D=d.anchor=f?f.anchor:c("");let{patchFlag:C,dynamicChildren:M,slotScopeIds:F}=d;F&&(I=I?I.concat(F):F),f==null?(r(w,p,m),r(D,p,m),ye(d.children,p,D,y,b,S,I,E)):C>0&&C&64&&M&&f.dynamicChildren?(be(f.dynamicChildren,M,p,y,b,S,I),(d.key!=null||y&&d===y.subTree)&&La(f,d,!0)):z(f,d,p,D,y,b,S,I,E)},Ne=(f,d,p,m,y,b,S,I,E)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?y.ctx.activate(d,p,m,S,E):cn(d,p,m,y,b,S,E):Ut(f,d,E)},cn=(f,d,p,m,y,b,S)=>{const I=f.component=uf(f,m,y);if(Aa(f)&&(I.ctx.renderer=T),ff(I),I.asyncDep){if(y&&y.registerDep(I,re),!f.el){const E=I.subTree=we(Tn);k(null,E,d,p)}return}re(I,f,d,p,y,b,S)},Ut=(f,d,p)=>{const m=d.component=f.component;if(mu(f,d,p))if(m.asyncDep&&!m.asyncResolved){J(m,d,p);return}else m.next=d,lu(m.update),m.update();else d.el=f.el,m.vnode=d},re=(f,d,p,m,y,b,S)=>{const I=()=>{if(f.isMounted){let{next:D,bu:C,u:M,parent:F,vnode:j}=f,X=D,G;It(f,!1),D?(D.el=j.el,J(f,D,S)):D=j,C&&Lr(C),(G=D.props&&D.props.onVnodeBeforeUpdate)&&xe(G,F,D,j),It(f,!0);const ne=Ur(f),Ie=f.subTree;f.subTree=ne,P(Ie,ne,h(Ie.el),v(Ie),f,y,b),D.el=ne.el,X===null&&_u(f,ne.el),M&&pe(M,y),(G=D.props&&D.props.onVnodeUpdated)&&pe(()=>xe(G,F,D,j),y)}else{let D;const{el:C,props:M}=d,{bm:F,m:j,parent:X}=f,G=qn(d);if(It(f,!1),F&&Lr(F),!G&&(D=M&&M.onVnodeBeforeMount)&&xe(D,X,d),It(f,!0),C&&K){const ne=()=>{f.subTree=Ur(f),K(C,f.subTree,f,y,null)};G?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ne()):ne()}else{const ne=f.subTree=Ur(f);P(null,ne,p,m,f,y,b),d.el=ne.el}if(j&&pe(j,y),!G&&(D=M&&M.onVnodeMounted)){const ne=d;pe(()=>xe(D,X,ne),y)}(d.shapeFlag&256||X&&qn(X.vnode)&&X.vnode.shapeFlag&256)&&f.a&&pe(f.a,y),f.isMounted=!0,d=p=m=null}},E=f.effect=new Us(I,()=>Vs(w),f.scope),w=f.update=()=>E.run();w.id=f.uid,It(f,!0),w()},J=(f,d,p)=>{d.component=f;const m=f.vnode.props;f.vnode=d,f.next=null,zu(f,d.props,m,p),Gu(f,d.children,p),rn(),Ri(),sn()},z=(f,d,p,m,y,b,S,I,E=!1)=>{const w=f&&f.children,D=f?f.shapeFlag:0,C=d.children,{patchFlag:M,shapeFlag:F}=d;if(M>0){if(M&128){ot(w,C,p,m,y,b,S,I,E);return}else if(M&256){Ge(w,C,p,m,y,b,S,I,E);return}}F&8?(D&16&&ae(w,y,b),C!==w&&u(p,C)):D&16?F&16?ot(w,C,p,m,y,b,S,I,E):ae(w,y,b,!0):(D&8&&u(p,""),F&16&&ye(C,p,m,y,b,S,I,E))},Ge=(f,d,p,m,y,b,S,I,E)=>{f=f||Wt,d=d||Wt;const w=f.length,D=d.length,C=Math.min(w,D);let M;for(M=0;M<C;M++){const F=d[M]=E?ut(d[M]):Le(d[M]);P(f[M],F,p,null,y,b,S,I,E)}w>D?ae(f,y,b,!0,!1,C):ye(d,p,m,y,b,S,I,E,C)},ot=(f,d,p,m,y,b,S,I,E)=>{let w=0;const D=d.length;let C=f.length-1,M=D-1;for(;w<=C&&w<=M;){const F=f[w],j=d[w]=E?ut(d[w]):Le(d[w]);if(un(F,j))P(F,j,p,null,y,b,S,I,E);else break;w++}for(;w<=C&&w<=M;){const F=f[C],j=d[M]=E?ut(d[M]):Le(d[M]);if(un(F,j))P(F,j,p,null,y,b,S,I,E);else break;C--,M--}if(w>C){if(w<=M){const F=M+1,j=F<D?d[F].el:m;for(;w<=M;)P(null,d[w]=E?ut(d[w]):Le(d[w]),p,j,y,b,S,I,E),w++}}else if(w>M)for(;w<=C;)he(f[w],y,b,!0),w++;else{const F=w,j=w,X=new Map;for(w=j;w<=M;w++){const _e=d[w]=E?ut(d[w]):Le(d[w]);_e.key!=null&&X.set(_e.key,w)}let G,ne=0;const Ie=M-j+1;let Bt=!1,mi=0;const ln=new Array(Ie);for(w=0;w<Ie;w++)ln[w]=0;for(w=F;w<=C;w++){const _e=f[w];if(ne>=Ie){he(_e,y,b,!0);continue}let Me;if(_e.key!=null)Me=X.get(_e.key);else for(G=j;G<=M;G++)if(ln[G-j]===0&&un(_e,d[G])){Me=G;break}Me===void 0?he(_e,y,b,!0):(ln[Me-j]=w+1,Me>=mi?mi=Me:Bt=!0,P(_e,d[Me],p,null,y,b,S,I,E),ne++)}const _i=Bt?Qu(ln):Wt;for(G=_i.length-1,w=Ie-1;w>=0;w--){const _e=j+w,Me=d[_e],vi=_e+1<D?d[_e+1].el:m;ln[w]===0?P(null,Me,p,vi,y,b,S,I,E):Bt&&(G<0||w!==_i[G]?De(Me,p,vi,2):G--)}}},De=(f,d,p,m,y=null)=>{const{el:b,type:S,transition:I,children:E,shapeFlag:w}=f;if(w&6){De(f.component.subTree,d,p,m);return}if(w&128){f.suspense.move(d,p,m);return}if(w&64){S.move(f,d,p,T);return}if(S===Xe){r(b,d,p);for(let C=0;C<E.length;C++)De(E[C],d,p,m);r(f.anchor,d,p);return}if(S===$r){H(f,d,p);return}if(m!==2&&w&1&&I)if(m===0)I.beforeEnter(b),r(b,d,p),pe(()=>I.enter(b),y);else{const{leave:C,delayLeave:M,afterLeave:F}=I,j=()=>r(b,d,p),X=()=>{C(b,()=>{j(),F&&F()})};M?M(b,j,X):X()}else r(b,d,p)},he=(f,d,p,m=!1,y=!1)=>{const{type:b,props:S,ref:I,children:E,dynamicChildren:w,shapeFlag:D,patchFlag:C,dirs:M}=f;if(I!=null&&ps(I,null,p,f,!0),D&256){d.ctx.deactivate(f);return}const F=D&1&&M,j=!qn(f);let X;if(j&&(X=S&&S.onVnodeBeforeUnmount)&&xe(X,d,f),D&6)Un(f.component,p,m);else{if(D&128){f.suspense.unmount(p,m);return}F&&wt(f,null,d,"beforeUnmount"),D&64?f.type.remove(f,d,p,y,T,m):w&&(b!==Xe||C>0&&C&64)?ae(w,d,p,!1,!0):(b===Xe&&C&384||!y&&D&16)&&ae(E,d,p),m&&Ft(f)}(j&&(X=S&&S.onVnodeUnmounted)||F)&&pe(()=>{X&&xe(X,d,f),F&&wt(f,null,d,"unmounted")},p)},Ft=f=>{const{type:d,el:p,anchor:m,transition:y}=f;if(d===Xe){$t(p,m);return}if(d===$r){x(f);return}const b=()=>{s(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:I}=y,E=()=>S(p,b);I?I(f.el,b,E):E()}else b()},$t=(f,d)=>{let p;for(;f!==d;)p=g(f),s(f),f=p;s(d)},Un=(f,d,p)=>{const{bum:m,scope:y,update:b,subTree:S,um:I}=f;m&&Lr(m),y.stop(),b&&(b.active=!1,he(S,f,d,p)),I&&pe(I,d),pe(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},ae=(f,d,p,m=!1,y=!1,b=0)=>{for(let S=b;S<f.length;S++)he(f[S],d,p,m,y)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),A=(f,d,p)=>{f==null?d._vnode&&he(d._vnode,null,null,!0):P(d._vnode||null,f,d,null,null,null,p),Ri(),ya(),d._vnode=f},T={p:P,um:he,m:De,r:Ft,mt:cn,mc:ye,pc:z,pbc:be,n:v,o:t};let O,K;return e&&([O,K]=e(T)),{render:A,hydrate:O,createApp:Vu(A,O)}}function It({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Xu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function La(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=ut(s[i]),c.el=o.el),n||La(o,c)),c.type===Tr&&(c.el=o.el)}}function Qu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Zu=t=>t.__isTeleport,Xe=Symbol.for("v-fgt"),Tr=Symbol.for("v-txt"),Tn=Symbol.for("v-cmt"),$r=Symbol.for("v-stc"),mn=[];let Re=null;function Ua(t=!1){mn.push(Re=t?null:[])}function ef(){mn.pop(),Re=mn[mn.length-1]||null}let Sn=1;function Fi(t){Sn+=t}function Fa(t){return t.dynamicChildren=Sn>0?Re||Wt:null,ef(),Sn>0&&Re&&Re.push(t),t}function tf(t,e,n,r,s,i){return Fa(Ba(t,e,n,r,s,i,!0))}function nf(t,e,n,r,s){return Fa(we(t,e,n,r,s,!0))}function gs(t){return t?t.__v_isVNode===!0:!1}function un(t,e){return t.type===e.type&&t.key===e.key}const Sr="__vInternal",$a=({key:t})=>t!=null?t:null,Jn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?oe(t)||le(t)||B(t)?{i:Ae,r:t,k:e,f:!!n}:t:null);function Ba(t,e=null,n=null,r=0,s=null,i=t===Xe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&$a(e),ref:e&&Jn(e),scopeId:Ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ae};return c?(qs(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=oe(n)?8:16),Sn>0&&!o&&Re&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Re.push(a),a}const we=rf;function rf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===yu)&&(t=Tn),gs(t)){const c=Xt(t,e,!0);return n&&qs(c,n),Sn>0&&!i&&Re&&(c.shapeFlag&6?Re[Re.indexOf(t)]=c:Re.push(c)),c.patchFlag|=-2,c}if(mf(t)&&(t=t.__vccOpts),e){e=sf(e);let{class:c,style:a}=e;c&&!oe(c)&&(e.class=xs(c)),ee(a)&&(ua(a)&&!$(a)&&(a=ie({},a)),e.style=Ms(a))}const o=oe(t)?1:wu(t)?128:Zu(t)?64:ee(t)?4:B(t)?2:0;return Ba(t,e,n,r,s,o,i,!0)}function sf(t){return t?ua(t)||Sr in t?ie({},t):t:null}function Xt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?af(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&$a(c),ref:e&&e.ref?n&&s?$(s)?s.concat(Jn(e)):[s,Jn(e)]:Jn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xt(t.ssContent),ssFallback:t.ssFallback&&Xt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function of(t=" ",e=0){return we(Tr,null,t,e)}function Le(t){return t==null||typeof t=="boolean"?we(Tn):$(t)?we(Xe,null,t.slice()):typeof t=="object"?ut(t):we(Tr,null,String(t))}function ut(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xt(t)}function qs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),qs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Sr in e)?e._ctx=Ae:s===3&&Ae&&(Ae.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else B(e)?(e={default:e,_ctx:Ae},n=32):(e=String(e),r&64?(n=16,e=[of(e)]):n=8);t.children=e,t.shapeFlag|=n}function af(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xs([e.class,r.class]));else if(s==="style")e.style=Ms([e.style,r.style]);else if(pr(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function xe(t,e,n,r=null){Pe(t,e,7,[n,r])}const cf=Oa();let lf=0;function uf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||cf,i={uid:lf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Nl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Na(r,s),emitsOptions:wa(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=du.bind(null,i),t.ce&&t.ce(i),i}let se=null,Gs,jt,$i="__VUE_INSTANCE_SETTERS__";(jt=ss()[$i])||(jt=ss()[$i]=[]),jt.push(t=>se=t),Gs=t=>{jt.length>1?jt.forEach(e=>e(t)):jt[0](t)};const Qt=t=>{Gs(t),t.scope.on()},Pt=()=>{se&&se.scope.off(),Gs(null)};function ja(t){return t.vnode.shapeFlag&4}let An=!1;function ff(t,e=!1){An=e;const{props:n,children:r}=t.vnode,s=ja(t);Wu(t,n,s,e),qu(t,r);const i=s?df(t,e):void 0;return An=!1,i}function df(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=fa(new Proxy(t.ctx,Lu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?pf(t):null;Qt(t),rn();const i=gt(r,t,0,[t.props,s]);if(sn(),Pt(),Yo(i)){if(i.then(Pt,Pt),e)return i.then(o=>{Bi(t,o,e)}).catch(o=>{wr(o,t,0)});t.asyncDep=i}else Bi(t,i,e)}else Ha(t,e)}function Bi(t,e,n){B(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ee(e)&&(t.setupState=ga(e)),Ha(t,n)}let ji;function Ha(t,e,n){const r=t.type;if(!t.render){if(!e&&ji&&!r.render){const s=r.template||zs(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=ie(ie({isCustomElement:i,delimiters:c},o),a);r.render=ji(s,l)}}t.render=r.render||Ce}{Qt(t),rn();try{Uu(t)}finally{sn(),Pt()}}}function hf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return me(t,"get","$attrs"),e[n]}}))}function pf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return hf(t)},slots:t.slots,emit:t.emit,expose:e}}function Js(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ga(fa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gn)return gn[n](t)},has(e,n){return n in e||n in gn}}))}function gf(t,e=!0){return B(t)?t.displayName||t.name:t.name||e&&t.__name}function mf(t){return B(t)&&"__vccOpts"in t}const Se=(t,e)=>ou(t,e,An);function Va(t,e,n){const r=arguments.length;return r===2?ee(e)&&!$(e)?gs(e)?we(t,null,[e]):we(t,e):we(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&gs(n)&&(n=[n]),we(t,e,n))}const _f=Symbol.for("v-scx"),vf=()=>$e(_f),yf="3.3.10",bf="http://www.w3.org/2000/svg",St=typeof document<"u"?document:null,Hi=St&&St.createElement("template"),wf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?St.createElementNS(bf,t):St.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>St.createTextNode(t),createComment:t=>St.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>St.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hi.innerHTML=r?"<svg>".concat(t,"</svg>"):t;const c=Hi.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},If=Symbol("_vtc");function Ef(t,e,n){const r=t[If];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Tf=Symbol("_vod");function Sf(t,e,n){const r=t.style,s=oe(n);if(n&&!s){if(e&&!oe(e))for(const i in e)n[i]==null&&ms(r,i,"");for(const i in n)ms(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),Tf in t&&(r.display=i)}}const Vi=/\s*!important$/;function ms(t,e,n){if($(n))n.forEach(r=>ms(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Af(t,e);Vi.test(n)?t.setProperty(nn(r),n.replace(Vi,""),"important"):t[r]=n}}const Wi=["Webkit","Moz","ms"],Br={};function Af(t,e){const n=Br[e];if(n)return n;let r=Ve(e);if(r!=="filter"&&r in t)return Br[e]=r;r=vr(r);for(let s=0;s<Wi.length;s++){const i=Wi[s]+r;if(i in t)return Br[e]=i}return e}const zi="http://www.w3.org/1999/xlink";function Rf(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zi,e.slice(6,e.length)):t.setAttributeNS(zi,e,n);else{const i=kl(e);n==null||i&&!Xo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Cf(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,u=n==null?"":n;l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Xo(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch(l){}a&&t.removeAttribute(e)}function Pf(t,e,n,r){t.addEventListener(e,n,r)}function Of(t,e,n,r){t.removeEventListener(e,n,r)}const Ki=Symbol("_vei");function kf(t,e,n,r,s=null){const i=t[Ki]||(t[Ki]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Nf(e);if(r){const l=i[e]=xf(r,s);Pf(t,c,l,a)}else o&&(Of(t,c,o,a),i[e]=void 0)}}const qi=/(?:Once|Passive|Capture)$/;function Nf(t){let e;if(qi.test(t)){e={};let r;for(;r=t.match(qi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nn(t.slice(2)),e]}let jr=0;const Df=Promise.resolve(),Mf=()=>jr||(Df.then(()=>jr=0),jr=Date.now());function xf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(Lf(r,n.value),e,5,[r])};return n.value=t,n.attached=Mf(),n}function Lf(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Gi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Uf=(t,e,n,r,s=!1,i,o,c,a)=>{e==="class"?Ef(t,r,s):e==="style"?Sf(t,n,r):pr(e)?ks(e)||kf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ff(t,e,r,s))?Cf(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Rf(t,e,r,s))};function Ff(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gi(e)&&B(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;return!(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")}return Gi(e)&&oe(n)?!1:e in t}const $f=ie({patchProp:Uf},wf);let Ji;function Bf(){return Ji||(Ji=Ju($f))}const jf=(...t)=>{const e=Bf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Hf(r);if(!s)return;const i=e._component;!B(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Hf(t){return oe(t)?document.querySelector(t):t}const Vf=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Wf={};function zf(t,e){const n=vu("router-view");return Ua(),nf(n)}const Kf=Vf(Wf,[["render",zf]]),qf="modulepreload",Gf=function(t,e){return new URL(t,e).href},Yi={},Jf=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Gf(i,r),i in Yi)return;Yi[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector('link[href="'.concat(i,'"]').concat(c)))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":qf,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error("Unable to preload CSS for ".concat(i))))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ht=typeof window<"u";function Yf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const q=Object.assign;function Hr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Oe(s)?s.map(t):t(s)}return n}const _n=()=>{},Oe=Array.isArray,Xf=/\/$/,Qf=t=>t.replace(Xf,"");function Vr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=nd(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Zf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ed(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Zt(e.matched[r],n.matched[s])&&Wa(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wa(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!td(t[n],e[n]))return!1;return!0}function td(t,e){return Oe(t)?Qi(t,e):Oe(e)?Qi(e,t):t===e}function Qi(t,e){return Oe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function nd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Rn;(function(t){t.pop="pop",t.push="push"})(Rn||(Rn={}));var vn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vn||(vn={}));function rd(t){if(!t)if(Ht){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Qf(t)}const sd=/^[^#]+#/;function id(t,e){return t.replace(sd,"#")+e}function od(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ar=()=>({left:window.pageXOffset,top:window.pageYOffset});function ad(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=od(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Zi(t,e){return(history.state?history.state.position-e:-1)+t}const _s=new Map;function cd(t,e){_s.set(t,e)}function ld(t){const e=_s.get(t);return _s.delete(t),e}let ud=()=>location.protocol+"//"+location.host;function za(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Xi(a,"")}return Xi(n,t)+r+s}function fd(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const _=za(t,location),R=n.value,P=e.value;let L=0;if(g){if(n.value=_,e.value=g,o&&o===R){o=null;return}L=P?g.position-P.position:0}else r(_);s.forEach(k=>{k(n.value,R,{delta:L,type:Rn.pop,direction:L?L>0?vn.forward:vn.back:vn.unknown})})};function a(){o=n.value}function l(g){s.push(g);const _=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return i.push(_),_}function u(){const{history:g}=window;g.state&&g.replaceState(q({},g.state,{scroll:Ar()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function eo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ar():null}}function dd(t){const{history:e,location:n}=window,r={value:za(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:ud()+t+a;try{e[u?"replaceState":"pushState"](l,"",g),s.value=l}catch(_){console.error(_),n[u?"replace":"assign"](g)}}function o(a,l){const u=q({},e.state,eo(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=q({},s.value,e.state,{forward:a,scroll:Ar()});i(u.current,u,!0);const h=q({},eo(r.value,a,null),{position:u.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function hd(t){t=rd(t);const e=dd(t),n=fd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:id.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function pd(t){return typeof t=="string"||t&&typeof t=="object"}function Ka(t){return typeof t=="string"||typeof t=="symbol"}const ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qa=Symbol("");var to;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(to||(to={}));function en(t,e){return q(new Error,{type:t,[qa]:!0},e)}function Je(t,e){return t instanceof Error&&qa in t&&(e==null||!!(t.type&e))}const no="[^/]+?",gd={sensitive:!1,strict:!1,start:!0,end:!0},md=/[.+*?^${}()[\]/\\]/g;function _d(t,e){const n=q({},gd,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let _=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(md,"\\$&"),_+=40;else if(g.type===1){const{value:R,repeatable:P,optional:L,regexp:k}=g;i.push({name:R,repeatable:P,optional:L});const N=k||no;if(N!==no){_+=10;try{new RegExp("(".concat(N,")"))}catch(x){throw new Error('Invalid custom RegExp for param "'.concat(R,'" (').concat(N,"): ")+x.message)}}let H=P?"((?:".concat(N,")(?:/(?:").concat(N,"))*)"):"(".concat(N,")");h||(H=L&&l.length<2?"(?:/".concat(H,")"):"/"+H),L&&(H+="?"),s+=H,_+=20,L&&(_+=-8),P&&(_+=-20),N===".*"&&(_+=-50)}u.push(_)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),h={};if(!u)return null;for(let g=1;g<u.length;g++){const _=u[g]||"",R=i[g-1];h[R.name]=_&&R.repeatable?_.split("/"):_}return h}function a(l){let u="",h=!1;for(const g of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of g)if(_.type===0)u+=_.value;else if(_.type===1){const{value:R,repeatable:P,optional:L}=_,k=R in l?l[R]:"";if(Oe(k)&&!P)throw new Error('Provided param "'.concat(R,'" is an array but it is not repeatable (* or + modifiers)'));const N=Oe(k)?k.join("/"):k;if(!N)if(L)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error('Missing required param "'.concat(R,'"'));u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function vd(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function yd(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=vd(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ro(r))return 1;if(ro(s))return-1}return s.length-r.length}function ro(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const bd={type:0,value:""},wd=/[a-zA-Z0-9_]/;function Id(t){if(!t)return[[]];if(t==="/")return[[bd]];if(!t.startsWith("/"))throw new Error('Invalid path "'.concat(t,'"'));function e(_){throw new Error("ERR (".concat(n,')/"').concat(l,'": ').concat(_))}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e("A repeatable param (".concat(l,") must be alone in its segment. eg: '/:ids+.")),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:a==="("?n=2:wd.test(a)?g():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e('Unfinished custom RegExp for param "'.concat(l,'"')),h(),o(),s}function Ed(t,e,n){const r=_d(Id(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Td(t,e){const n=[],r=new Map;e=oo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,g){const _=!g,R=Sd(u);R.aliasOf=g&&g.record;const P=oo(e,u),L=[R];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of H)L.push(q({},R,{components:g?g.record.components:R.components,path:x,aliasOf:g?g.record:R}))}let k,N;for(const H of L){const{path:x}=H;if(h&&x[0]!=="/"){const Z=h.record.path,te=Z[Z.length-1]==="/"?"":"/";H.path=h.record.path+(x&&te+x)}if(k=Ed(H,h,P),g?g.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),_&&u.name&&!io(k)&&o(u.name)),R.children){const Z=R.children;for(let te=0;te<Z.length;te++)i(Z[te],k,g&&g.children[te])}g=g||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&a(k)}return N?()=>{o(N)}:_n}function o(u){if(Ka(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){let h=0;for(;h<n.length&&yd(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ga(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!io(u)&&r.set(u.record.name,u)}function l(u,h){let g,_={},R,P;if("name"in u&&u.name){if(g=r.get(u.name),!g)throw en(1,{location:u});P=g.record.name,_=q(so(h.params,g.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&so(u.params,g.keys.map(N=>N.name))),R=g.stringify(_)}else if("path"in u)R=u.path,g=n.find(N=>N.re.test(R)),g&&(_=g.parse(R),P=g.record.name);else{if(g=h.name?r.get(h.name):n.find(N=>N.re.test(h.path)),!g)throw en(1,{location:u,currentLocation:h});P=g.record.name,_=q({},h.params,u.params),R=g.stringify(_)}const L=[];let k=g;for(;k;)L.unshift(k.record),k=k.parent;return{name:P,path:R,params:_,matched:L,meta:Rd(L)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function so(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Sd(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ad(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ad(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function io(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Rd(t){return t.reduce((e,n)=>q(e,n.meta),{})}function oo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ga(t,e){return e.children.some(n=>n===t||Ga(t,n))}const Ja=/#/g,Cd=/&/g,Pd=/\//g,Od=/=/g,kd=/\?/g,Ya=/\+/g,Nd=/%5B/g,Dd=/%5D/g,Xa=/%5E/g,Md=/%60/g,Qa=/%7B/g,xd=/%7C/g,Za=/%7D/g,Ld=/%20/g;function Ys(t){return encodeURI(""+t).replace(xd,"|").replace(Nd,"[").replace(Dd,"]")}function Ud(t){return Ys(t).replace(Qa,"{").replace(Za,"}").replace(Xa,"^")}function vs(t){return Ys(t).replace(Ya,"%2B").replace(Ld,"+").replace(Ja,"%23").replace(Cd,"%26").replace(Md,"`").replace(Qa,"{").replace(Za,"}").replace(Xa,"^")}function Fd(t){return vs(t).replace(Od,"%3D")}function $d(t){return Ys(t).replace(Ja,"%23").replace(kd,"%3F")}function Bd(t){return t==null?"":$d(t).replace(Pd,"%2F")}function ir(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function jd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ya," "),o=i.indexOf("="),c=ir(o<0?i:i.slice(0,o)),a=o<0?null:ir(i.slice(o+1));if(c in e){let l=e[c];Oe(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function ao(t){let e="";for(let n in t){const r=t[n];if(n=Fd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Oe(r)?r.map(i=>i&&vs(i)):[r&&vs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Hd(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Oe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Vd=Symbol(""),co=Symbol(""),Rr=Symbol(""),ec=Symbol(""),ys=Symbol("");function fn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ft(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=h=>{h===!1?c(en(4,{from:n,to:e})):h instanceof Error?c(h):pd(h)?c(en(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,a);let u=Promise.resolve(l);t.length<3&&(u=u.then(a)),u.catch(h=>c(h))})}function Wr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Wd(c)){const l=(c.__vccOpts||c)[e];l&&s.push(ft(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error("Couldn't resolve component \"".concat(o,'" at "').concat(i.path,'"')));const u=Yf(l)?l.default:l;i.components[o]=u;const g=(u.__vccOpts||u)[e];return g&&ft(g,n,r,i,o)()}))}}return s}function Wd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function lo(t){const e=$e(Rr),n=$e(ec),r=Se(()=>e.resolve(Kt(t.to))),s=Se(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],h=n.matched;if(!u||!h.length)return-1;const g=h.findIndex(Zt.bind(null,u));if(g>-1)return g;const _=uo(a[l-2]);return l>1&&uo(u)===_&&h[h.length-1].path!==_?h.findIndex(Zt.bind(null,a[l-2])):g}),i=Se(()=>s.value>-1&&Gd(n.params,r.value.params)),o=Se(()=>s.value>-1&&s.value===n.matched.length-1&&Wa(n.params,r.value.params));function c(a={}){return qd(a)?e[Kt(t.replace)?"replace":"push"](Kt(t.to)).catch(_n):Promise.resolve()}return{route:r,href:Se(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const zd=Ws({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:lo,setup(t,{slots:e}){const n=br(lo(t)),{options:r}=$e(Rr),s=Se(()=>({[fo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[fo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Va("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Kd=zd;function qd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Gd(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Oe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function uo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const fo=(t,e,n)=>t!=null?t:e!=null?e:n,Jd=Ws({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$e(ys),s=Se(()=>t.route||r.value),i=$e(co,0),o=Se(()=>{let l=Kt(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),c=Se(()=>s.value.matched[o.value]);Gn(co,Se(()=>o.value+1)),Gn(Vd,c),Gn(ys,s);const a=tu();return Kn(()=>[a.value,c.value,t.name],([l,u,h],[g,_,R])=>{u&&(u.instances[h]=l,_&&_!==u&&l&&l===g&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!Zt(u,_)||!g)&&(u.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=c.value,g=h&&h.components[u];if(!g)return ho(n.default,{Component:g,route:l});const _=h.props[u],R=_?_===!0?l.params:typeof _=="function"?_(l):_:null,L=Va(g,q({},R,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return ho(n.default,{Component:L,route:l})||L}}});function ho(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Yd=Jd;function Xd(t){const e=Td(t.routes,t),n=t.parseQuery||jd,r=t.stringifyQuery||ao,s=t.history,i=fn(),o=fn(),c=fn(),a=nu(ct);let l=ct;Ht&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Hr.bind(null,v=>""+v),h=Hr.bind(null,Bd),g=Hr.bind(null,ir);function _(v,A){let T,O;return Ka(v)?(T=e.getRecordMatcher(v),O=A):O=v,e.addRoute(O,T)}function R(v){const A=e.getRecordMatcher(v);A&&e.removeRoute(A)}function P(){return e.getRoutes().map(v=>v.record)}function L(v){return!!e.getRecordMatcher(v)}function k(v,A){if(A=q({},A||a.value),typeof v=="string"){const p=Vr(n,v,A.path),m=e.resolve({path:p.path},A),y=s.createHref(p.fullPath);return q(p,m,{params:g(m.params),hash:ir(p.hash),redirectedFrom:void 0,href:y})}let T;if("path"in v)T=q({},v,{path:Vr(n,v.path,A.path).path});else{const p=q({},v.params);for(const m in p)p[m]==null&&delete p[m];T=q({},v,{params:h(p)}),A.params=h(A.params)}const O=e.resolve(T,A),K=v.hash||"";O.params=u(g(O.params));const f=Zf(r,q({},v,{hash:Ud(K),path:O.path})),d=s.createHref(f);return q({fullPath:f,hash:K,query:r===ao?Hd(v.query):v.query||{}},O,{redirectedFrom:void 0,href:d})}function N(v){return typeof v=="string"?Vr(n,v,a.value.path):q({},v)}function H(v,A){if(l!==v)return en(8,{from:A,to:v})}function x(v){return de(v)}function Z(v){return x(q(N(v),{replace:!0}))}function te(v){const A=v.matched[v.matched.length-1];if(A&&A.redirect){const{redirect:T}=A;let O=typeof T=="function"?T(v):T;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=N(O):{path:O},O.params={}),q({query:v.query,hash:v.hash,params:"path"in O?{}:v.params},O)}}function de(v,A){const T=l=k(v),O=a.value,K=v.state,f=v.force,d=v.replace===!0,p=te(T);if(p)return de(q(N(p),{state:typeof p=="object"?q({},K,p.state):K,force:f,replace:d}),A||T);const m=T;m.redirectedFrom=A;let y;return!f&&ed(r,O,T)&&(y=en(16,{to:m,from:O}),De(O,O,!0,!1)),(y?Promise.resolve(y):be(m,O)).catch(b=>Je(b)?Je(b,2)?b:ot(b):z(b,m,O)).then(b=>{if(b){if(Je(b,2))return de(q({replace:d},N(b.to),{state:typeof b.to=="object"?q({},K,b.to.state):K,force:f}),A||m)}else b=bt(m,O,!0,d,K);return it(m,O,b),b})}function ye(v,A){const T=H(v,A);return T?Promise.reject(T):Promise.resolve()}function ke(v){const A=$t.values().next().value;return A&&typeof A.runWithContext=="function"?A.runWithContext(v):v()}function be(v,A){let T;const[O,K,f]=Qd(v,A);T=Wr(O.reverse(),"beforeRouteLeave",v,A);for(const p of O)p.leaveGuards.forEach(m=>{T.push(ft(m,v,A))});const d=ye.bind(null,v,A);return T.push(d),ae(T).then(()=>{T=[];for(const p of i.list())T.push(ft(p,v,A));return T.push(d),ae(T)}).then(()=>{T=Wr(K,"beforeRouteUpdate",v,A);for(const p of K)p.updateGuards.forEach(m=>{T.push(ft(m,v,A))});return T.push(d),ae(T)}).then(()=>{T=[];for(const p of f)if(p.beforeEnter)if(Oe(p.beforeEnter))for(const m of p.beforeEnter)T.push(ft(m,v,A));else T.push(ft(p.beforeEnter,v,A));return T.push(d),ae(T)}).then(()=>(v.matched.forEach(p=>p.enterCallbacks={}),T=Wr(f,"beforeRouteEnter",v,A),T.push(d),ae(T))).then(()=>{T=[];for(const p of o.list())T.push(ft(p,v,A));return T.push(d),ae(T)}).catch(p=>Je(p,8)?p:Promise.reject(p))}function it(v,A,T){c.list().forEach(O=>ke(()=>O(v,A,T)))}function bt(v,A,T,O,K){const f=H(v,A);if(f)return f;const d=A===ct,p=Ht?history.state:{};T&&(O||d?s.replace(v.fullPath,q({scroll:d&&p&&p.scroll},K)):s.push(v.fullPath,K)),a.value=v,De(v,A,T,d),ot()}let Ne;function cn(){Ne||(Ne=s.listen((v,A,T)=>{if(!Un.listening)return;const O=k(v),K=te(O);if(K){de(q(K,{replace:!0}),O).catch(_n);return}l=O;const f=a.value;Ht&&cd(Zi(f.fullPath,T.delta),Ar()),be(O,f).catch(d=>Je(d,12)?d:Je(d,2)?(de(d.to,O).then(p=>{Je(p,20)&&!T.delta&&T.type===Rn.pop&&s.go(-1,!1)}).catch(_n),Promise.reject()):(T.delta&&s.go(-T.delta,!1),z(d,O,f))).then(d=>{d=d||bt(O,f,!1),d&&(T.delta&&!Je(d,8)?s.go(-T.delta,!1):T.type===Rn.pop&&Je(d,20)&&s.go(-1,!1)),it(O,f,d)}).catch(_n)}))}let Ut=fn(),re=fn(),J;function z(v,A,T){ot(v);const O=re.list();return O.length?O.forEach(K=>K(v,A,T)):console.error(v),Promise.reject(v)}function Ge(){return J&&a.value!==ct?Promise.resolve():new Promise((v,A)=>{Ut.add([v,A])})}function ot(v){return J||(J=!v,cn(),Ut.list().forEach(([A,T])=>v?T(v):A()),Ut.reset()),v}function De(v,A,T,O){const{scrollBehavior:K}=t;if(!Ht||!K)return Promise.resolve();const f=!T&&ld(Zi(v.fullPath,0))||(O||!T)&&history.state&&history.state.scroll||null;return _a().then(()=>K(v,A,f)).then(d=>d&&ad(d)).catch(d=>z(d,v,A))}const he=v=>s.go(v);let Ft;const $t=new Set,Un={currentRoute:a,listening:!0,addRoute:_,removeRoute:R,hasRoute:L,getRoutes:P,resolve:k,options:t,push:x,replace:Z,go:he,back:()=>he(-1),forward:()=>he(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:re.add,isReady:Ge,install(v){const A=this;v.component("RouterLink",Kd),v.component("RouterView",Yd),v.config.globalProperties.$router=A,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Kt(a)}),Ht&&!Ft&&a.value===ct&&(Ft=!0,x(s.location).catch(K=>{}));const T={};for(const K in ct)Object.defineProperty(T,K,{get:()=>a.value[K],enumerable:!0});v.provide(Rr,A),v.provide(ec,ca(T)),v.provide(ys,a);const O=v.unmount;$t.add(v),v.unmount=function(){$t.delete(v),$t.size<1&&(l=ct,Ne&&Ne(),Ne=null,a.value=ct,Ft=!1,J=!1),O()}}};function ae(v){return v.reduce((A,T)=>A.then(()=>ke(T)),Promise.resolve())}return Un}function Qd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>Zt(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>Zt(l,a))||s.push(a))}return[n,r,s]}function Zd(){return $e(Rr)}/**
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
 */const tc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},nc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,u=i>>2,h=(i&3)<<4|c>>4;let g=(c&15)<<2|l>>6,_=l&63;a||(_=64,o||(g=64)),r.push(n[u],n[h],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new th;const g=i<<2|c>>4;if(r.push(g),l!==64){const _=c<<4&240|l>>2;if(r.push(_),h!==64){const R=l<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class th extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nh=function(t){const e=tc(t);return nc.encodeByteArray(e,!0)},rc=function(t){return nh(t).replace(/\./g,"")},sc=function(t){try{return nc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sh=()=>rh().__FIREBASE_DEFAULTS__,ih=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&sc(t[1]);return e&&JSON.parse(e)},Xs=()=>{try{return sh()||ih()||oh()}catch(t){console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(t));return}},ah=t=>{var e,n;return(n=(e=Xs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ic=()=>{var t;return(t=Xs())===null||t===void 0?void 0:t.config},oc=t=>{var e;return(e=Xs())===null||e===void 0?void 0:e["_".concat(t)]};/**
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
 */class ch{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function ac(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fh(){const t=ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cc(){try{return typeof indexedDB=="object"}catch(t){return!1}}function lc(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function dh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const hh="FirebaseError";class Ke extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hh,Object.setPrototypeOf(this,Ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lt.prototype.create)}}class Lt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s="".concat(this.service,"/").concat(e),i=this.errors[e],o=i?ph(i,r):"Error",c="".concat(this.serviceName,": ").concat(o," (").concat(s,").");return new Ke(s,c,r)}}function ph(t,e){return t.replace(gh,(n,r)=>{const s=e[r];return s!=null?String(s):"<".concat(r,"?>")})}const gh=/\{\$([^}]+)}/g;function mh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(po(i)&&po(o)){if(!Cn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function po(t){return t!==null&&typeof t=="object"}/**
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
 */function Nn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _h(t,e){const n=new vh(t,e);return n.subscribe.bind(n)}class vh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=zr),s.error===void 0&&(s.error=zr),s.complete===void 0&&(s.complete=zr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(o){}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zr(){}/**
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
 */const bh=1e3,wh=2,Ih=4*60*60*1e3,Eh=.5;function go(t,e=bh,n=wh){const r=e*Math.pow(n,t),s=Math.round(Eh*r*(Math.random()-.5)*2);return Math.min(Ih,r+s)}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class We{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Et="[DEFAULT]";/**
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
 */class Th{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ch;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch(s){}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error("Service ".concat(this.name," is not available"))}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,!!this.shouldAutoInitialize()){if(Ah(e))try{this.getOrInitializeService({instanceIdentifier:Et})}catch(n){}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch(i){}}}}clearInstance(e=Et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Et){return this.instances.has(e)}getOptions(e=Et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error("".concat(this.name,"(").concat(r,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(s){}return r||null}normalizeInstanceIdentifier(e=Et){return this.component?this.component.multipleInstances?e:Et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sh(t){return t===Et?void 0:t}function Ah(t){return t.instantiationMode==="EAGER"}/**
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
 */class Rh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Th(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Ch={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Ph=Y.INFO,Oh={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},kh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Oh[e];if(s)console[s]("[".concat(r,"]  ").concat(t.name,":"),...n);else throw new Error("Attempted to log a message with an invalid logType (value: ".concat(e,")"))};class Qs{constructor(e){this.name=e,this._logLevel=Ph,this._logHandler=kh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ch[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Nh=(t,e)=>e.some(n=>t instanceof n);let mo,_o;function Dh(){return mo||(mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mh(){return _o||(_o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uc=new WeakMap,bs=new WeakMap,fc=new WeakMap,Kr=new WeakMap,Zs=new WeakMap;function xh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(mt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uc.set(n,t)}).catch(()=>{}),Zs.set(e,t),e}function Lh(t){if(bs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bs.set(t,e)}let ws={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Uh(t){ws=t(ws)}function Fh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qr(this),e,...n);return fc.set(r,e.sort?e.sort():[e]),mt(r)}:Mh().includes(t)?function(...e){return t.apply(qr(this),e),mt(uc.get(this))}:function(...e){return mt(t.apply(qr(this),e))}}function $h(t){return typeof t=="function"?Fh(t):(t instanceof IDBTransaction&&Lh(t),Nh(t,Dh())?new Proxy(t,ws):t)}function mt(t){if(t instanceof IDBRequest)return xh(t);if(Kr.has(t))return Kr.get(t);const e=$h(t);return e!==t&&(Kr.set(t,e),Zs.set(e,t)),e}const qr=t=>Zs.get(t);function Bh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=mt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(mt(o.result),a.oldVersion,a.newVersion,mt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const jh=["get","getKey","getAll","getAllKeys","count"],Hh=["put","add","delete","clear"],Gr=new Map;function vo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gr.get(e))return Gr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Hh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||jh.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Gr.set(e,i),i}Uh(t=>({...t,get:(e,n,r)=>vo(e,n)||t.get(e,n,r),has:(e,n)=>!!vo(e,n)||t.has(e,n)}));/**
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
 */class Vh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wh(n)){const r=n.getImmediate();return"".concat(r.library,"/").concat(r.version)}else return null}).filter(n=>n).join(" ")}}function Wh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Is="@firebase/app",yo="0.9.25";/**
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
 */const Nt=new Qs("@firebase/app"),zh="@firebase/app-compat",Kh="@firebase/analytics-compat",qh="@firebase/analytics",Gh="@firebase/app-check-compat",Jh="@firebase/app-check",Yh="@firebase/auth",Xh="@firebase/auth-compat",Qh="@firebase/database",Zh="@firebase/database-compat",ep="@firebase/functions",tp="@firebase/functions-compat",np="@firebase/installations",rp="@firebase/installations-compat",sp="@firebase/messaging",ip="@firebase/messaging-compat",op="@firebase/performance",ap="@firebase/performance-compat",cp="@firebase/remote-config",lp="@firebase/remote-config-compat",up="@firebase/storage",fp="@firebase/storage-compat",dp="@firebase/firestore",hp="@firebase/firestore-compat",pp="firebase",gp="10.7.1";/**
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
 */const Es="[DEFAULT]",mp={[Is]:"fire-core",[zh]:"fire-core-compat",[qh]:"fire-analytics",[Kh]:"fire-analytics-compat",[Jh]:"fire-app-check",[Gh]:"fire-app-check-compat",[Yh]:"fire-auth",[Xh]:"fire-auth-compat",[Qh]:"fire-rtdb",[Zh]:"fire-rtdb-compat",[ep]:"fire-fn",[tp]:"fire-fn-compat",[np]:"fire-iid",[rp]:"fire-iid-compat",[sp]:"fire-fcm",[ip]:"fire-fcm-compat",[op]:"fire-perf",[ap]:"fire-perf-compat",[cp]:"fire-rc",[lp]:"fire-rc-compat",[up]:"fire-gcs",[fp]:"fire-gcs-compat",[dp]:"fire-fst",[hp]:"fire-fst-compat","fire-js":"fire-js",[pp]:"fire-js-all"};/**
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
 */const or=new Map,Ts=new Map;function _p(t,e){try{t.container.addComponent(e)}catch(n){Nt.debug("Component ".concat(e.name," failed to register with FirebaseApp ").concat(t.name),n)}}function nt(t){const e=t.name;if(Ts.has(e))return Nt.debug("There were multiple attempts to register component ".concat(e,".")),!1;Ts.set(e,t);for(const n of or.values())_p(n,t);return!0}function on(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},_t=new Lt("app","Firebase",vp);/**
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
 */class yp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}/**
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
 */const Dn=gp;function dc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Es,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw _t.create("bad-app-name",{appName:String(s)});if(n||(n=ic()),!n)throw _t.create("no-options");const i=or.get(s);if(i){if(Cn(n,i.options)&&Cn(r,i.config))return i;throw _t.create("duplicate-app",{appName:s})}const o=new Rh(s);for(const a of Ts.values())o.addComponent(a);const c=new yp(n,r,o);return or.set(s,c),c}function hc(t=Es){const e=or.get(t);if(!e&&t===Es&&ic())return dc();if(!e)throw _t.create("no-app",{appName:t});return e}function Be(t,e,n){var r;let s=(r=mp[t])!==null&&r!==void 0?r:t;n&&(s+="-".concat(n));const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=['Unable to register library "'.concat(s,'" with version "').concat(e,'":')];i&&c.push('library name "'.concat(s,'" contains illegal characters (whitespace or "/")')),i&&o&&c.push("and"),o&&c.push('version name "'.concat(e,'" contains illegal characters (whitespace or "/")')),Nt.warn(c.join(" "));return}nt(new We("".concat(s,"-version"),()=>({library:s,version:e}),"VERSION"))}/**
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
 */const bp="firebase-heartbeat-database",wp=1,Pn="firebase-heartbeat-store";let Jr=null;function pc(){return Jr||(Jr=Bh(bp,wp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pn)}}}).catch(t=>{throw _t.create("idb-open",{originalErrorMessage:t.message})})),Jr}async function Ip(t){try{return await(await pc()).transaction(Pn).objectStore(Pn).get(gc(t))}catch(e){if(e instanceof Ke)Nt.warn(e.message);else{const n=_t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nt.warn(n.message)}}}async function bo(t,e){try{const r=(await pc()).transaction(Pn,"readwrite");await r.objectStore(Pn).put(e,gc(t)),await r.done}catch(n){if(n instanceof Ke)Nt.warn(n.message);else{const r=_t.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nt.warn(r.message)}}}function gc(t){return"".concat(t.name,"!").concat(t.options.appId)}/**
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
 */const Ep=1024,Tp=30*24*60*60*1e3;class Sp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wo();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Tp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wo(),{heartbeatsToSend:r,unsentEntries:s}=Ap(this._heartbeatsCache.heartbeats),i=rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function wo(){return new Date().toISOString().substring(0,10)}function Ap(t,e=Ep){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Io(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Io(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cc()?lc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ip(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Io(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Cp(t){nt(new We("platform-logger",e=>new Vh(e),"PRIVATE")),nt(new We("heartbeat",e=>new Sp(e),"PRIVATE")),Be(Is,yo,t),Be(Is,yo,"esm2017"),Be("fire-js","")}Cp("");function ei(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function mc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pp=mc,_c=new Lt("auth","Firebase",mc());/**
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
 */const ar=new Qs("@firebase/auth");function Op(t,...e){ar.logLevel<=Y.WARN&&ar.warn("Auth (".concat(Dn,"): ").concat(t),...e)}function Yn(t,...e){ar.logLevel<=Y.ERROR&&ar.error("Auth (".concat(Dn,"): ").concat(t),...e)}/**
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
 */function ze(t,...e){throw ti(t,...e)}function je(t,...e){return ti(t,...e)}function vc(t,e,n){const r=Object.assign(Object.assign({},Pp()),{[e]:n});return new Lt("auth","Firebase",r).create(e,{appName:t.name})}function kp(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ze(t,"argument-error"),vc(t,"argument-error","Type of ".concat(e.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function ti(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _c.create(t,...e)}function U(t,e,...n){if(!t)throw ti(e,...n)}function Ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yn(e),new Error(e)}function rt(t,e){t||Ze(e)}/**
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
 */function Ss(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Np(){return Eo()==="http:"||Eo()==="https:"}function Eo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Dp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Np()||ac()||"connection"in navigator)?navigator.onLine:!0}function Mp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Mn{constructor(e,n){this.shortDelay=e,this.longDelay=n,rt(n>e,"Short delay should be less than long delay!"),this.isMobile=lh()||uh()}get(){return Dp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ni(t,e){rt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?"".concat(n).concat(e.startsWith("/")?e.slice(1):e):n}/**
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
 */class yc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Lp=new Mn(3e4,6e4);function ri(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function an(t,e,n,r,s={}){return bc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Nn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),yc.fetch()(wc(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function bc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xp),e);try{const s=new Fp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Wn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Wn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Wn(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw vc(t,u,l);ze(t,u)}}catch(s){if(s instanceof Ke)throw s;ze(t,"network-request-failed",{message:String(s)})}}async function Up(t,e,n,r,s={}){const i=await an(t,e,n,r,s);return"mfaPendingCredential"in i&&ze(t,"multi-factor-auth-required",{_serverResponse:i}),i}function wc(t,e,n,r){const s="".concat(e).concat(n,"?").concat(r);return t.config.emulator?ni(t.config,s):"".concat(t.config.apiScheme,"://").concat(s)}class Fp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(je(this.auth,"network-request-failed")),Lp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=je(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function $p(t,e){return an(t,"POST","/v1/accounts:delete",e)}async function Bp(t,e){return an(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function yn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}async function jp(t,e=!1){const n=qe(t),r=await n.getIdToken(e),s=si(r);U(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:yn(Yr(s.auth_time)),issuedAtTime:yn(Yr(s.iat)),expirationTime:yn(Yr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yr(t){return Number(t)*1e3}function si(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yn("JWT malformed, contained fewer than 3 sections"),null;try{const s=sc(n);return s?JSON.parse(s):(Yn("Failed to decode base64 JWT payload"),null)}catch(s){return Yn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hp(t){const e=si(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function On(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ke&&Vp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Vp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Wp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ic{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yn(this.lastLoginAt),this.creationTime=yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await On(t,Bp(n,{idToken:r}));U(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?qp(i.providerUserInfo):[],c=Kp(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ic(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function zp(t){const e=qe(t);await cr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function qp(t){return t.map(e=>{var{providerId:n}=e,r=ei(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Gp(t,e){const n=await bc(t,{},async()=>{const r=Nn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=wc(t,s,"/v1/token","key=".concat(i)),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",yc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jp(t,e){return an(t,"POST","/v2/accounts:revokeToken",ri(t,e))}/**
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
 */class kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Gp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new kn;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kn,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
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
 */function lt(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ot{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ei(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ic(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await On(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jp(this,e)}reload(){return zp(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await On(this,$p(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,L=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:x,isAnonymous:Z,providerData:te,stsTokenManager:de}=n;U(H&&de,e,"internal-error");const ye=kn.fromJSON(this.name,de);U(typeof H=="string",e,"internal-error"),lt(h,e.name),lt(g,e.name),U(typeof x=="boolean",e,"internal-error"),U(typeof Z=="boolean",e,"internal-error"),lt(_,e.name),lt(R,e.name),lt(P,e.name),lt(L,e.name),lt(k,e.name),lt(N,e.name);const ke=new Ot({uid:H,auth:e,email:g,emailVerified:x,displayName:h,isAnonymous:Z,photoURL:R,phoneNumber:_,tenantId:P,stsTokenManager:ye,createdAt:k,lastLoginAt:N});return te&&Array.isArray(te)&&(ke.providerData=te.map(be=>Object.assign({},be))),L&&(ke._redirectEventId=L),ke}static async _fromIdTokenResponse(e,n,r=!1){const s=new kn;s.updateFromServerResponse(n);const i=new Ot({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await cr(i),i}}/**
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
 */const To=new Map;function et(t){rt(t instanceof Function,"Expected a class definition");let e=To.get(t);return e?(rt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,To.set(t,e),e)}/**
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
 */class Ec{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ec.type="NONE";const So=Ec;/**
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
 */function Xn(t,e,n){return"firebase:".concat(t,":").concat(e,":").concat(n)}class Gt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Xn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Xn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gt(et(So),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||et(So);const o=Xn(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ot._fromJSON(e,u);l!==i&&(c=h),i=l;break}}catch(u){}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Gt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch(u){}})),new Gt(i,e,r))}}/**
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
 */function Ao(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ac(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cc(e))return"Blackberry";if(Pc(e))return"Webos";if(ii(e))return"Safari";if((e.includes("chrome/")||Sc(e))&&!e.includes("edge/"))return"Chrome";if(Rc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tc(t=ue()){return/firefox\//i.test(t)}function ii(t=ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sc(t=ue()){return/crios\//i.test(t)}function Ac(t=ue()){return/iemobile/i.test(t)}function Rc(t=ue()){return/android/i.test(t)}function Cc(t=ue()){return/blackberry/i.test(t)}function Pc(t=ue()){return/webos/i.test(t)}function Cr(t=ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yp(t=ue()){var e;return Cr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xp(){return fh()&&document.documentMode===10}function Oc(t=ue()){return Cr(t)||Rc(t)||Pc(t)||Cc(t)||/windows phone/i.test(t)||Ac(t)}function Qp(){try{return!!(window&&window!==window.top)}catch(t){return!1}}/**
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
 */function kc(t,e=[]){let n;switch(t){case"Browser":n=Ao(ue());break;case"Worker":n="".concat(Ao(ue()),"-").concat(t);break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return"".concat(n,"/JsCore/").concat(Dn,"/").concat(r)}/**
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
 */class Zp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function eg(t,e={}){return an(t,"GET","/v2/passwordPolicy",ri(t,e))}/**
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
 */const tg=6;class ng{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class rg{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ro(this),this.idTokenSubscription=new Ro(this),this.beforeStateQueue=new Zp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=et(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Gt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?qe(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eg(this),n=new ng(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jp(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&et(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await Gt.create(this,[et(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Op("Error while retrieving App Check token: ".concat(n.error)),n==null?void 0:n.token}}function Pr(t){return qe(t)}class Ro{constructor(e){this.auth=e,this.observer=null,this.addObserver=_h(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function sg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ig(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=je("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",sg().appendChild(r)})}function og(t){return"__".concat(t).concat(Math.floor(Math.random()*1e6))}/**
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
 */function ag(t,e){const n=on(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Cn(i,e!=null?e:{}))return s;ze(s,"already-initialized")}return n.initialize({options:e})}function cg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(et);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lg(t,e,n){const r=Pr(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Nc(e),{host:o,port:c}=ug(e),a=c===null?"":":".concat(c);r.config.emulator={url:"".concat(i,"//").concat(o).concat(a,"/")},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||fg()}function Nc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ug(t){const e=Nc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Co(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Co(o)}}}function Co(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Dc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,n){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}/**
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
 */async function Jt(t,e){return Up(t,"POST","/v1/accounts:signInWithIdp",ri(t,e))}/**
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
 */const dg="http://localhost";class Dt extends Dc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Dt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ei(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Dt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Jt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Jt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Jt(e,n)}buildRequest(){const e={requestUri:dg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Nn(n)}return e}}/**
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
 */class oi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xn extends oi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fe extends xn{constructor(){super("facebook.com")}static credential(e){return Dt._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch(n){return null}}}Fe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fe.PROVIDER_ID="facebook.com";/**
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
 */class Qe extends xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Dt._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qe.credential(n,r)}catch(s){return null}}}Qe.GOOGLE_SIGN_IN_METHOD="google.com";Qe.PROVIDER_ID="google.com";/**
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
 */class dt extends xn{constructor(){super("github.com")}static credential(e){return Dt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch(n){return null}}}dt.GITHUB_SIGN_IN_METHOD="github.com";dt.PROVIDER_ID="github.com";/**
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
 */class ht extends xn{constructor(){super("twitter.com")}static credential(e,n){return Dt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ht.credential(n,r)}catch(s){return null}}}ht.TWITTER_SIGN_IN_METHOD="twitter.com";ht.PROVIDER_ID="twitter.com";/**
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
 */class tn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ot._fromIdTokenResponse(e,r,s),o=Po(r);return new tn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Po(r);return new tn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Po(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class lr extends Ke{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,lr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new lr(e,n,r,s)}}function Mc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lr._fromErrorAndOperation(t,i,e,r):i})}async function hg(t,e,n=!1){const r=await On(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tn._forOperation(t,"link",r)}/**
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
 */async function pg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await On(t,Mc(r,s,e,t),n);U(i.idToken,r,"internal-error");const o=si(i.idToken);U(o,r,"internal-error");const{sub:c}=o;return U(t.uid===c,r,"user-mismatch"),tn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),i}}/**
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
 */async function gg(t,e,n=!1){const r="signIn",s=await Mc(t,r,e),i=await tn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}/**
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
 */function mg(t,e){return qe(t).setPersistence(e)}function _g(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function vg(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function yg(t){return qe(t).signOut()}const ur="__sak";/**
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
 */class xc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ur,"1"),this.storage.removeItem(ur),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function bg(){const t=ue();return ii(t)||Cr(t)}const wg=1e3,Ig=10;class Lc extends xc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bg()&&Qp(),this.fallbackToPolling=Oc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Xp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ig):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lc.type="LOCAL";const Eg=Lc;/**
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
 */class Uc extends xc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Uc.type="SESSION";const ai=Uc;/**
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
 */function Tg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Or{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Or(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Tg(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Or.receivers=[];/**
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
 */function ci(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Sg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=ci("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function He(){return window}function Ag(t){He().location.href=t}/**
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
 */function Fc(){return typeof He().WorkerGlobalScope<"u"&&typeof He().importScripts=="function"}async function Rg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}function Cg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Pg(){return Fc()?self:null}/**
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
 */const $c="firebaseLocalStorageDb",Og=1,fr="firebaseLocalStorage",Bc="fbase_key";class Ln{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kr(t,e){return t.transaction([fr],e?"readwrite":"readonly").objectStore(fr)}function kg(){const t=indexedDB.deleteDatabase($c);return new Ln(t).toPromise()}function As(){const t=indexedDB.open($c,Og);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fr,{keyPath:Bc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fr)?e(r):(r.close(),await kg(),e(await As()))})})}async function Oo(t,e,n){const r=kr(t,!0).put({[Bc]:e,value:n});return new Ln(r).toPromise()}async function Ng(t,e){const n=kr(t,!1).get(e),r=await new Ln(n).toPromise();return r===void 0?null:r.value}function ko(t,e){const n=kr(t,!0).delete(e);return new Ln(n).toPromise()}const Dg=800,Mg=3;class jc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await As(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Mg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Or._getInstance(Pg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Rg(),!this.activeServiceWorker)return;this.sender=new Sg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await As();return await Oo(e,ur,"1"),await ko(e,ur),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Oo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ng(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ko(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=kr(s,!1).getAll();return new Ln(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jc.type="LOCAL";const xg=jc;new Mn(3e4,6e4);/**
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
 */function Hc(t,e){return e?et(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class li extends Dc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Jt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Lg(t){return gg(t.auth,new li(t),t.bypassAuthState)}function Ug(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),pg(n,new li(t),t.bypassAuthState)}async function Fg(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),hg(n,new li(t),t.bypassAuthState)}/**
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
 */class Vc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lg;case"linkViaPopup":case"linkViaRedirect":return Fg;case"reauthViaPopup":case"reauthViaRedirect":return Ug;default:ze(this.auth,"internal-error")}}resolve(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $g=new Mn(2e3,1e4);async function Wc(t,e,n){const r=Pr(t);kp(t,e,oi);const s=Hc(r,n);return new At(r,"signInViaPopup",e,s).executeNotNull()}class At extends Vc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){rt(this.filter.length===1,"Popup operations only handle one event");const e=ci();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$g.get())};e()}}At.currentPopupAction=null;/**
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
 */const Bg="pendingRedirect",Qn=new Map;class jg extends Vc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qn.get(this.auth._key());if(!e){try{const r=await Hg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qn.set(this.auth._key(),e)}return this.bypassAuthState||Qn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hg(t,e){const n=zg(e),r=Wg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Vg(t,e){Qn.set(t._key(),e)}function Wg(t){return et(t._redirectPersistence)}function zg(t){return Xn(Bg,t.config.apiKey,t.name)}async function Kg(t,e,n=!1){const r=Pr(t),s=Hc(r,e),o=await new jg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const qg=10*60*1e3;class Gg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(je(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qg&&this.cachedEventUids.clear(),this.cachedEventUids.has(No(e))}saveEventToCache(e){this.cachedEventUids.add(No(e)),this.lastProcessedEventTime=Date.now()}}function No(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zc(t);default:return!1}}/**
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
 */async function Yg(t,e={}){return an(t,"GET","/v1/projects",e)}/**
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
 */const Xg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qg=/^https?/;async function Zg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Yg(t);for(const n of e)try{if(em(n))return}catch(r){}ze(t,"unauthorized-domain")}function em(t){const e=Ss(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Qg.test(n))return!1;if(Xg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const tm=new Mn(3e4,6e4);function Do(){const t=He().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nm(t){return new Promise((e,n)=>{var r,s,i;function o(){Do(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Do(),n(je(t,"network-request-failed"))},timeout:tm.get()})}if(!((s=(r=He().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=He().gapi)===null||i===void 0)&&i.load)o();else{const c=og("iframefcb");return He()[c]=()=>{gapi.load?o():n(je(t,"network-request-failed"))},ig("https://apis.google.com/js/api.js?onload=".concat(c)).catch(a=>n(a))}}).catch(e=>{throw Zn=null,e})}let Zn=null;function rm(t){return Zn=Zn||nm(t),Zn}/**
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
 */const sm=new Mn(5e3,15e3),im="__/auth/iframe",om="emulator/auth/iframe",am={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lm(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ni(e,om):"https://".concat(t.config.authDomain,"/").concat(im),r={apiKey:e.apiKey,appName:t.name,v:Dn},s=cm.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),"".concat(n,"?").concat(Nn(r).slice(1))}async function um(t){const e=await rm(t),n=He().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:lm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:am,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=je(t,"network-request-failed"),c=He().setTimeout(()=>{i(o)},sm.get());function a(){He().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const fm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dm=500,hm=600,pm="_blank",gm="http://localhost";class Mo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function mm(t,e,n,r=dm,s=hm){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},fm),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ue().toLowerCase();n&&(c=Sc(l)?pm:n),Tc(l)&&(e=e||gm,a.scrollbars="yes");const u=Object.entries(a).reduce((g,[_,R])=>"".concat(g).concat(_,"=").concat(R,","),"");if(Yp(l)&&c!=="_self")return _m(e||"",c),new Mo(null);const h=window.open(e||"",c,u);U(h,t,"popup-blocked");try{h.focus()}catch(g){}return new Mo(h)}function _m(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const vm="__/auth/handler",ym="emulator/auth/handler",bm=encodeURIComponent("fac");async function xo(t,e,n,r,s,i){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Dn,eventId:s};if(e instanceof oi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof xn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?"#".concat(bm,"=").concat(encodeURIComponent(a)):"";return"".concat(wm(t),"?").concat(Nn(c).slice(1)).concat(l)}function wm({config:t}){return t.emulator?ni(t,ym):"https://".concat(t.authDomain,"/").concat(vm)}/**
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
 */const Xr="webStorageSupport";class Im{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ai,this._completeRedirectFn=Kg,this._overrideRedirectResult=Vg}async _openPopup(e,n,r,s){var i;rt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await xo(e,n,r,Ss(),s);return mm(e,o,ci())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await xo(e,n,r,Ss(),s);return Ag(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(rt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await um(e),r=new Gg(e);return n.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xr,{type:Xr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Xr];o!==void 0&&n(!!o),ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Oc()||ii()||Cr()}}const Em=Im;var Lo="@firebase/auth",Uo="1.5.1";/**
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
 */class Tm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Sm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Am(t){nt(new We("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kc(t)},l=new rg(r,s,i,a);return cg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),nt(new We("auth-internal",e=>{const n=Pr(e.getProvider("auth").getImmediate());return(r=>new Tm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Be(Lo,Uo,Sm(t)),Be(Lo,Uo,"esm2017")}/**
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
 */const Rm=5*60,Cm=oc("authIdTokenMaxAge")||Rm;let Fo=null;const Pm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Cm)return;const s=n==null?void 0:n.token;Fo!==s&&(Fo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:"Bearer ".concat(s)}:{}}))};function Om(t=hc()){const e=on(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ag(t,{popupRedirectResolver:Em,persistence:[xg,Eg,ai]}),r=oc("authTokenSyncURL");if(r){const i=Pm(r);vg(n,i,()=>i(n.currentUser)),_g(n,o=>i(o))}const s=ah("auth");return s&&lg(n,"http://".concat(s)),n}Am("Browser");var km="firebase",Nm="10.7.1";/**
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
 */Be(km,Nm,"app");const Dm=(t,e)=>e.some(n=>t instanceof n);let $o,Bo;function Mm(){return $o||($o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xm(){return Bo||(Bo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kc=new WeakMap,Rs=new WeakMap,qc=new WeakMap,Qr=new WeakMap,ui=new WeakMap;function Lm(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kc.set(n,t)}).catch(()=>{}),ui.set(e,t),e}function Um(t){if(Rs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Rs.set(t,e)}let Cs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fm(t){Cs=t(Cs)}function $m(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zr(this),e,...n);return qc.set(r,e.sort?e.sort():[e]),vt(r)}:xm().includes(t)?function(...e){return t.apply(Zr(this),e),vt(Kc.get(this))}:function(...e){return vt(t.apply(Zr(this),e))}}function Bm(t){return typeof t=="function"?$m(t):(t instanceof IDBTransaction&&Um(t),Dm(t,Mm())?new Proxy(t,Cs):t)}function vt(t){if(t instanceof IDBRequest)return Lm(t);if(Qr.has(t))return Qr.get(t);const e=Bm(t);return e!==t&&(Qr.set(t,e),ui.set(e,t)),e}const Zr=t=>ui.get(t);function jm(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=vt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(vt(o.result),a.oldVersion,a.newVersion,vt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),c}const Hm=["get","getKey","getAll","getAllKeys","count"],Vm=["put","add","delete","clear"],es=new Map;function jo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(es.get(e))return es.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Vm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hm.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return es.set(e,i),i}Fm(t=>({...t,get:(e,n,r)=>jo(e,n)||t.get(e,n,r),has:(e,n)=>!!jo(e,n)||t.has(e,n)}));const Gc="@firebase/installations",fi="0.6.4";/**
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
 */const Jc=1e4,Yc="w:".concat(fi),Xc="FIS_v2",Wm="https://firebaseinstallations.googleapis.com/v1",zm=60*60*1e3,Km="installations",qm="Installations";/**
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
 */const Gm={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Mt=new Lt(Km,qm,Gm);function Qc(t){return t instanceof Ke&&t.code.includes("request-failed")}/**
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
 */function Zc({projectId:t}){return"".concat(Wm,"/projects/").concat(t,"/installations")}function el(t){return{token:t.token,requestStatus:2,expiresIn:Ym(t.expiresIn),creationTime:Date.now()}}async function tl(t,e){const r=(await e.json()).error;return Mt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function nl({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Jm(t,{refreshToken:e}){const n=nl(t);return n.append("Authorization",Xm(e)),n}async function rl(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ym(t){return Number(t.replace("s","000"))}function Xm(t){return"".concat(Xc," ").concat(t)}/**
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
 */async function Qm({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Zc(t),s=nl(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Xc,appId:t.appId,sdkVersion:Yc},c={method:"POST",headers:s,body:JSON.stringify(o)},a=await rl(()=>fetch(r,c));if(a.ok){const l=await a.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:el(l.authToken)}}else throw await tl("Create Installation",a)}/**
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
 */function sl(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Zm(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const e_=/^[cdef][\w-]{21}$/,Ps="";function t_(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=n_(t);return e_.test(n)?n:Ps}catch(t){return Ps}}function n_(t){return Zm(t).substr(0,22)}/**
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
 */function Nr(t){return"".concat(t.appName,"!").concat(t.appId)}/**
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
 */const il=new Map;function ol(t,e){const n=Nr(t);al(n,e),r_(n,e)}function al(t,e){const n=il.get(t);if(n)for(const r of n)r(e)}function r_(t,e){const n=s_();n&&n.postMessage({key:t,fid:e}),i_()}let Rt=null;function s_(){return!Rt&&"BroadcastChannel"in self&&(Rt=new BroadcastChannel("[Firebase] FID Change"),Rt.onmessage=t=>{al(t.data.key,t.data.fid)}),Rt}function i_(){il.size===0&&Rt&&(Rt.close(),Rt=null)}/**
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
 */const o_="firebase-installations-database",a_=1,xt="firebase-installations-store";let ts=null;function di(){return ts||(ts=jm(o_,a_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xt)}}})),ts}async function dr(t,e){const n=Nr(t),s=(await di()).transaction(xt,"readwrite"),i=s.objectStore(xt),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&ol(t,e.fid),e}async function cl(t){const e=Nr(t),r=(await di()).transaction(xt,"readwrite");await r.objectStore(xt).delete(e),await r.done}async function Dr(t,e){const n=Nr(t),s=(await di()).transaction(xt,"readwrite"),i=s.objectStore(xt),o=await i.get(n),c=e(o);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&ol(t,c.fid),c}/**
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
 */async function hi(t){let e;const n=await Dr(t.appConfig,r=>{const s=c_(r),i=l_(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Ps?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function c_(t){const e=t||{fid:t_(),registrationStatus:0};return ll(e)}function l_(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Mt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=u_(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:f_(t)}:{installationEntry:e}}async function u_(t,e){try{const n=await Qm(t,e);return dr(t.appConfig,n)}catch(n){throw Qc(n)&&n.customData.serverCode===409?await cl(t.appConfig):await dr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function f_(t){let e=await Ho(t.appConfig);for(;e.registrationStatus===1;)await sl(100),e=await Ho(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await hi(t);return r||n}return e}function Ho(t){return Dr(t,e=>{if(!e)throw Mt.create("installation-not-found");return ll(e)})}function ll(t){return d_(t)?{fid:t.fid,registrationStatus:0}:t}function d_(t){return t.registrationStatus===1&&t.registrationTime+Jc<Date.now()}/**
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
 */async function h_({appConfig:t,heartbeatServiceProvider:e},n){const r=p_(t,n),s=Jm(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Yc,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},a=await rl(()=>fetch(r,c));if(a.ok){const l=await a.json();return el(l)}else throw await tl("Generate Auth Token",a)}function p_(t,{fid:e}){return"".concat(Zc(t),"/").concat(e,"/authTokens:generate")}/**
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
 */async function pi(t,e=!1){let n;const r=await Dr(t.appConfig,i=>{if(!ul(i))throw Mt.create("not-registered");const o=i.authToken;if(!e&&__(o))return i;if(o.requestStatus===1)return n=g_(t,e),i;{if(!navigator.onLine)throw Mt.create("app-offline");const c=y_(i);return n=m_(t,c),c}});return n?await n:r.authToken}async function g_(t,e){let n=await Vo(t.appConfig);for(;n.authToken.requestStatus===1;)await sl(100),n=await Vo(t.appConfig);const r=n.authToken;return r.requestStatus===0?pi(t,e):r}function Vo(t){return Dr(t,e=>{if(!ul(e))throw Mt.create("not-registered");const n=e.authToken;return b_(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function m_(t,e){try{const n=await h_(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await dr(t.appConfig,r),n}catch(n){if(Qc(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await cl(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await dr(t.appConfig,r)}throw n}}function ul(t){return t!==void 0&&t.registrationStatus===2}function __(t){return t.requestStatus===2&&!v_(t)}function v_(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+zm}function y_(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function b_(t){return t.requestStatus===1&&t.requestTime+Jc<Date.now()}/**
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
 */async function w_(t){const e=t,{installationEntry:n,registrationPromise:r}=await hi(e);return r?r.catch(console.error):pi(e).catch(console.error),n.fid}/**
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
 */async function I_(t,e=!1){const n=t;return await E_(n),(await pi(n,e)).token}async function E_(t){const{registrationPromise:e}=await hi(t);e&&await e}/**
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
 */function T_(t){if(!t||!t.options)throw ns("App Configuration");if(!t.name)throw ns("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ns(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ns(t){return Mt.create("missing-app-config-values",{valueName:t})}/**
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
 */const fl="installations",S_="installations-internal",A_=t=>{const e=t.getProvider("app").getImmediate(),n=T_(e),r=on(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},R_=t=>{const e=t.getProvider("app").getImmediate(),n=on(e,fl).getImmediate();return{getId:()=>w_(n),getToken:s=>I_(n,s)}};function C_(){nt(new We(fl,A_,"PUBLIC")),nt(new We(S_,R_,"PRIVATE"))}C_();Be(Gc,fi);Be(Gc,fi,"esm2017");/**
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
 */const hr="analytics",P_="firebase_id",O_="origin",k_=60*1e3,N_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",gi="https://www.googletagmanager.com/gtag/js";/**
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
 */const ge=new Qs("@firebase/analytics");/**
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
 */const D_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ve=new Lt("analytics","Analytics",D_);/**
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
 */function M_(t){if(!t.startsWith(gi)){const e=ve.create("invalid-gtag-resource",{gtagURL:t});return ge.warn(e.message),""}return t}function dl(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function x_(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function L_(t,e){const n=x_("firebase-js-sdk-policy",{createScriptURL:M_}),r=document.createElement("script"),s="".concat(gi,"?l=").concat(t,"&id=").concat(e);r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function U_(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function F_(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const a=(await dl(n)).find(l=>l.measurementId===s);a&&await e[a.appId]}}catch(c){ge.error(c)}t("config",s,i)}async function $_(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await dl(n);for(const a of o){const l=c.find(h=>h.measurementId===a),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){ge.error(i)}}function B_(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[c,a]=o;await $_(t,e,n,c,a)}else if(i==="config"){const[c,a]=o;await F_(t,e,n,r,c,a)}else if(i==="consent"){const[c]=o;t("consent","update",c)}else if(i==="get"){const[c,a,l]=o;t("get",c,a,l)}else if(i==="set"){const[c]=o;t("set",c)}else t(i,...o)}catch(c){ge.error(c)}}return s}function j_(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=B_(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function H_(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(gi)&&n.src.includes(t))return n;return null}/**
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
 */const V_=30,W_=1e3;class z_{constructor(e={},n=W_){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const hl=new z_;function K_(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function q_(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:K_(r)},i=N_.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(c=a.error.message)}catch(a){}throw ve.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function G_(t,e=hl,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw ve.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ve.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new X_;return setTimeout(async()=>{c.abort()},n!==void 0?n:k_),pl({appId:r,apiKey:s,measurementId:i},o,c,e)}async function pl(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=hl){var i;const{appId:o,measurementId:c}=t;try{await J_(r,e)}catch(a){if(c)return ge.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(c)+' provided in the "measurementId" field in the local Firebase config. ['.concat(a==null?void 0:a.message,"]")),{appId:o,measurementId:c};throw a}try{const a=await q_(t);return s.deleteThrottleMetadata(o),a}catch(a){const l=a;if(!Y_(l)){if(s.deleteThrottleMetadata(o),c)return ge.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(c)+' provided in the "measurementId" field in the local Firebase config. ['.concat(l==null?void 0:l.message,"]")),{appId:o,measurementId:c};throw a}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?go(n,s.intervalMillis,V_):go(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),ge.debug("Calling attemptFetch again in ".concat(u," millis")),pl(t,h,r,s)}}function J_(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(ve.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Y_(t){if(!(t instanceof Ke)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class X_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Q_(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function Z_(){if(cc())try{await lc()}catch(t){return ge.warn(ve.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ge.warn(ve.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ev(t,e,n,r,s,i,o){var c;const a=G_(t);a.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&ge.warn("The measurement ID in the local Firebase config (".concat(t.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(_.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")}).catch(_=>ge.error(_)),e.push(a);const l=Z_().then(_=>{if(_)return r.getId()}),[u,h]=await Promise.all([a,l]);H_(i)||L_(i,u.measurementId),s("js",new Date);const g=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return g[O_]="firebase",g.update=!0,h!=null&&(g[P_]=h),s("config",u.measurementId,g),u.measurementId}/**
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
 */class tv{constructor(e){this.app=e}_delete(){return delete bn[this.app.options.appId],Promise.resolve()}}let bn={},Wo=[];const zo={};let rs="dataLayer",nv="gtag",Ko,gl,qo=!1;function rv(){const t=[];if(ac()&&t.push("This is a browser extension environment."),dh()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>"(".concat(s+1,") ").concat(r)).join(" "),n=ve.create("invalid-analytics-context",{errorInfo:e});ge.warn(n.message)}}function sv(t,e,n){rv();const r=t.options.appId;if(!r)throw ve.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ge.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(t.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.');else throw ve.create("no-api-key");if(bn[r]!=null)throw ve.create("already-exists",{id:r});if(!qo){U_(rs);const{wrappedGtag:i,gtagCore:o}=j_(bn,Wo,zo,rs,nv);gl=i,Ko=o,qo=!0}return bn[r]=ev(t,Wo,zo,e,Ko,rs,n),new tv(t)}function iv(t=hc()){t=qe(t);const e=on(t,hr);return e.isInitialized()?e.getImmediate():ov(t)}function ov(t,e={}){const n=on(t,hr);if(n.isInitialized()){const s=n.getImmediate();if(Cn(e,n.getOptions()))return s;throw ve.create("already-initialized")}return n.initialize({options:e})}function av(t,e,n,r){t=qe(t),Q_(gl,bn[t.app.options.appId],e,n,r).catch(s=>ge.error(s))}const Go="@firebase/analytics",Jo="0.10.0";function cv(){nt(new We(hr,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return sv(r,s,n)},"PUBLIC")),nt(new We("analytics-internal",t,"PRIVATE")),Be(Go,Jo),Be(Go,Jo,"esm2017");function t(e){try{const n=e.getProvider(hr).getImmediate();return{logEvent:(r,s,i)=>av(n,r,s,i)}}catch(n){throw ve.create("interop-component-reg-failed",{reason:n})}}}cv();const lv={apiKey:"AIzaSyCA7u7USv_fIYdTX9Yf4Dp_Nc_ywMI5rGk",authDomain:"wired-plateau-407307.firebaseapp.com",projectId:"wired-plateau-407307",storageBucket:"wired-plateau-407307.appspot.com",messagingSenderId:"585374910303",appId:"1:585374910303:web:b8e25fc0b342ce0b0dd8ea",measurementId:"G-9FXJZDF51F"},uv=dc(lv);iv(uv);const Mr=Om();mg(Mr,ai).then(()=>{});const hv=async()=>{const t=new Qe;return await Wc(Mr,t)};window.addEventListener("load",async()=>{});const pv=()=>{const t=new Fe;Wc(Mr,t).then(e=>{const n=e.user,s=Fe.credentialFromResult(e).accessToken;console.log(n),console.log(s)}).catch(e=>{console.log(e)})},fv=Ws({__name:"index",setup(t){const e=Zd(),n=async()=>{await yg(Mr),await e.push("/")};return(r,s)=>(Ua(),tf("div",{onClick:n},"退出"))}}),ml=Xd({history:hd(),routes:[{path:"/login",name:"login",component:()=>Jf(()=>import("./login-203bb312.js"),[],import.meta.url)},{path:"/index",name:"index",component:fv,children:[]}]});ml.beforeEach((t,e,n)=>{if(t.path=="/"){n("/login");return}n()});jf(Kf).use(ml).mount("#app");export{Xe as F,dv as __vite_legacy_guard,Ba as a,tf as c,Ws as d,pv as f,hv as g,Ua as o,Zd as u};
