import{H as l,W as m,X as j,s as k,O as w}from"./index.bf928f60.js";const u=[];function z(e,i){return{subscribe:A(e,i).subscribe}}function A(e,i=l){let o;const n=new Set;function a(t){if(k(e,t)&&(e=t,o)){const r=!u.length;for(const s of n)s[1](),u.push(s,e);if(r){for(let s=0;s<u.length;s+=2)u[s][0](u[s+1]);u.length=0}}}function f(t){a(t(e))}function b(t,r=l){const s=[t,r];return n.add(s),n.size===1&&(o=i(a)||l),t(e),()=>{n.delete(s),n.size===0&&(o(),o=null)}}return{set:a,update:f,subscribe:b}}function x(e,i,o){const n=!Array.isArray(e),a=n?[e]:e,f=i.length<2;return z(o,b=>{let t=!1;const r=[];let s=0,_=l;const p=()=>{if(s)return;_();const c=i(n?r[0]:r,b);f?b(c):_=w(c)?c:l},q=a.map((c,d)=>m(c,y=>{r[d]=y,s&=~(1<<d),t&&p()},()=>{s|=1<<d}));return t=!0,p(),function(){j(q),_()}})}var g;const T=((g=globalThis.__sveltekit_1qvjql0)==null?void 0:g.base)??"";var h;const H=((h=globalThis.__sveltekit_1qvjql0)==null?void 0:h.assets)??T;export{H as a,T as b,x as d,A as w};
