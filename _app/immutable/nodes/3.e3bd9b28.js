import{s as se,n as Q}from"../chunks/scheduler.5bb7955e.js";import{S as re,i as ne,g as v,s as $,h as b,E as j,c as z,j as P,f as c,k as w,a as h,d as y,b as F,t as H,C as J,r as U,u as X,v as Z,w as ee,p as V}from"../chunks/index.8d263f21.js";import{e as E}from"../chunks/each.e59479a4.js";import{C as te}from"../chunks/Card.d3f3b8a5.js";import{b as ae}from"../chunks/paths.4d1eca78.js";function W(a,l,i){const s=a.slice();return s[2]=l[i],s}function Y(a,l,i){const s=a.slice();return s[2]=l[i],s}function G(a){let l,i;return l=new te({props:{imgSrc:a[2].url,caption:a[2].caption,href:a[2].href,class:"snap-center w-48 h-36 sm:w-96 sm:h-64 flex-none"}}),{c(){U(l.$$.fragment)},l(s){X(l.$$.fragment,s)},m(s,_){Z(l,s,_),i=!0},p:Q,i(s){i||(y(l.$$.fragment,s),i=!0)},o(s){H(l.$$.fragment,s),i=!1},d(s){ee(l,s)}}}function K(a){let l,i;return l=new te({props:{imgSrc:a[2].url,caption:a[2].caption,href:a[2].href,class:"snap-center w-48 h-36 sm:w-96 sm:h-64 flex-none"}}),{c(){U(l.$$.fragment)},l(s){X(l.$$.fragment,s)},m(s,_){Z(l,s,_),i=!0},p:Q,i(s){i||(y(l.$$.fragment,s),i=!0)},o(s){H(l.$$.fragment,s),i=!1},d(s){ee(l,s)}}}function ie(a){let l,i=`Demoscene is a computer subculture originated in the Nordics in the 80&#39;s. 
  You can visit 
  <a class="hover:italic" href="https://github.com/psenough/teach_yourself_demoscene_in_14_days">here</a> 
  to learn more about it.
  <br/>
  Modern demoscene is often about sizecoding, livecoding, track music, computer graphics and much more.
  <br/>
  Also check out <a class="hover:italic" href="https://demozoo.org/sceners/142051/">my entry on Demozoo</a>.`,s,_,A="Prods:",M,f,B,p,N="Livecoding:",L,u,S,d,O="Me and my friends at Revision.",I,g,q=`<img class="justify-self-center w-1/2" src="${`${ae}/img/photos/revision_2024.jpg`}" alt="CIOSAI_tw(me), Wrighter, mocoo and LJ chatting at Revision Demoparty 2024, surrounded by computers"/>`,T,x,R='Taken by <a class="hover:italic" href="https://demozoo.org/sceners/79080/">Slerpy</a>',D,k=E(a[0]),r=[];for(let e=0;e<k.length;e+=1)r[e]=G(Y(a,k,e));const oe=e=>H(r[e],1,1,()=>{r[e]=null});let C=E(a[1]),n=[];for(let e=0;e<C.length;e+=1)n[e]=K(W(a,C,e));const le=e=>H(n[e],1,1,()=>{n[e]=null});return{c(){l=v("h4"),l.innerHTML=i,s=$(),_=v("h4"),_.textContent=A,M=$(),f=v("h2");for(let e=0;e<r.length;e+=1)r[e].c();B=$(),p=v("h4"),p.textContent=N,L=$(),u=v("h2");for(let e=0;e<n.length;e+=1)n[e].c();S=$(),d=v("h4"),d.textContent=O,I=$(),g=v("div"),g.innerHTML=q,T=$(),x=v("h4"),x.innerHTML=R,this.h()},l(e){l=b(e,"H4",{class:!0,"data-svelte-h":!0}),j(l)!=="svelte-btq1ro"&&(l.innerHTML=i),s=z(e),_=b(e,"H4",{class:!0,"data-svelte-h":!0}),j(_)!=="svelte-10bowk"&&(_.textContent=A),M=z(e),f=b(e,"H2",{class:!0});var o=P(f);for(let m=0;m<r.length;m+=1)r[m].l(o);o.forEach(c),B=z(e),p=b(e,"H4",{class:!0,"data-svelte-h":!0}),j(p)!=="svelte-trhu4e"&&(p.textContent=N),L=z(e),u=b(e,"H2",{class:!0});var t=P(u);for(let m=0;m<n.length;m+=1)n[m].l(t);t.forEach(c),S=z(e),d=b(e,"H4",{class:!0,"data-svelte-h":!0}),j(d)!=="svelte-szs651"&&(d.textContent=O),I=z(e),g=b(e,"DIV",{class:!0,"data-svelte-h":!0}),j(g)!=="svelte-qoygdn"&&(g.innerHTML=q),T=z(e),x=b(e,"H4",{class:!0,"data-svelte-h":!0}),j(x)!=="svelte-161ye2w"&&(x.innerHTML=R),this.h()},h(){w(l,"class","text-indigo-950 dark:text-slate-200 text-base"),w(_,"class","text-indigo-950 dark:text-slate-200 text-base sm:text-lg"),w(f,"class","text-indigo-950 dark:text-slate-200 text-lg mx-4 lg:mx-16 my-8 overflow-x-scroll snap-x flex items-center flex-col md:flex-row gap-4 flex-nowrap"),w(p,"class","text-indigo-950 dark:text-slate-200 text-base sm:text-lg"),w(u,"class","text-indigo-950 dark:text-slate-200 text-lg mx-4 lg:mx-16 my-8 overflow-x-scroll snap-x flex items-center flex-col md:flex-row gap-4 flex-nowrap"),w(d,"class","text-indigo-950 dark:text-slate-200 text-base"),w(g,"class","w-full grid"),w(x,"class","text-indigo-950 dark:text-slate-200 text-small")},m(e,o){h(e,l,o),h(e,s,o),h(e,_,o),h(e,M,o),h(e,f,o);for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(f,null);h(e,B,o),h(e,p,o),h(e,L,o),h(e,u,o);for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(u,null);h(e,S,o),h(e,d,o),h(e,I,o),h(e,g,o),h(e,T,o),h(e,x,o),D=!0},p(e,[o]){if(o&1){k=E(e[0]);let t;for(t=0;t<k.length;t+=1){const m=Y(e,k,t);r[t]?(r[t].p(m,o),y(r[t],1)):(r[t]=G(m),r[t].c(),y(r[t],1),r[t].m(f,null))}for(V(),t=k.length;t<r.length;t+=1)oe(t);F()}if(o&2){C=E(e[1]);let t;for(t=0;t<C.length;t+=1){const m=W(e,C,t);n[t]?(n[t].p(m,o),y(n[t],1)):(n[t]=K(m),n[t].c(),y(n[t],1),n[t].m(u,null))}for(V(),t=C.length;t<n.length;t+=1)le(t);F()}},i(e){if(!D){for(let o=0;o<k.length;o+=1)y(r[o]);for(let o=0;o<C.length;o+=1)y(n[o]);D=!0}},o(e){r=r.filter(Boolean);for(let o=0;o<r.length;o+=1)H(r[o]);n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)H(n[o]);D=!1},d(e){e&&(c(l),c(s),c(_),c(M),c(f),c(B),c(p),c(L),c(u),c(S),c(d),c(I),c(g),c(T),c(x)),J(r,e),J(n,e)}}}function ce(a){return[[{url:"https://content.pouet.net/files/screenshots/00097/00097338.png",href:"https://www.pouet.net/prod.php?which=97338",caption:"Demo: 來 → 去"},{url:"https://content.pouet.net/files/screenshots/00097/00097093.png",href:"https://www.pouet.net/prod.php?which=97093",caption:"Demo: EasingExpoOut"}],[{url:"https://livecode.demozoo.org/media/2024_09_02_shader_jam_monday_night_bytes/grabber_mondaynightbytes_CIOSAI_tw.jpg",href:"https://livecode.demozoo.org/performer/ciosai_tw.html#mc",caption:"Monday Night Bytes 02.09"},{url:"https://livecode.demozoo.org/media/2024_07_22_shader_byte_jam_monday_night_bytes/grabber_fieldfx_Ciosai.jpg",href:"https://livecode.demozoo.org/performer/ciosai_tw.html#mc",caption:"Monday Night Bytes 22.07"},{url:"https://livecode.demozoo.org/media/2024_07_19_shader_jam_bornhack/CIOSAI_tw.jpg",href:"https://livecode.demozoo.org/performer/ciosai_tw.html#mc",caption:"Bornhack 2024"},{url:"https://livecode.demozoo.org/media/2024_04_22_shader_jam_monday_night_bytes/grabber_fieldfx_ciosai_tw.jpg",href:"https://livecode.demozoo.org/performer/ciosai_tw.html#mc",caption:"Monday Night Bytes 22.04"},{url:"https://livecode.demozoo.org/media/2024_03_30_shader_jam_revision_2024/grabber_rdpjam2024_ciosai_tw.jpg",href:"https://livecode.demozoo.org/performer/ciosai_tw.html#mc",caption:"Revision 2024"}]]}class ue extends re{constructor(l){super(),ne(this,l,ce,ie,se,{})}}export{ue as component};