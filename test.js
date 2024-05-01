let player
let playerX
let playerY



function preload(){
  	player = loadImage('ufo.png')

  }


  function setup(){
 	createCanvas(windowWidth,windowHeight)
 	
 }

 function draw(){

 	background(255)

 	if(startBool == true){
 		startGame()
 	}

 	if(winBool == true){
 		winGame()
 	}
 
 

 	}
 

 function startGame(){
background(225)
 	noStroke()
	image(player,playerX,playerY,30,30)
  
 }