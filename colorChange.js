let colorChangeButton

let colorChangeButtonOff
let playButton

let canvas
let modem


let drawBool = true

function preload(){
	modem = loadSound('ModemSound.mp3')
}


function setup(){

	canvas = createCanvas(windowWidth, windowHeight)
	canvas.position(0,0)
	canvas.style('z-index', '-1')

	background(140)

	colorChangeButton = createButton('Change background')
	colorChangeButton.position(600, 400)
	colorChangeButton.mousePressed(backgroundColorChange)

	colorChangeButtonOff = createButton('turn off pencil')
	colorChangeButtonOff.position(200,200)
	colorChangeButtonOff.mousePressed(turnOffPencil)

	playButton = createButton('play Button')
	playButton.position(200, 400)
	playButton.mousePressed(playModem)
}


function playModem(){
	if(!modem.isPlaying()){
		modem.play();
		playButton.html('pause modem')
	}else{
		modem.pause();
		button.html('play modem')
	}



}



function turnOffPencil(){
	drawBool = false
}

function backgroundColorChange(){
	background(random(255), random(255),random(255))

}

function draw(){
	if(drawBool == true) {
		line(mouseX, mouseY, pmouseX, pmouseY);
	}

}
