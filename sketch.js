
Var=(sol=50)


function setup() {
  createCanvas(500, 500);
  
  
}

function draw() {
  
  background(58, 206, 232 );// blue sky

  fill(6, 198, 29  )//gree glass
  triangle(1, 220, 70, 60, 180, 220);//mountain 1
  triangle(180, 220, 300, 50, 400, 220);//mountain 2
  triangle(400, 220, 480, 35, 600, 220);//mountain 3

  fill(159, 161, 190  )//gray
  rect(2, 180, 80, 320, 15);//column 1
  rect(220, 180, 80, 320, 15);//column 2
  rect(420, 180, 80, 320, 15);//column 3
  rect(0,300,500,200);//block
  
  line(70, 180, 70, 130);
  fill(184, 26, 26 )//dark red
  triangle(70, 180, 70, 130, 150, 180);//flag
  triangle(280, 180, 280, 130, 365, 180);//flag 2

  fill(206, 128, 14 )//orange
  ellipse(250, 450, 150, 250);//door
  
fill(245, 252, 8)//plain yellow
  ellipse(mouseX,25,50,50)//sun
  
   
  }

