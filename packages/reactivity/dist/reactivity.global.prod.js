var VueObserver=function(e){"use strict";function t(e,t){const n=Object.create(null),r=e.split(",");for(let e=0;e<r.length;e++)n[r[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const n={},r=()=>{},o=Object.prototype.hasOwnProperty,c=(e,t)=>o.call(e,t),s=e=>"function"==typeof e,u=e=>"symbol"==typeof e,a=e=>null!==e&&"object"==typeof e,i=Object.prototype.toString,l=e=>i.call(e);const f=(e,t)=>e!==t&&(e==e||t==t);let d=!0;const h=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(u));function p(e){return function(t,n,r){const o=Reflect.get(t,n,r);return u(n)&&h.has(n)?o:ae(o)?o.value:(oe(t,"get",n),a(o)?e?U(o):Q(o):o)}}function g(e,t,n,r){n=Z(n);const o=e[t];if(ae(o)&&!ae(n))return o.value=n,!0;const s=c(e,t),u=Reflect.set(e,t,n,r);return e===Z(r)&&(s?f(n,o)&&ce(e,"set",t):ce(e,"add",t)),u}function y(e,t){const n=c(e,t),r=(e[t],Reflect.deleteProperty(e,t));return r&&n&&ce(e,"delete",t),r}function v(e,t){const n=Reflect.has(e,t);return oe(e,"has",t),n}function w(e){return oe(e,"iterate"),Reflect.ownKeys(e)}const R={get:p(!1),set:g,deleteProperty:y,has:v,ownKeys:w},S={get:p(!0),set:(e,t,n,r)=>!!d||g(e,t,n,r),deleteProperty:(e,t)=>!!d||y(e,t),has:v,ownKeys:w},k=e=>a(e)?Q(e):e,m=e=>a(e)?U(e):e,b=e=>Reflect.getPrototypeOf(e);function E(e,t,n){return oe(e=Z(e),"get",t=Z(t)),n(b(e).get.call(e,t))}function M(e){const t=Z(this);return oe(t,"has",e=Z(e)),b(t).has.call(t,e)}function W(e){return oe(e=Z(e),"iterate"),Reflect.get(b(e),"size",e)}function O(e){e=Z(e);const t=Z(this),n=b(t),r=n.has.call(t,e),o=n.add.call(t,e);return r||ce(t,"add",e),o}function _(e,t){t=Z(t);const n=Z(this),r=b(n),o=r.has.call(n,e),c=r.get.call(n,e),s=r.set.call(n,e,t);return o?f(t,c)&&ce(n,"set",e):ce(n,"add",e),s}function P(e){const t=Z(this),n=b(t),r=n.has.call(t,e),o=(n.get&&n.get.call(t,e),n.delete.call(t,e));return r&&ce(t,"delete",e),o}function j(){const e=Z(this),t=0!==e.size,n=b(e).clear.call(e);return t&&ce(e,"clear"),n}function z(e){return function(t,n){const r=this,o=Z(r),c=e?m:k;return oe(o,"iterate"),b(o).forEach.call(o,(function(e,n){return t.call(r,c(e),c(n),r)}),n)}}function A(e,t){return function(...n){const r=Z(this),o="entries"===e||e===Symbol.iterator&&r instanceof Map,c=b(r)[e].apply(r,n),s=t?m:k;return oe(r,"iterate"),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:o?[s(e[0]),s(e[1])]:s(e),done:t}},[Symbol.iterator](){return this}}}}function K(e,t){return function(...n){return d?"delete"!==t&&this:e.apply(this,n)}}const T={get(e){return E(this,e,k)},get size(){return W(this)},has:M,add:O,set:_,delete:P,clear:j,forEach:z(!1)},x={get(e){return E(this,e,m)},get size(){return W(this)},has:M,add:K(O,"add"),set:K(_,"set"),delete:K(P,"delete"),clear:K(j,"clear"),forEach:z(!0)};function N(e){return(t,n,r)=>Reflect.get(c(e,n)&&n in t?e:t,n,r)}["keys","values","entries",Symbol.iterator].forEach(e=>{T[e]=A(e,!1),x[e]=A(e,!0)});const V={get:N(T)},C={get:N(x)},I=new WeakMap,L=new WeakMap,Y=new WeakMap,q=new WeakMap,B=new WeakMap,D=new WeakSet,F=new WeakSet,G=new Set([Set,Map,WeakMap,WeakSet]),H=t("Object,Array,Map,Set,WeakMap,WeakSet"),J=e=>!e._isVue&&!e._isVNode&&H(function(e){return l(e).slice(8,-1)}(e))&&!F.has(e);function Q(e){return B.has(e)?e:D.has(e)?U(e):X(e,L,Y,R,V)}function U(e){return Y.has(e)&&(e=Y.get(e)),X(e,q,B,S,C)}function X(e,t,n,r,o){if(!a(e))return e;let c=t.get(e);if(void 0!==c)return c;if(n.has(e))return e;if(!J(e))return e;const s=G.has(e.constructor)?o:r;return c=new Proxy(e,s),t.set(e,c),n.set(c,e),I.has(e)||I.set(e,new Map),c}function Z(e){return Y.get(e)||B.get(e)||e}const $=[],ee=Symbol("iterate");function te(e,t=n){(function(e){return null!=e&&!0===e._isEffect})(e)&&(e=e.raw);const r=function(e,t){const n=function(...t){return function(e,t,n){if(!e.active)return t(...n);if(!$.includes(e)){ne(e);try{return $.push(e),t(...n)}finally{$.pop()}}}(n,e,t)};return n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||r(),r}function ne(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let re=!0;function oe(e,t,n){if(!re||0===$.length)return;const r=$[$.length-1];"iterate"===t&&(n=ee);let o=I.get(e);void 0===o&&I.set(e,o=new Map);let c=o.get(n);void 0===c&&o.set(n,c=new Set),c.has(r)||(c.add(r),r.deps.push(c))}function ce(e,t,n,r){const o=I.get(e);if(void 0===o)return;const c=new Set,s=new Set;if("clear"===t)o.forEach(e=>{se(c,s,e)});else if(void 0!==n&&se(c,s,o.get(n)),"add"===t||"delete"===t){const t=Array.isArray(e)?"length":ee;se(c,s,o.get(t))}const u=e=>{!function(e,t,n,r,o){void 0!==e.options.scheduler?e.options.scheduler(e):e()}(e)};s.forEach(u),c.forEach(u)}function se(e,t,n){void 0!==n&&n.forEach(n=>{n.options.computed?t.add(n):e.add(n)})}const ue=e=>a(e)?Q(e):e;function ae(e){return!!e&&!0===e._isRef}function ie(e,t){return{_isRef:!0,get value(){return e[t]},set value(n){e[t]=n}}}return e.ITERATE_KEY=ee,e.computed=function(e){let t,n;s(e)?(t=e,n=r):(t=e.get,n=e.set);let o,c=!0;const u=te(t,{lazy:!0,computed:!0,scheduler:()=>{c=!0}});return{_isRef:!0,effect:u,get value(){return c&&(o=u(),c=!1),function(e){if(0===$.length)return;const t=$[$.length-1];for(let n=0;n<e.deps.length;n++){const r=e.deps[n];r.has(t)||(r.add(t),t.deps.push(r))}}(u),o},set value(e){n(e)}}},e.effect=te,e.isReactive=function(e){return Y.has(e)||B.has(e)},e.isReadonly=function(e){return B.has(e)},e.isRef=ae,e.lock=function(){d=!0},e.markNonReactive=function(e){return F.add(e),e},e.markReadonly=function(e){return D.add(e),e},e.pauseTracking=function(){re=!1},e.reactive=Q,e.readonly=U,e.ref=function(e){if(ae(e))return e;e=ue(e);const t={_isRef:!0,get value(){return oe(t,"get","value"),e},set value(n){e=ue(n),ce(t,"set","value")}};return t},e.resumeTracking=function(){re=!0},e.stop=function(e){e.active&&(ne(e),e.options.onStop&&e.options.onStop(),e.active=!1)},e.toRaw=Z,e.toRefs=function(e){const t={};for(const n in e)t[n]=ie(e,n);return t},e.unlock=function(){d=!1},e}({});
