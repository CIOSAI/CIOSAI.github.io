import{s as w,h as p,n as E}from"./scheduler.5bb7955e.js";import{S as C,i as I,g as h,s as j,m as q,h as m,j as g,f as d,c as D,n as V,k as r,a as z,z as u,o as A}from"./index.8d263f21.js";function G(n){let e,t,s,c,f,o,a,_,v;return{c(){e=h("div"),t=h("a"),s=h("img"),f=j(),o=h("div"),a=h("p"),_=q(n[1]),this.h()},l(i){e=m(i,"DIV",{class:!0});var l=g(e);t=m(l,"A",{href:!0,target:!0,rel:!0});var b=g(t);s=m(b,"IMG",{src:!0,alt:!0,class:!0}),b.forEach(d),f=D(l),o=m(l,"DIV",{class:!0});var S=g(o);a=m(S,"P",{class:!0});var k=g(a);_=V(k,n[1]),k.forEach(d),S.forEach(d),l.forEach(d),this.h()},h(){p(s.src,c=n[0])||r(s,"src",c),r(s,"alt",n[1]),r(s,"class","absolute w-full h-full object-cover transition-transform ease-out duration-500 hover:scale-110"),r(t,"href",n[2]),r(t,"target","_blank"),r(t,"rel","noopener noreferrer"),r(a,"class","text-sm md:text-base absolute bottom-8"),r(o,"class","pointer-events-none p-4 h-full relative border-8 bg-gradient-to-b from-transparent to-slate-200 dark:to-indigo-900 border-indigo-900 dark:border-slate-200"),r(e,"class",v=n[3]+" overflow-clip relative")},m(i,l){z(i,e,l),u(e,t),u(t,s),u(e,f),u(e,o),u(o,a),u(a,_)},p(i,[l]){l&1&&!p(s.src,c=i[0])&&r(s,"src",c),l&2&&r(s,"alt",i[1]),l&4&&r(t,"href",i[2]),l&2&&A(_,i[1]),l&8&&v!==(v=i[3]+" overflow-clip relative")&&r(e,"class",v)},i:E,o:E,d(i){i&&d(e)}}}function M(n,e,t){let{imgSrc:s=""}=e,{caption:c=""}=e,{href:f="./"}=e,{class:o=""}=e;return n.$$set=a=>{"imgSrc"in a&&t(0,s=a.imgSrc),"caption"in a&&t(1,c=a.caption),"href"in a&&t(2,f=a.href),"class"in a&&t(3,o=a.class)},[s,c,f,o]}class B extends C{constructor(e){super(),I(this,e,M,G,w,{imgSrc:0,caption:1,href:2,class:3})}}export{B as C};