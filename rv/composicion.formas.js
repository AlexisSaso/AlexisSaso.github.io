function Setup(){
  var EsferaForma = new THREE.SphereGeometry(1);
  var CilindroForma = new THREE.CylinderGeometry(0.5, 0.5, 4);
  
  var esfera1 = new THREE.Mesh(EsferaForma);
  var esfera2 = new THREE.Mesh(EsferaForma);
  var cilindro = new THREE.Mesh(CilindroForma);
  
  esfera1.position.y=2;
  esfera2.position.y=-2;
  
  var forma = new THREE.Geometry();
  
  THREE.GeometryUtils.merge( forma, esfera1);
  THREE.GeometryUtils.merge( forma, esfera2);
  THREE.GeometryUtils.merge( forma, cilindro);
  
  malla = new THRRE.Mesh(forma);
  
  escena = new THREE.Scene();
  escena.add(malla);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 10;
  
  renderer = new THREEWebGLRenderer();
  renderer.setSize( window.InnerHeight*.95, window.InnerHeight*.95);
  document.body.appendChild(renderer.domElement);
  }
  
  function Loop(){
  requestAnimationFrame(loop);
  
  malla.rotation.x += 0.01;
  malla.rotation.y += 0.01;
  
  renderer.render( escena, camara);
  }
  
  var escena, camara, renderer, malla;
  
  Setup();
  Loop();
