function Sensor(position,direction){
 THREE.Raycaster.call(this,position,direction);
 this.colision=false;
}
Sensor.prototype=new THREE.Raycaster();

function kirby(x=0, y=0){
  Agent.call(this,x,y);
  THREE.ImageUtils.crossOrigin = '';
  var cara = THREE.ImageUtils.loadTexture('http://AlexisSaso.github.io/rv/Cara_Kirby.jpg');
  var brazos = THREE.ImageUtils.loadTexture('http://AlexisSaso.github.io/rv/Color.jpg');
  var pies = THREE.ImageUtils.loadTexture('http://AlexisSaso.github.io/rv/Zapato.jpg');  
  
  this.cuerpo = new THREE.Mesh(new THREE.SphereGeometry(3,100,100),new THREE.MeshPhongMaterial({map:cara}));
  this.brazoI = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4),new THREE.MeshPhongMaterial({map:brazos}));
  this.brazoD = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4),new THREE.MeshPhongMaterial({map:brazos}));
  this.pieI = new THREE.Mesh(new THREE.CylinderGeometry(0.5,1,0.5),new THREE.MeshPhongMaterial({map:pies}));
  this.pieD = new THREE.Mesh(new THREE.CylinderGeometry(0.5,1,0.5),new THREE.MeshPhongMaterial({map:pies}));
 
  this.luzr=new THREE.SpotLight(0xffffff,4,1000,0.3);
 this.luzr.target.updateMatrixWorld();
 this.luzr.target.position.set(10,0,0);
 this.add(this.luzr);
 this.add(this.luzr.target);
 
   this.sensor=new Sensor();
 this.actuator=new Array();
  this.brazoI.position.z=2.3;
  this.brazoD.position.z=-2.3;
  this.pieD.position.y=-2;
  this.pieD.position.z=1;
  this.pieI.position.y=-2;
  this.pieI.position.z=-1;
  this.pieD.position.x=1;
  this.pieI.position.x=1;
  this.brazoD.rotation.x=1.5;
  this.brazoI.rotation.x=-1.5;
  
  this.cuerpo.castShadow=true;
   this.brazoD.castShadow=true;
    this.brazoI.castShadow=true;
     this.pieD.castShadow=true;
      this.pieI.castShadow=true;
      
  this.add(this.pieI)
  this.add(this.pieD)
  this.add(this.brazoI)
  this.add(this.brazoD)
  this.add(this.cuerpo)
}
kirby.prototype=new Agent();

function Wall(size,x=0,y=0){
 THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,size), new THREE.MeshNormalMaterial()); 
 this.size=size;
 this.position.x=x;
 this.position.y=y;
}
Wall.prototype=new THREE.Mesh();

Environment.prototype.setMap=function(map){
 var offset=Math.floor(map.length/2);
 for(var i=0;i<map.length;i++){
  for(var j=0;j<map.length;j++){
   if(map[i][j]==="x")
    this.add(new Wall(1, j-offset,-(i-offset)));
   else if(map[i][j]==="r")
    this.add(new kirby(j-offset,-(i-offset)));
  }
 }
}	

kirby.prototype.sense=function(environment){
 this.sensor.set(this.position, new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.rotation.z),0));
 var obstaculo = this.sensor.intersectObjects(environment.children,true);
 if ((obstaculo.length>0&&(obstaculo[0].distance<=1.5)))
  this.sensor.colision=true;
 else
  this.sensor.colision=false;
}

kirby.prototype.plan = function(environment){
 this.actuator.commands=[];
  if(this.sensor.colision==true)
   this.actuator.commands.push('RotarIzquierda');
  else
   this.actuator.commands.push('Derecho');
}

kirby.prototype.act=function(environment){
 var command=this.actuator.commands.pop();
 if(command==undefined)
  console.log('Undefined command');
 else if(command in this.operations)
  this.operations[command](this);
 else
  console.log('Unknown command'); 
}

kirby.prototype.operations = {};

kirby.prototype.operations.Derecho = function(robot,step){
 if(step==undefined)
 step=0.01;
 robot.scale.x=0.5;
 robot.scale.y=0.5;
 robot.scale.z=0.5;
 if (Math.abs(robot.pieD.rotation.z) > .3 )
  steppie = -steppie;

if (Math.abs(robot.brazoD.rotation.x) > 2 || Math.abs(robot.brazoD.rotation.x) < 1)
  stepbrazo = -stepbrazo;

 robot.position.x+=step*Math.cos(robot.rotation.z);
 robot.position.y+=step*Math.sin(robot.rotation.z);
 robot.brazoD.rotation.x += stepbrazo;
 robot.brazoI.rotation.x += stepbrazo;
 robot.pieD.rotation.z += steppie;
 robot.pieI.rotation.z -= steppie;
};

kirby.prototype.operations.RotarDerecha = function(robot,angulo){
 if(angulo==undefined){
  angulo=-Math.PI/2;
 }
 robot.rotation.z+=angulo;
};

kirby.prototype.operations.RotarIzquierda = function(robot,angulo){
 if(angulo==undefined){
  angulo=Math.PI/2;
 }
 robot.rotation.z+=angulo;
};
 
function setup(){
 var mapa = new Array();
  mapa[0] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[1] = "x                          x";
  mapa[2] = "x                          x";
  mapa[3] = "x                          x";
  mapa[4] = "x                          x";
  mapa[5] = "x                          x";
  mapa[6] = "x                   xxxxxx x";
  mapa[7] = "x                          x";
  mapa[8] = "x                          x";
  mapa[9] = "xxxxx                      x";
 mapa[10] = "x                          x";
 mapa[11] = "x                          x";
 mapa[12] = "x                          x";
 mapa[13] = "x                          x";
 mapa[14] = "x                          x";
 mapa[15] = "x                      xxxxx";
 mapa[16] = "x                          x";
 mapa[17] = "x                          x";
 mapa[18] = "x                          x";
 mapa[19] = "x     r                    x";
 mapa[20] = "x                          x";
 mapa[21] = "x                          x";
 mapa[22] = "x                          x";
 mapa[23] = "x                          x";
 mapa[24] = "xxxxxxxxxxxxx              x";
 mapa[25] = "x                          x";
 mapa[26] = "x                          x";
 mapa[27] = "x                          x";
 mapa[28] = "x                          x";
 mapa[29] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxx";
 entorno=new Environment();
 entorno.setMap(mapa);
  steppie=0.1;
  stepbrazo = 0.017;
 var piso=new THREE.Mesh(new THREE.BoxGeometry(28,30,0.1), new THREE.MeshLambertMaterial({color:0x00ff00}));
 piso.position.z=-0.5;
 piso.position.x=-1.5;
 piso.position.y=0.5;
 luzPuntual = new THREE.PointLight(0xffffff);
 luzPuntual.position.y+=20;
 luzPuntual.position.z+=40;
 camara=new THREE.PerspectiveCamera();
 camara.position.z=40;
 renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*0.95, window.innerHeight*0.95);
 document.body.appendChild(renderer.domElement);
 entorno.add(camara);
 entorno.add(luzPuntual);
 entorno.add(piso);
 
  renderer.shadowMap.enabled=true;
 piso.receiveShadow=true;
 luzPuntual.castShadow=true;
}

function loop(){
 requestAnimationFrame(loop);
 entorno.sense();
 entorno.plan();
 entorno.act();
 renderer.render(entorno,camara);
}

var entorno,luzPuntual,robot,step,angulo,camara,renderer,steppie, stepbrazo;

setup();
loop();
