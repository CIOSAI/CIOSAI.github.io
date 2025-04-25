import{s as x,n as c,o as S,b as w}from"./scheduler.5bb7955e.js";import{S as F,i as R,g as y,h as T,j as P,f as m,k as l,a as E}from"./index.8d263f21.js";function V(a){let t;return{c(){t=y("canvas"),this.h()},l(o){t=T(o,"CANVAS",{id:!0,class:!0,width:!0,height:!0}),P(t).forEach(m),this.h()},h(){l(t,"id","bg"),l(t,"class","fixed top-0 left-0 w-full h-full pointer-events-none"),l(t,"width",globalThis.outerWidth),l(t,"height",globalThis.outerHeight)},m(o,i){E(o,t,i),a[1](t)},p:c,i:c,o:c,d(o){o&&m(t),a[1](null)}}}function C(a,t,o){let i=1080,f=1080;const v=`
precision mediump float;

uniform vec2 u_res;
uniform float u_time;

#define rot(n) mat2(cos(n),-sin(n),sin(n),cos(n))

float box(vec3 p) {
vec3 q = abs(p);
return max(max(q.x,q.y), q.z);
}

void main() {
    vec2 uv = gl_FragCoord.xy/u_res;
    uv -= 0.5;
    uv.x *= u_res.x/u_res.y;

    vec3 c = sin(vec3(0,1,2)+length(uv)*36.+u_time*4.)*0.5+0.5;

    float v=0.0;
    float td,ld;
    vec3 rd=normalize(vec3(uv,1.0)),
         ro=vec3(0),
         po=-ro;
    for(int i=1; i<32; i++){
      po = ro+rd*td;

      po.z -= 4.0;

      po.xz *= rot(u_time*2.+po.y*0.9);
      po.zy *= rot(u_time*3.+po.x*1.3);

      ld = max(0.015, box(po)-0.5);
      td += ld;

      if (td>999.) {
        break;
      }

      v += exp(1.-ld*16.0)/float(i);
    }

    gl_FragColor = vec4(pow(c,vec3(.454545)),(1.0-smoothstep(0.95,1.0,v))*v*0.3);
}
`;let h=(e,r)=>{},n;S(()=>{let e=n.getContext("webgl",{premultipliedAlpha:!1});if(e!==null){let r,p=`
        attribute vec4 aVertexPosition;
        void main() {
          gl_Position = aVertexPosition;
        }
      `,s=e.createShader(e.VERTEX_SHADER);e.shaderSource(s,p),e.compileShader(s);let u=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(u,v),e.compileShader(u),r=e.createProgram(),e.attachShader(r,s),e.attachShader(r,u),e.linkProgram(r);let _=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,_),e.bufferData(e.ARRAY_BUFFER,new Float32Array([1,1,-1,1,1,-1,-1,-1]),e.STATIC_DRAW),e.vertexAttribPointer(e.getAttribLocation(r,"aVertexPosition"),2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(e.getAttribLocation(r,"aVertexPosition")),e.useProgram(r);let b=Date.now();h=function(d,A){e!==null&&(e.uniform1fv(e.getUniformLocation(r,"u_time"),new Float32Array([(A-b)/1e3])),e.uniform2fv(e.getUniformLocation(r,"u_res"),new Float32Array([d[0],d[1]])),e.drawArrays(e.TRIANGLE_STRIP,0,4))}}}),setInterval(()=>{i=globalThis.outerWidth,f=globalThis.outerHeight,h([i,f],Date.now())},50);function g(e){w[e?"unshift":"push"](()=>{n=e,o(0,n)})}return[n,g]}class k extends F{constructor(t){super(),R(this,t,C,V,x,{})}}export{k as F};
