var gameState=0;
var database;
var playerCount,player,game,form;
var allPlayers;
function setup(){
    createCanvas(500,500);
    database=firebase.database()
    game=new Game();
    game.getState();
game.start();
}

function draw(){
    background("white");

}
