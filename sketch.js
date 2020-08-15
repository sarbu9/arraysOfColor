let b1 = [];
function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < 25; i ++){
    b1[i] = new Ball(random(0, width),random(0, height));
  }
}

function draw() {
  background(50);
  for(let i = 0; i< b1.length; i ++){
  b1[i].show();
  }
}
class Ball{
  constructor(ballX, ballY){
    this.x;
    this.y;
    this.ballX = ballX;
    this.ballY = ballY;
  }
  show(){
    this.x = map(mouseX, 0, width, 0, 255);
    this.y = map(mouseY, 0, height, 0, 255);
    fill(this.x, this.y, 255);
    ellipse(this.ballX, this.ballY, 20, 20);
  }
}