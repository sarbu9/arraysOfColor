let b1 = [];
let b2 = [];
function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 50; i ++){
    b1[i] = new Ball(random(0, width),random(0, height));
  }
  for(let z = 0; z < 50; z ++){
    b2[z] = new Ball(random(0, width),random(0, height));
  }
}

function draw() {
  background(50);
  for(let i = 0; i< b1.length; i ++){
    b1[i].showA();
  }
  for(let z = 0; z< b2.length; z ++){
    b2[z].showB(); 
  }
}
class Ball{
  constructor(ballX, ballY){
    this.x;
    this.y;
    this.ballX = ballX;
    this.ballY = ballY;
  }
  showA(){
    this.x = map(mouseX, 0, width, 0, 255);
    this.y = map(mouseY, 0, height, 0, 255);
    fill(this.x, this.y, 255);
    ellipse(this.ballX, this.ballY, 20, 20);
  }
    showB(){
    this.x = map(mouseX, 0, width, 255, 0);
    this.y = map(mouseY, 0, height, 255, 0);
    fill(this.x, this.y, 255);
    ellipse(this.ballX, this.ballY, 20, 20);
  }
}
