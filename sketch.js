  let sceneOneBool = false
  let sceneTwoBool = false


  function setup(){

    createCanvas(600, 750);
    rectMode(CENTER)
    //frameRate(10);

  }

  function draw(){

    if (sceneOneBool == true){
      sceneOne()

    }
    if (sceneTwoBool == true){
      sceneTwo()
    }


    
  }


  function sceneOne(){
      
      orginalbackgroundA =200
      orginalbackgroundB=40
      orginalbackgroundC=100
    
    background(orginalbackgroundA, orginalbackgroundB, orginalbackgroundC);

 // point (100, 100)
 // line(100,50,500,475)
  //fill(200,100,200)
  //stroke(10, 10, 0)
  //ellipse(mouseX,mouseY, 100, 200)


  //fill(0,175,100)
      // triangle(300,50,450,200,300,200)
  //cirle style
    noStroke()
    fill(50,100,50)
 // circle(60,400,50)
    noStroke()
    fill(50,100,50)
 // circle(70,430,50)
    noStroke()
    fill(50,100,50)
 // circle(50,425,50)
    noStroke()
    fill(50,100,50)
 // circle(90,375,50)
    noStroke()
    fill(50,100,50)
 // circle(130,400,25)

  //Grass
 // fill(225)
//  circle(255,200,10)
    //pic frame
    stroke(700,750,100)
    strokeWeight(15)
    noFill(100,100,300)

  //picframe2.0
    stroke(700,750,100)
    strokeWeight(15)
    noFill(100,100,300)
  
      colorh =137
      colorj = 207
      colorf = 240
    
    fill(colorh,colorj,colorf);

    rect (300,375,400, 375);

//thunder

      colorq = 200
      colorw = 40
      colore = 100
    
    noStroke(0)
    fill(colorq, colorw,colore)
    rect(30,110,30,80)
    rect(45,140,60,30)
    triangle(70,125,90,125,55,210)
    noStroke(0)
    fill(colorq,colorw,colore)
    rect(100,65,30,70)
    rect(115,115,60,20)
    triangle(130,105,165,105,125,180)
  //thunder 2
    noStroke(0)
    fill(colorq,colorw,colore)
    rect(400,100,30,70)
    rect(415,125,60,20)
    triangle(430,115,465,115,425,180)
    noStroke(0)
    fill(colorq,colorw,colore)
    rect(320,100,30,70)
    rect(335,125,60,20)
    triangle(330,115,380,115,325,182)
  //Clouds
    stroke(10)
    strokeWeight(0)
    fill(67,70,75)
    circle(80,35,75)
    stroke(10)
    strokeWeight(0)
    fill(67,70,75)
    circle(50,50,50)
    stroke(10)
    strokeWeight(0)
    fill(67,70,75)
    circle(60,80,75)
    stroke(10)
    strokeWeight(0)
    fill(67,70,75)
    circle(40,35,75)
    stroke(10)
    strokeWeight(0)
    fill(67,70,75)
    circle(100,75,75)
    stroke(10)
    strokeWeight(0)
    fill(67,70,75)
    circle(25,75,75)
  //Clouds 2 
    stroke(10)
    strokeWeight(0)
    fill(67,70,75)
    circle(325,75,75)
    stroke(10)
    strokeWeight(0)
    fill(67,70,75)
    circle(425,75,75)
    stroke(10)
    strokeWeight(0)
    fill(67,70,75)
    circle(375,85,75)
    stroke(10)
    strokeWeight(0)
    fill(67,70,75)
    circle(345,55,75)
    stroke(10)
    strokeWeight(0)
    fill(67,70,75)
    circle(400,55,75)
    stroke(10)
    strokeWeight(0)
    fill(67,70,75)
    circle(375,40,75)
    //sun
 
      sungodownx=300
      sungodowny=300
      sungodowns=100
    
    fill(254,80,0)
    circle(sungodownx,sungodowny,sungodowns)
    fill(0,0,0)
//  circle(300,300,85)  
  //Grass
  //fill(225)
 // circle(,255,60)
  //Moon
   
     mooncolora= 225
     mooncolors=220
     mooncolord=225
   
   stroke(10)
   strokeWeight(0)
   fill(mooncolora,mooncolors,mooncolord)
   circle(525,75,175)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(550,85,15)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(500,35,15)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(550,25,22)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(500,130,10)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(470,80,4)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(490,100,4)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(580,120,4)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(560,100,4)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(490,1,4)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(580,30,4)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(565,10,4)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(490,100,4)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(580,120,4)
   stroke(2)
   strokeWeight(1)
   fill(58,59,60)
   circle(530,55,40)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(490,100,4)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(580,120,4)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(560,100,4)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(505,80,20)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(500,80,4)
   stroke(1)
   strokeWeight(1)
   fill(58,59,60)
   circle(550,80,4)
   stroke(10)
   strokeWeight(2)
   fill(58,59,60)
   circle(500,60,5)
   stroke(10)
   strokeWeight(2)
   fill(58,59,60)
   circle(560,60,5)
   stroke(10)
   strokeWeight(2)
   fill(58,59,60)
   circle(520,30,4)
     //sun

    sunpositionx = 300
    sunpositiony = 300
    sunpositions = 90
  

  fill(254,80,0)
  circle(sunpositionx, sunpositiony, sunpositions)
  
  fill(0,0,0)
  circle(300,300,85)
  
  //Cloud over moon
  stroke(10)
  strokeWeight(0)
  fill(67,70,75)
  circle(425,75,75)
  //trees in side pic
  stroke(1)
  fill(73,48,35)
  rect(220,455,30,200)
  stroke(1)
  fill(73,48,35)
  rect(400,425, 30, 200)
  //Tree leeves
  noStroke(0)
  fill(11,102,35)
  circle(400,330,55)
  noStroke(0)
  fill(11,102,35)
  circle(430,330,55)
  noStroke(0)
  fill(11,102,35)
  circle(370,330,55)
  noStroke(0)
  fill(11,102,35)
  circle(390,300,65)
  noStroke(0)
  fill(11,102,35)
  circle(410,300,65) 
  noStroke(0)
  fill(11,102,35)
  circle(400,280,60)
  //Tree leeves 2
  noStroke(0)
  fill(11,102,35)
  circle(220,350,55)
  noStroke(0)
  fill(11,102,35)
  circle(190,350,55)
  noStroke(0)
  fill(11,102,35)
  circle(250,350,55)
  noStroke(0)
  fill(11,102,35)
  circle(210,325,60)
  noStroke(0)
  fill(11,102,35)
  circle(230,325,60) 
  noStroke(0)
  fill(11,102,35)
  circle(220,300,55)
   //Grass
 // rect(137,525,60)
  //rect(137,500,60)
 
    triangleh = 400
    trianglez=400
  
  triangle(168,555,108,555,108,trianglez)
  triangle(108,555,216,555,162,triangleh)
  triangle(162,555,324,555,243,triangleh)
  triangle(243,555,400,555,330,triangleh)
  triangle(492,555,400,555,492,triangleh)
  triangle(450,555,350,555,400,triangleh)
}

function sceneTwo(){
    
  orginalbackgroundA =58
   orginalbackgroundB=51
  orginalbackgroundC=255
 
 background(orginalbackgroundA, orginalbackgroundB, orginalbackgroundC);
  
 // point (100, 100)
 // line(100,50,500,475)
  //fill(200,100,200)
  //stroke(10, 10, 0)
  //ellipse(mouseX,mouseY, 100, 200)

 
  //fill(0,175,100)
      // triangle(300,50,450,200,300,200)
  //cirle style
  noStroke()
  fill(50,100,50)
 // circle(60,400,50)
   noStroke()
  fill(50,100,50)
 // circle(70,430,50)
   noStroke()
  fill(50,100,50)
 // circle(50,425,50)
   noStroke()
  fill(50,100,50)
 // circle(90,375,50)
   noStroke()
  fill(50,100,50)
 // circle(130,400,25)
  
  //Grass
 // fill(225)
//  circle(255,200,10)
    //pic frame
 stroke(700,750,100)
  strokeWeight(15)
  noFill(100,100,300)
  
  //picframe2.0
   stroke(700,750,100)
  strokeWeight(15)
  noFill(100,100,300)

    colorh = 0
    colorj = 0
    colorf = 0
 
  fill(colorh,colorj,colorf);
  
 rect (300,375,400, 375);
  
//thunder
 
    colorq = 253
    colorw = 231
    colore = 58

  noStroke(0)
  fill(colorq, colorw,colore)
  rect(30,110,30,80)
  rect(45,140,60,30)
  triangle(70,125,90,125,55,210)
  noStroke(0)
  fill(colorq,colorw,colore)
  rect(100,65,30,70)
  rect(115,115,60,20)
  triangle(130,105,165,105,125,180)
  //thunder 2
   noStroke(0)
  fill(colorq,colorw,colore)
  rect(400,100,30,70)
  rect(415,125,60,20)
  triangle(430,115,465,115,425,180)
   noStroke(0)
  fill(colorq,colorw,colore)
  rect(320,100,30,70)
  rect(335,125,60,20)
  triangle(330,115,380,115,325,182)
  //Clouds
  stroke(10)
  strokeWeight(0)
  fill(67,70,75)
  circle(80,35,75)
   stroke(10)
  strokeWeight(0)
  fill(67,70,75)
  circle(50,50,50)
   stroke(10)
  strokeWeight(0)
  fill(67,70,75)
  circle(60,80,75)
    stroke(10)
  strokeWeight(0)
  fill(67,70,75)
  circle(40,35,75)
    stroke(10)
  strokeWeight(0)
  fill(67,70,75)
  circle(100,75,75)
    stroke(10)
  strokeWeight(0)
  fill(67,70,75)
  circle(25,75,75)
  //Clouds 2 
     stroke(10)
  strokeWeight(0)
  fill(67,70,75)
  circle(325,75,75)
    stroke(10)
  strokeWeight(0)
  fill(67,70,75)
  circle(425,75,75)
   stroke(10)
  strokeWeight(0)
  fill(67,70,75)
  circle(375,85,75)
   stroke(10)
  strokeWeight(0)
  fill(67,70,75)
  circle(345,55,75)
   stroke(10)
  strokeWeight(0)
  fill(67,70,75)
  circle(400,55,75)
   stroke(10)
  strokeWeight(0)
  fill(67,70,75)
  circle(375,40,75)
    //sun
 
    sungodownx=300
    sungodowny=700
    sungodowns=0
  
  fill(254,80,0)
  circle(sungodownx,sungodowny,sungodowns)
  fill(0,0,0)
//  circle(300,300,85)  
  //Grass
  //fill(225)
 // circle(,255,60)
  //Moon
  
    mooncolora=253
      mooncolors=28
    mooncolord=53
  
   stroke(10)
  strokeWeight(0)
  fill(mooncolora,mooncolors,mooncolord)
  circle(525,75,175)
  stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(550,85,15)
  stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(500,35,15)
  stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(550,25,22)
   stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(500,130,10)
     stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(470,80,4)
    stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(490,100,4)
     stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(580,120,4)
    stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(560,100,4)
      stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(490,1,4)
     stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(580,30,4)
    stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(565,10,4)
      stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(490,100,4)
     stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(580,120,4)
    stroke(2)
  strokeWeight(1)
  fill(58,59,60)
  circle(530,55,40)
      stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(490,100,4)
     stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(580,120,4)
    stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(560,100,4)
   stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(505,80,20)
   stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(500,80,4)
    stroke(1)
  strokeWeight(1)
  fill(58,59,60)
  circle(550,80,4)
    stroke(10)
  strokeWeight(2)
  fill(58,59,60)
  circle(500,60,5)
     stroke(10)
  strokeWeight(2)
  fill(58,59,60)
  circle(560,60,5)
     stroke(10)
  strokeWeight(2)
  fill(58,59,60)
  circle(520,30,4)
     //sun
  
    sunpositionx = 300
    sunpositiony = 440
    sunpositions = 120
      


  fill(254,80,0)
  circle(sunpositionx, sunpositiony, sunpositions)
  
  fill(0,0,0)
  circle(300,300,85)
  
  //Cloud over moon
   stroke(10)
  strokeWeight(0)
  fill(67,70,75)
  circle(425,75,75)
  //trees in side pic
  stroke(1)
  fill(73,48,35)
  rect(220,455,30,200)
    stroke(1)
  fill(73,48,35)
  rect(400,425, 30, 200)
  //Tree leeves
  noStroke(0)
  fill(11,102,35)
  circle(400,330,55)
  noStroke(0)
  fill(11,102,35)
  circle(430,330,55)
    noStroke(0)
  fill(11,102,35)
  circle(370,330,55)
    noStroke(0)
  fill(11,102,35)
  circle(390,300,65)
     noStroke(0)
  fill(11,102,35)
  circle(410,300,65) 
    noStroke(0)
  fill(11,102,35)
  circle(400,280,60)
  //Tree leeves 2
   noStroke(0)
  fill(11,102,35)
  circle(220,350,55)
  noStroke(0)
  fill(11,102,35)
  circle(190,350,55)
    noStroke(0)
  fill(11,102,35)
  circle(250,350,55)
    noStroke(0)
  fill(11,102,35)
  circle(210,325,60)
     noStroke(0)
  fill(11,102,35)
  circle(230,325,60) 
    noStroke(0)
  fill(11,102,35)
  circle(220,300,55)
   //Grass
 // rect(137,525,60)
  //rect(137,500,60)

    triangleh = 500
    trianglez = 500

   triangle(168,555,108,555,108,trianglez)
  triangle(108,555,216,555,162,triangleh)
  triangle(162,555,324,555,243,triangleh)
  triangle(243,555,400,555,330,triangleh)
  triangle(492,555,400,555,492,triangleh)
  triangle(450,555,350,555,400,triangleh)

}

function keyPressed(){

  if(key === 'q'){
    sceneOneBool = true
    sceneTwoBool = false
  }

  if (key ==='w'){
    sceneOneBool = false
    sceneTwoBool = true
  }




}

