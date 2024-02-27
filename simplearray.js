


let squareNums = [25, 36, 49, 64, 81, 100]
let furby

function preload(){


	furby = loadImage("furby.png")


}


function setup(){


createCanvas(windowWidth,windowHeight)

print(squareNums.length)

for(let i = 0;i < squareNums.length; i++ ){

let xPos = random(100,windowWidth-100)
let yPos = random(100,windowHeight-100)
fill(225,60,100)
image(furby,xPos,yPos, squareNums[i], squareNums[i])
text(squareNums[i], xPos, yPos+5)
}



}
function draw(){

for(let i = 0;i<100; i++){

	image(furby, random(windowWidth),random(windowHeight),30,30)
	//sellipse(random(windowWidth),random(windowHeight),30,30)
}


}