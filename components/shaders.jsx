export let vertexShader = `
varying vec2 vUv;

void main() {
 
  vec3 newPosition = position ;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  vUv = uv;
}`;
export let _fragmentShader = `
varying vec2 vUv;

  void main() {
    
    gl_FragColor = vec4(vUv,0.5,1.0);

  }  
`;

export let vertexShader2 = `
varying vec2 vUv;

void main() {
 
  vec3 newPosition = position ;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  vUv = uv;
}`;
export let _fragmentShader2 = `
uniform float utime;
varying vec2 vUv;

  void main() {
    float transpa = abs(sin(utime));
    gl_FragColor = vec4(vUv,0.5,transpa);

  }  
`;