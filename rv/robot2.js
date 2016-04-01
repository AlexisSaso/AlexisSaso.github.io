function setup(){
  var esferaForma = new THREE.SphereGeometry(3);
  var cilindroForma = new THREE.CylinderGeometry(2, 0.5, 0.5);
  var rectanguloForma = new THREE.BoxGeometry(0.5,1,2);
  
  var cuerpo = new THREE.Mesh(esferaForma);
  var brazoI = new THREE.Mesh(cilindroForma);
  var brazoD = new THREE.Mesh(cilindroForma);
  var pieI = new THREE.Mesh(rectanguloForma);
  var pieD = new THREE.Mesh(rectanguloForma);
  
  brazoI.position.x=2.5;
  brazoD.position.x=-2.5;
  pieD.position.y=-3;
  pieD.position.x=1;
  pieI.position.y=-3;
  pieI.position.x=-1;
  pieD.position.z=1;
  pieI.position.z=1;
  
  step  =.01;
  
  escena = new THREE.Scene();
  escena.add(malla);
   escena.add(pieD);
    escena.add(pieI);
    

function loop(){
requestAnimationFrame( loop );
renderer.render (escena, camara);

if (Math.abs(pieD.rotation.z) > .5 )
  step = -step;
pieD.rotation.z += step;
pieI.rotation.z -= step;
}

var escena, camara, renderer;
var step, pieD, pieI;

setup();
loop();
