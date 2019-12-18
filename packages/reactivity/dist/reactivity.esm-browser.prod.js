function t(t,e){const n=Object.create(null),r=t.split(",");for(let t=0;t<r.length;t++)n[r[t]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}const e={},n=()=>{},r=Object.prototype.hasOwnProperty,o=(t,e)=>r.call(t,e),c=t=>"function"==typeof t,s=t=>"symbol"==typeof t,u=t=>null!==t&&"object"==typeof t,a=Object.prototype.toString,i=t=>a.call(t);const l=(t,e)=>t!==e&&(t==t||e==e);let f=!0;function d(){f=!0}function h(){f=!1}const p=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(s));function g(t){return function(e,n,r){const o=Reflect.get(e,n,r);return s(n)&&p.has(n)?o:vt(o)?o.value:(dt(e,"get",n),u(o)?t?Y(o):X(o):o)}}function y(t,e,n,r){n=et(n);const c=t[e];if(vt(c)&&!vt(n))return c.value=n,!0;const s=o(t,e),u=Reflect.set(t,e,n,r);return t===et(r)&&(s?l(n,c)&&ht(t,"set",e):ht(t,"add",e)),u}function v(t,e){const n=o(t,e),r=(t[e],Reflect.deleteProperty(t,e));return r&&n&&ht(t,"delete",e),r}function w(t,e){const n=Reflect.has(t,e);return dt(t,"has",e),n}function S(t){return dt(t,"iterate"),Reflect.ownKeys(t)}const b={get:g(!1),set:y,deleteProperty:v,has:w,ownKeys:S},k={get:g(!0),set:(t,e,n,r)=>!!f||y(t,e,n,r),deleteProperty:(t,e)=>!!f||v(t,e),has:w,ownKeys:S},M=t=>u(t)?X(t):t,R=t=>u(t)?Y(t):t,m=t=>Reflect.getPrototypeOf(t);function W(t,e,n){return dt(t=et(t),"get",e=et(e)),n(m(t).get.call(t,e))}function E(t){const e=et(this);return dt(e,"has",t=et(t)),m(e).has.call(e,t)}function O(t){return dt(t=et(t),"iterate"),Reflect.get(m(t),"size",t)}function _(t){t=et(t);const e=et(this),n=m(e),r=n.has.call(e,t),o=n.add.call(e,t);return r||ht(e,"add",t),o}function P(t,e){e=et(e);const n=et(this),r=m(n),o=r.has.call(n,t),c=r.get.call(n,t),s=r.set.call(n,t,e);return o?l(e,c)&&ht(n,"set",t):ht(n,"add",t),s}function j(t){const e=et(this),n=m(e),r=n.has.call(e,t),o=(n.get&&n.get.call(e,t),n.delete.call(e,t));return r&&ht(e,"delete",t),o}function z(){const t=et(this),e=0!==t.size,n=m(t).clear.call(t);return e&&ht(t,"clear"),n}function x(t){return function(e,n){const r=this,o=et(r),c=t?R:M;return dt(o,"iterate"),m(o).forEach.call(o,(function(t,n){return e.call(r,c(t),c(n),r)}),n)}}function A(t,e){return function(...n){const r=et(this),o="entries"===t||t===Symbol.iterator&&r instanceof Map,c=m(r)[t].apply(r,n),s=e?R:M;return dt(r,"iterate"),{next(){const{value:t,done:e}=c.next();return e?{value:t,done:e}:{value:o?[s(t[0]),s(t[1])]:s(t),done:e}},[Symbol.iterator](){return this}}}}function K(t,e){return function(...n){return f?"delete"!==e&&this:t.apply(this,n)}}const N={get(t){return W(this,t,M)},get size(){return O(this)},has:E,add:_,set:P,delete:j,clear:z,forEach:x(!1)},V={get(t){return W(this,t,R)},get size(){return O(this)},has:E,add:K(_,"add"),set:K(P,"set"),delete:K(j,"delete"),clear:K(z,"clear"),forEach:x(!0)};function C(t){return(e,n,r)=>Reflect.get(o(t,n)&&n in e?t:e,n,r)}["keys","values","entries",Symbol.iterator].forEach(t=>{N[t]=A(t,!1),V[t]=A(t,!0)});const L={get:C(N)},q={get:C(V)},B=new WeakMap,D=new WeakMap,F=new WeakMap,G=new WeakMap,H=new WeakMap,I=new WeakSet,J=new WeakSet,Q=new Set([Set,Map,WeakMap,WeakSet]),T=t("Object,Array,Map,Set,WeakMap,WeakSet"),U=t=>!t._isVue&&!t._isVNode&&T(function(t){return i(t).slice(8,-1)}(t))&&!J.has(t);function X(t){return H.has(t)?t:I.has(t)?Y(t):Z(t,D,F,b,L)}function Y(t){return F.has(t)&&(t=F.get(t)),Z(t,G,H,k,q)}function Z(t,e,n,r,o){if(!u(t))return t;let c=e.get(t);if(void 0!==c)return c;if(n.has(t))return t;if(!U(t))return t;const s=Q.has(t.constructor)?o:r;return c=new Proxy(t,s),e.set(t,c),n.set(c,t),B.has(t)||B.set(t,new Map),c}function $(t){return F.has(t)||H.has(t)}function tt(t){return H.has(t)}function et(t){return F.get(t)||H.get(t)||t}function nt(t){return I.add(t),t}function rt(t){return J.add(t),t}const ot=[],ct=Symbol("iterate");function st(t,n=e){(function(t){return null!=t&&!0===t._isEffect})(t)&&(t=t.raw);const r=function(t,e){const n=function(...e){return function(t,e,n){if(!t.active)return e(...n);if(!ot.includes(t)){at(t);try{return ot.push(t),e(...n)}finally{ot.pop()}}}(n,t,e)};return n._isEffect=!0,n.active=!0,n.raw=t,n.deps=[],n.options=e,n}(t,n);return n.lazy||r(),r}function ut(t){t.active&&(at(t),t.options.onStop&&t.options.onStop(),t.active=!1)}function at(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let it=!0;function lt(){it=!1}function ft(){it=!0}function dt(t,e,n){if(!it||0===ot.length)return;const r=ot[ot.length-1];"iterate"===e&&(n=ct);let o=B.get(t);void 0===o&&B.set(t,o=new Map);let c=o.get(n);void 0===c&&o.set(n,c=new Set),c.has(r)||(c.add(r),r.deps.push(c))}function ht(t,e,n,r){const o=B.get(t);if(void 0===o)return;const c=new Set,s=new Set;if("clear"===e)o.forEach(t=>{pt(c,s,t)});else if(void 0!==n&&pt(c,s,o.get(n)),"add"===e||"delete"===e){const e=Array.isArray(t)?"length":ct;pt(c,s,o.get(e))}const u=t=>{!function(t,e,n,r,o){void 0!==t.options.scheduler?t.options.scheduler(t):t()}(t)};s.forEach(u),c.forEach(u)}function pt(t,e,n){void 0!==n&&n.forEach(n=>{n.options.computed?e.add(n):t.add(n)})}const gt=t=>u(t)?X(t):t;function yt(t){if(vt(t))return t;t=gt(t);const e={_isRef:!0,get value(){return dt(e,"get","value"),t},set value(n){t=gt(n),ht(e,"set","value")}};return e}function vt(t){return!!t&&!0===t._isRef}function wt(t){const e={};for(const n in t)e[n]=St(t,n);return e}function St(t,e){return{_isRef:!0,get value(){return t[e]},set value(n){t[e]=n}}}function bt(t){let e,r;c(t)?(e=t,r=n):(e=t.get,r=t.set);let o,s=!0;const u=st(e,{lazy:!0,computed:!0,scheduler:()=>{s=!0}});return{_isRef:!0,effect:u,get value(){return s&&(o=u(),s=!1),function(t){if(0===ot.length)return;const e=ot[ot.length-1];for(let n=0;n<t.deps.length;n++){const r=t.deps[n];r.has(e)||(r.add(e),e.deps.push(r))}}(u),o},set value(t){r(t)}}}export{ct as ITERATE_KEY,bt as computed,st as effect,$ as isReactive,tt as isReadonly,vt as isRef,d as lock,rt as markNonReactive,nt as markReadonly,lt as pauseTracking,X as reactive,Y as readonly,yt as ref,ft as resumeTracking,ut as stop,et as toRaw,wt as toRefs,h as unlock};
