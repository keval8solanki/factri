"use strict";var f=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var j=Object.prototype.hasOwnProperty;var u=(n,c)=>{for(var e in c)f(n,e,{get:c[e],enumerable:!0})},O=(n,c,e,y)=>{if(c&&typeof c=="object"||typeof c=="function")for(let o of b(c))!j.call(n,o)&&o!==e&&f(n,o,{get:()=>c[o],enumerable:!(y=i(c,o))||y.enumerable});return n};var p=n=>O(f({},"__esModule",{value:!0}),n);var x={};u(x,{extend:()=>l,factory:()=>h});module.exports=p(x);var r=n=>n&&typeof n=="object"&&!Array.isArray(n),t=(n,...c)=>{if(!c.length)return n;let e=c.shift();if(r(n)&&r(e))for(let y in e)r(e[y])?(n[y]||Object.assign(n,{[y]:{}}),t(n[y],e[y])):Object.assign(n,{[y]:e[y]});return t(n,...c)},h=(n,c={})=>e=>(n(c,e!=null?e:{}),Object.freeze(t({},c))),l=(n,...c)=>e=>{let y={};return c.forEach(o=>{y=t(y,o(e))}),n(y,e!=null?e:{}),Object.freeze(y)};
//# sourceMappingURL=index.cjs.js.map