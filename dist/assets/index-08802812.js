function Yg(){import.meta.url,import("_").catch(()=>1);async function*t(){}}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Xr(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const j={},Et=[],he=()=>{},ic=()=>!1,Hn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qr=t=>t.startsWith("onUpdate:"),Q=Object.assign,Zr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},oc=Object.prototype.hasOwnProperty,M=(t,e)=>oc.call(t,e),O=Array.isArray,Vt=t=>Wn(t)==="[object Map]",ac=t=>Wn(t)==="[object Set]",k=t=>typeof t=="function",J=t=>typeof t=="string",Vn=t=>typeof t=="symbol",q=t=>t!==null&&typeof t=="object",eo=t=>(q(t)||k(t))&&k(t.then)&&k(t.catch),cc=Object.prototype.toString,Wn=t=>cc.call(t),lc=t=>Wn(t).slice(8,-1),uc=t=>Wn(t)==="[object Object]",es=t=>J(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,wn=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dc=/-(\w)/g,Rt=zn(t=>t.replace(dc,(e,n)=>n?n.toUpperCase():"")),fc=/\B([A-Z])/g,Nt=zn(t=>t.replace(fc,"-$1").toLowerCase()),to=zn(t=>t.charAt(0).toUpperCase()+t.slice(1)),ar=zn(t=>t?"on".concat(to(t)):""),Ot=(t,e)=>!Object.is(t,e),cr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Pn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hs;const Rr=()=>Hs||(Hs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ts(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=J(r)?_c(r):ts(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(J(t)||q(t))return t}const pc=/;(?![^(]*\))/g,gc=/:([^]+)/,mc=/\/\*[^]*?\*\//g;function _c(t){const e={};return t.replace(mc,"").split(pc).forEach(n=>{if(n){const r=n.split(gc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ns(t){let e="";if(J(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const r=ns(t[n]);r&&(e+=r+" ")}else if(q(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ic=Xr(bc);function no(t){return!!t||t===""}let ue;class yc{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ue,!e&&ue&&(this.index=(ue.scopes||(ue.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ue;try{return ue=this,e()}finally{ue=n}}}on(){ue=this}off(){ue=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function vc(t,e=ue){e&&e.active&&e.effects.push(t)}function wc(){return ue}const rs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ro=t=>(t.w&Qe)>0,so=t=>(t.n&Qe)>0,Ec=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Qe},Tc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ro(s)&&!so(s)?s.delete(t):e[n++]=s,s.w&=~Qe,s.n&=~Qe}e.length=n}},Or=new WeakMap;let jt=0,Qe=1;const Pr=30;let de;const ut=Symbol(""),kr=Symbol("");class ss{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,vc(this,r)}run(){if(!this.active)return this.fn();let e=de,n=qe;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=de,de=this,qe=!0,Qe=1<<++jt,jt<=Pr?Ec(this):Vs(this),this.fn()}finally{jt<=Pr&&Tc(this),Qe=1<<--jt,de=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){de===this?this.deferStop=!0:this.active&&(Vs(this),this.onStop&&this.onStop(),this.active=!1)}}function Vs(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let qe=!0;const io=[];function Mt(){io.push(qe),qe=!1}function Lt(){const t=io.pop();qe=t===void 0?!0:t}function ie(t,e,n){if(qe&&de){let r=Or.get(t);r||Or.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=rs()),oo(s)}}function oo(t,e){let n=!1;jt<=Pr?so(t)||(t.n|=Qe,n=!ro(t)):n=!t.has(de),n&&(t.add(de),de.deps.push(t))}function Ue(t,e,n,r,s,i){const o=Or.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&O(t)){const c=Number(r);o.forEach((u,f)=>{(f==="length"||!Vn(f)&&f>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":O(t)?es(n)&&a.push(o.get("length")):(a.push(o.get(ut)),Vt(t)&&a.push(o.get(kr)));break;case"delete":O(t)||(a.push(o.get(ut)),Vt(t)&&a.push(o.get(kr)));break;case"set":Vt(t)&&a.push(o.get(ut));break}if(a.length===1)a[0]&&Dr(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Dr(rs(c))}}function Dr(t,e){const n=O(t)?t:[...t];for(const r of n)r.computed&&Ws(r);for(const r of n)r.computed||Ws(r)}function Ws(t,e){(t!==de||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ac=Xr("__proto__,__v_isRef,__isVue"),ao=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vn)),zs=Sc();function Sc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=L(this);for(let i=0,o=this.length;i<o;i++)ie(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(L)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Mt();const r=L(this)[e].apply(this,n);return Lt(),r}}),t}function Cc(t){const e=L(this);return ie(e,"has",t),e.hasOwnProperty(t)}class co{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?Bc:ho:i?fo:uo).get(e))return e;const o=O(e);if(!s){if(o&&M(zs,n))return Reflect.get(zs,n,r);if(n==="hasOwnProperty")return Cc}const a=Reflect.get(e,n,r);return(Vn(n)?ao.has(n):Ac(n))||(s||ie(e,"get",n),i)?a:ne(a)?o&&es(n)?a:a.value:q(a)?s?po(a):as(a):a}}class lo extends co{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(Jt(i)&&ne(i)&&!ne(r))return!1;if(!this._shallow&&(!Nr(r)&&!Jt(r)&&(i=L(i),r=L(r)),!O(e)&&ne(i)&&!ne(r)))return i.value=r,!0;const o=O(e)&&es(n)?Number(n)<e.length:M(e,n),a=Reflect.set(e,n,r,s);return e===L(s)&&(o?Ot(r,i)&&Ue(e,"set",n,r):Ue(e,"add",n,r)),a}deleteProperty(e,n){const r=M(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Ue(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Vn(n)||!ao.has(n))&&ie(e,"has",n),r}ownKeys(e){return ie(e,"iterate",O(e)?"length":ut),Reflect.ownKeys(e)}}class Rc extends co{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Oc=new lo,Pc=new Rc,kc=new lo(!0),is=t=>t,Kn=t=>Reflect.getPrototypeOf(t);function gn(t,e,n=!1,r=!1){t=t.__v_raw;const s=L(t),i=L(e);n||(Ot(e,i)&&ie(s,"get",e),ie(s,"get",i));const{has:o}=Kn(s),a=r?is:n?us:ls;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function mn(t,e=!1){const n=this.__v_raw,r=L(n),s=L(t);return e||(Ot(t,s)&&ie(r,"has",t),ie(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function _n(t,e=!1){return t=t.__v_raw,!e&&ie(L(t),"iterate",ut),Reflect.get(t,"size",t)}function Ks(t){t=L(t);const e=L(this);return Kn(e).has.call(e,t)||(e.add(t),Ue(e,"add",t,t)),this}function qs(t,e){e=L(e);const n=L(this),{has:r,get:s}=Kn(n);let i=r.call(n,t);i||(t=L(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ot(e,o)&&Ue(n,"set",t,e):Ue(n,"add",t,e),this}function Gs(t){const e=L(this),{has:n,get:r}=Kn(e);let s=n.call(e,t);s||(t=L(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Ue(e,"delete",t,void 0),i}function Js(){const t=L(this),e=t.size!==0,n=t.clear();return e&&Ue(t,"clear",void 0,void 0),n}function bn(t,e){return function(r,s){const i=this,o=i.__v_raw,a=L(o),c=e?is:t?us:ls;return!t&&ie(a,"iterate",ut),o.forEach((u,f)=>r.call(s,c(u),c(f),i))}}function In(t,e,n){return function(...r){const s=this.__v_raw,i=L(s),o=Vt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),f=n?is:e?us:ls;return!e&&ie(i,"iterate",c?kr:ut),{next(){const{value:g,done:y}=u.next();return y?{value:g,done:y}:{value:a?[f(g[0]),f(g[1])]:f(g),done:y}},[Symbol.iterator](){return this}}}}function He(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Dc(){const t={get(i){return gn(this,i)},get size(){return _n(this)},has:mn,add:Ks,set:qs,delete:Gs,clear:Js,forEach:bn(!1,!1)},e={get(i){return gn(this,i,!1,!0)},get size(){return _n(this)},has:mn,add:Ks,set:qs,delete:Gs,clear:Js,forEach:bn(!1,!0)},n={get(i){return gn(this,i,!0)},get size(){return _n(this,!0)},has(i){return mn.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:bn(!0,!1)},r={get(i){return gn(this,i,!0,!0)},get size(){return _n(this,!0)},has(i){return mn.call(this,i,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:bn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=In(i,!1,!1),n[i]=In(i,!0,!1),e[i]=In(i,!1,!0),r[i]=In(i,!0,!0)}),[t,n,e,r]}const[Nc,Mc,Lc,xc]=Dc();function os(t,e){const n=e?t?xc:Lc:t?Mc:Nc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(M(n,s)&&s in r?n:r,s,i)}const Uc={get:os(!1,!1)},Fc={get:os(!1,!0)},$c={get:os(!0,!1)},uo=new WeakMap,fo=new WeakMap,ho=new WeakMap,Bc=new WeakMap;function jc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hc(t){return t.__v_skip||!Object.isExtensible(t)?0:jc(lc(t))}function as(t){return Jt(t)?t:cs(t,!1,Oc,Uc,uo)}function Vc(t){return cs(t,!1,kc,Fc,fo)}function po(t){return cs(t,!0,Pc,$c,ho)}function cs(t,e,n,r,s){if(!q(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Hc(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Tt(t){return Jt(t)?Tt(t.__v_raw):!!(t&&t.__v_isReactive)}function Jt(t){return!!(t&&t.__v_isReadonly)}function Nr(t){return!!(t&&t.__v_isShallow)}function go(t){return Tt(t)||Jt(t)}function L(t){const e=t&&t.__v_raw;return e?L(e):t}function mo(t){return Pn(t,"__v_skip",!0),t}const ls=t=>q(t)?as(t):t,us=t=>q(t)?po(t):t;function Wc(t){qe&&de&&(t=L(t),oo(t.dep||(t.dep=rs())))}function zc(t,e){t=L(t);const n=t.dep;n&&Dr(n)}function ne(t){return!!(t&&t.__v_isRef===!0)}function Kc(t){return ne(t)?t.value:t}const qc={get:(t,e,n)=>Kc(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ne(s)&&!ne(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function _o(t){return Tt(t)?t:new Proxy(t,qc)}class Gc{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ss(e,()=>{this._dirty||(this._dirty=!0,zc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=L(this);return Wc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Jc(t,e,n=!1){let r,s;const i=k(t);return i?(r=t,s=he):(r=t.get,s=t.set),new Gc(r,s,i||!s,n)}function Ge(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){qn(i,e,n)}return s}function pe(t,e,n,r){if(k(t)){const i=Ge(t,e,n,r);return i&&eo(i)&&i.catch(o=>{qn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(pe(t[i],e,n,r));return s}function qn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ge(c,null,10,[t,o,a]);return}}Yc(t,n,s,r)}function Yc(t,e,n,r=!0){console.error(t)}let Yt=!1,Mr=!1;const Y=[];let we=0;const At=[];let Ne=null,ot=0;const bo=Promise.resolve();let ds=null;function Xc(t){const e=ds||bo;return t?e.then(this?t.bind(this):t):e}function Qc(t){let e=we+1,n=Y.length;for(;e<n;){const r=e+n>>>1,s=Y[r],i=Xt(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function fs(t){(!Y.length||!Y.includes(t,Yt&&t.allowRecurse?we+1:we))&&(t.id==null?Y.push(t):Y.splice(Qc(t.id),0,t),Io())}function Io(){!Yt&&!Mr&&(Mr=!0,ds=bo.then(vo))}function Zc(t){const e=Y.indexOf(t);e>we&&Y.splice(e,1)}function el(t){O(t)?At.push(...t):(!Ne||!Ne.includes(t,t.allowRecurse?ot+1:ot))&&At.push(t),Io()}function Ys(t,e=Yt?we+1:0){for(;e<Y.length;e++){const n=Y[e];n&&n.pre&&(Y.splice(e,1),e--,n())}}function yo(t){if(At.length){const e=[...new Set(At)];if(At.length=0,Ne){Ne.push(...e);return}for(Ne=e,Ne.sort((n,r)=>Xt(n)-Xt(r)),ot=0;ot<Ne.length;ot++)Ne[ot]();Ne=null,ot=0}}const Xt=t=>t.id==null?1/0:t.id,tl=(t,e)=>{const n=Xt(t)-Xt(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function vo(t){Mr=!1,Yt=!0,Y.sort(tl);const e=he;try{for(we=0;we<Y.length;we++){const n=Y[we];n&&n.active!==!1&&Ge(n,null,14)}}finally{we=0,Y.length=0,yo(),Yt=!1,ds=null,(Y.length||At.length)&&vo()}}function nl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||j;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f="".concat(o==="modelValue"?"model":o,"Modifiers"),{number:g,trim:y}=r[f]||j;y&&(s=n.map(T=>J(T)?T.trim():T)),g&&(s=n.map(hc))}let a,c=r[a=ar(e)]||r[a=ar(Rt(e))];!c&&i&&(c=r[a=ar(Nt(e))]),c&&pe(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,pe(u,t,6,s)}}function wo(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!k(t)){const c=u=>{const f=wo(u,e,!0);f&&(a=!0,Q(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(q(t)&&r.set(t,null),null):(O(i)?i.forEach(c=>o[c]=null):Q(o,i),q(t)&&r.set(t,o),o)}function Gn(t,e){return!t||!Hn(e)?!1:(e=e.slice(2).replace(/Once$/,""),M(t,e[0].toLowerCase()+e.slice(1))||M(t,Nt(e))||M(t,e))}let Te=null,Eo=null;function kn(t){const e=Te;return Te=t,Eo=t&&t.type.__scopeId||null,e}function rl(t,e=Te,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&oi(-1);const i=kn(e);let o;try{o=t(...s)}finally{kn(i),r._d&&oi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function lr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:f,renderCache:g,data:y,setupState:T,ctx:U,inheritAttrs:D}=t;let H,G;const W=kn(t);try{if(n.shapeFlag&4){const P=s||r,oe=P;H=ve(f.call(oe,P,g,i,T,y,U)),G=c}else{const P=e;H=ve(P.length>1?P(i,{attrs:c,slots:a,emit:u}):P(i,null)),G=e.props?c:sl(c)}}catch(P){zt.length=0,qn(P,t,1),H=dt(Qt)}let z=H;if(G&&D!==!1){const P=Object.keys(G),{shapeFlag:oe}=z;P.length&&oe&7&&(o&&P.some(Qr)&&(G=il(G,o)),z=Pt(z,G))}return n.dirs&&(z=Pt(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),H=z,kn(W),H}const sl=t=>{let e;for(const n in t)(n==="class"||n==="style"||Hn(n))&&((e||(e={}))[n]=t[n]);return e},il=(t,e)=>{const n={};for(const r in t)(!Qr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ol(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Xs(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const y=f[g];if(o[y]!==r[y]&&!Gn(u,y))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Xs(r,o,u):!0:!!o;return!1}function Xs(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Gn(n,i))return!0}return!1}function al({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const cl=Symbol.for("v-ndc"),ll=t=>t.__isSuspense;function ul(t,e){e&&e.pendingBranch?O(t)?e.effects.push(...t):e.effects.push(t):el(t)}const yn={};function ur(t,e,n){return To(t,e,n)}function To(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=j){var a;const c=wc()===((a=X)==null?void 0:a.scope)?X:null;let u,f=!1,g=!1;if(ne(t)?(u=()=>t.value,f=Nr(t)):Tt(t)?(u=()=>t,r=!0):O(t)?(g=!0,f=t.some(P=>Tt(P)||Nr(P)),u=()=>t.map(P=>{if(ne(P))return P.value;if(Tt(P))return wt(P);if(k(P))return Ge(P,c,2)})):k(t)?e?u=()=>Ge(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return y&&y(),pe(t,c,3,[T])}:u=he,e&&r){const P=u;u=()=>wt(P())}let y,T=P=>{y=W.onStop=()=>{Ge(P,c,4),y=W.onStop=void 0}},U;if(en)if(T=he,e?n&&pe(e,c,3,[u(),g?[]:void 0,T]):u(),s==="sync"){const P=cu();U=P.__watcherHandles||(P.__watcherHandles=[])}else return he;let D=g?new Array(t.length).fill(yn):yn;const H=()=>{if(W.active)if(e){const P=W.run();(r||f||(g?P.some((oe,ge)=>Ot(oe,D[ge])):Ot(P,D)))&&(y&&y(),pe(e,c,3,[P,D===yn?void 0:g&&D[0]===yn?[]:D,T]),D=P)}else W.run()};H.allowRecurse=!!e;let G;s==="sync"?G=H:s==="post"?G=()=>re(H,c&&c.suspense):(H.pre=!0,c&&(H.id=c.uid),G=()=>fs(H));const W=new ss(u,G);e?n?H():D=W.run():s==="post"?re(W.run.bind(W),c&&c.suspense):W.run();const z=()=>{W.stop(),c&&c.scope&&Zr(c.scope.effects,W)};return U&&U.push(z),z}function dl(t,e,n){const r=this.proxy,s=J(t)?t.includes(".")?Ao(r,t):()=>r[t]:t.bind(r,r);let i;k(e)?i=e:(i=e.handler,n=e);const o=X;kt(this);const a=To(s,i.bind(r),n);return o?kt(o):ft(),a}function Ao(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function wt(t,e){if(!q(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ne(t))wt(t.value,e);else if(O(t))for(let n=0;n<t.length;n++)wt(t[n],e);else if(ac(t)||Vt(t))t.forEach(n=>{wt(n,e)});else if(uc(t))for(const n in t)wt(t[n],e);return t}function rt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Mt(),pe(c,n,8,[t.el,a,t,e]),Lt())}}const En=t=>!!t.type.__asyncLoader,So=t=>t.type.__isKeepAlive;function fl(t,e){Co(t,"a",e)}function hl(t,e){Co(t,"da",e)}function Co(t,e,n=X){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Jn(e,r,n),n){let s=n.parent;for(;s&&s.parent;)So(s.parent.vnode)&&pl(r,e,n,s),s=s.parent}}function pl(t,e,n,r){const s=Jn(e,t,r,!0);Ro(()=>{Zr(r[e],s)},n)}function Jn(t,e,n=X,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Mt(),kt(n);const a=pe(e,n,t,o);return ft(),Lt(),a});return r?s.unshift(i):s.push(i),i}}const Be=t=>(e,n=X)=>(!en||t==="sp")&&Jn(t,(...r)=>e(...r),n),gl=Be("bm"),ml=Be("m"),_l=Be("bu"),bl=Be("u"),Il=Be("bum"),Ro=Be("um"),yl=Be("sp"),vl=Be("rtg"),wl=Be("rtc");function El(t,e=X){Jn("ec",t,e)}const Lr=t=>t?Fo(t)?_s(t)||t.proxy:Lr(t.parent):null,Wt=Q(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Lr(t.parent),$root:t=>Lr(t.root),$emit:t=>t.emit,$options:t=>hs(t),$forceUpdate:t=>t.f||(t.f=()=>fs(t.update)),$nextTick:t=>t.n||(t.n=Xc.bind(t.proxy)),$watch:t=>dl.bind(t)}),dr=(t,e)=>t!==j&&!t.__isScriptSetup&&M(t,e),Tl={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const T=o[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(dr(r,e))return o[e]=1,r[e];if(s!==j&&M(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&M(u,e))return o[e]=3,i[e];if(n!==j&&M(n,e))return o[e]=4,n[e];xr&&(o[e]=0)}}const f=Wt[e];let g,y;if(f)return e==="$attrs"&&ie(t,"get",e),f(t);if((g=a.__cssModules)&&(g=g[e]))return g;if(n!==j&&M(n,e))return o[e]=4,n[e];if(y=c.config.globalProperties,M(y,e))return y[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return dr(s,e)?(s[e]=n,!0):r!==j&&M(r,e)?(r[e]=n,!0):M(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==j&&M(t,o)||dr(e,o)||(a=i[0])&&M(a,o)||M(r,o)||M(Wt,o)||M(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:M(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Qs(t){return O(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let xr=!0;function Al(t){const e=hs(t),n=t.proxy,r=t.ctx;xr=!1,e.beforeCreate&&Zs(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:f,beforeMount:g,mounted:y,beforeUpdate:T,updated:U,activated:D,deactivated:H,beforeDestroy:G,beforeUnmount:W,destroyed:z,unmounted:P,render:oe,renderTracked:ge,renderTriggered:je,errorCaptured:me,serverPrefetch:et,expose:ke,inheritAttrs:Ft,components:dn,directives:fn,filters:sr}=e;if(u&&Sl(u,r,null),o)for(const V in o){const $=o[V];k($)&&(r[V]=$.bind(n))}if(s){const V=s.call(n,n);q(V)&&(t.data=as(V))}if(xr=!0,i)for(const V in i){const $=i[V],tt=k($)?$.bind(n,n):k($.get)?$.get.bind(n,n):he,hn=!k($)&&k($.set)?$.set.bind(n):he,nt=ou({get:tt,set:hn});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>nt.value,set:_e=>nt.value=_e})}if(a)for(const V in a)Oo(a[V],r,n,V);if(c){const V=k(c)?c.call(n):c;Reflect.ownKeys(V).forEach($=>{Dl($,V[$])})}f&&Zs(f,t,"c");function ee(V,$){O($)?$.forEach(tt=>V(tt.bind(n))):$&&V($.bind(n))}if(ee(gl,g),ee(ml,y),ee(_l,T),ee(bl,U),ee(fl,D),ee(hl,H),ee(El,me),ee(wl,ge),ee(vl,je),ee(Il,W),ee(Ro,P),ee(yl,et),O(ke))if(ke.length){const V=t.exposed||(t.exposed={});ke.forEach($=>{Object.defineProperty(V,$,{get:()=>n[$],set:tt=>n[$]=tt})})}else t.exposed||(t.exposed={});oe&&t.render===he&&(t.render=oe),Ft!=null&&(t.inheritAttrs=Ft),dn&&(t.components=dn),fn&&(t.directives=fn)}function Sl(t,e,n=he){O(t)&&(t=Ur(t));for(const r in t){const s=t[r];let i;q(s)?"default"in s?i=Tn(s.from||r,s.default,!0):i=Tn(s.from||r):i=Tn(s),ne(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Zs(t,e,n){pe(O(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Oo(t,e,n,r){const s=r.includes(".")?Ao(n,r):()=>n[r];if(J(t)){const i=e[t];k(i)&&ur(s,i)}else if(k(t))ur(s,t.bind(n));else if(q(t))if(O(t))t.forEach(i=>Oo(i,e,n,r));else{const i=k(t.handler)?t.handler.bind(n):e[t.handler];k(i)&&ur(s,i,t)}}function hs(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Dn(c,u,o,!0)),Dn(c,e,o)),q(e)&&i.set(e,c),c}function Dn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Dn(t,i,n,!0),s&&s.forEach(o=>Dn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Cl[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Cl={data:ei,props:ti,emits:ti,methods:Ht,computed:Ht,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:Ht,directives:Ht,watch:Ol,provide:ei,inject:Rl};function ei(t,e){return e?t?function(){return Q(k(t)?t.call(this,this):t,k(e)?e.call(this,this):e)}:e:t}function Rl(t,e){return Ht(Ur(t),Ur(e))}function Ur(t){if(O(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function te(t,e){return t?[...new Set([].concat(t,e))]:e}function Ht(t,e){return t?Q(Object.create(null),t,e):e}function ti(t,e){return t?O(t)&&O(e)?[...new Set([...t,...e])]:Q(Object.create(null),Qs(t),Qs(e!=null?e:{})):e}function Ol(t,e){if(!t)return e;if(!e)return t;const n=Q(Object.create(null),t);for(const r in e)n[r]=te(t[r],e[r]);return n}function Po(){return{app:null,config:{isNativeTag:ic,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pl=0;function kl(t,e){return function(r,s=null){k(r)||(r=Q({},r)),s!=null&&!q(s)&&(s=null);const i=Po(),o=new WeakSet;let a=!1;const c=i.app={_uid:Pl++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:lu,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&k(u.install)?(o.add(u),u.install(c,...f)):k(u)&&(o.add(u),u(c,...f))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,f){return f?(i.components[u]=f,c):i.components[u]},directive(u,f){return f?(i.directives[u]=f,c):i.directives[u]},mount(u,f,g){if(!a){const y=dt(r,s);return y.appContext=i,f&&e?e(y,u):t(y,u,g),a=!0,c._container=u,u.__vue_app__=c,_s(y.component)||y.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return i.provides[u]=f,c},runWithContext(u){Nn=c;try{return u()}finally{Nn=null}}};return c}}let Nn=null;function Dl(t,e){if(X){let n=X.provides;const r=X.parent&&X.parent.provides;r===n&&(n=X.provides=Object.create(r)),n[t]=e}}function Tn(t,e,n=!1){const r=X||Te;if(r||Nn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Nn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&k(e)?e.call(r&&r.proxy):e}}function Nl(t,e,n,r=!1){const s={},i={};Pn(i,Xn,1),t.propsDefaults=Object.create(null),ko(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Vc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ml(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=L(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let g=0;g<f.length;g++){let y=f[g];if(Gn(t.emitsOptions,y))continue;const T=e[y];if(c)if(M(i,y))T!==i[y]&&(i[y]=T,u=!0);else{const U=Rt(y);s[U]=Fr(c,a,U,T,t,!1)}else T!==i[y]&&(i[y]=T,u=!0)}}}else{ko(t,e,s,i)&&(u=!0);let f;for(const g in a)(!e||!M(e,g)&&((f=Nt(g))===g||!M(e,f)))&&(c?n&&(n[g]!==void 0||n[f]!==void 0)&&(s[g]=Fr(c,a,g,void 0,t,!0)):delete s[g]);if(i!==a)for(const g in i)(!e||!M(e,g))&&(delete i[g],u=!0)}u&&Ue(t,"set","$attrs")}function ko(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(wn(c))continue;const u=e[c];let f;s&&M(s,f=Rt(c))?!i||!i.includes(f)?n[f]=u:(a||(a={}))[f]=u:Gn(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=L(n),u=a||j;for(let f=0;f<i.length;f++){const g=i[f];n[g]=Fr(s,c,g,u[g],t,!M(u,g))}}return o}function Fr(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=M(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&k(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(kt(s),r=u[n]=c.call(null,e),ft())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Nt(n))&&(r=!0))}return r}function Do(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!k(t)){const f=g=>{c=!0;const[y,T]=Do(g,e,!0);Q(o,y),T&&a.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return q(t)&&r.set(t,Et),Et;if(O(i))for(let f=0;f<i.length;f++){const g=Rt(i[f]);ni(g)&&(o[g]=j)}else if(i)for(const f in i){const g=Rt(f);if(ni(g)){const y=i[f],T=o[g]=O(y)||k(y)?{type:y}:Q({},y);if(T){const U=ii(Boolean,T.type),D=ii(String,T.type);T[0]=U>-1,T[1]=D<0||U<D,(U>-1||M(T,"default"))&&a.push(g)}}}const u=[o,a];return q(t)&&r.set(t,u),u}function ni(t){return t[0]!=="$"}function ri(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function si(t,e){return ri(t)===ri(e)}function ii(t,e){return O(e)?e.findIndex(n=>si(n,t)):k(e)&&si(e,t)?0:-1}const No=t=>t[0]==="_"||t==="$stable",ps=t=>O(t)?t.map(ve):[ve(t)],Ll=(t,e,n)=>{if(e._n)return e;const r=rl((...s)=>ps(e(...s)),n);return r._c=!1,r},Mo=(t,e,n)=>{const r=t._ctx;for(const s in t){if(No(s))continue;const i=t[s];if(k(i))e[s]=Ll(s,i,r);else if(i!=null){const o=ps(i);e[s]=()=>o}}},Lo=(t,e)=>{const n=ps(e);t.slots.default=()=>n},xl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=L(e),Pn(e,"_",n)):Mo(e,t.slots={})}else t.slots={},e&&Lo(t,e);Pn(t.slots,Xn,1)},Ul=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=j;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Q(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Mo(e,s)),o=e}else e&&(Lo(t,e),o={default:1});if(i)for(const a in s)!No(a)&&o[a]==null&&delete s[a]};function $r(t,e,n,r,s=!1){if(O(t)){t.forEach((y,T)=>$r(y,e&&(O(e)?e[T]:e),n,r,s));return}if(En(r)&&!s)return;const i=r.shapeFlag&4?_s(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,f=a.refs===j?a.refs={}:a.refs,g=a.setupState;if(u!=null&&u!==c&&(J(u)?(f[u]=null,M(g,u)&&(g[u]=null)):ne(u)&&(u.value=null)),k(c))Ge(c,a,12,[o,f]);else{const y=J(c),T=ne(c);if(y||T){const U=()=>{if(t.f){const D=y?M(g,c)?g[c]:f[c]:c.value;s?O(D)&&Zr(D,i):O(D)?D.includes(i)||D.push(i):y?(f[c]=[i],M(g,c)&&(g[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else y?(f[c]=o,M(g,c)&&(g[c]=o)):T&&(c.value=o,t.k&&(f[t.k]=o))};o?(U.id=-1,re(U,n)):U()}}}const re=ul;function Fl(t){return $l(t)}function $l(t,e){const n=Rr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:f,parentNode:g,nextSibling:y,setScopeId:T=he,insertStaticContent:U}=t,D=(l,d,h,p=null,m=null,I=null,w=!1,b=null,v=!!d.dynamicChildren)=>{if(l===d)return;l&&!Bt(l,d)&&(p=pn(l),_e(l,m,I,!0),l=null),d.patchFlag===-2&&(v=!1,d.dynamicChildren=null);const{type:_,ref:A,shapeFlag:E}=d;switch(_){case Yn:H(l,d,h,p);break;case Qt:G(l,d,h,p);break;case fr:l==null&&W(d,h,p,w);break;case ye:dn(l,d,h,p,m,I,w,b,v);break;default:E&1?oe(l,d,h,p,m,I,w,b,v):E&6?fn(l,d,h,p,m,I,w,b,v):(E&64||E&128)&&_.process(l,d,h,p,m,I,w,b,v,It)}A!=null&&m&&$r(A,l&&l.ref,I,d||l,!d)},H=(l,d,h,p)=>{if(l==null)r(d.el=a(d.children),h,p);else{const m=d.el=l.el;d.children!==l.children&&u(m,d.children)}},G=(l,d,h,p)=>{l==null?r(d.el=c(d.children||""),h,p):d.el=l.el},W=(l,d,h,p)=>{[l.el,l.anchor]=U(l.children,d,h,p,l.el,l.anchor)},z=({el:l,anchor:d},h,p)=>{let m;for(;l&&l!==d;)m=y(l),r(l,h,p),l=m;r(d,h,p)},P=({el:l,anchor:d})=>{let h;for(;l&&l!==d;)h=y(l),s(l),l=h;s(d)},oe=(l,d,h,p,m,I,w,b,v)=>{w=w||d.type==="svg",l==null?ge(d,h,p,m,I,w,b,v):et(l,d,m,I,w,b,v)},ge=(l,d,h,p,m,I,w,b)=>{let v,_;const{type:A,props:E,shapeFlag:S,transition:R,dirs:N}=l;if(v=l.el=o(l.type,I,E&&E.is,E),S&8?f(v,l.children):S&16&&me(l.children,v,null,p,m,I&&A!=="foreignObject",w,b),N&&rt(l,null,p,"created"),je(v,l,l.scopeId,w,p),E){for(const x in E)x!=="value"&&!wn(x)&&i(v,x,null,E[x],I,l.children,p,m,De);"value"in E&&i(v,"value",null,E.value),(_=E.onVnodeBeforeMount)&&Ie(_,p,l)}N&&rt(l,null,p,"beforeMount");const B=Bl(m,R);B&&R.beforeEnter(v),r(v,d,h),((_=E&&E.onVnodeMounted)||B||N)&&re(()=>{_&&Ie(_,p,l),B&&R.enter(v),N&&rt(l,null,p,"mounted")},m)},je=(l,d,h,p,m)=>{if(h&&T(l,h),p)for(let I=0;I<p.length;I++)T(l,p[I]);if(m){let I=m.subTree;if(d===I){const w=m.vnode;je(l,w,w.scopeId,w.slotScopeIds,m.parent)}}},me=(l,d,h,p,m,I,w,b,v=0)=>{for(let _=v;_<l.length;_++){const A=l[_]=b?We(l[_]):ve(l[_]);D(null,A,d,h,p,m,I,w,b)}},et=(l,d,h,p,m,I,w)=>{const b=d.el=l.el;let{patchFlag:v,dynamicChildren:_,dirs:A}=d;v|=l.patchFlag&16;const E=l.props||j,S=d.props||j;let R;h&&st(h,!1),(R=S.onVnodeBeforeUpdate)&&Ie(R,h,d,l),A&&rt(d,l,h,"beforeUpdate"),h&&st(h,!0);const N=m&&d.type!=="foreignObject";if(_?ke(l.dynamicChildren,_,b,h,p,N,I):w||$(l,d,b,null,h,p,N,I,!1),v>0){if(v&16)Ft(b,d,E,S,h,p,m);else if(v&2&&E.class!==S.class&&i(b,"class",null,S.class,m),v&4&&i(b,"style",E.style,S.style,m),v&8){const B=d.dynamicProps;for(let x=0;x<B.length;x++){const K=B[x],le=E[K],yt=S[K];(yt!==le||K==="value")&&i(b,K,le,yt,m,l.children,h,p,De)}}v&1&&l.children!==d.children&&f(b,d.children)}else!w&&_==null&&Ft(b,d,E,S,h,p,m);((R=S.onVnodeUpdated)||A)&&re(()=>{R&&Ie(R,h,d,l),A&&rt(d,l,h,"updated")},p)},ke=(l,d,h,p,m,I,w)=>{for(let b=0;b<d.length;b++){const v=l[b],_=d[b],A=v.el&&(v.type===ye||!Bt(v,_)||v.shapeFlag&70)?g(v.el):h;D(v,_,A,null,p,m,I,w,!0)}},Ft=(l,d,h,p,m,I,w)=>{if(h!==p){if(h!==j)for(const b in h)!wn(b)&&!(b in p)&&i(l,b,h[b],null,w,d.children,m,I,De);for(const b in p){if(wn(b))continue;const v=p[b],_=h[b];v!==_&&b!=="value"&&i(l,b,_,v,w,d.children,m,I,De)}"value"in p&&i(l,"value",h.value,p.value)}},dn=(l,d,h,p,m,I,w,b,v)=>{const _=d.el=l?l.el:a(""),A=d.anchor=l?l.anchor:a("");let{patchFlag:E,dynamicChildren:S,slotScopeIds:R}=d;R&&(b=b?b.concat(R):R),l==null?(r(_,h,p),r(A,h,p),me(d.children,h,A,m,I,w,b,v)):E>0&&E&64&&S&&l.dynamicChildren?(ke(l.dynamicChildren,S,h,m,I,w,b),(d.key!=null||m&&d===m.subTree)&&xo(l,d,!0)):$(l,d,h,A,m,I,w,b,v)},fn=(l,d,h,p,m,I,w,b,v)=>{d.slotScopeIds=b,l==null?d.shapeFlag&512?m.ctx.activate(d,h,p,w,v):sr(d,h,p,m,I,w,v):xs(l,d,v)},sr=(l,d,h,p,m,I,w)=>{const b=l.component=eu(l,p,m);if(So(l)&&(b.ctx.renderer=It),tu(b),b.asyncDep){if(m&&m.registerDep(b,ee),!l.el){const v=b.subTree=dt(Qt);G(null,v,d,h)}return}ee(b,l,d,h,m,I,w)},xs=(l,d,h)=>{const p=d.component=l.component;if(ol(l,d,h))if(p.asyncDep&&!p.asyncResolved){V(p,d,h);return}else p.next=d,Zc(p.update),p.update();else d.el=l.el,p.vnode=d},ee=(l,d,h,p,m,I,w)=>{const b=()=>{if(l.isMounted){let{next:A,bu:E,u:S,parent:R,vnode:N}=l,B=A,x;st(l,!1),A?(A.el=N.el,V(l,A,w)):A=N,E&&cr(E),(x=A.props&&A.props.onVnodeBeforeUpdate)&&Ie(x,R,A,N),st(l,!0);const K=lr(l),le=l.subTree;l.subTree=K,D(le,K,g(le.el),pn(le),l,m,I),A.el=K.el,B===null&&al(l,K.el),S&&re(S,m),(x=A.props&&A.props.onVnodeUpdated)&&re(()=>Ie(x,R,A,N),m)}else{let A;const{el:E,props:S}=d,{bm:R,m:N,parent:B}=l,x=En(d);if(st(l,!1),R&&cr(R),!x&&(A=S&&S.onVnodeBeforeMount)&&Ie(A,B,d),st(l,!0),E&&or){const K=()=>{l.subTree=lr(l),or(E,l.subTree,l,m,null)};x?d.type.__asyncLoader().then(()=>!l.isUnmounted&&K()):K()}else{const K=l.subTree=lr(l);D(null,K,h,p,l,m,I),d.el=K.el}if(N&&re(N,m),!x&&(A=S&&S.onVnodeMounted)){const K=d;re(()=>Ie(A,B,K),m)}(d.shapeFlag&256||B&&En(B.vnode)&&B.vnode.shapeFlag&256)&&l.a&&re(l.a,m),l.isMounted=!0,d=h=p=null}},v=l.effect=new ss(b,()=>fs(_),l.scope),_=l.update=()=>v.run();_.id=l.uid,st(l,!0),_()},V=(l,d,h)=>{d.component=l;const p=l.vnode.props;l.vnode=d,l.next=null,Ml(l,d.props,p,h),Ul(l,d.children,h),Mt(),Ys(),Lt()},$=(l,d,h,p,m,I,w,b,v=!1)=>{const _=l&&l.children,A=l?l.shapeFlag:0,E=d.children,{patchFlag:S,shapeFlag:R}=d;if(S>0){if(S&128){hn(_,E,h,p,m,I,w,b,v);return}else if(S&256){tt(_,E,h,p,m,I,w,b,v);return}}R&8?(A&16&&De(_,m,I),E!==_&&f(h,E)):A&16?R&16?hn(_,E,h,p,m,I,w,b,v):De(_,m,I,!0):(A&8&&f(h,""),R&16&&me(E,h,p,m,I,w,b,v))},tt=(l,d,h,p,m,I,w,b,v)=>{l=l||Et,d=d||Et;const _=l.length,A=d.length,E=Math.min(_,A);let S;for(S=0;S<E;S++){const R=d[S]=v?We(d[S]):ve(d[S]);D(l[S],R,h,null,m,I,w,b,v)}_>A?De(l,m,I,!0,!1,E):me(d,h,p,m,I,w,b,v,E)},hn=(l,d,h,p,m,I,w,b,v)=>{let _=0;const A=d.length;let E=l.length-1,S=A-1;for(;_<=E&&_<=S;){const R=l[_],N=d[_]=v?We(d[_]):ve(d[_]);if(Bt(R,N))D(R,N,h,null,m,I,w,b,v);else break;_++}for(;_<=E&&_<=S;){const R=l[E],N=d[S]=v?We(d[S]):ve(d[S]);if(Bt(R,N))D(R,N,h,null,m,I,w,b,v);else break;E--,S--}if(_>E){if(_<=S){const R=S+1,N=R<A?d[R].el:p;for(;_<=S;)D(null,d[_]=v?We(d[_]):ve(d[_]),h,N,m,I,w,b,v),_++}}else if(_>S)for(;_<=E;)_e(l[_],m,I,!0),_++;else{const R=_,N=_,B=new Map;for(_=N;_<=S;_++){const ae=d[_]=v?We(d[_]):ve(d[_]);ae.key!=null&&B.set(ae.key,_)}let x,K=0;const le=S-N+1;let yt=!1,$s=0;const $t=new Array(le);for(_=0;_<le;_++)$t[_]=0;for(_=R;_<=E;_++){const ae=l[_];if(K>=le){_e(ae,m,I,!0);continue}let be;if(ae.key!=null)be=B.get(ae.key);else for(x=N;x<=S;x++)if($t[x-N]===0&&Bt(ae,d[x])){be=x;break}be===void 0?_e(ae,m,I,!0):($t[be-N]=_+1,be>=$s?$s=be:yt=!0,D(ae,d[be],h,null,m,I,w,b,v),K++)}const Bs=yt?jl($t):Et;for(x=Bs.length-1,_=le-1;_>=0;_--){const ae=N+_,be=d[ae],js=ae+1<A?d[ae+1].el:p;$t[_]===0?D(null,be,h,js,m,I,w,b,v):yt&&(x<0||_!==Bs[x]?nt(be,h,js,2):x--)}}},nt=(l,d,h,p,m=null)=>{const{el:I,type:w,transition:b,children:v,shapeFlag:_}=l;if(_&6){nt(l.component.subTree,d,h,p);return}if(_&128){l.suspense.move(d,h,p);return}if(_&64){w.move(l,d,h,It);return}if(w===ye){r(I,d,h);for(let E=0;E<v.length;E++)nt(v[E],d,h,p);r(l.anchor,d,h);return}if(w===fr){z(l,d,h);return}if(p!==2&&_&1&&b)if(p===0)b.beforeEnter(I),r(I,d,h),re(()=>b.enter(I),m);else{const{leave:E,delayLeave:S,afterLeave:R}=b,N=()=>r(I,d,h),B=()=>{E(I,()=>{N(),R&&R()})};S?S(I,N,B):B()}else r(I,d,h)},_e=(l,d,h,p=!1,m=!1)=>{const{type:I,props:w,ref:b,children:v,dynamicChildren:_,shapeFlag:A,patchFlag:E,dirs:S}=l;if(b!=null&&$r(b,null,h,l,!0),A&256){d.ctx.deactivate(l);return}const R=A&1&&S,N=!En(l);let B;if(N&&(B=w&&w.onVnodeBeforeUnmount)&&Ie(B,d,l),A&6)sc(l.component,h,p);else{if(A&128){l.suspense.unmount(h,p);return}R&&rt(l,null,d,"beforeUnmount"),A&64?l.type.remove(l,d,h,m,It,p):_&&(I!==ye||E>0&&E&64)?De(_,d,h,!1,!0):(I===ye&&E&384||!m&&A&16)&&De(v,d,h),p&&Us(l)}(N&&(B=w&&w.onVnodeUnmounted)||R)&&re(()=>{B&&Ie(B,d,l),R&&rt(l,null,d,"unmounted")},h)},Us=l=>{const{type:d,el:h,anchor:p,transition:m}=l;if(d===ye){rc(h,p);return}if(d===fr){P(l);return}const I=()=>{s(h),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(l.shapeFlag&1&&m&&!m.persisted){const{leave:w,delayLeave:b}=m,v=()=>w(h,I);b?b(l.el,I,v):v()}else I()},rc=(l,d)=>{let h;for(;l!==d;)h=y(l),s(l),l=h;s(d)},sc=(l,d,h)=>{const{bum:p,scope:m,update:I,subTree:w,um:b}=l;p&&cr(p),m.stop(),I&&(I.active=!1,_e(w,l,d,h)),b&&re(b,d),re(()=>{l.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},De=(l,d,h,p=!1,m=!1,I=0)=>{for(let w=I;w<l.length;w++)_e(l[w],d,h,p,m)},pn=l=>l.shapeFlag&6?pn(l.component.subTree):l.shapeFlag&128?l.suspense.next():y(l.anchor||l.el),Fs=(l,d,h)=>{l==null?d._vnode&&_e(d._vnode,null,null,!0):D(d._vnode||null,l,d,null,null,null,h),Ys(),yo(),d._vnode=l},It={p:D,um:_e,m:nt,r:Us,mt:sr,mc:me,pc:$,pbc:ke,n:pn,o:t};let ir,or;return e&&([ir,or]=e(It)),{render:Fs,hydrate:ir,createApp:kl(Fs,ir)}}function st({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Bl(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xo(t,e,n=!1){const r=t.children,s=e.children;if(O(r)&&O(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=We(s[i]),a.el=o.el),n||xo(o,a)),a.type===Yn&&(a.el=o.el)}}function jl(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Hl=t=>t.__isTeleport,ye=Symbol.for("v-fgt"),Yn=Symbol.for("v-txt"),Qt=Symbol.for("v-cmt"),fr=Symbol.for("v-stc"),zt=[];let fe=null;function Vl(t=!1){zt.push(fe=t?null:[])}function Wl(){zt.pop(),fe=zt[zt.length-1]||null}let Zt=1;function oi(t){Zt+=t}function zl(t){return t.dynamicChildren=Zt>0?fe||Et:null,Wl(),Zt>0&&fe&&fe.push(t),t}function Kl(t,e,n,r,s,i){return zl(Kt(t,e,n,r,s,i,!0))}function ql(t){return t?t.__v_isVNode===!0:!1}function Bt(t,e){return t.type===e.type&&t.key===e.key}const Xn="__vInternal",Uo=({key:t})=>t!=null?t:null,An=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?J(t)||ne(t)||k(t)?{i:Te,r:t,k:e,f:!!n}:t:null);function Kt(t,e=null,n=null,r=0,s=null,i=t===ye?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Uo(e),ref:e&&An(e),scopeId:Eo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Te};return a?(gs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=J(n)?8:16),Zt>0&&!o&&fe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&fe.push(c),c}const dt=Gl;function Gl(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===cl)&&(t=Qt),ql(t)){const a=Pt(t,e,!0);return n&&gs(a,n),Zt>0&&!i&&fe&&(a.shapeFlag&6?fe[fe.indexOf(t)]=a:fe.push(a)),a.patchFlag|=-2,a}if(iu(t)&&(t=t.__vccOpts),e){e=Jl(e);let{class:a,style:c}=e;a&&!J(a)&&(e.class=ns(a)),q(c)&&(go(c)&&!O(c)&&(c=Q({},c)),e.style=ts(c))}const o=J(t)?1:ll(t)?128:Hl(t)?64:q(t)?4:k(t)?2:0;return Kt(t,e,n,r,s,o,i,!0)}function Jl(t){return t?go(t)||Xn in t?Q({},t):t:null}function Pt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Xl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Uo(a),ref:e&&e.ref?n&&s?O(s)?s.concat(An(e)):[s,An(e)]:An(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ye?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pt(t.ssContent),ssFallback:t.ssFallback&&Pt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Yl(t=" ",e=0){return dt(Yn,null,t,e)}function ve(t){return t==null||typeof t=="boolean"?dt(Qt):O(t)?dt(ye,null,t.slice()):typeof t=="object"?We(t):dt(Yn,null,String(t))}function We(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pt(t)}function gs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(O(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),gs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Xn in e)?e._ctx=Te:s===3&&Te&&(Te.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else k(e)?(e={default:e,_ctx:Te},n=32):(e=String(e),r&64?(n=16,e=[Yl(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ns([e.class,r.class]));else if(s==="style")e.style=ts([e.style,r.style]);else if(Hn(s)){const i=e[s],o=r[s];o&&i!==o&&!(O(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ie(t,e,n,r=null){pe(t,e,7,[n,r])}const Ql=Po();let Zl=0;function eu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ql,i={uid:Zl++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new yc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Do(r,s),emitsOptions:wo(r,s),emit:null,emitted:null,propsDefaults:j,inheritAttrs:r.inheritAttrs,ctx:j,data:j,props:j,attrs:j,slots:j,refs:j,setupState:j,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=nl.bind(null,i),t.ce&&t.ce(i),i}let X=null,ms,vt,ai="__VUE_INSTANCE_SETTERS__";(vt=Rr()[ai])||(vt=Rr()[ai]=[]),vt.push(t=>X=t),ms=t=>{vt.length>1?vt.forEach(e=>e(t)):vt[0](t)};const kt=t=>{ms(t),t.scope.on()},ft=()=>{X&&X.scope.off(),ms(null)};function Fo(t){return t.vnode.shapeFlag&4}let en=!1;function tu(t,e=!1){en=e;const{props:n,children:r}=t.vnode,s=Fo(t);Nl(t,n,s,e),xl(t,r);const i=s?nu(t,e):void 0;return en=!1,i}function nu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=mo(new Proxy(t.ctx,Tl));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?su(t):null;kt(t),Mt();const i=Ge(r,t,0,[t.props,s]);if(Lt(),ft(),eo(i)){if(i.then(ft,ft),e)return i.then(o=>{ci(t,o,e)}).catch(o=>{qn(o,t,0)});t.asyncDep=i}else ci(t,i,e)}else $o(t,e)}function ci(t,e,n){k(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:q(e)&&(t.setupState=_o(e)),$o(t,n)}let li;function $o(t,e,n){const r=t.type;if(!t.render){if(!e&&li&&!r.render){const s=r.template||hs(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Q(Q({isCustomElement:i,delimiters:a},o),c);r.render=li(s,u)}}t.render=r.render||he}{kt(t),Mt();try{Al(t)}finally{Lt(),ft()}}}function ru(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ie(t,"get","$attrs"),e[n]}}))}function su(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return ru(t)},slots:t.slots,emit:t.emit,expose:e}}function _s(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(_o(mo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wt)return Wt[n](t)},has(e,n){return n in e||n in Wt}}))}function iu(t){return k(t)&&"__vccOpts"in t}const ou=(t,e)=>Jc(t,e,en),au=Symbol.for("v-scx"),cu=()=>Tn(au),lu="3.3.10",uu="http://www.w3.org/2000/svg",at=typeof document<"u"?document:null,ui=at&&at.createElement("template"),du={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?at.createElementNS(uu,t):at.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>at.createTextNode(t),createComment:t=>at.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>at.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{ui.innerHTML=r?"<svg>".concat(t,"</svg>"):t;const a=ui.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fu=Symbol("_vtc");function hu(t,e,n){const r=t[fu];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pu=Symbol("_vod");function gu(t,e,n){const r=t.style,s=J(n);if(n&&!s){if(e&&!J(e))for(const i in e)n[i]==null&&Br(r,i,"");for(const i in n)Br(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),pu in t&&(r.display=i)}}const di=/\s*!important$/;function Br(t,e,n){if(O(n))n.forEach(r=>Br(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=mu(t,e);di.test(n)?t.setProperty(Nt(r),n.replace(di,""),"important"):t[r]=n}}const fi=["Webkit","Moz","ms"],hr={};function mu(t,e){const n=hr[e];if(n)return n;let r=Rt(e);if(r!=="filter"&&r in t)return hr[e]=r;r=to(r);for(let s=0;s<fi.length;s++){const i=fi[s]+r;if(i in t)return hr[e]=i}return e}const hi="http://www.w3.org/1999/xlink";function _u(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hi,e.slice(6,e.length)):t.setAttributeNS(hi,e,n);else{const i=Ic(e);n==null||i&&!no(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function bu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,f=n==null?"":n;u!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=no(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch(u){}c&&t.removeAttribute(e)}function Iu(t,e,n,r){t.addEventListener(e,n,r)}function yu(t,e,n,r){t.removeEventListener(e,n,r)}const pi=Symbol("_vei");function vu(t,e,n,r,s=null){const i=t[pi]||(t[pi]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=wu(e);if(r){const u=i[e]=Au(r,s);Iu(t,a,u,c)}else o&&(yu(t,a,o,c),i[e]=void 0)}}const gi=/(?:Once|Passive|Capture)$/;function wu(t){let e;if(gi.test(t)){e={};let r;for(;r=t.match(gi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nt(t.slice(2)),e]}let pr=0;const Eu=Promise.resolve(),Tu=()=>pr||(Eu.then(()=>pr=0),pr=Date.now());function Au(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;pe(Su(r,n.value),e,5,[r])};return n.value=t,n.attached=Tu(),n}function Su(t,e){if(O(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const mi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Cu=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?hu(t,r,s):e==="style"?gu(t,n,r):Hn(e)?Qr(e)||vu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ru(t,e,r,s))?bu(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),_u(t,e,r,s))};function Ru(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&mi(e)&&k(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;return!(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")}return mi(e)&&J(n)?!1:e in t}const Ou=Q({patchProp:Cu},du);let _i;function Pu(){return _i||(_i=Fl(Ou))}const ku=(...t)=>{const e=Pu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Du(r);if(!s)return;const i=e._component;!k(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Du(t){return J(t)?document.querySelector(t):t}/**
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
 */const Bo=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Nu=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},jo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,g=(i&3)<<4|a>>4;let y=(a&15)<<2|u>>6,T=u&63;c||(T=64,o||(y=64)),r.push(n[f],n[g],n[y],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Bo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||g==null)throw new Mu;const y=i<<2|a>>4;if(r.push(y),u!==64){const T=a<<4&240|u>>2;if(r.push(T),g!==64){const U=u<<6&192|g;r.push(U)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Mu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lu=function(t){const e=Bo(t);return jo.encodeByteArray(e,!0)},Ho=function(t){return Lu(t).replace(/\./g,"")},Vo=function(t){try{return jo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Uu=()=>xu().__FIREBASE_DEFAULTS__,Fu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$u=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&Vo(t[1]);return e&&JSON.parse(e)},bs=()=>{try{return Uu()||Fu()||$u()}catch(t){console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(t));return}},Bu=t=>{var e,n;return(n=(e=bs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Wo=()=>{var t;return(t=bs())===null||t===void 0?void 0:t.config},zo=t=>{var e;return(e=bs())===null||e===void 0?void 0:e["_".concat(t)]};/**
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
 */class ju{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z())}function Ko(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Vu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wu(){const t=Z();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qo(){try{return typeof indexedDB=="object"}catch(t){return!1}}function Go(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function zu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Ku="FirebaseError";class Pe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ku,Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bt.prototype.create)}}class bt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s="".concat(this.service,"/").concat(e),i=this.errors[e],o=i?qu(i,r):"Error",a="".concat(this.serviceName,": ").concat(o," (").concat(s,").");return new Pe(s,a,r)}}function qu(t,e){return t.replace(Gu,(n,r)=>{const s=e[r];return s!=null?String(s):"<".concat(r,"?>")})}const Gu=/\{\$([^}]+)}/g;function Ju(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(bi(i)&&bi(o)){if(!tn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function bi(t){return t!==null&&typeof t=="object"}/**
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
 */function on(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yu(t,e){const n=new Xu(t,e);return n.subscribe.bind(n)}class Xu{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Qu(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=gr),s.error===void 0&&(s.error=gr),s.complete===void 0&&(s.complete=gr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(o){}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qu(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gr(){}/**
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
 */const Zu=1e3,ed=2,td=4*60*60*1e3,nd=.5;function Ii(t,e=Zu,n=ed){const r=e*Math.pow(n,t),s=Math.round(nd*r*(Math.random()-.5)*2);return Math.min(td,r+s)}/**
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
 */function Ze(t){return t&&t._delegate?t._delegate:t}class Re{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const it="[DEFAULT]";/**
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
 */class rd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ju;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch(s){}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error("Service ".concat(this.name," is not available"))}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,!!this.shouldAutoInitialize()){if(id(e))try{this.getOrInitializeService({instanceIdentifier:it})}catch(n){}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch(i){}}}}clearInstance(e=it){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=it){return this.instances.has(e)}getOptions(e=it){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error("".concat(this.name,"(").concat(r,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(s){}return r||null}normalizeInstanceIdentifier(e=it){return this.component?this.component.multipleInstances?e:it:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sd(t){return t===it?void 0:t}function id(t){return t.instantiationMode==="EAGER"}/**
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
 */class od{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const ad={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},cd=F.INFO,ld={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},ud=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ld[e];if(s)console[s]("[".concat(r,"]  ").concat(t.name,":"),...n);else throw new Error("Attempted to log a message with an invalid logType (value: ".concat(e,")"))};class Is{constructor(e){this.name=e,this._logLevel=cd,this._logHandler=ud,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ad[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const dd=(t,e)=>e.some(n=>t instanceof n);let yi,vi;function fd(){return yi||(yi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hd(){return vi||(vi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jo=new WeakMap,jr=new WeakMap,Yo=new WeakMap,mr=new WeakMap,ys=new WeakMap;function pd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Je(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jo.set(n,t)}).catch(()=>{}),ys.set(e,t),e}function gd(t){if(jr.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});jr.set(t,e)}let Hr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Yo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Je(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function md(t){Hr=t(Hr)}function _d(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_r(this),e,...n);return Yo.set(r,e.sort?e.sort():[e]),Je(r)}:hd().includes(t)?function(...e){return t.apply(_r(this),e),Je(Jo.get(this))}:function(...e){return Je(t.apply(_r(this),e))}}function bd(t){return typeof t=="function"?_d(t):(t instanceof IDBTransaction&&gd(t),dd(t,fd())?new Proxy(t,Hr):t)}function Je(t){if(t instanceof IDBRequest)return pd(t);if(mr.has(t))return mr.get(t);const e=bd(t);return e!==t&&(mr.set(t,e),ys.set(e,t)),e}const _r=t=>ys.get(t);function Id(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Je(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Je(o.result),c.oldVersion,c.newVersion,Je(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const yd=["get","getKey","getAll","getAllKeys","count"],vd=["put","add","delete","clear"],br=new Map;function wi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(br.get(e))return br.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=vd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return br.set(e,i),i}md(t=>({...t,get:(e,n,r)=>wi(e,n)||t.get(e,n,r),has:(e,n)=>!!wi(e,n)||t.has(e,n)}));/**
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
 */class wd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ed(n)){const r=n.getImmediate();return"".concat(r.library,"/").concat(r.version)}else return null}).filter(n=>n).join(" ")}}function Ed(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vr="@firebase/app",Ei="0.9.25";/**
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
 */const pt=new Is("@firebase/app"),Td="@firebase/app-compat",Ad="@firebase/analytics-compat",Sd="@firebase/analytics",Cd="@firebase/app-check-compat",Rd="@firebase/app-check",Od="@firebase/auth",Pd="@firebase/auth-compat",kd="@firebase/database",Dd="@firebase/database-compat",Nd="@firebase/functions",Md="@firebase/functions-compat",Ld="@firebase/installations",xd="@firebase/installations-compat",Ud="@firebase/messaging",Fd="@firebase/messaging-compat",$d="@firebase/performance",Bd="@firebase/performance-compat",jd="@firebase/remote-config",Hd="@firebase/remote-config-compat",Vd="@firebase/storage",Wd="@firebase/storage-compat",zd="@firebase/firestore",Kd="@firebase/firestore-compat",qd="firebase",Gd="10.7.1";/**
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
 */const Wr="[DEFAULT]",Jd={[Vr]:"fire-core",[Td]:"fire-core-compat",[Sd]:"fire-analytics",[Ad]:"fire-analytics-compat",[Rd]:"fire-app-check",[Cd]:"fire-app-check-compat",[Od]:"fire-auth",[Pd]:"fire-auth-compat",[kd]:"fire-rtdb",[Dd]:"fire-rtdb-compat",[Nd]:"fire-fn",[Md]:"fire-fn-compat",[Ld]:"fire-iid",[xd]:"fire-iid-compat",[Ud]:"fire-fcm",[Fd]:"fire-fcm-compat",[$d]:"fire-perf",[Bd]:"fire-perf-compat",[jd]:"fire-rc",[Hd]:"fire-rc-compat",[Vd]:"fire-gcs",[Wd]:"fire-gcs-compat",[zd]:"fire-fst",[Kd]:"fire-fst-compat","fire-js":"fire-js",[qd]:"fire-js-all"};/**
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
 */const Mn=new Map,zr=new Map;function Yd(t,e){try{t.container.addComponent(e)}catch(n){pt.debug("Component ".concat(e.name," failed to register with FirebaseApp ").concat(t.name),n)}}function Fe(t){const e=t.name;if(zr.has(e))return pt.debug("There were multiple attempts to register component ".concat(e,".")),!1;zr.set(e,t);for(const n of Mn.values())Yd(n,t);return!0}function xt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Xd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ye=new bt("app","Firebase",Xd);/**
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
 */class Qd{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ye.create("app-deleted",{appName:this._name})}}/**
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
 */const an=Gd;function Xo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Wr,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ye.create("bad-app-name",{appName:String(s)});if(n||(n=Wo()),!n)throw Ye.create("no-options");const i=Mn.get(s);if(i){if(tn(n,i.options)&&tn(r,i.config))return i;throw Ye.create("duplicate-app",{appName:s})}const o=new od(s);for(const c of zr.values())o.addComponent(c);const a=new Qd(n,r,o);return Mn.set(s,a),a}function Qo(t=Wr){const e=Mn.get(t);if(!e&&t===Wr&&Wo())return Xo();if(!e)throw Ye.create("no-app",{appName:t});return e}function Ae(t,e,n){var r;let s=(r=Jd[t])!==null&&r!==void 0?r:t;n&&(s+="-".concat(n));const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=['Unable to register library "'.concat(s,'" with version "').concat(e,'":')];i&&a.push('library name "'.concat(s,'" contains illegal characters (whitespace or "/")')),i&&o&&a.push("and"),o&&a.push('version name "'.concat(e,'" contains illegal characters (whitespace or "/")')),pt.warn(a.join(" "));return}Fe(new Re("".concat(s,"-version"),()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Zd="firebase-heartbeat-database",ef=1,nn="firebase-heartbeat-store";let Ir=null;function Zo(){return Ir||(Ir=Id(Zd,ef,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(nn)}}}).catch(t=>{throw Ye.create("idb-open",{originalErrorMessage:t.message})})),Ir}async function tf(t){try{return await(await Zo()).transaction(nn).objectStore(nn).get(ea(t))}catch(e){if(e instanceof Pe)pt.warn(e.message);else{const n=Ye.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pt.warn(n.message)}}}async function Ti(t,e){try{const r=(await Zo()).transaction(nn,"readwrite");await r.objectStore(nn).put(e,ea(t)),await r.done}catch(n){if(n instanceof Pe)pt.warn(n.message);else{const r=Ye.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pt.warn(r.message)}}}function ea(t){return"".concat(t.name,"!").concat(t.options.appId)}/**
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
 */const nf=1024,rf=30*24*60*60*1e3;class sf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new af(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ai();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=rf}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ai(),{heartbeatsToSend:r,unsentEntries:s}=of(this._heartbeatsCache.heartbeats),i=Ho(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ai(){return new Date().toISOString().substring(0,10)}function of(t,e=nf){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Si(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Si(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class af{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qo()?Go().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tf(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ti(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ti(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Si(t){return Ho(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function cf(t){Fe(new Re("platform-logger",e=>new wd(e),"PRIVATE")),Fe(new Re("heartbeat",e=>new sf(e),"PRIVATE")),Ae(Vr,Ei,t),Ae(Vr,Ei,"esm2017"),Ae("fire-js","")}cf("");var lf="firebase",uf="10.7.1";/**
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
 */Ae(lf,uf,"app");const df=(t,e)=>e.some(n=>t instanceof n);let Ci,Ri;function ff(){return Ci||(Ci=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hf(){return Ri||(Ri=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ta=new WeakMap,Kr=new WeakMap,na=new WeakMap,yr=new WeakMap,vs=new WeakMap;function pf(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Xe(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ta.set(n,t)}).catch(()=>{}),vs.set(e,t),e}function gf(t){if(Kr.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Kr.set(t,e)}let qr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||na.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mf(t){qr=t(qr)}function _f(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vr(this),e,...n);return na.set(r,e.sort?e.sort():[e]),Xe(r)}:hf().includes(t)?function(...e){return t.apply(vr(this),e),Xe(ta.get(this))}:function(...e){return Xe(t.apply(vr(this),e))}}function bf(t){return typeof t=="function"?_f(t):(t instanceof IDBTransaction&&gf(t),df(t,ff())?new Proxy(t,qr):t)}function Xe(t){if(t instanceof IDBRequest)return pf(t);if(yr.has(t))return yr.get(t);const e=bf(t);return e!==t&&(yr.set(t,e),vs.set(e,t)),e}const vr=t=>vs.get(t);function If(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Xe(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Xe(o.result),c.oldVersion,c.newVersion,Xe(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const yf=["get","getKey","getAll","getAllKeys","count"],vf=["put","add","delete","clear"],wr=new Map;function Oi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wr.get(e))return wr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=vf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yf.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return wr.set(e,i),i}mf(t=>({...t,get:(e,n,r)=>Oi(e,n)||t.get(e,n,r),has:(e,n)=>!!Oi(e,n)||t.has(e,n)}));const ra="@firebase/installations",ws="0.6.4";/**
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
 */const sa=1e4,ia="w:".concat(ws),oa="FIS_v2",wf="https://firebaseinstallations.googleapis.com/v1",Ef=60*60*1e3,Tf="installations",Af="Installations";/**
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
 */const Sf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},gt=new bt(Tf,Af,Sf);function aa(t){return t instanceof Pe&&t.code.includes("request-failed")}/**
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
 */function ca({projectId:t}){return"".concat(wf,"/projects/").concat(t,"/installations")}function la(t){return{token:t.token,requestStatus:2,expiresIn:Rf(t.expiresIn),creationTime:Date.now()}}async function ua(t,e){const r=(await e.json()).error;return gt.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function da({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Cf(t,{refreshToken:e}){const n=da(t);return n.append("Authorization",Of(e)),n}async function fa(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Rf(t){return Number(t.replace("s","000"))}function Of(t){return"".concat(oa," ").concat(t)}/**
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
 */async function Pf({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=ca(t),s=da(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:oa,appId:t.appId,sdkVersion:ia},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await fa(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:la(u.authToken)}}else throw await ua("Create Installation",c)}/**
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
 */function ha(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function kf(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Df=/^[cdef][\w-]{21}$/,Gr="";function Nf(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Mf(t);return Df.test(n)?n:Gr}catch(t){return Gr}}function Mf(t){return kf(t).substr(0,22)}/**
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
 */function Qn(t){return"".concat(t.appName,"!").concat(t.appId)}/**
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
 */const pa=new Map;function ga(t,e){const n=Qn(t);ma(n,e),Lf(n,e)}function ma(t,e){const n=pa.get(t);if(n)for(const r of n)r(e)}function Lf(t,e){const n=xf();n&&n.postMessage({key:t,fid:e}),Uf()}let ct=null;function xf(){return!ct&&"BroadcastChannel"in self&&(ct=new BroadcastChannel("[Firebase] FID Change"),ct.onmessage=t=>{ma(t.data.key,t.data.fid)}),ct}function Uf(){pa.size===0&&ct&&(ct.close(),ct=null)}/**
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
 */const Ff="firebase-installations-database",$f=1,mt="firebase-installations-store";let Er=null;function Es(){return Er||(Er=If(Ff,$f,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mt)}}})),Er}async function Ln(t,e){const n=Qn(t),s=(await Es()).transaction(mt,"readwrite"),i=s.objectStore(mt),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&ga(t,e.fid),e}async function _a(t){const e=Qn(t),r=(await Es()).transaction(mt,"readwrite");await r.objectStore(mt).delete(e),await r.done}async function Zn(t,e){const n=Qn(t),s=(await Es()).transaction(mt,"readwrite"),i=s.objectStore(mt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&ga(t,a.fid),a}/**
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
 */async function Ts(t){let e;const n=await Zn(t.appConfig,r=>{const s=Bf(r),i=jf(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Gr?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Bf(t){const e=t||{fid:Nf(),registrationStatus:0};return ba(e)}function jf(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(gt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Hf(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Vf(t)}:{installationEntry:e}}async function Hf(t,e){try{const n=await Pf(t,e);return Ln(t.appConfig,n)}catch(n){throw aa(n)&&n.customData.serverCode===409?await _a(t.appConfig):await Ln(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Vf(t){let e=await Pi(t.appConfig);for(;e.registrationStatus===1;)await ha(100),e=await Pi(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ts(t);return r||n}return e}function Pi(t){return Zn(t,e=>{if(!e)throw gt.create("installation-not-found");return ba(e)})}function ba(t){return Wf(t)?{fid:t.fid,registrationStatus:0}:t}function Wf(t){return t.registrationStatus===1&&t.registrationTime+sa<Date.now()}/**
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
 */async function zf({appConfig:t,heartbeatServiceProvider:e},n){const r=Kf(t,n),s=Cf(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:ia,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await fa(()=>fetch(r,a));if(c.ok){const u=await c.json();return la(u)}else throw await ua("Generate Auth Token",c)}function Kf(t,{fid:e}){return"".concat(ca(t),"/").concat(e,"/authTokens:generate")}/**
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
 */async function As(t,e=!1){let n;const r=await Zn(t.appConfig,i=>{if(!Ia(i))throw gt.create("not-registered");const o=i.authToken;if(!e&&Jf(o))return i;if(o.requestStatus===1)return n=qf(t,e),i;{if(!navigator.onLine)throw gt.create("app-offline");const a=Xf(i);return n=Gf(t,a),a}});return n?await n:r.authToken}async function qf(t,e){let n=await ki(t.appConfig);for(;n.authToken.requestStatus===1;)await ha(100),n=await ki(t.appConfig);const r=n.authToken;return r.requestStatus===0?As(t,e):r}function ki(t){return Zn(t,e=>{if(!Ia(e))throw gt.create("not-registered");const n=e.authToken;return Qf(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Gf(t,e){try{const n=await zf(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ln(t.appConfig,r),n}catch(n){if(aa(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _a(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ln(t.appConfig,r)}throw n}}function Ia(t){return t!==void 0&&t.registrationStatus===2}function Jf(t){return t.requestStatus===2&&!Yf(t)}function Yf(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ef}function Xf(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Qf(t){return t.requestStatus===1&&t.requestTime+sa<Date.now()}/**
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
 */async function Zf(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ts(e);return r?r.catch(console.error):As(e).catch(console.error),n.fid}/**
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
 */async function eh(t,e=!1){const n=t;return await th(n),(await As(n,e)).token}async function th(t){const{registrationPromise:e}=await Ts(t);e&&await e}/**
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
 */function nh(t){if(!t||!t.options)throw Tr("App Configuration");if(!t.name)throw Tr("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Tr(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Tr(t){return gt.create("missing-app-config-values",{valueName:t})}/**
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
 */const ya="installations",rh="installations-internal",sh=t=>{const e=t.getProvider("app").getImmediate(),n=nh(e),r=xt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ih=t=>{const e=t.getProvider("app").getImmediate(),n=xt(e,ya).getImmediate();return{getId:()=>Zf(n),getToken:s=>eh(n,s)}};function oh(){Fe(new Re(ya,sh,"PUBLIC")),Fe(new Re(rh,ih,"PRIVATE"))}oh();Ae(ra,ws);Ae(ra,ws,"esm2017");/**
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
 */const xn="analytics",ah="firebase_id",ch="origin",lh=60*1e3,uh="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ss="https://www.googletagmanager.com/gtag/js";/**
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
 */const se=new Is("@firebase/analytics");/**
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
 */const dh={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ce=new bt("analytics","Analytics",dh);/**
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
 */function fh(t){if(!t.startsWith(Ss)){const e=ce.create("invalid-gtag-resource",{gtagURL:t});return se.warn(e.message),""}return t}function va(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function hh(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function ph(t,e){const n=hh("firebase-js-sdk-policy",{createScriptURL:fh}),r=document.createElement("script"),s="".concat(Ss,"?l=").concat(t,"&id=").concat(e);r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function gh(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function mh(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await va(n)).find(u=>u.measurementId===s);c&&await e[c.appId]}}catch(a){se.error(a)}t("config",s,i)}async function _h(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await va(n);for(const c of o){const u=a.find(g=>g.measurementId===c),f=u&&e[u.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){se.error(i)}}function bh(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await _h(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await mh(t,e,n,r,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,u]=o;t("get",a,c,u)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){se.error(a)}}return s}function Ih(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=bh(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function yh(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ss)&&n.src.includes(t))return n;return null}/**
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
 */const vh=30,wh=1e3;class Eh{constructor(e={},n=wh){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const wa=new Eh;function Th(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ah(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Th(r)},i=uh.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch(c){}throw ce.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Sh(t,e=wa,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw ce.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ce.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Oh;return setTimeout(async()=>{a.abort()},n!==void 0?n:lh),Ea({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Ea(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=wa){var i;const{appId:o,measurementId:a}=t;try{await Ch(r,e)}catch(c){if(a)return se.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(a)+' provided in the "measurementId" field in the local Firebase config. ['.concat(c==null?void 0:c.message,"]")),{appId:o,measurementId:a};throw c}try{const c=await Ah(t);return s.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!Rh(u)){if(s.deleteThrottleMetadata(o),a)return se.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(a)+' provided in the "measurementId" field in the local Firebase config. ['.concat(u==null?void 0:u.message,"]")),{appId:o,measurementId:a};throw c}const f=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ii(n,s.intervalMillis,vh):Ii(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,g),se.debug("Calling attemptFetch again in ".concat(f," millis")),Ea(t,g,r,s)}}function Ch(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(ce.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Rh(t){if(!(t instanceof Pe)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Oh{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ph(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function kh(){if(qo())try{await Go()}catch(t){return se.warn(ce.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return se.warn(ce.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Dh(t,e,n,r,s,i,o){var a;const c=Sh(t);c.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&se.warn("The measurement ID in the local Firebase config (".concat(t.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(T.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")}).catch(T=>se.error(T)),e.push(c);const u=kh().then(T=>{if(T)return r.getId()}),[f,g]=await Promise.all([c,u]);yh(i)||ph(i,f.measurementId),s("js",new Date);const y=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return y[ch]="firebase",y.update=!0,g!=null&&(y[ah]=g),s("config",f.measurementId,y),f.measurementId}/**
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
 */class Nh{constructor(e){this.app=e}_delete(){return delete qt[this.app.options.appId],Promise.resolve()}}let qt={},Di=[];const Ni={};let Ar="dataLayer",Mh="gtag",Mi,Ta,Li=!1;function Lh(){const t=[];if(Ko()&&t.push("This is a browser extension environment."),zu()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>"(".concat(s+1,") ").concat(r)).join(" "),n=ce.create("invalid-analytics-context",{errorInfo:e});se.warn(n.message)}}function xh(t,e,n){Lh();const r=t.options.appId;if(!r)throw ce.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)se.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(t.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.');else throw ce.create("no-api-key");if(qt[r]!=null)throw ce.create("already-exists",{id:r});if(!Li){gh(Ar);const{wrappedGtag:i,gtagCore:o}=Ih(qt,Di,Ni,Ar,Mh);Ta=i,Mi=o,Li=!0}return qt[r]=Dh(t,Di,Ni,e,Mi,Ar,n),new Nh(t)}function Uh(t=Qo()){t=Ze(t);const e=xt(t,xn);return e.isInitialized()?e.getImmediate():Fh(t)}function Fh(t,e={}){const n=xt(t,xn);if(n.isInitialized()){const s=n.getImmediate();if(tn(e,n.getOptions()))return s;throw ce.create("already-initialized")}return n.initialize({options:e})}function $h(t,e,n,r){t=Ze(t),Ph(Ta,qt[t.app.options.appId],e,n,r).catch(s=>se.error(s))}const xi="@firebase/analytics",Ui="0.10.0";function Bh(){Fe(new Re(xn,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return xh(r,s,n)},"PUBLIC")),Fe(new Re("analytics-internal",t,"PRIVATE")),Ae(xi,Ui),Ae(xi,Ui,"esm2017");function t(e){try{const n=e.getProvider(xn).getImmediate();return{logEvent:(r,s,i)=>$h(n,r,s,i)}}catch(n){throw ce.create("interop-component-reg-failed",{reason:n})}}}Bh();function Cs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Aa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jh=Aa,Sa=new bt("auth","Firebase",Aa());/**
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
 */const Un=new Is("@firebase/auth");function Hh(t,...e){Un.logLevel<=F.WARN&&Un.warn("Auth (".concat(an,"): ").concat(t),...e)}function Sn(t,...e){Un.logLevel<=F.ERROR&&Un.error("Auth (".concat(an,"): ").concat(t),...e)}/**
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
 */function Oe(t,...e){throw Rs(t,...e)}function Se(t,...e){return Rs(t,...e)}function Ca(t,e,n){const r=Object.assign(Object.assign({},jh()),{[e]:n});return new bt("auth","Firebase",r).create(e,{appName:t.name})}function Vh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Oe(t,"argument-error"),Ca(t,"argument-error","Type of ".concat(e.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function Rs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sa.create(t,...e)}function C(t,e,...n){if(!t)throw Rs(e,...n)}function Le(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sn(e),new Error(e)}function $e(t,e){t||Le(e)}/**
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
 */function Jr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Wh(){return Fi()==="http:"||Fi()==="https:"}function Fi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function zh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wh()||Ko()||"connection"in navigator)?navigator.onLine:!0}function Kh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class cn{constructor(e,n){this.shortDelay=e,this.longDelay=n,$e(n>e,"Short delay should be less than long delay!"),this.isMobile=Hu()||Vu()}get(){return zh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Os(t,e){$e(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?"".concat(n).concat(e.startsWith("/")?e.slice(1):e):n}/**
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
 */class Ra{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Gh=new cn(3e4,6e4);function Ps(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ut(t,e,n,r,s={}){return Oa(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=on(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ra.fetch()(Pa(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Oa(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qh),e);try{const s=new Yh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw vn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw vn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw vn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw vn(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ca(t,f,u);Oe(t,f)}}catch(s){if(s instanceof Pe)throw s;Oe(t,"network-request-failed",{message:String(s)})}}async function Jh(t,e,n,r,s={}){const i=await Ut(t,e,n,r,s);return"mfaPendingCredential"in i&&Oe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Pa(t,e,n,r){const s="".concat(e).concat(n,"?").concat(r);return t.config.emulator?Os(t.config,s):"".concat(t.config.apiScheme,"://").concat(s)}class Yh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Se(this.auth,"network-request-failed")),Gh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Se(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Xh(t,e){return Ut(t,"POST","/v1/accounts:delete",e)}async function Qh(t,e){return Ut(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Gt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}async function Zh(t,e=!1){const n=Ze(t),r=await n.getIdToken(e),s=ks(r);C(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Gt(Sr(s.auth_time)),issuedAtTime:Gt(Sr(s.iat)),expirationTime:Gt(Sr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sr(t){return Number(t)*1e3}function ks(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Sn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vo(n);return s?JSON.parse(s):(Sn("Failed to decode base64 JWT payload"),null)}catch(s){return Sn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ep(t){const e=ks(t);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pe&&tp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class np{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ka{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gt(this.lastLoginAt),this.creationTime=Gt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fn(t){var e;const n=t.auth,r=await t.getIdToken(),s=await rn(t,Qh(n,{idToken:r}));C(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ip(i.providerUserInfo):[],a=sp(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?u:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ka(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function rp(t){const e=Ze(t);await Fn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ip(t){return t.map(e=>{var{providerId:n}=e,r=Cs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function op(t,e){const n=await Oa(t,{},async()=>{const r=on({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Pa(t,s,"/v1/token","key=".concat(i)),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ra.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ap(t,e){return Ut(t,"POST","/v2/accounts:revokeToken",Ps(t,e))}/**
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
 */class sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ep(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await op(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new sn;return r&&(C(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(C(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(C(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sn,this.toJSON())}_performRefresh(){return Le("not implemented")}}/**
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
 */function Ve(t,e){C(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ht{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Cs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new np(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ka(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await rn(this,this.stsTokenManager.getToken(this.auth,e));return C(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zh(this,e)}reload(){return rp(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await rn(this,Xh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,U=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(a=n.tenantId)!==null&&a!==void 0?a:void 0,H=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,G=(u=n.createdAt)!==null&&u!==void 0?u:void 0,W=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:z,emailVerified:P,isAnonymous:oe,providerData:ge,stsTokenManager:je}=n;C(z&&je,e,"internal-error");const me=sn.fromJSON(this.name,je);C(typeof z=="string",e,"internal-error"),Ve(g,e.name),Ve(y,e.name),C(typeof P=="boolean",e,"internal-error"),C(typeof oe=="boolean",e,"internal-error"),Ve(T,e.name),Ve(U,e.name),Ve(D,e.name),Ve(H,e.name),Ve(G,e.name),Ve(W,e.name);const et=new ht({uid:z,auth:e,email:y,emailVerified:P,displayName:g,isAnonymous:oe,photoURL:U,phoneNumber:T,tenantId:D,stsTokenManager:me,createdAt:G,lastLoginAt:W});return ge&&Array.isArray(ge)&&(et.providerData=ge.map(ke=>Object.assign({},ke))),H&&(et._redirectEventId=H),et}static async _fromIdTokenResponse(e,n,r=!1){const s=new sn;s.updateFromServerResponse(n);const i=new ht({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fn(i),i}}/**
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
 */const $i=new Map;function xe(t){$e(t instanceof Function,"Expected a class definition");let e=$i.get(t);return e?($e(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$i.set(t,e),e)}/**
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
 */class Da{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Da.type="NONE";const Bi=Da;/**
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
 */function Cn(t,e,n){return"firebase:".concat(t,":").concat(e,":").concat(n)}class St{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Cn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Cn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ht._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new St(xe(Bi),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||xe(Bi);const o=Cn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const g=ht._fromJSON(e,f);u!==i&&(a=g),i=u;break}}catch(f){}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new St(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch(f){}})),new St(i,e,r))}}/**
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
 */function ji(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(La(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Na(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ua(e))return"Blackberry";if(Fa(e))return"Webos";if(Ds(e))return"Safari";if((e.includes("chrome/")||Ma(e))&&!e.includes("edge/"))return"Chrome";if(xa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Na(t=Z()){return/firefox\//i.test(t)}function Ds(t=Z()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ma(t=Z()){return/crios\//i.test(t)}function La(t=Z()){return/iemobile/i.test(t)}function xa(t=Z()){return/android/i.test(t)}function Ua(t=Z()){return/blackberry/i.test(t)}function Fa(t=Z()){return/webos/i.test(t)}function er(t=Z()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cp(t=Z()){var e;return er(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lp(){return Wu()&&document.documentMode===10}function $a(t=Z()){return er(t)||xa(t)||Fa(t)||Ua(t)||/windows phone/i.test(t)||La(t)}function up(){try{return!!(window&&window!==window.top)}catch(t){return!1}}/**
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
 */function Ba(t,e=[]){let n;switch(t){case"Browser":n=ji(Z());break;case"Worker":n="".concat(ji(Z()),"-").concat(t);break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return"".concat(n,"/JsCore/").concat(an,"/").concat(r)}/**
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
 */class dp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function fp(t,e={}){return Ut(t,"GET","/v2/passwordPolicy",Ps(t,e))}/**
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
 */const hp=6;class pp{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:hp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class gp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hi(this),this.idTokenSubscription=new Hi(this),this.beforeStateQueue=new dp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=xe(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await St.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ze(e):null;return n&&C(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(xe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fp(this),n=new pp(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ap(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&xe(e)||this._popupRedirectResolver;C(n,this,"argument-error"),this.redirectPersistenceManager=await St.create(this,[xe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ba(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Hh("Error while retrieving App Check token: ".concat(n.error)),n==null?void 0:n.token}}function tr(t){return Ze(t)}class Hi{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yu(n=>this.observer=n)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function mp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _p(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Se("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",mp().appendChild(r)})}function bp(t){return"__".concat(t).concat(Math.floor(Math.random()*1e6))}/**
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
 */function Ip(t,e){const n=xt(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(tn(i,e!=null?e:{}))return s;Oe(s,"already-initialized")}return n.initialize({options:e})}function yp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(xe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vp(t,e,n){const r=tr(t);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ja(e),{host:o,port:a}=wp(e),c=a===null?"":":".concat(a);r.config.emulator={url:"".concat(i,"//").concat(o).concat(c,"/")},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Ep()}function ja(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function wp(t){const e=ja(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vi(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Vi(o)}}}function Vi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ep(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ha{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Le("not implemented")}_getIdTokenResponse(e){return Le("not implemented")}_linkToIdToken(e,n){return Le("not implemented")}_getReauthenticationResolver(e){return Le("not implemented")}}/**
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
 */async function Ct(t,e){return Jh(t,"POST","/v1/accounts:signInWithIdp",Ps(t,e))}/**
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
 */const Tp="http://localhost";class _t extends Ha{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new _t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Oe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Cs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new _t(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ct(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ct(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ct(e,n)}buildRequest(){const e={requestUri:Tp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=on(n)}return e}}/**
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
 */class Ns{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ln extends Ns{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ee extends ln{constructor(){super("facebook.com")}static credential(e){return _t._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ee.credential(e.oauthAccessToken)}catch(n){return null}}}Ee.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ee.PROVIDER_ID="facebook.com";/**
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
 */class Me extends ln{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return _t._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Me.credential(n,r)}catch(s){return null}}}Me.GOOGLE_SIGN_IN_METHOD="google.com";Me.PROVIDER_ID="google.com";/**
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
 */class ze extends ln{constructor(){super("github.com")}static credential(e){return _t._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ze.credential(e.oauthAccessToken)}catch(n){return null}}}ze.GITHUB_SIGN_IN_METHOD="github.com";ze.PROVIDER_ID="github.com";/**
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
 */class Ke extends ln{constructor(){super("twitter.com")}static credential(e,n){return _t._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ke.credential(n,r)}catch(s){return null}}}Ke.TWITTER_SIGN_IN_METHOD="twitter.com";Ke.PROVIDER_ID="twitter.com";/**
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
 */class Dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ht._fromIdTokenResponse(e,r,s),o=Wi(r);return new Dt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Wi(r);return new Dt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Wi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $n extends Pe{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$n.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $n(e,n,r,s)}}function Va(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$n._fromErrorAndOperation(t,i,e,r):i})}async function Ap(t,e,n=!1){const r=await rn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dt._forOperation(t,"link",r)}/**
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
 */async function Sp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await rn(t,Va(r,s,e,t),n);C(i.idToken,r,"internal-error");const o=ks(i.idToken);C(o,r,"internal-error");const{sub:a}=o;return C(t.uid===a,r,"user-mismatch"),Dt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Oe(r,"user-mismatch"),i}}/**
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
 */async function Cp(t,e,n=!1){const r="signIn",s=await Va(t,r,e),i=await Dt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Rp(t,e,n,r){return Ze(t).onIdTokenChanged(e,n,r)}function Op(t,e,n){return Ze(t).beforeAuthStateChanged(e,n)}const Bn="__sak";/**
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
 */class Wa{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bn,"1"),this.storage.removeItem(Bn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Pp(){const t=Z();return Ds(t)||er(t)}const kp=1e3,Dp=10;class za extends Wa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pp()&&up(),this.fallbackToPolling=$a(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);lp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Dp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}za.type="LOCAL";const Np=za;/**
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
 */class Ka extends Wa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ka.type="SESSION";const qa=Ka;/**
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
 */function Mp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class nr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new nr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Mp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}nr.receivers=[];/**
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
 */function Ms(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Lp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Ms("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const y=g;if(y.data.eventId===u)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(y.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ce(){return window}function xp(t){Ce().location.href=t}/**
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
 */function Ga(){return typeof Ce().WorkerGlobalScope<"u"&&typeof Ce().importScripts=="function"}async function Up(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}function Fp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $p(){return Ga()?self:null}/**
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
 */const Ja="firebaseLocalStorageDb",Bp=1,jn="firebaseLocalStorage",Ya="fbase_key";class un{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rr(t,e){return t.transaction([jn],e?"readwrite":"readonly").objectStore(jn)}function jp(){const t=indexedDB.deleteDatabase(Ja);return new un(t).toPromise()}function Yr(){const t=indexedDB.open(Ja,Bp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jn,{keyPath:Ya})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jn)?e(r):(r.close(),await jp(),e(await Yr()))})})}async function zi(t,e,n){const r=rr(t,!0).put({[Ya]:e,value:n});return new un(r).toPromise()}async function Hp(t,e){const n=rr(t,!1).get(e),r=await new un(n).toPromise();return r===void 0?null:r.value}function Ki(t,e){const n=rr(t,!0).delete(e);return new un(n).toPromise()}const Vp=800,Wp=3;class Xa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Wp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ga()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nr._getInstance($p()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Up(),!this.activeServiceWorker)return;this.sender=new Lp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yr();return await zi(e,Bn,"1"),await Ki(e,Bn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zi(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ki(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=rr(s,!1).getAll();return new un(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xa.type="LOCAL";const zp=Xa;new cn(3e4,6e4);/**
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
 */function Qa(t,e){return e?xe(e):(C(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ls extends Ha{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ct(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ct(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ct(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Kp(t){return Cp(t.auth,new Ls(t),t.bypassAuthState)}function qp(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),Sp(n,new Ls(t),t.bypassAuthState)}async function Gp(t){const{auth:e,user:n}=t;return C(n,e,"internal-error"),Ap(n,new Ls(t),t.bypassAuthState)}/**
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
 */class Za{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kp;case"linkViaPopup":case"linkViaRedirect":return Gp;case"reauthViaPopup":case"reauthViaRedirect":return qp;default:Oe(this.auth,"internal-error")}}resolve(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$e(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Jp=new cn(2e3,1e4);async function ec(t,e,n){const r=tr(t);Vh(t,e,Ns);const s=Qa(r,n);return new lt(r,"signInViaPopup",e,s).executeNotNull()}class lt extends Za{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,lt.currentPopupAction&&lt.currentPopupAction.cancel(),lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){$e(this.filter.length===1,"Popup operations only handle one event");const e=Ms();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Se(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Se(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Se(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jp.get())};e()}}lt.currentPopupAction=null;/**
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
 */const Yp="pendingRedirect",Rn=new Map;class Xp extends Za{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Rn.get(this.auth._key());if(!e){try{const r=await Qp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Rn.set(this.auth._key(),e)}return this.bypassAuthState||Rn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qp(t,e){const n=tg(e),r=eg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Zp(t,e){Rn.set(t._key(),e)}function eg(t){return xe(t._redirectPersistence)}function tg(t){return Cn(Yp,t.config.apiKey,t.name)}async function ng(t,e,n=!1){const r=tr(t),s=Qa(r,e),o=await new Xp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const rg=10*60*1e3;class sg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ig(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Se(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rg&&this.cachedEventUids.clear(),this.cachedEventUids.has(qi(e))}saveEventToCache(e){this.cachedEventUids.add(qi(e)),this.lastProcessedEventTime=Date.now()}}function qi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ig(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tc(t);default:return!1}}/**
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
 */async function og(t,e={}){return Ut(t,"GET","/v1/projects",e)}/**
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
 */const ag=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cg=/^https?/;async function lg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await og(t);for(const n of e)try{if(ug(n))return}catch(r){}Oe(t,"unauthorized-domain")}function ug(t){const e=Jr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!cg.test(n))return!1;if(ag.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const dg=new cn(3e4,6e4);function Gi(){const t=Ce().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function fg(t){return new Promise((e,n)=>{var r,s,i;function o(){Gi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gi(),n(Se(t,"network-request-failed"))},timeout:dg.get()})}if(!((s=(r=Ce().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ce().gapi)===null||i===void 0)&&i.load)o();else{const a=bp("iframefcb");return Ce()[a]=()=>{gapi.load?o():n(Se(t,"network-request-failed"))},_p("https://apis.google.com/js/api.js?onload=".concat(a)).catch(c=>n(c))}}).catch(e=>{throw On=null,e})}let On=null;function hg(t){return On=On||fg(t),On}/**
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
 */const pg=new cn(5e3,15e3),gg="__/auth/iframe",mg="emulator/auth/iframe",_g={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ig(t){const e=t.config;C(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Os(e,mg):"https://".concat(t.config.authDomain,"/").concat(gg),r={apiKey:e.apiKey,appName:t.name,v:an},s=bg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),"".concat(n,"?").concat(on(r).slice(1))}async function yg(t){const e=await hg(t),n=Ce().gapi;return C(n,t,"internal-error"),e.open({where:document.body,url:Ig(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_g,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Se(t,"network-request-failed"),a=Ce().setTimeout(()=>{i(o)},pg.get());function c(){Ce().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const vg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wg=500,Eg=600,Tg="_blank",Ag="http://localhost";class Ji{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Sg(t,e,n,r=wg,s=Eg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vg),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Z().toLowerCase();n&&(a=Ma(u)?Tg:n),Na(u)&&(e=e||Ag,c.scrollbars="yes");const f=Object.entries(c).reduce((y,[T,U])=>"".concat(y).concat(T,"=").concat(U,","),"");if(cp(u)&&a!=="_self")return Cg(e||"",a),new Ji(null);const g=window.open(e||"",a,f);C(g,t,"popup-blocked");try{g.focus()}catch(y){}return new Ji(g)}function Cg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Rg="__/auth/handler",Og="emulator/auth/handler",Pg=encodeURIComponent("fac");async function Yi(t,e,n,r,s,i){C(t.config.authDomain,t,"auth-domain-config-required"),C(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:an,eventId:s};if(e instanceof Ns){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ju(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries(i||{}))o[f]=g}if(e instanceof ln){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),u=c?"#".concat(Pg,"=").concat(encodeURIComponent(c)):"";return"".concat(kg(t),"?").concat(on(a).slice(1)).concat(u)}function kg({config:t}){return t.emulator?Os(t,Og):"https://".concat(t.authDomain,"/").concat(Rg)}/**
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
 */const Cr="webStorageSupport";class Dg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qa,this._completeRedirectFn=ng,this._overrideRedirectResult=Zp}async _openPopup(e,n,r,s){var i;$e((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Yi(e,n,r,Jr(),s);return Sg(e,o,Ms())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Yi(e,n,r,Jr(),s);return xp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($e(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yg(e),r=new sg(e);return n.register("authEvent",s=>(C(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cr,{type:Cr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Cr];o!==void 0&&n(!!o),Oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $a()||Ds()||er()}}const Ng=Dg;var Xi="@firebase/auth",Qi="1.5.1";/**
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
 */class Mg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Lg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function xg(t){Fe(new Re("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ba(t)},u=new gp(r,s,i,c);return yp(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fe(new Re("auth-internal",e=>{const n=tr(e.getProvider("auth").getImmediate());return(r=>new Mg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ae(Xi,Qi,Lg(t)),Ae(Xi,Qi,"esm2017")}/**
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
 */const Ug=5*60,Fg=zo("authIdTokenMaxAge")||Ug;let Zi=null;const $g=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Fg)return;const s=n==null?void 0:n.token;Zi!==s&&(Zi=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:"Bearer ".concat(s)}:{}}))};function Bg(t=Qo()){const e=xt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ip(t,{popupRedirectResolver:Ng,persistence:[zp,Np,qa]}),r=zo("authTokenSyncURL");if(r){const i=$g(r);Op(n,i,()=>i(n.currentUser)),Rp(n,o=>i(o))}const s=Bu("auth");return s&&vp(n,"http://".concat(s)),n}xg("Browser");const jg={apiKey:"AIzaSyCA7u7USv_fIYdTX9Yf4Dp_Nc_ywMI5rGk",authDomain:"wired-plateau-407307.firebaseapp.com",projectId:"wired-plateau-407307",storageBucket:"wired-plateau-407307.appspot.com",messagingSenderId:"585374910303",appId:"1:585374910303:web:b8e25fc0b342ce0b0dd8ea",measurementId:"G-9FXJZDF51F"},Hg=Xo(jg);Uh(Hg);const nc=Bg();let Vg=null;const Wg=async()=>{const t=await ec(nc,new Me);console.log(t)},zg=()=>{const t=new Ee;ec(nc,t).then(e=>{const n=e.user,s=Ee.credentialFromResult(e).accessToken;console.log(n),console.log(s)}).catch(e=>{console.log(e)})},Kg=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},qg={methods:{onclick(){Wg()},facebookLogin(){zg()},getUser(){console.log(Vg)}}};function Gg(t,e,n,r,s,i){return Vl(),Kl(ye,null,[Kt("div",{onClick:e[0]||(e[0]=(...o)=>i.onclick&&i.onclick(...o))},"使用谷歌登录"),Kt("div",{onClick:e[1]||(e[1]=(...o)=>i.facebookLogin&&i.facebookLogin(...o))},"Facebook"),Kt("div",{onClick:e[2]||(e[2]=(...o)=>i.getUser&&i.getUser(...o))},"获取user")],64)}const Jg=Kg(qg,[["render",Gg]]);ku(Jg).mount("#app");export{Yg as __vite_legacy_guard};
