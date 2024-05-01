let paddleWidth = 250
	let ufo

	let ufoX = []
	let ufoY = []

	let xSpeed = []
	let ySpeed = []


	let score = 0

	let mouseDist

	let startBool = true
	let winBool = false


	let good
	let bad

	let goodX = []
	let goodY = []

	let badX = []
	let badY = []

	let badYSpeed = []
	let badXSpeed = []

	let goodXSpeed = []
	let goodYSpeed = []



	function preload(){
		ufo = loadImage('ufo.png')
		goodArray = loadImage('goodalien.png')
		badArray = loadImage('badalien.png')
		galaxy = loadImage('galaxybackground.png')
	}

	function setup(){
		createCanvas(windowWidth, windowHeight)
		imageMode(CENTER)

		// furbyX = windowWidth/2
		// furbyY = windowHeight/2

		rectMode(CENTER)

		for(let i=0; i<1; i++){
			ufoX.push(windowWidth/2)
			ufoY.push(windowHeight/2)
			xSpeed.push(1)
			ySpeed.push(2)
		}

		for(let i=0;i<20;i++){

			goodX.push(random(windowWidth))
			goodY.push(random(windowHeight))
			goodXSpeed.push(1)
			goodYSpeed.push(1)

		}
		for(let i=0;i<10;i++){

			badX.push(random(windowWidth))
			badY.push(random(windowHeight))
			badXSpeed.push(1)
			badYSpeed.push(1)
			
		}

	}

	function draw(){

		if(startBool == true){
			startGame()
		}

		if(winBool == true){
			winGame()
		}

	}


	function startGame(){
	
	image(galaxy, windowWidth/2, windowHeight/2, windowWidth, windowHeight)

		//paddle
		rect(mouseX, windowHeight-20, paddleWidth, 40,30,30,30,30)


		fill(255)
		textSize(40)
		text('Catch aliens '+ score + ' points!!!', windowWidth/2-300,100)

		fill(255)
		textSize(20)
		text('Good alien = +2 points',windowWidth-300,50)
			text('Bad alien = -1 point',windowWidth-300, 100)
			image(goodArray, windowWidth-80,40,30,30)
			image(badArray, windowWidth-100,100,30,30)



		//image(furby, furbyX, furbyY, 30, 30)


		//mouseDist = dist(mouseX, mouseY, furbyX, furbyY)

		// if(mouseDist < 15){
		// 	score ++
		// 	furbyX = random(16, windowWidth-16)
		// 	furbyY = random(16, windowHeight-16)

		// 	xSpeed = xSpeed * 1.2
		// 	ySpeed = ySpeed * 1.2
		// }

		for(let i= 0; i < ufoX.length; i++){
			image(ufo, ufoX[i], ufoY[i], 30, 30)

		//moving furby
			ufoX[i] = ufoX[i] + xSpeed[i]
			ufoY[i] = ufoY[i] + ySpeed[i]

			//change direction of furby
			if(ufoX[i] >= windowWidth - 15 || ufoX[i] <= 15){
				xSpeed[i] = xSpeed[i] * -1
			}

			if(ufoY[i] <= 15){
				ySpeed[i] = ySpeed[i] * -1
			}

			//did furby hit paddle if so reverse direction and multiply speed
			if(ufoY[i] >= windowHeight-55 && ufoX[i] < mouseX+paddleWidth/2 && ufoX[i] > mouseX-paddleWidth/2){
				ySpeed[i] = ySpeed[i] * -1.5



				if(ufoX.length < 6){
					ufoX.push(windowWidth/2)
					ufoY.push(windowHeight/2)
					xSpeed.push(2)
					ySpeed.push(2)

				}

			}
		}


		// moving good array
		for(let i=0;i<goodX.length; i++){
			for(let j = 0; j< ufoX.length; j++){
				image(goodArray,goodX[i], goodY[i], 30,30)
			//moving good array
				goodX[i] = goodX[i] + goodXSpeed[i]
				goodY[i] = goodY[i] + goodYSpeed[i]
			

			if(goodX[i] >= windowWidth - 15 || goodX[i] <= 15){
				goodXSpeed[i] = goodXSpeed[i] * -1
			}
			if(goodY[i] >= windowHeight -15 || goodY[i] <= 15){
				goodYSpeed[i] = goodYSpeed[i] * -1
			}

			// if(goodY[i] <= 15){
			// 	goodYSpeed[i] = goodYSpeed[i] * -1
			// }
			// if(goodY[i] >= 15){
			// 	goodYSpeed[i] = goodYSpeed[i] * -1
			// }

			if(dist(ufoX[j], ufoY[j], goodX[i], goodY[i]) < 15){
				goodX.splice(i, 1)
				goodY.splice(i, 1)
				goodXSpeed.splice(i, 1)
				goodYSpeed.splice(i, 1)
				score = score +2
			}
		}
	}
	

		//moving bad array 
		for(let i=0;i<badX.length; i++){
			for(let j = 0; j < ufoX.length; j++){
				image(badArray, badX[i], badY[i],30 ,30)
						//moving bad array
			
			badX[i] = badX[i] + badXSpeed[i]
			badY[i] = badY[i] +badYSpeed[i]
		
		
		if(badX[i] >= windowWidth - 15 || badX[i] <= 15){
			badXSpeed[i] = badXSpeed[i] * -1
		}
		if(badY[i] >= windowHeight - 15 || badY[i] <= 15){
			badYSpeed[i] = badYSpeed[i] * -1
		}

		

		if(dist(ufoX[j], ufoY[j], badX[i], badY[i]) < 15){
			badX.splice(i, 1)
			badY.splice(i, 1)
			badXSpeed.splice(i, 1)
			badYSpeed.splice(i, 1)
			score --
		}
	}
	}




	if(score>=20){
		winBool=true
		startBool=false
	}

}



	function winGame(){
		background(0, 0, 255)
		fill(255)
		textSize(40)
		text('You Win!!!', windowWidth/2, 50 )

		image(ufo, windowWidth/2, windowHeight/2, 500, 500)

		


	}
