import{s as D,n as g,c as w1,o as k1,d as g1,u as p1,g as _1,e as v1}from"../chunks/scheduler.5bb7955e.js";import{S as H,i as j,x,y as b,j as d,f as i,k as o,a as T,z as p,g as F,s as A,h as N,c as O,A as J,p as o1,t as w,b as c1,d as v,B as i1,C as x1,m as b1,n as E1,o as C1,r as C,u as y,v as B,w as z,D as y1,E as B1,l as $}from"../chunks/index.a580c1b5.js";import{e as u1}from"../chunks/each.e59479a4.js";import{b as Y}from"../chunks/paths.4932f4c4.js";const z1=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,M1=!0,L1="always",Lt=Object.freeze(Object.defineProperty({__proto__:null,prerender:M1,trailingSlash:L1},Symbol.toStringTag,{value:"Module"}));function S1(a){const t=a-1;return t*t*t+1}function f1(a,{delay:t=0,duration:r=400,easing:e=S1,axis:s="y"}={}){const n=getComputedStyle(a),u=+n.opacity,l=s==="y"?"height":"width",c=parseFloat(n[l]),h=s==="y"?["top","bottom"]:["left","right"],f=h.map(I=>`${I[0].toUpperCase()}${I.slice(1)}`),k=parseFloat(n[`padding${f[0]}`]),Z=parseFloat(n[`padding${f[1]}`]),_=parseFloat(n[`margin${f[0]}`]),M=parseFloat(n[`margin${f[1]}`]),L=parseFloat(n[`border${f[0]}Width`]),V=parseFloat(n[`border${f[1]}Width`]);return{delay:t,duration:r,easing:e,css:I=>`overflow: hidden;opacity: ${Math.min(I*20,1)*u};${l}: ${I*c}px;padding-${h[0]}: ${I*k}px;padding-${h[1]}: ${I*Z}px;margin-${h[0]}: ${I*_}px;margin-${h[1]}: ${I*M}px;border-${h[0]}-width: ${I*L}px;border-${h[1]}-width: ${I*V}px;`}}function I1(a){let t,r,e;return{c(){t=x("svg"),r=x("path"),e=x("path"),this.h()},l(s){t=b(s,"svg",{xmlns:!0,viewBox:!0});var n=d(t);r=b(n,"path",{fill:!0,d:!0}),d(r).forEach(i),e=b(n,"path",{stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),d(e).forEach(i),n.forEach(i),this.h()},h(){o(r,"fill","none"),o(r,"d","M0 0h256v256H0z"),o(e,"stroke","currentColor"),o(e,"stroke-linecap","round"),o(e,"stroke-linejoin","round"),o(e,"stroke-width","16"),o(e,"d","M40 128h176M40 64h176M40 192h176"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","0 0 256 256")},m(s,n){T(s,t,n),p(t,r),p(t,e)},p:g,i:g,o:g,d(s){s&&i(t)}}}class T1 extends H{constructor(t){super(),j(this,t,null,I1,D,{})}}function D1(a){let t,r,e;return{c(){t=x("svg"),r=x("path"),e=x("path"),this.h()},l(s){t=b(s,"svg",{xmlns:!0,viewBox:!0});var n=d(t);r=b(n,"path",{fill:!0,d:!0}),d(r).forEach(i),e=b(n,"path",{fill:!0,stroke:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),d(e).forEach(i),n.forEach(i),this.h()},h(){o(r,"fill","none"),o(r,"d","M0 0h256v256H0z"),o(e,"fill","none"),o(e,"stroke","currentColor"),o(e,"stroke-linecap","round"),o(e,"stroke-linejoin","round"),o(e,"stroke-width","16"),o(e,"d","m208 96-80 80-80-80"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","0 0 256 256")},m(s,n){T(s,t,n),p(t,r),p(t,e)},p:g,i:g,o:g,d(s){s&&i(t)}}}class H1 extends H{constructor(t){super(),j(this,t,null,D1,D,{})}}function h1(a,t,r){const e=a.slice();return e[5]=t[r],e}function j1(a){let t,r;return t=new T1({}),{c(){C(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function A1(a){let t,r;return t=new H1({}),{c(){C(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function m1(a){let t,r,e,s,n,u=u1(a[1]),l=[];for(let c=0;c<u.length;c+=1)l[c]=d1(h1(a,u,c));return{c(){t=F("ol");for(let c=0;c<l.length;c+=1)l[c].c();this.h()},l(c){t=N(c,"OL",{class:!0});var h=d(t);for(let f=0;f<l.length;f+=1)l[f].l(h);h.forEach(i),this.h()},h(){o(t,"class","w-min px-1 py-2 dark:bg-indigo-900 bg-slate-200 border-2 border-t-0 border-slate-500 dark:border-slate-400")},m(c,h){T(c,t,h);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(t,null);e=!0,s||(n=J(t,"mouseleave",a[4]),s=!0)},p(c,h){if(h&2){u=u1(c[1]);let f;for(f=0;f<u.length;f+=1){const k=h1(c,u,f);l[f]?l[f].p(k,h):(l[f]=d1(k),l[f].c(),l[f].m(t,null))}for(;f<l.length;f+=1)l[f].d(1);l.length=u.length}},i(c){e||(c&&w1(()=>{e&&(r||(r=i1(t,f1,{},!0)),r.run(1))}),e=!0)},o(c){c&&(r||(r=i1(t,f1,{},!1)),r.run(0)),e=!1},d(c){c&&i(t),x1(l,c),c&&r&&r.end(),s=!1,n()}}}function d1(a){let t,r,e=a[5].text+"",s,n;return{c(){t=F("li"),r=F("a"),s=b1(e),this.h()},l(u){t=N(u,"LI",{});var l=d(t);r=N(l,"A",{href:!0,class:!0});var c=d(r);s=E1(c,e),c.forEach(i),l.forEach(i),this.h()},h(){o(r,"href",n=a[5].url),o(r,"class","hover:italic")},m(u,l){T(u,t,l),p(t,r),p(r,s)},p(u,l){l&2&&e!==(e=u[5].text+"")&&C1(s,e),l&2&&n!==(n=u[5].url)&&o(r,"href",n)},d(u){u&&i(t)}}}function O1(a){let t,r,e,s,n,u,l,c,h;const f=[A1,j1],k=[];function Z(M,L){return M[2]?0:1}e=Z(a),s=k[e]=f[e](a);let _=a[2]&&m1(a);return{c(){t=F("nav"),r=F("button"),s.c(),n=A(),_&&_.c(),this.h()},l(M){t=N(M,"NAV",{class:!0});var L=d(t);r=N(L,"BUTTON",{class:!0});var V=d(r);s.l(V),V.forEach(i),n=O(L),_&&_.l(L),L.forEach(i),this.h()},h(){o(r,"class","w-full active:text-slate-500 active:dark:text-slate-400 hover:scale-110 transition-transform ease-out duration-100"),o(t,"class",u=a[0]+" text-indigo-900 dark:text-slate-200")},m(M,L){T(M,t,L),p(t,r),k[e].m(r,null),p(t,n),_&&_.m(t,null),l=!0,c||(h=J(r,"click",a[3]),c=!0)},p(M,[L]){let V=e;e=Z(M),e!==V&&(o1(),w(k[V],1,1,()=>{k[V]=null}),c1(),s=k[e],s||(s=k[e]=f[e](M),s.c()),v(s,1),s.m(r,null)),M[2]?_?(_.p(M,L),L&4&&v(_,1)):(_=m1(M),_.c(),v(_,1),_.m(t,null)):_&&(o1(),w(_,1,1,()=>{_=null}),c1()),(!l||L&1&&u!==(u=M[0]+" text-indigo-900 dark:text-slate-200"))&&o(t,"class",u)},i(M){l||(v(s),v(_),l=!0)},o(M){w(s),w(_),l=!1},d(M){M&&i(t),k[e].d(),_&&_.d(),c=!1,h()}}}function V1(a,t,r){let e=!1,{class:s=""}=t,{routes:n=[]}=t;const u=()=>{r(2,e=!e)},l=()=>{r(2,e=!1)};return a.$$set=c=>{"class"in c&&r(0,s=c.class),"routes"in c&&r(1,n=c.routes)},[s,n,e,u,l]}class F1 extends H{constructor(t){super(),j(this,t,V1,O1,D,{class:0,routes:1})}}function N1(a){let t,r;return{c(){t=x("svg"),r=x("path"),this.h()},l(e){t=b(e,"svg",{xmlns:!0,viewBox:!0});var s=d(t);r=b(s,"path",{stroke:!0,fill:!0,d:!0}),d(r).forEach(i),s.forEach(i),this.h()},h(){o(r,"stroke","currentColor"),o(r,"fill","currentColor"),o(r,"d","M481-29 346-160H160v-186L26-480l134-134v-186h186l135-134 133 134h186v186l134 134-134 134v186H614L481-29Zm0-191q108 0 183.5-76.125T740-481q0-107.917-75.542-183.458Q588.917-740 481-740v520Zm0 107 107.917-107H740v-151l109-109-109-109v-151H589L481-849 371-740H220v151L111-480l109 109v151h150l111 107Zm-1-368Z"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","0 -960 960 960")},m(e,s){T(e,t,s),p(t,r)},p:g,i:g,o:g,d(e){e&&i(t)}}}class Z1 extends H{constructor(t){super(),j(this,t,null,N1,D,{})}}const{document:$1}=z1;function q1(a){let t,r=`if (
			localStorage.theme === 'dark' ||
			(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}`,e,s,n,u,l,c,h;return n=new Z1({}),{c(){t=F("script"),t.textContent=r,e=A(),s=F("button"),C(n.$$.fragment),this.h()},l(f){const k=y1("svelte-1gb1kl",$1.head);t=N(k,"SCRIPT",{"data-svelte-h":!0}),B1(t)!=="svelte-1qa5ryb"&&(t.textContent=r),k.forEach(i),e=O(f),s=N(f,"BUTTON",{class:!0});var Z=d(s);y(n.$$.fragment,Z),Z.forEach(i),this.h()},h(){o(s,"class",u=a[0]+" text-indigo-900 dark:text-slate-200")},m(f,k){p($1.head,t),T(f,e,k),T(f,s,k),B(n,s,null),l=!0,c||(h=J(s,"click",a[1]),c=!0)},p(f,[k]){(!l||k&1&&u!==(u=f[0]+" text-indigo-900 dark:text-slate-200"))&&o(s,"class",u)},i(f){l||(v(n.$$.fragment,f),l=!0)},o(f){w(n.$$.fragment,f),l=!1},d(f){f&&(i(e),i(s)),i(t),z(n),c=!1,h()}}}function P1(a,t,r){let{class:e=""}=t,s;k1(()=>{s=document.documentElement.classList.contains("dark");const c=window.matchMedia("(prefers-color-scheme: dark)");return c.addEventListener("change",n),()=>c.removeEventListener("change",n)});function n({matches:c}){localStorage.theme||l(c)}function u(){l(!s)}function l(c){s=c,s?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.theme=s?"dark":"light",window.matchMedia(`(prefers-color-scheme: ${localStorage.theme})`).matches&&localStorage.removeItem("theme")}return a.$$set=c=>{"class"in c&&r(0,e=c.class)},[e,u]}class R1 extends H{constructor(t){super(),j(this,t,P1,q1,D,{class:0})}}function U1(a){let t,r,e;const s=a[3].default,n=g1(s,a,a[2],null);return{c(){t=F("a"),n&&n.c(),this.h()},l(u){t=N(u,"A",{href:!0,target:!0,rel:!0,class:!0});var l=d(t);n&&n.l(l),l.forEach(i),this.h()},h(){o(t,"href",a[0]),o(t,"target","_blank"),o(t,"rel","noopener noreferrer"),o(t,"class",r=a[1]+" text-indigo-900 dark:text-slate-200 w-6 sm:w-8 aspect-square")},m(u,l){T(u,t,l),n&&n.m(t,null),e=!0},p(u,[l]){n&&n.p&&(!e||l&4)&&p1(n,s,u,u[2],e?v1(s,u[2],l,null):_1(u[2]),null),(!e||l&1)&&o(t,"href",u[0]),(!e||l&2&&r!==(r=u[1]+" text-indigo-900 dark:text-slate-200 w-6 sm:w-8 aspect-square"))&&o(t,"class",r)},i(u){e||(v(n,u),e=!0)},o(u){w(n,u),e=!1},d(u){u&&i(t),n&&n.d(u)}}}function G1(a,t,r){let{$$slots:e={},$$scope:s}=t,{href:n="./"}=t,{class:u=""}=t;return a.$$set=l=>{"href"in l&&r(0,n=l.href),"class"in l&&r(1,u=l.class),"$$scope"in l&&r(2,s=l.$$scope)},[n,u,s,e]}class q extends H{constructor(t){super(),j(this,t,G1,U1,D,{href:0,class:1})}}function W1(a){let t,r;return{c(){t=x("svg"),r=x("path"),this.h()},l(e){t=b(e,"svg",{xmlns:!0,viewBox:!0});var s=d(t);r=b(s,"path",{d:!0,color:!0,style:!0}),d(r).forEach(i),s.forEach(i),this.h()},h(){o(r,"d","M42.219 17.752C28.412 25.95 1.207 57.205.946 65.402V78.97c0 17.2 16.078 32.316 30.673 32.316 17.524 0 32.127-14.526 32.13-31.765 0 17.238 14.102 31.765 31.63 31.765 17.527 0 31.176-14.526 31.176-31.765 0 17.238 14.99 31.765 32.514 31.765h.315c17.524 0 32.528-14.526 32.528-31.765 0 17.238 13.644 31.765 31.168 31.765s31.626-14.526 31.626-31.765c0 17.238 14.603 31.765 32.127 31.765 14.59 0 30.667-15.114 30.667-32.316v-13.57c-.272-8.196-27.474-39.451-41.276-47.65-42.907-1.507-72.672-1.766-117.012-1.76-44.323.003-104.784.694-116.996 1.76zm84.116 85.435a36.164 36.164 0 0 1-6.168 7.94 36.634 36.634 0 0 1-25.684 10.48c-10 0-19.122-4.009-25.736-10.483-2.391-2.348-4.21-4.86-5.885-7.783v.005c-1.66 2.93-3.994 5.438-6.385 7.789A36.743 36.743 0 0 1 30.75 121.61c-1.203 0-2.449-.33-3.465-.673-1.403 14.675-2.004 28.692-2.21 38.928v.058c-.028 5.197-.05 9.463-.078 15.39.272 30.796-3.05 99.789 13.572 116.74 25.757 6.013 73.151 8.748 120.706 8.762h.004c47.552-.016 94.95-2.749 120.706-8.747 16.622-16.955 13.3-85.948 13.573-116.733-.028-5.927-.05-10.197-.076-15.391v-.057c-.215-10.226-.81-24.246-2.22-38.918-1.016.344-2.271.677-3.478.677a36.766 36.766 0 0 1-25.735-10.474c-2.398-2.355-4.724-4.864-6.39-7.788l-.004-.011c-1.671 2.92-3.49 5.436-5.889 7.782a36.75 36.75 0 0 1-25.732 10.48c-9.997 0-19.07-4.008-25.684-10.48a36.405 36.405 0 0 1-6.17-7.94 36.057 36.057 0 0 1-6.108 7.94 36.756 36.756 0 0 1-25.742 10.48c-.35 0-.702-.016-1.045-.027h-.011c-.348.017-.696.027-1.045.027a36.761 36.761 0 0 1-25.74-10.48 36.021 36.021 0 0 1-6.112-7.937zm-26.432 34.178-.003.011h.027c10.466.022 19.772 0 31.283 12.575 9.077-.95 18.54-1.426 28.032-1.41h.016c9.493-.017 18.956.472 28.033 1.417 11.525-12.57 20.817-12.542 31.282-12.57h.027v-.017c4.954 0 24.726 0 38.513 38.713l14.815 53.116c10.974 39.515-3.512 40.488-21.58 40.517-26.801-.988-41.633-20.459-41.633-39.916-14.833 2.434-32.142 3.651-49.444 3.651h-.005c-17.303 0-34.607-1.217-49.436-3.65 0 19.456-14.832 38.913-41.63 39.915-18.069-.027-32.557-1.002-21.58-40.503L61.422 176.1c13.787-38.713 33.573-38.713 38.512-38.713Zm59.33 30.424v.01c-.022.022-28.208 25.908-33.273 35.114l18.454-.739v16.093c0 .754 7.408.448 14.818.106h.011c7.412.343 14.818.648 14.818-.105v-16.092l18.455.736c-5.066-9.206-33.273-35.112-33.273-35.112v-.011l-.003.003z"),o(r,"color","currentColor"),$(r,"stroke-width",".264584"),$(r,"fill","currentColor"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","0 0 317.5 317.5")},m(e,s){T(e,t,s),p(t,r)},p:g,i:g,o:g,d(e){e&&i(t)}}}class Q1 extends H{constructor(t){super(),j(this,t,null,W1,D,{})}}function X1(a){let t,r;return{c(){t=x("svg"),r=x("path"),this.h()},l(e){t=b(e,"svg",{xmlns:!0,viewBox:!0});var s=d(t);r=b(s,"path",{d:!0,style:!0,transform:!0}),d(r).forEach(i),s.forEach(i),this.h()},h(){o(r,"d","M275.598 678.472c-83.743-2.063-146.853-5.895-174.503-10.597-34.955-5.945-60.54-23.152-73.822-49.65-8.424-16.804-13.058-33.047-16.666-58.416C-.019 485.099-2.48 370.87 4.825 291.388c5.96-64.854 18.897-110.334 37.05-130.248 13.669-14.995 35.463-26.413 58.125-30.453 34.752-6.195 150.626-10.108 299.043-10.099 148.94.01 264.385 3.877 300.094 10.055 21.203 3.667 40.24 13.187 55.18 27.594 8.357 8.06 11.446 12.698 16.487 24.762 28.827 68.991 37.743 248.799 18.12 365.44-6.763 40.204-16.82 70.375-28.85 86.56-6.14 8.26-18.376 17.73-30.887 23.906-14.293 7.054-23.725 9.57-40.687 10.85-36.18 2.734-96.513 5.68-159.792 7.804-38.756 1.301-211.973 1.926-253.11.913zM399.522 463.13c82.318-42.158 135.526-70.595 134.287-71.77-1.35-1.278-115.175-63.064-141.977-77.066-22.849-11.937-70.998-35.826-72.208-35.826-.267 0-.485 50.836-.485 112.968v112.968l20.335-10.468c11.184-5.757 38.205-19.62 60.048-30.806z"),$(r,"fill","currentColor"),$(r,"stroke-width","14.3541"),$(r,"stroke-linecap","round"),o(r,"transform","matrix(.025 0 0 .025 0 -3)"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","0 -3 20 20")},m(e,s){T(e,t,s),p(t,r)},p:g,i:g,o:g,d(e){e&&i(t)}}}class Y1 extends H{constructor(t){super(),j(this,t,null,X1,D,{})}}function J1(a){let t,r;return{c(){t=x("svg"),r=x("path"),this.h()},l(e){t=b(e,"svg",{xmlns:!0,viewBox:!0});var s=d(t);r=b(s,"path",{d:!0,style:!0,transform:!0}),d(r).forEach(i),s.forEach(i),this.h()},h(){o(r,"d","M515.79 799.012c-5.642-.832-9.725-3.35-12.684-7.819l-2.628-3.969-.544-70.406c-.529-68.406-.605-70.677-2.687-79.91-3.837-17.025-10.04-30.275-19.07-40.744-2.266-2.627-3.774-4.778-3.35-4.779 2.684-.009 32.561-5.1 39.391-6.712 51.542-12.168 86.263-34.068 109.62-69.143 19.159-28.767 28.615-61.768 31.24-109.014 2.07-37.259-2.547-63.78-15.88-91.205-5.551-11.419-11.898-21.452-19.546-30.9l-4.873-6.018 1.895-6.134c6.577-21.296 7.467-48.648 2.398-73.694-.745-3.685-2.934-11.736-4.864-17.893l-3.508-11.194-5.032-.629c-6.432-.804-19.197.895-29.86 3.974-20.517 5.925-40.559 15.662-65.093 31.626l-10.815 7.037-11.61-2.931c-28.624-7.226-53.243-9.994-88.768-9.979-34.549.014-59.754 2.896-88.236 10.086l-11.309 2.855-8.362-5.6c-36.847-24.68-76.256-39.695-97.288-37.067l-5.037.629-3.054 9.246c-1.68 5.085-4.199 14.643-5.597 21.241-2.251 10.622-2.548 14.188-2.594 31.134-.053 20.074.966 28.017 5.303 41.316l1.928 5.909-4.9 6.053c-16 19.762-27.512 44.045-32.472 68.494-7.25 35.729-2.88 90.535 10.073 126.359 22.818 63.106 71.036 97.722 153.982 110.547l13.619 2.106-4.649 5.19c-8.082 9.024-16.79 28.82-18.652 42.397-.342 2.495-1.102 5.123-1.689 5.842-1.46 1.787-11.734 5.678-22.12 8.377-12.176 3.165-32.02 3.211-42.879.1-20.132-5.767-33.868-17.15-49.259-40.818-15.918-24.48-32.058-37.212-53.59-42.278-11.132-2.62-25.076-.264-26.852 4.535-1.98 5.354 2.427 11.203 14.89 19.76 18.743 12.872 32.502 31.464 44.28 59.834 5.946 14.32 17.294 28.305 29.991 36.959 22.866 15.583 57.085 20.6 94.903 13.913 4.21-.744 8.207-1.361 8.881-1.371.981-.014 1.172 8.238.957 41.44l-.268 41.46-2.695 4.07c-3.504 5.294-8.725 7.7-16.764 7.728-5.089.018-8.317-.842-20.096-5.352-75.548-28.925-142.046-82.107-188.317-150.608-38.212-56.57-60.6-117.973-68.911-188.995-2.375-20.295-2.38-67.984-.011-88.038 6.976-59.039 23.356-110.741 50.314-158.82C121.856 84.488 246.49 6.58 382.775 1.096 480.48-2.836 569.66 26.707 647.59 88.822c16.379 13.054 46.308 43.004 59.462 59.503 52.604 65.982 81.809 137.745 90.738 222.967 1.864 17.796 1.556 64.75-.544 82.77-9.65 82.792-38.69 153.264-89.43 217.005-12.994 16.325-44.867 48.183-61.405 61.377-13.852 11.051-39.912 28.745-54.27 36.847-20.87 11.776-58.558 28.174-68.056 29.61-2.457.372-6.19.422-8.296.111z"),$(r,"fill","currentColor"),$(r,"stroke","none"),$(r,"stroke-width","14.3541"),$(r,"stroke-linecap","round"),o(r,"transform","scale(.025)"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","0 0 20 20")},m(e,s){T(e,t,s),p(t,r)},p:g,i:g,o:g,d(e){e&&i(t)}}}class K1 extends H{constructor(t){super(),j(this,t,null,J1,D,{})}}function tt(a){let t,r,e;return{c(){t=x("svg"),r=x("path"),e=x("path"),this.h()},l(s){t=b(s,"svg",{xmlns:!0,viewBox:!0});var n=d(t);r=b(n,"path",{d:!0,style:!0,transform:!0}),d(r).forEach(i),e=b(n,"path",{d:!0,style:!0,transform:!0}),d(e).forEach(i),n.forEach(i),this.h()},h(){o(r,"d","M200.309 315.446.617 139.234l-.07-19.378-.069-19.378h799.044l-.06 19.378-.06 19.378-199.524 176.077c-109.738 96.842-199.603 176.137-199.7 176.212-.098.074-90.04-79.16-199.87-176.077z"),$(r,"fill","currentColor"),$(r,"stroke","none"),$(r,"stroke-width","14.3541"),$(r,"stroke-linecap","round"),o(r,"transform","matrix(.025 0 0 .025 0 -2.5)"),o(e,"d","M.478 473.567c0-222.915.025-225.936 1.844-224.64 1.015.721 90.609 79.685 199.099 175.475 108.49 95.79 197.864 174.163 198.61 174.163.745 0 89.888-78.158 198.094-173.685 108.207-95.526 197.788-174.473 199.068-175.438l2.329-1.755V699.522H.478Z"),$(e,"fill","currentColor"),$(e,"stroke","none"),$(e,"stroke-width","14.3541"),$(e,"stroke-linecap","round"),o(e,"transform","matrix(.025 0 0 .025 0 -2.5)"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","0 -2.5 20 20")},m(s,n){T(s,t,n),p(t,r),p(t,e)},p:g,i:g,o:g,d(s){s&&i(t)}}}class et extends H{constructor(t){super(),j(this,t,null,tt,D,{})}}function rt(a){let t,r;return{c(){t=x("svg"),r=x("path"),this.h()},l(e){t=b(e,"svg",{xmlns:!0,viewBox:!0});var s=d(t);r=b(s,"path",{d:!0,style:!0,transform:!0}),d(r).forEach(i),s.forEach(i),this.h()},h(){o(r,"d","M228.708 719.021c-64.682-3.542-128.056-19.933-184.661-47.761C31.32 665.003 6.899 651.627 5.07 649.91c-.368-.346 13.842-.629 31.58-.629 35.28 0 45.966-.934 71.005-6.206 46.215-9.731 90.061-28.948 126.306-55.359l10.04-7.315-11.953-1.15c-29.289-2.816-53.905-11.533-78.43-27.773-14.979-9.918-34.156-28.995-43.91-43.68-6.932-10.434-13.444-23.067-17.28-33.523l-2.066-5.63 3.144.643c12.871 2.631 34.321 2.85 50.845.516 8.179-1.155 20.038-3.82 19.48-4.378-.23-.23-4.89-1.624-10.355-3.098-59.63-16.083-104.55-63.032-117.479-122.785-1.687-7.796-4.298-32.3-3.526-33.093.132-.137 3.903 1.468 8.38 3.566 17.22 8.07 39.163 13.878 56.81 15.037 4.97.326 9.037.366 9.037.088s-2.907-2.634-6.46-5.237c-29.565-21.657-50.25-51.41-60.408-86.89-8.44-29.482-7.593-62.256 2.388-92.345 3.316-9.996 12.367-29.71 13.596-29.615.354.028 2.797 2.684 5.429 5.903 7.92 9.687 31.774 33.848 44.183 44.75 32.064 28.172 64.997 50.176 103.185 68.942 41.78 20.53 85.74 34.745 129.999 42.037 17.686 2.913 43.165 5.782 51.357 5.782h4.532l-1.276-5.98c-6.776-31.761-1.944-68.88 13-99.862 14.82-30.726 42.546-58.89 73.092-74.248 34.14-17.165 72.36-22.047 109.68-14.01 28.291 6.093 56.14 20.558 76.614 39.794 4.061 3.815 8.205 6.938 9.208 6.938 3.306 0 31.193-7.418 42.407-11.28 17.076-5.881 27.926-10.454 43.972-18.532 8.132-4.094 14.914-7.315 15.07-7.159.459.459-4.353 11.846-8.436 19.968-10.805 21.489-27.663 41.564-47.075 56.056-4.837 3.61-10.194 7.375-11.904 8.364-3.595 2.08-4.084 3.548-.957 2.87 1.184-.256 5.598-.945 9.808-1.531 20.21-2.813 44.692-9.182 66.026-17.176 7.024-2.633 13.057-4.786 13.406-4.786.35 0-.998 2.26-2.994 5.024-18.236 25.238-44.624 52.054-70.323 71.464l-5.805 4.385.11 16.74c.82 123.896-52.223 249.563-142.174 336.837-25.597 24.834-50.51 44.045-81.502 62.85-12.834 7.787-48.773 25.506-63.368 31.243-40.95 16.093-84.083 26.263-130.638 30.801-14.836 1.446-58.196 2.523-71.733 1.782z"),$(r,"fill","CurrentColor"),$(r,"stroke-width","14.3541"),$(r,"stroke-linecap","round"),o(r,"transform","matrix(.025 0 0 .025 0 -2)"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","0 -2 20 20")},m(e,s){T(e,t,s),p(t,r)},p:g,i:g,o:g,d(e){e&&i(t)}}}class st extends H{constructor(t){super(),j(this,t,null,rt,D,{})}}function nt(a){let t,r;return{c(){t=x("svg"),r=x("path"),this.h()},l(e){t=b(e,"svg",{xmlns:!0,viewBox:!0});var s=d(t);r=b(s,"path",{d:!0,style:!0,transform:!0}),d(r).forEach(i),s.forEach(i),this.h()},h(){o(r,"d","M460.287 798.422c-1.579-.184-6.962-.793-11.962-1.353-13.23-1.48-35.226-6.037-48.369-10.02-51.885-15.724-93.053-45.932-121.24-88.963-15.499-23.659-24.657-46.198-31.586-77.732-2.043-9.297-2.056-10.156-2.37-155.043l-.315-145.694h-84.158v-48.834c0-45.653.11-48.87 1.675-49.403 23.499-7.994 49.562-22.017 70.396-37.877 36.973-28.145 67.063-73.569 81.362-122.827 4.315-14.86 7.81-30.73 9.781-44.408C325.289 3.864 325.918 2.2 329.307.91 330.732.37 356.113 0 391.928 0h60.225v200H618.66V319.617H452.153v132.41c0 140.514-.008 140.24 4.45 154.193 5.408 16.922 17.417 31.408 31.914 38.496 9.665 4.725 16.56 6.597 29.303 7.955 19.348 2.06 49.09-1.891 72.94-9.693 4.918-1.61 9.045-2.787 9.17-2.617.127.17 9.068 25.618 19.87 56.552l19.641 56.243-5.51 5.101c-18.559 17.182-66.974 34.04-112.878 39.303-11.683 1.339-51.79 1.908-60.766.862z"),$(r,"fill","currentColor"),$(r,"stroke-width","14.3541"),$(r,"stroke-linecap","round"),o(r,"transform","translate(-4) scale(.025)"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","-4 0 20 20")},m(e,s){T(e,t,s),p(t,r)},p:g,i:g,o:g,d(e){e&&i(t)}}}class at extends H{constructor(t){super(),j(this,t,null,nt,D,{})}}function lt(a){let t,r;return{c(){t=x("svg"),r=x("path"),this.h()},l(e){t=b(e,"svg",{xmlns:!0,viewBox:!0});var s=d(t);r=b(s,"path",{d:!0,style:!0}),d(r).forEach(i),s.forEach(i),this.h()},h(){o(r,"d","m188.274 42.61-7.047 12.207a488.528 488.528 0 0 0-22.89-.69 488.528 488.528 0 0 0-22.166 1.939l-6.84-11.85a488.528 488.528 0 0 0-55.825 4.885 488.528 488.528 0 0 0-13.281 3.559 473.967 473.967 0 0 0-6.633 14.224 473.967 473.967 0 0 0-17.136 36.748 473.967 473.967 0 0 0-21.383 79.803 473.967 473.967 0 0 0-.502 5.731 473.967 473.967 0 0 0-1.046 11.963 473.967 473.967 0 0 0-4.333 49.526 337.085 337.085 0 0 0 2.89 1.817 337.085 337.085 0 0 0 55.548 19.437 337.085 337.085 0 0 0 15.7 5.493 337.085 337.085 0 0 0 24.667 2.78l17.969-42.147a290.553 290.553 0 0 1-32.282-3.637 290.553 290.553 0 0 1-5.924-2.073l5.449-10.714a290.553 290.553 0 0 0 .475.167 290.553 290.553 0 0 0 37.416 4.216c9.026 1.45 18.115.672 27.238 1.266 9.123-.594 18.213.184 27.24-1.267a290.553 290.553 0 0 0 37.414-4.215 290.553 290.553 0 0 0 .476-.167l5.448 10.714a290.553 290.553 0 0 1-5.924 2.073 290.553 290.553 0 0 1-32.28 3.637l17.969 42.146a337.085 337.085 0 0 0 24.665-2.779 337.085 337.085 0 0 0 15.7-5.493 337.085 337.085 0 0 0 55.548-19.437 337.085 337.085 0 0 0 3.714-2.334 473.967 473.967 0 0 0-.445-14.16 473.967 473.967 0 0 0-2.802-29.644 473.967 473.967 0 0 0-.922-5.825 473.967 473.967 0 0 0-1.818-11.478 473.967 473.967 0 0 0-1.918-12.105 473.967 473.967 0 0 0-6.495-29.058 473.967 473.967 0 0 0-8.307-28.593 473.967 473.967 0 0 0-10.086-28.015A473.967 473.967 0 0 0 264.6 66.036a473.967 473.967 0 0 0-.909-2.103 473.967 473.967 0 0 0-6.03-11.834 488.528 488.528 0 0 0-11.262-2.418 488.528 488.528 0 0 0-29.174-4.44 488.528 488.528 0 0 0-28.95-2.63Zm-29.936 50.932.249.49-.248.429-.25-.431zm-52.813 34.939a29.092 33.981 0 0 1 29.092 33.98 29.092 33.981 0 0 1-29.092 33.982 29.092 33.981 0 0 1-29.091-33.981 29.092 33.981 0 0 1 29.091-33.981zm106.45 0a29.092 33.981 0 0 1 29.091 33.98 29.092 33.981 0 0 1-29.091 33.982 29.092 33.981 0 0 1-29.092-33.981 29.092 33.981 0 0 1 29.092-33.981z"),$(r,"fill","currentColor"),$(r,"stroke","none"),$(r,"stroke-width","2.64584"),$(r,"stroke-linecap","round"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","0 0 317.5 317.5")},m(e,s){T(e,t,s),p(t,r)},p:g,i:g,o:g,d(e){e&&i(t)}}}class ot extends H{constructor(t){super(),j(this,t,null,lt,D,{})}}function ct(a){let t,r,e;return{c(){t=x("svg"),r=x("path"),e=x("path"),this.h()},l(s){t=b(s,"svg",{xmlns:!0,viewBox:!0});var n=d(t);r=b(n,"path",{d:!0,style:!0,transform:!0}),d(r).forEach(i),e=b(n,"path",{d:!0,style:!0,transform:!0}),d(e).forEach(i),n.forEach(i),this.h()},h(){o(r,"d","M377.99 601.811c-85.418-8.98-155.955-70.309-176.998-153.89-4.158-16.511-5.58-28.855-5.58-48.4 0-25.53 3.045-43.642 11.356-67.538C228.11 270.616 280.8 221.304 343.663 203.86c54.28-15.062 112.322-7.248 160.165 21.563 26.488 15.952 49.354 38.159 66.955 65.028 10.294 15.713 20.872 40.22 25.956 60.134 7.511 29.419 7.511 68.454 0 97.873-9.261 36.273-27.452 68.1-54.085 94.629-33.3 33.168-74.174 52.894-120.94 58.365-12.98 1.518-31.272 1.669-43.724.36zm48.085-72.119c54.128-12.028 94.81-54.275 104.045-108.047 1.896-11.044 1.896-33.203 0-44.247-9.234-53.767-50.011-96.11-104.045-108.037-3.923-.866-13.795-1.756-22.726-2.049-24.994-.818-41.785 2.748-63.636 13.517-14.868 7.328-25.784 15.364-37.375 27.513-18.02 18.888-29.888 42.17-34.528 67.735-2.22 12.228-2.22 34.661 0 46.89 5.924 32.635 24.437 62.57 51.274 82.91 15.171 11.498 37.895 21.204 57.95 24.753 10.127 1.793 39.262 1.235 49.04-.938zM600.081 233.379c-16.03-3.76-30.122-18.043-34.541-35.009-6.233-23.927 9.398-49.734 34.107-56.31 31.734-8.446 63.66 20.217 58.348 52.384-2.996 18.142-16.483 33.192-34.484 38.48-5.636 1.654-17.344 1.882-23.43.455z"),$(r,"fill","currentColor"),$(r,"stroke-width","14.3541"),$(r,"stroke-linecap","round"),o(r,"transform","scale(.025)"),o(e,"d","M411.005 799.325c-59.956-.524-178.888-5.156-203.35-7.921-47.965-5.421-85.9-19.448-119.034-44.016-9.8-7.267-26.397-23.263-34.273-33.034-12.604-15.637-24.46-35.917-31.799-54.392C8.124 623.65.53 532.456.49 395.117c-.018-65.17 2.427-156.863 4.834-181.241 5.802-58.785 24.973-104.43 58.848-140.112 37.542-39.544 85.163-60.652 151.139-66.992C245.661 3.856 347.966.862 417.703.85c98.1-.018 152.896 3.756 203.35 14.005C675.758 25.967 708.64 44.268 740.49 81.33c36.734 42.743 50.914 91.651 57.298 197.618 1.571 26.09 1.562 145.622-.015 189.474-3.209 89.22-4.555 113.383-7.44 133.493-6.172 43.044-23.606 85.295-47.403 114.88-33.528 41.681-84.78 64.993-165.897 75.454-41.64 5.37-96.024 7.689-166.03 7.077zm83.732-71.097c106.27-3.868 157.642-17.82 188.912-51.304 8.556-9.162 14.085-17.505 20.635-31.138 13.63-28.371 17.514-49.635 20.069-109.9 3.402-80.226 3.837-99.506 3.856-170.814.024-87.37-1.354-115.002-7.71-154.546-7.145-44.465-17.79-68.32-40.567-90.909-24.25-24.051-53.814-36.79-97.635-42.07-10.272-1.237-84.644-4.408-137.38-5.856-53.096-1.458-158.167-.651-185.05 1.421-50.923 3.926-83.67 10.389-106.804 21.077-12.051 5.568-23.076 13.54-34.443 24.909-20.713 20.714-32.69 44.034-39.095 76.117-4.582 22.956-5.63 41.605-7.37 131.1-2.753 141.668 2.629 262.093 13.391 299.638 5.833 20.348 17.99 39.961 34.481 55.633 24.207 23.004 53.447 35.114 96.375 39.918 14.956 1.674 119.074 5.875 174.507 7.042 31.606.665 80.972.514 103.828-.318z"),$(e,"fill","currentColor"),$(e,"stroke-width","14.3541"),$(e,"stroke-linecap","round"),o(e,"transform","scale(.025)"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","0 0 20 20")},m(s,n){T(s,t,n),p(t,r),p(t,e)},p:g,i:g,o:g,d(s){s&&i(t)}}}class it extends H{constructor(t){super(),j(this,t,null,ct,D,{})}}function ut(a){let t,r;return{c(){t=x("svg"),r=x("path"),this.h()},l(e){t=b(e,"svg",{xmlns:!0,viewBox:!0});var s=d(t);r=b(s,"path",{d:!0,style:!0}),d(r).forEach(i),s.forEach(i),this.h()},h(){o(r,"d","M176.842 12.826V206.88h-.03a42.493 42.493 0 0 1-2.05 12.94 42.5 42.5 0 1 1-23.133-51.959c.821.386 1.63.798 2.425 1.236v-57.285a96.931 96.931 0 0 0-5.917-1.069A96.932 96.932 0 0 0 39.275 225.596a96.93 96.93 0 0 0 191.997-18.91v-89.963c3.01 2.314 6.121 4.493 9.325 6.53a127.51 127.51 0 0 0 41.613 15.145c.35.032.701.063 1.052.092V82.384a73.08 73.08 0 0 1-10.618-3.716 73.08 73.08 0 0 1-41.372-65.842z"),$(r,"fill","currentColor"),$(r,"stroke-width","7.28236"),$(r,"stroke-linecap","round"),o(t,"xmlns","http://www.w3.org/2000/svg"),o(t,"viewBox","0 0 317.5 317.5")},m(e,s){T(e,t,s),p(t,r)},p:g,i:g,o:g,d(e){e&&i(t)}}}class ft extends H{constructor(t){super(),j(this,t,null,ut,D,{})}}function ht(a){let t,r;return t=new Q1({}),{c(){C(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function mt(a){let t,r;return t=new Y1({}),{c(){C(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function dt(a){let t,r;return t=new K1({}),{c(){C(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function $t(a){let t,r;return t=new et({}),{c(){C(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function gt(a){let t,r;return t=new st({}),{c(){C(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function pt(a){let t,r;return t=new at({}),{c(){C(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function _t(a){let t,r;return t=new ot({}),{c(){C(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function vt(a){let t,r;return t=new it({}),{c(){C(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function wt(a){let t,r;return t=new ft({}),{c(){C(t.$$.fragment)},l(e){y(t.$$.fragment,e)},m(e,s){B(t,e,s),r=!0},i(e){r||(v(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){z(t,e)}}}function kt(a){let t,r,e,s,n,u,l,c,h,f,k,Z,_,M,L,V,I,W,P,Q,R,X,U,G;return r=new F1({props:{class:"justify-self-start w-12 h-12",routes:a[0]}}),n=new q({props:{href:"https://ciosai.itch.io/",$$slots:{default:[ht]},$$scope:{ctx:a}}}),l=new q({props:{href:"https://youtube.com/@ciosai_tw?si=fzOsuP8yGvObEPPl",$$slots:{default:[mt]},$$scope:{ctx:a}}}),h=new q({props:{href:"https://github.com/CIOSAI",$$slots:{default:[dt]},$$scope:{ctx:a}}}),k=new q({props:{href:"mailto:jyinteractive.tw@gmail.com",$$slots:{default:[$t]},$$scope:{ctx:a}}}),_=new q({props:{href:"https://twitter.com/CIOSAI_tw",$$slots:{default:[gt]},$$scope:{ctx:a}}}),L=new q({props:{href:"https://www.tumblr.com/ciosai-tw",$$slots:{default:[pt]},$$scope:{ctx:a}}}),I=new q({props:{href:"https://discord.gg/ctADDDX4zt",$$slots:{default:[_t]},$$scope:{ctx:a}}}),P=new q({props:{href:"https://www.instagram.com/ciosai/",$$slots:{default:[vt]},$$scope:{ctx:a}}}),R=new q({props:{href:"https://www.tiktok.com/@ciosai_tw?is_from_webapp=1&sender_device=pc",$$slots:{default:[wt]},$$scope:{ctx:a}}}),U=new R1({props:{class:"justify-self-end w-12 h-12"}}),{c(){t=F("div"),C(r.$$.fragment),e=A(),s=F("div"),C(n.$$.fragment),u=A(),C(l.$$.fragment),c=A(),C(h.$$.fragment),f=A(),C(k.$$.fragment),Z=A(),C(_.$$.fragment),M=A(),C(L.$$.fragment),V=A(),C(I.$$.fragment),W=A(),C(P.$$.fragment),Q=A(),C(R.$$.fragment),X=A(),C(U.$$.fragment),this.h()},l(m){t=N(m,"DIV",{class:!0});var E=d(t);y(r.$$.fragment,E),e=O(E),s=N(E,"DIV",{class:!0});var S=d(s);y(n.$$.fragment,S),u=O(S),y(l.$$.fragment,S),c=O(S),y(h.$$.fragment,S),f=O(S),y(k.$$.fragment,S),Z=O(S),y(_.$$.fragment,S),M=O(S),y(L.$$.fragment,S),V=O(S),y(I.$$.fragment,S),W=O(S),y(P.$$.fragment,S),Q=O(S),y(R.$$.fragment,S),S.forEach(i),X=O(E),y(U.$$.fragment,E),E.forEach(i),this.h()},h(){o(s,"class","flex flex-wrap justify-between items-center gap-1 dark:bg-indigo-900 bg-slate-200 p-2"),o(t,"class","z-10 sm:sticky top-0 p-4 w-full grid grid-cols-3 gap-4")},m(m,E){T(m,t,E),B(r,t,null),p(t,e),p(t,s),B(n,s,null),p(s,u),B(l,s,null),p(s,c),B(h,s,null),p(s,f),B(k,s,null),p(s,Z),B(_,s,null),p(s,M),B(L,s,null),p(s,V),B(I,s,null),p(s,W),B(P,s,null),p(s,Q),B(R,s,null),p(t,X),B(U,t,null),G=!0},p(m,[E]){const S={};E&2&&(S.$$scope={dirty:E,ctx:m}),n.$set(S);const K={};E&2&&(K.$$scope={dirty:E,ctx:m}),l.$set(K);const t1={};E&2&&(t1.$$scope={dirty:E,ctx:m}),h.$set(t1);const e1={};E&2&&(e1.$$scope={dirty:E,ctx:m}),k.$set(e1);const r1={};E&2&&(r1.$$scope={dirty:E,ctx:m}),_.$set(r1);const s1={};E&2&&(s1.$$scope={dirty:E,ctx:m}),L.$set(s1);const n1={};E&2&&(n1.$$scope={dirty:E,ctx:m}),I.$set(n1);const a1={};E&2&&(a1.$$scope={dirty:E,ctx:m}),P.$set(a1);const l1={};E&2&&(l1.$$scope={dirty:E,ctx:m}),R.$set(l1)},i(m){G||(v(r.$$.fragment,m),v(n.$$.fragment,m),v(l.$$.fragment,m),v(h.$$.fragment,m),v(k.$$.fragment,m),v(_.$$.fragment,m),v(L.$$.fragment,m),v(I.$$.fragment,m),v(P.$$.fragment,m),v(R.$$.fragment,m),v(U.$$.fragment,m),G=!0)},o(m){w(r.$$.fragment,m),w(n.$$.fragment,m),w(l.$$.fragment,m),w(h.$$.fragment,m),w(k.$$.fragment,m),w(_.$$.fragment,m),w(L.$$.fragment,m),w(I.$$.fragment,m),w(P.$$.fragment,m),w(R.$$.fragment,m),w(U.$$.fragment,m),G=!1},d(m){m&&i(t),z(r),z(n),z(l),z(h),z(k),z(_),z(L),z(I),z(P),z(R),z(U)}}}function xt(a){return[[{text:"Home",url:Y?Y:"/"},{text:"Illustrations",url:`${Y}/illustration`}]]}class bt extends H{constructor(t){super(),j(this,t,xt,kt,D,{})}}function Et(a){let t,r,e,s,n;r=new bt({});const u=a[1].default,l=g1(u,a,a[0],null);return{c(){t=F("main"),C(r.$$.fragment),e=A(),s=F("div"),l&&l.c(),this.h()},l(c){t=N(c,"MAIN",{class:!0});var h=d(t);y(r.$$.fragment,h),e=O(h),s=N(h,"DIV",{class:!0});var f=d(s);l&&l.l(f),f.forEach(i),h.forEach(i),this.h()},h(){o(s,"class","px-16 py-4"),o(t,"class","bg-slate-200 dark:bg-indigo-900")},m(c,h){T(c,t,h),B(r,t,null),p(t,e),p(t,s),l&&l.m(s,null),n=!0},p(c,[h]){l&&l.p&&(!n||h&1)&&p1(l,u,c,c[0],n?v1(u,c[0],h,null):_1(c[0]),null)},i(c){n||(v(r.$$.fragment,c),v(l,c),n=!0)},o(c){w(r.$$.fragment,c),w(l,c),n=!1},d(c){c&&i(t),z(r),l&&l.d(c)}}}function Ct(a,t,r){let{$$slots:e={},$$scope:s}=t;return a.$$set=n=>{"$$scope"in n&&r(0,s=n.$$scope)},[s,e]}class St extends H{constructor(t){super(),j(this,t,Ct,Et,D,{})}}export{St as component,Lt as universal};