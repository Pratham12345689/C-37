var  database;
var gameState=0,playerCount=0,distance=0;
var allPlayers;
var form,game,player;


function setup(){
  database = firebase.database();
 
  createCanvas(500,500);
game=new Game ();
game.getState();
game.start();

 
}

function draw(){
  background("yellow");
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
game.play();
  }
    
    
  
}

