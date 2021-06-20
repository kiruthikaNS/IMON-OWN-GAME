var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var formBg,gamePageBg;
var formBgVar;



function preload()
{
  	formBg=loadImage("game open image.jpg");
    gamePageBg=loadImage("game open image2.jpg");
}

function setup(){
  canvas=createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(formBg);
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
