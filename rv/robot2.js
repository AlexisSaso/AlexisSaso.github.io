function Completo(){
  THREE.Object3D.call(this);
  
  this.cuerpo = new THREE.Mesh(new THREE.SphereGeometry(3),new THREE.MeshBasicMaterial({color:0xF706DB}));
  this.brazoI = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4),new THREE.MeshBasicMaterial({color:0xF706DB}));
  this.brazoD = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4),new THREE.MeshBasicMaterial({color:0xF706DB}));
  this.pieI = new THREE.Mesh(new THREE.BoxGeometry(0.5,1,2),new THREE.MeshBasicMaterial({color:0xF70E45}));
  this.pieD = new THREE.Mesh(new THREE.BoxGeometry(0.5,1,2),new THREE.MeshBasicMaterial({color:0xF70E45}));
  
  this.brazoI.position.z=2.3;
  this.brazoD.position.z=-2.3;
  this.pieD.position.y=-3;
  this.pieD.position.z=1;
  this.pieI.position.y=-3;
  this.pieI.position.z=-1;
  this.pieD.position.x=1;
  this.pieI.position.x=1;
  this.brazoD.rotation.y=1.5;
  this.brazoI.rotation.y=-1.5;
  
  this.add(this.pieI)
  this.add(this.pieD)
  this.add(this.brazoI)
  this.add(this.brazoD)
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
if (Math.abs(kirby.pieD.rotation.z) > .3 )
  step = -step;

if (Math.abs(kirby.brazoD.rotation.y) > 2 || Math.abs(kirby.brazoD.rotation.y) < 1)
  stepbrazo = -stepbrazo;

kirby.brazoD.rotation.y += stepbrazo;
kirby.brazoI.rotation.y += stepbrazo;
kirby.pieD.rotation.z += step;
kirby.pieI.rotation.z -= step;
kirby.rotation.x += 0.01;
kirby.rotation.y += 0.01;
}

var escena, camara, renderer;
var step, stepbrazo;

setup();
loop();
