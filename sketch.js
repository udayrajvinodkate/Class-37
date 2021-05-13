var database;
var gameState = 0;
var playerCount;
var form,player,game;




function setup(){
    createCanvas(500,500);
   
    database = firebase.database();
    game = new Game();
    game.getstate();
    game.start();
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1)
    }
    if(gameState===1){
       clear();
       game.play();
    }
  
}


