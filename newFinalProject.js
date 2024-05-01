	 
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
let lossBool=	false

let hotspot1X
let hotspot1Y


let hotspot2X 
let hotspot2Y 

let hotspot3X
let hotspot3Y

let hotspot4X
let hotspot4Y

let hotspot5X
let hotspot5Y

let hotspot6X
let hotspot6Y

let hotspot7X
let hotspot7Y

let hotspot8X
let hotspot8Y

let hotspot9X
let hotspot9Y

let grasshotspotX
let grasshotspotY

let hotspotOpenX
let hotspotOpenY

let hotspotOpen2X
let hotspotOpen2Y

let x
let y
let z

let timerX
let speed = .015

let spamcounter = 0 
let spamcounterduo = 0
let spamcounterMac = 0
let spamcounterAmazon = 0
let spamcounterNike =0
let spamcounterProtein = 0
let spamcounterRandom = 0
let spamcounterSpotify = 0
let spamcounterSleeping = 0
let spamcountergrass = 0
let spamcounteropen = 0
let spamcounteropen2 = 0

let score = 0
let button 

let spanishScoreBool = true
let commonScoreBool = true
let codingClassScoreBool= true
let afroScoreBool = true 
let dataScoreBool = true 
let gymScoreBool = true 
let hangoutScoreBool = true 



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
	spanishconfused = loadImage('Images/spanishconfused.jpg')
	spanishbored = loadImage('Images/spanish bored.jpg')
	eating = loadImage('Images/eating.jpg')
	study = loadImage('Images/studyingnapping.jpg')
	writing = loadImage('Images/writingmeme.jpg')
	typing = loadImage('Images/typingfast.jpg')
	coding = loadImage('Images/computer.jpg')
	data = loadImage('Images/data.jpg')
	eating2= loadImage('Images/eating2.jpg')
	spotify = loadImage('Images/spotify.png')
	youtubeAd = loadImage('Images/youtube ad.jpg')
	kais= loadImage('Images/funnypicfriends.jpeg')
	datamind=loadImage('Images/dataming.jpg')
	databackground=loadImage('Images/backgrounddata.webp')

	//friend 3 ads
	alec = loadImage('Images/alecpic.JPEG')
	austin = loadImage('Images/austinpic.JPEG')
	kai= loadImage('Images/kaipic.JPEG')
	aleyah = loadImage('Images/terrified.JPEG')
	// ads
	gymAd = loadImage('Images/lifting.webp')
	basketballkai = loadImage('Images/basketballkyrie.webp')
	hurtlift = loadImage('Images/hurtlift.webp')
	shower = loadImage('Images/showering.jpg')
	sleeping = loadImage('Images/sleep.png')
	//afro content
	jid = loadImage('Images/afrocontent4.jpg')
	enslaved = loadImage('Images/afrocontent3.jpg')
	whipped = loadImage('Images/afrocontent2.jpg')
	hiphopculture = loadImage('Images/afrocontent.jpg')

	//pathway ads
	coffeead = loadImage('Images/coffee ad.jpg')
	orangeJ = loadImage('Images/orange juice.jpg')
	duolingo = loadImage('Images/duolingo.png')
	googletranslate = loadImage('Images/translate-spanish.jpg')
	mcdonalds = loadImage('Images/mcdonalds ad.png')
	tacobell = loadImage('Images/foodtacoad.png')
	bigbrother = loadImage('Images/bigbrother.jpg')
	bigbrother2= loadImage('Images/watchingyou.jpg')
	// amazon
	// quizlet
	// nike
	// bonefishgrill 



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
	frameRate(60);
	hotspot1X= windowWidth/2-200
	hotspot1Y= windowHeight/2+50

	hotspot2X=windowWidth/2+470
	hotspot2Y=150

	hotspot3X =windowWidth/2+100
	hotspot3Y = windowHeight-370

	hotspot4X= 50
	hotspot4Y=windowHeight/2+50

	hotspot5X=0
	hotspot5Y=160

	hotspot6X=windowWidth/2+300
	hotspot6Y=windowHeight-370

	hotspot7X= windowWidth/2+450
	hotspot7Y=windowHeight-370

	hotspot8X= 275
	hotspot8Y=windowHeight-300

	hotspot9X=  windowWidth/2+640
	hotspot9Y=30

	grasshotspotX = windowWidth/2+300
 grasshotspotY= windowHeight/2-100

 hotspotOpenX=200
 hotspotOpenY= 200

 hotspotOpen2X=windowWidth/2+100
 hotspotOpen2Y=windowHeight-100



	playerX=windowWidth/2
	playerY=windowHeight/2

	drawBuildingX = windowHeight- 180
	drawBuildingY = 100

	afroClassX = windowWidth/2+150
	afroClassY =30

	codingClassX = windowWidth/2+370
	codingClassY = 30

	spanishX = windowWidth/2+590
	spanishY = 30

	dataClassX = 100
	dataClassY = windowHeight/2 -300

	commonsX = windowWidth/2+10
	commonsY = windowHeight-470

	gymX = windowWidth-200
	gymY = windowHeight-270

	hangOutX = windowWidth/2+515
	hangOutY = windowHeight/2-100

	x = 310
	y = 0
	z= 0





}

function draw(){

	background(255)

	if(startBool == true){
		startGame()

	}

	if(winBool == true){
		winGame()
	}
	if(lossBool == true){
		lossGame()
	}



}


function startGame(){
	background(x-500,x-700,x-900)
	noStroke()
	fill(30)
	textSize(30)
text('Classes that you have attended on time'+ score + '!!!',170,100)

	 	//drawing road
	fill(30)
	stroke(0)
	rect(0, windowHeight, 50, -1000);
triangle(330,windowHeight-100,475,463,515,462)
	triangle(365,windowHeight-100,200,463,240,462)
	rect(51,windowHeight-300,1000,30);
	rect(windowWidth/2 +100, windowHeight-300, 30,-1000);
	rect(windowWidth/2 +100, 100, 1000,30);
	rect(windowWidth/2 +470, 100, 30,360)
	rect(windowWidth/2, windowHeight-300,1000,30);
	
	 		 //grass
	fill(15,50,32)
	stroke(0)
	rect(windowWidth/2 + 130,130,340,312)
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
	rect(windowWidth/2 +480, 140, 10,35)
	rect(windowWidth/2 +480, 190, 10,35)
	rect(windowWidth/2 +480, 240, 10,35)
	rect(windowWidth/2 +480, 290, 10,35)
	rect(windowWidth/2 +480, 340, 10,35)
	rect(windowWidth/2 +480, 390, 10,35)


	//timer
	fill(x,y,z)
	rect(300,0,900,30)

	let deltaX = speed * deltaTime;

  // Update the x variable.
	x += deltaX;

  // Reset x to 0 if it's
  // greater than 100.
	if (x > 1200)  {
		x = 320;
	}

  // Use x to set the circle's
  // position.

	circle(x, 15, 20);

  // if (dist())

//timer end 






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
	//Score 
	if(dist(playerX, playerY,spanishX,spanishY)<50 && spanishScoreBool == true){
		score++
		spanishScoreBool = false;
	}
	if(dist(playerX, playerY, commonsX, commonsY) < 20 && commonScoreBool == true) {
		score++
		commonScoreBool= false;
	}
	if(dist(playerX, playerY, codingClassX, codingClassY) < 20 && codingClassScoreBool== true){
		score++
		codingClassScoreBool= false;
	}
	if(dist(playerX, playerY, dataClassX, dataClassY) < 50 && dataScoreBool== true){
		score++
		dataScoreBool= false;
	}
	if(dist(playerX, playerY, hangOutX, hangOutY) < 20 && hangoutScoreBool== true){
		score++
		hangoutScoreBool=false;
	}
	if(dist(playerX, playerY, gymX, gymY) < 20 && gymScoreBool== true){
		score++
		gymScoreBool= false;
	}
	if(dist(playerX, playerY, afroClassX, afroClassY) < 20 && afroScoreBool== true){
		score++
		afroScoreBool= false;
	}

	if(dist(playerX, playerY,spanishX,spanishY)<50){
		for(i=0; i<20; i++){
			image(spanishbored,random(windowWidth), random(windowHeight/2-20,windowHeight/2), 100, 100)
			image(spanishconfused,random(windowWidth/2,windowWidth/2+20),random(windowHeight),100,100)
			image(spanishbored,random(0,25),random(0,50),random(100,700),random(100,300))
			image(spanishconfused,random(windowWidth-500,windowWidth-480),random(windowHeight-300,windowHeight-100),random(100,200),random(100,300))
			image(spanishconfused, random(windowWidth/2+390, windowWidth/2+420), random(windowHeight),100,100)
			image(spanishbored,random(windowWidth),random(20,50),100,100)
			image(spanishconfused,random(windowWidth),random(windowHeight),30,30)
			image(spanishbored,random(windowWidth),random(windowHeight),60,60)
		}
	}

	if(dist(playerX, playerY, commonsX, commonsY) < 20){
		for(i=0; i<20; i++){
			image(eating,random(0,windowWidth),random(0,windowHeight),random(0,300),random(70,300))
			image(eating2,random(0,windowWidth),windowHeight/2,100,100)
			image(eating,random(windowWidth/2+10,windowWidth/2+30),random(windowHeight),50,50)
			image(eating,random(windowWidth),random(windowHeight-470,windowHeight-430),50,50)
			image(eating2,random(windowWidth/2,windowWidth/2+40),random(windowHeight/2,windowHeight/2+20),200,200)
		}			
	}
//Monroe
	if(dist(playerX, playerY, 325, windowHeight-175) < 50){
		for(i=0; i<20; i++){
			image(study,random(windowWidth/2),random(windowHeight/2),100,100)
			image(writing, random(windowWidth),windowHeight-100,100,100)
			image(writing,random(windowWidth-200,windowWidth-180),random(20,40),150,150)
			image(study,random(windowWidth),random(windowHeight), 150,150)

		}

	}

	if(dist(playerX, playerY, codingClassX, codingClassY) < 20){
		for(i=0; i<20; i++){
			image(typing,random(windowWidth/2,windowWidth/2+10),windowHeight/2,100,100)
			image(coding, random(windowWidth),random(windowHeight), 150, 100)
			image(typing,random(windowWidth), random(windowHeight),200,200)
		}
	}
	if(dist(playerX, playerY, dataClassX, dataClassY) < 50){
		for(i=0; i<20; i++){
			image(data,random(dataClassX, dataClassX+20),random(windowHeight),150,100)
			image(data,random(windowWidth),random(windowHeight),random(0,200),random(0,200))
			image(coding,random(windowWidth),random(dataClassY, dataClassY+20),150,150)
			image(coding,random(windowWidth),random(windowHeight), random(0,100),random(0,100))

		}
	}
	if(dist(playerX, playerY, hangOutX, hangOutY) < 20){
		for(i=0; i<15; i++){
			image(alec,random(windowWidth/2-140,windowWidth/2-120), random(0,windowHeight),random(0,200),random(0,300))
			image(austin,random(windowWidth/2-80,windowWidth/2-50),random(0,windowHeight),100,random(0,100))
			image(kai,random(windowWidth/2+60,windowWidth/2+120),random(0,windowHeight),random(0,100),100)
			image(aleyah,random(windowWidth/2,windowWidth/2+30),random(windowHeight),random(100,200),random(0,200))
			image(alec,random(windowWidth),random(windowHeight),100,100)
			image(austin,random(windowWidth),random(windowHeight),100,100)
			image(kai,random(windowWidth),random(windowHeight),100,100)
			image(aleyah,random(windowWidth),random(windowHeight),100,100)

		}
	}

	if(dist(playerX, playerY, gymX, gymY) < 20){
		for(i=0;i<15;i++){
			image(gymAd,random(0,windowWidth),random(0,windowHeight),100,100)
			image(gymAd,random(500,525),random(500,520),100,100)
			image(basketballkai,random(windowWidth),random(windowHeight),150,150)
			image(basketballkai,random(100,105),random(windowHeight),100,100)
			image(basketballkai,random(600,605),random(500,505),150,150)
			image(hurtlift,random(windowWidth),random(100,105),150,150)
			image(hurtlift,random(windowWidth),random(windowHeight),100,100)
			image(hurtlift,random(windowWidth-300,windowWidth-305),random(windowHeight-300,windowHeight-310),150,150)
		}
	}
	if(dist(playerX, playerY, afroClassX, afroClassY) < 20){
		for(i=0;i<15;i++){
			image(jid,random(windowWidth/2+150, windowWidth/2+170),random(windowHeight),100,100)
			image(jid,random(100,105),random(300,305),random(200,205),200)
			image(jid,random(windowWidth),random(windowHeight),75,50)
			image(enslaved,random(windowWidth),random(30,40),100,100)
			image(enslaved,random(377,385),random(100,107),200,random(205,215))
			image(enslaved,random(windowWidth),random(windowHeight),25,150)
			image(whipped,random(windowWidth-100,windowWidth-70),random(windowHeight),150,100)
			image(whipped,random(windowWidth-160,windowWidth-150),random(windowHeight-200,windowHeight-205),random(100,105), random(300,305))
			image(whipped,random(windowWidth),random(windowHeight),100,100)
			image(hiphopculture,random(windowWidth),random(30,50),140,120)
			image(hiphopculture,random(30,40),random(100,110),220,150)
			image(hiphopculture,random(windowWidth),random(windowHeight),100,100)
		}
	}


	 			//pathway ads 
	if(dist(playerX, playerY,hotspot1X,hotspot1Y)<50){
		for(i=0; i<20; i++){
			image(coffeead,random(windowWidth), random(windowHeight/2-20,windowHeight/2), 100, 100)
			image(orangeJ,random(windowWidth/2,windowWidth/2+20),random(windowHeight),100,100)
			image(coffeead,random(0,windowWidth),random(0,windowHeight),100,100)
			image(orangeJ,random(windowWidth),random(windowHeight), 50,50)
		}
	}
	if(dist(playerX, playerY,hotspot2X,hotspot2Y)<50){
		for(i=0; i<20; i++){
			image(duolingo,random(windowWidth), random(windowHeight/2-20,windowHeight/2), 100, 100)
			image(googletranslate,random(windowWidth/2,windowWidth/2+20),random(windowHeight),100,100)
			image(duolingo,random(0,windowWidth),random(0,windowHeight),100,100)
			image(googletranslate,random(windowWidth),random(windowHeight), 50,50)
			image(duolingo,random(hotspot2X-200,hotspot2X-205),random(100,110),100,100)

		}
	}
	//coffee orange 
	if(spamcounter == 0 && dist(playerX, playerY,hotspot1X,hotspot1Y)<50){


		CoffeeOrangeJ()

	}else if(dist(playerX, playerY,hotspot1X,hotspot1Y)>50){
		spamcounter = 0
	}


//duolingo
 	if(spamcounterduo == 0 && dist(playerX,playerY,hotspot2X,hotspot2Y)<50){


		duolingotranslate()

}else if(dist(playerX,playerY,hotspot2X,hotspot2Y)>50){
 		spamcounterduo = 0
	}
//mac and taco
 	if(spamcounterMac == 0 && dist(playerX,playerY,hotspot3X,hotspot3Y)<50){


		macANDtacobell()
}else if(dist(playerX,playerY,hotspot3X,hotspot3Y)>50){
 		spamcounterMac = 0
	}
	//amazon 
	if(spamcounterAmazon == 0 && dist(playerX,playerY,hotspot4X,hotspot4Y)<50){


		amazonQuizlet()
}else if(dist(playerX,playerY,hotspot4X,hotspot4Y)>50){
 		spamcounterAmazon = 0
	}
	//Nike
		if(spamcounterNike == 0 && dist(playerX,playerY,hotspot5X,hotspot5Y)<50){
NikeBoneFish()
}else if(dist(playerX,playerY,hotspot5X,hotspot5Y)>50){
 		spamcounterNike = 0
	}
	//spotify
	if(spamcounterSpotify == 0 && dist(playerX,playerY,hotspot6X,hotspot6Y)<50){


		spotifyFb()
}else if(dist(playerX,playerY,hotspot6X,hotspot6Y)>50){
 		spamcounterSpotify = 0
	}
	//Protien gym
	if(spamcounterProtein == 0 && dist(playerX,playerY,hotspot7X,hotspot7Y)<50){
		gymprotein()
}else if(dist(playerX,playerY,hotspot7X,hotspot7Y)>50){
 		spamcounterProtein = 0

}
//ramdom ad
if(spamcounterRandom == 0 && dist(playerX,playerY,hotspot8X,hotspot8Y)<50){
		randomad()
}else if(dist(playerX,playerY,hotspot8X,hotspot8Y)>50){
 		spamcounterRandom = 0

}
//Sleep number
if( spamcounterSleeping== 0 && dist(playerX,playerY,hotspot9X,hotspot9Y)<50){
		sleedad()
}else if(dist(playerX,playerY,hotspot9X,hotspot9Y)>50){
 		spamcounterSleeping = 0

}
if( spamcountergrass== 0 && dist(playerX,playerY,grasshotspotX,grasshotspotY)<150){
		grassArea()
}else if(dist(playerX,playerY,grasshotspotX,grasshotspotY)>150){
 		spamcountergrass = 0

}
if( spamcounteropen== 0 && dist(playerX,playerY,hotspotOpenX,hotspotOpenY)<250){
		openArea()
}else if(dist(playerX,playerY,hotspotOpenX,hotspotOpenY)>250){
 		spamcounteropen = 0

}
if( spamcounteropen2== 0 && dist(playerX,playerY,hotspotOpen2X,hotspotOpen2Y)<200){
		openArea2()
}else if(dist(playerX,playerY,hotspotOpen2X,hotspotOpen2Y)>200){
 		spamcounteropen2 = 0

}
	if (score >=7){
		winBool=true
		startBool=false
	}
// 	if (X>=599){
// 		lossBool=true
// 		startBool=false
// }
}




function CoffeeOrangeJ(){

	for(i=0; i<2; i++){
    // randNumLeft = random(200, 600)
    // randNumTop = random(0, 800)
		window.open("Images/coffee ad.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/orange juice.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
	}
	
	spamcounter = 1

}
function duolingotranslate(){

	for(i=0; i<2; i++){
    // randNumLeft = random(200, 600)
    // randNumTop = random(0, 800)
		window.open("Images/duolingo.png", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/translate-spanish.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
	}
	
	spamcounterduo = 1

}

function macANDtacobell(){
	for(i=0;i<2;i++){

	window.open("Images/mcdonalds ad.png", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/foodtacoad.png", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
	}
	spamcounterMac=1
}

function amazonQuizlet(){
	for(i=0;i<2;i++){
	window.open("Images/amazon.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/quizleet.png", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");

	}
	spamcounterAmazon = 1
}
function NikeBoneFish(){
	for(i=0;i<2;i++){
		window.open("Images/Bonefishgrill.png", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/nike ad.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
	}
	spamcounterNike = 1
}
function spotifyFb(){
	for(i=0;i<2;i++){
			window.open("Images/fb.png", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/spotify.png", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
	}
	spamcounterSpotify = 1
}
	function gymprotein(){
	for(i=0;i<2;i++){
		window.open("Images/protein ad.webp", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/gym ad.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/lifting.webp", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		}
		spamcounterProtein = 1
	}
	function randomad(){
	for(i=0;i<2;i++){
		window.open("Images/youtube ad.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/soap ad.png", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		}
		spamcounterRandom = 1
	}
	function sleedad(){
		for(i=0;i<2;i++){

	window.open("Images/sleepnumber ad.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/sleep ad.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
			}
			spamcounterSleeping = 1
	}

function grassArea(){
		for(i=0;i<2;i++){
				window.open("Images/sleepnumber ad.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/sleep ad.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/protein ad.webp", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/gym ad.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/lifting.webp", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
			window.open("Images/Bonefishgrill.png", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/nike ad.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
}
spamcountergrass = 1

	}
	function openArea(){
		for(i=0;i<2;i++){
			window.open("Images/Bonefishgrill.png", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/nike ad.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/duolingo.png", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/translate-spanish.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
				window.open("Images/watchingyou.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
						window.open("Images/bigbrother.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
	}
	spamcounteropen = 1
} 
function openArea2(){
	for(i=0;i<2;i++){
		window.open("Images/doordash-.png", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/Dunkin-Emblem.png", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/youtube ad.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
		window.open("Images/subway.png", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
				window.open("Images/watchingyou.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
						window.open("Images/bigbrother.jpg", "", "width=400,height=400, left="+random(-400, windowWidth)+", top="+random(-300, windowHeight)+"");
	}
	spamcounteropen2=1
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
	if (playerY<= 0){
		playerY=0
	}
	if (playerX<= 0){
		playerX=0
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

	
}
	function winGame(){
		background(0,0,255)
		image(databackground,0,0, windowWidth,windowHeight)
		for(i=0;i<2;i++){
			image(jid,random(windowWidth/2+150, windowWidth/2+170),random(windowHeight),100,100)
				image(enslaved,random(windowWidth),random(30,40),100,100)
					image(hiphopculture,random(windowWidth),random(windowHeight),100,100)
				image(austin,random(windowWidth),random(windowHeight),100,100)
			image(kai,random(windowWidth),random(windowHeight),100,100)
			image(aleyah,random(windowWidth),random(windowHeight),100,100)
			image(gymAd,random(0,windowWidth),random(0,windowHeight),100,100)
			image(player, random(windowWidth),random(windowHeight),100,100)
			image(kais,random(windowWidth),random(windowHeight),100,100)

		}
		fill(225)
		textSize(40)
		text('You made it to all your class in time!!!', windowWidth/2-300,100)


	}
	function lossGame(){
		background(0,0,255)
		for(i=0;i<2;i++){
			image(jid,random(windowWidth/2+150, windowWidth/2+170),random(windowHeight),100,100)
				image(enslaved,random(windowWidth),random(30,40),100,100)
					image(hiphopculture,random(windowWidth),random(windowHeight),100,100)
				image(austin,random(windowWidth),random(windowHeight),100,100)
			image(kai,random(windowWidth),random(windowHeight),100,100)
			image(aleyah,random(windowWidth),random(windowHeight),100,100)
			image(gymAd,random(0,windowWidth),random(0,windowHeight),100,100)
			image(player, random(windowWidth),random(windowHeight),100,100)

		}
		fill(225)
		textSize(40)
		text('Your tardy try again!!!', windowWidth/2-300,100)


	}


	 	// 	if(dist(playerX, playerY, drawBuildingX, drawBuildingY) < 20){
	 	// 		image()



















