function Completo(){
  THREE.Object3D.call(this);
  THREE.ImageUtils.crossOrigin = '';
  var cara = THREE.ImageUtils.loadTexture('http://AlexisSaso.github.io/robotkirby.jpg');
  var brazos = THREE.ImageUtils.loadTexture('http://AlexisSaso.github.io/rv/Color_kirby.jpg');
  var pies = THREE.ImageUtils.loadTexture('http://AlexisSaso.github.io/rv/Zapato.jpg');  
  
  this.cuerpo = new THREE.Mesh(new THREE.SphereGeometry(3),new THREE.MeshPhongMaterial({map:cara}));
  this.brazoI = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4),new THREE.MeshPhongMaterial({map:brazos}));
  this.brazoD = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4),new THREE.MeshPhongMaterial({map:brazos}));
  this.pieI = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,0.5),new THREE.MeshPhongMaterial({map:pies}));
  this.pieD = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,0.5),new THREE.MeshPhongMaterial({map:pies}));
  
  this.brazoI.position.z=2.3;
  this.brazoD.position.z=-2.3;
  this.pieD.position.y=-1;
  this.pieD.position.z=1;
  this.pieI.position.y=-1;
  this.pieI.position.z=-1;
  this.pieD.position.x=1;
  this.pieI.position.x=1;
  this.brazoD.rotation.x=1.5;
  this.brazoI.rotation.x=-1.5;
   this.pieD.rotation.x=Math.PI/2;
  this.pieI.rotation.x=Math.PI/2;
  
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
  
  luzPuntual = new THREE.PointLight(0xffffff);
  luzPuntual.position.x=30;
  luzPuntual.position.y=30;
  luzPuntual.position.z=30;
  
  escena = new THREE.Scene();
  escena.add(kirby);
  escena.add(luzPuntual);
    
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

if (Math.abs(kirby.brazoD.rotation.x) > 2 || Math.abs(kirby.brazoD.rotation.x) < 1)
  stepbrazo = -stepbrazo;

kirby.brazoD.rotation.x += stepbrazo;
kirby.brazoI.rotation.x += stepbrazo;
//kirby.pieD.rotation.z += step;
//kirby.pieI.rotation.z -= step;

kirby.rotation.x += 0.01;
kirby.rotation.y += 0.01;
}

var escena, camara, renderer;
var step, stepbrazo;

setup();
loop();
