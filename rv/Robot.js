function setup(){
  var esferaForma = new THREE.SphereGeometry(3);
  var cilindroForma = new THREE.CylinderGeometry(0.5, 0.5, 3);
  var rectanguloForma = new THREE.BoxGeometry(1,3,1);
  
  var cuerpo = new THREE.Mesh(esferaForma);
  var brazoI = new THREE.Mesh(cilindroForma);
  var brazoD = new THREE.Mesh(cilindroForma);
  var pieI = new THREE.Mesh(rectanguloForma);
  var pieD = new THREE.Mesh(rectanguloForma);
  
  brazoI.position.x=2.5;
  brazoD.position.x=-2.5;
  pieD.position.y=-2;
  pieD.position.x=0.5;
  pieI.position.y=-2;
  pieI.position.x=-0.5;
  
  
  var forma = new THREE.Geometry();
  
  THREE.GeometryUtils.merge( forma, cuerpo);
  THREE.GeometryUtils.merge( forma, brazoI);
  THREE.GeometryUtils.merge( forma, brazoD);
  THREE.GeometryUtils.merge( forma, pieI);
  THREE.GeometryUtils.merge( forma, pieD);
  
  malla = new THREE.Mesh(forma);
  
  escena = new THREE.Scene();
  escena.add(malla);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 10;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight*.95, window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  }
  
  function loop(){
  requestAnimationFrame(loop);
  
  //malla.rotation.x += 0.01;
  //malla.rotation.y += 0.01;
  
  renderer.render( escena, camara);
  }
  
  var escena, camara, renderer, malla;
  
  setup();
  loop();