function w(){}const ct=t=>t;function ot(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function H(){return Object.create(null)}function A(t){t.forEach(J)}function z(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function Tt(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function ut(t){return Object.keys(t).length===0}function lt(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t,e,n){t.$$.on_destroy.push(lt(e,n))}function Bt(t,e,n,i){if(t){const r=K(t,e,n,i);return t[0](r)}}function K(t,e,n,i){return t[1]&&i?ot(n.ctx.slice(),t[1](i(e))):n.ctx}function Lt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function Ft(t,e,n,i,r,u){if(r){const s=K(e,n,i,u);t.p(s,r)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const Q=typeof window<"u";let at=Q?()=>window.performance.now():()=>Date.now(),B=Q?t=>requestAnimationFrame(t):w;const b=new Set;function U(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&B(U)}function ft(t){let e;return b.size===0&&B(U),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let O=!1;function _t(){O=!0}function dt(){O=!1}function ht(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function mt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:ht(1,r,_=>e[n[_]].claim_order,o))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const u=[],s=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);l>=c;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);u.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<u.length&&s[c].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(s[c],f)}}function pt(t,e){t.appendChild(e)}function V(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function yt(t){const e=Y("style");return gt(V(t),e),e.sheet}function gt(t,e){return pt(t.head||t,e),e.sheet}function xt(t,e){if(O){for(mt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){O&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function Wt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function $t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function Gt(){return L(" ")}function Jt(){return L("")}function Kt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Qt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function bt(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,i,r=!1){wt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function tt(t,e,n,i){return Z(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Vt(t,e,n){return tt(t,e,n,Y)}function Xt(t,e,n){return tt(t,e,n,$t)}function vt(t,e){return Z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>L(e),!0)}function Yt(t){return vt(t," ")}function Zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function te(t,e){t.value=e??""}function ee(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ne(t,e){return new t(e)}const k=new Map;let M=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:yt(e),rules:{}};return k.set(t,n),n}function St(t,e,n,i,r,u,s,l=0){const c=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=c){const g=e+(n-e)*u(m);o+=m*100+`%{${s(g,1-g)}}
`}const f=o+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Nt(f)}_${l}`,_=V(t),{stylesheet:d,rules:h}=k.get(_)||At(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function I(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||Ct())}function Ct(){B(()=>{M||(k.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&X(e)}),k.clear())})}let N;function E(t){N=t}function et(){if(!N)throw new Error("Function called outside component initialization");return N}function ie(t){et().$$.on_mount.push(t)}function re(t){et().$$.after_update.push(t)}const $=[],W=[],C=[],R=[],nt=Promise.resolve();let T=!1;function it(){T||(T=!0,nt.then(rt))}function se(){return it(),nt}function D(t){C.push(t)}function ce(t){R.push(t)}const q=new Set;let x=0;function rt(){if(x!==0)return;const t=N;do{try{for(;x<$.length;){const e=$[x];x++,E(e),jt(e.$$)}}catch(e){throw $.length=0,x=0,e}for(E(null),$.length=0,x=0;W.length;)W.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];q.has(n)||(q.add(n),n())}C.length=0}while($.length);for(;R.length;)R.pop()();T=!1,q.clear(),E(t)}function jt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let v;function kt(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function G(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const j=new Set;let p;function oe(){p={r:0,c:[],p}}function ue(){p.r||A(p.c),p=p.p}function Mt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function le(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),p.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Dt={duration:0};function ae(t,e,n){const i={direction:"in"};let r=e(t,n,i),u=!1,s,l,c=0;function o(){s&&I(t,s)}function f(){const{delay:_=0,duration:d=300,easing:h=ct,tick:y=w,css:m}=r||Dt;m&&(s=St(t,0,1,d,_,h,m,c++)),y(0,1);const g=at()+_,st=g+d;l&&l.abort(),u=!0,D(()=>G(t,!0,"start")),l=ft(P=>{if(u){if(P>=st)return y(1,0),G(t,!0,"end"),o(),u=!1;if(P>=g){const F=h((P-g)/d);y(F,1-F)}}return u})}let a=!1;return{start(){a||(a=!0,I(t),z(r)?(r=r(i),kt().then(f)):f())},invalidate(){a=!1},end(){u&&(o(),u=!1)}}}function fe(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function _e(t){t&&t.c()}function de(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||D(()=>{const s=t.$$.on_mount.map(J).filter(z);t.$$.on_destroy?t.$$.on_destroy.push(...s):A(s),t.$$.on_mount=[]}),u.forEach(D)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&($.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function he(t,e,n,i,r,u,s,l=[-1]){const c=N;E(t);const o=t.$$={fragment:null,ctx:[],props:u,update:w,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:H(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return o.ctx&&r(o.ctx[a],o.ctx[a]=h)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](h),f&&qt(t,a)),_}):[],o.update(),f=!0,A(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){_t();const a=bt(e.target);o.fragment&&o.fragment.l(a),a.forEach(X)}else o.fragment&&o.fragment.c();e.intro&&Mt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),dt(),rt()}E(c)}class me{$destroy(){Pt(this,1),this.$destroy=w}$on(e,n){if(!z(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ot as A,Pt as B,Bt as C,Ft as D,Ht as E,Lt as F,xt as G,w as H,zt as I,te as J,Kt as K,$t as L,Xt as M,Wt as N,z as O,Tt as P,D as Q,ae as R,me as S,fe as T,Qt as U,ce as V,lt as W,A as X,Gt as a,It as b,Yt as c,le as d,Jt as e,ue as f,Mt as g,X as h,he as i,re as j,Y as k,Vt as l,bt as m,Ut as n,ie as o,ee as p,L as q,vt as r,Rt as s,se as t,Zt as u,oe as v,W as w,ne as x,_e as y,de as z};
