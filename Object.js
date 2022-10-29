function Hammer(){
    hammer = createSprite(thor.x,thor.y,50,75);
    hammer.addImage("shoot",hammer_img);
    hammer.scale=0.16
    hammer.velocityX=20;
    hammer.lifetime=500;
    hammerGroup.add(hammer);
}

function Loki(){
    
    loki = createSprite(width+10,Math.round(random(0,900)),20,200);
    loki.addImage("loki",loki);
    loki.scale=0.8;
    loki.velocityX=-10;
    loki.lifetime=500;
    lokiGroup.add(loki);    
}

function Hela(){
    
    hela = createSprite(width+10,Math.round(random(0,900)),20,200);
    hela.addImage("hela",hela);
    hela.scale=0.8;
    hela.velocityX=-10;
    hela.lifetime=500;
    helaGroup.add(hela);
    
}

function Thanos(){
    
    thanos = createSprite(width+10,Math.round(random(0,900)),20,200);
    thanos.addImage("thanos",thanos);
    thanos.scale=0.1;
    thanos.velocityX=-10;
    thanos.lifetime=500;
    thanosGroup.add(thanos);
    
}


