const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,division;
var particles=[];
var plinkos=[];
var divisions=[];
var count=0;
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(10,height-5,960,10);
  //  for(a=0;a<width;a+=80){
  //   divisions.push(new Division(a,height-divisionHeight/2,10,divisionHeight));
  //  }
   for(a=0;a<width;a+=80){
   division=new Division(a,height-divisionHeight/2,10,divisionHeight);
    divisions.push(division);
    console.log(divisions);
  }
  for(var p=40;p<=width;p+=50){
    plinkos.push(new Plinko(p,75));
  }
  for(var pl=15;pl<=width-10;pl+=50){
    plinkos.push(new Plinko(pl,175));
  }
  for(var p3=40;p3<=width;p3+=50){
    plinkos.push(new Plinko(p3,275));
  }
  for(var p4=15;p4<=width-10;p4+=50){
    plinkos.push(new Plinko(p4,375));
  }
  
  frameRate(20);
//  console.log(frameRate);
  
  // part=new Particle((random(width/2-10,width/2+10)),10,10);

  //    division2=new Division(80,height-divisionHeight/2,10,divisionHeight);
  //   divisions.push(division2);
  //   console.log(divisions);
  
  // division3=new Division(160,height-divisionHeight/2,10,divisionHeight);
  //   divisions.push(division3);
  //   console.log(divisions);
  
  // division4=new Division(240,height-divisionHeight/2,10,divisionHeight);
  //   divisions.push(division4);
  //   console.log(divisions);
  
  // division5=new Division(320,height-divisionHeight/2,10,divisionHeight);
  //   divisions.push(division5);
  //   console.log(divisions);
  
  //   division6=new Division(400,height-divisionHeight/2,10,divisionHeight);
  //   divisions.push(division6);
  //   console.log(divisions);

  //   division7=new Division(480,height-divisionHeight/2,10,divisionHeight);
  //   divisions.push(division7);
  //   console.log(divisions);
  
  
  // division2=new Division(80,height-divisionHeight/2,10,divisionHeight);
  // divisions.push(division2);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0); 
  Engine.update(engine); 
  ground.display();
  for(var k=0;k<divisions.length;++k){
      divisions[k].display();
  }
  for(var p=0;p<plinkos.length;++p){
    plinkos[p].display();
  }
  for(var pl=0;pl<plinkos.length;++pl){
    plinkos[pl].display();
  }
  for(var p3=0;p3<plinkos.length;++p3){
    plinkos[p3].display();
  }
  for(var p4=0;p4<plinkos.length;++p4){
    plinkos[p4].display();
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
   }
 for(var pr=0;pr<particles.length;++pr){
   particles[pr].display();
 }

  //  if(frameCount%60===0){
  //     count+=1;
  //   particles.push(new Particle(random(width/2-10,width/2+10)),10,10);
  // }
  // if(count)
  //   particles[count].display();
  //part.display();
  // division2.display();
  // division3.display();
  // division4.display();
  // division5.display();
  // division6.display();
  // division7.display();
  drawSprites();
}