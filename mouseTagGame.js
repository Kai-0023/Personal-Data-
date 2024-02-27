

let furby

let furbyY
let furbyX

let xSpeed = 5
let ySpeed = 8

let score = 0

let mouseDist


let startBool = true
let winBool = false

function draw(){
if(startBool == true){
	startGame()
}
if(winBool == true){
	winGame
}





}
function preload(){
furby =loadImage('furby.png')

}

function setup(){

createCanvas(windowWidth,windowHeight)
imageMode(CENTER)

furbyX = windowWidth/2
furbyY = windowHeight/2

}

function draw(){

	background(0)
	fill(225);
	textSize(40)
	text('Tag the Furby! Your score is ' + score + ' points!!!', windowWidth/2, 100)

	image(furby, furbyX, furbyY, 30, 30)



	mouseDist = dist(mouseX, mouseY, furbyX, furbyY)

	if(mouseDist < 15) {
		score ++
		furbyX = random(16,windownWidth-16)
		furbyY = random(16, windowHeight-16)



		xSpeed = xSpeed * 1.5
		ySpeed = ySpeed * 1.5
	}
// Moving furby
furbyX = furbyX + xSpeed
furbyY = furbyY + ySpeed
//change direction
if(furbyX >= windowWidth -15 || furbyX <= 15){
xSpeed = xSpeed * -1
}
//change direction
if(furbyY >= windowHeight -15 || furbyY <= 15){
ySpeed = ySpeed* -1
}


	if(score == 5){
		winBool=true
		startBool=false
	}

}
function winGame(){
background(0)
fill(225)
textSize(40)
text('You Win!!!', windowHeight-16)

image(furby, windowWidth/2, windowHeight/2, 500, 500)
}
