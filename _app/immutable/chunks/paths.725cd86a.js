import{H as l,W as q,X as k,s as w,L as z}from"./index.be20bbd4.js";const u=[];function A(e,i){return{subscribe:T(e,i).subscribe}}function T(e,i=l){let o;const n=new Set;function a(t){if(w(e,t)&&(e=t,o)){const r=!u.length;for(const s of n)s[1](),u.push(s,e);if(r){for(let s=0;s<u.length;s+=2)u[s][0](u[s+1]);u.length=0}}}function f(t){a(t(e))}function b(t,r=l){const s=[t,r];return n.add(s),n.size===1&&(o=i(a)||l),t(e),()=>{n.delete(s),n.size===0&&(o(),o=null)}}return{set:a,update:f,subscribe:b}}function L(e,i,o){const n=!Array.isArray(e),a=n?[e]:e,f=i.length<2;return A(o,b=>{let t=!1;const r=[];let s=0,_=l;const p=()=>{if(s)return;_();const c=i(n?r[0]:r,b);f?b(c):_=z(c)?c:l},m=a.map((c,d)=>q(c,y=>{r[d]=y,s&=~(1<<d),t&&p()},()=>{s|=1<<d}));return t=!0,p(),function(){k(m),_()}})}var g;const x=((g=globalThis.__sveltekit_13cmols)==null?void 0:g.base)??"";var h;const S=((h=globalThis.__sveltekit_13cmols)==null?void 0:h.assets)??x;export{S as a,x as b,L as d,T as w};
