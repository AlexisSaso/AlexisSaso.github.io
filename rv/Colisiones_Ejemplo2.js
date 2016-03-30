function setup(){
  cubo1 = new THREE.Mesh( new THREE.BoxGeometry( 1, 15, 1),
                          new THREE.MeshNormalMaterial());
  cubo2 = new THREE.Mesh( new THREE.BoxGeometry( 1, 15, 1),
                          new THREE.MeshNormalMaterial());
  cubo3 = new THREE.Mesh( new THREE.BoxGeometry( 15, 1, 1),
                          new THREE.MeshNormalMaterial());
  cubo4 = new THREE.Mesh( new THREE.BoxGeometry( 15, 1, 1),
                          new THREE.MeshNormalMaterial());
  pelota = new THREE.Mesh( new THREE.SphereGeometry( 0.5 ),
                          new THREE.MeshNormalMaterial());
                          
  cubo1.position.x = 7;
  cubo2.position.x = -7;
  cubo3.position.y = 7;
  cubo4.position.y = -7;
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 20;
  
    raycaster1 = new THREE.Raycaster( pelota.position, new THREE.Vector3(1,0,0));
    raycaster2 = new THREE.Raycaster( pelota.position, new THREE.Vector3(-1,0,0));
    raycaster3 = new THREE.Raycaster( pelota.position, new THREE.Vector3(0,1,0));
    raycaster4 = new THREE.Raycaster( pelota.position, new THREE.Vector3(0,-1,0));
  
  escena = new THREE.Scene();
  escena.add ( cubo1 );
  escena.add ( cubo2 );
  escena.add ( cubo3 );
  escena.add ( cubo4 );
  escena.add ( pelota );
  escena.add ( camara );
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight*.95,
                    window.innerHeight*.95 );
  document.body.appendChild( renderer.domElement );

  stepx = 0.1;
  stepy = 0.1;
}

function loop(){
  obstaculo1 = raycaster1.intersectObject( cubo1 );
  obstaculo2 = raycaster2.intersectObject( cubo2 );
  obstaculo3 = raycaster3.intersectObject( cubo3 );
  obstaculo4 = raycaster4.intersectObject( cubo4 );
  
  if ((obstaculo1.length > 0 && (obstaculo1[0].distance <= 0.5)) ||
      (obstaculo2.length > 0 && (obstaculo2[0].distance <= 0.5)))
      stepx= -stepx;
      
  if ((obstaculo3.length > 0 && (obstaculo1[0].distance <= 0.5)) ||
      (obstaculo4.length > 0 && (obstaculo2[0].distance <= 0.5)))
      stepy= -stepy;
      
  pelota.position.x += stepx;
  pelota.position.y += stepy;
  pelota.rotation.z += -stepx;
  raycaster1.set( pelota.position, new THREE.Vector3(1,0,0) );
  raycaster2.set( pelota.position, new THREE.Vector3(-1,0,0) );
  raycaster3.set( pelota.position, new THREE.Vector3(0,1,0) );
  raycaster4.set( pelota.position, new THREE.Vector3(0,-1,0) );
  
  renderer.render( escena, camara );
  requestAnimationFrame( loop );
}

var cubo1, cubo2, cubo3, cubo4, pelota, escena, camara, renderer;
var raycaster1, raycaster2, reycaster3, reycaster4, step;
var obstaculo1, obstaculo2, obstaculo3, obstaculo4;

setup();
loop();

//ejercicio malla del robot encerrarlo en un cuarto y tiene que detectar colisiones
