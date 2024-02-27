
let x = []

let y = []

let furby 

function preload(){

furby = loadImage("furby.png")

}

function setup(){
createCanvas(windowWidth, windowHeight)
imageMode(CENTER)

}


function draw(){
background(0)
for(let i=0; i<x.length; i++) {
image(furby,x[i],y[i], 60, 60)
if(dist(mouseX,mouseY,x[i],y[i] <30)
		x.splice(i,1)
		y.splice(i,1)
			}

}

}
print(x.length)

function mousePressed(){

x.push(mouseX)
y.push(mouseY)

}





function keyPressed(){



	if(key == 'x'){
		x.push(random(windowWidth))
		y.push(random(windowHeight))

	}

if (key == 'c'){

	x.splice(0, x.length)
	y.splice(0, y.length)

}

}