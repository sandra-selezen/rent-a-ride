import{s as b,j as u,r as B,a as qe}from"./index-b51a817e.js";const We=b.li`
  width: 274px;
`,ve=b.div`
  position: relative;
  margin-bottom: 14px;
  border-radius: 14px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%);
`,Je=b.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  background-color: transparent;
`,Ve=b.svg`
  stroke: ${({theme:e})=>e.colors.primaryWhite};
  fill: none;

  // stroke: none; styles for actions
  // fill: ${({theme:e})=>e.colors.primaryAccent};
`,Ke=b.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: inherit;
`,Ge=b.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Xe=b.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.primaryBlack};
`,xe=b.span`
  color: ${({theme:e})=>e.colors.primaryAccent};
`,Qe=b.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({theme:e})=>e.colors.primaryBlack};
`,Ye=b.div`
  margin-bottom: 28px;
  height: 40px;
  overflow: hidden;
`,Ze=b.button`
  width: 100%;
  padding: 12px 22px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
  border-radius: 12px;
  color: ${({theme:e})=>e.colors.primaryWhite};
  background-color: ${({theme:e})=>e.colors.primaryAccent};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({theme:e})=>e.colors.secondaryAccent};
  }
`,we="/rent-a-ride/assets/dummy-955b0838.webp",Ee="/rent-a-ride/assets/icons-0650a926.svg",et=b.div`
  margin-bottom: 14px;
  border-radius: 14px;
`,tt=b.img`
  height: 248px;
  width: 461px;
  object-fit: cover;
  border-radius: inherit;
`,nt=b.h2`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: ${({theme:e})=>e.colors.primaryBlack};
`,rt=b.div`
margin-bottom: 14px;
`,ot=b.p`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.42;
  color: ${({theme:e})=>e.colors.primaryBlack};
`,st=b.div`
  margin-bottom: 24px;
`,it=b.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: ${({theme:e})=>e.colors.primaryBlack};
`,at=b.p``,ct=b.div`
  margin-bottom: 24px;
`,lt=b.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  color: ${({theme:e})=>e.colors.primaryBlack};
`,ut=b.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`,_=b.div`
  padding: 7px 14px;
  font-family: Montserrat;
  border-radius: 35px;
  color: ${({theme:e})=>e.colors.tertiaryBlack};
  background-color: ${({theme:e})=>e.colors.tertiaryWhite};

  & span {
    font-weight: 600;
    color: ${({theme:e})=>e.colors.primaryAccent};
  }
`,dt=b.a`
  display: inline-block;
  padding: 12px 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  border-radius: 12px;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.primaryWhite};
  background-color: ${({theme:e})=>e.colors.primaryAccent};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({theme:e})=>e.colors.secondaryAccent};
`,ft=({car:e})=>{const t=e.address.split(", "),n=t[1],r=t[2],o=e.rentalConditions.split(`
`),s=o[0].split(": ")[1],c=(p=>p.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))(e.mileage);return u.jsxs(u.Fragment,{children:[u.jsx(et,{children:u.jsx(tt,{src:e.img?e.img:we,alt:e.make})}),u.jsxs(nt,{children:[e.make," ",u.jsx(xe,{children:e.model}),", ",e.year]}),u.jsxs(rt,{children:[n," | ",r," | Id: ",e.id," | Year: ",e.year," | Type: ",e.type," | Fuel Consumption: ",e.fuelConsumption," | Engine Size: ",e.engineSize," "]}),u.jsx(ot,{children:e.description}),u.jsxs(st,{children:[u.jsx(it,{children:"Accessories and functionalities:"}),u.jsxs(at,{children:[e.accessories.join(" | ")," | ",e.functionalities.join(" | ")]})]}),u.jsxs(ct,{children:[u.jsx(lt,{children:"Rental Conditions:"}),u.jsxs(ut,{children:[u.jsxs(_,{children:["Minimum age: ",u.jsx("span",{children:s})]}),o.slice(1).map((p,l)=>u.jsx(_,{children:p},l)),u.jsxs(_,{children:["Mileage: ",u.jsx("span",{children:c})]}),u.jsxs(_,{children:["Price: ",u.jsx("span",{children:e.rentalPrice})]})]})]}),u.jsx(dt,{children:"Rental car"})]})},pt=b.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({theme:e})=>e.colors.secondaryBlack};
  backdrop-filter: blur(1px);
`,ht=b.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 541px;
  padding: 40px;
  background-color: ${({theme:e})=>e.colors.primaryWhite};
  border-radius: 24px;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`,mt=b.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: transparent;
`,yt=b.svg`
  stroke: ${({theme:e})=>e.colors.primaryBlack};
`,bt=document.getElementById("modal-root"),gt=({isOpen:e,onClose:t,children:n})=>{B.useEffect(()=>{e?document.body.style.overflow="hidden":document.body.style.overflow="auto";const s=i=>{i.code==="Escape"&&t()};return document.addEventListener("keydown",s),()=>{document.body.style.overflow="auto",document.removeEventListener("keydown",s)}},[e,t]);const r=s=>{e&&s.target===s.currentTarget&&t()},o=()=>{t()};return e?qe.createPortal(u.jsx(pt,{onClick:r,children:u.jsxs(ht,{children:[u.jsx(mt,{"aria-label":"Close modal window",onClick:o,children:u.jsx(yt,{height:24,width:24,children:u.jsx("use",{href:Ee+"#icon-close"})})}),n]})}),bt):null},xt=({car:e})=>{const[t,n]=B.useState(!1),r=e.address.split(", "),o=r[1],s=r[2],i=()=>{n(!0)},c=()=>{n(!1)};return u.jsxs(u.Fragment,{children:[u.jsxs(We,{children:[u.jsxs(ve,{children:[u.jsx(Je,{"aria-label":"Add to favorite",children:u.jsx(Ve,{height:18,width:18,children:u.jsx("use",{href:Ee+"#icon-heart"})})}),u.jsx(Ke,{src:e.img?e.img:we,alt:e.make})]}),u.jsxs(Ge,{children:[u.jsxs(Xe,{children:[e.make," ",e.model.length<9&&u.jsx(xe,{children:e.model}),", ",e.year]}),u.jsx(Qe,{children:e.rentalPrice})]}),u.jsx(Ye,{children:u.jsxs("p",{children:[o," | ",s," | ",e.rentalCompany," | ",e.type," | ",e.id," | ",e.accessories[0]]})}),u.jsx(Ze,{onClick:i,children:"Learn more"})]}),u.jsx(gt,{isOpen:t,onClose:c,children:u.jsx(ft,{car:e})})]})},wt=b.ul`
  margin-bottom: 100px;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;

  @media screen and (min-width: 768px) and (max-width: 924px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media screen and (min-width: 925px) and (max-width: 1279px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 29px;
    grid-row-gap: 50px;
  }
`,Et=({cars:e})=>u.jsx(wt,{children:e.map(t=>u.jsx(xt,{car:t},t.id))});function Se(e,t){return function(){return e.apply(t,arguments)}}const{toString:St}=Object.prototype,{getPrototypeOf:ne}=Object,q=(e=>t=>{const n=St.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>q(t)===e),W=e=>t=>typeof t===e,{isArray:N}=Array,F=W("undefined");function At(e){return e!==null&&!F(e)&&e.constructor!==null&&!F(e.constructor)&&E(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ae=R("ArrayBuffer");function Rt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ae(e.buffer),t}const Ot=W("string"),E=W("function"),Re=W("number"),v=e=>e!==null&&typeof e=="object",Ct=e=>e===!0||e===!1,I=e=>{if(q(e)!=="object")return!1;const t=ne(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Tt=R("Date"),jt=R("File"),Pt=R("Blob"),Nt=R("FileList"),kt=e=>v(e)&&E(e.pipe),Bt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||E(e.append)&&((t=q(e))==="formdata"||t==="object"&&E(e.toString)&&e.toString()==="[object FormData]"))},Ft=R("URLSearchParams"),Lt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),N(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let c;for(r=0;r<i;r++)c=s[r],t.call(null,e[c],c,e)}}function Oe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Ce=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Te=e=>!F(e)&&e!==Ce;function Y(){const{caseless:e}=Te(this)&&this||{},t={},n=(r,o)=>{const s=e&&Oe(t,o)||o;I(t[s])&&I(r)?t[s]=Y(t[s],r):I(r)?t[s]=Y({},r):N(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&L(arguments[r],n);return t}const Dt=(e,t,n,{allOwnKeys:r}={})=>(L(t,(o,s)=>{n&&E(o)?e[s]=Se(o,n):e[s]=o},{allOwnKeys:r}),e),Ut=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_t=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},It=(e,t,n,r)=>{let o,s,i;const c={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ne(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Mt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},$t=e=>{if(!e)return null;if(N(e))return e;let t=e.length;if(!Re(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},zt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ne(Uint8Array)),Ht=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},qt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Wt=R("HTMLFormElement"),vt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),le=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Jt=R("RegExp"),je=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};L(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},Vt=e=>{je(e,(t,n)=>{if(E(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(E(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Kt=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return N(e)?r(e):r(String(e).split(t)),n},Gt=()=>{},Xt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),K="abcdefghijklmnopqrstuvwxyz",ue="0123456789",Pe={DIGIT:ue,ALPHA:K,ALPHA_DIGIT:K+K.toUpperCase()+ue},Qt=(e=16,t=Pe.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Yt(e){return!!(e&&E(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Zt=e=>{const t=new Array(10),n=(r,o)=>{if(v(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=N(r)?[]:{};return L(r,(i,c)=>{const p=n(i,o+1);!F(p)&&(s[c]=p)}),t[o]=void 0,s}}return r};return n(e,0)},en=R("AsyncFunction"),tn=e=>e&&(v(e)||E(e))&&E(e.then)&&E(e.catch),a={isArray:N,isArrayBuffer:Ae,isBuffer:At,isFormData:Bt,isArrayBufferView:Rt,isString:Ot,isNumber:Re,isBoolean:Ct,isObject:v,isPlainObject:I,isUndefined:F,isDate:Tt,isFile:jt,isBlob:Pt,isRegExp:Jt,isFunction:E,isStream:kt,isURLSearchParams:Ft,isTypedArray:zt,isFileList:Nt,forEach:L,merge:Y,extend:Dt,trim:Lt,stripBOM:Ut,inherits:_t,toFlatObject:It,kindOf:q,kindOfTest:R,endsWith:Mt,toArray:$t,forEachEntry:Ht,matchAll:qt,isHTMLForm:Wt,hasOwnProperty:le,hasOwnProp:le,reduceDescriptors:je,freezeMethods:Vt,toObjectSet:Kt,toCamelCase:vt,noop:Gt,toFiniteNumber:Xt,findKey:Oe,global:Ce,isContextDefined:Te,ALPHABET:Pe,generateString:Qt,isSpecCompliantForm:Yt,toJSONObject:Zt,isAsyncFn:en,isThenable:tn};function y(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ne=y.prototype,ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ke[e]={value:e}});Object.defineProperties(y,ke);Object.defineProperty(Ne,"isAxiosError",{value:!0});y.from=(e,t,n,r,o,s)=>{const i=Object.create(Ne);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),y.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const nn=null;function Z(e){return a.isPlainObject(e)||a.isArray(e)}function Be(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function de(e,t,n){return e?e.concat(t).map(function(o,s){return o=Be(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function rn(e){return a.isArray(e)&&!e.some(Z)}const on=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function J(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,O){return!a.isUndefined(O[m])});const r=n.metaTokens,o=n.visitor||d,s=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function l(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!p&&a.isBlob(f))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?p&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function d(f,m,O){let S=f;if(f&&!O&&typeof f=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&rn(f)||(a.isFileList(f)||a.endsWith(m,"[]"))&&(S=a.toArray(f)))return m=Be(m),S.forEach(function(U,He){!(a.isUndefined(U)||U===null)&&t.append(i===!0?de([m],He,s):i===null?m:m+"[]",l(U))}),!1}return Z(f)?!0:(t.append(de(O,m,s),l(f)),!1)}const h=[],w=Object.assign(on,{defaultVisitor:d,convertValue:l,isVisitable:Z});function g(f,m){if(!a.isUndefined(f)){if(h.indexOf(f)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(f),a.forEach(f,function(S,j){(!(a.isUndefined(S)||S===null)&&o.call(t,S,a.isString(j)?j.trim():j,m,w))===!0&&g(S,m?m.concat(j):[j])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function fe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function re(e,t){this._pairs=[],e&&J(e,this,t)}const Fe=re.prototype;Fe.append=function(t,n){this._pairs.push([t,n])};Fe.toString=function(t){const n=t?function(r){return t.call(this,r,fe)}:fe;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function sn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Le(e,t,n){if(!t)return e;const r=n&&n.encode||sn,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class an{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const pe=an,De={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},cn=typeof URLSearchParams<"u"?URLSearchParams:re,ln=typeof FormData<"u"?FormData:null,un=typeof Blob<"u"?Blob:null,dn=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),fn=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),A={isBrowser:!0,classes:{URLSearchParams:cn,FormData:ln,Blob:un},isStandardBrowserEnv:dn,isStandardBrowserWebWorkerEnv:fn,protocols:["http","https","file","blob","url","data"]};function pn(e,t){return J(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function hn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function mn(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Ue(e){function t(n,r,o,s){let i=n[s++];const c=Number.isFinite(+i),p=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,p?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!c):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=mn(o[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(hn(r),o,n,0)}),n}return null}function yn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const oe={transitional:De,adapter:A.isNode?"http":"xhr",transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Ue(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return pn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return J(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),yn(t)):t}],transformResponse:[function(t){const n=this.transitional||oe.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?y.from(c,y.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{oe.headers[e]={}});const se=oe,bn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gn=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&bn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},he=Symbol("internals");function k(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:a.isArray(e)?e.map(M):String(e)}function xn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const wn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function G(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function En(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Sn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class V{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(c,p,l){const d=k(p);if(!d)throw new Error("header name must be a non-empty string");const h=a.findKey(o,d);(!h||o[h]===void 0||l===!0||l===void 0&&o[h]!==!1)&&(o[h||p]=M(c))}const i=(c,p)=>a.forEach(c,(l,d)=>s(l,d,p));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!wn(t)?i(gn(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=k(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return xn(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=k(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||G(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=k(i),i){const c=a.findKey(r,i);c&&(!n||G(r,r[c],c,n))&&(delete r[c],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||G(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=M(o),delete n[s];return}const c=t?En(s):String(s).trim();c!==s&&delete n[s],n[c]=M(o),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[he]=this[he]={accessors:{}}).accessors,o=this.prototype;function s(i){const c=k(i);r[c]||(Sn(o,i),r[c]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}V.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(V.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(V);const C=V;function X(e,t){const n=this||se,r=t||n,o=C.from(r.headers);let s=r.data;return a.forEach(e,function(c){s=c.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function _e(e){return!!(e&&e.__CANCEL__)}function D(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(D,y,{__CANCEL__:!0});function An(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Rn=A.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,c){const p=[];p.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&p.push("expires="+new Date(o).toGMTString()),a.isString(s)&&p.push("path="+s),a.isString(i)&&p.push("domain="+i),c===!0&&p.push("secure"),document.cookie=p.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function On(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Cn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ie(e,t){return e&&!On(t)?Cn(e,t):t}const Tn=A.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const c=a.isString(i)?o(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}();function jn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Pn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(p){const l=Date.now(),d=r[s];i||(i=l),n[o]=p,r[o]=l;let h=s,w=0;for(;h!==o;)w+=n[h++],h=h%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),l-i<t)return;const g=d&&l-d;return g?Math.round(w*1e3/g):void 0}}function me(e,t){let n=0;const r=Pn(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,c=s-n,p=r(c),l=s<=i;n=s;const d={loaded:s,total:i,progress:i?s/i:void 0,bytes:c,rate:p||void 0,estimated:p&&i&&l?(i-s)/p:void 0,event:o};d[t?"download":"upload"]=!0,e(d)}}const Nn=typeof XMLHttpRequest<"u",kn=Nn&&function(e){return new Promise(function(n,r){let o=e.data;const s=C.from(e.headers).normalize(),i=e.responseType;let c;function p(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}a.isFormData(o)&&(A.isStandardBrowserEnv||A.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const g=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(g+":"+f))}const d=Ie(e.baseURL,e.url);l.open(e.method.toUpperCase(),Le(d,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function h(){if(!l)return;const g=C.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),m={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:g,config:e,request:l};An(function(S){n(S),p()},function(S){r(S),p()},m),l=null}if("onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){l&&(r(new y("Request aborted",y.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||De;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new y(f,m.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,l)),l=null},A.isStandardBrowserEnv){const g=(e.withCredentials||Tn(d))&&e.xsrfCookieName&&Rn.read(e.xsrfCookieName);g&&s.set(e.xsrfHeaderName,g)}o===void 0&&s.setContentType(null),"setRequestHeader"in l&&a.forEach(s.toJSON(),function(f,m){l.setRequestHeader(m,f)}),a.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",me(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",me(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=g=>{l&&(r(!g||g.type?new D(null,e,l):g),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const w=jn(d);if(w&&A.protocols.indexOf(w)===-1){r(new y("Unsupported protocol "+w+":",y.ERR_BAD_REQUEST,e));return}l.send(o||null)})},$={http:nn,xhr:kn};a.forEach($,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Me={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=a.isString(n)?$[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new y(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp($,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:$};function Q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new D(null,e)}function ye(e){return Q(e),e.headers=C.from(e.headers),e.data=X.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Me.getAdapter(e.adapter||se.adapter)(e).then(function(r){return Q(e),r.data=X.call(e,e.transformResponse,r),r.headers=C.from(r.headers),r},function(r){return _e(r)||(Q(e),r&&r.response&&(r.response.data=X.call(e,e.transformResponse,r.response),r.response.headers=C.from(r.response.headers))),Promise.reject(r)})}const be=e=>e instanceof C?e.toJSON():e;function P(e,t){t=t||{};const n={};function r(l,d,h){return a.isPlainObject(l)&&a.isPlainObject(d)?a.merge.call({caseless:h},l,d):a.isPlainObject(d)?a.merge({},d):a.isArray(d)?d.slice():d}function o(l,d,h){if(a.isUndefined(d)){if(!a.isUndefined(l))return r(void 0,l,h)}else return r(l,d,h)}function s(l,d){if(!a.isUndefined(d))return r(void 0,d)}function i(l,d){if(a.isUndefined(d)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,d)}function c(l,d,h){if(h in t)return r(l,d);if(h in e)return r(void 0,l)}const p={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,d)=>o(be(l),be(d),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(d){const h=p[d]||o,w=h(e[d],t[d],d);a.isUndefined(w)&&h!==c||(n[d]=w)}),n}const $e="1.5.0",ie={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ie[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ge={};ie.transitional=function(t,n,r){function o(s,i){return"[Axios v"+$e+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,c)=>{if(t===!1)throw new y(o(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!ge[i]&&(ge[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,c):!0}};function Bn(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const c=e[s],p=c===void 0||i(c,s,e);if(p!==!0)throw new y("option "+s+" must be "+p,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+s,y.ERR_BAD_OPTION)}}const ee={assertOptions:Bn,validators:ie},T=ee.validators;class H{constructor(t){this.defaults=t,this.interceptors={request:new pe,response:new pe}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=P(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&ee.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:ee.assertOptions(o,{encode:T.function,serialize:T.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete s[f]}),n.headers=C.concat(i,s);const c=[];let p=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(p=p&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let d,h=0,w;if(!p){const f=[ye.bind(this),void 0];for(f.unshift.apply(f,c),f.push.apply(f,l),w=f.length,d=Promise.resolve(n);h<w;)d=d.then(f[h++],f[h++]);return d}w=c.length;let g=n;for(h=0;h<w;){const f=c[h++],m=c[h++];try{g=f(g)}catch(O){m.call(this,O);break}}try{d=ye.call(this,g)}catch(f){return Promise.reject(f)}for(h=0,w=l.length;h<w;)d=d.then(l[h++],l[h++]);return d}getUri(t){t=P(this.defaults,t);const n=Ie(t.baseURL,t.url);return Le(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){H.prototype[t]=function(n,r){return this.request(P(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,c){return this.request(P(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}H.prototype[t]=n(),H.prototype[t+"Form"]=n(!0)});const z=H;class ae{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(c=>{r.subscribe(c),s=c}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,c){r.reason||(r.reason=new D(s,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ae(function(o){t=o}),cancel:t}}}const Fn=ae;function Ln(e){return function(n){return e.apply(null,n)}}function Dn(e){return a.isObject(e)&&e.isAxiosError===!0}const te={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(te).forEach(([e,t])=>{te[t]=e});const Un=te;function ze(e){const t=new z(e),n=Se(z.prototype.request,t);return a.extend(n,z.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return ze(P(e,o))},n}const x=ze(se);x.Axios=z;x.CanceledError=D;x.CancelToken=Fn;x.isCancel=_e;x.VERSION=$e;x.toFormData=J;x.AxiosError=y;x.Cancel=x.CanceledError;x.all=function(t){return Promise.all(t)};x.spread=Ln;x.isAxiosError=Dn;x.mergeConfig=P;x.AxiosHeaders=C;x.formToJSON=e=>Ue(a.isHTMLForm(e)?new FormData(e):e);x.getAdapter=Me.getAdapter;x.HttpStatusCode=Un;x.default=x;const _n=x,ce=_n.create({baseURL:"https://64f61aab2b07270f705e26bd.mockapi.io/api",headers:{"Content-type":"application/json",Accept:"application/json"}}),In=()=>ce.get("/cars"),Mn=e=>ce.get(`/cars/${e}`),$n=e=>ce.get(`/cars?page=${e}&limit=8`),zn={getAllCars:In,getCarById:Mn,getCarsWithPagination:$n},Hn=async e=>{try{return(await zn.getCarsWithPagination(e)).data}catch(t){console.error(t)}},qn=b.div`
  text-align: center;
`,Wn=b.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  background-color: transparent;
  color: ${({theme:e})=>e.colors.primaryAccent};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.colors.secondaryAccent};
  }
`,vn=({onClick:e})=>u.jsx(qn,{children:u.jsx(Wn,{onClick:e,children:"Load more"})}),Vn=()=>{const[e,t]=B.useState(),[n,r]=B.useState(1),o=()=>{r(s=>s+1)};return B.useEffect(()=>{(async()=>{const i=await Hn(n);t(c=>c?[...c,...i]:i)})()},[n]),u.jsx(u.Fragment,{children:e&&u.jsxs(u.Fragment,{children:[u.jsx(Et,{cars:e}),u.jsx(vn,{onClick:o})]})})};export{Vn as default};
