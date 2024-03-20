let playerX 
let playerY 
 
 let monroe 
 let commons
 let friends
 let sleep
 let codingClass
 let spanish
 let afroClass
 let player
 let warren
 let dataClass 
 let startBool = true
 let  winBool = false



  // function preload(){
 // 	commons = loadImage('commons.png')
// 	spanish = loadImage('spanishclass.png')
// 	 	codingClass = loadImage('codingClass.png')
// 	afroClass = loadImage('Afro.png')
// 	player = loadImage('playericon.webp')

  // }
  // function preload(){
  // 	spanish = loadImage('spanishclass.png')
  // }
  // function preload(){
  // 	codingClass = loadImage('codingClass.png')
  // }
  // function preload(){
  // 	afroClass = loadImage('Afro.png')
  // }
  // function preload(){
  // 	player = loadImage('ufo.png')

 //}

 // function circle(){
 // 	fill(200)
 // triangle= circle(10,10,10,10,10,10);
 // player = triangle
 // }
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
	 // image(player,playerX,playerY,30,30)
  
 	//drawing road
 	fill(30)
 	stroke(0)
 		rect(0, windowHeight, 50, -1000);

 	rect(51,windowHeight-300,1000,30);
 	rect(windowWidth/2 +100, windowHeight-300, 30,-1000);
 	rect(windowWidth/2 +100, 100, 1000,30);
 	rect(windowWidth/2 +270, 100, 30,360)
 	rect(windowWidth/2, windowHeight-300,1000,30);
 		 triangle(330,windowHeight-100,475,463,515,462)
 		 triangle(365,windowHeight-100,200,463,240,462)
 		 fill(15,50,32)
 		 stroke(0)
 		 rect(windowWidth/2 + 130,130,150,305)



 	// Draw buildings
 	drawBuilding(300, windowHeight- 180, 100, 180);
 	
 }


 function keyPressed(){

 	if(keyCode === LEFT_ARROW){
 		playerX = playerX - 30;
 	}  else	if(keyCode === RIGHT_ARROW){
 		playerX = playerX + 30
 	}

 	if(keyCode === UP_ARROW){
 		playerY = playY - 30;
 	} else if(keyCode === DOWN_ARROW){
 		playerY = playerY + 30;
 	}
 }
 	function drawBuilding(x, y, width, height) {
 		fill(150);
 		rect(x, y, width, height);

		// Draw windows
 		fill(255);
 		for (let i = x + 20; i < x + width - 10; i += 40) {
 			for (let j = y + 10; j < y + height - 10; j += 40) {
 				rect(i, j, 20, 30);
 			}
 		}
 	}
 
// function draw() {
//   background(225);
  
//   // Draw road
 		 
  
//   // Draw buildings
//   drawBuilding(500, windowHeight- 180, 100, 180);
//   //Draw Road
// 	drawRoad(100,200);
//   }

// function drawBuilding(x, y, width, height) {
//   fill(150);
//   rect(x, y, width, height);
  
//   // Draw windows
//   fill(255);
//   for (let i = x + 20; i < x + width - 10; i += 40) {
//     for (let j = y + 10; j < y + height - 10; j += 40) {
//       rect(i, j, 20, 30);
//     }

//     function drawRoad(x,y){
//     	stroke(225)
//     	strokeWeight(3)
//     	noFill()
//     	beginShape()
//     	curveVertex(x,300)
//     	curveVertex(200,y)
//     	curveVertex(800,400)
//     	curveVertex(1000,800)
//     	endShape()

//     }

// }

  
