function setup(){
  var esferaForma = new THREE.SphereGeometry(3);
  var cilindroForma = new THREE.CylinderGeometry(2, 0.5);
  var rectanguloForma = new THREE.BoxGeometry(0.5,1,2);
  
  var cuerpo = new THREE.Mesh(esferaForma);
  brazoI = new THREE.Mesh(cilindroForma);
  brazoD = new THREE.Mesh(cilindroForma);
  pieI = new THREE.Mesh(rectanguloForma);
  pieD = new THREE.Mesh(rectanguloForma);
  
  brazoI.position.x=2.5;
  brazoD.position.x=-2.5;
  pieD.position.y=-3;
  pieD.position.x=1;
  pieI.position.y=-3;
  pieI.position.x=-1;
  pieD.position.z=1;
  pieI.position.z=1;
  
  step  =0.01;
  stepbrazo = 0.01;
  
  escena = new THREE.Scene();
  escena.add(cuerpo);
  escena.add(pieD);
  escena.add(pieI);
  escena.add(brazoD);
  escena.add(brazoI);
    
 camara = new THREE.PerspectiveCamera();
  camara.position.z = 30;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight*.95, window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
}
function loop(){
requestAnimationFrame( loop );
renderer.render (escena, camara);
if (Math.abs(pieD.rotation.x) > .3 )
  step = -step;

if (Math.abs(brazoD.rotation.y) > .3 )
  stepbrazo = -stepbrazo;

brazoD.rotation.y += stepbrazo;
brazoI.rotation.y -= stepbrazo;
pieD.rotation.x += step;
pieI.rotation.x -= step;
}

var escena, camara, renderer;
var step, stepbrazo;
var pieD , pieI, brazoD, brazoI;
setup();
loop();
