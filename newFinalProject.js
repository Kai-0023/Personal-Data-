
let playerX 
let playerY 

let drawBuildingX 
let drawBuildingY 

let afroClassX 
let afroClassY

let codingClassX 
let codingClassY 

let spanishX 
let spanishY 

let dataClassX 
let dataClassY 

let commonsX 
let commonsY 

let gymX 
let gymY 

let hangOutX 
let hangOutY 


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



  function preload(){
  	//Places
 	commons = loadImage('Images/commons.png')
	spanish = loadImage('Images/spanishclass.png')
	 	codingClass = loadImage('Images/codingClass.png')
	afroClass = loadImage('Images/Afro.png')
	player = loadImage('Images/player.png')
	dataClass = loadImage('Images/dataclass.webp')
	gym = loadImage('Images/gymicon.jpg')
	hangOut = loadImage('Images/friendsicon.png')

	//ads
spanishbored = loadImage('Images/spanish bored.jpg')
eating = loadImage('Images/eating.jpg')
study = loadImage('Images/studyingnapping.jpg')
typing = loadImage('Images/typingfast.jpg')
eating2= loadImage('Images/eating2.jpg')
//friend 3 ads
alec = loadImage('Images/alecpic.JPEG')
austin = loadImage('Images/austinpic.JPEG')
kai= loadImage('Images/kaipic.JPEG')
// ads
gymAd = loadImage('Images/lifting.webp')
shower = loadImage('Images/showering.jpg')
sleeping = loadImage('Images/sleep.png')

  }
  // function preload(){
  // 	spanish = loadImage('spanishclass.png')
  // }
  // function preload(){
  // 	codingClass = loadImage('codingClass.png')
  // }
//function preload(){
//	afroClass = loadImage('Afro.png')
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
 	playerX=windowWidth/2
 	playerY=windowHeight/2

 drawBuildingX = windowHeight- 180
 drawBuildingY = 100

 afroClassX = windowWidth/2+150
afroClassY =30

 codingClassX = windowWidth/2+270
 codingClassY = 30

 spanishX = windowWidth/2+390
 spanishY = 30

 dataClassX = 100
dataClassY = windowHeight/2 -100

 commonsX = windowWidth/2+10
 commonsY = windowHeight-270

 gymX = windowWidth-200
 gymY = windowHeight-270

 hangOutX = windowWidth/2+300
 hangOutY = windowHeight/2-100

 	
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
 		 //grass
 		 fill(15,50,32)
 		 stroke(0)
 		 rect(windowWidth/2 + 130,130,140,312)
 		 //pj road
 		 fill(225)
 		 stroke(0)
 		 rect(22,20,10,-20)
 		 rect(22,70,10,-35)
 		 rect(22,120,10,-35)
 		 rect(22,170,10,-35)
 		 rect(22,220,10,-35)
 		 rect(22,270,10,-35)
 		 rect(22,320,10,-35)
 		 rect(22,370,10,-35)
 		 rect(22,420,10,-35)
 		
 		 rect(22,520,10,-35)
 		 rect(22,570,10,-35)
 		 rect(22,620,10,-35)
 		 rect(22,670,10,-35)
 		 rect(22,670,10,-35)
 		 rect(22,720,10,-35)
 		 rect(22,790,10,-35)

 		 //feret st.
 		 rect(55,windowHeight-290, 35,10)
 		 rect(105,windowHeight-290, 35,10)
 		 rect(155,windowHeight-290, 35,10)
 		 rect(205,windowHeight-290, 35,10)
 		 rect(255,windowHeight-290, 35,10)
 		 rect(305,windowHeight-290, 35,10)
 		 rect(355,windowHeight-290, 35,10)
 		 rect(405,windowHeight-290, 35,10)
 		 rect(455,windowHeight-290, 35,10)
 		 rect(505,windowHeight-290, 35,10)
 		 rect(555,windowHeight-290, 35,10)
 		 rect(605,windowHeight-290, 35,10)
 		 rect(655,windowHeight-290, 35,10)
 		 rect(705,windowHeight-290, 35,10)
 		 rect(755,windowHeight-290, 35,10)
 		 rect(805,windowHeight-290, 35,10)
 		 rect(855,windowHeight-290, 35,10)
 		 rect(905,windowHeight-290, 35,10)
 		 rect(955,windowHeight-290, 35,10)
 		 rect(1005,windowHeight-290, 35,10)
 		 rect(1055,windowHeight-290, 35,10)
 		 rect(1105,windowHeight-290, 35,10)
 		 rect(1155,windowHeight-290, 35,10)
 		 rect(1205,windowHeight-290, 35,10)
 		 rect(1255,windowHeight-290, 35,10)
 		 rect(1305,windowHeight-290, 35,10)
 		 rect(1355,windowHeight-290, 35,10)
 		 rect(1405,windowHeight-290, 35,10)
 		 rect(1455,windowHeight-290, 35,10)
 		 rect(1505,windowHeight-290, 35,10)
 		 rect(1555,windowHeight-290, 35,10)
 		 rect(1605,windowHeight-290, 35,10)
 		 rect(1655,windowHeight-290, 35,10)
 		 rect(1705,windowHeight-290, 35,10)
 		 rect(1755,windowHeight-290, 35,10)
 		 rect(1805,windowHeight-290, 35,10)
 		 rect(1855,windowHeight-290, 35,10)
 		 rect(1905,windowHeight-290, 35,10)
 		 //second pd.
		rect(windowWidth/2 +110, windowHeight-310, 10,-35);
		rect(windowWidth/2 +110, windowHeight-360, 10,-35);
		rect(windowWidth/2 +110, windowHeight-410, 10,-35);
		rect(windowWidth/2 +110, windowHeight-460, 10,-35);
		rect(windowWidth/2 +110, windowHeight-510, 10,-35);
		rect(windowWidth/2 +110, windowHeight-560, 10,-35);
		rect(windowWidth/2 +110, windowHeight-650, 10,-35);
		rect(windowWidth/2 +110, windowHeight-700, 10,-35);
		//short parallel
		rect(windowWidth/2 +140, 110,35,10)
		rect(windowWidth/2 +190, 110,35,10)
		rect(windowWidth/2 +240, 110,35,10)
		rect(windowWidth/2 +290, 110,35,10)
		rect(windowWidth/2 +340, 110,35,10)
		rect(windowWidth/2 +390, 110,35,10)
		rect(windowWidth/2 +440, 110,35,10)
		rect(windowWidth/2 +490, 110,35,10)
		rect(windowWidth/2 +540, 110,35,10)
		rect(windowWidth/2 +590, 110,35,10)
		rect(windowWidth/2 +640, 110,35,10)
		rect(windowWidth/2 +690, 110,35,10)
		rect(windowWidth/2 +740, 110,35,10)
		rect(windowWidth/2 +790, 110,35,10)
		rect(windowWidth/2 +840, 110,35,10)
		rect(windowWidth/2 +890, 110,35,10)
		//third pd.
		rect(windowWidth/2 +280, 140, 10,35)
		rect(windowWidth/2 +280, 190, 10,35)
		rect(windowWidth/2 +280, 240, 10,35)
		rect(windowWidth/2 +280, 290, 10,35)
		rect(windowWidth/2 +280, 340, 10,35)
		rect(windowWidth/2 +280, 390, 10,35)
								





 	// Draw buildings
 	drawBuilding(300, drawBuildingX, drawBuildingY, 180)
 	//Afro Class
 	image(afroClass,afroClassX,afroClassY,70,70)
 	//coding class
 	image(codingClass,codingClassX,codingClassY,70,70)
 	//spanish class
 	image(spanish, spanishX,spanishY,70,70)
 	//data class
 	image(dataClass,dataClassX,dataClassY,70,70)
 	//player icon
 	 image(player,playerX,playerY,70,70)
 	 //commons
 	 image(commons,commonsX,commonsY,70,70)
 	 //gym
 	 image(gym, gymX,gymY,70,70)
 	 //friends / hangout
 	 image(hangOut, hangOutX,hangOutY,70,70)
 
  }


  function keyPressed(){

  	if(keyCode === LEFT_ARROW){
  		playerX = playerX - 30;
  	}  else	if(keyCode === RIGHT_ARROW){
  		playerX = playerX + 30
  	}

  	if(keyCode === UP_ARROW){
  		playerY = playerY - 30;
  	} else if(keyCode === DOWN_ARROW){
  		playerY = playerY + 30;
  	}
  	if(playerY>= windowHeight -20){
  		playerY=windowHeight-20
  	}
  	if (playerX>=windowWidth-20){
  		playerX=windowWidth-20
  	}
  	if (playerY<= 20){
  		playerY=20
  	}
  	if (playerX<= 20){
  		playerX=20
  	}
  }

 	 
 // 	 if(playerX<=windowWidth-20)
 // 	 playerX>=20
 // 	 playerY>=20
 // }
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
 	// 	if(dist(playerX, playerY, drawBuildingX, drawBuildingY) < 20){
 	// 		image()
 		if(dist(playerX, playerY, spanishX, spanishY) < 20){
 			image(spanishbored,windowWidth/2,windowHeight/2,100,100)
 		

		if(dist(playerX, playerY, commonsX, commonsY) < 20){
 			image(eating,windowWidth/2,windowHeight/2,100,100)
 		

 				if(dist(playerX, playerY, drawBuildingX, drawBuildingY) < 20){
 			image(study,windowWidth/2,windowHeight/2,100,100)

 			if(dist(playerX, playerY, codingClassX, codingClassY) < 20){
 			image(typing,windowWidth/2,windowHeight/2,100,100)

		if(dist(playerX, playerY, commonsX, commonsY) < 20){
 			image(eating2,windowWidth/2,windowHeight/2,100,100)

 			if(dist(playerX, playerY, hangOutX, hangOutY) < 20){
 			image(alec,random(0,windowWidth) random(0,windowHeight),100,100)
 		
 		if(dist(playerX, playerY, hangOutX, hangOutY) < 20){
 			image(austin,random(0,windowWidth),random(0,windowHeight),100,100)
 		
	 if(dist(playerX, playerY, hangOutX, hangOutY) < 20){
 			image(kai,random(0,windowWidth),random(0,windowHeight),100,100)
 		


 				if(dist(playerX, playerY, commonsX, commonsY) < 20){
 			image(eating2,windowWidth/2,windowHeight/2,100,100)

	if(dist(playerX, playerY, commonsX, commonsY) < 20){
 			image(eating2,windowWidth/2,windowHeight/2,100,100)
}
}
}
}
}
}
}
}
}
}



	}


