var o=n=>n&&typeof n=="object"&&!Array.isArray(n),y=(n,...c)=>{if(!c.length)return n;let e=c.shift();if(o(n)&&o(e))for(let t in e)o(e[t])?(n[t]||Object.assign(n,{[t]:{}}),y(n[t],e[t])):Object.assign(n,{[t]:e[t]});return y(n,...c)},i=n=>{let c={};return e=>(n(c,e!=null?e:{}),Object.freeze(Object.assign({},c)))},r=(n,...c)=>e=>{let t={};return c.forEach(f=>{t=y(t,f(e))}),n(t,e!=null?e:{}),Object.freeze(Object.assign({},t))};export{r as extend,i as factory};
