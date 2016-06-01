
function Completo(){
THREE.Object3D.call(this);
  THREE.ImageUtils.crossOrigin = '';
  var cara = THREE.ImageUtils.loadTexture('http://AlexisSaso.github.io/rv/Cara_Kirby.jpg');
  var brazos = THREE.ImageUtils.loadTexture('http://AlexisSaso.github.io/rv/Color.jpg');
  var pies = THREE.ImageUtils.loadTexture('http://AlexisSaso.github.io/rv/Zapato.jpg');  
  
  this.cuerpo = new THREE.Mesh(new THREE.SphereGeometry(3,100,100),new THREE.MeshPhongMaterial({map:cara}));
  this.brazoI = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4),new THREE.MeshPhongMaterial({map:brazos}));
  this.brazoD = new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,4),new THREE.MeshPhongMaterial({map:brazos}));
  this.pieI = new THREE.Mesh(new THREE.CylinderGeometry(0.5,1,0.5),new THREE.MeshPhongMaterial({map:pies}));
  this.pieD = new THREE.Mesh(new THREE.CylinderGeometry(0.5,1,0.5),new THREE.MeshPhongMaterial({map:pies}));
  
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

THREE.ImageUtils.crossOrigin='';


cubo1=new THREE.Mesh(new THREE.BoxGeometry(0.5,80,3),new THREE.MeshBasicMaterial({color:'#ffff00'}));
cubo2=new THREE.Mesh(new THREE.BoxGeometry(0.5,80,3),new THREE.MeshBasicMaterial({color:'#ffff00'}));
cubo3=new THREE.Mesh(new THREE.BoxGeometry(80,0.5,3),new THREE.MeshBasicMaterial({color:'#ffff00'}));
cubo4=new THREE.Mesh(new THREE.BoxGeometry(65,0.5,3),new THREE.MeshBasicMaterial({color:'#ffff00'}));


//los obstaculos
pared1= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared2= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared3= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared4= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared5= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared6= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared7= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared8= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared9= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared10= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared11= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared12= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared13= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared14= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared15= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared16= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared17= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared18= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared19= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));
pared20= new THREE.Mesh(new THREE.BoxGeometry(2,2,3),new THREE.MeshLambertMaterial({color:'#ffff00'}));



cubo1.position.x=37;
cubo2.position.x=-37;
cubo3.position.y=-37;
cubo4.position.y=37;
cubo4.position.x=-5;

pared1.position.x=-30;
pared1.position.y=-30;
pared2.position.x=-10;
pared2.position.y=-30;
pared3.position.x=10;
pared3.position.y=-30;
pared4.position.x=30;
pared4.position.y=-30;
pared5.position.x=-20;
pared5.position.y=-20;
pared6.position.x=0;
pared6.position.y=-20;
pared7.position.x=20;
pared7.position.y=-20;
pared8.position.x=-30;
pared8.position.y=-10;
pared9.position.x=-10;
pared9.position.y=-10;
pared10.position.x=10;
pared10.position.y=-10;
pared11.position.x=30;
pared11.position.y=-10;
pared12.position.x=-20;
pared12.position.y=0;
pared13.position.x=0;
pared13.position.y=0;
pared14.position.x=20;
pared14.position.y=0;
pared15.position.x=-30;
pared15.position.y=10;
pared16.position.x=-10;
pared16.position.y=10;
pared17.position.x=10;
pared17.position.y=10;
pared18.position.x=30;
pared18.position.y=10;
pared19.position.x=-20;
pared19.position.y=30;
pared20.position.x=20;
pared20.position.y=30;

camara=new THREE.PerspectiveCamera();
camara.position.z=120;

raycaster1=new THREE.Raycaster(kirby.position,new THREE.Vector3(1,0,0));
raycaster2=new THREE.Raycaster(kirby.position,new THREE.Vector3(-1,0,0));
raycaster3=new THREE.Raycaster(kirby.position,new THREE.Vector3(0,1,0));
raycaster4=new THREE.Raycaster(kirby.position,new THREE.Vector3(0,-1,0));


//Creo la luz conica-----
var luzconica = new THREE.SpotLight( 0xffffff );
kirby.add(luzconica);
luzconica.position.set(0,5,5);
luzconica.target = kirby;
luzconica.intensity = 1;
//------------

iluminacion = new THREE.PointLight(0xffffff);
 iluminacion.position.z=20;
 iluminacion.position.y=10;

escena=new THREE.Scene();
escena.add(cubo1);
escena.add(cubo2);
escena.add(cubo3);
escena.add(cubo4);
escena.add(pared1);
escena.add(pared2);
escena.add(pared3);
escena.add(pared4);
escena.add(pared5);
escena.add(pared6);
escena.add(pared7);
escena.add(pared8);
escena.add(pared9);
escena.add(pared10);
escena.add(pared11);
escena.add(pared12);
escena.add(pared13);
escena.add(pared14);
escena.add(pared15);
escena.add(pared16);
escena.add(pared17);
escena.add(pared18);
escena.add(pared19);
escena.add(pared20);
escena.add(kirby);
escena.add(camara);
escena.add(luzconica);
escena.add(iluminacion);

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);

//seleccionar objetivo
//OBJETIVOX=-20;
//OBJETIVOY=20;
OBJETIVOX=35;
OBJETIVOY=40;
kirby.position.x=20;
kirby.position.y=-30;
stepy=0.2;
stepx=0.2;
c1=0;
c2=0;
c3=0;
c4=0;
c5=0;
c6=0;
c7=0;
c8=0;
c9=0;
c10=0;
c11=0;
c12=0;
c13=0;
c14=0;
c15=0;
c16=0;
c17=0;
c18=0;
c19=0;
c20=0;
a1=0;
a2=0;
a3=0;
a4=0;
a5=0;
a6=0;
a7=0;
a8=0;
a9=0;
a10=0;
a11=0;
a12=0;
a13=0;
a14=0;
a15=0;
a16=0;
a17=0;
a18=0;
a19=0;
a20=0;
b1=0;
b2=0;
b3=0;
b4=0;
b5=0;
b6=0;
b7=0;
b8=0;
b9=0;
b10=0;
b11=0;
b12=0;
b13=0;
b14=0;
b15=0;
b16=0;
b17=0;
b18=0;
b19=0;
b20=0;
ajuste=0;
}

function loop(){
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

obstaculo6D=raycaster1.intersectObject(pared6);
obstaculo6I=raycaster2.intersectObject(pared6);
obstaculo6U=raycaster3.intersectObject(pared6);
obstaculo6DD=raycaster4.intersectObject(pared6);

obstaculo7D=raycaster1.intersectObject(pared7);
obstaculo7I=raycaster2.intersectObject(pared7);
obstaculo7U=raycaster3.intersectObject(pared7);
obstaculo7DD=raycaster4.intersectObject(pared7);

obstaculo8D=raycaster1.intersectObject(pared8);
obstaculo8I=raycaster2.intersectObject(pared8);
obstaculo8U=raycaster3.intersectObject(pared8);
obstaculo8DD=raycaster4.intersectObject(pared8);

obstaculo9D=raycaster1.intersectObject(pared9);
obstaculo9I=raycaster2.intersectObject(pared9);
obstaculo9U=raycaster3.intersectObject(pared9);
obstaculo9DD=raycaster4.intersectObject(pared9);

obstaculo10D=raycaster1.intersectObject(pared10);
obstaculo10I=raycaster2.intersectObject(pared10);
obstaculo10U=raycaster3.intersectObject(pared10);
obstaculo10DD=raycaster4.intersectObject(pared10);

obstaculo11D=raycaster1.intersectObject(pared11);
obstaculo11I=raycaster2.intersectObject(pared11);
obstaculo11U=raycaster3.intersectObject(pared11);
obstaculo11DD=raycaster4.intersectObject(pared11);

obstaculo12D=raycaster1.intersectObject(pared12);
obstaculo12I=raycaster2.intersectObject(pared12);
obstaculo12U=raycaster3.intersectObject(pared12);
obstaculo12DD=raycaster4.intersectObject(pared12);

obstaculo13D=raycaster1.intersectObject(pared13);
obstaculo13I=raycaster2.intersectObject(pared13);
obstaculo13U=raycaster3.intersectObject(pared13);
obstaculo13DD=raycaster4.intersectObject(pared13);

obstaculo14D=raycaster1.intersectObject(pared14);
obstaculo14I=raycaster2.intersectObject(pared14);
obstaculo14U=raycaster3.intersectObject(pared14);
obstaculo14DD=raycaster4.intersectObject(pared14);

obstaculo15D=raycaster1.intersectObject(pared15);
obstaculo15I=raycaster2.intersectObject(pared15);
obstaculo15U=raycaster3.intersectObject(pared15);
obstaculo15DD=raycaster4.intersectObject(pared15);

obstaculo16D=raycaster1.intersectObject(pared16);
obstaculo16I=raycaster2.intersectObject(pared16);
obstaculo16U=raycaster3.intersectObject(pared16);
obstaculo16DD=raycaster4.intersectObject(pared16);

obstaculo17D=raycaster1.intersectObject(pared17);
obstaculo17I=raycaster2.intersectObject(pared17);
obstaculo17U=raycaster3.intersectObject(pared17);
obstaculo17DD=raycaster4.intersectObject(pared17);

obstaculo18D=raycaster1.intersectObject(pared18);
obstaculo18I=raycaster2.intersectObject(pared18);
obstaculo18U=raycaster3.intersectObject(pared18);
obstaculo18DD=raycaster4.intersectObject(pared18);

obstaculo19D=raycaster1.intersectObject(pared19);
obstaculo19I=raycaster2.intersectObject(pared19);
obstaculo19U=raycaster3.intersectObject(pared19);
obstaculo19DD=raycaster4.intersectObject(pared19);

obstaculo20D=raycaster1.intersectObject(pared20);
obstaculo20I=raycaster2.intersectObject(pared20);
obstaculo20U=raycaster3.intersectObject(pared20);
obstaculo20DD=raycaster4.intersectObject(pared20);

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
if((obstaculo6D.length>0 && (obstaculo6D[0].distance<=5))||(obstaculo6I.length>0 && (obstaculo6I[0].distance<=5))||(obstaculo6U.length>0 && (obstaculo6U[0].distance<=5))||(obstaculo6DD.length>0 && (obstaculo6DD[0].distance<=5)))
{
pared6.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
c6=1;
};
if((obstaculo7D.length>0 && (obstaculo7D[0].distance<=5))||(obstaculo7I.length>0 && (obstaculo7I[0].distance<=5))||(obstaculo7U.length>0 && (obstaculo7U[0].distance<=5))||(obstaculo7DD.length>0 && (obstaculo7DD[0].distance<=5)))
{
pared7.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
c7=1;
};
if((obstaculo8D.length>0 && (obstaculo8D[0].distance<=5))||(obstaculo8I.length>0 && (obstaculo8I[0].distance<=5))||(obstaculo8U.length>0 && (obstaculo8U[0].distance<=5))||(obstaculo8DD.length>0 && (obstaculo8DD[0].distance<=5)))
{
c8=1;
pared8.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
};
if((obstaculo9D.length>0 && (obstaculo9D[0].distance<=5))||(obstaculo9I.length>0 && (obstaculo9I[0].distance<=5))||(obstaculo9U.length>0 && (obstaculo9U[0].distance<=5))||(obstaculo9DD.length>0 && (obstaculo9DD[0].distance<=5)))
{
c9=1;
pared9.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
};
if((obstaculo10D.length>0 && (obstaculo10D[0].distance<=5))||(obstaculo10I.length>0 && (obstaculo10I[0].distance<=5))||(obstaculo10U.length>0 && (obstaculo10U[0].distance<=5))||(obstaculo10DD.length>0 && (obstaculo10DD[0].distance<=5)))
{
c10=1;
pared10.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
};
if((obstaculo11D.length>0 && (obstaculo11D[0].distance<=5))||(obstaculo11I.length>0 && (obstaculo11I[0].distance<=5))||(obstaculo11U.length>0 && (obstaculo11U[0].distance<=5))||(obstaculo11DD.length>0 && (obstaculo11DD[0].distance<=5)))
{
pared11.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
c11=1;
};
if((obstaculo12D.length>0 && (obstaculo12D[0].distance<=5))||(obstaculo12I.length>0 && (obstaculo12I[0].distance<=5))||(obstaculo12U.length>0 && (obstaculo12U[0].distance<=5))||(obstaculo12DD.length>0 && (obstaculo12DD[0].distance<=5)))
{
pared12.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
c12=1;
};
if((obstaculo13D.length>0 && (obstaculo13D[0].distance<=5))||(obstaculo13I.length>0 && (obstaculo13I[0].distance<=5))||(obstaculo13U.length>0 && (obstaculo13U[0].distance<=5))||(obstaculo13DD.length>0 && (obstaculo13DD[0].distance<=5)))
{
c13=1;
pared13.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
};
if((obstaculo14D.length>0 && (obstaculo14D[0].distance<=5))||(obstaculo14I.length>0 && (obstaculo14I[0].distance<=5))||(obstaculo14U.length>0 && (obstaculo14U[0].distance<=5))||(obstaculo14DD.length>0 && (obstaculo14DD[0].distance<=5)))
{
c14=1;
pared14.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
};
if((obstaculo15D.length>0 && (obstaculo15D[0].distance<=5))||(obstaculo15I.length>0 && (obstaculo15I[0].distance<=5))||(obstaculo15U.length>0 && (obstaculo15U[0].distance<=5))||(obstaculo15DD.length>0 && (obstaculo15DD[0].distance<=5)))
{
c15=1;
pared15.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
};
if((obstaculo16D.length>0 && (obstaculo16D[0].distance<=5))||(obstaculo16I.length>0 && (obstaculo16I[0].distance<=5))||(obstaculo16U.length>0 && (obstaculo16U[0].distance<=5))||(obstaculo16DD.length>0 && (obstaculo16DD[0].distance<=5)))
{
pared16.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
c16=1;
};
if((obstaculo17D.length>0 && (obstaculo17D[0].distance<=5))||(obstaculo17I.length>0 && (obstaculo17I[0].distance<=5))||(obstaculo17U.length>0 && (obstaculo17U[0].distance<=5))||(obstaculo17DD.length>0 && (obstaculo17DD[0].distance<=5)))
{
pared17.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
c17=1;
};
if((obstaculo18D.length>0 && (obstaculo18D[0].distance<=5))||(obstaculo18I.length>0 && (obstaculo18I[0].distance<=5))||(obstaculo18U.length>0 && (obstaculo18U[0].distance<=5))||(obstaculo18DD.length>0 && (obstaculo18DD[0].distance<=5)))
{
c18=1;
pared18.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
};
if((obstaculo19D.length>0 && (obstaculo19D[0].distance<=5))||(obstaculo19I.length>0 && (obstaculo19I[0].distance<=5))||(obstaculo19U.length>0 && (obstaculo19U[0].distance<=5))||(obstaculo19DD.length>0 && (obstaculo19DD[0].distance<=5)))
{
c19=1;
pared19.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
};
if((obstaculo20D.length>0 && (obstaculo20D[0].distance<=5))||(obstaculo20I.length>0 && (obstaculo20I[0].distance<=5))||(obstaculo20U.length>0 && (obstaculo20U[0].distance<=5))||(obstaculo20DD.length>0 && (obstaculo20DD[0].distance<=5)))
{
c20=1;
pared20.material= new  THREE.MeshBasicMaterial({color:'#ff00ff'});
};

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

if((((pared6.position.y-kirby.position.y)*(pared6.position.y-kirby.position.y))>3)&&(((pared6.position.x-kirby.position.x)*(pared6.position.x-kirby.position.x))>2))
{
a6=(pared6.position.y-kirby.position.y)/((pared6.position.y-kirby.position.y)*(pared6.position.y-kirby.position.y));
b6=(pared6.position.x-kirby.position.x)/((pared6.position.x-kirby.position.x)*(pared6.position.x-kirby.position.x));
};

if((((pared7.position.y-kirby.position.y)*(pared7.position.y-kirby.position.y))>3)&&(((pared7.position.x-kirby.position.x)*(pared7.position.x-kirby.position.x))>2))
{
a7=(pared7.position.y-kirby.position.y)/((pared7.position.y-kirby.position.y)*(pared7.position.y-kirby.position.y));
b7=(pared7.position.x-kirby.position.x)/((pared7.position.x-kirby.position.x)*(pared7.position.x-kirby.position.x));
};

if((((pared8.position.y-kirby.position.y)*(pared8.position.y-kirby.position.y))>3)&&(((pared8.position.x-kirby.position.x)*(pared8.position.x-kirby.position.x))>2))
{
a8=(pared8.position.y-kirby.position.y)/((pared8.position.y-kirby.position.y)*(pared8.position.y-kirby.position.y));
b8=(pared8.position.x-kirby.position.x)/((pared8.position.x-kirby.position.x)*(pared8.position.x-kirby.position.x));
};

if((((pared9.position.y-kirby.position.y)*(pared9.position.y-kirby.position.y))>4)&&(((pared9.position.x-kirby.position.x)*(pared9.position.x-kirby.position.x))>2))
{
a9=(pared9.position.y-kirby.position.y)/((pared9.position.y-kirby.position.y)*(pared9.position.y-kirby.position.y));
b9=(pared9.position.x-kirby.position.x)/((pared9.position.x-kirby.position.x)*(pared9.position.x-kirby.position.x));
};

if((((pared10.position.y-kirby.position.y)*(pared10.position.y-kirby.position.y))>5)&&(((pared10.position.x-kirby.position.x)*(pared10.position.x-kirby.position.x))>2))
{
a10=(pared10.position.y-kirby.position.y)/((pared10.position.y-kirby.position.y)*(pared10.position.y-kirby.position.y));
b10=(pared10.position.x-kirby.position.x)/((pared10.position.x-kirby.position.x)*(pared10.position.x-kirby.position.x));
};

if((((pared11.position.y-kirby.position.y)*(pared11.position.y-kirby.position.y))>3)&&(((pared11.position.x-kirby.position.x)*(pared11.position.x-kirby.position.x))>2))
{
a11=(pared11.position.y-kirby.position.y)/((pared11.position.y-kirby.position.y)*(pared11.position.y-kirby.position.y));
b11=(pared11.position.x-kirby.position.x)/((pared11.position.x-kirby.position.x)*(pared11.position.x-kirby.position.x));
};

if((((pared12.position.y-kirby.position.y)*(pared12.position.y-kirby.position.y))>3)&&(((pared12.position.x-kirby.position.x)*(pared12.position.x-kirby.position.x))>2))
{
a12=(pared12.position.y-kirby.position.y)/((pared12.position.y-kirby.position.y)*(pared12.position.y-kirby.position.y));
b12=(pared12.position.x-kirby.position.x)/((pared12.position.x-kirby.position.x)*(pared12.position.x-kirby.position.x));
};

if((((pared13.position.y-kirby.position.y)*(pared13.position.y-kirby.position.y))>3)&&(((pared13.position.x-kirby.position.x)*(pared13.position.x-kirby.position.x))>2))
{
a13=(pared13.position.y-kirby.position.y)/((pared13.position.y-kirby.position.y)*(pared13.position.y-kirby.position.y));
b13=(pared13.position.x-kirby.position.x)/((pared13.position.x-kirby.position.x)*(pared13.position.x-kirby.position.x));
};

if((((pared14.position.y-kirby.position.y)*(pared14.position.y-kirby.position.y))>4)&&(((pared14.position.x-kirby.position.x)*(pared14.position.x-kirby.position.x))>2))
{
a14=(pared14.position.y-kirby.position.y)/((pared14.position.y-kirby.position.y)*(pared14.position.y-kirby.position.y));
b14=(pared14.position.x-kirby.position.x)/((pared14.position.x-kirby.position.x)*(pared14.position.x-kirby.position.x));
};

if((((pared15.position.y-kirby.position.y)*(pared15.position.y-kirby.position.y))>5)&&(((pared15.position.x-kirby.position.x)*(pared15.position.x-kirby.position.x))>2))
{
a15=(pared15.position.y-kirby.position.y)/((pared15.position.y-kirby.position.y)*(pared15.position.y-kirby.position.y));
b15=(pared15.position.x-kirby.position.x)/((pared15.position.x-kirby.position.x)*(pared15.position.x-kirby.position.x));
};

if((((pared16.position.y-kirby.position.y)*(pared16.position.y-kirby.position.y))>3)&&(((pared16.position.x-kirby.position.x)*(pared16.position.x-kirby.position.x))>2))
{
a16=(pared16.position.y-kirby.position.y)/((pared16.position.y-kirby.position.y)*(pared16.position.y-kirby.position.y));
b16=(pared16.position.x-kirby.position.x)/((pared16.position.x-kirby.position.x)*(pared16.position.x-kirby.position.x));
};

if((((pared17.position.y-kirby.position.y)*(pared17.position.y-kirby.position.y))>3)&&(((pared17.position.x-kirby.position.x)*(pared17.position.x-kirby.position.x))>2))
{
a17=(pared17.position.y-kirby.position.y)/((pared17.position.y-kirby.position.y)*(pared17.position.y-kirby.position.y));
b17=(pared17.position.x-kirby.position.x)/((pared17.position.x-kirby.position.x)*(pared17.position.x-kirby.position.x));
};

if((((pared18.position.y-kirby.position.y)*(pared18.position.y-kirby.position.y))>3)&&(((pared18.position.x-kirby.position.x)*(pared18.position.x-kirby.position.x))>2))
{
a18=(pared18.position.y-kirby.position.y)/((pared18.position.y-kirby.position.y)*(pared18.position.y-kirby.position.y));
b18=(pared18.position.x-kirby.position.x)/((pared18.position.x-kirby.position.x)*(pared18.position.x-kirby.position.x));
};

if((((pared19.position.y-kirby.position.y)*(pared19.position.y-kirby.position.y))>4)&&(((pared19.position.x-kirby.position.x)*(pared19.position.x-kirby.position.x))>2))
{
a19=(pared19.position.y-kirby.position.y)/((pared19.position.y-kirby.position.y)*(pared19.position.y-kirby.position.y));
b19=(pared19.position.x-kirby.position.x)/((pared19.position.x-kirby.position.x)*(pared19.position.x-kirby.position.x));
};

if((((pared20.position.y-kirby.position.y)*(pared20.position.y-kirby.position.y))>5)&&(((pared20.position.x-kirby.position.x)*(pared20.position.x-kirby.position.x))>2))
{
a20=(pared20.position.y-kirby.position.y)/((pared20.position.y-kirby.position.y)*(pared20.position.y-kirby.position.y));
b20=(pared20.position.x-kirby.position.x)/((pared20.position.x-kirby.position.x)*(pared20.position.x-kirby.position.x));
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
if(((pared6.position.y-kirby.position.y)*(pared6.position.y-kirby.position.y))>4)
b6=0;
if(((pared7.position.y-kirby.position.y)*(pared7.position.y-kirby.position.y))>4)
b7=0;
if(((pared8.position.y-kirby.position.y)*(pared8.position.y-kirby.position.y))>4)
b8=0;
if(((pared9.position.y-kirby.position.y)*(pared9.position.y-kirby.position.y))>4)
b9=0;
if(((pared10.position.y-kirby.position.y)*(pared10.position.y-kirby.position.y))>4)
b10=0;
if(((pared11.position.y-kirby.position.y)*(pared11.position.y-kirby.position.y))>4)
b11=0;
if(((pared12.position.y-kirby.position.y)*(pared12.position.y-kirby.position.y))>4)
b12=0;
if(((pared13.position.y-kirby.position.y)*(pared13.position.y-kirby.position.y))>4)
b13=0;
if(((pared14.position.y-kirby.position.y)*(pared14.position.y-kirby.position.y))>4)
b14=0;
if(((pared15.position.y-kirby.position.y)*(pared15.position.y-kirby.position.y))>4)
b15=0;
if(((pared16.position.y-kirby.position.y)*(pared16.position.y-kirby.position.y))>4)
b16=0;
if(((pared17.position.y-kirby.position.y)*(pared17.position.y-kirby.position.y))>4)
b17=0;
if(((pared18.position.y-kirby.position.y)*(pared18.position.y-kirby.position.y))>4)
b18=0;
if(((pared19.position.y-kirby.position.y)*(pared19.position.y-kirby.position.y))>4)
b19=0;
if(((pared20.position.y-kirby.position.y)*(pared20.position.y-kirby.position.y))>4)
b20=0;

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
if(((pared6.position.x-kirby.position.x)*(pared6.position.x-kirby.position.x))>4)
a6=0;
if(((pared7.position.x-kirby.position.x)*(pared7.position.x-kirby.position.x))>4)
a7=0;
if(((pared8.position.x-kirby.position.x)*(pared8.position.x-kirby.position.x))>4)
a8=0;
if(((pared9.position.x-kirby.position.x)*(pared9.position.x-kirby.position.x))>4)
a9=0;
if(((pared10.position.x-kirby.position.x)*(pared10.position.x-kirby.position.x))>4)
a10=0;
if(((pared11.position.x-kirby.position.x)*(pared11.position.x-kirby.position.x))>4)
a11=0;
if(((pared12.position.x-kirby.position.x)*(pared12.position.x-kirby.position.x))>4)
a12=0;
if(((pared13.position.x-kirby.position.x)*(pared13.position.x-kirby.position.x))>4)
a13=0;
if(((pared14.position.x-kirby.position.x)*(pared14.position.x-kirby.position.x))>4)
a14=0;
if(((pared15.position.x-kirby.position.x)*(pared15.position.x-kirby.position.x))>4)
a15=0;
if(((pared16.position.x-kirby.position.x)*(pared16.position.x-kirby.position.x))>4)
a16=0;
if(((pared17.position.x-kirby.position.x)*(pared17.position.x-kirby.position.x))>4)
a17=0;
if(((pared18.position.x-kirby.position.x)*(pared18.position.x-kirby.position.x))>4)
a18=0;
if(((pared19.position.x-kirby.position.x)*(pared19.position.x-kirby.position.x))>4)
a19=0;
if(((pared20.position.x-kirby.position.x)*(pared20.position.x-kirby.position.x))>4)
a20=0;

stepy=((OBJETIVOY-kirby.position.y)/100)-(c1*a1)-(c2*a2)-(c3*a3)-(c4*a4)-(c5*a5)-(c6*a6)-(c7*a7)-(c8*a8)-(c9*a9)-(c10*a10)-(c11*a11)-(c12*a12)-(c13*a13)-(c14*a14)-(c15*a15)-(c16*a16)-(c17*a17)-(c18*a18)-(c19*a19)-(c20*a20);
stepx=((OBJETIVOX-kirby.position.x)/100)-(c1*b1)-(c2*b2)-(c3*b3)-(c4*b4)-(c5*b5)-(c6*b6)-(c7*b7)-(c8*b8)-(c9*b9)-(c10*b10)-(c11*b11)-(c12*b12)-(c13*b13)-(c14*b14)-(c15*b15)-(c16*b16)-(c17*b17)-(c18*b18)-(c19*b19)-(c20*b20);

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
