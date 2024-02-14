

let basketball

let basketballX
let basketballY


function setup(){

    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER)

    basketballX = windowWidth/2
    basketballY = windowHeight/2
}

function draw(){

	background(0)
	fill(225);
	textSize(40)
	text('Catch the basketball! Your score is ' + score + ' points!!!', windowWidth/2, 100)

	image(basketball, basketballX, basketballY, 30, 30)
}