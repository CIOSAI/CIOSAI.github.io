<!-- Can be heavy on low end devices, don't use everywhere -->
<script lang="ts">
  import { onMount } from 'svelte';

  let width = 1080;
  let height = 1080;

  const frag_source = `
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
`;

  let draw = (dim:Array<number>, time:number)=>{};
  let canvas:HTMLCanvasElement;
  onMount(() => {
    let gl = canvas.getContext("webgl", { premultipliedAlpha: false });
    if (gl!==null) {
      let program: WebGLProgram;

      let vert_source = `
        attribute vec4 aVertexPosition;
        void main() {
          gl_Position = aVertexPosition;
        }
      `;
      let vert = gl.createShader(gl.VERTEX_SHADER)!;
      gl.shaderSource(vert, vert_source);
      gl.compileShader(vert);
      let frag = gl.createShader(gl.FRAGMENT_SHADER)!;
      gl.shaderSource(frag, frag_source);
      gl.compileShader(frag);

      program = gl.createProgram()!;
      gl.attachShader(program, vert);
      gl.attachShader(program, frag);
      gl.linkProgram(program);

      let buffer = gl.createBuffer()!;
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0
      ]), gl.STATIC_DRAW);

      gl.vertexAttribPointer(gl.getAttribLocation(program, "aVertexPosition"),
        2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(gl.getAttribLocation(program, "aVertexPosition"));

      gl.useProgram(program);

      let time_at_start = Date.now();
      draw = function (dim, time) {
        if (gl===null) return;
        gl.uniform1fv(gl.getUniformLocation(program, "u_time"), new Float32Array([(time-time_at_start)/1000]))
        gl.uniform2fv(gl.getUniformLocation(program, "u_res"), new Float32Array([dim[0], dim[1]]));

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
    }
  });

  setInterval(()=>{
    width = globalThis.outerWidth;
    height = globalThis.outerHeight;
    draw([width, height], Date.now());
  }, 50);
</script>

<canvas bind:this={canvas} id="bg" class="fixed top-0 left-0 w-full h-full pointer-events-none" width={globalThis.outerWidth} height={globalThis.outerHeight}></canvas>
