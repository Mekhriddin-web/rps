(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Vt,v,yo,Me,Zi,Eo,Rr,Io,et={},wo=[],Ic=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,jn=Array.isArray;function de(e,t){for(var n in t)e[n]=t[n];return e}function To(e){var t=e.parentNode;t&&t.removeChild(e)}function R(e,t,n){var r,i,s,o={};for(s in t)s=="key"?r=t[s]:s=="ref"?i=t[s]:o[s]=t[s];if(arguments.length>2&&(o.children=arguments.length>3?Vt.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)o[s]===void 0&&(o[s]=e.defaultProps[s]);return bt(e,o,r,i,null)}function bt(e,t,n,r,i){var s={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++yo};return i==null&&v.vnode!=null&&v.vnode(s),s}function bo(){return{current:null}}function Z(e){return e.children}function Y(e,t){this.props=e,this.context=t}function En(e,t){if(t==null)return e.__?En(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?En(e):null}function So(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return So(e)}}function kr(e){(!e.__d&&(e.__d=!0)&&Me.push(e)&&!In.__r++||Zi!==v.debounceRendering)&&((Zi=v.debounceRendering)||Eo)(In)}function In(){var e,t,n,r,i,s,o,a,l;for(Me.sort(Rr);e=Me.shift();)e.__d&&(t=Me.length,r=void 0,i=void 0,s=void 0,a=(o=(n=e).__v).__e,(l=n.__P)&&(r=[],i=[],(s=de({},o)).__v=o.__v+1,ei(l,o,s,n.__n,l.ownerSVGElement!==void 0,o.__h!=null?[a]:null,r,a??En(o),o.__h,i),ko(r,o,i),o.__e!=a&&So(o)),Me.length>t&&Me.sort(Rr));In.__r=0}function Co(e,t,n,r,i,s,o,a,l,c,h){var u,g,_,f,m,T,I,w,k,N,L=0,F=r&&r.__k||wo,ee=F.length,ue=ee,M=t.length;for(n.__k=[],u=0;u<M;u++)(f=n.__k[u]=(f=t[u])==null||typeof f=="boolean"||typeof f=="function"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?bt(null,f,null,null,f):jn(f)?bt(Z,{children:f},null,null,null):f.__b>0?bt(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null&&(f.__=n,f.__b=n.__b+1,(w=wc(f,F,I=u+L,ue))===-1?_=et:(_=F[w]||et,F[w]=void 0,ue--),ei(e,f,_,i,s,o,a,l,c,h),m=f.__e,(g=f.ref)&&_.ref!=g&&(_.ref&&ti(_.ref,null,f),h.push(g,f.__c||m,f)),m!=null&&(T==null&&(T=m),N=!(k=_===et||_.__v===null)&&w===I,k?w==-1&&L--:w!==I&&(w===I+1?(L++,N=!0):w>I?ue>M-I?(L+=w-I,N=!0):L--:L=w<I&&w==I-1?w-I:0),I=u+L,N=N||w==u&&!k,typeof f.type!="function"||w===I&&_.__k!==f.__k?typeof f.type=="function"||N?f.__d!==void 0?(l=f.__d,f.__d=void 0):l=m.nextSibling:l=Ro(e,m,l):l=Ao(f,l,e),typeof n.type=="function"&&(n.__d=l)));for(n.__e=T,u=ee;u--;)F[u]!=null&&(typeof n.type=="function"&&F[u].__e!=null&&F[u].__e==n.__d&&(n.__d=F[u].__e.nextSibling),Po(F[u],F[u]))}function Ao(e,t,n){for(var r,i=e.__k,s=0;i&&s<i.length;s++)(r=i[s])&&(r.__=e,t=typeof r.type=="function"?Ao(r,t,n):Ro(n,r.__e,t));return t}function _e(e,t){return t=t||[],e==null||typeof e=="boolean"||(jn(e)?e.some(function(n){_e(n,t)}):t.push(e)),t}function Ro(e,t,n){return n==null||n.parentNode!==e?e.insertBefore(t,null):t==n&&t.parentNode!=null||e.insertBefore(t,n),t.nextSibling}function wc(e,t,n,r){var i=e.key,s=e.type,o=n-1,a=n+1,l=t[n];if(l===null||l&&i==l.key&&s===l.type)return n;if(r>(l!=null?1:0))for(;o>=0||a<t.length;){if(o>=0){if((l=t[o])&&i==l.key&&s===l.type)return o;o--}if(a<t.length){if((l=t[a])&&i==l.key&&s===l.type)return a;a++}}return-1}function Tc(e,t,n,r,i){var s;for(s in n)s==="children"||s==="key"||s in t||wn(e,s,null,n[s],r);for(s in t)i&&typeof t[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||n[s]===t[s]||wn(e,s,t[s],n[s],r)}function es(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ic.test(t)?n:n+"px"}function wn(e,t,n,r,i){var s;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||es(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||es(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")s=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?r||e.addEventListener(t,s?ns:ts,s):e.removeEventListener(t,s?ns:ts,s);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function ts(e){return this.l[e.type+!1](v.event?v.event(e):e)}function ns(e){return this.l[e.type+!0](v.event?v.event(e):e)}function ei(e,t,n,r,i,s,o,a,l,c){var h,u,g,_,f,m,T,I,w,k,N,L,F,ee,ue,M=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(l=n.__h,a=t.__e=n.__e,t.__h=null,s=[a]),(h=v.__b)&&h(t);try{e:if(typeof M=="function"){if(I=t.props,w=(h=M.contextType)&&r[h.__c],k=h?w?w.props.value:h.__:r,n.__c?T=(u=t.__c=n.__c).__=u.__E:("prototype"in M&&M.prototype.render?t.__c=u=new M(I,k):(t.__c=u=new Y(I,k),u.constructor=M,u.render=Sc),w&&w.sub(u),u.props=I,u.state||(u.state={}),u.context=k,u.__n=r,g=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),M.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=de({},u.__s)),de(u.__s,M.getDerivedStateFromProps(I,u.__s))),_=u.props,f=u.state,u.__v=t,g)M.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(M.getDerivedStateFromProps==null&&I!==_&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(I,k),!u.__e&&(u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(I,u.__s,k)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(u.props=I,u.state=u.__s,u.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(Ke){Ke&&(Ke.__=t)}),N=0;N<u._sb.length;N++)u.__h.push(u._sb[N]);u._sb=[],u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(I,u.__s,k),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(_,f,m)})}if(u.context=k,u.props=I,u.__P=e,u.__e=!1,L=v.__r,F=0,"prototype"in M&&M.prototype.render){for(u.state=u.__s,u.__d=!1,L&&L(t),h=u.render(u.props,u.state,u.context),ee=0;ee<u._sb.length;ee++)u.__h.push(u._sb[ee]);u._sb=[]}else do u.__d=!1,L&&L(t),h=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++F<25);u.state=u.__s,u.getChildContext!=null&&(r=de(de({},r),u.getChildContext())),g||u.getSnapshotBeforeUpdate==null||(m=u.getSnapshotBeforeUpdate(_,f)),Co(e,jn(ue=h!=null&&h.type===Z&&h.key==null?h.props.children:h)?ue:[ue],t,n,r,i,s,o,a,l,c),u.base=t.__e,t.__h=null,u.__h.length&&o.push(u),T&&(u.__E=u.__=null)}else s==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=bc(n.__e,t,n,r,i,s,o,l,c);(h=v.diffed)&&h(t)}catch(Ke){t.__v=null,(l||s!=null)&&(t.__e=a,t.__h=!!l,s[s.indexOf(a)]=null),v.__e(Ke,t,n)}}function ko(e,t,n){for(var r=0;r<n.length;r++)ti(n[r],n[++r],n[++r]);v.__c&&v.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(s){s.call(i)})}catch(s){v.__e(s,i.__v)}})}function bc(e,t,n,r,i,s,o,a,l){var c,h,u,g=n.props,_=t.props,f=t.type,m=0;if(f==="svg"&&(i=!0),s!=null){for(;m<s.length;m++)if((c=s[m])&&"setAttribute"in c==!!f&&(f?c.localName===f:c.nodeType===3)){e=c,s[m]=null;break}}if(e==null){if(f===null)return document.createTextNode(_);e=i?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,_.is&&_),s=null,a=!1}if(f===null)g===_||a&&e.data===_||(e.data=_);else{if(s=s&&Vt.call(e.childNodes),h=(g=n.props||et).dangerouslySetInnerHTML,u=_.dangerouslySetInnerHTML,!a){if(s!=null)for(g={},m=0;m<e.attributes.length;m++)g[e.attributes[m].name]=e.attributes[m].value;(u||h)&&(u&&(h&&u.__html==h.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||""))}if(Tc(e,_,g,i,a),u)t.__k=[];else if(Co(e,jn(m=t.props.children)?m:[m],t,n,r,i&&f!=="foreignObject",s,o,s?s[0]:n.__k&&En(n,0),a,l),s!=null)for(m=s.length;m--;)s[m]!=null&&To(s[m]);a||("value"in _&&(m=_.value)!==void 0&&(m!==e.value||f==="progress"&&!m||f==="option"&&m!==g.value)&&wn(e,"value",m,g.value,!1),"checked"in _&&(m=_.checked)!==void 0&&m!==e.checked&&wn(e,"checked",m,g.checked,!1))}return e}function ti(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){v.__e(r,n)}}function Po(e,t,n){var r,i;if(v.unmount&&v.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ti(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){v.__e(s,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Po(r[i],t,n||typeof e.type!="function");n||e.__e==null||To(e.__e),e.__=e.__e=e.__d=void 0}function Sc(e,t,n){return this.constructor(e,n)}function st(e,t,n){var r,i,s,o;v.__&&v.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,s=[],o=[],ei(t,e=(!r&&n||t).__k=R(Z,null,[e]),i||et,et,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?Vt.call(t.childNodes):null,s,!r&&n?n:i?i.__e:t.firstChild,r,o),ko(s,e,o)}function No(e,t){st(e,t,No)}function Cc(e,t,n){var r,i,s,o,a=de({},e.props);for(s in e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)s=="key"?r=t[s]:s=="ref"?i=t[s]:a[s]=t[s]===void 0&&o!==void 0?o[s]:t[s];return arguments.length>2&&(a.children=arguments.length>3?Vt.call(arguments,2):n),bt(e.type,a,r||e.key,i||e.ref,null)}function Ee(e,t){var n={__c:t="__cC"+Io++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,s;return this.getChildContext||(i=[],(s={})[t]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&i.some(function(a){a.__e=!0,kr(a)})},this.sub=function(o){i.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){i.splice(i.indexOf(o),1),a&&a.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Vt=wo.slice,v={__e:function(e,t,n,r){for(var i,s,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(a){e=a}throw e}},yo=0,Y.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=de({},this.state),typeof e=="function"&&(e=e(de({},n),this.props)),e&&de(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),kr(this))},Y.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),kr(this))},Y.prototype.render=Z,Me=[],Eo=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Rr=function(e,t){return e.__v.__b-t.__v.__b},In.__r=0,Io=0;/**
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
 */const Oo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ac=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Do={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,h=s>>2,u=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(g=64)),r.push(n[h],n[u],n[g],n[_])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Oo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ac(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const u=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new Rc;const g=s<<2|a>>4;if(r.push(g),c!==64){const _=a<<4&240|c>>2;if(r.push(_),u!==64){const f=c<<6&192|u;r.push(f)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Rc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kc=function(e){const t=Oo(e);return Do.encodeByteArray(t,!0)},Tn=function(e){return kc(e).replace(/\./g,"")},xo=function(e){try{return Do.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Pc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nc=()=>Pc().__FIREBASE_DEFAULTS__,Oc=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Dc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&xo(e[1]);return t&&JSON.parse(t)},ni=()=>{try{return Nc()||Oc()||Dc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Lo=e=>{var t,n;return(n=(t=ni())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},xc=e=>{const t=Lo(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Mo=()=>{var e;return(e=ni())===null||e===void 0?void 0:e.config},Uo=e=>{var t;return(t=ni())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Lc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Mc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Tn(JSON.stringify(n)),Tn(JSON.stringify(o)),a].join(".")}/**
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
 */function K(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(K())}function $c(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Fc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Bc(){const e=K();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function jc(){try{return typeof indexedDB=="object"}catch{return!1}}function Vc(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Hc="FirebaseError";class Ie extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Hc,Object.setPrototypeOf(this,Ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ht.prototype.create)}}class Ht{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Wc(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ie(i,a,r)}}function Wc(e,t){return e.replace(zc,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const zc=/\{\$([^}]+)}/g;function Gc(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function bn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(rs(s)&&rs(o)){if(!bn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function rs(e){return e!==null&&typeof e=="object"}/**
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
 */function Wt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Kc(e,t){const n=new qc(e,t);return n.subscribe.bind(n)}class qc{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Jc(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=hr),i.error===void 0&&(i.error=hr),i.complete===void 0&&(i.complete=hr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jc(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function hr(){}/**
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
 */function We(e){return e&&e._delegate?e._delegate:e}class je{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Le="[DEFAULT]";/**
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
 */class Xc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Lc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Qc(t))try{this.getOrInitializeService({instanceIdentifier:Le})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Le){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Le){return this.instances.has(t)}getOptions(t=Le){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yc(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Le){return this.component?this.component.multipleInstances?t:Le:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yc(e){return e===Le?void 0:e}function Qc(e){return e.instantiationMode==="EAGER"}/**
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
 */class Zc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Xc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var S;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(S||(S={}));const eu={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},tu=S.INFO,nu={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},ru=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=nu[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ri{constructor(t){this.name=t,this._logLevel=tu,this._logHandler=ru,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in S))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?eu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...t),this._logHandler(this,S.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...t),this._logHandler(this,S.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,S.INFO,...t),this._logHandler(this,S.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,S.WARN,...t),this._logHandler(this,S.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...t),this._logHandler(this,S.ERROR,...t)}}const iu=(e,t)=>t.some(n=>e instanceof n);let is,ss;function su(){return is||(is=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ou(){return ss||(ss=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $o=new WeakMap,Pr=new WeakMap,Fo=new WeakMap,dr=new WeakMap,ii=new WeakMap;function au(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Re(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&$o.set(n,e)}).catch(()=>{}),ii.set(t,e),t}function lu(e){if(Pr.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Pr.set(e,t)}let Nr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Pr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Fo.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Re(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function cu(e){Nr=e(Nr)}function uu(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(fr(this),t,...n);return Fo.set(r,t.sort?t.sort():[t]),Re(r)}:ou().includes(e)?function(...t){return e.apply(fr(this),t),Re($o.get(this))}:function(...t){return Re(e.apply(fr(this),t))}}function hu(e){return typeof e=="function"?uu(e):(e instanceof IDBTransaction&&lu(e),iu(e,su())?new Proxy(e,Nr):e)}function Re(e){if(e instanceof IDBRequest)return au(e);if(dr.has(e))return dr.get(e);const t=hu(e);return t!==e&&(dr.set(e,t),ii.set(t,e)),t}const fr=e=>ii.get(e);function du(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Re(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Re(o.result),l.oldVersion,l.newVersion,Re(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const fu=["get","getKey","getAll","getAllKeys","count"],pu=["put","add","delete","clear"],pr=new Map;function os(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(pr.get(t))return pr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=pu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fu.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return pr.set(t,s),s}cu(e=>({...e,get:(t,n,r)=>os(t,n)||e.get(t,n,r),has:(t,n)=>!!os(t,n)||e.has(t,n)}));/**
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
 */class gu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_u(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _u(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Or="@firebase/app",as="0.9.14";/**
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
 */const Ve=new ri("@firebase/app"),mu="@firebase/app-compat",vu="@firebase/analytics-compat",yu="@firebase/analytics",Eu="@firebase/app-check-compat",Iu="@firebase/app-check",wu="@firebase/auth",Tu="@firebase/auth-compat",bu="@firebase/database",Su="@firebase/database-compat",Cu="@firebase/functions",Au="@firebase/functions-compat",Ru="@firebase/installations",ku="@firebase/installations-compat",Pu="@firebase/messaging",Nu="@firebase/messaging-compat",Ou="@firebase/performance",Du="@firebase/performance-compat",xu="@firebase/remote-config",Lu="@firebase/remote-config-compat",Mu="@firebase/storage",Uu="@firebase/storage-compat",$u="@firebase/firestore",Fu="@firebase/firestore-compat",Bu="firebase",ju="10.0.0";/**
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
 */const Dr="[DEFAULT]",Vu={[Or]:"fire-core",[mu]:"fire-core-compat",[yu]:"fire-analytics",[vu]:"fire-analytics-compat",[Iu]:"fire-app-check",[Eu]:"fire-app-check-compat",[wu]:"fire-auth",[Tu]:"fire-auth-compat",[bu]:"fire-rtdb",[Su]:"fire-rtdb-compat",[Cu]:"fire-fn",[Au]:"fire-fn-compat",[Ru]:"fire-iid",[ku]:"fire-iid-compat",[Pu]:"fire-fcm",[Nu]:"fire-fcm-compat",[Ou]:"fire-perf",[Du]:"fire-perf-compat",[xu]:"fire-rc",[Lu]:"fire-rc-compat",[Mu]:"fire-gcs",[Uu]:"fire-gcs-compat",[$u]:"fire-fst",[Fu]:"fire-fst-compat","fire-js":"fire-js",[Bu]:"fire-js-all"};/**
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
 */const Sn=new Map,xr=new Map;function Hu(e,t){try{e.container.addComponent(t)}catch(n){Ve.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ot(e){const t=e.name;if(xr.has(t))return Ve.debug(`There were multiple attempts to register component ${t}.`),!1;xr.set(t,e);for(const n of Sn.values())Hu(n,e);return!0}function si(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Wu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ke=new Ht("app","Firebase",Wu);/**
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
 */class zu{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ke.create("app-deleted",{appName:this._name})}}/**
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
 */const dt=ju;function Bo(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Dr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw ke.create("bad-app-name",{appName:String(i)});if(n||(n=Mo()),!n)throw ke.create("no-options");const s=Sn.get(i);if(s){if(bn(n,s.options)&&bn(r,s.config))return s;throw ke.create("duplicate-app",{appName:i})}const o=new Zc(i);for(const l of xr.values())o.addComponent(l);const a=new zu(n,r,o);return Sn.set(i,a),a}function jo(e=Dr){const t=Sn.get(e);if(!t&&e===Dr&&Mo())return Bo();if(!t)throw ke.create("no-app",{appName:e});return t}function Pe(e,t,n){var r;let i=(r=Vu[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ve.warn(a.join(" "));return}ot(new je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Gu="firebase-heartbeat-database",Ku=1,Rt="firebase-heartbeat-store";let gr=null;function Vo(){return gr||(gr=du(Gu,Ku,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Rt)}}}).catch(e=>{throw ke.create("idb-open",{originalErrorMessage:e.message})})),gr}async function qu(e){try{return await(await Vo()).transaction(Rt).objectStore(Rt).get(Ho(e))}catch(t){if(t instanceof Ie)Ve.warn(t.message);else{const n=ke.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ve.warn(n.message)}}}async function ls(e,t){try{const r=(await Vo()).transaction(Rt,"readwrite");await r.objectStore(Rt).put(t,Ho(e)),await r.done}catch(n){if(n instanceof Ie)Ve.warn(n.message);else{const r=ke.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ve.warn(r.message)}}}function Ho(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Ju=1024,Xu=30*24*60*60*1e3;class Yu{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Zu(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cs();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Xu}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=cs(),{heartbeatsToSend:n,unsentEntries:r}=Qu(this._heartbeatsCache.heartbeats),i=Tn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function cs(){return new Date().toISOString().substring(0,10)}function Qu(e,t=Ju){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),us(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),us(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Zu{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jc()?Vc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qu(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ls(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ls(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function us(e){return Tn(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function eh(e){ot(new je("platform-logger",t=>new gu(t),"PRIVATE")),ot(new je("heartbeat",t=>new Yu(t),"PRIVATE")),Pe(Or,as,e),Pe(Or,as,"esm2017"),Pe("fire-js","")}eh("");function oi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Wo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const th=Wo,zo=new Ht("auth","Firebase",Wo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new ri("@firebase/auth");function nh(e,...t){Cn.logLevel<=S.WARN&&Cn.warn(`Auth (${dt}): ${e}`,...t)}function fn(e,...t){Cn.logLevel<=S.ERROR&&Cn.error(`Auth (${dt}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,...t){throw ai(e,...t)}function ie(e,...t){return ai(e,...t)}function Go(e,t,n){const r=Object.assign(Object.assign({},th()),{[t]:n});return new Ht("auth","Firebase",r).create(t,{appName:e.name})}function rh(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&le(e,"argument-error"),Go(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ai(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return zo.create(e,...t)}function E(e,t,...n){if(!e)throw ai(t,...n)}function fe(e){const t="INTERNAL ASSERTION FAILED: "+e;throw fn(t),new Error(t)}function me(e,t){e||fe(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function ih(){return hs()==="http:"||hs()==="https:"}function hs(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ih()||$c()||"connection"in navigator)?navigator.onLine:!0}function oh(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,n){this.shortDelay=t,this.longDelay=n,me(n>t,"Short delay should be less than long delay!"),this.isMobile=Uc()||Fc()}get(){return sh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(e,t){me(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=new zt(3e4,6e4);function qo(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Gt(e,t,n,r,i={}){return Jo(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Wt(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Ko.fetch()(Xo(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function Jo(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},ah),t);try{const i=new uh(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ln(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ln(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ln(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw ln(e,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Go(e,h,c);le(e,h)}}catch(i){if(i instanceof Ie)throw i;le(e,"network-request-failed",{message:String(i)})}}async function ch(e,t,n,r,i={}){const s=await Gt(e,t,n,r,i);return"mfaPendingCredential"in s&&le(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Xo(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?li(e.config,i):`${e.config.apiScheme}://${i}`}class uh{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ie(this.auth,"network-request-failed")),lh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ln(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ie(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hh(e,t){return Gt(e,"POST","/v1/accounts:delete",t)}async function dh(e,t){return Gt(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function fh(e,t=!1){const n=We(e),r=await n.getIdToken(t),i=ci(r);E(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:St(_r(i.auth_time)),issuedAtTime:St(_r(i.iat)),expirationTime:St(_r(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _r(e){return Number(e)*1e3}function ci(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return fn("JWT malformed, contained fewer than 3 sections"),null;try{const i=xo(n);return i?JSON.parse(i):(fn("Failed to decode base64 JWT payload"),null)}catch(i){return fn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ph(e){const t=ci(e);return E(t,"internal-error"),E(typeof t.exp<"u","internal-error"),E(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ie&&gh(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function gh({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=St(this.lastLoginAt),this.creationTime=St(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function An(e){var t;const n=e.auth,r=await e.getIdToken(),i=await kt(e,dh(n,{idToken:r}));E(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?yh(s.providerUserInfo):[],a=vh(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yo(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,u)}async function mh(e){const t=We(e);await An(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function vh(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function yh(e){return e.map(t=>{var{providerId:n}=t,r=oi(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(e,t){const n=await Jo(e,{},async()=>{const r=Wt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Xo(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ko.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){E(t.idToken,"internal-error"),E(typeof t.idToken<"u","internal-error"),E(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ph(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return E(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Eh(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Pt;return r&&(E(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(E(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(E(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Pt,this.toJSON())}_performRefresh(){return fe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t){E(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Fe{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=oi(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _h(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await kt(this,this.stsTokenManager.getToken(this.auth,t));return E(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return fh(this,t)}reload(){return mh(this)}_assign(t){this!==t&&(E(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Fe(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await An(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await kt(this,hh(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,c,h;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,f=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:k,emailVerified:N,isAnonymous:L,providerData:F,stsTokenManager:ee}=n;E(k&&ee,t,"internal-error");const ue=Pt.fromJSON(this.name,ee);E(typeof k=="string",t,"internal-error"),Te(u,t.name),Te(g,t.name),E(typeof N=="boolean",t,"internal-error"),E(typeof L=="boolean",t,"internal-error"),Te(_,t.name),Te(f,t.name),Te(m,t.name),Te(T,t.name),Te(I,t.name),Te(w,t.name);const M=new Fe({uid:k,auth:t,email:g,emailVerified:N,displayName:u,isAnonymous:L,photoURL:f,phoneNumber:_,tenantId:m,stsTokenManager:ue,createdAt:I,lastLoginAt:w});return F&&Array.isArray(F)&&(M.providerData=F.map(Ke=>Object.assign({},Ke))),T&&(M._redirectEventId=T),M}static async _fromIdTokenResponse(t,n,r=!1){const i=new Pt;i.updateFromServerResponse(n);const s=new Fe({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await An(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new Map;function pe(e){me(e instanceof Function,"Expected a class definition");let t=ds.get(e);return t?(me(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ds.set(e,t),t)}/**
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
 */class Qo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Qo.type="NONE";const fs=Qo;/**
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
 */function pn(e,t,n){return`firebase:${e}:${t}:${n}`}class tt{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pn(this.userKey,i.apiKey,s),this.fullPersistenceKey=pn("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Fe._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new tt(pe(fs),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||pe(fs);const o=pn(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const u=Fe._fromJSON(t,h);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new tt(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new tt(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ta(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Zo(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ra(t))return"Blackberry";if(ia(t))return"Webos";if(ui(t))return"Safari";if((t.includes("chrome/")||ea(t))&&!t.includes("edge/"))return"Chrome";if(na(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Zo(e=K()){return/firefox\//i.test(e)}function ui(e=K()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ea(e=K()){return/crios\//i.test(e)}function ta(e=K()){return/iemobile/i.test(e)}function na(e=K()){return/android/i.test(e)}function ra(e=K()){return/blackberry/i.test(e)}function ia(e=K()){return/webos/i.test(e)}function Vn(e=K()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ih(e=K()){var t;return Vn(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function wh(){return Bc()&&document.documentMode===10}function sa(e=K()){return Vn(e)||na(e)||ia(e)||ra(e)||/windows phone/i.test(e)||ta(e)}function Th(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(e,t=[]){let n;switch(e){case"Browser":n=ps(K());break;case"Worker":n=`${ps(K())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${dt}/${r}`}async function aa(e,t){return Gt(e,"GET","/v2/recaptchaConfig",qo(e,t))}function gs(e){return e!==void 0&&e.enterprise!==void 0}class la{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function ca(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ie("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bh().appendChild(r)})}function Sh(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Ch="https://www.google.com/recaptcha/enterprise.js?render=",Ah="recaptcha-enterprise",Rh="NO_RECAPTCHA";class kh{constructor(t){this.type=Ah,this.auth=Kt(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{aa(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new la(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;gs(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(c=>{o(c)}).catch(()=>{o(Rh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&gs(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ca(Ch+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class Ph{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _s(this),this.idTokenSubscription=new _s(this),this.beforeStateQueue=new Ph(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=pe(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await tt.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await An(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=oh()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?We(t):null;return n&&E(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&E(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pe(t))})}async initializeRecaptchaConfig(){const t=await aa(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new la(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new kh(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ht("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&pe(t)||this._popupRedirectResolver;E(n,this,"argument-error"),this.redirectPersistenceManager=await tt.create(this,[pe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return E(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=oa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&nh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Kt(e){return We(e)}class _s{constructor(t){this.auth=t,this.observer=null,this.addObserver=Kc(n=>this.observer=n)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(e,t){const n=si(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(bn(s,t??{}))return i;le(i,"already-initialized")}return n.initialize({options:t})}function Dh(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pe);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function xh(e,t,n){const r=Kt(e);E(r._canInitEmulator,r,"emulator-config-failed"),E(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ua(t),{host:o,port:a}=Lh(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Mh()}function ua(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Lh(e){const t=ua(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ms(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ms(o)}}}function ms(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Mh(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return fe("not implemented")}_getIdTokenResponse(t){return fe("not implemented")}_linkToIdToken(t,n){return fe("not implemented")}_getReauthenticationResolver(t){return fe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return ch(e,"POST","/v1/accounts:signInWithIdp",qo(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="http://localhost";class He extends ha{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new He(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):le("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=oi(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new He(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return nt(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,nt(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,nt(t,n)}buildRequest(){const t={requestUri:Uh,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Wt(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class qt extends hi{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends qt{constructor(){super("facebook.com")}static credential(t){return He._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return be.credentialFromTaggedObject(t)}static credentialFromError(t){return be.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return be.credential(t.oauthAccessToken)}catch{return null}}}be.FACEBOOK_SIGN_IN_METHOD="facebook.com";be.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends qt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return He._fromParams({providerId:he.PROVIDER_ID,signInMethod:he.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return he.credentialFromTaggedObject(t)}static credentialFromError(t){return he.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return he.credential(n,r)}catch{return null}}}he.GOOGLE_SIGN_IN_METHOD="google.com";he.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends qt{constructor(){super("github.com")}static credential(t){return He._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Se.credentialFromTaggedObject(t)}static credentialFromError(t){return Se.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Se.credential(t.oauthAccessToken)}catch{return null}}}Se.GITHUB_SIGN_IN_METHOD="github.com";Se.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends qt{constructor(){super("twitter.com")}static credential(t,n){return He._fromParams({providerId:Ce.PROVIDER_ID,signInMethod:Ce.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ce.credentialFromTaggedObject(t)}static credentialFromError(t){return Ce.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ce.credential(n,r)}catch{return null}}}Ce.TWITTER_SIGN_IN_METHOD="twitter.com";Ce.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Fe._fromIdTokenResponse(t,r,i),o=vs(r);return new at({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=vs(r);return new at({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function vs(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Ie{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Rn.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Rn(t,n,r,i)}}function da(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Rn._fromErrorAndOperation(e,s,t,r):s})}async function $h(e,t,n=!1){const r=await kt(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return at._forOperation(e,"link",r)}/**
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
 */async function Fh(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await kt(e,da(r,i,t,e),n);E(s.idToken,r,"internal-error");const o=ci(s.idToken);E(o,r,"internal-error");const{sub:a}=o;return E(e.uid===a,r,"user-mismatch"),at._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&le(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bh(e,t,n=!1){const r="signIn",i=await da(e,r,t),s=await at._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function jh(e,t,n,r){return We(e).onIdTokenChanged(t,n,r)}function Vh(e,t,n){return We(e).beforeAuthStateChanged(t,n)}function Hh(e,t,n,r){return We(e).onAuthStateChanged(t,n,r)}const kn="__sak";/**
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
 */class fa{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(kn,"1"),this.storage.removeItem(kn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(){const e=K();return ui(e)||Vn(e)}const zh=1e3,Gh=10;class pa extends fa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Wh()&&Th(),this.fallbackToPolling=sa(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wh()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Gh):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},zh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}pa.type="LOCAL";const Kh=pa;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends fa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ga.type="SESSION";const _a=ga;/**
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
 */function qh(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Hn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Hn(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await qh(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Jh{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=di("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const g=u;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return window}function Xh(e){se().location.href=e}/**
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
 */function ma(){return typeof se().WorkerGlobalScope<"u"&&typeof se().importScripts=="function"}async function Yh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Qh(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Zh(){return ma()?self:null}/**
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
 */const va="firebaseLocalStorageDb",ed=1,Pn="firebaseLocalStorage",ya="fbase_key";class Jt{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wn(e,t){return e.transaction([Pn],t?"readwrite":"readonly").objectStore(Pn)}function td(){const e=indexedDB.deleteDatabase(va);return new Jt(e).toPromise()}function Mr(){const e=indexedDB.open(va,ed);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Pn,{keyPath:ya})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Pn)?t(r):(r.close(),await td(),t(await Mr()))})})}async function ys(e,t,n){const r=Wn(e,!0).put({[ya]:t,value:n});return new Jt(r).toPromise()}async function nd(e,t){const n=Wn(e,!1).get(t),r=await new Jt(n).toPromise();return r===void 0?null:r.value}function Es(e,t){const n=Wn(e,!0).delete(t);return new Jt(n).toPromise()}const rd=800,id=3;class Ea{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mr(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>id)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ma()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hn._getInstance(Zh()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Yh(),!this.activeServiceWorker)return;this.sender=new Jh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Qh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Mr();return await ys(t,kn,"1"),await Es(t,kn),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ys(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>nd(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Es(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Wn(i,!1).getAll();return new Jt(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ea.type="LOCAL";const sd=Ea;new zt(3e4,6e4);/**
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
 */function Ia(e,t){return t?pe(t):(E(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class fi extends ha{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return nt(t,this._buildIdpRequest())}_linkToIdToken(t,n){return nt(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return nt(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function od(e){return Bh(e.auth,new fi(e),e.bypassAuthState)}function ad(e){const{auth:t,user:n}=e;return E(n,t,"internal-error"),Fh(n,new fi(e),e.bypassAuthState)}async function ld(e){const{auth:t,user:n}=e;return E(n,t,"internal-error"),$h(n,new fi(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return od;case"linkViaPopup":case"linkViaRedirect":return ld;case"reauthViaPopup":case"reauthViaRedirect":return ad;default:le(this.auth,"internal-error")}}resolve(t){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=new zt(2e3,1e4);class Xe extends wa{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Xe.currentPopupAction&&Xe.currentPopupAction.cancel(),Xe.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return E(t,this.auth,"internal-error"),t}async onExecution(){me(this.filter.length===1,"Popup operations only handle one event");const t=di();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ie(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ie(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xe.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ie(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,cd.get())};t()}}Xe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="pendingRedirect",gn=new Map;class hd extends wa{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=gn.get(this.auth._key());if(!t){try{const r=await dd(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}gn.set(this.auth._key(),t)}return this.bypassAuthState||gn.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dd(e,t){const n=ba(t),r=Ta(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function fd(e,t){return Ta(e)._set(ba(t),"true")}function pd(e,t){gn.set(e._key(),t)}function Ta(e){return pe(e._redirectPersistence)}function ba(e){return pn(ud,e.config.apiKey,e.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(e,t,n){return _d(e,t,n)}async function _d(e,t,n){const r=Kt(e);rh(e,t,hi),await r._initializationPromise;const i=Ia(r,n);return await fd(i,r),i._openRedirect(r,t,"signInViaRedirect")}async function md(e,t,n=!1){const r=Kt(e),i=Ia(r,t),o=await new hd(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=10*60*1e3;class yd{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ed(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Sa(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ie(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=vd&&this.cachedEventUids.clear(),this.cachedEventUids.has(Is(t))}saveEventToCache(t){this.cachedEventUids.add(Is(t)),this.lastProcessedEventTime=Date.now()}}function Is(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Sa({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ed(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sa(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Id(e,t={}){return Gt(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Td=/^https?/;async function bd(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Id(e);for(const n of t)try{if(Sd(n))return}catch{}le(e,"unauthorized-domain")}function Sd(e){const t=Lr(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Td.test(n))return!1;if(wd.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Cd=new zt(3e4,6e4);function ws(){const e=se().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Ad(e){return new Promise((t,n)=>{var r,i,s;function o(){ws(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ws(),n(ie(e,"network-request-failed"))},timeout:Cd.get()})}if(!((i=(r=se().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=se().gapi)===null||s===void 0)&&s.load)o();else{const a=Sh("iframefcb");return se()[a]=()=>{gapi.load?o():n(ie(e,"network-request-failed"))},ca(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw _n=null,t})}let _n=null;function Rd(e){return _n=_n||Ad(e),_n}/**
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
 */const kd=new zt(5e3,15e3),Pd="__/auth/iframe",Nd="emulator/auth/iframe",Od={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xd(e){const t=e.config;E(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?li(t,Nd):`https://${e.config.authDomain}/${Pd}`,r={apiKey:t.apiKey,appName:e.name,v:dt},i=Dd.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wt(r).slice(1)}`}async function Ld(e){const t=await Rd(e),n=se().gapi;return E(n,e,"internal-error"),t.open({where:document.body,url:xd(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Od,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ie(e,"network-request-failed"),a=se().setTimeout(()=>{s(o)},kd.get());function l(){se().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Md={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ud=500,$d=600,Fd="_blank",Bd="http://localhost";class Ts{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jd(e,t,n,r=Ud,i=$d){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Md),{width:r.toString(),height:i.toString(),top:s,left:o}),c=K().toLowerCase();n&&(a=ea(c)?Fd:n),Zo(c)&&(t=t||Bd,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[_,f])=>`${g}${_}=${f},`,"");if(Ih(c)&&a!=="_self")return Vd(t||"",a),new Ts(null);const u=window.open(t||"",a,h);E(u,e,"popup-blocked");try{u.focus()}catch{}return new Ts(u)}function Vd(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Hd="__/auth/handler",Wd="emulator/auth/handler",zd=encodeURIComponent("fac");async function bs(e,t,n,r,i,s){E(e.config.authDomain,e,"auth-domain-config-required"),E(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:dt,eventId:i};if(t instanceof hi){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Gc(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,u]of Object.entries(s||{}))o[h]=u}if(t instanceof qt){const h=t.getScopes().filter(u=>u!=="");h.length>0&&(o.scopes=h.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await e._getAppCheckToken(),c=l?`#${zd}=${encodeURIComponent(l)}`:"";return`${Gd(e)}?${Wt(a).slice(1)}${c}`}function Gd({config:e}){return e.emulator?li(e,Wd):`https://${e.authDomain}/${Hd}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="webStorageSupport";class Kd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_a,this._completeRedirectFn=md,this._overrideRedirectResult=pd}async _openPopup(t,n,r,i){var s;me((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bs(t,n,r,Lr(),i);return jd(t,o,di())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await bs(t,n,r,Lr(),i);return Xh(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(me(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Ld(t),r=new yd(t);return n.register("authEvent",i=>(E(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(mr,{type:mr},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[mr];o!==void 0&&n(!!o),le(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bd(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return sa()||ui()||Vn()}}const qd=Kd;var Ss="@firebase/auth",Cs="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Yd(e){ot(new je("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;E(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oa(e)},c=new Nh(r,i,s,l);return Dh(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ot(new je("auth-internal",t=>{const n=Kt(t.getProvider("auth").getImmediate());return(r=>new Jd(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pe(Ss,Cs,Xd(e)),Pe(Ss,Cs,"esm2017")}/**
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
 */const Qd=5*60,Zd=Uo("authIdTokenMaxAge")||Qd;let As=null;const ef=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Zd)return;const i=n==null?void 0:n.token;As!==i&&(As=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tf(e=jo()){const t=si(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Oh(e,{popupRedirectResolver:qd,persistence:[sd,Kh,_a]}),r=Uo("authTokenSyncURL");if(r){const s=ef(r);Vh(n,s,()=>s(n.currentUser)),jh(n,o=>s(o))}const i=Lo("auth");return i&&xh(n,`http://${i}`),n}Yd("Browser");var ve,A,vr,Rs,lt=0,Ca=[],mn=[],ks=v.__b,Ps=v.__r,Ns=v.diffed,Os=v.__c,Ds=v.unmount;function ze(e,t){v.__h&&v.__h(A,e,lt||t),lt=0;var n=A.__H||(A.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:mn}),n.__[e]}function oe(e){return lt=1,zn(ka,e)}function zn(e,t,n){var r=ze(ve++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):ka(void 0,t),function(a){var l=r.__N?r.__N[0]:r.__[0],c=r.t(l,a);l!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=A,!A.u)){var i=function(a,l,c){if(!r.__c.__H)return!0;var h=r.__c.__H.__.filter(function(g){return g.__c});if(h.every(function(g){return!g.__N}))return!s||s.call(this,a,l,c);var u=!1;return h.forEach(function(g){if(g.__N){var _=g.__[0];g.__=g.__N,g.__N=void 0,_!==g.__[0]&&(u=!0)}}),!(!u&&r.__c.props===a)&&(!s||s.call(this,a,l,c))};A.u=!0;var s=A.shouldComponentUpdate,o=A.componentWillUpdate;A.componentWillUpdate=function(a,l,c){if(this.__e){var h=s;s=void 0,i(a,l,c),s=h}o&&o.call(this,a,l,c)},A.shouldComponentUpdate=i}return r.__N||r.__}function ft(e,t){var n=ze(ve++,3);!v.__s&&gi(n.__H,t)&&(n.__=e,n.i=t,A.__H.__h.push(n))}function Ge(e,t){var n=ze(ve++,4);!v.__s&&gi(n.__H,t)&&(n.__=e,n.i=t,A.__h.push(n))}function Xt(e){return lt=5,Oe(function(){return{current:e}},[])}function Aa(e,t,n){lt=6,Ge(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function Oe(e,t){var n=ze(ve++,7);return gi(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function ae(e,t){return lt=8,Oe(function(){return e},t)}function O(e){var t=A.context[e.__c],n=ze(ve++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(A)),t.props.value):e.__}function pi(e,t){v.useDebugValue&&v.useDebugValue(t?t(e):e)}function nf(e){var t=ze(ve++,10),n=oe();return t.__=e,A.componentDidCatch||(A.componentDidCatch=function(r,i){t.__&&t.__(r,i),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Ra(){var e=ze(ve++,11);if(!e.__){for(var t=A.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function rf(){for(var e;e=Ca.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(vn),e.__H.__h.forEach(Ur),e.__H.__h=[]}catch(t){e.__H.__h=[],v.__e(t,e.__v)}}v.__b=function(e){A=null,ks&&ks(e)},v.__r=function(e){Ps&&Ps(e),ve=0;var t=(A=e.__c).__H;t&&(vr===A?(t.__h=[],A.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=mn,n.__N=n.i=void 0})):(t.__h.forEach(vn),t.__h.forEach(Ur),t.__h=[],ve=0)),vr=A},v.diffed=function(e){Ns&&Ns(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ca.push(t)!==1&&Rs===v.requestAnimationFrame||((Rs=v.requestAnimationFrame)||sf)(rf)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==mn&&(n.__=n.__V),n.i=void 0,n.__V=mn})),vr=A=null},v.__c=function(e,t){t.some(function(n){try{n.__h.forEach(vn),n.__h=n.__h.filter(function(r){return!r.__||Ur(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],v.__e(r,n.__v)}}),Os&&Os(e,t)},v.unmount=function(e){Ds&&Ds(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{vn(r)}catch(i){t=i}}),n.__H=void 0,t&&v.__e(t,n.__v))};var xs=typeof requestAnimationFrame=="function";function sf(e){var t,n=function(){clearTimeout(r),xs&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);xs&&(t=requestAnimationFrame(n))}function vn(e){var t=A,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),A=t}function Ur(e){var t=A;e.__c=e.__(),A=t}function gi(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function ka(e,t){return typeof t=="function"?t(e):t}function Pa(e,t){for(var n in t)e[n]=t[n];return e}function $r(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function yr(e,t){return e===t&&(e!==0||1/e==1/t)||e!=e&&t!=t}function Nn(e){this.props=e}function Na(e,t){function n(i){var s=this.props.ref,o=s==i.ref;return!o&&s&&(s.call?s(null):s.current=null),t?!t(this.props,i)||!o:$r(this.props,i)}function r(i){return this.shouldComponentUpdate=n,R(e,i)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(Nn.prototype=new Y).isPureReactComponent=!0,Nn.prototype.shouldComponentUpdate=function(e,t){return $r(this.props,e)||$r(this.state,t)};var Ls=v.__b;v.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ls&&Ls(e)};var of=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function _i(e){function t(n){var r=Pa({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=of,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Ms=function(e,t){return e==null?null:_e(_e(e).map(t))},mi={map:Ms,forEach:Ms,count:function(e){return e?_e(e).length:0},only:function(e){var t=_e(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:_e},af=v.__e;v.__e=function(e,t,n,r){if(e.then){for(var i,s=t;s=s.__;)if((i=s.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}af(e,t,n,r)};var Us=v.unmount;function Oa(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=Pa({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Oa(r,t,n)})),e}function Da(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Da(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function Ct(){this.__u=0,this.t=null,this.__b=null}function xa(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function La(e){var t,n,r;function i(s){if(t||(t=e()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw t;return R(n,s)}return i.displayName="Lazy",i.__f=!0,i}function Ye(){this.u=null,this.o=null}v.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Us&&Us(e)},(Ct.prototype=new Y).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=xa(r.__v),s=!1,o=function(){s||(s=!0,n.__R=null,i?i(a):a())};n.__R=o;var a=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=Da(c,c.__c.__P,c.__c.__O)}var h;for(r.setState({__a:r.__b=null});h=r.t.pop();)h.forceUpdate()}},l=t.__h===!0;r.__u++||l||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o)},Ct.prototype.componentWillUnmount=function(){this.t=[]},Ct.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Oa(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&R(Z,null,e.fallback);return i&&(i.__h=null),[R(Z,null,t.__a?null:e.children),i]};var $s=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function lf(e){return this.getChildContext=function(){return e.context},e.children}function cf(e){var t=this,n=e.i;t.componentWillUnmount=function(){st(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),st(R(lf,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function Ma(e,t){var n=R(cf,{__v:e,i:t});return n.containerInfo=t,n}(Ye.prototype=new Y).__a=function(e){var t=this,n=xa(t.__v),r=t.o.get(e);return r[0]++,function(i){var s=function(){t.props.revealOrder?(r.push(i),$s(t,e,r)):i()};n?n(s):s()}},Ye.prototype.render=function(e){this.u=null,this.o=new Map;var t=_e(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Ye.prototype.componentDidUpdate=Ye.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){$s(e,n,t)})};var Ua=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,uf=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,hf=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,df=/[A-Z0-9]/g,ff=typeof document<"u",pf=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function $a(e,t,n){return t.__k==null&&(t.textContent=""),st(e,t),typeof n=="function"&&n(),e?e.__c:null}function Fa(e,t,n){return No(e,t),typeof n=="function"&&n(),e?e.__c:null}Y.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Y.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Fs=v.event;function gf(){}function _f(){return this.cancelBubble}function mf(){return this.defaultPrevented}v.event=function(e){return Fs&&(e=Fs(e)),e.persist=gf,e.isPropagationStopped=_f,e.isDefaultPrevented=mf,e.nativeEvent=e};var vi,vf={enumerable:!1,configurable:!0,get:function(){return this.class}},Bs=v.vnode;v.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,i={};for(var s in n){var o=n[s];if(!(s==="value"&&"defaultValue"in n&&o==null||ff&&s==="children"&&r==="noscript"||s==="class"||s==="className")){var a=s.toLowerCase();s==="defaultValue"&&"value"in n&&n.value==null?s="value":s==="download"&&o===!0?o="":a==="ondoubleclick"?s="ondblclick":a!=="onchange"||r!=="input"&&r!=="textarea"||pf(n.type)?a==="onfocus"?s="onfocusin":a==="onblur"?s="onfocusout":hf.test(s)?s=a:r.indexOf("-")===-1&&uf.test(s)?s=s.replace(df,"-$&").toLowerCase():o===null&&(o=void 0):a=s="oninput",a==="oninput"&&i[s=a]&&(s="oninputCapture"),i[s]=o}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=_e(n.children).forEach(function(l){l.props.selected=i.value.indexOf(l.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=_e(n.children).forEach(function(l){l.props.selected=i.multiple?i.defaultValue.indexOf(l.props.value)!=-1:i.defaultValue==l.props.value})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",vf)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),t.props=i}(e),e.$$typeof=Ua,Bs&&Bs(e)};var js=v.__r;v.__r=function(e){js&&js(e),vi=e.__c};var Vs=v.diffed;v.diffed=function(e){Vs&&Vs(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),vi=null};var Ba={ReactCurrentDispatcher:{current:{readContext:function(e){return vi.__n[e.__c].props.value}}}},yf="17.0.2";function ja(e){return R.bind(null,e)}function Gn(e){return!!e&&e.$$typeof===Ua}function Va(e){return Gn(e)?Cc.apply(null,arguments):e}function Ha(e){return!!e.__k&&(st(null,e),!0)}function Wa(e){return e&&(e.base||e.nodeType===1&&e)||null}var za=function(e,t){return e(t)},Ga=function(e,t){return e(t)},Ka=Z;function yi(e){e()}function qa(e){return e}function Ja(){return[!1,yi]}var Xa=Ge;function Ya(e,t){var n=t(),r=oe({h:{__:n,v:t}}),i=r[0].h,s=r[1];return Ge(function(){i.__=n,i.v=t,yr(i.__,t())||s({h:i})},[e,n,t]),ft(function(){return yr(i.__,i.v())||s({h:i}),e(function(){yr(i.__,i.v())||s({h:i})})},[e]),n}var Ef={useState:oe,useId:Ra,useReducer:zn,useEffect:ft,useLayoutEffect:Ge,useInsertionEffect:Xa,useTransition:Ja,useDeferredValue:qa,useSyncExternalStore:Ya,startTransition:yi,useRef:Xt,useImperativeHandle:Aa,useMemo:Oe,useCallback:ae,useContext:O,useDebugValue:pi,version:"17.0.2",Children:mi,render:$a,hydrate:Fa,unmountComponentAtNode:Ha,createPortal:Ma,createElement:R,createContext:Ee,createFactory:ja,cloneElement:Va,createRef:bo,Fragment:Z,isValidElement:Gn,findDOMNode:Wa,Component:Y,PureComponent:Nn,memo:Na,forwardRef:_i,flushSync:Ga,unstable_batchedUpdates:za,StrictMode:Ka,Suspense:Ct,SuspenseList:Ye,lazy:La,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ba};const Qa=Object.freeze(Object.defineProperty({__proto__:null,Children:mi,Component:Y,Fragment:Z,PureComponent:Nn,StrictMode:Ka,Suspense:Ct,SuspenseList:Ye,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ba,cloneElement:Va,createContext:Ee,createElement:R,createFactory:ja,createPortal:Ma,createRef:bo,default:Ef,findDOMNode:Wa,flushSync:Ga,forwardRef:_i,hydrate:Fa,isValidElement:Gn,lazy:La,memo:Na,render:$a,startTransition:yi,unmountComponentAtNode:Ha,unstable_batchedUpdates:za,useCallback:ae,useContext:O,useDebugValue:pi,useDeferredValue:qa,useEffect:ft,useErrorBoundary:nf,useId:Ra,useImperativeHandle:Aa,useInsertionEffect:Xa,useLayoutEffect:Ge,useMemo:Oe,useReducer:zn,useRef:Xt,useState:oe,useSyncExternalStore:Ya,useTransition:Ja,version:yf},Symbol.toStringTag,{value:"Module"}));/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Za(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(h){try{c(r.next(h))}catch(u){o(u)}}function l(h){try{c(r.throw(h))}catch(u){o(u)}}function c(h){h.done?s(h.value):i(h.value).then(a,l)}c((r=r.apply(e,t||[])).next())})}function el(e,t){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(h){return l([c,h])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(h){c=[6,h],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qe=function(){return Qe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Qe.apply(this,arguments)},tl=function(e){return{loading:e==null,value:e}},If=function(){return function(e,t){switch(t.type){case"error":return Qe(Qe({},e),{error:t.error,loading:!1,value:void 0});case"reset":return tl(t.defaultValue);case"value":return Qe(Qe({},e),{error:void 0,loading:!1,value:t.value});default:return e}}},wf=function(e){var t=e?e():void 0,n=zn(If(),tl(t)),r=n[0],i=n[1],s=ae(function(){var l=e?e():void 0;i({type:"reset",defaultValue:l})},[e]),o=ae(function(l){i({type:"error",error:l})},[]),a=ae(function(l){i({type:"value",value:l})},[]);return Oe(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},Kn=function(e,t){var n=wf(function(){return e.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return ft(function(){var l=Hh(e,function(c){return Za(void 0,void 0,void 0,function(){var h;return el(this,function(u){switch(u.label){case 0:if(!(t!=null&&t.onUserChanged))return[3,4];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,t.onUserChanged(c)];case 2:return u.sent(),[3,4];case 3:return h=u.sent(),s(h),[3,4];case 4:return o(c),[2]}})})},s);return function(){l()}},[e]),[a,i,r]},Tf=function(e){var t=oe(),n=t[0],r=t[1],i=oe(!1),s=i[0],o=i[1],a=ae(function(){return Za(void 0,void 0,void 0,function(){var l;return el(this,function(c){switch(c.label){case 0:o(!0),r(void 0),c.label=1;case 1:return c.trys.push([1,3,4,5]),[4,e.signOut()];case 2:return c.sent(),[2,!0];case 3:return l=c.sent(),r(l),[2,!1];case 4:return o(!1),[7];case 5:return[2]}})})},[e]);return[a,s,n]};/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nt(){return Nt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nt.apply(this,arguments)}var Ae;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ae||(Ae={}));const Hs="popstate";function bf(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return Fr("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:On(i)}return Cf(t,n,null,e)}function D(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ei(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Sf(){return Math.random().toString(36).substr(2,8)}function Ws(e,t){return{usr:e.state,key:e.key,idx:t}}function Fr(e,t,n,r){return n===void 0&&(n=null),Nt({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pt(t):t,{state:n,key:t&&t.key||r||Sf()})}function On(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function pt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Cf(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ae.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Nt({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function u(){a=Ae.Pop;let T=h(),I=T==null?null:T-c;c=T,l&&l({action:a,location:m.location,delta:I})}function g(T,I){a=Ae.Push;let w=Fr(m.location,T,I);n&&n(w,T),c=h()+1;let k=Ws(w,c),N=m.createHref(w);try{o.pushState(k,"",N)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(N)}s&&l&&l({action:a,location:m.location,delta:1})}function _(T,I){a=Ae.Replace;let w=Fr(m.location,T,I);n&&n(w,T),c=h();let k=Ws(w,c),N=m.createHref(w);o.replaceState(k,"",N),s&&l&&l({action:a,location:m.location,delta:0})}function f(T){let I=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof T=="string"?T:On(T);return D(I,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,I)}let m={get action(){return a},get location(){return e(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Hs,u),l=T,()=>{i.removeEventListener(Hs,u),l=null}},createHref(T){return t(i,T)},createURL:f,encodeLocation(T){let I=f(T);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:g,replace:_,go(T){return o.go(T)}};return m}var zs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(zs||(zs={}));function Af(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?pt(t):t,i=Ii(r.pathname||"/",n);if(i==null)return null;let s=nl(e);Rf(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Uf(s[a],Bf(i));return o}function nl(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(D(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Ne([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(D(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),nl(s.children,t,h,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:Lf(c,s.index),routesMeta:h})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of rl(s.path))i(s,o,l)}),t}function rl(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=rl(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function Rf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Mf(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const kf=/^:\w+$/,Pf=3,Nf=2,Of=1,Df=10,xf=-2,Gs=e=>e==="*";function Lf(e,t){let n=e.split("/"),r=n.length;return n.some(Gs)&&(r+=xf),t&&(r+=Nf),n.filter(i=>!Gs(i)).reduce((i,s)=>i+(kf.test(s)?Pf:s===""?Of:Df),r)}function Mf(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Uf(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",h=$f({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!h)return null;Object.assign(r,h.params);let u=a.route;s.push({params:r,pathname:Ne([i,h.pathname]),pathnameBase:Wf(Ne([i,h.pathnameBase])),route:u}),h.pathnameBase!=="/"&&(i=Ne([i,h.pathnameBase]))}return s}function $f(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ff(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,u)=>{if(h==="*"){let g=a[u]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}return c[h]=jf(a[u]||"",h),c},{}),pathname:s,pathnameBase:o,pattern:e}}function Ff(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ei(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Bf(e){try{return decodeURI(e)}catch(t){return Ei(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function jf(e,t){try{return decodeURIComponent(e)}catch(n){return Ei(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Ii(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Vf(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?pt(e):e;return{pathname:n?n.startsWith("/")?n:Hf(n,t):t,search:zf(r),hash:Gf(i)}}function Hf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Er(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wi(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ti(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=pt(e):(i=Nt({},e),D(!i.pathname||!i.pathname.includes("?"),Er("?","pathname","search",i)),D(!i.pathname||!i.pathname.includes("#"),Er("#","pathname","hash",i)),D(!i.search||!i.search.includes("#"),Er("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let u=t.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),u-=1;i.pathname=g.join("/")}a=u>=0?t[u]:"/"}let l=Vf(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Ne=e=>e.join("/").replace(/\/\/+/g,"/"),Wf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),zf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gf=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Kf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const il=["post","put","patch","delete"];new Set(il);const qf=["get",...il];new Set(qf);/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dn(){return Dn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dn.apply(this,arguments)}const bi=Ee(null),Jf=Ee(null),gt=Ee(null),qn=Ee(null),we=Ee({outlet:null,matches:[],isDataRoute:!1}),sl=Ee(null);function Xf(e,t){let{relative:n}=t===void 0?{}:t;_t()||D(!1);let{basename:r,navigator:i}=O(gt),{hash:s,pathname:o,search:a}=ll(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ne([r,o])),i.createHref({pathname:l,search:a,hash:s})}function _t(){return O(qn)!=null}function Yt(){return _t()||D(!1),O(qn).location}function ol(e){O(gt).static||Ge(e)}function al(){let{isDataRoute:e}=O(we);return e?hp():Yf()}function Yf(){_t()||D(!1);let e=O(bi),{basename:t,navigator:n}=O(gt),{matches:r}=O(we),{pathname:i}=Yt(),s=JSON.stringify(wi(r).map(l=>l.pathnameBase)),o=Xt(!1);return ol(()=>{o.current=!0}),ae(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let h=Ti(l,JSON.parse(s),i,c.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Ne([t,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[t,n,s,i,e])}const Qf=Ee(null);function Zf(e){let t=O(we).outlet;return t&&R(Qf.Provider,{value:e},t)}function ll(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=O(we),{pathname:i}=Yt(),s=JSON.stringify(wi(r).map(o=>o.pathnameBase));return Oe(()=>Ti(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function ep(e,t){return tp(e,t)}function tp(e,t,n){_t()||D(!1);let{navigator:r}=O(gt),{matches:i}=O(we),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Yt(),c;if(t){var h;let m=typeof t=="string"?pt(t):t;a==="/"||(h=m.pathname)!=null&&h.startsWith(a)||D(!1),c=m}else c=l;let u=c.pathname||"/",g=a==="/"?u:u.slice(a.length)||"/",_=Af(e,{pathname:g}),f=op(_&&_.map(m=>Object.assign({},m,{params:Object.assign({},o,m.params),pathname:Ne([a,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?a:Ne([a,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,n);return t&&f?R(qn.Provider,{value:{location:Dn({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ae.Pop}},f):f}function np(){let e=up(),t=Kf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return R(Z,null,R("h2",null,"Unexpected Application Error!"),R("h3",{style:{fontStyle:"italic"}},t),n?R("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},n):null,null)}const rp=R(np,null);class ip extends Y{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?R(we.Provider,{value:this.props.routeContext},R(sl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sp(e){let{routeContext:t,match:n,children:r}=e,i=O(bi);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R(we.Provider,{value:t},r)}function op(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let s=e,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||D(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,c)=>{let h=l.route.id?o==null?void 0:o[l.route.id]:null,u=null;n&&(u=l.route.errorElement||rp);let g=t.concat(s.slice(0,c+1)),_=()=>{let f;return h?f=u:l.route.Component?f=R(l.route.Component,null):l.route.element?f=l.route.element:f=a,R(sp,{match:l,routeContext:{outlet:a,matches:g,isDataRoute:n!=null},children:f})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?R(ip,{location:n.location,revalidation:n.revalidation,component:u,error:h,children:_(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):_()},null)}var Br;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(Br||(Br={}));var Ot;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(Ot||(Ot={}));function ap(e){let t=O(bi);return t||D(!1),t}function lp(e){let t=O(Jf);return t||D(!1),t}function cp(e){let t=O(we);return t||D(!1),t}function cl(e){let t=cp(),n=t.matches[t.matches.length-1];return n.route.id||D(!1),n.route.id}function up(){var e;let t=O(sl),n=lp(Ot.UseRouteError),r=cl(Ot.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function hp(){let{router:e}=ap(Br.UseNavigateStable),t=cl(Ot.UseNavigateStable),n=Xt(!1);return ol(()=>{n.current=!0}),ae(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Dn({fromRouteId:t},s)))},[e,t])}function Jn(e){let{to:t,replace:n,state:r,relative:i}=e;_t()||D(!1);let{matches:s}=O(we),{pathname:o}=Yt(),a=al(),l=Ti(t,wi(s).map(h=>h.pathnameBase),o,i==="path"),c=JSON.stringify(l);return ft(()=>a(JSON.parse(c),{replace:n,state:r,relative:i}),[a,c,i,n,r]),null}function dp(e){return Zf(e.context)}function Je(e){D(!1)}function fp(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ae.Pop,navigator:s,static:o=!1}=e;_t()&&D(!1);let a=t.replace(/^\/*/,"/"),l=Oe(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=pt(r));let{pathname:c="/",search:h="",hash:u="",state:g=null,key:_="default"}=r,f=Oe(()=>{let m=Ii(c,a);return m==null?null:{location:{pathname:m,search:h,hash:u,state:g,key:_},navigationType:i}},[a,c,h,u,g,_,i]);return f==null?null:R(gt.Provider,{value:l},R(qn.Provider,{children:n,value:f}))}function pp(e){let{children:t,location:n}=e;return ep(jr(t),n)}var Ks;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Ks||(Ks={}));new Promise(()=>{});function jr(e,t){t===void 0&&(t=[]);let n=[];return mi.forEach(e,(r,i)=>{if(!Gn(r))return;let s=[...t,i];if(r.type===Z){n.push.apply(n,jr(r.props.children,s));return}r.type!==Je&&D(!1),!r.props.index||!r.props.children||D(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=jr(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vr(){return Vr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vr.apply(this,arguments)}function gp(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function _p(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mp(e,t){return e.button===0&&(!t||t==="_self")&&!_p(e)}const vp=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],yp="startTransition",qs=Qa[yp];function Ep(e){let{basename:t,children:n,future:r,window:i}=e,s=Xt();s.current==null&&(s.current=bf({window:i,v5Compat:!0}));let o=s.current,[a,l]=oe({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=ae(u=>{c&&qs?qs(()=>l(u)):l(u)},[l,c]);return Ge(()=>o.listen(h),[o,h]),R(fp,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const Ip=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yn=_i(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h}=t,u=gp(t,vp),{basename:g}=O(gt),_,f=!1;if(typeof c=="string"&&wp.test(c)&&(_=c,Ip))try{let w=new URL(window.location.href),k=c.startsWith("//")?new URL(w.protocol+c):new URL(c),N=Ii(k.pathname,g);k.origin===w.origin&&N!=null?c=N+k.search+k.hash:f=!0}catch{}let m=Xf(c,{relative:i}),T=Tp(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i});function I(w){r&&r(w),w.defaultPrevented||T(w)}return R("a",Vr({},u,{href:_||m,onClick:f||s?r:I,ref:n,target:l}))});var Js;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Js||(Js={}));var Xs;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Xs||(Xs={}));function Tp(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,a=al(),l=Yt(),c=ll(e,{relative:o});return ae(h=>{if(mp(h,n)){h.preventDefault();let u=r!==void 0?r:On(l)===On(c);a(e,{replace:u,state:i,preventScrollReset:s,relative:o})}},[l,a,c,r,i,n,e,s,o])}var bp="firebase",Sp="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe(bp,Sp,"app");var Cp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,Si=Si||{},y=Cp||self;function Xn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Qt(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Ap(e){return Object.prototype.hasOwnProperty.call(e,Ir)&&e[Ir]||(e[Ir]=++Rp)}var Ir="closure_uid_"+(1e9*Math.random()>>>0),Rp=0;function kp(e,t,n){return e.call.apply(e.bind,arguments)}function Pp(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function z(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?z=kp:z=Pp,z.apply(null,arguments)}function cn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function $(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function De(){this.s=this.s,this.o=this.o}var Np=0;De.prototype.s=!1;De.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Np!=0)&&Ap(this)};De.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ul=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ci(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ys(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Xn(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function G(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}G.prototype.h=function(){this.defaultPrevented=!0};var Op=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{y.addEventListener("test",()=>{},t),y.removeEventListener("test",()=>{},t)}catch{}return e}();function Dt(e){return/^[\s\xa0]*$/.test(e)}function Yn(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function te(e){return Yn().indexOf(e)!=-1}function Ai(e){return Ai[" "](e),e}Ai[" "]=function(){};function Dp(e,t){var n=Cg;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var xp=te("Opera"),xt=te("Trident")||te("MSIE"),hl=te("Edge"),Hr=hl||xt,dl=te("Gecko")&&!(Yn().toLowerCase().indexOf("webkit")!=-1&&!te("Edge"))&&!(te("Trident")||te("MSIE"))&&!te("Edge"),Lp=Yn().toLowerCase().indexOf("webkit")!=-1&&!te("Edge");function fl(){var e=y.document;return e?e.documentMode:void 0}e:{var Qs="",wr=function(){var e=Yn();if(dl)return/rv:([^\);]+)(\)|;)/.exec(e);if(hl)return/Edge\/([\d\.]+)/.exec(e);if(xt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Lp)return/WebKit\/(\S+)/.exec(e);if(xp)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(wr&&(Qs=wr?wr[1]:""),xt){var Zs=fl();if(Zs!=null&&Zs>parseFloat(Qs))break e}}y.document&&xt&&fl();function Lt(e,t){if(G.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(dl){e:{try{Ai(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Mp[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Lt.$.h.call(this)}}$(Lt,G);var Mp={2:"touch",3:"pen",4:"mouse"};Lt.prototype.h=function(){Lt.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Zt="closure_listenable_"+(1e6*Math.random()|0),Up=0;function $p(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Up,this.fa=this.ia=!1}function Qn(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ri(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Fp(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function pl(e){const t={};for(const n in e)t[n]=e[n];return t}const eo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gl(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<eo.length;s++)n=eo[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Zn(e){this.src=e,this.g={},this.h=0}Zn.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=zr(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new $p(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Wr(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=ul(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Qn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function zr(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var ki="closure_lm_"+(1e6*Math.random()|0),Tr={};function _l(e,t,n,r,i){if(r&&r.once)return vl(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)_l(e,t[s],n,r,i);return null}return n=Oi(n),e&&e[Zt]?e.O(t,n,Qt(r)?!!r.capture:!!r,i):ml(e,t,n,!1,r,i)}function ml(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Qt(i)?!!i.capture:!!i,a=Ni(e);if(a||(e[ki]=a=new Zn(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Bp(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Op||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(El(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Bp(){function e(n){return t.call(e.src,e.listener,n)}const t=jp;return e}function vl(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)vl(e,t[s],n,r,i);return null}return n=Oi(n),e&&e[Zt]?e.P(t,n,Qt(r)?!!r.capture:!!r,i):ml(e,t,n,!0,r,i)}function yl(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)yl(e,t[s],n,r,i);else r=Qt(r)?!!r.capture:!!r,n=Oi(n),e&&e[Zt]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=zr(s,n,r,i),-1<n&&(Qn(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ni(e))&&(t=e.g[t.toString()],e=-1,t&&(e=zr(t,n,r,i)),(n=-1<e?t[e]:null)&&Pi(n))}function Pi(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Zt])Wr(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(El(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ni(t))?(Wr(n,e),n.h==0&&(n.src=null,t[ki]=null)):Qn(e)}}}function El(e){return e in Tr?Tr[e]:Tr[e]="on"+e}function jp(e,t){if(e.fa)e=!0;else{t=new Lt(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Pi(e),e=n.call(r,t)}return e}function Ni(e){return e=e[ki],e instanceof Zn?e:null}var br="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oi(e){return typeof e=="function"?e:(e[br]||(e[br]=function(t){return e.handleEvent(t)}),e[br])}function U(){De.call(this),this.i=new Zn(this),this.S=this,this.J=null}$(U,De);U.prototype[Zt]=!0;U.prototype.removeEventListener=function(e,t,n,r){yl(this,e,t,n,r)};function j(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new G(t,e);else if(t instanceof G)t.target=t.target||e;else{var i=t;t=new G(r,e),gl(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=un(o,r,!0,t)&&i}if(o=t.g=e,i=un(o,r,!0,t)&&i,i=un(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=un(o,r,!1,t)&&i}U.prototype.N=function(){if(U.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Qn(n[r]);delete e.g[t],e.h--}}this.J=null};U.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};U.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function un(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Wr(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Di=y.JSON.stringify;class Vp{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Hp(){var e=xi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Wp{constructor(){this.h=this.g=null}add(t,n){const r=Il.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Il=new Vp(()=>new zp,e=>e.reset());class zp{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Gp(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Kp(e){y.setTimeout(()=>{throw e},0)}let Mt,Ut=!1,xi=new Wp,wl=()=>{const e=y.Promise.resolve(void 0);Mt=()=>{e.then(qp)}};var qp=()=>{for(var e;e=Hp();){try{e.h.call(e.g)}catch(n){Kp(n)}var t=Il;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ut=!1};function er(e,t){U.call(this),this.h=e||1,this.g=t||y,this.j=z(this.qb,this),this.l=Date.now()}$(er,U);p=er.prototype;p.ga=!1;p.T=null;p.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),j(this,"tick"),this.ga&&(Li(this),this.start()))}};p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Li(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}p.N=function(){er.$.N.call(this),Li(this),delete this.g};function Mi(e,t,n){if(typeof e=="function")n&&(e=z(e,n));else if(e&&typeof e.handleEvent=="function")e=z(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:y.setTimeout(e,t||0)}function Tl(e){e.g=Mi(()=>{e.g=null,e.i&&(e.i=!1,Tl(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Jp extends De{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Tl(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $t(e){De.call(this),this.h=e,this.g={}}$($t,De);var to=[];function bl(e,t,n,r){Array.isArray(n)||(n&&(to[0]=n.toString()),n=to);for(var i=0;i<n.length;i++){var s=_l(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Sl(e){Ri(e.g,function(t,n){this.g.hasOwnProperty(n)&&Pi(t)},e),e.g={}}$t.prototype.N=function(){$t.$.N.call(this),Sl(this)};$t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function tr(){this.g=!0}tr.prototype.Ea=function(){this.g=!1};function Xp(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&u[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Yp(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Ze(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Zp(e,n)+(r?" "+r:"")})}function Qp(e,t){e.info(function(){return"TIMEOUT: "+t})}tr.prototype.info=function(){};function Zp(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Di(n)}catch{return t}}var mt={},no=null;function Ui(){return no=no||new U}mt.Ta="serverreachability";function Cl(e){G.call(this,mt.Ta,e)}$(Cl,G);function Ft(e){const t=Ui();j(t,new Cl(t))}mt.STAT_EVENT="statevent";function Al(e,t){G.call(this,mt.STAT_EVENT,e),this.stat=t}$(Al,G);function q(e){const t=Ui();j(t,new Al(t,e))}mt.Ua="timingevent";function Rl(e,t){G.call(this,mt.Ua,e),this.size=t}$(Rl,G);function en(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}var $i={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},eg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Fi(){}Fi.prototype.h=null;function ro(e){return e.h||(e.h=e.i())}function tg(){}var tn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Bi(){G.call(this,"d")}$(Bi,G);function ji(){G.call(this,"c")}$(ji,G);var Gr;function nr(){}$(nr,Fi);nr.prototype.g=function(){return new XMLHttpRequest};nr.prototype.i=function(){return{}};Gr=new nr;function nn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new $t(this),this.P=ng,e=Hr?125:void 0,this.V=new er(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new kl}function kl(){this.i=null,this.g="",this.h=!1}var ng=45e3,Kr={},xn={};p=nn.prototype;p.setTimeout=function(e){this.P=e};function qr(e,t,n){e.L=1,e.v=ir(ye(t)),e.s=n,e.S=!0,Pl(e,null)}function Pl(e,t){e.G=Date.now(),rn(e),e.A=ye(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),$l(n.i,"t",r),e.C=0,n=e.l.J,e.h=new kl,e.g=sc(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Jp(z(e.Pa,e,e.g),e.O)),bl(e.U,e.g,"readystatechange",e.nb),t=e.I?pl(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Ft(),Xp(e.j,e.u,e.A,e.m,e.W,e.s)}p.nb=function(e){e=e.target;const t=this.M;t&&ne(e)==3?t.l():this.Pa(e)};p.Pa=function(e){try{if(e==this.g)e:{const h=ne(this.g);var t=this.g.Ia();const u=this.g.da();if(!(3>h)&&(h!=3||Hr||this.g&&(this.h.h||this.g.ja()||ao(this.g)))){this.J||h!=4||t==7||(t==8||0>=u?Ft(3):Ft(2)),rr(this);var n=this.g.da();this.ca=n;t:if(Nl(this)){var r=ao(this.g);e="";var i=r.length,s=ne(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ue(this),At(this);var o="";break t}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Yp(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Dt(a)){var c=a;break t}}c=null}if(n=c)Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jr(this,n);else{this.i=!1,this.o=3,q(12),Ue(this),At(this);break e}}this.S?(Ol(this,h,o),Hr&&this.i&&h==3&&(bl(this.U,this.V,"tick",this.mb),this.V.start())):(Ze(this.j,this.m,o,null),Jr(this,o)),h==4&&Ue(this),this.i&&!this.J&&(h==4?tc(this.l,this):(this.i=!1,rn(this)))}else Tg(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,q(12)):(this.o=0,q(13)),Ue(this),At(this)}}}catch{}finally{}};function Nl(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Ol(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=rg(e,n),i==xn){t==4&&(e.o=4,q(14),r=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Kr){e.o=4,q(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Ze(e.j,e.m,i,null),Jr(e,i);Nl(e)&&i!=xn&&i!=Kr&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,q(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ki(t),t.M=!0,q(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Ue(e),At(e))}p.mb=function(){if(this.g){var e=ne(this.g),t=this.g.ja();this.C<t.length&&(rr(this),Ol(this,e,t),this.i&&e!=4&&rn(this))}};function rg(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?xn:(n=Number(t.substring(n,r)),isNaN(n)?Kr:(r+=1,r+n>t.length?xn:(t=t.slice(r,r+n),e.C=r+n,t)))}p.cancel=function(){this.J=!0,Ue(this)};function rn(e){e.Y=Date.now()+e.P,Dl(e,e.P)}function Dl(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=en(z(e.lb,e),t)}function rr(e){e.B&&(y.clearTimeout(e.B),e.B=null)}p.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Qp(this.j,this.A),this.L!=2&&(Ft(),q(17)),Ue(this),this.o=2,At(this)):Dl(this,this.Y-e)};function At(e){e.l.H==0||e.J||tc(e.l,e)}function Ue(e){rr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Li(e.V),Sl(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Jr(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Xr(n.i,e))){if(!e.K&&Xr(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Un(n),lr(n);else break e;Gi(n),q(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=en(z(n.ib,n),6e3));if(1>=jl(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else $e(n,11)}else if((e.K||n.g==e)&&Un(n),!Dt(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const h=c[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const u=c[4];u!=null&&(n.Ga=u,n.l.info("SVER="+n.Ga));const g=c[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const _=e.g;if(_){const f=_.g?_.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(f){var s=r.i;s.g||f.indexOf("spdy")==-1&&f.indexOf("quic")==-1&&f.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Vi(s,s.h),s.h=null))}if(r.F){const m=_.g?_.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(r.Da=m,P(r.I,r.F,m))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=ic(r,r.J?r.pa:null,r.Y),o.K){Vl(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(rr(a),rn(a)),r.g=o}else Zl(r);0<n.j.length&&cr(n)}else c[0]!="stop"&&c[0]!="close"||$e(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?$e(n,7):zi(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ft(4)}catch{}}function ig(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Xn(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function sg(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Xn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function xl(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Xn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=sg(e),r=ig(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Ll=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function og(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Be(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Be){this.h=e.h,Ln(this,e.j),this.s=e.s,this.g=e.g,Mn(this,e.m),this.l=e.l;var t=e.i,n=new Bt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),io(this,n),this.o=e.o}else e&&(t=String(e).match(Ll))?(this.h=!1,Ln(this,t[1]||"",!0),this.s=wt(t[2]||""),this.g=wt(t[3]||"",!0),Mn(this,t[4]),this.l=wt(t[5]||"",!0),io(this,t[6]||"",!0),this.o=wt(t[7]||"")):(this.h=!1,this.i=new Bt(null,this.h))}Be.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Tt(t,so,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Tt(t,so,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Tt(n,n.charAt(0)=="/"?cg:lg,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Tt(n,hg)),e.join("")};function ye(e){return new Be(e)}function Ln(e,t,n){e.j=n?wt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Mn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function io(e,t,n){t instanceof Bt?(e.i=t,dg(e.i,e.h)):(n||(t=Tt(t,ug)),e.i=new Bt(t,e.h))}function P(e,t,n){e.i.set(t,n)}function ir(e){return P(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function wt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Tt(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,ag),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ag(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var so=/[#\/\?@]/g,lg=/[#\?:]/g,cg=/[#\?]/g,ug=/[#\?@]/g,hg=/#/g;function Bt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function xe(e){e.g||(e.g=new Map,e.h=0,e.i&&og(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}p=Bt.prototype;p.add=function(e,t){xe(this),this.i=null,e=vt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ml(e,t){xe(e),t=vt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ul(e,t){return xe(e),t=vt(e,t),e.g.has(t)}p.forEach=function(e,t){xe(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};p.ta=function(){xe(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};p.Z=function(e){xe(this);let t=[];if(typeof e=="string")Ul(this,e)&&(t=t.concat(this.g.get(vt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};p.set=function(e,t){return xe(this),this.i=null,e=vt(this,e),Ul(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};p.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function $l(e,t,n){Ml(e,t),0<n.length&&(e.i=null,e.g.set(vt(e,t),Ci(n)),e.h+=n.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function vt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function dg(e,t){t&&!e.j&&(xe(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Ml(this,r),$l(this,i,n))},e)),e.j=t}var fg=class{constructor(e,t){this.g=e,this.map=t}};function Fl(e){this.l=e||pg,y.PerformanceNavigationTiming?(e=y.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(y.g&&y.g.Ka&&y.g.Ka()&&y.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pg=10;function Bl(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function jl(e){return e.h?1:e.g?e.g.size:0}function Xr(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Vi(e,t){e.g?e.g.add(t):e.h=t}function Vl(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Fl.prototype.cancel=function(){if(this.i=Hl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Hl(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ci(e.i)}var gg=class{stringify(e){return y.JSON.stringify(e,void 0)}parse(e){return y.JSON.parse(e,void 0)}};function _g(){this.g=new gg}function mg(e,t,n){const r=n||"";try{xl(e,function(i,s){let o=i;Qt(i)&&(o=Di(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function vg(e,t){const n=new tr;if(y.Image){const r=new Image;r.onload=cn(hn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=cn(hn,n,r,"TestLoadImage: error",!1,t),r.onabort=cn(hn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=cn(hn,n,r,"TestLoadImage: timeout",!1,t),y.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function hn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function sr(e){this.l=e.fc||null,this.j=e.ob||!1}$(sr,Fi);sr.prototype.g=function(){return new or(this.l,this.j)};sr.prototype.i=function(e){return function(){return e}}({});function or(e,t){U.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Hi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$(or,U);var Hi=0;p=or.prototype;p.open=function(e,t){if(this.readyState!=Hi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,jt(this)};p.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||y).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sn(this)),this.readyState=Hi};p.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,jt(this)),this.g&&(this.readyState=3,jt(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof y.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wl(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Wl(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}p.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?sn(this):jt(this),this.readyState==3&&Wl(this)}};p.Za=function(e){this.g&&(this.response=this.responseText=e,sn(this))};p.Ya=function(e){this.g&&(this.response=e,sn(this))};p.ka=function(){this.g&&sn(this)};function sn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,jt(e)}p.setRequestHeader=function(e,t){this.v.append(e,t)};p.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function jt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(or.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var yg=y.JSON.parse;function x(e){U.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=zl,this.L=this.M=!1}$(x,U);var zl="",Eg=/^https?$/i,Ig=["POST","PUT"];p=x.prototype;p.Oa=function(e){this.M=e};p.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Gr.g(),this.C=this.u?ro(this.u):ro(Gr),this.g.onreadystatechange=z(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){oo(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=y.FormData&&e instanceof y.FormData,!(0<=ul(Ig,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ql(this),0<this.B&&((this.L=wg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=z(this.ua,this)):this.A=Mi(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){oo(this,s)}};function wg(e){return xt&&typeof e.timeout=="number"&&e.ontimeout!==void 0}p.ua=function(){typeof Si<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,j(this,"timeout"),this.abort(8))};function oo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Gl(e),ar(e)}function Gl(e){e.F||(e.F=!0,j(e,"complete"),j(e,"error"))}p.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,j(this,"complete"),j(this,"abort"),ar(this))};p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ar(this,!0)),x.$.N.call(this)};p.La=function(){this.s||(this.G||this.v||this.l?Kl(this):this.kb())};p.kb=function(){Kl(this)};function Kl(e){if(e.h&&typeof Si<"u"&&(!e.C[1]||ne(e)!=4||e.da()!=2)){if(e.v&&ne(e)==4)Mi(e.La,0,e);else if(j(e,"readystatechange"),ne(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Ll)[1]||null;!i&&y.self&&y.self.location&&(i=y.self.location.protocol.slice(0,-1)),r=!Eg.test(i?i.toLowerCase():"")}n=r}if(n)j(e,"complete"),j(e,"success");else{e.m=6;try{var s=2<ne(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Gl(e)}}finally{ar(e)}}}}function ar(e,t){if(e.g){ql(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||j(e,"ready");try{n.onreadystatechange=r}catch{}}}function ql(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(y.clearTimeout(e.A),e.A=null)}p.isActive=function(){return!!this.g};function ne(e){return e.g?e.g.readyState:0}p.da=function(){try{return 2<ne(this)?this.g.status:-1}catch{return-1}};p.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),yg(t)}};function ao(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case zl:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Tg(e){const t={};e=(e.g&&2<=ne(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Dt(e[r]))continue;var n=Gp(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Fp(t,function(r){return r.join(", ")})}p.Ia=function(){return this.m};p.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Jl(e){let t="";return Ri(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Wi(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Jl(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):P(e,t,n))}function Et(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Xl(e){this.Ga=0,this.j=[],this.l=new tr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Et("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Et("baseRetryDelayMs",5e3,e),this.hb=Et("retryDelaySeedMs",1e4,e),this.eb=Et("forwardChannelMaxRetries",2,e),this.xa=Et("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Fl(e&&e.concurrentRequestLimit),this.Ja=new _g,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}p=Xl.prototype;p.ra=8;p.H=1;function zi(e){if(Yl(e),e.H==3){var t=e.W++,n=ye(e.I);if(P(n,"SID",e.K),P(n,"RID",t),P(n,"TYPE","terminate"),on(e,n),t=new nn(e,e.l,t),t.L=2,t.v=ir(ye(n)),n=!1,y.navigator&&y.navigator.sendBeacon)try{n=y.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&y.Image&&(new Image().src=t.v,n=!0),n||(t.g=sc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),rn(t)}rc(e)}function lr(e){e.g&&(Ki(e),e.g.cancel(),e.g=null)}function Yl(e){lr(e),e.u&&(y.clearTimeout(e.u),e.u=null),Un(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&y.clearTimeout(e.m),e.m=null)}function cr(e){if(!Bl(e.i)&&!e.m){e.m=!0;var t=e.Na;Mt||wl(),Ut||(Mt(),Ut=!0),xi.add(t,e),e.C=0}}function bg(e,t){return jl(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=en(z(e.Na,e,t),nc(e,e.C)),e.C++,!0)}p.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new nn(this,this.l,e);let s=this.s;if(this.U&&(s?(s=pl(s),gl(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Ql(this,i,t),n=ye(this.I),P(n,"RID",e),P(n,"CVER",22),this.F&&P(n,"X-HTTP-Session-Id",this.F),on(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Jl(s)))+"&"+t:this.o&&Wi(n,this.o,s)),Vi(this.i,i),this.bb&&P(n,"TYPE","init"),this.P?(P(n,"$req",t),P(n,"SID","null"),i.aa=!0,qr(i,n,null)):qr(i,n,t),this.H=2}}else this.H==3&&(e?lo(this,e):this.j.length==0||Bl(this.i)||lo(this))};function lo(e,t){var n;t?n=t.m:n=e.W++;const r=ye(e.I);P(r,"SID",e.K),P(r,"RID",n),P(r,"AID",e.V),on(e,r),e.o&&e.s&&Wi(r,e.o,e.s),n=new nn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ql(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Vi(e.i,n),qr(n,r,t)}function on(e,t){e.na&&Ri(e.na,function(n,r){P(t,r,n)}),e.h&&xl({},function(n,r){P(t,r,n)})}function Ql(e,t,n){n=Math.min(e.j.length,n);var r=e.h?z(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const h=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{mg(h,o,"req"+c+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Zl(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Mt||wl(),Ut||(Mt(),Ut=!0),xi.add(t,e),e.A=0}}function Gi(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=en(z(e.Ma,e),nc(e,e.A)),e.A++,!0)}p.Ma=function(){if(this.u=null,ec(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=en(z(this.jb,this),e)}};p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,q(10),lr(this),ec(this))};function Ki(e){e.B!=null&&(y.clearTimeout(e.B),e.B=null)}function ec(e){e.g=new nn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=ye(e.wa);P(t,"RID","rpc"),P(t,"SID",e.K),P(t,"AID",e.V),P(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&P(t,"TO",e.qa),P(t,"TYPE","xmlhttp"),on(e,t),e.o&&e.s&&Wi(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=ir(ye(t)),n.s=null,n.S=!0,Pl(n,e)}p.ib=function(){this.v!=null&&(this.v=null,lr(this),Gi(this),q(19))};function Un(e){e.v!=null&&(y.clearTimeout(e.v),e.v=null)}function tc(e,t){var n=null;if(e.g==t){Un(e),Ki(e),e.g=null;var r=2}else if(Xr(e.i,t))n=t.F,Vl(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Ui(),j(r,new Rl(r,n)),cr(e)}else Zl(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&bg(e,t)||r==2&&Gi(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:$e(e,5);break;case 4:$e(e,10);break;case 3:$e(e,6);break;default:$e(e,2)}}}function nc(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function $e(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=z(e.pb,e);n||(n=new Be("//www.google.com/images/cleardot.gif"),y.location&&y.location.protocol=="http"||Ln(n,"https"),ir(n)),vg(n.toString(),r)}else q(2);e.H=0,e.h&&e.h.za(t),rc(e),Yl(e)}p.pb=function(e){e?(this.l.info("Successfully pinged google.com"),q(2)):(this.l.info("Failed to ping google.com"),q(1))};function rc(e){if(e.H=0,e.ma=[],e.h){const t=Hl(e.i);(t.length!=0||e.j.length!=0)&&(Ys(e.ma,t),Ys(e.ma,e.j),e.i.i.length=0,Ci(e.j),e.j.length=0),e.h.ya()}}function ic(e,t,n){var r=n instanceof Be?ye(n):new Be(n);if(r.g!="")t&&(r.g=t+"."+r.g),Mn(r,r.m);else{var i=y.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Be(null);r&&Ln(s,r),t&&(s.g=t),i&&Mn(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&P(r,n,t),P(r,"VER",e.ra),on(e,r),r}function sc(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new x(new sr({ob:!0})):new x(e.va),t.Oa(e.J),t}p.isActive=function(){return!!this.h&&this.h.isActive(this)};function oc(){}p=oc.prototype;p.Ba=function(){};p.Aa=function(){};p.za=function(){};p.ya=function(){};p.isActive=function(){return!0};p.Va=function(){};function Q(e,t){U.call(this),this.g=new Xl(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Dt(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Dt(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new yt(this)}$(Q,U);Q.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;q(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ic(e,null,e.Y),cr(e)};Q.prototype.close=function(){zi(this.g)};Q.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Di(e),e=n);t.j.push(new fg(t.fb++,e)),t.H==3&&cr(t)};Q.prototype.N=function(){this.g.h=null,delete this.j,zi(this.g),delete this.g,Q.$.N.call(this)};function ac(e){Bi.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}$(ac,Bi);function lc(){ji.call(this),this.status=1}$(lc,ji);function yt(e){this.g=e}$(yt,oc);yt.prototype.Ba=function(){j(this.g,"a")};yt.prototype.Aa=function(e){j(this.g,new ac(e))};yt.prototype.za=function(e){j(this.g,new lc)};yt.prototype.ya=function(){j(this.g,"b")};function Sg(){this.blockSize=-1}function ce(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$(ce,Sg);ce.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Sr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}ce.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Sr(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Sr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Sr(this,r),i=0;break}}this.h=i,this.i+=t};ce.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function C(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var Cg={};function qi(e){return-128<=e&&128>e?Dp(e,function(t){return new C([t|0],0>t?-1:0)}):new C([e|0],0>e?-1:0)}function re(e){if(isNaN(e)||!isFinite(e))return rt;if(0>e)return B(re(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Yr;return new C(t,0)}function cc(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return B(cc(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=re(Math.pow(t,8)),r=rt,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=re(Math.pow(t,s)),r=r.R(s).add(re(o))):(r=r.R(n),r=r.add(re(o)))}return r}var Yr=4294967296,rt=qi(0),Qr=qi(1),co=qi(16777216);p=C.prototype;p.ea=function(){if(X(this))return-B(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Yr+r)*t,t*=Yr}return e};p.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(ge(this))return"0";if(X(this))return"-"+B(this).toString(e);for(var t=re(Math.pow(e,6)),n=this,r="";;){var i=Fn(n,t).g;n=$n(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,ge(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};p.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function ge(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function X(e){return e.h==-1}p.X=function(e){return e=$n(this,e),X(e)?-1:ge(e)?0:1};function B(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new C(n,~e.h).add(Qr)}p.abs=function(){return X(this)?B(this):this};p.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new C(n,n[n.length-1]&-2147483648?-1:0)};function $n(e,t){return e.add(B(t))}p.R=function(e){if(ge(this)||ge(e))return rt;if(X(this))return X(e)?B(this).R(B(e)):B(B(this).R(e));if(X(e))return B(this.R(B(e)));if(0>this.X(co)&&0>e.X(co))return re(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,dn(n,2*r+2*i),n[2*r+2*i+1]+=s*l,dn(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,dn(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,dn(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new C(n,0)};function dn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function It(e,t){this.g=e,this.h=t}function Fn(e,t){if(ge(t))throw Error("division by zero");if(ge(e))return new It(rt,rt);if(X(e))return t=Fn(B(e),t),new It(B(t.g),B(t.h));if(X(t))return t=Fn(e,B(t)),new It(B(t.g),t.h);if(30<e.g.length){if(X(e)||X(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Qr,r=t;0>=r.X(e);)n=uo(n),r=uo(r);var i=qe(n,1),s=qe(r,1);for(r=qe(r,2),n=qe(n,2);!ge(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=qe(r,1),n=qe(n,1)}return t=$n(e,i.R(t)),new It(i,t)}for(i=rt;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=re(n),o=s.R(t);X(o)||0<o.X(e);)n-=r,s=re(n),o=s.R(t);ge(s)&&(s=Qr),i=i.add(s),e=$n(e,o)}return new It(i,e)}p.gb=function(e){return Fn(this,e).h};p.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new C(n,this.h&e.h)};p.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new C(n,this.h|e.h)};p.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new C(n,this.h^e.h)};function uo(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new C(n,e.h)}function qe(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new C(i,e.h)}Q.prototype.send=Q.prototype.u;Q.prototype.open=Q.prototype.m;Q.prototype.close=Q.prototype.close;$i.NO_ERROR=0;$i.TIMEOUT=8;$i.HTTP_ERROR=6;eg.COMPLETE="complete";tg.EventType=tn;tn.OPEN="a";tn.CLOSE="b";tn.ERROR="c";tn.MESSAGE="d";U.prototype.listen=U.prototype.O;x.prototype.listenOnce=x.prototype.P;x.prototype.getLastError=x.prototype.Sa;x.prototype.getLastErrorCode=x.prototype.Ia;x.prototype.getStatus=x.prototype.da;x.prototype.getResponseJson=x.prototype.Wa;x.prototype.getResponseText=x.prototype.ja;x.prototype.send=x.prototype.ha;x.prototype.setWithCredentials=x.prototype.Oa;ce.prototype.digest=ce.prototype.l;ce.prototype.reset=ce.prototype.reset;ce.prototype.update=ce.prototype.j;C.prototype.add=C.prototype.add;C.prototype.multiply=C.prototype.R;C.prototype.modulo=C.prototype.gb;C.prototype.compare=C.prototype.X;C.prototype.toNumber=C.prototype.ea;C.prototype.toString=C.prototype.toString;C.prototype.getBits=C.prototype.D;C.fromNumber=re;C.fromString=cc;var Ag=C;const ho="@firebase/firestore";/**
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
 */let V=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};V.UNAUTHENTICATED=new V(null),V.GOOGLE_CREDENTIALS=new V("google-credentials-uid"),V.FIRST_PARTY=new V("first-party-uid"),V.MOCK_USER=new V("mock-user");/**
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
 */let an="10.0.0";/**
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
 */const ct=new ri("@firebase/firestore");function J(e,...t){if(ct.logLevel<=S.DEBUG){const n=t.map(Xi);ct.debug(`Firestore (${an}): ${e}`,...n)}}function Ji(e,...t){if(ct.logLevel<=S.ERROR){const n=t.map(Xi);ct.error(`Firestore (${an}): ${e}`,...n)}}function Rg(e,...t){if(ct.logLevel<=S.WARN){const n=t.map(Xi);ct.warn(`Firestore (${an}): ${e}`,...n)}}function Xi(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function Yi(e="Unexpected state"){const t=`FIRESTORE (${an}) INTERNAL ASSERTION FAILED: `+e;throw Ji(t),new Error(t)}function Zr(e,t){e||Yi()}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Ie{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class it{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class uc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class kg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(V.UNAUTHENTICATED))}shutdown(){}}class Pg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Ng{constructor(t){this.t=t,this.currentUser=V.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new it;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new it,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new it)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Zr(typeof r.accessToken=="string"),new uc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Zr(t===null||typeof t=="string"),new V(t)}}class Og{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=V.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Dg{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Og(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(V.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Lg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Zr(typeof n.token=="string"),this.R=n.token,new xg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Ug{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Mg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function hc(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class $g{constructor(t,n,r,i,s,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Bn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Bn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Bn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var fo,b;(b=fo||(fo={}))[b.OK=0]="OK",b[b.CANCELLED=1]="CANCELLED",b[b.UNKNOWN=2]="UNKNOWN",b[b.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",b[b.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",b[b.NOT_FOUND=5]="NOT_FOUND",b[b.ALREADY_EXISTS=6]="ALREADY_EXISTS",b[b.PERMISSION_DENIED=7]="PERMISSION_DENIED",b[b.UNAUTHENTICATED=16]="UNAUTHENTICATED",b[b.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",b[b.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",b[b.ABORTED=10]="ABORTED",b[b.OUT_OF_RANGE=11]="OUT_OF_RANGE",b[b.UNIMPLEMENTED=12]="UNIMPLEMENTED",b[b.INTERNAL=13]="INTERNAL",b[b.UNAVAILABLE=14]="UNAVAILABLE",b[b.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ag([4294967295,4294967295],0);function Cr(){return typeof document<"u"?document:null}/**
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
 */class Fg{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=n,this.wo=r,this.So=i,this.bo=s,this.Do=0,this.vo=null,this.Co=Date.now(),this.reset()}reset(){this.Do=0}Fo(){this.Do=this.bo}Mo(t){this.cancel();const n=Math.floor(this.Do+this.xo()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&J("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Do} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.vo=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),t())),this.Do*=this.So,this.Do<this.wo&&(this.Do=this.wo),this.Do>this.bo&&(this.Do=this.bo)}Oo(){this.vo!==null&&(this.vo.skipDelay(),this.vo=null)}cancel(){this.vo!==null&&(this.vo.cancel(),this.vo=null)}xo(){return(Math.random()-.5)*this.Do}}/**
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
 */class Qi{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new it,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Qi(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(H.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bg(e,t){if(Ji("AsyncQueue",`${t}: ${e}`),hc(e))return new W(H.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class jg{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=V.UNAUTHENTICATED,this.clientId=Ug.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{J("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(J("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new it;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Bg(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
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
 */function dc(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new Map;function Vg(e,t,n,r){if(t===!0&&r===!0)throw new W(H.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Hg(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Yi()}function Wg(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new W(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hg(e);throw new W(H.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new W(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new W(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Vg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dc((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class fc{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new go({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new W(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new go(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kg;switch(r.type){case"firstParty":return new Dg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=po.get(n);r&&(J("ComponentProvider","Removing Datastore"),po.delete(n),r.terminate())}(this),Promise.resolve()}}function zg(e,t,n,r={}){var i;const s=(e=Wg(e,fc))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Rg("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=V.MOCK_USER;else{a=Mc(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new W(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new V(c)}e._authCredentials=new Pg(new uc(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(){this.Ua=Promise.resolve(),this.Wa=[],this.Ga=!1,this.za=[],this.ja=null,this.Ha=!1,this.Ja=!1,this.Ya=[],this.Qo=new Fg(this,"async_queue_retry"),this.Za=()=>{const n=Cr();n&&J("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Qo.Oo()};const t=Cr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Za)}get isShuttingDown(){return this.Ga}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Xa(),this.eu(t)}enterRestrictedMode(t){if(!this.Ga){this.Ga=!0,this.Ja=t||!1;const n=Cr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Za)}}enqueue(t){if(this.Xa(),this.Ga)return new Promise(()=>{});const n=new it;return this.eu(()=>this.Ga&&this.Ja?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Wa.push(t),this.tu()))}async tu(){if(this.Wa.length!==0){try{await this.Wa[0](),this.Wa.shift(),this.Qo.reset()}catch(t){if(!hc(t))throw t;J("AsyncQueue","Operation failed with retryable error: "+t)}this.Wa.length>0&&this.Qo.Mo(()=>this.tu())}}eu(t){const n=this.Ua.then(()=>(this.Ha=!0,t().catch(r=>{this.ja=r,this.Ha=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ji("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ha=!1,r))));return this.Ua=n,n}enqueueAfterDelay(t,n,r){this.Xa(),this.Ya.indexOf(t)>-1&&(n=0);const i=Qi.createAndSchedule(this,t,n,r,s=>this.nu(s));return this.za.push(i),i}Xa(){this.ja&&Yi()}verifyOperationInProgress(){}async ru(){let t;do t=this.Ua,await t;while(t!==this.Ua)}iu(t){for(const n of this.za)if(n.timerId===t)return!0;return!1}su(t){return this.ru().then(()=>{this.za.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.za)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ru()})}ou(t){this.Ya.push(t)}nu(t){const n=this.za.indexOf(t);this.za.splice(n,1)}}class Kg extends fc{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new Gg}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Jg(this),this._firestoreClient.terminate()}}function qg(e,t){const n=typeof e=="object"?e:jo(),r=typeof e=="string"?e:t||"(default)",i=si(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=xc("firestore");s&&zg(i,...s)}return i}function Jg(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,c,h){return new $g(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,dc(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new jg(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){an=i})(dt),ot(new je("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Kg(new Ng(r.getProvider("auth-internal")),new Lg(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new W(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bn(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Pe(ho,"4.0.0",t),Pe(ho,"4.0.0","esm2017")})();const Xg={apiKey:"AIzaSyD547Bh6PB4piFFl_nndPbro3D-wNKvZnI",authDomain:"rps-izumi.firebaseapp.com",projectId:"rps-izumi",storageBucket:"rps-izumi.appspot.com",messagingSenderId:"549063617939",appId:"1:549063617939:web:9dfb173d33e9cf60fa4c66"},pc=Bo(Xg);qg(pc);const ut=tf(pc);var Yg=0;function d(e,t,n,r,i,s){var o,a,l={};for(a in t)a=="ref"?o=t[a]:l[a]=t[a];var c={type:e,props:l,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Yg,__source:i,__self:s};if(typeof e=="function"&&(o=e.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return v.vnode&&v.vnode(c),c}const Qg=()=>{const[e]=Kn(ut),[t]=Tf(ut);return console.log(e),d("header",{className:"header",children:d("div",{className:"h-[130px] w-full flex items-center",children:[d("div",{className:"header__left p-4 flex items-center justify-center",children:d(yn,{to:"/",className:"header__link",children:"R.P.S BIZ"})}),d("div",{className:"header__right p-4 flex items-center gap-[10px]",children:[d("ul",{className:"w-full flex items-center justify-center gap-[60px]",children:[d("li",{children:d(yn,{to:"/",children:"Home"})}),d("li",{children:d(yn,{to:"/",children:"How to play"})})]}),d("div",{className:"w-full flex items-center justify-end gap-[8px]",children:[d("button",{className:"flex items-center justify-center bg-purple w-[130px] h-[50px] p-2",onClick:t,children:"Sing out"}),d("p",{className:"text-[20px]",children:e==null?void 0:e.displayName})]})]})]})})},Zg="/rps/images/google.svg",e_=()=>{const[e]=Kn(ut);if(e)return d(Jn,{to:"/"});const t=()=>{const n=new he;gd(ut,n)};return d("div",{className:"auth",children:d("div",{className:"auth__inner",children:[d("h1",{className:"text-[68px] font-bebas text-center",children:"Welcome RPS GAME"}),d("p",{className:"text-[20px] font-urbanist text-center",children:"Welcome to Math Lotto. World of wealth and entertainment"}),d("form",{children:[d("button",{type:"button",className:"p-[16px] gap-[13px] flex items-center justify-center w-full bg-white rounded-md border border-black text-black",onClick:t,children:[d("img",{src:Zg,className:"w-[20px] h-[20px]",alt:"google"}),d("span",{children:"Continue With Google"})]}),d("p",{className:"auth__text text-[16px] text-gray",children:d("span",{children:"Or"})}),d("div",{className:"mb-6",children:d("input",{type:"text",id:"name",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"Name"})}),d("div",{className:"mb-6",children:d("input",{type:"email",id:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"Email"})}),d("div",{className:"mb-6",children:d("input",{type:"password",id:"password",className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"Password"})}),d("button",{type:"submit",className:"text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[30px] text-sm w-full px-5 py-2.5 text-center",children:"Register"})]}),d("p",{className:"mt-[40px] text-center",children:["Already have an account?",d("a",{href:"#",className:"ml-2 text-orange",children:"Log in"})]})]})})},t_="/rps/images/01.png",n_=()=>d("div",{className:"intro",children:d("div",{className:"container mx-auto px-4",children:[d("div",{className:"flex gap-[40px]",children:[d("img",{src:t_,alt:"img desc",className:"w-[566px] h-[564px]"}),d("h1",{className:"intro__title text-[80px] leading-[96px] font-semibold",children:["Play a game",d("br",{})," STONE",d("br",{})," SCISSORS",d("br",{})," PAPER",d("br",{})," and WIN"]})]}),d("div",{className:"text-right",children:d(yn,{to:"/game",className:"intro__btn p-[24px] text-[50px] font-bold rounded-[26px]",children:"FREE TO PLAY"})})]})}),r_=()=>{const[e]=Kn(ut);return e?d(dp,{}):d(Jn,{to:"/singUp"})},i_=({seconds:e,setSeconds:t})=>(ft(()=>{const r=setInterval(()=>{e>0&&t(e-1)},1e3);return()=>clearInterval(r)},[e]),d("div",{children:d("p",{className:"text-[128px] text-center",children:(r=>`${(r%60).toString().padStart(2,"0")}`)(e)})})),_o=e=>{let t;const n=new Set,r=(l,c)=>{const h=typeof l=="function"?l(t):l;if(!Object.is(h,t)){const u=t;t=c??typeof h!="object"?h:Object.assign({},t,h),n.forEach(g=>g(t,u))}},i=()=>t,a={setState:r,getState:i,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{n.clear()}};return t=e(r,i,a),a},s_=e=>e?_o(e):_o;function o_(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function a_(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(t,i);return new s}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var gc={exports:{}},_c={};const mc=a_(Qa);var vc={exports:{}},yc={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ht=mc;function l_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var c_=typeof Object.is=="function"?Object.is:l_,u_=ht.useState,h_=ht.useEffect,d_=ht.useLayoutEffect,f_=ht.useDebugValue;function p_(e,t){var n=t(),r=u_({inst:{value:n,getSnapshot:t}}),i=r[0].inst,s=r[1];return d_(function(){i.value=n,i.getSnapshot=t,Ar(i)&&s({inst:i})},[e,n,t]),h_(function(){return Ar(i)&&s({inst:i}),e(function(){Ar(i)&&s({inst:i})})},[e]),f_(n),n}function Ar(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!c_(e,n)}catch{return!0}}function g_(e,t){return t()}var __=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?g_:p_;yc.useSyncExternalStore=ht.useSyncExternalStore!==void 0?ht.useSyncExternalStore:__;vc.exports=yc;var m_=vc.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ur=mc,v_=m_;function y_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var E_=typeof Object.is=="function"?Object.is:y_,I_=v_.useSyncExternalStore,w_=ur.useRef,T_=ur.useEffect,b_=ur.useMemo,S_=ur.useDebugValue;_c.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var s=w_(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=b_(function(){function l(_){if(!c){if(c=!0,h=_,_=r(_),i!==void 0&&o.hasValue){var f=o.value;if(i(f,_))return u=f}return u=_}if(f=u,E_(h,_))return f;var m=r(_);return i!==void 0&&i(f,m)?f:(h=_,u=m)}var c=!1,h,u,g=n===void 0?null:n;return[function(){return l(t())},g===null?void 0:function(){return l(g())}]},[t,n,r,i]);var a=I_(e,s[0],s[1]);return T_(function(){o.hasValue=!0,o.value=a},[a]),S_(a),a};gc.exports=_c;var C_=gc.exports;const A_=o_(C_),{useSyncExternalStoreWithSelector:R_}=A_;function k_(e,t=e.getState,n){const r=R_(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return pi(r),r}const mo=e=>{const t=typeof e=="function"?s_(e):e,n=(r,i)=>k_(t,r,i);return Object.assign(n,t),n},P_=e=>e?mo(e):mo,Ec=P_(e=>({user:{name:"default name",image:"images/avatar.jpg",ready:!1,figure:null,status:""},bot:{name:"Bot Botovich",image:"images/bot.jpg",ready:!0,figure:null,status:""},choseUserFigure:t=>e(n=>({user:{...n.user,figure:t}})),choseBotFigure:t=>e(n=>({bot:{...n.bot,figure:t}})),readyStart:t=>e(n=>({user:{...n.user,ready:t}}))})),N_=()=>{const e=Math.random();return Math.floor(e*3)},O_=({isOpen:e,closeModal:t})=>{const{choseUserFigure:n,choseBotFigure:r}=Ec(s=>s),i=s=>{n(s),r(N_()),t(!1)};return d("div",{className:`${e?"block":"hidden"} fixed top-0 left-0 z-20 py-[64px] px-[20px] flex items-center justify-center w-full h-[100vh] bg-blackOpacity`,children:d("div",{className:"max-w-[806px] h-full overflow-y-auto bg-white rounded-[15px] py-[80px] px-[20px]",children:[d("h2",{className:"text-black text-center text-[40px] font-semibold",children:"Choice of figure"}),d("p",{className:"text-black text-center text-[28px] font-bold",children:"Select your figure and click on it. You will have 10 seconds to make a decision. If you don't make a decision, a random number generator will make the choice for you. You will play the game if you lose points are not returned!"}),d("div",{className:"relative mt-[80px] pt-[80px] pb-[200px] px-[204px] max-w-[630px] m-auto",children:[d("img",{src:"images/02.png",alt:"img desc",className:"w-[212px] h-[216px] m-auto"}),d("button",{className:"absolute top-0 left-0",onClick:()=>i(0),children:[d("img",{src:"images/s-icon-big.jpg",alt:"scissors",className:"w-[190px] h-[190px]"}),d("div",{className:"opacity-0 hover:opacity-100 ease-in duration-300 cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full rounded-full bg-blackOpacity",children:d("p",{className:"text-[28px] font-medium",children:["Choose",d("br",{})," ME"]})})]}),d("button",{className:"absolute top-0 right-0",onClick:()=>i(1),children:[d("img",{src:"images/p-icon-big.jpg",alt:"scissors",className:"w-[190px] h-[190px]"}),d("div",{className:"opacity-0 hover:opacity-100 ease-in duration-300 cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full rounded-full bg-blackOpacity",children:d("p",{className:"text-[28px] font-medium",children:["Choose",d("br",{})," ME"]})})]}),d("button",{className:"absolute bottom-0 left-[50%] translate-x-[-50%]",onClick:()=>i(2),children:[d("img",{src:"images/r-icon-big.jpg",alt:"scissors",className:"w-[190px] h-[190px]"}),d("div",{className:"opacity-0 hover:opacity-100 ease-in duration-300 cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full rounded-full bg-blackOpacity",children:d("p",{className:"text-[28px] font-medium",children:["Choose",d("br",{})," ME"]})})]})]})]})})},vo=({user:e})=>d("div",{className:`relative max-w-[150px] m-auto rounded-full border-4 ${e.ready?"border-green":"border-transparent"}`,children:[d("img",{src:e.image,alt:"img desc",className:"w-[150px] h-[150px] rounded-full"}),e.figure!==null&&d("div",{className:"absolute top-[-20px] right-[-20px] z-10 flex items-center justify-center w-[80px] h-[80px] rounded-full bg-purple",children:d("img",{src:`${e.figure===0?"images/s-icon.jpg":e.figure===1?"images/p-icon.jpg":"images/r-icon.jpg"}`,alt:"img desc",className:"w-[80px] h-[80px] rounded-full"})}),d("div",{className:"opacity-0 hover:opacity-100 ease-in duration-300 cursor-pointer flex items-center justify-center absolute top-0 left-0 w-full h-full rounded-full bg-blackOpacity",children:d("p",{className:"text-[20px] font-semibold text-center",children:e.name})})]}),D_=({isOpen:e,result:t,closeModal:n})=>d("div",{className:`${e?"block":"hidden"} fixed top-0 left-0 z-20 py-[64px] px-[20px] flex items-center justify-center w-full h-[100vh] bg-blackOpacity`,children:d("div",{className:"max-w-[806px] flex flex-col w-full h-full overflow-y-auto bg-white rounded-[15px] py-[80px] px-[20px]",children:[d("h2",{className:"text-black text-center text-[40px] font-semibold",children:[t==="win"&&"victory",t==="lose"&&"Loser's window",t==="draw"&&"draw"]}),d("p",{className:"mt-[50px] text-black text-center text-[28px] font-bold",children:[t==="win"&&"Congratulations on the victory",t==="lose"&&"Сongrats you loser try again and the power will be with you!",t==="draw"&&"try again"]}),t==="win"&&d("img",{src:"images/victory.jpg",alt:"img victory",className:"w-[290px] h-[394px] mt-[15px] m-auto mb-[20px]"}),t==="lose"&&d("img",{src:"images/lose.jpg",alt:"img lose",className:"w-[319px] h-[364px] mt-[15px] m-auto mb-[20px]"}),d("button",{className:"flex items-center justify-center mt-auto w-full p-[25px] text-center bg-purple text-[24px] font-medium",onClick:()=>n({open:!1,result:""}),children:"Close victory window"})]})}),x_=()=>{const{user:e,bot:t,readyStart:n,choseUserFigure:r,choseBotFigure:i}=Ec(_=>_),[s,o]=oe(12),[a,l]=oe(!1),[c,h]=oe({open:!1,result:""}),u=e.figure,g=t.figure;if(e.ready&&s===0&&e.figure===null&&(o(10),l(!0)),e.ready&&e.figure!==null&&s===0){switch(u+""+g){case"01":case"20":case"12":h({open:!0,result:"win"});break;case"10":case"02":case"21":h({open:!0,result:"lose"});break;case"22":case"11":case"00":h({open:!0,result:"draw"});break}n(!1),o(12),r(null),i(null)}return!e.ready&&s===0?d(Jn,{to:"/"}):d("div",{className:"pt-[260px] pb-[202px] bg-neutralBlack",children:[d("div",{className:"container mx-auto px-4",children:[d(i_,{seconds:s,setSeconds:o}),d("p",{className:"text-center mb-10",children:'At the top you see the time until the end of the recruitment of players, have time to hit the "Ready" button to take part in the game. If you pressed the "Ready" button - After the end of the time, a window for selecting a figure (stone, scissors, paper) will open. Successful game to you! There will be one winner!'}),d("div",{className:"flex",children:[d(vo,{user:e}),d("div",{className:"my-10 relative flex items-center justify-center m-auto rounded-full bg-gray w-[700px] h-[700px]",children:[d("img",{src:"images/02.png",alt:"img desc",className:"w-[484px] h-[492px]"}),d("button",{className:"absolute top-[50%] left-0 translate-y-[-50%] flex items-center justify-center w-full bg-purple text-[92px] font-semibold",onClick:()=>n(!0),children:"Ready"})]}),d(vo,{user:t})]})]}),d(O_,{isOpen:a,closeModal:l}),d(D_,{isOpen:c.open,result:c.result,closeModal:h})]})},L_=()=>d("div",{role:"status",className:"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",children:[d("svg",{"aria-hidden":"true",className:"inline w-16 h-16 mr-2 text-gray animate-spin fill-orange",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),d("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),d("span",{className:"sr-only",children:"Loading..."})]});function M_(){const[,e]=Kn(ut);return e?d(L_,{}):d("div",{className:"wrapper",children:[d(Qg,{}),d("div",{className:"app",children:d(pp,{children:[d(Je,{element:d(r_,{}),children:[d(Je,{path:"/",element:d(n_,{})}),d(Je,{path:"/game",element:d(x_,{})})]}),d(Je,{path:"/singUp",element:d(e_,{})}),d(Je,{path:"*",element:d(Jn,{to:"/"})})]})})]})}st(d(Ep,{basename:"/rps",children:d(M_,{})}),document.getElementById("app"));
