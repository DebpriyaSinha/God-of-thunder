  var thor,Thor_img,thorHitting;
  var hela;
  var thanos;
  var loki;
  var hammer,hammer_img,hammerGroup;
  var loki,lokiGroup;
  var thanos,thanosGroup;
  var hela,helaGroup;
  var score=0;

function preload(){
  Thor_img=loadAnimation("Thor2.png");
  thorHitting=loadAnimation("Thor 5.png","Thor3.jpg","Thor4.png");
  
  hammer_img=loadImage("Mjolnir.png");

  hela=loadImage("Hela.jpg");
  thanos=loadImage("Thanos.png");
  loki=loadImage("Loki.png");


}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
  thor = createSprite(170,windowHeight/2,20,200); 
  thor.addAnimation("Standing",Thor_img);
  thor.addAnimation("Hitting",thorHitting);
  thor.scale=0.5;

  hammerGroup=createGroup();
  lokiGroup=createGroup();
  helaGroup=createGroup();
  thanosGroup=createGroup();
  
}

function draw(){
  background("white");
  
  if (keyDown("enter")){
    thor.changeAnimation("Hitting");
    Hammer();
  }
  thor.changeAnimation("Standing");
  thor.y=mouseY;
  
  var rand=Math.round(random(1,3));
  if(frameCount%60===0){

      switch(rand){
          case 1: Loki();
          break;
          case 2: Hela();             
          break;
          case 3: Thanos();               
          break;
          default : break;
      }
  }

  if (hammerGroup.isTouching(lokiGroup)){
    lokiGroup.destroyEach();
    hammerGroup.destroyEach();
    score=score+1;
  }

  if (hammerGroup.isTouching(helaGroup)){
    helaGroup.destroyEach();
    hammerGroup.destroyEach();
    score=score+1;
  }

  if (hammerGroup.isTouching(thanosGroup)){
    thanosGroup.destroyEach();
    hammerGroup.destroyEach();
    score=score+1;
  }

  text("Score: "+score,100,20);

  drawSprites();
}