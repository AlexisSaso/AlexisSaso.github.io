function Agent(x=0, y=0){
 THREE.Object3D.call(this);   //Llama a cada objeto para que sean independientes
 this.position.x=x;
 this.position.y=y;
}

Agent.prototype = new THREE.Object3D();

Agent.prototype.sense = function(environment) {};
Agent.prototype.plan = function(environment) {};
Agent.prototype.act = function(environment) {};

function Environment() {
 THREE.Scene.call(this);
}

Environment.prototype = new THREE.Scene();

Environment.prototype.sense = function() {
 for(var i=0; i<this.children.length; i++){
  if(this.children[i].sense!==undefined)
   this.children[i].sense(this);
 }
}

Environment.prototype.plan = function() {
 for(var i=0; i<this.children.length; i++){
  if(this.children[i].plan!==undefined)
   this.children[i].plan(this);
 }
}

Environment.prototype.act = function() {
 for(var i=0; i<this.children.length; i++){
  if(this.children[i].act!==undefined)
   this.children[i].act(this);
 }
}


function Sensor(position,direction){
 THREE.Raycaster.call(this,position,direction);
 this.colision=false;
}
Sensor.prototype=new THREE.Raycaster();

function kirby(x=0, y=0){
  Agent.call(this,x,y);
  THREE.ImageUtils.crossOrigin = '';
  var cara = THREE.ImageUtils.loadTexture('http://Ignacio121990.github.io/12899665_10153684992446843_1267488120_n.jpg');
  var brazos = THREE.ImageUtils.loadTexture('http://Ignacio121990.github.io/12899889_10153685013876843_569751267_n.jpg');
  var pies = THREE.ImageUtils.loadTexture('http://Ignacio121990.github.io/12919388_10153685013881843_2062601905_o.jpg'); 
  
  this.cuerpo = new THREE.Mesh(new THREE.SphereGeometry(3,100,100),new THREE.MeshPhongMaterial({map:cara}));
  this.brazoI = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4),new THREE.MeshPhongMaterial({map:brazos}));
  this.brazoD = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4),new THREE.MeshPhongMaterial({map:brazos}));
  this.pieI = new THREE.Mesh(new THREE.CylinderGeometry(0.5,1,0.5),new THREE.MeshPhongMaterial({map:pies}));
  this.pieD = new THREE.Mesh(new THREE.CylinderGeometry(0.5,1,0.5),new THREE.MeshPhongMaterial({map:pies}));
 
 
   this.add(this.pieI)
  this.add(this.pieD)
  this.add(this.brazoI)
  this.add(this.brazoD)
  this.add(this.cuerpo)
 
   this.luzr=new THREE.SpotLight(0xffffff,4,2000,.01);
 this.luzr.target.updateMatrixWorld();
 this.luzr.target.position.set(0,10,0);
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
  if ((obstaculo.length>0&&(obstaculo[0].distance<=1.5))){
  this.sensor.colision=true;
  obstaculo[0].object.material=new THREE.MeshBasicMaterial({color:0xff0000});
   }
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
//Escenario
var mapa = new Array();
   mapa[0] = "xxxxxxxxxxxxxxxxxxxxxxx   xxx";
   mapa[1] = "xxxx                        x";
   mapa[2] = "xxxx                        x";
   mapa[3] = "x                           x";
   mapa[4] = "x                           x";
   mapa[5] = "x                           x";
   mapa[6] = "x                        xxxx";
   mapa[7] = "x                        xxxx";
   mapa[8] = "x                        xxxx";
   mapa[9] = "x                           x";
 mapa[10] = "x                           x";
 mapa[11] = "x                           x";
 mapa[12] = "x          xxxxx            x";
 mapa[13] = "x          xxxxx            x";
 mapa[14] = "x          xxxxx            x";
 mapa[15] = "x                           x";
 mapa[16] = "x                           x";
 mapa[17] = "x                           x";
 mapa[18] = "xxxx                        x";
 mapa[19] = "xxxx                        x";
 mapa[20] = "xxxx                        x";
 mapa[21] = "xxxx                        x";
 mapa[22] = "x                           x";
 mapa[23] = "x                           x";
 mapa[24] = "x                        xxxx";
 mapa[25] = "x                        xxxx";
 mapa[26] = "x                        xxxx";
 mapa[27] = "x r                      xxxx";
 mapa[28] = "x                        xxxx";
 mapa[29] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
entorno=new Environment();
 entorno.setMap(mapa);
 var floor=new THREE.Mesh(new THREE.BoxGeometry(28,30,0.1), new THREE.MeshLambertMaterial({color:0x00ff00}));
 floor.position.z=-0.5;
 floor.position.x=-1.5;
 floor.position.y=0.5;
 iluminacion = new THREE.PointLight(0xffffff);
 iluminacion.position.z=20;
 iluminacion.position.y=10;

 
 camara=new THREE.PerspectiveCamera();
 camara.position.z=40;
 renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*0.95, window.innerHeight*0.95);
 document.body.appendChild(renderer.domElement);
escena.add(floor);
escena.add(camara);
escena.add(iluminacion);

 renderer.shadowMap.enabled=true;
 floor.receiveShadow=true;
 iluminacion.castShadow=true;

raycaster1=new THREE.Raycaster(kirby.position,new THREE.Vector3(1,0,0));
raycaster2=new THREE.Raycaster(kirby.position,new THREE.Vector3(-1,0,0));
raycaster3=new THREE.Raycaster(kirby.position,new THREE.Vector3(0,1,0));
raycaster4=new THREE.Raycaster(kirby.position,new THREE.Vector3(0,-1,0));

//seleccionar objetivo
//OBJETIVOX=-20;
//OBJETIVOY=20;
OBJETIVOX=30;
OBJETIVOY=30;

stepy=0.2;
stepx=0.2;
c1=0;
c2=0;
c3=0;
c4=0;
c5=0;
a1=0;
a2=0;
a3=0;
a4=0;
a5=0;
b1=0;
b2=0;
b3=0;
b4=0;
b5=0;
ajuste=0;
}

function loop(){
//todos los posibles obstaculos
obstaculo1D=raycaster1.intersectObject(pared1);
obstaculo1I=raycaster2.intersectObject(pared1);
obstaculo1U=raycaster3.intersectObject(pared1);
obstaculo1DD=raycaster4.intersectObject(pared1);

obstaculo2D=raycaster1.intersectObject(pared2);
obstaculo2I=raycaster2.intersectObject(pared2);
obstaculo2U=raycaster3.intersectObject(pared2);
obstaculo2DD=raycaster4.intersectObject(pared2);

obstaculo3D=raycaster1.intersectObject(pared3);
obstaculo3I=raycaster2.intersectObject(pared3);
obstaculo3U=raycaster3.intersectObject(pared3);
obstaculo3DD=raycaster4.intersectObject(pared3);

obstaculo4D=raycaster1.intersectObject(pared4);
obstaculo4I=raycaster2.intersectObject(pared4);
obstaculo4U=raycaster3.intersectObject(pared4);
obstaculo4DD=raycaster4.intersectObject(pared4);

obstaculo5D=raycaster1.intersectObject(pared5);
obstaculo5I=raycaster2.intersectObject(pared5);
obstaculo5U=raycaster3.intersectObject(pared5);
obstaculo5DD=raycaster4.intersectObject(pared5);

//iluminar cubos
if((obstaculo1D.length>0 && (obstaculo1D[0].distance<=5))||(obstaculo1I.length>0 && (obstaculo1I[0].distance<=5))||(obstaculo1U.length>0 && (obstaculo1U[0].distance<=5))||(obstaculo1DD.length>0 && (obstaculo1DD[0].distance<=5)))
{
pared1.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
c1=1;
};
if((obstaculo2D.length>0 && (obstaculo2D[0].distance<=5))||(obstaculo2I.length>0 && (obstaculo2I[0].distance<=5))||(obstaculo2U.length>0 && (obstaculo2U[0].distance<=5))||(obstaculo2DD.length>0 && (obstaculo2DD[0].distance<=5)))
{
pared2.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
c2=1;
};
if((obstaculo3D.length>0 && (obstaculo3D[0].distance<=5))||(obstaculo3I.length>0 && (obstaculo3I[0].distance<=5))||(obstaculo3U.length>0 && (obstaculo3U[0].distance<=5))||(obstaculo3DD.length>0 && (obstaculo3DD[0].distance<=5)))
{
c3=1;
pared3.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
};
if((obstaculo4D.length>0 && (obstaculo4D[0].distance<=5))||(obstaculo4I.length>0 && (obstaculo4I[0].distance<=5))||(obstaculo4U.length>0 && (obstaculo4U[0].distance<=5))||(obstaculo4DD.length>0 && (obstaculo4DD[0].distance<=5)))
{
c4=1;
pared4.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
};
if((obstaculo5D.length>0 && (obstaculo5D[0].distance<=5))||(obstaculo5I.length>0 && (obstaculo5I[0].distance<=5))||(obstaculo5U.length>0 && (obstaculo5U[0].distance<=5))||(obstaculo5DD.length>0 && (obstaculo5DD[0].distance<=5)))
{
c5=1;
pared5.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
};

//campos de obstaculos
if((((pared1.position.y-kirby.position.y)*(pared1.position.y-kirby.position.y))>3)&&(((pared1.position.x-kirby.position.x)*(pared1.position.x-kirby.position.x))>2))
{
a1=(pared1.position.y-kirby.position.y)/((pared1.position.y-kirby.position.y)*(pared1.position.y-kirby.position.y));
b1=(pared1.position.x-kirby.position.x)/((pared1.position.x-kirby.position.x)*(pared1.position.x-kirby.position.x));
};

if((((pared2.position.y-kirby.position.y)*(pared2.position.y-kirby.position.y))>3)&&(((pared2.position.x-kirby.position.x)*(pared2.position.x-kirby.position.x))>2))
{
a2=(pared2.position.y-kirby.position.y)/((pared2.position.y-kirby.position.y)*(pared2.position.y-kirby.position.y));
b2=(pared2.position.x-kirby.position.x)/((pared2.position.x-kirby.position.x)*(pared2.position.x-kirby.position.x));
};

if((((pared3.position.y-kirby.position.y)*(pared3.position.y-kirby.position.y))>3)&&(((pared3.position.x-kirby.position.x)*(pared3.position.x-kirby.position.x))>2))
{
a3=(pared3.position.y-kirby.position.y)/((pared3.position.y-kirby.position.y)*(pared3.position.y-kirby.position.y));
b3=(pared3.position.x-kirby.position.x)/((pared3.position.x-kirby.position.x)*(pared3.position.x-kirby.position.x));
};

if((((pared4.position.y-kirby.position.y)*(pared4.position.y-kirby.position.y))>4)&&(((pared4.position.x-kirby.position.x)*(pared4.position.x-kirby.position.x))>2))
{
a4=(pared4.position.y-kirby.position.y)/((pared4.position.y-kirby.position.y)*(pared4.position.y-kirby.position.y));
b4=(pared4.position.x-kirby.position.x)/((pared4.position.x-kirby.position.x)*(pared4.position.x-kirby.position.x));
};

if((((pared5.position.y-kirby.position.y)*(pared5.position.y-kirby.position.y))>5)&&(((pared5.position.x-kirby.position.x)*(pared5.position.x-kirby.position.x))>2))
{
a5=(pared5.position.y-kirby.position.y)/((pared5.position.y-kirby.position.y)*(pared5.position.y-kirby.position.y));
b5=(pared5.position.x-kirby.position.x)/((pared5.position.x-kirby.position.x)*(pared5.position.x-kirby.position.x));
};

if(((pared1.position.y-kirby.position.y)*(pared1.position.y-kirby.position.y))>4)
b1=0;
if(((pared2.position.y-kirby.position.y)*(pared2.position.y-kirby.position.y))>4)
b2=0;
if(((pared3.position.y-kirby.position.y)*(pared3.position.y-kirby.position.y))>4)
b3=0;
if(((pared4.position.y-kirby.position.y)*(pared4.position.y-kirby.position.y))>4)
b4=0;
if(((pared5.position.y-kirby.position.y)*(pared5.position.y-kirby.position.y))>4)
b5=0;

if(((pared1.position.x-kirby.position.x)*(pared1.position.x-kirby.position.x))>4)
a1=0;
if(((pared2.position.x-kirby.position.x)*(pared2.position.x-kirby.position.x))>4)
a2=0;
if(((pared3.position.x-kirby.position.x)*(pared3.position.x-kirby.position.x))>4)
a3=0;
if(((pared4.position.x-kirby.position.x)*(pared4.position.x-kirby.position.x))>4)
a4=0;
if(((pared5.position.x-kirby.position.x)*(pared5.position.x-kirby.position.x))>4)
a5=0;

stepy=((OBJETIVOY-kirby.position.y)/100)-(c1*a1)-(c2*a2)-(c3*a3)-(c4*a4)-(c5*a5);
stepx=((OBJETIVOX-kirby.position.x)/100)-(c1*b1)-(c2*b2)-(c3*b3)-(c4*b4)-(c5*b5);

if((((OBJETIVOY-kirby.position.y)*(OBJETIVOY-kirby.position.y))<2)&&(((OBJETIVOY-kirby.position.y)*(OBJETIVOY-kirby.position.y))<2))
kirby.material= new  THREE.MeshBasicMaterial({color:'#0000ff'});

kirby.position.y +=stepy;
kirby.position.x +=stepx;

if(stepx<0)
ajuste=1;

kirby.rotation.z=Math.atan(stepy/stepx)-1.57+(3.14*ajuste);

ajuste=0;

//sensores
raycaster1.set(kirby.position,new THREE.Vector3(1,0,0));
raycaster2.set(kirby.position,new THREE.Vector3(-1,0,0));
raycaster3.set(kirby.position,new THREE.Vector3(0,1,0));
raycaster4.set(kirby.position,new THREE.Vector3(0,-1,0));

renderer.render(escena,camara);
requestAnimationFrame(loop);
}

var pared1,pared2,pared3,pared4,pared5,cubo1,cubo2,cubo3,cubo4,escena,camara,renderer;
var raycaster1,raycaster2,raycaster3,raycaster4,step;

var obstaculo1D,obstaculo1I,obstaculo1U,obstaculo1DD;
var obstaculo2D,obstaculo2I,obstaculo2U,obstaculo2DD;
var obstaculo3D,obstaculo3I,obstaculo3U,obstaculo3DD;
var obstaculo4D,obstaculo4I,obstaculo4U,obstaculo4DD;
var obstaculo5D,obstaculo5I,obstaculo5U,obstaculo5DD;

var luzconica;

setup();
loop();
