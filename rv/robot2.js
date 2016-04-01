function Completo(){
  THREE.Object3D.call(this);
  this.cilindroForma = new THREE.CylinderGeometry(0.5,0.5,4);
  this.rectanguloForma = new THREE.BoxGeometry(0.5,1,2);
  
  this.cuerpo = new THREE.Mesh(new THREE.SphereGeometry(3););
  this.brazoI = new THREE.Mesh(cilindroForma);
  this.brazoD = new THREE.Mesh(cilindroForma);
  this.pieI = new THREE.Mesh(rectanguloForma);
  this.pieD = new THREE.Mesh(rectanguloForma);
  
  this.brazoI.position.x=2.3;
  this.brazoD.position.x=-2.3;
  this.pieD.position.y=-3;
  this.pieD.position.x=1;
  this.pieI.position.y=-3;
  this.pieI.position.x=-1;
  this.pieD.position.z=1;
  this.pieI.position.z=1;
  this.brazoD.rotation.z=1.5;
  this.brazoI.rotation.z=-1.5;
  
  this.add(this.pieI)
  this.add(this.pieD)
  this.add(this.brazoI)
  this.add(this.brazoI)
  this.add(this.cuerpo)
}

Completo.prototype = new THREE.Object3D();

function setup(){
  kirby = new Completo();
  
  step  =0.01;
  stepbrazo = 0.017;
  
  escena = new THREE.Scene();
  escena.add(kirby);
    
 camara = new THREE.PerspectiveCamera();
  camara.position.z = 30;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight*.95, window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
}
function loop(){
requestAnimationFrame( loop );
renderer.render (escena, camara);
if (Math.abs(kirby.pieD.rotation.x) > .3 )
  step = -step;

if (Math.abs(kirby.brazoD.rotation.z) > 2 || Math.abs(kirby.brazoD.rotation.z) < 1)
  stepbrazo = -stepbrazo;

kirby.brazoD.rotation.z += stepbrazo;
kirby.brazoI.rotation.z += stepbrazo;
kirby.pieD.rotation.x += step;
kirby.pieI.rotation.x -= step;
}

var escena, camara, renderer;
var step, stepbrazo;

setup();
loop();
